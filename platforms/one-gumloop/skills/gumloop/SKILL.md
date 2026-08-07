---
name: gumloop
description: Gumloop is a no-code AI automation platform that enables users to build and deploy complex workflows using a visual drag-and-drop interface, integrating large language models and third-party tools to automate tasks like document processing, web scraping, SEO, and CRM operations without writing code. Read and write Gumloop data through One: files, saveditems, exportdata, permissiongroupusers, auditlogs, downloadfiles and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in Gumloop, create or update a record there, or build code against the Gumloop API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gumloop
  generated-from: one-knowledge-base
---

# Gumloop through One

Gumloop is a no-code AI automation platform that enables users to build and deploy complex workflows using a visual drag-and-drop interface, integrating large language models and third-party tools to automate tasks like document processing, web scraping, SEO, and CRM operations without writing code.

One exposes Gumloop through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gumloop` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gumloop is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gumloop account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File (from a Flow Run) | POST | `/api/v1/download_file` | `conn_mod_def::GJ31gZWxVCE::bSY6Ep7ST563rgO0ZIy8IQ` |
| Upload a File | POST | `/api/v1/upload_file` | `conn_mod_def::GJ31gofiDKc::erzoVO1NT_yyCp4NryuDpg` |
| Upload Multiple Files (Upload Files) | POST | `/api/v1/upload_files` | `conn_mod_def::GJ31gwIN84g::k5LKaShzR7iytmjzUa1qjw` |

### SavedItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Saved Flows | GET | `/list_saved_items` | `conn_mod_def::GJ31evUCcIs::R7ZQeJCJSXa8iygr04fYOQ` |

### ExportData

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Organization or Workspace Data | POST | `/api/v1/export_data` | `conn_mod_def::GJ31g49WotU::vPrkwvqlRSOFlGZBxC-C4g` |

### PermissionGroupUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Manage Permission Group Users (Add/Remove) | POST | `/manage_permission_group_users` | `conn_mod_def::GJ31hKCMbEA::Xa250BYKSwy8Pb0Jc9p3aA` |

### AuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization’s Audit Logs | GET | `/get_audit_logs` | `conn_mod_def::GJ31hcot32U::GcWPY3IMR7eVRLkleTxkyg` |

### DownloadFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Multiple Files (ZIP) | POST | `/download_files` | `conn_mod_def::GJ31ghMHS3E::Ne_fkSRuSZefRwvHWRm5qA` |

### Workbooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workbooks and Their Saved Flows | GET | `/api/v1/list_workbooks` | `conn_mod_def::GJ31e41WRLs::-CkLxlT8TsuEliLpYQNTsw` |

### AutomationRunHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Automation Run History (by Workbook or Saved Item) | GET | `/get_plrun_saved_item_map` | `conn_mod_def::GJ31fEYyLbc::qR4hMiQzTa-9Unq9cxxfdA` |

### SavedItemInputs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Saved Item’s Input Schema | GET | `/get_inputs` | `conn_mod_def::GJ31fOCPq9U::-Yr63fNRToSn_YSpUY20_g` |

### AutomationRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Automation Run’s Details | GET | `/get_pl_run` | `conn_mod_def::GJ31fXjckx4::yk_cV8udQI-nyVxn16nTAQ` |

### PipelineRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Kill a Flow Run | POST | `/api/v1/kill_pipeline` | `conn_mod_def::GJ31gJbIcKM::l03PJivzQnGYRPYtt3fC5Q` |

### FlowRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Flow Run (Start Pipeline) | POST | `/api/v1/start_pipeline` | `conn_mod_def::GJ31gRReZw8::7vMIFfHXTiKLdbhQbwj2hQ` |

### WorkspaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Manage Workspace Users (Add or Remove) | POST | `/manage_workspace_users` | `conn_mod_def::GJ31hSqK06I::pNW39uccR1KpF0m6nuJgMg` |

### ExportStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Data Export Status | GET | `/export_status` | `conn_mod_def::GJ31hBwrqqM::yJ8OblyqQ8urlqdh6SkNKg` |

## When a call fails

The error comes from Gumloop, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gumloop

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
