---
name: goody
description: Goody is a corporate gifting platform that enables businesses to send physical gifts, gift cards, and branded merchandise through integrations and workflows, allowing teams to automate employee recognition, customer outreach, and incentive programs without managing recipient addresses upfront. Read and write Goody data through One: orders, products, webhooks, orderbatches, cards, paymentmethods and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Goody, create or update a record there, or build code against the Goody API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: goody
  generated-from: one-knowledge-base
---

# Goody through One

Goody is a corporate gifting platform that enables businesses to send physical gifts, gift cards, and branded merchandise through integrations and workflows, allowing teams to automate employee recognition, customer outreach, and incentive programs without managing recipient addresses upfront.

One exposes Goody through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `goody` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Goody is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Goody account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/v1/orders` | `conn_mod_def::GK9gtr1zr2g::uNMbP-wASRKXePoj2NQW1A` |
| Retrieve an Order | GET | `/v1/orders/{{id}}` | `conn_mod_def::GK9gt0W37pg::3aP1tdNmSK6vi-bbh5-A1g` |
| Cancel an Order | POST | `/v1/orders/{{id}}/cancel` | `conn_mod_def::GK9gtqwkwwA::zslhF9baQ4GwEF_rbr1gpw` |
| Update an Order's Expiration | POST | `/v1/orders/{{id}}/update_expiration` | `conn_mod_def::GK9gt2u1Teg::VCTMG1ecQnS-m7Ni68cr1A` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Active Products | GET | `/v1/products` | `conn_mod_def::GK9gt48VMoA::yVLJw_jHQpy46si7NdN4Nw` |
| Retrieve a Product | GET | `/v1/products/{{id}}` | `conn_mod_def::GK9gt1Ntf9A::VPhYjVQKRyijHgS33gTYiw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook Endpoint | POST | `/v1/webhooks` | `conn_mod_def::GK9guBm7sFg::N3f0SXtzTSyrjg-ewy_TBQ` |
| Delete a Webhook Endpoint | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GK9guAV8rMg::b6U33295R7WRaMjL6NsH9w` |

### OrderBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Order Batches | GET | `/v1/order_batches` | `conn_mod_def::GK9gtc82IzA::qoRic3ZORdOxp2MQWRoDfw` |
| Retrieve an Order Batch | GET | `/v1/order_batches/{{id}}` | `conn_mod_def::GK9gtqB4pfg::aY-uRW8rTeyOccTZLJwwDQ` |

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Cards | GET | `/v1/cards` | `conn_mod_def::GK9gtcUdAjg::y8b2eMfYRMSHO7uYd9qtHQ` |

### PaymentMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payment Methods | GET | `/v1/payment_methods` | `conn_mod_def::GK9gt1W2Uqg::GaPw4nlXQ1qE1d5BV9m0Yw` |

### CurrentUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Current User | GET | `/v1/me` | `conn_mod_def::GK9gtcD6M4g::xZN_Iy6XTPW0un7Gh-ScUA` |

### OrderBatchPrice

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate the Price for an Order Batch | POST | `/v1/order_batches/price` | `conn_mod_def::GK9gtc_v_VA::bqIuv9QdRs20bXEvzctI0Q` |

### OrderBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Order Batch | POST | `/v1/order_batches` | `conn_mod_def::GK9gthdCJyg::Ng9v-r2ZQLaME3pvVRs65w` |

### OrderBatchOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Order Batch's Orders | GET | `/v1/order_batches/{{id}}/orders` | `conn_mod_def::GK9gtrPugXA::bbP4PCNoT9WkuSQBOpzMUw` |

### OrderBatchRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Order Batch's Recipients | GET | `/v1/order_batches/{{id}}/recipients` | `conn_mod_def::GK9gts6PtJA::rquwQ2KCTM6ylydDys0McQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/v1/workspaces` | `conn_mod_def::GK9guCBdv3g::2xurfyNZSLO4lD6hlFpZtQ` |

## When a call fails

The error comes from Goody, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/goody

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
