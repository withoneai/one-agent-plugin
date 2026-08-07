---
name: uni-one
description: UniOne is an email delivery platform that provides APIs and SMTP infrastructure for transactional and marketing email sending, along with deliverability tools, analytics, and list management, allowing developers and businesses to integrate reliable outbound email into applications and communication workflows. Read and write UniOne data through One: templates, projects, domains, unsubscribed, eventdump, webhook and more, 35 actions with real parameter documentation. Use whenever the user asks to look something up in UniOne, create or update a record there, or build code against the UniOne API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: uni-one
  generated-from: one-knowledge-base
---

# UniOne through One

UniOne is an email delivery platform that provides APIs and SMTP infrastructure for transactional and marketing email sending, along with deliverability tools, analytics, and list management, allowing developers and businesses to integrate reliable outbound email into applications and communication workflows.

One exposes UniOne through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `uni-one` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm UniOne is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real UniOne account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Template | POST | `/en/transactional/api/v1/template/delete.json` | `conn_mod_def::GMK7Y9VYgrQ::8gyqCoRUQki6mglnPvympg` |
| List Templates | POST | `/en/transactional/api/v1/template/list.json` | `conn_mod_def::GMK7ZHmckJM::QExZjrYmRueNf5psxgTibA` |
| Set an Email Template | POST | `/en/transactional/api/v1/template/set.json` | `conn_mod_def::GMK7Y-N0e3o::XDMNcndySReow5zn97FoUw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Project | POST | `/en/transactional/api/v1/project/create.json` | `conn_mod_def::GMK7YuV7Nzc::jgrv1qvwTeKJZNcZvQbq6w` |
| List Projects | POST | `/en/transactional/api/v1/project/list.json` | `conn_mod_def::GMK7YsNEldI::hHh66WxBTXSiKCV3k6hW1g` |
| Update a Project | POST | `/en/transactional/api/v1/project/update.json` | `conn_mod_def::GMK7Yt3K7O0::5xYwnQF2SwCAraeK8BQg9A` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Domain | POST | `/en/transactional/api/v1/domain/delete.json` | `conn_mod_def::GMK7YPQP8jQ::TCCqC7cLRWivRH2C3k2coA` |
| List Registered Domains | POST | `/en/transactional/api/v1/domain/list.json` | `conn_mod_def::GMK7YRX6Q_k::06LLeHb9Ri2GpLwV3AnXSA` |

### Unsubscribed

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether an Email Is Unsubscribed | POST | `/en/transactional/api/v1/unsubscribed/check.json` | `conn_mod_def::GMK7YkGMbzY::34lwo5MoSC6zpbPOvKOv4Q` |
| Set an Email as Unsubscribed | POST | `/en/transactional/api/v1/unsubscribed/set.json` | `conn_mod_def::GMK7Yka_4Cs::z5Q_1qCKR7iBDlEI2KTYwA` |

### EventDump

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Event Dump | POST | `/en/transactional/api/v1/event-dump/create.json` | `conn_mod_def::GMK7YkxzmEE::NezcnIlbRmeBE3-z-FFDgw` |
| Delete an Event Dump | POST | `/en/transactional/api/v1/event-dump/delete.json` | `conn_mod_def::GMK7YdAJ6Jw::fq22F-VtQ1eYUDtZ7av6SA` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | POST | `/en/transactional/api/v1/webhook/get.json` | `conn_mod_def::GMK7ZKkEJC8::1kM8clZfRQi8pz3E2beEFA` |
| Set a Webhook | POST | `/en/transactional/api/v1/webhook/set.json` | `conn_mod_def::GMK7ZKzVGpw::HK-iJ-YOTo22s2awliBfUQ` |

### DnsRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DNS Records for a Domain | POST | `/en/transactional/api/v1/domain/get-dns-records.json` | `conn_mod_def::GMK7YQhyCoE::0hUk7Ul7RluGNOIamXvcjA` |

### Template

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template Properties by ID | POST | `/en/transactional/api/v1/template/get.json` | `conn_mod_def::GMK7Y-SBUsM::rGAkrx9xS5-swKpJFE-UcQ` |

### EmailValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Single Email Address | POST | `/en/transactional/api/v1/email-validation/single.json` | `conn_mod_def::GMK7YdD2VxM::3c_dO97tSqGHRG-ONlRn1Q` |

### FormerSubscriberSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Subscribe a Former Subscriber by Email | POST | `/en/transactional/api/v1/email/subscribe.json` | `conn_mod_def::GMK7YdTmB-I::jGaAXzgdTKi91Vdb0IPZ_A` |

### EventDumps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Event Dumps | POST | `/en/transactional/api/v1/event-dump/list.json` | `conn_mod_def::GMK7YkINJ8w::UpAKxurlS3qi9tLfcWtGoA` |

### DomainVerificationRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Domain Verification Record | POST | `/en/transactional/api/v1/domain/validate-verification-record.json` | `conn_mod_def::GMK7YUPo_rg::wnTg_QnUTM2gwMp8B2gmMQ` |

### Domain

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate DKIM for a Domain | POST | `/en/transactional/api/v1/domain/validate-dkim.json` | `conn_mod_def::GMK7YXwiVjE::12p-37uuQzerBiArXkOmWQ` |

### EventDumpProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event Dump Properties | POST | `/en/transactional/api/v1/event-dump/get.json` | `conn_mod_def::GMK7Ycym8vk::TyRcmU93SkKEDvqgynIPdg` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Email Using UniOne Transactional API v1 | POST | `/en/transactional/api/v1/email/send.json` | `conn_mod_def::GMK7YdDiG-w::ttm-SF6ORJ2Z7JkCadT-wQ` |

### UnsubscribedEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Unsubscribed Emails | POST | `/en/transactional/api/v1/unsubscribed/list.json` | `conn_mod_def::GMK7YkmHgDY::TZzsPKSURoWL7NSeJ_gIgw` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project | POST | `/en/transactional/api/v1/project/delete.json` | `conn_mod_def::GMK7Ythh-yc::QGkNOGLsSB-fnI6WtVzcsQ` |

### Suppression

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Suppression Using Suppression | POST | `/en/transactional/api/v1/suppression/set.json` | `conn_mod_def::GMK7YuHB5VA::w88dR1bTRMeWKsoWbJU8xQ` |

### System

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping the System | POST | `/en/transactional/api/v1/system/ping.json` | `conn_mod_def::GMK7Y0p75YA::mp88WGFlSUieHE_bal6dsw` |

### SuppressionList

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete from Suppression List | POST | `/en/transactional/api/v1/suppression/delete.json` | `conn_mod_def::GMK7Y1GPGGU::BfW7jfN3SOipJU7ROJmPsQ` |

### Suppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Suppressions | POST | `/en/transactional/api/v1/suppression/list.json` | `conn_mod_def::GMK7Y2PLaf8::Y5ZPy-6GQ7GHdo8h3lBzPg` |

### EmailSuppressions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Suppression Details | POST | `/en/transactional/api/v1/suppression/get.json` | `conn_mod_def::GMK7Y2RYTc0::S2UY5NtFRqKjFnXAHzDYbg` |

### SystemInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get System Info | POST | `/en/transactional/api/v1/system/info.json` | `conn_mod_def::GMK7Y2TP1fs::f7XVSKPBR3K-QnLJ-9LmgA` |

### Tag

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Tag | POST | `/en/transactional/api/v1/tag/delete.json` | `conn_mod_def::GMK7Y9MhTRk::ftmqJyIGRPCKuANIQtfViw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | POST | `/en/transactional/api/v1/tag/list.json` | `conn_mod_def::GMK7Y9NBdDw::zPrDu68bRLirmv4NJQNX1Q` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | POST | `/en/transactional/api/v1/webhook/list.json` | `conn_mod_def::GMK7ZG3ro-c::TqtcPGbzR1qFCpCKHJclzg` |

### WebhookHandler

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Webhook Handler | POST | `/en/transactional/api/v1/webhook/delete.json` | `conn_mod_def::GMK7ZKby92M::BZyn8OwYThCVsnpBI6c6vQ` |

## When a call fails

The error comes from UniOne, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/uni-one

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
