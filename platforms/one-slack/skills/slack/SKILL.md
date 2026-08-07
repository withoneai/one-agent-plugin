---
name: slack
description: Slack is a messaging platform for teams that facilitates communication through channels, direct messages, and integrations with other tools, enhancing productivity and collaboration. Read and write Slack data through One: adminconversations, conversations, adminusers, chat, files, appsdatastore and more, 306 actions with real parameter documentation. Use whenever the user asks to look something up in Slack, create or update a record there, or build code against the Slack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: slack
  generated-from: one-knowledge-base
---

# Slack through One

Slack is a messaging platform for teams that facilitates communication through channels, direct messages, and integrations with other tools, enhancing productivity and collaboration.

One exposes Slack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `slack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Slack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Slack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AdminConversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Exclude Channels From Slack AI (Admin) | GET | `/admin.conversations.bulkSetExcludeFromSlackAi` | `conn_mod_def::GJ7H4_oUtyY::alod7s-TQmGX8Xk5kva0gA` |
| Archive an Enterprise Channel (Admin) | POST | `/admin.conversations.archive` | `conn_mod_def::GJ7H44RFK00::oilIQlqKRVSZJYiojV_S6A` |
| Bulk Archive Channels (Admin) | POST | `/admin.conversations.bulkArchive` | `conn_mod_def::GJ7H43eJ2w8::xLUm-4e8TgS-FOsyi8X5zg` |
| Bulk Delete Conversations (Enterprise Admin) | POST | `/admin.conversations.bulkDelete` | `conn_mod_def::GJ7H4_zHmr8::7zXHMEICST6UcAUGHOj4UQ` |
| Bulk Move Channels to Another Team (Enterprise Admin) | POST | `/admin.conversations.bulkMove` | `conn_mod_def::GJ7H5ATjHW0::snrgSS-8SYq_onPZODh56Q` |
| Convert a Private Channel to Public (Enterprise Admin) | POST | `/admin.conversations.convertToPublic` | `conn_mod_def::GJ7H4_q-KOs::uvXxxos-SJSHNvRDbJeREA` |
| Convert a Public Channel to Private (Enterprise Admin) | POST | `/admin.conversations.convertToPrivate` | `conn_mod_def::GJ7H5AqxTws::CtCsjgipQC-C1fpQL4qwzg` |
| Create a Salesforce Channel for an Object (Admin) | POST | `/admin.conversations.createForObjects` | `conn_mod_def::GJ7H5J7KCso::fdVb9YsTRk6yzm-QPXOD5g` |
| Create an Admin Conversation (Channel) | POST | `/admin.conversations.create` | `conn_mod_def::GJ7H5Hw8uQo::OXA-sw4uSXuqQ6Oq9sqTSA` |
| Delete an Enterprise Channel (Admin) | POST | `/admin.conversations.delete` | `conn_mod_def::GJ7H5H2ZiSI::LQ1_IrtZRbmUbpfiPG_qiw` |
| Disconnect a Shared Channel From Workspaces (Enterprise Admin) | POST | `/admin.conversations.disconnectShared` | `conn_mod_def::GJ7H5HlsJsU::KfJaPXFWRqiQpkfbpSGJkw` |
| Get a Channel’s Conversation Preferences (Enterprise Admin) | POST | `/api/admin.conversations.getConversationPrefs` | `conn_mod_def::GJ7H5RdI-GY::E8Yv20EmTBe29Lzfu9ZTVg` |

13 more AdminConversations actions are available through search.

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Decline a Slack Connect Channel Invite | GET | `/conversations.declineSharedInvite` | `conn_mod_def::GJ7H9Y1lZSM::Qi7G3XRESc2T72Gjk0OuRA` |
| Fetch a Conversation’s Message History (conversations.history) | GET | `/conversations.history` | `conn_mod_def::GJ7H9XYEBzI::FkfMtDsaTzKxb92jFEqxHg` |
| Invite a User to a Slack Connect Channel (conversations.inviteShared) | GET | `/conversations.inviteShared` | `conn_mod_def::GJ7H9hrsd3o::4vFilJ1TSo6TFfskwh2vIA` |
| List Conversations (Channels) in a Workspace | GET | `/conversations.list` | `conn_mod_def::GJ7H9zmRFIk::1RxrzeicS-ibnXF4sFC5Ww` |
| Retrieve a Conversation Thread’s Replies | GET | `/conversations.replies` | `conn_mod_def::GJ7H99BNZZY::YUA8ceLYSMmIEPSjoukdNg` |
| Retrieve Conversation Info | GET | `/conversations.info` | `conn_mod_def::GJ7H9ghDiFM::hgg9QZrgStig4KN5Uits5Q` |
| Accept a Slack Connect Channel Invite | POST | `/conversations.acceptSharedInvite` | `conn_mod_def::GJ7H9OmS3wk::1Yz4IrqSThysoaI4ul0Vpg` |
| Approve a Requested Slack Connect Invite (Shared Invite) | POST | `/conversations.requestSharedInvite.approve` | `conn_mod_def::GJ7H-CQPHRM::s7jJS39NQjC8oxYT7xxxvQ` |
| Approve a Slack Connect Shared Channel Invite | POST | `/conversations.approveSharedInvite` | `conn_mod_def::GJ7H9O6fNTE::PE35v-TrQi-M69N1hmT39A` |
| Archive a Conversation | POST | `/conversations.archive` | `conn_mod_def::GJ7H9OAx9UE::k_cI74hpQu6RioRT-9CdXQ` |
| Close a Direct Message Conversation | POST | `/conversations.close` | `conn_mod_def::GJ7H9WC7DNo::SNNAy6uETPejoshiB86y6Q` |
| Create a Channel (Conversation) | POST | `/conversations.create` | `conn_mod_def::GJ7H9W0knfA::hB-WcuIKSfSBrYG8fRiTAQ` |

11 more Conversations actions are available through search.

### AdminUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guest User’s Expiration (Admin) | GET | `/admin.users.getExpiration` | `conn_mod_def::GJ7H6pDE6GI::Jo1nl15eRnuWFfvgqAxiAg` |
| Assign an Enterprise User to a Workspace (admin.users.assign) | POST | `/admin.users.assign` | `conn_mod_def::GJ7H6o5vUZ8::DnAY9-OTQ8iHI_Yzza3e_g` |
| Invite a User to a Workspace (Admin) | POST | `/admin.users.invite` | `conn_mod_def::GJ7H6pNT_9I::ebYjmcOYRDqzfCpZrJ9VbQ` |
| List Workspace Users (Admin) | POST | `/admin.users.list` | `conn_mod_def::GJ7H6yFXXjY::ZuAI39qlQQaItzy6yCrLug` |
| Remove a User from a Workspace (Admin) | POST | `/admin.users.remove` | `conn_mod_def::GJ7H6w88Gjk::6FduTK3YR3q-GPlRvDjBow` |
| Set a Guest User’s Expiration (Admin) | POST | `/admin.users.setExpiration` | `conn_mod_def::GJ7H7C9hgls::p-Lqwq02Twq2WpGKlTJZUA` |
| Set a User to Regular (Admin) | POST | `/admin.users.setRegular` | `conn_mod_def::GJ7H7CjqR-k::LlsZi-1_Q0GXkTzcDL0uhw` |
| Set a Workspace or Org Admin for a User (admin.users.setAdmin) | POST | `/admin.users.setAdmin` | `conn_mod_def::GJ7H65OiDS8::3WgW_JkbSjW6Wye_ZwSqRg` |
| Set a Workspace or Org Owner for a User (Admin) | POST | `/admin.users.setOwner` | `conn_mod_def::GJ7H7BlMfBk::ossnLXW3RL6yy2HNa3H3_A` |

### Chat

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Message Permalink (chat.getPermalink) | GET | `/chat.getPermalink` | `conn_mod_def::GJ7H85X11eQ::yuv72_aqQiWe41GP4rPp_Q` |
| Append to a Streaming Message | POST | `/chat.appendStream` | `conn_mod_def::GJ7H8u7r8HM::IuduJEKPQ_OuNeS6FAZbKg` |
| Delete a Message (chat.delete) | POST | `/chat.delete` | `conn_mod_def::GJ7H8xC4WPE::B6LHdJ4ATbSoAgoHwrFY8g` |
| Delete a Scheduled Message (Chat) | POST | `/chat.deleteScheduledMessage` | `conn_mod_def::GJ7H85CUkI0::EK7uUodTS5ORo2F8WB7t4A` |
| Provide Custom Unfurl Behavior for User-Posted URLs (chat.unfurl) | POST | `/chat.unfurl` | `conn_mod_def::GJ7H9HXJoS8::rLEWpI-mRw--lT0hj3dSGQ` |
| Schedule a Message in a Channel | POST | `/chat.scheduleMessage` | `conn_mod_def::GJ7H9ERx2yI::jbqXWpp7Sq-PevPmi3Hl_A` |
| Send an Ephemeral Message to a User in a Channel (chat.postEphemeral) | POST | `/chat.postEphemeral` | `conn_mod_def::GJ7H83x9QE0::8TpWx6ciTuOEc_9hMTLPCA` |
| Start a Streaming Conversation (chat.startStream) | POST | `/chat.startStream` | `conn_mod_def::GJ7H9DE_39A::OWxnhSm_QRWa9SVC-3A5bA` |
| Stop a Streaming Conversation Message | POST | `/chat.stopStream` | `conn_mod_def::GJ7H9CTBRgQ::E9rGQxCQR0iOoZIWIUwMrg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Info | GET | `/files.info` | `conn_mod_def::GJ7H-lGozYM::Hh9bZWIYQOGOygKWqMtAog` |
| List Team Files | GET | `/files.list` | `conn_mod_def::GJ7H-l9eZ7I::37IWoCi-TGygVZOVv-Dxfw` |
| Search Files | GET | `/search.files` | `conn_mod_def::GJ7IAbu8ZtE::Eii240c1SZGEC2dOO_xQbA` |
| Complete an External File Upload (Finalize & Share) | POST | `/files.completeUploadExternal` | `conn_mod_def::GJ7H-cL9hvE::Zne1lr0oSwyLQnymYAlQJw` |
| Delete a File | POST | `/files.delete` | `conn_mod_def::GJ7H-cFhjEM::jCKOWeF2TXOkS6u0E2ZCtw` |
| Enable Public Sharing for a File (Generate Public URL) | POST | `/files.sharedPublicURL` | `conn_mod_def::GJ7H-_BCpUc::nr1uPn5TTCCz6bPU2NArUA` |
| Get an External File Upload URL | POST | `/files.getUploadURLExternal` | `conn_mod_def::GJ7H-k3DemE::4J-O_e5uTASvZtkMxJADSQ` |
| Revoke a File’s Public URL | POST | `/files.revokePublicURL` | `conn_mod_def::GJ7H-xkYYsg::CtAMMsNnRSCtBArdF4ahYA` |
| Upload a File (Deprecated) | POST | `/files.upload` | `conn_mod_def::GJ7H-921ibY::o1d7SEpyRJGr_yQa3mEIag` |

### AppsDatastore

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Delete Items from an App Datastore | POST | `/apps.datastore.bulkDelete` | `conn_mod_def::GJ7H7noa0zw::WQW7Xs3GT06DBD5-rLGTXw` |
| Bulk Get Items from an App Datastore | POST | `/apps.datastore.bulkGet` | `conn_mod_def::GJ7H7iDPWOQ::_EzVEFHaTUeQptmc3Y7nEw` |
| Count Matching Items in an App Datastore | POST | `/apps.datastore.count` | `conn_mod_def::GJ7H7isA7i8::DhKhywY8Rr6THgw42iCndg` |
| Create or Replace a Workflow App Datastore Item | POST | `/apps.datastore.put` | `conn_mod_def::GJ7H7vBdV04::nPeSnD5eQE26Xh0nL71E8g` |
| Delete a Datastore Item (Workflow Apps Only) | POST | `/apps.datastore.delete` | `conn_mod_def::GJ7H7uPE9mg::ZwGOySKPRlyWFtkU2ykGgA` |
| Get a Datastore Item (Workflow Apps Only) | POST | `/apps.datastore.get` | `conn_mod_def::GJ7H7uLTJTM::XbDcpTOhQ4aQnrLVs79kKQ` |
| Query a Workflow App Datastore for Items | POST | `/apps.datastore.query` | `conn_mod_def::GJ7H7up-wxE::KNG4L-r-S8u0X0PBxhoVdA` |
| Update (or Create) an App Datastore Item | POST | `/apps.datastore.update` | `conn_mod_def::GJ7H7uww8vE::apeJC_FnS6i31Dfyyu44Vg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete the Authenticated User’s Profile Photo (users.deletePhoto) | GET | `/users.deletePhoto` | `conn_mod_def::GJ7IBJFdHj4::8KFe0xPMRBycLJsugU21Zg` |
| Get a User’s Info | GET | `/users.info` | `conn_mod_def::GJ7IBRMr_NI::HS7RT1TWSAyGfY6mLzCQBw` |
| Get a User’s Presence | GET | `/users.getPresence` | `conn_mod_def::GJ7IBICt6ag::f5jlXfrAQIihMIYEq-8P-A` |
| List Workspace Users | GET | `/users.list` | `conn_mod_def::GJ7IBQjys4M::0ZFuc5nOQAuLPd7qBVmGZA` |
| Look Up a User by Email | GET | `/users.lookupByEmail` | `conn_mod_def::GJ7IBRRLGLg::lT5nMpjVRey1VPf51Si_TQ` |
| Mark Authenticated User as Active (Deprecated / No-Op) | POST | `/users.setActive` | `conn_mod_def::GJ7IBYFSVs8::5A9ophpmSvisHLvZHyjyPg` |
| Set a User’s Profile Photo (users.setPhoto) | POST | `/users.setPhoto` | `conn_mod_def::GJ7IBX0JDQc::Ms3o8Z4jQLq9mkWYc8zpgw` |
| Set the Calling User’s Presence (users.setPresence) | POST | `/users.setPresence` | `conn_mod_def::GJ7IBYtarHw::JL646tcWR8uX6MywrZ9gZQ` |

### RemoteFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Remote Files | GET | `/files.remote.list` | `conn_mod_def::GJ7H-yKGOnU::p-hIiSc0Q_KpIgjs8zxzsA` |
| Retrieve Remote File Info | GET | `/files.remote.info` | `conn_mod_def::GJ7H-pefXpc::CpLdVh2QTG-ZuNTVgJm3Cw` |
| Share a Remote File to Channels | GET | `/files.remote.share` | `conn_mod_def::GJ7H-2NTYAE::_5cyTWNIQXWBKKI7AvC-QA` |
| Add a Remote File (Upsert) | POST | `/files.remote.add` | `conn_mod_def::GJ7H-klPMfs::4fMb5MbsRVCqFd4lE9Xweg` |
| Remove a Remote File | POST | `/files.remote.remove` | `conn_mod_def::GJ7H-wKMAdQ::63ACLLAORTilACC7wyA-VA` |
| Update a Remote File | POST | `/files.remote.update` | `conn_mod_def::GJ7H-xHms7o::DkgI8JVjQq2qWOA6fsakjQ` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Groups | GET | `/usergroups.list` | `conn_mod_def::GJ7IA-1rrsI::FI2c3VWgRka20y6ZwrgrRg` |
| List Users in a User Group | GET | `/usergroups.users.list` | `conn_mod_def::GJ7IA-VP-14::1cTj5zRQQaWTL8kjVVaZfA` |
| Create a User Group | POST | `/usergroups.create` | `conn_mod_def::GJ7IA24KRcE::ihsUzK0TSPGAYW_DBAtwow` |
| Disable a User Group | POST | `/usergroups.disable` | `conn_mod_def::GJ7IA-W3NCg::04jkvKqPS7OjUkXz4kK8kQ` |
| Enable a User Group | POST | `/usergroups.enable` | `conn_mod_def::GJ7IA_iVCQo::dZHgXFEsSHWa-9z0h-US6Q` |
| Update a User Group | POST | `/usergroups.update` | `conn_mod_def::GJ7IBBNnzXg::2y9Yi8GaStSP5qvbu3xfIg` |

### AdminTeamsSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Workspace’s Default Channels | GET | `/admin.teams.settings.setDefaultChannels` | `conn_mod_def::GJ7H6WtBoiU::Ku6Na3RpRr-VgpzX736ROw` |
| Set a Workspace’s Icon (Admin) | GET | `/admin.teams.settings.setIcon` | `conn_mod_def::GJ7H6hB7a3o::lYCfHWfSRjacwKXiAR_Ywg` |
| Fetch Workspace Settings (Admin) | POST | `/admin.teams.settings.info` | `conn_mod_def::GJ7H6Z5QjV0::82WZjbRMTvqCV0EvMPzfhw` |
| Set a Workspace’s Description (Admin) | POST | `/admin.teams.settings.setDescription` | `conn_mod_def::GJ7H6XPw6A0::ONXN8jIxRhOnz1rztFoAYw` |
| Set a Workspace’s Discoverability (Admin) | POST | `/admin.teams.settings.setDiscoverability` | `conn_mod_def::GJ7H6hQkclQ::ruCsIqPrRumcc_tFk83w5g` |
| Set a Workspace’s Name (Admin) | POST | `/admin.teams.settings.setName` | `conn_mod_def::GJ7H6iItweM::ZJNiQmQOTKGYQ-7irlWySg` |

### AdminEmoji

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Enterprise Emoji Alias (Admin) | GET | `/admin.emoji.addAlias` | `conn_mod_def::GJ7H5ueV274::53fltPi_T52xR-y5K-MsTQ` |
| Add an Enterprise Organization Emoji (Admin) | GET | `/admin.emoji.add` | `conn_mod_def::GJ7H5s_adHY::HfOJs7j7QgCzVVoJ2OoV_Q` |
| List an Enterprise Organization’s Custom Emoji (Admin) | GET | `/admin.emoji.list` | `conn_mod_def::GJ7H5s0fWF0::ZHrSDVKLRSCb9QuxDtSSqQ` |
| Remove a Custom Emoji (Enterprise Org) | GET | `/admin.emoji.remove` | `conn_mod_def::GJ7H53ak9g0::IZAC4-jZRl6usAw669eQXw` |
| Rename a Custom Emoji (Enterprise Admin) | GET | `/admin.emoji.rename` | `conn_mod_def::GJ7H52hzTIE::lR5AqsTCTxak6xJpWJI1kw` |

This lists 90 of 306 actions. For anything not here, call `search_one_platform_actions` with platform `slack`. The full catalog is at https://www.withone.ai/knowledge/slack.

## When a call fails

The error comes from Slack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/slack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
