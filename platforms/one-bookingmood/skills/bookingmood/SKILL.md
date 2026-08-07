---
name: bookingmood
description: A flexible booking platform that lets rental and vacation property owners embed customizable calendars on their websites, manage availability and reservations, track payments, sync with external calendars, and accept direct bookings without commission. Read and write Bookingmood data through One: services, sitepages, attributeoptions, bookingdetails, contacts, attributes and more, 210 actions with real parameter documentation. Use whenever the user asks to look something up in Bookingmood, create or update a record there, or build code against the Bookingmood API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bookingmood
  generated-from: one-knowledge-base
---

# Bookingmood through One

A flexible booking platform that lets rental and vacation property owners embed customizable calendars on their websites, manage availability and reservations, track payments, sync with external calendars, and accept direct bookings without commission.

One exposes Bookingmood through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bookingmood` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bookingmood is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bookingmood account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| List Services | GET | `/services` | `conn_mod_def::GJ42GG99ka4::fUX2T0egSO2-ZS_QJE2M7g` |
| Create Services | POST | `/services` | `conn_mod_def::GJ42FxlBg1c::CZYZ2ZxLQwGp71GC5fwz-A` |
| Delete Services | DELETE | `/services` | `conn_mod_def::GJ42F7HJnWI::cR687DqxT_CUFteHRRTeFQ` |
| Update Services | PATCH | `/services` | `conn_mod_def::GJ42G01Siaw::SINOAMf_QT-NcEJtoa-gIQ` |

### SitePages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Pages | GET | `/site_pages` | `conn_mod_def::GJ42IeMLL54::HXj_YKZeS-u-JKqaPyO3SQ` |
| Create Site Pages | POST | `/site_pages` | `conn_mod_def::GJ42IF0jBUM::a5egsY-5R7-ynBWqtl9rTw` |
| Delete Site Pages | DELETE | `/site_pages` | `conn_mod_def::GJ42IRCD7Yw::JXbF1m_eSEC_bo42T77eWA` |
| Update Site Pages | PATCH | `/site_pages` | `conn_mod_def::GJ42IrafE8A::k93P6f08Tl64YwwlKz36Rg` |

### AttributeOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attribute Options | GET | `/attribute_options` | `conn_mod_def::GJ41tgqRBmQ::VcCmswxjRm2ouco3ZO2Fww` |
| Create Attribute Options | POST | `/attribute_options` | `conn_mod_def::GJ41tMqJOwg::uuhW4xVDRZ6OVgvCXY0mpw` |
| Delete Attribute Options | DELETE | `/attribute_options` | `conn_mod_def::GJ41tYniWZc::KVfyPIUORhWnleeKYX6zLQ` |
| Update Attribute Options | PATCH | `/attribute_options` | `conn_mod_def::GJ41tpf5J_k::Gc-W5UZXRwaS-dXSyLO76A` |

### BookingDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Booking Details | GET | `/booking_details` | `conn_mod_def::GJ41urKkH9o::VlIGgz0hSkKJ1viEgPjr0g` |
| Create Booking Details | POST | `/booking_details` | `conn_mod_def::GJ41uWSoHjE::0Ot9kxpnRCOWezqWAplsDA` |
| Delete Booking Details | DELETE | `/booking_details` | `conn_mod_def::GJ41uf6ISkQ::c0UcMQI3QJWlpqkEF3Txcw` |
| Update Booking Details | PATCH | `/booking_details` | `conn_mod_def::GJ41u3PLDPg::FvMA2GwpRbW0t4m3n1Fz0w` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ410OhTgco::cTcyfi4tQ3S-6LuKziHvBA` |
| Create Contacts | POST | `/contacts` | `conn_mod_def::GJ41zw3d_lg::3k5E9OL_Ttq2JF1U0xZLYw` |
| Delete Contacts | DELETE | `/contacts` | `conn_mod_def::GJ41z_J0RMc::d0z6wlHqSBGSOa4cmwljpg` |
| Update Contacts | PATCH | `/contacts` | `conn_mod_def::GJ410eOLZI0::fmTk2lPUTSOMDg4WQ08BrQ` |

### Attributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attributes | GET | `/attributes` | `conn_mod_def::GJ41uEfW2xg::6J1sMFCfSvizz6VLQN5vIg` |
| Create Attributes | POST | `/attributes` | `conn_mod_def::GJ41txGHvHs::qDdnRjrqRciFSCY2EOkdow` |
| Delete Attributes | DELETE | `/attributes` | `conn_mod_def::GJ41t4kc5as::VjaeVCi5Svy0xQaKxV3fVA` |
| Update Attributes | PATCH | `/attributes` | `conn_mod_def::GJ41uOMzSmM::2-Q13K3_RcGyOh2UK1OqfA` |

### CalendarEventNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Event Notes | GET | `/calendar_event_notes` | `conn_mod_def::GJ41wFD81V0::fqFl1-tXSVafXURiJASwvw` |
| Create Calendar Event Notes | POST | `/calendar_event_notes` | `conn_mod_def::GJ41vx6mSZI::y95aDFCBT9KtLGa_ZHVeQA` |
| Delete Calendar Event Notes | DELETE | `/calendar_event_notes` | `conn_mod_def::GJ41v62EhKs::YqrdX9p5TiGutvoUmXveLQ` |
| Update Calendar Event Notes | PATCH | `/calendar_event_notes` | `conn_mod_def::GJ41wOzkhdw::681oHE2VR3WKAuYAMaq74A` |

### Capacities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Capacities | GET | `/capacities` | `conn_mod_def::GJ41xnSFs1A::gyCS_dMYRDK-0P8GPPXCzg` |
| Create Capacities | POST | `/capacities` | `conn_mod_def::GJ41xVrCMqo::rKwCy8IrSLeuoF3KWvzz3Q` |
| Delete Capacities | DELETE | `/capacities` | `conn_mod_def::GJ41xevI4q8::Nsq-iYZBSi-k_4x2FSYBvA` |
| Update Capacities | PATCH | `/capacities` | `conn_mod_def::GJ41xxwmJy0::g8VhhfiRSzu4OylYtmv9Ww` |

### Coupons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coupons | GET | `/coupons` | `conn_mod_def::GJ412lP1MPU::SmHkGIIYTpC1W2k6QSXNBA` |
| Create Coupons | POST | `/coupons` | `conn_mod_def::GJ412QE1vWQ::i6iofY8YRne9s7E-mSsIEA` |
| Delete Coupons | DELETE | `/coupons` | `conn_mod_def::GJ412ZpyXII::s7Q5R732TwSaX-N3ONXdmQ` |
| Update Coupons | PATCH | `/coupons` | `conn_mod_def::GJ4121WKN10::rq3W98w1RgqnizsvOWr24w` |

### SiteNavItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Navigation Items | GET | `/site_nav_items` | `conn_mod_def::GJ42H0evp6A::MPLQHJ1cQ_SgYJjqImH6kg` |
| Create Site Nav Items | POST | `/site_nav_items` | `conn_mod_def::GJ42HhT4HvA::WSTVqA34RSms00sVs3wv1g` |
| Delete Site Nav Items | DELETE | `/site_nav_items` | `conn_mod_def::GJ42Hqvj9CM::VsVs6-vgR1y2HV35ZdytVA` |
| Update Site Nav Items | PATCH | `/site_nav_items` | `conn_mod_def::GJ42H_I6G4w::1DECd5_0TJOxGtU7ZEyI9Q` |

### CapacityGroupDependencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Capacity Group Dependencies | GET | `/capacity_group_dependencies` | `conn_mod_def::GJ41yPBsqSw::aYiuAVkJQx-aXvGzeeMzLw` |
| Create Capacity Group Dependencies | POST | `/capacity_group_dependencies` | `conn_mod_def::GJ41x6JOGY8::lk3psIewT9GYXugZuiNJsA` |
| Delete Capacity Group Dependencies | DELETE | `/capacity_group_dependencies` | `conn_mod_def::GJ41yCzj47A::Te878qQ-Qu6DULfDUaUTwg` |
| Update Capacity Group Dependencies | PATCH | `/capacity_group_dependencies` | `conn_mod_def::GJ41yYF6orQ::z0Sy8ZNKR961HMvRA4adxQ` |

### TaskTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Templates | GET | `/task_templates` | `conn_mod_def::GJ42LN_z11s::DjbZDP7cQHaNJInpHTqd6w` |
| Create Task Templates | POST | `/task_templates` | `conn_mod_def::GJ42KxZMqKo::WiuXjrqNR06LXJylh4RXOw` |
| Delete Task Templates | DELETE | `/task_templates` | `conn_mod_def::GJ42LBB54MI::yH03qak_TEiV9WzB_0r85Q` |
| Update Task Templates | PATCH | `/task_templates` | `conn_mod_def::GJ42LjV9qws::pXSPjer-RjGb6E5-VF7WCg` |

### CapacityGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Capacity Groups | GET | `/capacity_groups` | `conn_mod_def::GJ41yz9KGGY::G2wJsR1TQfeRQ-Mzh8zgXQ` |
| Create Capacity Groups | POST | `/capacity_groups` | `conn_mod_def::GJ41yfmPdS8::OsxHsj3aQeW-yHGH9F2IoQ` |
| Delete Capacity Groups | DELETE | `/capacity_groups` | `conn_mod_def::GJ41yp8Na38::hQvmjRo4QiWZtYkzk-oCpg` |
| Update Capacity Groups | PATCH | `/capacity_groups` | `conn_mod_def::GJ41zC0LbnU::tXP-3PvxSb-j7sMFqyAjLw` |

### ContactBookings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Bookings | GET | `/contact_bookings` | `conn_mod_def::GJ41zenGEgQ::UCa1babJR8u90Lekqoxerw` |
| Create Contact Bookings | POST | `/contact_bookings` | `conn_mod_def::GJ41zMplgCc::5Ysi3YhXSvCW7rijkAyMfA` |
| Delete Contact Bookings | DELETE | `/contact_bookings` | `conn_mod_def::GJ41zVetuus::oDsha6kxQ0yt-toszP_OmA` |
| Update Contact Bookings | PATCH | `/contact_bookings` | `conn_mod_def::GJ41zoXivvY::TaYMrIRxRuqTiYsWclb6Vw` |

### CouponProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coupon Products | GET | `/coupon_products` | `conn_mod_def::GJ4104AaEV0::_uDF8quATTGWFNC7ZMPUSg` |
| Create Coupon Products | POST | `/coupon_products` | `conn_mod_def::GJ410mIQc0g::GNhuqBZ1QNqpBDQBvyDFWQ` |
| Delete Coupon-Product Links | DELETE | `/coupon_products` | `conn_mod_def::GJ410va1zzg::6SfUO4d3TaOKvjxbYiNvUg` |
| Update Coupon Products | PATCH | `/coupon_products` | `conn_mod_def::GJ411ApvaZg::L6qEH5JGTxSvsvUkJmWuTw` |

### CouponServices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coupon Services | GET | `/coupon_services` | `conn_mod_def::GJ411Y8DRQ0::VCgOO2alQDi4hH8zHf6teQ` |
| Create Coupon Services | POST | `/coupon_services` | `conn_mod_def::GJ411IEBVtc::WIx3fHBmTm6_J5i2CJDqfg` |
| Delete Coupon Service Links | DELETE | `/coupon_services` | `conn_mod_def::GJ411QCv3us::ZiPzm471RzKaVQagIvoSGA` |
| Update Coupon Services | PATCH | `/coupon_services` | `conn_mod_def::GJ411hlPSos::cq9hF2YmRHiAf6BoIb7oFA` |

### TaskAssignees

| Action | Method | Path | Action id |
|---|---|---|---|
| List Task Assignees | GET | `/task_assignees` | `conn_mod_def::GJ42J38zI4s::yEygtUoLRdeSCq2djXxQdg` |
| Create Task Assignees | POST | `/task_assignees` | `conn_mod_def::GJ42Joa_tXs::KDqJmQleRKSPoOuppxcALg` |
| Delete Task Assignees | DELETE | `/task_assignees` | `conn_mod_def::GJ42Jv4SKek::7lnvMe8lSJOFg5HbfvobPg` |
| Update Task Assignees | PATCH | `/task_assignees` | `conn_mod_def::GJ42KAW1tqI::vJGkMh5vSjeuBR7o9XkXPQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJ42NQKpfsE::aAYy73ZsSI2_GmAlg4ZE4w` |
| Create Webhooks | POST | `/webhooks` | `conn_mod_def::GJ42M9tmjlY::dB9e_Mf6S1WC-o6q-1A86A` |
| Delete Webhooks | DELETE | `/webhooks` | `conn_mod_def::GJ42NHJ_D-o::0cH9DoQ5SFyvXsHQH5Z9BA` |
| Update Webhooks | PATCH | `/webhooks` | `conn_mod_def::GJ42NYeIUaI::qrJaqRLjTimjZ6QxxFN2ZA` |

### CouponUses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coupon Uses | GET | `/coupon_uses` | `conn_mod_def::GJ411_5IDCg::c7GytmWORtClUmR24kITYA` |
| Create Coupon Uses | POST | `/coupon_uses` | `conn_mod_def::GJ411otYHkU::0_JU3j-tSKSgc7bKKLLdKg` |
| Delete Coupon Uses | DELETE | `/coupon_uses` | `conn_mod_def::GJ411x2unWQ::RGRJ3wtiQjO3uMLqAvuZOw` |
| Update Coupon Uses | PATCH | `/coupon_uses` | `conn_mod_def::GJ412IU-rR0::ky5BJMy7Sgu0W--O6Ilc7Q` |

### ExternalCalendars

| Action | Method | Path | Action id |
|---|---|---|---|
| List External Calendars | GET | `/external_calendars` | `conn_mod_def::GJ413S4q3xs::ZBIRd0szT1ebyywdktAEWA` |
| Create External Calendars | POST | `/external_calendars` | `conn_mod_def::GJ4129tmBKM::LKAJWDGPRESBfzFDkGV9iA` |
| Delete External Calendars | DELETE | `/external_calendars` | `conn_mod_def::GJ413IEhoQM::MGXiWCq5TMOYyrflCkAW-w` |
| Update External Calendars | PATCH | `/external_calendars` | `conn_mod_def::GJ413gHEJNo::rqaFJDeCSoOSlfjWhAsNYA` |

### Widgets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Widgets | GET | `/widgets` | `conn_mod_def::GJ42OswR0xU::vpJnFRnjQuGoqKlY1bu2Hw` |
| Create Widgets | POST | `/widgets` | `conn_mod_def::GJ42OM9tyjY::wTl3TJjpSZStg0nf_cnlxA` |
| Delete Widgets | DELETE | `/widgets` | `conn_mod_def::GJ42OdOgRRU::LVGEFcAqSRK0bAvYCHE8Xg` |
| Update Widgets | PATCH | `/widgets` | `conn_mod_def::GJ42O4UusJ8::6F_3XTcyTUyK0llTz9rZhw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices | GET | `/invoices` | `conn_mod_def::GJ4138lUQkI::fie2jNM4RmWDikHRNwaO1w` |
| Create Invoices | POST | `/invoices` | `conn_mod_def::GJ413nxgUAM::D7nXg40SSxWvPBbi210egA` |
| Delete Invoices | DELETE | `/invoices` | `conn_mod_def::GJ413z7k7A4::Y9rfa7aRS9e6CBgeJ8q_Aw` |
| Update Invoices | PATCH | `/invoices` | `conn_mod_def::GJ414F1Amrc::5aOM6hO9T_W2O1B-TQfo4A` |

### LineItemTaxes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Line Item Taxes | GET | `/line_item_taxes` | `conn_mod_def::GJ414dbgX8E::7NgXFN3gRqahb-8Xv3iNLg` |
| Create Line Item Taxes | POST | `/line_item_taxes` | `conn_mod_def::GJ414Ms-g7A::1vP6TYXcRp6i0m99ka7dOA` |

2 more LineItemTaxes actions are available through search.

This lists 90 of 210 actions. For anything not here, call `search_one_platform_actions` with platform `bookingmood`. The full catalog is at https://www.withone.ai/knowledge/bookingmood.

## When a call fails

The error comes from Bookingmood, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bookingmood

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
