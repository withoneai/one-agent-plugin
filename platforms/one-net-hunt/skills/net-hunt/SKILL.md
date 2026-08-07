---
name: net-hunt
description: NetHunt is a Gmail-native CRM platform that enables businesses to manage leads, track deals, automate sales workflows, and centralize multi-channel customer communications within a unified workspace, helping teams streamline sales processes and improve relationship management. Read and write NetHunt data through One: records, calllogs, recordcomments, recordchanges, googledrivefiles, folderfields and more, 17 actions with real parameter documentation. Use whenever the user asks to look something up in NetHunt, create or update a record there, or build code against the NetHunt API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: net-hunt
  generated-from: one-knowledge-base
---

# NetHunt through One

NetHunt is a Gmail-native CRM platform that enables businesses to manage leads, track deals, automate sales workflows, and centralize multi-channel customer communications within a unified workspace, helping teams streamline sales processes and improve relationship management.

One exposes NetHunt through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `net-hunt` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NetHunt is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NetHunt account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Records

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recently Created Records in a Folder | GET | `/triggers/new-record/{{folderId}}` | `conn_mod_def::GKf_8ilz0tg::3RYqq-3HRF-8pKzuRuwsLA` |
| Find Records in a Folder by ID or Text Query | GET | `/searches/find-record/{{folderId}}` | `conn_mod_def::GKf_8sgxB9g::thQ5UB4zSSq4IJRZvkaUZg` |
| Add a Gmail Thread to a Record | POST | `/actions/link-gmail-thread/{{recordId}}` | `conn_mod_def::GKf_8X13PnA::IGDlMcNLTE2rH3fUFaGUpA` |
| Create a New Record in a Folder | POST | `/actions/create-record/{{folderId}}` | `conn_mod_def::GKf_8YXgQlA::qMAUOG3AQjmgab0it0wW_w` |
| Delete a Record | POST | `/actions/delete-record/{{recordId}}` | `conn_mod_def::GKf_8YFd_iA::aZPwAcdoSdyms0NWw8Gdrg` |
| Update a Record | POST | `/zapier/actions/update-record/{{recordId}}` | `conn_mod_def::GKf_89CpmvA::GO7dVegUQPa4mXK7IgPzCg` |

### CallLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recently Created Call Logs in a Folder | GET | `/triggers/new-call-log/{{folderId}}` | `conn_mod_def::GKf_8ie_NWg::XV5epF1nT3u73NjEcBaFmQ` |
| Create a New Record Call Log | POST | `/actions/create-call-log/{{recordId}}` | `conn_mod_def::GKf_8X2l49g::qlx_K5_fSGGI_yaxP4k7tA` |

### RecordComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recently Created Record Comments in a Folder | GET | `/triggers/new-comment/{{folderId}}` | `conn_mod_def::GKf_8ilujzA::LkVbLXVpSDud8ukKgCpvpw` |
| Create a New Record Comment | POST | `/actions/create-comment/{{recordId}}` | `conn_mod_def::GKf_8YUbAjg::zavTKnEaSmqjA4YWxqiSVA` |

### RecordChanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recent Record Changes in a Folder | GET | `/triggers/record-change/{{folderId}}` | `conn_mod_def::GKf_8ifJU0A::2D1UAbq-SCyky9Dxq72HMw` |

### GoogleDriveFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recently Created Google Drive Files in a Folder | GET | `/triggers/new-gdrivefile/{{folderId}}` | `conn_mod_def::GKf_8itZqdg::b7inwHUSQ6O3L8Z3kKMxWQ` |

### FolderFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Folder's Fields | GET | `/triggers/folder-field/{{folderId}}` | `conn_mod_def::GKf_8q2xcjA::db7YFkvERZ2St-l8XEYN1Q` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Accessible Folders | GET | `/zapier/triggers/readable-folder` | `conn_mod_def::GKf_8tBF5MA::DH7B26yCRg25Myr3y0cnlQ` |

### WritableFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Writable Folders | GET | `/zapier/triggers/writable-folder` | `conn_mod_def::GKf_8xwiB3A::YP6pssaMRRep5tTFuZibrg` |

### UpdatedRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Recently Updated Records in a Folder | GET | `/triggers/updated-record/{{folderId}}` | `conn_mod_def::GKf_8zYm6vA::0LoCPd3pQzSKVjlczh2Q_g` |

### RequestCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Request Credentials | GET | `/zapier/triggers/auth-test` | `conn_mod_def::GKf_9BfVFnA::JSvUHfs8QSmUINT_Ch7K9A` |

## When a call fails

The error comes from NetHunt, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/net-hunt

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
