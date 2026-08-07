---
name: reducto
description: Reducto is an AI-powered document ingestion API that transforms complex, unstructured documents—such as PDFs, images, and spreadsheets—into structured, LLM-ready data with exceptional accuracy. Read and write Reducto data through One: documents, jobs, extract, pipelineasyncjobs, files, splitasync and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Reducto, create or update a record there, or build code against the Reducto API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: reducto
  generated-from: one-knowledge-base
---

# Reducto through One

Reducto is an AI-powered document ingestion API that transforms complex, unstructured documents—such as PDFs, images, and spreadsheets—into structured, LLM-ready data with exceptional accuracy.

One exposes Reducto through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `reducto` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Reducto is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Reducto account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Classify Documents | POST | `/classify` | `conn_mod_def::GK0ykbfUAnI::30slhWn7QxGNB2YQBi-9eg` |
| Edit a Document | POST | `/edit` | `conn_mod_def::GK0ykcoiUJM::2GpxmIM5QwSJ1oZYK6hF7w` |
| Edit Async Document | POST | `/edit_async` | `conn_mod_def::GK0ykbV2N0U::8z_mlt4MQ5GHMrdhfHVj1g` |
| Parse a Document | POST | `/parse` | `conn_mod_def::GK0ykofbLls::q-XytGeJQIS2rKeUCx5n2w` |
| Split a Document | POST | `/split` | `conn_mod_def::GK0yk13GRBI::_D1qUZy2T3qx8t49uCqaOg` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Jobs | GET | `/jobs` | `conn_mod_def::GK0yktofcxU::IqLZjGYeQjqlMs5pbvPHiw` |
| Cancel Job | POST | `/cancel/{{jobId}}` | `conn_mod_def::GK0ykdZxJN0::s7ScSFqHS-ydhgUIGrI2Ww` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract | POST | `/extract` | `conn_mod_def::GK0ykoK-4bY::v9iJS_tERdaQUE_d1NiOLw` |

### PipelineAsyncJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Async Pipeline Job | POST | `/pipeline_async` | `conn_mod_def::GK0yk17y0B0::1urtMHalS1GhMIvq39aIXw` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File | POST | `/upload` | `conn_mod_def::GK0yk_FfYK4::LYR2HZPaS--zIwoIcA8yWg` |

### SplitAsync

| Action | Method | Path | Action id |
|---|---|---|---|
| Split Async | POST | `/split_async` | `conn_mod_def::GK0yk25F1u0::WlIulQULTmCcG8ZtQazCSQ` |

### Version

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Version | GET | `/version` | `conn_mod_def::GK0yknTVqAM::GjsCvYx0REWd3mxcD5eaHw` |

### WebhookPortal

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Webhook Portal | POST | `/configure_webhook` | `conn_mod_def::GK0ylRJ_w3U::Bk1-s0YPSPCgW_rtNH1O8A` |

### ParseJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Parse Job | GET | `/job/{{jobId}}` | `conn_mod_def::GK0yk3kiO2A::NViW2iUBSvOdWEeNl5I4Vg` |

### ExtractAsync

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Async | POST | `/extract_async` | `conn_mod_def::GK0ykoeYJzI::YSPBlo5eQZqrDb4Mil5pfw` |

### Pipeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Pipeline | POST | `/pipeline` | `conn_mod_def::GK0yk1BrQns::o_xvxRanTLeCPPgkMlBAmA` |

### ParseAsync

| Action | Method | Path | Action id |
|---|---|---|---|
| Async Parse | POST | `/parse_async` | `conn_mod_def::GK0ykfEChjg::Gr9Ok4frT7-opXm54txP1Q` |

## When a call fails

The error comes from Reducto, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/reducto

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
