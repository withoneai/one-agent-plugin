---
name: calendly
description: Calendly is a scheduling automation platform that simplifies the process of booking meetings by allowing users to share availability and automatically sync events with their calendars. Read and write Calendly data through One: organizationinvitations, eventtypes, webhooksubscriptions, organizationmemberships, scheduledevents, inviteenoshows and more, 51 actions with real parameter documentation. Use whenever the user asks to look something up in Calendly, create or update a record there, or build code against the Calendly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: calendly
  generated-from: one-knowledge-base
---

# Calendly through One

Calendly is a scheduling automation platform that simplifies the process of booking meetings by allowing users to share availability and automatically sync events with their calendars.

One exposes Calendly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `calendly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Calendly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Calendly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Invitation | GET | `/organizations/{{orgUuid}}/invitations/{{uuid}}` | `conn_mod_def::GJ1CrYetXLc::IB0jwOCVQe6rjZaFj-1C1g` |
| List an Organization's Invitations | GET | `/organizations/{{uuid}}/invitations` | `conn_mod_def::GJ1CrwGVGPc::iCSSDkL-TDCJM1l0f50MmA` |
| Invite a User to an Organization | POST | `/organizations/{{uuid}}/invitations` | `conn_mod_def::GJ1CrpRp6-A::M5q92EMJTAS-9z7JHLlnpw` |
| Revoke an Organization Invitation | DELETE | `/organizations/{{orgUuid}}/invitations/{{uuid}}` | `conn_mod_def::GJ1CsHEZVAI::smguUEotThiTdixfTpzUSQ` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Type | GET | `/event_types/{{uuid}}` | `conn_mod_def::GJ1Cp55vpos::83I-hRC3SbmS-toxdNhBFA` |
| List a User's Event Types | GET | `/event_types` | `conn_mod_def::GJ1CqXgQaDM::Axz-At86SF-Z9PH0cP-x7Q` |
| Create Event Type | POST | `/event_types` | `conn_mod_def::GJ1CppwO9yE::rkpPoQD3QdyIqQds80y1jA` |
| Update an Event Type | PATCH | `/event_types/{{uuid}}` | `conn_mod_def::GJ1CqezM_nY::U6YKcUUsThSMt0DrlqKzJQ` |

### WebhookSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Subscription | GET | `/webhook_subscriptions/{{webhookUuid}}` | `conn_mod_def::GJ1Cu7eKMu8::5F7w7A86QXe2U54MGsbwEw` |
| List Webhook Subscriptions | GET | `/webhook_subscriptions` | `conn_mod_def::GJ1CvC9kza0::mNaO5hyxRgufjV9ngpJiwg` |
| Create Webhook Subscription | POST | `/webhook_subscriptions` | `conn_mod_def::GJ1Cui4-9r4::CdpG264lRFiyw1BO2XSeIg` |
| Delete a Webhook Subscription | DELETE | `/webhook_subscriptions/{{webhookUuid}}` | `conn_mod_def::GJ1CuqczQGk::-WMp0d0TRzOOyLXP34xKyA` |

### OrganizationMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Membership | GET | `/organization_memberships/{{uuid}}` | `conn_mod_def::GJ1CrfQugyo::0XAFAprySO2L4Px8ZYQMjA` |
| List Organization Memberships | GET | `/organization_memberships` | `conn_mod_def::GJ1Cr4r8rq8::YAUK1kD2Qzumu3B456Vd5g` |
| Remove a User from an Organization (by Membership UUID) | DELETE | `/organization_memberships/{{uuid}}` | `conn_mod_def::GJ1Cr_puMGc::XUf33mI6S-K9ZZZOqWZCqA` |

### ScheduledEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scheduled Event | GET | `/scheduled_events/{{uuid}}` | `conn_mod_def::GJ1Ctcepuks::DIogTZzNQjSjelZ3uUNSuw` |
| List Scheduled Events | GET | `/scheduled_events` | `conn_mod_def::GJ1Ct_k8rnk::drsZp-rYRNutesYvaXyxMQ` |
| Cancel a Scheduled Event (Create Cancellation) | POST | `/scheduled_events/{{uuid}}/cancellation` | `conn_mod_def::GJ1Cs6oD7tM::ESurb0t5QuSN6iUjkbEqpQ` |

### InviteeNoShows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invitee No Show | GET | `/invitee_no_shows/{{uuid}}` | `conn_mod_def::GJ1CtuhVU2c::RyvmXnGkRhCDvrwF2qNdlw` |
| Create Invitee No Show | POST | `/invitee_no_shows` | `conn_mod_def::GJ1CtM_7S6o::sp-T-q1RS0is_jtSaMt94g` |
| Delete an Invitee No Show | DELETE | `/invitee_no_shows/{{uuid}}` | `conn_mod_def::GJ1CtTc4ADA::4ZXqIYCzSfewN96AAerxLg` |

### RoutingForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Routing Form | GET | `/routing_forms/{{uuid}}` | `conn_mod_def::GJ1CsZT1sg0::-Q0FzyDhS5WQdbZwIO1jrw` |
| List an Organization’s Routing Forms | GET | `/routing_forms` | `conn_mod_def::GJ1CswXpwJg::TmSe5P6iSS6FH8oLqLgoGg` |

### RoutingFormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Routing Form Submission | GET | `/routing_form_submissions/{{uuid}}` | `conn_mod_def::GJ1CsfjsWpk::_PunOXueTwaxNIgt9iJJcg` |
| List Routing Form Submissions | GET | `/routing_form_submissions` | `conn_mod_def::GJ1CsnYWyK0::KN7FKUJAT6CYPRn2KSTqeg` |

### EventTypeAvailabilitySchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Type Availability Schedules | GET | `/event_type_availability_schedules` | `conn_mod_def::GJ1Co1GCO9s::no4shBakTOer-R-GrJMA1A` |
| Update an Event Type Availability Schedule | PATCH | `/event_type_availability_schedules` | `conn_mod_def::GJ1CpTERmXM::Aw3-N2DmQ_u6zjH5gsHayg` |

### UserAvailabilitySchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Availability Schedule | GET | `/user_availability_schedules/{{uuid}}` | `conn_mod_def::GJ1CosBOAfg::YN0iRMfKQquTscJy0r8ZwA` |
| List a User’s Availability Schedules | GET | `/user_availability_schedules` | `conn_mod_def::GJ1Co_Efz7c::Lv7iYB6kRfmbKVZ7DPX7Hw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/groups/{{uuid}}` | `conn_mod_def::GJ1CqmANPAg::3JgeMHbRQuG5vZJIPa7RJQ` |
| List Groups | GET | `/groups` | `conn_mod_def::GJ1CrChl3YM::xs-05bu6S3Og9p7OSViIcQ` |

### ScheduledEventInvitees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scheduled Event’s Invitee | GET | `/scheduled_events/{{eventUuid}}/invitees/{{inviteeUuid}}` | `conn_mod_def::GJ1CtnX_9gs::pghFL8D4R86kfXlL3_XygA` |
| List a Scheduled Event’s Invitees | GET | `/scheduled_events/{{uuid}}/invitees` | `conn_mod_def::GJ1Ct14BaDw::_7gdhEnERJe0AltyvEanUA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/users/{{uuid}}` | `conn_mod_def::GJ1CubXkK_M::pP-mC7yDSA-F5AimYD0Y3Q` |
| Get Current User | GET | `/users/me` | `conn_mod_def::GJ1CuU4b8Vc::7IQskt_KTzKutFpBIR2Uwg` |

### GroupRelationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Relationship | GET | `/group_relationships/{{uuid}}` | `conn_mod_def::GJ1Cqs9yKa8::KgfDQUBoSv2gVrRYi3GJEg` |
| List Group Relationships | GET | `/group_relationships` | `conn_mod_def::GJ1Cq7S-ysE::Rhjo1vHYRiWnoMLwnKOPuQ` |

### OutgoingCommunications

| Action | Method | Path | Action id |
|---|---|---|---|
| List Outgoing Communications | GET | `/outgoing_communications` | `conn_mod_def::GJ1CsSVGpG8::br6rNtsmR6iCEM41ZeblrA` |

### ActivityLogEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Activity Log Entries (Enterprise) | GET | `/activity_log_entries` | `conn_mod_def::GJ1ColBY1Ao::cBDk1M3xTM-YQvMgoKL57A` |

### UserBusyTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Busy Times | GET | `/user_busy_times` | `conn_mod_def::GJ1CpK9QsPs::CJBtwzzASTuvA6EZ2c-hHQ` |

### OneOffEventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create One-Off Event Type | POST | `/one_off_event_types` | `conn_mod_def::GJ1CpwOLsrU::PIbLJ4AGSYeaPd7mI1rg_Q` |

### EventTypeAvailableTimes

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Event Type’s Available Times | GET | `/event_type_available_times` | `conn_mod_def::GJ1CqCc6SUg::370RziS-S6yHQGawV39fRg` |

### Invitees

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Event Invitee | POST | `/invitees` | `conn_mod_def::GJ1CtE8F3hM::zxTv83Y0Tdi7FFCPiRtdGw` |

### SchedulingLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Single-Use Scheduling Link | POST | `/scheduling_links` | `conn_mod_def::GJ1CuHLdNd0::r6IHyGt4TUS4iad52JivEg` |

### Shares

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Share (Customize Once and Share) | POST | `/shares` | `conn_mod_def::GJ1CuONAy7s::QsvlUs0mQYqV7TxEFJei0w` |

### SampleWebhookData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sample Webhook Data | GET | `/sample_webhook_data` | `conn_mod_def::GJ1Cuzindbs::VrYzSPP_THaaHD4iMjKpLQ` |

### DataComplianceDeletionInvitees

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Invitee Data (Organization-Wide) | POST | `/data_compliance/deletion/invitees` | `conn_mod_def::GJ1CpaySjns::xDQD0F2hRaWUUk1oFV9owA` |

### DataComplianceDeletionEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Scheduled Event Data (Data Compliance) | POST | `/data_compliance/deletion/events` | `conn_mod_def::GJ1CpiFZPjA::dxHlXcXGSMapKR2L4iWMPg` |

### EventTypeMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Type Hosts (Event Type Memberships) | GET | `/event_type_memberships` | `conn_mod_def::GJ1CqNWHm20::WDqcsuxLTLmsV8CWZgWndA` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Meeting Locations | GET | `/locations` | `conn_mod_def::GJ1CrJZyUIM::EY62Vum4SRmst40YOPw2Bw` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/organizations/{{uuid}}` | `conn_mod_def::GJ1CrQ_lzFI::1kwd8uLtQMqwnl66vER7NA` |

## When a call fails

The error comes from Calendly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/calendly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
