---
name: waka-time
description: WakaTime is a developer productivity and analytics platform that automatically tracks coding activity across editors, IDEs, and terminals, providing time-based insights, reports, and APIs that help individuals and teams measure work patterns and understand how development time is spent. Read and write WakaTime data through One: commits, stats, leaderboards, customrules, goals, orgs and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in WakaTime, create or update a record there, or build code against the WakaTime API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: waka-time
  generated-from: one-knowledge-base
---

# WakaTime through One

WakaTime is a developer productivity and analytics platform that automatically tracks coding activity across editors, IDEs, and terminals, providing time-based insights, reports, and APIs that help individuals and teams measure work patterns and understand how development time is spent.

One exposes WakaTime through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `waka-time` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm WakaTime is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real WakaTime account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Commits

| Action | Method | Path | Action id |
|---|---|---|---|
| Commit | GET | `/api/v1/users/{{user}}/projects/{{project}}/commits/{{hash}}` | `conn_mod_def::GLMLp01KHqg::OkA3MLIORU6j5dzkwaMdAQ` |
| Commits | GET | `/api/v1/users/{{user}}/projects/{{project}}/commits` | `conn_mod_def::GLMLp2TNGgg::V-7rIKDdSPyYcACF_qp44w` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Stats | GET | `/api/v1/users/{{user}}/stats/{{range}}` | `conn_mod_def::GLMLrC_SRiA::GAbqyFJ5T6uukrewz2YCsQ` |
| Stats Aggregated | GET | `/api/v1/stats/{{range}}` | `conn_mod_def::GLMLrC15BEA::iwXCJaJsS_yQpAfKSd2oyQ` |

### Leaderboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Private Leaderboards | GET | `/api/v1/users/{{user}}/leaderboards` | `conn_mod_def::GLMLq1Bdk8g::DGt_fmiORreEDjnutKXLVw` |
| Private Leaderboards Leaders | GET | `/api/v1/users/{{user}}/leaderboards/{{board}}` | `conn_mod_def::GLMLrDevw0A::hJ_Et8LpRZugAd0hbK3kiw` |

### CustomRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Custom Rules | GET | `/api/v1/users/{{user}}/custom_rules` | `conn_mod_def::GLMLqFxjYVA::9F2Fm56iTbyG8D3PX6fTyQ` |
| Org Custom Rules | GET | `/api/v1/users/{{user}}/orgs/{{org}}/custom_rules` | `conn_mod_def::GLMLqsaUx9g::dYIXkpQrTqi7kHwskIPs4A` |

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| Goal | GET | `/api/v1/users/{{user}}/goals/{{goal}}` | `conn_mod_def::GLMLqPBn-Tg::jkbR8V55SQaY_P2V4pRQmg` |
| Goals | GET | `/api/v1/users/{{user}}/goals` | `conn_mod_def::GLMLqY6k3pA::r7L4en2HSIm4EHw_87x5kA` |

### Orgs

| Action | Method | Path | Action id |
|---|---|---|---|
| Orgs | GET | `/api/v1/users/{{user}}/orgs` | `conn_mod_def::GLMLq0bRp0A::bt2SPx6nS2mkZjEBM_grFg` |
| Test Connection | GET | `/api/v1/users/current/orgs` | `conn_mod_def::GLML2FAIjOg::Yk2TYlrpQuqHn84n48GQTg` |

### AllTimeSinceToday

| Action | Method | Path | Action id |
|---|---|---|---|
| All Time Since Today | GET | `/api/v1/users/{{user}}/all_time_since_today` | `conn_mod_def::GLMLp107CYA::C1tWvXUfQkibf-5AKxXjiQ` |

### ProgramLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Program Languages | GET | `/api/v1/program_languages` | `conn_mod_def::GLMLrBvIrlg::fNZ7zxdXT1el6rxfkorMcA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Projects | GET | `/api/v1/users/{{user}}/projects` | `conn_mod_def::GLMLrCQQQ6A::rnIwED6QSP-41se6NhM5PA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Users | GET | `/api/v1/users/{{user}}` | `conn_mod_def::GLMLrMTRkbg::1ZmPU9xLRP-pNzTV9YxkDQ` |

### CustomRulesProgress

| Action | Method | Path | Action id |
|---|---|---|---|
| Custom Rules Progress | GET | `/api/v1/users/{{user}}/custom_rules_progress` | `conn_mod_def::GLMLp_XpvNA::u46878_CR_qaT57bMloo1Q` |

### Editors

| Action | Method | Path | Action id |
|---|---|---|---|
| Editors | GET | `/api/v1/editors` | `conn_mod_def::GLMLqO9V3Vg::BmrsX0uGQyW8ov39Cl4TFA` |

### DataDumps

| Action | Method | Path | Action id |
|---|---|---|---|
| Data Dumps | GET | `/api/v1/users/{{user}}/data_dumps` | `conn_mod_def::GLMLqPMkrCA::N-OfxfOET3aHqyGm-n_PXA` |

### ExternalDurations

| Action | Method | Path | Action id |
|---|---|---|---|
| External Durations | GET | `/api/v1/users/{{user}}/external_durations` | `conn_mod_def::GLMLqQERmTg::RVhxDcH0QUe-5IGr-TFKQg` |

### Durations

| Action | Method | Path | Action id |
|---|---|---|---|
| Durations | GET | `/api/v1/users/{{user}}/durations` | `conn_mod_def::GLMLqRSIbrA::yyN8YMn8Q1awct6yiT18fg` |

### Heartbeats

| Action | Method | Path | Action id |
|---|---|---|---|
| Heartbeats | GET | `/api/v1/users/{{user}}/heartbeats` | `conn_mod_def::GLMLqaXRYTg::PAdyqZllTlmZRuK0Idvmww` |

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| Insights | GET | `/api/v1/users/{{user}}/insights/{{insightType}}/{{range}}` | `conn_mod_def::GLMLqar7Xug::RfG-Yqm0ToG7YoQd-ANn5Q` |

### Leaders

| Action | Method | Path | Action id |
|---|---|---|---|
| Leaders | GET | `/api/v1/leaders` | `conn_mod_def::GLMLqb4B8hg::79UsAkzyS0Sf5hd0Ixoc-A` |

### MachineNames

| Action | Method | Path | Action id |
|---|---|---|---|
| Machine Names | GET | `/api/v1/users/{{user}}/machine_names` | `conn_mod_def::GLMLqe9Gjjg::5caw1RfcTC2nIRISdUReoQ` |

### Meta

| Action | Method | Path | Action id |
|---|---|---|---|
| Meta | GET | `/api/v1/meta` | `conn_mod_def::GLMLqmVgSig::5cIuiwE1RgCThVam9Tb5Hg` |

### OrgDashboardMemberDurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboard Member Durations | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards/{{dashboard}}/members/{{member}}/durations` | `conn_mod_def::GLMLqpY-msg::n7fr4Yl-RmG6AoNzHvPK8w` |

### OrgDashboardMemberSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboard Member Summaries | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards/{{dashboard}}/members/{{member}}/summaries` | `conn_mod_def::GLMLqrzJ_ZA::Nm6oFhVsRrmIULh10LWXqQ` |

### OrgDashboardDurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboard Durations | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards/{{dashboard}}/durations` | `conn_mod_def::GLMLqrzT0TA::QLYejhmoQQGBF4e4BCjY5Q` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboards | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards` | `conn_mod_def::GLMLq0r-l7A::PQERguVVQxq6PEhpbbeqFQ` |

### OrgDashboardMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboard Members | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards/{{dashboard}}/members` | `conn_mod_def::GLMLq00XiLg::FKIzKHUmS26fZ_BDTL8Syg` |

### OrgDashboardSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Org Dashboard Summaries | GET | `/api/v1/users/{{user}}/orgs/{{org}}/dashboards/{{dashboard}}/summaries` | `conn_mod_def::GLMLq5_8EcA::LCnlChmfSca6_uAKv_f51Q` |

### UserAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| User Agents | GET | `/api/v1/users/{{user}}/user_agents` | `conn_mod_def::GLMLrMTkFAA::igvSFNgMSw6FamKHiwDaLg` |

### StatusBar

| Action | Method | Path | Action id |
|---|---|---|---|
| Status Bar | GET | `/api/v1/users/{{user}}/status_bar/today` | `conn_mod_def::GLMLrMtLjwg::AWfyo7INTgaUNosZ3C82_Q` |

### Summaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Summaries | GET | `/api/v1/users/{{user}}/summaries` | `conn_mod_def::GLMLrORjR7A::WYchDUHzTCK4mdS-2_GEeA` |

## When a call fails

The error comes from WakaTime, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/waka-time

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
