---
name: mem-ai
description: Mem is an AI-powered workspace focused on organizing team information and notes, helping users capture and structure knowledge in a shared environment for easier retrieval and collaboration. Read and write Mem data through One: notes, collections, sessions, calendarconnections, mems, attachments and more, 64 actions with real parameter documentation. Use whenever the user asks to look something up in Mem, create or update a record there, or build code against the Mem API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mem-ai
  generated-from: one-knowledge-base
---

# Mem through One

Mem is an AI-powered workspace focused on organizing team information and notes, helping users capture and structure knowledge in a shared environment for easier retrieval and collaboration.

One exposes Mem through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mem-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mem is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mem account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Related Notes for a Note | GET | `/v2/notes/{{noteId}}/related-notes` | `conn_mod_def::GMiGBWqTikY::d4qSyuEDRVSmHgXIdGc9YA` |
| List Notes | GET | `/v2/notes` | `conn_mod_def::GMiGB479XdY::vD5eAhsvT9SXaFujFN9IVA` |
| Read a Note | GET | `/v2/notes/{{noteId}}` | `conn_mod_def::GMiGCHOdEho::Y0puns27QR2uTFxdqL3zWg` |
| View Note | GET | `/v2/mcp/notes/{{noteId}}` | `conn_mod_def::GMiGCoSP8Lk::DGDHZwkJQ9GQkVUCFmBCBQ` |
| Create a Note | POST | `/v2/notes` | `conn_mod_def::GMiGBM3dUBQ::eiwXqlK9S7qtLQxB19t_zQ` |
| Create Note | POST | `/v1/notes` | `conn_mod_def::GMiGBFLfMv4::mfI5uS-XTkO7BNybeSfZmA` |
| Delete a Note | DELETE | `/v1/notes/{{noteId}}` | `conn_mod_def::GMiGBPoa5ck::toVUvzNVT8SXbaFyfJAHmw` |
| Delete Note | DELETE | `/v2/notes/{{noteId}}` | `conn_mod_def::GMiGBM_gT3M::nImWtHDlQaeQqmTXJ9z1gg` |
| Extended Search Notes | POST | `/v2/notes/extended-search` | `conn_mod_def::GMiGBWYmVtI::ZhQSJspuTsumAyJir5_txQ` |
| Restore Note | POST | `/v2/notes/{{noteId}}/restore` | `conn_mod_def::GMiGCPRLAb0::M6ru8fv8TcCmHqSiSNZ_hQ` |
| Search Notes | POST | `/v2/mcp/notes/search` | `conn_mod_def::GMiGCWa4XUU::EZ6SdwrgSPqFAb_rs_lTXQ` |
| Search Notes | POST | `/v2/notes/search` | `conn_mod_def::GMiGCXoJmj4::qii2yab8R7yP0sytwlsm8g` |

3 more Notes actions are available through search.

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collections | GET | `/v2/collections` | `conn_mod_def::GMiGBvfzIUc::0FktemnqSmmcQRHFBBLbfw` |
| Read a Collection | GET | `/v2/collections/{{collectionId}}` | `conn_mod_def::GMiGCG0xKgo::DZ_Tne3TRkiG9iHG8-lpZw` |
| Add Note to Collection | PUT | `/v2/collections/{{collectionId}}/notes/{{noteId}}` | `conn_mod_def::GMiGA-gIp20::9rWh65S3R5KpHZpPdqfwFg` |
| Create a Collection | POST | `/v2/collections` | `conn_mod_def::GMiGBG0wAV8::-i80GoFHRgOE-Jea4dIQlQ` |
| Delete a Collection | DELETE | `/v2/collections/{{collectionId}}` | `conn_mod_def::GMiGBMfTDKk::YbX-wcPpQqmXi57DvwocMg` |
| Move a Note Between Collections | POST | `/v2/collections/{{sourceCollectionId}}/notes/{{noteId}}/move` | `conn_mod_def::GMiGB_ilCzA::wFpP9vTvQNSUwtTOzoePRA` |
| Remove a Note From a Collection | DELETE | `/v2/collections/{{collectionId}}/notes/{{noteId}}` | `conn_mod_def::GMiGCOSH15U::GT0O16M4S0KI_SGYPwpViQ` |
| Search Collections | POST | `/v2/collections/search` | `conn_mod_def::GMiGCWEVy3g::NlZ_tWVdRVGYehGoVnUk5Q` |
| Update a Collection | PATCH | `/v2/collections/{{collectionId}}` | `conn_mod_def::GMiGCgoGM38::2-iM_GdET56JmKwHpwpRiA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a Session | GET | `/v2/sessions/{{sessionId}}` | `conn_mod_def::GMiGCNq-f84::NFsItgl-RQqNGOYVbYy7gQ` |
| Create a Session | POST | `/v2/sessions` | `conn_mod_def::GMiGBNatZTY::Nf2XzxaNQQiFE4CLp6_aWQ` |
| Delete Session | DELETE | `/v2/sessions/{{sessionId}}` | `conn_mod_def::GMiGBX-yyHs::Ct2VJkmFSQC5rsJI6gHYEg` |
| Update a Session | PATCH | `/v2/sessions/{{sessionId}}` | `conn_mod_def::GMiGCoSYRfs::QjOJu67RSqyd7nIm33b56w` |
| Upsert a Session | PUT | `/v2/sessions/{{sessionId}}` | `conn_mod_def::GMiGCrTCpPk::tDYzWDygSFyCEKDViZf4nQ` |

### CalendarConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Connections | GET | `/v2/calendar/connections` | `conn_mod_def::GMiGBimTPBo::CLPpgFp0RMmn3cav3QwpMg` |
| Calendar OAuth Callback | POST | `/v2/calendar/connections/{{provider}}/callback` | `conn_mod_def::GMiGBEad2aw::DpGJmBB-RLmXDewTlsMjsA` |
| Connect Calendar | POST | `/v2/calendar/connections/{{provider}}/connect` | `conn_mod_def::GMiGBFgFQdQ::6AUUnvyeRY-sZ4UNIRwakQ` |
| Disconnect Calendar | POST | `/v2/calendar/connections/{{provider}}/disconnect` | `conn_mod_def::GMiGBZ8zsnw::bv894dphQLi6V3B7D0M0RA` |

### Mems

| Action | Method | Path | Action id |
|---|---|---|---|
| Append a Mem | POST | `/v0/mems/{{memId}}/append` | `conn_mod_def::GMiGAsfiPLM::VajAJinkSmiZMGMjwdI7mg` |
| Batch Create Mems | POST | `/v0/mems/batch` | `conn_mod_def::GMiGAsXC5Mk::z0U6_2SNQTuecehZ2MspZw` |
| Create Mem | POST | `/v0/mems` | `conn_mod_def::GMiGBFdYLu4::PYw0QY8zSvmkoXdqxTH1nw` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer Question About an Attachment | POST | `/v2/attachments/answer-question` | `conn_mod_def::GMiGAwpbs6g::C8NkvB8ZRjSuL6qi7xNP6A` |
| Read Attachment | POST | `/v2/attachments/read` | `conn_mod_def::GMiGB_Xa5OY::VRZu2vHBSpiLUb6kaJT1DQ` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/v2/events` | `conn_mod_def::GMiGBs3PdIg::7SMwwnpPR8Gq-gMLK7e1Gg` |
| Read an Event | GET | `/v2/events/{{eventId}}` | `conn_mod_def::GMiGCGin8DU::IH4Tgs-_Qvus4XSy6OlpmA` |

### CalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Events | GET | `/v2/calendar/events` | `conn_mod_def::GMiGBtDe4kw::CQofSKcKRd6BI25qD_KoCQ` |
| Read a Calendar Event | GET | `/v2/calendar/events/{{eventId}}` | `conn_mod_def::GMiGB-lcYxc::g-pbZQc_QdO_8qPSkQDGkA` |

### MemIt

| Action | Method | Path | Action id |
|---|---|---|---|
| Mem It | POST | `/v1/mem-it` | `conn_mod_def::GMiGB1ScAis::7f3ZsNmuTIWFedv2k5qNag` |
| Mem It | POST | `/v2/mem-it` | `conn_mod_def::GMiGB_cyjCk::9_6SiH05ReSDusSZ23haPQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v2/projects` | `conn_mod_def::GMiGB2PrEj0::vG-x2OxyQU2BcWzZBrLxmw` |
| Read a Project | GET | `/v2/projects/{{projectId}}` | `conn_mod_def::GMiGCGGjUt4::HKOLHWaYTSypt0OqwYLD-w` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/v2/tasks` | `conn_mod_def::GMiGB2ooKPg::vT9JQEgTS6yfui4yaE8w7g` |
| Read a Task | GET | `/v2/tasks/{{taskId}}` | `conn_mod_def::GMiGCNfrehw::OWXnPbEpT2eKEYsqdwqwmQ` |

### FollowUps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Follow Ups | GET | `/v2/follow-ups` | `conn_mod_def::GMiGB2_se0s::6i3D7H2sQruQUW0nEXU8Fw` |
| Read a Follow-up | GET | `/v2/follow-ups/{{followUpId}}` | `conn_mod_def::GMiGCGGAXqI::EeKBhp_TRyGai5EwvWjMEA` |

### ServiceInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Service Info | GET | `/v1/service-info` | `conn_mod_def::GMiGAwliDY0::-2w80YKXQp-dGlyPVc_tWA` |

### McpChatGptResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Resources Using MCP ChatGPT | POST | `/v2/mcp/chatgpt/fetch` | `conn_mod_def::GMiGBWX5qSM::kwH6_sf7Rp6wCpLcb3j2-A` |

### NoteAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note Attachment Download URL | GET | `/v2/note-attachments/{{attachmentId}}/download-url` | `conn_mod_def::GMiGBfx8INY::xddlRKfASTSNlTSVoIIFfw` |

### PublicClientOpenapiJson

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Public Client Openapi Json | GET | `/schema/openapi.json` | `conn_mod_def::GMiGBgkTKjg::FymXUYy8TTOcP7QrimJGuw` |

### Mcp

| Action | Method | Path | Action id |
|---|---|---|---|
| Initialize MCP | POST | `/v2/mcp/initialize` | `conn_mod_def::GMiGBhk6eiY::5dHUkRyxReSVW4JeMqf3kQ` |

### PublicClientOpenApiYaml

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Public Client OpenAPI YAML | GET | `/schema/openapi.yaml` | `conn_mod_def::GMiGBmEIn8A::XVNhRJ9USnie_XDJyIjvGA` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendars | GET | `/v2/calendar/calendars` | `conn_mod_def::GMiGBt3Shqk::-9HcvQoxRHy0OY4vSKFIXQ` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Types | GET | `/v2/event-types` | `conn_mod_def::GMiGBt5Y1PE::HbMVOW7yRbSCfWoTiuN4gQ` |

### AudioRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| Read an Audio Recording | GET | `/v2/audio-recordings/{{audioRecordingId}}` | `conn_mod_def::GMiGB_JBKDI::qWo9pHxMSO6XmAGo0V50QA` |

### Calendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Reconcile Calendar | POST | `/v2/calendar/reconcile` | `conn_mod_def::GMiGCNwDJUg::TZRMCGKCRY2OIDnE8XjCmw` |

### Root

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Root | GET | `/v0` | `conn_mod_def::GMiGCVrTz3o::WpYT4_T1QUOuVZDF7gxw_A` |

### Resources

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Resources | POST | `/v2/mcp/chatgpt/search` | `conn_mod_def::GMiGCVycUv4::1U2ILfg1TGCSnnu9VnbE4Q` |

### CalendarSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Calendar Settings | POST | `/v2/calendar/calendars/settings` | `conn_mod_def::GMiGCeeJuio::M5tuaXW6RbidxsW0qTldoA` |

### SessionEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Session Events | POST | `/v2/session-events/search` | `conn_mod_def::GMiGCfgzlf0::R4Q5Sf5XQAy3ytFLnAT8FA` |

This lists 61 of 64 actions. For anything not here, call `search_one_platform_actions` with platform `mem-ai`. The full catalog is at https://www.withone.ai/knowledge/mem-ai.

## When a call fails

The error comes from Mem, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mem-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
