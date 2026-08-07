---
name: sevdesk
description: sevdesk is a cloud-based accounting and invoicing platform that provides tools for bookkeeping, expense tracking, billing, and tax-related workflows, allowing small businesses, freelancers, and accountants to manage financial operations and connect data through integrations and APIs. Read and write Sevdesk data through One: creditnote, invoice, orders, voucher, checkaccounttransaction, checkaccount and more, 154 actions with real parameter documentation. Use whenever the user asks to look something up in Sevdesk, create or update a record there, or build code against the Sevdesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sevdesk
  generated-from: one-knowledge-base
---

# Sevdesk through One

sevdesk is a cloud-based accounting and invoicing platform that provides tools for bookkeeping, expense tracking, billing, and tax-related workflows, allowing small businesses, freelancers, and accountants to manage financial operations and connect data through integrations and APIs.

One exposes Sevdesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sevdesk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sevdesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sevdesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CreditNote

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Credit Note | GET | `/api/v1/Export/creditNoteCsv` | `conn_mod_def::GLMKwwYkBBA::NfoGVkSoTJaRDCFAHcf3zg` |
| Find Credit Note By ID | GET | `/api/v1/CreditNote/{{creditNoteId}}` | `conn_mod_def::GLMKwW8Xxug::lbbsHgTlQ7ad7os4LYeTcg` |
| Retrieve Credit Note | GET | `/api/v1/CreditNote` | `conn_mod_def::GLMKwkBVokg::xfDmnFrNS1-9L79hLu70bQ` |
| Send Credit Note By Printing | GET | `/api/v1/CreditNote/{{creditNoteId}}/sendByWithRender` | `conn_mod_def::GLMKwhffLKg::bMa74i0CQGCazcynrvxPUg` |
| Book A Credit Note | PUT | `/api/v1/CreditNote/{{creditNoteId}}/bookAmount` | `conn_mod_def::GLMKwOqMKrg::9L9gdQQJRu26Mk0Red2Mkg` |
| Create A New Credit Note | POST | `/api/v1/CreditNote/Factory/saveCreditNote` | `conn_mod_def::GLMKwOuiuzg::SORkRl-PRc-xjOSVvsMqcw` |
| Creates A New Credit Note From A Voucher | POST | `/api/v1/CreditNote/Factory/createFromVoucher` | `conn_mod_def::GLMKwPGjF9A::-u_lvvwKR4ODDUeBAIflNQ` |
| Creates A New Credit Note From An Invoice | POST | `/api/v1/CreditNote/Factory/createFromInvoice` | `conn_mod_def::GLMKwOFQ7nA::AGtn5o4MS_ywfmm6SPWxNQ` |
| Deletes An Credit Note | DELETE | `/api/v1/CreditNote/{{creditNoteId}}` | `conn_mod_def::GLMKwWkdPoA::uXfakll8TjC9rAYJMR3eIA` |
| Enshrine | PUT | `/api/v1/CreditNote/{{creditNoteId}}/enshrine` | `conn_mod_def::GLMKwWuvifA::6uOvsrxXQQqtNr42m8zBGg` |
| Mark Credit Note As Sent | PUT | `/api/v1/CreditNote/{{creditNoteId}}/sendBy` | `conn_mod_def::GLMKwXzkbkg::x-de2gXXTw2zbQNVbNP0bA` |
| Reset Status To Draft | PUT | `/api/v1/CreditNote/{{creditNoteId}}/resetToDraft` | `conn_mod_def::GLMKwYRuPYg::7ThnlmzhQaKaaTgdZfyW9w` |

4 more CreditNote actions are available through search.

### Invoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If An Invoice Is Already Partially Paid | GET | `/api/v1/Invoice/{{invoiceId}}/getIsPartiallyPaid` | `conn_mod_def::GLMKxP0CKXg::Fo_7ybe4RfulZf_zttcOeQ` |
| Find Invoice By ID | GET | `/api/v1/Invoice/{{invoiceId}}` | `conn_mod_def::GLMKxiuhXmA::utu_I5wtQRebdjfHqh8HmA` |
| Book An Invoice | PUT | `/api/v1/Invoice/{{invoiceId}}/bookAmount` | `conn_mod_def::GLMKxPQoBKg::jbjDlEzwQguV3HOqMLfVUA` |
| Cancel an Invoice - Create Cancellation Invoice | POST | `/api/v1/Invoice/{{invoiceId}}/cancelInvoice` | `conn_mod_def::GLMKxPXFNgA::IU4WdvDmTg-frkQRFPhxXA` |
| Create A New Invoice | POST | `/api/v1/Invoice/Factory/saveInvoice` | `conn_mod_def::GLMKxSU2mMA::gG9KPm5iRviLtCaU2ja22g` |
| Enshrine | PUT | `/api/v1/Invoice/{{invoiceId}}/enshrine` | `conn_mod_def::GLMKxiuYs6A::S8_LUdQHRpm_E4-VWugHtA` |
| Mark Invoice As Sent | PUT | `/api/v1/Invoice/{{invoiceId}}/sendBy` | `conn_mod_def::GLMKxtXBwIg::pHQ6ZfmPS2GWYb5m7DN2NA` |
| Render The Pdf Document Of An Invoice | POST | `/api/v1/Invoice/{{invoiceId}}/render` | `conn_mod_def::GLMKxtfor5g::QBc82y3_Rnqok7gYaAfXVQ` |
| Reset Status To Draft | PUT | `/api/v1/Invoice/{{invoiceId}}/resetToDraft` | `conn_mod_def::GLMKxuUjVBA::tsLD0sYtTiy_0u-WUmZX8Q` |
| Reset Status To Open | PUT | `/api/v1/Invoice/{{invoiceId}}/resetToOpen` | `conn_mod_def::GLMKxuaQeKA::E2Es9IVdTE2NGFyROKGW7w` |
| Update An Invoice Template | PUT | `/api/v1/Invoice/{{invoiceId}}/changeParameter` | `conn_mod_def::GLMKyAImgkg::FilU3Cz0QrGi44ADtRlsyQ` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Order By ID | GET | `/api/v1/Order/{{orderId}}` | `conn_mod_def::GLMKya0pxVA::uuVKPk4RQ6SESY1j9XG2Vg` |
| Retrieve Orders | GET | `/api/v1/Order` | `conn_mod_def::GLMKypBkXTA::tQ4Tw1p1TpSjlf6BQLye0g` |
| Retrieve Pdf Document Of An Order | GET | `/api/v1/Order/{{orderId}}/getPdf` | `conn_mod_def::GLMKypeQeCg::mVnzKdaxSjieORu3QW1E-w` |
| Create A New Order | POST | `/api/v1/Order/Factory/saveOrder` | `conn_mod_def::GLMKyBPTMpg::u7AkcZN2QeaAGOujJNZoVQ` |
| Create Contract Note From Order | POST | `/api/v1/Order/Factory/createContractNoteFromOrder` | `conn_mod_def::GLMKyfACMpA::k7h9OoFBSzCkYVu_3dKYcw` |
| Create Packing List From Order | POST | `/api/v1/Order/Factory/createPackingListFromOrder` | `conn_mod_def::GLMKycMtsjA::sUZ9rjFpQkqpCla2OlTWzA` |
| Mark Order As Sent | PUT | `/api/v1/Order/{{orderId}}/sendBy` | `conn_mod_def::GLMKynYlL9A::yO2pE_NkQRON5J2P4cBwFg` |
| Send Order Via Email | POST | `/api/v1/Order/{{orderId}}/sendViaEmail` | `conn_mod_def::GLMKy4kEGYA::1YW6HfyGRb6dPtHnRrnvrQ` |
| Update An Existing Order | PUT | `/api/v1/Order/{{orderId}}` | `conn_mod_def::GLMKy9t3O0g::HkaYsA6QQEKNe2BcpZrfbw` |

### Voucher

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Voucher By ID | GET | `/api/v1/Voucher/{{voucherId}}` | `conn_mod_def::GLMKzyMGS2g::GueqzGNmRNii4fo22IKUZA` |
| Book A Voucher | PUT | `/api/v1/Voucher/{{voucherId}}/bookAmount` | `conn_mod_def::GLMKzqIqFvA::WlvKIW-HRtuLLu52JkAAGA` |
| Create A New Voucher | POST | `/api/v1/Voucher/Factory/saveVoucher` | `conn_mod_def::GLMKz1UBVqg::9QlbwjqXRjSjuFFYj1IkdA` |
| Enshrine | PUT | `/api/v1/Voucher/{{voucherId}}/enshrine` | `conn_mod_def::GLMKzxyKt9g::7u9NyqG-QdKMLH8cthvMCw` |
| Reset Status To Draft | PUT | `/api/v1/Voucher/{{voucherId}}/resetToDraft` | `conn_mod_def::GLMK0QVWfjg::Argj38pjTfiXZRumZVg5Ow` |
| Reset Status To Open | PUT | `/api/v1/Voucher/{{voucherId}}/resetToOpen` | `conn_mod_def::GLMKz8zHXyA::o0YvNA-2TmCGJvvBIOPc2A` |
| Update An Existing Voucher | PUT | `/api/v1/Voucher/{{voucherId}}` | `conn_mod_def::GLMK0Z7jPUg::W2mqGjCNTCSLYEqTS_JDkg` |
| Upload Voucher File | POST | `/api/v1/Voucher/Factory/uploadTempFile` | `conn_mod_def::GLMK0Z8CH4g::gOeB5NOsSO6AQg2aNVKbsA` |

### CheckAccountTransaction

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Check Account Transaction By ID | GET | `/api/v1/CheckAccountTransaction/{{checkAccountTransactionId}}` | `conn_mod_def::GLMKu_qiEEg::bYdTjaIyT4SYMUzcmqCy4Q` |
| Retrieve Transactions | GET | `/api/v1/CheckAccountTransaction` | `conn_mod_def::GLMKvBvI9NA::2WjVOB3hRPaU5iNwtfcnrw` |
| Create A New Transaction | POST | `/api/v1/CheckAccountTransaction` | `conn_mod_def::GLMKuzoj1bg::WD1UCPANTnWDHJQYqPT5lw` |
| Deletes A Check Account Transaction | DELETE | `/api/v1/CheckAccountTransaction/{{checkAccountTransactionId}}` | `conn_mod_def::GLMKu1LK4qA::waGBWI-US4KtCDSzV9wytg` |
| Enshrine | PUT | `/api/v1/CheckAccountTransaction/{{checkAccountTransactionId}}/enshrine` | `conn_mod_def::GLMKu9BtEig::r8CH9p8SS3u9f0NP1TASig` |
| Update An Existing Check Account Transaction | PUT | `/api/v1/CheckAccountTransaction/{{checkAccountTransactionId}}` | `conn_mod_def::GLMKu9kjMFA::jf8Hf9xZQa2iBY6o7xq8_Q` |

### CheckAccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Check Account By ID | GET | `/api/v1/CheckAccount/{{checkAccountId}}` | `conn_mod_def::GLMKup4d5QA::MWGuNdFzSKG2yHyaZBiHqg` |
| Create A New Clearing Account | POST | `/api/v1/CheckAccount/Factory/clearingAccount` | `conn_mod_def::GLMKuq9610A::myK_ilA8TfuzVCys_ce-1g` |
| Create A New File Import Account | POST | `/api/v1/CheckAccount/Factory/fileImportAccount` | `conn_mod_def::GLMKuptejlA::r2Z2AmZ9TE2jJt-oKgm2iw` |
| Deletes A Check Account | DELETE | `/api/v1/CheckAccount/{{checkAccountId}}` | `conn_mod_def::GLMKuqcXq3g::NqklxCY1TY6rffk_ovbz2g` |
| Update An Existing Check Account | PUT | `/api/v1/CheckAccount/{{checkAccountId}}` | `conn_mod_def::GLMKuzx3bmA::P9FGgyC9SS26zCcF1SHaiw` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If A Customer Number Is Available | GET | `/api/v1/Contact/Mapper/checkCustomerNumberAvailability` | `conn_mod_def::GLMKvWeBXdA::nwIu1UVMRJm58z_bjPUpoQ` |
| Export Contact | GET | `/api/v1/Export/contactListCsv` | `conn_mod_def::GLMKwwZLAIg::zrs-jRDwSGm0DaODbcroMg` |
| Get Next Free Customer Number | GET | `/api/v1/Contact/Factory/getNextCustomerNumber` | `conn_mod_def::GLMKvhUOnIg::J7IqsF1vSsmaPjmYvFwmZw` |
| Deletes A Contact | DELETE | `/api/v1/Contact/{{contactId}}` | `conn_mod_def::GLMKvWUB3uA::PntDVyGeS2auo4k9O9CIqQ` |
| Update A Existing Contact | PUT | `/api/v1/Contact/{{contactId}}` | `conn_mod_def::GLMKvhttrzg::Ch9j7UmVT1-28RaSs9Xb-w` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Contact By ID | GET | `/api/v1/Contact/{{contactId}}` | `conn_mod_def::GLMKvZOyL9g::dCaWbS5vSWmOdIYuTQGKzQ` |
| Find Contacts By Custom Field Value | GET | `/api/v1/Contact/Factory/findContactsByCustomFieldValue` | `conn_mod_def::GLMKvXucnSA::mvZaDOKtRQOCGl3uPP8M8w` |
| Get Number Of All Items | GET | `/api/v1/Contact/{{contactId}}/getTabsItemCount` | `conn_mod_def::GLMKvhs2uOg::WonzMWI-SqeP9vuh0nTChQ` |
| Retrieve Contacts | GET | `/api/v1/Contact` | `conn_mod_def::GLMKvhKaQSg::z24Fp9t_TFaF50KrE-p5AQ` |
| Create A New Contact | POST | `/api/v1/Contact` | `conn_mod_def::GLMKvZIfO5g::AWGo4cmOTb6qBzDJfeqcXg` |

### ContactCustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Contact Fields #1 | GET | `/api/v1/ContactCustomField` | `conn_mod_def::GLMKwEuw9gg::vUsPqTYzTD6ZXXyu3bn45Q` |
| Retrieve Contact Fields #2 | GET | `/api/v1/ContactCustomField/{{contactCustomFieldId}}` | `conn_mod_def::GLMKwFB8USg::E5cyISGoSoSqzePr9BMfcA` |
| Create Contact Field | POST | `/api/v1/ContactCustomField` | `conn_mod_def::GLMKvpnRB_g::TuXmGsuVSQec4N4ynvtnpQ` |
| Delete A Contact Field | DELETE | `/api/v1/ContactCustomField/{{contactCustomFieldId}}` | `conn_mod_def::GLMKv0T-ThA::XhmMRJnIRM6HpNG68DFWGw` |
| Update A Contact Field | PUT | `/api/v1/ContactCustomField/{{contactCustomFieldId}}` | `conn_mod_def::GLMKwFeJ39A::5efTppLKQQOonWwR7-snTg` |

### AccountingContact

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Accounting Contact By ID | GET | `/api/v1/AccountingContact/{{accountingContactId}}` | `conn_mod_def::GLMKuSPDPJg::1c8McfEESX2Tfgz9rv2UkA` |
| Retrieve Accounting Contact | GET | `/api/v1/AccountingContact` | `conn_mod_def::GLMKuWpf9Tg::lLMySk2cTpKWqGbu1X-7CA` |
| Create A New Accounting Contact | POST | `/api/v1/AccountingContact` | `conn_mod_def::GLMKuSEEDPg::mQrJ0GAJSvm9vd02F7zvZA` |
| Deletes An Accounting Contact | DELETE | `/api/v1/AccountingContact/{{accountingContactId}}` | `conn_mod_def::GLMKug8RKsA::2fJ-jicwSYetNGah7gLCcQ` |
| Update An Existing Accounting Contact | PUT | `/api/v1/AccountingContact/{{accountingContactId}}` | `conn_mod_def::GLMKuSYifaA::ajgZaqzwSNOizUYA2HsHZA` |

### Export

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Datev | GET | `/api/v1/Export/datevCSV` | `conn_mod_def::GLMKwsw83YA::mkmeAjEjRrquf4ZfAQ4hLQ` |
| Export Invoice As Zip | GET | `/api/v1/Export/invoiceZip` | `conn_mod_def::GLMKw43PM6g::9V7DJ8V6Q0-5dglf9w4VwQ` |
| Export Voucher Zip | GET | `/api/v1/Export/voucherZip` | `conn_mod_def::GLMKw86lDnA::qUgZia13RDCrNpTT6kH1RA` |
| Start DATEV CSV ZIP Export | GET | `/api/v1/Export/createDatevCsvZipExportJob` | `conn_mod_def::GLMKxGk2g7A::XGJ74AvgR-OlZOMR03yfKQ` |
| Start DATEV XML ZIP Export | GET | `/api/v1/Export/createDatevXmlZipExportJob` | `conn_mod_def::GLMKxHT5k7g::QV5H2F0mRsW_1B6yIDKv_g` |

### Parts

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Part By ID | GET | `/api/v1/Part/{{partId}}` | `conn_mod_def::GLMKzE98oeA::RdMGwqZiTPukLpiajq5Jjg` |
| Get Stock Of A Part | GET | `/api/v1/Part/{{partId}}/getStock` | `conn_mod_def::GLMKzE_pv3g::6mfiEJw9QWW9djaJvX94Pw` |
| Retrieve Parts | GET | `/api/v1/Part` | `conn_mod_def::GLMKzFZWnWg::E2neE-Y1RsO1jan1Hq9WXQ` |
| Create A New Part | POST | `/api/v1/Part` | `conn_mod_def::GLMKzFNVNKg::etGBMN3mTnuwx0JwzTRH6Q` |
| Update An Existing Part | PUT | `/api/v1/Part/{{partId}}` | `conn_mod_def::GLMKzNiI97g::HIMo4l6AR1u8Q3mf1uTtFw` |

### ReceiptGuidance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Account Guides | GET | `/api/v1/ReceiptGuidance/forAllAccounts` | `conn_mod_def::GLMKzxx4bEA::olyXhe2FS4Ca66R-5FLb_A` |
| Get Guidance By Account Number | GET | `/api/v1/ReceiptGuidance/forAccountNumber` | `conn_mod_def::GLMKzySs10g::x1nebF4dTA2Z-zvYpC7ZiA` |
| Get Guidance By Tax Rule | GET | `/api/v1/ReceiptGuidance/forTaxRule` | `conn_mod_def::GLMKz-a7tFg::vE0xUTiTTayHVFCMnsUpIQ` |
| Get Guidance For Expense Accounts | GET | `/api/v1/ReceiptGuidance/forExpense` | `conn_mod_def::GLMKz83Z_9A::-4D0ck2QQgye91G1Uw0ucQ` |
| Get Guidance For Revenue Accounts | GET | `/api/v1/ReceiptGuidance/forRevenue` | `conn_mod_def::GLMKz8zJXtg::t0KHjlAGRuWDcOF6Dr8cTg` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Invoices | GET | `/api/v1/Invoice` | `conn_mod_def::GLMKxvE3Utg::c_zLBMgHSGalUg0ShqRgbQ` |
| Retrieve XML Of An E-Invoice | GET | `/api/v1/Invoice/{{invoiceId}}/getXml` | `conn_mod_def::GLMKx2wKg-A::g4Kj1aDbRfm0ekmhUobQkw` |
| Create Invoice From Order | POST | `/api/v1/Invoice/Factory/createInvoiceFromOrder` | `conn_mod_def::GLMKxi5ZEAg::PAiw8-PNQ6WH5Fl68ZMIFw` |
| Send Invoice Via Email | POST | `/api/v1/Invoice/{{invoiceId}}/sendViaEmail` | `conn_mod_def::GLMKx3xUvgA::oiMAe0ogQliTxqAQzuEtHQ` |

This lists 90 of 154 actions. For anything not here, call `search_one_platform_actions` with platform `sevdesk`. The full catalog is at https://www.withone.ai/knowledge/sevdesk.

## When a call fails

The error comes from Sevdesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sevdesk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
