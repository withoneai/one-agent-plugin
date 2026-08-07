---
name: softr
description: Softr is a no-code application development platform that enables teams to build client portals, internal tools, directories, and web apps on top of existing data sources, allowing non-technical users to create and manage software without writing code. Read and write Softr data through One: databases, tables, records, tablefields, fields, views and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Softr, create or update a record there, or build code against the Softr API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: softr
  generated-from: one-knowledge-base
---

# Softr through One

Softr is a no-code application development platform that enables teams to build client portals, internal tools, directories, and web apps on top of existing data sources, allowing non-technical users to create and manage software without writing code.

One exposes Softr through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `softr` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Softr is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Softr account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Database | GET | `/api/v1/databases/{{databaseId}}` | `conn_mod_def::GMTciwIMICg::I06GHYrJQuimTFhjPj26Aw` |
| List Databases | GET | `/api/v1/databases` | `conn_mod_def::GMTciwOAIog::NJCofV0ARkCCHQWY10d0Iw` |
| Create a Database | POST | `/api/v1/databases` | `conn_mod_def::GMTciv9adXg::TyRtsACaTGG2SoD02LU9rg` |
| Delete a Database | DELETE | `/api/v1/databases/{{databaseId}}` | `conn_mod_def::GMTciwUG3eA::6vemH3fOTUe2yk3tt66InA` |
| Update a Database | PUT | `/api/v1/databases/{{databaseId}}` | `conn_mod_def::GMTciwzSGyA::bdbK90y5SLKFb1XhyTiK8g` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table in a Database | GET | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}` | `conn_mod_def::GMTcjQB4GCg::nya70bThSZKgatmVarBk4Q` |
| List a Database's Tables | GET | `/api/v1/databases/{{databaseId}}/tables` | `conn_mod_def::GMTcjOZpYQg::JhT_MAheSPmDLEF9LeDx-A` |
| Create a Table in a Database | POST | `/api/v1/databases/{{databaseId}}/tables` | `conn_mod_def::GMTcjQ6vtlg::BfVz8jj-QDKqGv7fufoaCg` |
| Delete a Table in a Database | DELETE | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}` | `conn_mod_def::GMTcjO-RX4g::liDyQhu8QlqQoKp3wzn7IQ` |
| Update a Table | PUT | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}` | `conn_mod_def::GMTcjYDWUqA::EyySar88SXOuJTplBDlQew` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Record from a Database Table | GET | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMTci4p_ANg::L9s7JveNQt-2x-utoI0ZPw` |
| List Records in a Database Table | GET | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records` | `conn_mod_def::GMTci8BqwpA::edH0nOmdQe275P0LvFh_Bw` |
| Create a Record in a Database Table | POST | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records` | `conn_mod_def::GMTci3js_Kg::u9maTdtdRyqCci4Supmpdg` |
| Search Records in a Database Table | POST | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records/search` | `conn_mod_def::GMTci6izsyg::2pUgCwv1TO2sGd1YcVTljQ` |
| Update a Record in a Database Table | PATCH | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMTcjIM8wMA::mo631iYYTGitr42gCwyCEw` |

### TableFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table Field | GET | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/fields/{{fieldId}}` | `conn_mod_def::GMTcjH2CRsg::nTLqbqX6QBygEaNqjiKrVw` |
| Delete a Table Field | DELETE | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/fields/{{fieldId}}` | `conn_mod_def::GMTcjG3QUSA::0x87rA-JTG24FftQZY2j_w` |
| Update a Table Field | PUT | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/fields/{{fieldId}}` | `conn_mod_def::GMTcjHE9XJA::Wj3VOlpzRxyj18FyptC6Yg` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Field to a Table in a Database | POST | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/fields` | `conn_mod_def::GMTcjHAvbwA::HoxM_iucR-mCWV01z4ZaRg` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Table's Views | GET | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/views` | `conn_mod_def::GMTcjOT9B5g::u-hlTDvOT02PJITeo3AvJA` |

### TableRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Table Record from a Database | DELETE | `/api/v1/databases/{{databaseId}}/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GMTci_jpd7A::wFJIh5q0QwSGgVlShgKEVQ` |

## When a call fails

The error comes from Softr, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/softr

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
