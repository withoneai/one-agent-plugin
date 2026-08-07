---
name: teamcamp
description: Teamcamp is a project management platform that provides task tracking, team collaboration, time management, and client communication features, allowing teams and agencies to organize work, monitor progress, and manage projects from a centralized workspace. Read and write Teamcamp data through One: projects, project, tasks, task, taskcomments, companyusers and more, 15 actions with real parameter documentation. Use whenever the user asks to look something up in Teamcamp, create or update a record there, or build code against the Teamcamp API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: teamcamp
  generated-from: one-knowledge-base
---

# Teamcamp through One

Teamcamp is a project management platform that provides task tracking, team collaboration, time management, and client communication features, allowing teams and agencies to organize work, monitor progress, and manage projects from a centralized workspace.

One exposes Teamcamp through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `teamcamp` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Teamcamp is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Teamcamp account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v1.0/project` | `conn_mod_def::GLOsYOQ30Pg::8y-DzAGST4-mPSrQA2LWJQ` |
| Delete a Project | DELETE | `/project/{{projectId}}` | `conn_mod_def::GLOsYOTlZng::a6RXCowqQT6WiJQe5w_yfg` |
| Update a Project | PUT | `/project/{{projectId}}` | `conn_mod_def::GLOsYe2TJtg::MF8emCOjQ1KEXhixuBUU_Q` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/project/{{projectId}}` | `conn_mod_def::GLOsYPIWStg::Wc4IjM94R6m7brUs7vcVVQ` |
| Get Current Project Details for a Project | GET | `/project/{{projectId}}/getCurrentProjectDetails` | `conn_mod_def::GLOsYWHddzg::qLc89FLeRdqlP0oVAjO7XA` |
| Create Project | POST | `/v1.0/project` | `conn_mod_def::GLOsYe2M-NA::Cs9Unjj9QrS9wvJL2K-3jg` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task Details | GET | `/task/{{taskId}}` | `conn_mod_def::GLOsYWSliEg::Cb9EFilUS-y4H7Cqx4URpw` |
| List Tasks for a Project | GET | `/task` | `conn_mod_def::GLOsYXlHwkg::YCXr8l3WRJGj0y3ssWAyMg` |

### Task

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Task | POST | `/v1.0/task` | `conn_mod_def::GLOsYfGSkvA::7iztFadkTzWuScfXNnJ5Dg` |
| Update Task | PUT | `/task/updateTask/{{taskId}}` | `conn_mod_def::GLOsYfPXnQg::WI8zzhH4Tj-4ZiJ_KsONOQ` |

### TaskComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Post Comments for a Task | POST | `/task/{{taskId}}/comments` | `conn_mod_def::GLOsYffUFzg::sn_L23bQRD6F9Jjvnp4V0A` |

### CompanyUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Users | GET | `/company/users` | `conn_mod_def::GLOsYOwXXXA::peSlF0KFRzKKXiHa2wvs-w` |

### ApiKeyVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify API Key | GET | `/v1.0/verify` | `conn_mod_def::GLOsYWIHXcg::aRpRey-9TluBjiJpNP2qYg` |

### ProjectGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Groups for a Project | GET | `/project/{{projectId}}/group` | `conn_mod_def::GLOsYWXpmTg::glJjHkyiSNCOsMogKhQ91Q` |

### CompanyCustomers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Customers | GET | `/company/customers` | `conn_mod_def::GLOsYO7m8GA::T_4WjA1nQ5an4S_63QMO_A` |

## When a call fails

The error comes from Teamcamp, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/teamcamp

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
