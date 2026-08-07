---
name: email-octopus
description: A user-friendly email marketing service that enables businesses to design, send, and automate newsletters and campaigns, manage subscriber lists, and track engagement and performance without complex setup or steep pricing. Read and write EmailOctopus data through One: contacts, lists, listfields, campaigns, tags, listtags and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in EmailOctopus, create or update a record there, or build code against the EmailOctopus API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: email-octopus
  generated-from: one-knowledge-base
---

# EmailOctopus through One

A user-friendly email marketing service that enables businesses to design, send, and automate newsletters and campaigns, manage subscriber lists, and track engagement and performance without complex setup or steep pricing.

One exposes EmailOctopus through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `email-octopus` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm EmailOctopus is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real EmailOctopus account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List Contact | GET | `/lists/{{listId}}/contacts/{{contactId}}` | `conn_mod_def::GKCtfBtD18k::V-2SovqMTyascSSOuZVRJg` |
| List a List's Contacts | GET | `/lists/{{listId}}/contacts` | `conn_mod_def::GKCtfPUe7gU::ZguM2rw-TIGwKAOsfpqDeQ` |
| Create a Contact in a List | POST | `/lists/{{listId}}/contacts` | `conn_mod_def::GKCtfC62p2s::uSfM12diRs2CAZugy3SA8A` |
| Create or Update a List Contact | PUT | `/lists/{{listId}}/contacts` | `conn_mod_def::GKCtfCQx5D0::vEjCiH-GSnKYOuT-70ccaA` |
| Delete a Contact from a List | DELETE | `/lists/{{listId}}/contacts/{{contactId}}` | `conn_mod_def::GKCtfCG4dFg::anqtEsf6R2-7Ohy9KStj8g` |
| Update Multiple Contacts in a List | PUT | `/lists/{{listId}}/contacts/batch` | `conn_mod_def::GKCtfLyE4Tg::51budb8TToKoNlNdT6II-g` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/lists/{{listId}}` | `conn_mod_def::GKCtfYF8xNE::umG_u5XRTpmm1akU90QT2A` |
| Get All Lists | GET | `/lists` | `conn_mod_def::GKCtfZY7C1o::GxQznfXeR1qTSx57IDf_Xw` |
| Create List | POST | `/lists` | `conn_mod_def::GKCtfXqHjDo::7yalrlzyS1WxhLRrUDKz5g` |
| Delete a List | DELETE | `/lists/{{listId}}` | `conn_mod_def::GKCtfX8IEP4::r9JBFSEUTcSti3YNRfyLgw` |
| Update a List | PUT | `/lists/{{listId}}` | `conn_mod_def::GKCtfhWZtpc::B-LqUgnxSU6pD1OgCSulIA` |

### ListFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a List Field | POST | `/lists/{{listId}}/fields` | `conn_mod_def::GKCtfLnK25Q::q_GvGk1ITtuQHkHKOSUEJA` |
| Delete a List Field | DELETE | `/lists/{{listId}}/fields/{{tag}}` | `conn_mod_def::GKCtfLazgkg::gzfrhMN4Qneh3wOuY0qiMA` |
| Update a List Field | PUT | `/lists/{{listId}}/fields/{{tag}}` | `conn_mod_def::GKCtfXSlzp4::aiZcXnDxTUK_jLmgQ6DOnA` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/campaigns/{{campaignId}}` | `conn_mod_def::GKCtfCGJeUM::BYMMJaClTMexrY2H0fiCvg` |
| List Campaigns | GET | `/campaigns` | `conn_mod_def::GKCteeHlYro::46Ir96JlRkOJ_yDQeBxygw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List a List's Tags | GET | `/lists/{{listId}}/tags` | `conn_mod_def::GKCtfh2588w::7L95PUtSTc2vjXFN5pltMA` |
| Create a List Tag | POST | `/lists/{{listId}}/tags` | `conn_mod_def::GKCtfgohAAc::SNZZtNiMR_aD5-ut0gHDlA` |

### ListTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a List Tag | DELETE | `/lists/{{listId}}/tags/{{tag}}` | `conn_mod_def::GKCtfg94Zy4::YU3sFZStQ_ioYYqtnQxGfw` |
| Update a List Tag | PUT | `/lists/{{listId}}/tags/{{tag}}` | `conn_mod_def::GKCtfj4CUeQ::HTQ1W7PKREm-AUM9ILIfzw` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Start an Automation for a Contact | POST | `/automations/{{automationId}}/queue` | `conn_mod_def::GKCtegRUxHA::cdPvmTKqSS6P-uQWW0GZmw` |

### CampaignLinksReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Links Report | GET | `/campaigns/{{campaignId}}/reports/links` | `conn_mod_def::GKCtega39Wo::RWoig2scRhGGYiP9O5i43Q` |

### CampaignSummaryReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Summary Report | GET | `/campaigns/{{campaignId}}/reports/summary` | `conn_mod_def::GKCte4vtQTI::NzCzzP9NTzWC0iKcU0xxIA` |

### ListContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a List Contact | PUT | `/lists/{{listId}}/contacts/{{contactId}}` | `conn_mod_def::GKCtfOPRIJQ::W6tob-VgSueNqzbzCpsaWw` |

### CampaignContactReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign's Contact Reports | GET | `/campaigns/{{campaignId}}/reports` | `conn_mod_def::GKCtegf9Ol4::G4E998zdSCKn38313Lwd1w` |

## When a call fails

The error comes from EmailOctopus, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/email-octopus

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
