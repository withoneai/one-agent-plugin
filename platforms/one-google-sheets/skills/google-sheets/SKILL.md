---
name: google-sheets
description: A cloud-based spreadsheet application that allows for real-time collaboration, powerful data manipulation, and integration with other productivity and analytics tools. Read and write Google Sheets data through One: spreadsheetsvalues, spreadsheets, developermetadata and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Google Sheets, create or update a record there, or build code against the Google Sheets API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-sheets
  generated-from: one-knowledge-base
---

# Google Sheets through One

A cloud-based spreadsheet application that allows for real-time collaboration, powerful data manipulation, and integration with other productivity and analytics tools.

One exposes Google Sheets through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-sheets` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Sheets is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Sheets account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SpreadsheetsValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Get Spreadsheet Values (Multiple Ranges) | GET | `/v4/spreadsheets/{{spreadsheetId}}/values:batchGet` | `conn_mod_def::GJ30kpWG-z8::VMMRhQGBT_ei-wq4JK7Sow` |
| Get Spreadsheet Values for a Range | GET | `/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}` | `conn_mod_def::GJ30lYkSqLk::IOnDiKqfQ_2FtFCahohidA` |
| Append Values to a Spreadsheet Range | POST | `/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}:append` | `conn_mod_def::GJ30kKk8ogk::hCE5XVrgQ3m0ip3lGzJRfQ` |
| Batch Clear Values in a Spreadsheet | POST | `/v4/spreadsheets/{{spreadsheetId}}/values:batchClear` | `conn_mod_def::GJ30kUMtvVs::QODL16UpRt2eC-MdWyN4dQ` |
| Batch Get Spreadsheet Values by Data Filter | POST | `/v4/spreadsheets/{{spreadsheetId}}/values:batchGetByDataFilter` | `conn_mod_def::GJ30kzAqR1o::EVvkNoKwSaS0Wh0Pl1UN_A` |
| Batch Update Spreadsheet Values by Data Filter | POST | `/v4/spreadsheets/{{spreadsheetId}}/values:batchUpdateByDataFilter` | `conn_mod_def::GJ30lFOjJvI::eECg9evCTf2-BIaDfBQGgA` |
| Clear Spreadsheet Values by Data Filter (Batch) | POST | `/v4/spreadsheets/{{spreadsheetId}}/values:batchClearByDataFilter` | `conn_mod_def::GJ30keXgBdw::MIuGkbOnTumdLR0rzA9SNw` |
| Clear Spreadsheet Values in a Range | POST | `/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}:clear` | `conn_mod_def::GJ30lNuohL4::IleXFnwJQXS-vL-ECBj6Vw` |
| Update Values in a Spreadsheet Range | PUT | `/v4/spreadsheets/{{spreadsheetId}}/values/{{range}}` | `conn_mod_def::GJ30lisycVw::Lt4ggUnqQ7yQ3yrqhNpp3Q` |

### Spreadsheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Spreadsheet | GET | `/v4/spreadsheets/{{spreadsheetId}}` | `conn_mod_def::GJ30jpJCuBA::-7kldtebSUeO7_FYtT48JQ` |
| Apply Batch Updates to a Spreadsheet (Batch Update) | POST | `/v4/spreadsheets/{{spreadsheetId}}:batchUpdate` | `conn_mod_def::GJ30jCATCJk::uk1gxM57RXy-ciDvxCQvQQ` |
| Batch Update Values in a Spreadsheet | POST | `/v4/spreadsheets/{{spreadsheetId}}/values:batchUpdate` | `conn_mod_def::GJ30k7Vqavo::zEU1ntnYTCiWrupKRe1Pig` |
| Copy a Sheet to Another Spreadsheet | POST | `/v4/spreadsheets/{{spreadsheetId}}/sheets/{{sheetId}}:copyTo` | `conn_mod_def::GJ30j-rzLiI::tjU7EFXWRVinvf_y8iFQmQ` |
| Create Spreadsheet | POST | `/spreadsheets` | `conn_mod_def::GJ30jKslFX4::iXTcgIckSGixrOpCuwlv4A` |
| Get a Spreadsheet by Data Filter | POST | `/v4/spreadsheets/{{spreadsheetId}}:getByDataFilter` | `conn_mod_def::GJ30j1Lx2Jk::tRvNbFBlTq-X4XyGpcsB3g` |

### DeveloperMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Spreadsheet’s Developer Metadata | GET | `/v4/spreadsheets/{{spreadsheetId}}/developerMetadata/{{metadataId}}` | `conn_mod_def::GJ30jUNjbM4::IsNYTfmATY2Gbjs15LH2xQ` |
| Search a Spreadsheet’s Developer Metadata | POST | `/v4/spreadsheets/{{spreadsheetId}}/developerMetadata:search` | `conn_mod_def::GJ30jdeYWmc::CinedUaGTFeP52TQJODw8g` |

## When a call fails

The error comes from Google Sheets, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-sheets

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
