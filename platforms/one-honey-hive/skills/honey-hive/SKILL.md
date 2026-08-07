---
name: honey-hive
description: HoneyHive is an AI observability and evaluation platform that provides tooling to trace, test, monitor, and improve LLM applications, allowing developers and ML teams to analyze agent behavior, measure quality, and manage production performance across AI workflows. Read and write HoneyHive data through One: runs, metrics, datapoints, datasets, charts, events and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in HoneyHive, create or update a record there, or build code against the HoneyHive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: honey-hive
  generated-from: one-knowledge-base
---

# HoneyHive through One

HoneyHive is an AI observability and evaluation platform that provides tooling to trace, test, monitor, and improve LLM applications, allowing developers and ML teams to analyze agent behavior, measure quality, and manage production performance across AI workflows.

One exposes HoneyHive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `honey-hive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HoneyHive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HoneyHive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Runs

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Events Between Two Experiment Runs | GET | `/v1/runs/{{newRunId}}/compare/{{oldRunId}}/events` | `conn_mod_def::GMbeehr6VJA::tNYniqO8RM2q0GxtBI1q8A` |
| Compare Two Experiment Runs | GET | `/v1/runs/{{newRunId}}/compare/{{oldRunId}}` | `conn_mod_def::GMbee1wXAwA::b21ixlrHSWKhPaYAGtJhGA` |
| Get a Run's Events Schema | GET | `/v1/runs/{{runId}}/schema` | `conn_mod_def::GMbeesm_2LA::q6wQcYAVRBW1edof1gFNoA` |
| Get Metrics for an Experiment Run | GET | `/v1/runs/{{runId}}/metrics` | `conn_mod_def::GMbeesnoySg::4lFWj6K4SCyqqRLL-kN0Pw` |
| List Evaluation Runs | GET | `/v1/runs` | `conn_mod_def::GMbeesl4VBg::OucWwHz_TC24oraQE7eIWA` |
| Create a New Evaluation Run | POST | `/v1/runs` | `conn_mod_def::GMbeec-7f2g::kl_THTvETl-lcOYy9_TyqQ` |
| Delete an Evaluation Run | DELETE | `/v1/runs/{{runId}}` | `conn_mod_def::GMbeeZiriQA::bmVIzFMhQH2NvxgGnXw3-w` |
| Update an Evaluation Run | PUT | `/v1/runs/{{runId}}` | `conn_mod_def::GMbee1TUK7g::tzH1llY0QqSVqz1xpygbzA` |

### Metrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metrics | GET | `/v1/metrics` | `conn_mod_def::GMbefDFNTWg::uQYhEYtLSd2ImdQL7woHlg` |
| List Versions for a Metric | GET | `/v1/metrics/{{metricId}}/versions` | `conn_mod_def::GMbee9vRkwg::9WSxQERrQner2NbV3vOX-g` |
| Create a Metric | POST | `/v1/metrics` | `conn_mod_def::GMbee-aYMhA::oqjBLnFoR9iWUhEVM-t4FA` |
| Delete a Metric | DELETE | `/v1/metrics/{{metricId}}` | `conn_mod_def::GMbee-9EfJg::h3boTVG3Tjat_cv333sTLw` |
| Deploy a Metric Version | POST | `/v1/metrics/{{metricId}}/versions/{{versionName}}/deploy` | `conn_mod_def::GMbee0VwVhA::q0LqFJSeTyONlzlHfiOW1Q` |
| Run a Metric Evaluation | POST | `/v1/metrics/run` | `conn_mod_def::GMbee9ZSVSA::CxoYneQnQaqCyIgrrwQOFg` |
| Update a Metric | PUT | `/v1/metrics/{{metricId}}` | `conn_mod_def::GMbefKxw1Ng::dOaUvn_kS7K0BFWB39dTxQ` |

### Datapoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Datapoint | GET | `/v1/datapoints/{{datapointId}}` | `conn_mod_def::GMbed3SKtDA::lBtA0u0hRNKeDap2Z-NCTQ` |
| List Datapoints | GET | `/v1/datapoints` | `conn_mod_def::GMbed3gUEaA::PVq7pTFYR1G7w3w0aZ5DRQ` |
| Create a Datapoint | POST | `/v1/datapoints` | `conn_mod_def::GMbed5QUTAg::DMBwDoCuSg2kEsgMdPqFEw` |
| Create Datapoints in Batch | POST | `/v1/datapoints/batch` | `conn_mod_def::GMbed_z-f0A::VJfqxUGMQ_GvXPNusSxLVg` |
| Delete a Datapoint | DELETE | `/v1/datapoints/{{datapointId}}` | `conn_mod_def::GMbed5b3FPA::L1jEZyuRS4mITO7MTp6QBg` |
| Update a Datapoint | PUT | `/v1/datapoints/{{datapointId}}` | `conn_mod_def::GMbeeHOe_zA::YqWhtEQwQIGJPZBu2LuiQw` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Datasets | GET | `/v1/datasets` | `conn_mod_def::GMbeeH-jI2A::XTN1gx0IRoG2jUfhiElh3A` |
| Add Datapoints to a Dataset | POST | `/v1/datasets/{{datasetId}}/datapoints` | `conn_mod_def::GMbeeHbHKdA::9oD3RJwpSUm6Xuyqg11TQg` |
| Create a Dataset | POST | `/v1/datasets` | `conn_mod_def::GMbeeIBfidg::seOdPzuEQMSRZtb05UC2yw` |
| Delete a Dataset | DELETE | `/v1/datasets/{{datasetId}}` | `conn_mod_def::GMbeeGyicBg::zvMSOZ3rQQuq1vbUafYOeg` |
| Remove a Datapoint from a Dataset | DELETE | `/v1/datasets/{{datasetId}}/datapoints/{{datapointId}}` | `conn_mod_def::GMbeePobdrA::qJERgD-eQKS-Bk0DzbjUTA` |
| Update a Dataset | PUT | `/v1/datasets/{{datasetId}}` | `conn_mod_def::GMbeePpL3VA::s1wgQdctRPukidWOyFrqBg` |

### Charts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chart | GET | `/v1/charts/{{chartId}}` | `conn_mod_def::GMbedwWj_MA::ZAe0PXf-Q_a2714nsxVFaw` |
| List Charts | GET | `/v1/charts` | `conn_mod_def::GMbedvvcarA::FX8HJjAPQVCvNhO4tpuE0g` |
| Create a Chart | POST | `/v1/charts` | `conn_mod_def::GMbedvOtoRA::830rnjmoRzma1CG7D_eThA` |
| Delete a Chart | DELETE | `/v1/charts/{{chartId}}` | `conn_mod_def::GMbedvO1E1A::5mPC3_vNScOBzqQrhZyFMw` |
| Update a Chart | PUT | `/v1/charts/{{chartId}}` | `conn_mod_def::GMbedv1GidA::OAxbvDYjR1qkfv6KXRCNog` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event | GET | `/v1/events/{{eventId}}` | `conn_mod_def::GMbeeOdpg5A::cMjCaM0ETyaCSrv6eiCg1w` |
| Create Event Batch | POST | `/v1/events/batch` | `conn_mod_def::GMbeeTCF2mA::XmK8ESj0TIKr1M2hqYPPPw` |
| Create Event Using Events | POST | `/v1/events` | `conn_mod_def::GMbeePw7Pbg::myRtZXNjT8WlKj8oc9Dqjw` |
| Search Events | POST | `/v1/events/search` | `conn_mod_def::GMbeeanj5_g::Kb0dCFi5QxCQy9Zn4cHNag` |
| Update an Event | PUT | `/v1/events/{{eventId}}` | `conn_mod_def::GMbeeZjZfqA::CLszy814T2aWesVIM12XKA` |

### Queues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Annotation Queue | GET | `/v1/queues/{{queueId}}` | `conn_mod_def::GMbefKxJwPA::1XeTYD_3RuqYat3kwV3Njg` |
| Create an Annotation Queue | POST | `/v1/queues` | `conn_mod_def::GMbefK_hS0g::G08WiU9fTiCe9ZCuyT6eLQ` |
| Update an Annotation Queue | PUT | `/v1/queues/{{queueId}}` | `conn_mod_def::GMbefTCYLRA::WW9eMPAhQMiSZdYfcVsEWg` |

### AnnotationQueues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Annotation Queues | GET | `/v1/queues` | `conn_mod_def::GMbefMq6sSA::1UYI7nWUTeGnroUOfpnVAg` |
| Delete an Annotation Queue | DELETE | `/v1/queues/{{queueId}}` | `conn_mod_def::GMbefLlZ4pg::BFjBABTXRZWkMRh9G68L4Q` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Events for a Session | POST | `/v1/sessions/{{sessionId}}/events/batch` | `conn_mod_def::GMbefTve4Sg::5G_wCoW0TXGl8ri6ZczSbA` |
| Create a Session | POST | `/v1/sessions` | `conn_mod_def::GMbefhP2qHA::tzybLvVaTomevpf0kV6GHQ` |

### EvaluationRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Evaluation Run | GET | `/v1/runs/{{runId}}` | `conn_mod_def::GMbeeslrCcA::HxfxtuVQRNqBFvvN72vKIw` |

### EventsSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Events Schema Across All Experiment Runs in a Project | GET | `/v1/runs/schema` | `conn_mod_def::GMbeesm82xA::Nt5mzSRiQnGrUvKLvgXOQA` |

### MetricVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Metric Version for a Metric | POST | `/v1/metrics/{{metricId}}/versions` | `conn_mod_def::GMbee0VwcWg::qZuB2CT8QlCsB_VRNj2LYA` |

### ExperimentSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Experiment Summary | GET | `/v1/runs/{{runId}}/summary` | `conn_mod_def::GMbee0uWcrg::sZvtMN1wQICwiK-RJsXc1g` |

## When a call fails

The error comes from HoneyHive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/honey-hive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
