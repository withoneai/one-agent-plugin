---
name: firecrawl
description: Firecrawl is a website crawling and indexing tool designed to help developers and marketers monitor and optimize their website structure, SEO, and performance in real time. Read and write Firecrawl data through One: browsersessions, agentjobs, teamcreditusage, crawljobs, batchscrapejobs, agenttasks and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Firecrawl, create or update a record there, or build code against the Firecrawl API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: firecrawl
  generated-from: one-knowledge-base
---

# Firecrawl through One

Firecrawl is a website crawling and indexing tool designed to help developers and marketers monitor and optimize their website structure, SEO, and performance in real time.

One exposes Firecrawl through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `firecrawl` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Firecrawl is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Firecrawl account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BrowserSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Browser Sessions | GET | `/v2/browser` | `conn_mod_def::GJ2dM_Ipl5c::aerAJ9tAQ7moOsFK4xywmw` |
| Create a Browser Session | POST | `/v2/browser` | `conn_mod_def::GJ2dMmKNmb8::MDQm-oTbTdu_T1R6IeogIw` |
| Delete a Browser Session | DELETE | `/browser/{{sessionId}}` | `conn_mod_def::GJ2dMvtuXM4::Zim_NeHjQ5KfRT4SEz0ULg` |

### AgentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Job’s Status | GET | `/agent/{{jobId}}` | `conn_mod_def::GJ2dLtIOQP0::ZuFUaZvnS0OKb_6ioQqP_w` |
| Cancel an Agent Job | DELETE | `/agent/{{jobId}}` | `conn_mod_def::GJ2dLfvybv0::O_Ki9DqCTy2DOMOtgn0Fuw` |

### TeamCreditUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Credit Usage | GET | `/v2/team/credit-usage` | `conn_mod_def::GJ2dMSvnfjI::kFZU42FdQpyWybXpvLl1ow` |
| Get Historical Team Credit Usage | GET | `/v2/team/credit-usage/historical` | `conn_mod_def::GJ2dL-bKIDA::tISt44W9QXm3hu6nWPHKXg` |

### CrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Crawl Job’s Status | GET | `/crawl/{{id}}` | `conn_mod_def::GJ2dNmcgXOw::DOZPAVEuRqqobZtcza78qA` |
| Cancel a Crawl Job | DELETE | `/crawl/{{id}}` | `conn_mod_def::GJ2dNHfLOVU::buE-WsEsTzWUlKc8TYk7iw` |

### BatchScrapeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Scrape Job Status | GET | `/batch/scrape/{{id}}` | `conn_mod_def::GJ2dOosWqA4::esM-ZcCSSJCjyOd4wkEwPw` |
| Cancel a Batch Scrape Job | DELETE | `/batch/scrape/{{id}}` | `conn_mod_def::GJ2dOaIAZsU::2Yy9Z6q5RHqKC-PYd4aCUQ` |

### AgentTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Start an Agent Task | POST | `/v2/agent` | `conn_mod_def::GJ2dL1EoRio::twE0sXYUROebXHrWK-qSGw` |

### TeamTokenUsageHistorical

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Historical Token Usage (Extract Only) | GET | `/v2/team/token-usage/historical` | `conn_mod_def::GJ2dMHRsy98::_jhbdDdDTMCie3ukwS-ssw` |

### TeamTokenUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Remaining Extract Tokens | GET | `/v2/team/token-usage` | `conn_mod_def::GJ2dMbb6jZM::3xRPw3jxSDuMY9w137ntYA` |

### Browser

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute Code in a Browser Session | POST | `/browser/{{sessionId}}/execute` | `conn_mod_def::GJ2dM4QsA6E::6M2KCZ3qQGGP6zELzaJA_g` |

### Crawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Crawl URLs (Start a Crawl From a Base URL) | POST | `/v2/crawl` | `conn_mod_def::GJ2dNOxfWDo::Dl9HDomVTriMi4aQdQxOTA` |

### Crawls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Active Crawls (Team) | GET | `/v2/crawl/active` | `conn_mod_def::GJ2dNWk41bM::nt0xxDnSTNiu6w7973TVMg` |

### CrawlJobErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Crawl Job’s Errors | GET | `/crawl/{{id}}/errors` | `conn_mod_def::GJ2dNegJeFI::cE6gki9-QTun1ohKfPGPeQ` |

### CrawlParamsPreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Preview Crawl Parameters From Natural Language Prompt | POST | `/v2/crawl/params-preview` | `conn_mod_def::GJ2dNvdwHt8::BNweonkISVqj6t5xv_MJPg` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Structured Data From URLs (LLM Extraction) | POST | `/v2/extract` | `conn_mod_def::GJ2dN483PYQ::HJVGeiYMR8uaNmqhb9uv7A` |

### Map

| Action | Method | Path | Action id |
|---|---|---|---|
| Map URLs | POST | `/v2/map` | `conn_mod_def::GJ2dOGF2UaM::fHokZ8K7RmCeCvjmrX7ApA` |

### TeamQueueStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team's Scrape Queue Status | GET | `/v2/team/queue-status` | `conn_mod_def::GJ2dORT6Mdk::ytcUL4cqS5azItECCAUw0A` |

### Scrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape and Extract From a URL | POST | `/v2/scrape` | `conn_mod_def::GJ2dOxYafzY::oV-TiF9nTQWwk8sfh0z0Nw` |

### BatchScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Scrape Multiple URLs | POST | `/v2/batch/scrape` | `conn_mod_def::GJ2dO863TE0::6CQsI7q3REej6itiQjfWoA` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search and Optionally Scrape Results | POST | `/v2/search` | `conn_mod_def::GJ2dPF9ibb0::W3SEmo9KREuvE1qqrbDSpg` |

### ExtractJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Extract Job’s Status | GET | `/extract/{{id}}` | `conn_mod_def::GJ2dN_9l_Ys::g5uTgqKCTdaHDMMKHsMzlQ` |

### BatchScrapeJobErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Batch Scrape Job’s Errors | GET | `/batch/scrape/{{id}}/errors` | `conn_mod_def::GJ2dOgthMck::O0MpmsGdQ8q5uWsWQ4Abww` |

## When a call fails

The error comes from Firecrawl, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/firecrawl

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
