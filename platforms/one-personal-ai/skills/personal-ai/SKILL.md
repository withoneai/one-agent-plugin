---
name: personal-ai
description: Personal AI allows users to create a digital memory by recording their thoughts, interactions, and decisions, enabling a more personalized and context-aware assistant experience. Read and write Personal AI data through One: documents, memory, instruction, message, conversation, personamemoryfiles and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in Personal AI, create or update a record there, or build code against the Personal AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: personal-ai
  generated-from: one-knowledge-base
---

# Personal AI through One

Personal AI allows users to create a digital memory by recording their thoughts, interactions, and decisions, enabling a more personalized and context-aware assistant experience.

One exposes Personal AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `personal-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Personal AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Personal AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Documents from a Persona | POST | `/v1/document` | `conn_mod_def::GJ6CmTxCGTI::EPhZzapZQFCmlntSFAi2cQ` |
| Update a Persona Document (by `feed_id`) | PUT | `/v1/update-document` | `conn_mod_def::GJ6Cmb175Hc::X6j0xf5vTkCRApy3Fvx2vg` |

### Memory

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Content from a URL to Memory | POST | `/upload-url` | `conn_mod_def::GJ6Cma-wGcs::xC_fU4jfRWyIRHu0IeqO9g` |
| Upload Text Memories to a Memory Stack | POST | `/memory` | `conn_mod_def::GJ6CmPvLXC4::fgmPQSkSQPSr1GUo0cNTcQ` |

### Instruction

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an AI Instruction | POST | `/v1/instruction` | `conn_mod_def::GJ6CmPpGsRQ::6VqjGgiDSfenzuRdJvBv4A` |

### Message

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an AI Message | POST | `/v1/message` | `conn_mod_def::GJ6CmP04u9A::YxtvHt2ZSViHGpz4ddNrFQ` |

### Conversation

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Conversation History (by Session) from a Domain | POST | `/conversation` | `conn_mod_def::GJ6CmSrBi0I::3F4PLUJJS32pGsm_T8WNww` |

### PersonaMemoryFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File to a Persona’s Memory | POST | `/v1/upload-file` | `conn_mod_def::GJ6Cme5EcgY::MGOZ-I9DQLWDP7STJ8y6tg` |

### MemoryDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Text Document to Memory | POST | `/upload-text` | `conn_mod_def::GJ6CmbLOo2c::dguGgp0xRzeBrYDy4hCwKg` |

## When a call fails

The error comes from Personal AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/personal-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
