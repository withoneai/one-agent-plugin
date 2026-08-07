---
name: bug-herd
description: A web-based issue and feedback tracking tool that lets teams capture visual bugs directly on web pages, annotate problems, manage tickets, and collaborate on fixes for faster design and development cycles. Read and write BugHerd data through One: projects, tasks, projectcolumns, webhooks, attachments, taskattachment and more, 30 actions with real parameter documentation. Use whenever the user asks to look something up in BugHerd, create or update a record there, or build code against the BugHerd API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bug-herd
  generated-from: one-knowledge-base
---

# BugHerd through One

A web-based issue and feedback tracking tool that lets teams capture visual bugs directly on web pages, annotate problems, manage tickets, and collaborate on fixes for faster design and development cycles.

One exposes BugHerd through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bug-herd` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BugHerd is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BugHerd account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Projects | GET | `/api_v2/users/{{USER_ID}}/projects.json` | `conn_mod_def::GJxd4oiorfc::RnCsGDtMS3mNTL0--aH0tw` |
| List Projects | GET | `/projects.json` | `conn_mod_def::GJxd3G4J7dQ::ainIdRz1TOSBexEC5D-EIA` |
| Create a Project | POST | `/projects.json` | `conn_mod_def::GJxd3ZgJjAE::SHM0CHe1Rq-yFTefKMndTw` |
| Delete a Project | DELETE | `/projects/{{PROJECT_ID}}.json` | `conn_mod_def::GJxd3xQQyPM::86xHOYDJTk-IitdTFlG2uA` |
| Update a Project | PUT | `/projects/{{PROJECT_ID}}.json` | `conn_mod_def::GJxd3sRZyWw::tNZOpzrmTtqlfSNhc3snJQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Tasks (Including Archived) | GET | `/api_v2/projects/{{PROJECT_ID}}/tasks.json` | `conn_mod_def::GJxd33lL9TI::7HBpXt_eQ4mRQXFJ0KScBQ` |
| List a User's Tasks | GET | `/api_v2/users/{{USER_ID}}/tasks.json` | `conn_mod_def::GJxd4illkRs::HexnhcUKSZWNnKQvTPyg-g` |
| Show a Task (Task Details) | GET | `/tasks/{{task_id}}.json` | `conn_mod_def::GJxd3-ZALKE::CQvuCjDWSoe3bXcs4DnKFQ` |
| Create a Task in a Project | POST | `/api_v2/projects/{{PROJECT_ID}}/tasks.json` | `conn_mod_def::GJxd4FikOL8::CBW9DkDUTw2JMaORnzllbw` |
| Move Tasks to Another Project | POST | `/api_v2/projects/{{PROJECT_ID}}/tasks/move_tasks.json` | `conn_mod_def::GJxd4Sku788::8jlLvM8qSxuIPieCGI0sCA` |

### ProjectColumns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Column's Details | GET | `/api_v2/projects/{{PROJECT_ID}}/columns/{{COLUMN_ID}}.json` | `conn_mod_def::GJxd2gHgI7I::UiLkyR7cTiGNacf8XKYltg` |
| List a Project’s Columns | GET | `/projects/{{PROJECT_ID}}/columns.json` | `conn_mod_def::GJxd2Zs5hFI::DdR-TWZDRz63GKaNkOoxvw` |
| Create a Project Column | POST | `/api_v2/projects/{{PROJECT_ID}}/columns.json` | `conn_mod_def::GJxd2l3OONI::NJXZ0kg2THStm4TkVQQntg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api_v2/webhooks.json` | `conn_mod_def::GJxd4tlHN7k::8_X4cz36SqGAljLhskHHpA` |
| Create a Webhook | POST | `/webhooks.json` | `conn_mod_def::GJxd4yNwLSA::JV-2Sp1mRii2-fVlkkoRTQ` |
| Delete a Webhook | DELETE | `/api_v2/webhooks/{{ID}}.json` | `conn_mod_def::GJxd43A_kJI::t4iE436sR0yedn95ZF0W9Q` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task’s Attachments (in a Project) | GET | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/attachments.json` | `conn_mod_def::GJxd14MLO_0::XCjfT5zpQJ-axku52fnxQg` |
| Upload an Attachment to a Project Task | POST | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/attachments/upload` | `conn_mod_def::GJxd2Mrt_ak::JF8EMb7rT9y_dhOAyo8yyQ` |

### TaskAttachment

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Task Attachment in a Project | GET | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/attachments/{{ID}}.json` | `conn_mod_def::GJxd1_xT3ok::QLlPtkHDRAiRHh2RwlfgLA` |
| Create a Task Attachment (from URL) | POST | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/attachments.json` | `conn_mod_def::GJxd2Goqcq4::rxFZGTLjTJ-8EBnVdncB2g` |

### TaskAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Task Attachment (Project → Task) | DELETE | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/attachments/{{ID}}.json` | `conn_mod_def::GJxd2SmmsJo::D5UpQkhFSyaiLccs0wm1RQ` |

### ProjectColumn

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Project Column | PUT | `/api_v2/projects/{{PROJECT_ID}}/columns/{{COLUMN_ID}}.json` | `conn_mod_def::GJxd2r6SdJo::LUk_3a9aTM6lWAehJ6pynA` |

### TaskComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task's Comments (Paginated) | GET | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/comments.json` | `conn_mod_def::GJxd2yBJZZ4::Ls7n9mw8S-e7AS-0Y12EzA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Comment on a Task | POST | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}/comments.json` | `conn_mod_def::GJxd244KgH0::dSMAEJNsQJKaA4reuMG0rA` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Details | GET | `/organization.json` | `conn_mod_def::GJxd2_IOx7Q::RhcH7a23SjieWr7wa5VUJA` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Project | GET | `/api_v2/projects/{{PROJECT_ID}}.json` | `conn_mod_def::GJxd3SMwKZM::3xUqZgdmRSa0U-7eJg4y5g` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Member to a Project | POST | `/api_v2/projects/{{PROJECT_ID}}/add_member.json` | `conn_mod_def::GJxd3e_DWv4::TjkEr7-WRMOz9q-L8NzhKg` |

### Guests

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Guest (Client) to a Project | POST | `/api_v2/projects/{{PROJECT_ID}}/add_guest.json` | `conn_mod_def::GJxd3k1cAzY::aJC2FvHGRHK9yWNIhwsr5g` |

### ProjectTask

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Project Task | PUT | `/api_v2/projects/{{PROJECT_ID}}/tasks/{{TASK_ID}}.json` | `conn_mod_def::GJxd4LiVrjs::5m5hZ8mUTPmkCEGad2OS-Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users in an Account | GET | `/users.json` | `conn_mod_def::GJxd4Xb3BLo::rluSfY_aQViJce-ki02h1Q` |

## When a call fails

The error comes from BugHerd, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bug-herd

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
