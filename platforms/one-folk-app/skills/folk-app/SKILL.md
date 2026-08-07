---
name: folk-app
description: Folk is a simple, AI-powered CRM designed for service businesses. It features spreadsheet-like interface, automated contact management, Chrome extension for one-click imports, Gmail integration, and personalized email generation for sales teams and small businesses. Read and write Folk.app data through One: companies, people, notes, reminders, webhooks, users and more, 39 actions with real parameter documentation. Use whenever the user asks to look something up in Folk.app, create or update a record there, or build code against the Folk.app API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: folk-app
  generated-from: one-knowledge-base
---

# Folk.app through One

Folk is a simple, AI-powered CRM designed for service businesses. It features spreadsheet-like interface, automated contact management, Chrome extension for one-click imports, Gmail integration, and personalized email generation for sales teams and small businesses.

One exposes Folk.app through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `folk-app` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Folk.app is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Folk.app account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/v1/companies/{{companyId}}` | `conn_mod_def::GJ2eKUlRwpQ::yCxJ7PuAQhOfeKhOvdv8rA` |
| List Companies | GET | `/companies` | `conn_mod_def::GJ2eKdM-Qgc::cdGoJPVUTrWfuNC4hsHRzQ` |
| Create a Company | POST | `/companies` | `conn_mod_def::GJ2eKHPSFCs::Oyr0O0XkRw-i0-rwEfWB-g` |
| Delete a Workspace Company | DELETE | `/v1/companies/{{companyId}}` | `conn_mod_def::GJ2eKNzeXDQ::ZG96kTPwS1Ouer82ApjUPA` |
| Search Companies (Workspace) | POST | `/v1/companies/search` | `conn_mod_def::GJ2eKpTlhHg::EEL9s0i7SRGMGt8jLUA5oA` |
| Update a Workspace Company | PATCH | `/v1/companies/{{companyId}}` | `conn_mod_def::GJ2eKxQ75GM::mjJ0yGYSTiKy0wnfCmgOlw` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person | GET | `/v1/people/{{personId}}` | `conn_mod_def::GJ2eNb_GzHc::CLuZ-wqSTJCpv5Q9s6Y3lg` |
| List People | GET | `/people` | `conn_mod_def::GJ2eNj5SLCA::CghJamNrSZqbf3oYbH5l6g` |
| Create a Person | POST | `/people` | `conn_mod_def::GJ2eNGJj4lc::faP7vS28SG6HiYS8Pz0aiQ` |
| Delete a Person | DELETE | `/people/{{personId}}` | `conn_mod_def::GJ2eNOeAgoQ::U3FG-_fUSLSuR9Lmx61LeQ` |
| Search People in the Workspace | POST | `/people/search` | `conn_mod_def::GJ2eNrlYwkM::SxsXDZ9UQx-9JsWJE-7a3w` |
| Update a Person | PATCH | `/people/{{personId}}` | `conn_mod_def::GJ2eN1a6xYo::Rw6QeoCpSjibnj06E3vIsQ` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note | GET | `/v1/notes/{{noteId}}` | `conn_mod_def::GJ2eMuS4pBU::xkOowT_mQhiVwus7kVfV1w` |
| List Notes | GET | `/v1/notes` | `conn_mod_def::GJ2eM2J1b6w::uvGpEmVWSxSdm7ntuvIh1w` |
| Create a Note | POST | `/notes` | `conn_mod_def::GJ2eMfG2px8::2tqascyXRvWNcInXLH94HQ` |
| Delete a Note | DELETE | `/v1/notes/{{noteId}}` | `conn_mod_def::GJ2eMmWJx9o::vX6Xp7rSSi6lv9LIfWKy9A` |
| Update a Note | PATCH | `/notes/{{noteId}}` | `conn_mod_def::GJ2eM-PnnWI::7S8iQua6TuCsf8-Wg2ix6w` |

### Reminders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reminder | GET | `/v1/reminders/{{reminderId}}` | `conn_mod_def::GJ2eONqB_EM::jdQzQwHPRQmsNdKwKZT5ag` |
| List Reminders | GET | `/reminders` | `conn_mod_def::GJ2eOXo-ooY::pai4IHdySUaeRHhDDvKrdA` |
| Create a Reminder | POST | `/reminders` | `conn_mod_def::GJ2eN9rS5cc::ciJeSjA5SSCRWi5qrE96uQ` |
| Delete a Reminder | DELETE | `/v1/reminders/{{reminderId}}` | `conn_mod_def::GJ2eOGm7ICo::C_HfYsUERQuEbW_5gDfnYQ` |
| Update a Reminder | PATCH | `/v1/reminders/{{reminderId}}` | `conn_mod_def::GJ2eOfgrlKk::HEvLRuRETKid5tU02i1iLQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ2ePQl6hSA::T3vJGyW4QK-eTiv4Nje51w` |
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJ2ePeMDVuI::sApT2keFQcWgCpLyWhG9Kg` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ2ePAwADug::2v8ypHjAT_O0xD1i2Ygb0w` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ2ePJOP-Fo::3kmmAurlQpeEmUINrVmMdA` |
| Update a Webhook | PATCH | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ2ePmSzQE8::mJpwmFnsRXq_zgX7JHcXqQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/v1/users/{{userId}}` | `conn_mod_def::GJ2eOojPSGU::0VFi02HyTXGI58jTLlYNog` |
| Get Current User | GET | `/v1/users/me` | `conn_mod_def::GJ2eOwlplBo::mRODl7cjQle-oWVTNaBBSg` |
| List Workspace Users | GET | `/users` | `conn_mod_def::GJ2eO48IMwg::rq9XIEA_StawWqafEZyxzQ` |

### GroupDeals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Deal | GET | `/v1/groups/{{groupId}}/{{objectType}}/{{objectId}}` | `conn_mod_def::GJ2eLYCIzt0::pwJwzOIPQQavSEPzbqqqNw` |
| Create a Group Deal | POST | `/v1/groups/{{groupId}}/{{objectType}}` | `conn_mod_def::GJ2eK5mG9-s::qFyRH67pTgi0JMWVpLZ6bA` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Group’s Deals | GET | `/v1/groups/{{groupId}}/{{objectType}}` | `conn_mod_def::GJ2eLg7Juak::kE_uT-f-S9KVsWj6mdv7Fw` |
| Search Deals in a Group | POST | `/v1/groups/{{groupId}}/{{objectType}}/search` | `conn_mod_def::GJ2eLraCFaA::w9K1lN7URcyNdp37V9VzMA` |

### GroupsDeals

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Group’s Deal | DELETE | `/v1/groups/{{groupId}}/{{objectType}}/{{objectId}}` | `conn_mod_def::GJ2eLFQAF0g::vYbECLj5Qcqtc1e1hFaJ9w` |

### GroupObjectDeals

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Group Object Deal | PATCH | `/groups/{{groupId}}/{{objectType}}/{{objectId}}` | `conn_mod_def::GJ2eL0Vki20::6PbrojAJTUiGX-1eCt3EPw` |

### GroupCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Group’s Custom Fields for an Entity Type | GET | `/v1/groups/{{groupId}}/custom-fields/{{entityType}}` | `conn_mod_def::GJ2eMCeV_GM::ikftVP5GRrG-zcgLvwOR_w` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/groups` | `conn_mod_def::GJ2eMKI-bws::FzKsLEQ4QimIK83iNhaedw` |

### Interactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Interaction | POST | `/interactions` | `conn_mod_def::GJ2eMSg_caU::Ad3VWYwYTleLe95Sai8xig` |

## When a call fails

The error comes from Folk.app, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/folk-app

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
