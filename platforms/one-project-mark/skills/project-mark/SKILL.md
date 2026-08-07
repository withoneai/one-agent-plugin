---
name: project-mark
description: Read and write project-mark data through One: companyprojects, companiesinvolved, opportunities, workforceteams, contacts, workforceteammembers and more, 66 actions with real parameter documentation. Use whenever the user asks to look something up in project-mark, create or update a record there, or build code against the project-mark API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: project-mark
  generated-from: one-knowledge-base
---

# project-mark through One

One exposes project-mark through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `project-mark` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm project-mark is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real project-mark account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CompanyProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Project by ID | GET | `/api/v2/crm/company-projects/{{id}}` | `conn_mod_def::GLnZcn4L54M::21w_vLUEQA2z87RWoMHA7g` |
| Get Company Projects | GET | `/api/v2/crm/company-projects` | `conn_mod_def::GLnZdBjH8UU::N3hcGugrRA2xmAWo0Q7a_Q` |
| Add Company Involved to a Company Project | POST | `/api/v2/crm/company-projects/{{companyProjectId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZcV-O-4w::dUf6f_6pS5WW1s70FXbCpA` |
| Create Company Projects | POST | `/api/v2/crm/company-projects` | `conn_mod_def::GLnZceAAEZw::YH-HO5Z0RRaAvh62vNgoIQ` |
| Delete a Company Involved from a Company Project | DELETE | `/api/v2/crm/company-projects/{{companyProjectId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZcfM28jo::9pVfC7AaQZ2JVzhJbIkW2g` |
| Delete a Company Project | DELETE | `/api/v2/crm/company-projects/{{id}}` | `conn_mod_def::GLnZcfczZr0::QxNdcp9vSviXkkrxTQzEvA` |
| Delete a Contact from a Company Project | DELETE | `/api/v2/crm/company-projects/{{companyProjectId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZcmHHoM8::I46y6IpCStGEzFYNhoI38g` |
| Delete a Workforce Team for a Company Project | DELETE | `/api/v2/crm/company-projects/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZc1QQRAM::iRcFNIrWReqPMNRTnpeDlw` |
| Update a Company Project | PUT | `/api/v2/crm/company-projects/{{id}}` | `conn_mod_def::GLnZc8l2hJc::81wHT7zpTvCrVy5KS1Z33Q` |

### CompaniesInvolved

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Involved | GET | `/api/v2/crm/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZcO9NQBQ::Cw520GJPQO6nc0JlwGFxEA` |
| List Companies Involved | GET | `/api/v2/crm/companies-involved` | `conn_mod_def::GLnZcWVPcfA::ahpPVJdjTH2QtyfPUe_Lxg` |
| Add Company Involved to an Opportunity | POST | `/api/v2/crm/opportunities/{{opportunityId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZd6Zs0Pk::H89WQ9iMQ96EuK5S9a8wxQ` |
| Create Company Involved | POST | `/api/v2/crm/companies-involved` | `conn_mod_def::GLnZcOSPw34::H07I__1iS1CniQsS63MtNA` |
| Delete a Company Involved | DELETE | `/api/v2/crm/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZcMamRpA::pjCNsCZ1SLuEji89CUaOGA` |
| Delete a Company Involved from an Opportunity | DELETE | `/api/v2/crm/opportunities/{{opportunityId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZe7CetIc::oyov0ieeQoOwIkKl7rsMrA` |
| Update a Company Involved by ID | PUT | `/api/v2/crm/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZcWcovDw::Q0igwFVdTeOysJaK7Tn53Q` |
| Update a Company's Involvement in an Opportunity | PUT | `/api/v2/crm/opportunities/{{opportunityId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZfZe_pHg::c-DxbUhuRmyPbVlbAU-5ng` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Opportunity by ID | GET | `/api/v2/crm/opportunities/{{id}}` | `conn_mod_def::GLnZfbkmbQ4::eF1Oi4j6TW--vbMLimkAqQ` |
| List Company Opportunities | GET | `/api/v2/crm/opportunities` | `conn_mod_def::GLnZfB2vB8k::53-atDAvS56NftjtmFc_wQ` |
| Add a Contact to an Opportunity | POST | `/api/v2/crm/opportunities/{{opportunityId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZd62kl2c::CIYTrpzESKG8zPtVin0qsg` |
| Create Opportunity | POST | `/api/v2/crm/opportunities` | `conn_mod_def::GLnZe52ZgPQ::3hdMrZDvRD2pyL3jsG82Yw` |
| Delete a Company Opportunity | DELETE | `/api/v2/crm/opportunities/{{id}}` | `conn_mod_def::GLnZfS3DnCQ::eXWLzEmjSEGQptJ8fikwlg` |
| Delete a Workforce Team for an Opportunity | DELETE | `/api/v2/crm/opportunities/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZe67TntY::MgdT4h1hSmas5FkQ_zlJZw` |
| Update a Company Opportunity | PUT | `/api/v2/crm/opportunities/{{id}}` | `conn_mod_def::GLnZfjQLgBM::dpPvo-k9RmuzXlNHgR6Tww` |

### WorkforceTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workforce Team in an Opportunity by ID | GET | `/api/v2/crm/opportunities/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZfEAq7Ds::MQWba9xWT0GuvSYUW35IFg` |
| Get Workforce Teams for a Company Project | GET | `/api/v2/crm/company-projects/{{id}}/workforces` | `conn_mod_def::GLnZc8hZo44::W9JUmg9FQs2xNCbnCbgWEw` |
| List Workforce Teams for an Opportunity | GET | `/api/v2/crm/opportunities/{{id}}/workforces` | `conn_mod_def::GLnZfYwrgs8::BIq5IriIQ72Lxv0ny55zyw` |
| Create Workforce Teams for an Opportunity | POST | `/api/v2/crm/opportunities/{{id}}/workforces` | `conn_mod_def::GLnZevXAKAA::JwmPVgZOTfCJXsbWOgyh3A` |
| Update a Workforce Team for a Company Project | PUT | `/api/v2/crm/company-projects/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZdlQub9k::NKzx7qEtTSKWFZRSd2kalA` |
| Update a Workforce Team for an Opportunity | PUT | `/api/v2/crm/opportunities/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZfZXWzyY::uoGDamjCSrGmwuwTfus1OQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contact Using CRM Contacts | GET | `/api/v2/crm/contacts/{{id}}` | `conn_mod_def::GLnZdyJtP-Y::0VvfuV1OSf-QQxkX4taPDA` |
| List Company Account Contacts | GET | `/api/v2/crm/contacts` | `conn_mod_def::GLnZdz6U2yg::60BaINL4Q2u8JUlJFedaoQ` |
| Add a Company Involved to a Contact | PUT | `/api/v2/crm/contacts/{{id}}/company-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZdk0kNJE::cYUlMDH4TfOfds1AAbL6gg` |
| Delete a Contact | DELETE | `/api/v2/crm/contacts/{{id}}` | `conn_mod_def::GLnZdyQAg38::z8QSTqomR9GO9IyI3tZpGA` |
| Remove Company Involved from a Contact | DELETE | `/api/v2/crm/contacts/{{id}}/company-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZdyw70V4::zmFiG3KmSsu5klcG_TfhxA` |
| Update a Contact | PUT | `/api/v2/crm/contacts/{{id}}` | `conn_mod_def::GLnZeNk5Wrs::MP6vzdFES02g7GzAg8alwA` |

### WorkforceTeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workforce Team Member for an Opportunity | POST | `/api/v2/crm/opportunities/{{opportunityId}}/workforces/{{workforceTeamId}}/member` | `conn_mod_def::GLnZd6t5lKA::pSIOx2LAROGrToSmlaepSQ` |
| Create a Workforce Team Member in a Company Project Workforce Team | POST | `/api/v2/crm/company-projects/{{companyProjectId}}/workforces/{{workforceTeamId}}/member` | `conn_mod_def::GLnZcfBSvKI::WobRIPoaTiaU_gWN9obD_g` |
| Delete a Workforce Team Member from a Company Project Workforce Team | DELETE | `/api/v2/crm/company-projects/{{companyProjectId}}/workforces/{{workforceTeamId}}/member/{{id}}` | `conn_mod_def::GLnZcm7B5Ik::QLA8Qrl7R7yl95WnXU337g` |
| Delete Workforce Team Member for an Opportunity | DELETE | `/api/v2/crm/opportunities/{{opportunityId}}/workforces/{{workforceTeamId}}/member/{{id}}` | `conn_mod_def::GLnZe7H-xps::jlaOYw5uTYKqvDXGEksNPw` |
| Update a Workforce Team Member in a Company Project | PUT | `/api/v2/crm/company-projects/{{companyProjectId}}/workforces/{{workforceTeamId}}/member/{{id}}` | `conn_mod_def::GLnZdklREQM::0kpNPqTSTomoTRKvJJ01xQ` |

### Professionals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Professional | GET | `/api/v2/portfolio/professionals/{{id}}` | `conn_mod_def::GLnZfjvQfMw::EXfsYoAgStei9mLymgOjAg` |
| Create a Professional | POST | `/api/v2/portfolio/professionals` | `conn_mod_def::GLnZfinkna4::fobDMOSwS8-pfT9ipvjEWw` |
| Update a Professional | PUT | `/api/v2/portfolio/professionals/{{id}}` | `conn_mod_def::GLnZfqjtVIY::f-GMK43pRGGpIv-3Dk6U7w` |

### CompanyProjectContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Contact to a Company Project | POST | `/api/v2/crm/company-projects/{{companyProjectId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZcYM8Ygs::91BcBR7qQU-quJnmdMys9A` |
| Update a Company Project Contact | PUT | `/api/v2/crm/company-projects/{{companyProjectId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZdsESXMM::HASLql5qSguN1V4xv__J4w` |

### OpportunityContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Opportunity Contact | DELETE | `/api/v2/crm/opportunities/{{opportunityId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZe6EvvWA::T3ClxKBaT9W3tWwL7gTYzw` |
| Update an Opportunity Contact | PUT | `/api/v2/crm/opportunities/{{opportunityId}}/contacts/{{contactId}}` | `conn_mod_def::GLnZfZQn2e4::v3nsjNsWR3KiBv3DAYGm7Q` |

### PortfolioProfessionals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Portfolio Professionals | GET | `/api/v2/portfolio/professionals` | `conn_mod_def::GLnZfqZvTPU::gfzrN6boSkyaOitqwr34vg` |
| Delete a Portfolio Professional | DELETE | `/api/v2/portfolio/professionals/{{id}}` | `conn_mod_def::GLnZfkESVl0::IhfrVvraT9i98gDlNvZinA` |

### CrmWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a CRM Webhook | POST | `/api/v2/crm/webhooks` | `conn_mod_def::GLnZfslkSZU::7U1ekjoCTfOQJao5GJz-Aw` |
| Delete a CRM Webhook | DELETE | `/api/v2/crm/webhooks/{{id}}` | `conn_mod_def::GLnZfqipBaA::DA3TGqPJQfeFcPqY5_DafA` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Addresses for a CRM Entity | GET | `/api/v2/crm/{{entity}}/{{id}}/addresses` | `conn_mod_def::GLnZcO1nC4Y::5ssa9HHMQUO3rwzlw4yJbw` |

### CrmAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Addresses for a CRM Entity | PUT | `/api/v2/crm/{{entity}}/{{id}}/addresses` | `conn_mod_def::GLnZcPbS8jw::BoTWBaQ1RaurJEm4hkO_jg` |

### CrmCompaniesInvolvedCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Custom Fields for CRM Companies Involved | GET | `/api/v2/crm/companies-involved/custom-fields/all` | `conn_mod_def::GLnZcWygjuQ::K2TF5NkOTVWu2T7VhsWsuA` |

### Workforces

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Workforce Team for a Company Project | POST | `/api/v2/crm/company-projects/{{id}}/workforces` | `conn_mod_def::GLnZcf_gP10::55OLG7NsTu-9FBJrznn2Xw` |

### CompanyProjectWorkforceTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Project Workforce Team by ID | GET | `/api/v2/crm/company-projects/{{id}}/workforces/{{workforceId}}` | `conn_mod_def::GLnZcm1jNsg::JMtYUemVTHyE-RgZobPZqQ` |

### CompanyProjectsCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Custom Fields for Company Projects | GET | `/api/v2/crm/company-projects/custom-fields/all` | `conn_mod_def::GLnZc8yT-iQ::HxjHKX3lSXim2pdUznF7TQ` |

### CompanyInvolved

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Company Involved in a Company Project | PUT | `/api/v2/crm/company-projects/{{companyProjectId}}/companies-involved/{{companyInvolvedId}}` | `conn_mod_def::GLnZddsAmaA::6txWN1ZTTLKAquvIJElHGQ` |

### CrmContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create CRM Contacts | POST | `/api/v2/crm/contacts` | `conn_mod_def::GLnZdlaBB_w::EpWHXtU0S7CjXNmy2Ufo5Q` |

### ContactCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Contact Custom Fields | GET | `/api/v2/crm/contacts/custom-fields/all` | `conn_mod_def::GLnZd0B-G3E::sRoN5MN5RV2Oo562PgJLKQ` |

### CrmOpportunitiesCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Custom Fields for CRM Opportunities | GET | `/api/v2/crm/opportunities/custom-fields/all` | `conn_mod_def::GLnZfB7DxGg::5mG30GlnTQuWjPI0CBTD9Q` |

### OpportunityStages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Opportunity Stages | GET | `/api/v2/crm/stages/opportunity` | `conn_mod_def::GLnZfCCrPio::e03w5JlgRJefFNUBpmmlzQ` |

### CrmOpportunitiesWorkforcesMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Member Using CRM Opportunities Workforces | PUT | `/api/v2/crm/opportunities/{{opportunityId}}/workforces/{{workforceTeamId}}/member/{{id}}` | `conn_mod_def::GLnZfjG6WmY::VqC7ktfNQQy_JoFJ_t5InQ` |

### PortfolioProfessionalsCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Custom Fields for Portfolio Professionals | GET | `/api/v2/portfolio/professionals/custom-fields/all` | `conn_mod_def::GLnZfwBd3_I::4L-szXbEReKv1qQoVIk7zQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Webhooks | GET | `/api/v2/crm/webhooks` | `conn_mod_def::GLnZf1oPMuU::TFBEyMEAQeWN8yl9yLhL1g` |

## When a call fails

The error comes from project-mark, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/project-mark

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
