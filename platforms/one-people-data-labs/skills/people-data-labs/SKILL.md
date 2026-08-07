---
name: people-data-labs
description: People Data Labs provides B2B data enrichment services with access to global datasets of professionals and companies. It helps teams improve lead scoring, segmentation, and personalization. Read and write PeopleDataLabs data through One: company, person, people, autocomplete, locations, schools and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in PeopleDataLabs, create or update a record there, or build code against the PeopleDataLabs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: people-data-labs
  generated-from: one-knowledge-base
---

# PeopleDataLabs through One

People Data Labs provides B2B data enrichment services with access to global datasets of professionals and companies. It helps teams improve lead scoring, segmentation, and personalization.

One exposes PeopleDataLabs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `people-data-labs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PeopleDataLabs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PeopleDataLabs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Clean a Company Record | GET | `/v5/company/clean` | `conn_mod_def::GJ6COIxKHxg::sohzb9TeRoyb-avF0mRhwQ` |
| Enrich a Company | GET | `/v5/company/enrich` | `conn_mod_def::GJ6COiBxN-M::SR9zWXB4T6mfDqHzvGxGfQ` |
| Clean a Company Record | POST | `/v5/company/clean` | `conn_mod_def::GJ6CON7p4Jc::EI_5LPevSpKEyhOMfQNzNA` |

### Person

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich a Person | GET | `/v5/person/enrich` | `conn_mod_def::GJ6COy96zDI::ZYpZX860TvitHrndkLitnQ` |
| Identify a Person | GET | `/v5/person/identify` | `conn_mod_def::GJ6CPDjMBSM::ZlhcEF7HTE-R-V81WgNa9A` |
| Retrieve a Person by ID | GET | `/v5/person/retrieve/{{personId}}` | `conn_mod_def::GJ6CPCdTguY::dHH5Vn_BRVGDiQNNUSdTdQ` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Search People | GET | `/v5/person/search` | `conn_mod_def::GJ6CO_RT_FQ::Pc30h-ifQD22IGSQysxdNQ` |
| Bulk Retrieve People (Person IDs) | POST | `/v5/person/retrieve/bulk` | `conn_mod_def::GJ6CO-S-EGg::KLXajVNwQOepu8kFUYjr3Q` |
| Search People (Person Search) | POST | `/v5/person/search` | `conn_mod_def::GJ6CPAXoxMA::2a83EikOTXORH7h12QAqHg` |

### Autocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Field Values | GET | `/v5/autocomplete` | `conn_mod_def::GJ6COILSDlI::p3UsfqA5TTG3B5Vvnw8MYw` |
| Autocomplete Values | POST | `/v5/autocomplete` | `conn_mod_def::GJ6COLLZkro::5eUm-iuQQlubwI8YWrpBxg` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Clean a Location | GET | `/v5/location/clean` | `conn_mod_def::GJ6COIlnWRY::dAyxPTQ5QviuauFEMQh5sA` |
| Clean a Location | POST | `/v5/location/clean` | `conn_mod_def::GJ6COVtGOSU::BlF3YuwkRwmgVt2CIrSO-Q` |

### Schools

| Action | Method | Path | Action id |
|---|---|---|---|
| Clean a School Record | GET | `/v5/school/clean` | `conn_mod_def::GJ6COW0BJtE::3-V4U2-sQ0i5_kkMg5V7Cw` |
| Clean a School Record | POST | `/v5/school/clean` | `conn_mod_def::GJ6COWiXDBg::_fUz46s6R7e4N1CxV4MScA` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Companies | GET | `/v5/company/search` | `conn_mod_def::GJ6COW7sjJI::Bdc1m3GkRCSjFXwcveNBLA` |
| Search Companies | POST | `/v5/company/search` | `conn_mod_def::GJ6COpjnXas::_KWkwBFeRO2RuVGb15HJAg` |

### JobTitle

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich a Job Title | GET | `/v5/job_title/enrich` | `conn_mod_def::GJ6COvJjV_4::Vw4t_qoaRLKukGghKDHXtQ` |
| Enrich a Job Title | POST | `/v5/job_title/enrich` | `conn_mod_def::GJ6CO1SmaWQ::THr_MQtYSvmoFSX8UgBoiw` |

### IpEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich an IP Address | GET | `/v5/ip/enrich` | `conn_mod_def::GJ6COsc-SSk::er_7PiweQDCs7f8i1U63Dw` |

### Skill

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich a Skill | GET | `/v5/skill/enrich` | `conn_mod_def::GJ6CPMazJL8::XYUCxWzRT6S9wU0QNGxJMQ` |

## When a call fails

The error comes from PeopleDataLabs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/people-data-labs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
