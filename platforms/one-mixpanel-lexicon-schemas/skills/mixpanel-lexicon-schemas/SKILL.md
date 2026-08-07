---
name: mixpanel-lexicon-schemas
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Lexicon Schemas data through One: schemas, lexiconschemas and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Lexicon Schemas, create or update a record there, or build code against the Mixpanel Lexicon Schemas API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-lexicon-schemas
  generated-from: one-knowledge-base
---

# Mixpanel Lexicon Schemas through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Lexicon Schemas through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-lexicon-schemas` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Lexicon Schemas is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Lexicon Schemas account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Schemas

| Action | Method | Path | Action id |
|---|---|---|---|
| List Schemas for an Entity Type | GET | `/schemas/{{entityType}}` | `conn_mod_def::GJ4-gkHbguQ::FjGY6r2oQICDdyZY8tsZiQ` |
| List Schemas in a Project | GET | `/schemas` | `conn_mod_def::GJ4-gj2iLuM::8FN5jRiSRe6JxcU0T_GR-g` |
| Delete a Schema by Entity Type and Name | DELETE | `/schemas/{{entityType}}/{{name}}` | `conn_mod_def::GJ4-gTjVg0Q::O6uSUcp_T5qeMMI4lNfAIg` |
| Delete All Schemas in a Project | DELETE | `/schemas` | `conn_mod_def::GJ4-gR1GJwQ::VrybzefbTtWdHg6y9-X-FA` |
| Delete Schemas for an Entity Type | DELETE | `/schemas/{{entityType}}` | `conn_mod_def::GJ4-gShjWR4::s0b3Y5thQ-CMwFRJz8ltCQ` |

### LexiconSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schema by Entity Type and Name (Lexicon) | GET | `/schemas/{{entityType}}/{{name}}` | `conn_mod_def::GJ4-gkWhUEU::kyaOROwHS9-giTIj1nDN_g` |
| Create or Replace a Schema by Entity Type and Name | POST | `/schemas/{{entityType}}/{{name}}` | `conn_mod_def::GJ4-gbWqWz8::6uR9aDbSQTap-zawPzZkmg` |
| Create/Replace Multiple Schemas for a Project | POST | `/schemas` | `conn_mod_def::GJ4-gR_sf8o::-G8Kl1TtQ0CZj-AQHnEMwg` |

## When a call fails

The error comes from Mixpanel Lexicon Schemas, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-lexicon-schemas

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
