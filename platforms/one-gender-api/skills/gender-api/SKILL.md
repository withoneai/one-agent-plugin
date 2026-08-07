---
name: gender-api
description: Gender-API is a data enrichment API that predicts gender from first names, email addresses, or social profiles, enabling developers and data teams to enrich customer records, personalize workflows, and support segmentation or analytics use cases in applications and pipelines. Read and write Gender-API data through One: gender, genderbyemailaddress, genderbyemailaddressmultiple, countryoforigin, accountstatistics, signup and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in Gender-API, create or update a record there, or build code against the Gender-API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gender-api
  generated-from: one-knowledge-base
---

# Gender-API through One

Gender-API is a data enrichment API that predicts gender from first names, email addresses, or social profiles, enabling developers and data teams to enrich customer records, personalize workflows, and support segmentation or analytics use cases in applications and pipelines.

One exposes Gender-API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gender-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gender-API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gender-API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Gender

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Gender by First Name | POST | `/v2/gender/by-first-name` | `conn_mod_def::GMitxIi7xSA::UPDYKs29RxiXd_CK6U3B8A` |
| Query Gender by Full Name | POST | `/v2/gender/by-full-name` | `conn_mod_def::GMitxG6xS_A::pvj8LgW5Touy_ncDgWilwg` |
| Query Multiple First Names for Gender | POST | `/v2/gender/by-first-name-multiple` | `conn_mod_def::GMitxQULk6g::YsoV-4K0Sh2V1iUjrycI_w` |

### GenderByEmailAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Query by Email Address | POST | `/v2/gender/by-email-address` | `conn_mod_def::GMitxFxXEdg::HLVMkKUgTpiqHldhPQpOZg` |

### GenderByEmailAddressMultiple

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Multiple Names by Email Address | POST | `/v2/gender/by-email-address-multiple` | `conn_mod_def::GMitxHC4GHA::KbPAgSzPQZykCKQEEolzjw` |

### CountryOfOrigin

| Action | Method | Path | Action id |
|---|---|---|---|
| Country of Origin | POST | `/v2/country-of-origin` | `conn_mod_def::GMitxHVqlGA::lA9E4rxsTbqq2OysuL5syg` |

### AccountStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Statistics | GET | `/v2/statistic` | `conn_mod_def::GMitxO_q9jA::Xuh6da3lQxer7dB4B4vgLw` |

### SignUp

| Action | Method | Path | Action id |
|---|---|---|---|
| Sign Up | POST | `/v2/sign-up` | `conn_mod_def::GMitxQaJ7ng::iL__-jcuTD6J_hARSTv1pg` |

### GenderByFullNameMultiple

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Multiple Full Names for Gender | POST | `/v2/gender/by-full-name-multiple` | `conn_mod_def::GMitxRTJxiA::fpU0ZVDGRcS_J4S_fknIkA` |

## When a call fails

The error comes from Gender-API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gender-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
