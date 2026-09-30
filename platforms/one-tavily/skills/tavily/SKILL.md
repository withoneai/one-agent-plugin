---
name: tavily
description: Tavily is an AI-powered search tool that helps users quickly find relevant information with summaries and citations, often used in research and content creation workflows. Read and write Tavily data through One: research, crawl, search, extract, usage, maps and more, 7 actions with real parameter documentation. Use whenever the user asks to look something up in Tavily, create or update a record there, or build code against the Tavily API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tavily
  generated-from: one-knowledge-base
---

# Tavily through One

Tavily is an AI-powered search tool that helps users quickly find relevant information with summaries and citations, often used in research and content creation workflows.

One exposes Tavily through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "tavily", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Tavily is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Tavily account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Research

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Research Task’s Status and Results | GET | `/research/{{requestId}}` | `conn_mod_def::GJ7MftTxPgw::hZZ-P0Y5R0a8cUwN25rAgA` |
| Initiate a Research Task | POST | `/research` | `conn_mod_def::GJ7MfstZ_ZA::WTkv-xwQR0GYGu96ci190A` |

### Crawl

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate a Web Crawl | POST | `/crawl` | `conn_mod_def::GJ7MfsAUWGU::cUjVCgmHTQ-dW7PSc4Iuiw` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute a Tavily Search Query | POST | `/search` | `conn_mod_def::GJ7Mf5-rpy4::TYzOc_WQS92eGmufnZHaXA` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Raw Web Content | POST | `/extract` | `conn_mod_def::GJ7Mf3-T4rE::sPF14fxXR3CEo8_P3uMQKw` |

### Usage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key and Account Usage Details | GET | `/usage` | `conn_mod_def::GJ7MfsKCcFU::04VHkdg_TeOFvfzeINv9BA` |

### Maps

| Action | Method | Path | Action id |
|---|---|---|---|
| Initiate a Web Map from a Base URL | POST | `/map` | `conn_mod_def::GJ7Mfw8tWdY::dtdSdz45QQarslROFPu91w` |

## When a call fails

The error comes from Tavily, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tavily

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
