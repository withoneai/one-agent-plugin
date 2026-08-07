---
name: big-commerce
description: BigCommerce is an open SaaS eCommerce platform that enables businesses to build, scale, and manage online stores. It offers robust features for multi-channel selling, analytics, and performance optimization. Read and write BigCommerce data through One: customers, customeraddresses, checkouts, pricelistrecords, ordermetafields, cartmetafields and more, 642 actions with real parameter documentation. Use whenever the user asks to look something up in BigCommerce, create or update a record there, or build code against the BigCommerce API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: big-commerce
  generated-from: one-knowledge-base
---

# BigCommerce through One

BigCommerce is an open SaaS eCommerce platform that enables businesses to build, scale, and manage online stores. It offers robust features for multi-channel selling, analytics, and performance optimization.

One exposes BigCommerce through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `big-commerce` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BigCommerce is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BigCommerce account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Count of Customers | GET | `/v2/customers/count` | `conn_mod_def::GJ0JAZha-sY::EmUKsGniT_qSZJXEoFaxJg` |
| Get a Customer | GET | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ0JAiEvZHM::5A9RmU5yQYSZc4D3pXZ3KA` |
| List Customers | GET | `/v2/customers` | `conn_mod_def::GJ0JAueBlwQ::FUCRf457QY-Iu18kq17Y9g` |
| List Customers | GET | `/v3/customers` | `conn_mod_def::GJ0JA9aaSGI::21f75pEhTXq1zKdihJU42g` |
| Create a New Customer | POST | `/v2/customers` | `conn_mod_def::GJ0I_tpZ8eU::TALnRaYtQxKXi6l9BYXH5A` |
| Create Customers (Bulk) | POST | `/v3/customers` | `conn_mod_def::GJ0I_3fPhE8::wfqpyg9iQ4unavuwhZxEtw` |
| Delete a Customer | DELETE | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ0I__z_E3o::IrZYUBRfR36YhvXmOHstjw` |
| Delete Customers | DELETE | `/v2/customers` | `conn_mod_def::GJ0JAJI46OY::HABZeWRZQNiiChDwxgkfWg` |
| Delete Customers (Bulk) | DELETE | `/v3/customers` | `conn_mod_def::GJ0JASrZKbc::6gfzNc_uQ1yjH3e4bVeKkg` |
| Update a Customer | PUT | `/v2/customers/{{customerId}}` | `conn_mod_def::GJ0JBGiq2pM::WauAxjuLRZ-rGEZQZwcWcw` |
| Update Customers (Bulk) | PUT | `/v3/customers` | `conn_mod_def::GJ0JBP82OQ4::VzWbo63vQkqm2P7J3q2Cxw` |
| Validate a Customer’s Credentials | POST | `/v3/customers/validate-credentials` | `conn_mod_def::GJ0J4sfSiE4::2z1PGGzoR-iL2TGX0g1BZQ` |

1 more Customers actions are available through search.

### CustomerAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer's Address | GET | `/v2/customers/{{customerId}}/addresses/{{customerAddressId}}` | `conn_mod_def::GJ0I-GfCcHQ::pg217Mc6QVK2Cs8MMgP39Q` |
| Get a Customer’s Address Count | GET | `/v2/customers/{{customerId}}/addresses/count` | `conn_mod_def::GJ0I9-qqRLU::ocM80sWOSYyxBpeQxnPaBQ` |
| List a Customer’s Addresses | GET | `/v2/customers/{{customerId}}/addresses` | `conn_mod_def::GJ0I-OeXZ7Y::4KDtgcjmQnS5HJe7iWZx1g` |
| List Customer Addresses | GET | `/v3/customers/addresses` | `conn_mod_def::GJ0IRhW2OAo::8ACTzItTRkqxDETvaV46tw` |
| Create a Customer Address | POST | `/v2/customers/{{customerId}}/addresses` | `conn_mod_def::GJ0I9fpQoT0::IqzQqCV6RoSbD1AWvPPD3g` |
| Create Customer Addresses | POST | `/v3/customers/addresses` | `conn_mod_def::GJ0IRQ0QVA8::Y-a50XPtTbWILJfeo5kUgg` |
| Delete a Customer's Address | DELETE | `/v2/customers/{{customerId}}/addresses/{{customerAddressId}}` | `conn_mod_def::GJ0I9nBxO1Y::2fNro1SbS2uR0jWJLWgKZA` |
| Delete a Customer’s Addresses | DELETE | `/v2/customers/{{customerId}}/addresses` | `conn_mod_def::GJ0I92SfZWQ::U-C4bcG_R0iPABOlc0spZg` |
| Delete Customer Addresses | DELETE | `/v3/customers/addresses` | `conn_mod_def::GJ0IRYlEig0::fqmv036YS8ez-lTgluRPQQ` |
| Update a Customer’s Address | PUT | `/v2/customers/{{customerId}}/addresses/{{customerAddressId}}` | `conn_mod_def::GJ0I-V4CUQQ::x60HUtGjTK-8e-_iVby8Zw` |
| Update Customer Addresses | PUT | `/v3/customers/addresses` | `conn_mod_def::GJ0IRqx2c8U::SqFaeMjUTv-tlo1ZbZVPpg` |

### Checkouts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Checkout | GET | `/checkouts/{{checkoutId}}` | `conn_mod_def::GJ0ItPDxHnc::boNLFGY3SF-fDJGTSdwIDA` |
| Add a Checkout Billing Address | POST | `/v3/checkouts/{{checkoutId}}/billing-address` | `conn_mod_def::GJ0ItjngkHc::PWFHNYmqQHWbuSShlcbCNQ` |
| Add a Coupon to a Checkout | POST | `/v3/checkouts/{{checkoutId}}/coupons` | `conn_mod_def::GJ0IujOaW6I::1Bu4ATK2RHSkI8dPLWGLYg` |
| Add Order-Level Fees to a Checkout | POST | `/v3/checkouts/{{checkoutId}}/fees` | `conn_mod_def::GJ0IvAhXOeM::7IkB0HwhRAa855zg_UpkpA` |
| Delete a Checkout Coupon | DELETE | `/checkouts/{{checkoutId}}/coupons/{{couponCode}}` | `conn_mod_def::GJ0IutkDg3g::hI-aSl8mQ6KI_SrV63fdsw` |
| Delete a Checkout’s Order-Level Fees | DELETE | `/v3/checkouts/{{checkoutId}}/fees` | `conn_mod_def::GJ0IvLUZy58::a2dPMKgJS3e-ZfdhgMKqog` |
| Update a Checkout’s Billing Address | PUT | `/v3/checkouts/{{checkoutId}}/billing-address/{{addressId}}` | `conn_mod_def::GJ0IttoOZw0::Y4KkIqzGRdqj1PHXcf6ryA` |
| Update a Checkout’s Consignment | PUT | `/checkouts/{{checkoutId}}/consignments/{{consignmentId}}` | `conn_mod_def::GJ0IuZNxj6c::cW7sf2jETM6pnvuhGJAZvg` |
| Update a Checkout’s Customer Message | PUT | `/checkouts/{{checkoutId}}` | `conn_mod_def::GJ0ItZoaqqg::5Y28tsgaRV6SDs0CS1V3Hg` |
| Update Order-Level Fees in a Checkout | PUT | `/v3/checkouts/{{checkoutId}}/fees` | `conn_mod_def::GJ0IvWW2m_s::g1s2JH1_RZq_TSMMPeYzfA` |

### PriceListRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Price List Record by Currency Code | GET | `/v3/pricelists/{{priceListId}}/records/{{variantId}}/{{currencyCode}}` | `conn_mod_def::GJ0Jd4ITc1g::INxK9h65SrG9Ixr68xYqlg` |
| Get a Price List Record by Variant ID | GET | `/v3/pricelists/{{priceListId}}/records/{{variantId}}` | `conn_mod_def::GJ0JeSQNwm8::K-rdwrPuRv6duITuLXrPBw` |
| List a Price List’s Records | GET | `/v3/pricelists/{{priceListId}}/records` | `conn_mod_def::GJ0JeIJfHAI::UnCxEXl7RluFob0ALvUnMA` |
| Create a Batch of Price List Records | POST | `/v3/pricelists/records` | `conn_mod_def::GJ0JdLpIJsM::KSBxbWrKT2OrrKCBhlu0sw` |
| Create or Update a Batch of Price List Records | PUT | `/v3/pricelists/records` | `conn_mod_def::GJ0JdTsXOPQ::GUOUvDAHSg6U69cwdFx7Rw` |
| Create Price List Records (Batch) | POST | `/v3/pricelists/{{priceListId}}/records` | `conn_mod_def::GJ0JdcTbfOM::2EIubbpTS_21KTsIW_xCRw` |
| Delete a Price List Record by Currency Code | DELETE | `/v3/pricelists/{{priceListId}}/records/{{variantId}}/{{currencyCode}}` | `conn_mod_def::GJ0Jdv5n-FA::zzLaGI15Q1arFVBdhkbrKg` |
| Delete a Price List’s Records | DELETE | `/v3/pricelists/{{priceListId}}/records` | `conn_mod_def::GJ0Jdljtcnc::Xu-NUzo1Q9CCwqhoy7tihQ` |
| Set a Price List Record by Currency Code | PUT | `/v3/pricelists/{{priceListId}}/records/{{variantId}}/{{currencyCode}}` | `conn_mod_def::GJ0JecQ2phg::bHTiG9SWT-aR_PH3fh57eQ` |
| Upsert Price List Records (Batch) | PUT | `/v3/pricelists/{{priceListId}}/records` | `conn_mod_def::GJ0JeksKFzs::tNlmIzu9R_amWpueI70WhQ` |

### OrderMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order Metafield | GET | `/orders/{{orderId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JNzjO4U8::D3JYvRNbRkq4DKrDIqHnnA` |
| List an Order’s Metafields | GET | `/v3/orders/{{orderId}}/metafields` | `conn_mod_def::GJ0JPtxsMBM::Yc0Z4UBHQ0SzGNf-bHPVwA` |
| List Order Metafields | GET | `/v3/orders/metafields` | `conn_mod_def::GJ0IX2PCPgg::SPxSObfESy-MC7-GOdV6iQ` |
| Create an Order Metafield | POST | `/v3/orders/{{orderId}}/metafields` | `conn_mod_def::GJ0JLa7jAnc::dtuUl4UATReenz4GN2_EwQ` |
| Create Multiple Order Metafields (Batch) | POST | `/v3/orders/metafields` | `conn_mod_def::GJ0IU9xq-Cw::Gzan-I3gRx62MhHdAGJOjg` |
| Delete an Order Metafield | DELETE | `/v3/orders/{{orderId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JMYUzBfU::7M5OiKfiRY6irZYL1ozrXA` |
| Delete Multiple Order Metafields | DELETE | `/v3/orders/metafields` | `conn_mod_def::GJ0IWF-_Xy4::CBvB1zI_RDytDKCsm5WCng` |
| Update an Order Metafield | PUT | `/v3/orders/{{orderId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JRE4pwR4::8x8brWcjQ6uWQNl7eoJiUg` |
| Update Multiple Order Metafields (Batch) | PUT | `/v3/orders/metafields` | `conn_mod_def::GJ0IY8pYkB4::VAPLVLKhTKix-rb1FwKuqQ` |

### CartMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cart Metafield | GET | `/v3/carts/{{cartId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JNHxxffw::-gsoEdZWRcqnhh-kwJuaUg` |
| List a Cart’s Metafields | GET | `/v3/carts/{{cartId}}/metafields` | `conn_mod_def::GJ0JOnfVaUI::IEEglpTbT1SwRisyMxMNaQ` |
| List Cart Metafields | GET | `/v3/carts/metafields` | `conn_mod_def::GJ0IXIeS_QU::diWSq_DfR42YqRy2RRKwWQ` |
| Create a Cart Metafield | POST | `/v3/carts/{{cartId}}/metafields` | `conn_mod_def::GJ0JKYUDBCg::SO_iLUdZScSifcmQ2H9XCQ` |
| Create Multiple Cart Metafields | POST | `/v3/carts/metafields` | `conn_mod_def::GJ0IUmMIDB8::gEppGmk5Q46lQT62nVI6lA` |
| Delete a Cart Metafield | DELETE | `/v3/carts/{{cartId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JMHWQSQM::DumJQpQzRMyWRlXmNAy9vw` |
| Delete Cart Metafields (Bulk) | DELETE | `/v3/carts/metafields` | `conn_mod_def::GJ0IVvS1sK0::dCG2PJtwSUuMrqCo_t87LA` |
| Update a Cart Metafield | PUT | `/v3/carts/{{cartId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JQYeiJkE::WJs5NOA6QFulAjY8bPWFoA` |
| Update Multiple Cart Metafields | PUT | `/v3/carts/metafields` | `conn_mod_def::GJ0IYi5t6jc::fYnubiItQ3qM3DBopRcJ_Q` |

### ChannelMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel Metafield | GET | `/v3/channels/{{channelId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JNZEAUjM::vhYmeVjIQOqqo3wWvpbOkQ` |
| List a Channel’s Metafields | GET | `/v3/channels/{{channelId}}/metafields` | `conn_mod_def::GJ0JPI2g1KI::MgzD8-UdRdSuHU4AQn3ZyA` |
| List Channel Metafields | GET | `/v3/channels/metafields` | `conn_mod_def::GJ0IXdNvEuY::8M7rgDvfRMyoCZo6aFkwnA` |
| Create a Channel Metafield | POST | `/v3/channels/{{channelId}}/metafields` | `conn_mod_def::GJ0JKsi1XSI::EiwMgbVWQimWoA-lX9QJAw` |
| Create Multiple Channel Metafields | POST | `/channels/metafields` | `conn_mod_def::GJ0IUt4lIDQ::tVpRqNtUQ-eBBGR2zdhUlQ` |
| Delete a Channel Metafield | DELETE | `/channels/{{channelId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JL1trQnc::OblS86ByT0GesEKngFiEvQ` |
| Delete Multiple Channel Metafields | DELETE | `/v3/channels/metafields` | `conn_mod_def::GJ0IV2s54No::_XtHDfX5T_ShmULAS2HA4w` |
| Update a Channel Metafield | PUT | `/channels/{{channelId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JQo1gUKU::P6J1MEQXQnKiJgDnn9UUcQ` |
| Update Channel Metafields (Bulk) | PUT | `/v3/channels/metafields` | `conn_mod_def::GJ0IYrleEoY::gf-0U6jpRIWiSwlgPJkMQA` |

### BrandMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Metafield | GET | `/v3/catalog/brands/{{brandId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JM9zh38E::3_B2rR67SeuMOmhR9bIxWA` |
| List a Brand’s Metafields | GET | `/v3/catalog/brands/{{brandId}}/metafields` | `conn_mod_def::GJ0JOc6AFO0::CKHsQjqTSeKeb1qF1uAZlg` |
| List Brand Metafields | GET | `/v3/catalog/brands/metafields` | `conn_mod_def::GJ0IW94-PYk::ZQCXaUI8TQ-9whJs_SrcTQ` |
| Create a Brand Metafield | POST | `/v3/catalog/brands/{{brandId}}/metafields` | `conn_mod_def::GJ0JKPxkiQs::lUls12s2TimmWubwLvoO8w` |
| Create Brand Metafields (Bulk) | POST | `/v3/catalog/brands/metafields` | `conn_mod_def::GJ0IVNQVyAQ::thKeZojETwar1UHy4pBaig` |
| Delete a Brand Metafield | DELETE | `/catalog/brands/{{brandId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JLj4NUZ4::E8wipH-JSqe87NOyFPeITg` |
| Delete Multiple Brand Metafields | DELETE | `/v3/catalog/brands/metafields` | `conn_mod_def::GJ0IWVkfV7Q::p6BueWfeQeKgleiBA_qChA` |
| Update a Brand Metafield | PUT | `/catalog/brands/{{brandId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JQPz1yN0::VGgsbJLPQWK3bDi-rncL1Q` |
| Update Multiple Brand Metafields | PUT | `/v3/catalog/brands/metafields` | `conn_mod_def::GJ0IZMH9S5M::UEa2r2puSZyMsC72ceVb5A` |

### CategoryMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category Metafield | GET | `/v3/catalog/categories/{{categoryId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JNQeNDQw::7jD8n503TUmXpbHk9ASEZA` |
| List a Category’s Metafields | GET | `/v3/catalog/categories/{{categoryId}}/metafields` | `conn_mod_def::GJ0JO7S4aOE::VLQYc1QOTN2uFYQikffKOA` |
| List Category Metafields | GET | `/v3/catalog/categories/metafields` | `conn_mod_def::GJ0IXTP0zFc::4ST1lPdXTi6fR9oWDAtGVQ` |
| Create a Category Metafield | POST | `/catalog/categories/{{categoryId}}/metafields` | `conn_mod_def::GJ0JKjYOzmA::kMcb35aOR2q00ETtLj2_qQ` |
| Create Category Metafields (Bulk) | POST | `/v3/catalog/categories/metafields` | `conn_mod_def::GJ0IVVSsack::GFzFyHZ2S7S8CH81ISP4-w` |
| Delete a Category Metafield | DELETE | `/v3/catalog/categories/{{categoryId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JLtNC6Z8::9FbjYEIBQAONXB4bK-7W9w` |
| Delete Multiple Category Metafields | DELETE | `/v3/catalog/categories/metafields` | `conn_mod_def::GJ0IWdHTU0s::hZDJE_9fStGoeIo0osF1NA` |
| Update a Category Metafield | PUT | `/catalog/categories/{{categoryId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JQgv-qkM::4ixlNRscQXStJW4igJPX5A` |
| Update Category Metafields (Bulk) | PUT | `/v3/catalog/categories/metafields` | `conn_mod_def::GJ0IZV20O6M::u14FJxD-T0C2uExar1bpeQ` |

### ProductMetafields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product Metafield | GET | `/v3/catalog/products/{{productId}}/metafields/{{metafieldId}}` | `conn_mod_def::GJ0JN_8ttyE::of0tkoI5TlW0dWl6egU2pA` |
| List a Product’s Metafields | GET | `/v3/catalog/products/{{productId}}/metafields` | `conn_mod_def::GJ0JP6xIDyY::EmWQ_NiUTkOVNo5kTM2ppg` |

7 more ProductMetafields actions are available through search.

This lists 90 of 642 actions. For anything not here, call `search_one_platform_actions` with platform `big-commerce`. The full catalog is at https://www.withone.ai/knowledge/big-commerce.

## When a call fails

The error comes from BigCommerce, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/big-commerce

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
