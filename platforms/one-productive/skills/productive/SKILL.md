---
name: productive
description: Productive is an all-in-one agency management platform that streamlines project delivery, resource planning, time tracking, budgeting, and profitability reporting—empowering agencies and consultancies to operate efficiently and grow profitably. Read and write Productive data through One: expenses, deals, invoices, comments, memberships, prices and more, 544 actions with real parameter documentation. Use whenever the user asks to look something up in Productive, create or update a record there, or build code against the Productive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: productive
  generated-from: one-knowledge-base
---

# Productive through One

Productive is an all-in-one agency management platform that streamlines project delivery, resource planning, time tracking, budgeting, and profitability reporting—empowering agencies and consultancies to operate efficiently and grow profitably.

One exposes Productive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `productive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Productive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Productive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Expenses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Expense | GET | `/api/v2/expenses/{{id}}` | `conn_mod_def::GJ6KIVevtvk::HCITn4NuSDi53wId7zP8Gg` |
| List Expenses | GET | `/api/v2/expenses` | `conn_mod_def::GJ6KIDMVWA4::4Y6ojjpaS2ueHTpqLmfPsg` |
| Delete an Expense | DELETE | `/api/v2/expenses/{{id}}` | `conn_mod_def::GJ6KHxtWg-A::Np9p1D67Rd2rcYTrFJ9Ryg` |
| Delete Expenses (Bulk) | DELETE | `/expenses` | `conn_mod_def::GJ6KIeqC0LI::sqObtz8QRiGRkQuD0DX6UA` |
| Export an Expense | PATCH | `/api/v2/expenses/{{id}}/export` | `conn_mod_def::GJ6KHu4d_J8::3e3n6jFISBO_OqJegjxG_g` |
| Unapprove an Expense | PATCH | `/api/v2/expenses/{{id}}/unapprove` | `conn_mod_def::GJ6KILNfbqc::WuSiisJmR-KOmTTHTqRFSQ` |
| Update an Expense | PATCH | `/api/v2/expenses/{{id}}` | `conn_mod_def::GJ6KIMipKOU::AtlMxidjSCmYrKGQ7EQYjg` |
| Update an Expense’s Export Status (Xero) | PATCH | `/api/v2/expenses/{{id}}/export_update` | `conn_mod_def::GJ6KIPEKhkQ::gNwLq8A-T2iRThkaE9Gj1w` |

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Deals (and Budgets) | GET | `/api/v2/deals` | `conn_mod_def::GJ6KFwMnwVU::ZMN7QkloSy-Znpt1XNX82g` |
| Close a Deal | PATCH | `/api/v2/deals/{{id}}/close` | `conn_mod_def::GJ6KFU6CyCs::PHTEMlM0SviKFHR33tFxdA` |
| Copy a Deal | POST | `/api/v2/deals/copy` | `conn_mod_def::GJ6KFRDW52s::vrC0N-TTSz2zFbJi54vVHw` |
| Create a Deal | POST | `/deals` | `conn_mod_def::GJ6KFRrW3B0::L7cXUVlQTnSjD-9GZo2R-g` |
| Create a Deal Budget From an Origin Deal | POST | `/deals/create_from_origin` | `conn_mod_def::GJ6KFSoxW4A::GLqRAt7GSJyAt5PsloCQRQ` |
| Delete a Deal | DELETE | `/api/v2/deals/{{id}}` | `conn_mod_def::GJ6KFQrhLsA::VXSImm7iSgyOUcmBxNvZHA` |
| Open a Deal (Reopen Budget) for a Deal | PATCH | `/api/v2/deals/{{id}}/open` | `conn_mod_def::GJ6KFc80Luo::bx8jVRBQS8WpswiQvyFGBw` |
| Update a Deal | PATCH | `/api/v2/deals/{{id}}` | `conn_mod_def::GJ6KFfwQS6Q::cX8YtUTlSiCqQS_549uElQ` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invoice | GET | `/api/v2/invoices/{{id}}` | `conn_mod_def::GJ6KK5M_jrE::1tWsjQ0_R9yFn1LNZGoQzA` |
| List Invoices | GET | `/api/v2/invoices` | `conn_mod_def::GJ6KLCAMJgs::9nbj5Y7tT9uMDpd-R__MQQ` |
| Preview an Invoice’s Generated Line Items | GET | `/api/v2/invoices/{{id}}/preview` | `conn_mod_def::GJ6KLPNN5Ck::nAKQjVNvRwSOY-i7Ah5vwA` |
| Create an Invoice | POST | `/invoices` | `conn_mod_def::GJ6KKtowkt4::QQ9zW28yT7SZuNcgnE_AQg` |
| Finalize an Invoice | PATCH | `/api/v2/invoices/{{id}}/finalize` | `conn_mod_def::GJ6KK8vRYf8::B4Yb_qPZQMWOPJfei-9oZw` |
| Send an Invoice Email | PATCH | `/api/v2/invoices/{{id}}/send` | `conn_mod_def::GJ6KLJtG-AM::XKGAXLsxQOyK9odZfoxhcA` |
| Update an Exported Invoice | PATCH | `/api/v2/invoices/{{id}}/export_update` | `conn_mod_def::GJ6KLK8cYfA::xxzk56lsR8W0_BP1hcnmWA` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment | GET | `/api/v2/comments/{{id}}` | `conn_mod_def::GJ6KCBUwwlE::CNM7loIaT3uFqU2HPyFQqA` |
| Add a Reaction to a Comment | PATCH | `/api/v2/comments/{{id}}/add_reaction` | `conn_mod_def::GJ6KB5zieVQ::0Id-N5XSRLKx3409292czg` |
| Create a Comment | POST | `/comments` | `conn_mod_def::GJ6KB5XRCYw::NxZgScwmQX206s2iQ4IzbQ` |
| Delete a Comment | DELETE | `/api/v2/comments/{{id}}` | `conn_mod_def::GJ6KB5gzSkI::xfEaszGbRROVolXnhhTpkQ` |
| Pin a Comment | PATCH | `/api/v2/comments/{{id}}/pin` | `conn_mod_def::GJ6KCBV0pvM::fo6AYWEDSECc7PQ2Eaf63w` |
| Remove a Reaction from a Comment | PATCH | `/api/v2/comments/{{id}}/remove_reaction` | `conn_mod_def::GJ6KCBREyT4::4rbmoolSTtaq7r1om3Ndmg` |
| Update a Comment | PATCH | `/api/v2/comments/{{id}}` | `conn_mod_def::GJ6KCNBj75s::xAns0bSlRiK_5gceo_TJNw` |

### Memberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Membership | GET | `/api/v2/memberships/{{id}}` | `conn_mod_def::GJ6KL2a3YVE::an1WC6vjT5KQO1e094aLmg` |
| List Memberships | GET | `/api/v2/memberships` | `conn_mod_def::GJ6KL5Ru1Nw::nnSnQTMbSyqTUfLUcuylyQ` |
| Create a Membership | POST | `/memberships` | `conn_mod_def::GJ6KL8GrCvs::U2b7CR04TSGu6q3dqpud9A` |
| Delete a Membership | DELETE | `/api/v2/memberships/{{id}}` | `conn_mod_def::GJ6KL3LJ2k8::_FfZ8-u7Sy27t6MZTkAbew` |
| Update a Membership | PATCH | `/api/v2/memberships/{{membershipId}}` | `conn_mod_def::GJ6KL6UBiJU::kvEfjRNtTKm1aY0x7P4Ksw` |

### Prices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Price | GET | `/api/v2/prices/{{id}}` | `conn_mod_def::GJ6KPKZTsZc::gVQfqEosQfqW2eOfHoRKFw` |
| List Prices | GET | `/api/v2/prices` | `conn_mod_def::GJ6KPL7fb3Q::vdwNnTJ4TMK9xvMPbwn3DA` |
| Create a Price | POST | `/api/v2/prices` | `conn_mod_def::GJ6KPLf0QmE::n3sSUbjVSyqNz6tEV_pu4Q` |
| Delete a Price | DELETE | `/api/v2/prices/{{id}}` | `conn_mod_def::GJ6KPNzHJ3c::XrzuATPJRsKZJaWCnMhxjQ` |
| Update a Price | PATCH | `/api/v2/prices/{{id}}` | `conn_mod_def::GJ6KPK88uS0::piOjeSlaRKqjV8H_uLOD8g` |

### ProjectAssignments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Assignment | GET | `/api/v2/project_assignments/{{id}}` | `conn_mod_def::GJ6KPVKLsLc::M0a3BtydT2qhvTmgzfyE3Q` |
| List Project Assignments | GET | `/project_assignments` | `conn_mod_def::GJ6KPZGsRZo::7xVK4ao4T7OW4alX3xJkbA` |
| Create a Project Assignment | POST | `/project_assignments` | `conn_mod_def::GJ6KPVfBmx4::c40KC5xjQ6Cyb9hwAks6rQ` |
| Delete a Project Assignment | DELETE | `/api/v2/project_assignments/{{id}}` | `conn_mod_def::GJ6KPVc6E_o::LF8EjOw6TYewDYzTBx1DSQ` |
| Update a Project Assignment | PATCH | `/api/v2/project_assignments/{{id}}` | `conn_mod_def::GJ6KPVPlqSg::35h9de5OR6aRefWotLM11w` |

### Filters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Filter | GET | `/api/v2/filters/{{id}}` | `conn_mod_def::GJ6KImm6lgQ::OBkP7X3QTKOXh822QQlGBA` |
| List Filters | GET | `/api/v2/filters` | `conn_mod_def::GJ6KI6QOmyk::dYAzzJc8S9a3V_53eB0p_w` |
| Create a Filter | POST | `/api/v2/filters` | `conn_mod_def::GJ6KIm1l2Ls::Hz796SpqQA6U9Jo-xI088w` |
| Delete a Filter | DELETE | `/api/v2/filters/{{id}}` | `conn_mod_def::GJ6KIl-7z3w::bcZ5qYg4SpOiF6EslVQxAw` |
| Update a Filter | PATCH | `/api/v2/filters/{{id}}` | `conn_mod_def::GJ6KJCrhWKg::WwaRYs_5QEe7PT0OGgOk8g` |

### PlaceholderUsages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Placeholder Usage | GET | `/api/v2/placeholder_usages/{{id}}` | `conn_mod_def::GJ6KOu0rZ58::OwCWd_HwTqmZBu7INs1EqQ` |
| Create a Placeholder Usage | POST | `/placeholder_usages` | `conn_mod_def::GJ6KOvQ39sY::E04ZZ3-xR4-4QnsnzZMbGA` |
| Delete a Placeholder Usage | DELETE | `/api/v2/placeholder_usages/{{id}}` | `conn_mod_def::GJ6KOu_3D14::7tceceXbTlqf6UaGTFvqqg` |
| Update a Placeholder Usage | PATCH | `/api/v2/placeholder_usages/{{id}}` | `conn_mod_def::GJ6KOzKe6v4::FiQ7_txVQxqKnGQScGSltg` |

### People

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Person | POST | `/api/v2/people` | `conn_mod_def::GJ6KOABMti8::lsrag9O9R5iWuEpSdbwc0A` |
| Regenerate a Person’s 2FA Recovery Codes | PATCH | `/api/v2/people/{{id}}/regenerate_recovery_codes` | `conn_mod_def::GJ6KOJx-QKM::XKtOAIKjTLCdyBn4n12H9w` |
| Update a Person | PATCH | `/api/v2/people/{{id}}` | `conn_mod_def::GJ6KOZToU_Y::HwlVvRmZRQi5OeBei6G-Ww` |
| Virtualize a Person | PATCH | `/api/v2/people/{{id}}/virtualize` | `conn_mod_def::GJ6KOZh-MPk::CU9DmSiPTfGCnJD8m_QXow` |

### LostReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lost Reason | GET | `/api/v2/lost_reasons/{{id}}` | `conn_mod_def::GJ6KLncXpgg::SZR-mB_AQP-A6cd5vvLOlg` |
| List Lost Reasons | GET | `/api/v2/lost_reasons` | `conn_mod_def::GJ6KLokWVGI::PmHRFmYsQR69SfsxH6Dqpw` |
| Archive a Lost Reason | PATCH | `/api/v2/lost_reasons/{{id}}/archive` | `conn_mod_def::GJ6KLn1x5V8::GpDiuPS1QACE2gdARCy1dg` |
| Create a Lost Reason | POST | `/lost_reasons` | `conn_mod_def::GJ6KLo-Ta_M::DKVGL2MqQK61lhBnDjmfHw` |

### ApprovalPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Approval Policies | GET | `/api/v2/approval_policies` | `conn_mod_def::GJ6J_T59O4E::i-A6H8JrTOOAMS40k75jYA` |
| Archive an Approval Policy | PATCH | `/api/v2/approval_policies/{{id}}/archive` | `conn_mod_def::GJ6J_1ifN7g::oBKUN5nGT4yBjY0IoP2uIA` |
| Restore an Approval Policy | PATCH | `/api/v2/approval_policies/{{id}}/restore` | `conn_mod_def::GJ6KAALRkLs::srNk2L8mRNSGQZH68A5aBA` |
| Update an Approval Policy | PATCH | `/api/v2/approval_policies/{{approvalPolicyId}}` | `conn_mod_def::GJ6J_-HxQno::YxdV6gWbQmisKx7GwjEuhA` |

### Discussions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Discussions | GET | `/discussions` | `conn_mod_def::GJ6KF4kHbqw::H_GXIgn2SUyRxJKkgFbb0g` |
| Create a Discussion for a Page | POST | `/discussions` | `conn_mod_def::GJ6KF48-R1s::acwb_CiyTNSObJ6o3rllwg` |
| Delete a Discussion | DELETE | `/api/v2/discussions/{{id}}` | `conn_mod_def::GJ6KF7BLbd4::ebug9TnTQFSxoNiJWMaa4w` |
| Update a Discussion | PATCH | `/api/v2/discussions/{{id}}` | `conn_mod_def::GJ6KGM3TOlI::cCV9EgOTRquvQNAp_I7kRg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Change a Project’s Workflow (and Map Task Statuses) | PATCH | `/api/v2/projects/{{projectId}}/change_workflow` | `conn_mod_def::GJ6KPgDR71c::fJn9A9ZjTamdPUvDKvMBHQ` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJ6KPjzaXos::czts58VqTLuAtepGnorP6g` |
| Delete a Project | DELETE | `/api/v2/projects/{{id}}` | `conn_mod_def::GJ6KPfkdFVs::uypdzR2-Q5C7vidDzbUTUA` |
| Restore a Project | PATCH | `/api/v2/projects/{{id}}/restore` | `conn_mod_def::GJ6KPsB-VEE::Adb06HdVTri7RQ1JNkVCLA` |

### RevenueDistributions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Revenue Distributions | GET | `/api/v2/revenue_distributions` | `conn_mod_def::GJ6KRemBrYw::XMcB5xHjT5afUiNQfU0I0w` |
| Create a Revenue Distribution for a Deal | POST | `/revenue_distributions` | `conn_mod_def::GJ6KReCPUKU::5JzrIrm3S32AD7B0kU4uZg` |
| Delete a Revenue Distribution | DELETE | `/api/v2/revenue_distributions/{{id}}` | `conn_mod_def::GJ6KRkS4tWs::eKFmOFEcT56PgFyKU3jnTw` |
| Update a Revenue Distribution | PATCH | `/api/v2/revenue_distributions/{{revenueDistributionId}}` | `conn_mod_def::GJ6KRdCXWcc::tASA5gt3Rnucuspj9wncxA` |

### Overheads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Overhead | GET | `/api/v2/overheads/{{id}}` | `conn_mod_def::GJ6KMy-Sw4g::8MG0WAEJRCysPMc5slnuhQ` |
| List Overheads | GET | `/overheads` | `conn_mod_def::GJ6KM0D4iXY::28S9nOkrTf6LMWxwrDByNQ` |
| Recalculate an Overhead | PATCH | `/api/v2/overheads/{{id}}/recalculate` | `conn_mod_def::GJ6KMykZ-KA::ODfMxsFlSdWBvgoAys3PPg` |
| Update an Overhead | PATCH | `/api/v2/overheads/{{id}}` | `conn_mod_def::GJ6KMyhObUY::tDnidrK1SzGm7Vh9_KOj7A` |

### TimeEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve a Time Entry | PATCH | `/api/v2/time_entries/{{id}}/approve` | `conn_mod_def::GJ6KVfLJT4c::wIQbPCSwS9qQi80BLnQhTA` |
| Create Time Entries (Bulk) | POST | `/time_entries` | `conn_mod_def::GJ6KWC3e8B0::3eO7CcmZRhG6Ga12WsyntA` |
| Unapprove a Time Entry | PATCH | `/api/v2/time_entries/{{id}}/unapprove` | `conn_mod_def::GJ6KVxApNqA::S0WzP0inS-yLkbyznlNZww` |
| Update a Time Entry | PATCH | `/api/v2/time_entries/{{id}}` | `conn_mod_def::GJ6KWI04S7M::xlxhnGaeRG2QzozRv2_4vw` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bookings | GET | `/api/v2/bookings` | `conn_mod_def::GJ6KByPrbYY::922N89RyTZiJcSlQKJY7QA` |
| Delete a Booking | DELETE | `/api/v2/bookings/{{id}}` | `conn_mod_def::GJ6KBxOu51E::TqyjYMUnQ56rKUNggXOTwA` |
| Unapprove a Booking | PATCH | `/api/v2/bookings/{{id}}/unapprove` | `conn_mod_def::GJ6KB5lST5M::bIzM8YFIR_2HeINVX0AO9A` |
| Update a Booking | PATCH | `/api/v2/bookings/{{id}}` | `conn_mod_def::GJ6KB5oubLc::aHlYigDMQ6aLWvvWdJ034w` |

This lists 90 of 544 actions. For anything not here, call `search_one_platform_actions` with platform `productive`. The full catalog is at https://www.withone.ai/knowledge/productive.

## When a call fails

The error comes from Productive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/productive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
