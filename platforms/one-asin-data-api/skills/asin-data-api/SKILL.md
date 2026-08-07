---
name: asin-data-api
description: ASIN Data API is a product data API for Amazon listings that provides structured access to ASIN details, pricing, reviews, seller information, and search results, allowing developers, eCommerce teams, and analysts to automate catalog monitoring, research, and marketplace intelligence workflows. Read and write ASIN Data API data through One: collections, destinations, account, collectionsrequests, resultsets, collectionresultset and more, 26 actions with real parameter documentation. Use whenever the user asks to look something up in ASIN Data API, create or update a record there, or build code against the ASIN Data API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: asin-data-api
  generated-from: one-knowledge-base
---

# ASIN Data API through One

ASIN Data API is a product data API for Amazon listings that provides structured access to ASIN details, pricing, reviews, seller information, and search results, allowing developers, eCommerce teams, and analysts to automate catalog monitoring, research, and marketplace intelligence workflows.

One exposes ASIN Data API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `asin-data-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ASIN Data API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ASIN Data API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection | GET | `/collections/{{id}}` | `conn_mod_def::GMTsMvy7khU::---IHasrRceDj5LB2D9vkg` |
| Get a Collection Result Set as CSV | GET | `/collections/{{id}}/results/{{id2}}/csv` | `conn_mod_def::GMTsM7POMTQ::zpUQZNTeT5OpDQzZ0b_0aw` |
| Get CSV Download Links for a Collection's Requests | GET | `/collections/{{id}}/requests/csv` | `conn_mod_def::GMTsMw8_I8c::GSkUW9C3QMW_KDThnx3Q9g` |
| Get JSON Download Links for a Collection's Requests | GET | `/collections/{{id}}/requests/json` | `conn_mod_def::GMTsMu00kd0::r1vDdZm7QR6Rp2BAcYep0g` |
| Get Result Set as JSON Lines for a Collection | GET | `/collections/{{id}}/results/{{id2}}/jsonlines` | `conn_mod_def::GMTsM6pcv-c::WX6I_ejASvOexysvACvHrQ` |
| List Collections | GET | `/collections` | `conn_mod_def::GMTsMerd8YY::YciXfLO4QSSe_T0MKIbu0Q` |
| Resend Webhook for a Collection Result Set | GET | `/collections/{{id}}/results/{{id2}}/resendwebhook` | `conn_mod_def::GMTsM7XG2kk::xgudqyqYT4y4jFlFZIhHlQ` |
| Start a Collection | GET | `/collections/{{id}}/start` | `conn_mod_def::GMTsM6fHSEM::DWS5mRN2RBOIZUZzxI1D5A` |
| Stop a Collection | GET | `/collections/{{id}}/stop` | `conn_mod_def::GMTsNEEIsAQ::XBwv0j6xRZy3hJezVFcCbA` |
| Stop All Collections | GET | `/collections/stopall` | `conn_mod_def::GMTsND6Ji24::RmKNt-o_R4iu7xzmnjtncg` |
| Add Requests to a Collection | PUT | `/collections/{{id}}` | `conn_mod_def::GMTsNIQnPz8::IDMKWCmOTdCoq04i_A2UvA` |
| Clear a Collection's Requests | DELETE | `/collections/{{id}}/clear` | `conn_mod_def::GMTsMjiQsH0::4eVA5-deTw-sXCqaPR7joQ` |

4 more Collections actions are available through search.

### Destinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Destinations | GET | `/destinations` | `conn_mod_def::GMTsNU4tLIU::5X-fkC7cRN6k0NrR1UHQEw` |
| Create Destination | POST | `/destinations` | `conn_mod_def::GMTsNRc_gCY::E4_MZCCJSX-8wR0BmlnJUA` |
| Delete a Destination | DELETE | `/destinations/{{id}}` | `conn_mod_def::GMTsNPRToiw::dznBM5akTWaoiVNiw_dj_g` |
| Update a Destination | PUT | `/destinations/{{id}}` | `conn_mod_def::GMTsNQDUG9M::uw3Zb1cVSxOuVwZeInWxhg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/account` | `conn_mod_def::GMTsMlrCPm4::wIn534a0Q-qI-JLC4_lbcQ` |

### CollectionsRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Collection's Requests by Page | GET | `/collections/{{id}}/requests/{{id2}}` | `conn_mod_def::GMTsMvYWCCU::9_B3wZE5Tc6wMaTtRUACrA` |

### ResultSets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Result Sets for a Collection | GET | `/collections/{{id}}/results` | `conn_mod_def::GMTsMyPxoV4::NsXWk4NdTXa3UElpc5wdlw` |

### CollectionResultSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection Result Set | GET | `/collections/{{id}}/results/{{id2}}` | `conn_mod_def::GMTsM7SbmqA::qGu0yc-pRdyckOis-kkPTw` |

### ErrorLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Error Logs | GET | `/errorlogs` | `conn_mod_def::GMTsNS6eGTY::AuK2CZM_SO6w1_odhncj5g` |

### ProductDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Data Requests | GET | `/request` | `conn_mod_def::GMTsNgICELg::BW5wDs3_T_iLqoUmInT6nw` |

This lists 22 of 26 actions. For anything not here, call `search_one_platform_actions` with platform `asin-data-api`. The full catalog is at https://www.withone.ai/knowledge/asin-data-api.

## When a call fails

The error comes from ASIN Data API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/asin-data-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
