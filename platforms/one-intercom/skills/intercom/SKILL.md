---
name: intercom
description: A messaging platform that allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email. Read and write Intercom data through One: contacts, conversations, tickets, companies, articles, internalarticles and more, 161 actions with real parameter documentation. Use whenever the user asks to look something up in Intercom, create or update a record there, or build code against the Intercom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: intercom
  generated-from: one-knowledge-base
---

# Intercom through One

A messaging platform that allows businesses to communicate with prospective and existing customers within their app, on their website, through social media, or via email.

One exposes Intercom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `intercom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Intercom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Intercom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact | GET | `/contacts/{{contactId}}` | `conn_mod_def::GJ4phHnHXiM::HS5jLu3zQTmJqwfZmMBulg` |
| Get a Contact by External ID | GET | `/contacts/find_by_external_id/{{externalId}}` | `conn_mod_def::GJ4phEReCBg::EcrEKp7WRFWqgupy4-BESQ` |
| List Contacts | GET | `/contacts` | `conn_mod_def::GJ4phPFB-9A::9UeutmdERiyeB6itbEkNwg` |
| Add a Tag to a Contact | POST | `/contacts/{{contactId}}/tags` | `conn_mod_def::GJ4pkNc_59A::gQPqFEUbTrSBjEdSYuw1jQ` |
| Archive a Contact | POST | `/contacts/{{contactId}}/archive` | `conn_mod_def::GJ4pg3gEdqQ::bXA5ak5NQgqoV5MS5FVSgA` |
| Block a Contact | POST | `/contacts/{{contactId}}/block` | `conn_mod_def::GJ4phD3IcAw::xpNSw2hQTKqYD2WAwSa2Gw` |
| Create a Contact | POST | `/contacts` | `conn_mod_def::GJ4phElMibM::gYlIxmI_SoWCNLuYpbHtKA` |
| Delete a Contact | DELETE | `/contacts/{{contactId}}` | `conn_mod_def::GJ4phGPYNkg::UuPLuxP4RSqqgAqSP7m10A` |
| Merge a Lead Contact into a User Contact | POST | `/contacts/merge` | `conn_mod_def::GJ4phaMnK6g::YMUWqLMiQaSm3qOo-YMteA` |
| Remove a Tag from a Contact | DELETE | `/contacts/{{contactId}}/tags/{{tagId}}` | `conn_mod_def::GJ4pkZvAeHg::AYvy7v9JSgytIUnZY79pRA` |
| Search Contacts | POST | `/contacts/search` | `conn_mod_def::GJ4phcTeoeU::Ii89dtL6RKG8xa87IjGA0g` |
| Unarchive a Contact | POST | `/contacts/{{contactId}}/unarchive` | `conn_mod_def::GJ4phaB6PqY::CYZXMAYXQOq9IqHqxNwDtA` |

1 more Contacts actions are available through search.

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conversations | GET | `/conversations` | `conn_mod_def::GJ4phn8nGhA::RaoWGsI3QJanio25w-inkA` |
| Retrieve a Conversation | GET | `/conversations/{{conversationId}}` | `conn_mod_def::GJ4piENYNso::YLibV_rIQoCTcede_c3Hsw` |
| Add a Tag to a Conversation | POST | `/conversations/{{conversationId}}/tags` | `conn_mod_def::GJ4pkMcOImw::pvyUtt6KSniG7H9UykrqDQ` |
| Attach a Contact to a Conversation | POST | `/conversations/{{conversationId}}/customers` | `conn_mod_def::GJ4phZ-LYI0::fRLSKTWrSqaZhx_bruTWGg` |
| Create a Conversation | POST | `/conversations` | `conn_mod_def::GJ4phnoGt6I::ORzSbBoPTrOEZXnBFZKbUA` |
| Delete a Conversation | DELETE | `/conversations/{{conversationId}}` | `conn_mod_def::GJ4phkGHtRc::SutCKgX5SA2govSoEqSExg` |
| Detach a Contact from a Group Conversation | DELETE | `/conversations/{{conversationId}}/customers/{{contactId}}` | `conn_mod_def::GJ4phmAg0z4::MaAoq0FISWWrDXTZ0aF_mw` |
| Manage a Conversation’s Parts (Close, Snooze, Open, Assign) | POST | `/conversations/{{conversationId}}/parts` | `conn_mod_def::GJ4phvsIdDM::t6E1wzDCRveqq2JoBtG02w` |
| Redact a Conversation Part or Source Message | POST | `/conversations/redact` | `conn_mod_def::GJ4phwLPSR8::ZRfkHGMBSTuCTjEjCqLasA` |
| Remove a Tag from a Conversation | DELETE | `/conversations/{{conversationId}}/tags/{{tagId}}` | `conn_mod_def::GJ4pkaMR7ns::Ax2HzV5pQZiU0DvJw_njeg` |
| Reply to a Conversation | POST | `/conversations/{{conversationId}}/reply` | `conn_mod_def::GJ4phwK4VW8::M5D6S8pMReCCbZc4lTvjMw` |
| Search Conversations | POST | `/conversations/search` | `conn_mod_def::GJ4ph00Ee5o::WDltQcvIQ7ihlSIXbytpug` |

1 more Conversations actions are available through search.

### Tickets

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Ticket | GET | `/tickets/{{ticketId}}` | `conn_mod_def::GJ4pk07wOf0::sgM9c5_4QNGwlUfUWoTmWQ` |
| Convert a Conversation to a Ticket | POST | `/conversations/{{conversationId}}/convert` | `conn_mod_def::GJ4phkq6IC8::qc7cxXiIS7KDjHcHC3fdRw` |
| Create a Ticket | POST | `/tickets` | `conn_mod_def::GJ4pkyXs0Yg::oUM5z-c0SBanDzt4Bbe6Vg` |
| Delete a Ticket | DELETE | `/tickets/{{ticketId}}` | `conn_mod_def::GJ4pkySVmcY::koEi4y3vQbeztveFlRaTIQ` |
| Enqueue Ticket Creation | POST | `/tickets/enqueue` | `conn_mod_def::GJ4pkx3lIZE::ZIXch5uAR2C87VGd6-KbyQ` |
| Remove a Tag from a Ticket | DELETE | `/tickets/{{ticketId}}/tags/{{tagId}}` | `conn_mod_def::GJ4pkiFisp4::ECFijxghSO6XitCwnH3kbA` |
| Reply to a Ticket | POST | `/tickets/{{ticketId}}/reply` | `conn_mod_def::GJ4pk09tIEU::P-WMW0vrS9Sdl3fVGx6Cdw` |
| Search Tickets | POST | `/tickets/search` | `conn_mod_def::GJ4pk_5rlyY::vvxGODYaTFWzbQxwKL2rBA` |
| Update a Ticket | PUT | `/tickets/{{ticketId}}` | `conn_mod_def::GJ4plBcoOzw::a2H-FDMcTRehEq1NDGw92w` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Company by ID | GET | `/companies/{{companyId}}` | `conn_mod_def::GJ4pg583aYU::XL7wgIk4TFCvCpPb0fkWsA` |
| Retrieve Companies | GET | `/companies` | `conn_mod_def::GJ4pg29lxJ8::j7R-0rrqQGWLZMssm21lWg` |
| Scroll Over All Companies | GET | `/companies/scroll` | `conn_mod_def::GJ4pg8rQKLc::LDuEmqBATKGh3y76kpORyg` |
| Create or Update a Company | POST | `/companies` | `conn_mod_def::GJ4pgYhzO-w::ovH4GVcDSUmDF95Cc1x1DA` |
| Delete a Company | DELETE | `/companies/{{companyId}}` | `conn_mod_def::GJ4pgk3ib2c::GNub-YQvQwe72B5HfqNU7w` |
| List All Companies | POST | `/companies/list` | `conn_mod_def::GJ4pgoek46Y::WRMk0oOoTea-u1N2fJGcCQ` |
| Update a Company | PUT | `/companies/{{companyId}}` | `conn_mod_def::GJ4pg0rMoRg::Orw6Ok0sTlGbYCfudDmUWw` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Articles | GET | `/articles` | `conn_mod_def::GJ4pfqUo9vg::v_vTQhjFQpm7rWNVwdCLNQ` |
| Retrieve an Article | GET | `/articles/{{articleId}}` | `conn_mod_def::GJ4pftIDIWM::Ci6AY6UNSSadH3kYIZiOow` |
| Search Articles | GET | `/articles/search` | `conn_mod_def::GJ4pfzE30bM::5qWQHO2hTXiy7g7_SehMew` |
| Create an Article | POST | `/articles` | `conn_mod_def::GJ4pfs6lIl4::9rl6HY5wTRqUpgNog9xI6w` |
| Delete an Article | DELETE | `/articles/{{articleId}}` | `conn_mod_def::GJ4pfuDDpYE::qYHBy9YcSIK7v20muydLZQ` |
| Update an Article | PUT | `/articles/{{articleId}}` | `conn_mod_def::GJ4pf92a8ic::TQ0bV0TRQdePngCz0Y_upg` |

### InternalArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Internal Articles | GET | `/internal_articles` | `conn_mod_def::GJ4pjfIHVhc::Nwg3BWamQlaO7tZnSpo4xw` |
| Retrieve an Internal Article | GET | `/internal_articles/{{internalArticleId}}` | `conn_mod_def::GJ4pjfOpGug::-373MMerS0Gmi-utT4BRwQ` |
| Search Internal Articles | GET | `/internal_articles/search` | `conn_mod_def::GJ4pje_d5eM::lgbo6jsvS_-SS9n9lWExhw` |
| Create an Internal Article | POST | `/internal_articles` | `conn_mod_def::GJ4pjTSkbUU::2o3l-F8cT7qCjAjVio_vkg` |
| Delete an Internal Article | DELETE | `/internal_articles/{{internalArticleId}}` | `conn_mod_def::GJ4pjTpVEsI::3DkZ4ZmZTeODlxBRPeAetA` |
| Update an Internal Article | PUT | `/internal_articles/{{internalArticleId}}` | `conn_mod_def::GJ4pjfCryQ4::NQLY1ktMTFSc1jTvx6Whqw` |

### ExternalPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List External Pages (Workspace) | GET | `/ai/external_pages` | `conn_mod_def::GJ4pfgvAXTM::BjH1s54cRKuHAR5pb2Wr0Q` |
| Retrieve an External Page | GET | `/ai/external_pages/{{pageId}}` | `conn_mod_def::GJ4pfh7hKEI::h_ZtOOLTS9a-3UmVViUiyg` |
| Create or Update an External Page | POST | `/ai/external_pages` | `conn_mod_def::GJ4pfVcUblM::imqMQvJ8T3-zkQqm_574hw` |
| Delete an External Page | DELETE | `/ai/external_pages/{{pageId}}` | `conn_mod_def::GJ4pfVjAYzE::M582dh8xS3qYPc6rkSOIaw` |
| Update an External Page | PUT | `/ai/external_pages/{{pageId}}` | `conn_mod_def::GJ4pfgs-8p0::J579cSxGTZ-dv1m-hmLUIw` |

### ContentImportSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Content Import Sources (Workspace) | GET | `/ai/content_import_sources` | `conn_mod_def::GJ4pfWUuuxY::kLMmAnfMTOW8XciGrud6Xg` |
| Retrieve a Content Import Source | GET | `/ai/content_import_sources/{{sourceId}}` | `conn_mod_def::GJ4pfghAwRA::KV85jrcsSHGjoP4V63mI4g` |
| Create a Content Import Source | POST | `/ai/content_import_sources` | `conn_mod_def::GJ4pfVJ6IzE::QFQykIrQSZSi3gZmnHHG8A` |
| Delete a Content Import Source | DELETE | `/ai/content_import_sources/{{sourceId}}` | `conn_mod_def::GJ4pfV625cM::Ve7mK4p3TEKbSbF7usXSSg` |
| Update a Content Import Source | PUT | `/ai/content_import_sources/{{sourceId}}` | `conn_mod_def::GJ4pfh17aQc::nXKt0EG9S3OLV5ru9SxdlA` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call | GET | `/calls/{{callId}}` | `conn_mod_def::GJ4pgM53Gig::bYxsbThsSEusCZsSxjDN0w` |
| Get a Call’s Recording Redirect URL | GET | `/calls/{{callId}}/recording` | `conn_mod_def::GJ4pgM5afZE::0VngHmJdQHKBdB61U7yW6w` |
| Get a Call’s Transcript | GET | `/calls/{{callId}}/transcript` | `conn_mod_def::GJ4pgMN-iB4::07eRjuWLQNGZXaj3t3nbMg` |
| List Calls | GET | `/calls` | `conn_mod_def::GJ4pgdLP1p4::uI3v0uQSQ_SraSzPIIj8ug` |
| List Calls with Transcripts | POST | `/calls/search` | `conn_mod_def::GJ4pgYZEyEU::SEK1ML-aTd2vpSGUR5_CMQ` |

### CustomObjectInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Object Instance by External ID (for a Custom Object Type) | GET | `/custom_object_instances/{{customObjectTypeIdentifier}}` | `conn_mod_def::GJ4piakCFl8::u6jA7QlmRuS-pKnDBNdrcg` |
| Get a Custom Object Instance by Type Identifier and Instance ID | GET | `/custom_object_instances/{{customObjectTypeIdentifier}}/{{customObjectInstanceId}}` | `conn_mod_def::GJ4piatFM9k::TobfpQk2QqqGbRnb1CWKhg` |
| Create or Update a Custom Object Type’s Instance | POST | `/custom_object_instances/{{customObjectTypeIdentifier}}` | `conn_mod_def::GJ4piaKUIXQ::pxT5h6mrQLuybLNPRWP-bg` |
| Delete a Custom Object Instance by External ID (for a Custom Object Type) | DELETE | `/custom_object_instances/{{customObjectTypeIdentifier}}` | `conn_mod_def::GJ4piadihw8::dtyVF9ABRK2nWYdF1FoY9w` |
| Delete a Custom Object Type’s Instance by ID | DELETE | `/custom_object_instances/{{customObjectTypeIdentifier}}/{{customObjectInstanceId}}` | `conn_mod_def::GJ4piZ_DZxQ::S9Gb0kQHQcy2eO_52P_5Fg` |

### HelpCenterCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Help Center Collections | GET | `/help_center/collections` | `conn_mod_def::GJ4pjJwznL4::NDlVx7qtT82RvcNWStanRw` |
| Retrieve a Help Center Collection | GET | `/help_center/collections/{{collectionId}}` | `conn_mod_def::GJ4pjULJm1w::23Kw8Q9pQD6DgIekpVmlpg` |
| Create a Help Center Collection | POST | `/help_center/collections` | `conn_mod_def::GJ4pjGxczQg::l6bghd0kQcqsHqUc9sa0Qw` |
| Delete a Help Center Collection | DELETE | `/help_center/collections/{{collectionId}}` | `conn_mod_def::GJ4pjMbx0tc::igGfD_brRsOY_hg82hk0kw` |
| Update a Help Center Collection | PUT | `/help_center/collections/{{collectionId}}` | `conn_mod_def::GJ4pjT8yeNg::x5ZLM2k3RHOc-n6uGoacPg` |

### NewsItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List All News Items | GET | `/news/news_items` | `conn_mod_def::GJ4pj0RJOPA::jmpJUAzGQU-L6EgGNw6U8Q` |
| Retrieve a News Item | GET | `/news/news_items/{{newsItemId}}` | `conn_mod_def::GJ4pjzXsRJ0::sNE5QsDbQq6eXPCFUSQ5Gw` |
| Create a News Item | POST | `/news/news_items` | `conn_mod_def::GJ4pjo3AjNg::Hy2jHG9qQmGADQ93LaZJfw` |
| Delete a News Item | DELETE | `/news/news_items/{{newsItemId}}` | `conn_mod_def::GJ4pjscWzew::4rxJn98mTXapA6PT0OfFAQ` |
| Update a News Item | PUT | `/news/news_items/{{newsItemId}}` | `conn_mod_def::GJ4pj8uadXA::ryMlswTYTEGxOwJJqHqMFA` |

### FinVoiceCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Collect a Fin Voice Call by External ID | GET | `/fin_voice/external_id/{{externalId}}` | `conn_mod_def::GJ4pf-MDLzc::0ZLSf17nRsS5v5GA6pvgjA` |
| Collect a Fin Voice Call by External Reference ID | GET | `/fin_voice/collect/{{id}}` | `conn_mod_def::GJ4pgJxSyXA::IlKbjcWSRmiZXF7TKB1M1w` |
| Collect a Fin Voice Call by Phone Number | GET | `/fin_voice/phone_number/{{phoneNumber}}` | `conn_mod_def::GJ4pgNlO_Uw::mofjVvhzTWiJEBLD79nJIw` |
| Register a Fin Voice Call | POST | `/fin_voice/register` | `conn_mod_def::GJ4pgVp6wLA::pPVxpsxrSseob6nohppjHA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Tag by ID | GET | `/tags/{{tagId}}` | `conn_mod_def::GJ4pkZMJ8XY::ZXBAmLBwQGOzsrqA3uqSqg` |
| List All Tags | GET | `/tags` | `conn_mod_def::GJ4pkZC_rQM::6WrVM9CaSyKa6gotbdGAAg` |
| Create or Update a Tag (and Tag/Untag Companies or Tag Users) | POST | `/tags` | `conn_mod_def::GJ4pkR2A6bc::7aAqv55QRT6DVvDEisoI3A` |
| Delete a Tag | DELETE | `/tags/{{tagId}}` | `conn_mod_def::GJ4pkZdfpSQ::8y3nlhpkTFeYzDD5nFvHWw` |

This lists 90 of 161 actions. For anything not here, call `search_one_platform_actions` with platform `intercom`. The full catalog is at https://www.withone.ai/knowledge/intercom.

## When a call fails

The error comes from Intercom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/intercom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
