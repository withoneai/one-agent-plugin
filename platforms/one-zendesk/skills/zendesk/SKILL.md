---
name: zendesk
description: Zendesk is a customer service and sales platform that helps businesses manage customer support across channels like email, chat, phone, and social media. It’s widely used for ticketing, knowledge bases, and workflow automation. Read and write Zendesk data through One: tickets, users, helpcenterarticles, organizations, views, helpcentersections and more, 885 actions with real parameter documentation. Use whenever the user asks to look something up in Zendesk, create or update a record there, or build code against the Zendesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zendesk
  generated-from: one-knowledge-base
---

# Zendesk through One

Zendesk is a customer service and sales platform that helps businesses manage customer support across channels like email, chat, phone, and social media. It’s widely used for ticketing, knowledge bases, and workflow automation.

One exposes Zendesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zendesk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zendesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zendesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Count a User’s Assigned Tickets | GET | `/api/v2/users/{{userId}}/tickets/assigned/count` | `conn_mod_def::GJ8Yrp7Cg8Y::YiSb49ojTGOcSvFKKmmFwQ` |
| Count Tickets | GET | `/api/v2/tickets/count` | `conn_mod_def::GJ8YrpiR8Lg::cNa7kx6iRIu_szTjLYeQpw` |
| Get a Ticket’s Related Information | GET | `/api/v2/tickets/{{ticketId}}/related` | `conn_mod_def::GJ8Ysb5EuiA::magwfJ7QQkm7jViHM3Xp9A` |
| Incremental Ticket Export (Cursor-based) | GET | `/api/v2/incremental/tickets/cursor` | `conn_mod_def::GJ8Yg-wzuPs::ona0Gzt-S_6lBP1I8V8y7g` |
| Incremental Ticket Export (Time-Based) | GET | `/api/v2/incremental/tickets` | `conn_mod_def::GJ8Yg-NVdgo::eilHTHLdTV2SKwKT8ARILQ` |
| List a User's Assigned Tickets | GET | `/api/v2/users/{{userId}}/tickets/assigned` | `conn_mod_def::GJ8YsL3oZ-I::c4Pa2F_lRX-aRmGZ-mAeow` |
| List a User's CC’d Tickets (CCD) | GET | `/api/v2/users/{{userId}}/tickets/ccd` | `conn_mod_def::GJ8YsMLY5_w::FgcjdJgNQZKbOE7fzmxXAA` |
| List a User’s Followed Tickets | GET | `/api/v2/users/{{userId}}/tickets/followed` | `conn_mod_def::GJ8YsOQuto4::jQplvftrRZuUTkzdyrrEbQ` |
| List a User's Requested Tickets | GET | `/api/v2/users/{{userId}}/tickets/requested` | `conn_mod_def::GJ8YsN413HY::-iQGWUHHSZ-SIcjv-epMRw` |
| List an Organization’s Tickets | GET | `/api/v2/organizations/{{organizationId}}/tickets` | `conn_mod_def::GJ8YsBFFoa4::Xw4FGndNQjyXqOADMc2U-g` |
| List Recent Tickets | GET | `/api/v2/tickets/recent` | `conn_mod_def::GJ8YsAbgwZU::v8t-TFnTR2e_ZcUlSsv1AA` |
| List Tickets | GET | `/api/v2/tickets` | `conn_mod_def::GJ8YsEOuyzs::i5cu44u4T7qWhAQJ_mTu1A` |

19 more Tickets actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Users | GET | `/api/v2/users/autocomplete` | `conn_mod_def::GJ8Yzwp4bQI::lUg6hNCMSluMOAiQdpWTgw` |
| Count Users | GET | `/api/v2/users/count` | `conn_mod_def::GJ8Yz5hK3DA::oTyqiCeRRciziWnVVNwpFA` |
| Incremental Export Users (Cursor-Based) | GET | `/api/v2/incremental/users/cursor` | `conn_mod_def::GJ8Yg_ALgyM::Otj257hDR8Wvg0h38x2wmQ` |
| List an App’s Users (by Email Identity) | GET | `/sc/v2/apps/{{appId}}/users` | `conn_mod_def::GJ8Y0Sze24M::qjEQZV2kT3O6QUn31bcACA` |
| Search Users | GET | `/api/v2/users/search` | `conn_mod_def::GJ8Y0gxx-dY::AA9QsUZPR9WNbDM7u2cssg` |
| Show a User | GET | `/api/v2/users/{{userId}}` | `conn_mod_def::GJ8Y0wDos7Y::2go33nNGQbS75C83HFJnjg` |
| Show a User’s Related Information | GET | `/api/v2/users/{{userId}}/related` | `conn_mod_def::GJ8Y0p8lw60::B2271oCSRT6nillYld24lQ` |
| Show Current User ("Me") | GET | `/api/v2/users/me` | `conn_mod_def::GJ8Y0qlKrZw::3nEShtwyTmu5JnFCxA6Tpg` |
| Show Many Users | GET | `/api/v2/users/show_many` | `conn_mod_def::GJ8Y0sIoxAM::nQf4O6n-QbubCQH6400hfA` |
| Add Tags to a User | PUT | `/api/v2/users/{{userId}}/tags` | `conn_mod_def::GJ8Ypk7GM7w::M1rUcXNfQoSkuEf1i1dStA` |
| Autocomplete Users (Request Body) | POST | `/api/v2/users/autocomplete` | `conn_mod_def::GJ8Yz4hHTBw::TwYe8vF4Se6lyIr_fvGfaQ` |
| Bulk Delete Users (Queue Background Job) | DELETE | `/api/v2/users/destroy_many` | `conn_mod_def::GJ8Yz8GqZdc::KmgyTDAVQWGrKRFTqry6Gg` |

11 more Users actions are available through search.

### HelpCenterArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Help Center Articles | GET | `/api/v2/help_center/users/{{userId}}/articles` | `conn_mod_def::GJ8YVMdKuHc::GZ1YiNqhTCWAxU4wky67LA` |
| List Articles in a Category | GET | `/api/v2/help_center/categories/{{categoryId}}/articles` | `conn_mod_def::GJ8YVUtNKVA::UfWbgNBKRhuhdIRgCgFhoA` |
| List Help Center Articles | GET | `/api/v2/help_center/articles` | `conn_mod_def::GJ8YVMpSHzQ::CnAxLlMFTJqFf_7Xt1POTg` |
| List Help Center Articles by Locale | GET | `/api/v2/help_center/{{locale}}/articles` | `conn_mod_def::GJ8YVKy1WWg::gEIFqSYnQ3KDOiPD9vES4A` |
| List Help Center Articles in a Category (by Locale) | GET | `/api/v2/help_center/{{locale}}/categories/{{categoryId}}/articles` | `conn_mod_def::GJ8YVVdUEYc::dT_fAaUwQou4kHCGu96-Jw` |
| List Help Center Articles in a Section (by Locale) | GET | `/api/v2/help_center/{{locale}}/sections/{{sectionId}}/articles` | `conn_mod_def::GJ8YVU6HLKI::r5LEHg8yT7meXHbi80F3tQ` |
| List Help Center Articles Incrementally | GET | `/api/v2/help_center/incremental/articles` | `conn_mod_def::GJ8YVXZ8WBc::TAfaaMz3Ty-73TbL9RKFsg` |
| Search Help Center Articles | GET | `/api/v2/help_center/articles/search` | `conn_mod_def::GJ8Yg2bHjWc::AU0g22aHSgKuUgBJes8f5Q` |
| Show a Help Center Article | GET | `/api/v2/help_center/articles/{{articleId}}` | `conn_mod_def::GJ8YVd_bEq4::WKcL5ygoTFGyNxK83hBTcw` |
| Show an Article by Locale | GET | `/api/v2/help_center/{{locale}}/articles/{{articleId}}` | `conn_mod_def::GJ8YVfDXWHs::nnsCBoY6Sdq5lXj1zPltyQ` |
| Archive a Help Center Article | DELETE | `/api/v2/help_center/articles/{{articleId}}` | `conn_mod_def::GJ8YVArpXoQ::alHO6K2RTzWhQrRZTjYUFg` |
| Archive a Help Center Article by Locale | DELETE | `/api/v2/help_center/{{locale}}/articles/{{articleId}}` | `conn_mod_def::GJ8YVAMLQbk::od8tYeTqSXK_GhreavbdAA` |

8 more HelpCenterArticles actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Organizations | GET | `/api/v2/organizations/autocomplete` | `conn_mod_def::GJ8Yk6X1084::AC3O3uNHRy6rdIFxaDOb8w` |
| Count Organizations | GET | `/api/v2/organizations/count` | `conn_mod_def::GJ8YlB4YdQ8::KFiKZmK_TeiC10jncqXXCg` |
| Incremental Organization Export | GET | `/api/v2/incremental/organizations` | `conn_mod_def::GJ8Yg18vQDQ::nxpEI8VPQRuG_znUPA9i5A` |
| List Organizations | GET | `/api/v2/organizations` | `conn_mod_def::GJ8YlOufwiQ::kAWYWo1jS9m5LW2q4rEXLg` |
| Search Organizations | GET | `/api/v2/organizations/search` | `conn_mod_def::GJ8YlVx83E8::iTqAiUkXRDqOco6XdFCwDg` |
| Show an Organization | GET | `/api/v2/organizations/{{organizationId}}` | `conn_mod_def::GJ8YlWJdxYs::Zk0RAKI0R6-BuR7sa5cloA` |
| Show an Organization’s Related Information | GET | `/api/v2/organizations/{{organizationId}}/related` | `conn_mod_def::GJ8Yln5ssWA::PtfTjPTmQzSmHd3zVMeU1g` |
| Show Many Organizations | GET | `/api/v2/organizations/show_many` | `conn_mod_def::GJ8YlhIhKsY::OdGVod34SNmb5IvY_U1V-Q` |
| Add Tags to an Organization | PUT | `/api/v2/organizations/{{organizationId}}/tags` | `conn_mod_def::GJ8YpduZewc::y7Ixc2M-SQKpAkXd21Fg2w` |
| Bulk Delete Organizations | DELETE | `/api/v2/organizations/destroy_many` | `conn_mod_def::GJ8YlEnwKms::NFMrBvDIRFSmGItZu8VExQ` |
| Create an Organization | POST | `/api/v2/organizations` | `conn_mod_def::GJ8YlLge9Qs::2Y-_2qamSjmrZM22V7rHwg` |
| Create Many Organizations | POST | `/api/v2/organizations/create_many` | `conn_mod_def::GJ8YlAreP9o::uUd3o6xBTF22B0NGtlmJ1w` |

6 more Organizations actions are available through search.

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Tickets in a View | GET | `/api/v2/views/{{viewId}}/count` | `conn_mod_def::GJ8Y0-rz9jY::TJpaC5ggTMWHGFz-3Jz-4A` |
| Count Tickets in Multiple Views | GET | `/api/v2/views/count_many` | `conn_mod_def::GJ8Y1A3iMVs::XYTxLpB4TB6IpIpce0Fuug` |
| Count Views (Current User) | GET | `/api/v2/views/count` | `conn_mod_def::GJ8Y0-kmmJQ::1U4oLFvqTNih37FASCAWYQ` |
| Execute a View | GET | `/api/v2/views/{{viewId}}/execute` | `conn_mod_def::GJ8Y1JKr4RQ::LYMCp9MiSU-ujxgsXniNDw` |
| Export a View as CSV | GET | `/api/v2/views/{{viewId}}/export` | `conn_mod_def::GJ8Y1HucOC0::yYGqwBnxTaWDoe18CY-f6g` |
| List Active Views | GET | `/api/v2/views/active` | `conn_mod_def::GJ8Y1IREir0::EqS7CzOFToK0s0HSczjp2g` |
| List Compact Views (Current User) | GET | `/api/v2/views/compact` | `conn_mod_def::GJ8Y1SC1QpU::L6XxQlLvS6yRl6Du1X4_qQ` |
| List Views | GET | `/api/v2/views` | `conn_mod_def::GJ8Y1JDmgKU::A_lyPGtYT6-FBAiB5xYw7A` |
| List Views by ID | GET | `/api/v2/views/show_many` | `conn_mod_def::GJ8Y1QDdRK8::B-p1IiBVQRi8RS5mg90qCQ` |
| Search Views | GET | `/api/v2/views/search` | `conn_mod_def::GJ8Y1TLC89E::MvVubsrKThiCrPGvg8Ihlw` |
| Show a View | GET | `/api/v2/views/{{viewId}}` | `conn_mod_def::GJ8Y1ZiSACI::hNoXkQO0QpWDWv3tsHh5iw` |
| Bulk Delete Views | DELETE | `/api/v2/views/destroy_many` | `conn_mod_def::GJ8Y03s4IM0::5mPLvUmQStmNfgEj7pzhDg` |

6 more Views actions are available through search.

### HelpCenterSections

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Category’s Help Center Sections | GET | `/api/v2/help_center/categories/{{categoryId}}/sections` | `conn_mod_def::GJ8YndKYoxk::RLNSo8l3Qu2wJ9fNisCMuQ` |
| List Help Center Sections | GET | `/api/v2/help_center/sections` | `conn_mod_def::GJ8YncwHulQ::wk43iWXiS72Vz0ao1gIyMg` |
| List Help Center Sections by Locale | GET | `/api/v2/help_center/{{locale}}/sections.json` | `conn_mod_def::GJ8YndCu4c8::no_hCjpMQ5yG5RDx62cssA` |
| List Sections in a Category by Locale | GET | `/api/v2/help_center/{{locale}}/categories/{{categoryId}}/sections` | `conn_mod_def::GJ8YndtnS2Q::2g2s6ZluQmqdKfZj9G-BAw` |
| Show a Help Center Section | GET | `/api/v2/help_center/sections/{{sectionId}}` | `conn_mod_def::GJ8Ynky58aU::bR8jKDwoTNq9W2OwL_63kQ` |
| Show a Help Center Section by Locale | GET | `/api/v2/help_center/{{locale}}/sections/{{section_id}}` | `conn_mod_def::GJ8YnlEJKow::lWnrwgIyRYCOv-Z11CUNnw` |
| Create a Help Center Section in a Category | POST | `/api/v2/help_center/{{locale}}/categories/{{categoryId}}/sections` | `conn_mod_def::GJ8YnTaczfc::T9AcW8PuTW2hhGUBaD2A4A` |
| Create a Section in a Help Center Category | POST | `/api/v2/help_center/categories/{{categoryId}}/sections` | `conn_mod_def::GJ8YnVIxaEI::ylQgKQfJRrCa7Hnym2S6wA` |
| Delete a Help Center Section | DELETE | `/api/v2/help_center/sections/{{sectionId}}` | `conn_mod_def::GJ8YnS4aq2g::eWdh6B2BTSiNYHkwCp6MMA` |
| Delete a Help Center Section by Locale | DELETE | `/api/v2/help_center/{{locale}}/sections/{{sectionId}}` | `conn_mod_def::GJ8YncxkzxU::-GEsNF3CRUyokerlv2snXQ` |
| Update a Help Center Section | PUT | `/api/v2/help_center/sections/{{sectionId}}` | `conn_mod_def::GJ8Ynk6-SpI::SU_34p06QNOEkrdAP79EUQ` |
| Update a Help Center Section by Locale | PUT | `/api/v2/help_center/{{locale}}/sections/{{sectionId}}` | `conn_mod_def::GJ8Ynk6LK2g::oi7DzKooTV2epR8PBw7StA` |

2 more HelpCenterSections actions are available through search.

### GroupMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Group’s Memberships | GET | `/api/v2/groups/{{groupId}}/memberships` | `conn_mod_def::GJ8YgQEaIQs::00PnuSDgSKS0Rabrlbqsuw` |
| List a User’s Group Memberships | GET | `/api/v2/users/{{userId}}/group_memberships` | `conn_mod_def::GJ8YgImY9DY::GZlR8lg6SXWyz3ZLhh--9g` |
| List Assignable Group Memberships | GET | `/api/v2/group_memberships/assignable` | `conn_mod_def::GJ8YgGvvjVY::ezqPL1OkR4Gww_OH-i1UGw` |
| List Assignable Memberships for a Group | GET | `/api/v2/groups/{{groupId}}/memberships/assignable` | `conn_mod_def::GJ8YgHbUWRM::ypLlATU3TJig7pWkFbZC_g` |
| List Group Memberships | GET | `/api/v2/group_memberships` | `conn_mod_def::GJ8YgInRvnc::7t2Ma7dISouM0sAPsOJHUw` |
| Show a Group Membership | GET | `/api/v2/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ8YgPNXNq0::naaR92PTQZiRje4ax7qJHg` |
| Show a User’s Group Membership (by ID) | GET | `/api/v2/users/{{userId}}/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ8YgPzPzy8::0Hl3Mp5pSOimMt6qo9Voxw` |
| Bulk Create Group Memberships | POST | `/api/v2/group_memberships/create_many` | `conn_mod_def::GJ8YgAQ6Fds::XPBLIXOHRfaB8iQctI45KQ` |
| Bulk Delete Group Memberships | DELETE | `/api/v2/group_memberships/destroy_many` | `conn_mod_def::GJ8Yf_1yFcE::tYLXYVhFTEmDTv0lOP28HQ` |
| Create a Group Membership | POST | `/api/v2/group_memberships` | `conn_mod_def::GJ8Yf_hXUvY::G6o0R9Y1S4ChB0pWvON4wQ` |
| Create a User’s Group Membership | POST | `/api/v2/users/{{userId}}/group_memberships` | `conn_mod_def::GJ8Yf_RZb9c::F1iq3JXuRPm0wXhWgWgDCw` |
| Delete a Group Membership | DELETE | `/api/v2/group_memberships/{{groupMembershipId}}` | `conn_mod_def::GJ8Yf_P4PqU::AsYWUFxIQI2jj-9E7tDpMg` |

2 more GroupMemberships actions are available through search.

### OrganizationMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Organization Memberships | GET | `/api/v2/users/{{userId}}/organization_memberships` | `conn_mod_def::GJ8Ykq4Sy7g::WHZWU46vSqiMuebS5rPavA` |
| List an Organization’s Organization Memberships | GET | `/api/v2/organizations/{{organizationId}}/organization_memberships` | `conn_mod_def::GJ8YkkVIOaU::L-yHsCw-TyqQ6BT0K3rqCA` |
| List Organization Memberships | GET | `/api/v2/organization_memberships` | `conn_mod_def::GJ8YkmbHKOI::m-6UGsN9QGu1alGokABRWQ` |
| Show a User’s Organization Membership | GET | `/api/v2/users/{{userId}}/organization_memberships/{{organizationMembershipId}}` | `conn_mod_def::GJ8YkyPb2qM::uDnEMzNWRb2m-LzTIV5BFg` |
| Show an Organization Membership by ID | GET | `/api/v2/organization_memberships/{{organizationMembershipId}}` | `conn_mod_def::GJ8YkxdScYM::h5-7nb0oTJ6wjkR5cxoMtw` |
| Bulk Delete Organization Memberships | DELETE | `/api/v2/organization_memberships/destroy_many` | `conn_mod_def::GJ8YkVMBrV0::exGACMJORaCef0Xyf-S0FQ` |

7 more OrganizationMemberships actions are available through search.

This lists 90 of 885 actions. For anything not here, call `search_one_platform_actions` with platform `zendesk`. The full catalog is at https://www.withone.ai/knowledge/zendesk.

## When a call fails

The error comes from Zendesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zendesk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
