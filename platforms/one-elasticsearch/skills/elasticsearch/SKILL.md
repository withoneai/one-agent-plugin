---
name: elasticsearch
description: A distributed, RESTful search and analytics engine that enables applications to perform fast full-text search, structured querying, and real-time data analysis across large volumes of data for logging, monitoring, and discovery use cases. Read and write Elasticsearch data through One: inferenceendpoints, connectors, anomalydetectors, indices, documents, trainedmodels and more, 550 actions with real parameter documentation. Use whenever the user asks to look something up in Elasticsearch, create or update a record there, or build code against the Elasticsearch API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: elasticsearch
  generated-from: one-knowledge-base
---

# Elasticsearch through One

A distributed, RESTful search and analytics engine that enables applications to perform fast full-text search, structured querying, and real-time data analysis across large volumes of data for logging, monitoring, and discovery use cases.

One exposes Elasticsearch through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `elasticsearch` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Elasticsearch is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Elasticsearch account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### InferenceEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inference Endpoint (by Task Type and Inference ID) | GET | `/_inference/{{taskType}}/{{inferenceId}}` | `conn_mod_def::GKBWys21fw0::hKiHVH7yRMy708lYdJ9MWw` |
| Create a Cohere Inference Endpoint | PUT | `/_inference/{{taskType}}/{{cohereInferenceId}}` | `conn_mod_def::GKBWvAJ03gI::_cpnQY7rS8CBWv9O13SsYw` |
| Create a Contextual AI Inference Endpoint | PUT | `/_inference/{{taskType}}/{{contextualaiInferenceId}}` | `conn_mod_def::GKBWxUh7_og::oXaheHK2T0KTUvgxV03eYA` |
| Create a DeepSeek Inference Endpoint | PUT | `/_inference/{{taskType}}/{{deepseekInferenceId}}` | `conn_mod_def::GKBWvPc47wY::G97evLY-TmOUVAGCsm43EQ` |
| Create a Fireworks AI Inference Endpoint | PUT | `/_inference/{{taskType}}/{{fireworksaiInferenceId}}` | `conn_mod_def::GKBWvXfWowc::1CbKgt92SDCKteDSUwIVqg` |
| Create a Google AI Studio Inference Endpoint | PUT | `/_inference/{{taskType}}/{{googleaistudioInferenceId}}` | `conn_mod_def::GKBWxsMvVPQ::jPpWlt41RWuqt5KpVbEa4A` |
| Create a Google Vertex AI Inference Endpoint | PUT | `/_inference/{{taskType}}/{{googlevertexaiInferenceId}}` | `conn_mod_def::GKBWvf9P0Ik::hNiEgeywRsy-u5pFBRHqDg` |
| Create a Groq Inference Endpoint | PUT | `/_inference/{{taskType}}/{{groqInferenceId}}` | `conn_mod_def::GKBWvn4o5NY::JaQN3ZwfQ5qR5SMF23mDmg` |
| Create a Hugging Face Inference Endpoint for a Task | PUT | `/_inference/{{taskType}}/{{huggingfaceInferenceId}}` | `conn_mod_def::GKBWvwSFIYI::MBRjwXMgTpaMcHR1iM7SsQ` |
| Create a JinaAI Inference Endpoint | PUT | `/_inference/{{taskType}}/{{jinaaiInferenceId}}` | `conn_mod_def::GKBWyELJdf4::2iL3MXoTSAOqffafPnUP7w` |
| Create a Llama Inference Endpoint | PUT | `/_inference/{{taskType}}/{{llamaInferenceId}}` | `conn_mod_def::GKBWv4XnHRc::7P2eW5xMRvOC3HnzYpn1FQ` |
| Create a Mistral Inference Endpoint | PUT | `/_inference/{{taskType}}/{{mistralInferenceId}}` | `conn_mod_def::GKBWwH_2OTs::1QsgvpZRTbmccQzqfYiUfw` |

17 more InferenceEndpoints actions are available through search.

### Connectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connector | GET | `/_connector/{{connectorId}}` | `conn_mod_def::GKBWXpGVQnk::vBEHFQU2T0-DoEbvz-y6HQ` |
| List Connectors | GET | `/_connector` | `conn_mod_def::GKBWYL9Lbg4::BbMdBB1pR0-BumN8ZoQrmg` |
| Activate a Connector's Draft Filtering | PUT | `/_connector/{{connectorId}}/_filtering/_activate` | `conn_mod_def::GKBWWUTgZkA::7XUD9eebSau9wTycgUPZ0g` |
| Check In a Connector | PUT | `/_connector/{{connectorId}}/_check_in` | `conn_mod_def::GKBWWo4ny6A::xmtAY55zSZKWmBX-dcRJXA` |
| Create a Connector | POST | `/_connector` | `conn_mod_def::GKBWXAI4JLs::E31monTDRDmvqH5oGg2HVQ` |
| Create or Update a Connector | PUT | `/_connector/{{connectorId}}` | `conn_mod_def::GKBWXP4mLYE::Ptcm_G-5RWmeqcZdEuCHXw` |
| Delete a Connector | DELETE | `/_connector/{{connectorId}}` | `conn_mod_def::GKBWXYyfSWs::veMjTDv5RMqYkR9oGkCPUQ` |
| Update a Connector Draft Filtering Validation | PUT | `/_connector/{{connectorId}}/_filtering/_validation` | `conn_mod_def::GKBWY0dPiDU::MN4SWoT6Tpyxx81PZwxdiA` |
| Update a Connector's API Key ID | PUT | `/_connector/{{connectorId}}/_api_key_id` | `conn_mod_def::GKBWYkRdYik::3TVHwvaiSLGh9yVXfMBtEg` |
| Update a Connector's Configuration | PUT | `/_connector/{{connectorId}}/_configuration` | `conn_mod_def::GKBWYsZxE2k::er8hv5WLSd2FG7MEW15s8w` |
| Update a Connector's Error Field | PUT | `/_connector/{{connectorId}}/_error` | `conn_mod_def::GKBWY76CKtY::jh-jrA5FTfqkqUo5Jtnh-A` |
| Update a Connector’s Features | PUT | `/_connector/{{connectorId}}/_features` | `conn_mod_def::GKBWZDMSkj8::p6zKcqjNRqau5dx6Mfw8DQ` |

8 more Connectors actions are available through search.

### AnomalyDetectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Anomaly Detection Job Model Snapshot Upgrade Stats | GET | `/_ml/anomaly_detectors/{{jobId}}/model_snapshots/{{snapshotId}}/_upgrade/_stats` | `conn_mod_def::GKBW8HZBBMQ::M7QGriDUSD6BntsROciNHA` |
| Get Anomaly Detection Job Stats | GET | `/_ml/anomaly_detectors/{{jobId}}/_stats` | `conn_mod_def::GKBW8rCjhNU::Fh4YtkTbSbKICJMFZ29oTQ` |
| Get Anomaly Detection Jobs Configuration | GET | `/_ml/anomaly_detectors/{{jobId}}` | `conn_mod_def::GKBW80aHOhE::puGqmr9cT6OWoeYpCS5y6Q` |
| Close Anomaly Detection Jobs | POST | `/_ml/anomaly_detectors/{{jobId}}/_close` | `conn_mod_def::GKBW5zBNkwk::eQJDMeZmQK2HFyoGbbhtYA` |
| Create an Anomaly Detection Job | PUT | `/_ml/anomaly_detectors/{{jobId}}` | `conn_mod_def::GKBW6V-UmoE::olRpGPfPTi6vxuUoerE9zA` |
| Delete an Anomaly Detection Job | DELETE | `/_ml/anomaly_detectors/{{jobId}}` | `conn_mod_def::GKBW69me8gA::Hu401fRRQX6Np6SW6lyAhA` |
| Delete an Anomaly Detection Job's Model Snapshot | DELETE | `/_ml/anomaly_detectors/{{jobId}}/model_snapshots/{{snapshotId}}` | `conn_mod_def::GKBW61FW2wo::mshssNgOS5ONsgklg1lypg` |
| Estimate Anomaly Detection Job Model Memory Usage | POST | `/_ml/anomaly_detectors/_estimate_model_memory` | `conn_mod_def::GKBW7z5QAHU::LJ1OfhmZT5ehaPEMg2sqMQ` |
| Flush an Anomaly Detection Job's Buffered Data | POST | `/_ml/anomaly_detectors/{{jobId}}/_flush` | `conn_mod_def::GKBW7-6OAtw::mTACDqeVRYaseHsCmax5Zg` |
| Forecast an Anomaly Detection Job (Time Series) | POST | `/_ml/anomaly_detectors/{{jobId}}/_forecast` | `conn_mod_def::GKBW-WaX1b8::ex0_gzmgTlG6Bog9Fj2rDw` |
| Get Anomaly Detection Job Bucket Results | POST | `/_ml/anomaly_detectors/{{jobId}}/results/buckets/{{timestamp}}` | `conn_mod_def::GKBW8Rlu448::4Qh05mDUQn-V7v4LBtJZ1w` |
| Get Anomaly Detection Job Category Results | POST | `/_ml/anomaly_detectors/{{jobId}}/results/categories/{{categoryId}}` | `conn_mod_def::GKBW8Zl5_yY::DPACatoSRoSF98451LkQzA` |

6 more AnomalyDetectors actions are available through search.

### Indices

| Action | Method | Path | Action id |
|---|---|---|---|
| Flush Data Streams or Indices | GET | `/{{index}}/_flush` | `conn_mod_def::GKBWpg2s6R8::TMp6vR4FQ1mxkQhwXpFS9Q` |
| Get Index Information | GET | `/{{index}}` | `conn_mod_def::GKBWqRE2mrk::EfnPH-T6RbuGhgUE3LPHMQ` |
| Refresh One or More Indices | GET | `/{{index}}/_refresh` | `conn_mod_def::GKBWs6TA92k::VWBwpWWQTjOx8fc3oNS8Lw` |
| Check If Indices (or Aliases/Data Streams) Exist | HEAD | `/{{index}}` | `conn_mod_def::GKBWnDrzTZs::QhTY0vqTTrOf6sj-eqyrBQ` |
| Clear Cache for One or More Indices | POST | `/{{index}}/_cache/clear` | `conn_mod_def::GKBWnNh2nys::KH4j-2tFT0CHsEnpM3Nb-Q` |
| Clone an Index to a Target Index | POST | `/{{index}}/_clone/{{target}}` | `conn_mod_def::GKBWnXcBst0::o5ED89VkRo2r2MZZlmKGVg` |
| Close an Index | POST | `/{{index}}/_close` | `conn_mod_def::GKBWngp4qHo::zXThL-AuSkKzjxZnrKNkhg` |
| Create an Index | PUT | `/{{index}}` | `conn_mod_def::GKBWnqMqvTc::M_QqOrXRTHuACUaML5fUTg` |
| Create an Index From a Source Index | POST | `/_create_from/{{source}}/{{dest}}` | `conn_mod_def::GKBW3wI0ZRo::ueHdWkNFRo-zJQ0c8sT8fg` |
| Delete Indices | DELETE | `/{{index}}` | `conn_mod_def::GKBWpXuB8co::ri8jZF4NT9a0tJq-gmhG-Q` |
| Force Merge One or More Indices | POST | `/{{index}}/_forcemerge` | `conn_mod_def::GKBWprDN6hw::Xa9BS_OYQTWptPr31U-BHw` |
| Open a Closed Index (or Data Stream Backing Indices) | POST | `/{{index}}/_open` | `conn_mod_def::GKBWsxeWj1s::91kHIdfBTNqssI7KdYEeyg` |

5 more Indices actions are available through search.

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Search Results (Documents) in an Index | GET | `/{{index}}/_count` | `conn_mod_def::GKBXHVBXRp0::6JP3imr5RQmyG9rxYqYiLQ` |
| Get a Document from an Index by ID | GET | `/{{index}}/_doc/{{id}}` | `conn_mod_def::GKBWeeMI4_0::IXtftiPmTyWDh-MhVooZgg` |
| Get a Document’s Source from an Index | GET | `/{{index}}/_source/{{id}}` | `conn_mod_def::GKBWepIz-IU::ce_nIWV8RK2LKb_gLv6MQA` |
| Check Whether a Document Exists in an Index | HEAD | `/{{index}}/_doc/{{id}}` | `conn_mod_def::GKBWdR0eIkQ::N8nkFVSTRpm692navPwAlA` |
| Check Whether a Document’s `_source` Exists in an Index | HEAD | `/{{index}}/_source/{{id}}` | `conn_mod_def::GKBWdhf1BAY::VtE8HW0URCeU69YiLvqeIQ` |
| Create a New Document in an Index (Create-Only) | POST | `/{{index}}/_create/{{id}}` | `conn_mod_def::GKBWdtvePHA::SBKpS1FJS3iLulix6YyM5g` |
| Create or Update a Document in an Index | POST | `/{{index}}/_doc/{{id}}` | `conn_mod_def::GKBWd6gOdDY::gOxs3WrUSrOtVQI3SkX7uA` |
| Delete a Document from an Index | DELETE | `/{{index}}/_doc/{{id}}` | `conn_mod_def::GKBWeEmnrDk::zcHMVFsMQOG1VKWZ7z-mMw` |
| Delete Documents by Query in an Index | POST | `/{{index}}/_delete_by_query` | `conn_mod_def::GKBWeSGkQiY::86nGbGy-QQ6cG3LrzliTkA` |
| Get Multiple Documents From an Index (Multi Get) | POST | `/{{index}}/_mget` | `conn_mod_def::GKBWe4NgbvE::ea0YrAqyTdW7Bq51OIYvOw` |
| Update a Document in an Index | POST | `/{{index}}/_update/{{id}}` | `conn_mod_def::GKBWgHAecTk::33uV1PsPRfSRT_VX9LitDQ` |
| Update Documents in an Index (Update By Query) | POST | `/{{index}}/_update_by_query` | `conn_mod_def::GKBWgYKsZTg::1eboi5LfRlGEyYm9cyh5uA` |

### TrainedModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trained Model Configuration Info | GET | `/_ml/trained_models/{{modelId}}` | `conn_mod_def::GKBXC2lyMGo::Xji0PIKERx2sE2o3QoDvjw` |
| Get Trained Models (CAT) | GET | `/_cat/ml/trained_models/{{modelId}}` | `conn_mod_def::GKBWQy6sVnU::juybtn-fQQ-ICvGBIg8yhw` |
| Get Trained Models Usage Statistics | GET | `/_ml/trained_models/{{modelId}}/_stats` | `conn_mod_def::GKBXDBPYArQ::kZ_TEu9cS3KDx6Sj2fjujQ` |
| Clear a Trained Model Deployment Cache | POST | `/_ml/trained_models/{{modelId}}/deployment/cache/_clear` | `conn_mod_def::GKBXBlvHo6Q::H4UfKXEUToainjKbsh7CuA` |
| Create a Trained Model | PUT | `/_ml/trained_models/{{modelId}}` | `conn_mod_def::GKBXBum3sl0::d_hEwItfTzig5S4AC4mtKg` |
| Create a Trained Model Vocabulary | PUT | `/_ml/trained_models/{{modelId}}/vocabulary` | `conn_mod_def::GKBXB3HN1EQ::NfUA4RT1R2a3uJ0VrV2eXQ` |
| Create Part of a Trained Model Definition | PUT | `/_ml/trained_models/{{modelId}}/definition/{{part}}` | `conn_mod_def::GKBXCI5fIqs::9NGgkD2rTIKYYsVEBPTPag` |
| Delete a Trained Model Alias for a Trained Model | DELETE | `/_ml/trained_models/{{modelId}}/model_aliases/{{modelAlias}}` | `conn_mod_def::GKBXCRDQSrA::_HRnVY6SQbueKabVDVk5LA` |
| Delete an Unreferenced Trained Model | DELETE | `/_ml/trained_models/{{modelId}}` | `conn_mod_def::GKBXCZUYC1w::op3_OUD5SRaH8OOL-A0dPQ` |
| Infer Using a Trained Model | POST | `/_ml/trained_models/{{modelId}}/_infer` | `conn_mod_def::GKBXCq4c6aY::1Bu2a5pSRBCbzETM4PKD6A` |
| Stop a Trained Model Deployment | POST | `/_ml/trained_models/{{modelId}}/deployment/_stop` | `conn_mod_def::GKBXDXJOQiM::_bbVzMTdSc21QXIm56P_kw` |

### Transforms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transforms Configuration | GET | `/_transform/{{transformId}}` | `conn_mod_def::GKBXbnQ005E::uXsH3LgbQqCtLp3RWc_wnw` |
| Create a Transform | PUT | `/_transform/{{transformId}}` | `conn_mod_def::GKBXbIUIklQ::IV_CdOEfR9aUz9haRiK15g` |
| Delete a Transform | DELETE | `/_transform/{{transformId}}` | `conn_mod_def::GKBXbPnAWig::w4BGvnI7RquZPPCdJKD7Zw` |
| Preview a Transform | POST | `/_transform/{{transformId}}/_preview` | `conn_mod_def::GKBXbvWiKUU::1fxwg-n4TW6BVA8HIrkKZA` |
| Reset a Transform | POST | `/_transform/{{transformId}}/_reset` | `conn_mod_def::GKBXb3GzHAQ::iO2Ub6F4TsK7ctip2aQxDg` |
| Schedule a Transform to Start Now | POST | `/_transform/{{transformId}}/_schedule_now` | `conn_mod_def::GKBXb-_gEZQ::wz3HN3wVSI6C2kmfZrG9cA` |
| Start a Transform | POST | `/_transform/{{transformId}}/_start` | `conn_mod_def::GKBXcOf6f_0::janm7UscSCuF0V5eSd4DkQ` |
| Stop Transforms | POST | `/_transform/{{transformId}}/_stop` | `conn_mod_def::GKBXcYw7Hss::Fhe52GjxS2inYwZVbZcXsw` |
| Update a Transform | POST | `/_transform/{{transformId}}/_update` | `conn_mod_def::GKBXciPvm6Y::S9Tir4XKQ-auITuO8Tt0PA` |
| Upgrade All Transforms | POST | `/_transform/_upgrade` | `conn_mod_def::GKBXcxg-u0c::jBng1B94T72qshEP2QIi2g` |

### ConnectorSyncJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connector Sync Job | GET | `/_connector/_sync_job/{{connectorSyncJobId}}` | `conn_mod_def::GKBWX5lHLuI::XZfrxjmySGu-xUeY-JEdVA` |
| List Connector Sync Jobs | GET | `/_connector/_sync_job` | `conn_mod_def::GKBWYCXz8H8::goq1cCeAS4qvo70nKhEygw` |
| Cancel a Connector Sync Job | PUT | `/_connector/_sync_job/{{connectorSyncJobId}}/_cancel` | `conn_mod_def::GKBWWhYY1cs::u-n5abJETjOAjmha6n2A1g` |
| Check In a Connector Sync Job | PUT | `/_connector/_sync_job/{{connectorSyncJobId}}/_check_in` | `conn_mod_def::GKBWWv78V50::qndUomkYRG2M4CdvjveU5A` |
| Claim a Connector Sync Job | PUT | `/_connector/_sync_job/{{connectorSyncJobId}}/_claim` | `conn_mod_def::GKBWW3_vzcg::x5mwPDrKTz2XtRUQEPLa5w` |
| Create a Connector Sync Job | POST | `/_connector/_sync_job` | `conn_mod_def::GKBWXIIDB9k::r8YIQ3VaTemH9RpaxXr0Gg` |
| Delete a Connector Sync Job | DELETE | `/_connector/_sync_job/{{connectorSyncJobId}}` | `conn_mod_def::GKBWXg_qF7U::l-4n5CY7QhSeMP70Wog2lQ` |
| Set a Connector Sync Job Error | PUT | `/_connector/_sync_job/{{connectorSyncJobId}}/_error` | `conn_mod_def::GKBWYT-R3Mo::A3x4p_1lSla9MyORtsakxQ` |
| Set a Connector Sync Job's Stats | PUT | `/_connector/_sync_job/{{connectorSyncJobId}}/_stats` | `conn_mod_def::GKBWYcOK9RY::9pQVnl7OTfu4hW1dh5DW4A` |

This lists 90 of 550 actions. For anything not here, call `search_one_platform_actions` with platform `elasticsearch`. The full catalog is at https://www.withone.ai/knowledge/elasticsearch.

## When a call fails

The error comes from Elasticsearch, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/elasticsearch

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
