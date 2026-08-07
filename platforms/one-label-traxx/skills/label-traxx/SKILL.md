---
name: label-traxx
description: Label Traxx is an ERP platform for label and flexible packaging manufacturers that provides workflow automation, job management from quote to invoice, planning, inventory, and integration capabilities, allowing plants to improve operational visibility and coordinate production and business processes. Read and write Label Traxx data through One: employees, contacts, customers, suppliers, tooling, customticketitem and more, 119 actions with real parameter documentation. Use whenever the user asks to look something up in Label Traxx, create or update a record there, or build code against the Label Traxx API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: label-traxx
  generated-from: one-knowledge-base
---

# Label Traxx through One

Label Traxx is an ERP platform for label and flexible packaging manufacturers that provides workflow automation, job management from quote to invoice, planning, inventory, and integration capabilities, allowing plants to improve operational visibility and coordinate production and business processes.

One exposes Label Traxx through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `label-traxx` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Label Traxx is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Label Traxx account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Employees | GET | `/employees-count` | `conn_mod_def::GML-P0EIhpw::LHPt3iTjQD2JSG4InTthXQ` |
| List Employees | GET | `/employees` | `conn_mod_def::GML-PkfvBzQ::ShCSIG8XQzaH_GURRGHPzg` |
| Create an Associate Record from an Employee Template | POST | `/employee-create` | `conn_mod_def::GML-PaMFxnw::89owShM7R22pcsEkS2Y1FA` |
| Employee Update | PUT | `/employee-update` | `conn_mod_def::GML-PiwSfT8::jtWxTcy0RUSwBUILaLchJg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Contacts | GET | `/contacts-count` | `conn_mod_def::GML-OrglltQ::PfHA-R6nQIiqRKAh5b-yew` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GML-Ou3zvc8::4urtGCuORPSdz9GoC_GTww` |
| Create Contact | POST | `/contact-create` | `conn_mod_def::GML-OjrUkdE::dRprabpRQgS-TQOHOuO3bg` |
| Update a Contact | PUT | `/contact-update` | `conn_mod_def::GML-OkExrIc::YdmDXwT0S5ypE6DZlVaBoA` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/customers` | `conn_mod_def::GML-Orn-ZL4::MvK0W9EdQiuFb4EyP5cVcw` |
| Create Customer | POST | `/customer-create` | `conn_mod_def::GML-O1hCSS0::yOzuzRyjRseVqmbqb3xkUQ` |
| Create Simple Customer | POST | `/customer-create/simple` | `conn_mod_def::GML-O18aW1g::KrlAbe5bTZeNkGxW0EXCoA` |
| Update Customer | PUT | `/customer-update` | `conn_mod_def::GML-O3ctR3Y::WDBKOVRTQciwfvHIc0TS4Q` |

### Suppliers

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Suppliers | GET | `/suppliers-count` | `conn_mod_def::GML-RciznhQ::zjMCvo52S0GOjX-pRbYwiA` |
| List Suppliers | GET | `/suppliers` | `conn_mod_def::GML-RkYzPj0::4m7d3A1pQe-khiKJp9E5Sw` |
| Create Supplier | POST | `/supplier-create` | `conn_mod_def::GML-Rc-JA0g::jtTUjhlMQ_GXv3ZTKx9sRw` |
| Update Supplier | PUT | `/supplier-update` | `conn_mod_def::GML-RkqbRL4::VKrdTGcUQ5K7s-3QubQG_w` |

### Tooling

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Tooling | GET | `/tooling-count` | `conn_mod_def::GML-RtIpSTs::Tgqom0q7STezTYJfGTRxyQ` |
| List Tooling | GET | `/tooling` | `conn_mod_def::GML-R3RF7mQ::4IvFH449T7-lew46HNp47g` |
| Create Tooling Record | POST | `/tooling-create` | `conn_mod_def::GML-R14TJDU::yq1U2ba_R023GdGc5WjZzg` |
| Update Tooling | PUT | `/tooling-update` | `conn_mod_def::GML-R3GcJoE::8FArNlt3SMq9tl_6ZMSHPQ` |

### CustomTicketItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Ticket Item Record | POST | `/custom-ticketitem-create` | `conn_mod_def::GML-PaFEP9Q::WKuQOu3yRa6FAi2bOQuaBg` |
| Jdf Custom Ticketitem Update | PUT | `/jdf-custom-ticketitem-update` | `conn_mod_def::GML-QWlUaZ4::J8YoYb3NQOirIIGKF0Mo9A` |
| Update a Custom Ticket Item | PUT | `/custom-ticketitem-update` | `conn_mod_def::GML-PZuEnXY::SIi-1_ooQk-YzQcotMxd0A` |

### CustomTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Custom Tickets | GET | `/custom-tickets-count` | `conn_mod_def::GML-PSrpGQQ::pSXziG3ZQyqck7R_X5gGaQ` |
| List Custom Tickets | GET | `/custom-tickets` | `conn_mod_def::GML-PboGIjU::HMJFliGkS5WrAnY3LszdCw` |
| Update a Custom Ticket | PUT | `/custom-ticket-update` | `conn_mod_def::GML-PRBZnVM::26TOgOtEQDyqbgv_TV8q8Q` |

### MfgReps

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Mfg Reps | GET | `/mfg-reps-count` | `conn_mod_def::GML-Qem0aA4::oV6KG7TURT2c3n0dS32n0A` |
| List Mfg Reps | GET | `/mfg-reps` | `conn_mod_def::GML-QfH3CTo::RgVVY0rJS9WQlclMZ-JroA` |
| Create Mfg Rep | POST | `/mfg-rep-create` | `conn_mod_def::GML-QVy_hBk::kvgL26ZkTgagR3fmgyqzHw` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Products | GET | `/products-count` | `conn_mod_def::GML-Q4uvIbY::pzkVIixIR9u83ZVMUcV-Cg` |
| List Products | GET | `/products` | `conn_mod_def::GML-Q4z0pck::5qLvxxZPTPWh-hAkSg0B0Q` |
| Update Product | PUT | `/product-update` | `conn_mod_def::GML-QuK2Q08::iK0d8l-YTrSPWy_0Ov96eg` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Addresses | GET | `/addresses-count` | `conn_mod_def::GML-Nuh6hCE::gha6dJHMRBWWXy88_dIWow` |
| List Addresses | GET | `/addresses` | `conn_mod_def::GML-NtLfJk8::yivx0r9lR8i6kwM9g6uTNA` |

### Address

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Address Record | POST | `/address-create` | `conn_mod_def::GML-NtW5B6Q::Md03WbLGSbShi8sBQLfb0g` |
| Update an Address | PUT | `/address-update` | `conn_mod_def::GML-OAn2Bbk::CLWNwGOzRAehu-zPb40dVw` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Login | POST | `/auth/login` | `conn_mod_def::GML-OSwkdyY::5aVr1OzcSICrjDt1HtKu-g` |
| Revoke a User Refresh Token | POST | `/auth/revoke` | `conn_mod_def::GML-OSj_luc::sKcErRJqR0qhSIPUIu_Acg` |

### CashReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Cash Receipts | GET | `/cash-receipts-count` | `conn_mod_def::GML-Obe7t0I::iRUrmgCySSOPfEHpuKzk1g` |
| List Cash Receipts | GET | `/cash-receipts` | `conn_mod_def::GML-Oa6gMLY::YnkpjjufQzSQTwrRvd2pTA` |

### Equipments

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Equipments | GET | `/equipments-count` | `conn_mod_def::GML-P7BWRC0::qIxf4frBTnqQupWWuErkvw` |
| List Equipments | GET | `/equipments` | `conn_mod_def::GML-QO1ihE8::2S7nD6SUSFOEO0DW3SjlAQ` |

### StockTickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Stock Tickets | GET | `/stock-tickets-count` | `conn_mod_def::GML-RU0LB3U::KJTqMstpQYCoN3WJcaqPHQ` |
| List Stock Tickets | GET | `/stock-tickets` | `conn_mod_def::GML-RdLbm24::Nl1irvbkQ96DbQEFbNlyGw` |

### StockProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Stock Product | POST | `/stock-product-create` | `conn_mod_def::GML-RVRM_cA::Im5wKdMHSZK2__DOYcgIgw` |
| Update a Stock Product | PUT | `/stock-product-update` | `conn_mod_def::GML-RT9xuXM::9_wovHWASnSExz2aZEbLuA` |

### ArInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Count AR Invoices | GET | `/arinvoices-count` | `conn_mod_def::GML-OIZKets::b4XDETI1Q5Os44JSbD2kbw` |
| List AR Invoices | GET | `/arinvoices` | `conn_mod_def::GML-OKJJ7Ok::P_tUp-J2Qla9lgsUKBEsUA` |

### ApInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Count AP Invoices | GET | `/apinvoices-count` | `conn_mod_def::GML-OMQFWHg::BHUAb3YoScSblXbVBK7fPA` |
| List AP Invoices | GET | `/apinvoices` | `conn_mod_def::GML-OLitrsc::mIGzxzeRQW2oz7M4OE1ASA` |

### ChartsOfAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Charts of Accounts | GET | `/charts-of-accounts-count` | `conn_mod_def::GML-OkW9uFQ::OZeeXEG2RKeKOKx7bwPjQQ` |
| List Charts of Accounts | GET | `/charts-of-accounts` | `conn_mod_def::GML-OjkF3DY::BQqXXWAuSFW1tHs8Cd2ngQ` |

### CustomerActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Customer Activities | GET | `/customer-activities-count` | `conn_mod_def::GML-PH_2xac::8WcOl8Y8SUu0kOqmPi6GwA` |
| List Customer Activities | GET | `/customer-activities` | `conn_mod_def::GML-PJJiWOo::yBkousQNQpKLJFurkjBDxA` |

### CustomEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Custom Estimates | GET | `/custom-estimates-count` | `conn_mod_def::GML-PJAgQPY::V3RmmGF5QHaXw4ze87SfOw` |
| List Custom Estimates | GET | `/custom-estimates` | `conn_mod_def::GML-PSu_hvc::hojCkr_RQ-WE93eXg2Fp-w` |

### GlDetailActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Count GL Detail Activities | GET | `/gldetail-activities-count` | `conn_mod_def::GML-P8tJ9kY::_xFk75JlT4abL2Z8e9flTA` |
| List GL Detail Activities | GET | `/gldetail-activities` | `conn_mod_def::GML-P8ejDtY::vt3e6Ts1Ru2Z_B9D-yP2qA` |

### StockProductPricing

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Stock Product Pricing | POST | `/stock-product-pricing-create` | `conn_mod_def::GML-QlOCZbQ::ESmdiWXtTHWD-kozgjddRA` |
| Update Stock Product Pricing | PUT | `/stock-product-pricing-update` | `conn_mod_def::GML-QsxmW7c::rTfwZIhgSWS-ARfn0GoyLQ` |

### PackingSlips

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Packing Slips | GET | `/packing-slips-count` | `conn_mod_def::GML-Qmxdkuc::jjl-JH1oSvSEADoYppT90w` |
| List Packing Slips | GET | `/packing-slips` | `conn_mod_def::GML-QmplR4Y::fCHRjw28T_6H4KDNXQBLkg` |

### StockProductPricings

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Stock Product Pricings | GET | `/stock-product-pricings-count` | `conn_mod_def::GML-QtstjAQ::H6RT7y5kRlK1bLe4HuUmNg` |
| List Stock Product Pricings | GET | `/stock-product-pricings` | `conn_mod_def::GML-QvBHzXc::5gFOOFzvSPKWQTFMx81GXQ` |

### Stocks

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Stocks | GET | `/stocks-count` | `conn_mod_def::GML-RM9sLHc::1V-_Y5JqTRmBypi0-cwm-w` |
| List Stocks | GET | `/stocks` | `conn_mod_def::GML-RMgmuWg::uCnOwxbXTKmkwIZY1EuDnA` |

### TicketItemArtworks

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Ticket Item Artworks | GET | `/ticket-item-artworks/download` | `conn_mod_def::GML-RlOrgHY::n9SLNDYqRT62yIwz5mfglQ` |
| Update Ticket Item Artworks | PUT | `/ticket-item-artworks` | `conn_mod_def::GML-RtyvSMs::TJxLET_4QCioQD7k6tJe0A` |

### TimeCards

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Time Cards | GET | `/time-cards-count` | `conn_mod_def::GML-RtID8Kk::IofwYOrNQ0qALvrmWBofeg` |
| List Time Cards | GET | `/time-cards` | `conn_mod_def::GML-RuG_ESA::pbi8B_4OTy6-q3SYXKvQ9A` |

### AddressDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Address Details | GET | `/address-details` | `conn_mod_def::GML-Ns6-zjg::4WiDYNwEQZeIo3jNdnXVrA` |

### CustomersCount

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customers Count | GET | `/customers-count` | `conn_mod_def::GML-OuIhb10::scAFs6v7RgWhUkNkBcb0uQ` |

### ArInvoicesDeleted

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deleted AR Invoices | GET | `/arinvoices-deleted` | `conn_mod_def::GML-OTJJKIo::CuP8e3NaRmWuXRzJz94mNA` |

### ArInvoiceDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AR Invoice Details | GET | `/arinvoice-details` | `conn_mod_def::GML-OTRf99g::C-_v9WR3TxWtA9N5aknv4g` |

### AccessToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Refresh the Access Token | POST | `/auth/refresh` | `conn_mod_def::GML-OT3dlWk::ngLzv1uiSg6TP08EElgrZw` |

### CashReceiptDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cash Receipt Details | GET | `/cash-receipt-details` | `conn_mod_def::GML-OaZnU8g::b9SCLIdZRsukj1P51p9_iQ` |

### CustomTicketDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Ticket Details | GET | `/custom-ticket-details` | `conn_mod_def::GML-Pag3WOY::Xg3AwzFGS0C7G-SjaeH-jg` |

### EquipmentDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Equipment Details | GET | `/equipment-details` | `conn_mod_def::GML-PiRc9zc::LRZ-2s1yRUi9lg8EXDh3kA` |

### EmployeeDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Employee Details | GET | `/employee-details` | `conn_mod_def::GML-Pj1Yt1w::Ljr3uccYRCOpz7OHENBH5Q` |

### StockProductDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stock Product Details | GET | `/stock-product-details` | `conn_mod_def::GML-RVVyUI0::_uR8jg9bSiSHESRoNgcslQ` |

### StockProductTicket

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Stock Product Ticket | PUT | `/stock-ticket-update` | `conn_mod_def::GML-RcQWJss::p-5s_52PQAmNxOr1cMaqMQ` |

### ApInvoiceDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AP Invoice Details | GET | `/apinvoice-details` | `conn_mod_def::GML-OH678Y0::aWaYByqNQ6aKBLxoNNA6lA` |

### CustomerDefinedFieldsValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Customer Defined Fields Values | GET | `/customer-defined-fields-values-count` | `conn_mod_def::GML-Oc1HCNA::WO_YSNdYSJ2ND7_fUVrfjA` |

### CustomerDefinedFieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customer Defined Field Values | GET | `/customer-defined-fields-values` | `conn_mod_def::GML-Oc6WJJc::2XzZDouWQRyaPyvDg-BPVA` |

### CustomerDefinedFieldValueDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer Defined Field Value Details | GET | `/customer-defined-fields-value-details` | `conn_mod_def::GML-Ojc12jU::KmCt5nmMQ8iZtb3oZ4B_ag` |

### ContactDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Details | GET | `/contact-details` | `conn_mod_def::GML-OvbyC7s::nou_VBSIReSqgK-68oZjpw` |

### CustomerActivityDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer Activity Details | GET | `/customer-activity-details` | `conn_mod_def::GML-O2ce2d4::VzooWjrzTC6eKGS2MAztJg` |

### CustomerDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer Details | GET | `/customer-details` | `conn_mod_def::GML-PBrvVtA::L1tPhsndRamFGl3dvWkvRw` |

### CustomerActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Customer Activity | POST | `/customer-activity-create` | `conn_mod_def::GML-PH4Sk3U::HQbC6MJ3SMWyTtC_b6fRPg` |

### CustomEstimateDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Estimate Details | GET | `/custom-estimate-details` | `conn_mod_def::GML-PJQfPks::2bWGZlm_RWuG40Dzrdco4w` |

This lists 90 of 119 actions. For anything not here, call `search_one_platform_actions` with platform `label-traxx`. The full catalog is at https://www.withone.ai/knowledge/label-traxx.

## When a call fails

The error comes from Label Traxx, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/label-traxx

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
