---
name: method-crm
description: Method CRM is a customizable CRM for QuickBooks and Xero users that provides customer, sales, invoicing, and workflow automation tools, allowing growing businesses to manage lead-to-cash processes, sync accounting data, and connect with other business apps. Read and write Method CRM data through One: tables, files, signedinuserprofile and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in Method CRM, create or update a record there, or build code against the Method CRM API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: method-crm
  generated-from: one-knowledge-base
---

# Method CRM through One

Method CRM is a customizable CRM for QuickBooks and Xero users that provides customer, sales, invoicing, and workflow automation tools, allowing growing businesses to manage lead-to-cash processes, sync accounting data, and connect with other business apps.

One exposes Method CRM through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `method-crm` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Method CRM is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Method CRM account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Record from a Table | GET | `/api/v1/tables/{{table}}/{{recordId}}` | `conn_mod_def::GMiKjm1O6QU::gUCkJeeeRp2seQDXKIddgg` |
| Get a Table's Record Count | GET | `/api/v1/tables/{{table}}/count` | `conn_mod_def::GMiKjw0f8ZQ::52LX9dmZR2ujxUgPgvfRdg` |
| Query Records from a Table | GET | `/api/v1/tables/{{table}}` | `conn_mod_def::GMiKjxjnl1Q::15Hc-iYYTYyKPEdSAcOpZQ` |
| Create a Record in a Table | POST | `/api/v1/tables/{{table}}` | `conn_mod_def::GMiKjogR6MU::hJ3OcC71Q62eDIRsCxqJgA` |
| Delete a Record from a Table | DELETE | `/api/v1/tables/{{table}}/{{recordId}}` | `conn_mod_def::GMiKjniWOjc::GH6byk9kQxqxlZXfeHT6pQ` |
| Sync a Record in a Table | POST | `/api/v1/tables/{{table}}/{{recordId}}/Sync` | `conn_mod_def::GMiKj1biVR0::C_vyGVrBRD6O0ENi146puA` |
| Update a Table Record | PATCH | `/api/v1/tables/{{table}}/{{recordId}}` | `conn_mod_def::GMiKjx0v7vo::TzTqZ_fHSiKqV1oRoZtLtg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download File | GET | `/api/v1/files/{{id}}/download` | `conn_mod_def::GMiKjeLxx_U::tS0qe9GgSGaBlLO6rMuoAQ` |
| Get File URL | GET | `/api/v1/files/{{id}}/url` | `conn_mod_def::GMiKjeMQG2E::nQ5GUr3eRZieZeq-4WoNcQ` |
| List Files for a Table Record | GET | `/api/v1/files` | `conn_mod_def::GMiKjfINzrM::iJIoe0AbSUa4gIJaxWtClg` |
| Delete a File | DELETE | `/api/v1/files/{{id}}` | `conn_mod_def::GMiKjeMtX38::w4goL_5PRjSH5_uh1S57Aw` |
| Update File Link Details | PUT | `/api/v1/files/{{id}}/link` | `conn_mod_def::GMiKjeUTQMo::i44zCR7yRCWr5I6mbWWvzQ` |
| Upload File Using Method API | POST | `/api/v1/files` | `conn_mod_def::GMiKjo1K_Hc::sp2J3XIBRqi7e7RaVccvxQ` |

### SignedInUserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Profile | GET | `/api/v1/me` | `conn_mod_def::GMiKjm7qGV0::oil-54DDSN-pCVDQcgGTWA` |

## When a call fails

The error comes from Method CRM, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/method-crm

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
