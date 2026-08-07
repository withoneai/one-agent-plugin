---
name: apollo
description: Apollo is a sales intelligence and engagement platform that helps teams find and connect with prospects. It provides enriched contact data and automation tools to streamline outbound workflows and close more deals. Read and write Apollo data through One: accounts, contacts, emailercampaigns, opportunities, organizations, phonecalls and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in Apollo, create or update a record there, or build code against the Apollo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: apollo
  generated-from: one-knowledge-base
---

# Apollo through One

Apollo is a sales intelligence and engagement platform that helps teams find and connect with prospects. It provides enriched contact data and automation tools to streamline outbound workflows and close more deals.

One exposes Apollo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `apollo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Apollo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Apollo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| View an Account | GET | `/accounts/{{id}}` | `conn_mod_def::GJz18DDnE6w::RJhEmf4AT6mmLBVttv-7FA` |
| Bulk Create Accounts | POST | `/api/v1/accounts/bulk_create` | `conn_mod_def::GJz163LdMJU::hWDUX0fCQWCc5qQln6aQ0w` |
| Bulk Update Accounts | POST | `/api/v1/accounts/bulk_update` | `conn_mod_def::GJz16-Qfx1w::Et7L5sHASWaCMHF7t-u22w` |
| Create an Account | POST | `/api/v1/accounts` | `conn_mod_def::GJz17HSIaaw::BxpcIhBPQCqc82bYFpJLPg` |
| Search for Accounts | POST | `/api/v1/accounts/search` | `conn_mod_def::GJz17VqALZc::15ONRvevRLmLQmJzEwHJCw` |
| Update Account Owner for Multiple Accounts | POST | `/api/v1/accounts/update_owners` | `conn_mod_def::GJz17dbsUCc::NAEtaQ2FS5KOfbXQiAIoFg` |
| Update Account Stage for Multiple Accounts | POST | `/{{path}}` | `conn_mod_def::GJz17kS7cXI::rQlesMqqRm23fcXDB6t5sg` |
| Update an Account | PATCH | `/accounts/{{accountId}}` | `conn_mod_def::GJz17uMfKtU::H2egrgHsTZ2EeOtP8sVw1A` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| View a Contact | GET | `/contacts/{{contactId}}` | `conn_mod_def::GJz19tvPv5w::qzMNEEDNSVS13OIq1ED71g` |
| Bulk Create Contacts | POST | `/api/v1/contacts/bulk_create` | `conn_mod_def::GJz18r1FsZE::nL_te5RwQDSYnheuzV7W-A` |
| Bulk Update Contacts | POST | `/api/v1/contacts/bulk_update` | `conn_mod_def::GJz184olw_M::Eiiv4GzITq2Y8UX3cefhuw` |
| Create a Contact | POST | `/api/v1/contacts` | `conn_mod_def::GJz18_qaRlg::Vlkwc7g2RQynN5-X7YAr7w` |
| Search for Contacts | POST | `/api/v1/contacts/search` | `conn_mod_def::GJz19OR6O7g::qWyp8pZmSAGHkOzMWXO21Q` |
| Update a Contact | PATCH | `/contacts/{{contactId}}` | `conn_mod_def::GJz19VR-BBs::-TZ9MOtMT-ClOwl_cnbjFw` |
| Update Contact Owner for Multiple Contacts | POST | `/api/v1/contacts/update_owners` | `conn_mod_def::GJz19dqvLjI::RWqP-UvATpykvKsM74wgRA` |
| Update Contact Stage for Multiple Contacts | POST | `/contacts/update_stages` | `conn_mod_def::GJz19m1SZm4::9f9265U9SK-wXd2ZaBkOZw` |

### EmailerCampaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate a Sequence (Approve a Sequence) | POST | `/emailer_campaigns/{{sequenceId}}/approve` | `conn_mod_def::GJz2AtgLPus::Jvp7DjM3TvKQcSXkGoY70g` |
| Add Contacts to a Sequence | POST | `/emailer_campaigns/{{sequenceId}}/add_contact_ids` | `conn_mod_def::GJz2A8rUZLQ::BRe1mfcBRQ2suX0rLoMxnA` |
| Archive a Sequence | POST | `/emailer_campaigns/{{sequenceId}}/archive` | `conn_mod_def::GJz2BEEMZi4::OUkI3T59SaWn2TvPxYr2ZA` |
| Deactivate a Sequence (Abort an Emailer Campaign) | POST | `/emailer_campaigns/{{sequenceId}}/abort` | `conn_mod_def::GJz2BTGhsgo::eUsvQy2zTMCGy3G_Sa6UkQ` |
| Search for Sequences | POST | `/api/v1/emailer_campaigns/search` | `conn_mod_def::GJz2BqHQQLU::bmUbbCglQh2KqfGP0IXpOA` |
| Update Contact Status in a Sequence | POST | `/api/v1/emailer_campaigns/remove_or_stop_contact_ids` | `conn_mod_def::GJz2By0T4OM::n_mYkNbbRjKYBKSXO67Zig` |

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deals | GET | `/api/v1/opportunities/search` | `conn_mod_def::GJz199glI3I::R98nmt_VTwOcMDFFWZM9Pg` |
| View a Deal | GET | `/opportunities/{{opportunityId}}` | `conn_mod_def::GJz1-UopLJg::_t41ZTs1SR69nVVgySt8DQ` |
| Create Deal | POST | `/api/v1/opportunities` | `conn_mod_def::GJz190eHuuE::GL5DqXmtRaOYWM-gjcvDMw` |
| Update a Deal | PATCH | `/opportunities/{{opportunityId}}` | `conn_mod_def::GJz1-MANZ58::RFZ_l5ZYS329V6tc9SlYBA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Enrich an Organization by Domain | GET | `/organizations/enrich` | `conn_mod_def::GJz1-vQqfEI::rFgxNc8wQFWyV5kX88UBpg` |
| Get Complete Organization Info | GET | `/organizations/{{id}}` | `conn_mod_def::GJz1_4R-H1E::mkjZTuSpQj2UeTG4XHzGhw` |
| Bulk Organization Enrichment | POST | `/api/v1/organizations/bulk_enrich` | `conn_mod_def::GJz1-cqFPTg::zjyuqfYsRWWN86YT9E1lQQ` |
| Search Organizations (Company Search) | POST | `/mixed_companies/search` | `conn_mod_def::GJz2AXYS8Hw::nYfwc352SyqMeSNf-v4kmQ` |

### PhoneCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Phone Calls | GET | `/phone_calls/search` | `conn_mod_def::GJz18YkkJNE::M9zWHDmNQnG286mP6sR-Nw` |
| Create Call Records | POST | `/api/v1/phone_calls` | `conn_mod_def::GJz18NN_VLE::0lyEfAnHRNKcVO0rXwboFw` |
| Update a Call Record | PUT | `/phone_calls/{{id}}` | `conn_mod_def::GJz18kiyMJU::fhFTwLMuQ5uzuMS1dp3dbg` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk People Enrichment | POST | `/api/v1/people/bulk_match` | `conn_mod_def::GJz1-mOA1C0::XgK27YgKSKaEnZj_1TIPMg` |
| Enrich a Person (People Enrichment) | POST | `/api/v1/people/match` | `conn_mod_def::GJz1-5Pqiyg::USYoxmHNRM2-z8l50tKI_w` |
| People API Search (Net-New People Prospecting) | POST | `/api/v1/mixed_people/api_search` | `conn_mod_def::GJz2AmtsIH8::-KnLbk4nSHurCgEJXsodwA` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Create Tasks | POST | `/api/v1/tasks/bulk_create` | `conn_mod_def::GJz2B7v9zxE::pXhwSRhBTQGyzVIcPEkVDQ` |
| Create a Task | POST | `/api/v1/tasks` | `conn_mod_def::GJz2CCrow9U::TGx2GiD5Sky06_7b6RdTRw` |
| Search for Tasks | POST | `/api/v1/tasks/search` | `conn_mod_def::GJz2CLiwP_c::GRQySUEsRaKzCNgUXEYfYg` |

### Fields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fields in an Apollo Account | GET | `/api/v1/fields` | `conn_mod_def::GJz2PQ_d0UY::7vxfP5zqSGuz4V5NrgNW5w` |
| Create a Custom Field | POST | `/api/v1/fields` | `conn_mod_def::GJz1_AZMmkg::OEbbCmKHR5WWmtJsPI7uCg` |

### EmailerMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Email Stats for an Outreach Email | GET | `/emailer_messages/{{id}}/activities` | `conn_mod_def::GJz2BLnrCB8::vF1TyxaBQ5myM57SgGuEQw` |
| Search Outreach Emails | GET | `/api/v1/emailer_messages/search` | `conn_mod_def::GJz2BiEEzJM::Y5joB8UsQTOeDh1CR3rlPQ` |

### AccountStages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Stages | GET | `/api/v1/account_stages` | `conn_mod_def::GJz17OH1Ejw::5FIx4c77Rla0ZizWC6Cbng` |

### ContactStages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Contact Stages | GET | `/api/v1/contact_stages` | `conn_mod_def::GJz19GW61TE::bwcPpUM7Tt2aAVTnbSzu6g` |

### OpportunityStages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deal Stages | GET | `/api/v1/opportunity_stages` | `conn_mod_def::GJz1-Ej_fcg::7yJLozw3SZS5C-d-YUwJLg` |

### TypedCustomFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Custom Fields (Deprecated) | GET | `/api/v1/typed_custom_fields` | `conn_mod_def::GJz1_HOOnYE::pedD6uHST0KelyQArgDpEw` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Lists | GET | `/api/v1/labels` | `conn_mod_def::GJz1_NieUjo::Tm7g46eBQxWNMASJ19Ljwg` |

### EmailAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Accounts | GET | `/api/v1/email_accounts` | `conn_mod_def::GJz1_UrYUhs::XdIVhsobTj-KkwvfkNcH5Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users (Teammates) | GET | `/api/v1/users/search` | `conn_mod_def::GJz1_pZ0XLg::NPEBl6fhT3Sm7HFPEgavsw` |

### UsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| View API Usage Stats and Rate Limits | POST | `/api/v1/usage_stats/api_usage_stats` | `conn_mod_def::GJz1_w5eKwQ::xGHYTAZGQhukuTqPhYsqdw` |

### NewsArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Search News Articles for Companies | POST | `/news_articles/search` | `conn_mod_def::GJz2ABKNKRA::KYut8dhiQym3KK_YqchgsA` |

### OrganizationJobPostings

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Job Postings | GET | `/organizations/{{organizationId}}/job_postings` | `conn_mod_def::GJz2AJUZ-YI::SBuO9bAfSQqjm4l12tdvAQ` |

## When a call fails

The error comes from Apollo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/apollo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
