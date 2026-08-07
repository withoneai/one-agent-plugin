---
name: shortcut
description: Shortcut is a project-management platform tailored for software teams, combining issue tracking, sprints, roadmaps and goal‐setting in one intuitive workspace. Read and write Shortcut data through One: stories, epics, documents, iterations, objectives, entitytemplates and more, 142 actions with real parameter documentation. Use whenever the user asks to look something up in Shortcut, create or update a record there, or build code against the Shortcut API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: shortcut
  generated-from: one-knowledge-base
---

# Shortcut through One

Shortcut is a project-management platform tailored for software teams, combining issue tracking, sprints, roadmaps and goal‐setting in one intuitive workspace.

One exposes Shortcut through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `shortcut` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Shortcut is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Shortcut account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Stories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Story | GET | `/api/v3/stories/{{storyPublicId}}` | `conn_mod_def::GJ7HEIWdRnM::EpvyVRR3SI-Zv-6CM4D-Kg` |
| Get Stories by External Link | GET | `/external-link/stories` | `conn_mod_def::GJ7HD39Ab5U::YNpQlYX2R9-PolY6b5xhIw` |
| List a Group’s Stories | GET | `/api/v3/groups/{{groupPublicId}}/stories` | `conn_mod_def::GJ7HE2HzAj8::asaRD3SNTEufwNlRR_gCtg` |
| List a Project’s Stories | GET | `/api/v3/projects/{{projectPublicId}}/stories` | `conn_mod_def::GJ7HFSn4LZo::TvtLYxo3QVSpwH54Y1Lu5Q` |
| List a Story’s Sub-task Stories | GET | `/api/v3/stories/{{storyPublicId}}/sub-tasks` | `conn_mod_def::GJ7HFaDg-z8::9FdSKBCBTJigTDBD0S1MhA` |
| List an Epic’s Stories | GET | `/api/v3/epics/{{epicPublicId}}/stories` | `conn_mod_def::GJ7HEuVqIDw::E-7LF5wHSvyVxWEyqw4oLg` |
| List an Iteration’s Stories | GET | `/api/v3/iterations/{{iterationPublicId}}/stories` | `conn_mod_def::GJ7HE-eqxKA::e6aQLK8gQe6wLF80qaL_aw` |
| Search Stories | GET | `/api/v3/search/stories` | `conn_mod_def::GJ7HFqxXplU::AGTeu8WRSS2Js0SXNVFfdw` |
| Create a Story From a Template | POST | `/stories/from-template` | `conn_mod_def::GJ7HCjJtb0I::_4XCMgZPQQORzs65vq_8Hg` |
| Create Multiple Stories (Bulk) | POST | `/api/v3/stories/bulk` | `conn_mod_def::GJ7HCX1GvgE::d685LtztQnm5pukBt-ofcA` |
| Create Story | POST | `/api/v3/stories` | `conn_mod_def::GJ7HCipWiRI::_iz6wWBXQ0KFsUmIfBWz0Q` |
| Delete a Story | DELETE | `/api/v3/stories/{{storyPublicId}}` | `conn_mod_def::GJ7HDQpsv4s::wgNxD9BXSkCDmL64mEQyJA` |

4 more Stories actions are available through search.

### Epics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Epic | GET | `/api/v3/epics/{{epicPublicId}}` | `conn_mod_def::GJ7HDtdZ4Xs::ZcLkoErkToauHts1MWDLgA` |
| List a Label’s Epics | GET | `/api/v3/labels/{{labelPublicId}}/epics` | `conn_mod_def::GJ7HE-fEU7E::DaDKK523RGylZNPDMJO_oQ` |
| List a Milestone’s Epics (Deprecated) | GET | `/api/v3/milestones/{{milestonePublicId}}/epics` | `conn_mod_def::GJ7HFJ9aJ2E::ziyC3I4TRJ66VorTYMqi9Q` |
| List Epics | GET | `/api/v3/epics` | `conn_mod_def::GJ7HE2-5m_o::PeKVUG3jSW-r_jyFx5xw2g` |
| List Epics (Paginated) | GET | `/epics/paginated` | `conn_mod_def::GJ7HE2eBq0w::8aDCABoPT2ajlL0hFIb1kw` |
| Search Epics | GET | `/api/v3/search/epics` | `conn_mod_def::GJ7HFizmziE::kj5dW8IdRhiGyfo7b3dw_A` |
| Create an Epic | POST | `/api/v3/epics` | `conn_mod_def::GJ7HCIv2-VY::H_uxhYXmQWef_ZiCxkK_fQ` |
| Delete an Epic | DELETE | `/api/v3/epics/{{epicPublicId}}` | `conn_mod_def::GJ7HDA7n1u4::9m3xcXNeSmOr1PwsNN-JYA` |
| Unlink Productboard from an Epic | POST | `/api/v3/epics/{{epicPublicId}}/unlink-productboard` | `conn_mod_def::GJ7HFpu5IIU::fs8IkeLCQsK1GYgJFbnYuA` |
| Update an Epic | PUT | `/api/v3/epics/{{epicPublicId}}` | `conn_mod_def::GJ7HFy9eaHg::YSJSY--MSyCOEKU0LLeeBg` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Doc (by Public ID) | GET | `/api/v3/documents/{{docPublicId}}` | `conn_mod_def::GJ7HDmblHyM::EDo0DEyxTkiXo61vvULPNw` |
| List a Document’s Epics | GET | `/api/v3/documents/{{docPublicId}}/epics` | `conn_mod_def::GJ7HEkFd5q8::g3VAkGJ_ThaHSoenwcumsw` |
| List an Epic's Documents | GET | `/api/v3/epics/{{epicPublicId}}/documents` | `conn_mod_def::GJ7HEr-G1fY::Z0RyE8CiTrmJkDzGGU5xxw` |
| List Docs | GET | `/api/v3/documents` | `conn_mod_def::GJ7HEhms7qs::Ls-pEwh8R0CFJCJC1Dhlag` |
| Search Documents | GET | `/api/v3/search/documents` | `conn_mod_def::GJ7HFjLX6_Q::u-W8WSFRTayUSm66nP4kjw` |
| Create a Doc | POST | `/api/v3/documents` | `conn_mod_def::GJ7HCGg6RxA::W25eGR-VTdGuqwJImwD0hQ` |
| Delete a Doc | DELETE | `/api/v3/documents/{{docPublicId}}` | `conn_mod_def::GJ7HC6bGsV0::-12FgkgSRrKlhWURMYuY9Q` |
| Link a Document to an Epic | PUT | `/api/v3/documents/{{docPublicId}}/epics/{{epicPublicId}}` | `conn_mod_def::GJ7HEWQsjkQ::vbz88islQoqHJcHbtSbraQ` |
| Unlink a Document from an Epic | DELETE | `/api/v3/documents/{{docPublicId}}/epics/{{epicPublicId}}` | `conn_mod_def::GJ7HFruw7vE::VftKvACeQKW3d7BQshopkw` |
| Update a Doc | PUT | `/api/v3/documents/{{docPublicId}}` | `conn_mod_def::GJ7HFyec2co::TgJ8HcItSp2wCpx1-zwd6w` |

### Iterations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Iteration | GET | `/api/v3/iterations/{{iterationPublicId}}` | `conn_mod_def::GJ7HD1wWXFo::I2KYKVC9TpmjeBGB-91wBQ` |
| List Iterations | GET | `/api/v3/iterations` | `conn_mod_def::GJ7HE9fuh0U::GjR4lUQCQAGHjLzc9BEyCw` |
| Search Iterations | GET | `/api/v3/search/iterations` | `conn_mod_def::GJ7HFimSu2o::9ddU1-mST5CzhK9hvkuJ6Q` |
| Create Iteration | POST | `/iterations` | `conn_mod_def::GJ7HCPWKID8::rp8iqwLaR9aPBdDKewsDdQ` |
| Delete an Iteration | DELETE | `/api/v3/iterations/{{iterationPublicId}}` | `conn_mod_def::GJ7HDKcnUTA::as0F7OxZQAm05OXgQ7XHFA` |
| Disable Iterations for the Current Workspace | PUT | `/iterations/disable` | `conn_mod_def::GJ7HDaJYum4::xTlGe1_CT4S_vvT0qiYCGA` |
| Enable Iterations for the Current Workspace | PUT | `/iterations/enable` | `conn_mod_def::GJ7HDaPzTXY::LV9hI8OWQ4euY-Ka2gKX3A` |
| Update an Iteration | PUT | `/api/v3/iterations/{{iterationPublicId}}` | `conn_mod_def::GJ7HF8cCDrA::-EVonPQjR_K7Q6f6SWow7A` |

### Objectives

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Objective | GET | `/api/v3/objectives/{{objectivePublicId}}` | `conn_mod_def::GJ7HEIUCO38::ZPYy1gFMSySl5c78fLs_iA` |
| List a Category’s Objectives | GET | `/api/v3/categories/{{categoryPublicId}}/objectives` | `conn_mod_def::GJ7HEidv5NU::DhoKpfZYRHKvcAOfo-7VPQ` |
| List an Objective’s Epics | GET | `/api/v3/objectives/{{objectivePublicId}}/epics` | `conn_mod_def::GJ7HFRVUfaw::XA2xi6VCSr2LaKGiEoyAgQ` |
| List Objectives | GET | `/objectives` | `conn_mod_def::GJ7HFQNIfP8::2SCs1TI1T_arTUeMQoUdkA` |
| Search Objectives | GET | `/api/v3/search/objectives` | `conn_mod_def::GJ7HFi87nqM::YEPHL0cOR0WREmbxkYZsiQ` |
| Create an Objective | POST | `/objectives` | `conn_mod_def::GJ7HCX6n0PQ::cVQACgBnSvCCGYdBC6-jpA` |
| Delete an Objective | DELETE | `/api/v3/objectives/{{objectivePublicId}}` | `conn_mod_def::GJ7HDS1OAXs::Ce5vSkBjQeKlyTu1tUF2HQ` |
| Update an Objective | PUT | `/api/v3/objectives/{{objectivePublicId}}` | `conn_mod_def::GJ7HGR7lEd0::GerKkX2yTWqasqnuCFhM3Q` |

### EntityTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Entity Template | GET | `/api/v3/entity-templates/{{entityTemplatePublicId}}` | `conn_mod_def::GJ7HDuv6z-g::XOndbK42SlmPSg_DVGXX_A` |
| List Entity Templates (Workspace) | GET | `/api/v3/entity-templates` | `conn_mod_def::GJ7HErGhyao::NjZZXPaORyG8iurKuZnrTw` |
| Create an Entity Template for the Workspace | POST | `/entity-templates` | `conn_mod_def::GJ7HCHuLEHE::OYgp3AAESbK5skb8Gkod8Q` |
| Delete an Entity Template | DELETE | `/api/v3/entity-templates/{{entityTemplatePublicId}}` | `conn_mod_def::GJ7HDArGKUU::efk5CCUGTQiiwCfnjfEznA` |
| Disable Story Templates for a Workspace | PUT | `/entity-templates/disable` | `conn_mod_def::GJ7HDZ7qkn0::R9TOsptcRkCUjsazhLDz6A` |
| Enable Story Templates for a Workspace | PUT | `/entity-templates/enable` | `conn_mod_def::GJ7HDjE755c::KZeVwG53T8yVht5qlK-sIg` |
| Update an Entity Template | PUT | `/api/v3/entity-templates/{{entityTemplatePublicId}}` | `conn_mod_def::GJ7HFy8U6WY::1_MGXnWMQTyRFuC-aCzAhw` |

### Milestones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Milestone (Deprecated) | GET | `/api/v3/milestones/{{milestonePublicId}}` | `conn_mod_def::GJ7HD-6JQ0w::gyI0rth_TZ-vXK5LY3NUlg` |
| List a Category’s Milestones | GET | `/api/v3/categories/{{categoryPublicId}}/milestones` | `conn_mod_def::GJ7HEiFKTAA::A4ckvQDTSLmu3hTnegosLg` |
| List Milestones | GET | `/api/v3/milestones` | `conn_mod_def::GJ7HFIcL-Qg::KuXO2uA0Qnix3tb5tuf1Cg` |
| Search Milestones | GET | `/api/v3/search/milestones` | `conn_mod_def::GJ7HFi48lIM::FyPc3wUXSTa-4qPx_Hfq7Q` |
| Create Milestone | POST | `/api/v3/milestones` | `conn_mod_def::GJ7HCX-90as::ZlcXaff7SdO9IyY7MG6gPg` |
| Delete a Milestone | DELETE | `/api/v3/milestones/{{milestonePublicId}}` | `conn_mod_def::GJ7HDIRiYvU::wf7yN0-qQMiPvdtnjQ3ylA` |
| Update a Milestone | PUT | `/api/v3/milestones/{{milestonePublicId}}` | `conn_mod_def::GJ7HGKzNEu0::_KWFCL-YSCmyYWdIM2RkrQ` |

### Labels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Label | GET | `/api/v3/labels/{{labelPublicId}}` | `conn_mod_def::GJ7HD-QwlsM::JJI7u0lXQGeVfpBMoUdvVg` |
| List a Label’s Stories | GET | `/api/v3/labels/{{labelPublicId}}/stories` | `conn_mod_def::GJ7HFAzCfVM::_IytJwlhTSGUY-TmhPBkbw` |
| List Labels | GET | `/api/v3/labels` | `conn_mod_def::GJ7HE-GjSUs::G3xYcUsZRP-fGnMZgQp8tw` |
| Create a Label | POST | `/labels` | `conn_mod_def::GJ7HCXOmGbo::bGAupdlSQIeIZs_t_lXakA` |
| Delete a Label | DELETE | `/api/v3/labels/{{labelPublicId}}` | `conn_mod_def::GJ7HDIjrfog::LDmu9cMFTlea3fKJNH-56Q` |
| Update a Label | PUT | `/api/v3/labels/{{labelPublicId}}` | `conn_mod_def::GJ7HGGNFmSU::IatmLqBFTRCHpdDxLCBmxQ` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category | GET | `/api/v3/categories/{{categoryPublicId}}` | `conn_mod_def::GJ7HDilJBBQ::ugzIF0_lQgaGeHeVx5fp_Q` |
| List Categories | GET | `/api/v3/categories` | `conn_mod_def::GJ7HEYsW9uE::b-nIYIMjSW2rmMZvVH38mg` |
| Create Category | POST | `/categories` | `conn_mod_def::GJ7HCGN1qP0::HKkuriA-Qb-d8-Ez3siz2A` |
| Delete a Category | DELETE | `/api/v3/categories/{{categoryPublicId}}` | `conn_mod_def::GJ7HC5075TM::9nKNhtDHSAuuz72_k7hNmw` |
| Update a Category | PUT | `/api/v3/categories/{{categoryPublicId}}` | `conn_mod_def::GJ7HF1-dRIo::4apyjNt7QquCCuSJrFNcCg` |

### EpicComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Epic’s Comment | GET | `/api/v3/epics/{{epicPublicId}}/comments/{{commentPublicId}}` | `conn_mod_def::GJ7HDvO025w::VP-C8fArSpavXgD16iMbFg` |
| Create a Nested Comment Reply on an Epic Comment | POST | `/api/v3/epics/{{epicPublicId}}/comments/{{commentPublicId}}` | `conn_mod_def::GJ7HCRNOhc0::S70nnINCQc2c-OfwMEQ5xw` |
| Create an Epic Comment (Threaded) | POST | `/api/v3/epics/{{epicPublicId}}/comments` | `conn_mod_def::GJ7HCH5MwTI::neKv8HQIT6quWfDWab4RWw` |
| Delete an Epic Comment | DELETE | `/api/v3/epics/{{epicPublicId}}/comments/{{commentPublicId}}` | `conn_mod_def::GJ7HDBMSWzE::tfmghjxxSTaC9FBBKZntjA` |
| Update an Epic’s Threaded Comment | PUT | `/api/v3/epics/{{epicPublicId}}/comments/{{commentPublicId}}` | `conn_mod_def::GJ7HF8_PGYI::lpU4eIMxS0WN4CsFV3ul9g` |

### LinkedFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Linked File | GET | `/api/v3/linked-files/{{linkedFilePublicId}}` | `conn_mod_def::GJ7HEBh2Hck::DnNBiGC5RJmSK_d9hYaNlw` |
| List Linked Files | GET | `/linked-files` | `conn_mod_def::GJ7HFGwJQ6Y::HDLW7uODQMa9kGgRbaazJg` |
| Create a Linked File | POST | `/linked-files` | `conn_mod_def::GJ7HCbg8L38::AnrK8OX5RQCFqCurr65HjQ` |
| Delete a Linked File | DELETE | `/api/v3/linked-files/{{linkedFilePublicId}}` | `conn_mod_def::GJ7HDI_Z5oA::_hMDYc3ERzqjyPk4jYgonQ` |
| Update a Linked File | PUT | `/api/v3/linked-files/{{linkedFilePublicId}}` | `conn_mod_def::GJ7HGEibc4g::fZ_EluWvRiWkD-h62p1Kiw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/api/v3/projects/{{projectPublicId}}` | `conn_mod_def::GJ7HEPPLGhg::Ms576vnWSsivTvPY5aG37g` |
| List Projects | GET | `/api/v3/projects` | `conn_mod_def::GJ7HFP4r2Gg::DaR74CFISbe5-ucyz_xkPw` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJ7HCzBsqaA::YhVHudgTQVeTcnQnOfFEGw` |
| Delete a Project | DELETE | `/api/v3/projects/{{projectPublicId}}` | `conn_mod_def::GJ7HDRLSxqA::1noUXdZdRaigS-EN6MjX4w` |
| Update a Project | PUT | `/api/v3/projects/{{projectPublicId}}` | `conn_mod_def::GJ7HGR5ChA8::fgpsDnN2TnOdvNWQ494hgA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File | GET | `/api/v3/files/{{filePublicId}}` | `conn_mod_def::GJ7HD2-mrJs::6515LjsZSEiZdcEhWAeI8w` |
| List Files | GET | `/files` | `conn_mod_def::GJ7HE0tq8w0::Pa8NbWwGTiuAiCoVrwZ0uQ` |

3 more Files actions are available through search.

This lists 90 of 142 actions. For anything not here, call `search_one_platform_actions` with platform `shortcut`. The full catalog is at https://www.withone.ai/knowledge/shortcut.

## When a call fails

The error comes from Shortcut, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/shortcut

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
