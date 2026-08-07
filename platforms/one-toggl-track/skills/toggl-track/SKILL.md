---
name: toggl-track
description: Toggl Track is a time-tracking and reporting platform that enables teams and individuals to capture work hours, analyze time usage, and integrate tracking data with project management, payroll, and productivity tools for planning, billing, and operational visibility. Read and write Toggl Track data through One: clients, organizations, projectusers, workspaceusers, workspaces, timeentries and more, 274 actions with real parameter documentation. Use whenever the user asks to look something up in Toggl Track, create or update a record there, or build code against the Toggl Track API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: toggl-track
  generated-from: one-knowledge-base
---

# Toggl Track through One

Toggl Track is a time-tracking and reporting platform that enables teams and individuals to capture work hours, analyze time usage, and integrate tracking data with project management, payroll, and productivity tools for planning, billing, and operational visibility.

One exposes Toggl Track through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `toggl-track` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Toggl Track is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Toggl Track account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Clients | GET | `/api/v9/workspaces/{{workspaceId}}/clients` | `conn_mod_def::GLEt9I3ruvg::O7yjYRyQRDKmqof3iG230g` |
| List My Clients | GET | `/api/v9/me/clients` | `conn_mod_def::GLEt_NxpZgA::Ex4YEvIeQRiIM_qFliLq9w` |
| Load a Workspace Client by ID | GET | `/api/v9/workspaces/{{workspaceId}}/clients/{{clientId}}` | `conn_mod_def::GLEt9TamzHg::XDCOJR5AQ2Kxqfa-VT-Rig` |
| Archive a Workspace Client | POST | `/api/v9/workspaces/{{workspaceId}}/clients/{{clientId}}/archive` | `conn_mod_def::GLEt8_x89Ng::oJw7MVBJTLac7GLV-s-aTw` |
| Archive Clients in Bulk for a Workspace | POST | `/api/v9/workspaces/{{workspaceId}}/clients/archive` | `conn_mod_def::GLEt9AS7J8g::wk09nv60Rt6pTEZHv-NIuA` |
| Change a Workspace Client | PUT | `/api/v9/workspaces/{{workspaceId}}/clients/{{clientId}}` | `conn_mod_def::GLEt9IvGhVA::32_WqbsvSxG8EiB0ed53_g` |
| Create a Workspace Client | POST | `/api/v9/workspaces/{{workspaceId}}/clients` | `conn_mod_def::GLEt9IvBwpA::Fkw6gqr8SaCkcmFbgOtopg` |
| Delete Workspace Clients | POST | `/api/v9/workspaces/{{workspaceId}}/clients/delete` | `conn_mod_def::GLEt9I6TQbA::R87fpX45R1WdjYrmE71rJA` |
| List a Workspace's Clients | POST | `/reports/api/v3/workspace/{{workspaceId}}/filters/clients` | `conn_mod_def::GLEuDmTYN4A::enymwEp7Ry-2FcgFsoyuXg` |
| List Clients for a Workspace by client_ids | POST | `/api/v9/workspaces/{{workspaceId}}/clients/data` | `conn_mod_def::GLEt9TUakuA::kd0CRTfzSNGdZ0mMNkFq7w` |
| Restore a Workspace Client | POST | `/api/v9/workspaces/{{workspaceId}}/clients/{{clientId}}/restore` | `conn_mod_def::GLEt9S9ANNg::MYKxZcbQTISka-JkXJsgsQ` |
| Search Clients in a Workspace | POST | `/reports/api/v3/workspace/{{workspaceId}}/search/clients` | `conn_mod_def::GLEuD6qhN8A::Mx-uOJdvS0Chbb_ErOqP5w` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/api/v9/organizations/{{organizationId}}` | `conn_mod_def::GLEt_-vH_Fg::s9AMuiCYTvCLvFK7hC_Ikg` |
| Get an Organization's Owner | GET | `/api/v9/organizations/{{organizationId}}/owner` | `conn_mod_def::GLEt_-GtaEg::AoN6Jrn4Q-G-3a9FskEMgQ` |
| List My Organizations | GET | `/api/v9/me/organizations` | `conn_mod_def::GLEt_fqP_cg::GH4dgrLDSOKQ7uIUZOkwsQ` |
| Create an Organization | POST | `/api/v9/organizations` | `conn_mod_def::GLEt_02GyXA::Tke6AERZRfaYxYZ88yofyQ` |
| Leave an Organization | DELETE | `/api/v9/organizations/{{organizationId}}/users/leave` | `conn_mod_def::GLEuDmTfKNg::SgVpGNV8TUuBTxjH2K2JuQ` |
| Reject an Organization Invitation | POST | `/api/v9/organizations/invitations/{{invitationCode}}/reject` | `conn_mod_def::GLEt-_Hypcg::3-4X64PlREeP8gu36L9VXg` |
| Remove an Organization's Subscription Promotion Code | DELETE | `/api/v9/organizations/{{organizationId}}/subscription/promocode` | `conn_mod_def::GLEuAwSWBig::kk-7myjMQKOd2bpSopJkUw` |
| Request a Slack Integration for an Organization | POST | `/api/v9/organizations/{{organizationId}}/integrations/slack/request` | `conn_mod_def::GLEt-xup-TA::LZhKV57nSIqVjOkcO6Ir_g` |
| Send the Premium-annual 30% Upgrade Email to an Organization's Admins | POST | `/api/v9/organizations/{{organizationId}}/premium-upgrade-discount-email` | `conn_mod_def::GLEuCT6WO6g::eWHpGxnETlybtjTOrMwBog` |
| Update an Organization | PUT | `/api/v9/organizations/{{organizationId}}` | `conn_mod_def::GLEuAWEzoLg::Y-LpTRBUSRuOEBY-YoHp3w` |

### ProjectUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Project Users | GET | `/api/v9/workspaces/{{workspaceId}}/project_users` | `conn_mod_def::GLEuBM3A68A::7Bhe61LqSUqfLcp7Vxb6Mw` |
| Add a User to Workspace Project Users | POST | `/api/v9/workspaces/{{workspaceId}}/project_users` | `conn_mod_def::GLEuBDLjAEg::TEnkIV66S2KMPY2yVkYn3A` |
| Delete a Workspace Project User | DELETE | `/api/v9/workspaces/{{workspaceId}}/project_users/{{projectUserId}}` | `conn_mod_def::GLEuBC5xWgA::kgldvEq8TyGHjAS0kFRpvQ` |
| List a Workspace's Project Users | POST | `/reports/api/v3/workspace/{{workspaceId}}/projects/summary` | `conn_mod_def::GLEuCocAZAg::fAS60i3wSJeA1UQ1KkAsHA` |
| List a Workspace's Project Users | POST | `/reports/api/v3/workspace/{{workspaceId}}/filters/project_users` | `conn_mod_def::GLEuDvznigg::Tfx0Jix2TGWNLyRSfQlhag` |
| List a Workspace's Project Users Paginated | POST | `/api/v9/workspaces/{{workspaceId}}/project_users/paginated` | `conn_mod_def::GLEuBM9BjJg::H9_cWytNQmyQT_5451xagg` |
| Patch Project Users from a Workspace | PATCH | `/api/v9/workspaces/{{workspaceId}}/project_users/{{projectUserIds}}` | `conn_mod_def::GLEuBO1IURg::sFYAmoxKQ92lSVWJ9pPENQ` |
| Update a Workspace Project User | PUT | `/api/v9/workspaces/{{workspaceId}}/project_users/{{projectUserId}}` | `conn_mod_def::GLEuBLzWVtg::v-xxR8SMRSKz6SOZCn9sOw` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Users | GET | `/api/v9/workspaces/{{workspaceId}}/users` | `conn_mod_def::GLEuDeSKIdg::fykq4r8BRCCV0gVmLy68iQ` |
| List a Workspace's Users in an Organization | GET | `/api/v9/organizations/{{organizationId}}/workspaces/{{workspaceId}}/workspace_users` | `conn_mod_def::GLEuEQ7WF1A::lsVC_uEVTu2BSq0f7SLq2Q` |
| List a Workspace's Workspace Users | GET | `/api/v9/workspaces/{{workspaceId}}/workspace_users` | `conn_mod_def::GLEuDmjUV9g::irI15KDMSU6ksmkVmaWKnA` |
| Change Users in a Workspace | PATCH | `/api/v9/organizations/{{organizationId}}/workspaces/{{workspaceId}}/workspace_users` | `conn_mod_def::GLEuEDVmyqA::xbrqnhLAQ3CFcSL4J1fcKw` |
| Delete a Workspace User | DELETE | `/api/v9/workspaces/{{workspaceId}}/workspace_users/{{workspaceUserId}}` | `conn_mod_def::GLEuDaVO98g::wFkffcrmT5qI6R6fosCkqw` |
| List a Workspace's Users | POST | `/reports/api/v3/workspace/{{workspaceId}}/search/users` | `conn_mod_def::GLEuD6qUO4g::o23_88W9QFG_C4S7qDUMrA` |
| Update a Workspace User | PUT | `/api/v9/workspaces/{{workspaceId}}/users/{{userId}}` | `conn_mod_def::GLEuDmiWPWg::B_GuVO5ZRAOgKmBFBO1gIA` |
| Update a Workspace User | PUT | `/api/v9/workspaces/{{workspaceId}}/workspace_users/{{workspaceUserId}}` | `conn_mod_def::GLEuDoF2xSg::I6ZEanVrTKKcFg-yDbPR0g` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Workspace | GET | `/api/v9/workspaces/{{workspaceId}}` | `conn_mod_def::GLEuEO2h1Og::3VztVpMKQTyFpwzmm9wkCg` |
| List My Workspaces | GET | `/api/v9/me/workspaces` | `conn_mod_def::GLEuEZwPShA::QSDK7wBcQyGRs47je9ogfQ` |
| Create an Organization Workspace | POST | `/api/v9/organizations/{{organizationId}}/workspaces` | `conn_mod_def::GLEuEDkHvyA::rB7sWugXQ5WYB2zy02Qljw` |
| Post a Workspace Logo | POST | `/api/v9/workspaces/{{workspaceId}}/logo` | `conn_mod_def::GLEuEhA4Hvg::vy0-piksQsSf-sDRXqDipA` |
| Reset a Workspace's iCal Token | POST | `/api/v9/workspaces/{{workspaceId}}/ical/reset` | `conn_mod_def::GLEt-n0RctA::I6CCNHd4RjunloN7YGMrPQ` |
| Toggle a Workspace's iCal Token | POST | `/api/v9/workspaces/{{workspaceId}}/ical/toggle` | `conn_mod_def::GLEt-oBnClg::Ubm9amDMQ_q9XtgYzpBwDw` |
| Update a Workspace | PUT | `/api/v9/workspaces/{{workspaceId}}` | `conn_mod_def::GLEuEZKRAbg::j9sm11C1RTOkCKqofSlIbg` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Time Entry by ID | GET | `/api/v9/me/time_entries/{{timeEntryId}}` | `conn_mod_def::GLEuDKHDuwg::qAlF1jVgTEm3l-BIXWmJrQ` |
| Get Current Time Entry | GET | `/api/v9/me/time_entries/current` | `conn_mod_def::GLEuDI4D7eA::bCVtyErcR6-ptEhdlpRInw` |
| Accept or Reject a Workspace Time Entry Invitation | POST | `/api/v9/workspaces/{{workspaceId}}/time_entry_invitations/{{timeEntryInvitationId}}/{{action}}` | `conn_mod_def::GLEuDKENS-g::HAScR4TKR0y3FbFxVWrwoA` |
| Bulk Edit a Workspace's Time Entries | PATCH | `/api/v9/workspaces/{{workspaceId}}/time_entries/{{timeEntryIds}}` | `conn_mod_def::GLEuC6OlbLA::bUYfw8gXRrqDPTw9mnk2ew` |
| Search Time Entries for a Workspace | POST | `/reports/api/v3/workspace/{{workspaceId}}/search/time_entries` | `conn_mod_def::GLEt9m7Kwfg::8gVY6kjlQueKyg5csjmBlw` |
| Stop a Workspace Time Entry | PATCH | `/api/v9/workspaces/{{workspaceId}}/time_entries/{{timeEntryId}}/stop` | `conn_mod_def::GLEuDJmQfMg::7ED1egJ8R8-J2j6uzYcDsA` |

### Favorites

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Favorites | GET | `/api/v9/workspaces/{{workspaceId}}/favorites` | `conn_mod_def::GLEt940NfOA::f7iiIZBtT6-AbAMaWzBDeQ` |
| Create a Workspace Favorite | POST | `/api/v9/workspaces/{{workspaceId}}/favorites` | `conn_mod_def::GLEt9vblAyg::NY6c5eFrSR-_owNhVYsygw` |
| Delete a Workspace Favorite | DELETE | `/api/v9/workspaces/{{workspaceId}}/favorites/{{favoriteId}}` | `conn_mod_def::GLEt9wJjq3g::QqKl7pP9S-idyan35xk1fA` |
| Generate Suggested Favorites for a Workspace | POST | `/api/v9/workspaces/{{workspaceId}}/favorites/suggestions` | `conn_mod_def::GLEt94F6YjA::EQdw1Oj8QEWw45xQbN_7KQ` |
| Update a Workspace's Favorites | PUT | `/api/v9/workspaces/{{workspaceId}}/favorites` | `conn_mod_def::GLEt93wkmZA::Wgun5iTnQ8WYr2vC8K593A` |

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Goals for a Workspace | GET | `/api/v9/workspaces/{{workspaceId}}/goals` | `conn_mod_def::GLEt-LptEZA::MFxYOBqGTuOS8d2jJOA2kg` |
| List User Goals | GET | `/api/v9/sync-server/me/goals` | `conn_mod_def::GLEt95UrZjA::96aqDkj_TMa49L2GYdonSg` |
| Create a Workspace Goal | POST | `/api/v9/workspaces/{{workspaceId}}/goals` | `conn_mod_def::GLEt-LIiFTA::A-ENeu__Ryetmy3kEFUDRQ` |
| Delete a Workspace Goal | DELETE | `/api/v9/workspaces/{{workspaceId}}/goals/{{goalId}}` | `conn_mod_def::GLEt-K7i86g::F7Yz8UEJRzCQMs5VUX0okQ` |
| Update a Workspace Goal (by ID) | PUT | `/api/v9/workspaces/{{workspaceId}}/goals/{{goalId}}` | `conn_mod_def::GLEt-UamRSg::Lj_9bc-_R7yxs-Yq5Pgv_A` |

### Preferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Preferences for a Specific Client of the Current User | GET | `/api/v9/me/preferences/{{client}}` | `conn_mod_def::GLEuA5eyeGA::9bcHrgEXS6-eKGGZnDWksA` |
| Get Preferences for the Current User | GET | `/api/v9/me/preferences` | `conn_mod_def::GLEuA5MMh2A::idIV70Z_QsGhMHHNBE85LA` |
| Update the Preferences for a Specific Client of the Current User | POST | `/api/v9/me/preferences/{{client}}` | `conn_mod_def::GLEuA5dzmqA::skyqETNESqa9r2lw8BI0Kw` |
| Update the Preferences for the Current User | POST | `/api/v9/me/preferences` | `conn_mod_def::GLEuBCkIW2g::74b6LBAtRH6hy_0aYCwFdg` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Tags | GET | `/api/v9/workspaces/{{workspaceId}}/tags` | `conn_mod_def::GLEuCxNpG7A::OWKVNPDJQ6K-bzbWoDb_nA` |
| List My Tags | GET | `/api/v9/me/tags` | `conn_mod_def::GLEt_rpyBBA::yM-x_te8SWi9m7MmnOmgsQ` |
| Bulk Delete a Workspace's Tags | PATCH | `/api/v9/workspaces/{{workspaceId}}/tags` | `conn_mod_def::GLEuCwW2LkA::W431_mcUTtK_slfEKobqBQ` |
| Update a Workspace Tag | PUT | `/api/v9/workspaces/{{workspaceId}}/tags/{{tagId}}` | `conn_mod_def::GLEuCxKphNA::weAfoVsARWeQ9sJNxU3ZfQ` |

### TimesheetSetups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace's Timesheet Setups | GET | `/api/v9/workspaces/{{workspaceId}}/timesheet_setups` | `conn_mod_def::GLEt7p07reg::IiIMFIHKRSO7NOFGafHE6g` |
| Create Timesheet Setups for a Workspace | POST | `/api/v9/workspaces/{{workspaceId}}/timesheet_setups` | `conn_mod_def::GLEt7qyJT_g::FcqxlMGgSG2xxgKSaK0Deg` |
| Delete a Workspace Timesheet Setup | DELETE | `/api/v9/workspaces/{{workspaceId}}/timesheet_setups/{{setupId}}` | `conn_mod_def::GLEt7oOFqdA::rJJLUkz-RHWr45w47Q8lEQ` |
| Update a Workspace Timesheet Setup | POST | `/api/v9/workspaces/{{workspaceId}}/timesheet_setups/{{setupId}}` | `conn_mod_def::GLEt7z4hrog::QJp0R_UUSMefvirdLp4XeA` |

### Timesheets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Timesheets | GET | `/api/v9/workspaces/{{workspaceId}}/timesheets` | `conn_mod_def::GLEt72UGLdA::VHlwOAzbT9aGNd6261ccfg` |
| List the Current User's Timesheets | GET | `/me/timesheets` | `conn_mod_def::GLEt_rt_Ipg::0zwWC039Q-yPsuKfQNwTwA` |
| Update a Workspace Timesheet | PUT | `/api/v9/workspaces/{{workspaceId}}/timesheets/{{setupId}}/{{startDate}}` | `conn_mod_def::GLEt7_XHALA::7KjkNBp-TfOmezu03aM30Q` |
| Update a Workspace's Batch of Timesheets | PUT | `/api/v9/workspaces/{{workspaceId}}/timesheets` | `conn_mod_def::GLEt7ziwR5g::gel40rqCTTW83otGi1HUMw` |

### ProjectGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace's Project Groups | GET | `/api/v9/workspaces/{{workspaceId}}/project_groups` | `conn_mod_def::GLEt-dsrS_g::eabpkGhwSQajkbW92HPlxg` |
| Add a Group to a Workspace Project | POST | `/api/v9/workspaces/{{workspaceId}}/project_groups` | `conn_mod_def::GLEt-VaSfOA::7-aaYmf1TzWc2dhyTiV8VA` |
| List a Workspace's Project Groups Filter | POST | `/reports/api/v3/workspace/{{workspaceId}}/filters/project_groups` | `conn_mod_def::GLEuDwugx9A::V752BAOmQvOHPOGWIj88IA` |
| Remove a Workspace's Project Group | DELETE | `/api/v9/workspaces/{{workspaceId}}/project_groups/{{projectGroupId}}` | `conn_mod_def::GLEt-dzgDJA::AS2-WKU2QE2NLdDUAE9UZQ` |

### Me

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If the Authenticated User Is Logged In | GET | `/api/v9/me/logged` | `conn_mod_def::GLEt_XkE0Fg::XCtqost_SAK09YZPsPW4NQ` |
| Confirm SSO Enabling for the Authenticated User Account | POST | `/api/v9/me/enable_sso` | `conn_mod_def::GLEt7_rIRJg::5RxOEp9PSQGUMyXa7WVQAQ` |
| Reset Token | POST | `/me/reset_token` | `conn_mod_def::GLEt8HXjisA::Ql8m8JJAQ0-lNA0lYZUteg` |
| Update Me | PUT | `/api/v9/me` | `conn_mod_def::GLEt_i3yr1g::cbs5LJHSQAOT5IudRYmO3w` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List My Paginated Projects | GET | `/api/v9/me/projects/paginated` | `conn_mod_def::GLEt_iInH4g::2be3MZqDSk2Db664vKFl1Q` |
| List My Projects | GET | `/api/v9/me/projects` | `conn_mod_def::GLEt_hmx1wg::XF6_NeNZRRilQhKK77bP7w` |
| Get Billable Amounts for a Workspace's Projects | POST | `/api/v9/workspaces/{{workspaceId}}/projects/billable-amounts` | `conn_mod_def::GLEuBMDUpcg::ya7kYx9mSryPSCaAobUP0w` |
| List a Workspace's Projects | POST | `/reports/api/v3/workspace/{{workspaceId}}/search/projects` | `conn_mod_def::GLEuDxAE0bg::BlV2fGbwQ_GF7PZAI4JUZw` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Tasks | GET | `/api/v9/workspaces/{{workspaceId}}/tasks/basic` | `conn_mod_def::GLEuDAt4niA::1MITRgQ8RwObyKFGwVM8kA` |

2 more Tasks actions are available through search.

This lists 90 of 274 actions. For anything not here, call `search_one_platform_actions` with platform `toggl-track`. The full catalog is at https://www.withone.ai/knowledge/toggl-track.

## When a call fails

The error comes from Toggl Track, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/toggl-track

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
