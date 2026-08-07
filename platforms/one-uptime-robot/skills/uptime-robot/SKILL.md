---
name: uptime-robot
description: UptimeRobot is a website and service monitoring platform that provides uptime checks, alerting, and status visibility for websites, APIs, servers, and ports, allowing teams to detect outages quickly and automate incident notifications across email, SMS, and integrations. Read and write UptimeRobot data through One: monitors, alertcontacts, integrations, maintenancewindows, monitorgroups, incidentcomments and more, 59 actions with real parameter documentation. Use whenever the user asks to look something up in UptimeRobot, create or update a record there, or build code against the UptimeRobot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: uptime-robot
  generated-from: one-knowledge-base
---

# UptimeRobot through One

UptimeRobot is a website and service monitoring platform that provides uptime checks, alerting, and status visibility for websites, APIs, servers, and ports, allowing teams to detect outages quickly and automate incident notifications across email, SMS, and integrations.

One exposes UptimeRobot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `uptime-robot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm UptimeRobot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real UptimeRobot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor by ID | GET | `/v3/monitors/{{id}}` | `conn_mod_def::GLwEdSu07Jc::AO8Pkq68SFqVyorcegxwtg` |
| List Monitors | GET | `/v3/monitors` | `conn_mod_def::GLwEdeYAXB8::-PydLCrwQgqCKfRI4TW8WA` |
| Uptime Stats for Monitors | GET | `/v3/monitors/uptime-stats` | `conn_mod_def::GLwEdTrwRO0::EyTUaGqmTxyLP1z57FPajg` |
| Bulk Update Monitors | POST | `/v3/monitors/bulk/update` | `conn_mod_def::GLwEdmw1agQ::WijEXEdwQhC9ExUIaHym9Q` |
| Create Monitor | POST | `/v3/monitors` | `conn_mod_def::GLwEdJqvFdk::5RgdRYAIR32RJMEDPq1cwA` |
| Delete a Monitor | DELETE | `/v3/monitors/{{id}}` | `conn_mod_def::GLwEdMx3ZkE::Dt09LvSDSPyVHxGT82qiBQ` |
| Pause a Monitor | POST | `/v3/monitors/{{id}}/pause` | `conn_mod_def::GLwEdc2E9Ig::evmlx2W9TFacPiaUOIhZcg` |
| Pause Monitors in Bulk | POST | `/v3/monitors/bulk/pause` | `conn_mod_def::GLwEdkw5qwU::sSr_j4twRcKdlwfN1Tx5XQ` |
| Reset Stats for a Monitor | POST | `/v3/monitors/{{id}}/reset` | `conn_mod_def::GLwEdcp7joI::DK0ITRAoSBOhBcbPd_KKzg` |
| Start a Monitor | POST | `/v3/monitors/{{id}}/start` | `conn_mod_def::GLwEddOmKXY::57zWBps2RSyzL8YhnL6vJw` |
| Start Monitors in Bulk | POST | `/v3/monitors/bulk/start` | `conn_mod_def::GLwEdkwtn7M::qhFGVxfnTPCP2lJ26dxCAA` |
| Update a Monitor | PATCH | `/v3/monitors/{{id}}` | `conn_mod_def::GLwEddPpZhg::RbMafeZtRY-j8bhCK8oDtQ` |

### AlertContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Personal Alert Contact by ID | GET | `/v3/alert-contacts/{{id}}` | `conn_mod_def::GLwEbo7WQew::diSeIjs9SsGDn1rBxGjRFw` |
| Get Alert Contacts for a User | GET | `/v3/user/alert-contacts` | `conn_mod_def::GLwEd8-OsG0::1e7CSmLdQu20f8sy4zWmzg` |
| Get All Alert Contacts for a User | GET | `/v3/user/all-alert-contacts` | `conn_mod_def::GLwEd9KRswk::V8YZO2hSQA-6ZVdRPYXaXQ` |
| List Personal Alert Contacts | GET | `/v3/alert-contacts` | `conn_mod_def::GLwEbqc2OXs::dIvVPiXxReKb2rJgdzBfMw` |
| Create a Personal Alert Contact | POST | `/v3/alert-contacts` | `conn_mod_def::GLwEbr5jGJg::uMX9VSgkREi_diGg8Isl_g` |
| Delete a Personal Alert Contact | DELETE | `/v3/alert-contacts/{{id}}` | `conn_mod_def::GLwEbn5aE0o::RWzlX5GoTkqnbWgz_3N1Ww` |
| Update a Personal Alert Contact | PATCH | `/v3/alert-contacts/{{id}}` | `conn_mod_def::GLwEbm7KaNQ::C7GXfsP2RWyxXO0m6gWjDw` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integration by ID | GET | `/v3/integrations/{{id}}` | `conn_mod_def::GLwEc46Lc8M::9rw3zZqTRYecFGuh1p3PZw` |
| List Integrations | GET | `/v3/integrations` | `conn_mod_def::GLwEc5kh8YU::Mi_mDHZST_uVOjIfmQR7Eg` |
| Create Integration | POST | `/v3/integrations` | `conn_mod_def::GLwEcyEmW9g::BQw5iDwWQDGZS7AEmFbniw` |
| Delete an Integration | DELETE | `/v3/integrations/{{id}}` | `conn_mod_def::GLwEcxuBDy4::HVF2izMuSDqHHZ0kbuuQGA` |
| Update an Integration | PATCH | `/v3/integrations/{{id}}` | `conn_mod_def::GLwEc5cG0h8::pLJlJGFvTq6oNDlugNSNPg` |

### MaintenanceWindows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Maintenance Window by ID | GET | `/v3/maintenance-windows/{{id}}` | `conn_mod_def::GLwEdBgmoRM::zOj7CK6DQEaWbN4W12W2kA` |
| List Maintenance Windows | GET | `/v3/maintenance-windows` | `conn_mod_def::GLwEdDMOxmU::zzsMf7reTOSvyHIBiqE2fA` |
| Create a Maintenance Window | POST | `/v3/maintenance-windows` | `conn_mod_def::GLwEc5KzlUs::BA2FcAdiSD2LIZO_L5K9Ww` |
| Delete a Maintenance Window | DELETE | `/v3/maintenance-windows/{{id}}` | `conn_mod_def::GLwEc45ljwo::PCqCmpYzSM64Hg_uQzJ5qw` |
| Update a Maintenance Window | PATCH | `/v3/maintenance-windows/{{id}}` | `conn_mod_def::GLwEdC-WcoE::aJ0Ajou7S-Oil0a3hEIAMw` |

### MonitorGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor Group by ID | GET | `/v3/monitor-groups/{{id}}` | `conn_mod_def::GLwEdJ0GBT8::qjgwno7bT02YGAt8bPpDuw` |
| List Monitor Groups | GET | `/v3/monitor-groups` | `conn_mod_def::GLwEdLGiwF8::taVOZ3DTTaaRlPKHSA-k2Q` |
| Create a Monitor Group | POST | `/v3/monitor-groups` | `conn_mod_def::GLwEc_W_1MY::bnjikd9gRrKWWtVZ_Q5F8Q` |
| Delete a Monitor Group | DELETE | `/v3/monitor-groups/{{id}}` | `conn_mod_def::GLwEdARkco0::MMxDVJm2Tr29Flnb3x13_Q` |
| Update a Monitor Group | PATCH | `/v3/monitor-groups/{{id}}` | `conn_mod_def::GLwEdKntmYA::f2S_L_hTQ6GjW9LDzAZRFg` |

### IncidentComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Incident Comments | GET | `/v3/incidents/{{id}}/comments` | `conn_mod_def::GLwEczcfO5Y::okkMhIhvRpi5rC0vRyb-iA` |
| Create Incident Comment | POST | `/v3/incidents/{{id}}/comments` | `conn_mod_def::GLwEcrH5C_I::AORZtJudR6qBGcyUVOD-BA` |
| Delete Incident Comment | DELETE | `/v3/incidents/{{id}}/comments/{{commentId}}` | `conn_mod_def::GLwEb1h7c9k::y3bwgBvJQRWgq-cvmUeqWQ` |
| Update an Incident Comment | PATCH | `/v3/incidents/{{id}}/comments/{{commentId}}` | `conn_mod_def::GLwEcyiQeU8::clVg6X8NS2yXFZKFvcyquA` |

### Announcements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Announcement by ID for a Public Status Page | GET | `/v3/psps/{{pspId}}/announcements/{{id}}` | `conn_mod_def::GLwEdmo94tQ::QFFiau-BQyCZWBiC3wD6Sw` |
| List Announcements for a Public Status Page | GET | `/v3/psps/{{pspId}}/announcements` | `conn_mod_def::GLwEduzsXjU::GROJQmteTP62RI-nxDlGeQ` |
| Create an Announcement for a Public Status Page | POST | `/v3/psps/{{pspId}}/announcements` | `conn_mod_def::GLwEdlCgILw::GHHS5aeKS-GIdIIcDOjbpw` |
| Update an Announcement for a Public Status Page | PATCH | `/v3/psps/{{pspId}}/announcements/{{id}}` | `conn_mod_def::GLwEduCfDms::Q3PMx4duRdy02B_PZvp3lg` |

### Incidents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Incident by ID | GET | `/v3/incidents/{{id}}` | `conn_mod_def::GLwEbz1e2VM::KbWlzz7lRyCpZMP2-yXc8A` |
| Get Incident Activity Log | GET | `/v3/incidents/{{id}}/activity-log` | `conn_mod_def::GLwEbz76duI::67muAHrCQ12O4FuHhTYq7w` |
| List Incidents | GET | `/v3/incidents` | `conn_mod_def::GLwEczcrLgA::Axy4_8-uRseqm2gm2jS_Pw` |

### PublicStatusPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Public Status Pages | GET | `/v3/psps` | `conn_mod_def::GLwEd2UAoXE::kjgumWZyRM-zuDH1qx46zQ` |
| Pin an Announcement to a Public Status Page | POST | `/v3/psps/{{pspId}}/announcements/{{id}}/pin` | `conn_mod_def::GLwEduiDE_A::LbCbc4gKRcKbjwUk2u6G8Q` |
| Update a Public Status Page | PATCH | `/v3/psps/{{id}}` | `conn_mod_def::GLwEd29WgeU::trT-oqKgR2W3bXGRMXeiuQ` |

### Psps

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a PSP | POST | `/v3/psps` | `conn_mod_def::GLwEdtcvGoc::77qH8cpjRRiLijsLwTqxpw` |
| Delete a PSP | DELETE | `/v3/psps/{{id}}` | `conn_mod_def::GLwEd2Iglys::X55oJP2RRduZIg9StyRLaQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List User Tags | GET | `/v3/tags` | `conn_mod_def::GLwEd9AAh8o::P5cX7zlqTK28VEAQ_ndHsA` |
| Delete a Tag | DELETE | `/v3/tags/{{id}}` | `conn_mod_def::GLwEdz6OMlM::RaUqm8ysTtyKtZ27ZqqWIg` |

### IncidentAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Alerts for an Incident | GET | `/v3/incidents/{{id}}/alerts` | `conn_mod_def::GLwEbz9pnJA::H41Xu6bcT_WppKmCfqC6Xg` |

### MonitorResponseTimeStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Response Time Statistics for a Monitor | GET | `/v3/monitors/{{id}}/stats/response-time` | `conn_mod_def::GLwEdTpYQM8::rclsWk08Te2UO-AD8_ULFA` |

### MonitorResponseTimeStatisticsByRegion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Response Time Statistics by Region for a Monitor | GET | `/v3/monitors/{{id}}/stats/response-time/all` | `conn_mod_def::GLwEdUG8g30::1rgaeda5R_WLCOW-ldkXug` |

### MonitorUptimeStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Monitor Uptime Statistics | GET | `/v3/monitors/{{id}}/stats/uptime` | `conn_mod_def::GLwEdWyOL1E::IYklkDA0Q3Gz9Pub_tVSHw` |

### PublicStatusPageAnnouncements

| Action | Method | Path | Action id |
|---|---|---|---|
| Unpin an Announcement from a Public Status Page | POST | `/v3/psps/{{pspId}}/announcements/{{id}}/unpin` | `conn_mod_def::GLwEdtap-0Q::6BgwzKzyR5izWcbLMgQ1jQ` |

### PublicStatusPage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Public Status Page by ID | GET | `/v3/psps/{{id}}` | `conn_mod_def::GLwEd0y24yk::sZq11ft4QCy3kVLzBFvTig` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/v3/user/me` | `conn_mod_def::GLwEd8e0kbI::JSaJ30uJScGbpVmr4ZqfLA` |

## When a call fails

The error comes from UptimeRobot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/uptime-robot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
