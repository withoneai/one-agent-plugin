---
name: private-api-key
description: Passthrough HTTP integration with API Key authentication via a configurable header name. Configure a Base URL, Header Name (e.g. `X-Api-Key`, `Api-Token`), and API Key value on the connection; each action (GET/POST/PATCH/PUT/DELETE) takes a `__PATH__` path parameter and forwards the request body and additional headers verbatim to your private API. Read and write Private API (API Key) data through One: customrequest and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Private API (API Key), create or update a record there, or build code against the Private API (API Key) API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: private-api-key
  generated-from: one-knowledge-base
---

# Private API (API Key) through One

Passthrough HTTP integration with API Key authentication via a configurable header name. Configure a Base URL, Header Name (e.g. `X-Api-Key`, `Api-Token`), and API Key value on the connection; each action (GET/POST/PATCH/PUT/DELETE) takes a `__PATH__` path parameter and forwards the request body and additional headers verbatim to your private API.

One exposes Private API (API Key) through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "private-api-key", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Private API (API Key) is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Private API (API Key) account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CustomRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| GET Request | GET | `{{__PATH__}}` | `conn_mod_def::GLcK0-YGQQs::W6D2501FRNO6x37F6Mgk1A` |
| DELETE Request | DELETE | `{{__PATH__}}` | `conn_mod_def::GLcK1BYY7zs::CvVgwtKkSqui9y2UuA7_vg` |
| PATCH Request | PATCH | `{{__PATH__}}` | `conn_mod_def::GLcK0-AYsms::AfNxO4GrST2REOipg80x5w` |
| POST Request | POST | `{{__PATH__}}` | `conn_mod_def::GLcK0_L0nBY::JEO2VRXeSNiTSXzctqsGHQ` |
| PUT Request | PUT | `{{__PATH__}}` | `conn_mod_def::GLcK1Ku9j8s::yKjaUadHRmGsEki-DFKpUw` |

## When a call fails

The error comes from Private API (API Key), not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/private-api-key

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
