---
name: flowise-ai
description: Flowise AI is a low-code platform for building AI agents and LLM-powered workflows with visual orchestration, integrations, and API deployment, allowing developers and teams to create, test, and manage conversational applications and automation pipelines more efficiently. Read and write Flowise AI data through One: documentstore, chatflows, assistants, tools, variables, chatmessages and more, 46 actions with real parameter documentation. Use whenever the user asks to look something up in Flowise AI, create or update a record there, or build code against the Flowise AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: flowise-ai
  generated-from: one-knowledge-base
---

# Flowise AI through One

Flowise AI is a low-code platform for building AI agents and LLM-powered workflows with visual orchestration, integrations, and API deployment, allowing developers and teams to create, test, and manage conversational applications and automation pipelines more efficiently.

One exposes Flowise AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `flowise-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Flowise AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Flowise AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DocumentStore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Store by ID | GET | `/document-store/store/{{id}}` | `conn_mod_def::GLf4KqLNyhg::SVEgW_akQiCVDPRGNWz-BQ` |
| Create Document Store | POST | `/api/v1/document-store/store` | `conn_mod_def::GLf4KbhkvbA::9-gGzbVERq-eC0NvawqQCw` |
| Delete a Document Store | DELETE | `/document-store/store/{{id}}` | `conn_mod_def::GLf4KqI8OHg::EoJOszczR1mRlZ9X6EaA0g` |
| Delete Data From Vector Store Using Document Store | DELETE | `/document-store/vectorstore/{{id}}` | `conn_mod_def::GLf4KqUWGCA::91AJ52Y8R1an7V6R3uKWRQ` |
| Refresh a Document Store | POST | `/document-store/refresh/{{id}}` | `conn_mod_def::GLf4KxeCf5g::y_Zs3BnCTM-08JpuIyeC4A` |
| Update a Document Store | PUT | `/document-store/store/{{id}}` | `conn_mod_def::GLf4K7BNv4A::lbMTpuC5S2WZFkDmqvp4nw` |
| Upsert Document to Document Store | POST | `/document-store/upsert/{{id}}` | `conn_mod_def::GLf4K6v_7Rg::T4uU8a4ISlSRFkRgGhUbIg` |

### Chatflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Chatflow by API Key | GET | `/chatflows/apikey/{{apikey}}` | `conn_mod_def::GLf4KT9qCbA::EBk6SVtbSjGAGGqNHEzlVQ` |
| Get Chatflow by ID | GET | `/chatflows/{{id}}` | `conn_mod_def::GLf4KS8ON6g::nNpnBUVZQxeWH6G9dK0uBQ` |
| List All Chatflows | GET | `/api/v1/chatflows` | `conn_mod_def::GLf4Ka1u_EA::Xlxjbja5ThG7YWh9Jve3DA` |
| Create Chatflows | POST | `/api/v1/chatflows` | `conn_mod_def::GLf4KTGwVeA::Heq_QZc6TjCmZ_opsSMapw` |
| Delete a Chatflow | DELETE | `/chatflows/{{id}}` | `conn_mod_def::GLf4KS4Q0JA::un2LAkBSTUqYPLCKBqZcvA` |
| Update a Chatflow | PUT | `/chatflows/{{id}}` | `conn_mod_def::GLf4Kbadnfg::WMFTuPFfTcChEP4BfA3tvg` |

### Assistants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Assistant by ID | GET | `/assistants/{{id}}` | `conn_mod_def::GLf4KLavYgA::jWwHC2-LRB-QkX7TWyUy6A` |
| List All Assistants | GET | `/api/v1/assistants` | `conn_mod_def::GLf4KKDeOTg::j4Kc8o-rRGm6OOW9TIaFxw` |
| Create Assistant | POST | `/api/v1/assistants` | `conn_mod_def::GLf4KKYTBIg::OFa8jhm9R0OKK0BOW8Ckww` |
| Delete an Assistant | DELETE | `/assistants/{{id}}` | `conn_mod_def::GLf4KKOw6Qg::PtR18fWhTbKnrAeoQxMR7Q` |
| Update an Assistant | PUT | `/assistants/{{id}}` | `conn_mod_def::GLf4KJbQT1g::CQxKuSojR_KdcDVI8wn21w` |

### Tools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tool by ID | GET | `/tools/{{id}}` | `conn_mod_def::GLf4LMfHuQg::JxcbWJDcSBKfOKChNS0fRw` |
| List All Tools | GET | `/api/v1/tools` | `conn_mod_def::GLf4LLobBVg::4pcrGiRgRfWVQiN5tpUVqw` |
| Create Tool | POST | `/api/v1/tools` | `conn_mod_def::GLf4LDr6_9A::CnysTiOQSd2YYB-vNWyPwg` |
| Delete a Tool by ID | DELETE | `/tools/{{id}}` | `conn_mod_def::GLf4LL39Gbg::bLFxoD4iS6uzKsC749AV9g` |
| Update a Tool by ID | PUT | `/tools/{{id}}` | `conn_mod_def::GLf4LMUWZEg::yLPSDWM3SRqzbivPHq4O_A` |

### Variables

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Variables | GET | `/api/v1/variables` | `conn_mod_def::GLf4LUWjcwg::iqmP3nGDSZ-UPuH89yz--A` |
| Create Variable | POST | `/api/v1/variables` | `conn_mod_def::GLf4LUcpBYA::nF2D2EJQRV2gLP1CgOvWpw` |
| Delete a Variable by ID | DELETE | `/variables/{{id}}` | `conn_mod_def::GLf4LUW7b6g::qrwPhbsCROWzfOOWkW75LQ` |
| Update a Variable by ID | PUT | `/variables/{{id}}` | `conn_mod_def::GLf4LVKpesA::lGnTQOWoTQm86J61sylaog` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Chat Messages for a Chatflow | GET | `/chatmessage/{{id}}` | `conn_mod_def::GLf4Kh2jIxA::59NJF1eWSu-Vsh7pW6I2Ew` |
| Delete All Chat Messages for a Chatflow | DELETE | `/chatmessage/{{id}}` | `conn_mod_def::GLf4Kd44hJA::Ks50utgnQC2nVK7_RGUDiA` |

### DocumentStoreChunks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Chunks Using Document Store | GET | `/document-store/chunks/{{storeId}}/{{loaderId}}/{{pageNo}}` | `conn_mod_def::GLf4Kxd43sA::ojZdErLeSReLwRS2W9KlUw` |
| Update a Specific Chunk in a Document Store Loader | PUT | `/document-store/chunks/{{storeId}}/{{loaderId}}/{{chunkId}}` | `conn_mod_def::GLf4KxiCRCg::Srq1--gwQEimcl4QEVX6oA` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Chat Message Feedbacks for a Chatflow | GET | `/feedback/{{id}}` | `conn_mod_def::GLf4K8V4-7g::dZrhFOsyQWqdv6uVFnE2QQ` |
| Create Chat Message Feedback | POST | `/api/v1/feedback` | `conn_mod_def::GLf4K6miHyg::TdcO4tQuQc6psjQ8LHHrCw` |

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Leads for a Chatflow | GET | `/leads/{{id}}` | `conn_mod_def::GLf4LEmGDWA::pBFAZoFKRWmrvDNtKF2x1w` |
| Create Lead | POST | `/api/v1/leads` | `conn_mod_def::GLf4LD9kDuA::1-2G7zbsTcOhGlmMJIeL5A` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Attachments Array for a Chatflow Chat | POST | `/attachments/{{chatflowId}}/{{chatId}}` | `conn_mod_def::GLf4KTezJ2A::HD4fYwjkSkGpuIPFP-VBWA` |

### DocumentStoreLoaderChunks

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Document Store Loader Chunk | DELETE | `/document-store/chunks/{{storeId}}/{{loaderId}}/{{chunkId}}` | `conn_mod_def::GLf4KpYF6Ig::RbRlPUIgScWB7KjCbucqvA` |

### DocumentStoreLoader

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Document Store Loader | DELETE | `/document-store/loader/{{storeId}}/{{loaderId}}` | `conn_mod_def::GLf4Kp8yNJg::AkLm0AYqQbaj8u7ti4H8Zw` |

### DocumentStores

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Document Stores | GET | `/api/v1/document-store/store` | `conn_mod_def::GLf4KxOdH3g::s_B7_1GWQwuHowqsIv1Ntw` |

### DocumentStoreVectorStore

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Document Store Vector Store | POST | `/api/v1/document-store/vectorstore/query` | `conn_mod_def::GLf4KymoW3A::OdH5TgWfSn-skZFDVUeGKw` |

### ChatMessageFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Chat Message Feedback | PUT | `/feedback/{{id}}` | `conn_mod_def::GLf4K7qwYOA::Aic5irJvSjGrLBc8_AJu-Q` |

### Server

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping Server | GET | `/ping` | `conn_mod_def::GLf4LCys3-g::chjiLZ6pRo6ryWq6QtPm8g` |

### Prediction

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Message to a Flow and Get an AI Response | POST | `/prediction/{{id}}` | `conn_mod_def::GLf4LECg8-A::9LWZN8WySoCzZ6_MtvyPsg` |

### UpsertHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Upsert History Records | PATCH | `/upsert-history/{{id}}` | `conn_mod_def::GLf4LLuaD_A::JHf0icphRyK-ESOYv5MW2A` |

### UpsertHistoryRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Upsert History Records for a Chatflow | GET | `/upsert-history/{{id}}` | `conn_mod_def::GLf4LWiZO5A::LF7_3HxkQyuq0QsNEF68eQ` |

### VectorEmbeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Upsert Vector Embeddings for a Chatflow | POST | `/vector/upsert/{{id}}` | `conn_mod_def::GLf4Lfi8ODA::K-SEk4R7RlSQUwjWIRkCrQ` |

## When a call fails

The error comes from Flowise AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/flowise-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
