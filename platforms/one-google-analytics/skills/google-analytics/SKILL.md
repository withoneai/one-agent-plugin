---
name: google-analytics
description: Google Analytics is a web and app analytics platform that provides reporting on user activity, traffic sources, and engagement, allowing teams to measure performance, understand audience behavior, and inform marketing and product decisions. Read and write Google Analytics data through One: properties, accounts, conversionevents, datastreams, measurementprotocolsecrets, customdimensions and more, 66 actions with real parameter documentation. Use whenever the user asks to look something up in Google Analytics, create or update a record there, or build code against the Google Analytics API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-analytics
  generated-from: one-knowledge-base
---

# Google Analytics through One

Google Analytics is a web and app analytics platform that provides reporting on user activity, traffic sources, and engagement, allowing teams to measure performance, understand audience behavior, and inform marketing and product decisions.

One exposes Google Analytics through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-analytics` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Analytics is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Analytics account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Properties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Google Analytics Property | GET | `/v1beta/properties/{{propertiesId}}` | `conn_mod_def::GMdLZUy7FDU::TOJ6gRC0Q3O74Hstt29BEQ` |
| List Properties | GET | `/v1beta/properties` | `conn_mod_def::GMdLZk9I0JA::qv0b0Zt5TyiGo_jABdvXUw` |
| Acknowledge User Data Collection for a Property | POST | `/v1beta/properties/{{propertiesId}}:acknowledgeUserDataCollection` | `conn_mod_def::GMdLYaAmr3g::ECflpSB-TBivwVxGJIr3iA` |
| Check Compatibility for a Property | POST | `/v1beta/properties/{{propertiesId}}:checkCompatibility` | `conn_mod_def::GMdLZ6ugMYs::-cGVY2YLRbCNBEAnPvHM_w` |
| Create a Google Analytics Property | POST | `/v1beta/properties` | `conn_mod_def::GMdLYprJ1Ak::OoYDjjXDRuSsShm11n0EfA` |
| Delete a Property | DELETE | `/v1beta/properties/{{propertiesId}}` | `conn_mod_def::GMdLZMZddf4::LuLqfLNOSnKATM7tmacJlA` |
| Run Access Report for a Property | POST | `/v1beta/properties/{{propertiesId}}:runAccessReport` | `conn_mod_def::GMdLZlWlJyA::pHoz1NM-Qkmk7eQJRJrPVA` |
| Run Pivot Report for a Property | POST | `/v1beta/properties/{{propertiesId}}:runPivotReport` | `conn_mod_def::GMdLZ7C6r0k::Cyd-5_XPTIavQ0tFHqLVtQ` |
| Run Report for a Property | POST | `/v1beta/properties/{{propertiesId}}:runReport` | `conn_mod_def::GMdLaCZ12Ts::l8iOJb25QsedLDR-xOEq9g` |
| Update a Property | PATCH | `/v1beta/properties/{{propertiesId}}` | `conn_mod_def::GMdLZk76qqs::tjnfwvgvRiiJHauXUXR7Kw` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/v1beta/accounts/{{accountsId}}` | `conn_mod_def::GMdLYJBiYtA::1g478mP8Q5yRn6LqgcWwPw` |
| List Accounts | GET | `/v1beta/accounts` | `conn_mod_def::GMdLYK0tG-E::B-aKtd6SRvqBYdirbc4uSg` |
| Delete an Account | DELETE | `/v1beta/accounts/{{accountsId}}` | `conn_mod_def::GMdLYIkHH4o::IXZYFHlGS7qIZAkRHO0fsw` |
| Provision Account Ticket for Google Analytics Admin Accounts | POST | `/v1beta/accounts:provisionAccountTicket` | `conn_mod_def::GMdLYYzmfvw::ndZI01OVS4SF1xph5ntR6Q` |
| Run Access Report for an Account | POST | `/v1beta/accounts/{{accountsId}}:runAccessReport` | `conn_mod_def::GMdLYZqziIY::SI-hF7z1SpulseeZ42j9Ow` |
| Update an Account | PATCH | `/v1beta/accounts/{{accountsId}}` | `conn_mod_def::GMdLYSh5MP0::jH_Tgg7wQIerGUmIvmZ_Kw` |

### ConversionEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property Conversion Event | GET | `/v1beta/properties/{{propertiesId}}/conversionEvents/{{conversionEventsId}}` | `conn_mod_def::GMdLYhpy9bE::JGIVKG4tRx2YRWgnAk_lug` |
| List Conversion Events for a Property | GET | `/v1beta/properties/{{propertiesId}}/conversionEvents` | `conn_mod_def::GMdLYhPy22k::gWejx5BeSDipaMjP9L0LGQ` |
| Create a Property Conversion Event | POST | `/v1beta/properties/{{propertiesId}}/conversionEvents` | `conn_mod_def::GMdLYjJonJE::buw1uAK5TMWmTv_UtrptlQ` |
| Delete a Property Conversion Event | DELETE | `/v1beta/properties/{{propertiesId}}/conversionEvents/{{conversionEventsId}}` | `conn_mod_def::GMdLYg8o1io::F7LF4vznRi2ppH--mEitvA` |
| Update a Property Conversion Event | PATCH | `/v1beta/properties/{{propertiesId}}/conversionEvents/{{conversionEventsId}}` | `conn_mod_def::GMdLYhaM6mk::iSa1CR30RbqUuij-FLeHxg` |

### DataStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property's Data Stream | GET | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}` | `conn_mod_def::GMdLY7ddZrY::f7UZ1yxTSdiradV6EzyWVQ` |
| List a Property's Data Streams | GET | `/v1beta/properties/{{propertiesId}}/dataStreams` | `conn_mod_def::GMdLY7cbhPc::-k9g_x4wROylomRSQ4TVFg` |
| Create a Property Data Stream | POST | `/v1beta/properties/{{propertiesId}}/dataStreams` | `conn_mod_def::GMdLY6zSuno::4adF5XA3QQ2osjVdYN-1Pw` |
| Delete a Property's Data Stream | DELETE | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}` | `conn_mod_def::GMdLY8K1ZJo::85K4DT4ERom0dilH2jqRQw` |
| Update a Property's Data Stream | PATCH | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}` | `conn_mod_def::GMdLZO239_M::6JWNL7UwRo2xMIMN6O8rlA` |

### MeasurementProtocolSecrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Measurement Protocol Secret for a Property Data Stream | GET | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}/measurementProtocolSecrets/{{measurementProtocolSecretsId}}` | `conn_mod_def::GMdLZDQcjK0::vweymMoZR1GN2fvUvHrnXw` |
| List Measurement Protocol Secrets for a Property Data Stream | GET | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}/measurementProtocolSecrets` | `conn_mod_def::GMdLZGal5xY::ILyhnO8kRIq-WPu7g_5V-A` |
| Create a Data Stream Measurement Protocol Secret for a Property | POST | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}/measurementProtocolSecrets` | `conn_mod_def::GMdLZC2JOYI::zel8urkISxKxhYkLhD9zPg` |
| Delete a Measurement Protocol Secret for a Property Data Stream | DELETE | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}/measurementProtocolSecrets/{{measurementProtocolSecretsId}}` | `conn_mod_def::GMdLZCe5-yM::9wfE855wQFGDx3hxnx8uAQ` |
| Update a Measurement Protocol Secret for a Property Data Stream | PATCH | `/v1beta/properties/{{propertiesId}}/dataStreams/{{dataStreamsId}}/measurementProtocolSecrets/{{measurementProtocolSecretsId}}` | `conn_mod_def::GMdLZDUXapQ::mNM3DyMsTfisoEwxoYaTlg` |

### CustomDimensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property's Custom Dimension | GET | `/v1beta/properties/{{propertiesId}}/customDimensions/{{customDimensionsId}}` | `conn_mod_def::GMdLYp7vqMM::qprRY-R5QtqiXKxrEFfL2Q` |
| List a Property's Custom Dimensions | GET | `/v1beta/properties/{{propertiesId}}/customDimensions` | `conn_mod_def::GMdLYqh9Fvg::z7N_941QQre6ikVA8xKn4w` |
| Create a Custom Dimension for a Property | POST | `/v1beta/properties/{{propertiesId}}/customDimensions` | `conn_mod_def::GMdLYplBf-0::WsSyW2kFSESKWYaqOb1KuA` |
| Update a Property Custom Dimension | PATCH | `/v1beta/properties/{{propertiesId}}/customDimensions/{{customDimensionsId}}` | `conn_mod_def::GMdLY0f1qMM::8O0gkg3HSYqaYAOzeB_rtA` |

### CustomMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Property's Custom Metrics | GET | `/v1beta/properties/{{propertiesId}}/customMetrics` | `conn_mod_def::GMdLYxk3wn4::A855-Rx-TCem3v0RQcoG2A` |
| Archive a Property Custom Metric | POST | `/v1beta/properties/{{propertiesId}}/customMetrics/{{customMetricsId}}:archive` | `conn_mod_def::GMdLYxSQHbQ::bpDda1mGQEeIy56B7hQV8A` |
| Create a Custom Metric for a Property | POST | `/v1beta/properties/{{propertiesId}}/customMetrics` | `conn_mod_def::GMdLYxxbEJU::JJ62yqlTQOuCsyep0L7GgQ` |
| Update a Property's Custom Metric | PATCH | `/v1beta/properties/{{propertiesId}}/customMetrics/{{customMetricsId}}` | `conn_mod_def::GMdLY8bVJnw::O0T_ic7IQKeJs3gizgJmoA` |

### GoogleAdsLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Property's Google Ads Links | GET | `/v1beta/properties/{{propertiesId}}/googleAdsLinks` | `conn_mod_def::GMdLZVfwgig::vHkBO1bFTHuQew8LLsrS5w` |
| Create a Google Ads Link for a Property | POST | `/v1beta/properties/{{propertiesId}}/googleAdsLinks` | `conn_mod_def::GMdLZU3-mKQ::DElm8JN7S4CCm1BVgqFJ6w` |
| Delete a Property's Google Ads Link | DELETE | `/v1beta/properties/{{propertiesId}}/googleAdsLinks/{{googleAdsLinksId}}` | `conn_mod_def::GMdLZVIxV-U::MP74K5vTQJ-Lq429dvGR4A` |
| Update a Property's Google Ads Link | PATCH | `/v1beta/properties/{{propertiesId}}/googleAdsLinks/{{googleAdsLinksId}}` | `conn_mod_def::GMdLZczrQkg::da3eHl20TJOu_KOSgVX_8Q` |

### KeyEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Key Events for a Property | GET | `/v1beta/properties/{{propertiesId}}/keyEvents` | `conn_mod_def::GMdLZcyrA_o::yCXChPCOSZStp0ps7CPf4A` |
| Create a Key Event for a Property | POST | `/v1beta/properties/{{propertiesId}}/keyEvents` | `conn_mod_def::GMdLZdCC1mk::xsfBYM-JTcONKw29Hd6ppw` |
| Delete a Property Key Event | DELETE | `/v1beta/properties/{{propertiesId}}/keyEvents/{{keyEventsId}}` | `conn_mod_def::GMdLZdxFops::eT2NjPU1TdOAF87KICoiQA` |
| Update a Property's Key Event | PATCH | `/v1beta/properties/{{propertiesId}}/keyEvents/{{keyEventsId}}` | `conn_mod_def::GMdLZlA4Lag::_0cbUAnlT4eD2CQB6ieRTQ` |

### AudienceExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audience Export for a Property | GET | `/v1beta/properties/{{propertiesId}}/audienceExports/{{audienceExportsId}}` | `conn_mod_def::GMdLZywXqrA::IiYfMgIeTuOZs56LxJstkA` |
| List a Property's Audience Exports | GET | `/v1beta/properties/{{propertiesId}}/audienceExports` | `conn_mod_def::GMdLZ0AyPA8::tFrovcdGQdSEMfloY3TD9w` |
| Create an Audience Export for a Property | POST | `/v1beta/properties/{{propertiesId}}/audienceExports` | `conn_mod_def::GMdLZyYZ0xY::kIKMLi9yT9ScwnH9VTi_qQ` |
| Query an Audience Export for a Property | POST | `/v1beta/properties/{{propertiesId}}/audienceExports/{{audienceExportsId}}:query` | `conn_mod_def::GMdLZykb3r8::D2egbMQkTkydOF3j7nI4Xw` |

### FirebaseLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Firebase Links for a Property | GET | `/v1beta/properties/{{propertiesId}}/firebaseLinks` | `conn_mod_def::GMdLZOi5euU::iBIPrUneT9KjesMjzfrCLQ` |
| Create a Firebase Link for a Property | POST | `/v1beta/properties/{{propertiesId}}/firebaseLinks` | `conn_mod_def::GMdLZNNGbNA::H6ZqxTC4Rr6uleJkZpNcBg` |
| Delete a Firebase Link on a Property | DELETE | `/v1beta/properties/{{propertiesId}}/firebaseLinks/{{firebaseLinksId}}` | `conn_mod_def::GMdLZOK0epo::fcKIGa7VRtmn2Kgve269zg` |

### DataRetentionSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property's Data Retention Settings | GET | `/v1beta/properties/{{propertiesId}}/dataRetentionSettings` | `conn_mod_def::GMdLZVmz1cY::eB457pS_StODVeNVgEjM1g` |
| Update a Property's Data Retention Settings | PATCH | `/v1beta/properties/{{propertiesId}}/dataRetentionSettings` | `conn_mod_def::GMdLZrfnX3E::q-R6lOKnSAaVs9j-Z9AQnw` |

### DataSharingSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account's Data Sharing Settings | GET | `/v1beta/accounts/{{accountsId}}/dataSharingSettings` | `conn_mod_def::GMdLYJVFJCM::SRJxfTmlQPCImoU5oboj9Q` |

### AccountSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Summaries | GET | `/v1beta/accountSummaries` | `conn_mod_def::GMdLYZ-rVuw::ls_sUMXxQXC0cvbB_o-csQ` |

### ChangeHistoryEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Change History Events for an Account | POST | `/v1beta/accounts/{{accountsId}}:searchChangeHistoryEvents` | `conn_mod_def::GMdLYaGW-gw::YqIy3_q1Q9mP9qNO35Ow8A` |

### PropertyCustomDimensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Property Custom Dimension | POST | `/v1beta/properties/{{propertiesId}}/customDimensions/{{customDimensionsId}}:archive` | `conn_mod_def::GMdLYqFbmtY::CHl1OYulS52WySeAKGgvbQ` |

### CustomMetric

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property's Custom Metric | GET | `/v1beta/properties/{{propertiesId}}/customMetrics/{{customMetricsId}}` | `conn_mod_def::GMdLYxZ7CSI::Ge_dWQ30QkuQn3uxw7b4Nw` |

### KeyEvent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property Key Event | GET | `/v1beta/properties/{{propertiesId}}/keyEvents/{{keyEventsId}}` | `conn_mod_def::GMdLZceEvm0::9k2c-RG3QDyq0Iw1kpQRAQ` |

### GoogleAnalyticsPivotReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Run Pivot Reports for a Google Analytics Property | POST | `/v1beta/properties/{{propertiesId}}:batchRunPivotReports` | `conn_mod_def::GMdLZzV3fUo::rFSSS9UyQ_SKQgmFvTZwJw` |

### Metadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metadata for a Google Analytics Property | GET | `/v1beta/properties/{{propertiesId}}/metadata` | `conn_mod_def::GMdLZ6cOfeQ::6sEw5zXHQISvAh8qC6QjSQ` |

### RealtimeReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Realtime Report for a Property | POST | `/v1beta/properties/{{propertiesId}}:runRealtimeReport` | `conn_mod_def::GMdLZ7HdLvA::vEMkaM27RFyG1uFbkPPCNw` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Run Reports for a Property | POST | `/v1beta/properties/{{propertiesId}}:batchRunReports` | `conn_mod_def::GMdLZ7il5rU::MRhKGDeGQ46yge5TJfzhZA` |

## When a call fails

The error comes from Google Analytics, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-analytics

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
