---
name: puzzle-io
description: Puzzle.io is an AI‑native accounting platform that automates bookkeeping tasks like transaction categorization, reconciliations, and accruals, while providing real‑time financial insights, anomaly detection, and conversational access via Slack or API. Read and write Puzzle.io data through One: bills, products, transactions, companyaccounts, journalentries, companyjournalentries and more, 68 actions with real parameter documentation. Use whenever the user asks to look something up in Puzzle.io, create or update a record there, or build code against the Puzzle.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: puzzle-io
  generated-from: one-knowledge-base
---

# Puzzle.io through One

Puzzle.io is an AI‑native accounting platform that automates bookkeeping tasks like transaction categorization, reconciliations, and accruals, while providing real‑time financial insights, anomaly detection, and conversational access via Slack or API.

One exposes Puzzle.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `puzzle-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Puzzle.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Puzzle.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bills

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Bill | GET | `/company/{{id}}/bills/{{billId}}` | `conn_mod_def::GJ6LlGU-LTs::JI707QuMTtm_8fRM8j0Y_g` |
| List a Company’s Bills | GET | `/rest/v0/company/{{id}}/bills` | `conn_mod_def::GJ6LlIqP85I::AaWq1mVFQ6aWchJ6DKs3rA` |
| Create a Company's Bill | POST | `/rest/v0/company/{{id}}/bills` | `conn_mod_def::GJ6LlOIodAk::-2Vl8yUORy61BQHkm3JT8g` |
| Update a Company Bill | POST | `/rest/v0/company/{{id}}/bills/{{billId}}` | `conn_mod_def::GJ6LlG75nHQ::2SCtSeEhQHSesgExHzbMCw` |
| Update a Company Bill’s Status | PATCH | `/rest/v0/company/{{id}}/bills/{{billId}}/status` | `conn_mod_def::GJ6LlOFCb7w::1sqCq-sBRr2ftYrGcq5dBA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Product | GET | `/rest/v0/company/{{id}}/products/{{productId}}` | `conn_mod_def::GJ6LnYJXH08::duzeogUmTeeEqJFchDq1HQ` |
| List a Company's Products | GET | `/rest/v0/company/{{id}}/products` | `conn_mod_def::GJ6LnlLsGOk::O2kISJ0mTfGYnB9dl5QgtQ` |
| Create a Company's Product | POST | `/rest/v0/company/{{id}}/products` | `conn_mod_def::GJ6LnYBOhVA::Ft14LAyGTzmaciqSlFPrrw` |
| Update a Company's Product | PATCH | `/rest/v0/company/{{id}}/products/{{productId}}` | `conn_mod_def::GJ6Lnm2cSI4::UB0_Et7vQeqVUZu-QCS2eg` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Transactions | GET | `/rest/v0/company/{{id}}/transactions` | `conn_mod_def::GJ6Ln1Fy08U::IHc05caKRXCrJcy7ig7RQA` |
| Create Transactions for a Company | POST | `/rest/v0/company/{{id}}/transactions` | `conn_mod_def::GJ6Ln7G4_Wk::prwFHKDuQoqAjDxlnY6OLw` |
| Update a Company's Transaction | PATCH | `/rest/v0/company/{{id}}/transactions/{{transactionId}}` | `conn_mod_def::GJ6LnyvQQnE::_lsUSyh0T4W6wEfWjbvNZQ` |

### CompanyAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Financial Accounts | GET | `/rest/v0/company/{{id}}/accounts` | `conn_mod_def::GJ6LlfWPSqI::Is-_T8FdQRW_nFvZwelktA` |
| Create a Company's Financial Account | POST | `/rest/v0/company/{{id}}/accounts` | `conn_mod_def::GJ6LlWQBgUo::x8cTfQ55QsaJxzi2gq7Bww` |

### JournalEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Journal Entries | GET | `/rest/v0/company/{{id}}/journalEntries` | `conn_mod_def::GJ6LmAx_CB8::qdgUQBlZQXepBTlnPdsa7g` |
| Create Journal Entries for a Company | POST | `/rest/v0/company/{{id}}/journalEntries` | `conn_mod_def::GJ6Lle-4h1s::6o2VqMgUQG6CS0Uquvc0fw` |

### CompanyJournalEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company Journal Entry | POST | `/rest/v0/company/{{id}}/journalEntry` | `conn_mod_def::GJ6LlmkLS5Q::SllfyH0kSqymKI-czNU5kQ` |
| Delete a Company Journal Entry | DELETE | `/rest/v0/company/{{id}}/journalEntry/{{journalEntryId}}` | `conn_mod_def::GJ6Llt9YQw4::1AVcJ0hxSmW7v3SkjLd4-g` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company with Metrics | GET | `/rest/v0/company/{{id}}` | `conn_mod_def::GJ6LmSa4rcg::0zLpOMp8Tpm9tdfMehSPpA` |
| Create a Company (and Owner User) | POST | `/rest/v0/company` | `conn_mod_def::GJ6LmJ6Grv4::2_m6neopRU-zS4QyPkPCfQ` |

### Statements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Balance Sheet Statement | GET | `/rest/v0/company/{{id}}/statements/balanceSheet` | `conn_mod_def::GJ6LmKv4Kak::sT1elbZuTfqMeeqkWZoe9g` |
| Get a Company's Profit and Loss Statement | GET | `/rest/v0/company/{{id}}/statements/profitLoss` | `conn_mod_def::GJ6Lmh3Sz1g::QzXSN077SjK6OJP8MfX7fw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Invoices | GET | `/rest/v0/company/{{id}}/invoices` | `conn_mod_def::GJ6Lmpa3vhQ::mP1mSB88TXCHvwtJ4I7Jzg` |
| Create an Invoice for a Company | POST | `/rest/v0/company/{{id}}/invoices` | `conn_mod_def::GJ6LmfVph1Y::4widGGy_SLinCwjfaPokmQ` |

### CompanyInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Invoice | GET | `/rest/v0/company/{{id}}/invoices/{{invoiceId}}` | `conn_mod_def::GJ6LmfB8NRo::G2yZcB3YSOyCftd4xUggRw` |
| Update a Company Invoice | PUT | `/rest/v0/company/{{id}}/invoices/{{invoiceId}}` | `conn_mod_def::GJ6Lm3AksQQ::8RfGeKc7Rjax9OFWvwVfOA` |

### Payrolls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Payroll | GET | `/rest/v0/company/{{id}}/payrolls/{{payrollId}}` | `conn_mod_def::GJ6LnZaAn6A::DQpx0i45RguXxeKiex6Wyw` |
| Create a Company's Payroll | POST | `/rest/v0/company/{{id}}/payrolls` | `conn_mod_def::GJ6LnQY8zS8::7jWpI4aAQbif6h2aDj4ZUQ` |

### Vendors

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Vendors | GET | `/rest/v0/company/{{id}}/vendors` | `conn_mod_def::GJ6LoVu-DmU::tTnRmopMSOe2J9Ji9lFzDA` |
| Create a Company's Vendor | POST | `/rest/v0/company/{{id}}/vendor` | `conn_mod_def::GJ6LoJxLK7A::Km2ID0M4S3S_ukjoAw0B2Q` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Customers | GET | `/rest/v0/company/{{id}}/customers` | `conn_mod_def::GJ6LlXQ89dw::IgTdAS4MSK66QaA-kppF8Q` |
| Create a Company's Customer | POST | `/rest/v0/company/{{id}}/customers` | `conn_mod_def::GJ6LlVyhezI::U_lMhTlBSfa0wsig_NECsg` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Departments | GET | `/rest/v0/company/{{id}}/departments` | `conn_mod_def::GJ6LnNh1cYU::f-r3hIa-QQu3OkBJuX1NJA` |
| Create a Company's Department | POST | `/rest/v0/company/{{id}}/departments` | `conn_mod_def::GJ6LnABW5Os::XmUJ5YofSoaYaPWbVJIWpQ` |

### Benefits

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Benefits | GET | `/rest/v0/company/{{id}}/benefits` | `conn_mod_def::GJ6LnPt6veo::3MJNz-urQSqWG6_qMdjA4g` |
| Create a Company's Benefit | POST | `/rest/v0/company/{{id}}/benefits` | `conn_mod_def::GJ6LnABJrgg::rGTBuytOTl-oXuJlGK74Mw` |

### CompanyClassifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Classification (with Segments) | GET | `/rest/v0/company/{{id}}/classifications/{{classificationId}}` | `conn_mod_def::GJ6LlzLx8s8::Su0Wm_oQRVmigAUDeZJDWA` |
| List a Company's Classifications | GET | `/rest/v0/company/{{id}}/classifications` | `conn_mod_def::GJ6Llxe5dB0::6z7M9YhtS8uOGEuT5Lu5Hg` |

### LedgerAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Ledger Account | GET | `/rest/v0/company/{{id}}/ledgerAccounts/{{ledgerAccountId}}` | `conn_mod_def::GJ6LmJ71zrg::7h--rrFQRkycnJ-B_zDsbg` |

### CashActivityStatements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Cash Activity Statement | GET | `/rest/v0/company/{{id}}/statements/cashActivity` | `conn_mod_def::GJ6LmLLcDoA::ltdGHxvCTJ2_5NYDEHambA` |

### MonthlyChecklists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Monthly Checklist | GET | `/rest/v0/company/{{id}}/monthly-checklists` | `conn_mod_def::GJ6LmWtf6ck::C19g-BuWSg27JgkPZHrUuQ` |

### CompanyEmployeeMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Employee Metrics | GET | `/rest/v0/company/{{id}}/metrics/employee` | `conn_mod_def::GJ6Lm3qLlwA::ayLhkOTYTgepJxWokCf1rA` |

### Contractors

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Contractor for a Company | POST | `/rest/v0/company/{{id}}/contractors` | `conn_mod_def::GJ6Lm_ThOes::8EWV6XGFQdOwCMRRlBvslQ` |

### CompanyRevenueMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Revenue Metrics | GET | `/rest/v0/company/{{id}}/metrics/revenue` | `conn_mod_def::GJ6Lm_9huzY::qaw0yUWzTHOL5qk86patDA` |

### CompanyTrialBalanceReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Trial Balance Report | GET | `/rest/v0/company/{{id}}/trial-balance` | `conn_mod_def::GJ6LnFpkcWw::sLHNExbkRZiVYr-OHHf-KQ` |

### CompanyCustomers

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Company Customer | PATCH | `/rest/v0/company/{{id}}/customers/{{customerId}}` | `conn_mod_def::GJ6LlWAtUaQ::YLVeogeSSR6vDeXQWoaadw` |

### JournalEntryDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Journal Entry Document Attachment for a Company | POST | `/rest/v0/company/{{id}}/journalEntries/{{journalEntryId}}/document` | `conn_mod_def::GJ6LlfwxcLc::tdDjUWpcRsa7WAdBcO1LDw` |

### Workers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Workers | GET | `/rest/v0/company/{{id}}/workers` | `conn_mod_def::GJ6LncZUmGM::hgRqUsNrTuyOU47_HON_yA` |

### Requests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company’s Requests | POST | `/rest/v0/company/{{companyId}}/requests` | `conn_mod_def::GJ6Lnk1u-fs::XyfAZJ0hQo2pz51c4_04WA` |

### IntegrationConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Integration Connection for a Company | POST | `/rest/v0/company/{{id}}/integrationConnection` | `conn_mod_def::GJ6LmJbGtGg::Vl6pm93PQ3a3qDhtBjsXuA` |

### CompanyTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Transaction by ID | GET | `/rest/v0/company/{{id}}/transactions/{{transactionId}}` | `conn_mod_def::GJ6LnyJCWKE::0EuWryZBTR2NB-YJqZ_s-g` |

### CompanyRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Requests | GET | `/rest/v0/company/{{companyId}}/requests` | `conn_mod_def::GJ6LnmKX05A::IplRfX6pSdKRIiiXPrTgJQ` |

### TransactionDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Transaction Document Attachment (Company) | POST | `/rest/v0/company/{{id}}/transactions/{{transactionId}}/document` | `conn_mod_def::GJ6Lny-xCHM::DZ4lgIYcRYyZrIxgGZkg_Q` |

### CompanyMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Expense Metrics | GET | `/rest/v0/company/{{id}}/metrics/expenses` | `conn_mod_def::GJ6LmyT2_Z8::7tqnHisZTJ-bc_rCraFM5Q` |

### Onboarding

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate Prefilled Onboarding | POST | `/rest/v0/onboarding` | `conn_mod_def::GJ6LmTMcfhE::MUo4_Dz1S8GsRc7eaB0Qmg` |

### CompanyVendors

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Company Vendor | PATCH | `/rest/v0/company/{{id}}/vendors/{{vendorId}}` | `conn_mod_def::GJ6Lmf0vX5M::OprOAIGTRKqLeJKHew7bpw` |

### CompanyFinancialStatements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Financial Statements | POST | `/rest/v0/company/{{id}}/financialStatements` | `conn_mod_def::GJ6Lm1LJfQY::p8dZMVOLS8uLEpl12JiwHw` |

### CompanyFinancialAccountBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Financial Account Balances | GET | `/rest/v0/company/{{id}}/accounts/balances` | `conn_mod_def::GJ6LmyCrZ5k::fGOQP7gZR_i0sNrK7JEWCg` |

### CompanyLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company’s Locations | GET | `/rest/v0/company/{{id}}/locations` | `conn_mod_def::GJ6LnZCOLK0::NwYpiq4AQBKVWV51PXGFTw` |

### ChartOfAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Chart of Accounts | GET | `/rest/v0/company/{{id}}/chartOfAccounts` | `conn_mod_def::GJ6LlvBGsNs::2ixuvM8dTPmJYYHx56rRiw` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Employee for a Company | POST | `/rest/v0/company/{{id}}/employees` | `conn_mod_def::GJ6LnOxEohs::f6F5aVasQMOyV9i7JBMMsw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company's Location | POST | `/rest/v0/company/{{id}}/locations` | `conn_mod_def::GJ6LnO247fU::M-jh4-thQjetszxxPxoy-g` |

### LinkTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Link Token | POST | `/rest/v0/linkToken` | `conn_mod_def::GJ6LlVzJ2Kg::OQUHiGwNQiScpZKfKHNwNw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/rest/v0/me` | `conn_mod_def::GJ6LmSmzmL8::eGiDK_sXT5Kbkm87P39dlQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Companies for the Current User | GET | `/rest/v0/companies` | `conn_mod_def::GJ6LmSaPh3Y::-a-DsEULR0GN6tdIi2BBYA` |

### Classifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company's Classification | POST | `/rest/v0/company/{{id}}/classifications` | `conn_mod_def::GJ6LlhfgweQ::oA5wRLcXT3ufOzl75GzjIQ` |

### AccountBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Company's Account Balance | POST | `/rest/v0/company/{{id}}/accounts/balances` | `conn_mod_def::GJ6LnqbZsag::B8puiLPLRZS7vG2ni7JZyQ` |

### VendorSpendingReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Spend by Vendor Report | GET | `/rest/v0/company/{{id}}/vendor-spending-report` | `conn_mod_def::GJ6LoDWvens::jCHuqUg9R5C4Gog-2X-XPQ` |

## When a call fails

The error comes from Puzzle.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/puzzle-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
