---
name: gladia
description: Gladia is an AI audio processing platform that provides APIs for speech-to-text transcription, speaker diarization, translation, and audio intelligence, allowing developers to build voice-enabled applications, analyze conversations, and automate workflows using spoken content. Read and write Gladia data through One: prerecordedjobs, transcription, livejob, livejobs, models, transcriptionjobs and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in Gladia, create or update a record there, or build code against the Gladia API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gladia
  generated-from: one-knowledge-base
---

# Gladia through One

Gladia is an AI audio processing platform that provides APIs for speech-to-text transcription, speaker diarization, translation, and audio intelligence, allowing developers to build voice-enabled applications, analyze conversations, and automate workflows using spoken content.

One exposes Gladia through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gladia` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gladia is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gladia account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### PreRecordedJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Audio File for a Pre-recorded Job | GET | `/v2/pre-recorded/{{id}}/file` | `conn_mod_def::GMClzZ88wOI::61yL6K8sS0SapMspbAUUhg` |
| Get a Pre Recorded Job's Metadata | GET | `/v2/pre-recorded/{{id}}` | `conn_mod_def::GMClzbjAZ3I::WfzecGJAQLikWcZO_N58RA` |
| Get Pre Recorded Jobs | GET | `/v2/pre-recorded` | `conn_mod_def::GMClzbnuw-g::0dQ_AyZNTGG3b-6xF10iFg` |
| Delete a Pre Recorded Job | DELETE | `/v2/pre-recorded/{{id}}` | `conn_mod_def::GMClzMmpAC4::AKeUTlFcRWudCVqRP06GMA` |
| Initiate a Pre Recorded Job | POST | `/v2/pre-recorded` | `conn_mod_def::GMClzZ2KpGE::gEyNseKET-qolcdvwW-ZHA` |

### Transcription

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Audio File for a Transcription Job | GET | `/v2/transcription/{{id}}/file` | `conn_mod_def::GMCl0YfOFZA::qVL_7TY5TnOuIejjODs8IQ` |
| Get Transcription Metadata | GET | `/v2/transcription/{{id}}` | `conn_mod_def::GMClzjzQiF4::uy-Z4rkFS5iArJtxAs8l7g` |
| Delete a Transcription Job | DELETE | `/v2/transcription/{{id}}` | `conn_mod_def::GMClzaNPUIA::ACWpVZNuQ4G5NVJ_nT2tig` |
| Initiate Transcription | POST | `/v2/transcription` | `conn_mod_def::GMCl0aP9j2s::NnqzAuaLR92r-gpXJ_hFyQ` |

### LiveJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Live Job | DELETE | `/v2/live/{{id}}` | `conn_mod_def::GMClzBigi3Y::dHxqmE4rT0W7VJqF6ANo0Q` |
| Patch Request Params for a Live Job | PATCH | `/v2/live/{{id}}` | `conn_mod_def::GMClzC1LXRo::gX-Wd_C8RTGSGodc8eUyeA` |

### LiveJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Job Metadata | GET | `/v2/live/{{id}}` | `conn_mod_def::GMClzOmmPco::L0is32MKTJmaq79yC0FwCA` |
| Get Live Jobs | GET | `/v2/live` | `conn_mod_def::GMClzScGNK8::JBgEflmoT62D7lV8SDjQNw` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Transcription Models | GET | `/v1/models` | `conn_mod_def::GMClzMeFdiU::rz1t1gxrQ-mimHeR_7nq3A` |

### TranscriptionJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transcription Jobs | GET | `/v2/transcription` | `conn_mod_def::GMClzmYLoug::dK_xhrLDQei9Q8MJZlHy8g` |

### LiveJobAudioFile

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Live Job Audio File | GET | `/v2/live/{{id}}/file` | `conn_mod_def::GMClzBNzwjg::koXZJWGeT3-mzFjNG29psA` |

### UploadAudioForProcessing

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Audio for Processing | POST | `/v2/upload` | `conn_mod_def::GMClzC3nuks::OC_6I9yWT6OJxkhL0QT2xA` |

### History

| Action | Method | Path | Action id |
|---|---|---|---|
| Get History | GET | `/v1/history` | `conn_mod_def::GMClzGEwrJs::bMxQJzqxQkKImPxy27fEaw` |

### Live

| Action | Method | Path | Action id |
|---|---|---|---|
| Live Using v2 | POST | `/v2/live` | `conn_mod_def::GMClzPsCbFQ::8I4WaPZORs-nXuFUDJO1nA` |

## When a call fails

The error comes from Gladia, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gladia

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
