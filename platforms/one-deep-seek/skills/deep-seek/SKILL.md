---
name: deep-seek
description: DeepSeek develops advanced large language models that deliver high-performance AI capabilities for natural language understanding and generation, offering cost-effective solutions comparable to leading AI technologies. Read and write DeepSeek data through One: chatcompletions, fimcompletions, userbalance, models and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in DeepSeek, create or update a record there, or build code against the DeepSeek API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: deep-seek
  generated-from: one-knowledge-base
---

# DeepSeek through One

DeepSeek develops advanced large language models that deliver high-performance AI capabilities for natural language understanding and generation, offering cost-effective solutions comparable to leading AI technologies.

One exposes DeepSeek through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `deep-seek` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DeepSeek is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DeepSeek account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat Completion | POST | `/chat/completions` | `conn_mod_def::GJ2TeNMpzqg::2h7ZYJH8S8uhqPi0XnnZ9A` |

### FimCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create FIM Completion (Beta) | POST | `/beta/completions` | `conn_mod_def::GJ2TeVG7lPg::9zpDzCLyQzuO5tNy6GqoBw` |

### UserBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Balance | GET | `/user/balance` | `conn_mod_def::GJ2Ten440j0::0CGcHv_aQXqAXAyHrBt2uA` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Models | GET | `/models` | `conn_mod_def::GJ2TedJQ3Ag::F0qdIhWASrSvMod68pP75Q` |

## When a call fails

The error comes from DeepSeek, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/deep-seek

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
