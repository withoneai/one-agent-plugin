---
name: imagekit-io
description: ImageKit is a media management and image optimization platform that provides APIs and URLs for transforming, storing, and delivering images and videos, allowing developers to automate resizing, compression, and CDN-backed delivery across web and mobile applications. Read and write Imagekit IO data through One: files, origins, urlendpoints, savedextensions, bulkjobs, custommetadatafields and more, 48 actions with real parameter documentation. Use whenever the user asks to look something up in Imagekit IO, create or update a record there, or build code against the Imagekit IO API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: imagekit-io
  generated-from: one-knowledge-base
---

# Imagekit IO through One

ImageKit is a media management and image optimization platform that provides APIs and URLs for transforming, storing, and delivering images and videos, allowing developers to automate resizing, compression, and CDN-backed delivery across web and mobile applications.

One exposes Imagekit IO through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `imagekit-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Imagekit IO is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Imagekit IO account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Details | GET | `/v1/files/{{fileId}}/details` | `conn_mod_def::GK8S0kHNYHA::rGGjkKYJRLWyPtFbFgCH8g` |
| Get Purge Status | GET | `/v1/files/purge/{{requestId}}` | `conn_mod_def::GK8Sz-xx8gA::vL_BVbXPQsWFRv3UWUfMJA` |
| Get Uploaded File Metadata | GET | `/v1/files/{{fileId}}/metadata` | `conn_mod_def::GK8S1iffftg::gMzZ5CDyQ5qDfEUuaWuUlA` |
| List and Search Assets | GET | `/v1/files` | `conn_mod_def::GK8S0xw-Uig::le7Hbb4KRZiLkk9thU-MEg` |
| Add Tags to Multiple Files in Bulk | POST | `/v1/files/addTags` | `conn_mod_def::GK8Sz_tNZZg::ypCqmqOPSGq9G5ObD3qlrA` |
| Copy File | POST | `/files/copy` | `conn_mod_def::GK8S0O5NVBA::zkjMpF64RI64s033881NWQ` |
| Delete a File | DELETE | `/v1/files/{{fileId}}` | `conn_mod_def::GK8S0Yk3MiA::bv1EMkDcRCWsRLGUDKVsow` |
| Delete a File Version | DELETE | `/v1/files/{{fileId}}/versions/{{versionId}}` | `conn_mod_def::GK8S0cKfQYg::HiwnFcN7Sr2L5bmU8Pp0ug` |
| Delete Multiple Files | POST | `/v1/files/batch/deleteByFileIds` | `conn_mod_def::GK8S0ZfHOSA::cKXvFLqbQDWE4AgippEYNw` |
| Move File | POST | `/v1/files/move` | `conn_mod_def::GK8S1AqikKA::nso51_nmTceTIQnSduPAag` |
| Purge Cache | POST | `/v1/files/purge` | `conn_mod_def::GK8S0GfApDg::ZtyhXO4fQKu0obaFBppCkQ` |
| Remove AI Tags From Multiple Files | POST | `/v1/files/removeAITags` | `conn_mod_def::GK8S1KKyWFg::IKy2WPDqRqS-OaNYU2regA` |

6 more Files actions are available through search.

### Origins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Origin by ID | GET | `/v1/accounts/origins/{{id}}` | `conn_mod_def::GK8SzzmDB7A::X-AnLrLdThmkNuVRqRffuQ` |
| List Origins | GET | `/v1/accounts/origins` | `conn_mod_def::GK8Szztum3A::KcLz0agiTcKNppaYRUSmVQ` |
| Create Origin | POST | `/accounts/origins` | `conn_mod_def::GK8Szr3bFdA::D363a54uSieR6frm8uAdsg` |
| Delete an Origin by ID | DELETE | `/v1/accounts/origins/{{id}}` | `conn_mod_def::GK8SzjiAtAg::TvOFlpEETYi4xLMXWY99jA` |
| Update an Origin by ID | PUT | `/v1/accounts/origins/{{id}}` | `conn_mod_def::GK8Sz0-5xGA::a_0RoxS8Q1iWj3gHqj1uhA` |

### UrlEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a URL Endpoint (by ID) | GET | `/v1/accounts/url-endpoints/{{id}}` | `conn_mod_def::GK8Sz1EvgCg::KU0GpknQRVSVX8lOn7zSmw` |
| List URL Endpoints | GET | `/accounts/url-endpoints` | `conn_mod_def::GK8Sz0fCx-g::P10xIAIkSh2is_uIp0cHbw` |
| Create URL-Endpoint | POST | `/v1/accounts/url-endpoints` | `conn_mod_def::GK8SzlCJ-lA::A7I7AIgqRXWU7Ap5ZvyF3Q` |
| Delete a URL-endpoint | DELETE | `/v1/accounts/url-endpoints/{{id}}` | `conn_mod_def::GK8SzkfyQWg::LtuVkf3pTpqfN6PqhznLug` |
| Update a URL Endpoint | PUT | `/v1/accounts/url-endpoints/{{id}}` | `conn_mod_def::GK8Sz--XFzA::uvql38RfQ1i7rVjNGGcz2Q` |

### SavedExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Saved Extension Details | GET | `/v1/saved-extensions/{{id}}` | `conn_mod_def::GK8S0keht4A::SPOptHWkQymDI4NKZAc22w` |
| List Saved Extensions | GET | `/v1/saved-extensions` | `conn_mod_def::GK8S0s4NhWA::H0oqHs2-Qj6khJCNBFfdzA` |
| Create Saved Extension | POST | `/v1/saved-extensions` | `conn_mod_def::GK8S0PcFRvg::Waa6F_8YRYWOyeWIYBECZA` |
| Delete a Saved Extension | DELETE | `/v1/saved-extensions/{{id}}` | `conn_mod_def::GK8S0kIozrA::J80BOOpJTOGg7mMmsAdUpg` |
| Update a Saved Extension | PATCH | `/v1/saved-extensions/{{id}}` | `conn_mod_def::GK8S1TfdV3A::iLhTLiakS1CgYzJERozo7Q` |

### BulkJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Job Status | GET | `/v1/bulkJobs/{{jobId}}` | `conn_mod_def::GK8Sz_Cmg5A::SWDfose7RZ6m9lqprUE0pw` |
| Copy Folder | POST | `/v1/bulkJobs/copyFolder` | `conn_mod_def::GK8S0QPtrMA::rzcrunOnQwmiJxPLKUFtfw` |
| Move Folder | POST | `/v1/bulkJobs/moveFolder` | `conn_mod_def::GK8S0zHlbVA::9xW2ksMkQmuiFsnuYi1Mag` |
| Rename Folder | POST | `/v1/bulkJobs/renameFolder` | `conn_mod_def::GK8S1J85x7A::suq0LW2ZQ-CB62tzBdoN4A` |

### CustomMetadataFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Custom Metadata Fields | GET | `/customMetadataFields` | `conn_mod_def::GK8S0k9ITfA::nN9PtWp-Q6mf2stqvFIJ-w` |
| Create a Custom Metadata Field | POST | `/v1/customMetadataFields` | `conn_mod_def::GK8S0PWICVA::prSELsbaTJeFhju1B4wlcQ` |
| Delete a Custom Metadata Field | DELETE | `/v1/customMetadataFields/{{id}}` | `conn_mod_def::GK8S0ZI0fvA::eSkkyncqSJqqV_TFAuyczw` |
| Update a Custom Metadata Field | PATCH | `/v1/customMetadataFields/{{id}}` | `conn_mod_def::GK8S1aDE9oA::wxomqMuvR4mJuG3ayE9hxQ` |

### FileVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get File Version Details | GET | `/v1/files/{{fileId}}/versions/{{versionId}}` | `conn_mod_def::GK8S0kYKx7g::sUUXx5fTQseSfN04sIHm1Q` |
| List File Versions for a File | GET | `/v1/files/{{fileId}}/versions` | `conn_mod_def::GK8S0u4DFdg::X5m73NOuS1-U4IhAiG5N8g` |

### AccountUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Usage Information | GET | `/v1/accounts/usage` | `conn_mod_def::GK8SzkILSNA::te2OhK17QCqPtmbYuwuHrQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Folder | POST | `/v1/folder` | `conn_mod_def::GK8S0P3E-_A::ppi8KOKvRWiZy3oN1FrljA` |

### Folder

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Folder | DELETE | `/v1/folder` | `conn_mod_def::GK8S0ZaUUrg::4bxYnO91TQ-ozyrS2I54dg` |

### Metadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metadata From a Remote URL | GET | `/v1/metadata` | `conn_mod_def::GK8S1Wie_Dg::k6LA1vwjSL-JAtFN622yFA` |

### DummyTest

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Dummy Test | POST | `/v1/dummy/test` | `conn_mod_def::GK8S1Ws-HNA::fvazXPzrQXSDXWAnQ4smwQ` |

This lists 42 of 48 actions. For anything not here, call `search_one_platform_actions` with platform `imagekit-io`. The full catalog is at https://www.withone.ai/knowledge/imagekit-io.

## When a call fails

The error comes from Imagekit IO, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/imagekit-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
