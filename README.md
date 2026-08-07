# One, as an Agent Plugin

500+ apps in your agent, packaged to the [Agent Plugins 1.0.0](https://agent-plugins.org) standard. One directory that ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code all read the same way.

```text
one/
├── plugin.json      # manifest
├── mcp.json         # One's remote MCP server, OAuth, nothing to install
└── skills/
    ├── one-integrations/    # how to act in real apps without guessing parameters
    └── integration-code/    # how to write integration code against real schemas
```

## What you get

The MCP server exposes four tools, no matter how many apps you connect:

| Tool | What it does |
|------|--------------|
| `list_one_integrations` | Lists platforms and connections, each with the access it allows |
| `search_one_platform_actions` | Searches actions on a platform |
| `get_one_action_knowledge` | Returns an action's real parameters, types, and auth |
| `execute_one_action` | Runs the action against the live account |

The two skills are the half that a bare MCP entry does not give you. They teach the agent the search, read, then execute discipline that keeps it from inventing a field name and writing the wrong thing to a real account, and they tell it what to do when a platform is not connected or a call comes back 401.

## Auth

There is no key in this package. The MCP server uses OAuth: the first connect opens a browser, and the consent screen is where you scope the agent to specific connections, read-only, or knowledge-only mode. The Agent Plugins spec forbids secrets in `headers` and `env` (§7.2.1, §9.2), which rules out shipping a token here even if we wanted to.

## One plugin per platform

`platforms/` holds a conformant plugin for every platform in One's catalog, generated from the knowledge base:

```text
platforms/one-quickbooks/
├── plugin.json
├── mcp.json
└── skills/quickbooks/SKILL.md
```

Each skill carries that platform's real action ids, HTTP methods and paths, so an agent can go straight to reading an action's parameters instead of spending a turn on search, and cannot invent an action that does not exist. The tables are generated, never hand-written.

Regenerate them:

```bash
ONE_SECRET=... npm run generate            # every platform
ONE_SECRET=... npm run generate -- --platform shopify
```

Every generated plugin is validated before it is written; anything that fails is dropped and reported rather than shipped. `platforms/index.json` lists what was produced.

These plugins are derived from One's knowledge base, so they carry the [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge) license and its attribution requirement rather than MIT. The root plugin and the tooling are MIT.

## Verify conformance

```bash
npm install
npm run validate                    # this plugin
npm run validate platforms/*        # every generated plugin
```

The validator checks `plugin.json` and `mcp.json` against the official 1.0.0 JSON Schemas (vendored under `schemas/`, since the spec forbids fetching a schema at load time), then checks the requirements the schemas cannot express: name constraints (§5.5), plugin root containment (§4.1), HTTPS and no-credentials rules for remote servers (§7.2.1), reserved environment names (§9.2), spec version match between the two files (§10.1), and Agent Skills frontmatter on every skill.

## Links

- One MCP docs: https://www.withone.ai/docs/mcp
- Why four tools: https://www.withone.ai/mcp-efficiency
- Agent Plugins spec: https://github.com/agentplugins/agent-plugins-spec

MIT
