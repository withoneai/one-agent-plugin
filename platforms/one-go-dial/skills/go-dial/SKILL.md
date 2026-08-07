---
name: go-dial
description: Go Dial is an all-in-one mobile CRM and auto-dialer platform enabling businesses to import contacts, manage pipelines, automate outbound calls, record interactions and track team performance from a smartphone. Read and write Go Dial data through One: lists, contacts, accounts, teams, tasks, externaltasks and more, 31 actions with real parameter documentation. Use whenever the user asks to look something up in Go Dial, create or update a record there, or build code against the Go Dial API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: go-dial
  generated-from: one-knowledge-base
---

# Go Dial through One

Go Dial is an all-in-one mobile CRM and auto-dialer platform enabling businesses to import contacts, manage pipelines, automate outbound calls, record interactions and track team performance from a smartphone.

One exposes Go Dial through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `go-dial` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Go Dial is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Go Dial account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Lists | GET | `/meta/api/externals/lists/list` | `conn_mod_def::GJ3p72OLbv0::5DyKiIP2RF-b1PF4kgFOyg` |
| View a List | GET | `/meta/api/externals/lists/{{id}}/view` | `conn_mod_def::GJ3p8NMxC0w::7VZ0s55ZTy--f0ukR0yKAA` |
| Add a List to a Company | POST | `/meta/api/externals/lists/add` | `conn_mod_def::GJ3p7WKzjh8::GxVWG5WnQEWENUFaLGhc1Q` |
| Detach a List from an Account | DELETE | `/meta/api/externals/lists/detach` | `conn_mod_def::GJ3p7vKzVNM::09XTJ18rQeOJKAoQNGMNCQ` |
| Remove a Company's List | DELETE | `/meta/api/externals/lists/{{id}}/remove` | `conn_mod_def::GJ3p79aN_ts::mE6l0sLUQhinfdYme-DTMg` |
| Update a Company's List | PUT | `/meta/api/externals/lists/{{id}}/update` | `conn_mod_def::GJ3p8F6c3Iw::hCTHbMeIRF2-_49CDLNOSQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts in a List | GET | `/meta/api/externals/contact/list/{{listId}}` | `conn_mod_def::GJ3p61vynkc::WaT374A4SxK0BiBLACIeTw` |
| Add a Contact to a List | POST | `/meta/api/externals/contact/add` | `conn_mod_def::GJ3p6VrLz-I::RtgkNMWyQhG_XPcWzMZ2lQ` |
| Change a Contact’s List | POST | `/meta/api/externals/contact/listchange` | `conn_mod_def::GJ3p6dOWB7E::ix6LWZepTMyfvMc7amw9bQ` |
| Delete a Contact by Phone Number (External) | POST | `/meta/api/externals/contact/delete-by-phone` | `conn_mod_def::GJ3p6ll33bY::BxTxAekdQKWbyiNPxlNdVw` |
| Update a Contact | PUT | `/meta/api/externals/contact/{{id}}/update` | `conn_mod_def::GJ3p7FjQZWQ::TItVsBcZSl2sYuPiQEHqtg` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Accounts | GET | `/meta/api/externals/accounts/list` | `conn_mod_def::GJ3p53tO0LY::Qs3zmtSRRISFWlVwK5rqHw` |
| View an Account | GET | `/meta/api/externals/accounts/{{id}}/view` | `conn_mod_def::GJ3p6Nooijc::uoT9Zfv3SISzuOmfoNvURQ` |
| Update an Account | PUT | `/meta/api/externals/accounts/{{id}}/update` | `conn_mod_def::GJ3p6GQutQo::qjSn5P51Rg2LJVrWjd8xMQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/meta/api/externals/team/list` | `conn_mod_def::GJ3p9YJmLxw::gRC9uklMSY2HISvseVBSoA` |
| Add a Team (Company) | POST | `/meta/api/externals/team/add` | `conn_mod_def::GJ3p9Qe3AwE::6GeR7dytRKaQ43ErVoc6yw` |
| Update a Company's Team | PUT | `/meta/api/externals/team/{{id}}/update` | `conn_mod_def::GJ3p9neeH-8::srfa2J2cSKOyqAk7sij6Gw` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Tasks | GET | `/meta/api/externals/tasks/list` | `conn_mod_def::GJ3p8kJQzaw::MrjwSavbR3CCjFJ95VFl1w` |
| View a Company's Task | GET | `/meta/api/externals/tasks/{{id}}/view` | `conn_mod_def::GJ3p9IyF5oI::TPfMGVhvSBSVXy2ibi_BfQ` |
| Add a Task for a Member | POST | `/meta/api/externals/tasks/add` | `conn_mod_def::GJ3p8dEOXnU::yOVPuI6xR-GEXhFUHkcM-g` |

### ExternalTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove an External Task | DELETE | `/meta/api/externals/tasks/{{id}}/remove` | `conn_mod_def::GJ3p85XBdOo::UTXNnY77TpisH-Q_13lv8w` |
| Update an External Task | PUT | `/meta/api/externals/tasks/{{id}}/update` | `conn_mod_def::GJ3p9BT15b4::MbH-lOMCSvKMCSlYIUG-Hw` |

### Team

| Action | Method | Path | Action id |
|---|---|---|---|
| View a Team | GET | `/meta/api/externals/team/{{id}}/view` | `conn_mod_def::GJ3p9w08zYk::z1b7WPx7Ts-uEZIcGoZsIw` |
| Remove a Team | DELETE | `/meta/api/externals/team/{{id}}/remove` | `conn_mod_def::GJ3p9fgskfM::9tRNb3jiQyi7LCqWebm26g` |

### ExternalsAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Account (External) to a Company | POST | `/meta/api/externals/accounts/add` | `conn_mod_def::GJ3p5wd_ClM::mHSE_i11TOSKKysLg4tkRQ` |

### ExternalAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove an External Account | DELETE | `/meta/api/externals/accounts/{{id}}/remove` | `conn_mod_def::GJ3p5-5qJWM::6JBXwEwSS2ObvQepKJ56Gw` |

### ContactDispositions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Disposition Details for a Contact | POST | `/meta/api/externals/contact/{{id}}/dispose` | `conn_mod_def::GJ3p6ubOPio::EvQGqBeySiW4m1NO9jzA2A` |

### ExternalsContact

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Contact | DELETE | `/meta/api/externals/contact/{{id}}/remove` | `conn_mod_def::GJ3p69ILbRo::YyVNbC2eRJyy8qFFzC3vYg` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| View a Contact | GET | `/meta/api/externals/contact/{{id}}/view` | `conn_mod_def::GJ3p7OHBXGU::RAh-XqKiSLWucNGCAMldCQ` |

### ExternalLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign a List to an Account | POST | `/meta/api/externals/lists/assign` | `conn_mod_def::GJ3p7fQNggE::vZvaXxKlRHa180RPVE_9MA` |

### Logs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Logs (Filtered) | POST | `/meta/api/externals/log/list` | `conn_mod_def::GJ3p8UzZ1RY::P1ej_4XvQ6yJFMl7muGAQQ` |

## When a call fails

The error comes from Go Dial, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/go-dial

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
