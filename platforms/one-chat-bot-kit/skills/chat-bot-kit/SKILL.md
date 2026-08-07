---
name: chat-bot-kit
description: ChatBotKit is an AI chatbot development platform that provides APIs, SDKs, and hosted tools for building, deploying, and managing conversational agents, allowing developers and businesses to integrate custom chat experiences across websites, apps, and messaging channels. Read and write ChatBotKit data through One: conversation, conversationmessages, secret, skillsetabilities, bot, file and more, 346 actions with real parameter documentation. Use whenever the user asks to look something up in ChatBotKit, create or update a record there, or build code against the ChatBotKit API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: chat-bot-kit
  generated-from: one-knowledge-base
---

# ChatBotKit through One

ChatBotKit is an AI chatbot development platform that provides APIs, SDKs, and hosted tools for building, deploying, and managing conversational agents, allowing developers and businesses to integrate custom chat experiences across websites, apps, and messaging channels.

One exposes ChatBotKit through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `chat-bot-kit` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ChatBotKit is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ChatBotKit account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Conversation

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation | GET | `/v1/conversation/{{conversationId}}/fetch` | `conn_mod_def::GMa0A16t-jA::2jslQ1RHR1KvugaonwMHnw` |
| Compact a Conversation | POST | `/v1/conversation/{{conversationId}}/compact` | `conn_mod_def::GMa0AhzyPQA::-SCoX5_AR2iMcP4uawTteA` |
| Compact a Conversation | POST | `/v1/conversation/compact` | `conn_mod_def::GMa0Ah7Mvag::-chUuZQcRQiKyFFS2K0bSA` |
| Complete a Conversation | POST | `/v1/conversation/complete` | `conn_mod_def::GMa0At8v1ug::_rxkbekIRIOrJ3wR1uFhEQ` |
| Complete a Conversation Response | POST | `/v1/conversation/{{conversationId}}/complete` | `conn_mod_def::GMa0BUBz8kg::iZlnG4d1TWGU9xvGiQ4SsQ` |
| Create a Conversation | POST | `/v1/conversation/create` | `conn_mod_def::GMa0Aubg9Kg::KettzxYtTMeaEZtogHBPRw` |
| Dispatch a Stateful Conversation Completion for a Conversation | POST | `/v1/conversation/{{conversationId}}/dispatch` | `conn_mod_def::GMa0Au9T28g::aZW6A89NQ4mtZmBC90MUZQ` |
| Downvote a Conversation | POST | `/v1/conversation/{{conversationId}}/downvote` | `conn_mod_def::GMa0A1SzC7A::NARm5WjdTLiaigHAuu0gSg` |
| Upvote a Conversation | POST | `/v1/conversation/{{conversationId}}/upvote` | `conn_mod_def::GMa0BaysM1g::crefPomlTa-O-Fr9Bo0qbA` |

### ConversationMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Conversation Message | GET | `/v1/conversation/{{conversationId}}/message/{{messageId}}/fetch` | `conn_mod_def::GMa0BlWggTA::oJe5UfovTBqk1j3Mgjb64A` |
| List Conversation Messages | GET | `/v1/conversation/{{conversationId}}/message/list` | `conn_mod_def::GMa0Bs6MOUA::EXspEY4aQOep8A2_9ZR6Tw` |
| Create a Message for a Conversation | POST | `/v1/conversation/{{conversationId}}/message/create` | `conn_mod_def::GMa0Bj1TxWA::SFJGfVSLS_e-mZ27dQ7CiA` |
| Delete a Conversation Message | POST | `/v1/conversation/{{conversationId}}/message/{{messageId}}/delete` | `conn_mod_def::GMa0Bjtvztg::IJJuE9W9Tba40XbRmY0UUg` |
| Downvote a Conversation Message | POST | `/v1/conversation/{{conversationId}}/message/{{messageId}}/downvote` | `conn_mod_def::GMa0BkkQVVg::F6o7vtXDRwCnCmBqWJExzQ` |
| Send a Message to a Conversation | POST | `/v1/conversation/{{conversationId}}/send` | `conn_mod_def::GMa0BSzcmJg::RoRvQLP8TD-8XL0EAuGL8w` |
| Synthesize a Conversation Message | POST | `/v1/conversation/{{conversationId}}/message/{{messageId}}/synthesize` | `conn_mod_def::GMa0BzkHFsg::whCYQylMS7-2pPAGOQfjMA` |
| Update a Conversation Message | POST | `/v1/conversation/{{conversationId}}/message/{{messageId}}/update` | `conn_mod_def::GMa0B1HT48A::-dhYq5caSICda49P9Zhr2A` |

### Secret

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Secret | GET | `/v1/secret/{{secretId}}/fetch` | `conn_mod_def::GMa0G5OX38g::EREZ4SKETHWqcP65jd49PA` |
| Authenticate a Secret | POST | `/v1/secret/{{secretId}}/authenticate` | `conn_mod_def::GMa0GxFxrsA::KMBvZH8yRImchXyoxyfqJg` |
| Create Secret | POST | `/v1/secret/create` | `conn_mod_def::GMa0GxRHFeA::RkY_Uj4bTQekkW-8FP2gNA` |
| Delete a Secret | POST | `/v1/secret/{{secretId}}/delete` | `conn_mod_def::GMa0G45cSjA::6KVmDQ1IQQWSH1HqsmPvZw` |
| Mint a Secret Token | POST | `/v1/secret/{{secretId}}/mint` | `conn_mod_def::GMa0G5F6xFg::XKs5IimQTseEISg0vfeyxg` |
| Revoke a Secret | POST | `/v1/secret/{{secretId}}/revoke` | `conn_mod_def::GMa0HC391FA::zJVc4CGWQKKGZx-I5xLbFg` |
| Update a Secret | POST | `/v1/secret/{{secretId}}/update` | `conn_mod_def::GMa0HCc1OgA::8EofpoLTTzKUblX-1q38TA` |
| Verify a Secret | POST | `/v1/secret/{{secretId}}/verify` | `conn_mod_def::GMa0HCM_atg::0HJoK9INQBmeYhsM0JbwKA` |

### SkillsetAbilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Skillset Abilities | GET | `/v1/skillset/{{skillsetId}}/ability/export` | `conn_mod_def::GMa0HlHFr8g::sn_Cy19iTzC7RjukG3uGKQ` |
| Fetch an Ability from a Skillset | GET | `/v1/skillset/{{skillsetId}}/ability/{{abilityId}}/fetch` | `conn_mod_def::GMa0Hun539A::0e9dj-giQUusli64TWZ3dQ` |
| List a Skillset's Abilities | GET | `/v1/skillset/{{skillsetId}}/ability/list` | `conn_mod_def::GMa0HvMn0cA::iMPhxJudSb2rL_0diJaNlg` |
| Create an Ability for a Skillset | POST | `/v1/skillset/{{skillsetId}}/ability/create` | `conn_mod_def::GMa0HnisUfA::G4S5palvQrOhxFPHGIC7-w` |
| Delete an Ability from a Skillset | POST | `/v1/skillset/{{skillsetId}}/ability/{{abilityId}}/delete` | `conn_mod_def::GMa0HnHTMSg::Kod9UGtIQv25f5jW_uQeqw` |
| Execute an Ability for a Skillset | POST | `/v1/skillset/{{skillsetId}}/ability/{{abilityId}}/execute` | `conn_mod_def::GMa0HlOW5Yg::7Wg9aUmESm6x9cYzYfVbKQ` |
| Update a Skillset Ability | POST | `/v1/skillset/{{skillsetId}}/ability/{{abilityId}}/update` | `conn_mod_def::GMa0HvTTM-g::5_-EEYp-SU2FLHl9jGYjIQ` |

### Bot

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Bot | GET | `/v1/bot/{{botId}}/fetch` | `conn_mod_def::GMaz_zPj0Ug::sA3N2UNPRZObSFdyiEWyRA` |
| Clone a Bot | POST | `/v1/bot/{{botId}}/clone` | `conn_mod_def::GMaz_jaAdlA::UMw6s4S2TyuZc30ZE71sTQ` |
| Create Bot | POST | `/v1/bot/create` | `conn_mod_def::GMaz_q-2lUA::XtxNGaD2RPyJpJI207yJfw` |
| Downvote a Bot | POST | `/v1/bot/{{botId}}/downvote` | `conn_mod_def::GMaz_hyUBKA::In3PSXSeSCqq3qt3Nk5MNA` |
| Update a Bot | POST | `/v1/bot/{{botId}}/update` | `conn_mod_def::GMaz_zAGtlg::jd8a-gLfQ7msKBQlyD1vXw` |
| Upvote a Bot | POST | `/v1/bot/{{botId}}/upvote` | `conn_mod_def::GMaz_0FaWcg::ImZY8106SVOZ4Wmch00ANw` |

### File

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/v1/file/{{fileId}}/download` | `conn_mod_def::GMa0DYihS_g::r3a68jxzRJ-VPrpT9kar1w` |
| Fetch a File | GET | `/v1/file/{{fileId}}/fetch` | `conn_mod_def::GMa0DWqb12g::ix41KTtlSE2xJWEqXNWR8w` |
| Create File | POST | `/v1/file/create` | `conn_mod_def::GMa0DOlvktg::l2-siaAHTwS80HDQCyj8ug` |
| Sync a File | POST | `/v1/file/{{fileId}}/sync` | `conn_mod_def::GMa0DW_GQng::Gu03Ze5-QdybeunAmP_-7Q` |
| Update a File | POST | `/v1/file/{{fileId}}/update` | `conn_mod_def::GMa0DWoAWrg::iBA8FGuKThCIo_TZR3Eu9Q` |
| Upload a File | POST | `/v1/file/{{fileId}}/upload` | `conn_mod_def::GMa0Dfjrshg::ptUAj-2-RQOTrWOjXPKXFA` |

### SpaceStorage

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File from Space Storage | GET | `/v1/space/{{spaceId}}/storage/download/{{path}}` | `conn_mod_def::GMa0ITvZM1g::JGS0V7y-TSqISRpkCbNScw` |
| List Files and Directories in a Space's Storage | GET | `/v1/space/{{spaceId}}/storage/list/{{path}}` | `conn_mod_def::GMa0ISN9Hdg::KyKI7jEuQY2IhN8Nno2Z5g` |
| Copy a File in Space Storage | POST | `/v1/space/{{spaceId}}/storage/copy/{{path}}` | `conn_mod_def::GMa0IS4J_6A::Rsa4ydBlQMenW1x31Vswew` |
| Delete a Space Storage File or Directory | POST | `/v1/space/{{spaceId}}/storage/delete/{{path}}` | `conn_mod_def::GMa0IRBbXaA::D6_2JXBLT5anX_Rz0WZyZQ` |
| Move a File in Space Storage | POST | `/v1/space/{{spaceId}}/storage/move/{{path}}` | `conn_mod_def::GMa0IQ3FcIA::u2Wwcde7Sx6vOfNjJV9Dzg` |
| Upload a File to a Space's Storage Path | POST | `/v1/space/{{spaceId}}/storage/upload/{{path}}` | `conn_mod_def::GMa0IbMZeaA::5wPZD_IWQ3at6QdfjcHsBQ` |

### Blueprint

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Blueprint | GET | `/v1/blueprint/{{blueprintId}}/fetch` | `conn_mod_def::GMaz_IRrVxA::t0D_VcplRQeZ6k8qSadnVg` |
| Clone a Blueprint | POST | `/v1/blueprint/{{blueprintId}}/clone` | `conn_mod_def::GMaz_GGADgg::N3arMBEXRNmmB3uxTnqTrw` |
| Create Blueprint | POST | `/v1/blueprint/create` | `conn_mod_def::GMaz_F5h0mA::H8eymprhR26N62B07lv9pA` |
| Delete a Blueprint | POST | `/v1/blueprint/{{blueprintId}}/delete` | `conn_mod_def::GMaz_F4M89A::iir0AfmtSwuZibiSu6FGQg` |
| Update a Blueprint | POST | `/v1/blueprint/{{blueprintId}}/update` | `conn_mod_def::GMaz_ZX3-xg::-N01ey7fQkyVwXzlhaUOtQ` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Contact | GET | `/v1/contact/{{contactId}}/fetch` | `conn_mod_def::GMa0AFTzb6A::P3THjjnOTU6EWJfXp9FXEw` |
| Create a Contact | POST | `/v1/contact/create` | `conn_mod_def::GMaz_8vsTdA::K6wK9l3hQpyXLM2QuD6gGA` |
| Delete Contact | POST | `/v1/contact/{{contactId}}/delete` | `conn_mod_def::GMa0AEE3azg::vwxdf8zJQ5uy6SOKfl9zJQ` |
| Ensure a Contact | POST | `/v1/contact/ensure` | `conn_mod_def::GMa0ADxgmoA::YqkuqVVRSFOk6HtuzG5RwQ` |
| Upsert Contact for a Conversation | POST | `/v1/conversation/{{conversationId}}/contact/upsert` | `conn_mod_def::GMa0Bcm9_QA::IBbJuTpMQ6eishLpQzyB5g` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Contacts | GET | `/v1/contact/export` | `conn_mod_def::GMa0AD9Vqxg::t4BkNKDlTruIOA0DcC5Kaw` |
| List Contacts | GET | `/v1/contact/list` | `conn_mod_def::GMa0AF8oQnA::Uwp4nlAeRrmC4B3CqmJOiw` |
| Proxy a Request Using a Contact's Secret | POST | `/v1/contact/{{contactId}}/secret/{{secretId}}/proxy` | `conn_mod_def::GMa0AZxTV9g::_xEhOseIRTqH5715J6lEfA` |
| Search a Contact's Memories | POST | `/v1/contact/{{contactId}}/memory/search` | `conn_mod_def::GMa0ANvqR0A::UEBM0IOqRIa8cKEftVThAw` |
| Update a Contact | POST | `/v1/contact/{{contactId}}/update` | `conn_mod_def::GMa0AOEXMvA::QOARcjIAScuErtHoMKrnEg` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Conversations | GET | `/v1/conversation/export` | `conn_mod_def::GMa0A2ksbKg::hmv9l0ovRte49asTvZv87w` |
| List a Contact's Conversations | GET | `/v1/contact/{{contactId}}/conversation/list` | `conn_mod_def::GMa0AQtqxTA::akw2Vg1lSG65QNGbQqeqOg` |
| List Conversations | GET | `/v1/conversation/list` | `conn_mod_def::GMa0BSk6GZA::mcmZFI2ISyijL24xLuXLqg` |
| Delete a Conversation | POST | `/v1/conversation/{{conversationId}}/delete` | `conn_mod_def::GMa0AuXv4dA::VUPh7zxzQfOWsrZeIwFBXA` |
| Update a Conversation | POST | `/v1/conversation/{{conversationId}}/update` | `conn_mod_def::GMa0Ba_OsNg::ZlEmw8GGT0qy7BH4p-VCRQ` |

### Dataset

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Dataset | GET | `/v1/dataset/{{datasetId}}/fetch` | `conn_mod_def::GMa0B7ttw6A::lskcbWxGQsWBoOP1BVMpIQ` |
| Create Dataset | POST | `/v1/dataset/create` | `conn_mod_def::GMa0BzyBVSA::6Aofr3TJRS-Saj_H8-8FVA` |
| Delete a Dataset | POST | `/v1/dataset/{{datasetId}}/delete` | `conn_mod_def::GMa0B7h8sng::HM5Lek9XQsmF15IGmQ01ig` |
| Search a Dataset | POST | `/v1/dataset/{{datasetId}}/search` | `conn_mod_def::GMa0B9n4XiA::oHH1gE8WTTymk7fCi1t9hw` |
| Update a Dataset | POST | `/v1/dataset/{{datasetId}}/update` | `conn_mod_def::GMa0B7lg7EA::lkRTIyMBQTCPJzwARIyQOQ` |

### DatasetRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Dataset Records | GET | `/v1/dataset/{{datasetId}}/record/export` | `conn_mod_def::GMa0CPvllvA::XBXV2nX8TyOIEA92auvS7A` |
| Fetch a Dataset Record | GET | `/v1/dataset/{{datasetId}}/record/{{recordId}}/fetch` | `conn_mod_def::GMa0CODAN-A::bfLJO-EHTUOBo01GjcGFRg` |
| List Records for a Dataset | GET | `/v1/dataset/{{datasetId}}/record/list` | `conn_mod_def::GMa0CNvKUiA::8SevM8thTiysSiZrITRmKA` |
| Create a Record for a Dataset | POST | `/v1/dataset/{{datasetId}}/record/create` | `conn_mod_def::GMa0CFg6zRg::w1t8SjCTTj2ckmISQFR-fA` |
| Delete a Dataset Record | POST | `/v1/dataset/{{datasetId}}/record/{{recordId}}/delete` | `conn_mod_def::GMa0CNqXBig::3GHGmU2OSxWHmJrSpfzrHA` |

### DiscordIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Discord Integration | GET | `/v1/integration/discord/{{discordIntegrationId}}/fetch` | `conn_mod_def::GMa0CWey-KA::hC7ieHf8QSqoyrjkY-KAJA` |
| Create Discord Integration | POST | `/v1/integration/discord/create` | `conn_mod_def::GMa0CXKBSGg::0CckEG2DQ4ewnsr7x2Kv-A` |
| Delete a Discord Integration | POST | `/v1/integration/discord/{{discordIntegrationId}}/delete` | `conn_mod_def::GMa0CczZQiA::zet7FVhDSN6i5so9ePVrJg` |
| Setup a Discord Integration | POST | `/v1/integration/discord/{{discordIntegrationId}}/setup` | `conn_mod_def::GMa0CXLVAgA::EooFz84ESP2ZPIne4tlHRQ` |
| Update a Discord Integration | POST | `/v1/integration/discord/{{discordIntegrationId}}/update` | `conn_mod_def::GMa0Ck2R9MA::KnnmKyyZRVK6Q_TcVGcoRw` |

### EmailIntegration

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Email Integration | GET | `/v1/integration/email/{{emailIntegrationId}}/fetch` | `conn_mod_def::GMa0CjeJGig::St_8-LUhSqyDDuUf_5R_Ow` |
| Create Email Integration | POST | `/v1/integration/email/create` | `conn_mod_def::GMa0CjopoiA::3Erz07BVRN6geqQ5bSNrdQ` |
| Delete an Email Integration | POST | `/v1/integration/email/{{emailIntegrationId}}/delete` | `conn_mod_def::GMa0CoSZU_A::jD5C8atPTkOx8I8axeAr_g` |
| Setup an Email Integration | POST | `/v1/integration/email/{{emailIntegrationId}}/setup` | `conn_mod_def::GMa0Cvk416g::YM4DkKOQSzCKjDfk00EH7Q` |
| Update an Email Integration | POST | `/v1/integration/email/{{emailIntegrationId}}/update` | `conn_mod_def::GMa0CvW7uvA::1Vmd9UjASa69mHh1ywPXwQ` |

This lists 90 of 346 actions. For anything not here, call `search_one_platform_actions` with platform `chat-bot-kit`. The full catalog is at https://www.withone.ai/knowledge/chat-bot-kit.

## When a call fails

The error comes from ChatBotKit, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/chat-bot-kit

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
