---
name: razorpay
description: Razorpay is a payments and banking platform. Accept payments (cards, UPI, netbanking, wallets, EMI), manage orders, customers, refunds, disputes, subscriptions, payment links, QR codes, and invoices; settle funds; create virtual accounts; and run RazorpayX banking (contacts, fund accounts, payouts, payout links, transactions, account validation) — all via one REST API with Basic Auth. Read and write Razorpay data through One: subscriptions, invoices, payments, virtualaccounts, paymentlinks, transfers and more, 136 actions with real parameter documentation. Use whenever the user asks to look something up in Razorpay, create or update a record there, or build code against the Razorpay API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: razorpay
  generated-from: one-knowledge-base
---

# Razorpay through One

Razorpay is a payments and banking platform. Accept payments (cards, UPI, netbanking, wallets, EMI), manage orders, customers, refunds, disputes, subscriptions, payment links, QR codes, and invoices; settle funds; create virtual accounts; and run RazorpayX banking (contacts, fund accounts, payouts, payout links, transactions, account validation) — all via one REST API with Basic Auth.

One exposes Razorpay through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `razorpay` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Razorpay is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Razorpay account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Subscription | GET | `/v1/subscriptions/{{id}}` | `conn_mod_def::GLtbBBhCHVA::z6cvNC8KQFKit6p0s8CcOQ` |
| List Subscriptions | GET | `/v1/subscriptions` | `conn_mod_def::GLtbBKWBARg::RQC7HtLdSiWd_RviSXgxDQ` |
| Retrieve Scheduled Changes for a Subscription | GET | `/v1/subscriptions/{{id}}/retrieve_scheduled_changes` | `conn_mod_def::GLtbBC6SwtA::wSbeDp_3S26e4BLukAGY1g` |
| Cancel a Subscription | POST | `/v1/subscriptions/{{id}}/cancel` | `conn_mod_def::GLtbA5J_TSg::JOo18c6KSmS5ZSKXvGtDKw` |
| Cancel Scheduled Changes for a Subscription | POST | `/v1/subscriptions/{{id}}/cancel_scheduled_changes` | `conn_mod_def::GLtbBBNiV6A::d0eYkfq-RSq84Q6mMg-_wg` |
| Create Subscription | POST | `/v1/subscriptions` | `conn_mod_def::GLtbBCP_m5A::ktgk6XzMSCOjONyA79IogQ` |
| Delete an Offer from a Subscription | DELETE | `/v1/subscriptions/{{subId}}/{{offerId}}` | `conn_mod_def::GLtbBBZoe1A::F3ps0q1vQXWNp3H2W-AGXA` |
| Pause a Subscription | POST | `/v1/subscriptions/{{id}}/pause` | `conn_mod_def::GLtbBJ6yloA::4icgVgIMScutO_MhN8KMog` |
| Resume a Subscription | POST | `/v1/subscriptions/{{id}}/resume` | `conn_mod_def::GLtbBKMe1fg::_ukmTdfRTUKMju00F3xflg` |
| Update a Subscription | PATCH | `/v1/subscriptions/{{id}}` | `conn_mod_def::GLtbBI6c1fg::BhZuZ1bNSdqbe2dXkamqHQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Invoice | GET | `/v1/invoices/{{id}}` | `conn_mod_def::GLta-zZ3tMg::XEeELgAVTT2XGdw07KyzNg` |
| List Invoices | GET | `/v1/invoices` | `conn_mod_def::GLta-3uYwhg::I37pDsZiR7a-iwDeBh8KVQ` |
| Cancel an Invoice | POST | `/v1/invoices/{{id}}/cancel` | `conn_mod_def::GLta-em2jlg::51wmhpehSXmjMAVfHUeKzw` |
| Create Invoice | POST | `/v1/invoices` | `conn_mod_def::GLta-fwENbA::8W0FMcDwT2-xqK3fyETA-w` |
| Delete a Draft Invoice | DELETE | `/v1/invoices/{{id}}` | `conn_mod_def::GLta-ez676A::uA9pmjktTV-TLOUcjCnsLQ` |
| Issue an Invoice | POST | `/v1/invoices/{{id}}/issue` | `conn_mod_def::GLta-ysyoqg::mf_YsQ1nTMCHCTZEA1Am0A` |
| Notify an Invoice by Medium | POST | `/v1/invoices/{{id}}/notify_by/{{medium}}` | `conn_mod_def::GLta-y2UaDg::eteLyqEIREW5b7jgiEMbXg` |
| Update an Invoice | PATCH | `/v1/invoices/{{id}}` | `conn_mod_def::GLta-yvkwFA::bnUD0MPtTHSYptFzCRTwng` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Payments | GET | `/v1/payments` | `conn_mod_def::GLta_9QyiIg::5RxaxK9DQUaBmZEMg9DZqw` |
| Fetch Payment by ID | GET | `/v1/payments/{{id}}` | `conn_mod_def::GLta_8OUToA::cx25GVq2TzG8mVgkOWwA4Q` |
| Fetch Payments for a QR Code | GET | `/v1/payments/qr_codes/{{id}}/payments` | `conn_mod_def::GLtbAaR9wXg::qhI_ZmMESSm1uFQwyCsRdA` |
| Fetch Payments for an Order | GET | `/v1/orders/{{id}}/payments` | `conn_mod_def::GLta_eoU1lg::e60xjSojRaeL0QBiJpx8UQ` |
| Capture Payment | POST | `/v1/payments/{{id}}/capture` | `conn_mod_def::GLta_9k3biA::oQLo64vjS-6dQrEHEkLmEw` |
| Create Transfers from a Payment | POST | `/v1/payments/{{id}}/transfers` | `conn_mod_def::GLtbBR7iCGg::wGrf4NyHQTCZWPkrFJZnCQ` |
| Refund a Payment | POST | `/v1/payments/{{id}}/refund` | `conn_mod_def::GLtbAynNsjg::vhfWea9AQ-yEyhjv1L5euA` |
| Update a Payment | PATCH | `/v1/payments/{{id}}` | `conn_mod_def::GLtbATA_xoA::TDRGJgMCQ92FG0MV5-bOxQ` |

### VirtualAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Virtual Account | GET | `/v1/virtual_accounts/{{id}}` | `conn_mod_def::GLtbBj8zhuA::R8Km7kVDQ4CHLApfqL-nbw` |
| List Virtual Accounts | GET | `/v1/virtual_accounts` | `conn_mod_def::GLtbBrPp-bA::AJ7jzh-ORlGzyNomnPhy-g` |
| Add Allowed Payer to a Virtual Account | POST | `/v1/virtual_accounts/{{vaId}}/allowed_payers` | `conn_mod_def::GLtbBc-Vz8g::LBFuBmR2QpKnjeG_CWjV1Q` |
| Add VPA Receiver to a Virtual Account | POST | `/v1/virtual_accounts/{{id}}/receivers` | `conn_mod_def::GLtbBcsJu-A::bJf5KSlWSAynSdQpsou20A` |
| Close a Virtual Account | POST | `/v1/virtual_accounts/{{id}}/close` | `conn_mod_def::GLtbBcMQLyg::GRiaEz-FSgOQLyD_SdPQgA` |
| Create a Virtual Account | POST | `/v1/virtual_accounts` | `conn_mod_def::GLtbBjhi1kA::92TDlWQ1S2KHVlEj43qipA` |
| Delete an Allowed Payer for a Virtual Account | DELETE | `/v1/virtual_accounts/{{vaId}}/allowed_payers/{{id}}` | `conn_mod_def::GLtbBj5RsmA::mj302-s5Qq6boATvAnEX3Q` |
| Update a Virtual Account | PATCH | `/v1/virtual_accounts/{{id}}` | `conn_mod_def::GLtbBqdG8bg::B-w-zqVeQve2Sa2t0Wuy0A` |

### PaymentLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Payment Links | GET | `/v1/payment_links` | `conn_mod_def::GLta_2t28ug::LPym7AzSQuawXkm4twKHmg` |
| Fetch Payment Link by ID | GET | `/v1/payment_links/{{id}}` | `conn_mod_def::GLta_1qw9TA::pur5eTXRTWGt12ZDHakIVQ` |
| Cancel a Payment Link | POST | `/v1/payment_links/{{id}}/cancel` | `conn_mod_def::GLta_1ShrEg::m2cGzLsyQEOeh7jcfbgIGA` |
| Create Payment Links | POST | `/v1/payment_links` | `conn_mod_def::GLta_1qvN-A::hncjA0m4Qf-aDXoRyLCJfw` |
| Notify by Medium for a Payment Link | POST | `/v1/payment_links/{{id}}/notify_by/{{medium}}` | `conn_mod_def::GLtbAMz1wsg::Q1AQw1dNThuYk90hHpF8pw` |
| Update a Payment Link | PATCH | `/v1/payment_links/{{id}}` | `conn_mod_def::GLta_8AX3ag::wGJitoZmTiOfdRN53MacOQ` |

### Transfers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Transfer | GET | `/v1/transfers/{{id}}` | `conn_mod_def::GLtbBW4CaTg::ojvRPDqOQQS_8KtA18NLcw` |
| Fetch Transfers for a Payment | GET | `/v1/payments/{{id}}/transfers` | `conn_mod_def::GLtbBROVvqA::3xVrqIhBSK2NdZhGsM231Q` |
| List Transfers | GET | `/v1/transfers` | `conn_mod_def::GLtbBRIxIag::pKBEX8s9SUyaGlarFw6XPA` |
| Create Direct Transfer | POST | `/v1/transfers` | `conn_mod_def::GLtbBKBpsKg::qjX03KbrRPm3q_cqBMm-Lg` |
| Modify Settlement Hold on a Transfer | PATCH | `/v1/transfers/{{id}}` | `conn_mod_def::GLtbBc_dzXg::RwLhJSFYSQGqexGv1FkGOA` |
| Reverse a Transfer | POST | `/v1/transfers/{{id}}/reversals` | `conn_mod_def::GLtbBcbK-PA::q-WIaO9CSFenTQDkxdcyhQ` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Item | GET | `/v1/items/{{id}}` | `conn_mod_def::GLta_C5HLLA::7Ku1TGffT0eqGwZciaUQ3Q` |
| List Items | GET | `/v1/items` | `conn_mod_def::GLta-9jIp3g::lcP-IE0kRVeUP97GgT2jPQ` |
| Create Item Using Razorpay v1 | POST | `/v1/items` | `conn_mod_def::GLta-9kYnDg::zuKUIlQsT4Gnv0AF3ia_ew` |
| Delete an Item | DELETE | `/v1/items/{{id}}` | `conn_mod_def::GLta-9eLwng::STKooD0SQ7KLOv04C5zdqw` |
| Update Item | PATCH | `/v1/items/{{id}}` | `conn_mod_def::GLta-9qmLZA::Upa_2K6TS4iDmj-gMlJWJQ` |

### Payouts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payouts | GET | `/v1/payouts` | `conn_mod_def::GLtbCTPTPHA::FmNN2FK4TG6jJgYvWjh85A` |
| Approve a Payout | POST | `/v1/payouts/{{payoutId}}/approve` | `conn_mod_def::GLtbCHaR8Og::JJ3KoZjPSVmmgEPn1kIhhw` |
| Cancel a Payout | POST | `/v1/payouts/{{payoutId}}/cancel` | `conn_mod_def::GLtbCLaOgrA::WAbKMHj6TiaLNHF39mYNew` |
| Create Payout | POST | `/v1/payouts` | `conn_mod_def::GLtbCRwkyCg::A10zkRtSRES2g3aR2IyC5Q` |
| Reject a Payout | POST | `/v1/payouts/{{payoutId}}/reject` | `conn_mod_def::GLtbCRnKmAA::JpqWlrnDQ2i_07fX9UCNYw` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Customers | GET | `/v1/customers` | `conn_mod_def::GLta-DWXzAg::pJ_qHd8dTHCUtCiuYDYciQ` |
| Fetch Customer by ID | GET | `/v1/customers/{{id}}` | `conn_mod_def::GLta-J0gNPA::6YYdpynDRGOcvwH4t0m9Vg` |
| Create Customer | POST | `/v1/customers` | `conn_mod_def::GLta-DgFBzA::IKyyfaRdSyuAdtVgFs8__g` |
| Update a Customer | PUT | `/v1/customers/{{id}}` | `conn_mod_def::GLta-J2B6Kg::CfR9TOSrQmOtGA3Aq9WWbg` |

### Disputes

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Dispute by ID | GET | `/v1/disputes/{{id}}` | `conn_mod_def::GLta-X-1-YA::WfDd9CciSKap6SBIkd4dDA` |
| Fetch All Disputes | GET | `/v1/disputes` | `conn_mod_def::GLta-SVO2OA::m8MUKp2MQ3KpPEKJWRPH0w` |
| Accept Using Disputes | POST | `/v1/disputes/{{id}}/accept` | `conn_mod_def::GLta-Kg6BNg::giWINZGITO6PWD4VQbejiQ` |
| Contest a Dispute | PATCH | `/v1/disputes/{{id}}/contest` | `conn_mod_def::GLta-J3b83A::uD80YT9yTHyQXhb-8U5LGQ` |

### Settlements

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Instant Settlements | GET | `/v1/settlements/ondemand` | `conn_mod_def::GLta-sxPEgg::WjrUllWISj6jJq1-foksvQ` |
| Fetch All Settlements | GET | `/v1/settlements` | `conn_mod_def::GLtbA7CqmTg::woTqKAHkTY6gp72qoa3WWg` |
| Fetch Settlement by ID | GET | `/v1/settlements/{{id}}` | `conn_mod_def::GLtbA5KDSLA::I7EiD6NNQD6w2-PDOAibtA` |
| Create Instant Settlement | POST | `/v1/settlements/ondemand` | `conn_mod_def::GLta-ZXvWfg::QCSmgWFCSfmG0KT7p3Y-qw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Order by ID | GET | `/v1/orders/{{id}}` | `conn_mod_def::GLta_Y9mFcg::nIjtKcF5T-imB_tMHrLKgg` |
| List Orders | GET | `/v1/orders` | `conn_mod_def::GLta_SdpGSA::Oct-0O-tRxmdrNYdloGy4Q` |
| Create Order | POST | `/v1/orders` | `conn_mod_def::GLta_RvI5uA::IRBTHZlaR6Kk7NJyzeIjFA` |
| Update an Order | PATCH | `/v1/orders/{{id}}` | `conn_mod_def::GLta_Y1647A::ItzPwKM6S6Go86OzcGmYNw` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Contact | GET | `/v1/contacts/{{contactId}}` | `conn_mod_def::GLtbBxcHdvg::Vy2awJWtRem6UkPR_txDcA` |
| List Contacts | GET | `/v1/contacts` | `conn_mod_def::GLtbBzhVreg::WRM-Fsc0Su-4yhVcsYpT0A` |
| Create Contact Using Contacts | POST | `/v1/contacts` | `conn_mod_def::GLtbBxihbDA::d88-0Hx8R4SC7QVU4Gg_Tw` |
| Update a Contact | PATCH | `/v1/contacts/{{contactId}}` | `conn_mod_def::GLtbBzXfvEg::-dtonScuSuarYh1RbMc3DQ` |

### FundAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Fund Account | GET | `/v1/fund_accounts/{{fundAccountId}}` | `conn_mod_def::GLtbB-pos0A::-Cwxm6caRWe5PYbRbBljPQ` |
| List Fund Accounts | GET | `/v1/fund_accounts` | `conn_mod_def::GLtbCBWETIg::L5qZldjCSLCjr30LVVYgbA` |
| Activate or Deactivate Fund Account | PATCH | `/v1/fund_accounts/{{fundAccountId}}` | `conn_mod_def::GLtbB6vNU3A::tojJ9ehuQ-CeN6wOAMRPLQ` |
| Create Fund Account | POST | `/v1/fund_accounts` | `conn_mod_def::GLtbB_BC0sg::TDLP6VoBTR6eBiCnTD26YQ` |

### Bills

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bill | POST | `/v1/bills` | `conn_mod_def::GLta-C3Z7Kg::4HXY68VvTy65HIHe_wPvcg` |
| Delete a Bill | DELETE | `/v1/bills/{{billId}}` | `conn_mod_def::GLta-BNU5Hg::B3AgqvwDR0yRw6a4QQkt3A` |
| Update a Bill | PATCH | `/v1/bills/{{billId}}` | `conn_mod_def::GLta-CenJdA::YFW-iD63TbGdZIZDN4kJ_Q` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Document Info | GET | `/v1/documents/{{id}}` | `conn_mod_def::GLta-YH2Efg::URwtF5yFRRmV_uFVWAUGzg` |
| Fetch Document Content | POST | `/v1/documents/{{id}}/content` | `conn_mod_def::GLta-XdD0cg::jKvrE0OBRXOHS9K_T1ID9A` |
| Upload Document | POST | `/v1/documents` | `conn_mod_def::GLta-ZBgRWA::Mve-GnFjRCuhi0FHefAUww` |

### LinkedAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Linked Account | GET | `/v1/v2/accounts/{{accountId}}` | `conn_mod_def::GLta_KL9TXg::mBEfsO3KTRy2idy7AFmKgw` |
| Create a Linked Account | POST | `/v1/v2/accounts` | `conn_mod_def::GLta_I4KtUA::EwbgltzFQ8ujQW0mYDPsuQ` |
| Update a Linked Account | PATCH | `/v1/v2/accounts/{{accountId}}` | `conn_mod_def::GLta_RwvcOA::T-1vCex5RKuTHQfH6hxWIw` |

### Stakeholders

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch All Stakeholders for an Account | GET | `/v1/v2/accounts/{{accountId}}/stakeholders` | `conn_mod_def::GLta_k0JU4g::uCaVdZvrQdmiDcHhOWcAdQ` |

2 more Stakeholders actions are available through search.

This lists 90 of 136 actions. For anything not here, call `search_one_platform_actions` with platform `razorpay`. The full catalog is at https://www.withone.ai/knowledge/razorpay.

## When a call fails

The error comes from Razorpay, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/razorpay

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
