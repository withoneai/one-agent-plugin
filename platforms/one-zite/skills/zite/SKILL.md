---
name: zite
description: Zite is a no-code, AI-assisted application platform that enables teams to build apps, workflows, and databases, connect them to existing tools and data, and deploy secure internal or external software with built-in authentication, hosting, and access controls. Read and write Zite data through One: bases, tablefields, tablerecords, tables, records, databases and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Zite, create or update a record there, or build code against the Zite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zite
  generated-from: one-knowledge-base
---

# Zite through One

Zite is a no-code, AI-assisted application platform that enables teams to build apps, workflows, and databases, connect them to existing tools and data, and deploy secure internal or external software with built-in authentication, hosting, and access controls.

One exposes Zite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Database by ID | GET | `/api/v1/bases/{{databaseId}}` | `conn_mod_def::GMHFmFJSlDk::1AHWxa4hQp6tG3HzIeTjEg` |
| Create Database | POST | `/api/v1/bases` | `conn_mod_def::GMHFmFsj9wI::31BQBT8iR9CWr4mA2213yQ` |
| Delete a Database | DELETE | `/api/v1/bases/{{databaseId}}` | `conn_mod_def::GMHFmDSQSto::ibjB9YyBSGytEMExcZVD7Q` |

### TableFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Table Field in a Base | POST | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/fields` | `conn_mod_def::GMHFmFI8Q-g::nbDPkuFSRTakO6PJLa2LnA` |
| Delete a Table Field from a Base | DELETE | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/fields/{{fieldId}}` | `conn_mod_def::GMHFmOnXPxU::9b_4XsVCS3qu64mwaXfmUg` |
| Update a Table Field in a Base | PATCH | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/fields/{{fieldId}}` | `conn_mod_def::GMHFmM7qBww::WnVY3ROGR-KZHcDjzz4WGw` |

### TableRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Table Record in a Base | POST | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/records` | `conn_mod_def::GMHFmOmgnzY::2Fl-oKGXR2GgXkbo74-YJw` |
| Delete a Table Record from a Base | DELETE | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMHFmNe8tlE::PQk84m2gTHqT_1bmbB23aQ` |
| Update a Table Record | PATCH | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMHFmWo_MYA::A1GRW8NuR_y0scMUgcNxgw` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Table in a Database | POST | `/api/v1/bases/{{databaseId}}/tables` | `conn_mod_def::GMHFmWSFf1Q::SOeU3kD0RDa7uIcIDj0Diw` |
| Delete a Table | DELETE | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}` | `conn_mod_def::GMHFmWUtpno::E30USq09TOGaxjn9wA0nrA` |
| Update a Database Table | PATCH | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}` | `conn_mod_def::GMHFmYmZDbE::3GMdNMCjQNqFx3YArXBR0A` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Record by ID from a Base Table | GET | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMHFmQVdVn8::3tdzRSfCQ5-Kij7u-RJAHA` |
| List Records for a Base Table | POST | `/api/v1/bases/{{databaseId}}/tables/{{tableId}}/records/list` | `conn_mod_def::GMHFmW-Ch2o::ySpECYTBRdqwPoORDjldMw` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Databases | GET | `/api/v1/bases` | `conn_mod_def::GMHFmHDQgfg::6ElAND33TB-WG-KpBxPDaw` |

### BaseWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Base Webhook | DELETE | `/api/v1/bases/{{databaseId}}/webhooks/{{webhookId}}` | `conn_mod_def::GMHFmfFwZBw::X3_sLrCFSgi4oT-PiF8h5Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks for a Database | GET | `/api/v1/bases/{{databaseId}}/webhooks` | `conn_mod_def::GMHFmmMxckU::zBjspbsdRfOywTzrR8STcA` |

### BaseWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Base Webhook | POST | `/api/v1/bases/{{databaseId}}/webhooks` | `conn_mod_def::GMHFmmj8nrU::1wOZ20PeTO6QNW8FDR92iw` |

## When a call fails

The error comes from Zite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
