---
name: browserbase
description: Browserbase is a cloud platform that lets developers run headless browsers at scale, enabling tasks like web automation, scraping, testing, and rendering with high performance and reliability. Read and write Browserbase data through One: sessions, contexts, extensions, projects, fetch, sessionlogs and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Browserbase, create or update a record there, or build code against the Browserbase API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: browserbase
  generated-from: one-knowledge-base
---

# Browserbase through One

Browserbase is a cloud platform that lets developers run headless browsers at scale, enabling tasks like web automation, scraping, testing, and rendering with high performance and reliability.

One exposes Browserbase through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `browserbase` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Browserbase is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Browserbase account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session | GET | `/sessions/{{id}}` | `conn_mod_def::GJ0_piqLxlk::jqZ7EmP2SuSRcbtjpdZx0w` |
| Get a Session’s Live Debug URLs | GET | `/sessions/{{id}}/debug` | `conn_mod_def::GJ0_qQXWYGM::V9t6f1XnTqeMmzNFFD0MGw` |
| Get a Session’s Recording | GET | `/sessions/{{id}}/recording` | `conn_mod_def::GJ0_qeK62MY::oE-BfAWzS8iRh_BKNfEKBw` |
| List a Session's Downloads | GET | `/sessions/{{id}}/downloads` | `conn_mod_def::GJ0_qIiK6ls::ZIQ8JzWkTxGnNvFhs1Wx_A` |
| List Sessions | GET | `/sessions` | `conn_mod_def::GJ0_p_YjSXE::A8bFfN90R0i4Q5JIWyhlmg` |
| Create a Session | POST | `/sessions` | `conn_mod_def::GJ0_opu8qzs::qTdQqEyWRieVTf6Hj9ZZMQ` |
| Delete a Session’s Downloads | DELETE | `/sessions/{{id}}/downloads` | `conn_mod_def::GJ0_pGA_-J8::xuvVJsB3S2O5NmNt4KbhdQ` |
| Update a Session | POST | `/sessions/{{id}}` | `conn_mod_def::GJ0_qsWWHMA::1EDSTBsMRpm6liovDvv38w` |

### Contexts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Context | GET | `/contexts/{{id}}` | `conn_mod_def::GJ0_pUMTH-k::hUixEthiT2it0NG1td6FWw` |
| Create a Context | POST | `/contexts` | `conn_mod_def::GJ0_oiaMjf8::89vYHiU_RcygCkoNBWon2g` |
| Delete a Context | DELETE | `/contexts/{{id}}` | `conn_mod_def::GJ0_o355xNk::fR6KvUvtQfKCvdyOfesYWQ` |
| Update a Context | PUT | `/contexts/{{id}}` | `conn_mod_def::GJ0_qk5--B4::jvxOjZ6wTwabo75wna4BoQ` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Extension | GET | `/extensions/{{id}}` | `conn_mod_def::GJ0_pp3yW4w::a2Ogj2W_Tk6H2Oh47zI5Aw` |
| Delete an Extension | DELETE | `/extensions/{{id}}` | `conn_mod_def::GJ0_o-sVYiY::e-D-q-bCT1WQ6DjF6IYalA` |
| Upload an Extension | POST | `/extensions` | `conn_mod_def::GJ0_qzWSXIU::yU_whnigQbiBZw3orwVqVw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/projects/{{id}}` | `conn_mod_def::GJ0_pba0ZCI::j73jnMQjS7-UEj_SX7Jvug` |
| List Projects | GET | `/projects` | `conn_mod_def::GJ0_p3rN2bI::xYopuCRFR2aLh3q1bkxV9g` |

### Fetch

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Page | POST | `/v1/fetch` | `conn_mod_def::GJ0_pNaej7g::rw2PsuzLSP-yN3lCeE-I1g` |

### SessionLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Session’s Logs | GET | `/sessions/{{id}}/logs` | `conn_mod_def::GJ0_qXP9Ym0::AtgQqD3dQK2DF6j3qaUq8w` |

### ProjectUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Usage | GET | `/projects/{{id}}/usage` | `conn_mod_def::GJ0_pwjkKQA::zH5WO9FJSZelIalBuxPpog` |

### SessionUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Session Uploads (Upload a File to a Session) | POST | `/sessions/{{id}}/uploads` | `conn_mod_def::GJ0_oxPW9AI::TLocVCuxQvaNR-6Su7lwMw` |

## When a call fails

The error comes from Browserbase, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/browserbase

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
