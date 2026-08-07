---
name: asana
description: Asana is a scalable work management platform that helps teams organize projects, set company-wide goals, automate workflows, and track progress in real time—all within a single, integrated workspace. Read and write Asana data through One: tasks, projects, goals, portfolios, tags, sections and more, 223 actions with real parameter documentation. Use whenever the user asks to look something up in Asana, create or update a record there, or build code against the Asana API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: asana
  generated-from: one-knowledge-base
---

# Asana through One

Asana is a scalable work management platform that helps teams organize projects, set company-wide goals, automate workflows, and track progress in real time—all within a single, integrated workspace.

One exposes Asana through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `asana` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Asana is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Asana account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/tasks/{{taskGid}}` | `conn_mod_def::GJ0Bj8Jm9nY::lSCoFwHZQRqoecS5VnEKqg` |
| Get a Task’s Dependencies | GET | `/tasks/{{taskGid}}/dependencies` | `conn_mod_def::GJ0BkMvbOrs::ED60gVbcQVC0AWrNyDaJnw` |
| Get a Task’s Subtasks | GET | `/tasks/{{taskGid}}/subtasks` | `conn_mod_def::GJ0BksZRxl0::xYJYqDjwQG6Xqct-V3_5ZQ` |
| Get a Workspace Task by Custom ID | GET | `/workspaces/{{workspaceGid}}/tasks/custom_id/{{customId}}` | `conn_mod_def::GJ0BkDzQ42U::jHUkZ1gOQb23LQpec6Sywg` |
| Get Multiple Tasks | GET | `/tasks` | `conn_mod_def::GJ0BkiBD6NE::VvBsHRfETZKCr5On77ZGuw` |
| Get Tasks for a Tag | GET | `/tags/{{tagGid}}/tasks` | `conn_mod_def::GJ0BlOdq6Xk::ZimKB8opRwi3METk6lilxQ` |
| List a Project’s Tasks | GET | `/projects/{{projectGid}}/tasks` | `conn_mod_def::GJ0Bk2jM_T0::FjnidkW2RUaBsB5eoIK9Sw` |
| List a Task’s Dependents | GET | `/tasks/{{taskGid}}/dependents` | `conn_mod_def::GJ0BkYVKn_8::2ka0h_RkRnq0lgaTIbtyGg` |
| List Tasks from a User Task List | GET | `/user_task_lists/{{userTaskListGid}}/tasks` | `conn_mod_def::GJ0BlYd3qEw::ZUbuJFurShGpO8S1YpZWiQ` |
| List Tasks in a Section | GET | `/sections/{{sectionGid}}/tasks` | `conn_mod_def::GJ0BlEGAHhQ::DW8K4KmnTNqhHA_yDZGVsw` |
| Search Tasks in a Workspace | GET | `/workspaces/{{workspaceGid}}/tasks/search` | `conn_mod_def::GJ0BmJsc69Q::2k2XfYayTCahfyAcdAYtYA` |
| Add a Project to a Task | POST | `/tasks/{{taskGid}}/addProject` | `conn_mod_def::GJ0Bi1o6GZk::R8fHKPrpTnOl6Z7whAxLfA` |

15 more Tasks actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/projects/{{projectGid}}` | `conn_mod_def::GJ0Bbp6LXZs::TytZnH0xR4y1CCJSrPMlTg` |
| Get Multiple Projects | GET | `/projects` | `conn_mod_def::GJ0BcJU4GoM::cE4wzSMhQV6iBw5PIkKBKQ` |
| List a Team's Projects (Deprecated) | GET | `/teams/{{teamGid}}/projects` | `conn_mod_def::GJ0Bbz1Ch6U::uJoBD2pwRD2PPtlr1fvGUg` |
| List a Workspace’s Projects | GET | `/workspaces/{{workspaceGid}}/projects` | `conn_mod_def::GJ0Bb_MiVAY::r2482efsRkiTR1AlOExsdw` |
| Add Followers to a Project | POST | `/projects/{{projectGid}}/addFollowers` | `conn_mod_def::GJ0BacWEsF8::BdPFJnuJQ0mZ0CGuV6fi_Q` |
| Add Members to a Project | POST | `/projects/{{projectGid}}/addMembers` | `conn_mod_def::GJ0BalV0-Qs::rb45cO0zRQK-thcoud_uYA` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJ0Bawb3mf4::pqp2OSmlQGeWkjw2bInUnw` |
| Create a Project in a Team | POST | `/teams/{{teamGid}}/projects` | `conn_mod_def::GJ0Ba47kxjg::Q-Uf8KOgTwaPrSsZBdT1tQ` |
| Create a Project in a Workspace | POST | `/workspaces/{{workspaceGid}}/projects` | `conn_mod_def::GJ0BbH6A9iI::_15BH-fgTa2YnAuLMPUtww` |
| Create a Project Template from a Project | POST | `/projects/{{projectGid}}/saveAsTemplate` | `conn_mod_def::GJ0BbQhWQ9k::SvlkpDqOS7KrVWct-Ajtew` |
| Delete a Project | DELETE | `/projects/{{projectGid}}` | `conn_mod_def::GJ0BbYg3A_8::3wYv9ycTTEq32IE6h8tANg` |
| Duplicate a Project | POST | `/projects/{{projectGid}}/duplicate` | `conn_mod_def::GJ0BbhCINN4::pl8RXfJpQWGliIhFLW97zQ` |

4 more Projects actions are available through search.

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Goal | GET | `/goals/{{goalGid}}` | `conn_mod_def::GJ0BTTH4jVY::Cap-BL5wQlKR6M6plpnBkg` |
| Get a Goal’s Parent Goals | GET | `/goals/{{goalGid}}/parentGoals` | `conn_mod_def::GJ0BTpfRsj0::0qErheKzT1G1S7CdmvzdqA` |
| List Goals | GET | `/goals` | `conn_mod_def::GJ0BTeMI5Ec::jHt9d1T_S_SJ1WZH5pXBNg` |
| Add a Custom Field to a Goal | POST | `/goals/{{goalGid}}/addCustomFieldSetting` | `conn_mod_def::GJ0BSti122w::ELH5uSf-QTeR1PVcPHsBhA` |
| Add a Supporting Relationship to a Goal | POST | `/goals/{{goalGid}}/addSupportingRelationship` | `conn_mod_def::GJ0BRvPHxRE::oiWW2jIyTM-VfRLGdy9Dbw` |
| Add Followers to a Goal (Add Collaborators) | POST | `/goals/{{goalGid}}/addFollowers` | `conn_mod_def::GJ0BSkjdSRs::w5-jg5M1RjipPwSWRWCJ0A` |
| Create a Goal | POST | `/goals` | `conn_mod_def::GJ0BS3Fa6rs::DOZyF8ZdQNWWE_pEzAQn8A` |
| Create a Goal’s Metric | POST | `/goals/{{goalGid}}/setMetric` | `conn_mod_def::GJ0BTCU0pIE::W9UCte7iQ_23C4qqRWuCug` |
| Delete a Goal | DELETE | `/goals/{{goalGid}}` | `conn_mod_def::GJ0BTJqcuFE::lotPtg7SThG56Zee24Ullw` |
| Remove a Custom Field Setting from a Goal | POST | `/goals/{{goalGid}}/removeCustomFieldSetting` | `conn_mod_def::GJ0BT9Cb2Ig::sb7pQXK1Qb2e--rmeR6NfQ` |
| Remove a Goal’s Supporting Relationship | POST | `/goals/{{goalGid}}/removeSupportingRelationship` | `conn_mod_def::GJ0BSR9rOyE::Z2-74I0yR8yWqsutqHZ7dQ` |
| Remove Followers from a Goal | POST | `/goals/{{goalGid}}/removeFollowers` | `conn_mod_def::GJ0BTywEDw0::9XWLKKTsReiYI6UA1S8HYQ` |

2 more Goals actions are available through search.

### Portfolios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Portfolio | GET | `/portfolios/{{portfolioGid}}` | `conn_mod_def::GJ0BXByyxxg::PfBSHeYFRCqs1ipKoxErNw` |
| Get Multiple Portfolios | GET | `/portfolios` | `conn_mod_def::GJ0BXLAuCgI::A97JdrjOT9mOjeuxeqp9zQ` |
| Add a Custom Field to a Portfolio | POST | `/portfolios/{{portfolioGid}}/addCustomFieldSetting` | `conn_mod_def::GJ0BWGWk_-0::L0dmHxl1St-FVIE1aGFbpw` |
| Add an Item to a Portfolio | POST | `/portfolios/{{portfolioGid}}/addItem` | `conn_mod_def::GJ0BWOwnEfI::RZrm3Q5hR_W3pYEio-cFeQ` |
| Add Members to a Portfolio | POST | `/portfolios/{{portfolioGid}}/addMembers` | `conn_mod_def::GJ0BWa9uQbg::FNaKbMlJR4q8hbheQWBtdw` |
| Create a Portfolio | POST | `/portfolios` | `conn_mod_def::GJ0BWlW9rcE::tQMd38PhTZekHs7XS5DCyw` |
| Delete a Portfolio | DELETE | `/portfolios/{{portfolioGid}}` | `conn_mod_def::GJ0BWwFW7go::ExSgr3cdSxCXJ38HPaELhw` |
| Duplicate a Portfolio | POST | `/portfolios/{{portfolioGid}}/duplicate` | `conn_mod_def::GJ0BW4qMYtI::mRLgTOv6R8KatgvGtx_QWw` |
| Remove a Custom Field Setting from a Portfolio | POST | `/portfolios/{{portfolioGid}}/removeCustomFieldSetting` | `conn_mod_def::GJ0BXgamYJY::O-R0kwOjT-WWXkLDDI0ayA` |
| Remove an Item from a Portfolio | POST | `/portfolios/{{portfolioGid}}/removeItem` | `conn_mod_def::GJ0BXourizY::Rd8OB0cmSDyk3nBnAiYQ9w` |
| Remove Members from a Portfolio | POST | `/portfolios/{{portfolioGid}}/removeMembers` | `conn_mod_def::GJ0BXx8Bpm0::6newUqa6S36jean-GgiKLw` |
| Update a Portfolio | PUT | `/portfolios/{{portfolioGid}}` | `conn_mod_def::GJ0BX6wLkoI::6ulYi3_ERceq_VGMx4YvXQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag | GET | `/tags/{{tagGid}}` | `conn_mod_def::GJ0BhhSzjOs::q53K3UqWQuWwzASk4S1qGg` |
| List a Workspace’s Tags | GET | `/workspaces/{{workspaceGid}}/tags` | `conn_mod_def::GJ0Bh-6CrLI::kpvUbohVRKeXEI_RGbDowQ` |
| List Tags | GET | `/tags` | `conn_mod_def::GJ0Bh1wZbAc::09YUt8KxR-GzXbyWJUF1ig` |
| Create a Tag | POST | `/tags` | `conn_mod_def::GJ0BhI7m4ks::tnb8Q0iDTuyCSLB7yFTIXA` |
| Create a Tag in a Workspace | POST | `/workspaces/{{workspaceGid}}/tags` | `conn_mod_def::GJ0BhRPm2Mw::pUTHPrufTcuFHjFtJNemBg` |
| Delete a Tag | DELETE | `/tags/{{tagGid}}` | `conn_mod_def::GJ0BhY75VdI::-SNH9L0hSxmCAcuwpVpQkg` |
| Update a Tag | PUT | `/tags/{{tagGid}}` | `conn_mod_def::GJ0BiHQlIKY::VyjF3v0vR9Klio5Qd0mnWg` |

### Sections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Section | GET | `/sections/{{sectionGid}}` | `conn_mod_def::GJ0BfU7RVNo::6Otp7SMWR6u9CX-Cb910Wg` |
| List a Project’s Sections | GET | `/projects/{{projectGid}}/sections` | `conn_mod_def::GJ0BfdNv3oE::feeoEKgURuKMZZmxue2DKg` |
| Add a Task to a Section | POST | `/sections/{{sectionGid}}/addTask` | `conn_mod_def::GJ0Be7uRrrE::WDFMGLjJT1ae4k1iHhqsZg` |
| Create a Section in a Project | POST | `/projects/{{projectGid}}/sections` | `conn_mod_def::GJ0BfEFfym8::raAyuUYGRHSpshZqnwy5vw` |
| Delete a Section | DELETE | `/sections/{{sectionGid}}` | `conn_mod_def::GJ0BfL2qYLA::n2lidaG7TXqyVAXaksNVNw` |
| Update a Section | PUT | `/sections/{{sectionGid}}` | `conn_mod_def::GJ0Bfvfu7rc::izsPynwASzahUlbdKlyzUg` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/teams/{{teamGid}}` | `conn_mod_def::GJ0BoIIAt3Q::X4bMYlqzQA-3aQYARx_kBg` |
| List a User’s Teams (in an Organization) | GET | `/users/{{userGid}}/teams` | `conn_mod_def::GJ0BoUWFuqY::UI9uYq5oSsSxpurPK3-KrA` |
| List a Workspace’s Teams | GET | `/workspaces/{{workspaceGid}}/teams` | `conn_mod_def::GJ0BofA9pv0::kHA2ry4FTbSluZ9DVoCFZw` |
| Create a Team (in the Current Workspace) | POST | `/teams` | `conn_mod_def::GJ0BoAvrTZQ::9ej_owr1R4Os4R-Wse27Wg` |
| Remove a User from a Team | POST | `/teams/{{teamGid}}/removeUser` | `conn_mod_def::GJ0BopG5WJc::w_XwbZkGRya5w9g9LJ3hiA` |
| Update a Team | PUT | `/teams/{{teamGid}}` | `conn_mod_def::GJ0BowcHYvM::GQoeILhfTmeGbtpGcEEaaQ` |

### TimeTrackingEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Tracking Entry | GET | `/time_tracking_entries/{{timeTrackingEntryGid}}` | `conn_mod_def::GJ0BpfqWnI8::6_sef_mjSFCP2rK8TOhdeg` |
| List a Task’s Time Tracking Entries | GET | `/tasks/{{taskGid}}/time_tracking_entries` | `conn_mod_def::GJ0Bpy9bVog::FvB7WTcxTkGwy47keSvkSQ` |
| List Time Tracking Entries | GET | `/time_tracking_entries` | `conn_mod_def::GJ0BppQfMz8::AjTFbXeYS_KQcCtTnpdyzw` |
| Create a Task Time Tracking Entry | POST | `/tasks/{{taskGid}}/time_tracking_entries` | `conn_mod_def::GJ0BpPW7tVc::S11Ly1QNSemkGqyicmXXmw` |
| Delete a Time Tracking Entry | DELETE | `/time_tracking_entries/{{timeTrackingEntryGid}}` | `conn_mod_def::GJ0BpXVt0Ds::UzKbEZIiR5OyWnYcwOfO6A` |
| Update a Time Tracking Entry | PUT | `/time_tracking_entries/{{timeTrackingEntryGid}}` | `conn_mod_def::GJ0Bp7v6G18::EGaomUXHTOi4wEFU30g8Gg` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace | GET | `/workspaces/{{workspaceGid}}` | `conn_mod_def::GJ0BtNgnouc::VeYGWfETTW-7NPFbs0ERTg` |
| Get Multiple Workspaces | GET | `/workspaces` | `conn_mod_def::GJ0BtYv5vEg::Sv3n2N6ZTdyklkCptl6J9w` |
| Get Workspace Objects via Typeahead | GET | `/workspaces/{{workspaceGid}}/typeahead` | `conn_mod_def::GJ0BqGdnFVE::vpKczgEtSein4manwlzE9g` |
| Add a User to a Workspace or Organization | POST | `/workspaces/{{workspaceGid}}/addUser` | `conn_mod_def::GJ0BtFiBNqA::sK5OeJ8XSmK4iWZVH8piRA` |
| Remove a User from a Workspace or Organization | POST | `/workspaces/{{workspaceGid}}/removeUser` | `conn_mod_def::GJ0Btro6xSk::74TSkZiiQamqtfukS_jbsw` |
| Update a Workspace | PUT | `/workspaces/{{workspaceGid}}` | `conn_mod_def::GJ0Bt17XJmQ::NGI_KgM-SDagTDOLol52zQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{userGid}}` | `conn_mod_def::GJ0BqmMOIZI::iAXWLzlHSQabyQC_AsY0ig` |
| Get a User in a Workspace or Organization | GET | `/workspaces/{{workspaceGid}}/users/{{userGid}}` | `conn_mod_def::GJ0Bqv9bmow::41O63JzWQdS6lzSBoePVkw` |
| List Users (Across Accessible Workspaces/Organizations) | GET | `/users` | `conn_mod_def::GJ0BrGENMrU::yRZStg70SLu48Hs4hmWI1Q` |
| List Users in a Workspace or Organization | GET | `/workspaces/{{workspaceGid}}/users` | `conn_mod_def::GJ0Brcj0ZZ8::x5RX-m5lQnCFrWkX8VAh4g` |
| Update a User | PUT | `/users/{{userGid}}` | `conn_mod_def::GJ0BrlK3J6Q::l5sEFIZsTa-j_QdnGoc_3w` |
| Update a User in a Workspace or Organization | PUT | `/workspaces/{{workspaceGid}}/users/{{userGid}}` | `conn_mod_def::GJ0BruDsC6s::iJkWhqahQBil3HORvwXrWA` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field | GET | `/custom_fields/{{customFieldGid}}` | `conn_mod_def::GJ0BQNUxZvo::mrr__O0uSCe-Dj16_JTmOg` |
| Get a Workspace’s Custom Fields | GET | `/workspaces/{{workspaceGid}}/custom_fields` | `conn_mod_def::GJ0BQY_pJOY::at8cHuSOQxKQrNWTODJ8gA` |
| Create a Custom Field (in a Workspace) | POST | `/custom_fields` | `conn_mod_def::GJ0BPx7ZLHk::eFLVc0WuTKqnkAK7O0MP4g` |
| Delete a Custom Field | DELETE | `/custom_fields/{{customFieldGid}}` | `conn_mod_def::GJ0BQDneuUY::vThd-8aeQu-jPv_-EK4-aw` |
| Reorder a Custom Field’s Enum Options | POST | `/custom_fields/{{customFieldGid}}/enum_options/insert` | `conn_mod_def::GJ0BQkHR6vA::DKZ84rA_Qe64GnwmvD9nRg` |

1 more CustomFields actions are available through search.

This lists 90 of 223 actions. For anything not here, call `search_one_platform_actions` with platform `asana`. The full catalog is at https://www.withone.ai/knowledge/asana.

## When a call fails

The error comes from Asana, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/asana

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
