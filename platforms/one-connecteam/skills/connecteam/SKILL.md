---
name: connecteam
description: Connecteam is an employee management platform for deskless teams that provides scheduling, time tracking, task management, forms, training, onboarding, internal communication, and HR tools, allowing businesses to manage daily operations and workforce coordination from a single app. Read and write Connecteam data through One: shifts, pendingusers, jobs, webhooks, users, conversations and more, 143 actions with real parameter documentation. Use whenever the user asks to look something up in Connecteam, create or update a record there, or build code against the Connecteam API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: connecteam
  generated-from: one-knowledge-base
---

# Connecteam through One

Connecteam is an employee management platform for deskless teams that provides scheduling, time tracking, task management, forms, training, onboarding, internal communication, and HR tools, allowing businesses to manage daily operations and workforce coordination from a single app.

One exposes Connecteam through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `connecteam` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Connecteam is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Connecteam account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Shifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shift for a Scheduler | GET | `/scheduler/v1/schedulers/{{schedulerId}}/shifts/{{shiftId}}` | `conn_mod_def::GMSWSKpB2u4::xrZB-WYARruT3umizVn7Bg` |
| List Shifts for a Scheduler | GET | `/scheduler/v1/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSMq56BE::zuSr2YDLSHCp4S1zKVaLVg` |
| List Shifts for a Scheduler | GET | `/scheduler/v2/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSl5K4h8::FNjeuHgpQ_-jPEDk7WANYQ` |
| Create Shifts for a Scheduler | POST | `/scheduler/v1/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSD6Lt0k::0uOTqctJSNiBLCggGg2aAg` |
| Create Shifts for a Scheduler | POST | `/scheduler/v2/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSbwaxh0::JrMucw8PRIKpeHgzQtaGlw` |
| Delete a Shift for a Scheduler | DELETE | `/scheduler/v1/schedulers/{{schedulerId}}/shifts/{{shiftId}}` | `conn_mod_def::GMSWSCniKm8::dhTIynqjSfiYwKz99bzzGw` |
| Delete Shifts for a Scheduler | DELETE | `/scheduler/v1/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSDsCk9w::MUjlvqNoRzC0Jp17Cu6mdQ` |
| Delete Shifts for a Scheduler | DELETE | `/scheduler/v2/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSWucAI8::3Zyk6hlVSfm_qi8h06scoA` |
| Update Shifts for a Scheduler | PUT | `/scheduler/v1/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSO15uEU::j_kjPP-uRbW39biZ8STrcA` |
| Update Shifts for a Scheduler | PUT | `/scheduler/v2/schedulers/{{schedulerId}}/shifts` | `conn_mod_def::GMSWSoD4P8k::cN8tOMiBTEySkcyJGmy7vw` |

### PendingUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pending Users | GET | `/users/v1/pending-users` | `conn_mod_def::GMSWUhAPv9s::sZ3N9KT-Q8i_Ng7uLIAOBg` |
| Bulk Delete Pending Users | DELETE | `/users/v1/pending-users` | `conn_mod_def::GMSWUeux6qw::nc53dT4HQoegnmW7v1t_0g` |
| Create Pending Users | POST | `/users/v1/pending-users` | `conn_mod_def::GMSWUfhzimQ::rAp7UHSPTPCdcQH54L1gNA` |
| Delete a Pending User | DELETE | `/users/v1/pending-users/{{pendingUserId}}` | `conn_mod_def::GMSWUe0Z1jM::t6xH2efzSbO0OenY0VteQw` |
| Update a Pending User | PUT | `/users/v1/pending-users/{{pendingUserId}}` | `conn_mod_def::GMSWUnruI_Q::qpCeOOlxSFSt7PiXH4Qj8w` |
| Update Invite Links Data | PUT | `/users/v1/pending-users/` | `conn_mod_def::GMSWUfBNVbw::mHUv-M83S7Smnwrxizvyvw` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job by ID | GET | `/jobs/v1/jobs/{{jobId}}` | `conn_mod_def::GMSWRG-1RF8::vhw8ERtZQCK2Ko7o-5XuZA` |
| List Jobs | GET | `/jobs/v1/jobs` | `conn_mod_def::GMSWRRAyyvk::9oI-ecBeTHexdFMuWkKFLA` |
| Create Jobs | POST | `/jobs/v1/jobs` | `conn_mod_def::GMSWRPrnL10::xh9fyGT9T7C_fmVoL5S68Q` |
| Delete a Job | DELETE | `/jobs/v1/jobs/{{jobId}}` | `conn_mod_def::GMSWRFJHYSM::BDsb0dNaQ-25rB9Rk7t9GQ` |
| Update a Job | PUT | `/jobs/v1/jobs/{{jobId}}` | `conn_mod_def::GMSWRNvuHKs::ARDukWpWQDek_L1r39wKNQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/settings/v1/webhooks/{{webhookId}}` | `conn_mod_def::GMSWSuFosic::hFqHMqTnTW6b1vbbB8QRaQ` |
| List Webhooks | GET | `/settings/v1/webhooks` | `conn_mod_def::GMSWSvC8-jw::g0pl5B8nT1S9zdv2zs4zEg` |
| Create a Webhook | POST | `/settings/v1/webhooks` | `conn_mod_def::GMSWSiTBfCw::yIyBwyzYSt2Jivy7MeubTw` |
| Delete a Webhook | DELETE | `/settings/v1/webhooks/{{webhookId}}` | `conn_mod_def::GMSWSl1d7JA::tWh2G6ZwTFSHp71EBc3yBQ` |
| Update a Webhook | PUT | `/settings/v1/webhooks/{{webhookId}}` | `conn_mod_def::GMSWSu-vsx0::8hyObR2rRge6jduwnwKPNQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/users/v1/users` | `conn_mod_def::GMSWU3WqP3s::Ef75l_atRriUV9BAGMnEnA` |
| Archive Users | DELETE | `/users/v1/users` | `conn_mod_def::GMSWUu1cgS8::13_N-nqrT8uX61qK8yDJ6A` |
| Create Users | POST | `/users/v1/users` | `conn_mod_def::GMSWU1UCeqA::5jYdOdQNQlypIGvf2zXDFg` |
| Delete a User | DELETE | `/users/v1/users/{{userId}}` | `conn_mod_def::GMSWU3TPI-A::YafQ6bLoTFCKTADatGBJcA` |
| Update Users | PUT | `/users/v1/users` | `conn_mod_def::GMSWU394hqE::0qD-9_GpQnenyVRZDoJL-A` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conversations | GET | `/chat/v1/conversations` | `conn_mod_def::GMSWQnRYf-w::LSBsb7HqRla5T6IaqeF2Og` |
| Create a Conversation | POST | `/chat/v1/conversations` | `conn_mod_def::GMSWQm7kN4E::sn9xAV-5RoODpEmXZVR5yg` |
| Send a Private Message to a User | POST | `/chat/v1/conversations/privateMessage/{{userId}}` | `conn_mod_def::GMSWQvROVoI::CKUt9VkfRjSnmAttSLeWLQ` |
| Send Message to a Conversation | POST | `/chat/v1/conversations/{{conversationId}}/message` | `conn_mod_def::GMSWQuHdHwo::xjeaaMPrRMKcWwVEmqf7fQ` |

### DailyNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Daily Note by ID | GET | `/daily-info/v1/daily-note/{{noteId}}` | `conn_mod_def::GMSWQ1MB7Uw::pZjpqeTkTFClsW61js57-A` |
| Create a Daily Note | POST | `/daily-info/v1/daily-notes` | `conn_mod_def::GMSWQ2Ac6Eg::UIWh8_53S1-QQc4E61E1rQ` |
| Delete a Daily Note | DELETE | `/daily-info/v1/daily-note/{{noteId}}` | `conn_mod_def::GMSWQtfNIBM::rdFm854ZRlmeVXC3cbzauA` |
| Update a Daily Note by ID | PUT | `/daily-info/v1/daily-note/{{noteId}}` | `conn_mod_def::GMSWQ2WRX6M::-WpiMb2kT2qax86dvUYHXQ` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form by ID | GET | `/forms/v1/forms/{{formId}}` | `conn_mod_def::GMSWQ-ob1xk::D-RYEthpShKK-UduxoJ5Ig` |
| List Forms | GET | `/forms/v1/forms` | `conn_mod_def::GMSWQ-udSuU::yfsvn4unRYC7u5fBFBMxRQ` |
| Delete Dropdown Option from a Form Question | DELETE | `/forms/v1/forms/{{formId}}/questions/{{questionId}}/options/{{optionId}}` | `conn_mod_def::GMSWQ-8AAc0::0shiVOiMTfW27mVHMvtjsw` |
| Update a Dropdown Option in a Form Question | PUT | `/forms/v1/forms/{{formId}}/questions/{{questionId}}/options/{{optionId}}` | `conn_mod_def::GMSWRHGaHME::0memy2w7TsmJcN8E8PoxMw` |

### Schedulers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Auto-Assign Status for a Scheduler | GET | `/scheduler/v1/schedulers/{{schedulerId}}/shifts/auto-assign/{{autoAssignRequestId}}` | `conn_mod_def::GMSWRvX6uqw::JC9LOHFsTOK2zZ3Ahg-GSg` |
| Get Schedulers | GET | `/scheduler/v1/schedulers` | `conn_mod_def::GMSWRm-36qA::qBbJebEkSliiV54Byf5AVg` |
| Auto Assign Shifts Using a Scheduler | POST | `/scheduler/v1/schedulers/{{schedulerId}}/shifts/auto-assign` | `conn_mod_def::GMSWRu9Lczk::r0Wj0dKgS8-2dK9M0Nr-lA` |
| Auto Assign Shifts Using Scheduler v2 | POST | `/scheduler/v2/schedulers/{{schedulerId}}/shifts/auto-assign` | `conn_mod_def::GMSWSLEh02k::TSutuZwHR36Ad0hhp3MVJQ` |

### TimeActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Activities for a Time Clock | GET | `/time-clock/v1/time-clocks/{{timeClockId}}/time-activities` | `conn_mod_def::GMSWTo60tqA::gW_z6g_0TKCxWAdk92KYcw` |
| Create Time Activities for a Time Clock | POST | `/time-clock/v1/time-clocks/{{timeClockId}}/time-activities` | `conn_mod_def::GMSWTls1D7w::zau6ZZ7GS_y-kpAx27dPUQ` |
| Delete a Time Activity from a Time Clock | DELETE | `/time-clock/v1/time-clocks/{{timeClockId}}/time-activities/{{timeActivityId}}` | `conn_mod_def::GMSWTn45-xQ::2Ru_E_-LT26yNR1MeCK6Uw` |
| Update Time Activities for a Time Clock | PUT | `/time-clock/v1/time-clocks/{{timeClockId}}/time-activities` | `conn_mod_def::GMSWTm3KF-A::E_yid-bmRHOD_1aUdol23g` |

### CustomFieldOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Field Options for a User | GET | `/users/v1/custom-fields/{{customFieldId}}/options` | `conn_mod_def::GMSWUX3Vj2s::vVdnbfiSQ7mZDcFNIGZNvw` |
| Create a Custom Field Option | POST | `/users/v1/custom-fields/{{customFieldId}}/options` | `conn_mod_def::GMSWUDfUcGc::F2jYnz7yRiGO5WRs235VbA` |
| Delete a Custom Field Option | DELETE | `/users/v1/custom-fields/{{customFieldId}}/options/{{optionId}}` | `conn_mod_def::GMSWUQ1Wkw4::U0zLcUZpQX-0314I6AXmMQ` |
| Update a Custom Field Option | PUT | `/users/v1/custom-fields/{{customFieldId}}/options/{{optionId}}` | `conn_mod_def::GMSWUQlw3UE::FQVnhoAUQCmaqYCD0S1rTg` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields | GET | `/users/v1/custom-fields` | `conn_mod_def::GMSWUGieIZo::u10EcjrfTZye8et_INRX4w` |
| Create Custom Fields | POST | `/users/v1/custom-fields` | `conn_mod_def::GMSWUKLfqU0::p6kVTJghQ6uFLMvKDpEvzg` |
| Delete Custom Fields | DELETE | `/users/v1/custom-fields` | `conn_mod_def::GMSWUDzn_H8::P2R37ESFSyCOv5kgvAEdxw` |
| Update Custom Fields | PUT | `/users/v1/custom-fields` | `conn_mod_def::GMSWUDjybCE::8LI46B04RliqkcWq9p2I0g` |

### SmartGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Smart Groups | GET | `/users/v1/smart-groups` | `conn_mod_def::GMSWUvPUA0A::VKVKZIydQmmwyGunDgXc2g` |
| Create a Smart Group | POST | `/users/v1/smart-groups` | `conn_mod_def::GMSWUuSRWkE::xvu2k6qkSnaPaehD5Jq7nQ` |
| Delete a Smart Group | DELETE | `/users/v1/smart-groups/{{smartGroupId}}` | `conn_mod_def::GMSWUvDO8hA::5flh1aSGTTOimRBO1kISSw` |
| Update a Smart Group | PUT | `/users/v1/smart-groups/{{smartGroupId}}` | `conn_mod_def::GMSWUubuFmc::nwgRKaHjSeieDriI9xXYFA` |

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Submission for a Form | GET | `/forms/v1/forms/{{formId}}/form-submissions/{{formSubmissionId}}` | `conn_mod_def::GMSWQ4AzrAw::0Kx-HAKiSZyTytAEwmwhXg` |
| List Form Submissions for a Form | GET | `/forms/v1/forms/{{formId}}/form-submissions` | `conn_mod_def::GMSWQ3bjsjs::ox9g4OqHQK2eGOjwYdP2Nw` |
| Update a Form Submission | PUT | `/forms/v1/forms/{{formId}}/form-submissions/{{formSubmissionId}}` | `conn_mod_def::GMSWQ-8X0eo::-NMcx6jMSbu1Up1yh-D8Hg` |

### PayRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pay Rates | GET | `/pay-rates/v1/pay-rates` | `conn_mod_def::GMSWRYZg8YA::WfXsWfeOQOGK8Wcv-v1oxw` |
| Delete a User's Pay Rate | DELETE | `/pay-rates/v1/pay-rates/users/{{userId}}/{{effectiveDate}}` | `conn_mod_def::GMSWRYhA7ZI::h66muJ8uT0eq3dFSq60TsQ` |
| Set Pay Rates | PUT | `/pay-rates/v1/pay-rates` | `conn_mod_def::GMSWRXIEfcU::w1NvNL5aQZGWkUuPQDBBJw` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Transactions Using Sales v1 | POST | `/sales/v1/transactions` | `conn_mod_def::GMSWRmqt-2s::OMDJkUPzRU6BHurQTh8bzA` |
| Delete a Transaction | DELETE | `/sales/v1/transactions/{{transactionId}}` | `conn_mod_def::GMSWRnmlJkI::Qbmyp8VWR-i_U7bsDKGuNw` |
| Delete Transactions | DELETE | `/sales/v1/transactions` | `conn_mod_def::GMSWRnfPNpU::dBZ14S55RHSGa4BHlsRpvw` |

### SubTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sub-Tasks for a Task in a Task Board | GET | `/tasks/v1/taskboards/{{taskBoardId}}/tasks/{{taskId}}/sub-tasks` | `conn_mod_def::GMSWS5kcqEE::PQR2ueUbTluyTMEVgX16dQ` |
| Create a Sub-Task for a Task in a Task Board | POST | `/tasks/v1/taskboards/{{taskBoardId}}/tasks/{{taskId}}/sub-tasks` | `conn_mod_def::GMSWSupaxWs::phMoutJCR3qquRUtczcqxw` |
| Update a Sub-Task for a Task in a Task Board | PUT | `/tasks/v1/taskboards/{{taskBoardId}}/tasks/{{taskId}}/sub-tasks/{{subTaskId}}` | `conn_mod_def::GMSWTEE7dUI::lkAYmVjORlKH16VaAtL54w` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks for a Task Board | GET | `/tasks/v1/taskboards/{{taskBoardId}}/tasks` | `conn_mod_def::GMSWTLqUFhA::lZl_YpW-Rpqk3cc5ZkMsKQ` |
| Create a Task in a Task Board | POST | `/tasks/v1/taskboards/{{taskBoardId}}/tasks` | `conn_mod_def::GMSWS37xt-8::5QC4SXmfQMGv5321AVxQyw` |
| Delete a Task from a Task Board | DELETE | `/tasks/v1/taskboards/{{taskBoardId}}/tasks/{{taskId}}` | `conn_mod_def::GMSWTKhJJHc::EwUepi67SJCZjmQ-fFfoFg` |

### Geofences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Geofence for a Time Clock | GET | `/time-clock/v1/time-clocks/{{timeClockId}}/geofences/{{fenceId}}` | `conn_mod_def::GMSWTUxLL58::kpCawzzSQWuQMqNvHa_Skg` |
| Get Geofences for a Time Clock | GET | `/time-clock/v1/time-clocks/{{timeClockId}}/geofences` | `conn_mod_def::GMSWTU6YBpk::3cYC9_6vSwqBIKPx_jmHmQ` |
| Delete a Geofence for a Time Clock | DELETE | `/time-clock/v1/time-clocks/{{timeClockId}}/geofences/{{fenceId}}` | `conn_mod_def::GMSWTUsUn-o::BUoMouXyTr6QXBvb1Ji19Q` |

### ManualBreaks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Time Clock's Manual Breaks | GET | `/time-clock/v1/time-clocks/{{timeClockId}}/manual-breaks` | `conn_mod_def::GMSWTcJyC6E::hwI1rvcrQjuvZwZSEDcqCQ` |
| Clock In to a Manual Break for a Time Clock | POST | `/time-clock/v1/time-clocks/{{timeClockId}}/manual-breaks/{{manualBreakId}}/clock-in` | `conn_mod_def::GMSWTdQpGxw::u7cyQUKXQJS9TARFIz2LJg` |
| Clock Out a Manual Break for a Time Clock | POST | `/time-clock/v1/time-clocks/{{timeClockId}}/manual-breaks/clock-out` | `conn_mod_def::GMSWTb618BU::-s1-JGBrQYeYPuBIDf2yPg` |

### TimeOffRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Off Requests | GET | `/time-off/v1/requests` | `conn_mod_def::GMSWT7rH0-I::UrXfIaCBQRGCnSvJkIoxvw` |
| Create a Time Off Request | POST | `/time-off/v1/requests` | `conn_mod_def::GMSWTvrYktg::zto2q0GWRTa1YCvGAMrriw` |
| Update a Time-off Request | PUT | `/time-off/v1/requests/{{requestId}}` | `conn_mod_def::GMSWT7fB_04::i7CsTsF8Q0GHzQeSvmrGdA` |

### BreadcrumbsReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Breadcrumbs Report | GET | `/time-clock/breadcrumbs/v1/report/{{fileId}}/download` | `conn_mod_def::GMSWQmsfl7g::21-iIm5RRvObif3rOQ1h2g` |
| Generate a Breadcrumbs Report | POST | `/time-clock/breadcrumbs/v1/report` | `conn_mod_def::GMSWQng13Sk::uqUwSmA4T12lO5B9eY55oQ` |

### DailySales

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Daily Sales | GET | `/sales/v1/daily-sales` | `conn_mod_def::GMSWRfgjDIA::y0rsX91nS9ma9fMHJ3bsuA` |

1 more DailySales actions are available through search.

This lists 90 of 143 actions. For anything not here, call `search_one_platform_actions` with platform `connecteam`. The full catalog is at https://www.withone.ai/knowledge/connecteam.

## When a call fails

The error comes from Connecteam, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/connecteam

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
