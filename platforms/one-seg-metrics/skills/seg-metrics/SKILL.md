---
name: seg-metrics
description: SegMetrics is a marketing analytics platform that connects clicks, purchases, and touchpoints to individual contacts across the customer journey, enabling teams to track attribution, analyze funnels in real time, and understand which campaigns and channels drive revenue. Read and write SegMetrics data through One: invoice, contact, contacts, tags, adperformance, products and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in SegMetrics, create or update a record there, or build code against the SegMetrics API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: seg-metrics
  generated-from: one-knowledge-base
---

# SegMetrics through One

SegMetrics is a marketing analytics platform that connects clicks, purchases, and touchpoints to individual contacts across the customer journey, enabling teams to track attribution, analyze funnels in real time, and understand which campaigns and channels drive revenue.

One exposes SegMetrics through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `seg-metrics` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SegMetrics is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SegMetrics account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Invoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Purchase to Contact Using SegMetrics Import Invoice | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/invoice` | `conn_mod_def::GMkoIoYsPrA::X6Cmd6cLSEuxe0ptWICSpg` |
| Delete an Invoice for an Account Integration | DELETE | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/invoice/{{id}}` | `conn_mod_def::GMkoIwZhp_A::OHneqlrRSVeaBAFnNM_sPw` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/{{SEG_METRICS_ACCOUNT_ID}}/contact/{{contactIdOrEmail}}` | `conn_mod_def::GMkoIow1A6A::baesVsjlTL2Gd8ut_5Evvw` |
| Delete a Contact for an Account Integration | DELETE | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/contact/{{contactIdOrEmail}}` | `conn_mod_def::GMkoIogpcig::kOj6ofrlSQG00A8ZyhQ54w` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Add or Update a Contact for an Account Integration | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/contact` | `conn_mod_def::GMkoIo4N9dg::EdA0TSUHSWOl7GgxB_gC3Q` |
| Test Connection | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/contact` | `conn_mod_def::GMkokbhfWhA::DRSq9Gg2RJmhBa0MfjFP5w` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Tags Using SegMetrics Import API | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/tags/add` | `conn_mod_def::GMkoI8nM3Mg::vvwCXaHjSMawybBggM9Ujw` |
| Remove Tags Using SegMetrics Import | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/tags/remove` | `conn_mod_def::GMkoI9ERiNA::bzP44H4TSc2Ag6yLhvCe2A` |

### AdPerformance

| Action | Method | Path | Action id |
|---|---|---|---|
| Record Ad Performance for an Account Integration | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/ad/performance` | `conn_mod_def::GMkoInht9wA::uT0SRndgTuKqmxsMZrCskg` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Product for an Integration | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/product` | `conn_mod_def::GMkoIwGonFA::hEHW8NZjRbCw6zz-CXKquw` |

### ReportContactsCustomerJourney

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Report Contacts Customer Journey | GET | `/{{SEG_METRICS_ACCOUNT_ID}}/report/{{reportType}}/{{reportId}}/contacts` | `conn_mod_def::GMkoIxMrYig::pkN1xnjhRrC9jDj26QB06A` |

### ReportData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Report Data Using SegMetrics | GET | `/{{SEG_METRICS_ACCOUNT_ID}}/report/{{reportType}}/{{reportId}}` | `conn_mod_def::GMkoIyP12Gg::Sw-rohYoSVyw82nbZnIhrg` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Subscription Using SegMetrics Import API v1 | POST | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/subscription` | `conn_mod_def::GMkoIymTf3g::auxzB3jbQ4W-9p0tvqqoKw` |

### Subscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Subscription for an Account Integration | DELETE | `/api/v1/{{SEG_METRICS_ACCOUNT_ID}}/{{SEG_METRICS_INTEGRATION_ID}}/subscription/{{id}}` | `conn_mod_def::GMkoI6U9Rhg::K0-sbhntSNWdCqXZbHhc-A` |

## When a call fails

The error comes from SegMetrics, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/seg-metrics

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
