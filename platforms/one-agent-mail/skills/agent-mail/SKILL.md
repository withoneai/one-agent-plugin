---
name: agent-mail
description: Agent Mail enables developers to give AI agents unique, programmable email inboxes that can send, receive, and act on emails at scale—featuring API-first integration, custom domains, and built-in deliverability safeguards. Read and write AgentMail data through One: webhooks, inboxes, drafts, domains, messages, threads and more, 91 actions with real parameter documentation. Use whenever the user asks to look something up in AgentMail, create or update a record there, or build code against the AgentMail API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: agent-mail
  generated-from: one-knowledge-base
---

# AgentMail through One

Agent Mail enables developers to give AI agents unique, programmable email inboxes that can send, receive, and act on emails at scale—featuring API-first integration, custom domains, and built-in deliverability safeguards.

One exposes AgentMail through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `agent-mail` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm AgentMail is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real AgentMail account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v0/webhooks/{{webhookId}}` | `conn_mod_def::GJz8Fx3wYKw::n7c1CqozSt69qvgGnYVccQ` |
| List Webhooks | GET | `/v0/webhooks` | `conn_mod_def::GJz8F9KfF8Q::M3GmKlCsSZ-6OJX1PiAttw` |
| Create a Webhook | POST | `/v0/webhooks` | `conn_mod_def::GJz8FhvKqbM::hiH5HyAtQF2U1uk_lsB7rA` |
| Delete a Webhook | DELETE | `/v0/webhooks/{{webhookId}}` | `conn_mod_def::GJz8Fp1T2wk::HHoSQM50RoiMVHmqeqmpnQ` |
| Domain Verified (Webhook Event) | POST | `/webhooks/domain-verified` | `conn_mod_def::GJz7-rTyssg::LvdrQxxPRdih0T9ZslxTsg` |
| Message Bounced (Webhook Event) | POST | `/webhooks/message-bounced` | `conn_mod_def::GJz7-zoKySI::4Tb8NY8TQiO3r8b-fb1lWQ` |
| Message Delivered (Webhook Event) | POST | `/webhooks/message-delivered` | `conn_mod_def::GJz7_EV3yVo::jFstAxZqRjqDHG4k6n9J8A` |
| Message Rejected (Webhook Event) | POST | `/webhooks/message-rejected` | `conn_mod_def::GJz7_TUsZv8::SWhZULAFQyGnfkhyvQ6rGw` |
| Message Sent (Webhook Event) | POST | `` | `conn_mod_def::GJz7_b9QkXQ::gd13n83eTRGvemrfj-fztw` |
| Update a Webhook | PATCH | `/v0/webhooks/{{webhookId}}` | `conn_mod_def::GJz8GEOcwik::HzjW8eN5Tf6xE21TG5qC8w` |

### Inboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod’s Inbox | GET | `/v0/pods/{{podId}}/inboxes/{{inboxId}}` | `conn_mod_def::GJz8AMy2Xzk::-gAjib6xQUGQ41x0wmQM4A` |
| List a Pod’s Inboxes | GET | `/v0/pods/{{podId}}/inboxes` | `conn_mod_def::GJz8AbNip1A::ZE12FuSkR8CLJcSGatSobg` |
| List Inboxes | GET | `/v0/inboxes` | `conn_mod_def::GJz8AT-8xSU::2kNV465fS-24M_n9XoVA7w` |
| Query an Inbox’s Metrics | GET | `/v0/inboxes/{{inboxId}}/metrics` | `conn_mod_def::GJz8DBiQywY::-CtTh4TITT6P6dS4yr5zZg` |
| Create a Pod’s Inbox | POST | `/v0/pods/{{podId}}/inboxes` | `conn_mod_def::GJz7_sIIlgk::ylykS2SLSQ-g-n-pqUS4tw` |
| Create Inbox | POST | `/inboxes` | `conn_mod_def::GJz7_ivMY6E::Pw90sLtbQq-AZLv_bwuyPw` |
| Delete an Inbox | DELETE | `/v0/inboxes/{{inboxId}}` | `conn_mod_def::GJz7_y2tl_s::WN0PPTz6QJG5dlVxtILEkA` |
| Delete an Inbox in a Pod | DELETE | `/v0/pods/{{podId}}/inboxes/{{inboxId}}` | `conn_mod_def::GJz7_7ZyLnw::lEEu2i-OSP-ZougEX5WveA` |
| Update a Pod’s Inbox | PATCH | `/v0/pods/{{podId}}/inboxes/{{inboxId}}` | `conn_mod_def::GJz8AqSIiNc::RFyUwanAQBCnOBho7eL-fw` |
| Update an Inbox | PATCH | `/v0/inboxes/{{inboxId}}` | `conn_mod_def::GJz8Ahub3Uw::WAyoZjIcQ52psS3UEcMzgw` |

### Drafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft | GET | `/v0/drafts/{{draftId}}` | `conn_mod_def::GJz790qayzs::My3rYo4pR8S7cDz60XTdgA` |
| Get a Pod Draft | GET | `/v0/pods/{{podId}}/drafts/{{draftId}}` | `conn_mod_def::GJz797AAsqA::y7APVbLCSNqzhndN4cHvfA` |
| List a Pod’s Drafts | GET | `/v0/pods/{{podId}}/drafts` | `conn_mod_def::GJz7-TmXyII::ig-nd8tRQu6kFz_rKgkfnA` |
| List an Inbox’s Drafts | GET | `/v0/inboxes/{{inboxId}}/drafts` | `conn_mod_def::GJz7-DTmM-w::3NYLXLUpS12FkhSIP5Ditw` |
| List Drafts | GET | `/v0/drafts` | `conn_mod_def::GJz7-LMTQ_E::WOI4VWm_RbuuG9E1USWOLg` |
| Create a Draft in an Inbox | POST | `/v0/inboxes/{{inboxId}}/drafts` | `conn_mod_def::GJz79HUGpGQ::vBuQSh2kRA-gUKKcMX2JXA` |
| Delete an Inbox Draft | DELETE | `/v0/inboxes/{{inboxId}}/drafts/{{draftId}}` | `conn_mod_def::GJz79N9U648::kdRmKQFEQVyylq1WKTZXDA` |
| Send a Draft from an Inbox | POST | `/v0/inboxes/{{inboxId}}/drafts/{{draftId}}/send` | `conn_mod_def::GJz7-a-V7OI::AoE2KlqiREqMALPHKmENfw` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain | GET | `/v0/domains/{{domainId}}` | `conn_mod_def::GJz775VRfZI::MJg0mRheQa-GdXqrpFrTRw` |
| Get a Domain's Zone File | GET | `/v0/domains/{{domainId}}/zone-file` | `conn_mod_def::GJz78HPdiV0::IO5kQ6W3QCeH-efdCCp-jg` |
| List Domains | GET | `/domains` | `conn_mod_def::GJz78W4IxeI::yXn9TDASSHyuUjsOuPo-Gg` |
| Create Domain | POST | `/domains` | `conn_mod_def::GJz77e5ng4I::ykM1fm0BSymdKx_EdP2HTA` |
| Delete a Domain | DELETE | `/v0/domains/{{domainId}}` | `conn_mod_def::GJz77sUn58c::n0m1wTf9T6K0VDzYBP0dvA` |
| Update a Domain | PATCH | `/v0/domains/{{domainId}}` | `conn_mod_def::GJz78p1ihJc::w6INtrDsT9aWW7A2m0xnnw` |
| Verify a Domain | POST | `/v0/domains/{{domainId}}/verify` | `conn_mod_def::GJz785ajzm0::lfZVYkPES1qVkLWxe0Q-vg` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message from an Inbox | GET | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}` | `conn_mod_def::GJz8CE8lDBY::IftjYoiMQDKOv4hERGmPww` |
| List an Inbox’s Messages | GET | `/v0/inboxes/{{inboxId}}/messages` | `conn_mod_def::GJz8CY-N4Dw::9MgcgZrxTViYsNG1wgVHcw` |
| Forward a Message from an Inbox | POST | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}/forward` | `conn_mod_def::GJz8B1hR-5M::lzVDSINrQFeWvQLniAxdkA` |
| Reply All to a Message in an Inbox | POST | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}/reply-all` | `conn_mod_def::GJz8CiZvJw4::ite_T4FITxaR0bmj8rWaBg` |
| Reply to a Message in an Inbox | POST | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}/reply` | `conn_mod_def::GJz8CpVmY3w::WDx9mHQuSeGzCiJPJLmJAQ` |
| Send a Message from an Inbox | POST | `/v0/inboxes/{{inboxId}}/messages/send` | `conn_mod_def::GJz8Cx1aM_M::yNe27ai6SuSWduFeY2jLzg` |
| Update an Inbox Message | PATCH | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}` | `conn_mod_def::GJz8C6MlBQc::AopK7rLhRtCi4UQyzoocjA` |

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod’s Thread | GET | `/v0/pods/{{podId}}/threads/{{threadId}}` | `conn_mod_def::GJz8FBYZRLY::z9fm0iKYS6mAVe7Nd0J0ow` |
| Get a Thread | GET | `/v0/threads/{{threadId}}` | `conn_mod_def::GJz8E627IXc::IQgSgCP_Que6Qx3UIVEG3g` |
| Get an Inbox Thread | GET | `/v0/inboxes/{{inboxId}}/threads/{{threadId}}` | `conn_mod_def::GJz8EzzhCWY::Us8WwVAxSRuhjK02QQAxKg` |
| List a Pod’s Threads | GET | `/v0/pods/{{podId}}/threads` | `conn_mod_def::GJz8FbaMbdY::LYhzSPyxSzidI4Npm395tQ` |
| List an Inbox’s Threads | GET | `/v0/inboxes/{{inboxId}}/threads` | `conn_mod_def::GJz8FLcPNrM::nVnvo5x_TxuyOcMi1kr6TA` |
| List Threads | GET | `/threads` | `conn_mod_def::GJz8FTm0t5k::Ka-RUkPuQMq2r--9i7hj0Q` |
| Delete a Thread | DELETE | `/v0/threads/{{threadId}}` | `conn_mod_def::GJz8EMiMUEg::eLTdJ37ySsulfZiEo-2jow` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pod's API Keys | GET | `/v0/pods/{{podId}}/api-keys` | `conn_mod_def::GJz77YJJWzk::DtP3zvhTSX6eQvoLSc-O5w` |
| List API Keys | GET | `/v0/api-keys` | `conn_mod_def::GJz77Q2lrbo::89upfX1uS0OLFmRaO5Lmdw` |
| Create an API Key for a Pod | POST | `/v0/pods/{{podId}}/api-keys` | `conn_mod_def::GJz763LlpnE::QgywK9vfR7OzHM120SVkvQ` |
| Create API Key | POST | `/api-keys` | `conn_mod_def::GJz76wM3_2E::7EtaPayaRBOqWL1uPjfqJA` |
| Delete an API Key | DELETE | `/v0/api-keys/{{apiKey}}` | `conn_mod_def::GJz769pxBRc::S9AELphXT1e2qxXBLdo-xw` |

### PodDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod Domain's Zone File | GET | `/v0/pods/{{podId}}/domains/{{domainId}}/zone-file` | `conn_mod_def::GJz78P0vw8k::OVjWj4UyQDiEVTMcR-wSJQ` |
| List a Pod’s Domains | GET | `/v0/pods/{{podId}}/domains` | `conn_mod_def::GJz78eVdxA0::7ohZ9JN7Sbem1PR0FbDlNQ` |
| Create a Pod Domain | POST | `/v0/pods/{{podId}}/domains` | `conn_mod_def::GJz77lye1fE::GFxgsk1rRlu-M0MXEXoWzQ` |
| Delete a Pod Domain | DELETE | `/v0/pods/{{podId}}/domains/{{domainId}}` | `conn_mod_def::GJz77zgQw5Q::6fD4eJzASBaWke4Q0JHC9Q` |
| Verify a Pod Domain | POST | `/v0/pods/{{podId}}/domains/{{domainId}}/verify` | `conn_mod_def::GJz79AP70Is::1Ibl97wwRRWFYeqmkqlu8Q` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a List Entry | GET | `/v0/lists/{{direction}}/{{type}}/{{entry}}` | `conn_mod_def::GJz8BT3iQKM::lHzN_Gf9R32vqeSqc0SE0g` |
| List List Entries | GET | `/v0/lists/{{direction}}/{{type}}` | `conn_mod_def::GJz8Bky_m1s::5FliY0VJQVyTJsafTmmLRg` |
| Create a List Entry | POST | `/v0/lists/{{direction}}/{{type}}` | `conn_mod_def::GJz8AwnA06o::FB_1dDXNS2ycElthYFtzOg` |
| Delete a List Entry | DELETE | `/v0/lists/{{direction}}/{{type}}/{{entry}}` | `conn_mod_def::GJz8BEHjQg0::mwPeG0MvT7yQVRCPhObpTw` |

### Pods

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod | GET | `/v0/pods/{{podId}}` | `conn_mod_def::GJz8DzqeZvU::5Z425prMSoeIu8HZZaTpjQ` |
| List Pods | GET | `/pods` | `conn_mod_def::GJz8D83qaVY::u_Ec4rt8R52EOvmrzUzh1Q` |
| Create a Pod | POST | `/v0/pods` | `conn_mod_def::GJz8DjxjvgE::bSo7zufaTfuiqg3zJMfo9Q` |
| Delete a Pod | DELETE | `/v0/pods/{{podId}}` | `conn_mod_def::GJz8DthZYwo::SmjSar8VS8GwXwXRl09QXQ` |

### DraftAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Draft Attachment | GET | `/v0/drafts/{{draftId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz79dsTYuo::q_NVqmxeR36qQKfVNju9ow` |
| Get a Draft Attachment | GET | `/v0/pods/{{podId}}/drafts/{{draftId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz79klXTuo::neN-dF9XRkCVp0vXK5dECA` |
| Get a Draft Attachment (Metadata + Download URL) | GET | `/v0/inboxes/{{inboxId}}/drafts/{{draftId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz79Ww5R5I::RyMFbDzhQPGBwh4E9jQhPg` |

### PodListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod List Entry | GET | `/v0/pods/{{podId}}/lists/{{direction}}/{{type}}/{{entry}}` | `conn_mod_def::GJz8BafhCo0::zZpQ7338Ts-RQL5k5HD_xA` |
| List a Pod’s List Entries | GET | `/v0/pods/{{podId}}/lists/{{direction}}/{{type}}` | `conn_mod_def::GJz8Bs-Cwig::B2zu-MQFSbKcW_bcloF__Q` |
| Delete a Pod List Entry | DELETE | `/v0/pods/{{podId}}/lists/{{direction}}/{{type}}/{{entry}}` | `conn_mod_def::GJz8BLlHEgM::GUWKsUKzR-GJv1ajmxbq6w` |

### PodsDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pod’s Domain | GET | `/v0/pods/{{podId}}/domains/{{domainId}}` | `conn_mod_def::GJz78BCOxUU::KJQ-S3hVTXyQvaqUqkCL7w` |
| Update a Pod’s Domain | PATCH | `/v0/pods/{{podId}}/domains/{{domainId}}` | `conn_mod_def::GJz78ykbnyQ::SowSqh38T_W_hYWJbR9Low` |

### InboxDrafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inbox Draft | GET | `/v0/inboxes/{{inboxId}}/drafts/{{draftId}}` | `conn_mod_def::GJz79s0JMBM::jaZjN1wIRNuLX9Vd4b7q0Q` |
| Update an Inbox Draft | PATCH | `/v0/inboxes/{{inboxId}}/drafts/{{draftId}}` | `conn_mod_def::GJz7-jRbWok::yBmK1vetQd2udRi90vmeYQ` |

### ThreadAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Thread Attachment | GET | `/v0/threads/{{threadId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz8Ei8BXu4::7x-JfCeKSeGvOZwJAeb4vw` |
| Get a Thread Attachment (Download URL) | GET | `/v0/pods/{{podId}}/threads/{{threadId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz8EqwF_tU::UzSv5puOTx6pF-FcDBC9qA` |

### PodApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pod’s API Key | DELETE | `/v0/pods/{{podId}}/api-keys/{{apiKey}}` | `conn_mod_def::GJz77H3nU-w::hWCgZR5dSq2J7EXSwbFe5w` |

### MessageComplained

| Action | Method | Path | Action id |
|---|---|---|---|
| Message Complained (Webhook Event) | POST | `/message-complained` | `conn_mod_def::GJz7-8zJzxQ::ttyWQCvASY2GVlaI93kIPA` |

### MessageReceivedEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Message Received (Webhook Event) | POST | `{{webhookPath}}` | `conn_mod_def::GJz7_LuBD1E::Dyp634ZcRMmkrPSdRO2Fsg` |

### InboxMessageAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inbox Message Attachment | GET | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz8B8MYxqI::0v7EozQhQZemFpgnIHcMrg` |

### InboxMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Inbox Message’s Raw Content Download URL | GET | `/v0/inboxes/{{inboxId}}/messages/{{messageId}}/raw` | `conn_mod_def::GJz8CONXf0k::MRpLMxmhSzOHWojyxJ1gcg` |

### PodMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Pod’s Metrics | GET | `/v0/pods/{{podId}}/metrics` | `conn_mod_def::GJz8DTLL5Bw::tmtwg-hySPeddO9P2Eoq3w` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Organization | GET | `/v0/organizations` | `conn_mod_def::GJz8Dbg0NpA::H8Ku9RATSJCk3YiiOk-iTQ` |

### InboxThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Inbox Thread | DELETE | `/v0/inboxes/{{inboxId}}/threads/{{threadId}}` | `conn_mod_def::GJz8ED_2IhE::gGx4eGFGShC-x2bG30n1xg` |

### PodThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pod Thread | DELETE | `/v0/pods/{{podId}}/threads/{{threadId}}` | `conn_mod_def::GJz8ETj6sPc::qa168OPbTn6UKamuKhN6YA` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Attachment for a Thread in an Inbox | GET | `/v0/inboxes/{{inboxId}}/threads/{{threadId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJz8EauMc-M::6gPzKk6zSNStI26RFdt7Dw` |

### WebSocketEventStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Connect to WebSocket Event Stream | GET | `/v0` | `conn_mod_def::GJz8GM_TKhY::sRD9nCCyQaGcYfrOFhhA5A` |

This lists 90 of 91 actions. For anything not here, call `search_one_platform_actions` with platform `agent-mail`. The full catalog is at https://www.withone.ai/knowledge/agent-mail.

## When a call fails

The error comes from AgentMail, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/agent-mail

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
