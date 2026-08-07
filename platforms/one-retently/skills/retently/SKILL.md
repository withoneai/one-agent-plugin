---
name: retently
description: Retently is a customer feedback and survey platform that enables businesses to collect Net Promoter Score, CSAT, and CES responses, automate feedback workflows, and analyze customer sentiment through integrations and reporting to improve retention and customer experience. Read and write Retently data through One: customers, feedback, suppressions, campaigns, companies, outbox and more, 37 actions with real parameter documentation. Use whenever the user asks to look something up in Retently, create or update a record there, or build code against the Retently API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: retently
  generated-from: one-knowledge-base
---

# Retently through One

Retently is a customer feedback and survey platform that enables businesses to collect Net Promoter Score, CSAT, and CES responses, automate feedback workflows, and analyze customer sentiment through integrations and reporting to improve retention and customer experience.

One exposes Retently through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `retently` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Retently is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Retently account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Customer by ID | GET | `/api/v2/customers/{{customerId}}` | `conn_mod_def::GMBBSdHbD0s::IGny1p_jSd274QQPgpprNQ` |
| Get Customers | GET | `/api/v2/customers` | `conn_mod_def::GMBBSd-iWX8::4B3iYojMRrSMpj-0y7dBHw` |
| Create or Update Customers | POST | `/api/v2/customers` | `conn_mod_def::GMBBSXXTMFI::s8cynn5xQj6dmAmccbl5uQ` |
| Delete Customers | DELETE | `/api/v2/customers` | `conn_mod_def::GMBBSWvmEh8::GHnHqhTrRoSHYC6xUD7ThA` |
| Resubscribe Customers | POST | `/api/v2/customers/resubscribe` | `conn_mod_def::GMBBSdv9j2U::DSk-MMs3SRCxLWgvlNf3YQ` |
| Unsubscribe Customers | POST | `/api/v2/customers/unsubscribe` | `conn_mod_def::GMBBSdw-y-Y::CqBUwApZQtyMW8TDnkgFBQ` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Feedback | GET | `/api/v2/feedback` | `conn_mod_def::GMBBSkhCzEA::DW2GpXZNQouLBXALkMTo-g` |
| Get Feedback by ID | GET | `/api/v2/feedback/{{feedbackId}}` | `conn_mod_def::GMBBSkH2KAE::Ph-q3JJ9QCWxSebStuETXQ` |
| Delete Feedback Records | DELETE | `/api/v2/feedback` | `conn_mod_def::GMBBSdlKOqA::jeHhTF6NQ32T_rollIDZwg` |
| Import Feedback | POST | `/api/v2/import` | `conn_mod_def::GMBBSk6PLzg::zL_30Q7-Tk2hA9q2d7oYMA` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Suppressed Email | POST | `/api/v2/suppressions/emails` | `conn_mod_def::GMBBTpyju9g::5LL5jtw5Scy46YQjhHnJDA` |
| Remove a Suppressed Domain | DELETE | `/api/v2/suppressions/domains/{{id}}` | `conn_mod_def::GMBBTplqXZE::NQ8IBXudR4GqvMyhgYSddA` |
| Remove Suppressed Email | DELETE | `/api/v2/suppressions/emails/{{id}}` | `conn_mod_def::GMBBTwIvoMI::p3naBO2uTqqqsjJ9zRP5PA` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaigns | GET | `/api/v2/campaigns` | `conn_mod_def::GMBBSV4ml7E::VPZo6TPlQQGfSGRTnrVNWg` |
| Get Campaigns | GET | `/api/v2/nps/campaigns` | `conn_mod_def::GMBBSkAwqtE::9qWdxmu3R9OXpwdU7Bl3Fg` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company by ID or Domain | GET | `/api/v2/companies/{{companyIdOrDomain}}` | `conn_mod_def::GMBBSWsKV3Q::FQxTgfbBS9imP3N7d0ZWbA` |
| Get Companies | GET | `/api/v2/companies` | `conn_mod_def::GMBBSWDS0hI::hFxcjvjrRxixBMYkyZQ_6w` |

### Outbox

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbox | GET | `/api/v2/outbox` | `conn_mod_def::GMBBTQltwOY::m-NDUOjlR2CaWAhXAbyxLg` |
| Delete Outbox Records | DELETE | `/api/v2/outbox` | `conn_mod_def::GMBBSre-u2E::vfbkZIICTN-COzlU55j_ww` |

### SuppressedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suppressed Domains | GET | `/api/v2/suppressions/domains` | `conn_mod_def::GMBBTpmFiLg::yKQ6wwkfR0yZe42SHqIPzQ` |
| Add Suppressed Domain | POST | `/api/v2/suppressions/domains` | `conn_mod_def::GMBBTXCpL54::1mjYIRSqTSqHk7LraGDNCg` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template by ID | GET | `/api/v2/templates/{{templateId}}` | `conn_mod_def::GMBBTvX_ROM::nXSIY23NSNSNArva4bOjLg` |
| Get Templates | GET | `/api/v2/templates` | `conn_mod_def::GMBBTvTer80::qYl3_YMCQrqNa0gXCRa4AQ` |

### Scores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Score for a Metric | GET | `/api/v2/{{metric}}/score` | `conn_mod_def::GMBBSkC136Q::eomfkxvfTYServERjQPiQA` |

### FeedbackTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Feedback Tags | POST | `/api/v2/nps/customers/response/tags` | `conn_mod_def::GMBBSqpXOuk::dDPeHeuaRGOEqfOhUXKv3g` |

### NpsTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Nps Templates | GET | `/api/v2/nps/templates` | `conn_mod_def::GMBBSq3q5JI::NQ4iffcjRqqkTxkItRnLvA` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Responses | GET | `/api/v2/nps/customers/response` | `conn_mod_def::GMBBSrRTVV4::bel216vUQECdIeYM-8-0CA` |

### NpsCustomers

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Survey for NPS Customers | POST | `/api/v2/nps/customers/survey` | `conn_mod_def::GMBBS4153EA::LEm7gh6MRdez9bidBf7KpQ` |

### ResponseTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Feedback Tags | POST | `/api/v2/response/tags` | `conn_mod_def::GMBBS-kKD2U::JwyMDA6xRh2Tp9AT5snjBA` |

### AccountStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Status | GET | `/api/v2/ping` | `conn_mod_def::GMBBS-qmLEQ::zZE5Zm-NSM-GEdL4m3kKYg` |

### CampaignReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Campaign Reports | GET | `/api/v2/reports/{{campaignId}}` | `conn_mod_def::GMBBS_aDf1I::SETj3HGwSNql9ok23_nljg` |

### FeedbackTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Feedback Topics | POST | `/api/v2/response/topics` | `conn_mod_def::GMBBS_dIO3Y::2bebLqdKTzuaUN9Dy_5jqg` |

### SuppressedEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Suppressed Emails | GET | `/api/v2/suppressions/emails` | `conn_mod_def::GMBBTp4hZuA::whflo9iEQyOp0yeJjCJcAw` |

### Survey

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Transactional Survey | POST | `/api/v2/survey` | `conn_mod_def::GMBBTvLD6ek::6k8_wW-gTrymJ3Fci0hKqg` |

### SyncAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Sync Attributes | POST | `/api/v2/sync-attributes` | `conn_mod_def::GMBBTvhtG-g::iAIEjNXLTByuayD27VZMmA` |

### TrendGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trend Groups | GET | `/api/v2/trends` | `conn_mod_def::GMBBT18j01E::wmtWtSJSTWKrNdeKlED2bw` |

### Trends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trends of a Group | GET | `/api/v2/trends/{{groupId}}` | `conn_mod_def::GMBBT2gzaPM::7m27yYNrRp-0Ycwv2_femw` |

## When a call fails

The error comes from Retently, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/retently

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
