---
name: postmark
description: Postmark is a developer-friendly email delivery platform focused on fast, reliable transactional messaging through REST APIs and SMTP, with features like separated streams for promotional vs. transactional mail, detailed analytics, and strong deliverability control. Read and write Postmark data through One: domains, templates, messages, servers, stats, senders and more, 66 actions with real parameter documentation. Use whenever the user asks to look something up in Postmark, create or update a record there, or build code against the Postmark API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: postmark
  generated-from: one-knowledge-base
---

# Postmark through One

Postmark is a developer-friendly email delivery platform focused on fast, reliable transactional messaging through REST APIs and SMTP, with features like separated streams for promotional vs. transactional mail, detailed analytics, and strong deliverability control.

One exposes Postmark through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `postmark` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Postmark is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Postmark account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain | GET | `/domains/{{domainid}}` | `conn_mod_def::GJ6JvreN2D8::p77AB7zbTmWVUCQ1VCXRww` |
| List Domains | GET | `/domains` | `conn_mod_def::GJ6JvwFsQVE::4oYHYPVsRo-6yJtfSCNKTg` |
| Create a Domain | POST | `/domains` | `conn_mod_def::GJ6Jzu84ECk::YDT_hJBWRJeTCOnxgM3SfA` |
| Delete a Domain | DELETE | `/domains/{{domainid}}` | `conn_mod_def::GJ6JvqZewAg::PbJ_m_0nS8G8qJS5nOH7HA` |
| Request DKIM DNS Verification for a Domain | PUT | `/domains/{{domainid}}/verifydkim` | `conn_mod_def::GJ6JvrmDqGc::RL-GrzbySq-Djicz0HULrw` |
| Request Return-Path DNS Verification for a Domain | PUT | `/domains/{{domainid}}/verifyreturnpath` | `conn_mod_def::GJ6JwCrRUiQ::6PXcG02NTHGPkQnPVcM5RQ` |
| Request SPF DNS Verification for a Domain | POST | `/domains/{{domainid}}/verifyspf` | `conn_mod_def::GJ6Jv7xyuD0::rL8i7moqRAG6w-g87ViqIQ` |
| Rotate a Domain’s DKIM Key | POST | `/domains/{{domainid}}/rotatedkim` | `conn_mod_def::GJ6JwCk-iag::6TrSbV1KTDKK20KjXhnxCQ` |
| Update a Domain | PUT | `/domains/{{domainid}}` | `conn_mod_def::GJ6Jv_8aRBk::2HIkV0V8SLGCKMuE--1tbA` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template | GET | `/templates/{{templateIdOrAlias}}` | `conn_mod_def::GJ6JyW5VpEo::sawl_6XgQrCAt6TwUopKPw` |
| List Templates for a Server | GET | `/templates` | `conn_mod_def::GJ6JyX6CkRo::raxSt8C7RY2ZO5gtanHHXg` |
| Create a Template | POST | `/templates` | `conn_mod_def::GJ6JyKwRUXU::rbEmIjNqRY-YrHCyRcNpPg` |
| Delete a Template | DELETE | `/templates/{{templateIdOrAlias}}` | `conn_mod_def::GJ6JyX5yYAA::628Wx3EBRrqTSOlYmWgigg` |
| Push Templates Between Servers | PUT | `/templates/push` | `conn_mod_def::GJ6JyXK9OSA::qLJsZSOuRQ2tW4O3KgJaDg` |
| Update a Template (by Template ID or Alias) | PUT | `/templates/{{templateIdOrAlias}}` | `conn_mod_def::GJ6JylnS7T0::gma6bhStTUSZix8XZ2uSTA` |
| Validate a Template’s Test Content | POST | `/templates/validate` | `conn_mod_def::GJ6JyX71nYw::9MFihjVgTmSQ89WiX4ZAew` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Outbound Message Dump | GET | `/messages/outbound/{{messageid}}/dump` | `conn_mod_def::GJ6JwhKoHeA::hcnGRBDPRoa2aDsZY0GAeg` |
| Get Outbound Message Details | GET | `/messages/outbound/{{messageid}}/details` | `conn_mod_def::GJ6Jwe2lgw4::hIjYj_oOQZiWMPZDaAw-vw` |
| Retrieve Clicks for a Single Outbound Message | GET | `/messages/outbound/clicks/{{messageid}}` | `conn_mod_def::GJ6JwxkjI1E::ExM4AaqDTHCar-Uyn2ur0g` |
| Retrieve Opens for a Single Outbound Message | GET | `/messages/outbound/opens/{{messageid}}` | `conn_mod_def::GJ6Jw1QP1e0::kN9_Yi8aRjCdN78fu9aCjg` |
| Search Outbound Messages | GET | `/messages/outbound` | `conn_mod_def::GJ6JwhPgcBA::dzTQVDldQUyjyius5eTpew` |

### Servers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Server’s Information | GET | `/servers/{{serverid}}` | `conn_mod_def::GJ6Jx3QDVCw::_pn4VQyoRm25tfSZCUOjhg` |
| List Servers | GET | `/servers` | `conn_mod_def::GJ6Jxx7_FO4::8ak3QzHbQX2axBzPJZaMyw` |
| Create a Server | POST | `/servers` | `conn_mod_def::GJ6Jxl-ofzE::7WiuRYW_S1SebcLNZYtivA` |
| Delete a Server | DELETE | `/servers/{{serverid}}` | `conn_mod_def::GJ6JxmC4-Pc::83ewd7WdS2Oz2LFQ8clGLw` |
| Edit a Server’s Information | PUT | `/servers/{{serverid}}` | `conn_mod_def::GJ6JxlzWdcY::dhco9mvnTMaWLV8bodaVhA` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Click Browser Usage by Family | GET | `/stats/outbound/clicks/browserfamilies` | `conn_mod_def::GJ6JxyNBncM::cAqwAq0wSbSHaqm7MojI9g` |
| Get Outbound Click Counts by Platform | GET | `/stats/outbound/clicks/platforms` | `conn_mod_def::GJ6JxzITXbQ::HJgcSjriSFK8DmPeGjzdCw` |
| Get Outbound Open Counts by Email Client | GET | `/stats/outbound/opens/emailclients` | `conn_mod_def::GJ6JyC8WKOE::Xi95QnijRUe0Hft6nFJALg` |
| Get Outbound Overview Statistics | GET | `/stats/outbound` | `conn_mod_def::GJ6JyLrcCCY::V7laPrpaRCmiNsusBQHpzA` |
| Get Outbound Send Counts (Stats) | GET | `/stats/outbound/sends` | `conn_mod_def::GJ6JyOwrDFY::wPYLENNJSP2U0Ul-JUJRpw` |

### Senders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Sender Signature | POST | `/senders` | `conn_mod_def::GJ6JwwjSNuI::d-wNX6qGQ8WRHWCxtxhT1w` |
| Request a New DKIM Key for a Sender Signature | POST | `/senders/{{signatureid}}/requestnewdkim` | `conn_mod_def::GJ6JxAs6UOY::qlHbLm-cSfWHWjf_oVmXYg` |
| Request SPF DNS Verification for a Sender Signature | POST | `/senders/{{signatureid}}/verifyspf` | `conn_mod_def::GJ6JxAmUxWs::249iTHXkRV2lR5I8M7AEag` |
| Resend a Sender Signature Confirmation Email | POST | `/senders/{{signatureid}}/resend` | `conn_mod_def::GJ6JxLGezeQ::LVf4mUhISPC9CZkIl_lDyg` |

### SenderSignatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sender Signature | GET | `/senders/{{signatureid}}` | `conn_mod_def::GJ6Jw-6t6hk::_o9hoygITjuxfj_fjYwmjw` |
| List Sender Signatures | GET | `/senders` | `conn_mod_def::GJ6Jw9vMLfQ::f7YuwpVZRnS95vnYilcArw` |
| Delete a Sender Signature | DELETE | `/senders/{{signatureid}}` | `conn_mod_def::GJ6JwwUgvnI::bXPxE6O-SNG0nucWEAw23Q` |
| Update a Sender Signature | PUT | `/senders/{{signatureid}}` | `conn_mod_def::GJ6JxSs6N58::d_tusibARE2WiicZoVxkpQ` |

### InboundMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Inbound Message Details | GET | `/messages/inbound/{{messageid}}/details` | `conn_mod_def::GJ6JwKAdK0I::TWBaxyY-Qx-VM4RCA-paEw` |
| Search Inbound Messages | GET | `/messages/inbound` | `conn_mod_def::GJ6JwjgAuDY::wR8LqidcRciMD7zuxkvK5w` |
| Bypass Inbound Rules for a Blocked Inbound Message | PUT | `/messages/inbound/{{messageid}}/bypass` | `conn_mod_def::GJ6JwS7J2fU::8Lncc63aS8q1FS5VL1UV8w` |
| Retry Processing for a Failed Inbound Message | PUT | `/messages/inbound/{{messageid}}/retry` | `conn_mod_def::GJ6Jw0FDpZ8::TtX2InFjTOm7MyYmDDZl-w` |

### Bounces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bounce's Dump | GET | `/bounces/{{bounceid}}/dump` | `conn_mod_def::GJ6Jvh4ZPZY::gTlh2PvQRC6G5rLBXQImJg` |
| Get a Single Bounce | GET | `/bounces/{{bounceid}}` | `conn_mod_def::GJ6Jve2Ajwk::zcvvcDy3SQqgTDYJhggxxQ` |
| List Bounces | GET | `/bounces` | `conn_mod_def::GJ6Jvj_Z99E::m4mwaxhRR3GFSwNDKVNljg` |
| Activate a Bounce | PUT | `/bounces/{{bounceid}}/activate` | `conn_mod_def::GJ6Jvh0yMyY::-FG8DjiMR3-0w_BFB1MiWQ` |

### InboundRuleTriggers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Inbound Rule Triggers | GET | `/triggers/inboundrules` | `conn_mod_def::GJ6JwSEy_cg::J06rOVCgQW6Yj22kpuIQqg` |
| Create an Inbound Rule Trigger | POST | `/triggers/inboundrules` | `conn_mod_def::GJ6Jv-lgJe0::LzYr47lJREerWH8bkFu0Xg` |
| Delete an Inbound Rule Trigger | DELETE | `/triggers/inboundrules/{{triggerid}}` | `conn_mod_def::GJ6JwXovDl8::LBlf29hjThql0i8NOi5o5g` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Batch of Templated Emails | POST | `/email/batchWithTemplates` | `conn_mod_def::GJ6JxTEZnF0::Z6KkVWSZRTaLR0jmn4COhw` |
| Send a Single Email | POST | `/email` | `conn_mod_def::GJ6JxSsWNaM::sWuMI7zXRNisv_3EaL6L-g` |
| Send an Email Using a Template | POST | `/email/withTemplate` | `conn_mod_def::GJ6JxaYMDQ4::mmG0xcxjToek4k6KsqntWg` |

### Server

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Server Configuration | GET | `/server` | `conn_mod_def::GJ6JxqdrgPE::czrmcBLtQ1ybbyDHyPrsOw` |
| Edit Current Server Configuration | PUT | `/server` | `conn_mod_def::GJ6JxmaObTA::hd_tLOkjRq-a2EjHaeQq1Q` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Batch of Emails | POST | `/email/batch` | `conn_mod_def::GJ6Jxe6_gAg::FuV_1_5dTBW5bKKlI4yJ_A` |

### OutboundMessageClicks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Clicks for All Outbound Messages | GET | `/messages/outbound/clicks` | `conn_mod_def::GJ6JwPa8drg::FZF6KsSXSZ2dcjbB4CUxaA` |

### OutboundOpenCountsByPlatform

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Open Counts by Platform | GET | `/stats/outbound/opens/platforms` | `conn_mod_def::GJ6JyAW0AW4::X7XYIy3XSp6gQKEiko9d-A` |

### OutboundMessageOpens

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Opens for Outbound Messages | GET | `/messages/outbound/opens` | `conn_mod_def::GJ6JwpdYmg0::UvuUk-QfQy2pjNugHbH3CQ` |

### DeliveryStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Delivery Stats | GET | `/deliverystats` | `conn_mod_def::GJ6JveDQJHo::wWjIg6B0QuCUnARjov-cjA` |

### OutboundBounceCounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Bounce Counts | GET | `/stats/outbound/bounces` | `conn_mod_def::GJ6Jx2XLPNE::0-tPUqCcRdyfxhLtubAjZQ` |

### OutboundSpamComplaintsStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Spam Complaints Stats | GET | `/stats/outbound/spam` | `conn_mod_def::GJ6JyP9zyfQ::g2YV8jOgRuGQf_RdqxegFw` |

### OutboundClickCounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Click Counts | GET | `/stats/outbound/clicks` | `conn_mod_def::GJ6Jx_IfM6A::4WwgEj1kTO2zWUCgTF3GcA` |

### OutboundOpenCounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Email Open Counts | GET | `/stats/outbound/opens` | `conn_mod_def::GJ6Jx_HdeV0::ahBgpLgBS8a2T4bLTxszGQ` |

### OutboundClickCountsByBodyLocation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Click Counts by Body Location | GET | `/stats/outbound/clicks/location` | `conn_mod_def::GJ6JyD2_w4M::FfmQ86J3STy6fI2PC-ySvw` |

### OutboundTrackedEmailCounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Outbound Tracked Email Counts | GET | `/stats/outbound/tracked` | `conn_mod_def::GJ6JyMYvX60::AJWK4_g3SeCaZb3NkeMD8A` |

## When a call fails

The error comes from Postmark, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/postmark

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
