---
name: uber-eats
description: Uber Eats is a global online food ordering and delivery platform that lets consumers browse local restaurant menus, place orders for delivery or pickup, and track fulfillment in real time while connecting restaurants with a large customer base and independent couriers for logistics. Read and write Uber Eats data through One: orders, storestatus, deliveryorder, store, menus, storepreptime and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Uber Eats, create or update a record there, or build code against the Uber Eats API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: uber-eats
  generated-from: one-knowledge-base
---

# Uber Eats through One

Uber Eats is a global online food ordering and delivery platform that lets consumers browse local restaurant menus, place orders for delivery or pickup, and track fulfillment in real time while connecting restaurants with a large customer base and independent couriers for logistics.

One exposes Uber Eats through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `uber-eats` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Uber Eats is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Uber Eats account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Store's Orders with Details | GET | `/v1/delivery/store/{{store_id}}/orders` | `conn_mod_def::GI8iiGSKOLg::pMn9VyfFR5GkIgjCprRssQ` |
| Adjust an Order's Price | POST | `/v1/delivery/order/{{order_id}}/adjust-price` | `conn_mod_def::GI8iiMwTgEg::xBclwQnFTLGfyc9wOZueDg` |
| Cancel an Uber Eats Order | POST | `/v1/delivery/order/{{order_id}}/cancel` | `conn_mod_def::GI8ig2o3AMA::DVCgtPYWSwOhuzcXISgM4w` |
| Deny an Uber Eats Order | POST | `/v1/delivery/order/{{order_id}}/deny` | `conn_mod_def::GI8ih7ZL0nA::WOIq6AT_TdaVT2IzvFJ9DA` |
| Mark an Order as Ready for Pickup | POST | `/v1/delivery/order/{{order_id}}/ready` | `conn_mod_def::GI8ihDU-pmA::9-_QhUVYTW2M8VmxmkYo5Q` |
| Patch an Order's Cart | PATCH | `/v2/eats/orders/{{order_id}}/cart` | `conn_mod_def::GI8pvHJSLag::tFIUPZ5_TtmkssuY8dLP4w` |
| Update a Restaurant Delivery Status for an Order | POST | `/v1/eats/orders/{{order_id}}/restaurantdelivery/status` | `conn_mod_def::GI8pvBRB4vg::8qDx6m0zRFGq-aRNWjN26Q` |
| Update an Order's Ready-for-Pickup Time | POST | `/v1/delivery/order/{{order_id}}/update-ready-time` | `conn_mod_def::GI8ihKqOBaA::DHqvKJPjR_295yLaO0jH5Q` |

### StoreStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Store's Status | GET | `/v1/delivery/store/{{store_id}}/status` | `conn_mod_def::GI8ig9rDRig::HhF2fHb5QbywcXEdt1JT3w` |
| Set a Store's Status | POST | `/v1/delivery/store/{{store_id}}/update-store-status` | `conn_mod_def::GI8ihzqf_Hg::z28Bi_f0SRqKCjEsbF6Nsw` |

### DeliveryOrder

| Action | Method | Path | Action id |
|---|---|---|---|
| Resolve Fulfillment Issues for a Delivery Order | POST | `/v1/delivery/order/{{order_id}}/resolve-fulfillment-issues` | `conn_mod_def::GI8ihZ9EL5g::PS8a67IzSYi1FrqM8WU6cg` |
| Update Delivery Partner Count for an Order | POST | `/v1/delivery/order/{{order_id}}/update-delivery-partner-count` | `conn_mod_def::GI8iia6R3Kg::U7c_M8c7QmqqnNGFmpYDMQ` |

### Store

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Store Details | GET | `/v1/delivery/store/{{store_id}}` | `conn_mod_def::GI8ihrVxdUA::7-ILljv9RQqOhe_0Xh53CA` |
| Update Store Information | POST | `/v1/delivery/store/{{store_id}}` | `conn_mod_def::GI8ii18wA7g::jggPXHrxSrO4NbEozLCCpQ` |

### Menus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Store's Menu | GET | `/v2/eats/stores/{{store_id}}/menus` | `conn_mod_def::GI8iig4_f8A::q64eTorvStm50jac6hsEVw` |
| Upload a Store's Menu | PUT | `/v2/eats/stores/{{store_id}}/menus` | `conn_mod_def::GI8iioQ8eGg::Kk_6FnFXRKGd99AXX4g6JA` |

### StorePrepTime

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Store's Preparation Time | POST | `/v1/delivery/store/{{store_id}}/update-store-prep-time` | `conn_mod_def::GI8ihTXwMlg::7ZAvgH6_Qa-X6cN-VH_j-Q` |

### UberEatsOrder

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept an Uber Eats Order | POST | `/v1/delivery/order/{{order_id}}/accept` | `conn_mod_def::GI8iiVUKacA::GEjuQl3MTg-hPlREEvWm4w` |

### StoreMenuItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Store Menu Item | POST | `/v2/eats/stores/{{store_id}}/menus/items/{{item_id}}` | `conn_mod_def::GI8iivCLtEg::FfYh9MqQTq-WqxuZVN92Xw` |

### ByocOrderLocationEvent

| Action | Method | Path | Action id |
|---|---|---|---|
| Ingest Courier Live Location for BYOC Restaurant Orders | POST | `/v1/eats/byoc/restaurants/orders/event/location` | `conn_mod_def::GI8ii7_qreg::wtg8tVhmSO2d269VHcFmYQ` |

### EatsReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Eats Report | POST | `/v1/eats/report` | `conn_mod_def::GI8ijDNQ6mg::TMgHo0FURResTLO7PFUjLg` |

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| List Stores | GET | `/v1/delivery/stores` | `conn_mod_def::GI8ijKJ-uRA::6Zzpwf1zTEumeEaV7aet9w` |

### Order

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Uber Eats Order Details | GET | `/v1/delivery/order/{{order_id}}` | `conn_mod_def::GI8ijPfxR8g::h1Lz46LvQliAlv2vSvJKvw` |

### HolidayHours

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Store's Holiday Hours | GET | `/v1/eats/stores/{{store_id}}/holiday-hours` | `conn_mod_def::GI8pvgkc3ZA::Hll37ptGRr6UyYNV-VY4tw` |

### StoreHolidayHours

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Store's Holiday Hours | POST | `/v1/eats/stores/{{store_id}}/holiday-hours` | `conn_mod_def::GI8pvqVjZXA::bG4BRdi6R-W-24zlftnc1w` |

## When a call fails

The error comes from Uber Eats, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/uber-eats

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
