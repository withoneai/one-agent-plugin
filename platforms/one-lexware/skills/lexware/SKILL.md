---
name: lexware
description: Lexware is a business software platform that provides tools for accounting, invoicing, payroll, tax preparation, and financial administration, allowing small businesses and self-employed professionals to manage core back-office processes and integrate operational data into their workflows. Read and write Lexware data through One: vouchers, articles, creditnotes, deliverynotes, dunnings, eventsubscriptions and more, 52 actions with real parameter documentation. Use whenever the user asks to look something up in Lexware, create or update a record there, or build code against the Lexware API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: lexware
  generated-from: one-knowledge-base
---

# Lexware through One

Lexware is a business software platform that provides tools for accounting, invoicing, payroll, tax preparation, and financial administration, allowing small businesses and self-employed professionals to manage core back-office processes and integrate operational data into their workflows.

One exposes Lexware through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `lexware` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Lexware is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Lexware account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Vouchers

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Vouchers by Voucher Number | GET | `/v1/vouchers` | `conn_mod_def::GLWE29p_95g::HAvEa5IbR8KoNa_MGDOwSA` |
| Get a Voucher by ID | GET | `/v1/vouchers/{{id}}` | `conn_mod_def::GLWE3HSY2ag::zRrEcQUaQoGWHKy5xmZyWg` |
| List Vouchers | GET | `/v1/voucherlist` | `conn_mod_def::GLWE2_9ok1g::GLbkZB_iT06RN_cwnou-kw` |
| Create a Voucher | POST | `/v1/vouchers` | `conn_mod_def::GLWE28qqHnA::IKKZaWzPQ1ePBrjocmLk0A` |
| Upload a File to a Voucher | POST | `/v1/vouchers/{{id}}/files` | `conn_mod_def::GLWE3ILZ8aA::RXE73PIoQr-3MhbVB8tOYQ` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Article | GET | `/v1/articles/{{id}}` | `conn_mod_def::GLWE1pxQIQA::PSdueV2EQKqZkKc6orcS2Q` |
| List Articles | GET | `/v1/articles` | `conn_mod_def::GLWE1pviW3A::rx4JWOnySCeAmGSBbKju9A` |
| Create an Article | POST | `/v1/articles` | `conn_mod_def::GLWE1p1vCjg::_5FLNz6ISOKH8Ett05mztw` |
| Update an Article | PUT | `/v1/articles/{{id}}` | `conn_mod_def::GLWE1rODsFg::2jMAbGdgTseiZjPCDEy0Lg` |

### CreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Credit Note Document File ID | GET | `/v1/credit-notes/{{id}}/document` | `conn_mod_def::GLWE18fUQtg::a_riPo84TBudzlC5SYpDeg` |
| Download a Credit Note File | GET | `/v1/credit-notes/{{id}}/file` | `conn_mod_def::GLWE1y0sEUg::9cFnX9TXTpGXF8bxjzs2Gg` |
| Get a Credit Note by ID | GET | `/v1/credit-notes/{{id}}` | `conn_mod_def::GLWE18ZzDPg::7dUIxn_cRQaF0u_bWdpMfg` |
| Create Credit Notes | POST | `/v1/credit-notes` | `conn_mod_def::GLWE1zYsREg::F2ZbyMKjSKeBKa1Q5GPq8Q` |

### DeliveryNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Delivery Note Document File ID | GET | `/v1/delivery-notes/{{id}}/document` | `conn_mod_def::GLWE18QV9qA::5DcThsN9S0urWvsIcLI02Q` |
| Download a Delivery Note File | GET | `/v1/delivery-notes/{{id}}/file` | `conn_mod_def::GLWE17q0kNA::323ZAms3SOuSxBL3ZQHjag` |
| Get a Delivery Note by ID | GET | `/v1/delivery-notes/{{id}}` | `conn_mod_def::GLWE2FB3_1g::lcwn3HIpQa2aWsBzsHLLjA` |
| Create a Delivery Note | POST | `/v1/delivery-notes` | `conn_mod_def::GLWE18f_Qqg::aC79U-g0ROGL9uk7cR_P2A` |

### Dunnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Document Using Dunnings | GET | `/v1/dunnings/{{id}}/document` | `conn_mod_def::GLWE2NeLdxg::WmyWeHV1TJym_poWVU7Srg` |
| Download a Dunning File | GET | `/v1/dunnings/{{id}}/file` | `conn_mod_def::GLWE2Ff_MqA::owWd43TYTfKmNpYTsED6Lw` |
| Get a Dunning by ID | GET | `/v1/dunnings/{{id}}` | `conn_mod_def::GLWE2NOVt5A::JqNpJ4hUTfuhUsdq6_d3Bw` |
| Create a Dunning | POST | `/v1/dunnings` | `conn_mod_def::GLWE2F5YNog::SRo7hd_zQ7C70vBNSxxyVw` |

### EventSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Subscription | GET | `/v1/event-subscriptions/{{subscriptionId}}` | `conn_mod_def::GLWE2VdCC5g::IScp1MNMTEOj_JMXLWkS9w` |
| List Event Subscriptions | GET | `/v1/event-subscriptions` | `conn_mod_def::GLWE2NJww3g::Q_dnpuaIQt2C8tgIPJ1efg` |
| Create an Event Subscription | POST | `/v1/event-subscriptions` | `conn_mod_def::GLWE2NI_hgA::LFd5KPH6Tt6Q5M-qUsFmiA` |
| Delete an Event Subscription | DELETE | `/v1/event-subscriptions/{{subscriptionId}}` | `conn_mod_def::GLWE2NnAKZg::SkRLYDwHSvWliQu7cI7EUw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Invoice Document File ID | GET | `/v1/invoices/{{id}}/document` | `conn_mod_def::GLWE2fdpFYA::wf5eIPLaQh--7le5v9ShVg` |
| Download Invoice File | GET | `/v1/invoices/{{id}}/file` | `conn_mod_def::GLWE2Vbxepg::qZtGDgd2QFut6VecEo7M7w` |
| Get an Invoice | GET | `/v1/invoices/{{id}}` | `conn_mod_def::GLWE2evuGpg::opeoEwwSQHOgUHjOQ-A-1w` |
| Create an Invoice | POST | `/v1/invoices` | `conn_mod_def::GLWE2Weqj6A::tR1e5tYFRQylNqSZ1clwpA` |

### OrderConfirmations

| Action | Method | Path | Action id |
|---|---|---|---|
| Document Using Order Confirmations | GET | `/v1/order-confirmations/{{id}}/document` | `conn_mod_def::GLWE2fV8QXA::d81AL99eS2iL533gkFGdNg` |
| Download Order Confirmation File | GET | `/v1/order-confirmations/{{id}}/file` | `conn_mod_def::GLWE2eSbdHA::l7w-ANMdTP-kztQm2D9Jrg` |
| Get Order Confirmation | GET | `/v1/order-confirmations/{{id}}` | `conn_mod_def::GLWE2nSzzmg::IzmepMpWRV2d1MkAKoSARw` |
| Create Order Confirmations | POST | `/v1/order-confirmations` | `conn_mod_def::GLWE2fnSSWg::iaWHhWEZTHOJkWYp6V66-Q` |

### Quotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Quotation Document File ID | GET | `/v1/quotations/{{id}}/document` | `conn_mod_def::GLWE2z2Eb8g::Z2MiGCSVR4ul7yIP46rWjA` |
| Download a Quotation File | GET | `/v1/quotations/{{id}}/file` | `conn_mod_def::GLWE2xUhQ6g::3RLV909eS_qnP2zB_nA2og` |
| Get a Quotation by ID | GET | `/v1/quotations/{{id}}` | `conn_mod_def::GLWE2xZn4PA::gBGA5C7zTJm9wAzM6_UaOw` |
| Create a Quotation | POST | `/v1/quotations` | `conn_mod_def::GLWE20yDt0A::PCieBvA5SdaWo9oYprFCvA` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/v1/contacts/{{id}}` | `conn_mod_def::GLWE1z6AdCA::fwd5yOFyTY6qGX3MCfChJQ` |
| List Contacts | GET | `/v1/contacts` | `conn_mod_def::GLWE10bH7hA::wiDPrMWxR4WwQG9h-6RPlg` |
| Create a Customer Contact | POST | `/v1/contacts` | `conn_mod_def::GLWE1qFkJbA::Z9A_iZXnQxGswL65CXhydg` |

### DownPaymentInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download File for a Down Payment Invoice | GET | `/v1/down-payment-invoices/{{id}}/file` | `conn_mod_def::GLWE2Evt50A::58KxFpCuSgav_89WFdlZZA` |
| Get a Down Payment Invoice | GET | `/v1/down-payment-invoices/{{id}}` | `conn_mod_def::GLWE2E2Qc7A::TrDSG-cQQzmgFmKfellFEQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/v1/files/{{id}}` | `conn_mod_def::GLWE2VcyX-A::zesuTzRzTLG7QWpstk7DRg` |
| Upload Files | POST | `/v1/files` | `conn_mod_def::GLWE2V5D-bA::b9sX68clRAmD6zr1hU_M9w` |

### RecurringTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Recurring Template | GET | `/v1/recurring-templates/{{id}}` | `conn_mod_def::GLWE29QXmgA::EJTXEz1CSCS42AOqLvfwlA` |
| List Recurring Templates | GET | `/v1/recurring-templates` | `conn_mod_def::GLWE29Qnyog::aOUaEaZLTxa8aHy1XqJIzQ` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Countries | GET | `/v1/countries` | `conn_mod_def::GLWE1yMA6wg::Sfxt74HzS_Gmd2Udu4dgvg` |

### PaymentConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payment Conditions | GET | `/v1/payment-conditions` | `conn_mod_def::GLWE2nBOEug::Eehp_PoIRwCeBriA3_f0sQ` |

### PrintLayouts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Print Layouts | GET | `/v1/print-layouts` | `conn_mod_def::GLWE2nYlCdg::Ry7LEi9cRF-8e2dcE5kECQ` |

### PostingCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Posting Categories | GET | `/v1/posting-categories` | `conn_mod_def::GLWE2npJYxA::1Z4IxJekQnuzJKtlzpGa5Q` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment Information for a Voucher | GET | `/v1/payments/{{voucherId}}` | `conn_mod_def::GLWE2n-p_Tg::sESiE7nDSmO2YtnLiWS_DQ` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Profile | GET | `/v1/profile` | `conn_mod_def::GLWE2zgyorA::cEOXaI2LR_WYCI2G5c9TuQ` |

## When a call fails

The error comes from Lexware, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/lexware

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
