---
name: wrike
description: Wrike is a work management platform that provides project planning, task tracking, collaboration, reporting, and automation capabilities, allowing teams to coordinate work, manage resources, and integrate project data with other business systems through its APIs and developer tools. Read and write Wrike data through One: folders, attachments, tasks, timelogs, approvals, comments and more, 195 actions with real parameter documentation. Use whenever the user asks to look something up in Wrike, create or update a record there, or build code against the Wrike API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: wrike
  generated-from: one-knowledge-base
---

# Wrike through One

Wrike is a work management platform that provides project planning, task tracking, collaboration, reporting, and automation capabilities, allowing teams to coordinate work, manage resources, and integrate project data with other business systems through its APIs and developer tools.

One exposes Wrike through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `wrike` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Wrike is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Wrike account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Folders | GET | `/api/v4/folders` | `conn_mod_def::GLWNvzPQGMg::Opkc2XbXQf6N64J6k2s0fw` |
| Get Folder By ID | GET | `/api/v4/folders/{{folderIds}}` | `conn_mod_def::GLWNvhgGpvg::xuk6zIMZTNuD2K6fcyEQbA` |
| Get Folders for a Space | GET | `/api/v4/spaces/{{spaceId}}/folders` | `conn_mod_def::GLWNvzJDRtg::3Fi9rptKS4etTwC3sOXunA` |
| Get Folders in a Folder | GET | `/api/v4/folders/{{folderId}}/folders` | `conn_mod_def::GLWNv00tbcA::j5yzGcaLRhqLhZ3JA5elLQ` |
| Copy Folder | POST | `/api/v4/copy_folder/{{folderId}}` | `conn_mod_def::GLWNvnCPLCg::u6EqU_ggRbOLgK3ekxiJLQ` |
| Copy Folder Async | POST | `/api/v4/copy_folder_async/{{folderId}}` | `conn_mod_def::GLWNvkMGsZA::eMgbEmL_SViUl_YV7HN_QQ` |
| Create a Folder in a Folder | POST | `/api/v4/folders/{{folderId}}/folders` | `conn_mod_def::GLWNvkcRJeA::Ww0HemtKTVqGxxsniMW07g` |
| Delete Folder | DELETE | `/api/v4/folders/{{folderId}}` | `conn_mod_def::GLWNvgPAFdA::vAuxfbgFRWS1gVFY7nvOgw` |
| Update Budget Rates for a Folder | PUT | `/api/v4/folders/{{folderId}}/hourly_rates` | `conn_mod_def::GLWNw4beJgA::uucpogtDThakZJ4L7b3CIw` |
| Update Folder | PUT | `/api/v4/folders/{{folderId}}` | `conn_mod_def::GLWNv2XrdXg::a3vQfV4nRT2RlZTMfrO5Zw` |
| Update Folders (Bulk) | PUT | `/api/v4/folders/{{folderIds}}` | `conn_mod_def::GLWNv_XKzbA::KiTeWWmhSKC18ogzfRPsmQ` |
| Update Rollup Settings for a Folder | PUT | `/api/v4/folders/{{folderId}}/rollups` | `conn_mod_def::GLWNx42EheA::M4V1EtMZRbiPCH_L2N0ovQ` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment | GET | `/api/v4/attachments/{{attachmentId}}/download` | `conn_mod_def::GLWNtqTvJwA::Sx_zQpFOQBeG3sK9n7cClw` |
| Get Attachment URL | GET | `/api/v4/attachments/{{attachmentId}}/url` | `conn_mod_def::GLWNtp_FUGA::CvmwDDGESMu_ECaqptmG_w` |
| Get Attachments by ID | GET | `/api/v4/attachments/{{attachmentIds}}` | `conn_mod_def::GLWNt0SIxcg::hKpvIzbETACAnjfgBZDyDA` |
| Get Attachments for a Folder | GET | `/api/v4/folders/{{folderId}}/attachments` | `conn_mod_def::GLWNt10oLag::TCJ_7P2mScO7OL-TFVgFbQ` |
| Get Attachments for an Account | GET | `/api/v4/attachments` | `conn_mod_def::GLWNt1ClpgA::ayRV4XXVQY6RW1c_9XIf2Q` |
| Preview Attachment | GET | `/api/v4/attachments/{{attachmentId}}/preview` | `conn_mod_def::GLWNt1CjTHA::aRrDPRVZRK-BeZQVS4KgRQ` |
| Create Attachment for a Task | POST | `/api/v4/tasks/{{taskId}}/attachments` | `conn_mod_def::GLWNtqVUm6g::pXkdfEEoSjONmfEV6EyRNQ` |
| Delete Attachment | DELETE | `/api/v4/attachments/{{attachmentId}}` | `conn_mod_def::GLWNtplBSMA::Xf2o7OaaSRiEqaz_ug7Zlw` |
| Update an Attachment | PUT | `/api/v4/attachments/{{attachmentId}}` | `conn_mod_def::GLWNt-LwFoA::KTtDbmpWSPmEkHz64nPqtA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tasks by IDs | GET | `/api/v4/tasks/{{taskIds}}` | `conn_mod_def::GLWNymnDLIA::GsFRJVc4QDq2td4KTk-z4g` |
| Get Tasks for a Folder | GET | `/api/v4/folders/{{folderId}}/tasks` | `conn_mod_def::GLWNyt0dN-g::lovUQFS6STqokrrwsCXYtA` |
| Get Tasks for the Current Account | GET | `/api/v4/tasks` | `conn_mod_def::GLWNysZ3v5A::vRHBIJmNS0a2EzKfOTozEQ` |
| Get Tasks in a Space | GET | `/api/v4/spaces/{{spaceId}}/tasks` | `conn_mod_def::GLWNytMYJ6g::KeWERVLgSHS0V5INGi0e0g` |
| Create a Task in a Folder | POST | `/api/v4/folders/{{folderId}}/tasks` | `conn_mod_def::GLWNyYrlKGA::fKCWL1pAQ3GqRb_pDY8YMA` |
| Create Dependency for a Task | POST | `/api/v4/tasks/{{taskId}}/dependencies` | `conn_mod_def::GLWNvI7Uqag::Wk0dAV68TsOUDmNVqf-6Gg` |
| Delete Task by ID | DELETE | `/api/v4/tasks/{{taskId}}` | `conn_mod_def::GLWNyXvQ-Vg::cFlelSvjRvu7fhJ6JotK-g` |
| Update a Task | PUT | `/api/v4/tasks/{{taskId}}` | `conn_mod_def::GLWNy-FbLpA::X4STMYebTaW8Oz4atl8oaA` |
| Update Tasks in Bulk | PUT | `/api/v4/tasks/{{taskIds}}` | `conn_mod_def::GLWNy57nNCg::0F7JL2fKTj-FT7Nj79kJEw` |

### Timelogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Timelogs | GET | `/api/v4/contacts/{{contactId}}/timelogs` | `conn_mod_def::GLWNzdu32BA::huNQmS7vRK2KF_O7sfi4yg` |
| Get Account Timelogs | GET | `/api/v4/timelogs` | `conn_mod_def::GLWNzROOewA::3h6UeQNMQymtd0_QsQUDSw` |
| Get Folder Timelogs | GET | `/api/v4/folders/{{folderId}}/timelogs` | `conn_mod_def::GLWNzTmzLLg::eYTGVYrASj-b4E81TD2yGQ` |
| Get Task Timelogs | GET | `/api/v4/tasks/{{taskId}}/timelogs` | `conn_mod_def::GLWNzfczpCA::S5-re4TpRnWXnjmaGI8HCw` |
| Get Timelogs by ID | GET | `/api/v4/timelogs/{{timelogIds}}` | `conn_mod_def::GLWNzfwpjcg::C9eDbusyQrSc07Sp0-U-4w` |
| Get Timelogs for a Timelog Category | GET | `/api/v4/timelog_categories/{{timelogCategoryId}}/timelogs` | `conn_mod_def::GLWNzS3PUig::Jm165FCMRaaxCAemrY7zYA` |
| Create a Task Timelog | POST | `/api/v4/tasks/{{taskId}}/timelogs` | `conn_mod_def::GLWNzRGf4dA::VUwx7ansSgOXMiYqdUn19g` |
| Delete Timelog | DELETE | `/api/v4/timelogs/{{timelogId}}` | `conn_mod_def::GLWNzNZGXsA::ratuRiZaS8eW_ea2oKjkfw` |
| Modify a Timelog | PUT | `/api/v4/timelogs/{{timelogId}}` | `conn_mod_def::GLWNzd83abA::HJvgX2YoT4myPZjNFM16Vg` |

### Approvals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Approvals by ID | GET | `/api/v4/approvals/{{approvalIds}}` | `conn_mod_def::GLWNtPRTfKg::e700HzOYRUKisYAsHEKhjg` |
| Get Approvals for a Folder | GET | `/api/v4/folders/{{folderId}}/approvals` | `conn_mod_def::GLWNtOIJgrg::YoL-6ZraQXWHSBpfjv5cMQ` |
| Get Approvals for a Task | GET | `/api/v4/tasks/{{taskId}}/approvals` | `conn_mod_def::GLWNtPQ75Zg::ImWVQ-akSPKEwkSMl-M0HA` |
| Get Approvals for an Account | GET | `/api/v4/approvals` | `conn_mod_def::GLWNtQzgwAA::z_lu5uGSS6eOCM6dt86y2Q` |
| Cancel Approval | DELETE | `/api/v4/approvals/{{approvalId}}` | `conn_mod_def::GLWNtDaPAxg::xC7rYz2ORB-q_uVHro29wg` |
| Create Approvals for a Task | POST | `/api/v4/tasks/{{taskId}}/approvals` | `conn_mod_def::GLWNtPVukWg::VcY5D0ioRJyltAuSXT-r1Q` |
| Create Approvals Using Folder | POST | `/api/v4/folders/{{folderId}}/approvals` | `conn_mod_def::GLWNtFWJyHA::4BPGJn4lSHiixJdCYzvfAg` |
| Update Approval | PUT | `/api/v4/approvals/{{approvalId}}` | `conn_mod_def::GLWNtbBtyKg::IUTQ-ldjSz2S2LivuSgxIA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Comments | GET | `/api/v4/comments` | `conn_mod_def::GLWNuRoNiOA::VDd3zdjfTkCWyCszlJgeow` |
| Get Comments by ID | GET | `/api/v4/comments/{{commentIds}}` | `conn_mod_def::GLWNuaPv2_g::LlN4bbRYQh-ofGrzhlabSQ` |
| Get Comments for a Folder | GET | `/api/v4/folders/{{folderId}}/comments` | `conn_mod_def::GLWNuSimF3g::4xL5DFscTbeI7pVH5j3-7Q` |
| Get Comments for a Task | GET | `/api/v4/tasks/{{taskId}}/comments` | `conn_mod_def::GLWNuarbnkg::UJdSPE9MRtWfoYk1alQdUQ` |
| Create a Comment for a Task | POST | `/api/v4/tasks/{{taskId}}/comments` | `conn_mod_def::GLWNuR-MDzA::DjiDwVVoRwq2eREAtSEsyA` |
| Create a Comment in a Folder | POST | `/api/v4/folders/{{folderId}}/comments` | `conn_mod_def::GLWNuRWDaPg::DFLqcgAjR1CACLN3to3zAg` |
| Delete Comment | DELETE | `/api/v4/comments/{{commentId}}` | `conn_mod_def::GLWNuP7wDVg::wFW5yvwMQluaVELSfwR-hQ` |
| Update Comment | PUT | `/api/v4/comments/{{commentId}}` | `conn_mod_def::GLWNubY5h8g::YGGa1GPPT_akcVTNd8twEg` |

### TimelogLockPeriods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Timelog Lock Periods for a Task | GET | `/api/v4/tasks/{{taskId}}/timelog_lock_periods` | `conn_mod_def::GLWNzGOMYAA::a3mQcopvQEGcnFYMcJMU3w` |
| Get Timelog Locks for a Folder | GET | `/api/v4/folders/{{folderId}}/timelog_lock_periods` | `conn_mod_def::GLWNzF37xMg::FuOzlgqvT2W-G1cI-QZSgw` |
| Get Timelog Locks for a Space | GET | `/api/v4/spaces/{{spaceId}}/timelog_lock_periods` | `conn_mod_def::GLWNzGA_SEA::Go6QnXNSR02LUX8LdKfehA` |
| Create Timelog Lock Periods for a Folder | POST | `/api/v4/folders/{{folderId}}/timelog_lock_periods` | `conn_mod_def::GLWNy270bGg::cp-qU5gBSvG90WmWt3pfqw` |
| Create Timelog Lock Periods for a Space | POST | `/api/v4/spaces/{{spaceId}}/timelog_lock_periods` | `conn_mod_def::GLWNy2nxwSA::qT-DtYMNToixPukFZ2TB-g` |
| Delete Timelog Lock Periods for a Folder | DELETE | `/api/v4/folders/{{folderId}}/timelog_lock_periods` | `conn_mod_def::GLWNzGCZ0_A::748tIMonSlG5eiyW0sSljQ` |
| Delete Timelog Lock Periods for a Space | DELETE | `/api/v4/spaces/{{spaceId}}/timelog_lock_periods` | `conn_mod_def::GLWNzF3zh2g::mx2fNnRmSsKxGV25fGlRHg` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Bookings | GET | `/api/v4/bookings` | `conn_mod_def::GLWNuIOOBeg::2Pv2CynWRr60qWLRU3GjMw` |
| Get Bookings by ID | GET | `/api/v4/bookings/{{bookingIds}}` | `conn_mod_def::GLWNuGcRa6g::KqvK5hsOQ5y4RC1UEy_k1g` |
| Get Folder Bookings | GET | `/api/v4/folders/{{folderId}}/bookings` | `conn_mod_def::GLWNuH1IgjA::yHuAmxDDTDeROe2y3B0xAw` |
| Create Booking for a Folder | POST | `/api/v4/folders/{{folderId}}/bookings` | `conn_mod_def::GLWNt-J92Gg::ESjyuwYxT-Ob60DH3U96Og` |
| Delete Booking | DELETE | `/api/v4/bookings/{{bookingId}}` | `conn_mod_def::GLWNt8rKT1g::5h_F6XymTt-XVNagRu4hUg` |
| Update a Booking | PUT | `/api/v4/bookings/{{bookingId}}` | `conn_mod_def::GLWNuJo1Txg::ybG1dN08QHaIm2LVHaDMog` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Space's Custom Fields | GET | `/api/v4/spaces/{{spaceId}}/customfields` | `conn_mod_def::GLWNuwLaHkg::sSTAf10xT1-Z6dhk64DK8Q` |
| Get Space By ID | GET | `/api/v4/spaces/{{spaceId}}` | `conn_mod_def::GLWNyJVukLA::q44jXCoLSmGKnnGVbahPdg` |
| Get Spaces for an Account | GET | `/api/v4/spaces` | `conn_mod_def::GLWNyKJdDRA::YAq23Yg8QheFaqBjB-uSMQ` |
| Create Space | POST | `/api/v4/spaces` | `conn_mod_def::GLWNyPuApXg::SOWyJZCCQnmiwXpVKhrwQg` |
| Delete a Space | DELETE | `/api/v4/spaces/{{spaceId}}` | `conn_mod_def::GLWNyIjMY3g::-VoTaramS2uhrik99YuzOw` |
| Update a Space | PUT | `/api/v4/spaces/{{spaceId}}` | `conn_mod_def::GLWNyNx24Eg::6HeCzbziSjqsmsQX_9YVgw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Group | GET | `/api/v4/groups/{{groupId}}` | `conn_mod_def::GLWNwKGsonA::1i8HNxz9QHqyPiHVCb5s-g` |
| Query Groups | GET | `/api/v4/groups` | `conn_mod_def::GLWNwKgLZwA::_R84evGCQVijn3eZFIv6Yg` |
| Bulk Modify Groups | PUT | `/api/v4/groups_bulk` | `conn_mod_def::GLWNv-YXvsg::JK96YDWPQnCVR-iQLKr9Cg` |
| Create Groups | POST | `/api/v4/groups` | `conn_mod_def::GLWNv_A-Obg::dwp9dWVsSMe__0KGjzAW0g` |
| Delete a Group | DELETE | `/api/v4/groups/{{groupId}}` | `conn_mod_def::GLWNv-vuuaA::zDooBfviTGKI4AeVB06HWA` |
| Modify a Group (by groupId) | PUT | `/api/v4/groups/{{groupId}}` | `conn_mod_def::GLWNwCH1G8A::5NocAXuITAa7mDZIAmY9FQ` |

### RequestForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Request Form by ID | GET | `/api/v4/request_forms/{{requestFormId}}` | `conn_mod_def::GLWNxY0SNpA::runmZtktSGWzT9JSPmqSKg` |
| Query Request Forms | GET | `/api/v4/request_forms` | `conn_mod_def::GLWNxWE_qVg::dgTkLzXtQYug79NgfCICCQ` |
| Query Request Forms in a Space | GET | `/api/v4/spaces/{{spaceId}}/request_forms` | `conn_mod_def::GLWNxWfukYg::74ThUdA7TnC1EzFwox6m4w` |
| Generate Prefilled Request Form URL | POST | `/api/v4/request_forms/{{requestFormId}}/prefill_url` | `conn_mod_def::GLWNxwcHSxA::KGTeDNVrRHC1oY3VsoYk1w` |
| Submit Request Form | POST | `/api/v4/request_forms/{{requestFormId}}/submit` | `conn_mod_def::GLWNx41ycPg::GYenXOveTdKDiUerI_ePtQ` |

### UserScheduleExclusions

| Action | Method | Path | Action id |
|---|---|---|---|
| Query User Schedule Exception | GET | `/api/v4/user_schedule_exclusions/{{userScheduleExclusionId}}` | `conn_mod_def::GLWN0EE9v7g::SRiGG-i_SbCbnrMobupbQQ` |
| Query User Schedule Exception | GET | `/api/v4/user_schedule_exclusions` | `conn_mod_def::GLWN0EGFnig::ghegzZtvRueXpnM_UiqAXg` |
| Create User Schedule Exception | POST | `/api/v4/user_schedule_exclusions` | `conn_mod_def::GLWN0FmjhbA::7-AKpVYoQ_G6v0ny2nroKQ` |
| Delete User Schedule Exception | DELETE | `/api/v4/user_schedule_exclusions/{{userScheduleExclusionId}}` | `conn_mod_def::GLWN0EGAhXg::U0JZjNKCSKalWnSlUiKOog` |
| Update User Schedule Exception | PUT | `/api/v4/user_schedule_exclusions/{{userScheduleExclusionId}}` | `conn_mod_def::GLWN0N7VyfA::QkDVU2jhShuqOtDAKfYnNA` |

This lists 90 of 195 actions. For anything not here, call `search_one_platform_actions` with platform `wrike`. The full catalog is at https://www.withone.ai/knowledge/wrike.

## When a call fails

The error comes from Wrike, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/wrike

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
