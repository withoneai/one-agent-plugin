---
name: mailersend
description: MailerSend is an email delivery platform that provides APIs, SMTP relay, templates, and analytics for sending transactional emails and managing email infrastructure, allowing developers and product teams to integrate reliable email communications, monitor performance, and automate message workflows within applications. Read and write Mailersend data through One: domains, emailverification, identities, smswebhooks, users, webhooks and more, 97 actions with real parameter documentation. Use whenever the user asks to look something up in Mailersend, create or update a record there, or build code against the Mailersend API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailersend
  generated-from: one-knowledge-base
---

# Mailersend through One

MailerSend is an email delivery platform that provides APIs, SMTP relay, templates, and analytics for sending transactional emails and managing email infrastructure, allowing developers and product teams to integrate reliable email communications, monitor performance, and automate message workflows within applications.

One exposes Mailersend through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailersend` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailersend is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailersend account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Domain | GET | `/v1/domains/{{domainId}}` | `conn_mod_def::GLUxID0uX5g::tpe4BETHRL2ZON1XEV9UDQ` |
| Get Verification Status for a Domain | GET | `/v1/domains/{{domainId}}/verify` | `conn_mod_def::GLUxIEbymjA::KzIi9d6GQ_y4DUctNOWjpA` |
| List Domains | GET | `/v1/domains` | `conn_mod_def::GLUxH59EJlA::N9p87r4ZR_-fu4o9V9PX3g` |
| Add a Domain | POST | `/v1/domains` | `conn_mod_def::GLUxH6kjDQg::s0M9D9gPRVGr0457RedWRQ` |
| Delete a Domain | DELETE | `/v1/domains/{{domainId}}` | `conn_mod_def::GLUxH6PF9VA::78J8aK9JQQmq5zJVrScX3w` |
| Update Domain Settings | PUT | `/v1/domains/{{domainId}}/settings` | `conn_mod_def::GLUxIEUJWDA::fGGFVXYyTEauy3fKtR6zzg` |

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Email Verification List | GET | `/v1/email-verification/{{emailVerificationId}}` | `conn_mod_def::GLUxIM5jXMA::YvGtl8_6TqOVlWm24q4ZxQ` |
| Get All Email Verification Lists | GET | `/v1/email-verification` | `conn_mod_def::GLUxIVEOw1g::iBHAc-TgRZy0K-4vU4c2nA` |
| Verify an Email Verification List | GET | `/v1/email-verification/{{emailVerificationId}}/verify` | `conn_mod_def::GLUxIVsHpmg::ZhwfCiI0RNqX3i9LJxqQMg` |
| Create an Email Verification List | POST | `/v1/email-verification` | `conn_mod_def::GLUxINSakGg::FTPtvNfhTmSvaVY2M_thpA` |
| Verify an Email | POST | `/v1/email-verification/verify` | `conn_mod_def::GLUxIWDKbWA::FWkl3kgCSIur60_6HR4h4g` |

### Identities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sender Identity by Email | GET | `/v1/identities/email/{{clientEmailCom}}` | `conn_mod_def::GLUxJKyYb1A::t-KHi2tgSgOvb7iaLtO_0Q` |
| Add a Sender Identity | POST | `/v1/identities` | `conn_mod_def::GLUxI0r6Z0A::JuZfkJrYSCiH6Mm_1JEj1g` |
| Delete a Sender Identity | DELETE | `/v1/identities/{{identityId}}` | `conn_mod_def::GLUxIxzcing::_AASIsiLQ22mn32zgcJDVw` |
| Delete a Sender Identity by Email | DELETE | `/v1/identities/email/{{clientEmail.com}}` | `conn_mod_def::GLUxIyCie7g::e76On5A0Q5O9DI67UiC0Tw` |
| Update a Sender Identity | PUT | `/v1/identities/{{identityId}}` | `conn_mod_def::GLUxJH_dtJg::w199N1LCQO-BKi6487daHA` |

### SmsWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single SMS Webhook | GET | `/v1/sms-webhooks/{{smsWebhookId}}` | `conn_mod_def::GLUxJ1pP99g::leV927GoT0GEeybKG3NGRA` |
| List SMS Webhooks | GET | `/v1/sms-webhooks` | `conn_mod_def::GLUxJs972lA::RtFtzPLyQumKcEFX_4-thA` |
| Create an SMS Webhook | POST | `/v1/sms-webhooks` | `conn_mod_def::GLUxJsVBgXA::TdDCBiS2TeCkcXjw0UXisQ` |
| Delete an SMS Webhook | DELETE | `/v1/sms-webhooks/{{smsWebhookId}}` | `conn_mod_def::GLUxJtf53TA::zS5RLR-fQZ2I9ntlUVeZgg` |
| Update a Single SMS Webhook | PUT | `/v1/sms-webhooks/{{smsWebhookId}}` | `conn_mod_def::GLUxJ13VjIg::XaWpWUEDTfy98kOi2bHqDw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get One User | GET | `/v1/users/{{userId}}` | `conn_mod_def::GLUxKoPTF0A::5L7MUXtkRw21vk1SMk-bqw` |
| List Users | GET | `/v1/users` | `conn_mod_def::GLUxKdf2KGg::FaK0yZOjSruwpr3zLkiZJA` |
| Add a User | POST | `/v1/users` | `conn_mod_def::GLUxKeICdDg::H67RF0wZRBueZu5kTHV9gA` |
| Delete a User | DELETE | `/v1/users/{{userId}}` | `conn_mod_def::GLUxKdZzObg::V_JVTi0-RDifKvMhfbkzgQ` |
| Update User | PUT | `/v1/users/{{userId}}` | `conn_mod_def::GLUxKnyRgEg::Xda1Y07uSr2aIhtjN3rMmQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GLUxK2nQhFg::bRIeksdOQOW2ivI-wC0WRA` |
| List Webhooks | GET | `/v1/webhooks` | `conn_mod_def::GLUxKqIl2OA::lwRzyw-PTM2lVbtt3FR3NQ` |
| Create a Webhook | POST | `/v1/webhooks` | `conn_mod_def::GLUxKvFVsqA::HYnCGf2SSLufonJUAex1Ew` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GLUxKnFzN9g::fzIiB9jsSw2EWlOVJDQnmg` |
| Update a Webhook | PUT | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GLUxK33qqmg::xtEXpSZzScqkkZfeafSs3w` |

### Recipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Recipient | GET | `/v1/recipients/{{recipientId}}` | `conn_mod_def::GLUxImkKSPA::3OpA4II8QzOxCCcCAHuqyQ` |
| Get Recipients | GET | `/v1/recipients` | `conn_mod_def::GLUxImjq1ig::bCgWozMdQ6uxzK02KcANMQ` |
| Get Recipients for a Domain | GET | `/v1/domains/{{domainId}}/recipients` | `conn_mod_def::GLUxIE5CSog::YESbiAp8Rm60mWFwAIG7vg` |
| Delete a Recipient | DELETE | `/v1/recipients/{{recipientId}}` | `conn_mod_def::GLUxImuUlYA::siLVbeFoTo2DJrSTqQIWMQ` |

### SmsInbounds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single SMS Inbound Route | GET | `/v1/sms-inbounds/{{smsInboundId}}` | `conn_mod_def::GLUxJcNIdaA::r1VIrljlSoOjyJSYN-RnEg` |
| Add an SMS Inbound Route | POST | `/v1/sms-inbounds` | `conn_mod_def::GLUxJTWvzWA::iPJjqAAmRTi1mBAgneHRmQ` |
| Delete an SMS Inbound Route | DELETE | `/v1/sms-inbounds/{{smsInboundId}}` | `conn_mod_def::GLUxJTi84mg::OG-HktDzQ3y-JiEAjBgR0A` |
| Update an SMS Inbound Route | PUT | `/v1/sms-inbounds/{{smsInboundId}}` | `conn_mod_def::GLUxJb_C9Hg::b1KUAu78QiqGTCab5-qZ8g` |

### SmtpUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single SMTP User for a Domain | GET | `/v1/domains/{{domainId}}/smtp-users/{{smtpUserId}}` | `conn_mod_def::GLUxJ1_NVUg::McDoZ4DWSrCtZFlKN74C8w` |
| List SMTP Users for a Domain | GET | `/v1/domains/{{domainId}}/smtp-users` | `conn_mod_def::GLUxJ1aahUA::p_gJCiCPSKiXBfEW7k1rEg` |
| Delete SMTP User for a Domain | DELETE | `/v1/domains/{{domainId}}/smtp-users/{{smtpUserId}}` | `conn_mod_def::GLUxJ1QV0kg::1j7NzokSS_Kc-yzN9b69Lg` |
| Update SMTP User for a Domain | PUT | `/v1/domains/{{domainId}}/smtp-users/{{smtpUserId}}` | `conn_mod_def::GLUxKATWOCA::QwDN35WWQaWglLN2PkGpAw` |

### Inbound

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Inbound Route | GET | `/v1/inbound/{{inboundId}}` | `conn_mod_def::GLUxIeRy6Qg::svx2tzqLS3WZMKsJWUwAHg` |
| Add an Inbound Route | POST | `/v1/inbound` | `conn_mod_def::GLUxIVkeXJg::1NtrA9qKTSyhQHgjRdWAGQ` |
| Update an Inbound Route | PUT | `/v1/inbound/{{inboundId}}` | `conn_mod_def::GLUxIeEEFJA::dqcT4Kx0TCuOIFNsNoc0wQ` |

### SmsRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Recipient | GET | `/v1/sms-recipients/{{smsRecipientId}}` | `conn_mod_def::GLUxJslNgEg::55i3K_6ITE-GqU_JSIfkBQ` |
| List SMS Recipients | GET | `/v1/sms-recipients` | `conn_mod_def::GLUxJkfydxA::wO9KRdbWRlSbQXwvZKhnfg` |
| Update a Single SMS Recipient | PUT | `/v1/sms-recipients/{{smsRecipientId}}` | `conn_mod_def::GLUxJtGFcag::V-_XWNteQxeXSznYYzYmBA` |

### SmsPhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Phone Number | GET | `/v1/sms-numbers/{{smsNumberId}}` | `conn_mod_def::GLUxJk2Fg0g::a9fUnPRkSqOSC6M0UhjkDg` |
| List SMS Phone Numbers | GET | `/v1/sms-numbers` | `conn_mod_def::GLUxJksd6Yg::p20svIw8QdyHYzDnTZyeIw` |
| Delete an SMS Phone Number | DELETE | `/v1/sms-numbers/{{smsNumberId}}` | `conn_mod_def::GLUxJksW_Bg::8yswYC-FRKifK53TuWfYkA` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Hard Bounces Recipients From Suppressions | GET | `/v1/suppressions/hard-bounces` | `conn_mod_def::GLUxKUzcYtg::dTKDhI8AT1qYLBwNjBoSkQ` |
| Add Recipients to the Blocklist Suppression List | POST | `/v1/suppressions/blocklist` | `conn_mod_def::GLUxJ-xP8dg::3BFLO_uAQWmnj_SPEMDdXA` |
| Add Recipients to the Unsubscribes Suppression List | POST | `/v1/suppressions/unsubscribes` | `conn_mod_def::GLUxKALhr2g::d8uM4XKLQoazo4R0E7xKqg` |

### Activities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Single Activity | GET | `/v1/activities/{{activityId}}` | `conn_mod_def::GLUxHtSivJA::TxpkdBG3TkSxrtYtP1u0Ow` |
| List Activities for a Domain | GET | `/v1/activity/{{domainId}}` | `conn_mod_def::GLUxHuQj5gg::LQ8NycXRQzayDAIz1ZCxcA` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Opens by Reading Environment | GET | `/v1/analytics/ua-type` | `conn_mod_def::GLUxHwmda3A::iG5I2ZSsREeYxGXkRv3Alg` |
| Opens By User-Agent | GET | `/v1/analytics/ua-name` | `conn_mod_def::GLUxH8HaH4A::4qOJvYukSo6RU9_fZcEsng` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Information for a Single Message | GET | `/v1/messages/{{messageId}}` | `conn_mod_def::GLUxIp1884A::3L824BuIRX-U8GFhSzNROA` |
| List Messages | GET | `/v1/messages` | `conn_mod_def::GLUxIdTnctg::RrDBeKFmRYWPdUMi15rzlA` |

### InboundRoutes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inbound Routes | GET | `/v1/inbound` | `conn_mod_def::GLUxIeD3feg::IPGFMk4XTNGicp0zg09PAw` |
| Delete an Inbound Route | DELETE | `/v1/inbound/{{inboundId}}` | `conn_mod_def::GLUxIeWbNJg::9XkPRpy3QemyIMTzc-k_cQ` |

### ScheduledMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scheduled Messages | GET | `/v1/message-schedules` | `conn_mod_def::GLUxIx0KqxA::utdggbkQS3maJ0Z4qZQ_Qw` |
| Delete a Scheduled Message | DELETE | `/v1/message-schedules/{{messageId}}` | `conn_mod_def::GLUxImkgIrA::rcZZa3oJQy-9DOu3NH64ng` |

### SenderIdentities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sender Identities | GET | `/v1/identities` | `conn_mod_def::GLUxJHNMZ7A::BLJQqvqCSoGnA_zoyOxXIw` |
| Update a Sender Identity by Email | PUT | `/v1/identities/email/{{clientEmail.com}}` | `conn_mod_def::GLUxJInO9og::BNO7vXI6STWbS_fzVWxsxg` |

### SmsMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an SMS Message | GET | `/v1/sms-messages/{{smsMessageId}}` | `conn_mod_def::GLUxJb5Akmg::udKe-0oaRN2n40sXPplguA` |
| List SMS Messages | GET | `/v1/sms-messages` | `conn_mod_def::GLUxJam8vag::-H9SYdQ4T-eOeIq_TPz70g` |

### HardBouncesSuppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Recipients to the Hard Bounces Suppression List | POST | `/v1/suppressions/hard-bounces` | `conn_mod_def::GLUxJ-pr58g::RyVJuTiNSeyUz6j-Z8K7LA` |
| Delete Hard Bounces Suppression Recipients | DELETE | `/v1/suppressions/hard-bounces` | `conn_mod_def::GLUxKJdnI5g::aX9Oy0JQQO6MJZ3JABBBCA` |

### SpamComplaintsSuppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Recipients to the Spam Complaints Suppression List | POST | `/v1/suppressions/spam-complaints` | `conn_mod_def::GLUxJ_dOPsg::CdjprTk8QIOGwsYyd7X2vw` |
| Delete Spam Complaints Suppression Recipients | DELETE | `/v1/suppressions/spam-complaints` | `conn_mod_def::GLUxKMLsitA::7kLAf_c0TdqEQcyaybF14w` |

### BlocklistRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Blocklist Recipients | GET | `/v1/suppressions/blocklist` | `conn_mod_def::GLUxKMytvBA::LfeCY-Z0Q8-FxZoGQlnV4A` |
| Delete Blocklist Recipients | DELETE | `/v1/suppressions/blocklist` | `conn_mod_def::GLUxKI0hgBg::nFeLBDS0QuCQPCf_GJ15EQ` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Token | DELETE | `/v1/token/{{tokenId}}` | `conn_mod_def::GLUxKdtBqeg::CgVM-SO-RTyb_Z7ozMzd4g` |
| Update a Token's Settings | PUT | `/v1/token/{{tokenId}}/settings` | `conn_mod_def::GLUxKfFtEEA::Bx7Z8WMkQH6-X1p9paJ9Zg` |

### ActivityDataByDate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity Data by Date | GET | `/v1/analytics/date` | `conn_mod_def::GLUxHu-nwmA::688LsPEBQQWGe8gKiyY0uQ` |

### AnalyticsCountry

| Action | Method | Path | Action id |
|---|---|---|---|
| Opens by Country | GET | `/v1/analytics/country` | `conn_mod_def::GLUxHx8ek8A::S24jIXJdTzGyheAO2KVYaA` |

### ApiQuota

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Quota | GET | `/v1/api-quota` | `conn_mod_def::GLUxH59fMDA::vCwCSo-pT82Do43Ci7zVsw` |

### DnsRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DNS Records for a Domain | GET | `/v1/domains/{{domainId}}/dns-records` | `conn_mod_def::GLUxIEUHIcg::vHq8JylQSyyIWcGX57uUbA` |

### BulkEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Bulk Emails | POST | `/v1/bulk-email` | `conn_mod_def::GLUxIM-E5dg::M5zYOhc5QpO8pATep0s9EQ` |

### BulkEmailStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Email Status | GET | `/v1/bulk-email/{{bulkEmailId}}` | `conn_mod_def::GLUxINXhh4g::xR1bIrdhRcy_U9LNZ3NjGw` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an Email | POST | `/v1/email` | `conn_mod_def::GLUxINnPREg::UrVZm39sQEi-8l4gXGmQcg` |

### EmailVerificationResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Results Using Email Verification | GET | `/v1/email-verification/{{emailVerificationId}}/results` | `conn_mod_def::GLUxIV9yxNA::PpS_QJlpTRGs6buPgkE7Kw` |

### MessageSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Scheduled Message | GET | `/v1/message-schedules/{{messageId}}` | `conn_mod_def::GLUxI_RG07A::hxuJIKRnSFWE8zGu27gkzA` |

### SenderIdentity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Sender Identity | GET | `/v1/identities/{{identityId}}` | `conn_mod_def::GLUxJH5sqAg::YaXJuGYmQGmRZx6gOIiOvg` |

### Sms

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an SMS | POST | `/v1/sms` | `conn_mod_def::GLUxJSqd9Ig::NOZEvYcbQzqpSuWNFP_hrg` |

### SmsActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List SMS Activities | GET | `/v1/sms-activity` | `conn_mod_def::GLUxJTG9YWg::-ui5yZiDQ4GHbwzJTOG0_w` |

### SmsActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Activity of a Single SMS Message | GET | `/v1/sms-activity/{{smsMessageId}}` | `conn_mod_def::GLUxJTXnlqA::7wHyE80BR72HOsieU5EerQ` |

This lists 90 of 97 actions. For anything not here, call `search_one_platform_actions` with platform `mailersend`. The full catalog is at https://www.withone.ai/knowledge/mailersend.

## When a call fails

The error comes from Mailersend, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailersend

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
