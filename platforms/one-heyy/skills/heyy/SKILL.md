---
name: heyy
description: Heyy is an AI-powered customer messaging platform that enables businesses to build “AI employees” to automate sales, support, and marketing conversations across channels like WhatsApp, Instagram, Messenger, and web chat, with workflows, lead qualification, and integrations managed from a unified interface. Read and write Heyy data through One: contacts, broadcasts, apiwebhooks, attributes, broadcastrecipients, labels and more, 37 actions with real parameter documentation. Use whenever the user asks to look something up in Heyy, create or update a record there, or build code against the Heyy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: heyy
  generated-from: one-knowledge-base
---

# Heyy through One

Heyy is an AI-powered customer messaging platform that enables businesses to build “AI employees” to automate sales, support, and marketing conversations across channels like WhatsApp, Instagram, Messenger, and web chat, with workflows, lead qualification, and integrations managed from a unified interface.

One exposes Heyy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `heyy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Heyy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Heyy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact By ID | GET | `/api/v2.0/contacts/{{contactId}}` | `conn_mod_def::GKgPHFQpWvA::7kTfwzR5Q52WlbzqiGFWXA` |
| List Contacts | GET | `/api/v2.0/contacts` | `conn_mod_def::GKgPHIENHZA::c7jBenjLR8qqEtRebbd73w` |
| Create Contact | POST | `/api/v2.0/contacts` | `conn_mod_def::GKgPGqf-aJg::fY2n7MjtQw6oanwCmbx9YQ` |
| Delete Contact | DELETE | `/api/v2.0/contacts/{{contactId}}` | `conn_mod_def::GKgPGzPgNTA::H0ldHeXKSVe7St1X4gYHLQ` |
| Remove a Contact Attribute | DELETE | `/api/v2.0/contacts/{{contactId}}/attributes` | `conn_mod_def::GKgPHRWSVyg::o8xln9CETKCgcw9_PS_Qkg` |
| Update Contact | PUT | `/api/v2.0/contacts/{{contactId}}` | `conn_mod_def::GKgPHqlOySg::--voyeOSSweIl4Dh91IyhA` |

### Broadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Broadcast by ID | GET | `/{{channelId}}/broadcasts/{{broadcastId}}` | `conn_mod_def::GKgPG8OUEJg::_XlPU8-aSKusQ_LwHwhh3w` |
| List a Channel's Broadcasts | GET | `/api/v2.0/{{channelId}}/broadcasts` | `conn_mod_def::GKgPG77Wvzg::c-iMEnt8S-KaF3miNkqRtQ` |
| Create a Channel Broadcast | POST | `/api/v2.0/{{channelId}}/broadcasts` | `conn_mod_def::GKgPGbwwt2g::GBRRf9_BSeK170uo15vZ1A` |
| Start a Channel Broadcast | POST | `/{{channelId}}/broadcasts/{{broadcastId}}/start` | `conn_mod_def::GKgPHauKRxg::-7eCW9VZSHqBNe8gPyCwLw` |
| Update a Channel Broadcast | PUT | `/{{channelId}}/broadcasts/{{broadcastId}}` | `conn_mod_def::GKgPHarmG8A::_PMA0THxQBGhXKskIrb-hA` |

### ApiWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Webhooks | GET | `/api/v2.0/api_webhooks` | `conn_mod_def::GKgPGzsF37g::zjpRoV86QBytO4QBQj831w` |
| Create API Webhook | POST | `/api/v2.0/api_webhooks` | `conn_mod_def::GKgPGiM03PA::6gb1aUqQQ7i2ZRg_yHBa0w` |
| Delete an API Webhook | DELETE | `/api/v2.0/api_webhooks/{{webhookId}}` | `conn_mod_def::GKgPGqiqNRA::H9jgAaBkQTqpmnoTJzA7tg` |
| Update an API Webhook | PUT | `/api/v2.0/api_webhooks/{{webhookId}}` | `conn_mod_def::GKgPHaTsSvA::TKFVwqJwTSqJZSySel91iA` |

### Attributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attributes | GET | `/api/v2.0/attributes` | `conn_mod_def::GKgPGze5lwA::KdpUheFnRWOgEttomLLICA` |
| Create Attribute | POST | `/api/v2.0/attributes` | `conn_mod_def::GKgPGdC_xyg::Fa1bDaGlQ46ViJmrn7jRcQ` |
| Delete Attribute | DELETE | `/api/v2.0/attributes/{{attributeId}}` | `conn_mod_def::GKgPGqR4geA::oFE59FHfQIW1T6UgHHhlZQ` |

### BroadcastRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Broadcast's Recipients | GET | `/{{channelId}}/broadcasts/{{broadcastId}}/recipients` | `conn_mod_def::GKgPG8iFbjA::k4lxzCvUSuukGsdsLgxGkQ` |
| Add Recipients to a Channel Broadcast | POST | `/api/v2.0/{{channelId}}/broadcasts/{{broadcastId}}/recipients` | `conn_mod_def::GKgPGbxv-rg::JU2NEpR1QqarJzG7Zeu60w` |
| Remove Recipients From a Channel Broadcast | DELETE | `/api/v2.0/{{channelId}}/broadcasts/{{broadcastId}}/recipients` | `conn_mod_def::GKgPHR650Ng::SzAfxrJ8Rcu4A3RYbylx5w` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Labels | GET | `/api/v2.0/labels` | `conn_mod_def::GKgPHQXLIBg::IU_gX6llTLG-k3lSTp8z4A` |
| Create Label | POST | `/api/v2.0/labels` | `conn_mod_def::GKgPGqPKexg::HrAJtZg8SJqSxHELj6u9xA` |
| Delete Label | DELETE | `/api/v2.0/labels/{{labelId}}` | `conn_mod_def::GKgPGzR3Ghg::KeQ2HpTFRDGdHrbalFD2iA` |

### ChannelChats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Chat by ID | GET | `/api/v2.0/{{channelId}}/chats/{{chatId}}` | `conn_mod_def::GKgPHFg6hgA::4MUmyZ8wR--JStYHbhwpag` |
| Update a Channel Chat | PUT | `/api/v2.0/{{channelId}}/chats/{{chatId}}` | `conn_mod_def::GKgPHagwZeg::NtD21CziRfeq0Gs6SawJbg` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Channel's Automations | GET | `/api/v2.0/{{channelId}}/workflows` | `conn_mod_def::GKgPGzfJSog::WoOSodu8TyuXAar9NvVlBQ` |
| Trigger Automation for a Channel Workflow | POST | `/api/v2.0/{{channelId}}/workflows/{{workflowId}}` | `conn_mod_def::GKgPHbZUXNg::YUx40Nn4QfSkCNYN6ccHOQ` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Channel By ID | GET | `/api/v2.0/channels/{{channelId}}` | `conn_mod_def::GKgPG8CacAg::rocxt685QIWvs9VPsbG8DQ` |
| Get Channels | GET | `/api/v2.0/channels` | `conn_mod_def::GKgPHFKBSHA::9rB5GHnYTEW4CQb0j7zAjw` |

### ContactAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Contact Attribute | POST | `/api/v2.0/contacts/{{contactId}}/attributes` | `conn_mod_def::GKgPGdDWXGg::Qhu2YmBGTOm3NzJI9JRYCw` |

### ChannelBroadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Channel Broadcast | DELETE | `/{{channelId}}/broadcasts/{{broadcastId}}` | `conn_mod_def::GKgPGrQDdyg::sVWbp6WyTlacm_572LM9SQ` |

### Business

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Business | GET | `/api/v2.0/business` | `conn_mod_def::GKgPG72mZSg::n4kEeutMTfS-5nlHWevVTw` |

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Channel's Chats | GET | `/{{channelId}}/chats` | `conn_mod_def::GKgPHFG6tIA::eTngH6g4RjGFzghLSWstVw` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Message Templates | GET | `/api/v2.0/message_templates` | `conn_mod_def::GKgPHRILelg::xR6UYKkgTEKj_Cf7j0-8NQ` |

### WhatsappMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a WhatsApp Message for a Channel | POST | `/api/v2.0/{{channelId}}/whatsapp_messages/send` | `conn_mod_def::GKgPHRjrTfg::LVKwFWrkTcCBB-eeBMYI2A` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload File | POST | `/api/v2.0/upload_file` | `conn_mod_def::GKgPHlL2XrA::iN6BbC7URzao3zHVFFEuzQ` |

## When a call fails

The error comes from Heyy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/heyy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
