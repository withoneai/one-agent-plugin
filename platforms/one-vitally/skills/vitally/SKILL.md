---
name: vitally
description: Vitally is a customer success platform that helps B2B teams monitor product usage, segment accounts, automate workflows, and drive retention and expansion using data-driven insights and playbooks. Read and write Vitally data through One: users, projects, npsresponses, notes, tasks, accounts and more, 75 actions with real parameter documentation. Use whenever the user asks to look something up in Vitally, create or update a record there, or build code against the Vitally API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: vitally
  generated-from: one-knowledge-base
---

# Vitally through One

Vitally is a customer success platform that helps B2B teams monitor product usage, segment accounts, automate workflows, and drive retention and expansion using data-driven insights and playbooks.

One exposes Vitally through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `vitally` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Vitally is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Vitally account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/resources/users/{{id}}` | `conn_mod_def::GJlC9mSYJtE::0TpEBvQCRP-YWJnjx7n_aA` |
| List an Account's Users | GET | `/resources/accounts/{{accountId}}/users` | `conn_mod_def::GJlC9YVTbmw::AzfaKdB2RAqu3dfJun8xuQ` |
| List an Organization’s Users | GET | `/resources/organizations/{{organizationId}}/users` | `conn_mod_def::GJlC9gXpvdY::PK_5m-2DQTClNWcGOadcvA` |
| List Users | GET | `/resources/users` | `conn_mod_def::GJlC9RblnO4::WcEi4Y1USM6McJWmoMiffQ` |
| Search Users | GET | `/resources/users/search` | `conn_mod_def::GJlC9s5WTxA::x5m0c1-fTjS9fqL6xT80bw` |
| Create a User | POST | `/resources/users` | `conn_mod_def::GJlC90DOokY::WYcL_FPqR-KPQiY4O6siAQ` |
| Delete a User | DELETE | `/resources/users/{{id}}` | `conn_mod_def::GJlC-AaH1Qw::PPug6A28STGbun-qGxYgvA` |
| Update a User | PUT | `/resources/users/{{id}}` | `conn_mod_def::GJlC96XhNiA::EQRpdOVrTyKRtwqvuSFAfg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/resources/projects/{{id}}` | `conn_mod_def::GJlC8KDLhAQ::PwqniGBUQuCPNhZEGdor6A` |
| List an Account’s Projects | GET | `/resources/accounts/{{accountId}}/projects` | `conn_mod_def::GJlC72h5wV4::Aa_cxpwNRQ6oQtAWYm0h8w` |
| List an Organization's Projects | GET | `/resources/organizations/{{organizationId}}/projects` | `conn_mod_def::GJlC782o2v4::gyuHcS93TMeTDYRV5nWbew` |
| List Projects | GET | `/resources/projects` | `conn_mod_def::GJlC7vxFO3M::c33d9fBHSxSeh48dxSmcxg` |
| Create a Project from a Template | POST | `/resources/projects` | `conn_mod_def::GJlC8EwNDaw::LgBJWgXKT5GifJ_o_2Q-TA` |
| Create a Project Using a Template | POST | `/resources/projects` | `conn_mod_def::GJlC7ksxllI::jqR3bgXoTPWLWencVxUDXg` |
| Delete a Project | DELETE | `/resources/projects/{{id}}` | `conn_mod_def::GJlC8Tv6mr8::3ds1JyIzQwGFBs3k3HLgmQ` |
| Update a Project | PUT | `/resources/projects/{{id}}` | `conn_mod_def::GJlC8PI9Aw4::H8nnfFKOTlGuqEZ9mhj8aQ` |

### NpsResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an NPS Response | GET | `/resources/npsResponses/{{id}}` | `conn_mod_def::GJlC6qNSx68::BpXqcCtDTlCfGo0jnP-gtA` |
| List an Account’s NPS Responses | GET | `/resources/accounts/{{accountId}}/npsResponses` | `conn_mod_def::GJlC6ecpCk8::VziPgL2HQfazePZOu6L7-g` |
| List an Organization’s NPS Responses | GET | `/resources/organizations/{{organizationId}}/npsResponses` | `conn_mod_def::GJlC6XADQvk::tNTk4d8lRdGjYKE9lNPm1A` |
| List NPS Responses | GET | `/resources/npsResponses` | `conn_mod_def::GJlC6QgFxhc::xZakeL7IQcGMUYtTnfC85g` |
| Create or Update an NPS Response | POST | `/resources/npsResponses` | `conn_mod_def::GJlC6j3XNAs::InR0RMydS_CEBjcwxtBLjQ` |
| Delete an NPS Response | DELETE | `/resources/npsResponses/{{id}}` | `conn_mod_def::GJlC6zpAbRA::_DlnqfQ8Rd2mwHM2e0rTkQ` |
| Update an NPS Response | PUT | `/resources/npsResponses/{{id}}` | `conn_mod_def::GJlC6vJxvoI::D4aQn4fZRYmpdgPxbt05sg` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note | GET | `/resources/notes/{{id}}` | `conn_mod_def::GJlC51zHe1I::nUFB-U3oTQSNu_mbL8izSQ` |
| List an Account's Notes | GET | `/resources/accounts/{{accountId}}/notes` | `conn_mod_def::GJlC5f-prIA::RLn89Pj7Ri6JAqhBwnwG-Q` |
| List Notes | GET | `/resources/notes` | `conn_mod_def::GJlC5ZXoG7A::2Bx9c-Z2Ti2043tLzFxbww` |
| List Notes for an Organization | GET | `/resources/organizations/{{organizationId}}/notes` | `conn_mod_def::GJlC5lzweLc::FScryyk_SriJe2Ozr6KDMg` |
| Create a Note | POST | `/resources/notes` | `conn_mod_def::GJlC5v__kBE::793rcA2sSQaPktFl9oTRwA` |
| Delete a Note | DELETE | `/resources/notes/{{id}}` | `conn_mod_def::GJlC6CoD468::SQESiElAT9Kzb4t1qixRYQ` |
| Update a Note | PUT | `/resources/notes/{{id}}` | `conn_mod_def::GJlC57lJwwE::wIeM_QfTRSWLmV-USu5--Q` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Task | GET | `/resources/tasks/{{id}}` | `conn_mod_def::GJlC85VXRIU::rPM5bbzTQLmMPSWNPjNSMw` |
| List an Account’s Tasks | GET | `/resources/accounts/{{accountId}}/tasks` | `conn_mod_def::GJlC8lsHzsk::BB9c43zRThGABuP2bTaYyw` |
| List an Organization’s Tasks | GET | `/resources/organizations/{{organizationId}}/tasks` | `conn_mod_def::GJlC8r8OSfw::ZLcPYT_6S7-zbuOWm6xaEA` |
| List Tasks | GET | `/resources/tasks` | `conn_mod_def::GJlC8eDhQWY::HvNwudDcSp2xrkmVxNfNRA` |
| Create or Upsert a Task | POST | `/resources/tasks` | `conn_mod_def::GJlC8yUaTW0::gqX9tvdkS46U27I2vc_dug` |
| Delete a Task | DELETE | `/resources/tasks/{{id}}` | `conn_mod_def::GJlC9FjOBSo::zSTxoGbQTdqDqjrAKFZn7g` |
| Update a Task | PUT | `/resources/tasks/{{id}}` | `conn_mod_def::GJlC8_xfNog::1aqitojxSH-OCl29dgdmgA` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/resources/accounts/{{id}}` | `conn_mod_def::GJlC2l2qQDU::tfV6OJatSpSLioejrGIyGg` |
| List Accounts | GET | `/resources/accounts` | `conn_mod_def::GJlC2aoFiF8::4Ssuq1NbQZKObV8QMoAwlQ` |
| List an Organization’s Accounts | GET | `/resources/organizations/{{organizationId}}/accounts` | `conn_mod_def::GJlC2g13M80::kF63pauRQSq-6swfWajVCw` |
| Create an Account | POST | `/resources/accounts` | `conn_mod_def::GJlC20z9sEo::bEmZ0u6sSmqnPG4KaqCH4A` |
| Delete an Account | DELETE | `/resources/accounts/{{id}}` | `conn_mod_def::GJlC3C7ZX74::Rb9g2493Qk2IRZpkbJ7pmA` |
| Update an Account | PUT | `/resources/accounts/{{id}}` | `conn_mod_def::GJlC29fIOCo::gHBu2ZCYQM2kEKBd3kUaCQ` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation | GET | `/resources/conversations/{{id}}` | `conn_mod_def::GJlC3ezFBLA::i4a7ztMARaaRVlL4l-YbLg` |
| List Conversations | GET | `/resources/conversations` | `conn_mod_def::GJlC3OR9C3Q::1vuzjFktQqGvtDH4Tn6tDQ` |
| Create a Conversation | POST | `/resources/conversations` | `conn_mod_def::GJlC3TsaVqY::oEjtLgJtRTmLyj6887v8YQ` |
| Delete a Conversation | DELETE | `/resources/conversations/{{id}}` | `conn_mod_def::GJlC3j7_5iA::T9f9tCfcRJieUOnQi49gzw` |
| Update a Conversation | PUT | `/resources/conversations/{{id}}` | `conn_mod_def::GJlC3ZboC7E::zSkAgOSKQ2GiiBjdXHqB8A` |

### CustomObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object | GET | `/resources/customObjects/{{id}}` | `conn_mod_def::GJlC3x2DdVU::zaQH9bm9QRKhiNioEgrjaw` |
| List Custom Objects | GET | `/resources/customObjects` | `conn_mod_def::GJlC3qHHwpU::zJILOutUTFG6S6e6EogFkA` |
| Create a Custom Object | POST | `/resources/customObjects` | `conn_mod_def::GJlC327qXu0::2yBNPVrbRnKXB1G2yz0NQg` |
| Update a Custom Object | PUT | `/resources/customObjects/{{id}}` | `conn_mod_def::GJlC39FZLjs::kc_weVdKS8uC1KC2XAA9Lg` |

### CustomObjectInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Custom Object’s Instances | GET | `/resources/customObjects/{{customObjectId}}/instances` | `conn_mod_def::GJlC4EKDdeI::igRzD6B_TKuOrYy892YZjw` |
| Search Custom Object Instances (First Match) | GET | `/resources/customObjects/{{customObjectId}}/instances/search` | `conn_mod_def::GJlC4Lt-V18::ayt1asaWQa27qTyR7IUgJA` |
| Delete a Custom Object’s Instance | DELETE | `/resources/customObjects/{{customObjectId}}/instances/{{instanceId}}` | `conn_mod_def::GJlC4mKkFEY::cX0XgCd1Rs2L-KFfVbUNog` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message | GET | `/resources/messages/{{id}}` | `conn_mod_def::GJlC5M_FYbc::YlKDKiJHR_erunpsAWErJA` |
| Create a Message in a Conversation | POST | `/resources/conversations/{{conversationId}}/messages` | `conn_mod_def::GJlC5IDg7wE::dHbkWxfpRICeXfjRzwONFg` |
| Delete a Message | DELETE | `/resources/messages/{{id}}` | `conn_mod_def::GJlC5TtxpC0::ott-AWo5TlW7N6MRLPoEyA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/resources/organizations/{{id}}` | `conn_mod_def::GJlC69jTS1s::hn4VVPG5RhyLSIUb7pmPxw` |
| List Organizations | GET | `/resources/organizations` | `conn_mod_def::GJlC6418CuA::t05S3flhRqmiekrE0zGo0g` |
| Delete an Organization | DELETE | `/resources/organizations/{{id}}` | `conn_mod_def::GJlC7OUsYO0::eIiOPYfaThi1-m0HH7BbZA` |

### CustomObjectInstance

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Object’s Instance | POST | `/resources/customObjects/{{customObjectId}}/instances` | `conn_mod_def::GJlC4aTbirA::znJ5N6hZT8i7wpCR3SVTjg` |
| Update a Custom Object Instance | PUT | `/resources/customObjects/{{customObjectId}}/instances/{{instanceId}}` | `conn_mod_def::GJlC4gcbB7Y::05it2wUrT-6ORUH98EGS1A` |

### SurveyResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Survey Response by Response ID | GET | `/resources/surveyResponses/{{responseId}}` | `conn_mod_def::GJlC4w6WUMU::-pNHeL5WT9iODoQ5p1bNDQ` |
| Get a Survey’s Responses | GET | `/resources/surveys/{{surveyId}}/responses` | `conn_mod_def::GJlC4rvStz4::vgdmkiIwR--iQZdwJm3Wew` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization | POST | `/resources/organizations` | `conn_mod_def::GJlC7DollFA::hs3vb913TJeMW59bSoO5SA` |
| Update an Organization | PUT | `/resources/organizations/{{id}}` | `conn_mod_def::GJlC7IN_nc0::swPAafdoS620oTt-ZttPYQ` |

### NoteCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Note Categories | GET | `/resources/noteCategories` | `conn_mod_def::GJlC6JkXKfk::T5s5V5VARm2sx1H0TmMbcA` |

### ProjectTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Templates | GET | `/resources/projectTemplates` | `conn_mod_def::GJlC7U8yEKA::iMWCn86sTPiVfPw97IB4wA` |

### AccountHealthScores

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account’s Health Score Breakdown | GET | `/resources/accounts/{{id}}/healthScores` | `conn_mod_def::GJlC2sPLIc4::AMAeKQdQSeKdKoTE_btFfQ` |

### Admins

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Admins | GET | `/resources/admins/search` | `conn_mod_def::GJlC3Ik3Bp4::EdAOSLZoRiC6N7gDkKnPTw` |

### SurveyQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Survey Question Details | GET | `/resources/surveyQuestions/{{questionId}}` | `conn_mod_def::GJlC42jIuVg::2slyLxcVTZiKK8Ig5g3nEg` |

### CustomTraits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Traits by Model | GET | `/resources/customFields` | `conn_mod_def::GJlC5CbUlBk::VTFXV6S4RIWGm5zZQ00IRw` |

### ProjectCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Categories | GET | `/resources/projectCategories` | `conn_mod_def::GJlC7dLR3Kk::qWLBaLlhS0yoEITgipbEHw` |

### TaskCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Categories | GET | `/resources/taskCategories` | `conn_mod_def::GJlC9LXFOoY::Pt0u8QKLSlOsiFXMeJ3G4g` |

## When a call fails

The error comes from Vitally, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/vitally

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
