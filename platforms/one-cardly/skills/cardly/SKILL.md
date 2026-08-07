---
name: cardly
description: Cardly is a greeting card automation platform that enables businesses to create, personalize, and send physical cards at scale through web tools and APIs, allowing teams to automate direct mail workflows for customer engagement, gifting, and relationship management. Read and write Cardly data through One: invitations, artwork, contactlists, contacts, users, webhooks and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Cardly, create or update a record there, or build code against the Cardly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cardly
  generated-from: one-knowledge-base
---

# Cardly through One

Cardly is a greeting card automation platform that enables businesses to create, personalize, and send physical cards at scale through web tools and APIs, allowing teams to automate direct mail workflows for customer engagement, gifting, and relationship management.

One exposes Cardly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cardly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cardly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cardly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Invitation | GET | `/invitations/find` | `conn_mod_def::GK52kg6IArA::QipkjS-pQuKbdY4klcWEmw` |
| List Invitations | GET | `/v2/invitations` | `conn_mod_def::GK52khNv0vg::c35pMjMzQY6cSD4wC0YlTw` |
| Retrieve Invitation | GET | `/invitations/{{id}}` | `conn_mod_def::GK52kgOavSA::WypNfw5GQRGiXO0WcjxwCA` |
| Create Invitation | POST | `/v2/invitations` | `conn_mod_def::GK52kWmQgRA::CQeVpE8fQYGVgi0o8WFKRg` |
| Delete Invitation | DELETE | `/invitations/{{id}}` | `conn_mod_def::GK52kXRFypg::6j4iE4Z-S6W1AE6R_QT56g` |
| Delete Invitation by Email | DELETE | `/invitations` | `conn_mod_def::GK52kXHD3pA::vE52s6YpSDGZqntf1P9cRg` |
| Resend an Invitation by ID | POST | `/invitations/resend/{{id}}` | `conn_mod_def::GK52kkreBmA::Sntt7j1rT62itG4ZH4fD9Q` |
| Resend Invitation by Email | POST | `/v2/invitations/resend` | `conn_mod_def::GK52kjpZOCg::C_zWK7gnRzaEqw5uwuJlng` |

### Artwork

| Action | Method | Path | Action id |
|---|---|---|---|
| List Artwork | GET | `/v2/art` | `conn_mod_def::GK52jy0N2gA::CqlN6prdST-12_E5K5svRA` |
| Retrieve Artwork | GET | `/art/{{id}}` | `conn_mod_def::GK52jumXPKg::23c0QW2xSrmzIjXSO0tCkw` |
| Create Artwork | POST | `/v2/art` | `conn_mod_def::GK52jl4U9TA::UAElnvcySu-BCUszjHkXYQ` |
| Delete Artwork | DELETE | `/art/{{id}}` | `conn_mod_def::GK52jiRrsmA::As3OpJxIS8ysgGmrDNEgWw` |
| Edit Artwork | POST | `/art/{{id}}` | `conn_mod_def::GK52jxl3xIg::itYw9QP2RVO0PtxsNnxNsg` |

### ContactLists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Lists | GET | `/v2/contact-lists` | `conn_mod_def::GK52j7f7U7g::7JdVHPkQQ1-NzfKFWJlnWQ` |
| Retrieve a Contact List | GET | `/contact-lists/{{id}}` | `conn_mod_def::GK52j94nDjg::BOR2TGQ0QfWukuedtx5ajw` |
| Search a Contact in a Contact List | GET | `/contact-lists/{{listId}}/contacts/find` | `conn_mod_def::GK52kKxl5iA::Esqq4NLET_q04wEAWCH6ZQ` |
| Create Contact List | POST | `/v2/contact-lists` | `conn_mod_def::GK52ju1YBZg::_ME1eQqES0aYUO7J8a4aIQ` |
| Delete a Contact List | DELETE | `/contact-lists/{{id}}` | `conn_mod_def::GK52jw58iMA::LePwHA73SWGButZGuGmNaQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact List's Contacts | GET | `/contact-lists/{{listId}}/contacts` | `conn_mod_def::GK52kKxbELA::7PTA1DrbRQ-ggjW_0VVabQ` |
| Retrieve a Contact from a Contact List | GET | `/contact-lists/{{listId}}/contacts/{{id}}` | `conn_mod_def::GK52kKa1WyA::hgj4om8jTCGy3urKMOXPqQ` |
| Create a Contact in a Contact List | POST | `/contact-lists/{{listId}}/contacts` | `conn_mod_def::GK52j_Z0_qA::ZL1YmVz_QRugw0xr_YqLYQ` |
| Edit a Contact in a Contact List | POST | `/contact-lists/{{listId}}/contacts/{{id}}` | `conn_mod_def::GK52kMw2BKg::FtFPMUBZTaqAxIzNSeOTrQ` |
| Sync a Contact in a Contact List | POST | `/contact-lists/{{listId}}/contacts/sync` | `conn_mod_def::GK52kK1uTaA::hZSFUHDsRcKJXXTRSy9djA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Find User | GET | `/users/find` | `conn_mod_def::GK52k-rQL_g::DiWLiL9_Q1qTinS0rc_AwA` |
| List Users | GET | `/v2/users` | `conn_mod_def::GK52lIRh9DA::ncZ8T6nyQxqWeaC_vQId3Q` |
| Retrieve a User | GET | `/users/{{id}}` | `conn_mod_def::GK52lGDuumA::CdAtssA-Tt2PNNlr-GYlWA` |
| Delete a User | DELETE | `/users/{{id}}` | `conn_mod_def::GK52k-rQKCg::DWziGHuASzGKK7Q59WXeAg` |
| Delete User by Email | DELETE | `/users` | `conn_mod_def::GK52k3yfjdA::j1ijabKhTF2l-QjYK6GMtw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Details | GET | `/webhooks/{{id}}` | `conn_mod_def::GK52lGWp5Pg::UNNrkoMHQDKzHPWB0KcF8w` |
| List Webhooks | GET | `/v2/webhooks` | `conn_mod_def::GK52mXnbmGg::Za9UmhQ-SlOPqPFzI9qiCA` |
| Create Webhook | POST | `/v2/webhooks` | `conn_mod_def::GK52lIWVesA::hRnP8mWZQWGTn6XfRgdh-g` |
| Delete Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GK52mKKFa6A::YZ6aZZrrQXO6RGZQMNqyVQ` |
| Update a Webhook | POST | `/webhooks/{{id}}` | `conn_mod_def::GK52mWEIoVA::rqgQhLmbSy-YxdlV1y8Neg` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/orders` | `conn_mod_def::GK52kvtA6rg::s2Yd2pdKQj602fx5mTo5Cw` |
| Retrieve Order | GET | `/orders/{{id}}` | `conn_mod_def::GK52kvGeNig::H2eTXPA2SmqSuB-WEAT6Eg` |
| Generate Order Preview | POST | `/v2/orders/preview` | `conn_mod_def::GK52ktj9qVA::IuWrUz_bSUaoyzWgF6qe4Q` |
| Place Order | POST | `/v2/orders/place` | `conn_mod_def::GK52kthn-QA::NrwCfa7ZRsyM0EDJ_XD7nQ` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Contact from a Contact List | DELETE | `/contact-lists/{{listId}}/contacts/{{id}}` | `conn_mod_def::GK52j7hIG_g::IXqVXNPtQB2D55yJ9o7zcg` |
| Delete a Contact from a Contact List | DELETE | `/contact-lists/{{listId}}/contacts` | `conn_mod_def::GK52j8PZrCA::DC_ncyPmRxqcXlfWEhF_RA` |

### AccountBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Account Balance | GET | `/v2/account/balance` | `conn_mod_def::GK52jfLNcQg::gFHKDsQETBOr8PvvX__8dg` |

### GiftCreditHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Gift Credit History | GET | `/v2/account/gift-credit-history` | `conn_mod_def::GK52jiCpIGg::62roEzK7Q5K_99I7FJ1sSg` |

### CreditHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credit History | GET | `/v2/account/credit-history` | `conn_mod_def::GK52jjif8CA::KHKf06_rTVS2PKJT8n9v9Q` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fonts | GET | `/fonts` | `conn_mod_def::GK52kWROQHA::jKGkaKywRuKAh4GiFO-H6w` |

### Doodles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Doodles | GET | `/v2/doodles` | `conn_mod_def::GK52kXfdVPA::JZeZhUMLQuKBGf0GlMBGsQ` |

### Media

| Action | Method | Path | Action id |
|---|---|---|---|
| List Media | GET | `/v2/media` | `conn_mod_def::GK52kvkdxGg::jLJBc6R6RFSmfF2B9WZicA` |

### Echo

| Action | Method | Path | Action id |
|---|---|---|---|
| Echo Request | POST | `/v2/echo` | `conn_mod_def::GK52k4ZbWEA::pbnQF4ryTAiC1y77SBa2dQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/templates` | `conn_mod_def::GK52k9lAfYg::yiaVWGtRRmOzWJ6cL16Yww` |

### WritingStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Writing Styles | GET | `/writing-styles` | `conn_mod_def::GK52mR9_1fA::stiGzF7_TDKkL4gSzjQWIA` |

## When a call fails

The error comes from Cardly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cardly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
