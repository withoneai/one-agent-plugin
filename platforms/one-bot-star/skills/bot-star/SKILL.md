---
name: bot-star
description: A visual bot-building platform that enables businesses to design, deploy, and manage AI-powered chatbots for websites, messaging apps, and customer support workflows without coding. Read and write BotStar data through One: cmsentities, cmsentityitems, bots, botattributes, cmsentityfields, botusers and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in BotStar, create or update a record there, or build code against the BotStar API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bot-star
  generated-from: one-knowledge-base
---

# BotStar through One

A visual bot-building platform that enables businesses to design, deploy, and manage AI-powered chatbots for websites, messaging apps, and customer support workflows without coding.

One exposes BotStar through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bot-star` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BotStar is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BotStar account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CmsEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot’s CMS Entity | GET | `/bots/{{botId}}/cms_entities/{{entityId}}` | `conn_mod_def::GJ45T9-05Dc::HyAxRcr5SHmSkNFMAAlbqg` |
| List a Bot’s CMS Entities | GET | `/bots/{{botId}}/cms_entities` | `conn_mod_def::GJ45T1FYtgw::cg2nFyZHQMq447bi2VxJ4w` |
| Create a Bot’s CMS Entity | POST | `/bots/{{botId}}/cms_entities` | `conn_mod_def::GJ45TlEh8do::wBfC20Y6Rva667Sf6yhRBg` |
| Delete a Bot's CMS Entity | DELETE | `/bots/{{botId}}/cms_entities/{{entityId}}` | `conn_mod_def::GJ45Ts3ywhc::w0gXIRK6TxeYjnIj-QdVMw` |
| Update a Bot’s CMS Entity | PATCH | `/bots/{{botId}}/cms_entities/{{entityId}}` | `conn_mod_def::GJ45UGiWJNo::1Q_decHdTT6FnRoY_vCX_w` |

### CmsEntityItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CMS Entity Item for a Bot | GET | `/bots/{{botId}}/cms_entities/{{entityId}}/items/{{entityItemId}}` | `conn_mod_def::GJ45VFoJoo4::b2C4_vIUS4eH6GXYMU_oeA` |
| List a Bot’s CMS Entity Items | GET | `/bots/{{botId}}/cms_entities/{{entityId}}/items` | `conn_mod_def::GJ45U92i-20::bt4Hz2JZTryvYtvYEkRi8A` |
| Create a CMS Entity Item for a Bot | POST | `/bots/{{botId}}/cms_entities/{{entityId}}/items` | `conn_mod_def::GJ45Usqqonc::Hx5cLElVSF-XM8gMvjcDjA` |
| Delete a CMS Entity Item (for a Bot) | DELETE | `/bots/{{botId}}/cms_entities/{{entityId}}/items/{{entityItemId}}` | `conn_mod_def::GJ45U0vzrw0::yztFW4aUSuaRnIvQvzMdTw` |
| Update a Bot CMS Entity Item | PATCH | `/bots/{{botId}}/cms_entities/{{entityId}}/items/{{entityItemId}}` | `conn_mod_def::GJ45VM_s_rA::2POxFZilSVKUJkVEWQLBLQ` |

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot by ID | GET | `/bots/{{botId}}` | `conn_mod_def::GJ45TH3Neqs::f-WxSmb8TWOxLulijY0kuQ` |
| List Bots | GET | `/bots/` | `conn_mod_def::GJ45TP3oZiE::vqSheYJ7S7eYOD3ppIhY7A` |
| Create a Bot | POST | `/bots/` | `conn_mod_def::GJ45SrlK6is::kWTJTY7bQ6WFykQjGVNjQA` |
| Publish a Bot to Live | POST | `/bots/{{botId}}/publish` | `conn_mod_def::GJ45TWaI3-I::f3c9ZSqhS4u-PD2S_N8mUQ` |

### BotAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Bot’s Attributes | GET | `/bots/{{botId}}/attributes` | `conn_mod_def::GJ45TAzt720::NIaoGJtQSqKe89SKoQDlrg` |
| Create a Bot Attribute | POST | `/bots/{{botId}}/attributes` | `conn_mod_def::GJ45SysP254::_z_sp6ZtTc20nR1UM-my1Q` |
| Delete a Bot Attribute | DELETE | `/bots/{{botId}}/attributes/{{attributeId}}` | `conn_mod_def::GJ45S5nVNMw::G0-tZrUASgig_1pi2XHv7A` |
| Update a Bot Attribute | PATCH | `/bots/{{botId}}/attributes/{{attributeId}}` | `conn_mod_def::GJ45TdRTKPI::5XnJ9A3RQ_SVNX_S1YHMOQ` |

### CmsEntityFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create CMS Entity Field(s) for a Bot | POST | `/bots/{{botId}}/cms_entities/{{entityId}}/fields` | `conn_mod_def::GJ45UPNoq_I::2y7fgi2MRvS7lfm5lBrjQA` |
| Delete a Bot CMS Entity’s Field(s) | DELETE | `/bots/{{botId}}/cms_entities/{{entityId}}/fields` | `conn_mod_def::GJ45UYrG-0U::1NHfKdNnRCSrnfBK1lVpwA` |

### BotUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot User's Info | GET | `/bots/{{botId}}/users/{{userId}}` | `conn_mod_def::GJ45Vj9p4HU::tUMqRD9CQbO6acbMYhWBoA` |
| Update a Bot’s User Attributes | PATCH | `/bots/{{botId}}/users/{{userId}}` | `conn_mod_def::GJ45VrmOxic::by8EEgGkRL-34xiKxLApPA` |

### BotCmsEntityFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Bot CMS Entity’s Fields | PATCH | `/bots/{{botId}}/cms_entities/{{entityId}}/fields` | `conn_mod_def::GJ45UhWO6Ew::uPzBg3wqQtyDkn_qqxH29Q` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Message to a Facebook Audience | POST | `/messages` | `conn_mod_def::GJ45VUYVkAg::_YAGjz7GREWV3rpMHEgvTw` |

### UsersAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Custom User Attributes for a Bot | POST | `/bots/{{botId}}/users/attributes` | `conn_mod_def::GJ45VcIFJP0::L5xdCgbDRdaRpPY6EMwMyA` |

## When a call fails

The error comes from BotStar, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bot-star

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
