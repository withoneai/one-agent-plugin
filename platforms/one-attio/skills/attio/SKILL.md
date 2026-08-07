---
name: attio
description: Attio is a modern CRM platform that offers fully customizable workspaces, real-time collaboration, and a powerful data model to help teams manage relationships and pipelines more effectively. Read and write Attio data through One: listentries, files, objectrecords, tasks, webhooks, attributes and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Attio, create or update a record there, or build code against the Attio API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: attio
  generated-from: one-knowledge-base
---

# Attio through One

Attio is a modern CRM platform that offers fully customizable workspaces, real-time collaboration, and a powerful data model to help teams manage relationships and pipelines more effectively.

One exposes Attio through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `attio` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Attio is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Attio account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List Entry | GET | `/lists/{{list}}/entries/{{entryId}}` | `conn_mod_def::GJ0CWxdJmw4::iLVJOholRUCuGWQCYTi42Q` |
| Append Multiselect Values to a List Entry | PATCH | `/lists/{{list}}/entries/{{entryId}}` | `conn_mod_def::GJ0CXP_ASZo::kkc3ek2MShmPD3o2AszlzQ` |
| Assert a List Entry by Parent (Create or Update) | PUT | `/lists/{{list}}/entries` | `conn_mod_def::GJ0CWYp73sk::4ZNSUZzSTna0s-NVYaeMfw` |
| Create a List Entry (Add Record to List) | POST | `/lists/{{list}}/entries` | `conn_mod_def::GJ0CWgKBjg0::vDH4_yvrQymWm020xEcQyg` |
| Delete a List Entry | DELETE | `/lists/{{list}}/entries/{{entryId}}` | `conn_mod_def::GJ0CWnT-qXI::p1K-4ezDSe-ZuvwPhZ1SXQ` |
| List Entries in a List (Query) | POST | `/lists/{{list}}/entries/query` | `conn_mod_def::GJ0CXH0rOkI::nXClWNV9RdS3ikhzhayzRA` |
| Update a List Entry (Overwrite Multiselect Values) | PUT | `/lists/{{list}}/entries/{{entryId}}` | `conn_mod_def::GJ0CXZ22bOs::edhQdPtsTc6PfkKSRkn3hg` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/files/{{fileId}}/download` | `conn_mod_def::GJ0CXx9-RBs::477zCTJBSTiVLU4PqX6SLA` |
| Get a File | GET | `/files/{{fileId}}` | `conn_mod_def::GJ0CX6bAxww::Ga4rG1JnRLyfC_hL5BYzZQ` |
| List Files | GET | `/files` | `conn_mod_def::GJ0CYHF4d_M::WDfDmxcZS8qeAjzgDnrkDg` |
| Create a File Entry on an Object Record (Folder or Connected File/Folder) (Beta) | POST | `/files` | `conn_mod_def::GJ0CXh7CSRQ::J7EcH3ZyR7-ueFoFteUeFA` |
| Delete a File | DELETE | `/files/{{fileId}}` | `conn_mod_def::GJ0CXqxTIv8::lR59A3O3TceaqNJkz4rnKQ` |
| Upload a File to Native Attio Storage for a Record | POST | `/files/upload` | `conn_mod_def::GJ0CYPLcZBA::ulgoA9VfSheb_4N1BWyWRA` |

### ObjectRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object Record | GET | `/objects/{{object}}/records/{{recordId}}` | `conn_mod_def::GJ0CayGpK8E::0SAa1y4xRoGbzwDsI7n13w` |
| Assert a Record for an Object (Create or Update) | PUT | `/objects/{{object}}/records` | `conn_mod_def::GJ0CaZyhaFQ::Kzy79dY6TWW-84Z-BA-awA` |
| Create an Object Record | POST | `/objects/{{object}}/records` | `conn_mod_def::GJ0CahFJ0zI::VSvEcoUpT22yxI7nWZLGRA` |
| Delete an Object Record | DELETE | `/objects/{{object}}/records/{{recordId}}` | `conn_mod_def::GJ0Cap_UXYI::XOxr6EvlR6eZuG69z3RjOg` |
| Update an Object Record (Overwrite Multiselect Values) | PUT | `/objects/{{object}}/records/{{recordId}}` | `conn_mod_def::GJ0Cbp-eKbs::w_3vw3l8TgCzNXLWIyj7dw` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/tasks/{{taskId}}` | `conn_mod_def::GJ0Ccwl-bVQ::z0HIE39FQISFuP_-mTSsgw` |
| List Tasks | GET | `/tasks` | `conn_mod_def::GJ0Cc6iLULw::1YxzDwT8TTiXbrIUP0V-HQ` |
| Create a Task | POST | `/tasks` | `conn_mod_def::GJ0CchbSRbc::m93snD2gRyC3NxGNhTSPEA` |
| Delete a Task | DELETE | `/tasks/{{taskId}}` | `conn_mod_def::GJ0Ccos4Lhc::h1loPlDFQFqNcOwJ9eM_zA` |
| Update a Task | PATCH | `/tasks/{{taskId}}` | `conn_mod_def::GJ0CdCS2_-M::aWIni2uxRwS4HeYJPqGtdg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ0Cdz0QZgw::6LAJTM17RdipzSM2SRguRg` |
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJ0Cd7jQXts::5ILaVeWCSqOjTJbMlwJteQ` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ0Cdk9L2Nw::9CUiFWthR8-A5quAzRTOfQ` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ0Cdr37Ca4::snnTwjQPTXi2sM9FqOLkKA` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ0CeC7bwY0::1amUwsjRQmyUZdzWh75Oig` |

### Attributes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object or List Attribute | GET | `/{{target}}/{{identifier}}/attributes/{{attribute}}` | `conn_mod_def::GJ0CUmp3lo4::c2delD14T4Sv_Cfn5CYKoA` |
| List Attributes for an Object or List | GET | `/{{target}}/{{identifier}}/attributes` | `conn_mod_def::GJ0CUu2JX64::UwvrQXVcRTeJ00QHKWVKbQ` |
| Create an Attribute on an Object or List | POST | `/{{target}}/{{identifier}}/attributes` | `conn_mod_def::GJ0CUfIvM9I::Jo3yMY0wS7GW6L1U0e-ffA` |
| Update an Object or List Attribute | PATCH | `/{{target}}/{{identifier}}/attributes/{{attribute}}` | `conn_mod_def::GJ0CVZpN0AY::0_8KlPx4T6Czqwbjjdz04w` |

### CallRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting’s Call Recording | GET | `/meetings/{{meetingId}}/call_recordings/{{callRecordingId}}` | `conn_mod_def::GJ0CVwePF4w::4NHyKnCYRU2OHGOg2sTByw` |
| List a Meeting’s Call Recordings (Beta) | GET | `/meetings/{{meetingId}}/call_recordings` | `conn_mod_def::GJ0CV5PJZN0::3mWyLq4eTaSvrBCxrmn1rw` |
| Create a Meeting Call Recording | POST | `/meetings/{{meetingId}}/call_recordings` | `conn_mod_def::GJ0CVhUq_1U::4dTtQgDAQSeFV24ThaiXtw` |
| Delete a Meeting’s Call Recording | DELETE | `/meetings/{{meetingId}}/call_recordings/{{callRecordingId}}` | `conn_mod_def::GJ0CVo3LdPE::pCQ-D-bnS9m9wCWUFMJGjg` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List | GET | `/lists/{{list}}` | `conn_mod_def::GJ0CYfZk_gc::KvPUVDx-TOS4LAlgsvZMwA` |
| List All Lists | GET | `/lists` | `conn_mod_def::GJ0CYmcwC0A::7MiuzFMUR3av7TJohbrp5Q` |
| Create a List | POST | `/lists` | `conn_mod_def::GJ0CYYiDmhs::gNYcxXMSQq6ius8TNcNHSw` |
| Update a List | PATCH | `/lists/{{list}}` | `conn_mod_def::GJ0CYtuWftw::SDz6uvKeSy600fzQIqg2UA` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note | GET | `/notes/{{noteId}}` | `conn_mod_def::GJ0CZl2OhLs::1hB8984ySXu3WAzyBuduDA` |
| List Notes | GET | `/notes` | `conn_mod_def::GJ0CZucANAI::qH4Oc4NvS1GWLSVnKugSCA` |
| Create a Note for a Record | POST | `/notes` | `conn_mod_def::GJ0CZWRtEuU::n-NZ0VSqT3ym9zT9fBrefQ` |
| Delete a Note | DELETE | `/notes/{{noteId}}` | `conn_mod_def::GJ0CZd8ULi0::f27pc7gaQVOO6bnhDmiCdA` |

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object | GET | `/objects/{{object}}` | `conn_mod_def::GJ0CZ9rez8M::_mwIFyJHTbe_22XWujOK5Q` |
| List Objects | GET | `/objects` | `conn_mod_def::GJ0CvYRgQDo::Qep--LtdQQmGlt1esKUBCw` |
| Create a Custom Object | POST | `/objects` | `conn_mod_def::GJ0CZ2Uf33s::S-6wTL1eRBeVUDWjGmyilg` |
| Update an Object | PATCH | `/objects/{{object}}` | `conn_mod_def::GJ0CaRKDWnk::b1bE7YF3Rwq50Y5z7Ui20w` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment | GET | `/comments/{{commentId}}` | `conn_mod_def::GJ0CWQqunJA::ZyAR9jL5SjerY4PrDVT8Zg` |
| Create a Comment | POST | `/comments` | `conn_mod_def::GJ0CWBe_p_8::4SnxG0VxSY-Vt_7s1Tbv7Q` |
| Delete a Comment | DELETE | `/comments/{{commentId}}` | `conn_mod_def::GJ0CWJYNLhg::ZCownl1kQBmfQTrJUVnmFQ` |

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting | GET | `/meetings/{{meetingId}}` | `conn_mod_def::GJ0CY8oMSi4::6AwQiHC6SziwAncVYvYe4Q` |
| List Meetings | GET | `/meetings` | `conn_mod_def::GJ0CZHCvIqI::POV65vr0QGK2PACpJ8XnBg` |
| Find or Create a Meeting | POST | `/meetings` | `conn_mod_def::GJ0CY1U0Bcs::HbgV70noShO0cV4QBB6YjQ` |

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Object’s Records | POST | `/objects/{{object}}/records/query` | `conn_mod_def::GJ0CbN-LPiU::A6h6M9QkS0Cs2Lt9CdPH7Q` |
| Search Records Across Objects | POST | `/objects/records/search` | `conn_mod_def::GJ0CbY6VDMk::bN2lStzmS0admyNa4K83hg` |
| Update a Record’s Multiselect Values (Append) | PATCH | `/objects/{{object}}/records/{{recordId}}` | `conn_mod_def::GJ0CbhNKEKY::69XucpCJReeZkxCh4RVaBw` |

### AttributeStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Status for a Status Attribute (Object or List) | POST | `/{{target}}/{{identifier}}/attributes/{{attribute}}/statuses` | `conn_mod_def::GJ0CUWmQyCc::pHR2Z8VpQaqOk5QiNKAQuQ` |
| Update a Status on an Object or List Attribute | PATCH | `/{{target}}/{{identifier}}/attributes/{{attribute}}/statuses/{{status}}` | `conn_mod_def::GJ0CVRUYfaQ::rL-A6sqlT56rWF0KssWqhg` |

### SelectOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Select Options for an Object or List Attribute | GET | `/{{target}}/{{identifier}}/attributes/{{attribute}}/options` | `conn_mod_def::GJ0CU3i5kLM::uuIQS96sRyqCxLNyqdj8bQ` |
| Update a Select Option on an Object or List Attribute | PATCH | `/{{target}}/{{identifier}}/attributes/{{attribute}}/options/{{option}}` | `conn_mod_def::GJ0CVIxdwUg::loDvW6WmSAupwDX2tmpOqQ` |

### ScimGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List SCIM Groups | GET | `/scim/v2/Groups` | `conn_mod_def::GJ0Cb6NpSmI::qiGXyeg1QmKAyvI_XRdD9g` |
| Create a SCIM Group | POST | `/scim/v2/Groups` | `conn_mod_def::GJ0CbyFsryQ::JgVxuLH_TYO-A5mXxcTTLA` |

### ScimUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List SCIM Users | GET | `/scim/v2/Users` | `conn_mod_def::GJ0CpwVLdn0::Y9ZYlpzAR-aYs6SkybLbeQ` |
| Create SCIM User | POST | `/scim/v2/Users` | `conn_mod_def::GJ0CcMhsqhM::bvTj8PacRY2Ily6-sEkljA` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Thread’s Comments | GET | `/threads/{{threadId}}` | `conn_mod_def::GJ0CdJ8n9xY::CiQ0m04EQwuYOT8fwNd0wA` |
| List Threads | GET | `/threads` | `conn_mod_def::GJ0CdThcgj4::ZDUkmhrtRM6UhblrDRIluQ` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Member | GET | `/workspace_members/{{workspaceMemberId}}` | `conn_mod_def::GJ0CeKS2AmU::Lzi4SzmJT3WUKRezJ261Fw` |
| List Workspace Members | GET | `/workspace_members` | `conn_mod_def::GJ0CeRLXLe8::d1YyTzCzSAaXwneizHNzhg` |

### AttributeSelectOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Select Option for an Object or List Attribute | POST | `/{{target}}/{{identifier}}/attributes/{{attribute}}/options` | `conn_mod_def::GJ0CUN8EGo8::v01jLdktT9OdDkfDnJ8bnQ` |

### Statuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Statuses for a Status Attribute (Object or List) | GET | `/{{target}}/{{identifier}}/attributes/{{attribute}}/statuses` | `conn_mod_def::GJ0CU_N6TA4::fMnKuHTPR22mPDHrl48npg` |

### ListEntryAttributeValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attribute Values for a List Entry | GET | `/lists/{{list}}/entries/{{entryId}}/attributes/{{attribute}}/values` | `conn_mod_def::GJ0CW9u3eJE::pztcDBupS9eMKevU_8Q5Bg` |

### Self

| Action | Method | Path | Action id |
|---|---|---|---|
| Identify the Current Access Token | GET | `/self` | `conn_mod_def::GJ0CZOTdelY::ijjli5InQJ2KQO7Ai3xgag` |

### RecordAttributeValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Record’s Attribute Values | GET | `/objects/{{object}}/records/{{recordId}}/attributes/{{attribute}}/values` | `conn_mod_def::GJ0Ca7WiCS8::xAY0ZlVzTkuWFZ-Ok6EHFQ` |

### ObjectRecordEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Object Record’s Entries | GET | `/objects/{{object}}/records/{{recordId}}/entries` | `conn_mod_def::GJ0CbEm7Hrc::YiAjt-XBStODuOqe1eDYGQ` |

### ScimSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| List SCIM Schemas | GET | `/scim/v2/Schemas` | `conn_mod_def::GJ0CcC5j894::JHti3uClTb2mihuI4Wt-Eg` |

### MeetingCallRecordingTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call Recording Transcript for a Meeting | GET | `/meetings/{{meetingId}}/call_recordings/{{callRecordingId}}/transcript` | `conn_mod_def::GJ0CdcdXlyg::oQVMzPVIQmCz9FxsfeGHRw` |

## When a call fails

The error comes from Attio, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/attio

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
