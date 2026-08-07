---
name: ring-central
description: RingCentral offers a cloud‑based unified communications platform that combines business voice calling, messaging, SMS, fax, video meetings and AI‑powered contact center tools with global reliability, integrations and APIs to support scalable team collaboration and customer engagement. Read and write Ring Central data through One: userrole, telephonysessionparty, teams, notes, emergencylocation, calllog and more, 485 actions with real parameter documentation. Use whenever the user asks to look something up in Ring Central, create or update a record there, or build code against the Ring Central API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ring-central
  generated-from: one-knowledge-base
---

# Ring Central through One

RingCentral offers a cloud‑based unified communications platform that combines business voice calling, messaging, SMS, fax, video meetings and AI‑powered contact center tools with global reliability, integrations and APIs to support scalable team collaboration and customer engagement.

One exposes Ring Central through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ring-central` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ring Central is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ring Central account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### UserRole

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Standard User Role | GET | `/restapi/v1.0/dictionary/user-role/{{roleId}}` | `conn_mod_def::GI6NjSRxvvg::JLOzfYfzTTGf6UTUyGDcHg` |
| Get a User Role for an Account | GET | `/restapi/v1.0/account/{{accountId}}/user-role/{{roleId}}` | `conn_mod_def::GI6Njq5u1Hg::xmYQvrglSE2GvUAYUC3yYw` |
| Get an Account's Default User Role | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/user-role/default` | `conn_mod_def::GI6Ni9wiiQg::N5VdeJAUS86SjY9Mcmxrtw` |
| Create a Custom Role for an Account | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/user-role` | `conn_mod_def::GI6NjkXqixg::WqOxb8BpRW-kNxoU7W7aKg` |
| Delete a Custom User Role | DELETE | `/restapi/v1.0/account/{{accountId}}/user-role/{{roleId}}` | `conn_mod_def::GI6Nj8cXjeg::lIua8z8OTPuvw0zciIZlzw` |
| Set an Account's Default User Role | PUT | `/restapi/v1.0/account/{{accountId}}/user-role/default` | `conn_mod_def::GI6NjEeh7eA::HxOvDLXcSm-GZmdnjh_YPA` |
| Update a User Role for an Account | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/user-role/{{ROLEID}}` | `conn_mod_def::GI6NjzgUUVg::lYmjUd_RT5Kp0znKd7wOew` |

### TelephonySessionParty

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer a Call Party in a Telephony Session | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/telephony/sessions/{{TELEPHONYSESSIONID}}/parties/{{PARTYID}}/answer` | `conn_mod_def::GI6Nny6M5jA::Y0VhRyrmTfK2ah-tVubPrA` |
| Forward a Call Party in a Telephony Session | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/telephony/sessions/{{TELEPHONYSESSIONID}}/parties/{{PARTYID}}/forward` | `conn_mod_def::GI6NpJwRZBA::vyofwa_5Sz-M5ppCyFLJHA` |
| Hold a Party in a Telephony Session | POST | `/account/{{ACCOUNTID}}/telephony/sessions/{{TELEPHONYSESSIONID}}/parties/{{PARTYID}}/hold` | `conn_mod_def::GI6Nm71pv1g::Py6vE3FbTEiOzbIiNZM-hA` |
| Ignore a Call for a Party in a Call Queue Session | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/telephony/sessions/{{TELEPHONYSESSIONID}}/parties/{{PARTYID}}/ignore` | `conn_mod_def::GI6NnSgeHmA::MfxGS4TdSOSQ7NI_dx3qeg` |
| Reject a Call Party in a Telephony Session | POST | `/account/{{accountId}}/telephony/sessions/{{telephonySessionId}}/parties/{{partyId}}/reject` | `conn_mod_def::GI6NnKkbvrA::Wt1XDAEqREmyaJaDdZMloA` |
| Transfer a Call Party in a Telephony Session | POST | `/account/{{ACCOUNTID}}/telephony/sessions/{{TELEPHONYSESSIONID}}/parties/{{PARTYID}}/transfer` | `conn_mod_def::GI6Nne5pSXg::69QXzls1Rqe4oECtCR438Q` |
| Un-hold a Call Party in a Telephony Session | POST | `/restapi/v1.0/account/{{accountId}}/telephony/sessions/{{telephonySessionId}}/parties/{{partyId}}/unhold` | `conn_mod_def::GI6NnDbWRBA::wGGFJJVKTdOIQ2-KMpFxnA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams | GET | `/team-messaging/v1/teams` | `conn_mod_def::GI6ODU01aqg::AxA4djb7Qa2aCrgcm423mg` |
| Archive a Team | POST | `/team-messaging/v1/teams/{{CHATID}}/archive` | `conn_mod_def::GI6OETkssNA::N_e4xhZXT3i3Bca1Hg2H7Q` |
| Create Team | POST | `/team-messaging/v1/teams` | `conn_mod_def::GI6ODbtPa9g::nzR0-yccQ36YgYe_FWsU5w` |
| Delete a Team | DELETE | `/team-messaging/v1/teams/{{chatId}}` | `conn_mod_def::GI6ODuzybsg::i4QtGnGgRq-tu6QNVS36hw` |
| Join a Team | POST | `/team-messaging/v1/teams/{{CHATID}}/join` | `conn_mod_def::GI6OD2Jc80A::WEV1lspERLCsUbY3yzHm9w` |
| Leave a Team | POST | `/team-messaging/v1/teams/{{CHATID}}/leave` | `conn_mod_def::GI6OD9ugGiA::nuxNzmygQQ2sWx3ay9tH8g` |
| Unarchive a Team | POST | `/team-messaging/v1/teams/{{CHATID}}/unarchive` | `conn_mod_def::GI6OEZVYMgg::bwWZ_Wj0RPmDH6efFUPMgw` |

### Notes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Note | GET | `/team-messaging/v1/notes/{{NOTEID}}` | `conn_mod_def::GI6N2cJ-kbA::l__XJpT6RFKGcNzGghxLBw` |
| Delete a Note | DELETE | `/team-messaging/v1/notes/{{noteId}}` | `conn_mod_def::GI6N2sc1Kyg::zyDVfSQ6RuO1Qez0kiP9YQ` |
| Lock a Note | POST | `/team-messaging/v1/notes/{{NOTEID}}/lock` | `conn_mod_def::GI6N2z5f7aA::Tsg1wEGdSoWaybUeLh_QuQ` |
| Publish a Note | POST | `/team-messaging/v1/notes/{{noteId}}/publish` | `conn_mod_def::GI6N3CCBdGA::jLoVVLPWRPqyvsPx2hligA` |
| Unlock a Note | POST | `/team-messaging/v1/notes/{{NOTEID}}/unlock` | `conn_mod_def::GI6N28N7Qsg::aFm79bX-SB-jSPh1FIb2_g` |
| Update a Note | PATCH | `/team-messaging/v1/notes/{{noteId}}` | `conn_mod_def::GI6N2ll1V-g::ye2fLwvJSjifeUHngk4FcQ` |

### EmergencyLocation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Emergency Location | GET | `/restapi/v1.0/account/{{accountId}}/extension/{{extensionId}}/emergency-locations/{{locationId}}` | `conn_mod_def::GI6N6ct4TXg::OK8UBrUzRhe4AD2hz8Fvpw` |
| Get an Account's Emergency Location | GET | `/restapi/v1.0/account/{{accountId}}/emergency-locations/{{locationId}}` | `conn_mod_def::GI6N5uAuq0g::fymSOokUQtuYIw6tyA98bQ` |
| Add an Emergency Location to an Account | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-locations` | `conn_mod_def::GI6N5l68dHg::QA16ft6CSf-trEtc-5_Lxg` |
| Create a User's Emergency Location | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/emergency-locations` | `conn_mod_def::GI6N6VXXkhg::neRjmnwGRHClr5hLmPGRAw` |
| Delete an Account’s Emergency Location | DELETE | `/restapi/v1.0/account/{{accountId}}/emergency-locations/{{locationId}}` | `conn_mod_def::GI6N5-Ec8iA::1PIOMwU-QpiULX8CRDAxwA` |
| Update an Emergency Location | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-locations/{{LOCATIONID}}` | `conn_mod_def::GI6N50xjnLA::1dUGtG92RGOPmxO57ctNtQ` |

### CallLog

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Call Record(s) | GET | `/restapi/v1.0/account/{{accountId}}/extension/{{extensionId}}/call-log/{{callRecordId}}` | `conn_mod_def::GI6NLuC7k2g::rRgVqIcGRFOOIXB3ItntFQ` |
| Get Company Call Record(s) by ID | GET | `/restapi/v1.0/account/{{accountId}}/call-log/{{callRecordId}}` | `conn_mod_def::GI6NMZD-nRg::xcI4BIGxSGeJ6eNJKgVt5w` |
| List a Company's Call Records | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/call-log` | `conn_mod_def::GI6NMBCKYvg::YJbwTaNsSbSYtpHHp5uLMQ` |
| List a User's Call Records | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/call-log` | `conn_mod_def::GI6NKwtfs3g::h9iGa1f_SV6PAxJLq72DXQ` |
| Delete a User's Call Records | DELETE | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/call-log` | `conn_mod_def::GI6NLZUcpdg::RR5cY1v3TTqvu3Q9RQBPCg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | GET | `/scim/v2/Users` | `conn_mod_def::GI6NPQWzuxA::U50PRYVDRhu_6TXRamXZfA` |
| Create User | POST | `/scim/v2/Users` | `conn_mod_def::GI6NPXeS8gA::xeTeWBgoTrOL-_ZFJcSqzg` |
| Delete a User by SCIM User ID | DELETE | `/scim/v2/Users/{{SCIMUSERID}}` | `conn_mod_def::GI6NQLO8qkg::erVTbPXVTbC6sGeqt-EgmA` |
| Search or List Users | POST | `/scim/v2/Users/.search` | `conn_mod_def::GI6NPfEWpFA::3Yks9PD0QJKBDOtJiuXFog` |
| Update a User (Partial Update) | PATCH | `/scim/v2/Users/{{SCIMUSERID}}` | `conn_mod_def::GI6NQCTI6pA::jufcj8xST7y4mj7riLcaow` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook or Multiple Webhooks | GET | `/team-messaging/v1/webhooks/{{webhookId}}` | `conn_mod_def::GI6NVR0xVwg::gC029W8JRSyCgvy0ruI4tw` |
| List Webhooks | GET | `/team-messaging/v1/webhooks` | `conn_mod_def::GI6NVKmfT5g::scYLOLGpRMSABZrodLAZ1w` |
| Activate a Webhook | POST | `/team-messaging/v1/webhooks/{{WEBHOOKID}}/activate` | `conn_mod_def::GI6NVgbvy5A::t6ruv8PDRdq7n_dlLZEBkw` |
| Delete a Webhook | DELETE | `/team-messaging/v1/webhooks/{{WEBHOOKID}}` | `conn_mod_def::GI6NVZWrJvA::yux-_P_0TKacz8n31lE9Ag` |
| Suspend a Webhook | POST | `/team-messaging/v1/webhooks/{{WEBHOOKID}}/suspend` | `conn_mod_def::GI6NVmoPriA::kEuRPe2MRLCOuVY7hKn7Dg` |

### WebinarSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webinar Subscription by ID | GET | `/webinar/notifications/v1/subscriptions/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6NYeWNUuA::pHZ1zxoeSTevYxlkg7LPCQ` |
| Cancel a Webinar Subscription | DELETE | `/webinar/notifications/v1/subscriptions/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6NYrFhwkg::OWRbwZqbQIan7okDrGfcSQ` |
| Create Webinar Subscription | POST | `/webinar/notifications/v1/subscriptions` | `conn_mod_def::GI6NYV8oxHg::BqtmdalmT7SYHqvJb1FVKg` |
| Renew a Webinar Subscription | POST | `/webinar/notifications/v1/subscriptions/{{SUBSCRIPTIONID}}/renew` | `conn_mod_def::GI6NY2G7EYA::Oo5J88VETkGPDRV_Mxa--g` |
| Update a Webinar Subscription | PUT | `/webinar/notifications/v1/subscriptions/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6NYk7MTTg::WbTRZM-XS5-ZHqxN_68oCA` |

### CallMonitoringGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Call Monitoring Groups | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/call-monitoring-groups` | `conn_mod_def::GI6Na7vJO0A::6fyPgBMFRv6UvEDFr8rVjA` |
| Create a Call Monitoring Group for an Account | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/call-monitoring-groups` | `conn_mod_def::GI6NbClrAxg::6i30P9wLTiCP362sYR3BIg` |
| Delete a Call Monitoring Group for an Account | DELETE | `/restapi/v1.0/account/{{accountId}}/call-monitoring-groups/{{groupId}}` | `conn_mod_def::GI6NbUlhQjA::4ItlCrBnR4GfX66MGa5SQg` |
| Update a Call Monitoring Group | PUT | `/account/{{ACCOUNTID}}/call-monitoring-groups/{{GROUPID}}` | `conn_mod_def::GI6NbKh9BrA::bPJBqIhuTsu32MwzBqUBWA` |
| Update a Call Monitoring Group's Extension List | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/call-monitoring-groups/{{GROUPID}}/bulk-assign` | `conn_mod_def::GI6Nbk04ZKA::WHv0Q6ktQhm2zNRamPCcKw` |

### WebinarSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Historical Webinar Session | GET | `/webinar/history/v1/webinars/{{WEBINARID}}/sessions/{{SESSIONID}}` | `conn_mod_def::GI6NhHkzlhg::1Bu4Z-5uQ-m-S33bgEyfzA` |
| Get a Webinar Session | GET | `/webinar/configuration/v1/webinars/{{WEBINARID}}/sessions/{{SESSIONID}}` | `conn_mod_def::GI6ONN15bjA::cyiJWNg1RXGl--Ve_CcR6Q` |
| Create a Webinar Session | POST | `/webinar/configuration/v1/webinars/{{WEBINARID}}/sessions` | `conn_mod_def::GI6ONHYwFdA::x5FamfVlREysiEXQcl6ECg` |
| Delete a Webinar Session | DELETE | `/webinar/configuration/v1/webinars/{{WEBINARID}}/sessions/{{SESSIONID}}` | `conn_mod_def::GI6ONgMVVyA::dysOP27PRpeYiriyYf_gTA` |
| Update a Webinar's Session | PATCH | `/webinar/configuration/v1/webinars/{{WEBINARID}}/sessions/{{SESSIONID}}` | `conn_mod_def::GI6ONXkA3DA::edF0LiUIQ820HRHeKSW0Tg` |

### Subscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subscription by ID | GET | `/restapi/v1.0/subscription/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6NvJMcrhA::gw1dcv2KSvuCbXrn-uszFQ` |
| Cancel a Subscription | DELETE | `/restapi/v1.0/subscription/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6Nvah0krg::BQ5EiXyJT4iPzE4aaUBKEg` |
| Create Subscription | POST | `/restapi/v1.0/subscription` | `conn_mod_def::GI6NvAUv2vA::DIqy9Dx9SniMr2H8NLl2rA` |
| Renew a Subscription | POST | `/subscription/{{SUBSCRIPTIONID}}/renew` | `conn_mod_def::GI6Nvh8OKSA::kYWrrImEQjGhyCqQnM5HNg` |
| Update a Subscription | PUT | `/restapi/v1.0/subscription/{{SUBSCRIPTIONID}}` | `conn_mod_def::GI6NvR4xWvA::a0ZppF-dRfK2FO-e0YrKxg` |

### WirelessPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Wireless Points | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-address-auto-update/wireless-points` | `conn_mod_def::GI6N7PmNVPg::Wz25f2vlRyCfCAbTHJsWlA` |
| Create a Wireless Point for an Account | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-address-auto-update/wireless-points` | `conn_mod_def::GI6N7Wcd0wg::B68sX9n8TNOQ3VQbWIPiWQ` |
| Create Multiple Wireless Points for an Account | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-address-auto-update/wireless-points-bulk-create` | `conn_mod_def::GI6N9_G-oAA::152pNdaqSdqYSMnH6WMFdQ` |
| Delete a Wireless Point from an Account | DELETE | `/account/{{accountId}}/emergency-address-auto-update/wireless-points/{{pointId}}` | `conn_mod_def::GI6N7zKUv8g::prALiFp9REizmjdYE6gdzg` |
| Update Multiple Wireless Points | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/emergency-address-auto-update/wireless-points-bulk-update` | `conn_mod_def::GI6N-OSzsTg::huJJdVfnRtmQ0KdKUX2iVQ` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Phone Numbers | GET | `/restapi/v2/accounts/{{ACCOUNTID}}/phone-numbers` | `conn_mod_def::GI6OKZq64vA::BMiJPr-ETFOUUsmJ5_tiKw` |
| Add Phone Numbers to an Account's Inventory | POST | `/restapi/v2/accounts/{{ACCOUNTID}}/phone-numbers/bulk-add` | `conn_mod_def::GI6OKqDr0-A::VKowR8SeT-2avlUMPLaZyg` |
| Assign or Reassign a Phone Number for an Account | PATCH | `/restapi/v2/accounts/{{ACCOUNTID}}/phone-numbers/{{PHONENUMBERID}}` | `conn_mod_def::GI6OK_7DjPA::Gbq46E7URJ2aaEPN3O9jvA` |
| Delete Numbers from an Account's Inventory | DELETE | `/restapi/v2/accounts/{{ACCOUNTID}}/phone-numbers` | `conn_mod_def::GI6OKgjJsPA::3j0975p6ThKJKiWWpOkggA` |
| Replace a Phone Number for an Account | POST | `/restapi/v2/accounts/{{accountId}}/phone-numbers/{{phoneNumberId}}/replace` | `conn_mod_def::GI6OLHLV4CA::QAIdoozTTB-rJVgrwchiCQ` |

### CompanyMessageTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Message Template | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/message-store-templates/{{TEMPLATEID}}` | `conn_mod_def::GI6NNCEtFNA::yKVx7hKEROOlGFWE8IxNoA` |
| Create a Company Message Template | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/message-store-templates` | `conn_mod_def::GI6NM4CHdKg::Dx9ces2LTh2RDAG7QbXlag` |
| Delete a Company Message Template | DELETE | `/restapi/v1.0/account/{{accountId}}/message-store-templates/{{templateId}}` | `conn_mod_def::GI6NNRGT_TA::8ZDf-zUhRWOFoKkla2Ftyg` |
| Update a Company Message Template | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/message-store-templates/{{TEMPLATEID}}` | `conn_mod_def::GI6NNIwzAAA::R_y8qjWBRte1cXXQkAUpyQ` |

### MessageStoreTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Message Templates | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/message-store-templates` | `conn_mod_def::GI6NNaA_TfA::sF209_mBQc-xFOxQmY1ckg` |
| Create a User's Personal Message Template | POST | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/message-store-templates` | `conn_mod_def::GI6NNhik2lg::NepoyjDJQWWH9ghz5NnW4A` |
| Delete a User's Message Template | DELETE | `/restapi/v1.0/account/{{accountId}}/extension/{{extensionId}}/message-store-templates/{{templateId}}` | `conn_mod_def::GI6NN4AhoYg::gs_XUxmKQp2XwxMDp8E-Pw` |
| Update a User's Message Template | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/message-store-templates/{{TEMPLATEID}}` | `conn_mod_def::GI6NNwd3S8A::g11FujTaTNmt2thP0AtdQA` |

### BusinessHours

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Business Hours | GET | `/restapi/v1.0/account/{{ACCOUNTID}}/business-hours` | `conn_mod_def::GI6NOT3Rl_A::yw18A8JsRUifOvaLXS_U6Q` |
| Get a User's Business Hours | GET | `/restapi/v1.0/account/{{accountId}}/extension/{{extensionId}}/business-hours` | `conn_mod_def::GI6NOGT0iMA::5LsZ7hUsRg6LzGS-Yk364w` |
| Update a User's Business Hours | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/extension/{{EXTENSIONID}}/business-hours` | `conn_mod_def::GI6NONV4F7A::SmOItPKZT6m0sDctweERbg` |
| Update Company Business Hours | PUT | `/restapi/v1.0/account/{{ACCOUNTID}}/business-hours` | `conn_mod_def::GI6NOjXDNgg::58nro4l0Qd-BYHdoro0AHQ` |

This lists 90 of 485 actions. For anything not here, call `search_one_platform_actions` with platform `ring-central`. The full catalog is at https://www.withone.ai/knowledge/ring-central.

## When a call fails

The error comes from Ring Central, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ring-central

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
