---
name: sage-accounting
description: Sage Accounting is cloud-based software for managing invoices, expenses, cash flow, and compliance. It supports small businesses in staying on top of their finances. Read and write Sage Accounting data through One: purchasecreditnotes, attachments, salescreditnotes, salesinvoices, purchaseinvoices, salesquickentries and more, 279 actions with real parameter documentation. Use whenever the user asks to look something up in Sage Accounting, create or update a record there, or build code against the Sage Accounting API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sage-accounting
  generated-from: one-knowledge-base
---

# Sage Accounting through One

Sage Accounting is cloud-based software for managing invoices, expenses, cash flow, and compliance. It supports small businesses in staying on top of their finances.

One exposes Sage Accounting through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sage-accounting` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sage Accounting is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sage Accounting account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### PurchaseCreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Credit Note | GET | `/purchase_credit_notes/{{key}}` | `conn_mod_def::GJ6T-W3p5Wo::lXvUKfgJQfWJ0UwXGeBceA` |
| List Purchase Credit Notes | GET | `/purchase_credit_notes` | `conn_mod_def::GJ6T-sL2YAw::73SB2cCsTXWCngoJ9FKtgg` |
| Create a Purchase Credit Note | POST | `/v3.1/purchase_credit_notes` | `conn_mod_def::GJ6T-XUCvkY::_dzomdsLT3ermrfS-7TdlA` |
| Delete a Purchase Credit Note | DELETE | `/purchase_credit_notes/{{key}}` | `conn_mod_def::GJ6T-VVdSVk::aAzIdUbzSlu6aIBQUQ9onw` |
| Release a Purchase Credit Note | POST | `/v3.1/purchase_credit_notes/{{key}}/release` | `conn_mod_def::GJ6T-VymlIU::z-n6wRUdQ6uUbqcApIez3Q` |
| Update a Purchase Credit Note | PUT | `/v3.1/purchase_credit_notes/{{key}}` | `conn_mod_def::GJ6T-nBlRZI::b30dnqchTM2PVKUTRd1E4g` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Attachment by Key | GET | `/attachments/{{key}}` | `conn_mod_def::GJ6T1t7pUiQ::GhqOXiGXT0SCu2jU7DxN2g` |
| Get an Attachment’s File | GET | `/attachments/{{key}}/file` | `conn_mod_def::GJ6T14aOGq0::qVZ_x9uHRlyIO8WTS8hqNg` |
| List Attachments | GET | `/attachments` | `conn_mod_def::GJ6T1v4V_y4::9GecFaQRSGmXYZz-yMcyPA` |
| Create an Attachment | POST | `/v3.1/attachments` | `conn_mod_def::GJ6T1t1RkPQ::yNYR9fY3TcimAIEDVi1_kw` |
| Delete an Attachment | DELETE | `/attachments/{{key}}` | `conn_mod_def::GJ6T1t1KqM8::ZAYDbuPgQg-CReikJ3zOIw` |
| Update an Attachment | PUT | `/v3.1/attachments/{{key}}` | `conn_mod_def::GJ6T15WPZVE::akBNI_OSRiaItH0TUSOBzg` |

### SalesCreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sales Credit Note | GET | `/v3.1/sales_credit_notes/{{key}}` | `conn_mod_def::GJ6T_XkSEw8::hEHxEfTvQJCfzJRHCqyRTw` |
| List Sales Credit Notes | GET | `/v3.1/sales_credit_notes` | `conn_mod_def::GJ6T_ettBRE::QSiZedkWQpqKbRFWpbE8hg` |
| Create a Sales Credit Note | POST | `/v3.1/sales_credit_notes` | `conn_mod_def::GJ6T_VRpxlo::9bF03iCCQxufTHdXFFdHkA` |
| Release a Sales Credit Note | POST | `/v3.1/sales_credit_notes/{{key}}/release` | `conn_mod_def::GJ6T_UUAqjc::JBkpiTM5REi9h4bMZpavfA` |
| Update a Sales Credit Note | PUT | `/v3.1/sales_credit_notes/{{key}}` | `conn_mod_def::GJ6T_ZfhuUs::3BIu8NJSR7qwWU_gbTGffQ` |
| Void a Sales Credit Note | DELETE | `/v3.1/sales_credit_notes/{{key}}` | `conn_mod_def::GJ6T_oTTHDI::KrrV-k71Su-QLtpl44qrAQ` |

### SalesInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sales Invoice | GET | `/v3.1/sales_invoices/{{key}}` | `conn_mod_def::GJ6UAB3KmJ0::rhHe_MBiTga6AXGXEGdcIg` |
| List Sales Invoices | GET | `/sales_invoices` | `conn_mod_def::GJ6UAcKIzGE::pGnd1ai5TF6P7qGor-MkOA` |
| Create a Sales Invoice | POST | `/v3.1/sales_invoices` | `conn_mod_def::GJ6UAAbnn4A::mVtli29PTU64GBLFMgn8vQ` |
| Release a Sales Invoice | POST | `/sales_invoices/{{key}}/release` | `conn_mod_def::GJ6UAEvKGmg::msdt9VWWR-qglcRNYM431A` |
| Update a Sales Invoice | PUT | `/v3.1/sales_invoices/{{key}}` | `conn_mod_def::GJ6UAn0nzHA::TY52kQFwTeGqxyKHjrO_cw` |
| Void a Sales Invoice | DELETE | `/v3.1/sales_invoices/{{key}}` | `conn_mod_def::GJ6UAlbOu58::QtlD1yC5QO2uxRUUGxYeCQ` |

### PurchaseInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Invoice | GET | `/purchase_invoices/{{key}}` | `conn_mod_def::GJ6T-3ReHD4::XuYVV-MpQ4eaiOH9EbKu7w` |
| List Purchase Invoices | GET | `/purchase_invoices` | `conn_mod_def::GJ6T-8nWLKM::EHEnZpFZRhWIrcw7xebp0g` |
| Create a Purchase Invoice | POST | `/v3.1/purchase_invoices` | `conn_mod_def::GJ6T-j9Que4::khTvZj--Rfawt_PrWqRtsg` |
| Delete a Purchase Invoice | DELETE | `/purchase_invoices/{{key}}` | `conn_mod_def::GJ6T-gia6-g::idAz8ocJST6bo-dXN_aGyg` |
| Release a Purchase Invoice | POST | `/purchase_invoices/{{key}}/release` | `conn_mod_def::GJ6T-jm_pv0::ReOWhHyKS5KcZVYEhDBcnw` |
| Update a Purchase Invoice | PUT | `/v3.1/purchase_invoices/{{key}}` | `conn_mod_def::GJ6T-06iAc4::Vi-aGVDXRzmhLi7Dy7TdRg` |

### SalesQuickEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sales Quick Entry | GET | `/sales_quick_entries/{{key}}` | `conn_mod_def::GJ6UA4xRxSU::UaGdCgPlSHi6wSIreRVc0g` |
| List Sales Quick Entries | GET | `/sales_quick_entries` | `conn_mod_def::GJ6UBUAAx0I::GQt3mVkyQqGs3V-dBeDQfw` |
| Create a Sales Quick Entry | POST | `/v3.1/sales_quick_entries` | `conn_mod_def::GJ6UAncTOfI::1uafdzqaRkSpq8joOLuf6g` |
| Delete a Sales Quick Entry | DELETE | `/sales_quick_entries/{{key}}` | `conn_mod_def::GJ6UAmTLoC0::b8KTTj_bSp6cAeK4tEHRiw` |
| Update a Sales Quick Entry | PUT | `/v3.1/sales_quick_entries/{{key}}` | `conn_mod_def::GJ6UBEqtmgc::keJtCrV8RfGb7t819jqDEQ` |

### SalesQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sales Quote | GET | `/v3.1/sales_quotes/{{key}}` | `conn_mod_def::GJ6UBO54VjQ::tF66WJpCQPG5oBVIQMAo8w` |
| List Sales Quotes | GET | `/v3.1/sales_quotes` | `conn_mod_def::GJ6UBkzXPY0::oXLt3u52RdeIbUPT9e2LIg` |
| Create a Sales Quote | POST | `/v3.1/sales_quotes` | `conn_mod_def::GJ6UBM13pgE::lYMt0zq8TyeyOvq2ZrgomQ` |
| Delete a Sales Quote | DELETE | `/sales_quotes/{{key}}` | `conn_mod_def::GJ6UBBS7Mlc::7XcyuzrpTi-P_UDwvf5rZA` |
| Update a Sales Quote | PUT | `/v3.1/sales_quotes/{{key}}` | `conn_mod_def::GJ6UBdlgEQM::77Qn8YkDQSugYhvXCH_u2Q` |

### ContactPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Payment | GET | `/v3.1/contact_payments/{{key}}` | `conn_mod_def::GJ6T4nMHqSw::Qzo9rDEOS1eayHmOlJoZmg` |
| List Contact Payments | GET | `/contact_payments` | `conn_mod_def::GJ6T4pi_XOc::-YWvQ7UpSECepACWSlpUbg` |
| Create a Contact Payment | POST | `/contact_payments` | `conn_mod_def::GJ6T4xVjeHY::YK6MmG2nRy2TyrWvO4nWnQ` |
| Delete a Contact Payment | DELETE | `/contact_payments/{{key}}` | `conn_mod_def::GJ6T4mRxxts::hLW0MK0SQcy4ygJa16i4Tw` |
| Update a Contact Payment | PUT | `/v3.1/contact_payments/{{key}}` | `conn_mod_def::GJ6T5ENQgOA::1ry8D41dQ_yqBHlqFO_prw` |

### BankAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bank Account | GET | `/bank_accounts/{{key}}` | `conn_mod_def::GJ6T2GNBJgE::IdJMvF26QOilXDLPvCH3VA` |
| List Bank Accounts | GET | `/v3.1/bank_accounts` | `conn_mod_def::GJ6T2MZllSc::coFQy3LdRKWpYTbX6YFbfQ` |
| Create a Bank Account | POST | `/v3.1/bank_accounts` | `conn_mod_def::GJ6T18Qc9CE::ZlejgMfQQKe57H6xNL6yFg` |
| Delete a Bank Account | DELETE | `/bank_accounts/{{key}}` | `conn_mod_def::GJ6T2E1pe20::mxT-el38Q9yrI6jUDpwOGg` |
| Update a Bank Account | PUT | `/bank_accounts/{{key}}` | `conn_mod_def::GJ6T2JoTrR4::8P6PVBpzSSuoakbxgC3PlA` |

### SalesEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sales Estimate by Key | GET | `/v3.1/sales_estimates/{{key}}` | `conn_mod_def::GJ6T_pKcwEQ::iPVbEuCxSdmHobXDx2ZsOw` |
| List Sales Estimates | GET | `/sales_estimates` | `conn_mod_def::GJ6T_2Raka4::f50trX39Sc2JSadLBMlmqA` |
| Create a Sales Estimate | POST | `/v3.1/sales_estimates` | `conn_mod_def::GJ6T_ptUwG0::FGOp12fHQCe1_Y1NRTXO-w` |
| Delete a Sales Estimate | DELETE | `/v3.1/sales_estimates/{{key}}` | `conn_mod_def::GJ6T_tgdlTo::HjNKy1Y7QaqbN4UmuNHcyQ` |
| Update a Sales Estimate | PUT | `/v3.1/sales_estimates/{{key}}` | `conn_mod_def::GJ6UAK7CDTk::1G3-JUdkQZOZNTyyGEKllQ` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service by Key | GET | `/services/{{key}}` | `conn_mod_def::GJ6UBwAmTX0::uh6Ygi34Q_Gi1hTMJXc6Lg` |
| List Services | GET | `/v3.1/services` | `conn_mod_def::GJ6UCDqZaCU::FO_rqBidQfuarCacfDxedQ` |
| Create a Service | POST | `/v3.1/services` | `conn_mod_def::GJ6UBtfiqFE::jEqXaVTKQImEHyOELIkDfA` |
| Delete a Service | DELETE | `/v3.1/services/{{key}}` | `conn_mod_def::GJ6UBxf0PQc::W4zP6Ut2T5i20g5BVUwa3A` |
| Update a Service | PUT | `/v3.1/services/{{key}}` | `conn_mod_def::GJ6UB_vihLY::z0ulUJprRemR7CynafyH1g` |

### StockMovements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Stock Movement | GET | `/v3.1/stock_movements/{{key}}` | `conn_mod_def::GJ6UCUQ8AXo::okCV1GMxTGOSeT3DjRnvyQ` |
| List Stock Movements | GET | `/stock_movements` | `conn_mod_def::GJ6UCoogdTg::tq0O5DGrS4aMm36kYtJ27w` |
| Create a Stock Movement | POST | `/v3.1/stock_movements` | `conn_mod_def::GJ6UCPh50kA::idMfRLSGQm2bxw2Hy_dUWg` |
| Delete a Stock Movement | DELETE | `/stock_movements/{{key}}` | `conn_mod_def::GJ6UCOsWf-c::e573gbCFSTC3WGLBPzZGfg` |
| Update a Stock Movement | PUT | `/stock_movements/{{key}}` | `conn_mod_def::GJ6UCkt1i1M::0bIctXaWQCeEzFowJDkmCw` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Address by Key | GET | `/addresses/{{key}}` | `conn_mod_def::GJ6T1Gmbj5I::4iWvZqqySQmNe81KV0sPkg` |
| List Addresses | GET | `/addresses` | `conn_mod_def::GJ6T07BklNo::3vatBbPEQcOwmK9-sc7RJw` |
| Create an Address | POST | `/v3.1/addresses` | `conn_mod_def::GJ6T0sHVusw::LkHj2f2nRsipb9vQwX0L8Q` |
| Delete an Address | DELETE | `/v3.1/addresses/{{key}}` | `conn_mod_def::GJ6T05iXCTE::MZAyvdVQSGi9FSKNL4F7mA` |
| Update an Address | PUT | `/v3.1/addresses/{{key}}` | `conn_mod_def::GJ6T05wk9RI::kSbNQJQZRzy-KaXJpCI3HQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/v3.1/contacts/{{key}}` | `conn_mod_def::GJ6T5mfis50::L5P6ze0cQiW4L1FswikOkQ` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ6T5bpICow::N-sAsddsTR-8v_c4iQaZxA` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ6T5cQn_m8::6QfWg2gKRRal2y3TraGwxA` |
| Delete a Contact | DELETE | `/v3.1/contacts/{{key}}` | `conn_mod_def::GJ6T5W3WDGI::VKTEixsORACBIbDs3ppECw` |
| Update a Contact | PUT | `/contacts/{{key}}` | `conn_mod_def::GJ6T5gQTgo8::Hs-9iXc_STaFHP31-ZjGGw` |

### ContactPersons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Person | GET | `/v3.1/contact_persons/{{key}}` | `conn_mod_def::GJ6T4-I3-0M::HGuJnkROQt6i-IdD7Pn8MQ` |
| List Contact People | GET | `/v3.1/contact_persons` | `conn_mod_def::GJ6T463udSw::Rumq6CFkS52x7Ob024YK8g` |
| Create a Contact Person | POST | `/v3.1/contact_persons` | `conn_mod_def::GJ6T45PvqLg::1YTKnzgFTn2dSH700eNENg` |
| Delete a Contact Person | DELETE | `/v3.1/contact_persons/{{key}}` | `conn_mod_def::GJ6T4-IBI2g::leha5t7lRHa4HZbn1CIhaQ` |
| Update a Contact Person | PUT | `/contact_persons/{{key}}` | `conn_mod_def::GJ6T5OBbvSw::8TVgM0QlTpWYh9CIfgqqLw` |

### JournalCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Journal Code by Key | GET | `/journal_codes/{{key}}` | `conn_mod_def::GJ6T7hqpPuE::HSY3ZjqSQMOgzlih9mimZw` |
| List Journal Codes | GET | `/journal_codes` | `conn_mod_def::GJ6T7ic7mrk::tM421ljBSU6upKS0jgbwuw` |
| Create a Journal Code | POST | `/journal_codes` | `conn_mod_def::GJ6T7g_A-uQ::p1ddXL6ERcS0ahSvkbe8XA` |
| Delete a Journal Code | DELETE | `/v3.1/journal_codes/{{key}}` | `conn_mod_def::GJ6T7nfXI9M::cpp4g8jlTw2zbI78T5ZhVA` |
| Update a Journal Code | PUT | `/v3.1/journal_codes/{{key}}` | `conn_mod_def::GJ6T7wGKt8E::hEe7KycCSsSsfAhVO1qRiQ` |

### Journals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Journal | GET | `/v3.1/journals/{{key}}` | `conn_mod_def::GJ6T7wjG4FQ::vxQ-qL4DSUG7Mx9z2SmYOw` |
| List Journals | GET | `/v3.1/journals` | `conn_mod_def::GJ6T8ErgDd4::CRuZmlq6TQCnYxEPZsmEZQ` |
| Create a Journal | POST | `/journals` | `conn_mod_def::GJ6T7wX5aYQ::totS3De8Tn6gZvglzzgK0g` |
| Delete a Journal | DELETE | `/journals/{{key}}` | `conn_mod_def::GJ6T7u3X7j0::OKsMql9VRJGOFJ3yyIvnuQ` |
| Reissue a Journal | POST | `/journals/{{key}}/reissue` | `conn_mod_def::GJ6T70IexYU::EDEG8t1NRzGt2B3-ujYpuA` |

This lists 90 of 279 actions. For anything not here, call `search_one_platform_actions` with platform `sage-accounting`. The full catalog is at https://www.withone.ai/knowledge/sage-accounting.

## When a call fails

The error comes from Sage Accounting, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sage-accounting

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
