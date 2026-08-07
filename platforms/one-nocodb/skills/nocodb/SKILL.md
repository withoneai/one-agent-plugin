---
name: nocodb
description: NocoDB is an open-source no-code database platform that turns relational databases into collaborative spreadsheet-style interfaces and APIs, allowing teams and developers to manage data, build internal tools, automate workflows, and integrate existing SQL databases without migrating underlying data. Read and write NocoDB data through One: bases, tables, tablerecords, columns, tablehooks, views and more, 167 actions with real parameter documentation. Use whenever the user asks to look something up in NocoDB, create or update a record there, or build code against the NocoDB API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nocodb
  generated-from: one-knowledge-base
---

# NocoDB through One

NocoDB is an open-source no-code database platform that turns relational databases into collaborative spreadsheet-style interfaces and APIs, allowing teams and developers to manage data, build internal tools, automate workflows, and integrate existing SQL databases without migrating underlying data.

One exposes NocoDB through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nocodb` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NocoDB is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NocoDB account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bases

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate the Base Cost | GET | `/api/v2/meta/bases/{{baseId}}/cost` | `conn_mod_def::GLTrfY_oj_g::RkijMiTnQJC_0j6Qq5xQeQ` |
| Get Base Schema | GET | `/api/v2/meta/bases/{{baseId}}` | `conn_mod_def::GLTrfqPZELg::cuwBvXk2Tou-Ux-jGjL9LQ` |
| List Bases for a Workspace | GET | `/api/v2/meta/workspaces/{{workspaceId}}/bases` | `conn_mod_def::GLTrk1iBqag::JE0eW2CwQV-F81eq9OxXlw` |
| List Bases Using Meta Bases OSS | GET | `/api/v2/meta/bases/` | `conn_mod_def::GLTrfxtJNOg::ZFG31YwhTeqnhzsjRHd2uA` |
| Create a Base in a Workspace | POST | `/api/v2/meta/workspaces/{{workspaceId}}/bases` | `conn_mod_def::GLTrfiaJtFA::Zdvw5sStT2WpjA4X7Nt-lA` |
| Create Base Using Meta Bases | POST | `/api/v2/meta/bases/` | `conn_mod_def::GLTrfhIy4wA::HsytS6TKSAeb3BIFPgnLHQ` |
| Delete Base | DELETE | `/api/v2/meta/bases/{{baseId}}` | `conn_mod_def::GLTrfghymDg::oRClIpslTMiiHERpSmCQLw` |
| Duplicate a Base | POST | `/api/v2/meta/duplicate/{{baseId}}` | `conn_mod_def::GLTrfqFpIig::4owULLWpTGilopghnz5hyg` |
| Update a Base | PATCH | `/api/v2/meta/bases/{{baseId}}` | `conn_mod_def::GLTrf-0EiWA::Ll-9X8M4Qp-6P2UYi2wuEg` |

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tables for a Base Source | GET | `/api/v2/meta/bases/{{baseId}}/{{sourceId}}/tables` | `conn_mod_def::GLTrjpDRs3A::_uYR5oWbRZKHqWSQmsWMfQ` |
| List Tables in a Base | GET | `/api/v2/meta/bases/{{baseId}}/tables` | `conn_mod_def::GLTrgL0XG5A::fBIer2PGQ7OHr_gvl2DdIQ` |
| Create a Table in a Base | POST | `/api/v2/meta/bases/{{baseId}}/tables` | `conn_mod_def::GLTrgAJeV3g::1HgGwIgdQhSwbnlEpxDHcA` |
| Create a Table in a Base Source | POST | `/api/v2/meta/bases/{{baseId}}/{{sourceId}}/tables` | `conn_mod_def::GLTrjZzygLg::Ti83ZG5fQdSON4eEgsSxag` |
| Delete Table | DELETE | `/api/v2/meta/tables/{{tableId}}` | `conn_mod_def::GLTrf-zxGNA::tPkFljwDT6GDQxa-Qy5ApA` |
| Duplicate a Table in a Base | POST | `/api/v2/meta/duplicate/{{baseId}}/table/{{tableId}}` | `conn_mod_def::GLTrgJjQLnA::0QzHoOjITT274x7nmwdHiQ` |
| Reorder a Table | POST | `/api/v2/meta/tables/{{tableId}}/reorder` | `conn_mod_def::GLTrgJzyvqA::XBaIxhmVSraTpG0tW1YzIg` |
| Update a Table | PATCH | `/api/v2/meta/tables/{{tableId}}` | `conn_mod_def::GLTrgJxKPeg::GPbJlKH6SwqVTw8lVspCOA` |

### TableRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Table Records for a Table | GET | `/api/v2/tables/{{tableId}}/records` | `conn_mod_def::GLTrkENiV8g::E5T_icTTQ_WslhAEa9FkiQ` |
| Read Table Record | GET | `/api/v2/tables/{{tableId}}/records/{{recordId}}` | `conn_mod_def::GLTrkDGQUOA::Pp6BT7ToT6y2VWq7VYRwGw` |
| Create Table Records for a Table | POST | `/api/v2/tables/{{tableId}}/records` | `conn_mod_def::GLTrj6WgKIA::kw4JvgJWTFq0KxP6XQIHMQ` |
| Delete Table Records | DELETE | `/api/v2/tables/{{tableId}}/records` | `conn_mod_def::GLTrj6cfrDA::eCs0fK7SQRqIHX-0GWPyHQ` |
| Link Records to a Table Record | POST | `/api/v2/tables/{{tableId}}/links/{{linkFieldId}}/records/{{recordId}}` | `conn_mod_def::GLTrj69OL4A::6v1xiHNhQn-bKY7cEOsDrw` |
| Update Table Records | PATCH | `/api/v2/tables/{{tableId}}/records` | `conn_mod_def::GLTrkCOuh1g::1-Sc4s6CTiy4NhC6Eivsvg` |

### Columns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Column Metadata | GET | `/api/v2/meta/columns/{{columnId}}` | `conn_mod_def::GLTrgTDKwHg::JHzkir7rQBGKzuR_FmocJA` |
| Create a Column for a Table | POST | `/api/v2/meta/tables/{{tableId}}/columns` | `conn_mod_def::GLTrgXM2M0g::-mvjJQ8JQEWpULO7hBIKcw` |
| Create Primary Value for a Column | POST | `/api/v2/meta/columns/{{columnId}}/primary` | `conn_mod_def::GLTrgTOMbNA::USC6DsQgRyyw7473iK8b7g` |
| Delete a Column | DELETE | `/api/v2/meta/columns/{{columnId}}` | `conn_mod_def::GLTrgTwtMiA::71puP2wNSzeeX51rYH8rzw` |
| Update a Column | PATCH | `/api/v2/meta/columns/{{columnId}}` | `conn_mod_def::GLTrgfhPpBA::ECM703HSRDWtVl_xj6HRkw` |

### TableHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Table Hooks for a Table | GET | `/api/v2/meta/tables/{{tableId}}/hooks` | `conn_mod_def::GLTrg7GW0bg::KqNQ8Wu4TAW3B8lOA8r3KA` |
| Create a Table Hook | POST | `/api/v2/meta/tables/{{tableId}}/hooks` | `conn_mod_def::GLTrgxkokmg::64SrQJF_RNWSjJx0ji8Oxw` |
| Delete Table Hook | DELETE | `/api/v2/meta/hooks/{{hookId}}` | `conn_mod_def::GLTrgx11rTg::z_JwDOBwQo-EbSCoRWFd-g` |
| Test Hook for a Table | POST | `/api/v2/meta/tables/{{tableId}}/hooks/test` | `conn_mod_def::GLTrg7e5TLA::qrC5LCKzTdab2665xAnUEw` |
| Update Table Hook | PATCH | `/api/v2/meta/hooks/{{hookId}}` | `conn_mod_def::GLTrg8N_K3g::LqXoT57yTaizOmELiCjS5A` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| List Views for a Table | GET | `/api/v2/meta/tables/{{tableId}}/views` | `conn_mod_def::GLTrhiEMaPg::zrkFkb2BQ8eZACYKyaS-Ug` |
| Delete a View | DELETE | `/api/v2/meta/views/{{viewId}}` | `conn_mod_def::GLTrhO_Xy8A::OSnJd5hqRR6viraqlWn3PQ` |
| Hide All Columns in a View | POST | `/api/v2/meta/views/{{viewId}}/hide-all` | `conn_mod_def::GLTrhgujzdA::98q1zXKUQeWe7KNzkmcxfA` |
| Show All Columns in a View | POST | `/api/v2/meta/views/{{viewId}}/show-all` | `conn_mod_def::GLTrhsBK2AA::nr5S_dixRoaWkTLAhLfI1g` |
| Update View | PATCH | `/api/v2/meta/views/{{viewId}}` | `conn_mod_def::GLTrh5TmyrA::wfCXYTqGQ6yWVA7Nv7tKJw` |

### Plugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin | GET | `/api/v2/meta/plugins/{{pluginId}}` | `conn_mod_def::GLTriUE0qnA::bnpAg6U8T_SuDa9E55iU0A` |
| Get Plugin Status | GET | `/api/v2/meta/plugins/{{pluginId}}/status` | `conn_mod_def::GLTriUn2p6g::-TG5X1u0Rb-FnzgVmZzc2Q` |
| List Plugins | GET | `/api/v2/meta/plugins` | `conn_mod_def::GLTris70wzA::pyIUoBK4T22R1KuPryeCYg` |
| Test Plugin | POST | `/api/v2/meta/plugins/test` | `conn_mod_def::GLTriuKH-kg::xF29WNYNQLGAafTc1HfL0w` |
| Update Plugin | PATCH | `/api/v2/meta/plugins/{{pluginId}}` | `conn_mod_def::GLTriux2r-A::vLPnGxRgThOKQbxOWvwB1A` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/api/v2/meta/workspaces` | `conn_mod_def::GLTrkt_ecDA::JQ-p-DJcQfCpuhVeHbGhIQ` |
| Read Workspace | GET | `/api/v2/meta/workspaces/{{workspaceId}}` | `conn_mod_def::GLTrkcMdTDg::w5voYMlNQKuyuRhCwdWoOQ` |
| Create Workspaces | POST | `/api/v2/meta/workspaces` | `conn_mod_def::GLTrkcVRI_g::NxsDb63VSp6pkcu1aEHhHg` |
| Delete Workspace | DELETE | `/api/v2/meta/workspaces/{{workspaceId}}` | `conn_mod_def::GLTrkcL5n2g::xM6aIsvMQNO70gCwHHkLYA` |
| Update Workspace | PATCH | `/api/v2/meta/workspaces/{{workspaceId}}` | `conn_mod_def::GLTrk1hdGkg::kfTKrN1nRLSEoMk-YdTS_Q` |

### SharedBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Base's Shared Base | GET | `/api/v2/meta/bases/{{baseId}}/shared` | `conn_mod_def::GLTrfxPkoOg::NrXD8qhtRLKIypbdscrq4w` |
| Create a Shared Base for a Base | POST | `/api/v2/meta/bases/{{baseId}}/shared` | `conn_mod_def::GLTrfg4OpSA::_f0xU9GNQlS56aJPRmZUtA` |
| Delete a Base's Shared Base | DELETE | `/api/v2/meta/bases/{{baseId}}/shared` | `conn_mod_def::GLTrfqBZ4MA::5O4OSVHRTTCnBZ8W4fPgpg` |
| Update a Base's Shared Base | PATCH | `/api/v2/meta/bases/{{baseId}}/shared` | `conn_mod_def::GLTrf-0EsHA::QDQl2Pn9SA-TxnGTFbn70Q` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Users | GET | `/api/v2/meta/workspaces/{{workspaceId}}/users` | `conn_mod_def::GLTrlNh0-8g::dGTJHhWdSc-6T6l3M7648w` |
| Read a Workspace User | GET | `/api/v2/meta/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLTrk1WlvpA::eoU9W_6GQp6SqFbB9h9Uow` |
| Delete a Workspace User | DELETE | `/api/v2/meta/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLTrk-kOh8A::QQ7qYIp1R76liYiiRqsRmA` |
| Update Workspace User | PATCH | `/api/v2/meta/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLTrk3B9pZg::-aI0MqjyQ_q_ZCKwzFmcxQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Comments | GET | `/meta/comments/count` | `conn_mod_def::GLTrkMAt2kg::2p-w32gwTI-Ywqi7oEiZ-w` |
| List Comments | GET | `/api/v2/meta/comments` | `conn_mod_def::GLTrkToVHOA::SvDymNOfQfet9EDSUIGOHA` |
| Add Comment | POST | `/api/v2/meta/comments` | `conn_mod_def::GLTrkLx26OA::u_lOoTdWR_mXyEcrE2LYUw` |
| Update Comment | PATCH | `/api/v2/meta/comment/{{commentId}}` | `conn_mod_def::GLTrkef7bGA::qfwmO3smTeWbRBLRQI58qg` |

### ApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Tokens in a Base | GET | `/api/v2/meta/bases/{{baseId}}/api-tokens` | `conn_mod_def::GLTre_7NiIA::H1k5k9CwQoGMsv3amjGVtg` |
| Create API Token in a Base | POST | `/api/v2/meta/bases/{{baseId}}/api-tokens` | `conn_mod_def::GLTrfATN2WA::StzwtEW3RoKraENfTvyOeg` |
| Delete API Token in a Base | DELETE | `/api/v2/meta/bases/{{baseId}}/api-tokens/{{tokenId}}` | `conn_mod_def::GLTre_FkkKg::kd24_gSsTpeGWJd9GSHwJg` |

### Filters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Filter Metadata | GET | `/api/v2/meta/filters/{{filterId}}` | `conn_mod_def::GLTrgqi12BA::c4Op_mNlRROOKvvTC9hQSQ` |
| Delete Filter | DELETE | `/api/v2/meta/filters/{{filterId}}` | `conn_mod_def::GLTrgdv2KgA::l313nOAvSlaTQsqFTc7vCA` |
| Update Filter | PATCH | `/api/v2/meta/filters/{{filterId}}` | `conn_mod_def::GLTrgm4x4Pg::f1GbdNUcSE6MRC6wqCiMXQ` |

### Kanbans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Kanban View Metadata | GET | `/api/v2/meta/kanbans/{{kanbanViewId}}` | `conn_mod_def::GLTrhg7A0Pg::Rvt-YJasQWGQ-mn7wrL3FQ` |
| Create Kanban View for a Table | POST | `/api/v2/meta/tables/{{tableId}}/kanbans` | `conn_mod_def::GLTrhZSYQ4g::KRFY1V-ZR9iEfHm9rD_dkA` |
| Update Kanban View | PATCH | `/api/v2/meta/kanbans/{{kanbanViewId}}` | `conn_mod_def::GLTrh6MjkTA::CoMNEtUFR8-uV2jo8LX0RQ` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources for a Base | GET | `/api/v2/meta/bases/{{baseId}}/sources/` | `conn_mod_def::GLTrjnAWt-g::t6Dfxo28T8Og6-0wIPeNzg` |
| Create a Source for a Base | POST | `/api/v2/meta/bases/{{baseId}}/sources/` | `conn_mod_def::GLTrjZD2yMg::ah4k0YOaTLKAEOcjwO_Irg` |
| Disable Share Erd for a Source in a Base | DELETE | `/api/v2/meta/bases/{{baseId}}/sources/{{sourceId}}/share/erd` | `conn_mod_def::GLTrjwiRelg::7sDIKPXjRXSMC1Il0nLPkw` |

### BaseUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Base Users | GET | `/api/v2/meta/bases/{{baseId}}/users` | `conn_mod_def::GLTrfIFy7_A::zql40MyYRFyFpFCh83DZEQ` |
| Resend Invite for a Base User | POST | `/api/v2/meta/bases/{{baseId}}/users/{{userId}}/resend-invite` | `conn_mod_def::GLTrfQzuWZg::_td9f2ggS8OBYtRASnmZig` |
| Update a Base User | PATCH | `/api/v2/meta/bases/{{baseId}}/users/{{userId}}` | `conn_mod_def::GLTrfZLqL2g::O71-WNfsQZGEx1elCmDiKA` |

### BaseUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Base User | POST | `/api/v2/meta/bases/{{baseId}}/users` | `conn_mod_def::GLTrfAdTlfg::l6qZg4cGTsKlghwfAKPB1g` |
| Delete a Base User | DELETE | `/api/v2/meta/bases/{{baseId}}/users/{{userId}}` | `conn_mod_def::GLTrfH4CZfg::I8b5Ohl-Qwy-l_nxF_1vZQ` |

### ViewFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| List View Filters | GET | `/api/v2/meta/views/{{viewId}}/filters` | `conn_mod_def::GLTrgnL5GYA::UWDMAx1hS8CqN4AfsG0ArQ` |
| Create View Filter | POST | `/api/v2/meta/views/{{viewId}}/filters` | `conn_mod_def::GLTrgfDzEtg::YwvQPohfRTOzRjcAL4fO_g` |

### HookFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hook Filters | GET | `/api/v2/meta/hooks/{{hookId}}/filters` | `conn_mod_def::GLTrhFJTynA::WvoZ-y9zQN6CzmNlWsULjQ` |
| Create Hook Filters for a Hook | POST | `/api/v2/meta/hooks/{{hookId}}/filters` | `conn_mod_def::GLTrg7Ik0Ug::5C4rhhHhQdulsGzk2fT5Hg` |

### ViewSorts

| Action | Method | Path | Action id |
|---|---|---|---|
| List View Sorts | GET | `/api/v2/meta/views/{{viewId}}/sorts` | `conn_mod_def::GLTrgzEksYA::Dl_d7XXaSbCHc-P-0UA_YA` |
| Create View Sort for a View | POST | `/api/v2/meta/views/{{viewId}}/sorts` | `conn_mod_def::GLTrgnQdgPg::7K3BzBnLSyGWUJeSYUBi0Q` |

### ViewColumns

| Action | Method | Path | Action id |
|---|---|---|---|
| List View Columns | GET | `/api/v2/meta/views/{{viewId}}/columns` | `conn_mod_def::GLTriCHfwCA::1c9xDxdiRJaReOC8wpwzJw` |
| Create Column in View | POST | `/api/v2/meta/views/{{viewId}}/columns` | `conn_mod_def::GLTrh5Ta74g::4lPPzm78S8eZIv733Xx8qQ` |

### SharedView

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Shared View for a View | POST | `/api/v2/meta/views/{{viewId}}/share` | `conn_mod_def::GLTriCEkuTg::BJ9HGzyAQsmGc2QCJdcSNA` |
| Update Shared View | PATCH | `/api/v2/meta/views/{{viewId}}/share` | `conn_mod_def::GLTriVKr7vg::5g4ekNXzQ2qTvc_8StSykw` |

### SharedViews

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shared Views for a Table | GET | `/api/v2/meta/tables/{{tableId}}/share` | `conn_mod_def::GLTriCMyV9A::w8I15CAcQruKRPLmJWhO2g` |
| Delete a Shared View | DELETE | `/api/v2/meta/views/{{viewId}}/share` | `conn_mod_def::GLTriCE1bpA::5afxL0_ZR8miEEYwL-SOYQ` |

### Sorts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Sort | DELETE | `/api/v2/meta/sorts/{{sortId}}` | `conn_mod_def::GLTrgnbkQhg::-urvK5gcQvC0csd7GXEbpA` |

1 more Sorts actions are available through search.

This lists 90 of 167 actions. For anything not here, call `search_one_platform_actions` with platform `nocodb`. The full catalog is at https://www.withone.ai/knowledge/nocodb.

## When a call fails

The error comes from NocoDB, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nocodb

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
