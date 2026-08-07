---
name: apipie-ai
description: APIpie AI is an AI integration platform that provides unified APIs and tooling for connecting language models with external services, allowing developers to build AI agents and automations that can access third-party apps, data, and actions through a single interface. Read and write APIpie AI data through One: vectors, state, realestateproperties, models, images, queries and more, 33 actions with real parameter documentation. Use whenever the user asks to look something up in APIpie AI, create or update a record there, or build code against the APIpie AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: apipie-ai
  generated-from: one-knowledge-base
---

# APIpie AI through One

APIpie AI is an AI integration platform that provides unified APIs and tooling for connecting language models with external services, allowing developers to build AI agents and automations that can access third-party apps, data, and actions through a single interface.

One exposes APIpie AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `apipie-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm APIpie AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real APIpie AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Vectors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Record in a Vector Collection | GET | `/vectors/fetch` | `conn_mod_def::GLEyGocE0Xg::YfgNbRAATtmW08G_j4sacA` |
| Create a New Vector Collection | POST | `/vectors` | `conn_mod_def::GLEyGouKXYA::84mZnz1mS42r69NsNYdKlg` |
| Delete a Vector Collection or Specific Vectors | POST | `/vectors/delete` | `conn_mod_def::GLEyGn7-DfA::TnTO_8ouQvaSWaVQ1WoAmQ` |
| List Vector IDs in a Collection | POST | `/vectors/list` | `conn_mod_def::GLEyGv2UE1g::GSE1f2jgRA2l6NKGaOsdGw` |
| Query Vectors in a Collection | POST | `/vectors/query` | `conn_mod_def::GLEyGwa9_gg::2NqYSK8UTGOOCnni7EPhOw` |
| Upsert a Vector into a Collection | PUT | `/vectors/upsert` | `conn_mod_def::GLEyGwa9_gg::pf8RgPitR4SVSJTuu2s4VQ` |

### State

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current State Settings | GET | `/state` | `conn_mod_def::GLEyGf1FXCg::oo_yhltkTnqWDYq9yhiXqA` |
| Create or Update State Settings | POST | `/state` | `conn_mod_def::GLEyGf1SHcg::3Ntju33jTP-VoD_sRK74wA` |
| Delete Entire State Records | DELETE | `/v1/state` | `conn_mod_def::GLEyGgjl5Fg::Y4qsuR0XQgisFf4jnSwRaA` |

### RealEstateProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Real Estate Properties by Coordinates | POST | `/v1/data/real-estate/coordinates` | `conn_mod_def::GLEyGFlv3eA::2BRVqly2Tmurf7JNYinrXw` |
| Search Real Estate Properties by Polygon | POST | `/v1/data/real-estate/polygon` | `conn_mod_def::GLEyGFmYXRA::MnSHSw7-TcyawZTOwXE-Kw` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Detailed Models | GET | `/models/detailed` | `conn_mod_def::GLEyGOFE2LA::zOnHa_01QFmdVySP36UCiQ` |
| Fetch Models | GET | `/v1/models` | `conn_mod_def::GLEyGOuospA::7QxwIyNAQ7euAJyLSrxw0A` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Images | POST | `/v1/images/generations` | `conn_mod_def::GLEyGMenC9A::crQ5fzXmTz2543nbjjt_Jw` |

### Queries

| Action | Method | Path | Action id |
|---|---|---|---|
| Query History | GET | `/queries` | `conn_mod_def::GLEyGXZ9l1A::TzlCm-XQTyayY4vvfZlyKw` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Chat Completion | POST | `/chat/completions` | `conn_mod_def::GLEyF7Ogfog::s7FoRIIxRjqI0fiOHhfM1A` |

### VectorCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Vector Collections | POST | `/vectors/listcollections` | `conn_mod_def::GLEyGobh1HA::JZLU8LCEQUyQDzE3ZaNjmw` |

### AudioTranscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Transcribe Audio to Text | POST | `/v1/audio/transcriptions` | `conn_mod_def::GLEyF5FwnhA::dDrpzm9USyCpg2tUSZSkmw` |

### PropertyDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Property Details by Address | POST | `/v1/data/real-estate/address` | `conn_mod_def::GLEyGFl6ysA::KQPOzdI-QDeJvA10YXnhEA` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Embeddings | POST | `/v1/embeddings` | `conn_mod_def::GLEyGF1iPiA::jTcYnqR7ThqNimChlYxuDw` |

### Scrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Web Scraping | POST | `/v1/scrape` | `conn_mod_def::GLEyGfjIdvg::ChGooNNMR6WzDxd2vQNigA` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Web Search | POST | `/v1/search` | `conn_mod_def::GLEyGfmIIWA::ldLL1aw1RZy7lS99mYU6VQ` |

### Anon

| Action | Method | Path | Action id |
|---|---|---|---|
| Anonymize Sensitive Entities in Text | POST | `/v1/anon` | `conn_mod_def::GLEyF5WWzAg::Qe3VMvZ2QJeS-yPY57Twzg` |

### JobSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Job Search | POST | `/v1/data/jsearch` | `conn_mod_def::GLEyF6M3Qug::idCLcGlCSR-DiuSV2GpXzw` |

### AudioSpeech

| Action | Method | Path | Action id |
|---|---|---|---|
| Text to Speech Conversion | POST | `/v1/audio/speech` | `conn_mod_def::GLEyF8pM3IA::Ir-eptR3QcWDOzc10YHOMA` |

### RealEstate

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Real Estate by Location | POST | `/v1/data/real-estate/search` | `conn_mod_def::GLEyGFtH4dA::RI1SR69zRpyI_v_suFzKSw` |

### Parser

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse Document Content and Metadata | POST | `/v1/parser` | `conn_mod_def::GLEyGNF76Dg::HUaEDssGT8qiS2f7cGIKzw` |

### InlineCliCommandReference

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Inline CLI Command Reference | GET | `/v1/chat/completions/inline-cli` | `conn_mod_def::GLEyGNHgKEg::uxTIW0bIRlKBjjtu4yHoKg` |

### SearchAnswer

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Answer | POST | `/v1/search/answer` | `conn_mod_def::GLEyGV9Fumg::PBPhhA7bSl6-MEgTFVXmLw` |

### RagTune

| Action | Method | Path | Action id |
|---|---|---|---|
| Process a Document for RAG Tuning | POST | `/ragtune` | `conn_mod_def::GLEyGV_wgSg::4XADdhFkTvG0a-vVcITOlA` |

### RagTuneCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collections for RAG Tuning | POST | `/ragtune/listcollections` | `conn_mod_def::GLEyGWofmyA::j_yjrovqTASCh5dBSW2CBg` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Collection | POST | `/ragtune/delete` | `conn_mod_def::GLEyGYBOn0A::K-bSdPL4SGCPtX0fr0oTpQ` |

### Urlshare

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a File and Retrieve a URL | POST | `/urlshare` | `conn_mod_def::GLEyGnlchrA::EUYJpUB8ShO408dTkmIKnQ` |

## When a call fails

The error comes from APIpie AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/apipie-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
