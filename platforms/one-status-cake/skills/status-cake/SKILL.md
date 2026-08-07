---
name: status-cake
description: StatusCake is a website and infrastructure monitoring platform that provides uptime checks, performance monitoring, and domain health alerts through dashboards and APIs, allowing operations and engineering teams to detect outages, track service availability, and automate incident response workflows. Read and write Status Cake data through One: contactgroups, maintenancewindows, heartbeat, sslcheck, maintenancewindow, pagespeed and more, 36 actions with real parameter documentation. Use whenever the user asks to look something up in Status Cake, create or update a record there, or build code against the Status Cake API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: status-cake
  generated-from: one-knowledge-base
---

# Status Cake through One

StatusCake is a website and infrastructure monitoring platform that provides uptime checks, performance monitoring, and domain health alerts through dashboards and APIs, allowing operations and engineering teams to detect outages, track service availability, and automate incident response workflows.

One exposes Status Cake through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `status-cake` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Status Cake is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Status Cake account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ContactGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Groups | GET | `/v1/contact-groups` | `conn_mod_def::GK5vDQs6hJg::46fAanoKS-6F8fqzNwXmKw` |
| Retrieve a Contact Group | GET | `/v1/contact-groups/{{groupId}}` | `conn_mod_def::GK5vDdPUWqA::ZqIpoaJVS7GJ5x9UqxNzbQ` |
| Create a Contact Group | POST | `/contact-groups` | `conn_mod_def::GK5vDOmjs7g::X4Wy7bf-SO-4ucwThSUBwA` |
| Delete a Contact Group | DELETE | `/v1/contact-groups/{{groupId}}` | `conn_mod_def::GK5vDOzorVg::gtvb1z55QlayvnygSqNGkw` |
| Update a Contact Group | PUT | `/v1/contact-groups/{{groupId}}` | `conn_mod_def::GK5vDNVqm8g::wEyBrX7LRuOD9EUIM8xbpw` |

### MaintenanceWindows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Maintenance Windows | GET | `/maintenance-windows` | `conn_mod_def::GK5vD0NN2wg::n5gfEWXnRJ2aUb5ysqnlrQ` |
| Create a Maintenance Window | POST | `/maintenance-windows` | `conn_mod_def::GK5vDyD3c0g::_QHhWQUxSEq-hVOpDkCr7Q` |
| Delete a Maintenance Window | DELETE | `/v1/maintenance-windows/{{windowId}}` | `conn_mod_def::GK5vDxwabLg::29Imvy4DTlO-JiURBFiXyw` |

### Heartbeat

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Heartbeat Check | GET | `/v1/heartbeat/{{testId}}` | `conn_mod_def::GK5vDp14XUg::GtsvtlCBSJCQG12ZHCHmTg` |
| Create a Heartbeat Check | POST | `/heartbeat` | `conn_mod_def::GK5vDlzRdgg::ybSPr7KpRiacZkTo_vumug` |
| Delete a Heartbeat Check | DELETE | `/v1/heartbeat/{{testId}}` | `conn_mod_def::GK5vDqAZWnA::_BUow3LGTGOqSOZozGReiw` |

### SslCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an SSL Check | GET | `/v1/ssl/{{testId}}` | `conn_mod_def::GK5vEUAlRKA::hojNFWklRHeGn-CNT1Bz1A` |
| Delete an SSL Check | DELETE | `/v1/ssl/{{testId}}` | `conn_mod_def::GK5vEJZszAg::q4vaUSKbSv2Ip7GbO2pvKg` |
| Update an SSL Check | PUT | `/v1/ssl/{{testId}}` | `conn_mod_def::GK5vEUlhTAg::fIkWkBkRSTiZz0DeuoMU5g` |

### MaintenanceWindow

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Maintenance Window | GET | `/v1/maintenance-windows/{{windowId}}` | `conn_mod_def::GK5vD9Gc1xA::HsvA0j-2TeqyOCp4UDlmUg` |
| Update a Maintenance Window | PUT | `/v1/maintenance-windows/{{windowId}}` | `conn_mod_def::GK5vD9pE1Ag::KLXyonMbTC2yKWSy-V5HQQ` |

### Pagespeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Pagespeed Check | POST | `/v1/pagespeed` | `conn_mod_def::GK5vEBBVY6A::ZcfLESVeRU6h0WJxQTdJOw` |
| Delete a Pagespeed Check | DELETE | `/v1/pagespeed/{{testId}}` | `conn_mod_def::GK5vD9HCBpg::u2gFhavIQ2CLRCPPoVVabQ` |

### PagespeedCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Pagespeed Check | GET | `/v1/pagespeed/{{testId}}` | `conn_mod_def::GK5vEJQ4MPg::QEWIDU-YQ9KXoLXfOaoqKQ` |
| Update a Pagespeed Check | PUT | `/v1/pagespeed/{{testId}}` | `conn_mod_def::GK5vEK0IgGA::Tt8jQdY1QHm5TqNyXELJsw` |

### Uptime

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Uptime Check | GET | `/v1/uptime/{{testId}}` | `conn_mod_def::GK5vEtxP3ug::PNNovwfbTOW3Vj2y5J3kCw` |
| Create an Uptime Check | POST | `/v1/uptime` | `conn_mod_def::GK5vETYVekg::Wg4dbdq1SrKvm_8jFVQr2g` |

### UptimeChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Uptime Checks | GET | `/v1/uptime` | `conn_mod_def::GK5vEvycbOg::Nd21blGSSUiXuOoUL-BVrw` |
| Delete an Uptime Check | DELETE | `/v1/uptime/{{testId}}` | `conn_mod_def::GK5vElilJQg::iXXxkeSIS_ivrMe6t3UwUA` |

### PagespeedMonitoringLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pagespeed Monitoring Locations | GET | `/pagespeed-locations` | `conn_mod_def::GK5vDy2jUPg::YD3FOUZbTPC21gxAKGsD7w` |

### Ssl

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an SSL Check | POST | `/v1/ssl` | `conn_mod_def::GK5vEJP3V2g::PRZaYfldRV-R807iJpk3yA` |

### HeartbeatCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Heartbeat Check | PUT | `/v1/heartbeat/{{testId}}` | `conn_mod_def::GK5vDl01HcA::xMG5QIQORU-x52m7_xf_xA` |

### HeartbeatChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Heartbeat Checks | GET | `/heartbeat` | `conn_mod_def::GK5vDp45X3A::IE1xf-YqTXO9o4d_wWZ3Jg` |

### UptimeMonitoringLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Uptime Monitoring Locations | GET | `/uptime-locations` | `conn_mod_def::GK5vDzzowWA::T2dnBl4tQayqhkQjIddt9Q` |

### PagespeedHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pagespeed Test's History | GET | `/v1/pagespeed/{{testId}}/history` | `conn_mod_def::GK5vD9LrjpA::S3H0dROVS5GfFz13XNXLfw` |

### PagespeedChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pagespeed Checks | GET | `/pagespeed` | `conn_mod_def::GK5vEJrJ-CA::TD6Z9Nf9Rnm2wL_UtzoYDA` |

### SslChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List SSL Checks | GET | `/ssl` | `conn_mod_def::GK5vETY1y7g::vvLGluT-T_GsJrenBSj5Mg` |

### UptimeChecksAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Uptime Check's Alerts | GET | `/v1/uptime/{{testId}}/alerts` | `conn_mod_def::GK5vEt83M-A::x0_LY0daToe9L3lrM9-upQ` |

### UptimeCheckPeriods

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Uptime Check's Periods | GET | `/v1/uptime/{{testId}}/periods` | `conn_mod_def::GK5vEvfytxA::pATFLBy8Sm2lQILLZoMZDw` |

### UptimeCheckHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Uptime Check's History | GET | `/v1/uptime/{{testId}}/history` | `conn_mod_def::GK5vEz-jGgA::uScCfh1eRUaHfi45B8s8SA` |

### UptimeCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Uptime Check | PUT | `/v1/uptime/{{testId}}` | `conn_mod_def::GK5vE9AlRdA::KUkpvkjdQPm0qyGHimSorA` |

## When a call fails

The error comes from Status Cake, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/status-cake

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
