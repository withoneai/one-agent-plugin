---
name: ably-control
description: Ably Control API is a RESTful interface that enables developers and DevOps teams to programmatically provision, configure, and manage real-time infrastructure—such as apps, API keys, namespaces, queues, and channel rules—seamlessly integrating into CI/CD workflows and automation pipelines. Read and write Ably Control data through One: apps, rules, namespaces, queues, appsapikeys, keys and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Ably Control, create or update a record there, or build code against the Ably Control API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ably-control
  generated-from: one-knowledge-base
---

# Ably Control through One

Ably Control API is a RESTful interface that enables developers and DevOps teams to programmatically provision, configure, and manage real-time infrastructure—such as apps, API keys, namespaces, queues, and channel rules—seamlessly integrating into CI/CD workflows and automation pipelines.

One exposes Ably Control through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ably-control` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ably Control is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ably Control account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Apps | GET | `/accounts/{{accountId}}/apps` | `conn_mod_def::GJzy2rhFE08::ie0cNs0NSNioOGIk1T01vw` |
| Create an App in an Account | POST | `/accounts/{{accountId}}/apps` | `conn_mod_def::GJzy2dT1T8Y::XSvjdHMLQsibTJfxm11CEQ` |
| Delete an App | DELETE | `/apps/{{id}}` | `conn_mod_def::GJzy2j9etps::JubEGSR0Ssau6pYb7grVEA` |
| Update an App | PATCH | `/apps/{{id}}` | `conn_mod_def::GJzy3Psu8U4::kRk7ZGNSQn6Ux18qP4yC2Q` |
| Update an App's APNs Info (PKCS#12) | POST | `/apps/{{id}}/pkcs12` | `conn_mod_def::GJzy3X5icaY::M8szOlIESTuJR5-Wi6j1Tg` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an App's Rule | GET | `/apps/{{appId}}/rules/{{ruleId}}` | `conn_mod_def::GJzy69dh4S4::SoHSCBi2SY6QigCGvFcmBg` |
| List an App's Rules | GET | `/apps/{{appId}}/rules` | `conn_mod_def::GJzy5UPZG1o::Q3a1zVzcTVG2JDAInPZh3w` |
| Create an App Rule | POST | `/apps/{{appId}}/rules` | `conn_mod_def::GJzy44FLutE::AH3Tm1h8RW6ArpMbQ9VCoQ` |
| Delete an App's Rule | DELETE | `/apps/{{appId}}/rules/{{ruleId}}` | `conn_mod_def::GJzy4_ZjLmg::jUZakqKnSv2keENf2tLBng` |
| Update an App’s Rule | PATCH | `/apps/{{appId}}/rules/{{ruleId}}` | `conn_mod_def::GJzy5byzkmU::-sJEcTprRCS-XyJHaEVCSg` |

### Namespaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List an App's Namespaces | GET | `/apps/{{appId}}/namespaces` | `conn_mod_def::GJzy4MIctU8::d_Z6-2ZxSAKIenrdvPDXaQ` |
| Create a Namespace for an App | POST | `/apps/{{appId}}/namespaces` | `conn_mod_def::GJzy39vsjyM::sPPDjmK9SkSQJGjhzFOzhA` |
| Delete an App Namespace | DELETE | `/apps/{{appId}}/namespaces/{{namespaceId}}` | `conn_mod_def::GJzy4EgLbiw::-K9OBC09REWFZnG5_XJ-Rw` |
| Update an App Namespace | PATCH | `/apps/{{appId}}/namespaces/{{namespaceId}}` | `conn_mod_def::GJzy4VbCPtw::wHxICZO1SaiWIkhhuWAaHw` |

### Queues

| Action | Method | Path | Action id |
|---|---|---|---|
| List an App’s Queues | GET | `/apps/{{appId}}/queues` | `conn_mod_def::GJzy4tiwqtM::MuhfIFW5TBCCJspYG--6ZA` |
| Create a Queue for an App | POST | `/apps/{{appId}}/queues` | `conn_mod_def::GJzy4fEWKMY::b1lDqhQETruBLGpK6kf1xQ` |

### AppsApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke an App’s API Key | POST | `/apps/{{appId}}/keys/{{keyId}}/revoke` | `conn_mod_def::GJzy3uz28Qg::8LJboUHJSIyGBKlCRM_QEA` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| List an App’s Keys | GET | `/apps/{{appId}}/keys` | `conn_mod_def::GJzy3nFB5bw::PEVugpigRt-k83VGI7E-nw` |

### AccountStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Account’s Statistics | GET | `/accounts/{{id}}/stats` | `conn_mod_def::GJzy2V4bZl8::1zkm5oJ1T7iVIVsPjQU9lw` |

### AppKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an App’s API Key | PATCH | `/apps/{{appId}}/keys/{{keyId}}` | `conn_mod_def::GJzy31_0xPI::w4zErES1QNKqSaGjbbBaiw` |

### AppQueues

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an App Queue | DELETE | `/apps/{{appId}}/queues/{{queueId}}` | `conn_mod_def::GJzy4mVH4P0::1BMnMm8bQjyz7HURnp07vQ` |

### AppStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an App’s Statistics | GET | `/apps/{{id}}/stats` | `conn_mod_def::GJzy7QZR3cY::2cMZHwYSSdiXSP1jezmGTg` |

### AppApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an App API Key | POST | `/apps/{{appId}}/keys` | `conn_mod_def::GJzy3gYtFFE::7qr2VVMUQGax6WMLlwhpeg` |

### Me

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Token Details | GET | `/me` | `conn_mod_def::GJzy5ix8xlY::zk58c1lsT8myTUcM0_1XZg` |

## When a call fails

The error comes from Ably Control, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ably-control

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
