---
name: instantly-ai
description: Instantly is an AI-powered cold email platform that automates outreach with unlimited inboxes, built-in warm-up, personalization, and analytics—designed to help teams scale email campaigns efficiently and maximize deliverability through smart scheduling, inbox rotation, and real-time performance insights. Read and write Instantly.ai data through One: campaigns, accounts, leads, blocklistentries, subsequences, emails and more, 167 actions with real parameter documentation. Use whenever the user asks to look something up in Instantly.ai, create or update a record there, or build code against the Instantly.ai API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: instantly-ai
  generated-from: one-knowledge-base
---

# Instantly.ai through One

Instantly is an AI-powered cold email platform that automates outreach with unlimited inboxes, built-in warm-up, personalization, and analytics—designed to help teams scale email campaigns efficiently and maximize deliverability through smart scheduling, inbox rotation, and real-time performance insights.

One exposes Instantly.ai through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `instantly-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Instantly.ai is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Instantly.ai account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/api/v2/campaigns/{{id}}` | `conn_mod_def::GJ4omH54yIA::tCuxTm1KRNmoHmULpNq46A` |
| Get a Campaign’s Sending Status | GET | `/api/v2/campaigns/{{id}}/sending-status` | `conn_mod_def::GJ4omSXCDO8::5zRTe7sgSKyFHO_PbG187g` |
| Get Launched Campaigns Count | GET | `/api/v2/campaigns/count-launched` | `conn_mod_def::GJ4onHtfzsU::KxMEk-t2Ti-tswq51SzUPg` |
| List Campaigns | GET | `/api/v2/campaigns` | `conn_mod_def::GJ4onWiiAPA::96kM_eShRZ-odgCetSqauA` |
| Search Campaigns by Lead Email | GET | `/api/v2/campaigns/search-by-contact` | `conn_mod_def::GJ4onm81H78::aIunTnTvQ7iwknZMY_kF5w` |
| Activate (Start/Resume) a Campaign | POST | `/api/v2/campaigns/{{id}}/activate` | `conn_mod_def::GJ4ok-2ZbxI::TSo-ZABeR1avG-g69x6oMw` |
| Add Variables to a Campaign | POST | `/api/v2/campaigns/{{id}}/variables` | `conn_mod_def::GJ4olGybZWI::yxdm3iWiQYSYM75pk9lKPA` |
| Create a Campaign From a Shared Export | POST | `/api/v2/campaigns/{{id}}/from-export` | `conn_mod_def::GJ4olZZzxwA::YHI0frZ2QQmrTrh-JjuLBA` |
| Create Campaign | POST | `/api/v2/campaigns` | `conn_mod_def::GJ4olOXqEeU::pIYbDeB_SXyq63zTL4kTwA` |
| Delete a Campaign | DELETE | `/api/v2/campaigns/{{id}}` | `conn_mod_def::GJ4olkDKK-8::ArKKwzgVS3CdR6ICxS6ViA` |
| Duplicate a Campaign | POST | `/api/v2/campaigns/{{id}}/duplicate` | `conn_mod_def::GJ4oluNNNGQ::JMm01baqTHGGGcKlLkw7WQ` |
| Export a Campaign to JSON | POST | `/api/v2/campaigns/{{id}}/export` | `conn_mod_def::GJ4ol5Dg7oU::_JBgXq9tQOGoKKv5llaXFg` |

3 more Campaigns actions are available through search.

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account by Email | GET | `/api/v2/accounts/{{email}}` | `conn_mod_def::GJ4o9bKy0YE::nAql0E1YQ_Wp7QDekaK-AA` |
| List Accounts | GET | `/api/v2/accounts` | `conn_mod_def::GJ4o96O2QJw::rrHtkJRqQ9KJbx-O3aIQsw` |
| Create an Account | POST | `/api/v2/accounts` | `conn_mod_def::GJ4o82JUKfA::XK1M2-XsTLqs86DmcAcrkA` |
| Delete an Account (by Email) | DELETE | `/api/v2/accounts/{{email}}` | `conn_mod_def::GJ4o9BfSPpA::5gl4E7hFRaiTMG-R8IN0Aw` |
| Disable Warmup for Accounts | POST | `/api/v2/accounts/warmup/disable` | `conn_mod_def::GJ4o9KCZokw::D4oAvts-SQiJJmBnX5G9rA` |
| Enable Warmup for Accounts | POST | `/api/v2/accounts/warmup/enable` | `conn_mod_def::GJ4o9Ujgn8A::PRbVMUjtTLKwui5jrdcgRQ` |
| Get Warmup Analytics for Accounts | POST | `/api/v2/accounts/warmup-analytics` | `conn_mod_def::GJ4o9xraZto::CexkM6l5QPS0WTqlXSzObQ` |
| Mark an Account as Fixed | POST | `/api/v2/accounts/{{email}}/mark-fixed` | `conn_mod_def::GJ4o-Dkxp7g::iNI5YzKzT2-fkQvTAHnwOg` |
| Move Accounts Between Workspaces | POST | `/api/v2/accounts/move` | `conn_mod_def::GJ4oiW9voCc::woe34itdSw2F2P37k-ny9g` |
| Patch an Account (by Email) | PATCH | `/api/v2/accounts/{{email}}` | `conn_mod_def::GJ4oieKV_DA::XSqVw-3DSy-xCVnbHf1uZg` |
| Pause an Account | POST | `/api/v2/accounts/{{email}}/pause` | `conn_mod_def::GJ4oio7nGkU::Se1nS0dtQ1a-HTA9V1Y0Iw` |
| Resume an Account (by Email) | POST | `/api/v2/accounts/{{email}}/resume` | `conn_mod_def::GJ4oiwMGonc::BFrawbn9RXaJKf5ZZqi0-A` |

1 more Accounts actions are available through search.

### Leads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead | GET | `/api/v2/leads/{{id}}` | `conn_mod_def::GJ4ovXgzbT4::fmvrfPfSQY2i79Nef3VfpA` |
| Bulk Add Leads to a Campaign or List | POST | `/api/v2/leads/add` | `conn_mod_def::GJ4ouvvg0w8::3JQl96IGQGSjNa4FYIEvJg` |
| Bulk Assign Leads to Organization Users | POST | `/api/v2/leads/bulk-assign` | `conn_mod_def::GJ4ou2-iC9w::p-Y-MtNNSheRpu0VtuQrEw` |
| Bulk Delete Leads (by Campaign or List) | DELETE | `/leads` | `conn_mod_def::GJ4ovLqGD28::Aeu2UxI6Q9y_zoWxWbOcWg` |
| Create Lead | POST | `/api/v2/leads` | `conn_mod_def::GJ4ou-KVANM::GrS7qQxjQN-zRjkMXv_vlQ` |
| Delete a Lead | DELETE | `/api/v2/leads/{{id}}` | `conn_mod_def::GJ4ovE2EBSs::hNhayd5bR-qK-pV9qIyQxA` |
| List Leads | POST | `/api/v2/leads/list` | `conn_mod_def::GJ4oviQMvhQ::Cq5hvfgST-6JSboDfl87pA` |
| Merge Two Leads | POST | `/leads/merge` | `conn_mod_def::GJ4ovsyY75k::KQjoGQeuTOy1gDOFIOxV_g` |
| Move a Lead to a Subsequence | POST | `/leads/subsequence/move` | `conn_mod_def::GJ4ov0qn8pw::Fi1TJr7MTZq0S6b3NxmxGg` |
| Move Leads to a Different Campaign or List | POST | `/api/v2/leads/move` | `conn_mod_def::GJ4ov72LJmw::QZPwJ579TnG5p7c2fLUEpQ` |
| Patch a Lead | PATCH | `/api/v2/leads/{{id}}` | `conn_mod_def::GJ4owGGLvTg::_C77lOaCQ1asHcxyMouvUg` |
| Remove a Lead from a Subsequence | POST | `/leads/subsequence/remove` | `conn_mod_def::GJ4owOFydxc::-B9lsb6RS1uc2qAui8_Tqg` |

1 more Leads actions are available through search.

### BlockListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Block List Entries as CSV | GET | `/api/v2/block-lists-entries/download` | `conn_mod_def::GJ4okctpXUQ::HvdBCsciQNCP7mIoidYyhQ` |
| Get a Block List Entry | GET | `/api/v2/block-lists-entries/{{id}}` | `conn_mod_def::GJ4oknKr_hs::dVwsLjLAR5SQA7YoxEyclw` |
| List Block List Entries | GET | `/api/v2/block-lists-entries` | `conn_mod_def::GJ4okvxJbCY::AbA8gu8OQna2c_k6Aa4iEg` |
| Bulk Create Block List Entries | POST | `/api/v2/block-lists-entries/bulk-create` | `conn_mod_def::GJ4oj4Ti-Z8::RZU6LMXwTpWJDbBuLG3Z0g` |
| Bulk Delete Block List Entries | POST | `/api/v2/block-lists-entries/bulk-delete` | `conn_mod_def::GJ4oj_ukh-w::vW-X90G5Q9my6rcge0rE8Q` |
| Create Block List Entry | POST | `/block-lists-entries` | `conn_mod_def::GJ4okG4JHt4::yeZvbGwEQaSBBGuEgQYoDA` |
| Delete a Block List Entry | DELETE | `/api/v2/block-lists-entries/{{id}}` | `conn_mod_def::GJ4okVITSWc::7i_iah_gTzyjj8EtssHwJw` |
| Delete All Block List Entries | DELETE | `/block-lists-entries` | `conn_mod_def::GJ4okOmLYTs::zZBkcLLqTfGaFQC_PtuVRg` |
| Patch a Block List Entry | PATCH | `/api/v2/block-lists-entries/{{id}}` | `conn_mod_def::GJ4ok3m7xq0::lREjYZiESWmV-47EPr1WbQ` |

### Subsequences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Subsequence | GET | `/api/v2/subsequences/{{id}}` | `conn_mod_def::GJ4ooenaHMY::muW01ZPfR3KqHoZwQVtMCA` |
| Get a Subsequence’s Sending Status | GET | `/api/v2/subsequences/{{id}}/sending-status` | `conn_mod_def::GJ4oomTEOKI::TOrZXjhkRgeRXH9Y7dSW2A` |
| List a Campaign’s Subsequences | GET | `/api/v2/subsequences` | `conn_mod_def::GJ4oozcAlzo::AkjMPyrfQtexFfJYFbRkag` |
| Create a Campaign Subsequence | POST | `/api/v2/subsequences` | `conn_mod_def::GJ4ooAtnT74::s7dYKMLAQTWjZBAuc55_XQ` |
| Delete a Campaign Subsequence | DELETE | `/api/v2/subsequences/{{id}}` | `conn_mod_def::GJ4ooH3qCss::YREbaXhuTmiA-kZYRFoZ-w` |
| Duplicate a Subsequence | POST | `/api/v2/subsequences/{{id}}/duplicate` | `conn_mod_def::GJ4ooXQaZwE::lk4JNKwRR7iX5-ghOpsG2Q` |
| Patch a Campaign Subsequence | PATCH | `/api/v2/subsequences/{{id}}` | `conn_mod_def::GJ4oo7gSYas::d7fxEOhCSOq3aPcLf03X_A` |
| Pause a Subsequence | POST | `/api/v2/subsequences/{{id}}/pause` | `conn_mod_def::GJ4opDdUT80::jV8ZtC0nSma3luTdNqNUJw` |
| Resume a Subsequence | POST | `/api/v2/subsequences/{{id}}/resume` | `conn_mod_def::GJ4opLuWwYE::ew_-_JvAQVuT9B6VH_YvGQ` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Unread Emails | GET | `/api/v2/emails/unread/count` | `conn_mod_def::GJ4orW6VscI::7iJQtrk0RpG2ZUqsumGEoQ` |
| Get an Email | GET | `/api/v2/emails/{{id}}` | `conn_mod_def::GJ4or3eDLTU::OD15XHuaQxaYd89jqFFYoQ` |
| List Emails | GET | `/api/v2/emails` | `conn_mod_def::GJ4osDg4Wb4::arRgRVYDRO2U4pHNiLD0xw` |
| Delete an Email | DELETE | `/api/v2/emails/{{id}}` | `conn_mod_def::GJ4ord3SjdA::VgRObO1NTJKvbmEYEDWpug` |
| Forward an Email | POST | `/emails/forward` | `conn_mod_def::GJ4ortHvvrU::1MYmiS-hR2CWbeyazfWCxA` |
| Patch an Email | PATCH | `/api/v2/emails/{{id}}` | `conn_mod_def::GJ4osSZD7IU::YRhLdMQ9S26dPr2hcR6Jmg` |
| Reply to an Email | POST | `/api/v2/emails/reply` | `conn_mod_def::GJ4osaSB_mU::2PqFmeRYTOS4MAwslGbXmg` |
| Send a Test Email via a Workspace Email Account | POST | `/api/v2/emails/test` | `conn_mod_def::GJ4osoIrkmU::G51YmoQNROaKFRnJvpcjjw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GJ4oz6hvwAA::jQgb0avfR5yy5b3_27yD6g` |
| List Webhooks (Workspace) | GET | `/api/v2/webhooks` | `conn_mod_def::GJ4o0LzlfLU::xUZNsvexS6S6qCUenMq7xg` |
| Create a Webhook | POST | `/api/v2/webhooks` | `conn_mod_def::GJ4ozsRojM4::Gaqq5GizQtOVUKtNSSZADQ` |
| Delete a Webhook | DELETE | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GJ4ozzRRbwE::8hQOoV8VTJqUNE6OOJSnVg` |
| Patch a Webhook | PATCH | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GJ4o0TmI6gs::5gmuDCFwTIqm9U829ZAutg` |
| Resume a Webhook | POST | `/api/v2/webhooks/{{id}}/resume` | `conn_mod_def::GJ4o0ak_f3Y::O2La2u65SGmaMEdjfngdqQ` |
| Test a Webhook | POST | `/api/v2/webhooks/{{id}}/test` | `conn_mod_def::GJ4o0lLCnd8::7og8g5IeRs6uVSC3v3DcBw` |

### CustomTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Tag | GET | `/api/v2/custom-tags/{{id}}` | `conn_mod_def::GJ4op4Jcpyo::wlPZv-fcR0i79Dedk7vHRA` |
| List Custom Tags | GET | `/api/v2/custom-tags` | `conn_mod_def::GJ4oqDwZG2Q::CHMyfxBfTw2nZYiQo4rfJw` |
| Create a Custom Tag | POST | `/custom-tags` | `conn_mod_def::GJ4opp_iYpY::qnkTTg0fRFapTptQmkVWNA` |
| Delete a Custom Tag | DELETE | `/api/v2/custom-tags/{{id}}` | `conn_mod_def::GJ4opwzt0l4::xvj4X-ugQiSARI8b3m1C_A` |
| Patch a Custom Tag | PATCH | `/api/v2/custom-tags/{{id}}` | `conn_mod_def::GJ4oqLS69G4::d_9kzTnnSq-8y6BYC1yHiw` |
| Toggle Custom Tags on Resources (Accounts or Campaigns) | POST | `/api/v2/custom-tags/toggle-resource` | `conn_mod_def::GJ4opi6wckc::lwuT7AuBQwyjJHAVe186aQ` |

### LeadLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead Label | GET | `/api/v2/lead-labels/{{id}}` | `conn_mod_def::GJ4owwqYgwI::-MQA09vnSbWjix_obsddcg` |
| List Lead Labels | GET | `/lead-labels` | `conn_mod_def::GJ4ow4_PApw::XCZixKAKRz6cBcOOHdXN3w` |
| Create a Lead Label | POST | `/lead-labels` | `conn_mod_def::GJ4oweSrECI::93-F9IhQTa2S2ZMGhil27g` |
| Delete a Lead Label | DELETE | `/api/v2/lead-labels/{{id}}` | `conn_mod_def::GJ4owmMIRQ4::0XJJOKT2SFWUrWRbPBnOCw` |
| Patch a Lead Label | PATCH | `/api/v2/lead-labels/{{id}}` | `conn_mod_def::GJ4oxA3kHOg::JnrfNn0TTbG23jb6H_t_jA` |
| Test AI Reply Label Prediction | POST | `/api/v2/lead-labels/ai-reply-label` | `conn_mod_def::GJ4oxIMg03s::2oZHEx9MR4SkDZnhwf6VUA` |

### LeadLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lead List | GET | `/api/v2/lead-lists/{{id}}` | `conn_mod_def::GJ4oxedclyc::N780Eq6VQxmF0Hpd7E_pgQ` |
| Get a Lead List’s Verification Statistics | GET | `/api/v2/lead-lists/{{id}}/verification-stats` | `conn_mod_def::GJ4oxpJ7feQ::-iQdASjMR8S9RlW8cPnpRQ` |
| List Lead Lists | GET | `/api/v2/lead-lists` | `conn_mod_def::GJ4oxyVx1qw::tC03ad3iQVKO4bsb2NgkCw` |
| Create Lead List | POST | `/lead-lists` | `conn_mod_def::GJ4oxPeenfE::8KxnXQmPQh-x-yaIjmCYKQ` |
| Delete a Lead List | DELETE | `/api/v2/lead-lists/{{id}}` | `conn_mod_def::GJ4oxWrXEq0::Y-thtLvyQTeacN15X6-0OA` |
| Update a Lead List | PATCH | `/api/v2/lead-lists/{{id}}` | `conn_mod_def::GJ4ox5tnwQU::Sx6HHe2fTSmibnWcG9zXcg` |

### SupersearchEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Enrichment In-Progress for a Resource | GET | `/api/v2/supersearch-enrichment/ai/{{resourceId}}/in-progress` | `conn_mod_def::GJ4oy7EZwd0::_BcwBhnWRuiuDSacnQIDnw` |
| Get Enrichment for a Resource | GET | `/api/v2/supersearch-enrichment/{{resourceId}}` | `conn_mod_def::GJ4ozCJhirs::bww-fAUsSs2R5U_HJIuoYQ` |
| Count Leads From SuperSearch (Without Enrichment) | POST | `/supersearch-enrichment/count-leads-from-supersearch` | `conn_mod_def::GJ4oyaYbE3M::yxFArEvESGKHCG7Zx2-1Uw` |

3 more SupersearchEnrichment actions are available through search.

This lists 90 of 167 actions. For anything not here, call `search_one_platform_actions` with platform `instantly-ai`. The full catalog is at https://www.withone.ai/knowledge/instantly-ai.

## When a call fails

The error comes from Instantly.ai, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/instantly-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
