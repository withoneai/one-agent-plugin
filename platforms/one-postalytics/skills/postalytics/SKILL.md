---
name: postalytics
description: Postalytics is a direct mail automation platform that provides APIs, address verification, campaign management, and print-and-mail workflows, allowing marketing and operations teams to trigger personalized physical mail from CRM, marketing automation, and custom software systems. Read and write Postalytics data through One: account, campaigns, contacts, suppressionlistcontacts, webhooks, suppressionlists and more, 45 actions with real parameter documentation. Use whenever the user asks to look something up in Postalytics, create or update a record there, or build code against the Postalytics API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: postalytics
  generated-from: one-knowledge-base
---

# Postalytics through One

Postalytics is a direct mail automation platform that provides APIs, address verification, campaign management, and print-and-mail workflows, allowing marketing and operations teams to trigger personalized physical mail from CRM, marketing automation, and custom software systems.

One exposes Postalytics through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `postalytics` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Postalytics is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Postalytics account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/api/v1/account/{{id}}` | `conn_mod_def::GMSZqBUyKWQ::ZSkPx4z3T5Gc5r2UqnqxJg` |
| Get the Signed-in User's Account Information | GET | `/api/v1/account/me` | `conn_mod_def::GMSZqBj7ngQ::cEsR-gp1So-yNr0pb91T-w` |
| Create a New Account | POST | `/api/v1/account` | `conn_mod_def::GMSZp_17PqA::Em0dR4bWSNqWCMhbhadcDQ` |
| Delete an Account | DELETE | `/api/v1/account/{{id}}` | `conn_mod_def::GMSZp_93PUQ::iNFCF0tHTlGa2bF3axVZyQ` |
| Update Account | PUT | `/api/v1/account` | `conn_mod_def::GMSZqMUBMdw::lMO6n547TZqzJFu0hiwhUQ` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Stats | GET | `/api/v1/campaigns/{{id}}` | `conn_mod_def::GMSZqO_nAYk::jrMSfhbJRJmSwW9TmQOqcw` |
| List Campaigns | GET | `/api/v1/campaigns` | `conn_mod_def::GMSZqLZLgX4::n8y-daNrTzSpZLYUGfQ36g` |
| Create a New Campaign | POST | `/api/v1/campaigns` | `conn_mod_def::GMSZqLturNo::Dsrk9SlVQyehDV00cA0ooA` |
| Delete a Campaign | DELETE | `/api/v1/campaigns/{{id}}` | `conn_mod_def::GMSZqMNo92o::mwJnSyyJQfS_m_PKQPtKiw` |
| Update a Campaign's Status | PUT | `/api/v1/campaigns/{{id}}` | `conn_mod_def::GMSZqO09vho::R9cbmkCFStyRCHJcAcMNIQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Details by ID | GET | `/api/v1/contacts/details/{{id}}` | `conn_mod_def::GMSZqd9idv0::qxD8rQEAT5KzG0CVnk5iNg` |
| Get Contacts on a List | GET | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMSZqdXBCQY::QfV6Btp_Shm-exmZasqjTA` |
| Create Contact on List | POST | `/api/v1/contacts` | `conn_mod_def::GMSZqf1D4VY::V2YUQyaGTfWuYfVXKv_SIA` |
| Delete a Contact | DELETE | `/api/v1/contacts/{{id}}` | `conn_mod_def::GMSZqe-Jrxw::Np2zJvdgRZW2Qa-zXqt_9Q` |
| Update a Contact on a List | PUT | `/api/v1/contacts` | `conn_mod_def::GMSZqrkyA9c::n8lFMmwUSM2XLd_yCY5OuQ` |

### SuppressionListContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Suppression List Contact | GET | `/api/v1/lists/suppression/contacts/{{listId}}/{{contactId}}` | `conn_mod_def::GMSZrEEWY-g::eXO0GO-rT_ysbX1Hbinthw` |
| Get Contacts for a Suppression List | GET | `/api/v1/lists/suppression/contacts/{{listId}}` | `conn_mod_def::GMSZrCHILf4::YY6U53ZSQ8OmH2uRuD_bzg` |
| Create a Suppression List Contact | POST | `/api/v1/lists/suppression/contacts/{{listId}}` | `conn_mod_def::GMSZrCmmxF4::zPQYA1HoRz-4LRVeGFsHkQ` |
| Delete a Suppression List Contact | DELETE | `/api/v1/lists/suppression/contacts/{{listId}}/{{contactId}}` | `conn_mod_def::GMSZrBXrXVs::_iqVdt4HS8e1rvMwcmU_fw` |
| Update a Suppression List Contact | PUT | `/api/v1/lists/suppression/contacts/{{listId}}/{{contactId}}` | `conn_mod_def::GMSZrOksB-M::RGz06hI1Qj6sMODlJFD1-A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMSZripnRyE::Wu_VEY7YQbuzIkGM1kz8jg` |
| List Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GMSZrgxXzSM::gzBxQ2vRQz6bFjkqi2sFYw` |
| Create a Webhook | POST | `/api/v1/webhooks` | `conn_mod_def::GMSZrfYzL5c::TiA9UXPERr-7BooJv2Stng` |
| Delete a Webhook | DELETE | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMSZrhKgHrU::RRHgdsUWTMyloiOGvRm8CQ` |
| Update a Webhook | PUT | `/api/v1/webhooks` | `conn_mod_def::GMSZriUX5xc::ZCf4oBM3RN2-6Gj1ig7eVA` |

### SuppressionLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Suppression List | GET | `/api/v1/lists/suppression/{{id}}` | `conn_mod_def::GMSZq1phghU::SlxFx7w7SiGCmOSZ3d0-NQ` |
| Get Suppression Lists | GET | `/api/v1/lists/suppression` | `conn_mod_def::GMSZrBYEs7k::JD58KK4mQnmayYAdpH2oKg` |
| Create a Suppression List | POST | `/api/v1/lists/suppression` | `conn_mod_def::GMSZq2ZiIiE::WmWVxWSLTkmpq4NIOfl_BA` |
| Delete a Suppression List | DELETE | `/api/v1/lists/suppression/{{id}}` | `conn_mod_def::GMSZq1rGfWw::tbi3cJX8QbihtZMiiQWnfA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/api/v1/templates/{{id}}` | `conn_mod_def::GMSZrNYUZ4E::Qfp89m-7QFWBgrCVGNR_Gg` |
| List Templates | GET | `/api/v1/templates` | `conn_mod_def::GMSZrSM7c6s::73VWLimSSseEQgaOTx_aZw` |
| Create a Template | POST | `/api/v1/templates` | `conn_mod_def::GMSZrWoIBC8::dHjUzoo8RgS0HE0jwRM32w` |
| Delete a Template | DELETE | `/api/v1/templates/{{id}}` | `conn_mod_def::GMSZrREjlcc::khMp1rVPSE2NZTVa2ewi4Q` |

### CampaignEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Campaign Events | GET | `/api/v1/campaigns/{{id}}/events/{{dataid}}` | `conn_mod_def::GMSZqPGCOsE::hhH6FS9YR1W4VS7X4Hurqw` |
| Get Campaign Events | GET | `/api/v1/campaigns/{{id}}/events` | `conn_mod_def::GMSZqO9z73o::MU2GzXwZTFSdNeRo3QaHRw` |

### Flows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Flow by endpointId | GET | `/api/v1/flow/{{endpointId}}` | `conn_mod_def::GMSZqpP0L4g::0T_T6uuuQUmu0tYivNkuBQ` |
| List Flows | GET | `/api/v1/flow` | `conn_mod_def::GMSZqpk6dQA::fKb3TnhGSQmfQhbBE_rllA` |

### Flow

| Action | Method | Path | Action id |
|---|---|---|---|
| Enroll a Contact to a Flow | POST | `/api/v1/flow/{{endPoint}}` | `conn_mod_def::GMSZqsIYcMQ::EYwxPqCwTcKv5idprtIZrQ` |
| Unenroll a Contact From a Flow | DELETE | `/api/v1/flow/unenroll/{{endPoint}}/{{dataId}}` | `conn_mod_def::GMSZqp2ObBM::kHG3wTuuQn-r4rph-n6k4w` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Lists | GET | `/api/v1/contacts` | `conn_mod_def::GMSZqejHAHA::T0lYAlR_TRuStAsbtX5lEg` |

### CampaignDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Details | GET | `/api/v1/campaigns/{{id}}/details` | `conn_mod_def::GMSZqTDCQ_8::UVa9oOa_Q2m0LRXqkOofyw` |

### AccountIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Integrations | GET | `/api/v1/account/integrations` | `conn_mod_def::GMSZqAMuj4w::u6XOSRYmS6iIsKr-1YimdQ` |

### DripCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Drip Campaigns | GET | `/api/v1/campaigns/drips` | `conn_mod_def::GMSZqM7oRIE::tbBNbms0Q0SDQnQRWEQU-A` |

### LoginLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Login Link | POST | `/api/v1/loginlink` | `conn_mod_def::GMSZq02C7tM::k7cl3PRxTA6RfeseAmdcZw` |

### PostalyticsSendMail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Mail Using Postalytics | POST | `/api/v1/send/{{endPoint}}` | `conn_mod_def::GMSZq3soWS0::YLl0W7u4RwCMQPoQO0SWQA` |

## When a call fails

The error comes from Postalytics, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/postalytics

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
