---
name: formbricks
description: Formbricks is an open-source experience management platform that provides in-product surveys, feedback collection, and user research tools through developer-friendly integrations and APIs, allowing product teams to gather contextual insights, measure satisfaction, and automate feedback workflows within web applications. Read and write Formbricks data through One: responses, surveys, webhooks, actionclasses, attributeclasses, contacts and more, 42 actions with real parameter documentation. Use whenever the user asks to look something up in Formbricks, create or update a record there, or build code against the Formbricks API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: formbricks
  generated-from: one-knowledge-base
---

# Formbricks through One

Formbricks is an open-source experience management platform that provides in-product surveys, feedback collection, and user research tools through developer-friendly integrations and APIs, allowing product teams to gather contextual insights, measure satisfaction, and automate feedback workflows within web applications.

One exposes Formbricks through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `formbricks` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Formbricks is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Formbricks account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Response by ID | GET | `/api/v1/management/responses/{{responseId}}` | `conn_mod_def::GK6_I8aialA::CPuvh7oGTTiywJusamNWFQ` |
| Get Survey Responses | GET | `/management/responses` | `conn_mod_def::GK6_I9U69QA::BDJJtQ6ZSfqTFBtQM1Wuuw` |
| Create a Response for an Environment | POST | `/api/v1/client/{{environmentId}}/responses` | `conn_mod_def::GK6_HpNJOFA::xOM4FyeDR4acd0N_tW2QNw` |
| Create Response | POST | `/management/responses` | `conn_mod_def::GK6_I8rBi5g::Se2FVlWFQZaaMb48Z2WoOg` |
| Delete Response | DELETE | `/api/v1/management/responses/{{responseId}}` | `conn_mod_def::GK6_I8a1Wfg::j9eoFe1oRyyIL7ci6Bg77w` |
| Update Response | PUT | `/api/v1/management/responses/{{responseId}}` | `conn_mod_def::GK6_JKgo2fA::52QM4ciFS2K_dIGBqxM8xg` |

### Surveys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Survey By ID | GET | `/api/v1/management/surveys/{{surveyId}}` | `conn_mod_def::GK6_JU1ytZg::bGP1T0KVS0OBLE2HxHL1xA` |
| List Surveys | GET | `/management/surveys` | `conn_mod_def::GK6_JMFbSnA::840ErWWCQmGWdOLQDt85hQ` |
| Create Survey | POST | `/management/surveys` | `conn_mod_def::GK6_JKsVxJg::xFIBeIutQ_OdES1ygJMo7A` |
| Delete Survey | DELETE | `/api/v1/management/surveys/{{surveyId}}` | `conn_mod_def::GK6_JKJyhng::lLf-eQ2DQpavmjxH3NRm6Q` |
| Update a Survey | PUT | `/api/v1/management/surveys/{{surveyId}}` | `conn_mod_def::GK6_JUdQaYA::sVF2TaDsQh2TYkaBX9FHdg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GK6_JdYaE8g::kgutHwpWR0SUFxHXcKntbA` |
| Get Webhook | GET | `/api/v1/webhooks/{{webhookId}}` | `conn_mod_def::GK6_JcW7Y2A::IfFj6GW_SKG_9cMBe2HgnA` |
| Create Webhook | POST | `/api/v1/webhooks` | `conn_mod_def::GK6_JVQOsgg::bPGIAsV4SLW8-saHLsMtlQ` |
| Delete Webhook | DELETE | `/api/v1/webhooks/{{webhookId}}` | `conn_mod_def::GK6_JUHex_g::jE5PfYykQ3SCv0ZMBrWpcA` |

### ActionClasses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Action Classes | GET | `/management/action-classes` | `conn_mod_def::GK6_IZqy7UA::J3dkoRlBSzqMZKIpl6qZpQ` |
| Get an Action Class by ID | GET | `/api/v1/management/action-classes/{{actionClassId}}` | `conn_mod_def::GK6_IZy_emg::VWFkZtvcSB6SIBvqWOgsvA` |
| Create Action Class | POST | `/api/v1/management/action-classes` | `conn_mod_def::GK6_Hrn19ig::0yDTZQnISMG9axQquhnpBg` |
| Delete Action Class | DELETE | `/api/v1/management/action-classes/{{actionClassId}}` | `conn_mod_def::GK6_IerNNqA::UpcsvA3aTIaZFgbKQs-jqw` |

### AttributeClasses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Attribute Classes | GET | `/management/attribute-classes` | `conn_mod_def::GK6_ImKJY6g::wNQIE7I9SS6s3TjTRgQMyw` |
| Get Attribute Class by ID | GET | `/api/v1/management/attribute-classes/{{attributeClassId}}` | `conn_mod_def::GK6_In1I9Dg::8FVRhtkQSZ6hU-kgkOj5vQ` |
| Create Attribute Class | POST | `/api/v1/management/attribute-classes` | `conn_mod_def::GK6_IZpGZBg::RPAuM9KATLmopGnVAG45yg` |
| Delete Attribute Class | DELETE | `/api/v1/management/attribute-classes/{{attributeClassId}}` | `conn_mod_def::GK6_IZ0kUtA::POUhiFpQTKG9RqoeZwEUPw` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Contacts | GET | `/management/contacts` | `conn_mod_def::GK6_IwLXAJA::YmGAVvbaSeSbO5ZEH6io7A` |
| Get Contact by ID | GET | `/api/v1/management/contacts/{{contactId}}` | `conn_mod_def::GK6_IwgNuBA::A5elkeRdTt-29JJeb9xXfA` |
| Update a Contact's Attributes | PUT | `/api/v1/client/{{environmentId}}/contacts/{{userId}}/attributes` | `conn_mod_def::GK6_HWkG0cA::KejElyT_QXq0WorYDafAvg` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person by ID | GET | `/api/v1/management/people/{{personId}}` | `conn_mod_def::GK6_JCiXPkg::5RkY4s8GSZW1UrESM3WT0A` |
| Delete Person | DELETE | `/api/v1/management/people/{{personId}}` | `conn_mod_def::GK6_I0_S15g::fCTKp2DnQySx3Zb-mc4YZg` |

### ContactAttributeKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Contact Attribute Keys | GET | `/management/contact-attribute-keys` | `conn_mod_def::GK6_ImtiogA::-Q34JWQkQkOltGQ1xsNd0A` |
| Get Contact Attribute Key by ID | GET | `/api/v1/management/contact-attribute-keys/{{contactAttributeKeyId}}` | `conn_mod_def::GK6_Imaqo-g::OAFNh42cS3Odjv03P5u5yQ` |

### Storage

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Public File | POST | `/api/v1/management/storage` | `conn_mod_def::GK6_JKcgMAg::kBrf5QrVRCaJDB6B1ZU0Kg` |

### SurveySingleUseLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Survey's SingleUse Links | GET | `/api/v1/management/surveys/{{surveyId}}/singleUseIds` | `conn_mod_def::GK6_JVLv6BA::bMan_tprQjKFM5gDkxFUkA` |

### ClientEnvironmentDisplays

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Client Environment Display | PUT | `/api/v1/client/{{environmentId}}/displays/{{displayId}}` | `conn_mod_def::GK6_HhUtIcA::SPw7Vq8mSwSX47qwqlkdkA` |

### Displays

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Display in an Environment | POST | `/api/v1/client/{{environmentId}}/displays` | `conn_mod_def::GK6_Hdf5KcA::5T-fn5-LR-SkNOadELNTlg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Identify a User in an Environment | POST | `/api/v1/client/{{environmentId}}/user` | `conn_mod_def::GK6_HqIPsNA::MY2YFKB8Q3iDrspwgrCZlQ` |

### ContactState

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact State | GET | `/api/v1/client/{{environmentId}}/identify/contacts/{{userId}}` | `conn_mod_def::GK6_Hbbnqcg::g6bJ9whZRP2HWE_jVEK3sQ` |

### EnvironmentState

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Environment State | GET | `/api/v1/client/{{environmentId}}/environment` | `conn_mod_def::GK6_HSynjuA::prP6GBkwTaKZ3ijZO4XAww` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/health` | `conn_mod_def::GK6_HooK11g::lxCdkOj_Tw6ykfXgWU-oJQ` |

### ClientResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Client Response | PUT | `/api/v1/client/{{environmentId}}/responses/{{responseId}}` | `conn_mod_def::GK6_IRO-NJg::TzCGEAs3R_2PVZ5KkCgduQ` |

### ContactAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Contact Attributes | GET | `/api/v1/management/contact-attributes` | `conn_mod_def::GK6_InP_Bjg::rFde6ocnRmyIiK5J_EIhpg` |

### Me

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Me | GET | `/api/v1/management/me` | `conn_mod_def::GK6_Ivefjrg::t28gV9iGSC-jNbiuF56V7g` |

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Persons | GET | `/management/people` | `conn_mod_def::GK6_Ix09jBA::Q4A1Rl_iTKyF3Cq62B4j0A` |

## When a call fails

The error comes from Formbricks, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/formbricks

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
