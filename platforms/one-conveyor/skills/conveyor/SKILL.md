---
name: conveyor
description: Conveyor is an AI-native customer trust platform that automates customer security reviews, including security questionnaires, RFP responses, trust centers, and related workflows, helping security, compliance, presales, and sales teams reduce manual work and speed customer access to security information. Read and write Conveyor data through One: interactions, questionnairequestions, folders, knowledgebasequestions, questionnaires, subprocessors and more, 46 actions with real parameter documentation. Use whenever the user asks to look something up in Conveyor, create or update a record there, or build code against the Conveyor API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: conveyor
  generated-from: one-knowledge-base
---

# Conveyor through One

Conveyor is an AI-native customer trust platform that automates customer security reviews, including security questionnaires, RFP responses, trust centers, and related workflows, helping security, compliance, presales, and sales teams reduce manual work and speed customer access to security information.

One exposes Conveyor through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `conveyor` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Conveyor is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Conveyor account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Interactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Interactions by Connection ID | GET | `/api/v2/interactions/connections/{{connectionId}}` | `conn_mod_def::GMYWd1KN4tA::_oy2tEqvQjC1Wtc35UjbDA` |
| Get Interactions by Document ID | GET | `/api/v2/interactions/documents/{{documentId}}` | `conn_mod_def::GMYWd1fOagg::0xDd1qOOTm6ee_AaZT-zLA` |
| Get Interactions for a Question | GET | `/api/v2/interactions/questions/{{questionId}}` | `conn_mod_def::GMYWd1bbbug::NWSnp_yRSGqz5xBZm_4D-w` |
| List Interactions | GET | `/api/v2/interactions` | `conn_mod_def::GMYWd5w7t7g::GVz1TW8dRvaTVCmtC9pOLA` |

### QuestionnaireQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Questionnaire Questions | GET | `/api/v2/questionnaires/questions` | `conn_mod_def::GMYWeZg3_6g::FEjR_ixjRrexRfbTgNrKYA` |
| Answer a Questionnaire Question | POST | `/api/v2/questionnaires/questions/{{id}}/answer` | `conn_mod_def::GMYWeaO8Bvg::PKKqAAAwRAOik8tSXB8V0w` |
| Bulk Update Questionnaire Questions | PATCH | `/api/v2/questionnaires/questions/bulk_update` | `conn_mod_def::GMYWeQk3U1g::Qf6f0Nq5QLys2AeTivLlQg` |
| Update a Questionnaire Question | PATCH | `/api/v2/questionnaires/questions/{{id}}` | `conn_mod_def::GMYWeRE72Kg::9XvuGm6TStWu3Io7n-jfMQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Folders | GET | `/api/v2/exchange/folders` | `conn_mod_def::GMYWdrLpgiA::9IGqzkSKSDisfbN447eacg` |
| Create a Folder | POST | `/api/v2/exchange/folders` | `conn_mod_def::GMYWd0BXJqg::IDWTwWa9TKWldUhtZw2FIA` |
| Delete a Folder | DELETE | `/api/v2/exchange/folders/{{folderId}}` | `conn_mod_def::GMYWdt-8LcA::LNrRAmPzRo6Wr3wleedexg` |

### KnowledgeBaseQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Curated Q&A | GET | `/api/v2/knowledge_base/questions` | `conn_mod_def::GMYWeA01fGA::GVcJEj8HRBK35k1cjzvbuw` |
| Create a Curated Q&A Pair in the Knowledge Base | POST | `/api/v2/knowledge_base/questions` | `conn_mod_def::GMYWeDFB6PA::Haz00u2DQ3iX08YkArWNwg` |
| Update a Curated Q&A Question | PATCH | `/api/v2/knowledge_base/questions/{{id}}` | `conn_mod_def::GMYWeZHhzmg::zYgZakWvQl64TW3tgtrMzA` |

### Questionnaires

| Action | Method | Path | Action id |
|---|---|---|---|
| List Questionnaires | GET | `/api/v2/questionnaires` | `conn_mod_def::GMYWeSMqrpA::IWdBqJCBR5qcDOhtTNPKZA` |
| Create a Questionnaire | POST | `/api/v2/questionnaires` | `conn_mod_def::GMYWeYs6ppg::WP7KeNrNRDCn6lSwc-g1fA` |
| Update a Questionnaire | PATCH | `/api/v2/questionnaires/{{questionnaireId}}` | `conn_mod_def::GMYWeQbDPkg::jAiOlxA3TV-7G00dD2mJ2Q` |

### Subprocessors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Subprocessors | GET | `/api/v2/subprocessors` | `conn_mod_def::GMYWej4FV3g::9D1O6K_4R7CsEpgWcm8S-g` |
| Create a Subprocessor | POST | `/api/v2/subprocessors` | `conn_mod_def::GMYWegyMswg::mKomY44IQPOUJDBuEv8YFA` |
| Delete a Subprocessor | DELETE | `/api/v2/subprocessors/{{subprocessorId}}` | `conn_mod_def::GMYWegDBF4A::8yEjHl_4ThObis-aXxfoZg` |

### AuthorizationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Authorization Request | GET | `/api/v2/exchange/authorization_requests/{{authorizationRequestId}}` | `conn_mod_def::GMYWdcocS2g::5CoR6ls1QG2YQN-MILKG8Q` |
| Ignore an Authorization Request | PATCH | `/api/v2/exchange/authorization_requests/{{authorizationRequestId}}` | `conn_mod_def::GMYWddlKGQg::kWp-QIoOQp-siDh1KW1Qiw` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Document | POST | `/api/v2/exchange/documents` | `conn_mod_def::GMYWdt1Bt-A::sgEy3KGOScCqEVwjQP41cQ` |
| Delete Document | DELETE | `/api/v2/exchange/documents/{{documentId}}` | `conn_mod_def::GMYWdjZewcA::p--2gbZwSxyrpzlUx3aEIA` |

### ExchangeAuthorizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchange Authorizations | GET | `/api/v2/exchange/authorizations` | `conn_mod_def::GMYWdk-f-2g::oeoZEZ7qQTmd_uSlChcUTA` |
| Update an Exchange Authorization | PATCH | `/api/v2/exchange/authorizations/{{authorizationId}}` | `conn_mod_def::GMYWdlokq4g::t_Fn-q8lTeKEePd1swlEwg` |

### ExchangeDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchange Documents | GET | `/api/v2/exchange/documents` | `conn_mod_def::GMYWdrJMX5A::q0xGGscpQ62pBGuzuES7jQ` |
| Update an Exchange Document | PATCH | `/api/v2/exchange/documents/{{documentId}}` | `conn_mod_def::GMYWduJ2YAg::b5NPuO2oQSC3Y35g7P_Twg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/api/v2/projects` | `conn_mod_def::GMYWeDFUQEA::m7eKX17lSC69Q2rQp9-2iQ` |
| Create a Project | POST | `/api/v2/projects` | `conn_mod_def::GMYWeJWZ_WA::ed0lOsgTRjKNNB56Jya3Cg` |

### QuestionnaireRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Patch a Questionnaire Request | PATCH | `/api/v2/questionnaire_requests` | `conn_mod_def::GMYWeKCZ0PA::tNUsrHz6SXeyGHYSw3b-Eg` |
| Post Questionnaire Requests | POST | `/api/v2/questionnaire_requests` | `conn_mod_def::GMYWeIi2J5A::gW2eU4F1R-iz_n6w-qV3Yg` |

### QuestionnaireExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Questionnaire Export | GET | `/api/v2/questionnaires/{{id}}/exports/{{exportId}}` | `conn_mod_def::GMYWeJOfUlg::P3Wtnn7OTG-ba8t6Uu68ow` |
| Request a Questionnaire Export | POST | `/api/v2/questionnaires/{{id}}/exports` | `conn_mod_def::GMYWeQCqa_g::NAGQTL9dRGOo2gtfOPJkKw` |

### AuthorizationRequestsQueue

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authorization Requests Queue | GET | `/api/v2/exchange/authorization_request_queue` | `conn_mod_def::GMYWdbtPRyA::iHkTPFrYRCOl8wfn7NvrGw` |

### AccessGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Access Groups | GET | `/api/v2/exchange/access_groups` | `conn_mod_def::GMYWdb1jeVA::Qwtx8HypQVeinzhoK3Hfjw` |

### ExchangeAuthorizationRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchange Authorization Requests | GET | `/api/v2/exchange/authorization_requests` | `conn_mod_def::GMYWddgA2-A::zhCD_XUQSPK9bm4HjBnurQ` |

### ExchangeConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchange Connections | GET | `/api/v2/exchange/connections` | `conn_mod_def::GMYWdj25yHA::hCDtwgWcRWy-kevtQjrayQ` |

### Authorizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Authorization | POST | `/api/v2/exchange/authorizations` | `conn_mod_def::GMYWdkkpVZA::ZXOPs8M1RqGSu76Tsy3LMQ` |

### ProductLines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Product Lines | GET | `/api/v2/product_lines` | `conn_mod_def::GMYWeAY1V1A::rNSqTLXSQXKJXeLZv8XjOg` |

### KnowledgeBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Knowledge Base | GET | `/api/v2/knowledge_base/search` | `conn_mod_def::GMYWeB6v5Zg::_TN0-FIwQ5uadJjMiJ5x3Q` |

### QuestionCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Question Categories | GET | `/api/v2/question_categories` | `conn_mod_def::GMYWeJiTHQg::HboODSytT_yP9KA4cfkzAA` |

### OneOffQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| List One-off Questions | GET | `/api/v2/oneoff_questions` | `conn_mod_def::GMYWeYebOLg::x-XzRKmnREWt-hkETyZbFA` |

### TrustCenterConversations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Trust Center Conversations | GET | `/api/v2/trust_center/conversations` | `conn_mod_def::GMYWeiqW9hA::uE3aiYhVR5yETWd-7a202g` |

### SingleQuestion

| Action | Method | Path | Action id |
|---|---|---|---|
| Ask a One-off Question | POST | `/api/v2/single_question` | `conn_mod_def::GMYWej9FKng::zJ8FuiYhRB6KH1bZMm23DA` |

### VendorSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Vendor Subscriptions | GET | `/api/v2/vendor_subscriptions` | `conn_mod_def::GMYWeqTMqrA::UxLg79s4QiuctzpPe44Xdw` |

## When a call fails

The error comes from Conveyor, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/conveyor

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
