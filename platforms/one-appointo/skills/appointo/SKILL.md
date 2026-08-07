---
name: appointo
description: Appointo is an online appointment scheduling platform that enables businesses to add no-code booking to websites or e-commerce stores, manage staff availability, accept payments, automate reminders, and integrate with calendars, Zoom, and messaging for streamlined scheduling workflows. Read and write Appointo data through One: bookings, appointments, cancelledbookings, calendaravailability, products, subscriptioncontracts and more, 11 actions with real parameter documentation. Use whenever the user asks to look something up in Appointo, create or update a record there, or build code against the Appointo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: appointo
  generated-from: one-knowledge-base
---

# Appointo through One

Appointo is an online appointment scheduling platform that enables businesses to add no-code booking to websites or e-commerce stores, manage staff availability, accept payments, automate reminders, and integrate with calendars, Zoom, and messaging for streamlined scheduling workflows.

One exposes Appointo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `appointo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Appointo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Appointo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bookings | GET | `/api/bookings` | `conn_mod_def::GMiNtnOCa4g::-M4xh3-CTkaP9XRo-ybKsA` |
| Cancel Booking | PUT | `/api/bookings/cancel` | `conn_mod_def::GMiNtx5MezA::A1U5KfVGQJGXr2-qqUg8jw` |
| Create a New Booking | POST | `/api/bookings` | `conn_mod_def::GMiNtvn31lg::6rkHPrKeTSW7gVvueMuPJw` |
| Reschedule Booking | PUT | `/api/bookings/reschedule` | `conn_mod_def::GMiNtwt9nbg::FoZetkHTSoyIm_C1nby3TA` |
| Update a Booking | PUT | `/api/bookings/{{bookingId}}` | `conn_mod_def::GMiNtvoUU1A::Xpr2OGi-S2q-AGyCHUZKkw` |

### Appointments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Appointments | GET | `/api/appointments` | `conn_mod_def::GMiNtm30Jfg::Oxf0UEUvQbiou1uJNni_YQ` |
| Upsert Appointment Config for an Appointment | PUT | `/api/appointments/{{appointmentId}}` | `conn_mod_def::GMiNtnyQ2xA::1XpBUrfiQuesjVmEwIdUrw` |

### CancelledBookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cancelled Bookings | GET | `/api/bookings/cancelled_bookings` | `conn_mod_def::GMiNtnkPuwA::oECdfS7DR56Srih5rd4Aeg` |

### CalendarAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Calendar Availability for an Appointment | GET | `/api/appointments/{{appointmentId}}/calendar_availability` | `conn_mod_def::GMiNtosrv1A::WV1GrCdSRIWb75ZeSSZdlA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Products | GET | `/api/products` | `conn_mod_def::GMiNtwAtHdA::GXjyNHTrRWCxNjs1Dhq45w` |

### SubscriptionContracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Subscription Contracts | GET | `/api/appointment_subscriptions` | `conn_mod_def::GMiNt5gtfDg::LWBolnMbQHGv9LGEQzPWVA` |

## When a call fails

The error comes from Appointo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/appointo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
