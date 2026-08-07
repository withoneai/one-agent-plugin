---
name: conductor
description: Conductor is an enterprise-scale website optimization and AI-powered intelligence platform that combines SEO, AI-generated content suggestions, and continuous site health monitoring—empowering marketing teams to boost visibility in both traditional search and AI-driven answer engines with unified data, workflows, and real-time insights. Read and write Conductor data through One: billcheckpayments, creditcardcredits, receivepayments, vendorcredits, endusers, inventoryadjustments and more, 220 actions with real parameter documentation. Use whenever the user asks to look something up in Conductor, create or update a record there, or build code against the Conductor API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: conductor
  generated-from: one-knowledge-base
---

# Conductor through One

Conductor is an enterprise-scale website optimization and AI-powered intelligence platform that combines SEO, AI-generated content suggestions, and continuous site health monitoring—empowering marketing teams to boost visibility in both traditional search and AI-driven answer engines with unified data, workflows, and real-time insights.

One exposes Conductor through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `conductor` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Conductor is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Conductor account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BillCheckPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bill Check Payments | GET | `/quickbooks-desktop/bill-check-payments` | `conn_mod_def::GJ1SfsjnS_E::DAnv29AcS6e6NMf_jEDzpw` |
| Retrieve a Bill Check Payment | GET | `/v1/quickbooks-desktop/bill-check-payments/{{id}}` | `conn_mod_def::GJ1Sq8iuM98::9nXBDfyMSKS5-BRIcj7nGQ` |
| Create a Bill Check Payment (QuickBooks Desktop) | POST | `/quickbooks-desktop/bill-check-payments` | `conn_mod_def::GJ1SUraW7LQ::iSRG__wbTayKMfewkfQTRQ` |
| Delete a Bill Check Payment | DELETE | `/v1/quickbooks-desktop/bill-check-payments/{{id}}` | `conn_mod_def::GJ1ScaH7SHM::w-NavDlkRRqQKU6gXFMyaw` |
| Update a Bill Check Payment | POST | `/v1/quickbooks-desktop/bill-check-payments/{{id}}` | `conn_mod_def::GJ1Syv_bwlA::OI3F0-rqS-yXrENB6ZIl5Q` |

### CreditCardCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credit Card Credits | GET | `/v1/quickbooks-desktop/credit-card-credits` | `conn_mod_def::GJ1ShIOdKGM::zYafJLr3RqmIrNuIGkX6XA` |
| Retrieve a Credit Card Credit Card Credit | GET | `/v1/quickbooks-desktop/credit-card-credits/{{id}}` | `conn_mod_def::GJ1Srv2JM84::QQg_1q0TQtWS7I104YUAuQ` |
| Create a Credit Card Credit (QuickBooks Desktop) | POST | `/quickbooks-desktop/credit-card-credits` | `conn_mod_def::GJ1SVy7OHUE::nqo6D5uzQQida8b8XYA7tA` |
| Delete a Credit Card Credit | DELETE | `/v1/quickbooks-desktop/credit-card-credits/{{id}}` | `conn_mod_def::GJ1SdJPaFyQ::1MkhktUHQ7ya8lfCjfwRUA` |
| Update a Credit Card Credit (QuickBooks Desktop) | POST | `/v1/quickbooks-desktop/credit-card-credits/{{id}}` | `conn_mod_def::GJ1SzcFG560::3HuwUnK9TkmLsG1S2QvQdg` |

### ReceivePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Receive-Payments | GET | `/quickbooks-desktop/receive-payments` | `conn_mod_def::GJ1SnF21EPw::T-IHEGb1RJ-GhDxCBAv4rg` |
| Retrieve a QuickBooks Desktop Receive-Payment | GET | `/v1/quickbooks-desktop/receive-payments/{{id}}` | `conn_mod_def::GJ1StuzZXPI::DxMobyScTiax8z_5Wca-vQ` |
| Create a QuickBooks Desktop Receive Payment | POST | `/quickbooks-desktop/receive-payments` | `conn_mod_def::GJ1SYECX0O4::k6fsQl-vQRWFP_vHD2lDBQ` |
| Delete a QuickBooks Desktop Receive-Payment | DELETE | `/v1/quickbooks-desktop/receive-payments/{{id}}` | `conn_mod_def::GJ1SdzthLu0::s-D5RgfPT9CmmaNRx6fVzg` |
| Update a QuickBooks Desktop Receive-Payment | POST | `/v1/quickbooks-desktop/receive-payments/{{id}}` | `conn_mod_def::GJ1S02Ps3YQ::eWy_NQ3MTA223cQ1r-IK8A` |

### VendorCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Vendor Credits | GET | `/quickbooks-desktop/vendor-credits` | `conn_mod_def::GJ1SqMNKVL8::4_sAZ4GVTZmVSLEyPaEtkA` |
| Retrieve a Vendor Credit | GET | `/v1/quickbooks-desktop/vendor-credits/{{id}}` | `conn_mod_def::GJ1Sv1vTWeo::pdzRsKMtQWi-jNnQqQzBIA` |
| Create a QuickBooks Desktop Vendor Credit | POST | `/quickbooks-desktop/vendor-credits` | `conn_mod_def::GJ1SZ9BMCgI::jbjGKWxkT3Oo3c_7yOlodw` |
| Delete a QuickBooks Desktop Vendor Credit | DELETE | `/v1/quickbooks-desktop/vendor-credits/{{id}}` | `conn_mod_def::GJ1SeWspCds::8Tya2iypS6C9OqYidlw1MA` |
| Update a QuickBooks Desktop Vendor Credit | POST | `/v1/quickbooks-desktop/vendor-credits/{{id}}` | `conn_mod_def::GJ1S2px7Gg8::xtcMLmqrQZixzOXvQ8nR4g` |

### EndUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List End-Users | GET | `/v1/end-users` | `conn_mod_def::GJ1SjRq3JIg::5lEqcUCoRAqySuK-LvuoRw` |
| Retrieve an End-User | GET | `/end-users/{{id}}` | `conn_mod_def::GJ1SwPILX6I::5VUU1cOXQDKZmT1VY6VeIQ` |
| Create an End-User | POST | `/end-users` | `conn_mod_def::GJ1Sai98N1A::otUWCVq0RB2FNGEndVqKQg` |
| Delete an End-User | DELETE | `/v1/end-users/{{id}}` | `conn_mod_def::GJ1SeggGwuc::ybrCQFT9Qb6D9goind1y4w` |
| Passthrough Request to an End-User’s Integration Connection | POST | `/v1/end-users/{{id}}/passthrough/{{integrationSlug}}` | `conn_mod_def::GJ1Sqj-hXcI::2PwMEEGpSyWt_eM1EvREPQ` |

### InventoryAdjustments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inventory Adjustments | GET | `/quickbooks-desktop/inventory-adjustments` | `conn_mod_def::GJ1SjtIcEjg::TL7n75nyRlCGmOyvfFq8Jw` |
| Retrieve an Inventory Adjustment | GET | `/v1/quickbooks-desktop/inventory-adjustments/{{id}}` | `conn_mod_def::GJ1SwjABJcs::phLo8uuzSrWgkCajQW8ilQ` |
| Create a QuickBooks Desktop Inventory Adjustment | POST | `/quickbooks-desktop/inventory-adjustments` | `conn_mod_def::GJ1Sa0eg1fA::doOjGxDnQwa3o_mVFRGU_g` |
| Delete an Inventory Adjustment | DELETE | `/v1/quickbooks-desktop/inventory-adjustments/{{id}}` | `conn_mod_def::GJ1SevauXEQ::lcht0i7NSdybpBGEsEHO6g` |
| Update a QuickBooks Desktop Inventory Adjustment | POST | `/v1/quickbooks-desktop/inventory-adjustments/{{id}}` | `conn_mod_def::GJ1S3Ovz544::MzCvHPgoQxC6oUgcuGfukw` |

### QuickbooksDesktopInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List QuickBooks Desktop Invoices | GET | `/v1/quickbooks-desktop/invoices` | `conn_mod_def::GJ1SkeWg4tQ::59YHWNwpT6eZEBim-SBluA` |
| Retrieve a QuickBooks Desktop Invoice | GET | `/v1/quickbooks-desktop/invoices/{{id}}` | `conn_mod_def::GJ1SxKatVRY::EqLoIU4iRkST1swxVLsQjA` |
| Create a QuickBooks Desktop Invoice | POST | `/quickbooks-desktop/invoices` | `conn_mod_def::GJ1SbYiU2ug::0vb-v2VoSfm6QS3ozdEl_A` |
| Delete a QuickBooks Desktop Invoice | DELETE | `/v1/quickbooks-desktop/invoices/{{id}}` | `conn_mod_def::GJ1Se3nYjvo::BR12TAMyTY-jSdXf7Sc9zQ` |
| Update a QuickBooks Desktop Invoice | POST | `/quickbooks-desktop/invoices/{{id}}` | `conn_mod_def::GJ1S31BSCW0::znbz0HSvQmen-5MEjkPFhQ` |

### BillCreditCardPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bill Credit Card Payments | GET | `/quickbooks-desktop/bill-credit-card-payments` | `conn_mod_def::GJ1Sf9MNkCg::e6DRe4jWS8-H-XZAmkPPeA` |
| Retrieve a Bill Credit Card Payment | GET | `/v1/quickbooks-desktop/bill-credit-card-payments/{{id}}` | `conn_mod_def::GJ1SrElttIA::C3JWWlXHRfqrSbpwrS0dPA` |
| Create a Bill Credit Card Payment (QuickBooks Desktop) | POST | `/quickbooks-desktop/bill-credit-card-payments` | `conn_mod_def::GJ1SU05stP8::8sXqgTViTKy0TvWkz2oCdQ` |
| Delete a Bill Credit Card Payment | DELETE | `/quickbooks-desktop/bill-credit-card-payments/{{id}}` | `conn_mod_def::GJ1Scic9KpQ::_aAKGdAlRiyD3NM3xVXamw` |

### BuildAssemblies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Build Assemblies | GET | `/quickbooks-desktop/build-assemblies` | `conn_mod_def::GJ1SgTClhsY::Nchykz1fRquTtsdnwvAsjA` |
| Retrieve a QuickBooks Desktop Build Assembly | GET | `/v1/quickbooks-desktop/build-assemblies/{{id}}` | `conn_mod_def::GJ1SrM4T3y4::QGgET-KQTEq-kgp-9rCYQA` |
| Create a QuickBooks Desktop Build Assembly | POST | `/quickbooks-desktop/build-assemblies` | `conn_mod_def::GJ1SU9zTv5s::lpwZaGg_S26ptFC_Fx1kQg` |
| Update a QuickBooks Desktop Build Assembly | POST | `/v1/quickbooks-desktop/build-assemblies/{{id}}` | `conn_mod_def::GJ1Sy5IELtc::muLkL-rqSCib6KpmpiqkiQ` |

### QuickbooksDesktopClasses

| Action | Method | Path | Action id |
|---|---|---|---|
| List QuickBooks Desktop Classes | GET | `/quickbooks-desktop/classes` | `conn_mod_def::GJ1SgpyQbXU::eH7ZtAZMSAeprfiH0-BLwQ` |
| Retrieve a QuickBooks Desktop Class | GET | `/v1/quickbooks-desktop/classes/{{id}}` | `conn_mod_def::GJ1SreSY54o::ut6CesSDTRuQc9xiuDF-vg` |
| Create a QuickBooks Desktop Class | POST | `/quickbooks-desktop/classes` | `conn_mod_def::GJ1SVShE9lo::CiaahohYQwioVLGldJZqdg` |
| Update a QuickBooks Desktop Class | POST | `/v1/quickbooks-desktop/classes/{{id}}` | `conn_mod_def::GJ1SzKF-WqE::YoiBIk07RPC3lZo3YHmYHQ` |

### CreditCardCharges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credit Card Charges (QuickBooks Desktop) | GET | `/quickbooks-desktop/credit-card-charges` | `conn_mod_def::GJ1Sg5S7fqY::QuYlxX1HTo2mI9bNRQpC6A` |
| Retrieve a QuickBooks Desktop Credit Card Charge | GET | `/v1/quickbooks-desktop/credit-card-charges/{{id}}` | `conn_mod_def::GJ1SrnHHhH4::3aD4zHjZQJuy5uYl1_RxFg` |
| Create a QuickBooks Desktop Credit Card Charge | POST | `/quickbooks-desktop/credit-card-charges` | `conn_mod_def::GJ1SVnm2KKw::2dIUCEfiQY2IZqnCSDX_ag` |
| Update a QuickBooks Desktop Credit Card Charge | POST | `/v1/quickbooks-desktop/credit-card-charges/{{id}}` | `conn_mod_def::GJ1SzSv5YaQ::K8lu--AkTC-E0a2I3CeQcQ` |

### CreditCardRefunds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credit Card Refunds | GET | `/quickbooks-desktop/credit-card-refunds` | `conn_mod_def::GJ1ShXtG5_w::8vmygAe4RjeZ93ysw9vCRw` |
| Retrieve a Credit Card Refund | GET | `/v1/quickbooks-desktop/credit-card-refunds/{{id}}` | `conn_mod_def::GJ1Sr4s3d0E::kkfGQkUUQrGFf3l4fd5-Qg` |
| Create a Credit Card Refund (QuickBooks Desktop) | POST | `/quickbooks-desktop/credit-card-refunds` | `conn_mod_def::GJ1SV7207cg::-7MgjzcLTki-nok7SlpEYQ` |
| Delete a Credit Card Refund | DELETE | `/v1/quickbooks-desktop/credit-card-refunds/{{id}}` | `conn_mod_def::GJ1SdRqEg0k::iWy7_WL3RFKlEVJkyc1rWw` |

### CreditMemos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credit Memos | GET | `/quickbooks-desktop/credit-memos` | `conn_mod_def::GJ1ShituX-0::ASsIm0orSYaWLVKzRgyk5Q` |
| Create a QuickBooks Desktop Credit Memo | POST | `/quickbooks-desktop/credit-memos` | `conn_mod_def::GJ1SWEwNrUs::JIUtIO4DR2GD-YXk1p2GeA` |
| Delete a QuickBooks Desktop Credit Memo | DELETE | `/v1/quickbooks-desktop/credit-memos/{{id}}` | `conn_mod_def::GJ1SdaIkaho::eqAAIq7tTi2YEQ7eEJz5hw` |
| Update a QuickBooks Desktop Credit Memo | POST | `/v1/quickbooks-desktop/credit-memos/{{id}}` | `conn_mod_def::GJ1Szlh4bxo::yFiOSdqfQLe5XPh2Mov9Zg` |

### DiscountItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Discount Items | GET | `/quickbooks-desktop/discount-items` | `conn_mod_def::GJ1Si_Kq99I::OsJ6r4gUSB2a1_w5qAkDsQ` |
| Retrieve a QuickBooks Desktop Discount Item | GET | `/v1/quickbooks-desktop/discount-items/{{id}}` | `conn_mod_def::GJ1SsxD5b1o::QIVHJp3JRpa0aeeVMIAGDQ` |
| Create a QuickBooks Desktop Discount Item | POST | `/quickbooks-desktop/discount-items` | `conn_mod_def::GJ1SW6QEDmg::7u0WatszSZ6Sc7O0iQc9nw` |
| Update a QuickBooks Desktop Discount Item | POST | `/v1/quickbooks-desktop/discount-items/{{id}}` | `conn_mod_def::GJ1S0B0foGA::XiFS6xAAT--2zSxDZMxHKA` |

### PurchaseOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Purchase Orders | GET | `/quickbooks-desktop/purchase-orders` | `conn_mod_def::GJ1Sm35diYY::w3gPLyrtSXeXsZbyxhzYNw` |
| Retrieve a QuickBooks Desktop Purchase Order | GET | `/v1/quickbooks-desktop/purchase-orders/{{id}}` | `conn_mod_def::GJ1Stl7CRd8::vgV4Pzm6R6WEnLPDrJBacw` |
| Create a QuickBooks Desktop Purchase Order | POST | `/quickbooks-desktop/purchase-orders` | `conn_mod_def::GJ1SX6yM5ak::kgtpdQvnTKKaQnc0NimJhA` |
| Update a QuickBooks Desktop Purchase Order | POST | `/v1/quickbooks-desktop/purchase-orders/{{id}}` | `conn_mod_def::GJ1S0nqclXk::SoEpckuRS7-Z-y09RTrURg` |

### SalesOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a QuickBooks Desktop Sales Order | GET | `/v1/quickbooks-desktop/sales-orders/{{id}}` | `conn_mod_def::GJ1St5M3-2c::ezyYC6f0TGKamQ62vuojPg` |
| Create a QuickBooks Desktop Sales Order | POST | `/quickbooks-desktop/sales-orders` | `conn_mod_def::GJ1SYOLT_Eg::QjtMvmLPTj2ZsHdE8NQ0wg` |
| Delete a QuickBooks Desktop Sales Order | DELETE | `/v1/quickbooks-desktop/sales-orders/{{id}}` | `conn_mod_def::GJ1Sd79CdkU::vRb_zNpDQf-6agsJCU3EtQ` |
| Update a QuickBooks Desktop Sales Order | POST | `/v1/quickbooks-desktop/sales-orders/{{id}}` | `conn_mod_def::GJ1S1AhAgL8::cwo67sc0QYOyt3Folu2HMQ` |

### SalesReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sales Receipts | GET | `/quickbooks-desktop/sales-receipts` | `conn_mod_def::GJ1SnjgwGvI::FQQRHRujRvOLF62dkgs8dw` |
| Create a QuickBooks Desktop Sales Receipt | POST | `/quickbooks-desktop/sales-receipts` | `conn_mod_def::GJ1SYYt5A9Q::d_Vx7f2TQxeHgJfRAYfZlg` |
| Delete a QuickBooks Desktop Sales Receipt | DELETE | `/v1/quickbooks-desktop/sales-receipts/{{id}}` | `conn_mod_def::GJ1SeEM8ToM::2fmrNUotS0OWKQv1ciB5oA` |
| Update a QuickBooks Desktop Sales Receipt | POST | `/v1/quickbooks-desktop/sales-receipts/{{id}}` | `conn_mod_def::GJ1S1JdatnY::0WO-CeTyTQS56WiBnqtw-Q` |

### SalesTaxItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sales-Tax Items (QuickBooks Desktop) | GET | `/quickbooks-desktop/sales-tax-items` | `conn_mod_def::GJ1SoHn5QRE::nQopfj0MR3ymXpkaASgULQ` |
| Retrieve a Sales-Tax Item | GET | `/v1/quickbooks-desktop/sales-tax-items/{{id}}` | `conn_mod_def::GJ1Suf6yi88::2MSs30E3SAapnWM1A24_Qg` |
| Create a Sales-Tax Item | POST | `/quickbooks-desktop/sales-tax-items` | `conn_mod_def::GJ1SYzfkkcc::cA2IYm3IR--7eppwM1RlNA` |
| Update a Sales-Tax Item | POST | `/quickbooks-desktop/sales-tax-items/{{id}}` | `conn_mod_def::GJ1S1mS_NZ8::nXsQ2zryS06aaYIvQPgzYw` |

### SubtotalItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subtotal Items | GET | `/quickbooks-desktop/subtotal-items` | `conn_mod_def::GJ1SpATa7Iw::918Cfuw0SLG8OJEZiae-9g` |
| Retrieve a Subtotal Item | GET | `/v1/quickbooks-desktop/subtotal-items/{{id}}` | `conn_mod_def::GJ1SvHCsJGU::SqHO6Cr0Sx-4H6smQijSjA` |
| Create a Subtotal Item (QuickBooks Desktop) | POST | `/quickbooks-desktop/subtotal-items` | `conn_mod_def::GJ1SZYnHrnI::LSD38oi8Tnie9a8a6C_CmA` |
| Update a QuickBooks Desktop Subtotal Item | POST | `/v1/quickbooks-desktop/subtotal-items/{{id}}` | `conn_mod_def::GJ1S15uHRw8::i5cMFfdzTMaxIkYnZ44Ghg` |

### TimeTrackingActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a QuickBooks Desktop Time Tracking Activity | GET | `/v1/quickbooks-desktop/time-tracking-activities/{{id}}` | `conn_mod_def::GJ1SvPTghbE::APk6rkECRByy3nIVyFj9-Q` |
| Create a Time Tracking Activity | POST | `/quickbooks-desktop/time-tracking-activities` | `conn_mod_def::GJ1SZg4lSJk::xBEvfUf7Sm28mlVmiLYRxQ` |
| Delete a QuickBooks Desktop Time Tracking Activity | DELETE | `/v1/quickbooks-desktop/time-tracking-activities/{{id}}` | `conn_mod_def::GJ1SeMDGelo::3uGGAveLQGeltoAeT7O7CA` |
| Update a QuickBooks Desktop Time Tracking Activity | POST | `/v1/quickbooks-desktop/time-tracking-activities/{{id}}` | `conn_mod_def::GJ1S2DR4Ptk::ZKOv9LuIQEWozZQqhgrfIQ` |

### QuickbooksDesktopVendors

| Action | Method | Path | Action id |
|---|---|---|---|
| List QuickBooks Desktop Vendors | GET | `/quickbooks-desktop/vendors` | `conn_mod_def::GJ1Sqa7-tDs::6CSOvdqlTJSsb4AI9tkfCw` |
| Retrieve a QuickBooks Desktop Vendor | GET | `/v1/quickbooks-desktop/vendors/{{id}}` | `conn_mod_def::GJ1SvsxuOV0::I0Fsi7szT06JIBTQX-_bEg` |
| Create a QuickBooks Desktop Vendor | POST | `/quickbooks-desktop/vendors` | `conn_mod_def::GJ1SZytEaCg::LqaUb4cgTeCxJv_nSBTUmg` |

1 more QuickbooksDesktopVendors actions are available through search.

This lists 90 of 220 actions. For anything not here, call `search_one_platform_actions` with platform `conductor`. The full catalog is at https://www.withone.ai/knowledge/conductor.

## When a call fails

The error comes from Conductor, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/conductor

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
