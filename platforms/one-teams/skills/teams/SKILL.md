---
name: teams
description: A collaboration and communication platform that offers chat, meetings, file sharing, and integrations, making it ideal for teams to work together in hybrid or remote environments. Read and write Teams data through One: chatmessagehostedcontents, chatmessages, chatmessagereplies, teams, channels, hostedcontents and more, 1296 actions with real parameter documentation. Use whenever the user asks to look something up in Teams, create or update a record there, or build code against the Teams API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: teams
  generated-from: one-knowledge-base
---

# Teams through One

A collaboration and communication platform that offers chat, meetings, file sharing, and integrations, making it ideal for teams to work together in hybrid or remote environments.

One exposes Teams through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `teams` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Teams is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Teams account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ChatMessageHostedContents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Message Hosted Content Media (Binary) | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}/$value` | `conn_mod_def::GJ7NUyx-90A::x2O9UVzHSYeObAzXoTBaDg` |
| Get a Channel Message Hosted Content Media (Binary) for a Group Team Channel | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}/$value` | `conn_mod_def::GJ7M7Ea6epY::lEUIAPDiT-SpELsV_FYgLQ` |
| Get a Chat Message Hosted Content Bytes | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}/$value` | `conn_mod_def::GJ7M1uF6MuA::9Lpt3rZLTkOXD692sB_ulw` |
| Get a Chat Message Hosted Content Count | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7M1RHwVzc::aeXRAWraSf6fxJOq_fXhuQ` |
| Get a Chat Message Hosted Contents Count for a User | GET | `/users/{{userId}}/chats/{{chatId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7NP7ZGvIw::U7BCK0WbS1GkJ9aKCQr2GQ` |
| Get a Chat Message’s Hosted Content | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}` | `conn_mod_def::GJ7M1ADveWY::LsdZzJLCS5W_F4cRbXrg4w` |
| Get a Chat Reply Message’s Hosted Content | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/{{chatMessageHostedContentId}}` | `conn_mod_def::GJ7M1ISFXL4::UN5tMO7dQVKQLUYXVKN1Qw` |
| Get a Deleted Team Channel Message Hosted Content | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}` | `conn_mod_def::GJ7NMKYMquM::PNWGdg98RmGDVd_1n0a0JQ` |
| Get a Deleted Team Channel Message Hosted Content (Media) | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}/$value` | `conn_mod_def::GJ7NMJxtlw4::3I8ghEDdSB-0U_mTYLY4Mg` |
| Get a Group Channel Message Hosted Content | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}` | `conn_mod_def::GJ7M6sdukvU::VejMcd_qRhuh6llvHItApw` |
| Get a Group Team Primary Channel Message Hosted Content | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}` | `conn_mod_def::GJ7M65KGiXI::UpWba8N3SUyTq1Wh4PICKg` |
| Get a Group Team Primary Channel Message Hosted Content Media | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}/hostedContents/{{chatMessageHostedContentId}}/$value` | `conn_mod_def::GJ7M7NrEUlE::UyJ2gmZyTlm7A4duN02r9Q` |

84 more ChatMessageHostedContents actions are available through search.

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Query a User’s Chat Messages (in a Chat) | GET | `/users/{{userId}}/chats/{{chatId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GJ7NQm_KuNE::pPX1vjeLRMKshFPtr0tdxw` |
| Delta Query Chat Messages (Track Changes in a Chat) | GET | `/chats/{{chatId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GJ7M1jLUApQ::qfpaG49rQCW_syGZRGqFeA` |
| Delta Query Messages in a Deleted Team’s Channel | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GJ7NNliDoYc::9RSH1naoSASxZaaICfws7Q` |
| Get a Channel Chat Message in a Team | GET | `/teams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}` | `conn_mod_def::GJ7NCr5QoKQ::Sg20AsU4SJm4mKKjZt0UUA` |
| Get a Chat Message Count | GET | `/chats/{{chatId}}/messages/$count` | `conn_mod_def::GJ7M1QG11Gw::3W_Kz0k9QySAddkXsRdvxQ` |
| Get a Chat Message in a Chat | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}` | `conn_mod_def::GJ7M0_Ce-NQ::mzjwQ5cSSs26-pvYg3VzDw` |
| Get a Deleted Team's Channel Message (Teamwork) | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}` | `conn_mod_def::GJ7NMX_2S1U::0hO-vRuHTbe_z0s5XYlhKg` |
| Get a Group Team Primary Channel Message | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}` | `conn_mod_def::GJ7M7rtdS-A::4LwcQiCLQN6AYJvXk--OAA` |
| Get a Pinned Chat Message’s Message | GET | `/chats/{{chatId}}/pinnedMessages/{{pinnedChatMessageInfoId}}/message` | `conn_mod_def::GJ7M2dQJvfY::ep2WYaijR1CWdJEhltFE0g` |
| Get a Pinned Chat Message’s Message for a User | GET | `/users/{{userId}}/chats/{{chatId}}/pinnedMessages/{{pinnedChatMessageInfoId}}/message` | `conn_mod_def::GJ7NPdFvaSY::y_wYQ6PeSE-Ka6AFLNyGTA` |
| Get a Reply to a Channel Message in a User’s Joined Team | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{replyMessageId}}` | `conn_mod_def::GJ7NVrwpgeg::RPf_ttaXR-C12ni15qvWDw` |
| Get a Reply to a Group Team Primary Channel Message | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}/replies/{{chatMessageId1}}` | `conn_mod_def::GJ7M8KoQQKg::__0Y2OVTSWG0Ej1PCaKlnw` |

49 more ChatMessages actions are available through search.

### ChatMessageReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta a Chat Message’s Replies for a User | GET | `/users/{{userId}}/chats/{{chatId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NQqsFZ7w::aHonbkbMT3WYPTauXDPhyw` |
| Delta Changes for a Channel Message’s Replies (in a Group Team Channel) | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7M_nkctlA::wXrtIj1LSMS8IxL05-vQJw` |
| Delta Changes for a Team Channel Message’s Replies | GET | `/teams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NFQ04XTM::249LPnzyTNm8elwinVwr4g` |
| Delta Query a Chat Message’s Replies | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7M1jtU9sY::fZsyPxP1QUO1gTlHCl2Jlw` |
| Delta Query for Replies in a Deleted Team Channel Message | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NNpfJVx4::pOoEnGNJQYan8yAn3G3obQ` |
| Delta Query for Replies to a Channel Message in a User’s Joined Team | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NZmCjRL0::h2t0KzfdRMaz-2jhX-0KuA` |
| Delta Query Replies for a Team's Primary Channel Message | GET | `/teams/{{teamId}}/primaryChannel/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NFanQi7Y::lVCq6msZTuSkAv_UrAb07Q` |
| Delta: List a User’s Replies to a Channel Message (Primary Channel) | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/primaryChannel/messages/{{chatMessageId}}/replies/microsoft.graph.delta()` | `conn_mod_def::GJ7NZpnnnCQ::76F_DeW2TxSz-MaIofPsnQ` |
| Get a Chat Message Reply Count | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/replies/$count` | `conn_mod_def::GJ7M1Q_p_ao::PvAwHUd_Qoidhh-N9r3sEg` |
| Get a Reply to a Channel Message in a Group’s Team | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}` | `conn_mod_def::GJ7M7-kwBTw::CfqQpenMTNOjX-ehHrjOSQ` |
| Get a Reply to a Channel Message in a Team | GET | `/teams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}` | `conn_mod_def::GJ7NCqSB65s::pgcu2tgqSyOjCjyv59hVUQ` |
| Get a Reply to a Chat Message | GET | `/chats/{{chatId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}` | `conn_mod_def::GJ7M1Jf14bc::ebLpFKHaQz2nzIAl94x_Vg` |

38 more ChatMessageReplies actions are available through search.

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group’s Team | GET | `/groups/{{groupId}}/team` | `conn_mod_def::GJ7M8vIMQZk::ctuB2VbkTx6I4Do8Hd5Jsg` |
| Get a Shared Channel’s Allowed Members Count (Primary Channel) | GET | `/teams/{{teamId}}/primaryChannel/sharedWithTeams/{{sharedWithChannelTeamInfoId}}/allowedMembers/$count` | `conn_mod_def::GJ7ND5Q7eRc::8h_O4CszQYKNsvFuDkuasw` |
| Get a Shared Channel’s Team (via Group → Team → Channel → SharedWithTeams) | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/sharedWithTeams/{{sharedWithChannelTeamInfoId}}/team` | `conn_mod_def::GJ7M8uPQNIg::rOOSqyUNQ5yYC-7Ns1Lj3w` |
| Get a Team | GET | `/teams/{{teamId}}` | `conn_mod_def::GJ7NJeFwYQI::TrhDbRI9QEm_vqG2q7g56w` |
| Get a Team Shared With a Channel (via sharedWithTeams) | GET | `/teams/{{teamId}}/channels/{{channelId}}/sharedWithTeams/{{sharedWithChannelTeamInfoId}}/team` | `conn_mod_def::GJ7NDmjNnIs::o70aIjfwQLGZrmSiMsYIuA` |
| Get a Team Shared with a Team’s Primary Channel | GET | `/teams/{{teamId}}/primaryChannel/sharedWithTeams/{{sharedWithChannelTeamInfoId}}/team` | `conn_mod_def::GJ7NDoTX93g::-7NgNTSCQCSzcVMFi_Y7Yw` |
| Get a Team Shared With a User’s Joined Channel | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/sharedWithTeams/{{sharedWithChannelTeamInfoId}}/team` | `conn_mod_def::GJ7NWUJ4ak0::qm05NnXjR561mHeIcDbTyw` |
| Get a Team’s Primary Channel Files Folder | GET | `/teams/{{teamId}}/primaryChannel/filesFolder` | `conn_mod_def::GJ7NC2Ac2i8::9A3d7GulRnWF2LbtydN1zw` |
| Get a Team’s Primary Channel Files Folder Content | GET | `/teams/{{teamId}}/primaryChannel/filesFolder/content` | `conn_mod_def::GJ7NCoKgcr8::iL8FdsLwT1ijhQgR7XH0nA` |
| Get a Team’s Profile Photo (Binary Content) | GET | `/teams/{{teamId}}/photo/$value` | `conn_mod_def::GJ7NHNkOJ0A::ghpEpuaUSCS3bXzSA_gvdQ` |
| Get a Team’s Profile Photo Metadata | GET | `/teams/{{teamId}}/photo` | `conn_mod_def::GJ7NHNfztDE::tG-dCGHaTXu9rou1EEAr9A` |
| Get a Team’s Template | GET | `/teams/{{teamId}}/template` | `conn_mod_def::GJ7NKiwaGD8::dotTJ0uAQfGK5rpIb6XumQ` |

28 more Teams actions are available through search.

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Determine Whether a User Has Access to a Group Channel (doesUserHaveAccess) | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')` | `conn_mod_def::GJ7M_xpfgLk::pZCBHsHaSsy7grh8VtPArg` |
| Determine Whether a User Has Access to a Joined Team Channel (doesUserHaveAccess) | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/microsoft.graph.doesUserHaveAccess(userId='@userId',tenantId='@tenantId',userPrincipalName='@userPrincipalName')` | `conn_mod_def::GJ7NZyZmxSg::tJr2FgPPTGKi17oqILTFVQ` |
| Get a Channel’s Files Folder Content Stream (in a Team) | GET | `/teams/{{teamId}}/channels/{{channelId}}/filesFolder/content` | `conn_mod_def::GJ7NCpC0L3w::ujIGfWCzTUGm4_8UX9w-Rg` |
| Get a Channel’s Shared-With-Teams Count in a Team | GET | `/teams/{{teamId}}/channels/{{channelId}}/sharedWithTeams/$count` | `conn_mod_def::GJ7NENJpdpU::wwi80pQoRce7Ce9MSzCwFQ` |
| Get a Deleted Team's Channel | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}` | `conn_mod_def::GJ7NMAY0QZI::VqhI1Rd0TkObskOCOAnvOw` |
| Get a Group Team Channel | GET | `/groups/{{groupId}}/team/channels/{{channelId}}` | `conn_mod_def::GJ7M6YzfHkk::Ja2FgzAdTuyCN2AG6xwLcw` |
| Get a Group’s Primary (General) Channel | GET | `/groups/{{groupId}}/team/primaryChannel` | `conn_mod_def::GJ7M79Y4RFY::O4t-Vos8Q_OvJChDVdVtSQ` |
| Get a Team's Channel | GET | `/teams/{{teamId}}/channels/{{channelId}}` | `conn_mod_def::GJ7NCo8qE84::1Ms4gyF1RJSCwJ_pxn2dzQ` |
| Get a Team’s Primary (General) Channel | GET | `/teams/{{teamId}}/primaryChannel` | `conn_mod_def::GJ7NDUdtDZ4::PUbtV_TLSO-MjF8nlXggtQ` |
| Get a User’s Channel in a Joined Team | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}` | `conn_mod_def::GJ7NUKZ8pe8::6w_ZJTSVQMCCLWknPUFA-A` |
| Get a User’s Joined Team Primary Channel | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/primaryChannel` | `conn_mod_def::GJ7NVr3GHo8::9RR2IEylTZa4W4mUeKHFKg` |
| List a Group’s Team Channels | GET | `/groups/{{groupId}}/team/channels` | `conn_mod_def::GJ7M6ZnEmkQ::wnE-hWiuTYCwjASn7DgenA` |

25 more Channels actions are available through search.

### HostedContents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Message Hosted Contents Count for a User’s Joined Team | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7NXfFqyEA::IA2JvqbJRM2nkZNjsYrCQw` |
| Get a Group Team Channel Message Reply Hosted Content Count | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7M90PMFwY::vXR4pKejRzWl0ad77XrIqA` |
| Get a Reply Hosted Contents Count for a Group Team Primary Channel Message | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7M9S7fuds::ohcoTScVTsuYOQ86o7Wexg` |
| Get a Reply Message's Hosted Contents Count (in a User's Joined Team Primary Channel) | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/primaryChannel/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7NW8IvRnI::US1-43UzQyGNNRg1iC870A` |
| Get a Team Channel Message Hosted Content Count | GET | `/teams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7NECld4rA::DVqzDqWNSAirInVX7x6ARg` |
| Get a Team Channel Message Hosted Contents Count (in a Group) | GET | `/groups/{{groupId}}/team/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7M90eqR9w::BcfNJspPQTW_vt9nbFrzlg` |
| Get a Team Primary Channel Message Hosted Contents Count for a Group | GET | `/groups/{{groupId}}/team/primaryChannel/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7M9TophKY::GN8IF2jOR5qbRRmMmaZ1hg` |
| Get a User Chat Message Reply Hosted Content Count | GET | `/users/{{userId}}/chats/{{chatId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7NQDLH9fI::fRCzSV3USZ2IpdTwLZzEVA` |
| Get Count of a Reply’s Hosted Contents in a User’s Joined Team Channel Message | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7NXpt7oks::2clDO849RzWf34LTstMTcw` |
| Get Deleted Team Channel Message Reply Hosted Contents Count | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/replies/{{chatMessageId1}}/hostedContents/$count` | `conn_mod_def::GJ7NM3bu9Bo::7IjtLGZIQJ2aqsRJdxTbaw` |
| Get the Count of a Deleted Team Channel Message Hosted Contents | GET | `/teamwork/deletedTeams/{{deletedTeamId}}/channels/{{channelId}}/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7NM2oHxlQ::X3riRjt9QnC2-Y4Oa130aA` |
| Get the Count of a User’s Hosted Contents in a Team Primary Channel Message | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/primaryChannel/messages/{{chatMessageId}}/hostedContents/$count` | `conn_mod_def::GJ7NW4QnQ9s::uE7BYBGRQQCn-Pn9R2uQig` |

24 more HostedContents actions are available through search.

### TimeCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Team Schedule Time Card | GET | `/groups/{{groupId}}/team/schedule/timeCards/{{timeCardId}}` | `conn_mod_def::GJ7M98DMKeY::4HIxV1LqQhO66e9smXslTw` |
| Get a Group Team Schedule TimeCards Count | GET | `/groups/{{groupId}}/team/schedule/timeCards/$count` | `conn_mod_def::GJ7M9pzKj80::Jo7hRjvYT7WLyzbfw_Z9nQ` |
| Get a Team Schedule Time Card | GET | `/teams/{{teamId}}/schedule/timeCards/{{timeCardId}}` | `conn_mod_def::GJ7NIZYRdmo::FNObloBTTbSqcDGj1Kfv1Q` |
| Get a Team Schedule Time Cards Count | GET | `/teams/{{teamId}}/schedule/timeCards/$count` | `conn_mod_def::GJ7NIY62VMI::DkP1IbIdRDmDLZ920zDFzQ` |
| Get a User’s Joined Team Schedule Time Cards Count | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/schedule/timeCards/$count` | `conn_mod_def::GJ7NXVqvoJs::NifsrliFRaSeWB2ZwyYw5Q` |
| Get a User’s Team Schedule Time Card | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/schedule/timeCards/{{timeCardId}}` | `conn_mod_def::GJ7NXx1KeSg::N4TJ1C5mTtOX4ED_729OgA` |
| List a Group’s Time Cards (Schedule) | GET | `/groups/{{groupId}}/team/schedule/timeCards` | `conn_mod_def::GJ7M99qul1E::49_Yts8bRKGmIZLUYyCgmQ` |
| List a Team Schedule’s Time Cards | GET | `/teams/{{teamId}}/schedule/timeCards` | `conn_mod_def::GJ7NJCAQXUo::h_hqV5eqSXmZFixnLX8xqA` |
| List a User's Time Cards in a Joined Team Schedule | GET | `/users/{{userId}}/joinedTeams/{{teamId}}/schedule/timeCards` | `conn_mod_def::GJ7NXyIYzB8::2QEHKa51TwKcL-qmieJdEQ` |
| Clock In for a User’s Time Card (in a Joined Team) | POST | `/users/{{userId}}/joinedTeams/{{teamId}}/schedule/timeCards/microsoft.graph.clockIn` | `conn_mod_def::GJ7NYLxXRlE::mWpDOfB-TdKkWN6VTM3Cyw` |
| Clock In to Start a Group Team Schedule Time Card | POST | `/groups/{{groupId}}/team/schedule/timeCards/microsoft.graph.clockIn` | `conn_mod_def::GJ7M-X1xMC4::7YESR-u5RLGZvNmKM_eKfA` |
| Clock In to Start a Team Time Card | POST | `/teams/{{teamId}}/schedule/timeCards/microsoft.graph.clockIn` | `conn_mod_def::GJ7NIg9YlmE::d9LY1mzIQoaqXBxlgHbY7g` |

21 more TimeCards actions are available through search.

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat | GET | `/chats/{{chatId}}` | `conn_mod_def::GJ7M0WFSXu8::SfE_Z07MRL-Ezl6QaMUeYw` |
| Get a Chat’s Installed Apps Count | GET | `/chats/{{chatId}}/installedApps/$count` | `conn_mod_def::GJ7M20_jnUE::MzDaj6vvSN-XoX2iDf_IJg` |
| Get a Chat’s Last Message Preview | GET | `/chats/{{chatId}}/lastMessagePreview` | `conn_mod_def::GJ7M2Lk_KqM::M6vYAP-iTWKP0petfRuhkw` |
| Get a Chat’s Members Count | GET | `/chats/{{chatId}}/members/$count` | `conn_mod_def::GJ7M2LKvXas::MnYg7i3PSvKlCdAdGPOLgg` |
| Get a User's Chat | GET | `/users/{{userId}}/chats/{{chatId}}` | `conn_mod_def::GJ7NPIjzQ3I::8CEEko49TF-ITZO-bdrZFA` |
| Get a User's Chat Count | GET | `/users/{{userId}}/chats/$count` | `conn_mod_def::GJ7NP6j4MZg::DGWuBfZVQ7C_-o-2icYFRw` |

24 more Chats actions are available through search.

This lists 90 of 1296 actions. For anything not here, call `search_one_platform_actions` with platform `teams`. The full catalog is at https://www.withone.ai/knowledge/teams.

## When a call fails

The error comes from Teams, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/teams

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
