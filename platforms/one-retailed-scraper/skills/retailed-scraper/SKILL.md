---
name: retailed-scraper
description: Retailed Scraper is a web-based platform with account access and third-party sign-in options, but the provided website content only shows a login page, so its specific product capabilities and supported integrations are not clear from the available information. Read and write Retailed Scraper data through One: bestbuyproduct, chrono24product, bestbuyproducts, prices, chrono24search, diorproduct and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Retailed Scraper, create or update a record there, or build code against the Retailed Scraper API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: retailed-scraper
  generated-from: one-knowledge-base
---

# Retailed Scraper through One

Retailed Scraper is a web-based platform with account access and third-party sign-in options, but the provided website content only shows a login page, so its specific product capabilities and supported integrations are not clear from the available information.

One exposes Retailed Scraper through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `retailed-scraper` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Retailed Scraper is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Retailed Scraper account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BestbuyProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bestbuy Product | GET | `/api/v1/scraper/bestbuy/product` | `conn_mod_def::GMP8fp17Rgg::HIIxJUU9S6um4yoAgmi8Rg` |

### Chrono24Product

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Chrono24 Product Information | GET | `/api/v1/scraper/chrono24/product` | `conn_mod_def::GMP8fqMCCbg::0cdwzTz0QI6_887DbkomZw` |

### BestbuyProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bestbuy Products | GET | `/api/v1/scraper/bestbuy/search` | `conn_mod_def::GMP8fqOk8Ng::sKf1FCliR6KoC9Th6raTYw` |

### Prices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Prices | GET | `/api/v1/db/prices` | `conn_mod_def::GMP8fqlD1FA::2GpiakLpTuif_bJQxxgz7g` |

### Chrono24Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Chrono24 | POST | `/api/v1/scraper/chrono24/search` | `conn_mod_def::GMP8fuF_pHA::ZBvOAc1zR32WhZxJ_EWj0Q` |

### DiorProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dior Product Information | GET | `/api/v1/scraper/dior/product` | `conn_mod_def::GMP8f2WJCLA::7C6ZHdpmSJWmWyrUj9aPjQ` |

### ShopifyProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shopify Products | GET | `/api/v1/shopify/products` | `conn_mod_def::GMP8f2XWeOg::yEZjPNhHRhGGpA7TREkukg` |

### FarfetchProductInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Farfetch Product Information | GET | `/api/v1/scraper/farfetch/product` | `conn_mod_def::GMP8f2nt7Vg::AconH2KNS2Sm_6O2rgXCtw` |

### Variants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Variants | GET | `/api/v1/db/variants` | `conn_mod_def::GMP8f3KCvCg::Y9txPEkbRL6wcA2wsQdDlg` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| List Products | GET | `/api/v1/db/products` | `conn_mod_def::GMP8gC652xA::p1fO2YSCSraDzEKE44S_Dw` |

### GoatProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Goat Product | GET | `/api/v1/scraper/goat/product` | `conn_mod_def::GMP8gJyiaBg::O6FA0sR4QRaMPrkasQAedw` |

### GoatProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Goat Products | GET | `/api/v1/scraper/goat/search` | `conn_mod_def::GMP8gJ7WS5A::HnfNPyCMRriP666IomJwMw` |

### GoatPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Goat Prices | GET | `/api/v1/scraper/goat/prices` | `conn_mod_def::GMP8gKAipZg::vkp_mXjOT5mPfvVmQf383Q` |

### GoatTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Goat Trends | GET | `/api/v1/scraper/goat/trends` | `conn_mod_def::GMP8gK5viRg::ZF_6xnnUSXWger-32sF-nA` |

### Forever21Product

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forever21 Product Information | GET | `/api/v1/scraper/forever21/product` | `conn_mod_def::GMP8gLS5WmA::qbzv-mubSBa4QrgYkHb2TQ` |

### StadiumGoodsProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get StadiumGoods Product Information | GET | `/api/v1/scraper/stadiumgoods/product` | `conn_mod_def::GMP8gS5H0oA::oaY05EVCSIaumeCRUzj_HA` |

### StockxProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search StockX Products | GET | `/api/v1/scraper/stockx/search` | `conn_mod_def::GMP8gTADFxA::3iZPGk84QO2fgN_quONW8g` |

### MacysProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Macys Product | GET | `/api/v1/scraper/macys/product` | `conn_mod_def::GMP8gTAvBSg::4-VTeVmlQq-vSiY2GG2knQ` |

### StockxProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a StockX Product | GET | `/api/v1/scraper/stockx/product` | `conn_mod_def::GMP8gUFJGjg::0zabHHiuSzW-J_FiXlm-eQ` |

### NikeProductInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Nike Product Information | GET | `/api/v1/scraper/nike/product` | `conn_mod_def::GMP8gUiBXng::HtYjAGNvSEiqGBHeszeCaA` |

### ZalandoProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Zalando Product Information | GET | `/api/v1/scraper/zalando/product` | `conn_mod_def::GMP8gbUtvhg::cUp0-iaPQiecrDTnVV45HA` |

### ZaraProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Zara Product Information | GET | `/api/v1/scraper/zara/product` | `conn_mod_def::GMP8gciKj2g::Fjc2nlIJRuOSmxXPSq2LkA` |

### ApiUsageInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Usage Information | GET | `/api/v1/usage` | `conn_mod_def::GMP8gcqfaZA::TOhEEH9uT-SHlw0WsutMXw` |

### StockXTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get StockX Trends | GET | `/api/v1/scraper/stockx/trends` | `conn_mod_def::GMP8gcq9u0g::gufxJmc8SnK5dNQMAaJdKg` |

### UniqloProductInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Uniqlo Product Information | GET | `/api/v1/scraper/uniqlo/product` | `conn_mod_def::GMP8ghCtMHA::ciIA1AjPR7yyCQu5XGnUmQ` |

## When a call fails

The error comes from Retailed Scraper, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/retailed-scraper

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
