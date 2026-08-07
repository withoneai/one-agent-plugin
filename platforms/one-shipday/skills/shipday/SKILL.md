---
name: shipday
description: Shipday is an AI-powered delivery management platform that enables businesses to automate dispatching, manage drivers, optimize routes, and track deliveries in real time while integrating with POS and e-commerce systems to streamline last-mile operations and improve customer experience. Read and write Shipday data through One: orders, pickuporders, carriers, ondemanddelivery, ondemandavailability, completedorders and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Shipday, create or update a record there, or build code against the Shipday API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shipday
  generated-from: one-knowledge-base
---

# Shipday through One

Shipday is an AI-powered delivery management platform that enables businesses to automate dispatching, manage drivers, optimize routes, and track deliveries in real time while integrating with POS and e-commerce systems to streamline last-mile operations and improve customer experience.

One exposes Shipday through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shipday` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shipday is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shipday account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Active Orders | GET | `/orders` | `conn_mod_def::GKRd9ApGszg::P7RelndXTImTjSiKHdzEOQ` |
| Retrieve Order Details | GET | `/orders/{{ordernumber}}` | `conn_mod_def::GKRd9BQWkkg::pl1bMlpATAe997-mnI4Srg` |
| Assign an Order to a Driver | PUT | `/orders/assign/{{orderId}}/{{carrierId}}` | `conn_mod_def::GKRd8qO2U5A::DUAsSlsRRGKDspXDBICUuA` |
| Delete an Order | DELETE | `/orders/{{orderId}}` | `conn_mod_def::GKRd8p3qtuA::gZdm37S2QVCAERp6xLHtLw` |
| Edit an Order | PUT | `/order/edit/{{orderId}}` | `conn_mod_def::GKRd8x2u3Ag::8--q2T0fRqOTaLn6AK_aSA` |
| Insert Order | POST | `/orders` | `conn_mod_def::GKRd83Meq6A::UHbBMX0GQoWNLHdwM17scg` |
| Mark an Order as Ready to Pickup | PUT | `/orders/{{orderId}}/meta` | `conn_mod_def::GKRd84t70pA::gB3ELjR3Rl6QC_teoIujeA` |
| Query Orders | POST | `/orders/query` | `conn_mod_def::GKRd8yAWOzA::nlvEIYHQTf6sglp1xsCQGw` |
| Query Orders | POST | `/partner/orders` | `conn_mod_def::GKRd9bEK0ag::2zknCrCIS2eAVdwl7HylRA` |
| Unassign an Order from a Driver | PUT | `/orders/unassign/{{orderId}}` | `conn_mod_def::GKRd9BPwVTg::NnhBlF7qTqi_mu9teWA-mg` |
| Update an Order's Status | PUT | `/orders/{{orderId}}/status` | `conn_mod_def::GKRd8zNugHA::oR4xAcl9Qfifjl9ehjy-Qw` |

### PickupOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Pickup Order Details | GET | `/pickup-orders/{{orderId}}` | `conn_mod_def::GKRd9S5roBA::iXys4xiXT_GkHhFXLa5--w` |
| Delete a Pickup Order | DELETE | `/pickup-orders/{{orderId}}` | `conn_mod_def::GKRd9Stnn0A::RlixgrLoQAev0OIHsKY2Kg` |
| Edit a Pickup Order | PUT | `/pickup-orders/{{orderId}}` | `conn_mod_def::GKRd9TiEDVg::fpsvs78zRY2WDD_kCLp8Ng` |
| Insert Pickup Order | POST | `/pickup-orders` | `conn_mod_def::GKRd9TXynKg::xdOBsLTyQQmunAsJLMsuew` |

### Carriers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Carriers | GET | `/carriers` | `conn_mod_def::GKRd8qPHxGg::SdKnf7wpRsCLia5OW8dV3Q` |
| Add a Carrier | POST | `/carriers` | `conn_mod_def::GKRd8qYCdhA::lpF5AWTGSS2A1jcO5XZjLg` |
| Delete a Carrier | DELETE | `/carriers/{{carrierid}}` | `conn_mod_def::GKRd8p3uprA::Bkw5HzH4SCyboMGOg5FUtw` |

### OnDemandDelivery

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign an On-Demand Delivery to a Specific 3rd Party Provider | POST | `/on-demand/assign` | `conn_mod_def::GKRd9CaGFZg::rVweSgNpTX2KZQHNMGlyWw` |

### OnDemandAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| Check On-Demand Delivery Availability | POST | `/on-demand/availability` | `conn_mod_def::GKRd9K6QIlg::Ak7ifHI6SNaBRsSAgqzNaw` |

### CompletedOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Member's Completed Orders | GET | `/partner/members/{{companyId}}/completedOrders` | `conn_mod_def::GKRd9bESZxA::gJVOBTuUTWybeA-1PBAucw` |

### OnDemandDeliveryServiceProviders

| Action | Method | Path | Action id |
|---|---|---|---|
| List On-Demand Delivery Service Providers | GET | `/on-demand/services` | `conn_mod_def::GKRd9LHzSog::J6MrLZsySLio6TNojThaiQ` |

### OnDemandDeliveryDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get On-Demand Delivery Details for an Order | GET | `/on-demand/details/{{orderId}}` | `conn_mod_def::GKRd9LLdb_A::WzOCiUtYQNCY9P_mhIVnPw` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Member Details | GET | `/partner/members` | `conn_mod_def::GKRd9TchDnA::NAPsoB2SQQORIftBVe4GAQ` |

### OrderDeliveryProgress

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Order Delivery Progress | GET | `/order/progress/{{trackingId}}` | `conn_mod_def::GKRd9CZ_ELg::9IjqkvwJQHa9XeN2QOyEyw` |

### OnDemandDeliveryEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an On-Demand Delivery Estimate for an Order | GET | `/on-demand/estimate/{{orderId}}` | `conn_mod_def::GKRd9LMofsg::Oez2TiiRQ6GqJrYNNyfiZw` |

### OnDemandOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an On-Demand Order by Order ID | POST | `/on-demand/cancel/{{orderId}}` | `conn_mod_def::GKRd9LwQXzg::Q1QZlvGFRT6J5sY8YNogaQ` |

## When a call fails

The error comes from Shipday, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shipday

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
