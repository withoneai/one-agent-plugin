---
name: rudder-stack
description: RudderStack is a warehouse-native customer data platform that helps teams collect, unify, activate, and govern customer data, with APIs, CLI, and AI-powered workflows for building and managing data pipelines, profiles, analytics, and downstream integrations. Read and write RudderStack data through One: transformations, trackingplans, libraries, eventschemas, datacatalogproperties, trackingplanevents and more, 73 actions with real parameter documentation. Use whenever the user asks to look something up in RudderStack, create or update a record there, or build code against the RudderStack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rudder-stack
  generated-from: one-knowledge-base
---

# RudderStack through One

RudderStack is a warehouse-native customer data platform that helps teams collect, unify, activate, and govern customer data, with APIs, CLI, and AI-powered workflows for building and managing data pipelines, profiles, analytics, and downstream integrations.

One exposes RudderStack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rudder-stack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm RudderStack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real RudderStack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transformations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transformations | GET | `/transformations` | `conn_mod_def::GMRHwu_fT-g::bicMdhvsQGiZWV71Scb_Iw` |
| Retrieve a Single Transformation | GET | `/transformations/{{id}}` | `conn_mod_def::GMRHw2JaiZs::rc3WwGr5SlCZVU69Jb9Wfg` |
| Retrieve a Transformation Version | GET | `/transformations/{{id}}/versions/{{versionId}}` | `conn_mod_def::GMRHw8BLqAE::_ZJdP8LbR0Sit-qUFdLG_A` |
| Connect a Transformation to a Destination | POST | `/transformations/{{id}}/connectToDestination` | `conn_mod_def::GMRHvFi5ZmY::45u1o1PKS56cnfNV0saFHg` |
| Create a Transformation | POST | `/transformations` | `conn_mod_def::GMRHwrlKVjo::544H71BZQA283borh7Iqpg` |
| Delete a Transformation | DELETE | `/transformations/{{id}}` | `conn_mod_def::GMRHwqryJMs::CaEEaVvBSiyjLZ-k9Ssyfw` |
| Disconnect a Transformation From a Destination | POST | `/transformations/{{id}}/disconnectFromDestination` | `conn_mod_def::GMRHvHGrgKg::cRFFFupaQYKYsIw2KHf2AA` |
| Publish a Transformation | POST | `/transformations` | `conn_mod_def::GMRHwrLKGsQ::lVf9SuRiSRCD3kYtN22TyA` |
| Update a Transformation | POST | `/transformations/{{id}}` | `conn_mod_def::GMRHw3oKImU::ovs4Z01eSm-zvTOXfcZTaw` |

### TrackingPlans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tracking Plan by ID | GET | `/v2/catalog/tracking-plans/{{trackingPlanId}}` | `conn_mod_def::GMRHwbLtCKE::MQIn8o7vTvCmt1EXC-6S4w` |
| List Tracking Plans | GET | `/v2/catalog/tracking-plans` | `conn_mod_def::GMRHwZ23VNA::jPJVbCwHQb-7xMW9VQoIFA` |
| Create a Tracking Plan | POST | `/v2/catalog/tracking-plans` | `conn_mod_def::GMRHwa0tWv4::nd4AuygoQjywB9nBulRfmw` |
| Delete a Tracking Plan | DELETE | `/v2/catalog/tracking-plans/{{trackingPlanId}}` | `conn_mod_def::GMRHwbRmT0c::1RUJRbRNTJ-pznFyq0v_wA` |
| Update a Tracking Plan | PUT | `/v2/catalog/tracking-plans/{{trackingPlanId}}` | `conn_mod_def::GMRHwbDasoo::d1v8a_fDRaOqWmHk_Sd17Q` |
| Upsert Events for a Tracking Plan | PUT | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events` | `conn_mod_def::GMRHwSm52Gc::oKmQZ28XQUy2yWDB6fjOxA` |
| Upsert Events for a Tracking Plan | PATCH | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events` | `conn_mod_def::GMRHwT1jNsI::1tt3XnNDRq-8VFkvKOnnhQ` |

### Libraries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Libraries | GET | `/libraries` | `conn_mod_def::GMRHveBLu50::MnwuMSDOTr-BmpchPZXuTA` |
| Retrieve a Library by ID | GET | `/libraries/{{id}}` | `conn_mod_def::GMRHveKW4RE::woLChdeDThKeQFglikZsEg` |
| Create a Library | POST | `/libraries` | `conn_mod_def::GMRHvV_5hb0::TrzkeQoiSV-f90VB5IXhVw` |
| Delete a Library | DELETE | `/libraries/{{id}}` | `conn_mod_def::GMRHvVflfW0::yTLvG9F-TZuH2rvQuA2U1g` |
| Publish Transformations or Libraries | POST | `/libraries/publish` | `conn_mod_def::GMRHwhqc09Y::Qeh57jl4RQGreqBJhxSPiQ` |
| Update and Publish a Library | POST | `/libraries/{{id}}` | `conn_mod_def::GMRHvd4tWOo::NG9Ua1rlRtWyFJQ79bk2vw` |

### EventSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Event Schemas | GET | `/v2/schemas` | `conn_mod_def::GMRHvGrqbHI::EQD-NfMwTs6hScKJqOaQcA` |
| Get Event Schemas | GET | `/v2/schemas` | `conn_mod_def::GMRHvOx60sY::Dxw6WNRpQHGz6eN47RsH0w` |
| List Event Schemas | GET | `/v2/schemas` | `conn_mod_def::GMRHvFjrQ4A::_8bGyFdJTiKlzQBrrQnYgw` |
| List Event Schemas | GET | `/v2/schemas` | `conn_mod_def::GMRHvGV-X-k::BhOY_wjMTJKX5Sz4RmPKgw` |

### DataCatalogProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Catalog Property by ID | GET | `/v2/catalog/properties/{{propertyId}}` | `conn_mod_def::GMRHwA4xatk::cz5mU6ZVTNaZokmOtAusAg` |
| List Data Catalog Properties | GET | `/v2/catalog/properties` | `conn_mod_def::GMRHwCSzTPs::CPOdhTu7S9Ci-rqMumr7Vg` |
| Create a Data Catalog Property | POST | `/v2/catalog/properties` | `conn_mod_def::GMRHwAOUo8k::80KW9ewrTHqkWbyo9Agfcg` |
| Update a Data Catalog Property | PUT | `/v2/catalog/properties/{{propertyId}}` | `conn_mod_def::GMRHwBGRbOU::ukQfyTsKRQKmu6yObyKyVA` |

### TrackingPlanEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tracking Plan Event by ID | GET | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events/{{eventId}}` | `conn_mod_def::GMRHwSUnWkA::MjqOT4GQRvOirC06d_7ozQ` |
| List Events in a Tracking Plan | GET | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events` | `conn_mod_def::GMRHwR2-e30::oJbpGOJATVqcd7OdZjcBqQ` |
| Delete Event from a Tracking Plan | DELETE | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events/{{eventId}}` | `conn_mod_def::GMRHwKWCt8Q::AX3scE6-T7Kc2rxZ0dO3nQ` |
| Upsert an Event with Properties for a Tracking Plan | POST | `/v2/catalog/tracking-plans/{{trackingPlanId}}/events` | `conn_mod_def::GMRHwTCOGhE::sVFgPzVASQObxsTpyNKAvQ` |

### Regulations

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Suppression Regulation | POST | `/v2/regulations` | `conn_mod_def::GMRHu-FKr6o::SW1VMPLhSm2KQDaSD6gA1w` |
| Add a Suppression with Delete Regulation | POST | `/v2/regulations` | `conn_mod_def::GMRHurit9Kk::mPvU5aMaSEK2xvHl_fY5QA` |
| Cancel a User Suppression Regulation | DELETE | `/v2/regulations/{{regulationId}}` | `conn_mod_def::GMRHuqkNntg::Mr_6SViOSNKfQgvuCAsEDQ` |

### CustomTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Type by ID | GET | `/v2/catalog/custom-types/{{customTypeId}}` | `conn_mod_def::GMRHvo8zeZc::V3IMhrCySOaqDQlT5Z9--g` |
| Create Custom Types for the Data Catalog | POST | `/v2/catalog/custom-types` | `conn_mod_def::GMRHvlFzWyo::d2OA2Oh7QcCVVEWIg5YD3g` |
| Update a Custom Type | PUT | `/v2/catalog/custom-types/{{customTypeId}}` | `conn_mod_def::GMRHvv3ENr0::jA9B5mxZSNCc2X7xcQjNgg` |

### DataCatalogCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Catalog Category by ID | GET | `/v2/catalog/categories/{{categoryId}}` | `conn_mod_def::GMRHvv3P878::ObAadNn0SjaKTNbRLzJeUA` |
| List Data Catalog Categories | GET | `/v2/catalog/categories` | `conn_mod_def::GMRHvvog808::guFzmVP4Ts6WpTLE9BRFTQ` |
| Delete a Data Catalog Category | DELETE | `/v2/catalog/categories/{{categoryId}}` | `conn_mod_def::GMRHvvjSvww::TRCUSyVQQkSfO8tYswiwBA` |

### ReverseEtlConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Sync for a Reverse ETL Connection | POST | `/v2/retl-connections/{{connectionId}}/start` | `conn_mod_def::GMRHwkLOXbw::KrxJqGvhSneIsv-Ca3QWMQ` |
| Stop a Reverse ETL Connection Sync | POST | `/v2/retl-connections/{{connectionId}}/stop` | `conn_mod_def::GMRHutLEcwY::HK93vkrCQIKmk0sI5QzzaQ` |

### EventSchemaVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Versions of an Event Schema | GET | `/v2/schemas/{{schemaUid}}/versions` | `conn_mod_def::GMRHvOPQaNo::c4_gu2ySQo-QcuOvl3d0jg` |
| List Versions for an Event Schema | GET | `/v2/schemas/{{schemaId}}/versions` | `conn_mod_def::GMRHvOHhnWo::3XcamXAqRd-2unrLHYjF9A` |

### ReverseEtlConnectionSyncs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reverse ETL Connection Sync | GET | `/v2/retl-connections/{{connectionId}}/syncs/{{syncId}}` | `conn_mod_def::GMRHvWvnxF0::K9couz85QuiItq62nTbbIA` |
| List a Reverse ETL Connection's Syncs | GET | `/v2/retl-connections/{{connectionId}}/syncs` | `conn_mod_def::GMRHvW1ro1o::F8uX_EssRQqs4zJkLrK63A` |

### LibraryVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Library's Versions | GET | `/libraries/{{id}}/versions` | `conn_mod_def::GMRHveVVESU::4gkpTHXlSiCevy71rQG3ew` |
| Retrieve a Single Library Version | GET | `/libraries/{{id}}/versions/{{versionId}}` | `conn_mod_def::GMRHveWzPkI::ItORjKm4SGqvWtahufhFxA` |

### DataCatalogEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Data Catalog Events | GET | `/v2/catalog/events` | `conn_mod_def::GMRHv24L1GU::0lg4hfiQR6iXV4JE5vNVXQ` |
| Create a Data Catalog Event | POST | `/v2/catalog/events` | `conn_mod_def::GMRHv2oyvxY::V5Fsf6QOTE6Ij0qU4SR0dA` |

### CatalogEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Catalog Event | DELETE | `/v2/catalog/events/{{eventId}}` | `conn_mod_def::GMRHv2ps5KU::SNiGsw0kQyWQByU9xCGfag` |
| Update a Catalog Event | PUT | `/v2/catalog/events/{{eventId}}` | `conn_mod_def::GMRHv3ZXA9s::sDOJssg-QtGKdKd5_OQUlQ` |

### TrackingPlanSourceConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Source Connection for a Tracking Plan | POST | `/v2/catalog/tracking-plans/{{trackingPlanId}}/sources/{{sourceId}}` | `conn_mod_def::GMRHwKpQch0::kyh26EH7TYClaJim5qkDOA` |
| Delete a Source Connection from a Tracking Plan | DELETE | `/v2/catalog/tracking-plans/{{trackingPlanId}}/sources/{{sourceId}}` | `conn_mod_def::GMRHwIZUWsE::MQT3Bo__SzGxyesu5A3FLA` |

### AuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audit Logs | GET | `/v2/audit-logs` | `conn_mod_def::GMRHuyP1Imo::xKDBpm8hT8mCGkofat-Rng` |

### Schemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schema by ID | GET | `/v2/schemas/{{schemaId}}` | `conn_mod_def::GMRHvOZ2mio::73bZur4-SBm22y8bDHhQNw` |

### ProfilesProjectRunStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Profiles Project Run Status | GET | `/v2/sources/{{profilesId}}/runs/{{runId}}/status` | `conn_mod_def::GMRHvOwXd2s::ZM6HMAYIQeW5UADMejvFGg` |

### SchemaVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schema Version by ID | GET | `/v2/schemas/{{schemaId}}/versions/{{versionId}}` | `conn_mod_def::GMRHvVuD0Y4::jWyD9lkjRlC2AYgFKluMow` |

### UserSuppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Suppressions | GET | `/v2/regulations` | `conn_mod_def::GMRHvlOT3gk::ZKhqLlK9SxiHrK2H-NTDkQ` |

### CustomDataTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Data Types | GET | `/v2/catalog/custom-types` | `conn_mod_def::GMRHvlZPWTY::5yMILSpFT0ybwlNMXlnVew` |

### CustomDataType

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Custom Data Type | DELETE | `/v2/catalog/custom-types/{{customTypeId}}` | `conn_mod_def::GMRHvlxP03A::WMIQ6ZEfQWKeHLWOElVeTQ` |

### CatalogCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Data Catalog Category | POST | `/v2/catalog/categories` | `conn_mod_def::GMRHvvQgvhQ::CFhQplvySXOAtVraEqftZw` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event by ID | GET | `/v2/catalog/events/{{eventId}}` | `conn_mod_def::GMRHv4s8_0o::z4w3tlGKSc-u2pKy7_WM3g` |

### CatalogProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Catalog Property | DELETE | `/v2/catalog/properties/{{propertyId}}` | `conn_mod_def::GMRHv_s9fbA::rY6KuftmQjmpNh7WdGBjWA` |

### TrackingPlanSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources Connected to a Tracking Plan | GET | `/v2/catalog/tracking-plans/{{trackingPlanId}}/sources` | `conn_mod_def::GMRHwJHIHKU::Zl2OFkBsTmWMjSk3ZRIVdQ` |

### TrackingPlanConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Tracking Plan Configuration for a Source | PUT | `/v2/catalog/tracking-plans/{{trackingPlanId}}/sources/{{sourceId}}` | `conn_mod_def::GMRHwK5YweE::GEY5Oql4QkivRLl15WWnPg` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources | GET | `/v2/sources` | `conn_mod_def::GMRHwhf1H4w::6P2UO6zGQa6dhtwphOSJTg` |

### Destinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Destinations | GET | `/v2/destinations` | `conn_mod_def::GMRHwiKV8hs::iUzuz8ZxQXWeCVKj2T2fJQ` |

### ProfilesProjectRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Profiles Project Run | POST | `/v2/sources/{{profilesId}}/start` | `conn_mod_def::GMRHwifThqA::HaChVrGqSTG2jSXARnMfIw` |

### TransformationVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transformation Versions for a Transformation | GET | `/transformations/{{id}}/versions` | `conn_mod_def::GMRHwqzkRV4::Glp0nAmLRvudvXFPKDVJrg` |

## When a call fails

The error comes from RudderStack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rudder-stack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
