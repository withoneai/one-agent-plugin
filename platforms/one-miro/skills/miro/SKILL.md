---
name: miro
description: Miro is an online collaborative whiteboarding platform that provides visual workspaces, templates, and integrations for brainstorming, planning, diagramming, and workshops, allowing teams and developers to coordinate ideas, map processes, and embed collaboration into broader workflows. Read and write Miro data through One: boards, shapes, teams, groups, boarditems, users and more, 197 actions with real parameter documentation. Use whenever the user asks to look something up in Miro, create or update a record there, or build code against the Miro API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: miro
  generated-from: one-knowledge-base
---

# Miro through One

Miro is an online collaborative whiteboarding platform that provides visual workspaces, templates, and integrations for brainstorming, planning, diagramming, and workshops, allowing teams and developers to coordinate ideas, map processes, and embed collaboration into broader workflows.

One exposes Miro through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `miro` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Miro is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Miro account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Boards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Board | GET | `/v2/boards/{{boardId}}` | `conn_mod_def::GLXcMp32nkA::aVXBV1kRTcqi_0YumJvWDw` |
| Get Boards | GET | `/v2/boards` | `conn_mod_def::GLXcMqx-RLg::riGxn_8IQ0y_1FUXcQtMEw` |
| Copy Board | PUT | `/v2/boards` | `conn_mod_def::GLXcMf7X0OA::QK5NBemxRGKW6EqR4Bv6Eg` |
| Create a Board Frame | POST | `/v2/boards/{{boardId}}/frames` | `conn_mod_def::GLXcN-v4-nA::aLOWprnwRQeIDszFgsXIlg` |
| Create Board | POST | `/v2/boards` | `conn_mod_def::GLXcMe0qLmA::Q8i8w3zLSiGl7casMWHaaQ` |
| Create Items in Bulk for a Board | POST | `/v2/boards/{{boardId}}/items/bulk` | `conn_mod_def::GLXcMrj2nug::47Soa_Q-TUmJrOYgmo3Q5Q` |
| Delete a Board | DELETE | `/v2/boards/{{boardId}}` | `conn_mod_def::GLXcMeVel0g::WdiyyphvTXSb-OAwiGEZFQ` |
| Delete an Item from a Board | DELETE | `/v2/boards/{{boardId}}/items/{{itemId}}` | `conn_mod_def::GLXcOu7QOqg::Aq9kGvMbT9ucOsFFTIVQXQ` |
| Delete an Item from a Board | DELETE | `/v2-experimental/boards/{{boardId}}/items/{{itemId}}` | `conn_mod_def::GLXcO7Zx8Sg::VkMv0qnvSWGb_1Iu3FZXGg` |
| Update a Board | PATCH | `/v2/boards/{{boardId}}` | `conn_mod_def::GLXcMp1NfWA::SJLfEHCyRvGdV6bXYN3vNg` |
| Update a Board Frame | PATCH | `/v2/boards/{{boardId}}/frames/{{itemId}}` | `conn_mod_def::GLXcOMy5YsA::SuSZaWw2QOmTYQ8mHMiZgQ` |

### Shapes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Shape Item on a Board | GET | `/v2/boards/{{boardId}}/shapes/{{itemId}}` | `conn_mod_def::GLXcQQuQejA::ZaYH6W32RpqB4e80C_wsHg` |
| Get a Shape Item on a Board | GET | `/v2-experimental/boards/{{boardId}}/shapes/{{itemId}}` | `conn_mod_def::GLXcOAL44yA::Wwzs5kADSUa1imZyLKsoKg` |
| Create a Shape Item on a Board | POST | `/v2/boards/{{boardId}}/shapes` | `conn_mod_def::GLXcQHsC5IA::oPi4kc1KT5CEPP48BaWV8Q` |
| Create Shapes Using Boards | POST | `/v2-experimental/boards/{{boardId}}/shapes` | `conn_mod_def::GLXcNy92KKA::shFBJuDOQIqpUjPK9pKsIA` |
| Delete a Shape Item from a Board | DELETE | `/v2/boards/{{boardId}}/shapes/{{itemId}}` | `conn_mod_def::GLXcQIYmAzg::sJBbEcPxRmaYJoltXKkhOA` |
| Delete a Shape Item from a Board | DELETE | `/v2-experimental/boards/{{boardId}}/shapes/{{itemId}}` | `conn_mod_def::GLXcN2xdGeA::dUVNqVR7TqW7D98c3PBTBg` |
| Update a Shape Item on a Board | PATCH | `/v2/boards/{{boardId}}/shapes/{{itemId}}` | `conn_mod_def::GLXcQdWgVjg::OedFdfjIQwanuuGVR4eSQQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team in an Organization | GET | `/v2/orgs/{{orgId}}/teams/{{teamId}}` | `conn_mod_def::GLXcSquMfcg::lJxOEb62T9ySOc8cH-eooQ` |
| Get Teams for a User Group | GET | `/v2/orgs/{{orgId}}/groups/{{groupId}}/teams` | `conn_mod_def::GLXcTV7aTqg::WdVWNLU_Tl67ZbnV89OFiA` |
| List Teams in an Organization | GET | `/v2/orgs/{{orgId}}/teams` | `conn_mod_def::GLXcSrCWFoA::8-y4FwtQQYiv-2GSO3yPMg` |
| Bulk Update Boards Classification for a Team in an Organization | PATCH | `/v2/orgs/{{orgId}}/teams/{{teamId}}/data-classification` | `conn_mod_def::GLXcMDa9tzg::fGRaJHYISp6tMTNjQOiiZA` |
| Create a Team in an Organization | POST | `/v2/orgs/{{orgId}}/teams` | `conn_mod_def::GLXcSf_jl0A::nii6xizVQfmhQa319NpVFg` |
| Delete a Team in an Organization | DELETE | `/v2/orgs/{{orgId}}/teams/{{teamId}}` | `conn_mod_def::GLXcSgWGWug::G7Is7iA-TTG2PQPFW-mZYA` |
| Update a Team in an Organization | PATCH | `/v2/orgs/{{orgId}}/teams/{{teamId}}` | `conn_mod_def::GLXcSqcUbuA::MJHM7fszT-OcmwY6Af_ysA` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group | GET | `/Groups/{{id}}` | `conn_mod_def::GLXcONUvyGg::C9IyhpmPTsChdE0JGWQy0w` |
| Get All Groups on a Board | GET | `/v2/boards/{{boardId}}/groups` | `conn_mod_def::GLXcOdTLNSg::s6jPZPQCRr-4rSd1PtIvCQ` |
| List Groups | GET | `/Groups` | `conn_mod_def::GLXcOLOIdPg::g_SHL0A4Sqa2CAVJQd9LsQ` |
| Create Group on a Board | POST | `/v2/boards/{{boardId}}/groups` | `conn_mod_def::GLXcOYzi4eg::CYTL2NWySyy_cgBRGK0rAg` |
| Delete a Group from a Board | DELETE | `/v2/boards/{{boardId}}/groups/{{groupId}}` | `conn_mod_def::GLXcOUjwv3g::LDU3weQiR2GZMcIC6ZWy3w` |
| Patch a Group | PATCH | `/Groups/{{id}}` | `conn_mod_def::GLXcOYzvWVA::frqzOUlXRsa4iFZKSSRX4A` |
| Ungroup Items from a Board Group | DELETE | `/v2/boards/{{boardId}}/groups/{{groupId}}` | `conn_mod_def::GLXcOl88YpA::2-OvCP_rSYeRUo2DgKrBLg` |

### BoardItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Board Item | GET | `/v2-experimental/boards/{{boardId}}/items/{{itemId}}` | `conn_mod_def::GLXcN-UglSg::o1ZvtJchSGWeH8GcFNwIGQ` |
| Get a Specific Board Item | GET | `/v2/boards/{{boardId}}/items/{{itemId}}` | `conn_mod_def::GLXcO5VZwkA::Kd8CAqWqSxKTnMyMaTQm3A` |
| Get Board Items | GET | `/v2-experimental/boards/{{boardId}}/items` | `conn_mod_def::GLXcN_V_h_g::XhdXj12FS_mvGRe2utDm1w` |
| Get Board Items | GET | `/v2/boards/{{boardId}}/items` | `conn_mod_def::GLXcO69cY6A::X3edrEcBRiqoTG_iosPc7Q` |
| Attach Tag to an Item on a Board | POST | `/v2/boards/{{boardIdPlatformTags}}/items/{{itemId}}` | `conn_mod_def::GLXcQ9R-jFA::Q7VUs2RRT2K1I0c2IDHmGQ` |
| Remove Tag from an Item on a Board | DELETE | `/v2/boards/{{boardIdPlatformTags}}/items/{{itemId}}` | `conn_mod_def::GLXcRF2O-Qg::5jeeqbIoR5yHb1zfcuSICQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/Users/{{id}}` | `conn_mod_def::GLXcTDqfryA::OD7ZvyBeSZyFFyaP4zqV4Q` |
| List Users | GET | `/Users` | `conn_mod_def::GLXcTDrqKYg::Dv1hWGGbS22BU-i48FglJQ` |
| Create User | POST | `/Users` | `conn_mod_def::GLXcS5lpkrA::N0q7L6ygSkyGS8zBRlWG7w` |
| Delete User | DELETE | `/Users/{{id}}` | `conn_mod_def::GLXcTBlWG7A::vfxECqs4RCqKOIqtCqJXWw` |
| Patch a User | PATCH | `/Users/{{id}}` | `conn_mod_def::GLXcTD4yV3g::70osCGt1T2KmKzO-1jZXdg` |
| Replace a User | PUT | `/Users/{{id}}` | `conn_mod_def::GLXcTDFgtdA::6W2os33ZSA-klPxGoEp9cw` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image Item on a Board | GET | `/v2/boards/{{boardId}}/images/{{itemId}}` | `conn_mod_def::GLXcOyBwXHg::1LK9RA6eRbSBV92u6Rb2MA` |
| Create an Image Item Using URL for a Board | POST | `/v2/boards/{{boardId}}/images` | `conn_mod_def::GLXcOmCdLvg::Gk5Ho-d6QcCNPw9tLy6Q6g` |
| Create Image Item Using File from Device for a Board | POST | `/v2/boards/{{boardIdPlatformFileUpload}}/images` | `conn_mod_def::GLXcOyBPjgg::OOnHcQymQKG-eitjEWMZbw` |
| Delete an Image Item from a Board | DELETE | `/v2/boards/{{boardId}}/images/{{itemId}}` | `conn_mod_def::GLXcOlpsxZg::HlkgTckXQCeXKOzSCzw-qQ` |
| Update an Image Item Using File From Device | PATCH | `/v2/boards/{{boardIdPlatformFileUpload}}/images/{{itemId}}` | `conn_mod_def::GLXcOwWwXog::hX-yaLQRTNSKB13W1NzpFQ` |
| Update an Image Item Using URL on a Board | PATCH | `/v2/boards/{{boardId}}/images/{{itemId}}` | `conn_mod_def::GLXcOxy7DQg::hcAxY2P1RnuOKIX5IC8SBA` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Member | GET | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}/members/{{memberId}}` | `conn_mod_def::GLXcP1dSXIg::3bLpOzNGRxaJhvKE0KSpBg` |
| List Project Members for an Organization Team Project | GET | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}/members` | `conn_mod_def::GLXcP29OKZg::QHXh0KVCQoeix874Yv9CSA` |
| Add Member to a Project | POST | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}/members` | `conn_mod_def::GLXcP28_e8g::TCzJSMW-T4GKTqKMkqjFbg` |
| Remove a Project Member | DELETE | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}/members/{{memberId}}` | `conn_mod_def::GLXcP16AwXA::7TTiThwSQwKC6HicRsnXeg` |
| Update a Project Member | PATCH | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}/members/{{memberId}}` | `conn_mod_def::GLXcP1t7Hqg::cTlVAjXLRZqz10uMtvjJJg` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project for a Team in an Organization | GET | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}` | `conn_mod_def::GLXcP-qK7fg::hmifFgGVSwKTERbp7THgkQ` |
| List Projects in an Organization Team | GET | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects` | `conn_mod_def::GLXcQIYzwsA::6hk1aTBXQtm8lP31B2pxfg` |
| Create a Team Project in an Organization | POST | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects` | `conn_mod_def::GLXcP_p8NpA::8d_MK8kQT7-NH6-9Hs0H3w` |
| Delete a Team Project in an Organization | DELETE | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}` | `conn_mod_def::GLXcP-p7nBg::wRnCgiLuQ_S0gItIbIIy2Q` |
| Update a Team Project in an Organization | PATCH | `/v2/orgs/{{orgId}}/teams/{{teamId}}/projects/{{projectId}}` | `conn_mod_def::GLXcQH6sg8A::VGEJDsaEQIOH8L41hqhjIA` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User Group in an Organization | GET | `/v2/orgs/{{orgId}}/groups/{{groupId}}` | `conn_mod_def::GLXcTVxet7g::uL_trn_DS7WdcBnmrllI8Q` |
| List User Groups for an Organization | GET | `/v2/orgs/{{orgId}}/groups` | `conn_mod_def::GLXcTlGoqbg::ccl2HFB7TmaX0tsT73MfEw` |
| Create a User Group in an Organization | POST | `/v2/orgs/{{orgId}}/groups` | `conn_mod_def::GLXcTVIC_-A::tJAdJJBJQmCNHXblsuVXzA` |
| Delete a User Group in an Organization | DELETE | `/v2/orgs/{{orgId}}/groups/{{groupId}}` | `conn_mod_def::GLXcTUjK1MA::X1UyQrh-SZOkm5F9SKzjbg` |
| Update a User Group in an Organization | PATCH | `/v2/orgs/{{orgId}}/groups/{{groupId}}` | `conn_mod_def::GLXcTj1B2qg::TTzyP1G6Rf6GiMcywJ-BHg` |

### BoardExportJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Case's Board Export Jobs | GET | `/v2/orgs/{{orgId}}/cases/{{caseId}}/export-jobs` | `conn_mod_def::GLXcPNb7Z8A::QjA_-WtWQ_-p9PjTrjaCUg` |
| Get Board Export Job Status for an Organization | GET | `/v2/orgs/{{orgId}}/boards/export/jobs/{{jobId}}` | `conn_mod_def::GLXcMMANOGA::FhqVY7p6TkemVdcxQJH4YA` |
| List Board Export Jobs for an Organization | GET | `/v2/orgs/{{orgId}}/boards/export/jobs` | `conn_mod_def::GLXcMN6RRxg::7se_bLyKRuW1KHtDCBiTQA` |
| Create Board Export Job for an Organization | POST | `/v2/orgs/{{orgId}}/boards/export/jobs` | `conn_mod_def::GLXcMN6RGDg::wmvrAlwMRmGFuqmH0KbOYQ` |
| Update Board Export Job Status for an Organization | PUT | `/v2/orgs/{{orgId}}/boards/export/jobs/{{jobId}}/status` | `conn_mod_def::GLXcMXa-anA::lsOkrHhMSUaLnHAHPLykOg` |

### BoardMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Board Member | GET | `/v2/boards/{{boardId}}/members/{{boardMemberId}}` | `conn_mod_def::GLXcMWVk5xg::g3O4gV9sSpGic9_FoWa-0Q` |
| List Board Members | GET | `/v2/boards/{{boardId}}/members` | `conn_mod_def::GLXcMW6Py8g::q9GuMB4US4anSqde6NnEWQ` |
| Remove a Board Member | DELETE | `/v2/boards/{{boardId}}/members/{{boardMemberId}}` | `conn_mod_def::GLXcMW9b2hA::9KiuEcfMTSOow8K716Jtew` |
| Share Board Members Using Boards | POST | `/v2/boards/{{boardId}}/members` | `conn_mod_def::GLXcMf2UWEg::PmZKU6SaQsO12NGnAtrHQg` |
| Update a Board Member | PATCH | `/v2/boards/{{boardId}}/members/{{boardMemberId}}` | `conn_mod_def::GLXcMhx70Dg::KrT1tiaiSDa01l8fr1WKhA` |

### CodeWidgets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Board's Code Widget Item | GET | `/v2-experimental/boards/{{boardId}}/code_widgets/{{itemId}}` | `conn_mod_def::GLXcM-LdEmg::yV8J7SLIT0WzlawMt2MBDw` |
| Get Code Widget Items for a Board | GET | `/v2-experimental/boards/{{boardId}}/code_widgets` | `conn_mod_def::GLXcNBLPLkg::Hu-0JyanT_CpnrKPSQKlzg` |
| Create Code Widget Item on a Board | POST | `/v2-experimental/boards/{{boardId}}/code_widgets` | `conn_mod_def::GLXcM0FPzXg::B9FfTfiHQIm5WianFWFkeQ` |
| Delete a Code Widget Item from a Board | DELETE | `/v2-experimental/boards/{{boardId}}/code_widgets/{{itemId}}` | `conn_mod_def::GLXcM9FjMeg::MDEP1ztpTTKbJOQOACYe9Q` |
| Move a Code Widget Item's Position on a Board | PATCH | `/v2-experimental/boards/{{boardId}}/code_widgets/{{itemId}}/position` | `conn_mod_def::GLXcM-W5eoA::es6mstTSRCiOMtpDzwJBGA` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Document Item from a Board | GET | `/v2/boards/{{boardId}}/documents/{{itemId}}` | `conn_mod_def::GLXcNniM7tA::klul6tOaRry9keiDMJObAQ` |
| Create a Board Document Item Using File From Device | POST | `/v2/boards/{{boardIdPlatformFileUpload}}/documents` | `conn_mod_def::GLXcNnqyzHA::toXO2hpvRYaballLgNjMzw` |
| Create a Document Item Using URL on a Board | POST | `/v2/boards/{{boardId}}/documents` | `conn_mod_def::GLXcNcrz6Hg::BvimWekMSnOtP-ZhHp8dIA` |
| Update a Board Document Item Using File From Device | PATCH | `/v2/boards/{{boardIdPlatformFileUpload}}/documents/{{itemId}}` | `conn_mod_def::GLXcNn3TPoA::4jZzj_FQRGazxIdInVufaQ` |
| Update a Board Document Item Using URL | PATCH | `/v2/boards/{{boardId}}/documents/{{itemId}}` | `conn_mod_def::GLXcNni9-YA::_elhr4lgTEehERjvho-vvg` |

### StickyNotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sticky Note Item from a Board | GET | `/v2/boards/{{boardId}}/sticky_notes/{{itemId}}` | `conn_mod_def::GLXcQ891iAg::J49ZRIJsTY-rK9q0l35fkA` |
| Create a Sticky Note Item on a Board | POST | `/v2/boards/{{boardId}}/sticky_notes` | `conn_mod_def::GLXcQ0ZIjrg::kCOA9mjmQtarjpguzDir8Q` |
| Delete a Board Sticky Note Item | DELETE | `/v2/boards/{{boardId}}/sticky_notes/{{itemId}}` | `conn_mod_def::GLXcQqka8pg::cFSC1L85RZO79Jv1H9AOhw` |
| Update Sticky Note Item on a Board | PATCH | `/v2/boards/{{boardId}}/sticky_notes/{{itemId}}` | `conn_mod_def::GLXcQ9GBMqA::ToXfH0-rQgO5qVHbaZ6RKw` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Items by Tag for a Board | GET | `/v2/boards/{{boardIdPlatformTags}}/items` | `conn_mod_def::GLXcRFYF0cA::kt6kNcG_RNq8ZggGxFlWIQ` |

3 more Items actions are available through search.

This lists 90 of 197 actions. For anything not here, call `search_one_platform_actions` with platform `miro`. The full catalog is at https://www.withone.ai/knowledge/miro.

## When a call fails

The error comes from Miro, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/miro

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
