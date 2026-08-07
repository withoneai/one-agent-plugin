---
name: shippo
description: Shippo is a RESTful, multi-carrier shipping API that lets developers easily compare real-time rates, purchase labels, validate addresses, track shipments, and handle international logistics through one unified integration. Read and write Shippo data through One: carrieraccounts, batches, shipments, webhooks, userparceltemplates, addresses and more, 70 actions with real parameter documentation. Use whenever the user asks to look something up in Shippo, create or update a record there, or build code against the Shippo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shippo
  generated-from: one-knowledge-base
---

# Shippo through One

Shippo is a RESTful, multi-carrier shipping API that lets developers easily compare real-time rates, purchase labels, validate addresses, track shipments, and handle international logistics through one unified integration.

One exposes Shippo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shippo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shippo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shippo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CarrierAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Carrier Registration Status | GET | `/carrier_accounts/reg-status` | `conn_mod_def::GJ7E1NhoAp0::AdOj-Bq0S3WI8hci5Nbbqw` |
| Initiate OAuth2 Sign-in for a Carrier Account | GET | `/carrier_accounts/{{carrierAccountObjectId}}/signin/initiate` | `conn_mod_def::GJ7E1MbAHG8::goUw2maaS7OZBCAHeNeQ_w` |
| List Carrier Accounts | GET | `/carrier_accounts` | `conn_mod_def::GJ7E1M884bM::brdk9ushRMKQ60IV7vWpUw` |
| Retrieve a Carrier Account | GET | `/carrier_accounts/{{carrierAccountId}}` | `conn_mod_def::GJ7E1NWnxCE::aEtsVe2FSW25qvkFam9qgA` |
| Create a Carrier Account | POST | `/carrier_accounts` | `conn_mod_def::GJ7E1LvRzKs::mD8ljD3FRPKY-wcrJXUtYQ` |
| Register a New Carrier Account | POST | `/carrier_accounts/register/new` | `conn_mod_def::GJ7E1EMFR9I::MmeuJVTdRtuI6LaF3fhEsA` |
| Update a Carrier Account | PUT | `/carrier_accounts/{{carrierAccountId}}` | `conn_mod_def::GJ7E1bMqAhQ::G2j4tBYESI2lW32HLbe1tw` |

### Batches

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Batch | GET | `/batches/{{batchId}}` | `conn_mod_def::GJ7E1Es67a8::AbHYi3onQF61qERx3uaUNA` |
| Add Shipments to a Batch | POST | `/batches/{{batchId}}/add_shipments` | `conn_mod_def::GJ7E08roVMo::Jd5DlGr_TjiJFOpSncFvpQ` |
| Create a Batch | POST | `/batches` | `conn_mod_def::GJ7E1EdFCY8::ja8ScdRvTueBKqw4om1Svg` |
| Purchase a Batch | POST | `/batches/{{batchId}}/purchase` | `conn_mod_def::GJ7E1D0ch5E::eKrWfZpVQDqxUIctjpv0Ag` |
| Remove Shipments From a Batch | POST | `/batches/{{batchId}}/remove_shipments` | `conn_mod_def::GJ7E1El5DR8::cfPL2kUfQsuZP_z6QeGqeg` |

### Shipments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shipment’s Rates | GET | `/shipments/{{shipmentId}}/rates` | `conn_mod_def::GJ7E1_99vYw::11VwWOlvQ5-bXX91UN8WKg` |
| List a Shipment’s Rates in a Specific Currency | GET | `/shipments/{{shipmentId}}/rates/{{currencyCode}}` | `conn_mod_def::GJ7E1-znLDI::TlC-pJbcRtqaIOGo6KpzlA` |
| List Shipments | GET | `/shipments` | `conn_mod_def::GJ7E2TS-8U0::KsCGCktxRlG-waWQ85KBuQ` |
| Retrieve a Shipment | GET | `/shipments/{{shipmentId}}` | `conn_mod_def::GJ7E2Zf9em0::gjB97qiUSruteBc6yU9e0w` |
| Create a Shipment | POST | `/shipments` | `conn_mod_def::GJ7E2RdYD7M::lkW3FWfwQ9mLDgVhMt33uQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJ7E24FjWiA::nU-150pZQ3qSakDErFfM0A` |
| Retrieve a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ7E2zmVQ7c::sc48r-9UTjWO2uOvu8VqnA` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ7E2zfCo3g::lSk9UL-4QBeEv86wN1WE2w` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ7E2zCzznQ::pJL6xSOFT3KKtfKlJyB_zw` |
| Update a Webhook | PUT | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ7E2zIpPts::OmmR2djATgiXyKJv2ChIBQ` |

### UserParcelTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Parcel Templates | GET | `/user-parcel-templates` | `conn_mod_def::GJ7E2swlelQ::inZFaDrrQJSsHZACTC67Aw` |
| Retrieve a User Parcel Template | GET | `/user-parcel-templates/{{userParcelTemplateObjectId}}` | `conn_mod_def::GJ7E2skIwU4::agRRLY-4RNGfT54V8fRHXg` |
| Create a User Parcel Template | POST | `/user-parcel-templates` | `conn_mod_def::GJ7E2saoXTs::mLa6wWyxSVCsXNJBVDW1jg` |
| Delete a User Parcel Template | DELETE | `/user-parcel-templates/{{userParcelTemplateObjectId}}` | `conn_mod_def::GJ7E2sp4mLA::ILdWFq8ATUudByNF996FIg` |
| Update a User Parcel Template | PUT | `/user-parcel-templates/{{userParcelTemplateObjectId}}` | `conn_mod_def::GJ7E2sbCQcE::wgkRBRi3R1it2fHwVb1fGQ` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Addresses | GET | `/addresses` | `conn_mod_def::GJ7E07gWs8s::t1-tELF_Tem9kJijpyQpbg` |
| Retrieve an Address | GET | `/addresses/{{addressId}}` | `conn_mod_def::GJ7E077lypk::XNn5hOaKSUCKP8e-7sWFNw` |
| Validate an Address (by Address ID) | GET | `/addresses/{{addressId}}/validate` | `conn_mod_def::GJ7E08fJYJ4::XsysqvBeTBGpomhV02eJWA` |
| Create an Address | POST | `/addresses` | `conn_mod_def::GJ7E09DDLjM::X1Lp3yQZRfW7jWNMeRB_GA` |

### ServiceGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Service Groups | GET | `/service-groups` | `conn_mod_def::GJ7E2R_B6q0::3E9z9XnvTl-c3aftQj6URw` |
| Create a Service Group | POST | `/service-groups` | `conn_mod_def::GJ7E2IGafbw::J4ADa_1TSkK0a3A9ofNMrg` |
| Delete a Service Group | DELETE | `/service-groups/{{serviceGroupId}}` | `conn_mod_def::GJ7E2PX0IQA::hlmdDYMHQeCrz04aZyMudQ` |
| Update a Service Group | PUT | `/service-groups` | `conn_mod_def::GJ7E2Qndbj8::HT-LbeNRTWOUN5pkheVKWg` |

### ShippoAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shippo Accounts | GET | `/shippo-accounts` | `conn_mod_def::GJ7E2au5Q4s::xfAUD2-bSJ2twXPNSQNSGg` |
| Retrieve a Shippo Account | GET | `/shippo-accounts/{{shippoAccountId}}` | `conn_mod_def::GJ7E2cEJnYE::n7iIL-vVQWGTj3PR8ctbCw` |
| Create a Shippo Managed Account | POST | `/shippo-accounts` | `conn_mod_def::GJ7E2aHt69o::A2bOPtq-TOeGar_8Dch5Jw` |
| Update a Shippo Account | PUT | `/shippo-accounts/{{shippoAccountId}}` | `conn_mod_def::GJ7E2adunr4::riyVX8fDQp2CgsEV_3YdFg` |

### CustomsDeclarations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customs Declarations | GET | `/customs/declarations` | `conn_mod_def::GJ7E1VAf4uU::F2mxnY7sTrmosnntU4VZ6Q` |
| Retrieve a Customs Declaration | GET | `/customs/declarations/{{customsDeclarationId}}` | `conn_mod_def::GJ7E1ihIUCA::YtJyuwvIRbiwrxquoSLZKw` |
| Create a Customs Declaration | POST | `/customs/declarations` | `conn_mod_def::GJ7E1U5LgzQ::w1sXHE39R-SlM9JtTiXF_A` |

### CustomsItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customs Items | GET | `/customs/items` | `conn_mod_def::GJ7E1l5Qna8::NTavLDf2S2eJ3BErxA1Lqw` |
| Retrieve a Customs Item | GET | `/customs/items/{{customsItemId}}` | `conn_mod_def::GJ7E1jGTMXE::QcdAp-87SSePV1bIIripQQ` |
| Create a Customs Item | POST | `/customs/items` | `conn_mod_def::GJ7E1kdAsBM::J99ktd2WSA2T1qCJqvUNDg` |

### Manifests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Manifests | GET | `/manifests` | `conn_mod_def::GJ7E1t2Too0::fWnuLHhgTleLXONeECHTfg` |
| Retrieve a Manifest | GET | `/manifests/{{manifestId}}` | `conn_mod_def::GJ7E1tIcijs::4pkFdDwES3aNx4QucV2i2w` |
| Create a New Manifest | POST | `/manifests` | `conn_mod_def::GJ7E1jKKP10::YvwZoEijSZG47qk6ONRzqg` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/orders` | `conn_mod_def::GJ7E1uUWV2Q::HsI8ub_vQ1GuVACk26w9lA` |
| Retrieve an Order | GET | `/orders/{{orderId}}` | `conn_mod_def::GJ7E1uXch3g::7WBbiYmaTXyearrodyz_AA` |
| Create an Order | POST | `/orders` | `conn_mod_def::GJ7E1tJ2oZw::vbmSw_DxRSiX34cprTE5rQ` |

### Parcels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Parcels | GET | `/parcels` | `conn_mod_def::GJ7E12Egl2A::ofpCrT_jTu2rz92jPy3y2A` |
| Retrieve a Parcel | GET | `/parcels/{{parcelId}}` | `conn_mod_def::GJ7E11qXitI::VeWUXTAsTN2Jzv3Pyp3YWA` |
| Create a Parcel | POST | `/parcels` | `conn_mod_def::GJ7E12r0q0k::rrcZP_9dRmWwgVDCw1v6SQ` |

### LiveRatesSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Default Parcel Template (Live Rates Settings) | GET | `/live-rates/settings/parcel-template` | `conn_mod_def::GJ7E1_P-0EI::9C20jET8TimixO5qIUD5xg` |
| Clear Default Live Rates Parcel Template | DELETE | `/live-rates/settings/parcel-template` | `conn_mod_def::GJ7E19bhd_o::FESq3QKDQg-k__03i1pTlA` |
| Update Default Parcel Template for Live Rates | PUT | `/live-rates/settings/parcel-template` | `conn_mod_def::GJ7E2H6mQO8::8Frz8aRxRDCEFEwcQgpGOA` |

### Refunds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Refunds | GET | `/refunds/` | `conn_mod_def::GJ7E2HMFw90::MgK2ageQRvaIu5qPfFADFw` |
| Retrieve a Refund | GET | `/refunds/{{refundId}}` | `conn_mod_def::GJ7E2HAzQh8::KO8foVrJSA2I-w5OT8TIhQ` |
| Create a Refund | POST | `/refunds` | `conn_mod_def::GJ7E2Hl-qEo::XIqUafNEQF2M3E65xsV3fg` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shipping Labels (Transactions) | GET | `/transactions` | `conn_mod_def::GJ7E2lXysDA::Vvwk3XouSeqTKnWOLyezWA` |
| Retrieve a Shipping Label (Get a Transaction) | GET | `/transactions/{{transactionId}}` | `conn_mod_def::GJ7E2jh-V7Y::OAcLFP9XQqmX5xYUXSUtvg` |
| Create a Shipping Label (Create Transaction) | POST | `/transactions` | `conn_mod_def::GJ7E2kEWXXE::wlRyi6ECTDCLR2jV56-oyw` |

### ParcelTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Carrier Parcel Templates | GET | `/parcel-templates` | `conn_mod_def::GJ7E1XD3RVU::hw7iXJhOR-yG4oqTrvQszA` |
| Retrieve a Carrier Parcel Template | GET | `/parcel-templates/{{carrierParcelTemplateToken}}` | `conn_mod_def::GJ7E1WIs_TE::EawpRfMWRDa5Ab39B-2uVg` |

### Tracks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shipment’s Tracking Status | GET | `/tracks/{{carrier}}/{{trackingNumber}}` | `conn_mod_def::GJ7E2jD-QsY::LkVvjUeYTHCg45WbwFo0Fw` |
| Register a Tracking Webhook (Create a Track) | POST | `/tracks` | `conn_mod_def::GJ7E2iwkHww::vEUxJXEzSEypsFTq5uK7Uw` |

### LiveRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Live Rates Request | POST | `/live-rates` | `conn_mod_def::GJ7E2Ab5vMs::g5NsfYknQWCuIvSbFQkyJw` |

### Pickups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Pickup | POST | `/pickups` | `conn_mod_def::GJ7E100pSEM::k7fyEeotSp2c5lnMwY_ZYA` |

### Rates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Rate | GET | `/rates/{{rateId}}` | `conn_mod_def::GJ7E11KBcMo::6_Vzq13kQA-bs77TYScucQ` |

## When a call fails

The error comes from Shippo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shippo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
