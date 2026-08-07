---
name: ship-engine
description: ShipEngine (rebranded as ShipStation API) is a multi-carrier shipping API that lets developers integrate rate calculation, label creation, address validation, tracking, and returns into applications, powering scalable fulfillment across 200+ carriers globally. Read and write ShipEngine data through One: shipments, labels, batches, warehouses, tags, carriers and more, 96 actions with real parameter documentation. Use whenever the user asks to look something up in ShipEngine, create or update a record there, or build code against the ShipEngine API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ship-engine
  generated-from: one-knowledge-base
---

# ShipEngine through One

ShipEngine (rebranded as ShipStation API) is a multi-carrier shipping API that lets developers integrate rate calculation, label creation, address validation, tracking, and returns into applications, powering scalable fulfillment across 200+ carriers globally.

One exposes ShipEngine through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ship-engine` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ShipEngine is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ShipEngine account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Shipments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment by External Shipment ID | GET | `/v1/shipments/external_shipment_id/{{externalShipmentId}}` | `conn_mod_def::GJ7EHJa8ulo::RmyXMpzLTdOFLkGQwtRGxw` |
| Get a Shipment by ID | GET | `/v1/shipments/{{shipmentId}}` | `conn_mod_def::GJ7EHI7eCD0::IHfgghLoTkKkUd3fgerFVw` |
| List a Shipment’s Rates | GET | `/v1/shipments/{{shipmentId}}/rates` | `conn_mod_def::GJ7EHJUyrWQ::ONAIqj3MRAmd0RaCqu21ow` |
| List a Shipment’s Tags | GET | `/v1/shipments/{{shipmentId}}/tags` | `conn_mod_def::GJ7EHUuQFEI::K8P-X7vMRJedaj86SzsmYQ` |
| List Shipments | GET | `/shipments` | `conn_mod_def::GJ7EHSRdS3I::tkz5z3CvRICR--s9pt3Z_w` |
| Add a Tag to a Shipment | POST | `/v1/shipments/{{shipmentId}}/tags/{{tagName}}` | `conn_mod_def::GJ7EHCHa_cw::_pth5SMCTme0IaOPUXdieQ` |
| Cancel a Shipment | PUT | `/v1/shipments/{{shipmentId}}/cancel` | `conn_mod_def::GJ7EHIoyDwU::ias7ddnISVGoX0pMzo1VGg` |
| Create Shipments | POST | `/shipments` | `conn_mod_def::GJ7EHJcjLNU::n5Cnd678ROC51i4QZF6wZQ` |
| Parse Shipping Info (Recognize a Shipment From Unstructured Text) | PUT | `/v1/shipments/recognize` | `conn_mod_def::GJ7EHQuuARA::aMnWrOe0S6yjlJt7qDvn1w` |
| Remove a Tag from a Shipment | DELETE | `/v1/shipments/{{shipmentId}}/tags/{{tagName}}` | `conn_mod_def::GJ7EHQKu8Xg::M4k2bPxbQz2epgbHpFHwaw` |
| Update a Shipment by ID | PUT | `/v1/shipments/{{shipmentId}}` | `conn_mod_def::GJ7EHRLRBfw::JKBqGlotTcGFD2LIo5arYg` |
| Update Shipment Tags (Bulk) | PUT | `/shipments/tags` | `conn_mod_def::GJ7EHbAv-GI::ya3kM99QTTCzoYGje63h3A` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Label by External Shipment ID | GET | `/labels/external_shipment_id/{{externalShipmentId}}` | `conn_mod_def::GJ7EGLtiUyQ::ruZA7GqQTk6ZQzn8HVV1oA` |
| Get a Label by ID | GET | `/v1/labels/{{labelId}}` | `conn_mod_def::GJ7EGSEbFNg::zWG1js1BQSGarlS33FSzDQ` |
| Get a Label’s Tracking Information | GET | `/v1/labels/{{labelId}}/track` | `conn_mod_def::GJ7EGMJ4qqk::42BvBX0wQBq7CWOmRFhXWg` |
| List Labels | GET | `/labels` | `conn_mod_def::GJ7EGNb2NSA::GyTb9hhcQD62U25CvrQ1yg` |
| Create a Return Label for an Existing Label | POST | `/v1/labels/{{labelId}}/return` | `conn_mod_def::GJ7EGB7WFsU::mq0tpvmOSI-ckLfOUvtmCg` |
| Purchase a Label for a Shipment | POST | `/v1/labels/shipment/{{shipmentId}}` | `conn_mod_def::GJ7EGawSyNo::d6iJA_y7TQWZefNk5SasPA` |
| Purchase a Label from a Rate | POST | `/v1/labels/rates/{{rateId}}` | `conn_mod_def::GJ7EGZp9SSs::Ijl-TpfVTaecDIKUwL6RZg` |
| Purchase a Label Using Rate Shopper Strategy | POST | `/v1/labels/rate_shopper_id/{{rateShopperId}}` | `conn_mod_def::GJ7EGZsWHuA::nF0MA6EJQjuLlgW1MBzmpA` |
| Purchase a Shipping Label (Create Label) | POST | `/labels` | `conn_mod_def::GJ7EGZDmbh4::3ulfsTyBT86r9aew7hzTpQ` |
| Void a Label by ID | PUT | `/v1/labels/{{labelId}}/void` | `conn_mod_def::GJ7EGY1gOFI::cFblvRedTfOQreC1edkvUA` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch by External Batch ID | GET | `/v1/batches/external_batch_id/{{externalBatchId}}` | `conn_mod_def::GJ7EFfx63Gc::HxAR1qhtRYqPallomk1YyQ` |
| Get a Batch by ID | GET | `/v1/batches/{{batchId}}` | `conn_mod_def::GJ7EFfm7JJc::gl8LxhOFR7a9Ahsi3zkVcg` |
| List Batches | GET | `/batches` | `conn_mod_def::GJ7EFirp1i0::QTYWr_XgSL2PKspSKAkVAw` |
| Add Shipments or Rates to a Batch | POST | `/v1/batches/{{batchId}}/add` | `conn_mod_def::GJ7EFY08lBU::G6-h7fg-QDSHjMqRJOM1sQ` |
| Create a Batch | POST | `/batches` | `conn_mod_def::GJ7EFYqA5AQ::OKNsnxO-Qyecxvf8IycUTg` |
| Delete a Batch by ID | DELETE | `/v1/batches/{{batchId}}` | `conn_mod_def::GJ7EFfjycxo::BGrMhpe7RlWt7N9Ckpaz4A` |
| Process a Batch’s ID Labels | POST | `/v1/batches/{{batchId}}/process/labels` | `conn_mod_def::GJ7EFq21bEA::au200ulkS8iAAYmAxK9IDA` |
| Remove Shipments or Rates From a Batch | POST | `/v1/batches/{{batchId}}/remove` | `conn_mod_def::GJ7EFrDCHT8::QFDfXjYkQcSrl5yzAe4jfA` |
| Update a Batch by ID | PUT | `/v1/batches/{{batchId}}` | `conn_mod_def::GJ7EFq4fTwY::qxY_iotVSMCJShBjylEBlQ` |

### Warehouses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Warehouse by ID | GET | `/v1/warehouses/{{warehouseId}}` | `conn_mod_def::GJ7EHv90qRg::yr5BxVr9SJOcM01c54ZXkA` |
| List Warehouses | GET | `/warehouses` | `conn_mod_def::GJ7EHvtbCVY::hIVuEkvqRzmJuONsUIdk9A` |
| Create Warehouse | POST | `/warehouses` | `conn_mod_def::GJ7EHv6sugU::OQbK22JoTVy2nQg0vyLRsg` |
| Delete a Warehouse by ID | DELETE | `/warehouses/{{warehouseId}}` | `conn_mod_def::GJ7EHv_-LcQ::_BQZaDfjQZWyrqAx3g3JRw` |
| Update a Warehouse by ID | PUT | `/warehouses/{{warehouseId}}` | `conn_mod_def::GJ7EHyj3yi8::TuDrODqEScGvql9C9HIsMg` |
| Update a Warehouse’s Settings | PUT | `/v1/warehouses/{{warehouseId}}/settings` | `conn_mod_def::GJ7EH5M1m8g::6Znp1plaTDyGNM3UnjBZmg` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/tags` | `conn_mod_def::GJ7EHbKdrzQ::i1UQUAc5RMC3A5i7s5cq9g` |
| Create a New Tag | POST | `/tags` | `conn_mod_def::GJ7EHbO4qoU::WX1tuT5ARq6A4WmDuZFkjg` |
| Create a Tag by Name (Deprecated) | POST | `/v1/tags/{{tagName}}` | `conn_mod_def::GJ7EHcLvIoI::yBecnK6TTRCMrFcRayI0HA` |
| Delete a Tag | DELETE | `/tags/{{tagName}}` | `conn_mod_def::GJ7EHbP1xlc::MSI5COMzSPmqBmFABDII3A` |
| Rename a Tag | PUT | `/v1/tags/{{tagName}}/{{newTagName}}` | `conn_mod_def::GJ7EHmONvpg::dLpOBl6PSO-PUhke0Zv6Yw` |

### Carriers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Carrier by ID | GET | `/v1/carriers/{{carrierId}}` | `conn_mod_def::GJ7EFxv97hI::aJT0q456T0yYnSRMATz1xw` |
| Get a Carrier’s Options | GET | `/v1/carriers/{{carrierId}}/options` | `conn_mod_def::GJ7EF4tU2lg::zEAnubwaSsG1RU4CO-dJfg` |
| List Carriers | GET | `/carriers` | `conn_mod_def::GJ7EF4gsJD8::sG7PYds9TQ2--4b4MmwBOg` |
| Add Funds to a Carrier | PUT | `/v1/carriers/{{carrierId}}/add_funds` | `conn_mod_def::GJ7EFyDSdfU::Z4KajpWpR--eiOaURmSkvA` |
| Disconnect a Carrier by ID | DELETE | `/carriers/{{carrierId}}` | `conn_mod_def::GJ7EFxuelbI::zda25js1TlqlN0n79MFw0A` |

### Packages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Package Type by ID | GET | `/v1/packages/{{packageId}}` | `conn_mod_def::GJ7EG5mfZFo::udH34O8kQqidzb2tHOXzmg` |
| List Custom Package Types | GET | `/packages` | `conn_mod_def::GJ7EG3JcRXY::-jQ7t-KyRGC1IKNpRsNPdQ` |
| Create Custom Package Type | POST | `/packages` | `conn_mod_def::GJ7EGrTR_W4::SXefY3YARJ2ZHsvsGreMoQ` |
| Delete a Custom Package by ID | DELETE | `/v1/packages/{{packageId}}` | `conn_mod_def::GJ7EGsA93Ms::dtUww5RKTDiVBmyCP3G2bw` |
| Update a Custom Package Type by ID | PUT | `/v1/packages/{{packageId}}` | `conn_mod_def::GJ7EG0ONZIA::CxJ793CETrmcK4CumLl_GA` |

### Rates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rate by ID | GET | `/v1/rates/{{rateId}}` | `conn_mod_def::GJ7EHBk4r94::8oG0DMlbTL-YWy0wkyJ3OA` |
| Estimate Rates | POST | `/rates/estimate` | `conn_mod_def::GJ7EGy5CNts::leRYFrnPQfeTpeOD2y3tXg` |
| Get Bulk Shipment Rates | POST | `/rates/bulk` | `conn_mod_def::GJ7EGyYW9-w::ZxrsaBQ2SwqhlOM3Aujrig` |
| Get Shipping Rates | POST | `/rates` | `conn_mod_def::GJ7EHAfwMv8::XXfgD4m6S4OnBH3Ul3XT0w` |

### Pickups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pickup by ID | GET | `/v1/pickups/{{pickupId}}` | `conn_mod_def::GJ7EGqyGIWo::rq5dThdJSsirkqsa1x-6fA` |
| List Scheduled Pickups | GET | `/pickups` | `conn_mod_def::GJ7EGsF00I4::oX_-nOAvTIW7Z4Lie4-bkA` |
| Delete a Scheduled Pickup | DELETE | `/v1/pickups/{{pickupId}}` | `conn_mod_def::GJ7EGh1k4TU::SQK3NF4XTXSSY3ukGbnlWQ` |
| Schedule a Pickup | POST | `/pickups` | `conn_mod_def::GJ7EGqb1lts::__mTBAbXSHy2rHlmh-vw7w` |

### Manifests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Manifest by ID | GET | `/v1/manifests/{{manifestId}}` | `conn_mod_def::GJ7EGiBf-58::R7dfjcloRMG4RmFOA46OSA` |
| List Manifests | GET | `/manifests` | `conn_mod_def::GJ7EGkDsPbc::e7wvyIiUShGCfKh3Qi66eg` |
| Create Manifest | POST | `/manifests` | `conn_mod_def::GJ7EGhPG1ks::Qc2LNAuWRs6wgENgOGJ3aA` |

### Tracking

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tracking Information | GET | `/tracking` | `conn_mod_def::GJ7EHkRCvxY::h4xy4W5YSKizSZpq8DlXLQ` |
| Start Tracking a Package | POST | `/tracking/start` | `conn_mod_def::GJ7EHpHLIRI::-cad3cxiQ7Kjtl1nzf8Fxw` |
| Stop Tracking a Package | POST | `/v1/tracking/stop` | `conn_mod_def::GJ7EHkJ_xpQ::CmD5mb50SqOSHZzA_hQlhQ` |

### AccountImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Image by ID | GET | `/v1/account/settings/images/{{labelImageId}}` | `conn_mod_def::GJ7EFQULqxY::sgtpmvkVQICkT95B_wd4xQ` |
| List Account Images | GET | `/account/settings/images` | `conn_mod_def::GJ7EFPsxO1I::OJeiS64JSUWidGxgNGooIQ` |
| Create an Account Image | POST | `/account/settings/images` | `conn_mod_def::GJ7EFP2taIQ::C4GHXrwtSHeg4RISUe3K9Q` |

### EnvironmentWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment Webhook by ID | GET | `/v1/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7EH5fu-vA::fZBlC6R9RlaoyeITZwYJGg` |
| Create a Webhook (Environment) | POST | `/environment/webhooks` | `conn_mod_def::GJ7EH5f0s-c::x2kcYvnqRLe-a-5QBtm_Fw` |
| Delete an Environment Webhook by ID | DELETE | `/v1/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7EH7qQS8U::sckX4b6FT7-Me47pcNGKMw` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse an Address (Recognize Address From Unstructured Text) | PUT | `/addresses/recognize` | `conn_mod_def::GJ7EFY_ftEU::KKyoEUrIT32cUKrokNE-Xg` |
| Validate Addresses | POST | `/addresses/validate` | `conn_mod_def::GJ7EFYTta40::BFnAPU5PTBCAxP7uOSwtgw` |

### CarrierConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Connect a Carrier Account | POST | `/connections/carriers/{{carrierName}}` | `conn_mod_def::GJ7EFrDnzvQ::-UKwnAVqQCGEOGYwWvZd7g` |
| Disconnect a Carrier Connection | DELETE | `/v1/connections/carriers/{{carrierName}}/{{carrierId}}` | `conn_mod_def::GJ7EFpopzjA::WRYT8oQYTf6_krE6-zVW7A` |

### CarrierConnectionSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Carrier Connection’s Settings | GET | `/v1/connections/carriers/{{carrierName}}/{{carrierId}}/settings` | `conn_mod_def::GJ7EFx16Qjk::HrmaoLGLSNW3ysPqD4R2CA` |
| Update a Carrier Connection's Settings | PUT | `/v1/connections/carriers/{{carrierName}}/{{carrierId}}/settings` | `conn_mod_def::GJ7EFyLpAqw::rj5wXAEaRHa4bAHyEY9tOA` |

### ServicePoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Point by Carrier, Country, and Service Point ID | GET | `/v1/service_points/{{carrierCode}}/{{countryCode}}/{{servicePointId}}` | `conn_mod_def::GJ7EHBMtyNA::ak18fHu6Q2e0V6Rz_2C22A` |
| List Service Points by Location | POST | `/service_points/list` | `conn_mod_def::GJ7EHAwIjc0::XA5VUIu2TzqYsbcxdwKtkw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/environment/webhooks` | `conn_mod_def::GJ7EIAEB_Y0::7SgvBldMSoChCEk66mTYlg` |
| Update a Webhook | PUT | `/v1/environment/webhooks/{{webhookId}}` | `conn_mod_def::GJ7EIHV0-Vs::OGa9ZEGDQdugpZRRS6rEGQ` |

### CarrierServices

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Carrier’s Services | GET | `/carriers/{{carrierId}}/services` | `conn_mod_def::GJ7EF5KDzhk::V2MAOl5rTVukdkiZRa-QVw` |

### InsuranceConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Disconnect a Shipsurance Insurance Connection | DELETE | `/connections/insurance/shipsurance` | `conn_mod_def::GJ7EGESVdzk::clV7JCu4QvGp6bmipmC3eQ` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Combined Label Document | POST | `/documents/combined_labels` | `conn_mod_def::GJ7EGLNj-d0::JfpGzgC4TYq34oRvXN_o7w` |

### ManifestRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Manifest Request by ID | GET | `/v1/manifests/requests/{{manifestRequestId}}` | `conn_mod_def::GJ7EGhmmwbg::D1RbSz5qSk-PWqG2mzEqvg` |

### AccountSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Settings | GET | `/account/settings` | `conn_mod_def::GJ7EFRkrkiQ::9T14zeOeSRuNgGIqhPWilg` |

### AccountLabelImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Account Label Image by ID | DELETE | `/v1/account/settings/images/{{labelImageId}}` | `conn_mod_def::GJ7EFRVJgLo::1XcmtkucT-SpP-Q_pC-Mtw` |

### AccountSettingsImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Account Image by ID | PUT | `/v1/account/settings/images/{{labelImageId}}` | `conn_mod_def::GJ7EFYomBMI::N2P_-cHIQ6u-fAk8-0U3DQ` |

### BatchErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Batch’s Errors | GET | `/v1/batches/{{batchId}}/errors` | `conn_mod_def::GJ7EFh2LPic::ZXFCEYNQRQOhooEbuacX-w` |

This lists 90 of 96 actions. For anything not here, call `search_one_platform_actions` with platform `ship-engine`. The full catalog is at https://www.withone.ai/knowledge/ship-engine.

## When a call fails

The error comes from ShipEngine, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ship-engine

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
