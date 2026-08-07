---
name: valyu
description: Valyu is a multimodal retrieval API built to enrich your AI’s context with reranked knowledge from scholarly literature, real-time news, market feeds, and fresh web data. Read and write Valyu data through One: deepresearchbatches, deepresearchtasks, deepresearchtasks, answer, deepresearchbatchtasks, datasources and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in Valyu, create or update a record there, or build code against the Valyu API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: valyu
  generated-from: one-knowledge-base
---

# Valyu through One

Valyu is a multimodal retrieval API built to enrich your AI’s context with reranked knowledge from scholarly literature, real-time news, market feeds, and fresh web data.

One exposes Valyu through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `valyu` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Valyu is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Valyu account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DeepResearchBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a DeepResearch Batch’s Status | GET | `/v1/deepresearch/batches/{{id}}` | `conn_mod_def::GJ8SgyDsTGo::OVnOXOhET4ymkW9LcuBiKQ` |
| List DeepResearch Batches | GET | `/deepresearch/batches` | `conn_mod_def::GJ8Sg6N6eMY::c6CeGoAaSWeXAz_nvZfWAg` |
| Cancel a DeepResearch Batch | POST | `/v1/deepresearch/batches/{{id}}/cancel` | `conn_mod_def::GJ8SgyS7dEo::HL9U4zVcRumsJ1DLqy9n1A` |
| Create a DeepResearch Batch | POST | `/v1/deepresearch/batches` | `conn_mod_def::GJ8Sgx93WbU::mLHhPk5DSHahLK0kBAwIEg` |

### DeepresearchTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Follow-up Instruction to a DeepResearch Task | POST | `/v1/deepresearch/tasks/{{id}}/update` | `conn_mod_def::GJ8ShBXBAhE::byKjMGCxTFO1w7egHeTS9A` |
| Create a DeepResearch Task | POST | `/deepresearch/tasks` | `conn_mod_def::GJ8ShBWHSHk::tiODjTCYS6GMa33M5QZIYQ` |
| Respond to a DeepResearch Task HITL Checkpoint | POST | `/v1/deepresearch/tasks/{{id}}/respond` | `conn_mod_def::GJ8ShIbZkFM::TG5SN7R6RSO41IchXL9AQQ` |
| Toggle a DeepResearch Task’s Public Visibility | POST | `/v1/deepresearch/tasks/{{id}}/public` | `conn_mod_def::GJ8ShIRvjPI::26yTSLHyQ7ecJQygU_5b2g` |

### DeepResearchTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DeepResearch Task Status and Results | GET | `/v1/deepresearch/tasks/{{id}}/status` | `conn_mod_def::GJ8ShOnIdhw::C278Pje1SgWrW_wKOXOGMw` |
| List DeepResearch Tasks | GET | `/v1/deepresearch/list` | `conn_mod_def::GJ8ShH7JP-Y::cV-n42EeSdiuKQrPLyV58A` |
| Cancel a DeepResearch Task | POST | `/v1/deepresearch/tasks/{{id}}/cancel` | `conn_mod_def::GJ8ShA7MNn4::bdZBZSTmRcqAtIcb27ILFg` |
| Delete a DeepResearch Task | DELETE | `/v1/deepresearch/tasks/{{id}}/delete` | `conn_mod_def::GJ8ShBfB1WM::OL4Kb7DlSEO3A7BpOwG3CQ` |

### Answer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI-Powered Answer (Streaming SSE) | POST | `/v1/answer` | `conn_mod_def::GJ8SgxkWhPc::DVNx_XRtSYi_8hq7X6uz7Q` |

### DeepResearchBatchTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tasks to a DeepResearch Batch | POST | `/v1/deepresearch/batches/{{id}}/tasks` | `conn_mod_def::GJ8Sgx4qjT0::c66OfvT4T-2GlCQwOhBB1Q` |

### Datasources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Datasources | GET | `/datasources` | `conn_mod_def::GJ8Sg46L27A::jlU7OcPhQHmRdVfMLGNrxA` |

### ContentsJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Async Content Extraction Job Status (Contents) | GET | `/v1/contents/jobs/{{jobId}}` | `conn_mod_def::GJ8Sg5kmbuY::JNt-pXU6TNOKlxG657dHbg` |

### DeepresearchBatchTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Batch’s Tasks | GET | `/v1/deepresearch/batches/{{id}}/tasks` | `conn_mod_def::GJ8Sg6TVOrs::P1pt10wQSriDj3_j7r0d8Q` |

### Contents

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Clean, Structured Content From URLs | POST | `/contents` | `conn_mod_def::GJ8Sg46lRSg::A6ZvFbS6R0K4ZI5uXVQ3cQ` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Across Web and Proprietary Sources | POST | `/v1/search` | `conn_mod_def::GJ8ShImjADU::xY57cPXVTIK2wYtf_MeJog` |

### DatasourceCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Datasource Categories | GET | `/datasources/categories` | `conn_mod_def::GJ8ShAXCRI4::u2i9TH3pRCSyUgTbnA3n6w` |

## When a call fails

The error comes from Valyu, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/valyu

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
