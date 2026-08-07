---
name: a-leads
description: A-Leads is a lead generation and data enrichment platform that provides business contact data, prospecting tools, and outreach support, allowing sales and marketing teams to identify qualified leads, enrich company and contact records, and support targeted pipeline development. Read and write A-Leads data through One: companysearch, reverseemaillookup, advancedsearch, bulkfilestatus, bulkadvancedsearch, company and more, 14 actions with real parameter documentation. Use whenever the user asks to look something up in A-Leads, create or update a record there, or build code against the A-Leads API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: a-leads
  generated-from: one-knowledge-base
---

# A-Leads through One

A-Leads is a lead generation and data enrichment platform that provides business contact data, prospecting tools, and outreach support, allowing sales and marketing teams to identify qualified leads, enrich company and contact records, and support targeted pipeline development.

One exposes A-Leads through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `a-leads` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm A-Leads is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real A-Leads account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CompanySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Similar Companies | POST | `/gateway/v1/company-search/similar` | `conn_mod_def::GK68Nk-cm1E::tAjR8sfJS9SjeQ_0Gvw45w` |
| Perform Bulk Company Search | POST | `/company-search/bulk` | `conn_mod_def::GK68Ny12J9k::SWGg6Jk8Tt2sYzs6kOcQdA` |

### ReverseEmailLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Status | GET | `/reverse-email-lookup/status/{{jobId}}` | `conn_mod_def::GK68NZ4kjIQ::Mqq4nlZZTvOr4GUOP7IE7w` |
| Verify an Email with Reverse Email Lookup | POST | `/reverse-email-lookup/verify` | `conn_mod_def::GK68NlUXL4w::JMQrBjY2Q5avIkDd6nMhZQ` |

### AdvancedSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform an Advanced Search | POST | `/advanced-search` | `conn_mod_def::GK68NJ9JLq8::YbTSZJx2TRiMw2EX-iqOFw` |

### BulkFileStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk File Status | POST | `/search/get-bulk-file` | `conn_mod_def::GK68NLUWsyo::vQXwchVrT1iPhyJM4gR_Yw` |

### BulkAdvancedSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Advanced Search | POST | `/search/bulk-advanced-search` | `conn_mod_def::GK68NLgQud8::5QyiB43qQiWNWt7QnIE7qQ` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Details by ID | GET | `/company-search/{{id}}` | `conn_mod_def::GK68NRLh3Lo::BSlzAxZZRE2V6dXu9fxORg` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Companies | POST | `/company-search/` | `conn_mod_def::GK68NMQtOFI::SwXEi-O4Rl6YuvIiOvXLdg` |

### PhoneSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Phone Number | POST | `/gateway/v1/search/find-phone` | `conn_mod_def::GK68NZ8ZT9k::2IG_RdjcS0SnPA8T3PKu2w` |

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Email | POST | `/search/verify-email` | `conn_mod_def::GK68Njo62yY::gVtfVz7_ROmW3T3pdzWIPQ` |

### PersonalEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Personal Email | POST | `/gateway/v1/search/find-email/personal` | `conn_mod_def::GK68NaQwArA::HPz_lYwOSEaUpSaiFOCCfQ` |

### BulkFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Bulk Files | POST | `/gateway/v1/search/get-all-bulk-files` | `conn_mod_def::GK68Na7HhgE::dgdYM8V0SL6ku-IeryFZSg` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Email | POST | `/gateway/v1/search/find-email` | `conn_mod_def::GK68NZvGnPQ::DXDJxIZ9QoG3-PFpAYHV4A` |

## When a call fails

The error comes from A-Leads, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/a-leads

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
