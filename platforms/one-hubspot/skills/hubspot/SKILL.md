---
name: hubspot
description: HubSpot is a CRM platform with tools for marketing, sales, customer service, and content management. It helps businesses attract, engage, and delight customers throughout the buyer journey. Read and write HubSpot data through One: crmobjects, crmobjectassociations, marketingemails, blogposts, sitepages, landingpages and more, 1184 actions with real parameter documentation. Use whenever the user asks to look something up in HubSpot, create or update a record there, or build code against the HubSpot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hubspot
  generated-from: one-knowledge-base
---

# HubSpot through One

HubSpot is a CRM platform with tools for marketing, sales, customer service, and content management. It helps businesses attract, engage, and delight customers throughout the buyer journey.

One exposes HubSpot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hubspot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm HubSpot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real HubSpot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CrmObjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a CRM Object by Type and ID (2026-03) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}` | `conn_mod_def::GJ3lCMhErVc::vTKve_UJT0Gr6wTPLrHprA` |
| List CRM Objects (by `objectType`) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3k3aEXqeQ::-ZXqcU6gT6241cnq2vu1kg` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3kXX-ASbQ::7fKi28blT02SmGz13URexg` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3ktrZvrfo::9aa7pf6bRD2Fg8oqmRFZqQ` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3k5Q7EQDQ::RIfydVZcQhK4uFAJHBHbKQ` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3lCC1weIo::GSzuES4wRxOk1cT_BQ0njg` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3lEvKuEZE::-b4eTh3gTY2gzSB1n9b_Og` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3lOImBlRE::eXVJ_QVASje3chCAA5n7oQ` |
| List CRM Objects (by Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3lYwm_cmg::rBb1FB8ZR4OktLkCR7wkiA` |
| List CRM Objects (By Object Type) | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3krPTtt3g::5rwN_aWDQkiQL2M77vIYZg` |
| List CRM Objects (Carts) by Object Type | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3kKGL1xmE::BzDgzkA4Sl2HK39nMO0zzA` |
| List CRM Objects (Deals) by Object Type | GET | `/crm/objects/2026-03/{{objectType}}` | `conn_mod_def::GJ3kZwJB6ZM::EwizjHo3RHOfHbNXzQSw0A` |

266 more CrmObjects actions are available through search.

### CrmObjectAssociations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Object’s Associations to Another Object Type | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3lYmL4uDk::3c_eOeb_QnyjPRKNKEtlAg` |
| List Associations Between Two CRM Object Types | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3ke7HI9bs::fattKj5gTMWJJ0kxAGz_uw` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3kXM9dmkA::p3pkh4BiS8CplLSzlffwQg` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3lN9YqkHg::_XOKrnwpTzety_1TARRvoQ` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3klqJ57-M::UZ9BCn5ATuCHYf5IMyaCHg` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3k5F5gSMc::egEAgiMlTD6GyNZl02U8Vg` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3lEkDpu98::zTcLdtDLSyaei8BQUH4heg` |
| List Associations for a CRM Object (by Object Type and ID) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3ldaO5O48::jRqo-Q71QJG8ZhSqZ9wMAQ` |
| List Associations for a CRM Object (by Object Type, Object ID, and Target Object Type) | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3krFZvlFg::1dXGmdmgTxq8Afla6NHguQ` |
| List Associations for a CRM Object to Another Object Type | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3lCZIZeOo::a4fF9P6wTY-gWceCaQPuKA` |
| List Associations for a CRM Object to Another Object Type | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3ktgf2A30::tH4alMAJT-m1wMFono0kRA` |
| List Associations for a CRM Object to Another Object Type | GET | `/crm/objects/2026-03/{{objectType}}/{{objectId}}/associations/{{toObjectType}}` | `conn_mod_def::GJ3lWHHsfME::9ejvZZJASKmsljA5Rz5TtA` |

35 more CrmObjectAssociations actions are available through search.

### MarketingEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Marketing Email's Details | GET | `/marketing/v3/emails/{{emailId}}` | `conn_mod_def::GJ3lsuzs6HU::KecHXo6cS1iWbJdeSxMi-w` |
| Get a Marketing Email’s Details | GET | `/marketing/v3/emails/{{emailId}}` | `conn_mod_def::GJ3lqQ5FSkA::fru2I1eBSeGZc5TbNfkXkA` |
| Get a Marketing Email’s Draft Version | GET | `/marketing/v3/emails/{{emailId}}/draft` | `conn_mod_def::GJ3lsdtYgcY::9Aol8XJpThCp8WeF2j_HqQ` |
| Get a Marketing Email’s Draft Version | GET | `/marketing/v3/emails/{{emailId}}/draft` | `conn_mod_def::GJ3lp9G7maE::16fDwzTvTaK5mJLJzP-hKA` |
| Get an A/B Marketing Email’s Variation | GET | `/marketing/v3/emails/{{emailId}}/ab-test/get-variation` | `conn_mod_def::GJ3ls75sbAA::EymNUnU7RCaXlGGo7VhI8w` |
| Get an A/B Marketing Email’s Variation | GET | `/marketing/v3/emails/{{emailId}}/ab-test/get-variation` | `conn_mod_def::GJ3lqciZ4Bs::80E7Pcu5TFez_hZ1panFcw` |
| List Marketing Emails | GET | `/marketing/v3/emails/` | `conn_mod_def::GJ3lp1UIWeM::e0IxTBoNT72-3IMmwVIsCA` |
| List Marketing Emails | GET | `/marketing/v3/emails/` | `conn_mod_def::GJ3lsWpbSWo::LeaOPhcrSMapf6eg1zBe0w` |
| Clone a Marketing Email | POST | `/marketing/v3/emails/clone` | `conn_mod_def::GJ3lopv3c6A::YTE2AjJuQ5G5RFFEZ8Lrxw` |
| Clone a Marketing Email | POST | `/marketing/v3/emails/clone` | `conn_mod_def::GJ3lrXRbrUQ::3nupMck_QmuuPdjzDnGk3Q` |
| Create a Marketing Email | POST | `/marketing/v3/emails/` | `conn_mod_def::GJ3loyB9_ig::F7irOHfBSNuWEDCZ68CIJA` |
| Create a Marketing Email | POST | `/marketing/v3/emails/` | `conn_mod_def::GJ3lrf7uGfU::5iaxxltzRyyjGbX2wxfzJg` |

18 more MarketingEmails actions are available through search.

### BlogPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Blog Posts | GET | `/cms/v3/blogs/posts` | `conn_mod_def::GJ3jvc9KHSE::r6OcFqV-QxW-IEg5DETvjA` |
| List Blog Posts (Cursor Pagination) | GET | `/cms/v3/blogs/posts/cursor` | `conn_mod_def::GJ3jX5smeIE::wAbsj-0FRCmCgnsZcJrKWg` |
| List Blog Posts (Cursor Pagination) | GET | `/cms/v3/blogs/posts/cursor` | `conn_mod_def::GJ3j1msG15Q::1QZl9RxvTv64OT6S1fyyKg` |
| List Blog Posts (Cursor Pagination) | GET | `/cms/v3/blogs/posts/cursor` | `conn_mod_def::GJ3jv_ZFvM8::4NDcIJfgTMuXMcM23Iqwaw` |
| Query Blog Posts (Cursor Pagination) | GET | `/cms/v3/blogs/posts/cursor/query` | `conn_mod_def::GJ3jwLv0jkk::IwceHN5cSRq7VlrYAfpoDw` |
| Query Blog Posts (Cursor) | GET | `/cms/v3/blogs/posts/cursor/query` | `conn_mod_def::GJ3jYEA5m6g::e0IMBms-Q0uJfcl9ejpTNQ` |
| Query Blog Posts (Cursor) | GET | `/cms/v3/blogs/posts/cursor/query` | `conn_mod_def::GJ3j1xjb4vA::uHoqvY00TFW-qT0s1FhKPg` |
| Retrieve a Blog Post | GET | `/cms/v3/blogs/posts/{{objectId}}` | `conn_mod_def::GJ3jxWWAgag::iOep_V51TUaffvxgkxtTKg` |
| Retrieve a Blog Post’s Draft Version | GET | `/cms/v3/blogs/posts/{{objectId}}/draft` | `conn_mod_def::GJ3jxm7H-mE::SPeJU8saRDWPMpUdyxmSRg` |
| Attach a Blog Post to a Multi-language Group | POST | `/cms/v3/blogs/posts/multi-language/attach-to-lang-group` | `conn_mod_def::GJ3juWo14DM::--yF9ZM8ScK4tBy49Iqh4w` |
| Clone a Blog Post | POST | `/cms/v3/blogs/posts/clone` | `conn_mod_def::GJ3jue1gpXQ::xnPakH3yS9qBXkopVZ6nJg` |
| Create a Batch of Blog Posts | POST | `/cms/v3/blogs/posts/batch/create` | `conn_mod_def::GJ3junIM7AU::wc-UnVT4SviptJfQjHZYfQ` |

16 more BlogPosts actions are available through search.

### SitePages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Pages (Cursor Pagination) | GET | `/cms/v3/pages/site-pages/cursor` | `conn_mod_def::GJ3jn447SoQ::BumbD2kCQjm6vdz2360O8Q` |
| List Website Pages | GET | `/cms/v3/pages/site-pages` | `conn_mod_def::GJ3jrcpe51Y::R7PEe4NnTbudAVa62vGTiA` |
| Query Site Pages (Cursor) | GET | `/cms/v3/pages/site-pages/cursor/query` | `conn_mod_def::GJ3joFAZxY4::JscKM-1QT1WZ7qcQ91hGxQ` |
| Retrieve a Previous Version of a Website Page (Revision) | GET | `/cms/v3/pages/site-pages/{{objectId}}/revisions/{{revisionId}}` | `conn_mod_def::GJ3jqsSMpnc::Tmn9K5EiR1ika1clx4clow` |
| Retrieve a Website Page (by ID) | GET | `/cms/v3/pages/site-pages/{{objectId}}` | `conn_mod_def::GJ3jq2Y3IFE::-6UJ_ongRYq0g7aOi5vxAg` |
| Retrieve a Website Page Draft by ID | GET | `/cms/v3/pages/site-pages/{{objectId}}/draft` | `conn_mod_def::GJ3jq-ipvhc::BU35kyZETbiax-kaWt01ag` |
| Attach a Website Page to a Multi-language Group | POST | `/cms/v3/pages/site-pages/multi-language/attach-to-lang-group` | `conn_mod_def::GJ3jkPj9vIQ::ykBsyd2aT42dkf3CwWwLZA` |
| Clone a Website Page | POST | `/cms/v3/pages/site-pages/clone` | `conn_mod_def::GJ3jkfWe77U::IleNFMkRQ6ugPJOSUiI99A` |
| Create a Language Variation for a Site Page | POST | `/cms/v3/pages/site-pages/multi-language/create-language-variation` | `conn_mod_def::GJ3jlPZq3a8::16MeGiMwSvCGdPm1ByTlaA` |
| Create a Website Page | POST | `/cms/v3/pages/site-pages` | `conn_mod_def::GJ3jlX0CZoU::cZ1AaEAQToCSJKJ6Se4T8A` |
| Create an A/B Test Variation for a Site Page | POST | `/cms/v3/pages/site-pages/ab-test/create-variation` | `conn_mod_def::GJ3jk_JrUUc::UGERO_rbQhuczGFgIg7y6g` |
| Create Website Pages (Batch) | POST | `/cms/v3/pages/site-pages/batch/create` | `conn_mod_def::GJ3jlvihRvI::M_1zsGBGQnSTZfeU_k5E3g` |

14 more SitePages actions are available through search.

### LandingPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Landing Pages | GET | `/cms/v3/pages/landing-pages` | `conn_mod_def::GJ3jnEnMmzE::RiHhPVidQJqgzW7l4urhUg` |
| List Landing Pages (Cursor Pagination) | GET | `/cms/v3/pages/landing-pages/cursor` | `conn_mod_def::GJ3jnOsi4kQ::pJ48__qKQgGTHytPy_1MrQ` |
| Query Landing Pages (Cursor Pagination) | GET | `/cms/v3/pages/landing-pages/cursor/query` | `conn_mod_def::GJ3jnZUc2jo::rfM-s0i9TRixI4WWNw8amA` |
| Retrieve a Landing Page by ID | GET | `/cms/v3/pages/landing-pages/{{objectId}}` | `conn_mod_def::GJ3jqDE8bQI::z07LzbVWQby2pE6DiQZrCQ` |
| Retrieve a Landing Page Draft by ID | GET | `/cms/v3/pages/landing-pages/{{objectId}}/draft` | `conn_mod_def::GJ3jqKkEKL8::qf5BPuBzSfql6C2i6PEYJQ` |
| Retrieve a Previous Version of a Landing Page | GET | `/cms/v3/pages/landing-pages/{{objectId}}/revisions/{{revisionId}}` | `conn_mod_def::GJ3jqjl90aE::Br6jNxotRgeBwmZffiSYiw` |
| Attach a Landing Page to a Multi-language Group | POST | `/cms/v3/pages/landing-pages/multi-language/attach-to-lang-group` | `conn_mod_def::GJ3jkHnq2vQ::zDSv2zUiRJSx8eXmmXaWxQ` |
| Clone a Landing Page | POST | `/cms/v3/pages/landing-pages/clone` | `conn_mod_def::GJ3jkXD4Avo::Tc1CwF00TNWIBjWx3z4brw` |
| Create a Landing Page | POST | `/cms/v3/pages/landing-pages` | `conn_mod_def::GJ3jkniswuo::bg_yYtjiTnmsmIotDRLJcA` |
| Create a Landing Page A/B Test Variation | POST | `/cms/v3/pages/landing-pages/ab-test/create-variation` | `conn_mod_def::GJ3jk2nlKIU::2jrEktNiQqSu2cbNW-XmwA` |
| Create a Landing Page Language Variation | POST | `/cms/v3/pages/landing-pages/multi-language/create-language-variation` | `conn_mod_def::GJ3jlHLlVjY::vpOXK4kbR-aRsD7Iy4jXNQ` |
| Create Landing Pages (Batch) | POST | `/cms/v3/pages/landing-pages/batch/create` | `conn_mod_def::GJ3jlntHkS8::nycL6dETRvC2Jx0u6mRSDg` |

12 more LandingPages actions are available through search.

### MarketingEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Find App-Specific Marketing Events by External Event ID | GET | `/marketing/v3/marketing-events/events/search` | `conn_mod_def::GJ3lvScJgEo::mTiNgCrLToW_XI94CIYsvQ` |
| Find Marketing Events by External Event ID | GET | `/marketing/v3/marketing-events/{{externalEventId}}/identifiers` | `conn_mod_def::GJ3lvaEYW7M::eVy0YpekTiKXppNugPSO9w` |
| Get a Marketing Event by External IDs | GET | `/marketing/v3/marketing-events/events/{{externalEventId}}` | `conn_mod_def::GJ3lv6iOl4Q::aKI75Me6QNC0SFRK69489A` |
| Get a Marketing Event by Object ID | GET | `/marketing/v3/marketing-events/{{objectId}}` | `conn_mod_def::GJ3lwHk_TGU::a0IoInxwRI6meWilTvgVKw` |
| List Marketing Events | GET | `/marketing/v3/marketing-events/` | `conn_mod_def::GJ3lvhg-yi8::IFpClSS9QsugeR8cdsD9Ng` |
| Cancel a Marketing Event (by External Event ID) | POST | `/marketing/v3/marketing-events/events/{{externalEventId}}/cancel` | `conn_mod_def::GJ3lwPMMpVA::BuFEbjzjR0iJaWr4_agV9g` |
| Create a Marketing Event | POST | `/marketing/v3/marketing-events/events` | `conn_mod_def::GJ3luCzDFPc::wLYKub3XT1CshrkVNFprcA` |
| Create or Update a Marketing Event (Upsert by External Event ID) | PUT | `/marketing/v3/marketing-events/events/{{externalEventId}}` | `conn_mod_def::GJ3luLGdxZw::7gxi6Dw1RuC-l8bF7npwzg` |
| Create or Update Multiple Marketing Events (Batch Upsert) | POST | `/marketing/v3/marketing-events/events/upsert` | `conn_mod_def::GJ3luTZMV1E::awcyJd0rQsOsxWBXS5wHQQ` |
| Delete a Marketing Event by External Event ID | DELETE | `/marketing/v3/marketing-events/events/{{externalEventId}}` | `conn_mod_def::GJ3lucD9whE::RxCNjt-1Q6utiSy7l8fZxw` |
| Delete a Marketing Event by Object ID | DELETE | `/marketing/v3/marketing-events/{{objectId}}` | `conn_mod_def::GJ3luklp8-U::YEEkUY_uSnuRg1gx5iR0ag` |
| Delete Multiple Marketing Events by External IDs | POST | `/marketing/v3/marketing-events/events/delete` | `conn_mod_def::GJ3lur3xFww::Cn1aTOlZRiKAl1fpC_GJOQ` |

8 more MarketingEvents actions are available through search.

### BlogTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Blog Tags | GET | `/cms/v3/blogs/tags` | `conn_mod_def::GJ3j1F_5yH0::CPLaVlR1RjmFatySuWz9Yg` |
| List Blog Tags (Cursor Pagination) | GET | `/cms/v3/blogs/tags/cursor` | `conn_mod_def::GJ3jYOQDFDI::Ir-vXiZRR3CRV1tdkK_-LQ` |
| List Blog Tags (Cursor Pagination) | GET | `/cms/v3/blogs/tags/cursor` | `conn_mod_def::GJ3jwWwlxic::O2cSCnuaRmues1RdxuC_Ow` |
| List Blog Tags (Cursor Pagination) | GET | `/cms/v3/blogs/tags/cursor/query` | `conn_mod_def::GJ3jwi5FnHE::K0WT7q7-QEyDDih1KTF62w` |
| List Blog Tags (Cursor Pagination) | GET | `/cms/v3/blogs/tags/cursor` | `conn_mod_def::GJ3j1-HQZKg::ZJEjSIdfT2qX1AfRBZ0Ijg` |
| List Blog Tags (Cursor Pagination) | GET | `/cms/v3/blogs/tags/cursor/query` | `conn_mod_def::GJ3j2La_DA4::ZxanABjUSBqP-kOrQVE8Hg` |

13 more BlogTags actions are available through search.

This lists 90 of 1184 actions. For anything not here, call `search_one_platform_actions` with platform `hubspot`. The full catalog is at https://www.withone.ai/knowledge/hubspot.

## When a call fails

The error comes from HubSpot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hubspot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
