---
name: opencage
description: OpenCage is a geocoding platform that provides APIs for converting addresses, place names, and coordinates into structured geographic data, allowing developers to build location-aware applications with forward and reverse geocoding, normalization, and global coverage. Read and write OpenCage data through One: geocode, geocoding, geojsongeocodingresults, healthcheck and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in OpenCage, create or update a record there, or build code against the OpenCage API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: opencage
  generated-from: one-knowledge-base
---

# OpenCage through One

OpenCage is a geocoding platform that provides APIs for converting addresses, place names, and coordinates into structured geographic data, allowing developers to build location-aware applications with forward and reverse geocoding, normalization, and global coverage.

One exposes OpenCage through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `opencage` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenCage is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenCage account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Geocode

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode a Query (JSON) | GET | `/geocode/v1/json` | `conn_mod_def::GLGBSFZzylA::Wj6J2IHgQLK70hYKwXmHiA` |
| test connection | GET | `/geocode/v1/json?q=Berlin` | `conn_mod_def::GLGB9-FrQ6A::PzyzG-eqSw-_SKo7DTb6mg` |

### Geocoding

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode an Address or Coordinates (XML) | GET | `/geocode/v1/xml` | `conn_mod_def::GLGBSFmRmJg::Avbtaq2rQVySQeR7iflxMg` |

### GeojsonGeocodingResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get GeoJSON Geocoding Results | GET | `/geocode/v1/geojson` | `conn_mod_def::GLGBSJhYF3g::9Q4RTJRDRj6niFZceAM83A` |

### HealthCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Check API Health and Connectivity | GET | `/geocode/v1/ping` | `conn_mod_def::GLGBSCv9RsA::F2U459LyTfKj2fKfNRft9w` |

## When a call fails

The error comes from OpenCage, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/opencage

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
