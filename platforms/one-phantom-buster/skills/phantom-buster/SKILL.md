---
name: phantom-buster
description: PhantomBuster is a cloud‑based automation platform featuring prebuilt “Phantoms” and visual “Workflows” that extract leads and automate engagement on social platforms like LinkedIn, Instagram, Twitter, Reddit, and more—empowering teams to build multistage outreach campaigns and web-scrape data without coding. Read and write PhantomBuster data through One: agents, scripts, orgs, containers, orgstoragelists, orgstorageleads and more, 63 actions with real parameter documentation. Use whenever the user asks to look something up in PhantomBuster, create or update a record there, or build code against the PhantomBuster API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: phantom-buster
  generated-from: one-knowledge-base
---

# PhantomBuster through One

PhantomBuster is a cloud‑based automation platform featuring prebuilt “Phantoms” and visual “Workflows” that extract leads and automate engagement on social platforms like LinkedIn, Instagram, Twitter, Reddit, and more—empowering teams to build multistage outreach campaigns and web-scrape data without coding.

One exposes PhantomBuster through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `phantom-buster` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PhantomBuster is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PhantomBuster account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Agent by ID | GET | `/api/v2/agents/fetch` | `conn_mod_def::GJ6C8zS4FY8::PdsLpCkKRBykm2bE-yarIA` |
| Fetch an Agent’s Most Recent Output | GET | `/api/v2/agents/fetch-output` | `conn_mod_def::GJ6C8vV16T8::roha8cZwR8-qzDjcL8jWGg` |
| List an Organization’s Agents (Fetch All) | GET | `/api/v2/agents/fetch-all` | `conn_mod_def::GJ6C8vsaK5s::QqbiWRYCQPGtuiWbVZbaTw` |
| List Deleted Agents in the Current Organization | GET | `/api/v2/agents/fetch-deleted` | `conn_mod_def::GJ6C8tG0374::cJBZS_-aTRS6FT-pfnEMzw` |
| Create or Update an Agent | POST | `/api/v2/agents/save` | `conn_mod_def::GJ6C9AZEnqA::2K2PBq05Q5W4uXm5q4LhbQ` |
| Delete an Agent | POST | `/api/v2/agents/delete` | `conn_mod_def::GJ6C8tYJnh4::drrHfLRHTuStpUBcK3aeUw` |
| Launch an Agent | POST | `/api/v2/agents/launch` | `conn_mod_def::GJ6C86uJD_w::CmqNmQLQQKWXy8VfERa8Pw` |
| Launch an Agent Synchronously (Stream NDJSON Logs) | POST | `/api/v2/agents/launch-sync` | `conn_mod_def::GJ6C878NHEA::flj-9O45QFCoz7c-HCYDHw` |
| Schedule an Agent to Launch Soon | POST | `/api/v2/agents/launch-soon` | `conn_mod_def::GJ6C86-ogb8::G_ZsuOw9T7SZOYcryjwDvw` |
| Stop an Agent | POST | `/api/v2/agents/stop` | `conn_mod_def::GJ6C86-I89E::QpOcZxYqROacQw7X7lx7Tw` |
| Unschedule All Agents for the Current Organization | POST | `/api/v2/agents/unschedule-all` | `conn_mod_def::GJ6C9IWe6Lk::tPviGsYiRDOtxWEJ9utc0w` |

### Scripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Script | GET | `/api/v2/scripts/fetch` | `conn_mod_def::GJ6C-9QU5PE::WcOTK0YNTSi_RFpqXWg1ew` |
| Get a Script’s Code | GET | `/api/v2/scripts/code` | `conn_mod_def::GJ6C_DWH7wY::6VNA-fEYRkyObeAqSg5KOw` |
| List the Current User’s Scripts | GET | `/api/v2/scripts/fetch-all` | `conn_mod_def::GJ6C-94rXAI::MG_PwuSmSW247EfbAey5LQ` |
| Create or Update a Script | POST | `/api/v2/scripts/save` | `conn_mod_def::GJ6C_MRs8MQ::rqMjgP6HQTCzElTfdFbakg` |
| Delete a Script | POST | `/api/v2/scripts/delete` | `conn_mod_def::GJ6C_KoFzKc::ADPo3FwrS8ihKuQHvgytHA` |
| Update a Script Branch Access List | POST | `/api/v2/scripts/access-list` | `conn_mod_def::GJ6C-7moPrw::UrRou6EDQiGC2ts8Zr7hqQ` |
| Update a Script Branch’s Visibility | POST | `/api/v2/scripts/visibility` | `conn_mod_def::GJ6C_MGYuFU::tUbDDwhpQ5K1UxtHI_pCwA` |

### Orgs

| Action | Method | Path | Action id |
|---|---|---|---|
| Export an Organization’s Container Usage (CSV) | GET | `/api/v2/orgs/export-container-usage` | `conn_mod_def::GJ6C-gHpkTc::ZFvMXW8mQ5GuDj-eSjZ40A` |
| Fetch an Organization’s CRM Access | GET | `/api/v2/orgs/fetch-crm-access` | `conn_mod_def::GJ6C-zZubxQ::bkFAwr19TCOuzv4hOe84Ow` |
| Get an Organization’s CRM Requested Resources | GET | `/api/v2/orgs/fetch-crm-resources` | `conn_mod_def::GJ6C-0Ecfyo::SXYbkDyOQlW8nnVGKg1KZA` |
| List an Organization’s Running Containers | GET | `/api/v2/orgs/fetch-running-containers` | `conn_mod_def::GJ6C-vutr7c::Ib5W6jUURg2CZldSUJPWvg` |
| Save a CRM Contact for an Organization | POST | `/api/v2/orgs/save-crm-contact` | `conn_mod_def::GJ6C-76Vs3Y::lLungRmtTHe2jMwWv1SlQw` |
| Update an Organization’s Agent Groups | POST | `/api/v2/orgs/save-agent-groups` | `conn_mod_def::GJ6C-w-WO-A::vXOWDIjaQES219-Uu1Y1YQ` |

### Containers

| Action | Method | Path | Action id |
|---|---|---|---|
| Attach to a Container (Stream Output) | GET | `/api/v2/containers/attach` | `conn_mod_def::GJ6C9hR53l4::eNM1m9F9RwSDp-iJtoRvGA` |
| Fetch a Container by ID | GET | `/api/v2/containers/fetch` | `conn_mod_def::GJ6C9ry59cw::czXhp0IeSSmz151Ysmsmcw` |
| Get a Container’s Output | GET | `/api/v2/containers/fetch-output` | `conn_mod_def::GJ6C9zpztWo::B_5Bzy2cQPaZ016JuZwyfw` |
| Get a Container’s Result Object | GET | `/api/v2/containers/fetch-result-object` | `conn_mod_def::GJ6C91Wbmx0::QeP-RPgXQNqdrPowWUBLrQ` |
| List an Agent's Containers | GET | `/api/v2/containers/fetch-all` | `conn_mod_def::GJ6C9e4V4hg::y_3O1-ZGRuGjNLU4RTdsyw` |

### OrgStorageLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Org Storage List | GET | `/api/v2/org-storage/lists/fetch` | `conn_mod_def::GJ6C9-gy6mY::v-XAJghvQjqh859EvOAiNQ` |
| List All Org Storage Lists | GET | `/api/v2/org-storage/lists/fetch-all` | `conn_mod_def::GJ6C9_Dduis::mTk3uq9fQ4-QdRPMmSpf9A` |
| Delete an Org Storage List | POST | `/api/v2/org-storage/lists/delete` | `conn_mod_def::GJ6C-SS9soA::xq_e1S27QdCS4jii_jCQMg` |
| Save an Org Storage List (Beta) | POST | `/api/v2/org-storage/lists/save` | `conn_mod_def::GJ6C-a_FfYs::xIWRBAv1Sgyte9v-j4EHag` |

### OrgStorageLeads

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Many Org Storage Leads | POST | `/api/v2/org-storage/leads/delete-many` | `conn_mod_def::GJ6C-JoZOt4::qnxdtFXOSzukrWcCOGndDw` |
| Fetch Leads by List ID (Org Storage) | POST | `/org-storage/leads/by-list/{{listId}}` | `conn_mod_def::GJ6C-HInF9E::mLTq899OSpCtxYOSBsEO3Q` |
| Save an Org Storage Lead | POST | `/api/v2/org-storage/leads/save` | `conn_mod_def::GJ6C-T-pj0E::6lGjYl5XSe2Tsjn6qWw5Dw` |
| Save Many Leads to Org Storage (Beta) | POST | `/api/v2/org-storage/leads/save-many` | `conn_mod_def::GJ6C-SWsKdc::6o-RPzBdSVeS87y93GUFIA` |

### Branches

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Branches | GET | `/api/v2/branches/fetch-all` | `conn_mod_def::GJ6C9VyaQfg::Qd3BFFiGQnGQwVTkJhCuaQ` |
| Create a Branch | POST | `/api/v2/branches/create` | `conn_mod_def::GJ6C9VtLuY4::N5aVKKvtSTaV_LeeBIh-Og` |
| Delete a Branch | POST | `/api/v2/branches/delete` | `conn_mod_def::GJ6C9VLbMZw::gcq33EljSwKiHadAuPbKOw` |
| Release a Script Branch | POST | `/api/v2/branches/release` | `conn_mod_def::GJ6C9V0OTyo::uzxHrAXaT5mJs3kkp5F71A` |

### OrgStorageLeadsObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Leads Objects from Organization Storage | POST | `/api/v2/org-storage/leads-objects/delete` | `conn_mod_def::GJ6C-HsGp8I::43xJlh6bSD-rnauTodYmWQ` |
| Save an Organization Storage Lead Object | POST | `/api/v2/org-storage/leads-objects/save` | `conn_mod_def::GJ6C-HFU5NU::2Za_BJiTRSibKnct1nzPaw` |
| Search an Organization’s Leads Objects | POST | `/org-storage/leads-objects/search` | `conn_mod_def::GJ6C-SLot5E::yOvf8-NlQrW6gmIEslRWDw` |

### OrgStorageCompanyObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Save an Org Storage Company Object | POST | `/api/v2/org-storage/companies-objects/save` | `conn_mod_def::GJ6C9-j7PGQ::l2CXrRaSSSugjPH42DcQ6Q` |
| Save Many Organization Storage Company Objects | POST | `/api/v2/org-storage/companies-objects/save-many` | `conn_mod_def::GJ6C9-UrQmo::PMacxdFYSymfzMEDI706aQ` |

### Identities

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate an Identity Token | POST | `/api/v2/identities/generate-token` | `conn_mod_def::GJ6C9zMKQeE::uqRUSieuQ4Wj3I4Ebe0Jiw` |
| Save an Identity with Token | POST | `/api/v2/identities/save-with-token` | `conn_mod_def::GJ6C92m_v3I::oDbpFFTCREa1P35yuRSHZQ` |

### AiCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an AI Completion | POST | `/api/v2/ai/completions` | `conn_mod_def::GJ6C9HSPKII::uEeBRVPyS1qowrWdI75qAw` |

### Location

| Action | Method | Path | Action id |
|---|---|---|---|
| Get IP Address Country | GET | `/api/v2/location/ip` | `conn_mod_def::GJ6C99wAyn8::MQEh0WRZQEa0MWwEH2YzCw` |

### OrgStorageLeadObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Save Many Lead Objects (Org Storage) | POST | `/api/v2/org-storage/leads-objects/save-many` | `conn_mod_def::GJ6C-R4tsoM::wBJmqr7VTX2zvbSDd-kj3g` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Organization | GET | `/api/v2/orgs/fetch` | `conn_mod_def::GJ6C-oIxrXI::c2o3NlGiTUucKXGr6MiGEg` |

### OrganizationResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Resources and Usage | GET | `/api/v2/orgs/fetch-resources` | `conn_mod_def::GJ6C-ziVL7g::q7pqsKJhSKScp6CZ41WSzw` |

### AiAdvice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Advice (Recommendation) | POST | `/api/v2/ai/advice` | `conn_mod_def::GJ6C9He9n1o::OBmxh0uRSBuW2EtTdN_o1A` |

### Recaptcha

| Action | Method | Path | Action id |
|---|---|---|---|
| Solve a reCAPTCHA Challenge | POST | `/api/v2/recaptcha` | `conn_mod_def::GJ6C9hZKt3M::tPHDtReJQeqR3p-DAtM3CA` |

### OrgStorageCompaniesObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Organization Storage Company Objects | POST | `/api/v2/org-storage/companies-objects/search` | `conn_mod_def::GJ6C-KLh30g::GYMP-1rDToCX4tIGKqmQYA` |

### BrightDataSerp

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a Bright Data SERP Search | GET | `/api/v2/brightdata/serp` | `conn_mod_def::GJ6C9VNg2lM::lGiO-nRmRXujeUvzS_b1Yg` |

### OrgAgentUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Export an Organization’s Agent Usage (CSV) | GET | `/api/v2/orgs/export-agent-usage` | `conn_mod_def::GJ6C-bvxdUs::-NuZN6i0ThmM2FscABTeeQ` |

### AgentGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Agent Groups (Current User) | GET | `/api/v2/orgs/fetch-agent-groups` | `conn_mod_def::GJ6C-fHETG0::Ysi-ipHAQHOoxkQkW_ZOhQ` |

### Hcaptcha

| Action | Method | Path | Action id |
|---|---|---|---|
| Solve an hCaptcha Challenge | POST | `/api/v2/hcaptcha` | `conn_mod_def::GJ6C9jOdqX4::8bluvEl1Td2vEZV2NruKVg` |

### IdentityEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Save an Identity Event | POST | `/api/v2/identities/events/save` | `conn_mod_def::GJ6C9zkvITM::bqBgb1AhSxuPHshUhBJfww` |

### AiTasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Run an AI Task | POST | `/api/v2/ai/tasks` | `conn_mod_def::GJ6C9HTKyO8::_ffvhoZkR7KEI3_aOFhO5g` |

### BranchDiffs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Script Branch Diff Lengths (Staging vs Release) | GET | `/api/v2/branches/diff` | `conn_mod_def::GJ6C9NvBvHo::UkCEY894Rt6C-qJYsovNWg` |

## When a call fails

The error comes from PhantomBuster, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/phantom-buster

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
