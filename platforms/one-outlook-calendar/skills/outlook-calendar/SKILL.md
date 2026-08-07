---
name: outlook-calendar
description: A digital calendar platform that lets users schedule events, manage appointments, and collaborate on meetings across devices with reminders and shared availability views. Read and write Outlook Calendar data through One: events, places, calendarpermissions, eventextensions, eventattachments, calendars and more, 561 actions with real parameter documentation. Use whenever the user asks to look something up in Outlook Calendar, create or update a record there, or build code against the Outlook Calendar API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: outlook-calendar
  generated-from: one-knowledge-base
---

# Outlook Calendar through One

A digital calendar platform that lets users schedule events, manage appointments, and collaborate on meetings across devices with reminders and shared availability views.

One exposes Outlook Calendar through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `outlook-calendar` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Outlook Calendar is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Outlook Calendar account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Changes for a Group Event’s Instances (calendarView) | GET | `/groups/{{groupId}}/calendar/events/{{eventId}}/instances/microsoft.graph.delta()` | `conn_mod_def::GJ58DJtE3YM::rgqy2_4pSDmPE3MEW5fKgQ` |
| Delta Changes for a User Calendar’s Calendar View | GET | `/users/{{userId}}/calendars/{{calendarId}}/calendarView/microsoft.graph.delta()` | `conn_mod_def::GJ58NqQx9Bk::Y4WDuDjxReG2LJfIGaQ1gA` |
| Delta Changes in a Group Calendar View | GET | `/groups/{{groupId}}/calendarView/microsoft.graph.delta()` | `conn_mod_def::GJ58ENUrZFM::RjVIvdfPTRa0ylr1itlbbA` |
| Delta Events in a User Calendar Group Calendar | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/microsoft.graph.delta()` | `conn_mod_def::GMIY39w5X_k::JybV9a10SjONY_RF0CekHQ` |
| Delta Events in My Primary Calendar View | GET | `/v1.0/me/events/microsoft.graph.delta()` | `conn_mod_def::GMIY30c5-CU::Vyj3JdttTeuIGL7R5yC2sg` |
| Delta Sync Events in a User Calendar (calendarView) | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/microsoft.graph.delta()` | `conn_mod_def::GJ58N91nC2c::ThVFZ4SuSLGVKhb_N9TtiQ` |
| Delta Sync Events in a User Calendar View | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/calendarView/microsoft.graph.delta()` | `conn_mod_def::GJ58Qf-cD04::lvruh_S4TYiakdSSw5-Yxg` |
| Delta Sync Events in a User’s Calendar (Calendar Group CalendarView) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/microsoft.graph.delta()` | `conn_mod_def::GJ58Qf2VfDg::TW0qxs_vT3S1MpQ8Zm7w2w` |
| Delta Sync Events in a User’s Calendar View | GET | `/users/{{userId}}/calendarView/microsoft.graph.delta()` | `conn_mod_def::GJ58SHL8ETY::fvIcY5bHRUOh4SjxR1IFKQ` |
| Delta Sync Events in a User’s Calendar View (Primary Calendar) | GET | `/users/{{userId}}/calendar/calendarView/microsoft.graph.delta()` | `conn_mod_def::GJ58Nt-yrGY::q3GCtLONRE21gQwnmdq8kw` |
| Get a User Calendar’s Event Count | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/$count` | `conn_mod_def::GJ58L6IVBuw::h6aUfgHQRAS3xMrIRDLvYA` |
| Get a User’s Calendar Event | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ58LbMUv3M::qo6YSRsHQ_6pNjTeL-R1Qg` |

74 more Events actions are available through search.

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Building Level Map from a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map/levels/{{levelMapId}}` | `conn_mod_def::GJ58E6vwUeQ::ImhnAfzuRSWw-iXLO3uc4g` |
| Get a Building Level Map Unit Count for a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map/levels/{{levelMapId}}/units/$count` | `conn_mod_def::GJ58FIavnKc::qw2okPHbThCf8Tw7_49Efg` |
| Get a Building Level’s Fixture Count for a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map/levels/{{levelMapId}}/fixtures/$count` | `conn_mod_def::GJ58FIZPwuI::KTWbcWlWRt6oqs6d4uy-uA` |
| Get a Building Map Footprint for a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map/footprints/{{footprintMapId}}` | `conn_mod_def::GJ58E6h5Jt8::AYMUVI94SkWNgG_MaS3wFQ` |
| Get a Building Map Level Count for a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map/levels/$count` | `conn_mod_def::GJ58FI1QoIM::Klb2s1wFQWyu7Pis2YAmTg` |
| Get a Building Place's Check-In Count | GET | `/places/{{placeId}}/microsoft.graph.building/checkIns/$count` | `conn_mod_def::GJ58HIENFQI::ZNiROJtrRU6H73LLJaHwAA` |
| Get a Building’s Map (IMDF) for a Place | GET | `/places/{{placeId}}/microsoft.graph.building/map` | `conn_mod_def::GJ58FAnKR-w::jPdnbu5sQ6GY8BnvkiSXGw` |
| Get a Desk's Check-In Count for a Place | GET | `/places/{{placeId}}/microsoft.graph.desk/checkIns/$count` | `conn_mod_def::GJ58HTlNenY::zMlgt-lWS9-d7S-d7oKI8A` |
| Get a Floor's Check-In Count for a Place | GET | `/places/{{placeId}}/microsoft.graph.floor/checkIns/$count` | `conn_mod_def::GJ58HFdNMgc::Ricx-SHGQHuXbd3Reczxfw` |
| Get a Place as a Room | GET | `/places/{{placeId}}/microsoft.graph.room` | `conn_mod_def::GJ58IVTPNGY::7dVpJyaFTOKQ_1Y8aZwEgg` |
| Get a Place as a Room List | GET | `/places/{{placeId}}/microsoft.graph.roomList` | `conn_mod_def::GJ58H3g8Sjs::Wd6v-LU-QTC3f3Xxf8z7ow` |
| Get a Place's Check-in Count | GET | `/places/{{placeId}}/checkIns/$count` | `conn_mod_def::GJ58G6CW40o::8I7iOe_wRfGVY8uQNZw0jg` |

45 more Places actions are available through search.

### CalendarPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Calendar Permissions for a User's Calendar in a Calendar Group | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/calendarPermissions/$count` | `conn_mod_def::GMIY2DXReDM::96qlUtRxQ8CGvFOaNH8yAA` |
| Get a Calendar Permission from a User's Calendar Group Calendar | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GMIY1FB16gk::IK16-bK_QuuNxJeoIIxmNw` |
| Get a Calendar Permission from My Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GMIY08DUB9Q::jvCPWsFOTDaQQ-VNpQKTZw` |
| Get a Group Calendar Permission | GET | `/groups/{{groupId}}/calendar/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GJ58CQwdvLE::VqQV2UHISrCE1GHwlgIx0A` |
| Get a User Calendar Permission | GET | `/users/{{userId}}/calendar/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GJ58LDwpqw0::u6QKp3zOTgqkIFX2w9KLcw` |
| Get a User Calendar Permission | GET | `/users/{{userId}}/calendars/{{calendarId}}/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GJ58LEEM3Tk::qVhJK05hRQKjLNLts4t-3g` |
| Get a User Calendar Permissions Count | GET | `/users/{{userId}}/calendar/calendarPermissions/$count` | `conn_mod_def::GJ58LtQjBVE::thvmX8tbREiDrghnL6x9BA` |
| Get a User Calendar’s Calendar Permission Count | GET | `/users/{{userId}}/calendars/{{calendarId}}/calendarPermissions/$count` | `conn_mod_def::GJ58L2Cm3OE::Be6ROwwXRbKYQSBnqvoUvQ` |
| Get a User Calendar’s Calendar Permissions Count | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/calendarPermissions/$count` | `conn_mod_def::GJ58Pl7Qxo0::-pUxs8ZWRkWUjz6xAlqZOQ` |
| Get a User’s Calendar Permission (in a Calendar Group) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/calendarPermissions/{{calendarPermissionId}}` | `conn_mod_def::GJ58O-08vQE::_ZSEXgBYR66h9DQsKwwvJA` |
| Get Calendar Permission Count for the Signed-in User | GET | `/v1.0/me/calendar/calendarPermissions/$count` | `conn_mod_def::GMIY14AgKFE::Kn009mlFSyK9g0zpKkQiWw` |
| Get Calendar Permission Count for the Signed-in User's Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/calendarPermissions/$count` | `conn_mod_def::GMIY2TTTnOY::7gkwloqnQS-LZ30G30dZlg` |

26 more CalendarPermissions actions are available through search.

### EventExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Extension Count for a User | GET | `/users/{{userId}}/calendar/events/{{eventId}}/extensions/$count` | `conn_mod_def::GJ58LuLoH0E::DwRglgEfSumPyVdjw2GOHA` |
| Get an Event Extension Count for a User's Calendar Group Calendar Event | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions/$count` | `conn_mod_def::GJ58PnogCTM::K24OiT6ZSNmWZmJ2zwIwYw` |
| Get an Event Extension Count in a Group | GET | `/groups/{{groupId}}/events/{{eventId}}/extensions/$count` | `conn_mod_def::GJ58D4sqqq8::kJfUHR51SnmY_I9yZJlEfQ` |
| Get an Event Extension for a User (in a Calendar Group Calendar) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GJ58Pn2hxFI::QmRHFtCBT8ugW6MQGHAtuw` |
| Get an Event Extension for a User's Calendar Event | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GJ58LhaTr8Q::Qr0DPLs2T2-uCLzCOQLJUw` |
| Get an Event Extension for the Signed-in User | GET | `/v1.0/me/calendar/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIY1d0FRTg::7urdFzOuSNOhXBzwWeeiPg` |
| Get an Event Extension for the Signed-in User | GET | `/v1.0/me/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIY1l1FoMc::5T6E3aRjSYCIGLN9DklKEA` |
| Get an Event Extension from My Calendar Group Calendar Event | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIY1mEY-gA::J42OpSCnTfGPxVwJPWdlYw` |
| Get an Event Extension from the Signed-in User's Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/events/{{eventId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIY1n1hESA::Fo-h5oa6TYiHdu6g3rlE-g` |
| Get the Count of an Event’s Extensions | GET | `/v1.0/me/events/{{eventId}}/extensions/$count` | `conn_mod_def::GMIY2MjM0D4::uHng4J5ITHGg03anWeh1FA` |
| Get the Count of an Event's Extensions (for a User's Calendar Event) | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions/$count` | `conn_mod_def::GJ58L3Ojaq4::IWJYUxS8QFebTzLiHLbjfg` |
| List a User Calendar Event’s Extensions | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/extensions` | `conn_mod_def::GJ58LiqHXdE::jBtyXNpQTrWDN4fEPzO4QQ` |

21 more EventExtensions actions are available through search.

### EventAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Event Attachment (in a Calendar Group Calendar) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58OuhX-eo::t6ZWpJ7zQLC5Se8bkH5kEg` |
| Get an Event Attachment Count for a Group Event | GET | `/groups/{{groupId}}/calendar/events/{{eventId}}/attachments/$count` | `conn_mod_def::GJ58Cnm5EOc::mdScDlPTST-f1M3I0XuuQg` |
| Get an Event Attachment Count for a User | GET | `/users/{{userId}}/events/{{eventId}}/attachments/$count` | `conn_mod_def::GJ58RRDfZ6Y::d2DqopANQt2RTlDC-RRs7Q` |
| Get an Event Attachment Count for a User Calendar Event | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/attachments/$count` | `conn_mod_def::GJ58L5hhMrs::4wHycAa5Qmufx-mWa8sgVw` |
| Get an Event Attachment for a User | GET | `/users/{{userId}}/events/{{eventId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58RBvqWF0::7QslbdM-S6C1uRQ--jCo4Q` |
| Get an Event Attachment for the Signed-in User | GET | `/v1.0/me/events/{{eventId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIY0rFH7Ao::DGZugptSTdaDXhHaXgFqnQ` |
| Get an Event Attachment from a Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/events/{{eventId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIY0iaVNMA::UoUs8f4CT62EON5oe2SbHQ` |
| Get an Event Attachment from a Signed-in User's Calendar Group Calendar Event | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIY0rWkY3w::kZMrhCKTTQW6p28D_ydQOQ` |
| Get the Count of an Event's Attachments (in a User's Calendar Group Calendar) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/attachments/$count` | `conn_mod_def::GJ58Pn2cNhI::t17wvUCCThu6s1tdWwCISA` |
| List a User Event’s Attachments | GET | `/users/{{userId}}/events/{{eventId}}/attachments` | `conn_mod_def::GJ58Q5kGdwc::YxW803OtSSOFjlih1cS2Fw` |
| List a User's Calendar Event Attachments | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/attachments` | `conn_mod_def::GJ58K2EfJ2A::a0ZyS8PzSoOxx64ZDT978A` |
| List a User’s Event Attachments | GET | `/users/{{userId}}/calendar/events/{{eventId}}/attachments` | `conn_mod_def::GJ58Ks8Bm0s::Tz8rz1TETpGu8dJcGzsbxw` |

19 more EventAttachments actions are available through search.

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Calendars in a Calendar Group for the Signed-in User | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/$count` | `conn_mod_def::GMIY2D3U5Gk::zVPHeBm9TgWmVCTP1Y8fAw` |
| Get a Calendar for the Signed-in User | GET | `/v1.0/me/calendars/{{calendarId}}` | `conn_mod_def::GMIY1FXNzT8::fuO9ogiwSImi7lShZhJ7Yg` |
| Get a User Calendar for an Event | GET | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/calendar` | `conn_mod_def::GJ58K48WrjA::Dtbo30YEQ4e30dTa3ficrQ` |
| Get a User Calendar Group Calendar Count | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/$count` | `conn_mod_def::GJ58Pzn02-s::UzsDZvmSTRqwwXwtPV5THQ` |
| Get a User Calendar in a Calendar Group | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}` | `conn_mod_def::GJ58PZvFAXU::C5mBJSYFS0-62k_CcxM3uw` |
| Get a User Event's Calendar | GET | `/users/{{userId}}/events/{{eventId}}/calendar` | `conn_mod_def::GJ58REmpEfU::yms-NCuUSnCLIlTUp8BEbA` |
| Get a User’s Calendar | GET | `/users/{{userId}}/calendars/{{calendarId}}` | `conn_mod_def::GJ58LEaiIHY::eFNbcTkhQUOdOo3sFBdK2g` |
| Get a User's Calendar Count | GET | `/users/{{userId}}/calendars/$count` | `conn_mod_def::GJ58Mwp_rsw::7Mq2ZBvlRgKgn1ue9QDnrQ` |
| Get a User's Event Calendar (from a Calendar Group) | GET | `/users/{{userId}}/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/calendar` | `conn_mod_def::GJ58Oyo4e04::QlrTNvY_SampL7tEMAhi2A` |
| Get a User's Primary Calendar | GET | `/users/{{userId}}/calendar` | `conn_mod_def::GJ58K320uPc::3KPUI_w-QuGXf48k79Oudg` |
| Get Allowed Calendar Sharing Roles for a User’s Calendar | GET | `/users/{{userId}}/calendars/{{calendarId}}/microsoft.graph.allowedCalendarSharingRoles(User='{{user}}')` | `conn_mod_def::GJ58NcjFvbU::WJQNv625Tu68pBkT6PuNzA` |
| Get an Event's Calendar for a User | GET | `/users/{{userId}}/calendar/events/{{eventId}}/calendar` | `conn_mod_def::GJ58K4kPzF0::oLngN4xmRrGR7O_cmM6xdg` |

16 more Calendars actions are available through search.

### CalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Calendar Events in a User Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/events/microsoft.graph.delta()` | `conn_mod_def::GMIY39C_Zus::f0YqbOZ_Tzi_jt6FfhYKHA` |
| Delta Calendar Events in the Signed-In User's Primary Calendar View | GET | `/v1.0/me/calendar/events/microsoft.graph.delta()` | `conn_mod_def::GMIY31QtqvI::RKQpNMY9QVKFLfUb-HixYQ` |
| Get a User Calendar Events Count | GET | `/users/{{userId}}/calendar/events/$count` | `conn_mod_def::GJ58L48cOEU::rYldTBWHT66wB9--TEOdfA` |
| Get a User’s Calendar Event | GET | `/users/{{userId}}/calendar/events/{{eventId}}` | `conn_mod_def::GJ58LQFyhwg::heT-BCtsQu6HM9EfPxllrg` |
| Get Count of Calendar Events | GET | `/v1.0/me/calendar/events/$count` | `conn_mod_def::GMIY2VIiGo0::Az-M0KXwTH2QvHWIC4sZJw` |
| Get Event Count for a Signed-In User's Calendar in a Calendar Group | GET | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/$count` | `conn_mod_def::GMIY2Fn-DUA::um8bQn-USi-xsa7fWkFKXw` |
| Get Event Count for My Calendar | GET | `/v1.0/me/calendars/{{calendarId}}/events/$count` | `conn_mod_def::GMIY2bKir8w::RPeMAn2LSkyTML-tYVWdpQ` |
| Accept a User Calendar Event | POST | `/users/{{userId}}/calendars/{{calendarId}}/events/{{eventId}}/microsoft.graph.accept` | `conn_mod_def::GJ58ME3Phew::jYDqiTO3TaSnPHus-0Jk0A` |
| Accept a User's Calendar Event Invitation | POST | `/users/{{userId}}/calendar/events/{{eventId}}/microsoft.graph.accept` | `conn_mod_def::GJ58ME1EGgM::otZYMIApTz6vVowItdNv3Q` |
| Accept an Event in a Calendar | POST | `/v1.0/me/calendars/{{calendarId}}/events/{{eventId}}/microsoft.graph.accept` | `conn_mod_def::GMIY2cTKoZQ::6Ad3ITA7TceVX2rwD20liw` |
| Accept an Event in a Calendar Using Me CalendarGroups Calendars Events | POST | `/v1.0/me/calendarGroups/{{calendarGroupId}}/calendars/{{calendarId}}/events/{{eventId}}/microsoft.graph.accept` | `conn_mod_def::GMIY2lL2WWA::_PiBwfHHRmWIgGkapE0Odw` |
| Accept an Event in the Signed-In User Calendar | POST | `/v1.0/me/calendar/events/{{eventId}}/microsoft.graph.accept` | `conn_mod_def::GMIY2bDweyc::GUSMJ8LySPStsvVfVu8s6A` |

14 more CalendarEvents actions are available through search.

### CheckIns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Floor Place’s Check-In (by Calendar Event) | GET | `/places/{{placeId}}/microsoft.graph.floor/checkIns/{{checkInClaimCalendarEventId}}` | `conn_mod_def::GJ58G9EVXA4::4jAOfvRnQNOjjnGE5eiQiA` |
| Get a Room List Workspace Check-In Count | GET | `/places/{{placeId}}/microsoft.graph.roomList/workspaces/{{workspaceId}}/checkIns/$count` | `conn_mod_def::GJ58Jenm7IQ::O3Lps5O4Q6CbH7VXVFAYRQ` |
| Get a Room's Check-In Count in a Room List Place | GET | `/places/{{placeId}}/microsoft.graph.roomList/rooms/{{roomId}}/checkIns/$count` | `conn_mod_def::GJ58JCxbsls::sCSKzJebQIKoZI3TJ8PyHA` |
| Get a Workspace Check-In for a Room List Place | GET | `/places/{{placeId}}/microsoft.graph.roomList/workspaces/{{workspaceId}}/checkIns/{{checkInClaimCalendarEventId}}` | `conn_mod_def::GJ58Jfw6ivo::ZUJAz8QbSke3WCqpN148_Q` |
| List a Room's Check-Ins (from a Place Room List) | GET | `/places/{{placeId}}/microsoft.graph.roomList/rooms/{{roomId}}/checkIns` | `conn_mod_def::GJ58JIa_qlM::yhOb_SQxTHmSQErorUPOBA` |
| List a Workspace's Check-Ins for a Room List Place | GET | `/places/{{placeId}}/microsoft.graph.roomList/workspaces/{{workspaceId}}/checkIns` | `conn_mod_def::GJ58Jfhyd_w::Risw4MBgTlqKeMUdglflSQ` |

12 more CheckIns actions are available through search.

This lists 90 of 561 actions. For anything not here, call `search_one_platform_actions` with platform `outlook-calendar`. The full catalog is at https://www.withone.ai/knowledge/outlook-calendar.

## When a call fails

The error comes from Outlook Calendar, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/outlook-calendar

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
