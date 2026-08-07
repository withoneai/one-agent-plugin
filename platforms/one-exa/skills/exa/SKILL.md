---
name: exa
description: Exa is a semantic search engine built to help users find high-quality, insightful content from across the web. It focuses on meaning-based search rather than just keyword matching. Read and write Exa data through One: monitors, websets, agentruns, websetenrichments, imports, apikeys and more, 66 actions with real parameter documentation. Use whenever the user asks to look something up in Exa, create or update a record there, or build code against the Exa API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: exa
  generated-from: one-knowledge-base
---

# Exa through One

Exa is a semantic search engine built to help users find high-quality, insightful content from across the web. It focuses on meaning-based search rather than just keyword matching.

One exposes Exa through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `exa` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Exa is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Exa account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor | GET | `/monitors/{{id}}` | `conn_mod_def::GLnP1ol87qY::BE6wL1D9SlCm-GxdeBOtmQ` |
| Get Monitor | GET | `/v0/monitors/{{id}}` | `conn_mod_def::GLnP1vFKpio::lMVix-qBQ0G4ZPJvDZA63w` |
| List Monitors | GET | `/v0/monitors` | `conn_mod_def::GLnP1vNbCsU::8xnN0iGlSt-uzsBS0PjoPg` |
| List Monitors | GET | `/monitors` | `conn_mod_def::GLnP1v0wbpg::0LT8DJSGRny5OvjeMV2Y1A` |
| Batch Action on Monitors | POST | `/monitors/batch` | `conn_mod_def::GLnP1hgAxxI::T18x5LQfShuv_V6jjeoGow` |
| Create a Monitor | POST | `/v0/monitors` | `conn_mod_def::GLnP1ojhia8::JWuE7IHBT8GujLiIzQWyCQ` |
| Create a Monitor | POST | `/monitors` | `conn_mod_def::GLnP1o26Hso::gNs6IKgiQmqKlI5LYsfdhw` |
| Delete a Monitor | DELETE | `/monitors/{{id}}` | `conn_mod_def::GLnP1n8Z5IY::_dagZjc4QXymL0xz9Z2iAQ` |
| Delete Monitor | DELETE | `/v0/monitors/{{id}}` | `conn_mod_def::GLnP1pMjZ9E::5OFP8LxfQD-Izt74ZuYrZg` |
| Trigger a Monitor | POST | `/monitors/{{id}}/trigger` | `conn_mod_def::GLnP1u6EfG0::ENFViho5RjCv0ipsRfqmog` |
| Update a Monitor | PATCH | `/monitors/{{id}}` | `conn_mod_def::GLnP1vVAQc8::iI3h_YjuRY6OBg9mBnI9aw` |
| Update a Monitor | PATCH | `/v0/monitors/{{id}}` | `conn_mod_def::GLnP13YxBmU::X3S9SWgdSpOxFkoJ6OsI-A` |

### Websets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webset | GET | `/v0/websets/{{id}}` | `conn_mod_def::GLnP3_ylDog::9gJRU45TTguUobKrTkvMLA` |
| List Websets | GET | `/v0/websets` | `conn_mod_def::GLnP3_Neh5Q::2Kj-r2l7TNm2is-NTvSEAw` |
| Cancel a Webset | POST | `/v0/websets/{{id}}/cancel` | `conn_mod_def::GLnP3tBe-dw::GlGhhY1yQiy1Drs3YifMDQ` |
| Create a Webset | POST | `/v0/websets` | `conn_mod_def::GLnP3_DQW_4::5ZNc91ZbS5WaIH4F6f3CFQ` |
| Delete Webset | DELETE | `/v0/websets/{{id}}` | `conn_mod_def::GLnP4K7EjyM::0-FE7cPzQveC_Q4TCBTneg` |
| Preview a Webset | POST | `/v0/websets/preview` | `conn_mod_def::GLnP4Ro7w3Q::tfjc6wyLQ72nP4-_FYvAgA` |
| Update a Webset | POST | `/v0/websets/{{id}}` | `conn_mod_def::GLnP3-zl3uk::EZhnpC2aRIm3kepbhtcD_w` |

### AgentRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Run Using Agent Runs | GET | `/agent/runs/{{id}}` | `conn_mod_def::GLnP0wU8NnU::zg3JAhGNRcWxak__12aVBw` |
| List Agent Runs | GET | `/agent/runs` | `conn_mod_def::GLnP09ZFptQ::ZDgTp01aTa2prCZp5r9ECQ` |
| Cancel an Agent Run | POST | `/agent/runs/{{id}}/cancel` | `conn_mod_def::GLnP0wISw4s::q5hcQJScTHCV7mpcj0BGZg` |
| Create Agent Runs | POST | `/agent/runs` | `conn_mod_def::GLnP0yCt19M::bLO1qm5cTZysCgl3QaoDyQ` |
| Delete an Agent Run | DELETE | `/agent/runs/{{id}}` | `conn_mod_def::GLnP0wpcaXs::YjuNVE_nSzCQUXBL-4deUw` |

### WebsetEnrichments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webset Enrichment | GET | `/v0/websets/{{webset}}/enrichments/{{id}}` | `conn_mod_def::GLnP1Mm1hS8::r6EHPvprSumYm0nK7-J-WQ` |
| Cancel a Webset Enrichment | POST | `/v0/websets/{{webset}}/enrichments/{{id}}/cancel` | `conn_mod_def::GLnP0_Iow40::lcZX86jtRrO1rUfaaurWnw` |
| Create an Enrichment for a Webset | POST | `/v0/websets/{{webset}}/enrichments` | `conn_mod_def::GLnP09oKk6k::UI9GHjtaTvuTT8_CaWP5AQ` |
| Delete a Webset Enrichment | DELETE | `/v0/websets/{{webset}}/enrichments/{{id}}` | `conn_mod_def::GLnP09sQBi4::FrL1dBsLRd-1ujNOdE2vwA` |
| Update an Enrichment for a Webset | PATCH | `/v0/websets/{{webset}}/enrichments/{{id}}` | `conn_mod_def::GLnP1TUSUpM::9_mWTS8LS9y9lc8xGV-8fg` |

### Imports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Import | GET | `/v0/imports/{{id}}` | `conn_mod_def::GLnP1Z8l7-U::oxXE12RIT32i6qE9CcVFoQ` |
| List Imports | GET | `/v0/imports` | `conn_mod_def::GLnP1Ze7mHw::00kZloxIQ_Wj4eVaJxCrfQ` |
| Create an Import | POST | `/v0/imports` | `conn_mod_def::GLnP1Zl1Dxc::alVFUPN6SRmX4Zy1OQ8img` |
| Delete Import | DELETE | `/v0/imports/{{id}}` | `conn_mod_def::GLnP1Zc8lYg::rfV57P32SZCTQp7ZI0HRHA` |
| Update an Import | PATCH | `/v0/imports/{{id}}` | `conn_mod_def::GLnP1hlkDtI::it_W_zMJQ3aPVgjzx26t8g` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key | GET | `/team-management/api-keys/{{id}}` | `conn_mod_def::GLnP3X6djks::8HLxF50-QbWvkPxPzAhWfw` |
| List API Keys | GET | `/team-management/api-keys` | `conn_mod_def::GLnP3dzVH54::YCeiRSI4TlaQu6N8-UoXNw` |
| Create API Key for a Team | POST | `/team-management/api-keys` | `conn_mod_def::GLnP3IHwCUw::687SYBv8TBS7KakREOTjlw` |
| Delete an API Key | DELETE | `/team-management/api-keys/{{id}}` | `conn_mod_def::GLnP3K4L0AI::-1iVuHcvT4u-AfpQqQxBmg` |
| Update an API Key | PUT | `/team-management/api-keys/{{id}}` | `conn_mod_def::GLnP3eM4nNg::AE3bzv4xT2e0GCVphCFC3A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v0/webhooks/{{id}}` | `conn_mod_def::GLnP3ptGPTc::eMDm5IcVQa6h1P1a5cK0mQ` |
| List Webhooks | GET | `/v0/webhooks` | `conn_mod_def::GLnP3qQRU5Y::MYHFyTG5Ti2zn1K7k8ybtA` |
| Create a Webhook | POST | `/v0/webhooks` | `conn_mod_def::GLnP3d4721U::fnUetBLjQ62d9ahBHquczQ` |
| Delete a Webhook | DELETE | `/v0/webhooks/{{id}}` | `conn_mod_def::GLnP3gUnpx0::PPKRC3-tT3C32aJYfhG9Xw` |
| Update a Webhook | PATCH | `/v0/webhooks/{{id}}` | `conn_mod_def::GLnP3pchO2M::ph_EwDIFQDK0bkMx2G2nzQ` |

### MonitorRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor Run | GET | `/v0/monitors/{{monitor}}/runs/{{id}}` | `conn_mod_def::GLnP2HLDUAs::ncuw1EExRZuoloWbCPIHkQ` |
| Get a Monitor Run | GET | `/monitors/{{id}}/runs/{{runId}}` | `conn_mod_def::GLnP2O4fGoQ::8E1BHk6yT1e4oLiVjtvDoQ` |
| List a Monitor's Runs | GET | `/monitors/{{id}}/runs` | `conn_mod_def::GLnP3CJzKLo::nbYKoop-RUad-yxP2npcKA` |
| List Monitor Runs for a Monitor | GET | `/v0/monitors/{{monitor}}/runs` | `conn_mod_def::GLnP14ZarR0::KTMmiiaSQ4WtFuYjvU6cpA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event | GET | `/v0/events/{{id}}` | `conn_mod_def::GLnP1TnZJ1U::xdF1F6YJTyyIKVuUsUD4Qw` |
| List Events | GET | `/v0/events` | `conn_mod_def::GLnP1S_GuQs::657y61dTR3SLXxqzPFiAMQ` |

### WebsetItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webset Item | GET | `/v0/websets/{{webset}}/items/{{id}}` | `conn_mod_def::GLnP1hWVReU::D7rLq8SIQ-Kzu2Uspt9gAQ` |
| List All Items for a Webset | GET | `/v0/websets/{{webset}}/items` | `conn_mod_def::GLnP1ir2EXk::l371VNWbQnG3JZjeRREn9g` |

### Research

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Research by ID | GET | `/research/v1/{{researchId}}` | `conn_mod_def::GLnP13k5c4A::ZpTlsScmTIqclinV5lv3Fg` |
| Create Research Request Using Research v1 | POST | `/research/v1` | `conn_mod_def::GLnP13gMMp8::aNBnjGiaTHKa2mZSOTUnPA` |

### WebsetSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Webset Search | POST | `/v0/websets/{{webset}}/searches/{{id}}/cancel` | `conn_mod_def::GLnP2OKDHSk::0VPelgzyTZmtoavZz9Ux7g` |
| Create a Webset Search | POST | `/v0/websets/{{webset}}/searches` | `conn_mod_def::GLnP2OmQlnk::xWRMlxuMTfe1Z2XLYfoDjg` |

### AgentRunEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Agent Run's Events | GET | `/agent/runs/{{id}}/events` | `conn_mod_def::GLnP0363pbk::uIQWpx4UR5yc6A2NwOq0tg` |

### Contents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contents | POST | `/contents` | `conn_mod_def::GLnP1SliTjU::cHYbAszDQvC4kJVefjxTMw` |

### Answer

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer | POST | `/answer` | `conn_mod_def::GLnP1TDvmxk::ItLr_xMCQiuhFUUNWXBhIQ` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search | POST | `/search` | `conn_mod_def::GLnP1aajcpM::B9YzjETpQGWIsmbugYJXJQ` |

### WebsetItem

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Webset Item | DELETE | `/v0/websets/{{webset}}/items/{{id}}` | `conn_mod_def::GLnP1h02T90::CSFp3HZ7TgmAVM2LPXQdbg` |

### ResearchRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Research Requests | GET | `/research/v1` | `conn_mod_def::GLnP2Pt5j9k::86JwzTIZR1OYNapcXeKwDg` |

### WebsetSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webset Search by ID | GET | `/v0/websets/{{webset}}/searches/{{id}}` | `conn_mod_def::GLnP3KQQPqg::dY30H_1_QrW-Z2MgHcnCZA` |

### ApiKeyUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Usage | GET | `/team-management/api-keys/{{id}}/usage` | `conn_mod_def::GLnP3ONIWf4::FXKriz47RJGPkaM517qrJA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Info | GET | `/v0/teams/me` | `conn_mod_def::GLnP3i_kitE::7Okn3iieRniq-_Du7NjiOg` |

### WebhookAttempts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Attempts for a Webhook | GET | `/v0/webhooks/{{id}}/attempts` | `conn_mod_def::GLnP34U7BTg::IbkYFX3EREKmcqiaqJYNRA` |

## When a call fails

The error comes from Exa, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/exa

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
