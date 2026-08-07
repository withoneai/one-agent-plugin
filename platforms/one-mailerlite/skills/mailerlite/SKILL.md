---
name: mailerlite
description: MailerLite is an email marketing platform that provides tools for creating campaigns, managing subscribers, building landing pages, and automating customer journeys, allowing businesses to run targeted email communications and integrate marketing workflows through its API and developer tools. Read and write Mailerlite data through One: subscribers, products, orders, automations, campaigns, cartitems and more, 89 actions with real parameter documentation. Use whenever the user asks to look something up in Mailerlite, create or update a record there, or build code against the Mailerlite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailerlite
  generated-from: one-knowledge-base
---

# Mailerlite through One

MailerLite is an email marketing platform that provides tools for creating campaigns, managing subscribers, building landing pages, and automating customer journeys, allowing businesses to run targeted email communications and integrate marketing workflows through its API and developer tools.

One exposes Mailerlite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailerlite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailerlite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailerlite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| Activity Log for a Subscriber | GET | `/api/subscribers/{{id}}/activity-log` | `conn_mod_def::GLTl57GTZvA::nXPA7MbLTByc3ip5fsdlQw` |
| Get a Subscriber by ID or Email | GET | `/api/subscribers/{{idOrEmail}}` | `conn_mod_def::GLTl54rLyjA::5E3NqRPjTBCAW0a7mKgiRg` |
| Get Subscribers | GET | `/api/subscribers` | `conn_mod_def::GLTl54LxDDA::1TuIDZixTUaLZzAJL0bCHg` |
| List Subscribers | GET | `/api/subscribers` | `conn_mod_def::GLTl6DdoIQg::csWgVrXSSCiD_nmaRXUutw` |
| List Subscribers in a Group | GET | `/api/groups/{{groupId}}/subscribers` | `conn_mod_def::GLTl5jq_ObA::FSQvtI3iTJyylmAbZxk3ww` |
| List Subscribers in a Segment | GET | `/api/segments/{{segmentId}}/subscribers` | `conn_mod_def::GLTl5wFg9PA::TRaPERDiQd22VyD8ZOLFgQ` |
| Assign a Subscriber to a Group | POST | `/api/subscribers/{{subscriberId}}/groups/{{groupId}}` | `conn_mod_def::GLTl5ZzxiRg::FXO4lJq_QXegM5ywkmnHxg` |
| Create or Update a Subscriber | POST | `/api/subscribers` | `conn_mod_def::GLTl5uexC1g::2hztetBUQ2KrbjPq7H93sA` |
| Delete a Subscriber | DELETE | `/api/subscribers/{{id}}` | `conn_mod_def::GLTl524wQfg::t8d-H6FrQAOZXSDJ85dLuQ` |
| Forget a Subscriber | POST | `/api/subscribers/{{id}}/forget` | `conn_mod_def::GLTl53a_PJg::4J7tdDWDQJuNkSyVBs-9-g` |
| Import Subscribers | POST | `/api/subscribers/import` | `conn_mod_def::GLTl6Es-rmg::5EWr7Ve5S12eQ4s0rfZufw` |
| Import Subscribers to a Group | POST | `/api/groups/{{groupId}}/import-subscribers` | `conn_mod_def::GLTl5iXx8EA::GVOLi_nIRcS5Q3sG7CbfAA` |

2 more Subscribers actions are available through search.

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/products/{{productId}}` | `conn_mod_def::GLTl47X6qcg::gbEIB1r8SqyVtOUsbq6SKw` |
| Get Product Count for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/products` | `conn_mod_def::GLTl4_i_MUg::kRakUU37Qgym1KqE3UTUUA` |
| List a Shop's Products | GET | `/api/ecommerce/shops/{{shopId}}/products` | `conn_mod_def::GLTl486nUEg::-wNMpTpOSa2TK0QXaK1v2g` |
| List Products for a Shop Category | GET | `/api/ecommerce/shops/{{shopId}}/categories/{{categoryId}}/products` | `conn_mod_def::GLTl4JBXwjA::FeSbKhzdRM2MPH3RdAFJ5A` |
| Create or Update a Shop Product | POST | `/api/ecommerce/shops/{{shopId}}/products` | `conn_mod_def::GLTl4yOLlmA::YbSo7VioR5aVvNxaH9YBiA` |
| Delete a Product for a Shop | DELETE | `/api/ecommerce/shops/{{shopId}}/products/{{productId}}` | `conn_mod_def::GLTl4sG_XPA::0pr_qWVwQoauui-0ruJ4og` |
| Import Products for a Shop | POST | `/api/ecommerce/shops/{{shopId}}/products/import` | `conn_mod_def::GLTl4j9cB5A::MASNN5PhTBq6kZP-B3u0aw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/orders/{{orderId}}` | `conn_mod_def::GLTl4sYVPdg::DCKBC3yaSxSwWovJ_5Oy6w` |
| Get Total Orders Count for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/orders` | `conn_mod_def::GLTl4sfQbuA::VR3_DcK7ToeszMqTrBuZfg` |
| List a Shop's Orders | GET | `/api/ecommerce/shops/{{shopId}}/orders` | `conn_mod_def::GLTl4tvkHLA::QOnIdzyHQImUWwzAjY0T6w` |
| Create or Update an Order for a Shop | POST | `/api/ecommerce/shops/{{shopId}}/orders` | `conn_mod_def::GLTl4ikxNag::Pak9ZE_nQ8yHgm4LrTmGMQ` |
| Delete an Order for a Shop | DELETE | `/api/ecommerce/shops/{{shopId}}/orders/{{orderId}}` | `conn_mod_def::GLTl4ivj7eA::nKoourgHRo6LxsiNm6hM0g` |
| Import Orders for a Shop | POST | `/api/ecommerce/shops/{{shopId}}/orders/import` | `conn_mod_def::GLTl4jKKI4A::O-PfZG6DT-CwpaLNF7Q4SQ` |

### Automations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Automation by ID | GET | `/api/automations/{{automationId}}` | `conn_mod_def::GLTl28hNGTg::Rn81XhZkRBW-iD_vfbk-bg` |
| List an Automation's Activity | GET | `/api/automations/{{automationId}}/activity` | `conn_mod_def::GLTl3C1feRA::4zvnU11rTE2T3q2Cv0aoPA` |
| List Automations | GET | `/api/automations` | `conn_mod_def::GLTl29a-GtA::XIeq2UD0QOa5t2jMvd7bvg` |
| Create Automations | POST | `/api/automations` | `conn_mod_def::GLTl28XKhTg::TxWStFabSAyJ7bc_HFNdlA` |
| Delete an Automation | DELETE | `/api/automations/{{automationId}}` | `conn_mod_def::GLTl28XduzA::d9-rWou6TZibNs5A4aGo2A` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/api/campaigns/{{campaignId}}` | `conn_mod_def::GLTl3LlfURA::zz15FaSERqG1JU5oG425Xg` |
| List Campaigns | GET | `/api/campaigns` | `conn_mod_def::GLTl3MiVrhg::esNj61hoQ--zAp2gJ8LVKQ` |
| Cancel a Campaign | POST | `/api/campaigns/{{campaignId}}/cancel` | `conn_mod_def::GLTl3L0wH5A::g4Pf9_NmRz-9EmOVVj2hVQ` |
| Create Campaign | POST | `/api/campaigns` | `conn_mod_def::GLTl3NRwTWA::7_51WygrS4iKZNcP56oMaw` |
| Schedule a Campaign | POST | `/api/campaigns/{{campaignId}}/schedule` | `conn_mod_def::GLTl3Vi4WLA::2qNnRvuHRaW-ay0rbFaQVQ` |

### CartItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cart Item for a Shop Cart | GET | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}/items/{{itemId}}` | `conn_mod_def::GLTl3rm0g0A::5SCCs9ZiTiSUWUny60S36w` |
| Get Cart Item Count for a Shop Cart | GET | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}/items` | `conn_mod_def::GLTl37L8z-g::tOfVGVk6Qz-s3O-v4oU2Jg` |
| List Cart Items for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}/items` | `conn_mod_def::GLTl39L5wwA::DK4zo21LTuGjdmXVtGg8EA` |
| Create or Update Cart Items for a Shop Cart | POST | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}/items` | `conn_mod_def::GLTl3sWYw2A::42RPje0EQQ2x7T4onZjMcA` |
| Delete a Cart Item for a Shop Cart | DELETE | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}/items/{{itemId}}` | `conn_mod_def::GLTl3sP2_ig::r5ollQEoQFGfo2ms40jHDw` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Customer | GET | `/api/ecommerce/shops/{{shopId}}/customers/{{customerId}}` | `conn_mod_def::GLTl4RLwCkA::_9xV7c1oQpS2KJViNOGlbA` |
| Get Customer Count for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/customers` | `conn_mod_def::GLTl4R8VP0g::dU4BwPJTRhWT4KWC18LCXQ` |
| List Customers for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/customers` | `conn_mod_def::GLTl4aJ7JBA::wU7VxaSMTFShgCxrrNGg_g` |
| Create or Update a Shop Customer | POST | `/api/ecommerce/shops/{{shopId}}/customers` | `conn_mod_def::GLTl4RQlZZA::G2VgIFHMTHuJGwtBqeVU4g` |
| Delete a Shop Customer | DELETE | `/api/ecommerce/shops/{{shopId}}/customers/{{customerId}}` | `conn_mod_def::GLTl4RzpBMA::5G_v_W1MQHambexLWcvknQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLTl6ONzxOg::wB5_IMUKTpyX3zfveQAO7w` |
| List Webhooks | GET | `/api/webhooks` | `conn_mod_def::GLTl6Mzd-Eg::C_pjw1LwQmmDgQ1haaPnHg` |
| Create Webhook | POST | `/api/webhooks` | `conn_mod_def::GLTl6En7Ctg::BJ3ZqYR4RBSU87zY4saY3w` |
| Delete a Webhook | DELETE | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLTl6On6-Qg::d54BknyDSGmD2rY_7o7LnQ` |
| Update a Webhook | PUT | `/api/webhooks/{{webhookId}}` | `conn_mod_def::GLTl6OyFAzA::fc5V_aLGSm2h34-kAOcCUw` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form by ID | GET | `/api/forms/{{formId}}` | `conn_mod_def::GLTl5IWA0qg::AupTgi3DQ7KrMdMoWOVAOA` |
| List Forms by Type | GET | `/api/forms/{{type}}` | `conn_mod_def::GLTl5ZugwkA::XL9YnUoxQkiAOr0sz41FbQ` |
| Delete a Form | DELETE | `/api/forms/{{formId}}` | `conn_mod_def::GLTl5G7EngA::jPzYiXIxQMGhR_jgUAV7mw` |
| Update a Form | PUT | `/api/forms/{{formId}}` | `conn_mod_def::GLTl5YXyloA::NAvT7-i0TUCSunoZgCyzHw` |

### EcommerceShops

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ecommerce Shops Total Count | GET | `/api/ecommerce/shops` | `conn_mod_def::GLTl3hYDj0g::JHUT_mFoT76b-2IBDCdS-A` |
| List Ecommerce Shops | GET | `/api/ecommerce/shops` | `conn_mod_def::GLTl3jpKjAg::XOnm7GG7S_CdyKV0osqbzg` |
| Create or Update an Ecommerce Shop | POST | `/api/ecommerce/shops` | `conn_mod_def::GLTl3YN1N_g::s8b9W5XURviX20hwDtLz5w` |
| Delete an Ecommerce Shop | DELETE | `/api/ecommerce/shops/{{id}}` | `conn_mod_def::GLTl3WdC1bg::sUBegJlySPycya91jPBcYA` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fields | GET | `/api/fields` | `conn_mod_def::GLTl5NCnHpA::saX01qp4TIyzKYr9yzucsg` |
| Create a Subscriber Field | POST | `/api/fields` | `conn_mod_def::GLTl46Pb5lg::GLMaFCkXTvS8ZBibiH1vTA` |
| Delete a Field | DELETE | `/api/fields/{{fieldId}}` | `conn_mod_def::GLTl46O9nHA::i7m_UVmVRR-HFKAgWb-iaw` |
| Update a Field | PUT | `/api/fields/{{fieldId}}` | `conn_mod_def::GLTl5IWZyUg::tlms6mAMREerVDtmZJK9yA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups | GET | `/api/groups` | `conn_mod_def::GLTl5h7Mq0g::jJitMiSMQX6ViO9NqdDpPA` |
| Create Group | POST | `/api/groups` | `conn_mod_def::GLTl5YlFxNg::hA2mKbZqRy2CYDjJTU5WTQ` |
| Delete a Group | DELETE | `/api/groups/{{groupId}}` | `conn_mod_def::GLTl5ZfB8dA::uIZgcxrRSpyBY8mlxdUq4w` |
| Update a Group | PUT | `/api/groups/{{groupId}}` | `conn_mod_def::GLTl5mlCxbg::akmFYJoPTLauaCG6IPREbw` |

### Carts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Carts for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/carts` | `conn_mod_def::GLTl3hiQFig::TaBEtfDPQS-RiRYtiehXzg` |
| List Carts for a Shop | GET | `/api/ecommerce/shops/{{shopId}}/carts` | `conn_mod_def::GLTl3t7wxRA::8HSV0dNuR-yclfd1ijDafA` |
| Update a Cart for a Shop | PUT | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}` | `conn_mod_def::GLTl3sHFAvg::hx3hoPjzSwCsJtqxmXWrrg` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Category Count for an Ecommerce Shop | GET | `/api/ecommerce/shops/{{shopId}}/categories` | `conn_mod_def::GLTl4FSBBIg::U4yXt5XgQdOu470abfishQ` |
| List a Shop's Categories | GET | `/api/ecommerce/shops/{{shopId}}/categories` | `conn_mod_def::GLTl4HUArJA::boKQwDbgT_akjuJz4DRYMQ` |
| Import Categories for a Shop | POST | `/api/ecommerce/shops/{{shopId}}/categories/import` | `conn_mod_def::GLTl4jUzTmg::gNPI1CwJTIG2vKCxGgcAHA` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Segments | GET | `/api/segments` | `conn_mod_def::GLTl5urTr-g::JkhLdvBxTliCOpHRBy8PQw` |
| Delete a Segment | DELETE | `/api/segments/{{segmentId}}` | `conn_mod_def::GLTl5tN4LgA::pxKJOVBBRYGdgJlIMnBYiQ` |
| Update a Segment | PUT | `/api/segments/{{segmentId}}` | `conn_mod_def::GLTl5umS5tA::7hSIVXTxR6GbpudFrKXtxA` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Campaign | DELETE | `/api/campaigns/{{campaignId}}` | `conn_mod_def::GLTl3K16Iqg::PCswF3LzTjOXdVQBQ-c-lg` |
| Update a Campaign | PUT | `/api/campaigns/{{campaignId}}` | `conn_mod_def::GLTl3ViUkIg::754BnzJIS_Keb8cZapvRTQ` |

### ShopCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign a Product to a Shop Category | PUT | `/api/ecommerce/shops/{{shopId}}/categories/{{categoryId}}/products/{{productId}}` | `conn_mod_def::GLTl4FNvZag::kIZAXh4TRr6uCbm5axc9EQ` |
| Delete a Shop Category | DELETE | `/api/ecommerce/shops/{{shopId}}/categories/{{categoryId}}` | `conn_mod_def::GLTl318stjA::C9tKp7-aRrCww2Q3sWPiDg` |

### ShopCategory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Category | GET | `/api/ecommerce/shops/{{shopId}}/categories/{{categoryId}}` | `conn_mod_def::GLTl3186J5g::wgUqhTjqTnm8pjVeRiZ4Ow` |
| Create or Update a Shop Category | POST | `/api/ecommerce/shops/{{shopId}}/categories` | `conn_mod_def::GLTl34ndTPA::x23UEkIvTp2Z_VFfpH1Mvg` |

### ShopCategoryProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Unassign a Product from a Shop Category | DELETE | `/api/ecommerce/shops/{{shopId}}/categories/{{categoryId}}/products/{{productId}}` | `conn_mod_def::GLTl4GBm3tA::8YRAcbb3QV2u-ZDO9u_AYw` |

### SubscriberImportReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscriber Import Report | GET | `/api/subscribers/import/{{importId}}` | `conn_mod_def::GLTl6EneU0g::3WjN1CpoSqq43NxVasHd7A` |

### CampaignSubscriberActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Subscriber Activity for a Campaign Report | GET | `/api/campaigns/{{campaignId}}/reports/subscriber-activity` | `conn_mod_def::GLTl3YNtTKA::CuE0F3s7ThCz08lGlRro2Q` |

### ShopCart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop Cart | GET | `/api/ecommerce/shops/{{shopId}}/carts/{{cartId}}` | `conn_mod_def::GLTl3hYDnug::G1d6xrU6SU-xMR1erNoMsA` |

### Shops

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shop | GET | `/api/ecommerce/shops/{{shopId}}` | `conn_mod_def::GLTl3hZ29kA::6QxuER0oQ5SM47c_VKhg7g` |

### FormSubscribers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Subscribers | GET | `/api/forms/{{formId}}/subscribers` | `conn_mod_def::GLTl5RJoT3A::AAp5pMooSc29sn6CtQwgXA` |

This lists 87 of 89 actions. For anything not here, call `search_one_platform_actions` with platform `mailerlite`. The full catalog is at https://www.withone.ai/knowledge/mailerlite.

## When a call fails

The error comes from Mailerlite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailerlite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
