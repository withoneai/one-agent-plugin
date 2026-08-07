---
name: google-meet
description: Google Meet is a video conferencing platform that provides browser-based meetings, screen sharing, recording, and real-time collaboration features, allowing teams and developers to integrate scheduling, joining, and meeting workflows into communication and productivity systems. Read and write Google Meet data through One: participantsessions, spaces, participants, conferencerecord, conferencerecordparticipants, conferencerecords and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Google Meet, create or update a record there, or build code against the Google Meet API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-meet
  generated-from: one-knowledge-base
---

# Google Meet through One

Google Meet is a video conferencing platform that provides browser-based meetings, screen sharing, recording, and real-time collaboration features, allowing teams and developers to integrate scheduling, joining, and meeting workflows into communication and productivity systems.

One exposes Google Meet through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-meet` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Meet is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Meet account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ParticipantSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Participant Session for a Conference Record Participant | GET | `/v2/conferenceRecords/{{conferenceRecord}}/participants/{{participant}}/participantSessions/{{participantSession}}` | `conn_mod_def::GL3WnCOvZDM::UJ8E6UCIQ2OS3iUIwieD0Q` |
| List Participant Sessions Using Conference Records Participants | GET | `/v2/conferenceRecords/{{conferenceRecord}}/participants/{{participant}}/participantSessions` | `conn_mod_def::GL3WnRSKYPo::OVAXG3smT7qCzN78O0Ff9w` |

### Spaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Space | POST | `/v2/spaces` | `conn_mod_def::GL3WnYveFB8::UjDgCkajSlSRqRvao2PmZg` |
| End Active Conference for a Space | POST | `/v2/spaces/{{space}}:endActiveConference` | `conn_mod_def::GL3WnotGbYs::CiheP5JZTCSMp5Uy2fc8NA` |

### Participants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Participants in a Conference Record | GET | `/v2/conferenceRecords/{{conferenceRecord}}/participants` | `conn_mod_def::GL3Wm_pI1YU::EMr-9pqGQ_GO6W2QQy1Y0A` |

### ConferenceRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conference Record | GET | `/v2/conferenceRecords/{{conferenceRecord}}` | `conn_mod_def::GL3Wm_27u_Q::0DKmz6BPQJq7G-bmq0_2QA` |

### ConferenceRecordParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conference Record Participant | GET | `/v2/conferenceRecords/{{conferenceRecord}}/participants/{{participant}}` | `conn_mod_def::GL3WnA0-rjA::uI5tpmW_QFijjSW-4qzU4A` |

### ConferenceRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conference Records | GET | `/v2/conferenceRecords` | `conn_mod_def::GL3WnBqha20::GwQuZjaqSMWu3KSQZg6ZSg` |

### ConferenceRecordRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conference Record Recording | GET | `/v2/conferenceRecords/{{conferenceRecord}}/recordings/{{recording}}` | `conn_mod_def::GL3WnINeyhQ::fc1qNqjdSeS8Xb0Ghp-o4A` |

### Recordings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recordings for a Conference Record | GET | `/v2/conferenceRecords/{{conferenceRecord}}/recordings` | `conn_mod_def::GL3WnJHrb1k::BsVYpnFYSWe-ZTrBEzN9ug` |

### SmartNote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conference Record Smart Note | GET | `/v2/conferenceRecords/{{conferenceRecord}}/smartNotes/{{smartNote}}` | `conn_mod_def::GL3WnJTb8YA::ninpwxzPQJGMAa9L5zUGDA` |

### SmartNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Smart Notes for a Conference Record | GET | `/v2/conferenceRecords/{{conferenceRecord}}/smartNotes` | `conn_mod_def::GL3WnKLiqJU::2FP1FflsQDyhBE-_hThB4w` |

### TranscriptEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transcript Entry for a Conference Record Transcript | GET | `/v2/conferenceRecords/{{conferenceRecord}}/transcripts/{{transcript}}/entries/{{entry}}` | `conn_mod_def::GL3WnYt_UEk::6wr8RV3gQpi_P0uBmblGuA` |

### ConferenceRecordTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conference Record Transcript | GET | `/v2/conferenceRecords/{{conferenceRecord}}/transcripts/{{transcript}}` | `conn_mod_def::GL3WnZS-UAk::t9F1we0CSgeH8WNmDo8tXg` |

### TranscriptEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transcript Entries for a Conference Record Transcript | GET | `/v2/conferenceRecords/{{conferenceRecord}}/transcripts/{{transcript}}/entries` | `conn_mod_def::GL3WnZZjkjI::Ocg-EAQeTcKCx97IMiTyTw` |

### Transcripts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transcripts for a Conference Record | GET | `/v2/conferenceRecords/{{conferenceRecord}}/transcripts` | `conn_mod_def::GL3Wnah9N9I::WKCL4iIFQIesLT9tNY7P9Q` |

### MeetingSpace

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting Space | GET | `/v2/spaces/{{space}}` | `conn_mod_def::GL3WnhjXpEQ::H_QFG5DnRSy82CoEDBkuAw` |

### MeetingSpaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Meeting Space | PATCH | `/v2/spaces/{{space}}` | `conn_mod_def::GL3Wnhz_Olw::y3E-9PJnSAS7g8VWTRVTYw` |

## When a call fails

The error comes from Google Meet, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-meet

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
