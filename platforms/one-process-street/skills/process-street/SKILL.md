---
name: process-street
description: A cloud-based platform that enables teams to document, automate, and run recurring checklists, processes, and standard operating procedures with templates, approvals, and tracking to improve consistency and operational efficiency. Read and write Process Street data through One: workflowruns, comments, datasetrecords, workflowruntasks, tasks, workflowrunformfieldvalues and more, 44 actions with real parameter documentation. Use whenever the user asks to look something up in Process Street, create or update a record there, or build code against the Process Street API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: process-street
  generated-from: one-knowledge-base
---

# Process Street through One

A cloud-based platform that enables teams to document, automate, and run recurring checklists, processes, and standard operating procedures with templates, approvals, and tracking to improve consistency and operational efficiency.

One exposes Process Street through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `process-street` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Process Street is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Process Street account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WorkflowRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workflow Run | GET | `/workflow-runs/{{workflowRunId}}` | `conn_mod_def::GKHnS54cdiM::eZxcBiqwSOySV1-n8ALO_Q` |
| Search Workflow Runs | GET | `/workflow-runs` | `conn_mod_def::GKHnS7PyD4s::rj9Hoct3RXezWxr_8et39Q` |
| Assign a User to a Workflow Run | POST | `/workflow-runs/{{workflowRunId}}/assignees/{{email}}` | `conn_mod_def::GKHnSwsQfU0::eoXhnhF_QPG_LMsh5RYy1w` |
| Batch Update Form Field Values for a Workflow Run | POST | `/workflow-runs/{{workflowRunId}}/form-fields` | `conn_mod_def::GKHnSDCJ8_w::aNr4eVkDTZ6yMYcOGEJV8w` |
| Create a Workflow Run | POST | `/workflow-runs` | `conn_mod_def::GKHnSw2AFxQ::c4vBUv8HQlKbI2e5BXwoFg` |
| Delete a Workflow Run | DELETE | `/workflow-runs/{{workflowRunId}}` | `conn_mod_def::GKHnS5hm27g::MN4O5vyVQCuRzsiqhUzNPQ` |
| Unassign a User from a Workflow Run | DELETE | `/workflow-runs/{{workflowRunId}}/assignees/{{email}}` | `conn_mod_def::GKHnS53wKaQ::hOXR62hAR6uhnopUeOu9dQ` |
| Undelete a Workflow Run | POST | `/workflow-runs/{{workflowRunId}}/undelete` | `conn_mod_def::GKHnTDLZRek::AXygkk1KRmKc9-abdUJT6w` |
| Update a Workflow Run | PUT | `/workflow-runs/{{workflowRunId}}` | `conn_mod_def::GKHnTENnSqQ::7Ix-S6VORzuFHP9G7SvC2A` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment | GET | `/comments/{{commentId}}` | `conn_mod_def::GKHnRnRaOKQ::FyAdkq_ST2Sza129FpVSkw` |
| List All Comments | GET | `/comments` | `conn_mod_def::GKHnRoHTJ-I::s27bYVBESO-K97RbCDJkrQ` |
| Create a Comment | POST | `/comments` | `conn_mod_def::GKHnRmRF9gI::4uU9TT1_R6SDfEWebGUlEg` |
| Delete a Comment | DELETE | `/comments/{{commentId}}` | `conn_mod_def::GKHnRmnxJk0::ypr_7UoJSfCWAk9h1OUdvg` |
| Update a Comment | PUT | `/comments/{{commentId}}` | `conn_mod_def::GKHnRk7zOHk::5RD4GirzQ8WrO0hXMykavA` |

### DataSetRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Set Record | GET | `/data-sets/{{dataSetId}}/records/{{dataSetRecordId}}` | `conn_mod_def::GKHnRyLNXJs::JVyh8fETT9GI4h10BvpQTQ` |
| List a Data Set's Records | GET | `/data-sets/{{dataSetId}}/records` | `conn_mod_def::GKHnRzFGHvI::Tzb1cW50Qsutbj4SZacfVA` |
| Delete a Data Set Record | DELETE | `/data-sets/{{dataSetId}}/records/{{dataSetRecordId}}` | `conn_mod_def::GKHnRyiokJk::bBxa9k4DTlqmbhTOd_DPvQ` |
| Import Data Set Records | POST | `/data-sets/{{dataSetId}}/records/import` | `conn_mod_def::GKHnR2sP-n4::hEczdCypSxyW-Vp9qIjcTA` |
| Update a Data Set Record | PUT | `/data-sets/{{dataSetId}}/records/{{dataSetRecordId}}` | `conn_mod_def::GKHnSBmnJGA::ivvEtly5TuGOBR-b8TVoLg` |

### WorkflowRunTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workflow Run Task | GET | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}` | `conn_mod_def::GKHnScB67nI::WI-0NMj9QIO8fZWFWqErQA` |
| Assign a User to a Workflow Run Task | PUT | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}/assignees/{{email}}` | `conn_mod_def::GKHnScjPQ9o::0N9J2Ue2RrC4zKsb-jHwZw` |
| Unassign a User from a Workflow Run Task | DELETE | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}/assignees/{{email}}` | `conn_mod_def::GKHnSnJSXKU::4-kK87FxQV-vlVQIf28DoA` |
| Update a Workflow Run Task | PUT | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}` | `conn_mod_def::GKHnSoYEGE0::Y9me8ERZQU-if0j4t_Gr3g` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/tasks` | `conn_mod_def::GKHnSoqIzJw::pUnXMjRdSP61muUHGFEj7g` |
| List Tasks in a Workflow Run | GET | `/workflow-runs/{{workflowRunId}}/tasks` | `conn_mod_def::GKHnSnuNwCY::gwFin3x-Ta-TUdsWugcs-g` |

### WorkflowRunFormFieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow Run's Form Field Values | GET | `/workflow-runs/{{workflowRunId}}/form-fields` | `conn_mod_def::GKHnSOxtHCQ::BjtgNSTaTAuDTo9wCDNcEw` |
| Upload a Workflow Run Form Field Value | POST | `/workflow-runs/{{workflowRunId}}/form-fields/{{formFieldId}}/upload` | `conn_mod_def::GKHnSOjGIyA::SjyXrgesSHa-H8TvETajpQ` |

### WorkflowRunApprovals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Approvals in a Workflow Run | GET | `/workflow-runs/{{workflowRunId}}/approvals` | `conn_mod_def::GKHnSe2L03M::v5wcykefQKqJX1vpI_Ct4A` |
| Approve or Reject a Workflow Run Task Approval | PUT | `/workflow-runs/{{workflowRunId}}/approvals` | `conn_mod_def::GKHnSdKyakM::yRLM5Lr4QqGJlJQsTqN15Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook | POST | `/api/v1.1/webhooks` | `conn_mod_def::GKHnSxE296o::74e6onjBSSeKvoKima0HEQ` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GKHnSxdjNYI::BwF4y0HUSKKOeX-eygV0Zw` |

### DataSetRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Data Set Record | POST | `/data-sets/{{dataSetId}}/records` | `conn_mod_def::GKHnRyQjfXk::V5gF5W4BSgGU0oLRWS0GCg` |

### DataSets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Data Sets | GET | `/data-sets` | `conn_mod_def::GKHnSCM2GUA::0MqMDWbTRTSf2SAg6bjAGw` |

### WorkflowRunFormFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete All Files From a Workflow Run Form Field | DELETE | `/workflow-runs/{{workflowRunId}}/form-fields/{{formFieldId}}/upload` | `conn_mod_def::GKHnSCdi4DI::McoQUQnjRKeR39Ux4fdNLA` |

### WorkflowRunFormFieldFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Workflow Run Form Field File | DELETE | `/workflow-runs/{{workflowRunId}}/form-fields/{{formFieldId}}/upload/{{fileId}}` | `conn_mod_def::GKHnSE_1TpQ::uZxgR6STRxCaRuQBty6IUA` |

### WorkflowFormFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow's Form Fields | GET | `/workflows/{{workflowId}}/form-fields` | `conn_mod_def::GKHnSOeopf4::M-XuhHAzS7i-u6KqvWlbCQ` |

### WorkflowFormFieldOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Options for a Workflow Form Field | GET | `/workflows/{{workflowId}}/form-fields/{{formFieldId}}/options` | `conn_mod_def::GKHnSO9hl9A::nb-vW9nXRaWbCKHIxi1UfA` |

### WorkflowRunTaskFormFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow Run Task's Form Field Values | GET | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}/form-fields` | `conn_mod_def::GKHnSTLHXIw::qGzoOCBfRg-MFiXVc87XHA` |

### WorkflowRunTaskAssignees

| Action | Method | Path | Action id |
|---|---|---|---|
| List Assignees for a Workflow Run Task | GET | `/workflow-runs/{{workflowRunId}}/tasks/{{taskId}}/assignees` | `conn_mod_def::GKHnSdCMotg::9DS9HZoXS5y9yTWtyvXawQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/api/v1.1/users` | `conn_mod_def::GKHnSnM-dyY::dcU0dIYSSOyZiSe2RqXwBA` |

### Authentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Test Authentication | GET | `/testAuth` | `conn_mod_def::GKHnSw0KCVE::ynIenRw9SIWU3EMTSBs5cw` |

### WorkflowRunAssignees

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow Run's Assignees | GET | `/workflow-runs/{{workflowRunId}}/assignees` | `conn_mod_def::GKHnS7O6w0k::r-fkL6BYSEq9iORZNHMQkw` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workflows | GET | `/workflows` | `conn_mod_def::GKHnTD2MBCY::10R_gGsKTtq4OrFFaf0mMw` |

### WorkflowTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workflow's Tasks | GET | `/workflows/{{workflowId}}/tasks` | `conn_mod_def::GKHnTEFVaEs::RY_hsrk5Su2AxQD3trXrTg` |

## When a call fails

The error comes from Process Street, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/process-street

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
