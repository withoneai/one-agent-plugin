---
name: thanks-io
description: Thanks.io is a direct mail automation platform that enables businesses to send personalized postcards, letters, and gifts through integrations and APIs, allowing marketing, sales, and customer success teams to trigger physical outreach from CRM and workflow systems. Read and write thanks.io data through One: recipients, subaccounts, mailinglists, webhooks, orders, giftcardbrands and more, 36 actions with real parameter documentation. Use whenever the user asks to look something up in thanks.io, create or update a record there, or build code against the thanks.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: thanks-io
  generated-from: one-knowledge-base
---

# thanks.io through One

Thanks.io is a direct mail automation platform that enables businesses to send personalized postcards, letters, and gifts through integrations and APIs, allowing marketing, sales, and customer success teams to trigger physical outreach from CRM and workflow systems.

One exposes thanks.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `thanks-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm thanks.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real thanks.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Recipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recipient | GET | `/api/v2/recipients/{{recipientId}}` | `conn_mod_def::GMMIlqpkf7A::AzlOsQlEQLOLk4xEOUprQg` |
| Create Multiple Recipients | POST | `/api/v2/recipients-utils/create-multiple` | `conn_mod_def::GMMIlrsJhAA::tn4aLcRLQ_yn12UkAR9oEA` |
| Create Recipient | POST | `/api/v2/recipients` | `conn_mod_def::GMMIlrVK-vg::84ELGR_KSv205YAlyFGF_Q` |
| Delete a Recipient | DELETE | `/api/v2/recipients/{{recipientId}}` | `conn_mod_def::GMMIlrgnS6A::6tawAojpTkORDzEvOjcyGA` |
| Delete Recipient by Address | POST | `/api/v2/recipients-utils/delete-by-address` | `conn_mod_def::GMMIlve0hYA::HbIZAr_gQeCIVg2j4-OUMQ` |
| Update Recipient | PUT | `/api/v2/recipients/{{recipientId}}` | `conn_mod_def::GMMIl18PDFA::J6zCRVyTQ72D6zhRhWRjzA` |

### SubAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sub-account Details | GET | `/api/v2/sub-accounts/{{subAccountId}}` | `conn_mod_def::GMMIl9YC3GA::CgER0M-WSxK1Ug7OryHZrw` |
| List All Sub-accounts | GET | `/api/v2/sub-accounts/` | `conn_mod_def::GMMImEucmrA::a_sqvT1SQ8GbUq-WoPBZsA` |
| Create a Sub Account | POST | `/api/v2/sub-accounts/` | `conn_mod_def::GMMIl-LBazg::TtgjaZCsTv-_rOzMxIAkMA` |
| Delete a Sub Account | DELETE | `/api/v2/sub-accounts/{{subAccountId}}` | `conn_mod_def::GMMIl9xBDRg::kA7-MYMcR5-uxQqiieQeyA` |
| Update a Sub Account | PUT | `/api/v2/sub-accounts/{{subAccountId}}` | `conn_mod_def::GMMImFI5vBg::-7B-0l66SAqzBO_GKc2www` |

### MailingLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mailing List Details | GET | `/api/v2/mailing-lists/{{mailingListId}}` | `conn_mod_def::GMMIlaK4IfA::Bgn7RlRpRV-Lyeol2_omgA` |
| List All Mailing Lists | GET | `/api/v2/mailing-lists/` | `conn_mod_def::GMMIlchLQgg::rfHIIH5lQ7aUsNMDYvsqOg` |
| Create a Mailing List | POST | `/api/v2/mailing-lists/` | `conn_mod_def::GMMIlchExeA::aip94QTdTB2B8OBkQl3YKw` |
| Delete a Mailing List | DELETE | `/api/v2/mailing-lists/{{mailingListId}}` | `conn_mod_def::GMMIlapC8wA::o49C6Qw8REakmW8UutjzNg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v2/webhooks` | `conn_mod_def::GMMImHbL6tg::KuwKWUjZReu65CrV3fTxXA` |
| Create a Webhook | POST | `/api/v2/webhooks` | `conn_mod_def::GMMImFTIs_g::S1cBGvgNRU2rLDjf4Z8v4Q` |
| Delete a Webhook | DELETE | `/api/v2/webhooks/{{webhookId}}` | `conn_mod_def::GMMImEuuZWA::SzN0pv-vSUuQDUcFb3pdwQ` |
| Update a Webhook | PUT | `/api/v2/webhooks/{{webhookId}}` | `conn_mod_def::GMMImNbwa6A::DNojAzqZRpmL0ZXdTtocAw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/api/v2/orders/list` | `conn_mod_def::GMMIlibX4Ng::44udtjkSR9Ou274WlmtPZw` |
| Track an Order | GET | `/api/v2/orders/{{orderId}}/track` | `conn_mod_def::GMMIliqeXrg::ml14CPLoS926GedRdiDJgg` |
| Cancel an Order | PUT | `/api/v2/orders/{{orderId}}/cancel` | `conn_mod_def::GMMIlic0DoA::jzAMJdjcQ9SRkx1GKFORmA` |

### GiftcardBrands

| Action | Method | Path | Action id |
|---|---|---|---|
| List Giftcard Brands | GET | `/api/v2/giftcard-brands` | `conn_mod_def::GMMIlSbJldg::A0zTQo6FRuOHYT0TE5VCdA` |
| List Giftcard Brands as a Flat List | GET | `/api/v2/giftcard-brands-list` | `conn_mod_def::GMMIlTP7-Qg::p8dYxfP6SlqMntd2gOmoIQ` |

### Magnacard

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Magnacard | POST | `/api/v2/send/magnacard` | `conn_mod_def::GMMIl2S-icg::SLZu_0hiQaacWw7nYlK6Rg` |

### Notecard

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Notecard | POST | `/api/v2/send/notecard` | `conn_mod_def::GMMIl234N6A::Hm190KNPSz2dmT4JHs82Ug` |

### Giftcard

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Giftcard | POST | `/api/v2/send/giftcard` | `conn_mod_def::GMMIl3PS1Cg::fhgf-K8nQaeV37lBk8mS6A` |

### Postcard

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Postcard | POST | `/api/v2/send/postcard` | `conn_mod_def::GMMIl3XohSg::Pp2xgoIkRhGoACs_sXC2iw` |

### HandwritingStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Handwriting Styles | GET | `/api/v2/handwriting-styles` | `conn_mod_def::GMMIlSaNhtg::Mi3ABr5RR9-qCOQZH4z98A` |

### ImageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Image Templates | GET | `/api/v2/image-templates/` | `conn_mod_def::GMMIlSnFbNA::qnit0n6LRH6EYn9lyLeTqA` |

### ImageTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Build Image Template | GET | `/api/v2/build/image-template` | `conn_mod_def::GMMIlT8b17g::zSe8_VHOR8OWiG9LOxtozg` |

### MailingListRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recipients for a Mailing List | GET | `/api/v2/mailing-lists-utils/recipients/{{mailingListId}}` | `conn_mod_def::GMMIlbNaPCg::0rks77CQRIexWbDn_KsXNg` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Message Templates | GET | `/api/v2/message-templates/` | `conn_mod_def::GMMIlj4SA8g::x1VwAxcDTFGacsiU8X_LbQ` |

### MailingListsUtils

| Action | Method | Path | Action id |
|---|---|---|---|
| Buy Radius Search Using Mailing Lists Utils | POST | `/api/v2/mailing-lists-utils/buy-radius-search` | `conn_mod_def::GMMIlkZsUgg::10b1G2SNSjOi6ujG6LUL5g` |

### WindowedLetter

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Windowed Letter | POST | `/api/v2/send/windowedletter` | `conn_mod_def::GMMIl-L4zug::6AFsaHS6Q7OF_kDrXMA_5A` |

### WindowlessLetter

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Windowless Letter | POST | `/api/v2/send/windowlessletter` | `conn_mod_def::GMMIl-SwDDg::6c_TfOvqRDa3uCEeGQ8n6Q` |

## When a call fails

The error comes from thanks.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/thanks-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
