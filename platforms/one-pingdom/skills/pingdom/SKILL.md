---
name: pingdom
description: Pingdom is a website monitoring platform that provides uptime checks, performance monitoring, transaction testing, and real user insights, allowing teams to detect outages, measure site speed, and troubleshoot availability issues through alerts, dashboards, and integrations. Read and write Pingdom data through One: checks, maintenanceoccurrences, contacts, maintenance, alertingteams, transactioncheck and more, 50 actions with real parameter documentation. Use whenever the user asks to look something up in Pingdom, create or update a record there, or build code against the Pingdom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pingdom
  generated-from: one-knowledge-base
---

# Pingdom through One

Pingdom is a website monitoring platform that provides uptime checks, performance monitoring, transaction testing, and real user insights, allowing teams to detect outages, measure site speed, and troubleshoot availability issues through alerts, dashboards, and integrations.

One exposes Pingdom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pingdom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Pingdom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Pingdom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Checks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Check | GET | `/api/3.1/checks/{{checkId}}` | `conn_mod_def::GMPuc2ti53A::LFLEzNOPQP26v4No1RUFMQ` |
| List Checks | GET | `/api/3.1/checks` | `conn_mod_def::GMPuc5ARf6A::L9scO-TwTT2Ty5g4mhAs8w` |
| Create a Check | POST | `/api/3.1/checks` | `conn_mod_def::GMPucta2U6A::dBvP64sUQCu4yN7nQ4TiTg` |
| Delete a Check | DELETE | `/api/3.1/checks/{{checkId}}` | `conn_mod_def::GMPucuFouuA::Jex9t2fkTO23qkIbVRPD7g` |
| Delete Checks | DELETE | `/api/3.1/checks` | `conn_mod_def::GMPuc3iuj2A::z9sac8ArSXeS3wjFN0Sfxg` |
| Modify a Check | PUT | `/api/3.1/checks/{{checkId}}` | `conn_mod_def::GMPuc2xeBJg::qKkwTtMLQK2UIptS8Ae85A` |
| Pause or Change Resolution for Multiple Checks | PUT | `/api/3.1/checks` | `conn_mod_def::GMPuc2fwzwg::YI-KBB_nSNeXkLBVbV8xWw` |

### MaintenanceOccurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Maintenance Occurrence | GET | `/api/3.1/maintenance.occurrences/{{id}}` | `conn_mod_def::GMPudtGuEfA::vLzOtyiXTD6EsMT3gTRHZA` |
| List Maintenance Occurrences | GET | `/api/3.1/maintenance.occurrences` | `conn_mod_def::GMPud2dlDPg::zy0wNx94Rx6HC48ClUxX_g` |
| Delete a Maintenance Occurrence | DELETE | `/api/3.1/maintenance.occurrences/{{id}}` | `conn_mod_def::GMPudX_0v7g::nxjSA-8vRimpgqJI7DQ1Jg` |
| Delete Maintenance Occurrences | DELETE | `/api/3.1/maintenance.occurrences` | `conn_mod_def::GMPudXR83cg::2e6-TvxARSqzFb4_wU-MNw` |
| Modify a Maintenance Occurrence | PUT | `/api/3.1/maintenance.occurrences/{{id}}` | `conn_mod_def::GMPud0gkaOg::zHQOznvtRxGnoAyLWwIdwQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact with Its Contact Methods | GET | `/api/3.1/alerting/contacts/{{contactid}}` | `conn_mod_def::GMPudAvZwvA::AQU9kVeuSfeDsXjAR0Qg_w` |
| List Contacts | GET | `/api/3.1/alerting/contacts` | `conn_mod_def::GMPuc_hhwLA::aWi8XB-ORpiZVHJqszz5aQ` |
| Create a Contact | POST | `/api/3.1/alerting/contacts` | `conn_mod_def::GMPuc_YcXMA::NAvINZ7RTNyXURLGGOfsbw` |
| Delete a Contact | DELETE | `/api/3.1/alerting/contacts/{{contactid}}` | `conn_mod_def::GMPudAFO0UA::j6_6gdkQRtOaZFzLLG-wgw` |
| Update a Contact | PUT | `/api/3.1/alerting/contacts/{{contactid}}` | `conn_mod_def::GMPuc_WSKdg::g5KZ6g5rQ16PIMzLCZ1kaw` |

### Maintenance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Maintenance Window | GET | `/api/3.1/maintenance/{{id}}` | `conn_mod_def::GMPudHGu0qA::7wYN22xOSTSZ6v8OGv3gDQ` |
| List Maintenance Windows | GET | `/api/3.1/maintenance` | `conn_mod_def::GMPudJiLvIA::aYHZQ9kMSbS1QRfc75sU8w` |
| Create a Maintenance Window | POST | `/api/3.1/maintenance` | `conn_mod_def::GMPudXRqpbg::ewZd6pbCRvGNBaVFP_PqdQ` |
| Modify a Maintenance Window | PUT | `/api/3.1/maintenance/{{id}}` | `conn_mod_def::GMPudX7W0IA::uwJ2q07QRsWp3VV5hIbC9A` |

### AlertingTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Alerting Team | GET | `/api/3.1/alerting/teams/{{teamid}}` | `conn_mod_def::GMPueKHTmnA::n8iNJuQwTeiksbRtyHif2w` |
| List Alerting Teams | GET | `/api/3.1/alerting/teams` | `conn_mod_def::GMPueI2A3Bg::RQ5WCfcyQci1cn1a3w-_ZQ` |
| Delete an Alerting Team | DELETE | `/api/3.1/alerting/teams/{{teamid}}` | `conn_mod_def::GMPueIgC-dg::y5wndcP_Riu2myvX-LSQ5w` |
| Update an Alerting Team | PUT | `/api/3.1/alerting/teams/{{teamid}}` | `conn_mod_def::GMPueRj69dA::ns4DwuzCRziWDGyv_ZD0AQ` |

### TransactionCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction Check | GET | `/api/3.1/tms/check/{{cid}}` | `conn_mod_def::GMPuem9UJlg::En46u1GWTv27oSl1bbEpSw` |
| Create a Transaction Check | POST | `/api/3.1/tms/check` | `conn_mod_def::GMPueRGfK9A::0YSIFwL5TvehsWTOHY8t9Q` |
| Modify a Transaction Check | PUT | `/api/3.1/tms/check/{{cid}}` | `conn_mod_def::GMPueQ3rmbA::RQOQjzqPSBSAiaJYMAsHig` |

### TransactionChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transaction Checks | GET | `/api/3.1/tms/check` | `conn_mod_def::GMPueSSmMEg::R5uqBXBFSOuyifkpN8qOfA` |
| Delete a Transaction Check | DELETE | `/api/3.1/tms/check/{{cid}}` | `conn_mod_def::GMPueRBFRQg::5fZ1hRX1RXyz17SbL6yp7w` |

### Probes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pingdom Probe Servers | GET | `/api/3.1/probes` | `conn_mod_def::GMPud0XLHzg::tBRwOfBxQt6gdAAihTOJQg` |
| List Probes for a Check | GET | `/api/3.1/summary.probes/{{checkid}}` | `conn_mod_def::GMPueISwQLA::_cbH18UnRDSoP5xGXA7CCg` |

### AnalysisResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Analysis Result | GET | `/api/3.1/analysis/{{checkid}}/{{analysisid}}` | `conn_mod_def::GMPucszez4g::_shWKstjSEGLSFFPBL7aJA` |

### SingleCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Single Check | GET | `/api/3.1/single` | `conn_mod_def::GMPueAF8Keg::g0OLi7MATIWzEteCB7bfsw` |

### MaintenanceWindow

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Maintenance Window | DELETE | `/api/3.1/maintenance/{{id}}` | `conn_mod_def::GMPudG_hdUA::RLM1x7LyRhWiTMp_F7HOBQ` |

### PerformanceSummarySubintervals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Performance Summary Subintervals for a Check | GET | `/api/3.1/summary.performance/{{checkId}}` | `conn_mod_def::GMPueCHa7BA::j1XrUWGPTkCCOPJXZCaIjw` |

### RootCauseAnalyses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Root Cause Analyses for a Check | GET | `/api/3.1/analysis/{{checkid}}` | `conn_mod_def::GMPuctmThtg::FVfjjT4QTfO-PjNrVBhBiQ` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Actions Alerts | GET | `/api/3.1/actions` | `conn_mod_def::GMPucv1C13g::pkSBGTYpQU-rpAVoD-mPuQ` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Credits Information | GET | `/api/3.1/credits` | `conn_mod_def::GMPudHSjSuA::X5K-jHo9SAeY28HUV-LtRw` |

### MaintenanceWindows

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Multiple Maintenance Windows | DELETE | `/api/3.1/maintenance` | `conn_mod_def::GMPudQnrsVA::dZNbUE2FRCe1lhP6k6YTfw` |

### OutageSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outage Summary for a Check | GET | `/api/3.1/summary.outage/{{checkid}}` | `conn_mod_def::GMPud-PM0FA::1WnuwpGIRiyzlAEdvd9VTg` |

### HoursOfDaySummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hours-of-Day Summary for a Check | GET | `/api/3.1/summary.hoursofday/{{checkid}}` | `conn_mod_def::GMPud-h3svA::3aXp8vZzSPyAmiT1ZixKHw` |

### ReferenceData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reference Data | GET | `/api/3.1/reference` | `conn_mod_def::GMPudze7OQA::mnfDy1tKSpinJURXmUUEdA` |

### RawTestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| List Raw Test Results for a Check | GET | `/api/3.1/results/{{checkid}}` | `conn_mod_def::GMPud2MGL0g::cAvHpujaSyCg89CLvHXI9g` |

### SummaryAverage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Average Summary for a Check | GET | `/api/3.1/summary.average/{{checkid}}` | `conn_mod_def::GMPud9yieng::UAt02h2iR5m2Gmz0bwd9eQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team | POST | `/api/3.1/alerting/teams` | `conn_mod_def::GMPueIY47CA::KznrIRCRTrONom2OiAj8_Q` |

### Traceroute

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Traceroute | GET | `/api/3.1/traceroute` | `conn_mod_def::GMPueYfUN_A::l1YCP1XWTYiruh_a9BlAbw` |

### TransactionCheckPerformanceReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction Check Performance Report | GET | `/api/3.1/tms/check/{{checkId}}/report/performance` | `conn_mod_def::GMPueZmFtrg::voQjP8-4QPeRUG60_w2l5Q` |

### TransactionCheckStatusChangeReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transaction Check Status Change Report | GET | `/api/3.1/tms/check/{{checkId}}/report/status` | `conn_mod_def::GMPueaJvSMA::F50ABJZLQCum2j38lr8gPA` |

### StatusChangeReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Status Change Reports for All Transaction Checks | GET | `/api/3.1/tms/check/report/status` | `conn_mod_def::GMPueaZS0Dg::SsyHxMvzSUGmB5izFMz4JQ` |

## When a call fails

The error comes from Pingdom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pingdom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
