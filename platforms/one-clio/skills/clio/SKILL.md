---
name: clio
description: ''. Read and write Clio data through One: documents, documenttemplates, folders, reportpresets, tasktemplatelists, activities and more, 289 actions with real parameter documentation. Use whenever the user asks to look something up in Clio, create or update a record there, or build code against the Clio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: clio
  generated-from: one-knowledge-base
---

# Clio through One

''.

One exposes Clio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `clio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Clio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Clio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Download the Document | GET | `/api/v4/documents/{{id}}/download.json` | `conn_mod_def::GLeonZN0EnA::ODK4gN_MRJitg7NEywKXKw` |
| Get a Document | GET | `/api/v4/documents/{{id}}.json` | `conn_mod_def::GLeonbGznhg::CVtorpDeRaaMj3qM40ul8Q` |
| List Documents | GET | `/api/v4/documents.json` | `conn_mod_def::GLeonqarMig::0VHVzjA8TaeZmapsPHQZ5w` |
| Copy a Document | POST | `/api/v4/documents/{{id}}/copy.json` | `conn_mod_def::GLeonZNkN9g::0lncLBpBQrmY6XR7mU3mgA` |
| Create Document | POST | `/api/v4/documents.json` | `conn_mod_def::GLeonWv9OlA::g4kqKfufTQaqnPvL2snaGw` |
| Delete a Document | DELETE | `/api/v4/documents/{{id}}.json` | `conn_mod_def::GLeonWvOmNA::BS-bj8AxSsO-8YNOv-lKhA` |
| Save As Latest Version for a Document | POST | `/api/v4/documents/{{id}}/versions/{{documentVersionId}}/save_as_latest_version.json` | `conn_mod_def::GLeonLX99wg::CXNUpj_rQWuxRh3bOlpubg` |
| Update a Document | PATCH | `/api/v4/documents/{{id}}.json` | `conn_mod_def::GLeonlHVkzg::VATXO2FWSTy1C1VYNcBbEA` |

### DocumentTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Document Template | GET | `/api/v4/document_templates/{{id}}/download.json` | `conn_mod_def::GLeom_yf3Qg::HJ5vt7PHQx2onwWSqJxcPg` |
| Get a Document Template | GET | `/api/v4/document_templates/{{id}}.json` | `conn_mod_def::GLeonMR4uLg::XqD6ZXRGTNy889wkC1oqOQ` |
| List Document Templates | GET | `/api/v4/document_templates.json` | `conn_mod_def::GLeonNmnvbA::3hITXZQzQDibNDzyT4rekA` |
| Create a Document Template | POST | `/api/v4/document_templates.json` | `conn_mod_def::GLeonB6u7xA::EHmfypzjRlCUpz7DhmB0Cw` |
| Delete a Document Template | DELETE | `/api/v4/document_templates/{{id}}.json` | `conn_mod_def::GLeom_yrnNg::P-p8kZ2sR5OTEGKrH5oWcg` |
| Update a Document Template | PATCH | `/api/v4/document_templates/{{id}}.json` | `conn_mod_def::GLeonL0TRhA::eH3F_ssxSt-OoQ5hDpamNw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder by ID | GET | `/api/v4/folders/{{id}}.json` | `conn_mod_def::GLeooCe12Bg::i5X6zgcoRqK6fR-0G9Lelw` |
| List Folder Contents | GET | `/api/v4/folders/list.json` | `conn_mod_def::GLeooFc2F4g::bX0NSFt3RbSme4qyEoXK9g` |
| List Folders | GET | `/api/v4/folders.json` | `conn_mod_def::GLeooHU3F3g::9u1U5ttlSRGxlDx4_KLSbA` |
| Create Folder | POST | `/api/v4/folders.json` | `conn_mod_def::GLeooCHhACA::2fLJPhYKQVCaIkCKh2W56Q` |
| Delete a Folder | DELETE | `/api/v4/folders/{{id}}.json` | `conn_mod_def::GLeooBoq8MA::07Gq4QiQStypRaZaFsARAQ` |
| Update Folder | PATCH | `/api/v4/folders/{{id}}.json` | `conn_mod_def::GLeooR4e2mA::K9cE4OKoRz6QH8wXJvjADQ` |

### ReportPresets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Report Preset by ID | GET | `/api/v4/report_presets/{{id}}.json` | `conn_mod_def::GLeorUUmBmg::mWqBVQx7SFybbMXFZcNcqA` |
| List Report Presets | GET | `/api/v4/report_presets.json` | `conn_mod_def::GLeorUL-KRA::NqX95pazTkafwZCtolCxiw` |
| Create Report Preset | POST | `/api/v4/report_presets.json` | `conn_mod_def::GLeorR7blKA::uQqSQIGWQraQL-0lz5dkng` |
| Delete a Report Preset | DELETE | `/api/v4/report_presets/{{id}}.json` | `conn_mod_def::GLeorRDm5yg::-AvoMU1cT5uezNg2l8GxsA` |
| Generate Report for a Report Preset | POST | `/api/v4/report_presets/{{id}}/generate_report.json` | `conn_mod_def::GLeorQxdV8g::usJ6lyAQT5-ES7ZClzLsvw` |
| Update a Report Preset by ID | PATCH | `/api/v4/report_presets/{{id}}.json` | `conn_mod_def::GLeorgA3mOA::5djvmTo9QqiwKufnIsxZ6A` |

### TaskTemplateLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Template List | GET | `/api/v4/task_template_lists/{{id}}.json` | `conn_mod_def::GLeosDz2ANA::7C3fVDAmRIWiZUL1omCsiA` |
| List Task Template Lists | GET | `/api/v4/task_template_lists.json` | `conn_mod_def::GLeosFFY_1A::wP5aUZTpRiKk_WH2VWgRuw` |
| Copy a Task Template List | POST | `/api/v4/task_template_lists/{{id}}/copy.json` | `conn_mod_def::GLeor1w42Ig::zlQaumo8QxiPOUY65F1rRg` |
| Create Task Template Lists | POST | `/api/v4/task_template_lists.json` | `conn_mod_def::GLeor1xM3Yg::83PkEnQIRDS0z-cy8Q-VQw` |
| Delete a Task Template List | DELETE | `/api/v4/task_template_lists/{{id}}.json` | `conn_mod_def::GLeor188VIg::9yNnU9LIR_qVPHs-t9ZxwQ` |
| Update a Task Template List | PATCH | `/api/v4/task_template_lists/{{id}}.json` | `conn_mod_def::GLeosDfQjzA::y9c1J3B-RJ-WIQa-CEO81Q` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity by ID | GET | `/api/v4/activities/{{id}}.json` | `conn_mod_def::GLeohpwpuqg::EeOabiUqRtmVEh7hI_UPow` |
| List Activities | GET | `/api/v4/activities.json` | `conn_mod_def::GLeohwGPoVA::lEG8oaJ6QuCbPq6t-YKhsw` |
| Create Activity | POST | `/api/v4/activities.json` | `conn_mod_def::GLeohpDwXKA::lWGU0fLlSFCcJDSdjLVDiQ` |
| Delete an Activity | DELETE | `/api/v4/activities/{{id}}.json` | `conn_mod_def::GLeohm8jEnA::GTNZD-jrQ4mAqLfZR-Puog` |
| Update Activity | PATCH | `/api/v4/activities/{{id}}.json` | `conn_mod_def::GLeoholShHg::QmLWUAJAQwGzuPNHMNN6pA` |

### ActivityDescriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity Description by ID | GET | `/api/v4/activity_descriptions/{{id}}.json` | `conn_mod_def::GLeoh65lCYg::w6OOSFyRTiCc_RlZdHWAjw` |
| List Activity Descriptions | GET | `/api/v4/activity_descriptions.json` | `conn_mod_def::GLeoh9sOZvA::NmWoVaEtS1GNgauMclYcUw` |
| Create Activity Description | POST | `/api/v4/activity_descriptions.json` | `conn_mod_def::GLeoh6pyoXg::nI6ZL7vySQ2AY3g2ExSchg` |
| Delete an Activity Description | DELETE | `/api/v4/activity_descriptions/{{id}}.json` | `conn_mod_def::GLeoh5HsR6g::ryNekDlCQP-1XBBpnFQAXA` |
| Update an Activity Description | PATCH | `/api/v4/activity_descriptions/{{id}}.json` | `conn_mod_def::GLeoh7liYGA::-Zt7FWGeRBOdrGO7obC0rQ` |

### ActivityRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity Rate by ID | GET | `/api/v4/activity_rates/{{id}}.json` | `conn_mod_def::GLeoiJbmnPg::hw3folaLTmqFVhj4YAQwHA` |
| List ActivityRates | GET | `/api/v4/activity_rates.json` | `conn_mod_def::GLeoiKn1UjA::kwUgi3KXSZ2ryFuhTOcRug` |
| Create Activity Rate | POST | `/api/v4/activity_rates.json` | `conn_mod_def::GLeoiHPP2wg::-hi-HqNiTVWA07m3DGXa8A` |
| Delete an Activity Rate | DELETE | `/api/v4/activity_rates/{{id}}.json` | `conn_mod_def::GLeoiHO2rbg::jXKJL17uTO2P3-W1KNW1fw` |
| Update a Single Activity Rate | PATCH | `/api/v4/activity_rates/{{id}}.json` | `conn_mod_def::GLeoiIXMGog::uSDkI7AIRvSvPoQAn1U07A` |

### BankTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bank Transaction by ID | GET | `/api/v4/bank_transactions/{{id}}.json` | `conn_mod_def::GLeoijyAbDg::TZiYsop1QUGpdx34R_dMEg` |
| List Bank Transactions | GET | `/api/v4/bank_transactions.json` | `conn_mod_def::GLeoiw_jG5g::VuE8YbXTTg-vCOCw0Oahjg` |
| Create Bank Transaction | POST | `/api/v4/bank_transactions.json` | `conn_mod_def::GLeoih_OUqg::0WkEuJiHQTCzdJxcrBAT4A` |
| Delete a Bank Transaction | DELETE | `/api/v4/bank_transactions/{{id}}.json` | `conn_mod_def::GLeoihqB9DA::Q3SjpbwqSNGLsAws99Rn3w` |
| Update a Bank Transaction | PATCH | `/api/v4/bank_transactions/{{id}}.json` | `conn_mod_def::GLeoivDqkJA::kQSxA8bEQKei6SY7Fe9JaQ` |

### Bills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bill by ID | GET | `/api/v4/bills/{{id}}.json` | `conn_mod_def::GLeojSuJBoA::-13tl-9wQTWkqVa5I5Rq-w` |
| List Bills | GET | `/api/v4/bills.json` | `conn_mod_def::GLeojZkvOyg::kbQF5LTrTcmZ4DRMIJ_M0g` |
| Preview a Bill | GET | `/api/v4/bills/{{id}}/preview.json` | `conn_mod_def::GLeojQcr6bA::R4eVF4lKQNa9puw_TvGnMg` |
| Delete or Void a Bill | DELETE | `/api/v4/bills/{{id}}.json` | `conn_mod_def::GLeojB1Hbsg::HW2QQWFWTqmIHY56C6WSxg` |
| Update a Bill | PATCH | `/api/v4/bills/{{id}}.json` | `conn_mod_def::GLeojT41f0g::cRNLQztxQzuxwysh7F6tkg` |

### CalendarEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Calendar Entry by ID | GET | `/api/v4/calendar_entries/{{id}}.json` | `conn_mod_def::GLeojkqIbjA::hBuu3uK6Tm6pwhituHp_bA` |
| List Calendar Entries | GET | `/api/v4/calendar_entries.json` | `conn_mod_def::GLeojnTllZA::0jvLbsg-TnOErOFDzAYf8Q` |
| Create Calendar Entries | POST | `/api/v4/calendar_entries.json` | `conn_mod_def::GLeojRmOzog::22vsq017SlSmL-Jug_asfg` |
| Delete a Calendar Entry | DELETE | `/api/v4/calendar_entries/{{id}}.json` | `conn_mod_def::GLeojiszftA::_XskRmpVQoWx0HIjUA0osw` |
| Update a Calendar Entry | PATCH | `/api/v4/calendar_entries/{{id}}.json` | `conn_mod_def::GLeojkqN5KA::Uqza6VBvSxCL15040l_2xA` |

### CalendarEntryEventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Entry Event Types | GET | `/api/v4/calendar_entry_event_types.json` | `conn_mod_def::GLeojy_1T2A::bLbEwB4tTBe98SkvwDp2Dw` |
| Show a Calendar Entry Event Type | GET | `/api/v4/calendar_entry_event_types/{{id}}.json` | `conn_mod_def::GLeojyxGNcg::p-ctaTCcSPuiPVC4IBqM3g` |
| Create Calendar Entry Event Type | POST | `/api/v4/calendar_entry_event_types.json` | `conn_mod_def::GLeojnDxg7g::lDelOaDpSf6PoPJ8QxH1MQ` |
| Delete a Calendar Entry Event Type | DELETE | `/api/v4/calendar_entry_event_types/{{id}}.json` | `conn_mod_def::GLeojxp2Hvg::dQvuGwCeTCiYywEVhL2oqQ` |
| Update a Calendar Entry Event Type | PATCH | `/api/v4/calendar_entry_event_types/{{id}}.json` | `conn_mod_def::GLeojzAmy1g::p4VN4xGoRU6G0eLY5CKhFg` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Calendar by ID | GET | `/api/v4/calendars/{{id}}.json` | `conn_mod_def::GLeoj9TThHA::T2jYusKOTWiqDwA-i3B13g` |
| List Calendars | GET | `/api/v4/calendars.json` | `conn_mod_def::GLeokK0zj7g::R6kiv5_yTIS6i9nOsHeToQ` |
| Create Calendar | POST | `/api/v4/calendars.json` | `conn_mod_def::GLeoj8ldpiA::TKb2mEYITIWweBDwnlz03w` |
| Delete a Calendar | DELETE | `/api/v4/calendars/{{id}}.json` | `conn_mod_def::GLeoj8s9hcg::_-XLuh3_SNC_k7lhD3PgdQ` |
| Update a Calendar | PATCH | `/api/v4/calendars/{{id}}.json` | `conn_mod_def::GLeokHyBGag::8zcCIwA5Q7qz8Revxx8j-A` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment | GET | `/api/v4/comments/{{id}}.json` | `conn_mod_def::GLeoko-LIUA::4_4WjEqvSri8N_qzWw9mZw` |
| List Comments | GET | `/api/v4/comments.json` | `conn_mod_def::GLeokpcmwwA::G4Moxu3LSSKlcIfCpVMC5A` |
| Create Comment | POST | `/api/v4/comments.json` | `conn_mod_def::GLeoknyv3AA::v_vHqLFjSMuK9qhO5cAafw` |
| Delete a Comment | DELETE | `/api/v4/comments/{{id}}.json` | `conn_mod_def::GLeoknynixg::y5hDxgTqSfSS_1SbVaRIFA` |
| Update a Comment | PATCH | `/api/v4/comments/{{id}}.json` | `conn_mod_def::GLeokzpiXAA::GO3Lp0PaTu-OZYzvKci-yQ` |

### Communications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Communication by ID | GET | `/api/v4/communications/{{id}}.json` | `conn_mod_def::GLeok1Ecx6A::3Eg9gkLrSzOmvjJkJz4jTQ` |
| List Communications | GET | `/api/v4/communications.json` | `conn_mod_def::GLeok8CZI6g::n6qWSKCgSJugT3G44ITCfA` |
| Create Communication | POST | `/api/v4/communications.json` | `conn_mod_def::GLeok0Z1aJg::xmSyWp2XRAueGXo7xnut0w` |
| Delete a Communication | DELETE | `/api/v4/communications/{{id}}.json` | `conn_mod_def::GLeokzl6JrA::CyqX7ZLvSj2UR9WC3kagHA` |
| Update a Communication | PATCH | `/api/v4/communications/{{id}}.json` | `conn_mod_def::GLeolG85Pag::V2UrVkzNSSC1HekYuxIhQQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/api/v4/contacts/{{id}}.json` | `conn_mod_def::GLeolJAqArg::5G5ezjZYTNKGI5MghtiFXQ` |
| List Contacts | GET | `/api/v4/contacts.json` | `conn_mod_def::GLeolOQB-Cg::ddaCUBQ0SKmTnOsj59irgg` |
| Create Contact | POST | `/api/v4/contacts.json` | `conn_mod_def::GLeolG8yCeg::8Q7UVjGWSRGGL0qpmMQMZw` |
| Delete a Contact | DELETE | `/api/v4/contacts/{{id}}.json` | `conn_mod_def::GLeolGmJ6yg::aUxc9v-hTuqKhSFJkehgPg` |
| Update a Contact | PATCH | `/api/v4/contacts/{{id}}.json` | `conn_mod_def::GLeolaj_pEA::ZpLZnlFSSmmRRZAFyiMZdw` |

### CustomActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CustomAction by ID | GET | `/api/v4/custom_actions/{{id}}.json` | `conn_mod_def::GLeol2BOgHA::9LiqLS2fSuyQkrf-xUHxPg` |
| List Custom Actions | GET | `/api/v4/custom_actions.json` | `conn_mod_def::GLeol365C-g::sVXqAvfrTZCio-VUGhgFlQ` |
| Create Custom Action | POST | `/api/v4/custom_actions.json` | `conn_mod_def::GLeol0ta3pg::DeNBr3IhRJmUKdo1xqHeBA` |

2 more CustomActions actions are available through search.

This lists 90 of 289 actions. For anything not here, call `search_one_platform_actions` with platform `clio`. The full catalog is at https://www.withone.ai/knowledge/clio.

## When a call fails

The error comes from Clio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/clio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
