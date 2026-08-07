---
name: affinda
description: Affinda is an intelligent document processing platform that uses AI to extract, transform, match, and validate data from complex documents, enabling businesses to automate high-stakes document workflows and send source-grounded information into systems such as Dynamics 365, Salesforce, and Xero. Read and write Affinda data through One: documents, annotations, documenttypes, invitations, validationresults, apiusers and more, 109 actions with real parameter documentation. Use whenever the user asks to look something up in Affinda, create or update a record there, or build code against the Affinda API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: affinda
  generated-from: one-knowledge-base
---

# Affinda through One

Affinda is an intelligent document processing platform that uses AI to extract, transform, match, and validate data from complex documents, enabling businesses to automate high-stakes document workflows and send source-grounded information into systems such as Dynamics 365, Salesforce, and Xero.

One exposes Affinda through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `affinda` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Affinda is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Affinda account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document's Redacted Version | GET | `/v3/documents/{{identifier}}/redacted` | `conn_mod_def::GMiFnb1jn0A::wvTpg9B2TPeIQbjBufbsRg` |
| Get a Specific Document | GET | `/v3/documents/{{identifier}}` | `conn_mod_def::GMiFnbqlrAg::vSB8SZkmS3qgFiYVs94rxw` |
| List Documents | GET | `/v3/documents` | `conn_mod_def::GMiFnUtlxJA::Nb6xs5wUTPmpOUNSUrdjPQ` |
| List Documents for an Index | GET | `/v3/index/{{name}}/documents` | `conn_mod_def::GMiFn15Yb7A::ztJhGT4RTsei9DKcPMpkiQ` |
| Add Tag to Documents | POST | `/v3/documents/batch_add_tag` | `conn_mod_def::GMiFobradvA::sD_9KjgrR5qkGyPJDAB7mw` |
| Batch Remove Tag from Documents | POST | `/v3/documents/batch_remove_tag` | `conn_mod_def::GMiFolf6kgg::pLrZJnduTV6OBw7eTTR1VQ` |
| Create From Data Using Documents | POST | `/v3/documents/create_from_data` | `conn_mod_def::GMiFnsul8ng::u29MGuBfT5eDjFISSPhE5g` |
| Delete a Document | DELETE | `/v3/documents/{{identifier}}` | `conn_mod_def::GMiFnSUJNhA::ZJL4cpAyQeGmEaWz-0oBtA` |
| Index a New Document for an Index | POST | `/v3/index/{{name}}/documents` | `conn_mod_def::GMiFoHyo5jg::C5QcqrDtQrGY3meaLntHLg` |
| Re-index a Document in an Index | POST | `/v3/index/{{name}}/documents/{{identifier}}/re_index` | `conn_mod_def::GMiFoUhoUrg::_88cQ7rXT2S5XuGFCD6tlg` |
| Update a Document | PATCH | `/v3/documents/{{identifier}}` | `conn_mod_def::GMiFncFFMrg::sLsp5UIFQXWkmxyoilQNjw` |
| Update Data for a Document | POST | `/v3/documents/{{identifier}}/update_data` | `conn_mod_def::GMiFoUR8lbA::YEOCSwEsRUeKkiJNs_4DMw` |

1 more Documents actions are available through search.

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Annotation | GET | `/v3/annotations/{{id}}` | `conn_mod_def::GMiFmnl7HTg::_9gsqT26SiGBSWcOpPaf0w` |
| List All Annotations | GET | `/v3/annotations` | `conn_mod_def::GMiFmo9YsbA::nG-8rNqkTPqwpersy5zklg` |
| Batch Create Annotations | POST | `/v3/annotations/batch_create` | `conn_mod_def::GMiFmgvaMCA::27m5k_lwQJO2ypV4gXaWPA` |
| Batch Delete Annotations | POST | `/v3/annotations/batch_delete` | `conn_mod_def::GMiFmgC3TAA::AH1qhNleQzyTSTIWIx437A` |
| Batch Update Annotations | POST | `/v3/annotations/batch_update` | `conn_mod_def::GMiFmglU0Ug::PLTUZwdGQXCJXgQrdXxUmA` |
| Create an Annotation | POST | `/v3/annotations` | `conn_mod_def::GMiFmnoSEcA::nmTwZGDTRF-Ec3cflj2gxg` |
| Delete an Annotation | DELETE | `/v3/annotations/{{id}}` | `conn_mod_def::GMiFmnMbsLA::zADahk__Qy2s4v_BYngCjA` |
| Update an Annotation | PATCH | `/v3/annotations/{{id}}` | `conn_mod_def::GMiFmopH9Ng::FXN6K3H9QOiNUIfHxa_h2g` |

### DocumentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate JSON Schema from a Document Type | GET | `/v3/document_types/{{identifier}}/json_schema` | `conn_mod_def::GMiFnL_D40A::M5wS9-D2RyCj9frTZtl9XQ` |
| Generate Pydantic Models from a Document Type | GET | `/v3/document_types/{{identifier}}/pydantic_models` | `conn_mod_def::GMiFnL1r1fg::2zQQ3EX5Qte1tt2mvXJz_g` |
| Get a Document Type | GET | `/v3/document_types/{{identifier}}` | `conn_mod_def::GMiFnS9NsLA::9USD7zBkTruZaQvYyPgrLw` |
| List Document Types | GET | `/v3/document_types` | `conn_mod_def::GMiFnS2eZog::1q9Z4cs5SY-VoLjcxQdLLw` |
| Create a Document Type | POST | `/v3/document_types` | `conn_mod_def::GMiFnLSoTjg::EzgwQ04zSOmnhJwbkSu6yQ` |
| Delete a Document Type | DELETE | `/v3/document_types/{{identifier}}` | `conn_mod_def::GMiFnLVG1EA::VyWeHPRtStq3yudIvxrCfg` |
| Update a Document Type | PATCH | `/v3/document_types/{{identifier}}` | `conn_mod_def::GMiFnSUgirg::5ZyZPebGS1288XqN-cy80A` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invitation by Identifier | GET | `/v3/invitations/{{identifier}}` | `conn_mod_def::GMiFnivraeg::yxwNBzAuSHO-bqNiusEyog` |
| Get Invitation Details by Token | GET | `/v3/invitations/token/{{token}}` | `conn_mod_def::GMiFnjZs9Vg::HhLxCJjbRtepN3F8JwFJYw` |
| List Invitations | GET | `/v3/invitations` | `conn_mod_def::GMiFnjZ0SFg::3i9UF_ouTEO1_SyICHlgLg` |
| Create an Invitation | POST | `/v3/invitations` | `conn_mod_def::GMiFnceEwwA::2nXyKlGrTkec14xwR3zNSg` |
| Delete an Invitation | DELETE | `/v3/invitations/{{identifier}}` | `conn_mod_def::GMiFnkld7Ug::Rei8pu3OTYqCIflcl3pT5Q` |
| Respond to an Invitation Token | PATCH | `/v3/invitations/token/{{token}}` | `conn_mod_def::GMiFnjM-L1A::z8kqU0DfRLe3n3A1gGbRIA` |
| Update an Invitation | PATCH | `/v3/invitations/{{identifier}}` | `conn_mod_def::GMiFntIr2pA::uyrirb7ORoeww100NrEwrA` |

### ValidationResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Validation Result by ID | GET | `/v3/validation_results/{{id}}` | `conn_mod_def::GMiFo4rVxtg::hfvuRBKdS5aSM9MS7-po4g` |
| List Validation Results | GET | `/v3/validation_results` | `conn_mod_def::GMiFostLAIA::tVCRvwSGTVCUAyPlU7Xi8Q` |
| Batch Create Validation Results | POST | `/v3/validation_results/batch_create` | `conn_mod_def::GMiFosWJcgg::tTIbH7nBSzK28blzGYraUQ` |
| Batch Delete Validation Results | POST | `/v3/validation_results/batch_delete` | `conn_mod_def::GMiFosVrL_A::MuLtp92iRmiOi-xY9qmHEg` |
| Create a Validation Result | POST | `/v3/validation_results` | `conn_mod_def::GMiFoyvckyg::586EFodMSIy6qioJKvRmVw` |
| Delete a Validation Result | DELETE | `/v3/validation_results/{{id}}` | `conn_mod_def::GMiFosE7-Xg::RiBGyGVmQ3iNQXHQ-r0fWQ` |
| Update a Validation Result | PATCH | `/v3/validation_results/{{id}}` | `conn_mod_def::GMiFo6o9EXA::2YdACDj6QMOHJNA9BezyBg` |

### ApiUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API User by ID | GET | `/v3/api_users/{{id}}` | `conn_mod_def::GMiFnDBM7bA::eWNZmetEQuC6r1-6BK7nXQ` |
| List API Users | GET | `/v3/api_users` | `conn_mod_def::GMiFnDZ2w3g::vfLNNLXWTeqb27K8fhjShA` |
| Create an API User | POST | `/v3/api_users` | `conn_mod_def::GMiFnEoagQg::kJhAjCA1T7SeDC4UeqXzuA` |
| Delete an API User | DELETE | `/v3/api_users/{{id}}` | `conn_mod_def::GMiFnCmUpxA::McCi5tDuRl62jI2aBmRfVQ` |
| Regenerate an API User's API Key | POST | `/v3/api_users/{{id}}/regenerate_api_key` | `conn_mod_def::GMiFnEHOb1A::avOqr3E4Qc23eeefKXT-uw` |
| Update an API User | PATCH | `/v3/api_users/{{id}}` | `conn_mod_def::GMiFnKtkPDg::bA2SeJz0Tb-Ds7qiG_jr-A` |

### ResthookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resthook Subscription by ID | GET | `/v3/resthook_subscriptions/{{id}}` | `conn_mod_def::GMiFpExqmbg::YcPYFdQ7R1m7JM5AGGNyDA` |
| List Resthook Subscriptions | GET | `/v3/resthook_subscriptions` | `conn_mod_def::GMiFpB_YDCg::ffIMn6snTJ2KQ9jS2_R7lA` |
| Activate a Resthook Subscription | POST | `/v3/resthook_subscriptions/activate` | `conn_mod_def::GMiFo551fSg::lVakpZmvQAGUmNO0N5Toew` |
| Create a Resthook Subscription | POST | `/v3/resthook_subscriptions` | `conn_mod_def::GMiFo6JJBuA::6n7_IFqcSmmkSnKll38jHg` |
| Delete a Resthook Subscription | DELETE | `/v3/resthook_subscriptions/{{id}}` | `conn_mod_def::GMiFo5KezbA::BLuW-dfEQFuquoyQCMqqtw` |
| Update a Resthook Subscription | PATCH | `/v3/resthook_subscriptions/{{id}}` | `conn_mod_def::GMiFpBFrhwA::k7I0fy5pRf-LACs36CavDg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization by Identifier | GET | `/v3/organizations/{{identifier}}` | `conn_mod_def::GMiFntGMhYA::O47oIDXIT56xzaXeEB_JvQ` |
| List Organizations | GET | `/v3/organizations` | `conn_mod_def::GMiFnrigaOg::GhNeoN0BTMOJ8iuB7V8dPA` |
| Create an Organization | POST | `/v3/organizations` | `conn_mod_def::GMiFmZIP62g::er9FU-LSQvGsyJgk0J1rcQ` |
| Delete an Organization | DELETE | `/v3/organizations/{{identifier}}` | `conn_mod_def::GMiFmZxoU5g::g2ivuKXpQ065TO0N_vjlcA` |
| Update an Organization | PATCH | `/v3/organizations/{{identifier}}` | `conn_mod_def::GMiFmglM4gg::GswG3IiqRBaPxoeLlfWP6g` |

### MappingDataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mapping Data Source by Identifier | GET | `/v3/mapping_data_sources/{{identifier}}` | `conn_mod_def::GMiFmwPfpFg::1gHbG0dUT-ywEDmjMWNdPA` |
| List Mapping Data Sources | GET | `/v3/mapping_data_sources` | `conn_mod_def::GMiFm7iOsVA::LOmxkif9RimuoCrvJFZXUQ` |
| Create a Mapping Data Source | POST | `/v3/mapping_data_sources` | `conn_mod_def::GMiFmvSQBng::WFDqNgnITMmO_hnyI3QY1w` |
| Delete a Mapping Data Source | DELETE | `/v3/mapping_data_sources/{{identifier}}` | `conn_mod_def::GMiFmvxI2OA::38AuXHSURF2wWnUP_TcyaA` |
| Replace Values for a Mapping Data Source | PUT | `/v3/mapping_data_sources/{{identifier}}/values` | `conn_mod_def::GMiFm6ZvvwA::KUc6Sls8Sh2wQLedYOaZ-A` |

### MappingDataSourceValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Mapping Data Source Value | GET | `/v3/mapping_data_sources/{{identifier}}/values/{{value}}` | `conn_mod_def::GMiFm8sUIeg::5xIkG4eHQbyMqRF5hFq7Sg` |
| List Values for a Mapping Data Source | GET | `/v3/mapping_data_sources/{{identifier}}/values` | `conn_mod_def::GMiFm64u4pg::oBI4YceQQ1WLaopIGdApHA` |
| Add a Value to a Mapping Data Source | POST | `/v3/mapping_data_sources/{{identifier}}/values` | `conn_mod_def::GMiFmzlmTyg::ftPrCJzDT-WTlasAct0wmA` |
| Delete a Mapping Data Source Value | DELETE | `/v3/mapping_data_sources/{{identifier}}/values/{{value}}` | `conn_mod_def::GMiFmvxD24g::Hv0AgmgkQVaFJL6OkofKjw` |
| Update a Mapping Data Source Value | PUT | `/v3/mapping_data_sources/{{identifier}}/values/{{value}}` | `conn_mod_def::GMiFm6SX5gg::IiQgnACeTYWcm4pRZabU9w` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag by ID | GET | `/v3/tags/{{id}}` | `conn_mod_def::GMiFojDraOA::_40rhM2SRoWfd2KdwXx2rQ` |
| List Tags | GET | `/v3/tags` | `conn_mod_def::GMiFokQSQcg::SPlo1NJbT0WDdIa-C6I4Cg` |
| Create a Tag | POST | `/v3/tags` | `conn_mod_def::GMiFocO1lcA::0-21ZUjpRoSIKWhnNHnozw` |
| Delete a Tag | DELETE | `/v3/tags/{{id}}` | `conn_mod_def::GMiFocAecPg::6zu-JTmqTHmpoCSNuMLhuw` |
| Update a Tag | PATCH | `/v3/tags/{{id}}` | `conn_mod_def::GMiFokXayOA::pNa00Pi5SOyFhFFb3Me4aQ` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace by Identifier | GET | `/v3/workspaces/{{identifier}}` | `conn_mod_def::GMiFpVEqR2g::Z0g44PAfRE2ZTCB_IUBJqg` |
| List Workspaces | GET | `/v3/workspaces` | `conn_mod_def::GMiFpU90Ydg::oVy26nxGRb-6uSzPoZbTuw` |
| Create a Workspace | POST | `/v3/workspaces` | `conn_mod_def::GMiFpLq2ypA::QYPhUOmrSTGaQKcbss2rVQ` |
| Delete a Workspace | DELETE | `/v3/workspaces/{{identifier}}` | `conn_mod_def::GMiFpLVgmHg::gFHwAqn-TlCZ53R_rbgy2w` |
| Update a Workspace | PATCH | `/v3/workspaces/{{identifier}}` | `conn_mod_def::GMiFpUyedeg::MTcBTioARfWIK6N5tztazQ` |

### WorkspaceMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Workspace Membership | GET | `/v3/workspace_memberships/{{identifier}}` | `conn_mod_def::GMiFpVXisuA::M-ZDjtUjSjiMHwiUXVkR8Q` |
| List Workspace Memberships | GET | `/v3/workspace_memberships` | `conn_mod_def::GMiFpN_Fl6g::UPVITQlMRZKufMJWES-LDw` |
| Create a Workspace Membership | POST | `/v3/workspace_memberships` | `conn_mod_def::GMiFpMK6jJA::KBbW-4dAQnWMSxVVYyx5Pw` |
| Delete a Workspace Membership | DELETE | `/v3/workspace_memberships/{{identifier}}` | `conn_mod_def::GMiFpL_5o4g::bpoXYDi9S1OQX1uobTX4RA` |

### OrganizationMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Membership by Identifier | GET | `/v3/organization_memberships/{{identifier}}` | `conn_mod_def::GMiFmYVWYbg::VNrOWKzwQPuVVoyGn2K7CA` |
| List Organization Memberships | GET | `/v3/organization_memberships` | `conn_mod_def::GMiFmZXsI8g::bHzCetYqTSKQbh9nMgny1A` |
| Delete an Organization Membership | DELETE | `/v3/organization_memberships/{{identifier}}` | `conn_mod_def::GMiFmYR-gBg::RwIolcGaQvmbI-ws8gtaHg` |

### Index

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Index | POST | `/v3/index` | `conn_mod_def::GMiFntNL5Ng::mn_67y4fR0yST2ZZD8WQqA` |
| Delete an Index | DELETE | `/v3/index/{{name}}` | `conn_mod_def::GMiFnzS_rag::fuSlEsLdTD-53ytSj4SPMQ` |
| Update an Index | PATCH | `/v3/index/{{name}}` | `conn_mod_def::GMiFoT5Us-g::yV_g4QnwT5mdcycNREfixA` |

### JobDescriptionSearchConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Logged-in User's Job Description Search Config | GET | `/v3/job_description_search/config` | `conn_mod_def::GMiFoGNmg7A::roi-FJiERPOMD5z-QWxm2Q` |
| Update Job Description Search Config for the Logged-in User | PATCH | `/v3/job_description_search/config` | `conn_mod_def::GMiFoceIQNA::aqki1OMbRbyYQw3SjyZXng` |

This lists 90 of 109 actions. For anything not here, call `search_one_platform_actions` with platform `affinda`. The full catalog is at https://www.withone.ai/knowledge/affinda.

## When a call fails

The error comes from Affinda, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/affinda

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
