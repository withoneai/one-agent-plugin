// Builds throwaway plugin directories on disk so validate-plugin.mjs (which
// reads from a filesystem path, not an in-memory object) can be exercised
// against both conformant and non-conformant input.

import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

export const VALID_PLUGIN = {
  $schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
  name: "test-plugin",
};

export const VALID_MCP = {
  $schema: "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  mcpServers: {
    one: { type: "streamable-http", url: "https://example.com/mcp" },
  },
};

export function validSkill({ name = "test-skill", description = "A test skill used for validator fixtures." } = {}) {
  return `---\nname: ${name}\ndescription: ${description}\n---\n\nBody content.\n`;
}

/**
 * Creates a temp plugin directory and registers its cleanup on the test's
 * AbortSignal-backed context, so callers never have to remember to rm it.
 *
 * @param {import("node:test").TestContext} t
 * @param {{
 *   plugin?: object | string | null,   // undefined -> VALID_PLUGIN, null -> no plugin.json, string -> written verbatim
 *   mcp?: object | string | null,      // undefined -> VALID_MCP, null -> no mcp.json, string -> written verbatim
 *   skills?: Record<string, string | null>, // dir name -> SKILL.md content, null -> dir with no SKILL.md; omit -> no skills/ dir
 * }} [spec]
 * @returns {string} absolute path to the plugin directory
 */
export function makePluginDir(t, { plugin = VALID_PLUGIN, mcp = VALID_MCP, skills } = {}) {
  const dir = mkdtempSync(join(tmpdir(), "agent-plugin-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));

  writeMaybe(join(dir, "plugin.json"), plugin);
  writeMaybe(join(dir, "mcp.json"), mcp);

  if (skills !== undefined) {
    const skillsDir = join(dir, "skills");
    mkdirSync(skillsDir);
    for (const [name, content] of Object.entries(skills)) {
      const skillDir = join(skillsDir, name);
      mkdirSync(skillDir);
      if (content !== null) writeFileSync(join(skillDir, "SKILL.md"), content);
    }
  }

  return dir;
}

function writeMaybe(path, value) {
  if (value === null) return;
  writeFileSync(path, typeof value === "string" ? value : JSON.stringify(value, null, 2));
}
