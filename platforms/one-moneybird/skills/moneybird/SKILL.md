---
name: moneybird
description: Moneybird is an online accounting platform for small businesses and accountants that provides invoicing, expense tracking, bank reconciliation, and VAT handling, enabling teams to automate bookkeeping workflows and integrate financial data with external business systems through its API. Read and write Moneybird data through One: salesinvoices, assets, estimates, externalsalesinvoices, contacts, generaldocuments and more, 296 actions with real parameter documentation. Use whenever the user asks to look something up in Moneybird, create or update a record there, or build code against the Moneybird API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: moneybird
  generated-from: one-knowledge-base
---

# Moneybird through One

Moneybird is an online accounting platform for small businesses and accountants that provides invoicing, expense tracking, bank reconciliation, and VAT handling, enabling teams to automate bookkeeping workflows and integrate financial data with external business systems through its API.

One exposes Moneybird through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `moneybird` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Moneybird is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Moneybird account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SalesInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment for a Sales Invoice | GET | `/api/v2/{{administrationId}}/sales_invoices/{{salesInvoiceId}}/attachments/{{id}}/download{{format}}` | `conn_mod_def::GLcOMNzbEaA::k2Md0NvfSxiyWStGjbLmlw` |
| Download Packing Slip PDF for a Sales Invoice | GET | `/api/v2/{{administrationId}}/sales_invoices/{{id}}/download_packing_slip_pdf{{format}}` | `conn_mod_def::GLcOMNzzJbA::Of-D308rSUaV2SYC63kkeg` |
| Download Sales Invoice PDF by ID | GET | `/api/v2/{{administrationId}}/sales_invoices/{{id}}/download_pdf{{format}}` | `conn_mod_def::GLcOMNuf3jg::yNpe5QNhTYS_ebwa10Mq-w` |
| Download UBL for a Sales Invoice | GET | `/api/v2/{{administrationId}}/sales_invoices/{{id}}/download_ubl{{format}}` | `conn_mod_def::GLcOMNo2oag::Du4NKI5JQaOSfIDoup_yPQ` |
| Find a Sales Invoice by Invoice ID | GET | `/api/v2/{{administrationId}}/sales_invoices/find_by_invoice_id/{{invoiceId}}{{format}}` | `conn_mod_def::GLcOMcDmZwA::UJrkZzBET223Dk7nHKRUUw` |
| Find a Sales Invoice by Reference | GET | `/api/v2/{{administrationId}}/sales_invoices/find_by_reference/{{reference}}{{format}}` | `conn_mod_def::GLcOMcECDSA::R5ks6zI6TyS3oFgg-ObHwQ` |
| Get Sales Invoice by ID for an Administration | GET | `/api/v2/{{administrationId}}/sales_invoices/{{id}}{{format}}` | `conn_mod_def::GLcOMcD73xg::ea9PxpLSSpq5jpaGIw3vGQ` |
| List Sales Invoice Synchronization IDs and Versions for an Administration | GET | `/api/v2/{{administrationId}}/sales_invoices/synchronization{{format}}` | `conn_mod_def::GLcOMua3z0A::OQTgOGJJR4O0PJ9Z3_A-EA` |
| List Sales Invoices for an Administration | GET | `/api/v2/{{administrationId}}/sales_invoices{{format}}` | `conn_mod_def::GLcOMn7J5fg::ujGHbLHnQtu2ni1Izyl3Gg` |
| Add a Note to a Sales Invoice | POST | `/api/v2/{{administrationId}}/sales_invoices/{{salesInvoiceId}}/notes{{format}}` | `conn_mod_def::GLcOLwMY07g::FikgywYsQhWlmqZS_IsEMw` |
| Add Attachment to a Sales Invoice | POST | `/api/v2/{{administrationId}}/sales_invoices/{{id}}/attachments{{format}}` | `conn_mod_def::GLcOLvv0ZZg::G_DubMj6Td64377MLyTHtw` |
| Create a Sales Invoice for an Administration | POST | `/api/v2/{{administrationId}}/sales_invoices{{format}}` | `conn_mod_def::GLcOMCZH7uA::Nn1U-Xk0RLCoAoE67_Myxw` |

13 more SalesInvoices actions are available through search.

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset by ID for an Administration | GET | `/api/v2/{{administrationId}}/assets/{{id}}{{format}}` | `conn_mod_def::GLcODG_Bjyg::aG-KKypRTNaGZRhan9TfKg` |
| List Assets for an Administration | GET | `/api/v2/{{administrationId}}/assets{{format}}` | `conn_mod_def::GLcODHcyxYg::C7GbyTzRQLW-eMbDgVagtQ` |
| Add a Source to an Asset | POST | `/api/v2/{{administrationId}}/assets/{{id}}/sources{{format}}` | `conn_mod_def::GLcOCFn0jZg::KrlPord-T9SzgxB5mTpgSg` |
| Create a Manual Value Change Using Assets Value Changes Manual | POST | `/api/v2/{{administrationId}}/assets/{{id}}/value_changes/manual{{format}}` | `conn_mod_def::GLcOCUWfqzg::N8sire9US3uh4jdsuFdUSA` |
| Create Arbitrary Value Change for an Asset | POST | `/api/v2/{{administrationId}}/assets/{{id}}/value_changes/arbitrary{{format}}` | `conn_mod_def::GLcOCUUUnZA::l48eABudQy-B9vmrdDEQZw` |
| Create Asset for an Administration | POST | `/api/v2/{{administrationId}}/assets{{format}}` | `conn_mod_def::GLcOCUU1h1g::wyIxU5BIR529Ut4LE-iC_g` |
| Create Divestment Value Change for an Asset | POST | `/api/v2/{{administrationId}}/assets/{{id}}/value_changes/divestment{{format}}` | `conn_mod_def::GLcOB15JUoA::5RKmyVWwRq63WZ6KqmRygg` |
| Delete a Reinvestment Reserve Purchase for an Asset | DELETE | `/api/v2/{{administrationId}}/assets/{{id}}/reinvestment_reserve_purchase{{format}}` | `conn_mod_def::GLcOCdbjx3g::qEFZMsfwSHCH-FooXvzQsw` |
| Delete a Reinvestment Reserve Sale for an Asset | DELETE | `/api/v2/{{administrationId}}/assets/{{id}}/reinvestment_reserve_sale{{format}}` | `conn_mod_def::GLcOCdSnaCA::Nn5lX0eoQYGE25tLOHe-bA` |
| Delete an Asset in an Administration | DELETE | `/api/v2/{{administrationId}}/assets/{{id}}{{format}}` | `conn_mod_def::GLcOC7JRY6A::3ri5NcvFT0WzeSYnGEFJrg` |
| Delete an Asset Source | DELETE | `/api/v2/{{administrationId}}/assets/{{id}}/sources/{{sourceId}}{{format}}` | `conn_mod_def::GLcOCdEDM5g::d9me4DBySAezTRqpruhq2w` |
| Full Depreciation Value Change for an Asset | POST | `/api/v2/{{administrationId}}/assets/{{id}}/value_changes/full_depreciation{{format}}` | `conn_mod_def::GLcOB1Y6DzA::7aLD5ZT8SQyBEO6NQA7yFg` |

4 more Assets actions are available through search.

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Estimate PDF by ID | GET | `/api/v2/{{administrationId}}/estimates/{{id}}/download_pdf{{format}}` | `conn_mod_def::GLcOHknxdGg::00jIVO-sSQG7WrZAAhB3BA` |
| Find an Estimate by Estimate ID | GET | `/api/v2/{{administrationId}}/estimates/find_by_estimate_id/{{estimateId}}{{format}}` | `conn_mod_def::GLcOIBfYW3A::pVOG3QcoROS6eZD3hZ3uUQ` |
| Get Estimate by ID for an Administration | GET | `/api/v2/{{administrationId}}/estimates/{{id}}{{format}}` | `conn_mod_def::GLcOHx_HgUA::AnGD7t6YTCa3gon_0BrXdw` |
| List All IDs and Versions for Estimates Synchronization | GET | `/api/v2/{{administrationId}}/estimates/synchronization{{format}}` | `conn_mod_def::GLcOHtREa3A::jkF9ESSAQ5e--M2L0RBqfQ` |
| List Estimates for an Administration | GET | `/api/v2/{{administrationId}}/estimates{{format}}` | `conn_mod_def::GLcOHx_MzLg::7NVeDzTvSI6-0Sq36WgI-A` |
| Add Attachment to an Estimate | POST | `/api/v2/{{administrationId}}/estimates/{{id}}/attachments{{format}}` | `conn_mod_def::GLcOHNjFQsA::IOzrQIR0RM6dHGyFxYMYfw` |
| Bill Estimate for an Administration | PATCH | `/api/v2/{{administrationId}}/estimates/{{id}}/bill_estimate{{format}}` | `conn_mod_def::GLcOHMvAFcg::cTrEayjuTJiqMlu2BvF-8g` |
| Change State for an Estimate | PATCH | `/api/v2/{{administrationId}}/estimates/{{id}}/change_state{{format}}` | `conn_mod_def::GLcOHNeGF7g::wi49U4WXRA-N4DNJQxurCg` |
| Create an Estimate for an Administration | POST | `/api/v2/{{administrationId}}/estimates{{format}}` | `conn_mod_def::GLcOHM-nx6g::MDvd1wZwSe23sXaNIJPfiw` |
| Delete an Estimate | DELETE | `/api/v2/{{administrationId}}/estimates/{{id}}{{format}}` | `conn_mod_def::GLcOHXZBk1A::7pKixbbMQ-Kv9OK_hHTEIw` |
| Send Estimate for an Administration | PATCH | `/api/v2/{{administrationId}}/estimates/{{id}}/send_estimate{{format}}` | `conn_mod_def::GLcOINZvKMA::_mPPsu9FST2c6xiGxoKcNQ` |
| Synchronization Estimates for an Administration | POST | `/api/v2/{{administrationId}}/estimates/synchronization{{format}}` | `conn_mod_def::GLcOHx_BWwg::LAKWXmtZS8KG78I-LNHMxQ` |

1 more Estimates actions are available through search.

### ExternalSalesInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment for an External Sales Invoice | GET | `/api/v2/{{administrationId}}/external_sales_invoices/{{externalSalesInvoiceId}}/attachments/{{id}}/download{{format}}` | `conn_mod_def::GLcOInyfGZg::Mzcs03WQR4uzfXyNFpZwGA` |
| Get an External Sales Invoice by ID | GET | `/api/v2/{{administrationId}}/external_sales_invoices/{{id}}{{format}}` | `conn_mod_def::GLcOImwt10g::KqjK6w8LRG662K6w7W6mdQ` |
| List External Sales Invoice Synchronization IDs and Versions for an Administration | GET | `/api/v2/{{administrationId}}/external_sales_invoices/synchronization{{format}}` | `conn_mod_def::GLcOIz4hDHA::aDXbi7OvQvSJdfDBxorOpw` |
| List External Sales Invoices for an Administration | GET | `/api/v2/{{administrationId}}/external_sales_invoices{{format}}` | `conn_mod_def::GLcOIp4ElZA::UKloBJfhS12Zn4sU_4OlQg` |
| Add a Note to an External Sales Invoice | POST | `/api/v2/{{administrationId}}/external_sales_invoices/{{externalSalesInvoiceId}}/notes{{format}}` | `conn_mod_def::GLcOIN9wLrA::RvsUDlkCSQKH0okZ7J_XAw` |
| Add Attachment to an External Sales Invoice | POST | `/api/v2/{{administrationId}}/external_sales_invoices/{{id}}/attachment{{format}}` | `conn_mod_def::GLcOIO9maOg::Em5p9gnkRI-yhdmJ4T3A1A` |
| Create an External Sales Invoice for an Administration | POST | `/api/v2/{{administrationId}}/external_sales_invoices{{format}}` | `conn_mod_def::GLcOIcUGCCg::UJZu9linTs2DsWf3erjMmg` |
| Create External Sales Invoice From Attachment Using External Sales Invoices | POST | `/api/v2/{{administrationId}}/external_sales_invoices/attachment{{format}}` | `conn_mod_def::GLcOIcTce3A::83CfZBDhRZuGGYSUxWfcrg` |
| Delete an External Sales Invoice | DELETE | `/api/v2/{{administrationId}}/external_sales_invoices/{{id}}{{format}}` | `conn_mod_def::GLcOIceh8Ig::C1oI8MwkSjWRF-Zdd4lFfg` |
| Mark as Dubious Using External Sales Invoices | PATCH | `/api/v2/{{administrationId}}/external_sales_invoices/{{id}}/mark_as_dubious{{format}}` | `conn_mod_def::GLcOI1lbtLg::b3ZSf7d0SD--6okpbbpxHw` |
| Mark as Uncollectible for an External Sales Invoice | PATCH | `/api/v2/{{administrationId}}/external_sales_invoices/{{id}}/mark_as_uncollectible{{format}}` | `conn_mod_def::GLcOI2gaq1g::YQtJdeEmRWq6t0f1Xsnw-A` |
| Synchronization Using External Sales Invoices | POST | `/api/v2/{{administrationId}}/external_sales_invoices/synchronization{{format}}` | `conn_mod_def::GLcOInnTVzg::G6j3UQnuSIaHy2-wZLkuqQ` |

1 more ExternalSalesInvoices actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Contacts for an Administration | GET | `/api/v2/{{administrationId}}/contacts/filter{{format}}` | `conn_mod_def::GLcODiHctWA::uzD4YuKnRK6Pw7Gs5DfxOQ` |
| Get a Contact for an Administration | GET | `/api/v2/{{administrationId}}/contacts/{{id}}{{format}}` | `conn_mod_def::GLcODta9PlA::DowU2946Q2C8ey4H1heBdA` |
| Get Contact by Customer ID for an Administration | GET | `/api/v2/{{administrationId}}/contacts/customer_id/{{customerId}}{{format}}` | `conn_mod_def::GLcODsQTD3g::e7LGKWc3RVS5JPi62yxkcA` |
| List All IDs and Versions for Contacts in an Administration | GET | `/api/v2/{{administrationId}}/contacts/synchronization{{format}}` | `conn_mod_def::GLcOD_NFSRg::fTBVJMLWTAWx2lIcSb7ADQ` |
| List Contacts for an Administration | GET | `/api/v2/{{administrationId}}/contacts{{format}}` | `conn_mod_def::GLcODxZTcRA::6Nt1AaN3SRimmTK7XdmyiQ` |
| Add a Note to a Contact | POST | `/api/v2/{{administrationId}}/contacts/{{contactId}}/notes{{format}}` | `conn_mod_def::GLcODG4FROA::Y_j-qGhFT8SBfR2aC5Zokw` |
| Archive a Contact in an Administration | PATCH | `/api/v2/{{administrationId}}/contacts/{{id}}/archive{{format}}` | `conn_mod_def::GLcODG4bYQg::CagpIkLwT12lJeIlvmpqRQ` |
| Create a Contact for an Administration | POST | `/api/v2/{{administrationId}}/contacts{{format}}` | `conn_mod_def::GLcODSUi2Qg::bHPyxoUqQuS_sSOsTuOUcw` |
| Delete a Contact in an Administration | DELETE | `/api/v2/{{administrationId}}/contacts/{{id}}{{format}}` | `conn_mod_def::GLcODQsJvcA::lkjRaqrhQXWm7XLpyjJ3cw` |
| Delete a Contact's Stored Moneybird Payments Mandate | DELETE | `/api/v2/{{administrationId}}/contacts/{{contactId}}/moneybird_payments_mandate{{format}}` | `conn_mod_def::GLcODgC52Bg::bDm-9_x5TeOozhSwjK9SBg` |
| Synchronization Using Contacts for an Administration | POST | `/api/v2/{{administrationId}}/contacts/synchronization{{format}}` | `conn_mod_def::GLcODeW8pjA::ZVFNPA_rS62S9Hrs6UK8-A` |
| Update a Contact for an Administration | PATCH | `/api/v2/{{administrationId}}/contacts/{{id}}{{format}}` | `conn_mod_def::GLcOD-_ZSzA::KI7O4KKXTXqHqY_h1EfYlw` |

### GeneralDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment for a General Document | GET | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}/attachments/{{attachmentId}}/download{{format}}` | `conn_mod_def::GLcOEmQ72wg::O_YQxhU-QIG9Ls5_e-X9Bw` |
| Get a General Document | GET | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}{{format}}` | `conn_mod_def::GLcOEl99stA::XfiHKQC2Sx-KETqlgBA4QA` |
| Get General Documents for an Administration | GET | `/api/v2/{{administrationId}}/documents/general_documents{{format}}` | `conn_mod_def::GLcOEpJ-FGg::qcuN5wU_TJSfrLoNTCSpcg` |
| Synchronization Using General Documents | GET | `/api/v2/{{administrationId}}/documents/general_documents/synchronization{{format}}` | `conn_mod_def::GLcOE3tNuDg::jnfVSyACRN22rJF-DR7nZg` |
| Add a Note to a General Document | POST | `/api/v2/{{administrationId}}/documents/general_documents/{{generalDocumentId}}/notes{{format}}` | `conn_mod_def::GLcOEbPHCNg::YnDL4ZAMSm6OircB2LhdBQ` |
| Add Attachment to a General Document | POST | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}/attachments{{format}}` | `conn_mod_def::GLcOEbZjmTA::NG3pl4rdTIiZ1WgcIRcAeA` |
| Create General Documents for an Administration | POST | `/api/v2/{{administrationId}}/documents/general_documents{{format}}` | `conn_mod_def::GLcOEbPgo4g::RD0mi9sWSd2Wv-IjAmt4Mg` |
| Delete a General Document for an Administration | DELETE | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}{{format}}` | `conn_mod_def::GLcOEbPHL-g::BHGDPKC8R9W_O0jbO0HAVg` |
| Delete an Attachment from a General Document | DELETE | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}/attachments/{{attachmentId}}{{format}}` | `conn_mod_def::GLcOEbOr-xA::v-pa5lKCTJSreKHvzpHEGQ` |
| Synchronization Using General Documents | POST | `/api/v2/{{administrationId}}/documents/general_documents/synchronization{{format}}` | `conn_mod_def::GLcOEmFIWOA::5oFEhi0xR9Wkl3YdZFxfAg` |
| Update a General Document for an Administration | PATCH | `/api/v2/{{administrationId}}/documents/general_documents/{{id}}{{format}}` | `conn_mod_def::GLcOEyzx66A::4Cw4OkPSSU20Gh3lKbuXwQ` |

### GeneralJournalDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Attachment for a General Journal Document | GET | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}/attachments/{{attachmentId}}/download{{format}}` | `conn_mod_def::GLcOFDXJAgg::6mQikKsKT_WwhNlg_9szrA` |
| Get a General Journal Document for an Administration | GET | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}{{format}}` | `conn_mod_def::GLcOFRONi5A::xernH-4QSvevK2AkBX6cMg` |
| Get General Journal Documents for an Administration | GET | `/api/v2/{{administrationId}}/documents/general_journal_documents{{format}}` | `conn_mod_def::GLcOFRYhywA::v5iIKuvNRsyXQF-WUXhsRw` |
| Synchronization Using General Journal Documents | GET | `/api/v2/{{administrationId}}/documents/general_journal_documents/synchronization{{format}}` | `conn_mod_def::GLcOFRONzfg::4JGd70AZRMu4nM-siJMOkg` |
| Add a Note to a General Journal Document | POST | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{generalJournalDocumentId}}/notes{{format}}` | `conn_mod_def::GLcOE3uFZiA::fMhiuOMdQfm9zlNTkwu_8g` |
| Add Attachment to a General Journal Document | POST | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}/attachments{{format}}` | `conn_mod_def::GLcOE3uZDWA::L_mq9sUhRGG7rC0CfkjvDA` |
| Create General Journal Document | POST | `/api/v2/{{administrationId}}/documents/general_journal_documents{{format}}` | `conn_mod_def::GLcOE3u63aA::3P_RoogTT8KRlBVxwKOxag` |
| Delete a General Journal Document | DELETE | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}{{format}}` | `conn_mod_def::GLcOFDXVsCA::FJN242fRTn6tmNtAkatoMA` |
| Delete an Attachment from a General Journal Document | DELETE | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}/attachments/{{attachmentId}}{{format}}` | `conn_mod_def::GLcOFDXq9XA::UEKX-VhRR9O_3GDfzMA9Og` |
| Synchronization Using General Journal Documents | POST | `/api/v2/{{administrationId}}/documents/general_journal_documents/synchronization{{format}}` | `conn_mod_def::GLcOFDXlJSg::axco00mWRS2XmZpCFWq2FA` |
| Update a General Journal Document for an Administration | PATCH | `/api/v2/{{administrationId}}/documents/general_journal_documents/{{id}}{{format}}` | `conn_mod_def::GLcOFROsK2g::VC-prWZxQYyk4Y5KOHtFtw` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Balance Sheet Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/balance_sheet{{format}}` | `conn_mod_def::GLcOK33-AvA::Clb5gh7fSVKipmRP7LUw3g` |
| Cash Flow Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/cash_flow{{format}}` | `conn_mod_def::GLcOLD3_h7g::b9cxTHpaSRSL_alUX0oFyQ` |
| Creditors Aging Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/creditors_aging{{format}}` | `conn_mod_def::GLcOLENedDA::Nrw8SQHFR4aBiu_D40JS5g` |
| Debtors Aging Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/debtors_aging{{format}}` | `conn_mod_def::GLcOLFXtWqg::15uJuFqgS56Mqc7WaO1Q0w` |
| Debtors Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/debtors{{format}}` | `conn_mod_def::GLcOLEon2aA::GIlV8lDEQPKn_9-QqkZfhg` |
| General Ledger Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/general_ledger{{format}}` | `conn_mod_def::GLcOLhxUt1g::Z07Gn42yTPS5vs3-hSyB8Q` |
| Revenue by Project Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/revenue_by_project{{format}}` | `conn_mod_def::GLcOLv54p0g::st1tnokjTPCtRzG26itH6w` |
| Tax Report for an Administration | GET | `/api/v2/{{administrationId}}/reports/tax{{format}}` | `conn_mod_def::GLcOL2wLohA::JsnUAjH9SkebFlMFlZDM8w` |

2 more Reports actions are available through search.

This lists 90 of 296 actions. For anything not here, call `search_one_platform_actions` with platform `moneybird`. The full catalog is at https://www.withone.ai/knowledge/moneybird.

## When a call fails

The error comes from Moneybird, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/moneybird

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
