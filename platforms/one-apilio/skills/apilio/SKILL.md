---
name: apilio
description: Apilio is a cloud-based smart home automation platform that adds advanced logic across devices and brands, enabling users to build multi-condition rules, delays, schedules, and webhook-driven automations without requiring a local hub or server maintenance. Read and write Apilio data through One: booleanvariables, logicblocks, numericvariables, stringvariables, timeconditions, tuyaconditions and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in Apilio, create or update a record there, or build code against the Apilio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: apilio
  generated-from: one-knowledge-base
---

# Apilio through One

Apilio is a cloud-based smart home automation platform that adds advanced logic across devices and brands, enabling users to build multi-condition rules, delays, schedules, and webhook-driven automations without requiring a local hub or server maintenance.

One exposes Apilio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `apilio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Apilio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Apilio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BooleanVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Boolean Variable Details | GET | `/api/v1/boolean_variables/{{uuid}}` | `conn_mod_def::GMb-FdcVlug::UPv5r1rSQBG3a6G0YBZcFQ` |
| List Boolean Variables | GET | `/api/v1/boolean_variables` | `conn_mod_def::GMb-FeT7CfA::UL02S65FS3OFRs6nt9FPXA` |
| Update a Boolean Variable | PUT | `/api/v1/boolean_variables/{{booleanVariableId}}` | `conn_mod_def::GMb-FgCj1Yg::LTgTbAYsRcm-L7-wq27Q9Q` |

### Logicblocks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Logicblocks | GET | `/api/v1/logicblocks/` | `conn_mod_def::GMb-F-D96WA::zKZkY_O4TN2P-6bX7qnx7A` |
| Activate or Deactivate a Logicblock | PATCH | `/api/v1/logicblocks/{{logicblockId}}` | `conn_mod_def::GMb-FynLrCg::PxDFSYWNRsO39QVw5P_reQ` |
| Evaluate a Logicblock | POST | `/api/v1/logicblocks/{{logicblockId}}/evaluate` | `conn_mod_def::GMb-FzaG36A::pshH4UTrSMaYD4V0Q01arQ` |

### NumericVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Details of a Numeric Variable | GET | `/api/v1/numeric_variables/{{uuid}}` | `conn_mod_def::GMb-FzMufUA::g4oiW_TLQ3moHRaHZjj25Q` |
| List Numeric Variables | GET | `/api/v1/numeric_variables` | `conn_mod_def::GMb-FyoeKVg::orrjxysYRemE1hLOsZiJ2Q` |
| Update a Numeric Variable | PUT | `/api/v1/numeric_variables/{{numericVariableId}}` | `conn_mod_def::GMb-GJFMlfA::Ni1wdRNVSc60u5jJCLG-nA` |

### StringVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get String Variable Details | GET | `/api/v1/string_variables/{{stringVariableId}}` | `conn_mod_def::GMb-GF5zTCg::mOK5y_roROy9cf-fDbxKRA` |
| List String Variables | GET | `/api/v1/string_variables` | `conn_mod_def::GMb-GD_KMRA::z5DAuSq5T-q5GvjWQKni2w` |
| Update a String Variable | PUT | `/api/v1/string_variables/{{stringVariableId}}` | `conn_mod_def::GMb-GFK_cqg::iB4Mx6zmTpGcVVnce_kmdw` |

### TimeConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Condition Details | GET | `/api/v1/timeconditions/{{timeconditionId}}` | `conn_mod_def::GMb-FsEPYtg::OmG29IOzS5icaLP1dYFzDg` |
| List Time Conditions | GET | `/api/v1/timeconditions` | `conn_mod_def::GMb-FeJ6Nyg::crC8jM_ITOS1PII_T_0Fdw` |

### TuyaConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tuya Condition Details | GET | `/api/v1/tuyaconditions/{{tuyaConditionId}}` | `conn_mod_def::GMb-Fn0W0-A::hiGuispqTwixj0QXPrRYVw` |
| List Tuya Conditions | GET | `/api/v1/tuyaconditions` | `conn_mod_def::GMb-FmjdeYg::kiEuz66FR7KNMdEvkX7kCg` |

### VariableConditions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Variable Condition Details | GET | `/api/v1/variableconditions/{{uuid}}` | `conn_mod_def::GMb-Fn0OFZg::FMd1dx7TQmOWy1X05fLnqQ` |
| List Variable Conditions | GET | `/api/v1/variableconditions` | `conn_mod_def::GMb-Fm7itDg::3RyopaO_SmSUvKHvIsT4DA` |

### Conditions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conditions | GET | `/api/v1/conditions/` | `conn_mod_def::GMb-FdrPtNA::PF5Nkb_rQnatdKXNvAXGCA` |

## When a call fails

The error comes from Apilio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/apilio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
