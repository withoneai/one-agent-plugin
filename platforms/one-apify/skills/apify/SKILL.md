---
name: apify
description: Apify is a full‑stack web scraping and browser automation platform where developers can deploy serverless “Actors,” leverage 5,000+ prebuilt tools, manage proxies, scheduling, and data storage, and extract structured data from any website at scale via API or UI. Read and write Apify data through One: actorruns, requestqueues, actortasks, actorbuilds, webhooks, schedules and more, 120 actions with real parameter documentation. Use whenever the user asks to look something up in Apify, create or update a record there, or build code against the Apify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: apify
  generated-from: one-knowledge-base
---

# Apify through One

Apify is a full‑stack web scraping and browser automation platform where developers can deploy serverless “Actors,” leverage 5,000+ prebuilt tools, manage proxies, scheduling, and data storage, and extract structured data from any website at scale via API or UI.

One exposes Apify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `apify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Apify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Apify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ActorRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Run | GET | `/v2/actor-runs/{{runId}}` | `conn_mod_def::GJ0AfS1NQY0::YCuNwheZQaeMnwoC3ai52g` |
| Get an Actor Run | GET | `/v2/acts/{{actorId}}/runs/{{runId}}` | `conn_mod_def::GJ0AkiKsHq0::gVOO1XIJS0CjBiEg_-c69w` |
| Get an Actor’s Last Run | GET | `/v2/acts/{{actorId}}/runs/last` | `conn_mod_def::GJ0AkOaPtVk::ng_HXtBSSNGYOoi9pK3W-w` |
| List a User's Actor Runs | GET | `/actor-runs` | `conn_mod_def::GJ0Afh8kATw::2ZyHrow4RdGfSRj2DhlzIA` |
| List an Actor's Runs | GET | `/v2/acts/{{actorId}}/runs` | `conn_mod_def::GJ0AkXweEQM::09T2pdNNQnePO-7pV-h4_w` |
| Run an Actor Synchronously (No Input) and Get Dataset Items | GET | `/v2/acts/{{actorId}}/run-sync-get-dataset-items` | `conn_mod_def::GJ0AluJj_d8::D7itSb9EQCuc0tEqRI9azw` |
| Run an Actor Synchronously (No Input) and Return Its Output | GET | `/v2/acts/{{actorId}}/run-sync` | `conn_mod_def::GJ0Al4O7Mrk::Z0e2-tx5S0G02D02KePRCw` |
| Abort an Actor Run | POST | `/v2/actor-runs/{{runId}}/abort` | `conn_mod_def::GJ0Ae7ikxo0::XdI0NAiASP6Zp-zysXTJ8w` |
| Abort an Actor’s Run (Deprecated) | POST | `/v2/acts/{{actorId}}/runs/{{runId}}/abort` | `conn_mod_def::GJ0AkEl6WZo::iOCaOCdBSkaduzqfAQakmQ` |
| Delete an Actor Run | DELETE | `/v2/actor-runs/{{runId}}` | `conn_mod_def::GJ0AfLGGuBI::uI5Y2ulVTpSLVdT_mSlU4w` |
| Metamorph an Actor Run (Transform Run to Another Actor) | POST | `/v2/actor-runs/{{runId}}/metamorph` | `conn_mod_def::GJ0Afqme6v0::gLh8oGTHTiStIylOey6oPg` |
| Metamorph an Actor Run into Another Actor (Deprecated) | POST | `/v2/acts/{{actorId}}/runs/{{runId}}/metamorph` | `conn_mod_def::GJ0AkrXsWJc::1ziJWLd6Tf-uCAa-qTPibA` |

7 more ActorRuns actions are available through search.

### RequestQueues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Request Queue | GET | `/v2/request-queues/{{queueId}}` | `conn_mod_def::GJ0ArO5mqJM::wLs_3I38THirNPw37G3dhQ` |
| Get a Request Queue’s Head | GET | `/v2/request-queues/{{queueId}}/head` | `conn_mod_def::GJ0AsO0WewM::No204WrHSl-TJJiIh895wg` |
| List Request Queues | GET | `/request-queues` | `conn_mod_def::GJ0ArHrfn_s::JPv4pqJ-TyG9qTYb729i6Q` |
| Add a Request to a Request Queue | POST | `/v2/request-queues/{{queueId}}/requests` | `conn_mod_def::GJ0ArfBZQXs::HC8sFCHvSI-73PAmf2C2dQ` |
| Add Requests to a Request Queue (Batch) | POST | `/v2/request-queues/{{queueId}}/requests/batch` | `conn_mod_def::GJ0AqmoGpyQ::Dtu8C8hPRcWqn0BeFZcUNg` |
| Create a Request Queue | POST | `/request-queues` | `conn_mod_def::GJ0A0IJJpLo::qUiuhSN5R0CVVL-_VO8A5A` |
| Delete a Request Queue | DELETE | `/v2/request-queues/{{queueId}}` | `conn_mod_def::GJ0Aq2td5hI::qJXEEQ1dQ5KXeKeACVCPUA` |
| Get and Lock a Request Queue Head | POST | `/v2/request-queues/{{queueId}}/head/lock` | `conn_mod_def::GJ0AsX21wto::tBEl7RzQT4mSEk41gjb2-w` |
| Unlock a Request Queue’s Requests | POST | `/v2/request-queues/{{queueId}}/requests/unlock` | `conn_mod_def::GJ0AspUK0Kc::vUvutCQUTm-QanteAoexpQ` |
| Update a Request in a Request Queue | PUT | `/v2/request-queues/{{queueId}}/requests/{{requestId}}` | `conn_mod_def::GJ0Ar-fvGNQ::pPmNh2eGRcmhf1Xg-z30vg` |
| Update a Request Queue | PUT | `/v2/request-queues/{{queueId}}` | `conn_mod_def::GJ0ArWjjJXQ::m_BBwfjsQY-rkz40V6NCjw` |

### ActorTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Task | GET | `/v2/actor-tasks/{{actorTaskId}}` | `conn_mod_def::GJ0AhLXBYoo::DOIJHFbUS0OYZFRBTdPOCg` |
| Get an Actor Task’s Input | GET | `/v2/actor-tasks/{{actorTaskId}}/input` | `conn_mod_def::GJ0AhSaBW3M::oF3nRKVFSfyLFxdhwTVKUg` |
| List Actor Tasks | GET | `/actor-tasks` | `conn_mod_def::GJ0Ag7jUmsI::qMLVAmL5Szyf4DczA4k8BA` |
| Run a Task Synchronously and Get Its Dataset Items | GET | `/actor-tasks/{{actorTaskId}}/run-sync-get-dataset-items` | `conn_mod_def::GJ0AiAWXdjA::K94HPSGnQU6UeOyBLjhO5Q` |
| Run an Actor Task Synchronously (Run Sync) | GET | `/v2/actor-tasks/{{actorTaskId}}/run-sync` | `conn_mod_def::GJ0Ahm08jgo::5Gd9lvzvRTWbq6YZ_Gl8lQ` |
| Create an Actor Task | POST | `/actor-tasks` | `conn_mod_def::GJ0AgWAVOFQ::DnRHJPb-SgWVRBR6T44qlw` |
| Delete an Actor Task | DELETE | `/actor-tasks/{{actorTaskId}}` | `conn_mod_def::GJ0AgdHJfd0::LvxKssV5TDeCnO5XUt2stQ` |
| Run an Actor Task Synchronously (Return Output) | POST | `/v2/actor-tasks/{{actorTaskId}}/run-sync` | `conn_mod_def::GJ0AhwT1e1E::LY_KPMAeS4CJx3UBMrZ64Q` |
| Run an Actor Task Synchronously and Get Dataset Items | POST | `/v2/actor-tasks/{{actorTaskId}}/run-sync-get-dataset-items` | `conn_mod_def::GJ0AiN5QPAA::ZMnzDt-aRue5KUZx-rUk9g` |
| Update an Actor Task | PUT | `/v2/actor-tasks/{{actorTaskId}}` | `conn_mod_def::GJ0AiVPGEPg::QskW1jw5QKaKj4UjfuJJ-w` |

### ActorBuilds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Build | GET | `/v2/acts/{{actorId}}/builds/{{buildId}}` | `conn_mod_def::GJ0AjgrxVTQ::Wf0DUSAVTtifFrlmee45AA` |
| Get an Actor Build | GET | `/v2/actor-builds/{{buildId}}` | `conn_mod_def::GJ0Aea7IggE::4ISSQ3CnRlKy4KUSAyu-7Q` |
| Get an Actor Build’s OpenAPI Definition | GET | `/v2/actor-builds/{{buildId}}/openapi.json` | `conn_mod_def::GJ0AesEQ2Qw::eHL5QHPBQ5iYT5Ren78NmA` |
| Get an Actor’s Default Build | GET | `/v2/acts/{{actorId}}/builds/default` | `conn_mod_def::GJ0AjsB9UyE::eZnjsnv9SQSiTPalv1aCfw` |
| List a User’s Actor Builds | GET | `/actor-builds` | `conn_mod_def::GJ0Aezy7kj8::0qzRaquaR3eMjal-evuvJQ` |
| List an Actor’s Builds | GET | `/v2/acts/{{actorId}}/builds` | `conn_mod_def::GJ0Aj0S32Vc::lTeZ1qZ5RyKBYGMVWZWW0Q` |
| Abort an Actor Build | POST | `/v2/acts/{{actorId}}/builds/{{buildId}}/abort` | `conn_mod_def::GJ0AjO4WX08::mgEeu0yIRZm-Bkz3Qv6qmw` |
| Abort an Actor Build | POST | `/v2/actor-builds/{{buildId}}/abort` | `conn_mod_def::GJ0AeKq8vSM::7onvUP2vSs6c-Y2rII4HAw` |
| Build an Actor | POST | `/v2/acts/{{actorId}}/builds` | `conn_mod_def::GJ0AjYBgyn4::inaYgJpsQDWpojYgyrmzdg` |
| Delete an Actor Build | DELETE | `/v2/actor-builds/{{buildId}}` | `conn_mod_def::GJ0AeTFd7y0::HOcj1WTmQkiODh-b-oMiJg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ0AudQgX2M::5ScXjBuSQgiJ72EK_f8nbA` |
| List Webhooks | GET | `/v2/webhooks` | `conn_mod_def::GJ0AuTmwNWU::JJuOXV5tSryccsIqe2RVdw` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ0At89Qt7Y::eYT5lbgiTJ2u0UsS4w7vYA` |
| Delete a Webhook | DELETE | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ0AuENY-R8::FGrTTTzbQCebZgpfqBfu5w` |
| Test a Webhook (Create Dummy Dispatch) | POST | `/v2/webhooks/{{webhookId}}/test` | `conn_mod_def::GJ0AukzM6dM::FTKXyiVGT2Sycoco3rjONA` |
| Update a Webhook | PUT | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ0Aur_Nw2A::mvfBOT6ORSqu8dUJ3J1iTw` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule | GET | `/schedules/{{scheduleId}}` | `conn_mod_def::GJ0An18d7-8::uiPoL6cOQz6pjiaQsqeNPw` |
| Get a Schedule's Log | GET | `/v2/schedules/{{scheduleId}}/log` | `conn_mod_def::GJ0An8jCmnM::CSwWcr3fTaa-9xWWSQPxFw` |
| List Schedules | GET | `/schedules` | `conn_mod_def::GJ0AnufLT9Y::cFPxduOyTZuJ4ofDP6-OTw` |
| Create a Schedule | POST | `/schedules` | `conn_mod_def::GJ0AneJelgY::xnqkjp9ZSFqxN2nrRx-4kA` |
| Delete a Schedule | DELETE | `/schedules/{{scheduleId}}` | `conn_mod_def::GJ0Ank-a9QA::My8gocfEQ_iEEPGL-zwVtw` |
| Update a Schedule | PUT | `/v2/schedules/{{scheduleId}}` | `conn_mod_def::GJ0AoEJ2WIs::PO_K2horRXaQofKHnVtn1Q` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dataset | GET | `/v2/datasets/{{datasetId}}` | `conn_mod_def::GJ0AobHr76k::DRji-H8QSomfgYUUNCBNtQ` |
| Get a Dataset’s Statistics | GET | `/v2/datasets/{{datasetId}}/statistics` | `conn_mod_def::GJ0Aoxt2UfY::v5dPKIbrTKmH2wEuwIpUNg` |
| List Datasets | GET | `/datasets` | `conn_mod_def::GJ0Ao7f0sk0::4x0FF7TJS82DWk88a_9lUg` |
| Create a Dataset | POST | `/datasets` | `conn_mod_def::GJ0AoLPopnA::J_mROsWvQY6HDSXZwpU7vA` |
| Delete a Dataset | DELETE | `/v2/datasets/{{datasetId}}` | `conn_mod_def::GJ0AoR2hrJI::AlVb-4rSQf6tffKY-MW5eA` |
| Update a Dataset | PUT | `/v2/datasets/{{datasetId}}` | `conn_mod_def::GJ0ApMWyO4c::J1njeg7EQzaBwG1IPinuxg` |

### ActorVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Version | GET | `/v2/acts/{{actorId}}/versions/{{versionNumber}}` | `conn_mod_def::GJ0Am1zzOqo::MbNDD2O3QCyZN7m0EVlw2Q` |
| List an Actor’s Versions | GET | `/v2/acts/{{actorId}}/versions` | `conn_mod_def::GJ0Amu2RMkA::da1A4ZWjTcOiawFFMH0rAA` |
| Create an Actor Version | POST | `/v2/acts/{{actorId}}/versions` | `conn_mod_def::GJ0AmJM5jQU::mdD_EGMLSIaax3vxKLDknQ` |
| Delete an Actor Version | DELETE | `/v2/acts/{{actorId}}/versions/{{versionNumber}}` | `conn_mod_def::GJ0AmYIlRZI::RZ-5v4taQcaf1n1BQFxaZA` |
| Update an Actor Version | PUT | `/v2/acts/{{actorId}}/versions/{{versionNumber}}` | `conn_mod_def::GJ0AnFN1seU::c9nioN47RtyDOMnVZEil5g` |

### ActorVersionEnvVars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Version Environment Variable | GET | `/v2/acts/{{actorId}}/versions/{{versionNumber}}/env-vars/{{envVarName}}` | `conn_mod_def::GJ0AmfsIlmE::baI6xIpzRAeKowXsoGcYDA` |
| List an Actor Version’s Environment Variables | GET | `/v2/acts/{{actorId}}/versions/{{versionNumber}}/env-vars` | `conn_mod_def::GJ0AmnrXU30::L-FzdUTPTfmd4EdwzYpVIg` |
| Create an Actor Version Environment Variable | POST | `/v2/acts/{{actorId}}/versions/{{versionNumber}}/env-vars` | `conn_mod_def::GJ0AmAITMuI::QPiae-oHR5mxb1iozT00Fw` |
| Delete an Actor Version Environment Variable | DELETE | `/v2/acts/{{actorId}}/versions/{{versionNumber}}/env-vars/{{envVarName}}` | `conn_mod_def::GJ0AmQ5AzMU::467RDumpQAqCKu2iRx0yug` |
| Update an Actor Version Environment Variable | PUT | `/v2/acts/{{actorId}}/versions/{{versionNumber}}/env-vars/{{envVarName}}` | `conn_mod_def::GJ0Am9o4NNQ::_IpGTAijTr2wTc4q1nE5ow` |

### KeyValueStores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Key-Value Store | GET | `/v2/key-value-stores/{{storeId}}` | `conn_mod_def::GJ0AqN1CYM4::cm14kmnRQlmXspHXnf0uYA` |
| List Key-Value Stores | GET | `/key-value-stores` | `conn_mod_def::GJ0Apz1csNQ::qjfeTc3tS0yifPkLkuGwaA` |
| Create a Key-Value Store | POST | `/key-value-stores` | `conn_mod_def::GJ0Apbhk1Dk::U7Hy1nCfR8GW5AcNjj1g0Q` |
| Delete a Key-Value Store | DELETE | `/v2/key-value-stores/{{storeId}}` | `conn_mod_def::GJ0AprFT1iY::_e5VxImXTHySka6sB8Z-Dw` |
| Update a Key-Value Store | PUT | `/v2/key-value-stores/{{storeId}}` | `conn_mod_def::GJ0Aqc7opJI::OergbEDyQ_ug1Vcy1_XIlQ` |

### KeyValueStoreRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Key-Value Store Record | GET | `/v2/key-value-stores/{{storeId}}/records/{{recordKey}}` | `conn_mod_def::GJ0AqEu3zYg::7TIWfh8FRD2SUPiX_sFveA` |
| Check if a Key-Value Store Record Exists | HEAD | `/v2/key-value-stores/{{storeId}}/records/{{recordKey}}` | `conn_mod_def::GJ0ApTvRtsY::Z2J3EbkIQUKKISKW1U6Dsw` |
| Delete a Key-Value Store Record | DELETE | `/v2/key-value-stores/{{storeId}}/records/{{recordKey}}` | `conn_mod_def::GJ0ApjZxhJo::hFztW9lrT269JfSpo6-iAQ` |
| Store a Key-Value Store Record | PUT | `/v2/key-value-stores/{{storeId}}/records/{{recordKey}}` | `conn_mod_def::GJ0AqVtEG_w::h5gygWnlQq6cneDIaEWO-w` |

### Actors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Actors | GET | `/v2/acts` | `conn_mod_def::GJ0AjAMmd28::2JKrTE4DSRK-Lo-nW0GDFw` |
| Create Actor | POST | `/v2/acts` | `conn_mod_def::GJ0AimlJ30k::uefEcABtTLOjXKlYXYvKSg` |
| Delete an Actor | DELETE | `/v2/acts/{{actorId}}` | `conn_mod_def::GJ0Aiu8ZX7g::NlDcL-NeTGyr-neE9rCp9w` |
| Update an Actor | PUT | `/v2/acts/{{actorId}}` | `conn_mod_def::GJ0AjHy6-Dg::t0huEOEGT0OdN2qEq5FZlA` |

### RequestQueueRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Request Queue Request | GET | `/v2/request-queues/{{queueId}}/requests/{{requestId}}` | `conn_mod_def::GJ0ArtUPS0g::aeh34KWtTcCLqnVe10k4Sw` |
| List a Request Queue’s Requests | GET | `/v2/request-queues/{{queueId}}/requests` | `conn_mod_def::GJ0Ar1kp7jI::k0SHqsx_QFKH8n9hNUrTpw` |
| Batch Delete Requests from a Request Queue | DELETE | `/v2/request-queues/{{queueId}}/requests/batch` | `conn_mod_def::GJ0Aq-i8jTQ::KTsLcikTR0q88tX49Q9zBw` |
| Delete a Request Queue Request | DELETE | `/v2/request-queues/{{queueId}}/requests/{{requestId}}` | `conn_mod_def::GJ0ArlzKoAc::9L08eZ8YTJKoDmNFVlJwNw` |

### ActorTaskRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actor Task’s Last Run | GET | `/v2/actor-tasks/{{actorTaskId}}/runs/last` | `conn_mod_def::GJ0AgrijtH0::IretlCLtSPCzsu4qvBLKtg` |
| List a Task’s Runs | GET | `/v2/actor-tasks/{{actorTaskId}}/runs` | `conn_mod_def::GJ0Ag0DpJjs::FprV91AZRS-xvI9Vx5f0JA` |

1 more ActorTaskRuns actions are available through search.

This lists 90 of 120 actions. For anything not here, call `search_one_platform_actions` with platform `apify`. The full catalog is at https://www.withone.ai/knowledge/apify.

## When a call fails

The error comes from Apify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/apify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
