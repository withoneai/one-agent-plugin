---
name: scrape-do
description: Scrape.do is a web-scraping API that bypasses anti-bot systems (like Cloudflare or Akamai) by using rotating residential and mobile proxies, real browser fingerprints, headless browser rendering, and CAPTCHA handling to provide scalable, reliable access to public web data. Read and write Scrape.do data through One: jobs, subscriptionusagestatistics, amazonpdp, amazonofferlisting, googlesearch, scrapedoproxy and more, 12 actions with real parameter documentation. Use whenever the user asks to look something up in Scrape.do, create or update a record there, or build code against the Scrape.do API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scrape-do
  generated-from: one-knowledge-base
---

# Scrape.do through One

Scrape.do is a web-scraping API that bypasses anti-bot systems (like Cloudflare or Akamai) by using rotating residential and mobile proxies, real browser fingerprints, headless browser rendering, and CAPTCHA handling to provide scalable, reliable access to public web data.

One exposes Scrape.do through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `scrape-do` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Scrape.do is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Scrape.do account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job’s Task Details | GET | `/api/v1/jobs/{{jobId}}/{{taskId}}` | `conn_mod_def::GJ6X_vpTwmg::SWvw4F1TR6WcKQcFVeZkmA` |
| Get Asynchronous Job Details | GET | `/api/v1/jobs/{{jobId}}` | `conn_mod_def::GJ6X_uxfLhQ::-sTKW8lLRkylVhVIIFbZsA` |
| List Asynchronous Jobs (Authenticated User) | GET | `/api/v1/jobs` | `conn_mod_def::GJ6X_2WYTTc::Dgz0WxBOQ6KwRrPoE9rQkw` |
| Cancel an Asynchronous Job | DELETE | `/api/v1/jobs/{{jobId}}` | `conn_mod_def::GJ6X_dSNUek::tSfREbPrQw6xhHNvCmR4rw` |
| Create an Asynchronous Scraping Job | POST | `/api/v1/jobs` | `conn_mod_def::GJ6X_uiDhuc::kvRKDHEfSHKTRowl57IIPQ` |

### SubscriptionUsageStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Subscription Usage Statistics | GET | `/info` | `conn_mod_def::GJ6X_-6_8Po::quTRPbjfSpCl3XEn8FXPHQ` |

### AmazonPdp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Amazon Product Detail Page (PDP) | GET | `/plugin/amazon/pdp` | `conn_mod_def::GJ6X_iESCr0::EhQC3X53ToWKNt5CXB_STA` |

### AmazonOfferListing

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Amazon Product’s All Seller Offers (Offer Listing) | GET | `/plugin/amazon/offer-listing` | `conn_mod_def::GJ6X_iiS4hQ::o-i6BD6mTjum2e_JAYzSHQ` |

### GoogleSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google (Structured SERP JSON) | GET | `/plugin/google/search` | `conn_mod_def::GJ6X_z8YnpE::UyYRqbBpTPuzmz-XQ5rTUg` |

### ScrapeDoProxy

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Custom POST Request to a Target Website (via Scrape.do Proxy) | POST | `/` | `conn_mod_def::GJ6YAYrNAuA::uCvECfKkQJ6uDpf-tOahOg` |

### AmazonRawHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Amazon Raw HTML (Geo-Targeted by ZIP Code) | GET | `/plugin/amazon/` | `conn_mod_def::GJ6X_mkx4oI::KsQiyHjdSnGZkGo1hEj_5A` |

### AmazonSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon (Keyword Search & Category Pages) | GET | `/plugin/amazon/search` | `conn_mod_def::GJ6X_eLtxVw::thlI86J8SzehbkNU2gUBNQ` |

## When a call fails

The error comes from Scrape.do, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scrape-do

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
