---
name: baserow-database
description: Baserow is an open-source no-code database platform that provides spreadsheet-style data management, relational tables, and APIs, allowing teams and developers to build internal tools, manage structured data, and automate workflows without relying on traditional database administration. Read and write Baserow Database data through One: tablerows, databaserows, databasetablerows, userfiles, databasefields, databasefieldpasswordauthentication and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in Baserow Database, create or update a record there, or build code against the Baserow Database API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: baserow-database
  generated-from: one-knowledge-base
---

# Baserow Database through One

Baserow is an open-source no-code database platform that provides spreadsheet-style data management, relational tables, and APIs, allowing teams and developers to build internal tools, manage structured data, and automate workflows without relying on traditional database administration.

One exposes Baserow Database through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `baserow-database` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Baserow Database is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Baserow Database account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### TableRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Table Row | GET | `/api/database/rows/table/{{tableId}}/{{rowId}}/` | `conn_mod_def::GLpowtM3Rn8::Q_x4AmF3SCSmlRzECW0ykw` |
| Batch Delete Table Rows | POST | `/api/database/rows/table/{{tableId}}/batch-delete/` | `conn_mod_def::GLpowjt2ABM::KQllOT1cQIW0h_EJjWLyjg` |
| Move a Table Row | PATCH | `/api/database/rows/table/{{tableId}}/{{rowId}}/move/` | `conn_mod_def::GLpow2DEPJA::dc6hb1DRRz6JmP7P0Eox6w` |

### DatabaseRows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rows in a Database Table | GET | `/api/database/rows/table/{{tableId}}/` | `conn_mod_def::GLpow00yNd8::jpHMyfWCRsqH3NZqeEFTSg` |
| Batch Update Rows in a Database Table | PATCH | `/api/database/rows/table/{{tableId}}/batch/` | `conn_mod_def::GLpowsK4jBM::QeHCTdfgRIuCImbdjXAdlw` |
| Create a Row in a Database Table | POST | `/api/database/rows/table/{{tableId}}/` | `conn_mod_def::GLpowtJKk9U::RxXjKNkIThyi_kGu3VEhvQ` |

### DatabaseTableRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Database Table Row | DELETE | `/api/database/rows/table/{{tableId}}/{{rowId}}/` | `conn_mod_def::GLpowr_zfCs::Ek2y76tKTHOUnaxiifMmtw` |
| Update a Database Table Row | PATCH | `/api/database/rows/table/{{tableId}}/{{rowId}}/` | `conn_mod_def::GLpow0y_XPI::8ZXB0BotQpWX0dFkZ75oNg` |

### UserFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload File | POST | `/api/user-files/upload-file/` | `conn_mod_def::GLpoxJZQkQE::HW_ijvgvTz2T6NO4aO_gqg` |
| Upload Via URL | POST | `/api/user-files/upload-via-url/` | `conn_mod_def::GLpoxKe15X8::s-PinuTCTGq_l0vtu2PswQ` |

### DatabaseFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Table's Database Fields | GET | `/api/database/fields/table/{{tableId}}/` | `conn_mod_def::GLpowi8Jjmg::tl3wD3XSTROA1igpd-OrkQ` |

### DatabaseFieldPasswordAuthentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Password Authentication for a Database Field | POST | `/api/database/fields/password-authentication/` | `conn_mod_def::GLpowjESKdE::h4qmzJFcRyO48BmkfFT1Ew` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Field for a Table | POST | `/api/database/fields/table/{{tableId}}/` | `conn_mod_def::GLpowjRzUjo::kCW-1j-XQ86K-CN2OT1Ijw` |

### Rows

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Create Rows in a Table | POST | `/api/database/rows/table/{{tableId}}/batch/` | `conn_mod_def::GLpowk7D05w::UVyHq8cLRheQanXRXYx1Qg` |

### DatabaseTableRowNames

| Action | Method | Path | Action id |
|---|---|---|---|
| List Database Table Row Names | GET | `/api/database/rows/names/` | `conn_mod_def::GLpowse4g14::ksfKE1uLSfmt3uNR6uhicw` |

### DatabaseTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Database Token | GET | `/api/database/tokens/check/` | `conn_mod_def::GLpowz_IH-c::0Y1GGWZHRTaUSU64yuBzag` |

### TokenTables

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Token Tables | GET | `/api/database/tables/all-tables/` | `conn_mod_def::GLpoxDVgBag::H6EUJcU3QHmxDDygwYPDKw` |

## When a call fails

The error comes from Baserow Database, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/baserow-database

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
