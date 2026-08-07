---
name: nozbe
description: Nozbe is a task and team collaboration platform that enables individuals and small teams to organize projects, assign work, manage recurring tasks, and coordinate workflows across devices, allowing users to improve productivity through structured task management and shared project visibility. Read and write Nozbe data through One: comments, tasks, projects, projectgroups, taskrecurrences, projectaccesses and more, 81 actions with real parameter documentation. Use whenever the user asks to look something up in Nozbe, create or update a record there, or build code against the Nozbe API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nozbe
  generated-from: one-knowledge-base
---

# Nozbe through One

Nozbe is a task and team collaboration platform that enables individuals and small teams to organize projects, assign work, manage recurring tasks, and coordinate workflows across devices, allowing users to improve productivity through structured task management and shared project visibility.

One exposes Nozbe through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nozbe` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Nozbe is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Nozbe account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachment Content for a Comment | GET | `/v1/api/comments/{{commentId}}/attachments/{{fileId}}/content` | `conn_mod_def::GMIf7itHX2g::qt-oIUo5RFqrvBpYh7sdhg` |
| Get Attachment Metadata by ID for a Comment | GET | `/v1/api/comments/{{commentId}}/attachments/{{fileId}}` | `conn_mod_def::GMIf7ldyfIA::IVfpgPxNQsWMz1ckxlXadQ` |
| Get Comment by ID | GET | `/v1/api/comments/{{id}}` | `conn_mod_def::GMIf77DEJLg::QwlrA7-mS2-wbuBd2In7yg` |
| Get Comments | GET | `/v1/api/comments` | `conn_mod_def::GMIf7yPI9Pg::1V7ysS5aQmKgu_vySqpFzw` |
| Add a Comment | POST | `/v1/api/comments` | `conn_mod_def::GMIf7y3NiDg::f0uOC4QfQxeEI7l-rsvUPA` |
| Add Attachment Metadata to a Comment | POST | `/v1/api/comments/{{commentId}}/attachments` | `conn_mod_def::GMIf7irqKCA::BCTMjOIETp-uos3kY_4mAQ` |
| Attachment With Content for a Comment | POST | `/v1/api/comments/{{commentId}}/attachment_with_content` | `conn_mod_def::GMIf7r0fP8g::oRlmxS9NTwmqqQTdObNNYw` |
| Delete a Comment | DELETE | `/v1/api/comments/{{id}}` | `conn_mod_def::GMIf7yG8e1g::tLKO_C6SR4mjLQEVjVrM3g` |
| Delete Attachment for a Comment | DELETE | `/v1/api/comments/{{commentId}}/attachments/{{fileId}}` | `conn_mod_def::GMIf7h8VNfg::1jZ3CC03RxS9la5TxGOD-g` |
| Update a Comment | PUT | `/v1/api/comments/{{id}}` | `conn_mod_def::GMIf759i6NA::_5B3klGWSK-BiaBYiBSlLA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get New Tasks Since Last Call | GET | `/v1/api/poll/tasks/new` | `conn_mod_def::GMIf8GTnrtg::n0zn2gu6SK-mTa9uMv6ODQ` |
| Get Task by ID | GET | `/v1/api/tasks/{{id}}` | `conn_mod_def::GMIf9OKL1ZA::00HqOb47ROynqzGDrXqhyA` |
| Get Tasks | GET | `/v1/api/tasks` | `conn_mod_def::GMIf9Nx4-pg::HLSiKp2eTG65s6tcWM1ayQ` |
| Updated Tasks Poll | GET | `/v1/api/poll/tasks/updated` | `conn_mod_def::GMIf8HPdOiA::Yb2x4pGiQIaXyCsFWVPf5w` |
| Add a Task | POST | `/v1/api/tasks` | `conn_mod_def::GMIf9GfaaRA::OXtgBaYoRdmyEc8-g3Y4mw` |
| Delete a Task | DELETE | `/v1/api/tasks/{{id}}` | `conn_mod_def::GMIf9F2VE7A::fFPmi5W4T-OVTIoiInS7AA` |
| Update a Task | PUT | `/v1/api/tasks/{{id}}` | `conn_mod_def::GMIf9RMZiXg::yckxNfxnRuuS_sT_jI-_RA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project by ID | GET | `/v1/api/projects/{{id}}` | `conn_mod_def::GMIf8qgrK_A::oW6RzAudSPGZDSpQIPzVLQ` |
| Get Projects | GET | `/v1/api/projects` | `conn_mod_def::GMIf8pSfNFA::D8AfEqwfSXO39xnX9-bJLw` |
| Add a Project | POST | `/v1/api/projects` | `conn_mod_def::GMIf8hiyE4A::xq5I90bfTDeWWkr2fQww2w` |
| Add a Project from Template | POST | `/v1/api/projects/from_template/{{id}}` | `conn_mod_def::GMIf8oe5_vA::tqeljBLESt21JFJx2pJTZg` |
| Delete a Project | DELETE | `/v1/api/projects/{{id}}` | `conn_mod_def::GMIf8o3NanA::ubqP0rvBTaWlkY9h27SKsA` |
| Update a Project | PUT | `/v1/api/projects/{{id}}` | `conn_mod_def::GMIf8qZfImg::pKrYd5MhRtOWTasM422SrA` |

### ProjectGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Group by ID | GET | `/v1/api/project_groups/{{id}}` | `conn_mod_def::GMIf8WIIfqg::yu1hYiFYSYOC3fB2R6pp1g` |
| Get Project Groups | GET | `/v1/api/project_groups` | `conn_mod_def::GMIf8aJe3Lg::jSZ3RbZ6S0adZ7BBh0TdYA` |
| Add a Project Group | POST | `/v1/api/project_groups` | `conn_mod_def::GMIf8N0CFPg::DaY97j1EQv-Gt-x0G77p8Q` |
| Delete a Project Group | DELETE | `/v1/api/project_groups/{{id}}` | `conn_mod_def::GMIf8WKzj6A::w2Cn_eO2SIOtaEtVaui6HA` |
| Update a Project Group by ID | PUT | `/v1/api/project_groups/{{id}}` | `conn_mod_def::GMIf8WJqQgA::MYEoIwr9RX6neQ19IBTzDg` |

### TaskRecurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accessible Task Recurrences | GET | `/v1/api/task_recurrences` | `conn_mod_def::GMIf9GfhrHA::-vzXC9qtTjKW6aMGIY2Atw` |
| Get Task Recurrence by ID | GET | `/v1/api/task_recurrences/{{id}}` | `conn_mod_def::GMIf9HnC-YA::_qviGPvcQhyCe4bTRyUm_Q` |
| Add a Task Recurrence | POST | `/v1/api/task_recurrences` | `conn_mod_def::GMIf8_F_iVg::2g2ix_VxQpeKUtH--1hScg` |
| Delete Task Recurrence | DELETE | `/v1/api/task_recurrences/{{id}}` | `conn_mod_def::GMIf9HodgUg::bj0DDoLRS9KQB2CGSW4Qvw` |
| Update Task Recurrence by ID | PUT | `/v1/api/task_recurrences/{{id}}` | `conn_mod_def::GMIf9NXRdQg::50T8utUdSYWSoriO7JH1xg` |

### ProjectAccesses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accessible Project Accesses | GET | `/v1/api/project_accesses` | `conn_mod_def::GMIf8OYfcNA::fIoe6MssSnyk1bI_jCfA7Q` |
| Get Project Access by ID | GET | `/v1/api/project_accesses/{{id}}` | `conn_mod_def::GMIf8P_EhPg::HJEtz3cAQJ6xpnGCfrEiNA` |
| Add Project Access | POST | `/v1/api/project_accesses` | `conn_mod_def::GMIf8GTbpNA::XgjV9Vd8QTGEt5aXq9s_VA` |
| Delete Project Access | DELETE | `/v1/api/project_accesses/{{id}}` | `conn_mod_def::GMIf8O6k-Xg::v7fHwRI-Qg2Mp-mNzE6GUg` |
| Update a Project Access | PUT | `/v1/api/project_accesses/{{id}}` | `conn_mod_def::GMIf8N3D4kA::G4Ba6Bz_T_Scp0YSW4uSTA` |

### ProjectSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Section by ID | GET | `/v1/api/project_sections/{{id}}` | `conn_mod_def::GMIf8iPg6jg::S23GS1ECTX-Yussojnerkg` |
| Get Accessible Project Sections | GET | `/v1/api/project_sections` | `conn_mod_def::GMIf8gONrUg::Y910YWAvS_ef7nLeRR3YEg` |
| Add a Project Section | POST | `/v1/api/project_sections` | `conn_mod_def::GMIf8WA6qDA::Bu7Gd2OnTVu_z0GUgebHjg` |
| Delete a Project Section | DELETE | `/v1/api/project_sections/{{id}}` | `conn_mod_def::GMIf8hid0-g::njEAfwGoSD-8A3D4-oOZLA` |
| Update a Project Section by ID | PUT | `/v1/api/project_sections/{{id}}` | `conn_mod_def::GMIf8gISNMA::q4695f1RRhyBxWdo_fED0A` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Member by ID | GET | `/v1/api/team_members/{{id}}` | `conn_mod_def::GMIf9z27rpg::fV3BlV2VTXCuFqgqIoGbQQ` |
| Get Team Members | GET | `/v1/api/team_members` | `conn_mod_def::GMIf9XZgCsA::f1cx29AfQFmOzkH9-f10DA` |
| Add Team Member | POST | `/v1/api/team_members` | `conn_mod_def::GMIf9NVRBiA::ZhbS1faaRjyL0_H_KbTL3Q` |
| Delete a Team Member | DELETE | `/v1/api/team_members/{{id}}` | `conn_mod_def::GMIf9Xnnf-g::WN-7pZGOQ965bVf28T46Cw` |
| Update a Team Member by ID | PUT | `/v1/api/team_members/{{id}}` | `conn_mod_def::GMIf9X5Ey0A::tY5Q2oXDRYuof7BLVHSjHA` |

### Reminders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reminder by ID | GET | `/v1/api/reminders/{{id}}` | `conn_mod_def::GMIf8xvS5hA::vFJUCbxSTXCE-gGtjm3c_A` |
| Get Reminders | GET | `/v1/api/reminders` | `conn_mod_def::GMIf8x3dY-A::v_42FVYSSZ6hx-23R1twbQ` |
| Add a Reminder | POST | `/v1/api/reminders` | `conn_mod_def::GMIf8wP6jyA::9x2l7_5fRW-pyHpCjm8-hg` |
| Delete a Reminder | DELETE | `/v1/api/reminders/{{id}}` | `conn_mod_def::GMIf8x-WN3A::xXi2K32XR_-KQglICFfPJw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accessible Tags | GET | `/v1/api/tags` | `conn_mod_def::GMIf84TpC0g::C7Xcbs8vQQ2aiT543azz0Q` |
| Get Tag by ID | GET | `/v1/api/tags/{{id}}` | `conn_mod_def::GMIf8_FHkTg::oLG2EPPRRjq1l4wuBCiVMg` |
| Add a Tag | POST | `/v1/api/tags` | `conn_mod_def::GMIf83ptwWg::fwCgcnY4RwCfP4yMxf2uwg` |
| Update a Tag | PUT | `/v1/api/tags/{{id}}` | `conn_mod_def::GMIf8-YQZbA::NdVMQAvKS5SKukhnot8pjA` |

### TagAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tag Assignment by ID | GET | `/v1/api/tag_assignments/{{id}}` | `conn_mod_def::GMIf84PdRIA::wiz8W5ChQ8GHnLO61uCBqA` |
| Get Tag Assignments | GET | `/v1/api/tag_assignments` | `conn_mod_def::GMIf84p3DnA::m2l_sRUpS12uesF-WFM83A` |
| Add a Tag Assignment | POST | `/v1/api/tag_assignments` | `conn_mod_def::GMIf8v5qB3A::tblKRmvTQlmeCDvxXJ_ecQ` |
| Delete a Tag Assignment | DELETE | `/v1/api/tag_assignments/{{id}}` | `conn_mod_def::GMIf84homQA::nfzXEhBfTXiwv56t1GVJxA` |

### GroupAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Group Assignment by ID | GET | `/v1/api/group_assignments/{{id}}` | `conn_mod_def::GMIf8FrDuHA::TFIxgAvITlaxbQGy5rrJxw` |
| Get Group Assignments | GET | `/v1/api/group_assignments` | `conn_mod_def::GMIf7-n-Sjg::i6MruWcISdmbVVllOC8I2Q` |
| Add a Group Assignment | POST | `/v1/api/group_assignments` | `conn_mod_def::GMIf7_5HZ7g::SXjcls3sS3ydOoAanOlrkw` |
| Delete a Group Assignment | DELETE | `/v1/api/group_assignments/{{id}}` | `conn_mod_def::GMIf7-Gop0g::xHcYYbB-QR-giOn3_C6jeA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User by ID | GET | `/v1/api/users/{{id}}` | `conn_mod_def::GMIf97y9rKA::EeQKJ9GdT8-Rr-4hvJPS6g` |
| List Accessible Users | GET | `/v1/api/users` | `conn_mod_def::GMIf96c51NA::aG11NBN4RZWAGgT_OtLfJw` |
| Add a User | POST | `/v1/api/users` | `conn_mod_def::GMIf96iMWPg::4HN58HDRSP66IXEt7Nrfqw` |
| Update a User | PUT | `/v1/api/users/{{id}}` | `conn_mod_def::GMIf-Cr-c5g::BLKPWPa3RgSHF2r9V7Jbdg` |

### BusinessMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business Member by ID | GET | `/v1/api/business_members/{{id}}` | `conn_mod_def::GMIf7rbheIg::q3x9xcGZQki-zVJrIF8BzA` |
| Get Accessible Business Members | GET | `/v1/api/business_members` | `conn_mod_def::GMIf7sMp3WA::jYALE4mFSw-5IQLOdButtQ` |
| Update a Business Member | PUT | `/v1/api/business_members/{{id}}` | `conn_mod_def::GMIf7q55KFg::WHDUZP6PR5STB0_rMn2NhA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team by ID | GET | `/v1/api/teams/{{id}}` | `conn_mod_def::GMIf96F9DQA::Sa8g8vmSS6uiIDZz7TRCgw` |
| Get Teams | GET | `/v1/api/teams` | `conn_mod_def::GMIf9XLkgGA::F14qErqcSgqYuaRFaQ5fFQ` |
| Update a Team by ID | PUT | `/v1/api/teams/{{id}}` | `conn_mod_def::GMIf98ll-EA::CpZoAl_ySZWoKE2tJ-0SaQ` |

### TaskEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accessible Task Events | GET | `/v1/api/task_events` | `conn_mod_def::GMIf9AIiDQg::L2JAvF-FRBGX95iWYgN2gw` |
| Get Task Event by ID | GET | `/v1/api/task_events/{{id}}` | `conn_mod_def::GMIf8-nFCUA::ucD9IZlrSA2UyPLcydrEVQ` |

### Businesses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business by ID | GET | `/v1/api/businesses/{{id}}` | `conn_mod_def::GMIf70KGzKg::_I0tRgtRTnC4SvXrMfnKRQ` |
| Get Accessible Businesses | GET | `/v1/api/businesses` | `conn_mod_def::GMIf7ziBCLg::w0KbeF9NQUKxDO_WakuySg` |

### CsvRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload CSV Records in Batch | POST | `/v1/api/csv` | `conn_mod_def::GMIf8GKT_sA::a1O1n1N-R7iN5FAgLbUebw` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachments for a Comment | GET | `/v1/api/comments/{{commentId}}/attachments` | `conn_mod_def::GMIf7idasDA::IfNgMbYfSp-Gknmh3xlo0A` |

### CommentAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Attachment Content for a Comment | POST | `/v1/api/comments/{{commentId}}/attachments/{{fileId}}/content` | `conn_mod_def::GMIf7r3WSyg::ZJ2nJ1FdTT-AsBr7gw-rGw` |

## When a call fails

The error comes from Nozbe, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nozbe

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
