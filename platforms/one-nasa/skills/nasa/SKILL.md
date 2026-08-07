---
name: nasa
description: NASA provides open APIs that give developers access to public agency data and content, enabling applications to retrieve information from NASA services and integrate space, science, and mission-related resources into websites, tools, and research workflows. Read and write NASA data through One: asteroid, neofeed, coronalmassejections, asteroiddataset, astronomypictureoftheday, highspeedstreamevents and more, 21 actions with real parameter documentation. Use whenever the user asks to look something up in NASA, create or update a record there, or build code against the NASA API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: nasa
  generated-from: one-knowledge-base
---

# NASA through One

NASA provides open APIs that give developers access to public agency data and content, enabling applications to retrieve information from NASA services and integrate space, science, and mission-related resources into websites, tools, and research workflows.

One exposes NASA through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `nasa` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NASA is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NASA account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Asteroid

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup a Specific Asteroid | GET | `/neo/rest/v1/neo/{{asteroidId}}` | `conn_mod_def::GMkviN6LDag::TQPyRIsoQAWUuxSFJxzFsA` |

### NeoFeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve the Neo Feed | GET | `/neo/rest/v1/feed` | `conn_mod_def::GMkviPHSoXg::vjdAr4AKRWKCA1qWDh4kcw` |

### CoronalMassEjections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coronal Mass Ejections | GET | `/DONKI/CME` | `conn_mod_def::GMkviQReX1g::mlaqWFpYQq2GtS1Q1hwIUw` |

### AsteroidDataSet

| Action | Method | Path | Action id |
|---|---|---|---|
| Browse the Overall Asteroid Data Set | GET | `/neo/rest/v1/neo/browse/` | `conn_mod_def::GMkviQqRJjA::EMFDxQYESzGi06wcBZ9ptg` |

### AstronomyPictureOfTheDay

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Astronomy Picture of the Day | GET | `/planetary/apod` | `conn_mod_def::GMkviR14BDA::A-cgPrGqSAqLFH6fwLSzew` |

### HighSpeedStreamEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List High Speed Stream Events | GET | `/DONKI/HSS` | `conn_mod_def::GMkviZFU_yA::mkWhlvsOTq2sDWMA6ZpgRg` |

### GeomagneticStormEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Geomagnetic Storm Events | GET | `/DONKI/GST` | `conn_mod_def::GMkviZeWIcA::H5jvzte0T8GR7w_B6dP23g` |

### InterplanetaryShockEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Interplanetary Shock Events | GET | `/DONKI/IPS` | `conn_mod_def::GMkviadvt_A::J8iahP7qSgmtvHpQqIPK1A` |

### CoronalMassEjectionCmeAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coronal Mass Ejection (CME) Analysis | GET | `/DONKI/CMEAnalysis` | `conn_mod_def::GMkviaogeEA::plAdQ_a0SauCDBOdcCb9Sw` |

### MagnetopauseCrossingMpc

| Action | Method | Path | Action id |
|---|---|---|---|
| List Magnetopause Crossing (MPC) | GET | `/DONKI/MPC` | `conn_mod_def::GMkvideQmHg::PIhYrYAwRCGAgVXo8ws7mg` |

### RadiationBeltEnhancements

| Action | Method | Path | Action id |
|---|---|---|---|
| List Radiation Belt Enhancements | GET | `/DONKI/RBE` | `conn_mod_def::GMkvikwopgg::Jed5faUiSrGr6RbX-4nLTg` |

### WsaEnlilSimulations

| Action | Method | Path | Action id |
|---|---|---|---|
| List WSA Enlil Simulations | GET | `/DONKI/WSAEnlilSimulations` | `conn_mod_def::GMkvilh9yJg::XFanbpzYQJCqxCVlfZt5yA` |

### SolarEnergeticParticleEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Solar Energetic Particle Events | GET | `/DONKI/SEP` | `conn_mod_def::GMkvil7yEPg::g-9K2MuKQcC3ya84QlrNfw` |

### SolarFlareEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Solar Flare Events | GET | `/DONKI/FLR` | `conn_mod_def::GMkvinHUqTg::hvFyoxlaQ9SAeUUuCDj0Eg` |

### DonkiNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| List DONKI Notifications | GET | `/DONKI/notifications` | `conn_mod_def::GMkvinHqd0A::eFzTzMyMR1GCKuFfl5xvNA` |

### TleRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a TLE Record by Satellite Number | GET | `/api/tle/{{q}}` | `conn_mod_def::GMkviuOGnjg::z4l9WcGNQNaAt4MMfBaMiA` |

### EpicNaturalColorAvailableDates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Dates for EPIC Natural Color Imagery | GET | `/EPIC/api/natural/all` | `conn_mod_def::GMkvivIGvug::wccA7Mh1TpqqQNaXmvOOHg` |

### InSightMarsWeather

| Action | Method | Path | Action id |
|---|---|---|---|
| Get InSight Mars Weather | GET | `/insight_weather/` | `conn_mod_def::GMkvivfTTcg::mDvwgOmUTKaua-pWJHz62g` |

### TechTransferResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Search NASA TechTransfer Resources | GET | `/techtransfer` | `conn_mod_def::GMkvivngdzA::y5pdCVWJSBS12ACxQZ7VPA` |

### ExoplanetArchive

| Action | Method | Path | Action id |
|---|---|---|---|
| Query the NASA Exoplanet Archive API | GET | `/cgi-bin/nstedAPI/nph-nstedAPI` | `conn_mod_def::GMkviwqDyeg::6mgCu1mnSd6XhkwcFrLVgQ` |

### WmtsTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Access Vesta, Moon, and Mars Trek WMTS Tiles | GET | `/1.0.0/{{style}}/{{tileMatrixSet}}/{{tileMatrix}}/{{tileRow}}/{{tileCol}}.png` | `conn_mod_def::GMkvi4bYJIA::Tp9sKbaITguCZ2w69T5HDQ` |

## When a call fails

The error comes from NASA, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/nasa

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
