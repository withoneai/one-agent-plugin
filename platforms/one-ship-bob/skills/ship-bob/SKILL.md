---
name: ship-bob
description: ShipBob is a comprehensive e-commerce fulfillment and logistics platform that manages order processing, inventory distribution across 60+ global warehouses, and two-day shipping with built-in analytics and customization—enabling brands to scale operations like Amazon’s logistics network. Read and write ShipBob data through One: shipments, products, orders, inventorylevels, webhooksubscriptions, returnorders and more, 68 actions with real parameter documentation. Use whenever the user asks to look something up in ShipBob, create or update a record there, or build code against the ShipBob API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ship-bob
  generated-from: one-knowledge-base
---

# ShipBob through One

ShipBob is a comprehensive e-commerce fulfillment and logistics platform that manages order processing, inventory distribution across 60+ global warehouses, and two-day shipping with built-in analytics and customization—enabling brands to scale operations like Amazon’s logistics network.

One exposes ShipBob through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ship-bob` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ShipBob is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ShipBob account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Shipments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment | GET | `/2026-01/shipment/{{shipmentId}}` | `conn_mod_def::GJ7DvAcv0TI::-4pJOsp2TzCSYo-7kfptmA` |
| Get a Shipment by Order ID and Shipment ID | GET | `/2026-01/order/{{orderId}}/shipment/{{shipmentId}}` | `conn_mod_def::GJ7DvBFeHyU::fOdLQXsWRiaNUbKyyfOL-g` |
| Get a Shipment’s Timeline | GET | `/2026-01/shipment/{{shipmentId}}/timeline` | `conn_mod_def::GJ7DvI2AD7A::ct52XceiSgyQW48sx64rKA` |
| List All Shipments for an Order | GET | `/2026-01/order/{{orderId}}/shipment` | `conn_mod_def::GJ7DusUmFzE::LjMsqPOHTeeaKEcJTQg4TA` |
| Batch Cancel Shipments | POST | `/2026-01/shipment:batchCancel` | `conn_mod_def::GJ7DuaoUHDI::0kKJysB0QXOW126kjoueew` |
| Cancel a Shipment | POST | `/2026-01/shipment/{{shipmentId}}:cancel` | `conn_mod_def::GJ7DuY8xumc::HcuU-nGdQIeLs7Znphko0g` |
| Cancel a Shipment for an Order | POST | `/2026-01/order/{{orderId}}/shipment/{{shipmentId}}:cancel` | `conn_mod_def::GJ7DuZvfyu0::f83d1pR1TAKUWp86cAti-Q` |
| Mark Tracking Uploaded for Multiple Shipments | POST | `/2026-01/shipment:batchUpdateTrackingUpload` | `conn_mod_def::GJ7DvJHtKnY::7FXw03EeS8OYVuU_jtX-GA` |
| Simulate a Shipment (Sandbox Only) | POST | `/2026-01/simulate/shipment` | `conn_mod_def::GJ7DwOjRFzI::8JfFO76XSiyK4htOukUmPw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product | GET | `/2026-01/product/{{productId}}` | `conn_mod_def::GJ7DvZaQcgc::30__igQIS9GJniFHdjrQhw` |
| List Products | GET | `/2026-01/product` | `conn_mod_def::GJ7Dvli6MIo::dyXbw_94TW-DIiuqjNoCSA` |
| Add Variants to a Product | POST | `/2026-01/product/{{productId}}/variants` | `conn_mod_def::GJ7DvIz6xFA::xTfaVOnVRZirPX8JYQGYtg` |
| Create Product | POST | `/2026-01/product` | `conn_mod_def::GJ7DvStTFIs::kyKl-DWXQJ-H4_3WvCN0ug` |
| Delete a Product Bundle | DELETE | `/2026-01/product/{{productId}}` | `conn_mod_def::GJ7DvYcud1o::2sNuTOXAT1SwHzHG49ax4Q` |
| Move Variants Between Products (Target Product) | POST | `/2026-01/product/{{productId}}:moveVariants` | `conn_mod_def::GJ7Dvun3ytY::awMRSqlLQV6BRJ8B1PtpOg` |
| Move Variants to a New Product | POST | `/2026-01/product:moveVariants` | `conn_mod_def::GJ7Dvtk_Ntw::zLlPsFhKSg-h9bFKvbONEg` |
| Update a Product | PATCH | `/2026-01/product/{{productId}}` | `conn_mod_def::GJ7DvuW-LfU::Bxmzwmn0S96DXEgyiF2ISQ` |
| Update a Product’s Variants | PATCH | `/2026-01/product/{{productId}}/variants` | `conn_mod_def::GJ7Dvtxjx7k::pSrlOrRfTKiPtmpNUTQlhA` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order | GET | `/2026-01/order/{{orderId}}` | `conn_mod_def::GJ7Duq4TGlU::ZSJMAeR2RhaHiw6AJiRtgQ` |
| Get an Order’s Store Order JSON Data | GET | `/2026-01/order/{{orderId}}/store-order-json` | `conn_mod_def::GJ7Duq_g5C4::vk39oy3aShiGs7x9wDF7yA` |
| List Orders | GET | `/2026-01/order` | `conn_mod_def::GJ7Du2SOsAA::-39pURptRUSw6Oa6mk1tvw` |
| Cancel an Order (and Associated Shipments) | POST | `/2026-01/order/{{orderId}}:cancel` | `conn_mod_def::GJ7DujROyGE::pm_9mTbhSeWzkl8_hPkcQg` |
| Create Order | POST | `/2026-01/order` | `conn_mod_def::GJ7Duafes1w::fFUNoKMsSO6TkfuRqFVQ5g` |
| Estimate Fulfillment Cost For Order | POST | `/2026-01/order:estimate` | `conn_mod_def::GJ7DurTUku4::UukUB293QYanemMcwt7KUA` |

### InventoryLevels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Inventory Levels | GET | `/2026-01/inventory-level` | `conn_mod_def::GJ7DuERgcJ8::fQmMpx6RTKWrV7f2vXDbpw` |
| Get Inventory Levels for an Inventory Item | GET | `/2026-01/inventory-level/{{inventoryId}}` | `conn_mod_def::GJ7DuQFXjR4::fyuNRIKPQ8uKUCRFJCgT8g` |
| Get Inventory Levels Grouped by Fulfillment Center for an Inventory Item | GET | `/2026-01/inventory-level/{{inventoryId}}/locations` | `conn_mod_def::GJ7DuQcnZ6o::nSjXovmhTbCtRQDhdVsWuQ` |
| Get Inventory Levels Grouped by Fulfillment Center Locations | GET | `/2026-01/inventory-level/locations` | `conn_mod_def::GJ7DuDh_iX4::3H8XE9F9SKueRnJaNFYjWw` |
| Get Inventory Levels Grouped by Lot for an Inventory Item | GET | `/2026-01/inventory-level/{{inventoryId}}/lots` | `conn_mod_def::GJ7DuQgnA1s::fdf2seu0T5GcJXcKxgatlA` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Subscriptions | GET | `/2026-01/webhook` | `conn_mod_def::GJ7Dwatgkds::7i9q8L3xTyu0yDFXkEJ7bg` |
| Create Webhook Subscription | POST | `/2026-01/webhook` | `conn_mod_def::GJ7DwaQ8lkU::8UUhB_pOQv6kza_dDqMoVA` |
| Delete a Webhook Subscription | DELETE | `/2026-01/webhook/{{id}}` | `conn_mod_def::GJ7DwjMHMGc::ckyMNtHHTIKUbgXFIAYiDg` |

### ReturnOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Return Order | GET | `/2026-01/return/{{id}}` | `conn_mod_def::GJ7DwOxIlTc::7B9eUFmDRtOepjHQ_Z09KA` |
| Get Return Orders | GET | `/2026-01/return` | `conn_mod_def::GJ7DwS2rixQ::BzJfRmZVQp2Nby4I3EPG8g` |
| Cancel a Return Order | POST | `/2026-01/return/{{id}}:cancel` | `conn_mod_def::GJ7DwDH9eG4::mGPa9LaBR_qHH5KthA9tRg` |

### Variants

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Variant to a Bundle | POST | `/2026-01/variant/{{variantId}}:convertToBundle` | `conn_mod_def::GJ7DvKQux-A::OkxEWsc2Q_O6p3jKw_E6-Q` |
| Merge Variants Into a Target Variant | POST | `/2026-01/variant/{{variantId}}` | `conn_mod_def::GJ7DviHl0-Y::8m-iXL0VSQKoI9i9Q8DziA` |

### WarehouseReceivingOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Warehouse Receiving Orders | GET | `/2026-01/receiving` | `conn_mod_def::GJ7Dv4Ax5jo::mnIxJB5wSL6gciNACc0NUw` |
| Cancel a Warehouse Receiving Order | POST | `/2026-01/receiving/{{id}}` | `conn_mod_def::GJ7Dvszhze4::urXjUWg9Q_GDtUe_FPI9Qg` |

### Receiving

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Warehouse Receiving Order | GET | `/2026-01/receiving/{{id}}` | `conn_mod_def::GJ7Dv2jRaVw::QLSr_xSBS3-Ci6-PXR8vhg` |
| Create Warehouse Receiving Order | POST | `/2026-01/receiving` | `conn_mod_def::GJ7Dv2aWkTk::QfKuUZCtQfWNR5BWKVWxKg` |

### Returns

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Return Order | POST | `/2026-01/return` | `conn_mod_def::GJ7DwDgN8yw::NBr2L0OMRDuGLVTFPFE0dQ` |
| Edit a Return Order | PUT | `/2026-01/return/{{id}}` | `conn_mod_def::GJ7DwOX0Sf4::BvVoSlmjRQicqqDi5iZfZg` |

### Taxonomy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Taxonomy Node’s Parent | GET | `/2026-01/taxonomy/{{id}}/parent` | `conn_mod_def::GJ7DvhA2AmE::ak79TIQCQCiSThYgTdMMRw` |
| Get Taxonomy Node by ID | GET | `/2026-01/taxonomy/{{id}}` | `conn_mod_def::GJ7DviRd6Fs::Pdw-MvcIQj2UV40ekKEzDw` |

### ShipmentLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment's Logs | GET | `/2026-01/shipment/{{shipmentId}}/logs` | `conn_mod_def::GJ7Du9tfmEs::lEN2zn9GSDqtuMdHGQqU7g` |
| Get Shipment Logs for an Order’s Shipment | GET | `/2026-01/order/{{orderId}}/shipment/{{shipmentId}}/logs` | `conn_mod_def::GJ7Du9uHjyw::sUCFN0CeRMSw7KRVHaNcRQ` |

### Inventories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Inventories | GET | `/2026-01/inventory` | `conn_mod_def::GJ7DuDfKWC8::YY04j2tSQTOyXgS63qSDWA` |

### Taxonomies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Taxonomies | GET | `/2026-01/taxonomy` | `conn_mod_def::GJ7DviRCYbg::bfylYyWoRzi17aRRIKpwMQ` |

### ReceivingDistributions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Inventory Distributions by WRO ID | GET | `/2026-01/receiving/{{id}}/distributions` | `conn_mod_def::GJ7Dv5mF_NQ::SZROeaaZQT6PY1rvvdL4Ew` |

### ReceivingOrderLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Warehouse Receiving Order’s Box Labels (PDF) | GET | `/2026-01/receiving/{{id}}/labels` | `conn_mod_def::GJ7DwBVmfWQ::XBPwuYBUQyyQA_e8nHSc5g` |

### ReceivingOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Set External Sync Flag for Warehouse Receiving Orders (WROs) | POST | `/2026-01/receiving:setExternalSync` | `conn_mod_def::GJ7DwHNh2Ik::mo7H4jG_SPOOIvDVqKLLcg` |

### ReceivingOrderBoxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Boxes for a Warehouse Receiving Order | GET | `/2026-01/receiving/{{id}}/boxes` | `conn_mod_def::GJ7DwCcrvEM::V1b9XrbaR02Z1BPoTohVpA` |

### SandboxSimulations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sandbox Simulation’s Status | GET | `/2026-01/simulate/status/{{simulationId}}` | `conn_mod_def::GJ7DwO13900::mosblhPzTNyEKJcFdKT2zg` |

### InventoryHistoryEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Inventory History Events | POST | `/2026-01/inventory/history:query` | `conn_mod_def::GJ7DuQ2icEM::vHUCekL0RKu6z4cQ3tuyKA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/2026-01/location` | `conn_mod_def::GJ7DuPF4BDA::6-4AxXhDTCeE-_kv3JHGpQ` |

### TransactionFees

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transaction Fees | GET | `/2026-01/transaction-fees` | `conn_mod_def::GJ7Dt3rXGu0::N_2iuAtjSqGUuHj83JZAbg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/2026-01/invoices` | `conn_mod_def::GJ7Dt6A3OFE::emX5u9EwRBGGoGrCpI7bQg` |

### InvoiceTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transactions for an Invoice | GET | `/2026-01/invoices/{{invoiceId}}/transactions` | `conn_mod_def::GJ7Dt6mLkhQ::n5ZWIjWURW2BwExH1Kp_tQ` |

### Inventory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inventory Item | GET | `/2026-01/inventory/{{inventoryId}}` | `conn_mod_def::GJ7DuB72zcc::siNX1uDUQpq0UbW41YUVXA` |

### InventoryLevelsLots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Inventory Levels Grouped By Lot | GET | `/2026-01/inventory-level/lots` | `conn_mod_def::GJ7DuG2iRik::jKqFNr2eR2m3yYLXO66heA` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Transactions | POST | `/2026-01/transactions:query` | `conn_mod_def::GJ7Dt6n8hjY::xG8iVQl8SxmEK4UwBYJd4g` |

### ShippingMethods

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shipping Methods | GET | `/2026-01/shipping-method` | `conn_mod_def::GJ7DvLKwBTk::j34WlKWJQdmz64pXKt7l7w` |

### ProductVariants

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Product’s Variants | GET | `/2026-01/product/{{productId}}/variants` | `conn_mod_def::GJ7DvSqDSOg::fxkuXv6pSwuYB116Cwv34w` |

### PackagingRequirements

| Action | Method | Path | Action id |
|---|---|---|---|
| List Packaging Requirements | GET | `/2026-01/packaging-requirement` | `conn_mod_def::GJ7DvWHkR6M::1SpuEEfPRB2Ngl_Z91dlKA` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channels | GET | `/2026-01/channel` | `conn_mod_def::GJ7Dt5N5_Rk::DEeUXZC7QcKA6sOt4_By1g` |

### ShipmentTimelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment Status Timeline by Order ID and Shipment ID | GET | `/2026-01/order/{{orderId}}/shipment/{{shipmentId}}/timeline` | `conn_mod_def::GJ7Du-hxPs8::UnkoZTFbRDKgRcwL0fR2GA` |

### FulfillmentCenters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fulfillment Centers | GET | `/2026-01/fulfillment-center` | `conn_mod_def::GJ7Dv2Ogkcc::pMlOahPXS_GuNcXwlGtYKw` |

## When a call fails

The error comes from ShipBob, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ship-bob

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
