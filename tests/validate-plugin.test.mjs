// validate-plugin.mjs is what decides whether a plugin is conformant, so its
// failure paths matter more than its happy path: a bug that lets a bad
// plugin through would fail silently, not loudly. These tests exercise each
// rejection rule directly, plus the corresponding pass case where useful.

import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { validatePlugin } from "../scripts/lib/validate-plugin.mjs";
import { makePluginDir, VALID_PLUGIN, VALID_MCP, validSkill } from "./fixtures.mjs";

function has(messages, pattern) {
  return messages.some((m) => (pattern instanceof RegExp ? pattern.test(m) : m.includes(pattern)));
}

describe("plugin.json", () => {
  test("a minimal valid plugin has no errors", (t) => {
    const dir = makePluginDir(t, { mcp: null });
    const { errors } = validatePlugin(dir);
    assert.deepEqual(errors, []);
  });

  test("missing plugin.json fails (spec 4.1)", (t) => {
    const dir = makePluginDir(t, { plugin: null, mcp: null });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "plugin.json is missing at the plugin root (spec 4.1)"));
  });

  test("malformed JSON fails", (t) => {
    const dir = makePluginDir(t, { plugin: "{ not json", mcp: null });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "plugin.json is not valid JSON"));
  });

  test("a manifest missing the required name field fails schema validation", (t) => {
    const dir = makePluginDir(t, { plugin: { $schema: VALID_PLUGIN.$schema }, mcp: null });
    const { errors } = validatePlugin(dir);
    assert.ok(errors.length > 0);
  });

  test("wrong $schema value fails (spec 5.2)", (t) => {
    const dir = makePluginDir(t, {
      plugin: { ...VALID_PLUGIN, $schema: "https://agent-plugins.org/schemas/9.9.9/plugin.schema.json" },
      mcp: null,
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "$schema must be exactly"));
  });

  for (const name of ["Bad_Name", "bad--name", "-bad-start", "a".repeat(65)]) {
    test(`name "${name}" violates the 5.5 naming constraints`, (t) => {
      const dir = makePluginDir(t, { plugin: { ...VALID_PLUGIN, name }, mcp: null });
      const { errors } = validatePlugin(dir);
      assert.ok(has(errors, "5.5 naming constraints"));
    });
  }
});

describe("mcp.json", () => {
  test("wrong $schema value fails (spec 7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, $schema: "https://agent-plugins.org/schemas/9.9.9/mcp.schema.json" },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "mcp.json $schema must be exactly"));
  });

  test("a spec version mismatch between plugin.json and mcp.json fails (10.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, $schema: "https://agent-plugins.org/schemas/9.9.9/mcp.schema.json" },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, /spec 10\.1/));
  });

  test("a header shaped like a credential fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: {
        ...VALID_MCP,
        mcpServers: {
          one: { type: "streamable-http", url: "https://example.com/mcp", headers: { Authorization: "Bearer xyz" } },
        },
      },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "looks like a credential"));
  });

  test("a header name repeated under different casing fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: {
        ...VALID_MCP,
        mcpServers: {
          one: { type: "streamable-http", url: "https://example.com/mcp", headers: { "X-Custom": "a", "x-custom": "b" } },
        },
      },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "repeats a header name"));
  });

  test("a reserved env name fails (9.2)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "stdio", command: "node", env: { PLUGIN_ROOT: "/x" } } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "must not set reserved"));
  });

  test("an env value shaped like a credential fails (9.2)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "stdio", command: "node", env: { API_TOKEN: "sk-secret" } } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "looks like a credential"));
  });

  test("a non-HTTPS, non-loopback URL fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "streamable-http", url: "http://example.com/mcp" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "must use HTTPS"));
  });

  test("a loopback HTTP URL is allowed", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "streamable-http", url: "http://127.0.0.1:8787/mcp" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(!has(errors, "must use HTTPS"));
  });

  test("a URL fragment fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "streamable-http", url: "https://example.com/mcp#frag" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "must not contain a fragment"));
  });

  test("a URL with embedded user info fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "streamable-http", url: "https://user:pass@example.com/mcp" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "must not contain user information"));
  });

  test("a stdio cwd that isn't plugin-relative fails (7.2.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "stdio", command: "node", cwd: "/etc" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "is not a plugin-relative path"));
  });

  test("a cwd that escapes the plugin root fails (spec 4.1)", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "stdio", command: "node", cwd: "./../../etc" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "escapes the plugin root"));
  });

  test("a stdio server rooted at ${PLUGIN_ROOT} passes", (t) => {
    const dir = makePluginDir(t, {
      mcp: { ...VALID_MCP, mcpServers: { one: { type: "stdio", command: "${PLUGIN_ROOT}/bin/server" } } },
    });
    const { errors } = validatePlugin(dir);
    assert.deepEqual(errors, []);
  });
});

describe("skills/", () => {
  test("a skill directory with no SKILL.md fails (spec 7.1)", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": null } });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "has no SKILL.md"));
  });

  test("SKILL.md with no frontmatter fails", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": "Just a body, no frontmatter.\n" } });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "has no YAML frontmatter"));
  });

  test("frontmatter missing a name fails", (t) => {
    const dir = makePluginDir(t, {
      mcp: null,
      skills: { "test-skill": "---\ndescription: missing a name field\n---\n\nBody.\n" },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "frontmatter name is required"));
  });

  test("a name violating the Agent Skills name rules fails", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": validSkill({ name: "Test_Skill" }) } });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "violates the Agent Skills name rules"));
  });

  test("a name not matching its directory fails", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": validSkill({ name: "other-skill" }) } });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "must match its directory name"));
  });

  test("frontmatter missing a description fails", (t) => {
    const dir = makePluginDir(t, {
      mcp: null,
      skills: { "test-skill": "---\nname: test-skill\n---\n\nBody.\n" },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "frontmatter description is required"));
  });

  test("a description over 1024 characters fails", (t) => {
    const dir = makePluginDir(t, {
      mcp: null,
      skills: { "test-skill": validSkill({ description: "x".repeat(1025) }) },
    });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "description exceeds 1024 characters"));
  });

  test("SKILL.md over 500 lines fails", (t) => {
    const content = `---\nname: test-skill\ndescription: A test skill used for validator fixtures.\n---\n\n${"line\n".repeat(500)}`;
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": content } });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, /keep it under 500/));
  });

  test("skills/ with no skill directories fails", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: {} });
    const { errors } = validatePlugin(dir);
    assert.ok(has(errors, "skills/ contains no skill directories"));
  });

  test("a valid skill passes", (t) => {
    const dir = makePluginDir(t, { mcp: null, skills: { "test-skill": validSkill() } });
    const { errors } = validatePlugin(dir);
    assert.deepEqual(errors, []);
  });
});
