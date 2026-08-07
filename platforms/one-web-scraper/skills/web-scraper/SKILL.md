---
name: web-scraper
description: Web Scraper is a web data extraction platform that provides a browser extension and cloud-based scraping tools, enabling developers, analysts, and businesses to collect structured data from websites, automate crawling workflows, and export results for research, monitoring, or integration use cases. Read and write Web Scraper data through One: sitemap, scrapingjob, sitemaptags, sitemapscheduler, account, scrapingjobdata and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in Web Scraper, create or update a record there, or build code against the Web Scraper API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: web-scraper
  generated-from: one-knowledge-base
---

# Web Scraper through One

Web Scraper is a web data extraction platform that provides a browser extension and cloud-based scraping tools, enabling developers, analysts, and businesses to collect structured data from websites, automate crawling workflows, and export results for research, monitoring, or integration use cases.

One exposes Web Scraper through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `web-scraper` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Web Scraper is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Web Scraper account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sitemap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sitemap by ID | GET | `/api/v1/sitemap/{{sitemapId}}` | `conn_mod_def::GMgWdW5dbXg::NMWJ0jNTSEqPjcyaGjgv-A` |
| Delete a Sitemap | DELETE | `/api/v1/sitemap/{{sitemapId}}` | `conn_mod_def::GMgWdWgi5kA::5psHNlDeR2qmP5JcS6cezw` |
| Disable a Sitemap Scheduler | POST | `/api/v1/sitemap/{{sitemapId}}/disable-scheduler` | `conn_mod_def::GMgWdWZVgRA::naWSo337QoylJQqTReU_7Q` |
| Import Sitemap | POST | `/api/v1/sitemap` | `conn_mod_def::GMgWdePTOKg::vpslwKMdRUS9IEPkLAsvHQ` |
| Remove a Sitemap Tag | DELETE | `/api/v1/sitemap/{{sitemapId}}/remove-tag` | `conn_mod_def::GMgWdeV5giA::50r1_wkWSlOoq0j5IWrSow` |
| Rename a Sitemap | PUT | `/api/v1/sitemap/{{sitemapId}}/rename` | `conn_mod_def::GMgWdkmicEA::rkHiBkJNSV6i-iQW0TXQ2A` |
| Update a Sitemap | PUT | `/api/v1/sitemap/{{sitemapId}}` | `conn_mod_def::GMgWdmKx64g::EorpJrXIR3agucpfvhbLAw` |

### ScrapingJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scraping Job | GET | `/api/v1/scraping-job/{{scrapingJobId}}` | `conn_mod_def::GMgWdNnReTg::Y0JB9LGVRqqzEFKJX73Oyw` |
| Continue a Scraping Job | POST | `/api/v1/scraping-job/{{scrapingJobId}}/continue` | `conn_mod_def::GMgWdEoC4hA::pspc7dOyQqKmIOKs8NhHng` |
| Create a Scraping Job | POST | `/api/v1/scraping-job` | `conn_mod_def::GMgWdENbLaA::s18wqNBsTSO8cc-zxFfWxQ` |
| Delete a Scraping Job | DELETE | `/api/v1/scraping-job/{{scrapingJobId}}` | `conn_mod_def::GMgWdGAsJYg::yy3QX6aWQxeVKPwSATZICA` |
| Stop a Scraping Job | POST | `/api/v1/scraping-job/{{scrapingJobId}}/stop` | `conn_mod_def::GMgWdOAYTOA::DWici2hVSC2oflhwHyHZlQ` |

### SitemapTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sitemap's Tags | GET | `/api/v1/sitemap/{{sitemapId}}/tags` | `conn_mod_def::GMgWddMLRvA::dB9EXJZzR-aSYLfHtXLs-g` |
| Add Tag to a Sitemap | POST | `/api/v1/sitemap/{{sitemapId}}/add-tag` | `conn_mod_def::GMgWdUzevGA::9hN5oioVTOuAVP7sa9vBww` |

### SitemapScheduler

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sitemap Scheduler | GET | `/api/v1/sitemap/{{sitemapId}}/scheduler` | `conn_mod_def::GMgWdcgYKUg::eSaMo2LdTN2BrPL2axXLyQ` |
| Enable Scheduler for a Sitemap | POST | `/api/v1/sitemap/{{sitemapId}}/enable-scheduler` | `conn_mod_def::GMgWdWZNFNA::XDKgN8w5SbW_adVouGstlg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Info | GET | `/api/v1/account` | `conn_mod_def::GMgWdDljd1g::wOhekZgeSI6ZufMSHzLeyg` |

### ScrapingJobData

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Scraping Job Data | GET | `/api/v1/scraping-job/{{scrapingJobId}}/{{extension}}` | `conn_mod_def::GMgWdFE_-LA::YuZqH4ecTiGgovqBsHLf9A` |

### ScrapingJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scraping Jobs | GET | `/api/v1/scraping-jobs` | `conn_mod_def::GMgWdNHcFug::lABFKA9RSEav7KV21Il0Xw` |

### ProblematicUrls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Problematic URLs for a Scraping Job | GET | `/api/v1/scraping-job/{{scrapingJobId}}/problematic-urls` | `conn_mod_def::GMgWdNcUGnA::bnsGunnpTa6HdW_SmrN_MQ` |

### ScrapingJobDataQuality

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Data Quality for a Scraping Job | GET | `/api/v1/scraping-job/{{scrapingJobId}}/data-quality` | `conn_mod_def::GMgWdOcRm_A::sD0oGDTBQFGlV7end21S-g` |

### Sitemaps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sitemaps | GET | `/api/v1/sitemaps` | `conn_mod_def::GMgWdeplNoA::9ogg_HNZRIWhROU93EqCvA` |

## When a call fails

The error comes from Web Scraper, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/web-scraper

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
