---
name: cal-com
description: Cal.com is an open scheduling platform that helps individuals and teams book meetings efficiently by offering customizable, timezone-aware booking links that integrate seamlessly with calendars and workflows. Read and write Cal data through One: bookings, schedules, webhooks, eventtypes, workflows, calendars and more, 280 actions with real parameter documentation. Use whenever the user asks to look something up in Cal, create or update a record there, or build code against the Cal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cal-com
  generated-from: one-knowledge-base
---

# Cal through One

Cal.com is an open scheduling platform that helps individuals and teams book meetings efficiently by offering customizable, timezone-aware booking links that integrate seamlessly with calendars and workflows.

One exposes Cal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cal-com` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking | GET | `/bookings/{{bookingUid}}` | `conn_mod_def::GJ1AA3n_bzA::oRYQy2CjSQW3n_ucn76q0A` |
| Get a Booking by Seat UID | GET | `/bookings/by-seat/{{seatUid}}` | `conn_mod_def::GJ1ABCpRfSc::imUGh_uRTcCAgYV4YwzouQ` |
| Get Calendar Links for a Booking | GET | `/bookings/{{bookingUid}}/calendar-links` | `conn_mod_def::GJ1ABLc7MTc::t-tyD8uPTfGl4ZeW5fQL3w` |
| List a Team’s Bookings | GET | `/teams/{{teamId}}/bookings` | `conn_mod_def::GJ1AjMn7ydk::Utdm1h2OSdWB7fKR3qofdw` |
| List an Organization Team’s Bookings | GET | `/organizations/{{orgId}}/teams/{{teamId}}/bookings` | `conn_mod_def::GJ1AToh4fF8::nYySZbelS8-xDXNMLnqsDA` |
| List an Organization User’s Bookings | GET | `/organizations/{{orgId}}/users/{{userId}}/bookings` | `conn_mod_def::GJ1AdGQPtXQ::tkLainovSOuWfszbab_LHg` |
| List an Organization’s Bookings | GET | `/organizations/{{orgId}}/bookings` | `conn_mod_def::GJ1APHkreVo::0zw7V-bHTgCaOQBvjS0arg` |
| List Bookings | GET | `/bookings` | `conn_mod_def::GJ1ABacT6P4::TQSYRwLQT02RtPGc25_8Qg` |
| Add Guests to a Booking | POST | `/bookings/{{bookingUid}}/guests` | `conn_mod_def::GJ1ADVfo8DA::yF5bzl5qSBOs8ATjZuteKw` |
| Cancel a Booking | POST | `/bookings/{{bookingUid}}/cancel` | `conn_mod_def::GJ1AAJ3FZnc::t5FdItQnR5G-wTdyXg7Yyw` |
| Confirm a Booking | POST | `/bookings/{{bookingUid}}/confirm` | `conn_mod_def::GJ1AASe48L0::YM8pg7eUTtaCT7O6mc-wLQ` |
| Create a Booking | POST | `/v2/bookings` | `conn_mod_def::GJ1AAj_wmBI::YGhi0tsiQrup-PPSYLzi_Q` |

6 more Bookings actions are available through search.

### Schedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Schedule | GET | `/schedules/{{scheduleId}}` | `conn_mod_def::GJ1AgYj-KNY::Vu4b7hIdTBGi7PFdxyzptA` |
| Get Default Schedule (Authenticated User) | GET | `/schedules/default` | `conn_mod_def::GJ1Agojy9DY::XqAIrpyfSAeu-RLt0Vr0NA` |
| List a Team Member’s Schedules (Organization → Team → User) | GET | `/organizations/{{orgId}}/teams/{{teamId}}/users/{{userId}}/schedules` | `conn_mod_def::GJ1AaxaD48w::rT88d3y3QiKgBDya7sA9HA` |
| List a Team’s Member Schedules (Organization) | GET | `/organizations/{{orgId}}/teams/{{teamId}}/schedules` | `conn_mod_def::GJ1AZ7wyz90::qe_YIT_PQFC_s2X8en4yYw` |
| List a User’s Schedules in an Organization | GET | `/organizations/{{orgId}}/users/{{userId}}/schedules` | `conn_mod_def::GJ1AeaY1oMY::ypkCoqxMRVuO2Yr6KTxICQ` |
| List an Organization’s Schedules | GET | `/organizations/{{orgId}}/schedules` | `conn_mod_def::GJ1ASdu64k8::copvZ2PdSwKXAhU0g_shuQ` |
| List Schedules | GET | `/v2/schedules` | `conn_mod_def::GJ1AggzlvmI::T-Mwy1vIRi-lJ0NuZxbkww` |
| Create a Schedule for the Authenticated User | POST | `/schedules` | `conn_mod_def::GJ1AgHxGCME::2wlSMvMRReG6BZK8EgJsHw` |
| Create a User Schedule (in an Organization) | POST | `/organizations/{{orgId}}/users/{{userId}}/schedules` | `conn_mod_def::GJ1AeA9XsEI::WuiTga8SRRGrYC3966I3-w` |
| Delete a Schedule | DELETE | `/schedules/{{scheduleId}}` | `conn_mod_def::GJ1AgQf3NrU::5baB0s9pR8ObnJfxqI5CcQ` |
| Update a Schedule | PATCH | `/schedules/{{scheduleId}}` | `conn_mod_def::GJ1Agx4bsFY::yIOnTyqZTAmzWSz9QEPx1w` |
| Update a User’s Schedule in an Organization | PATCH | `/organizations/{{orgId}}/users/{{userId}}/schedules/{{scheduleId}}` | `conn_mod_def::GJ1AejENdZ4::SHGtOTXtQL-T7b6xbFj9JQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ1Apq-7Rfg::eScdn-NWTsW6K9kZDs58zw` |
| Get a Webhook for a Team Event Type | GET | `/teams/{{teamId}}/event-types/{{eventTypeId}}/webhooks/{{webhookId}}` | `conn_mod_def::GJ1Ak11JrMA::RA3LQfHCQtKHjLNO-TnSKA` |
| List Webhooks (Authenticated User) | GET | `/v2/webhooks` | `conn_mod_def::GJ1Ap0iJr-Q::IyO68aG9StOyOVMkK04RxA` |
| List Webhooks for a Team Event Type | GET | `/teams/{{teamId}}/event-types/{{eventTypeId}}/webhooks` | `conn_mod_def::GJ1Ak_K7WeM::H2XGK2ioTFGepX5ljA9z2g` |
| Create a Webhook | POST | `/v2/webhooks` | `conn_mod_def::GJ1ApbR5-5s::oNMrivDlQFC8w6_COZxG3Q` |
| Create a Webhook for a Team Event Type | POST | `/teams/{{teamId}}/event-types/{{eventTypeId}}/webhooks` | `conn_mod_def::GJ1AkV9LJWg::cWOcSVgBTTKm7Vw4SGoZCQ` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ1ApjM7JQU::U3BAedpmRYKw-kZdlQPS6w` |
| Delete All Webhooks for a Team Event Type | DELETE | `/teams/{{teamId}}/event-types/{{eventTypeId}}/webhooks` | `conn_mod_def::GJ1AkqxfkoU::d00eWqeNRVmTuSHdTKuITg` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ1Ap8rfLss::DUTDl1Q0S1S8cHPZmpHORQ` |

### EventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Event Type (in an Organization) | GET | `/organizations/{{orgId}}/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AVZFO088::_G12fOmuT_-idYoBtFaQiA` |
| Get an Event Type by ID | GET | `/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AI2TjJvM::cjrjxEpRS_KoMlSxbgmZcA` |
| List a Team’s Event Types (in an Organization) | GET | `/organizations/{{orgId}}/teams/{{teamId}}/event-types` | `conn_mod_def::GJ1AVh20yBA::gaDJObIOTbSmDzG9tpMs8w` |
| List Event Types | GET | `/v2/event-types` | `conn_mod_def::GJ1AIttlHew::eRhyfhySRPqVF2J0s_KUqg` |
| Create a Team Event Type in an Organization | POST | `/organizations/{{orgId}}/teams/{{teamId}}/event-types` | `conn_mod_def::GJ1AU8Qt2AY::pbw9OYOHQyCYcF0_iV_iXA` |
| Create an Event Type | POST | `/event-types` | `conn_mod_def::GJ1AIbELiBs::alhVlO89Sm-JIhLg71S17Q` |
| Delete an Event Type | DELETE | `/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AIjRQOTk::t1XEQ6q5TyWGRIKLX81b2A` |
| Update an Event Type | PATCH | `/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AI-FnASY::-_oYng7LR0Wjj9Wa03LZWg` |
| Update an Organization Team Event Type | PATCH | `/organizations/{{orgId}}/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AVzG8Hag::IOsQ1d0xRrmAIQ1yu5Le7Q` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Team Routing-Form Workflow | GET | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/{{workflowId}}/routing-form` | `conn_mod_def::GJ1Abngz7-M::KyyWFc_hTem5GClO37EXeA` |
| Get an Organization Team Workflow (by ID) | GET | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/{{workflowId}}` | `conn_mod_def::GJ1AbcGbev8::f-xhA2vPS_Sc6NhQ6qaJ0A` |
| List an Organization Team’s Routing Form Workflows | GET | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/routing-form` | `conn_mod_def::GJ1Ab9OBYqI::PyOC2oN7Q-WtEZfkkWsopQ` |
| List an Organization Team’s Workflows | GET | `/organizations/{{orgId}}/teams/{{teamId}}/workflows` | `conn_mod_def::GJ1AbzcU_vM::XimpOnVDSuO65IistkUjmQ` |
| Create an Organization Team Event-Type Workflow | POST | `/organizations/{{orgId}}/teams/{{teamId}}/workflows` | `conn_mod_def::GJ1Aa6LuZ1M::v0moxEbURQKTrKETLbhXGw` |
| Create an Organization Team Routing Form Workflow | POST | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/routing-form` | `conn_mod_def::GJ1AbDXAo90::HQlL0EMiQ9erivJDyq5ARA` |
| Delete an Organization Team Workflow | DELETE | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/{{workflowId}}` | `conn_mod_def::GJ1AbTFmrU0::Y6tP7XsLRQqMedLJHp2MtQ` |
| Update an Organization Team Routing Form Workflow | PATCH | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/{{workflowId}}/routing-form` | `conn_mod_def::GJ1AcGbdGXQ::iHpSCZBNRA2o99B4Uiav7Q` |
| Update an Organization Team Workflow | PATCH | `/organizations/{{orgId}}/teams/{{teamId}}/workflows/{{workflowId}}` | `conn_mod_def::GJ1AcOR_8iY::Ux7WfD5kS7ua6vduSs5Pig` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Calendar Connection | GET | `/calendars/{{calendar}}/check` | `conn_mod_def::GJ1ADxu2y3A::gMXC1dYiQHeqxppefgrdBw` |
| Check an ICS Feed | GET | `/calendars/ics-feed/check` | `conn_mod_def::GJ1AD5oeEOc::nLW1Ma10TiqiUCvsTsXhTg` |
| Get a Calendar OAuth Connect URL | GET | `/calendars/{{calendar}}/connect` | `conn_mod_def::GJ1AEgPC4y4::Qkx9EUkIR6KcuRV0CiTPYg` |
| Get Busy Times for Calendars | GET | `/calendars/busy-times` | `conn_mod_def::GJ1AEXHq37A::q27nG-LuQ22yjUsmyxUSSw` |
| List Calendars | GET | `/calendars` | `conn_mod_def::GJ1AEL8bDlI::cKdHEf8fTsOiinRDcY0XZg` |
| Save a Calendar Provider’s Credentials | GET | `/calendars/{{calendar}}/save` | `conn_mod_def::GJ1AE4MbNhc::7ugsCsHoT0aXiJwNeh_JWg` |
| Disconnect a Calendar Credential | POST | `/calendars/{{calendar}}/disconnect` | `conn_mod_def::GJ1AEBVQ5Ng::GpUSWhtvSa2SDa160UdbWg` |
| Save an ICS Feed to a Calendar | POST | `/calendars/ics-feed/save` | `conn_mod_def::GJ1AEok_dbA::shWx67zaT1CjCIkhwYoqjg` |
| Save Apple Calendar Credentials for a Calendar | POST | `/calendars/{{calendar}}/credentials` | `conn_mod_def::GJ1AEwrLhjI::ROeCG5guSoapnH5RuF0zVA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/teams/{{teamId}}` | `conn_mod_def::GJ1AiwoecZs::ZmBH_1vyQRyHdx0hHaWS2g` |
| List an Organization’s Teams | GET | `/organizations/{{orgId}}/teams` | `conn_mod_def::GJ1ATA2WFL0::MYUjSWbpRLKDejNqbUmpHA` |
| List Teams | GET | `/teams` | `conn_mod_def::GJ1Ai4xU3_E::a0-QQ-bcSZm7OW46Wn9Yug` |
| List the Authenticated User’s Teams in an Organization | GET | `/organizations/{{orgId}}/teams/me` | `conn_mod_def::GJ1ATKtzejE::DywpCaplSay1CMl4CpHYrQ` |
| Create a Team | POST | `/teams` | `conn_mod_def::GJ1AiWbvjKM::1dSiY8G3T82ZxziLqWpopg` |
| Create a Team in an Organization | POST | `/organizations/{{orgId}}/teams` | `conn_mod_def::GJ1ASmfvYOI::BrIOqMZZS3G6_Zo6CyGYvg` |
| Delete a Team | DELETE | `/teams/{{teamId}}` | `conn_mod_def::GJ1AifwC7e4::rkoxHv95Q1KTz9R2L_Krpw` |
| Update a Team | PATCH | `/teams/{{teamId}}` | `conn_mod_def::GJ1AjAz16pE::yMhlV0YURkiukcDdbcVkzg` |

### TeamEventTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Event Type | GET | `/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1Aj6JIku4::FUPGmrTmQXme1bIxD57A7g` |
| List a Team’s Event Types | GET | `/teams/{{teamId}}/event-types` | `conn_mod_def::GJ1AkDfQLL0::NX_GqYK_Q7CPTDJmUNeSmg` |
| List an Organization’s Teams’ Event Types | GET | `/organizations/{{orgId}}/teams/event-types` | `conn_mod_def::GJ1AVQiEXeE::e1U1bocMQvSe13oCcOI1zQ` |
| Create a Team Event Type | POST | `/teams/{{teamId}}/event-types` | `conn_mod_def::GJ1AjolQLwc::cSun_6x6QNaB9fsGCPpVGw` |
| Delete a Team Event Type | DELETE | `/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AjxmSSaU::vbbFE4amREGomo4NiYggLg` |
| Delete a Team Event Type (in an Organization) | DELETE | `/organizations/{{orgId}}/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AVGzGitU::xu5JopRHSVaZm0IxZ_V2tw` |
| Update a Team Event Type | PATCH | `/teams/{{teamId}}/event-types/{{eventTypeId}}` | `conn_mod_def::GJ1AkMGcRXM::9xFvoZHnQbSw-CNWcRadNw` |

### OrganizationAttributeOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization Attribute Options for a User | GET | `/organizations/{{orgId}}/attributes/options/{{userId}}` | `conn_mod_def::GJ1AOmY2aB8::UMkTBJwxSmGNyEPUDPiYGA` |
| List an Organization Attribute’s Options | GET | `/organizations/{{orgId}}/attributes/{{attributeId}}/options` | `conn_mod_def::GJ1AOek-gDg::UHa0RrhpQ8yK5mT5qQazcw` |
| Assign an Attribute Option to a User in an Organization | POST | `/organizations/{{orgId}}/attributes/options/{{userId}}` | `conn_mod_def::GJ1ANsxBCcY::UOVRydYhTKK4iFo7sg4Zpg` |
| Create an Organization Attribute Option | POST | `/organizations/{{orgId}}/attributes/{{attributeId}}/options` | `conn_mod_def::GJ1AN2Wv7-E::mslFYfHIRMGGgMgzjF13oA` |
| Delete an Organization Attribute Option | DELETE | `/organizations/{{orgId}}/attributes/{{attributeId}}/options/{{optionId}}` | `conn_mod_def::GJ1AN-0s4fs::FvcAEt95TI-1I-KR8uVPQA` |
| Unassign an Attribute Option from a User in an Organization | DELETE | `/organizations/{{orgId}}/attributes/options/{{userId}}/{{attributeOptionId}}` | `conn_mod_def::GJ1AOwla52M::PaRvjIk4QzaUaY7m6ozGcQ` |
| Update an Organization Attribute Option | PATCH | `/organizations/{{orgId}}/attributes/{{attributeId}}/options/{{optionId}}` | `conn_mod_def::GJ1AO41n3Rk::aA8A1TzmSc2mEXlZApk-ug` |

### VerifiedResourcesPhones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Verified Phone Number (by ID) in an Organization | GET | `/organizations/{{orgId}}/teams/{{teamId}}/verified-resources/phones/{{id}}` | `conn_mod_def::GJ1AMMZT2JU::jLmFp6IlReKHFh_neD7rkw` |
| Get a Verified Phone Number by ID | GET | `/verified-resources/phones/{{id}}` | `conn_mod_def::GJ1AokZOu0Q::wGhwWJdMQ-S3BcHQc_8AWA` |
| List Verified Phone Numbers | GET | `/verified-resources/phones` | `conn_mod_def::GJ1AoTUFkx0::pgRo3QK5T8SxcQOdsjTqJQ` |
| Verify a Phone Number (Using Verification Code) | POST | `/verified-resources/phones/verification-code/verify` | `conn_mod_def::GJ1ApIylDFg::zEXKbj6GTa2OrsyIWd-9-g` |
| Verify a Team’s Phone Number (Verified Resources) | POST | `/teams/{{teamId}}/verified-resources/phones/verification-code/verify` | `conn_mod_def::GJ1An4qCHKY::D2Ac3PPPQ6eHTWKo40rQfw` |
| Verify an Organization Team’s Phone Number | POST | `/organizations/{{orgId}}/teams/{{teamId}}/verified-resources/phones/verification-code/verify` | `conn_mod_def::GJ1AMq0e8DA::e5kgNrOBR9Ok55p8TKWgpw` |

### Conferencing

| Action | Method | Path | Action id |
|---|---|---|---|
| Conferencing App OAuth Callback (Save) | GET | `/conferencing/{{app}}/oauth/callback` | `conn_mod_def::GJ1AFA6VtFY::mRkswQLsQty1xQeCt6Figw` |
| Get Default Conferencing Application | GET | `/conferencing/default` | `conn_mod_def::GJ1AFhVBrjo::9R76Wgy0T6muU986-yqOOw` |

4 more Conferencing actions are available through search.

This lists 90 of 280 actions. For anything not here, call `search_one_platform_actions` with platform `cal-com`. The full catalog is at https://www.withone.ai/knowledge/cal-com.

## When a call fails

The error comes from Cal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cal-com

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
