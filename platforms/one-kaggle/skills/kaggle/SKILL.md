---
name: kaggle
description: Kaggle is an AI platform that enables builders, researchers, and labs to evaluate agents, models, and frontier technology through crowdsourced benchmarks, competitions, and hackathons, helping users discover what works in AI and compare performance across approaches. Read and write Kaggle data through One: models, datasets, competitions, kernels, modelinstanceversions, competitiondatafiles and more, 39 actions with real parameter documentation. Use whenever the user asks to look something up in Kaggle, create or update a record there, or build code against the Kaggle API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: kaggle
  generated-from: one-knowledge-base
---

# Kaggle through One

Kaggle is an AI platform that enables builders, researchers, and labs to evaluate agents, models, and frontier technology through crowdsourced benchmarks, competitions, and hackathons, helping users discover what works in AI and compare performance across approaches.

One exposes Kaggle through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `kaggle` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Kaggle is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Kaggle account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model | GET | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/get` | `conn_mod_def::GMKVWkD9r8E::In4uBaVFRRGmlfu0oC4uoA` |
| Get a Model Instance | GET | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/get` | `conn_mod_def::GMKVXzMH1wQ::osPRJfRuR2uTSPQCHAcknw` |
| List Models | GET | `/api/v1/models/list` | `conn_mod_def::GMKVYTqUJ9w::LWfeiudUTIC_KDahzggA4g` |
| Create a Version for a Model Instance | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/create/version` | `conn_mod_def::GMKVWBxNFT4::ZqKovZtkSQmvJDdu6-LF0g` |
| Create an Instance for a Model | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/create/instance` | `conn_mod_def::GMKVUyUCCWM::B8bycQdAQZOJUGOh0dOcTQ` |
| Create New Model | POST | `/api/v1/models/create/new` | `conn_mod_def::GMKVUyr7hps::av2tHY46QtqILCnXYxZSOg` |
| Delete a Model | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/delete` | `conn_mod_def::GMKVVidnjtw::hxdvFObWQSqu4aBxCYAh8A` |
| Delete a Model Instance | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/delete` | `conn_mod_def::GMKVVj76_sI::cwDvvA3PQjyIgQKhLXzfaQ` |
| Update a Model | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/update` | `conn_mod_def::GMKVaDSULM8::zZmGXTukSfaNYI2hpadsVQ` |
| Update a Model Instance | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/update` | `conn_mod_def::GMKVaV97io4::ol9O4qzeTLWYIzm1lRle4Q` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Dataset File | GET | `/api/v1/datasets/download/{{ownerSlug}}/{{datasetSlug}}/{{fileName}}` | `conn_mod_def::GMKVWM_f_mE::D03gk_BgQNqMu-V9pJVbfg` |
| Download a Dataset File | GET | `/api/v1/datasets/download/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVWOIp8c8::X_g-Xu6mT6CPUKmKtnnYkQ` |
| Get Dataset Creation Status | GET | `/api/v1/datasets/status/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVX9ZFWHE::QLVc9NobTKaPx6CTJyrJxg` |
| Get Metadata for a Dataset | GET | `/api/v1/datasets/metadata/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVYFQthVA::Co_cch59SmCojN27muffsA` |
| List Datasets | GET | `/api/v1/datasets/list` | `conn_mod_def::GMKVYaeUcPA::U5ZXxz-RR2ue4nUOb6PbKw` |
| List Files for a Dataset | GET | `/api/v1/datasets/list/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVYTko3Q4::25qJWcSERwWmaj-CkgCQuA` |
| Create a Dataset Version by ID | POST | `/api/v1/datasets/create/version/{{id}}` | `conn_mod_def::GMKVU1kXS78::M2skCLsRTEOwgCWcrKmOKQ` |
| Create a New Dataset | POST | `/api/v1/datasets/create/new` | `conn_mod_def::GMKVU3R_dh0::XJ4z9QOqR26ls_tXGUkZfg` |
| Create a New Dataset Version Using Datasets | POST | `/api/v1/datasets/create/version/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVVYg5RAM::GHTwuMemQGSeAQPTaGX0Sw` |
| Update Metadata for a Dataset | POST | `/api/v1/datasets/metadata/{{ownerSlug}}/{{datasetSlug}}` | `conn_mod_def::GMKVaVE8w6Y::VLZfme86Qo6jeC1E-LK-9A` |

### Competitions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Competition Leaderboard | GET | `/api/v1/competitions/{{id}}/leaderboard/download` | `conn_mod_def::GMKVWVZhKSQ::apXGtZMTT8am_IiXETMatg` |
| Download All Competition Data Files | GET | `/api/v1/competitions/data/download-all/{{id}}` | `conn_mod_def::GMKVWI27wwE::L3sub8TDQg29kYQ9iA3MOQ` |
| List Competitions | GET | `/api/v1/competitions/list` | `conn_mod_def::GMKVZ7Tiauo::J0po5dK1TCimErvgn-XLkQ` |
| View a Competition Leaderboard | GET | `/api/v1/competitions/{{id}}/leaderboard/view` | `conn_mod_def::GMKVaUwdM94::nuFDkDPkSImr01XQ0AVVhw` |
| Generate Competition Submission URL | POST | `/api/v1/competitions/{{id}}/submissions/url/{{contentLength}}/{{lastModifiedDateUtc}}` | `conn_mod_def::GMKVWeWTKQE::K7EFwip6RtyvCkirE5bG_Q` |
| Submit to Competition | POST | `/api/v1/competitions/submissions/submit/{{id}}` | `conn_mod_def::GMKVaB54mDw::I1iZBx8NQ5KJheWh2IHdaQ` |

### Kernels

| Action | Method | Path | Action id |
|---|---|---|---|
| Download the Latest Output from a Kernel | GET | `/api/v1/kernels/output` | `conn_mod_def::GMKVWudckhM::lL2hlWEfQt-3Td5ZDfWJfw` |
| List Kernels | GET | `/api/v1/kernels/list` | `conn_mod_def::GMKVYOg7Pbg::MiP89WrqQhmiDKgEaykRMA` |
| Pull the Latest Code from a Kernel | GET | `/api/v1/kernels/pull` | `conn_mod_def::GMKVZ9Wyb4U::6NQDM4h-THug2uWGd38QBw` |
| Push a Kernel Version | POST | `/api/v1/kernels/push` | `conn_mod_def::GMKVaIWk5to::R58KSms_Reas_W44mkN3sQ` |

### ModelInstanceVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Model Instance Version Files | GET | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/{{versionNumber}}/download` | `conn_mod_def::GMKVWf-SDr8::PC_m7txtQVOg9fT5_n0SAA` |
| Delete a Model Instance Version | POST | `/api/v1/models/{{ownerSlug}}/{{modelSlug}}/{{framework}}/{{instanceSlug}}/{{versionNumber}}/delete` | `conn_mod_def::GMKVVojKSUs::L1uEputYQumPiEcA0HJhmA` |

### CompetitionDataFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Competition Data File | GET | `/api/v1/competitions/data/download/{{id}}/{{fileName}}` | `conn_mod_def::GMKVWSlQrIs::AEcmsAN3Q06cRN3tcIkINA` |
| List Competition Data Files | GET | `/api/v1/competitions/data/list/{{id}}` | `conn_mod_def::GMKVX-vwYmg::0dwVEjNmTcyGjiwzlqyD_g` |

### CompetitionSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Competition Submissions | GET | `/api/v1/competitions/submissions/list/{{id}}` | `conn_mod_def::GMKVX_-7BpE::H9FtyeMDSe2cLNrcnfEuRg` |
| Upload a Competition Submission File | POST | `/api/v1/competitions/submissions/upload/{{guid}}/{{contentLength}}/{{lastModifiedDateUtc}}` | `conn_mod_def::GMKVab3NUN8::OnKzydYbQTKmWOTe1qvOGg` |

### InboxFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Inbox File | POST | `/api/v1/inbox/files/create` | `conn_mod_def::GMKVVmjpgTU::-yxyTwd_TKmtrja6CuKzLA` |

### KernelStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Status of the Latest Kernel Version | GET | `/api/v1/kernels/status` | `conn_mod_def::GMKVYKeqRLI::ZfYO3GjhSxawAzi-9WoNKw` |

### Blobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File | POST | `/api/v1/blobs/upload` | `conn_mod_def::GMKVZ_pYxJM::iXD77mtxQNOyMgmoec0TwQ` |

## When a call fails

The error comes from Kaggle, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/kaggle

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
