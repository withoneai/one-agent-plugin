---
name: scrape-graph-ai
description: ScrapeGraphAI is a web scraping platform that uses AI and graph-based workflows to extract structured data from websites and documents, allowing developers and teams to automate data collection, build scraping pipelines, and integrate retrieval into applications and agents. Read and write Scrape Graph AI data through One: scheduledjobs, sitemonitors, crawl, x402proxy, credits, markdownifystatus and more, 59 actions with real parameter documentation. Use whenever the user asks to look something up in Scrape Graph AI, create or update a record there, or build code against the Scrape Graph AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scrape-graph-ai
  generated-from: one-knowledge-base
---

# Scrape Graph AI through One

ScrapeGraphAI is a web scraping platform that uses AI and graph-based workflows to extract structured data from websites and documents, allowing developers and teams to automate data collection, build scraping pipelines, and integrate retrieval into applications and agents.

One exposes Scrape Graph AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `scrape-graph-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Scrape Graph AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Scrape Graph AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ScheduledJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Scheduled Jobs | GET | `/scheduled-jobs` | `conn_mod_def::GLDbrt8CBXA::OEYoeovtTaaaoPkFoZpoBg` |
| Get Scheduled Job | GET | `/v1/scheduled-jobs/{{jobId}}` | `conn_mod_def::GLDbrtM7qag::he9K7AHpRxSnG1av7vMJTw` |
| Create Scheduled Job | POST | `/v1/scheduled-jobs` | `conn_mod_def::GLDbrkIEpPg::FOikvdvxQrm-JwtyiujjCQ` |
| Delete Scheduled Job | DELETE | `/v1/scheduled-jobs/{{jobId}}` | `conn_mod_def::GLDbrrlW3QA::5JRCrxvxRnOMUW3Yn6KC0g` |
| Pause a Scheduled Job | POST | `/v1/scheduled-jobs/{{jobId}}/pause` | `conn_mod_def::GLDbrrlzgQg::uWNeAXo-QlySU_c-VRaxog` |
| Replace a Scheduled Job | PUT | `/v1/scheduled-jobs/{{jobId}}` | `conn_mod_def::GLDbr191aeA::val1O2FkRR2KNdtXMAHClg` |
| Resume a Scheduled Job | POST | `/v1/scheduled-jobs/{{jobId}}/resume` | `conn_mod_def::GLDbr1vap1A::w0ZjOdUdR2OGfr7GR_qmxw` |
| Trigger Job Manually | POST | `/v1/scheduled-jobs/{{jobId}}/trigger` | `conn_mod_def::GLDbr1vcVQA::sJyVuVc-RlunfXMEPA0KaA` |
| Update a Scheduled Job | PATCH | `/v1/scheduled-jobs/{{jobId}}` | `conn_mod_def::GLDbr2F-jAg::PavsFN9ATDChG5SPcMeF2Q` |

### SiteMonitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Monitor | GET | `/v1/site-monitors/{{monitorId}}` | `conn_mod_def::GLDbsJdGgIg::S2pLivJtR3G1bnz0WQ2bOw` |
| List Site Monitors | GET | `/v1/site-monitors` | `conn_mod_def::GLDbsJ030ZA::ARVYXDRASxasLrfxqSOFQw` |
| Create Monitor | POST | `/v1/site-monitors` | `conn_mod_def::GLDbsJsCRFA::t3WYNmWwQBin8K4wOiTesg` |
| Delete Site Monitor | DELETE | `/v1/site-monitors/{{monitorId}}` | `conn_mod_def::GLDbsJAWeag::9Uq6tIjXSgy796Y-3a5jaw` |
| Update a Site Monitor | PATCH | `/v1/site-monitors/{{monitorId}}` | `conn_mod_def::GLDbsJtjRFg::syhw2g84Tx6OmJogg3A1DQ` |

### Crawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Crawl Result | GET | `/v1/crawl/{{taskId}}` | `conn_mod_def::GLDbq7CHFBg::FVPWnQfsSo6C3_iSZav0YA` |
| Start Crawl | POST | `/v1/crawl` | `conn_mod_def::GLDbq7ae2OA::t-hbeL8TT0OJwonL6EF09A` |

### X402Proxy

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete via X402 Proxy | DELETE | `/x402/{{path}}` | `conn_mod_def::GLDbrj_Zlzg::u3o6SsvvSnmTzIxqvOndpA` |
| Proxy X402 Path | PATCH | `/x402/{{path}}` | `conn_mod_def::GLDbrjtLkzg::2QQnxtQ_QxyYhVBNfVDRQg` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits | GET | `/credits` | `conn_mod_def::GLDbscZwA7A::nmatcGLhThyQ5K1iec16Zg` |
| Deduct Credits | POST | `/v1/deduct-credits` | `conn_mod_def::GLDbsSqlwFA::33WfPGB9Sx2aDKYhMHVq3g` |

### MarkdownifyStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Markdownify Status | GET | `/v1/markdownify/{{requestId}}` | `conn_mod_def::GLDbrbSov2g::P-FWhNx7QUqdxMbzD9HfrQ` |

### Smartscraper

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Smartscraper | POST | `/v1/smartscraper` | `conn_mod_def::GLDbsViwBXg::DS3uid5TTTyxv2N4V89RAg` |

### ProductFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Product Feedback | POST | `/product-feedback` | `conn_mod_def::GLDbsdNCPbA::X0n_vNvoT928vQ1sgDCmZg` |

### WebhookStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Status | GET | `/v1/webhook/status/{{webhookId}}` | `conn_mod_def::GLDbq7NcKTA::tH4gVn_9RjGnxPQGWjxscQ` |

### SearchscraperStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Searchscraper Status | GET | `/v1/searchscraper/{{requestId}}` | `conn_mod_def::GLDbr9-lzfg::U7l4sv94RJa1dX0DW9t-eg` |

### WebhookLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Logs for a Crawler | GET | `/v1/webhook/logs/{{crawlerId}}` | `conn_mod_def::GLDbrA4qElA::QuqmICqWQhOZLnkLwk37Pg` |

### GenerateSchemaStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Generate Schema Status | GET | `/v1/generate_schema/{{requestId}}` | `conn_mod_def::GLDbr8_1cng::-eMwyQVYRtig1Pthv0vYeQ` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute Agentic Browser V2 Workflow | POST | `/v1/workflows/execute` | `conn_mod_def::GLDbqy_Fh9g::VpaP5oMESviPTo-EArj0bw` |

### Markdownify

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Markdownify Job | POST | `/v1/markdownify` | `conn_mod_def::GLDbrax7m6g::73ZpNW-KQESLiHSTYNXeUA` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/healthz` | `conn_mod_def::GLDbrH93IzA::3ubN7gsmT0ShSiJwrJdwug` |

### SalesFeedItemsDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sales Feed Items Details | POST | `/v1/bandcamp/get-item-details/` | `conn_mod_def::GLDbrI5hNPg::EYspwrv4SUqa-Zp-InuV0w` |

### X402

| Action | Method | Path | Action id |
|---|---|---|---|
| Proxy X402 Path | GET | `/x402/{{path}}` | `conn_mod_def::GLDbraHLOAg::Ew5qWqY9TXak7D7zYos33w` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop Session | POST | `/stop-session` | `conn_mod_def::GLDbqyiLCUg::ZouI9UYVQdC56T_CwNxsog` |

### SmartscraperHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Smartscraper History | GET | `/history/smartscraper` | `conn_mod_def::GLDbrbyiY5A::cSs93bsmRL2ElAUB2tQ1uA` |

### UsageTimeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage Timeline | GET | `/usage/timeline` | `conn_mod_def::GLDbsSYjk5A::rRyEWdqdSY2NoXiqtiddgg` |

### SmartscraperStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Smartscraper Status | GET | `/v1/smartscraper/{{requestId}}` | `conn_mod_def::GLDbsSqcrBg::VTARuhkgQ86gM9zfpKrS_w` |

### SalesFeedItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sales Feed Items | POST | `/v1/bandcamp/get-sales-feed-items` | `conn_mod_def::GLDbrIPsIPA::NlY6DADjSWuPF2RITE-CIQ` |

### Suggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suggestions | POST | `/v1/endpoint/get-suggestions` | `conn_mod_def::GLDbrIuSNng::gLOMvcROR-60FY5C8M1muw` |

### Endpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Save Endpoint | POST | `/endpoint/save-endpoint` | `conn_mod_def::GLDbrIuFA5A::Kn2iu7fmTH6T0l-M4ALxTg` |

### ScrapeHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scrape History | GET | `/v1/history/scrape` | `conn_mod_def::GLDbrRfigDg::2mRBLOIZTv2vC4oSWG-o_g` |

### AgenticScraperHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agentic Scraper History | GET | `/v1/history/agentic-scraper` | `conn_mod_def::GLDbrRnL8Rg::sRa2gqoQRfmvoxUtBr9LDw` |

### CrawlerHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Crawler History | GET | `/history/crawl` | `conn_mod_def::GLDbrR2kGmg::Xd-GBsjtT7ukz9Odki2VVA` |

### MarkdownifyHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Markdownify History | GET | `/v1/history/markdownify` | `conn_mod_def::GLDbrSFy2ZA::ihNrnHKiQDW4j0By12oACg` |

### SearchscraperHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Searchscraper History | GET | `/v1/history/searchscraper` | `conn_mod_def::GLDbrSImK9A::jkqPuv5uQWS9a8O41AkitQ` |

### ScheduledJobsExecutions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Scheduled Job's Executions | GET | `/v1/scheduled-jobs/{{jobId}}/executions` | `conn_mod_def::GLDbrtg8Lig::gApwX6QjQxSAq5FSYo6AjQ` |

### Schema

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Schema | POST | `/v1/generate_schema` | `conn_mod_def::GLDbr2Qw8jg::6tjpV-HBR_6OM9ZrjgKk3A` |

### Searchscraper

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Searchscraper | POST | `/v1/searchscraper` | `conn_mod_def::GLDbr-PnV9g::XCWrTUESQVCn1jEx8tyqtw` |

### WebsiteScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Website | POST | `/scrape` | `conn_mod_def::GLDbr-yp_Qg::BgQyIzHQR8-UKPWX66X93w` |

### Toonify

| Action | Method | Path | Action id |
|---|---|---|---|
| Toonify | POST | `/toonify` | `conn_mod_def::GLDbsSYfVaA::Kz9N91d2TiikZ6pEwo6rcA` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Feedback | POST | `/v1/feedback` | `conn_mod_def::GLDbsd2zG5g::ewCCnGjcRn27onMAe-fCfQ` |

### OrthogonalProxy

| Action | Method | Path | Action id |
|---|---|---|---|
| Proxy to Orthogonal API by Path | POST | `/x402/{{path}}` | `conn_mod_def::GLDbrkRi7AA::mIoIYal6TfO3m_0JrTaUTQ` |

### Proxy

| Action | Method | Path | Action id |
|---|---|---|---|
| Proxy | PUT | `/x402/{{path}}` | `conn_mod_def::GLDbrkKMwLg::ExOU3A7CRamEDR_1OXpf1Q` |

### LiveSessionUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Session Url | POST | `/v1/get-live-session-url` | `conn_mod_def::GLDbqytyH8A::aFeW_fLQTYSYrBY06cAoEw` |

### RedisCache

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Redis Cache By Pattern | POST | `/admin/query_redis_cache_by_pattern` | `conn_mod_def::GLDbqzmBE8g::U_Q2NOiMSASVtp5BTbArow` |

### Sitemap

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Sitemap | POST | `/v1/sitemap` | `conn_mod_def::GLDbsBwTqyA::NQ267hlASCenFGKrtVJPGA` |

### EndpointExecution

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute an Endpoint | POST | `/v1/endpoint/{{endpointId}}/{{fullPath}}` | `conn_mod_def::GLDbq8KD6Ag::tHoJOgEaQpKe781PlJZT5w` |

### ApiKeyValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Api Key | GET | `/validate` | `conn_mod_def::GLDbscrQiyg::RiJ3VID4T4CPBmAbypiUPA` |

### SitemapHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sitemap History | GET | `/v1/history/sitemap` | `conn_mod_def::GLDbrbyX78g::PsVuxSEgTNSuQ07s8KBrwg` |

### AgenticScrapper

| Action | Method | Path | Action id |
|---|---|---|---|
| Agentic Scrapper | POST | `/v1/agentic-scrapper` | `conn_mod_def::GLDbqy97pcg::p2Bb3R-ZSca0tU9zJHE2kQ` |

## When a call fails

The error comes from Scrape Graph AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scrape-graph-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
