---
name: quick-chart
description: QuickChart is a web service that generates chart images using Chart.js. Ideal for emails, reports, or static sites, it supports various chart types, QR codes, and more. Charts are created via simple URLs or API requests, making it easy to visualize data on the fly. Read and write QuickChart data through One: charts, qrcodes and more, 4 actions with real parameter documentation. Use whenever the user asks to look something up in QuickChart, create or update a record there, or build code against the QuickChart API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: quick-chart
  generated-from: one-knowledge-base
---

# QuickChart through One

QuickChart is a web service that generates chart images using Chart.js. Ideal for emails, reports, or static sites, it supports various chart types, QR codes, and more. Charts are created via simple URLs or API requests, making it easy to visualize data on the fly.

One exposes QuickChart through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `quick-chart` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm QuickChart is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real QuickChart account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Charts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Simple Chart | GET | `/chart` | `conn_mod_def::GJ6NcoGigc0::CRBDPh1wT5y9gufCDmjvFw` |
| Create a Chart Short URL | POST | `/chart/create` | `conn_mod_def::GJ6NcnxtAQE::vCZQSx4_QmmDUZ7JdHfIOQ` |
| Create a Simple Chart | POST | `/chart` | `conn_mod_def::GJ6NcsUtd6w::zgocr1pyTpqYLYiyH0NUDw` |

### QrCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a QR Code | GET | `/qr` | `conn_mod_def::GJ6NcotIV04::ZgYjspf4SPOgco5vzmBEPA` |

## When a call fails

The error comes from QuickChart, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/quick-chart

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
