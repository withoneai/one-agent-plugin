---
name: happy-scribe
description: Happy Scribe is a transcription and subtitling platform that provides speech-to-text, captioning, translation, and subtitle editing tools, allowing teams and developers to convert audio and video into searchable text and localized media assets through automated and human-assisted workflows. Read and write HappyScribe data through One: transcriptions, orders, organizationmemberships, companies, exports, meetings and more, 28 actions with real parameter documentation. Use whenever the user asks to look something up in HappyScribe, create or update a record there, or build code against the HappyScribe API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: happy-scribe
  generated-from: one-knowledge-base
---

# HappyScribe through One

Happy Scribe is a transcription and subtitling platform that provides speech-to-text, captioning, translation, and subtitle editing tools, allowing teams and developers to convert audio and video into searchable text and localized media assets through automated and human-assisted workflows.

One exposes HappyScribe through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `happy-scribe` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HappyScribe is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HappyScribe account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transcriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transcriptions | GET | `/api/v1/transcriptions` | `conn_mod_def::GMcWkbIhwvo::LKUs4npsSJ-GJ9PSuArK3w` |
| Retrieve a Meeting Summary for a Transcription | GET | `/api/v1/transcriptions/{{id}}/summary` | `conn_mod_def::GMcWlH8NA0U::80phyNQkS_ijhYOn9_-JNA` |
| Retrieve a Transcription | GET | `/api/v1/transcriptions/{{id}}` | `conn_mod_def::GMcWlLhFAoM::m9SkqRM8TtKDgLDMJTcKDw` |
| Create a Transcription | POST | `/api/v1/transcriptions` | `conn_mod_def::GMcWlUkfCAk::RipJ616HR_OcQQGI8TkWRw` |
| Delete a Transcription | DELETE | `/api/v1/transcriptions/{{id}}` | `conn_mod_def::GMcWlClWVso::Yfujh4YiRT60Oi2ByjMGYw` |
| Update a Transcription | PATCH | `/api/v1/transcriptions/{{id}}` | `conn_mod_def::GMcWlIExOOw::u1O2zQH_QQS3t6sT2D7spA` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Order | GET | `/api/v1/orders/{{id}}` | `conn_mod_def::GMcWkAKUtec::i7HXyWk3QcCkAewV0X2zcQ` |
| Confirm an Order | POST | `/api/v1/orders/{{id}}/confirm` | `conn_mod_def::GMcWkB0AT1M::KM0a3zvTS7qZg8mzDNCOeg` |
| Create a Transcription or Subtitling Order | POST | `/api/v1/orders` | `conn_mod_def::GMcWkADBgiU::IJXNWqNrSLusi1qnoYindQ` |
| Create a Translation Order | POST | `/api/v1/orders/translation` | `conn_mod_def::GMcWkKyL2Zg::kpH8nuJfSUCxJE9SZ4LyIQ` |

### OrganizationMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Memberships | GET | `/api/v1/organization_memberships` | `conn_mod_def::GMcWkOC4bag::ONOfY0E0SbaaVrrWbAmXEA` |
| Add an Organization Membership | POST | `/api/v1/organization_memberships` | `conn_mod_def::GMcWkMi9vm4::YJxC1wLHQHCsu6Bu_QPz5w` |
| Remove an Organization Membership | DELETE | `/api/v1/organization_memberships/{{id}}` | `conn_mod_def::GMcWkMD0bGo::8dsBa_ikQku7lG0-RSmJGg` |
| Update an Organization Membership's Role | PATCH | `/api/v1/organization_memberships/{{id}}` | `conn_mod_def::GMcWkPHz0Ns::1SYz1s4tSzahlDN_unbHvw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/api/v1/companies` | `conn_mod_def::GMcWj11tUFE::vBh6aMtBRpGu0llRpuqJ1w` |
| Retrieve a Company by ID | GET | `/api/v1/companies/{{id}}` | `conn_mod_def::GMcWjzVadzw::k5bIaZE_SN-YcY0To2H14Q` |

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Export | GET | `/api/v1/exports/{{id}}` | `conn_mod_def::GMcWj1sD_GE::Qc3nSAyZS_Wjdu3Oe0TrUQ` |
| Create an Export | POST | `/api/v1/exports` | `conn_mod_def::GMcWj1V35f0::fo5jZL8pT1-FufYlFiurTw` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Meeting | GET | `/api/v1/meetings/{{id}}` | `conn_mod_def::GMcWj_zNm4Q::8iNQEIgWSxaGSn98ncm1EQ` |
| Create a Meeting | POST | `/api/v1/meetings` | `conn_mod_def::GMcWj_zefOM::u_kFm1znS2u6A2EaKoyHkg` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| List People | GET | `/api/v1/people` | `conn_mod_def::GMcWk5hG-DU::K9z8YCDCQwudjih68KalVA` |
| Retrieve a Person | GET | `/api/v1/people/{{id}}` | `conn_mod_def::GMcWkX4vN9Y::Dd1-LAvgRN-6Cm77S18gzQ` |

### TranslationTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Translation Task | GET | `/api/v1/task/transcription_translation/{{id}}` | `conn_mod_def::GMcWlTe1YX8::dNeQtN2ZQNOKQOJWNFPTgw` |
| Create a Translation Task | POST | `/api/v1/task/transcription_translation` | `conn_mod_def::GMcWlVFoL3Y::tqHFASQeR6SaZHjhDIMbbQ` |

### Glossaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Glossaries | GET | `/api/v1/glossaries` | `conn_mod_def::GMcWj3xTdkk::DTpjkMgjRMeWTp16lbhtuw` |

### StyleGuides

| Action | Method | Path | Action id |
|---|---|---|---|
| List Style Guides | GET | `/api/v1/style_guides` | `conn_mod_def::GMcWkY7zNeY::7F9qa1m7SnOYMru1fF9ebw` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organizations | GET | `/api/v1/organizations` | `conn_mod_def::GMcWkZ9-RbY::tXwJiv1NQ0eVlns7lWzqMA` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Signed Upload URL | GET | `/api/v1/uploads/new` | `conn_mod_def::GMcWlau1yZ8::9WUk2H10SBqoeg3Gz8Vzcw` |

## When a call fails

The error comes from HappyScribe, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/happy-scribe

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
