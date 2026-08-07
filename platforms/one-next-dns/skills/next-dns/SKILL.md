---
name: next-dns
description: NextDNS is a DNS-based security and privacy platform that provides network-level ad blocking, threat protection, and content filtering, allowing developers, IT teams, and households to control internet traffic, enforce policies, and gain visibility across devices and networks. Read and write NextDNS data through One: profiles, logs, profilesprofileanalyticsdomains, profileanalyticsdestinations, analytics, timeseries and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in NextDNS, create or update a record there, or build code against the NextDNS API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: next-dns
  generated-from: one-knowledge-base
---

# NextDNS through One

NextDNS is a DNS-based security and privacy platform that provides network-level ad blocking, threat protection, and content filtering, allowing developers, IT teams, and households to control internet traffic, enforce policies, and gain visibility across devices and networks.

One exposes NextDNS through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `next-dns` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NextDNS is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NextDNS account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Nested Objects And Arrays | GET | `/profiles/{{profile}}/{{childPath}}` | `conn_mod_def::GLOiy4dUYig::wwsLiH6ZRo-r-HiCUkWkTw` |
| Profiles Profile Analytics Destinations Question Mark Type Gafam | GET | `/profiles/{{profile}}/analytics/destinations` | `conn_mod_def::GLOiyfsi-9A::45cQfcPpTRe5_3MxAfIp-g` |
| Profiles Profile Analytics Devices | GET | `/profiles/{{profile}}/analytics/devices` | `conn_mod_def::GLOiycvfqgg::8lGIlC4sRSKkg6Ewb2I0gw` |
| Profiles Profile Analytics Dnssec | GET | `/profiles/{{profile}}/analytics/dnssec` | `conn_mod_def::GLOiyehK9pg::JteUUABdRAe12HstepThoA` |
| Profiles Profile Analytics Encryption | GET | `/profiles/{{profile}}/analytics/encryption` | `conn_mod_def::GLOiynaKJ6g::OwC30n4GSXWguLitJFAkXw` |
| Profiles Profile Analytics Ip Versions | GET | `/profiles/{{profile}}/analytics/ipVersions` | `conn_mod_def::GLOiym8fs8A::g--lYA2MROSpoiJSbyucsw` |
| Profiles Profile Analytics Ips | GET | `/profiles/{{profileId}}/analytics/ips` | `conn_mod_def::GLOiynP02rA::xoXnLO93QKmJu5xgsZyibQ` |
| Profiles Profile Analytics Protocols | GET | `/profiles/{{profile}}/analytics/protocols` | `conn_mod_def::GLOiynaCgqA::7MRcB8sgRZOWvILjRUTrSg` |
| Profiles Profile Analytics Query Types | GET | `/profiles/{{profile}}/analytics/queryTypes` | `conn_mod_def::GLOiyoH3IKA::cRcsQLFhTx-D1kHS49SdrQ` |
| Profiles Profile Analytics Reasons | GET | `/profiles/{{profile}}/analytics/reasons` | `conn_mod_def::GLOiyvipIQg::wXIa7DKERCyOK6uNU76D8g` |
| Profiles Profile Analytics Status | GET | `/profiles/{{profile}}/analytics/status` | `conn_mod_def::GLOiyvkE6SA::WzLk6M7QTUCbsr7E3FQTJA` |
| Profile | POST | `/profiles` | `conn_mod_def::GLOiy4k6jxg::4TDVqmkIRk-BkR5VzfLWSQ` |

### Logs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download | GET | `/profiles/{{profile}}/logs/download` | `conn_mod_def::GLOiy5fhF9A::76HHUgVgQWC-ZFSoem9exQ` |
| Logs | GET | `/profiles/{{profile}}/logs` | `conn_mod_def::GLOiy5vuqQA::cHgmajLxRvyUbWDrWFeWmw` |
| Streaming | GET | `/profiles/{{profile}}/logs/stream` | `conn_mod_def::GLOiy4ULPUg::fw2zZVmbRGerMFG9PnRojQ` |
| Clear | DELETE | `/profiles/{{profile}}/logs` | `conn_mod_def::GLOiyu-0lmg::C-5aZQlVTD64kf9bjFjbLA` |

### ProfilesProfileAnalyticsDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Profiles Profile Analytics Domains | GET | `/profiles/{{profile}}/analytics/domains` | `conn_mod_def::GLOiydnxhEA::figPVF2MSy2C85YqropxAw` |

### ProfileAnalyticsDestinations

| Action | Method | Path | Action id |
|---|---|---|---|
| Profiles Profile Analytics Destinations Question Mark Type=Countries | GET | `/profiles/{{profile}}/analytics/destinations` | `conn_mod_def::GLOiyehyZFg::Oh6sn03KTNKHw_N2ixAYZg` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Analytics | GET | `/profiles/{{profile}}/analytics/*` | `conn_mod_def::GLOiyvMRiMA::U32VmBL_QhyKgVesW_m8kw` |

### TimeSeries

| Action | Method | Path | Action id |
|---|---|---|---|
| Time Series | GET | `{{endpoint}};series` | `conn_mod_def::GLOiywhVhOg::0X43yinrQR2VfxaUHV4XjQ` |

## When a call fails

The error comes from NextDNS, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/next-dns

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
