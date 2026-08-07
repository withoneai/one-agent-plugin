---
name: breezy
description: Breezy HR is an applicant tracking and recruiting platform that provides tools for sourcing candidates, managing hiring pipelines, scheduling interviews, and collaborating on evaluations, allowing recruiting teams to streamline hiring workflows and integrate candidate data with other business systems. Read and write Breezy HR data through One: candidates, positions, companywebhookendpoints, questionnaires, webhookendpoints, candidatedocuments and more, 61 actions with real parameter documentation. Use whenever the user asks to look something up in Breezy HR, create or update a record there, or build code against the Breezy HR API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: breezy
  generated-from: one-knowledge-base
---

# Breezy HR through One

Breezy HR is an applicant tracking and recruiting platform that provides tools for sourcing candidates, managing hiring pipelines, scheduling interviews, and collaborating on evaluations, allowing recruiting teams to streamline hiring workflows and integrate candidate data with other business systems.

One exposes Breezy HR through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `breezy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Breezy HR is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Breezy HR account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Candidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate for a Company Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}` | `conn_mod_def::GL4kV6UxnXA::k4Av7RyZR0meGIcOE7X6Ew` |
| List Candidates for a Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidates` | `conn_mod_def::GL4kWGxZJpg::1pCOU4E8Tx--b8JXSxR-_g` |
| Search Candidates by Email for a Company | GET | `/v3/company/{{companyId}}/candidates/search` | `conn_mod_def::GL4kWNDRePA::vp1xySSnQVGEy_WCwDUPFA` |
| Add a Candidate to a Position | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidates` | `conn_mod_def::GL4kVnOi3gA::96piPrF3Sgyu21Kq4POYbQ` |
| Move a Candidate Using Company Position Candidate | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/move` | `conn_mod_def::GL4kWM9gpvg::NTAQAd_zSaWli6KBmQCwQA` |
| Send Questionnaire to a Candidate by Email | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/send-questionnaire` | `conn_mod_def::GL4kWO4AZ4g::7EXt6LAKTkmENgGqYVerrg` |
| Set a Candidate Custom Attribute for a Company Position | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/custom-attribute` | `conn_mod_def::GL4kWW0XMcg::shb80ZNwT-SLZEgL8vXogA` |
| Update a Candidate for a Company Position | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}` | `conn_mod_def::GL4kWVuCdkg::ZzJG-D_qQHi2p2emlCW9jA` |
| Upload a Resume Candidate for a Company Position | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidates/resume` | `conn_mod_def::GL4kVqvzZtA::cPsFcDaKQdesAYOP92jjhQ` |
| Upload Resume for a Candidate in a Company Position | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/resume` | `conn_mod_def::GL4kWVx_AqA::Ihaf4ZMrTLe_qa6R2yP9Yg` |

### Positions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}` | `conn_mod_def::GL4kWymSm-g::31fDxAjXSwia0h0DLpV8-g` |
| List Positions for a Company | GET | `/v3/company/{{companyId}}/positions` | `conn_mod_def::GL4kWzAUTeA::lAmq6KMmRFqLwUH7r_h2Qw` |
| Change Position State for a Company Position | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/state` | `conn_mod_def::GL4kWrj8JSA::YBV6f213SJyNDCxy5fUESQ` |
| Create a Company Position | POST | `/v3/company/{{companyId}}/positions` | `conn_mod_def::GL4kWrKkzug::O8aH6laiRTW6tXj4iFMvTw` |
| Update a Company's Position | PUT | `/v3/company/{{companyId}}/position/{{positionId}}` | `conn_mod_def::GL4kW5ro6_g::4AH4IbWFR9emSiDOZ1ZMzA` |

### CompanyWebhookEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Webhook Endpoint | GET | `/v3/company/{{companyId}}/webhook_endpoint/{{endpointId}}` | `conn_mod_def::GL4kXBTfn7A::FVaRZ5bUQDuv4rOI6NG9lg` |
| Create a Company Webhook Endpoint | POST | `/v3/company/{{companyId}}/webhook_endpoints` | `conn_mod_def::GL4kW6NEkfg::5akzoruIScmScqLWDQtc9g` |
| Delete a Company Webhook Endpoint | DELETE | `/v3/company/{{companyId}}/webhook_endpoint/{{endpointId}}` | `conn_mod_def::GL4kXATt8Yg::RwJuYLkUSNG25dYKTG7QoA` |
| Update a Company Webhook Endpoint | PUT | `/v3/company/{{companyId}}/webhook_endpoint/{{endpointId}}` | `conn_mod_def::GL4kXJq5uMg::oTT0kDwvQkKKdpJKr5nmvg` |

### Questionnaires

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Questionnaire (by questionnaireId) | GET | `/v3/company/{{companyId}}/questionnaire/{{questionnaireId}}` | `conn_mod_def::GL4kWdFa9wA::RljQxdnZQVqIFb6OiQ9TCA` |
| List Questionnaires for a Company | GET | `/v3/company/{{companyId}}/questionnaires` | `conn_mod_def::GL4kWrJEIOg::6d1KBX-LRhihT6ZVzLggrA` |

### WebhookEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Endpoints for a Company | GET | `/v3/company/{{companyId}}/webhook_endpoints` | `conn_mod_def::GL4kXA25ssA::jc3bLk2_TJi-01LqUdAo8g` |
| Pause a Company's Webhook Endpoint | POST | `/v3/company/{{companyId}}/webhook_endpoint/{{endpointId}}/pause` | `conn_mod_def::GL4kXBM3bfA::jdZ7MHdcSzaLqbVhpb9p2g` |

### CandidateDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Candidate Documents for a Company Position Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/documents` | `conn_mod_def::GL4kWEkPaeA::-TvZiGV5TPqSzIHBXJM5Lg` |
| Attach a Document to a Candidate | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/documents` | `conn_mod_def::GL4kVxYSDuA::g2vE6lrYR1e3Z71O7aW7kg` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Pipeline | GET | `/v3/company/{{companyId}}/pipeline/{{pipelineId}}` | `conn_mod_def::GL4kWdFkMkg::AwNTSV-GQMS6SnzoLVtBkQ` |
| List a Company's Pipelines | GET | `/v3/company/{{companyId}}/pipelines` | `conn_mod_def::GL4kWlU-l0g::6C2cbTMkRgeUKhWghguW_Q` |

### CandidateConversation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Candidate Conversation Using Company Position Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/conversation` | `conn_mod_def::GL4kV-FZVZA::zcHV988oSHS8I1GIo6GFbw` |

### CandidateQuestionnaireResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Candidate Questionnaire Responses | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/questionnaires` | `conn_mod_def::GL4kWETkfRA::YDXjUJAFSSGFhhG4AeX9yA` |

### Conversation

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Message to a Candidate for a Company Position | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/conversation` | `conn_mod_def::GL4kWN1vj0g::nMygHCTdTyC71O5hrg5NNw` |

### QuestionnaireResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Questionnaire Responses for a Candidate | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/questionnaire/{{questionnaireId}}` | `conn_mod_def::GL4kWVxRU1A::EVHu3MTiTeK7BtwS_mZEsA` |

### CandidateCustomFieldValue

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Candidate Custom Field Value | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GL4kWWLYxfA::wtjngi9NTjObzNDY87dWXg` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/v3/companies` | `conn_mod_def::GL4kWck5FhA::ich67RvGScqHdJBLrQWZHA` |

### CompanyMessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Message Template | GET | `/v3/company/{{companyId}}/template/{{templateId}}` | `conn_mod_def::GL4kWcww3fg::D8R05JCgQ4WdE9JV0tB0wA` |

### WebhookEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Resume a Company's Webhook Endpoint | POST | `/v3/company/{{companyId}}/webhook_endpoint/{{endpointId}}/resume` | `conn_mod_def::GL4kXBQWBlA::0tOK5IbQT0u8opC5GLbqFw` |

### CandidateEducation

| Action | Method | Path | Action id |
|---|---|---|---|
| Add or Replace Candidate Education Entry | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/education` | `conn_mod_def::GL4kVxZrw7g::Rovls_qUTS6yIiw_pYg7rg` |

### Signin

| Action | Method | Path | Action id |
|---|---|---|---|
| Sign In | POST | `/v3/signin` | `conn_mod_def::GL4kVmCPWlA::CM6fjE20STuEygW7r8CZeQ` |

### CandidateStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Note to a Candidate Stream | POST | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/stream` | `conn_mod_def::GL4kVn5uQ7A::vKS5nY7xT0iyR-439B68zw` |

### SignOut

| Action | Method | Path | Action id |
|---|---|---|---|
| Sign Out | GET | `/v3/signout` | `conn_mod_def::GL4kVpT6ezA::rckggIycTqO8ZSF4cWi3Cg` |

### CandidateScorecard

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Candidate Scorecard Using Company Position Candidate | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/scorecard` | `conn_mod_def::GL4kVxwfY8g::RF2XTZVRRuOelS2tSqgoxQ` |

### WorkHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Work History Using Company Position Candidate | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/work-history` | `conn_mod_def::GL4kVyR-KpA::jzzmqhbIS525ayL3xfwh-A` |

### CandidateResume

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Candidate Resume | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/resume` | `conn_mod_def::GL4kVz6424A::OkloHQ_5QMuxd5U1d440dg` |

### CandidateMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Candidate Metadata for a Company Position Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/meta` | `conn_mod_def::GL4kV7u-WcA::Oc7aBM5kRni3eYmUj27hHw` |

### CandidateCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields for a Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/custom-fields` | `conn_mod_def::GL4kV77btsA::NJN4jZP0R92FRdVuQlLP1Q` |

### CandidateActivityStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Candidate Activity Stream for a Company Position Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/stream` | `conn_mod_def::GL4kV8mlXyA::exz1o53rS1SozM-q0OAcRg` |

### BackgroundChecks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Background Checks for a Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/background-checks` | `conn_mod_def::GL4kWFf1sug::-6xp9gudQT6RYAauhCi8vg` |

### AssessmentResults

| Action | Method | Path | Action id |
|---|---|---|---|
| List Assessment Results for a Candidate | GET | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/assessments` | `conn_mod_def::GL4kWGD-qBg::Lo2QjSJXTPuqzOMHHaYElg` |

### CompanyPositionCandidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Move Candidate Stage for a Company Position Candidate | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/candidate/{{candidateId}}/stage` | `conn_mod_def::GL4kWMeIgQg::EewGf2CfSsem2IMsMuMnfg` |

### Company

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/v3/company/{{companyId}}` | `conn_mod_def::GL4kWdJfyIg::bJ0pdubTT5qZUc3hv-Q9jA` |

### MessageTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Message Templates for a Company | GET | `/v3/company/{{companyId}}/templates` | `conn_mod_def::GL4kWjLuPlA::0n57ZrlyQdeMNzeybYkvZg` |

### CustomAttributeDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Attribute Definitions for a Company | GET | `/v3/company/{{companyId}}/custom-attributes/{{type}}` | `conn_mod_def::GL4kWjPkdZA::1AgUMIUcSguGphlBO7GvLw` |

### CustomFieldDefinitions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Field Definitions for a Company | GET | `/v3/company/{{companyId}}/custom-fields/{{type}}` | `conn_mod_def::GL4kWjUuuHA::lPn4VNBETJ2WKOWfaj1xOA` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Departments for a Company | GET | `/v3/company/{{companyId}}/departments` | `conn_mod_def::GL4kWjsaskg::T6A7guqFQdCjWGsS_Jo6RA` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/v3/health` | `conn_mod_def::GL4kWrkMuzg::t24MB7wUSjem22ZDSSctlw` |

### PositionCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Position Categories for a Company | GET | `/v3/company/{{companyId}}/categories` | `conn_mod_def::GL4kWsGYz6g::taMG7boVRVyyBkFIjoa6rg` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members on a Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}/team` | `conn_mod_def::GL4kWzA340A::FgPmmgVTROafaA7sfPMeUA` |

### PositionStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Position Stream for a Company Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}/stream` | `conn_mod_def::GL4kWzL3l7A::dHhD08ZsTvCS86ta3HAeIg` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Fields for a Company's Position | GET | `/v3/company/{{companyId}}/position/{{positionId}}/custom-fields` | `conn_mod_def::GL4kWz7Lzlg::NYd8VimjQj2_BwwAlFkNVQ` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User | GET | `/v3/user` | `conn_mod_def::GL4kW6BR_hg::br6nggggTWCL8tDUYosalQ` |

### PositionCustomFieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Position Custom Field Value | PUT | `/v3/company/{{companyId}}/position/{{positionId}}/custom-fields/{{customFieldId}}` | `conn_mod_def::GL4kW6CR2cA::iDA6sOajRRq0FkcFmDn0gg` |

### UserDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Details | GET | `/v3/user/details` | `conn_mod_def::GL4kW6aLydA::4dQIMn4ATn-dFW8KbgbwAg` |

## When a call fails

The error comes from Breezy HR, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/breezy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
