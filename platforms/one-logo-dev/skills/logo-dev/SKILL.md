---
name: logo-dev
description: Logo.dev is a developer tool that provides an API for retrieving company logos and brand assets from domains or company names, allowing applications and workflows to enrich interfaces, customer records, and business data with consistent visual branding. Read and write Logo.dev data through One: logos, marketindexlogos, cryptocurrencylogos, usercreditsautorecharge, stockexchangelogos, brandprofile and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in Logo.dev, create or update a record there, or build code against the Logo.dev API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: logo-dev
  generated-from: one-knowledge-base
---

# Logo.dev through One

Logo.dev is a developer tool that provides an API for retrieving company logos and brand assets from domains or company names, allowing applications and workflows to enrich interfaces, customer records, and business data with consistent visual branding.

One exposes Logo.dev through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `logo-dev` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Logo.dev is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Logo.dev account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Logos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Logo by Brand Name | GET | `/name/{{brand}}` | `conn_mod_def::GMbeXIZ3HPg::IdPO2Iw4SQyAAiH5Miyq0g` |
| Get a Logo by Domain | GET | `/{{domain}}` | `conn_mod_def::GMbeXJbk1Qg::NhTmYA4OQxefYQGlOGyRow` |
| Get a Logo by ISIN | GET | `/isin/{{isin}}` | `conn_mod_def::GMbeXH8nXQA::ifBb8LidRVW9jkagvuyUVA` |
| Get a Logo by Stock Ticker | GET | `/ticker/{{ticker}}` | `conn_mod_def::GMbeXX3927A::gx0UgKYvQkeRL185DHHAmw` |

### MarketIndexLogos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Logo by Market Index | GET | `/index/{{symbol}}` | `conn_mod_def::GMbeXLNjRAg::NhpkRmNdRKOlQqb8jXHOKQ` |

### CryptocurrencyLogos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cryptocurrency Logo by Symbol | GET | `/crypto/{{symbol}}` | `conn_mod_def::GMbeXPgqu8A::cwE0qM6gROW3Tjh7fUoCJA` |

### UserCreditsAutoRecharge

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Credit Auto-Recharge for a User | PUT | `/user/{{id}}/credits/auto_recharge` | `conn_mod_def::GMbeXX19MjA::lzQ4BLUlSAupX44A5KbEJA` |

### StockExchangeLogos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Logo by Stock Exchange | GET | `/exchange/{{exchange}}` | `conn_mod_def::GMbeXX6nCEg::w7TyiW7zTV-adxKuYC5YHw` |

### BrandProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Profile by Domain | GET | `/brand/{{domain}}` | `conn_mod_def::GMbeXYKCXhg::JQWJSV4-SUWjNzIMm6wH5A` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Describe a Domain | GET | `/describe/{{domain}}` | `conn_mod_def::GMbeXbal4vA::8nUmnS2fQj-GwfJU4bQTPA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credit Status for a User | GET | `/user/{{id}}/credits` | `conn_mod_def::GMbeXhY8SNA::xuchvNoaSsCYyEMSd9St7A` |

### Merchant

| Action | Method | Path | Action id |
|---|---|---|---|
| Identify a Merchant | POST | `/transaction` | `conn_mod_def::GMbeXiGfxBg::BL7d_20JQJGfjcBBc0G9fw` |

### Brands

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Brands | GET | `/search` | `conn_mod_def::GMbeXi5yMOA::VF-IuvkYSMq0Dg8ewDf8fA` |

## When a call fails

The error comes from Logo.dev, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/logo-dev

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
