---
name: super-saas
description: SuperSaaS is an online scheduling platform that provides booking, appointment, and reservation tools with embeddable forms, calendar integrations, and automation features, allowing businesses and developers to manage availability, accept bookings, and integrate scheduling workflows into websites and applications. Read and write SuperSaaS data through One: users, bookings, appointments, promotions, agendaappointments, forms and more, 22 actions with real parameter documentation. Use whenever the user asks to look something up in SuperSaaS, create or update a record there, or build code against the SuperSaaS API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: super-saas
  generated-from: one-knowledge-base
---

# SuperSaaS through One

SuperSaaS is an online scheduling platform that provides booking, appointment, and reservation tools with embeddable forms, calendar integrations, and automation features, allowing businesses and developers to manage availability, accept bookings, and integrate scheduling workflows into websites and applications.

One exposes SuperSaaS through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `super-saas` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SuperSaaS is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SuperSaaS account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a User | GET | `/api/users/{{id}}.json` | `conn_mod_def::GLXYQxBuiHg::bwuw8aRPRTG9BP7QMXdevQ` |
| Read All Users | GET | `/api/users.json` | `conn_mod_def::GLXYQd9aEbg::M96OdoAqSICcidzENNRQaw` |
| Create a New User | POST | `/api/users.json` | `conn_mod_def::GLXYQkcojCA::ham3_XYWTtSE4bkY_L9T2w` |
| Delete a User | DELETE | `/api/users/{{id}}` | `conn_mod_def::GLXYQcDqfTA::0ptXN1LsQameklNRMY03fw` |
| Update a User | PUT | `/api/api/users/{{id}}.json` | `conn_mod_def::GLXYQscpotg::Z8q4e5ryTWSa4JRUDXmpxw` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a Booking | GET | `/api/bookings/{{id}}.jsonxml` | `conn_mod_def::GLXYPw8pwKg::myugwAaERSSPlgPuIMKr1g` |
| Create a New Appointment | POST | `/api/bookings.json` | `conn_mod_def::GLXYP6Rpp1A::FzZZ90tJSZWOr3BFtBiFJA` |
| Delete an Appointment | DELETE | `/api/bookings/{{id}}.json.xml` | `conn_mod_def::GLXYPw9U80A::P0sg2uMVQPKmk76dqYDYOg` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Appointments from a Schedule | GET | `/api/range/{{scheduleId}}.json` | `conn_mod_def::GLXYQIMq-7A::ZaIPA1F4T9CEar-8o7W3Pg` |
| Read Multiple Appointments | GET | `/api/bookings.json` | `conn_mod_def::GLXYPx4MaAA::KvwD0Dm2T2KVRx9dJ7rauw` |
| Update an Appointment | PUT | `/api/bookings/{{id}}.json.xml` | `conn_mod_def::GLXYQGlPvFg::0UR8qwm0QPKRdtQx-FDsxA` |

### Promotions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Promotions | GET | `/api/promotions.json` | `conn_mod_def::GLXYQfewEKA::Sv7ulmhvTzmfmkm2fKZI4A` |
| Duplicate a Promotion Code | POST | `/api/promotions.json` | `conn_mod_def::GLXYQR2nkTA::p4Vxv7mFQQeNlmGYusp5EQ` |

### AgendaAppointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Agenda Appointments | GET | `/api/agenda/{{scheduleId}}.jsonxml` | `conn_mod_def::GLXYP1QWTJA::319mnHkJTEupnqwpI_EsNQ` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Forms | GET | `/api/forms` | `conn_mod_def::GLXYQDsegog::NwlsGHrCQDSl7ICniGrDFQ` |

### Changes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recent Changes for a Schedule | GET | `/api/changes/{{scheduleId}}.json` | `conn_mod_def::GLXYQEyNUwA::WkIlGZYMS9idgxhwXBl7QQ` |

### FreeScheduleAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Free Schedule Availability | GET | `/api/free/{{scheduleId}}.json` | `conn_mod_def::GLXYQE_iJzg::CaHgCSCjRPO8k1EYd4W8wA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups in an Account | GET | `/api/groups` | `conn_mod_def::GLXYQPA-Vpg::wwG-B_3rRoqYwHTFJ_qdpQ` |

### Resources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Resources or Services in a Schedule | GET | `/api/resources.json` | `conn_mod_def::GLXYQRjsfgg::i96HSZWCTm2DS6ewIGlTNA` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Fields | GET | `/api/field_list.json` | `conn_mod_def::GLXYQSEgkyA::XT3MoD1aQBqZ7ib2wm8A9g` |

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Schedules or Forms in an Account | GET | `/api/schedules.json` | `conn_mod_def::GLXYQU6FFrA::8U3AnrggTrmweT1FpbO5IQ` |

### Login

| Action | Method | Path | Action id |
|---|---|---|---|
| Log In a User | GET | `/api/login` | `conn_mod_def::GLXYQf8suLA::HDOj1JvWS4KzjUAODStYsA` |

## When a call fails

The error comes from SuperSaaS, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/super-saas

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
