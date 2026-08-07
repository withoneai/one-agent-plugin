---
name: groq
description: Groq is an AI inference platform that provides high-performance infrastructure and APIs for running large language models with low latency, allowing developers and enterprises to build and scale real-time AI applications, assistants, and model-powered workflows. Read and write Groq data through One: files, batches, finetunings, models, audiospeech, audiotranscriptions and more, 23 actions with real parameter documentation. Use whenever the user asks to look something up in Groq, create or update a record there, or build code against the Groq API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: groq
  generated-from: one-knowledge-base
---

# Groq through One

Groq is an AI inference platform that provides high-performance infrastructure and APIs for running large language models with low latency, allowing developers and enterprises to build and scale real-time AI applications, assistants, and model-powered workflows.

One exposes Groq through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `groq` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Groq is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Groq account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download File Content | GET | `/openai/v1/files/{{fileId}}/content` | `conn_mod_def::GLp2vyw6RKI::AeC9mS8OQGWH-VU3x11x5Q` |
| List Files | GET | `/openai/v1/files` | `conn_mod_def::GLp2vzWwkJo::wG3aHjSmQ4KL3bGPQtbi5Q` |
| Retrieve a File | GET | `/openai/v1/files/{{fileId}}` | `conn_mod_def::GLp2vysO-mE::ZW99-o2dToKVrr7D1cQ9CQ` |
| Delete a File | DELETE | `/openai/v1/files/{{fileId}}` | `conn_mod_def::GLp2vonGuaE::eBQntJ1CTiCry5wfP8VAfQ` |
| Upload a File | POST | `/openai/v1/files` | `conn_mod_def::GLp2vzVLoss::FgOvli6QRhyFpAxZtaNSyg` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Batches Using OpenAI v1 | GET | `/openai/v1/batches` | `conn_mod_def::GLp2vtjVimM::qXGLPLQ2S6StbPTfU8LItw` |
| Retrieve Batch | GET | `/openai/v1/batches/{{batchId}}` | `conn_mod_def::GLp2vpVzdoA::qYLV2djnQJqecYhTUzDGUA` |
| Cancel a Batch | POST | `/openai/v1/batches/{{batchId}}/cancel` | `conn_mod_def::GLp2vhI7aM0::JjoW9Ka0SWaeXM-wTNQtQQ` |
| Create Batch Using OpenAI v1 | POST | `/openai/v1/batches` | `conn_mod_def::GLp2vhfKr78::wfJXO35zRAKAuF3_C-1xBg` |

### FineTunings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fine Tunings | GET | `/v1/fine_tunings` | `conn_mod_def::GLp2v404OXg::C7rU9eKjSkeA-FRkJNWDaA` |
| Retrieve a Fine Tuning by ID | GET | `/v1/fine_tunings/{{id}}` | `conn_mod_def::GLp2v7HlWeA::zK0b2rv3ThiQbC6kOe0kig` |
| Create Fine Tunings | POST | `/v1/fine_tunings` | `conn_mod_def::GLp2vzQyc-4::t_Zam-05QvC0yY866OnXqg` |
| Delete a Fine Tuning | DELETE | `/v1/fine_tunings/{{id}}` | `conn_mod_def::GLp2v4sFuvc::Dy7mlyBIQcirNKmIRh4cWA` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model | GET | `/openai/v1/models/{{model}}` | `conn_mod_def::GLp2v48V_kw::h3PJ69bTTrynBXIBfEwgEQ` |
| List Available Models | GET | `/openai/v1/models` | `conn_mod_def::GLp2wDXvMmA::xDxh2JgNRoSUlrt1wCY5qQ` |
| Delete Model | DELETE | `/openai/v1/models/{{model}}` | `conn_mod_def::GLp2v6g-1NQ::yY3-qMZBQVaS3AAUq-b2Kw` |

### AudioSpeech

| Action | Method | Path | Action id |
|---|---|---|---|
| Speech Using OpenAI v1 Audio | POST | `/openai/v1/audio/speech` | `conn_mod_def::GLp2vg5inAo::ccaD_GyoT_2dbftkvUCYyQ` |

### AudioTranscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Audio Transcription | POST | `/openai/v1/audio/transcriptions` | `conn_mod_def::GLp2vhQ5i_0::sAKnecXBTCaHf0C1IVBitA` |

### AudioTranslations

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate Audio into English | POST | `/openai/v1/audio/translations` | `conn_mod_def::GLp2virvqU0::uZdFDo5BQAurHyMC5KhUvQ` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat Completion | POST | `/openai/v1/chat/completions` | `conn_mod_def::GLp2vos0PN8::mag-A6R4Q_Gz22i4fmRQ7A` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embedding Using OpenAI v1 | POST | `/openai/v1/embeddings` | `conn_mod_def::GLp2vpVliZw::VqIIGRVMSyCbkZZT3Zi4GA` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Response | POST | `/openai/v1/responses` | `conn_mod_def::GLp2wAkepFY::kEiCA00tR1yr1kruS1sJ4Q` |

### Reranking

| Action | Method | Path | Action id |
|---|---|---|---|
| Reranking Using OpenAI v1 | POST | `/openai/v1/reranking` | `conn_mod_def::GLp2wBptS7M::VQTtMFKqQkKpWvY5SSp6ug` |

## When a call fails

The error comes from Groq, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/groq

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
