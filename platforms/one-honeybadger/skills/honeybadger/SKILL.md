---
name: honeybadger
description: Honeybadger is an application monitoring platform that provides error tracking, uptime monitoring, cron and check-in alerts, and status reporting, allowing developers and operations teams to detect failures, debug production issues, and maintain the reliability of web applications and services. Read and write Honeybadger data through One: projects, projectfaults, teams, teaminvitations, faults, statuspages and more, 95 actions with real parameter documentation. Use whenever the user asks to look something up in Honeybadger, create or update a record there, or build code against the Honeybadger API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: honeybadger
  generated-from: one-knowledge-base
---

# Honeybadger through One

Honeybadger is an application monitoring platform that provides error tracking, uptime monitoring, cron and check-in alerts, and status reporting, allowing developers and operations teams to detect failures, debug production issues, and maintain the reliability of web applications and services.

One exposes Honeybadger through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `honeybadger` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Honeybadger is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Honeybadger account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID | GET | `/v2/projects/{{id}}` | `conn_mod_def::GMZ-G6tqcjg::fQnbdToZTayZb512eFeAcA` |
| Get a Project's Fault Summary | GET | `/v2/projects/{{id}}/faults/summary` | `conn_mod_def::GMZ-FtoWPv8::6kbL0SFPSOCsbhkoiosjpg` |
| List Projects | GET | `/v2/projects` | `conn_mod_def::GMZ-DbnO87c::ow1wPeNYRviL6Xoxg_0fvQ` |
| List Projects | GET | `/v2/projects` | `conn_mod_def::GMZ-HEmc5A0::pwL7xtUTSgWRSDGQlQA87g` |
| Create a Project | POST | `/v2/projects` | `conn_mod_def::GMZ-HjgHouY::ejA3VZHnQNqgyBVb89ybvQ` |
| Delete a Project | DELETE | `/v2/projects/{{id}}` | `conn_mod_def::GMZ-G1uJsNA::nN2Y9VQCREGiF6KPrNAoaw` |
| Update a Project | PUT | `/v2/projects/{{id}}` | `conn_mod_def::GMZ-HjTSjdQ::_41_dQbuTVC3j6yV-Vpmug` |

### ProjectFaults

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Fault | DELETE | `/v2/projects/{{id}}/faults/{{id}}` | `conn_mod_def::GMZ-FAgtmf8::v3BIH8T6T4yZKQkk8Tx7ww` |
| Pause a Project Fault | POST | `/v2/projects/{{id}}/faults/{{id}}/pause` | `conn_mod_def::GMZ-F3YEWrA::1Xt64cNpTEms8prnScA2Sg` |
| Unlink a Project Fault | POST | `/v2/projects/{{id}}/faults/{{id}}/unlink` | `conn_mod_def::GMZ-F3w4udA::XcCerDygSk2EK64avvj58Q` |
| Unpause a Project Fault | POST | `/v2/projects/{{id}}/faults/{{id}}/unpause` | `conn_mod_def::GMZ-Gu8dxt0::7dfJXy2VTMukyKWhxYrzCg` |
| Update a Project Fault | PUT | `/v2/projects/{{id}}/faults/{{id}}` | `conn_mod_def::GMZ-HRjpC6Q::r8KKNXTrR4uAQvKWaIX0ow` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Details | GET | `/v2/teams/{{id}}` | `conn_mod_def::GMZ-KAiKPFo::_FC9bccCRgGcR0D5G6FgcA` |
| List Teams | GET | `/v2/teams` | `conn_mod_def::GMZ-J_WjYkg::jno_lxWKSHikwPpo2BdFIA` |
| Create a Team | POST | `/v2/teams` | `conn_mod_def::GMZ-Kz2eHgg::-m7-WeF_QG64DiXAgsAb9g` |
| Delete a Team | DELETE | `/v2/teams/{{id}}` | `conn_mod_def::GMZ-KCkMlTQ::wF1UkYmkTN-iemsZK8urLQ` |
| Update a Team | PUT | `/v2/teams/{{id}}` | `conn_mod_def::GMZ-MX7NGGc::rCZBRAi-RgGs3eUaa0DSgA` |

### TeamInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Invitation for a Team | GET | `/v2/teams/{{id}}/team_invitations/{{id}}` | `conn_mod_def::GMZ-KwYaKM0::wvPudgc2TxiQ0v2mXaoBKQ` |
| List a Team's Team Invitations | GET | `/v2/teams/{{id}}/team_invitations` | `conn_mod_def::GMZ-MQ3wPVM::9H7T6bO8Qg2P2q_CXzKmuQ` |
| Create a Team Invitation | POST | `/v2/teams/{{id}}/team_invitations` | `conn_mod_def::GMZ-Kxc5Pl4::25oa5W26RA-xjZAQ3YHfig` |
| Delete a Team Invitation for a Team | DELETE | `/v2/teams/{{id}}/team_invitations/{{id}}` | `conn_mod_def::GMZ-KjG-hwo::uBmUXo29TDyGc0PADl8CeQ` |
| Update a Team Invitation | PUT | `/v2/teams/{{id}}/team_invitations/{{id}}` | `conn_mod_def::GMZ-MbNFSXU::_VbNr7lbStqG2FSzCPMXNw` |

### Faults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fault for a Project | GET | `/v2/projects/{{id}}/faults/{{id}}` | `conn_mod_def::GMZ-FIzBv-M::FW-_WrqZRFadLw0xlYmhSA` |
| List a Project's Faults | GET | `/v2/projects/{{id}}/faults` | `conn_mod_def::GMZ-FBXlXSE::tLChF6yGTUq6Rup9K0PZWw` |
| Resolve Faults for a Project | POST | `/v2/projects/{{id}}/faults/resolve` | `conn_mod_def::GMZ-GL03350::Q9R0HkmdSceg-eThiUaPtw` |
| Unpause Faults for a Project | POST | `/v2/projects/{{id}}/faults/unpause` | `conn_mod_def::GMZ-F4UZFAk::7hh1gSh8SNCJXIT3hpA8hA` |

### StatusPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Status Page for an Account | GET | `/v2/accounts/{{id}}/status_pages/{{id}}` | `conn_mod_def::GMZ-IR7Sdlc::zVIJ3UX-TAGUrVTrwmZsYw` |
| List an Account's Status Pages | GET | `/v2/accounts/{{id}}/status_pages` | `conn_mod_def::GMZ-ITFUHWA::b5TZRKiRSnS_Usx6SlwY5w` |
| Create a Status Page for an Account | POST | `/v2/accounts/{{id}}/status_pages` | `conn_mod_def::GMZ-ITtt9r4::kT0YbsAXSfmwEkMKE0A1Fg` |
| Delete a Status Page for an Account | DELETE | `/v2/accounts/{{id}}/status_pages/{{id}}` | `conn_mod_def::GMZ-IKg8qjE::kHNYqbpyQpSFOBe0-2Sy_Q` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Accounts | GET | `/v2/accounts` | `conn_mod_def::GMZ-BQ7H3Tw::TkI2KQ8pTWCuZChw1Qv5zQ` |
| Get an Account | GET | `/v2/accounts/{{id}}` | `conn_mod_def::GMZ-BDC4vuY::Mj5XUIw_RMKmlIk6mxbsQw` |
| Remove a User from an Account | DELETE | `/v2/accounts/{{accountId}}/users/{{userId}}` | `conn_mod_def::GMZ-BBUOlqI::8zdDC6p1Tt-lHkEqwvKhoA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User for an Account | GET | `/v2/accounts/{{id}}/users/{{id}}` | `conn_mod_def::GMZ-CNIM69E::LG4ferOJRpOPdhV2g0-FEQ` |
| List an Account's Users | GET | `/v2/accounts/{{id}}/users` | `conn_mod_def::GMZ-BeA7Gpg::rXJs_QKjQtOye76f1Ejteg` |
| Update a User for an Account | PUT | `/v2/accounts/{{accountId}}/users/{{userId}}` | `conn_mod_def::GMZ-CXFW080::_o_TpNXDSbqbrsyPGTDWQw` |

### ProjectAlarms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Alarm | GET | `/v2/projects/{{id}}/alarms/{{id}}` | `conn_mod_def::GMZ-Clyju4c::0tA0B-uBTs-yC6ct6G5StA` |
| Delete a Project Alarm | DELETE | `/v2/projects/{{id}}/alarms/{{id}}` | `conn_mod_def::GMZ-CUJbg-g::B6ejNHr8QRGi4QG-eaSFIg` |
| Update a Project Alarm | PUT | `/v2/projects/{{id}}/alarms/{{id}}` | `conn_mod_def::GMZ-CtP46HM::4Q9nLmROQeGUQBSKeoYLKA` |

### ProjectCheckIns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Check-in | GET | `/v2/projects/{{id}}/check_ins/{{id}}` | `conn_mod_def::GMZ-CsuUKu8::UnwZ81pASMasVMgm05CRRQ` |
| Delete a Project Check-in | DELETE | `/v2/projects/{{id}}/check_ins/{{id}}` | `conn_mod_def::GMZ-Ct2CqXo::57_iUeHDRv6vp04eZS7QIg` |
| Update a Project Check-in | PUT | `/v2/projects/{{id}}/check_ins/{{id}}` | `conn_mod_def::GMZ-C3gnJcg::hjtWQII4TP6amM0Dg4mWlA` |

### CheckIns

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Check-ins | GET | `/v2/projects/{{id}}/check_ins` | `conn_mod_def::GMZ-Ct0kdW0::YBqBaiFXQuOEa7aZcLCv7A` |
| Create a Check-In for a Project | POST | `/v2/projects/{{id}}/check_ins` | `conn_mod_def::GMZ-C2dwZVA::GeAjjOtVQo2JjXSEYX8wXg` |
| Update All Check-ins for a Project | PUT | `/v2/projects/{{id}}/check_ins` | `conn_mod_def::GMZ-C2_Ejmk::vU6wxKf1StO5ocJOhf8GMA` |

### ProjectReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notices by Class for a Project Report | GET | `/v2/projects/{{id}}/reports/notices_by_class` | `conn_mod_def::GMZ-Hao_BqE::lb1qTYAqSwStj_h_u5Dh4g` |
| Get Notices by Location for a Project Report | GET | `/v2/projects/{{id}}/reports/notices_by_location` | `conn_mod_def::GMZ-HbTY-hQ::hukJYmrwQJ6ZVoPFvlc1bA` |
| Get Notices by User for a Project Report | GET | `/v2/projects/{{id}}/reports/notices_by_user` | `conn_mod_def::GMZ-HZgWtKg::lKWEJb5HRauv3XAvLCiNUQ` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Team Members | GET | `/v2/teams/{{id}}/team_members` | `conn_mod_def::GMZ-LuOoYNc::iy0yOd7XTOiiXnVompRzuQ` |
| Delete a Team Member from a Team | DELETE | `/v2/teams/{{id}}/team_members/{{id}}` | `conn_mod_def::GMZ-KpJdde8::ZlcyA9wPRJaveZdYYnLNrg` |
| Update a Team Member for a Team | PUT | `/v2/teams/{{id}}/team_members/{{id}}` | `conn_mod_def::GMZ-Maee0cE::5mN9GtTgRXiENSQyGa4y5w` |

### ProjectSites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Site by ID | GET | `/v2/projects/{{id}}/sites/{{id}}` | `conn_mod_def::GMZ-MhrpgUA::a65Pjvq6RVuEZTq7FBWpvg` |
| Delete a Project Site | DELETE | `/v2/projects/{{id}}/sites/{{id}}` | `conn_mod_def::GMZ-MZ_xvl0::I_JxOPExQq2BTwSeDNtAGQ` |
| Update a Project Site | PUT | `/v2/projects/{{id}}/sites/{{id}}` | `conn_mod_def::GMZ-MilRves::UGONs4KuS-K7ydJQUuOmng` |

### AccountInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Invitation for an Account | GET | `/v2/accounts/{{id}}/invitations/{{id}}` | `conn_mod_def::GMZ-B69lsA0::u4q3z91qQtaNx358HGHjTQ` |
| Delete an Account Invitation | DELETE | `/v2/accounts/{{id}}/invitations/{{id}}` | `conn_mod_def::GMZ-BCDPo_E::1_BLchSKRe2C5AnZNM5BIQ` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Invitations | GET | `/v2/accounts/{{id}}/invitations` | `conn_mod_def::GMZ-BCpmRR4::_gb5KSlOTqi75ZYFrN_WoQ` |
| Create an Invitation for an Account User | POST | `/v2/accounts/{{id}}/invitations` | `conn_mod_def::GMZ-BwzkfRQ::l8YWnOX0S3quz0K79eGqAA` |

### Alarms

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Alarms | GET | `/v2/projects/{{id}}/alarms` | `conn_mod_def::GMZ-CXjlL4g::6h2woeWjTYuiAQr7hbCzAA` |
| Create an Alarm for a Project | POST | `/v2/projects/{{id}}/alarms` | `conn_mod_def::GMZ-CvfoHbI::ZZSMx1AFQrKUt9vpyckkHQ` |

### FaultComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fault Comment for a Project | GET | `/v2/projects/{{id}}/faults/{{id}}/comments/{{id}}` | `conn_mod_def::GMZ-DMDO3NE::uX31pGePRJqZPvKcRnIVAA` |
| Delete a Fault Comment for a Project | DELETE | `/v2/projects/{{id}}/faults/{{id}}/comments/{{id}}` | `conn_mod_def::GMZ-C9ZpNus::wYprU9y5SDW9inWM4YJqGQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Fault's Comments for a Project | GET | `/v2/projects/{{id}}/faults/{{id}}/comments` | `conn_mod_def::GMZ-DEODVqQ::DMlSCXWMS5WMwTn93OpZJg` |
| Update a Fault Comment for a Project | PUT | `/v2/projects/{{id}}/faults/{{id}}/comments/{{id}}` | `conn_mod_def::GMZ-DLz7lbs::y7Y_jiNOQx-bET7CSEpZFg` |

### ProjectDashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Dashboard | DELETE | `/v2/projects/{{id}}/dashboards/{{id}}` | `conn_mod_def::GMZ-DMNhbdo::2QN2vZkrRg2FjzZOf9d2tg` |
| Update a Project Dashboard | PUT | `/v2/projects/{{id}}/dashboards/{{id}}` | `conn_mod_def::GMZ-D_6ttOQ::8RnpLFKPSJKwhab-9FDUAg` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Dashboards | GET | `/v2/projects/{{id}}/dashboards` | `conn_mod_def::GMZ-DMWo0nw::Mc2tCh04SbWpkNC_dBovqw` |
| Create a Dashboard for a Project | POST | `/v2/projects/{{id}}/dashboards` | `conn_mod_def::GMZ-Db3lzCs::F889gsbBQvaj5igFrHkyrw` |

### ProjectDeploys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Deploy by ID | GET | `/v2/projects/{{id}}/deploys/{{id}}` | `conn_mod_def::GMZ-E3qQm0o::Ci5OWaCTQo2XFOyT0GVRdQ` |
| Delete a Project Deploy | DELETE | `/v2/projects/{{id}}/deploys/{{id}}` | `conn_mod_def::GMZ-Dal6CzU::T0XL95TUSdKzfYuTEHamnQ` |

### ProjectEnvironment

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Environment | DELETE | `/v2/projects/{{id}}/environments/{{id}}` | `conn_mod_def::GMZ-EH_rOpo::6YBnhdCaRAqwWR291v3cQQ` |
| Update a Project Environment | PUT | `/v2/projects/{{id}}/environments/{{id}}` | `conn_mod_def::GMZ-FAVgo9o::4q9XWrqmSUiAyfVTkfcQ7Q` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Environments | GET | `/v2/projects/{{id}}/environments` | `conn_mod_def::GMZ-EIZjLuk::UEoDM08fS5KQyMzzsGOp9A` |
| Create an Environment for a Project | POST | `/v2/projects/{{id}}/environments` | `conn_mod_def::GMZ-FlD2FLw::aPDwYvpdSP2F0wG7OPniGg` |

### Occurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Occurrence Counts Across Projects | GET | `/v2/projects/occurrences` | `conn_mod_def::GMZ-HjpW8BE::-FiFk04WRBeTM0vqfbgzmw` |
| Get Occurrence Counts for a Project | GET | `/v2/projects/{{id}}/occurrences` | `conn_mod_def::GMZ-HaY2C8k::9x3orIkSQ8q096FTWGbBrQ` |

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Sites | GET | `/v2/projects/{{id}}/sites` | `conn_mod_def::GMZ-MYuUvqo::961uZRjCT4OX7fbamrHK0A` |
| Create a Site for a Project | POST | `/v2/projects/{{id}}/sites` | `conn_mod_def::GMZ-Mix4x4Y::jYEjVOkwTum4WJs9kx18Cw` |

### AccountInvitation

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Account Invitation | PUT | `/v2/accounts/{{id}}/invitations/{{id}}` | `conn_mod_def::GMZ-BaUvk7k::rdeivGSvSzOjPJq0N9B8mQ` |

### ProjectAlarmTriggerHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Alarm's Trigger History | GET | `/v2/projects/{{id}}/alarms/{{id}}/history` | `conn_mod_def::GMZ-CjPy8kE::OHbc-xSbQ3-uFl_oflRBfg` |

### ProjectFaultComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Comment for a Project Fault | POST | `/v2/projects/{{projectId}}/faults/{{faultId}}/comments` | `conn_mod_def::GMZ-DTW05Gc::zzRBfFO_QV2JaHYA9uiQog` |

### ProjectDashboard

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Dashboard | GET | `/v2/projects/{{id}}/dashboards/{{id}}` | `conn_mod_def::GMZ-DcH7sck::09w6vl3nQ3OL_phPbeXO4Q` |

### Deploys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Deploys | GET | `/v2/projects/{{id}}/deploys` | `conn_mod_def::GMZ-EJJvJt4::-NXvJcgARaGAor_Fjpihgg` |

### ProjectEnvironments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Environment by ID | GET | `/v2/projects/{{projectId}}/environments/{{id}}` | `conn_mod_def::GMZ-EoX9eAI::i7bqvlJ0Te6fh1G75Nq0Zw` |

### Notices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Notices for a Fault in a Project | GET | `/v2/projects/{{id}}/faults/{{id}}/notices` | `conn_mod_def::GMZ-FtNNKes::3T83K7sZQKSMHpKs4lkYUw` |

### AffectedUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Affected Users for a Project Fault | GET | `/v2/projects/{{id}}/faults/{{id}}/affected_users` | `conn_mod_def::GMZ-FtmC9YI::HRVOY100REiTBPLhOQEAgA` |

### FaultOccurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fault Occurrences for a Project Fault | GET | `/v2/projects/{{id}}/faults/{{id}}/occurrences` | `conn_mod_def::GMZ-FupKP1M::iXHpqzYvSGWI8EmaIy-V7w` |

### FaultIssueLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Link a Fault to an Existing Third-Party Issue for a Project | POST | `/v2/projects/{{id}}/faults/{{id}}/link` | `conn_mod_def::GMZ-Fv0nMWc::CZmFaA5sRHCVShycqXHjpg` |

### InsightsQueries

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Insights Data for a Project | POST | `/v2/projects/{{id}}/insights/queries` | `conn_mod_def::GMZ-G4Xt2Mg::tNigMEbNQx6E87PDt0MJdw` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Integrations | GET | `/v2/projects/{{id}}/integrations` | `conn_mod_def::GMZ-HYONzBU::PUi6pwxnRC6Bl3JbsSagRw` |

This lists 90 of 95 actions. For anything not here, call `search_one_platform_actions` with platform `honeybadger`. The full catalog is at https://www.withone.ai/knowledge/honeybadger.

## When a call fails

The error comes from Honeybadger, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/honeybadger

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
