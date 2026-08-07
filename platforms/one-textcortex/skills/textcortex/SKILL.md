---
name: textcortex
description: TextCortex is an AI writing and knowledge productivity platform that provides text generation, rewriting, summarization, and workflow automation tools, allowing teams and developers to create content, connect business data sources, and build AI-powered assistants across workplace applications. Read and write TextCortex data through One: models, chatcompletions and more, 3 actions with real parameter documentation. Use whenever the user asks to look something up in TextCortex, create or update a record there, or build code against the TextCortex API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: textcortex
  generated-from: one-knowledge-base
---

# TextCortex through One

TextCortex is an AI writing and knowledge productivity platform that provides text generation, rewriting, summarization, and workflow automation tools, allowing teams and developers to create content, connect business data sources, and build AI-powered assistants across workplace applications.

One exposes TextCortex through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `textcortex` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm TextCortex is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real TextCortex account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| List Models | GET | `/models` | `conn_mod_def::GLEyG-OJpLg::WTi3cSqBSqSsBJpuekDY5w` |
| Retrieve a Model (by ID) | GET | `/v1/models/{{modelId}}` | `conn_mod_def::GLEyG-v3QGA::MBd7AgplTMOaxWgejrYZAQ` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion | POST | `/v1/chat/completions` | `conn_mod_def::GLEyG9uwRkg::VxydVbhxQ6a-bprIEQjK4g` |

## When a call fails

The error comes from TextCortex, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/textcortex

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
