---
name: bluesky
description: Bluesky is a decentralized social media platform built on the open-source AT Protocol, designed to give users control over their data, identity, and content experience through customizable feeds and moderation tools. Read and write Bluesky data through One: identity, feed, graph, conversations, ozonesets, accounts and more, 210 actions with real parameter documentation. Use whenever the user asks to look something up in Bluesky, create or update a record there, or build code against the Bluesky API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bluesky
  generated-from: one-knowledge-base
---

# Bluesky through One

Bluesky is a decentralized social media platform built on the open-source AT Protocol, designed to give users control over their data, identity, and content experience through customizable feeds and moderation tools.

One exposes Bluesky through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bluesky` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bluesky is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bluesky account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Identity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recommended DID Credentials for Account Migration | GET | `/xrpc/com.atproto.identity.getRecommendedDidCredentials` | `conn_mod_def::GJ0MjoTqw-o::7hifTq-bTNa-rMVP3mI5yQ` |
| Resolve a DID to a DID Document | GET | `/xrpc/com.atproto.identity.resolveDid` | `conn_mod_def::GJ0MkBrL7Cw::9XmVlnOgRlSKDKmfQJWdjw` |
| Resolve an Identity (DID or Handle) | GET | `/xrpc/com.atproto.identity.resolveIdentity` | `conn_mod_def::GJ0MkTVQCf8::fFuyQSnJS5e48WhTky9OKw` |
| Refresh an Identity (Re-resolve DID and Handle) | POST | `/xrpc/com.atproto.identity.refreshIdentity` | `conn_mod_def::GJ0MjvsmppU::sFNHbSagTVGJoFa47gS_8g` |
| Request PLC Operation Signature Email Code | POST | `/xrpc/com.atproto.identity.requestPlcOperationSignature` | `conn_mod_def::GJ0Mj34r0gg::0z1T11qRSaufOmCUJabchQ` |
| Sign a PLC Operation for the Requesting DID | POST | `/xrpc/com.atproto.identity.signPlcOperation` | `conn_mod_def::GJ0MkbjapxQ::CNGTs35OSmSoq2Ti8bAeXw` |
| Update the Current Account Handle | POST | `/xrpc/com.atproto.identity.updateHandle` | `conn_mod_def::GJ0Mksl4pT4::HXU18CVgQxeKylhB1Tob-w` |

### Feed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List's Feed | GET | `/xrpc/app.bsky.feed.getListFeed` | `conn_mod_def::GJ0MYEWvDCU::jlpqO7K4RXmpkEL9CybULA` |
| Get Quotes for a Post | GET | `/xrpc/app.bsky.feed.getQuotes` | `conn_mod_def::GJ0MYkQoi_U::sOOl9pZNRweFQ03-78KUnQ` |
| Get Reposted By (for a Post) | GET | `/xrpc/app.bsky.feed.getRepostedBy` | `conn_mod_def::GJ0MYu6kv9Q::wBvkSZgUTPiKZa2JhU3M5w` |
| Get the Requesting Account’s Home Timeline | GET | `/xrpc/app.bsky.feed.getTimeline` | `conn_mod_def::GJ0MZE2L7DI::iJdOfAI6RH2FpAwbDn97nQ` |
| Search Posts (Bluesky Feed) | GET | `/xrpc/app.bsky.feed.searchPosts` | `conn_mod_def::GJ0MZRbMTiw::ktFvii5-RJmiZhxcRyKvhw` |

### Graph

| Action | Method | Path | Action id |
|---|---|---|---|
| Mute a Thread | POST | `/xrpc/app.bsky.graph.muteThread` | `conn_mod_def::GJ0McLKJdt0::nceAGSKfQZufgFtKfgHOwg` |
| Mute an Actor (Create a Mute Relationship) | POST | `/xrpc/app.bsky.graph.muteActor` | `conn_mod_def::GJ0Mb6Yi5xs::20SJtxs0SaCGO3woALhoQw` |
| Mute an Actor List | POST | `/xrpc/app.bsky.graph.muteActorList` | `conn_mod_def::GJ0McB3NyTs::6bZbw9WGSEWa87_LnXy89w` |
| Unmute a Thread | POST | `/xrpc/app.bsky.graph.unmuteThread` | `conn_mod_def::GJ0McrNdWIg::q3yRHxQSRfixDVoN78yBqQ` |
| Unmute an Actor | POST | `/xrpc/app.bsky.graph.unmuteActor` | `conn_mod_def::GJ0MccRV8Wo::DbgMbCWbQlyYFlCcU4MG4w` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation (DM Convo) | GET | `/xrpc/chat.bsky.convo.getConvo` | `conn_mod_def::GJ0MfPFhg5o::Z7yNGytAS9291In-AoA_pA` |
| Get a Conversation for Members | GET | `/xrpc/chat.bsky.convo.getConvoForMembers` | `conn_mod_def::GJ0MfgvdJT4::z89_WkdwQwKMkA6bFipc0g` |
| List Conversations (Bluesky Chat) | GET | `/xrpc/chat.bsky.convo.listConvos` | `conn_mod_def::GJ0MgPueFZk::M7cclrrkRYu1uJ21e4C0qg` |
| Mark All Conversations as Read (Update All Read Status) | POST | `/xrpc/chat.bsky.convo.updateAllRead` | `conn_mod_def::GJ0MhAYHul4::1Z3cGzsASwebm8imRD5asA` |
| Unmute a Conversation (Chat) | POST | `/xrpc/chat.bsky.convo.unmuteConvo` | `conn_mod_def::GJ0Mg4WGbiI::1P8jnWepSHWmVL0pwsW0CQ` |

### OzoneSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Ozone Set Query Sets | GET | `/xrpc/tools.ozone.set.querySets` | `conn_mod_def::GJ0Mv1St5lM::pAEC5cAUSwWOT9Ai9iwcbQ` |
| Add Values to an Ozone Set | POST | `/xrpc/tools.ozone.set.addValues` | `conn_mod_def::GJ0MvUAUas4::2-lzBsfYR3GaLITxT0Gsbg` |
| Create or Update a Set’s Metadata (Ozone) | POST | `/xrpc/tools.ozone.set.upsertSet` | `conn_mod_def::GJ0Mv9ZsBMo::5ztn8dKCQNSujhSim4kNmg` |
| Delete an Ozone Set | POST | `/xrpc/tools.ozone.set.deleteSet` | `conn_mod_def::GJ0MvcFBnTQ::LVta3P-BSW6b9whB3iouIQ` |
| Delete Values From a Set (Ozone) | POST | `/xrpc/tools.ozone.set.deleteValues` | `conn_mod_def::GJ0Mvjsrdx8::ksQimyO6Tcewj6PwiQw4ww` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Deactivated Account | POST | `/xrpc/com.atproto.server.activateAccount` | `conn_mod_def::GJ0Mms8iBSs::NztwqPIURECu47kfe5ZaAg` |
| Deactivate an Account | POST | `/xrpc/com.atproto.server.deactivateAccount` | `conn_mod_def::GJ0Mnr2JDY8::BoDqB0RDTNauxg0NaV5q8w` |
| Delete an Account (Admin) | POST | `/xrpc/com.atproto.admin.deleteAccount` | `conn_mod_def::GJ0MhrRHKa8::lFx1x9J-SFmHKVGsX6BjWw` |
| Delete an Actor’s Account (PDS) | POST | `/xrpc/com.atproto.server.deleteAccount` | `conn_mod_def::GJ0Mnzb_wZE::8TQrZpopQ_ilOriiue132A` |
| Update an Account's Email | POST | `/xrpc/com.atproto.server.updateEmail` | `conn_mod_def::GJ0MptBQ3B8::9-P8ChRGTgWNMViTTTNsCA` |

### StarterPacks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Starter Pack View | GET | `/xrpc/app.bsky.graph.getStarterPack` | `conn_mod_def::GJ0MbXmVex8::vucsbeQ_QnmHTXE9e_x-jQ` |
| Get Starter Packs Views | GET | `/xrpc/app.bsky.graph.getStarterPacks` | `conn_mod_def::GJ0MbfvUCiM::vN5tZl_BQ5iYI3OVtygrgg` |
| List an Actor’s Starter Packs | GET | `/xrpc/app.bsky.graph.getActorStarterPacks` | `conn_mod_def::GJ0MZjINPIA::ay_gNbc7QE6OsEyrZqqJqQ` |
| Search Starter Packs | GET | `/xrpc/app.bsky.graph.searchStarterPacks` | `conn_mod_def::GJ0McTQkCLo::b3yrSfTWTqSItj3qtG3faw` |

### ChatConversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept a Chat Conversation | POST | `/xrpc/chat.bsky.convo.acceptConvo` | `conn_mod_def::GJ0Me4CB5Fg::5poqyo9eSMORSaCcpHbSMA` |
| Leave a Chat Conversation | POST | `/xrpc/chat.bsky.convo.leaveConvo` | `conn_mod_def::GJ0MgHawxPs::qeDHH6wbRl-O8lRIiH53ww` |
| Mute a Chat Conversation | POST | `/xrpc/chat.bsky.convo.muteConvo` | `conn_mod_def::GJ0MgXCMjpg::SJOvym4CR4OtAic4fFwl-Q` |
| Update a Chat Conversation’s Read State | POST | `/xrpc/chat.bsky.convo.updateRead` | `conn_mod_def::GJ0MhH5sOks::1AsSo3RcSROebv6tQslzVw` |

### RepoRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Records in a Repository Collection | GET | `/xrpc/com.atproto.repo.listRecords` | `conn_mod_def::GJ0MmMGo-N4::JJkP0hYoR5-rrNrWIzCWYQ` |
| Create a Repository Record (PDS) | POST | `/xrpc/com.atproto.repo.createRecord` | `conn_mod_def::GJ0MlVVLyN0::pVhJrKZcTPeTocsGMcxJFg` |
| Delete a Repository Record | POST | `/xrpc/com.atproto.repo.deleteRecord` | `conn_mod_def::GJ0Mlchr3Yc::xqN64C4FSF-e1gE7uPGQXg` |
| Put (Create/Update) a Repository Record | POST | `/xrpc/com.atproto.repo.putRecord` | `conn_mod_def::GJ0MmUHrdbo::VNDLL09rTvKVuYYLfqKUxA` |

### AtprotoServer

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe an atproto PDS Server (Account Creation Requirements) | GET | `/xrpc/com.atproto.server.describeServer` | `conn_mod_def::GJ0MoEPl2Gc::aLrUj0-sSwixJBn07myunA` |
| Request Account Deletion Email (PDS) | POST | `/xrpc/com.atproto.server.requestAccountDelete` | `conn_mod_def::GJ0Mo0WvL0g::cImPBST7Rf-f6gNxhvdwlA` |
| Request Email Confirmation Code | POST | `/xrpc/com.atproto.server.requestEmailConfirmation` | `conn_mod_def::GJ0Mo7o4Teg::MhyEHLkBQxm_lilGqFtUCw` |
| Request Password Reset Email (PDS) | POST | `/xrpc/com.atproto.server.requestPasswordReset` | `conn_mod_def::GJ0MpN0C5Kg::1rJLV5l-QTWA_BjFtvauZQ` |

### OzoneModeration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account’s Moderation Timeline (Ozone) | GET | `/xrpc/tools.ozone.moderation.getAccountTimeline` | `conn_mod_def::GJ0Mskb8ceA::wlXlCof6RveS6U5DJf01vg` |
| Get Reporter Stats (Ozone Moderation) | GET | `/xrpc/tools.ozone.moderation.getReporterStats` | `conn_mod_def::GJ0MtP3Ac7o::yhTWa1yzT7Ck8fHMeNkveQ` |
| Revoke Verifications (Ozone Moderation) | POST | `/xrpc/tools.ozone.verification.revokeVerifications` | `conn_mod_def::GJ0MxtWokGU::3KDRCCR0S72NDqXaAEg9xQ` |
| Schedule a Moderation Action (Ozone) | POST | `/xrpc/tools.ozone.moderation.scheduleAction` | `conn_mod_def::GJ0MuSiQy-A::97elUmJuR_Kf0NoyuML9zw` |

### OzoneTeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ozone Team Members | GET | `/xrpc/tools.ozone.team.listMembers` | `conn_mod_def::GJ0MxLXbspw::uPHzz6WmRguA88NriWlWVg` |
| Add an Ozone Team Member | POST | `/xrpc/tools.ozone.team.addMember` | `conn_mod_def::GJ0Mw6t_3rs::4vRzW5NLQ-SeLN5E32BhuA` |
| Delete an Ozone Team Member | POST | `/xrpc/tools.ozone.team.deleteMember` | `conn_mod_def::GJ0MxC0bz40::WcCaQ5phTdyoEapWrMI93Q` |
| Update an Ozone Team Member | POST | `/xrpc/tools.ozone.team.updateMember` | `conn_mod_def::GJ0MxS_6GEU::CSbHrRJKR8ym5Y63ax4n7Q` |

### Actors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suggested Actors (Account Suggestions) | GET | `/xrpc/app.bsky.actor.getSuggestions` | `conn_mod_def::GJ0MU4ifm7k::edohorioQ7egDMQVxYBnaA` |
| Search Actors (Profiles) | GET | `/xrpc/app.bsky.actor.searchActors` | `conn_mod_def::GJ0MVIudqMo::RSC01VN_S2qYvw4pk5IvcA` |
| Search Actors (Typeahead) | GET | `/xrpc/app.bsky.actor.searchActorsTypeahead` | `conn_mod_def::GJ0MVSNbLQA::uVlDjvVlRPml7hleWFlVYg` |

### FeedGenerators

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Feed Generator | GET | `/xrpc/app.bsky.feed.describeFeedGenerator` | `conn_mod_def::GJ0MWkHab9o::IjFvCJ2mRnKtx5D-523Naw` |
| Get a Feed Generator’s Details | GET | `/xrpc/app.bsky.feed.getFeedGenerator` | `conn_mod_def::GJ0MXXR0BzE::H2IUAAHeSDSdh5YJw5phQw` |
| Get Feed Generators (by URI List) | GET | `/xrpc/app.bsky.feed.getFeedGenerators` | `conn_mod_def::GJ0MXj9Gjck::FjlMNii1R368j81DyJcLzA` |

### NotificationPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notification Preferences | GET | `/xrpc/app.bsky.notification.getPreferences` | `conn_mod_def::GJ0Mc6ofQaA::3XGZVIaZQXeGFQ95RKvdMw` |
| Set an Account’s Notification Preferences | POST | `/xrpc/app.bsky.notification.putPreferences` | `conn_mod_def::GJ0MdnUaKoQ::02L5ueLuQyC0SvdHSszPhw` |
| Set Notification Preferences (V2) | POST | `/xrpc/app.bsky.notification.putPreferencesV2` | `conn_mod_def::GJ0Mdu5skHw::xYK-HYZ8QnCLsI0TlBs0UA` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unread Notification Count (Requesting Account) | GET | `/xrpc/app.bsky.notification.getUnreadCount` | `conn_mod_def::GJ0MdCLf7Fg::KMhr-UT0TRyIMsbNydALKg` |
| List Notifications (Requesting Account) | GET | `/xrpc/app.bsky.notification.listNotifications` | `conn_mod_def::GJ0MdXHXUm8::rYP8bv49QrmycdMroL66rg` |
| Update Notification Seen Timestamp | POST | `/xrpc/app.bsky.notification.updateSeen` | `conn_mod_def::GJ0MeLNU0L4::B2kEQZD7QLCRwjVNrxCOdw` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Chat Message for the Authenticated User (Self) | POST | `/xrpc/chat.bsky.convo.deleteMessageForSelf` | `conn_mod_def::GJ0MfG-p8S8::MzB1CLhSRuefq7OYO626kQ` |
| Send a Batch of Chat Messages | POST | `/xrpc/chat.bsky.convo.sendMessageBatch` | `conn_mod_def::GJ0MgvrMAmQ::Noyi0C2uS063s2rp_ix-1Q` |
| Send a Chat Message in a Conversation | POST | `/xrpc/chat.bsky.convo.sendMessage` | `conn_mod_def::GJ0Mgn_-Mz8::v28yFoBLRi-KY8pC_RI-6g` |

### InviteCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Invite Code | POST | `/xrpc/com.atproto.server.createInviteCode` | `conn_mod_def::GJ0MnVt5GaU::MK4aLIUXQ0-gFEB-jYnhdg` |
| Create Invite Codes (PDS Server) | POST | `/xrpc/com.atproto.server.createInviteCodes` | `conn_mod_def::GJ0Mnc0ECRU::gGpHbxrXRyy_eisdKVzsAA` |
| Disable Invite Codes (Admin) | POST | `/xrpc/com.atproto.admin.disableInviteCodes` | `conn_mod_def::GJ0MiAp4uSc::DJEhYNVMSXGihcp44B71MA` |

### Repo

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Repository (Account) on a PDS | GET | `/xrpc/com.atproto.repo.describeRepo` | `conn_mod_def::GJ0MlkkgT_g::Q5mJVKhDRYa79MxYtc5faQ` |
| Apply Batch Repository Writes (Apply Writes to a Repo) | POST | `/xrpc/com.atproto.repo.applyWrites` | `conn_mod_def::GJ0MlMXPnk4::W-RRKzP0RF-HyCSrdo9hzA` |
| Import a Repo (CAR File) to a PDS | POST | `/xrpc/com.atproto.repo.importRepo` | `conn_mod_def::GJ0Ml0jWyC4::xRjV-pe6SPaeI-noaEfmRw` |

### AppPasswords

| Action | Method | Path | Action id |
|---|---|---|---|
| List App Passwords | GET | `/xrpc/com.atproto.server.listAppPasswords` | `conn_mod_def::GJ0Mol2TH4o::i8b3ku0iQFm0zA1U89d3jw` |
| Create an App Password | POST | `/xrpc/com.atproto.server.createAppPassword` | `conn_mod_def::GJ0MnMngQaE::tn7agB2zQNCZec4idGUYYA` |
| Revoke an App Password (PDS Account) by Name | POST | `/xrpc/com.atproto.server.revokeAppPassword` | `conn_mod_def::GJ0MplizoeA::xpyuCFstQPqLzfbSgLU5fA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Session (PDS) | GET | `/xrpc/com.atproto.server.getSession` | `conn_mod_def::GJ0ModrN3pY::H5XiHXuVR9i2Ssddi4BDfQ` |
| Create an Authentication Session (Create Session) | POST | `/xrpc/com.atproto.server.createSession` | `conn_mod_def::GJ0MnkLtfaU::sUl28M5vQN67rfKib0atvw` |
| Delete the Current Session (PDS) | POST | `/xrpc/com.atproto.server.deleteSession` | `conn_mod_def::GJ0Mn6_263U::Fdb4LduFQouBI--qZJS4ZA` |

### Server

| Action | Method | Path | Action id |
|---|---|---|---|
| Request an Email Update Token (PDS) | POST | `/xrpc/com.atproto.server.requestEmailUpdate` | `conn_mod_def::GJ0MpD5splc::My5SmM-ZQBmqNZcJJx6nVA` |
| Reserve a Repo Signing Key for a DID (PDS) | POST | `/xrpc/com.atproto.server.reserveSigningKey` | `conn_mod_def::GJ0MpVmzGOs::C79pOmH_Sr-jyfQWbL4Jfg` |
| Reset a User Account Password (Token-Based) | POST | `/xrpc/com.atproto.server.resetPassword` | `conn_mod_def::GJ0Mpdw_oNg::NtQkQ8vjSlGIbKF52Xmfyg` |

### ModerationEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Moderation Event (Ozone) | GET | `/xrpc/tools.ozone.moderation.getEvent` | `conn_mod_def::GJ0Mst0QXhc::T29QyqUiSDGE94ED_3mABA` |
| List Moderation Events for a Subject | GET | `/xrpc/tools.ozone.moderation.queryEvents` | `conn_mod_def::GJ0Mt5AgdJw::XnEgjci7RI-elMqm4CaEzA` |
| Emit a Moderation Event (Take Action on a Subject) | POST | `/xrpc/tools.ozone.moderation.emitEvent` | `conn_mod_def::GJ0Mscf9NCU::z-_rYYNQS8qfqTs_j0zVoA` |

### Bookmarks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User’s Bookmarks | GET | `/xrpc/app.bsky.bookmark.getBookmarks` | `conn_mod_def::GJ0MWZ0sghA::33YsZBDgTaCr7nABgqLSPw` |

2 more Bookmarks actions are available through search.

This lists 90 of 210 actions. For anything not here, call `search_one_platform_actions` with platform `bluesky`. The full catalog is at https://www.withone.ai/knowledge/bluesky.

## When a call fails

The error comes from Bluesky, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bluesky

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
