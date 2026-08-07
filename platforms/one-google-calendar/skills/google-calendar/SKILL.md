---
name: google-calendar
description: A time management and scheduling calendar service that helps individuals and teams organize events, meetings, and reminders with ease and integration into productivity workflows. Read and write Google Calendar data through One: events, calendars, calendarlist, aclrules, acl, freebusy and more, 37 actions with real parameter documentation. Use whenever the user asks to look something up in Google Calendar, create or update a record there, or build code against the Google Calendar API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-calendar
  generated-from: one-knowledge-base
---

# Google Calendar through One

A time management and scheduling calendar service that helps individuals and teams organize events, meetings, and reminders with ease and integration into productivity workflows.

One exposes Google Calendar through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-calendar` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Calendar is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Calendar account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Calendar Event | GET | `/calendar/v3/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ6RlPEQKQw::rxHzaO_TTtKVIcxgFrWUKA` |
| List a Calendar's Events | GET | `/calendars/{{calendarId}}/events` | `conn_mod_def::GJ6RlnIYK20::YzuWSmaVQgurletRDNJavA` |
| List Instances of a Calendar Event | GET | `/v3/calendars/{{calendarId}}/events/{{eventId}}/instances` | `conn_mod_def::GJ6RlnP3LOc::4ImRHRcFSBm2s5L-QqwFlg` |
| Create an Event in a Calendar | POST | `/v3/calendars/{{calendarId}}/events` | `conn_mod_def::GJ6RlnjZAh4::CSya4eHtRbeXRM7PHiXuRA` |
| Delete an Event from a Calendar | DELETE | `/calendar/v3/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ6RlN24ctU::0y6GOBuWT4ShfvJCjD3vRw` |
| Import an Event to a Calendar | POST | `/calendar/v3/calendars/{{calendarId}}/events/import` | `conn_mod_def::GJ6RlazsrFw::UdI5RVTDQ7SJYW9rV4DAKg` |
| Move an Event to Another Calendar | POST | `/v3/calendars/{{calendarId}}/events/{{eventId}}/move` | `conn_mod_def::GJ6RlkZqEWc::9EcayC_0SGageEwlZ3a78A` |
| Patch an Event in a Calendar | PATCH | `/calendar/v3/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ6RlmhNiKo::48w5XxsbRx24lge7XAzN_w` |
| Quickly Add an Event to a Calendar | POST | `/calendar/v3/calendars/{{calendarId}}/events/quickAdd` | `conn_mod_def::GJ6Rlw4z-wI::Z1BCB3qBRge5ai2Lcms86A` |
| Update a Calendar Event | PUT | `/calendar/v3/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ6Rl1lMBfY::eP6apV97R--3NiAAD_w36A` |
| Watch a Calendar's Events | POST | `/calendar/v3/calendars/{{calendarId}}/events/watch` | `conn_mod_def::GJ6Rlzrfb_k::Oi-ZtyZ3See3CXbl6lQ6Ww` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Calendar | GET | `/v3/calendars/{{calendarId}}` | `conn_mod_def::GJ6RlEzQGyU::eLTOs68JRKOKWEfyuOHO_Q` |
| Clear a Calendar's Primary Calendar Events | POST | `/calendar/v3/calendars/{{calendarId}}/clear` | `conn_mod_def::GJ6Rk5X7x2k::WMB_0wC9R2isWx245iaYmw` |
| Create a Secondary Calendar | POST | `/calendars` | `conn_mod_def::GJ6RlEcmiIk::dVgMomDTROCt9i-wiwVUxw` |
| Delete a Calendar | DELETE | `/v3/calendars/{{calendarId}}` | `conn_mod_def::GJ6RlEfNkag::C7tFV3DZQjC9W2mLafGFUQ` |
| Update a Calendar | PUT | `/calendar/v3/calendars/{{calendarId}}` | `conn_mod_def::GJ6RlE8cxAk::V6pEtHyYSliikCFLEmf1jw` |
| Update a Calendar's Metadata | PATCH | `/v3/calendars/{{calendarId}}` | `conn_mod_def::GJ6RlE3CnPA::qgSUe7qQQzGGWn5Znlc3mw` |

### CalendarList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Calendar List Entry | GET | `/users/me/calendarList/{{calendarId}}` | `conn_mod_def::GJ6RkqqEJXU::AEs4UCigRMKEnwxwjtkUVA` |
| List the Authenticated User's Calendar List | GET | `/users/me/calendarList` | `conn_mod_def::GJ6Rk8ghCfI::FsO0bmOYSHOsPSIvrcOZxQ` |
| Insert a Calendar Into the Authenticated User's Calendar List | POST | `/users/me/calendarList` | `conn_mod_def::GJ6Rkxg1QIA::b5jlam5lRwaZb3s3MOTmKw` |
| Patch a User's Calendar List Entry | PATCH | `/users/me/calendarList/{{calendarId}}` | `conn_mod_def::GJ6Rk651swE::vvG8hnPyQ3S6qKgPI1qtnA` |
| Remove a Calendar From the User's Calendar List | DELETE | `/v3/users/me/calendarList/{{calendarId}}` | `conn_mod_def::GJ6Rkq4rtqc::V9kv87_tR0OxiyNqVqJ5iA` |
| Watch the Authenticated User's Calendar List | POST | `/calendar/v3/users/me/calendarList/watch` | `conn_mod_def::GJ6Rk8slfpQ::vz9OVDCXT4GNbC30JFh3AA` |

### AclRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Calendar ACL Rule | POST | `/v3/calendars/{{calendarId}}/acl` | `conn_mod_def::GJ6RkYGrZWg::qr-sj7dBTSyFIDvV7MhTbg` |
| Delete a Calendar ACL Rule | DELETE | `/calendars/{{calendarId}}/acl/{{ruleId}}` | `conn_mod_def::GJ6RkhOxWLk::ytEYBDcLTmOB0oKTuXf-Rg` |
| Patch a Calendar ACL Rule | PATCH | `/calendar/v3/calendars/{{calendarId}}/acl/{{ruleId}}` | `conn_mod_def::GJ6RkYl_Bjc::kFqSAg2tTISskPdYoQeU2Q` |
| Update a Calendar ACL Rule | PUT | `/calendars/{{calendarId}}/acl/{{ruleId}}` | `conn_mod_def::GJ6RkvBAZvc::OHHQ4RC2T2KJxQhz8aklwQ` |

### Acl

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Calendar's ACL Rules | GET | `/v3/calendars/{{calendarId}}/acl` | `conn_mod_def::GJ6RkcRtvK4::1R3tm9GvRy2Wa06InlOGpQ` |
| Watch a Calendar's ACL Resources | POST | `/calendars/{{calendarId}}/acl/watch` | `conn_mod_def::GJ6RkskBneg::Op5QNHMZRBS6woKlK_Dyaw` |

### FreeBusy

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Calendar Free/Busy Information | POST | `/freeBusy` | `conn_mod_def::GJ6Rlvk1bgM::h5exn4dzTkyhjoA89wddmQ` |

### CalendarSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| List the Authenticated User's Calendar Settings | GET | `/v3/users/me/settings` | `conn_mod_def::GJ6Rl_EQyXs::tenhgSf8QEaTWPpDhumzhw` |

### Settings

| Action | Method | Path | Action id |
|---|---|---|---|
| Watch the Authenticated User's Calendar Settings | POST | `/users/me/settings/watch` | `conn_mod_def::GJ6RmIe9Ypw::PCuSzoVRSYekDnw2Vidh1g` |

### CalendarListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User's Calendar List Entry | PUT | `/calendar/v3/users/me/calendarList/{{calendarId}}` | `conn_mod_def::GJ6Rk61UDSM::uBSa9e_GQha13hSun5pCeg` |

### CalendarAclRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Calendar ACL Rule | GET | `/v3/calendars/{{calendarId}}/acl/{{ruleId}}` | `conn_mod_def::GJ6RkVjEUVg::sRlIBh2XT76O-sfnVj3uXA` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop a Calendar Notification Channel | POST | `/channels/stop` | `conn_mod_def::GJ6RlNlVxE8::8J4tSlqIS4Sa3zgS9gLU8w` |

### UserCalendarSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Calendar Setting | GET | `/v3/users/me/settings/{{setting}}` | `conn_mod_def::GJ6RlwtMg-A::MgVNPKlQTzW8fznLc7C32w` |

### Colors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Calendar and Event Color Definitions | GET | `/calendar/v3/colors` | `conn_mod_def::GJ6RlNR3G8w::hcG9KbF5QbOzt4mjlPJOdQ` |

## When a call fails

The error comes from Google Calendar, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-calendar

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
