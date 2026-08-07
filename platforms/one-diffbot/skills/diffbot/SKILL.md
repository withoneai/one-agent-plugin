---
name: diffbot
description: Diffbot uses machine learning and computer vision to extract structured data from web pages automatically. It provides tools and APIs for web scraping, knowledge graphs, and data enrichment. Read and write Diffbot data through One: customapis, enhancebulkjobs, crawljobs, coveragereports, enhance, bulkextractjobs and more, 38 actions with real parameter documentation. Use whenever the user asks to look something up in Diffbot, create or update a record there, or build code against the Diffbot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: diffbot
  generated-from: one-knowledge-base
---

# Diffbot through One

Diffbot uses machine learning and computer vision to extract structured data from web pages automatically. It provides tools and APIs for web scraping, knowledge graphs, and data enrichment.

One exposes Diffbot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `diffbot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Diffbot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Diffbot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CustomApis

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Custom APIs (for a Token) | GET | `/v3/custom` | `conn_mod_def::GJ2Tr05G2Uw::8Cflq67eRnipHJ7GqS_YQA` |
| Create or Update a Custom API | POST | `/v3/custom` | `conn_mod_def::GJ2TrZpygdc::ZEbzncWPTOmiHAt3ddwoaA` |
| Delete a Custom API | DELETE | `/v3/custom` | `conn_mod_def::GJ2Trh5ZydE::0NKKkvj-TgSXuqb710qzrA` |

### EnhanceBulkjobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop an Enhance Bulkjob | GET | `/kg/v3/enhance/bulk/{{bulkjobId}}/stop` | `conn_mod_def::GJ2TqpCSsvk::fC8eDXVlQnuou1I-3wYpYA` |
| Create an Enhance Bulkjob (Bulk Enhance) | POST | `/kg/v3/enhance/bulk` | `conn_mod_def::GJ2TpiIIVis::GlL4eF0ySKKeQ6HSS6ZGQg` |

### CrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Manage Crawl Jobs (Status, Pause, Resume, Restart, Delete) | GET | `/crawl` | `conn_mod_def::GJ2TrG3bFTw::GEJUaPfYS1uPregIarCRxg` |
| Create a Crawl Job | POST | `/v3/crawl` | `conn_mod_def::GJ2Tq-QHRu8::reJTr-77Rhej4KUz027zRA` |

### CoverageReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Coverage Report by DQL Query | GET | `/kg/v3/dql/report` | `conn_mod_def::GJ2TsSG5l-0::4j7aG_-_Ty6QAShG5JbNuw` |
| Download a Coverage Report by Report ID | GET | `/kg/v3/dql/report/{{id}}` | `conn_mod_def::GJ2TsIiKO5I::rKmZJ7ULQXGklDlMY1wdFw` |

### Enhance

| Action | Method | Path | Action id |
|---|---|---|---|
| Combine Enhance a Person and Employer Data | GET | `/kg/v3/enhance/combine` | `conn_mod_def::GJ2Tq3WA5F0::kJ95ejRIQRGLAu-tSPVGKw` |
| Enhance a Person or Organization Record | POST | `/kg/v3/enhance` | `conn_mod_def::GJ2TtAx9nRk::pjOlEBxcSfivetaEhfHNeg` |

### BulkExtractJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Manage Bulk Extract Jobs (Status, Pause/Resume, Restart, Delete) | GET | `/v3/bulk` | `conn_mod_def::GJ2TpPeVbVo::hwu_pgXLRUihEzNZHVbMjg` |
| Create a Bulk Extract Job | POST | `/v3/bulk/` | `conn_mod_def::GJ2TpHQx-nc::EGmSPgt3SHGZgXRZHCTDdQ` |

### EnhanceBulkjobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Bulk Enhance Job Results | GET | `/kg/v3/enhance/bulk/{{bulkjobId}}` | `conn_mod_def::GJ2Tp-NzMGg::jOQgwL0UQXqj5NRdMNgKMQ` |

### Dql

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Knowledge Graph with DQL | GET | `/kg/v3/dql` | `conn_mod_def::GJ2Tsf--drg::f-A7bfeeSQu0_3cuu9W4YA` |

### KnowledgeGraph

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Knowledge Graph with DQL | POST | `/kg/v3/dql` | `conn_mod_def::GJ2TsohMLGU::sCMvdsYdSiKqulLuntj4GA` |

### KnowledgeGraphEnhance

| Action | Method | Path | Action id |
|---|---|---|---|
| Enhance a Person or Organization Record | GET | `/kg/v3/enhance` | `conn_mod_def::GJ2Ts2RaudY::VS-0cpknQSuEaMYATXAHsw` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search a Crawl/Bulk Job (Legacy Search API) | GET | `/v3/search` | `conn_mod_def::GJ2TuHjr07U::Mk6s7MqaQc-X-AUjaJ8mRQ` |

### BulkEnhanceJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Bulk Enhance Job | GET | `/kg/v3/enhance/bulk/{{bulkjobId}}/delete` | `conn_mod_def::GJ2TppZ8GzI::YsGZdVpmTa2tQJXUi2WnXQ` |

### BulkEnhanceCoverageReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Bulk Enhance Bulkjob Coverage Report | GET | `/kg/v3/enhance/bulk/report/{{bulkjobId}}/{{reportId}}` | `conn_mod_def::GJ2TpwvVJzA::YOYUCxtMRu-N7rujk_GLxQ` |

### EnhanceBulkJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Bulk Enhance Job Results | POST | `/kg/v3/enhance/bulk/{{bulkjobId}}` | `conn_mod_def::GJ2TqG1Ht5E::ZUAt0Y-HQl-sAyHGoNfP2Q` |

### CrawlData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Crawl Job Data | GET | `/crawl/data` | `conn_mod_def::GJ2TrSFDdLk::lZTGxb3WRk2RICZWGNRxPQ` |

### CustomApiExtraction

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract a Page with a Custom API | GET | `/{{api}}` | `conn_mod_def::GJ2TrtEK4rE::atPLen06SfO5rAw56Kk-ZA` |

### Discussion

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract a Page’s Discussion Thread (Comments/Reviews) | GET | `/discussion` | `conn_mod_def::GJ2Tr_kWocU::9Q7JAc1FTk--gi_AmrWaoA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract an Event From a Web Page | GET | `/v3/event` | `conn_mod_def::GJ2TtLdCEnQ::x2WsjUgXQRWQl7WnqKEl7A` |

### Image

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Primary Images From a Web Page | GET | `/v3/image` | `conn_mod_def::GJ2TtWuJvXE::IvYPZmMbTLOb40djCQaJTg` |

### Job

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract a Job Posting (Structured Data) | GET | `/job` | `conn_mod_def::GJ2Ttgcysgg::JVdbgrIqQIe50CVTs3Z6tA` |

### List

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract a List of Items from a List-like Web Page | GET | `/v3/list` | `conn_mod_def::GJ2TtrQYOsc::kIc7QUr7SPC3FtifAzu8OA` |

### NaturalLanguage

| Action | Method | Path | Action id |
|---|---|---|---|
| Process Text (Natural Language Extraction) | POST | `/v1/` | `conn_mod_def::GJ2TtzW9H9s::-yVcNh_TSq-itpDslMQlKw` |

### Product

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Product Data From a Product Page | GET | `/product` | `conn_mod_def::GJ2Tt-uLeLY::6j4W3O1aSdqNyIl6oPwKWg` |

### Video

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Video Information From a Web Page | GET | `/v3/video` | `conn_mod_def::GJ2TuS49txU::E7hZHr9URDODEMTsSjjImg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/v4/account` | `conn_mod_def::GJ2To_IkSUI::6jVX1r2MSjmP4fddO94hdg` |

### EnhanceBulkjobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Poll an Enhance Bulkjob's Status | GET | `/kg/v3/enhance/bulk/{{bulkjobId}}/status` | `conn_mod_def::GJ2TqeVxtVg::qpapT4TITUCBnKoDC3ZRLg` |

### BulkEnhanceJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Single Bulk Enhance Job Result | GET | `/kg/v3/enhance/bulk/{{bulkjobId}}/{{jobIdx}}` | `conn_mod_def::GJ2TqOREh0U::5A7SdmRIS4a2-914JtSLhg` |

### Article

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract an Article | GET | `/v3/article` | `conn_mod_def::GJ2To17xqMI::mITwa3lZQaCynW7ziCeEWw` |

### BulkJobData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Bulk Extract Job Data | GET | `/v3/bulk/data` | `conn_mod_def::GJ2TpX1t2Rw::Oi-BMRZnSdaWDnYHZdo8Ug` |

### BulkEnhanceBulkjobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bulk Enhance Bulkjobs for a Token | GET | `/kg/v3/enhance/bulk/status` | `conn_mod_def::GJ2TqWL-vCc::ETiY1NFFQDqkeiwOLk2_lQ` |

### Analyze

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyze a Web Page (Auto-classify and Extract) | GET | `/analyze` | `conn_mod_def::GJ2Tooh5u7E::buuHbMrlQQqJX_Di8T8FPw` |

## When a call fails

The error comes from Diffbot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/diffbot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
