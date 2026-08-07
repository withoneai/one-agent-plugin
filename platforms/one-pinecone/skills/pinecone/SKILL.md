---
name: pinecone
description: Pinecone is a vector database designed for building AI applications with fast and scalable similarity search. It's commonly used for semantic search, recommendations, and RAG workflows. Read and write Pinecone data through One: vectors, indexes, backups, projects, assistants, collections and more, 69 actions with real parameter documentation. Use whenever the user asks to look something up in Pinecone, create or update a record there, or build code against the Pinecone API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pinecone
  generated-from: one-knowledge-base
---

# Pinecone through One

Pinecone is a vector database designed for building AI applications with fast and scalable similarity search. It's commonly used for semantic search, recommendations, and RAG workflows.

One exposes Pinecone through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pinecone` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Pinecone is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Pinecone account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Vectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Vectors | GET | `/vectors/fetch` | `conn_mod_def::GJ6FhkYwEh4::ckx3pGF5TtuoA5hFEdCZBg` |
| List Vector IDs | GET | `/vectors/list` | `conn_mod_def::GJ6FhkRvOPQ::0vLOYMrKSfO6J1KC77qoTw` |
| Delete Vectors From an Index | POST | `/vectors/delete` | `conn_mod_def::GJ6FhaZq0zE::L7dcxfbETqSzSQuYSH5pew` |
| Fetch Vectors by Metadata | POST | `/vectors/fetch_by_metadata` | `conn_mod_def::GJ6FhjRSSrg::McQ-Yt49Q6qVY1VFE0i9Iw` |
| Update a Vector in an Index | POST | `/vectors/update` | `conn_mod_def::GJ6Fh10TSdo::vauLAoepSC6GiCP0Gme9nw` |
| Upsert Vectors Into an Index | POST | `/vectors/upsert` | `conn_mod_def::GJ6FhsLMs9c::iOR1yrG5THSvnZ3DXsmUBw` |

### Indexes

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Index | GET | `/indexes/{{indexName}}` | `conn_mod_def::GJ6FglOEd1I::U9s9Udx4TnSdt-XYDvX3xg` |
| List Indexes | GET | `/indexes` | `conn_mod_def::GJ6FgvCoF-M::o-k6zz6OTyefKO7ylHVw3g` |
| Configure an Index | PATCH | `/indexes/{{indexName}}` | `conn_mod_def::GJ6FgQ56T7w::uhKSg0CUTi6ZhAUECWa__g` |
| Create an Index | POST | `/indexes` | `conn_mod_def::GJ6FgQglwng::0u4xqrCKRMKbBUYYr3WmEg` |
| Create an Index with Integrated Embedding | POST | `/indexes/create-for-model` | `conn_mod_def::GJ6FgZxn8hQ::ZHxk6zc8R3OPqCRYLRAZhw` |
| Delete an Index | DELETE | `/indexes/{{indexName}}` | `conn_mod_def::GJ6FgaTo9FE::Q11ma8t4S4y72F-fAMii5w` |

### Backups

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Backup | GET | `/backups/{{backupId}}` | `conn_mod_def::GJ6FgaPSCEs::54e4TQK0SJunY9H9Ef4_eA` |
| List Project Backups | GET | `/backups` | `conn_mod_def::GJ6FgjvS-ss::ZS_qmgsiRC2s61Xic_qGXw` |
| Create a Backup for an Index | POST | `/indexes/{{indexName}}/backups` | `conn_mod_def::GJ6FgRAtm2U::4h6CpSCrS-mBbs0rYvK_mA` |
| Create an Index From a Backup | POST | `/backups/{{backupId}}/create-index` | `conn_mod_def::GJ6FgRMI6j8::WGHmruPNRparFKLicJKWjw` |
| Delete a Backup | DELETE | `/backups/{{backupId}}` | `conn_mod_def::GJ6FgZzdJ8c::CvbL0W7wQCOWl4QKEBIpdg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Details | GET | `/admin/projects/{{projectId}}` | `conn_mod_def::GJ6FhY1L9Os::W80RowCSSMi5RDCF1YJv4w` |
| List Projects | GET | `/admin/projects` | `conn_mod_def::GJ6FhbMZNUY::46t8EJy4SpGlq2RtSTvELQ` |
| Create a New Project | POST | `/admin/projects` | `conn_mod_def::GJ6FhJNMKdM::UiYV-zaGS7GByY3INNYLSQ` |
| Delete a Project | DELETE | `/admin/projects/{{projectId}}` | `conn_mod_def::GJ6FhazJTqU::AgkzBKzpSzuqnQ-FVEVAqQ` |
| Update a Project | PATCH | `/admin/projects/{{projectId}}` | `conn_mod_def::GJ6FhYbXTGE::PGe-aYHuTK256ZBwfnEXfg` |

### Assistants

| Action | Method | Path | Action id |
|---|---|---|---|
| Check an Assistant's Status | GET | `/assistant/assistants/{{assistantName}}` | `conn_mod_def::GJ6Ff54F0xA::nGmx-yVcSbKEyTWrJUI_sg` |
| List Assistants | GET | `/assistant/assistants` | `conn_mod_def::GJ6FgFKSDdI::a4laSJWDSPmTKRdcO97HiA` |
| Create an Assistant | POST | `/assistant/assistants` | `conn_mod_def::GJ6Ff5uVVQ0::YIXrzb2vRayhHKY8XHI0tg` |
| Delete an Assistant | DELETE | `/assistant/assistants/{{assistantName}}` | `conn_mod_def::GJ6Ff7nQMNo::0xBszg-ATuyy9_1vB4BaoQ` |
| Update an Assistant | PATCH | `/assistant/assistants/{{assistantName}}` | `conn_mod_def::GJ6FgH-0628::pBv70L0rQlCFcNX3ksq33g` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Collection | GET | `/collections/{{collectionName}}` | `conn_mod_def::GJ6Fgk1QFSc::FHw2BRzuQdelEQ0ro3Xzfw` |
| List Collections | GET | `/collections` | `conn_mod_def::GJ6Fgx98x5U::abZwbllXQK2_DLml8ZzTKQ` |
| Create a Collection | POST | `/collections` | `conn_mod_def::GJ6FgQTF4-8::479zQeb8TXmxx0uYgfoY8A` |
| Delete a Collection | DELETE | `/collections/{{collectionName}}` | `conn_mod_def::GJ6FgZESMr4::_pPGhDA9TxejykbGb_rvcA` |

### Namespaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Namespace in an Index | GET | `/namespaces/{{namespace}}` | `conn_mod_def::GJ6Fg6vtNAo::1eyuoZmSTDmOjhHvj7sCwA` |
| List Namespaces in an Index | GET | `/namespaces` | `conn_mod_def::GJ6Fg7HYGnI::Nk9Uf48vSQimNMgSyZElPw` |
| Create a Namespace in an Index | POST | `/namespaces` | `conn_mod_def::GJ6Fg920AKs::3_NG6VEfRXuHI4-L2huisw` |
| Delete a Namespace from an Index | DELETE | `/namespaces/{{namespace}}` | `conn_mod_def::GJ6Fg-m-MUs::b8ofSrBWRDGBMV90ozt9fw` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Details | GET | `/admin/organizations/{{organizationId}}` | `conn_mod_def::GJ6FhGHKahg::ll2Dtj7wRG2srQA1r-dzdA` |
| List Organizations | GET | `/admin/organizations` | `conn_mod_def::GJ6FhG1LtFg::bJtKaBGlRAWhBxI_lBEx1A` |
| Delete an Organization | DELETE | `/admin/organizations/{{organizationId}}` | `conn_mod_def::GJ6FhFwsqmg::6qgleHm3Tf6l1sEuxOX1dg` |
| Update an Organization | PATCH | `/admin/organizations/{{organizationId}}` | `conn_mod_def::GJ6FhQcLv_c::4pzp4ME9Rui_nJ62W_XHuw` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Details | GET | `/admin/api-keys/{{apiKeyId}}` | `conn_mod_def::GJ6FfX3y6O0::MTg3PSMPQS6GYSFMexbxhw` |
| List a Project's API Keys | GET | `/admin/projects/{{projectId}}/api-keys` | `conn_mod_def::GJ6FfX5q7v8::ND_9CcH5SDGztegW0lC5Tg` |
| Delete an API Key | DELETE | `/admin/api-keys/{{apiKeyId}}` | `conn_mod_def::GJ6FfXtNXq8::rLgPcNjiRIax5fzi6KZkZA` |
| Update an API Key | PATCH | `/admin/api-keys/{{apiKeyId}}` | `conn_mod_def::GJ6FfYLgzsA::MemBpzVCRWijMFq-f_3vkw` |

### BulkImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Index Import | GET | `/bulk/imports/{{id}}` | `conn_mod_def::GJ6FfjRbHmM::JF4cuAyoQ1CuDU_yjAYsHA` |
| List Index Bulk Imports | GET | `/bulk/imports` | `conn_mod_def::GJ6FfnNzmLw::KxtCuZYST_2AMuQW5VsU4A` |
| Cancel an Index Import | DELETE | `/bulk/imports/{{id}}` | `conn_mod_def::GJ6FfjQKDi4::qSecMvUoQbCTyJXGqH7-sQ` |
| Start an Import into an Index | POST | `/bulk/imports` | `conn_mod_def::GJ6FfnPh9xA::4Mxgb9KGRN-w5ZSSI2aaSQ` |

### AssistantFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an Assistant File Upload | GET | `/files/{{assistantName}}/{{assistantFileId}}` | `conn_mod_def::GJ6Ff7pLK44::iHZ2UYgISHSz_QLxrBauQg` |
| List an Assistant's Files | GET | `/files/{{assistantName}}` | `conn_mod_def::GJ6FgItqeJ8::_zXVQ3hxRHOjedCn7hycEg` |
| Delete an Assistant File | DELETE | `/files/{{assistantName}}/{{assistantFileId}}` | `conn_mod_def::GJ6Ff8y8FTM::QirJhVxeQ8a-4fIKfabAnw` |

### RestoreJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Restore Job | GET | `/restore-jobs/{{jobId}}` | `conn_mod_def::GJ6FgiRgyqM::iLwIyLIPQwyuJgCEMW_-jQ` |
| List Restore Jobs | GET | `/restore-jobs` | `conn_mod_def::GJ6FgvBLsvU::IPJ0mXhCSJGFhmwYLf9viA` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Records in a Namespace with Text | POST | `/records/namespaces/{{namespace}}/search` | `conn_mod_def::GJ6FhtHxT6s::8_gSxILERq-CBW25K1L2tQ` |
| Upsert Text into an Index Namespace | POST | `/records/namespaces/{{namespace}}/upsert` | `conn_mod_def::GJ6FhxKLPL4::V5m_gTmdSYy1A2oZyrvxzA` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Model | GET | `/models/{{modelName}}` | `conn_mod_def::GJ6Ffjofm58::0st1R6_kTNyPZ8SyELDQ1Q` |
| List Available Models | GET | `/models` | `conn_mod_def::GJ6FfvuR4Qs::lPlXNgIQRvShLdJfZyg8kg` |

### AssistantEvaluationMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Evaluate Answer Alignment | POST | `/assistant/evaluation/metrics/alignment` | `conn_mod_def::GJ6FgvBaNwU::3hM8MX0_RhWGLDhyCU62OA` |

### PrometheusServiceDiscoveryTargets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Prometheus Service Discovery Targets | GET | `/prometheus/projects/{{projectId}}/metrics/discover` | `conn_mod_def::GJ6Fgy7x_N0::ucQ61BinQdS3wuRVn5duYA` |

### Query

| Action | Method | Path | Action id |
|---|---|---|---|
| Search an Index with a Vector | POST | `/query` | `conn_mod_def::GJ6Fhj198DI::-0r565e7TSWIcljnlk4YHA` |

### ProjectApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Project API Key | POST | `/admin/projects/{{projectId}}/api-keys` | `conn_mod_def::GJ6Ffbn0xO0::v7ToyMbrRe6mhCzXHiyaMQ` |

### Rerank

| Action | Method | Path | Action id |
|---|---|---|---|
| Rerank Results | POST | `/rerank` | `conn_mod_def::GJ6Ffvqic6Y::Pi9qGpbqTF2BtIs2_FvrRQ` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Vectors | POST | `/embed` | `conn_mod_def::GJ6FfxtLUH0::rYOKsmHXSJqKcES1iI8yLg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File to an Assistant | POST | `/files/{{assistantName}}` | `conn_mod_def::GJ6FgFfXYy0::zXSR-0f_RpmT12Cg2WGPVA` |

### AssistantChat

| Action | Method | Path | Action id |
|---|---|---|---|
| Chat With an Assistant | POST | `/chat/{{assistantName}}` | `conn_mod_def::GJ6FfvmRVA0::4KwaZd7fQDyFwtfe0OvaNg` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion for an Assistant | POST | `/chat/{{assistantName}}/chat/completions` | `conn_mod_def::GJ6FfwF3bos::9UwVoGyDT0q0x34fQBOpng` |

### AssistantContext

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Context From an Assistant | POST | `/chat/{{assistantName}}/context` | `conn_mod_def::GJ6FgFxgGnA::MMFMs1AWT7GKF5kuaWF5qg` |

### IndexBackups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Index's Backups | GET | `/indexes/{{indexName}}/backups` | `conn_mod_def::GJ6FgmkLRTI::MmtZ7r0uQNyT_4V5l3QjWg` |

### OauthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an OAuth Access Token for a Service Account | POST | `/oauth/token` | `conn_mod_def::GJ6Fg7ZuLt4::kOTp1So5R1SZhguSygLmUw` |

### IndexStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Index Stats | POST | `/describe_index_stats` | `conn_mod_def::GJ6FhkL74kU::mdEe-YSCTT2TcZEvMYp6Fw` |

## When a call fails

The error comes from Pinecone, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pinecone

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
