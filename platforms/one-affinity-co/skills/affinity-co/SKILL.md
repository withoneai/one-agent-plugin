---
name: affinity-co
description: Affinity is a relationship intelligence CRM that automatically captures and analyzes your team's communication data to surface valuable connections, streamline deal management, and help you close more deals faster. Read and write Affinity.co data through One: interactions, notes, opportunities, organizations, persons, reminders and more, 59 actions with real parameter documentation. Use whenever the user asks to look something up in Affinity.co, create or update a record there, or build code against the Affinity.co API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: affinity-co
  generated-from: one-knowledge-base
---

# Affinity.co through One

Affinity is a relationship intelligence CRM that automatically captures and analyzes your team's communication data to surface valuable connections, streamline deal management, and help you close more deals faster.

One exposes Affinity.co through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `affinity-co` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Affinity.co is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Affinity.co account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Interactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Interaction’s Details | GET | `/interactions/{{id}}` | `conn_mod_def::GJz1eRHhJCU::VlVNmdUbRqKWsN_MyavHmw` |
| List Interactions | GET | `/interactions` | `conn_mod_def::GJz1ec9h1iU::CqMCsMJkT1-7xUpmYc1Jgg` |
| Create an Interaction | POST | `/interactions` | `conn_mod_def::GJz1d__K4YQ::LwCDazJeSdiJtNWZ7-Un1A` |
| Delete an Interaction | DELETE | `/interactions/{{id}}` | `conn_mod_def::GJz1eISiDGU::thdeGeCNTyyvxCATBruO9Q` |
| Update an Interaction | PUT | `/interactions/{{id}}` | `conn_mod_def::GJz1elRGCeI::iB9sx83OSOu0v5z0RwcFsw` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note by ID | GET | `/notes/{{noteId}}` | `conn_mod_def::GJz1f0clej0::9Ej-kkZoRSyq-xCHiphtlw` |
| List Notes | GET | `/notes` | `conn_mod_def::GJz1f8aAIjk::nfA17FK8SXKCUdxE9xY4-w` |
| Create a Note | POST | `/notes` | `conn_mod_def::GJz1fk-u9w0::1lusqzAES2Kifwpyfhsgrg` |
| Delete a Note | DELETE | `/notes/{{noteId}}` | `conn_mod_def::GJz1frwTQNg::4lYkds3RQlWMqyZ3gqn0ww` |
| Update a Note | PUT | `/notes/{{noteId}}` | `conn_mod_def::GJz1gDCZsus::CwnT8xHcQhyu2mOsYnclKQ` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity | GET | `/opportunities/{{opportunityId}}` | `conn_mod_def::GJz1gbFBI3M::teRuSHRLSXmnF3KdUH01rw` |
| List Opportunities (Search) | GET | `/opportunities` | `conn_mod_def::GJz1gmcf8gs::7GZNdVbpRia4468oWVSUOg` |
| Create an Opportunity | POST | `/opportunities` | `conn_mod_def::GJz1gKE7czc::6HK9FxAWQUi-UIHa69uOyw` |
| Delete an Opportunity | DELETE | `/opportunities/{{opportunityId}}` | `conn_mod_def::GJz1gSvDWds::gqXAL77sSAez00_VnTOUNw` |
| Update an Opportunity | PUT | `/opportunities/{{opportunityId}}` | `conn_mod_def::GJz1gtILlLE::yyp1oGyeSVGjs5fJy17KrQ` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/organizations/{{organizationId}}` | `conn_mod_def::GJz1hEdwTGA::KUT8Goj_SoibEg5w9HjqQA` |
| Search Organizations | GET | `/organizations` | `conn_mod_def::GJz1hVK1038::6FiugExtRn2qzUSOaLeVkQ` |
| Create an Organization | POST | `/organizations` | `conn_mod_def::GJz1g1rC1_o::JzyVkZljRy-dr3-QlOwFkA` |
| Delete an Organization | DELETE | `/organizations/{{organizationId}}` | `conn_mod_def::GJz1g72sBCs::I92IvkT6TaKpmzFwOWXLVw` |
| Update an Organization | PUT | `/organizations/{{organizationId}}` | `conn_mod_def::GJz1hd87ggU::gvQcf_1QSb6zs3b4L5G2Pw` |

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person | GET | `/persons/{{personId}}` | `conn_mod_def::GJz1h3aI5sc::URJytzozRsO2NIPIioF8xw` |
| Search Persons | GET | `/persons` | `conn_mod_def::GJz1iKFExT4::3yzltWkaR6aqSermtIYCVg` |
| Create a Person | POST | `/persons` | `conn_mod_def::GJz1hmUonNY::LcNxEAXBSbWsuXvhIzoBWg` |
| Delete a Person | DELETE | `/persons/{{personId}}` | `conn_mod_def::GJz1hswuz_I::JmMqUWFXRxaRUdNjeJ5DJA` |
| Update a Person | PUT | `/persons/{{personId}}` | `conn_mod_def::GJz1iQ420BA::OcdkcIg6QeOXD1_B3jnJLw` |

### Reminders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reminder by ID | GET | `/reminders/{{reminderId}}` | `conn_mod_def::GJz1i21Co0I::ewIOdB_bTnSrx-ZmpDb4Bg` |
| List Reminders | GET | `/reminders` | `conn_mod_def::GJz1jAhggbo::ihMGCjllTmuVCzDTUob2jA` |
| Create a Reminder | POST | `/reminders` | `conn_mod_def::GJz1imPz5WY::JS9WIdB-RoKpmRwWRQ58XA` |
| Delete a Reminder | DELETE | `/reminders/{{reminderId}}` | `conn_mod_def::GJz1iuoHcIY::hzyIiyscQqmru_S3aCIi1Q` |
| Update a Reminder | PUT | `/reminders/{{reminderId}}` | `conn_mod_def::GJz1jIPTUkc::f-6nuTcxQ62N2NB5fnuZYQ` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription | GET | `/webhook/{{webhookSubscriptionId}}` | `conn_mod_def::GJz1jfhS4uM::g7sOGwCdQn-DK7qxQY_7iw` |
| List Webhook Subscriptions | GET | `/webhook` | `conn_mod_def::GJz1jmRIJ34::9NQRDvHpRDSH0FkL0IKlrw` |
| Create a Webhook Subscription | POST | `/webhook/subscribe` | `conn_mod_def::GJz1jPVH0Jw::GcMSRFHCRS-D7xG7Heogbg` |
| Delete a Webhook Subscription | DELETE | `/webhook/{{webhookSubscriptionId}}` | `conn_mod_def::GJz1jWjVSeY::YqjcTBriQ5euojyP3E1XoA` |
| Update a Webhook Subscription | PUT | `/webhook/{{webhookSubscriptionId}}` | `conn_mod_def::GJz1juYl2Qs::Ih-gT3yjTBS_KlxvLZ0dow` |

### EntityFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Entity File | GET | `/entity-files/download/{{entityFileId}}` | `conn_mod_def::GJz1cWgPAIU::B2F68l4ORO2bmsf510Hn5g` |
| Get an Entity File | GET | `/entity-files/{{entityFileId}}` | `conn_mod_def::GJz1cdqSmMg::7F9vj16dSNqZDj1aHeo6Eg` |
| List Entity Files | GET | `/entity-files` | `conn_mod_def::GJz1clY9eDM::f1MX_nOdSv-r69bM5LhrYQ` |
| Upload Files to an Entity | POST | `/entity-files` | `conn_mod_def::GJz1csFKaGo::pXb2kYjqQbKYWS37VZcD3w` |

### FieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Field Values for an Entity | GET | `/field-values` | `conn_mod_def::GJz1dROkSBs::alrXYNSnQAWOTu-0ReGFGA` |
| Create a Field Value | POST | `/field-values` | `conn_mod_def::GJz1c_Ir9pc::uiQ0oCJLRQy1Hbwasxo4xA` |
| Delete a Field Value | DELETE | `/field-values/{{fieldValueId}}` | `conn_mod_def::GJz1dHnhkSc::cPf9m5UUQUuhhykl9bUdUA` |
| Update a Field Value | PUT | `/field-values/{{fieldValueId}}` | `conn_mod_def::GJz1dZ4xnvU::DkikPTnbQ2yCwtoduCZsSQ` |

### ListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List’s List Entry | GET | `/lists/{{listId}}/list-entries/{{listEntryId}}` | `conn_mod_def::GJz1e-yb3OY::gMlb2JMCQzyMZauJDQW_7Q` |
| List a List’s Entries | GET | `/lists/{{listId}}/list-entries` | `conn_mod_def::GJz1fG1Liug::AzKwQqHDRFCG9puDJwmHoQ` |
| Create a List Entry in a List | POST | `/lists/{{listId}}/list-entries` | `conn_mod_def::GJz1esKH5ys::N8cCBOyvReeNCsZiX193qg` |
| Delete a List’s List Entry | DELETE | `/lists/{{listId}}/list-entries/{{listEntryId}}` | `conn_mod_def::GJz1e1CJV-g::7z2E3fmxSVyIhixLpQSNgg` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fields | GET | `/fields` | `conn_mod_def::GJz1d3dGMW4::1avbQQ-_T46iBrywi52myA` |
| Create a Field | POST | `/fields` | `conn_mod_def::GJz1difGWPY::AZ1VByHbThCHlYRyTFA12Q` |
| Delete a Field | DELETE | `/fields/{{id}}` | `conn_mod_def::GJz1dqfuQTo::W4SFecZ6TBKY9YSdPcKIpA` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List’s Details | GET | `/lists/{{listId}}` | `conn_mod_def::GJz1fWxnFb0::lKm0UM_YQN6XaA3vDZsdvA` |
| List Lists Visible to the Authenticated User | GET | `/lists` | `conn_mod_def::GJz1fd4fQuE::HmslnCIpSke7QjmkK1Gb-w` |
| Create a List | POST | `/lists` | `conn_mod_def::GJz1fNcw6qc::1Uz4504MQ0y29HWcbodIaw` |

### FieldValueChanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Field Value Changes for a Field | GET | `/field-value-changes` | `conn_mod_def::GJz1c2t42PA::P5_K5LT6SRy1S3ziGkk_QQ` |

### OrganizationFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Global Fields | GET | `/organizations/fields` | `conn_mod_def::GJz1hLCjrZs::f2sfxhNRTEyymjT06px_NA` |

### PersonFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Person Global Fields | GET | `/persons/fields` | `conn_mod_def::GJz1h_qW2nw::pRwS_ltQQb-0qzafQ-8C-Q` |

### RateLimit

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rate Limit Information | GET | `/rate-limit` | `conn_mod_def::GJz1iXWt9sI::UxCuR777SFeJiHNdoR2aGQ` |

### RelationshipStrengths

| Action | Method | Path | Action id |
|---|---|---|---|
| List Relationship Strengths | GET | `/relationships-strengths` | `conn_mod_def::GJz1ifateo4::sbH9QlW7Rg62oHBPSJc-Vg` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User and Tenant Info (Who Am I) | GET | `/auth/whoami` | `conn_mod_def::GJz1j3oDDnk::UIAsmX0RSfWl45j32vkxDA` |

## When a call fails

The error comes from Affinity.co, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/affinity-co

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
