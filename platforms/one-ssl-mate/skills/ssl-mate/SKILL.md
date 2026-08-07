---
name: ssl-mate
description: SSLMate is a certificate management platform that provides tools and APIs for issuing, monitoring, and automating SSL/TLS certificates, allowing developers and operations teams to manage HTTPS infrastructure, detect certificate problems, and reduce manual renewal and deployment work. Read and write SSLMate data through One: certificates, certificateinstances, certs and more, 9 actions with real parameter documentation. Use whenever the user asks to look something up in SSLMate, create or update a record there, or build code against the SSLMate API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ssl-mate
  generated-from: one-knowledge-base
---

# SSLMate through One

SSLMate is a certificate management platform that provides tools and APIs for issuing, monitoring, and automating SSL/TLS certificates, allowing developers and operations teams to manage HTTPS infrastructure, detect certificate problems, and reduce manual renewal and deployment work.

One exposes SSLMate through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ssl-mate` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SSLMate is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SSLMate account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Certificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Certificate | GET | `/api/v2/certs/{{commonName}}` | `conn_mod_def::GLf1OpiLcMA::sfqgbPTjRHiwnYSBFL4J7g` |
| Buy a Certificate | POST | `/api/v2/certs/{{commonName}}/buy` | `conn_mod_def::GLf1OUR6wQg::36-6NptKTaCoqlyI0JLG-Q` |
| Create or Update a Certificate | POST | `/api/v2/certs/{{commonName}}` | `conn_mod_def::GLf1OVt9TYA::qAVAWFuFTryP1ir1TpJokQ` |
| Reissue a Certificate | POST | `/api/v2/certs/{{commonName}}/reissue` | `conn_mod_def::GLf1OppUGwA::2psAgj8HSJ6zBEZ4w6Vfqg` |
| Revoke a Certificate | POST | `/api/v2/certs/{{commonName}}/revoke` | `conn_mod_def::GLf1Op99Kmg::gON_lcUvTg-EWNfpg9hHbA` |

### CertificateInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Certificate Instance by Public Key Hash | GET | `/api/v2/certs/{{commonName}}/instances/pubkey_hash:{{hash}}` | `conn_mod_def::GLf1OTNgr-A::jRxiVvmZT1yFLYj51CiVaQ` |
| Retrieve a Certificate Instance for a Certificate | GET | `/api/v2/certs/{{commonName}}/instances/{{instanceId}}` | `conn_mod_def::GLf1OVWi56g::-H4KpTSCRoSAoI5aMkvtdw` |

### Certs

| Action | Method | Path | Action id |
|---|---|---|---|
| Test a Certificate | GET | `/api/v2/certs/{{commonName}}/test` | `conn_mod_def::GLf1OrSFs9A::XPdJC_L5QRCke0_2HAK48g` |
| Redo Approval for a Certificate | POST | `/api/v2/certs/{{commonName}}/redo_approval` | `conn_mod_def::GLf1OhUHzrA::ohZphpFcQmqEaXz27wurhQ` |

## When a call fails

The error comes from SSLMate, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ssl-mate

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
