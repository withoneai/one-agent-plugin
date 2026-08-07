---
name: dot-simple
description: DotSimple is a workflow automation platform that connects business applications and APIs, enabling teams to build automated processes, synchronize data, and reduce manual work across sales, marketing, support, and operational systems without extensive custom development. Read and write DotSimple data through One: posts, tags, media, accounts, mediafiles and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in DotSimple, create or update a record there, or build code against the DotSimple API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dot-simple
  generated-from: one-knowledge-base
---

# DotSimple through One

DotSimple is a workflow automation platform that connects business applications and APIs, enabling teams to build automated processes, synchronize data, and reduce manual work across sales, marketing, support, and operational systems without extensive custom development.

One exposes DotSimple through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dot-simple` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DotSimple is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DotSimple account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Post in a Workspace | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts` | `conn_mod_def::GLe6X9P4kpg::jZSeOzUBTOe5k2T1O8IYlA` |
| Get a Post | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts/{{postUuid}}` | `conn_mod_def::GLe6X1IyCdg::hwvXL21JTs6ibmgM5ygqBA` |
| List Posts for a Workspace | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts` | `conn_mod_def::GLe6X2DRTzA::8OBqAOdqT7u7l-2eJVGLKw` |
| Add to Queue a Post | POST | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts/add-to-queue/{{postUuid}}` | `conn_mod_def::GLe6X1Qkshg::HiPuKKVORPaGiEPPI82dlw` |
| Delete a Post | DELETE | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts/{{postUuid}}` | `conn_mod_def::GLe6X99w5dA::Bmg4EpGGQZWDyW-Bun8hcQ` |
| Delete Multiple Posts | DELETE | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts` | `conn_mod_def::GLe6X0zSUkA::GdjeJwZ7RvqRihiBR-eLMA` |
| Schedule a Post | POST | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts/schedule/{{postUuid}}` | `conn_mod_def::GLe6X-3wz9A::8GvJeML5RReli-ZUJiU1zQ` |
| Update a Post | PUT | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/posts/{{postUuid}}` | `conn_mod_def::GLe6X-Qayog::HAwaWd7oRtCZyeRYxrjbDw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/tags/{{tagUuid}}` | `conn_mod_def::GLe6YG4RCzA::DBHI0tldS2mjiGdqEhhhhw` |
| List Tags in a Workspace | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/tags` | `conn_mod_def::GLe6YHJoAXA::gq8_3pvMR-uRveWoInp9JQ` |
| Create a Tag | POST | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/tags` | `conn_mod_def::GLe6YGjaIOg::I2_5uUEkSuSjMkXqwX68DQ` |
| Delete a Tag | DELETE | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/tags/{{tagUuid}}` | `conn_mod_def::GLe6X9_PcPA::16cSPjyHR_eRdYPclXGZRA` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Media File | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/media/{{mediaUuid}}` | `conn_mod_def::GLe6WO-1dwA::2O1V6ZVVTrG8_2-0PR83EA` |
| Delete Media Files | DELETE | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/media` | `conn_mod_def::GLe6WOJXbAg::PE9E-Ez5QEeTNdQ26_9G1w` |
| Upload a Media File | POST | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/media` | `conn_mod_def::GLe6X04rI7A::g-T8C4aAQl-gYfabUX9HqQ` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/accounts/{{accountUuid}}` | `conn_mod_def::GLe6WRPb0Eg::WvvABwucQci8cqAdJDSBoA` |
| List Accounts | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/accounts` | `conn_mod_def::GLe6XqLmrBg::TLvm0EPxTzm5qJrxTevc0g` |

### MediaFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Media Files | GET | `/app/api/{{DOT_SIMPLE_WORKSPACE_UUID}}/media` | `conn_mod_def::GLe6WVDqH6g::fQEO3cB6TlC30xNReiBsAw` |

## When a call fails

The error comes from DotSimple, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dot-simple

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
