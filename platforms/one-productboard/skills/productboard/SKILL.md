---
name: productboard
description: Productboard is a product management platform that centralizes customer feedback, feature prioritization, and roadmap planning, enabling product teams to capture insights, align stakeholders, and integrate with development and support tools to guide product decisions and execution. Read and write Productboard data through One: entities, notes, teams, pluginintegrations, pluginintegrationconnections, webhooks and more, 57 actions with real parameter documentation. Use whenever the user asks to look something up in Productboard, create or update a record there, or build code against the Productboard API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: productboard
  generated-from: one-knowledge-base
---

# Productboard through One

Productboard is a product management platform that centralizes customer feedback, feature prioritization, and roadmap planning, enabling product teams to capture insights, align stakeholders, and integrate with development and support tools to guide product decisions and execution.

One exposes Productboard through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `productboard` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Productboard is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Productboard account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Entities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Entity | GET | `/v2/entities/{{id}}` | `conn_mod_def::GLV_PB8BkYg::AZGmU1WWQS2y1Rg_cc2Yyw` |
| List an Entity's Relationships | GET | `/v2/entities/{{id}}/relationships` | `conn_mod_def::GLV_PEuZARg::iINlCtwqRwOg8tbItseG1Q` |
| List Entities | GET | `/v2/entities` | `conn_mod_def::GLV_PFcgLRg::NNtH6ji0SHmGYmnn3g_KyA` |
| Create Entity | POST | `/v2/entities` | `conn_mod_def::GLV_O4ZGdnA::ck2Vew84TN63_V-s0deS8Q` |
| Create Relationship for an Entity | POST | `/v2/entities/{{id}}/relationships` | `conn_mod_def::GLV_O5EQeKg::NJnaP7CjS7atGD9gvKwqzw` |
| Delete Entity | DELETE | `/v2/entities/{{id}}` | `conn_mod_def::GLV_O4EdERg::AG1QaBX0SOeOzOfBjdJgdA` |
| Search Entities | POST | `/v2/entities/search` | `conn_mod_def::GLV_PQeVInA::U-jijt3qS4GZS0gvHzKodw` |
| Set Parent Relationship for an Entity | PUT | `/v2/entities/{{id}}/relationships/parent` | `conn_mod_def::GLV_PQn4cog::UWJqTVXTTC6HehTkeVdd7g` |
| Update an Entity | PATCH | `/v2/entities/{{id}}` | `conn_mod_def::GLV_PPn9v8g::1emfnNdcQR6fw_RmrSZ8eA` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Note | GET | `/v2/notes/{{id}}` | `conn_mod_def::GLV_PyILeoA::jKWehvH5Qs6l3UTl1Ueiiw` |
| List Notes | GET | `/v2/notes` | `conn_mod_def::GLV_QAxiCIg::hN3mwKovR7y8kQOVUWjJAQ` |
| List Relationships for a Note | GET | `/v2/notes/{{id}}/relationships` | `conn_mod_def::GLV_P8Wf_Tg::3sa_W6LIRXmcZ_kYa15GEw` |
| Create Note | POST | `/v2/notes` | `conn_mod_def::GLV_PnaK5Eg::aqGbcQnDTrGWT78bppBAjQ` |
| Delete a Note Relationship | DELETE | `/v2/notes/{{id}}/relationships/{{targetType}}/{{targetId}}` | `conn_mod_def::GLV_Pytu76g::he0z07zLSGiOdR-nDindUg` |
| Delete Note | DELETE | `/v2/notes/{{id}}` | `conn_mod_def::GLV_PyCaz5g::cbU2rKkGS5OAfQnaZtG0Ig` |
| Search Notes | POST | `/v2/notes/search` | `conn_mod_def::GLV_QAMO7uA::VikJ_f4aTeyZoWVFyPjQNw` |
| Set a Note's Customer Relationship | PUT | `/v2/notes/{{id}}/relationships/customer` | `conn_mod_def::GLV_P8PFUZg::t_XH-kLrSWGPQP0_POCzXQ` |
| Update a Note | PATCH | `/v2/notes/{{id}}` | `conn_mod_def::GLV_QLOQzOg::Td8iIBHRR-y2PhLp50rVWw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by ID | GET | `/v2/teams/{{id}}` | `conn_mod_def::GLV_QmhG_Ng::LVvNMYkpRrKbGNDDm031qg` |
| List Teams | GET | `/v2/teams` | `conn_mod_def::GLV_Q5r0jhA::NLOMuO4pTEepPtYwLUxYkw` |
| Create Team | POST | `/v2/teams` | `conn_mod_def::GLV_QmHww8g::abgG7yFkRnGZs7iu7mskBA` |
| Delete a Team | DELETE | `/v2/teams/{{id}}` | `conn_mod_def::GLV_QmME23g::v32GhuzPQu6-JtKTGe2kBg` |
| Search Teams | POST | `/v2/teams/search` | `conn_mod_def::GLV_Q4y9wtA::j14b-yO0RNStxn_KUW2cWQ` |
| Update a Team | PATCH | `/v2/teams/{{id}}` | `conn_mod_def::GLV_Q4OoNvg::4sUWMvtASamwkyIj-yeXZA` |

### PluginIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin Integration by ID | GET | `/v2/plugin-integrations/{{integrationId}}` | `conn_mod_def::GLV_QWlVNcg::IFKh9mhZQ_ix-5hOvzumQw` |
| List Plugin Integrations | GET | `/v2/plugin-integrations` | `conn_mod_def::GLV_QV0y6tg::v6gGpfrNRXyE8UaTyVERyg` |
| Create Plugin Integration | POST | `/v2/plugin-integrations` | `conn_mod_def::GLV_Qdv0mAg::Egb4fSE1RyaNV8FslUWLtA` |
| Delete a Plugin Integration | DELETE | `/v2/plugin-integrations/{{integrationId}}` | `conn_mod_def::GLV_QVdFbkg::kLq3UL9BRJ-qqRLv-IQ4DA` |
| Update a Plugin Integration | PATCH | `/v2/plugin-integrations/{{integrationId}}` | `conn_mod_def::GLV_QmtuWHA::Sh-aIMflRPaHK0xqcmyjTg` |

### PluginIntegrationConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin Integration Connection | GET | `/v2/plugin-integrations/{{integrationId}}/connections/{{entityId}}` | `conn_mod_def::GLV_QMRjcOg::DN_MMmQbRp230UEj3h47Kw` |
| Delete a Plugin Integration Connection | DELETE | `/v2/plugin-integrations/{{integrationId}}/connections/{{entityId}}` | `conn_mod_def::GLV_QLpPQZA::qqKnYEpKSLqdj4eVKFA-vQ` |
| Search Plugin Integration Connections for a Plugin Integration | POST | `/v2/plugin-integrations/{{integrationId}}/connections/search` | `conn_mod_def::GLV_QMR3_qA::W5O_l1O-R32JMevVBT3eaw` |
| Update a Plugin Integration Connection State | PUT | `/v2/plugin-integrations/{{integrationId}}/connections/{{entityId}}` | `conn_mod_def::GLV_QW6Ss6g::InJRuLYVRImtN3WWuy0bJg` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription by ID | GET | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GLV_REwmjfA::JeSkYKE2RlisOMotIf9DvA` |
| List Webhook Subscriptions | GET | `/v2/webhooks` | `conn_mod_def::GLV_REvoLTA::9zt--KvKT7-bSZsGn-tXpw` |
| Create Webhook Subscription Using Webhooks | POST | `/v2/webhooks` | `conn_mod_def::GLV_QxqxzsA::Vjf-a9IeQbujvCEa8i3Krw` |
| Delete a Webhook Subscription | DELETE | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GLV_Qxqr04A::h6nAIofAT8qZ7IYaZI0afg` |

### FieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Field Values for a Field | GET | `/v2/entities/fields/{{id}}/values` | `conn_mod_def::GLV_PbA9HTg::PoIjFhbcTa-BityH04vbvw` |
| Create a Field Value for a Field | POST | `/v2/entities/fields/{{id}}/values` | `conn_mod_def::GLV_PQSJYUA::8gA8n5Z4S2SgTs1mQePLdg` |
| Delete a Field Value | DELETE | `/v2/entities/fields/{{id}}/values/{{valueId}}` | `conn_mod_def::GLV_PPulyng::goMeTh3RQ8qDbQO-IIzRzg` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Member | GET | `/v2/members/{{id}}` | `conn_mod_def::GLV_PmlO6_g::rF6F7PAATzWxCPsIKaAG0g` |
| List Members | GET | `/v2/members` | `conn_mod_def::GLV_PoWfFzg::3me2z_m6Rm61050CcQ09wg` |
| Search Members | POST | `/v2/members/search` | `conn_mod_def::GLV_PpCZGoA::6lOlB2aqQCmzTMUnKbGY3g` |

### JiraIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Jira Integration by ID | GET | `/v2/jira-integrations/{{integrationId}}` | `conn_mod_def::GLV_PbbSyHg::iJKgSsiUT52KQKgZCdJU2g` |
| List Jira Integrations | GET | `/v2/jira-integrations` | `conn_mod_def::GLV_PnLe38A::kdMqhEq4QrCCG8QliQaFmQ` |

### JiraIntegrationConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Jira Integration Connection | GET | `/v2/jira-integrations/{{integrationId}}/connections/{{entityId}}` | `conn_mod_def::GLV_PbilgPA::4XfklvRmTh2qgGM95yp0iw` |
| List Jira Integration Connections for an Integration | GET | `/v2/jira-integrations/{{integrationId}}/connections` | `conn_mod_def::GLV_PcQhuEA::EZL1rKqqQVSCMo0XlmeoBA` |

### NoteConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Note Configuration | GET | `/v2/notes/configurations/{{type}}` | `conn_mod_def::GLV_PyGObsg::I4Ddp5TURayKGaINT8ZR7A` |
| List Note Configurations | GET | `/v2/notes/configurations` | `conn_mod_def::GLV_P9eDs3g::2_owH1W3Q3i4n-eYdRHr6g` |

### EntityRelationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Entity Relationship | DELETE | `/v2/entities/{{id}}/relationships/{{type}}/{{targetId}}` | `conn_mod_def::GLV_O4QUFbA::g9FE_2JQQSifL0844-3QTQ` |

### MemberActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Member Activities | GET | `/v2/analytics/member-activities` | `conn_mod_def::GLV_O5AsK1g::hjq8P9w5SACl8mv3CmBffQ` |

### EntitiesConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Configuration for an Entity Type | GET | `/v2/entities/configurations/{{type}}` | `conn_mod_def::GLV_PCmd2Lg::UgWz0Xu6SIyFkIt60I8WJw` |

### EntityConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Entity Configurations | GET | `/v2/entities/configurations` | `conn_mod_def::GLV_PFpTNPg::RaaIlPuaT0aKuPepYEvsrw` |

### FieldValue

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Field Value | PATCH | `/v2/entities/fields/{{id}}/values/{{valueId}}` | `conn_mod_def::GLV_PbZd8lA::EgsT8zr1SfKPsb9x_C1BQg` |

### NoteRelationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Note Relationship | POST | `/v2/notes/{{id}}/relationships` | `conn_mod_def::GLV_Py-ftJA::3udEq7FXSIC4v6wp-S3u-w` |

### PluginIntegrationsConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Plugin Integration's Connections | GET | `/v2/plugin-integrations/{{integrationId}}/connections` | `conn_mod_def::GLV_QMJHT3g::zItzCFipQtyplBJd9Uk3GA` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Team Members for a Team | GET | `/v2/teams/{{id}}/members` | `conn_mod_def::GLV_Qo3XE5g::CZNBEbo2SXmLuB58GzD2HQ` |

## When a call fails

The error comes from Productboard, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/productboard

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
