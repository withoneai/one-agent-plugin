---
name: safetyculture
description: SafetyCulture is a workplace operations platform that provides digital inspections, issue reporting, asset monitoring, and training tools, enabling frontline teams to capture field data, standardize safety and quality processes, and automate corrective actions across distributed worksites. Read and write Safetyculture data through One: inspections, incidents, actions, assets, users, investigations and more, 379 actions with real parameter documentation. Use whenever the user asks to look something up in Safetyculture, create or update a record there, or build code against the Safetyculture API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: safetyculture
  generated-from: one-knowledge-base
---

# Safetyculture through One

SafetyCulture is a workplace operations platform that provides digital inspections, issue reporting, asset monitoring, and training tools, enabling frontline teams to capture field data, standardize safety and quality processes, and automate corrective actions across distributed worksites.

One exposes Safetyculture through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `safetyculture` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Safetyculture is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Safetyculture account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Inspections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inspection | GET | `/inspections/v1/inspections/{{id}}` | `conn_mod_def::GLCQPC-Y6jA::FoV4KkYxTH-JPkqQThxwjg` |
| Get an Inspection by ID | GET | `/audits/{{auditId}}` | `conn_mod_def::GLCQPUygtBg::3VI-4HysQc2ns2eN9bbYoA` |
| Get an Inspection's Access Configuration | GET | `/inspections/integration/v1/inspections/{{inspectionId}}/access` | `conn_mod_def::GLCQPQtQqBA::siKyQQkSSKuMmHDIckM5wA` |
| Get an Inspection's Details | GET | `/inspections/v1/inspections/{{id}}/details` | `conn_mod_def::GLCQPPpWAeA::l5XFDzyISjSy3YOVRcAX0g` |
| Answer a Check Box Question for an Inspection | PUT | `/inspections/v1/inspections/{{inspectionId}}/questions/{{questionId}}/checkbox` | `conn_mod_def::GLCQOLYi51g::PXrtD954TVyhsXhn8XwkJw` |
| Archive an Inspection | POST | `/inspections/v1/inspections/{{inspectionId}}/archive` | `conn_mod_def::GLCQOK-zD7A::WRjN0VjCTXSUZ4tGOamJ1A` |
| Clone an Inspection | POST | `/inspections/v1/inspections/{{inspectionId}}/clone` | `conn_mod_def::GLCQO5IMNlA::9LYKdR1eTzeg8OuzfVhOhg` |
| Complete an Inspection | POST | `/inspections/integration/v1/inspections/{{inspectionId}}/complete` | `conn_mod_def::GLCQO6yyrRg::T62v9v5lTlagUbTCZbnJzQ` |
| Create Inspection | POST | `/inspections/integration/v1/inspections` | `conn_mod_def::GLCQO6Fmpbg::JM7pexGxSiCFIxImrRqDfw` |
| Delete an Inspection | DELETE | `/inspections/v1/inspections/{{id}}` | `conn_mod_def::GLCQO5xRfBA::CjUeLhYmRPKVvCUKUZIdKQ` |
| Remove a User's Access to an Inspection | DELETE | `/inspections/v1/inspections/{{inspectionId}}/user/{{removedUserId}}/access` | `conn_mod_def::GLCQPeCmm_A::a--VOOeiRQqKeOMCsmJGIQ` |
| Restore an Inspection's Archived Status | DELETE | `/inspections/v1/inspections/{{inspectionId}}/archive` | `conn_mod_def::GLCQPdtgreg::vY82uq_EQpiWvuzhELRb9Q` |

6 more Inspections actions are available through search.

### Incidents

| Action | Method | Path | Action id |
|---|---|---|---|
| Export an Incident to PDF | GET | `/tasks/v1/incidents/{{taskId}}/pdf_report` | `conn_mod_def::GLCQST5t9cA::OAKI4AlTQ_iTuZF5rs2hXA` |
| Get Issue | GET | `/tasks/v1/incident/{{id}}` | `conn_mod_def::GLCQSfySr_A::1xYE53b0Qdm0A3APpfeWPg` |
| Get Issue | GET | `/tasks/v1/incidents/{{id}}` | `conn_mod_def::GLCQSioV2yg::suJgafV_TmW1E_esBoqf-A` |
| Add Issue Assignee | POST | `/tasks/v1/incidents/{{taskId}}/collaborators/add` | `conn_mod_def::GLCQSUffaPA::rHRW1AXKRQGhoGrZhpor8w` |
| Create Issue | POST | `/tasks/v1/incidents/submit` | `conn_mod_def::GLCQSVVMc8A::JccMfA5wSyOlxafPgi_i1g` |
| Create Issue | POST | `/tasks/v1/incidents` | `conn_mod_def::GLCQSXQwE1A::AbgqXFSCTZ-oX_4AXvVG7g` |
| List Issues | POST | `/tasks/v1/incidents/list` | `conn_mod_def::GLCQSrMIEYA::P1pPh57LTDCmrfBvB34f3g` |
| Update an Incident or Action Status | PUT | `/tasks/v1/incidents/{{taskId}}/status` | `conn_mod_def::GLCQS-EFn5g::Rui6NfXTTWy1oqI2O0vbew` |
| Update an Incident's Category | PUT | `/tasks/v1/incidents/{{taskId}}/category` | `conn_mod_def::GLCQSq9_2Qg::UHV0s3lIQxiPOZ2ekG4mIQ` |
| Update an Incident's Description | PUT | `/tasks/v1/incidents/{{taskId}}/description` | `conn_mod_def::GLCQS1BQSiA::f7XW7NiVSmKeQfm22z36EA` |
| Update an Incident's Due Date | PUT | `/tasks/v1/incidents/{{taskId}}/due_at` | `conn_mod_def::GLCQS1V9fCA::XGp6IilhSPCJs8cmvC345A` |
| Update an Incident's Occurred At | PUT | `/tasks/v1/incidents/{{taskId}}/occurred_at` | `conn_mod_def::GLCQS0tj5fg::ew5h-1TSSWKC2-QYBt3gQQ` |

3 more Incidents actions are available through search.

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Action (by ID) | GET | `/tasks/v1/actions/{{id}}` | `conn_mod_def::GLCQHM-Titg::7CpjwChXSd-BjM-2xYpOAg` |
| Get an Action Link | GET | `/tasks/v1/actions/{{taskId}}/shared_link` | `conn_mod_def::GLCQHWghEfg::EIe0j009RKO5JlSmVuDXFQ` |
| List Feed Actions | GET | `/feed/actions` | `conn_mod_def::GLCQK-GA4Dg::8ovY11OhQP-C1S_apJqkJw` |
| Create an Action | POST | `/tasks/v1/actions` | `conn_mod_def::GLCQG45XRng::eEroMUOlSqWVezQuKWCFdw` |
| Create an Action Shared Link | POST | `/tasks/v1/actions/{{taskId}}/shared_link` | `conn_mod_def::GLCQG4uDjQg::th_lxsbjSE6MerrXsUPEog` |
| Create an Action with Recurring Schedule | POST | `/tasks/v1/actions/schedule` | `conn_mod_def::GLCQG6tGvvg::28euQUMoTZmjNZrdBh9xbg` |
| Delete Actions (Bulk) | POST | `/tasks/v1/actions/delete` | `conn_mod_def::GLCQHD9HyLg::ILJ2Bku8Q12rNL3BpmOhYQ` |
| List Actions | POST | `/tasks/v1/actions/list` | `conn_mod_def::GLCQHYLIlkg::bvB7tpSSSvavEgGMpZ328A` |
| Update an Action's Asset | PUT | `/tasks/v1/actions/{{taskId}}/asset` | `conn_mod_def::GLCQHg2LZiA::-8tLXr-qQXel2-rvSdNk0g` |
| Update an Action's Assignees | PUT | `/tasks/v1/actions/{{taskId}}/assignees` | `conn_mod_def::GLCQHtMDrPA::VhWcah9sTB6JhmmPWvGbPg` |
| Update an Action's Due Date | PUT | `/tasks/v1/actions/{{taskId}}/due_at` | `conn_mod_def::GLCQHsq5tkg::x8RwTZO1QbKRNZ20lQJ4-Q` |
| Update an Action's Labels | PUT | `/tasks/v1/actions/{{actionId}}/label` | `conn_mod_def::GLCQH1aNnEg::DDMCdUwrTJyhEGYAQPr8Fw` |

3 more Actions actions are available through search.

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset by ID | GET | `/assets/v1/assets/{{id}}` | `conn_mod_def::GLCQIyE3iig::thLblJizTKm-oG3cO6V3Xw` |
| Get Asset by Code | GET | `/assets/v1/assets:GetAssetByCode` | `conn_mod_def::GLCQIqo9Sag::M_24i0u0RHmXeCTx5VCDbQ` |
| Add Maintenance Last Service Information to an Asset | POST | `/assets/v1/maintenance/asset/{{assetId}}/service` | `conn_mod_def::GLCQIL22Y5A::bPosvB4aTYeEdSkU8tmDkA` |
| Archive an Asset | PATCH | `/assets/v1/assets/{{id}}/archive` | `conn_mod_def::GLCQIXtWXWA::x18P_f79Q2-0V5kX2CmQtg` |
| Create an Asset | POST | `/assets/v1/assets` | `conn_mod_def::GLCQIWk7aoA::-bemjeu_S2W_PDgL-e5iJQ` |
| Create Multiple Assets | POST | `/assets/v1/assets/bulk` | `conn_mod_def::GLCQIh2WCjA::wF4rPU7xTTaF9pwEsaakIQ` |
| Delete an Asset | DELETE | `/assets/v1/assets/{{id}}` | `conn_mod_def::GLCQIhTpNvA::SJ4T5sgDQKWNmNxUknUVPw` |
| List Assets | POST | `/assets/v1/assets/list` | `conn_mod_def::GLCQI8n0trg::WjM2llHsSx-g6Cyyw9tVJA` |
| Lookup Assets by a Field | POST | `/assets/v1/assets:LookupAssetsByField` | `conn_mod_def::GLCQI9T_PJA::VVnOubbuS_C1u3TfjR5tBw` |
| Restore an Archived Asset | DELETE | `/assets/v1/assets/{{id}}/archive` | `conn_mod_def::GLCQJRRljFg::g0nFnJHhTVuwzaH7dHwyhw` |
| Set Field Values of an Asset | PATCH | `/assets/v1/assets/{{assetId}}/fields` | `conn_mod_def::GLCQJR3X9aA::dFCyElpISvOrrVECcI1wIQ` |
| Update an Asset | PATCH | `/assets/v1/assets/{{id}}` | `conn_mod_def::GLCQJqL8D7g::DU-FwHItSFiehdA8Rt-_Iw` |

2 more Assets actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Create-or-Update Users Job | GET | `/users/v1/users/upsert/jobs/{{jobId}}` | `conn_mod_def::GLCQJz6mBZA::t9CGjjASQNKec50JVGhSnA` |
| Get a User | GET | `/users/{{userId}}` | `conn_mod_def::GLCQWXGGGmg::XhXEWnkvTom5y608zqL7Gg` |
| Get a User's Attributes | GET | `/users/v1/users/{{userId}}/attributes` | `conn_mod_def::GLCQWZxYDDg::UGb-_AYqSB6TwU_pnm0QaQ` |
| Cancel a Create-or-Update Users Job | DELETE | `/users/v1/users/upsert/jobs/{{jobId}}` | `conn_mod_def::GLCQJzyYqWA::xrJw6OUxR7asgUiQTs5pmQ` |
| Create a User | POST | `/users` | `conn_mod_def::GLCQWJAGu2A::vIvkDf5HStOpD_-svF2AAA` |
| Create or Update Users Synchronously | POST | `/users/v1/users/upsert` | `conn_mod_def::GLCQJ0HT2Wg::qXJc4IawRxmCvf0u7ynK6g` |
| Initialize a Create-or-Update Users Job | POST | `/users/v1/users/upsert/jobs` | `conn_mod_def::GLCQJzvA9qA::FR7OaCJBR96k9zuRrI7F5g` |
| List Create-or-Update Users Jobs | POST | `/users/v1/users/upsert/jobs/list` | `conn_mod_def::GLCQJ8RreYA::3Hgh3COqQVKjG9Sr0qCMVQ` |
| List Users (by email) | POST | `/users/search` | `conn_mod_def::GLCQWigpBDg::BA-kW89ES42qY2wAphqurg` |
| Set a User's Attributes | POST | `/users/v1/users/{{userId}}/attributes` | `conn_mod_def::GLCQWh3k26A::sHjtD9_cT4aTK2It_SpSdg` |
| Update a User | PUT | `/users/{{userId}}` | `conn_mod_def::GLCQWig-8YA::_OH3HFZ_RWy5kbBPKQhWxg` |

### Investigations

| Action | Method | Path | Action id |
|---|---|---|---|
| Feed Investigations | GET | `/incidents/v1/feed/investigations` | `conn_mod_def::GLCQL3A0OBg::vsze-KJcSNyP0pWAAM2CWg` |
| Get an Investigation by ID | GET | `/incidents/v1/investigations/{{investigationId}}` | `conn_mod_def::GLCQQdDzItg::GTYtYocXSqGE2LUg99ECsg` |
| Get an Investigation PDF Report | GET | `/incidents/v1/investigations/{{investigationId}}/pdf` | `conn_mod_def::GLCQQ-iEppA::pq_vriE5SgSs-CkhiW9_pw` |
| Get Investigations Count | GET | `/incidents/v1/investigations/count` | `conn_mod_def::GLCQRFcYpjg::qwkJ0izeTlmy00w_ZBFyew` |
| List Investigations | GET | `/incidents/v1/investigations` | `conn_mod_def::GLCQR25RdcA::csXfw5rUSkGmcLMuTH97rA` |
| Create Investigation | POST | `/incidents/v1/investigations` | `conn_mod_def::GLCQQT-FakA::TQdmvloSTRaj3Ip6h1KlOg` |
| Delete Investigation | DELETE | `/incidents/v1/investigations/{{investigationId}}` | `conn_mod_def::GLCQQTtmRRA::gyqViPlCTouGiYaa5uy-iA` |
| Update an Investigation | PUT | `/incidents/v1/investigations/{{investigationId}}` | `conn_mod_def::GLCQSMayp2A::WN0gvRTpRUqqo5eymbA1Uw` |
| Update an Investigation's Access | PUT | `/incidents/v1/investigations/{{investigationId}}/access` | `conn_mod_def::GLCQSH_0fEA::VsE1oOp1QQmmwMZbquLi7A` |
| Update Investigations (Bulk) | PUT | `/incidents/v1/investigations` | `conn_mod_def::GLCQSJdsZ5g::wRk2Zgt2QYuzvfGbvHp7iQ` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule by ID | GET | `/scheduling/v1/schedules/{{scheduleId}}` | `conn_mod_def::GLCQT_I6yYg::5OE6d7pyQfqSGJEWEe_amw` |
| Get Data Feed for Schedules | GET | `/feed/schedules` | `conn_mod_def::GLCQMbMUY2g::9xPC25h2ROu0gKLRRODmKA` |
| Create a New Schedule | POST | `/scheduling/v1/schedules` | `conn_mod_def::GLCQUAuL7Wg::lYJbB4VnTsqD6NKwSzq-iQ` |
| Delete a Schedule | DELETE | `/scheduling/v1/schedules/{{id}}` | `conn_mod_def::GLCQT-5zQgg::7BKh9ipiTZSb1DuXBZ8dQg` |
| Update a Schedule's Assignees | PATCH | `/scheduling/v1/schedules/{{scheduleId}}/assignees` | `conn_mod_def::GLCQUJ6R-UA::oWZJ5v20TXin0G9jI4uA-w` |
| Update a Schedule's Recurrence | PATCH | `/scheduling/v1/schedules/{{scheduleId}}/recurrence` | `conn_mod_def::GLCQUJ6cJrg::p3HB1JEwS6KdmTRaAh0tPg` |
| Update a Schedule's Target | PATCH | `/scheduling/v1/schedules/{{scheduleId}}/target` | `conn_mod_def::GLCQURspZ7g::3bPthDMKR9641WcUrXZSVw` |
| Update Schedule Details | PATCH | `/scheduling/v1/schedules/{{scheduleId}}/details` | `conn_mod_def::GLCQURmAnaA::ZuBMFG3ATkKxEbhLBcmJWw` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template (by ID) | GET | `/templates/v1/templates/{{templateId}}` | `conn_mod_def::GLCQU8fngMg::H64tlwivTJ6AbOsj1HNNHg` |
| Get Template by Inspection | GET | `/templates/v1/templates/inspections/{{inspectionId}}` | `conn_mod_def::GLCQU6YU6yA::GQ9To1lgSPC7XsbLh2YTgg` |
| Get Template Definition | GET | `/templates/integration/v1/templates/{{templateId}}/definition` | `conn_mod_def::GLCQU4PBlIg::g2-5YpIDR2Wlal1PeIe7fA` |
| List Templates in the Data Feed | GET | `/feed/templates` | `conn_mod_def::GLCQMkuuhRg::ME0fBCIBQR2z8l9Y9OpnzQ` |
| Search Modified Templates | GET | `/templates/search` | `conn_mod_def::GLCQVMApPpg::d0fezR5wReyNtR-N-e5hRg` |
| Archive a Template | POST | `/templates/v1/templates/{{templateId}}/archive` | `conn_mod_def::GLCQU5npLjg::5eaXYBsLSn6s_4k3Xuz20A` |
| Delete a Template by ID | DELETE | `/templates/v1/templates/{{templateId}}` | `conn_mod_def::GLCQU2_QrRA::HUmXJ5HySv2XuUovCoEMJg` |
| Restore an Archived Template | DELETE | `/templates/v1/templates/{{templateId}}/archive` | `conn_mod_def::GLCQVEti4ZA::lKvy_DiNQQ6K57zjtTjLoQ` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Document Item | POST | `/documents/v1/archive/{{itemId}}` | `conn_mod_def::GLCQNT_JO8g::W07GH6rYSjyB4PdGTX4RUA` |
| Bulk Add File Owners | POST | `/documents/v1/bulk/add_owners` | `conn_mod_def::GLCQNPe13QA::94KP9qnoTq-H_rlMMpcJ8Q` |
| Bulk Remove File Owners | POST | `/documents/v1/bulk/remove_owners` | `conn_mod_def::GLCQNd--ClA::DuyoLeB5Sb2uNUYyIi_xvw` |
| Bulk Update Document File Owners | POST | `/documents/v1/bulk/update_owners` | `conn_mod_def::GLCQNds8jVg::277TKNF1Skqcpr72uohxsQ` |
| Create a Document File | POST | `/documents/v1` | `conn_mod_def::GLCQNdlXuCg::oUqho_1FSROUec6mo9Oweg` |

3 more Documents actions are available through search.

This lists 90 of 379 actions. For anything not here, call `search_one_platform_actions` with platform `safetyculture`. The full catalog is at https://www.withone.ai/knowledge/safetyculture.

## When a call fails

The error comes from Safetyculture, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/safetyculture

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
