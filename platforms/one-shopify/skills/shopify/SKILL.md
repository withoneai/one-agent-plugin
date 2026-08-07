---
name: shopify
description: An e-commerce platform for online stores and retail point-of-sale systems. Read and write Shopify (Legacy) data through One: customer, discountcode, order, product, pricerule, webhook and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Shopify (Legacy), create or update a record there, or build code against the Shopify (Legacy) API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shopify
  generated-from: one-knowledge-base
---

# Shopify (Legacy) through One

An e-commerce platform for online stores and retail point-of-sale systems.

One exposes Shopify (Legacy) through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shopify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shopify (Legacy) is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shopify (Legacy) account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customers List | GET | `customers.json` | `conn_mod_def::F6aS3yVqhHI::Qz8HC0kkT66Tmv34-hsCNg` |
| Get Single Customer | GET | `customers/{{id}}.json` | `conn_mod_def::F6aS38Zedn4::EGvW_LiyRP2FIKq2ii1k6Q` |
| Retrieve Customer Orders | GET | `customers/{{id}}/orders.json` | `conn_mod_def::F6aS4Idx7O8::zFayn1GDRDGxfBJQRk5BYQ` |
| Retrieves a count of customers | GET | `customers/count.json` | `conn_mod_def::F6aS4TSsvms::_-XBw-1BSJaXrjfE9SV88w` |
| Search for Customers | GET | `/customers/search.json` | `conn_mod_def::F6aS4eBa82g::6bfQYGgGQpuxYbOOJAQQkg` |
| Create Customer | POST | `customers.json` | `conn_mod_def::F6aS3PNDDgM::15i7yhRaSbabTu8n3h9quA` |
| Create Customer Account Activation URL | POST | `customers/{{customer_id}}/account_activation_url.json` | `conn_mod_def::F6aS3aDC_PI::2L-bAw6CSd2gohHwH7tuVg` |
| Delete Customer | DELETE | `customers/{{id}}.json` | `conn_mod_def::F6aS4p5VzRw::ptPHMstLR1y6MGrJI60cGA` |
| Send Account Invite to Customer | POST | `customers/{{customer_id}}/send_invite.json` | `conn_mod_def::F6aS3lWLzog::GQf_YF_oRbaGpunozgbucw` |
| Update Customer | PUT | `customers/{{id}}.json` | `conn_mod_def::F6aS5_xPiM0::4j8-Y9LjQ_WlWx6wpm-Pzg` |

### DiscountCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Discount Codes | GET | `price_rules/{{id}}/discount_codes.json` | `conn_mod_def::F78Z06XtaBg::60TL_0peSjyHLLXLnoYdfg` |
| Get Discount Codes Count | GET | `discount_codes/count.json` | `conn_mod_def::F78Z0inSZlg::xK_-hYEBRBC7Y4rAi3u5Kw` |
| Retrieve Discount Code Location | GET | `discount_codes/lookup.json` | `conn_mod_def::F78ZzgCFDbg::CtqGPkMyQTayN9vuRRt78w` |
| Retrieve Discount Codes for a Creation Job | GET | `price_rules/{{price_rule_id}}/batch/{{id}}/discount_codes.json` | `conn_mod_def::F78Z1TNGhZA::xat0AUwPThaFncIXTf7emg` |
| Retrieve Single Discount Code | GET | `price_rules/{{price_rule_id}}/discount_codes/{{id}}.json` | `conn_mod_def::F78Z0yphbmA::ANZHlT55QiC9I0ztDdj91Q` |
| Retrieves a Discount Code Creation Job | GET | `price_rules/{{price_rule_id}}/batch/{{id}}.json` | `conn_mod_def::F78Z1wc6WAg::VsuB9GQHS0iaBbv0z0ZPAg` |
| Create Discount Code | POST | `price_rules/{{id}}/discount_codes.json` | `conn_mod_def::F78Z0yNpQGA::v54rxvIWSIepwGwZFxEVcg` |
| Create Discount Code Creation Job | POST | `price_rules/{{id}}/batch.json` | `conn_mod_def::F78Z1Mw6uwA::NrSPXiHnQ1K2daartGYrpA` |
| Delete Discount Code | DELETE | `price_rules/{{price_rule_id}}/discount_codes/{{id}}.json` | `conn_mod_def::F78Z1qs6yNA::brD_ccoORe2KXSqk88wJpQ` |
| Update Discount Code | PUT | `price_rules/{{price_rule_id}}/discount_codes/{{id}}.json` | `conn_mod_def::F78Z2Ah_1wA::hYYjAA6WTdK773GUFkcUtg` |

### Order

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a list of orders | GET | `orders.json` | `conn_mod_def::F6aS5ebtKjU::5Yljc5quQQ2Szntx-O0VDA` |
| Retrieve a Specific Order | GET | `orders/{{order_id}}.json` | `conn_mod_def::F6aS5vCbxOE::0Iwv0JnXRcerK2K2qwp82g` |
| Retrieve Order Count | GET | `orders/count.json` | `conn_mod_def::F6aS6S15SEA::5vVRy4RNRlmpERGGSYrIew` |
| Cancel an Order | POST | `orders/{{order_id}}/cancel.json` | `conn_mod_def::F6aS4__Bw2A::LiR0skyBTQCsleC8wFqXCw` |
| Close an Order | POST | `orders/{{order_id}}/close.json` | `conn_mod_def::F6aS5MAwKaA::OyEvXSDcSYqD5J2NGrI2FQ` |
| Create an Order | POST | `orders.json` | `conn_mod_def::F6aS40oC7lg::y4L2qo6tSTSl-2R5Srt24w` |
| Delete an Order | DELETE | `orders/{{order_id}}.json` | `conn_mod_def::F6aS6kg7JIU::aeweSYT6SVWma467Y6sqpw` |
| Re-open a Closed Order | POST | `orders/{{order_id}}/open.json` | `conn_mod_def::F6aXPO37lIs::WhS80ngISPWn-Xo3i0mhIw` |
| Update an Order | PUT | `orders/{{order_id}}.json` | `conn_mod_def::F6aS7cqFqoU::wbtT8iE5RzmA8vbRgXQW3Q` |

### Product

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a count of products | GET | `products/count.json` | `conn_mod_def::F6M0WxmLmgI::6FLS1DshQYqr3V4MS3fQoQ` |
| Retrieve a List of Products | GET | `products.json` | `conn_mod_def::F6M0WD0vHS0::uhL7OO3RQzOTnV7EDd3oZg` |
| Retrieve a Single Product | GET | `products/{{product_id}}.json` | `conn_mod_def::F6M0WYhBi2o::Q835xLFvRb2NTh1ecKYLHg` |
| Create a new product | POST | `products.json` | `conn_mod_def::F6M0VgIGe3Y::br7lCJOGSXikfT3PsnRh3Q` |
| Delete a Product | DELETE | `products/{{product_id}}.json` | `conn_mod_def::F6M0XcMD2xM::IOFH793gRM6rW6VaRKsicw` |
| Update Product | PUT | `products/{{product_id}}.json` | `conn_mod_def::F6M0XFOiGas::-zZvtSVRSq2Kr0Zf530FhQ` |

### PriceRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve List of Price Rules | GET | `price_rules.json` | `conn_mod_def::F78Z4wU-Uxg::Rb5jZlfPTy-a0OyKpOSuLA` |
| Retrieve Price Rule | GET | `price_rules/{{id}}.json` | `conn_mod_def::F78Z4sU7Fkg::8nlaDz6ESLmVsHJT1GlLdw` |
| Retrieve Price Rule Count | GET | `price_rules/count.json` | `conn_mod_def::F78Z2hR8DYg::KTXQ0LbeR1qvcUh1BAP33A` |
| Create Price Rule | POST | `price_rules.json` | `conn_mod_def::F78irz-JIpY::Xdx98pnJSB65HvwB11NXPg` |
| Remove an existing PriceRule | DELETE | `price_rules/{{id}}.json` | `conn_mod_def::F78Z2B-Qp9A::glLAQ5F_TOG5WAWxSwaqDA` |
| Update Price Rule | PUT | `price_rules/{{id}}.json` | `conn_mod_def::F78Z3BAZOdA::rfNUZORmQLex9otci5DsrA` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive a Count of All Webhooks | GET | `webhooks/count.json` | `conn_mod_def::F78Z3OzXoeA::C2n5Ht3XQ0aNnPheBgMXsA` |
| Receive Single Webhook | GET | `webhooks/{{id}}.json` | `conn_mod_def::F78Z41bsVAg::jGZxxfEPRCi-tHrS922m3g` |
| Retrieve List of Webhooks | GET | `webhooks.json` | `conn_mod_def::F78Z5bk7dsg::qQBVd-PbQDmW31yfZsI85Q` |
| Create a new Webhook | POST | `webhooks.json` | `conn_mod_def::F78Z4irQyHg::tpBudKCEQqOVZAsOsVo8JQ` |
| Modify Webhook | PUT | `webhooks/{{id}}.json` | `conn_mod_def::F78Z4e5NFXg::Dla8bBgNTCKvtnqX59V1qA` |
| Remove Existing Webhook | DELETE | `webhooks/{{id}}.json` | `conn_mod_def::F78Z3yALu1g::MHJ6ax8ETfiMi7ahBXUSTA` |

### Shop

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Shop Configuration | GET | `/shop.json` | `conn_mod_def::F8Ciw3I8aqg::dth5m-nETk6P1BmUCx6joQ` |

## When a call fails

The error comes from Shopify (Legacy), not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shopify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
