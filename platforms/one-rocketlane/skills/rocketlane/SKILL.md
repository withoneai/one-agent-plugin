---
name: rocketlane
description: Rocketlane is a customer onboarding and professional services automation platform that provides project delivery workflows, collaboration tools, and customer-facing portals, allowing implementation teams to manage onboarding, track milestones, and coordinate stakeholders across service engagements. Read and write Rocketlane data through One: tasks, projects, conversations, fields, timeentries, comments and more, 76 actions with real parameter documentation. Use whenever the user asks to look something up in Rocketlane, create or update a record there, or build code against the Rocketlane API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rocketlane
  generated-from: one-knowledge-base
---

# Rocketlane through One

Rocketlane is a customer onboarding and professional services automation platform that provides project delivery workflows, collaboration tools, and customer-facing portals, allowing implementation teams to manage onboarding, track milestones, and coordinate stakeholders across service engagements.

One exposes Rocketlane through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rocketlane` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rocketlane is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rocketlane account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task by ID | GET | `/api/1.0/tasks/{{taskId}}` | `conn_mod_def::GLGAmgiCaeA::iIgbJ4eJTZy3FTAGqbKDvg` |
| List Tasks | GET | `/api/1.0/tasks` | `conn_mod_def::GLGAmu0MfJA::d3NYHb1eT9mj1eayp-rcrA` |
| Add Assignees to a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/add-assignees` | `conn_mod_def::GLGAmXSXdHg::AJnn0XkAQ2-gm2ezxLKYFw` |
| Add Dependencies to a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/add-dependencies` | `conn_mod_def::GLGAmW9ymzA::rqXEp-0aSpC0q40e4mAQXQ` |
| Add Followers to a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/add-followers` | `conn_mod_def::GLGAmXGhSqA::sQaLsoWBQaqMjxUbwCZV1Q` |
| Create a Task | POST | `/api/1.0/tasks` | `conn_mod_def::GLGAmXql4qA::08AFTOMwQY2FLPwvIvMD6Q` |
| Delete a Task by ID | DELETE | `/api/1.0/tasks/{{taskId}}` | `conn_mod_def::GLGAmfYTDaA::GOrH_oZ0SSyDiBF-JAu2Rw` |
| Move a Task to a Phase by ID | POST | `/api/1.0/tasks/{{taskId}}/move-phase` | `conn_mod_def::GLGAmfYdJ5A::3BTISSB0Q1-6Ylgv0-P_Ug` |
| Remove Assignees From a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/remove-assignees` | `conn_mod_def::GLGAmgIxvrA::AZnE8TBtRrOVWgxTiubbew` |
| Remove Dependencies From a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/remove-dependencies` | `conn_mod_def::GLGAm4Q_dPA::GfA_JLT6Qe-o65d_aNJ-tw` |
| Remove Followers From a Task by ID | POST | `/api/1.0/tasks/{{taskId}}/remove-followers` | `conn_mod_def::GLGAm33meNg::aDCV4IqjRiKbtrAXtBs74g` |
| Update a Task by ID | PUT | `/api/1.0/tasks/{{taskId}}` | `conn_mod_def::GLGAm61_USg::IJdkXuxITcC_p5ySkclW1A` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project by ID | GET | `/api/1.0/projects/{{projectId}}` | `conn_mod_def::GLGAk6o0q9g::OK0JhAi5RxepMknhuIy6LA` |
| List Projects | GET | `/api/1.0/projects` | `conn_mod_def::GLGAkxSkT4g::XnvA0w_VQC-PbH67qqA_tw` |
| Add Members to a Project | POST | `/api/1.0/projects/{{projectId}}/add-members` | `conn_mod_def::GLGAj0nOf0g::fwEOq9wfRh2lfKu2q-2miQ` |
| Archive a Project by ID | POST | `/api/1.0/projects/{{projectId}}/archive` | `conn_mod_def::GLGAj0bGnkg::MWQ-S1_JTImqNux2jv0nDQ` |
| Assign Placeholders to a Project | POST | `/api/1.0/projects/{{projectId}}/assign-placeholders` | `conn_mod_def::GLGAkGXVZ3g::ZeQ9JPP8Q2qRMas_TkLLVQ` |
| Create a Project | POST | `/api/1.0/projects` | `conn_mod_def::GLGAkLWbghA::DBym4fljQraLJFGZ5fduYQ` |
| Delete a Project by ID | DELETE | `/api/1.0/projects/{{projectId}}` | `conn_mod_def::GLGAkGuG7Hg::k-oX-MH1SZ6Qa9-fhH8-wQ` |
| Import a Template to a Project | POST | `/api/1.0/projects/{{projectId}}/import-template` | `conn_mod_def::GLGAk7Z5ocg::AQIpW2YdS2-VVDAadQ8srQ` |
| Remove Members from a Project | POST | `/api/1.0/projects/{{projectId}}/remove-members` | `conn_mod_def::GLGAlxomuTg::Yc-J_wwQScu9zXr6XlQQoA` |
| Unassign Placeholders From a User in a Project | POST | `/api/1.0/projects/{{projectId}}/unassign-placeholders` | `conn_mod_def::GLGAk7Z-xjA::CMFAjDjtSK-qb1Dnd3K3fQ` |
| Update a Project by ID | PUT | `/api/1.0/projects/{{projectId}}` | `conn_mod_def::GLGAk8KrBAA::cXuK-Wh6Q2OqbKoihmLasQ` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Conversation | GET | `/api/1.0/conversations/{{conversationId}}` | `conn_mod_def::GLGAi_oCzpA::4UJjVf7aRGCB841JxvdKLg` |
| List Conversations | GET | `/api/1.0/conversations` | `conn_mod_def::GLGAjBMkvIA::WD7bsrpwR5KSKOZAqBzKLA` |
| Add Members to a Conversation | POST | `/api/1.0/conversations/{{conversationId}}/add-members` | `conn_mod_def::GLGAjAkmdog::d2OVtSSkR5ismV6jUKnNPQ` |
| Create Conversation | POST | `/api/1.0/conversations` | `conn_mod_def::GLGAi_3p5DA::vWjinG7OSNelSQNFkZgAzg` |
| Delete a Conversation | DELETE | `/api/1.0/conversations/{{conversationId}}` | `conn_mod_def::GLGAi_axgLA::NUNNXMznT_6bA_2h8Br11Q` |
| Remove Members from a Conversation | POST | `/api/1.0/conversations/{{conversationId}}/remove-members` | `conn_mod_def::GLGAjNS8L0A::LV6worfUTnas5WoXpknW1A` |
| Update a Conversation | PUT | `/api/1.0/conversations/{{conversationId}}` | `conn_mod_def::GLGAjK3CVyA::v0_vZD_cSVmzIP5q13dJzQ` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Field by ID | GET | `/api/1.0/fields/{{fieldId}}` | `conn_mod_def::GLGAjWjGcGA::gEzPFJDQQBit7YJJwkRXzA` |
| List All Fields | GET | `/api/1.0/fields` | `conn_mod_def::GLGAjZxRuJA::zSRDSsFlSCS1tz_l_xWoHQ` |
| Add a Field Option | POST | `/api/1.0/fields/{{fieldId}}/add-option` | `conn_mod_def::GLGAjK2ocjg::mWtXlzf_SviUTFx00fHIQg` |
| Create a Field | POST | `/api/1.0/fields` | `conn_mod_def::GLGAjLELDcg::IUg50gdNRWuw0gWRVAjyIQ` |
| Delete a Field by ID | DELETE | `/api/1.0/fields/{{fieldId}}` | `conn_mod_def::GLGAjI-gaYA::4WAgleUZRj6p9QoCn6wMjg` |
| Update a Field by ID | PUT | `/api/1.0/fields/{{fieldId}}` | `conn_mod_def::GLGAjVC0DhA::CAJv220kTsCozOujQBqjfQ` |
| Update a Field Option | POST | `/api/1.0/fields/{{fieldId}}/update-option` | `conn_mod_def::GLGAjV8HmLA::aOmDmSMnQJmmK-dcbE-HTA` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Entry by ID | GET | `/api/1.0/time-entries/{{timeEntryId}}` | `conn_mod_def::GLGAnFgR3eA::vXBwYPCuQti-zKLl1Kd_zg` |
| List Time Entries | GET | `/api/1.0/time-entries` | `conn_mod_def::GLGAnq5tvMA::2jiLaipeQ6WhKiEAuY2tCQ` |
| Search Time Entries | GET | `/api/1.0/time-entries/search` | `conn_mod_def::GLGAnclHkSA::hor_bN8_QKGCNRYRGcmHqg` |
| Create a Time Entry | POST | `/api/1.0/time-entries` | `conn_mod_def::GLGAnFpQGcg::Pbf3ff7MRROcvnoePtL0_g` |
| Delete a Time Entry by ID | DELETE | `/api/1.0/time-entries/{{timeEntryId}}` | `conn_mod_def::GLGAnDu1XmA::maxvoCjWQBC-PDNe090avg` |
| Update a Time Entry by ID | PUT | `/api/1.0/time-entries/{{timeEntryId}}` | `conn_mod_def::GLGAnZ4m-oA::eWpOBCuUQZO5BOWjJ5tZow` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Comment by ID | GET | `/api/1.0/comments/{{commentId}}` | `conn_mod_def::GLGAizZfkfg::JBbrfzKJQXOV9PXs4zgMCw` |
| List Comments | GET | `/api/1.0/comments` | `conn_mod_def::GLGAi31XrSA::j7dEWLxqSv-Y1Uddf1rOfg` |
| Create a Comment | POST | `/api/1.0/comments` | `conn_mod_def::GLGAizl5UTA::ESpl7XgWS8alwAvCufypBw` |
| Delete a Comment | DELETE | `/api/1.0/comments/{{commentId}}` | `conn_mod_def::GLGAiywKI4A::0GPVT0c4TK2L31JbNEF6Yw` |
| Update Comment by ID | PUT | `/api/1.0/comments/{{commentId}}` | `conn_mod_def::GLGAi0NF8Dg::yRIn-VwBQdeVgFByog7b4A` |

### Phases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Phase by ID | GET | `/api/1.0/phases/{{phaseId}}` | `conn_mod_def::GLGAj1c2LwA::2kn70lOMTIyTPyYaD5v4_A` |
| List Phases | GET | `/api/1.0/phases` | `conn_mod_def::GLGAj8qOWfA::iz_yW4UGRgy4EjK_v1Nz1Q` |
| Create a Phase | POST | `/api/1.0/phases` | `conn_mod_def::GLGAjpQrx2g::lq1RoH1TT6WeJYtPwcr1Hw` |
| Delete a Phase by ID | DELETE | `/api/1.0/phases/{{phaseId}}` | `conn_mod_def::GLGAjowIjrg::mAJ6xUixSgyLMyjEsGu7XA` |
| Update a Phase by ID | PUT | `/api/1.0/phases/{{phaseId}}` | `conn_mod_def::GLGAj1ZryoA::oUD-eEyUSSmTtHXAYXdj3Q` |

### SpaceDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space Document by ID | GET | `/api/1.0/space-documents/{{spaceDocumentId}}` | `conn_mod_def::GLGAl5TGLCg::kZDI75AsR-ezDJFRPcLKJw` |
| List Space Documents | GET | `/api/1.0/space-documents` | `conn_mod_def::GLGAl-8H4qg::RRS5cve-QEG4Ir9yJ9or8A` |
| Create a Space Document | POST | `/api/1.0/space-documents` | `conn_mod_def::GLGAl4u3oUg::l8iKXc7NQZKJ6YAjEVfDEw` |
| Delete a Space Document by ID | DELETE | `/api/1.0/space-documents/{{spaceDocumentId}}` | `conn_mod_def::GLGAl_G_B7A::YLBh5J89TzKqE6Zqg2ZTBw` |
| Update a Space Document by ID | PUT | `/api/1.0/space-documents/{{spaceDocumentId}}` | `conn_mod_def::GLGAmIIOTEA::5x5NAON2Qy6_fkOhLVBinQ` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space by ID | GET | `/api/1.0/spaces/{{spaceId}}` | `conn_mod_def::GLGAmHSZx2A::SEwQbwUGSE6LYEvvMRSN6g` |
| List Spaces for a Project | GET | `/api/1.0/spaces` | `conn_mod_def::GLGAmOQT8Og::niuezL1mTRmvUmQ7uRUBRQ` |
| Create a Space | POST | `/api/1.0/spaces` | `conn_mod_def::GLGAmH0213g::PJHcZh18RGaBPHKZviiQUQ` |
| Delete a Space by ID | DELETE | `/api/1.0/spaces/{{spaceId}}` | `conn_mod_def::GLGAmHXqHPA::clcsPBRjR42lYrmsqypLeg` |
| Update a Space by ID | PUT | `/api/1.0/spaces/{{spaceId}}` | `conn_mod_def::GLGAmW98CUA::31zYAwMdSlyGBBGvuhVoKg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice by ID | GET | `/api/1.0/invoices/{{invoiceId}}` | `conn_mod_def::GLGAjoujEkA::hDNhU4VTRZGFDWXNRfcdGw` |
| List Invoices | GET | `/api/1.0/invoices` | `conn_mod_def::GLGAjgCmiRA::mi0oPOKtQIWVJqNG38h9uw` |

### TimeOffs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Time-Offs | GET | `/api/1.0/time-offs` | `conn_mod_def::GLGAnN66LAg::drg5PKDdRWqVrkwFczihxg` |
| Delete a Time-Off | DELETE | `/api/1.0/time-offs/{{timeOffId}}` | `conn_mod_def::GLGAm34hXvg::XMiBQ-FzSn2rk0wGCFobJw` |

### TimeOff

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time-off by ID | GET | `/api/1.0/time-offs/{{timeOffId}}` | `conn_mod_def::GLGAnESk3_A::q-HY74N8ST2_vwWG18JQiw` |
| Create a Time-Off | POST | `/api/1.0/time-offs` | `conn_mod_def::GLGAm4ValWg::dqeBi_4RQF6v0NXPQJs89g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/api/1.0/users/{{userId}}` | `conn_mod_def::GLGAn0UM8QA::HF5Gh6YiRk-FA-uL4iXSkQ` |
| List Users | GET | `/api/1.0/users` | `conn_mod_def::GLGAnlMBJog::Ut8WZuivSbuCEKQgTfBAcg` |

### InvoicePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice's Payments by Invoice ID | GET | `/api/1.0/invoices/{{invoiceId}}/payments` | `conn_mod_def::GLGAjppNHWg::5G7Ipe_QRemwE2NnCxIYiw` |

### InvoiceLineItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice's Line Items | GET | `/api/1.0/invoices/{{invoiceId}}/lines` | `conn_mod_def::GLGAjr-BkyA::B-QW4qmSQKmpuTGyHKRXWw` |

### ProjectPlaceholders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Placeholders | POST | `/api/1.0/projects/{{projectId}}/get-placeholders` | `conn_mod_def::GLGAkG7QuHg::o74nAokzSHmqTWwLgFkfhA` |

### ResourceAllocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Resource Allocations | GET | `/api/1.0/resource-allocations` | `conn_mod_def::GLGAl9DGJIA::GXz0G3t8Tu2Ml1DadXlwSA` |

### TimeEntryCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Entry Categories | GET | `/api/1.0/time-entries/categories` | `conn_mod_def::GLGAnYPXCCg::KuTzivsxRVyffndZD8Tmdw` |

## When a call fails

The error comes from Rocketlane, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rocketlane

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
