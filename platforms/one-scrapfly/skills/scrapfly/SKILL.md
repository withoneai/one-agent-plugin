---
name: scrapfly
description: Scrapfly is a web scraping and data extraction platform that provides APIs, proxy infrastructure, and anti-bot bypass capabilities, allowing developers and data teams to collect structured web data, automate scraping workflows, and access dynamic websites at scale. Read and write Scrapfly data through One: scrape, crawl, account, crawledurls, crawlerstatus, crawlcontents and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Scrapfly, create or update a record there, or build code against the Scrapfly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scrapfly
  generated-from: one-knowledge-base
---

# Scrapfly through One

Scrapfly is a web scraping and data extraction platform that provides APIs, proxy infrastructure, and anti-bot bypass capabilities, allowing developers and data teams to collect structured web data, automate scraping workflows, and access dynamic websites at scale.

One exposes Scrapfly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `scrapfly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Scrapfly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Scrapfly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Scrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a URL | GET | `/scrape` | `conn_mod_def::GMTkYBr8B3g::W7HCiDQ_RIOTwF_C5KCp6Q` |
| Patch Scrape | PATCH | `/scrape` | `conn_mod_def::GMTkYO7YXSQ::U5oBVwj0RmyCGFprnhd1uA` |
| Scrape a URL | POST | `/scrape` | `conn_mod_def::GMTkYNF71_Q::wTvVqAPKTkiVvq6MSB9nUw` |
| Scrape a URL | PUT | `/scrape` | `conn_mod_def::GMTkYTXdiZ4::QTXdBOCySwWjuvEYHPjqOA` |

### Crawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Crawl | POST | `/crawl/{{crawlerUuid}}/cancel` | `conn_mod_def::GMTkYA_ZdYk::ehM7VJsARjiVDTgBYDJxzw` |
| Crawl Using Real-Time Webhooks | POST | `/crawl` | `conn_mod_def::GMTkYBIJIhk::4ahPNExeTe2tzS2Zi3Uxag` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/account` | `conn_mod_def::GMTkX2BnN2o::NaHrZJqTTSaRlVGyuju83w` |

### CrawledUrls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Crawled URLs for a Crawler | GET | `/crawl/{{crawlerUuid}}/urls` | `conn_mod_def::GMTkX2xy8Io::oTdKiPbJR4qHX6bTFPEuwg` |

### CrawlerStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Crawler Status | GET | `/crawl/{{crawlerUuid}}/status` | `conn_mod_def::GMTkX28DTok::rANUDP-tRKaSTSFql3IinQ` |

### CrawlContents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Crawl Contents | GET | `/crawl/{{crawlerUuid}}/contents` | `conn_mod_def::GMTkX28_bPo::22bRakQdRaKbpTcKhQjYGw` |

### CrawlArtifact

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Crawl Artifact | GET | `/crawl/{{crawlerUuid}}/artifact` | `conn_mod_def::GMTkX3h1wmA::2l7EPffdQI-EUImC04_RgA` |

### Extraction

| Action | Method | Path | Action id |
|---|---|---|---|
| Extraction Using Scrapfly | POST | `/extraction` | `conn_mod_def::GMTkYC290ZY::HZvt3eVKT4S00njSJkykDQ` |

### CrawlerContents

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Content Retrieval for a Crawler | POST | `/crawl/{{crawlerUuid}}/contents/batch` | `conn_mod_def::GMTkYKSdqiw::lXeMMPTRT9GTXtVrm2kv-A` |

### Screenshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Screenshot Using Scrapfly | GET | `/screenshot` | `conn_mod_def::GMTkYLK_y0U::Tktz4KBlTh6CLwci4eXnQA` |

## When a call fails

The error comes from Scrapfly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scrapfly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
