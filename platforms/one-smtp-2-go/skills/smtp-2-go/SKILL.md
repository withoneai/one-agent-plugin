---
name: smtp-2-go
description: SMTP2GO is an email delivery platform that provides SMTP relay and email APIs for sending transactional and marketing messages, allowing developers and businesses to improve deliverability, monitor performance, and manage outbound email infrastructure across applications and services. Read and write SMTP2GO data through One: subaccount, allowedrecipients, apikeys, allowedsenders, smtpusers, ipauth and more, 68 actions with real parameter documentation. Use whenever the user asks to look something up in SMTP2GO, create or update a record there, or build code against the SMTP2GO API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: smtp-2-go
  generated-from: one-knowledge-base
---

# SMTP2GO through One

SMTP2GO is an email delivery platform that provides SMTP relay and email APIs for sending transactional and marketing messages, allowing developers and businesses to improve deliverability, monitor performance, and manage outbound email infrastructure across applications and services.

One exposes SMTP2GO through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `smtp-2-go` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SMTP2GO is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SMTP2GO account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Subaccount

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Subaccount | POST | `/v3/subaccount/add` | `conn_mod_def::GLlCK99HzxA::YTSRkKU4R_SHCutjk0n2JQ` |
| Close a Subaccount | POST | `/v3/subaccount/close` | `conn_mod_def::GLlCK-QSXxA::Xfm9-ebyTFu9b8RZCWZf8Q` |
| Edit a Subaccount | POST | `/v3/subaccount/edit` | `conn_mod_def::GLlCK99qwGA::rwVYDyOTQ6OuurXIBtbncQ` |
| Reinvite a Subaccount | POST | `/v3/subaccount/reinvite` | `conn_mod_def::GLlCK-VARDg::F3rqCwNpTPKCRufvCA3RkA` |
| Reopen a Closed Subaccount | POST | `/v3/subaccount/reopen` | `conn_mod_def::GLlCK_adVbg::U_B81D9nTfmxrhadbFnNNw` |

### AllowedRecipients

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Allowed Recipients | POST | `/v3/allowed_recipients/add` | `conn_mod_def::GLlCJgVCckg::YAkcj_KpSAe_xgSZqvYTvw` |
| Remove Allowed Recipients | POST | `/v3/allowed_recipients/remove` | `conn_mod_def::GLlCJhUAsHg::m_ZvvUHKROy7zkcvvni9-A` |
| Update Allowed Recipients | POST | `/v3/allowed_recipients/update` | `conn_mod_def::GLlCJg3ZlsA::qGz1NJR4RmmY6pPDxRNsEg` |
| View Allowed Recipients | POST | `/v3/allowed_recipients/view` | `conn_mod_def::GLlCJgWBBdA::oOVSW0BFQBWbLrMeEYWy_Q` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Add API Key | POST | `/v3/api_keys/add` | `conn_mod_def::GLlCJoKuqWg::FkZC5yVHSZOutHaj0SW22A` |
| Edit an API Key | PATCH | `/v3/api_keys/edit` | `conn_mod_def::GLlCJw6yLtA::j70bMU9aSuqduilXO-NTzQ` |
| Remove API Key | POST | `/v3/api_keys/remove` | `conn_mod_def::GLlCJw_nLGA::hi5QfqNcSuOUl9GAhIJM-Q` |
| View API Keys | POST | `/v3/api_keys/view` | `conn_mod_def::GLlCJwQy1eA::FnTaTcpsQoeDPWSQISEbyw` |

### AllowedSenders

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Allowed Senders | POST | `/v3/allowed_senders/add` | `conn_mod_def::GLlCJolgZEA::ZEDlGjexQRKTmkZU_ybGAA` |
| Remove Allowed Senders | POST | `/v3/allowed_senders/remove` | `conn_mod_def::GLlCJo2fVhA::wzL79IzIS3GHBUUl0JfwrA` |
| Update Allowed Senders | POST | `/v3/allowed_senders/update` | `conn_mod_def::GLlCJo1eCzg::VxBl3_7zSX-ei_5C1W6OKg` |
| View Allowed Senders | POST | `/v3/allowed_senders/view` | `conn_mod_def::GLlCJpYRDIA::hHdbqU0JQ4yHmp0xbRsrvg` |

### SmtpUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add SMTP User | POST | `/v3/users/smtp/add` | `conn_mod_def::GLlCKu-jUDg::WYUm_SuYTQ-7ML5d2TUXfg` |
| Edit SMTP User | PATCH | `/v3/users/smtp/edit` | `conn_mod_def::GLlCKwITNTA::K3WScf2iQjKQXYX1drcRmQ` |
| Remove an SMTP User | POST | `/v3/users/smtp/remove` | `conn_mod_def::GLlCKtnZ2DA::2wVpieQhQvCrXCmxYODFjw` |
| View SMTP Users | POST | `/v3/users/smtp/view` | `conn_mod_def::GLlCKr7Tfog::Ro5L4yfYQk6YliXTv6ecLw` |

### IpAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit an IP Auth | PATCH | `/v3/ip_auth/edit` | `conn_mod_def::GLlCKGyV2ng::x4M0iGy6RgCNbj5fyGAdGQ` |
| Remove IP Auth Entry | POST | `/v3/ip_auth/remove` | `conn_mod_def::GLlCKJ07e2A::uW1Qbg2MSVqMOxLlGOPniw` |
| View IP Auth | POST | `/v3/ip_auth/view` | `conn_mod_def::GLlCKSh5IIg::ycw951YsTamIbaZDoLDCnw` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Email | POST | `/v3/email/search` | `conn_mod_def::GLlCKHgbXLA::HePvva92QB-lkaHpoBQL5g` |
| Send Email | POST | `/v3/email/send` | `conn_mod_def::GLlCKKrxJ_A::MexUmS2jRuS_Io5V2S_NDw` |
| Send MIME Email | POST | `/v3/email/mime` | `conn_mod_def::GLlCKHqIPgA::9lzfVS8BQxKvotWM2QKp3g` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Sender Domain | POST | `/v3/domain/add` | `conn_mod_def::GLlCKR_mLkg::FzfMw2BuROKY9RVrA7iDig` |
| Edit Return Path Subdomain | POST | `/v3/domain/returnpath` | `conn_mod_def::GLlCKR4466g::wgd1w3VFRB-Z1u1tEpBebw` |
| Verify a Sender Domain | POST | `/v3/domain/verify` | `conn_mod_def::GLlCKdmJlng::E1Gk-28aQxaM1A29B_x8_g` |

### SingleSenderEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Single Sender Emails Using v3 | POST | `/v3/single_sender_emails/add` | `conn_mod_def::GLlCKYteY0g::654URHfpTFW-sk8FVb6-GQ` |
| Remove a Single Sender Email | POST | `/v3/single_sender_emails/remove` | `conn_mod_def::GLlCKbUDqHA::PPWmBm0HRsClNwjsw-LbhQ` |
| View Single Sender Emails | POST | `/v3/single_sender_emails/view` | `conn_mod_def::GLlCKj__0-A::NzHMU7lVSoGS0Fuy88rqyQ` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Cycle | POST | `/v3/stats/email_cycle` | `conn_mod_def::GLlCK4JB0EA::_2WwCC-BQmel0OP9n0GcHg` |
| Email History | POST | `/v3/stats/email_history` | `conn_mod_def::GLlCK2Z8qtg::t3Vo1nwvTR6xCT65Khv6lg` |
| Email Spam Stats | POST | `/v3/stats/email_spam` | `conn_mod_def::GLlCK3PcJQA::fyVEdGHtRD6uZ_qSzQle_w` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Webhook | POST | `/v3/webhook/add` | `conn_mod_def::GLlCLO-y_Yg::7lfl6eb5TCajUV6V5033jw` |
| Edit Webhook | POST | `/v3/webhook/edit` | `conn_mod_def::GLlCLoGVc7A::g9vNCkqZTuati5clQY7Yqg` |
| Remove Webhook | POST | `/v3/webhook/remove` | `conn_mod_def::GLlCLn3a1OA::cEfN_yUuSoSLferzeN0JIg` |

### Suppression

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Suppression | POST | `/v3/suppression/add` | `conn_mod_def::GLlCLGFa8TA::u1kRfwPAR1CSuiUbQAzeuA` |
| Remove a Suppression | POST | `/v3/suppression/remove` | `conn_mod_def::GLlCLGFXvOA::NtFmB8X_TOinE5V1lfDF_w` |

### EmailTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Email Template | POST | `/v3/template/delete` | `conn_mod_def::GLlCLOG7AGg::5ZDY8bKER1iwvkTeLpBwxg` |
| Search Email Templates | POST | `/v3/template/search` | `conn_mod_def::GLlCLOGvWAg::-DSzYeVFTmqhewtWXwi5kg` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Template | POST | `/v3/template/edit` | `conn_mod_def::GLlCLQxUyzg::KgMyDdTvTaa7yy9SAABUEg` |
| View Template Details | POST | `/v3/template/view` | `conn_mod_def::GLlCLgw9E8A::2kIUpKAJTC6M6P1MNVnf5g` |

### Activity

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Activity | POST | `/v3/activity/search` | `conn_mod_def::GLlCJgWjgfA::SBoIqkD6TcWdqy7fO69B9g` |

### ApiKeyPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| View API Key Permissions | POST | `/v3/api_keys/permissions` | `conn_mod_def::GLlCJv2IXmg::6Rwwrpr0Ry6SYgofYiGsZg` |

### DedicatedIps

| Action | Method | Path | Action id |
|---|---|---|---|
| View Dedicated IP Addresses | POST | `/v3/dedicated_ips/view` | `conn_mod_def::GLlCJyK8yGg::BATnLSH_Q2O52eC9xZ5p6A` |

### ArchivedEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| View an Archived Email | POST | `/v3/archive/email` | `conn_mod_def::GLlCJ4CvgMg::h0YTmsQ7QZuoPoWceLTmrQ` |

### ArchivedContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Archived Content | POST | `/v3/archive/search` | `conn_mod_def::GLlCJ4YmZfg::nas7pPX_Rh-5hbnRz_x0Mg` |

### ScheduledEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Scheduled Email | POST | `/v3/email/scheduled/remove` | `conn_mod_def::GLlCJ4x6gBA::tocVf5fNTtKczhw9IcMiTw` |

### ScheduledEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Scheduled Emails | POST | `/v3/email/scheduled/search` | `conn_mod_def::GLlCJ5vYH-A::z22E9ER8S3mJNyLyNVXo7Q` |

### EmailBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Batch Emails | POST | `/v3/email/batch` | `conn_mod_def::GLlCJ_ps_BA::0owkHXGSSuK4blFnZnvqaQ` |

### TrackingSubdomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Tracking Subdomain | POST | `/v3/domain/tracking` | `conn_mod_def::GLlCKQsrzLA::MgY5EhXrRQWHg4o_hKW5wg` |

### DomainSubaccountAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Edit Subaccount Access for a Domain | POST | `/v3/domain/subaccount_access` | `conn_mod_def::GLlCKRLEtyA::PFZHR7LeSBSlr46Lyun3kw` |

### Domain

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Sender Domain | POST | `/v3/domain/remove` | `conn_mod_def::GLlCKYtld8g::1s4cElxTTWqIL_R240exog` |

### SenderDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| View Sender Domains | POST | `/v3/domain/view` | `conn_mod_def::GLlCKZphrhg::hE-6XXWMRO-2XB-Q3K3xZg` |

### Sms

| Action | Method | Path | Action id |
|---|---|---|---|
| Send SMS | POST | `/v3/sms/send` | `conn_mod_def::GLlCKjpFhOA::AEu5wRj0RpaLho2Ii7mH3g` |

### ReceivedSms

| Action | Method | Path | Action id |
|---|---|---|---|
| View Received SMS | POST | `/v3/sms/view-received` | `conn_mod_def::GLlCKjx0sVA::AMjYV9e8Qf6JIscxDZILGw` |

### SentSms

| Action | Method | Path | Action id |
|---|---|---|---|
| View Sent SMS | POST | `/v3/sms/view-sent` | `conn_mod_def::GLlCKkG-e6A::YJjztiwtTf26huSgo_2dBg` |

### SmsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| SMS Summary | POST | `/v3/sms/summary` | `conn_mod_def::GLlCKlf-LUg::QKW4FZVtTk6pwbBuhz_KrA` |

### EmailBounces

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Bounces | POST | `/v3/stats/email_bounces` | `conn_mod_def::GLlCKrwHwBA::LOW-AVx1QQ6Y373y-2hUtA` |

### EmailUnsubscribes

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Unsubscribes | POST | `/v3/stats/email_unsubs` | `conn_mod_def::GLlCK28_3Kg::aexrDCRQTZaBeTvwRCoFjA` |

### EmailSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Summary | POST | `/v3/stats/email_summary` | `conn_mod_def::GLlCK4Fi-WA::_g4YirpwT0mvsySSjuRbBw` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| View Suppressions | POST | `/v3/suppression/view` | `conn_mod_def::GLlCLGyCHvg::jO7yMdD9QIeFagJJpfZbxA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Email Template | POST | `/v3/template/add` | `conn_mod_def::GLlCLHCfjqg::PlBA3oOCTNyTJ7J39D5Gkg` |

### Subaccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Subaccounts | POST | `/v3/subaccounts/search` | `conn_mod_def::GLlCLH_lpwg::RYGXglRUR9ObkiCw7x95WA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| View Webhooks | POST | `/v3/webhook/view` | `conn_mod_def::GLlCLoRM4vA::7dWmkNsoRGy7A3MhJNcRRA` |

## When a call fails

The error comes from SMTP2GO, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/smtp-2-go

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
