---
name: time-camp
description: TimeCamp is a time tracking and productivity platform that provides automatic time logging, timesheets, attendance, and project budgeting features, allowing teams and businesses to monitor work hours, analyze productivity, manage billable time, and integrate tracking data into operational workflows. Read and write TimeCamp data through One: tasks, timeentries, approval, customfields, projects, tags and more, 144 actions with real parameter documentation. Use whenever the user asks to look something up in TimeCamp, create or update a record there, or build code against the TimeCamp API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: time-camp
  generated-from: one-knowledge-base
---

# TimeCamp through One

TimeCamp is a time tracking and productivity platform that provides automatic time logging, timesheets, attendance, and project budgeting features, allowing teams and businesses to monitor work hours, analyze productivity, manage billable time, and integrate tracking data into operational workflows.

One exposes TimeCamp through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `time-camp` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm TimeCamp is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real TimeCamp account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task Details | GET | `/third_party/api/task_details` | `conn_mod_def::GLEwau7mrFA::ErmsbhJkTRiKfy4g74IZSg` |
| Get Task Info | GET | `/third_party/api/tasks` | `conn_mod_def::GLEwa6IeLKg::Xu2Cu8CbTtSy7OioBXN6iA` |
| Add Tags to a Task | POST | `/task/{{taskId}}/tag` | `conn_mod_def::GLEwampV4AA::jz6C08b6Tl2H8YxHXCbn6A` |
| Archive a Batch of Tasks | PATCH | `/third_party/api/v3/task-archive/archive-batch` | `conn_mod_def::GLEwc5tToNA::FuGtIZrJSHqGwy8QDLma6A` |
| Change a Task's Parent | POST | `/v3/task/{{id}}/change-parent` | `conn_mod_def::GLEwcwjbG3A::FMNqAxI4QEaJ3A3aHfqkpA` |
| Create New Task | POST | `/third_party/api/tasks` | `conn_mod_def::GLEwaupiPXA::5ICayK-LQyGYqHcZD2AGLQ` |
| Delete Task | DELETE | `/tasks` | `conn_mod_def::GLEwau5eUhA::52kSNO34Ti-vRDgBIqiBgg` |
| Duplicate a Task | POST | `/third_party/api/v3/task/duplicate` | `conn_mod_def::GLEwcwdThVg::p_LhpeqpRWOm5oxEMX6rBA` |
| Duplicate Tasks in Batch | POST | `/third_party/api/v3/task/duplicate-batch` | `conn_mod_def::GLEwcwbf3-A::60LpcMnRQ_K02gETGJXLfw` |
| Remove Tags from a Task | DELETE | `/task/{{taskId}}/tag` | `conn_mod_def::GLEwa4Y3Qrg::_i1WY3N5TmWtsu2Vz1wfzw` |
| Remove Tasks | POST | `/third_party/api/v3/task/remove` | `conn_mod_def::GLEwcwiOmYA::DUCJKT1HRFO4a_2v3B13ZQ` |
| Update Task Info | PUT | `/third_party/api/tasks` | `conn_mod_def::GLEwa392j9g::H9nFfhs-Qf69UNapEDSk_A` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Entries | GET | `/third_party/api/entries` | `conn_mod_def::GLEwZjHSyoA::TL9nBhUNTReVKKbomO4Uuw` |
| Add Tags to a Time Entry | PUT | `/entries/{{entryId}}/tags` | `conn_mod_def::GLEwaRy_Dlg::AZ7Ccqm5TBmbzRralZvheA` |
| Create Time Entry | POST | `/third_party/api/entries` | `conn_mod_def::GLEwZW6xFhA::hwbprCSlQn6NplGUk0BZYg` |
| Delete Tags From a Time Entry | DELETE | `/entries/{{entryId}}/tags` | `conn_mod_def::GLEwacACHYA::yVH-kLeTTpaYy5LpRgvDMg` |
| Delete Time Entry | DELETE | `/entries` | `conn_mod_def::GLEwZWiBCnA::rNkjmdOERcGc7meUPBSbjg` |
| Get Time Entries by User Permissions | POST | `/third_party/api/v3/time-entries` | `conn_mod_def::GLEwdIILMkA::zB3c5qYZSY6jkQ1rYOKpsQ` |
| Merge Time Entries | POST | `/third_party/api/entries_merge` | `conn_mod_def::GLEwZk0L8_g::hIYBG5tkSiOamvDF-AySZA` |
| Update Time Entry | PUT | `/third_party/api/entries` | `conn_mod_def::GLEwZsMR2cg::_1ZlFpdGSDeoc1uUQE8kdw` |

### Approval

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Approval by ID | GET | `/v3/approval/{{resourceId}}` | `conn_mod_def::GLEwbUs-LNg::gzmWUnLnSYGO8eLuf1VFNw` |
| Bulk Change Status of Approval | PUT | `/third_party/api/v3/approval/bulk-change-status` | `conn_mod_def::GLEwbMwuY5A::l55-n98fRsOVwtfOnhBPwA` |
| Change Status of an Approval | PUT | `/v3/approval/{{id}}/change-status` | `conn_mod_def::GLEwbMeRQHg::rOBsb6auQ8ClsH2NMwnPZA` |
| Create or Update Approval | POST | `/third_party/api/approval` | `conn_mod_def::GLEwY0q1zog::H-gZjGuQS1WcA_IbMTrVZg` |
| List Approval | POST | `/third_party/api/v3/approval/list` | `conn_mod_def::GLEwbUpdTnA::w_x0GgghQDe3ySUw6R4x7Q` |
| Send Reminder | POST | `/third_party/api/v3/approval/send-reminder` | `conn_mod_def::GLEwbTtKnjg::9BXtTErTR2qGQAHoAZnwYw` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Value for a Resource Custom Field | GET | `/v3/custom-fields/{{templateId}}/value/{{resourceId}}` | `conn_mod_def::GLEwbuEy-tg::2z5OcoFETm2wS4998K-gKQ` |
| Assign Value to a Resource Custom Field | POST | `/v3/custom-fields/{{templateId}}/assign/{{resourceId}}` | `conn_mod_def::GLEwbmMMj8A::3zUpcTDSR_WdcDU8QOJmrg` |
| Modify a Custom Field Template | PUT | `/v3/custom-fields/template/{{templateId}}/modify` | `conn_mod_def::GLEwbtxva9A::j_Txa3tvRkaemD4QblNq0w` |
| Remove a Custom Field Template | DELETE | `/v3/custom-fields/template/{{templateId}}/remove` | `conn_mod_def::GLEwbt2C33A::41w-lBqSSYiHHXImGy_ajQ` |
| Unassign a Custom Field Value from a Resource | DELETE | `/v3/custom-fields/{{templateId}}/unassign/{{resourceId}}` | `conn_mod_def::GLEwb2ePMIg::tc7YpNI1RdixgwoNj1zdNw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign Users to a Project Task | PUT | `/v3/projects/{{taskId}}/assign` | `conn_mod_def::GLEwcdOppkg::Ay--j_hUSPu6B7rEffgS_w` |
| List Projects Tree | POST | `/third_party/api/v3/projects` | `conn_mod_def::GLEwcd_ywrg::GNa44fgvRfig5oO2TxVI4g` |
| Search in Projects Tree | POST | `/third_party/api/v3/projects/search` | `conn_mod_def::GLEwcd66iQg::dcqGJWlzRNKQ-qHUQbURpQ` |
| Search Projects in the Projects Tree by Directly Assigned Users | POST | `/third_party/api/v3/projects/search/assigned-users` | `conn_mod_def::GLEwcd0LYgg::OIrSw4J2Spq3P3GM0vG1FA` |
| Unassign Users From a Project Task | PUT | `/v3/projects/{{taskId}}/unassign` | `conn_mod_def::GLEwcmLyyWA::H5iTEzekQcqEyfDjOxcsjA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tag Data | GET | `/tag/{{tagId}}` | `conn_mod_def::GLEwaaGHaVA::QJbknMOqT5WrPBeC56YbcA` |
| List Tags in a Tag List | GET | `/tag_list/{{tagListId}}/tags` | `conn_mod_def::GLEwababQUA::kNQJIBi3R8SbfVBFES8xxA` |
| Add an Allowed Group to a Tag | POST | `/tag/{{tagId}}/group/{{groupId}}` | `conn_mod_def::GLEwaRmeMtA::wAQUtmTmRPGCsano-ej4bg` |
| Delete an Allowed Group from a Tag | DELETE | `/tag/{{tagId}}/group/{{groupId}}` | `conn_mod_def::GLEwaQPlptA::zCrc_pl_Q4ykLhLgDce2Sw` |

### PredefinedDays

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Group's Effective Predefined Days | GET | `/v3/attendance/predefined-days/{{groupId}}/effective` | `conn_mod_def::GLEwbdCG4zA::jDhjDPbLTomVon10qEP3gQ` |
| List a Group's Predefined Days Assigned Directly to the Group | GET | `/v3/attendance/predefined-days/{{groupId}}` | `conn_mod_def::GLEwbdVudPg::GIyPWPYZSDid6zngLgtsiQ` |
| Create Predefined Days for a Group | POST | `/third_party/api/v3/attendance/predefined-days/create` | `conn_mod_def::GLEwbdHOeng::NuIGFXnXQouHzYZaRNYFdw` |
| Remove Predefined Day From a Group | DELETE | `/v3/attendance/predefined-days/{{groupId}}/remove/{{date}}` | `conn_mod_def::GLEwbl0fq4g::547HSlIgS8Ga-oKqB69_zw` |

### ExpenseCategory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Expense Category | GET | `/third_party/api/v3/expense/category` | `conn_mod_def::GLEwcVkFrxg::nNn9_GlxTo-2UzfLgnag6A` |
| Archive Expense Category | PATCH | `/v3/expense/category/{{id}}/archive` | `conn_mod_def::GLEwcDxhCBg::mK4icopyQBO019Yf1gylCw` |
| Create Expense Category | POST | `/third_party/api/v3/expense/category` | `conn_mod_def::GLEwb_-PHag::kW2KPsBCStmrjSrXVVDPFg` |
| Update an Expense Category | PUT | `/v3/expense/category/{{id}}` | `conn_mod_def::GLEwcVvDiuA::lIVBpDfUQBWQVEa0yz8wTQ` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Expense | GET | `/third_party/api/v3/expense/list` | `conn_mod_def::GLEwcNroJXA::-isQaTEKSDafe_d4Z-0t5w` |
| Assign an Invoice to an Expense | PUT | `/third_party/api/v3/expense/invoice/assign` | `conn_mod_def::GLEwcL0TVgA::21bIX-_lSZ-ZYE_s-0RyPA` |
| Unassign Invoices From Expenses | PUT | `/third_party/api/v3/expense/invoice/unassign` | `conn_mod_def::GLEwcLi_RfA::WQVXAyp1RCaqbTYYTI-sLw` |
| Update an Expense | PUT | `/v3/expense/{{id}}` | `conn_mod_def::GLEwcU4L4oA::OJlQ1dMnQueOild2zcic-g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/user/{{userId}}` | `conn_mod_def::GLEwbBwaTwA::36P99XyBTXCywSWHu0-9Uw` |
| List Users | GET | `/users` | `conn_mod_def::GLEwbCPagCA::AUJkNiBLR9CbctXovdjtnw` |
| Update User | POST | `/third_party/api/user` | `conn_mod_def::GLEwbL-wltg::_UzOA7qbRW-7shHG-aczJA` |

### Expense

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Expense | POST | `/third_party/api/v3/expense` | `conn_mod_def::GLEwcBQylBA::re8ZBBcBRmSrnwpB_PxzGA` |
| Delete Expense | DELETE | `/v3/expense/{{id}}` | `conn_mod_def::GLEwcClzDcg::VZ6CM6o3RmWuBtM4v7BAcw` |
| List Expense | POST | `/third_party/api/v3/expense/list` | `conn_mod_def::GLEwcVRT7qg::jwJFQzOrR6iD4SB6Hib8zQ` |

### GroupScheduler

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group's Scheduler | GET | `/group/{{groupId}}/scheduler` | `conn_mod_def::GLEwZ16ifyg::wfpEyVPrQG29cjbENlS3-A` |
| Create or Update a Group Scheduler | PUT | `/group/{{groupId}}/scheduler` | `conn_mod_def::GLEwZuQj6kg::6aJd_e8WTXeEpzn-VZVLUg` |
| Delete a Group Scheduler | DELETE | `/group/{{groupId}}/scheduler` | `conn_mod_def::GLEwZtd3k4A::K-gf191-Ruy0T6YExG3bJQ` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/third_party/api/group` | `conn_mod_def::GLEwZ11OwoA::NGDHluImTdGkvXa_k7qBXA` |
| Invite Users to a Group | POST | `/group/{{groupId}}/user` | `conn_mod_def::GLEwaApMHUg::Fbobf3ypR3GDeaSOwnt1gQ` |
| Update Group | POST | `/third_party/api/group` | `conn_mod_def::GLEwZ_14spg::7vZOgsr_RVCsVgA7eRfTQw` |

### Attendance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attendance | GET | `/third_party/api/attendance` | `conn_mod_def::GLEwY1g8IgA::XF_kSLXCTzG1W4_pThAzlA` |
| Retrieve Attendance Data for a User | GET | `/attendance/{{userId}}/user` | `conn_mod_def::GLEwY9_oLFg::Pmt_h4pBSSSMO-OmUIQcgA` |
| Insert or Update a User's Attendance Records | POST | `/attendance/{{userId}}/user` | `conn_mod_def::GLEwY9onn7A::tNEFGavRQXmCvldEeYVRfA` |

### UserSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Setting | GET | `/user/{{userId}}/setting` | `conn_mod_def::GLEwbCqNWCA::97RcYsUATE2uMaMnaN6K3g` |
| Delete a User Setting | DELETE | `/user/{{userId}}/setting` | `conn_mod_def::GLEwbBz5vjg::w-7rOgGXRQ2gwoa4S6ArUA` |
| Update a User's Setting | PUT | `/user/{{userId}}/setting` | `conn_mod_def::GLEwbM1zfiA::bCtNoaNSTJO7GlQ3GTVVGw` |

### FavoriteTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Favorite Tasks | GET | `/taskPicker/favourites` | `conn_mod_def::GLEwc5_9GCg::X4l1ofnHS7uwjCUWVhmK2A` |
| Add a Task to Favorite Tasks | POST | `/v3/taskPicker/favourites/add/{{taskId}}` | `conn_mod_def::GLEwc6CfT4A::L1DVypDkT9iMibFFFX3_lQ` |
| Delete a Favorite Task | DELETE | `/v3/taskPicker/favourites/delete/{{taskId}}` | `conn_mod_def::GLEwdAoi5Fg::u31JS2_rQviWovwdxYCJpA` |

### Tag

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Tag | POST | `/tag` | `conn_mod_def::GLEwaROjZBg::EPoe_9EaRd2-Mqb435Hivg` |
| Update a Tag | PUT | `/tag/{{tagId}}` | `conn_mod_def::GLEwaktb2hA::7qg8dCKgQmaVWWh0dKHcQQ` |

### Group

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Group | PUT | `/third_party/api/group` | `conn_mod_def::GLEwZse8oRA::CYCpQjWfTYOORi5rosuDUQ` |
| Delete Group | DELETE | `/third_party/api/group` | `conn_mod_def::GLEwZshifgA::CaUvxadSQjmsNBRPGI_sXw` |

### TagList

| Action | Method | Path | Action id |
|---|---|---|---|
| Create New Tag List | POST | `/third_party/api/tag_list` | `conn_mod_def::GLEwaQQ3QXA::d9zsSGFeRm6Eu6VFbao7sw` |
| Update a Tag List | PUT | `/tag_list/{{tagListId}}` | `conn_mod_def::GLEwamRq87A::Yykg1SrkRKOXgjcDPBEZbA` |

### AttendanceDayTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attendance Day Types for a Team | GET | `/third_party/api/attendance/day_type` | `conn_mod_def::GLEwY_GbBsg::BfumaXMLRJWRcCnLDqoHag` |
| Retrieve Attendance Day Types | GET | `/third_party/api/attendance/day_types` | `conn_mod_def::GLEwY9nip3A::P3jAk07IRgS2xRJ2JJe5tQ` |

### TaskBillingRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task's Billing Rate | GET | `/task/{{taskId}}/rate` | `conn_mod_def::GLEwZHXYkpg::p3Xo-sOrR2OGA_sUdOg9Og` |
| Update/Create Billing Rate for a Task | POST | `/task/{{taskId}}/rate` | `conn_mod_def::GLEwZX-0leA::aD-rpe8DT9SYdgKfaz2ZYw` |

### BillingRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Update/Create Billing Rate for a Task User | POST | `/task/{{taskId}}/user/{{userId}}/rate` | `conn_mod_def::GLEwZH6Dz5g::zJ4Apm5GS9-2W_789h6f3Q` |
| Update/Create Billing Rate for a User | POST | `/user/{{userId}}/rate` | `conn_mod_def::GLEwZXEvg5A::YoqI14weQrKq4_nd6jGMIA` |

### GroupUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Users in a Group | GET | `/group/{{groupId}}/user` | `conn_mod_def::GLEwZ_jCTqg::Ai2akHNFSpSsw43ND-egwA` |
| Delete a User From a Group | DELETE | `/group/{{groupId}}/user` | `conn_mod_def::GLEwZ2cKlMA::wk5lpkGDRhu6MPmGGBb7Gg` |

### GroupSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Setting | GET | `/group/{{groupId}}/setting` | `conn_mod_def::GLEwZ_8ddXA::nZTtV5kKQ7y9j2_Uu2fSXQ` |
| Update a Group Setting | PUT | `/group/{{groupId}}/setting` | `conn_mod_def::GLEwaADOs5g::A4SDS4l7ReyhZ7SpTV5UhA` |

### TimeTrackingRole

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Time Tracking Role | POST | `/third_party/api/tt_role` | `conn_mod_def::GLEwaIjjDRA::lkNbjvSwTkez3uN9jZrUKQ` |

1 more TimeTrackingRole actions are available through search.

This lists 90 of 144 actions. For anything not here, call `search_one_platform_actions` with platform `time-camp`. The full catalog is at https://www.withone.ai/knowledge/time-camp.

## When a call fails

The error comes from TimeCamp, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/time-camp

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
