---
name: campaign-cleaner
description: Campaign Cleaner is an email verification and list hygiene platform that helps teams validate email addresses, detect risky or invalid contacts, and improve deliverability, allowing marketers and sales teams to maintain cleaner databases and reduce bounce rates in outbound campaigns. Read and write Campaign Cleaner data through One: campaigns, credits, campaignlist, campaignstatus, inboxtest, campaignpdfanalysis and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Campaign Cleaner, create or update a record there, or build code against the Campaign Cleaner API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: campaign-cleaner
  generated-from: one-knowledge-base
---

# Campaign Cleaner through One

Campaign Cleaner is an email verification and list hygiene platform that helps teams validate email addresses, detect risky or invalid contacts, and improve deliverability, allowing marketers and sales teams to maintain cleaner databases and reduce bounce rates in outbound campaigns.

One exposes Campaign Cleaner through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `campaign-cleaner` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Campaign Cleaner is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Campaign Cleaner account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Campaign | POST | `/send_campaign` | `conn_mod_def::GLMLQprsapA::luY1eyozROe4_LECPZ0DGg` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits | GET | `/v1/get_credits` | `conn_mod_def::GLMLQqOicUg::fC-yUeV4QyaiiaUU-vFhEg` |

### CampaignList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign List | GET | `/v1/get_campaign_list` | `conn_mod_def::GLMLQd9OFPA::V4Tqhh-yRASP6GrG2m5MQA` |

### CampaignStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Status | POST | `/v1/get_campaign_status` | `conn_mod_def::GLMLQd0Cc1g::7Wa8L1f0S0OSk-SCw0ShMA` |

### InboxTest

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Inbox Test | POST | `/v1/create_inbox_test` | `conn_mod_def::GLMLQcmfBqA::rDjcdwSZQYiX3VgJBAvAcw` |

### CampaignPdfAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign PDF Analysis | POST | `/get_campaign_pdf_analysis` | `conn_mod_def::GLMLQg1sZug::EOx6g--PRb29pfjWtQ9tAw` |

### InboxTestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Inbox Test Results | POST | `/v1/get_inbox_test_results` | `conn_mod_def::GLMLQpECOTg::a7mkSN1OT-GB1AcAaOIAnA` |

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign | POST | `/v1/get_campaign` | `conn_mod_def::GLMLQgrAB7A::tNx_B8jkRV-c9bfIebpnAA` |

## When a call fails

The error comes from Campaign Cleaner, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/campaign-cleaner

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
