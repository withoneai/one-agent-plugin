---
name: shopify-storefront
description: Shopify Storefront allows you to create custom shopping experiences using Shopify’s Storefront API, giving full control over design and functionality of the eCommerce front-end. Read and write Shopify Storefront data through One: customers, cart, carts, cartdeliveryaddresses, customeraccesstokens, collections and more, 75 actions with real parameter documentation. Use whenever the user asks to look something up in Shopify Storefront, create or update a record there, or build code against the Shopify Storefront API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shopify-storefront
  generated-from: one-knowledge-base
---

# Shopify Storefront through One

Shopify Storefront allows you to create custom shopping experiences using Shopify’s Storefront API, giving full control over design and functionality of the eCommerce front-end.

One exposes Shopify Storefront through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shopify-storefront` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shopify Storefront is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shopify Storefront account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Customer (customerActivate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq-SMVEk::Ys4fPLT-Qn2AVDx3Z-Cozg` |
| Activate a Customer Using an Activation URL (customerActivateByUrl) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrB4W4V8::49QlIFI1TIGn4RM6z1wiVA` |
| Create a Customer (customerCreate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrMho3uM::khsnxreKRlieKHDvdqDqPg` |
| Get Customer (by Customer Access Token) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsLQS1bs::QuDUndVuRpuFcJSN_tWm4Q` |
| Reset a Customer Password by Reset URL (customerResetByUrl) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrU07AT8::aJq3xIRDSPuhapRNVm5dZA` |
| Reset a Customer’s Password (customerReset Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrUFuwgU::EKhnTOs4QGCyATM50sq3gw` |
| Send a Customer Password Recovery Email (customerRecover) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrVGiz7A::fuD_lwJWTzm1cp6ChBiuDg` |
| Update a Customer (customerUpdate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrUUE308::FzoGWU2kRu-RpTlpNXDgxg` |
| Update a Customer’s Default Address (customerDefaultAddressUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrNBLeNQ::1KaiP_sQTVi_2_CDqjv-BA` |

### Cart

| Action | Method | Path | Action id |
|---|---|---|---|
| Clone a Cart (Remove PII) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqRLsP6I::AfBdEcnrTKKVxwBgmKyysg` |
| Prepare a Cart for Checkout Completion (cartPrepareForCompletion) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq0npGZw::f0zaYMxPRImp44wTQkaP0Q` |
| Remove Gift Card Codes From a Cart (cartGiftCardCodesRemove) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqlxG-Ss::QXgYOToZTGq73kXwUNEZ6w` |
| Remove Personal Data From a Cart (cartRemovePersonalData) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq0w1keI::cBSdvHvzQUSjI5Qh1pydDg` |
| Update a Cart’s Attributes (cartAttributesUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqNx7PzQ::Kfjte9S_QcmIiKStJcoyPA` |
| Update a Cart’s Billing Address (cartBillingAddressUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqQr4Gek::doYk6C9MTPyMWetKXhXiJg` |
| Update a Cart’s Payment Method (cartPaymentUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqtsAkzA::kD18_Vp-S2qO6k9jk-T0RA` |

### Carts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Cart (cartCreate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqOrqy_M::Xv16g5iURJqLYnId1Af40A` |
| Retrieve a Cart by ID (Storefront API) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrrWfH2E::PXgOCoDHTUehOk2ZRJGExQ` |
| Submit a Cart for Checkout Completion (cartSubmitForCompletion) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq09UyXs::JlwAZW27QqyO11YfyWG1wA` |
| Update a Cart Note (cartNoteUpdate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqtvwAr8::JqG21VZ6Q-6pqeJnwzf_GA` |
| Update a Cart’s Buyer Identity (cartBuyerIdentityUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqNk6vos::-MRpfx_jQDGF_XshinNu_Q` |

### CartDeliveryAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Delivery Addresses to a Cart (cartDeliveryAddressesAdd) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqY7qI3A::XSSGCvYoRAOeEXxaM_uE-Q` |
| Remove Delivery Addresses from a Cart (cartDeliveryAddressesRemove) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqYFGrgg::3hSR0HuqQjmdBqBaNKLd_Q` |
| Replace a Cart’s Delivery Addresses (cartDeliveryAddressesReplace) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqY_JxPQ::5ySOCzo_Rh2BEgK6uTOl7g` |
| Update a Cart’s Delivery Addresses (cartDeliveryAddressesUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqX8HNyo::GW_K-7LnTzOe-txHPEbJpg` |

### CustomerAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Access Token (customerAccessTokenCreate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq065Llw::p1upEdI0SSmCqYbuJ2vvRw` |
| Create a Customer Access Token with Multipass | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq8zqlCc::AVuPuVTdSMOlsSJ6GMFf3A` |
| Delete a Customer Access Token | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrF17YfU::kVLW6yUiTBC1Z82Rdff0MA` |
| Renew a Customer Access Token (customerAccessTokenRenew) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq_yB-p4::xysltFGyRMS5ggZv13-MoA` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection (Storefront GraphQL `collection` Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrrW91e4::tT7-pJnYQjO30wcvny2h4Q` |
| Get a Collection by Handle (Storefront GraphQL: `collectionByHandle`) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrvN53XU::Odvck-l5R1aNwiZV_HiSfA` |
| List Collections (GraphQL Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsKtUPYw::HhIfRXOMTbaeO9lYCSbFZA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Product by Handle (Storefront GraphQL `productByHandle`) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gsre_mzo::BhEhZGehRNOhTBnHvz0O-Q` |
| Get a Product (Storefront GraphQL `product` Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsjUo5qs::xRcxtTsiR6epYBNs_EKFTQ` |
| List Products (Storefront GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsqTJCaw::KRrsgPyBScG6bQEGMnGp_Q` |

### CartLines

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Lines to a Cart (cartLinesAdd) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqmO-Y40::EuvZ9--LQ7CiOZ27lj1wmw` |
| Remove Cart Lines (cartLinesRemove) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqlkR29I::dLYOjZB7RSOQeKOX2FAjqQ` |
| Update Cart Lines (cartLinesUpdate Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqtTaWsA::_0w6-uxIRYusMKunsxtUug` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Page by Handle (Storefront GraphQL: pageByHandle) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsgEo3bg::fijLHYj7TgmdLFHNb41WPQ` |
| Get a Page (Storefront API) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsUYtXdc::Tc-o9GhnT_qyNQmiiYKZ_g` |
| List Shop Pages (GraphQL `pages` Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsgaDfTc::YxiWmWT6RQalisjn1roZKg` |

### Blogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Blog by Handle (Storefront) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrkZk2P8::vDl0J57SRwCbrI1lQrheIw` |
| Get a Blog (Storefront GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Grh3aTIs::vxDl8wioR_u2tWGmgdF62g` |
| List Blogs (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsDgBniI::NSOBL2MWQG6HiZhSIty0JQ` |

### CustomerAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Customer Address (customerAddressCreate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrMWidsk::2sxsfCylT2CG2ntnvUsyug` |
| Delete a Customer Address (customerAddressDelete Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrNT8xEI::Z8FLcbPjQCObI-TcyRN9sQ` |
| Update a Customer Address (customerAddressUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrMWsiBs::TrnVj2BpR8WniKhPXs7nQQ` |

### CartMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Cart Metafield (cartMetafieldDelete) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqtqZB2c::6AI-096dReWt24Q3WHARlw` |
| Set Cart Metafields (cartMetafieldsSet Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gqstz6uI::CoKdeDRwTPC74NqDEcEt1Q` |

### CartGiftCardCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Gift Card Codes to a Cart (cartGiftCardCodesAdd) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GqmLgsKY::SaYpMt0mSJO_uTWHdU4-Yw` |
| Update a Cart’s Gift Card Codes (cartGiftCardCodesUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gqlj2dyc::tZ3EFS1PQuWSDzmP33UbmQ` |

### ShopPayPaymentRequestSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Shop Pay Payment Request Session (shopPayPaymentRequestSessionCreate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrWK-rNQ::YZ6QD0DHSVSUjjqMyAHxwQ` |
| Submit a Shop Pay Payment Request Session (Mutation) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrdPJfrE::hVB6i9TNTpCeS01WRdjHxw` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Article by ID (Storefront GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Grdd0rvw::F8hmKZ_XQ6y5BGSYf86ZRQ` |
| List Articles (GraphQL Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GrdT-Y2E::BTkBeTdBQyCSn-QCgB4RBg` |

### Metaobjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Metaobject (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsT1Q6SQ::kCc28W6WSO2h79_jJqrfLQ` |
| List Metaobjects (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsUy9pEQ::4OZZCw4fSBuYnJbQJcv6FA` |

### Nodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Node by ID (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsZD5mfI::8kqeKZMaQR-v1W-zUfF8hw` |
| Query Nodes by IDs | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsT-DnFM::Keo-LtnSQNWhycCdAuhNuQ` |

### NavigationMenus

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Navigation Menu by Handle (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsNMxg-Y::trZWYQ_rTuKX5ewhEwoqFA` |

### PaymentSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Payment Settings | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsgHqxzk::-bKuYzj5TI6adILxbS75SA` |

### Sitemap

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Sitemap by Resource Type (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsyD8KYw::fU6wQXLJSEm5b-cuKntw0w` |

### Graphql

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Store Resources (GraphQL `search` Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsyWiYKw::VJ7Ku2anS7iC8VJX-MNm7Q` |

### CartSelectedDeliveryOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Cart’s Selected Delivery Options (cartSelectedDeliveryOptionsUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gq1XRuk0::0lA-63L0SgGFPZUDTnw4fA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Store Locations (GraphQL `locations` Query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsKwruPs::JxWIV0RlTyOuzTZs4pTPww` |

### Localization

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Shop Localization | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsLRTVgI::Rf_4YmvqShashjATiRvcWQ` |

### ProductRecommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Product Recommendations (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gsp1cJwM::I15TfUaGSjiscliv9I0BWQ` |

### ProductTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Tags (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsqQR12g::HJgCX3zoQJq_kiLRblCLPg` |

### PredictiveSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| List Predictive Search Results (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsgYNBow::TeVxctqhSj2AdW9yokqB7Q` |

### CartDiscountCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Cart’s Discount Codes (cartDiscountCodesUpdate) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gqet17GM::T-Loji9TSNmtUhVP0qPJGA` |

### ProductTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Types (GraphQL) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gsp6aTik::EQUN_zapTP-z9Vk9Kt-row` |

### UrlRedirects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop’s URL Redirects (GraphQL: `urlRedirects` query) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7GsyTClyU::i5IjBT_8Remz7uUqdLw4bA` |

### CartCompletionAttempt

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cart Completion Attempt Result | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Grq_Iq_I::3CthnvILSUaNdI8ZeFHB6A` |

### StorefrontApiVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Public Storefront API Versions | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gsyt-TNw::ZqkGHLwASN-Z-GMa4nuuCQ` |

### Shop

| Action | Method | Path | Action id |
|---|---|---|---|
| Query the Shop (Storefront) | POST | `/api/2026-01/graphql.json` | `conn_mod_def::GJ7Gsy6WLVg::G2Zv1K5dRcqyhL_uy0ZYlg` |

## When a call fails

The error comes from Shopify Storefront, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shopify-storefront

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
