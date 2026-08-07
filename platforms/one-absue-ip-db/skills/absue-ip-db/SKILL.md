---
name: absue-ip-db
description: AbuseIPDB is a threat intelligence platform that provides an API for checking, reporting, and scoring IP addresses associated with abusive activity, allowing security teams and developers to enrich detections, automate blocking decisions, and investigate suspicious network traffic. Read and write AbuseIPDB data through One: blacklist, reports, ipaddresscheck, blacklistips, blacklistedipaddresses, ipaddresses and more, 13 actions with real parameter documentation. Use whenever the user asks to look something up in AbuseIPDB, create or update a record there, or build code against the AbuseIPDB API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: absue-ip-db
  generated-from: one-knowledge-base
---

# AbuseIPDB through One

AbuseIPDB is a threat intelligence platform that provides an API for checking, reporting, and scoring IP addresses associated with abusive activity, allowing security teams and developers to enrich detections, automate blocking decisions, and investigate suspicious network traffic.

One exposes AbuseIPDB through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `absue-ip-db` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm AbuseIPDB is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real AbuseIPDB account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Blacklist

| Action | Method | Path | Action id |
|---|---|---|---|
| Blacklist IP Addresses | GET | `/api/v2/blacklist` | `conn_mod_def::GKsecaSVsSA::-o_6UVT9SRyCilX0u1AOEA` |
| Filter the Blacklist by Country | GET | `/api/v2/blacklist` | `conn_mod_def::GKsebju9xSg::k3ocjeQ8RVC1wxhfAVQgCA` |
| Get the Blacklist | GET | `/api/v2/blacklist` | `conn_mod_def::GKsebk50hsA::pVuZoPfIRgKSbBOcsWT4Yw` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Abuse Reports for an IP Address | GET | `/reports` | `conn_mod_def::GKsec2Qlufg::NZUEsxfKSTaYsDzBPCOIwA` |
| Clear Reports for an IP Address | DELETE | `/clear-address` | `conn_mod_def::GKseci56D6g::UEsMWeo1TG6Uh9xuYvY57g` |

### IpAddressCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Check an IP Address | GET | `/check` | `conn_mod_def::GKsecmyyc6A::MDpoQtNrQUWQddIQZSMsrA` |
| Test Connection | GET | `/check` | `conn_mod_def::GKsis-VPJ8g::usBktsXbQ8CEoaGIwgjZ-Q` |

### BlacklistIps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Blacklist IPs | GET | `/blacklist` | `conn_mod_def::GKsebhm84_A::QHhUr-KUQ0G5xXCtGx-Lsw` |

### BlacklistedIpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Blacklisted IP Addresses | GET | `/blacklist` | `conn_mod_def::GKsebiPISUg::tBYZwinLQeGBuIzMGDwPoQ` |

### IpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Report IP Addresses | POST | `/bulk-report` | `conn_mod_def::GKsecix9TXg::6Lg_C9PAQVqNRHJJK2KhGQ` |

### Blocks

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Block | GET | `/check-block` | `conn_mod_def::GKsecjHPVSg::1N5NR4yMS8KpWnsIOmcU9A` |

### AbuseIpdbReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Report an IP Address to AbuseIPDB | POST | `/report` | `conn_mod_def::GKseckSWlWg::ptbzhCN1RXqIINLyOrvaAg` |

### IpReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Report an IP Address | POST | `/api/v2/report` | `conn_mod_def::GKsecuKF35A::YJWEldxXSGqD0ok_z1T8Yw` |

## When a call fails

The error comes from AbuseIPDB, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/absue-ip-db

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
