---
name: leexi
description: Leexi is a conversation intelligence platform that records, transcribes, and analyzes sales and customer calls to extract insights, automate CRM updates, and improve team performance through actionable feedback and coaching. Read and write Leexi data through One: meetingevents, calls, users, teams and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Leexi, create or update a record there, or build code against the Leexi API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: leexi
  generated-from: one-knowledge-base
---

# Leexi through One

Leexi is a conversation intelligence platform that records, transcribes, and analyzes sales and customer calls to extract insights, automate CRM updates, and improve team performance through actionable feedback and coaching.

One exposes Leexi through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `leexi` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Leexi is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Leexi account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MeetingEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting Event | GET | `/meeting_events/{{uuid}}` | `conn_mod_def::GKQULZEKLKg::5UcVrQzlSsaBbukQVSOcIA` |
| List Meeting Events | GET | `/v1/meeting_events` | `conn_mod_def::GKQULbwf0oA::rjJAoMCyRAu_Nep8NQlGSA` |
| Create a Meeting Event | POST | `/v1/meeting_events` | `conn_mod_def::GKQULHfBnUA::sItNsbbCRrKZIgxRYy4u_g` |
| Delete a Meeting Event | DELETE | `/meeting_events/{{uuid}}` | `conn_mod_def::GKQULYVASog::Dm6r19yRQG6DXj15ROSDcA` |
| Launch a Meeting Assistant for a Meeting Event | POST | `/meeting_events/{{uuid}}/launch_bot` | `conn_mod_def::GKQULYZLywA::zu4M8T0yRAmdvTgjj4ENZg` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call or Meeting | GET | `/calls/{{uuid}}` | `conn_mod_def::GKQULGFYtNA::_yZyBpKzR4if71PBOqCzfA` |
| List Calls and Meetings | GET | `/calls` | `conn_mod_def::GKQULPmUdlg::wYUmvgx6QxutdPshXp08Og` |
| Create a Call or Meeting | POST | `/calls` | `conn_mod_def::GKQULIqBcxA::E27zwWQHT7GYiaJGBenDTQ` |
| Request a Presigned URL to Upload a Call Recording | POST | `/v1/calls/presign_recording_url` | `conn_mod_def::GKQULH4cy9g::7ZNR3Ge5Q6ie-OzcJwYUcg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/users` | `conn_mod_def::GKQULky4l3g::oAuSiM-STUCCPrbZUEqhrA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/teams` | `conn_mod_def::GKQULYgI3IA::_aRUBinhQ_-wwMM7iT4AFw` |

## When a call fails

The error comes from Leexi, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/leexi

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
