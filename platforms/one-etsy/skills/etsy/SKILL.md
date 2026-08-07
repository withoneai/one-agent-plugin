---
name: etsy
description: Etsy is an eCommerce marketplace platform focused on handmade, vintage, and craft-related goods, enabling independent sellers to list products and manage online sales while allowing buyers to discover and purchase items from a global community of merchants. Read and write Etsy data through One: listings, shopsections, readinessstatedefinitions, shops, listingimages, listingvideos and more, 105 actions with real parameter documentation. Use whenever the user asks to look something up in Etsy, create or update a record there, or build code against the Etsy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: etsy
  generated-from: one-knowledge-base
---

# Etsy through One

Etsy is an eCommerce marketplace platform focused on handmade, vintage, and craft-related goods, enabling independent sellers to list products and manage online sales while allowing buyers to discover and purchase items from a global community of merchants.

One exposes Etsy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `etsy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Etsy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Etsy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Listings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing by ID | GET | `/v3/application/listings/{{listingId}}` | `conn_mod_def::GMUoZnQYc30::UHYETkl0SnqpxhESTbbJtQ` |
| Get a Listing's Personalization | GET | `/v3/application/listings/{{listingId}}/personalization` | `conn_mod_def::GMUoaUqtpMs::tuOW8SjTRMCxT9VKoK-nzg` |
| Get Batch Listing Inventory | GET | `/v3/application/listings/batch/inventory` | `conn_mod_def::GMUoaKrWTXI::AG4YS0WXQLujn9tWmYLdwQ` |
| Get Listings by Listing IDs | GET | `/v3/application/listings/batch` | `conn_mod_def::GMUoZvE5QjM::NRHBzZMvQVyJiRZMYq5J5A` |
| Get Shipping Profiles for Listings by Listing IDs | GET | `/v3/application/listings/batch/shipping` | `conn_mod_def::GMUoZ5Bclm8::6p8zK7enSD6c0edZgWMS-g` |
| List Active Etsy Listings | GET | `/v3/application/listings/active` | `conn_mod_def::GMUoZnuXdJA::jmK5Bn8BQvGABXafXK52gA` |
| Create a Draft Listing for a Shop | POST | `/v3/application/shops/{{shopId}}/listings` | `conn_mod_def::GMUoZQTyC18::0XHTZWWES8OzEvPhL49pcw` |
| Delete a Listing | DELETE | `/v3/application/listings/{{listingId}}` | `conn_mod_def::GMUoZQ98chA::WqYgWI9_Sta5eYjugD1jSQ` |
| Update Listing Inventory | PUT | `/v3/application/listings/{{listingId}}/inventory` | `conn_mod_def::GMUoaVFRZOk::myReV2LZQjiRXCVz2xao6A` |

### ShopSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Section | GET | `/v3/application/shops/{{shopId}}/sections/{{shopSectionId}}` | `conn_mod_def::GMUoY1R5Lis::iaAlARv3TFu02Cu3qtrPjg` |
| List a Shop's Sections | GET | `/v3/application/shops/{{shopId}}/sections` | `conn_mod_def::GMUoY1J3iq4::tObOeeoNTUKR7VocB7NBpw` |
| Create a Shop Section | POST | `/v3/application/shops/{{shopId}}/sections` | `conn_mod_def::GMUoYqUnZ40::JSRweNgoR2qgXDxTU8tAGg` |
| Delete a Shop Section | DELETE | `/v3/application/shops/{{shopId}}/sections/{{shopSectionId}}` | `conn_mod_def::GMUoY1mKqaY::JSGbtxLMQfifx1nj-hrQoA` |
| Update a Shop Section | PUT | `/v3/application/shops/{{shopId}}/sections/{{shopSectionId}}` | `conn_mod_def::GMUoY11hcKQ::1iJW2XqJRoWxjbPLGWn1Gw` |

### ReadinessStateDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Readiness State Definition | GET | `/v3/application/shops/{{shopId}}/readiness-state-definitions/{{readinessStateDefinitionId}}` | `conn_mod_def::GMUoYOT-zQw::XvK5XjaVTRynltOgBQytSQ` |
| List Readiness State Definitions for a Shop | GET | `/v3/application/shops/{{shopId}}/readiness-state-definitions` | `conn_mod_def::GMUoYQOlvzI::Ni0udG3JRRe1YPjyFZ9WPw` |
| Create a Shop Readiness State Definition | POST | `/v3/application/shops/{{shopId}}/readiness-state-definitions` | `conn_mod_def::GMUoYHbdWFM::EOL1p4ItT_yUMtR-v-l-Bg` |
| Update a Shop's Readiness State Definition | PUT | `/v3/application/shops/{{shopId}}/readiness-state-definitions/{{readinessStateDefinitionId}}` | `conn_mod_def::GMUoYOyc2gQ::6xgUpWYmRx28C6B_y_i0RQ` |

### Shops

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Shops | GET | `/v3/application/shops` | `conn_mod_def::GMUoX-QLFdk::BMttpt4WSFqTL93aolAN8w` |
| Get a Shop | GET | `/v3/application/shops/{{shopId}}` | `conn_mod_def::GMUoX-ePFoI::u5pKGesoTx2AQXVlrlvJEg` |
| Get a User's Shop by Owner User ID | GET | `/v3/application/users/{{userId}}/shops` | `conn_mod_def::GMUoYGf6YA8::Dip3KOo2SyyMgvO1x2W73A` |
| Update a Shop | PUT | `/v3/application/shops/{{shopId}}` | `conn_mod_def::GMUoYGgNZHw::EAyZMwj1QLyGi_5bD5miEQ` |

### ListingImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing Image | GET | `/v3/application/listings/{{listingId}}/images/{{listingImageId}}` | `conn_mod_def::GMUoaNxcUWM::mnUtZuaTTraYbrMb3Fl9XA` |
| Get Listing Images for a Listing | GET | `/v3/application/listings/{{listingId}}/images` | `conn_mod_def::GMUoaJxpHSQ::QbyP3ceyQ4-loUcNnIEr5w` |
| Delete a Listing Image for a Shop | DELETE | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/images/{{listingImageId}}` | `conn_mod_def::GMUoaDIlUxQ::gnDtlddqR_qJ1jZp0Cf6Wg` |
| Upload a Listing Image for a Shop Listing | POST | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/images` | `conn_mod_def::GMUoaK05n74::eWdE1kp8QoCaH_-7nSwfhQ` |

### ListingVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing Video | GET | `/v3/application/listings/{{listingId}}/videos/{{videoId}}` | `conn_mod_def::GMUoaqGUSkw::ARDobWL7Q6motckKv2zODg` |
| List a Listing's Videos | GET | `/v3/application/listings/{{listingId}}/videos` | `conn_mod_def::GMUoapDCteY::NJq_3ECkTZ6FTMwOlXz2Dw` |
| Delete a Listing Video for a Shop | DELETE | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/videos/{{videoId}}` | `conn_mod_def::GMUoalXWrGw::DPxi4TECRQOmbkCAPm1Glw` |
| Upload Listing Videos for a Shop Listing | POST | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/videos` | `conn_mod_def::GMUoapbT_OM::CrmES6baQRu965RfNLomtw` |

### ListingFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing File for a Shop | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/files/{{listingFileId}}` | `conn_mod_def::GMUoaA0UlcI::smpTo4bNRA-En8w_eTrOLA` |
| Delete a Listing File for a Shop | DELETE | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/files/{{listingFileId}}` | `conn_mod_def::GMUoaCmZhG8::PwIeVQ6DS-OB8JueSLUzpA` |
| Upload Listing Files for a Shop Listing | POST | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/files` | `conn_mod_def::GMUoaASJmsw::SSoafwZBSOyIlgFIYkh-Bw` |

### ShopReceiptTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Receipt Transaction by ID | GET | `/v3/application/shops/{{shopId}}/transactions/{{transactionId}}` | `conn_mod_def::GMUoYXp_rfE::3iWPRZjORXGRBGetU-oQYA` |
| List a Listing's Shop Receipt Transactions | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/transactions` | `conn_mod_def::GMUoYjMEDsE::BEv92gN6SZq0PQxNLlP4kg` |
| List a Shop's Receipt Transactions | GET | `/v3/application/shops/{{shopId}}/transactions` | `conn_mod_def::GMUoYhxrNJg::FKWUZlEvRryD7ip-cZl7PA` |

### ShippingProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Shipping Profile | GET | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}` | `conn_mod_def::GMUoZG7v3BY::YzTikYtjTBKfDc863Pcq_g` |
| Create a Shop Shipping Profile | POST | `/v3/application/shops/{{shopId}}/shipping-profiles` | `conn_mod_def::GMUoY3OLfLc::HVQvAOYuT2OslvMvQTDkJw` |
| Update a Shop Shipping Profile | PUT | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}` | `conn_mod_def::GMUoZPWUc3Q::K5Q65HUQRyutDWCJpY6MHw` |

### ListingTranslation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing Translation for a Shop Listing | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/translations/{{language}}` | `conn_mod_def::GMUoac184m0::ig0GC5tKRGSY2yKAnTl7kA` |
| Create a Listing Translation for a Shop Listing | POST | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/translations/{{language}}` | `conn_mod_def::GMUoac0aSrI::c8Jcjs3_Qj2rX9YQIlCRHg` |
| Update a Listing Translation for a Shop Listing | PUT | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/translations/{{language}}` | `conn_mod_def::GMUoaec5K54::ZkbcAu_eRdiBOj0QHzAe-w` |

### ShippingProfileDestinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop Shipping Profile's Destinations | GET | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/destinations` | `conn_mod_def::GMUoZIZbqII::se_B6eDnS7WXNde_dVYpKw` |
| Create a Shipping Profile Destination for a Shop | POST | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/destinations` | `conn_mod_def::GMUoY-8jDsc::5Zu-Eg3gQ92yH1Llv2jpQw` |
| Delete a Shipping Profile Destination for a Shop | DELETE | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/destinations/{{shippingProfileDestinationId}}` | `conn_mod_def::GMUoY_Jy2DM::fDdPOHqyRwi82HNmYe_8bg` |

### ShopListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop's Listings | GET | `/v3/application/shops/{{shopId}}/listings` | `conn_mod_def::GMUoZwPHY9E::7rL3aZAISz-CzaeXYQaepQ` |
| List Active Listings for a Shop | GET | `/v3/application/shops/{{shopId}}/listings/active` | `conn_mod_def::GMUoZnnJasE::EJppdac0TMCM4hDAtaz0lQ` |

### ListingProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Listing Property for a Shop Listing | DELETE | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/properties/{{propertyId}}` | `conn_mod_def::GMUoZmyHzCA::zPQDspJVRxaQhF4am0l98Q` |
| Update a Listing Property for a Shop | PUT | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/properties/{{propertyId}}` | `conn_mod_def::GMUoZ4Gzxq8::QZ7xdvV7RZqRj6yNOKRN4w` |

### ReturnPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop's Return Policies | GET | `/v3/application/shops/{{shopId}}/policies/return` | `conn_mod_def::GMUoYqeTT_8::NbWNbQaoTq-mOnqwEL9k-A` |
| Consolidate Return Policies for a Shop | POST | `/v3/application/shops/{{shopId}}/policies/return/consolidate` | `conn_mod_def::GMUoYiadDt4::KdZPKlQqSma3UpsWM_2m2A` |

### ListingPersonalization

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Listing Personalization for a Shop Listing | DELETE | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/personalization` | `conn_mod_def::GMUoaVbJrpE::8o7GOSY0T7-AHLRFVhbQrA` |
| Update Listing Personalization for a Shop Listing | POST | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/personalization` | `conn_mod_def::GMUoaVhPdMM::VhYd2cAEQw6Fe1An_x6syg` |

### ShopShippingProfileUpgrades

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Shop Shipping Profile Upgrade | DELETE | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/upgrades/{{upgradeId}}` | `conn_mod_def::GMUoY-A5s0I::EIvYZs_TRB2isWrYPxELag` |
| Update a Shop Shipping Profile Upgrade | PUT | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/upgrades/{{upgradeId}}` | `conn_mod_def::GMUoZQDCnMw::CMPkbhdESymNTERDt2edhQ` |

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Receipt's Payments | GET | `/v3/application/shops/{{shopId}}/receipts/{{receiptId}}/payments` | `conn_mod_def::GMUoXyiVJm0::KbJuTpyUQmKJwHvK8n7ooQ` |
| List a Shop's Payments | GET | `/v3/application/shops/{{shopId}}/payments` | `conn_mod_def::GMUoX3BsEsg::QuOFAI5xRiuBXwD_9FXfnw` |

### Reviews

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop's Reviews | GET | `/v3/application/shops/{{shopId}}/reviews` | `conn_mod_def::GMUoX_odpfg::9KyLrTgCSy-bjra_ec4lkA` |
| List Reviews for a Listing | GET | `/v3/application/listings/{{listingId}}/reviews` | `conn_mod_def::GMUoXznYOKQ::hU37ZrpbSSiGRQ4HA8ZlSg` |

### HolidayPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Holiday Preferences for a Shop | GET | `/v3/application/shops/{{shopId}}/holiday-preferences` | `conn_mod_def::GMUoYHbc7n8::fFCTG0r-S82iyqFV3myqjA` |
| Update Holiday Preferences for a Shop | PUT | `/v3/application/shops/{{shopId}}/holiday-preferences/{{holidayId}}` | `conn_mod_def::GMUoYHHxzyk::U2mWWdpHQP-Se-7ScM3mfA` |

### ShopReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop's Receipts | GET | `/v3/application/shops/{{shopId}}/receipts` | `conn_mod_def::GMUoYaTSU1Y::C544dKc0ToaMl7ZjHJ2MKw` |
| Update a Shop Receipt | PUT | `/v3/application/shops/{{shopId}}/receipts/{{receiptId}}` | `conn_mod_def::GMUoYYY8lwA::GUcHkEIWTr2JcZ0mqz-pFA` |

### ShopReturnPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Shop Return Policy | DELETE | `/v3/application/shops/{{shopId}}/policies/return/{{returnPolicyId}}` | `conn_mod_def::GMUoYq3KZII::2MfOeCeLT2K8Pn0OIusHkA` |
| Update a Shop Return Policy | PUT | `/v3/application/shops/{{shopId}}/policies/return/{{returnPolicyId}}` | `conn_mod_def::GMUoYudx22k::fms2Usz4QyCFJzjBbmDFlw` |

### ShippingProfileUpgrades

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shipping Profile Upgrades for a Shop Shipping Profile | GET | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/upgrades` | `conn_mod_def::GMUoZHNSw2o::O64x1qU6TQS1bNnxI7WvZw` |
| Create a Shipping Profile Upgrade for a Shop | POST | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/upgrades` | `conn_mod_def::GMUoY_Fid_c::dkD_XltcTWuioULmPOyzmg` |

### UserAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Address | GET | `/v3/application/user/addresses/{{userAddressId}}` | `conn_mod_def::GMUoaxjfXSo::49AZhlklSIK78xigYEVJRA` |
| Delete a Signed-in User Address | DELETE | `/v3/application/user/addresses/{{userAddressId}}` | `conn_mod_def::GMUoawvTwis::1fkPzphqSzWl2C5i1-8E_Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Profile | GET | `/v3/application/users/{{userId}}` | `conn_mod_def::GMUoax6nlt0::Bq_YTDYTT9O9S0dwrz6MRg` |
| Get the Signed-in User Profile | GET | `/v3/application/users/me` | `conn_mod_def::GMUoaxpmtec::-Sre1yEDRICOSRtM7VVPdA` |

### BuyerTaxonomyNodes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Buyer Taxonomy Nodes | GET | `/v3/application/buyer-taxonomy/nodes` | `conn_mod_def::GMUoXWsJiEE::S9b5CAxaS6O23v-HTmhDIg` |

### OpenApiPing

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping the Etsy Open API | GET | `/v3/application/openapi-ping` | `conn_mod_def::GMUoXXC2xHo::EZI8UWZZQmaxcqUbO58RNw` |

### PaymentAccountLedgerEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop's Payment Account Ledger Entries | GET | `/v3/application/shops/{{shopId}}/payment-account/ledger-entries` | `conn_mod_def::GMUoXYGnuRE::sJw0l9MyTem3fp_4TT8TUQ` |

### PaymentAccountLedgerEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Payment Account Ledger Entry | GET | `/v3/application/shops/{{shopId}}/payment-account/ledger-entries/{{ledgerEntryId}}` | `conn_mod_def::GMUoXbwISqw::TMJgEP_hSq6dqsO4z5d_8w` |

### BuyerTaxonomyProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Properties for a Buyer Taxonomy Node | GET | `/v3/application/buyer-taxonomy/nodes/{{taxonomyId}}/properties` | `conn_mod_def::GMUoXqyaGaw::__gOgaQ7T86NMsRZBwQbqA` |

### ShopReturnPolicyListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Listings for a Shop Return Policy | GET | `/v3/application/shops/{{shopId}}/policies/return/{{returnPolicyId}}/listings` | `conn_mod_def::GMUoZ4NZI_w::c827zijwReCXbyo1s6tj6g` |

### ShopListing

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Shop Listing | PATCH | `/v3/application/shops/{{shopId}}/listings/{{listingId}}` | `conn_mod_def::GMUoZ4YWra0::CcYWJO_gQl-ey0soEO26Yw` |

### ShopSectionListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Listings in a Shop's Sections | GET | `/v3/application/shops/{{shopId}}/shop-sections/listings` | `conn_mod_def::GMUoZ5AtOJc::4U9blwzFTgSuoQIMpt2utg` |

### ShopListingFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Files for a Shop Listing | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/files` | `conn_mod_def::GMUoZ_9PbpA::hY1lqp7mSoKPuzYXtNw28A` |

### ReceiptTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Receipt Transactions for a Shop | GET | `/v3/application/shops/{{shopId}}/receipts/{{receiptId}}/transactions` | `conn_mod_def::GMUoYiiTZz0::JhKHr7loRpqvpP9wTMrj3g` |

### ShopShippingProfileDestinations

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Shop Shipping Profile Destination | PUT | `/v3/application/shops/{{shopId}}/shipping-profiles/{{shippingProfileId}}/destinations/{{shippingProfileDestinationId}}` | `conn_mod_def::GMUoZeLH4bI::XyUjYTnWRgWo7PShET8Dfw` |

### ShopFeaturedListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Shop's Featured Listings | GET | `/v3/application/shops/{{shopId}}/listings/featured` | `conn_mod_def::GMUoZl_4Xc8::VWgxRjb8TkGknINfzuhF8g` |

### ShopListingsProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Listing's Properties | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/properties` | `conn_mod_def::GMUoZupxDvI::_HMSdxowTNG9ZJHOADUEVQ` |

### ListingInventoryProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Listing's Inventory Product by ID | GET | `/v3/application/listings/{{listingId}}/inventory/products/{{productId}}` | `conn_mod_def::GMUoadNP4q8::IU58WI3OT_6rIS51LybuOg` |

### ListingVariationImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Listing Variation Images for a Shop Listing | GET | `/v3/application/shops/{{shopId}}/listings/{{listingId}}/variation-images` | `conn_mod_def::GMUoadd107k::Q8JRbwwGQziXKTVFw5gO2A` |

### Scopes

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Token Scopes | POST | `/v3/application/scopes` | `conn_mod_def::GMUoXx-35hw::4s6oHvRqQp6NNiPHOPfsGQ` |

### PaymentAccountLedgerEntryPayments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment Account Ledger Entry Payments for a Shop | GET | `/v3/application/shops/{{shopId}}/payment-account/ledger-entries/payments` | `conn_mod_def::GMUoX24ehbs::PatY1EDlSLerpuYvMmhdhw` |

### SellerTaxonomyProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Properties for a Seller Taxonomy Node | GET | `/v3/application/seller-taxonomy/nodes/{{taxonomyId}}/properties` | `conn_mod_def::GMUoX93pkXA::nO5zrm3OTmeAKEtNyaGf5w` |

### SellerTaxonomyNodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Seller Taxonomy Nodes | GET | `/v3/application/seller-taxonomy/nodes` | `conn_mod_def::GMUoX97oZ6E::DYz0gTOcRv24-J8p606Tig` |

This lists 90 of 105 actions. For anything not here, call `search_one_platform_actions` with platform `etsy`. The full catalog is at https://www.withone.ai/knowledge/etsy.

## When a call fails

The error comes from Etsy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/etsy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
