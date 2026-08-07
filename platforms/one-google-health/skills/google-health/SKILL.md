---
name: google-health
description: Google Health is a health and wellness app that connects wearable, app, and device data to provide a holistic view of wellbeing, with Gemini-powered coaching, personalized answers, and adaptive guidance for fitness, sleep, rest, and recovery. Read and write Google Health data through One: datapoints, subscriptions, projectsubscribers, subscribers, settings, paireddevices and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Google Health, create or update a record there, or build code against the Google Health API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-health
  generated-from: one-knowledge-base
---

# Google Health through One

Google Health is a health and wellness app that connects wearable, app, and device data to provide a holistic view of wellbeing, with Gemini-powered coaching, personalized answers, and adaptive guidance for fitness, sleep, rest, and recovery.

One exposes Google Health through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-health` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Health is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Health account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DataPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Reconcile Data Points for a User Data Type | GET | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints:reconcile` | `conn_mod_def::GMJiNdGifrg::TR_HqVyiRa6COL21p4TxDw` |
| Batch Delete Data Points for a User Data Type | POST | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints:batchDelete` | `conn_mod_def::GMJiNUGChFI::aSoM2PIfS6GgYdzPX9Dd0w` |
| Create Data Points for a User Data Type | POST | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints` | `conn_mod_def::GMJiNT-E-08::GGreD0ExQs6uYVOdlB0iIw` |
| Daily Roll Up Data Points for a User Data Type | POST | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints:dailyRollUp` | `conn_mod_def::GMJiNTxdXA8::dXGfQ9ajSdKIO6P9ZuFqNg` |
| Roll Up Data Points for a User's Data Type | POST | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints:rollUp` | `conn_mod_def::GMJiNbVbg-A::66v0oHL-Rgi2ogBD4qGj_Q` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Subscriber's Subscriptions | GET | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}/subscriptions` | `conn_mod_def::GMJiNM7n2xg::Xpa46y8-Soene_VM5l73cQ` |
| Create a Subscription for a Subscriber | POST | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}/subscriptions` | `conn_mod_def::GMJiNC1APr8::hcDxZ1zQQ3ybSS1COLrHDg` |
| Update a Subscriber Subscription for a Project | PATCH | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}/subscriptions/{{subscriptionsId}}` | `conn_mod_def::GMJiNNJC5pA::Fwov99CRTMyPi0zUlxgB2w` |

### ProjectSubscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Project Subscriber | POST | `/v4/projects/{{projectsId}}/subscribers` | `conn_mod_def::GMJiNC04OUw::SUAYYShcSRKyiwcAT2viTQ` |
| Delete a Project Subscriber | DELETE | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}` | `conn_mod_def::GMJiNDYhFyg::0xvwJQ-0Q1GmBlXpqh7Gfw` |

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Subscribers | GET | `/v4/projects/{{projectsId}}/subscribers` | `conn_mod_def::GMJiNDBmbh0::cqH0HVBATrScAbzwycVwkQ` |
| Update a Project's Subscriber | PATCH | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}` | `conn_mod_def::GMJiNGXFDts::KOm0YEJeRsmf_9gZm3LzoA` |

### Settings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Settings | GET | `/v4/users/{{usersId}}/settings` | `conn_mod_def::GMJiNk4jIQw::dGR8yWYcR4Kz4defmA79gA` |
| Update a User's Settings | PATCH | `/v4/users/{{usersId}}/settings` | `conn_mod_def::GMJiNtKtKUo::LfhX9M8DSD-Oznt4-xr_IA` |

### PairedDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Paired Device | GET | `/v4/users/{{usersId}}/pairedDevices/{{pairedDevicesId}}` | `conn_mod_def::GMJiNm9BWlM::JwSlQ9NQTOmpOEkBgEzzSQ` |
| List a User's Paired Devices | GET | `/v4/users/{{usersId}}/pairedDevices` | `conn_mod_def::GMJiNlwss-g::zMI5JlOcRX6nHb6xAMikcQ` |

### ShlManifest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get SHL Manifest | POST | `/v4/shl/m/{{externalShlId}}` | `conn_mod_def::GMJiNL6Uv2M::vM83TaH2TZ2ZjgbYY1pFdQ` |

### SubscriberSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Subscriber Subscription for a Project | DELETE | `/v4/projects/{{projectsId}}/subscribers/{{subscribersId}}/subscriptions/{{subscriptionsId}}` | `conn_mod_def::GMJiNMZnBVo::KHPWmdIYTA2brIwA5PAzyQ` |

### ShlResourceRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Forward a Resource Request for a Given SHL | GET | `/v4/shl/r/{{externalShlId}}/{{resourceToken}}` | `conn_mod_def::GMJiNMkD8A8::cY-X3B7jQUWEQ8HmPgDoUA` |

### UserDataPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Exercise TCX for a User Data Point | GET | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints/{{dataPointsId}}:exportExerciseTcx` | `conn_mod_def::GMJiNU6BbB0::ha1Q17AWQl2JHX7LFXN3tg` |

### UserDataPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Data Point | GET | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints/{{dataPointsId}}` | `conn_mod_def::GMJiNVGw7qA::6pGQV4EeT_ioA6j2hvSdfw` |

### UserDataTypeDataPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User Data Type Data Points | GET | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints` | `conn_mod_def::GMJiNdnTM_Y::0B1OaeS4Qwm6qJ1nSkJ6Tg` |

### Identity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Identity for a User | GET | `/v4/users/{{usersId}}/identity` | `conn_mod_def::GMJiNeh3rZE::gBSBgUWbSkqVNNuHosnGOw` |

### DataPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User's Data Point | PATCH | `/v4/users/{{usersId}}/dataTypes/{{dataTypesId}}/dataPoints/{{dataPointsId}}` | `conn_mod_def::GMJiNfED_C0::JQ4GYWxQR5izKsFOzQ59aA` |

### IrnProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's IRN Profile | GET | `/v4/users/{{usersId}}/irnProfile` | `conn_mod_def::GMJiNkzQaDU::rP4yaXHtTfeJ4MNtJGkmvg` |

### UserProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Profile | GET | `/v4/users/{{usersId}}/profile` | `conn_mod_def::GMJiNlfAN2E::uq1RKbUjSP2us1QxNqUEvQ` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Profile for a User | PATCH | `/v4/users/{{usersId}}/profile` | `conn_mod_def::GMJiNtA8FAg::tm8401t1RD-lAai4ov6dlg` |

## When a call fails

The error comes from Google Health, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-health

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
