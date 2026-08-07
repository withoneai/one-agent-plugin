---
name: otter-ai
description: Otter.ai is a meeting assistant platform that provides real-time transcription, recording, summaries, and searchable notes for voice conversations, allowing teams and developers to capture meeting content, automate follow-up workflows, and integrate conversation data into collaboration and productivity tools. Read and write Otter.ai data through One: conversations, channels, workspace and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Otter.ai, create or update a record there, or build code against the Otter.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: otter-ai
  generated-from: one-knowledge-base
---

# Otter.ai through One

Otter.ai is a meeting assistant platform that provides real-time transcription, recording, summaries, and searchable notes for voice conversations, allowing teams and developers to capture meeting content, automate follow-up workflows, and integrate conversation data into collaboration and productivity tools.

One exposes Otter.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `otter-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Otter.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Otter.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Conversation Audio | GET | `/v1/conversations/{{id}}/audio` | `conn_mod_def::GLU0_lgbTMA::vdLtmolEQ7iDmut3egopZQ` |
| Get Conversation Details | GET | `/v1/conversations/{{id}}` | `conn_mod_def::GLU0_nGUWZY::l8EfxT1ZSP28ydOImWRx_g` |
| List Conversations | GET | `/v1/conversations` | `conn_mod_def::GLU0_nBqtU4::lN54zLVoTTWVkhySN_SQTg` |
| Create a Conversation | POST | `/v1/conversations` | `conn_mod_def::GLU0_xpSy8Y::gQfCiRPRR8GCEaQG21BYLw` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Channels | GET | `/v1/channels` | `conn_mod_def::GLU0_igjD2Q::TzyFScXIRpWISp0qtYt1sA` |
| List Members of a Channel | GET | `/v1/channels/{{id}}/members` | `conn_mod_def::GLU0_lf9ONg::iyEPNiwRSJSBuERc379k9w` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workspace | GET | `/v1/workspace` | `conn_mod_def::GLU0_zZHxQg::apD2lO4qR2iqlwnGvS4vuQ` |

## When a call fails

The error comes from Otter.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/otter-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
