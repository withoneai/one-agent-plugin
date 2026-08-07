---
name: postman
description: Postman is an API platform that supports designing, testing, documenting, and managing APIs, with tools for collaboration, mock servers, monitoring, SDK generation, and workflow automation, allowing development teams to streamline the full API lifecycle in one environment. Read and write Postman data through One: collections, comments, environments, apis, workspaces, components and more, 244 actions with real parameter documentation. Use whenever the user asks to look something up in Postman, create or update a record there, or build code against the Postman API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: postman
  generated-from: one-knowledge-base
---

# Postman through One

Postman is an API platform that supports designing, testing, documenting, and managing APIs, with tools for collaboration, mock servers, monitoring, SDK generation, and workflow automation, allowing development teams to streamline the full API lifecycle in one environment.

One exposes Postman through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `postman` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Postman is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Postman account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection | GET | `/collections/{{collectionId}}` | `conn_mod_def::GMPurUD-0gE::GmB-QmUbTBeSvYdRjRq4_Q` |
| Get a Collection for an API | GET | `/apis/{{apiId}}/collections/{{collectionId}}` | `conn_mod_def::GMPupQ6bQUY::fA5u5FOXSSS55UsbnEr_RA` |
| Get a Collection's Source Status | GET | `/collections/{{collectionId}}/source-status` | `conn_mod_def::GMPurjMPj18::QYNbOWAjRee4Lkh0FEMF4w` |
| List Collections | GET | `/collections` | `conn_mod_def::GMPurbpl0qo::V7woQPx-SNOohOC8-otMHA` |
| Transform a Collection to OpenAPI | GET | `/collections/{{collectionId}}/transformations` | `conn_mod_def::GMPur1bWHDI::1xCpdhSORRCV_15InU8qlg` |
| Create a Collection | POST | `/collections` | `conn_mod_def::GMPurNgPspM::CQEBHai4TD63wVrv1MV9bw` |
| Create a Fork for a Collection | POST | `/collections/fork/{{collectionId}}` | `conn_mod_def::GMPurL6673A::ZPR65VOeQLm2KhnCs89dyQ` |
| Create a Pull Request for a Collection | POST | `/collections/{{collectionId}}/pull-requests` | `conn_mod_def::GMPurVH-6uc::N9oyPga3SvuDMXt8swnQ_w` |
| Create a Request in a Collection | POST | `/collections/{{collectionId}}/requests` | `conn_mod_def::GMPuqdixG64::MqT11xq2TYC3pJNbMmbLOQ` |
| Delete a Collection | DELETE | `/collections/{{collectionId}}` | `conn_mod_def::GMPurUTe2Uk::AgOiiN1gR5KTBdwKs8XQ7g` |
| Duplicate a Collection | POST | `/collections/{{collectionId}}/duplicates` | `conn_mod_def::GMPurUQB3HQ::o6g2XYP3TFWjGSSj80Z1Tg` |
| Generate Spec from a Collection | POST | `/collections/{{collectionUid}}/generations/{{elementType}}` | `conn_mod_def::GMPuurjpFd0::IjxYpi0ISEWYRoRzDSsruA` |

11 more Collections actions are available through search.

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder's Comments for a Collection | GET | `/collections/{{collectionId}}/folders/{{folderId}}/comments` | `conn_mod_def::GMPuqdNg7_0::PPiyyYLzSBuy5TaCbBhGWg` |
| Get a Request's Comments for a Collection | GET | `/collections/{{collectionId}}/requests/{{requestId}}/comments` | `conn_mod_def::GMPurCsjtRA::VvXt63ZtS4GjFSOwhpal1w` |
| Get an API's Comments | GET | `/apis/{{apiId}}/comments` | `conn_mod_def::GMPupfweasI::uD-rKRRkQ3q5ge8_-tJPNg` |
| Get Comments for a Collection Response | GET | `/collections/{{collectionId}}/responses/{{responseId}}/comments` | `conn_mod_def::GMPurLz_wz0::FHAdJhw2Snaq2_8l6rwbog` |
| List a Collection's Comments | GET | `/collections/{{collectionId}}/comments` | `conn_mod_def::GMPurbh8YpU::Dh7zJBOURjSeRZeYVKR9uw` |
| List Comments for an API Collection | GET | `/apis/{{apiId}}/collections/{{collectionId}}/comments` | `conn_mod_def::GMPupXuz1FE::f20VzJMQTASqMwSt62Ec7Q` |
| Create a Comment on a Collection | POST | `/collections/{{collectionId}}/comments` | `conn_mod_def::GMPurLzGqWc::-fVTJWpfQ-yp1MTMi_sCLA` |
| Create a Comment on a Collection Response | POST | `/collections/{{collectionId}}/responses/{{responseId}}/comments` | `conn_mod_def::GMPurEPT3lg::N0iuwgj6TbCWpip1iYL4eg` |
| Create a Comment on an API | POST | `/apis/{{apiId}}/comments` | `conn_mod_def::GMPupH8UWS8::bjE4yjhZSx-ovurfcAOH3Q` |
| Create a Comment on an API Collection | POST | `/apis/{{apiId}}/collections/{{collectionId}}/comments` | `conn_mod_def::GMPuo7yKC4Y::ATnlQjqVSQ-RCGaX887miA` |
| Delete a Collection's Comment for an API | DELETE | `/apis/{{apiId}}/collections/{{collectionId}}/comments/{{commentId}}` | `conn_mod_def::GMPupIkN2Bk::A5cHVy56T_2QvYjqgwBK9w` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Environment | GET | `/environments/{{environmentId}}` | `conn_mod_def::GMPusTtLSBA::rSUcbgYOQ72c9CsMb1MWPA` |
| List Environments | GET | `/environments` | `conn_mod_def::GMPusdGv2yo::10EUWBXdQWu0jE9xBn2Rfw` |
| Create a Fork for an Environment | POST | `/environments/{{environmentId}}/forks` | `conn_mod_def::GMPusNEPxJo::8VmJKC0WRmyKTkn3O2Sjkg` |
| Create an Environment | POST | `/environments` | `conn_mod_def::GMPusLf6u4o::-64eGZCyRDOEM4xlqL9AjQ` |
| Delete an Environment | DELETE | `/environments/{{environmentId}}` | `conn_mod_def::GMPusTmK1fo::W6dNj2_fT7Sw4gJbjzZkeg` |
| Merge an Environment Fork | POST | `/environments/{{environmentId}}/merges` | `conn_mod_def::GMPusTu-YjY::hsYQApKUQ-qLR1kkn13YNQ` |
| Pull Source Changes for an Environment | POST | `/environments/{{environmentUid}}/pulls` | `conn_mod_def::GMPusjF0b84::IfaG2K72Tvep6lMtFK6gwQ` |
| Replace an Environment's Data | PUT | `/environments/{{environmentId}}` | `conn_mod_def::GMPuslogesA::8Urf6eHETQmNCZiTSXOXAQ` |
| Update an Environment | PATCH | `/environments/{{environmentId}}` | `conn_mod_def::GMPuskF7Opw::zth1eYbkSsKGJam6z24CMQ` |

### Apis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API | GET | `/apis/{{apiId}}` | `conn_mod_def::GMPupf7Hfuk::leR6w6ZPQrS9Uu9dREqSWw` |
| List APIs in a Workspace | GET | `/apis` | `conn_mod_def::GMPupYwg-AA::3jtOm0mjRqSYz2BPRa_uiA` |
| Add a Collection to an API | POST | `/apis/{{apiId}}/collections` | `conn_mod_def::GMPuo8ScvZg::ZE-M7aQkS6eS2T-ZUQLEhg` |
| Create an API | POST | `/apis` | `conn_mod_def::GMPupJZ2vho::y7t6l_2FSkmsYMruOm-hAw` |
| Delete an API | DELETE | `/apis/{{apiId}}` | `conn_mod_def::GMPupQBeycE::jy8IinPhRcelG9C77SzGWw` |
| Update a Comment on an API | PUT | `/apis/{{apiId}}/comments/{{commentId}}` | `conn_mod_def::GMPupnfU2qo::6hERwY7SRgysAN5T-fivrg` |
| Update an API | PUT | `/apis/{{apiId}}` | `conn_mod_def::GMPupnb1fQs::tz3mTUVATMeJid2XRGfbYQ` |
| Update an API's Tags | PUT | `/apis/{{apiId}}/tags` | `conn_mod_def::GMPuvUvrTq0::ctZRdwgHSMO1yGS1dGC_OQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace by ID | GET | `/workspaces/{{workspaceId}}` | `conn_mod_def::GMPuvu-d83w::MYnFEB2pRa-KkOYqLhEVJw` |
| List Workspaces | GET | `/workspaces` | `conn_mod_def::GMPuwBTbZJ0::cT6nx2bRRDCTeM8bNwFpwg` |
| Create a Workspace | POST | `/workspaces` | `conn_mod_def::GMPuvuc6I-k::zKHTneReTQW3PLo4x6nIKg` |
| Delete a Workspace | DELETE | `/workspaces/{{workspaceId}}` | `conn_mod_def::GMPuvuk8z1o::iJ_QrWyUQV2xTgryymxq9g` |
| Transfer a Workspace to a Team | PATCH | `/workspaces/{{workspaceId}}/transfers` | `conn_mod_def::GMPuv-qHNPQ::Cd3lB_TISYeYT28CRiAAVg` |
| Transfer an Element to a Workspace | POST | `/workspaces/{{workspaceId}}/element-transfers` | `conn_mod_def::GMPuv_5TvVw::74rVc3VhS1iV_T70ho5img` |
| Update a Workspace | PUT | `/workspaces/{{workspaceId}}` | `conn_mod_def::GMPuwHtuszc::CVgdCQCwQC2uHZQ2WvbSQQ` |
| Update a Workspace's Tags | PUT | `/workspaces/{{workspaceId}}/tags` | `conn_mod_def::GMPuvOERcyU::oMqV87L4QL2g-WWXg_ajmw` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Component | GET | `/components/{{componentId}}` | `conn_mod_def::GMPusEFjNGQ::gqVZDAAhStqFPfQUaCfcIA` |
| Get a Component's Draft | GET | `/components/{{componentId}}/drafts` | `conn_mod_def::GMPusD4bOPk::oUzF4iVFRwiMBF5N8J3Now` |
| List Components | GET | `/components` | `conn_mod_def::GMPusMGPBYI::DcHzzvcTReaU5d4xMQI4DA` |
| Create a Component | POST | `/components` | `conn_mod_def::GMPur8d0ovU::f0KFlS38R3O797zskA68dw` |
| Create a Version for a Component | POST | `/components/{{componentId}}/versions` | `conn_mod_def::GMPusDuPEIA::7lWKF0bwRsmz2NOyIKhOqg` |
| Update a Component by ID | PATCH | `/components/{{componentId}}` | `conn_mod_def::GMPusLSNA54::OKPIma3XQ3qWePa0w88CKQ` |

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Monitor | GET | `/monitors/{{monitorId}}` | `conn_mod_def::GMPutG9OG94::G0DfoZ24TKCMWR6R7dj7Pw` |
| List Monitors | GET | `/monitors` | `conn_mod_def::GMPutFzX5ZM::urJ1vjjWTIK4QgPT2iyQnw` |
| Create a Monitor | POST | `/monitors` | `conn_mod_def::GMPus8lLLXQ::AVhpucOiTcWPmAPJU2DNPw` |
| Delete a Monitor | DELETE | `/monitors/{{monitorId}}` | `conn_mod_def::GMPutGANXrY::t0Qk2kNuT6C3hsBhqGOeqA` |
| Run a Monitor | POST | `/monitors/{{monitorId}}/run` | `conn_mod_def::GMPutN8Z1gM::S76uCXEGTY6bUpQ6ugNFLg` |
| Update a Monitor | PUT | `/monitors/{{monitorId}}` | `conn_mod_def::GMPutNlZ_b4::ZM0eZ55KTkGTuw_6eBA13g` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by ID | GET | `/teams/{{teamId}}` | `conn_mod_def::GMPuvXOIWVk::03ksayeMRNK6xtgQObIddg` |
| List Teams | GET | `/teams` | `conn_mod_def::GMPuveVOqJU::_NnQhsxoSV6H0Vxr70G8Dg` |
| Bulk Members for a Team | POST | `/teams/{{teamId}}/bulk-members` | `conn_mod_def::GMPuve4pJ4Q::pIFWz_R5RN-3cBchtMLItg` |
| Create a Team | POST | `/teams` | `conn_mod_def::GMPuvUKQPl4::wOHfMpHDT8Cqs5aCKNdzEw` |
| Create an Access Request for a Team | POST | `/teams/{{teamId}}/access-requests` | `conn_mod_def::GMPuvV-lcqk::xyyOouRGRHuj7FTAd-bEIQ` |
| Remove Team Members from a Team | DELETE | `/teams/{{teamId}}/bulk-members` | `conn_mod_def::GMPuvene3qk::v_j-LY8NRhqfx6w57UozYw` |

### Mocks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mock Server | GET | `/mocks/{{mockId}}` | `conn_mod_def::GMPuszrVloY::z0nPAZUIRT-jDoNsRGb_VQ` |
| Create a Mock Server | POST | `/mocks` | `conn_mod_def::GMPussdyQr8::oAjcVSqrTwygn3nduoJVhQ` |
| Publish a Mock Server | POST | `/mocks/{{mockId}}/publish` | `conn_mod_def::GMPus6xkKic::ixqUlJ4rQbCTHODqnH6ePw` |
| Unpublish a Mock Server | DELETE | `/mocks/{{mockId}}/unpublish` | `conn_mod_def::GMPus_KfzNQ::xDvDva2SSIun7NmwiDovtg` |
| Update a Mock Server | PUT | `/mocks/{{mockId}}` | `conn_mod_def::GMPus80MWM8::Tki8T8NqRPOvdcTZxwtN5g` |

### SpecFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Spec File | GET | `/specs/{{specId}}/files/{{filePath}}` | `conn_mod_def::GMPuusDKHPA::dyD8a343R9GoTnlPeNKn9w` |
| List a Spec's Files | GET | `/specs/{{specId}}/files` | `conn_mod_def::GMPuuzWZM5I::hkLw9fUMQLqNxPq3l8DubA` |
| Create a Spec File for a Spec | POST | `/specs/{{specId}}/files` | `conn_mod_def::GMPuuiwaN7A::uPeAI5dtQquz4VFfKqI08w` |
| Delete a Spec File | DELETE | `/specs/{{specId}}/files/{{filePath}}` | `conn_mod_def::GMPuui3IZRo::0qUdTwraSuqx4n3BaBtGfw` |
| Update a Spec File | PATCH | `/specs/{{specId}}/files/{{filePath}}` | `conn_mod_def::GMPuvCx-5Cs::e0U3zLG0Qk-lnuZT0RFRtw` |

### WorkspaceUpdates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Update | GET | `/workspaces/{{workspaceId}}/updates/{{updateId}}` | `conn_mod_def::GMPuv2WxMFM::jDZsGgL8QleRtw5Z0ZSkCA` |
| Get Workspace Updates for a Workspace | GET | `/workspaces/{{workspaceId}}/updates` | `conn_mod_def::GMPuv1gDDMM::GhoGEe8KQa245f2zH8p7bA` |
| Create a Workspace Update for a Workspace | POST | `/workspaces/{{workspaceId}}/updates` | `conn_mod_def::GMPuvuPdPTE::zEyKZFmGRKyOBNdIwTcXog` |
| Delete a Workspace Update | DELETE | `/workspaces/{{workspaceId}}/updates/{{updateId}}` | `conn_mod_def::GMPuvuOrHHQ::Ip9CDkA4SsO_wivMWnRgVg` |
| Update a Workspace Update | PATCH | `/workspaces/{{workspaceId}}/updates/{{updateId}}` | `conn_mod_def::GMPuwI1L_JU::QC9AryhKSNydFBPd2LUSEg` |

### SystemEnvironments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a System Environment | GET | `/api-catalog/system-environments/{{systemEnvironmentId}}` | `conn_mod_def::GMPup7DMqUc::dMlIsrlOQZmVh1gmHV2EIQ` |
| List System Environments | GET | `/api-catalog/system-environments` | `conn_mod_def::GMPuqD8qOzY::m3C5IZWgSmeyP02EtrLHpA` |
| Create a System Environment | POST | `/api-catalog/system-environments` | `conn_mod_def::GMPupwwZaVM::dYSQ5ccPSGGKxL5-qmYM3g` |
| Update a System Environment | PATCH | `/api-catalog/system-environments/{{systemEnvironmentId}}` | `conn_mod_def::GMPuqNjQz50::4aKAmKJrTzqdF-_Y2EG1yg` |

### SdkGitConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SDK Git Connection | GET | `/sdk-git-connections/{{sdkGitConnectionId}}` | `conn_mod_def::GMPutzv_9ew::EW1FVYM1RcuRLcW6EY0XSw` |
| List SDK Git Connections | GET | `/sdk-git-connections` | `conn_mod_def::GMPuttZu8sY::EzF25qzPRNSyKzlI8mxAmw` |
| Create an SDK Git Connection | POST | `/sdk-git-connections` | `conn_mod_def::GMPutiMxAuU::UdLCCNmNTomrov7sgr8JRA` |
| Update an SDK Git Connection | PUT | `/sdk-git-connections/{{sdkGitConnectionId}}` | `conn_mod_def::GMPut0YczBo::EnuXEd-bTlGlTb-sVMLOGA` |

### Sdks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SDK | GET | `/sdks/{{sdkId}}` | `conn_mod_def::GMPutpWUw70::W9kZBKchSLadBE7F49cDHw` |

3 more Sdks actions are available through search.

This lists 90 of 244 actions. For anything not here, call `search_one_platform_actions` with platform `postman`. The full catalog is at https://www.withone.ai/knowledge/postman.

## When a call fails

The error comes from Postman, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/postman

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
