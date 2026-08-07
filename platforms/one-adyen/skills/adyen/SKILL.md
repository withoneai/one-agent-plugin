---
name: adyen
description: Adyen is a financial technology platform that enables businesses to accept, process, and manage payments across online, mobile, and in-store channels while offering data insights, fraud prevention, and embedded financial products through a single unified API. Read and write Adyen data through One: payments, legalentities, allowedorigins, terminalorders, terminalsettings, transactionrules and more, 426 actions with real parameter documentation. Use whenever the user asks to look something up in Adyen, create or update a record there, or build code against the Adyen API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: adyen
  generated-from: one-knowledge-base
---

# Adyen through One

Adyen is a financial technology platform that enables businesses to accept, process, and manage payments across online, mobile, and in-store channels while offering data insights, fraud prevention, and embedded financial products through a single unified API.

One exposes Adyen through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `adyen` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Adyen is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Adyen account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an Authorisation | POST | `/pal/servlet/Payment/v68/cancel` | `conn_mod_def::GKJ8fUe2EDg::zxRIcqwmRCKl8LwsYIcIMw` |
| Cancel an Authorisation Using Your Reference | POST | `/pal/servlet/Payment/v68/technicalCancel` | `conn_mod_def::GKJ8fWLhnVA::YTBS0amZTRS4oN5jsHrjqQ` |
| Cancel an Authorised Payment | POST | `/v71/payments/{{paymentPspReference}}/cancels` | `conn_mod_def::GKJ8W2atrTg::-6iIYN7NSAavKzOUUtK-NA` |
| Cancel an In-Person Refund | POST | `/pal/servlet/Payment/v68/voidPendingRefund` | `conn_mod_def::GKJ8fUvQR7A::cIGGAQZlSd-ejaaA5GOfyQ` |
| Cancel or Refund a Payment | POST | `/pal/servlet/Payment/v68/cancelOrRefund` | `conn_mod_def::GKJ8fUSR9Kg::VUEY1QDDQOCwMlyl4f_Gyg` |
| Capture an Authorisation | POST | `/pal/servlet/Payment/v68/capture` | `conn_mod_def::GKJ8fXMU2Lg::PNbEzXXMQZGNb8alUo0Y8Q` |
| Capture an Authorised Payment | POST | `/payments/{{paymentPspReference}}/captures` | `conn_mod_def::GKJ8W4EH1Ng::01qveUkmR4Cr3rksTp966A` |
| Change the Authorised Amount | POST | `/pal/servlet/Payment/v68/adjustAuthorisation` | `conn_mod_def::GKJ8fgmsLVg::CSxeOJYTTXuzxr6DwILrqw` |
| Complete a 3DS Authorisation | POST | `/pal/servlet/Payment/v68/authorise3d` | `conn_mod_def::GKJ8fiVSsug::g9gtoOKCQ-ePr9hSxcQanA` |
| Complete a 3DS2 Authorisation | POST | `/pal/servlet/Payment/v68/authorise3ds2` | `conn_mod_def::GKJ8fiUkyQA::OOoNFLiASUmPb4nNWm_Jig` |
| Refund a Captured Payment | POST | `/pal/servlet/Payment/v68/refund` | `conn_mod_def::GKJ8frYiJ-A::oQ7kHDXPR5e71T5ykZ3KPw` |
| Refund a Captured Payment | POST | `/payments/{{paymentPspReference}}/refunds` | `conn_mod_def::GKJ8XrqWf4A::d0pQHno0ROqp-i4-98xDJA` |

4 more Payments actions are available through search.

### LegalEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Legal Entity | GET | `/lem/v4/legalEntities/{{id}}` | `conn_mod_def::GKJ8ZDGCkTg::_uly8OhwRkiMypom6E7yAQ` |
| Get a Legal Entity's Accepted Terms of Service Document | GET | `/lem/v4/legalEntities/{{id}}/acceptedTermsOfServiceDocument/{{termsofserviceacceptancereference}}` | `conn_mod_def::GKJ8ZMDIqvg::RccxGZcWTvuMnQYZMCM_-g` |
| Get a Legal Entity's PCI Questionnaire | GET | `/lem/v4/legalEntities/{{id}}/pciQuestionnaires/{{pciid}}` | `conn_mod_def::GKJ8ZbsSK2A::nVd1idnNTtm4i6cVE3ZcMA` |
| Get a Legal Entity's Terms of Service Status | GET | `/lem/v4/legalEntities/{{id}}/termsOfServiceStatus` | `conn_mod_def::GKJ8Zcr0yhA::ISGgvg7DTauXhOUxPDisMQ` |
| Accept Terms of Service for a Legal Entity | PATCH | `/lem/v4/legalEntities/{{id}}/termsOfService/{{termsofservicedocumentid}}` | `conn_mod_def::GKJ8YelFbXA::D6denQQtQBWAccAprVFlNg` |
| Calculate PCI Status of a Legal Entity | POST | `/lem/v4/legalEntities/{{id}}/pciQuestionnaires/signingRequired` | `conn_mod_def::GKJ8Yu4dsBg::5Iq1gYSCSYOtLNqIHgj3Ew` |
| Check a Legal Entity's Tax Electronic Delivery Consent Status | POST | `/lem/v4/legalEntities/{{id}}/checkTaxElectronicDeliveryConsent` | `conn_mod_def::GKJ8YweQqCA::xRxJBQPhR26PQIIgPWWwLQ` |
| Check a Legal Entity's Verification Errors | POST | `/lem/v4/legalEntities/{{id}}/checkVerificationErrors` | `conn_mod_def::GKJ8YwcNqPg::RmQX0jVwTGeT1kIcL5UonA` |
| Confirm Data Review for a Legal Entity | POST | `/lem/v4/legalEntities/{{id}}/confirmDataReview` | `conn_mod_def::GKJ8YueRY0g::znDndeERTAyO8j1X0Ei5FQ` |
| Create a Legal Entity | POST | `/lem/v4/legalEntities` | `conn_mod_def::GKJ8Y50hy6g::2udSFvX3Qw6j6Abi3tHzIw` |
| Get a Legal Entity's Terms of Service Document | POST | `/lem/v4/legalEntities/{{id}}/termsOfService` | `conn_mod_def::GKJ8Zc2natg::MFyX5iJgRRGc7gxQYUVsbg` |
| Request Periodic Data Review for a Legal Entity | POST | `/legalEntities/{{id}}/requestPeriodicReview` | `conn_mod_def::GKJ8ZsfSN-A::nHjJyCa5TiOSxM1nN0R1Ug` |

3 more LegalEntities actions are available through search.

### AllowedOrigins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's API Credential Allowed Origin | GET | `/v3/companies/{{companyId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins/{{originId}}` | `conn_mod_def::GKJ8cYS4ioA::yr9u2DMRTAaq6FEqO1FD9A` |
| Get a Merchant API Credential Allowed Origin | GET | `/merchants/{{merchantId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins/{{originId}}` | `conn_mod_def::GKJ8ciooj7A::vgMtEvvjRN6RTLCnmKd0yg` |
| Get My Allowed Origin Details | GET | `/v3/me/allowedOrigins/{{originId}}` | `conn_mod_def::GKJ8cVwN_PA::-i_g5sRgRgSCCz6GjjJ8CQ` |
| Get My Allowed Origins | GET | `/v3/me/allowedOrigins` | `conn_mod_def::GKJ8cZFSgig::TrQGrKAhRmyRFFDieFNz-A` |
| List a Company's API Credential Allowed Origins | GET | `/v3/companies/{{companyId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins` | `conn_mod_def::GKJ8bImOkfg::g1LzA-7pQcabR8e6AnUWIQ` |
| List a Merchant API Credential's Allowed Origins | GET | `/v3/merchants/{{merchantId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins` | `conn_mod_def::GKJ8bJKxh2g::16RfvnbXQAmFnhLutkTdnA` |
| Add Allowed Origin to Your API Credential | POST | `/v3/me/allowedOrigins` | `conn_mod_def::GKJ8Z5Lp_mg::0ssZKGcTSFWD3YiCBYXm4A` |
| Create an API Credential Allowed Origin for a Company | POST | `/v3/companies/{{companyId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins` | `conn_mod_def::GKJ8ahh8gPg::Ey4k585tQuuwRW0boiYr8A` |
| Create an API Credential Allowed Origin for a Merchant | POST | `/v3/merchants/{{merchantId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins` | `conn_mod_def::GKJ8ahSIcwg::esIQzecrTle31jGMOwFJ_w` |
| Delete a Company's API Credential Allowed Origin | DELETE | `/v3/companies/{{companyId}}/apiCredentials/{{apiCredentialId}}/allowedOrigins/{{originId}}` | `conn_mod_def::GKJ8a1nQuig::_XWdjnH2Sw2t33LTDSeADA` |
| Remove an Allowed Origin for the Current API Credential | DELETE | `/v3/me/allowedOrigins/{{originId}}` | `conn_mod_def::GKJ8doohxbg::gPHvS_T6RiCsrahD31JpQg` |

### TerminalOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Terminal Order | GET | `/v3/companies/{{companyId}}/terminalOrders/{{orderId}}` | `conn_mod_def::GKJ8cxfv2ng::oWxjazPqR9e55pQyDBrwMQ` |
| Get a Merchant Terminal Order | GET | `/v3/merchants/{{merchantId}}/terminalOrders/{{orderId}}` | `conn_mod_def::GKJ8cxf5KUg::_uqjnpF7Tsy7eiK-54aMHg` |
| List a Company's Terminal Orders | GET | `/v3/companies/{{companyId}}/terminalOrders` | `conn_mod_def::GKJ8bgxggpg::FbM1dTJ2SU-j2XSDPh4dhg` |
| List a Merchant's Terminal Orders | GET | `/v3/merchants/{{merchantId}}/terminalOrders` | `conn_mod_def::GKJ8bjAnYng::NFVRM70MTv2SRSgU5yQglQ` |
| Cancel a Company's Terminal Order | POST | `/v3/companies/{{companyId}}/terminalOrders/{{orderId}}/cancel` | `conn_mod_def::GKJ8aC-fZRg::iqTNpOxSQ_OmPZwYzElYbw` |
| Cancel a Merchant Terminal Order | POST | `/v3/merchants/{{merchantId}}/terminalOrders/{{orderId}}/cancel` | `conn_mod_def::GKJ8aEIdHSA::Su0N0K2ySN-cYMqpuWsySg` |
| Create a Company's Terminal Order | POST | `/v3/companies/{{companyId}}/terminalOrders` | `conn_mod_def::GKJ8arwSjjg::dFtsLtL4QHGBflJUrrfqPg` |
| Create a Merchant Terminal Order | POST | `/v3/merchants/{{merchantId}}/terminalOrders` | `conn_mod_def::GKJ8aswvcuA::u37cGvGaSD6xAWBblFuYig` |
| Update a Company's Terminal Order | PATCH | `/v3/companies/{{companyId}}/terminalOrders/{{orderId}}` | `conn_mod_def::GKJ8eIpKC-g::JnX1JRzzQYSNniew000XGw` |
| Update a Merchant's Terminal Order | PATCH | `/v3/merchants/{{merchantId}}/terminalOrders/{{orderId}}` | `conn_mod_def::GKJ8eSksVRg::Wotx4HZxS9S02aN24CcTwQ` |

### TerminalSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Terminal Settings | GET | `/v3/companies/{{companyId}}/terminalSettings` | `conn_mod_def::GKJ8dEDze5A::LfLNMblQSkGXo54trD437g` |
| Get a Merchant's Terminal Settings | GET | `/v3/merchants/{{merchantId}}/terminalSettings` | `conn_mod_def::GKJ8dEYFaRg::Cdxeh1LDTkCLVbZxLzMltw` |
| Get a Store's Terminal Settings | GET | `/v3/stores/{{storeId}}/terminalSettings` | `conn_mod_def::GKJ8dExoubg::mEVy9oQyT-SyYmyPgAjBVw` |
| Get a Store's Terminal Settings | GET | `/v3/merchants/{{merchantId}}/stores/{{reference}}/terminalSettings` | `conn_mod_def::GKJ8dFAK9lg::YY0RaJ0yTdeEM974CuJIow` |
| Get a Terminal's Settings | GET | `/v3/terminals/{{terminalId}}/terminalSettings` | `conn_mod_def::GKJ8dHEMHrg::lYRJEbYuSVuRawHpyZzbnA` |
| Update a Company's Terminal Settings | PATCH | `/v3/companies/{{companyId}}/terminalSettings` | `conn_mod_def::GKJ8eTK1ilA::itl-JsyCQgGZOizCnMJbEQ` |
| Update a Merchant's Terminal Settings | PATCH | `/v3/merchants/{{merchantId}}/terminalSettings` | `conn_mod_def::GKJ8eSt4veg::Kp046UW3QiuFAKfeybvpjA` |
| Update a Store's Terminal Settings | PATCH | `/v3/merchants/{{merchantId}}/stores/{{reference}}/terminalSettings` | `conn_mod_def::GKJ8eS1hKRA::dyllJjN5Q2CvH8dNZfYiOw` |
| Update a Store's Terminal Settings | PATCH | `/v3/stores/{{storeId}}/terminalSettings` | `conn_mod_def::GKJ8eTIgQ3g::-QXSijShRIy09PbqTlzw1g` |
| Update a Terminal's Settings | PATCH | `/v3/terminals/{{terminalId}}/terminalSettings` | `conn_mod_def::GKJ8ef4Parg::ZB0T0bB5QdmlhL-2yRtaLw` |

### TransactionRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction Rule | GET | `/bcl/v2/transactionRules/{{transactionRuleId}}` | `conn_mod_def::GKJ8VObyRXg::J8bXD4S1SxWNSSfvAuqHRw` |
| List a Balance Account's Transaction Rules | GET | `/bcl/v2/balanceAccounts/{{id}}/transactionRules` | `conn_mod_def::GKJ8VaE1YHg::RTrwDRKBT6eNR2Oks6w6Sw` |
| List a Balance Platform's Transaction Rules | GET | `/bcl/v2/balancePlatforms/{{id}}/transactionRules` | `conn_mod_def::GKJ8VZh8Chg::i-A_CYycSCWPlhHoYRBMqQ` |
| List a Payment Instrument Group's Transaction Rules | GET | `/bcl/v2/paymentInstrumentGroups/{{id}}/transactionRules` | `conn_mod_def::GKJ8Vkl90jg::l0CXP2PfSjq_kMJ7L_zzqg` |
| List a Payment Instrument's Transaction Rules | GET | `/paymentInstruments/{{id}}/transactionRules` | `conn_mod_def::GKJ8VbV-geA::BqbNFBSWSjmQIT5ZRn7_Hg` |
| List an Account Holder's Transaction Rules | GET | `/bcl/v2/accountHolders/{{id}}/transactionRules` | `conn_mod_def::GKJ8VknSfgA::XV8EaGk5QyKIm3Mkf0u9_g` |
| Create a Transaction Rule | POST | `/bcl/v2/transactionRules` | `conn_mod_def::GKJ8T8bYfXA::hb8XQ3hjSX-qqMfzcTELRg` |
| Delete a Transaction Rule | DELETE | `/bcl/v2/transactionRules/{{transactionRuleId}}` | `conn_mod_def::GKJ8UTNu6rg::lXkMHX7qR4WmETQHCtZxPw` |
| Update a Transaction Rule | PATCH | `/bcl/v2/transactionRules/{{transactionRuleId}}` | `conn_mod_def::GKJ8WNk6fSA::YGzs46BHR2Cv2n7RdAY1ag` |

### PaymentInstruments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Payment Instrument | GET | `/bcl/v2/paymentInstruments/{{id}}` | `conn_mod_def::GKJ8VDbn7Rg::3Dw1BVgnRGCgnwCxSr_oSQ` |
| Get a Payment Instrument's Network Token Activation Data | GET | `/bcl/v2/paymentInstruments/{{id}}/networkTokenActivationData` | `conn_mod_def::GKJ8VveEpfA::TxbUmDj-Q_aqvIVWFuMK7Q` |
| Get a Payment Instrument's PAN | GET | `/bcl/v2/paymentInstruments/{{id}}/reveal` | `conn_mod_def::GKJ8V4Zzi3g::zTA1gdZeTv6QL8e_-5iJZQ` |
| List a Balance Account's Payment Instruments | GET | `/bcl/v2/balanceAccounts/{{id}}/paymentInstruments` | `conn_mod_def::GKJ8Vvqqiog::jdZK4oHiTriLUhOSdbrmtQ` |
| Create a Payment Instrument | POST | `/bcl/v2/paymentInstruments` | `conn_mod_def::GKJ8T8FXmag::sXGAAv8GQzSv7sVZnQCdgw` |
| Create Network Token Provisioning Data for a Payment Instrument | POST | `/paymentInstruments/{{id}}/networkTokenActivationData` | `conn_mod_def::GKJ8UKS6-vA::PfuEz9EZREKrA7eaX23feQ` |
| Reveal a Payment Instrument's Data | POST | `/bcl/v2/paymentInstruments/reveal` | `conn_mod_def::GKJ8WC0p90A::k_CC_xDtS-ed8PAA6y6LKQ` |
| Update a Payment Instrument | PATCH | `/bcl/v2/paymentInstruments/{{id}}` | `conn_mod_def::GKJ8WMigv4g::uS-EDypkT--BhjBOYL20hQ` |
| Update a Payment Instrument's Authorized Card Users | PATCH | `/bcl/v2/paymentInstruments/{{paymentInstrumentId}}/authorisedCardUsers` | `conn_mod_def::GKJ8WNaYS2A::hmArFD6yQHGciYI5TVIvLA` |

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Merchant Store | GET | `/v3/merchants/{{merchantId}}/stores/{{storeId}}` | `conn_mod_def::GKJ8cMyobIA::DGyAmQa-QCyBTjkOdQzU_Q` |
| Get a Store | GET | `/v3/stores/{{storeId}}` | `conn_mod_def::GKJ8cMjboVg::j8HgVFmpTj2mDV_GaCInNQ` |
| List a Merchant's Stores | GET | `/v3/merchants/{{merchantId}}/stores` | `conn_mod_def::GKJ8btkK44g::S7Ca8shuRFylMvT5hF0_BA` |
| List Stores | GET | `/v3/stores` | `conn_mod_def::GKJ8b3dONWg::h_gV158bQrKz1EOO-tVxJw` |
| Create a Merchant Store | POST | `/v3/merchants/{{merchantId}}/stores` | `conn_mod_def::GKJ8afAc3xg::qRUhkJsSQ3mlfCaoMXU9TQ` |
| Create a Store | POST | `/stores` | `conn_mod_def::GKJ8afQ6oNA::NksKs7wORcSMZle_0zJtSw` |
| Get Stores Under an Account | POST | `/postfmapi/terminal/v1/getStoresUnderAccount` | `conn_mod_def::GKJ8hINjc6g::9W6cyc2NQva9k_TG9UiEWA` |
| Update a Merchant Store | PATCH | `/v3/merchants/{{merchantId}}/stores/{{storeId}}` | `conn_mod_def::GKJ8d_hbsaA::c2O0EO8eQYSePLYXId-acg` |
| Update a Store | PATCH | `/v3/stores/{{storeId}}` | `conn_mod_def::GKJ8d-qeueA::yP3Q_ROyTTuYjZ-gtOHwgA` |

### TerminalLogos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Terminal Logo | GET | `/v3/companies/{{companyId}}/terminalLogos` | `conn_mod_def::GKJ8dP9x8mg::Wk3qSh9BTlCpjqwL-QConw` |
| Get a Merchant's Terminal Logo | GET | `/v3/merchants/{{merchantId}}/terminalLogos` | `conn_mod_def::GKJ8dRefdgg::y_iqKkZvSWyLyZUV9CL2wQ` |
| Get a Store Terminal Logo for a Merchant | GET | `/v3/merchants/{{merchantId}}/stores/{{reference}}/terminalLogos` | `conn_mod_def::GKJ8dQww_kA::DfNUgTylTP-K1Mkxvhal1g` |
| Get a Terminal's Logo | GET | `/v3/terminals/{{terminalId}}/terminalLogos` | `conn_mod_def::GKJ8dQQUo2A::879-b3LNRe-wcQU5Nc9UYw` |
| Update a Company's Terminal Logo | PATCH | `/v3/companies/{{companyId}}/terminalLogos` | `conn_mod_def::GKJ8epodH7g::orHfZmAYQlKLPH5XW4mExg` |
| Update a Store Terminal Model Logo for a Merchant | PATCH | `/v3/merchants/{{merchantId}}/stores/{{reference}}/terminalLogos` | `conn_mod_def::GKJ8epA8HfA::1mNgm1r6RvGuz5sYWCwzwA` |
| Update a Store's Terminal Logo | PATCH | `/v3/stores/{{storeId}}/terminalLogos` | `conn_mod_def::GKJ8eppIpFg::KDITJl6pRt-Ja6M74IptbQ` |
| Update a Terminal's Logo | PATCH | `/v3/terminals/{{terminalId}}/terminalLogos` | `conn_mod_def::GKJ8ecsTWpg::8cjyQj-LSVSnGmCDe9m0Vw` |

This lists 90 of 426 actions. For anything not here, call `search_one_platform_actions` with platform `adyen`. The full catalog is at https://www.withone.ai/knowledge/adyen.

## When a call fails

The error comes from Adyen, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/adyen

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
