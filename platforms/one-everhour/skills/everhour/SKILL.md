---
name: everhour
description: Everhour is a time tracking and workforce productivity platform that provides timesheets, budgeting, invoicing, and project cost tracking, allowing teams to monitor work hours, manage project budgets, and integrate time data with project management and accounting tools. Read and write Everhour data through One: projects, tasks, invoices, timecards, clients, attachments and more, 103 actions with real parameter documentation. Use whenever the user asks to look something up in Everhour, create or update a record there, or build code against the Everhour API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: everhour
  generated-from: one-knowledge-base
---

# Everhour through One

Everhour is a time tracking and workforce productivity platform that provides timesheets, budgeting, invoicing, and project cost tracking, allowing teams to monitor work hours, manage project budgets, and integrate time data with project management and accounting tools.

One exposes Everhour through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `everhour` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Everhour is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Everhour account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Projects | GET | `/projects` | `conn_mod_def::GLgBGM8bdEg::T-kTF4buSeqn346nLn9TyQ` |
| Get Project | GET | `/projects/{{projectId}}` | `conn_mod_def::GLgBGM0d03A::49gR6pb2Sku8Zgt2LB7g2A` |
| Archive Project | PATCH | `/projects/{{projectId}}/archive` | `conn_mod_def::GLgBGEhKMcA::raNzYux6R0GCFrdZCuagkA` |
| Create Project | POST | `/projects` | `conn_mod_def::GLgBGEY0bTg::u8KpdeSGRR2OZDPb0jOKNg` |
| Delete Project | DELETE | `/projects/{{projectId}}` | `conn_mod_def::GLgBGMNMlNA::K8TnagQ6Qoyi2a6y0sepTw` |
| Reorder Fields for a Project | PUT | `/projects/{{projectId}}/fields-order` | `conn_mod_def::GLgBFOZ0kaA::Wdya9kmzRJGYuihfA3t5Ng` |
| Sync an Integration Project | POST | `/projects/{{projectId}}/sync` | `conn_mod_def::GLgBGbrFReA::VAkz8j2kTg6mZcKRnLk_cw` |
| Update a Project's Billing | PUT | `/projects/{{projectId}}/billing` | `conn_mod_def::GLgBGb1_9Sg::uNIN9gacS6Kxor3pBq7fwA` |
| Update Project | PUT | `/projects/{{projectId}}` | `conn_mod_def::GLgBGbrN3Rg::IEHUBYkpQf6Kg0akglBFDw` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task | GET | `/tasks/{{taskId}}` | `conn_mod_def::GLgBG2KrnTA::jStZ_BhKRIyO23LRKTM0VQ` |
| Get Task Billing | GET | `/tasks/{{taskId}}` | `conn_mod_def::GLgBG2KXjHg::ssGCOxd4TNmmjVozKraSIA` |
| Search a Project's Tasks | GET | `/projects/{{projectId}}/tasks/search` | `conn_mod_def::GLgBHUsOJig::1HmK3kzeQ2mwZXk3RFV-lQ` |
| Search Tasks | GET | `/tasks/search` | `conn_mod_def::GLgBHIrDyPA::sJEkEBxGSJq4C5M6sf7rmw` |
| Create Task for a Project | POST | `/projects/{{projectId}}/tasks` | `conn_mod_def::GLgBGuHpszA::C5KhMu-iSmaFZ2tht74z2g` |
| Delete Task | DELETE | `/tasks/{{taskId}}` | `conn_mod_def::GLgBG_tblLg::1tvG1yTCTGqdQC_nB5Ta2Q` |
| Update Task | PUT | `/tasks/{{taskId}}` | `conn_mod_def::GLgBHIYYUeA::Gxbwv97nQWKfo4uEXBTz3Q` |
| Update Task Custom Fields | PUT | `/tasks/{{taskId}}` | `conn_mod_def::GLgBFgXfeNg::ynM0IDO1TSO4hC74yhNxTQ` |
| Update Task Estimate | PUT | `/tasks/{{taskId}}/estimate` | `conn_mod_def::GLgBHIylLzg::M3FkH1Q4RU26T8ga6FvjGQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Invoices | GET | `/invoices` | `conn_mod_def::GLgBF5Ye0gg::HtCIJVpYRNORK3ZbUZUBAQ` |
| Get Invoice | GET | `/invoices/{{invoiceId}}` | `conn_mod_def::GLgBF6BJBhg::gGzTK5AzTDCPFSZCvYJyIA` |
| Create Invoice for a Client | POST | `/clients/{{clientId}}/invoices` | `conn_mod_def::GLgBFxXH8mA::MRGM9c13TkSWftfqTJzDJw` |
| Delete Invoice | DELETE | `/invoices/{{invoiceId}}` | `conn_mod_def::GLgBF6aqwHg::9rdycBGcSFW59OvDOnbs9Q` |
| Export Invoice to Xero/QB/FB | POST | `/invoices/{{invoiceId}}/export` | `conn_mod_def::GLgBF6JoNMg::0l1hIU4NSoyT0F0MHCUu_g` |
| Mark Invoice as Draft, Sent, or Paid | POST | `/invoices/{{invoiceId}}/{{status}}` | `conn_mod_def::GLgBF8ey0mA::O56EG-mbRWKx_1nJCnq-wg` |
| Reset Time for an Invoice | POST | `/invoices/{{invoiceId}}/reset-time` | `conn_mod_def::GLgBGEluZnA::NVZ0dyxEQd2Z8XXPkXCAhw` |
| Update Invoice | PUT | `/invoices/{{invoiceId}}` | `conn_mod_def::GLgBGEYl6mA::3RwRZk7RS8-zH2bFGlc0gw` |

### Timecards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Timecards | GET | `/timecards` | `conn_mod_def::GLgBH2ElrEA::0FrDgcKxTsijswiJSyKzLA` |
| Get User Timecards | GET | `/users/{{userId}}/timecards` | `conn_mod_def::GLgBH9fMCDA::03D43_b1RpaA4OHBSSMooA` |
| Clock In for a User | POST | `/users/{{userId}}/timecards/clock-in` | `conn_mod_def::GLgBH1VRgVA::PbkNwMT1Qgm7xLOAXQ2Fsg` |
| Clock Out a User's Timecard | POST | `/users/{{userId}}/timecards/clock-out` | `conn_mod_def::GLgBH1s_ngg::kEXnlJOBT0-lY3qzo64pVw` |
| Delete Timecard for a User | DELETE | `/users/{{userId}}/timecards/{{date}}` | `conn_mod_def::GLgBH1afQrg::M6EVVtXnQOCCDSzjPf-LRg` |
| Update a User's Timecard | PUT | `/users/{{userId}}/timecards/{{date}}` | `conn_mod_def::GLgBH9ymbuA::c1YQ3074T-mhULCzvFqtsQ` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Clients | GET | `/clients` | `conn_mod_def::GLgBFC4B0aA::exYzWXjmQw-2RcNObBWcsQ` |
| Get Client | GET | `/clients/{{clientId}}` | `conn_mod_def::GLgBE_8xZeg::qmDwe767SwuPFrzQmjVB2g` |
| Create Client | POST | `/clients` | `conn_mod_def::GLgBE-Duogg::m0Fn3wj4QW242VEc7hQjiA` |
| Update Client | PUT | `/clients/{{clientId}}` | `conn_mod_def::GLgBFAqpvQg::YemCGgTaT8KqUE4QKTk_WQ` |
| Update Client Budget | PUT | `/clients/{{clientId}}/budget` | `conn_mod_def::GLgBFOZ3d9A::hM66HQYNRraE42R5UAS_jA` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment | GET | `/attachments/{{attachmentToken}}/download` | `conn_mod_def::GLgBFoLe9_A::i1FRw5DWRwCxDtgWFbsmcg` |
| Add Attachment to Expense | POST | `/expenses/{{expenseId}}/attachments` | `conn_mod_def::GLgBFWAvp6A::FW5ZS_IqT360KlcgkgJRiA` |
| Create Attachment | POST | `/attachments` | `conn_mod_def::GLgBFWAkJlA::pABTak2tT3eF5K07stz8IQ` |
| Delete Attachment | DELETE | `/attachments/{{attachmentId}}` | `conn_mod_def::GLgBFob-wTA::-UZkfHyqTbGC3KNO5TeLjg` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Expenses | GET | `/expenses` | `conn_mod_def::GLgBFwRaN0A::6EUuFvN3SvqpEkfNox4AHA` |
| Create Expense | POST | `/expenses` | `conn_mod_def::GLgBFo7SN-g::fTSw5IIfSrWBek0Dth6kqw` |
| Delete Expense | DELETE | `/expenses/{{expenseId}}` | `conn_mod_def::GLgBFocfCtA::5A6u3SuxQfyAuBRFSD85Ig` |
| Update Expense | PUT | `/expenses/{{expenseId}}` | `conn_mod_def::GLgBFxyxQ7A::75-oP_coRruRHcUsz5Zn2g` |

### Sections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Section | GET | `/sections/{{sectionId}}` | `conn_mod_def::GLgBGbrX44A::BY5xQTluSKi1aMk0mK3eGg` |
| Create Section for a Project | POST | `/projects/{{projectId}}/sections` | `conn_mod_def::GLgBGFDUpDg::Q6-0sUmCQMuYwszp0d1lNA` |
| Delete Section | DELETE | `/sections/{{sectionId}}` | `conn_mod_def::GLgBGMNaueg::xYpE6bNkSxSUNXQLCSEXpw` |
| Update Section | PUT | `/sections/{{sectionId}}` | `conn_mod_def::GLgBGbri-1g::oPxAIPM6RvCjcNmOfEuZBg` |

### Assignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Assignments | GET | `/resource-planner/assignments` | `conn_mod_def::GLgBGt-q2wg::MbW33yfHRpWiBe9aSBJ_hg` |
| Create Assignment | POST | `/resource-planner/assignments` | `conn_mod_def::GLgBGtxYJcg::zvR6ZG3ESVyx40vBPbY10Q` |
| Delete Assignment | DELETE | `/resource-planner/assignments/{{assignmentId}}` | `conn_mod_def::GLgBGtx1M0g::-jNs7JTvQ3GTDnZZyqzy6g` |
| Update Assignment | PUT | `/resource-planner/assignments/{{assignmentId}}` | `conn_mod_def::GLgBGtxlaFA::6CvluHpWQpusi1gVeIR-zg` |

### Allocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Allocations | GET | `/allocations` | `conn_mod_def::GLgBHbdUPjA::Jzcdc-woQw2-7wgR-OPyIg` |
| Create Allocation | POST | `/allocations` | `conn_mod_def::GLgBHIs_MrA::ELCSV2eSTJKtiuUGlbL0EQ` |
| Delete Allocation | DELETE | `/allocations/{{allocationId}}` | `conn_mod_def::GLgBHcG-0rg::DzjvOVCqRuOEfsvCDDjYeA` |
| Update Allocation | PUT | `/allocations/{{allocationId}}` | `conn_mod_def::GLgBHkPccHA::XcuiYFzJQHSdZRl__ztJMA` |

### TimeOffTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Off Types | GET | `/resource-planner/time-off-types` | `conn_mod_def::GLgBHkPgHdg::X3Vab2yHQ7GOlpVPU-cdaw` |
| Create Time Off Type | POST | `/resource-planner/time-off-types` | `conn_mod_def::GLgBHcj6GIA::GLD6HjK3S3-NodShQMMwoA` |
| Delete Time Off Type | DELETE | `/resource-planner/time-off-types/{{typeId}}` | `conn_mod_def::GLgBHbsCr9A::VPu2822oTUirEADLzMWwjQ` |
| Update Time Off Type | PUT | `/resource-planner/time-off-types/{{typeId}}` | `conn_mod_def::GLgBHkPx__g::ACR-Rxj6QN-vofQyNaBOhw` |

### Timesheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Timesheets | GET | `/timesheets` | `conn_mod_def::GLgBIUZ6k5A::9ujSWqZDTGqpdsQnbl7Yfw` |
| Get User Timesheets | GET | `/users/{{userId}}/timesheets` | `conn_mod_def::GLgBIZoUjdA::R2Ztme8PQamwUHLTk1Steg` |
| Approve Week or Request for Approval for a Timesheet | POST | `/timesheets/{{timesheetId}}/approval` | `conn_mod_def::GLgBIMxBrog::J2hrgyAAT4uMo1LfgdtWwA` |
| Discard Approval Request for a Timesheet | PUT | `/timesheets/{{timesheetId}}/discard-approval` | `conn_mod_def::GLgBIM8Cylg::xkqTxgHVT0iUlyxAonHrAw` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Field in Project | POST | `/projects/{{projectId}}/fields` | `conn_mod_def::GLgBFOZ5e3A::-C_5Za1oSwixOOV6w-MdIw` |
| Delete Field | DELETE | `/fields/{{fieldId}}` | `conn_mod_def::GLgBFOg2bbA::3w2Tz1eiRi-ICwezxUDmsg` |
| Update Field | PUT | `/fields/{{fieldId}}` | `conn_mod_def::GLgBFXLA1CA::HWL_ROIRRJG2ge-SdOVxqw` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Categories | GET | `/expenses/categories` | `conn_mod_def::GLgBFwiZ9DA::yK060fDyTJS73h9MeJxgPA` |
| Create Category | POST | `/expenses/categories` | `conn_mod_def::GLgBFWbJpFg::4aVml3SeSsm1bTiDf2EaZg` |
| Update Category | PUT | `/expenses/categories/{{categoryId}}` | `conn_mod_def::GLgBFwenrMA::JEidUBjPTMCBmazBJNaBRQ` |

### Timers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Running Timer | GET | `/timers/current` | `conn_mod_def::GLgBH-kkehg::uncMajnCQ7uC_jE3d1iEMA` |
| Start Timer | POST | `/timers` | `conn_mod_def::GLgBIMwTkdg::MAGoQMFxTqKBG_X0yIqlzg` |
| Stop Current Timer | DELETE | `/timers/current` | `conn_mod_def::GLgBIM7lenA::GgI3hkUYQkilyuyDHyq_MA` |

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Webhook | POST | `/hooks` | `conn_mod_def::GLgBIT3Q-Ig::-_Sia__6Tla6F6wKm58hXw` |
| Delete Webhook | DELETE | `/hooks/{{hookId}}` | `conn_mod_def::GLgBItW_Feg::ew8CZ8VSSAaqDjjoKsaODg` |
| Update Webhook | PUT | `/hooks/{{hookId}}` | `conn_mod_def::GLgBIuFGLmA::wlE-6veCRpy7m8ZNpG_f5A` |

### TimeRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Time Record | DELETE | `/time/{{timeId}}` | `conn_mod_def::GLgBHkQC7-g::pVTDJQ5XSVySEPKN4PHxNg` |
| Update Time Record | PUT | `/time/{{timeId}}` | `conn_mod_def::GLgBH2EztgA::OkqidQ_uRVil5EiL19XzvA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Users | GET | `/team/users` | `conn_mod_def::GLgBIT45YwA::wbKrnsCrSOmczjepMsH1Pg` |
| Get Current User | GET | `/users/me` | `conn_mod_def::GLgBImYGYKg::5qWsuUqaSdWEVqC7agou4A` |

### ClientBudgets

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Client Budget | DELETE | `/clients/{{clientId}}/budget` | `conn_mod_def::GLgBE_WU32A::X_CrRJsIStmu3vrABqdKnQ` |

### ProjectFieldsConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Fields Configuration | GET | `/projects/{{projectId}}/fields` | `conn_mod_def::GLgBFOgXWKg::MSeh1EeXQg26bN5bCcT3gw` |

### ExpenseCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Expense Category | DELETE | `/expenses/categories/{{categoryId}}` | `conn_mod_def::GLgBFocrP9A::7QSwnr2bQCiEfK41-3IWhQ` |

### ProjectSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Sections | GET | `/projects/{{projectId}}/sections` | `conn_mod_def::GLgBGRCUm8A::Mpj4vS2ET3mrr54RNx1K6A` |

### UsersReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Users Report | GET | `/dashboards/users` | `conn_mod_def::GLgBGjeLUfA::rxRUuYrQTQa6A_-QNMWKOQ` |

### ProjectsReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Projects Report | GET | `/dashboards/projects` | `conn_mod_def::GLgBGkLhtag::jTv3NW0RR7WrSk3BK2CcAQ` |

### ClientsReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Clients Report | GET | `/dashboards/clients` | `conn_mod_def::GLgBGkp7Y2g::ikGl2htkSLqiQhSkfc7teA` |

### TeamTimeReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Team Time Report | GET | `/team/time/export` | `conn_mod_def::GLgBGkw-zeg::i0NEz23nSomesy96aJKieA` |

### EstimatesReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Estimates Report | GET | `/team/estimate/export` | `conn_mod_def::GLgBGlWdVVg::HlkhhMIVSaarlxlceGVBpQ` |

This lists 90 of 103 actions. For anything not here, call `search_one_platform_actions` with platform `everhour`. The full catalog is at https://www.withone.ai/knowledge/everhour.

## When a call fails

The error comes from Everhour, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/everhour

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
