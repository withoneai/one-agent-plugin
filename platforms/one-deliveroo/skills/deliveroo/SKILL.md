---
name: deliveroo
description: Deliveroo operates a technology-driven online food delivery marketplace that connects consumers with local restaurants, grocery and retail partners through its app, enabling on-demand ordering and real-time delivery tracking by independent riders across multiple countries. Read and write Deliveroo data through One: orders, menuitemunavailabilities, deliveries, menu, pickingwebhook, scenarioruns and more, 94 actions with real parameter documentation. Use whenever the user asks to look something up in Deliveroo, create or update a record there, or build code against the Deliveroo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: deliveroo
  generated-from: one-knowledge-base
---

# Deliveroo through One

Deliveroo operates a technology-driven online food delivery marketplace that connects consumers with local restaurants, grocery and retail partners through its app, enabling on-demand ordering and real-time delivery tracking by independent riders across multiple countries.

One exposes Deliveroo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `deliveroo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Deliveroo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Deliveroo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order's Location and Rider Details | GET | `/signature/v2/orders/{{id}}/location` | `conn_mod_def::GJEDaD5pROA::psppXUchRJayABHKknzudQ` |
| Get Order Information | GET | `/signature/v1/orders/{{id}}` | `conn_mod_def::GJEDPCxzCIg::G-79ogPKSlKKhB-hWesLdw` |
| Get Single Order Details | GET | `/order/v2/orders/{{order_id}}` | `conn_mod_def::GJEDXUfF7Ng::jhGDnwx8QIaKT3O0o4gLDg` |
| List a Restaurant’s Active Orders | GET | `/picking/v1/sites/{{restaurant_id}}/orders/active` | `conn_mod_def::GJEDl9gmJJg::U2CAoJLvS4WiTkkeCfI6Ig` |
| List a Restaurant's Orders for a Brand | GET | `/order/v2/brand/{{brand_id}}/restaurant/{{restaurant_id}}/orders` | `conn_mod_def::GJEDXfE9ttg::BSbRRig3RwejZLYY9jya8Q` |
| Accept an Order | PUT | `/picking/v1/orders/{{order_id}}/accept` | `conn_mod_def::GJEDlU1JdhA::PSe7IwdQRE-QQfzNhKdlUA` |
| Amend Items in an Order | POST | `/picking/v1/orders/{{order_id}}/amendments` | `conn_mod_def::GJEDlptSgeg::sbOVvkccQ2y3EX-aVn-m3Q` |
| Create a New Order | POST | `/signature/v2/orders` | `conn_mod_def::GJEDZ2KqIHg::SJ6fGR1zSemQNSezoK214Q` |
| Reject an Order | PUT | `/picking/v1/orders/{{order_id}}/reject` | `conn_mod_def::GJEDlg9pw_g::N9BIqeGpQbWSYpj2KwHM0g` |
| Start Picking Process for an Order | PUT | `/picking/v1/orders/{{order_id}}/start_picking` | `conn_mod_def::GJEDlO-hsTA::HQB8XYZHQ4Sx3gjNyMkQHA` |
| Update an Order's Items Quantities | PUT | `/picking/v2/orders/{{order_id}}` | `conn_mod_def::GJEDXnh8Dyg::HO5A_Q62TRq9rP9fi-LBmQ` |
| Update an Order's Status | PATCH | `/order/v1/orders/{{order_id}}` | `conn_mod_def::GJEDkQ6mQxA::PNNE5iv4Qlq-4GYqaW0Jbw` |

### MenuItemUnavailabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Menu Item Unavailabilities for a Site | GET | `/menu/v1/brands/{{brand_id}}/menus/{{id}}/item_unavailabilities/{{site_id}}` | `conn_mod_def::GJEDSKr8PnA::RFD2RniOQbCaAv_bKBAh0A` |
| List a Site's Menu Item Unavailabilities | GET | `/menu/v2/brands/{{brand_id}}/sites/{{site_id}}/menu/item_unavailabilities` | `conn_mod_def::GJEDVCoLK_g::Y8Qq6rc9QlGL7-RxvTQyew` |
| Replace All Menu Item Unavailabilities for a Brand's Site | PUT | `/menu/v2/brands/{{brand_id}}/sites/{{site_id}}/menu/item_unavailabilities` | `conn_mod_def::GJEDVUK_ASg::VIiaMnUzSCadqPSjjvWewA` |
| Update a Menu's Individual Item Unavailabilities | POST | `/menu/v1/brands/{{brand_id}}/menus/{{id}}/item_unavailabilities/{{site_id}}` | `conn_mod_def::GJEDSaynwpg::5wviV6qrRhSjiQzLfKAILQ` |
| Update a Site's Menu Item Unavailabilities | POST | `/menu/v2/brands/{{brand_id}}/sites/{{site_id}}/menu/item_unavailabilities` | `conn_mod_def::GJEDVK0SEHA::3Qyxy7kXT0ijRP0VAuMaYQ` |

### Deliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Delivery | GET | `/daas/v1/deliveries/{{id}}` | `conn_mod_def::GJEDNYhWiHA::8n4S64CwRrGB-qucDs8wng` |
| List Deliveries by Pickup Latitude and Longitude | GET | `/daas/v1/deliveries` | `conn_mod_def::GJEDNFvUvRg::fgncYlRYQnm6ylyyBjQdNQ` |
| Cancel a Delivery | DELETE | `/daas/v1/deliveries/{{id}}` | `conn_mod_def::GJEDNkThxoA::ZfTThJLrRsubXUKJ42gTag` |
| Schedule a Delivery | POST | `/daas/v1/deliveries` | `conn_mod_def::GJEDNNvmMzg::fH6mcBtyT12SBh3UKRr61A` |

### Menu

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Brand Menu | GET | `/menu/v3/brands/{{brand_id}}/menus/{{id}}` | `conn_mod_def::GJEDh4KDxpA::Ilv8lf6YTcuxVyAzcsusgg` |
| Get a Brand's Menu | GET | `/menu/v1/brands/{{brand_id}}/menus/{{id}}` | `conn_mod_def::GJEDRsjxhMg::712dr0M4R0aEWKFNCQLl2w` |
| Get a Site's Menu for a Brand | GET | `/menu/v2/brands/{{brand_id}}/sites/{{site_id}}/menu` | `conn_mod_def::GJEDU5dUVXg::NmvUHNdqQByaLPE0Qg82yg` |

### PickingWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Picking API Webhook | PUT | `/picking/v1/webhooks` | `conn_mod_def::GJEDatE93ig::rBQo9cdhS8K8H_Qxx1naiA` |
| Configure Picking API Webhook for a Brand | PUT | `/picking/v1/webhooks/partners/{{brand_id}}` | `conn_mod_def::GJEDaen1glA::dVgdpygeQ0OeLQbGifV1vg` |
| Receive Picking Webhook (Example Only) | POST | `/picking/v1/webhook_receiver_example` | `conn_mod_def::GJEDa1zBI4g::zhUoF-C1RTGpanDFPxiR8Q` |

### ScenarioRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scenario Run by ID | GET | `/dev-portal/scenarios/{{id}}/runs/{{run_id}}` | `conn_mod_def::GJEDcFZw3_A::gW3ZeFxsQAaPehmIooBs-Q` |
| List a Scenario's Runs | GET | `/dev-portal/scenarios/{{id}}/runs` | `conn_mod_def::GJEDb2H5_TA::72EV6sSiTYqPJMOkj-rYrg` |
| Trigger a Scenario Run by Scenario ID | POST | `/dev-portal/scenarios/{{id}}/runs` | `conn_mod_def::GJEDb9zGY_A::K7m-sRMpRyqzaHoANPD2lg` |

### DaysOff

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site's Days Off for a Brand | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/days_off` | `conn_mod_def::GJEDdenaL_g::r1AkGOj9Qh2H-H8BiI-FCA` |
| Add Days Off to a Site | POST | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/days_off` | `conn_mod_def::GJEDdyGiVZA::oH-lR7ZMTcuuyDMSGRHtMQ` |
| Cancel a Site's Days Off Period | DELETE | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/days_off/{{days_off_id}}` | `conn_mod_def::GJEDdXdrCWA::ErP-Juv4R2mqE4RCfm5C4w` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote by ID | GET | `/daas/v1/quotes/{{id}}` | `conn_mod_def::GJEDMzjHrMg::G9vjRU7YT-WULZiUuqsChw` |
| Update a Quote | PATCH | `/daas/v1/quotes/{{id}}` | `conn_mod_def::GJEDM78te4A::UMv00-lFSnCTeOiCczY9rQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Registered Webhooks | GET | `/signature/v1/webhooks` | `conn_mod_def::GJEDPgeKibg::G8VJTA2STOii3wtfKAQ7Vw` |
| Register Webhooks | POST | `/signature/v1/webhooks` | `conn_mod_def::GJEDPn6_FBg::fal9e-3ZTRaE1D8edNSt_A` |

### ItemUnavailabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Unavailabilities for a Brand Catalogue | GET | `/brands/{{brand_id}}/catalogue/{{catalogue_id}}/item_unavailabilities/{{site_id}}` | `conn_mod_def::GJEDWs_y-hg::iGbQBmdVQl27WD61jG6QSw` |
| Update Item Unavailabilities for a Site's Catalogue | PATCH | `/brands/{{brand_id}}/catalogue/{{catalogue_id}}/item_unavailabilities/{{site_id}}` | `conn_mod_def::GJEDVdIIrPg::iywE0sc4TxWpBkhnr8djQA` |

### SiteWorkloadMode

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Workload Mode | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/workload/mode` | `conn_mod_def::GJEDZSNh4Sg::4HJ6c15bSEiDZ48Z-SOD_w` |
| Set a Site's Workload Mode for a Brand | PUT | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/workload/mode` | `conn_mod_def::GJEDZcSQ6Rg::MRdv4-q1SsWR-YnoikPTnA` |

### Scenarios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scenario by ID | GET | `/dev-portal/scenarios/{{id}}` | `conn_mod_def::GJEDbu8ZITg::VmMtHmJlS-WuAA3DxjaMuw` |
| List Scenarios | GET | `/dev-portal/scenarios` | `conn_mod_def::GJEDbndNmoA::StR7s070SFGTnl55sCOVXA` |

### SiteDaysOffPeriod

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Days Off Period | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/days_off/{{days_off_id}}` | `conn_mod_def::GJEDdHfYlYA::lzJuPvPpTbO4KpnD1X3s4w` |
| Update a Site's Days-Off Period | PUT | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/days_off/{{days_off_id}}` | `conn_mod_def::GJEDdP_mzKg::5npX-Q9nR_2NZBTbSgKkHg` |

### IntegratorBrandSitesWebhooksConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integrator Brand's Sites Webhooks Configuration | GET | `/order/v1/integrator/brands/{{brand_id}}/sites-config` | `conn_mod_def::GJEDk7eJ8LA::nGbKhyE7RymjNNvcaSN3JQ` |
| Change an Integrator Brand's Sites Webhooks Configuration | PUT | `/order/v1/integrator/brands/{{brand_id}}/sites-config` | `conn_mod_def::GJEDlIBXjKA::adhFS9B8QGqk2yV7s6v94A` |

### DeliveryQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Delivery Quote | POST | `/daas/v1/quotes` | `conn_mod_def::GJEDMtCw-hg::n3UOOJTkQNCk3LKO5fRD4w` |

### DeliveryPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Delivery's Photo | GET | `/daas/v1/deliveries/{{id}}/photos/{{file_id}}` | `conn_mod_def::GJEDNtUSIQA::C0Lx7m8OR8eW6lD3Slkxcg` |

### DeliveryAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Delivery Availability | GET | `/daas/v1/availabilities` | `conn_mod_def::GJEDN5EkJ9A::x26TP0weQNuPrfzsD1dyBQ` |

### OrderQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Order Quote | POST | `/signature/v1/quotes` | `conn_mod_def::GJEDPQE-Chg::J7kfexgWSbCRBb2zPgZ8ig` |

### Restaurants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Restaurants for a Location | GET | `/signature/v1/restaurants` | `conn_mod_def::GJEDPZAodxg::6_o6gQkyTtiVpvAHilkPVg` |

### RefundNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Refund Notification | POST | `/signature/v1/refund-notifications` | `conn_mod_def::GJEDPxcJycA::lwspF93gQc64poNZ8j7oIg` |

### Menus

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload or Update a Brand's Menu | PUT | `/menu/v1/brands/{{brand_id}}/menus/{{id}}` | `conn_mod_def::GJEDR0-uFnA::VHRQ9eqIQzGw2Ohvz4c0fA` |

### MenuPluMapping

| Action | Method | Path | Action id |
|---|---|---|---|
| Update PLU Mapping for a Menu Item | POST | `/menu/v1/brands/{{brand_id}}/menus/{{id}}/plus` | `conn_mod_def::GJEDSBxPS7g::OZ8sy_pLRI2X_xNsDijQZw` |

### OpeningHours

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Opening Hours for a Brand | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/opening_hours` | `conn_mod_def::GJEDTQyyQ5A::97-mUZDdSReZelcxqRnj4A` |

### SiteOpeningHours

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Site's Opening Hours | POST | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/opening_hours` | `conn_mod_def::GJEDTiPG-zg::Bdf185HbT8uyDOrlHH0NPQ` |

### SiteTimeZone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Time Zone for a Brand | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/time_zone` | `conn_mod_def::GJEDUCrWBmA::CAkWJ7XVTUO_q9RQxbvfdA` |

### Brands

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brands | GET | `/site/v1/brands` | `conn_mod_def::GJEDV03SWmg::ywy5TyHzQy-uEQJA8I1GRg` |

### IntegratorMenuEventsWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Integrator's Menu Events Webhook | GET | `/menu/v1/integrator/webhooks/menu-events` | `conn_mod_def::GJEDWQE07PA::eyax3acyROysL2sWtx89fg` |

### MenuEventsWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Integrator's Menu Events Webhook | PUT | `/menu/v1/integrator/webhooks/menu-events` | `conn_mod_def::GJEDWaD5OYA::ojzaNNzdRrCtbchXHus9Tw` |

### CatalogueUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Brand's Catalogue Upload | POST | `/brands/{{brand_id}}/catalogue/uploads` | `conn_mod_def::GJEDWhbkfug::N1DvLkGRQrGcztXJ69mRvw` |

### CatalogueListings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Catalogue's Listings for a Brand | PUT | `/brands/{{brand_id}}/catalogue/{{catalogue_id}}/listings` | `conn_mod_def::GJEDW23WNlA::q8Nh4QtQRfa9y2Lx0lnC8A` |

### SiteStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Status for a Brand | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/status` | `conn_mod_def::GJEDYWuTQFg::4-j5wc3kT2OneQLE03yfoQ` |

### BrandSiteStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Brand's Site Status | PUT | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/status` | `conn_mod_def::GJEDYiUqY-g::M6nTmnTbRlmEkWURJLkthA` |

### Catalogue

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand's Catalogue | GET | `/brands/{{brand_id}}/catalogue/{{catalogue_id}}` | `conn_mod_def::GJEDaN9QuJg::BGyaxWrJTHi1OjC0F-gpeA` |

### PickingWebhookConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Partner Brand's Picking API Webhook Configuration | GET | `/picking/v1/webhooks/partners/{{brand_id}}` | `conn_mod_def::GJEDaWE6gMg::qidgVLYrRF6cb17L5IChLg` |

### PickingApiWebhookConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Picking API Webhook Configuration | GET | `/picking/v1/webhooks` | `conn_mod_def::GJEDam-TRhg::SnGnVy_eSoiJ-VJgM7Hpdg` |

### SiteBrand

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Brand ID | GET | `/site/v1/restaurant_locations/{{site_id}}` | `conn_mod_def::GJEDcM1lc1A::jmo7cDIQRUmYmamjo3I2DA` |

### SitePrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Prices for a Site | PUT | `/brands/{{brand_id}}/catalogue/{{catalogue_id}}/sites/{{site_id}}/prices` | `conn_mod_def::GJEDcTewQCg::E8mbDOm1RKaNRb1naESxcA` |

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Brand's Sites | GET | `/site/v1/brands/{{brand_id}}/sites` | `conn_mod_def::GJEDeB3nTCA::UUtGcDEQSxKMH3yZr1gvbA` |

### OrderEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Order Events Webhook Callback | POST | `/order/v1/deliveroo/order-events` | `conn_mod_def::GJEDeeNsmbg::7pV_qf5GTzee7emZJc7Hag` |

### RiderEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Rider Events Webhook Callback | POST | `/order/v1/deliveroo/rider-events` | `conn_mod_def::GJEDen3txwA::ob1uVfQHStyIZd-Zd6li2Q` |

### WebhooksUpload

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Catalogue Webhook | POST | `/webhooks-upload` | `conn_mod_def::GJEDexChr4A::Rb6VmSlYQfOW4u0JfsrPgg` |

### UpdateCataloguePricesWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Update Catalogue Prices Webhook | POST | `/webhooks-update-prices` | `conn_mod_def::GJEDe7QVMQA::KPXSJZjvRe2ZzTQi8djmxg` |

### UpdateCatalogueListingWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Update Catalogue Listing Webhook | POST | `/webhooks-update-listing` | `conn_mod_def::GJEDfEw7xKg::9B5Vp9JtQQaUitGqYS6Xgw` |

### OrderStatusCallback

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Order Status Callback (Webhook) | POST | `/signature/v1/deliveroo/order-status` | `conn_mod_def::GJEDf23NfUg::REh7o0QpTIyOS123_mArGA` |

### OrderRefundCallback

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Order Refund Callback | POST | `/signature/v1/deliveroo/order-refund` | `conn_mod_def::GJEDf-K_XvA::w6Q90cnPQa61_yCX1MQTXA` |

### OrderCreditCallback

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Order Credit Callback | POST | `/signature/v1/deliveroo/order-credit` | `conn_mod_def::GJEDgF7g4eg::SCcJCkyTS5KHwM0R6-4vQA` |

### OrderRedelivery

| Action | Method | Path | Action id |
|---|---|---|---|
| Handle Order Redelivery Callback | POST | `/signature/v1/deliveroo/order-redelivery` | `conn_mod_def::GJEDgMkON8g::jFXnv8caQRWqoKujCf4rzg` |

### RiderStatusCallback

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Rider Status Callback | POST | `/signature/v1/deliveroo/rider-status` | `conn_mod_def::GJEDgUS3Srg::xuYLjWrUSqyTclLHvPq6Mw` |

### MenuWebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Menu Webhook Callback (Menu Events) | POST | `/menu/v1/webhooks/menu-events` | `conn_mod_def::GJEDgpK8mYg::jfhoM7MLRC6P0R3ny3lDxw` |

### SiteWorkloadTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site's Workload Times for a Brand | GET | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/workload/times` | `conn_mod_def::GJEDhC5kQGA::lmXcZuPJQdu3T2u34_jgfw` |

### WorkloadTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Site's Workload Times for a Brand | PUT | `/site/v1/brands/{{brand_id}}/sites/{{site_id}}/workload/times` | `conn_mod_def::GJEDhLNj9zg::-NhjsUmIRs2l4-RuIfnbOA` |

### BrandMenuS3UploadUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Brand Menu S3 Upload URL | PUT | `/menu/v3/brands/{{brand_id}}/menus/{{id}}` | `conn_mod_def::GJEDiCItsTg::9_HpDAatSyW1HyHNnNfxdg` |

### MenuJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Publish a Brand's Menu | POST | `/menu/v3/brands/{{brand_id}}/jobs` | `conn_mod_def::GJEDiLJqrhg::hRR8b6JATAmf-O0_zkw6qw` |

### BrandMenuJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand's Menu Job Status | GET | `/menu/v3/brands/{{brand_id}}/jobs/{{job_id}}` | `conn_mod_def::GJEDiaFyaCA::kiTnXbcHTf6mCC1Hyjbxqw` |

### OrderSyncStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Sync Status for an Order | POST | `/order/v1/orders/{{order_id}}/sync_status` | `conn_mod_def::GJEDj02Fzmg::JVuuKuj6S4qOik2m95PuWw` |

### OrderPreparationStage

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Preparation Stage for an Order | POST | `/order/v1/orders/{{order_id}}/prep_stage` | `conn_mod_def::GJEDkCJiTIg::iRRE0zdGTdK2Dnget9y0tg` |

### IntegratorOrderEventsWebhookConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Integrator's Order Events Webhook Configuration | GET | `/order/v1/integrator/webhooks/order-events` | `conn_mod_def::GJEDkb48ePg::D_z8ygbUR0my0PO37nqQUA` |

This lists 90 of 94 actions. For anything not here, call `search_one_platform_actions` with platform `deliveroo`. The full catalog is at https://www.withone.ai/knowledge/deliveroo.

## When a call fails

The error comes from Deliveroo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/deliveroo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
