---
name: trent
description: Trent is an AI operations platform that provides tools for monitoring, evaluating, and improving language model applications, enabling developers and product teams to track performance, debug outputs, and manage prompt and model quality across production workflows. Read and write Trent data through One: projectanalysistasks, projects, humberagentprojects, analysecontext, chat, documents and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Trent, create or update a record there, or build code against the Trent API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: trent
  generated-from: one-knowledge-base
---

# Trent through One

Trent is an AI operations platform that provides tools for monitoring, evaluating, and improving language model applications, enabling developers and product teams to track performance, debug outputs, and manage prompt and model quality across production workflows.

One exposes Trent through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `trent` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Trent is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Trent account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ProjectAnalysisTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project Analysis Task Set | GET | `/v1/humber-agent/analyse/project-id/{{projectId}}/tasks` | `conn_mod_def::GKzlwEhOmTQ::xUbOauO8RC-RXBdHSIOfdw` |
| Update Task Statuses for a Project Analysis | PATCH | `/v1/humber-agent/analyse/project-id/{{projectId}}/tasks` | `conn_mod_def::GKzlwKqhdfA::p3EJ9roZSsa8txI9zfFm3Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v1/humber-agent/projects` | `conn_mod_def::GKzlwXXxgGg::o1Kus5HaS2aTXtObGam21A` |
| Create Project | POST | `/v1/humber-agent/projects` | `conn_mod_def::GKzlwegm6qc::e7-7Zax-QbyOuA-RImR8Aw` |

### HumberAgentProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/v1/humber-agent/projects/{{projectId}}` | `conn_mod_def::GKzlwZwO-Rw::_Z2rMZotTkiyedgjxx0FXA` |
| Update a Project | PUT | `/v1/humber-agent/projects/{{projectId}}` | `conn_mod_def::GKzlwtEJg7c::XrVGMLoOQWybi_fvdOvBIw` |

### AnalyseContext

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyse Context | POST | `/v1/humber-agent/analyse` | `conn_mod_def::GKzlwDIwNik::GWxqoA7YT5uNfKrKy9p3uw` |

### Chat

| Action | Method | Path | Action id |
|---|---|---|---|
| Streaming Chat | POST | `/v1/chat` | `conn_mod_def::GKzlwR4Ck9A::LQdOSJVzS-evtgFFG9ld_g` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Prepare Document Upload | POST | `/v1/humber-agent/documents/upload` | `conn_mod_def::GKzlwTiU3x0::u7uOTIOGQtWe7zjeSWtt1g` |

### ReviewPlan

| Action | Method | Path | Action id |
|---|---|---|---|
| Review a Project's Remediation Plan | GET | `/v1/humber-agent/remediation/project-id/{{projectId}}/review-plan` | `conn_mod_def::GKzlwuDDFFc::K-meyPhMTb2t5M5ZxHN2Fg` |

### Analysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analysis for a Project | GET | `/v1/humber-agent/analyse/project-id/{{projectId}}` | `conn_mod_def::GKzlv_OBvSo::yVR_sKizT4eMC1W1f1njGQ` |

### ApprovedPlan

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Latest Approved Plan for a Project | GET | `/v1/humber-agent/remediation/project-id/{{projectId}}/approved-plan` | `conn_mod_def::GKzlwpTZ-DE::WBiBe9BASe6ONshjMEZEiA` |

### SecurityRequirements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Security Requirements for a Project Analysis | GET | `/v1/humber-agent/analyse/project-id/{{projectId}}/security-requirements` | `conn_mod_def::GKzlv-7IDq8::tZQyJ4oPSjK6p-HQTVyGdA` |

### RemediationProject

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Project Remediation Plan | PUT | `/v1/humber-agent/remediation/project-id/{{projectId}}/approve-plan` | `conn_mod_def::GKzlwuuptBA::X-8CDdswSpW_PKzKCgr0Fw` |

## When a call fails

The error comes from Trent, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/trent

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
