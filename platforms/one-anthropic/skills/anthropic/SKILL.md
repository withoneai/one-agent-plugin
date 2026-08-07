---
name: anthropic
description: Anthropic is an AI safety and research company focused on building reliable, interpretable, and steerable AI systems. It is known for developing advanced language models for ethical and safe AI interactions. Read and write Anthropic data through One: files, messagebatch, skills, skillversions, messages, models and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Anthropic, create or update a record there, or build code against the Anthropic API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: anthropic
  generated-from: one-knowledge-base
---

# Anthropic through One

Anthropic is an AI safety and research company focused on building reliable, interpretable, and steerable AI systems. It is known for developing advanced language models for ethical and safe AI interactions.

One exposes Anthropic through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `anthropic` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Anthropic is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Anthropic account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File’s Content | GET | `/files/{{file_id}}/content` | `conn_mod_def::GJfJ8Z6tTCY::PiFRnoDoR5ugvX9BH99wqw` |
| Get a File’s Metadata | GET | `/files/{{file_id}}` | `conn_mod_def::GJfJ8MUeWsg::r0TjIM4-QBq6Ui9_jRE5tg` |
| List Files | GET | `/v1/files` | `conn_mod_def::GJfJ77mA11c::W_Qr9mmnSoCtc5jX1HtMiA` |
| Delete a File | DELETE | `/files/{{FILE_ID}}` | `conn_mod_def::GJfJ8S0m5DU::QmTAie4wQ3-VVOnoMc8yXA` |
| Upload File | POST | `/files` | `conn_mod_def::GJfJ8DR_zB8::Bw0aekc8QkKwPQAwlzWxjg` |

### MessageBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Message Batch | GET | `/messages/batches/{{MESSAGE_BATCH_ID}}` | `conn_mod_def::GJfJ7N6DBMw::yLes2ZSuQGaycdq--tSb6w` |
| Cancel a Message Batch | POST | `/messages/batches/{{MESSAGE_BATCH_ID}}/cancel` | `conn_mod_def::GJfJ7kH44mU::MKza34oJSG6PI4RGhjIOJg` |
| Create a Message Batch | POST | `/messages/batches` | `conn_mod_def::GJfJ7IX9tYs::WHWA3B_BR6O8wkIHP0xHeQ` |
| Delete a Message Batch | DELETE | `/messages/batches/{{MESSAGE_BATCH_ID}}` | `conn_mod_def::GJfJ7ckz8Yk::E3CA-ocUTYG7xgqlmTGj5w` |

### Skills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Skill | GET | `/skills/{{SKILL_ID}}` | `conn_mod_def::GJfJ8yiKD4o::X2dYk4SrQia7HvQ-CYIeGg` |
| List Skills | GET | `/skills` | `conn_mod_def::GJfJ8jZ44M8::8aLMS_plS02U4wCAoBbTwg` |
| Create Skill | POST | `/skills` | `conn_mod_def::GJfJ8rwYXS4::Xz-PmqM1RymG6WEjPh5lxQ` |
| Delete a Skill | DELETE | `/skills/{{SKILL_ID}}` | `conn_mod_def::GJfJ84LARXY::fyqNOPDLQUGMZhL4WQeIvw` |

### SkillVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Skill Version | GET | `/skills/{{skill_id}}/versions/{{version}}` | `conn_mod_def::GJfJ9MyIpFI::1f0yQ4NqTLmIV1enwUuZYw` |
| List a Skill’s Versions | GET | `/skills/{{SKILL_ID}}/versions` | `conn_mod_def::GJfJ8_ULf-A::jvYjVDtVQOSGnbk554MHxw` |
| Create a Skill’s Version | POST | `/skills/{{SKILL_ID}}/versions` | `conn_mod_def::GJfJ9FbzPqM::72IjxIqMQyut4anq01gKfg` |
| Delete a Skill Version | DELETE | `/skills/{{SKILL_ID}}/versions/{{VERSION}}` | `conn_mod_def::GJfJ9TjG1Ck::ITHN7xh8RUCPEoO9GrWFyA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Tokens in a Message | POST | `/messages/count_tokens` | `conn_mod_def::GJfJ7yTrZCE::1218EHHuQwySxIIm4gzt5A` |
| Create a Message | POST | `/messages` | `conn_mod_def::GJfJ6hmtpYo::zy68VQHpRFmqayjAzxkjDA` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model | GET | `/models/{{MODEL_ID}}` | `conn_mod_def::GJfJ64YUd5k::_wfRfa_8RReYCex-eT9LGw` |
| List Models | GET | `/models` | `conn_mod_def::GJfJ6yZ3rR4::gK31C8kUTBah-ZuCgWVNVA` |

### TextCompletion

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Text Completion | POST | `/complete` | `conn_mod_def::GJfJ6phGzQI::h7FXOi08TzGwTqbDqx9NrQ` |

### MessageBatches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Message Batches | GET | `/messages/batches` | `conn_mod_def::GJfJ7BXTRSg::kCT1IuHxQtSsMVbqKcjzwg` |

### MessageBatchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Message Batch’s Results | GET | `/messages/batches/{{MESSAGE_BATCH_ID}}/results` | `conn_mod_def::GJfJ7q76Kbs::sAIgnrXJRxqSK935OBCqGA` |

## When a call fails

The error comes from Anthropic, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/anthropic

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
