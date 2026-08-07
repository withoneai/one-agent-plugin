---
name: microsoft-dynamics-365-sales
description: A sales automation platform that empowers teams to build stronger customer relationships, close deals faster, and boost productivity with insights and forecasting tools. Read and write Microsoft Dynamics 365 Sales data through One: opportunity, account, contact, lead and more, 34 actions with real parameter documentation. Use whenever the user asks to look something up in Microsoft Dynamics 365 Sales, create or update a record there, or build code against the Microsoft Dynamics 365 Sales API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: microsoft-dynamics-365-sales
  generated-from: one-knowledge-base
---

# Microsoft Dynamics 365 Sales through One

A sales automation platform that empowers teams to build stronger customer relationships, close deals faster, and boost productivity with insights and forecasting tools.

One exposes Microsoft Dynamics 365 Sales through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `microsoft-dynamics-365-sales` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Microsoft Dynamics 365 Sales is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Microsoft Dynamics 365 Sales account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Opportunity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Opportunities | GET | `opportunities` | `conn_mod_def::F8E1ZfpqDCw::XHSGoOarSEOB3A2SrAhwng` |
| Get Opportunities Count | GET | `opportunities?$count=true&$select=opportunityid&$top=1` | `conn_mod_def::F8E27HWkSwo::FOu81-QvQyWF2U1i8nvT0w` |
| Get Specific Opportunity | GET | `opportunities({{id}})` | `conn_mod_def::F8E2BBTXj-Q::PQWDgKwYSl-12hX7HDhRWQ` |
| Create Multiple Opportunities | POST | `opportunities/Microsoft.Dynamics.CRM.CreateMultiple` | `conn_mod_def::F8IJy2K7mgo::FE1N_EXsTTqB1s7RTsTWnQ` |
| Create Opportunity | POST | `opportunities` | `conn_mod_def::F8E2SCURgw0::kmJXqK8bTh-cLu89De5vPw` |
| Delete Opportunity | DELETE | `opportunities({{id}})` | `conn_mod_def::F8E2dn7Mpkk::-zptM1AqQTKy975kqdnFAw` |
| Lose An Opportunity | POST | `LoseOpportunity` | `conn_mod_def::F9qgKaKj_xw::A2sX3Pe2S8SBqwG4JV9UOQ` |
| Update An Opportunity | PATCH | `opportunities({{id}})` | `conn_mod_def::F8E2Z7gmXN0::xUeMKCENRk-Fa3dd4BPvfA` |
| Update Multiple Opportunities | POST | `opportunities/Microsoft.Dynamics.CRM.UpdateMultiple` | `conn_mod_def::F8IJ8gI0PPI::ArNm7dqlS5ukuzKDTW6I9A` |
| Win An Opportunity | POST | `WinOpportunity` | `conn_mod_def::F9qfrYM5HvQ::IGxoYrXqSgquZatokB1GIA` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accounts Count | GET | `accounts?$count=true&$select=accountid&$top=1` | `conn_mod_def::F8EsC8KKreE::YcFMISm3Riqx8I8KDzPIDg` |
| Select All Accounts | GET | `accounts` | `conn_mod_def::F8EmJxwgTCw::-1G4aIv6QQCjLHz3DveNSA` |
| Select Specific Account | GET | `accounts({{id}})` | `conn_mod_def::F8Epb93Z0tU::mev3tD71SPSXqpJ6Y1cyGQ` |
| Create Account | POST | `accounts` | `conn_mod_def::F8Etj6rERKY::kCTNoJ2OQTijZW7LLhUkbQ` |
| Create Multiple Accounts | POST | `accounts/Microsoft.Dynamics.CRM.CreateMultiple` | `conn_mod_def::F8E4tTUzgvo::4-uWxNmDSMKgS7gb_02ffQ` |
| Delete an Account | DELETE | `accounts({{id}})` | `conn_mod_def::F8Eri-NVkhQ::9qzD_Tt_TV-ymlK5HUilfA` |
| Update Account | PATCH | `accounts({{id}})` | `conn_mod_def::F8Eq49qhDEI::1Jq870aJQ0KnQxCFXQXwHg` |
| Update Multiple Accounts | POST | `accounts/Microsoft.Dynamics.CRM.UpdateMultiple` | `conn_mod_def::F8E6LFh5Ek8::MLDni72YQ_ePq8r9lj-ZCA` |

### Contact

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Contacts | GET | `contacts?$count=true&$select=contactid&$top=1` | `conn_mod_def::F8Et7hxG4Ms::6YYhFl4qTrO6wYUPGMkXdQ` |
| Get A Specific Contact | GET | `contacts({{id}})` | `conn_mod_def::F8EtvLyYmBw::NC3kjG_GQ-S7umL35LQ3cA` |
| Get All Contacts | GET | `contacts` | `conn_mod_def::F8EtCu65Wdk::mRFNH6-EQEauiz4TWjk7xw` |
| Create A Contact | POST | `contacts` | `conn_mod_def::F8Es4vHAA2A::SizoNJ68R_GW3vMAQIV1UQ` |
| Create Multiple Contacts | POST | `contacts/Microsoft.Dynamics.CRM.CreateMultiple` | `conn_mod_def::F8IJKejh9K8::ssnVjXi0TNqnk4rxf9oNwg` |
| Delete A Contact | DELETE | `contacts({{id}})` | `conn_mod_def::F8Et3l4wCi4::q4ZpO7S8TKKUwj2RnfxSyw` |
| Update A Contact | PATCH | `contacts({{id}})` | `conn_mod_def::F8EuJs9-w9w::TWPD6uCIQICPAVGyxc0g7Q` |
| Update Multiple Contacts | POST | `contacts/Microsoft.Dynamics.CRM.UpdateMultiple` | `conn_mod_def::F8IJS2FuTaw::BhipnMuMT-moWEDm2RQ-rw` |

### Lead

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Leads | GET | `leads` | `conn_mod_def::F8E0J1Rl15M::xqFwpy7nSzKFNSB71sOLTQ` |
| Get Leads Count | GET | `leads?$count=true&$select=leadid&$top=1` | `conn_mod_def::F8E0s5OId8c::d7Kn88VWSAicFCvPgfZYWg` |
| Retrieve Specific Lead | GET | `leads({{id}})` | `conn_mod_def::F8E0cg0eg4k::zXwLp9PPTly2yXZM2349Jg` |
| Create A Lead | POST | `leads` | `conn_mod_def::F8E03L1fvIc::2JeQ_tfnTN-z-UDPnC2sMw` |
| Create Multiple Leads | POST | `leads/Microsoft.Dynamics.CRM.CreateMultiple` | `conn_mod_def::F8IJfoEOgOo::gsur-HUcQ0S0CC0T_bJ27Q` |
| Delete Lead | DELETE | `leads({{id}})` | `conn_mod_def::F8E1Fh8pKLA::06njLW4dS62Sajwb5GQHRw` |
| Update Lead | PATCH | `leads({{id}})` | `conn_mod_def::F8E09_C4-hQ::Xvt-TjdDS2OForduT_UJhg` |
| Update Multiple Leads | POST | `leads/Microsoft.Dynamics.CRM.UpdateMultiple` | `conn_mod_def::F8IJm_0thmo::s32OF2JfRdeCY7y4pC8BVg` |

## When a call fails

The error comes from Microsoft Dynamics 365 Sales, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/microsoft-dynamics-365-sales

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
