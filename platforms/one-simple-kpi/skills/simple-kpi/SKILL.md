---
name: simple-kpi
description: SimpleKPI is a business intelligence and KPI reporting platform that enables teams to track metrics, build dashboards, and automate performance reporting, allowing organizations to monitor goals, analyze operational data, and share insights across departments. Read and write SimpleKPI data through One: kpicategories, kpis, kpientries, kpiunits, sources, users and more, 42 actions with real parameter documentation. Use whenever the user asks to look something up in SimpleKPI, create or update a record there, or build code against the SimpleKPI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: simple-kpi
  generated-from: one-knowledge-base
---

# SimpleKPI through One

SimpleKPI is a business intelligence and KPI reporting platform that enables teams to track metrics, build dashboards, and automate performance reporting, allowing organizations to monitor goals, analyze operational data, and share insights across departments.

One exposes SimpleKPI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `simple-kpi` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SimpleKPI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SimpleKPI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### KpiCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI Category by ID | GET | `/api/kpicategories/{{id}}` | `conn_mod_def::GMa0NA6Z6Jg::E15ERQH5STSZHb9Fikek2w` |
| List KPI Categories | GET | `/api/kpicategories` | `conn_mod_def::GMa0M_z_LfA::EPBBksFORmSXiLPtFx0JMQ` |
| Create KPI Categories | POST | `/api/kpicategories` | `conn_mod_def::GMa0M_XNhRg::VlH5qMEkSQGxnp6HG2409Q` |
| Delete a KPI Category | DELETE | `/api/kpicategories/{{id}}` | `conn_mod_def::GMa0M_7qonA::gKLPx9lJQhinz51KFqVN5A` |
| Delete a KPI from a KPI Category | DELETE | `/api/kpicategories/{{categoryId}}/kpis/{{id}}` | `conn_mod_def::GMa0Nm93ICA::vdvIrST_TQeyxbssgbqFmw` |
| Update a KPI Category by ID | PUT | `/api/kpicategories/{{id}}` | `conn_mod_def::GMa0M_qcR1A::fuxMbDWSReSbSa6RHAx9aQ` |
| Update a KPI in a KPI Category | PUT | `/api/kpicategories/{{categoryId}}/kpis/{{id}}` | `conn_mod_def::GMa0No9SJ6A::efEhCOceStCOBPU1f-DhYQ` |

### Kpis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI | GET | `/api/kpis/{{id}}` | `conn_mod_def::GMa0Nf08JQA::3xbPq-ddSsGDEH1cmTp6xA` |
| List KPIs | GET | `/api/kpis` | `conn_mod_def::GMa0Nf00Gmg::IbPzf15-QJS5wrqL0Lg2ug` |
| List KPIs for a KPI Category | GET | `/api/kpicategories/{{categoryId}}/kpis` | `conn_mod_def::GMa0NntP0zg::t0nqkZFIQeKfmYXjQtf4qw` |
| Create a KPI | POST | `/api/kpis` | `conn_mod_def::GMa0Ngkkxjg::KoxQEb81SkG7ypoqNajgXw` |
| Create a KPI for a KPI Category | POST | `/api/kpicategories/{{categoryId}}/kpis` | `conn_mod_def::GMa0Nn8EwQA::lwgozizEQ9mFATgZstK5AQ` |
| Delete a KPI | DELETE | `/api/kpis/{{id}}` | `conn_mod_def::GMa0NgWi7pA::bPxniqyCQEGUfgd4K7AUHg` |
| Update a KPI | PUT | `/api/kpis/{{id}}` | `conn_mod_def::GMa0NgX6Uag::tGpozyQUS6a8IlIsk6F1zw` |

### KpiEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI Entry | GET | `/api/kpientries/{{id}}` | `conn_mod_def::GMa0NJiPOvg::dP1Cp1qATj2C7mT8mxjv-w` |
| List KPI Entries | GET | `/api/kpientries` | `conn_mod_def::GMa0NJCMzNA::h1Y7sY2UQAqf-Nc6-aYKMg` |
| Create KPI Entry | POST | `/api/kpientries` | `conn_mod_def::GMa0NH5sQFg::LuZHH9I7R9G1vJGu3w22Sw` |
| Delete a KPI Entry | DELETE | `/api/kpientries/{{id}}` | `conn_mod_def::GMa0NJ8Z3gA::UwaS7WY6S4mRF5rEMlrcAw` |
| List KPI Entries | POST | `/api/kpientries/list` | `conn_mod_def::GMa0NHyDNQg::ktLLPZs6Tn6kEDmQW8ASdg` |
| Update a KPI Entry | PUT | `/api/kpientries/{{id}}` | `conn_mod_def::GMa0NQ8niUA::w9a5gRJSRZ6Fg6vqWDblfg` |

### KpiUnits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI Unit | GET | `/api/kpiunits/{{id}}` | `conn_mod_def::GMa0NZTGI-A::rVlycN9ZQEiYxwlIww5lGg` |
| List KPI Units | GET | `/api/kpiunits` | `conn_mod_def::GMa0NX2s8og::F1tyGlqwSeKpnRlnwdRCHQ` |
| Create a KPI Unit | POST | `/api/kpiunits` | `conn_mod_def::GMa0NX--1uA::uZjoH0jnR6ymu9rSYj2gnw` |
| Delete a KPI Unit by ID | DELETE | `/api/kpiunits/{{id}}` | `conn_mod_def::GMa0NY2WtVg::XAD7OqwQQR6R3MQ_p9pR7g` |
| Update a KPI Unit | PUT | `/api/kpiunits/{{id}}` | `conn_mod_def::GMa0NZCWozA::pEnB8GXsSKShKreQEkDWZA` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Source | GET | `/api/sources/{{id}}` | `conn_mod_def::GMa0Nv0AbrA::t8TYopVDRGWps4Pnl3ByTw` |
| List Sources | GET | `/api/sources` | `conn_mod_def::GMa0NvlfS1A::ArIMlULWT9-NqUFHp6v6kQ` |
| Create a Source | POST | `/api/sources` | `conn_mod_def::GMa0N416cKg::ze_-99RzSP-X6-umC3euRg` |
| Delete a Source | DELETE | `/api/sources/{{id}}` | `conn_mod_def::GMa0NvLU_jg::x2-L0JODT8C01gmrCMScAQ` |
| Update a Source | PUT | `/api/sources/{{id}}` | `conn_mod_def::GMa0N4WWteA::eNm8pAJcRWOAi5UeAEBeNg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/users/{{id}}` | `conn_mod_def::GMa0N4tqn5A::c4iRFrfiQLicZJl6_Ml0nw` |
| List Users | GET | `/api/users` | `conn_mod_def::GMa0N4RzVCA::AgwrbkD9Rgmn9O8l-nT-XQ` |
| Create a User | POST | `/api/users` | `conn_mod_def::GMa0N_XAfHA::6LeipIcWR_2JQ9gocel4WA` |
| Delete a User | DELETE | `/api/users/{{id}}` | `conn_mod_def::GMa0N4A9V0g::USpYADk7SHOMTe1kaEXR5g` |
| Update a User | PUT | `/api/users/{{id}}` | `conn_mod_def::GMa0N_juWBg::k3h1c5PGQsOH8eXvY95zQA` |

### KpiIcons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI Icon by ID | GET | `/api/kpiicons/{{id}}` | `conn_mod_def::GMa0NQ913_A::xzo4_Z-1SvS4Klz9rJXhcA` |
| List KPI Icons | GET | `/api/kpiicons` | `conn_mod_def::GMa0NRMi4mA::eS6I4w0-QYumdFT6J42l6g` |

### KpiFrequencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI Frequency by ID | GET | `/api/kpifrequencies/{{id}}` | `conn_mod_def::GMa0NRISquA::ApGxDtdTR02we_HRmRw9zg` |
| List KPI Frequencies | GET | `/api/kpifrequencies` | `conn_mod_def::GMa0NRbyfEg::Gz7uIIwwTZioyCtqttKj2g` |

### Kpi

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a KPI in a KPI Category | GET | `/api/kpicategories/{{categoryId}}/kpis/{{id}}` | `conn_mod_def::GMa0NoRtADA::74J4M23ATNWBMgWkRWP_QA` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Data Entries for Reports | GET | `/api/reports/alldataentries` | `conn_mod_def::GMa0NwH7D2A::XJm_gtU5R7uG9IDRJ4c3qw` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health | GET | `/health` | `conn_mod_def::GMa0NxZrVFA::7YaT1zkNS7CzeW3LhFnmGw` |

## When a call fails

The error comes from SimpleKPI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/simple-kpi

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
