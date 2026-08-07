---
name: stormglass
description: Stormglass is a weather data platform and API provider that aggregates marine, ocean, and atmospheric forecasts from multiple sources, allowing developers, maritime businesses, and outdoor applications to access location-based weather, tide, wave, and wind data for planning and analysis. Read and write Stormglass data through One: tidestations, astronomypoint, weatherdata, tideextremes, solarpointdata, biodatapoint and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in Stormglass, create or update a record there, or build code against the Stormglass API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: stormglass
  generated-from: one-knowledge-base
---

# Stormglass through One

Stormglass is a weather data platform and API provider that aggregates marine, ocean, and atmospheric forecasts from multiple sources, allowing developers, maritime businesses, and outdoor applications to access location-based weather, tide, wave, and wind data for planning and analysis.

One exposes Stormglass through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `stormglass` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Stormglass is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Stormglass account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TideStations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tide Stations | GET | `/v2/tide/stations` | `conn_mod_def::GLowbJboH7g::rhbh8Q6pQb2hYoGYnY0_ug` |
| List Tide Stations Within an Area | GET | `/v2/tide/stations/area` | `conn_mod_def::GLowbCRYn40::-hh8roysTWa_uPOIixpSXQ` |

### AstronomyPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Astronomy Point | GET | `/v2/astronomy/point` | `conn_mod_def::GLowa6h3lEY::qjUtkWP3Tny2V9SkU6zIuQ` |

### WeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Data for a Point | GET | `/v2/weather/point` | `conn_mod_def::GLowbSd94uQ::oSg1WrPLQGC-BwAgd3J8kA` |

### TideExtremes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tide Extremes for a Point | GET | `/v2/tide/extremes/point` | `conn_mod_def::GLowbcjxPM8::9-5Uh9ehRRuWvs8XQlrfNw` |

### SolarPointData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Solar Point Data | GET | `/v2/solar/point` | `conn_mod_def::GLowbk0hagI::P76EiQ1QSweCre7sNR7Cgw` |

### BioDataPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bio Data for a Point | GET | `/v2/bio/point` | `conn_mod_def::GLowcBaCnWY::a2DJjuFHS62HD775ZdyNiw` |

### Elevation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Elevation for a Point | GET | `/v2/elevation/point` | `conn_mod_def::GLowb1qR-UA::Do3UbKlIRQKm1g7unhfLMQ` |

### HistoricalWeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Weather Data for a Point | GET | `/v2/historical/point` | `conn_mod_def::GLowbtYfI1o::tVErVXqWTymMd4adQBvBPA` |

## When a call fails

The error comes from Stormglass, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/stormglass

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
