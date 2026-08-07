---
name: solcast
description: Solcast is a weather and solar forecasting platform that provides APIs for irradiance, rooftop PV output, and historical solar data, allowing energy, utility, and software teams to model generation, optimize operations, and support solar asset planning and monitoring. Read and write Solcast data through One: windpowersite, pvpowersite, windpowersitemeasurements, forecasts, estimatedactuals, manageschedules and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Solcast, create or update a record there, or build code against the Solcast API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: solcast
  generated-from: one-knowledge-base
---

# Solcast through One

Solcast is a weather and solar forecasting platform that provides APIs for irradiance, rooftop PV output, and historical solar data, allowing energy, utility, and software teams to model generation, optimize operations, and support solar asset planning and monitoring.

One exposes Solcast through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `solcast` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Solcast is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Solcast account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WindPowerSite

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Wind Power Site | GET | `/resources/wind_power_site` | `conn_mod_def::GMP8nuBlRSI::TQOwCYw2Qf2_hgupZHGjfA` |
| Create a Wind Power Site | POST | `/resources/wind_power_site` | `conn_mod_def::GMP8nZfg0co::kYBtC7-CRnab6iGh0ClHAQ` |
| Delete a Wind Power Site | DELETE | `/resources/wind_power_site` | `conn_mod_def::GMP8njl1HJU::3ikFrPY9TFCWhmLe31_LfQ` |
| Patch a Wind Power Site | PATCH | `/resources/wind_power_site` | `conn_mod_def::GMP8n6rRAUA::4ypDXUDxREqiklsyPOpzjA` |
| Update a Wind Power Site | PUT | `/resources/wind_power_site` | `conn_mod_def::GMP8oCQ9HA0::9EdrqrvnSe2bt7Cr8nWOTQ` |

### PvPowerSite

| Action | Method | Path | Action id |
|---|---|---|---|
| Get PV Power Site | GET | `/resources/pv_power_site` | `conn_mod_def::GMP8ntng_YI::WdeYSAarQ1O51sNMwM9H9w` |
| Create PV Power Site Using Resources | POST | `/resources/pv_power_site` | `conn_mod_def::GMP8nXbvSFI::B5CFK_CWTvSO-3ZuhTk6mg` |
| Delete PV Power Site | DELETE | `/resources/pv_power_site` | `conn_mod_def::GMP8nlgweOU::KfG3o36VRL2W3YLWF6gyjg` |
| Patch PV Power Site | PATCH | `/resources/pv_power_site` | `conn_mod_def::GMP8n5rdJ1U::geQQ278ORMWvD00rEo2f2Q` |
| Update PV Power Site | PUT | `/resources/pv_power_site` | `conn_mod_def::GMP8oFF0kD0::DOh6soSXR_y1T4NYQmGXTw` |

### WindPowerSiteMeasurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Wind Power Site Measurements | GET | `/resources/wind_power_site_measurements` | `conn_mod_def::GMP8nurLxhE::zCZiJycJQ3y7UWb1dQ_Wxw` |
| Submit Wind Power Site Measurements | POST | `/resources/wind_power_site_measurements` | `conn_mod_def::GMP8n9n0Lp4::qjVxLr15SpC8hFUR8i_J7A` |

### Forecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forecasts for a Rooftop Site | GET | `/rooftop_sites/{{rooftopResourceId}}/forecasts` | `conn_mod_def::GMP8nNkQ3LQ::dC_veMNMR3SrXOIPPMEkUQ` |
| Get Forecasts for a Weather Site | GET | `/weather_sites/{{weatherResourceId}}/forecasts` | `conn_mod_def::GMP8naBbYSs::YrYlQmp_SACRr2RWOnAVOQ` |

### EstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Estimated Actuals for a Utility Scale Site | GET | `/utility_scale_sites/{{utilityResourceId}}/estimated_actuals` | `conn_mod_def::GMP8nPEZ2RQ::_jb6Pfv8QPWt8UPMNaehUw` |
| Get Kimber Soiling Losses Live Estimated Actuals Using Data Live Soiling Kimber | GET | `/data/live/soiling/kimber` | `conn_mod_def::GMP8oXkLxQM::FzkqeLGbQqa0p33_r-WHoQ` |

### ManageSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Manage Schedules | DELETE | `/manage/schedules` | `conn_mod_def::GMP8naW2t9g::RkD060N2RdG7KcHsXSBSXA` |
| Update Manage Schedule | PATCH | `/manage/schedules` | `conn_mod_def::GMP8oFHTqNs::UDF9Y0OKRGuQCeg3KXukIA` |

### PvPowerSiteMeasurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get PV Power Site Measurements | GET | `/resources/pv_power_site_measurements` | `conn_mod_def::GMP8nxvSK_I::A50_3vB-TO6MWQwCVVf2vw` |
| Submit PV Power Site Measurements | POST | `/resources/pv_power_site_measurements` | `conn_mod_def::GMP8n6XU-Xw::SI8xOSG2TIiNgU_IZsfTtQ` |

### LiveAdvancedPvPowerEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Advanced PV Power Estimated Actuals | GET | `/data/live/advanced_pv_power` | `conn_mod_def::GMP8l9l4mbA::TDPrkzuSS2K8QWsbsDdn8Q` |

### LiveRadiationAndWeatherEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Radiation and Weather Estimated Actuals | GET | `/data/live/radiation_and_weather` | `conn_mod_def::GMP8mG0t3Ck::PGtgArhoSiKIto21-4YscQ` |

### IrradianceAndWeatherForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Irradiance and Weather Forecast | GET | `/data/forecast/radiation_and_weather` | `conn_mod_def::GMP8mHNLjBY::pezwH7xIRA6om7atyWXDDg` |

### LiveAggregations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Aggregations | GET | `/data/live/aggregations` | `conn_mod_def::GMP8mKhaNbQ::gUpxWfhvRWWMCC_-v1SjGg` |

### ForecastAggregations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forecast Aggregations | GET | `/data/forecast/aggregations` | `conn_mod_def::GMP8mK-5x8M::DoTdvKupR1-P5z_Q0VbwRQ` |

### RadiationAndWeatherHistoricData

| Action | Method | Path | Action id |
|---|---|---|---|
| Radiation and Weather Historic Data | GET | `/data/historic/radiation_and_weather` | `conn_mod_def::GMP8mMonwgE::pgI49nKZS8eQZCFYC-kuIg` |

### UtilityScaleSiteMeasurements

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Measurements for a Utility Scale Site | POST | `/utility_scale_sites/{{utilityResourceId}}/measurements` | `conn_mod_def::GMP8mUezksc::aWfi8DsmTmOxhRda6BoueQ` |

### RooftopPvPowerForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rooftop PV Power Forecast | GET | `/data/forecast/rooftop_pv_power` | `conn_mod_def::GMP8n-46XKI::0IymSt1wTyWa5aiuQeu7UA` |

### HistoricRooftopPvPower

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historic Rooftop PV Power Data | GET | `/data/historic/rooftop_pv_power` | `conn_mod_def::GMP8n_P82Hc::dsS4xVnbQLa0s_Ku-McE9g` |

### HorizonAngles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Horizon Angles | GET | `/data/geographic/horizon_angle` | `conn_mod_def::GMP8lwCMZt0::rCCy9t5wRGqtxkhxs6kGmg` |

### AdvancedPvPowerForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced PV Power Forecast | GET | `/data/forecast/advanced_pv_power` | `conn_mod_def::GMP8lx5Nrbw::ZTCSps3aQMizOhRAYw7UzA` |

### AdvancedPvPowerTmy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced PV Power TMY | GET | `/data/tmy/advanced_pv_power` | `conn_mod_def::GMP8l0OUtNY::ufdn0tSDQw-CLVCbqM3Aog` |

### HistoricAdvancedPvPower

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historic Advanced PV Power Data | GET | `/data/historic/advanced_pv_power` | `conn_mod_def::GMP8l2v7bAQ::Yaf-d7-8RfudBTlu-YqjOA` |

### RooftopEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rooftop Estimated Actuals for a Rooftop Site | GET | `/rooftop_sites/{{rooftopResourceId}}/estimated_actuals` | `conn_mod_def::GMP8mVSwEg4::8YzCAEQUQcS9V_w6sY4_ww` |

### PvPowerEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get PV Power Estimated Actuals | GET | `/world_pv_power/estimated_actuals` | `conn_mod_def::GMP8mWN1ATY::SWbZs36ISNOCWr_24rBuHQ` |

### IrradianceAndWeatherTmy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Irradiance and Weather TMY | GET | `/data/tmy/radiation_and_weather` | `conn_mod_def::GMP8mYCATPs::5N3Qc8SjQTeuECMZ8n2OCg` |

### WorldPvPowerForecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get World PV Power Forecasts | GET | `/world_pv_power/forecasts` | `conn_mod_def::GMP8nEBEVRg::Rg2-l1N7QJOLoEm9HrVlRA` |

### UtilityScaleSiteForecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forecasts for a Utility Scale Site | GET | `/utility_scale_sites/{{utilityResourceId}}/forecasts` | `conn_mod_def::GMP8nNjgcNQ::4z59EWmjRIyMr_Bwz325gw` |

### EstimatedActualSolarRadiation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Estimated Actual Solar Radiation | GET | `/world_radiation/estimated_actuals` | `conn_mod_def::GMP8nN-PoU8::6lb06U3UR9KPMFQgc5y83A` |

### WorldRadiationForecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forecasts Using World Radiation | GET | `/world_radiation/forecasts` | `conn_mod_def::GMP8nOxkLkk::qY8wtXfYSxmo4Pi3O5FyFg` |

### WeatherSiteEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Estimated Actuals for a Weather Site | GET | `/weather_sites/{{weatherResourceId}}/estimated_actuals` | `conn_mod_def::GMP8nYd1EU0::nCGz_TinT0GLkXpw_nnL6Q` |

### ManageSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Manage Schedule | GET | `/manage/schedules` | `conn_mod_def::GMP8njlUH8U::yX-0QilvRUOtR57HUU71vw` |

### PremiumWindPowerForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Premium Wind Power Forecast | GET | `/data/forecast/premium_wind_power` | `conn_mod_def::GMP8nkk4LB0::YqmoOZDaR_iZvtFn1SmI3A` |

### PremiumPvPowerForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Premium PV Power Forecast | GET | `/data/forecast/premium_pv_power` | `conn_mod_def::GMP8nlBEowg::fVq44wheQ1Cmw72mV3y1GA` |

### PvPowerSites

| Action | Method | Path | Action id |
|---|---|---|---|
| List PV Power Sites | GET | `/resources/pv_power_sites` | `conn_mod_def::GMP8nw3BUnM::0n-RF8IjT3KnAWvDfZBeuA` |

### WindPowerSites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Wind Power Sites | GET | `/resources/wind_power_sites` | `conn_mod_def::GMP8n5TbZnc::RSKZabBVT96iauDh4VZ5JQ` |

### RooftopPvPowerLiveEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rooftop PV Power Live Estimated Actuals | GET | `/data/live/rooftop_pv_power` | `conn_mod_def::GMP8oJfUXeA::zOqIcgVHTPWNDT9kGh4eYw` |

### HsuSoilingLossesForecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HSU Soiling Losses Forecast Using Data Forecast Soiling | GET | `/data/forecast/soiling/hsu` | `conn_mod_def::GMP8oLXqbB4::i_KmxoIxTZOWk69nyu-OQg` |

### HistoricHsuSoilingLosses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historic HSU Soiling Losses | GET | `/data/historic/soiling/hsu` | `conn_mod_def::GMP8oLug2ZI::UvWphnptRzWR8Z7wn0NPug` |

### RooftopPvPowerTmy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rooftop PV Power TMY | GET | `/data/tmy/rooftop_pv_power` | `conn_mod_def::GMP8oL4sxfo::ix2uJbKOQWqKFuGeiOs0vw` |

### HsuSoilingLossesLiveEstimatedActuals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HSU Soiling Losses Live Estimated Actuals Using Data Live Soiling | GET | `/data/live/soiling/hsu` | `conn_mod_def::GMP8oNC8QXA::_JGWAXJ5R9mXU5EV_AKEJw` |

### MonthlyAverages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Monthly Averages | GET | `/monthly_averages` | `conn_mod_def::GMP8oUsmme0::QbvQcoOyQsiqk1U9GtP2Qg` |

### TmyHourlyP50

| Action | Method | Path | Action id |
|---|---|---|---|
| Get TMY Hourly P50 | GET | `/tmy_hourly` | `conn_mod_def::GMP8oVhS8Wc::jwTL-2qtTo6av_IlwHNayQ` |

### KimberSoilingLossesForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Kimber Soiling Losses Forecast | GET | `/data/forecast/soiling/kimber` | `conn_mod_def::GMP8oWk_KJE::70g_Z7Z3SLyPg64_PVw07g` |

### KimberSoilingLossesHistoric

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historic Kimber Soiling Losses | GET | `/data/historic/soiling/kimber` | `conn_mod_def::GMP8oXZgEqI::DN75e86ARhCyaKsTjUD6Bw` |

## When a call fails

The error comes from Solcast, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/solcast

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
