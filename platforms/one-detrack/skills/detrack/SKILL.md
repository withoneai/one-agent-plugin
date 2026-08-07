---
name: detrack
description: Detrack is a delivery management platform that provides route planning, real-time driver tracking, electronic proof of delivery, and customer notifications, allowing logistics teams and businesses to automate last-mile operations and integrate delivery workflows with eCommerce, ERP, and order systems. Read and write Detrack data through One: deliverynotejobs, dnjobs, depots, jobs, routes, depotlocations and more, 27 actions with real parameter documentation. Use whenever the user asks to look something up in Detrack, create or update a record there, or build code against the Detrack API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: detrack
  generated-from: one-knowledge-base
---

# Detrack through One

Detrack is a delivery management platform that provides route planning, real-time driver tracking, electronic proof of delivery, and customer notifications, allowing logistics teams and businesses to automate last-mile operations and integrate delivery workflows with eCommerce, ERP, and order systems.

One exposes Detrack through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `detrack` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Detrack is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Detrack account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DeliveryNoteJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Delivery Note Job Document by DO Number | GET | `/api/v2/dn/jobs/export/{{doNumber}}` | `conn_mod_def::GMT4dlaQQqQ::rubiOtrNSWamFDCuAZjzXA` |
| Get a Delivery Note Job | GET | `/api/v2/dn/jobs/{{doNumber}}` | `conn_mod_def::GMT4dnkpS8I::OKmQwon1SI-ZjMxcmFl2Kw` |
| Get a Delivery Note Job by DO Number and Date | GET | `/api/v2/dn/jobs/{{doNumber}}/{{date}}` | `conn_mod_def::GMT4d0FOsOY::S0Bdqux3Teeqky6k6i9g6w` |
| List Delivery Note Jobs | GET | `/api/v2/dn/jobs` | `conn_mod_def::GMT4dQVDbDQ::BcJ8iphUTPGkhqPrWXnIfw` |
| Show a Delivery Note Job | GET | `/api/v2/dn/jobs/show` | `conn_mod_def::GMT4ehu7uz4::_xfzcu10QfOPPxgztHOeZw` |
| Bulk Export Delivery Note Jobs | POST | `/api/v2/dn/jobs/bulk/export` | `conn_mod_def::GMT4elJEvOI::ZOT41Y0XQxebStu14xYNVQ` |
| Search Delivery Note Jobs | POST | `/api/v2/dn/jobs/search` | `conn_mod_def::GMT4fGvWBMk::CvSY2-6jSDmFl9qOha_wvw` |
| Update a Delivery Note Job | PUT | `/api/v2/dn/jobs/{{doNumber}}` | `conn_mod_def::GMT4fHg5FaU::kwBDK3IMTiuikVbqVgaxzw` |

### DnJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Status for a DN Job | GET | `/api/v2/dn/jobs/export/status/{{id}}` | `conn_mod_def::GMT4eJx7kuI::2zOzMch8T-Wk_apIS69n1w` |
| Bulk Create DN Jobs | POST | `/api/v2/dn/jobs/bulk` | `conn_mod_def::GMT4elJrOyw::3DNsPVAGT-SCKlyg9MOjiA` |
| Delete a Job Using Detrack Dn Jobs | DELETE | `/api/v2/dn/jobs/delete` | `conn_mod_def::GMT4dTw47Mo::gb07sLn-R22PggwNQ9vMpw` |
| Reattempt DN Jobs | POST | `/api/v2/dn/jobs/reattempt` | `conn_mod_def::GMT4eo9hzgE::1quIE7LCRyKiUNiulC-Ceg` |
| Update a DN Job by DO Number and Date | PUT | `/api/v2/dn/jobs/{{doNumber}}/{{date}}` | `conn_mod_def::GMT4fIorjls::jxgK9G9QQmCD0Z9ELOCPSQ` |
| Update DN Jobs | PUT | `/api/v2/dn/jobs` | `conn_mod_def::GMT4e9VHzO8::3eh30ppnTBijErkV7oy2Bg` |
| Update DN Jobs | PUT | `/api/v2/dn/jobs/update` | `conn_mod_def::GMT4fHfG9Jg::vOCKbJL2SiGEKQ0oBxpNsw` |

### Depots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Depots | GET | `/api/v2/dn/depots` | `conn_mod_def::GMT4dJy50C8::z4HsZI2tQNqWaKJLUgmMxA` |
| Create a Depot | POST | `/api/v2/dn/depots` | `conn_mod_def::GMT4dEhYFfw::xX-Qwp5BRZq6aZFFz-NPUA` |
| Delete Depots | DELETE | `/api/v2/dn/depots` | `conn_mod_def::GMT4dFU-qEg::6fUx-2_ZTt2ykW6FPKvJpQ` |
| Update Depots | PUT | `/api/v2/dn/depots` | `conn_mod_def::GMT4dEo9xp0::YlgyNMcFQt2YFNIyED7bhA` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Jobs Using Dn | POST | `/api/v2/dn/jobs` | `conn_mod_def::GMT4ewzBiVY::NX3b5_H8RMOvuzyRWWV6hw` |
| Delete a Job by DO Number | DELETE | `/api/v2/dn/jobs/{{doNumber}}` | `conn_mod_def::GMT4dSJzWbo::c8dyuBrgQSakNSNWbYqQiw` |
| Delete Jobs Using Dn | DELETE | `/api/v2/dn/jobs` | `conn_mod_def::GMT4dSNB5N8::0yjF08ynSLmB66gEQEjtWA` |

### Routes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Routes | GET | `/api/v2/dn/routes` | `conn_mod_def::GMT4fYH-080::EQrYQai0TUa7RPiuCLzH0g` |
| Plan Routes | POST | `/api/v2/dn/routes/plan` | `conn_mod_def::GMT4fgixNpY::Et0QfG0jSAKSou9nRb8qBA` |

### DepotLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Create Depot Locations | POST | `/api/v2/dn/depots/bulk` | `conn_mod_def::GMT4dFmuZMg::vCT2TAkuTcO5RZCZd8gOHg` |

### DetrackJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Detrack Job by DO Number and Date | DELETE | `/api/v2/dn/jobs/{{doNumber}}/{{date}}` | `conn_mod_def::GMT4dTTwyhc::nvlg59IFQZS95dkLOjbg-Q` |

### DeliveryNoteJobDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Delivery Note Job Document | GET | `/api/v2/dn/jobs/export/{{doNumber}}/{{date}}` | `conn_mod_def::GMT4dntUBCU::dHk43za2RDKIB_qUGFYDFg` |

## When a call fails

The error comes from Detrack, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/detrack

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
