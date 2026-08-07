---
name: google-tasks
description: Google Tasks is a task management tool for creating, organizing, and tracking personal to-do lists, allowing users to manage tasks alongside their Google account and related productivity workflows. Read and write Google Tasks data through One: tasks, tasklists and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Google Tasks, create or update a record there, or build code against the Google Tasks API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-tasks
  generated-from: one-knowledge-base
---

# Google Tasks through One

Google Tasks is a task management tool for creating, organizing, and tracking personal to-do lists, allowing users to manage tasks alongside their Google account and related productivity workflows.

One exposes Google Tasks through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-tasks` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Tasks is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Tasks account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task from a Task List | GET | `/tasks/v1/lists/{{tasklist}}/tasks/{{task}}` | `conn_mod_def::GMHLYcfjPo4::3sBP2lEJQTecG4k0Udp-nA` |
| List Tasks in a Task List | GET | `/tasks/v1/lists/{{tasklist}}/tasks` | `conn_mod_def::GMHLYmCf4hw::MDjr7FQ6QKW5KOrBy4A1zg` |
| Clear a Task List's Completed Tasks | POST | `/tasks/v1/lists/{{tasklist}}/clear` | `conn_mod_def::GMHLYedK6Es::AmGOPfhCRlqDfBbKeZcUhg` |
| Create a Task in a Task List | POST | `/tasks/v1/lists/{{tasklist}}/tasks` | `conn_mod_def::GMHLYeojAxY::10K6akNyT52xUCLkkh9qWg` |
| Delete a Task from a Task List | DELETE | `/tasks/v1/lists/{{tasklist}}/tasks/{{task}}` | `conn_mod_def::GMHLYdRx0pY::PbuxysSKQDmHCPq2qkvNMQ` |
| Move a Task | POST | `/tasks/v1/lists/{{tasklist}}/tasks/{{task}}/move` | `conn_mod_def::GMHLYo0ribs::IrLnAzfeQwmJ-PSnL4vC1Q` |
| Update a Task in a Task List | PATCH | `/tasks/v1/lists/{{tasklist}}/tasks/{{task}}` | `conn_mod_def::GMHLYlt2HFo::liyFS42eQl-125gRtxYtyw` |
| Update a Task in a Task List | PUT | `/tasks/v1/lists/{{tasklist}}/tasks/{{task}}` | `conn_mod_def::GMHLYmSqKzs::WwzdfCWtStmWLpPMWlLQnA` |

### TaskLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User's Task List | GET | `/tasks/v1/users/@me/lists/{{tasklist}}` | `conn_mod_def::GMHLYUeKbbQ::11JAObaYTOmFpsgpg6jC5A` |
| List Task Lists | GET | `/tasks/v1/users/@me/lists` | `conn_mod_def::GMHLYWlDQAk::eFcf_MQZQl63u86nk84Nqw` |
| Create a Task List for the Authenticated User | POST | `/tasks/v1/users/@me/lists` | `conn_mod_def::GMHLYVQcavY::JMOxS_fyR5KuWc7VM1L7mQ` |
| Delete a Task List | DELETE | `/tasks/v1/users/@me/lists/{{tasklist}}` | `conn_mod_def::GMHLYUI4ZW8::AHpaCOpZTrmZA8fLGQAnCg` |
| Patch a Task List | PATCH | `/tasks/v1/users/@me/lists/{{tasklist}}` | `conn_mod_def::GMHLYTuEHGU::JOha28Y7RVOInNfx_W8Yyg` |
| Update a User's Task List | PUT | `/tasks/v1/users/@me/lists/{{tasklist}}` | `conn_mod_def::GMHLYdJ2_No::o6DgV2kQRZ2o881RU4nhTQ` |

## When a call fails

The error comes from Google Tasks, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-tasks

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
