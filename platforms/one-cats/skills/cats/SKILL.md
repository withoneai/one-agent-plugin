---
name: cats
description: CATS is a web-based applicant tracking system designed for recruiting agencies and HR teams, offering tools for job posting, resume parsing, candidate tracking, custom workflows, analytics, and integrations to streamline the hiring process. Read and write CATS data through One: candidates, contacts, companies, jobs, pipelines, tasks and more, 224 actions with real parameter documentation. Use whenever the user asks to look something up in CATS, create or update a record there, or build code against the CATS API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cats
  generated-from: one-knowledge-base
---

# CATS through One

CATS is a web-based applicant tracking system designed for recruiting agencies and HR teams, offering tools for job posting, resume parsing, candidate tracking, custom workflows, analytics, and integrations to streamline the hiring process.

One exposes CATS through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cats` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CATS is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CATS account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Candidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate | GET | `/candidates/{{id}}` | `conn_mod_def::GJ1ERox390A::OpL1GjeKQj2UVbdNm5394w` |
| Get a Candidate Thumbnail | GET | `/candidates/{{id}}/thumbnail` | `conn_mod_def::GJ1ESt1BdI4::GbuAF-ZbRHmRaRq7VkSyXg` |
| Get a Candidate’s Custom Field Value | GET | `/candidates/{{candidateId}}/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ1ESD8cF3g::uGcz7a96Saece1bEfZn59w` |
| List a Candidate’s Custom Field Values | GET | `/candidates/{{id}}/custom_fields` | `conn_mod_def::GJ1EUEF8gv0::a4JdlGr9SpSadMTh2HD-Sw` |
| List a Candidate’s Work History | GET | `/candidates/{{id}}/work_history` | `conn_mod_def::GJ1EU1Ae2Gg::KaWM210MSxGuEJOX2TRrRQ` |
| List Candidates | GET | `/candidates` | `conn_mod_def::GJ1ETghUi8I::BR4AVHc2SESmScxa2_MjTw` |
| Search Candidates | GET | `/candidates/search` | `conn_mod_def::GJ1EVQBoyMw::EDeuPy4pRvuri50ASWdwtA` |
| Attach Tags to a Candidate | PUT | `/candidates/{{candidateId}}/tags` | `conn_mod_def::GJ1EPEGpeIs::0_oDEq2fQMGWbTYDHIfA3Q` |
| Authorize a Candidate | POST | `/candidates/authorization` | `conn_mod_def::GJ1EPLhmHbk::kXg8ZQ9oTkSBmbIVsVQoLg` |
| Change a Candidate’s Thumbnail | PUT | `/candidates/{{id}}/thumbnail` | `conn_mod_def::GJ1EPWqYKsI::wiXHRQmJSXCpqMDzDv7QoA` |
| Create a Candidate | POST | `/candidates` | `conn_mod_def::GJ1EPgsa2C4::KZbQY62RS9GryjAc4drTHA` |
| Delete a Candidate | DELETE | `/candidates/{{id}}` | `conn_mod_def::GJ1EQhR4UoQ::OJFEMjPIQ0yyPcwGSTcgXg` |

6 more Candidates actions are available through search.

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/contacts/{{id}}` | `conn_mod_def::GJ1EegmRXmk::1h9CNlFLS36ONvyV0TnMgw` |
| Get a Contact Thumbnail | GET | `/contacts/{{id}}/thumbnail` | `conn_mod_def::GJ1EfZcpm6Y::aH7qwT-ETMOB-OpfUYAbfg` |
| Get a Contact’s Custom Field Value | GET | `/contacts/{{contactId}}/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ1EevMsB-8::4eFk-CNkR3OlL-ndsr7lDw` |
| List a Contact’s Custom Field Values | GET | `/contacts/{{id}}/custom_fields` | `conn_mod_def::GJ1Egqfh2DU::L42tiQUMSJ61mJDfeDGf0A` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ1EgRGUQt4::UNJ5inPuSOymRnE6J3REIQ` |
| Search Contacts | GET | `/contacts/search` | `conn_mod_def::GJ1Ehi7Em_I::bBm3wMtOTHyKlHhk5uScEg` |
| Attach Tags to a Contact | PUT | `/contacts/{{contactId}}/tags` | `conn_mod_def::GJ1Ecbk-1fc::S7VFIjeFThqJoenB468IbA` |
| Change a Contact’s Status | POST | `/contacts/{{id}}/status` | `conn_mod_def::GJ1EcrWoAss::VHnXc6VvSiGjWfQfn6XRjA` |
| Change a Contact’s Thumbnail | PUT | `/contacts/{{id}}/thumbnail` | `conn_mod_def::GJ1Ecjei6Rw::WR1BtCl3THaQ7kglwo0YSw` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ1EczjB4GI::kKdGvThaRwaVNLwxiGmhtQ` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GJ1EdldHmx8::6QmCyczKQvm_Bu7rhIknwQ` |
| Filter Contacts | POST | `/contacts/search` | `conn_mod_def::GJ1EeZhNdGs::bLldenW-R5KPVmCMOLbP_Q` |

3 more Contacts actions are available through search.

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company | GET | `/companies/{{id}}` | `conn_mod_def::GJ1EYOevKoM::W0RaAwiGSsifd6CruuEQsA` |
| Get a Company's Thumbnail | GET | `/companies/{{id}}/thumbnail` | `conn_mod_def::GJ1EZClMy70::9wv0XpoaRBStZJ5BjmaeDQ` |
| List Companies | GET | `/companies` | `conn_mod_def::GJ1EZ4ertwo::BwCuoByBRp6RIiiwLaOGgg` |
| Search Companies | GET | `/companies/search` | `conn_mod_def::GJ1Ebr1J9Oc::bxB51eIvSqGMejnBATu_xg` |
| Attach Tags to a Company | PUT | `/companies/{{companyId}}/tags` | `conn_mod_def::GJ1EWdcDGak::6i0SS6A-Rie5rg46M6UuyQ` |
| Change a Company’s Status | POST | `/companies/{{id}}/status` | `conn_mod_def::GJ1EWuQYlPs::BFBt-3WRR8GC2emMr8DB2w` |
| Change a Company's Thumbnail | PUT | `/companies/{{id}}/thumbnail` | `conn_mod_def::GJ1EWlEJaL8::DkHMeM6nRPyXUkgPCD2j2g` |
| Create a Company | POST | `/companies` | `conn_mod_def::GJ1EW2-kjdw::LgotRAFwS9O0_JUchfRgYg` |
| Delete a Company | DELETE | `/companies/{{id}}` | `conn_mod_def::GJ1EXZCFh0s::8mrZPhLSSbaqRr1wKsX3SA` |
| Delete a Company's Tag | DELETE | `/companies/{{companyId}}/tags/{{tagId}}` | `conn_mod_def::GJ1EX19e044::dCoB1fhbQB-BgnNDG5JtqQ` |
| Filter Companies (Search) | POST | `/companies/search` | `conn_mod_def::GJ1EYHJVyu4::O4_2yik0RoWduiyycc18PQ` |
| Replace a Company's Tags | POST | `/companies/{{companyId}}/tags` | `conn_mod_def::GJ1Ebjo6hD0::nB_vOBbYS6mOxyE0QrJ3Uw` |

2 more Companies actions are available through search.

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job | GET | `/jobs/{{id}}` | `conn_mod_def::GJ1EkAnj8cI::3-EJe5KPRI-Njx4nITvvyA` |
| List a Job’s Custom Field Values | GET | `/jobs/{{id}}/custom_fields` | `conn_mod_def::GJ1El8S8UGM::F76sJ9r3R2GHGKCHYcA_UQ` |
| List Jobs | GET | `/jobs` | `conn_mod_def::GJ1ElXa5WOQ::wiaC6zl-QuugJIkFlTEFbQ` |
| Search Jobs | GET | `/jobs/search` | `conn_mod_def::GJ1Emvi0Fi8::XNU04ZBUT8aikHXV0X1g5A` |
| Attach Tags to a Job | PUT | `/jobs/{{jobId}}/tags` | `conn_mod_def::GJ1Eimci55c::-EkjsgCiTluso1ArdGaVuA` |
| Change a Job’s Status | POST | `/jobs/{{id}}/status` | `conn_mod_def::GJ1EitwNZAA::3Ssx3PVERayvCfmGusle1Q` |
| Create a Job | POST | `/jobs` | `conn_mod_def::GJ1Ei2PFdaM::XWKWWHMDR9O7WeedbZ34AA` |
| Delete a Job | DELETE | `/jobs/{{id}}` | `conn_mod_def::GJ1EjUS2tL8::6OXGBHYFQDGdm6uswu3OMQ` |
| Filter Jobs | POST | `/jobs/search` | `conn_mod_def::GJ1Ej54Drko::umWaZvJARA6VhgT1wz7YJQ` |
| Replace a Job’s Tags | POST | `/jobs/{{jobId}}/tags` | `conn_mod_def::GJ1Emn4Dk9Y::U2aUlvNqSx27SxIwp632EA` |
| Update a Job | PUT | `/jobs/{{id}}` | `conn_mod_def::GJ1Em2W_jqQ::P3jQNMATTtm-dObQ2uqa8Q` |
| Update a Job’s Custom Field | PUT | `/jobs/{{jobId}}/custom_fields/{{customFieldId}}` | `conn_mod_def::GJ1Em-1RAao::zOeAUHqZTcqfST5OSsE3vg` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pipeline | GET | `/pipelines/{{id}}` | `conn_mod_def::GJ1EnxXqzVs::wXj0whNqR_OTYYhNqpRnGQ` |
| List Pipelines | GET | `/pipelines` | `conn_mod_def::GJ1EoSun8CI::MNZzIOe9Rh-AGlip-JO79g` |
| Change a Pipeline’s Status | POST | `/pipelines/{{id}}/status` | `conn_mod_def::GJ1EnQdgH5o::DhujFrj7SzaonF9X17vckw` |
| Create a Pipeline | POST | `/pipelines` | `conn_mod_def::GJ1EnYpBZrQ::mXoK8d7zQySWwUfp6Twkvg` |
| Delete a Pipeline | DELETE | `/pipelines/{{id}}` | `conn_mod_def::GJ1Enih9ObQ::airNNu6IQEK-Sezu6RYxbA` |
| Filter Pipelines | POST | `/pipelines/search` | `conn_mod_def::GJ1Enqj5LpU::7APrOmZeQZOmqLjTcZI9KA` |
| Update a Pipeline | PUT | `/pipelines/{{id}}` | `conn_mod_def::GJ1EorG2BHI::k9hmpY7rQQ-ccEysCuA89A` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/tasks/{{id}}` | `conn_mod_def::GJ1Eqm7XNNs::96d5_aLSQUe3PwCSARzruQ` |
| List a Company's Tasks | GET | `/companies/{{id}}/tasks` | `conn_mod_def::GJ1EbY-hZeQ::wuPX9mxLSiyKn2Ctj4w36A` |
| List a Contact's Tasks | GET | `/contacts/{{id}}/tasks` | `conn_mod_def::GJ1EhN1zS9I::tSMZrAobRKGHXkZH0oxwYQ` |
| List Tasks | GET | `/tasks` | `conn_mod_def::GJ1EqwO_TOs::Gps2eAL2SkyZSlGyRzp7Vg` |
| Create a Task | POST | `/tasks` | `conn_mod_def::GJ1EqY_EWi4::WDfe9nqoQd6BqNg8O39ggQ` |
| Delete a Task | DELETE | `/tasks/{{id}}` | `conn_mod_def::GJ1EqfzsZwc::Lc8O0MpIRc2nMLoAa3L9Iw` |
| Update a Task | PUT | `/tasks/{{id}}` | `conn_mod_def::GJ1Eq453daQ::Yy0uzJzNRuGr7z8E8rBCgw` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Activity | GET | `/activities/{{id}}` | `conn_mod_def::GJ1ENhq626c::QUs9ZhxpRYOTKyhlf9hWxA` |
| List Activities | GET | `/activities` | `conn_mod_def::GJ1ENpmLXjw::wS6saTZ3Q6e0qFsaqeIa_w` |
| Search Activities | GET | `/activities/search` | `conn_mod_def::GJ1ENyUjABM::L41RHQX2Q6y0CEpRSHc2Cg` |
| Delete an Activity | DELETE | `/activities/{{id}}` | `conn_mod_def::GJ1ENOYnDkI::hRdg9uJuQZSILZNvfXl-9w` |
| Filter Activities | POST | `/activities/search` | `conn_mod_def::GJ1ENaBQCG8::m033C1Z0RrW3cT_YwuRmGQ` |
| Update an Activity | PUT | `/activities/{{id}}` | `conn_mod_def::GJ1EN69e6iw::5XJv0qfuRE-gNcy7loCA2A` |

### CandidateEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate Email | GET | `/candidates/{{candidateId}}/emails/{{id}}` | `conn_mod_def::GJ1ESMAewBM::HYiAbgqrS-ibR8n91gXUGg` |
| List a Candidate's Emails | GET | `/candidates/{{candidateId}}/emails` | `conn_mod_def::GJ1EUXXcGlY::Sw38jT81T3msHXpM4B_hIQ` |
| Create a Candidate Email | POST | `/candidates/{{candidateId}}/emails` | `conn_mod_def::GJ1EP02kb6g::idt_byvbQfOo1itsIkBtkw` |
| Delete a Candidate Email | DELETE | `/candidates/{{candidateId}}/emails/{{id}}` | `conn_mod_def::GJ1EQp4VEyA::blMhKhkXTACFwnZf6VvZ6w` |
| Update a Candidate Email | PUT | `/candidates/{{candidateId}}/emails/{{id}}` | `conn_mod_def::GJ1EVsTIxYE::YIZJ-haoTmqLt9Rv4vCfBg` |

### CandidatePhones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate Phone | GET | `/candidates/{{candidateId}}/phones/{{id}}` | `conn_mod_def::GJ1ESksDjIs::MQWucrM2QBOPyIBagW-2TA` |
| List a Candidate’s Phones | GET | `/candidates/{{candidateId}}/phones` | `conn_mod_def::GJ1EUjCORNM::WCyUD_tQRj-1v1A1jUCQiA` |
| Create a Candidate Phone Number | POST | `/candidates/{{candidateId}}/phones` | `conn_mod_def::GJ1EQJTpXKE::vrz5iF-pTuSM4aQMTwkoIA` |
| Delete a Candidate’s Phone | DELETE | `/candidates/{{candidateId}}/phones/{{id}}` | `conn_mod_def::GJ1ERHCMw20::s82x_4H6Tky-X_F8ADxtbQ` |
| Update a Candidate Phone | PUT | `/candidates/{{candidateId}}/phones/{{id}}` | `conn_mod_def::GJ1EV0D-f_0::tt8KD2qYQAGPMjfKT256fw` |

### CompanyPhones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Phone | GET | `/companies/{{companyId}}/phones/{{id}}` | `conn_mod_def::GJ1EYxWsR4I::jrIKwokoQGOxGepXrKU4vw` |
| List a Company's Phones | GET | `/companies/{{companyId}}/phones` | `conn_mod_def::GJ1EbJXDNSE::SNzO6OtVRhW2mp97U-vYaw` |
| Create a Company's Phone | POST | `/companies/{{companyId}}/phones` | `conn_mod_def::GJ1EXGu_yTg::cTTlixcMT6qukdQAsPDvcQ` |
| Delete a Company's Phone | DELETE | `/companies/{{companyId}}/phones/{{id}}` | `conn_mod_def::GJ1EXupG-s8::z2b4kDI4Qv-kXPLI4RqCGg` |
| Update a Company's Phone | PUT | `/companies/{{companyId}}/phones/{{id}}` | `conn_mod_def::GJ1EcEfiB5Y::Q9oRNJ32QQWITpuYXgJ2tA` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Attachment | GET | `/attachments/{{id}}/download` | `conn_mod_def::GJ1EOKam860::LEgtcW2jQP-5IjJ5pOtXqg` |
| Get an Attachment | GET | `/attachments/{{id}}` | `conn_mod_def::GJ1EOTgzXjc::weXbIGrRQB6ioNdbDqh2kQ` |
| Delete an Attachment | DELETE | `/attachments/{{id}}` | `conn_mod_def::GJ1EODOe-Vs::lKjd6IFxSOi737cMy6X-Pw` |
| Parse a Resume Attachment | POST | `/attachments/parse` | `conn_mod_def::GJ1EOhCBcuU::YUKVIBIUQ0epPgreq85MEQ` |

### CandidateLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate List | GET | `/candidates/lists/{{id}}` | `conn_mod_def::GJ1EST5XDbE::fKbhm1_4QkOYe5vBi9hHrQ` |
| List Candidate Lists | GET | `/candidates/lists` | `conn_mod_def::GJ1ETRjonVM::dYUfgw1ZRHC_rVHwgHny3w` |
| Create a Candidate List | POST | `/candidates/lists` | `conn_mod_def::GJ1EQBQxXLs::-p4mebCaTKO77WMAuRZJEw` |

1 more CandidateLists actions are available through search.

This lists 90 of 224 actions. For anything not here, call `search_one_platform_actions` with platform `cats`. The full catalog is at https://www.withone.ai/knowledge/cats.

## When a call fails

The error comes from CATS, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cats

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
