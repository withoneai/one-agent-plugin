---
name: linear
description: Linear is a modern issue tracking and project management tool designed for fast-moving software teams. It enables efficient bug tracking, sprint planning, and team collaboration. Read and write Linear data through One: integrations, issues, attachments, releases, projects, notifications and more, 488 actions with real parameter documentation. Use whenever the user asks to look something up in Linear, create or update a record there, or build code against the Linear API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: linear
  generated-from: one-knowledge-base
---

# Linear through One

Linear is a modern issue tracking and project management tool designed for fast-moving software teams. It enables efficient bug tracking, sprint planning, and team collaboration.

One exposes Linear through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `linear` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Linear is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Linear account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive an Integration | POST | `/graphql` | `conn_mod_def::GJ4vEXzTRzg::MNLfXfVlTomDzVtyxYbyjg` |
| Check Whether an Integration Has Required Scopes | POST | `/graphql` | `conn_mod_def::GJ4vIpvGVWE::BJ58s_RvT7Oin6VqxcrihA` |
| Connect a Slack Channel for a Project (Slack Project Post Integration) | POST | `/graphql` | `conn_mod_def::GJ4vO0i7yqY::AJxnEiImRCOOTj-MdSduBA` |
| Connect Airbyte Integration | POST | `/graphql` | `conn_mod_def::GJ4vHaYsuuc::8Rs4725iSGWPM4N1v1YxVw` |
| Connect an Organization to Opsgenie (Integration) | POST | `/graphql` | `conn_mod_def::GJ4vII2cFms::iAGVeouuSqeVCX4uMq2gHQ` |
| Connect GitHub App Integration (Organization) | POST | `/graphql` | `conn_mod_def::GJ4vHiOWNWM::RBI-uAzeTeOg1SR-mgvTCQ` |
| Connect GitHub Enterprise Server Integration | POST | `/graphql` | `conn_mod_def::GJ4vGdjNSCU::jbMLC0-0TzW_PcAXgVRmYw` |
| Connect GitHub Import App Integration | POST | `/graphql` | `conn_mod_def::GJ4vHmENHag::XTilvJe_Sn2kzsI47xB58w` |
| Connect GitHub Personal Integration (OAuth) | POST | `/graphql` | `conn_mod_def::GJ4vHiGn0WI::Q8lYc_5FQ3uyJfRltiAUfw` |
| Connect GitLab Integration (Organization) | POST | `/graphql` | `conn_mod_def::GJ4vGoEldjE::kWGCwslRTC26zeGmRhT3zg` |
| Connect Google Calendar (Personal) Integration | POST | `/graphql` | `conn_mod_def::GJ4vHtUMYwc::KVNK1Pq-QuKnLmnx3xRajw` |
| Connect Jira (Personal) Integration | POST | `/graphql` | `conn_mod_def::GJ4vH6D1N0c::qSaVsnUgTOuOfTdkb3B3Ag` |

44 more Integrations actions are available through search.

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Label to an Issue | POST | `/graphql` | `conn_mod_def::GJ4vI8YkNzU::LwjRAjZoTfmqwmEScN8c5g` |
| Archive an Issue | POST | `/graphql` | `conn_mod_def::GJ4vJIKHCUg::i-JPx-d4RS2ALdiNeC6kFw` |
| Batch Create Issues | POST | `/graphql` | `conn_mod_def::GJ4vJcgpP_s::vT-cbsvKT6KUw91ZqmwV-Q` |
| Batch Update Issues | POST | `/graphql` | `conn_mod_def::GJ4vJpYpkiQ::H3IC7uX8TYm_RrHwOrEtrw` |
| Create an Issue | POST | `/graphql` | `conn_mod_def::GJ4vJJJqwWo::nUMJLIhORKaqb57y36SEjw` |
| Delete (Trash) an Issue | POST | `/graphql` | `conn_mod_def::GJ4vJIrCIcU::CmkOQRGISL-mGaWXtfu3ZA` |
| Find an Issue by VCS Branch Name | POST | `/graphql` | `conn_mod_def::GJ4vKm23ZeQ::zQ-bCtkoRkuE_f-n4jlHdg` |
| Get an Issue by Attachment ID (attachmentIssue) [DEPRECATED] | POST | `/graphql` | `conn_mod_def::GJ4vCd2G5UY::fDjY2_6_TEWf7tz9R3TGhw` |
| Get an Issue by ID (GraphQL) | POST | `/graphql` | `conn_mod_def::GJ4vJBsbSx8::7RiJfIZHTIyScYc6ZYTbEA` |
| List Issues | POST | `/graphql` | `conn_mod_def::GJ4vJTdCQPY::f4IhKVnuTv6Us2d-GwWvCw` |
| Remove a Label from an Issue | POST | `/graphql` | `conn_mod_def::GJ4vJUN9b_w::x8bdmqoNQq-eZUM4MtMkVw` |
| Search Issues | POST | `/graphql` | `conn_mod_def::GJ4vKfZsYCs::q0BVB5glS7iR6FBzzhV2pw` |

7 more Issues actions are available through search.

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Begin Syncing a Slack Message Attachment to an Issue Comment Thread | POST | `/graphql` | `conn_mod_def::GJ4vCVlKJeY::tQOXL-WHQCW6z5L2dRTOmQ` |
| Delete an Attachment | POST | `/graphql` | `conn_mod_def::GJ4vD76kVVA::egtTOqsPSSuqHWH2QLuCPQ` |
| Get an Attachment (by ID) | POST | `/graphql` | `conn_mod_def::GJ4vB4ykU4A::hLzD_eXtRHe-okDEePdjJA` |
| Link a Discord Message Attachment to an Issue | POST | `/graphql` | `conn_mod_def::GJ4vCBHhZCk::Y8A5aB--R6C4rojXTDa2tA` |
| Link a GitHub Issue to a Linear Issue | POST | `/graphql` | `conn_mod_def::GJ4vCA0opXk::qpqMdDVNSzC1nCgdGh9bzg` |
| Link a Jira Issue to a Linear Issue (Create Jira Attachment) | POST | `/graphql` | `conn_mod_def::GJ4vCOHlqN0::Ej2hJvDFQmqYmcXpzHXUww` |
| Link a Salesforce Case Attachment to an Issue | POST | `/graphql` | `conn_mod_def::GJ4vCIc0QIM::CQ7HUSjVSqWVjSHqqDle2A` |
| Link a Slack Message to an Issue (Create Slack Attachment) | POST | `/graphql` | `conn_mod_def::GJ4vCIvtVM8::EMeUPBjORgmdKcqPC0ZO9Q` |
| Link a URL Attachment to an Issue | POST | `/graphql` | `conn_mod_def::GJ4vCINO-rY::cjkAc19SRWKbMLIVVE-I0A` |
| Link Front Conversation Attachment to Issue | POST | `/graphql` | `conn_mod_def::GJ4vGT5MMQs::gdC1z9EyQYyytkzo3ahQ8w` |
| Link GitHub Pull Request to Issue (Create Rich Attachment) | POST | `/graphql` | `conn_mod_def::GJ4vCA7IShE::VUxXRc3YTueREmo9aGDM-A` |
| Link GitLab Merge Request Attachment to Issue | POST | `/graphql` | `conn_mod_def::GJ4vCAxlOm0::_MVxAXHSRQSn8EjTsP3brw` |

5 more Attachments actions are available through search.

### Releases

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Release | POST | `/graphql` | `conn_mod_def::GJ4vNYTrZv0::aMyBOvpmSAmI0QvgiCCEhA` |
| Complete a Release by Access Key | POST | `/graphql` | `conn_mod_def::GJ4vNYbN61A::yM-deTUjRWiB4Aye7TQ_hg` |
| Complete a Release in a Pipeline | POST | `/graphql` | `conn_mod_def::GJ4vNZFuhwU::iUrxn7OBQeeK5WNVzAXhSg` |
| Create a Release | POST | `/graphql` | `conn_mod_def::GJ4vNjedpJE::rgJSCk8cTUCLK_vGkmgITw` |
| Delete (Trash) a Release | POST | `/graphql` | `conn_mod_def::GJ4vNgU6vo8::D1-EyWqjTGSFaMr-Ekt9Ig` |
| Get a Release (by ID) | POST | `/graphql` | `conn_mod_def::GJ4vNYdQUdk::5PaIHHp9SBKm_OwKFpd3mQ` |
| Get Latest Release by Access Key | POST | `/graphql` | `conn_mod_def::GJ4vKmllTE8::pBo7mtzRTGiY5YhkkTF_WA` |
| List Releases (GraphQL) | POST | `/graphql` | `conn_mod_def::GJ4vNgeL8Bs::YokS_K7KTNuAc1GxNdZMug` |
| Search Releases | POST | `/graphql` | `conn_mod_def::GJ4vOE9Gbrk::I4BOM4hfSv-1L5sd5Em59Q` |
| Sync Release Data (Alpha) | POST | `/graphql` | `conn_mod_def::GJ4vNg0hQwg::IVIN0pBUQgy5mJdauOzekA` |
| Sync Release Data by Access Key | POST | `/graphql` | `conn_mod_def::GJ4vNggZowo::Cwul2q-gQk2XyZGOpfxnLg` |
| Unarchive a Release | POST | `/graphql` | `conn_mod_def::GJ4vNqSmdi4::GE95x8BvTvSpmlxiUIeopQ` |

3 more Releases actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Label to a Project | POST | `/graphql` | `conn_mod_def::GJ4vL0TTnqw::vAxXIjKRTcKZL3fuEpTrDw` |
| Archive a Project (Deprecated) | POST | `/graphql` | `conn_mod_def::GJ4vL0RcaMo::rKRoCO6hRdC7UgfOG9ds1A` |
| Create a Project | POST | `/graphql` | `conn_mod_def::GJ4vLz4O06Y::TMA151DUS3W7aGvD2Pe0DA` |
| Delete (Trash) a Project | POST | `/graphql` | `conn_mod_def::GJ4vL5zqT5Q::2vm7B9tQSMiPkir3-ksHJQ` |
| Disable External Sync for a Project | POST | `/graphql` | `conn_mod_def::GJ4vMArNw-4::pb4QGD_lT528f5S4gtXsbg` |
| Get a Project | POST | `/graphql` | `conn_mod_def::GJ4vL3NEZUQ::0NKBYgRJSeS-U35MGf96-g` |
| List Projects | POST | `/graphql` | `conn_mod_def::GJ4vMBSrKJo::YJPEPOfJQ76eTtZUfpjyUg` |
| Reassign Projects From One Status to Another | POST | `/graphql` | `conn_mod_def::GJ4vO1XylEU::j7eGnZwiSQ29hPaCCV6PjQ` |
| Remove a Label from a Project | POST | `/graphql` | `conn_mod_def::GJ4vMBT2Qxk::7ExED3IgQIupG-Sne-TDSQ` |
| Search Projects | POST | `/graphql` | `conn_mod_def::GJ4vMri_snc::t7mWurSzQkijF8WaVYf0WQ` |
| Unarchive a Project | POST | `/graphql` | `conn_mod_def::GJ4vMAlt8Po::qwh128JbRIij2-7PtFPBLw` |
| Update a Project | POST | `/graphql` | `conn_mod_def::GJ4vMIxn3RY::XfpxdsXNS9isj8qzbxlwvQ` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Notification | POST | `/graphql` | `conn_mod_def::GJ4vK5KRSeA::rGbM5jLsQE26EvMC1QPqqg` |
| Archive All Related Notifications for an Entity | POST | `/graphql` | `conn_mod_def::GJ4vK5DMK_c::V13onWbzS6ehKFcHgK0LiA` |
| Get a Notification by ID | POST | `/graphql` | `conn_mod_def::GJ4vKyGmgRw::VbJnRkubTme4_Fm41ONFWQ` |
| Get Unread Notifications Count | POST | `/graphql` | `conn_mod_def::GJ4vLMTnOuM::nLZc_X-oSjWHokcvTPP6QA` |
| List Notifications (GraphQL) | POST | `/graphql` | `conn_mod_def::GJ4vK5EV3Go::jvSvCXj9TUCTd1XW856a0g` |
| Mark a Notification Thread Unread (Including Related Notifications) | POST | `/graphql` | `conn_mod_def::GJ4vLFhnTsg::DpC1NHZMSmanjAP26c78fQ` |
| Mark Notification (and Related) as Read | POST | `/graphql` | `conn_mod_def::GJ4vLDohpLY::5x5gsfVUTgG1RyWqJRiIaw` |
| Snooze a Notification and All Related Notifications | POST | `/graphql` | `conn_mod_def::GJ4vK_93N8A::2M0smzv7TsmnAvd3P4yRZg` |
| Unarchive a Notification | POST | `/graphql` | `conn_mod_def::GJ4vK5Ul8jU::g-JTA0gxTbaIDpayMjm3nA` |
| Unsnooze a Notification and All Related Notifications | POST | `/graphql` | `conn_mod_def::GJ4vLA5BI0Q::_600e5RCSvOPF34WWcAGsw` |
| Update a Notification | POST | `/graphql` | `conn_mod_def::GJ4vK491AYA::kg36C2IqTfSC0eB-cE9GZw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Change a User’s Role | POST | `/graphql` | `conn_mod_def::GJ4vP-sqFBQ::IFDL6njlQB2tpR2o2I0nZA` |
| Connect a User's Discord Account (OAuth2) | POST | `/graphql` | `conn_mod_def::GJ4vP1QyRxQ::R1NWxPxGS6ORDzVIfzETtQ` |
| Disconnect External User | POST | `/graphql` | `conn_mod_def::GJ4vP_RBtgY::HbPCrn3BRuilYmhJUpg9rQ` |
| Get a User | POST | `/graphql` | `conn_mod_def::GJ4vP09ECy0::4zmTRXydR-2coI0DB2ApLQ` |
| Get the Authenticated Viewer (User) | POST | `/graphql` | `conn_mod_def::GJ4vQlYGZR0::7JQcTVTBStObkNhtLttl3w` |
| List Organization Users (GraphQL) | POST | `/graphql` | `conn_mod_def::GJ4vP-tDLa8::E3Djgu2VRP69htWd30NCjw` |
| Revoke All Sessions for a User (Admin) | POST | `/graphql` | `conn_mod_def::GJ4vP-3hmxM::z2MeftOeQMSoSspz7R7qPw` |
| Suspend a User (Admin) | POST | `/graphql` | `conn_mod_def::GJ4vQJT3Xas::YwuQjK1kRtC6hSoeFNHtkg` |
| Unlink a Guest User From Their Identity Provider (Admin) | POST | `/graphql` | `conn_mod_def::GJ4vQLirJ5w::KmoahcyFRTu4Igff-a1tkg` |
| Unsuspend a User | POST | `/graphql` | `conn_mod_def::GJ4vQGYXXvI::13sEoPyNSe6Eyp2BM78InA` |
| Update a User | POST | `/graphql` | `conn_mod_def::GJ4vP_drGhU::r47Q5E0PT3egodp4BUUHCA` |

### IssueImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Check an Issue Import's Sync Eligibility | POST | `/graphql` | `conn_mod_def::GJ4vJ7wFcgI::UHDAiKAVTNqlKQkdznGghw` |
| Create a GitHub Issue Import Job | POST | `/graphql` | `conn_mod_def::GJ4vJxNGa7M::CVS2PEp-QSOITtPk3dEAZw` |
| Create Asana Issue Import Job | POST | `/graphql` | `conn_mod_def::GJ4vJkuF9N8::VJW4ZY8ZQ4CLYyvfPpHK9A` |
| Create Jira CSV Issue Import Job | POST | `/graphql` | `conn_mod_def::GJ4vJkpjrhM::KH6B9QQ6Qz-pwJ10jL2SqA` |
| Create Jira Issue Import Job | POST | `/graphql` | `conn_mod_def::GJ4vJw3VCx4::Ba-Lk4_aTTetUC9rzgEc8A` |
| Create Linear-to-Linear Issue Import Job (Linear V2) | POST | `/graphql` | `conn_mod_def::GJ4vJ0Z5pz4::k2VgxxBuQiG45xH6tLQqQQ` |
| Create Shortcut (Clubhouse) Issue Import Job | POST | `/graphql` | `conn_mod_def::GJ4vJkwNyQM::LjgFsQu4QXqGUF1cEB7cnQ` |
| Process an Issue Import (Kick Off Import Processing) | POST | `/graphql` | `conn_mod_def::GJ4vJ00Mg_Q::saxTelf6TcGUyVDJUvzEaw` |

1 more IssueImports actions are available through search.

This lists 90 of 488 actions. For anything not here, call `search_one_platform_actions` with platform `linear`. The full catalog is at https://www.withone.ai/knowledge/linear.

## When a call fails

The error comes from Linear, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/linear

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
