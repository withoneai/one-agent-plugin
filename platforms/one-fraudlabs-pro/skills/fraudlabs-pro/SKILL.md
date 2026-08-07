---
name: fraudlabs-pro
description: FraudLabs Pro is a fraud prevention platform that provides automated payment fraud screening, customizable validation rules, and API/SDK integration, allowing online businesses to detect suspicious transactions, reduce chargebacks, and validate data such as IPs, emails, cards, and proxies. Read and write FraudLabs Pro data through One: orderresult, orderfeedback, paymentfeedback, userfeedback, userresult, userscreening and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in FraudLabs Pro, create or update a record there, or build code against the FraudLabs Pro API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: fraudlabs-pro
  generated-from: one-knowledge-base
---

# FraudLabs Pro through One

FraudLabs Pro is a fraud prevention platform that provides automated payment fraud screening, customizable validation rules, and API/SDK integration, allowing online businesses to detect suspicious transactions, reduce chargebacks, and validate data such as IPs, emails, cards, and proxies.

One exposes FraudLabs Pro through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `fraudlabs-pro` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm FraudLabs Pro is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real FraudLabs Pro account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OrderResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Order Result | GET | `/v2/order/result` | `conn_mod_def::GMZezR3u15g::TlEzDYRDTZWptjsWwSGwwQ` |
| Test Connection | GET | `/v2/order/result` | `conn_mod_def::GMZfP86o0eg::5MQCuuDnT9W9YNNBINcF3Q` |

### OrderFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Feedback Order | POST | `/v2/order/feedback` | `conn_mod_def::GMZezM3pH9g::LP40NBevT_SmgUDz1PnAeg` |

### PaymentFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Payment Feedback | POST | `/v2/payment/feedback` | `conn_mod_def::GMZezNZKkjg::OfRpcAkpTdu_boFOsokiHQ` |

### UserFeedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Feedback User | POST | `/v2/user/feedback` | `conn_mod_def::GMZezOplweg::D5_ssK7NQ-erVSUxpOs4fA` |

### UserResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Result | GET | `/v2/user/result` | `conn_mod_def::GMZezQKsCWA::x5cStOQAQGCwG37nmkMpzA` |

### UserScreening

| Action | Method | Path | Action id |
|---|---|---|---|
| Screen a User for Account Takeover Fraud | POST | `/v2/user/screen` | `conn_mod_def::GMZezZddlqA::qz2JsL5wTdilPfqzndnnAg` |

### VerificationResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Verification Result | GET | `/v2/verification/result` | `conn_mod_def::GMZezaPsU0g::6aKYVM2jQiC-Rm2i6b-JTw` |

### Verification

| Action | Method | Path | Action id |
|---|---|---|---|
| Send SMS Verification | POST | `/v2/verification/send` | `conn_mod_def::GMZezai7tag::jfhC2DBcQ0ert4L_3UXeow` |

### Order

| Action | Method | Path | Action id |
|---|---|---|---|
| Screen an Order | POST | `/v2/order/screen` | `conn_mod_def::GMZezeCa8pA::EAWrElHtSkCvy9plyt3dXA` |

## When a call fails

The error comes from FraudLabs Pro, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/fraudlabs-pro

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
