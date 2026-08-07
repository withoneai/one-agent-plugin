---
name: wttr-in
description: Wttr.in is a console-based weather forecast service that provides location-specific weather updates in a minimal, text-based format. It’s especially popular among developers and system administrators looking for quick weather info via terminal. Read and write Wttr.in data through One: weather and more, 1 actions with real parameter documentation. Use whenever the user asks to look something up in Wttr.in, create or update a record there, or build code against the Wttr.in API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: wttr-in
  generated-from: one-knowledge-base
---

# Wttr.in through One

Wttr.in is a console-based weather forecast service that provides location-specific weather updates in a minimal, text-based format. It’s especially popular among developers and system administrators looking for quick weather info via terminal.

One exposes Wttr.in through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `wttr-in` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Wttr.in is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Wttr.in account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Weather

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Data | GET | `/{{id}}` | `conn_mod_def::GB1jc1pF_sg::n6SWacIKTpKwl1NzU6ywMQ` |

## When a call fails

The error comes from Wttr.in, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/wttr-in

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
