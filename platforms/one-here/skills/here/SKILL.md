---
name: here
description: HERE is a location data and mapping platform that provides APIs for maps, geocoding, routing, traffic, and fleet optimization, allowing developers and enterprises to build navigation, logistics, and geospatial applications with real-time location intelligence. Read and write Here data through One: subscriptions, openapispecification, version, features, health, problems and more, 224 actions with real parameter documentation. Use whenever the user asks to look something up in Here, create or update a record there, or build code against the Here API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: here
  generated-from: one-knowledge-base
---

# Here through One

HERE is a location data and mapping platform that provides APIs for maps, geocoding, routing, traffic, and fleet optimization, allowing developers and enterprises to build navigation, logistics, and geospatial applications with real-time location intelligence.

One exposes Here through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `here` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Here is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Here account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Subscriptions | GET | `/user-service/subscriptions` | `conn_mod_def::GL3RNN7JcJk::8OrE85zXR7mIWUtiv_QOcw` |
| Get Subscription Details by Subscription Key | GET | `/user-service/subscriptions/keys/{{subscriptionKey}}` | `conn_mod_def::GL3RNNxaMHk::V2eA0PcTRiSl6DLeImRezw` |
| Add a Feature Group to a Subscription | POST | `/user-service/subscriptions/keys/{{subscriptionKey}}/featureGroups/names/{{featureGroupName}}` | `conn_mod_def::GL3RNEL4ANU::C_cQixVITD6u38f4qADoyg` |
| Add Feature Group to Subscription | POST | `/user-service/subscriptions/keys/{{subscriptionKey}}/featureGroups/{{featureGroupId}}` | `conn_mod_def::GL3RM5dv5mQ::3rt7C8knTFyHxi993jSuQw` |
| Create Subscription Keys | POST | `/user-service/subscriptions` | `conn_mod_def::GL3RNELa1Wc::A9eN2HozSKqmAprH1iHaHQ` |
| Deactivate Subscription | POST | `/user-service/subscriptions/deactivate` | `conn_mod_def::GL3RNEwsFH0::uG6Mllm9Qd2pmd9Uvk9JsQ` |
| Deactivate Subscription Devices | POST | `/user-service/subscriptions/keys/{{subscriptionKey}}/deactivate` | `conn_mod_def::GL3RNEHsB4A::guH3n3p3QUOhsp2dvU2ZAA` |
| Delete Associated Devices for a Subscription | DELETE | `/user-service/subscriptions/devices` | `conn_mod_def::GL3RNDuwSwQ::ek096dycQqiBbCvd-4AJzw` |
| Remove a Feature Group from a Subscription | DELETE | `/user-service/subscriptions/{{subscriptionId}}/featureGroups/{{featureGroupId}}` | `conn_mod_def::GL3RNOILPRs::ISSID7tDSZWAPy6UBi04AQ` |
| Remove a Feature Group from a Subscription | DELETE | `/user-service/subscriptions/keys/{{subscriptionKey}}/featureGroups/{{featureGroupId}}` | `conn_mod_def::GL3RNTFdIao::57KG2J6nRrq7LDeHYqg82Q` |
| Remove a Feature Group from a Subscription | DELETE | `/user-service/subscriptions/keys/{{subscriptionKey}}/featureGroups/names/{{featureGroupName}}` | `conn_mod_def::GL3RNZbKhn0::yOJ324cmTE2qy8-yhFWGHw` |
| Update Subscription by ID | PUT | `/user-service/subscriptions/{{subscriptionId}}` | `conn_mod_def::GL3RNZIHyjM::aeimiSXBQ8aX0_9mzPHNPw` |

1 more Subscriptions actions are available through search.

### OpenApiSpecification

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OpenAPI Specification | GET | `/v2/openapi` | `conn_mod_def::GL3RF9UowVw::1tCllWPpRYCyq_UYC6OjTw` |
| Get OpenAPI Specification | GET | `/v8/openapi` | `conn_mod_def::GL3RGHABJN4::kp5Hx1E0RpKPXWDBFR4GaA` |
| Get OpenAPI Specification | GET | `/v8/openapi` | `conn_mod_def::GL3RGNHeXpk::6Aa9Vf5JR2upxmFMutDaqQ` |
| Get OpenAPI Specification | GET | `/v3/openapi` | `conn_mod_def::GL3RGPSieYg::DV9-Sf8LSeypm5E5O30dPg` |
| Get OpenAPI Specification | GET | `/v1/openapi` | `conn_mod_def::GL3RGPkEfnA::4NEW4BFuQnqAR9h4g9dSVA` |
| Get OpenAPI Specification | GET | `/v3/openapi` | `conn_mod_def::GL3RGzGhD6I::Uhz7mhhKQau9foCgfz5mvg` |
| Get OpenAPI Specification | GET | `/v3/openapi` | `conn_mod_def::GL3RGz_CzmA::9jwpDiyxRVmhboS0GjqLyQ` |
| Get OpenAPI Specification | GET | `/v8/openapi` | `conn_mod_def::GL3RG0D7s54::RKZOHIA0SZi5Jqvv2YWn0A` |
| Retrieve OpenAPI Specification | GET | `/v8/openapi` | `conn_mod_def::GL3RGOO9VsY::mPys45LSTRmlvDh6cam2MQ` |
| Retrieve OpenAPI Specification | GET | `/v8/openapi` | `conn_mod_def::GL3RGUxV7y8::iBi87tGXRl627P56fwdkSw` |
| Retrieve the OpenAPI Specification | GET | `/v7/openapi` | `conn_mod_def::GL3RGE4Bur0::bB1psLuwRsCnCW4YT_0aEA` |

### Version

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Version | GET | `/v1/version` | `conn_mod_def::GL3RGbcQgYQ::dbm5FfERQbi7oopjT-Ebiw` |
| Get Version | GET | `/v8/version` | `conn_mod_def::GL3RFQ7YzhA::hv3SJUSlSxe_2-j3sK5qYg` |
| Get Version | GET | `/v8/version` | `conn_mod_def::GL3RFu6vWvo::-zcAY2rxQQa4nNpcBBZIpw` |
| Get Version | GET | `/v3/version` | `conn_mod_def::GL3RG7ocenA::cXMTZr3fRCSTZFvf2qWpFg` |
| Get Version | GET | `/v8/version` | `conn_mod_def::GL3RG8kyXiw::D3V2-ka1Rv2hsLgm6-ZIcA` |
| Get Version | GET | `/v3/version` | `conn_mod_def::GL3RNZw8MSs::o7qAbpqDQRCtSAoKM8MUjg` |
| Get Version Using Intermodal Router v8 | GET | `/v8/version` | `conn_mod_def::GL3RG91DXhI::ACXz1NGXQl6g1L38T-nkOw` |
| Get Version Using Isoline Router v8 | GET | `/v8/version` | `conn_mod_def::GL3RFTK7Ips::Bxl1q7BjRECx2KqlSQzu_A` |
| Version | GET | `/v3/version` | `conn_mod_def::GL3RG8FkOaw::NkDtAbTDQ1KTJ7t_nB-HOg` |
| Version Using Mia v3 | GET | `/mia/v3/version` | `conn_mod_def::GL3RGE1KyUI::__V-S_bSTzaFO4qsGJRFww` |

### Features

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Feature by ID from a Layer | GET | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features/{{featureId}}` | `conn_mod_def::GL3RLuDWZyk::g8daglElRAaXefnqOLZfLQ` |
| Get Features | GET | `/mia/v3/features` | `conn_mod_def::GL3RLN8yjrk::_f04DFjdRsqUsRZPOZf6HQ` |
| Get Features by ID for a Layer | GET | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features` | `conn_mod_def::GL3RL5_O5Dk::LOgoyzTVTZqtG26yzMMYqg` |
| Get Features Using Maps v3 | GET | `/v3/features` | `conn_mod_def::GL3RLbhCrjA::DmnWJj5bSWmRdGllFPHnPg` |
| Iterate Features in a Layer | GET | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/iterate` | `conn_mod_def::GL3RMCNlm2Y::baQC9qs0TwqDFZzfvPwqMQ` |
| Search for Features in a Catalog Layer | GET | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/search` | `conn_mod_def::GL3RMCCLp84::5_74HTCLQkGQXW5Ez3463g` |
| Create or Replace Multiple Features in a Layer | PUT | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features` | `conn_mod_def::GL3RNtpzBak::w0KZg6ZZRkyCBkz5PiCVzw` |
| Delete Multiple Features from a Layer | DELETE | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features` | `conn_mod_def::GL3RN-chIjM::RHNN6UBOTxiJfBcUhl-yFw` |
| Modify Features in a Layer | POST | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features` | `conn_mod_def::GL3RN6pI3Pk::H8fE8cFyTIiMAqpTnhr9PA` |
| Spatial Search Features in a Layer | POST | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/spatial` | `conn_mod_def::GL3RL48G2gs::XUdpCe5YTnOYDduupJuyoA` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Health | GET | `/v8/health` | `conn_mod_def::GL3RF1mTyys::5oKy08TkTMuDizoVb6FzkA` |
| Get Health | GET | `/mia/v3/health` | `conn_mod_def::GL3RGqsf1HQ::MBPPf-3SSMqsudcqduOLFA` |
| Get Health | GET | `/v1/health` | `conn_mod_def::GL3RGswEslU::dAQKPmWBRgCmbvjsfi5GZA` |
| Get Health | GET | `/v3/health` | `conn_mod_def::GL3RGy5iHmE::GYxTstZTRQeiJ7QnS2TPEA` |
| Get Health | GET | `/v7/health` | `conn_mod_def::GL3RG2D0yG0::LkFtxMI9T2qAFX9oSw8HGA` |
| Get Health | GET | `/v3/health` | `conn_mod_def::GL3RNiCIc0I::dQ1OBATDQ4aq_syNX5ZS_g` |
| Health | GET | `/v3/health` | `conn_mod_def::GL3RF2rWZT8::ZLtEqs51TiCBr0aZPt0R3w` |
| Health Using V2 | GET | `/v2/health` | `conn_mod_def::GL3RG7xHXb8::heORHiJ8Twe5sHNqrp0dzg` |

### Problems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Solution for a Problem | GET | `/v3/problems/{{problemId}}/solution` | `conn_mod_def::GL3RHEGvuCk::eczn2yg7TEm399BRkeyCOg` |
| Cancel a Problem | PUT | `/v3/problems/{{problemId}}/cancel` | `conn_mod_def::GL3RHEUpmoQ::GIsz3qN5StelVMD-63HjEA` |
| Cancel a Problem | OPTIONS | `/v3/problems/{{problemId}}/cancel` | `conn_mod_def::GL3RIPTVU9A::nik8hMyKQ2qik_HaoRjo8A` |
| CORS Support for Problems | OPTIONS | `/v3/problems` | `conn_mod_def::GL3RIJYwZA4::udTH3J7AToGfGR1jt7q4bQ` |
| Enable CORS for a Problem Solution | OPTIONS | `/v3/problems/{{problemId}}/solution` | `conn_mod_def::GL3RIQhucSA::h7qkbs5XQ8u1sFuPOxQG0w` |
| Solve Vehicle Routing Problems Synchronously | POST | `/v3/problems` | `conn_mod_def::GL3RNZthSM4::cRgNvbeqSJez9etUaNy_rA` |
| Submit Problem Async Using Problems | POST | `/v3/problems/async` | `conn_mod_def::GL3RHEVxfPY::1sdlZfdeR02IEe7HUb-68g` |

### BatchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Job | GET | `/v7/batch/jobs/{{jobId}}` | `conn_mod_def::GL3RHsFkDzo::lsbF7psvQyecFYoz5tFG_Q` |
| Get Results for a Batch Job | GET | `/v7/batch/jobs/{{jobId}}/results` | `conn_mod_def::GL3RHtnTMMQ::jm4AVXGjRdaaZTuSl2K64Q` |
| List Batch Jobs | GET | `/v7/batch/jobs` | `conn_mod_def::GL3RHs2qW0I::eKKCRfLXTtWYkNn0sXcUTA` |
| Create Job Using Batch Search v7 | POST | `/v7/batch/jobs` | `conn_mod_def::GL3RHlZ9n1U::DTJrJ7MqRluW9A6c4UeYSg` |
| Delete a Batch Job | DELETE | `/v7/batch/jobs/{{jobId}}` | `conn_mod_def::GL3RHguTIPQ::pyM01g4ATkSIwn1GPGcqKw` |
| Start a Batch Job | PUT | `/v7/batch/jobs/{{jobId}}/start` | `conn_mod_def::GL3RHw-0Mak::B7lUZ2mOSU2QwbmquR-hiA` |
| Stop a Batch Job | PUT | `/v7/batch/jobs/{{jobId}}/stop` | `conn_mod_def::GL3RH3oXzOU::UoRpj8aBSTynUNBcf5_izw` |

### Routes

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Indoor Routes | GET | `/v1/routes` | `conn_mod_def::GL3RJdQ1-DI::eiYthAycRNCzwOb-CF9Pxw` |
| Calculate Routes | GET | `/v8/routes` | `conn_mod_def::GL3RMcdBXN4::F2vmz7-_QXatpFCItSP9ZA` |
| Get Route by Handle | GET | `/v8/routes/{{routeHandle}}` | `conn_mod_def::GL3RMxXwomQ::KuctAIL6Tx2cD-hYy3ylYA` |
| Calculate Routes | POST | `/v8/routes` | `conn_mod_def::GL3RMxtifa8::K5UQvBETQOW8xTMuvVRSNw` |
| Get Route by Handle Using Routes | POST | `/v8/routes/{{routeHandle}}` | `conn_mod_def::GL3RM9aG7nk::4ZKnkc6LTyOjIGixNCzIqA` |
| Import Route | POST | `/v8/import` | `conn_mod_def::GL3RMbHZUIM::pw5_wKtwRi-DYGOg_O60fQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Notification | GET | `/v7/batch/notifications/{{notificationId}}` | `conn_mod_def::GL3RH3qEGs8::ZVXS7iy0SuKU6gXkkSwGyA` |
| Get All Notifications | GET | `/v7/batch/notifications` | `conn_mod_def::GL3RH3ziOxA::Lt60xluQRmmXG9sh2Hk_wQ` |
| Test a Notification | GET | `/v7/batch/notifications/{{notificationId}}/test` | `conn_mod_def::GL3RH-yFPoY::hK9QkhjqST6p46eFM_zjMA` |
| Create a New Notification | POST | `/v7/batch/notifications` | `conn_mod_def::GL3RH4S1r5w::rym3ZzMARIaRIgJbvLAZPQ` |
| Delete a Notification | DELETE | `/v7/batch/notifications/{{notificationId}}` | `conn_mod_def::GL3RH3t1kk0::aoIJTkggTqS7Fmqk_ttmjw` |

### HealthStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Health Status | GET | `/v3/health` | `conn_mod_def::GL3RF02P6ok::0Ipk1QrHQfOW9-5NEyh02w` |
| Get Health Status | GET | `/v8/health` | `conn_mod_def::GL3RF1VOSCI::DW8vO41IRUuCc5Kskr_gaQ` |
| Get Health Status | GET | `/v8/health` | `conn_mod_def::GL3RF8h-jfg::N-bhgZdIQ1O8YsOOxOiiUA` |
| Get Health Status | GET | `/v8/health` | `conn_mod_def::GL3RF-Yovpg::cgbOo7fDSXqQ8JgjjPdKEQ` |

### VersionInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Version Information | GET | `/v3/version` | `conn_mod_def::GL3RF8bIAKc::AiGv9QYSQ0y2K3REe_hgIQ` |
| Get Version Information | GET | `/v7/version` | `conn_mod_def::GL3RGE3Fdjg::3rb1rp1BQg-BPj6jfc23ZQ` |
| Get Version Information | GET | `/v3/version` | `conn_mod_def::GL3RGGLX_Mk::mfvRb2OKRguvC0E7WXtuiA` |
| Get Version Information | GET | `/v2/version` | `conn_mod_def::GL3RGo_4API::bZ32RSW6SOWh19X-8GhkSQ` |

### FuelStations

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Retrieve Fuel Stations | GET | `/v3/stations/bulk` | `conn_mod_def::GL3RIhf5GK4::kaCPAQEvTrCvFceoppXDNA` |
| Count Fuel Stations | GET | `/v3/stations/count` | `conn_mod_def::GL3RIXNkKIs::kyAsROSETvimRRDQkEgtaA` |
| Get a Fuel Station by ID | GET | `/v3/stations/{{id}}` | `conn_mod_def::GL3RIXVwb7c::F3wtjUF8SlCFxUt6k-a5Cg` |
| Search Fuel Stations | GET | `/v3/stations` | `conn_mod_def::GL3RIZnMwT4::pUT-A8XCQpOkh5ZnkmjOoA` |

### LayerFeatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Spatial Radius Search for Layer Features | GET | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/spatial` | `conn_mod_def::GL3RL5Tflfg::kDr_8hTqSYqAqE5mVQEi6A` |
| Create or Replace a Layer Feature | PUT | `/interactive/v1/catalogs/{{catalogHrn}}/layers/{{layerId}}/features/{{featureId}}` | `conn_mod_def::GL3RNvddZGE::W0mr11gQQBmpj_JSk5WiKg` |

2 more LayerFeatures actions are available through search.

This lists 90 of 224 actions. For anything not here, call `search_one_platform_actions` with platform `here`. The full catalog is at https://www.withone.ai/knowledge/here.

## When a call fails

The error comes from Here, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/here

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
