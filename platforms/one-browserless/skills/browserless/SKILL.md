---
name: browserless
description: Browserless is a browser automation platform that provides hosted headless browsers and APIs for Puppeteer, Playwright, and Selenium, allowing developers to run, scale, and manage web scraping, testing, PDF generation, and automation workloads without maintaining browser infrastructure. Read and write Browserless data through One: renderedhtmlcontent, screenshot, chromecontent, chromeexport, chromepdf, chromedownloads and more, 41 actions with real parameter documentation. Use whenever the user asks to look something up in Browserless, create or update a record there, or build code against the Browserless API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: browserless
  generated-from: one-knowledge-base
---

# Browserless through One

Browserless is a browser automation platform that provides hosted headless browsers and APIs for Puppeteer, Playwright, and Selenium, allowing developers to run, scale, and manage web scraping, testing, PDF generation, and automation workloads without maintaining browser infrastructure.

One exposes Browserless through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `browserless` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Browserless is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Browserless account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### RenderedHtmlContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rendered HTML Content Using Chromium | POST | `/chromium/content` | `conn_mod_def::GLXPXuhDvMA::q1YaC644RKm9sGC1F27mmQ` |
| Get Rendered HTML Content Using Edge | POST | `/edge/content` | `conn_mod_def::GLXPbsWIRvA::bAn5eWm6RS2Cnb80EQ9Sew` |

### Screenshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Screenshot | POST | `/screenshot` | `conn_mod_def::GLXPcZ47mDg::ywmJiwXrSb--tK8mEwmfYg` |
| Screenshot Using Chrome | POST | `/chrome/screenshot` | `conn_mod_def::GLXPX8CsrWA::kO1QWrkVQ96C6PT2M18uZw` |

### ChromeContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Content Using Chrome | POST | `/chrome/content` | `conn_mod_def::GLXPW9gmdgA::tU1ri-jTTnS09H9lABhqHg` |

### ChromeExport

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Using Chrome | POST | `/chrome/export` | `conn_mod_def::GLXPXCE8VJA::eI40FZ3HThudPsxiMKqwOg` |

### ChromePdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate PDF Using Chrome | POST | `/chrome/pdf` | `conn_mod_def::GLXPXDsqprg::J0_6OXm_SS-xaoH-znj2LA` |

### ChromeDownloads

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Files Using Chrome | POST | `/chrome/download` | `conn_mod_def::GLXPXEiJB6A::8lQAzphVQfK1TACyS3QO3w` |

### ChromeFunction

| Action | Method | Path | Action id |
|---|---|---|---|
| Function Using Chrome | POST | `/chrome/function` | `conn_mod_def::GLXPXi4we8A::GUSby0wHQjitqR7d55irvg` |

### ChromeScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Using Chrome | POST | `/chrome/scrape` | `conn_mod_def::GLXPXt8J4Ag::k_pSWTveQyedOWeskhyJag` |

### ChromeUnblock

| Action | Method | Path | Action id |
|---|---|---|---|
| Unblock a URL Using Chrome | POST | `/chrome/unblock` | `conn_mod_def::GLXPXyfYj_A::SGsz4EBPSlu26JZK6cYtjw` |

### PerformanceAudit

| Action | Method | Path | Action id |
|---|---|---|---|
| Performance Audit Using Chrome | POST | `/chrome/performance` | `conn_mod_def::GLXPZ34mK1g::jM46PFQYQTqy58VBV46Rfw` |

### ChromiumDownloads

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Files from Chromium | POST | `/chromium/download` | `conn_mod_def::GLXPaDEwNvg::ST04a1e1S9Syu8_cUMAUdA` |

### ChromiumPerformanceAudits

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Chromium Performance Audits | POST | `/chromium/performance` | `conn_mod_def::GLXPaEkFFzA::aCr8cjDgTDqv5QytUwywGw` |

### ScrapeUsingChromium

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Using Chromium | POST | `/chromium/scrape` | `conn_mod_def::GLXPaE5pL-A::VW7r46G4T3KNCOb-oq2Yzw` |

### ChromiumFunction

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Function Using Chromium | POST | `/chromium/function` | `conn_mod_def::GLXPbKz98-g::Hl3Kpf1ZRY21FcZeQOkUpg` |

### ChromiumExport

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Using Chromium | POST | `/chromium/export` | `conn_mod_def::GLXPbhVacKA::K8I5t5OVRwOuhZnDOdB3aw` |

### CrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Crawl Jobs | GET | `/crawl` | `conn_mod_def::GLXPbqcCNJg::v2cO8AsnSiK2SBdny_7VYw` |

### EdgeDownload

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Using Edge | POST | `/edge/download` | `conn_mod_def::GLXPbt3kVKA::KQ-aI_cRTwK8iNAmDT-hQg` |

### EdgeFunction

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Edge Function | POST | `/edge/function` | `conn_mod_def::GLXPbx2rfog::qvq8ri_9Qv65BFBN-xEJcg` |

### Crawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Crawl | POST | `/crawl` | `conn_mod_def::GLXPcBo0Dcg::xQa-amBcSjCkILOjNZdyYw` |

### JsonTarget

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New JSON Target | PUT | `/json/new` | `conn_mod_def::GLXPcLYIHPg::dpjfP4gPSbyLE7_jET7lTQ` |

### Screenshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Screenshot Using Edge | POST | `/edge/screenshot` | `conn_mod_def::GLXPcMkx92g::SCvUTzxtRsyvpc889Qrc9Q` |

### PerformanceUsingEdge

| Action | Method | Path | Action id |
|---|---|---|---|
| Performance Using Edge | POST | `/edge/performance` | `conn_mod_def::GLXPcNVKU2A::99SxgupBTa-pnZt-8v4YVA` |

### PdfUsingEdge

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF Using Edge | POST | `/edge/pdf` | `conn_mod_def::GLXPcNVmsRg::KCfOIRdhSeanuQpjRxBD4w` |

### EdgeScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Using Edge | POST | `/edge/scrape` | `conn_mod_def::GLXPcN3vH_A::eGA20qkdQviRZ67E3XSDUw` |

### VersionJson

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Version JSON | GET | `/json/version` | `conn_mod_def::GLXPcU_IsZA::730i3NBPQ_CWgrih9vRHWQ` |

### ProtocolJsonMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Protocol JSON Metadata | GET | `/json/protocol` | `conn_mod_def::GLXPcVeyX8g::Lzic2-2QQHuaoRUWvfaOhg` |

### Map

| Action | Method | Path | Action id |
|---|---|---|---|
| Map | POST | `/map` | `conn_mod_def::GLXPcV3hTkA::Y_yFtdQJRzakfRNXd3ySyA` |

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF | POST | `/pdf` | `conn_mod_def::GLXPcczOKAA::FbLbWe5mSlSJTx8aLD73jA` |

### Meta

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meta | GET | `/meta` | `conn_mod_def::GLXPckpL-vA::jDwJ7QxbS6qYhawctkvmzA` |

### ServiceStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Active Service Status | GET | `/active` | `conn_mod_def::GLXPckyetPA::Uol-TGC0SNKlZhWrrv1Wpg` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Web | POST | `/search` | `conn_mod_def::GLXPck6c7iA::h-ENJqCxSuqvZ63ubRAZXg` |

### SmartScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Smart Scrape | POST | `/smart-scrape` | `conn_mod_def::GLXPcmfSrkg::cBvyp_cPTVCNAhQCCV1NJg` |

### Unblock

| Action | Method | Path | Action id |
|---|---|---|---|
| Unblock a URL | POST | `/unblock` | `conn_mod_def::GLXPcq1crsg::rMRWo13nRAarYRZdOBWk6A` |

### BrowserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Browser Profile | POST | `/profile` | `conn_mod_def::GLXPcyzTojg::AW5qiNVrSviK4oTcv0r32g` |

### ProxyCities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Proxy Cities | GET | `/proxy/cities` | `conn_mod_def::GLXPc00zG_g::bxLux11rTd-u7PTKl7mdhA` |

### AuthenticationProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Authentication Profile | POST | `/profile/upload` | `conn_mod_def::GLXPc017DfA::43ooDQ3jTXuUZeR5l_n3zw` |

### AuthenticationProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Refresh an Authentication Profile | POST | `/profile/refresh` | `conn_mod_def::GLXPc09aVUA::MhMuhJHNQAW91eUw8Z5alQ` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Profiles | GET | `/profiles` | `conn_mod_def::GLXPc1AGtig::oKhl5a6UQRm6DL-yVVrU1g` |

### Session

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Session | POST | `/session` | `conn_mod_def::GLXPdN1S8sA::zeiae-jvSPacxokRAukgcQ` |

## When a call fails

The error comes from Browserless, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/browserless

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
