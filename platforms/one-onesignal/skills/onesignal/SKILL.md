---
name: onesignal
description: OneSignal is a customer messaging platform that provides APIs for push notifications, in-app messages, email, and SMS, allowing developers and marketing teams to automate cross-channel engagement, transactional messaging, and user communication across web and mobile applications. Read and write OneSignal data through One: users, messages, subscriptions, templates, segments, notifications and more, 56 actions with real parameter documentation. Use whenever the user asks to look something up in OneSignal, create or update a record there, or build code against the OneSignal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: onesignal
  generated-from: one-knowledge-base
---

# OneSignal through One

OneSignal is a customer messaging platform that provides APIs for push notifications, in-app messages, email, and SMS, allowing developers and marketing teams to automate cross-channel engagement, transactional messaging, and user communication across web and mobile applications.

One exposes OneSignal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `onesignal` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm OneSignal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real OneSignal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| View User | GET | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}` | `conn_mod_def::GLK-NaalkeA::XEWWnlNJSjOWp6VZy_YZkw` |
| View User Identity | GET | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/identity` | `conn_mod_def::GLK-NayKzSg::u0_GrW-GTAOmotF5VAYQMQ` |
| View User Unread Message Count | GET | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/inbox/unread_count` | `conn_mod_def::GLK-Naej9uA::h9Tyg0MhSTSCtdvDPjIsjA` |
| Create User | POST | `/apps/{{appId}}/users` | `conn_mod_def::GLK-MEyo3VA::hAbUr9y8Tc6i6P_7LPGUMQ` |
| Delete Alias | DELETE | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/identity/{{aliasLabelToDelete}}` | `conn_mod_def::GLK-MDpVx1g::NTMzX87PTR2kg0sNSt5mkw` |
| Delete User | DELETE | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}` | `conn_mod_def::GLK-MM68ypA::o3mw_7naR-2SXNyhxuG1uA` |
| Update User | PATCH | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}` | `conn_mod_def::GLK-M5y5gmA::tX24iOcjTTaAKmAudQ1B8A` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| View Message | GET | `/notifications/{{messageId}}` | `conn_mod_def::GLK-NFTAKoA::qgDFsW4-SE6FAppvSEAK-w` |
| View Messages | GET | `/notifications` | `conn_mod_def::GLK-NE_bHUA::0KMm3UrAR2-UDNXkW0fVhQ` |
| Bulk Update Or Delete Message State | PATCH | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/inbox` | `conn_mod_def::GLK-LqZcONA::KjD4OzZwS_yrFz7L5d_Y-A` |
| Cancel Message | DELETE | `/notifications/{{messageId}}` | `conn_mod_def::GLK-LpLC7wg::KWzNLqmQSRma741infMoPg` |
| Message History | POST | `/notifications/{{messageId}}/history` | `conn_mod_def::GLK-MZLeqSA::o76kfYs_T6mSnP9vIPRMig` |
| Update Message State | PATCH | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/inbox/{{messageId}}` | `conn_mod_def::GLK-Mw2pRbA::7V9Hej0yQniKxCvCgyP1Lw` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Subscription By Alias | POST | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/subscriptions` | `conn_mod_def::GLK-MDo64KA::mMuvQSrxQniG3kRrA5FWYw` |
| Delete Subscription | DELETE | `/apps/{{appId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GLK-MNc_q4g::f5JRD-K_TEGapy_RdcJ0PQ` |
| Export Subscriptions CSV | POST | `/players/csv_export` | `conn_mod_def::GLK-MZ-PWTA::l-HJhiW9SoC1xRl_fs_MNg` |
| Transfer Subscription | PATCH | `/apps/{{appId}}/subscriptions/{{subscriptionId}}/owner` | `conn_mod_def::GLK-Mlo9X0g::i7EKJyVVSQ25nZkuZuxSow` |
| Update Subscription | PATCH | `/apps/{{appId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GLK-M4Z_hag::QBAmqk2pRuWVl4fnVumCUQ` |
| Update Subscription By Token | PATCH | `/apps/{{appId}}/subscriptions_by_token/{{tokenType}}/{{token}}` | `conn_mod_def::GLK-M5C4ITg::FEtXYZ_ET8WyYBOUn8Pt3w` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| View Template | GET | `/templates/{{templateId}}` | `conn_mod_def::GLK-NTHU-6g::kzRENdhSSZqObRigufRLVA` |
| View Templates | GET | `/templates` | `conn_mod_def::GLK-NNf3BFA::CAMZtpdSTCmUTsRJqb4N0Q` |
| Copy Template To Another App | POST | `/templates/{{templateId}}/copy_to_app` | `conn_mod_def::GLK-LpbkjQg::Bb9B826GT-GLXTI7syJ3iA` |
| Create Template | POST | `/templates` | `conn_mod_def::GLK-MDl3jLg::7uXvL_hZSCitgQVrXUkUwg` |
| Delete Template | DELETE | `/templates/{{templateId}}` | `conn_mod_def::GLK-MRxrS-A::jaBI4nY0SMWgWOkg_RiZgA` |
| Update Template | PATCH | `/templates/{{templateId}}` | `conn_mod_def::GLK-M8IOqzA::t-kSC5gsSX67cX_1Ph6HUg` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| View Segment | GET | `/apps/{{appId}}/segments/{{segmentId}}` | `conn_mod_def::GLK-NOTCulg::7PuPWCmgRL2WOG1sAH_J1A` |
| View Segments | GET | `/apps/{{appId}}/segments` | `conn_mod_def::GLK-NPVzOCg::W-tkzc2XTD6YWE3b7Gl4iQ` |
| Create Segment | POST | `/apps/{{appId}}/segments` | `conn_mod_def::GLK-L6fBbPg::GTcPlkrbRvWYPOtSU-4rKw` |
| Delete Segment | DELETE | `/apps/{{appId}}/segments/{{segmentId}}` | `conn_mod_def::GLK-MMxrxhA::mbwGrgMVTzaylmyXpZ2C1A` |
| Update Segment | PATCH | `/apps/{{appId}}/segments/{{segmentId}}` | `conn_mod_def::GLK-MwoO9Gg::7-74epxpQdey8X-z9tShGQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Audience Activity CSV | POST | `/notifications/{{messageId}}/export_events` | `conn_mod_def::GLK-Mb0vo1A::dtfuP92wQRuRVYfpZubxgw` |
| Push Notification | POST | `/notifications` | `conn_mod_def::GLK-MZ1_-WA::qeK36tlbTlK07nAiiDZ79g` |
| Send Email Notification | POST | `/notifications` | `conn_mod_def::GLK-MNstRSA::3ri3jLQ3Roir3f1XwqhOiw` |
| Send SMS Notification | POST | `/notifications` | `conn_mod_def::GLK-Mk27VKA::xakvAw5qTGSRbyRkc3Q33Q` |
| Unsubscribe Email With Token | POST | `/apps/{{appId}}/notifications/{{notificationId}}/unsubscribe` | `conn_mod_def::GLK-MoM1LjA::bH5C9kN7TNyNBVgTs-qplA` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| test connection | GET | `/apps/{{ONESIGNAL_APP_ID}}` | `conn_mod_def::GLK_WoT9VH4::7XHumugST12lzVeuYQbm8g` |
| View An App | GET | `/apps/{{appId}}` | `conn_mod_def::GLK-M5yc0qA::wd5k_So6QGycwc3qIzB23g` |
| View Apps | GET | `/apps` | `conn_mod_def::GLK-NEATHvg::P2_dcxkbRkqrG44kBI_2Dg` |
| Create An App | POST | `/apps` | `conn_mod_def::GLK-LoKyDJg::JkCZGjLOTsGUhi5D558jLw` |
| Update An App | PUT | `/apps/{{appId}}` | `conn_mod_def::GLK-Mv4hYZA::bSEX_tUAR6-H7AzI_rXIXw` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| View API Keys | GET | `/apps/{{appId}}/auth/tokens` | `conn_mod_def::GLK-ND5tbdg::n_9vaj9fT-Kbwzl60VsjHA` |
| Create API Key | POST | `/apps/{{appId}}/auth/tokens` | `conn_mod_def::GLK-L8OS7nA::Vt0msZleSe28w8NjY7LVLA` |
| Delete API Key | DELETE | `/apps/{{appId}}/auth/tokens/{{tokenId}}` | `conn_mod_def::GLK-MDrhq9g::lu2F0BI7Qw6yfmStswWU-Q` |
| Rotate API Key | POST | `/apps/{{appId}}/auth/tokens/{{tokenId}}/rotate` | `conn_mod_def::GLK-Mks1jFA::oED6RipIQpeFfpTF1uYh3Q` |
| Update API Key | PATCH | `/apps/{{appId}}/auth/tokens/{{tokenId}}` | `conn_mod_def::GLK-MwbC-dA::tj3Htqo8RMWbafoHFA5_1w` |

### Aliases

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Alias (by Subscription) | PATCH | `/apps/{{appId}}/subscriptions/{{subscriptionId}}/user/identity` | `conn_mod_def::GLK-LyPvi6g::kLg0XJg0R4eNcWHw1ALjOQ` |
| Create Or Update Alias | PATCH | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/identity` | `conn_mod_def::GLK-L7exnFA::o5PDx2r3T_-d2ONVcnSw0A` |

### LiveActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Start Live Activity | POST | `/apps/{{appId}}/activities/activity/{{activityType}}` | `conn_mod_def::GLK-Mk5klMA::5YM1wh5zRa2tB1le21dJww` |
| Update Live Activity | POST | `/apps/{{appId}}/live_activities/{{activityId}}/notifications` | `conn_mod_def::GLK-MxG0v7g::uv1dcUCxRTuRw2DuZ4Vkcg` |

### UserIdentity

| Action | Method | Path | Action id |
|---|---|---|---|
| View User Identity (By Subscription) | GET | `/apps/{{appId}}/subscriptions/{{subscriptionId}}/user/identity` | `conn_mod_def::GLK-NcnThVA::Mwtl25IsSXmi30IYbJEz_A` |

### UserBroadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| View User Broadcasts | GET | `/apps/{{appId}}/users/by/{{aliasLabel}}/{{aliasId}}/inbox` | `conn_mod_def::GLK-Nd2EOzA::lG2OK-n_TqGtM2dFKJK1QA` |

### CustomEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Custom Events | POST | `/apps/{{appId}}/custom_events` | `conn_mod_def::GLK-L6o3HDA::Xnnv8R9vRFayfx6WpfiXGg` |

### InboxBroadcastMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Inbox Broadcast Message | POST | `/apps/{{appId}}/inbox` | `conn_mod_def::GLK-L7Ae3-g::a3yzxhXISpumfzxAI7Sqow` |

### Outcomes

| Action | Method | Path | Action id |
|---|---|---|---|
| View Outcomes | GET | `/apps/{{appId}}/outcomes` | `conn_mod_def::GLK-NNbsiZA::BfAHChDUSOOLdd8LayaBkg` |

### AuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audit Logs | GET | `/organizations/{{organizationId}}/audit_logs` | `conn_mod_def::GLK-Mc-pGYA::4CFsEKJ3Q7y2lRk5jDS1dQ` |

### Broadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| View Broadcasts | GET | `/apps/{{appId}}/inbox` | `conn_mod_def::GLK-NFAIW0g::BG2jXyj-QqKW8zULiS0czQ` |

## When a call fails

The error comes from OneSignal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/onesignal

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
