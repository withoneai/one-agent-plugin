---
name: hyper-browser
description: Hyperbrowser is a browser-as-a-service platform that enables developers and AI agents to run scalable, cloud-hosted browser sessions for web automation, scraping, and interaction—handling infrastructure, anti-bot bypass, session management, and real-time control via APIs and SDKs. Read and write Hyper Browser data through One: extractjobs, sessions, scrapejobs, browserusetasks, geminicomputerusetasks, claudecomputerusetasks and more, 52 actions with real parameter documentation. Use whenever the user asks to look something up in Hyper Browser, create or update a record there, or build code against the Hyper Browser API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hyper-browser
  generated-from: one-knowledge-base
---

# Hyper Browser through One

Hyperbrowser is a browser-as-a-service platform that enables developers and AI agents to run scalable, cloud-hosted browser sessions for web automation, scraping, and interaction—handling infrastructure, anti-bot bypass, session management, and real-time control via APIs and SDKs.

One exposes Hyper Browser through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hyper-browser` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hyper Browser is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hyper Browser account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ExtractJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extract Job Status | GET | `/api/extract/{{id}}/status` | `conn_mod_def::GKI00M_PGhg::Va3tJo6_Q1CjCeN3lod9tA` |
| Get Extract Job Status and Results | GET | `/api/extract/{{id}}` | `conn_mod_def::GKI00NQ9Qdg::KKlg5gvdQ-eG_j8WC_WUqA` |
| Start an Extract Job | POST | `/api/extract` | `conn_mod_def::GKI01ESWH4g::8oMzU0TCTESN-KHMUK2KmA` |

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sessions | GET | `/api/sessions` | `conn_mod_def::GKI00UwTtXA::1QPk4Tg_RdCv3s5pWjIALQ` |
| Create New Session | POST | `/api/session` | `conn_mod_def::GKI0zsd79jA::tH2Ze6A5TTGaUJ2e5macEg` |
| Stop a Session | PUT | `/api/session/{{id}}/stop` | `conn_mod_def::GKI01LVlLpg::rHldDZgTQzuhA3v7uf9pcg` |

### ScrapeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scrape Job's Status | GET | `/api/scrape/{{id}}/status` | `conn_mod_def::GKI00eljtkA::-m44yfK3T8WVhnjuvLqBHw` |
| Get Scrape Job Status and Result | GET | `/api/scrape/{{id}}` | `conn_mod_def::GKI00d6SFtA::6ypDs5ZqTm216ReerxkbUw` |
| Create a New Scrape Job | POST | `/api/scrape` | `conn_mod_def::GKI0zsVwKHA::zTgsUddFTMiNhYolNrzCdA` |

### BrowserUseTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Browser Use Task Status and Results | GET | `/api/task/browser-use/{{id}}` | `conn_mod_def::GKI00DyhpGg::VilHTfB8TGWDchgntGh8-w` |
| Start a Browser Use Task | POST | `/api/task/browser-use` | `conn_mod_def::GKI00yYWTAA::LQkV3k1eRVStQlD42LKvNQ` |
| Stop a Browser Use Task | PUT | `/api/task/browser-use/{{id}}/stop` | `conn_mod_def::GKI01D05uUg::KBTHetneSzmzrWt9bOwWHA` |

### GeminiComputerUseTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gemini Computer Use Task Status and Results | GET | `/api/task/gemini-computer-use/{{id}}` | `conn_mod_def::GKI00V73JIg::XcCkFWmhS42iGKg6Ftke4g` |
| Start a Gemini Computer Use Task | POST | `/api/task/gemini-computer-use` | `conn_mod_def::GKI0070zM_A::_ddz5r2ZQ921YRf7FmVV8w` |
| Stop a Gemini Computer Use Task | PUT | `/api/task/gemini-computer-use/{{id}}/stop` | `conn_mod_def::GKI01D79x9g::W_B38OLOS8mi-7I9FsY-HQ` |

### ClaudeComputerUseTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Claude Computer Use Task Status and Results | GET | `/api/task/claude-computer-use/{{id}}` | `conn_mod_def::GKI00FKgl9g::wTiNUGOmRUeAAqIEY5qe_A` |
| Start a Claude Computer Use Task | POST | `/api/task/claude-computer-use` | `conn_mod_def::GKI00yYykkg::D14mOnxGS0K9TQsKtRzqsA` |
| Stop a Claude Computer Use Task | PUT | `/api/task/claude-computer-use/{{id}}/stop` | `conn_mod_def::GKI01EGzWog::hRnX4woXRayqETQAQM9lSA` |

### HyperAgentTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HyperAgent Task Status and Results | GET | `/api/task/hyper-agent/{{id}}` | `conn_mod_def::GKI00U-LllA::oIGnzdefTAa4mxKsBeIl5g` |
| Start a HyperAgent Task | POST | `/api/task/hyper-agent` | `conn_mod_def::GKI008Rxd1g::vlvDaWOtQOWSxi4_3PKVuQ` |
| Stop a HyperAgent Task | PUT | `/api/task/hyper-agent/{{id}}/stop` | `conn_mod_def::GKI01MCu89g::2dqE7qvKRjaQjlZ2huqzLA` |

### BatchScrapeJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Batch Scrape Job Status | GET | `/api/scrape/batch/{{id}}/status` | `conn_mod_def::GKI0z2Y2d8g::ViqtBNnPTcmXhD41IJzUgQ` |
| Get Batch Scrape Job Status and Results | GET | `/api/scrape/batch/{{id}}` | `conn_mod_def::GKI0z2Y7fPA::N9efvFzhS4ulJ0VAhhr2Kg` |
| Start a Batch Scrape Job | POST | `/api/scrape/batch` | `conn_mod_def::GKI00yOvNxA::Dd6Kps66SP2MzzGxXwj0jw` |

### CuaTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CUA Task's Status and Results | GET | `/api/task/cua/{{id}}` | `conn_mod_def::GKI00NTrc5g::Sptnv6kLR7-yXxl0urYopw` |
| Start a CUA Task | POST | `/api/task/cua` | `conn_mod_def::GKI008GdIag::QWG8kCI4R96-iv8YSnm0jA` |
| Stop a CUA Task | PUT | `/api/task/cua/{{id}}/stop` | `conn_mod_def::GKI01DWrUkA::Qyppcx5WRESc8BXN83hRdA` |

### CrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Crawl Job's Status and Results | GET | `/api/crawl/{{id}}` | `conn_mod_def::GKI00D7ny6g::L6UlZcRMQde8lYmVJ1CPjA` |
| Get Crawl Job Status | GET | `/api/crawl/{{id}}/status` | `conn_mod_def::GKI00DJ1SZA::Okiz6OBDSIybU-0MSf2cQQ` |
| Start a Crawl Job | POST | `/api/crawl` | `conn_mod_def::GKI007Uovxg::-AJCEbTCTjeSnMQXQua7lw` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Extensions | GET | `/api/extensions/list` | `conn_mod_def::GKI00mTPWqA::nZLTUDmWQrWGIYsAKDeuEw` |
| Add a New Extension | POST | `/api/extensions/add` | `conn_mod_def::GKI0ztxDvXg::Bwbu-yoBRfGf9r2lO35PGg` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Profiles | GET | `/api/profiles` | `conn_mod_def::GKI00VZ0YtA::ca3QybZWSh2TEpCMoY4A9g` |
| Create a Profile | POST | `/api/profile` | `conn_mod_def::GKI0zrkEcKA::WIeungK3REyXvQttLV1iSQ` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Profile By ID | GET | `/api/profile/{{id}}` | `conn_mod_def::GKI00dsx6Fg::LC5VmjViS9ydgCrDzRnnkQ` |
| Delete a Profile by ID | DELETE | `/api/profile/{{id}}` | `conn_mod_def::GKI0zsLzj7A::rjgI3vrYTBGU9vpTSfd3pA` |

### WebFetch

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Web Page | POST | `/api/web/fetch` | `conn_mod_def::GKI0z5BoGog::wHiMlqQ4RYCG_1cyZI25Ug` |
| Fetch a Web Page with X402 Payment | POST | `/x402/web/fetch` | `conn_mod_def::GKI0z7caVqA::TUL5qm4_RaKv6BFm4i6IdQ` |

### WebCrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Web Crawl Job's Status | GET | `/api/web/crawl/{{id}}/status` | `conn_mod_def::GKI00mRJOrA::eNis2wXcSzuLBMOQf7jJYQ` |
| Start a Web Crawl Job | POST | `/api/web/crawl` | `conn_mod_def::GKI008A4u2A::FyLlhP_PQg6ETo1ATtu_gA` |

### WebSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Web | POST | `/api/web/search` | `conn_mod_def::GKI00vzwPUA::gddCFCa5QLWSLEH-vmsoyw` |
| Search the Web with X402 Payment | POST | `/x402/web/search` | `conn_mod_def::GKI00w3DFAg::V3z0Yx8YSoC5NDoyEgUwVw` |

### BrowserUseTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Browser Use Task Status | GET | `/api/task/browser-use/{{id}}/status` | `conn_mod_def::GKI0z2JPlPA::LlM8eKidSYeEI2tL0oZ1rw` |

### ClaudeComputerUseTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Claude Computer Use Task Status | GET | `/api/task/claude-computer-use/{{id}}/status` | `conn_mod_def::GKI00FkwIMg::OaOLvsnpQdiVsAovWa8DpA` |

### CuaTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CUA Task's Status | GET | `/api/task/cua/{{id}}/status` | `conn_mod_def::GKI00NFAaRA::s6AU2ghWSgKEJbudPTyp4g` |

### GeminiComputerUseTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Gemini Computer Use Task Status | GET | `/api/task/gemini-computer-use/{{id}}/status` | `conn_mod_def::GKI00NijpVA::VpBsNXs9Rby0hgQxOZ_5rQ` |

### HyperAgentTaskStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HyperAgent Task Status | GET | `/api/task/hyper-agent/{{id}}/status` | `conn_mod_def::GKI00VmIt1A::JAETsxsXRGKNNMPzBR8AyA` |

### Session

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Session by ID | GET | `/api/session/{{id}}` | `conn_mod_def::GKI00dQqoxA::9fKUBk9wQpioWBs7vRnhow` |

### SessionDownloadsUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session's Downloads URL | GET | `/api/session/{{id}}/downloads-url` | `conn_mod_def::GKI00eGhBIA::SDvKAyNGQpm8L0gm_MN6qQ` |

### SessionRecordingUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session Recording URL | GET | `/api/session/{{id}}/recording-url` | `conn_mod_def::GKI00meGukA::Np9FgpwbSmysHEGxdLRVxw` |

### WebCrawlJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Crawl Job Results | GET | `/api/web/crawl/{{id}}` | `conn_mod_def::GKI00nMl8oA::G2MSsEOvQbam2YeaEqwsRQ` |

### SessionVideoRecordingUrl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session Video Recording URL | GET | `/api/session/{{id}}/video-recording-url` | `conn_mod_def::GKI00ongjQA::Irda40uRTCCzBcSOjs1Wzw` |

## When a call fails

The error comes from Hyper Browser, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hyper-browser

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
