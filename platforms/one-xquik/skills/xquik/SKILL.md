---
name: xquik
description: Xquik is an X (Twitter) scraper API and automation platform that enables developers and AI agents to extract tweets, replies, profiles, followers, and trends, monitor accounts and keywords in near real time, and perform account actions like posting, liking, and reposting. Read and write Xquik data through One: tweets, styles, xusers, webhooks, xaccounts, extractions and more, 123 actions with real parameter documentation. Use whenever the user asks to look something up in Xquik, create or update a record there, or build code against the Xquik API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: xquik
  generated-from: one-knowledge-base
---

# Xquik through One

Xquik is an X (Twitter) scraper API and automation platform that enables developers and AI agents to extract tweets, replies, profiles, followers, and trends, monitor accounts and keywords in near real time, and perform account actions like posting, liking, and reposting.

One exposes Xquik through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `xquik` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Xquik is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Xquik account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tweets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tweet by ID | GET | `/api/v1/x/tweets/{{id}}` | `conn_mod_def::GMg69UZieKo::jLKfD4QdSSqtPxgJPE8HLg` |
| Get a Tweet Thread | GET | `/api/v1/x/tweets/{{id}}/thread` | `conn_mod_def::GMg69T7VEuU::DHZcAaQvSb68Cs8Q8i8H5Q` |
| Get Tweets Using X | GET | `/api/v1/x/tweets` | `conn_mod_def::GMg69ULgRSk::uDR9_2cNRki5KRFGXKQ0gA` |
| List Quote Tweets of a Tweet | GET | `/api/v1/x/tweets/{{id}}/quotes` | `conn_mod_def::GMg69ZU5sNk::qlYQu4uGTQCMnSTITGbq5Q` |
| List Tweets from an X List | GET | `/api/v1/x/lists/{{id}}/tweets` | `conn_mod_def::GMg68lAZa1w::PSxMiw3eRNeNVpm5wurBqw` |
| Search Tweets | GET | `/api/v1/x/tweets/search` | `conn_mod_def::GMg69q_Y9E0::P2L_LGVqQdyDdAqE9rX0NA` |
| Create Tweet Using X | POST | `/api/v1/x/tweets` | `conn_mod_def::GMg6-vrRIZE::1Byt7nPpRUKHDHJK8OB7SA` |
| Delete a Tweet | DELETE | `/api/v1/x/tweets/{{id}}` | `conn_mod_def::GMg6-wDNbkQ::s3nRIyhpT6eM0-M9NqmGfw` |
| Like a Tweet | POST | `/api/v1/x/tweets/{{id}}/like` | `conn_mod_def::GMg6-35bdWI::QGvEcqc9Qyaz8Btp4-dC7w` |
| Retweet a Tweet | POST | `/api/v1/x/tweets/{{id}}/retweet` | `conn_mod_def::GMg6-6h_MGU::slkuJPjNTLSTcn28E1mbxA` |
| Unlike a Tweet | DELETE | `/api/v1/x/tweets/{{id}}/like` | `conn_mod_def::GMg6_CHAzjc::nvqqFSdzS-STLKZ98v3Nyw` |
| Unretweet a Tweet | DELETE | `/api/v1/x/tweets/{{id}}/retweet` | `conn_mod_def::GMg6_D-Mrsw::O1-ms20uShyWhedbwu9iYQ` |

### Styles

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Styles | GET | `/api/v1/styles/compare` | `conn_mod_def::GMg6734j1Xw::Zg8qXhclR2ydeypfsyXO5Q` |
| Get a Cached Style Profile | GET | `/api/v1/styles/{{id}}` | `conn_mod_def::GMg67-BsYlg::sgm-DnPdQMqOQ1uW76WdKA` |
| Get Style Performance | GET | `/api/v1/styles/{{id}}/performance` | `conn_mod_def::GMg679zG2iE::bRB7zKiJRuuiDSSr_eXjHA` |
| List Styles Using API v1 | GET | `/api/v1/styles` | `conn_mod_def::GMg67935PDU::cy19qPdpQuW16Og_jcSL-A` |
| Analyze Writing Style | POST | `/api/v1/styles` | `conn_mod_def::GMg671-PyrM::Lav86UjSQJylj0kmfgzauA` |
| Delete a Style Profile | DELETE | `/api/v1/styles/{{id}}` | `conn_mod_def::GMg672JArVk::CnUt7QlVQGKrferFcaVg0w` |
| Save a Style Profile | PUT | `/api/v1/styles/{{id}}` | `conn_mod_def::GMg68ItbX2I::2uryFudbTYuWUbOWrWR2wQ` |

### XUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Users Using X Users | GET | `/api/v1/x/users/batch` | `conn_mod_def::GMg6-M2RhzM::W-Y9lbyUTdaMg4yxtUjXrA` |
| Get an X User Profile | GET | `/api/v1/x/users/{{id}}` | `conn_mod_def::GMg69w-7cfY::ByrRPU1cQCGcFSWhMhJl8w` |
| Search X Users | GET | `/api/v1/x/users/search` | `conn_mod_def::GMg6-MoP1JE::0VhMUE96QRulfbbq1xgFDw` |
| Follow an X User | POST | `/api/v1/x/users/{{id}}/follow` | `conn_mod_def::GMg6-wCDb3E::TP2TIaA5R-iuZVbGUBJ71w` |
| Remove a Follower for an X User | POST | `/api/v1/x/users/{{id}}/remove-follower` | `conn_mod_def::GMg6-45Yc6Y::uloZ62rIT7WBQE0J2cTx_g` |
| Unfollow an X User | DELETE | `/api/v1/x/users/{{id}}/follow` | `conn_mod_def::GMg6_B6W0i0::UwN7XAHCSYynH_SoyxToLg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GMg6-Vi09e4::KqXqL22BRY-aDVkDSbXYrw` |
| Create Webhooks | POST | `/api/v1/webhooks` | `conn_mod_def::GMg6-LnfpYA::A0skUt1LRciD6WHNJA3RiQ` |
| Deactivate a Webhook | DELETE | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMg6-V931J4::g7WybFD6RnOVt4UVV4xIjQ` |
| Resume a Webhook | POST | `/api/v1/webhooks/{{id}}/resume` | `conn_mod_def::GMg6-XSvjTE::vWIAh0UqTCOPg04C8480jQ` |
| Test a Webhook | POST | `/api/v1/webhooks/{{id}}/test` | `conn_mod_def::GMg6-VyCwYA::P3ImoMKFSMeVoXPW6vwxZQ` |
| Update a Webhook | PATCH | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GMg6-djU2MQ::zdU-1QqITGq0O3uS3KsdYQ` |

### XAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an X Account | GET | `/api/v1/x/accounts/{{id}}` | `conn_mod_def::GMg6-nvrONM::ikzdXwSlQvS1W0F4ZxYw_g` |
| List X Accounts | GET | `/api/v1/x/accounts` | `conn_mod_def::GMg6-ngI5Hk::8lK1GgKsTGyJsrs510oVVg` |
| Bulk Retry X Accounts | POST | `/api/v1/x/accounts/bulk-retry` | `conn_mod_def::GMg6-hRmbIM::XYVmcuKEQcasO3jujcHFMw` |
| Connect X Account | POST | `/api/v1/x/accounts` | `conn_mod_def::GMg6-er3BDU::XTEgxEocSKqhEWSTFD_V8g` |
| Disconnect an X Account | DELETE | `/api/v1/x/accounts/{{id}}` | `conn_mod_def::GMg6-eSK1-8::sPCI9pTbTRCIqM-g4jbRvg` |
| Reauth an X Account | POST | `/api/v1/x/accounts/{{id}}/reauth` | `conn_mod_def::GMg6-n3GNkg::OuO3iUdOQciVWRfTUOmQkw` |

### Extractions

| Action | Method | Path | Action id |
|---|---|---|---|
| Export an Extraction's Results | GET | `/api/v1/extractions/{{id}}/export` | `conn_mod_def::GMg68XiQaLQ::GDe35NGiQWiNVX0VAflnHQ` |
| Get Extraction Results | GET | `/api/v1/extractions/{{id}}` | `conn_mod_def::GMg68X1jmI8::E0qGg1XdRHai71xgRgCXsw` |
| List Extractions | GET | `/api/v1/extractions` | `conn_mod_def::GMg68YbRlY8::MAsFN0C6TNuPlBxiKocG8w` |
| Estimate Extraction Cost | POST | `/api/v1/extractions/estimate` | `conn_mod_def::GMg68PO7nvU::EMU0mP5dQXiGwWh8cZ5Y2w` |
| Run Extraction | POST | `/api/v1/extractions` | `conn_mod_def::GMg68c7Nx_0::54UONE0nQvKjClITzUap3g` |

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor by ID | GET | `/api/v1/monitors/{{id}}` | `conn_mod_def::GMg6801RwE4::RcLOHyQaTy-Emf9TUzd4qg` |
| List Monitors | GET | `/api/v1/monitors` | `conn_mod_def::GMg680RFFRk::O9-kXBchTvGWOK_RfOwrtw` |
| Create Monitor | POST | `/api/v1/monitors` | `conn_mod_def::GMg68raKqQo::Zed0zHNITy66bwWYT8MB_w` |
| Delete a Monitor | DELETE | `/api/v1/monitors/{{id}}` | `conn_mod_def::GMg68rn8BNA::8hMpaQt1R8u2OEqlvGpzxg` |
| Update a Monitor | PATCH | `/api/v1/monitors/{{id}}` | `conn_mod_def::GMg689xSQ0k::nBBXCBIbQQyghO-5T74c8w` |

### Drafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft by ID | GET | `/api/v1/drafts/{{id}}` | `conn_mod_def::GMg68B0lE2g::YRjCiBCbS6qWQIqDO94Jeg` |
| List Drafts | GET | `/api/v1/drafts` | `conn_mod_def::GMg68Ig7L_k::1LeT6YtnRtWs7Vk5p9MoUA` |
| Create Draft Using API v1 | POST | `/api/v1/drafts` | `conn_mod_def::GMg68IXZZtQ::x7lNlVtIQ-OcmElaHHEwSg` |
| Delete a Draft | DELETE | `/api/v1/drafts/{{id}}` | `conn_mod_def::GMg6715uHOc::1Q7pQ-BnSUyH5WZ8xXEPvA` |

### Draws

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Draw | GET | `/api/v1/draws/{{id}}/export` | `conn_mod_def::GMg68JKNxMY::WjerXK05Tv-VApHpAuzbQg` |
| Get Draw Details | GET | `/api/v1/draws/{{id}}` | `conn_mod_def::GMg68IUO87o::EfhyNi7oRKWvR8BOiDJxAw` |
| List Draws | GET | `/api/v1/draws` | `conn_mod_def::GMg68PUxUrk::8uBSqeJ6QpaLNkHlml96JA` |
| Run Giveaway Draw | POST | `/api/v1/draws` | `conn_mod_def::GMg68PR1nXw::dEqSUosfTWa8W2bUJ-u6Lw` |

### SupportTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Support Ticket | GET | `/api/v1/support/tickets/{{id}}` | `conn_mod_def::GMg69D0W5Ds::M2vekBo9S_S8CT49REX--w` |
| List Support Tickets | GET | `/api/v1/support/tickets` | `conn_mod_def::GMg69Ds30_c::7VvopkBORsKP3xJIAFPCJA` |
| Create Support Tickets | POST | `/api/v1/support/tickets` | `conn_mod_def::GMg69EFAKe8::4vT0t7ijQt23gQ3YUtDbSg` |
| Update a Support Ticket Status | PATCH | `/api/v1/support/tickets/{{id}}` | `conn_mod_def::GMg69L_nM-Y::ph7umpPdQGqYDshuoZCMCQ` |

### Communities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Community Info | GET | `/api/v1/x/communities/{{id}}/info` | `conn_mod_def::GMg67kQCn0U::Ql0wfvm1QI-XL_MdB8fyXg` |
| Create Community Using X | POST | `/api/v1/x/communities` | `conn_mod_def::GMg6-o586q4::H-yEXH0-ROy70gQy7UsDoQ` |
| Join an X Community | POST | `/api/v1/x/communities/{{id}}/join` | `conn_mod_def::GMg6-4Wt3c4::uXT73iaWRSCdEGtOsoUDbg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Info | GET | `/api/v1/account` | `conn_mod_def::GMg67lP0WyA::AtSXnHPJQl6PpEC5U-br8g` |
| Set Linked X Username | PUT | `/api/v1/account/x-identity` | `conn_mod_def::GMg67lpY8B4::EHNE8R4lS826qq_n5Fp56Q` |
| Update Account Locale | PATCH | `/api/v1/account` | `conn_mod_def::GMg67kPvY3g::Z66z7vEaTi2lkEVkkgezuw` |

### CommunityTweets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Community's Tweets | GET | `/api/v1/x/communities/{{id}}/tweets` | `conn_mod_def::GMg67vcf8Ms::EcaJs_ooTiKgU7jZHRuR0w` |
| Search Community Tweets | GET | `/api/v1/x/communities/tweets` | `conn_mod_def::GMg67tn9oI8::2qPBSM3NQWSVfWjQU8u2aw` |
| Search Community Tweets | GET | `/api/v1/x/communities/search` | `conn_mod_def::GMg67uk_TQk::kljHfrbETQiEzHYWhMb2tg` |

### KeywordMonitors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Keyword Monitors | GET | `/api/v1/monitors/keywords` | `conn_mod_def::GMg681O-Fr0::2ocPI7OkRqSnIVwt4_Wg7w` |
| Create Keyword Monitor | POST | `/api/v1/monitors/keywords` | `conn_mod_def::GMg68uPMgJU::xFvrIsDaRZGKOK7_HTA1JA` |
| Update a Keyword Monitor | PATCH | `/api/v1/monitors/keywords/{{id}}` | `conn_mod_def::GMg681VThVw::XZUpDzPsSpa820ZGVDHhTA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event by ID | GET | `/api/v1/events/{{id}}` | `conn_mod_def::GMg68PKAlTc::92ExfD4XQKeTcEhob8SaPw` |
| List Events | GET | `/api/v1/events` | `conn_mod_def::GMg68RFUkPo::mGIHcWIsRk-q30rzNPYRFQ` |

### GuestWallets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Guest Wallet Status | GET | `/api/v1/guest-wallets/status` | `conn_mod_def::GMg68jyFgXY::PViVnqU6R969OR7b3ru8Ng` |
| Create a Guest Wallet Checkout | POST | `/api/v1/guest-wallets` | `conn_mod_def::GMg68YKcy8s::geIP7zybRLq2eVlAyeJGLw` |

### KeywordMonitor

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Keyword Monitor | GET | `/api/v1/monitors/keywords/{{id}}` | `conn_mod_def::GMg68z-HNag::jWXPkHFFQUCho0LBsyJ3bQ` |
| Delete a Keyword Monitor | DELETE | `/api/v1/monitors/keywords/{{id}}` | `conn_mod_def::GMg68taUFIE::KCFClrGDReubeyBxO8qGUw` |

### XMedia

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Media Using X Media | POST | `/api/v1/x/media/download` | `conn_mod_def::GMg68uMcQJA::z8AAZZMBQLuqXK0q6ACAkQ` |
| Upload Media Using X | POST | `/api/v1/x/media` | `conn_mod_def::GMg6_Klo6Fk::ti0k1NC8TAug17beR9U8yA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits Balance | GET | `/api/v1/credits` | `conn_mod_def::GMg687_z9N4::tcqPlQk4TjOwDIOui_GfBg` |
| Top Up Credits Checkout | POST | `/api/v1/credits/topup` | `conn_mod_def::GMg688Vq9x4::qQxYd6N9TpyXF3rfrONHwA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Followers | GET | `/api/v1/x/users/{{id}}/followers` | `conn_mod_def::GMg6-B3Nars::wuVmi2CJRVq_tCJSUbBZgw` |
| List a User's Following | GET | `/api/v1/x/users/{{id}}/following` | `conn_mod_def::GMg692Ob8HU::P8RRyWpNQyCzsRdh9_LdTw` |

### XCommunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an X Community | DELETE | `/api/v1/x/communities/{{id}}` | `conn_mod_def::GMg6-xbZDXU::n_klPzFmRsix8H8xeowMTA` |
| Leave an X Community | DELETE | `/api/v1/x/communities/{{id}}/join` | `conn_mod_def::GMg6-6vdgNc::ebZEnpt3QJaOBssvifrJqQ` |

### XArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an X Article by tweet ID | GET | `/api/v1/x/articles/{{tweetId}}` | `conn_mod_def::GMg67kzMZrU::lsTjaR2JQtWooy756zGbyw` |

### CommunityModerators

| Action | Method | Path | Action id |
|---|---|---|---|
| List Moderators of a Community | GET | `/api/v1/x/communities/{{id}}/moderators` | `conn_mod_def::GMg67snai14::iftgGdexSFeYa2kIx6ZFAQ` |

### CommunityMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Community's Members | GET | `/api/v1/x/communities/{{id}}/members` | `conn_mod_def::GMg67t1UBck::IRF328qgTLaGx6w89vkCvA` |

### Compose

| Action | Method | Path | Action id |
|---|---|---|---|
| Compose Using API v1 | POST | `/api/v1/compose` | `conn_mod_def::GMg6718IR9A::PGOM62S9Qdu14r3bmvK-Yw` |

### Radar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Radar Topics | GET | `/api/v1/radar` | `conn_mod_def::GMg68AbJJ7E::hmGSfMrSSpi1poHufE-ADQ` |

This lists 90 of 123 actions. For anything not here, call `search_one_platform_actions` with platform `xquik`. The full catalog is at https://www.withone.ai/knowledge/xquik.

## When a call fails

The error comes from Xquik, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/xquik

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
