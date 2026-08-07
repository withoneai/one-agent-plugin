---
name: close
description: Close is a sales engagement CRM designed to help inside sales teams close more deals. It combines calling, emailing, and activity tracking in one place for fast, efficient workflows. Read and write Close data through One: activities, activity, tasks, customactivities, webhooksubscriptions, callactivities and more, 272 actions with real parameter documentation. Use whenever the user asks to look something up in Close, create or update a record there, or build code against the Close API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: close
  generated-from: one-knowledge-base
---

# Close through One

Close is a sales engagement CRM designed to help inside sales teams close more deals. It combines calling, emailing, and activity tracking in one place for fast, efficient workflows.

One exposes Close through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `close` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Close is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Close account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Created Activity | GET | `/activity/created/{{id}}/` | `conn_mod_def::GJ1OvXjgIn4::vHDHsNAdR-u5OXVbmLRhpA` |
| List Activities (All Types) / Filter Activities | GET | `/activity/` | `conn_mod_def::GJ1Ouk0W79k::--tFkeKTQrKdbMtAA_4k2g` |
| List Created Activities | GET | `/activity/created/` | `conn_mod_def::GJ1Ovi9V8QQ::eNIL0WYzR2i_rqmpOeAEuA` |
| List FormSubmission Activities | GET | `/api/v1/activity/form_submission/` | `conn_mod_def::GJ1Ox5TH6kU::4kYI1QEWSbmRjoxwQ0enyw` |
| List Lead Merge Activities | GET | `/activity/lead_merge/` | `conn_mod_def::GJ1OyKgVzx8::cju4rqAdRfqdEzokFy4Chw` |
| List Opportunity Status Change Activities | GET | `/activity/status_change/opportunity/` | `conn_mod_def::GJ1Oz-GFU9Q::fbvNGJjzReGv96pEYR1A5A` |
| Create a Lead Status Change Activity (Lead) | POST | `/activity/status_change/lead/` | `conn_mod_def::GJ1OyRylDUI::hzKo5w_ORwSpJLcfUrZMxw` |
| Create a Note Activity | POST | `/activity/note/` | `conn_mod_def::GJ1Oy-QftjM::zVwz9_nzRZ-A36lWkvORUA` |
| Delete a FormSubmission Activity | DELETE | `/activity/form_submission/{{id}}/` | `conn_mod_def::GJ1Oxkv3wcY::TSlXh2Z8Q5GymKcvKHS1mw` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Submission Activity | GET | `/activity/form_submission/{{id}}/` | `conn_mod_def::GJ1OxrYg9Jk::IIDsb8DVQDWLSNeJUXX5sg` |
| Get a Lead Status Change Activity for a Lead | GET | `/activity/status_change/lead/{{id}}/` | `conn_mod_def::GJ1Oyjyxgj4::leb-vwgFRCaIDwZki_sREQ` |
| Get a WhatsApp Message Activity | GET | `/activity/whatsapp_message/{{id}}/` | `conn_mod_def::GJ1O1ceQsyA::BwzDi0dkSemZTOA9ywbXLA` |
| Get an EmailThread Activity | GET | `/activity/emailthread/{{id}}/` | `conn_mod_def::GJ1OwgYvSk8::-Ta3fv45QESb-8ECyotbtg` |
| Get an Opportunity Status Change Activity | GET | `/activity/status_change/opportunity/{{id}}/` | `conn_mod_def::GJ1OzzEtZv8::chGzkU9LRXCIpLEhGD8_9g` |
| List WhatsAppMessage Activities | GET | `/activity/whatsapp_message/` | `conn_mod_def::GJ1O1m-I7bA::fYiAuKd1TniP8fN81JvkCA` |
| Delete a Lead's Status Change Activity | DELETE | `/activity/status_change/lead/{{id}}/` | `conn_mod_def::GJ1OyaPw0MA::pGQ8FChoSi29Ln90PiEmUA` |
| Delete an Opportunity's OpportunityStatusChange Activity | DELETE | `/activity/status_change/opportunity/{{id}}/` | `conn_mod_def::GJ1Ozr3mCX4::wTBeHPrVRey90yqxMZL1QA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Task’s Details | GET | `/task/{{id}}/` | `conn_mod_def::GJ1PPT4Y4J0::avOM3SdDSiaNtqZt_CTxoQ` |
| List or Filter Tasks | GET | `/task/` | `conn_mod_def::GJ1PPkVokPg::Tn7WgJi3TEy3AjRybTAy4g` |
| Bulk Update Tasks | PUT | `/task/` | `conn_mod_def::GJ1PO9UBQtw::tA8-MplbSRuRnIxEnclm5w` |
| Create a Task | POST | `/task/` | `conn_mod_def::GJ1PPEhTtZQ::yDmOMmX6QleIJh43XGEPzA` |
| Delete a Task | DELETE | `/task/{{id}}/` | `conn_mod_def::GJ1PPMak8aA::6N35luw-S0y-oUf2uR5r1A` |
| Update a Task | PUT | `/task/{{id}}/` | `conn_mod_def::GJ1PPr-FHLs::sYzWXTN4QBqDUUdHUqgRXQ` |

### CustomActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Activity | GET | `/activity/custom/{{id}}/` | `conn_mod_def::GJ1Ov6NH3f4::9C6h3x9TQT2mdBlZVPbuMw` |
| List Custom Activities | GET | `/activity/custom/` | `conn_mod_def::GJ1OwKHQqjs::2wEpu0vwT8-FAo9Ya_GDXQ` |
| Create a Custom Activity | POST | `/activity/custom/` | `conn_mod_def::GJ1Ovp3si50::hinyzLs8R6yEuVzi2zjgMw` |
| Delete a Custom Activity Instance | DELETE | `/activity/custom/{{id}}/` | `conn_mod_def::GJ1OvwpFYsU::X5slD0NBQ4-yDmaINBb9UA` |
| Update a Custom Activity | PUT | `/activity/custom/{{id}}/` | `conn_mod_def::GJ1OwRWekK0::rn7B5Cc7Q5GgMugp_C-1Ng` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Subscriptions | GET | `/webhook/` | `conn_mod_def::GJ1PQ4_BtG4::C3twTam8TAGSnHY7O8WKRw` |
| Retrieve a Webhook Subscription | GET | `/webhook/{{id}}/` | `conn_mod_def::GJ1PQ_d02ys::nNuGIfMNSA6zwIDZkt6xmA` |
| Create a Webhook Subscription | POST | `/webhook/` | `conn_mod_def::GJ1PQrjHRrg::9xkQf5BLQZqF_76xq0ZTnA` |
| Delete a Webhook Subscription | DELETE | `/webhook/{{id}}/` | `conn_mod_def::GJ1PQyHK4tU::RaV3h2t9QoCPSU8C9-4Akg` |
| Update a Webhook Subscription | PUT | `/webhook/{{id}}/` | `conn_mod_def::GJ1PRG__xV0::w9AfgHDTS2S6c6pYzni2Ug` |

### CallActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call Activity by ID | GET | `/activity/call/{{id}}/` | `conn_mod_def::GJ1OuzSBvck::cUpvAJ50TLqUzw2ChrduGw` |
| List Call Activities | GET | `/activity/call/` | `conn_mod_def::GJ1Ou-MZWe8::cHFGWjbEQD2Q4a6pQCIfVg` |
| Delete a Call Activity | DELETE | `/activity/call/{{id}}/` | `conn_mod_def::GJ1Our_fk1s::KUiuqHqBS7mEBMwlTyDMjQ` |
| Update a Call Activity | PUT | `/activity/call/{{id}}/` | `conn_mod_def::GJ1OvOwMl9I::1fHuLh_USL6eHIHwHupGNw` |

### EmailActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Activity by ID | GET | `/activity/email/{{id}}/` | `conn_mod_def::GJ1OxJWfoHU::sHRkNcqUQBq3NE8S02-GZQ` |
| Create an Email Activity | POST | `/activity/email/` | `conn_mod_def::GJ1Ow1qklrA::eaA7gHnAQiavnxVKPOXG8g` |
| Delete an Email Activity | DELETE | `/activity/email/{{id}}/` | `conn_mod_def::GJ1Ow9OfwQ8::YL74FZbkSVmKDUgGK33pQw` |
| Update an Email Activity | PUT | `/activity/email/{{id}}/` | `conn_mod_def::GJ1Oxbd4YkQ::69gBn2_YQiOjrTvkDJHEmQ` |

### ActivityCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity Custom Field’s Details | GET | `/custom_field/activity/{{id}}/` | `conn_mod_def::GJ1O6KXX1_I::T-FyXfl0SRSsq5LWRAMSxw` |
| List Activity Custom Fields | GET | `/custom_field/activity/` | `conn_mod_def::GJ1O6W_Y01o::afs0bFMGSbq2N0gv3r3f-g` |
| Create an Activity Custom Field | POST | `/custom_field/activity/` | `conn_mod_def::GJ1O56X_Jb8::PRgKGIMQRmKcchu5Si61Ng` |
| Update an Activity Custom Field | PUT | `/custom_field/activity/{{id}}/` | `conn_mod_def::GJ1O6eHJyqY::TRTlrN05SaWh2wgffZFx_g` |

### NoteActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Note Activities | GET | `/activity/note/` | `conn_mod_def::GJ1OzVubxGs::Jk3wt-rsTdikvFKWiCCixA` |
| Delete a Note Activity | DELETE | `/activity/note/{{id}}/` | `conn_mod_def::GJ1OzE1A1Xo::JfQErYOFQWqDNGBDMBe8Gg` |
| Update a Note Activity | PUT | `/activity/note/{{id}}/` | `conn_mod_def::GJ1OzdAgLDw::e0PcuRh3RG2iPBzNCd6-jA` |

### ActivitySms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Activity | GET | `/activity/sms/{{id}}/` | `conn_mod_def::GJ1O0Usy6aM::NkL-jrl8RAmBXsc_3vNgfw` |
| Create an SMS Activity | POST | `/activity/sms/` | `conn_mod_def::GJ1O0FtbR8I::r_z3t26WSOCa8Nl7PA7hWQ` |
| Delete an SMS Activity | DELETE | `/activity/sms/{{id}}/` | `conn_mod_def::GJ1O0NlI9lY::wbmE6RVjRGmoFwVzcoUrVw` |

### CustomActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Custom Activity Type | GET | `/custom_activity/{{id}}/` | `conn_mod_def::GJ1O5af8N18::_PlTQ5u2TYW8jOHXExkDrA` |
| Delete a Custom Activity Type | DELETE | `/custom_activity/{{id}}/` | `conn_mod_def::GJ1O5LB4Fjc::YxZ_KVNLQTGJohDnDDSsUQ` |
| Update a Custom Activity Type | PUT | `/custom_activity/{{id}}/` | `conn_mod_def::GJ1O5iA7scw::kh-1aC_qTBea17uEuEIdOQ` |

### ContactCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Custom Field's Details | GET | `/custom_field/contact/{{id}}/` | `conn_mod_def::GJ1O62dXvrA::shjF9agqRJCf_QLLnscpUA` |
| List Contact Custom Fields | GET | `/custom_field/contact/` | `conn_mod_def::GJ1O7AWvIPA::uEkma5RsTh21rpCcLHrdSg` |
| Delete a Contact Custom Field | DELETE | `/custom_field/contact/{{id}}/` | `conn_mod_def::GJ1O6rd0TRg::5e8_U0biRySSivQux0SShw` |

### CustomObjectTypeCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Custom Object Type’s Custom Fields | GET | `/custom_field/custom_object_type/` | `conn_mod_def::GJ1O7msXv-w::nfgl9XoTThKGRgYLqpui-g` |
| Create a Custom Object Type Custom Field | POST | `/api/v1/custom_field/custom_object_type/` | `conn_mod_def::GJ1O7RUfe94::_08UFq9iQdC265WSS-24lw` |
| Update a Custom Object Type Custom Field | PUT | `/custom_field/custom_object_type/{{id}}/` | `conn_mod_def::GJ1O7t0GD94::vGPpKIuiTziZ1PcznA2WeQ` |

### BulkActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bulk Delete Action | GET | `/bulk_action/delete/{{id}}/` | `conn_mod_def::GJ1O12Y3S5Y::BczqxqzFSrCY4LPyQ1m0Cw` |
| Initiate a New Bulk Edit (Bulk Action) | POST | `/bulk_action/edit/` | `conn_mod_def::GJ1O2UeKkXA::IwpODDJsR3mp3pyTnMCnsA` |

### CustomFieldContact

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Contact Custom Field | POST | `/custom_field/contact/` | `conn_mod_def::GJ1O6knenZc::o1DmZnkeS0a1gILxogmgJQ` |
| Update a Contact Custom Field | PUT | `/custom_field/contact/{{id}}/` | `conn_mod_def::GJ1O7IZEfr4::9T3aynLtSRWhPi0CbqfpsQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object Custom Field’s Details | GET | `/custom_field/custom_object_type/{{id}}/` | `conn_mod_def::GJ1O7f6Mz0c::AF-Nyc1bQfSlUH0QuW-azw` |
| Delete a Custom Object Type Custom Field | DELETE | `/custom_field/custom_object_type/{{id}}/` | `conn_mod_def::GJ1O7YoVV8o::sxjd-5pXSH-uxe-QZkcg-g` |

### CustomFieldLead

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead Custom Field’s Details | GET | `/custom_field/lead/{{id}}/` | `conn_mod_def::GJ1O8COR03w::qyy_tauQSGWNVIRRx8vw4Q` |
| Create a New Lead Custom Field | POST | `/custom_field/lead/` | `conn_mod_def::GJ1O70SEYWI::X-mwKvtoTsmC9_drjZEpvw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User (“Me”) | GET | `/me/` | `conn_mod_def::GJ1PQT8jBWY::fw9oobPRTmqYUe8ketrl8w` |
| List Users in Your Organization | GET | `/user/` | `conn_mod_def::GJ1PQke0uD0::2TiUjCpWSKuziS9MbiqmAg` |

### ActivityCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Log an External Call Activity | POST | `/activity/call/` | `conn_mod_def::GJ1OvFecvQA::j1jHG73ARHe7QaHKRVkQTg` |

### ActivityEmailthread

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an EmailThread Activity | DELETE | `/activity/emailthread/{{id}}/` | `conn_mod_def::GJ1OwYa7cts::xknpiaolRWegzg5ufTQPeQ` |

### EmailThreadActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List EmailThread Activities | GET | `/activity/emailthread/` | `conn_mod_def::GJ1OwtaYVZg::YFf9E6ygQGKJfTM_KCQlxA` |

### ActivityEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Activities | GET | `/activity/email/` | `conn_mod_def::GJ1OxUJ0MOU::KQdP70wTTNCUsvJaemENUw` |

### LeadMergeActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead Merge Activity | GET | `/activity/lead_merge/{{id}}/` | `conn_mod_def::GJ1OyAkiL4M::vRUix1imRxiTeRKBsLEZ-A` |

### ActivitiesSms

| Action | Method | Path | Action id |
|---|---|---|---|
| List SMS Activities | GET | `/activity/sms/` | `conn_mod_def::GJ1O0fW4VGQ::P1DqhYN8TLOJ2VkqBiq-wg` |

### SmsActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an SMS Activity | PUT | `/activity/sms/{{id}}/` | `conn_mod_def::GJ1O0mwWa3I::EUZFu52lTKamIt9HOVSn_g` |

### ActivityTaskCompleted

| Action | Method | Path | Action id |
|---|---|---|---|
| List TaskCompleted Activities | GET | `/activity/task_completed/` | `conn_mod_def::GJ1O1FqKFCg::0oG3WTUqTVq2WskGXNnS2w` |

### ActivityWhatsAppMessage

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a WhatsApp Message Activity | POST | `/activity/whatsapp_message/` | `conn_mod_def::GJ1O1N5qASU::viE-AjZ_Qo62ohcbMTEmaQ` |

### WhatsAppMessageActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a WhatsAppMessage Activity | PUT | `/activity/whatsapp_message/{{id}}/` | `conn_mod_def::GJ1O1uvzjyw::6SvVcNu6RpyqjIaaOMSo_Q` |

### BulkEditActions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk Edit Actions | GET | `/bulk_action/edit/` | `conn_mod_def::GJ1O2c2fyHg::w-oHBb29TPC_XeHWpPaP3w` |

### CustomActivityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Activity Types | GET | `/custom_activity/` | `conn_mod_def::GJ1O5Rnmk8Q::TYZRZXmmSI6QP6wpMIkPZQ` |

### CustomFieldActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Activity Custom Field | DELETE | `/custom_field/activity/{{id}}/` | `conn_mod_def::GJ1O6BHAUbI::DDU9VBzAQEuSv_JvnlUiaw` |

### LeadCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Lead Custom Field | DELETE | `/custom_field/lead/{{id}}/` | `conn_mod_def::GJ1O76wrhOw::qiCmRS8sTNKvhbXCB12xJA` |

### SmsTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an SMS Template | PUT | `/sms_template/{{id}}/` | `conn_mod_def::GJ1POudvHo8::7mMLbaSQTY6K6kqou3SHQw` |

### UnsubscribeEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Unsubscribed Emails | GET | `/unsubscribe/email/` | `conn_mod_def::GJ1PP0X2SxY::D3mCvJUDQz6y6e2B4o2heg` |

### Unsubscribe

| Action | Method | Path | Action id |
|---|---|---|---|
| Resubscribe an Email Address | DELETE | `/unsubscribe/email/{{emailAddress}}/` | `conn_mod_def::GJ1PP97GAe4::bTSmn3T1S_CYVImaLTRBrw` |

### Unsubscribes

| Action | Method | Path | Action id |
|---|---|---|---|
| Unsubscribe an Email Address | POST | `/unsubscribe/email/` | `conn_mod_def::GJ1PQFzuqsw::iSmNJlUNSE-qIqZeth_XZA` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a User | GET | `/user/{{id}}/` | `conn_mod_def::GJ1PQNR-Res::HgGSzHHTS5ifB9faYNMy7A` |

### UserAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Availability Statuses | GET | `/user/availability/` | `conn_mod_def::GJ1PQbidUQk::9bNoP7PgTmCWK3FIPBBcjQ` |

This lists 90 of 272 actions. For anything not here, call `search_one_platform_actions` with platform `close`. The full catalog is at https://www.withone.ai/knowledge/close.

## When a call fails

The error comes from Close, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/close

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
