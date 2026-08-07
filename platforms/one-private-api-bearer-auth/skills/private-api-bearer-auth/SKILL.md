---
name: private-api-bearer-auth
description: Passthrough HTTP integration with Bearer Token authentication. Configure a Base URL and Bearer Token on the connection; each action (GET/POST/PATCH/PUT/DELETE) takes a `__PATH__` path parameter and forwards the request body and additional headers verbatim to your private API. Read and write Private API (Bearer Auth) data through One: customrequest and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Private API (Bearer Auth), create or update a record there, or build code against the Private API (Bearer Auth) API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: private-api-bearer-auth
  generated-from: one-knowledge-base
---

# Private API (Bearer Auth) through One

Passthrough HTTP integration with Bearer Token authentication. Configure a Base URL and Bearer Token on the connection; each action (GET/POST/PATCH/PUT/DELETE) takes a `__PATH__` path parameter and forwards the request body and additional headers verbatim to your private API.

One exposes Private API (Bearer Auth) through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `private-api-bearer-auth` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Private API (Bearer Auth) is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Private API (Bearer Auth) account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CustomRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| GET Request | GET | `{{__PATH__}}` | `conn_mod_def::GLcK0Ye92UQ::Mh19p2r2SAqpl331Hb8erw` |
| DELETE Request | DELETE | `{{__PATH__}}` | `conn_mod_def::GLcK0YmWUpA::HoKdrCDiSSm_IbAgu9oY1g` |
| PATCH Request | PATCH | `{{__PATH__}}` | `conn_mod_def::GLcK0YERrmw::KdaGfKjxTtSo4LQv8YhDBQ` |
| POST Request | POST | `{{__PATH__}}` | `conn_mod_def::GLcK0YdyKUQ::Euxs7hQrRJmUOwQiPh9iUA` |
| PUT Request | PUT | `{{__PATH__}}` | `conn_mod_def::GLcK0ZPTgXU::Y6GJFPOWT1GU1sW_2fOsiA` |

## When a call fails

The error comes from Private API (Bearer Auth), not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/private-api-bearer-auth

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
