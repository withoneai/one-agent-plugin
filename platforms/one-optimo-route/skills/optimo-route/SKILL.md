---
name: optimo-route
description: OptimoRoute is route planning and field service scheduling software that provides APIs and automation for optimizing delivery routes, technician schedules, and order assignments, allowing logistics and service teams to improve dispatch efficiency, reduce travel time, and track operations in real time. Read and write OptimoRoute data through One: orders, completiondetails, driverparameters, planning, driversparameters, driverspositions and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in OptimoRoute, create or update a record there, or build code against the OptimoRoute API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: optimo-route
  generated-from: one-knowledge-base
---

# OptimoRoute through One

OptimoRoute is route planning and field service scheduling software that provides APIs and automation for optimizing delivery routes, technician schedules, and order assignments, allowing logistics and service teams to improve dispatch efficiency, reduce travel time, and track operations in real time.

One exposes OptimoRoute through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `optimo-route` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OptimoRoute is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OptimoRoute account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scheduling Information for an Order | GET | `/v1/get_scheduling_info` | `conn_mod_def::GLOlu9Hz3_A::S2VVulD8S3CXVxnOEZp_qA` |
| Create or Update Orders | POST | `/v1/create_or_update_orders` | `conn_mod_def::GLOluoSNjFg::TkEqqhzqT2SnwcB7jYjxIw` |
| Create Order | POST | `/v1/create_order` | `conn_mod_def::GLOlultAfTg::w4AFlH8GT8exWI_Tc8_WYQ` |
| Delete All Orders | POST | `/v1/delete_all_orders` | `conn_mod_def::GLOlum8dnjA::exJUfTo2RbCvz41pUXjubw` |
| Delete Order | POST | `/v1/delete_order` | `conn_mod_def::GLOlumWVOAA::WRLCjh3XTIee-Ik5njoRPA` |
| Delete Orders | POST | `/v1/delete_orders` | `conn_mod_def::GLOluqFeJoA::0lr6k6VHQi24AqsuUicxJA` |
| Get Orders | POST | `/v1/get_orders` | `conn_mod_def::GLOlux4Jocg::dBf23YJcQfCWv9C0YqDAyg` |
| Search Orders | POST | `/v1/search_orders` | `conn_mod_def::GLOlu65xlqg::ONgVu0qHRc6xPdBw8QkOoQ` |

### CompletionDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Completion Details | POST | `/v1/get_completion_details` | `conn_mod_def::GLOluxsaC4g::p3V9iKyqReiSj1_fNm7_Ug` |
| Update Completion Details | POST | `/v1/update_completion_details` | `conn_mod_def::GLOlvERryLg::Eni0owTzRpCjZ4R2nDsy0g` |

### DriverParameters

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Driver Parameters | POST | `/v1/update_driver_parameters` | `conn_mod_def::GLOlu7Wqnjg::3rKWEFNUSqCx3DTH5TDHMw` |

### Planning

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Planning | POST | `/v1/start_planning` | `conn_mod_def::GLOlu7X39wA::giXI21WQS7-A3hxsxaP9xg` |

### DriversParameters

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Drivers Parameters | POST | `/v1/update_drivers_parameters` | `conn_mod_def::GLOlvEvtBKg::cWnsLoYfRuOjcNsnnbfMQw` |

### DriversPositions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Drivers Positions | POST | `/v1/update_drivers_positions` | `conn_mod_def::GLOlvHJKmOA::AiaWRiNlQAi32UHyE70SWA` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | POST | `/optimo-route/test-connection` | `conn_mod_def::GLOmz19G6lA::e22_0MBuRayoPmSE-6-VVA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Events | GET | `/v1/get_events` | `conn_mod_def::GLOluxT7QeA::HG1BLz9cRV-LnYvXrO92tg` |

### PlanningStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Planning Status | GET | `/v1/get_planning_status` | `conn_mod_def::GLOluxYMwYA::I1G9Z5O5TT6cb6eRSAgk8g` |

### Routes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Routes | GET | `/v1/get_routes` | `conn_mod_def::GLOluypKbVA::f3tmxb4gQkmL4cIP2tTq3Q` |

### StopPlanning

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop Planning | POST | `/v1/stop_planning` | `conn_mod_def::GLOlu6vJTlA::COV8SYfMQ8e_0sWSpjvAOw` |

## When a call fails

The error comes from OptimoRoute, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/optimo-route

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
