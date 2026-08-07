---
name: geocodio
description: Geocodio is a geocoding and address data platform that provides APIs for converting addresses to geographic coordinates, reverse geocoding locations, and enriching U.S. and Canadian addresses with political districts, time zones, and other location-based data. Read and write Geocodio data through One: lists, geocode, distancematrixjobs, distancejobs, listresults, reversegeocode and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Geocodio, create or update a record there, or build code against the Geocodio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: geocodio
  generated-from: one-knowledge-base
---

# Geocodio through One

Geocodio is a geocoding and address data platform that provides APIs for converting addresses to geographic coordinates, reverse geocoding locations, and enriching U.S. and Canadian addresses with political districts, time zones, and other location-based data.

One exposes Geocodio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `geocodio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Geocodio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Geocodio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List Processing Status | GET | `/v1.12/lists/{{id}}` | `conn_mod_def::GLGBTVaZ0rg::0w8l6YSKSSaXgPCeEw4adw` |
| Delete a List | DELETE | `/v1.12/lists/{{id}}` | `conn_mod_def::GLGBTVZd5uA::yGBA96wIRtypyling5nq7w` |
| Upload Spreadsheet for Geocoding | POST | `/lists` | `conn_mod_def::GLGBTWNO_zg::pr9m5IItTk6COAqHiYsaCg` |

### Geocode

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode a Single Address | GET | `/v1.12/geocode` | `conn_mod_def::GLGBTOH6rMA::4LiktVSyTMijX3X4xiI4Vg` |
| test connection | GET | `/v1.12/geocode?q=Washington+DC` | `conn_mod_def::GLGByhvFfYU::i9tWWGQfQ8yvvglbNHARTQ` |
| Batch Geocode Addresses | POST | `/v1.12/geocode` | `conn_mod_def::GLGBTMmojgg::FK9Ch4aNSce2mLbfFWjFfg` |

### DistanceMatrixJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Distance Matrix Job Status | GET | `/v1.12/distance-jobs/{{identifier}}` | `conn_mod_def::GLGBS-aWMvA::a0ewownRR8CCsdtYqLKesw` |
| List Distance Matrix Jobs | GET | `/v1.12/distance-jobs` | `conn_mod_def::GLGBTKOQfrA::uPsmRviBTXGqoefdYbB3-g` |

### DistanceJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Async Distance Matrix Job | POST | `/distance-jobs` | `conn_mod_def::GLGBS96UGrg::7pBSoK9ZR72vQsli_6_5bw` |
| Delete a Distance Matrix Job | DELETE | `/v1.12/distance-jobs/{{identifier}}` | `conn_mod_def::GLGBS95b96A::TGiIOJkrRr2RCyhgOxXC2Q` |

### ListResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download List Results | GET | `/v1.12/lists/{{id}}/download` | `conn_mod_def::GLGBTVfKU9g::fnvsl7eKQaS8G8T3q8fdFA` |

### ReverseGeocode

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Geocode a Single Coordinate | GET | `/v1.12/reverse` | `conn_mod_def::GLGBTl27s1g::FTZOWTmNSW6pHjBigxQH_w` |

### DistanceMatrix

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Distance Matrix | POST | `/v1.12/distance-matrix` | `conn_mod_def::GLGBTJpG_hA::ltteW0GOT3yHeEvXitAIqA` |

### DistanceMatrixJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Distance Matrix Job Results | GET | `/v1.12/distance-jobs/{{identifier}}/download` | `conn_mod_def::GLGBS_Jl3Yg::JFA6oEGDSlizmgoavfak4w` |

### AddressComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse an Address into Components | GET | `/parse` | `conn_mod_def::GLGBTJPlQ7A::hUkalaJTTP2AcsIfdSVjnQ` |

### UploadedSpreadsheets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Uploaded Spreadsheets | GET | `/lists` | `conn_mod_def::GLGBTYi3sAg::DUpPhnH3TH2HR416wqsI1Q` |

### Distance

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Distance From One Origin to Multiple Destinations | GET | `/distance` | `conn_mod_def::GLGBTBIVukA::fB6rdjLNTGq9FKnPTVuErw` |

### ReverseBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Reverse Geocode Coordinates | POST | `/reverse` | `conn_mod_def::GLGBTmmqX3A::lzYQbn3zSTOZ5J52COVwvQ` |

## When a call fails

The error comes from Geocodio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/geocodio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
