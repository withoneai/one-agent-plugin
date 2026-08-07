---
name: motion
description: Motion is a productivity and scheduling platform that uses AI to plan tasks, manage calendars, and coordinate meetings, allowing individuals and teams to automate daily prioritization, reduce manual scheduling, and keep work aligned with deadlines and availability. Read and write Motion data through One: tasks, customfieldvalues, customfields, projects, recurringtasks, comments and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Motion, create or update a record there, or build code against the Motion API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: motion
  generated-from: one-knowledge-base
---

# Motion through One

Motion is a productivity and scheduling platform that uses AI to plan tasks, manage calendars, and coordinate meetings, allowing individuals and teams to automate daily prioritization, reduce manual scheduling, and keep work aligned with deadlines and availability.

One exposes Motion through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `motion` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Motion is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Motion account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task | GET | `/v1/tasks/{{id}}` | `conn_mod_def::GLNU_80MFmg::jeDfRwl_Q4q2zXSM4_Op3A` |
| List Tasks | GET | `/v1/tasks` | `conn_mod_def::GLNVAHbZfmA::4bEWsfNAR66LOv45Kw9rCw` |
| Create Task | POST | `/v1/tasks` | `conn_mod_def::GLNU_-XG7bg::yUwfraLgTOKL_qNdBob-OQ` |
| Delete Task | DELETE | `/v1/tasks/{{id}}` | `conn_mod_def::GLNU_8zNKQg::LAps7Q5cSZO3ubFpHKRCgQ` |
| Move Task | PATCH | `/v1/tasks/{{id}}/move` | `conn_mod_def::GLNVAGMnNig::9XRohMVwSbmscvnj7bNx3Q` |
| Unassign Task | DELETE | `/v1/tasks/{{id}}/assignee` | `conn_mod_def::GLNVAFOlIlA::sqSXCaclSn2NqkUrJUw1yw` |
| Update Task | PATCH | `/v1/tasks/{{id}}` | `conn_mod_def::GLNVAF31JhA::x6f7aI97R7KrMAz19Nt_sg` |

### CustomFieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Custom Field To Project | POST | `/v1/beta/custom-field-values/project/{{projectId}}` | `conn_mod_def::GLNU_jtqUsA::LpNWJGVZSheeN81k4Siaeg` |
| Add Custom Field To Task | POST | `/v1/beta/custom-field-values/task/{{taskId}}` | `conn_mod_def::GLNU_jTJ0hA::lkL3LrV1TdiMFV4zKBN2IA` |
| Delete From Project | DELETE | `/v1/beta/custom-field-values/project/{{projectId}}/custom-fields/{{valueId}}` | `conn_mod_def::GLNU_r1ln1A::EC9WavZARBescjB5YD73DA` |
| Delete From Task | DELETE | `/v1/beta/custom-field-values/task/{{taskId}}/custom-fields/{{valueId}}` | `conn_mod_def::GLNU_rvnhug::WQqvgtOsQS23iFfw6mE0lQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields | GET | `/v1/beta/workspaces/{{workspaceId}}/custom-fields` | `conn_mod_def::GLNU_rS8NxA::p54xk91GSE21cv90CzEouw` |
| Create Custom Field | POST | `/v1/beta/workspaces/{{workspaceId}}/custom-fields` | `conn_mod_def::GLNU_i7BxLg::l7PE9RsHRGOvpLTCR_FooQ` |
| Delete Custom Field | DELETE | `/v1/beta/workspaces/{{workspaceId}}/custom-fields/{{id}}` | `conn_mod_def::GLNU_rvLDdg::OPgpGoi2SUGhkuDPUWdKWg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project | GET | `/v1/projects/{{id}}` | `conn_mod_def::GLNU_yyo1nA::jGhwNIHtT6CS172zAqOJiA` |
| List Projects | GET | `/v1/projects` | `conn_mod_def::GLNU_0zs2PA::2PuCU3K6QUabOcOw9rT7Fg` |
| Create Project | POST | `/v1/projects` | `conn_mod_def::GLNU_rS4Q1g::ZlWESg4ASgK3xIxV5aK2bQ` |

### RecurringTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recurring Tasks | GET | `/v1/recurring-tasks` | `conn_mod_def::GLNU_zqYraA::EzYeuzaUToGAnUN_ZGk1YQ` |
| Create Recurring Task | POST | `/v1/recurring-tasks` | `conn_mod_def::GLNU_zWEuJA::WuU214IfSR2p29TE0emx2A` |
| Delete Recurring Task | DELETE | `/v1/recurring-tasks/{{id}}` | `conn_mod_def::GLNU_zqhYDA::J38JAb1uSpOlPXfKB0Vnog` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comments | GET | `/v1/comments` | `conn_mod_def::GLNU_jcb-4g::xfkNbfbZTSaPtrekhEWbsw` |
| Create Comment | POST | `/v1/comments` | `conn_mod_def::GLNU_hylfgA::gIJLxZC7SRu-t-12Bk1U3Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get My User | GET | `/v1/users/me` | `conn_mod_def::GLNVAFou6pg::KlaA1ubuR7WunxLYvfndNQ` |
| List Users | GET | `/v1/users` | `conn_mod_def::GLNVATgKhmA::ZpfYIh_FQt2o7QuGkInv8Q` |

### Statuses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Statuses | GET | `/v1/statuses` | `conn_mod_def::GLNU_8zbJxA::e_VnZSImTtGNaGuF5W-muw` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Schedules | GET | `/v1/schedules` | `conn_mod_def::GLNU_9Fk0cg::FNfqOcIdQ1OK2WTsb0UCrw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/v1/workspaces` | `conn_mod_def::GLNVAP7ZUfA::pmO-9cSXThukiqRZHWp5Iw` |

## When a call fails

The error comes from Motion, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/motion

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
