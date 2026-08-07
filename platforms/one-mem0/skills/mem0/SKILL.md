---
name: mem0
description: Mem0 is a memory layer for AI applications that enables developers to store, retrieve, and personalize long-term context across conversations and workflows, allowing agents and copilots to maintain user preferences, facts, and history through APIs and developer tooling. Read and write Mem0 data through One: memories, projects, organizationmembers, organizations, projectmembers, entities and more, 52 actions with real parameter documentation. Use whenever the user asks to look something up in Mem0, create or update a record there, or build code against the Mem0 API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mem0
  generated-from: one-knowledge-base
---

# Mem0 through One

Mem0 is a memory layer for AI applications that enables developers to store, retrieve, and personalize long-term context across conversations and workflows, allowing agents and copilots to maintain user preferences, facts, and history through APIs and developer tooling.

One exposes Mem0 through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mem0` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mem0 is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mem0 account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Memories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Memory | GET | `/v1/memories/{{memoryId}}/` | `conn_mod_def::GLf3jyEh8Og::EkTHjGyCQMqylsiXCxYc5w` |
| Get Memories for an Entity | GET | `/v1/memories/{{entityType}}/{{entityId}}/` | `conn_mod_def::GLf3jkoZxOA::o6GRCzbnRhKzUK2hXfAs8g` |
| List Memories | GET | `/v1/memories/` | `conn_mod_def::GLf3j1EErzA::pskOPsuyT7ikayY6EiURhg` |
| Add Memories | POST | `/v1/memories/` | `conn_mod_def::GLf3jqTTQ3A::4_RvbsxWTC2lmTq806XoTg` |
| Add Memories Using V3 | POST | `/v3/memories/add/` | `conn_mod_def::GLf3jcPf7BA::buQ8MGcJSkmq2-l4izC3_A` |
| Batch Delete Memories | DELETE | `/v1/batch/` | `conn_mod_def::GLf3jb5mMFA::cKOKUi4jRK-Y1rlF69HDxA` |
| Batch Update Memories | PUT | `/v1/batch/` | `conn_mod_def::GLf3jb53Szg::huEr-XXLRTiqNEU7hx4aeg` |
| Delete a Memory | DELETE | `/v1/memories/{{memoryId}}/` | `conn_mod_def::GLf3jjWyxvA::q-zkd1iaTN6bgBGmyx2iNw` |
| Delete All Memories | DELETE | `/v1/memories/` | `conn_mod_def::GLf3jlwCZPA::tCZP_kSBSoath2wkjoRxUg` |
| List Memories | POST | `/v2/memories/` | `conn_mod_def::GLf3jyHmsBg::OGFExo8QQvK9AktEiL3EmA` |
| List Memories Using V3 | POST | `/v3/memories/` | `conn_mod_def::GLf3jcOcT3g::oZrgj3q6Twml0JUYGXs8Bw` |
| Search Memories | POST | `/v1/memories/search/` | `conn_mod_def::GLf3jzBXtZg::vO1JBmm1Qxa2aM-I2wpOAg` |

3 more Memories actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Details for an Organization | GET | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/` | `conn_mod_def::GLf3koIc5JA::mq-dQY9qQO2X6Ac_g3tmsQ` |
| List an Organization's Projects | GET | `/api/v1/orgs/organizations/{{orgId}}/projects/` | `conn_mod_def::GLf3klAQfAA::Qlv-Ie_nTUmhfAq6vXgLvw` |
| Create Project for an Organization | POST | `/api/v1/orgs/organizations/{{orgId}}/projects/` | `conn_mod_def::GLf3kWG9qng::4NkpZ7GtSzqE8gQuNhHNWQ` |
| Delete a Project in an Organization | DELETE | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/` | `conn_mod_def::GLf3kWmO2yg::-j4OIEpTRr-z2mLZN1H7JQ` |
| Update a Project | PATCH | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/` | `conn_mod_def::GLf3kkigoUg::tvIn9E_pTVm0G4XZfe1ARA` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Members | GET | `/api/v1/orgs/organizations/{{orgId}}/members/` | `conn_mod_def::GLf3kGmRWQg::s97sLbjLS3CvJkzfIW4k0A` |
| Add Organization Member | POST | `/api/v1/orgs/organizations/{{orgId}}/members/` | `conn_mod_def::GLf3j8kPoEg::lT9kFjbBTGSwJQnoI4DXZw` |
| Remove a Member from an Organization | DELETE | `/api/v1/orgs/organizations/{{orgId}}/members/` | `conn_mod_def::GLf3kHIkELA::nipWxj_8QsOIPjuG_aD_hA` |
| Update an Organization Member Role | PUT | `/api/v1/orgs/organizations/{{orgId}}/members/` | `conn_mod_def::GLf3kVohNcg::-Jv3p_JyRXW051WRy5VIKg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/api/v1/orgs/organizations/{{orgId}}/` | `conn_mod_def::GLf3kOFetIA::F3wx4CxAQ9y69Uv_hCFZfg` |
| List Organizations | GET | `/api/v1/orgs/organizations/` | `conn_mod_def::GLf3kGnFcPg::vszxWEVOQ5e2Z28XmkBV3w` |
| Create Organization | POST | `/api/v1/orgs/organizations/` | `conn_mod_def::GLf3j_UdmHA::A4YQ678DTtOCp0dq-jthzg` |
| Delete an Organization | DELETE | `/api/v1/orgs/organizations/{{orgId}}/` | `conn_mod_def::GLf3kG1CJDg::oSPzZ0ofRXWHlkKLG95dGA` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Members for an Organization Project | GET | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/members/` | `conn_mod_def::GLf3kkn4PiA::rUq3DKWCQiCv7bVyXoauxw` |
| Add Member to a Project | POST | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/members/` | `conn_mod_def::GLf3kdE9x3A::3AeWFxMHSnKPnXV_PYtKYA` |
| Delete Project Member | DELETE | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/members/` | `conn_mod_def::GLf3kVdZ4Dg::3NQkdco7QoaEoZ7eiO9z9A` |
| Update Project Member Role for an Organization Project | PUT | `/api/v1/orgs/organizations/{{orgId}}/projects/{{projectId}}/members/` | `conn_mod_def::GLf3klfcScg::f59S8XJSThKjjzS8h9Uu2Q` |

### Entities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Entities | GET | `/entities/` | `conn_mod_def::GLf3jI7V-DA::bk7M5y_NQ1aKscLY18pRaw` |
| Read an Entity | GET | `/v2/entities/{{entityType}}/{{entityId}}/` | `conn_mod_def::GLf3jRroF-A::t7SonPdrT2mTjE2FaheOkA` |
| Delete an Entity | DELETE | `/v2/entities/{{entityType}}/{{entityId}}/` | `conn_mod_def::GLf3jJukdSg::nY2J7_G3QfegD7tHVhta0A` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Webhook for a Project | POST | `/api/v1/webhooks/projects/{{projectId}}/` | `conn_mod_def::GLf3kxwzEzg::zSlOEHCkSbG7fL-YLgSQTA` |
| Delete Webhook | DELETE | `/api/v1/webhooks/{{webhookId}}/` | `conn_mod_def::GLf3kvotNKg::A_Dbb_mKQr6qc5NoKpX5fA` |
| Update a Webhook | PUT | `/api/v1/webhooks/{{webhookId}}/` | `conn_mod_def::GLf3k5vv3ZA::J3AuMxp7RUiBBY_SFVEEng` |

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Export Job | POST | `/v1/exports/` | `conn_mod_def::GLf3jSpAf8A::de19xPk7QWWRX-n52G1Qyw` |
| Get an Export Using Exports Get | POST | `/v1/exports/get` | `conn_mod_def::GLf3jTy8yJg::81bkAc87SieL6iJm5PhymA` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Agent | POST | `/agents/` | `conn_mod_def::GLf3jItTXTg::f43CBTJ7SIyCHuAmifDYxA` |

### EntityFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Entity Filters | GET | `/entities/filters/` | `conn_mod_def::GLf3jIuWnBA::_HyXj5WuT0KWP8i0r-yGng` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an App | POST | `/v1/apps/` | `conn_mod_def::GLf3jJukVeg::CnuH0qonQmS760nIuP5pBQ` |

### Event

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Event by ID | GET | `/v1/event/{{eventId}}/` | `conn_mod_def::GLf3jRhqlMA::Q42oh8hGSEu6EM0q91ab5Q` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/v1/events/` | `conn_mod_def::GLf3jSa6-rA::ow-Mk73DRvCNBLK1DpnZOg` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Feedback | POST | `/v1/feedback/` | `conn_mod_def::GLf3jb45mkA::IrWYUtEWTeq7traaJwdlCQ` |

### MemoryEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Memory Events | GET | `/memories/events/` | `conn_mod_def::GLf3jjW9Kxg::E_Jo1wgAT9mVsKuFw10RZg` |

### MemoryHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Memory History | GET | `/v1/memories/{{memoryId}}/history/` | `conn_mod_def::GLf3jymatAg::D_sr2QyRS1SXupBwcxLsQw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a User | POST | `/users/` | `conn_mod_def::GLf3kvDj9nA::nAIVKzxvTRWEhU5vZPivdw` |

### Statistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Statistics | GET | `/v1/stats/` | `conn_mod_def::GLf3kvQJrCg::Um07-ZeZTdWWZBwQGrEURA` |

### Runs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Agent Run | POST | `/v1/runs/` | `conn_mod_def::GLf3kvWAhRg::Rne7sEZFTfCDNeZWzPPsAQ` |

### ProjectWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Webhooks | GET | `/api/v1/webhooks/projects/{{projectId}}/` | `conn_mod_def::GLf3k5vy2zA::kiBjL8mfTJeE5XnOpfObmQ` |

This lists 49 of 52 actions. For anything not here, call `search_one_platform_actions` with platform `mem0`. The full catalog is at https://www.withone.ai/knowledge/mem0.

## When a call fails

The error comes from Mem0, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mem0

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
