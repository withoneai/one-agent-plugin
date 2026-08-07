---
name: timelines-ai
description: TimelinesAI is a shared inbox and WhatsApp integration platform that centralizes team conversations, syncs messages with CRM systems, and provides automation capabilities, allowing sales and support teams to manage customer communication and workflows from a unified interface. Read and write Timelines.ai data through One: chats, messages, webhooks, files, workspaceteammates, workspaceinvitations and more, 33 actions with real parameter documentation. Use whenever the user asks to look something up in Timelines.ai, create or update a record there, or build code against the Timelines.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: timelines-ai
  generated-from: one-knowledge-base
---

# Timelines.ai through One

TimelinesAI is a shared inbox and WhatsApp integration platform that centralizes team conversations, syncs messages with CRM systems, and provides automation capabilities, allowing sales and support teams to manage customer communication and workflows from a unified interface.

One exposes Timelines.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `timelines-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Timelines.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Timelines.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details Of A Chat | GET | `/chats/{{chatId}}` | `conn_mod_def::GLMLOTGAzSA::q2G90M8HQ_-ATD_oF6KuOg` |
| Get Full Or Filtered List Of All Chats In The Workspace | GET | `/integrations/api/chats` | `conn_mod_def::GLMLOUpD2gA::BC6tvhCgSoaJeagXP3sQig` |
| Add A Note To Existing Chat | POST | `/chats/{{chatId}}/notes` | `conn_mod_def::GLMLN--7-7g::RcF_cILpSGGmN7zE747Z_g` |
| Adds Labels For The Chat | PUT | `/chats/{{chatId}}/labels` | `conn_mod_def::GLMLN90Br-A::C4OfOfhFQfuxXzJV3cTEHw` |
| Post Chats Chat Id Voice Message | POST | `/chats/{{chatId}}/voice_message` | `conn_mod_def::GLMLO1-_ANg::mIDEN9QLR-qi3w0KsfNDrQ` |
| Replaces Labels For The Chat | POST | `/integrations/api/chats/{{chatId}}/labels` | `conn_mod_def::GLMLO1_j0qA::0sPmBcobQEeP2lRlxLbxRg` |
| Send Message In Existing Chat | POST | `/chats/{{chatId}}/messages` | `conn_mod_def::GLMLO1kAOig::ydgBgOcTSueHHQ89LXOtgw` |
| Update Chat | PATCH | `/integrations/api/chats/{{chatId}}` | `conn_mod_def::GLMLPCXUrKA::_ojCofk9SIy8yHRzirF3Pg` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Details of a Message Specified by the Message's UID | GET | `/messages/{{messageUid}}` | `conn_mod_def::GLMLOf-88aA::3f2MQjrGQTyIUHdznNMRaA` |
| Get The Sending History Of A Message, Specified By The Message's UID | GET | `/messages/{{messageUid}}/status_history` | `conn_mod_def::GLMLOdnbX4A::LcJFLFb7QRusrgZ5ipzZXg` |
| Send Message In Existing Chat, Specified By Chat Name | POST | `/integrations/api/messages/to_chat_name` | `conn_mod_def::GLMLO11q9ug::ZyCptigRT7u4jxuMzkU0Yg` |
| Send Message To Jid | POST | `/integrations/api/messages/to_jid` | `conn_mod_def::GLMLPCOCEeA::-k3nlj6GTkCkkdlmy00eeg` |
| Send Message To Phone Number | POST | `/integrations/api/messages` | `conn_mod_def::GLMLPB8lwIg::qy-AY3FERsGlLgfXvdrqMA` |
| Update Reactions For A Message | PATCH | `/messages/{{messageUid}}/reactions` | `conn_mod_def::GLMLPEOyyuA::f74Xltx_QkezQ-oNUqNl2g` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook | GET | `/integrations/api/webhooks/{{webhookId}}` | `conn_mod_def::GLMLOjp86Bg::PjqhccZDRLaAnbGm906MXw` |
| List Webhooks | GET | `/integrations/api/webhooks` | `conn_mod_def::GLMLOsiZ8vg::hjk3KCYQQiu0I0IaEdHkWw` |
| Create Webhook | POST | `/integrations/api/webhooks` | `conn_mod_def::GLMLOAAKvgA::qjzxX4RoTombtXeql9L_sw` |
| Delete Webhook | DELETE | `/integrations/api/webhooks/{{webhookId}}` | `conn_mod_def::GLMLN9YRHxg::I61M_txATMqTuq68uLgmCA` |
| Update Webhook | PUT | `/integrations/api/webhooks/{{webhookId}}` | `conn_mod_def::GLMLPR6cFTA::IwjkYBUuQSKYsaPFVuxTGw` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details And Temporary Download URL For A Specified Uploaded File | GET | `/files/{{fileUid}}` | `conn_mod_def::GLMLOTOQQHg::9HqZIKsbQ0O0nsV_OQvUSQ` |
| List Files Uploaded In Your TimelinesAI Workspace | GET | `/integrations/api/files` | `conn_mod_def::GLMLOsi0rrg::g3XKEasETiiByyt8TJPqXQ` |
| Delete The Specified Uploaded File | DELETE | `/files/{{fileUid}}` | `conn_mod_def::GLMLOIunJPg::R4PKM2jHTHm5A_Nr90LqPA` |
| Upload A File In X-Form Encoded HTTP Request | POST | `/integrations/api/files_upload` | `conn_mod_def::GLMLPcAVCug::piYvhVtuRCqq1qN_JX-Z-w` |
| Upload A File Using A Publicly Accessible URL | POST | `/integrations/api/files` | `conn_mod_def::GLMLPayPpuA::myaB5DeaSyC2H7AUccgriA` |

### WorkspaceTeammates

| Action | Method | Path | Action id |
|---|---|---|---|
| Info About Current Teammate In The Workspace | GET | `/workspace/teammates/me` | `conn_mod_def::GLMLOdkJhNg::ueDnsUoNRPKU6GNi-4x8xg` |
| List All Teammates In The Workspace | GET | `/integrations/api/workspace/teammates` | `conn_mod_def::GLMLOtKTKBA::PaG47D08SeupD7QIzbWTCw` |

### WorkspaceInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Invite New Teammate To The Workspace | POST | `/integrations/api/workspace/invitations` | `conn_mod_def::GLMLOf-3MPg::d6g1jKzUQOKvbTi2dCZH8g` |
| Revoke A Pending Invitation | DELETE | `/workspace/invitations/{{userId}}` | `conn_mod_def::GLMLO1ZyEVA::rKdQN4aOSgOHXPNPswgetA` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Workspace Info And All Current Quotas And Utilization Stats | GET | `/integrations/api/workspace` | `conn_mod_def::GLMLPb2FJMA::Kq5O0iWlT2y8MQjqXfpXNQ` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Filtered Chat History Messages Only Of The Chat | GET | `/chats/{{chatId}}/messages` | `conn_mod_def::GLMLOUhMX2A::3eWK7irKRceLIJBiCdNixw` |

### MessageReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get The Current Reactions Map For A Message | GET | `/messages/{{messageUid}}/reactions` | `conn_mod_def::GLMLOTOMaBg::hvZvaWjQQrus3j9IzISCPQ` |

### ChatLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Labels For The Specified Chat | GET | `/chats/{{chatId}}/labels` | `conn_mod_def::GLMLOsiaWIg::e6hzrl3GSQmOmcwnMBg9zw` |

### WhatsappAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List WhatsApp Accounts Connected In Your TimelinesAI Workspace | GET | `/integrations/api/whatsapp_accounts` | `conn_mod_def::GLMLOslFkJA::bZMmx43sRFikkvUw2YAZnw` |

## When a call fails

The error comes from Timelines.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/timelines-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
