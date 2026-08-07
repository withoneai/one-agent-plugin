---
name: fireflies-ai
description: Fireflies.ai is an AI meeting assistant that transcribes, summarizes, and analyzes conversations across video conferencing platforms to improve productivity and collaboration. Read and write Fireflies.ai data through One: transcripts, askfredthreads, bites, users, meetings, channels and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in Fireflies.ai, create or update a record there, or build code against the Fireflies.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fireflies-ai
  generated-from: one-knowledge-base
---

# Fireflies.ai through One

Fireflies.ai is an AI meeting assistant that transcribes, summarizes, and analyzes conversations across video conferencing platforms to improve productivity and collaboration.

One exposes Fireflies.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fireflies-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fireflies.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fireflies.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transcripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Transcript | POST | `/graphql` | `conn_mod_def::GJ2dl5XkN84::abEJXBR-Q-mGQKAu13BRlA` |
| Get a Transcript (GraphQL Query) | POST | `/graphql` | `conn_mod_def::GJ2dojNQ_r8::YdU2JPnDQ0GdgV79q7sjYw` |
| List Transcripts | POST | `/graphql` | `conn_mod_def::GJ2doqTanVs::ZUcO8uY9QnqXFQ9jKq8dRA` |
| Update a Meeting Transcript’s Privacy | POST | `/graphql` | `conn_mod_def::GJ2dmfdPTi8::AIirOV08RPCLBHpteNlGvQ` |
| Update Meeting Title | POST | `/graphql` | `conn_mod_def::GJ2dmviHeXU::AFaXpJyVTjqcx7r756Kp7g` |

### AskFredThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Continue an AskFred Conversation Thread | POST | `/graphql` | `conn_mod_def::GJ2dlBtC454::_EXHHoV9Q4a2PWTGiX_CjA` |
| Create an AskFred Thread | POST | `/graphql` | `conn_mod_def::GJ2dlI6b0Rc::f2PgqDAaQwOz31mvpA1uNA` |
| Delete an AskFred Thread | POST | `/graphql` | `conn_mod_def::GJ2dlx6D29k::aMczkyIxSuCo8dMBMkJm9A` |

### Bites

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bite | POST | `/graphql` | `conn_mod_def::GJ2dlRY2lk8::UZTWSURwS0CQChROgHHnnw` |
| Get a Bite | POST | `/graphql` | `conn_mod_def::GJ2dnl5cyL0::J0luyfe6SCqjnVJUwym5sA` |
| List Bites | POST | `/graphql` | `conn_mod_def::GJ2dntR6zbg::t90Me0qPQuuiyy3lCUvyKA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User (GraphQL Query) | POST | `/graphql` | `conn_mod_def::GJ2doyCy9IQ::zLeFLdbjRRWqOJKwRzn0Eg` |
| Get Current User (users Query) | POST | `/graphql` | `conn_mod_def::GJ2dpB3hq1U::pCsVaFA2TziyAreKwra7uA` |
| Set a User’s Role | POST | `/graphql` | `conn_mod_def::GJ2dmJIoddk::3MwDW5a0S7O7dRTkyGzi8A` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Share a Meeting | POST | `/graphql` | `conn_mod_def::GJ2dmQRRsik::UDbd9DLTRde1SCzrLcH4yw` |
| Update a Meeting’s Channel | POST | `/graphql` | `conn_mod_def::GJ2dmXiwsi0::0--Zny8ZTDOQBlTEJvqJTw` |
| Update a Meeting’s Recording State (Pause/Resume) | POST | `/graphql` | `conn_mod_def::GJ2dmnMgh7E::YFNaWQLkSPKtv_oEX2OOLQ` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel | POST | `/graphql` | `conn_mod_def::GJ2dn0TUhSE::PumtV8P8QTKOxcW3ejLnNw` |
| Get Channels | POST | `/graphql` | `conn_mod_def::GJ2doBlLuAg::33b0iDouSMy80VBZss2erw` |

### LiveActionItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Live Action Item | POST | `/graphql` | `conn_mod_def::GJ2dlYtNvF4::cyeU4jedRKaIdYNJJsT-JA` |
| Get Live Action Items for a Meeting | POST | `/graphql` | `conn_mod_def::GJ2doP9gH4Y::utQMWgqfSTqCZbxWvICC4g` |

### LiveMeetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Add to Live Meeting | POST | `/graphql` | `conn_mod_def::GJ2dkyZx-FU::PVkLrs5sRsqzcR9PmDBDtw` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Confirm an Upload | POST | `/graphql` | `conn_mod_def::GJ2dk5oct1g::m54nzUsLRPGDRuFYkXdwgA` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team & User Analytics | POST | `/graphql` | `conn_mod_def::GJ2dnFLmu08::QYPSKhkESa2ob9vvp786QQ` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Apps | POST | `/graphql` | `conn_mod_def::GJ2dnNmrvH4::vsF6rMbBTDa8snzj0mNtZw` |

### AskfredThread

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an AskFred Thread | POST | `/graphql` | `conn_mod_def::GJ2dnVOBSAo::3XiVgHFPQwWbhbQvK3zg4A` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contacts (GraphQL Query) | POST | `/graphql` | `conn_mod_def::GJ2doJWxZLk::3mOGjvjnRFOjBpz-I2XYHA` |

### RuleExecutionsByMeeting

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rule Executions Grouped by Meeting | POST | `/graphql` | `conn_mod_def::GJ2doYRPil8::gJTRsnNESguB_tmrnDMPpA` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Groups | POST | `/graphql` | `conn_mod_def::GJ2do6HAmdQ::9FWeTYN8Sw6r501uxs_04A` |

### AskfredThreadSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User's AskFred Thread Summaries | POST | `/graphql` | `conn_mod_def::GJ2dneOZfcY::-8LuJre_Tvy7Ch8yzHGf9g` |

### LiveSoundbites

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Live Soundbite for Meeting | POST | `/graphql` | `conn_mod_def::GJ2dljBLvkY::_FHPu3E2TUuo1o-Y1HcCMQ` |

### UploadUrls

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Upload URL | POST | `/graphql` | `conn_mod_def::GJ2dlqXas64::DJ3xRELsQLq7LkWEa0YL9A` |

### SharedMeetingAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke Shared Meeting Access | POST | `/graphql` | `conn_mod_def::GJ2dmBML4_Q::mZ-bArIsTFKSToiyyC8riQ` |

### AudioUploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Audio | POST | `/graphql` | `conn_mod_def::GJ2dm16KGd0::OXL9y8j4SZKjaURYaRxAFg` |

### ActiveMeetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Meetings | POST | `/graphql` | `conn_mod_def::GJ2dm8i0xFY::vTLbh4v0SHCQkXjVgLGqiA` |

## When a call fails

The error comes from Fireflies.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fireflies-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
