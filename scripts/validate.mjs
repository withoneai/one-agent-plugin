#!/usr/bin/env node
// Validates this plugin against Agent Plugins 1.0.0 and Agent Skills.
// Schemas are vendored under schemas/ because the spec forbids clients
// fetching a schema at load time; we hold ourselves to the same rule.
//
//   node scripts/validate.mjs
//
// Exits non-zero on any violation.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv/dist/2020.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SPEC = "1.0.0";
const PLUGIN_SCHEMA_ID = `https://agent-plugins.org/schemas/${SPEC}/plugin.schema.json`;
const MCP_SCHEMA_ID = `https://agent-plugins.org/schemas/${SPEC}/mcp.schema.json`;

const errors = [];
const checks = [];
const fail = (m) => errors.push(m);
const pass = (m) => checks.push(m);

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const ajv = new Ajv({ allErrors: true, strict: false });

// --- plugin.json (spec 5.2, 5.3, 5.5) -------------------------------------
const manifestPath = join(ROOT, "plugin.json");
if (!existsSync(manifestPath)) {
  fail("plugin.json is missing at the plugin root (spec 4.1)");
} else {
  const manifest = readJson(manifestPath);
  const validate = ajv.compile(readJson(join(ROOT, "schemas", SPEC, "plugin.schema.json")));
  if (!validate(manifest)) {
    for (const e of validate.errors) fail(`plugin.json${e.instancePath} ${e.message}`);
  } else {
    pass(`plugin.json validates against ${SPEC} manifest schema`);
  }
  if (manifest.$schema !== PLUGIN_SCHEMA_ID) {
    fail(`plugin.json $schema must be exactly ${PLUGIN_SCHEMA_ID} (spec 5.2)`);
  }
  // 5.5 name constraints, restated so a schema swap cannot silently drop them
  const n = manifest.name ?? "";
  if (!/^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/.test(n) || /--|\.\./.test(n) || n.length > 64) {
    fail(`plugin name "${n}" violates the 5.5 naming constraints`);
  } else {
    pass(`plugin name "${n}" satisfies the 5.5 naming constraints`);
  }
}

// --- mcp.json (spec 7.2) ---------------------------------------------------
const mcpPath = join(ROOT, "mcp.json");
if (existsSync(mcpPath)) {
  const mcp = readJson(mcpPath);
  const validate = ajv.compile(readJson(join(ROOT, "schemas", SPEC, "mcp.schema.json")));
  if (!validate(mcp)) {
    for (const e of validate.errors) fail(`mcp.json${e.instancePath} ${e.message}`);
  } else {
    pass(`mcp.json validates against ${SPEC} MCP schema`);
  }
  if (mcp.$schema !== MCP_SCHEMA_ID) {
    fail(`mcp.json $schema must be exactly ${MCP_SCHEMA_ID} (spec 7.2.1)`);
  }
  // 10.1: mcp.json and plugin.json must target the same spec version
  const pv = readJson(manifestPath).$schema?.match(/schemas\/([^/]+)\//)?.[1];
  const mv = mcp.$schema?.match(/schemas\/([^/]+)\//)?.[1];
  if (pv !== mv) fail(`mcp.json targets ${mv} but plugin.json targets ${pv} (spec 10.1)`);

  for (const [name, server] of Object.entries(mcp.mcpServers ?? {})) {
    const before = errors.length;
    // 7.2.1: no secrets in headers or env; they are visible package data
    const suspect = /authorization|api[-_]?key|token|secret|password|bearer/i;
    for (const key of Object.keys(server.headers ?? {})) {
      if (suspect.test(key)) fail(`mcp server "${name}" header "${key}" looks like a credential (spec 7.2.1 forbids secrets in headers)`);
    }
    for (const [key, value] of Object.entries(server.env ?? {})) {
      if (key === "PLUGIN_ROOT" || key === "PLUGIN_DATA") {
        fail(`mcp server "${name}" env must not set reserved ${key} (spec 9.2)`);
      }
      if (suspect.test(key) || suspect.test(String(value))) {
        fail(`mcp server "${name}" env "${key}" looks like a credential (spec 9.2 forbids secrets in env)`);
      }
    }
    // 7.2.1: non-loopback remote endpoints must be HTTPS
    if (server.url) {
      const u = new URL(server.url);
      const loopback = u.hostname === "localhost" || /^127\./.test(u.hostname) || u.hostname === "::1";
      if (u.protocol !== "https:" && !loopback) fail(`mcp server "${name}" must use HTTPS (spec 7.2.1)`);
      if (u.hash) fail(`mcp server "${name}" url must not contain a fragment (spec 7.2.1)`);
      if (u.username || u.password) fail(`mcp server "${name}" url must not contain user information (spec 7.2.1)`);
    }
    // 4.1: plugin-relative paths must start with ./ and stay inside the root
    for (const field of ["command", "cwd"]) {
      const v = server[field];
      if (typeof v !== "string") continue;
      if (v.startsWith("${PLUGIN_ROOT}") || v.startsWith("${PLUGIN_DATA}")) continue;
      if (field === "cwd" && !v.startsWith("./")) fail(`mcp server "${name}" cwd "${v}" is not a plugin-relative path (spec 7.2.1)`);
      if (v.startsWith("./") && !resolve(ROOT, v).startsWith(ROOT)) {
        fail(`mcp server "${name}" ${field} "${v}" escapes the plugin root (spec 4.1)`);
      }
    }
    if (errors.length === before) pass(`mcp server "${name}" (${server.type}) is a valid server entry`);
  }
}

// --- skills/ (spec 6.1, 7.1 + Agent Skills frontmatter) --------------------
const skillsDir = join(ROOT, "skills");
if (existsSync(skillsDir)) {
  if (!statSync(skillsDir).isDirectory()) {
    fail("skills exists but is not a directory (spec 6.2)");
  } else {
    const dirs = readdirSync(skillsDir).filter((d) => statSync(join(skillsDir, d)).isDirectory());
    if (!dirs.length) fail("skills/ contains no skill directories");
    for (const dir of dirs) {
      const skillPath = join(skillsDir, dir, "SKILL.md");
      if (!existsSync(skillPath)) {
        fail(`skills/${dir} has no SKILL.md and will be skipped by clients (spec 7.1)`);
        continue;
      }
      const raw = readFileSync(skillPath, "utf8");
      const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
      if (!fm) {
        fail(`skills/${dir}/SKILL.md has no YAML frontmatter`);
        continue;
      }
      const name = fm[1].match(/^name:\s*(.+)$/m)?.[1].trim();
      const description = fm[1].match(/^description:\s*(.+)$/m)?.[1].trim();
      if (!name) fail(`skills/${dir}: frontmatter name is required`);
      else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name.length > 64) {
        fail(`skills/${dir}: name "${name}" violates the Agent Skills name rules`);
      } else if (name !== dir) {
        fail(`skills/${dir}: name "${name}" must match its directory name`);
      }
      if (!description) fail(`skills/${dir}: frontmatter description is required`);
      else if (description.length > 1024) fail(`skills/${dir}: description exceeds 1024 characters`);
      const lines = raw.split("\n").length;
      if (lines > 500) fail(`skills/${dir}/SKILL.md is ${lines} lines; keep it under 500`);
      if (!errors.some((e) => e.includes(`skills/${dir}`))) {
        pass(`skills/${dir} is a valid skill (${lines} lines, description ${description.length} chars)`);
      }
    }
  }
}

for (const c of checks) console.log(`  ok   ${c}`);
for (const e of errors) console.error(`  FAIL ${e}`);
console.log(
  errors.length
    ? `\n${errors.length} violation(s) of Agent Plugins ${SPEC}`
    : `\nConformant with Agent Plugins ${SPEC} (${checks.length} checks)`
);
process.exit(errors.length ? 1 : 0);
