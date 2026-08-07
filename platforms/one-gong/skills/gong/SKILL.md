---
name: gong
description: Gong is a revenue intelligence platform that captures and analyzes customer interactions across calls, emails, and meetings to deliver insights that drive sales performance and coaching. Read and write Gong data through One: calls, flows, dataprivacy, permissionprofiles, users, meetings and more, 65 actions with real parameter documentation. Use whenever the user asks to look something up in Gong, create or update a record there, or build code against the Gong API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gong
  generated-from: one-knowledge-base
---

# Gong through One

Gong is a revenue intelligence platform that captures and analyzes customer interactions across calls, emails, and meetings to deliver insights that drive sales performance and coaching.

One exposes Gong through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gong` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gong is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gong account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calls by Date Range | GET | `/v2/calls` | `conn_mod_def::GJ3qOU7F5ik::hltmBCG4T02bQZb9TU1Q0Q` |
| Retrieve a Call | GET | `/v2/calls/{{id}}` | `conn_mod_def::GJ3qOdVYCww::r-tNT80LS7K5SVHpCHpECQ` |
| Add a New Call | POST | `/v2/calls` | `conn_mod_def::GJ3qOMD-slQ::3Igg_zgMTqGuIBh5BGEXag` |
| Add Call Media (Recording) to a Call | PUT | `/v2/calls/{{id}}/media` | `conn_mod_def::GJ3qODq75nw::GX72wl8yRJ2BwqOeG6R8TQ` |
| Give Users Access to Calls | PUT | `/v2/calls/users-access` | `conn_mod_def::GJ3qUIPWC_g::6urm8sCkTJS8g0oje8hdkw` |
| List Extensive Call Data | POST | `/v2/calls/extensive` | `conn_mod_def::GJ3qOlVx9dA::GVXiJmNBQ4yTZmFcMpfCKQ` |

### Flows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gong Engage Flow Folders (for a User) | GET | `/v2/flows/folders` | `conn_mod_def::GJ3qRXnFGDE::w0ipRMcLRzSZBj0GIC8m3g` |
| List Gong Engage Flows | GET | `/v2/flows` | `conn_mod_def::GJ3qRiF9qkY::niDMRoSWQGGah7qXzEnwaA` |
| Assign Prospects to an Engage Flow | POST | `/v2/flows/prospects/assign` | `conn_mod_def::GJ3qQ1D-_Sw::y9VGOe0lSPmMhuI3SVwYnA` |
| Assign Prospects to an Engage Flow (Cool-Off Override) | POST | `/v2/flows/prospects/assign/cool-off-override` | `conn_mod_def::GJ3qQ9-tR3U::7HkxPz7NTOmwNULE2vZPSA` |
| List Assigned Flows for Prospects | POST | `/v2/flows/prospects` | `conn_mod_def::GJ3qROJHTSw::XSrPNZyFS0eHypEjleNgkw` |
| Submit a Bulk Assignment of Prospects to a Flow | POST | `/v2/flows/prospects/bulk-assignments` | `conn_mod_def::GJ3qRq5XJDg::WyQUypwtQMChai0QIJkjDw` |

### DataPrivacy

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All References to a Phone Number | GET | `/v2/data-privacy/data-for-phone-number` | `conn_mod_def::GJ3qQcLA5Gc::WzIyp2TzSYqt0AB-IkhO0g` |
| Retrieve All References to an Email Address | GET | `/v2/data-privacy/data-for-email-address` | `conn_mod_def::GJ3qQkLY_Xo::BXpWsmF2RRS5dsL0c0WQHw` |
| Erase Data for a Phone Number | POST | `/v2/data-privacy/erase-data-for-phone-number` | `conn_mod_def::GJ3qQUCDFJo::yLIj-k1FS3q2aLyDaoMV8w` |
| Erase Data for an Email Address (Data Privacy Purge) | POST | `/v2/data-privacy/erase-data-for-email-address` | `conn_mod_def::GJ3qQMHCnYM::UB9BB4sbR968XKdyAuXsfw` |

### PermissionProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Permission Profile by Profile ID | GET | `/v2/permission-profile` | `conn_mod_def::GJ3qUkxNHMQ::PQZa6M3jQWS85TlcdyG91Q` |
| List a Workspace’s Permission Profiles | GET | `/v2/all-permission-profiles` | `conn_mod_def::GJ3qURpPSeg::8FY4zxh6QIWs6c3kqaKKXQ` |
| Create a Permission Profile (Workspace Scoped) | POST | `/v2/permission-profile` | `conn_mod_def::GJ3qT_jntZQ::An0-L468RtG7EbmPt5UB9w` |
| Update a Permission Profile | PUT | `/v2/permission-profile` | `conn_mod_def::GJ3qU-BxaFA::ArX3fxP7TFGzHzXLnphQpA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/v2/users` | `conn_mod_def::GJ3qWdovXs4::XP0fywm_Qs-YVp9EXBHR0A` |
| Retrieve a User | GET | `/v2/users/{{id}}` | `conn_mod_def::GJ3qWtISB8k::Jj7pDZnEQ6W0eKloLS9KMg` |
| Retrieve a User’s Settings History | GET | `/v2/users/{{id}}/settings-history` | `conn_mod_def::GJ3qW176l24::ceUWHvOLQIelnH_OHuB6vA` |
| List Users by Filter (Extensive) | POST | `/v2/users/extensive` | `conn_mod_def::GJ3qWlkxfds::2Huml2cNQsyvQwI5a2ueWA` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Gong Meeting | POST | `/v2/meetings` | `conn_mod_def::GJ3qTVrglkI::1n2JRio2Tq-ag7e_qPmQmA` |
| Delete a Meeting | DELETE | `/v2/meetings/{{meetingId}}` | `conn_mod_def::GJ3qTdQaTpU::XtfPJqDOQxqU5zDrwcRMgw` |
| Update a Meeting | PUT | `/v2/meetings/{{meetingId}}` | `conn_mod_def::GJ3qTk_TeOw::86jIdIjfSJWM48crN__g4Q` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| List Multiple Users’ Aggregated Activity Stats (by Date Range) | POST | `/v2/stats/activity/aggregate` | `conn_mod_def::GJ3qVrFahkU::J-TIyy7jQx6vtacO8Ad-nQ` |
| Retrieve Multiple Users’ Aggregated Activity by Time Period | POST | `/v2/stats/activity/aggregate-by-period` | `conn_mod_def::GJ3qVgr-3hI::icDfSG88RxWbduIRi8TWlw` |
| Retrieve Multiple Users’ Day-by-Day Activity Stats | POST | `/v2/stats/activity/day-by-day` | `conn_mod_def::GJ3qV9XJWzk::Y7yjTP_DRCWEC1uNuGGJWg` |

### CrmIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Generic CRM Integrations | GET | `/v2/crm/integrations` | `conn_mod_def::GJ3qPPX9GqI::KLN1gqlzT1eiqGw6Onku_A` |
| Delete a Generic CRM Integration | DELETE | `/v2/crm/integrations` | `conn_mod_def::GJ3qO_WJqeQ::HTUiNNOYQsujLOLtuHM_2Q` |
| Register a Generic CRM Integration | PUT | `/v2/crm/integrations` | `conn_mod_def::GJ3qPx1W46o::gXa2ImluTpuUXj0TWgGsqw` |

### CrmEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CRM Objects (Development Only) | GET | `/v2/crm/entities` | `conn_mod_def::GJ3qPHtDzps::6L1eNidcSH2zisJz4dxXZA` |
| Upload CRM Entities (Insert/Update/Delete) | POST | `/v2/crm/entities` | `conn_mod_def::GJ3qP7PpFcU::oMmP6kleT4WjyzMjRNxJJg` |

### FlowsProspects

| Action | Method | Path | Action id |
|---|---|---|---|
| Unassign Flows by CRM Prospect ID | POST | `/v2/flows/prospects/unassign-flows-by-crm-id` | `conn_mod_def::GJ3qRzoNDH0::tkWGbrpqQcupjAVflkfntw` |
| Unassign Prospects From Flows by Flow Instance ID | POST | `/v2/flows/prospects/unassign-flows-by-instance-id` | `conn_mod_def::GJ3qR9XOVFE::ol3u2af7T46c6g6zO83U0g` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Tasks | POST | `/v2/tasks` | `conn_mod_def::GJ3qWOD7H3w::u8JVQYvOTHGw7dxxojqhwQ` |
| Update a Task | PATCH | `/v2/tasks/{{taskId}}` | `conn_mod_def::GJ3qWVbUDkM::CTqH4WKCTv-3I-NFo9P02A` |

### Entities

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask a Question About a CRM Entity | GET | `/v2/entities/ask-entity` | `conn_mod_def::GJ3qSnTqHEY::SnB8Y808QAqwXTuGZBxAPw` |
| Generate a Brief for a CRM Entity | GET | `/v2/entities/get-brief` | `conn_mod_def::GJ3qS2g81YU::dzKbvKfeT9GL0-cyxs0hXg` |

### CallTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Call Transcripts | POST | `/v2/calls/transcript` | `conn_mod_def::GJ3qOtDa1xA::Kp2N0vvlSpSfQS5KAQ_qzg` |

### Coaching

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Manager’s Coaching Metrics | GET | `/v2/coaching` | `conn_mod_def::GJ3qO2VI4y0::fanzzFnsQceOEKicgxXk9A` |

### CrmEntitySchemaFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List CRM Entity Schema Fields | GET | `/v2/crm/entity-schema` | `conn_mod_def::GJ3qPg5hz1Y::DZggFqnvTcmH4jk4OXiBIg` |

### CrmEntitySchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload CRM Entity Schema Fields (Object Schema) | POST | `/v2/crm/entity-schema` | `conn_mod_def::GJ3qQD6hVlM::NxJpDrNVQrCfBCVRDp-_iQ` |

### CustomerEngagementContentShared

| Action | Method | Path | Action id |
|---|---|---|---|
| Report a Content Share Engagement Event | PUT | `/v2/customer-engagement/content/shared` | `conn_mod_def::GJ3qSFQrgfY::7Q_lakgcRxSwjYYVmL7erA` |

### CustomerEngagement

| Action | Method | Path | Action id |
|---|---|---|---|
| Report a Custom Action Engagement Event | PUT | `/v2/customer-engagement/action` | `conn_mod_def::GJ3qSYdNLQE::3EGwL5QcR36SjlbxkFTCaA` |

### IntegrationSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Integration Settings | POST | `/v2/integration-settings` | `conn_mod_def::GJ3qS-Kbw-g::moUjYcx6Qt6X-tQRJzWPyQ` |

### LibraryFolderContent

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calls in a Specific Library Folder | GET | `/v2/library/folder-content` | `conn_mod_def::GJ3qTF2gArw::X8YbrZ2QS6WKLAjSi5O7iw` |

### MeetingsIntegrationStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Meeting Integration Status for Users | POST | `/v2/meetings/integration/status` | `conn_mod_def::GJ3qTtuL4GA::EYggWzuoSCaUpltx7ng3Bg` |

### CallOutcomes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Call Outcomes | GET | `/v2/call-outcomes` | `conn_mod_def::GJ3qT1_NbBQ::5BA0TADPSACfmSq89FRD9g` |

### CallUserAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Users With Individual Access to Calls | POST | `/v2/calls/users-access` | `conn_mod_def::GJ3qU1qjRW8::C0ab4SbtTjiN59_grCLAfA` |

### SettingsScorecards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scorecards (Settings) | GET | `/v2/settings/scorecards` | `conn_mod_def::GJ3qVQFJYJ0::wT6iEo2IRjSiny1fWT26dA` |

### Trackers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Trackers | GET | `/v2/settings/trackers` | `conn_mod_def::GJ3qVYIedZ0::ofLZ8avMTGOEJvVPxMjpqA` |

### InteractionStats

| Action | Method | Path | Action id |
|---|---|---|---|
| List Interaction Stats by Date (Whisper Calls) | POST | `/v2/stats/interaction` | `conn_mod_def::GJ3qWFyBP8E::1iGzxpSCTMWMQtV9vBvd7A` |

### FlowProspectsBulkAssignmentResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Flow Prospects Bulk Assignment Result | GET | `/v2/flows/prospects/bulk-assignments/{{id}}` | `conn_mod_def::GJ3qRGiercY::IK7dEHMvRDeeSXSi1Bj5Bg` |

### ActivityScorecards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Answered Activity Scorecards | POST | `/v2/stats/activity/scorecards` | `conn_mod_def::GJ3qV0plZ68::YUgYKPU5S7-ykH2LP9O58w` |

### Logs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Logs (by Type and Time Range) | GET | `/v2/logs` | `conn_mod_def::GJ3qN7gNWSU::dUUzadiBS2Cfiyqovh6nAg` |

### CrmRequestStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CRM Asynchronous Request Status | GET | `/v2/crm/request-status` | `conn_mod_def::GJ3qPYkGDLM::Vh_LW1p4SCyd941GVlljQQ` |

### DigitalInteractions

| Action | Method | Path | Action id |
|---|---|---|---|
| Post a Digital Interaction | POST | `/v2/digital-interaction` | `conn_mod_def::GJ3qQsIJNEA::G4FHVDDiRru3OEEKxGXR2w` |

### CustomerEngagementContentViewed

| Action | Method | Path | Action id |
|---|---|---|---|
| Report a Content View Event | PUT | `/v2/customer-engagement/content/viewed` | `conn_mod_def::GJ3qSPcY1v4::y8EoiXeWTZ2sGPCApCl_YA` |

### LibraryFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Public Library Folders | GET | `/v2/library/folders` | `conn_mod_def::GJ3qTN5Xf5o::QTaWJH8GTwOmQxEOBQ7sBA` |

### PermissionProfileUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Permission Profile’s Users | GET | `/v2/permission-profile/users` | `conn_mod_def::GJ3qUbTMyrk::Y8plWyWWQnKs-1mViCfP3g` |

### CallsUsersAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Users’ Access to Calls | DELETE | `/v2/calls/users-access` | `conn_mod_def::GJ3qUs8a0cc::vQVgxHVrScS-xk1Xf5Xvzg` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Workspaces | GET | `/v2/workspaces` | `conn_mod_def::GJ3qVFNLhAI::DLhTbhQNSuidzbycxgkfHw` |

## When a call fails

The error comes from Gong, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gong

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
