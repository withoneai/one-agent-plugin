---
name: klaviyo
description: Klaviyo is a marketing automation platform built for eCommerce. It helps businesses deliver personalized email and SMS campaigns based on customer data and shopping behavior. Read and write Klaviyo data through One: tags, lists, profiles, catalogcategories, catalogitems, flows and more, 304 actions with real parameter documentation. Use whenever the user asks to look something up in Klaviyo, create or update a record there, or build code against the Klaviyo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: klaviyo
  generated-from: one-knowledge-base
---

# Klaviyo through One

Klaviyo is a marketing automation platform built for eCommerce. It helps businesses deliver personalized email and SMS campaigns based on customer data and shopping behavior.

One exposes Klaviyo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `klaviyo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Klaviyo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Klaviyo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag | GET | `/api/tags/{{id}}` | `conn_mod_def::GJ4txDsB8rA::N4tSwq5pT8GmgAk91OMqkw` |
| Get a Tag’s Tag Group ID | GET | `/api/tags/{{id}}/relationships/tag-group` | `conn_mod_def::GJ4txOAZerM::8haMnPG9RqCv2mLQOC5BDQ` |
| Get Campaign IDs for a Tag | GET | `/api/tags/{{id}}/relationships/campaigns` | `conn_mod_def::GJ4txEHj_qw::tY4VHKbYSTCLISqSGxI8xw` |
| Get Flow IDs for a Tag | GET | `/api/tags/{{id}}/relationships/flows` | `conn_mod_def::GJ4txGCryNA::ljeL-M7DTh6EUKolSs97Xg` |
| Get List IDs for a Tag | GET | `/api/tags/{{id}}/relationships/lists` | `conn_mod_def::GJ4txDC4svs::9MlOOls7R2acIKTuqK4mxQ` |
| Get Segment IDs for a Tag | GET | `/api/tags/{{id}}/relationships/segments` | `conn_mod_def::GJ4txDZSvlM::LSxmj8TvSTWmJuiaL77nCg` |
| Get Tags for a List | GET | `/api/lists/{{id}}/tags` | `conn_mod_def::GJ4ttt-tPts::QVvXE11RS8WNUAe2397dLw` |
| List Tags | GET | `/tags` | `conn_mod_def::GJ4txXo1rMU::R6Yd4EsoRE6xOyVw5K08XQ` |
| Associate a Tag with Lists | POST | `/api/tags/{{id}}/relationships/lists` | `conn_mod_def::GJ4txe_r9u0::CnMLDq0nT-eYRG8BwBADDA` |
| Create Tag | POST | `/tags` | `conn_mod_def::GJ4tw2Zlweo::gGYB6JlJTbmx8Zyzfd-Ieg` |
| Delete a Tag | DELETE | `/api/tags/{{id}}` | `conn_mod_def::GJ4tw1GUH3c::nHVBoDuNQ7yflzazW7n8xQ` |
| Remove a Tag from Campaigns | DELETE | `/api/tags/{{id}}/relationships/campaigns` | `conn_mod_def::GJ4txXU43_g::2lq8-BSxRFGbud4k6vLRuA` |

6 more Tags actions are available through search.

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/api/lists/{{id}}` | `conn_mod_def::GJ4ttlaoWtk::-wPOTZRFTzGqkLJ2YDs16w` |
| Get a List’s Profile IDs (Relationships) | GET | `/api/lists/{{id}}/relationships/profiles` | `conn_mod_def::GJ4ttzG_M58::BdjbuvVPT_esqxeUrn7CCQ` |
| Get Lists | GET | `/lists` | `conn_mod_def::GJ4tty0O4QE::gfyVQcR4TFWQXZ0w10-_5A` |
| Get Profiles for a List | GET | `/api/lists/{{id}}/profiles` | `conn_mod_def::GJ4ttvKbnzY::HmYHmJfrTBOvPMaNCpD5jg` |
| Get Tag IDs for a List | GET | `/api/lists/{{id}}/relationships/tags` | `conn_mod_def::GJ4tttTunpM::XwCGRzRmRKaBHruyTi0WUg` |
| List Flow Trigger IDs for a List | GET | `/api/lists/{{id}}/relationships/flow-triggers` | `conn_mod_def::GJ4ttflarEw::s3V413GfQ0Cp1p5bkhWebA` |
| Add Profiles to a List | POST | `/api/lists/{{id}}/relationships/profiles` | `conn_mod_def::GJ4ttXFDlnA::X8V7-2kRQrCemUieIArrhg` |
| Create List | POST | `/lists` | `conn_mod_def::GJ4ttfpCfMw::1bTepFxXSCG7QCKors9Hvw` |
| Delete a List | DELETE | `/api/lists/{{id}}` | `conn_mod_def::GJ4ttgqdfPk::xQtxktRgQhejKdfexzP0iA` |
| Remove Profiles from a List | DELETE | `/api/lists/{{id}}/relationships/profiles` | `conn_mod_def::GJ4tt7xlJi0::DggE0lR8Q-mStl8j7rtXGA` |
| Update a List | PATCH | `/api/lists/{{id}}` | `conn_mod_def::GJ4tt8ZCuPA::5HkJqcV9RBmJb0YEHMCkmQ` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Profile by ID | GET | `/api/profiles/{{id}}` | `conn_mod_def::GJ4tvkBPMgs::KfLN7BdHRf2LZXzou0oQRA` |
| Get List IDs for a Profile | GET | `/api/profiles/{{id}}/relationships/lists` | `conn_mod_def::GJ4tvXr394A::Cq2BGzVcR5-zqnzUeCCu6A` |
| Get Lists for a Profile | GET | `/api/profiles/{{id}}/lists` | `conn_mod_def::GJ4tvjJ2hEA::-jEZsYmlSxKIz4XZ5vl8KQ` |
| Get Profiles | GET | `/profiles` | `conn_mod_def::GJ4tvtpPZB4::bVRUqJrKQfGIAmwepJmFZg` |
| Get Push Token IDs for a Profile | GET | `/api/profiles/{{id}}/relationships/push-tokens` | `conn_mod_def::GJ4tvr_EHX8::m7NU6wOUS6SBOVvVwWjUlw` |
| Get Segment IDs for a Profile | GET | `/api/profiles/{{id}}/relationships/segments` | `conn_mod_def::GJ4tv4eD4dQ::q2Xd3VNWT6We6cASfIo9jg` |
| Get Segments for a Profile | GET | `/api/profiles/{{id}}/segments` | `conn_mod_def::GJ4tv42qWXY::rNLNzhaOSViq9ECZ2Dps8A` |
| Create or Update a Profile | POST | `/profile-import` | `conn_mod_def::GJ4tvDdOIYc::fazk0o0lRG-VW2Bpq_si_Q` |
| Create Profile | POST | `/profiles` | `conn_mod_def::GJ4tvCvS7YE::RiZ9-tQfTReAcDyhjtO1Gg` |
| Merge Profiles (Merge a Source Profile into a Destination Profile) | POST | `/profile-merge` | `conn_mod_def::GJ4tv46txKg::8kPn48iKTiqDssJ2GWYRcQ` |
| Update a Profile | PATCH | `/api/profiles/{{id}}` | `conn_mod_def::GJ4tv4_KlTU::eThXZxyTS_ehOaX1tsbvhQ` |

### CatalogCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Catalog Category | GET | `/api/catalog-categories/{{id}}` | `conn_mod_def::GJ4tp6jQYvY::L0FH1GseSZCQoAYzRF2ryg` |
| Get Catalog Categories | GET | `/catalog-categories` | `conn_mod_def::GJ4tpto3MWk::3dYXK53uSmunHIQjZSnP9w` |
| Get Item IDs for a Catalog Category | GET | `/api/catalog-categories/{{id}}/relationships/items` | `conn_mod_def::GJ4tqGFox88::LMOaNG62SgSjHSiVo5RA1g` |
| Get Items for a Catalog Category | GET | `/api/catalog-categories/{{id}}/items` | `conn_mod_def::GJ4tqGQ9ev4::garWhreTTN-WGtw_r3sBUQ` |
| Add Items to a Catalog Category | POST | `/api/catalog-categories/{{id}}/relationships/items` | `conn_mod_def::GJ4toSAgZDg::IkU_ZXEnRBC6ed1yjHmLZA` |
| Create a Catalog Category | POST | `/catalog-categories` | `conn_mod_def::GJ4to01Pqxo::-8WRHufNSu2WExhcQB3I1Q` |
| Delete a Catalog Category | DELETE | `/api/catalog-categories/{{id}}` | `conn_mod_def::GJ4to0e3ano::xnU5vm7RRj-0MykJZs1LlA` |
| Remove Items from a Catalog Category | DELETE | `/api/catalog-categories/{{id}}/relationships/items` | `conn_mod_def::GJ4tqQ08d0o::1Fc1Ec6XQiKGXV_iacy3pA` |
| Update a Catalog Category | PATCH | `/api/catalog-categories/{{id}}` | `conn_mod_def::GJ4tqQgeQzw::XWsmUai_SUW_z-OoqIdPzA` |
| Update Items for a Catalog Category | PATCH | `/api/catalog-categories/{{id}}/relationships/items` | `conn_mod_def::GJ4tqdttPpY::_CcSWMvuTtSg_hrKrwINNw` |

### CatalogItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Catalog Item | GET | `/api/catalog-items/{{id}}` | `conn_mod_def::GJ4tp4Xcd00::KvdQIyJbRVmmWxJpveNKlA` |
| Get a Catalog Item’s Categories | GET | `/api/catalog-items/{{id}}/categories` | `conn_mod_def::GJ4tqGeJvAM::kDLhbjVgT7aaVHdxmektqQ` |
| Get Catalog Items | GET | `/catalog-items` | `conn_mod_def::GJ4tp8sBzN8::7u_3MjhMQv2x7u7rlzKnBA` |
| Get Variant IDs for a Catalog Item | GET | `/api/catalog-items/{{id}}/relationships/variants` | `conn_mod_def::GJ4tqIlHzuw::rkPGLiwdTVqdr9UOPF84Hw` |
| Add Categories to a Catalog Item | POST | `/api/catalog-items/{{id}}/relationships/categories` | `conn_mod_def::GJ4toR64-g4::poV4BBOFR8yiKEek0sSFsQ` |
| Create Catalog Item | POST | `/catalog-items` | `conn_mod_def::GJ4to0wyRXw::0XL4QRuFSHGEjQGKwNf7mw` |
| Delete a Catalog Item | DELETE | `/api/catalog-items/{{id}}` | `conn_mod_def::GJ4to6H3o1Y::APr-RncHSfqIgNTPnaunMw` |
| Remove Categories from a Catalog Item | DELETE | `/api/catalog-items/{{id}}/relationships/categories` | `conn_mod_def::GJ4tqUxxl2g::aZWiGN5STBC8vCNXiEQ_yQ` |
| Update a Catalog Item | PATCH | `/api/catalog-items/{{id}}` | `conn_mod_def::GJ4tqVnrGA4::q2P4Hxl3TNK9IF5JRKHT2A` |
| Update Categories for a Catalog Item | PATCH | `/api/catalog-items/{{id}}/relationships/categories` | `conn_mod_def::GJ4tqjFURnc::HasEHd89QwexwM4jPPuKiQ` |

### Flows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Flow | GET | `/api/flows/{{id}}` | `conn_mod_def::GJ4tsgUd-2M::w8rdFzh5R0KV8Rm1eb7tOQ` |
| Get a Flow for a Flow Action | GET | `/api/flow-actions/{{id}}/flow` | `conn_mod_def::GJ4tsfKl11Q::eaXEqiNZT32OItdb4eHPcQ` |
| Get a Flow’s Action Relationship IDs | GET | `/api/flows/{{id}}/relationships/flow-actions` | `conn_mod_def::GJ4tsS8cR_8::8xPD3_WVQSemoAYVwFI2bw` |
| Get Flows | GET | `/flows` | `conn_mod_def::GJ4tssxlRSw::YqjmkHasRAuZ7tFos0Es6w` |
| Get Flows Triggered by a List | GET | `/api/lists/{{id}}/flow-triggers` | `conn_mod_def::GJ4ttg8VxPM::lE0gN6SYSOubGcDW3AsCiA` |
| Get Flows Triggered by a Segment | GET | `/api/segments/{{id}}/flow-triggers` | `conn_mod_def::GJ4tweqFsZM::bUjIdpCOQL-YmFTW2rq42Q` |
| Get Tag IDs for a Flow | GET | `/api/flows/{{id}}/relationships/tags` | `conn_mod_def::GJ4tsq9YfF8::4v5ZbiVmQYGnoSKSQ-kJyw` |
| Create a Flow | POST | `/flows` | `conn_mod_def::GJ4tsSkDvMg::5b19bRh4SFC-xAPyXCDj6A` |
| Delete a Flow | DELETE | `/api/flows/{{id}}` | `conn_mod_def::GJ4tsR9rXyM::mrKH3vw_Rrana0v_qXk2fw` |
| Update a Flow’s Status | PATCH | `/api/flows/{{id}}` | `conn_mod_def::GJ4ts2mLPVY::QCbSLQrlR8mMmYbabiMN4Q` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment | GET | `/api/segments/{{id}}` | `conn_mod_def::GJ4twsKbuG8::SWYOO6STRBy6kPolrGHcFw` |
| Get IDs for Flows Triggered by a Segment | GET | `/api/segments/{{id}}/relationships/flow-triggers` | `conn_mod_def::GJ4twetIAxU::oxASsQMlQz-hlhsKV-m_SQ` |
| Get Profile IDs for a Segment | GET | `/api/segments/{{id}}/relationships/profiles` | `conn_mod_def::GJ4twfgedVk::iDD2OJhjQpeFx0HqU86Q5Q` |
| Get Profiles for a Segment | GET | `/api/segments/{{id}}/profiles` | `conn_mod_def::GJ4twtcnDT8::TaTQMA_jR1a9nHfOb2SK4w` |
| Get Segments | GET | `/segments` | `conn_mod_def::GJ4twt1nfCE::Mu8KUdbzQ_OeH05hkfBQUQ` |
| Get Tag IDs for a Segment | GET | `/api/segments/{{id}}/relationships/tags` | `conn_mod_def::GJ4twrd6lQk::C4DbDgTySJWRO46qxI6fOA` |
| Get Tags for a Segment | GET | `/api/segments/{{id}}/tags` | `conn_mod_def::GJ4twr_Qx50::WMyqCarqR5OqnwyJgtvelA` |
| Create Segment | POST | `/segments` | `conn_mod_def::GJ4twhFXLR0::YcC3JkCyS6uX_gZOQ5THMQ` |
| Delete a Segment | DELETE | `/api/segments/{{id}}` | `conn_mod_def::GJ4twjZcVT0::-X7IWvTYTnCvVDFazVMHEA` |
| Update a Segment | PATCH | `/api/segments/{{id}}` | `conn_mod_def::GJ4tw1KRK2U::QfrzPzc_QpyeEEAWWhmBmg` |

### CampaignMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Message | GET | `/api/campaign-messages/{{id}}` | `conn_mod_def::GJ4tnudftbY::uuvvLoyKSf6ush96dZnqqQ` |
| Get a Campaign Message’s Related Campaign ID | GET | `/api/campaign-messages/{{id}}/relationships/campaign` | `conn_mod_def::GJ4tnd30G4g::Xqme8ejZQd68qN5N_OynfQ` |
| Get a Campaign Message’s Related Template ID | GET | `/api/campaign-messages/{{id}}/relationships/template` | `conn_mod_def::GJ4toJLK-8s::FvwDx-a1T1WGL6cGHGVgrg` |
| Get a Campaign’s Message IDs | GET | `/api/campaigns/{{id}}/relationships/campaign-messages` | `conn_mod_def::GJ4tn7qjuvo::F9BKy7TuTUOxd3cFzwOAbg` |
| Get Messages for a Campaign | GET | `/api/campaigns/{{id}}/campaign-messages` | `conn_mod_def::GJ4tn9RrwSk::j-wXiT_qTcicBYvlwSDhng` |
| Assign a Template to a Campaign Message | POST | `/api/campaign-message-assign-template` | `conn_mod_def::GJ4tnVqV3q4::Hs3AQxVLQwiZ5uYvT7u55A` |
| Update a Campaign Message | PATCH | `/api/campaign-messages/{{id}}` | `conn_mod_def::GJ4toRwa0e0::-Rlc6QHiTX6sBCSlnHuIJw` |
| Update Image for a Campaign Message | PATCH | `/api/campaign-messages/{{id}}/relationships/image` | `conn_mod_def::GJ4toROjnps::q3t78ujJTl-bK5yKxhXhrg` |

### CouponCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Coupon Code | GET | `/api/coupon-codes/{{id}}` | `conn_mod_def::GJ4trPF_kEY::67Cb3TBiSpmjFdb7GD8G7g` |
| Get a Coupon Code’s Related Coupon ID | GET | `/api/coupon-codes/{{id}}/relationships/coupon` | `conn_mod_def::GJ4trdvr7ZY::-VH5WMEBR_WSOXA2WURVWg` |
| Get Coupon Code IDs for a Coupon | GET | `/api/coupons/{{id}}/relationships/coupon-codes` | `conn_mod_def::GJ4trQwxxkQ::X3lVLAfbRIeDKT7aGr1Ecg` |
| Get Coupon Codes | GET | `/api/coupon-codes` | `conn_mod_def::GJ4trR6TS34::_OVgV10pTF--0JR1oPgRdQ` |
| List Coupon Codes for a Coupon | GET | `/api/coupons/{{id}}/coupon-codes` | `conn_mod_def::GJ4trQlntHA::6w2jW1FBQR2ieub7gH0YoQ` |
| Create Coupon Code | POST | `/coupon-codes` | `conn_mod_def::GJ4trF4Cd8U::ET6LGJj7QWuOO5XpG0hA_g` |
| Delete a Coupon Code | DELETE | `/api/coupon-codes/{{id}}` | `conn_mod_def::GJ4trCeRMlY::sbskRi9YQyS35Q699izRqw` |
| Update a Coupon Code | PATCH | `/api/coupon-codes/{{id}}` | `conn_mod_def::GJ4traSsFXA::EoF3VhrWSuKUSJgMgEgG0w` |

This lists 90 of 304 actions. For anything not here, call `search_one_platform_actions` with platform `klaviyo`. The full catalog is at https://www.withone.ai/knowledge/klaviyo.

## When a call fails

The error comes from Klaviyo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/klaviyo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
