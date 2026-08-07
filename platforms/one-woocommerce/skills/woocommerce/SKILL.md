---
name: woocommerce
description: WooCommerce is a customizable, open-source eCommerce plugin for WordPress. It allows users to build and manage online stores with features like product management, order tracking, and integration with various payment gateways. Read and write WooCommerce data through One: orders, products, producttags, coupons, customers, productcategories and more, 139 actions with real parameter documentation. Use whenever the user asks to look something up in WooCommerce, create or update a record there, or build code against the WooCommerce API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: woocommerce
  generated-from: one-knowledge-base
---

# WooCommerce through One

WooCommerce is a customizable, open-source eCommerce plugin for WordPress. It allows users to build and manage online stores with features like product management, order tracking, and integration with various payment gateways.

One exposes WooCommerce through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `woocommerce` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm WooCommerce is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real WooCommerce account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Orders | GET | `/wp-json/wc/v3/orders` | `conn_mod_def::GJ8Va8WMT6E::-cNfYSSsQEWMNb9l_bX1PQ` |
| Retrieve an Order | GET | `/wp-json/wc/v3/orders/{{id}}` | `conn_mod_def::GJ8Va15wW04::ny_siB9STmWf70569OS79w` |
| Batch Update Orders (Create/Update/Delete) | POST | `/wp-json/wc/v3/orders/batch` | `conn_mod_def::GJ8Vao0meks::ZPCov_E0SqyVhEa6oaExew` |
| Create an Order | POST | `/wp-json/wc/v3/orders` | `conn_mod_def::GJ8Vao7-zVk::aFGk4zgCSpO8ujMTW4No2g` |
| Delete an Order | DELETE | `/wp-json/wc/v3/orders/{{id}}` | `conn_mod_def::GJ8VaomPEPc::_OYYS7JmRCSuXRHvGQ7fYQ` |
| Send an Order Notification Email to a Customer | POST | `/wp-json/wc/v3/orders/{{id}}/actions/send_email` | `conn_mod_def::GJ8VaUzgwb0::l4As07l8SnKWRdeqA1yuJA` |
| Send Order Details Email for an Order | POST | `/wp-json/wc/v3/orders/{{id}}/actions/send_order_details` | `conn_mod_def::GJ8VaU-y0_Y::iuYGDOSOSUGKLkVGVGJOJA` |
| Update an Order | PUT | `/wp-json/wc/v3/orders/{{id}}` | `conn_mod_def::GJ8Va1WaAHc::LSVfPY4_QBijAFd11lEF4Q` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/wp-json/wc/v3/products` | `conn_mod_def::GJ8Vce9D9rM::CZzkX013QlC2oq8-esiaZA` |
| Retrieve a Product | GET | `/wp-json/wc/v3/products/{{id}}` | `conn_mod_def::GJ8VcmSbKxI::SaXkTyQ8QOCVIjJFf350Uw` |
| Batch Create/Update/Delete Products | POST | `/wp-json/wc/v3/products/batch` | `conn_mod_def::GJ8VcXSDnrc::RGpHeu0MTHiB-I1BXtGlVw` |
| Create a Product | POST | `/wp-json/wc/v3/products` | `conn_mod_def::GJ8VcXF0GJg::Xv230SGoRoiF13YeyPyokA` |
| Delete a Product | DELETE | `/wp-json/wc/v3/products/{{id}}` | `conn_mod_def::GJ8VcW6i7Jc::7G3kwG5nRVG4HGZHxGjaYw` |
| Duplicate a Product | POST | `/wp-json/wc/v3/products/{{productId}}/duplicate` | `conn_mod_def::GJ8VcW6E3KQ::O3MFLlg6TFCixejW9Lm0-g` |
| Update a Product | PUT | `/wp-json/wc/v3/products/{{id}}` | `conn_mod_def::GJ8Vcl0QMag::j8-ZylgTTzunmFsj_7uOdA` |

### ProductTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Tags | GET | `/wp-json/wc/v3/products/tags` | `conn_mod_def::GJ8VcB-lAQc::tfkk5sJdReeVE2H5Frg6Fw` |
| Retrieve a Product Tag | GET | `/wp-json/wc/v3/products/tags/{{id}}` | `conn_mod_def::GJ8Vb-zrTPQ::QFhXbx17Sr-qEV1p4lAbYQ` |
| Batch Update Product Tags | POST | `/wp-json/wc/v3/products/tags/batch` | `conn_mod_def::GJ8Vb107XMI::bEMh7PpKTbGWscydFcZSIA` |
| Create a Product Tag | POST | `/wp-json/wc/v3/products/tags` | `conn_mod_def::GJ8Vb1F3KkA::EX9QwdzNTe2UekRwPRe5pw` |
| Delete a Product Tag | DELETE | `/wp-json/wc/v3/products/tags/{{id}}` | `conn_mod_def::GJ8Vb_Ooepg::P6lhOV-oQj-dl7W4bcbaPg` |
| Update a Product Tag | PUT | `/wp-json/wc/v3/products/tags/{{id}}` | `conn_mod_def::GJ8Vb_DBpqA::OV3tzaIxRa-jaZ9V_dghOA` |

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coupons | GET | `/wp-json/wc/v3/coupons` | `conn_mod_def::GJ8VZyyb2b0::V-sS-autRNO1x2y49VddKQ` |
| Retrieve a Coupon | GET | `/wp-json/wc/v3/coupons/{{id}}` | `conn_mod_def::GJ8VZuTM7bQ::2iyS3hvwSGCZ6x7GPyoiog` |
| Batch Create/Update/Delete Coupons | POST | `/wp-json/wc/v3/coupons/batch` | `conn_mod_def::GJ8VZu9IwBY::EslAQk-QQZKNScnIai89NA` |
| Create a Coupon | POST | `/wp-json/wc/v3/coupons` | `conn_mod_def::GJ8VZuuvf88::kFlCuuIoTd2voniCd-n5JQ` |
| Delete a Coupon | DELETE | `/wp-json/wc/v3/coupons/{{id}}` | `conn_mod_def::GJ8VZuW2KIo::Y1MhsbwhQiyVaLM4o3CNBg` |
| Update a Coupon | PUT | `/wp-json/wc/v3/coupons/{{id}}` | `conn_mod_def::GJ8VZ5mhqq4::ZkGuNJDoRb-sCNDo7Q54HQ` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/wp-json/wc/v3/customers` | `conn_mod_def::GJ8VZ8B74-o::gGv9wP3DRaCkyoCvVgYT4g` |
| Retrieve a Customer | GET | `/wp-json/wc/v3/customers/{{id}}` | `conn_mod_def::GJ8VaC-xnQQ::eVif5hm0TbiXe8rE_SoYEg` |
| Batch Update Customers | POST | `/wp-json/wc/v3/customers/batch` | `conn_mod_def::GJ8VZ50kOX4::1EG6eX92SA-KnGUYq8mmig` |
| Create a Customer | POST | `/wp-json/wc/v3/customers` | `conn_mod_def::GJ8VZ5LHUsA::z5dGXU71SmG2wdoakeo_0w` |
| Delete a Customer | DELETE | `/wp-json/wc/v3/customers/{{id}}` | `conn_mod_def::GJ8VZ5jgZcA::taGWTxvOQDSskCEEYWlPoQ` |
| Update a Customer | PUT | `/wp-json/wc/v3/customers/{{id}}` | `conn_mod_def::GJ8VaCgMD60::APuDE3DHTyOLwD8lPiQfHw` |

### ProductCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Categories | GET | `/wp-json/wc/v3/products/categories` | `conn_mod_def::GJ8VbcvVLK8::wxP-LIEIRreoVRjIfBfwKg` |
| Retrieve a Product Category | GET | `/wp-json/wc/v3/products/categories/{{id}}` | `conn_mod_def::GJ8VbZ69XEk::jqZbE7-mTkinA64YXuiwzQ` |
| Batch Update Product Categories | POST | `/wp-json/wc/v3/products/categories/batch` | `conn_mod_def::GJ8VbTaHfRo::CDAoKwrFSTmB3ZuggcFwuQ` |
| Create a Product Category | POST | `/wp-json/wc/v3/products/categories` | `conn_mod_def::GJ8VbTCc3CM::troO62ynT4mOuWovDm9_JQ` |
| Delete a Product Category | DELETE | `/wp-json/wc/v3/products/categories/{{id}}` | `conn_mod_def::GJ8VbbO_xWU::RJYgv9kNRU62zOAMEbJjxA` |
| Update a Product Category | PUT | `/wp-json/wc/v3/products/categories/{{id}}` | `conn_mod_def::GJ8Vbaf3YbI::qhdTEaWlTiW31gz0K3tiNQ` |

### ProductReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Reviews | GET | `/wp-json/wc/v3/products/reviews` | `conn_mod_def::GJ8VbnfkriM::-eYcAhnDSmmjdK1RHDoyCA` |
| Retrieve a Product Review | GET | `/wp-json/wc/v3/products/reviews/{{id}}` | `conn_mod_def::GJ8VbuLm4xY::F5PFYGvZQGO1GwQtg_SHbw` |
| Batch Update Product Reviews | POST | `/wp-json/wc/v3/products/reviews/batch` | `conn_mod_def::GJ8VbjXGXbE::PUOeG4mESaaUGVIxuTkazA` |
| Create a Product Review | POST | `/wp-json/wc/v3/products/reviews` | `conn_mod_def::GJ8VbjpWmSI::IbE7nsAtToyivYblYnJnbQ` |
| Delete a Product Review | DELETE | `/wp-json/wc/v3/products/reviews/{{id}}` | `conn_mod_def::GJ8VbjYmI6M::RK6XKsTdSe-QHZzjtlmk4w` |
| Update a Product Review | PUT | `/wp-json/wc/v3/products/reviews/{{id}}` | `conn_mod_def::GJ8VbuESkts::6D0eYs5ZQ7qFYGPrCYWgpQ` |

### ProductVariations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Product’s Variations | GET | `/wp-json/wc/v3/products/{{productId}}/variations` | `conn_mod_def::GJ8VcQcjv0I::LuojaQr5TgODLL6Ciw2hKg` |
| Retrieve a Product’s Variation | GET | `/wp-json/wc/v3/products/{{productId}}/variations/{{id}}` | `conn_mod_def::GJ8VcIyodJ4::IAlaDlbqSNOlnh6tqFiTDA` |
| Batch Update a Product’s Variations | POST | `/wp-json/wc/v3/products/{{productId}}/variations/batch` | `conn_mod_def::GJ8Vb_5V8F0::SqYX9UzORAKgnR4_BQqU0w` |
| Create a Product Variation (for a Product) | POST | `/wp-json/wc/v3/products/{{productId}}/variations` | `conn_mod_def::GJ8VcI_W1H8::rN9M0Zu_R8CeVnh8qmWn9g` |
| Delete a Product’s Variation | DELETE | `/wp-json/wc/v3/products/{{productId}}/variations/{{id}}` | `conn_mod_def::GJ8VcIzIQ5s::y3avXhSQSHiewJ2LB5CVdQ` |
| Update a Product’s Variation | PUT | `/wp-json/wc/v3/products/{{productId}}/variations/{{id}}` | `conn_mod_def::GJ8VcIyShUQ::VWR4AlibQqGYDKYaUIWXbg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/wp-json/wc/v3/webhooks` | `conn_mod_def::GJ8VjBhKcd4::lUwYVjV8TBuvcsnWdtAvPg` |
| Retrieve a Webhook | GET | `/wp-json/wc/v3/webhooks/{{id}}` | `conn_mod_def::GJ8Vi-hFVqo::Iecmm8ohSKaYLxs0ieLXSQ` |
| Batch Update Webhooks | POST | `/wp-json/wc/v3/webhooks/batch` | `conn_mod_def::GJ8Vi3_wOp8::9iOChBYRTWu8zCq5Fakg1w` |
| Create a WooCommerce Webhook | POST | `/wp-json/wc/v3/webhooks` | `conn_mod_def::GJ8Vi3QMoNQ::CSwRo7BuQ-2s1Lipudtg3w` |
| Delete a Webhook | DELETE | `/wp-json/wc/v3/webhooks/{{id}}` | `conn_mod_def::GJ8VjBJ-8j8::nsUuYfscT7izrHDjJjcd6Q` |
| Update a Webhook | PUT | `/wp-json/wc/v3/webhooks/{{id}}` | `conn_mod_def::GJ8Vi_CmkCg::DNobJhdRSba_S-W078iQjQ` |

### ProductAttributeTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Product Attribute’s Terms | GET | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms` | `conn_mod_def::GJ8VbFDleiM::X6RhChFLRj-Ubhz3i3httQ` |
| Retrieve a Product Attribute's Term | GET | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms/{{id}}` | `conn_mod_def::GJ8VbMKnu0Y::8s9TDeFMR2WN1lyqRcG-Rw` |
| Batch Update a Product Attribute's Terms | POST | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms/batch` | `conn_mod_def::GJ8VbDqyfw0::tayt6TN5SOGtVXLpM51D3w` |
| Create a Product Attribute’s Term | POST | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms` | `conn_mod_def::GJ8VbDKOSms::TfgVgv8ETreuZr1LJ_43RA` |
| Delete a Product Attribute's Term | DELETE | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms/{{id}}` | `conn_mod_def::GJ8VbDlopSI::LsYmBTPBS-akX-fC9GbtjA` |
| Update a Product Attribute’s Term | PUT | `/wp-json/wc/v3/products/attributes/{{attributeId}}/terms/{{id}}` | `conn_mod_def::GJ8VbLqSSBM::UQrb-PjNQ0aOdRrYj6SovA` |

### ProductShippingClasses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Shipping Classes | GET | `/wp-json/wc/v3/products/shipping_classes` | `conn_mod_def::GJ8Vb42HHa4::jdqRmkepQbuSSG1FTaBH9w` |
| Retrieve a Product Shipping Class | GET | `/wp-json/wc/v3/products/shipping_classes/{{id}}` | `conn_mod_def::GJ8Vb3GPzK0::nAO_XWPUSPqldWCm1GHPqA` |
| Batch Update Product Shipping Classes | POST | `/wp-json/wc/v3/products/shipping_classes/batch` | `conn_mod_def::GJ8VbvAdDKQ::A9wCMpnsQ_engVxwjIHsEA` |
| Create a Product Shipping Class | POST | `/wp-json/wc/v3/products/shipping_classes` | `conn_mod_def::GJ8Vbtn7A1s::s196FLlnSr--4DzxMq9keg` |
| Delete a Product Shipping Class | DELETE | `/wp-json/wc/v3/products/shipping_classes/{{id}}` | `conn_mod_def::GJ8VbuDIQhk::7CdKy--XTHSCYMJ-LMaJYw` |
| Update a Product Shipping Class | PUT | `/wp-json/wc/v3/products/shipping_classes/{{id}}` | `conn_mod_def::GJ8Vb14w7pQ::QgE8G0dpSpS2LyzdBJcUsw` |

### ProductAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Attributes | GET | `/wp-json/wc/v3/products/attributes` | `conn_mod_def::GJ8VbTIUGxY::rc0iXxLbTV28OcHwo0Oc6Q` |
| Retrieve a Product Attribute | GET | `/wp-json/wc/v3/products/attributes/{{id}}` | `conn_mod_def::GJ8VbTH6Jw8::yaPvCRZYTpibGKak3TB9NA` |
| Batch Update Product Attributes | POST | `/wp-json/wc/v3/products/attributes/batch` | `conn_mod_def::GJ8VbMZY6gU::m-W_1LxFRmeVesOKn4Vulg` |
| Create a Product Attribute | POST | `/wp-json/wc/v3/products/attributes` | `conn_mod_def::GJ8VbLryRvM::oeA_uCYZTb-v4Y5L5eIuTw` |
| Delete a Product Attribute | DELETE | `/wp-json/wc/v3/products/attributes/{{id}}` | `conn_mod_def::GJ8VbMLnyNY::Gz2ddYgrTBWkP15qVIUasg` |
| Update a Product Attribute | PUT | `/wp-json/wc/v3/products/attributes/{{id}}` | `conn_mod_def::GJ8VbStZTMQ::qWvAT8FlSYirjG2BaTawRA` |

### ShippingZones

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shipping Zones | GET | `/wp-json/wc/v3/shipping/zones` | `conn_mod_def::GJ8VifyvaKk::P9T-ktvUQImtAPDWgg_w8w` |
| Retrieve a Shipping Zone | GET | `/wp-json/wc/v3/shipping/zones/{{id}}` | `conn_mod_def::GJ8VigQxGBE::HUi_8s84TdWUCa-1ssU_ng` |
| Create a Shipping Zone | POST | `/wp-json/wc/v3/shipping/zones` | `conn_mod_def::GJ8VigbsrhE::NVN8tj9BRuqq5JyOXhgdug` |
| Delete a Shipping Zone | DELETE | `/wp-json/wc/v3/shipping/zones/{{id}}` | `conn_mod_def::GJ8VihS3cII::EdPxI5puQ26y1KQ-4iQQUQ` |
| Update a Shipping Zone | PUT | `/wp-json/wc/v3/shipping/zones/{{id}}` | `conn_mod_def::GJ8VigD0KGY::LPj-FLC_R2yIv_t5rpZvhA` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Reports | GET | `/wp-json/wc/v3/reports` | `conn_mod_def::GJ8Vck9_6qE::rozb022CRcWKZP2n8IMf6w` |
| Retrieve Coupon Totals Report | GET | `/wp-json/wc/v3/reports/coupons/totals` | `conn_mod_def::GJ8Vcnp82cw::NVHOsGYfRdimcVTipmzr_g` |
| Retrieve Product Totals Report | GET | `/wp-json/wc/v3/reports/products/totals` | `conn_mod_def::GJ8Vcujwi-A::4lkU2yfkTia7r7fkaxCFtw` |
| Retrieve Review Totals Report | GET | `/wp-json/wc/v3/reports/reviews/totals` | `conn_mod_def::GJ8VcytnTAM::sK1CRNp5Ru6_pfdkvuoqbw` |

### OrderRefunds

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Order’s Refunds | GET | `/wp-json/wc/v3/orders/{{id}}/refunds` | `conn_mod_def::GJ8VauVQA4E::PDJRvdfFQYyo6iAcKIdlyA` |
| Retrieve an Order Refund | GET | `/wp-json/wc/v3/orders/{{id}}/refunds/{{refundId}}` | `conn_mod_def::GJ8VarpmsTY::2xumoLcqRie1fLBODU9zSw` |
| Create a Refund for an Order | POST | `/wp-json/wc/v3/orders/{{id}}/refunds` | `conn_mod_def::GJ8VabtAo4Y::gLVyh2IdRnqJIm7CDSNpuA` |
| Delete an Order Refund | DELETE | `/wp-json/wc/v3/orders/{{id}}/refunds/{{refundId}}` | `conn_mod_def::GJ8VaezS4-I::LlnLFjXlSOGWwUBemvijsw` |

### Settings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Settings Group’s Options | GET | `/wp-json/wc/v3/settings/{{id}}` | `conn_mod_def::GJ8Vc4w5Kz8::NfoJCQ54SOqIuZdBnYn8PA` |
| Retrieve a Setting Option (WooCommerce Settings Group) | GET | `/wp-json/wc/v3/settings/{{groupId}}/{{id}}` | `conn_mod_def::GJ8Vc5ZmIQo::yN02J4yaTNC1mK7nlfisCw` |

2 more Settings actions are available through search.

This lists 90 of 139 actions. For anything not here, call `search_one_platform_actions` with platform `woocommerce`. The full catalog is at https://www.withone.ai/knowledge/woocommerce.

## When a call fails

The error comes from WooCommerce, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/woocommerce

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
