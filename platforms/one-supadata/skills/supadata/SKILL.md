---
name: supadata
description: Supadata is a developer platform that provides APIs for extracting, enriching, and structuring web and public data with AI, allowing teams to build data pipelines, automate research workflows, and integrate external information into applications and internal systems. Read and write Supadata data through One: transcript, youtubetranscript, extract, extractjobs, youtubetranscriptsbatchjobs, mediametadata and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in Supadata, create or update a record there, or build code against the Supadata API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: supadata
  generated-from: one-knowledge-base
---

# Supadata through One

Supadata is a developer platform that provides APIs for extracting, enriching, and structuring web and public data with AI, allowing teams to build data pipelines, automate research workflows, and integrate external information into applications and internal systems.

One exposes Supadata through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `supadata` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Supadata is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Supadata account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transcript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transcript | GET | `/v1/transcript` | `conn_mod_def::GLDbpwvSHlg::uTetmYNFSvuingNwCJrLnQ` |
| Get Transcript by Job ID | GET | `/v1/transcript/{{jobId}}` | `conn_mod_def::GLDbpthOpig::D3shDk_SQVep7MZhEBxiXQ` |

### YoutubeTranscript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Transcript | GET | `/v1/youtube/transcript` | `conn_mod_def::GLDbqFYithA::XBWiCE8PS9WboYaCNlBwsA` |
| Translate a YouTube Transcript | GET | `/v1/youtube/transcript/translate` | `conn_mod_def::GLDbqP3rRYg::99TRKfcgSlev_cspPjDVaQ` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Structured Data From Video | POST | `/extract` | `conn_mod_def::GLDbpt_reJg::_YDhTFzIS86Yo6q1Sx-TWA` |

### ExtractJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extract Job Status | GET | `/v1/extract/{{jobId}}` | `conn_mod_def::GLDbpth9CSg::LKYtOJvBSXOEqx6adj2Y5Q` |

### YoutubeTranscriptsBatchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Batch Job for YouTube Transcripts | POST | `/v1/youtube/transcript/batch` | `conn_mod_def::GLDbqPkudRA::7BsSIKeQQgeADeXr-9_w5g` |

### MediaMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Media Metadata | GET | `/metadata` | `conn_mod_def::GLDbqXKcvug::0t8CIFdtRVCdzpnBmdDLCw` |

### YoutubeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search YouTube | GET | `/v1/youtube/search` | `conn_mod_def::GLDbqFvCxlA::A75T13tcTui9LS6QTAnV6w` |

### YoutubePlaylistVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Playlist Videos | GET | `/v1/youtube/playlist/videos` | `conn_mod_def::GLDbqD9Q6hA::QVqgxb2MSX6Spu4sYlLP4w` |

### YoutubeVideoBatchJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Batch Job to Fetch Metadata for Multiple YouTube Videos | POST | `/v1/youtube/video/batch` | `conn_mod_def::GLDbqPkcMUg::lYN1Y4I3S-Gew7V_E0-RlA` |

### AccountInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Information | GET | `/v1/me` | `conn_mod_def::GLDbpvoW6zA::cAnEGlY_QRWeofSXCuhgRQ` |

### WebCrawlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Web Crawl Job | POST | `/v1/web/crawl` | `conn_mod_def::GLDbqPH1qBg::ctkpI-2gSH-frTlHNsxX6w` |

### WebMap

| Action | Method | Path | Action id |
|---|---|---|---|
| Map a Website's Links | GET | `/v1/web/map` | `conn_mod_def::GLDbp6JF2bA::U48egvWxSyy5ReL4qO3j1g` |

### YoutubeChannelVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Channel Videos | GET | `/v1/youtube/channel/videos` | `conn_mod_def::GLDbqDk9meg::JJGwiKG-RRiofXmptkamjg` |

### WebScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Scrape | GET | `/v1/web/scrape` | `conn_mod_def::GLDbp6w_bIg::Tn_H-hNOSx2N1nBOg-RKgQ` |

### YoutubeChannel

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Channel | GET | `/v1/youtube/channel` | `conn_mod_def::GLDbp6NlmcA::kh5f9C0VQ0uGR281lHLF1A` |

### YoutubePlaylist

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Playlist | GET | `/v1/youtube/playlist` | `conn_mod_def::GLDbqDHIEhA::0xN4Lt6vRlK42vbwc9atcg` |

### WebCrawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Crawl by Job ID | GET | `/v1/web/crawl/{{jobId}}` | `conn_mod_def::GLDbp58O0mA::QJdTxIsuTW2MvsYQE8tpIA` |

### YoutubeVideoMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Video Metadata | GET | `/v1/youtube/video` | `conn_mod_def::GLDbqOt_udg::1UPAgNUhSJSDSTwWbFrzfQ` |

### YoutubeBatchJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a YouTube Batch Job by ID | GET | `/v1/youtube/batch/{{jobId}}` | `conn_mod_def::GLDbp58dhBg::EhLmRJzuTIiYOp_US-I6bw` |

## When a call fails

The error comes from Supadata, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/supadata

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
