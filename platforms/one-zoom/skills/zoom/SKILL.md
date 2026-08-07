---
name: zoom
description: Zoom is a video conferencing platform that enables virtual meetings, webinars, and collaboration. It offers features like screen sharing, breakout rooms, and integrations with productivity tools, making it a go-to solution for remote teams and events. Read and write Zoom data through One: users, chatchannels, meetings, workspaces, rooms, whiteboards and more, 1748 actions with real parameter documentation. Use whenever the user asks to look something up in Zoom, create or update a record there, or build code against the Zoom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: zoom
  generated-from: one-knowledge-base
---

# Zoom through One

Zoom is a video conferencing platform that enables virtual meetings, webinars, and collaboration. It offers features like screen sharing, breakout rooms, and integrations with productivity tools, making it a go-to solution for remote teams and events.

One exposes Zoom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `zoom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Zoom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Zoom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a User’s Personal Meeting Room (PM Room) Vanity Name | GET | `/users/vanity_name` | `conn_mod_def::GJ8e4u_u7Qw::aspqFAX3Sma2E5HJ7ftIXw` |
| Check Whether an Email Is Registered in Your Zoom Account | GET | `/users/email` | `conn_mod_def::GJ8e4uhxUYw::PkDtFDATRzmWajCNgW-9Mg` |
| Get a User | GET | `/users/{{userId}}` | `conn_mod_def::GJ8e5Hgsq2Q::fSX--SdoSfy7ZRw-IFHP7w` |
| Get a User’s Presence Status | GET | `/v2/users/{{userId}}/presence_status` | `conn_mod_def::GJ8e5Pnse7k::EjbrdRNySVaHBSsGoPUnSA` |
| Get User Summary | GET | `/users/summary` | `conn_mod_def::GJ8e5hvmJoI::ga-elUA7Sw-ZwHo-rlhnPw` |
| List Account Users | GET | `/users` | `conn_mod_def::GJ8e51khyC8::-vg-TiE6Q2i_SQBJDxpfNQ` |
| Create a Zoom User | POST | `/users` | `conn_mod_def::GJ8e42pV680::ZW3470j1RimC7e8li7QujQ` |
| Delete a User’s Profile Picture | DELETE | `/v2/users/{{userId}}/picture` | `conn_mod_def::GJ8e4-yAnD0::Ko5fC0tJQgChnlgn0VhzWw` |
| Delete a Zoom User | DELETE | `/users/{{userId}}` | `conn_mod_def::GJ8e44pt2LQ::g2AsvVB3QsCSKiVS0eoSFg` |
| Revoke a User’s SSO Token | DELETE | `/v2/users/{{userId}}/token` | `conn_mod_def::GJ8e58NkUec::TCLk4WH_T76ExKXeJ6UkAw` |
| Update a User’s Email Address | PUT | `/users/{{userId}}/email` | `conn_mod_def::GJ8e6GITB6A::9MQlBPwQSs2bfbeAMC-Ttw` |
| Update a User’s Password | PUT | `/users/{{userId}}/password` | `conn_mod_def::GJ8e6GU4TvQ::eW0DoWcaQFyi-qSn-CUidA` |

5 more Users actions are available through search.

### ChatChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel’s Retention Policy | GET | `/chat/channels/{{channelId}}/retention` | `conn_mod_def::GJ8eYwegHkM::UHw0OhYVQYmbxkhTGKz6-g` |
| Get a Chat Channel | GET | `/chat/channels/{{channelId}}` | `conn_mod_def::GJ8eYWWEQWA::jfTvrhgFSl-ufGURZBtBHA` |
| Get a User’s Chat Channel | GET | `/chat/users/{{userId}}/channels/{{channelId}}` | `conn_mod_def::GJ8eYxP-49Y::kobiQyhRTxyQ_5SQE6_7tQ` |
| List a User's Chat Channels | GET | `/chat/users/{{userId}}/channels` | `conn_mod_def::GJ8eYh-yjes::mSvpA636SjGrklJqH0xNNw` |
| List an Account’s Public Chat Channels | GET | `/chat/channels` | `conn_mod_def::GJ8eY4E8lSU::2LxBP9dhRuKjtl2tyEUVNQ` |
| Batch Delete a User's Chat Channels | DELETE | `/chat/users/{{userId}}/channels` | `conn_mod_def::GJ8eYp-aujQ::gLr4bjN2SByiAe3rUdy1gA` |
| Create a User's Chat Channel | POST | `/v2/chat/users/{{userId}}/channels` | `conn_mod_def::GJ8eYPFrpz0::f8DV7f4XTZ6-EyMQXXFrOQ` |
| Delete a Chat Channel | DELETE | `/chat/channels/{{channelId}}` | `conn_mod_def::GJ8eYUxIpG4::WqjkM4BFRzibEL27-yrkkg` |
| Delete a User's Chat Channel | DELETE | `/v2/chat/users/{{userId}}/channels/{{channelId}}` | `conn_mod_def::GJ8eYw4Cr1w::L27fnoRARoSvail9_gV4Jg` |
| Join a Chat Channel (Current User) | POST | `/chat/channels/{{channelId}}/members/me` | `conn_mod_def::GJ8eYV_Zkfo::qC65FuW3S9ueRiOsBQc6yA` |
| Leave a Chat Channel (Current User) | DELETE | `/chat/channels/{{channelId}}/members/me` | `conn_mod_def::GJ8eYggjZUs::ReOWOpGPS--BzKZuMY2cXA` |
| Perform Operations on Channels (Archive/Unarchive) | PATCH | `/chat/channels/events` | `conn_mod_def::GJ8eYpQgUq4::Vey7fEf1SsW53hdfAHezsw` |

4 more ChatChannels actions are available through search.

### Meetings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Meeting | GET | `/v2/meetings/{{meetingId}}` | `conn_mod_def::GJ8enI537uQ::7DoP-TseQqOuDewd1QsNBg` |
| Get a Meeting Invitation | GET | `/meetings/{{meetingId}}/invitation` | `conn_mod_def::GJ8el1M-Tc4::MjHmVbntRY-tDle1F8SjNw` |
| Get a Meeting’s Live Streaming Join Token | GET | `/meetings/{{meetingId}}/jointoken/live_streaming` | `conn_mod_def::GJ8emqbr5b8::3Rb2bwrtSLenFayJk0Z74A` |
| Get a Meeting’s Livestream Details | GET | `/v2/meetings/{{meetingId}}/livestream` | `conn_mod_def::GJ8empETwXc::cM1GNm54SXSrWN-AJL9xPQ` |
| Get a Meeting’s Local Archiving Archive Token | GET | `/meetings/{{meetingId}}/jointoken/local_archiving` | `conn_mod_def::GJ8eUTG_qVA::6mWu3RggTCyBuxxUbqi77w` |
| Get a Meeting’s Token | GET | `/meetings/{{meetingId}}/token` | `conn_mod_def::GJ8ekm8ruBI::dlwrl8yoRxyG5gvXU2fI4w` |
| List a User’s Meetings | GET | `/users/{{userId}}/meetings` | `conn_mod_def::GJ8enQiyL9g::TlkyA-vwRlqTyDaI4vETBA` |
| Create a User’s Meeting | POST | `/v2/users/{{userId}}/meetings` | `conn_mod_def::GJ8enHbo9DI::KIWh_FB5RxGPT6sVbu8FTg` |
| Delete a Meeting | DELETE | `/v2/meetings/{{meetingId}}` | `conn_mod_def::GJ8enHl_yro::0_CNLHqZSKyinp0nslB1ow` |
| Delete a Meeting’s Auto-Open App | DELETE | `/meetings/{{meetingId}}/open_apps` | `conn_mod_def::GJ8eklnJx8I::3MozDGBPTZCXcaDXFl6HPg` |
| Get a Meeting’s SIP URI (With Optional Passcode) | POST | `/meetings/{{meetingId}}/sip_dialing` | `conn_mod_def::GJ8enH5EpCE::837dcbFQSO-sc6-MuAHTTg` |
| Update a Meeting | PATCH | `/v2/meetings/{{meetingId}}` | `conn_mod_def::GJ8encftcNg::rhh2j05vRlWZaa-tULRzTw` |

4 more Meetings actions are available through search.

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace | GET | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8e9srzbkU::X8vwMT70SiCupCffN2Eu9g` |
| Get a Workspace’s QR Code | GET | `/workspaces/{{workspaceId}}/qr_code` | `conn_mod_def::GJ8e9tv6lLc::tgMNRC5LSMiDZaBhQcjGeA` |
| List a Location’s Workspaces | GET | `/workspaces` | `conn_mod_def::GJ8e9_xsud4::iFSFlh69S-GT38GyIAFd_Q` |
| List Released Workspaces by Timeout | GET | `/workspaces/released_workspaces_by_timeout` | `conn_mod_def::GJ8e93V5kJQ::I7EXvSV0R9eGk4ISB7qefQ` |
| Add a Workspace Photo | POST | `/v2/workspaces/settings/photos` | `conn_mod_def::GJ8e9LNuP-M::Qqd9hZH6T-aPoX2r_2pzhg` |
| Check In/Out of a Workspace Reservation Event | POST | `/workspaces/events` | `conn_mod_def::GJ8e9SvMn98::NNJyRLSVRhGnHIyYkcEAag` |
| Create a Workspace | POST | `/workspaces` | `conn_mod_def::GJ8e9SHfT2A::a71Bm5pBR1m8ulcceE_CfQ` |
| Delete a Workspace | DELETE | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8e9d_wsDc::Ut6kMoB5Q6GnTkYtfXDaAw` |
| Delete a Workspace's Desk Assignment | DELETE | `/workspaces/{{workspaceId}}/assignment` | `conn_mod_def::GJ8e9aqzbPc::cKkjRUUWT1SSxdjAIc5vwQ` |
| Delete a Workspace’s Floor Map | DELETE | `/workspaces/{{locationId}}/background` | `conn_mod_def::GJ8e9avr-hE::sgQ-RyDlQCqcnleK8fEnuA` |
| Set a Workspace Desk Assignment | PUT | `/workspaces/{{workspaceId}}/assignment` | `conn_mod_def::GJ8e99Vud2I::ZI2-zIlRR7afHCi7qHY6zg` |
| Update a Workspace | PATCH | `/workspaces/{{workspaceId}}` | `conn_mod_def::GJ8e-GXpyuQ::QquF-okFTwSiGWn-AWj6Fw` |

### Rooms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Zoom Room’s Profile | GET | `/rooms/{{roomId}}` | `conn_mod_def::GJ8e-VK7ehM::xduW5c2wSX-uXI_GXM5VVw` |
| Get a Zoom Room’s Settings | GET | `/rooms/{{id}}/settings` | `conn_mod_def::GJ8e-e8CPE8::Leh76yrIR4ySV56jC5SGaQ` |
| Get a Zoom Room’s Virtual Controller URL | GET | `/rooms/{{roomId}}/virtual_controller` | `conn_mod_def::GJ8e-cHM9zs::q_TjUnwXSg6ZjHACeDy3sw` |
| List Zoom Rooms | GET | `/rooms` | `conn_mod_def::GJ8e-nkCVZ0::p0yQjQp2Q9CG0R8ajWA9Og` |
| Add a Zoom Room | POST | `/rooms` | `conn_mod_def::GJ8e-FuMpEE::FbTciXXmQYih0AGIPY3COw` |
| Change a Zoom Room’s Location | PUT | `/rooms/{{roomId}}/location` | `conn_mod_def::GJ8e-NJm1KM::Jqsf2nhjRLyJFf5CYPMmfA` |
| Control a Zoom Room (Send Room Event Command) | PATCH | `/rooms/{{id}}/events` | `conn_mod_def::GJ8e-2IRFhQ::Qp9IK8i0RASbOktdC--UTQ` |
| Delete a Zoom Room | DELETE | `/rooms/{{roomId}}` | `conn_mod_def::GJ8e-MjfkYo::hu4GSFPuSy-fgzGiAM35hA` |
| Un-assign Tags from a Zoom Room | DELETE | `/rooms/{{roomId}}/tags` | `conn_mod_def::GJ8fAYDT3AA::0638h3RRQ8K1m8rV6bdMDA` |
| Update a Zoom Room’s Profile | PATCH | `/rooms/{{roomId}}` | `conn_mod_def::GJ8e-us_Qns::2Zp1FNRZRji69oivSD5fRQ` |
| Update a Zoom Room’s Settings | PATCH | `/v2/rooms/{{id}}/settings` | `conn_mod_def::GJ8e-3ueztY::of0lhKkXQOC-LgL60mH7cw` |

### Whiteboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Whiteboard | GET | `/whiteboards/{{whiteboardId}}` | `conn_mod_def::GJ8egElzMKs::8EaRtOE6Tj2966gg3i49KA` |
| List Whiteboards (Current User or Account) | GET | `/whiteboards` | `conn_mod_def::GJ8egGTnnsQ::decC6xAURce6HAWj0ocp3Q` |
| Add a Whiteboard Collaborator (Share a Whiteboard) | POST | `/whiteboards/{{whiteboardId}}/collaborator` | `conn_mod_def::GJ8ebRIvndY::ToveAr60SAG5yRRpSq_x2g` |
| Create a New Whiteboard | POST | `/whiteboards` | `conn_mod_def::GJ8egENsPbs::WxgiBvj5Q9y0DfMKKIjPcQ` |
| Create a Whiteboard by Import | POST | `/whiteboards/import` | `conn_mod_def::GJ8ekdqJrQ4::wNr-rcfiScGMike8nwedZg` |
| Delete a Whiteboard | DELETE | `/whiteboards/{{whiteboardId}}` | `conn_mod_def::GJ8egEmes64::mV6JS7x5S5CFC6-R0HGvXw` |
| Move Whiteboards to a Project | POST | `/whiteboards/projects/{{projectId}}/whiteboards` | `conn_mod_def::GJ8erZpIPW8::u9Sl207ZRbGp1XD7Jq3Uuw` |
| Remove Whiteboards from a Project | DELETE | `/whiteboards/projects/{{projectId}}/whiteboards` | `conn_mod_def::GJ8erbsNvhw::csN1sYYbTuC_pyfRVCREWw` |
| Update a Whiteboard’s Basic Information (Metadata) | PUT | `/whiteboards/{{whiteboardId}}` | `conn_mod_def::GJ8egNF0bh0::VhxWle4BThaku43iQOIfBg` |
| Update a Whiteboard’s Collaborators | PATCH | `/v2/whiteboards/{{whiteboardId}}/collaborator` | `conn_mod_def::GJ8ebX5InCQ::mg80qgacQ92PBxN1yX6Kkw` |
| Update a Whiteboard’s Share Setting | PATCH | `/whiteboards/{{whiteboardId}}/share_setting` | `conn_mod_def::GJ8ezZA7ZLw::HxyYU24eTyGfU_G18iV-cQ` |

### ZoomEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Zoom Event’s Details | GET | `/zoom_events/events/{{eventId}}` | `conn_mod_def::GJ8ehRKKHa8::YsmX7xrtRZ-D-NTFIbBhTA` |
| Get an Event’s Ticket Registrations Report | GET | `/zoom_events/events/{{eventId}}/reports/ticket_registration` | `conn_mod_def::GJ8eumI7ERY::EuatKSPyQZ2QsqA-n6fzfA` |
| List an Event’s Registration Questions (Zoom Events) | GET | `/zoom_events/events/{{eventId}}/questions` | `conn_mod_def::GJ8e3lJ5xT8::2HJlBFxZSzS4UeOTZDCTcQ` |
| List Zoom Events | GET | `/zoom_events/events` | `conn_mod_def::GJ8ehZWXqs8::sj9PNUQLTIybgrz6G22bng` |
| Create a Zoom Event | POST | `/zoom_events/events` | `conn_mod_def::GJ8ehIpv6pY::N4RyRU-OSs2QY-jWh2XC4A` |
| Delete a Zoom Event Draft | DELETE | `/zoom_events/events/{{eventId}}` | `conn_mod_def::GJ8ehK-GFDk::q4ZrFydjSXi5cEdHkiwjUw` |
| Update a Zoom Event | PATCH | `/zoom_events/events/{{eventId}}` | `conn_mod_def::GJ8ehhz0aSM::fgv3Wp2nQqevpsUbM4rB-w` |
| Update a Zoom Event’s Host Actions | POST | `/zoom_events/events/{{eventId}}/event_actions` | `conn_mod_def::GJ8ehRnnmuI::TP-7aG5IQeyKB0qkZgdHFQ` |
| Update an Event’s Attendee Actions | PATCH | `/zoom_events/events/{{eventId}}/attendee_action` | `conn_mod_def::GJ8eU7ed1H4::eeQrmJedTaGYkC_qxCJZSg` |
| Update an Event’s Registration Questions | PUT | `/zoom_events/events/{{eventId}}/questions` | `conn_mod_def::GJ8e3jiwb90::Bo4fXV_jRveLGVTMxEHTKQ` |

### ContactCenterUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Center User's Profile | GET | `/contact_center/users/{{userId}}` | `conn_mod_def::GJ8e5QJ7Y2E::66b6OsEMTEuWrxwWQbUtlw` |
| List Contact Center Users' Profiles | GET | `/contact_center/users` | `conn_mod_def::GJ8e5_2X_XU::XLIWED0YStC4KoHJOXURLg` |
| Batch Create Contact Center User Profiles | POST | `/contact_center/users/batch` | `conn_mod_def::GJ8e4fC-jI8::4KoeAmNcTIiiw5s2fnDmVw` |
| Batch Delete Contact Center Users | DELETE | `/contact_center/users` | `conn_mod_def::GJ8e4oIPQGs::2PrBjK4dTVS7QkUhu0x3Fw` |
| Batch Update Contact Center User Profiles | PATCH | `/contact_center/users` | `conn_mod_def::GJ8e4vez3rs::kVnH-PNNRImTxP-byrpu3w` |
| Create a Contact Center User Profile | POST | `/contact_center/users` | `conn_mod_def::GJ8e42BuU88::HzHKPzEnT7q3AMizTQ8v2g` |
| Delete a Contact Center User's Profile | DELETE | `/contact_center/users/{{userId}}` | `conn_mod_def::GJ8e4-nSwO0::daSEofI-Qg6YOXxk5xYWfQ` |
| Update a Contact Center User's Profile | PATCH | `/contact_center/users/{{userId}}` | `conn_mod_def::GJ8e6NRQSn4::6XzfyK5zSiyZwXJaUQxEAg` |
| Update a Contact Center User’s Status | PATCH | `/contact_center/users/{{userId}}/status` | `conn_mod_def::GJ8e6NhWLX4::gBlmfsGCTcajsPtLr96lqg` |

### ContactCenterTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact Center Team | GET | `/contact_center/teams/{{teamId}}` | `conn_mod_def::GJ8e2q_SIgo::fORFbJ6RSYCfGX-0TOMX0Q` |

8 more ContactCenterTeams actions are available through search.

This lists 90 of 1748 actions. For anything not here, call `search_one_platform_actions` with platform `zoom`. The full catalog is at https://www.withone.ai/knowledge/zoom.

## When a call fails

The error comes from Zoom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/zoom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
