---
name: 1-password
description: 1Password is a secure password manager that consolidates credentials, payment cards, documents, and two-factor authentication into a zero‑knowledge vault accessible across all major devices. It offers strong password generation, autofill, breach monitoring via Watchtower, secure sharing, Travel Mode, passkey support, and enterprise‑grade user and device controls. Read and write 1Password data through One: vaultitems, files, vaults, itemfiles, activity, health and more, 15 actions with real parameter documentation. Use whenever the user asks to look something up in 1Password, create or update a record there, or build code against the 1Password API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: 1-password
  generated-from: one-knowledge-base
---

# 1Password through One

1Password is a secure password manager that consolidates credentials, payment cards, documents, and two-factor authentication into a zero‑knowledge vault accessible across all major devices. It offers strong password generation, autofill, breach monitoring via Watchtower, secure sharing, Travel Mode, passkey support, and enterprise‑grade user and device controls.

One exposes 1Password through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `1-password` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm 1Password is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real 1Password account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### VaultItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vault Item’s Details | GET | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}` | `conn_mod_def::GJzu-ODZwPg::m-XJ3KmtQ8SJy8njzEsK8Q` |
| List a Vault’s Items | GET | `/v1/vaults/{{vaultUuid}}/items` | `conn_mod_def::GJzu-HJStBI::mMq6BWN1RYabEYmA62dnYg` |
| Create a Vault Item | POST | `/v1/vaults/{{vaultUuid}}/items` | `conn_mod_def::GJzu94bfJlg::vlQcMFn-QaKazBC_0J6Wcg` |
| Delete a Vault Item | DELETE | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}` | `conn_mod_def::GJzu9_2yeAw::m87bvhNfT1KdLEswNWoq7g` |
| Patch a Vault Item (Update Subset of Item Attributes) | PATCH | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}` | `conn_mod_def::GJzu-WcV5Xs::fe_cZZx7TLWmex1XRqXL4w` |
| Update a Vault Item | PUT | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}` | `conn_mod_def::GJzu-eA_G7w::x7_T6_oYSCqVRuHv57fHvQ` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File's Content (by Vault, Item, and File UUID) | GET | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}/files/{{fileUuid}}/content` | `conn_mod_def::GJzu9b049Dc::uZN8a8HrS1WQ0o7KmR2-6g` |
| Get a File’s Details (in a Vault Item) | GET | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}/files/{{fileUuid}}` | `conn_mod_def::GJzu9jFYNR8::f2b-WFqbTte5kyogaVsEuQ` |

### Vaults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vault’s Details (Metadata) | GET | `/v1/vaults/{{vaultUuid}}` | `conn_mod_def::GJzu-1PrxdI::JRCmSoE9R92z8-Y82aMH-A` |
| List Vaults | GET | `/v1/vaults` | `conn_mod_def::GJzu-uExpFE::rJe6c7KUTAuJvyTqb5FxLA` |

### ItemFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Item’s Files (in a Vault) | GET | `/v1/vaults/{{vaultUuid}}/items/{{itemUuid}}/files` | `conn_mod_def::GJzu9SqmCYw::KCoykgaER9eXsHLV_6oTnQ` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Activity (API Requests) | GET | `/v1/activity` | `conn_mod_def::GJzvBGLPv2U::bFZgEQedRMahsbITZQm08Q` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Server Health (State of Server and Dependencies) | GET | `/v1/health` | `conn_mod_def::GJzu9pOun7c::CmqSyXYmQlufEhAn3ZgjGw` |

### Heartbeat

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping the Server for Liveness (Heartbeat) | GET | `/v1/heartbeat` | `conn_mod_def::GJzu9vtAfrc::BgpSFoFBSZySuGoIdQGVbw` |

### Metrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Prometheus Metrics | GET | `/v1/metrics` | `conn_mod_def::GJzu-k201XE::cJWd9bLqSSaz8AFY2qIDEw` |

## When a call fails

The error comes from 1Password, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/1-password

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
