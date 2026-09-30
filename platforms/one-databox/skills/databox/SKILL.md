---
name: databox
description: Databox is a business analytics platform that unifies metrics from multiple tools into customizable dashboards and alerts, helping teams track performance and make data-driven decisions in real time. Read and write Databox data through One: datasets, datasources, datasetingestion, accounts, accounttimezones, auth and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Databox, create or update a record there, or build code against the Databox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: databox
  generated-from: one-knowledge-base
---

# Databox through One

Databox is a business analytics platform that unifies metrics from multiple tools into customizable dashboards and alerts, helping teams track performance and make data-driven decisions in real time.

One exposes Databox through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "databox", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Databox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Databox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Data Source's Datasets | GET | `/data-sources/{{DATASOURCEID}}/datasets` | `conn_mod_def::GJgbJXDx7lY::YIt57wbtSP2PMgUe3ngp-A` |
| Create a Dataset | POST | `/datasets` | `conn_mod_def::GJgbJgW_NyI::kzZ1R2_YQUGQVT0E2JZwBQ` |
| Delete a Dataset | DELETE | `/datasets/{{DATASETID}}` | `conn_mod_def::GJgbJotXk7w::SIIxACwvSZq37tvGuY2QKw` |
| Purge a Dataset | POST | `/datasets/{{DATASETID}}/purge` | `conn_mod_def::GJgbJvaInEI::2rj9Iw6eQoycUmAXgH_93A` |

### DataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Data Sources | GET | `/accounts/{{ACCOUNTID}}/data-sources` | `conn_mod_def::GJgbI1lDJX4::prOttNB-RoCtzlKmwZOQeA` |
| Create a Data Source | POST | `/data-sources` | `conn_mod_def::GJgbJIXsiEg::cbcWrKKdRraqz0AjtjMoQQ` |
| Delete a Data Source | DELETE | `/data-sources/{{DATASOURCEID}}` | `conn_mod_def::GJgbJOwouuU::roapkaRlQxy4R5Wi4sW-qQ` |

### DatasetIngestion

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Dataset Ingestion | GET | `/datasets/{{DATASETID}}/ingestions/{{INGESTIONID}}` | `conn_mod_def::GJgbKGXmD7E::du-ANdZRQpiPzkMACSv_hg` |
| Create a Dataset Ingestion (Add Data Records) | POST | `/datasets/{{DATASETID}}/data` | `conn_mod_def::GJgbJ2odr6c::zDszvtIXRbOdaag6e7Cm-Q` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accounts | GET | `/accounts` | `conn_mod_def::GJgbItsfnag::feuOVSHJRxi_eJLkkZY_nQ` |

### AccountTimeZones

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Account Time Zones | GET | `/accounts/timezones` | `conn_mod_def::GJgbI72kJr4::lw7zZxsFQJW4M1Vg449LWg` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate an API Key | GET | `/auth/validate-key` | `conn_mod_def::GJgbJBoI7IU::ItGvwUWrSluqyXpvnRNAhA` |

### Ingestions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Dataset’s Ingestions | GET | `/datasets/{{DATASETID}}/ingestions` | `conn_mod_def::GJgbJ-n7ahs::N-gRit6kSPiuTamgNjfAwA` |

## When a call fails

The error comes from Databox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/databox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
