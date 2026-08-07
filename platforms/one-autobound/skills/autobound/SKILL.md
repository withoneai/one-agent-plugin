---
name: autobound
description: Autobound is an AI-powered sales outreach and personalization platform that analyzes real-time prospect data to generate highly tailored emails, messages, and multi-channel campaigns, enabling teams to scale personalized engagement, improve response rates, and automate prospecting workflows. Read and write Autobound data through One: webhooks, contacts, signals, companies, personalizedcontent, requestlogs and more, 30 actions with real parameter documentation. Use whenever the user asks to look something up in Autobound, create or update a record there, or build code against the Autobound API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: autobound
  generated-from: one-knowledge-base
---

# Autobound through One

Autobound is an AI-powered sales outreach and personalization platform that analyzes real-time prospect data to generate highly tailored emails, messages, and multi-channel campaigns, enabling teams to scale personalized engagement, improve response rates, and automate prospecting workflows.

One exposes Autobound through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `autobound` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Autobound is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Autobound account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription | GET | `/v1/webhooks/{{id}}` | `conn_mod_def::GKY2vPKDd4g::MVlrTjlXQaqhWPxu2tIqbg` |
| List Webhook Subscriptions | GET | `/webhooks` | `conn_mod_def::GKY2vYYrBwg::G2akLAhXRxaZLQyiBXIe-A` |
| Create Webhook Subscription | POST | `/v1/webhooks` | `conn_mod_def::GKY2vPneFMA::vjuVmhLbTZ2FPdLIMNrQfw` |
| Delete a Webhook Subscription | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GKY2vPJmjTA::z2brqDFaT2-MaVNpAXhvEA` |
| Replay Failed Deliveries for a Webhook Subscription | POST | `/v1/webhooks/{{id}}/replay` | `conn_mod_def::GKY2vYlSK_A::IpJ02ifHTBK5Z4KWr7ZXAA` |
| Send Test Event to a Webhook | POST | `/v1/webhooks/{{id}}/test` | `conn_mod_def::GKY2vZBIDBg::by1rLzi0QCaW8TvBZeh7uw` |
| Update a Webhook Subscription | PATCH | `/v1/webhooks/{{id}}` | `conn_mod_def::GKY2vZLZgLA::Lp6hh-MSQo--6UDGlQLI8Q` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact's Signal Timeline | GET | `/v1/contacts/{{email}}/timeline` | `conn_mod_def::GKY2umjytag::961cX3bPQ36U78N7YhFosw` |
| Bulk Enrich Contacts | POST | `/contacts/bulk` | `conn_mod_def::GKY2uiAfwAA::TJb5WIaxQcyTZbCuXbsTUg` |
| Enrich a Contact | POST | `/v1/contacts/enrich` | `conn_mod_def::GKY2uuvrA8A::IbPDG51zQ1-IsSldQG3IGA` |

### Signals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Signal | GET | `/v1/signals/{{signalId}}` | `conn_mod_def::GKY2u-ZAV4A::MLj8IrliQECZPsI1pcFBgA` |
| Get Trending Signals | GET | `/v1/signals/trending` | `conn_mod_def::GKY2vAJJNNg::OhSIMrD-QciCpCifq2IcDQ` |
| Search Signals | POST | `/signals/search` | `conn_mod_def::GKY2u-jfi6A::b5zZgBNRQKCb9Zs_PxBlBQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Enrich Companies | POST | `/v1/companies/bulk` | `conn_mod_def::GKY2uXAVb3A::dEjxyl1aRDKcIgW5Vee-pg` |
| Enrich a Company | POST | `/companies/enrich` | `conn_mod_def::GKY2umICkkA::du9UAP6eTmaYVjLuAgV_6g` |

### PersonalizedContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Personalized Content | POST | `/api/external/generate-content/v3.6` | `conn_mod_def::GKY2uu_LCMg::o7fw7iq-SWSydq0dkubLBg` |

### RequestLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Request Logs | GET | `/v1/logs` | `conn_mod_def::GKY2uZYi_0g::BpLoloRdQnqvK4_F8OWXSA` |

### CompanySignalTimeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Signal Timeline | GET | `/v1/companies/{{domain}}/timeline` | `conn_mod_def::GKY2uji6jDA::qN9i7PJXQUSOwV5YUdme6g` |

### ContactSignalTimeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Signal Timeline by Query Parameters | GET | `/v1/contacts/timeline` | `conn_mod_def::GKY2ukRzAWA::4fOqSHG7RyWlTc1BoSaaPg` |

### ContactInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Insights for a Contact | POST | `/api/external/generate-insights/v1.2` | `conn_mod_def::GKY2uu7fFnA::1OlQmiy8S0On44s4j_RZqQ` |

### IntentCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| Score Company Intent | POST | `/v1/intent/companies` | `conn_mod_def::GKY2uu7k3ug::YQ1br1LoTpGc6tZdHobNww` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Info | GET | `/account` | `conn_mod_def::GKY2uWsTWJg::Ex613PqqRa2INp3Jr8B8rQ` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credit Balance | GET | `/v1/credits` | `conn_mod_def::GKY2uWsiEiA::s-2LkvzHQwaGof_kVEb5ZQ` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection Statistics | GET | `/stats` | `conn_mod_def::GKY2uXy2vgA::l3prQmqvR0OFezZD_IyLcQ` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/health` | `conn_mod_def::GKY2u2YcvNg::wEVLJnuiQf-naJ2-PF5hEg` |

### SignalTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Signal Types | GET | `/v1/signals/types` | `conn_mod_def::GKY2u_gv0Xg::BHNTCc1fTsOVpQn6cyxyTA` |

### ContactIntent

| Action | Method | Path | Action id |
|---|---|---|---|
| Score Contact Intent | POST | `/intent/contacts` | `conn_mod_def::GKY2vHIIlSA::tj03XKZhS_-VC4Hex_nHbA` |

### SignalTypeHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Signal Type History | GET | `/v1/signals/types/{{type}}/history` | `conn_mod_def::GKY2vPkFb9A::D0JHsukZRyazByDRWaYgbg` |

### WebhookDeliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Webhook Subscription's Delivery History | GET | `/v1/webhooks/{{id}}/deliveries` | `conn_mod_def::GKY2vQsm-jA::z8iIfquqT8WxZhw3FDTKTQ` |

### GeneratedContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Content | POST | `/external/generate-content/v1.0` | `conn_mod_def::GKZ6eJLlOWo::S8SSIwOYSLGThDWtln457g` |

## When a call fails

The error comes from Autobound, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/autobound

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
