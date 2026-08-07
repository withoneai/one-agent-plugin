---
name: simla
description: A cloud communication platform that enables businesses to centralize customer messaging across channels like WhatsApp, Telegram, Viber, SMS, and social apps, manage conversations, automate responses, route messages to teams, and integrate with CRM systems for seamless support and engagement. Read and write Simla data through One: orders, customers, costs, customerscorporate, files, customfields and more, 188 actions with real parameter documentation. Use whenever the user asks to look something up in Simla, create or update a record there, or build code against the Simla API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: simla
  generated-from: one-knowledge-base
---

# Simla through One

A cloud communication platform that enables businesses to centralize customer messaging across channels like WhatsApp, Telegram, Viber, SMS, and social apps, manage conversations, automate responses, route messages to teams, and integrate with CRM systems for seamless support and engagement.

One exposes Simla through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `simla` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Simla is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Simla account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order by External or Internal ID | GET | `/api/v5/orders/{{externalId}}` | `conn_mod_def::GKO_0AXoZxg::9cXXZ7Z4Q2GLSZ_nHP9bOA` |
| Get an Order's Printed Form File by External ID and Plate ID | GET | `/api/v5/orders/{{externalId}}/plates/{{plateId}}/print` | `conn_mod_def::GKO_z97-B-g::kGdI3dKaSUqgna21lhArtg` |
| Get Order Change History | GET | `/api/v5/orders/history` | `conn_mod_def::GKO_z-LxWlg::WM9I6O1lS2aQHa8JXjYYnQ` |
| Get Order Statuses | GET | `/api/v5/orders/statuses` | `conn_mod_def::GKO_z82giQg::g6UHJbtyS1iseLUuTQu3ZA` |
| List Orders | GET | `/api/v5/orders` | `conn_mod_def::GKO_0cAMBlg::ikns_U65SQSBPcKQSiNClA` |
| Apply Loyalty Bonuses to an Order | POST | `/api/v5/orders/loyalty/apply` | `conn_mod_def::GKO_0ymYXDg::alqIDcz1RF-qP7Q6B67UCQ` |
| Cancel an Order's Integrated Delivery | POST | `/api/v5/orders/{{externalId}}/delivery/cancel` | `conn_mod_def::GKO_0kgHWZA::Zfq2S4ywQbeags-SB-d86g` |
| Cancel Loyalty Bonus Operations for an Order | POST | `/api/v5/orders/loyalty/cancel-bonus-operations` | `conn_mod_def::GKO_0zYIZYA::R0C6AwSnTcG_vfcewYq3Aw` |
| Combine Orders | POST | `/api/v5/orders/combine` | `conn_mod_def::GKO_0oZ62lg::Dbwo0wx6QOWqAMO92uOycg` |
| Create a Link Between Orders | POST | `/api/v5/orders/links/create` | `conn_mod_def::GKO_0xTSNug::Jkgj4nbyRnK4OrJDmtlO1Q` |
| Create an Order | POST | `/api/v5/orders/create` | `conn_mod_def::GKO_0m02Eog::_ylPrry6RtqH925BwPkcnQ` |
| Edit an Order by External or Internal ID | POST | `/api/v5/orders/{{externalId}}/edit` | `conn_mod_def::GKO_0ou4NRA::PK7vJhi4TX2khhCwX-cIEg` |

5 more Orders actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer by External or Internal ID | GET | `/api/v5/customers/{{externalId}}` | `conn_mod_def::GKO_wyQ4aQA::okRI-USqR-G2tlGdt4eXOw` |
| Get Customer Change History | GET | `/api/v5/customers/history` | `conn_mod_def::GKO_xWeHOIg::W60efnjWT762ZDAch4HFAg` |
| List Customers | GET | `/api/v5/customers` | `conn_mod_def::GKO_xIWMg0g::wBvwX5NoTb-qpbJAX95dSA` |
| Combine Customers | POST | `/api/v5/customers/combine` | `conn_mod_def::GKO_xP_Xx3A::z1VZPybMSAOq65kESHO1WQ` |
| Create a Customer | POST | `/api/v5/customers/create` | `conn_mod_def::GKO_xfYkSNg::jSZm_VQ4T2mQ-57rDTCq7w` |
| Edit a Customer by External ID | POST | `/api/v5/customers/{{externalId}}/edit` | `conn_mod_def::GKO_xUw6GbA::rDsWgEIDTxK-3lERMU-WXQ` |
| Mass Record Customers External IDs | POST | `/api/v5/customers/fix-external-ids` | `conn_mod_def::GKO_xgEZw_g::ohmfhaOcRZ-_HL22kFkVGw` |
| Upload a Packet of Customers | POST | `/api/v5/customers/upload` | `conn_mod_def::GKO_xf155NA::jgSGMMQWSjmZ0egBUWVV3g` |

### Costs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cost by ID | GET | `/api/v5/costs/{{id}}` | `conn_mod_def::GKO_wDGVF-A::fxMg9XQbS0yUyWeUIC1v7Q` |
| List Costs | GET | `/api/v5/costs` | `conn_mod_def::GKO_wL2vIug::ZLO1YieXSZ680L0xAIubxg` |
| Batch Remove Costs | POST | `/api/v5/costs/delete` | `conn_mod_def::GKO_wUuUj4A::qirtnKouSEmClJ7AGQdfdA` |
| Batch Upload Costs | POST | `/api/v5/costs/upload` | `conn_mod_def::GKO_wU3YKmg::SHcNdRl2QwKzijIeQ6RLLQ` |
| Create a Cost | POST | `/api/v5/costs/create` | `conn_mod_def::GKO_wUf5tYA::Dpcy6wCHToWTf7U0ig6qkg` |
| Delete a Cost | POST | `/api/v5/costs/{{id}}/delete` | `conn_mod_def::GKO_wDAfc4g::-dFgeuMhSuyy7Ll7nMFv_g` |
| Edit a Cost | POST | `/api/v5/costs/{{id}}/edit` | `conn_mod_def::GKO_wUfkEnA::hp7xUsQCR8OdzuscglOoYg` |

### CustomersCorporate

| Action | Method | Path | Action id |
|---|---|---|---|
| List Corporate Customers | GET | `/api/v5/customers-corporate` | `conn_mod_def::GKO_vYz4DNA::0V_GzrO-Sy6lW9tS5eTAFQ` |
| Combine Corporate Customers | POST | `/api/v5/customers-corporate/combine` | `conn_mod_def::GKO_v39TZVA::j8EbSeeGSr6p4jVAojmvjA` |
| Create a Corporate Customer | POST | `/api/v5/customers-corporate/create` | `conn_mod_def::GKO_v6tAveg::-o9os9NWTHOREuodjU-vcw` |
| Edit a Corporate Customer by External ID | POST | `/api/v5/customers-corporate/{{externalId}}/edit` | `conn_mod_def::GKO_v5AS10A::SS7MoOxfSau1JWSlsaOrkw` |
| Mass Record External IDs for Corporate Customers | POST | `/api/v5/customers-corporate/fix-external-ids` | `conn_mod_def::GKO_v31K-sA::v_gq6VK8Twapd_aEh3UZrQ` |
| Upload Corporate Customers in Bulk | POST | `/api/v5/customers-corporate/upload` | `conn_mod_def::GKO_wDn1mBA::j0URy_eHQSGWNnLcZIWG0A` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/api/v5/files/{{id}}/download` | `conn_mod_def::GKO_y91xF3A::WKJ0Npj_RNe_qCn0GE-UOg` |
| Get File Information | GET | `/api/v5/files/{{id}}` | `conn_mod_def::GKO_y-Ojr2g::Hd9Yji9-SwK_NN4BcnsSQQ` |
| List Files | GET | `/api/v5/files` | `conn_mod_def::GKO_zF_reyg::dh9mpAcBSxKjehfwUrNZUQ` |
| Delete a File | POST | `/api/v5/files/{{id}}/delete` | `conn_mod_def::GKO_zOQgXDg::2RcXKLKhQgSWr7slTWI-QA` |
| Edit a File | POST | `/api/v5/files/{{id}}/edit` | `conn_mod_def::GKO_zOyu6Xg::nxvS9kteQ0q3k3rAyYRdBQ` |
| Upload a File to the Server | POST | `/api/v5/files/upload` | `conn_mod_def::GKO_zOqfz_g::f415ZD2uTN2GccPdHlmg-Q` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field for an Entity | GET | `/api/v5/custom-fields/{{entity}}/{{code}}` | `conn_mod_def::GKO_weW91OA::3MYRannmQ_O08oalKfl5zw` |
| List Custom Fields | GET | `/api/v5/custom-fields` | `conn_mod_def::GKO_wWTyA7g::XC-1B5geQ1K4duttEAVQcw` |
| Create a Custom Field for an Entity | POST | `/api/v5/custom-fields/{{entity}}/create` | `conn_mod_def::GKO_we02DDg::emw4yTPOQQSiBbfKT5lAsA` |
| Edit a Custom Field for an Entity | POST | `/api/v5/custom-fields/{{entity}}/{{code}}/edit` | `conn_mod_def::GKO_weXEl1g::aWa6ryL4SNihmCxUhG1Eiw` |

### OrderPacks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order Pack by ID | GET | `/api/v5/orders/packs/{{id}}` | `conn_mod_def::GKO_08ajNeg::JjgtvepmSUOXPD2xTsSCQg` |
| List Order Packs | GET | `/api/v5/orders/packs` | `conn_mod_def::GKO_1AmRPmg::zPGCZNRMQz6GcXjo0RljIw` |
| Create an Order Pack | POST | `/api/v5/orders/packs/create` | `conn_mod_def::GKO_1J-6-HA::ILpZj7mFRCuH-GRdHqe_2A` |
| Delete an Order Pack | POST | `/api/v5/orders/packs/{{id}}/delete` | `conn_mod_def::GKO_1I1gqtA::LETv3aRURASVzLbL_r78SA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task by ID | GET | `/api/v5/tasks/{{id}}` | `conn_mod_def::GKO_2HzALfA::jm-Tz5iGTr6r9hY6bezceQ` |
| List Tasks | GET | `/api/v5/tasks` | `conn_mod_def::GKO_2PmXvmA::Nc2RqzQtSVeqei96KjeDLQ` |
| Create a Task | POST | `/api/v5/tasks/create` | `conn_mod_def::GKO_2XED6vA::L6L1obOcRL2zIFgomQk7KA` |
| Edit a Task | POST | `/api/v5/tasks/{{id}}/edit` | `conn_mod_def::GKO_2XDdGXA::o5Xx2GPJQTqleT2o6QhUiA` |

### CustomersCorporateContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Corporate Customer's Contact Persons | GET | `/api/v5/customers-corporate/{{externalId}}/contacts` | `conn_mod_def::GKO_vkDudEA::4VsINjcnTJCe4ijiUUy6Qg` |
| Create a Link Between a Corporate Customer and a Contact Person | POST | `/api/v5/customers-corporate/{{externalId}}/contacts/create` | `conn_mod_def::GKO_vuV34jA::WkSATiksTUmqZjiml0RYVg` |
| Edit a Corporate Customer Contact Link | POST | `/api/v5/customers-corporate/{{externalId}}/contacts/{{entityExternalId}}/edit` | `conn_mod_def::GKO_vv2sENg::0L1k03P5SQmZZHCpmAp7CA` |

### CorporateCustomerNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Corporate Customer Notes | GET | `/api/v5/customers-corporate/notes` | `conn_mod_def::GKO_vklEOlg::vLL-p5LrRfCKxMKwAtUjAw` |
| Create a Corporate Customer Note | POST | `/api/v5/customers-corporate/notes/create` | `conn_mod_def::GKO_wDnk0xg::jazYV-naQ52eM2GF9II-_g` |
| Delete a Corporate Customer Note | POST | `/api/v5/customers-corporate/notes/{{id}}/delete` | `conn_mod_def::GKO_v31IEKg::khc6PUJ3S72dxk90DIShtQ` |

### CustomerNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customer Notes | GET | `/api/v5/customers/notes` | `conn_mod_def::GKO_xU27oQA::ze9IQnJTSgGGIY0U2xbJoQ` |
| Create a Customer Note | POST | `/api/v5/customers/notes/create` | `conn_mod_def::GKO_xf131Xg::dynbP8r9T1i2ojxLZLUtqA` |
| Delete a Customer Note | POST | `/api/v5/customers/notes/{{id}}/delete` | `conn_mod_def::GKO_xftEfqA::Nd_g6RrTRludCpdktOH_wA` |

### Couriers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Couriers | GET | `/api/v5/reference/couriers` | `conn_mod_def::GKO_xniix1g::tgYuHauJRZ6EQ510hxdlSw` |
| Create a Courier | POST | `/api/v5/reference/couriers/create` | `conn_mod_def::GKO_yLt6BYA::t-nYzU89Q8m7gmw2tqSi9w` |
| Edit a Courier Reference Entry | POST | `/api/v5/reference/couriers/{{id}}/edit` | `conn_mod_def::GKO_yM4QccA::QnGHn0q7SoOU0exRrdb_qg` |

### Shipments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment | GET | `/api/v5/delivery/shipments/{{id}}` | `conn_mod_def::GKO_yxPl9-A::X1Cx3CpYShmuCq6q1RkYNQ` |
| Create a Shipment | POST | `/api/v5/delivery/shipments/create` | `conn_mod_def::GKO_y-ri1WA::dDY5WxmCRjCARAZirECinA` |
| Edit a Shipment | POST | `/api/v5/delivery/shipments/{{id}}/edit` | `conn_mod_def::GKO_y-dPhRA::iK8BNjVoR-KeRu3eHERyeQ` |

### CustomFieldDictionaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field Dictionary by Code | GET | `/api/v5/custom-fields/dictionaries/{{code}}` | `conn_mod_def::GKO_wez96SA::-6bFJSP6TDm7b00PcDjJeA` |
| List Custom Field Dictionaries | GET | `/api/v5/custom-fields/dictionaries` | `conn_mod_def::GKO_wgJJS9A::_-ZRnPNBQ7W0mYeAoP4tSw` |
| Edit a Custom Field Dictionary | POST | `/api/v5/custom-fields/dictionaries/{{code}}/edit` | `conn_mod_def::GKO_wn6anRA::Y3BbuYwYQ7Ws34_vuD2YWA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/v5/users/{{id}}` | `conn_mod_def::GKO_2st65QA::S96J92glTaSvOet5z-z8Kg` |
| List Users | GET | `/api/v5/users` | `conn_mod_def::GKO_2w2F5Gg::X_sn2haeQmCoVYlMVgrzEg` |
| Change a User's Status | POST | `/api/v5/users/{{id}}/status` | `conn_mod_def::GKO_2tSHGjg::20nNi9zRSN-oL4AO4Ac42Q` |

### IntegrationModules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integration Module | GET | `/api/v5/integration-modules/{{code}}` | `conn_mod_def::GKO_zPTnV9g::sEdnP9EkST6g2kScXUM3ug` |
| Create or Edit an Integration Module by Code | POST | `/api/v5/integration-modules/{{code}}/edit` | `conn_mod_def::GKO_zOQ0WWg::s2ne5xiNTFuhx-T-UZxUig` |
| Update an Integration Module's API Key Scopes | POST | `/api/v5/integration-modules/{{code}}/update-scopes` | `conn_mod_def::GKO_zYItgug::qu-rl11NTfaTN2Gm6gvUAA` |

### LoyaltyAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Loyalty Program Participation by ID | GET | `/api/v5/loyalty/account/{{id}}` | `conn_mod_def::GKO_zXaf-gA::bp1V9w0eS0ms_2wIVNA6Gg` |
| Activate a Loyalty Program Participation Account | POST | `/api/v5/loyalty/account/{{id}}/activate` | `conn_mod_def::GKO_znc_-cg::Sjq4XGPxT2mSYkmv3O_FSg` |
| Create a Loyalty Program Account | POST | `/api/v5/loyalty/account/create` | `conn_mod_def::GKO_zzW_aqA::18Lz1AH6RVmjyqkJD_KbNg` |

### StoreProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Store Products and SKUs | GET | `/api/v5/store/products` | `conn_mod_def::GKO_1wrk6-A::liRxoj8qSG23V1zvzpeLKw` |
| Batch Add Products and Services to the Store | POST | `/api/v5/store/products/batch/create` | `conn_mod_def::GKO_2H56TYg::8N4qwqMJR7uyiKpkhkgUsA` |
| Batch Edit Store Products and Services | POST | `/api/v5/store/products/batch/edit` | `conn_mod_def::GKO_2JNrMEA::RxkBT776QAK0dcKbl-z_Xg` |

### CostGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cost Groups | GET | `/api/v5/reference/cost-groups` | `conn_mod_def::GKO_xnjM4LA::zR3WyLpLRZ2M6FS-d3zeBg` |
| Edit a Cost Group by Code | POST | `/api/v5/reference/cost-groups/{{code}}/edit` | `conn_mod_def::GKO_yMn_w7A::j-xiz_gjQvyhQlKFYKlVuQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact Person's Companies | GET | `/api/v5/customers-corporate/{{externalId}}/companies` | `conn_mod_def::GKO_vjGEFrg::xMN_XdTKS36VI-IZc2QVhA` |
| Create a Company for a Corporate Customer | POST | `/api/v5/customers-corporate/{{externalId}}/companies/create` | `conn_mod_def::GKO_vu3OJUg::6WyfpUxnQxeY9_5Px1Fe8w` |

### CostItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cost Items List | GET | `/api/v5/reference/cost-items` | `conn_mod_def::GKO_xno4HPg::2a9RC4ZGTDO7D5MP6mpf1A` |
| Edit a Cost Item by Code | POST | `/api/v5/reference/cost-items/{{code}}/edit` | `conn_mod_def::GKO_yMFuyVg::Jc-KEjgERKOgA6LHjirvmQ` |

### CorporateCustomerAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Corporate Customer's Addresses | GET | `/api/v5/customers-corporate/{{externalId}}/addresses` | `conn_mod_def::GKO_vKjUm5A::ER6zcTI9S3CFL7554ZIcEQ` |
| Create an Address for a Corporate Customer | POST | `/api/v5/customers-corporate/{{externalId}}/addresses/create` | `conn_mod_def::GKO_vuwO3WA::QdVeW5GeSLmBTxyA04yD6g` |

### ProductGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Groups | GET | `/api/v5/store/product-groups` | `conn_mod_def::GKO_1h7zrSA::tOsQaso_Rumt6CJ_WHDlTg` |

1 more ProductGroups actions are available through search.

This lists 90 of 188 actions. For anything not here, call `search_one_platform_actions` with platform `simla`. The full catalog is at https://www.withone.ai/knowledge/simla.

## When a call fails

The error comes from Simla, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/simla

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
