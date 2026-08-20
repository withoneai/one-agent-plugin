# One, as an Agent Plugin

500+ apps in your agent, packaged to the [Agent Plugins 1.0.0](https://agent-plugins.org) standard. One directory that ChatGPT, Codex, Cursor, GitHub Copilot, Kiro and VS Code all read the same way.

```text
one/
├── plugin.json      # manifest
├── mcp.json         # One's remote MCP server, OAuth, nothing to install
├── .mcp.json        # same server, in the filename GitHub Copilot CLI reads
├── assets/logo.png  # marketplace logo
├── LICENSE          # MIT
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

## Install

**Cursor.** Once listed, install **One** from the [Cursor Marketplace](https://cursor.com/marketplace) or from **Customize** in the sidebar. To try it before that, load it locally:

```bash
git clone https://github.com/withoneai/one-agent-plugin.git
ln -s "$PWD/one-agent-plugin" ~/.cursor/plugins/local/one
```

Then restart Cursor (or run **Developer: Reload Window**), open **Customize**, and confirm the two skills and the `one` MCP server appear. The first tool call opens One's OAuth consent screen in your browser.

**Kiro.** Open the **Powers** panel, choose **Add Custom Power**, then **Import power from GitHub** and paste `https://github.com/withoneai/one-agent-plugin` (or **Import power from a folder** for a local clone). Kiro activates the power when you mention an app or task it covers (email, Slack, Stripe, CRM, invoices, and so on) and loads the skills and the `one` MCP server automatically. First-time sign-in: Kiro does not open the browser on its own for a new remote server. Open the Kiro panel, **MCP Servers** tab, right-click `power-one-agent-plugin-one`, choose **Reauthenticate**, and approve in One's consent screen. (MCP must be enabled in Kiro settings: Configure MCP = Enabled.) Once listed, it will also be one click at [kiro.dev/powers](https://kiro.dev/powers).

**GitHub Copilot CLI.** Once listed in [awesome-copilot](https://github.com/github/awesome-copilot), install with:

```bash
copilot plugin install one@awesome-copilot
```

Until then, install straight from the repo (or a local clone path):

```bash
copilot plugin install withoneai/one-agent-plugin
```

Copilot reads the server from `.mcp.json`; `copilot mcp list` shows it as `one`. The first tool call opens One's OAuth consent screen. If the server shows `needs-auth`, run `/mcp auth one` inside Copilot to trigger the browser flow.

**Other clients.** Any [Agent Plugins](https://agent-plugins.org/compatible-clients) client (ChatGPT and Codex, Kiro, VS Code) loads this directory the same way; point it at the repo or a local clone.

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
npm run validate platforms/one-*    # every generated plugin
```

The validator checks `plugin.json` and `mcp.json` against the official 1.0.0 JSON Schemas (vendored under `schemas/`, since the spec forbids fetching a schema at load time), then checks the requirements the schemas cannot express: name constraints (§5.5), plugin root containment (§4.1), HTTPS and no-credentials rules for remote servers (§7.2.1), reserved environment names (§9.2), spec version match between the two files (§10.1), and Agent Skills frontmatter on every skill.

## Support and privacy

- Support: [support@withone.ai](mailto:support@withone.ai), or the docs at https://www.withone.ai/docs/mcp
- Privacy Policy: https://www.withone.ai/privacy
- Terms: https://www.withone.ai/terms

## Links

- One MCP docs: https://www.withone.ai/docs/mcp
- Why four tools: https://www.withone.ai/mcp-efficiency
- Agent Plugins spec: https://github.com/agentplugins/agent-plugins-spec

MIT
