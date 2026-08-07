---
name: landbot
description: Landbot is a no-code conversational AI platform that enables businesses to build and deploy chatbots and AI agents for websites and messaging channels, helping automate lead generation, customer support, and user engagement through interactive, multi-channel conversations. Read and write Landbot data through One: customers, customerfields, channels, channelmessagehooks, customeroptins, landbotapigeneralinformation and more, 31 actions with real parameter documentation. Use whenever the user asks to look something up in Landbot, create or update a record there, or build code against the Landbot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: landbot
  generated-from: one-knowledge-base
---

# Landbot through One

Landbot is a no-code conversational AI platform that enables businesses to build and deploy chatbots and AI agents for websites and messaging channels, helping automate lead generation, customer support, and user engagement through interactive, multi-channel conversations.

One exposes Landbot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `landbot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Landbot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Landbot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer | GET | `/v1/customers/{{customerId}}/` | `conn_mod_def::GKaFAfu7zdA::SV9AdggQRDGYBIKKNPivwQ` |
| List Customers | GET | `/v1/customers/` | `conn_mod_def::GKaFAjH4yIA::YDomd_1_R8im4JWt_JH2eQ` |
| Archive a Customer | PUT | `/v1/customers/{{customerId}}/archive/` | `conn_mod_def::GKaFAUz_aaA::-vy4ryyeSr2Aa9lS_E0o4A` |
| Assign a Bot to a Customer | PUT | `/v1/customers/{{customerId}}/assign_bot/{{botId}}` | `conn_mod_def::GKaFAXY3BJA::iLiRJBEXRG2oqV6IGw-PEQ` |
| Assign a Customer to an Agent | PUT | `/v1/customers/{{customerId}}/assign/{{agentId}}/` | `conn_mod_def::GKaFAV6y7Ag::jWcVlgRTTlSQlQs8mc68ew` |
| Assign a Customer to You | PUT | `/v1/customers/{{customerId}}/assign/` | `conn_mod_def::GKaFAVgJxIA::naH9ASNdQyi5zZddJ-MfZw` |
| Block a Customer | PUT | `/v1/customers/{{customerId}}/block/` | `conn_mod_def::GKaFAgO5lJA::_PP7BaU6TDKBaMNeF3WZXg` |
| Change a Customer's Field Value | PUT | `/v1/customers/{{customerId}}/fields/{{fieldName}}/` | `conn_mod_def::GKaFALiBwYg::06AvFPHqSt6b1eWI5rOf8Q` |
| Delete a Customer | DELETE | `/v1/customers/{{customerId}}/` | `conn_mod_def::GKaFAgHrZEA::nSY7JatISK6rvvr91tcsmw` |
| Delete a Customer's WhatsApp Opt-Ins | DELETE | `/v1/customers/{{customerId}}/opt_out/` | `conn_mod_def::GKaFBB2vhYg::7fjlfVEySJKx4LIk41ZF4A` |
| Send a Location Message to a Customer | POST | `/v1/customers/{{customerId}}/send_location/` | `conn_mod_def::GKaFAq8viCA::J2fvXeYMQb-13I1CC-_DBg` |
| Send a WhatsApp Template Message to a Customer | POST | `/v1/customers/{{customerId}}/send_template/` | `conn_mod_def::GKaFBM-HsHg::EXVV6gPESw664JQbTOElnQ` |

6 more Customers actions are available through search.

### CustomerFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer Field Value | GET | `/v1/customers/{{customerId}}/fields/{{fieldName}}/` | `conn_mod_def::GKaFAWOHYzA::xEk6J7nnTj-5aIDRoRzCjw` |
| Create a Customer Field | POST | `/v1/customers/{{customerId}}/fields/{{fieldName}}/` | `conn_mod_def::GKaFAK_0ZPg::8T3QaooPQCaL8__eFQX5PA` |
| Delete a Customer Field | DELETE | `/v1/customers/{{customerId}}/fields/{{fieldName}}/` | `conn_mod_def::GKaFAKptLBg::mzvFKolWTm-8M3VZMU7ciA` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel's Data | GET | `/v1/channels/{{channelId}}/` | `conn_mod_def::GKaFAKhbbtA::5UYzMpsCQfuotf9OPG261w` |
| List Channels | GET | `/channels/` | `conn_mod_def::GKaFANABq8A::-iW5_QRfTLWsjiZEo_fi5w` |

### ChannelMessageHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Channel Message Hook | POST | `/v1/channels/{{channelId}}/message_hooks/` | `conn_mod_def::GKaFA5P-OTg::-Sii9zI8Ssi2Fcm8k1eNSQ` |
| Delete a Channel Message Hook | DELETE | `/v1/channels/{{channelId}}/message_hooks/{{hookId}}/` | `conn_mod_def::GKaFA5uMD7g::EygyCSfzRKWt64QIqsD_Yg` |

### CustomerOptIns

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Customer's Opt-Ins | DELETE | `/v1/customers/{{customerId}}/opt_out/` | `conn_mod_def::GKaFAg5NZ7A::_VItq6vjSF2gZGYGGtfnlg` |

### LandbotApiGeneralInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Landbot API General Information | GET | `/` | `conn_mod_def::GKaFA5b2T0A::etomM4mHSnqc87LzHc4bSQ` |

### ChannelMessageHook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Message Hook | GET | `/v1/channels/{{channelId}}/message_hooks/{{hookId}}` | `conn_mod_def::GKaFBBpCtLA::ZAX8iirpTXCUgnm-sySfPA` |

### MessageHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Channel's MessageHooks | GET | `/v1/channels/{{channelId}}/message_hooks/` | `conn_mod_def::GKaFBBwBULg::zkwHdotzRdC297DZlLd_Mw` |

### MessageHooksMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive MessageHooks Messages | POST | `/{{yourHookUrl}}` | `conn_mod_def::GKaFBCEDMOA::_GUmeRj3QGCKive_oFUuEw` |

### WhatsAppTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List WhatsApp Templates | GET | `/channels/whatsapp/templates/` | `conn_mod_def::GKaFBC0GelA::WKJ-Kc8UQqOFTaWHcsNpfw` |

This lists 25 of 31 actions. For anything not here, call `search_one_platform_actions` with platform `landbot`. The full catalog is at https://www.withone.ai/knowledge/landbot.

## When a call fails

The error comes from Landbot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/landbot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
