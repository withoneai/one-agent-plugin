---
name: langbase
description: Langbase is a serverless AI developer platform that enables teams to build, deploy, and scale AI agents and applications with unified APIs, memory (RAG), workflows, and multi-model support—eliminating infrastructure overhead while providing tools for collaboration, observability, and rapid iteration. Read and write Langbase data through One: pipes, memorysets, threads, memory, memorydocuments, traces and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Langbase, create or update a record there, or build code against the Langbase API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: langbase
  generated-from: one-knowledge-base
---

# Langbase through One

Langbase is a serverless AI developer platform that enables teams to build, deploy, and scale AI agents and applications with unified APIs, memory (RAG), workflows, and multi-model support—eliminating infrastructure overhead while providing tools for collaboration, observability, and rapid iteration.

One exposes Langbase through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `langbase` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Langbase is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Langbase account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pipes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipe by Owner Login and Pipe Name | GET | `/v1/pipes/{{ownerLogin}}/{{pipeName}}` | `conn_mod_def::GKO9n3nvf4A::h_Sin8nWT0-YAD6bejO0mw` |
| List an Organization's Pipes | GET | `/beta/org/{{orgLogin}}/pipes` | `conn_mod_def::GKO9nKV1CXA::nZuzICaqSpOi5D2BNndnqA` |
| List Pipes | GET | `/v1/pipes` | `conn_mod_def::GKO9oDFU4ng::j0qioPizQMu-YTMHlDe8-g` |
| Create a Pipe | POST | `/v1/pipes` | `conn_mod_def::GKO9n3T4SdA::XbhuX-XIQjGi2kcf-pXjKg` |
| Create an Organization Pipe | POST | `/beta/org/{{orgLogin}}/pipes` | `conn_mod_def::GKO9nKaKq6g::1qSXZp86Qb-eUGMEK1SYbg` |
| Run a Pipe | POST | `/v1/pipes/run` | `conn_mod_def::GKO9n3zu4Lg::BlfR7lioTDGCNcGmUhI8HQ` |
| Update a Pipe | POST | `/v1/pipes/{{pipeName}}` | `conn_mod_def::GKO9oADDWhg::w1RA_cpRRhOl0sIeN7ONog` |

### MemorySets

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Memory Sets | GET | `/beta/org/{{orgLogin}}/memorysets` | `conn_mod_def::GKO9nKHDevA::D1FEIJLZTY6GMb3CVhg4lg` |
| List User Memory Sets | GET | `/beta/user/memorysets` | `conn_mod_def::GKO9nThHN_A::2Jlfx956RlKLPUozK-2b2Q` |
| Create an Organization Memory Set | POST | `/beta/org/{{orgLogin}}/memorysets` | `conn_mod_def::GKO9nCLrKOA::6Ealw3RnR2iOP4XnxROu7w` |
| Delete a User or Organization Memory Set | DELETE | `/beta/memorysets/{{ownerLogin}}/{{memoryName}}` | `conn_mod_def::GKO9m4QG58g::5zq54McyTsygo6ngUvUUfg` |
| Retrieve Similar Chunks from a Memory Set | POST | `/beta/memorysets/{{ownerLogin}}/{{memoryName}}/retrieve` | `conn_mod_def::GKO9nAxcZQg::yCihH0YATzyYczPtsKdQ0g` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Thread | GET | `/v1/threads/{{threadId}}` | `conn_mod_def::GKO9oKsAJbA::hEnJEwBUQOuXef8au6yiuA` |
| Create Messages in a Thread | POST | `/v1/threads/{{threadId}}/messages` | `conn_mod_def::GKO9oAQrg4g::bkI5EMeWQUWZLhTCOibsSA` |
| Create Thread | POST | `/v1/threads` | `conn_mod_def::GKO9n_5DhTg::TiVjIHChTd2as7uGDNqMsw` |
| Delete a Thread | DELETE | `/v1/threads/{{threadId}}` | `conn_mod_def::GKO9n_WrM_g::-ERe0-m0Qn2bgLgxGQuEAA` |
| Update a Thread | POST | `/v1/threads/{{threadId}}` | `conn_mod_def::GKO9oKegm0g::Xs3P_omRThyvk01tuF7agQ` |

### Memory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Memory | GET | `/v1/memory` | `conn_mod_def::GKO9nuVXSog::BVliCEsGSsmy8_D6MtXqnA` |
| Create Memory | POST | `/v1/memory` | `conn_mod_def::GKO9nkz1zNg::h5KcetZ1S22rJYt4qYBkWg` |
| Delete a Memory | DELETE | `/v1/memory/{{memoryName}}` | `conn_mod_def::GKO9nuhIgsA::ePzmA4AxTcaXdvL3B096_A` |
| Retrieve Similar Chunks for Memory | POST | `/beta/memory/retrieve` | `conn_mod_def::GKO9nA807PA::21wUz51MSGKanICBd6q22w` |

### MemoryDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Memory's Documents | GET | `/v1/memory/{{memoryName}}/documents` | `conn_mod_def::GKO9nuS3iBg::f2_kboXsSQysCBd-djb3KA` |
| Delete a Memory Document | DELETE | `/v1/memory/{{memoryName}}/documents/{{documentName}}` | `conn_mod_def::GKO9nAnb1Kg::B1_Wl1NWRn2qgIUX4lArZg` |
| Upload a Memory Document | POST | `/v1/memory/documents` | `conn_mod_def::GKO9nu9D4Sg::BcqesHbUTJ-nNvvxPZR_Zg` |

### Traces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Trace | GET | `/v1/traces/{{traceId}}` | `conn_mod_def::GKO9oVaebXg::ZNW5ZNQdQfCV89rE7_QHEQ` |
| List Traces | GET | `/traces` | `conn_mod_def::GKO9oWEu4VA::qaXEAnutTv-_Q-ll63jrMw` |
| Create Traces | POST | `/v1/traces` | `conn_mod_def::GKO9oVuG0jA::Q3OynrrwSP6WAlCy2W5_Pg` |

### BetaPipes

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Beta Pipe | POST | `/beta/pipes/run` | `conn_mod_def::GKO9nUiFybA::Cf-eZORjSWuOalSc_l9O9Q` |
| Update a Beta Pipe for an Owner | POST | `/beta/pipes/{{ownerLogin}}/{{pipeName}}` | `conn_mod_def::GKO9nLG2iKg::xGAkqscpR2Kf35DihaSijg` |

### UserPipes

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Pipes | GET | `/beta/user/pipes` | `conn_mod_def::GKO9nbvSJTA::K-P4hViWTZOCF_XUGBhHUg` |
| Create a User Pipe | POST | `/beta/user/pipes` | `conn_mod_def::GKO9nUoFRZA::H9KdXADpTx-Dc6jX_6vwPg` |

### ThreadMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Thread Message | DELETE | `/v1/threads/{{threadId}}/messages/{{messageId}}` | `conn_mod_def::GKO9oNchsZA::jzmIyttdSl23n9V19RDjAw` |
| Update a Thread Message | POST | `/v1/threads/{{threadId}}/messages/{{messageId}}` | `conn_mod_def::GKO9oKfPiug::zDHpSbvvQqS0OerI4e9BMA` |

### OrganizationMemoryDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload an Organization Memory Document | POST | `/beta/org/{{orgLogin}}/memorysets/documents` | `conn_mod_def::GKO9nLXHmGA::Giqu7cF5QSiUx8G8pZLy5A` |

### LangbaseApiBaseInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Langbase API Base Information | GET | `/` | `conn_mod_def::GKO9m03_qug::259oAx9pTP63fgRRmuscYg` |

### BetaChat

| Action | Method | Path | Action id |
|---|---|---|---|
| Beta Chat | POST | `/beta/chat` | `conn_mod_def::GKO9m2WkrTg::75PFlVcPQLOIykt8W4SxdA` |

### MemorySetDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retry Embeddings Generation for a Memory Set Document | POST | `/beta/memorysets/{{ownerLogin}}/documents/embeddings/retry` | `conn_mod_def::GKO9m3XudhA::UTjYhzCxSBm17-B7HUIKMw` |

### BetaGenerate

| Action | Method | Path | Action id |
|---|---|---|---|
| Beta Generate | POST | `/beta/generate` | `conn_mod_def::GKO9m3X5N_g::C2aPVsZ0QL-_Db3PqMp9xQ` |

### MemorySetsDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Memory Set's Documents | GET | `/beta/memorysets/{{ownerLogin}}/{{memoryName}}/documents` | `conn_mod_def::GKO9nAlv58A::Aoz93WJXTsKfqaYQwJoZTQ` |

### UserMemorySets

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User Memory Set | POST | `/beta/user/memorysets` | `conn_mod_def::GKO9nUB0jng::rHHXggHGTcOWy4ALyIlyVQ` |

### UserMemorySetDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Document to a User Memory Set | POST | `/beta/user/memorysets/documents` | `conn_mod_def::GKO9nUDlOjg::6LHO44JyTPqFIq-NNQ-O5Q` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| List Models | GET | `/v1/models` | `conn_mod_def::GKO9nbqTdyg::nAbO5F25QUWt7_GWC59PGw` |

### MemoryChunks

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Memory Chunks | POST | `/v1/memory/retrieve` | `conn_mod_def::GKO9n3sud8A::SSySKblpRraw5fX3y75S1w` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Check API Health | GET | `/health` | `conn_mod_def::GKO9ncG4RvA::EQWsHnZ1Qsuzvga-9581jQ` |

### PublicAgentCompute

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Public Agent Compute | POST | `/{{ownerLogin}}/{{agent}}` | `conn_mod_def::GKO9ncIvleg::9bef3WEmRAydE_kRF9I3oA` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Images | POST | `/v1/images` | `conn_mod_def::GKO9ndWX6Ig::rsReDbIKRzOrsbVk6kmo5Q` |

### Routes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Routes | GET | `/routes` | `conn_mod_def::GKO9nkIwhZA::777bfUvcQ6y8n9iJ6knW4w` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embeddings | POST | `/v1/embed` | `conn_mod_def::GKO9nlIHQUg::jfwYHy9fSK6shoWy2wV2wg` |

### Chunker

| Action | Method | Path | Action id |
|---|---|---|---|
| Chunk Content | POST | `/v1/chunker` | `conn_mod_def::GKO9nlZanag::zqWlQ-RBRJukiVscYW7n3g` |

### Agent

| Action | Method | Path | Action id |
|---|---|---|---|
| Run an Agent | POST | `/v1/agent/run` | `conn_mod_def::GKO9nlaVeBA::RfNGXa8XT3umHiu3TNG5ug` |

### MemoryDocumentsEmbeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Retry a Memory Document's Embeddings | GET | `/v1/memory/{{memoryName}}/documents/{{documentName}}/embeddings/retry` | `conn_mod_def::GKO9nvlZqqg::8Fj5SpKmRtaulRmo92k4vw` |

### Parser

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse a Document | POST | `/v1/parser` | `conn_mod_def::GKO9n3J7uOA::vjgTaPqHQ-mql4KTvVZyDA` |

### ThreadsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Thread's Messages | GET | `/v1/threads/{{threadId}}/messages` | `conn_mod_def::GKO9oK2yBxA::yEG6Bd5CQu6DzEHhkBQY5A` |

### CrawlerTool

| Action | Method | Path | Action id |
|---|---|---|---|
| Crawl URLs with the Crawler Tool | POST | `/v1/tools/crawl` | `conn_mod_def::GKO9oWM6gDA::tYqVfkFwRbWXAwKpmD0qOA` |

### WebSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Web Search Tool | POST | `/v1/tools/web-search` | `conn_mod_def::GKO9oWviv5A::hyKeXU-PSvmYAu7cIvS7ZQ` |

## When a call fails

The error comes from Langbase, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/langbase

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
