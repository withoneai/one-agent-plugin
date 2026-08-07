---
name: fibery
description: Fibery is a no-code work platform that combines project management, knowledge management, documents, whiteboards, CRM, and workflow automation in a connected workspace, allowing teams to replace scattered tools and customize processes, data structures, and collaboration workflows in one system. Read and write Fibery data through One: commands, documents, files, views, webhooks, entity and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Fibery, create or update a record there, or build code against the Fibery API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fibery
  generated-from: one-knowledge-base
---

# Fibery through One

Fibery is a no-code work platform that combines project management, knowledge management, documents, whiteboards, CRM, and workflow automation in a connected workspace, allowing teams to replace scattered tools and customize processes, data structures, and collaboration workflows in one system.

One exposes Fibery through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fibery` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fibery is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fibery account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Commands

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Collection Items Using Fibery Entity | POST | `/api/commands` | `conn_mod_def::GMjz3qKqesQ::xg9I2zzkQK2VIP-K87fuXg` |
| Create Field, Add Comment, or Trigger Webhook-Correlated Changes Using Fibery Commands | POST | `/api/commands` | `conn_mod_def::GMjz3pcPcWs::o91AYrVNQWCyBt9dqM3JdQ` |
| Remove Collection Items from an Entity Collection Field | POST | `/api/commands` | `conn_mod_def::GMjz31Hbp9c::XwEzVDaXR2mbUUm4PY29kQ` |
| Set Collection Items for an Entity Field | POST | `/api/commands` | `conn_mod_def::GMjz32c97SY::ryO39Jv4SBmgiQ2eQLmqsA` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document by ID | GET | `/api/documents/{{id}}` | `conn_mod_def::GMjz4BheEUo::m0kCP67vRr6zflrOxw2yYg` |
| Create or Update Documents Using Documents Commands | POST | `/api/documents/commands` | `conn_mod_def::GMjz4QPPRLk::z5IVQAq5SAu1iQl8F-zyAw` |
| Get Documents Using Documents Commands | POST | `/api/documents/commands` | `conn_mod_def::GMjz4AHyadA::gqJfsYMoRh2rGrSMrsnVTg` |
| Update a Document | PUT | `/api/documents/{{id}}` | `conn_mod_def::GMjz4cUBJ7Q::2vQwqx06QDKNxsb3YeGigQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/api/files/{{id}}` | `conn_mod_def::GMjz4ZnK22w::8eI1uV0-Rj2vsePHPFKz_w` |
| Get Temporary Public File URL | POST | `/api/files/sign-urls` | `conn_mod_def::GMjz4bPrMNg::blfN2rNbRvKtt1PHhcBHLQ` |
| Upload File | POST | `/api/files` | `conn_mod_def::GMjz4a3FZ1Q::CXdWIcwoT76TV8n8TdxvYg` |
| Upload File from URL | POST | `/api/files/from-url` | `conn_mod_def::GMjz4bY3aoI::UEoKNxD4Sk65GU6f3CBQPw` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Views | POST | `/api/views/json-rpc` | `conn_mod_def::GMjz4mBRDXE::v-EJllPIQwKKJRlBGwYF9w` |
| Delete Views | POST | `/api/views/json-rpc` | `conn_mod_def::GMjz4oG-zv8::_aTxZnKoT9SPNsMZg9isUw` |
| Query Views | POST | `/api/views/json-rpc` | `conn_mod_def::GMjz4l5EU4I::tpPDpKiJR6mOgwgmAENgeg` |
| Update Views | POST | `/api/views/json-rpc` | `conn_mod_def::GMjz4lfaepM::N-bh3f9ESXaaIlbAhF6xOg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhooks | GET | `/api/webhooks/v2` | `conn_mod_def::GMjz4yAWROg::5yYK6NtcTYKNQVuK5JsP7A` |
| Add a Webhook | POST | `/api/webhooks/v2` | `conn_mod_def::GMjz4w0-M3w::QXU6v59pQ9ynWGqUj8paEg` |
| Delete a Webhook | DELETE | `/api/webhooks/v2/{{webhookId}}` | `conn_mod_def::GMjz4mInTOo::QMVqyQzGRTKeNUQEEHocow` |

### Entity

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Entity | POST | `/api/commands` | `conn_mod_def::GMjz3pcPk9k::e5_XbRYIQd2PHJK-3Eer5Q` |
| Update an Entity Using Fibery Commands | POST | `/api/commands` | `conn_mod_def::GMjz301TGLg::M75dd0ewSU2LRmvG6LjjRA` |

### Entities

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Entity | POST | `/api/commands` | `conn_mod_def::GMjz3sGNJIk::HKtgaoLsSRWWFhJ5qGDJPw` |
| Create or Update Entities in Batch | POST | `/api/commands` | `conn_mod_def::GMjz30kE728::LSt3xDFITSWcvNMc4gUHbA` |

### FiberyEntityQuery

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Entities with Fibery Entity Query | POST | `/api/commands` | `conn_mod_def::GMjz3qmuuS0::3x0OSC7dRgeZErLUyOYw-A` |

### EntityCollectionItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Reset Entity Collection Items | POST | `/api/commands` | `conn_mod_def::GMjz30D6qLs::1B9bUyYJTeSVR4pDVrmzfg` |

### SchemaObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Schema Objects with Fibery Schema Batch | POST | `/api/commands` | `conn_mod_def::GMjz3_Z-x9g::Wj6PkwK2RWq4bAIleHOGmw` |

### Schema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Schema | POST | `/api/commands` | `conn_mod_def::GMjz4AHinuA::SrEn2M-yRSCEHcsggpaDjQ` |

## When a call fails

The error comes from Fibery, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fibery

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
