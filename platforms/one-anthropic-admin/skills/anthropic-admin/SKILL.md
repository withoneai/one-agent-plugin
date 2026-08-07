---
name: anthropic-admin
description: Anthropic Admin provides administrative tools for managing access, API keys, usage, billing, and organizational settings for applications built with Claude AI models, allowing teams to control permissions, monitor usage analytics, and manage developer resources from a centralized console. Read and write Anthropic Admin data through One: organizationinvites, workspace, workspacemembers, organizationapikeys, organizationuser, organizationusers and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in Anthropic Admin, create or update a record there, or build code against the Anthropic Admin API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: anthropic-admin
  generated-from: one-knowledge-base
---

# Anthropic Admin through One

Anthropic Admin provides administrative tools for managing access, API keys, usage, billing, and organizational settings for applications built with Claude AI models, allowing teams to control permissions, monitor usage analytics, and manage developer resources from a centralized console.

One exposes Anthropic Admin through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `anthropic-admin` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Anthropic Admin is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Anthropic Admin account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OrganizationInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Invites | GET | `/organizations/invites` | `conn_mod_def::GJgJroojiHo::-V88poRcS_WQ461P9hXM5Q` |
| Retrieve an Organization Invite | GET | `/v1/organizations/invites/{{INVITE_ID}}` | `conn_mod_def::GJgJrhiMHdM::-3S5XtEsQkGPNsknLJX2OQ` |
| Delete an Organization Invite | DELETE | `/organizations/invites/{{invite_id}}` | `conn_mod_def::GJgJrudQzwU::mNJmDL9BS5mYCSVRGV6zpg` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workspace | GET | `/v1/organizations/workspaces/{{WORKSPACE_ID}}` | `conn_mod_def::GJgJtLc9rSM::Ghv8UBY7TbW5YiHcsQrdPw` |
| Create Workspace (Organization) | POST | `/organizations/workspaces` | `conn_mod_def::GJgJtE_Y-Wg::RtkhiTUjTraoOgylOGj0bw` |
| Update a Workspace | POST | `/v1/organizations/workspaces/{{WORKSPACE_ID}}` | `conn_mod_def::GJgJtbStr5w::T4wGRjHvTzexag8173BvFg` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Members | GET | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/members` | `conn_mod_def::GJgJt3XVqvg::IMVTBLTWRFuOWaCHt88QrQ` |
| Delete a Workspace Member | DELETE | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/members/{{USER_ID}}` | `conn_mod_def::GJgJuCrI924::_QzsPSQ_T3u2MF1ZuE-aOw` |
| Update a Workspace Member | POST | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/members/{{USER_ID}}` | `conn_mod_def::GJgJt9XrzJE::I-R4PpuySyunObP8BUpIkQ` |

### OrganizationApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's API Keys | GET | `/organizations/api_keys` | `conn_mod_def::GJgJrGeSgBQ::cajaOJIKRPaRRizIbLK7jQ` |
| Update an Organization API Key | POST | `/v1/organizations/api_keys/{{API_KEY_ID}}` | `conn_mod_def::GJgJrMxTcr4::VAtkePx4T-qUxljt2kk1jw` |

### OrganizationUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization User | GET | `/organizations/users/{{user_id}}` | `conn_mod_def::GJgJsKKTWC4::HMvvZWbzRICcgbmlmMp_vg` |
| Update an Organization User | POST | `/organizations/users/{{user_id}}` | `conn_mod_def::GJgJs3iBczU::tLsHdcFJTiKdMnjg1Zn9ow` |

### OrganizationUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Users | GET | `/organizations/users` | `conn_mod_def::GJgJsQ8Wk7U::bDgkeQWFTdWK5jN0gSVNRg` |
| Delete an Organization User | DELETE | `/organizations/users/{{USER_ID}}` | `conn_mod_def::GJgJs9sWnhg::zYlEguySTCyYKIOTycpbQg` |

### WorkspaceMember

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workspace Member | GET | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/members/{{USER_ID}}` | `conn_mod_def::GJgJtwWuChA::bcfSemOKTqyc60HM38MRiQ` |
| Create a Workspace Member | POST | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/members` | `conn_mod_def::GJgJtoKw5IU::S60kxFIXQ1S0geOVDZ5Vjg` |

### OrganizationApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization API Key | GET | `/v1/organizations/api_keys/{{API_KEY_ID}}` | `conn_mod_def::GJgJq7lJBOQ::8gk7znR2T1-KAX-cNN3B1g` |

### OrganizationCostReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization Cost Report | GET | `/organizations/cost_report` | `conn_mod_def::GJgJrUxHFYY::GpxmIiZESu-QPvtfI3VUHg` |

### OrganizationInvite

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization Invite | POST | `/organizations/invites` | `conn_mod_def::GJgJraUPZ_k::c6ZsGJPuR6m1QQC-Ixhc_Q` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve the Authenticated Organization (“me”) | GET | `/organizations/me` | `conn_mod_def::GJgJr2KAYLs::8708OeWoSvidB5VhG15DrQ` |

### OrganizationMessagesUsageReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Organization Messages Usage Report | GET | `/organizations/usage_report/messages` | `conn_mod_def::GJgJr9ZYfCM::w9uaAOKuTWCDNxZAy_Wt6A` |

### ClaudeCodeUsageReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Claude Code Usage Report | GET | `/organizations/usage_report/claude_code` | `conn_mod_def::GJgJsEW9Do0::NMNrpQHjTR26eeTZBWgZcw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/organizations/workspaces` | `conn_mod_def::GJgJtSwBa4M::wMaF2f4zTmajzBV1X1Gs4A` |

### OrganizationWorkspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive an Organization Workspace | POST | `/v1/organizations/workspaces/{{WORKSPACE_ID}}/archive` | `conn_mod_def::GJgJth8QFP0::XGJHD7lXQiy4I7HYi6koHQ` |

## When a call fails

The error comes from Anthropic Admin, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/anthropic-admin

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
