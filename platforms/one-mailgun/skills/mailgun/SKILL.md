---
name: mailgun
description: Mailgun is a powerful email delivery service designed for developers and businesses to send, receive, and track transactional and marketing emails with high reliability and scalability. Read and write Mailgun data through One: domains, templates, ippools, subaccounts, templateversions, ips and more, 254 actions with real parameter documentation. Use whenever the user asks to look something up in Mailgun, create or update a record there, or build code against the Mailgun API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mailgun
  generated-from: one-knowledge-base
---

# Mailgun through One

Mailgun is a powerful email delivery service designed for developers and businesses to send, receive, and track transactional and marketing emails with high reliability and scalability.

One exposes Mailgun through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mailgun` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mailgun is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mailgun account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain's Sending Queues Status | GET | `/v3/domains/{{name}}/sending_queues` | `conn_mod_def::GJ42ul-SL7A::f0ogbonKTRWF1Gix20kX0A` |
| Get a Domain's Tag Limits | GET | `/v3/domains/{{domain}}/limits/tag` | `conn_mod_def::GJ42wCiM8Vk::wGSQjlswTnO4a8tkGEeWqQ` |
| Get a Domain’s Tracking Settings | GET | `/v3/domains/{{name}}/tracking` | `conn_mod_def::GJ42rgp44zo::1zvVmOe_SAWJH0xv-4ujfg` |
| Get Domain Details | GET | `/v4/domains/{{name}}` | `conn_mod_def::GJ42r7uCpFc::v8GXSgyFS06okfRN0QAXgQ` |
| List a Domain’s Supported Tag Devices | GET | `/v3/domains/{{domain}}/tag/devices` | `conn_mod_def::GJ42u4mOkhE::bD5xyCPPTPe0rYoed0uQ5A` |
| List Assignable Domains (Not Enrolled in Dynamic IP Pools) | GET | `/v3/domains/dynamic_pools/assignable` | `conn_mod_def::GJ42sUJ_Css::OBD9fStGQFyWoPJnPQbgtA` |
| List Domains | GET | `/v4/domains` | `conn_mod_def::GJ42sBCW2Bo::3NT45k2wSh2Z05mTXQy3fg` |
| List Supported Country Codes for a Domain | GET | `/v3/domains/{{domain}}/tag/countries` | `conn_mod_def::GJ42u4u9Bcs::EYdr5xx0Qwu-csGPATQ7GQ` |
| Activate a Domain’s DKIM Key | PUT | `/v4/domains/{{authorityName}}/keys/{{selector}}/activate` | `conn_mod_def::GJ42qtX04vg::SkQ8Y7HUTlaKFZmg0C0BzA` |
| Create a Domain | POST | `/v4/domains` | `conn_mod_def::GJ42r7Zci1w::o4BSH3KzRcu45WryiLRWHg` |
| Delete a Domain | DELETE | `/v3/domains/{{name}}` | `conn_mod_def::GJ42r7h79L8::eu3Gx43eRNOATBNr1vePvA` |
| Delete All SMTP Credentials for a Domain | DELETE | `/v3/domains/{{domainName}}/credentials` | `conn_mod_def::GJ42qRtoWWA::AA8t11_hRJu7DQ7F8VSgGw` |

10 more Domains actions are available through search.

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain’s Template | GET | `/v3/{{domainName}}/templates/{{templateName}}` | `conn_mod_def::GJ42rThzaIk::Zp1wrIR_SDqRk-KhVYK9CA` |
| Get an Account-Level Template | GET | `/v4/templates/{{templateName}}` | `conn_mod_def::GJ42ouZP5mo::z9MiU4rEQu6Y6Hi1t0ymyQ` |
| List a Domain’s Templates | GET | `/v3/{{domainName}}/templates` | `conn_mod_def::GJ42rW2ghr8::ued6a0w1SCiBfF_ZBdCkyg` |
| List Account-Level Templates | GET | `/v4/templates` | `conn_mod_def::GJ42ojIKf-o::TOAfnEcGSkKK0Q1Vnz7Ljg` |
| Copy a Domain Template to Other Accounts | PUT | `/v3/{{domainName}}/templates/{{templateName}}/copy` | `conn_mod_def::GJ42rDNdq34::FzajvMTuQByoGfZ0_Iax-w` |
| Copy a Template | PUT | `/v4/templates/{{templateName}}/copy` | `conn_mod_def::GJ42oXNx0As::tnSYASWjRaG4q4oA2fyc9A` |
| Create a Domain Template | POST | `/v3/{{domainName}}/templates` | `conn_mod_def::GJ42rCs2rSQ::iKdOtYOVSkSQr2GJStTsog` |
| Create an Account-Level Template | POST | `/v4/templates` | `conn_mod_def::GJ42oXQwH_4::7g6hPGRhSZq5o-w3a_ROxQ` |
| Delete a Domain’s Template | DELETE | `/v3/{{domainName}}/templates/{{templateName}}` | `conn_mod_def::GJ42rKATOZY::zFvp2QqWQgeFhvkAhOH6YQ` |
| Delete All Account-Level Templates | DELETE | `/v4/templates` | `conn_mod_def::GJ42oinvWzY::p9SSzH1gTU-rFKFh9yYqfw` |
| Delete All Templates for a Domain | DELETE | `/v3/{{domainName}}/templates` | `conn_mod_def::GJ42rKXjNi0::hKIEWXGZR6a9lDi2VmncoA` |
| Delete an Account-Level Template | DELETE | `/v4/templates/{{templateName}}` | `conn_mod_def::GJ42ofvFh5M::Bg4bUJcbQUqiLl68HLidag` |

4 more Templates actions are available through search.

### IpPools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dedicated IP Pool’s (DIPP) Details | GET | `/v3/ip_pools/{{poolId}}` | `conn_mod_def::GJ42tUJY-tQ::5aGco6FbTzmCKfw3DqVsnA` |
| List Dedicated IP Pools | GET | `/v3/ip_pools` | `conn_mod_def::GJ42tW2Do2c::h1gZt945RYuOo1TAM3PtHw` |
| List Domains Linked to a Dedicated IP Pool (DIPP) | GET | `/v3/ip_pools/{{poolId}}/domains` | `conn_mod_def::GJ42tVCSIoM::Wm2A3uh9QPGIdRQUYr1KgQ` |
| Add a New Dedicated IP Pool (DIPP) to the Account | POST | `/v3/ip_pools` | `conn_mod_def::GJ42tIsqQF4::jmUJMG_KR5SdJ5c_a7bNZA` |
| Add an IP to a Dedicated IP Pool (DIPP) | PUT | `/v3/ip_pools/{{poolId}}/ips/{{ip}}` | `conn_mod_def::GJ42tNNoRVc::LvYgr9PgQNaABzwdGlDz8Q` |
| Add Multiple IPs to a Dedicated IP Pool (DIPP) | POST | `/v3/ip_pools/{{poolId}}/ips.json` | `conn_mod_def::GJ42tJd9rBw::OU8PenXcRB2nsBp5Lssb7A` |
| Delegate a Dedicated IP Pool (DIPP) to a Subaccount | PUT | `/v3/ip_pools/{{poolId}}/delegate` | `conn_mod_def::GJ42tJT0z18::fFkQeSL_TzqArrvyVsAv3A` |
| Delegate a DIPP to a Subaccount | PUT | `/v5/accounts/subaccounts/{{subaccountId}}/ip_pool` | `conn_mod_def::GJ42u511bi0::chU8S7H_RlKgf6_7aHEYxQ` |
| Delete a Dedicated IP Pool (DIPP) | DELETE | `/v3/ip_pools/{{poolId}}` | `conn_mod_def::GJ42tU2Ujus::Y4jeCnkESAuE5QAuFqvtBg` |
| Edit a Dedicated IP Pool (DIPP) | PATCH | `/v3/ip_pools/{{poolId}}` | `conn_mod_def::GJ42tUpq35s::z7Jf3971QLqd0AiZ5x_PpA` |
| Remove an IP from a Dedicated IP Pool (DIPP) | DELETE | `/v3/ip_pools/{{poolId}}/ips/{{ip}}` | `conn_mod_def::GJ42tdxIqsQ::j-NWp2krTc2JUxNhi2HgwQ` |
| Revoke a Dedicated IP Pool Delegation from a Subaccount | DELETE | `/v3/ip_pools/{{poolId}}/delegate` | `conn_mod_def::GJ42tfGewWk::c9k4Wb5pSruWEfXj0FtO3A` |

### Subaccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Subaccount | GET | `/v5/accounts/subaccounts/{{subaccountId}}` | `conn_mod_def::GJ42vuJuPUA::PPeBhQZLSb6vce9oyMKt6Q` |
| Get a Subaccount’s Custom Monthly Sending Limit | GET | `/v5/accounts/subaccounts/{{subaccountId}}/limit/custom/monthly` | `conn_mod_def::GJ42v7INHWQ::9S1Y3pHERu-jEBtfPhmFNA` |
| List All Subaccounts | GET | `/v5/accounts/subaccounts` | `conn_mod_def::GJ42v6EomK0::QyipLrmkTLOiYbqjnMJgDw` |
| Create a Subaccount | POST | `/v5/accounts/subaccounts` | `conn_mod_def::GJ42vjL9gRM::iKbW9fVxQMaKXfUtQHS-Sw` |
| Delete a Subaccount | DELETE | `/v5/accounts/subaccounts` | `conn_mod_def::GJ42vvDsUh0::EBUTrqr2TqOSyqG8Y-Ab2Q` |
| Delete a Subaccount’s Custom Monthly Sending Limit | DELETE | `/v5/accounts/subaccounts/{{subaccountId}}/limit/custom/monthly` | `conn_mod_def::GJ42vuX7Ls4::npASpuMaRHmdhHI6IGoagQ` |
| Disable a Subaccount | POST | `/v5/accounts/subaccounts/{{subaccountId}}/disable` | `conn_mod_def::GJ42vvFts1M::6bxLd7o4SJ2XWxPwZP5Q9g` |
| Enable a Subaccount | POST | `/v5/accounts/subaccounts/{{subaccountId}}/enable` | `conn_mod_def::GJ42vyBo9Ks::PTJAA1rTTtmmEwj5BJ-f9g` |
| Set a Subaccount’s Custom Monthly Sending Limit | PUT | `/v5/accounts/subaccounts/{{subaccountId}}/limit/custom/monthly` | `conn_mod_def::GJ42v5lD-E8::68LLe1muTpSdjmtyGvR9Pw` |

### TemplateVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template Version (Domain → Template → Version) | GET | `/v3/{{domainName}}/templates/{{templateName}}/versions/{{versionName}}` | `conn_mod_def::GJ42rLBZY_0::GH3L-QKrTbG5hzlR6hdTuw` |
| Get an Account-Level Template Version | GET | `/v4/templates/{{templateName}}/versions/{{versionName}}` | `conn_mod_def::GJ42oqO0sGc::CPSLERp1SyOWIwuCh1TEVQ` |
| List an Account-Level Template’s Versions | GET | `/v4/templates/{{templateName}}/versions` | `conn_mod_def::GJ42otmeaiY::x1c65oleREetqxh_FpB1kA` |
| Copy a Template Version to a New Version (Domain Template) | PUT | `/v3/{{domainName}}/templates/{{templateName}}/versions/{{versionName}}/copy/{{newVersionName}}` | `conn_mod_def::GJ42rAn-BXI::n2vWbgX3QuO7uhT4Nu3jYw` |
| Copy an Account-Level Template Version | PUT | `/v4/templates/{{templateName}}/versions/{{versionName}}/copy/{{newVersionName}}` | `conn_mod_def::GJ42oYE9UCw::pVOYShXHS7mgIbIjenCOqw` |
| Create an Account-level Template Version | POST | `/v4/templates/{{templateName}}/versions` | `conn_mod_def::GJ42ogM8i4I::TcSc48XwSQGRRjiXWh-NOw` |
| Delete a Template Version for a Domain | DELETE | `/v3/{{domainName}}/templates/{{templateName}}/versions/{{versionName}}` | `conn_mod_def::GJ42rKxria0::G13LrBTsTYKrdHL1DDWEug` |
| Delete an Account-level Template Version | DELETE | `/v4/templates/{{templateName}}/versions/{{versionName}}` | `conn_mod_def::GJ42ogTbQRA::LjOVgVpVSY28lmhh3IjEAQ` |
| Update an Account Template Version | PUT | `/v4/templates/{{templateName}}/versions/{{versionName}}` | `conn_mod_def::GJ42o2QfmSQ::4ESDhJCOSHSgml-K3bC1DQ` |

### Ips

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account IP Details | GET | `/v3/ips/{{ip}}` | `conn_mod_def::GJ42tsbPE0k::US6RhjbpQK6pusPpoBEA2A` |
| Get IP Request Allowance (Backwards Compatible) | GET | `/v3/ips/request/new` | `conn_mod_def::GJ42t4qVNA4::OZnS0MoIT56m5pcKDZNBZQ` |
| List Account IPs | GET | `/v3/ips` | `conn_mod_def::GJ42ttIrkow::8sHdXoSoS2-RgzFWdmv_Bw` |
| List Account IPs (Detailed View) | GET | `/v3/ips/details/all` | `conn_mod_def::GJ42twLOqYs::mIuTqg6uQ3-MwMy5Or5dDg` |
| Assign an IP to All Account Domains | POST | `/v3/ips/{{ip}}/domains` | `conn_mod_def::GJ42tl3mWC8::bEdOF4aRQMawRZO2IgNJZQ` |
| Place an IP Address into a Dedicated IP Band | POST | `/v3/ips/{{addr}}/ip_band` | `conn_mod_def::GJ42ttG3fzY::sTXNI43KT82yGwBeAGyJRg` |
| Remove an IP from All Account Domains | DELETE | `/v3/ips/{{ip}}/domains` | `conn_mod_def::GJ42tuIId6I::sXqm4uUcQmCkp3w5GTUGMw` |
| Request a New Dedicated IP for the Account | POST | `/v3/ips/request/new` | `conn_mod_def::GJ42tdUsN8w::n_XhOct6QoWMPfNvTliODg` |

### MailingListMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Mailing List Member | GET | `/v3/lists/{{listAddress}}/members/{{memberAddress}}` | `conn_mod_def::GJ42ub1bTUs::r10iYFxiRcqEAnjYy5XEOA` |
| List a Mailing List’s Members (Paginated) | GET | `/v3/lists/{{listAddress}}/members/pages` | `conn_mod_def::GJ42ucp0e_E::oLpZMn7aRI2uu-zCpDWeAA` |
| List Members in a Mailing List | GET | `/v3/lists/{{listAddress}}/members` | `conn_mod_def::GJ42ufDQ3NA::qbrAF3-QS5eFn8HLDmiZfw` |
| Bulk Upload Members to a Mailing List (CSV) | POST | `/v3/lists/{{listAddress}}/members.csv` | `conn_mod_def::GJ42uJ5R_zA::KkaiXsuTQLKrfWDKB19gjQ` |
| Bulk Upload Members to a Mailing List (JSON) | POST | `/v3/lists/{{listAddress}}/members.json` | `conn_mod_def::GJ42uKhKfws::UzJWmVk-Qh619F97xYeBHw` |
| Create a Mailing List Member | POST | `/v3/lists/{{listAddress}}/members` | `conn_mod_def::GJ42uUHBKY0::vnQHK7qqTv-KPvvtx3Jh2w` |
| Delete a Mailing List Member | DELETE | `/v3/lists/{{listAddress}}/members/{{memberAddress}}` | `conn_mod_def::GJ42uTbVHCE::F6c62nUqTvudQMl7U-DqeQ` |
| Update a Mailing List Member (List Address + Member Address) | PUT | `/v3/lists/{{listAddress}}/members/{{memberAddress}}` | `conn_mod_def::GJ42upwf_78::aRkiYVQpSbWgm65ft0sZjg` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Custom Monthly Sending Limit | GET | `/v5/accounts/limit/custom/monthly` | `conn_mod_def::GJ42qg9hlHA::OHFR4Y8WSrGfyn48LgcMig` |
| Get an Account's Webhook HTTP Signing Key | GET | `/v5/accounts/http_signing_key` | `conn_mod_def::GJ42oMIlIo4::KtHH-GG5Qei9Cp0byEMD0g` |
| Create or Regenerate an Account Webhook Signing Key | POST | `/v5/accounts/http_signing_key` | `conn_mod_def::GJ42oOqrTis::-KOtg5HGS3WbWXka4Ma3bA` |
| Re-enable an Account Disabled for Custom Sending Limit | PUT | `/v5/accounts/limit/custom/enable` | `conn_mod_def::GJ42qhBAWos::SU6SOTb-RLGuoZRFvNm3bw` |
| Resend an Account Activation Email to the Account Owner | POST | `/v5/accounts/resend_activation_email` | `conn_mod_def::GJ42oX7vdw0::Xu309-0CS5aH9bax83yCqA` |
| Set a Custom Monthly Sending Limit for an Account | PUT | `/v5/accounts/limit/custom/monthly` | `conn_mod_def::GJ42qsEFA8k::RKFZSANVSPi3fjLZOhvEtA` |
| Update Account Settings | PUT | `/v5/accounts` | `conn_mod_def::GJ42oYtB54Y::u7rjACWERI-vHKPouvmYrw` |

### Unsubscribes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Domain’s Unsubscribes | GET | `/v3/{{domainName}}/unsubscribes` | `conn_mod_def::GJ42wfmI2_U::YSO1tt17RXGolSknPCeqbw` |
| Lookup an Unsubscribe Record for a Domain | GET | `/v3/{{domainName}}/unsubscribes/{{address}}` | `conn_mod_def::GJ42weRoQbA::la_AILosR7ihcCuoVOZsMQ` |
| Add Unsubscribes to a Domain | POST | `/v3/{{domainName}}/unsubscribes` | `conn_mod_def::GJ42wgiUqqU::TdfZT0MpSFmitFHeMfRBGQ` |
| Clear All Unsubscribes for a Domain | DELETE | `/v3/{{domainName}}/unsubscribes` | `conn_mod_def::GJ42wf3AooQ::lU1a1iqITImSmyR6hI95kA` |
| Import a Domain’s Unsubscribe List (CSV) | POST | `/v3/{{domainName}}/unsubscribes/import` | `conn_mod_def::GJ42wfS69RA::CY2ynOwuT7y6pODKbQST1Q` |
| Remove an Unsubscribe Address From a Domain | DELETE | `/v3/{{domainName}}/unsubscribes/{{address}}` | `conn_mod_def::GJ42woDBFS0::4NQMCB3LRKWbEHqlxoN1ew` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account-Level Webhook by ID | GET | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ42o1zn73w::eRfW9ZK7SSGYcstrqsEc1g` |
| List Account-Level Webhooks | GET | `/v1/webhooks` | `conn_mod_def::GJ42pCvu4Ic::vTJ5biqZTuCVrIBkuYKcYA` |
| Create an Account-Level Webhook | POST | `/v1/webhooks` | `conn_mod_def::GJ42o1yLL_U::cKoD2gy6SQ6LvjPlrQi_XA` |
| Delete Account-Level Webhooks | DELETE | `/v1/webhooks` | `conn_mod_def::GJ42o1oCRTI::ok8JIMW5QlSviqcf2e_oEw` |
| Delete an Account-level Webhook by ID | DELETE | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ42o4FLIMI::61uvWF0qTGG8PcTdulBXiw` |
| Update an Account-level Webhook | PUT | `/v1/webhooks/{{webhookId}}` | `conn_mod_def::GJ42pAUtyJ8::9xNxu09-QkmC8icBpm4mxQ` |

### Whitelists

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Domain’s Allowlist (Whitelist) Records | GET | `/v3/{{domainName}}/whitelists` | `conn_mod_def::GJ42pdYWX1Q::d2M31W5NSOOxBetDTCcqHA` |

5 more Whitelists actions are available through search.

This lists 90 of 254 actions. For anything not here, call `search_one_platform_actions` with platform `mailgun`. The full catalog is at https://www.withone.ai/knowledge/mailgun.

## When a call fails

The error comes from Mailgun, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mailgun

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
