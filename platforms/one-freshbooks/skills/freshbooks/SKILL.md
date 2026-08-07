---
name: freshbooks
description: FreshBooks is an accounting software designed for small businesses and freelancers. It provides tools for invoicing, expense tracking, time tracking, and financial reporting. Read and write FreshBooks data through One: taxes, reports, invoices, estimates, timeentries, clients and more, 163 actions with real parameter documentation. Use whenever the user asks to look something up in FreshBooks, create or update a record there, or build code against the FreshBooks API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: freshbooks
  generated-from: one-knowledge-base
---

# FreshBooks through One

FreshBooks is an accounting software designed for small businesses and freelancers. It provides tools for invoicing, expense tracking, time tracking, and financial reporting.

One exposes FreshBooks through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `freshbooks` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm FreshBooks is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real FreshBooks account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Taxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Tax for an Account | GET | `/accounting/account/{{accountid}}/taxes/taxes/{{taxid}}` | `conn_mod_def::GJ2grBTCCAU::gWrHIdiSSsqQntJWNVITXg` |
| Get a Single Tax for an Account | GET | `/accounting/account/{{accountId}}/taxes/taxes/{{taxId}}` | `conn_mod_def::GJ2gXPF9NEo::BC5qwAKDTB-C-M0oPs2dpA` |
| List an Account's Taxes | GET | `/accounting/account/{{accountid}}/taxes/taxes` | `conn_mod_def::GJ2gqYH6aLs::hec2suu9TJyRp6MG8PIpOw` |
| List an Account’s Taxes | GET | `/accounting/account/{{accountId}}/taxes/taxes` | `conn_mod_def::GJ2gYEPrFqY::DZpG-42ATXe27sQoDbCTpQ` |
| Create a Single Tax (for an Account) | POST | `/accounting/account/{{accountId}}/taxes/taxes` | `conn_mod_def::GJ2gWu6Dk8A::XMvL36rISlWAeMvN0gxl6g` |
| Create a Single Tax for an Account | POST | `/accounting/account/{{accountid}}/taxes/taxes` | `conn_mod_def::GJ2gpBl6jkI::5nigKTyfRHa5U11ecUfv9w` |
| Delete a Single Tax for an Account | DELETE | `/accounting/account/{{accountId}}/taxes/taxes/{{taxId}}` | `conn_mod_def::GJ2gW3LaEy0::qBfYWCnqTe2pKsjVfj3Yhw` |
| Delete a Single Tax in an Account | DELETE | `/accounting/account/{{accountid}}/taxes/taxes/{{taxid}}` | `conn_mod_def::GJ2grJLMPgY::wkcFYbK-SWeMz2GwFu7rEQ` |
| Update a Single Tax (for an Account) | PUT | `/accounting/account/{{accountId}}/taxes/taxes/{{taxId}}` | `conn_mod_def::GJ2gY0IVBKs::z-XpD3y3RhaBZI7_c5coXQ` |
| Update a Tax for an Account | PUT | `/accounting/account/{{accountid}}/taxes/taxes/{{taxid}}` | `conn_mod_def::GJ2grYgcVXg::SzyLIpuuToih4xFeaqcxxg` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download CSV Invoice Details Report for an Account | GET | `/accounting/account/{{accountId}}/links/reports/{{downloadToken}}/invoice_details.csv` | `conn_mod_def::GJ2gmhT5mUo::Scs46goyQf2Jx8jU5mjg2A` |
| Get a Bank Reconciliation Summary Report for an Account | GET | `/accounting/account/{{accountid}}/reports/accounting/bank_reconciliation_summary` | `conn_mod_def::GJ2gmP2YJk8::TGjIU9D1RKC-VH9URJOaXw` |
| Get a Client Account Statement (Report) for an Account | GET | `/accounting/account/{{accountId}}/reports/accounting/account_statement` | `conn_mod_def::GJ2gmZQMVyc::9vBlJNBfSFiyfredIBOxTA` |
| Get an Account’s Accounts Aging Report | GET | `/accounting/account/{{accountId}}/reports/accounting/accounts_aging` | `conn_mod_def::GJ2gl8gvlfM::cfX6v26BQFuzlaPZrYoWNg` |
| Get an Account’s Balance Sheet Report | GET | `/accounting/account/{{accountId}}/reports/accounting/balance_sheet` | `conn_mod_def::GJ2gmGGOTzA::Oj4XuNJ-R3KyYQQPZ0oy2g` |
| Get an Account’s Expense Details Report | GET | `/accounting/account/{{accountId}}/reports/accounting/expense_details` | `conn_mod_def::GJ2gmqsRU6s::sWVA1eVrRkKLagKNql1WaA` |
| Get an Account’s Invoice Details Report | GET | `/accounting/account/{{accountId}}/reports/accounting/invoice_details` | `conn_mod_def::GJ2gm1i1GwY::1AXYWvRpQQK4aPAY_GImDQ` |
| Get an Account's Item Sales Report | GET | `/accounting/account/{{accountId}}/reports/accounting/item_sales` | `conn_mod_def::GJ2gnPealYI::NdICn5XiRa-M_PQnRX9t-g` |
| Get an Account’s Sales Tax Summary Report | GET | `/accounting/account/{{accountId}}/reports/accounting/taxsummary` | `conn_mod_def::GJ2gn7e0z5w::h3afbuaWTWGWPLarGqvMiA` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Invoice PDF for an Account | GET | `/accounting/account/{{accountId}}/invoices/invoices/{{invoiceId}}/pdf` | `conn_mod_def::GJ2gfv_MMdc::FhHnquxLSCm9Fk6O41hJQQ` |
| Get a Single Account Invoice | GET | `/accounting/account/{{accountId}}/invoices/invoices/{{invoiceId}}` | `conn_mod_def::GJ2ghfQEa84::D4HyROuKQY-Bui6vcdbWZw` |
| List a User Account’s Invoices | GET | `/accounting/account/{{accountId}}/invoices/invoices` | `conn_mod_def::GJ2ggtJl5fo::j05O7SAxRKCHC5bmMgUbaA` |
| Create a Single Invoice (with Logo and Styles) | POST | `/accounting/account/{{accountId}}/invoices/invoices` | `conn_mod_def::GJ2ghogZBnI::MvZ4nt0fQeSB8UNRC4HDeQ` |
| Delete an Invoice (by Account ID and Invoice ID) | PUT | `/accounting/account/{{accountId}}/invoices/invoices/{{invoiceId}}` | `conn_mod_def::GJ2gfI8SF1o::iEr-q5W6TuK0JlxiAj4nvg` |
| Get a Single Invoice with Payment Gateway (for an Account) | POST | `/accounting/account/{{accountId}}/invoices/invoices/{{invoiceid}}` | `conn_mod_def::GJ2ghw7DZaA::7noKF-VhSmyv4q8sDe1xUw` |
| Send an Invoice by Email (for an Account) | PUT | `/accounting/account/{{accountid}}/invoices/invoices/{{invoiceid}}` | `conn_mod_def::GJ2ghEszkEg::sT7TkgA2QPeddYV7lNxIoQ` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Estimate (for an Account) | GET | `/accounting/account/{{accountId}}/estimates/estimates/{{estimateId}}` | `conn_mod_def::GJ2gbYvMNDA::x4HgVOHcQuOS7FU8-wts8Q` |
| List an Account’s Estimates | GET | `/accounting/account/{{accountId}}/estimates/estimates` | `conn_mod_def::GJ2gbBMGNlU::Z0hGPtbQTQ-4iC-iiB0l4w` |
| Create a Single Estimate (with Estimate Lines) for an Account | POST | `/accounting/account/{{accountId}}/estimates/estimates` | `conn_mod_def::GJ2gbhV9gyk::4jkDiI82QfmdzaxgDGJf7g` |
| Create a Single Proposal (Estimate) for an Account (with Sections, Logos, and E-signature) | POST | `/accounting/account/{{accountid}}/estimates/estimates` | `conn_mod_def::GJ2ga2Cf8IQ::WUFMfohOT4eTasC_GOnzIA` |
| Send an Estimate by Email (for an Account) | PUT | `/accounting/account/{{accountid}}/estimates/estimates/{{estimateid}}` | `conn_mod_def::GJ2gbQhXc1k::-027ZnwrQEC7KCTFlthK2w` |
| Update an Account’s Estimate | PUT | `/accounting/account/{{accountId}}/estimates/estimates/{{estimateId}}` | `conn_mod_def::GJ2gbqL5s6Q::i-eqlir5Qz-0vzGb8YlF3A` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business’s Time Entry Details (Summary) | GET | `/comments/business/{{businessId}}/time_entries/search` | `conn_mod_def::GJ2goFJYrmY::zJdZ5ZMjQR-Sz6E6oiiQ-Q` |
| List a Business’s Time Entries | GET | `/timetracking/business/{{businessId}}/time_entries` | `conn_mod_def::GJ2gr-MTTPY::VLgskkBlRcSQVZ-CRHBzJQ` |
| List Time Entries for an Employee on a Specific Project (Search) | GET | `/timetracking/business/{{businessId}}/time_entries/search` | `conn_mod_def::GJ2gsIRwEWk::b40Ls_d0RXuFDFh7u7VbOg` |
| Create a Business Time Entry | POST | `/timetracking/business/{{businessId}}/time_entries` | `conn_mod_def::GJ2grom_g6s::drCi8QNsSgK97J_Ug1Pf1w` |
| Delete a Business's Time Entry | DELETE | `/timetracking/business/{{businessId}}/time_entries/{{timeEntryId}}` | `conn_mod_def::GJ2gr0Kd76U::COfXbIT4RLaTnz_VFx8ZbA` |
| Update a Business’s Time Entry | PUT | `/timetracking/business/{{businessId}}/time_entries/{{timeEntryId}}` | `conn_mod_def::GJ2gsUybDRA::refHDbKpSjafE3z-faskLQ` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Client for an Account | GET | `/accounting/account/{{accountId}}/users/clients/{{customerId}}` | `conn_mod_def::GJ2gacz_0WU::XT1VTT4gSFmiRDRzROEzqA` |
| List a FreshBooks Account’s Clients | GET | `/accounting/account/{{accountId}}/users/clients` | `conn_mod_def::GJ2gZ5h6MOw::3T3b5jTxTdOwZY4xhQHiDA` |
| Create a New Client (for an Account) | POST | `/accounting/account/{{accountId}}/users/clients` | `conn_mod_def::GJ2gaMjgUC8::sREv9lO3SeW9tz77DGpgag` |
| Remove All Secondary Contacts for a Client Profile | PUT | `/accounting/account/{{accountid}}/users/clients/{{customerid}}` | `conn_mod_def::GJ2gaU-1q6Y::JYbdAUu3Q-yUsCV1scIB8A` |
| Update an Accounting Client for an Account | PUT | `/accounting/account/{{accountId}}/users/clients/{{customerId}}` | `conn_mod_def::GJ2galXCUUg::LiBHDSasQvGRk-m4NjJpng` |

### InvoiceProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Invoice Profile (for an Account) | GET | `/accounting/account/{{accountId}}/invoice_profiles/invoice_profiles/{{invoiceProfileId}}` | `conn_mod_def::GJ2ggcurK-Y::7Vm2Xv7lQOG-M_Bf_R9ong` |
| List an Account’s Invoice Profiles | GET | `/accounting/account/{{accountId}}/invoice_profiles/invoice_profiles` | `conn_mod_def::GJ2ggkrR-QU::6EqRpw3tQ8SmBFbuhlxD3Q` |
| Create a Single Invoice Profile (Monthly Recurring) for an Account | POST | `/accounting/account/{{accountId}}/invoice_profiles/invoice_profiles` | `conn_mod_def::GJ2ge3ASg8I::RNLnQfiwSCay36AQnY_hPw` |
| Create a Single Invoice Profile (with Time Entry Holder) for an Account | POST | `/accounting/account/{{accountid}}/invoice_profiles/invoice_profiles` | `conn_mod_def::GJ2ge_5bSmg::l5zvF8hAQAqTi0GqAPLBjA` |
| Delete an Invoice Profile (Soft Delete) | PUT | `/accounting/account/{{accountId}}/invoice_profiles/invoice_profiles/{{invoiceProfileId}}` | `conn_mod_def::GJ2gfRRuoSE::emwXEBySR6-shqMrkzx6TQ` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Payment (by Account and Payment ID) | GET | `/accounting/account/{{accountId}}/payments/payments/{{paymentId}}` | `conn_mod_def::GJ2gh4181QU::o0Q3R5ndREOsrQPg2DoYQg` |
| List an Account’s Payments | GET | `/accounting/account/{{accountId}}/payments/payments` | `conn_mod_def::GJ2gg0jAKLQ::ASjPSeMNRnetDD3yHcT63A` |
| Delete a Payment (Soft Delete via vis_state) | PUT | `/accounting/account/{{accountId}}/payments/payments/{{paymentId}}` | `conn_mod_def::GJ2gfk0lvoU::l_1d-drwS2e2BTE0DFwMjA` |
| Make a Payment for an Account | POST | `/accounting/account/{{accountId}}/payments/payments` | `conn_mod_def::GJ2gg8HrOw4::uY8urW9QSXyst1m1Z1vE8Q` |
| Provision FreshBooks Payments for an Account | POST | `/payments/account/{{accountId}}/gateway/fbpay` | `conn_mod_def::GJ2gqowYPzs::HKaf-A53SbScfwNq43h_Cg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Project for a Business | GET | `/projects/business/{{businessId}}/projects/{{projectId}}` | `conn_mod_def::GJ2glBFA2so::HMNG9lCuTDKaXawFlmPexg` |
| List a Business’s Projects | GET | `/projects/business/{{businessId}}/projects` | `conn_mod_def::GJ2gkkBIys4::maFvoRNySvWtLxtb9JSaDg` |
| Create a Single Project for a Business | POST | `/projects/business/{{businessId}}/project` | `conn_mod_def::GJ2gjub7owg::Hzlgu8yfQv-JP_oIeM4qsA` |
| Delete a Business Project | DELETE | `/service/api/comments/business/{{businessId}}/project/{{projectId}}` | `conn_mod_def::GJ2gkBlXskw::oB1OJuBpT6uFhbph6Bt_NA` |
| Update a Business Project | PUT | `/projects/business/{{businessId}}/project/{{projectId}}` | `conn_mod_def::GJ2glY7sUA4::KO9TgiBNS22bDbGgPjVW2A` |

### LedgerAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business’s Ledger Account | GET | `/accounting/businesses/{{businessUuid}}/ledger_accounts/accounts/{{accountUuid}}` | `conn_mod_def::GJ2gYMfdj3s::RtG1pTNQQDiUrnXlByM_aQ` |
| List a Business’s Ledger Accounts | GET | `/accounting/businesses/{{businessUuid}}/ledger_accounts/accounts` | `conn_mod_def::GJ2gXrbaNY4::Tw3QRfQ-Q5Ogt3sP09Zhjg` |
| Create a Business Ledger Account | POST | `/accounting/businesses/{{businessUuid}}/ledger_accounts/accounts` | `conn_mod_def::GJ2gWdoyErg::0zJFLZGcQqW2xO5-Cy4U5w` |
| Update a Business's Ledger Account | PUT | `/accounting/businesses/{{businessUuid}}/ledger_accounts/accounts/{{accountUuid}}` | `conn_mod_def::GJ2gYhOUG_4::KtAF6vMlQQ2lUie2pXT5Ug` |

### CreditNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Credit Notes (Credits) | GET | `/accounting/account/{{accountId}}/credit_notes/credit_notes` | `conn_mod_def::GJ2gaEYP4HQ::Kv4UiW_PTvSAmWBSYbeYKg` |
| Create a Credit Note for an Account | POST | `/accounting/account/{{accountid}}/credit_notes/credit_notes` | `conn_mod_def::GJ2gZU5SVzw::gtHq2E9vQh6TKrxDu6U_sg` |
| Delete a Credit Note (Soft Delete) | PUT | `/accounting/account/{{accountId}}/credit_notes/credit_notes/{{creditId}}` | `conn_mod_def::GJ2gZfV7uyQ::6WV8HZ7bQQenweOxPh8YKA` |
| Update a Prepayment Credit Note for an Account | PUT | `/accounting/account/{{accountid}}/credit_notes/credit_notes/{{creditnote}}` | `conn_mod_def::GJ2gatqK9rU::GkHPYbFVQ-axPvtki57iig` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Expense for an Account | GET | `/accounting/account/{{accountId}}/expenses/expenses/{{expenseId}}` | `conn_mod_def::GJ2geXWMeCs::mXcfQCnpQsulUxP4drH0uA` |
| List an Account’s Expenses | GET | `/accounting/account/{{accountId}}/expenses/expenses` | `conn_mod_def::GJ2geLf2GPM::shKyvCmLTdiHT7gPuYpT2Q` |
| Create an Expense for an Account | POST | `/accounting/account/{{accountId}}/expenses/expenses` | `conn_mod_def::GJ2gc1gfvIw::uHMqn41MQNGjdJ5ZC9qPiQ` |
| Update an Account Expense | PUT | `/accounting/account/{{accountId}}/expenses/expenses/{{expenseId}}` | `conn_mod_def::GJ2gemtbSoc::80ToEE--TFqW8FEj6Z6SQg` |

### Retainers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Business’s Single Retainer | GET | `/comments/business/{{businessId}}/retainer/{{retainerId}}` | `conn_mod_def::GJ2giAQR19E::gyAwfWZJRz6XPHsDVkynfw` |
| List a Business’s Retainers | GET | `/comments/business/{{businessId}}/retainers` | `conn_mod_def::GJ2ggIyt1ZQ::9od9XvqrQe6ck388VcMZfw` |
| Create a Business Retainer | POST | `/comments/business/{{businessId}}/retainers` | `conn_mod_def::GJ2geuX7Crs::QaHxNcd1RLiV2P9KDlg-eA` |
| Update a Business Retainer | PUT | `/comments/business/{{businessId}}/retainer/{{retainerId}}` | `conn_mod_def::GJ2giZVUQRI::wZjfiY8oQwaO-bI7nKB69Q` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Item (for an Account) | GET | `/accounting/account/{{accountId}}/items/items/{{itemId}}` | `conn_mod_def::GJ2gqxDR_pk::jj2irXHqSGy7ck54IoYtaw` |
| List an Account’s Items | GET | `/accounting/account/{{accountId}}/items/items` | `conn_mod_def::GJ2gqC3Z3XM::Fv6zdE19QNyIubER0zaTVw` |
| Create an Item for an Account | POST | `/accounting/account/{{accountId}}/items/items` | `conn_mod_def::GJ2gomx1JTM::O-8vb5wvQfm9ecIHelWfvw` |
| Update an Account Item | PUT | `/accounting/account/{{accountId}}/items/items/{{itemId}}` | `conn_mod_def::GJ2grQuMXAA::hRk0uvyOSUKq5g9qN4zciw` |

### OtherIncomes

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Other Income | GET | `/accounting/account/{{accountId}}/other_incomes/other_incomes` | `conn_mod_def::GJ2gXzlFM18::lDSaSG2WT9GJydgo7wKQjA` |
| Create a Single Other Income Entry for an Account | POST | `/accounting/account/{{accountId}}/other_incomes/other_incomes` | `conn_mod_def::GJ2gWmFBFzY::DkSpq3suSG609hTWsqkTSQ` |
| Update a Single Other Income (by Account) | PUT | `/accounting/account/{{accountId}}/other_incomes/other_incomes/{{incomeId}}` | `conn_mod_def::GJ2gYrqCXfo::-bACGdMLTE6CiJIZv-SiaA` |

### Bills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bills for an Account | GET | `/accounting/account/{{accountId}}/bills/bills` | `conn_mod_def::GJ2gdvSQTok::4mvXmNcfSYqyhKcK0PvweA` |
| Add Bill from Vendor (for an Account) | POST | `/accounting/account/{{accountId}}/bills/bills` | `conn_mod_def::GJ2gbzCpMt8::vriultpaTzyLgONIdSO7EQ` |
| Delete or Archive a Bill in an Account | PUT | `/accounting/account/{{accountId}}/bills/bills/{{billId}}` | `conn_mod_def::GJ2gdF1e8nY::EOWXm8HoQmWAL6-RfeM7UQ` |

### BillVendors

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Vendors | GET | `/accounting/account/{{accountid}}/bill_vendors/bill_vendors` | `conn_mod_def::GJ2gd3aUBk0::PczT4UEoTvirg924ar5rhw` |
| Add a Vendor to an Account | POST | `/accounting/account/{{accountId}}/bill_vendors/bill_vendors` | `conn_mod_def::GJ2gcki5UvM::vsZ8w5DRRUOCVn5TodWy6A` |
| Edit a Vendor’s Details (or Soft-Delete a Vendor) in an Account | PUT | `/accounting/account/{{accountId}}/bill_vendors/bill_vendors/{{vendorId}}` | `conn_mod_def::GJ2gdWzy1h4::oenr4GlVSOOaZfIhrXiVJw` |

### ExpenseCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Expense Category (for an Account) | GET | `/accounting/account/{{accountId}}/expenses/categories/{{categoryId}}` | `conn_mod_def::GJ2gee2Tqh8::ruxhZaGzRwaYbhToP9mlpw` |
| List an Account’s Expense Categories | GET | `/accounting/account/{{accountId}}/expenses/categories` | `conn_mod_def::GJ2gd_R5Jmo::HhetgMfuSDCzJ_EILNv8ZQ` |
| Create a Custom Expense Category for an Account | POST | `/accounting/account/{{accountId}}/expenses/categories` | `conn_mod_def::GJ2gcsfI2tg::8fUygpHJRVygRlr8evg8pQ` |

This lists 90 of 163 actions. For anything not here, call `search_one_platform_actions` with platform `freshbooks`. The full catalog is at https://www.withone.ai/knowledge/freshbooks.

## When a call fails

The error comes from FreshBooks, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/freshbooks

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
