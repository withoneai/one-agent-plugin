---
name: mixpanel-warehouse-connectors
description: Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions. Read and write Mixpanel Warehouse Connectors data through One: warehouseimports, warehousegroupsimports, warehousepeopleimports, users, warehouselookuptableimports, warehouseimportjobexecutionhistory and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Mixpanel Warehouse Connectors, create or update a record there, or build code against the Mixpanel Warehouse Connectors API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mixpanel-warehouse-connectors
  generated-from: one-knowledge-base
---

# Mixpanel Warehouse Connectors through One

Mixpanel is a product analytics platform that helps teams understand user behavior and improve product experiences. The Annotations API enables programmatic creation, editing, and deletion of time-based notes tied to specific dates in reports like Insights, requiring at least Analyst permissions.

One exposes Mixpanel Warehouse Connectors through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mixpanel-warehouse-connectors` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mixpanel Warehouse Connectors is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mixpanel Warehouse Connectors account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WarehouseImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Warehouse Import | GET | `/projects/{{projectId}}/warehouse-sources/imports/{{importId}}` | `conn_mod_def::GJ4_SH2vULk::6LszALfrRXWkHtdXezeKYw` |
| List a Project’s Warehouse Imports | GET | `/projects/{{projectId}}/warehouse-sources/imports` | `conn_mod_def::GJ4_SHDN8Vs::HMY6qkZKQE67RAEkA-E9nA` |
| Create an Event Stream Import for a Project | POST | `/projects/{{projectId}}/warehouse-sources/imports/event-stream` | `conn_mod_def::GJ4_R_laU_o::QUr3CacuTBeyv1pGO8f-BA` |
| Delete a Project's Warehouse Import | DELETE | `/projects/{{projectId}}/warehouse-sources/imports/{{importId}}` | `conn_mod_def::GJ4_SIB4Y8o::uha0Wb70QI2mjwJvjfzbDw` |
| Run a Project's Warehouse Import Manual Sync | PUT | `/projects/{{projectId}}/warehouse-sources/imports/{{importId}}/manual-sync` | `conn_mod_def::GJ4_SH0yvXs::9DLqJHpsTseRM9byiWkymg` |
| Update a Warehouse Import (Project) | PATCH | `/projects/{{projectId}}/warehouse-sources/imports/{{importId}}` | `conn_mod_def::GJ4_SViaODk::372z6uxCTDGXNbaX7x3R6w` |

### WarehouseGroupsImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Groups Import for a Project | POST | `/projects/{{projectId}}/warehouse-sources/imports/groups` | `conn_mod_def::GJ4_R6suVQk::_2__PZpeQFOZI5_HJ26nmw` |

### WarehousePeopleImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a People Import for a Project (Warehouse Source) | POST | `/projects/{{projectId}}/warehouse-sources/imports/people` | `conn_mod_def::GJ4_R-yY93w::zTHytnXbR6GjAGrbVZd0cg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/api/app/me` | `conn_mod_def::GJ4_R9jRaXQ::68VHWY-kQuC7q524Iax18w` |

### WarehouseLookupTableImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Lookup Table Import for a Project | POST | `/projects/{{projectId}}/warehouse-sources/imports/lookup-table` | `conn_mod_def::GJ4_R_E1I-k::9Slj0tVYSyOWVnMPJL0hFg` |

### WarehouseImportJobExecutionHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Warehouse Import Job’s Execution History (Project) | GET | `/projects/{{projectId}}/warehouse-sources/imports/{{importId}}/history` | `conn_mod_def::GJ4_SNSrMss::ZgPClrB9SQ2KMbrsr8Gt8A` |

## When a call fails

The error comes from Mixpanel Warehouse Connectors, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mixpanel-warehouse-connectors

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
