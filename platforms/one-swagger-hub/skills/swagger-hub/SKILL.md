---
name: swagger-hub
description: SwaggerHub is an API design and documentation platform that enables teams to create, standardize, collaborate on, and publish OpenAPI and AsyncAPI specifications, allowing developers to manage API lifecycles and generate consistent documentation and integrations from shared definitions. Read and write SwaggerHub data through One: apis, domains, templates, comments, projects, projectintegrations and more, 114 actions with real parameter documentation. Use whenever the user asks to look something up in SwaggerHub, create or update a record there, or build code against the SwaggerHub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: swagger-hub
  generated-from: one-knowledge-base
---

# SwaggerHub through One

SwaggerHub is an API design and documentation platform that enables teams to create, standardize, collaborate on, and publish OpenAPI and AsyncAPI specifications, allowing developers to manage API lifecycles and generate consistent documentation and integrations from shared definitions.

One exposes SwaggerHub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `swagger-hub` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SwaggerHub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SwaggerHub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Apis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Definition by Owner, API, and Version | GET | `/apis/{{owner}}/{{api}}/{{version}}` | `conn_mod_def::GMYpg9O_OuM::rtAEfnk5Q_6NV3RMdEA_Dw` |
| Get an API Definition in JSON Format | GET | `/apis/{{owner}}/{{api}}/{{version}}/json` | `conn_mod_def::GMYpgkvfoCQ::6BgAXJeHTBKvQ5eX49d6BQ` |
| Get an API's Default Version | GET | `/apis/{{owner}}/{{api}}/settings/default` | `conn_mod_def::GMYpgbJGwIc::Py7Hb-y9Tp2plOmupCWqdg` |
| Get API Versions for an Owner and API | GET | `/apis/{{owner}}/{{api}}` | `conn_mod_def::GMYpgb3uIwI::f2R5HgfIRb6uZLezijaRHQ` |
| List APIs | GET | `/apis` | `conn_mod_def::GMYpgLCIf58::OW5uXlq9QdyKv7uaE_pkyw` |
| List APIs for an Owner | GET | `/apis/{{owner}}` | `conn_mod_def::GMYpgaPJ2O8::UDOaOrytR3W5NmxmIY5T3A` |
| Clone an API Version | POST | `/apis/{{owner}}/{{api}}/{{version}}/clone` | `conn_mod_def::GMYpfNp2E1I::E9xZ352oTmCiFvvTNJ-rbg` |
| Compare APIs for an Owner API Version | POST | `/apis/{{owner}}/{{api}}/{{version}}/compare` | `conn_mod_def::GMYpfWL4Hzg::gHxXUC-gRiWK4zTTBhko0Q` |
| Create an API by Template for an Owner | POST | `/apis/{{owner}}/{{api}}/.template` | `conn_mod_def::GMYpfaNtdls::v9kejmLgTGmooo_YCcKwQw` |
| Create or Update an API | POST | `/apis/{{owner}}/{{api}}` | `conn_mod_def::GMYpfYzT8xE::gxEphxHtSu-vx2zPUK4Mzg` |
| Delete an API | DELETE | `/apis/{{owner}}/{{api}}` | `conn_mod_def::GMYpf4O6HbQ::w0v6MRN7QhyuUEuN3crUOQ` |
| Delete an API Version | DELETE | `/apis/{{owner}}/{{api}}/{{version}}` | `conn_mod_def::GMYpff5nKWI::L5D7TNxKRTqHCveNzrVUVg` |

5 more Apis actions are available through search.

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain Definition in YAML Format | GET | `/domains/{{owner}}/{{domain}}/{{version}}/domain.yaml` | `conn_mod_def::GMYpixI5FC8::PeZT0h7ZTniEJkqbPnxang` |
| Get a Domain's Default Version | GET | `/domains/{{owner}}/{{domain}}/settings/default` | `conn_mod_def::GMYpil_yWT8::U6HfTxK1Q0ermjUU2Q9MSA` |
| List Domains | GET | `/domains` | `conn_mod_def::GMYpia_Mdr8::MU--ZwDZSJisn1M7lqf9_Q` |
| List Domains for an Owner | GET | `/domains/{{owner}}` | `conn_mod_def::GMYpinHFCEQ::dY18PZKcTZScw4z1m8LEfw` |
| Add a Comment to a Domain | POST | `/domains/{{owner}}/{{domain}}/{{version}}/comments` | `conn_mod_def::GMYphgmlsF8::U4RPkZOFR22Sj5Yqta3izg` |
| Change Notification Status for a Domain | PUT | `/domains/{{owner}}/{{domain}}/.notifications` | `conn_mod_def::GMYphgUIoPI::O_i9Eg7oT6ueG3a8gEYqMw` |
| Clone a Domain Version | POST | `/domains/{{owner}}/{{domain}}/{{version}}/clone` | `conn_mod_def::GMYphxomzCc::ZJFWrrdJS5KjtXBcdxZrbQ` |
| Create or Update a Domain | POST | `/domains/{{owner}}/{{domain}}` | `conn_mod_def::GMYphiLzPMU::w_kV3SSgTceoHGqH_WwYFw` |
| Delete a Domain | DELETE | `/domains/{{owner}}/{{domain}}` | `conn_mod_def::GMYph8fBdjU::VRszt-hwS5ynf6TH7TL7UA` |
| Delete a Domain Version | DELETE | `/domains/{{owner}}/{{domain}}/{{version}}` | `conn_mod_def::GMYph5PfqmQ::pblQVCLiRJ6hEgJkopdc-g` |
| Fork a Domain Definition | POST | `/domains/{{owner}}/{{domain}}/{{version}}/fork` | `conn_mod_def::GMYpiaTOaZ8::ds72OeALRxCwOy_wEBssDw` |
| Rename a Domain | POST | `/domains/{{owner}}/{{domain}}/rename` | `conn_mod_def::GMYpiec8YUA::d6gsdFWsQOuV20Sf5uuGfQ` |

2 more Domains actions are available through search.

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template Definition | GET | `/templates/{{owner}}/{{templateId}}/{{version}}` | `conn_mod_def::GMYpmqSHc7o::gU67DwZ8QaGMM74GnGJAJw` |
| Get Lifecycle Settings for a Template | GET | `/templates/{{owner}}/{{templateId}}/{{version}}/settings/lifecycle` | `conn_mod_def::GMYpnEZKz0k::qUZcDKFuT3a4Lyn25Xailw` |
| List Templates | GET | `/templates` | `conn_mod_def::GMYpm-o5lbA::GQLEsjr7RYCNVuTxKwdB5g` |
| Add a Comment to a Template | POST | `/templates/{{owner}}/{{templateId}}/{{version}}/comments` | `conn_mod_def::GMYplTbDIk8::OFKV5nduRBK9_TovC4QHdQ` |
| Create or Update a Template for an Owner | POST | `/templates/{{owner}}/{{templateId}}` | `conn_mod_def::GMYpl6WVbH4::v2-_RIt0QniHqN1NEsxlFw` |
| Delete a Template for an Owner | DELETE | `/templates/{{owner}}/{{templateId}}` | `conn_mod_def::GMYply6SBoc::3JGfOd4eQmKxd399x3Y4fg` |
| Delete a Template Version | DELETE | `/templates/{{owner}}/{{templateId}}/{{version}}` | `conn_mod_def::GMYpmeLSkB4::jej0RgaeQoKqgFiJh2iqNA` |
| Fork a Template | POST | `/templates/{{owner}}/{{templateId}}/{{version}}/fork` | `conn_mod_def::GMYpmup-gug::f0qxIhduSyGJdHgOml2Gug` |
| Rename a Template for an Owner | POST | `/templates/{{owner}}/{{templateId}}/rename` | `conn_mod_def::GMYpmn05Ue8::RtArLthNSumXcQQ0gcr9kg` |
| Update Lifecycle Settings for a Template Version | PUT | `/templates/{{owner}}/{{templateId}}/{{version}}/settings/lifecycle` | `conn_mod_def::GMYpnDqUsJo::k50RClh8S0SL4PtX3u-fVA` |
| Update Private Settings for a Template | PUT | `/templates/{{owner}}/{{templateId}}/{{version}}/settings/private` | `conn_mod_def::GMYpnGRneGc::K6XlYI3rRumLI6T7fpzClw` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for a Template | GET | `/templates/{{owner}}/{{templateId}}/{{version}}/comments` | `conn_mod_def::GMYpm8cGNX8::U5HyEz-HTAWzKZdOa5pSAg` |
| List Comments for an API | GET | `/apis/{{owner}}/{{api}}/{{version}}/comments` | `conn_mod_def::GMYphGYDGLc::3hvXj2CUSk63vxAPnAWVIw` |
| Add a Comment to an API | POST | `/apis/{{owner}}/{{api}}/{{version}}/comments` | `conn_mod_def::GMYpfM0-s2Q::tKF3AdpJQ9esPJbc1FhMDw` |
| Batch Using Apis Owner Api Version Comments | POST | `/apis/{{owner}}/{{api}}/{{version}}/comments/batch` | `conn_mod_def::GMYphV9BnmE::yPhM24LsQdSUyBkQt9KwOA` |
| Batch Using Domains {{version}} Comments | POST | `/domains/{{owner}}/{{domain}}/{{version}}/comments/batch` | `conn_mod_def::GMYpjHMgc0c::mCaUjESPS8WjLbqRq4ULbw` |
| Delete a Comment for an API Version | DELETE | `/apis/{{owner}}/{{api}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYpfWyluVY::MH3Nzuz2TLORpY7oUAdykA` |
| Update a Comment for an API Version | PATCH | `/apis/{{owner}}/{{api}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYphXV7ASA::pQ3NWvD0TH-fqyhN2eL8Rg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Project by Organization and Project ID | GET | `/projects/{{owner}}/{{projectId}}` | `conn_mod_def::GMYplLgD2Dc::HwPNPbDCTmG5QSjsAeHG6w` |
| Get an Organization's Projects | GET | `/projects/{{owner}}` | `conn_mod_def::GMYpkyA9xZw::9adX-IQtRDuoLkWJ3lWRtA` |
| Add Spec to a Project | PUT | `/projects/{{owner}}/{{project}}/{{specType}}/{{name}}` | `conn_mod_def::GMYpkT3MJHA::bj03ner9TUuevH_gILZZ1A` |
| Create a Project for an Owner | POST | `/projects/{{owner}}` | `conn_mod_def::GMYpkUNXM5o::CLVtKpCbTzSCcJ8VjIlkWw` |
| Delete a Project | DELETE | `/projects/{{owner}}/{{projectId}}` | `conn_mod_def::GMYpk4qFeFk::rLdOUCtmTDecaYtMwVcFBA` |
| Update a Project | PUT | `/projects/{{owner}}/{{projectId}}` | `conn_mod_def::GMYpldwJMvM::wZMbzM14SeSZLjaSh8QOfw` |

### ProjectIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Integration | GET | `/projects/{{owner}}/{{projectId}}/integrations/{{integrationId}}` | `conn_mod_def::GMYplAIPaWw::oONnGnPoTNuPqAcsKc2Ppg` |
| Create a GitHub Integration for a Project | POST | `/projects/{{owner}}/{{projectId}}/integrations` | `conn_mod_def::GMYpkVuPZQg::hQm8aOv7SRO_gDftcYlvVQ` |
| Delete a Project Integration | DELETE | `/projects/{{owner}}/{{projectId}}/integrations/{{integrationId}}` | `conn_mod_def::GMYpkqFfvus::RXY3TTPJRw6BnGpG8K_f0A` |
| Partially Update a Project Integration | PATCH | `/projects/{{owner}}/{{projectId}}/integrations/{{integrationId}}` | `conn_mod_def::GMYplL00IXI::m-x7N85yRsOoPKQfovOZhw` |
| Update a Project Integration | PUT | `/projects/{{owner}}/{{projectId}}/integrations/{{integrationId}}` | `conn_mod_def::GMYplJf4c00::yvzjdUcWQ3GtfFD6ePOSnA` |

### DomainComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments for a Domain Version | GET | `/domains/{{owner}}/{{domain}}/{{version}}/comments` | `conn_mod_def::GMYpi5yuBhw::CRfAyzY3RyaMmqRhvP5tbw` |
| Delete a Domain Comment | DELETE | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYpiRjTT1k::GKPATnq9S_6GdEOtoMZ4zg` |
| Set a Domain Comment's Status | PUT | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}/status/{{status}}` | `conn_mod_def::GMYpjFqdyhk::-EglOMkMQ-2mIswJStu0zw` |
| Update a Domain Comment | PATCH | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYpjGjTWvw::8Una1mIWSsKNc2MZ_zw4dA` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Integrations | GET | `/projects/{{owner}}/{{projectId}}/integrations` | `conn_mod_def::GMYplCOLedI::2twerSWDQRObSD2uXf4ifw` |
| List Integrations for an API Version | GET | `/apis/{{owner}}/{{api}}/{{version}}/integrations` | `conn_mod_def::GMYpjRHzocM::_NdXf8wXSQ6D8ocsvJEeug` |
| Create an Integration for an API | POST | `/apis/{{owner}}/{{api}}/{{version}}/integrations` | `conn_mod_def::GMYpjTa0724::XwazY4vFRBqm3V195Vs3Kg` |
| Update an API Integration | PUT | `/apis/{{owner}}/{{api}}/{{version}}/integrations/{{integrationId}}` | `conn_mod_def::GMYpjlqvzZY::qZbrMTw4T6OWfxcXAiLmiQ` |

### ApiIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Integration by ID | GET | `/apis/{{owner}}/{{api}}/{{version}}/integrations/{{integrationId}}` | `conn_mod_def::GMYpjaku7Tk::rBfnZSlrTjqrZxcwy47hNQ` |
| Delete an API Integration | DELETE | `/apis/{{owner}}/{{api}}/{{version}}/integrations/{{integrationId}}` | `conn_mod_def::GMYpjRNXeEI::tmv9p8DyRT20cSU2z1_Trw` |
| Execute an API Integration for an API Version | POST | `/apis/{{owner}}/{{api}}/{{version}}/integrations/{{integrationId}}/execute` | `conn_mod_def::GMYpkMKdGBw::xrYcXLTnRBWfZwrBagLuqw` |
| Update an API Integration | PATCH | `/apis/{{owner}}/{{api}}/{{version}}/integrations/{{integrationId}}` | `conn_mod_def::GMYpkBOUcGc::ysipsp4aRBymINGihsORXA` |

### TemplateComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Using Templates Owner Template Version Comments | POST | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/batch` | `conn_mod_def::GMYpnXyzvtQ::aCo4uz-JTrySyOaes5_ayA` |
| Delete a Template Comment | DELETE | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYploodKTo::Zif1ujDYT2SjB8WHYELVqw` |
| Update a Template Comment | PATCH | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}` | `conn_mod_def::GMYpnsTnKPY::iVVAlNfWTz--ecE9SvTMeg` |
| Update a Template Comment's Status | PUT | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}/status/{{status}}` | `conn_mod_def::GMYpnTs8O74::M4NU6-dFTFK5tnHi2PUsoQ` |

### ApiCommentReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Reply to an API Comment | POST | `/apis/{{owner}}/{{api}}/{{version}}/comments/{{comment}}/replies` | `conn_mod_def::GMYpfNv1sEY::7ne3eT28Rfeg0woUYtv23g` |
| Delete a Reply to an API Comment | DELETE | `/apis/{{owner}}/{{api}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYpgA8rezQ::SGbb409tQYOiSnx5ji2pbw` |
| Update an API Comment Reply | PATCH | `/apis/{{owner}}/{{api}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYphWRocsc::AFbMupuvT26omK1xyIj_zQ` |

### DomainCommentReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Reply to a Domain Comment | POST | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}/replies` | `conn_mod_def::GMYphgDghqU::3DxaD-dkQ_6N0g8vpbLSKw` |
| Delete a Domain Comment Reply | DELETE | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYpiPnL9s0::vt0rIxs8Ru6CvanhAkDOfA` |
| Update a Domain Comment Reply | PATCH | `/domains/{{owner}}/{{domain}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYpjG-1d9c::PCn1VqiUTn27sk9Vau4n2w` |

### SourceControlFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Source Control File Association for an API | GET | `/apis/{{owner}}/{{api}}/{{version}}/source-control-files` | `conn_mod_def::GMYpjRp2uvE::vFJtDd1iSgO6VPmf57JGuA` |
| Delete Source Control File Association for an API Version | DELETE | `/apis/{{owner}}/{{api}}/{{version}}/source-control-files` | `conn_mod_def::GMYpjQtZjT4::bZ0YmpfxTdG2o2BUDlGAGw` |
| Store Source Control File Associations for an API Version | POST | `/apis/{{owner}}/{{api}}/{{version}}/source-control-files` | `conn_mod_def::GMYpjbqa14Q::bCuzenMTQSm__G03eUmmoQ` |

### TemplateCommentReplies

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Reply to a Template Comment | POST | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}/replies` | `conn_mod_def::GMYplm9JV6Q::ZVOHeGgZQQ6ZLbs2YnF1Zg` |
| Delete a Template Comment Reply | DELETE | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYpmmvXoRw::uEt4R2eWS_qiJ3oznxQXCg` |
| Update a Template Comment Reply | PATCH | `/templates/{{owner}}/{{templateId}}/{{version}}/comments/{{comment}}/replies/{{reply}}` | `conn_mod_def::GMYpnOZu3t8::r7YsnZLoQ4GmIXni2iMxXA` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable Notification Status for an API | DELETE | `/apis/{{owner}}/{{api}}/.notifications` | `conn_mod_def::GMYpf5uG3c0::dXYGlbUFQ8SBRfSZBPLkqw` |
| Disable Notifications | DELETE | `/notifications` | `conn_mod_def::GMYpkfcrFsg::atgwXHUHSqCq7emQNBOCJg` |

### DomainNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notification Status for a Domain Spec | GET | `/domains/{{owner}}/{{domain}}/.notifications` | `conn_mod_def::GMYpibyVjz8::N4wIjKnvQCuwPF8d2T3uTw` |
| Disable Notification Status for a Domain Spec | DELETE | `/domains/{{owner}}/{{domain}}/.notifications` | `conn_mod_def::GMYpiB8D1_8::NREpc79mTfu6AQA3SaBnzA` |

### DomainPrivateSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Private Settings for a Domain Version | GET | `/domains/{{owner}}/{{domain}}/{{version}}/settings/private` | `conn_mod_def::GMYpi66UyA0::6HOqZFvMSuSOZYcKWiiI9A` |
| Update Private Settings for a Domain Version | PUT | `/domains/{{owner}}/{{domain}}/{{version}}/settings/private` | `conn_mod_def::GMYpi-zfdO4::HAUuvWANQKy-P8kU5uC3xw` |

### ApiSpecNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Notification Status for an API Spec | PUT | `/apis/{{owner}}/{{api}}/.notifications` | `conn_mod_def::GMYpfNH2wRA::tA1sEpvRQgm91Qpl1GBUjQ` |

### ApiReferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an API Reference for an API Version | POST | `/apis/{{owner}}/{{api}}/{{version}}/references` | `conn_mod_def::GMYpfOgEQ-Q::vXSKyqxwRV-eDHVXwvZTzw` |

### ApiCapabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Capabilities | GET | `/apis/{{owner}}/{{api}}/{{version}}/capabilities` | `conn_mod_def::GMYpfnSq9wc::pYSVyWP4QFaKhe8xLyhrow` |

This lists 90 of 114 actions. For anything not here, call `search_one_platform_actions` with platform `swagger-hub`. The full catalog is at https://www.withone.ai/knowledge/swagger-hub.

## When a call fails

The error comes from SwaggerHub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/swagger-hub

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
