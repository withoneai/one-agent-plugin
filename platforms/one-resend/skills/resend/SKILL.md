---
name: resend
description: Resend is a platform for building, testing, and sending transactional emails programmatically. It helps developers integrate and monitor email delivery at scale with ease. Read and write Resend data through One: emails, templates, contacts, broadcasts, domains, contactproperties and more, 67 actions with real parameter documentation. Use whenever the user asks to look something up in Resend, create or update a record there, or build code against the Resend API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: resend
  generated-from: one-knowledge-base
---

# Resend through One

Resend is a platform for building, testing, and sending transactional emails programmatically. It helps developers integrate and monitor email delivery at scale with ease.

One exposes Resend through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `resend` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Resend is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Resend account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Sent Email’s Attachments | GET | `/emails/{{emailId}}/attachments` | `conn_mod_def::GJ6SReEHPcE::f1Q9958PTai145ogEOJ0Wg` |
| List Emails | GET | `/emails` | `conn_mod_def::GJ6SRf8FQWg::MmeqceRoTmSeLYCxbaAmUA` |
| Retrieve a Single Email | GET | `/emails/{{emailId}}` | `conn_mod_def::GJ6SRcerbx4::hFG382R8SteemlQRBdYvtQ` |
| Cancel a Scheduled Email | POST | `/emails/{{emailId}}/cancel` | `conn_mod_def::GJ6SRU_IODQ::uZ-yJz-jSPKdMSPWhlI2KA` |
| Send an Email | POST | `/emails` | `conn_mod_def::GJ6SRgloL9U::ffk4sD2zRU-J_jTGGdBk5w` |
| Send Batch Emails | POST | `/emails/batch` | `conn_mod_def::GJ6SRoHZm8Q::cVupy9ZORNmCasMiTRsJlg` |
| Update an Email | PATCH | `/emails/{{emailId}}` | `conn_mod_def::GJ6SRnxxnKo::vyJ_Tm94Q1Gjcv44rP0Cig` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Templates | GET | `/templates` | `conn_mod_def::GJ6SR9sumbc::BuAgBQSNTGGPrWPVu3JtNQ` |
| Retrieve a Template | GET | `/templates/{{id}}` | `conn_mod_def::GJ6SSKFbhCI::vMg7ZSpRQkysU38sf3uzIQ` |
| Create a Template | POST | `/templates` | `conn_mod_def::GJ6SR9X5u0w::KBsye0N7QgybB-u4xrpSTA` |
| Delete a Template | DELETE | `/templates/{{id}}` | `conn_mod_def::GJ6SR9I1k6Y::23njFYTfRjabj6776PqFeA` |
| Duplicate a Template | POST | `/templates/{{id}}/duplicate` | `conn_mod_def::GJ6SSAX30Io::KxA0MGP8QWSCNRORgmlvvQ` |
| Publish a Template | POST | `/templates/{{id}}/publish` | `conn_mod_def::GJ6SSC-PjSw::7OsF06T0QIarFuUXRgUSWA` |
| Update a Template | PATCH | `/templates/{{id}}` | `conn_mod_def::GJ6SSKovHx4::FT0F0lo_SZ6RGQTZ2kWZUQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ6SQ7DFu44::Ndbs37cHSEKvas_wTgG2mw` |
| Retrieve a Contact by ID or Email | GET | `/contacts/{{id}}` | `conn_mod_def::GJ6SQ5s1QZo::faJisv9DTHGzq_A19Zs8vA` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ6SQt3jhlI::10Leh5p5RR2V7V673_r8oA` |
| Delete a Contact | DELETE | `/contacts/{{id}}` | `conn_mod_def::GJ6SQ6V8mMg::loR3evzrR-mCP4w9ybLO6A` |
| Update a Contact by ID or Email | PATCH | `/contacts/{{id}}` | `conn_mod_def::GJ6SRDQbg5k::hBgqy1SUTkGdj_S9aWBi8A` |
| Update a Contact’s Topics | PATCH | `/contacts/{{contactId}}/topics` | `conn_mod_def::GJ6SRJ1ZBCk::NmI04M2QQmiDdUMeGw7A2w` |

### Broadcasts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Broadcasts | GET | `/broadcasts` | `conn_mod_def::GJ6SQX9Jyh0::U-CTSzAvSzKuD25Q3TIK4Q` |
| Retrieve a Broadcast | GET | `/broadcasts/{{id}}` | `conn_mod_def::GJ6SQgVHZXg::izwXC941TfS_CNMqtrvpIA` |
| Create a Broadcast | POST | `/broadcasts` | `conn_mod_def::GJ6SQU-Yehs::sMxrd3AZSQOkWwwaHLU46g` |
| Delete a Broadcast Draft | DELETE | `/broadcasts/{{id}}` | `conn_mod_def::GJ6SQTtCmwc::SCII7IsVS5Wio4qQdPZ0oQ` |
| Send or Schedule a Broadcast | POST | `/broadcasts/{{id}}/send` | `conn_mod_def::GJ6SQf1CnvU::qYu8Ko0jRviqSVgIrsR9Wg` |
| Update a Broadcast | PATCH | `/broadcasts/{{id}}` | `conn_mod_def::GJ6SQmzVh5g::0CmkH8JwR4ip11kQL-2fEw` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Domains | GET | `/domains` | `conn_mod_def::GJ6SRTe7Fh8::tB_m8RIIRnSHLTTKV_-E2w` |
| Retrieve a Domain | GET | `/domains/{{domainId}}` | `conn_mod_def::GJ6SRSBtDLM::uOwpomkXQ9qZX1M7nlJ01g` |
| Create a Domain | POST | `/domains` | `conn_mod_def::GJ6SRDxtYJs::ooMtDHuoRUGsXRRmENF3IQ` |
| Remove a Domain | DELETE | `/domains/{{domainId}}` | `conn_mod_def::GJ6SRCly_Dg::WDYeJu9RT3ilFQja73FVxA` |
| Update a Domain | PATCH | `/domains/{{domainId}}` | `conn_mod_def::GJ6SRRrKowA::2ARJbS8PQdOXDgjG10dGyg` |
| Verify a Domain | POST | `/domains/{{domainId}}/verify` | `conn_mod_def::GJ6SRUbooAM::NCip1IyKRfiKuJQzwE2B4A` |

### ContactProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Properties | GET | `/contact-properties` | `conn_mod_def::GJ6SQvvhIhQ::BPzfBHSiQQGcpjLz-m5UtA` |
| Retrieve a Contact Property | GET | `/contact-properties/{{id}}` | `conn_mod_def::GJ6SQvW0Qps::sSgFPHr1Qgq-HRp_I6I46Q` |
| Create a Contact Property | POST | `/contact-properties` | `conn_mod_def::GJ6SQlTaP64::Ua2wW9ShQhy8f94Af_XdkA` |
| Delete a Contact Property | DELETE | `/contact-properties/{{id}}` | `conn_mod_def::GJ6SQfeZeys::Q5dycmGTT8W0kdZjc9hx-A` |
| Update a Contact Property | PATCH | `/contact-properties/{{id}}` | `conn_mod_def::GJ6SQyOMWBc::L2m7Yfo7TSSYXC4rfgLjZA` |

### Topics

| Action | Method | Path | Action id |
|---|---|---|---|
| List Topics | GET | `/topics` | `conn_mod_def::GJ6SSKwhyis::qPHbHCC3TNO0DsmvIXWegA` |
| Retrieve a Topic | GET | `/topics/{{id}}` | `conn_mod_def::GJ6SSSdIGc8::Ax9LaEQ8SJe4QCPNyq9OBg` |
| Create a Topic | POST | `/topics` | `conn_mod_def::GJ6SSKnUG08::vSVjmpJlQRymCrQEcNiLHg` |
| Delete a Topic | DELETE | `/topics/{{id}}` | `conn_mod_def::GJ6SSJ7V0pU::05L95JI6RIaex4XJdxq5jQ` |
| Update a Topic | PATCH | `/topics/{{id}}` | `conn_mod_def::GJ6SSWg8Z8Q::-BqCdu1USTuSmaDeMN8T1g` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GJ6SSTwQGjk::Lb29VMQaSHqKbU6ZZjdINw` |
| Retrieve a Webhook | GET | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ6SSfoVFJg::CbYmUEs4RXe87u3fXcI-0g` |
| Create a Webhook | POST | `/webhooks` | `conn_mod_def::GJ6SSSj-VGk::18at33nmRQiQhaT7OxoPXQ` |
| Delete a Webhook | DELETE | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ6SSXL1wH8::Q-IpinknT7CiKabqtHTG9A` |
| Update a Webhook | PATCH | `/webhooks/{{webhookId}}` | `conn_mod_def::GJ6SSjJ3Tbg::ivzeVeNyRyuD6MQv6vFsGw` |

### Audiences

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audiences | GET | `/audiences` | `conn_mod_def::GJ6SQUIMvzY::0051QQElRzC6L2BC79U8jw` |
| Retrieve a Single Audience | GET | `/audiences/{{id}}` | `conn_mod_def::GJ6SQT8WK3Q::1ItNW3inSjq0VAobYCXVGg` |
| Create an Audience (Contact List) | POST | `/audiences` | `conn_mod_def::GJ6SQMMS_l0::paFbnLH8Rp6ThJHA8KQf2A` |
| Remove an Audience | DELETE | `/audiences/{{id}}` | `conn_mod_def::GJ6SQJ9h_2w::j7nUO2i9SlKc8u0MGZLnkQ` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Segments | GET | `/segments` | `conn_mod_def::GJ6SR1Wx3bs::mVb7qoy0Tdexa4ecFQpXGQ` |
| Retrieve a Segment | GET | `/segments/{{id}}` | `conn_mod_def::GJ6SR1dOqTc::HETT_IzIT8-Ctc1PbUVDaw` |
| Create a Segment | POST | `/segments` | `conn_mod_def::GJ6SR0vqLuY::iUGMTEnKS7-7exuUV-JB6Q` |
| Delete a Segment | DELETE | `/segments/{{id}}` | `conn_mod_def::GJ6SR0y9eV4::eKxoccOqQoKJztiSwc25oA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys | GET | `/api-keys` | `conn_mod_def::GJ6SQK6lvm8::trDTdSJeTeK1WKxhOkrLGQ` |
| Create an API Key | POST | `/api-keys` | `conn_mod_def::GJ6SQIayOl8::dwrNtslSTduCzlsGg_3bKg` |
| Remove an API Key | DELETE | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GJ6SQIU-98U::Uu_tg_ERRTqQl_gK_jivsw` |

### ContactSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Contact to a Segment | POST | `/contacts/{{contactId}}/segments/{{segmentId}}` | `conn_mod_def::GJ6SQuYl700::04X1vCBfR8WTQ15gP2ssXQ` |
| Remove a Contact from a Segment | DELETE | `/contacts/{{contactId}}/segments/{{segmentId}}` | `conn_mod_def::GJ6SQ6Mv3Po::80Sh4zV6QEe1pMSRRsjyvQ` |

### ReceivedEmailAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Attachments for a Received Email | GET | `/emails/receiving/{{emailId}}/attachments` | `conn_mod_def::GJ6SRqyQ5II::0whWu-NjTRaNHVzSa0tJNw` |
| Retrieve a Received Email Attachment | GET | `/emails/receiving/{{emailId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ6SRohm7Kw::C1UB6v8MTtudwvCblNHswQ` |

### ReceivedEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Received Emails | GET | `/emails/receiving` | `conn_mod_def::GJ6SRt19kWs::cnNGF5y-QeOFXG-WqAZnQg` |
| Retrieve a Received Email | GET | `/emails/receiving/{{emailId}}` | `conn_mod_def::GJ6SR1smyYk::jcWNj6MARdmjFJbPM10Biw` |

### ContactsTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact’s Topics | GET | `/contacts/{{contactId}}/topics` | `conn_mod_def::GJ6SRFeDA2g::tNICtRvLRpGnjZJShCAYAw` |

### EmailsAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Email’s Attachment | GET | `/emails/{{emailId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ6SRfcBtYo::5N4OabrmSuqPqDqOmneDSw` |

### ContactsSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact’s Segments | GET | `/contacts/{{contactId}}/segments` | `conn_mod_def::GJ6SQ6eEMoc::ENFPxMD9R-2cK93bcc7rDA` |

## When a call fails

The error comes from Resend, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/resend

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
