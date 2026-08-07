---
name: ship-station
description: ShipStation is a web-based shipping and fulfillment platform with a powerful developer API that centralizes order management, multi-carrier rate shopping, label creation, tracking, inventory integration, returns, and more—supporting over 200 carriers and scalable workflows across e-commerce businesses. Read and write ShipStation data through One: labels, batches, shipments, packages, carriers, inventorywarehouses and more, 80 actions with real parameter documentation. Use whenever the user asks to look something up in ShipStation, create or update a record there, or build code against the ShipStation API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ship-station
  generated-from: one-knowledge-base
---

# ShipStation through One

ShipStation is a web-based shipping and fulfillment platform with a powerful developer API that centralizes order management, multi-carrier rate shopping, label creation, tracking, inventory integration, returns, and more—supporting over 200 carriers and scalable workflows across e-commerce businesses.

One exposes ShipStation through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ship-station` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ShipStation is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ShipStation account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Label by ID | GET | `/v2/labels/{{labelId}}` | `conn_mod_def::GJ7FJdhP62Q::z-94ebCJRTCKd2AjUOTxIw` |
| Get a Label’s Tracking Information | GET | `/v2/labels/{{labelId}}/track` | `conn_mod_def::GJ7FJdWMb30::5lyopo5xQhCMcsxGodlBUQ` |
| List Labels | GET | `/labels` | `conn_mod_def::GJ7FJgS2YaI::_d8TdT0eT0-BSY779I9IYA` |
| Create a Return Label for an Outbound Label | POST | `/v2/labels/{{labelId}}/return` | `conn_mod_def::GJ7FJfmTftY::dmRY43kEQdCdwQXkkfHtIA` |
| Purchase a Label for a Shipment | POST | `/v2/labels/shipment/{{shipmentId}}` | `conn_mod_def::GJ7FJn2GZ0c::6-Xod-p3RQemJ7sY1fHRQA` |
| Purchase a Label Using Rate Shopper Strategy | POST | `/v2/labels/rate_shopper_id/{{rateShopperId}}` | `conn_mod_def::GJ7FJpod5_0::GAotwufsRxetAzkT09H8xQ` |
| Purchase a Shipping Label | POST | `/labels` | `conn_mod_def::GJ7FJdGIztQ::2H2UM95tRiOUqz0u90fwzA` |
| Purchase a Shipping Label From a Rate | POST | `/v2/labels/rates/{{rateId}}` | `conn_mod_def::GJ7FJnJUEig::BhqZxhhGTIKDnqog3iH0TQ` |
| Void a Label | PUT | `/v2/labels/{{labelId}}/void` | `conn_mod_def::GJ7FJmR-GaE::q-DmimQCQEKkJWcGJN0s4g` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch by External Batch ID | GET | `/v2/batches/external_batch_id/{{externalBatchId}}` | `conn_mod_def::GJ7FICzN_Y8::u5VpYIivT4WeApO9rKibJw` |
| Get a Batch by ID | GET | `/v2/batches/{{batchId}}` | `conn_mod_def::GJ7FIAdtf7c::3ACMlKfyTnqIzLF5lYOqZg` |
| List Batches | GET | `/batches` | `conn_mod_def::GJ7FILNFyDs::d07s7lUiTH2r_5DZj_XmNw` |
| Add a Shipment or Rate to a Batch | POST | `/v2/batches/{{batchId}}/add` | `conn_mod_def::GJ7FIAgn3K0::A89CkY-3Tc6MzQm7z_kwNw` |
| Archive a Batch by ID | PUT | `/v2/batches/{{batchId}}` | `conn_mod_def::GJ7FIJN8GxA::u4gzJjYCQc2FdTEKQX-E6g` |
| Create a Batch (v2) | POST | `/v2/batches` | `conn_mod_def::GJ7FIA3XO_M::k0sWTdozQVKZ-Amd0fos9w` |
| Delete a Batch by ID | DELETE | `/v2/batches/{{batchId}}` | `conn_mod_def::GJ7FIA7oP4M::QfWGZcd9TbGX5D8PLR8rVw` |
| Process a Batch’s Shipment Labels | POST | `/v2/batches/{{batchId}}/process/labels` | `conn_mod_def::GJ7FIJXWCmk::LyBW1WQSTlej1muZAfhNWQ` |
| Remove Shipments or Rates From a Batch | POST | `/v2/batches/{{batchId}}/remove` | `conn_mod_def::GJ7FIKWiIOo::B9xH6bFDR_Gr77YtlXmU_A` |

### Shipments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment by External Shipment ID | GET | `/v2/shipments/external_shipment_id/{{externalShipmentId}}` | `conn_mod_def::GJ7FKQKTi7I::8cNE9nJcQGyvVTknJ-N2UA` |
| Get a Shipment by ID | GET | `/v2/shipments/{{shipmentId}}` | `conn_mod_def::GJ7FKSknxoc::6wf0bPbVQEi4RvTqJdjKiw` |
| List a Shipment’s Rates | GET | `/v2/shipments/{{shipmentId}}/rates` | `conn_mod_def::GJ7FKZM--Wk::CoF1e_8yT665RDJkYJCwcA` |
| List Shipments | GET | `/shipments` | `conn_mod_def::GJ7FKfJV5XA::kxTBkLZWTISvYsbzvCqJLg` |
| Add a Tag to a Shipment | POST | `/v2/shipments/{{shipmentId}}/tags/{{tagName}}` | `conn_mod_def::GJ7FKQLhH7E::8qeyilULR-2W5dRdVJaEpA` |
| Cancel a Shipment | PUT | `/v2/shipments/{{shipmentId}}/cancel` | `conn_mod_def::GJ7FKSFBkrQ::f-5WHHfASZ2IR3usSFA_og` |
| Create Shipments | POST | `/v2/shipments` | `conn_mod_def::GJ7FKPfqwpA::4oY-QMMfQYuIHenJjCFicg` |
| Remove a Tag from a Shipment | DELETE | `/v2/shipments/{{shipmentId}}/tags/{{tagName}}` | `conn_mod_def::GJ7FKY_-gfY::HZEhgcj3Q_SVh9j1dwVP7w` |

### Packages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Package Type by ID | GET | `/v2/packages/{{packageId}}` | `conn_mod_def::GJ7FJ8u98t0::QAUV9TENScy3GUm2nidyMQ` |
| List Custom Package Types | GET | `/v2/packages` | `conn_mod_def::GJ7FJ7hviTQ::L535s86HQaq2PDReSrmwFA` |
| Create a Custom Package Type | POST | `/packages` | `conn_mod_def::GJ7FJ6odF4A::N0NazYX7RKi5XwZq4nE8PA` |
| Delete a Custom Package | DELETE | `/v2/packages/{{packageId}}` | `conn_mod_def::GJ7FJ_Ig08s::DJgo4lxpQSWd6XsiCAAfnQ` |
| Update a Custom Package Type by ID | PUT | `/v2/packages/{{packageId}}` | `conn_mod_def::GJ7FKGEZYoI::SIu8i6moTRmQClA3SxkK7Q` |

### Carriers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Carrier by ID | GET | `/v2/carriers/{{carrierId}}` | `conn_mod_def::GJ7FISQjBUs::pdfyrTgGTc6a7446f0RTaA` |
| Get a Carrier's Options | GET | `/v2/carriers/{{carrierId}}/options` | `conn_mod_def::GJ7FIT2vJzk::OAVnX_anSgW5OgBOMiHfng` |
| List a Carrier’s Package Types | GET | `/carriers/{{carrierId}}/packages` | `conn_mod_def::GJ7FIR4ERe8::lFJlInZ1QsGGKo_hKh5FPg` |
| List a Carrier’s Services | GET | `/v2/carriers/{{carrierId}}/services` | `conn_mod_def::GJ7FIScFSho::9lGa-k3mSISkWdC-VBa5ew` |
| List Carriers | GET | `/carriers` | `conn_mod_def::GJ7FIR9gsrQ::3F2nuhtvTOOZvXU8IXJoig` |

### InventoryWarehouses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inventory Warehouse by ID | GET | `/v2/inventory_warehouses/{{inventoryWarehouseId}}` | `conn_mod_def::GJ7FIsFtb6g::vZVzZHnERpS7KLeXDsO5vA` |
| List Inventory Warehouses | GET | `/inventory_warehouses` | `conn_mod_def::GJ7FJSXnayM::I8gGvaiQSf2hXnlknk1GzA` |
| Create an Inventory Warehouse | POST | `/inventory_warehouses` | `conn_mod_def::GJ7FIes1GMU::9Ye3OCLBQouP5qIefYnyQA` |
| Delete an Inventory Warehouse | DELETE | `/v2/inventory_warehouses/{{inventoryWarehouseId}}` | `conn_mod_def::GJ7FIrQiqRI::m0FxHY4ZRmKUK8-VremqLQ` |
| Update an Inventory Warehouse’s Name | PUT | `/v2/inventory_warehouses/{{inventoryWarehouseId}}` | `conn_mod_def::GJ7FJSaRDs8::k3Ajtgx_TN6517Sk7rR0cg` |

### Totes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tote by ID | GET | `/v2/totes/{{toteId}}` | `conn_mod_def::GJ7FKmry8ws::un9LJBglS_GrFT_ymik8wQ` |
| List Totes | GET | `/v2/totes` | `conn_mod_def::GJ7FKnV9d04::3tpOvOmxRdSWTJX5s3-Iig` |
| Create Totes in Batch | POST | `/totes` | `conn_mod_def::GJ7FKmGsZqQ::lJZXJcl8Q8qQiv94Axb19Q` |
| Delete a Tote | DELETE | `/v2/totes/{{toteId}}` | `conn_mod_def::GJ7FKlsSmTU::XN5c2akeS3q2JpEJGrgabw` |
| Update a Tote | PUT | `/v2/totes/{{toteId}}` | `conn_mod_def::GJ7FKw4VFb4::87B0rbuMQrqRRG_VRijg4w` |

### InventoryLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inventory Location by ID | GET | `/v2/inventory_locations/{{inventoryLocationId}}` | `conn_mod_def::GJ7FIqNyulI::q69zfLkpRIqmhTsdwGCWIA` |
| List Inventory Locations | GET | `/inventory_locations` | `conn_mod_def::GJ7FJJiahX4::psAJrGdnRaW5hRCs54dHgw` |
| Create an Inventory Location | POST | `/inventory_locations` | `conn_mod_def::GJ7FIaDX0Cs::sAR6Cv9AQgqCqJXMEZuYtQ` |
| Delete an Inventory Location | DELETE | `/v2/inventory_locations/{{inventoryLocationId}}` | `conn_mod_def::GJ7FIq5GYmY::tETSJowUT_y-xWX5tAYzdQ` |
| Update an Inventory Location | PUT | `/v2/inventory_locations/{{inventoryLocationId}}` | `conn_mod_def::GJ7FJSunUyY::4a1plei1TaapaLrO4xDKyw` |

### Pickups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pickup by ID | GET | `/v2/pickups/{{pickupId}}` | `conn_mod_def::GJ7FJwUDEA8::t70vwjf7Rg6fwLCpfLpgsw` |
| List Scheduled Pickups | GET | `/pickups` | `conn_mod_def::GJ7FJ0uggqE::P0QxEVXdTZa6ha0Ifxnsuw` |
| Delete a Scheduled Pickup | DELETE | `/v2/pickups/{{pickupId}}` | `conn_mod_def::GJ7FJvzYHQQ::OoGM-ePLQcqZu6s9Xixcpw` |
| Schedule a Pickup | POST | `/pickups` | `conn_mod_def::GJ7FJ6yFZzM::uO7ZW0zeQ1i1KotQkIaoKA` |

### EnvironmentWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/v2/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7FK3yu_1k::vQxS_g9hTEiyaxwAGSE1dw` |
| Create an Environment Webhook | POST | `/environment/webhooks` | `conn_mod_def::GJ7FK6_0SOA::ptyxG47sReixvSaAgE_kzg` |
| Delete an Environment Webhook | DELETE | `/v2/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7FK3oNxe0::MgRTWiZERBC9sq2Jt231TA` |
| Update an Environment Webhook | PUT | `/v2/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7FK3myf0c::3X6a9_4TQzCDRia9uDv52Q` |

### Rates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rate by ID | GET | `/v2/rates/{{rateId}}` | `conn_mod_def::GJ7FKHIMxDI::lOjKNqVwSTOmgOUpytpiiA` |
| Calculate Shipping Rates | POST | `/rates` | `conn_mod_def::GJ7FKGsrukc::wJhOZw4PQWWekfm0fKGbrA` |
| Estimate Shipping Rates | POST | `/rates/estimate` | `conn_mod_def::GJ7FKGZMmwo::t2fPjczbTwqwYPysVjaJWA` |

### Manifests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Manifest by ID | GET | `/v2/manifests/{{manifestId}}` | `conn_mod_def::GJ7FJxc7It8::vx5SZXl9TyKaSQF-Z4MsKg` |
| List Manifests | GET | `/manifests` | `conn_mod_def::GJ7FJyUx6eI::Qi6XuHV6Rba5yKRlg5rTTw` |
| Create Manifest | POST | `/manifests` | `conn_mod_def::GJ7FJm_sbeg::wZoleyxvQR2LCk7aYhcJiA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/tags` | `conn_mod_def::GJ7FKYc9uJs::AVM4XlUgS2WK8SODHEzyVw` |
| Create a Tag | POST | `/v2/tags/{{tagName}}` | `conn_mod_def::GJ7FKZQLvHI::x8X7fmhPR1aqz1ibtlGkrg` |

### Warehouses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Warehouse by ID | GET | `/v2/warehouses/{{warehouseId}}` | `conn_mod_def::GJ7FKxCsapU::Z2Rg04IxSomhRO-gz_84fg` |
| List Warehouses | GET | `/warehouses` | `conn_mod_def::GJ7FKvHWT74::ZfpfeGI2TXOl4hRDuqy9NA` |

### Fulfillments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fulfillments | GET | `/v2/fulfillments` | `conn_mod_def::GJ7FIfwCrRY::rt4EJTeeTeOyjtRYOmnFmA` |
| Create Fulfillments | POST | `/v2/fulfillments` | `conn_mod_def::GJ7FIj2K1t8::eBrqZV6lRHeMvDf9-4G1KA` |

### Inventory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inventory Levels for SKUs | GET | `/inventory` | `conn_mod_def::GJ7FJWj9eiU::p6elIvicQ8KwwSY-sL3scA` |
| Update SKU Stock Levels | POST | `/inventory` | `conn_mod_def::GJ7FJRt7_Pw::JYiybIomQWa6vi_CVFYSfw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/products` | `conn_mod_def::GJ7FKI5pEgs::WVas1r1DREWt3fUqBrTa-g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/users` | `conn_mod_def::GJ7FKu9NMKI::8G8DAtGhSTy43fPee6eWPA` |

### BatchErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Batch’s Errors | GET | `/v2/batches/{{batchId}}/errors` | `conn_mod_def::GJ7FIJ2ddu8::ax4ZuZAfQouSU0_ChhR-OQ` |

### Downloads

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Shipment Document File | GET | `/v2/downloads/{{dir}}/{{subdir}}/{{filename}}` | `conn_mod_def::GJ7FIa_kB9g::NX57hx8MQHeBZfq9CuW2vQ` |

### Tracking

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop Tracking a Package | POST | `/v2/tracking/stop` | `conn_mod_def::GJ7FKw9K4Os::579joKCjS6ODk1Rj0geJHA` |

### ToteQuantities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tote Quantities | GET | `/totes/quantities` | `conn_mod_def::GJ7FKoe9mCc::azsQK-i2TEWDzhClKAXFZA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/environment/webhooks` | `conn_mod_def::GJ7FK66lkvQ::Ya0LVAkoQQWJVRB4pOmAGw` |

## When a call fails

The error comes from ShipStation, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ship-station

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
