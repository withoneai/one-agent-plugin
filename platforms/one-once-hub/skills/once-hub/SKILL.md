---
name: once-hub
description: OnceHub is a scheduling and customer engagement platform that provides booking pages, routing, chat, and meeting automation, allowing sales, support, and service teams to streamline appointment scheduling and manage customer interactions through integrations and embeddable workflows. Read and write OnceHub data through One: users, bookings, contacts, webhooks, teams, bookingcalendars and more, 64 actions with real parameter documentation. Use whenever the user asks to look something up in OnceHub, create or update a record there, or build code against the OnceHub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: once-hub
  generated-from: one-knowledge-base
---

# OnceHub through One

OnceHub is a scheduling and customer engagement platform that provides booking pages, routing, chat, and meeting automation, allowing sales, support, and service teams to streamline appointment scheduling and manage customer interactions through integrations and embeddable workflows.

One exposes OnceHub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `once-hub` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OnceHub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OnceHub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single User (by ID) | GET | `/users/{{id}}` | `conn_mod_def::GLExwLsbk0g::b4GmNtCcRCu3IvwAhxZ5nQ` |
| Get a Single User (by ID) | GET | `/users/{{id}}` | `conn_mod_def::GLExwLszjAA::tRwD88BIQEan7F1BiR9zeQ` |
| Get a User's Scheduling Availability | GET | `/users/{{id}}/scheduling-availability` | `conn_mod_def::GLExwL1vckA::Zw9lxbhgRFCxuyb4IDSvEA` |
| Get a User's Scheduling Availability | GET | `/users/{{id}}/scheduling-availability` | `conn_mod_def::GLExwMTEtGA::oveWKXBjTaqwpotzgoLHUg` |
| List All Users | GET | `/users` | `conn_mod_def::GLExwTXLVgA::0AnnRk9QSL6kpnlo9c5pLQ` |
| List All Users | GET | `/v2/users` | `conn_mod_def::GLExwUKKoFg::Ws083lD7THabjaxHnEdfxg` |
| Add a New User | POST | `/v2/users` | `conn_mod_def::GLExwDo6t2g::XQY2erhVSzecZklUl1so2A` |
| Add a New User | POST | `/v2/users` | `conn_mod_def::GLExwEECwTA::8hSLWeptRDiCz2kNywNRRQ` |
| Delete a User | DELETE | `/users/{{id}}` | `conn_mod_def::GLExwDUelJg::0gNg-LtrQJOPuDGKaG2uxA` |
| Delete a User | DELETE | `/users/{{id}}` | `conn_mod_def::GLExwL-4Bpg::d7hMWJBFQkq79xxVAi3kSA` |
| Update a User | PATCH | `/users/{{id}}` | `conn_mod_def::GLExwT5BmIA::J_QJyb62S1ygwRYSRvadgw` |
| Update a User | PATCH | `/users/{{id}}` | `conn_mod_def::GLExwURcJDg::czUIfmJXQKubEPYSgPr6Ow` |

2 more Users actions are available through search.

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Booking (by ID) | GET | `/bookings/{{id}}` | `conn_mod_def::GLExvKFqN1A::_AOL9iMVRQy0Ldu-axFJHA` |
| Get a Single Booking (by ID) | GET | `/bookings/{{id}}` | `conn_mod_def::GLExvLFVs4g::tSKXNBLzRWeRyEvti62Evw` |
| List All Bookings | GET | `/v2/bookings` | `conn_mod_def::GLExvOAlzTg::wsd6-47pRbmbM5Wrt_wSug` |
| List All Bookings | GET | `/bookings` | `conn_mod_def::GLExvOFvTMg::fY1hgqdqTf2f5VxnHTX1eA` |
| Cancel a Booking by ID | POST | `/bookings/{{id}}/cancel` | `conn_mod_def::GLExvCpA4CA::oPP53BQURBuQK6CK4RoLug` |
| Cancel a Booking by ID | POST | `/bookings/{{id}}/cancel` | `conn_mod_def::GLExvLCxgGA::ba0QvXZsS1yEIVUlhrSiFA` |
| Reassign a Booking | POST | `/bookings/{{id}}/reassign` | `conn_mod_def::GLExvVeQfuA::zy0LnR3nR429RIYZmFpoQg` |
| Reassign a Booking | POST | `/bookings/{{id}}/reassign` | `conn_mod_def::GLExvXxidcA::bg5J5nTqRLC7RRjluNx_uw` |
| Request a Booking Reschedule | POST | `/bookings/{{id}}/request-reschedule` | `conn_mod_def::GLExvXdo_fA::X479t5lpRkCZLIszyAaC_w` |
| Request a Booking Reschedule | POST | `/bookings/{{id}}/request-reschedule` | `conn_mod_def::GLExvX28mwg::EK6jY0YERFCbEDJ1QbZgSQ` |
| Set a Booking as No-Show | POST | `/bookings/{{id}}/no-show` | `conn_mod_def::GLExvYDiLZg::p-x4D3U1TOmy5cwtwGDZKw` |
| Set a Booking as No-Show | POST | `/bookings/{{id}}/no-show` | `conn_mod_def::GLExvg9VyKA::5qmfdJySRFm2c3EoMQVpMw` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Contact (by ID) | GET | `/contacts/{{id}}` | `conn_mod_def::GLExvpAEfKg::Gsv4lLWNST2BH_PkWb6R9Q` |
| Get a Single Contact (by ID) | GET | `/contacts/{{id}}` | `conn_mod_def::GLExvpXyvIg::yZTGrzsqSpusUCPkh_u5HQ` |
| List All Contacts | GET | `/v2/contacts` | `conn_mod_def::GLExvpwDfHA::ioxnFblBTzKFIFyOl9ZX8g` |
| List All Contacts | GET | `/contacts` | `conn_mod_def::GLExvq3Z9BA::mmqbSDcbS1a61e5Z3qCuQA` |
| Add a New Contact | POST | `/contacts` | `conn_mod_def::GLExveq8kRg::KKcYHxuUQVOO5Nhky8cZWQ` |
| Add a New Contact | POST | `/contacts` | `conn_mod_def::GLExvhZI0jg::LwSP6UMVRuWEI_x6_4Gd3A` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GLExveVpCpg::r542EleEQG-BBvat30Wsqg` |
| Delete a Contact by ID | DELETE | `/contacts/{{id}}` | `conn_mod_def::GLExvfKV74g::wzXdEwQJRbOrVRK5htsudA` |
| Update a Contact (by ID) | PATCH | `/contacts/{{id}}` | `conn_mod_def::GLExvpzRtWg::hgKX8ncGQJipOD5y8dfZAg` |
| Update a Contact by ID | PATCH | `/contacts/{{id}}` | `conn_mod_def::GLExvzMxIYg::1o22kiWYRP26LpnLirvAHQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Webhook | GET | `/webhooks/{{id}}` | `conn_mod_def::GLExwjxmvNg::x6nnmLzLRXaZaI3gkbO7kQ` |
| Get a Single Webhook (by ID) | GET | `/webhooks/{{id}}` | `conn_mod_def::GLExwjxck0g::BSWEbTPaTymJzacv_-dE4Q` |
| List All Webhooks | GET | `/webhooks` | `conn_mod_def::GLExwkEbDYg::C5ld82DLSFO4c9CIUpS1Bw` |
| List All Webhooks | GET | `/webhooks` | `conn_mod_def::GLExwkgKiPg::WhzMjC5GQGq6DJFb-uBeFA` |
| Create a Webhook | POST | `/v2/webhooks` | `conn_mod_def::GLExwbOy8vg::26dSbV0eTwaQ2Q7Mshva0A` |
| Create a Webhook | POST | `/v2/webhooks` | `conn_mod_def::GLExwbjfJxA::tevjg5IhRL-NeSYrPKzrqg` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GLExwa94lQg::rjypKElbQJycyj6GaHYo3w` |
| Delete a Webhook | DELETE | `/webhooks/{{id}}` | `conn_mod_def::GLExwa9_jjA::zgNkQcCzSZCLqKP2iVZu_w` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Team (by ID) | GET | `/teams/{{id}}` | `conn_mod_def::GLExv7r27aA::YPvbOT5nQiuCMlSVnoNEpg` |
| Get a Single Team (by ID) | GET | `/teams/{{id}}` | `conn_mod_def::GLExv7sCZyA::UMLnkQdrRgCqEC5dCvdBig` |
| List All Teams | GET | `/teams` | `conn_mod_def::GLExwEKPqpA::r1wDyq-zQqKf1nbnwA5ciw` |
| List All Teams | GET | `/teams` | `conn_mod_def::GLExwEoPBgg::YbaMzkw5Q7K-m3_dj7CSaQ` |

### BookingCalendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Booking Calendar | GET | `/booking-calendars/{{id}}` | `conn_mod_def::GLExu5tQOWA::gXRmEoIBS7WSoGUF_6WtVQ` |
| List All Booking Calendars | GET | `/v2/booking-calendars` | `conn_mod_def::GLExvCAH-lg::4Obalka5SV24vpzP9Uo3DQ` |
| Book a Time Slot for a Booking Calendar | POST | `/booking-calendars/{{id}}/schedule` | `conn_mod_def::GLExu5ujQzA::V6tKTuZRSI2L_zlwrKgduw` |

### ApiKeyValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate API Key | GET | `/test` | `conn_mod_def::GLExu4i2y5g::iKhvqTkXRweOQBaNHRcZxA` |
| Validate API Key | GET | `/test` | `conn_mod_def::GLExu5tcxFA::xkf1trTSS_O2A3Z3FVTLUg` |

### BookingPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Booking Page | GET | `/booking-pages/{{id}}` | `conn_mod_def::GLExvBk-3yA::qaEmrPeuTuiDVoi_HkXe8Q` |
| List All Booking Pages | GET | `/booking-pages` | `conn_mod_def::GLExvB3xvLg::Ye_YuLpYRPeblddWOnpnjA` |

### MasterPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Master Page (by ID) | GET | `/master-pages/{{id}}` | `conn_mod_def::GLExvxi9KIg::0tODfX-ORnqcFVqV_tdT0A` |
| List All Master Pages | GET | `/master-pages` | `conn_mod_def::GLExv7sXz5g::vCDCBC8xSv2pdenXr2LR_A` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Event Type (by ID) | GET | `/event-types/{{id}}` | `conn_mod_def::GLExvyVVkcA::dXwhR31GSJqn7-rOljPnmw` |
| List All Event Types | GET | `/event-types` | `conn_mod_def::GLExv0I3nMA::-Ohlxm23Q46yHhiAhzqkzg` |

### SmsNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| List All SMS Notifications | GET | `/notifications/sms` | `conn_mod_def::GLExv81eZlg::_jZ1ZjRvRgGmtibQQVGUJQ` |
| List All SMS Notifications | GET | `/notifications/sms` | `conn_mod_def::GLExv81jFZA::s-a8DkXPSja5_aHl3HrMMQ` |

### BookingCalendarOneTimeLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Booking Calendar One-Time Link | POST | `/booking-calendars/{{id}}/one-time-links` | `conn_mod_def::GLExu6XMs_A::IUcDJi4IQj2OBHZg5ByhIg` |

### BookingCalendarTimeSlots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Time Slots for a Booking Calendar | GET | `/booking-calendars/{{id}}/time-slots` | `conn_mod_def::GLExvCbIP9g::dcm3xXECT9SMjw_Uze4aXQ` |

### MasterPageOneTimeBookingLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Master Page One-Time Booking Link | POST | `/master-pages/{{id}}/one-time-links` | `conn_mod_def::GLExv0BNgAA::SvTZDoAlQuydcSH0PaxmqA` |

This lists 62 of 64 actions. For anything not here, call `search_one_platform_actions` with platform `once-hub`. The full catalog is at https://www.withone.ai/knowledge/once-hub.

## When a call fails

The error comes from OnceHub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/once-hub

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
