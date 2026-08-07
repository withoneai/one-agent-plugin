---
name: productlane
description: Productlane is a customer support platform that unifies email, Slack, Teams, and live chat in one inbox, adds AI-assisted ticket resolution, and connects support workflows with Linear, knowledge bases, feedback portals, and public changelogs. Read and write Productlane data through One: threads, changelogs, companies, contacts, docsdrafts, docsarticles and more, 92 actions with real parameter documentation. Use whenever the user asks to look something up in Productlane, create or update a record there, or build code against the Productlane API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: productlane
  generated-from: one-knowledge-base
---

# Productlane through One

Productlane is a customer support platform that unifies email, Slack, Teams, and live chat in one inbox, adds AI-assisted ticket resolution, and connects support workflows with Linear, knowledge bases, feedback portals, and public changelogs.

One exposes Productlane through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `productlane` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Productlane is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Productlane account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Thread | GET | `/api/v2/threads/{{id}}` | `conn_mod_def::GMiHk7kmFU8::cu8R4buQQlq9wiM5IQ1lUg` |
| List Threads | GET | `/api/v2/threads` | `conn_mod_def::GMiHlERAMsI::AgCqeP_GR7upC1agqocWLw` |
| Create a Thread | POST | `/api/v2/threads` | `conn_mod_def::GMiHk8GlfXI::i0zoNmZ2R9qwtfQvKBV6kA` |
| Delete a Thread | DELETE | `/api/v2/threads/{{id}}` | `conn_mod_def::GMiHk7QAvv0::SGrdFBmKSoCCQC9yhXrmzQ` |
| Delete an Internal Comment from a Thread | DELETE | `/api/v2/threads/{{threadId}}/comments/{{commentId}}` | `conn_mod_def::GMiHk7fxl04::57j6IGN8TImfk3ojbCCnew` |
| Post an Internal Comment on a Thread | POST | `/api/v2/threads/{{threadId}}/comments` | `conn_mod_def::GMiHlDSxBQU::oN2U2e8ERX2u6TplHgviIA` |
| Update a Thread | PATCH | `/api/v2/threads/{{id}}` | `conn_mod_def::GMiHlNUsDyQ::N2IcGeN-Tz6176YdZZLEfQ` |

### Changelogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Changelog by ID | GET | `/api/v2/changelogs/{{id}}` | `conn_mod_def::GMiHjClxbI8::9pWovUoARCWi7Rc68UBgFA` |
| List Changelogs | GET | `/api/v2/changelogs` | `conn_mod_def::GMiHjKdNhCU::XwRs9w4yQjCWXDQzx19YOg` |
| Broadcast a Changelog | POST | `/api/v2/changelogs/{{id}}/broadcast` | `conn_mod_def::GMiHjI7dako::RPdcEJEkSd-f2ikoXWgWmQ` |
| Create a Changelog | POST | `/api/v2/changelogs` | `conn_mod_def::GMiHjBVaRHA::4JHR05mLQiaYmkezbBmauA` |
| Delete a Changelog | DELETE | `/api/v2/changelogs/{{id}}` | `conn_mod_def::GMiHjCZjQG4::YfrJk9CNTOGtxBEAuc5UVA` |
| Update a Changelog | PATCH | `/api/v2/changelogs/{{id}}` | `conn_mod_def::GMiHjI9ave0::RJfJ2UoBQHaDC-8om7yJoQ` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company by ID | GET | `/api/v2/companies/{{id}}` | `conn_mod_def::GMiHjRFZ11Y::kblfXc8aRKG6hIuKJP5vnA` |
| List Companies | GET | `/api/v2/companies` | `conn_mod_def::GMiHjSNdxiM::K9MDhyEoQsieTAoufyuaTA` |
| Create a Company | POST | `/api/v2/companies` | `conn_mod_def::GMiHjRZFjaM::JhEeEZ2jRWazM6Z0QTqONg` |
| Delete a Company | DELETE | `/api/v2/companies/{{id}}` | `conn_mod_def::GMiHjQqtff8::90quXIdyQlKa13whGN1_AA` |
| Merge a Company into Another | POST | `/api/v2/companies/{{id}}/merge` | `conn_mod_def::GMiHjZToluE::tOOHMdNaQp2GWUVnoj2TMA` |
| Update a Company | PATCH | `/api/v2/companies/{{id}}` | `conn_mod_def::GMiHjYSe4-Q::WjupOvRqSQO_4F-liS7Ozg` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Contact by ID | GET | `/api/v2/contacts/{{id}}` | `conn_mod_def::GMiHjf54aJo::Ypv4MbCAT7uJPtWgqpTu9g` |
| List Contacts | GET | `/api/v2/contacts` | `conn_mod_def::GMiHjhXlEQo::_ais8Fp-SHeMfwQ_unbOsQ` |
| Create Contact | POST | `/api/v2/contacts` | `conn_mod_def::GMiHjYjPdZA::v28QIYVRREq0Joo_1auFnA` |
| Delete a Contact | DELETE | `/api/v2/contacts/{{id}}` | `conn_mod_def::GMiHjZIfWE8::j9ZMTFg7Qzyin2a-xCiljw` |
| Update a Contact | PATCH | `/api/v2/contacts/{{id}}` | `conn_mod_def::GMiHjne_Fhg::rCGbmNBRQn-JAZm3mDimjw` |

### DocsDrafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Docs Draft | GET | `/api/v2/docs/drafts/{{id}}` | `conn_mod_def::GMiHj3F-Wig::qSSfWX3DTcOgCY6PHXlvMw` |
| List Docs Drafts | GET | `/api/v2/docs/drafts` | `conn_mod_def::GMiHj4l09mg::5pykamSkSZa_OhvAVzGBXg` |
| Accept a Docs Draft | POST | `/api/v2/docs/drafts/{{id}}/accept` | `conn_mod_def::GMiHjnKszU8::kve9pj4vSiWUrUW75d6j2Q` |
| Create a Docs Draft | POST | `/api/v2/docs/drafts` | `conn_mod_def::GMiHjnYT5Ag::w_YXm_mGTqKqCZCoIaVgNw` |
| Decline a Docs Draft | POST | `/api/v2/docs/drafts/{{id}}/decline` | `conn_mod_def::GMiHjwd4EVU::7Dauqxk7Rm6E7ufBNV4RXQ` |

### DocsArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Docs Article by ID | GET | `/api/v2/docs/articles/{{id}}` | `conn_mod_def::GMiHjtcp3oE::Mni6JSq4RPKWwk01FZlaig` |
| List Docs Articles | GET | `/api/v2/docs/articles` | `conn_mod_def::GMiHj4fFK6E::LFp_Fj1NSKiUnImVHtk2UA` |
| Create a Docs Article | POST | `/api/v2/docs/articles` | `conn_mod_def::GMiHjnmpG9k::qvgeG0tHQIGdFs1D8tBnag` |
| Delete a Docs Article | DELETE | `/api/v2/docs/articles/{{id}}` | `conn_mod_def::GMiHjtqcqrw::KEHZ7T0HRjm4nnUC-SxGMA` |
| Update a Docs Article | PATCH | `/api/v2/docs/articles/{{id}}` | `conn_mod_def::GMiHj-1M-OM::lu79w47QSUKur6diIQHPFw` |

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Issue | GET | `/api/v2/issues/{{id}}` | `conn_mod_def::GMiHj-2_H3M::2_StDYdhRReGI4aXrQm4kw` |
| List Issues | GET | `/api/v2/issues` | `conn_mod_def::GMiHkG48lT8::JuxP_V0ARlGPmDEk0MuFdQ` |
| Create an Issue | POST | `/api/v2/issues` | `conn_mod_def::GMiHj_d2Tgc::_ZsvZd5rR5-uLfmLogOwNg` |
| Delete an Issue | DELETE | `/api/v2/issues/{{id}}` | `conn_mod_def::GMiHj-nJxn4::OgbcmEC3SN6k2c0k2bwoyA` |
| Update an Issue | PATCH | `/api/v2/issues/{{id}}` | `conn_mod_def::GMiHkFvW7mU::OPrWEdHyQ06nQx24cNnjFw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID | GET | `/api/v2/projects/{{id}}` | `conn_mod_def::GMiHkbzZU9M::7dLDagHaQaiVYFUbxNu0qQ` |
| List Projects | GET | `/api/v2/projects` | `conn_mod_def::GMiHke5BOgQ::fwzexn5dTi2_ABwiKVkiww` |
| Create a Project | POST | `/api/v2/projects` | `conn_mod_def::GMiHkTlcr4o::SJvyFOj4T3ODNM3vXDETsQ` |
| Delete a Project | DELETE | `/api/v2/projects/{{id}}` | `conn_mod_def::GMiHkUQFbuI::rXdePjsfTFuJQXZIkr6ZPQ` |
| Update a Project | PATCH | `/api/v2/projects/{{id}}` | `conn_mod_def::GMiHkbTygqI::42K1ruPMSKSVkpbX299vdQ` |

### Snippets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Snippet by ID | GET | `/api/v2/snippets/{{id}}` | `conn_mod_def::GMiHklD3rlc::weZfpZ4GRKaZDjO8x6V4mQ` |
| List Snippets | GET | `/api/v2/snippets` | `conn_mod_def::GMiHklyad9U::EEvniBR9R8qx0b5VwsW4yw` |
| Create a Reply Snippet | POST | `/api/v2/snippets` | `conn_mod_def::GMiHkcghODk::aLsnX9KHStaD2DuJZKitaQ` |
| Delete a Snippet | DELETE | `/api/v2/snippets/{{id}}` | `conn_mod_def::GMiHkkrhEqA::yGBdwl9nQ5iWvkIq_Lgg6g` |
| Update a Snippet | PATCH | `/api/v2/snippets/{{id}}` | `conn_mod_def::GMiHklKpSt4::vPnfnFQjRFqr2mNoy8HxOA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag by ID | GET | `/api/v2/tags/{{id}}` | `conn_mod_def::GMiHkrtSNag::QMoArjNURemozJWHvQ1UFA` |
| List Tags | GET | `/api/v2/tags` | `conn_mod_def::GMiHk0irZLw::hxP3bfsMTwSXKVjNkAp0Xw` |
| Create Tag | POST | `/api/v2/tags` | `conn_mod_def::GMiHksFWJOs::AVwas32UTBeb7VhM71VGAw` |
| Delete a Tag | DELETE | `/api/v2/tags/{{id}}` | `conn_mod_def::GMiHkrUezZA::QJu1uT8kS2iSO7B1XmTCNQ` |
| Update a Tag | PATCH | `/api/v2/tags/{{id}}` | `conn_mod_def::GMiHkyfTNvI::tyRxAiIRTQGnGbpe-olRJA` |

### TagGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tag Group by ID | GET | `/api/v2/tags/groups/{{id}}` | `conn_mod_def::GMiHkzyLZnQ::h4gRZ7ulTn2U_68S0De1gg` |
| List Tag Groups | GET | `/api/v2/tags/groups` | `conn_mod_def::GMiHkzP83Gw::ib9OVEm4TmKxc9IdUm2_lQ` |
| Create Tag Group | POST | `/api/v2/tags/groups` | `conn_mod_def::GMiHksXGhxU::EpD28ss0RgqsyjwEFuECDA` |
| Delete a Tag Group | DELETE | `/api/v2/tags/groups/{{id}}` | `conn_mod_def::GMiHksFGcBM::BjgPzS51StSRDVE8Sy-avQ` |
| Update a Tag Group | PATCH | `/api/v2/tags/groups/{{id}}` | `conn_mod_def::GMiHkyqUphM::gEnlvTJpQhaKBVUpO_DhmA` |

### ChangelogTags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Changelog Tags | GET | `/api/v2/changelog-tags` | `conn_mod_def::GMiHjIgWhcQ::YTGAwNlURSm_jsHQekq4rg` |
| Create a Changelog Tag | POST | `/api/v2/changelog-tags` | `conn_mod_def::GMiHjAsIF4o::O_o0nSvVR6GlGWkG4IB3aw` |
| Delete a Changelog Tag | DELETE | `/api/v2/changelog-tags/{{id}}` | `conn_mod_def::GMiHjBX5LFk::jeELo67jRwKgz5cxeKXxHg` |
| Update a Changelog Tag | PATCH | `/api/v2/changelog-tags/{{id}}` | `conn_mod_def::GMiHjJpWm9g::w3s7Xc0-TmKxt3U6K8Yc3Q` |

### DocsGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Docs Groups | GET | `/api/v2/docs/groups` | `conn_mod_def::GMiHj3ZSsKk::7O0uN2yRT32QEjU0y9URZQ` |
| Create a Docs Group | POST | `/api/v2/docs/groups` | `conn_mod_def::GMiHjvJ1uMU::ZFvf__ZmQMCTGUhsJW8Vww` |
| Delete a Docs Group | DELETE | `/api/v2/docs/groups/{{id}}` | `conn_mod_def::GMiHjuL1pxY::5D68tiHJQj6wFF99Vo8ZVw` |
| Update a Docs Group | PATCH | `/api/v2/docs/groups/{{id}}` | `conn_mod_def::GMiHj_B_bGY::B8Qe9Tr0RfWd5a0cIifZNw` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Members | GET | `/api/v2/members` | `conn_mod_def::GMiHkNGlwf8::0uOusoAGRNWDmCtFnBVIrw` |
| Change a Member's Role | PATCH | `/api/v2/members/{{userId}}` | `conn_mod_def::GMiHkGGsKsc::B7NPdQZFTd6hwGzcuo1xfQ` |
| Invite a Member | POST | `/api/v2/members/invites` | `conn_mod_def::GMiHkMzJxn8::_pNKpMgzS4-cn-l-aH-h9w` |
| Remove a Workspace Member | DELETE | `/api/v2/members/{{userId}}` | `conn_mod_def::GMiHkNbSgS4::O2FNvMaYTgqkyjlauZ3RWw` |

### BlockedSenders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Blocked Senders | GET | `/api/v2/contacts/blocked-senders` | `conn_mod_def::GMiHjgXp-Rw::inBrbGY5Rl2uKWl0Kmid5w` |
| Block a Sender | POST | `/api/v2/contacts/blocked-senders` | `conn_mod_def::GMiHjYnzKAw::wi9P1CVTSDuWOzNAVnGlEQ` |
| Unblock a Sender | DELETE | `/api/v2/contacts/blocked-senders/{{id}}` | `conn_mod_def::GMiHjnF7IqE::I7K80QttScePcbHSPBV1Ww` |

### ThreadMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Thread Messages | GET | `/api/v2/threads/{{threadId}}/messages` | `conn_mod_def::GMiHlF9N1xA::NtBaxhydRUOWmry0n9uqNQ` |
| Send a Message on a Thread | POST | `/api/v2/threads/{{threadId}}/messages` | `conn_mod_def::GMiHlDPV7_o::8Qt2jAQlT8uc1ZdBvok38w` |

### LinearCustomerOptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Linear Customer Options | GET | `/api/v2/companies/linear-options` | `conn_mod_def::GMiHjQwisyU::TCPQj-QtTF-uOGy5f7bCUA` |

### ContactsProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact's Projects | GET | `/api/v2/contacts/{{id}}/projects` | `conn_mod_def::GMiHjfukhyc::7raI6dNwQOm5u1wN6SNVjw` |

### ContactsIssues

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Contact's Issues | GET | `/api/v2/contacts/{{id}}/issues` | `conn_mod_def::GMiHjf0gv8g::bBiELReCTYifO6iK_iwxHA` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Move Articles to a Group | POST | `/api/v2/docs/articles/move` | `conn_mod_def::GMiHj3eYRzE::rWSN5Ns9ReSMqx4jfC0XHg` |

### IssuesWorkflowStates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workflow States for Issues | GET | `/api/v2/issues/workflow-states` | `conn_mod_def::GMiHkF93AC0::LrL_341OQke0URfgliURAQ` |

### WorkspaceInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Pending Workspace Invite | DELETE | `/api/v2/members/invites/{{id}}` | `conn_mod_def::GMiHkGco8qc::RekymBDPQ1CVCUWGFCWmpA` |

### SignedInUserProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Profile | GET | `/api/v2/me` | `conn_mod_def::GMiHkNCpR1w::FAnMqlskRMa4BaMVKiokpQ` |

### MembersInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pending Workspace Invites | GET | `/api/v2/members/invites` | `conn_mod_def::GMiHkNEvL00::UlSFnuleT2ya6Pl4hZvjPg` |

### PortalInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List Portal Instances | GET | `/api/v2/portal/instances` | `conn_mod_def::GMiHkTWS_7w::XOBnmAuBTtGJt-r6QWmvTg` |

### CustomerPortalView

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Customer Portal View for a Contact | GET | `/api/v2/portal/customer-portal` | `conn_mod_def::GMiHkT3Dcxc::wVreC7ANSkKnqIcXDUSBMg` |

### PublicRoadmap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Public Roadmap | GET | `/api/v2/portal/roadmap` | `conn_mod_def::GMiHkVM4n9A::kgxS5ZGbQKyuHZ0wQnBw9g` |

### ProjectStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Statuses | GET | `/api/v2/projects/statuses` | `conn_mod_def::GMiHkblLUXw::obk-Ay9lSlmkF6Y7zGYi0w` |

### SnippetFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Snippet Folders | GET | `/api/v2/snippets/folders` | `conn_mod_def::GMiHkl5kUT0::mcFAC6NRQjqoS063sCLV1g` |

### CustomerNeeds

| Action | Method | Path | Action id |
|---|---|---|---|
| Link a Thread to Customer Needs | POST | `/api/v2/threads/{{threadId}}/customer-needs` | `conn_mod_def::GMiHk7axYQ4::o6bhHzJTQRyCcUgLENXsfA` |

This lists 90 of 92 actions. For anything not here, call `search_one_platform_actions` with platform `productlane`. The full catalog is at https://www.withone.ai/knowledge/productlane.

## When a call fails

The error comes from Productlane, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/productlane

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
