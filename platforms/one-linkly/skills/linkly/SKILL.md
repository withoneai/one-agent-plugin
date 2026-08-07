---
name: linkly
description: Linkly is a link management and tracking platform that enables teams to create branded short links, route users with conditional redirects, and measure click performance, allowing marketers and developers to manage campaigns and attribution across channels and devices. Read and write Linkly data through One: links, domains, webhooks, link, clickcounters, workspaceclickanalytics and more, 24 actions with real parameter documentation. Use whenever the user asks to look something up in Linkly, create or update a record there, or build code against the Linkly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: linkly
  generated-from: one-knowledge-base
---

# Linkly through One

Linkly is a link management and tracking platform that enables teams to create branded short links, route users with conditional redirects, and measure click performance, allowing marketers and developers to manage campaigns and attribution across channels and devices.

One exposes Linkly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `linkly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Linkly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Linkly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Links

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Links for a Workspace | GET | `/api/v1/workspace/{{workspaceId}}/links/export` | `conn_mod_def::GMXuynxqQ0g::nx4QiWxEQ-mEZE9GbncW9A` |
| List Links for a Workspace | GET | `/api/v1/workspace/{{workspaceId}}/list_links` | `conn_mod_def::GMXuyyFM-LA::gAfA33_gSNqjl3hqhd2SIA` |
| Create or Update Multiple Links | POST | `/api/v1/links` | `conn_mod_def::GMXuyfw2TSA::qAa9wR9cSv6oBhQ7do8dKA` |
| Delete a Link in a Workspace | DELETE | `/api/v1/workspace/{{workspaceId}}/links/{{id}}` | `conn_mod_def::GMXuymDjzMA::dawV5kBASGOa3-HqVmzv_Q` |
| Delete Links for a Workspace | DELETE | `/api/v1/workspace/{{workspaceId}}/links` | `conn_mod_def::GMXuylsZMeA::nHaiMkWiStC3qReXx7-w5Q` |
| Restore Links for a Workspace | POST | `/api/v1/workspace/{{workspaceId}}/links/restore` | `conn_mod_def::GMXuyuR4M8g::3_NMLn4RSFGWRBXne68C-A` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Domains | GET | `/api/v1/workspace/{{workspaceId}}/domains` | `conn_mod_def::GMXuyfxQn2g::VpfgS9k-QtOqJ-TUc5tVJw` |
| Add a Custom Domain | POST | `/api/v1/domains` | `conn_mod_def::GMXuyUqae2g::PPzga6l2QPujLGIpBPmy0Q` |
| Create a Domain in a Workspace | POST | `/api/v1/workspace/{{workspaceId}}/domains` | `conn_mod_def::GMXuyVOLlyA::gA407uztQpqKRRKHd6i9yg` |
| Delete a Domain from a Workspace | DELETE | `/api/v1/workspace/{{workspaceId}}/domains/{{domainId}}` | `conn_mod_def::GMXuyUSX_9g::JP6hmMv8RS2CReZD_qBghQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks for a Link | GET | `/api/v1/link/{{linkId}}/webhooks` | `conn_mod_def::GMXuyubNJDA::h-ywUEIoQMe2AUF62fv69g` |
| List Webhooks for a Workspace | GET | `/api/v1/workspace/{{workspaceId}}/webhooks` | `conn_mod_def::GMXuywJTe3g::bGeqs753Tp2za40ygMN02Q` |
| Subscribe a Webhook to a Workspace | POST | `/api/v1/workspace/{{workspaceId}}/webhooks` | `conn_mod_def::GMXuy4BeNLg::1D_3f4XDQ0G4JlyXupDu4w` |
| Subscribe Webhooks to a Link | POST | `/api/v1/link/{{linkId}}/webhooks` | `conn_mod_def::GMXuyumOjiA::umCUleczS9ySYrXRdYBYaQ` |

### Link

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Link Details | GET | `/api/v1/get_link/{{id}}` | `conn_mod_def::GMXuymDrI6g::HlJNOHUcRqqF4W9cY8bNLg` |
| Get Link Details | GET | `/api/v1/link/{{id}}` | `conn_mod_def::GMXuymNBwcA::uL5c8OhHS5-KKIUf-WOecQ` |
| Create or Update a Link | POST | `/api/v1/link` | `conn_mod_def::GMXuyeZn-ug::pt4LrFQNQNerFM_xB8XQFQ` |

### ClickCounters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Click Counters for a Workspace | GET | `/api/v1/workspace/{{workspaceId}}/clicks/counters/{{counter}}` | `conn_mod_def::GMXuyWKL_6g::jY2mfP2ERQC2MX8lY4Qr_A` |

### WorkspaceClickAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workspace Click Analytics | GET | `/api/v1/workspace/{{workspaceId}}/clicks` | `conn_mod_def::GMXuyXn1WIg::SiY9BQGuTfW2ABL_OBSleQ` |

### WorkspaceDomainFavicon

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Workspace Domain Favicon | PATCH | `/api/v1/workspace/{{workspaceId}}/domains/{{id}}/favicon` | `conn_mod_def::GMXuyeLHSNA::En3Vrbw8Qx-mvxyZBXbT2w` |

### WorkspaceLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a Workspace Link | POST | `/api/v1/workspace/{{workspaceId}}/links` | `conn_mod_def::GMXuyeR9kAg::-rap5VBiQZS-iS6R7IDnaQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/api/v1/workspaces` | `conn_mod_def::GMXuy32TvmA::ZVGunTqwQgudGbh6K-6g0Q` |

### WorkspaceWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Unsubscribe a Workspace Webhook | DELETE | `/api/v1/workspace/{{workspaceId}}/webhooks/{{hookId}}` | `conn_mod_def::GMXuy34g-qA::vg7Z4WO-Qj2WkPIG7IrqsA` |

### WebhookSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Unsubscribe a Webhook from a Link | DELETE | `/api/v1/link/{{linkId}}/webhooks/{{hookId}}` | `conn_mod_def::GMXuy4M8H4g::rmvCdQU2QYOZeNIOX18ODw` |

## When a call fails

The error comes from Linkly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/linkly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
