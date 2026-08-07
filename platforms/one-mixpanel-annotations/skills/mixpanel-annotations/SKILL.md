---
name: mixpanel-annotations
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Annotations data through One: projectannotations, annotations, annotationtags, users and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Annotations, create or update a record there, or build code against the Mixpanel Annotations API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-annotations
  generated-from: one-knowledge-base
---

# Mixpanel Annotations through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Annotations through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-annotations` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Annotations is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Annotations account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProjectAnnotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Annotation | GET | `/projects/{{projectId}}/annotations/{{annotationId}}` | `conn_mod_def::GJ49dcfVKEM::mOHS569LTjOXElDm3G3eow` |
| Create a Project Annotation | POST | `/projects/{{projectId}}/annotations` | `conn_mod_def::GJ49dOHKJGY::3G8g-N7ZT4qPeOzlupxWIw` |
| Patch a Project Annotation | PATCH | `/projects/{{projectId}}/annotations/{{annotationId}}` | `conn_mod_def::GJ49dOfbLfA::SmsS1r-lT76xTRBGCQBgcg` |

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Annotations | GET | `/projects/{{projectId}}/annotations` | `conn_mod_def::GJ49dhvY6wM::5gwbUsLlSzKpOL001E3sQA` |
| Delete a Project Annotation | DELETE | `/projects/{{projectId}}/annotations/{{annotationId}}` | `conn_mod_def::GJ49dUGU3FM::yHK-GjrWQ6S7OJxzx0UwHw` |

### AnnotationTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Annotation Tags | GET | `/projects/{{projectId}}/annotations/tags` | `conn_mod_def::GJ49dOtZJO8::vRYsnylJTqegZe2PzdBVvA` |
| Create an Annotation Tag for a Project | POST | `/projects/{{projectId}}/annotations/tags` | `conn_mod_def::GJ49dP0W4uI::0BDLe96TT4mjxjjPK1yGEA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/api/app/me` | `conn_mod_def::GJ49deblkKU::yZxzfqVDQHyldM4A_1qdig` |

## When a call fails

The error comes from Mixpanel Annotations, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-annotations

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
