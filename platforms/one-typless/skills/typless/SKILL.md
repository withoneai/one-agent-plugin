---
name: typless
description: Typless is an intelligent document processing platform that uses OCR and machine learning to extract structured data from invoices, receipts, and other business documents, allowing teams and developers to automate data entry, validation, and downstream workflow integrations. Read and write Typless data through One: extractiondata, extractdata, extracttext, documents, extracttextasync, extractdataasync and more, 12 actions with real parameter documentation. Use whenever the user asks to look something up in Typless, create or update a record there, or build code against the Typless API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: typless
  generated-from: one-knowledge-base
---

# Typless through One

Typless is an intelligent document processing platform that uses OCR and machine learning to extract structured data from invoices, receipts, and other business documents, allowing teams and developers to automate data entry, validation, and downstream workflow integrations.

One exposes Typless through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `typless` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Typless is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Typless account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ExtractionData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extraction Data | GET | `/api/v1/get-extraction-data` | `conn_mod_def::GMitxyMhs3A::lvMgD9O_QcmPYskZhffICg` |
| Get Extraction Data Using API v2 | GET | `/api/v2/get-extraction-data` | `conn_mod_def::GMitx0G9Mig::HPHIPr_PSK-XPRNNyibqyg` |

### ExtractData

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Data | POST | `/api/v1/extract-data` | `conn_mod_def::GMitxgsYYpg::Xay2FTSUQKCWWmvvU-3vWQ` |

### ExtractText

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text | POST | `/api/v1/extract-text` | `conn_mod_def::GMitxg-srBA::VZQcYhqGS-6aoSNnWn6zSA` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Document Async Using Api v1 | POST | `/api/v1/add-document-async` | `conn_mod_def::GMitxhbePXg::urH1WBQWRm-kz5o-QnAynQ` |

### ExtractTextAsync

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text Async | POST | `/api/v1/extract-text-async` | `conn_mod_def::GMitxheZCcg::T31QyeqNTACoUaiiNT2fDA` |

### ExtractDataAsync

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Data Async | POST | `/api/v1/extract-data-async` | `conn_mod_def::GMitxpxeMHA::Mul9kX2aSMurN7JnH0uVEQ` |

### HealthCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/api/health-check/` | `conn_mod_def::GMitxwEazyg::u36DbWhrQ2yvh4uSxGXGuQ` |

### DocumentsAwaitingPoll

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Documents Awaiting Poll | GET | `/api/v1/awaiting-poll` | `conn_mod_def::GMitxyMrqjg::vcfwrfnMRQiiagmxSOPYcQ` |

### ExtractedText

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extracted Text | GET | `/api/get-extracted-text/{{extractionId}}` | `conn_mod_def::GMitx25c02A::OX2J6A4nS2GmLpC7OlYNlw` |

### PretrainedModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Data Async Using a Pretrained Model | POST | `/api/v1/pretrained-models/{{modelName}}` | `conn_mod_def::GMitx-B29Fg::kBTG4DzvSK6PDh6uh9b7rg` |

### VatIdValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Vat Id | POST | `/api/v1/validate-vat-id` | `conn_mod_def::GMitx-fEYpA::-iQw06ahSlSsMpQk2SUwFw` |

## When a call fails

The error comes from Typless, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/typless

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
