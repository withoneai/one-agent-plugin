---
name: certifier
description: Certifier is a digital credential management platform that enables organizations to design, issue, and verify certificates and badges at scale, automating credential workflows while providing analytics, integrations, and secure online hosting for verifiable achievements. Read and write Certifier data through One: credentials, credentialtemplates, credentialinteractions, groups, credentialdesigntemplates, designs and more, 18 actions with real parameter documentation. Use whenever the user asks to look something up in Certifier, create or update a record there, or build code against the Certifier API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: certifier
  generated-from: one-knowledge-base
---

# Certifier through One

Certifier is a digital credential management platform that enables organizations to design, issue, and verify certificates and badges at scale, automating credential workflows while providing analytics, integrations, and secure online hosting for verifiable achievements.

One exposes Certifier through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `certifier` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Certifier is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Certifier account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Credentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credential | GET | `/v1/credentials/{{id}}` | `conn_mod_def::GKXnmcAuaAA::MLetGKijRa-TG35MGBDrqg` |
| List Credentials | GET | `/v1/credentials` | `conn_mod_def::GKXnmmBo_dA::25ckxkmzQXSQAszUzw31xA` |
| Create a Credential | POST | `/v1/credentials` | `conn_mod_def::GKXnmW9hn1A::-1Ic74SlSf2Wjz9D9NSs7A` |
| Create, Issue, and Send a Credential | POST | `/v1/credentials/create-issue-send` | `conn_mod_def::GKXnmZEB7eA::QreK20K0TsC9_G6rrvgv0Q` |
| Issue a Credential | POST | `/v1/credentials/{{id}}/issue` | `conn_mod_def::GKXnmmHUwtA::8bdX63GeRSOBcA-VHNIegQ` |
| Search Credentials | POST | `/v1/credentials/search` | `conn_mod_def::GKXnmkuATMA::NiA_S7FyRom1YX7Ez1VzSQ` |
| Send a Credential | POST | `/v1/credentials/{{id}}/send` | `conn_mod_def::GKXnmmaV7JA::UqBWo2IJRrCGPypdpBiYtg` |
| Update a Credential | PATCH | `/v1/credentials/{{id}}` | `conn_mod_def::GKXnmvzOzYA::6TlW6bgsSVGchb0mWjwdCg` |

### CredentialTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credential Template | GET | `/v1/groups/{{id}}` | `conn_mod_def::GKXnmOcwY1A::SRjx5DPkQz2Cp0CfjNqGwg` |
| List Credential Templates | GET | `/v1/groups` | `conn_mod_def::GKXnmXvWMMA::h-XN-GjVSWe1Gf8_EsH9hw` |
| Delete a Credential Template | DELETE | `/v1/groups/{{id}}` | `conn_mod_def::GKXnmN2Thtg::k2y_5ww4R-Kggt3gW6-rAQ` |
| Update a Credential Template | PATCH | `/v1/groups/{{id}}` | `conn_mod_def::GKXnmXve07A::wCwNtCSmT9esJmCMhtVaHw` |

### CredentialInteractions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Credential Interactions | GET | `/credential-interactions` | `conn_mod_def::GKXnmPK064g::RsbFS0FzTq--WeiYx44dpg` |
| Create a Credential Interaction | POST | `/credential-interactions` | `conn_mod_def::GKXnmOMO-Bg::tKd6U4XXT_q7ezHmG0vrpw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Credential Template | POST | `/v1/groups` | `conn_mod_def::GKXnmO_NMQA::f3jtjvC4Trq6b8wvbDcxpw` |

### CredentialDesignTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credential's Design Templates | GET | `/v1/credentials/{{id}}/designs` | `conn_mod_def::GKXnmnW5Tjg::ekedL8fGSzK4z8Y3EEoseg` |

### Designs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Design Templates | GET | `/designs` | `conn_mod_def::GKXnmwAV5hg::ljBy7XRQTjuRepVn5LQjcw` |

### DesignTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Template | GET | `/v1/designs/{{id}}` | `conn_mod_def::GKXnmwMH4aA::me-ZvVkeQgmrzgK0Nycsog` |

## When a call fails

The error comes from Certifier, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/certifier

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
