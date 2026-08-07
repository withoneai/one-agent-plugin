---
name: open-weather
description: OpenWeather is a weather intelligence platform that provides global APIs for current conditions, forecasts, historical climate data, air pollution, solar radiation, and related environmental insights, allowing developers, businesses, and researchers to integrate weather data into applications, analytics, and operational workflows. Read and write OpenWeather data through One: solarpanels, locations, weatherstations, currentweather, airpollution, currentweatherdata and more, 73 actions with real parameter documentation. Use whenever the user asks to look something up in OpenWeather, create or update a record there, or build code against the OpenWeather API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: open-weather
  generated-from: one-knowledge-base
---

# OpenWeather through One

OpenWeather is a weather intelligence platform that provides global APIs for current conditions, forecasts, historical climate data, air pollution, solar radiation, and related environmental insights, allowing developers, businesses, and researchers to integrate weather data into applications, analytics, and operational workflows.

One exposes OpenWeather through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `open-weather` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OpenWeather is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OpenWeather account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SolarPanels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Solar Panel | GET | `/energy/1.0/panel/{{panelId}}` | `conn_mod_def::GMYXODAmEbY::kuIO_MB-Q1-JJVkrt6uKPQ` |
| List a Location's Solar Panels | GET | `/energy/1.0/location/{{locationId}}/panels` | `conn_mod_def::GMYXOC3GZXU::9SWGDqbFTh2bEEOnuN5WdQ` |
| List a Location's Solar Panels | GET | `/energy/2.0/location/{{locationId}}/panels` | `conn_mod_def::GMYXOaQ-jF4::FWLXP8H8R_WwIQ3phU5Rhw` |
| Create a Solar Panel for a Location | POST | `/energy/1.0/location/{{locationId}}/panels` | `conn_mod_def::GMYXNztiN0I::Ax14QpwBQymHAvXMMzQdgg` |
| Create a Solar Panel for a Location | POST | `/energy/2.0/location/{{locationId}}/panels` | `conn_mod_def::GMYXOEBxwdI::JUP7BMY1SdmwnU7-HDiHDA` |
| Delete a Solar Panel | DELETE | `/energy/2.0/panel/{{panelId}}` | `conn_mod_def::GMYXOLlBpnE::eATWVu5jQMCrtIxTciiMSA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location Using Energy 1.0 | GET | `/energy/1.0/location/{{locationId}}` | `conn_mod_def::GMYXN77Ed2M::Z_zqpFVZRPuPqRRsWTR8mg` |
| Get a Location Using Energy 2.0 | GET | `/energy/2.0/location/{{locationId}}` | `conn_mod_def::GMYXOL4kSiU::K3l2hdbmQ5Ky1KXk6NBBqA` |
| List Locations Using Energy 1.0 | GET | `/energy/1.0/locations` | `conn_mod_def::GMYXOC4TUv4::ncO3-i03RRu3Denwq1magw` |
| List Solar Panel Energy Prediction Locations | GET | `/energy/2.0/locations` | `conn_mod_def::GMYXOZ4ScNo::G3NI8ZjXQRCggWqIwuFgSw` |
| Create a Location Using Energy 1.0 | POST | `/energy/1.0/locations` | `conn_mod_def::GMYXN77iqx0::NybUu4yGQ5mq5TKErJk7UA` |
| Create a Location Using Energy 2.0 | POST | `/energy/2.0/locations` | `conn_mod_def::GMYXOK37nmQ::29cx3RElRli8mwJ9NbNNAg` |

### WeatherStations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Weather Station by ID | GET | `/data/3.0/stations/{{id}}` | `conn_mod_def::GMYXOjQv8AY::LqdhN7sPSb6eYz3bM1pKRg` |
| List Weather Stations | GET | `/data/3.0/stations` | `conn_mod_def::GMYXOjU2x-A::97CmXjZpTsiUhGN_ojqCAg` |
| Create a Weather Station | POST | `/data/3.0/stations` | `conn_mod_def::GMYXOa4Sjss::5OYyo8W-Rq20XdwmPkwcGQ` |
| Delete a Weather Station | DELETE | `/data/3.0/stations/{{id}}` | `conn_mod_def::GMYXOh2jb3s::9kWaiAd3SfaFx7BNNiFBgA` |
| Update a Weather Station | PUT | `/data/3.0/stations/{{id}}` | `conn_mod_def::GMYXOji3WNA::w7Pd3cklQXWpWZGmsKNxHw` |

### CurrentWeather

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Weather Data Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNfml6L0::wL1Zy8HWSTy92fDAzPe5bg` |
| Get Current Weather Data Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNf7RBYo::XfJQV1sqQbG3UF2OEjVwUQ` |
| Get Current Weather Data Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNqxM4Vk::zUIr1v4VRw-gb0F1kUDPxA` |
| Get Current Weather Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNrJd0cI::5l3LqMp7TZSEqX9tc6y8KQ` |

### AirPollution

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Air Pollution Data | GET | `/data/2.5/air_pollution` | `conn_mod_def::GMYXL4GvU7c::5-P_ElmHSuKbAE_Ef576Sg` |
| Get Current Air Pollution Data | GET | `/data/2.5/air_pollution` | `conn_mod_def::GMYXMHFNWSc::ESCj80R0ToaPUeXEhjNxIQ` |
| Get Current Air Pollution Data | GET | `/data/2.5/air_pollution` | `conn_mod_def::GMYXMJcXrlc::vHQtlzF_SM6phDq7KMi-LA` |

### CurrentWeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Weather Data | GET | `/data/2.5/weather` | `conn_mod_def::GMYXMR5K00s::vIwHgg-BRHOYYnQcCnY5gA` |
| Get Current Weather Data Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNf3Qds4::kdKMfm_kQd2wo7MV5w8PDw` |
| Get Current Weather Data Using One Call API 4.0 | GET | `/data/4.0/onecall/current` | `conn_mod_def::GMYXNoHQvw0::B5Orcj8TSXOCt1SwRhW-hA` |

### AccumulatedTemperatureHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accumulated Temperature History | GET | `/data/2.5/history/accumulated_temperature` | `conn_mod_def::GMYXL3q4E9U::Ch3WChzuRKa6jQ8L82G5kA` |
| Get Accumulated Temperature History | GET | `/data/2.5/history/accumulated_temperature` | `conn_mod_def::GMYXL5fHkrI::3hfdAO_eTz68UasuerTKHA` |

### WeatherBulkFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Weather Bulk Files | GET | `/{{bulkType}}/{{bulkFileName}}` | `conn_mod_def::GMYXMRbQgtU::bSGszxTwTv228sAb__L-Sg` |
| Download Weather Bulk Files | GET | `/{{bulkType}}/{{bulkFileName}}` | `conn_mod_def::GMYXMkoaqpg::1j2uBf1aTLisa1MpeFSDbw` |

### Coordinates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coordinates by Location Name Using Geocoding API | GET | `/geo/1.0/direct` | `conn_mod_def::GMYXM4_4jIc::Dc2GQ8QRShK1ykx5YTfLFQ` |
| Get Coordinates by Location Name Using Geocoding API | GET | `/geo/1.0/direct` | `conn_mod_def::GMYXM7zs7aQ::msSUesMmSMaYFReI69tV5Q` |

### AssistantSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Resume an AI Weather Assistant Session | POST | `/assistant/session/{{sessionId}}` | `conn_mod_def::GMYXNTNcL9o::XtidDx_pQHaYf4rbBcY3Jw` |
| Start an AI Weather Assistant Session | POST | `/assistant/session` | `conn_mod_def::GMYXNT2hkDk::Mh5RyR8oT4qCAZlb4VhclA` |

### SolarPanel

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Solar Panel | GET | `/energy/2.0/panel/{{panelId}}` | `conn_mod_def::GMYXObjsHA0::syaNuBr8QHKs5NAH--ohnA` |
| Delete a Solar Panel | DELETE | `/energy/1.0/panel/{{panelId}}` | `conn_mod_def::GMYXN7AoWMU::HmY66JjyTlu4jg9dM894BQ` |

### Measurements

| Action | Method | Path | Action id |
|---|---|---|---|
| List Aggregated Weather Station Measurements | GET | `/data/3.0/measurements` | `conn_mod_def::GMYXOjotsCg::NDWPPkvpT9qpB0OJo6dL9w` |
| Transfer Weather Station Measurements | POST | `/data/3.0/measurements` | `conn_mod_def::GMYXObGIVSY::baAlc6mGTGmIvSuAmuKwKA` |

### StatisticalWeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Yearly Aggregated Statistical Weather Data | GET | `/data/2.5/aggregated/year` | `conn_mod_def::GMYXOq9u_fc::IpfNhUCYTQCEccmHLY_8Yg` |
| Get Yearly Aggregated Statistical Weather Data | GET | `/data/2.5/aggregated/year` | `conn_mod_def::GMYXOrxw2C0::89rvVvyKRGm4W3uRcix9Zw` |

### WeatherMapTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get 1-Hour Weather Map Tiles | GET | `/maps/2.0/weather/1h/{{op}}/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXOrfdoGk::wt9Jnh9KQjWPJL5Pvs96Aw` |
| Get Weather Map Tiles | GET | `/map/{{layer}}/{{z}}/{{x}}/{{y}}.png` | `conn_mod_def::GMYXOy55Xk4::Bt2SH5vsRtuCEUY_KPrWWg` |

### FireWeatherIndexForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forecast Fire Weather Index Data | GET | `/data/2.5/fwi/forecast` | `conn_mod_def::GMYXMQUJGPk::btN1SGWBTIWkR4d_ChRlYw` |

### FireWeatherIndex

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Fire Weather Index | GET | `/data/2.5/fwi` | `conn_mod_def::GMYXMRDbChM::M6OSTiSVQne5TVurtRrSFw` |

### Geocoding

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Geocoding Using Geocoding API | GET | `/geo/1.0/reverse` | `conn_mod_def::GMYXMslUGfo::h8s8fO19R4aiAwvJrM2H9A` |

### DailyForecastData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Daily Forecast Data | GET | `/data/2.5/forecast/daily` | `conn_mod_def::GMYXMtK_lcs::W7FRWatBQ8m6dnBs8BASsg` |

### WeatherForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get 5 Day / 3 Hour Weather Forecast | GET | `/data/2.5/forecast` | `conn_mod_def::GMYXMt4X-E4::WmZa_-BBRmiFVZ084KOrGg` |

### ClimaticForecast30Days

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a 30-Day Climatic Forecast | GET | `/data/2.5/forecast/climate` | `conn_mod_def::GMYXMuZ4zw4::SX1gbMx0QpOdBPvH6BNl5Q` |

### FireWeatherIndexMap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fire Weather Index Map | GET | `/maps/2.0/fwi/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXMxwx2yY::7x26CuC5QIqUGW-rZIvANA` |

### HistoricalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Call Hourly Historical Data | GET | `/data/2.5/history/city` | `conn_mod_def::GMYXM4x-ymU::20z_WciwQA-fFrMrrPzUaw` |

### GlobalPrecipitationForecastMapTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Precipitation Forecast Map Tiles | GET | `/maps/2.0/radar/forecast/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXM6tuztw::E9EFEDl2QJawBAPqMyHatw` |

### GlobalPrecipitationMapTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Precipitation Map Tiles | GET | `/maps/2.0/radar/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXNLe90H4::Ov12LbGPRtiQuxlRttT24w` |

### DaySummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Day Summary Using One Call API 3.0 | GET | `/data/3.0/onecall/day_summary` | `conn_mod_def::GMYXNT6Kgug::HWx-hswhR1ubG1ccJG9Pbg` |

### CurrentWeatherAndForecastData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Weather and Forecast Data Using One Call API 3.0 | GET | `/data/3.0/onecall` | `conn_mod_def::GMYXNUQ14LY::GiMlah2XRzqJiZqNTH3zhg` |

### HourlyForecastData

| Action | Method | Path | Action id |
|---|---|---|---|
| Call Hourly Forecast Data | GET | `/data/2.5/forecast/hourly` | `conn_mod_def::GMYXNXOJ9MU::ndFKhNcKSqmYKCFMWPd0tg` |

### WeatherOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Overview Using One Call API 3.0 | GET | `/data/3.0/onecall/overview` | `conn_mod_def::GMYXNeyoR7w::QbvndU3lRzC7H326VKB5DQ` |

### OnecallTimemachine

| Action | Method | Path | Action id |
|---|---|---|---|
| Timemachine Using Data 3.0 Onecall | GET | `/data/3.0/onecall/timemachine` | `conn_mod_def::GMYXNg3NWXU::FvQEGjwISkarQqLKt8osuA` |

### WeatherAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Alerts | GET | `/alerts/1.0` | `conn_mod_def::GMYXNp7IZmg::IrxxucRxSo-EmvwJtVOB1w` |

### ReliefMaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Relief Maps | GET | `/maps/2.0/relief/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXNs87OAc::PMX1enSWTpisejt-FBP69A` |

### RoadRisk

| Action | Method | Path | Action id |
|---|---|---|---|
| Road Risk Using Data 2.5 | POST | `/data/2.5/roadrisk` | `conn_mod_def::GMYXNziMwJM::DcYSXpzQQKGl2v5zHYhcZA` |

### SolarIrradianceDailyAggregationWithHourlyDetalization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Solar Irradiance Daily Aggregation with Hourly Detalization | GET | `/energy/1.0/solar/data` | `conn_mod_def::GMYXN0lGiqQ::7JkhRr4YQu2S05CWbhTxUw` |

### SolarIrradiance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Solar Irradiance Daily Aggregation with Interval Detail | GET | `/energy/1.0/solar/interval_data` | `conn_mod_def::GMYXN001N6U::jvyG861CQC2Mal1fvAPl4Q` |

### SolarIrradianceIntervalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Solar Irradiance Interval Data | GET | `/energy/2.0/solar/interval_data` | `conn_mod_def::GMYXN09LfoM::DSqA_GwDT7SqD2ABSI1hzQ` |

### LocationData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Location Data Using Solar Panel Energy Prediction v1 | GET | `/energy/1.0/location/{{locationId}}/data` | `conn_mod_def::GMYXN8GJQFk::clLNyw5uQFSoURwWfutbfg` |

### Location

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Location Using Solar Panel Energy Prediction v1 | DELETE | `/energy/1.0/location/{{locationId}}` | `conn_mod_def::GMYXN8brqeQ::SZ1ij4nmSSSJx9rc_MtVwA` |

### LocationIntervalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Interval Data for a Location | GET | `/energy/1.0/location/{{locationId}}/interval_data` | `conn_mod_def::GMYXOEiH95Y::C74_NHJKReq-CIw6en1J3A` |

### SolarPanelEnergyPredictionLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Solar Panel Energy Prediction Location | DELETE | `/energy/2.0/location/{{locationId}}` | `conn_mod_def::GMYXOLeqMys::ozcWL8nQTaKVi9V8HRTgTA` |

### SolarEnergyIntervalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Interval Data for a Solar Energy Location | GET | `/energy/2.0/location/{{locationId}}/interval_data` | `conn_mod_def::GMYXOUIRUVk::xNUkjJC2QMO7Tva4FSqrvA` |

### YearlyAggregatedStatisticalWeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Yearly Aggregated Statistical Weather Data | GET | `/data/2.5/aggregated/year` | `conn_mod_def::GMYXOrj1kQA::TAAV_5hXSuyN_pyC-kfhIg` |

### UsPrecipitationForecastMapTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the US Precipitation Forecast Map Tile | GET | `/maps/2.0/radar/us/forecast/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXOr4k79Y::bu5vxPlpQ2aXMhtoU8PoVQ` |

### WeatherMaps20Tiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Maps 2.0 Tiles | GET | `/maps/2.0/weather/{{op}}/{{z}}/{{x}}/{{y}}` | `conn_mod_def::GMYXO0gq0jQ::v4D2uI7OSfCUGMGrVV0Icg` |

### TestConnection

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Connection | GET | `/data/2.5/weather?lat=51.5&lon=-0.1` | `conn_mod_def::GMYXp-11uNo::lXhhWTUyRsSBR3Q_7-SAHA` |

## When a call fails

The error comes from OpenWeather, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/open-weather

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
