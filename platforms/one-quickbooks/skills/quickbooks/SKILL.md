---
name: quickbooks
description: QuickBooks is accounting software tailored for small businesses and self-employed professionals. It includes tools for invoicing, expenses, payroll, and financial reporting. Read and write QuickBooks data through One: reports, salesreceipts, payments, estimates, invoices, refundreceipts and more, 240 actions with real parameter documentation. Use whenever the user asks to look something up in QuickBooks, create or update a record there, or build code against the QuickBooks API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: quickbooks
  generated-from: one-knowledge-base
---

# QuickBooks through One

QuickBooks is accounting software tailored for small businesses and self-employed professionals. It includes tools for invoicing, expenses, payroll, and financial reporting.

One exposes QuickBooks through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `quickbooks` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm QuickBooks is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real QuickBooks account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Tax Summary Report | GET | `/reports/TaxSummary` | `conn_mod_def::GJ6Mm4KcXf0::CyJ2giDISyK9XNPzVHJBvg` |
| Get a Company's Vendor Balance Report | GET | `/reports/VendorBalance` | `conn_mod_def::GJ6Mn6AEdT4::b4Qys8B0Qu2OCQObJYMZ_Q` |
| Get Aged Payable Detail Report (Company) | GET | `/reports/AgedPayableDetail` | `conn_mod_def::GJ6Mb62X8zA::BVHDZjAPQtC59QZjKQqHHQ` |
| Get Inventory Valuation Detail Report (Company) | GET | `/reports/InventoryValuationDetail` | `conn_mod_def::GJ6MhPMlucU::4WjItv_jSPGm6Cq5PSOlbw` |
| Get Vendor Expenses Report (Company) | GET | `/reports/VendorExpenses` | `conn_mod_def::GJ6MoNimaIM::8A4yoGTlQI6PnbfP-GdjMg` |
| Query a Company’s FEC Report | GET | `/reports/FECReport` | `conn_mod_def::GJ6MhCwqy8E::A5OxwC2TRIKIv8lboZAXvg` |
| Query Account List Report (Company) | GET | `/reports/AccountList` | `conn_mod_def::GJ6Mbo9COXQ::KObWjRv8QUetS_Sq86xN2A` |
| Query Aged Payables Report (Company) | GET | `/reports/AgedPayables` | `conn_mod_def::GJ6Mb9yDH8k::cUC2sPlOQV-5hf-3Ub5m4g` |
| Query Aged Receivable Detail Report | GET | `/reports/AgedReceivableDetail` | `conn_mod_def::GJ6Mb78ts-w::4rWy4mRzRratW01VXtGJoA` |
| Query Aged Receivables Report | GET | `/reports/AgedReceivables` | `conn_mod_def::GJ6Mb5eXyQ0::ZJEWNFFHSxaUV427t3oVoA` |
| Query Balance Sheet Report | GET | `/reports/BalanceSheet` | `conn_mod_def::GJ6McQ1Nzoo::fIETchvYTXe2tMOHnSklLQ` |
| Query Cash Flow Report | GET | `/reports/CashFlow` | `conn_mod_def::GJ6McxRIPDU::x1WZXbZuQPStbDwCmlDDqA` |

20 more Reports actions are available through search.

### SalesReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SalesReceipt PDF for a Company | GET | `/salesreceipt/{{salesreceiptId}}/pdf` | `conn_mod_def::GJ6MmA9F1HA::HMELksSdSuKxd_spZDn3cg` |
| Query SalesReceipts | GET | `/query` | `conn_mod_def::GJ6MmANMBaI::7Aax3KlvTAO6v0EsCa49ug` |
| Read a SalesReceipt | GET | `/salesreceipt/{{salesreceiptId}}` | `conn_mod_def::GJ6MmDKjAUc::DEPJglIsSf6Vp0xmqE0pSg` |
| Create a SalesReceipt | POST | `/salesreceipt` | `conn_mod_def::GJ6MlwJRLFA::7QuiunI0TZmFP54C8pO1wA` |
| Delete a SalesReceipt | POST | `/salesreceipt` | `conn_mod_def::GJ6MmA3QGpM::5RCXy1scRIylzU4XHenh4g` |
| Full Update a SalesReceipt | POST | `/salesreceipt` | `conn_mod_def::GJ6MmHByYe8::icVkv9QqTPCReri3HXbxWg` |
| Send a SalesReceipt | POST | `/salesreceipt/{{salesreceiptId}}/send` | `conn_mod_def::GJ6MmOhcalQ::jtnjMlM0QHiFJxVVbdG9lg` |
| Sparse Update a SalesReceipt | POST | `/salesreceipt` | `conn_mod_def::GJ6MmSL0Y3Y::VJtbjo_ZQSGz2p1osJUlWw` |
| Void a SalesReceipt | POST | `/salesreceipt` | `conn_mod_def::GJ6MmTqATxU::uy1V8obrT2uYj-iiC3yAeg` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payment PDF for a Company | GET | `/payment/{{paymentId}}/pdf` | `conn_mod_def::GJ6MjwC3xj0::MU3eynqpSU2D9_9uLghPDg` |
| Query Payments | GET | `/query` | `conn_mod_def::GJ6MjvmZzx4::HgE6fPzdRWSILq2A_3IiNw` |
| Read a Payment (by paymentId) | GET | `/payment/{{paymentId}}` | `conn_mod_def::GJ6Mjv1Ovf8::5fLyR69VRhqcLW4Pmdwzmw` |
| Create a Payment | POST | `/payment` | `conn_mod_def::GJ6MjlvZkzM::ADiiY1BbSj6h4ibK1axP6A` |
| Delete a Company Payment | POST | `/payment` | `conn_mod_def::GJ6MjfkqIbw::0VHlkSbATNCwQkqS_bpjtQ` |
| Full Update a Payment (Company) | POST | `/payment` | `conn_mod_def::GJ6Mjez9mkI::jMWm57z9TjiPMU7YKTC5_w` |
| Send a Payment Email (Send Payment for a Company) | POST | `/payment/{{paymentId}}/send` | `conn_mod_def::GJ6Mj0qzD44::v6L4_1BoRkWkcu10Z2NWDg` |
| Void a Payment (Company Scoped) | POST | `/payment` | `conn_mod_def::GJ6Mj6waOkY::YlYCoWO7TKO-pdCvFhXPZA` |

### Estimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Estimate PDF | GET | `/estimate/{{estimateId}}/pdf` | `conn_mod_def::GJ6Mga37LE0::rlDu6VXAT5qDsUtqA7jPGA` |
| Query Estimates | GET | `/query` | `conn_mod_def::GJ6MgywAvNA::xara8WD5RaiWjdWHcokfVQ` |
| Read an Estimate | GET | `/estimate/{{estimateId}}` | `conn_mod_def::GJ6Mg2iQnvI::m5YKdgb_RtOKkEmG0fIzXA` |
| Create an Estimate | POST | `/estimate` | `conn_mod_def::GJ6MgaVtVxw::b9FZ26FGRf-0Q4qCxsAmSw` |
| Delete an Estimate | POST | `/estimate` | `conn_mod_def::GJ6MgkCOfpU::jcPv1YmPQSis68WxbPb52g` |
| Full Update an Estimate (Replace an Existing Estimate) | POST | `/estimate` | `conn_mod_def::GJ6MgrGNz1U::hbRV2nn-SiO9ga1gvYajcw` |
| Send an Estimate Email (by Estimate ID) | POST | `/estimate/{{estimateId}}/send` | `conn_mod_def::GJ6Mg1cgVZg::7WNExyuITnORoTbrzptOAA` |
| Sparse Update an Estimate (Company) | POST | `/estimate` | `conn_mod_def::GJ6Mg0hPUgI::t39fBiqARESCc484R3AReQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice PDF | GET | `/invoice/{{invoiceId}}/pdf` | `conn_mod_def::GJ6MhcYo4AU::aQSgrrYWSQCzRQj3s99TeA` |
| Query Invoices (SQL-like Query) | GET | `/query` | `conn_mod_def::GJ6MhsWRuMA::Kk5ed0pgRoijVhSzvTo5CA` |
| Read an Invoice | GET | `/invoice/{{invoiceId}}` | `conn_mod_def::GJ6MhmmK6oU::TuYhYLGjTt2UcuW1MxHO8Q` |
| Create an Invoice | POST | `/invoice` | `conn_mod_def::GJ6MhdoC7Sw::DJKvALlIRKqDsyY6uPUu4A` |
| Delete an Invoice | POST | `/invoice` | `conn_mod_def::GJ6MhdJe8tU::Jdjp3XCKRfCUZRQHPScgWg` |
| Full Update an Invoice (Replace All Writable Fields) | POST | `/invoice` | `conn_mod_def::GJ6MhdurVM0::OpMPXZvATL6AFgWAyUfdrA` |
| Send an Invoice Email | POST | `/invoice/{{invoiceId}}/send` | `conn_mod_def::GJ6MhoWyA-k::4V1DFuD1TiW_YxiNtZe5Aw` |
| Sparse Update an Invoice | POST | `/invoice` | `conn_mod_def::GJ6MhqGFK94::NyrOshnfQVWUm0CgsK8guA` |

### RefundReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Refund Receipt PDF for a Company | GET | `/refundreceipt/{{refundreceiptId}}/pdf` | `conn_mod_def::GJ6MlQyDHPU::WqMWZ2xTR1KtB4vW2aE8iA` |
| Query Refund Receipts (SQL Query) | GET | `/query` | `conn_mod_def::GJ6MlUfqGlw::P_QBsCTRQiiBIl7sKEcbiA` |
| Read a Refund Receipt (by ID) | GET | `/refundreceipt/{{refundreceiptId}}` | `conn_mod_def::GJ6Mlng3Lmk::vBdgBKPuTdWyY-unQgddew` |
| Create a Refund Receipt | POST | `/refundreceipt` | `conn_mod_def::GJ6MlQA2zP0::xOC-nLl7TNW_4ifEwIhzvA` |
| Delete a Refund Receipt | POST | `/refundreceipt` | `conn_mod_def::GJ6MlQAXlbI::GEri5LCDRWyQCemv2JG1yQ` |
| Full Update a Refund Receipt | POST | `/refundreceipt` | `conn_mod_def::GJ6Mlaezn68::x6tFLHEOT1yW1ru2iWTXaA` |
| Send a Refund Receipt | POST | `/refundreceipt/{{refundreceiptId}}/send` | `conn_mod_def::GJ6Mliw2OY0::MQXJPWe7Td6rjeIQKBaXJw` |
| Sparse Update a Refund Receipt | POST | `/refundreceipt` | `conn_mod_def::GJ6MljVgdQ4::rIg02ppaREq9X68Hy6NvAA` |

### CreditMemos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credit Memo PDF | GET | `/creditmemo/{{creditmemoId}}/pdf` | `conn_mod_def::GJ6MeJmpCWQ::SPKGDRmCSI2V_V7esLYDuQ` |
| Query Credit Memos | GET | `/query` | `conn_mod_def::GJ6MeKt-5Lo::1m1EI7asQ_WtK_U0uFIG6Q` |
| Read a Credit Memo | GET | `/creditmemo/{{creditmemoId}}` | `conn_mod_def::GJ6MeKHgq4o::mtFhzTdlTKuhdoqFaquaXA` |
| Create a Credit Memo | POST | `/creditmemo` | `conn_mod_def::GJ6Md_qz9Gg::4Fx2HrSwRJGnovh1ECadLQ` |
| Delete a Credit Memo | POST | `/creditmemo` | `conn_mod_def::GJ6MeMY9eHY::x2XEZEkPQNeRz8w3BdHEGA` |
| Full Update a Credit Memo (Company) | POST | `/creditmemo` | `conn_mod_def::GJ6Mece4d4Q::jTuRMi_hSz25BDyRi_-K9g` |
| Send a Credit Memo Email | POST | `/creditmemo/{{creditmemoId}}/send` | `conn_mod_def::GJ6MemFD_CY::vtF_33aLRdGdLCf9k497Bg` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Items | GET | `/query` | `conn_mod_def::GJ6MinhuUJY::c0WsADBdRzmGhPyIJ9Yekg` |
| Read a Company's Item | GET | `/item/{{itemId}}` | `conn_mod_def::GJ6Mins7u-E::UhnQo4GaSgC6epK8Jmj52Q` |
| Read an Item Bundle | GET | `/item/{{itemId}}` | `conn_mod_def::GJ6Mina4tjU::a7S2WPLYTTG2jnvlRZGP1w` |
| Create a Category (Item) | POST | `/item` | `conn_mod_def::GJ6Mh014Hh4::0qep0O6ySBe2aPw3v-C78Q` |
| Create an Item (Company) | POST | `/item` | `conn_mod_def::GJ6Mh0Pg2js::an0elrI0S7eTmnRfV_OWBQ` |
| Full Update an Item (Company) | POST | `/item` | `conn_mod_def::GJ6Mh9q_yGo::1QMX8h4HRGC-a8fSCzZD0w` |
| Update a Company's Category (Item) | POST | `/item` | `conn_mod_def::GJ6MivfCR-Y::I1TfnvqSQCmfI7AwLz18UA` |

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Purchase Order PDF for a Company | GET | `/purchaseorder/{{purchaseorderId}}/pdf` | `conn_mod_def::GJ6MksF9yQs::sU4gwZLPQ2O_zDPcNOoKMQ` |
| Query Purchase Orders | GET | `/query` | `conn_mod_def::GJ6Mk21NTnI::gKTcpF5mR5ykSnStI-7UYg` |
| Read a Purchase Order | GET | `/purchaseorder/{{purchaseorderId}}` | `conn_mod_def::GJ6Mk23SBlg::aU1TQgTEQM2XzLQyLaNHRg` |
| Create a Purchase Order (Company) | POST | `/purchaseorder` | `conn_mod_def::GJ6MkkDsDfc::yeEEbNL_Qoqy4XN5YtMl8A` |
| Delete a Purchase Order | POST | `/purchaseorder` | `conn_mod_def::GJ6MkyEcOPI::shoTc4w0QtiAt5dv7-WIaA` |
| Full Update a Purchase Order (by Company Realm) | POST | `/purchaseorder` | `conn_mod_def::GJ6MksAxEbI::NQ0pIp4lSHKH1kjUMHtQpQ` |
| Send a Purchase Order Email | POST | `/purchaseorder/{{purchaseorderId}}/send` | `conn_mod_def::GJ6MlDCu8YQ::2gpOK28ARgyI0MEI24nTuA` |

### Deposits

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Deposits (SQL) | GET | `/query` | `conn_mod_def::GJ6MfmY_v7Y::SfSm3KwWR3KTrKZfJAo61A` |
| Read a Deposit | GET | `/deposit/{{depositId}}` | `conn_mod_def::GJ6MfkVMrGA::iE9uXRvKQYasXoDiRDpYlA` |
| Create a Deposit (Company) | POST | `/deposit` | `conn_mod_def::GJ6Mflx6Pv8::xaH9ZYfdQy2Ol_b3Ie21qg` |
| Delete a Deposit | POST | `/deposit` | `conn_mod_def::GJ6Mfk-fym4::S37gvyrRTaeW6YPiFr32kw` |
| Full Update a Deposit (Replace an Existing Deposit) | POST | `/deposit` | `conn_mod_def::GJ6MfptrQLs::zg3uVchNTfK8fn7ZVrttYA` |
| Sparse Update a Deposit | POST | `/deposit` | `conn_mod_def::GJ6MgSUM8qs::qNfkJ7ajT4KDJT_O5441pA` |

### BillPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Query BillPayments | GET | `/query` | `conn_mod_def::GJ6McgmMpUg::qTosLdl3Tru8Z-yLoOFW0g` |
| Read a BillPayment | GET | `/billpayment/{{billpaymentId}}` | `conn_mod_def::GJ6MclZhXL4::0lawZyE1ShyKVbzQ9ZwqxA` |
| Create a BillPayment | POST | `/billpayment` | `conn_mod_def::GJ6McYtaxwg::tJxefdILSICaSSzAYt_fbw` |
| Delete a BillPayment | POST | `/billpayment` | `conn_mod_def::GJ6McY5QHe0::ljSv447bQaWQwo-Xee-M8w` |
| Full Update a BillPayment | POST | `/billpayment` | `conn_mod_def::GJ6MchMo7d4::TN-Qpz2oTySopYqPeNeboA` |
| Void a BillPayment | POST | `/billpayment` | `conn_mod_def::GJ6McmvdThU::MJD-P1saTY66MgFXOxrLdg` |

### TimeActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Query TimeActivity | GET | `/query` | `conn_mod_def::GJ6MnJ0iB8I::cAjsmtP-QNuJ_uIJRWDgHw` |
| Read a Company's TimeActivity | GET | `/timeactivity/{{timeactivityId}}` | `conn_mod_def::GJ6MnJF7jz8::5ShoV6n7TGWURUfluZqdvA` |
| Create a TimeActivity | POST | `/timeactivity` | `conn_mod_def::GJ6MnAXvib0::AcL_AMXZR6eye8_9aoW1XQ` |
| Delete a Time Activity | POST | `/timeactivity` | `conn_mod_def::GJ6MnAFAvhc::wvJyWEdZRAOU2K25Of7E2w` |

1 more TimeActivity actions are available through search.

This lists 90 of 240 actions. For anything not here, call `search_one_platform_actions` with platform `quickbooks`. The full catalog is at https://www.withone.ai/knowledge/quickbooks.

## When a call fails

The error comes from QuickBooks, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/quickbooks

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
