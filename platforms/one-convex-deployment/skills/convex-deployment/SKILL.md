---
name: convex-deployment
description: Convex Deployment enables developers to deploy backend functions, database schema, indexes, and configuration for applications built on the Convex platform. It supports development, preview, and production deployments, allowing teams to safely test changes and push updates to live applications. Read and write Convex Deployment data through One: streamingimport, functions, mutations, convexfunctions, documentdeltas, jsonschemas and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Convex Deployment, create or update a record there, or build code against the Convex Deployment API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: convex-deployment
  generated-from: one-knowledge-base
---

# Convex Deployment through One

Convex Deployment enables developers to deploy backend functions, database schema, indexes, and configuration for applications built on the Convex platform. It supports development, preview, and production deployments, allowing teams to safely test changes and push updates to live applications.

One exposes Convex Deployment through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `convex-deployment` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Convex Deployment is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Convex Deployment account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### StreamingImport

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If Primary Key Indexes Are Ready For Tables (Streaming Import) | GET | `/api/streaming_import/primary_key_indexes_ready` | `conn_mod_def::GJ2KeQs7HxE::uhmkNqnARo-AyqRXGkHyXg` |
| Add Primary Key Indexes for Streaming Import | PUT | `/api/streaming_import/add_primary_key_indexes` | `conn_mod_def::GJ2KeJR5DnA::JSZXzng9TyufDlfnMH1P-g` |
| Clear Tables via Streaming Import | PUT | `/api/streaming_import/clear_tables` | `conn_mod_def::GJ2KeYfUpoU::2mhFWSpqSOuSDdOkAvKG4g` |
| Streaming Import Airbyte Records | POST | `/api/streaming_import/import_airbyte_records` | `conn_mod_def::GJ2Keg50DiI::Vo1qeOYRQu6f3Jt90Jf7yA` |

### Functions

| Action | Method | Path | Action id |
|---|---|---|---|
| Call a Convex Function (Action) | POST | `/api/action` | `conn_mod_def::GJ2KdJSvyB8::d-7E_jdeR9-JCM1pYX0yJA` |
| Query a Convex Function | POST | `/api/query` | `conn_mod_def::GJ2Kdgm8Uts::05urmkDPSCmoXCTXThDZDA` |

### Mutations

| Action | Method | Path | Action id |
|---|---|---|---|
| Call a Convex Mutation Function | POST | `/api/mutation` | `conn_mod_def::GJ2KdXkvfgE::GGBqvBuQR0G_OLisdRMXBg` |

### ConvexFunctions

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Convex Function (by `functionIdentifier`) | POST | `/api/run/{{functionIdentifier}}` | `conn_mod_def::GJ2KdoOfJso::LLR55bdjSF2B12vZrdaCDA` |

### DocumentDeltas

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Deltas (Streaming Export) | GET | `/api/document_deltas` | `conn_mod_def::GJ2Kdw7RYfw::NfMEEVNvRAq_Wit_8YyblQ` |

### JsonSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| List JSON Schemas (Streaming Export) | GET | `/api/json_schemas` | `conn_mod_def::GJ2Kd4UAvoo::I60yI2Z3RG-Q-fPh57ar3Q` |

### StreamingExportSnapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Streaming Export Snapshot | GET | `/api/list_snapshot` | `conn_mod_def::GJ2KeBBcRNc::8yCJa1CfR9-GF6kDyRXhQw` |

## When a call fails

The error comes from Convex Deployment, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/convex-deployment

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
