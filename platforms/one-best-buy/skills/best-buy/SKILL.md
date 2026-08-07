---
name: best-buy
description: Best Buy is a consumer electronics retailer that sells technology products and related services through its online store and physical locations, allowing customers to browse, purchase, and arrange delivery or pickup for devices, appliances, and accessories. Read and write Best Buy data through One: products, stores, openboxoffers, categories, openbox, productsstoresorcategories and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Best Buy, create or update a record there, or build code against the Best Buy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: best-buy
  generated-from: one-knowledge-base
---

# Best Buy through One

Best Buy is a consumer electronics retailer that sells technology products and related services through its online store and physical locations, allowing customers to browse, purchase, and arrange delivery or pickup for devices, appliances, and accessories.

One exposes Best Buy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `best-buy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Best Buy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Best Buy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Also Viewed Products for a Product | GET | `/v1/products/{{sku}}/alsoViewed` | `conn_mod_def::GMZix23paoA::OHgGPCOrTqWsnKkQj306mA` |
| Complex Searches for Products | GET | `/v1/products({{search}})` | `conn_mod_def::GMZix3IWVwg::96zqLOqZSRaeKciceQMn0Q` |
| Get Also Bought Products for a Product | GET | `/v1/products/{{sku}}/alsoBought` | `conn_mod_def::GMZix4Flh4g::2dCyFPpVQk6FDI6KJ7SKaw` |
| Get In-Store Availability for a Product | GET | `/v1/products/{{sku}}/stores.json` | `conn_mod_def::GMZiyJWBSoA::7HHx-HH1TWqdKEDzigfGLA` |
| Get Trending Viewed Products | GET | `/v1/products/trendingViewed(categoryId={{categoryId}})` | `conn_mod_def::GMZiyQLACsg::aZEnv5moQNua5SzYRrqhDw` |
| Most Viewed Products | GET | `/v1/products/mostViewed(categoryId={{categoryId}})` | `conn_mod_def::GMZiyGAMWsA::bLfgDZ0aQR6jlA4hpcAROQ` |
| Return Selected Attributes for Products, Stores, or Categories | GET | `/v1/products/{{sku}}.json` | `conn_mod_def::GMZiyV82mtg::5p5Stq0_RQKojZ09CIAdBA` |
| Search for Products by Multiple Attribute Values | GET | `/v1/products({{query}})` | `conn_mod_def::GMZiyWOiTbA::dNkNkKeHTImSD-fBXZN9Yw` |
| Viewed Ultimately Bought Products for a Product | GET | `/v1/products/{{sku}}/viewedUltimatelyBought` | `conn_mod_def::GMZiynvi8pg::rhSXpVE9RaKZ73vGH81ddg` |

### Stores

| Action | Method | Path | Action id |
|---|---|---|---|
| Area Function | GET | `/v1/stores(area({{location}},{{distance}}))` | `conn_mod_def::GMZiyAHuKXg::R1Uet4PIRpuNYS3rfESAkw` |
| Search Stores by a Single Attribute | GET | `/v1/stores({{filter}})` | `conn_mod_def::GMZiySTle2A::9yNnzJ0aSUq9kEz1q9dn2A` |

### OpenBoxOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Open Box Offers for a Single SKU | GET | `/beta/products/{{sku}}/openBox` | `conn_mod_def::GMZiyIx6ZKg::lUtEUTxnSfqof3mMFMnqzg` |
| List Open Box Offers by SKU List | GET | `/beta/products/openBox({{skuFilter}})` | `conn_mod_def::GMZiyGllGbg::9ntN1QI4T2GyPkOwW4NS1g` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Categories | GET | `/v1/categories` | `conn_mod_def::GMZix4nz-XA::s7Ln71OLT56BFLI8Z-Q9Iw` |

### OpenBox

| Action | Method | Path | Action id |
|---|---|---|---|
| Open Box by Category | GET | `/beta/products/openBox(categoryId={{categoryId}})` | `conn_mod_def::GMZiyGrNWGA::2mJU3EaSSfW7WIikLqAMgw` |

### ProductsStoresOrCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Sort Products, Stores, or Categories | GET | `/v1/{{resource}}` | `conn_mod_def::GMZiye-33Eg::CpImYQv4QfGVpX8IhwhUqw` |

### Warranties

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Product's Warranties | GET | `/v1/products/{{skuId}}/warranties.json` | `conn_mod_def::GMZiymnyneA::PVuausipT-KjDUaYEMKt4Q` |

## When a call fails

The error comes from Best Buy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/best-buy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
