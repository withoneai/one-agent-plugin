---
name: parsera
description: Parsera is an AI-powered web-data-extraction platform that allows users to input a URL and natural-language instructions to extract structured data or generate reusable scraping scripts — enabling developers and teams to automate web scraping at scale without writing complex selector code. Read and write Parsera data through One: scrapers, llmspecs, proxycountries, parse, extract, healthcheck and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Parsera, create or update a record there, or build code against the Parsera API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: parsera
  generated-from: one-knowledge-base
---

# Parsera through One

Parsera is an AI-powered web-data-extraction platform that allows users to input a URL and natural-language instructions to extract structured data or generate reusable scraping scripts — enabling developers and teams to automate web scraping at scale without writing complex selector code.

One exposes Parsera through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `parsera` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Parsera is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Parsera account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Scrapers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates (and Old Scrapers) | GET | `/scrapers` | `conn_mod_def::GJ5-DFz8WnQ::aVaEl13JSEiNdDinv5HWBg` |
| Create a New Scraper (Empty) | POST | `/scrapers/new` | `conn_mod_def::GJ5-DD7OZ80::SHBVaLA9SbC2xvQt0jfqUg` |
| Delete a Scraper | DELETE | `/v1/scrapers/{{scraperId}}` | `conn_mod_def::GJ5-C5iAr-o::P07DrdqeRxO1FQUtaWVPFw` |
| Generate a Scraper | POST | `/v1/scrapers/generate` | `conn_mod_def::GJ5-C8xHR7Y::DwRyGLEWQxCJ5HGeB77qqg` |
| Run Scraper | POST | `/scrapers/run` | `conn_mod_def::GJ5-DNmW1gU::H8PpcWgITAeSCVFNwqREiQ` |

### LlmSpecs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get LLM Specs | GET | `/llm-specs` | `conn_mod_def::GJ5-DDuAc2o::r4blEXN8RX-H2YQe8FBm6g` |

### ProxyCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Proxy Countries | GET | `/proxy-countries` | `conn_mod_def::GJ5-DDyEKeU::Wi5UXa0nSDWNL35gb6pfqg` |

### Parse

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse Content Into Structured Attributes | POST | `/v1/parse` | `conn_mod_def::GJ5-DEUdUFA::c2rwZGGfRMuc3VYLY5W1rw` |

### Extract

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Structured Data From a URL | POST | `/extract` | `conn_mod_def::GJ5-C3S6spI::FT76Ht3VTgShY0cZ-FOUdQ` |

### HealthCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check (Readiness) | GET | `/readyz` | `conn_mod_def::GJ5-C3UfjVw::FzbewOEVS4m0glFUcTzKYg` |

### MarkdownExtraction

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Markdown From a URL | POST | `/extract_markdown` | `conn_mod_def::GJ5-C3gQuG8::NIyQCIBAR1uUrAxgPk6epw` |

## When a call fails

The error comes from Parsera, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/parsera

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
