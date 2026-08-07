#!/usr/bin/env node
// Generates one conformant Agent Plugin per platform from One's knowledge base.
//
//   ONE_SECRET=... node scripts/generate-platform-plugins.mjs [options]
//
//   --platform <slug>   generate one platform (repeatable)
//   --limit <n>         cap how many platforms to generate
//   --out <dir>         output directory (default: dist)
//   --concurrency <n>   parallel platform fetches (default: 6)
//
// Each emitted plugin is a self-contained directory:
//
//   one-shopify/
//   ├── plugin.json
//   ├── mcp.json          same hosted server every time
//   └── skills/shopify/SKILL.md
//
// The SKILL.md is the point. It carries the platform's real action ids,
// HTTP methods and paths, so an agent can execute a common operation without
// spending a turn on search, and cannot invent an action that does not exist.
// That table is generated from the knowledge base, never written by hand.

import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validatePlugin } from "./lib/validate-plugin.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPEC = "1.0.0";
const MCP_URL = "https://mcp.withone.ai/mcp";
const PICA_API = "https://api.picaos.com/v1/available-connectors";
const ONE_API = "https://api.withone.ai";

// How much of a platform's catalog goes in the skill. Big platforms have
// hundreds of actions; a skill has a context budget and a 500-line ceiling.
const MAX_ACTIONS = 90;
const MAX_PER_MODEL = 12;

const SECRET = process.env.ONE_SECRET || process.env.NEXT_PUBLIC_PICA_SECRET_KEY;
if (!SECRET) {
  console.error("Set ONE_SECRET (or NEXT_PUBLIC_PICA_SECRET_KEY) before running.");
  process.exit(1);
}

// --- args -------------------------------------------------------------------
const argv = process.argv.slice(2);
const opt = (flag, fallback) => {
  const i = argv.indexOf(flag);
  return i === -1 ? fallback : argv[i + 1];
};
const only = argv.reduce((acc, a, i) => (a === "--platform" ? [...acc, argv[i + 1]] : acc), []);
const limit = Number(opt("--limit", 0));
const outDir = resolve(opt("--out", join(ROOT, "dist")));
const concurrency = Number(opt("--concurrency", 6));

// --- fetch helpers ----------------------------------------------------------
async function getJson(url, header) {
  const res = await fetch(url, { headers: { [header]: SECRET } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${url}`);
  return res.json();
}

async function fetchPlatforms() {
  const all = [];
  let page = 1;
  let pages = 1;
  do {
    const data = await getJson(`${PICA_API}?limit=50&page=${page}`, "x-pica-secret");
    pages = data.pages;
    all.push(...data.rows);
    page++;
  } while (page <= pages);
  // Pagination cache drift can repeat a row, so dedupe by slug.
  const seen = new Set();
  return all
    .filter((p) => p.active)
    .filter((p) => (seen.has(p.platform) ? false : seen.add(p.platform)));
}

async function fetchActions(slug) {
  const first = await getJson(`${ONE_API}/open/knowledge/${slug}/actions?page=1`, "x-one-secret");
  const rows = [...(first.rows ?? [])];
  const rest = await Promise.all(
    Array.from({ length: Math.max(0, (first.pages ?? 1) - 1) }, (_, i) =>
      getJson(`${ONE_API}/open/knowledge/${slug}/actions?page=${i + 2}`, "x-one-secret")
        .then((d) => d.rows ?? [])
        .catch(() => [])
    )
  );
  return { rows: rows.concat(rest.flat()), total: first.total ?? rows.length };
}

async function fetchAuthMeta(slug) {
  try {
    const { markdown } = await getJson(`${ONE_API}/open/knowledge/${slug}/auth`, "x-one-secret");
    if (!markdown) return {};
    const fm = markdown.match(/^---\n([\s\S]*?)\n---/);
    if (!fm) return {};
    const field = (k) => fm[1].match(new RegExp(`^${k}:\\s*(.+)$`, "m"))?.[1].trim();
    return { name: field("name"), description: field("description"), category: field("category") };
  } catch {
    return {};
  }
}

// --- name rules -------------------------------------------------------------
// Agent Skills names allow [a-z0-9-] with no leading, trailing or doubled
// hyphen. Plugin names (spec 5.5) also allow periods. Normalize to the
// stricter set so one slug is legal as both.
function normalizeName(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const escapePipes = (s) => String(s ?? "").replace(/\|/g, "\\|");

// Platform blurbs arrive with and without a trailing period, so normalize
// before joining rather than emitting "financial reporting.. Read and write".
const sentence = (s) => String(s ?? "").trim().replace(/\.+$/, "");

// modelName casing is per-platform: Shopify sends "Order", QuickBooks sends
// "salesreceipts". Capitalize for display only. Do not try to guess word
// boundaries inside a run-together name; a wrong split reads worse than none.
const heading = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "Other");

// --- skill body -------------------------------------------------------------
// A skill must stay under 500 lines. Action count alone does not predict that:
// a platform with 90 single-action models spends more lines on table headers
// than on rows. So build, measure, and shrink until it fits.
function buildSkill(slug, meta, actions, total) {
  for (let budget = MAX_ACTIONS; budget >= 10; budget -= 10) {
    const body = renderSkill(slug, meta, actions, total, budget);
    if (body.split("\n").length <= 480) return body;
  }
  return renderSkill(slug, meta, actions, total, 10);
}

function renderSkill(slug, meta, actions, total, maxActions) {
  const label = meta.name || slug;
  const skillName = normalizeName(slug);

  // Group by the resource the action operates on, biggest group first, so the
  // table reads like the platform's own object model.
  const byModel = new Map();
  for (const a of actions) {
    const model = a.modelName || "Other";
    if (!byModel.has(model)) byModel.set(model, []);
    byModel.get(model).push(a);
  }
  const groups = [...byModel.entries()].sort((a, b) => b[1].length - a[1].length);

  let budget = maxActions;
  const shown = [];
  for (const [model, list] of groups) {
    if (budget <= 0) break;
    // Reads first: an agent usually needs to find a record before touching it.
    const ordered = [...list].sort((a, b) => {
      const rank = (m) => (m === "GET" ? 0 : 1);
      return rank(a.method) - rank(b.method) || a.title.localeCompare(b.title);
    });
    const take = ordered.slice(0, Math.min(MAX_PER_MODEL, budget));
    budget -= take.length;
    shown.push([model, take, list.length]);
  }

  const listedCount = shown.reduce((n, [, take]) => n + take.length, 0);
  const topModels = groups.slice(0, 6).map(([m]) => m.toLowerCase());

  // Agent Skills caps description at 1024 chars, and it is the only part
  // loaded at startup, so it has to carry the trigger words.
  let description =
    `Read and write ${label} data through One: ${topModels.join(", ")} and more, ` +
    `${total} actions with real parameter documentation. ` +
    `Use whenever the user asks to look something up in ${label}, create or update a record there, ` +
    `or build code against the ${label} API.`;
  if (meta.description) description = `${sentence(meta.description)}. ${description}`;
  if (description.length > 1024) description = `${description.slice(0, 1020).trimEnd()}...`;

  const tables = shown
    .map(([model, take, groupTotal]) => {
      const rows = take
        .map((a) => `| ${escapePipes(a.title)} | ${a.method} | \`${escapePipes(a.path)}\` | \`${a.id}\` |`)
        .join("\n");
      const more = groupTotal > take.length ? `\n\n${groupTotal - take.length} more ${heading(model)} actions are available through search.` : "";
      return `### ${heading(model)}\n\n| Action | Method | Path | Action id |\n|---|---|---|---|\n${rows}${more}`;
    })
    .join("\n\n");

  const remainder =
    total > listedCount
      ? `\nThis lists ${listedCount} of ${total} actions. For anything not here, ` +
        `call \`search_one_platform_actions\` with platform \`${slug}\`. The full catalog is at ` +
        `https://www.withone.ai/knowledge/${slug}.\n`
      : "";

  return `---
name: ${skillName}
description: ${description}
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ${slug}
  generated-from: one-knowledge-base
---

# ${label} through One

${meta.description ? sentence(meta.description) + ".\n\n" : ""}One exposes ${label} through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call \`search_one_platform_actions\` with platform \`${slug}\` if it is not listed.
2. Call \`get_one_action_knowledge\` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call \`execute_one_action\` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call \`list_one_integrations\` once and confirm ${label} is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an \`access\` field. If it reports \`{"policy": "methods", "methods": ["GET"]}\` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ${label} account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

${tables}
${remainder}
## When a call fails

The error comes from ${label}, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/${slug}

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
`;
}

// --- emit -------------------------------------------------------------------
function emit(platform, meta, actions, total) {
  const slug = platform.platform;
  const skillName = normalizeName(slug);
  const pluginName = `one-${skillName}`;
  const dir = join(outDir, pluginName);
  const label = meta.name || platform.name || slug;

  mkdirSync(join(dir, "skills", skillName), { recursive: true });

  const manifest = {
    $schema: `https://agent-plugins.org/schemas/${SPEC}/plugin.schema.json`,
    name: pluginName,
    version: "1.0.0",
    description: `${label} in your agent through One. ${total} actions with real API documentation, OAuth handled, no tokens to manage.`,
    author: { name: "One Systems, Inc.", email: "support@withone.ai", url: "https://www.withone.ai" },
    homepage: `https://www.withone.ai/knowledge/${slug}`,
    repository: "https://github.com/withoneai/one-agent-plugin",
    license: "One-Knowledge-1.0",
    keywords: [skillName, "integrations", "mcp", "api", meta.category?.toLowerCase()].filter(Boolean),
  };

  const mcp = {
    $schema: `https://agent-plugins.org/schemas/${SPEC}/mcp.schema.json`,
    mcpServers: { one: { type: "streamable-http", url: MCP_URL } },
  };

  writeFileSync(join(dir, "plugin.json"), JSON.stringify(manifest, null, 2) + "\n");
  writeFileSync(join(dir, "mcp.json"), JSON.stringify(mcp, null, 2) + "\n");
  writeFileSync(join(dir, "skills", skillName, "SKILL.md"), buildSkill(slug, meta, actions, total));

  return { dir, pluginName };
}

// --- run --------------------------------------------------------------------
const started = process.hrtime.bigint();
let platforms = await fetchPlatforms();
console.log(`${platforms.length} active platforms in the catalog`);

if (only.length) platforms = platforms.filter((p) => only.includes(p.platform));
if (limit) platforms = platforms.slice(0, limit);
if (!platforms.length) {
  console.error("No platforms matched.");
  process.exit(1);
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const generated = [];
const skipped = [];

// Bounded concurrency: the knowledge API is a shared service, not ours to flood.
const queue = [...platforms];
await Promise.all(
  Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) {
      const platform = queue.shift();
      const slug = platform.platform;
      try {
        const [{ rows, total }, meta] = await Promise.all([fetchActions(slug), fetchAuthMeta(slug)]);
        if (!rows.length) {
          skipped.push(`${slug}: no actions in the knowledge base`);
          continue;
        }
        const { dir, pluginName } = emit(platform, meta, rows, total);
        const { errors } = validatePlugin(dir);
        if (errors.length) {
          // A plugin that does not validate never ships. Drop it and say why.
          rmSync(dir, { recursive: true, force: true });
          skipped.push(`${slug}: ${errors[0]}`);
          continue;
        }
        generated.push({ pluginName, slug, actions: total });
      } catch (e) {
        skipped.push(`${slug}: ${e.message}`);
      }
    }
  })
);

generated.sort((a, b) => b.actions - a.actions);
const elapsed = Number(process.hrtime.bigint() - started) / 1e9;

console.log(`\nGenerated ${generated.length} plugin(s) into ${outDir} in ${elapsed.toFixed(1)}s`);
for (const g of generated.slice(0, 20)) console.log(`  ${g.pluginName.padEnd(28)} ${String(g.actions).padStart(5)} actions`);
if (generated.length > 20) console.log(`  ... and ${generated.length - 20} more`);

// Never let a silent cap read as full coverage.
if (skipped.length) {
  console.log(`\nSkipped ${skipped.length}:`);
  for (const s of skipped.slice(0, 15)) console.log(`  ${s}`);
  if (skipped.length > 15) console.log(`  ... and ${skipped.length - 15} more`);
}

writeFileSync(
  join(outDir, "index.json"),
  JSON.stringify({ spec: SPEC, count: generated.length, plugins: generated }, null, 2) + "\n"
);
console.log(`\nEvery generated plugin passed validation. Index at ${join(outDir, "index.json")}`);
