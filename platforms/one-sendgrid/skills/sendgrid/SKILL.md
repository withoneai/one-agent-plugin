---
name: sendgrid
description: SendGrid is a cloud-based email service that enables businesses to send transactional and marketing emails at scale. It offers email APIs, analytics, and deliverability support. Read and write SendGrid data through One: ippools, mailsettings, marketingsegments, marketingcontacts, authenticateddomains, templates and more, 389 actions with real parameter documentation. Use whenever the user asks to look something up in SendGrid, create or update a record there, or build code against the SendGrid API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sendgrid
  generated-from: one-knowledge-base
---

# SendGrid through One

SendGrid is a cloud-based email service that enables businesses to send transactional and marketing emails at scale. It offers email APIs, analytics, and deliverability support.

One exposes SendGrid through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sendgrid` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SendGrid is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SendGrid account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### IpPools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Pool’s Details | GET | `/v3/send_ips/pools/{{poolid}}` | `conn_mod_def::GJ6YkkKzDE0::jS80uZYQTEWSiJiMCezdeg` |
| List IP Addresses in an IP Pool | GET | `/ips/pools/{{poolName}}` | `conn_mod_def::GJ6YlJWR26s::gdMAeVH8T-mXgvaP-RQL7A` |
| List IP Pools | GET | `/ips/pools` | `conn_mod_def::GJ6YlJMFoLM::H77TPsIlQEKNLRmzNb2e9g` |
| List IP Pools (with Associated IPs Preview) | GET | `/send_ips/pools` | `conn_mod_def::GJ6Ykks50C4::kv1-FfUtSOypAfCg5AYxYA` |
| Add a Batch of IPs to an IP Pool | POST | `/send_ips/pools/{{poolid}}/ips:batchAdd` | `conn_mod_def::GJ6YkNxEl30::F0XF-PdbRMKfpRAwDJU_aA` |
| Add an IP Address to an IP Pool | POST | `/ips/pools/{{poolName}}/ips` | `conn_mod_def::GJ6Yk9dRW0E::vi-ykxJHSp2Bw1piP1eqzw` |
| Create an IP Pool | POST | `/send_ips/pools` | `conn_mod_def::GJ6YkONRUkc::QZFLehSLS7S80sZwZsFhFQ` |
| Create an IP Pool | POST | `/ips/pools` | `conn_mod_def::GJ6Yk8S-nHE::a8-hn5FPQqOh719ecpQtfA` |
| Delete a Batch of IPs from an IP Pool | POST | `/v3/send_ips/pools/{{poolid}}/ips:batchDelete` | `conn_mod_def::GJ6YkVb2cMw::WWX1uyOiQD-J0Cz5AyrBKw` |
| Delete an IP Pool | DELETE | `/v3/ips/pools/{{poolName}}` | `conn_mod_def::GJ6Yk9O6uDQ::fza6XrhkT3id5_DL5WKY1g` |
| Remove an IP Address from an IP Pool | DELETE | `/v3/ips/pools/{{poolName}}/ips/{{ip}}` | `conn_mod_def::GJ6Yk8tETaA::JOUFI7ZQQIW1G0AWgkUlyQ` |
| Rename an IP Pool | PUT | `/v3/ips/pools/{{poolName}}` | `conn_mod_def::GJ6YlGXYyeY::24NJHI3lRaWT4ynjVShSUw` |

1 more IpPools actions are available through search.

### MailSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Mail Settings | GET | `/mail_settings` | `conn_mod_def::GJ6YmiDw1IQ::4d5IZLiaSH2QPeUy5TSX-g` |
| Retrieve Address Whitelist Mail Settings | GET | `/mail_settings/address_whitelist` | `conn_mod_def::GJ6Ymr4xtwk::nvmDzq8-RuGQj98NBiEyNw` |
| Retrieve Bounce Purge Mail Settings | GET | `/mail_settings/bounce_purge` | `conn_mod_def::GJ6YmmjYdAU::0hBcdWvKTEu_EYWMlcGZvA` |
| Retrieve Forward Bounce Mail Settings | GET | `/mail_settings/forward_bounce` | `conn_mod_def::GJ6Ymi_84PE::ULgu2pFoQ6uXMlGriacdZQ` |
| Retrieve Forward Spam Mail Settings | GET | `/mail_settings/forward_spam` | `conn_mod_def::GJ6YmzFOpWg::fDQZ1lBdSmGl0HSIR_bEaQ` |
| Retrieve Legacy Template Mail Settings | GET | `/mail_settings/template` | `conn_mod_def::GJ6Ym0Xy0_s::MaYtiBoITYW4mqZ_JA8wtg` |
| Update Address Whitelist Mail Settings | PATCH | `/mail_settings/address_whitelist` | `conn_mod_def::GJ6YnA5UUCI::_vUi-_jjSjqEGOQa03Wj4g` |
| Update Bounce Purge Mail Settings | PATCH | `/mail_settings/bounce_purge` | `conn_mod_def::GJ6YmycQ5WA::VuSzAdTaTq2095n7Q6qlxQ` |
| Update Footer Mail Settings | PATCH | `/mail_settings/footer` | `conn_mod_def::GJ6Ym1JTUKo::z3UFuZSXR_2A_B4N7tYUOg` |
| Update Forward Bounce Mail Settings | PATCH | `/mail_settings/forward_bounce` | `conn_mod_def::GJ6YnMm_KN0::r1MWx9UkSM6pmS1H-M3tlw` |
| Update Forward Spam Mail Settings | PATCH | `/mail_settings/forward_spam` | `conn_mod_def::GJ6YnJJqq2w::0LGm3BnURquXACA3mx2jqw` |
| Update Legacy Template Mail Settings | PATCH | `/mail_settings/template` | `conn_mod_def::GJ6YnNDhYbY::3WUHB6BSTGKN9ej0_eAiXw` |

### MarketingSegments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Marketing Segment by ID | GET | `/marketing/segments/{{segmentId}}` | `conn_mod_def::GJ6Yoqg7tvA::y_XtcbDDT-e6zVEShkNFew` |
| Get a Marketing Segment by ID (v2) | GET | `/v3/marketing/segments/2.0/{{segmentId}}` | `conn_mod_def::GJ6Yo2LoFqU::dtjF468UTN-vsbxhkq6TEQ` |
| List Marketing Segments | GET | `/marketing/segments` | `conn_mod_def::GJ6YotmC9tA::My9T1y50ShSNYPRnaoAoPQ` |
| List Marketing Segments | GET | `/marketing/segments/2.0` | `conn_mod_def::GJ6YorfVQgA::lIo8Q_BmTaOAUjmDQbxqUg` |
| Create a Marketing Segment (v2) | POST | `/marketing/segments/2.0` | `conn_mod_def::GJ6Yor3urxA::4ImaduHpSg2ZIbKjCwvsew` |
| Delete a Marketing Segment | DELETE | `/v3/marketing/segments/2.0/{{segmentId}}` | `conn_mod_def::GJ6YoqH7DyI::hTwrluQZQvOl6Lp3TegtaQ` |
| Delete a Marketing Segment | DELETE | `/v3/marketing/segments/{{segmentId}}` | `conn_mod_def::GJ6Yog9dz6Q::ZnIdLwuUQCiqLPt5pqLNCA` |
| Manually Refresh a Marketing Segment | POST | `/v3/marketing/segments/2.0/refresh/{{segmentId}}` | `conn_mod_def::GJ6Yo7QZ0RQ::g2EsbaIZQL6ocOx_Sz41eg` |
| Update a Marketing Segment | PATCH | `/marketing/segments/2.0/{{segmentId}}` | `conn_mod_def::GJ6Yo27oqw8::Yg1-_m6tS6qiZzOCPLJR7w` |

### MarketingContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Marketing Contact by ID | GET | `/v3/marketing/contacts/{{id}}` | `conn_mod_def::GJ6YgpNWGjs::T2hU_zd0TBG2y8ZqWcTWFg` |
| Get Total Contact Count | GET | `/marketing/contacts/count` | `conn_mod_def::GJ6Yg-USg6s::zuM-sECTQge4UIAXgEI77A` |
| Add or Update Marketing Contacts (Upsert) | PUT | `/marketing/contacts` | `conn_mod_def::GJ6YgdWtXE8::7r9QmgkBRiGAExHQd4uk0Q` |
| Delete a Contact’s Identifier | DELETE | `/marketing/contacts/{{contactId}}/identifiers` | `conn_mod_def::GJ6YgmAKgIY::BGd5nVacSdWTN71T1VSBZA` |
| Delete Marketing Contacts | DELETE | `/marketing/contacts` | `conn_mod_def::GJ6Ygl4b3ig::eeHaW8z4Tyqc0GXRM9VYfA` |
| Get Batched Contacts by IDs | POST | `/marketing/contacts/batch` | `conn_mod_def::GJ6Ygw4I-Xo::mzhDaCQMSkmF4rfPFNXsVA` |
| Get Contacts by Identifier Type and Values | POST | `/v3/marketing/contacts/search/identifiers/{{identifierType}}` | `conn_mod_def::GJ6YgxeZ8Qw::bYoX431MT6m6zVZehIuqog` |
| Get Marketing Contacts by Email Addresses | POST | `/marketing/contacts/search/emails` | `conn_mod_def::GJ6YgyY7O4U::e91bFdUKRhWBST4749Mb7A` |
| Search Marketing Contacts | POST | `/marketing/contacts/search` | `conn_mod_def::GJ6YhD76TR4::EXo8mI7jQLGkABDA6v5Sqw` |

### AuthenticatedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Default Authenticated Domain | GET | `/whitelabel/domains/default` | `conn_mod_def::GJ6YiLPRJbA::CLRvgruqS-q_5T8OWABqqg` |
| List Authenticated Domains | GET | `/whitelabel/domains` | `conn_mod_def::GJ6YiMpxTY4::TEz-NVKrT82nJ16LN4iXxA` |
| Retrieve an Authenticated Domain | GET | `/v3/whitelabel/domains/{{domainId}}` | `conn_mod_def::GJ6YicEERv0::pwmabkcES_i23i9-0PN1Lg` |
| Add an IP to an Authenticated Domain | POST | `/whitelabel/domains/{{id}}/ips` | `conn_mod_def::GJ6YhxBK7_c::vjnfeGdzRlinoSdxJY7Mpg` |
| Delete an Authenticated Domain | DELETE | `/v3/whitelabel/domains/{{domainId}}` | `conn_mod_def::GJ6Yh8eMIus::4CPc5hynRsiOfo5kAnI54w` |
| Disassociate a Subuser from an Authenticated Domain | DELETE | `/v3/whitelabel/domains/{{domainId}}/subuser` | `conn_mod_def::GJ6YiDLZfko::NRqXZOFJRc2ddNejvYLj2Q` |
| Remove an IP from an Authenticated Domain | DELETE | `/v3/whitelabel/domains/{{id}}/ips/{{ip}}` | `conn_mod_def::GJ6YiMQVogw::PkuMwzXlS764fvtQmmeNuQ` |
| Update an Authenticated Domain | PATCH | `/v3/whitelabel/domains/{{domainId}}` | `conn_mod_def::GJ6YidSknbk::DS8MSvCwRzyU0HFwduuWsg` |
| Validate an Authenticated Domain | POST | `/v3/whitelabel/domains/{{id}}/validate` | `conn_mod_def::GJ6YiX4p3kU::zdo9MxbnTPK2NX9jUOn7nQ` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transactional Templates (Paged) | GET | `/templates` | `conn_mod_def::GJ6Ys7PJQjs::p53LakQKTs2E0hRVT72GPA` |
| Retrieve a Transactional Template | GET | `/v3/templates/{{templateId}}` | `conn_mod_def::GJ6Ysus1gmM::nDYhWo6jSaCWfwX9h8hLHA` |
| Activate a Transactional Template Version | POST | `/v3/templates/{{templateId}}/versions/{{versionId}}/activate` | `conn_mod_def::GJ6Ys7IBNFI::DFwppuL8SZSyxP6KOVly5Q` |
| Create a Transactional Template | POST | `/templates` | `conn_mod_def::GJ6Ysy5zt5w::TQRLcbM9TLiHEC8SPECHuA` |
| Delete a Transactional Template | DELETE | `/templates/{{templateId}}` | `conn_mod_def::GJ6YsudLhcw::bshwc462Sw23bEFwrZN4Yg` |
| Delete a Transactional Template Version | DELETE | `/templates/{{templateId}}/versions/{{versionId}}` | `conn_mod_def::GJ6Ys6bjDG8::u4pdJ2ntS8-Xb7vbbFOidw` |
| Duplicate a Transactional Template | POST | `/v3/templates/{{templateId}}` | `conn_mod_def::GJ6Ysxy8Rfk::wMI8cWjYQDKJRt8P-qQdIQ` |
| Update a Transactional Template’s Name | PATCH | `/v3/templates/{{templateId}}` | `conn_mod_def::GJ6YstkRALM::NMNDir7QTMiISfhU8EdYnQ` |

### Designs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design | GET | `/designs/{{id}}` | `conn_mod_def::GJ6YhkpkFGo::4rQMki4GS7Odd7iWqlwlfA` |
| Get a Pre-built Design | GET | `/designs/pre-builts/{{id}}` | `conn_mod_def::GJ6Yhg609h4::2Ngvpb99ToWar8eRdu07Tw` |
| List Designs | GET | `/designs` | `conn_mod_def::GJ6YhgUtY8w::TmkihTc7Siul-0esVv5e4Q` |
| List SendGrid Pre-built Designs | GET | `/designs/pre-builts` | `conn_mod_def::GJ6Yhzp5Id0::UfQzfbhXSSad_aHfrQxw3Q` |
| Create a Design | POST | `/designs` | `conn_mod_def::GJ6YhX519cg::nwLL0i_rSzq88GK2WhTiOQ` |
| Delete a Design | DELETE | `/v3/designs/{{id}}` | `conn_mod_def::GJ6YhXByW7Q::NP83xh3RQB2fs4obbTJCdg` |
| Duplicate a Design | POST | `/v3/designs/{{id}}` | `conn_mod_def::GJ6YhgX0mzU::0f4bqEN2TfCs6p4QwDxHIw` |
| Update a Design | PATCH | `/designs/{{id}}` | `conn_mod_def::GJ6Yh1foTic::dk1iwGh9Q92a6ww7YO4Ihw` |

### Teammates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Teammate’s Subuser Access | GET | `/v3/teammates/{{teammateName}}/subuser_access` | `conn_mod_def::GJ6YsOkPwiA::M_5hzNyORjufrMK8Iq44cg` |
| List Pending Teammate Invitations | GET | `/teammates/pending` | `conn_mod_def::GJ6Ysg1SiT4::sw0pCOuQRleDpmcUNWN7gA` |
| List Teammates | GET | `/teammates` | `conn_mod_def::GJ6YsltEfA4::P551UAQXQ6WhqseB2-J8LQ` |
| Retrieve a Specific Teammate by Username | GET | `/v3/teammates/{{username}}` | `conn_mod_def::GJ6YsgGGFYg::LY6GhnPETG6uoXqGJTYq6g` |
| Delete a Teammate | DELETE | `/v3/teammates/{{username}}` | `conn_mod_def::GJ6YsMNicUg::C607bHCTQBCGO22QvkRRBg` |
| Invite a Teammate | POST | `/teammates` | `conn_mod_def::GJ6YsSlLX3g::LrEQWeL1TWiuHqA66uWXwA` |
| Resend a Teammate Invite | POST | `/v3/teammates/pending/{{token}}/resend` | `conn_mod_def::GJ6YsgLHLZ4::YZyeZItPTX6ZEWNikVQ9lg` |
| Update a Teammate’s Permissions | PATCH | `/v3/teammates/{{username}}` | `conn_mod_def::GJ6Ysi7etiY::yGmSWYFIR8KYVdL-KHZ0gg` |

### Subusers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Subusers | GET | `/subusers` | `conn_mod_def::GJ6Yr08-t0U::aZGFlfBhQLK-AcbETYkl6g` |
| Create a Subuser | POST | `/subusers` | `conn_mod_def::GJ6Yrltwb7M::dbejX3K4RLWBm-JybaWmiA` |
| Delete a Subuser | DELETE | `/v3/subusers/{{subuserName}}` | `conn_mod_def::GJ6Yrk6KmeE::bnT-sUGAR_adclNPjQN5nw` |
| Enable or Disable a Subuser | PATCH | `/subusers/{{subuserName}}` | `conn_mod_def::GJ6Yrk7rkDA::p2KJTR_CT7eQcmUMAHEnvA` |
| Update a Subuser's Assigned IPs | PUT | `/v3/subusers/{{subuserName}}/ips` | `conn_mod_def::GJ6YrtTp8A0::IEhJsy7jQ_GELHbLrWy3mA` |
| Update a Subuser’s Credits | PUT | `/v3/subusers/{{subuserName}}/credits` | `conn_mod_def::GJ6YrtbVSQE::uQVBjIj3QqKjuEWUZfEJ_Q` |
| Update a Subuser’s Remaining Credits | PATCH | `/v3/subusers/{{subuserName}}/credits/remaining` | `conn_mod_def::GJ6YrueMiGI::9xlr56ocSMeGlgRNJDbjQQ` |
| Update a Subuser’s Website Access | PATCH | `/subusers/{{subuserName}}/website_access` | `conn_mod_def::GJ6YrlQ8-sw::CTIFQN17SdKcKepV7mwigg` |

### MarketingLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Marketing List by ID | GET | `/marketing/lists/{{id}}` | `conn_mod_def::GJ6Yl8vYCsI::zyhCSafHTT6v-MKwDYjl7Q` |
| Get a Marketing List’s Contact Count | GET | `/v3/marketing/lists/{{id}}/contacts/count` | `conn_mod_def::GJ6YmNzxoTo::rDoA6HWwRk-yVZ6GComPjw` |
| List Marketing Lists | GET | `/marketing/lists` | `conn_mod_def::GJ6Yl8UZ2Ww::8TTjiR6XR8-cPGdgAu65Tg` |
| Create a Marketing Contacts List | POST | `/marketing/lists` | `conn_mod_def::GJ6YlzqplQU::efPaPGu0TGirFyU6fkrZVg` |
| Delete a Marketing List | DELETE | `/v3/marketing/lists/{{id}}` | `conn_mod_def::GJ6Yl8l6bf8::nRZRww6wS4iUjDuHOmENPw` |
| Remove Contacts from a Marketing List | DELETE | `/v3/marketing/lists/{{id}}/contacts` | `conn_mod_def::GJ6YmH5u9D4::foN6vpWeS4-J5XZxiMjxvg` |
| Update a Marketing List | PATCH | `/marketing/lists/{{id}}` | `conn_mod_def::GJ6YmVQOxY4::BQ6A0854RIWRrWqKabnt1A` |

This lists 90 of 389 actions. For anything not here, call `search_one_platform_actions` with platform `sendgrid`. The full catalog is at https://www.withone.ai/knowledge/sendgrid.

## When a call fails

The error comes from SendGrid, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sendgrid

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
