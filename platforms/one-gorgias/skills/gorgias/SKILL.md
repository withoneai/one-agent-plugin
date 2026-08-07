---
name: gorgias
description: Gorgias is a conversational AI platform built for e-commerce brands that centralises support workflows, automates up to 60% of inquiries and transforms customer interactions into sales-driving conversations. Read and write Gorgias data through One: tickets, customers, macros, tags, rules, teams and more, 111 actions with real parameter documentation. Use whenever the user asks to look something up in Gorgias, create or update a record there, or build code against the Gorgias API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: gorgias
  generated-from: one-knowledge-base
---

# Gorgias through One

Gorgias is a conversational AI platform built for e-commerce brands that centralises support workflows, automates up to 60% of inquiries and transforms customer interactions into sales-driving conversations.

One exposes Gorgias through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `gorgias` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Gorgias is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Gorgias account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tickets | GET | `/api/tickets` | `conn_mod_def::GJ309ji_DuI::Ep3PgzwXR1WQN5USq898hA` |
| Retrieve a Ticket | GET | `/api/tickets/{{id}}` | `conn_mod_def::GJ30913H0fs::mw2mA3zoRmOW3vCf-JB2TA` |
| Add Tags to a Ticket | POST | `/tickets/{{ticketId}}/tags` | `conn_mod_def::GJ308q8M96w::yjo_TGTpTxOJBnx1BIpyow` |
| Create a Ticket | POST | `/api/tickets` | `conn_mod_def::GJ308174-bM::omfdYdOCTQGLj6KzLAwttQ` |
| Delete a Ticket | DELETE | `/tickets/{{id}}` | `conn_mod_def::GJ308-Me_-4::6m1xtwukQdGG_9hmCV0hnA` |
| Delete a Ticket’s Custom Field Value | DELETE | `/tickets/{{ticketId}}/custom-fields/{{id}}` | `conn_mod_def::GJ309HrojWQ::Co30NUbrRjC8uJsqfvggQw` |
| Remove Tags from a Ticket | DELETE | `/tickets/{{ticketId}}/tags` | `conn_mod_def::GJ309sSPOik::MQJrpPgoTHWSIV02Mfqj0g` |
| Set a Ticket’s Tags | PUT | `/tickets/{{ticketId}}/tags` | `conn_mod_def::GJ309-6K8m4::2di6rc6wTU6DS1evs6sDSw` |
| Update a Ticket | PUT | `/tickets/{{id}}` | `conn_mod_def::GJ30-QcUEQc::T4C0IU3ZS7uYAQi8y9WlLQ` |
| Update a Ticket’s Custom Field Value | PUT | `/tickets/{{ticketId}}/custom-fields/{{id}}` | `conn_mod_def::GJ30-YYS_9o::ilPnaupGQUuv5kK7Cj17qA` |

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Customers | GET | `/api/customers` | `conn_mod_def::GJ300rf_yWM::vMrC38u0R7et9BBl1nzR-Q` |
| Retrieve a Customer | GET | `/customers/{{id}}` | `conn_mod_def::GJ3009D8EdQ::DCE7fGLWQ3GHGIv2qNUKZg` |
| Create a Customer | POST | `/api/customers` | `conn_mod_def::GJ300BEK5VQ::3mnzB4a8Ty2KCzrkr1hECw` |
| Delete a Customer | DELETE | `/api/customers/{{id}}` | `conn_mod_def::GJ300IMPd_8::X_j-IboaT8aFo8MG4tdPxg` |
| Delete Customers | DELETE | `/api/customers` | `conn_mod_def::GJ300ZgK8mc::zFLyiKiYSg6itICBbsEo2A` |
| Merge Two Customers | PUT | `/customers/merge` | `conn_mod_def::GJ3000wJfuc::e_vjZWetTkajcHPl8IgE3A` |
| Set a Customer’s Data | PUT | `/customers/{{customerId}}/data` | `conn_mod_def::GJ301E253SA::OezlkLzzRXC_wTpeFGR6hQ` |
| Update a Customer | PUT | `/customers/{{id}}` | `conn_mod_def::GJ301M-9GcY::ayoyZ_kaTvif5YhaVpMlCw` |
| Update a Customer’s Custom Field Values | PUT | `/customers/{{customerId}}/custom-fields` | `conn_mod_def::GJ301eDBrSs::yT2eBTNrQ9mipucPFQ87gg` |

### Macros

| Action | Method | Path | Action id |
|---|---|---|---|
| List Macros | GET | `/api/macros` | `conn_mod_def::GJ304ASpWpg::D-k0YSuoTZCwFFKESdh-MA` |
| Retrieve a Macro | GET | `/api/macros/{{id}}` | `conn_mod_def::GJ304IPNeYY::iiKG1aJHTeCu1vUsNJOcFg` |
| Bulk Archive Macros | PUT | `/api/macros/archive` | `conn_mod_def::GJ303mSg6lo::se3lLxxhSeK8aULNNHWfAg` |
| Create a Macro | POST | `/api/api/macros` | `conn_mod_def::GJ303tyCsTw::qc6pQB9KR5mZOuaCJk7Mng` |
| Delete a Macro | DELETE | `/api/macros/{{id}}` | `conn_mod_def::GJ3031kN6Ik::13u26MXJQzWrSUBd7rMzAg` |
| Unarchive Macros | PUT | `/api/macros/unarchive` | `conn_mod_def::GJ304QIs4yk::D02fHNPgR6uDxJf8J4oO2w` |
| Update a Macro | PUT | `/api/macros/{{id}}` | `conn_mod_def::GJ304Yk73lg::l0-3iOx9RgKKwvSRE-j9vA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/api/tags` | `conn_mod_def::GJ306qPnG1c::F5JLxOb7RpeROrM8edylow` |
| Retrieve a Tag | GET | `/api/tags/{{id}}` | `conn_mod_def::GJ30657k5XM::1mJeo68pStKo8Sl33Cmn7A` |
| Create a Tag | POST | `/api/api/tags` | `conn_mod_def::GJ306S70-fQ::84atCYewSuWOWwkhTkrEHQ` |
| Delete a Tag | DELETE | `/tags/{{id}}` | `conn_mod_def::GJ306aJBemQ::ZrZDXXdJT4ORGBz6Oh6wXw` |
| Delete Tags | DELETE | `/api/tags` | `conn_mod_def::GJ306hlpAoE::bmoAhIopRPWzyHlLDoLzjQ` |
| Merge Tags Into a Destination Tag | PUT | `/tags/{{destinationTagId}}/merge` | `conn_mod_def::GJ306yPvj08::mmPJUq4JTPuhax2d3n-z1A` |
| Update a Tag | PUT | `/tags/{{id}}` | `conn_mod_def::GJ307BneHwc::rP_aabY_RkeXBorWrLV5KA` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Rules | GET | `/api/rules` | `conn_mod_def::GJ3047LpxaY::zyFtfzDNRUOsUu-Tsh6s0Q` |
| Retrieve a Rule | GET | `/rules/{{id}}` | `conn_mod_def::GJ305C-azss::O4nDR5WHTAOe-oCA3kKdGw` |
| Create a Rule | POST | `/api/rules` | `conn_mod_def::GJ304p4nmBs::TZKTQMU4T1i7rhPFcKtCKw` |
| Delete a Rule | DELETE | `/rules/{{id}}` | `conn_mod_def::GJ304x2XOas::6NHZ9A0hS86vl8M-oxSMag` |
| Update a Rule | PUT | `/api/rules/{{id}}` | `conn_mod_def::GJ305LMLonA::6gCdQB1WR12lgL-BX6Wz9A` |
| Update Rules' Priorities | POST | `/api/api/rules/priorities` | `conn_mod_def::GJ305TYRhZM::JENJWXGmQCSLYThxypm0Cw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/api/teams` | `conn_mod_def::GJ307aFj6Ws::AQCsIHDvQ2eQJhuG8bOtNA` |
| Retrieve a Team | GET | `/teams/{{id}}` | `conn_mod_def::GJ307hhh9-s::vMfTNlm-Tg-yF6uvX8bm9g` |
| Create a Team | POST | `/api/teams` | `conn_mod_def::GJ307KPGvRE::F_Sd9dUARbGpeijv2AAPBA` |
| Delete a Team | DELETE | `/teams/{{id}}` | `conn_mod_def::GJ307R3A4eY::tN0T2BViSI2ElDpVbi65WQ` |
| Update a Team | PUT | `/api/teams/{{id}}` | `conn_mod_def::GJ307pSiOw0::k8cU5VY8SO2g1XB-ierGZA` |

### TicketMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Ticket's Messages (Deprecated) | GET | `/tickets/{{ticketId}}/messages` | `conn_mod_def::GJ308OyAfXg::8UUdVmBzTTaBJiL8nESSQw` |
| Retrieve a Ticket Message | GET | `/tickets/{{ticketId}}/messages/{{id}}` | `conn_mod_def::GJ308XSQNeE::Ecv6cMMLSF2iquu-jJkr2A` |
| Create a Ticket Message | POST | `/api/api/tickets/{{ticketId}}/messages` | `conn_mod_def::GJ307zSE-RU::-72sJQ0NQcG9UYjR9Zr3Dw` |
| Delete a Ticket Message | DELETE | `/tickets/{{ticketId}}/messages/{{id}}` | `conn_mod_def::GJ3078XnJUc::m1eNZ5rpT8epDaVBR2x5UA` |
| Update a Ticket’s Message | PUT | `/tickets/{{ticketId}}/messages/{{id}}` | `conn_mod_def::GJ308gY3GTM::s1pXaNy2TdCUHpOJDBWJQw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/api/users` | `conn_mod_def::GJ30-6u69SI::4iQEj_YCQh-areL7EHmG6Q` |
| Retrieve a User | GET | `/api/users/{{id}}` | `conn_mod_def::GJ30_DTjiWg::qGfrdxqBQJ629xG7rqa9Rw` |
| Create a User | POST | `/api/users` | `conn_mod_def::GJ30-qlnO_A::EZKjxcxwQKW9OkJYDqIk4Q` |
| Delete a User | DELETE | `/users/{{id}}` | `conn_mod_def::GJ30-x5p_bk::Dtd-AhfHSfSY2_QRut7blA` |
| Update a User | PUT | `/users/{{id}}` | `conn_mod_def::GJ30_L5I3-0::NMsVz_XCRBGeQHxvc3fRPQ` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| List Views | GET | `/api/views` | `conn_mod_def::GJ30_x5EChA::fMNOOIATSB6jsNSGOPX0xA` |
| Retrieve a View | GET | `/api/views/{{id}}` | `conn_mod_def::GJ30_5zaNFI::kglZIep2R56E2qGRkQ8WWQ` |
| Create a View | POST | `/api/views` | `conn_mod_def::GJ30_VtnR1w::hFXEXUrjQJG818erWEYBrg` |
| Delete a View | DELETE | `/views/{{id}}` | `conn_mod_def::GJ30_eMtnhA::80U_7QQ_RKeCVVLDfqOpwQ` |
| Update a View | PUT | `/api/views/{{id}}` | `conn_mod_def::GJ31AOCJX4w::_C1cRhiMSd2VRaC5_ayf1Q` |

### Widgets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Widgets | GET | `/api/widgets` | `conn_mod_def::GJ31Bg7-6Ek::3ZwWpZeoSo-VbYe6ec6Y6Q` |
| Retrieve a Widget | GET | `/api/widgets/{{id}}` | `conn_mod_def::GJ31BoqC_WQ::nxNOjjnDSDiVEdOdlPa07w` |
| Create a Widget | POST | `/api/widgets` | `conn_mod_def::GJ31BRPOVEk::_H64FInhSneaVPTSGHOIEQ` |
| Delete a Widget | DELETE | `/widgets/{{id}}` | `conn_mod_def::GJ31BX5aeaw::AfqghE8sQJC_J3NtK4PmHA` |
| Update a Widget | PUT | `/api/widgets/{{id}}` | `conn_mod_def::GJ31Bwxz3cU::B2M8_F8GSJqzaO9l3ttmEQ` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Custom Fields | GET | `/api/custom-fields` | `conn_mod_def::GJ30zrOSA34::MYKwm_R7QdGtZRuxENy-iA` |
| Retrieve a Custom Field | GET | `/custom-fields/{{id}}` | `conn_mod_def::GJ30zyClOAI::_H6eL4dYQP6h-vFllaGNcQ` |
| Bulk Update Custom Fields | PUT | `/api/custom-fields` | `conn_mod_def::GJ30zYuxsjc::oq3Wp2p-TUG5G7L1rzNAfQ` |
| Create a Custom Field | POST | `/api/api/custom-fields` | `conn_mod_def::GJ30zhzxW3A::9Bh5cNMrRZy8oBQp6z-m_g` |
| Update a Custom Field | PUT | `/custom-fields/{{id}}` | `conn_mod_def::GJ30z5ufXdo::UXGiVlhbRM2BG-l0qMEl5w` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Integrations | GET | `/api/integrations` | `conn_mod_def::GJ302jK9Y6A::nWuG8IToS_GarJfZNaHJqg` |
| Retrieve an Integration | GET | `/api/integrations/{{id}}` | `conn_mod_def::GJ302qfuxQc::kmMeHEDeQSW7velOxLgv5Q` |
| Create an Integration | POST | `/api/api/integrations` | `conn_mod_def::GJ302RNrOmM::QdYClYz3TeOao4oYd4vf0A` |
| Delete an Integration | DELETE | `/integrations/{{id}}` | `conn_mod_def::GJ302YXIimQ::xF5cbRHEQKyA0FJmbFM5OQ` |
| Update an Integration | PUT | `/api/integrations/{{id}}` | `conn_mod_def::GJ302zGG8Uo::IJt0GtibTLywbvk2igy5fg` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Jobs | GET | `/api/jobs` | `conn_mod_def::GJ303OBdeFk::WLE3aIroRsOeOyZgYeF6pg` |
| Retrieve a Job | GET | `/api/jobs/{{id}}` | `conn_mod_def::GJ303Vtrw0Q::TOl3_1kET7OAQyKK2OCmBQ` |
| Cancel a Job | DELETE | `/api/jobs/{{id}}` | `conn_mod_def::GJ3026I2P1o::Q1ujnfA0SXGeHOoAcN-qcQ` |
| Create a Job | POST | `/api/jobs` | `conn_mod_def::GJ303DmqxJE::nvJgRzlRSr2iTMNrki6g9Q` |
| Update a Job | PUT | `/api/jobs/{{id}}` | `conn_mod_def::GJ303eK1gnc::X-5wuT-5SPuVT4WmxKG86g` |

### SatisfactionSurveys

| Action | Method | Path | Action id |
|---|---|---|---|
| List Satisfaction Surveys | GET | `/api/api/satisfaction-surveys` | `conn_mod_def::GJ305kDmVLM::KUY08uUPQPmyLTbRCxjK7g` |
| Retrieve a Satisfaction Survey | GET | `/api/satisfaction-surveys/{{id}}` | `conn_mod_def::GJ305rLJwAw::pxZxbailRDmdZFahACdtAA` |
| Create a Satisfaction Survey | POST | `/api/satisfaction-surveys` | `conn_mod_def::GJ305a_ku60::pf8Vq1atREa3wXESUXumEQ` |
| Update a Satisfaction Survey | PUT | `/api/satisfaction-surveys/{{id}}` | `conn_mod_def::GJ3050ZqQyI::7oH9mGXqSWKkL55yGRSIaQ` |

### VoiceCallRecordings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Voice Call Recordings | GET | `/api/phone/voice-call-recordings` | `conn_mod_def::GJ31Awv_1WQ::pRvmaG3qQue7GuOPD823dA` |
| Retrieve a Voice Call Recording | GET | `/phone/voice-call-recordings/{{id}}` | `conn_mod_def::GJ31A4icyjs::WNKBios7RA2-s1oGfNV-mQ` |
| Delete a Voice Call Recording | DELETE | `/phone/voice-call-recordings/{{id}}` | `conn_mod_def::GJ31AnD17k8::XXdRyYthShS_p8u4wyszLQ` |

### AccountSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Settings | GET | `/api/account/settings` | `conn_mod_def::GJ30zA6KYvk::CeJyFwfrQj-7R_DAvpiXkw` |
| Create an Account Setting | POST | `/api/account/settings` | `conn_mod_def::GJ30y5k1A7Q::yYD4NB39Qj2SNYOTMCY6Qg` |
| Update an Account Setting | PUT | `/account/settings/{{id}}` | `conn_mod_def::GJ30zRLULAk::5gvBFf-OSHWxA8G2zP2p2A` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Statistic CSV Export | POST | `/stats/{{name}}/download` | `conn_mod_def::GJ306C8X-Aw::GCFqNnTzSEurYgnZsvQ7_g` |

1 more Stats actions are available through search.

This lists 90 of 111 actions. For anything not here, call `search_one_platform_actions` with platform `gorgias`. The full catalog is at https://www.withone.ai/knowledge/gorgias.

## When a call fails

The error comes from Gorgias, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/gorgias

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
