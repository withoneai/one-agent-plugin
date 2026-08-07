---
name: dart
description: Dart is an AI-powered project management platform that helps teams plan, track, and automate work across tasks, documents, and meetings, enabling users to manage projects, generate updates, and streamline coordination through integrations and workflow assistance. Read and write Dart data through One: tasks, docs, skills, agents, webhooks, comments and more, 38 actions with real parameter documentation. Use whenever the user asks to look something up in Dart, create or update a record there, or build code against the Dart API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dart
  generated-from: one-knowledge-base
---

# Dart through One

Dart is an AI-powered project management platform that helps teams plan, track, and automate work across tasks, documents, and meetings, enabling users to manage projects, generate updates, and streamline coordination through integrations and workflow assistance.

One exposes Dart through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dart` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dart is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dart account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/api/v0/public/tasks/list` | `conn_mod_def::GLtkFqIVRtM::QvL_EcrAQUSyR7mKDCOxpg` |
| Retrieve a Task | GET | `/api/v0/public/tasks/{{id}}` | `conn_mod_def::GLtkFmZEd48::bvpxEDnOQuG8nTVA-Auy0Q` |
| Attach a File from URL to a Task | POST | `/api/v0/public/tasks/{{id}}/attachments/from-url` | `conn_mod_def::GLtkE0F8zuE::t52ebLElQq2WurV49X9XbA` |
| Create Task | POST | `/api/v0/public/tasks` | `conn_mod_def::GLtkFk4d0EE::Gy0J-SvnQia98m3afqOsVA` |
| Delete a Task | DELETE | `/api/v0/public/tasks/{{id}}` | `conn_mod_def::GLtkFlQ0nwk::_GyW_aRhRSqnPC8sO6f5aQ` |
| Move a Task | POST | `/api/v0/public/tasks/{{id}}/move` | `conn_mod_def::GLtkFmYhdlo::_z9blO0TRhOdfNlVYD-Dxw` |
| Time Tracking Using Tasks | POST | `/api/v0/public/tasks/{{id}}/time-tracking` | `conn_mod_def::GLtkFdIYg9Q::HOlA1Lw5QQ2VXeqd06IhoA` |
| Update a Task | PUT | `/api/v0/public/tasks/{{id}}` | `conn_mod_def::GLtkF3qgm-o::-hDfXRvmRaaJEGZYC6PEYA` |
| Update Description for a Task | POST | `/api/v0/public/tasks/{{id}}/update-description` | `conn_mod_def::GLtkF3pdaI8::KwDFc3XgSUygXAUGhc44ow` |

### Docs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Docs | GET | `/api/v0/public/docs/list` | `conn_mod_def::GLtkFCu398E::0aCscmLdSaqN61i7cVA7jw` |
| Retrieve a Doc | GET | `/api/v0/public/docs/{{id}}` | `conn_mod_def::GLtkFACLw5c::lkXdzxNPT66vmxxA2DogSA` |
| Create a New Doc | POST | `/api/v0/public/docs` | `conn_mod_def::GLtkFACSUWE::fjl2wZfvQEuHGl-pBWMh6w` |
| Delete a Doc | DELETE | `/api/v0/public/docs/{{id}}` | `conn_mod_def::GLtkFADRffI::RDqA5-u1Q7qQpy2qEhUv4Q` |
| Update a Doc | PUT | `/api/v0/public/docs/{{id}}` | `conn_mod_def::GLtkFPe_fIA::O3AJ6pSlStCMgecRf0qOvA` |
| Update Text Using Docs | POST | `/api/v0/public/docs/{{id}}/update-text` | `conn_mod_def::GLtkFADDL2w::Z4uQYdICQ1e6KirWBndZsQ` |

### Skills

| Action | Method | Path | Action id |
|---|---|---|---|
| List Skills | GET | `/api/v0/public/skills/list` | `conn_mod_def::GLtkFb359OI::cZGJMkEESpy4_hBiKiAsVA` |
| Retrieve a Skill | GET | `/api/v0/public/skills/{{id}}` | `conn_mod_def::GLtkFbXHLb4::0QvBBFbWTCim7daKbQu9Zw` |
| Retrieve a Skill by Title | GET | `/api/v0/public/skills/by-title` | `conn_mod_def::GLtkFdIfwLQ::sz6GBN17QGCuw5bj8r10VA` |
| Create a Skill | POST | `/api/v0/public/skills` | `conn_mod_def::GLtkFQnIV_A::--H0O4ihRAu5d444c8556A` |
| Delete a Skill | DELETE | `/api/v0/public/skills/{{id}}` | `conn_mod_def::GLtkFNnQL3g::P8ZcVzW3SYSrei10b9UuDg` |
| Update a Skill | PUT | `/api/v0/public/skills/{{id}}` | `conn_mod_def::GLtkFb4Kdfg::ACPHe59rTjycs8cHpqE2og` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agents | GET | `/api/v0/public/agents/list` | `conn_mod_def::GLtkErdE7rc::P1ypwSQ3SVCikkIPenUgMg` |
| Retrieve an Agent | GET | `/api/v0/public/agents/{{id}}` | `conn_mod_def::GLtkErFHroU::nZILIvxZT7WspHCfqveYtw` |
| Create Agent | POST | `/api/v0/public/agents` | `conn_mod_def::GLtkEpr2dzI::p0uTV-0SQ5qPVjRu-9bnjQ` |
| Delete an Agent | DELETE | `/api/v0/public/agents/{{id}}` | `conn_mod_def::GLtkErFLJxE::gPOfg19XTv2AEMtqCq1R7w` |
| Update an Agent | PUT | `/api/v0/public/agents/{{id}}` | `conn_mod_def::GLtkEprjGbE::zGCbCUuUQSGJORCkwzrKNg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v0/public/webhooks/list` | `conn_mod_def::GLtkGAqN7P8::d2WgaYTPS6KsH7UAGXYoBw` |
| Retrieve a Webhook | GET | `/api/v0/public/webhooks/{{id}}` | `conn_mod_def::GLtkGFKObM8::AbOSCIu-TTiXJOIAL7sIeg` |
| Create Webhooks | POST | `/api/v0/public/webhooks` | `conn_mod_def::GLtkF0piCek::01wOW8QQSHilWw8I4WMFEw` |
| Delete a Webhook | DELETE | `/api/v0/public/webhooks/{{id}}` | `conn_mod_def::GLtkFzJKbFQ::aiZw1MX5Tp-rJL8wJvhmZA` |
| Update a Webhook | PUT | `/api/v0/public/webhooks/{{id}}` | `conn_mod_def::GLtkGAqk8Gs::2Kgm7LpKR4ivy1ZEpBAO3A` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments | GET | `/api/v0/public/comments/list` | `conn_mod_def::GLtkE3F9kuU::pj24xZLBS0-iJyWO8xNZmg` |
| Create a Comment | POST | `/api/v0/public/comments` | `conn_mod_def::GLtkE0GQQxw::ehfE9x2RRWaabW0ozkj8eA` |

### Configuration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Configuration | GET | `/api/v0/public/config` | `conn_mod_def::GLtkE1lziI0::BJAuFjzGTF2w70bIuVNDHg` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a View | GET | `/api/v0/public/views/{{id}}` | `conn_mod_def::GLtkF0qEm1E::axpNZmRfS-qJfAocsmTb9g` |

### HelpCenterArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Help Center Articles | GET | `/api/v0/public/help-center-articles/list` | `conn_mod_def::GLtkFRvBXJI::_sTgX5QnQzuatqRx_ssM2g` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Folder | GET | `/api/v0/public/folders/{{id}}` | `conn_mod_def::GLtkFNmyZSY::aAtzYpnQSxeOxzdvdrkclg` |

### Dartboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dartboard by ID | GET | `/api/v0/public/dartboards/{{id}}` | `conn_mod_def::GLtkE1l6t9Y::JCzdWO80RWi2qcCNJ-UCug` |

## When a call fails

The error comes from Dart, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dart

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
