---
name: gt-metrix
description: A web performance analysis service that evaluates site speed and optimization by running tests with real browsers, providing detailed metrics, recommendations, and historical tracking to help developers and teams improve load times and user experience. Read and write GTmetrix data through One: pages, reports, tests, locations, browsers, simulateddevices and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in GTmetrix, create or update a record there, or build code against the GTmetrix API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gt-metrix
  generated-from: one-knowledge-base
---

# GTmetrix through One

A web performance analysis service that evaluates site speed and optimization by running tests with real browsers, providing detailed metrics, recommendations, and historical tracking to help developers and teams improve load times and user experience.

One exposes GTmetrix through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gt-metrix` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm GTmetrix is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real GTmetrix account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Page | GET | `/pages/{{pageId}}` | `conn_mod_def::GKIyyDUXbSc::sfMuJDIPSvGIHDef1Ozi8Q` |
| List Pages | GET | `/pages` | `conn_mod_def::GKIyyRjoJiY::YU_i8WeCQCWJrvz6NeFjtA` |
| Delete a Page | DELETE | `/pages/{{pageId}}` | `conn_mod_def::GKIyyN3gTD4::TDYWti7eSiS6YMLKNzeiZg` |
| Retest a Page | POST | `/pages/{{pageId}}/retest` | `conn_mod_def::GKIyyc5DJ-Y::G_opK3_5Tty5OomGFjb68Q` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Report | GET | `/reports/{{reportId}}` | `conn_mod_def::GKIyyagOUYM::-HOfNLD9TDGwovh7WQSp7w` |
| Delete a Report | DELETE | `/reports/{{reportId}}` | `conn_mod_def::GKIyyObMHmk::5Aygb2-RRzqFscpngWlo1w` |
| Retest a Report | POST | `/reports/{{reportId}}/retest` | `conn_mod_def::GKIyyctpTpc::YriNPoB6QamX8qohkQ3t-Q` |

### Tests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test | GET | `/tests/{{testId}}` | `conn_mod_def::GKIyylNIbIs::YpPK6VGCQXGgnKz0pNkUWA` |
| List Tests | GET | `/tests` | `conn_mod_def::GKIyyoHgCKM::W6nHA5OUSN2gXkXmNCnjQQ` |
| Start a Test | POST | `/tests` | `conn_mod_def::GKIyyl4tK10::rzzKH02XRnmg8PRSQS9DsQ` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location | GET | `/locations/{{locationId}}` | `conn_mod_def::GKIyyDsJFz4::M57dY2qPS8CAhpvDjkqvDg` |
| Get Locations | GET | `/locations` | `conn_mod_def::GKIyyBjubUc::dtiCDhpCTkajv7W3_mOX9Q` |

### Browsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Browser | GET | `/browsers/{{browserId}}` | `conn_mod_def::GKIyyCTtAA4::OG6VB3SIR0qcqkcEF_PbPA` |
| List Browsers | GET | `/browsers` | `conn_mod_def::GKIyyDJioJo::i3Y3BqPGT5qPZXBR-h8mTA` |

### SimulatedDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Simulated Device | GET | `/simulated-devices/{{simulatedDeviceId}}` | `conn_mod_def::GKIyydMJ0IE::cgFIKKtiS52ytPc7V3y_Ag` |
| List Simulated Devices | GET | `/simulated-devices` | `conn_mod_def::GKIyyl4sqPM::vgWSbqzDQPahTpHJPo8ajA` |

### PageReports

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Page's Reports | GET | `/pages/{{pageId}}/reports` | `conn_mod_def::GKIyyPQbnkc::a2bFnFKdRqulQ1Q1wnCZxQ` |

### PagesLatestReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Page's Latest Report | GET | `/pages/{{pageId}}/latest-report` | `conn_mod_def::GKIyyPecfXc::bINS4uWGT1exYT4hPB_fpA` |

### ReportResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Report Resource | GET | `/reports/{{reportId}}/resources/{{resourceName}}` | `conn_mod_def::GKIyyc3sLio::t0e2P18zRoaf7H3hxKJ7KQ` |

### ApiAccountStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Account Status | GET | `/status` | `conn_mod_def::GKIyyljq5rI::jvaLLXnhR-29oEBCK9NBEA` |

## When a call fails

The error comes from GTmetrix, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gt-metrix

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
