---
name: feathery
description: Feathery is a form-building and workflow automation platform that enables teams to create customizable, logic-driven forms and onboarding flows, with APIs and integrations for collecting data, connecting backend systems, and embedding user-facing workflows into web and product experiences. Read and write Feathery data through One: forms, hiddenfields, workspace, teaminvitations, documenttemplates, formsubmissions and more, 44 actions with real parameter documentation. Use whenever the user asks to look something up in Feathery, create or update a record there, or build code against the Feathery API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: feathery
  generated-from: one-knowledge-base
---

# Feathery through One

Feathery is a form-building and workflow automation platform that enables teams to create customizable, logic-driven forms and onboarding flows, with APIs and integrations for collecting data, connecting backend systems, and embedding user-facing workflows into web and product experiences.

One exposes Feathery through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `feathery` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Feathery is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Feathery account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forms | GET | `/api/form/` | `conn_mod_def::GKtfBIYdgMg::A5BanE9VQ_SxEo0GE0sjIw` |
| Create a Form From a Template | POST | `/api/form/` | `conn_mod_def::GKtfA9peWvA::y0hyXTzETM6OVf86l5RjKw` |
| Create a Template Form in a Workspace | POST | `/api/workspace/{{workspaceId}}/create-template-form/` | `conn_mod_def::GKtfBryLcFA::VoCF0hFpTu6pYoBB2Qp4vA` |
| Delete a Specific Form | DELETE | `/api/form/{{formId}}/` | `conn_mod_def::GKtfA9IeZsg::gjXHtV0iRcqO1kMe02o8mg` |
| Duplicate a Form | POST | `/api/form/copy/` | `conn_mod_def::GKtfA-D_5UA::nkTYNBqKSDuZs9un64S_Ew` |
| Update a Form | PATCH | `/api/form/{{formId}}/` | `conn_mod_def::GKtfBIJ_P7A::1qTkGwK5RkO41_mI3kOpOQ` |

### HiddenFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Hidden Fields | GET | `/api/field/hidden/` | `conn_mod_def::GKtfA8wcsnA::_tqpZ5W8R0G_-sckw8Y2CQ` |
| Create Hidden Fields | POST | `/api/field/hidden/` | `conn_mod_def::GKtfAxEAYfg::Crzu2k0QQ_aSJE2azMREdA` |
| Delete Hidden Fields | DELETE | `/api/field/hidden/delete/` | `conn_mod_def::GKtfA0-guzg::EMBEhXOOSr-2ozrXA1FkjA` |
| Edit Hidden Fields | PATCH | `/api/field/hidden/detail/` | `conn_mod_def::GKtfA0-gm_g::ndcxjHyVRRajvFRDB-tQpA` |

### Workspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Workspace | GET | `/api/workspace/{{workspaceId}}/` | `conn_mod_def::GKtfB5cTWPA::axRyHiE0Rs-3i18Xin5CEw` |
| Create a Workspace | POST | `/api/workspace/` | `conn_mod_def::GKtfBuTQ11g::m0OTuAwLSLW1D3rMobRCxA` |
| Delete a Workspace | DELETE | `/api/workspace/{{workspaceId}}/` | `conn_mod_def::GKtfBrUdsKg::6TCmb5MiSgCOqwHAhk93TQ` |
| Update a Workspace | PATCH | `/api/workspace/{{workspaceId}}/` | `conn_mod_def::GKtfB36VSDg::EkPHMkJ4QSuMrTIe23fMMQ` |

### TeamInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Invite New Users to a Feathery Team | POST | `/api/account/invite/` | `conn_mod_def::GKtfAeuUqPg::a_x0BwG-SXiWOs6GrI1NlQ` |
| Remove a User Invitation From Your Feathery Team | PATCH | `/api/account/uninvite/` | `conn_mod_def::GKtfAclXM_A::eTEI0HLYQNWRXDz3wJldLg` |

### DocumentTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Templates | GET | `/api/document/template/` | `conn_mod_def::GKtfAxXi6rA::0MVJFxifRJGKMzHASP5GJw` |
| Upload Document Templates in Bulk | POST | `/api/document/template/` | `conn_mod_def::GKtfApC6mVA::iVaNF-eiQUGKlDceWHUFsQ` |

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Submission Data for a Form | GET | `/api/form/submission/` | `conn_mod_def::GKtfBMkBoiA::6T7agkmtTfWGKHraTG_KMQ` |
| Set Field Values and Initialize Form Submissions | POST | `/api/form/submission/` | `conn_mod_def::GKtfA-p6iAA::WQ33WaGWSC6Z9Ats9xO6Mw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/api/user/` | `conn_mod_def::GKtfBf1qqrA::InNK2h9lRR61hKPrESHUhg` |
| Delete a User | DELETE | `/api/user/{{id}}/` | `conn_mod_def::GKtfBgS2yPg::ddA0hfteQdyUMSfEDsAiXw` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Feathery Account Information | GET | `/api/account/` | `conn_mod_def::GKtfAdCM1Gg::LeleQXl6TnmfzRdgDRph1A` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit an Account | PATCH | `/api/account/` | `conn_mod_def::GKtfAdlJFOA::bo9_vs0CSN2Tswrlvj65Xw` |

### AccountApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Rotate Account API Key | PATCH | `/api/account/rotate_key/` | `conn_mod_def::GKtfAe9jMXA::Vjf2kDebSLG9sNVupHdpYw` |

### DocumentExtraction

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Document Extraction | POST | `/api/ai/run/{{extractionId}}/` | `conn_mod_def::GKtfAnBTpYA::4alSxnXtS9etFRL4HGv9PQ` |

### DocumentEnvelope

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Document Envelope | DELETE | `/api/document/envelope/{{envelopeId}}/` | `conn_mod_def::GKtfAnBbmKg::QopRVvADTPGvahyG2S7x7w` |

### AiDocumentExtractionRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Runs for a Specific AI Document Extraction | GET | `/api/ai/run/batch/{{extractionId}}/` | `conn_mod_def::GKtfAo7tJIA::G8gFoa1fRUygd1JON1plQg` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Fill and/or Sign a Document | POST | `/api/document/fill/` | `conn_mod_def::GKtfAo76epA::f5sSvFzrTla5LwhPC-Oivg` |

### DocumentEnvelopes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Document Envelopes | GET | `/api/document/envelope/` | `conn_mod_def::GKtfAyOSzsg::xhFtOLu0Q1exPWJr-wsnbw` |

### FormSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Feathery Form Schema | GET | `/api/form/{{formId}}/` | `conn_mod_def::GKtfBIe77og::dXsgEx0oTcSxf90KrzF9PA` |

### FormSubmissionPdfExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create PDF Exports for Form Submission(s) | POST | `/api/form/submission/pdf/` | `conn_mod_def::GKtfBM5ef0A::q91ywiBDTz-2Bm7cSk27XQ` |

### ApiConnectorResponseErrors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recent API Connector Response Errors for a Form | GET | `/api/logs/api-connector/{{formId}}/` | `conn_mod_def::GKtfBV8BnKg::zwvCTMz0QsGFwBTFjk4dsw` |

### EmailDeliveryIssues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Delivery Issues | GET | `/api/logs/email/issues/` | `conn_mod_def::GKtfBV8Hs0A::a9cN7PF6Q_G6i0aZp6Io6Q` |

### EmailLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Form's Recent Email Logs | GET | `/api/logs/email/form/{{formId}}/` | `conn_mod_def::GKtfBWEBYGA::uRufc0kKTluSKHaSlYss_Q` |

### EmailForwardedLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Emails Forwarded for an AI Extraction | GET | `/api/logs/email/extraction/{{extractionId}}/` | `conn_mod_def::GKtfBXFutsg::laiTwNHaRXKC0s01xhgg3w` |

### QuikIntegrationLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recent Quik Integration Logs for a Form | GET | `/api/logs/quik/{{formId}}/` | `conn_mod_def::GKtfBXGCCBg::V1RfdZ8yQ4Gb7Uv3TuvDBA` |

### UserFormSessionData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Form Session Data | GET | `/api/user/{{userId}}/session/` | `conn_mod_def::GKtfBfawCoA::TvmDY0MGSvW45jV81ibTyg` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Submitted Fields | GET | `/api/field/` | `conn_mod_def::GKtfBf1e11g::dCTaSpM-TXe--JYhPXwwhg` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Create, Update, or Retrieve a User | POST | `/api/user/` | `conn_mod_def::GKtfBh7IALg::GaxG1pNvT1CnubxN5HJ1Pg` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspaces | GET | `/api/workspace/` | `conn_mod_def::GKtfBrfzTng::ZM3WawKqRuGxW6ouKuK0kw` |

### WorkspaceAccountLoginJwtToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Workspace Account Login JWT Token | POST | `/api/workspace/{{workspaceId}}/auth/` | `conn_mod_def::GKtfBrmoeIg::I7KpexbFT-GA75yZYkFfmw` |

### FormUsageReports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Form Usage Reports for Child Workspaces | GET | `/api/workspace/report/form/` | `conn_mod_def::GKtfB36VSDg::pcjyWDX1QIyDWHujZIB9HA` |

### WorkspaceSubmissionReports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Submission Reports | GET | `/api/workspace/report/submissions/` | `conn_mod_def::GKtfB5b3-SA::4mIQzN7uSGC2RLL5gIrJMA` |

## When a call fails

The error comes from Feathery, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/feathery

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
