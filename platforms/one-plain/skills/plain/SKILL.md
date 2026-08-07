---
name: plain
description: Plain is a customer support platform that provides a collaborative inbox, issue tracking, and API-driven workflows, allowing support and engineering teams to manage conversations, automate operations, and build support experiences directly into their products and internal tools. Read and write Plain data through One: threads, customers, tenants, users, workflowrules, workspaceemaildomainsettings and more, 493 actions with real parameter documentation. Use whenever the user asks to look something up in Plain, create or update a record there, or build code against the Plain API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: plain
  generated-from: one-knowledge-base
---

# Plain through One

Plain is a customer support platform that provides a collaborative inbox, issue tracking, and API-driven workflows, allowing support and engineering teams to manage conversations, automate operations, and build support experiences directly into their products and internal tools.

One exposes Plain through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `plain` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Plain is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Plain account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Threads

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Additional Assignees | POST | `/graphql/v1` | `conn_mod_def::GMKYzdHAZvk::mTYlzNCpShWBzN-1DB3wsA` |
| Assign Thread Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKYzrJYKPM::dImeyne_TD-mfXFNxDipuA` |
| Change Thread Customer | POST | `/graphql/v1` | `conn_mod_def::GMKYz85ST7U::JedzC09mTcqJMxngTGO85w` |
| Change Thread Priority | POST | `/graphql/v1` | `conn_mod_def::GMKYz9fj2X0::yHEB4nY4Smq9rqtIog098w` |
| Create Thread Using Plain GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY1RAY70s::eUiB0jaoS3e6CDoWB-jMsg` |
| Delete a Thread | POST | `/graphql/v1` | `conn_mod_def::GMKY2ruhSkg::4Fms0PV4QgqKPKZ3ZgNNhQ` |
| Escalate a Thread | POST | `/graphql/v1` | `conn_mod_def::GMKY3LNcRL0::usaDU4XMSYmAYTJ8bwMxxg` |
| Fetch a Thread by External ID for a Customer | POST | `/graphql/v1` | `conn_mod_def::GMKY96XN2Rw::mkVZQy9ITO62sADJNRN0XA` |
| Fetch a Thread by Ref | POST | `/graphql/v1` | `conn_mod_def::GMKY97DS5nE::NpsDJprnTCSly_wWnUTImA` |
| Fork Thread Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY3TbCpxI::SkOB6RmhRZqCtz0rKo_enQ` |
| Import Thread Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY3dUMS-U::yvhXh7gSQIqRid1-pPPLhw` |
| List Threads | POST | `/graphql/v1` | `conn_mod_def::GMKY-J-UYUA::0jotb0orQey64wpkf81JHQ` |

15 more Threads actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Customer | POST | `/graphql/v1` | `conn_mod_def::GMKY1871gCY::TMuc-W2JT1uv35pF12lKSw` |
| Get a Customer by Email | POST | `/graphql/v1` | `conn_mod_def::GMKY7MrczYU::XiYZUhknRReeglZT1GGWFw` |
| Get a Customer by External ID | POST | `/graphql/v1` | `conn_mod_def::GMKY7VlZXqI::_ZLZ1AHcSVmVe8crhR8MVg` |
| Import Customers | POST | `/graphql/v1` | `conn_mod_def::GMKY3UBRZEg::NIiYeroZTieUpzZpF25R6g` |
| List Customers | POST | `/graphql/v1` | `conn_mod_def::GMKY7ha34e0::gV2lS_89SOWbEKpDXNOtfA` |
| Mark Customer As Spam Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY3nVzbvk::XbbiFx_4TnG1iysf_QYY8g` |
| Remove Customer From Tenants | POST | `/graphql/v1` | `conn_mod_def::GMKY4MUPyrA::s_LfWhfbSFa1EcY1aTFm8A` |
| Resolve Customer for an MS Teams Channel Using GraphQL | POST | `/graphql/v1` | `conn_mod_def::GMKY4e5SfLU::gM2cQv3yTRWwgkxlewKFVg` |
| Resolve Customer for Slack Channel Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY4mpc-gY::DPojo8CkSLCGrVF-XR51UQ` |
| Search Customers | POST | `/graphql/v1` | `conn_mod_def::GMKY9BUMCO4::_CC0mz9VRI-21Nfk5Rzy6w` |
| Unmark Customer As Spam Using GraphQL v1 | POST | `/graphql/v1` | `conn_mod_def::GMKY5AdyfFU::KGjeV6WdTzWpsvThCtDXHg` |
| Upsert Customer | POST | `/graphql/v1` | `conn_mod_def::GMKY6dKTkqI::Q0q15-uaQuK0nOfBZsjGNA` |

### Tenants

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Tenant | POST | `/graphql/v1` | `conn_mod_def::GMKY1LKK7e8::_FVYq5aSR6qITcmnlqb5Iw` |
| Delete Tenant | POST | `/graphql/v1` | `conn_mod_def::GMKY2sLA-as::qq9GJdQyRsGSmOp5NDndXw` |
| Get a Tenant | POST | `/graphql/v1` | `conn_mod_def::GMKY9wGz88U::HM2TpT6OTxy3VvZ5OTp0xQ` |
| Import Tenants | POST | `/graphql/v1` | `conn_mod_def::GMKY3aiR9p0::P3W8CLsBSWmFV88KpGDAig` |
| List Tenants | POST | `/graphql/v1` | `conn_mod_def::GMKY9v2BCb4::u6HtHL6FQX-va1vFxjoK6w` |
| Search Tenants | POST | `/graphql/v1` | `conn_mod_def::GMKY9Iy7cD0::LgR53S_rSXGC4NRlnV1AoQ` |
| Upsert Tenant | POST | `/graphql/v1` | `conn_mod_def::GMKY6j_dz7o::D8J2u0b5RaeRnc3F7M4-_A` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Labels to a User | POST | `/graphql/v1` | `conn_mod_def::GMKYzk73Ewc::4UJxD3CBQk2n5Bs5dcRG9g` |
| Delete User | POST | `/graphql/v1` | `conn_mod_def::GMKY25rd3_s::SBAtv1ncQyacBg4JUvVJNA` |
| Get a User | POST | `/graphql/v1` | `conn_mod_def::GMKY-XIncFM::bWwWIariR1mobIgMq0RwWw` |
| Get a User by Email | POST | `/graphql/v1` | `conn_mod_def::GMKY-es0Hh4::43EHGECkQ_qcBVcJOtoiiQ` |
| List Users | POST | `/graphql/v1` | `conn_mod_def::GMKY-kCQCww::1D77bpSAQeOBu7QgqIeVNQ` |
| Remove Labels From a User | POST | `/graphql/v1` | `conn_mod_def::GMKY4MesiYU::GX0-T6h0RMOh5bazrpB4XQ` |

### WorkflowRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workflow Rule | POST | `/graphql/v1` | `conn_mod_def::GMKY1fY7Mic::K7sEzbfdQR-aXRzUgcM-hg` |
| Delete a Workflow Rule | POST | `/graphql/v1` | `conn_mod_def::GMKY28glZAw::BJnhhM3URzqnLljgn0U-mg` |
| List Workflow Rules | POST | `/graphql/v1` | `conn_mod_def::GMKY-z0NoZ8::p13Q-lfdRqq7V0cpI06moQ` |
| Toggle Workflow Rule Published | POST | `/graphql/v1` | `conn_mod_def::GMKY44cy6FA::Y2W54DynS06K3LjwJ5vYgA` |
| Trigger Workflow Rule | POST | `/graphql/v1` | `conn_mod_def::GMKY4_JfzDk::1EIGZc8ySriZDI_w2iTwcg` |
| Update Workflow Rule | POST | `/graphql/v1` | `conn_mod_def::GMKY6Ucxt30::7U-mBC9MSv-vBmBTc0ailQ` |

### WorkspaceEmailDomainSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Workspace Alternate Support Email Address | POST | `/graphql/v1` | `conn_mod_def::GMKYzlGpvXE::PLtijhwgROi6wGI4wA_MHA` |
| Create Workspace Email Domain Settings | POST | `/graphql/v1` | `conn_mod_def::GMKY1mpm2go::8iFlnbSFS2ilOhzfywzdaw` |
| Delete Workspace Email Domain Settings | POST | `/graphql/v1` | `conn_mod_def::GMKY3DJ2g_Y::Z3yfb8i3TJmD1DCeuNBexQ` |
| Remove Workspace Alternate Support Email Address | POST | `/graphql/v1` | `conn_mod_def::GMKY4VMzEd0::T6-GxZajRUCbdInMeu1Hcg` |
| Verify Workspace Email Forwarding Settings | POST | `/graphql/v1` | `conn_mod_def::GMKY6rcQbyc::j0ria05YSguTmDGZjOPHbA` |

### ServiceAuthorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Complete Service Authorization | POST | `/graphql/v1` | `conn_mod_def::GMKY0Mjjm3M::GQTQHkvsSJCwDatQN3lS6g` |
| Delete Service Authorization | POST | `/graphql/v1` | `conn_mod_def::GMKY2bFjw4w::xgoUJHDjSeiQaRjnVPFQRw` |
| Delete the Signed-in User's Service Authorization | POST | `/graphql/v1` | `conn_mod_def::GMKY2T94JSo::lnn3kPJlTFSY8Ka8zV9f7Q` |
| Get a Service Authorization | POST | `/graphql/v1` | `conn_mod_def::GMKY9IFp0PI::Y7Iu-8yxSGemdDKCvw26tQ` |
| Start Service Authorization | POST | `/graphql/v1` | `conn_mod_def::GMKY44WeDZc::733hrAm4TC2LejP2HH2_9w` |

### Autoresponders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Autoresponder | POST | `/graphql/v1` | `conn_mod_def::GMKY0UeZ658::pRbr_9a3TLKzapzRnyROPQ` |
| Delete an Autoresponder | POST | `/graphql/v1` | `conn_mod_def::GMKY12Elxrs::UY_9W7zpQJ2vEqDJO88LMg` |
| Get an Autoresponder | POST | `/graphql/v1` | `conn_mod_def::GMKY61JkJ0Y::0gBazXF-QL-fxrrDpToomw` |
| List Autoresponders | POST | `/graphql/v1` | `conn_mod_def::GMKY609B1k8::gd0PBBvOSo-t-P9mPl1Arw` |
| Reorder Autoresponders | POST | `/graphql/v1` | `conn_mod_def::GMKY4UJ-sVw::v6H6LtbfSha01cekdA_OAg` |

### HelpCenter

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Help Center | POST | `/graphql/v1` | `conn_mod_def::GMKY0tBcdDA::b2tH7TytTRSt0yS6ZqIuvg` |
| Delete a Help Center | POST | `/graphql/v1` | `conn_mod_def::GMKY2MamkuA::0GjLep0AQduVzUViMr7Y3g` |
| Get a Help Center | POST | `/graphql/v1` | `conn_mod_def::GMKY73qGdoM::EP-esrddRqiget8LsypmrQ` |
| Update Help Center | POST | `/graphql/v1` | `conn_mod_def::GMKY5fz8vA4::rVtWLCf8Qh22IRU4wiByhg` |
| Verify Help Center Custom Domain Name | POST | `/graphql/v1` | `conn_mod_def::GMKY6uwmE_0::bMnatqXiRk6ABgziLCWVFw` |

### Snippets

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Snippet | POST | `/graphql/v1` | `conn_mod_def::GMKY1MAvjkU::XddzN6aNS-CbTCQavFRLoA` |
| Delete a Snippet | POST | `/graphql/v1` | `conn_mod_def::GMKY2lCLVio::s9dkLOgwQ9eBXhboddA3nw` |
| Get a Snippet | POST | `/graphql/v1` | `conn_mod_def::GMKY9lr_s20::QBStT9PISSSUPlUg_PQI4w` |
| List Snippets | POST | `/graphql/v1` | `conn_mod_def::GMKY9mF31Rs::ARBtmHihQuqcFAl8o7Zzkw` |
| Update a Snippet | POST | `/graphql/v1` | `conn_mod_def::GMKY5_LN1UI::DB7pJK9TQT6iAZdk0B19nw` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Task | POST | `/graphql/v1` | `conn_mod_def::GMKY1Me8HYE::9wfdbrLqQYG6KzfWV_2q4Q` |
| Delete Task | POST | `/graphql/v1` | `conn_mod_def::GMKY2tXtKsw::G-qF8qntR-qCFQH9CRudVQ` |
| Get a Task by Ref | POST | `/graphql/v1` | `conn_mod_def::GMKY9m3INQM::j7GKJnG-TVyTkW21xf3Mfg` |
| List Tasks | POST | `/graphql/v1` | `conn_mod_def::GMKY9wQ1Zw8::Ut2eWu5CTsequDZVQDmKFg` |
| Update Task | POST | `/graphql/v1` | `conn_mod_def::GMKY5-55FT4::gbyi5umESN2vKXlSebsnaQ` |

### Tiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Tier | POST | `/graphql/v1` | `conn_mod_def::GMKY1YISrDs::BKG5qgXrRbiruE755LxkXA` |
| Delete Tier | POST | `/graphql/v1` | `conn_mod_def::GMKY26KdeHI::5HetVpnsReee1Yuj7morkg` |
| Get a Tier | POST | `/graphql/v1` | `conn_mod_def::GMKY-QGt9kc::JgGiWaBEQkqhAM0YakrnYw` |
| List Tiers | POST | `/graphql/v1` | `conn_mod_def::GMKY-QbNNg8::8PuMny5UQzyzzeTNEFFnWA` |
| Update Tier | POST | `/graphql/v1` | `conn_mod_def::GMKY6PnHaZk::Iq_arNfoRZa2PttJwftn3Q` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Workflow | POST | `/graphql/v1` | `conn_mod_def::GMKY1fR8SLg::q-bhUfr0T5i3CLB2jNLziw` |
| Delete Workflow | POST | `/graphql/v1` | `conn_mod_def::GMKY28MYD5o::zLdXsUrJTeCm9XnuW8-Esg` |
| Get a Workflow | POST | `/graphql/v1` | `conn_mod_def::GMKY-sYM4Ok::GPOi15e7R5m-nzX0eoZAug` |
| List Workflows | POST | `/graphql/v1` | `conn_mod_def::GMKY-z2MMz8::hqhNv274Rm-oQxIWrF3pQA` |
| Update a Workflow | POST | `/graphql/v1` | `conn_mod_def::GMKY6Tr7EKs::dfWtJaLHQ_Od3vCUHVzFFw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Company | POST | `/graphql/v1` | `conn_mod_def::GMKY1-u4F70::mSHgPrIIQ02IQaKKVEs4ug` |
| Get a Company | POST | `/graphql/v1` | `conn_mod_def::GMKY7FOZH8U::VsHS-AnNTRKmGt8Gcm5W9A` |
| List Companies | POST | `/graphql/v1` | `conn_mod_def::GMKY7Dp1u8I::e90T7yCSSku6U6TXNo6n4A` |
| Search Companies | POST | `/graphql/v1` | `conn_mod_def::GMKY9B3bhxM::mkylwmypQouACKd6YC8n3A` |
| Upsert Company | POST | `/graphql/v1` | `conn_mod_def::GMKY6ctOKX8::y-oRVbCKQUirDBwYzCHDnA` |

### ChatApp

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat App | POST | `/graphql/v1` | `conn_mod_def::GMKY0U7pUng::BnKSX2epTE-da-adLunjsA` |
| Delete Chat App | POST | `/graphql/v1` | `conn_mod_def::GMKY19Egjgg::7-eqKixPR3-ZrYsL6Rt_eA` |

2 more ChatApp actions are available through search.

This lists 90 of 493 actions. For anything not here, call `search_one_platform_actions` with platform `plain`. The full catalog is at https://www.withone.ai/knowledge/plain.

## When a call fails

The error comes from Plain, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/plain

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
