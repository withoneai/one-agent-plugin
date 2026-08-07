---
name: perigon
description: Perigon is a news intelligence platform that provides APIs for discovering, filtering, and analyzing global news content, allowing developers, analysts, and media teams to monitor coverage, enrich applications with article data, and build workflows around real-time media signals. Read and write Perigon data through One: monitors, sourcegroups, watchlists, contactpoints, articles, journalists and more, 45 actions with real parameter documentation. Use whenever the user asks to look something up in Perigon, create or update a record there, or build code against the Perigon API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: perigon
  generated-from: one-knowledge-base
---

# Perigon through One

Perigon is a news intelligence platform that provides APIs for discovering, filtering, and analyzing global news content, allowing developers, analysts, and media teams to monitor coverage, enrich applications with article data, and build workflows around real-time media signals.

One exposes Perigon through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `perigon` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Perigon is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Perigon account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor by UUID | GET | `/v1/api/monitors/{{uuid}}` | `conn_mod_def::GMhtKneoRKA::Yagt5VrlQJ-CASfCVSIGPg` |
| List a Monitor's Summaries | GET | `/v1/api/monitors/{{uuid}}/summary` | `conn_mod_def::GMhtKw1SUxA::gG3vKVsATOWYru0bpP5zAQ` |
| List Monitors | GET | `/v1/api/monitors` | `conn_mod_def::GMhtKxQ8RIg::7EJQu_B5RiCRTuef0MkH0A` |
| Activate a Monitor | POST | `/v1/api/monitors/{{uuid}}/activate` | `conn_mod_def::GMhtKpEgJng::NWrExcI8R_qarg7TJHS40w` |
| Archive a Monitor | DELETE | `/v1/api/monitors/{{uuid}}` | `conn_mod_def::GMhtKmdautg::wsU0t4-9TeyTcAu-6aprUA` |
| Create a Monitor | POST | `/v1/api/monitors` | `conn_mod_def::GMhtKm4v3DA::A5ow6AEjSwCyFM8Q1dQ61Q` |
| Pause a Monitor | POST | `/v1/api/monitors/{{uuid}}/pause` | `conn_mod_def::GMhtKxpIWSA::Unl8-rDsTeKmwWxp3Fipsg` |
| Update a Monitor | PATCH | `/v1/api/monitors/{{uuid}}` | `conn_mod_def::GMhtK6SLrEA::Ia_8BHBASCy7Dr-Qh-7TpA` |

### SourceGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Source Group by ID | GET | `/v1/api/sourceGroups/{{id}}` | `conn_mod_def::GMhtLXkIKwA::vFXo9fTmSsmqSfRk8SZ02g` |
| List Source Groups | GET | `/v1/api/sourceGroups` | `conn_mod_def::GMhtLY9QmvA::tVNu6m0LR8uHDEWmgZvnfQ` |
| Resolve Source Groups | GET | `/v1/api/sourceGroups/resolve` | `conn_mod_def::GMhtLXoT0og::K5JokFnLTleWeyLsimximw` |
| Create a Source Group | POST | `/v1/api/sourceGroups` | `conn_mod_def::GMhtLK4KfCg::MNL5U66tT06iscMu3EqanQ` |
| Delete a Source Group | DELETE | `/v1/api/sourceGroups/{{id}}` | `conn_mod_def::GMhtLWdslZg::6_cagHrJS5avRgiILEKEXw` |
| Update a Source Group | PATCH | `/v1/api/sourceGroups/{{id}}` | `conn_mod_def::GMhtLX-x-oA::_NLrnaLJRZSorMpPGX0PmA` |

### Watchlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Watchlist by ID | GET | `/v1/api/watchlists/{{id}}` | `conn_mod_def::GMhtLoODAnA::mnM5vYSBQT6Fse0wuVJ2Yw` |
| List Watchlists | GET | `/v1/api/watchlists` | `conn_mod_def::GMhtLwSPKFg::RaVMFH00TX-_Y23qxzprGw` |
| Resolve Watchlists | GET | `/v1/api/watchlists/resolve` | `conn_mod_def::GMhtLw2O3lg::RqVo6729QUaeFk3NBSlPYA` |
| Create a Watchlist | POST | `/v1/api/watchlists` | `conn_mod_def::GMhtLoJoN-g::PVJ-g4tqTRW-Xx0xUgIzkQ` |
| Delete a Watchlist | DELETE | `/v1/api/watchlists/{{id}}` | `conn_mod_def::GMhtLn2C3Ig::sEZzop2pSVKiF7PErfcR4g` |
| Update a Watchlist | PATCH | `/v1/api/watchlists/{{id}}` | `conn_mod_def::GMhtLvQTJCA::83MmY3DbQH-Mess7KFL-Hg` |

### ContactPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Point by UUID | GET | `/v1/api/contactPoints/{{uuid}}` | `conn_mod_def::GMhtKXRVkIg::wIGHgwyiQmqTfXNtjk98cg` |
| List Contact Points | GET | `/v1/api/contactPoints` | `conn_mod_def::GMhtKYzfn5A::9wAzntFbR_SlZc4K-G7RDQ` |
| Create Contact Points | POST | `/v1/api/contactPoints` | `conn_mod_def::GMhtKW91E0A::8ym93TRrTA-H58bG_qKA4g` |
| Delete a Contact Point | DELETE | `/v1/api/contactPoints/{{uuid}}` | `conn_mod_def::GMhtKXNk40A::q1vibSGYSwOYFuotgKbkiA` |
| Update a Contact Point | PATCH | `/v1/api/contactPoints/{{uuid}}` | `conn_mod_def::GMhtKmsXfIg::-tB7Ur41S9SMY2Tv83uXKQ` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Article Refresh Job Status | GET | `/v1/articles/refresh/jobs/{{id}}` | `conn_mod_def::GMhtK5tUreg::Ew4j0cAjSFykBExwbBQUbw` |
| Search All Articles | GET | `/v1/articles/all` | `conn_mod_def::GMhtLEuVTNA::zTWmkKk7Qam6fSdLgU24Hw` |
| Peek Cached Article Refresh Data | POST | `/v1/articles/refresh/peek` | `conn_mod_def::GMhtK6a4rgA::aKR3s-uyQBus5S4ZCNTLgA` |

### Journalists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Journalist by ID | GET | `/v1/journalists/{{id}}` | `conn_mod_def::GMhtLettehA::zsiLtbIWT1-shrrLA9KjsQ` |
| Search Journalists | GET | `/v1/journalists/all` | `conn_mod_def::GMhtLgYDbkg::tZcsg1NVQ4W5JMwzOK3M7g` |

### SearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Summarize Search Results | POST | `/v1/summarize` | `conn_mod_def::GMhtKgycPvA::UiBaLk73Rai0qpI7TOYyVg` |

### Newsletters

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Monitor's Newsletters | GET | `/v1/api/monitors/{{uuid}}/newsletters` | `conn_mod_def::GMhtKyOl6ng::7lT04u4dQKaI0exOOutwrQ` |

### MonitorEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events for a Monitor | GET | `/v1/api/monitors/{{uuid}}/events` | `conn_mod_def::GMhtKzjWnSA::XmqAupbLTbSiv3yJUDFoyQ` |

### NewsVectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Search All News Vectors | POST | `/v1/vector/news/all` | `conn_mod_def::GMhtK6Miwbg::d-90i_HORd6gOCjLXLOtxQ` |

### ArticleRefreshJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Article Refresh Jobs | POST | `/v1/articles/refresh/jobs` | `conn_mod_def::GMhtLLCbc8A::b9nd8VSgQt2r9_Y-_FRj_A` |

### StoryCountStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Story Count Statistics | GET | `/v1/stories/stats` | `conn_mod_def::GMhtLLlTVwg::i0KLqbgMRNSDV4hNSulFJA` |

### StoryHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Story History | GET | `/v1/stories/history` | `conn_mod_def::GMhtLLlrIOA::3v7vwUz-R26CkFps2QuWQg` |

### Stories

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Stories | GET | `/v1/stories/all` | `conn_mod_def::GMhtLRC3Kog::XEn5fTenQciu79VdMuUyiA` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Search All People | GET | `/v1/people/all` | `conn_mod_def::GMhtLfZxzfg::V3VUIaM9SbycfaWfZLxd8A` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Browse or Search Companies | GET | `/v1/companies/all` | `conn_mod_def::GMhtLgYb3DA::Q4Ti7RJGThqZZUn5S-0qpg` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Search All Sources | GET | `/v1/sources/all` | `conn_mod_def::GMhtLiCzmXA::fW2b4Ka1Siyq_kd6hQpliw` |

### Topics

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Topics | GET | `/v1/topics/all` | `conn_mod_def::GMhtLo6930g::gx0p9zoQS_C-DjsD52LVbA` |

### Limits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Limits | GET | `/v1/limits` | `conn_mod_def::GMhtLo7896A::ZmBUjEv5TCKI4XyVm3cR9A` |

### WikipediaVectorSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Wikipedia Using Vector | POST | `/v1/vector/wikipedia/all` | `conn_mod_def::GMhtLu9lrVg::om00A2wdRmaFAyn6mPEdfA` |

### WikipediaPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search All Wikipedia Pages | GET | `/v1/wikipedia/all` | `conn_mod_def::GMhtLy6LQBA::eRJYyavNTnm7ZNhH0pAG6A` |

## When a call fails

The error comes from Perigon, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/perigon

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
