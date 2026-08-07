---
name: central-station-crm
description: CentralStationCRM is a lightweight CRM designed for small businesses to manage contacts, track deals, organize tasks and streamline customer relationships with a simple, user-friendly interface. Read and write Central Station CRM data through One: attachments, avatars, protocolattachment, externalemails, deals, projects and more, 197 actions with real parameter documentation. Use whenever the user asks to look something up in Central Station CRM, create or update a record there, or build code against the Central Station CRM API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: central-station-crm
  generated-from: one-knowledge-base
---

# Central Station CRM through One

CentralStationCRM is a lightweight CRM designed for small businesses to manage contacts, track deals, organize tasks and streamline customer relationships with a simple, user-friendly interface.

One exposes Central Station CRM through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `central-station-crm` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Central Station CRM is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Central Station CRM account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Attachments Totals (Count and Total Size) | GET | `/api/attachments/count` | `conn_mod_def::GJfHDIeIdtg::y23X8dC-TJ6TO9rHlTQmlw` |
| List a Deal Protocol’s Attachments | GET | `/api/deals/{{DEAL_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHEIcg3E0::GkNWColPS3-LyVPuWBtI9Q` |
| List Attachments | GET | `/api/attachments/` | `conn_mod_def::GJfHCoRuAXM::_Xl_OwBLQOizcPn9pzt7IQ` |
| Retrieve an Attachment | GET | `/attachments/{{id}}` | `conn_mod_def::GJfHC2S2gXw::eSiySsf-Tx-DVZDoDP9ncA` |
| Search a Company Protocol’s Attachments | GET | `/api/companies/{{COMPANY_ID}}/protocols/{{PROTOCOL_ID}}/attachments/search` | `conn_mod_def::GJfHD_cyfZM::KHPb6jhISLGlLnA46QZaaw` |
| Search Attachments | GET | `/api/attachments/search` | `conn_mod_def::GJfHDCuEUT4::OhsbfMCgQAmET4oUOq5bHQ` |
| Search Attachments for a Deal Protocol | GET | `/deals/{{DEAL_ID}}/protocols/{{PROTOCOL_ID}}/attachments/search` | `conn_mod_def::GJfHEtEq7X8::LatCZo2ISIiTbyd_BmO9Dg` |
| Create an Attachment | POST | `/api/attachments/` | `conn_mod_def::GJfHCvrpc14::qsdc1WKKSl-aeDu8MRoXdw` |
| Create an Attachment for a Deal Protocol | POST | `/deals/{{DEAL_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHEPrxVR0::DtN8JlLLSLu_3ocJUJ2qVA` |
| Create an Attachment for a Protocol | POST | `/api/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHG4Df3Ws::UTwKUaYzQ_edt12ofMi8eQ` |
| Delete an Attachment | DELETE | `/attachments/{{id}}` | `conn_mod_def::GJfHC7TPt80::jUw13zjmSvuj8FNwocuyHg` |

### Avatars

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Person’s Avatars | GET | `/people/{{PERSON_ID}}/avatars` | `conn_mod_def::GJfHHyL5spw::hqxUs1xvTjCJ2SG64_fsjg` |
| List Avatars | GET | `/api/avatars/` | `conn_mod_def::GJfHHLVuv2I::8dZklTynTXCNJclKP2EPVg` |
| Retrieve a Person’s Avatar | GET | `/people/{{PERSON_ID}}/avatars/{{ID}}` | `conn_mod_def::GJfHH-vl9dU::2R9-VHW8Qpme5FZm8qmGHw` |
| Retrieve an Avatar | GET | `/avatars/{{id}}` | `conn_mod_def::GJfHHRGFtqg::09vb4ruPQa6kbe3aMFKfzQ` |
| Retrieve Avatars Count and Total Size | GET | `/api/avatars/count` | `conn_mod_def::GJfHHsDM_M0::5MZN6TOURQOxXKHOudAdng` |
| Create an Avatar for a Person | POST | `/people/{{PERSON_ID}}/avatars` | `conn_mod_def::GJfHH4ZKiUE::oDxOVz6ORLuPsoT4woIkQQ` |
| Delete a Person’s Avatar | DELETE | `/people/{{PERSON_ID}}/avatars/{{ID}}` | `conn_mod_def::GJfHIKUvWRw::Ara_vRjHSoSx2SDKNIIOrg` |
| Delete an Avatar | DELETE | `/api/avatars/{{ID}}` | `conn_mod_def::GJfHHk2ojgs::jGSsL0H3SU6542LoDIUrVA` |

### ProtocolAttachment

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Protocol Attachment | GET | `/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHFzzprxA::4WMOhHWCSfOZdHp6M_cA5Q` |
| Retrieve a Protocol Attachment | GET | `/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHG-pwIVI::D5pXCpc7Q-azCcYEtczROA` |
| Retrieve a Protocol Attachment | GET | `/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHDxVL_Q4::9Jdi5Y32Tmigr7MTVDLrJA` |
| Retrieve a Protocol Attachment (Deprecated Project-Scoped Path) | GET | `/projects/{{PROJECT_ID}}/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHGbkf9fs::qTrG1LXYTVaQYRyWP56fBA` |
| Create a Protocol Attachment (for a Project) | POST | `/projects/{{PROJECT_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHGSvqyRU::d9z-VjykSbOm3AU_KELntA` |
| Create a Protocol Attachment for a Person | POST | `/api/people/{{PERSON_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHFtduC-4::bMLkAAuHSE-V0diqeO1SlA` |
| Delete a Protocol Attachment (Deprecated Project-Scoped Path) | DELETE | `/projects/{{PROJECT_ID}}/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHGiKEuAM::zD5wq6rqSJCTFIJ8pS7XTw` |

### ExternalEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Count External Emails | GET | `/api/external_emails/count` | `conn_mod_def::GJfHQDd9E1U::RWRHS5e9TTCel8lm8M4NiQ` |
| List a Company's External Emails | GET | `/companies/{{COMPANY_ID}}/external_emails` | `conn_mod_def::GJfHPYO-1dE::XiHG8ixBSeqyAQrzRoc-vA` |
| List a Deal’s External Emails | GET | `/deals/{{DEAL_ID}}/external_emails` | `conn_mod_def::GJfHPmu6R_U::16jg5VjSSM-HIqYVSrEvYw` |
| List a Person’s External Emails | GET | `/people/{{PERSON_ID}}/external_emails` | `conn_mod_def::GJfHQKI-pA4::8P7ZXJT1TXaWzKgfkAFJvA` |
| List a Project’s External Emails | GET | `/projects/{{PROJECT_ID}}/external_emails` | `conn_mod_def::GJfHQcYu_z0::IywVd7yuRSOEVvMTSnM0xw` |
| List External Emails | GET | `/api/external_emails` | `conn_mod_def::GJfHPzawYsM::GMN6Nr8HRVaQ_VPhOoFHhA` |
| Retrieve an External Email | GET | `/external_emails/{{id}}` | `conn_mod_def::GJfHP6rytL0::JjbKDZICQMSMcvYk9DIFYg` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Deals | GET | `/api/deals/count` | `conn_mod_def::GJfHO7jTTYc::5D55V-qQQ4mAKgegShgh3g` |
| List Deals | GET | `/api/deals` | `conn_mod_def::GJfHOE_LdXQ::_XGKN3BlQHyxFiWcdBU1nA` |
| Search Deals | GET | `/api/deals/search` | `conn_mod_def::GJfHO0STMNo::1C9HDS6lTDCfcBU-MteQ6A` |
| Create a Deal | POST | `/api/deals` | `conn_mod_def::GJfHOQp2d4A::t6zlDAs4Sjeg7kRPlfpiQQ` |
| Delete a Deal | DELETE | `/deals/{{id}}` | `conn_mod_def::GJfHOsk8OUk::_FygIGInTKiITd-k7Mn85Q` |
| Update a Deal | PUT | `/deals/{{ID}}` | `conn_mod_def::GJfHOkpQBwg::V5DGnziLQWKKqZE5f2vb_Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/api/projects` | `conn_mod_def::GJfHVguxlyA::4zt7UglHTYG9eGb5oFixqw` |
| Retrieve Project Count | GET | `/api/projects/count` | `conn_mod_def::GJfHWGMD05U::ljt-XkAsSPCrnm09VJMsUA` |
| Search Projects | GET | `/api/projects/search` | `conn_mod_def::GJfHV_B90Vw::oV5ER1vQSvizG1sSUWa-sw` |
| Create a Project | POST | `/api/projects` | `conn_mod_def::GJfHVn18S0I::XrYNMGN8RXittEQwkDnVIw` |
| Destroy a Project | DELETE | `/projects/{{id}}` | `conn_mod_def::GJfHV5Y-oLs::9h-69OaTRNOcavWseF3IGQ` |
| Update a Project | PUT | `/projects/{{id}}` | `conn_mod_def::GJfHVz7l9l0::23sLd_vhTJi-UnIy3cKBjQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies | GET | `/api/companies` | `conn_mod_def::GJfHKgUX4ug::TyG-D5P3S5ukTPTuOoxrTg` |
| Retrieve Company Count | GET | `/api/companies/count` | `conn_mod_def::GJfHLbmBpPE::HCBD-bslQ8ehSOVcockhXg` |
| Search Companies | GET | `/api/companies/search` | `conn_mod_def::GJfHLBOk9yU::YGCiN2Q7Tza7-ciY8Rjvbw` |
| Delete a Company | DELETE | `/api/companies/{{id}}` | `conn_mod_def::GJfHK6uF75s::6bu4aWMPS52zNjzmQSPu9g` |
| Merge Another Company into a Company | POST | `/companies/{{ID}}/merge` | `conn_mod_def::GJfHLJLGwyU::bgmVyHn3QYOER3FHGdtMhw` |
| Update a Company | PUT | `/companies/{{id}}` | `conn_mod_def::GJfHK1i6QM0::BsHUDITjTg6nehwzqxLuHA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Comments | GET | `/api/comments` | `conn_mod_def::GJfHKCLdBHc::FxTrVXRzT72c0agQg6Po5Q` |
| Retrieve a Comment | GET | `/api/comments/{{id}}` | `conn_mod_def::GJfHKO-J_Vc::wit0gmO0Ssyboi7Q0fOdJg` |
| Create a Comment | POST | `/api/comments` | `conn_mod_def::GJfHKH0Xkgk::lSvhCnQcTaOXa9Evkv9QQQ` |
| Destroy a Comment | DELETE | `/api/comments/{{id}}` | `conn_mod_def::GJfHKZnOZpk::NaBnlgGYSeC-jo3RGnD6aA` |
| Update a Comment | PUT | `/comments/{{ID}}` | `conn_mod_def::GJfHKUreFIw::DNSj7pgSQemfpa7auHQYEQ` |

### Protocols

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Protocols | GET | `/api/protocols/count` | `conn_mod_def::GJfHWzpEGjI::2c9CuFumSs-TQw--wNbyQQ` |
| List Protocols | GET | `/api/protocols` | `conn_mod_def::GJfHWRlKQUQ::OP_yoEqXQD6oereojLWnMw` |
| Create a Protocol | POST | `/api/protocols` | `conn_mod_def::GJfHWYzzZps::A_cgj3mWTdOQr_P5rMtiFw` |
| Delete a Protocol | DELETE | `/protocols/{{ID}}` | `conn_mod_def::GJfHWr6WOls::SGqAG3kKT0WvgXvmqR7W-g` |
| Update a Protocol | PUT | `/protocols/{{id}}` | `conn_mod_def::GJfHWl30cEw::vnNpaMmeTXaCiHA3kImRvw` |

### ProtocolAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Protocol’s Attachments | GET | `/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHGwrNmiU::cKGXNWS-Qa-NFRA9lMZjBA` |
| List a Protocol’s Attachments (for a Company) | GET | `/companies/{{COMPANY_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHDQoUP1s::XuHBRn5OQGi9Z8QhIXsMgg` |
| List a Protocol’s Attachments (in a Project) | GET | `/projects/{{PROJECT_ID}}/protocols/{{PROTOCOL_ID}}/attachments` | `conn_mod_def::GJfHGMiMsMg::EscjYHE0S8SP9r_mIbxp-g` |
| Search a Protocol’s Attachments (in a Project) | GET | `/projects/{{PROJECT_ID}}/protocols/{{PROTOCOL_ID}}/attachments/search` | `conn_mod_def::GJfHGpzVhmo::BkpkUL1zQcGquP0XrQZ85g` |
| Delete a Protocol Attachment | DELETE | `/protocols/{{PROTOCOL_ID}}/attachments/{{ID}}` | `conn_mod_def::GJfHHENwR1w::FXtUnAchR661LgKVn0cOUA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/api/tasks` | `conn_mod_def::GJfHYBwtYSI::xx6rzEyZQM-ClWpWZmHNFw` |
| Retrieve a Task | GET | `/tasks/{{id}}` | `conn_mod_def::GJfHYgo6_HE::hvbxj3D5QeOOiLt6TkcpUA` |
| Create a Task | POST | `/api/tasks` | `conn_mod_def::GJfHYIOro6g::yMl6kbf7QWivG-nzj7ty4w` |
| Delete a Task | DELETE | `/api/tasks/{{id}}` | `conn_mod_def::GJfHYs0tTW0::X8jC_SkBR62OOCVKu-YHmQ` |
| Update a Task | PUT | `/api/tasks/{{id}}` | `conn_mod_def::GJfHYmwI740::WvL8Zs_9TRK91OpxnVuJow` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| List People | GET | `/api/people` | `conn_mod_def::GJfHTwj5ImQ::0M9osKX0TkKce3OQvtJyKw` |
| Search People | GET | `/api/people/search` | `conn_mod_def::GJfHUdYRf6U::bzRs8kueRkGisiENOxVKlg` |
| Destroy a Person | DELETE | `/people/{{id}}` | `conn_mod_def::GJfHUSN4wpI::0ZZBkP6BTzuCyGUXbEhBWw` |
| Merge Another Person Into a Person | POST | `/people/{{ID}}/merge` | `conn_mod_def::GJfHUZCNSo0::uTWgoEXaSBWAwDviunCWQA` |

### Assi

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Person’s Assistent (Assi) | GET | `/people/{{PERSON_ID}}/assis/{{ID}}` | `conn_mod_def::GJfHCV2y6GQ::1uwqE6xeQMSO8fiicoh0eQ` |
| Create an Assi for a Person | POST | `/people/{{PERSON_ID}}/assis` | `conn_mod_def::GJfHCPBM-qY::fQqUCCeoTDSqNWCfzeCL1A` |
| Destroy a Person’s Assi | DELETE | `/people/{{PERSON_ID}}/assis/{{ID}}` | `conn_mod_def::GJfHCiXqmxg::cO_mWg7ORiOigVbcr_OA3Q` |
| Update a Person’s Assi | PUT | `/people/{{PERSON_ID}}/assis/{{ID}}` | `conn_mod_def::GJfHCblQzMA::2FH3gJV1RJi9nba27ZYzUw` |

### ContactDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Contact Details | GET | `/companies/{{COMPANY_ID}}/contact_details` | `conn_mod_def::GJfHLp34D3U::wK3bHHB4SiiIAYe1GR0GNg` |
| List a Person’s Contact Details | GET | `/people/{{PERSON_ID}}/contact_details` | `conn_mod_def::GJfHMOTO2iM::WbaqdMjSSrWXqJbKn7QYjw` |
| Search Contact Details | GET | `/api/contact_details/search` | `conn_mod_def::GJfHMvJaNbM::ez1WygQ4QBWBJzTpBLcmUg` |
| Create a Person’s Telephone Contact Detail | POST | `/people/{{PERSON_ID}}/contact_details` | `conn_mod_def::GJfHMUEBoEA::tSNAJ3imSX-eU1avoUbkYg` |

### FilterGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Filter Groups | GET | `/api/filter_groups` | `conn_mod_def::GJfHQo52muU::PCcCh7G2TMag7fp8QJybzw` |
| Retrieve a Filter Group’s Matching Record Count | GET | `/filter_groups/{{ID}}/count` | `conn_mod_def::GJfHQ809tdU::ckBFp_sgT22JQPqaG8XirA` |
| Retrieve Record IDs for a Filter Group | GET | `/filter_groups/{{ID}}/ids` | `conn_mod_def::GJfHQ1prHFg::ZxSEGHIaRh288f-2lvdB0A` |
| Retrieve Records for a Filter Group | GET | `/filter_groups/{{id}}` | `conn_mod_def::GJfHQvQ5M6s::FhzOhtlzQ7WTyReyCN5pcg` |

### Positions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Person’s Positions | GET | `/people/{{PERSON_ID}}/positions` | `conn_mod_def::GJfHUw8C1B8::XkUe3nFoQF2noDNxcf29gw` |
| Retrieve a Person’s Position | GET | `/people/{{PERSON_ID}}/positions/{{ID}}` | `conn_mod_def::GJfHVNGLvok::Sknw7QKSR5C7xYtMlcyveg` |
| Create a Person’s Position | POST | `/people/{{PERSON_ID}}/positions` | `conn_mod_def::GJfHU3q7QqE::CrygZM3LSnGcvpufTG88ww` |

1 more Positions actions are available through search.

This lists 90 of 197 actions. For anything not here, call `search_one_platform_actions` with platform `central-station-crm`. The full catalog is at https://www.withone.ai/knowledge/central-station-crm.

## When a call fails

The error comes from Central Station CRM, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/central-station-crm

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
