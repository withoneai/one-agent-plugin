---
name: e2b
description: E2B is a cloud runtime platform for AI agents that provides secure, isolated sandboxes for executing code, running tools, and accessing files, allowing developers to build agentic applications with controlled execution environments and programmatic infrastructure. Read and write E2B data through One: templates, sandboxes, apikeys, nodes, volumes, sandboxmetrics and more, 56 actions with real parameter documentation. Use whenever the user asks to look something up in E2B, create or update a record there, or build code against the E2B API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: e2b
  generated-from: one-knowledge-base
---

# E2B through One

E2B is a cloud runtime platform for AI agents that provides secure, isolated sandboxes for executing code, running tools, and accessing files, allowing developers to build agentic applications with controlled execution environments and programmatic infrastructure.

One exposes E2B through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `e2b` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm E2B is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real E2B account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Template Alias | GET | `/templates/aliases/{{alias}}` | `conn_mod_def::GLddvP0mTMg::M9V6yG8VQc-kpnQAtbL9QA` |
| Get a Template | GET | `/templates/{{templateId}}` | `conn_mod_def::GLddvHfDxRA::OtFutdV_TvCan1sbYi1APQ` |
| List Templates | GET | `/templates` | `conn_mod_def::GLddvH_Jc0A::ZQmqQOPTSRigjM-1YjtAjQ` |
| Assign Tags to a Template Build | POST | `/templates/tags` | `conn_mod_def::GLddvHOwmkg::8M8rbSjCQvWQbCsM2Pguew` |
| Create Template | POST | `/templates` | `conn_mod_def::GLddvaZqIgA::SjMGVXBKQK6XmyUTkobLFg` |
| Create Template | POST | `/v2/templates` | `conn_mod_def::GLddvb1ZrzA::dfAAIB-URq6pA30_yXAkJg` |
| Create Template | POST | `/v3/templates` | `conn_mod_def::GLddvkPnylA::wE-hh4NhStW_4_aRq-LDfQ` |
| Delete a Template | DELETE | `/templates/{{templateId}}` | `conn_mod_def::GLddvGUX6Ig::o3dGLILURvenXzOFZHEU-A` |
| Delete Tags from Templates | DELETE | `/templates/tags` | `conn_mod_def::GLddu4Ggdog::76pXEkpdRiS8c-GyzutRKw` |
| Rebuild a Template | POST | `/templates/{{templateId}}` | `conn_mod_def::GLddvZzolbg::r2wv4IUcT2yAlDxDYL1nVw` |
| Update a Template | PATCH | `/v2/templates/{{templateId}}` | `conn_mod_def::GLddvaR5E-g::2Q9XyoOZT3O0aX7E_3DrqQ` |
| Update Template | PATCH | `/templates/{{templateId}}` | `conn_mod_def::GLddvRRal6A::zzfw5vDTRG6sqsDZfNhBdQ` |

### Sandboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sandbox by ID | GET | `/sandboxes/{{sandboxId}}` | `conn_mod_def::GLddudwvHqg::5evCuH5gQoqWTvchsxOX0g` |
| List Sandboxes | GET | `/sandboxes` | `conn_mod_def::GLddudeou8g::iK2znv0ORFWOOxVZuS5qVQ` |
| List Sandboxes | GET | `/v2/sandboxes` | `conn_mod_def::GLddumj6QaA::nwTlunhrSTKa-cI6e1wHqA` |
| Connect to a Sandbox | POST | `/sandboxes/{{sandboxId}}/connect` | `conn_mod_def::GLdduvu1bYA::VnEz3OJeTViDWazUiKmvag` |
| Create Sandbox | POST | `/sandboxes` | `conn_mod_def::GLdduv1YT-A::xjBn_RTmTDqnVHI-C-XqxA` |
| Delete a Sandbox | DELETE | `/sandboxes/{{sandboxId}}` | `conn_mod_def::GLdducsOBLg::Oq_1J7vtQNSouns1lNoiJQ` |
| Kill All Sandboxes for a Team | POST | `/admin/teams/{{teamId}}/sandboxes/kill` | `conn_mod_def::GLdduKNyb4A::UjyhfcIcTwKjAu7OgbdNJQ` |
| Pause a Sandbox | POST | `/sandboxes/{{sandboxId}}/pause` | `conn_mod_def::GLdduvSJDDg::k75anqHqQ0WhEQYA7pJPWw` |
| Refresh a Sandbox | POST | `/sandboxes/{{sandboxId}}/refreshes` | `conn_mod_def::GLdduwFpEXg::TVuZXoeHRPSAnHfSPOajLg` |
| Resume Sandbox | POST | `/sandboxes/{{sandboxId}}/resume` | `conn_mod_def::GLdduwLVAXA::3KH9jFBWQ9ukULG8ExiZcA` |
| Set Sandbox Timeout | POST | `/sandboxes/{{sandboxId}}/timeout` | `conn_mod_def::GLddu4ZWdOg::F1xKd7E0SXaa3pWPkr-vTg` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys | GET | `/api-keys` | `conn_mod_def::GLdduSYDoxA::AuMmUHOvRVyx0Rkejii-2w` |
| Create API Keys | POST | `/api-keys` | `conn_mod_def::GLdduS4uMqg::CYRU6yBuQhWOD-qeFAMCBQ` |
| Create API Keys Using Admin Teams | POST | `/admin/teams/{{teamId}}/api-keys` | `conn_mod_def::GLddtzq-stg::GyXkEDG_QeKCC2zvV2M5uA` |
| Delete an API Key | DELETE | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GLdduK9BM6A::KGLuftq9R9Wt4vBOzyaWCQ` |

### Nodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Node Info | GET | `/nodes/{{nodeId}}` | `conn_mod_def::GLdduKUS5Mg::BKtFwJmISsSGQC1wVV3rwQ` |
| List Nodes | GET | `/nodes` | `conn_mod_def::GLdduJ4OGFA::5bJDei4cS7KwwxGcZ2yqMA` |
| Update a Node | POST | `/nodes/{{nodeId}}` | `conn_mod_def::GLdduJ_M14A::8lbIwXPLSlKMzTq4G4GPxw` |

### Volumes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Volume Info | GET | `/volumes/{{volumeId}}` | `conn_mod_def::GLddvj4XqWA::3cg8NilpQFyd0Cq5n-oNXg` |
| List Team Volumes | GET | `/volumes` | `conn_mod_def::GLddvj_-O-A::jDNq9jJjQaOydojluRmGJg` |
| Create Volume | POST | `/volumes` | `conn_mod_def::GLddvwlY4Ug::D_3nLbGJTxWlHKBpFjowvQ` |

### SandboxMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sandbox Metrics | GET | `/sandboxes/{{sandboxId}}/metrics` | `conn_mod_def::GLddumfZwig::9Zoqv-G9QYuR1aw94hFAeQ` |
| List Sandbox Metrics | GET | `/sandboxes/metrics` | `conn_mod_def::GLddumf6Ybg::Aq8lKupKSwC8SGkkAwCJwA` |

### SandboxLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sandbox Logs | GET | `/v2/sandboxes/{{sandboxId}}/logs` | `conn_mod_def::GLddun0BYJg::3X2a91WwSsSeLjVNchiP4Q` |
| Get Sandbox Logs | GET | `/sandboxes/{{sandboxId}}/logs` | `conn_mod_def::GLddum3cRYg::8EICSVQ2RRG-Rb8HPgCcyQ` |

### TemplateBuilds

| Action | Method | Path | Action id |
|---|---|---|---|
| Start the Build for a Template Build | POST | `/v2/templates/{{templateId}}/builds/{{buildId}}` | `conn_mod_def::GLddvnEIavg::_ybQf8lxQh611sAFbWq60w` |
| Start the Build for a Template Build | POST | `/templates/{{templateId}}/builds/{{buildId}}` | `conn_mod_def::GLddvbE5yYg::ckXcHOtvSe-5w2rnSbMzdQ` |

### AccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Access Tokens | POST | `/access-tokens` | `conn_mod_def::GLddtzZteVg::SEVcgDVrTeGtL-1eBCKXBw` |
| Delete Access Token | DELETE | `/access-tokens/{{accessTokenID}}` | `conn_mod_def::GLddty0oq9g::eEy1KO_bSqKSAlLCna3Aeg` |

### TeamApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Team API Key as Admin | DELETE | `/admin/teams/{{teamId}}/api-keys/{{apiKeyId}}` | `conn_mod_def::GLddtzTFU1A::UggtlsQ5STG6Q8MQOUNH3w` |
| Update a Team API Key | PATCH | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GLdduThH-5g::tz_X4NdySWGJx_0uUmoKPA` |

### TeamMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Maximum Team Metrics | GET | `/teams/{{teamId}}/metrics/max` | `conn_mod_def::GLddueTPBVA::jeCs47_AREyp3r_q03uQ5w` |
| Get Team Metrics | GET | `/teams/{{teamId}}/metrics` | `conn_mod_def::GLdduTYBjgg::Ft0h702vQfeb6Tly7y4iBA` |

### Snapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Snapshots | GET | `/snapshots` | `conn_mod_def::GLddu4Pb81A::imRuER7jS1GOhkbfM9oWZA` |
| Create Snapshots for a Sandbox | POST | `/sandboxes/{{sandboxId}}/snapshots` | `conn_mod_def::GLddu-gSM5g::bqrux8vNRQCWT3-Z3cAX8g` |

### Builds

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel All Builds for a Team | POST | `/admin/teams/{{teamId}}/builds/cancel` | `conn_mod_def::GLdduBnmALA::-SLEfBtfQjavKL-SgHdYEQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/teams` | `conn_mod_def::GLdduSW1QKg::QzT7o5E8R3yQqEXF-mR-7A` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/health` | `conn_mod_def::GLdduc2Cxag::C6Xa3ZHDRR2D1VO9CtuBJg` |

### SandboxNetworkConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Sandbox Network Configuration | PUT | `/sandboxes/{{sandboxId}}/network` | `conn_mod_def::GLddu4iMxXg::Gz0y3TLuTlKEQYByy9m9RA` |

### TemplateTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags for a Template | GET | `/templates/{{templateId}}/tags` | `conn_mod_def::GLddvF_U1Pg::bDaXVDAZQxe8xZT4ZDmCVA` |

### TemplateFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template File Upload Link | GET | `/templates/{{templateId}}/files/{{hash}}` | `conn_mod_def::GLddvQxIBKg::eHaKG1qNQO2SKDLpByyH8g` |

### TemplateBuildStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Build Status for a Template | GET | `/templates/{{templateId}}/builds/{{buildId}}/status` | `conn_mod_def::GLddvRXOMIg::tc49rSKNTU--rGUl-FDU4Q` |

### TemplateBuildLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Logs for a Template Build | GET | `/templates/{{templateId}}/builds/{{buildId}}/logs` | `conn_mod_def::GLddvRxtTcA::4ONscLvDTWeNMnkW3zB4Aw` |

### TeamVolume

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Team Volume | DELETE | `/volumes/{{volumeId}}` | `conn_mod_def::GLddvkGvuIg::XbNFE1ApRGuuq1O4QwaBWA` |

## When a call fails

The error comes from E2B, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/e2b

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
