---
name: scraping-ant
description: ScrapingAnt is a web scraping API platform that provides proxy rotation, headless browser rendering, and anti-bot handling, allowing developers and data teams to extract structured data from websites at scale without managing scraping infrastructure directly. Read and write ScrapingAnt data through One: general, accountusagestatistics and more, 6 actions with real parameter documentation. Use whenever the user asks to look something up in ScrapingAnt, create or update a record there, or build code against the ScrapingAnt API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scraping-ant
  generated-from: one-knowledge-base
---

# ScrapingAnt through One

ScrapingAnt is a web scraping API platform that provides proxy rotation, headless browser rendering, and anti-bot handling, allowing developers and data teams to extract structured data from websites at scale without managing scraping infrastructure directly.

One exposes ScrapingAnt through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "scraping-ant", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ScrapingAnt is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ScrapingAnt account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### General

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Web Page Using a GET Request | GET | `/v2/general` | `conn_mod_def::GLtnsuBe4I4::S1nQR8PIRwqezmURVb3pfg` |
| Scrape a Web Page Using a DELETE Request | DELETE | `/v2/general` | `conn_mod_def::GLtns-JtrYs::Uv1MLdY6T4S3s617oJ-B2w` |
| Scrape a Web Page Using a PATCH Request | PATCH | `/v2/general` | `conn_mod_def::GLtnstRk-0Q::gf7uAZTfRSqtNPRVUshwPA` |
| Scrape a Web Page Using a POST Request | POST | `/v2/general` | `conn_mod_def::GLtnstR8n-8::nlbHRZxDSsOJ2HzuoWMqrA` |
| Scrape a Web Page Using a PUT Request | PUT | `/v2/general` | `conn_mod_def::GLtnstRaegE::ISRZDKDrQAarkyfUSZz95w` |

### AccountUsageStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Usage Statistics | GET | `/v2/usage` | `conn_mod_def::GLtntH1uxYA::zVF4moVGRZul0b0sugvD9Q` |

## When a call fails

The error comes from ScrapingAnt, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scraping-ant

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
