---
name: brex
description: Brex combines corporate cards, business accounts, expense management, bill pay, and travel booking into a single AI-powered financial operations platform—offering unified spend control, real-time visibility, automated workflows, and modern treasury tools designed for startups and enterprises across 120+ countries. Read and write Brex data through One: budgets, cards, fields, users, webhookgroups, spendlimits and more, 107 actions with real parameter documentation. Use whenever the user asks to look something up in Brex, create or update a record there, or build code against the Brex API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: brex
  generated-from: one-knowledge-base
---

# Brex through One

Brex combines corporate cards, business accounts, expense management, bill pay, and travel booking into a single AI-powered financial operations platform—offering unified spend control, real-time visibility, automated workflows, and modern treasury tools designed for startups and enterprises across 120+ countries.

One exposes Brex through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `brex` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Brex is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Brex account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Budgets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Budget by ID | GET | `/v2/budgets/{{id}}` | `conn_mod_def::GJ094hSR8nE::Z4He1qh-SfGiP8JuXyLXww` |
| Get a Spend Limit by ID | GET | `/v1/budgets/{{id}}` | `conn_mod_def::GJ09-jcQaTU::ZmKtsfSmQOyi8XzCA4luzw` |
| List Budgets | GET | `/v2/budgets` | `conn_mod_def::GJ094q6dtMY::1uQwvjk6R928D49LMnzCrw` |
| List Spend Limits | GET | `/v1/budgets` | `conn_mod_def::GJ09-qOKmWE::oFeeoTxJQku6eUilAEGYQA` |
| Archive a Budget | POST | `/v2/budgets/{{id}}/archive` | `conn_mod_def::GJ094RIHbtQ::VnWj4-OmSYewvpL6Uur_8w` |
| Archive a Spend Limit | POST | `/v1/budgets/{{id}}/archive` | `conn_mod_def::GJ09-SSCsRM::atiUQpjvTFSlLRcGfzVBBA` |
| Create a Spend Limit | POST | `/v1/budgets` | `conn_mod_def::GJ09-aEiULY::G5M1llCBTEm4DWpYPpI49A` |
| Create Budget | POST | `/v2/budgets` | `conn_mod_def::GJ094Z8EAKM::_MF_lncnRcO0Fr2Cuor5jA` |
| Update a Budget | PUT | `/v2/budgets/{{id}}` | `conn_mod_def::GJ094y8cYgw::OrUQReSGQqyXexDH-ie8iQ` |
| Update a Spend Limit | PUT | `/v1/budgets/{{id}}` | `conn_mod_def::GJ09-yXPMqU::LYPOEFUoSzy6snCkEFLzTw` |

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Card by ID | GET | `/v2/cards/{{id}}` | `conn_mod_def::GJ095qR_g1A::S1bdeKmfSY2UULkfPz4FhQ` |
| Get a Card’s PAN Details (Number, CVV, Expiration) by Card ID | GET | `/v2/cards/{{id}}/pan` | `conn_mod_def::GJ095xhI9E0::LNnZWV98SMOHeSTWUghA5w` |
| List a User's Cards | GET | `/v2/cards` | `conn_mod_def::GJ0957OpT8c::C6Pta84jR9mOSEIbNvsLZQ` |
| Create Card | POST | `/v2/cards` | `conn_mod_def::GJ095bDDDVk::LcleiXRPSGCbxp6T-Ey0OA` |
| Create Secure Email to Send a Card Number | POST | `/v2/cards/{{id}}/secure_email` | `conn_mod_def::GJ095jUdSSg::AxkEqJyIS1y5v7CnhGfu3g` |
| Lock a Card | POST | `/v2/cards/{{id}}/lock` | `conn_mod_def::GJ096EFZiD8::VYkaHzkCS82WHo1TUy1YnA` |
| Terminate a Card | POST | `/v2/cards/{{id}}/terminate` | `conn_mod_def::GJ096MkXwuo::Ea8INFq6Q8qJv22Eim2XCQ` |
| Unlock a Card | POST | `/v2/cards/{{id}}/unlock` | `conn_mod_def::GJ096U9kb0k::ygqaRoRBS9u1kHT9mxSs4g` |
| Update a Card | PUT | `/v2/cards/{{id}}` | `conn_mod_def::GJ096dUt9rA::3QD34XwtS0Kf6o_rO9sQyw` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field by ID | GET | `/v1/fields/{{id}}` | `conn_mod_def::GJ098cFzsT4::kjprY9IYQQqCrJ4jMsqmoQ` |
| List Custom Fields | GET | `/v1/fields` | `conn_mod_def::GJ098jpRfZ0::HwPEaaKiRaaOcdD9Q3Gl9g` |
| Create a Custom Field | POST | `/v1/fields` | `conn_mod_def::GJ098OVll-M::4BfehzxESoScoQ0DdGUnfw` |
| Delete a Custom Field | DELETE | `/v1/fields/{{id}}` | `conn_mod_def::GJ098VLn0-A::1kGrEdWlTQCd7TnarYZ41A` |
| Delete Custom Field Values for a Field | DELETE | `/v1/fields/{{fieldId}}/values` | `conn_mod_def::GJ097r1GRbA::sFkOimd2QaKNdTjMl4UkRA` |
| Update a Custom Field by ID | PUT | `/v1/fields/{{id}}` | `conn_mod_def::GJ098re5A20::Btz8COYhTGeGm4zfv7HGsQ` |
| Update Custom Field Values for a Field | PUT | `/v1/fields/{{fieldId}}/values` | `conn_mod_def::GJ098HZye_g::dVSg9uS3TKeaVhQlsPwA6Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/v2/users/{{id}}` | `conn_mod_def::GJ0-BWEsxw0::68flA6RlT7q-tGYihTmgYQ` |
| Get a User's Monthly Limit | GET | `/v2/users/{{id}}/limit` | `conn_mod_def::GJ0-BMiy6CY::NweIPpT6SAyvZ4sM0imBmw` |
| Get Current User (Me) | GET | `/v2/users/me` | `conn_mod_def::GJ0-BFh4i10::IXrOiqwHQOK5iRLIIX4BYg` |
| List Users | GET | `/v2/users` | `conn_mod_def::GJ0-BnrPjkQ::Q-e0PfRqRhORLFrV4dYVSQ` |
| Invite a User (Create Employee User) | POST | `/v2/users` | `conn_mod_def::GJ0-BdpzCk0::siTev4WbSW2SXSqXhoakDg` |
| Set a User’s Monthly Limit | POST | `/v2/users/{{id}}/limit` | `conn_mod_def::GJ0-Bu1Sw18::IMszeI5rQcWiSmTV4P3kXQ` |
| Update a User | PUT | `/v2/users/{{id}}` | `conn_mod_def::GJ0-B2IRdY8::We8zScfjSd6YbkYz6c6Fdw` |

### WebhookGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Group | GET | `/v1/webhooks/groups/{{id}}` | `conn_mod_def::GJ0-C0iZzHg::xzvmyA_kQuK7ITa7kYPfdg` |
| List Webhook Groups | GET | `/v1/webhooks/groups` | `conn_mod_def::GJ0-DIa_9bs::MDYtbqQyRRWLUGEOgQUVkw` |
| Add Members to a Webhook Group | POST | `/v1/webhooks/groups/{{id}}/add_members` | `conn_mod_def::GJ0-Cfo1R-o::gqGL-7D-R8-1p9aq4xHTXQ` |
| Create Webhook Group | POST | `/v1/webhooks/groups` | `conn_mod_def::GJ0-CnclD-g::_UVxPqwaQZqe70Ryf3wbmg` |
| Delete a Webhook Group | DELETE | `/v1/webhooks/groups/{{id}}` | `conn_mod_def::GJ0-Ct-Ky5k::gqqcZaQ_SZWsFSqDZFL_6g` |
| Remove Members from a Webhook Group | POST | `/v1/webhooks/groups/{{id}}/remove_members` | `conn_mod_def::GJ0-DP4eMvc::i88rXJFbQgqoYwqzgwytHw` |

### SpendLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Spend Limit by ID | GET | `/v2/spend_limits/{{id}}` | `conn_mod_def::GJ09_In2RyI::LvSNpbBbQ1qY46Tgs1dWvg` |
| List Spend Limits | GET | `/v2/spend_limits` | `conn_mod_def::GJ09_S1cUAI::ZKwYdk58StmuqRG3G_sESw` |
| Archive a Spend Limit | POST | `/v2/spend_limits/{{id}}/archive` | `conn_mod_def::GJ09-5-NW48::PDKBAUb3R82PvGVW7JrwtA` |
| Create a Spend Limit | POST | `/v2/spend_limits` | `conn_mod_def::GJ09_BT98E0::Lm1l00KvRzifamScj3fI2A` |
| Update a Spend Limit | PUT | `/v2/spend_limits/{{id}}` | `conn_mod_def::GJ09_akvas4::dxnurbUlS9eSosHSMCXrKQ` |

### Vendors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vendor by ID | GET | `/v1/vendors/{{id}}` | `conn_mod_def::GJ0-CJuCKUQ::TjPoRtC1TvW5cwAWnIkHpQ` |
| List Vendors | GET | `/v1/vendors` | `conn_mod_def::GJ0-CQ8zLE0::i4jAiDt8Q7ijS-f0tEP7rA` |
| Create a Vendor | POST | `/v1/vendors` | `conn_mod_def::GJ0-B818eQs::vrRMP0NwRHiK5vAgEzr9-w` |
| Delete a Vendor | DELETE | `/v1/vendors/{{id}}` | `conn_mod_def::GJ0-CDi1Cyk::wRcWezJUTBS2IVYjriqcZw` |
| Update a Vendor by ID | PUT | `/v1/vendors/{{id}}` | `conn_mod_def::GJ0-CYYMraQ::lxXAWbAUSyu1WOf2tltEfQ` |

### AccountingRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Accounting Record by ID | GET | `/v3/accounting/records/{{recordId}}` | `conn_mod_def::GJ0923uFS6I::_EmPvppoR_204Pq8BCOIug` |
| Query Accounting Records | GET | `/v3/accounting/records` | `conn_mod_def::GJ093BIFOpc::uJPuqrHdSreZhlkuRBfOsQ` |
| Report Accounting Export Results | POST | `/v3/accounting/records/export-results` | `conn_mod_def::GJ093JAcjVg::t-l1880GT0On7KK8MN-OFA` |

### CashAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cash Account by ID | GET | `/v2/accounts/cash/{{id}}` | `conn_mod_def::GJ093QJF94w::K2EZflKJSZSeBMsZ4FHOKA` |
| Get Primary Cash Account | GET | `/v2/accounts/cash/primary` | `conn_mod_def::GJ093Z9RFtQ::VbimbEyuQxGLc4cF3BUMog` |
| List Cash Accounts | GET | `/v2/accounts/cash` | `conn_mod_def::GJ093wPzYr4::0a03YGaYQ26Y4Y7ooC3xpw` |

### CardExpenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Card Expense (Deprecated) | GET | `/v1/expenses/card/{{expenseId}}` | `conn_mod_def::GJ094-oyHxA::8ZLT6C0NQUq9MUbapNOV4Q` |
| List Card Expenses (Deprecated) | GET | `/v1/expenses/card` | `conn_mod_def::GJ095LnbzvY::PpIyAglWQ4-tYKe1x0AXGQ` |
| Update a Card Expense | PUT | `/v1/expenses/card/{{expenseId}}` | `conn_mod_def::GJ095TN566o::fFaJD2aiQZGpPRY85MgNeA` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Department by ID | GET | `/v2/departments/{{id}}` | `conn_mod_def::GJ0968IOP_s::x7giJ4UeRU-HQIKPLfnnyw` |
| List Departments | GET | `/v2/departments` | `conn_mod_def::GJ097D5fbk8::DOA-wx7ZSoCrIDxiOKDOTw` |
| Create a Department | POST | `/v2/departments` | `conn_mod_def::GJ096wZQjL0::N3M9cF_fQI2AGopMCt7RTw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Location by ID | GET | `/v2/locations/{{id}}` | `conn_mod_def::GJ099Tbk_6Q::2nGPYn1-T-igp_hGIuenJw` |
| List Locations | GET | `/v2/locations` | `conn_mod_def::GJ099a0inm8::bQ0hI4QYRIeoCIKDK_fYbw` |
| Create a Location | POST | `/v2/locations` | `conn_mod_def::GJ099Mshx74::EesIgOV3Q32sBV410aPYBA` |

### Referrals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Referral by ID | GET | `/v1/referrals/{{id}}` | `conn_mod_def::GJ09-CB4hy0::KosZEak9RKK-p71KOAwpCA` |
| List Referrals | GET | `/v1/referrals` | `conn_mod_def::GJ09-LNCCNA::5fOtI1u8Q0qRN6xis5GsFA` |
| Create a Referral | POST | `/v1/referrals` | `conn_mod_def::GJ0994trJYk::rXBxH9urSrm_PtpkCQr9Sw` |

### Titles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Title by ID | GET | `/v2/titles/{{id}}` | `conn_mod_def::GJ09_oCbYmc::r2T_FfoNSUOaM1lACPD3yg` |
| List Titles | GET | `/v2/titles` | `conn_mod_def::GJ09_xi0pgg::Ff9Sp2qHR_-lSkWc0MFLHg` |
| Create Title | POST | `/v2/titles` | `conn_mod_def::GJ09_hrGH7c::ZFpUdxmJQWKWUhsgPg6Fwg` |

### Transfers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transfer by ID | GET | `/v1/transfers/{{id}}` | `conn_mod_def::GJ0-AZHSgG0::eQJcLhUbRbyW3eF2Rl0g4g` |
| List Transfers | GET | `/v1/transfers` | `conn_mod_def::GJ0-AhHYLi0::pIYcmKy7TwC-CwgISi4sJg` |
| Create a Transfer | POST | `/v1/transfers` | `conn_mod_def::GJ0-AR7RCds::yH4ECUvZRAWttp7Nmhq-KA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/v1/webhooks` | `conn_mod_def::GJ0-DmclgXs::g34Xt9SoQuuQQWdk4EXZcQ` |
| Register a Webhook Subscription | POST | `/v1/webhooks` | `conn_mod_def::GJ0-DtrCIsg::65NaMVHAR6CQ0VAk7h8qDQ` |
| Unregister a Webhook Subscription | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GJ0-D0gLrHU::-IfWQwPOQpGltc5CApahRw` |

### AccountingIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Disconnect an Accounting Integration | POST | `/v3/accounting/integration/{{integrationId}}/disconnect` | `conn_mod_def::GJ092m79CGU::IUufMP50SKWxFw4qfIivnw` |
| Reactivate an Accounting Integration | POST | `/v3/accounting/integration/{{integrationId}}/reactivate` | `conn_mod_def::GJ092v69bNo::aWHwOaOVSJmG7LjW46br5A` |

### BudgetPrograms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Budget Program by ID | GET | `/v1/budget_programs/{{id}}` | `conn_mod_def::GJ094A5dTng::oNcKTqJETgCAOz9UiBcNgg` |
| List Budget Programs | GET | `/v1/budget_programs` | `conn_mod_def::GJ094JurFNY::OvIkMHe2S4qI646WCjvuEA` |

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Expense | GET | `/v1/expenses/{{id}}` | `conn_mod_def::GJ097Lsr2hw::4g33DV8xSOiEZTXeufIweQ` |
| List Expenses | GET | `/v1/expenses` | `conn_mod_def::GJ097YIcyGU::TP-jfrcmSt-m0zqjKZw9YA` |

### CustomFieldValues

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Custom Field’s Values | GET | `/v1/fields/{{fieldId}}/values` | `conn_mod_def::GJ0978k3IFo::ZsUnqqeHT-CNrZn8yMaqsw` |
| Create Values for a Custom Field | POST | `/v1/fields/{{fieldId}}/values` | `conn_mod_def::GJ097gw-QSI::iYgs6MuSQvWeRl9zWoOnnA` |

### LegalEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Legal Entity | GET | `/v2/legal_entities/{{id}}` | `conn_mod_def::GJ0982Zso6E::uOMOAh-QQw2i9GfVF6-Muw` |
| List Legal Entities | GET | `/v2/legal_entities` | `conn_mod_def::GJ0989jTCLs::0F31SOIpRhWi-4HmF3-uzg` |

### TripBookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Trip Booking | GET | `/v1/trips/{{tripId}}/bookings/{{bookingId}}` | `conn_mod_def::GJ0-AqL91cc::n6e_yag-TaGsU_PhHUsuig` |
| List a Trip’s Bookings | GET | `/v1/trips/{{tripId}}/bookings` | `conn_mod_def::GJ0-A3du5LQ::kgcZM8q2Q1Gz0Ke0BrIJfg` |

### Trips

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Trip by ID | GET | `/v1/trips/{{tripId}}` | `conn_mod_def::GJ0-Awavz7k::HRlOtYUeRsuJG_SnxNnghw` |
| List Trips | GET | `/v1/trips` | `conn_mod_def::GJ0-A_EQEBQ::sEW9aPEtT_qE1_Fx6SwdQw` |

This lists 90 of 107 actions. For anything not here, call `search_one_platform_actions` with platform `brex`. The full catalog is at https://www.withone.ai/knowledge/brex.

## When a call fails

The error comes from Brex, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/brex

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
