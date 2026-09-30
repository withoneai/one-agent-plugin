---
name: currency-beacon
description: CurrencyBeacon is a developer-focused currency exchange rate API that provides REST endpoints for latest, conversion, historical, timeseries, and currency data, with SDK-ready JSON, code samples, and an optional MCP server for AI clients to access the same exchange-rate workflows. Read and write CurrencyBeacon data through One: timeseriesdata, historicalrates, currencies, exchangerates, currencyconversion and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in CurrencyBeacon, create or update a record there, or build code against the CurrencyBeacon API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: currency-beacon
  generated-from: one-knowledge-base
---

# CurrencyBeacon through One

CurrencyBeacon is a developer-focused currency exchange rate API that provides REST endpoints for latest, conversion, historical, timeseries, and currency data, with SDK-ready JSON, code samples, and an optional MCP server for AI clients to access the same exchange-rate workflows.

One exposes CurrencyBeacon through three MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can go straight to reading the action's documentation.

## How to run an action

1. Find the action in the table below and read its documentation by calling `find_one_actions` with `load: [{ action_id: "<id>" }]`. If it is not listed, call `find_one_actions` with `requests: [{ platform: "currency-beacon", intent: "<the operation, in a few words>" }]` instead: it returns the best action with its documentation.
2. Read that documentation every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that documentation.

Never guess a parameter name, a body field, or an enum value. The documentation has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CurrencyBeacon is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CurrencyBeacon account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TimeSeriesData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time-Series Data | GET | `/v1/timeseries` | `conn_mod_def::GMjQy4XgQpg::m5xCw3dPTKKWNfO03tARxg` |

### HistoricalRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Historical Rates | GET | `/v1/historical` | `conn_mod_def::GMjQy4fghzg::_ogoVJ76RiqK89L78uDFHA` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Currencies | GET | `/v1/currencies` | `conn_mod_def::GMjQy4xvSqA::BlzI-oeaQPSw-02qmEpyHw` |

### ExchangeRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Exchange Rates | GET | `/v1/latest` | `conn_mod_def::GMjQy4_NlLg::lYTl6Nw9TEeP9-13vhKekA` |

### CurrencyConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Currency | GET | `/v1/convert` | `conn_mod_def::GMjQy7dfdrg::hCdQTVvQQCaaQyr8JsU45A` |

## When a call fails

The error comes from CurrencyBeacon, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the action's documentation and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/currency-beacon

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
