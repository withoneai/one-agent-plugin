---
name: one-page-crm
description: OnePageCRM is an action-focused CRM designed to help small and medium-sized businesses manage contacts, track follow-ups and drive deals by turning each lead into a prioritized next action. Read and write OnePageCRM data through One: contacts, companies, actions, calls, deals, attachments and more, 161 actions with real parameter documentation. Use whenever the user asks to look something up in OnePageCRM, create or update a record there, or build code against the OnePageCRM API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: one-page-crm
  generated-from: one-knowledge-base
---

# OnePageCRM through One

OnePageCRM is an action-focused CRM designed to help small and medium-sized businesses manage contacts, track follow-ups and drive deals by turning each lead into a prioritized next action.

One exposes OnePageCRM through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `one-page-crm` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OnePageCRM is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OnePageCRM account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Contact | GET | `/api/v3/contacts/{{contactId}}` | `conn_mod_def::GJ56GhNn7bs::NcTvXbwsRsWPOFwPLqQeRQ` |
| List a Contact’s Actions | GET | `/api/v3/contacts/{{contactId}}/actions` | `conn_mod_def::GJ56Gj6pYxs::sJ2vnj5YRsys7f9HapdcqQ` |
| List a Contact’s Relationships | GET | `/api/v3/contacts/{{contactId}}/relationships` | `conn_mod_def::GJ56G1dmZyw::ArwLpuN2STKz5IHzPvgEew` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ56GqQPcns::4MAbLqUkTOmcQYUGqb4oEQ` |
| List Contacts After the First 10,000 (Cascade Pagination) | GET | `/api/v3/contacts/cascade/{{lastId}}` | `conn_mod_def::GJ56G9J_UMA::TvpdEEXaTfyUAepy-uj5gw` |
| List Contacts After the First 10,000 (Cascade Pagination) | GET | `/api/v3/contacts/cascade/{{lastId}}` | `conn_mod_def::GJ56G9mD2BQ::IuT--n1NS-m27RU3exFD1Q` |
| List Contacts Matching a Filter | GET | `/api/v3/contacts/filters/{{filterId}}` | `conn_mod_def::GJ56HMq4cLc::j8iu21GZQciHaOEtOJsSwQ` |
| Add a Contact Photo (by Contact ID) | POST | `/api/v3/contacts/{{contactId}}/contact_photo` | `conn_mod_def::GJ56F_DKSjU::d3Yej4hpRwqB4wbY2DKrXg` |
| Assign a Tag to a Contact | PUT | `/api/v3/contacts/{{contactId}}/assign_tag/{{tagName}}` | `conn_mod_def::GJ56GIHeNV8::MeXOhwpaR5Gxd_b3SgcCow` |
| Change a Contact’s Owner | PUT | `/api/v3/contacts/{{contactId}}/change_owner/{{ownerId}}` | `conn_mod_def::GJ56GH2eaCo::0U8LDs1NTAa2ahEQZF-sBw` |
| Change a Contact’s Status | PUT | `/api/v3/contacts/{{contactId}}/change_status/{{statusId}}` | `conn_mod_def::GJ56GI8eWX4::drXKa3BRS9Ka2nQ5clBqMw` |
| Close a Contact’s Sales Cycle | PUT | `/api/v3/contacts/{{contactId}}/close_sales_cycle` | `conn_mod_def::GJ56GIKFJek::Ki7-G0EjRoinB7MwPAX2_g` |

13 more Contacts actions are available through search.

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/api/v3/companies/{{companyId}}` | `conn_mod_def::GJ56FaLMrR8::0NuZFNnOT1Op5wjXOJaiQQ` |
| List a Company’s Linked Contacts | GET | `/api/v3/companies/{{companyId}}/linked_contacts` | `conn_mod_def::GJ56FbBDLJw::FYZxTOO9Tma76tM67uS1Gg` |
| List a Company’s Pinned Attachments | GET | `/api/v3/companies/{{companyId}}/pinned_attachments` | `conn_mod_def::GJ56Fk6UkJQ::aYvQdG4PQV-7ihfmJWTuLg` |
| List Companies | GET | `/api/v3/companies` | `conn_mod_def::GJ56Fb3FLKg::uS2dJmulSP-RU6u7RYpfng` |
| Delete a Company’s Logo | DELETE | `/api/v3/companies/{{companyId}}/logo` | `conn_mod_def::GJ56FPugi4w::tKz-_SLzRBSnvnsXOTaogQ` |
| Disable a Company’s Synced Status (Status Sync) | DELETE | `/api/v3/companies/{{companyId}}/synced_status` | `conn_mod_def::GJ56FPuEO_g::w8o9oB4-QK2HML_uL51f3A` |
| Enable a Company’s Status Sync | POST | `/api/v3/companies/{{companyId}}/synced_status` | `conn_mod_def::GJ56FQWysu8::QezxUAAJTxiraaU0NsoEAw` |
| Link a Contact to a Specific Company | POST | `/api/v3/companies/{{companyId}}/linked_contacts` | `conn_mod_def::GJ56FtoFWd8::ChxouN0ESDqbK2IoyuXLhw` |
| Unlink a Contact from a Company | DELETE | `/api/v3/companies/{{companyId}}/linked_contacts/{{contactId}}` | `conn_mod_def::GJ56F4KTmUQ::w-hEXvYhTDmcj92WM7xO2w` |
| Update a Company | PUT | `/api/v3/companies/{{companyId}}` | `conn_mod_def::GJ56F1Ska4I::qPKhO6HyQd2zzLkl8uE9vw` |
| Update a Company's Logo | POST | `/api/v3/companies/{{companyId}}/logo` | `conn_mod_def::GJ56F1BAtUo::EiatHZ9TRZ-oWkSF5aNIMw` |
| Update a Company’s Logo | PATCH | `/api/v3/companies/{{companyId}}/logo` | `conn_mod_def::GJ56F1GyDgI::7iGPG1MMQVutmmaRTQsvbQ` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Action | GET | `/api/v3/actions/{{actionId}}` | `conn_mod_def::GJ56EeHln8E::V1KLJJGGRru-lESQc8Vv-w` |
| List Actions | GET | `/api/v3/actions` | `conn_mod_def::GJ56Eg0T55Q::3Nw-18FAQpu3c6H4w8bz5Q` |
| Create an Action | POST | `/api/v3/actions` | `conn_mod_def::GJ56Ed7e3qk::ErdsAj7eSaqNOdHL3m1QjQ` |
| Delete a Specific Action | DELETE | `/api/v3/actions/{{actionId}}` | `conn_mod_def::GJ56EeGx5Dg::U7GLKG3xTuyEOUxUH4CoSA` |
| Mark an Action as Done | PUT | `/api/v3/actions/{{actionId}}/mark_as_done` | `conn_mod_def::GJ56Ep2VYfk::3t-G336BQA6XLm7Om3peOw` |
| Promote an Action as the Logged-in User’s Next Action | PUT | `/api/v3/actions/{{actionId}}/promote` | `conn_mod_def::GJ56EqQfmSI::NYKSkZ9zRjaaXQHQip6fyQ` |
| Swap a User’s Next Action (Resolve Date Conflict) | PUT | `/api/v3/actions/{{actionId}}/swap` | `conn_mod_def::GJ56EuH6V5Q::n0a5Ki1NTbW6fnyyuqzPhQ` |
| Unassign an Action | PUT | `/api/v3/actions/{{actionId}}/unassign` | `conn_mod_def::GJ56Ep44mPw::wubzv_b6QJSicjGiUMmeAQ` |
| Undo an Action’s Completion | PUT | `/api/v3/actions/{{actionId}}/undo_completion` | `conn_mod_def::GJ56Eptrvyw::UK-JybogTA265hjOQSYZ7A` |
| Undo an Action’s Promotion | PUT | `/api/v3/actions/{{actionId}}/revert_promotion` | `conn_mod_def::GJ56E1EYWs0::IRxvmnPDRx6djQI9yJ079A` |
| Update an Action | PUT | `/api/v3/actions/{{actionId}}` | `conn_mod_def::GJ56E18W0gQ::Uw_iCKQVRQaN2VTq0twuIA` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call | GET | `/api/v3/calls/{{callId}}` | `conn_mod_def::GJ56FE2uAa8::O7xy8EbyRwGg_vwnLjw3mQ` |
| List a Company’s Calls | GET | `/api/v3/companies/{{companyId}}/calls` | `conn_mod_def::GJ56Fc1nZ-8::hLa8DHr2RO6tfPZohgCYGw` |
| List a Contact’s Calls | GET | `/api/v3/contacts/{{contactId}}/calls` | `conn_mod_def::GJ56G0A-3-M::d3_9bYyoRjCFV2XX1W8Ltw` |
| List Calls | GET | `/api/v3/calls` | `conn_mod_def::GJ56FIguTN8::0yNRqlr3Tuq8U9T-ROKpIg` |
| Create a Call | POST | `/api/v3/calls` | `conn_mod_def::GJ56FE_jZ9U::dyxRnbc4TBG92bnuLPDRuw` |
| Create a Call for a Contact | POST | `/api/v3/contacts/{{contactId}}/calls` | `conn_mod_def::GJ56GQTHvPw::JCxHmDfFT8SPp9ORB1iOfg` |
| Delete a Call | DELETE | `/api/v3/calls/{{callId}}` | `conn_mod_def::GJ56FFvVCEY::_J-FD3aLS9ySZenY2w-5Qg` |
| Update a Specific Call | PUT | `/api/v3/calls/{{callId}}` | `conn_mod_def::GJ56FPmZvIs::HOSCB2RjRbGKWutP2RJFVg` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal | GET | `/api/v3/deals/{{dealId}}` | `conn_mod_def::GJ56HyCLP2c::hJLfSg3NQ7uXyBpTUBLvJQ` |
| List a Company’s Deals | GET | `/api/v3/companies/{{companyId}}/deals` | `conn_mod_def::GJ56FpB-j7g::pqdPLeeqRsG2_5TUbQnbCA` |
| List Deals | GET | `/api/v3/deals` | `conn_mod_def::GJ56H0J7CtA::lVVsRhWZRlyql8yUaf-8Bg` |
| Create a Contact’s Deal | POST | `/api/v3/contacts/{{contactId}}/deals` | `conn_mod_def::GJ56GTEeZNQ::1CL2MMhcR7qCVRgFGX_oDA` |
| Create a Deal | POST | `/api/v3/deals` | `conn_mod_def::GJ56HnURCYQ::sudENMWiR5y_fbUGc5FGsQ` |
| Delete a Deal | DELETE | `/api/v3/deals/{{dealId}}` | `conn_mod_def::GJ56HwArOt8::McUp_2fpRWaMRueV-LIPxw` |
| Update a Deal | PUT | `/api/v3/deals/{{dealId}}` | `conn_mod_def::GJ56HwBLI4Y::f7_UtM_UQ9uowqQSLxrJBQ` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pre-Authorized S3 Upload Form for an Attachment | GET | `/api/v3/attachments/s3_form` | `conn_mod_def::GJ56E2TAZlY::1M465gY-TFyxFiEnmHEgCA` |
| Create an Attachment | POST | `/attachments` | `conn_mod_def::GJ56E1DxpFQ::gPv7-lEvSfytWmTU4fdyKw` |
| Delete an Attachment | DELETE | `/api/v3/attachments/{{attachmentId}}` | `conn_mod_def::GJ56E1NwFPE::70B_6AkWQ167w8ApSRLpkg` |
| Pin an Attachment to Its Owner Contact | PATCH | `/api/v3/attachments/{{attachmentId}}/pin` | `conn_mod_def::GJ56E9TsklE::Eaot_JJBTxaJ2zI8K7t53A` |
| Unpin an Attachment from Its Owner Contact | PATCH | `/api/v3/attachments/{{attachmentId}}/unpin` | `conn_mod_def::GJ56E9eyyCg::TqvKUhAtRx6j7sHqI7a6gA` |
| Update an Attachment’s Custom Filename | PATCH | `/api/v3/attachments/{{attachmentId}}` | `conn_mod_def::GJ56E-P6vQo::j8KNjrmVQLO-UlfQzDg_Eg` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting | GET | `/api/v3/meetings/{{meetingId}}` | `conn_mod_def::GJ56IPmwj9U::oYhYy8OXTsSo_iQE-Zt5yw` |
| List a Contact’s Meetings | GET | `/api/v3/contacts/{{contactId}}/meetings` | `conn_mod_def::GJ56Gy-QFYc::Y0zShyWURIe4igz8TGjJBg` |
| List Meetings | GET | `/api/v3/meetings` | `conn_mod_def::GJ56IRQpROw::dNtQ5kPVT_iMAhhbsiI81A` |
| Create a Meeting | POST | `/api/v3/meetings` | `conn_mod_def::GJ56IFXCqEM::c5gEtfTXT6OPEQnHSHkrLw` |
| Delete a Meeting | DELETE | `/api/v3/meetings/{{meetingId}}` | `conn_mod_def::GJ56IFb3njQ::wINwntJHSYmfOgbgFF7Ipg` |
| Update a Meeting | PUT | `/api/v3/meetings/{{meetingId}}` | `conn_mod_def::GJ56IPG8nrw::01WXeh0tQDuXgOpFlVoaEA` |

### CompanyFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Field | GET | `/api/v3/company_fields/{{companyFieldId}}` | `conn_mod_def::GJ56F-lHrCE::Vd6J-fzYT6CniKH5EFH8FA` |
| List Company Fields (Logged-in User’s Account) | GET | `/api/v3/company_fields` | `conn_mod_def::GJ56GA2dp5Q::IaOF4hZqRG2a6XpXonm8Mw` |
| Create a Company Field | POST | `/api/v3/company_fields` | `conn_mod_def::GJ56F1B1QYg::FUCvWxxGSX2mKfML_7IjWw` |
| Delete a Company Field | DELETE | `/api/v3/company_fields/{{companyFieldId}}` | `conn_mod_def::GJ56F-9u-Jg::O3wd3gFgRCObPnN6M7nirw` |
| Update a Company Field | PUT | `/api/v3/company_fields/{{companyFieldId}}` | `conn_mod_def::GJ56F_ENjpM::Xuxhw9rKT7SACT49JarauQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field | GET | `/api/v3/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ56HdktuH8::PeMIGCkcT1Gy9BRfrmVlog` |
| List Custom Fields | GET | `/api/v3/custom_fields` | `conn_mod_def::GJ56Hcf0AUA::-ErdnRgXSniz0-PyNFsgZw` |
| Create a Custom Field | POST | `/api/v3/custom_fields` | `conn_mod_def::GJ56HTeoewQ::rDmrgCu7TDGyHVFNDsmHXA` |
| Delete a Custom Field | DELETE | `/api/v3/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ56HbUOa9c::Jhhg68TKT1SEQXzvpuTfJQ` |
| Update a Custom Field | PUT | `/api/v3/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ56HfyHy7E::H5PakECpQEqqI4Uxec64Mg` |

### DealFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal Field | GET | `/api/v3/deal_fields/{{dealFieldId}}` | `conn_mod_def::GJ56HnHMVD0::OLdsYP8WRaSVLT-rSf17pw` |
| List Deal Fields | GET | `/api/v3/deal_fields` | `conn_mod_def::GJ56HpRPBt8::C_PqeGkBQ367EHlNaGBJxw` |
| Create a Deal Field | POST | `/deal_fields` | `conn_mod_def::GJ56Hbkue1A::7C30YItiROi1Jl32EEGdIg` |
| Delete a Deal Field | DELETE | `/api/v3/deal_fields/{{dealFieldId}}` | `conn_mod_def::GJ56HnIk-zM::RTXcPS79QPO9GEUy0Dl8pw` |
| Update a Deal Field | PUT | `/api/v3/deal_fields/{{dealFieldId}}` | `conn_mod_def::GJ56HnS7_hk::4pYLz9LVSYumgI9efcXUhw` |

### LeadSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead Source | GET | `/api/v3/lead_sources/{{leadSourceId}}` | `conn_mod_def::GJ56H6kEZ2w::bzJlN8nPQk2eFOw9asut9w` |
| List Lead Sources (Logged-in User’s Account) | GET | `/api/v3/lead_sources` | `conn_mod_def::GJ56IFVnI-4::W9vpby2aQPyCy4gDeJOm4A` |
| Create a Lead Source | POST | `/api/v3/lead_sources` | `conn_mod_def::GJ56H71h5FE::xek8osztQYOg7jNuWwfrZw` |
| Delete a Lead Source | DELETE | `/api/v3/lead_sources/{{leadSourceId}}` | `conn_mod_def::GJ56H6_HWgE::SW3JCtwHRDiDVt7h8SC60w` |
| Update a Lead Source | PUT | `/api/v3/lead_sources/{{leadSourceId}}` | `conn_mod_def::GJ56IIskGms::cQkV_uHgRuuiZiKJ2K7HVg` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note by ID | GET | `/api/v3/notes/{{noteId}}` | `conn_mod_def::GJ56IXq_olo::TdfmAT8TTDyg_PJClGKUzg` |
| List Notes | GET | `/api/v3/notes` | `conn_mod_def::GJ56IaWLekU::fhGxSTNGS7Ws0O-rO3eJpw` |
| Create a New Note | POST | `/api/v3/notes` | `conn_mod_def::GJ56IQIwJ0A::XNc3YbPWRymhsE9tqOfJ7g` |
| Delete a Note | DELETE | `/api/v3/notes/{{noteId}}` | `conn_mod_def::GJ56IYRw5R4::I8Tv8oYpTiaI3z_WZo1Llg` |
| Update a Note | PUT | `/api/v3/notes/{{noteId}}` | `conn_mod_def::GJ56IYSw3jA::XnvO-Ht4SMGRmnOXSsuzrQ` |

### PredefinedActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Predefined Action | GET | `/api/v3/predefined_actions/{{predefinedActionId}}` | `conn_mod_def::GJ56Ir5c2RI::_u6qX4rERLmGRFm-GkJpvg` |
| List Predefined Actions (for the Logged-in User’s Account) | GET | `/api/v3/predefined_actions` | `conn_mod_def::GJ56Ivwl6hU::iVcCw-5vTKSIKV8tsJio1g` |
| Create a Predefined Action | POST | `/api/v3/predefined_actions` | `conn_mod_def::GJ56IrbW1Nw::oyLUl4i9SECoQkHWkJQklg` |

2 more PredefinedActions actions are available through search.

This lists 90 of 161 actions. For anything not here, call `search_one_platform_actions` with platform `one-page-crm`. The full catalog is at https://www.withone.ai/knowledge/one-page-crm.

## When a call fails

The error comes from OnePageCRM, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/one-page-crm

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
