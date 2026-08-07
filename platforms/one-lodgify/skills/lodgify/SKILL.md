---
name: lodgify
description: Lodgify is vacation rental software that helps short-term rental hosts manage reservations, sync calendars across booking channels, build direct-booking websites, automate guest communication, and process payments, allowing property managers to reduce double bookings and streamline operations. Read and write Lodgify data through One: availability, reservationbooking, reservationenquiry, properties, booking, reservations and more, 73 actions with real parameter documentation. Use whenever the user asks to look something up in Lodgify, create or update a record there, or build code against the Lodgify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: lodgify
  generated-from: one-knowledge-base
---

# Lodgify through One

Lodgify is vacation rental software that helps short-term rental hosts manage reservations, sync calendars across booking channels, build direct-booking websites, automate guest communication, and process payments, allowing property managers to reduce double bookings and streamline operations.

One exposes Lodgify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `lodgify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Lodgify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Lodgify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Availability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Availability | GET | `/v1/availability` | `conn_mod_def::GMTbn_b-ZEg::W-UfyaGUQzCPP9aGw4gQdg` |
| Get Availability Calendar Data for a Property Room Type | GET | `/v2/availability/{{propertyId}}/{{roomTypeId}}` | `conn_mod_def::GMTbn_GS3UA::7UDrCRrtTWO6wj6lft7trQ` |
| Get Availability for a Property | GET | `/v2/availability/{{propertyId}}` | `conn_mod_def::GMTbn-TYkEA::seW5eSEuSAabYF7TKYSbUQ` |
| Get Availability for a Property | GET | `/v1/availability/{{propertyId}}` | `conn_mod_def::GMTboLDYfHg::SYx3TT-tRbSeFCenKzLqwQ` |
| Get Availability for a Property Room Type | GET | `/v1/availability/{{propertyId}}/{{roomTypeId}}` | `conn_mod_def::GMTbn918Fng::UmdH8cBVTl2mYGdAhiL0Pg` |
| Get Availability Using v2 | GET | `/v2/availability` | `conn_mod_def::GMTbn-LNibg::swNR-6RrQQiv2aJoRg5ZMQ` |
| Set Availability for a Property Room Type | POST | `/v1/availability/{{propertyId}}/{{roomTypeId}}/set` | `conn_mod_def::GMTboGJc31g::Hg5yO80zQL6UgFlGE9kjCA` |

### ReservationBooking

| Action | Method | Path | Action id |
|---|---|---|---|
| Book a Reservation Booking | PUT | `/v1/reservation/booking/{{id}}/book` | `conn_mod_def::GMTbprIYe1A::OfMxQhRBSLqDE2UAypueMQ` |
| Create a Reservation Booking | POST | `/v1/reservation/booking` | `conn_mod_def::GMTbpBLBsFA::z3GitieoQLyoDSVE38oawQ` |
| Decline a Reservation Booking | PUT | `/v1/reservation/booking/{{id}}/decline` | `conn_mod_def::GMTbpq-kL5A::o-SRshNFRGyVQ6m9iSmppQ` |
| Recover a Reservation Booking | PUT | `/v1/reservation/booking/{{id}}/recover` | `conn_mod_def::GMTbpfs5OEg::9KM5lzr9Q36zhWjmdIw9fA` |
| Reopen a Reservation Booking | PUT | `/v1/reservation/booking/{{id}}/reopen` | `conn_mod_def::GMTbpY9T4cg::JY07vgLaS-msyIJMWrTbYQ` |
| Request Payment for a Booking | PUT | `/v1/reservation/booking/{{id}}/request_payment` | `conn_mod_def::GMTbpZXBRIg::noCfw80fRd2aVFEpq_qYig` |

### ReservationEnquiry

| Action | Method | Path | Action id |
|---|---|---|---|
| Decline a Reservation Enquiry | PUT | `/v1/reservation/enquiry/{{id}}/decline` | `conn_mod_def::GMTbo-9YLsg::BnrrEhWDSOiBcmvmvWEDqw` |
| Delete a Reservation Enquiry | DELETE | `/v1/reservation/enquiry/{{id}}` | `conn_mod_def::GMTbpYjJCBA::MG3vNVvfR9WqAbAl9rtKXw` |
| Mark an Enquiry as Not Replied | PUT | `/v1/reservation/enquiry/{{id}}/not_replied` | `conn_mod_def::GMTbpPjE9YA::ZRth2P7sRhqGue4F3YcswA` |
| Mark an Enquiry as Replied | PUT | `/v1/reservation/enquiry/{{id}}/replied` | `conn_mod_def::GMTbpQfzyNg::Al6PFRcYTUOfEuGZCDVz9g` |
| Recover a Reservation Enquiry | PUT | `/v1/reservation/enquiry/{{id}}/recover` | `conn_mod_def::GMTbpf_-wyA::QdSw4u55QmmZAplOJ0PWEg` |
| Reopen a Reservation Enquiry | PUT | `/v1/reservation/enquiry/{{id}}/reopen` | `conn_mod_def::GMTbpZFL0Zg::UDVgIjeERLKKw9r39ZQb9g` |

### Properties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property by ID | GET | `/v1/properties/{{id}}` | `conn_mod_def::GMTboYx1FSA::YOfK0VtqQNuXMyznviaOFA` |
| Get a Property by ID | GET | `/v2/properties/{{id}}` | `conn_mod_def::GMTboY9Pz4g::kIzJP5x2T4KMMaORTlHDxg` |
| List a Property's Rate Addons | GET | `/v1/properties/{{id}}/rates/addons` | `conn_mod_def::GMTboSII1cg::MZmy5VYKSpWeCJ1YTub5oQ` |
| List Properties | GET | `/v2/properties` | `conn_mod_def::GMTboaWt0ug::rNuCkKIgRvmRrsed14MdXA` |
| List Properties | GET | `/v1/properties` | `conn_mod_def::GMTboYbBRjA::c-NOK71TQkG5lG4k40WLxg` |

### Booking

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking by ID | GET | `/v1/reservation/booking/{{id}}` | `conn_mod_def::GMTbpfsowXA::R6Je0vcfRKuovGtt8Wb31w` |
| Mark a Booking as Not Replied | PUT | `/v1/reservation/booking/{{id}}/not_replied` | `conn_mod_def::GMTbpQsm-7A::ElCKuLuERZuY2ykPEPAbfQ` |
| Mark a Booking as Replied | PUT | `/v1/reservation/booking/{{id}}/replied` | `conn_mod_def::GMTbpPbQrzA::q6VmZ8e3S72ekhQBGL3lkQ` |
| Set a Booking as Tentative | PUT | `/v1/reservation/booking/{{id}}/tentative` | `conn_mod_def::GMTbp0YJ_IA::l9gg2CcVTnCmjqZzxTnreg` |
| Update a Booking | PUT | `/v1/reservation/booking/{{id}}` | `conn_mod_def::GMTbpzFsbdA::4jHKADXwQ822EIvQsFjKUA` |

### Reservations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unread Reservation Count | GET | `/v1/reservation/not_read` | `conn_mod_def::GMTbprE-GRA::m5pyL9DxQS-CubWzH4dxKQ` |
| List Reservations | GET | `/v1/reservation` | `conn_mod_def::GMTbpkAwQ7A::cQWAa4CPTG-X2PnDh0tqtg` |
| Delete Reservations in Batch | POST | `/v1/reservation/delete` | `conn_mod_def::GMTbpI2xPxA::JcTPQKjpSLeV6yjJv8gv4w` |
| Mark Reservations as Not Replied in Batch | POST | `/v1/reservation/not_replied` | `conn_mod_def::GMTbowkY0sg::7EjU2vVGRkCkMvL5skz6uw` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking by ID | GET | `/v2/reservations/bookings/{{id}}` | `conn_mod_def::GMTbopFkGAA::GPMH6co0REW58xc4v8P_eQ` |
| List Bookings | GET | `/v2/reservations/bookings` | `conn_mod_def::GMTbpSTxqNg::uYdAu73wQFuCmwORObRHVQ` |
| Checkout a Booking | PUT | `/v2/reservations/bookings/{{id}}/checkout` | `conn_mod_def::GMTbo3P5nhA::Il-2Iof6TSq5E4omzprbBA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks Using Webhooks v1 | GET | `/webhooks/v1/list` | `conn_mod_def::GMTbp7e4wRg::x231o2lVSqCye5w6QHUugQ` |
| Subscribe to Webhooks | POST | `/webhooks/v1/subscribe` | `conn_mod_def::GMTbp7tLjJg::vo-UL8n-RSWjQJadsoCBeA` |
| Unsubscribe a Webhook | DELETE | `/webhooks/v1/unsubscribe` | `conn_mod_def::GMTbp7qys7A::oqxFIlCqTtGDZQnegIDxug` |

### Reservation

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Payment Link for a Booking | POST | `/v1/reservation/booking/{{id}}/quote/paymentLink` | `conn_mod_def::GMTbpA-KAQg::ZD6d1vKBQ7SnuHYOjNog7Q` |
| Mark Bookings or Enquiries as Replied in Batch | POST | `/v1/reservation/replied` | `conn_mod_def::GMTbopleoqA::Klonx7DOSo-6mPvH6ZaRJg` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Country by Code | GET | `/v1/countries/{{code}}` | `conn_mod_def::GMTboGPRFIA::4nxFXyByT1OI3KCIpHPePA` |
| List Countries Codes | GET | `/v1/countries` | `conn_mod_def::GMTboKRJBFA::ZSvGkby6Q0KkeaAOzUdrkA` |

### Rooms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property's Room (by ID) | GET | `/v1/properties/{{id}}/rooms/{{rid}}` | `conn_mod_def::GMTbogpCojg::Y9DfDeUcTlK7_uyRg8FO6A` |
| List a Property's Rooms | GET | `/v2/properties/{{id}}/rooms` | `conn_mod_def::GMTboSDCftA::VhecLJsGTMyFqxX1gcF7vQ` |

### Currencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Currency by Code | GET | `/v1/currencies/{{code}}` | `conn_mod_def::GMTboRvB3vg::hDmhOnO_SlK7MeQwZfz4Ng` |
| List Currencies | GET | `/v1/currencies` | `conn_mod_def::GMTboSFBIMg::Ij2pIydaRfiNoA2j29gBMw` |

### Messaging

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Messaging Thread Details | GET | `/v2/messaging/{{threadGuid}}` | `conn_mod_def::GMTbpI0S5-g::Npjx6UrCSo-IDDKbw6IUkA` |

### Quote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote for a Property | GET | `/v2/quote/{{propertyId}}` | `conn_mod_def::GMTbpJAVu_A::bX2TPiwfQpCA_vxGgT4ZXg` |

### ChannelInventoryMapping

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Channel Inventory Mapping | GET | `/v1/channel/xml` | `conn_mod_def::GMTboJ5aS1g::EZIQihAmRBOHi-3u0vqdVg` |

### Rates

| Action | Method | Path | Action id |
|---|---|---|---|
| Save Without Availability Rates | POST | `/v1/rates/savewithoutavailability` | `conn_mod_def::GMTbogyEovg::-GzkAQn4RRmxPTUD44RySQ` |

### NightlyRatesCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Nightly Rates Calendar | GET | `/v1/rates/calendar` | `conn_mod_def::GMTbohRtR5A::qUWnnTM0QMyORGvsqHnhMg` |

### RatesCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Nightly Rates Calendar | GET | `/v2/rates/calendar` | `conn_mod_def::GMTbohYZJrg::u_O21HzMT86w71Jfq0nNig` |

### RateSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rate Settings | GET | `/v2/rates/settings` | `conn_mod_def::GMTboi4laqA::xK4qOBVMQh2OuZMuRCKDWg` |

### PropertyQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Property Quote | GET | `/v1/quote/{{propertyId}}` | `conn_mod_def::GMTbo4xViJg::LKCKuWKJQLurslW3Xnberw` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Quote for a Booking | POST | `/v1/reservation/booking/{{id}}/quote` | `conn_mod_def::GMTbo_K9_qg::okfSbVLSS9OHm29mStqsNg` |

### BookingQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking's Quote | GET | `/v1/reservation/booking/{{id}}/quote` | `conn_mod_def::GMTbprMRF9g::ivxwJVZvQWGPgcQ5Km5buw` |

### BookingRoomKeyCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Booking Room Key Codes | PUT | `/v2/reservations/bookings/{{id}}/keyCodes` | `conn_mod_def::GMTbpyOIkQg::k39fQuDZRciIoc0TsA4CcA` |

### PropertyAvailablePayments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Property's Available Payments | GET | `/v1/properties/{{id}}/payments` | `conn_mod_def::GMTboSBAI7g::Cp-35ipUTf-XWitE_SWzzQ` |

### DeletedProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deleted Properties | GET | `/v2/deletedproperties` | `conn_mod_def::GMTboYj_oVg::0XiXpODzQGeaKYi87hDT6w` |

### EnquiryMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Messages to an Enquiry | POST | `/v1/reservation/enquiry/{{id}}/messages` | `conn_mod_def::GMTboqe3VZA::q2qycYnOQYCfqyeT2y4VBQ` |

### BookingMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Messages to a Booking | POST | `/v1/reservation/booking/{{id}}/messages` | `conn_mod_def::GMTborkiJpg::nV8IVhLWTmG0zoT2jecEJA` |

### PaymentLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Payment Link for a Booking | POST | `/v2/reservations/bookings/{{id}}/quote/paymentLink` | `conn_mod_def::GMTbo3vzq7A::0xGrZvi-TjSBpnOgfgpeIg` |

### CallMeBackRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Call Me Back Request | POST | `/v1/reservation/callmeback` | `conn_mod_def::GMTbo4AqQOA::sa07qS-dS4WCxqVEg88dpQ` |

### ReservationsBookings

| Action | Method | Path | Action id |
|---|---|---|---|
| Check In a Reservation Booking | PUT | `/v2/reservations/bookings/{{id}}/checkin` | `conn_mod_def::GMTbo4NK-UA::RFQ2OcMWSaCVnOkFxtz6sg` |

### ReservationEnquiries

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Reservation Enquiry | POST | `/v1/reservation/enquiry` | `conn_mod_def::GMTbo_gkuyA::sz8cME81Su2u65glgYcn0Q` |

### BookingPaymentLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking Payment Link | GET | `/v2/reservations/bookings/{{id}}/quote/paymentLink` | `conn_mod_def::GMTbpHlRQhg::CzLoK11bS8urg15PqQ9efA` |

### ExternalBookings

| Action | Method | Path | Action id |
|---|---|---|---|
| List External Bookings for a Booking | GET | `/v2/reservations/bookings/{{id}}/externalBookings` | `conn_mod_def::GMTbpIZGx0A::3jGZvHvURZCClJ4WaxtgZQ` |

### BookingReservation

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Booking Reservation | DELETE | `/v1/reservation/booking/{{id}}` | `conn_mod_def::GMTbpZP0rmA::0whdgMPGSdSqlvUknG3ZDQ` |

### Enquiry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Enquiry by ID | GET | `/v1/reservation/enquiry/{{id}}` | `conn_mod_def::GMTbpfsjTug::Luobb4U9SCC446dtN9wRzQ` |

### BookingQuotePaymentLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Booking Quote Payment Link | GET | `/v1/reservation/booking/{{id}}/quote/paymentLink` | `conn_mod_def::GMTbproBlRg::5j1IN6kRRKm-2yipEBOYQA` |

### ReservationBookingCheckin

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Booking Check-In Time | PUT | `/v1/reservation/booking/{{id}}/checkin` | `conn_mod_def::GMTbpztcmmg::cvHw4QINRhaNFU0mwAkE_A` |

### ReservationBookingCheckout

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Checkout for a Booking | PUT | `/v1/reservation/booking/{{id}}/checkout` | `conn_mod_def::GMTbp1E7a0g::EttJ8cT0RiiIaVVAx75CoQ` |

## When a call fails

The error comes from Lodgify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/lodgify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
