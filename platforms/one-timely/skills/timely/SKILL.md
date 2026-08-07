---
name: timely
description: Timely is an automatic time tracking platform for consultancies, agencies, SaaS, and professional services businesses that captures work activity, supports billing and invoicing, and provides reporting, capacity planning, and operational insights to improve utilization, productivity, and profitability. Read and write Timely data through One: teams, users, forecasts, timeentries, projects, webhooks and more, 76 actions with real parameter documentation. Use whenever the user asks to look something up in Timely, create or update a record there, or build code against the Timely API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: timely
  generated-from: one-knowledge-base
---

# Timely through One

Timely is an automatic time tracking platform for consultancies, agencies, SaaS, and professional services businesses that captures work activity, supports billing and invoicing, and provides reporting, capacity planning, and operational insights to improve utilization, productivity, and profitability.

One exposes Timely through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `timely` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Timely is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Timely account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Details | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams/{{id}}` | `conn_mod_def::GMPtPvI90Ig::zKfZ06rGSTuqfXZVCYbCuA` |
| List Teams for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams` | `conn_mod_def::GMPtPWaX2YA::kM7ILsQySNSQrFOmfbsHBg` |
| Search Teams for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams/search` | `conn_mod_def::GMPtPuCU0Yg::-aFr_iKwTRuhgp3GVVTMGw` |
| Create a Team for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams` | `conn_mod_def::GMPtPtCIjrA::kxy_wpgVTT6sXjlTNAREXg` |
| Delete a Team | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams/{{id}}` | `conn_mod_def::GMPtPuqSVDA::LQIjn8wdTE-20QS-xjqNEg` |
| Patch a Team | PATCH | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams/{{id}}` | `conn_mod_def::GMPtPvFzi0g::9XSBsF7YQFS4Qcz4w1pv4A` |
| Update a Team | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/teams/{{id}}` | `conn_mod_def::GMPtP3pNimg::WhTS8XyiRdaxIyZnIvsocA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Details | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/{{id}}` | `conn_mod_def::GMPtQA8sE0g::JBxH8aR8Rw-l1yuRcXeE2g` |
| Get the Current User for a Workspace | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/current` | `conn_mod_def::GMPtP1bZ-qg::d0NHn2wURYC0Rr9EwyP6UQ` |
| List a Workspace's Users | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users` | `conn_mod_def::GMPtQCKuK5A::Ia8QwBL-S0eEISNfkHtcwA` |
| Search Workspace Users | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/search` | `conn_mod_def::GMPtQA5pCZg::gzlb57kESY-hS3eUCocGRQ` |
| Delete a User from an Account | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/{{id}}` | `conn_mod_def::GMPtP2kF5Ug::mO5JNmKbSTKuWjBYWsMrwg` |
| Invite a User to an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users` | `conn_mod_def::GMPtQAycZ7g::KPSRQj0JQK23kKsRZ_8J_w` |
| Update a User | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/{{id}}` | `conn_mod_def::GMPtQBvewxA::AIsFmm1SRVaRBtZNOOpq1A` |

### Forecasts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forecasts for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts` | `conn_mod_def::GMPtOjbKAlg::ztVMeackQ1O15SHtICSnLw` |
| Show a Forecast Task | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts/{{id}}` | `conn_mod_def::GMPtOq8e6Qg::1gFJq_bGSO6U-mNVSLybfA` |
| Summary Using Forecasts Resource | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts/{{resource}}/summary` | `conn_mod_def::GMPtOsvnOhg::YGD3tNuLSj-26ZjdLR_fDw` |
| Create a Task for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts` | `conn_mod_def::GMPtOj_stWA::Urir5_2DQZiNz82OWU71Og` |
| Delete a Forecast Task | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts/{{id}}` | `conn_mod_def::GMPtOidOUzg::J2xx6pCMRNymM06P4m9EkQ` |
| Update a Forecast Task | PATCH | `/1.1/{{OAUTH_METADATA.meta.accountId}}/forecasts/{{id}}` | `conn_mod_def::GMPtOsw9eDg::y1hfq2FnQZuam2dCDF7K5A` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Entries for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours` | `conn_mod_def::GMPtOcMKcqg::V9qAshrFTNi4JgW4LTpV_g` |
| Bulk Import Time Entries for a Workspace | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/bulk/hours` | `conn_mod_def::GMPtNsNK6iA::PaNEsPI1TxyQULhFDYAcqA` |
| Create a Time Entry for a Timely Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours` | `conn_mod_def::GMPtObGLToA::ySMVPLf8QguZB0nfnwzM2g` |
| Stop a Time Entry Timer | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/{{id}}/stop` | `conn_mod_def::GMPtOZsrGKA::Ive2EYdOSJS6jdp2dDbDvw` |
| Update a Time Entry for an Account | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/{{id}}` | `conn_mod_def::GMPtOkj9epA::W0jJx2QjQ4yeSoMGqmZtTQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Projects | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/projects` | `conn_mod_def::GMPtPGWHcGA::DdzERSqHRgyTmp7u0OzfKA` |
| Show a Project | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/projects/{{id}}` | `conn_mod_def::GMPtPGC67GA::qmjDG3TRTuqFiwAQ3wrc0w` |
| Create a Project for a Timely Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/projects` | `conn_mod_def::GMPtPGZtpfg::WD-N5KOjTm-ZgdwoQO2rCw` |
| Delete a Project | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/projects/{{id}}` | `conn_mod_def::GMPtPDJ0Mqg::YQXa9lrRSPuYrDA_8TfH2w` |
| Update a Project | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/projects/{{id}}` | `conn_mod_def::GMPtPMe96Qg::kUcl245OR92YwM_TWuv0uA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Webhooks | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/webhooks` | `conn_mod_def::GMPtQKJzvAA::kXXIhzvgSWaCidQee3jSmQ` |
| Show a Webhook for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/webhooks/{{id}}` | `conn_mod_def::GMPtQNkRh9g::tIRI0Od6Sl6tc2JWh01T3g` |
| Create a Webhook for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/webhooks` | `conn_mod_def::GMPtQIww7Xg::88uMPygQQXSrcmBDNrpTVQ` |
| Delete a Webhook | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/webhooks/{{id}}` | `conn_mod_def::GMPtQN8WxnA::A9YFU7S9RQi9M3umMwskdg` |
| Update a Webhook for an Account | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/webhooks/{{id}}` | `conn_mod_def::GMPtQUAXWxA::zpSegg7xTaqiX_f70XLtag` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Client Details | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/clients/{{id}}` | `conn_mod_def::GMPtNsmiREA::cg2FWS78QW6d-UdkV-Emuw` |
| List Clients for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/clients` | `conn_mod_def::GMPtN8zADXg::oPvbV-FqSO2KTGWGyZbe9Q` |
| Create a Client for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/clients` | `conn_mod_def::GMPtNq5Re-g::O7g-t_6uTAqbGouHmnzzpA` |
| Update a Client | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/clients/{{id}}` | `conn_mod_def::GMPtNri_ixA::6ynvgs6kRjuyfcKWWTPQiA` |

### TimeEntryStates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Entry States for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/states` | `conn_mod_def::GMPtOQ2rBVg::OKELtWEQRIizHcOrfSqZNw` |
| Create a Time Entry State for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/states` | `conn_mod_def::GMPtOHC482g::gxHRXbTWRLqEdFEyelLk1A` |
| Delete a Time Entry State | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/states/{{id}}` | `conn_mod_def::GMPtOSKJv6A::1Mq_l9mAQ7mz0yydOqiNDg` |
| Update a Time Entry State for an Account | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/states/{{id}}` | `conn_mod_def::GMPtOQVMfRA::mN5MNzXyStKSKB-jCWfbfA` |

### States

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's States | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states` | `conn_mod_def::GMPtOQADwEg::uw5a4p-XTxG1gmRd_k3XKw` |
| Create a State for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states` | `conn_mod_def::GMPtOHSvP5A::lxB-IqzsQz6gT6akm5XSGw` |
| Delete a State | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states/{{id}}` | `conn_mod_def::GMPtOJYNvng::U2bVBnz8TpSGXhoCl9olJA` |
| Update a State | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states/{{id}}` | `conn_mod_def::GMPtORoB5Tg::UIBxaXSsQGKIxRjA6HhMaw` |

### DayProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Day Properties for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/day_properties` | `conn_mod_def::GMPtN7gdfYg::ozS-CeWORr65v0kkUlaHyw` |
| Create or Update Day Properties for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/day_properties` | `conn_mod_def::GMPtN7uImOA::U91hYqyzSbKrMLvk4jE9Iw` |
| Update Day Properties for an Account | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/day_properties` | `conn_mod_def::GMPtOAfskQA::2JsHQVT_RAe7He8kdbpXdg` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Tag for an Account | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/labels` | `conn_mod_def::GMPtPNA-aKA::QAaacZt-Q7uh3eGpsrHOfg` |
| Delete a Tag from an Account | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/labels/{{id}}` | `conn_mod_def::GMPtPZUpPIA::SZFFkyxYTIC8toNE-B7fpQ` |
| Update a Tag | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/labels/{{id}}` | `conn_mod_def::GMPtPl3Wc3g::uSeGE7ErQXe2hWHc720-lA` |

### StatePermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update State Permissions for an Account State | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states/{{stateId}}/permissions` | `conn_mod_def::GMPtOJ1LPpA::C3rMqzlJSryAyBr4NIlNEw` |
| Delete State Permissions for an Account State | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/states/{{stateId}}/permissions/{{id}}` | `conn_mod_def::GMPtOIKYa7g::cZDSjNG3TuqPm-oNcVOcUw` |

### TimeEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Show a Time Entry | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/{{id}}` | `conn_mod_def::GMPtOkl3ZYA::P4S2_1pHS-2WP1QN-Cd2Dw` |
| Delete a Time Entry | DELETE | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/{{id}}` | `conn_mod_def::GMPtOZgsQCA::HG-L34A0ReqxxwY93W1M9g` |

### OauthToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange Authorization Code for Access Token | POST | `/1.1/oauth/token` | `conn_mod_def::GMPtOsXkcGg::Ko8iPg2IQK-QOwqvW10IUA` |
| Revoke Access Token | POST | `/1.1/oauth/revoke` | `conn_mod_def::GMPtOzAONDg::kew_74z_TH-hH_z2mM1jdA` |

### AuthorizedApplications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Authorized Applications | GET | `/1.1/oauth/authorized_applications` | `conn_mod_def::GMPtO3dqqsg::d0INB2fsR4-lePbtPsubAg` |
| Revoke Application Authorization | DELETE | `/1.1/oauth/authorized_applications/{{id}}` | `conn_mod_def::GMPtO3Akh8A::eaF_Gw2MQrWwldLYDZ6hqw` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Filter Reports for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/reports/filter` | `conn_mod_def::GMPtPPCvENA::RFBJG6jGTaW6o7lwgVpNSw` |
| Get Report Totals for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/reports` | `conn_mod_def::GMPtPN2K7zg::ye0AImS4Q8KXUJ0-Gv2AEw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Tag for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/labels/{{id}}` | `conn_mod_def::GMPtPVqcb7A::ZAolmYEQTAKAJFHfi6zREA` |
| List Tags for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/labels` | `conn_mod_def::GMPtPW4RqwA::mH5tbxiCS6Wohv4YZvb2tg` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Import Events for a Workspace | POST | `/1.1/{{OAUTH_METADATA.meta.accountId}}/bulk/events` | `conn_mod_def::GMPtNyGe6Ng::YO1OX3lZST65Fl3_29lVmQ` |

### UserComplianceMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Compliance Metrics | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/compliance` | `conn_mod_def::GMPtN5yctCA::Eaj5PvlCS0Oi0dICXFwILw` |

### TimeEntryTimer

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Time Entry Timer | PUT | `/1.1/{{OAUTH_METADATA.meta.accountId}}/hours/{{id}}/start` | `conn_mod_def::GMPtOZ4V4Gg::KVBJbM-9Qp2Pz8jDnKJj6A` |

### CurrentTokenInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Token Info | GET | `/1.1/oauth/token/info` | `conn_mod_def::GMPtOsvMP9g::EOrPcItsTSi1s8FRWq1tQQ` |

### UsersPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Permissions | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/{{userId}}/permissions` | `conn_mod_def::GMPtOznUieA::NvZtTr-dSrmy44l9b9YfjA` |

### OauthAccessToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Introspect an OAuth Access Token | POST | `/1.1/oauth/introspect` | `conn_mod_def::GMPtO9j7-jA::Nc8siV51RLifl-59Y5952A` |

### CurrentUserPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Current User Permissions | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/current/permissions` | `conn_mod_def::GMPtPGFf1yA::q79uEXoTQR-JoO96c15cKw` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Roles | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/roles` | `conn_mod_def::GMPtPML39Lg::iY07ytcBTwOYdwb5Xo_Ziw` |

### UserCapacities

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Capacities for an Account | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/capacities` | `conn_mod_def::GMPtP2ZZzGA::HwfRGWwjTtSyAB3a3qTszg` |

### Capacities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Capacities | GET | `/1.1/{{OAUTH_METADATA.meta.accountId}}/users/{{userId}}/capacities` | `conn_mod_def::GMPtP2jaGlg::pQ8ZVj3LSpy2PE_WbCBVBQ` |

### WebhookEventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Event Types | GET | `/webhook-events` | `conn_mod_def::GMPtQN4Tb9A::rAVgXcyuQ8e1TSxsW6Oblg` |

## When a call fails

The error comes from Timely, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/timely

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
