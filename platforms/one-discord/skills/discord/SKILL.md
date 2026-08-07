---
name: discord
description: Discord is a voice, video, and text communication platform that brings people together in private or community-based “servers,” enabling rich multimedia conversations, persistent chat rooms, and real-time interaction inside flexible, topic-focused groups. Read and write Discord data through One: applicationcommands, webhooks, channels, guildmembers, threads, webhookmessages and more, 229 actions with real parameter documentation. Use whenever the user asks to look something up in Discord, create or update a record there, or build code against the Discord API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: discord
  generated-from: one-knowledge-base
---

# Discord through One

Discord is a voice, video, and text communication platform that brings people together in private or community-based “servers,” enabling rich multimedia conversations, persistent chat rooms, and real-time interaction inside flexible, topic-focused groups.

One exposes Discord through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `discord` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Discord is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Discord account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ApplicationCommands

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild Application Command | GET | `/applications/{{applicationId}}/guilds/{{guildId}}/commands/{{commandId}}` | `conn_mod_def::GJ2WDkhWbpc::jUBSwoqWQV2vCF1gXdQLgQ` |
| Get an Application Command | GET | `/applications/{{applicationId}}/commands/{{commandId}}` | `conn_mod_def::GJ2WB83ehVM::SXDaDw0CRKqf3cHC6azm6A` |
| List a Guild's Application Commands | GET | `/applications/{{applicationId}}/guilds/{{guildId}}/commands` | `conn_mod_def::GJ2WK7VOklc::AOt1X6yfQu2lHiE_o1b9bA` |
| List an Application's Commands | GET | `/applications/{{applicationId}}/commands` | `conn_mod_def::GJ2WKGqx1BY::Yv1d6uXeTdeY9NnYWmDNkg` |
| Bulk Set a Guild’s Application Commands | PUT | `/applications/{{applicationId}}/guilds/{{guildId}}/commands` | `conn_mod_def::GJ2V3zmJyCk::D3kJj8E5QRWQbBfl6Q09eQ` |
| Bulk Set an Application’s Commands | PUT | `/applications/{{applicationId}}/commands` | `conn_mod_def::GJ2V3qRGHDw::AshN8fXQRJKDn1MVMe-xIw` |
| Create a Guild Application Command | POST | `/applications/{{applicationId}}/guilds/{{guildId}}/commands` | `conn_mod_def::GJ2V5P8Ig_I::TIyfYGDGRmqFRf0IvRGIgw` |
| Create an Application Command | POST | `/applications/{{applicationId}}/commands` | `conn_mod_def::GJ2V4cA4Y5o::wOEGwJcqQlenHb4tZjybSw` |
| Delete an Application Command | DELETE | `/applications/{{applicationId}}/commands/{{commandId}}` | `conn_mod_def::GJ2V8Y6Na2E::xT3OqJ3TQ2GJHuBoneK0yw` |
| Update an Application Command | PATCH | `/applications/{{applicationId}}/commands/{{commandId}}` | `conn_mod_def::GJ2WQ21L-eo::acm13q6nRky-FiII5xAhDQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ2WItKw6UU::LzKEUAkzR1GdqX-uR72DiA` |
| Get a Webhook by Token | GET | `/webhooks/{{webhookId}}/{{webhookToken}}` | `conn_mod_def::GJ2WI1f5u7s::CBthGQDRSKO-kwSAmXc8IQ` |
| List a Channel’s Webhooks | GET | `/channels/{{channelId}}/webhooks` | `conn_mod_def::GJ2WKoSBMgY::iTOk6FixTES1vd4WDAGY-g` |
| List a Guild’s Webhooks | GET | `/guilds/{{guildId}}/webhooks` | `conn_mod_def::GJ2WFLFh5O4::psuVCy70TSukSRW-2EDc-g` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ2V_6uBxOg::JF-yDhzlT8GsEkE-bOTJdw` |
| Delete a Webhook by Token | DELETE | `/webhooks/{{webhookId}}/{{webhookToken}}` | `conn_mod_def::GJ2WAC6i4AE::xHGclb-vRQCfmUMurB58cA` |
| Execute a Slack-Compatible Webhook (Discord) | POST | `/webhooks/{{webhookId}}/{{webhookToken}}/slack` | `conn_mod_def::GJ2WBIrQhr4::VRDVAEBFRz-_qUp4VLD8mQ` |
| Execute a Webhook (Send a Webhook Message) | POST | `/webhooks/{{webhookId}}/{{webhookToken}}` | `conn_mod_def::GJ2WBST2RPw::WmE91Pe7StWekkNMyNgQJA` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ2WVEft77s::EuTdZttzS_qg3EGfPgOAzg` |
| Update a Webhook by Token | PATCH | `/webhooks/{{webhookId}}/{{webhookToken}}` | `conn_mod_def::GJ2WVLsk50Y::YDmILVuDS-aMzR3d7BZZwQ` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel | GET | `/channels/{{channelId}}` | `conn_mod_def::GJ2WCxcGK8w::1gzyr0RYRlixXWIhd8DK_A` |
| List a Guild’s Channels | GET | `/guilds/{{guildId}}/channels` | `conn_mod_def::GJ2WLYY0hWQ::SGhoL_fkTrGsXGJf-JIvzQ` |
| Add a User to a Group DM (Channel Recipient) | PUT | `/channels/{{channelId}}/recipients/{{userId}}` | `conn_mod_def::GJ2V2Bf0VtU::Yu5so1GSQMWaueJuZlhdjQ` |
| Create a DM Channel for the Current User | POST | `/users/@me/channels` | `conn_mod_def::GJ2V49VsbDQ::RPCntZ8aQOCAOfvJ93aT4w` |
| Delete a Channel | DELETE | `/channels/{{channelId}}` | `conn_mod_def::GJ2V88GpK_c::DrYq-kQyRMWnsnK7NfRz_Q` |
| Remove a Recipient from a Group DM Channel | DELETE | `/channels/{{channelId}}/recipients/{{userId}}` | `conn_mod_def::GJ2V9ZeRiNQ::Okd3FJ6oQ76ylFwG17tI4Q` |
| Trigger a Channel’s Typing Indicator | POST | `/channels/{{channelId}}/typing` | `conn_mod_def::GJ2WQYrAck0::RbcASDApS1q1VGDWuf9kdg` |
| Update a Channel | PATCH | `/channels/{{channelId}}` | `conn_mod_def::GJ2WRllA008::j7_rHtFqRFSIiuaLIRffTg` |

### GuildMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild Member | GET | `/guilds/{{guildId}}/members/{{userId}}` | `conn_mod_def::GJ2WED6lS4M::IOIOGR_oRJGtEsLZP5aJDQ` |
| Get the Current User’s Guild Member | GET | `/users/@me/guilds/{{guildId}}/member` | `conn_mod_def::GJ2WGsDlt8Y::ppoAmNAgSQmLJE81yiaTIA` |
| List a Guild’s Members | GET | `/guilds/{{guildId}}/members` | `conn_mod_def::GJ2WL9_3B4c::qeGk9doXRGOhy4iuNBlODw` |
| Search a Guild’s Members | GET | `/guilds/{{guildId}}/members/search` | `conn_mod_def::GJ2WPde3BuM::DAWPfSEUTuyCIelZ_elGzQ` |
| Add a Guild Member | PUT | `/guilds/{{guildId}}/members/{{userId}}` | `conn_mod_def::GJ2V2JJQQGc::hoKvs_GNRRiMT8BKlyGDwg` |
| Remove a Guild Member | DELETE | `/guilds/{{guildId}}/members/{{userId}}` | `conn_mod_def::GJ2V93apuCo::b-w0_6cjQEq3Yd11ehMuXg` |
| Update a Guild Member | PATCH | `/guilds/{{guildId}}/members/{{userId}}` | `conn_mod_def::GJ2WSPzGDM0::hIDbRCcZT_W4a7eZL9S3aw` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Channel’s Private Archived Threads | GET | `/channels/{{channelId}}/threads/archived/private` | `conn_mod_def::GJ2WOBkMpSw::74r9jGw9Qmm_-UhGCbeHKg` |
| List a Channel’s Public Archived Threads | GET | `/channels/{{channelId}}/threads/archived/public` | `conn_mod_def::GJ2WOLSrEs8::uIPGQoq-SrCpu2IQJHVDiw` |
| List Active Threads in a Guild | GET | `/guilds/{{guildId}}/threads/active` | `conn_mod_def::GJ2WBk8xhXw::xkY8CCQpRp-EuyEAq_FlyQ` |
| List My Private Archived Threads in a Channel | GET | `/channels/{{channelId}}/users/@me/threads/archived/private` | `conn_mod_def::GJ2WNq57Y1E::srXdHuQERYe-bPVExXcCHw` |
| Search Threads in a Channel | GET | `/channels/{{channelId}}/threads/search` | `conn_mod_def::GJ2WQQB8pRs::iqs9Th5rRoGiV_eP7qx01A` |
| Create a Thread From a Message (in a Channel) | POST | `/channels/{{channelId}}/messages/{{messageId}}/threads` | `conn_mod_def::GJ2V7n8yn84::XsBwpKoXRT-j3Vt1AY9tVw` |

### WebhookMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Message | GET | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/{{messageId}}` | `conn_mod_def::GJ2WI-3Am1Y::0P7sBMR3RkW4uIebJ2Xngw` |
| Get the Original Webhook Message | GET | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/@original` | `conn_mod_def::GJ2WHXf4RFc::Ku41uUewQ6-D6b8_BQHRmA` |
| Delete a Webhook Message | DELETE | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/{{messageId}}` | `conn_mod_def::GJ2WAK0cuJI::EmAobimiSHa91N9u-LwLtw` |
| Delete the Original Webhook Message | DELETE | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/@original` | `conn_mod_def::GJ2V_Qvk3zY::TkjT-j1dTIOzightKcSp6w` |
| Update a Webhook Message | PATCH | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/{{messageId}}` | `conn_mod_def::GJ2WVVOpzQs::TMAobr4SRQqjYlLG-8NhQA` |
| Update Original Webhook Message | PATCH | `/webhooks/{{webhookId}}/{{webhookToken}}/messages/@original` | `conn_mod_def::GJ2WUZUBO_U::yxEEd-zmRFO_FoWHNWmVQg` |

### Lobbies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lobby | GET | `/lobbies/{{lobbyId}}` | `conn_mod_def::GJ2WGMO0av8::NKpTrFBnQLiKwpKO_ozW5A` |
| Create a Lobby | POST | `/lobbies` | `conn_mod_def::GJ2V6o7ngFI::dy3jLqLQQN2p2zw2MY6gSA` |
| Create or Join a Lobby | PUT | `/lobbies` | `conn_mod_def::GJ2V7AOd1no::sB3HGldnTuCz05tlAwacvg` |
| Edit a Lobby | PATCH | `/lobbies/{{lobbyId}}` | `conn_mod_def::GJ2WAp25L4E::8mOAVRx_T_yPtkVvdNVa3A` |
| Edit a Lobby’s Linked Channel | PATCH | `/lobbies/{{lobbyId}}/channel-linking` | `conn_mod_def::GJ2WA1tGrDE::CaSSIv0rQ1WwdGMHWO8MVQ` |
| Leave the Current User’s Lobby | DELETE | `/lobbies/{{lobbyId}}/members/@me` | `conn_mod_def::GJ2WJyD1AmM::BNsRjKbiQlG9GpHSTMJGCQ` |

### ThreadMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Thread Member (in a Channel) | GET | `/channels/{{channelId}}/thread-members/{{userId}}` | `conn_mod_def::GJ2WIUyrSbk::7Dd-MKZNTYiCDTQ770kkHw` |
| List a Thread’s Members | GET | `/channels/{{channelId}}/thread-members` | `conn_mod_def::GJ2WOd0ugLA::c6v9EOGMTAqbNRBHkFzt2g` |
| Add a Member to a Thread (Channel) | PUT | `/channels/{{channelId}}/thread-members/{{userId}}` | `conn_mod_def::GJ2V2xMz7dM::44het92sRemWJublll0tIA` |
| Join a Thread (Current User) | PUT | `/channels/{{channelId}}/thread-members/@me` | `conn_mod_def::GJ2WJhe-ymY::BixocxtGR6KmhjeEA0a5Sg` |
| Leave a Thread (Current User) | DELETE | `/channels/{{channelId}}/thread-members/@me` | `conn_mod_def::GJ2WJ6Y5JoQ::t6hKexwPQoW3I0zhekOmyQ` |
| Remove a Thread Member from a Channel Thread | DELETE | `/channels/{{channelId}}/thread-members/{{userId}}` | `conn_mod_def::GJ2V_n0BxDM::UOLz4lLLRCSJKkHsPXuk_g` |

### GuildTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild Template | GET | `/guilds/templates/{{code}}` | `conn_mod_def::GJ2WE63qu_4::hNPOtqcsRVW7NCk_LSeHwA` |
| List a Guild’s Templates | GET | `/guilds/{{guildId}}/templates` | `conn_mod_def::GJ2WM1DIW0k::Ik8uP4mDQdiHOPHinD9DQA` |
| Create a Guild Template | POST | `/guilds/{{guildId}}/templates` | `conn_mod_def::GJ2V6IwU1Rs::HM8PvqCtTwSelL-ylc9aPQ` |
| Delete a Guild Template | DELETE | `/guilds/{{guildId}}/templates/{{code}}` | `conn_mod_def::GJ2V-qvwJKo::UZ7pFHczQiGpgTGzL7I99g` |
| Sync a Guild Template | PUT | `/guilds/{{guildId}}/templates/{{code}}` | `conn_mod_def::GJ2WQCazJos::lFnDd37IQdGrzWZ8zITA-Q` |
| Update a Guild Template | PATCH | `/guilds/{{guildId}}/templates/{{code}}` | `conn_mod_def::GJ2WS7T2Dm4::h-C5P2koSSugLBHNCkojQQ` |

### GuildBans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild Ban | GET | `/guilds/{{guildId}}/bans/{{userId}}` | `conn_mod_def::GJ2WD19Xmhw::D4EfG6bZTM2OJbnmykd9Wg` |
| List a Guild’s Bans | GET | `/guilds/{{guildId}}/bans` | `conn_mod_def::GJ2WLQK85sc::SXoUHsNdQqO1SHJWn8aKyQ` |
| Ban a User from a Guild | PUT | `/guilds/{{guildId}}/bans/{{userId}}` | `conn_mod_def::GJ2V3BIxalw::qEeUL0FHReWFAl6gCVBJYg` |
| Bulk Ban Users From a Guild | POST | `/guilds/{{guildId}}/bulk-ban` | `conn_mod_def::GJ2V3ZeUTmE::4_qFYiDCTLGeRdl4ThS44A` |
| Unban a User From a Guild | DELETE | `/guilds/{{guildId}}/bans/{{userId}}` | `conn_mod_def::GJ2WQh5VGj4::_a1iNXIDQDC3JnmLwNevtQ` |

### GuildRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild's Role Member Counts | GET | `/guilds/{{guildId}}/roles/member-counts` | `conn_mod_def::GJ2WJJ7LXgQ::ti5kjwvUTw-Bxo_qvGeiVQ` |
| Bulk Update a Guild’s Role Positions | PATCH | `/guilds/{{guildId}}/roles` | `conn_mod_def::GJ2V4GBmbTs::ScMuCMIsS7WEagHsHWpiRw` |
| Create a Guild Role | POST | `/guilds/{{guildId}}/roles` | `conn_mod_def::GJ2V5oTa6sg::6AJQtKi7QCag68os0JNQIg` |
| Delete a Guild Role | DELETE | `/guilds/{{guildId}}/roles/{{roleId}}` | `conn_mod_def::GJ2V-JGox-M::pVyBs3b8QeqyK4OS3XatdA` |
| Update a Guild Role | PATCH | `/guilds/{{guildId}}/roles/{{roleId}}` | `conn_mod_def::GJ2WSbPow1o::LDzA-EwIStqGK1LI1xDtFQ` |

### GuildScheduledEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guild Scheduled Event | GET | `/guilds/{{guildId}}/scheduled-events/{{guildScheduledEventId}}` | `conn_mod_def::GJ2WEjqSIp0::xhU8Kb5ETYuxElbWzJdKNQ` |
| List a Guild’s Scheduled Events | GET | `/guilds/{{guildId}}/scheduled-events` | `conn_mod_def::GJ2WMeKtZMo::UO4H_0nvQqCTL45dqdbOLA` |
| Create a Guild Scheduled Event | POST | `/guilds/{{guildId}}/scheduled-events` | `conn_mod_def::GJ2V5v8cnaM::NFb4amoHQCKLgOa3DqcsOQ` |
| Delete a Guild Scheduled Event | DELETE | `/guilds/{{guildId}}/scheduled-events/{{guildScheduledEventId}}` | `conn_mod_def::GJ2V-RKqs6Q::ZP89x9FlQmG0jOU9KsPXyA` |
| Update a Guild Scheduled Event | PATCH | `/guilds/{{guildId}}/scheduled-events/{{guildScheduledEventId}}` | `conn_mod_def::GJ2WSkBcvKU::TRTdvQ_hTd6zfvo_d9fjsg` |

### ApplicationEmojis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application Emoji | GET | `/applications/{{applicationId}}/emojis/{{emojiId}}` | `conn_mod_def::GJ2WCHW-xhM::FK2mA952Rbuu-teOj822Rg` |
| List an Application’s Emojis | GET | `/applications/{{applicationId}}/emojis` | `conn_mod_def::GJ2WKOO86ls::U3hoL3sKTG6XJnbLPWlMmw` |
| Create an Application Emoji | POST | `/applications/{{applicationId}}/emojis` | `conn_mod_def::GJ2V4j5UPAQ::jlUKN7FfSK2Tk1J3rcPiaQ` |
| Delete an Application Emoji | DELETE | `/applications/{{applicationId}}/emojis/{{emojiId}}` | `conn_mod_def::GJ2V8ksGNVw::_fKrG3PySdeLi9O8q_4zrQ` |
| Update an Application Emoji | PATCH | `/applications/{{applicationId}}/emojis/{{emojiId}}` | `conn_mod_def::GJ2WRCUkGHc::3PxzCmgbQjejyMifkZAk2Q` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Application | GET | `/applications/{{applicationId}}` | `conn_mod_def::GJ2WB1g4rOE::zI8ZYwktSUy_6IBKxtMc3A` |
| Get My Application | GET | `/applications/@me` | `conn_mod_def::GJ2WGkNyvIs::nQAAxpCRRLC-2eYEpGyBeA` |
| Update an Application | PATCH | `/applications/{{applicationId}}` | `conn_mod_def::GJ2WQojidOc::_03BGeb9RbqVT2RTfIKf-Q` |
| Update an Application’s Role Connections Metadata | PUT | `/applications/{{applicationId}}/role-connections/metadata` | `conn_mod_def::GJ2WRLPYfcs::JxIw_aq9SV-w5IGZ08Deqg` |
| Update My Application | PATCH | `/applications/@me` | `conn_mod_def::GJ2WT6TnM_Y::u_s48-42SWGky4wxcf9LpQ` |

This lists 90 of 229 actions. For anything not here, call `search_one_platform_actions` with platform `discord`. The full catalog is at https://www.withone.ai/knowledge/discord.

## When a call fails

The error comes from Discord, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/discord

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
