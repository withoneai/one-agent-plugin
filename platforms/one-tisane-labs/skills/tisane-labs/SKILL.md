---
name: tisane-labs
description: Tisane Labs is an AI language analysis platform that provides APIs for content moderation, sentiment and intent detection, entity extraction, and text classification, allowing developers to process multilingual text, identify policy violations, and automate safety and compliance workflows in applications. Read and write Tisane Labs data through One: languagedetection, textanalysis, namedentities, inflectedforms, semanticsimilarity, translatetext and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Tisane Labs, create or update a record there, or build code against the Tisane Labs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tisane-labs
  generated-from: one-knowledge-base
---

# Tisane Labs through One

Tisane Labs is an AI language analysis platform that provides APIs for content moderation, sentiment and intent detection, entity extraction, and text classification, allowing developers to process multilingual text, identify policy violations, and automate safety and compliance workflows in applications.

One exposes Tisane Labs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tisane-labs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Tisane Labs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Tisane Labs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### LanguageDetection

| Action | Method | Path | Action id |
|---|---|---|---|
| Detect Language | POST | `/detectLanguage` | `conn_mod_def::GK0_SMMrvig::CJWnbipWTDimoeACqikl2A` |

### TextAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyze Text | POST | `/parse` | `conn_mod_def::GK0_SMR9gug::sYzUZmg5ThWI-MK_Yg6n5A` |

### NamedEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Named Entities | POST | `/compare/entities` | `conn_mod_def::GK0_SMZIBdA::XQ26WD9fSzK-6c5BxxWCyg` |

### InflectedForms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inflected Forms | GET | `/lm/inflections` | `conn_mod_def::GK0_SNYhD2A::jzlKEcQBRWiIklkJIkEVfg` |

### SemanticSimilarity

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Semantic Similarity | POST | `/similarity` | `conn_mod_def::GK0_SVEXOYg::zopofGu2TNqBGMV-wPtoLg` |

### TranslateText

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate Text | POST | `/transform` | `conn_mod_def::GK0_SVXDprA::39AinUfaQpmnijlGz25EIg` |

### ExtractTextCleanUpContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text Clean-Up Content | POST | `/helper/extract_text` | `conn_mod_def::GK0_SVwJgFg::5KrRgqmoSeKJU_HbceLQNg` |

### Languages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Languages | GET | `/languages` | `conn_mod_def::GK0_SMFJrAA::MKt-0oBiSaSXCsx59a2qmg` |

## When a call fails

The error comes from Tisane Labs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tisane-labs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
