---
name: fathom
description: Fathom.ai is an AI-powered meeting assistant that automatically records, transcribes, and summarizes virtual meetings across platforms like Zoom, Google Meet, and Teams, extracting key points, decisions, and action items while integrating insights directly with CRMs and productivity tools for streamlined follow-ups. Read and write Fathom data through One: webhooks, recordingsummary, recordingtranscript, teammembers, teams, meetings and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Fathom, create or update a record there, or build code against the Fathom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fathom
  generated-from: one-knowledge-base
---

# Fathom through One

Fathom.ai is an AI-powered meeting assistant that automatically records, transcribes, and summarizes virtual meetings across platforms like Zoom, Google Meet, and Teams, extracting key points, decisions, and action items while integrating insights directly with CRMs and productivity tools for streamlined follow-ups.

One exposes Fathom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fathom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fathom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fathom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook | POST | `/external/v1/webhooks` | `conn_mod_def::GIpBZDB6O2g::YLXDWM7YSPqe3TZmYgJnyQ` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GIpBZKeCwEA::-2KNBdWxRoGLqyH7XZjltg` |

### RecordingSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Recording's Summary | GET | `/recordings/{{recordingId}}/summary` | `conn_mod_def::GIpBYFV5Mog::G6aag6ykQ-uD6XCeUUnq7Q` |

### RecordingTranscript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Recording's Transcript | GET | `/recordings/{{recordingId}}/transcript` | `conn_mod_def::GIpBYRQXBLg::i24wKi0TT7mR8qDUpHetnQ` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members | GET | `/team_members` | `conn_mod_def::GIpBYlaTI-g::B4gwmPQjTnWLgscYkGS6yw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/external/v1/teams` | `conn_mod_def::GIpBYusmS-g::JIRctn9UTdqvHJtrulHu1g` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Meetings | GET | `/external/v1/meetings` | `conn_mod_def::GIpBY5llTnA::hn5EM1_-Q5Og02MDiui_Gg` |

## When a call fails

The error comes from Fathom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fathom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
