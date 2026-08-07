---
name: data-scope
description: DataScope is a mobile data collection and workflow platform that provides digital forms, inspections, and field reporting tools, allowing teams to capture structured data offline, automate operational processes, and synchronize results for analysis and compliance tracking. Read and write DataScope data through One: metadataobject, locations, answers, metadataobjects, tickets, taskassigns and more, 20 actions with real parameter documentation. Use whenever the user asks to look something up in DataScope, create or update a record there, or build code against the DataScope API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: data-scope
  generated-from: one-knowledge-base
---

# DataScope through One

DataScope is a mobile data collection and workflow platform that provides digital forms, inspections, and field reporting tools, allowing teams to capture structured data offline, automate operational processes, and synchronize results for analysis and compliance tracking.

One exposes DataScope through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `data-scope` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm DataScope is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real DataScope account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MetadataObject

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Metadata Object | GET | `/api/external/metadata_object` | `conn_mod_def::GMRhsOduKfI::yAqFBJ39R9qCSz0N0Dlvaw` |
| Create a List Element Using Metadata Object | POST | `/api/external/metadata_object` | `conn_mod_def::GMRhsObWzyk::SYbjbXXTTcCgc9qPoODEJg` |
| Update a Metadata Object | POST | `/api/external/metadata_object/{{id}}` | `conn_mod_def::GMRhtP4xttI::pSG6oAOOSbS0bLRggVskzw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/api/external/locations` | `conn_mod_def::GMRhsa_vR0k::vgm05B_yRlyN-5T2nin8XA` |
| Create a Location | POST | `/api/external/locations` | `conn_mod_def::GMRhsbr9u7o::nU9vX7JDTPWDCSwa3i1lYg` |
| Update a Location | POST | `/api/external/locations/{{locationId}}` | `conn_mod_def::GMRhsbX7HJE::wEup9SUPRr2YCKgpe5RBKQ` |

### Answers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Answers with Metadata | GET | `/api/external/answers` | `conn_mod_def::GMRhr73foys::e8OBLsFdSNCP9chxYk8GvQ` |
| List All Answers | GET | `/api/external/v2/answers` | `conn_mod_def::GMRhr7akOxk::WwgvyU0dQHWr9YRIUsglRA` |

### MetadataObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Metadata Objects | GET | `/api/external/metadata_objects` | `conn_mod_def::GMRhsPOp-4o::KvPOfg0dQTyXIJ8zOtdPCQ` |
| Bulk Update Metadata Objects | POST | `/api/external/metadata_objects/bulk_update` | `conn_mod_def::GMRhr8JE4MA::ZgsboC__SQGv_SYutLE8yw` |

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticket | GET | `/api/external/findings/get/{{id}}` | `conn_mod_def::GMRhtmEAIeg::PtfOP4cARf2wC3oT2rAFGA` |
| List Tickets by Period | GET | `/api/external/findings/list` | `conn_mod_def::GMRhtswnVSQ::hA6iZdtGSLiXw5ItSDtVYw` |

### TaskAssigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task Assign by ID | GET | `/api/external/task_assigns/{{id}}` | `conn_mod_def::GMRhtqiBeyw::85YNoW8DTMS7JwBIkWUZFg` |
| List Task Assignments | GET | `/api/external/task_assigns` | `conn_mod_def::GMRhttNCR9A::6KtkO-LPQwqIMrHuObY1Nw` |

### GeneratedFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Generated Files | GET | `/api/external/files` | `conn_mod_def::GMRhr7rPVbc::1GYwH0A6SGeYEhFUkqiY5A` |

### FormAnswer

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Form Answer | POST | `/api/external/change_form_answer` | `conn_mod_def::GMRhr861VrI::anAu6H-dTgCK2rGsUxOVDw` |

### MetadataTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Empty List | POST | `/api/external/metadata_types` | `conn_mod_def::GMRhsLCVzKw::IuEISj-uRY-GOamuJ8pv8g` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a List | POST | `/api/external/metadata_types/{{id}}` | `conn_mod_def::GMRhsPqMNY8::vngrKVIVQo6yeLARy8nZcQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Last Notifications | GET | `/api/external/notifications` | `conn_mod_def::GMRhsbakIko::W72Zp4nGTH6-MkQaUf8lHw` |

### TaskAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign Task | POST | `/api/external/assign_task` | `conn_mod_def::GMRhteog3Os::xVKcEdInSFqWGgyR0cliCw` |

## When a call fails

The error comes from DataScope, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/data-scope

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
