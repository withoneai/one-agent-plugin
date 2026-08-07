---
name: sendbird
description: Sendbird is an AI customer experience and communications platform that provides chat, voice, video, support, and AI agent capabilities, allowing enterprises to build personalized customer interactions and service experiences across the customer journey. Read and write Sendbird data through One: users, groupchannels, messages, openchannels, bots, pushconfigurations and more, 262 actions with real parameter documentation. Use whenever the user asks to look something up in Sendbird, create or update a record there, or build code against the Sendbird API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sendbird
  generated-from: one-knowledge-base
---

# Sendbird through One

Sendbird is an AI customer experience and communications platform that provides chat, voice, video, support, and AI agent capabilities, allowing enterprises to build personalized customer interactions and service experiences across the customer journey.

One exposes Sendbird through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sendbird` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sendbird is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sendbird account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/v3/users/{{userId}}` | `conn_mod_def::GMMGW26Rfxo::SKigkBerSoGx2N2tsmo5iA` |
| Get a User's Push Notification Preferences | GET | `/v3/users/{{userId}}/push_preference` | `conn_mod_def::GMMGXMQhktQ::rAsP340SSQWAGqwjUlo-lQ` |
| Get a User's Push Notification Preferences for a Channel | GET | `/v3/users/{{userId}}/push_preference/{{channelUrl}}` | `conn_mod_def::GMMGXMCIwVg::8meXFtnwQY6XTRj9zvS4Fg` |
| Get a User's Unread Item Counts | GET | `/v3/users/{{userId}}/unread_item_count` | `conn_mod_def::GMMGXBlVjwU::ugJY1dbMQ_KD_NwRIBj40A` |
| Get a User's Unread Message Count | GET | `/v3/users/{{userId}}/unread_message_count` | `conn_mod_def::GMMGXL26p6E::fbXW86dOSQKEPSFuTAYLyQ` |
| Get Number of Channels With Unread Messages for a User | GET | `/v3/users/{{userId}}/unread_channel_count` | `conn_mod_def::GMMGXBf6G0k::zq6_OnUcRr66K2WFrw1V9Q` |
| List a User's Registration or Device Tokens | GET | `/v3/users/{{userId}}/push/{{tokenType}}` | `conn_mod_def::GMMGXdxzV10::yal8ssNSQBuvC7OSR8rSdg` |
| List Blocked By and Blocking Users for a User | GET | `/v3/users/{{userId}}/block` | `conn_mod_def::GMMGXY7d7GY::4rzETHWOR0acmRLBLhhrew` |
| List Calls Users | GET | `/v1/users` | `conn_mod_def::GMMGXlaVUmY::1STPkorhSLWUpTbGIvx5UA` |
| List Users | GET | `/v3/users` | `conn_mod_def::GMMGXnKwK7A::7vGcERLgT8GlGEIkLiFbYg` |
| Retrieve a User's Call Summary | GET | `/v1/users/{{userId}}/call_summary` | `conn_mod_def::GMMGYDwYsng::pxJEM10MRNmPcYPonertow` |
| Retrieve a User's Push Tokens | GET | `/v1/users/{{userId}}/push/{{tokenType}}` | `conn_mod_def::GMMGX5l7iwc::brTuIsDPReyy3NCk_safCg` |

21 more Users actions are available through search.

### GroupChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if a User Is a Member of a Group Channel | GET | `/v3/group_channels/{{channelUrl}}/members/{{userId}}` | `conn_mod_def::GMMGTjY8GVg::EaJl3n0MSNWq7-oGOwnDuw` |
| Get a Banned Member of a Group Channel | GET | `/v3/group_channels/{{channelUrl}}/ban/{{bannedUserId}}` | `conn_mod_def::GMMGTrLf-Yw::jcuntF2HTcSEA2wZ0APntw` |
| Get a Group Channel | GET | `/v3/group_channels/{{channelUrl}}` | `conn_mod_def::GMMGTtTo-GY::ZdhNfG7ZSJSojfns-0Q0lg` |
| Get a Muted Member in a Group Channel | GET | `/v3/group_channels/{{channelUrl}}/mute/{{mutedUserId}}` | `conn_mod_def::GMMGTrhwZIQ::2xDVhGw3RGmHSrhM_SnA1w` |
| Get Number of Group Channels by Join Status for a User | GET | `/v3/users/{{userId}}/group_channel_count` | `conn_mod_def::GMMGXCIlYCo::xnt1bbgkQV6aZH7aJ98W_w` |
| Get Number of Unread Messages per Member in a Group Channel | GET | `/v3/group_channels/{{channelUrl}}/messages/unread_count` | `conn_mod_def::GMMGT2CYwIE::rSF0RHaiROSF4cxo7eMHZA` |
| List a User's Group Channels | GET | `/v3/users/{{userId}}/my_group_channels` | `conn_mod_def::GMMGXeeefBg::s3GfjWp1RESKQMuMf7zopw` |
| List Group Channels | GET | `/v3/group_channels` | `conn_mod_def::GMMGUEFf8mo::A7Nd7SuSTa-gAM98e3QJ8w` |
| Accept an Invitation to a Group Channel | PUT | `/v3/group_channels/{{channelUrl}}/accept` | `conn_mod_def::GMMGTZg-yIo::ucSYGu0pTMezO2l4kMXZVg` |
| Ban a Member from a Group Channel | POST | `/v3/group_channels/{{channelUrl}}/ban` | `conn_mod_def::GMMGTZ7cXug::QZ0xqeYlSs-EZfuhPoQz5A` |
| Create Group Channels | POST | `/v3/group_channels` | `conn_mod_def::GMMGTh-ytsE::B2_irst_S5uyG3ZLAQvDag` |
| Decline an Invitation for a Group Channel | PUT | `/v3/group_channels/{{channelUrl}}/decline` | `conn_mod_def::GMMGTigmEHU::lTn5SEeHRBOb1-Y5Sqi8lQ` |

18 more GroupChannels actions are available through search.

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message from a Channel | GET | `/v3/{{channelType}}/{{channelUrl}}/messages/{{messageId}}` | `conn_mod_def::GMMGSaYbpN4::bWNGKw9CRSqNgAS63kjlcA` |
| Get the Total Number of Messages in a Channel | GET | `/v3/{{channelType}}/{{channelUrl}}/messages/total_count` | `conn_mod_def::GMMGSZm4Xsk::tkFfyEEVQUm98TDFNqRWIQ` |
| List Messages for a Channel | GET | `/v3/{{channelType}}/{{channelUrl}}/messages` | `conn_mod_def::GMMGSkwNKW0::zc5eMJNESFWZQq_Rpb_WUw` |
| List Threaded Replies of a Parent Message in a Channel | GET | `/v3/{{channelType}}/{{channelUrl}}/messages` | `conn_mod_def::GMMGSld0eNM::WFvKvZJwSq-vSgKpaR7zWg` |
| Search Messages | GET | `/v3/search/messages` | `conn_mod_def::GMMGWj9W9pA::s7XMyK7GRNGy_tEJDvOAGg` |
| Add Metadata to a Message | POST | `/v3/{{channelType}}/{{channelUrl}}/messages/{{messageId}}/sorted_metaarray` | `conn_mod_def::GMMGSODUyeY::sEsV9jSiRjmLZTqAxl56QQ` |
| Delete a Message from a Channel | DELETE | `/v3/{{channelType}}/{{channelUrl}}/messages/{{messageId}}` | `conn_mod_def::GMMGSSGKjMs::jZW0bll7S-SAMosglkpxrw` |
| Delete a Reply from a Channel | DELETE | `/v3/{{channelType}}/{{channelUrl}}/messages/{{messageId}}` | `conn_mod_def::GMMGSYgbcDM::hcf-vQe1QGmNTRXFIYJgDw` |
| Migrate Messages for a Channel | POST | `/v3/migration/{{targetChannelUrl}}` | `conn_mod_def::GMMGU0gG_cU::fUTmDXmnRM6PZuYBAeio9A` |
| Pin a Sending Message in a Channel | POST | `/v3/{{channelType}}/{{channelUrl}}/messages` | `conn_mod_def::GMMGShGQsWc::VI4_D2T-QAaX4cVhbiKA1A` |
| Pin an Existing Message in a Channel | POST | `/v3/{{channelType}}/{{channelUrl}}/messages/{{messageId}}/pin` | `conn_mod_def::GMMGSh4UkY8::IALX5JvhQ-CYvU8KLzCsJA` |
| Reply to a Message in a Channel | POST | `/v3/{{channelType}}/{{channelUrl}}/messages` | `conn_mod_def::GMMGStXlhxg::Yr0EgEl-TQS1npY6IxO6EA` |

5 more Messages actions are available through search.

### OpenChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Muted Participant in an Open Channel | GET | `/v3/open_channels/{{channelUrl}}/mute/{{mutedUserId}}` | `conn_mod_def::GMMGVFEmii8::Q_w52x9rSIaam1Y-HIQCbA` |
| Get an Open Channel | GET | `/v3/open_channels/{{channelUrl}}` | `conn_mod_def::GMMGVHv0Bvc::x6tUZEBmTOaO6hYdMqupQg` |
| List Banned Participants in an Open Channel | GET | `/v3/open_channels/{{channelUrl}}/ban` | `conn_mod_def::GMMGVFq1dFo::Rulf4Dc-Q_qg3E4aVyl4qg` |
| List Open Channels | GET | `/v3/open_channels` | `conn_mod_def::GMMGVGV8eJo::EYIGdd69TEyrC14CjNTcyw` |
| List Pinned Messages for All Open Channels | GET | `/v3/open_channels` | `conn_mod_def::GMMGVPZNwV0::xgyU9gUhTxGb3ace3n-lKA` |
| List Pinned Messages for an Open Channel | GET | `/v3/open_channels/{{channelUrl}}` | `conn_mod_def::GMMGVPYtasA::o3i0MctWSyqPM9h8TcTc9Q` |
| Ban a Participant from an Open Channel | POST | `/v3/open_channels/{{channelUrl}}/ban` | `conn_mod_def::GMMGU8asGyE::LumLv18fRHyw9oTY1ZKv8A` |
| Create an Open Channel | POST | `/v3/open_channels` | `conn_mod_def::GMMGU8icOec::uqBbK89VTRmSKf_5RJteMA` |
| Delete an Open Channel | DELETE | `/v3/open_channels/{{channelUrl}}` | `conn_mod_def::GMMGU9MF_1Y::uZc2dcbdTpe8RRGczotr2g` |
| Freeze an Open Channel | PUT | `/v3/open_channels/{{channelUrl}}/freeze` | `conn_mod_def::GMMGU-XIH5M::1r_XYR8UQoGFKeVSbun2LA` |
| Mute a Participant in an Open Channel | POST | `/v3/open_channels/{{channelUrl}}/mute` | `conn_mod_def::GMMGVR2jI3E::jtzxS-plSV-cZx0WDxYGhQ` |
| Unban a Participant from an Open Channel | DELETE | `/v3/open_channels/{{channelUrl}}/ban/{{bannedUserId}}` | `conn_mod_def::GMMGVYmulY8::g5BexypGRF6wAEC4eiS0BA` |

2 more OpenChannels actions are available through search.

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot | GET | `/v3/bots/{{botUserid}}` | `conn_mod_def::GMMGR97eoXA::xZyIDM_pTiiwuj9njPQ5kQ` |
| List Bots | GET | `/v3/bots` | `conn_mod_def::GMMGSF_d6T8::3AlhJgdiRdKvFEni6t98Dw` |
| Create a Bot | POST | `/v3/bots` | `conn_mod_def::GMMGR-iGN8Q::noMEn4CQTw-kJSuX3Qsl_w` |
| Delete a Bot | DELETE | `/v3/bots/{{botUserid}}` | `conn_mod_def::GMMGR9zWACc::TyGL7id0TTSLwFLEpU9vhg` |
| Join Channels for a Bot | POST | `/v3/bots/{{botUserid}}/channels` | `conn_mod_def::GMMGSG-nDV8::NPsiFBuiTWG1nSyZTEPrSA` |
| Send a Bot Message | POST | `/v3/bots/{{botUserid}}/send` | `conn_mod_def::GMMGSGb8wg8::5oRP-nqbSnSOEQE-HYkCbw` |
| Send Stream Using Bot | POST | `/v3/bots/{{botUserid}}/send_stream` | `conn_mod_def::GMMGSGWKBnc::5KLBGLwwRpy7CKxb8Xs8tA` |
| Update a Bot | PUT | `/v3/bots/{{botUserid}}` | `conn_mod_def::GMMGSG-spCY::9kT3mAOwTxqKOxHNmubXjA` |

### PushConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Push Configuration | GET | `/v3/applications/push/{{pushType}}/{{providerId}}` | `conn_mod_def::GMMGQ8hiMSQ::5yysK5mBTwqYsrK6Trc2uw` |
| List Push Configurations | GET | `/v3/applications/push/{{pushType}}` | `conn_mod_def::GMMGRdXkTo0::VAs-d-YXSKGGD5TjJ-CpUg` |
| Add an HMS Push Configuration | POST | `/v3/applications/push/huawei` | `conn_mod_def::GMMGQlWxiJc::DYPFKX6YRMqjoJK9rgPTNQ` |
| Register a .p12 Certificate for APNs Push Configuration | POST | `/v3/applications/push/apns` | `conn_mod_def::GMMGRdwpl2g::SJR4VmwSRtS-_ahqoU-8Kg` |
| Register a Service Account Key for FCM Push Configuration | PUT | `/v3/applications/push/fcm/{{providerId}}` | `conn_mod_def::GMMGRk-1W3A::rA4coIbkQiywxwbuIQ-NSQ` |
| Register an FCM Service Account Key | POST | `/v3/applications/push/fcm` | `conn_mod_def::GMMGRlX9Jfw::N7D-Hpu4T56ehS0nGKvVoA` |
| Remove a Push Configuration | DELETE | `/v3/applications/push/{{pushType}}/{{providerId}}` | `conn_mod_def::GMMGRk91inI::hAfxw-y5SH2XLc2WQOgxoQ` |

### ScheduledMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scheduled Messages | GET | `/v3/scheduled_messages` | `conn_mod_def::GMMGWjutNOw::QZmIQvHMSbeUG2C56EOXLw` |
| View a Scheduled Message in a Group Channel | GET | `/v3/group_channels/{{channelUrl}}/scheduled_messages/{{scheduledMessageId}}` | `conn_mod_def::GMMGUh35wf4::cJ0ge-T5RSCkg6lAtrcgDQ` |
| View Number of Scheduled Messages | GET | `/v3/scheduled_messages/count` | `conn_mod_def::GMMGWgIho2s::6W_leZmfQeao5A95qkdX3A` |
| Cancel a Scheduled Message in a Group Channel | DELETE | `/v3/group_channels/{{channelUrl}}/scheduled_messages/{{scheduledMessageId}}` | `conn_mod_def::GMMGThw9fqc::PRoYOxo1S_aauxIDsWzY8w` |
| Create a Scheduled Message for a Group Channel | POST | `/v3/group_channels/{{channelUrl}}/scheduled_messages` | `conn_mod_def::GMMGTiACteU::6JTN8bTtQrilDQ6qMSIpTg` |
| Send Now a Scheduled Message in a Channel | POST | `/v3/{{channelType}}/{{channelUrl}}/scheduled_messages/{{scheduledMessageId}}/send_now` | `conn_mod_def::GMMGSthV2vE::VIA-W-TnSHi7wJBzIiJS0Q` |
| Update a Scheduled Message for a Group Channel | PUT | `/v3/group_channels/{{channelUrl}}/scheduled_messages/{{scheduledMessageId}}` | `conn_mod_def::GMMGUiALcnc::7CSHxJeXSGKafmH9gEd8UQ` |

### LiveEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Live Events | GET | `/v1/live-events` | `conn_mod_def::GMMGUrIRU8Y::Gn46ubT0Tf-FQlPl7l3KXg` |
| Retrieve a Live Event | GET | `/v1/live-events/{{liveEventId}}` | `conn_mod_def::GMMGUpoa4pI::Q7y7zS54TwOC9VKmK6XmDA` |
| Create a Live Event | POST | `/v1/live-events` | `conn_mod_def::GMMGUp6uZdM::pXuZ1FPRT8u5JAtySzMmwQ` |
| End a Live Event | DELETE | `/v1/live-events/{{liveEventId}}` | `conn_mod_def::GMMGUrljM1Q::K-q8ep0pT36SnxotPFlaHA` |
| Set a Live Event to Ready | POST | `/v1/live-events/{{liveEventId}}/ready` | `conn_mod_def::GMMGU0Gwqgo::uHUKEcr2QlOJ9h8a1TrOVw` |
| Start a Live Event | POST | `/v1/live-events/{{liveEventId}}/start` | `conn_mod_def::GMMGUzkHLis::1OaOUtfFQbeYF9Jqpk3GNw` |
| Update a Live Event | PUT | `/v1/live-events/{{liveEventId}}` | `conn_mod_def::GMMGU0h0W_U::qTh2gr8ARIOtHsnKRJZBrQ` |

### Polls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Poll | GET | `/v3/polls/{{pollId}}` | `conn_mod_def::GMMGVplMnAU::WTo0jKTPSBqbJc3CgDPBsw` |
| List Polls | GET | `/v3/polls` | `conn_mod_def::GMMGVp6CfBw::E-k38wn-Ro-S_DkqkUfdNA` |
| Cast or Cancel a Vote for a Poll | PUT | `/v3/polls/{{pollId}}/vote` | `conn_mod_def::GMMGVieRsGs::4gYNd9PtS1aF2JXQwo6URg` |
| Close a Poll | PUT | `/v3/polls/{{pollId}}/close` | `conn_mod_def::GMMGVhYTwmw::vovN0S1ySqShRcEIvGV1rQ` |
| Create a Poll | POST | `/v3/polls` | `conn_mod_def::GMMGVhET50Q::kCPU8XpBRYKWSNoutxUlRA` |
| Delete a Poll | DELETE | `/v3/polls/{{pollId}}` | `conn_mod_def::GMMGVpZNImA::mX36zlUeSuSLjeZNyw-XXw` |
| Update a Poll | PUT | `/v3/polls/{{pollId}}` | `conn_mod_def::GMMGVxkKebU::p3f_VIj9Th2_hTjhMzremg` |

### Rooms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rooms | GET | `/v1/rooms` | `conn_mod_def::GMMGWX6jDqM::5ITLfHQjReik5-14GJ2lLg` |
| Retrieve a Room | GET | `/v1/rooms/{{roomId}}` | `conn_mod_def::GMMGWVRxjxk::-2z01vpOQYm9rYyGF93zpQ` |
| Create a Room | POST | `/v1/rooms` | `conn_mod_def::GMMGWNah-t0::bQ7IBEbTRQuyxpM7oupspg` |
| Delete a Room | DELETE | `/v1/rooms/{{roomId}}` | `conn_mod_def::GMMGWOkwzeM::dC-1NFnPSqaExjyNrzFsvg` |
| Delete Custom Items of a Room | DELETE | `/v1/rooms/{{roomId}}/custom_items` | `conn_mod_def::GMMGWVi5UKs::AxE0Qm98QuKZGKLnsnmPAA` |
| Update Custom Items for a Room | PUT | `/v1/rooms/{{roomId}}/custom_items` | `conn_mod_def::GMMGWfye8_g::EMncZHTgQT6Waw9HISL60g` |

This lists 90 of 262 actions. For anything not here, call `search_one_platform_actions` with platform `sendbird`. The full catalog is at https://www.withone.ai/knowledge/sendbird.

## When a call fails

The error comes from Sendbird, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sendbird

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
