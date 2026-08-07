---
name: conversion-tools
description: ConversionTools is a file conversion and data transformation platform that provides APIs and automation for converting documents, images, audio, video, and structured data, allowing developers and businesses to integrate format conversion and processing workflows into applications and back-office systems. Read and write ConversionTools data through One: tasks, files, apiconfiguration, authenticateduserinfo and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in ConversionTools, create or update a record there, or build code against the ConversionTools API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: conversion-tools
  generated-from: one-knowledge-base
---

# ConversionTools through One

ConversionTools is a file conversion and data transformation platform that provides APIs and automation for converting documents, images, audio, video, and structured data, allowing developers and businesses to integrate format conversion and processing workflows into applications and back-office systems.

One exposes ConversionTools through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `conversion-tools` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ConversionTools is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ConversionTools account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Task Status | GET | `/v1/tasks/{{taskId}}` | `conn_mod_def::GMa0OUBrlCA::jfO63e4dTSS9dMjFHDh1QA` |
| List Tasks | GET | `/v1/tasks` | `conn_mod_def::GMa0OUr18WA::0e4clVbISkKlrzLVA7pHRQ` |
| Create a Conversion Task | POST | `/v1/tasks` | `conn_mod_def::GMa0OUBH17A::wRuxQclYTSOKxCvpOfm9cA` |
| Delete Task Files | POST | `/v1/tasks/{{taskId}}/delete` | `conn_mod_def::GMa0OTl-0AA::YmbK4hknTsuMEpYvJnrqKQ` |
| Update Task Retention | PATCH | `/v1/tasks/{{taskId}}/retention` | `conn_mod_def::GMa0OUAks5g::yXc2T5UvSCCihsFMSLsUSA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/v1/files/{{fileId}}` | `conn_mod_def::GMa0OMcelbg::9NoO6kU4S_SajT3C_tKQ_g` |
| Get File Metadata | GET | `/v1/files/{{fileId}}/info` | `conn_mod_def::GMa0OMyIyOg::QY9jU6cnTuWcRszS9AC4oQ` |
| Upload a File | POST | `/v1/files` | `conn_mod_def::GMa0ONCxMTA::tC9kFFQqSf2ih97TN-FtjQ` |

### ApiConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Configuration | GET | `/v1/config` | `conn_mod_def::GMa0OMcOq4A::v1TDuKKqTliQjtXKB9n-Yw` |

### AuthenticatedUserInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authenticated User Info | GET | `/v1/auth` | `conn_mod_def::GMa0ONFTRWA::tbl58utWTV67wx_wLMjk1w` |

## When a call fails

The error comes from ConversionTools, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/conversion-tools

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
