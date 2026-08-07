---
name: autodesk
description: Autodesk is a global leader in design and engineering software, offering a cloud‑connected Design and Make Platform—including AutoCAD, Revit, Fusion 360, and Autodesk Platform Services—that connects data, workflows, and teams across architecture, manufacturing, and media production for more efficient, AI‑powered project delivery. Read and write Autodesk data through One: companies, projects, folders, webhooks, projectusers, elements and more, 160 actions with real parameter documentation. Use whenever the user asks to look something up in Autodesk, create or update a record there, or build code against the Autodesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: autodesk
  generated-from: one-knowledge-base
---

# Autodesk through One

Autodesk is a global leader in design and engineering software, offering a cloud‑connected Design and Make Platform—including AutoCAD, Revit, Fusion 360, and Autodesk Platform Services—that connects data, workflows, and teams across architecture, manufacturing, and media production for more efficient, AI‑powered project delivery.

One exposes Autodesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `autodesk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Autodesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Autodesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Details (HQ Account Company) | GET | `/hq/v1/accounts/{{accountId}}/companies/{{companyId}}` | `conn_mod_def::GJ0FIhxAvS8::PEKgG0ySREGbN_BGJmtfig` |
| List a Project’s Companies | GET | `/hq/v1/accounts/{{accountId}}/projects/{{projectId}}/companies` | `conn_mod_def::GJ0FIQzNJIk::K8GU7ag2QluGDRh0sS2adA` |
| List an Account’s Companies | GET | `/construction/admin/v1/accounts/{{accountId}}/companies` | `conn_mod_def::GJ0FIHNfyOc::WDZZ8TN8QRCRV47GF9Z8fw` |
| List an Account’s Companies | GET | `/hq/v1/accounts/{{accountId}}/companies` | `conn_mod_def::GJ0FIaMUc_U::ZGguWvvHRHeYhzRm6zYQMQ` |
| Search a BIM 360/ACC Account’s Companies by Name | GET | `/hq/v1/accounts/{{accountId}}/companies/search` | `conn_mod_def::GJ0FIrNBDyY::nEKU3jvoTPu3jNqvIwkeew` |
| Bulk Import Partner Companies to an Account’s Company Directory | POST | `/hq/v1/accounts/{{accountId}}/companies/import` | `conn_mod_def::GJ0FHpOXz-w::7eLURZAwSImiMf7m_1GAhg` |
| Create a Partner Company for an Account | POST | `/hq/v1/accounts/{{accountId}}/companies` | `conn_mod_def::GJ0FHwhQ9bg::kMmG-ExvRtyF7u7o-5WL7A` |
| Create or Update a Company’s Image (HQ Account Company) | PATCH | `/hq/v1/accounts/{{accountId}}/companies/{{companyId}}/image` | `conn_mod_def::GJ0FH6IA7cU::oIkxoijFQr2RKYUxHDsaxg` |
| Update an Account’s Partner Company Details | PATCH | `/hq/v1/accounts/{{accountId}}/companies/{{companyId}}` | `conn_mod_def::GJ0FIyi5ZCc::eVxob3s3QK2ZlhWw7rFcqA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hub’s Project | GET | `/project/v1/hubs/{{hubId}}/projects/{{projectId}}` | `conn_mod_def::GJ0FQEb06tw::6VfdgzRLTcKOtkmTtY2kTg` |
| Get a Project by ID | GET | `/construction/admin/v1/projects/{{projectId}}` | `conn_mod_def::GJ0FKD8EarI::YP9-KzmXT6uKulhLLNMNYQ` |
| List a Hub’s Projects | GET | `/project/v1/hubs/{{hubId}}/projects` | `conn_mod_def::GJ0FQbq8ErM::txt2-OOWSju6I9pTVJWygw` |
| List a User’s Projects (Account Admin) | GET | `/construction/admin/v1/accounts/{{accountId}}/users/{{userId}}/projects` | `conn_mod_def::GJ0FKfGpBKk::rTeFm69kT7eG6xv8b_MLQQ` |
| List Projects in an Account | GET | `/construction/admin/v1/accounts/{{accountId}}/projects` | `conn_mod_def::GJ0FKSwx0VQ::fS7VmzTBQ02VsUNfTM8aMQ` |
| Create a New Project in an Account | POST | `/construction/admin/v1/accounts/{{accountId}}/projects` | `conn_mod_def::GJ0FJyLDblQ::8y1EmveXR4OJefEd0oG-PA` |
| Create or Update a Project’s Image (BIM 360 Account Project) | PATCH | `/hq/v1/accounts/{{accountId}}/projects/{{projectId}}/image` | `conn_mod_def::GJ0FJ6iXjhk::tueOe1RkSDmAWnAEuY_xVA` |
| List Projects in a Hub (GraphQL) | POST | `/aec/graphql` | `conn_mod_def::GJ0FVDX9574::HdqQqAnxSbW_ZiwUcPMntg` |
| Retrieve a Project (GraphQL) | POST | `/aec/graphql` | `conn_mod_def::GJ0FU7Ytvuc::Q7xa-a2GQN2JxO8Yw4kVHQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder’s Parent | GET | `/data/v1/projects/{{projectId}}/folders/{{folderId}}/parent` | `conn_mod_def::GJ0FNE9WuM0::r3MEWRU4SR-cOfDmRvcXDQ` |
| Get a Project’s Folder | GET | `/data/v1/projects/{{projectId}}/folders/{{folderId}}` | `conn_mod_def::GJ0FM9tXaKk::rq5TqnhLSu66RfUSbgUBpg` |
| List Folder and Subfolder Contents (Search a Project Folder) | GET | `/data/v1/projects/{{projectId}}/folders/{{folderId}}/search` | `conn_mod_def::GJ0FNepk2Hs::oKtJNpigS1Oj_FEI4JJvUA` |
| Create a Folder in a Project | POST | `/data/v1/projects/{{projectId}}/folders` | `conn_mod_def::GJ0FM13V0l0::5rtyHqHnTCm4y0xG6kTbUw` |
| List a Folder’s Subfolders | POST | `/aec/graphql` | `conn_mod_def::GJ0FUdnEf8Q::vcbJl-2URremvaUAtyFKOQ` |
| List a Project’s Top-Level Folders (foldersByProject) | POST | `/aec/graphql` | `conn_mod_def::GJ0FUlBi9GE::3hmF99UoToe6Fz-SPMklmw` |
| Modify a Project’s Folder | PATCH | `/data/v1/projects/{{projectId}}/folders/{{folderId}}` | `conn_mod_def::GJ0FODYZYhY::uPtCJ2gbQ6K0_qkZUUWBHA` |
| Retrieve a Project Folder (GraphQL) | POST | `/aec/graphql` | `conn_mod_def::GJ0FUUTgrZs::x3fakL13QQy_O9b4xod_uw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhook Details for a System Event | GET | `/webhooks/v1/systems/{{system}}/events/{{event}}/hooks/{{hookId}}` | `conn_mod_def::GJ0FaRigdTw::tM_4BsVIQvCpII_LFbr4vA` |
| List a System’s Webhooks | GET | `/webhooks/v1/systems/{{system}}/hooks` | `conn_mod_def::GJ0FaiK8j0s::PvQMbeKPQEa8WNIROVTPQA` |
| List All Webhooks for an Event (in a System) | GET | `/webhooks/v1/systems/{{system}}/events/{{event}}/hooks` | `conn_mod_def::GJ0FazSKa60::ws8wVr0eSuKGOEiiGDyWhg` |
| List an App’s Webhooks | GET | `/webhooks/v1/app/hooks` | `conn_mod_def::GJ0Faqmtv_g::KBbXcPMNT1i8nlcvsE6K4Q` |
| List Webhooks | GET | `/webhooks/v1/hooks` | `conn_mod_def::GJ0FaZqz0XM::qUgk4Z6MScmFFrBc5JHbXw` |
| Create a Webhook for a System Event | POST | `/webhooks/v1/systems/{{system}}/events/{{event}}/hooks` | `conn_mod_def::GJ0FZ5eh4p0::VYVdgcncRIeueFHPUxkBcA` |
| Create Webhooks for All Events in a System | POST | `/webhooks/v1/systems/{{system}}/hooks` | `conn_mod_def::GJ0FaBzxaTY::uQW-oE65Qle6yab_Pjsb_g` |

### ProjectUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project User | GET | `/construction/admin/v1/projects/{{projectId}}/users/{{userId}}` | `conn_mod_def::GJ0FJLT1SGA::8tv9WW-hTOiliENNbFfb1w` |
| List a Project’s Users | GET | `/construction/admin/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ0FJX85Aa4::vl1HeAjDQFWIiAszc4_SCw` |
| Assign a User to a Project | POST | `/construction/admin/v1/projects/{{projectId}}/users` | `conn_mod_def::GJ0FI6w_ujo::Jb_Vv0QBT8egP_WG-sBbdQ` |
| Import Users to a Project (Bulk Assign) | POST | `/construction/admin/v2/projects/{{projectId}}/users:import` | `conn_mod_def::GJ0FJDBYmnI::UorTyzIxRyWv6h35XzqY2g` |
| Remove a Project User | DELETE | `/construction/admin/v1/projects/{{projectId}}/users/{{userId}}` | `conn_mod_def::GJ0FJhLHOxo::4Hk58my-QvmCVgIsWuVO_A` |
| Update a Project User | PATCH | `/construction/admin/v1/projects/{{projectId}}/users/{{userId}}` | `conn_mod_def::GJ0FJpxzC1M::uzKs7q-sRoyHGIgE3DsqGg` |

### Elements

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Element at Tip (by Element ID) | POST | `/aec/graphql` | `conn_mod_def::GJ0FSefvCYY::O1Zfi5QwQb2A6vdKvqeZnw` |
| Retrieve Elements by Project | POST | `/aec/graphql` | `conn_mod_def::GJ0FULC97y8::SI412vxkRJ-zhmCGttx53A` |
| Retrieve Elements for an ElementGroup at a Specific Version | POST | `/aec/graphql` | `conn_mod_def::GJ0FTwr9Myo::Q-x-GQ4uQbGOXFwRfwBPHw` |
| Retrieve Elements in a Folder | POST | `/aec/graphql` | `conn_mod_def::GJ0FT3sTASk::Fh6VAlbERna3ZG94DX5eUA` |
| Retrieve Elements in a Hub | POST | `/aec/graphql` | `conn_mod_def::GJ0FUA40BhY::TNS3xdCyTcC3c9T102kWWQ` |
| Retrieve Elements in an ElementGroup | POST | `/aec/graphql` | `conn_mod_def::GJ0FTpOIEI4::88s2ICQjSsGqVHmZfo2Gug` |

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Object’s Details (in a Bucket) | GET | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}/details` | `conn_mod_def::GJ0FZXGpqE0::X4REge_PS1eXQvneG7gFAQ` |
| Batch Generate Signed S3 Download URLs for Objects in a Bucket | POST | `/oss/v2/buckets/{{bucketKey}}/objects/batchsigneds3download` | `conn_mod_def::GJ0FXwK2jcY::SYIG4h3TTLie_I1hn1V5mg` |
| Batch Generate Signed S3 Upload URLs for a Bucket | POST | `/oss/v2/buckets/{{bucketKey}}/objects/batchsigneds3upload` | `conn_mod_def::GJ0FX5k-6tc::tpmWd_GhREq0sETnh4YJ6g` |
| Complete a Bucket Object Upload (S3 Signed URL) | POST | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}/signeds3upload` | `conn_mod_def::GJ0FYM8yAqc::-ixDxrUlQAqgnQVls8URIQ` |
| Copy an Object Within a Bucket | PUT | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}/copyto/{{newObjKey}}` | `conn_mod_def::GJ0FYUeiIn4::axym0qfYSeum8JP9akV4ug` |
| Delete an Object from a Bucket | DELETE | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}` | `conn_mod_def::GJ0FYcVILJc::d-Zw-LeWQtSGedeRvWAIsw` |

### Hubs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hub | GET | `/project/v1/hubs/{{hubId}}` | `conn_mod_def::GJ0FOJ55soI::vREJeztSSE2sc2MK5iq7wA` |
| Get a Hub for a Project | GET | `/project/v1/hubs/{{hubId}}/projects/{{projectId}}/hub` | `conn_mod_def::GJ0FQTOVTlI::wUjstqLJQpG8mH45PnHK8Q` |
| List Hubs | GET | `/project/v1/hubs` | `conn_mod_def::GJ0FOTMThHA::J9qLvJlXSwK33c1EaU3LtQ` |
| Query Hubs (GraphQL) | POST | `/aec/graphql` | `conn_mod_def::GJ0FUzrJnLs::pfeHutJyQSeR_4icHAaygw` |
| Retrieve a Hub (GraphQL) | POST | `/aec/graphql` | `conn_mod_def::GJ0FUsVMBW8::qcYE7DI-R32HIDuC0gwjLw` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Version’s Item (Get Item by Version) | GET | `/data/v1/projects/{{projectId}}/versions/{{versionId}}/item` | `conn_mod_def::GJ0FRPehf7Y::aZbcAL-tTLKkp1Ne59pO1Q` |
| Get an Item in a Project | GET | `/data/v1/projects/{{projectId}}/items/{{itemId}}` | `conn_mod_def::GJ0FOsSM5Wg::hBAnFVhwSYGBPzsVthmFHw` |
| Get an Item’s Tip (Latest) Version | GET | `/data/v1/projects/{{projectId}}/items/{{itemId}}/tip` | `conn_mod_def::GJ0FO7Bz3pc::l7MgG23TS3KB0tikfRyQLw` |
| Create an Item in a Project | POST | `/data/v1/projects/{{projectId}}/items` | `conn_mod_def::GJ0FOi6QUj8::zH9oCMTCTyS8RAhUZnuGKA` |
| Update an Item in a Project (Patch Item Display Name) | PATCH | `/data/v1/projects/{{projectId}}/items/{{itemId}}` | `conn_mod_def::GJ0FPltRnbA::bk2qoRe_QsKY3kGFmU6YhQ` |

### ElementGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an ElementGroup at Tip (Latest Version) by ID | POST | `/aec/graphql` | `conn_mod_def::GJ0FSmqhbmo::qjEfTb6dSx2O-cAJMFmWyQ` |
| Get an ElementGroup by Version Number | POST | `/aec/graphql` | `conn_mod_def::GJ0FSvHH52M::BG1K4WIQQuKIe8icGUgmzw` |
| Get Element Groups in a Folder (Recursive, Including Subfolders) | POST | `/aec/graphql` | `conn_mod_def::GJ0FTPsaJUE::TXj8PorsTvasCfFOY9I75Q` |
| List Element Groups in a Hub | POST | `/aec/graphql` | `conn_mod_def::GJ0FTaNetoE::9SiemMiQRCChcThRhJJNUQ` |
| List Element Groups in a Project | POST | `/aec/graphql` | `conn_mod_def::GJ0FThnpF-c::XdsRHJv5TWOSB0_uHxmLgQ` |

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Issue’s Details (Project Issue) | GET | `/construction/issues/v1/projects/{{projectId}}/issues/{{issueId}}` | `conn_mod_def::GJ0FMWf-UGc::cGLb3TJhT9mc6ODxTUBCVw` |
| List a Project’s Issues | GET | `/construction/issues/v1/projects/{{projectId}}/issues` | `conn_mod_def::GJ0FMO6NR9Y::KhcQS5OTQIW95cyQ6ACKwg` |
| Create an Issue in a Project | POST | `/construction/issues/v1/projects/{{projectId}}/issues` | `conn_mod_def::GJ0FL4mv1TY::eURX0LRlRniF71BjT4bm2Q` |
| Update an Issue in a Project | PATCH | `/construction/issues/v1/projects/{{projectId}}/issues/{{issueId}}` | `conn_mod_def::GJ0FMAqCngA::bUSUpjwwQMWIG2xbJ-iwIw` |

### Versions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Version | GET | `/data/v1/projects/{{projectId}}/versions/{{versionId}}` | `conn_mod_def::GJ0FRIBNXiw::d6u9Rd2eSkuVqmESuitFBA` |
| List an Item’s Versions (in a Project) | GET | `/data/v1/projects/{{projectId}}/items/{{itemId}}/versions` | `conn_mod_def::GJ0FPEE80Eo::bl753DAPQdWgT7VAD9VPog` |
| Create a Project Version | POST | `/data/v1/projects/{{projectId}}/versions` | `conn_mod_def::GJ0FQ_5Fdqs::CJqqz34vQb6UMSYygoOQow` |
| Update a Project Version | PATCH | `/data/v1/projects/{{projectId}}/versions/{{versionId}}` | `conn_mod_def::GJ0FSG_Wt54::chOZrNyDQO-a9VlFOl3TIg` |

### OssObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Signed S3 Download URL for an OSS Object | GET | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}/signeds3download` | `conn_mod_def::GJ0FZDG4b9M::P_9kNaWmTQ6YP5gcIRcaFA` |
| Generate an S3 Signed Upload URL for an OSS Object | GET | `/oss/v2/buckets/{{bucketKey}}/objects/{{objectKey}}/signeds3upload` | `conn_mod_def::GJ0FZLqqBGo::EjgsDPygScWOk0nnMAi7kw` |
| List a Bucket’s Objects | GET | `/oss/v2/buckets/{{bucketKey}}/objects` | `conn_mod_def::GJ0FZfo8wcE::2QXLuyzGRaCDJYAvsnrLrQ` |
| Complete a Bucket’s Batch Upload to S3 Signed URLs | POST | `/oss/v2/buckets/{{bucketKey}}/objects/batchcompleteupload` | `conn_mod_def::GJ0FYBnBNDM::A9fJxPNSSiaeFN1pNw8aJg` |

### Authentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize a User (OAuth 2.0 Consent Redirect) | GET | `/authentication/v2/authorize` | `conn_mod_def::GJ0FFior5QA::BtOpJ7FkQju71MBUmTcx5A` |
| Logout (Sign Out the Current User) | GET | `/authentication/v2/logout` | `conn_mod_def::GJ0FGDajj7I::P6PdwqCuSX-f2_BQSbpF1A` |
| Introspect an Access or Reference Token | POST | `/authentication/v2/introspect` | `conn_mod_def::GJ0FF74tGz8::g_NPPTWAStaQ3XM4jpZRiA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Users | GET | `/hq/v1/accounts/{{accountId}}/users` | `conn_mod_def::GJ0FGnVag84::OA37bB9VTA6duPkt_mY6aQ` |
| Search Users in an Account (Master Member Directory) | GET | `/hq/v1/accounts/{{accountId}}/users/search` | `conn_mod_def::GJ0FHKuC0Hs::KyGV5coUTYKcQDFJHJgOpQ` |
| Bulk Import Users to an Account | POST | `/hq/v1/accounts/{{accountId}}/users/import` | `conn_mod_def::GJ0FGYH-UvU::tPjgt8rgQlCm1CKRWBGbMw` |

### IssueAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Issue’s Attachments in a Project | GET | `/construction/issues/v1/projects/{{projectId}}/attachments/{{issueId}}/items` | `conn_mod_def::GJ0FK6LbhZ0::p9FYxA1jScKjcn-2BtdNiA` |
| Add Attachments to an Issue (Project) | POST | `/construction/issues/v1/projects/{{projectId}}/attachments` | `conn_mod_def::GJ0FKpwHnfs::n2q_ktOcSsug3nE5xbLJ-Q` |
| Delete an Issue Attachment (Project) | DELETE | `/construction/issues/v1/projects/{{projectId}}/attachments/{{issueId}}/items/{{attachmentId}}` | `conn_mod_def::GJ0FKw9HIV0::uhBjRsqrT1StGDTJRZs-sw` |

### ModelDerivative

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Derivative Download URL (Signed Cookies) for a Design | GET | `/modelderivative/v2/designdata/{{urn}}/manifest/{{derivativeUrn}}/signedcookies` | `conn_mod_def::GJ0FVjnr1gg::pvoiQqfgTSGkIwt7KHih0w` |
| Fetch a Source Design Thumbnail | GET | `/modelderivative/v2/designdata/{{urn}}/thumbnail` | `conn_mod_def::GJ0FXFFckWI::GJzfQsV-SAu2-MEV2pqDCw` |
| Check Derivative Details for a Design Manifest Derivative | HEAD | `/modelderivative/v2/designdata/{{urn}}/manifest/{{derivativeUrn}}` | `conn_mod_def::GJ0FVTm6mSE::yzsnYMK-QhSG634JKI4shg` |

This lists 90 of 160 actions. For anything not here, call `search_one_platform_actions` with platform `autodesk`. The full catalog is at https://www.withone.ai/knowledge/autodesk.

## When a call fails

The error comes from Autodesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/autodesk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
