---
name: ninox
description: Ninox is a low-code database and workflow platform that enables teams to build custom business applications, manage structured data, and automate processes, allowing organizations to create internal tools and integrate operational workflows without extensive software development. Read and write Ninox data through One: records, fields, workspacemodules, workspacemoduletablefields, tables, modules and more, 23 actions with real parameter documentation. Use whenever the user asks to look something up in Ninox, create or update a record there, or build code against the Ninox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ninox
  generated-from: one-knowledge-base
---

# Ninox through One

Ninox is a low-code database and workflow platform that enables teams to build custom business applications, manage structured data, and automate processes, allowing organizations to create internal tools and integrate operational workflows without extensive software development.

One exposes Ninox through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ninox` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ninox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ninox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Records From a Workspace Module Table | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/records` | `conn_mod_def::GK64yMVWKgg::UepplJPwRzK4klsWG98FMw` |
| Create Records in a Workspace Module Table | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/records` | `conn_mod_def::GK64yIlhIng::v4wedH77TQOVqiSScjHSZQ` |
| Delete Records From a Table in a Workspace Module | DELETE | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/records` | `conn_mod_def::GK64yJD38dg::vYH761BHRu6h-3yfH6j-1w` |
| Import CSV Records into a Workspace Module Table | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/records/import/csv` | `conn_mod_def::GK64yg6CTpA::9q8c45uHQUu9BS618qQnmg` |
| Update Records in a Table | PATCH | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/records` | `conn_mod_def::GK64yWJGLKA::jHjEfHnGTsWRdZwRsIGJYw` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Fields in a Workspace Module Table | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields` | `conn_mod_def::GK64x_v4_DA::cwT1TZS0SVmAZF0ZEq2kCw` |
| Create a Field in a Ninox Workspace Module Table | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields` | `conn_mod_def::GK64x015efA::UYGXaLgxT1SPogb-10fHMQ` |
| Create Multiple Fields in a Table (Batch) | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields/batch` | `conn_mod_def::GK64x0b162g::f7hfMyfFTDuEEGOPg58SpA` |
| Delete a Field in a Workspace Module Table | DELETE | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields/{{fieldName}}` | `conn_mod_def::GK64x0M75PA::RTE5Ka4LQECcPln7w9buvA` |

### WorkspaceModules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Workspace Module | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}` | `conn_mod_def::GK64x9royEA::4EH9lf1-TYiklP7QUz2Bkg` |
| Create a Workspace Module | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules` | `conn_mod_def::GK64x8vSsPA::MJQyEcP2SlezsQO35_YweA` |
| Delete a Workspace Module | DELETE | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}` | `conn_mod_def::GK64x9dv5ZA::dC7J_fwaTTC6ACJGooeYNg` |
| Update a Workspace Module | PATCH | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}` | `conn_mod_def::GK64yIex78A::J0Z_6TLQQCinFbG6j7jN-A` |

### WorkspaceModuleTableFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Field in a Workspace Module Table | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields/{{fieldName}}` | `conn_mod_def::GK64x0OAQPA::IRL9IdDqTTGL3EUJEe60Ng` |
| Delete Multiple Fields in a Workspace Module Table (Batch) | DELETE | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields/batch` | `conn_mod_def::GK64x1E7SJg::bo7ikjX6Q4q9gXU6wZH8fA` |
| Update a Workspace Module Table Field | PATCH | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}/fields/{{fieldName}}` | `conn_mod_def::GK64x-kJFbA::z2sCAHwnT6C3-UyOLiMnVg` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Table in a Module | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}` | `conn_mod_def::GK64yV3cEAg::SoxrY1ElQfCCgc4zlSsU9Q` |
| List All Tables in a Workspace Module | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables` | `conn_mod_def::GK64ypjM1XA::T-esKvMHRvyj2TL1SMXd9A` |
| Create a Table in a Workspace Module | POST | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables` | `conn_mod_def::GK64yYyE8qg::QvpTzJKrTSep6xnZUzV3Xg` |

### Modules

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Modules in a Workspace | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules` | `conn_mod_def::GK64yIefQoA::CNeZ187CT6u3Ms9c2lnnzg` |

### ModuleTables

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Module Table in a Workspace | DELETE | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}` | `conn_mod_def::GK64yYhyAng::gMrdoR-wSrSCDUpIb7zqdA` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workspace Details | GET | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}` | `conn_mod_def::GK64ypH4rhg::YjWQBexgR9iEFTreOKFMGA` |

### WorkspaceModuleTables

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Workspace Module Table | PATCH | `/api/v1/workspace/{{NINOX_WORKSPACE_ID}}/modules/{{moduleName}}/tables/{{tableName}}` | `conn_mod_def::GK64yqVSCLA::sP5knGXBT3GWebO0tGwcwQ` |

## When a call fails

The error comes from Ninox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ninox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
