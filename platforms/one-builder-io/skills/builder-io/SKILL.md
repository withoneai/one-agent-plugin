---
name: builder-io
description: Builder.io is a visual development platform that provides headless CMS, drag-and-drop page building, and content APIs, allowing developers and marketers to create, manage, and optimize digital experiences across websites and applications with integration into modern frontend frameworks. Read and write Builder.io data through One: contententries, image, htmlcontent, testconnection and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Builder.io, create or update a record there, or build code against the Builder.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: builder-io
  generated-from: one-knowledge-base
---

# Builder.io through One

Builder.io is a visual development platform that provides headless CMS, drag-and-drop page building, and content APIs, allowing developers and marketers to create, manage, and optimize digital experiences across websites and applications with integration into modern frontend frameworks.

One exposes Builder.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `builder-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Builder.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Builder.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ContentEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Content Entries | GET | `/api/v3/content/{{modelName}}` | `conn_mod_def::GLdo9jSCS8I::gHNouFppSzW3-r_IkitMHw` |
| Get Content Entry by ID | GET | `/api/v3/content/{{model}}/{{entryId}}` | `conn_mod_def::GLdo9j-X8wI::TPXlGVJJSAC-9sUq-8FymA` |

### Image

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Optimized Image | GET | `/api/v1/image/{{filename}}` | `conn_mod_def::GLdo9f1V4WU::XLc5gpA_T_u6f655QqgdTw` |

### HtmlContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Server-Rendered HTML | GET | `/api/v3/html/{{modelName}}` | `conn_mod_def::GLdo9gSlZ1w::sRUOzmk8SzSzlCqGrybKqQ` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/api/v3/content/page` | `conn_mod_def::GLdrfVJSHOw::Q8KcH9jwTP-guLM1RYpS2g` |

## When a call fails

The error comes from Builder.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/builder-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
