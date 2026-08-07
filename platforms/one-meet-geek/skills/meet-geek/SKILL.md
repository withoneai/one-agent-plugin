---
name: meet-geek
description: MeetGeek is an AI-powered meeting assistant that records, transcribes, and summarizes meetings, helping teams stay aligned, follow up on action items, and boost productivity. Read and write MeetGeek data through One: meetings, meetinghighlights, uploads, meetingtranscripts, teams, bot and more, 12 actions with real parameter documentation. Use whenever the user asks to look something up in MeetGeek, create or update a record there, or build code against the MeetGeek API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: meet-geek
  generated-from: one-knowledge-base
---

# MeetGeek through One

MeetGeek is an AI-powered meeting assistant that records, transcribes, and summarizes meetings, helping teams stay aligned, follow up on action items, and boost productivity.

One exposes MeetGeek through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `meet-geek` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm MeetGeek is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real MeetGeek account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Meetings (Paginated) | GET | `/v1/teams/{{teamId}}/meetings` | `conn_mod_def::GJ46Xn652Po::zfAmn3RmRiGLbYCd2sYgSA` |
| List a User's Meetings (Paginated) | GET | `/v1/meetings` | `conn_mod_def::GJ46Xtbaj0w::Ce5gdovpTWGRdqGgxupgpg` |
| Retrieve a Meeting | GET | `/v1/meetings/{{meetingId}}` | `conn_mod_def::GJ46Xr_uHpI::x_yY0r1mSr-cDQ06srQY4Q` |
| Retrieve a Meeting’s Summary | GET | `/v1/meetings/{{meetingId}}/summary` | `conn_mod_def::GJ46XrjyjeU::6fb7jMCEQ3e_atraWYoLrw` |
| Delete a Meeting | DELETE | `/v1/meetings/{{meetingId}}` | `conn_mod_def::GJ46Xm3lxsQ::RhC_hxGoR-e0yKRJMvbccw` |
| Generate a Meeting Recording Download Link | POST | `/v1/meetings/{{meetingId}}/download` | `conn_mod_def::GJ46Xcsrw8g::CzZZyvYUQ9q-qU6x7q9FFA` |

### MeetingHighlights

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Meeting’s Highlights | GET | `/v1/meetings/{{meetingId}}/highlights` | `conn_mod_def::GJ46XeMGhc4::6MFptFsIR22cTPiXzWDJ3g` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Recording for Analysis | POST | `/v1/upload` | `conn_mod_def::GJ46X5CK3hA::aoIvzphKTSStrzIB7uMVbQ` |

### MeetingTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Meeting’s Transcript | GET | `/v1/meetings/{{meetingId}}/transcript` | `conn_mod_def::GJ46X7dh6eg::2Ax7v7w5T3qlWbXFI2CF2w` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Teams | GET | `/v1/teams` | `conn_mod_def::GJ46XbuNT5k::4EvkmFS6TVeqpfkzEmoNZA` |

### Bot

| Action | Method | Path | Action id |
|---|---|---|---|
| Notify MeetGeek Bot to Join a Meeting | POST | `/v1/bot/join` | `conn_mod_def::GJ46XfnAL94::dIoMEHn1TfiRRbF4u7liag` |

### MeetingInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Meeting’s Insights | GET | `/v1/meetings/{{meetingId}}/insights` | `conn_mod_def::GJ46XckJDzo::7zgJSoHuSzarKGkqhRCAtQ` |

## When a call fails

The error comes from MeetGeek, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/meet-geek

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
