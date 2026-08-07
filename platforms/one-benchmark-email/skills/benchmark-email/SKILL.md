---
name: benchmark-email
description: Benchmark Email is an intuitive email-marketing platform that enables marketers to design mobile-responsive campaigns with drag-and-drop ease, segment contacts for targeted sends, and track real-time engagement metrics to optimize performance. Read and write Benchmark Email data through One: emails, contacts, integration, contactlists, signupforms, images and more, 348 actions with real parameter documentation. Use whenever the user asks to look something up in Benchmark Email, create or update a record there, or build code against the Benchmark Email API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: benchmark-email
  generated-from: one-knowledge-base
---

# Benchmark Email through One

Benchmark Email is an intuitive email-marketing platform that enables marketers to design mobile-responsive campaigns with drag-and-drop ease, segment contacts for targeted sends, and track real-time engagement metrics to optimize performance.

One exposes Benchmark Email through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `benchmark-email` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Benchmark Email is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Benchmark Email account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Email Report (by Email ID and Report Type) | GET | `/Emails/{{id}}/{{rType}}/Report/Download` | `conn_mod_def::GJ0HsiDNh20::MttbmUJOTSK1aDnh446xiA` |
| Get an Email’s AB Split Details | GET | `/Emails/{{id}}/ABSplit` | `conn_mod_def::GJ0HqrzmbUE::o1lSCi-BRVWJIzls5Pz3Ow` |
| Get an Email’s Abuse Campaign Report | GET | `/Emails/{{id}}/Report/AbuseCampaign` | `conn_mod_def::GJ0HpNEL1C4::4eN-mG5aTNOIW-9hUX6OTg` |
| Get an Email’s Bounces Report | GET | `/Emails/{{id}}/Report/Bounces` | `conn_mod_def::GJ0Hpk4Qq8U::ceE1UutxSAGVFhOTeRnikw` |
| Get an Email’s Click Heat Map | GET | `/Emails/{{id}}/Report/Click/HeatMap` | `conn_mod_def::GJ0Hp4mzXX4::ndGSjvWDQJKD5hlb94JT3w` |
| Get an Email’s Click Performance Details | GET | `/Emails/{{id}}/Report/ClickPerformance/Details` | `conn_mod_def::GJ0HqMNDk6s::7KS3FcPBQwqU8UsnVKSR1g` |
| Get an Email’s Click Performance Report | GET | `/Emails/{{id}}/Report/ClickPerformance` | `conn_mod_def::GJ0HqAWM4aY::0083Hd3iQFKwHB5PcHvyQQ` |
| Get an Email’s Clicks Report | GET | `/Emails/{{id}}/Report/Clicks` | `conn_mod_def::GJ0HqTojNrI::LN0OQ8mRTt6CFRLelRFtDA` |
| Get an Email’s Details | GET | `/Emails/{{id}}` | `conn_mod_def::GJ0HqyqJtEI::xs52lzsAQA-B-TJL_B38ow` |
| Get an Email’s Forwards Report | GET | `/Emails/{{id}}/Report/Forwards` | `conn_mod_def::GJ0HrKvmhyI::V-p44Z8nTpOeYHhoFrepqQ` |
| Get an Email’s Hourly Opens Report | GET | `/Emails/{{id}}/Report/Opens/Hourly` | `conn_mod_def::GJ0HrjPKPog::zzbtvp71QMuHjcyKnvj6dA` |
| Get an Email’s Link Detail | GET | `/Emails/{{id}}/LinkDetail` | `conn_mod_def::GJ0Hrb1rbtg::HD_PAEivQgKhcO-jDKj2ow` |

32 more Emails actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Contacts Across Lists | GET | `/Contact/{{listIDs}}/Compare` | `conn_mod_def::GJ0HeW1OYY8::EcsyM3msSpGw2fC0gxL0hA` |
| Get a Contact List’s Clean Count | GET | `/Contact/{{listId}}/CleanCount` | `conn_mod_def::GJ0HlBp2Xoc::GgZZoIEVRw2sBCMPWsALlw` |
| Get a Contact List’s Contact Summary | GET | `/Contact/{{listId}}/ContactSummary` | `conn_mod_def::GJ0HlI3sPxw::5qUVdzHJRUSxVUk0B31xcg` |
| Get a Contact's Report History | GET | `/Contact/{{eMailID}}/ContactReportHistory` | `conn_mod_def::GJ0HiCx0wrc::04jRMFhkRhK96aGXZr4RVA` |
| Get a List Contact’s Details | GET | `/Contact/{{listId}}/ContactDetails/{{id}}` | `conn_mod_def::GJ0Hh4OqBhY::G1MlbPPXTVi-qhvyxdldBw` |
| Get Active Contact Count | GET | `/Contact/ActiveCount` | `conn_mod_def::GJ0HhWlyb7I::6k1e7B3dQiicAzr8mtRwpg` |
| Get Contact Trash Count | GET | `/Contact/TrashCount` | `conn_mod_def::GJ0HlQkTdc4::55008tGFTQy_Xj0Td5Ndyg` |
| Get Contacts Count (by List IDs and Segment IDs) | GET | `/Contact/Count/{{listIDs}}/{{segmentIDs}}` | `conn_mod_def::GJ0HjQ1X79M::fkXj6K_UTneqRnDp67TT5A` |
| Get Filtered Contacts in a List | GET | `/Contact/{{listId}}/ContactDetails` | `conn_mod_def::GJ0Hj4SREWY::6KdAEv2yRGuTu54Q5YSBDA` |
| Get Filtered Contacts with Extra Fields (for a List) | GET | `/Contact/{{listId}}/ContactDetails/ExtraFields` | `conn_mod_def::GJ0HkC_w0ok::1K1hkawuSUq0i8826bioMA` |
| Get Unique Contact Count | GET | `/Contact/UniqueCount` | `conn_mod_def::GJ0HlaMB7tM::fxGqARSgSwipHvFzKcV4IQ` |
| List Contacts | GET | `/Contact/` | `conn_mod_def::GJ0HhOr9Ew0::NHXdkw7JQUezv6AjTSa4DA` |

19 more Contacts actions are available through search.

### Integration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shopify Product Grid (Tabular HTML) | GET | `/Integration/ShopifyProductGrid` | `conn_mod_def::GJ0H3VDloDM::mFBD8DeaRk6dRssT_gc_BA` |
| LinkedIn Test Connection | GET | `/Integration/LinkedInTest` | `conn_mod_def::GJ0H4WKPUIk::pOiti90PQOKuWdrRdJOB2g` |
| SalesForce Test (Integration) | GET | `/Integration/SalesForceTest` | `conn_mod_def::GJ0H4v1sZ6g::XpJE3NpgT1aS4ZjxslhjpQ` |
| Test eBay Integration | GET | `/Integration/EbayTest` | `conn_mod_def::GJ0H5E0acUg::HrnXWAGRRHSCFarWIyXHLw` |
| Test Etsy Integration | GET | `/Integration/EtsyTest` | `conn_mod_def::GJ0H5MBpAso::16vzvPrAS-mpIIJsF1o5xA` |
| Test EventBrite Integration | GET | `/Integration/EventbriteTest` | `conn_mod_def::GJ0H5TgIY-w::DhFeZn9RRh-FnKWJw_vkfg` |
| Test Facebook Events Integration | GET | `/Integration/FacebookEventsTest` | `conn_mod_def::GJ0H5cNveDc::-s8m6DDPQw24JTRz-6GvUw` |
| Test Instagram Connection | GET | `/Integration/InstagramTest` | `conn_mod_def::GJ0H5roBUFs::X9S8cgMJRo2nlLdO7o_Rhg` |
| Test Pinterest Integration | GET | `/Integration/PinterestTest` | `conn_mod_def::GJ0H5y-xl3A::z-g4g7ooQ0m_w1NM312FWg` |
| Test Twitter Integration | GET | `/Integration/TwitterTest` | `conn_mod_def::GJ0H56AX6z8::aVNVcFo2Tcu9DwvsUAa8Ow` |
| Twitter Tweet Test | GET | `/Integration/TwitterTweetsTest` | `conn_mod_def::GJ0H6BLgasU::6bAgrNHDTdehhS5W-cSc-A` |
| Connect to a Service (Get Auth URL with Extra Data) | POST | `/Integration/AuthUrlExtra/{{authSite}}` | `conn_mod_def::GJ0Hzy71Rhs::WAiqBtPPSJKWALzjY5QvFQ` |

4 more Integration actions are available through search.

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact List’s Details | GET | `/Contact/{{listId}}` | `conn_mod_def::GJ0Hi_JIzH8::HpW4BRtcTd294BR5CN-dkA` |
| Get Contact Lists by List IDs | GET | `/Contact/{{listIDs}}/All` | `conn_mod_def::GJ0Hik_LodU::LoBMa-dKQsyO55sAiwblcw` |
| Create a Contact List | POST | `/Contact/` | `conn_mod_def::GJ0HezrjgJI::GWnn2riAT-6DF-LRU9poXQ` |
| Delete a Contact List | DELETE | `/Contact/{{listId}}` | `conn_mod_def::GJ0HfUFWZVg::hGOIBLRGRQKjM-qxEC76xw` |
| Delete a Contact List from Trash | DELETE | `/Contact/{{listId}}/Trash` | `conn_mod_def::GJ0HgyAeXfY::n4GKmizNSe28MlPpxt0KTw` |
| Delete Lists | DELETE | `/Contact/DeleteList/{{listIDs}}` | `conn_mod_def::GJ0HfbsoLhE::1tUQFnPXRea8yvhQbw0WaA` |
| Delete Trash List | DELETE | `/Contact/DeleteTrashList/{{listIDs}}` | `conn_mod_def::GJ0Hg5cq0U8::zr6AfwiaSYCWFhDseOLlug` |
| Modify a Contact List | PATCH | `/Contact/{{listId}}` | `conn_mod_def::GJ0HmCcnU4Y::mksusTG4She7fZdH_L5PRA` |
| Restore Trash List(s) | PATCH | `/Contact/RestoreTrashList/{{listIDs}}` | `conn_mod_def::GJ0HmnuWG3E::jjD_3h3mTMqFjsDCTgmG-Q` |
| Share a Contact List with Sub-Accounts | POST | `/Contact/{{listId}}/ShareLists/{{clientIds}}` | `conn_mod_def::GJ0HnagV_P8::Gk0ZzZTSTtqN4E1-dcZF1A` |

### SignupForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Signup Form Link | GET | `/SignupForm/{{id}}/Link` | `conn_mod_def::GJ0H9637aGI::ltrO51G1SzuaKKRh1IqVXw` |
| Get a Signup Form’s Button Code | GET | `/SignupForm/{{id}}/Code/Button` | `conn_mod_def::GJ0H9qz7V7w::yiMDZrqpR9mQiKWAi2DuwQ` |
| Get a Signup Form's Details | GET | `/SignupForm/{{id}}` | `conn_mod_def::GJ0H8t1uvao::ljAf16qwRfqgYHn8CglGKg` |
| Get a Signup Form’s Preview Code | GET | `/SignupForm/{{id}}/Code/Preview` | `conn_mod_def::GJ0H9c0IDW0::ZcabpV8RRw-qC0uGM21xhA` |
| Get Signup Form List | GET | `/Contact/ListbuilderList` | `conn_mod_def::GJ0Hk11exIc::0TXlzWIDQR6FK6_bz1yx6g` |
| List Signup Forms | GET | `/SignupForm` | `conn_mod_def::GJ0H-JJTZ-g::eoVVzmV5SbSb7caQGN8eNA` |
| Copy an Existing Signup Form | POST | `/SignupForm/{{id}}/Copy` | `conn_mod_def::GJ0H8WDwJG0::d5QeMvhHRYavX4MXxSFVNQ` |
| Create a Signup Form | POST | `/SignupForm/` | `conn_mod_def::GJ0H8dTX3uo::BzRNKjtETHSc36uWwEIudQ` |
| Delete an Existing Signup Form | DELETE | `/SignupForm/{{id}}` | `conn_mod_def::GJ0H8k4Mbjg::HI7N7VK3RwyLkJ9qTme_DQ` |
| Update a Signup Form | PATCH | `/SignupForm/{{id}}` | `conn_mod_def::GJ0H-afRcvk::em7CpkGKTJ-OmRjfEK90Vg` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Image Hosting Summary | GET | `/Images/Summary` | `conn_mod_def::GJ0HyPaGusc::FmdW_ELfSNemmnyORk0JGw` |
| Get Image Details | GET | `/Images/{{imageId}}` | `conn_mod_def::GJ0HyWAX-oo::3WBIXYMLSYaakj-hDXOV0A` |
| List Images | GET | `/Images/` | `conn_mod_def::GJ0Hx_k7Qes::IN_n9m3CRtGYjstac5-PoQ` |
| Copy an Image to a Sub-account | POST | `/Images/{{imageId}}/Copy` | `conn_mod_def::GJ0HxsyQmRE::Bu3hUYwUQ0WvJP2W_xoOBQ` |
| Delete an Image | DELETE | `/Images/{{imageId}}` | `conn_mod_def::GJ0HxzbtG8c::WL9gi-VnSMuXpap3noKXrg` |
| Update an Image | PATCH | `/Images/{{imageId}}` | `conn_mod_def::GJ0HynugRFI::R9VZtrCnRSWwqI95O0k6DQ` |
| Upload an Image | POST | `/Images/` | `conn_mod_def::GJ0Hyw7YQEo::l2nP_O_oTlSyIPb-2Mj30Q` |
| Upload Logo Image (by Image Type and Extra) | POST | `/Images/{{imageType}}/{{extra}}` | `conn_mod_def::GJ0Hy4qPOso::ZXY2UTEoS_yrIyUQAEmUqg` |

### AbSplit

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an A/B Split Test Compare Report | GET | `/ABSplit/{{id}}/Compare` | `conn_mod_def::GJ0HY2V1mfU::Sbjy7P_bT56G7cIErHbSdQ` |
| Get an AB Split Test’s Details | GET | `/ABSplit/{{id}}` | `conn_mod_def::GJ0HY9O125Y::QulcQCK9S4G1f3JG1iF9Hw` |
| Get an AB Split Test’s Results | GET | `/ABSplit/{{id}}/Results` | `conn_mod_def::GJ0HZQGj-Lw::_LgM3rYaQhqCwTm9sLM_Sg` |
| List AB Tests | GET | `/ABSplit/` | `conn_mod_def::GJ0HYrgffWw::dU3-8PV-SsCgYi2YHCvwEw` |
| Delete an AB Test Email | DELETE | `/ABSplit/{{id}}` | `conn_mod_def::GJ0HYSnatUE::1_-30ts2RAGFGelKNXX56A` |
| Update an AB Test (AB Split) | PATCH | `/ABSplit/{{id}}` | `conn_mod_def::GJ0HZZrnpBw::MfLWMZY4SHaDMvv0HsGEdw` |
| Update an AB Test’s Status | PATCH | `/ABSplit/{{id}}/Status` | `conn_mod_def::GJ0HZjGykP8::5nByi6ZmQTSwqNMVkr-dsA` |

### ContactSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Segment by ID | GET | `/Contact/Segments/{{segmentId}}` | `conn_mod_def::GJ0HkVPu_iA::HmSOgDwtSvWP9YuCrXa3pQ` |
| Get a List’s Auto-Generated Segment Name | GET | `/Contact/Segments/Name/{{listId}}` | `conn_mod_def::GJ0HkNcqGBs::XvGIWNSwRMSIRNJrDquWkg` |
| Get Download Data for a Contact Segment | GET | `/Contact/{{id}}/Segment/Download` | `conn_mod_def::GJ0HjkDaQuQ::w42yH4TeQWiSrcP_ozzhmg` |
| List Contact Segments | GET | `/Contact/Segments` | `conn_mod_def::GJ0HlrYPcSc::YL5r-xMDQkauyKqPyijT3A` |
| Delete a Contact Segment | DELETE | `/Contact/Segments/{{segmentId}}` | `conn_mod_def::GJ0HfqOQobM::WLdurE1ESb2J9tpkaQYNKw` |
| Update a Contact Segment | PATCH | `/Contact/Segments/{{segmentId}}` | `conn_mod_def::GJ0Hn0RX14o::p3-CPKS_T0ie2Rxah4G8RA` |

### Polls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Poll Preview (Render) | GET | `/Poll/{{pollId}}/Render` | `conn_mod_def::GJ0H8G1Atdo::NNKHankiQ8-opd61MzLwMw` |
| List Polls | GET | `/Poll/` | `conn_mod_def::GJ0H72aHXlY::Io6z3pq_TFuB1NQd9gYNfg` |
| Copy a Poll | POST | `/Poll/{{pollId}}/Copy` | `conn_mod_def::GJ0H7QLnLDc::ebVjlS2qQDScqxK_LWWRmw` |
| Create Poll | POST | `/Poll/` | `conn_mod_def::GJ0H7YNBros::3jwAhuj7RYuO78TyKtP-dQ` |
| Delete a Poll | DELETE | `/Poll/{{pollId}}` | `conn_mod_def::GJ0H7kegYOY::rdOZ2XTbTEK8JBk6SkCk3A` |
| Update a Poll | PATCH | `/Poll/{{pollId}}` | `conn_mod_def::GJ0H8OS7sJs::aDprqRbYTdywyNOJJk4zKQ` |

### Client

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if Responsive | GET | `/Client/Responsive` | `conn_mod_def::GJ0IB6aNSrU::KMNruKf0TwiPifMeEL9KJQ` |
| Get Client Details | GET | `/Client/` | `conn_mod_def::GJ0IC5LE8Pw::Go6ayc_4SVyRL-N6CMGRIA` |
| Change Client Password | PATCH | `/Client/Password` | `conn_mod_def::GJ0IBeYKlRo::ujTG-DCPRRW_rIWyoy3Siw` |
| Link a Client Account | POST | `/Client/LinkAccount/` | `conn_mod_def::GJ0IFb_-uow::nVFNtlfyQ-KjiwM4kljnxA` |
| Set Responsive (Client) | PATCH | `/Client/Responsive` | `conn_mod_def::GJ0IGOHAi7Y::RtQyw-Z3SRGtc1ZjRrCYDg` |
| Update/Edit Client Profile | PATCH | `/Client/` | `conn_mod_def::GJ0IGrFixtE::FGg6lYOlTG6Pj5HUly0plg` |

### SubAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sub-Account’s Balance | GET | `/Client/SubAccount/{{id}}/Balance` | `conn_mod_def::GJ0IEeX3gaM::gdZgNo_aTPunfuVRqiNR4g` |

5 more SubAccounts actions are available through search.

This lists 90 of 348 actions. For anything not here, call `search_one_platform_actions` with platform `benchmark-email`. The full catalog is at https://www.withone.ai/knowledge/benchmark-email.

## When a call fails

The error comes from Benchmark Email, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/benchmark-email

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
