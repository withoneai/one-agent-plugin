---
name: sling
description: Sling simplifies workforce management by combining employee shift scheduling, time tracking, task management, and internal communication into a single cloud‑based platform. It lets managers create and adjust schedules in minutes, optimize labor costs, enable shift swaps and PTO requests, and message teams—all accessible via web and mobile. Read and write Sling data through One: shifts, users, conversations, channels, groups, organisations and more, 384 actions with real parameter documentation. Use whenever the user asks to look something up in Sling, create or update a record there, or build code against the Sling API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sling
  generated-from: one-knowledge-base
---

# Sling through One

Sling simplifies workforce management by combining employee shift scheduling, time tracking, task management, and internal communication into a single cloud‑based platform. It lets managers create and adjust schedules in minutes, optimize labor costs, enable shift swaps and PTO requests, and message teams—all accessible via web and mobile.

One exposes Sling through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sling` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sling is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sling account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Shifts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shift’s Detailed Information | GET | `/shifts/{{eventId}}/detailed` | `conn_mod_def::GJ7JJ6tC87Y::OmmHx_zsQIqySR2wy2z_Ng` |
| Get the Next Shift for a User | GET | `/shifts/next` | `conn_mod_def::GJ7JJUNUP2w::6r7kAdJvSYuQz7Yxbaid-A` |
| List a Shift’s Coworkers | GET | `/shifts/{{eventId}}/coworkers` | `conn_mod_def::GJ7JJ6nfBGU::ruH9y6ujTx2fB1N59eg0NA` |
| List a User’s Current Shifts | GET | `/shifts/current` | `conn_mod_def::GJ7JJV0exK8::87UvsNkdQe-PpK11luuAmg` |
| List Available Exchange Shifts for a Shift | GET | `/shifts/exchange/available/{{shiftId}}` | `conn_mod_def::GJ7JKBparNw::vBalAnGFQMSEVtQZL_8Ttg` |
| List Available Shifts | GET | `/shifts/available` | `conn_mod_def::GJ7JKCKjeQo::mzfNhT0OSVe1IQmeTEuHIA` |
| List Available Shifts | GET | `/shifts/available/list` | `conn_mod_def::GJ7JKB0oVoM::_rEGuJGqR2GW-rV9dQqs0A` |
| List Clock-In Eligible Shifts | GET | `/shifts/clockin` | `conn_mod_def::GJ7JJ6LiuXY::crvOCk00Rayf4B2XO3MPKQ` |
| Retrieve a Shift | GET | `/shifts/{{eventId}}` | `conn_mod_def::GJ7JJys22QI::aNu20ufhR-GTQDFeCkY6LQ` |
| Accept a Shift | POST | `/v1/shifts/{{shiftId}}/acceptance/accept` | `conn_mod_def::GJ7JIbTy9yU::n629dTsoSzCCOs983ofByg` |
| Accept Shifts in Bulk | POST | `/shifts/acceptance/bulk/accept` | `conn_mod_def::GJ7JIlclQA8::WopaG_toRn2nV2RoJz4sVg` |
| Add a Clock-In Timesheet to a Shift (Deprecated) | PUT | `/shifts/{{shiftId}}/clockin` | `conn_mod_def::GJ7JJUp3NrI::UxAg9oJpT_i3PNDfxPl3Uw` |

25 more Shifts actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a User’s SSN | GET | `/users/{{userId}}/ssn` | `conn_mod_def::GJ7JMQwZuvk::K3ONZ2dPT5OgfbgRJHTgiA` |
| Get a User’s Details | GET | `/v1/users/{{userId}}` | `conn_mod_def::GJ7JMlIuUuI::2DNNhfWMSymuUI6f8Pw9ng` |
| Get a User’s Supplemental Information (Extra) | GET | `/v1/users/{{userId}}/extra` | `conn_mod_def::GJ7JMO_lSsk::GGfdoQLzQVebb3koGvA3TA` |
| List Concise Users | GET | `/users/concise` | `conn_mod_def::GJ7JMO1xdXs::vwtuALdXR_Cu1B5FM-jX9A` |
| List Users in the Authenticated User’s Organization | GET | `/users` | `conn_mod_def::GJ7JMlUB22M::SadKHTSMSQuQ_uzx2Grhwg` |
| Retrieve a User's Description | GET | `/users/{{userId}}/description` | `conn_mod_def::GJ7JMbG9VjQ::pZYI8jXqS7qHFqGnYgJoQg` |
| Add a New User to the Organization | POST | `/users` | `conn_mod_def::GJ7JLw7WhVc::ukBrUKmCSDOSdOugJJCpag` |
| Add Users to an Organization in Bulk | POST | `/users/bulk` | `conn_mod_def::GJ7JMHh04GI::b294MfMQS1aoUUZuHhjQnw` |
| Bulk Update Users | PUT | `/users` | `conn_mod_def::GJ7JMtEKUJg::nxzN-OtqStepZ5a-Ya2VIg` |
| Export Users for an Organization | POST | `/users/export` | `conn_mod_def::GJ7JMldOtPw::4tqFRKndQwC11dD6X76_ng` |
| Invite a User to an Organization | POST | `/users/{{userId}}/invite` | `conn_mod_def::GJ7JMOuIUxU::lzfHLocGQzSOUAbsW-JqiQ` |
| Merge Users | POST | `/users/merge` | `conn_mod_def::GJ7JMczuAEQ::6MV5C09lRACiyKCanBMFmg` |

7 more Users actions are available through search.

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Conversation’s Details | GET | `/conversations/{{conversationId}}` | `conn_mod_def::GJ7JEQo_eew::EjDEsmPWTfKdSO1zug6bzA` |
| List a User’s Conversations | GET | `/conversations` | `conn_mod_def::GJ7JED8CmX0::6z-sIQ4eQ3uV8zab79RjHg` |
| Add a Message to a Conversation | POST | `/conversations/{{conversationId}}/messages` | `conn_mod_def::GJ7JD2aZdQ8::99QMH8kASHSWDDGFb-0WhQ` |
| Archive or Delete a Conversation | DELETE | `/v1/conversations/{{conversationId}}` | `conn_mod_def::GJ7JDxhhBYA::oM2y0h_4QdeEPG4xIt5Jqg` |
| Create a Conversation for the Authenticated User | POST | `/conversations` | `conn_mod_def::GJ7JD9sVOPg::KPiDq29wSAC47rBu01ajOg` |
| Enable Notifications for a Conversation | DELETE | `/conversations/{{conversationId}}/silence` | `conn_mod_def::GJ7JD8xtOlY::uCNIJcOdSSipqrelhdcgpg` |
| Export a Conversation's Messages to a File | POST | `/v1/conversations/{{conversationId}}/export` | `conn_mod_def::GJ7JEEsJ9HA::hohm-_VXSAavhUC843bUgg` |
| Pin a Conversation | POST | `/conversations/{{conversationId}}/pin` | `conn_mod_def::GJ7JEFBJZao::z26-yQRRQ-W3-AmsWG0CEg` |
| Remove Current User from a Conversation | DELETE | `/v1/conversations/{{conversationId}}/me` | `conn_mod_def::GJ7JD8z5SH0::tgvwDfsXTUiuw7qxNXf73w` |
| Send Bulk Messages (BCC-like) | POST | `/conversations/bulk/messages` | `conn_mod_def::GJ7JERL1EBo::tHRGOfUmS_OYBNadLHFrGQ` |
| Silence a Conversation (Stop Notifications) | POST | `/conversations/{{conversationId}}/silence` | `conn_mod_def::GJ7JEQuE35E::3bVR-EviQZWs-L6vxUZIMw` |
| Unarchive a Conversation | POST | `/conversations/{{conversationId}}/unarchive` | `conn_mod_def::GJ7JEPTTjBo::n2_eiHuQQbKloKLVNAdctg` |

4 more Conversations actions are available through search.

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Channel’s Details (Including Articles) | GET | `/v1/channels/{{channelId}}` | `conn_mod_def::GJ7JDmYNuXQ::ldv48twLSvKxkvPpftx5CQ` |
| List All Channels (Admin Only) | GET | `/channels/all` | `conn_mod_def::GJ7JDb8Icuc::yz8X1ZH2SmWz5kAxFK7mMA` |
| List the Authenticated User's Channels | GET | `/channels` | `conn_mod_def::GJ7JDnXaqYg::argN4TjpS9W0OAQzCXIXPw` |
| List Users Who Have Seen an Article in a Channel | GET | `/v1/channels/{{channelId}}/articles/{{articleId}}/seen` | `conn_mod_def::GJ7JDQj4gBs::c7R_rmQRSmWLbiAHOK9r2w` |
| Search Channels Accessible to the Authenticated User | GET | `/channels/search` | `conn_mod_def::GJ7JH7F8cq8::tkL6T8MeT4iMGDM7PAtUNQ` |
| Add an Article to a Channel | POST | `/v1/channels/{{channelId}}/articles` | `conn_mod_def::GJ7JC1FFLrY::LGXUpXz1RLeV4ZGxlrdYwQ` |
| Add Current User to a Channel’s Subscribers | POST | `/channels/{{channelId}}/subscribers` | `conn_mod_def::GJ7JCzh6i9o::kHi5Q0saQSWKmVbsmjVb_A` |
| Create a Channel | POST | `/channels` | `conn_mod_def::GJ7JCpJuF74::hnvJi4qAQp6jeG4-ofvY8A` |
| Delete a Channel | DELETE | `/v1/channels/{{channelId}}` | `conn_mod_def::GJ7JC792xPo::L6B_9cF2Te-mSvFmqflTmQ` |
| Mark a Channel Article as Seen | PUT | `/v1/channels/{{channelId}}/articles/{{articleId}}/seen` | `conn_mod_def::GJ7JDJpuTEs::ECtpziUeSJGzdFWoQUmwPA` |
| Mark a Channel’s Articles as Read | PUT | `/channels/{{channelId}}/read` | `conn_mod_def::GJ7JC8vNT9w::_broZLMtTYebmsnDW_z13Q` |
| Pin a Channel | POST | `/channels/{{channelId}}/pin` | `conn_mod_def::GJ7JDJG760k::1c_fgLIVT8awuxinvgaOUw` |

3 more Channels actions are available through search.

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group’s Details | GET | `/v1/groups/{{groupId}}` | `conn_mod_def::GJ7JFESW_8M::3-rsciCQS-SL5FwCultXnQ` |
| List Groups in an Organization | GET | `/groups` | `conn_mod_def::GJ7JFE7z0xg::rQi1XV7BTA2nVG5h9CvWuA` |
| Add Users to a Group | POST | `/groups/{{groupId}}/users` | `conn_mod_def::GJ7JEyHfszg::ovCWg0EqSn2R12rhS7kh5g` |
| Archive Groups | POST | `/groups/archive` | `conn_mod_def::GJ7JE9Zn2AY::Z50qxjteRqW5GwIE3VP1FQ` |
| Create a New Organization Group | POST | `/groups` | `conn_mod_def::GJ7JE8dKm-U::bmP4I-AHREGcaU9MmJBYtQ` |
| Delete a Group | DELETE | `/groups/{{groupId}}` | `conn_mod_def::GJ7JE9TAmbg::c0a20J1ESJWYmLYKJSwCcA` |
| Delete Groups | DELETE | `/groups` | `conn_mod_def::GJ7JE-Gvhgk::DArYxq7aRVCnzk5UREIvaQ` |
| Merge Groups | POST | `/groups/merge` | `conn_mod_def::GJ7JE9Z_va0::L9klRQnTSISbvNReu8hfhQ` |
| Remove a User from a Group | DELETE | `/groups/{{groupId}}/users/{{userId}}` | `conn_mod_def::GJ7JFEkZELE::81ADe06UQqWdhuQLu5T5Cw` |
| Un-archive Groups | POST | `/groups/unarchive` | `conn_mod_def::GJ7JFEtaJa8::osNRynHkQn27waUaut5f-Q` |
| Unarchive Archived Groups (Deprecated) | DELETE | `/groups/archive` | `conn_mod_def::GJ7JFKyfmXc::xqGTsax3SqW7Mb142qPwoQ` |
| Update a Group’s Details | PUT | `/v1/groups/{{groupId}}` | `conn_mod_def::GJ7JFLD2mWc::KnCyT5hQSGCM0ogp1UKfRw` |

1 more Groups actions are available through search.

### Organisations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organisation’s Details | GET | `/v1/organisations/{{orgId}}` | `conn_mod_def::GJ7JHMnGKvE::ga5WDpK4Qr-q2Io4Nmp8sw` |
| Retrieve an Organisation's Custom Industry Name | GET | `/organisations/customindustry` | `conn_mod_def::GJ7JG-pL7n4::GnlSozX2QiSL7ic5p-h98Q` |
| Retrieve an Organisation’s Invitation Slug | GET | `/organisations/{{orgId}}/invitation` | `conn_mod_def::GJ7JG_oH7Lw::mVXqE01qSGq1HpKJ0SSLTw` |
| Validate an Organisation Join Slug | GET | `/organisations/join/{{slug}}` | `conn_mod_def::GJ7JG85l9KM::lBTx6CFMQHi_KgjKiEI76A` |
| Accept an Organisation Invitation for an Invited User | POST | `/v1/organisations/{{orgId}}/invitation/user/{{invitedUserId}}` | `conn_mod_def::GJ7JLwanU9A::nPTmUebESTeGjbTKFXcypA` |
| Create an Organisation | POST | `/organisations` | `conn_mod_def::GJ7JG2ahptY::DJTJZIGIQHquh_iQatoQTg` |
| Create an Organisation Join Approval Notification (by Slug) | POST | `/organisations/join/{{slug}}` | `conn_mod_def::GJ7JG0qdnA8::W3SreRKORCG0bU5iyv47pw` |
| Delete an Organisation | POST | `/organisations/{{orgId}}/delete` | `conn_mod_def::GJ7JG8rSEZE::VTEP7Aq0SFiwnqeyvdkUeQ` |
| Deny an Organisation Invitation for an Invited User | DELETE | `/v1/organisations/{{orgId}}/invitation/user/{{invitedUserId}}` | `conn_mod_def::GJ7JQDiNpHE::O-FE9A7rRzGRPkCYLCXxhQ` |
| Set an Organisation's Unverified Users Limit | PUT | `/organisations/{{orgId}}/unverifieduserslimit` | `conn_mod_def::GJ7JHKScw4Q::yPzet6CDSpmdAU6h61CvKg` |
| Set Up an Organisation (Initial Setup) | POST | `/v1/organisations/{{orgId}}/setup` | `conn_mod_def::GJ7JHDJFj8A::W7LZFClBQbaoWgJ1HAkkag` |
| Update an Organisation's Details | PUT | `/organisations/{{orgId}}` | `conn_mod_def::GJ7JHKMnN9w::D6EZmMchQueeN6zL9PwyzQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Notifications | GET | `/notifications` | `conn_mod_def::GJ7JGL0mBS0::_55bUvcHRMqXpuCKsStzlQ` |
| Retrieve a Notification | GET | `/v1/notifications/{{notificationId}}` | `conn_mod_def::GJ7JGcRUxb8::VLCA6JB0Qh2H37iR5_paXQ` |
| Archive All Notifications for the Authenticated User | PUT | `/notifications/archive` | `conn_mod_def::GJ7JGSnHC1o::k-2V-Dr7Tz-eW5srEPLRDg` |
| Mark a Notification as Seen | PUT | `/notifications/{{notificationId}}/seen` | `conn_mod_def::GJ7JGVz1fuQ::D3PjkusPQOqAe-4e7lx-Mg` |
| Mark All Notifications as Read for the Authenticated User | PUT | `/notifications/read` | `conn_mod_def::GJ7JGVjIPHs::JkFzVC0-SXSfaG538vPwwA` |
| Mark Notifications Read or Archived (Bulk) | POST | `/notifications` | `conn_mod_def::GJ7JGULXvHU::CwL6ELQcTfOIwwXw6X3kTw` |
| Perform a Negative Action on a Notification | POST | `/v1/notifications/{{notificationId}}/negative` | `conn_mod_def::GJ7JGcKKHzM::qdtw_Zf1TAag74Y7BYx3Cw` |
| Perform a Neutral Action on a Notification | POST | `/v1/notifications/{{notificationId}}/neutral` | `conn_mod_def::GJ7JGcM-gdA::zD8yuRjAQD-P2jtiatQAkQ` |
| Perform an Affirmative Action on a Notification | POST | `/notifications/{{notificationId}}/affirmative` | `conn_mod_def::GJ7JGVhyLiw::H6d9jVQHTk6bdJIIaydhXg` |
| Update a Notification’s Read/Archived Status | PUT | `/v1/notifications/{{notificationId}}` | `conn_mod_def::GJ7JGe2y194::MBm2CxisQXegzKqXWW0QTw` |

### Sales

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sale's Details | GET | `/v1/sales/{{salesId}}` | `conn_mod_def::GJ7JHpXottk::iTqXzc64SpKHqTAr68WiYw` |
| List an Organization's Sales | GET | `/sales/list` | `conn_mod_def::GJ7JHrIy1LY::d851dcFhQZ2Tqv8h1wNLVA` |
| List Sales for a Location | GET | `/sales/list/{{locationId}}` | `conn_mod_def::GJ7JHx9n-JI::8Vz22PcaTc-qkDVYAj1RuQ` |
| Create a Sales Object in a List | POST | `/sales/list` | `conn_mod_def::GJ7JHoMMLk0::ItVhWmmvTGSmg2OoIx0LmA` |
| Delete a Sale | DELETE | `/sales/{{salesId}}` | `conn_mod_def::GJ7JHnjXWx8::TT81zWP4QI6E4LSZS4oRAw` |
| Import a Location’s Sales List | POST | `/sales/list/import` | `conn_mod_def::GJ7JH0irpgo::L8J_RRbnToWtEvJsv9myWA` |
| Update a Sale | PUT | `/sales/{{salesId}}` | `conn_mod_def::GJ7JHx4jwCc::O-Tn5l7lS3WxYG1x48VbAQ` |

### Leave

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Leave Application’s Details | GET | `/v1/leave/{{leaveId}}` | `conn_mod_def::GJ7JGBf_chw::DcorI-YUShqZuomUq6kKrA` |

6 more Leave actions are available through search.

This lists 90 of 384 actions. For anything not here, call `search_one_platform_actions` with platform `sling`. The full catalog is at https://www.withone.ai/knowledge/sling.

## When a call fails

The error comes from Sling, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sling

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
