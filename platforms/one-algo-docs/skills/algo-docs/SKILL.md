---
name: algo-docs
description: Algodocs is an AI-powered intelligent document processing platform that extracts and structures data from PDFs, images, and handwritten documents, enabling businesses to automate data entry, streamline workflows, and integrate extracted data with downstream systems like ERP and CRM. Read and write AlgoDocs data through One: documents, extracteddata, unrecognizedclassifieddocuments, currentuserprofile, extractors, folders and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in AlgoDocs, create or update a record there, or build code against the AlgoDocs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: algo-docs
  generated-from: one-knowledge-base
---

# AlgoDocs through One

Algodocs is an AI-powered intelligent document processing platform that extracts and structures data from PDFs, images, and handwritten documents, enabling businesses to automate data entry, streamline workflows, and integrate extracted data with downstream systems like ERP and CRM.

One exposes AlgoDocs through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "algo-docs", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm AlgoDocs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real AlgoDocs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Base64-Encoded Document to an Extractor Folder | POST | `/v1/document/upload_base64/{{extractorId}}/{{folderId}}` | `conn_mod_def::GKjsGhIdcYg::y0gniFdaR7qilfIRJyz-0w` |
| Upload a Document to an Extractor Folder from a Public URL | POST | `/v1/document/upload_url/{{extractorId}}/{{folderId}}` | `conn_mod_def::GKjsGmxNNkg::GsO2biL8TWCyH30cFSUM9g` |
| Upload a Local File to a Folder for an Extractor | POST | `/v1/document/upload_local/{{extractorId}}/{{folderId}}` | `conn_mod_def::GKjsGipd2Rg::V4WoeIKcQaqQGhhLkBlK-Q` |

### ExtractedData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Extracted Data for a Document | GET | `/v1/extracted_data/{{documentId}}` | `conn_mod_def::GKjsGUjXgOg::7llyi4b2SHKMu1oTksWd9w` |
| List Extracted Data for an Extractor | GET | `/v1/extracted_data/{{extractorId}}` | `conn_mod_def::GKjsGWApUlg::dIXwP5PWTdq-vU4pizEEHQ` |

### UnrecognizedClassifiedDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Unrecognized Classified Documents | GET | `` | `conn_mod_def::GKjsGUQTfLA::nizj44RnSeuA2-j0qel-nQ` |

### CurrentUserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User Profile | GET | `/v1/me` | `conn_mod_def::GKjsGVjzyVA::ufcL3PeYQz2dc-xWJSPMSg` |

### Extractors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Extractors | GET | `/v1/extractors` | `conn_mod_def::GKjsGWpIGKA::GihGPRqLTT61gVKpbZqClA` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Folders | GET | `/folders` | `conn_mod_def::GKjsGiphuUg::0dCIFNt5SoOH_nzDeSeIRQ` |

## When a call fails

The error comes from AlgoDocs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/algo-docs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
