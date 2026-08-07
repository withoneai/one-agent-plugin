---
name: microsoft-dynamics-365-business-central
description: A comprehensive business management solution that helps small and mid-sized companies manage finances, operations, sales, and customer service in a connected environment. Read and write Microsoft Dynamics 365 Business Central data through One: defaultdimensions, items, salesinvoices, salesquotes, attachments, bankaccounts and more, 260 actions with real parameter documentation. Use whenever the user asks to look something up in Microsoft Dynamics 365 Business Central, create or update a record there, or build code against the Microsoft Dynamics 365 Business Central API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: microsoft-dynamics-365-business-central
  generated-from: one-knowledge-base
---

# Microsoft Dynamics 365 Business Central through One

A comprehensive business management solution that helps small and mid-sized companies manage finances, operations, sales, and customer service in a connected environment.

One exposes Microsoft Dynamics 365 Business Central through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `microsoft-dynamics-365-business-central` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Microsoft Dynamics 365 Business Central is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Microsoft Dynamics 365 Business Central account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DefaultDimensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer’s Default Dimensions | GET | `/customers({{customerId}})/defaultDimensions` | `conn_mod_def::GJ46yJP5PW0::11fSSHU7Sv-bGyVkEMO-dQ` |
| List a Vendor’s Default Dimensions (for a Company) | GET | `/vendors({{vendorId}})/defaultDimensions` | `conn_mod_def::GJ466RhA7-c::L4YE7jgdT3GP2i-mKISUzQ` |
| List Default Dimensions for an Entity | GET | `/defaultDimensions` | `conn_mod_def::GJ46zIhU-dE::y3RkyS88SLm7LXX9OBZOXw` |
| Create a Customer’s Default Dimensions | POST | `/customers({{customerId}})/defaultDimensions` | `conn_mod_def::GJ46x9tA7s0::5_v1LrPgTk2-kMNz8eTUCw` |
| Create a Default Dimension for an Entity | POST | `/items({{itemId}})/defaultDimensions` | `conn_mod_def::GJ46zBZ4ukY::NZi8MuEZSJ6M7Lm9mc9-zQ` |
| Create a Vendor’s Default Dimensions | POST | `/vendors({{vendorId}})/defaultDimensions` | `conn_mod_def::GJ466Cl7Rqs::t_OaQmygTneJSHAvxq640Q` |
| Create an Employee’s Default Dimensions | POST | `/employees({{employeeId}})/defaultDimensions` | `conn_mod_def::GJ46zrwfEzY::YfK-pnX4QPiR_pYwKv5hFA` |
| Delete a Company Entity’s Default Dimension | DELETE | `/{{entityPath}}/defaultDimensions({{defaultDimensionId}})` | `conn_mod_def::GJ46y81e5t8::lZTYeD78S_iBNQeBjbZC6g` |
| Delete a Vendor’s Default Dimension | DELETE | `/vendors({{vendorId}})/defaultDimensions({{vendorId}},{{dimensionId}})` | `conn_mod_def::GJ466R0RSy8::5G9VDuOGR5WSEurxO8wdSg` |
| Update a Company's Entity Default Dimension | PATCH | `/items({{itemId}})/defaultDimensions({{defaultDimensionId}})` | `conn_mod_def::GJ46zLFySDM::Oh6pOl6ST8ercuY38R4fbQ` |
| Update a Customer’s Default Dimensions (in a Company) | PATCH | `/customers({{customerId}})/defaultDimensions({{customerId}},{{dimensionId}})` | `conn_mod_def::GJ46yGlOfyo::htjeHDDFSoqFsOHGNnaFaQ` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Item | GET | `/items({{itemId}})` | `conn_mod_def::GJ460mRGlw0::i1eds37ZTM6bU2T4Vkn7CQ` |
| Get an Item’s Picture | GET | `/items({{itemId}})/picture` | `conn_mod_def::GJ460mPuahA::eOY-Qm33T1imys3M2FW4fw` |
| Create an Item for a Company | POST | `/items` | `conn_mod_def::GJ460dxQrIM::Iz1gIKocSISsCHhIMaOx1Q` |
| Delete a Company's Item | DELETE | `/items({{itemId}})` | `conn_mod_def::GJ460maOkqU::5TfzFuJcRGCRnuIUQpk5tA` |
| Delete an Item’s Picture (in a Company) | DELETE | `/items({{itemId}})/picture` | `conn_mod_def::GJ460d2yzvs::YBe_50UVTQeN5SAltFNCgA` |
| Update a Company's Item | PATCH | `/items({{itemId}})` | `conn_mod_def::GJ460nxVgDw::ZYj1HgBaRCyq3uGvIPStBg` |

### SalesInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Sales Invoice | GET | `/salesInvoices({{salesInvoiceId}})` | `conn_mod_def::GJ464FlqXgo::lPO2U-9bQg6RIhrznoqkVA` |
| Get a Sales Invoice PDF Document (binary) | GET | `/salesInvoices({{invoiceId}})/pdfDocument({{invoiceId}})/content` | `conn_mod_def::GJ464F064ww::o5cRUnQLSMqocVzvYIJXxg` |
| Create a Company's Sales Invoice | POST | `/salesInvoices` | `conn_mod_def::GJ464E-8BrE::LPbl0JBWSFmFzlDid8M1Ig` |
| Delete a Company's Sales Invoice | DELETE | `/salesInvoices({{salesInvoiceId}})` | `conn_mod_def::GJ464GKyIG4::b2mQOBQgRIaKbM4Dbxtqtw` |
| Update a Company's Sales Invoice | PATCH | `/salesInvoices({{salesInvoiceId}})` | `conn_mod_def::GJ464Tv0y5I::bMu21hONRqutdYi3DXowvA` |

### SalesQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Sales Quote | GET | `/salesQuotes({{salesQuoteId}})` | `conn_mod_def::GJ465BbTPKk::2Fd5Ft5JQsOacLPgrkxv7w` |
| Get a Sales Quote PDF Document (Binary Content) | GET | `/salesQuotes({{quoteId}})/pdfDocument({{pdfDocumentId}})/content` | `conn_mod_def::GJ46413eLYs::eKOIaRf0Sdm0bijTxICYxw` |
| Create a Company's Sales Quote | POST | `/salesQuotes` | `conn_mod_def::GJ4640hou9Q::KNjjuykiTb-65xJgP3UUJg` |
| Delete a Company's Sales Quote | DELETE | `/salesQuotes({{salesQuoteId}})` | `conn_mod_def::GJ46409MMD4::kB-8FnJATJarmn5neejv8g` |
| Update a Company's Sales Quote | PATCH | `/salesQuotes({{salesQuoteId}})` | `conn_mod_def::GJ465CVbh0Y::PKyBE8EITg6o6KaqCD4wlQ` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Attachments (Filtered by Parent Entity) | GET | `/attachments` | `conn_mod_def::GJ46w74l8xM::AGbmnwSwRTWzWUmnyoJ0hA` |
| Create a Company's Attachment (Incoming Document) | POST | `/attachments` | `conn_mod_def::GJ46w7KDQWY::iDpQXZ8IQyGJR1WjftpvEQ` |
| Delete a Company Attachment | DELETE | `/attachments({{attachmentId}})` | `conn_mod_def::GJ46w7tfcWc::X0tNQY1iRM-dNKi1wCoNwg` |
| Update an Attachment’s Content (Incoming Document) | PATCH | `/attachments({{attachmentId}})/attachmentContent` | `conn_mod_def::GJ46w7rcNMU::ia8-mmibTA6EV9wa72dT4w` |

### BankAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Bank Account | GET | `/bankAccounts({{bankAccountId}})` | `conn_mod_def::GJ46xHWirM4::UG_LJMkGRCqw3OXnHyFrUA` |
| Create a Company's Bank Account | POST | `/bankAccounts` | `conn_mod_def::GJ46xG29l2I::0C5YX1ERTNi6F9MxOeqlVQ` |
| Delete a Company’s Bank Account | DELETE | `/bankAccounts({{bankAccountId}})` | `conn_mod_def::GJ46xG20JBY::W38XymCaR2C2SG55khIZiA` |
| Update a Company’s Bank Account | PATCH | `/bankAccounts({{bankAccountId}})` | `conn_mod_def::GJ46xHPXD4M::BLXJbGZCRs-RdLmqPf6Cxg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Contact | GET | `/contacts({{contactId}})` | `conn_mod_def::GJ46xc915TE::7hYpaMtKR2Wc1wNydg5q-w` |
| Create a Company’s Contact | POST | `/contacts` | `conn_mod_def::GJ46xP5Bpxg::CBEUCp_hSnS9Ulfddt-KNQ` |
| Delete a Company's Contact | DELETE | `/contacts({{contactId}})` | `conn_mod_def::GJ46xaSjnoA::8Lc5kNR0Q1qdpzygYyDxwg` |
| Update a Company's Contact | PATCH | `/contacts({{contactId}})` | `conn_mod_def::GJ46xmAuRCY::XwV1SC2vRLOov9XRNHciCw` |

### CountriesRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Country/Region (countriesRegions) | GET | `/countriesRegions({{countryRegionId}})` | `conn_mod_def::GJ46xvT8jWw::ju1HjSgeRIeK5WVQq8xHFw` |
| Create a Company Country/Region (countriesRegions) | POST | `/countriesRegions` | `conn_mod_def::GJ46xbjzKCU::CT0eFDgWQ0uaF85QepZHFw` |
| Delete a Company's Country/Region | DELETE | `/countriesRegions({{countryRegionId}})` | `conn_mod_def::GJ46xxFKvb4::Z7vPW1_gRK-PfPJWTyTUow` |
| Update a Company's Country/Region | PATCH | `/countriesRegions({{countryRegionId}})` | `conn_mod_def::GJ46xuHFG1U::zRJVGFPYQ9q4EIvculLtdA` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Currency | GET | `/currencies({{currencyId}})` | `conn_mod_def::GJ46x529j_k::cizyGFJsTvuzMTw_Ob9cNw` |
| Create a Company Currency | POST | `/currencies` | `conn_mod_def::GJ46xuVtFDg::ATDCeRogQaOX2p00CtzlHQ` |
| Delete a Company's Currency | DELETE | `/currencies({{currencyId}})` | `conn_mod_def::GJ46xudiiaE::oxsGZcCaRP2wWpeiJ9Xufg` |
| Update a Company's Currency | PATCH | `/currencies({{currencyId}})` | `conn_mod_def::GJ46x6CoGZI::34VmpSPdTmqrr8dCldhkJg` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Company's Customer | GET | `/customers({{customerId}})` | `conn_mod_def::GJ46yKyMN98::gaMm04pVS7KTMlDzJZTQ6w` |
| Create a Customer (in a Company) | POST | `/customers` | `conn_mod_def::GJ46x887hPo::u6AyjgGbSXOMB7FAJbXA6g` |
| Delete a Company's Customer | DELETE | `/customers({{customerId}})` | `conn_mod_def::GJ46yGKBO_o::kwLXfN1_SuqutHAUN7DC1g` |
| Update a Company's Customer | PATCH | `/customers({{customerId}})` | `conn_mod_def::GJ46yT5UbgU::sTKmsItHQWed3RblGJCqPQ` |

### CustomerPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Customer Payment | GET | `/customerPayments({{customerPaymentId}})` | `conn_mod_def::GJ46yeJl7W4::epcAOXlERv28_JrIaMYJyA` |
| Create a Company Customer Payment | POST | `/customerPayments({{customerPaymentId}})` | `conn_mod_def::GJ46yemDDV8::47NC5P93SeCj05KBZ-tHbQ` |
| Delete a Company's Customer Payment | DELETE | `/customerPayments({{customerPaymentId}})` | `conn_mod_def::GJ46yiH0Qdg::UW9pkRBGQyicNY6AmRTDfw` |
| Update a Company's Customer Payment | PATCH | `/customerPayments({{customerPaymentId}})` | `conn_mod_def::GJ46yf3bqbs::6zBAHfqsRO27Ph73pTARnA` |

### CustomerPaymentJournals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Customer Payment Journal | GET | `/customerPaymentJournals({{customerPaymentJournalId}})` | `conn_mod_def::GJ46yqxnez0::jhZMCYb9QMaQdI1CntyyTg` |
| Create a Company's Customer Payment Journal | POST | `/customerPaymentJournals` | `conn_mod_def::GJ46yfOUFWM::i8_2q27pTk-E7ds7LszM8g` |
| Delete a Company's Customer Payment Journal | DELETE | `/customerPaymentJournals({{customerPaymentJournalId}})` | `conn_mod_def::GJ46yrA3Z2g::0OOvLWecR_mAUCwDmmkS9g` |
| Update a Company's Customer Payment Journal | PATCH | `/customerPaymentJournals({{customerPaymentJournalId}})` | `conn_mod_def::GJ46yzIDZSM::UQayc9OxSuSsApAi_KPfcQ` |

### CustomerReturnReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Customer Return Reason | GET | `/customerReturnReasons({{customerReturnReasonId}})` | `conn_mod_def::GJ46y7hXnOM::9cmXmxpmT1uKb2B1n9wmVA` |
| Create a Company's Customer Return Reason | POST | `/customerReturnReasons` | `conn_mod_def::GJ46yrlY7Y0::HIMEPGjGTeeLwNsi7c0jmQ` |
| Delete a Company's Customer Return Reason | DELETE | `/customerReturnReasons({{customerReturnReasonId}})` | `conn_mod_def::GJ46yscb96M::ALuvzyxRSH2296MRNXG6ug` |
| Update a Company's Customer Return Reason | PATCH | `/customerReturnReasons({{customerReturnReasonId}})` | `conn_mod_def::GJ46y8vZsK0::Shm-7g7-QJiC8MXTaOjt1w` |

### DimensionSetLines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dimension Set Line (for a Company Document) | GET | `/salesOrders({{salesOrderId}})/dimensionSetLines({{dimensionSetLineId}})` | `conn_mod_def::GJ46zWnXTIg::TRgl1k63Qqe1l6t5ZV2ZEQ` |
| Create a Dimension Set Line for a Parent Entity | POST | `/salesOrders({{parentId}})/dimensionSetLines({{dimensionSetLineId}})` | `conn_mod_def::GJ46zMkHCII::_aoAijXOTkmDONtqY74u0Q` |
| Delete a Dimension Set Line for a Parent Record | DELETE | `/{{parentCollection}}({{parentId}})/dimensionSetLines({{dimensionSetLineId}})` | `conn_mod_def::GJ46zN3Wekw::QJpMdTp5ScC7jyTAyDw4Eg` |
| Update a Sales Order’s Dimension Set Line | PATCH | `/salesOrders({{salesOrderId}})/dimensionSetLines({{dimensionSetLineId}})` | `conn_mod_def::GJ46zX0eT5U::YD70wV-kTYeP2BQccEel6Q` |

### DisputeStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Dispute Status | GET | `/disputeStatus({{disputeStatusId}})` | `conn_mod_def::GJ46zgzhRio::GwkpC40HSpmpd3I3_exn1A` |
| Create a Company Dispute Status | POST | `/disputeStatus({{disputeStatusId}})` | `conn_mod_def::GJ46zXJyNJ8::yYy2FvC7T76YquatNsqrAw` |
| Delete a Company’s Dispute Status | DELETE | `/disputeStatus({{disputeStatusId}})` | `conn_mod_def::GJ46zXiBmic::QgwaH07nS82ZCW0DhRlS5A` |
| Update a Company’s Dispute Status | PATCH | `/disputeStatus({{disputeStatusId}})` | `conn_mod_def::GJ46zhftZ-c::6HoaajE-TOKURTtm_Fi4Jg` |

### DocumentAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Document Attachment | GET | `/documentAttachments({{documentAttachmentId}})` | `conn_mod_def::GJ46zf58OQw::385kDVoNQdKDWjCtPrRdlA` |
| Create a Company Document Attachment | POST | `/documentAttachments({{documentAttachmentId}})` | `conn_mod_def::GJ46ziWKPk8::9l9zz487QZK7iaqmcQQ05g` |
| Delete a Company’s Document Attachment | DELETE | `/documentAttachments({{documentAttachmentId}})` | `conn_mod_def::GJ46zf-_HwM::EAcOAYBVQgCIjdzpbfqCYQ` |
| Update a Company’s Document Attachment | PATCH | `/documentAttachments({{documentAttachmentId}})` | `conn_mod_def::GJ46zqiM6RE::vRn_Whp8SwiCV4OBgQhTcA` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee (by Company and Employee ID) | GET | `/employees({{employeeId}})` | `conn_mod_def::GJ46z4KcRpE::yqRT-xA7SOiR2O9k2sBJ2A` |
| Create an Employee in a Company | POST | `/employees` | `conn_mod_def::GJ46zqzL73M::nlB3_pBKRGem7cr4TPzN2w` |
| Delete a Company's Employee | DELETE | `/employees({{employeeId}})` | `conn_mod_def::GJ46zruorXY::PAQgqh_FRFCFbyXUOtaenw` |
| Update a Company's Employee | PATCH | `/employees({{employeeId}})` | `conn_mod_def::GJ46z4ixWNI::lkK44RcHSfGagO_QsMI9Jw` |

### FixedAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Fixed Asset | GET | `/fixedAssets({{fixedAssetId}})` | `conn_mod_def::GJ460EeDp4g::0iS69rLvRM6UydjquItF3Q` |
| Create a Company's Fixed Asset | POST | `/fixedAssets({{fixedAssetId}})` | `conn_mod_def::GJ46z7MbPZs::pIJpOIH9TfS7vQz5ziP4uw` |
| Delete a Company's Fixed Asset | DELETE | `/fixedAssets({{fixedAssetId}})` | `conn_mod_def::GJ460E8qkvM::C-l_80EjQsOwov3Wol8p4Q` |
| Update a Company's Fixed Asset | PATCH | `/fixedAssets({{fixedAssetId}})` | `conn_mod_def::GJ460ExFu58::8jfGufUVQ4yZig-QNc9UPA` |

### FixedAssetLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company’s Fixed Asset Location | GET | `/fixedAssetLocations({{fixedAssetLocationId}})` | `conn_mod_def::GJ460QcifOA::ULpbN7pITWOKhplDwlSC7A` |
| Create a Company's Fixed Asset Location | POST | `/fixedAssetLocations({{fixedAssetLocationId}})` | `conn_mod_def::GJ460ECAX-Q::V5QZoSOhS0yxgFd6WVMsBw` |
| Delete a Company's Fixed Asset Location | DELETE | `/fixedAssetLocations({{fixedAssetLocationId}})` | `conn_mod_def::GJ460IEj1jQ::ndhoTKV_Tl-EZMfR7zzuaA` |
| Update a Company's Fixed Asset Location | PATCH | `/fixedAssetLocations({{fixedAssetLocationId}})` | `conn_mod_def::GJ460UYVuQI::Te-9kHStQyWJARsWZqR1QA` |

### ItemCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item Category (Company Scoped) | GET | `/itemCategories({{itemCategoryId}})` | `conn_mod_def::GJ460yeePj4::inQY2ZnbQkuTtEWnQPRYOw` |
| Create an Item Category for a Company | POST | `/itemCategories` | `conn_mod_def::GJ4603_H6F0::New1p1p2TgmN7WTUNSVjWg` |
| Delete a Company's Item Category | DELETE | `/itemCategories({{itemCategoryId}})` | `conn_mod_def::GJ460yqEy-U::_rmHtT30RvaV1jsS7CfgTg` |

1 more ItemCategories actions are available through search.

This lists 90 of 260 actions. For anything not here, call `search_one_platform_actions` with platform `microsoft-dynamics-365-business-central`. The full catalog is at https://www.withone.ai/knowledge/microsoft-dynamics-365-business-central.

## When a call fails

The error comes from Microsoft Dynamics 365 Business Central, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/microsoft-dynamics-365-business-central

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
