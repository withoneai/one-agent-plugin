---
name: pipedrive
description: Pipedrive is a sales CRM designed to help small teams manage leads and deals. It offers visual pipelines, activity tracking, automation, and reporting to streamline sales processes. Read and write Pipedrive data through One: deals, persons, organizations, dealfields, personfields, roles and more, 312 actions with real parameter documentation. Use whenever the user asks to look something up in Pipedrive, create or update a record there, or build code against the Pipedrive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pipedrive
  generated-from: one-knowledge-base
---

# Pipedrive through One

Pipedrive is a sales CRM designed to help small teams manage leads and deals. It offers visual pipelines, activity tracking, automation, and reporting to streamline sales processes.

One exposes Pipedrive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pipedrive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Pipedrive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Pipedrive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Deals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal’s Conversion Status | GET | `/api/v2/deals/{{id}}/convert/status/{{conversionId}}` | `conn_mod_def::GJ6GYu2HiHo::BiMK8RaRQ_m-AbTW-YYC4g` |
| Get a Deal’s Details | GET | `/deals/{{id}}` | `conn_mod_def::GJ6GY7AZnt4::uFzgHsghTn-6to4hMP-6mA` |
| Get Archived Deals Summary | GET | `/deals/summary/archived` | `conn_mod_def::GJ6GYzPGOoI::JmRD3KZcT5uOfqCkFe4Trw` |
| Get Archived Deals Timeline | GET | `/deals/timeline/archived` | `conn_mod_def::GJ6GYxwN-BY::XmSTKX4ZQJio4_QCBtvzNg` |
| Get Deals Summary | GET | `/deals/summary` | `conn_mod_def::GJ6GY8aQd7s::knvMa8CqSnebBgu-fmOdyQ` |
| List a Deal’s Field Value Changelog | GET | `/deals/{{id}}/changelog` | `conn_mod_def::GJ6GZjbWsxk::hhQ-yVI8Ti66FfZnhCfgqw` |
| List a Deal’s Participants Changelog | GET | `/v1/deals/{{id}}/participantsChangelog` | `conn_mod_def::GJ6GZryIab4::KuXa65kfSR-4yASxqEq66A` |
| List a Deal’s Permitted Users | GET | `/deals/{{id}}/permittedUsers` | `conn_mod_def::GJ6GZYEa9fU::pAWfVZ_LQ2iE3dEJtf13xg` |
| List a Deal’s Updates (Flow) | GET | `/deals/{{id}}/flow` | `conn_mod_def::GJ6GZZQG_fc::NKfO8GcIQcuHlFiOIiijKw` |
| List Archived Deals | GET | `/deals/archived` | `conn_mod_def::GJ6GYxdgZbs::nj5ccWrcRaWJQt3TqDX6_Q` |
| List Deals | GET | `/deals` | `conn_mod_def::GJ6GYx2X67A::dxPBax3VRkWDLXL_Qy9fig` |
| Search Deals | GET | `/api/v2/deals/search` | `conn_mod_def::GJ6GZt3aNa4::8x8BmP6ITweiPEvEQau5sA` |

8 more Deals actions are available through search.

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person’s Details | GET | `/api/v2/persons/{{id}}` | `conn_mod_def::GJ6Ge_SlOKM::8b5kwYPcT2yABg31N-KmAA` |
| Get a Person’s Picture | GET | `/api/v2/persons/{{id}}/picture` | `conn_mod_def::GJ6Ge3KbLQc::PtR-Jp7CRiS4CXFF7yMYsA` |
| List a Person’s Field Value Changelog | GET | `/v1/persons/{{id}}/changelog` | `conn_mod_def::GJ6GfGuRtPs::gDFOLqgTTR2yOvON8nOv1Q` |
| List a Person’s Followers | GET | `/api/v2/persons/{{id}}/followers` | `conn_mod_def::GJ6Ge3Lv5Yg::dMb_XTukQESwEgDkGWmIOQ` |
| List a Person’s Mail Messages | GET | `/persons/{{id}}/mailMessages` | `conn_mod_def::GJ6GfJTkiu0::mWUdtxQ2SX2qbDHpuKpwHg` |
| List a Person’s Permitted Users | GET | `/persons/{{id}}/permittedUsers` | `conn_mod_def::GJ6GfHJl6RU::L-w8aq5UT8eo_Z1PEWBkFQ` |
| List a Person’s Updates (Flow) | GET | `/v1/persons/{{id}}/flow` | `conn_mod_def::GJ6GfHPq4EU::SrJJb9ZfREO8fTh2EVHS-A` |
| List Persons | GET | `/persons` | `conn_mod_def::GJ6GevqHqSo::Hl--rFBYR7-c7sru188ZgA` |
| Search Persons | GET | `/api/v2/persons/search` | `conn_mod_def::GJ6GfTlb4kQ::IO_FN0ziRNCw6iMXE5UhSg` |
| Add a Follower to a Person | POST | `/api/v2/persons/{{id}}/followers` | `conn_mod_def::GJ6GelK4YGo::1p_CykmgTbGPD7L_xzu2Ug` |
| Add a Person | POST | `/persons` | `conn_mod_def::GJ6Gef5QX28::-8Cvrsa0Qv6CFWD2ZsUFDw` |
| Add a Person’s Picture | POST | `/v1/persons/{{id}}/picture` | `conn_mod_def::GJ6GetEHd5w::JCO0lImYTHGhlbhZNK1Cbw` |

4 more Persons actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Details | GET | `/organizations/{{id}}` | `conn_mod_def::GJ6GdknM88U::HveKNZ9hRwGMtspcItiY7A` |
| List an Organization’s Field Value Changelog | GET | `/organizations/{{id}}/changelog` | `conn_mod_def::GJ6GdtJ8jrU::jbzlQa9qSe63ywq_McQTSA` |
| List an Organization’s Followers Changelog | GET | `/api/v2/organizations/{{id}}/followers/changelog` | `conn_mod_def::GJ6GdcpoNtE::Ci01E5f9RZyg6_P2P5MGZQ` |
| List an Organization’s Mail Messages | GET | `/organizations/{{id}}/mailMessages` | `conn_mod_def::GJ6GdsIZZCo::bt1_P8SARrapPgIZVGd9Zg` |
| List an Organization’s Permitted Users | GET | `/organizations/{{id}}/permittedUsers` | `conn_mod_def::GJ6Gdvugw4Y::uQG18rdwSieCyuFDT_c5uw` |
| List an Organization’s Updates (Flow) | GET | `/v1/organizations/{{id}}/flow` | `conn_mod_def::GJ6GdtPKqzA::0JH2ULMHQ0eEU4CnGVPpcw` |
| List Organizations | GET | `/organizations` | `conn_mod_def::GJ6GddKuk9c::MHYEaUVRR--hlRKF7iYPLw` |
| Search Organizations | GET | `/api/v2/organizations/search` | `conn_mod_def::GJ6Gd-Pl2v0::dUPmIDxHQeGa9L1HpU36ww` |
| Add a Follower to an Organization | POST | `/api/v2/organizations/{{id}}/followers` | `conn_mod_def::GJ6GdThcvXk::QZWuZNwMR2S-JTjqMhN_kw` |
| Add an Organization | POST | `/organizations` | `conn_mod_def::GJ6GdP3dMi8::Swo5rOViRUGPM9j9ur2zwQ` |
| Delete an Organization | DELETE | `/api/v2/organizations/{{id}}` | `conn_mod_def::GJ6GddMsrVo::MXmSZr4rQ12R1ouHa7j69Q` |
| Merge an Organization with Another Organization | PUT | `/organizations/{{id}}/merge` | `conn_mod_def::GJ6Gd2lBo5Y::1WXlcwOlSzKwzH9dLjuuAQ` |

1 more Organizations actions are available through search.

### DealFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deal Field | GET | `/api/v2/dealFields/{{fieldCode}}` | `conn_mod_def::GJ6GX_YeDeI::zyXKge7CTrKyRBssdqH4Jg` |
| List Deal Fields (Metadata) | GET | `/dealFields` | `conn_mod_def::GJ6GXwv76Qg::Va_WHBe6SxCDwTZzprQn8A` |
| Add a Deal Field | POST | `/dealFields` | `conn_mod_def::GJ6GXj2YiRQ::beKwaOqyTvaM0tuCUjdj9A` |
| Add Deal Field Options in Bulk (Atomic) | POST | `/api/v2/dealFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GXjjZQcc::56VkN9c-SmGARqtURfQXHA` |
| Create a Deal Custom Field | POST | `/dealFields` | `conn_mod_def::GJ6GXjkBS-A::gUjQjav-Q4yclBUHrLi74A` |
| Delete a Deal Field | DELETE | `/dealFields/{{id}}` | `conn_mod_def::GJ6GXxem03o::24ew7yRDTuCTnIiXnexn2A` |
| Delete a Deal Field | DELETE | `/api/v2/dealFields/{{fieldCode}}` | `conn_mod_def::GJ6GXtwMmpk::PFjqmlX2R3WAnyOXE9Hp5A` |
| Delete Deal Field Options in Bulk | DELETE | `/api/v2/dealFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GXuSXQ6w::qHnq8hazQCWlyv7OWpjyTg` |
| Delete Deal Fields in Bulk | DELETE | `/dealFields` | `conn_mod_def::GJ6GXtuTDic::zKDuxialQymwv1eVOd0znA` |
| Update a Deal Field | PUT | `/dealFields/{{id}}` | `conn_mod_def::GJ6GX5EZ3ak::iv0Dlnn2Tx6F7gUh1ADadg` |
| Update a Deal Field | PATCH | `/api/v2/dealFields/{{fieldCode}}` | `conn_mod_def::GJ6GX5JtGv0::LShJLjELRiijcPr5hXTmnw` |
| Update Deal Field Options in Bulk (for a Deal Field) | PATCH | `/api/v2/dealFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GX5L4JrQ::dHRMA70oQgy38FZFazkLDA` |

### PersonFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Person Field | GET | `/api/v2/personFields/{{fieldCode}}` | `conn_mod_def::GJ6GeTqOzeA::1uqW3DtZSgWGWT6sjt83xQ` |
| List Person Fields (Metadata) | GET | `/personFields` | `conn_mod_def::GJ6GeUMce6c::Rjys3RovQzG9xGzx1hMsOw` |
| Add a New Person Field | POST | `/personFields` | `conn_mod_def::GJ6GeGQh7Nc::jCVG-hxGTF6qK7PtFCPyCg` |
| Create a Person Custom Field | POST | `/api/v2/personFields` | `conn_mod_def::GJ6GeG5JoWk::X5RbmseMQSSgiOyfpPhSuQ` |
| Delete a Person Field | DELETE | `/personFields/{{id}}` | `conn_mod_def::GJ6GeHwgtTQ::MLxBfXvfSJeKeopeDmVp2g` |
| Delete a Person Field | DELETE | `/api/v2/personFields/{{fieldCode}}` | `conn_mod_def::GJ6GeYzcwuc::x8boPLE0Rn2YE5jLK7-3tQ` |
| Delete a Person Field’s Options in Bulk | DELETE | `/personFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GeUWwaFQ::vyhRS8GDQPuxDiyGrXcMPw` |
| Delete Multiple Person Fields (Bulk) | DELETE | `/personFields` | `conn_mod_def::GJ6GeTyQoDA::Tpr8Ivh-SK-0PRo4CGJ8cw` |
| Update a Person Field | PATCH | `/api/v2/personFields/{{fieldCode}}` | `conn_mod_def::GJ6Gef8nyJQ::Wn6bRFiiQUWrVOk5R7vKUA` |
| Update a Person Field | PUT | `/personFields/{{id}}` | `conn_mod_def::GJ6Geg8bj-Q::dOdsqsysSfixO-L5Y-qd5g` |
| Update a Person Field’s Options in Bulk | PATCH | `/api/v2/personFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GegIQn5Q::6UkHdlRMSFO3dUUoDHhxaA` |

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role | GET | `/roles/{{id}}` | `conn_mod_def::GJ6GiX2hiFM::5zOr3KORRQCIWdrjSN2OAA` |
| List a Role’s Assignments | GET | `/v1/roles/{{id}}/assignments` | `conn_mod_def::GJ6GibAi-xY::GfqMkmWaSmC84KiarMQqrA` |
| List a Role’s Pipeline Visibility | GET | `/roles/{{id}}/pipelines` | `conn_mod_def::GJ6GiYLLxxo::TSz5bHlmRLa3hsjZJTujAQ` |
| List a Role’s Visibility Settings | GET | `/roles/{{id}}/settings` | `conn_mod_def::GJ6Gic8VfeA::2r8ewMWRSD--TrTxCrTIJA` |
| List Roles | GET | `/roles` | `conn_mod_def::GJ6GiHG6pcY::TYbtbtnAT46PaEeBjk02dw` |
| Add a Role | POST | `/roles` | `conn_mod_def::GJ6Gh-7r1QQ::PInubHRlRm-TS7X22ahUZw` |
| Add or Update a Role’s Visibility Setting | POST | `/v1/roles/{{id}}/settings` | `conn_mod_def::GJ6GiRAtF0w::bNJ45oriQRy2JAek77QRQg` |
| Delete a Role | DELETE | `/roles/{{id}}` | `conn_mod_def::GJ6GiIgU6G4::2UIzTrxmS7im3URKRAJj3A` |
| Delete a Role Assignment | DELETE | `/roles/{{id}}/assignments` | `conn_mod_def::GJ6GiJ1VfX8::QYQ1FNFcS7iP7iVHDwuh1g` |
| Update a Role’s Pipeline Visibility | PUT | `/roles/{{id}}/pipelines` | `conn_mod_def::GJ6GiYyJYeA::jHx8RGegSwudPLYFy2bJ8A` |
| Update Role Details | PUT | `/roles/{{id}}` | `conn_mod_def::GJ6Gij9d2UA::lqNGWigBSGCVE08yUbJmgg` |

### OrganizationFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Field | GET | `/api/v2/organizationFields/{{fieldCode}}` | `conn_mod_def::GJ6GctDd3M8::90CXi3jnSCOIp0a7yYuMIA` |
| List Organization Fields | GET | `/organizationFields` | `conn_mod_def::GJ6GctmlP7A::nxL3gPGIQQatyq2-By4Wzw` |
| Add an Organization Field | POST | `/organizationFields` | `conn_mod_def::GJ6GclAdwWA::HdTfsHRiS1uPc6FJWUaRJg` |
| Create an Organization Custom Field | POST | `/organizationFields` | `conn_mod_def::GJ6GclJny_Q::FsPyNcHOSMerSjfGPq9P1Q` |
| Delete an Organization Field | DELETE | `/organizationFields/{{id}}` | `conn_mod_def::GJ6GcjxznYo::JLr2b9h3SgyJO2dZuqGv9g` |
| Delete an Organization Field | DELETE | `/api/v2/organizationFields/{{fieldCode}}` | `conn_mod_def::GJ6GcvmGAng::i7MeA9gqQmyG5O_wa9I3xQ` |
| Delete an Organization Field’s Options in Bulk | DELETE | `/api/v2/organizationFields/{{fieldCode}}/options` | `conn_mod_def::GJ6Gc52PsXg::225U9XwCTrKNNpqBorbB2g` |
| Delete Multiple Organization Fields (Bulk) | DELETE | `/organizationFields` | `conn_mod_def::GJ6Gcl0dYWM::oLiMOlM_Qi2Mj64xDMSvfQ` |
| Update an Organization Field | PUT | `/v1/organizationFields/{{id}}` | `conn_mod_def::GJ6GctCArmw::ba0X0w6UQj6TrF-pBfeeNg` |
| Update an Organization Field | PATCH | `/api/v2/organizationFields/{{fieldCode}}` | `conn_mod_def::GJ6GdBTwLNs::twl_gjAZRN-rCpwC0ZrybA` |
| Update an Organization Field’s Options in Bulk | PATCH | `/api/v2/organizationFields/{{fieldCode}}/options` | `conn_mod_def::GJ6GdBJKM1o::aRhhcn-qRjaN8MwHJswYvQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Users by Name | GET | `/users/find` | `conn_mod_def::GJ6Gi_N6kYQ::uIc-87_ZTyisUonv3ILZhg` |
| Get a User | GET | `/users/{{id}}` | `conn_mod_def::GJ6GjIYnvu0::IH-bQCj8SA-wITnhLJ3f0A` |
| Get the Current User (Me) | GET | `/v1/users/me` | `conn_mod_def::GJ6GjIyaFXU::nK1q1ufLSv6aG3Z1XvIdTg` |
| List a User’s Followers | GET | `/users/{{id}}/followers` | `conn_mod_def::GJ6GjJUhI_w::Owg6u6P-QeK1LWA55SGJwg` |
| List a User's Permissions | GET | `/users/{{id}}/permissions` | `conn_mod_def::GJ6GjZM8_Fk::Uh7OKt6dT0e5CMRykh6oGg` |
| List a User's Role Assignments | GET | `/users/{{id}}/roleAssignments` | `conn_mod_def::GJ6GjSC6czI::k6yzyGE-T52vSjedbKdvqw` |
| List a User’s Role Settings | GET | `/users/{{id}}/roleSettings` | `conn_mod_def::GJ6GjdpaDrs::0Y1yUyx2QJuit2inOOpiyA` |
| List Users | GET | `/users` | `conn_mod_def::GJ6GjMvtvOM::9WO5y6cDQpqWKkZ4inSeBg` |
| Add a New User | POST | `/users` | `conn_mod_def::GJ6Gi_ZBTf8::gatgzD6HSV-063aqDINCqA` |

1 more Users actions are available through search.

This lists 90 of 312 actions. For anything not here, call `search_one_platform_actions` with platform `pipedrive`. The full catalog is at https://www.withone.ai/knowledge/pipedrive.

## When a call fails

The error comes from Pipedrive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pipedrive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
