// Conformance rules for Agent Plugins 1.0.0, in one place.
//
// Both the CLI validator and the per-platform generator call this, so a
// generated plugin is held to exactly the same rules as the hand-written one.
// Schemas are vendored under schemas/ because the spec forbids clients
// fetching a schema at load time (5.2); we hold ourselves to the same rule.

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv from "ajv/dist/2020.js";

const HERE = dirname(fileURLToPath(import.meta.url));
export const SPEC = "1.0.0";
const PLUGIN_SCHEMA_ID = `https://agent-plugins.org/schemas/${SPEC}/plugin.schema.json`;
const MCP_SCHEMA_ID = `https://agent-plugins.org/schemas/${SPEC}/mcp.schema.json`;

const schemaDir = join(HERE, "..", "..", "schemas", SPEC);
const ajv = new Ajv({ allErrors: true, strict: false });
const validateManifest = ajv.compile(readJson(join(schemaDir, "plugin.schema.json")));
const validateMcp = ajv.compile(readJson(join(schemaDir, "mcp.schema.json")));

function readJson(p) {
  return JSON.parse(readFileSync(p, "utf8"));
}

/**
 * @param {string} root absolute path to a plugin directory
 * @returns {{checks: string[], errors: string[]}}
 */
export function validatePlugin(root) {
  const errors = [];
  const checks = [];
  const fail = (m) => errors.push(m);
  const pass = (m) => checks.push(m);

  // --- plugin.json (5.2, 5.3, 5.5) ----------------------------------------
  const manifestPath = join(root, "plugin.json");
  let manifest = null;
  if (!existsSync(manifestPath)) {
    fail("plugin.json is missing at the plugin root (spec 4.1)");
  } else {
    try {
      manifest = readJson(manifestPath);
    } catch (e) {
      fail(`plugin.json is not valid JSON: ${e.message}`);
    }
  }

  if (manifest) {
    if (!validateManifest(manifest)) {
      for (const e of validateManifest.errors) fail(`plugin.json${e.instancePath} ${e.message}`);
    } else {
      pass(`plugin.json validates against ${SPEC} manifest schema`);
    }
    if (manifest.$schema !== PLUGIN_SCHEMA_ID) {
      fail(`plugin.json $schema must be exactly ${PLUGIN_SCHEMA_ID} (spec 5.2)`);
    }
    // 5.5, restated so a schema swap cannot silently drop it
    const n = manifest.name ?? "";
    if (!/^[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?$/.test(n) || /--|\.\./.test(n) || n.length > 64) {
      fail(`plugin name "${n}" violates the 5.5 naming constraints`);
    } else {
      pass(`plugin name "${n}" satisfies the 5.5 naming constraints`);
    }
  }

  // --- mcp.json (7.2) ------------------------------------------------------
  const mcpPath = join(root, "mcp.json");
  if (existsSync(mcpPath)) {
    if (!statSync(mcpPath).isFile()) {
      fail("mcp.json is not a regular file (spec 6.2)");
    } else {
      let mcp = null;
      try {
        mcp = readJson(mcpPath);
      } catch (e) {
        fail(`mcp.json is not valid JSON: ${e.message}`);
      }
      if (mcp) {
        if (!validateMcp(mcp)) {
          for (const e of validateMcp.errors) fail(`mcp.json${e.instancePath} ${e.message}`);
        } else {
          pass(`mcp.json validates against ${SPEC} MCP schema`);
        }
        if (mcp.$schema !== MCP_SCHEMA_ID) {
          fail(`mcp.json $schema must be exactly ${MCP_SCHEMA_ID} (spec 7.2.1)`);
        }
        // 10.1: both files must target the same spec version
        const pv = manifest?.$schema?.match(/schemas\/([^/]+)\//)?.[1];
        const mv = mcp.$schema?.match(/schemas\/([^/]+)\//)?.[1];
        if (pv && mv && pv !== mv) {
          fail(`mcp.json targets ${mv} but plugin.json targets ${pv} (spec 10.1)`);
        }
        for (const [name, server] of Object.entries(mcp.mcpServers ?? {})) {
          const before = errors.length;
          checkServer(name, server, root, fail);
          if (errors.length === before) pass(`mcp server "${name}" (${server.type}) is a valid server entry`);
        }
      }
    }
  }

  // --- skills/ (6.1, 7.1 + Agent Skills frontmatter) -----------------------
  const skillsDir = join(root, "skills");
  if (existsSync(skillsDir)) {
    if (!statSync(skillsDir).isDirectory()) {
      fail("skills exists but is not a directory (spec 6.2)");
    } else {
      const dirs = readdirSync(skillsDir).filter((d) => statSync(join(skillsDir, d)).isDirectory());
      if (!dirs.length) fail("skills/ contains no skill directories");
      for (const dir of dirs) {
        const before = errors.length;
        const info = checkSkill(skillsDir, dir, fail);
        if (errors.length === before) {
          pass(`skills/${dir} is a valid skill (${info.lines} lines, description ${info.descLength} chars)`);
        }
      }
    }
  }

  return { checks, errors };
}

// 7.2.1, 9.2, 4.1
function checkServer(name, server, root, fail) {
  const suspect = /authorization|api[-_]?key|token|secret|password|bearer/i;
  for (const key of Object.keys(server.headers ?? {})) {
    if (suspect.test(key)) {
      fail(`mcp server "${name}" header "${key}" looks like a credential (spec 7.2.1 forbids secrets in headers)`);
    }
  }
  // 7.2.1: duplicate header names under different casing are invalid
  const lowered = Object.keys(server.headers ?? {}).map((h) => h.toLowerCase());
  if (new Set(lowered).size !== lowered.length) {
    fail(`mcp server "${name}" repeats a header name under different casing (spec 7.2.1)`);
  }
  for (const [key, value] of Object.entries(server.env ?? {})) {
    if (key === "PLUGIN_ROOT" || key === "PLUGIN_DATA") {
      fail(`mcp server "${name}" env must not set reserved ${key} (spec 9.2)`);
    }
    if (suspect.test(key) || suspect.test(String(value))) {
      fail(`mcp server "${name}" env "${key}" looks like a credential (spec 9.2 forbids secrets in env)`);
    }
  }
  if (server.url) {
    let u;
    try {
      u = new URL(server.url);
    } catch {
      fail(`mcp server "${name}" url is not an absolute URL (spec 7.2.1)`);
      return;
    }
    const loopback = u.hostname === "localhost" || /^127\./.test(u.hostname) || u.hostname === "[::1]";
    if (u.protocol !== "https:" && !loopback) fail(`mcp server "${name}" must use HTTPS (spec 7.2.1)`);
    if (u.hash) fail(`mcp server "${name}" url must not contain a fragment (spec 7.2.1)`);
    if (u.username || u.password) fail(`mcp server "${name}" url must not contain user information (spec 7.2.1)`);
  }
  for (const field of ["command", "cwd"]) {
    const v = server[field];
    if (typeof v !== "string") continue;
    if (v.startsWith("${PLUGIN_ROOT}") || v.startsWith("${PLUGIN_DATA}")) continue;
    if (field === "cwd" && !v.startsWith("./")) {
      fail(`mcp server "${name}" cwd "${v}" is not a plugin-relative path (spec 7.2.1)`);
    }
    if (v.startsWith("./") && !resolve(root, v).startsWith(root)) {
      fail(`mcp server "${name}" ${field} "${v}" escapes the plugin root (spec 4.1)`);
    }
  }
}

// 7.1 + agentskills.io frontmatter rules
function checkSkill(skillsDir, dir, fail) {
  const skillPath = join(skillsDir, dir, "SKILL.md");
  if (!existsSync(skillPath)) {
    fail(`skills/${dir} has no SKILL.md and will be skipped by clients (spec 7.1)`);
    return { lines: 0, descLength: 0 };
  }
  const raw = readFileSync(skillPath, "utf8");
  const lines = raw.split("\n").length;
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    fail(`skills/${dir}/SKILL.md has no YAML frontmatter`);
    return { lines, descLength: 0 };
  }
  const name = fm[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  const description = fm[1].match(/^description:\s*(.+)$/m)?.[1].trim();
  if (!name) {
    fail(`skills/${dir}: frontmatter name is required`);
  } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || name.length > 64) {
    fail(`skills/${dir}: name "${name}" violates the Agent Skills name rules`);
  } else if (name !== dir) {
    fail(`skills/${dir}: name "${name}" must match its directory name`);
  }
  if (!description) fail(`skills/${dir}: frontmatter description is required`);
  else if (description.length > 1024) fail(`skills/${dir}: description exceeds 1024 characters`);
  if (lines > 500) fail(`skills/${dir}/SKILL.md is ${lines} lines; keep it under 500`);
  return { lines, descLength: description?.length ?? 0 };
}
