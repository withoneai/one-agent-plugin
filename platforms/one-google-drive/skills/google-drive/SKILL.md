---
name: google-drive
description: A cloud-based file storage service that enables users to save, share, and collaborate on documents, spreadsheets, and files across devices in real time. Read and write Google Drive data through One: files, drives, permissions, comments, teamdrives, revisions and more, 57 actions with real parameter documentation. Use whenever the user asks to look something up in Google Drive, create or update a record there, or build code against the Google Drive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-drive
  generated-from: one-knowledge-base
---

# Google Drive through One

A cloud-based file storage service that enables users to save, share, and collaborate on documents, spreadsheets, and files across devices in real time.

One exposes Google Drive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-drive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Drive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Drive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a File From Google Drive | GET | `/drive/v3/files/{{fileId}}/export` | `conn_mod_def::GJ6RziZnVhE::KyuPyhkzQ1K3CQxYqa8IGA` |
| Generate Drive File IDs | GET | `/files/generateIds` | `conn_mod_def::GJ6Rzv4zwPU::aSS87I1PT06QziCyFe7FBA` |
| Get a File by ID | GET | `/drive/v3/files/{{fileId}}` | `conn_mod_def::GJ6Rz4PjeEw::JlK2zHExTBOUVHkICjB_dA` |
| List a File's Labels | GET | `/drive/v3/files/{{fileId}}/listLabels` | `conn_mod_def::GJ6Rzxpz5AU::Yxy2hLkzQA2kOsZwD3F3FA` |
| List Files | GET | `/files` | `conn_mod_def::GJ6Rzy_a8J8::5DPVGp3fTXegRgMN4v11tA` |
| Copy a Drive File | POST | `/v3/files/{{fileId}}/copy` | `conn_mod_def::GJ6RzYG28qQ::RpRKO9SiReSs0u0c516mGQ` |
| Create a Drive File | POST | `/drive/v3/files` | `conn_mod_def::GJ6RzlNn1fs::1Qlp0KgqQbGF7WVXdC5wsw` |
| Delete a File | DELETE | `/drive/v3/files/{{fileId}}` | `conn_mod_def::GJ6RzmV9BFk::a4tgxHutSZiZtx75flL8Ug` |
| Download a Drive File | POST | `/drive/v3/files/{{fileId}}/download` | `conn_mod_def::GJ6RzjZnn6w::k0yulAdzTIemyTRlAR3kXQ` |
| Empty Trash | DELETE | `/files/trash` | `conn_mod_def::GJ6RzkGWwXQ::FXPdDoMhT9yRsBk4CEMMGQ` |
| Modify Labels on a File | POST | `/v3/files/{{fileId}}/modifyLabels` | `conn_mod_def::GJ6RzzW1TOg::Cnnve9gIT-61c3omuDC8dg` |
| Update a Drive File | PATCH | `/drive/v3/files/{{fileId}}` | `conn_mod_def::GJ6R0CdxYj8::40lniqAlTauRNqrXKrFKJA` |

1 more Files actions are available through search.

### Drives

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shared Drive by ID | GET | `/drives/{{driveId}}` | `conn_mod_def::GJ6RzEQZBt0::KHL77NaXRHmYwAaIlBhNmw` |
| List Shared Drives | GET | `/drive/v3/drives` | `conn_mod_def::GJ6RzWcDFcY::ts_p6-DnRgCR4lD_m_MsSQ` |
| Create a Shared Drive | POST | `/drives` | `conn_mod_def::GJ6RzDk4-dw::TgelatbpQ2u_qpUlXaTDiQ` |
| Delete a Shared Drive | DELETE | `/drives/{{driveId}}` | `conn_mod_def::GJ6RzJZ29D4::FQ6xORUvRKWbzcHRgVwxSA` |
| Hide a Shared Drive | POST | `/v3/drives/{{driveId}}/hide` | `conn_mod_def::GJ6RzUOtRUg::qZHSNMIVRcajoLoXFHj8Rw` |
| Unhide a Shared Drive | POST | `/drives/{{driveId}}/unhide` | `conn_mod_def::GJ6RzaWy95Q::uHPACQ_KRCOiCCEyxCV1jw` |
| Update a Shared Drive | PATCH | `/v3/drives/{{driveId}}` | `conn_mod_def::GJ6RzYHb6Ps::RE13LY7wSQuPf-JApWBG8Q` |

### Permissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Permission by ID | GET | `/v3/files/{{fileId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ6R0T0Ciek::ackDVrZNTSW5_vPjhrO8vw` |
| List a File or Shared Drive's Permissions | GET | `/v3/files/{{fileId}}/permissions` | `conn_mod_def::GJ6R0Q6GVtY::ioCSmQ32Sl6lDp5HqoYo-g` |
| Create a File or Shared Drive Permission | POST | `/v3/files/{{fileId}}/permissions` | `conn_mod_def::GJ6R0GB-KbA::5diIirWzS7-GesLRHO8JKA` |
| Delete a File or Shared Drive Permission | DELETE | `/files/{{fileId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ6R0C0Uo2Y::EAdoMO7iQb2uPVwxHD3-VQ` |
| Update a File Permission | PATCH | `/v3/files/{{fileId}}/permissions/{{permissionId}}` | `conn_mod_def::GJ6R0SYfaZM::fDpoupHQRAyJ6LzHc_L31w` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Comment by ID | GET | `/v3/files/{{fileId}}/comments/{{commentId}}` | `conn_mod_def::GJ6Ry0WXiFU::M6rU2eTuSZChlSb6SP-Y4w` |
| List a File's Comments | GET | `/v3/files/{{fileId}}/comments` | `conn_mod_def::GJ6RzE-efvs::eFjelSRAQ9qTFpDAeRIQ1A` |
| Create a Comment on a File | POST | `/v3/files/{{fileId}}/comments` | `conn_mod_def::GJ6Ry3B8Iro::S_Z0YJFkRHi5nCo9LKunlA` |
| Update a File Comment | PATCH | `/v3/files/{{fileId}}/comments/{{commentId}}` | `conn_mod_def::GJ6RzLxn6mM::HYu1TPAsQsmOjctLm36-tg` |

### TeamDrives

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Drive | GET | `/teamdrives/{{teamDriveId}}` | `conn_mod_def::GJ6R0sPRsWM::n3cyRuoeQSW9E-kYr-YClA` |
| List Team Drives | GET | `/drive/v3/teamdrives` | `conn_mod_def::GJ6R07LB9YI::S9Pn2QnXQjSdKklVjN_K2Q` |
| Delete a Team Drive | DELETE | `/teamdrives/{{teamDriveId}}` | `conn_mod_def::GJ6R0xN4k6A::g_WtHF_FTMiEhjguEzixBQ` |
| Update a Team Drive | PATCH | `/v3/teamdrives/{{teamDriveId}}` | `conn_mod_def::GJ6R0-G1Ne0::uQesR9gSRnGA7AhCgMql7w` |

### Revisions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Revision | GET | `/v3/files/{{fileId}}/revisions/{{revisionId}}` | `conn_mod_def::GJ6R0hz85Bk::x1Fimmu-QMizOGp6ETdj_A` |
| List a File's Revisions | GET | `/v3/files/{{fileId}}/revisions` | `conn_mod_def::GJ6R0qSGUTY::Ea0S1FIBSayDzGJ5uLYB7A` |
| Delete a File Revision | DELETE | `/v3/files/{{fileId}}/revisions/{{revisionId}}` | `conn_mod_def::GJ6R0dDABAQ::sw7IYzxARhSbQTCSG-QPVA` |
| Update a File Revision | PATCH | `/v3/files/{{fileId}}/revisions/{{revisionId}}` | `conn_mod_def::GJ6R0teRaGM::p1P9ry6HQ3iSFpzcf6G2Cw` |

### Replies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Comment Reply by ID | GET | `/v3/files/{{fileId}}/comments/{{commentId}}/replies/{{replyId}}` | `conn_mod_def::GJ6R0ct288g::WEK65hqXSQ-BDjzqXLnkvw` |
| List a Comment's Replies on a File | GET | `/v3/files/{{fileId}}/comments/{{commentId}}/replies` | `conn_mod_def::GJ6R0iFU_ss::VAVKJokvR1ee5w4ooS_XbA` |
| Create a Reply to a File Comment | POST | `/drive/v3/files/{{fileId}}/comments/{{commentId}}/replies` | `conn_mod_def::GJ6R0QPmKNc::CTFc5Z1CQUuKlEzGImPexA` |
| Update a File Comment Reply | PATCH | `/drive/v3/files/{{fileId}}/comments/{{commentId}}/replies/{{replyId}}` | `conn_mod_def::GJ6R0gm4eX0::NQnS0QpDTX2cbLeU5aU2Mg` |

### AccessProposals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Access Proposal by ID | GET | `/v3/files/{{fileId}}/accessproposals/{{proposalId}}` | `conn_mod_def::GJ6RyKilpwo::IMZqI6vTTamwdl5rnEzaBA` |
| List a File's Access Proposals | GET | `/v3/files/{{fileId}}/accessproposals` | `conn_mod_def::GJ6RyK8RFHk::iA5HOGs1Q6KTwBFT-0I-kA` |
| Resolve a File Access Proposal | POST | `/files/{{fileId}}/accessproposals/{{proposalId}}:resolve` | `conn_mod_def::GJ6RyTILEdg::_pvAHYkKRX2QSt7gKp0BBg` |

### Approvals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Approval by ID | GET | `/v3/files/{{fileId}}/approvals/{{approvalId}}` | `conn_mod_def::GJ6RyLp71xE::Hr6M92xiRZGoe7SiDYhB8Q` |
| List a File's Approvals | GET | `/drive/v3/files/{{fileId}}/approvals` | `conn_mod_def::GJ6Rye15od0::EciKHBsTQJyKlusVnoaGQQ` |

### Changes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Changes | GET | `/drive/v3/changes` | `conn_mod_def::GJ6RynyQq3o::U1ZegUJmSCWS9UixJV29aQ` |
| Watch a User's Drive Changes | POST | `/drive/v3/changes/watch` | `conn_mod_def::GJ6Ry4MtBtI::lRiXV2huTnmS4YruCXsXZA` |

### About

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Drive About Information | GET | `/about` | `conn_mod_def::GJ6RyHOBgzg::xSuUt33ITc6NMgiXzhuJ_g` |

### DriveApps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Installed Drive Apps | GET | `/apps` | `conn_mod_def::GJ6RydLK2-8::9fvQmZ7QQG2DNFv2L14erw` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop a Drive Notification Channel | POST | `/channels/stop` | `conn_mod_def::GJ6Ry5F9odQ::3Cc7tjIwR56gRXlRcYX12w` |

### FileCommentReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a File Comment Reply | DELETE | `/drive/v3/files/{{fileId}}/comments/{{commentId}}/replies/{{replyId}}` | `conn_mod_def::GJ6R0PDFlhU::vk_-4xbiRSqTynt-8DOx4g` |

### Teamdrives

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Drive | POST | `/drive/v3/teamdrives` | `conn_mod_def::GJ6R0ulL4UA::uVhyKUyLQkabaMiAg6oCsQ` |

### DriveChanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Start Page Token for Drive Changes | GET | `/changes/startPageToken` | `conn_mod_def::GJ6RyoWsZAo::t_P3GXZ0ScO5k3QWPaYgQg` |

### FileComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a File Comment | DELETE | `/drive/v3/files/{{fileId}}/comments/{{commentId}}` | `conn_mod_def::GJ6RyzY29Xs::Mt5ggUWhQUy-tbNeO5OFsw` |

### Operations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drive Operation | GET | `/operations/{{name}}` | `conn_mod_def::GJ6R0EemADk::WZTrQnFRR5eRFXMW3rwk4g` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Drive App | GET | `/apps/{{appId}}` | `conn_mod_def::GJ6Ryf8sIoY::tObJprQPRU-baP3WAyy4jw` |

This lists 56 of 57 actions. For anything not here, call `search_one_platform_actions` with platform `google-drive`. The full catalog is at https://www.withone.ai/knowledge/google-drive.

## When a call fails

The error comes from Google Drive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-drive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
