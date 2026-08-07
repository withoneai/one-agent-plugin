---
name: deck-co
description: Deck provides developer infrastructure for accessing credentialed user data from login‑gated websites as if there were an official API, enabling real‑time extraction, normalization, and write actions across diverse sources without relying on brittle scripts or custom automation. Read and write Deck.co data through One: tasks, agents, credentials, eventdestinations, sources, sessions and more, 41 actions with real parameter documentation. Use whenever the user asks to look something up in Deck.co, create or update a record there, or build code against the Deck.co API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: deck-co
  generated-from: one-knowledge-base
---

# Deck.co through One

Deck provides developer infrastructure for accessing credentialed user data from login‑gated websites as if there were an official API, enabling real‑time extraction, normalization, and write actions across diverse sources without relying on brittle scripts or custom automation.

One exposes Deck.co through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `deck-co` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Deck.co is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Deck.co account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/tasks` | `conn_mod_def::GKYl22r6JCE::8FTW4xQxQ8-haVKTspdm2g` |
| Retrieve a Task | GET | `/tasks/{{taskId}}` | `conn_mod_def::GKYl21aDs3o::8o2iW6GET9KdZ9nlR6UeIA` |
| Create a Task | POST | `/v2/tasks` | `conn_mod_def::GKYl2t27p3I::wm0jJBQ9Rd-biicQ6y5LKw` |
| Delete a Task | DELETE | `/tasks/{{taskId}}` | `conn_mod_def::GKYl2364y7k::b01UmhYuTvCYEmQfPJOK9Q` |
| Run a Task | POST | `/tasks/{{taskId}}/run` | `conn_mod_def::GKYl22EaKRs::QLEig6b6TkGdo5qUUIwU8g` |
| Update a Task | PATCH | `/tasks/{{taskId}}` | `conn_mod_def::GKYl22Jxi5I::ioaFfgtJQjqlIo0IquXWVw` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agents | GET | `/v2/agents` | `conn_mod_def::GKYl1jjo1kk::G8UYKNb5SeCR9XmwlIZrfA` |
| Retrieve an Agent | GET | `/agents/{{agentId}}` | `conn_mod_def::GKYl1iXO0h8::GMgG_SeiSxqPuNRDmdff7A` |
| Create Agent | POST | `/v2/agents` | `conn_mod_def::GKYl1hhG6hk::QC45VHd8QpmhaDsWzSDT5Q` |
| Delete an Agent | DELETE | `/agents/{{agentId}}` | `conn_mod_def::GKYl1ihQBqM::qT6JxyY2TMykkW4eO4NJZw` |
| Update an Agent | PATCH | `/agents/{{agentId}}` | `conn_mod_def::GKYl1iXJbzU::wBbZD4zNR-KqSKOeJ3zQVg` |

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credentials | GET | `/v2/credentials` | `conn_mod_def::GKYl1tTl73E::PLoIGcoASmKU8ifETssFOA` |
| Retrieve a Credential | GET | `/credentials/{{credentialId}}` | `conn_mod_def::GKYl1riNyX8::fn6LppUCTC-LnGfgrtEgLQ` |
| Create a Credential | POST | `/v2/credentials` | `conn_mod_def::GKYl1sB5W_4::yom3Deq1RdetsN7oFBI7Gg` |
| Delete a Credential | DELETE | `/credentials/{{credentialId}}` | `conn_mod_def::GKYl1rxJdBs::dDfWmofFSUqSCHVxhgJvBA` |
| Update a Credential | PATCH | `/credentials/{{credentialId}}` | `conn_mod_def::GKYl1tMyfNM::4ZupaYZ6RMinURdQMS2-ew` |

### EventDestinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Destinations | GET | `/v2/event-destinations` | `conn_mod_def::GKYl18FkMs8::mOt3S1RqQKmnktjn1h78ww` |
| Retrieve an Event Destination | GET | `/event-destinations/{{destinationId}}` | `conn_mod_def::GKYl12FMhYw::jn31NTVORoCC5VWxgtrVDA` |
| Create Event Destination | POST | `/v2/event-destinations` | `conn_mod_def::GKYl1-3RyOc::tC_O-yYkSYWgWCnk3d9g5Q` |
| Delete an Event Destination | DELETE | `/event-destinations/{{destinationId}}` | `conn_mod_def::GKYl118HXp0::dC_MzTvYTTGhhgdOh5cYsw` |
| Update an Event Destination | PATCH | `/event-destinations/{{destinationId}}` | `conn_mod_def::GKYl2HSZlgA::3_hAIqS6QYaxMobioLT4Ww` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources | GET | `/v2/sources` | `conn_mod_def::GKYl2hFJbnw::NM4GBhklSlmryteFcyoRgQ` |
| Retrieve a Source | GET | `/sources/{{sourceId}}` | `conn_mod_def::GKYl2gsMqoo::FaxV8ymaTjWqHDXr5_iCiA` |
| Create a Source | POST | `/sources` | `conn_mod_def::GKYl2YjkFLA::9Ef0nYSrTeuKHwtIukFWLA` |
| Delete a Source | DELETE | `/sources/{{sourceId}}` | `conn_mod_def::GKYl2Q5Krsk::ugp-uY0bTqOVRxwlRs6pHg` |
| Update a Source | PATCH | `/sources/{{sourceId}}` | `conn_mod_def::GKYl2hExrPg::Z3NHU_bASxGzMTaKc75nag` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/sessions` | `conn_mod_def::GKYl2P-dAIA::lkINDWBKQeadc6Oo-AB98Q` |
| Retrieve a Session | GET | `/sessions/{{sessionId}}` | `conn_mod_def::GKYl2VRXhc4::QtU39UVXTd6oA0oO4B8p9Q` |
| End a Session | POST | `/sessions/{{sessionId}}/end` | `conn_mod_def::GKYl2G_3mi8::I_JL7RoYTP-RC3J8PcCcrA` |
| Start a Session | POST | `/v2/sessions` | `conn_mod_def::GKYl2QHT0EY::8B05oxm3TKWi5bjCCGq3EQ` |

### TaskRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Runs | GET | `/task-runs` | `conn_mod_def::GKYl2rygCoU::v4fhaEs4Rve1vcOCwAodZQ` |
| Retrieve a Task Run | GET | `/task-runs/{{runId}}` | `conn_mod_def::GKYl2pcG-so::EesLEy68Tn2KBp83FxMpeA` |
| Cancel a Task Run | POST | `/task-runs/{{runId}}/cancel` | `conn_mod_def::GKYl2gqitkQ::O_g4WrzbT0OCWBXB7KflNA` |
| Submit Interaction Input for a Task Run | POST | `/task-runs/{{runId}}/interaction` | `conn_mod_def::GKYl2rljmLw::QaxzJyuJRF-5zIkAtpJtAA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/v2/events` | `conn_mod_def::GKYl2HpRF84::SGHZ0PgUSGCSnWYT656u3g` |
| Retrieve an Event | GET | `/events/{{eventId}}` | `conn_mod_def::GKYl2G8gO_Y::JmEQ4RbCR-WZ_nI9F0UCPw` |

### EventDeliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Event Destination's Event Deliveries | GET | `/event-destinations/{{destinationId}}/event-deliveries` | `conn_mod_def::GKYl13a9d5E::tCmWfUKdQaC_DKDXOOE5Qw` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Types | GET | `/event-types` | `conn_mod_def::GKYl2G90bbI::99ZMKo2eQ6eREaZ_xtiJTA` |

### Storage

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Storage Item | GET | `/storage/{{storageId}}` | `conn_mod_def::GKYl2g8BlfU::kiINOKMoRfiRStK37yDcFg` |

### TaskRunsStorageItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Task Run's Storage Items | GET | `/task-runs/{{runId}}/storage` | `conn_mod_def::GKYl2qEqm9Y::YxXQiE_dTTyngcoHQx7D9g` |

### TestApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Test API Key | GET | `/test` | `conn_mod_def::GKYl2_4VIPc::o6x1Ic2NRaGhhnLc-rliwQ` |

## When a call fails

The error comes from Deck.co, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/deck-co

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
