---
name: fixer
description: Fixer is a currency exchange rates and foreign exchange data API that provides real-time and historical rates for 170+ world currencies, allowing developers and finance teams to power conversion, reporting, and international pricing workflows in applications. Read and write Fixer data through One: historicalrates, latestrates, timeseriesrates, currencyconversion, supportedsymbols, fluctuation and more, 6 actions with real parameter documentation. Use whenever the user asks to look something up in Fixer, create or update a record there, or build code against the Fixer API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fixer
  generated-from: one-knowledge-base
---

# Fixer through One

Fixer is a currency exchange rates and foreign exchange data API that provides real-time and historical rates for 170+ world currencies, allowing developers and finance teams to power conversion, reporting, and international pricing workflows in applications.

One exposes Fixer through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "fixer", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Fixer is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Fixer account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### HistoricalRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Rates | GET | `/api/{{date}}` | `conn_mod_def::GMIjUlo2GAg::JAzdL0wiTNuZQqx_KrNG4w` |

### LatestRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Latest Rates | GET | `/api/latest` | `conn_mod_def::GMIjUmNLsLs::0QIMZ-lMTaikX_nbqvNvyg` |

### TimeSeriesRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Time Series Rates | GET | `/api/timeseries` | `conn_mod_def::GMIjUxISixY::UEjnrnerQV-jmAa7NO5cAg` |

### CurrencyConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Currency | GET | `/api/convert` | `conn_mod_def::GMIjUmjelB0::F5o0iXF1RrC6PU8TSbO6bQ` |

### SupportedSymbols

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Supported Symbols | GET | `/api/symbols` | `conn_mod_def::GMIjUmIChRU::BN-G_YDWQTmpWHbHM1gs3g` |

### Fluctuation

| Action | Method | Path | Action id |
|---|---|---|---|
| Fluctuation Using Fixer | GET | `/api/fluctuation` | `conn_mod_def::GMIjUmLOiJY::tXQHS2AnQVG8PEJrdBN1wg` |

## When a call fails

The error comes from Fixer, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fixer

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
