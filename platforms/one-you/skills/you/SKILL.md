---
name: you
description: You.com is an AI-powered search and productivity platform that provides conversational search, content generation, and research tools through web and API-based experiences, allowing users and developers to retrieve information, automate tasks, and build AI-assisted workflows. Read and write You.com data through One: searchresults, contents, accountbalance, research, financeresearch and more, 6 actions with real parameter documentation. Use whenever the user asks to look something up in You.com, create or update a record there, or build code against the You.com API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: you
  generated-from: one-knowledge-base
---

# You.com through One

You.com is an AI-powered search and productivity platform that provides conversational search, content generation, and research tools through web and API-based experiences, allowing users and developers to retrieve information, automate tasks, and build AI-assisted workflows.

One exposes You.com through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `you` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm You.com is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real You.com account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Unified Web and News Results | GET | `/v1/search` | `conn_mod_def::GK9ryAH-nnE::w01ioTnIQNe0B_qm2YtVnQ` |
| Search Unified Web and News Results | POST | `/v1/search` | `conn_mod_def::GK9ryNdQKGE::TiwS_VVUSE-wxbKljY4T4g` |

### Contents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Page Contents | POST | `/v1/contents` | `conn_mod_def::GK9rxuyKHJ8::w8LSY3_SRuuYZMEvrhysYw` |

### AccountBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Balance | GET | `/billing/account_balance` | `conn_mod_def::GK9rxyqhzCo::-U9JkTZDRZarrCY_hdOeqw` |

### Research

| Action | Method | Path | Action id |
|---|---|---|---|
| Research | POST | `/v1/research` | `conn_mod_def::GK9rx6bXINM::MUbK6JMcTwWoiaxT6DmEIQ` |

### FinanceResearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Finance Research | POST | `/v1/finance_research` | `conn_mod_def::GMIZdquNgL4::ccaSHifKSjC_Hqcf74XRpg` |

## When a call fails

The error comes from You.com, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/you

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
