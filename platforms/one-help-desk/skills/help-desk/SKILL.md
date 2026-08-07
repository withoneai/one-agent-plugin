---
name: help-desk
description: HelpDesk is a customer support and ticketing platform that enables teams to manage email-based support conversations, organize requests into workflows, and automate responses, allowing support agents to resolve issues efficiently and maintain visibility across customer communications. Read and write HelpDesk data through One: reports, tickets, templates, agents, emaildomains, teams and more, 137 actions with real parameter documentation. Use whenever the user asks to look something up in HelpDesk, create or update a record there, or build code against the HelpDesk API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: help-desk
  generated-from: one-knowledge-base
---

# HelpDesk through One

HelpDesk is a customer support and ticketing platform that enables teams to manage email-based support conversations, organize requests into workflows, and automate responses, allowing support agents to resolve issues efficiently and maintain visibility across customer communications.

One exposes HelpDesk through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `help-desk` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HelpDesk is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HelpDesk account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Agent Rating Report | GET | `/v1/reports/agentRating` | `conn_mod_def::GL_NmjTMEZQ::UJ2JL449QZmj9NslmTm1Cg` |
| New Tickets 24 Using Reports v1 | GET | `/v1/reports/newTickets24` | `conn_mod_def::GL_NmjfutSw::PapU-afpTlqo_yLhZZu8TQ` |
| New Tickets Report | GET | `/v1/reports/newTickets` | `conn_mod_def::GL_NmiNp_KI::-5Uemfk2QMygy4hLeMOmKg` |
| Rating Per Agent Report | GET | `/v1/reports/ratingPerAgent` | `conn_mod_def::GL_NmrIvQ7I::zlU91g0HQu2H7boIRaVZwg` |
| Rating Per Team | GET | `/v1/reports/ratingPerTeam` | `conn_mod_def::GL_NmsEYd38::4aeusE_OQ-mlRZ7-fvbSJA` |
| Resolution Time 24 Using Reports | GET | `/v1/reports/resolutionTime24` | `conn_mod_def::GL_NmtNxEdY::1bntepqCRsCgPq5Ic38G0g` |
| Resolution Time Per Agent | GET | `/v1/reports/resolutionTimePerAgent` | `conn_mod_def::GL_NmtObZvk::7uMGd5mCRp-9HXNb2AfLHw` |
| Resolution Time Per Team | GET | `/v1/reports/resolutionTimePerTeam` | `conn_mod_def::GL_Nm17Zl5Q::jSQxepVeQhCbnkEdVNIPnw` |
| Resolution Time Report | GET | `/v1/reports/resolutionTime` | `conn_mod_def::GL_Nmu55Zj0::CInddBeaRgiQY8FRqe6uJA` |
| Response Time 24 Report | GET | `/v1/reports/responseTime24` | `conn_mod_def::GL_Nm6MEXGE::AbKC5b-MS4m6vQX28FYaxg` |
| Response Time Per Agent Report | GET | `/v1/reports/responseTimePerAgent` | `conn_mod_def::GL_Nm2l9seE::0yxfu8iZQNuLG3_Rse5P2g` |
| Response Time Per Team | GET | `/v1/reports/responseTimePerTeam` | `conn_mod_def::GL_Nm2n6Vl4::VD3M3CS2SsijoEwAuA77XQ` |

9 more Reports actions are available through search.

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticket | GET | `/v1/tickets/{{ticketId}}` | `conn_mod_def::GL_No1psqQ0::lz_fV8IlQS6tDER1FChWOA` |
| List Tickets | GET | `/v1/tickets` | `conn_mod_def::GL_NpJ701kw::2tc6nUYdSKG4RwM25Bq49g` |
| Add Followers to a Ticket | POST | `/v1/tickets/{{ticketId}}/followers` | `conn_mod_def::GL_NoqUnKwM::_5FIiMhZS7eoLslFIMd8mw` |
| Add Tag to a Ticket | POST | `/v1/tickets/{{ticketId}}/tags` | `conn_mod_def::GL_NooBPR5U::0gellPe1Rk-1cDHLBDH9sA` |
| Create Ticket | POST | `/v1/tickets` | `conn_mod_def::GL_No2qdMlg::FzetPVIDQpu-3WnOhS4tjw` |
| Delete a Ticket | DELETE | `/v1/tickets/{{ticketId}}` | `conn_mod_def::GL_NoyiD0l4::I_Rh3fCVTpWwpsQStC2Adg` |
| Merge Ticket for a Ticket | POST | `/v1/tickets/{{ticketId}}/childTickets` | `conn_mod_def::GL_NpXKJ6Mw::hg5EB3kYT8-uoH2mPFp0aA` |
| Move Ticket to Silo | PUT | `/v1/tickets/{{ticketId}}/silo` | `conn_mod_def::GL_No9Cuvzk::OYM__9rKTk655coTruOiOg` |
| Remove Follower from a Ticket | DELETE | `/v1/tickets/{{ticketId}}/followers/{{followerId}}` | `conn_mod_def::GL_No-07Ttw::9o-Bp3BsRA2XqTxmc45UvQ` |
| Remove Tag from a Ticket | DELETE | `/v1/tickets/{{ticketId}}/tags/{{tagId}}` | `conn_mod_def::GL_No9WL-eY::DwwBzG4kQ0aU3CTter7zEg` |
| Send Rating Request for a Ticket | POST | `/v1/tickets/{{ticketId}}/ratingRequests` | `conn_mod_def::GL_Npdh0YF0::bX5G85HEQ2q3pcYy09Mhsg` |
| Unmerge a Ticket's Child Ticket | DELETE | `/v1/tickets/{{ticketId}}/childTickets/{{childTicketId}}` | `conn_mod_def::GL_Npeauuwk::GwKO22NTTcat3GQtJLuX4A` |

1 more Tickets actions are available through search.

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Template | GET | `/v1/templates/{{templateId}}` | `conn_mod_def::GL_NoexahSA::3d4eGA0KTEmbmODKl6yxaw` |
| List Templates | GET | `/v1/templates` | `conn_mod_def::GL_Nop8oqA4::BLnCpuXiTRGHqUED72RwoQ` |
| Create Template | POST | `/v1/templates` | `conn_mod_def::GL_NogF_GuY::AtUXmn9sRT6xZJLfrH3dxw` |
| Delete Template | DELETE | `/v1/templates/{{templateId}}` | `conn_mod_def::GL_NohWQa40::290_El9YQXqCnL3GhaD3Vw` |
| Preview Templates | POST | `/v1/templates/preview` | `conn_mod_def::GL_NofY7LY0::V-Mroce5REGKdyIyzhbiGw` |
| Send Test Message Using Templates | POST | `/v1/templates/sendTestMessage` | `conn_mod_def::GL_NoqFfUC0::pzb0o3xSTiimPiGiU___vA` |
| Update Template | PATCH | `/v1/templates/{{templateId}}` | `conn_mod_def::GL_NooUOwMM::T5Egs5apTb6Kg5egs8TvQg` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent | GET | `/v1/agents/{{agentId}}` | `conn_mod_def::GL_NjK5E4LA::qryaaYBmR2SnEMaHPx1-og` |
| List Agents | GET | `/v1/agents` | `conn_mod_def::GL_NjKltmgQ::1mKBZLrZSJOfEzcT05GEjA` |
| Batch Update Agents | PATCH | `/v1/agents` | `conn_mod_def::GL_NjM7TLds::qYCoIVr8Q0mPbQ_4uGG03A` |
| Create Agent | POST | `/v1/agents` | `conn_mod_def::GL_NjOrXHX4::4bcKU-rVTqCdHTU9bJ51pQ` |
| Delete Agent | DELETE | `/v1/agents/{{agentId}}` | `conn_mod_def::GL_NjN4df1g::lTFqHvbRRyCEabmsV11u2Q` |
| Update an Agent | PATCH | `/v1/agents/{{agentId}}` | `conn_mod_def::GL_NjWJ1ms0::N4wuaQGhT5mXaC2FIQ8F5w` |

### EmailDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Email Domain Availability | GET | `/v1/emailDomains/available` | `conn_mod_def::GL_NkIxr0MY::OWfF_-M0Q7mEsyyBPe_0gw` |
| Get an Email Domain | GET | `/v1/emailDomains/{{emailDomainId}}` | `conn_mod_def::GL_NkV45ggQ::lLAx9OAdR0-VXvnuC6WkbQ` |
| List Email Domains | GET | `/v1/emailDomains` | `conn_mod_def::GL_NkVuN16Y::y_Uf7kSZTQaaAsWE5pM3Lw` |
| Create Email Domain | POST | `/v1/emailDomains` | `conn_mod_def::GL_NkPlh3c4::QvuDGmM4Q2uNzKoE1hLbmQ` |
| Delete Email Domain | DELETE | `/v1/emailDomains/{{emailDomainId}}` | `conn_mod_def::GL_NkGhsk7Q::n1QbUpZaSzO8U_LARmYMfg` |
| Verify an Email Domain | POST | `/v1/emailDomains/{{emailDomainId}}/verify` | `conn_mod_def::GL_NkWLpeC0::VliLur4kRpq_1cyk_f-6Ww` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team | GET | `/v1/teams/{{teamId}}` | `conn_mod_def::GL_NoWXCbZQ::nfbDI6yFQp62tVotw1P3Zg` |
| List Teams | GET | `/v1/teams` | `conn_mod_def::GL_NoV7FIdc::Sc24OpIIQSGtc-wbYptq2Q` |
| Create Team | POST | `/v1/teams` | `conn_mod_def::GL_NoWK1yvg::zfFUKWBVQFSDQSlLUQR4fA` |
| Delete Team | DELETE | `/v1/teams/{{teamId}}` | `conn_mod_def::GL_NoY5w3pU::mQo7byUHRBeU8HDEJb72jQ` |
| Update a Team | PATCH | `/v1/teams/{{teamId}}` | `conn_mod_def::GL_NoWem_ek::BshCO7GrSmqc_NnxYEslJg` |
| Update Teams | PATCH | `/v1/teams` | `conn_mod_def::GL_NofH38vA::c0-kO_XwSdCZHU09GNvmCA` |

### CannedResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Canned Response | GET | `/v1/cannedResponses/{{cannedResponseId}}` | `conn_mod_def::GL_NjWHZzOA::oCDDE3BrQmq0XkhuPrCwYA` |
| List Canned Responses | GET | `/v1/cannedResponses` | `conn_mod_def::GL_NjdEohY8::veI9FqZqSQ-1YFMBbCDrfQ` |
| Create Canned Response | POST | `/v1/cannedResponses` | `conn_mod_def::GL_NjWzh8Ek::-oeG2GeVSy6rPanZFMDCOA` |
| Delete a Canned Response | DELETE | `/v1/cannedResponses/{{cannedResponseId}}` | `conn_mod_def::GL_NjVJT3OI::8vuc2kMTRF6_OAxHsYa_Nw` |
| Update a Canned Response | PATCH | `/v1/cannedResponses/{{cannedResponseId}}` | `conn_mod_def::GL_Njg_rue8::IkuemFGVRs6coVK3RczGVg` |

### CustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Field | GET | `/v1/customFields/{{customFieldId}}` | `conn_mod_def::GL_Njd8wPno::fLT9NvOgTVOP9ZriB3P-1g` |
| List Custom Fields | GET | `/v1/customFields` | `conn_mod_def::GL_NkHLvbZI::C0fHh8p1Q6-ad_pECoRP4Q` |
| Create Custom Field | POST | `/v1/customFields` | `conn_mod_def::GL_NkAaSHiE::AnwxoMa6RiGn8sErQcqyrg` |
| Delete a Custom Field | DELETE | `/v1/customFields/{{customFieldId}}` | `conn_mod_def::GL_Njdp8OV4::idkhaD0LSdqFo8J10fNY5Q` |
| Update a Custom Field | PATCH | `/v1/customFields/{{customFieldId}}` | `conn_mod_def::GL_NkH0XOec::mIFWfkcnQMaeXQkNDdch-A` |

### Licenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get License | GET | `/v1/licenses/{{licenseId}}` | `conn_mod_def::GL_Nkb13UFM::1EQcwnPISui0SIlQVlls6Q` |
| List Licenses | GET | `/v1/licenses` | `conn_mod_def::GL_NkdBs3lI::Vq_drsEKTreAekv4JdtR6w` |
| Create License | POST | `/v1/licenses` | `conn_mod_def::GL_NkcaPkaQ::FutOYN3VTBKg3FvdXy45nA` |
| Send Forwarding Instructions for a License | PUT | `/v1/licenses/{{licenseId}}/forwardingInstructions` | `conn_mod_def::GL_NkbwgUWA::hVGUTb5aTyOUgUhpskccaA` |
| Update a License | PATCH | `/v1/licenses/{{licenseId}}` | `conn_mod_def::GL_NkkCBdMs::RdERIHnQRJ2mOFNXXdjzOg` |

### Macros

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Macro | GET | `/v1/macros/{{macroId}}` | `conn_mod_def::GL_NlM8Clmc::yhzz3ELwTF2mZaE819Psqg` |
| List Macros | GET | `/v1/macros` | `conn_mod_def::GL_Nki9tsjQ::L27HJnqeQlyG1sRmAIGkAw` |
| Create Macro | POST | `/v1/macros` | `conn_mod_def::GL_Nkisrtx4::xsaM2ad7TkibMeUJ8LDN_Q` |
| Delete Macro | DELETE | `/v1/macros/{{macroId}}` | `conn_mod_def::GL_NkjwC6eo::9lkozY0ES5O-jHmUgRgYLQ` |
| Update a Macro | PATCH | `/v1/macros/{{macroId}}` | `conn_mod_def::GL_NlXyn0UY::gNwQYdH3QiavCfYwDpicNg` |

### Mailboxes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mailbox | GET | `/v1/mailboxes/{{mailboxId}}` | `conn_mod_def::GL_NlXrOXBY::LfijZ0xtQEu-HNxLXHG3Zw` |
| List Mailboxes | GET | `/v1/mailboxes` | `conn_mod_def::GL_NlTwgD8Q::VvtQ9B7_TIuF9WR8N44ElQ` |
| Create Mailbox | POST | `/v1/mailboxes` | `conn_mod_def::GL_NlW_oaI8::L-lrxe6YSkKJnFQUtdGVrg` |
| Delete a Mailbox | DELETE | `/v1/mailboxes/{{mailboxId}}` | `conn_mod_def::GL_NmPuRcxk::EA5hQ5vYT-OTLK9MRisH7Q` |
| Update a Mailbox | PATCH | `/v1/mailboxes/{{mailboxId}}` | `conn_mod_def::GL_NmWstnbk::I4vk5mSGSaiSGmFYwZKNXQ` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rule | GET | `/v1/rules/{{ruleId}}` | `conn_mod_def::GL_NnY1NSBo::CmOYD3xHRSKq8DGBA9l5mg` |
| List Rules | GET | `/v1/rules` | `conn_mod_def::GL_NnqFfFFk::aK38OP6eTGiNDXp12pjc4A` |
| Create Rule | POST | `/v1/rules` | `conn_mod_def::GL_NnWTCek0::Y6Mkxoj-RVKGdDmc5zVaQA` |
| Delete a Rule | DELETE | `/v1/rules/{{ruleId}}` | `conn_mod_def::GL_NnW2tirM::jkpEwOVZQwGi22v_YK5jlQ` |
| Update Rule | PATCH | `/v1/rules/{{ruleId}}` | `conn_mod_def::GL_NnyyURvY::QRGQb4UTRo2IgFlPPWRZPw` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subscriptions | GET | `/v1/subscriptions` | `conn_mod_def::GL_NoD5fgM8::exR-WaumSBeKu5sKiFlHvQ` |
| Cancel a Subscription | PATCH | `/v1/subscriptions/{{subscriptionId}}/cancel` | `conn_mod_def::GL_NoCsultA::Q9rr_uLpTDWFntqnWklk1A` |
| Create Subscriptions | POST | `/v1/subscriptions` | `conn_mod_def::GL_NoCg8bVU::tJMWxDeCQ5CMx-Z2jirWww` |
| Terminate a Subscription | PATCH | `/v1/subscriptions/{{subscriptionId}}/terminate` | `conn_mod_def::GL_NoDi7Mwc::bIdWgxqNRsecWkUj9a-y0w` |
| Update a Subscription | PATCH | `/v1/subscriptions/{{subscriptionId}}` | `conn_mod_def::GL_NoDD9IGw::1eGRsb38RWatruaXJs6GoQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag by ID | GET | `/v1/tags/{{tagId}}` | `conn_mod_def::GL_NoPyze2Q::NpMwsGPmSyiVgVX3PmOarQ` |
| List Tags | GET | `/v1/tags` | `conn_mod_def::GL_NoNxe6J4::0aVBZzU1ToeCrqcHHQ2f0A` |
| Create Tag | POST | `/v1/tags` | `conn_mod_def::GL_NoKYhiZg::oWLWqF7WQ5yJ24xvJzD4XA` |
| Delete Tag | DELETE | `/v1/tags/{{tagId}}` | `conn_mod_def::GL_NoKTfoos::mIWk1tR2SnCayubYrZM_Iw` |
| Update a Tag | PATCH | `/v1/tags/{{tagId}}` | `conn_mod_def::GL_NoMkLyxw::cQSeEAyrRR2hmWzqXJ_hVg` |

### Views

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a View | GET | `/v1/views/{{viewId}}` | `conn_mod_def::GL_Np-DCVOE::rsidqxEORl-EjP6OKto9kw` |

4 more Views actions are available through search.

This lists 90 of 137 actions. For anything not here, call `search_one_platform_actions` with platform `help-desk`. The full catalog is at https://www.withone.ai/knowledge/help-desk.

## When a call fails

The error comes from HelpDesk, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/help-desk

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
