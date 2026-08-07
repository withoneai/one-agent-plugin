---
name: geoapify
description: Geoapify is a geospatial platform that provides APIs for maps, geocoding, routing, places, and address autocomplete, allowing developers to build location-based applications, enrich geographic data, and integrate mapping and navigation features into web and mobile products. Read and write Geoapify data through One: batchreversegeocodingresults, batchgeocode, batchgeocodereverse, batchgeocodingjobresults, geocodeautocomplete, mapmatching and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Geoapify, create or update a record there, or build code against the Geoapify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: geoapify
  generated-from: one-knowledge-base
---

# Geoapify through One

Geoapify is a geospatial platform that provides APIs for maps, geocoding, routing, places, and address autocomplete, allowing developers to build location-based applications, enrich geographic data, and integrate mapping and navigation features into web and mobile products.

One exposes Geoapify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `geoapify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Geoapify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Geoapify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BatchReverseGeocodingResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Batch Reverse Geocoding Results | GET | `/batch/geocode/reverse` | `conn_mod_def::GLdeX5T3y2A::PZ5X4ifERPu8cByo3yvd-A` |

### BatchGeocode

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Batch Geocode Using Batch Geocode | POST | `/batch/geocode/search` | `conn_mod_def::GLdeX5a_VJA::YxdEfvKoS_6MrSzRYNvT9A` |

### BatchGeocodeReverse

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Batch Geocoding Using Batch Geocode | POST | `/v1/batch/geocode/reverse` | `conn_mod_def::GLdeX7quhMA::H9wQwuJqTz-A5dF0bjVbHg` |

### BatchGeocodingJobResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Batch Geocoding Job Results | GET | `/v1/batch/geocode/search` | `conn_mod_def::GLdeX77m5uA::qA4cu9acToiWJsDawh6lxQ` |

### GeocodeAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Autocomplete Geocoding Using Geocode | GET | `/v1/geocode/autocomplete` | `conn_mod_def::GLdeX9Q-rXA::QKwYfqXmSn-vwV_lpn-HSg` |

### MapMatching

| Action | Method | Path | Action id |
|---|---|---|---|
| Match GPS Coordinates to the Road Network | POST | `/v1/mapmatching` | `conn_mod_def::GLdeYIQjsyA::gSKZW5T3QX6DAqot7AJd0A` |

### GeocodingAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Geocoding Addresses | GET | `/v1/geocode/search` | `conn_mod_def::GLdeYJ1GulA::ShkMbmO9S7qQ6tmw6n58Vg` |

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Search for Places by Category and Location | GET | `/places` | `conn_mod_def::GLdeYJ1qCWA::gVr0Z-M7RiKtY4NKfdpO4Q` |

### IpGeolocationData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve IP Geolocation Data | GET | `/v1/ipinfo` | `conn_mod_def::GLdeYKtFGEA::o19m7gziRFCCP_QgzgiS5Q` |

### Isolines

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Isolines | GET | `/v1/isoline` | `conn_mod_def::GLdeYKtLyxg::svyUZ14FRLi8H7L7BTgSMQ` |

### RouteMatrix

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Route Matrix | POST | `/v1/routematrix` | `conn_mod_def::GLdeYTxKGEA::rHnJ13l5RsWTBC1irot4WA` |

### RoutePlan

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Route Plan | POST | `/v1/routeplanner` | `conn_mod_def::GLdeYUxQ7Hg::3oiecoYwRxiP5tZGjO092Q` |

### Routing

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Route | GET | `/routing` | `conn_mod_def::GLdeYWeZxZA::u8EluQtYRNalX6q-kT0iWw` |

### Geocode

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Geocode Using Geocode | GET | `/geocode/reverse` | `conn_mod_def::GLdeYWktC9g::DEHr9r2eSUKXdAqCvuKCQQ` |

## When a call fails

The error comes from Geoapify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/geoapify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
