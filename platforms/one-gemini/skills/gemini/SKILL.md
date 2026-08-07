---
name: gemini
description: Gemini is a family of AI models created by Google DeepMind, designed to be multimodal, fast, and scalable. It's used across various applications including search, productivity tools, and generative AI experiences. Read and write Gemini data through One: models, tunedmodels, permissions, files, corpora, filesearchstores and more, 79 actions with real parameter documentation. Use whenever the user asks to look something up in Gemini, create or update a record there, or build code against the Gemini API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gemini
  generated-from: one-knowledge-base
---

# Gemini through One

Gemini is a family of AI models created by Google DeepMind, designed to be multimodal, fast, and scalable. It's used across various applications including search, productivity tools, and generative AI experiences.

One exposes Gemini through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gemini` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gemini is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gemini account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Generative Language Model | GET | `/v1beta/models/{{model}}` | `conn_mod_def::GKYsL8Y5m58::ckS1WR-iRSigCCBsytBEnQ` |
| List Models | GET | `/v1beta/models` | `conn_mod_def::GKYsMHIpLTo::k91wqdA6Sz-4LHVroxlNkQ` |
| Async Batch Embed Content for a Model | POST | `/v1beta/models/{{model}}:asyncBatchEmbedContent` | `conn_mod_def::GKYsLhtiRsk::1x-8PgTPQ8Gi_RvnSuHoyw` |
| Batch Embed Contents for a Model | POST | `/v1beta/models/{{model}}:batchEmbedContents` | `conn_mod_def::GKYsLheH12Q::Tpg2bcnfSjenI3U6jlwKzQ` |
| Batch Embed Text with a Model | POST | `/v1beta/models/{{model}}:batchEmbedText` | `conn_mod_def::GKYsLf12yjs::q6GeUdVvRD-1Ypp78HJ84Q` |
| Batch Generate Content for a Model | POST | `/v1beta/models/{{model}}:batchGenerateContent` | `conn_mod_def::GKYsLgo5q6A::nafDBdDxTtSbHDL1yBV0nQ` |
| Count Message Tokens for a Model | POST | `/v1beta/models/{{model}}:countMessageTokens` | `conn_mod_def::GKYsLra3uIM::Hhhx9dTtS3iiajtPA2Y-cg` |
| Count Text Tokens for a Model | POST | `/v1beta/models/{{model}}:countTextTokens` | `conn_mod_def::GKYsLrH7B2U::kbdKs_LRSEOhFBwaZfAv3w` |
| Count Tokens for a Model | POST | `/v1beta/models/{{model}}:countTokens` | `conn_mod_def::GKYsLtW4Jb4::CHgbHbmjQLWTVM_JgUebuw` |
| Generate Content With a Model | POST | `/v1beta/models/{{model}}:generateContent` | `conn_mod_def::GKYsL21usZ8::V-gBgeQuT06Ynd5FjAyvnA` |
| Generate Text with a Model | POST | `/v1beta/models/{{model}}:generateText` | `conn_mod_def::GKYsL2knTHM::3GVDrTQFRsmdI2RDIoWSKg` |
| Predict With a Model | POST | `/v1beta/models/{{model}}:predict` | `conn_mod_def::GKYsMOmEjWQ::lhY7DeFRQKm4pVdkCcM2Kw` |

1 more Models actions are available through search.

### TunedModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tuned Model | GET | `/v1beta/tunedModels/{{model}}` | `conn_mod_def::GKYsMiuv_UI::AoqkB8uJQX6MB7sn-p5NnA` |
| List Tuned Models | GET | `/v1beta/tunedModels` | `conn_mod_def::GKYsMnNzi3s::ECrGGeL0RkKBptHbjApI0Q` |
| Async Batch Embed Content for a Tuned Model | POST | `/v1beta/tunedModels/{{model}}:asyncBatchEmbedContent` | `conn_mod_def::GKYsMY4pflk::LYeqDpyMS86kGc1vtb90qg` |
| Batch Generate Content for a Tuned Model | POST | `/v1beta/tunedModels/{{model}}:batchGenerateContent` | `conn_mod_def::GKYsMZ3zdRg::eoPDw4N9RdGBlNEIWNCaPA` |
| Create a Tuned Model | POST | `/v1beta/tunedModels` | `conn_mod_def::GKYsMYTiV_c::DSAiuXe6QrKuz_iBRkTBJQ` |
| Delete a Tuned Model | DELETE | `/v1beta/tunedModels/{{tunedModel}}` | `conn_mod_def::GKYsMW1Nz_c::BgW0PRjQQ1iDoFZtk-Xuiw` |
| Generate Content With a Tuned Model | POST | `/v1beta/tunedModels/{{model}}:generateContent` | `conn_mod_def::GKYsMnDEduk::3yB0Le0cROSQdK2y2Te7jw` |
| Generate Text with a Tuned Model | POST | `/v1beta/tunedModels/{{tunedModel}}:generateText` | `conn_mod_def::GKYsMjEfkNQ::imqD76R1Tje8SbiMx_AM2Q` |
| Stream Generate Content With a Tuned Model | POST | `/v1beta/tunedModels/{{model}}:streamGenerateContent` | `conn_mod_def::GKYsM_cc60U::CCasMKUvQEW4dVwdl0-6ng` |
| Transfer Ownership of a Tuned Model | POST | `/v1beta/tunedModels/{{tunedModel}}:transferOwnership` | `conn_mod_def::GKYsM_iaovY::aOnq-IEmTjG023io8-LgAw` |
| Update a Tuned Model | PATCH | `/v1beta/tunedModels/{{tunedModel}}` | `conn_mod_def::GKYsMxvo_HU::ohQqvJdDQ9i5rTcoGMnSbQ` |

### Permissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Corpus Permission | GET | `/v1beta/corpora/{{corpus}}/permissions/{{permission}}` | `conn_mod_def::GKYsKvB0pGE::vUkxJ601S5uEErdN4pGH4Q` |
| Get a Tuned Model or Corpus Permission | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsM17GpXU::89cl6xVoT56IxC64aTaHFQ` |
| List Permissions for a Corpus or Tuned Model | GET | `/v1beta/{{parent}}/permissions` | `conn_mod_def::GKYsKOTsT0M::vFQn51DKRe-gm3F9yNsmQg` |
| List Permissions for a Tuned Model or Corpus | GET | `/v1beta/{{parent}}/permissions` | `conn_mod_def::GKYsM_DsOH4::nBPtilwGRxSGh7NO9LzMrg` |
| Create a Permission for a Tuned Model or Corpus | POST | `/v1beta/{{parent}}/permissions` | `conn_mod_def::GKYsMxyDzpY::FQSn6MAIQMCcgCgcH8vArA` |
| Delete a Tuned Model or Corpus Permission | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsMvkPW0A::yBmhupOnSFWuAmnSuzV2lg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsK4qsDWs::QVkSKR_jRKmCEcaEf0sAMg` |
| List Files | GET | `/v1beta/files` | `conn_mod_def::GKYsLEfnQ_o::NayZEbWTS4qiHB6hHuCbXA` |
| Create a File | POST | `/v1beta/files` | `conn_mod_def::GKYsLW66JK4::Ho2eYHyxSvmnMyGp3bOYBA` |
| Delete a File | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsK8fPUyw::8UbkTHBvTKmQKmlJF3Oo2w` |
| Register Google Cloud Storage Files | POST | `/v1beta/files:register` | `conn_mod_def::GKYsLD3FN2Y::feScrEUUT2uquXIEJ9E-nQ` |

### Corpora

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Corpus | GET | `/v1beta/corpora/{{corporaId}}` | `conn_mod_def::GKYsKDNlZTE::AxNw2esNRlKObo3m1foDvA` |
| List Corpora | GET | `/v1beta/corpora` | `conn_mod_def::GKYsKDV_B1o::o2tkAU8xQvyfERQaK2gOXw` |
| Create a Corpus | POST | `/v1beta/corpora` | `conn_mod_def::GKYsKDRkXXs::TAHX9NyJQjetfvnQTcSwGQ` |
| Delete a Corpus | DELETE | `/v1beta/corpora/{{name}}` | `conn_mod_def::GKYsKDBKUHg::kuEYBphWSFKj-OLm5Oo1KA` |

### FileSearchStores

| Action | Method | Path | Action id |
|---|---|---|---|
| List File Search Stores | GET | `/v1beta/fileSearchStores` | `conn_mod_def::GKYsLNSf2NA::XEageWdZTZW4RCC6oIWS3w` |
| Create a File Search Store | POST | `/v1beta/fileSearchStores` | `conn_mod_def::GKYsLEfpq64::44V5w0aUSt-sqYfVjjthIQ` |
| Delete a File Search Store | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsLEfvB0w::dygE6DbjRk6wgz_VPUCugA` |
| Import a File into a File Search Store | POST | `/v1beta/{{fileSearchStoreName}}:importFile` | `conn_mod_def::GKYsLOABXic::UBTnt-FPSRCWPtupKAcvRg` |

### CorpusPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Corpus Permission | POST | `/v1beta/corpora/{{corpus}}/permissions` | `conn_mod_def::GKYsKOkVHew::DzoOmg0fSOCC_Xmcl15aiw` |
| Delete a Corpus Permission | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsKS_AoBg::_p5QxtcYQfGsuW3o66FP9g` |
| Update a Corpus Permission | PATCH | `/v1beta/{{name}}` | `conn_mod_def::GKYsK68QkbQ::1hpAdSJ5TN-dpPYjaHhTHA` |

### BatchOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsJqAVEjA::9ZPhHfrzQfqkEMgIm4J7cw` |
| List Batch Operations | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsJrogp58::iR9UAd_cRjuOGM7Vuy44Kw` |
| Cancel a Batch Operation | POST | `/v1beta/{{name}}:cancel` | `conn_mod_def::GKYsJqrjuhE::ltDkmXYESM2rxYCzYs7K2w` |

### FileSearchStoreDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Search Store Document | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsLMt8PWE::wpBsGxvIQ_mpgKefMIngUg` |
| Delete a File Search Store Document | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsLEraJZk::uSPGrM9yRB2tWRAZlCsiXw` |
| Upload Data to a FileSearchStore | POST | `/upload/v1beta/{{fileSearchStoreName}}:uploadToFileSearchStore` | `conn_mod_def::GKYsLiC2FLg::25nFrFUbSteWtcVTRKyGtQ` |

### CachedContents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cached Contents | GET | `/v1beta/cachedContents` | `conn_mod_def::GKYsJ6FmJec::B9kiEp7KRja_swRPVvncMQ` |
| Create Cached Content | POST | `/v1beta/cachedContents` | `conn_mod_def::GKYsJ2CIytI::Mb91BgZARIClKfYslUz4VA` |
| Delete a Cached Content Resource | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsJ1xYggI::I7Uqs8cpQvypIYmx4VFv0Q` |

### CachedContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cached Content Entry | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsJ1mrleo::I0fayY5ITNOGIPPnO0mmlQ` |
| Update a Cached Content Resource | PATCH | `/v1beta/{{name}}` | `conn_mod_def::GKYsKEUH2RE::Ngx2RMgJTzish_Kh3v5vTA` |

### DynamicModelContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Content With a Dynamic Model | POST | `/v1beta/dynamic/{{model}}:generateContent` | `conn_mod_def::GKYsK60cZI8::F30b76KETq-Pp6E4s-7nyQ` |
| Stream Generate Content From a Dynamic Model | POST | `/v1beta/dynamic/{{model}}:streamGenerateContent` | `conn_mod_def::GKYsK5-tOsU::swREjwrmRL2-rbU5H59qWQ` |

### CorpusOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Corpus Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsKM4eEPg::mFtMU-fQT_m95NOkBLvczg` |

### GroundedAnswers

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Grounded Answer with a Model | POST | `/v1beta/models/{{model}}:generateAnswer` | `conn_mod_def::GKYsL3002ss::GY3nbMnLRpiSoHfMMSZuqA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Message with a Model | POST | `/v1beta/models/{{model}}:generateMessage` | `conn_mod_def::GKYsL36MnUM::0OqalEBoQDa4KZiMsfiRvQ` |

### Operations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Model's Operations | GET | `/v1beta/models/{{name}}/operations` | `conn_mod_def::GKYsMIWxbAs::SsMDTP_dRQK26pIAHxAQwQ` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Batch Operation | DELETE | `/v1beta/{{name}}` | `conn_mod_def::GKYsJprdWec::ljo4MT2PRvSn7TCrCoTNMA` |

### EmbedContentBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Embed Content Batch | PATCH | `/v1beta/{{name}}:updateEmbedContentBatch` | `conn_mod_def::GKYsJsSLdJs::5hJgi1IZRHSN9mxrRcJqXA` |

### GenerateContentBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Generate Content Batch | PATCH | `/v1beta/{{name}}:updateGenerateContentBatch` | `conn_mod_def::GKYsJ6DPPKQ::mLLPCj1sRFic9pB6zfRZmQ` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Documents in a File Search Store | GET | `/v1beta/{{parent}}/documents` | `conn_mod_def::GKYsLNjpLFg::1rGabJfXRG-oOqrq9qhinA` |

### ContentEmbeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Content Embedding with a Model | POST | `/v1beta/models/{{model}}:embedContent` | `conn_mod_def::GKYsLrICU4k::-QdjkeYySpau6Z88kVWVog` |

### TunedModelsOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Tuned Model's Operations | GET | `/v1beta/tunedModels/{{name}}/operations` | `conn_mod_def::GKYsMw70lnM::zvPOr67ER-W9xdx0Dr5L1w` |

### TextEmbeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Text Embedding with a Model | POST | `/v1beta/models/{{model}}:embedText` | `conn_mod_def::GKYsLqn9paU::rVezZNv_TXKjCOON4b6_mA` |

### FileSearchStore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Search Store | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsLMgbF6g::bK0O-jM7Q-qCQIqzURNr0g` |

### GeneratedFileOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Generated File Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsLWHUGb4::bujJThNUSBmr7LJdsvAGjQ` |

### FileSearchStoreUploadOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Search Store Upload Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsLWC4hS4::ykfAMhTOSFK-PG5FrVoWpA` |

### GeneratedFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Generated Files | GET | `/v1beta/generatedFiles` | `conn_mod_def::GKYsLWeeVk8::FHnLn4fGTO6lXqNTIRqjRw` |

### FileSearchStoreOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Search Store Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsLWCtOsw::2rRclEX_QFuVa1WBMVggaA` |

### ModelOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model Operation | GET | `/v1beta/models/{{model}}/operations/{{operation}}` | `conn_mod_def::GKYsMGvVUFc::wtCQcnYiQImNneAlus0uzQ` |

### LongRunningPredictions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Long-Running Prediction for a Model | POST | `/v1beta/models/{{model}}:predictLongRunning` | `conn_mod_def::GKYsMH61QnE::PqO8aBzSS7-39fQRfXrlTQ` |

### TunedModelOperations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tuned Model Operation | GET | `/v1beta/{{name}}` | `conn_mod_def::GKYsMiP-ec8::bAOo2M7GROylNiBf-1YGMQ` |

### TunedModelPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Tuned Model Permission | PATCH | `/v1beta/{{name}}` | `conn_mod_def::GKYsM-8bAok::sOOcVLH1TRO7bjAehhSXdA` |

This lists 78 of 79 actions. For anything not here, call `search_one_platform_actions` with platform `gemini`. The full catalog is at https://www.withone.ai/knowledge/gemini.

## When a call fails

The error comes from Gemini, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gemini

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
