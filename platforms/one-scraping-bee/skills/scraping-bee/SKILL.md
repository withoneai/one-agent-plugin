---
name: scraping-bee
description: ScrapingBee is a web scraping API that handles proxy rotation, headless browser rendering, and anti-bot defenses, enabling developers to extract structured data, screenshots, and JavaScript-rendered content at scale for analytics, RAG, and AI-driven workflows. Read and write ScrapingBee data through One: scrapingbeehtmlapi, fastsearchresults, chatgpt, amazonpricing, amazonproductdetails, amazonsearch and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in ScrapingBee, create or update a record there, or build code against the ScrapingBee API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scraping-bee
  generated-from: one-knowledge-base
---

# ScrapingBee through One

ScrapingBee is a web scraping API that handles proxy rotation, headless browser rendering, and anti-bot defenses, enabling developers to extract structured data, screenshots, and JavaScript-rendered content at scale for analytics, RAG, and AI-driven workflows.

One exposes ScrapingBee through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `scraping-bee` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ScrapingBee is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ScrapingBee account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ScrapingBeeHtmlApi

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a URL Through the ScrapingBee HTML API | GET | `/api/v1/` | `conn_mod_def::GMjw_drnLl0::JNPgW-roTZ-q8hdTZMt66Q` |
| Fetch a URL with the ScrapingBee HTML API | GET | `/api/v1/` | `conn_mod_def::GMjw_fxAsi4::TKXGU42OTYqOMRFO1L0QGw` |
| Fetch Arbitrary URLs Using ScrapingBee HTML API | GET | `/api/v1/` | `conn_mod_def::GMjw_c80F68::w1PynL0wTN-hHB4OELwwfw` |

### FastSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Fast Search Results | GET | `/api/v1/fast_search` | `conn_mod_def::GMjw-tLfQDc::YCKZis5TSDq8Z9318H4k6A` |

### Chatgpt

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask a GPT Model Through ScrapingBee | GET | `/api/v1/chatgpt` | `conn_mod_def::GMjw-tV8ZH0::F9-4Srm7SkOyf5bGHZnKBw` |

### AmazonPricing

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Amazon Pricing Using ScrapingBee | GET | `/api/v1/amazon/pricing` | `conn_mod_def::GMjw-uZc1EQ::7CWsqpfyTWSmnYZO5_uRkg` |

### AmazonProductDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Amazon Product Details | GET | `/api/v1/amazon/product` | `conn_mod_def::GMjw-v27Hv8::synYpmhfTNu8EgBKn-oAkQ` |

### AmazonSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon | GET | `/api/v1/amazon/search` | `conn_mod_def::GMjw_KQpnHY::RXUSvv8zTZ6rr7TWwr1BgQ` |

### GoogleSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Google Search Results | GET | `/api/v1/store/google` | `conn_mod_def::GMjw_YFe4RE::ENpG_maBQbi_E4jsUDWlpw` |

### Gemini

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask Gemini | GET | `/api/v1/gemini` | `conn_mod_def::GMjw_a17cgg::7fkQXYExTy-RsvPwzYKJkQ` |

### Usage

| Action | Method | Path | Action id |
|---|---|---|---|
| Read Real-Time Usage for the Authenticated ScrapingBee Account | GET | `/api/v1/usage` | `conn_mod_def::GMjw_oONRjI::8GlGPAE9Taml4KGbcB9J4A` |

### YoutubeMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Metadata for One YouTube Video | GET | `/api/v1/youtube/metadata` | `conn_mod_def::GMjw_qOgT_0::f60uoGS1SIO5wumjkpKY7w` |

### WalmartSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Walmart Using ScrapingBee | GET | `/api/v1/walmart/search` | `conn_mod_def::GMjw_qpGs9k::8-HnDCGlTJKhtn_OuyzR-Q` |

### YoutubeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search YouTube Using ScrapingBee | GET | `/api/v1/youtube/search` | `conn_mod_def::GMjw_sh9_h8::FCQXW7O7SBq6RNsvsQWZpg` |

### WalmartProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Walmart Product Using ScrapingBee | GET | `/api/v1/walmart/product` | `conn_mod_def::GMjw_tEUJno::8yNWAPC7RVGndoD6fOkAiw` |

### YoutubeSubtitles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve YouTube Video Subtitles | GET | `/api/v1/youtube/subtitles` | `conn_mod_def::GMjw_2auFuA::_aQq3P6kQWqEKEZdJxWAJQ` |

## When a call fails

The error comes from ScrapingBee, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scraping-bee

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
