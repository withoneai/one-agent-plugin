---
name: subvisory
description: A subscription tracking and optimization platform that helps individuals and teams monitor recurring payments, forecast spending, receive billing and trial reminders, and manage subscription details via dashboards and APIs. Read and write Subvisory data through One: categories, paymentmethods, subscriptions and more, 15 actions with real parameter documentation. Use whenever the user asks to look something up in Subvisory, create or update a record there, or build code against the Subvisory API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: subvisory
  generated-from: one-knowledge-base
---

# Subvisory through One

A subscription tracking and optimization platform that helps individuals and teams monitor recurring payments, forecast spending, receive billing and trial reminders, and manage subscription details via dashboards and APIs.

One exposes Subvisory through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `subvisory` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Subvisory is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Subvisory account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category by ID | GET | `/api/v1/categories/{{id}}` | `conn_mod_def::GJ591dca3Sw::NR254lOZRK6PCEI7QOhChw` |
| List Categories | GET | `/categories` | `conn_mod_def::GJ591kQ22d4::_I55_rDbS0CNNyFn4vWIZQ` |
| Create a Category | POST | `/categories` | `conn_mod_def::GJ591Kpenoo::BKAC5ibbQPSnSmiAZ4szUA` |
| Delete a Category | DELETE | `/api/v1/categories/{{id}}` | `conn_mod_def::GJ591V2sMuw::oonztxSSRp-h03o7TZ_3YA` |
| Update a Category | PUT | `/api/v1/categories/{{id}}` | `conn_mod_def::GJ591sLJkDY::0rasCYOWRkWNNWTDeI3NOg` |

### PaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payment Method by ID | GET | `/api/v1/payment-methods/{{id}}` | `conn_mod_def::GJ592B7PXzI::tYGuc1uESY6D6LK0NWbACg` |
| List Payment Methods | GET | `/payment-methods` | `conn_mod_def::GJ592LzNHAA::8ghTOJhuREiDN9_qha-hnA` |
| Create a Payment Method | POST | `/payment-methods` | `conn_mod_def::GJ591z1WGa8::8QM7ZmoKQfCsRnfwkGvbSg` |
| Delete a Payment Method | DELETE | `/api/v1/payment-methods/{{id}}` | `conn_mod_def::GJ5916sAM08::MZZqXKX2RKGcSM4h5Mj3_g` |
| Update a Payment Method | PUT | `/api/v1/payment-methods/{{id}}` | `conn_mod_def::GJ592V65eho::YbEzlQFRT4CR6w5InDg_BA` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscription by ID | GET | `/api/v1/subscriptions/{{id}}` | `conn_mod_def::GJ592rXkAk0::rKTMltQkQ9GPrEn-FptG3Q` |
| List Subscriptions | GET | `/subscriptions` | `conn_mod_def::GJ592x3-ao4::m_G-b9LoSvWj1ayaduUqRw` |
| Create a Subscription | POST | `/subscriptions` | `conn_mod_def::GJ592dTgT6g::6erDvnKoSsWltrMbFuZn7g` |
| Delete a Subscription | DELETE | `/subscriptions/{{id}}` | `conn_mod_def::GJ592j6SRN0::udbEi5f0RXiaZR2GytcyWw` |
| Update a Subscription | PUT | `/api/v1/subscriptions/{{id}}` | `conn_mod_def::GJ593A3LFjc::-aBgUFIwRTu0KffokAc3tw` |

## When a call fails

The error comes from Subvisory, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/subvisory

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
