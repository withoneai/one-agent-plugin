---
name: open-phone
description: OpenPhone is a modern business phone system that unifies VoIP calls, SMS messaging, shared numbers, and AI-powered contact management into an intuitive, cross-platform app—streamlining communication for teams and small businesses. Read and write OpenPhone data through One: contacts, webhooks, messages, calls, users, phonenumbers and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in OpenPhone, create or update a record there, or build code against the OpenPhone API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: open-phone
  generated-from: one-knowledge-base
---

# OpenPhone through One

OpenPhone is a modern business phone system that unifies VoIP calls, SMS messaging, shared numbers, and AI-powered contact management into an intuitive, cross-platform app—streamlining communication for teams and small businesses.

One exposes OpenPhone through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `open-phone` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenPhone is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenPhone account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/v1/contacts/{{id}}` | `conn_mod_def::GJ56pIdllv0::pkGtjKXkSxCfVhh92bRihQ` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ56pUMGu4k::-07auMgORqiBhNv-fDGzXA` |
| Create a Contact (Workspace) | POST | `/contacts` | `conn_mod_def::GJ56pI-gYEQ::RgRHSLhdQDiS9eaHB0GX-w` |
| Delete a Contact | DELETE | `/v1/contacts/{{id}}` | `conn_mod_def::GJ56pIk_ww0::Ox_NaHQ2SxmxIPk6Z7Ka2w` |
| Update a Contact by ID | PATCH | `/v1/contacts/{{id}}` | `conn_mod_def::GJ56pT78s-4::sqLHjI6_QI-t-Tu8mg72uw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/v1/webhooks/{{id}}` | `conn_mod_def::GJ56pvjFO4s::iX_fMAKITLyKV3wTaXzx1g` |
| List Webhooks (for a User) | GET | `/v1/webhooks` | `conn_mod_def::GJ56pvV-uQA::GIKIVohsQz2EZ9gyOoa1fg` |
| Create a Call Summary Webhook | POST | `/webhooks/call-summaries` | `conn_mod_def::GJ56pnuYZWA::oESWSijQRuaLusj18Vy8Ag` |
| Delete a Webhook by ID | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GJ56pnHo2yc::uGPYOolCSn29MnKC6FdfOQ` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message by ID | GET | `/v1/messages/{{id}}` | `conn_mod_def::GJ56pTCXRaY::gJyae3GJTUOm9xU0EUziJA` |
| List Messages | GET | `/v1/messages` | `conn_mod_def::GJ56pUpvFag::k7EKMu7ASMuJiH-FwF65vw` |
| Send a Text Message | POST | `/v1/messages` | `conn_mod_def::GJ56pfWH9t4::GhmE60QEQGa7biRqmLN2CQ` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call by ID | GET | `/v1/calls/{{callId}}` | `conn_mod_def::GJ56pBh_BYI::-2pBOLgbQT2O8ZvVsLkm3g` |
| List Calls | GET | `/v1/calls` | `conn_mod_def::GJ56pLYyx9E::IM5VE_87RtiY5oOrNgniBA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/v1/users/{{userId}}` | `conn_mod_def::GJ56pdwCqJ0::VC7a-QPQRuSAW8MdwqbY1w` |
| List Users | GET | `/users` | `conn_mod_def::GJ56pdlrV5o::c9DkKg4WR-KJ6s5y3wbrvg` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number by ID | GET | `/v1/phone-numbers/{{phoneNumberId}}` | `conn_mod_def::GJ56pdoeVic::jIYFXsb-SPO5PYqXnQqgQQ` |
| List Phone Numbers (Workspace) | GET | `/v1/phone-numbers` | `conn_mod_def::GJ56pfSUSJc::2FZABVYbTYq4sh1byFE2FQ` |

### CallSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call Summary | GET | `/v1/call-summaries/{{callId}}` | `conn_mod_def::GJ56pBK1PYk::cX_1hN-YQiGDQF2OHKv7iA` |

### CallVoicemails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call’s Voicemail | GET | `/call-voicemails/{{callId}}` | `conn_mod_def::GJ56pB4GKKc::ovpZsbOBRgWw8ldJFbhGHA` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conversations | GET | `/v1/conversations` | `conn_mod_def::GJ56pV_xUUU::Hr7Wgn5QRvaEsCr2dYxWHA` |

### CallWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Call Webhook | POST | `/v1/webhooks/calls` | `conn_mod_def::GJ56pmpEQVU::Vk6UqHyYSqSmJDSxXvp6DQ` |

### CallTranscriptWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Call Transcript Webhook | POST | `/v1/webhooks/call-transcripts` | `conn_mod_def::GJ56pnAIwBM::sl6mvC8ZQESAbXla-jacmA` |

### WebhooksMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Messages Webhook | POST | `/v1/webhooks/messages` | `conn_mod_def::GJ56pnMvb3U::bg-OcGAwSg2-b2GpMx8oIA` |

### CallRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Call’s Recordings | GET | `/v1/call-recordings/{{callId}}` | `conn_mod_def::GJ56pBhF5MY::_dcneQFvRsKaANvb9UrFVQ` |

### CallTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call Transcript | GET | `/v1/call-transcripts/{{id}}` | `conn_mod_def::GJ56pBvOWTY::AwOjZZN_S5ye7hamAouqmA` |

### ContactCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Custom Fields | GET | `/v1/contact-custom-fields` | `conn_mod_def::GJ56pIlFmjU::yHDMQI-cTlOFeBs-yFCPpg` |

## When a call fails

The error comes from OpenPhone, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/open-phone

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
