---
name: hub-planner
description: Hub Planner is a resource management and scheduling platform that provides team planning, timesheets, leave tracking, and project forecasting, allowing agencies and professional services teams to allocate people effectively, monitor capacity, and coordinate project delivery through integrations and shared workflows. Read and write Hub Planner data through One: projects, bookings, projectcustomfieldtemplates, costcategories, unassignedwork, vacation and more, 134 actions with real parameter documentation. Use whenever the user asks to look something up in Hub Planner, create or update a record there, or build code against the Hub Planner API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hub-planner
  generated-from: one-knowledge-base
---

# Hub Planner through One

Hub Planner is a resource management and scheduling platform that provides team planning, timesheets, leave tracking, and project forecasting, allowing agencies and professional services teams to allocate people effectively, monitor capacity, and coordinate project delivery through integrations and shared workflows.

One exposes Hub Planner through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hub-planner` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hub Planner is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hub Planner account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v1/project` | `conn_mod_def::GMZ5IhRb0dU::AqGEQXTUQpi7Ai8TO3Cicw` |
| Delete a Project | DELETE | `/v1/project/{{id}}` | `conn_mod_def::GMZ5Ig_jgj4::yxGs-bx_RFase6iogQ5wgg` |
| Delete Multiple Projects | DELETE | `/v1/project` | `conn_mod_def::GMZ5IgqmhMo::We3iAOd8Ru-nMaI7L0ti4Q` |
| Remove a Client from Projects | POST | `/v1/project/client/{{id}}` | `conn_mod_def::GMZ5Iwf16tE::Xp9p7yMzT9KTqPpY1w8QMA` |
| Remove a Resource from Projects | POST | `/v1/project/removeResourceFromProjects/{{id}}` | `conn_mod_def::GMZ5IxXRxe0::p_rhzWvxSsa1rtm8OYQUIA` |
| Search Projects | POST | `/v1/project/search` | `conn_mod_def::GMZ5IwqRilA::U1f9HDLHSGikq7ZZnnwl0A` |

### Bookings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bookings | GET | `/v1/booking` | `conn_mod_def::GMZ5DOUG9Sg::Wt5e-jSoTdOWMFJMQQ8Dqw` |
| Delete Multiple Bookings or Booking Requests (Bulk) | DELETE | `/v1/booking` | `conn_mod_def::GMZ5DO2uHF8::F4KN889PS8eMWGqV7gvGZg` |
| Patch a Booking by ID | PATCH | `/v1/booking/{{id}}` | `conn_mod_def::GMZ5ETtwWWU::M8iuuBtVR_2Byo4w0vG2cg` |
| Search Bookings | POST | `/v1/booking/search` | `conn_mod_def::GMZ5EOmu30I::lL5eiaDVQrCVT3bkIBaIlw` |
| Update a Booking | PUT | `/v1/booking/{{id}}` | `conn_mod_def::GMZ5EPC_pH0::3hMtgojNQ9qrl6vXuPMhpQ` |

### ProjectCustomFieldTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Custom Field Templates | GET | `/v1/project/customField/template` | `conn_mod_def::GMZ5FacV1V8::IpSCQmNOSUy8wDLj-lpowA` |
| Get Project Custom Field Templates | GET | `/v1/project/customField/template` | `conn_mod_def::GMZ5IofWl1I::wutdiXmNRiuaVmwDGTmAwA` |
| Search Project Custom Field Templates | POST | `/v1/project/customField/template/search` | `conn_mod_def::GMZ5FktEfUo::9XhbhsciQh60uQrc-mj_kA` |
| Search Project Custom Field Templates | POST | `/v1/project/customField/template/search` | `conn_mod_def::GMZ5Ix5xw9s::bMO3vL3rSy-QWf9DNuGFQw` |
| Search Project Custom Field Templates | POST | `/v1/project/customField/template/search` | `conn_mod_def::GMZ5KlL7TwU::5uWttk_TQ_agG-QU1ZkPtQ` |

### CostCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Cost Category by ID | GET | `/v1/costCategories/{{id}}` | `conn_mod_def::GMZ5IF7vbaQ::cFyK19GrReikSIisedKceg` |
| Create a Project Cost Category | POST | `/v1/costCategories` | `conn_mod_def::GMZ5IJzPmJQ::2_NXWNWFSjmBc-kAXgDVJw` |
| Delete a Project Cost Category | DELETE | `/v1/costCategories/{{id}}` | `conn_mod_def::GMZ5HsI-apo::BGxrxGboS2uTtCTqxrT5fg` |
| Search Project Cost Categories | POST | `/v1/costCategories/search` | `conn_mod_def::GMZ5IB1_RCQ::LlwGGY3pRKiaJhHwv3CqLA` |
| Update an Existing Project Cost Category | PUT | `/v1/costCategories/{{id}}` | `conn_mod_def::GMZ5IC5mxrE::sXz0THWqSDiDYrlV35-71g` |

### UnassignedWork

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Unassigned Work | GET | `/v1/unassigned-work` | `conn_mod_def::GMZ5Lhh5P4k::UqXpDOmzT_yLdPDe8P48eQ` |
| Get Specific Unassigned Work | GET | `/v1/unassigned-work/{{id}}` | `conn_mod_def::GMZ5LjdNTyI::VSxc6zZiR_S2b74Pia89tw` |
| Create Unassigned Work | POST | `/v1/unassigned-work` | `conn_mod_def::GMZ5LivgDP8::mv5kXMZDTp2o-aWTn9u_uQ` |
| Delete Unassigned Work | DELETE | `/v1/unassigned-work/{{id}}` | `conn_mod_def::GMZ5LK4grEs::AXljgMT-RGeTeKdHfo1ceg` |
| Update an Unassigned Work | PUT | `/v1/unassigned-work/{{id}}` | `conn_mod_def::GMZ5LitXGJY::t0LezAOQRhSioqxGPywpkg` |

### Vacation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Vacation | GET | `/v1/vacation/{{id}}` | `conn_mod_def::GMZ5LsgMR04::0YLXr34NRAe4mz6wPNGwwg` |
| Create a Vacation | POST | `/v1/vacation` | `conn_mod_def::GMZ5Lq6DHBE::IaCFypE3ScKa2j7-DMKLbQ` |
| Delete a Vacation | DELETE | `/v1/vacation/{{id}}` | `conn_mod_def::GMZ5Li6qEac::EJ6dxjJwQr6jai8iSyPQMg` |
| Patch a Vacation | PATCH | `/v1/vacation/{{id}}` | `conn_mod_def::GMZ5LqVuqvk::p23NBh_uTHiIBNt7SEUD0g` |
| Update Vacation | PUT | `/v1/vacation/{{id}}` | `conn_mod_def::GMZ5LzAaGF4::s-StxO0WR_6RqqJd4r54sA` |

### BillingRate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Billing Rate by ID | GET | `/v1/billingRate/{{id}}` | `conn_mod_def::GMZ5BkHmkac::ql7wYmovRKGvQwHdPEQdWw` |
| Create a Billing Rate | POST | `/v1/billingRate` | `conn_mod_def::GMZ5Bj14fmY::wqUestC0Tay7ylHoLFDpIA` |
| Delete a Billing Rate | DELETE | `/v1/billingRate/{{id}}` | `conn_mod_def::GMZ5BpPYKQo::SDQm60wvRNaWNKYeoImrSw` |
| Update a Billing Rate | PUT | `/v1/billingRate/{{id}}` | `conn_mod_def::GMZ5DCn6dDE::TG7KGHB_Q_OMzTRv7M9jfw` |

### Client

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client by ID | GET | `/v1/client/{{id}}` | `conn_mod_def::GMZ5EdXOGMM::UoxnCoanTxeKeFKe_Pp_kQ` |
| Create a Client | POST | `/v1/client` | `conn_mod_def::GMZ5Eb0YofQ::lRdAzaolQ-GLwpd6uW2XJg` |
| Delete a Client | DELETE | `/v1/client/{{id}}` | `conn_mod_def::GMZ5FR2elxE::2Y9jiy8_SxaE_U5VG599Vw` |
| Update a Client by ID | PUT | `/v1/client/{{id}}` | `conn_mod_def::GMZ5FZxlers::hbjZrHCjQJK51K-c5Wyhpg` |

### ResourceCustomFieldTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Resource Custom Field Templates | GET | `/v1/resource/customField/template` | `conn_mod_def::GMZ5FklDpbs::pgvQ39vgSWmGmEKNKWLY4w` |
| Get Resource Custom Field Templates | GET | `/v1/resource/customField/template` | `conn_mod_def::GMZ5KfRdXOk::Nk43lFBKRAiY50khpRK7yQ` |
| Add Choices to a Resource Custom Field Template | POST | `/v1/resource/customField/template/{{id}}/addChoices` | `conn_mod_def::GMZ5FseK2Bc::VCqhNfC9SH-Pi8HR_CzuvA` |
| Delete a Resource Custom Field Template by ID | DELETE | `/v1/resource/customField/template/{{id}}` | `conn_mod_def::GMZ5FaoKG3k::a1EeNUrrRmOJ9H2ptRh7cA` |

### ProjectCustomFieldTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Custom Field Template by ID | GET | `/v1/project/customField/template/{{id}}` | `conn_mod_def::GMZ5FbNdjdY::4QgPynU_QmC5fba6ThOq6A` |
| Create a Project Custom Field Template | POST | `/v1/project/customField/template` | `conn_mod_def::GMZ5FkhkS5g::tNTXws4eT5OnkdHJk9wNZw` |
| Delete a Project Custom Field Template | DELETE | `/v1/project/customField/template/{{id}}` | `conn_mod_def::GMZ5FcXcqP4::s9pHn2VsRGKi69JXDPxoLw` |
| Update a Project Custom Field Template | PUT | `/v1/project/customField/template/{{id}}` | `conn_mod_def::GMZ5GkRiwaA::t4nGqGj7QKC2iWnj5tWM5Q` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events | GET | `/v1/event` | `conn_mod_def::GMZ5GyZ3-ss::OUVBuFewSSaaYMo550uZnw` |
| Delete an Event | DELETE | `/v1/event/{{id}}` | `conn_mod_def::GMZ5GwvePrc::U1pBh8xTR9CqJgTj9OGMEw` |
| Search Events | POST | `/v1/event/search` | `conn_mod_def::GMZ5GvnyG6E::Iuh7RVLlQcCdh-DZP-pvtQ` |
| Update an Event by ID | PUT | `/v1/event/{{id}}` | `conn_mod_def::GMZ5G6lj45E::vLIhX-HUQtSrxTeuCNXC9A` |

### ProjectGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Project Group | GET | `/v1/projectgroup/{{id}}` | `conn_mod_def::GMZ5G7UuFlQ::L8d3d0W-TZSbgvw8TANMZA` |
| Create a Project Group | POST | `/v1/projectgroup` | `conn_mod_def::GMZ5HGuz3-8::4-_k1GgFSGqIKD5XCwYD9w` |
| Delete a Project Group | DELETE | `/v1/projectgroup/{{id}}` | `conn_mod_def::GMZ5G6HF5Bg::9NKNMAUJQY2gW50UvnqAyw` |
| Update a Project Group | PUT | `/v1/projectgroup/{{id}}` | `conn_mod_def::GMZ5HbnFRR8::lb17kyXiRCyAeZpYrq6FuQ` |

### Milestone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Milestone | GET | `/v1/milestone/{{id}}` | `conn_mod_def::GMZ5HxIYoyQ::6QkgrLKARjuagCWgNgX0yg` |
| Create a Milestone | POST | `/v1/milestone` | `conn_mod_def::GMZ5HtD258I::evEsHLVZSAOcjhMMpSYY1A` |
| Delete a Milestone | DELETE | `/v1/milestone/{{id}}` | `conn_mod_def::GMZ5HZLl7TE::mY30RbM_QuGKXbZ9avaRmQ` |
| Update a Milestone by ID | PUT | `/v1/milestone/{{id}}` | `conn_mod_def::GMZ5HsADt4g::2DlhddMSQoWKvu46bsHmvQ` |

### ProjectTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Tags | GET | `/v1/project/{{id}}/tag` | `conn_mod_def::GMZ5InoaMHY::GfRsnodiSb2_OyDBOnY47g` |
| List Project Tags | GET | `/v1/project-tag` | `conn_mod_def::GMZ5IRDBQEo::rhPdzg7JSt-DwfpuQ3aLzg` |
| Remove a Project Tag from a Project | DELETE | `/v1/project/{{projectId}}/tag/{{tagId}}` | `conn_mod_def::GMZ5Ihhuy2g::P1Re6gk6QkaupbuLwxB9qw` |
| Update a Project Tag | PUT | `/v1/project-tag/{{id}}` | `conn_mod_def::GMZ5IZ6NfqM::-AVvtekBQlWNv9of9pycmw` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Project | GET | `/v1/project/{{id}}` | `conn_mod_def::GMZ5IhYx6os::hBssFf2USGuR_-KzPk00Zg` |
| Add a Project Tag | PATCH | `/v1/project/{{id}}/tag` | `conn_mod_def::GMZ5IoUxwzk::D4RgFsKnRMSbizALnuB9IA` |
| Add Resources to a Project | POST | `/v1/project/addResourcesToProject/{{id}}` | `conn_mod_def::GMZ5Iv57vug::UEeFH3E4Q3KDCBBB7fofhQ` |
| Create a Project | POST | `/v1/project` | `conn_mod_def::GMZ5IoAeMbc::puBqSULISoq4FgPiCTUGzw` |

### Holiday

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Holiday | GET | `/v1/holiday/{{id}}` | `conn_mod_def::GMZ5I5mnPjU::_XESslBDTiKnuZswygCEzA` |
| Create a Holiday | POST | `/v1/holiday` | `conn_mod_def::GMZ5I6VbPxQ::_6c7gZ8DQT2idjmSzzSPPQ` |
| Delete a Holiday | DELETE | `/v1/holiday/{{id}}` | `conn_mod_def::GMZ5I9y4Kok::PNkHwFs-Rpavi9xB6sOsuA` |
| Update a Holiday | PUT | `/v1/holiday/{{id}}` | `conn_mod_def::GMZ5JFGmNyQ::bcK5NbU5RDycZd2R2mSlhg` |

### ResourceTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resource's Tags | GET | `/v1/resource/{{id}}/tag` | `conn_mod_def::GMZ5KhcyNvY::tEhZCqMoRXeUgPB8y8zlHw` |
| List Resource Tags | GET | `/v1/resource-tag` | `conn_mod_def::GMZ5KIVQN50::vsrieocGTN-Bc3P3q4w7Mg` |
| Create a Resource Tag | POST | `/v1/resource-tag` | `conn_mod_def::GMZ5JFGA9b8::Wr1HzWUfR4O25-XY9RRf8A` |
| Remove a Tag from a Resource | DELETE | `/v1/resource/{{resourceId}}/tag/{{tagId}}` | `conn_mod_def::GMZ5KQNfP64::oO-jGzLLSBKCLgVeGridpA` |

### Resource

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Resource | GET | `/v1/resource/{{id}}` | `conn_mod_def::GMZ5KffTl84::kX38XOjPSgCdJVtlOGBblQ` |
| Add a New Resource Tag | PATCH | `/v1/resource/{{id}}/tag` | `conn_mod_def::GMZ5K5KJNpc::1uTJsXuFR7CvOJEupX8f3Q` |
| Create a Resource | POST | `/v1/resource` | `conn_mod_def::GMZ5LDaz05Q::R8ca0VlVTTGo9uRu0OOmAg` |
| Delete a Resource | DELETE | `/v1/resource/{{id}}` | `conn_mod_def::GMZ5KR6rHrc::cCcIcwnoRReJH8N3Z-dnIQ` |

### TimeEntry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific TimeEntry | GET | `/v1/timeentry/{{id}}` | `conn_mod_def::GMZ5LaSTL7M::3DuH8PpoQkKas5IjIiz5Qw` |
| Create a TimeEntry | POST | `/v1/timeentry` | `conn_mod_def::GMZ5LKxQOm0::91lDwcFdTR-Nch1gs3v9EQ` |
| Delete a TimeEntry | DELETE | `/v1/timeentry/{{id}}` | `conn_mod_def::GMZ5K_-_tUI::IlXO__SuQEKV9I2hMgBRtg` |
| Update a TimeEntry | PUT | `/v1/timeentry/{{id}}` | `conn_mod_def::GMZ5LKex07Y::quFnkp18TSyNAkG4yF7mpw` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Booking Category | POST | `/v1/categories` | `conn_mod_def::GMZ5DAHl570::ZytL9fL0T2CrrH_98VtoUA` |
| Search Booking Categories | POST | `/v1/categories/search` | `conn_mod_def::GMZ5DOfmAmk::8PXBmtT9Saqk3xJhz-NOPw` |
| Update an Existing Booking Category | PUT | `/v1/categories/{{id}}` | `conn_mod_def::GMZ5EEnf1W8::r1yuDix5TDW6NiVeToGMKw` |

### Booking

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Booking | GET | `/v1/booking/{{id}}` | `conn_mod_def::GMZ5ENFjWOk::IxDQB_eaTmyMsnp1vlLYqA` |
| Create a Booking | POST | `/v1/booking` | `conn_mod_def::GMZ5EOOEUUI::xm8TJMxGSsOT0QV-Ph0dvQ` |
| Delete a Booking | DELETE | `/v1/booking/{{id}}` | `conn_mod_def::GMZ5DOiF7ME::VWq2lo0-RbKPUB8681VUig` |

### ResourceCustomFieldTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resource Custom Field Template by ID | GET | `/v1/resource/customField/template/{{id}}` | `conn_mod_def::GMZ5Fjwwf0A::DVDunkiHSFu88T4qGCfjVA` |

2 more ResourceCustomFieldTemplate actions are available through search.

This lists 90 of 134 actions. For anything not here, call `search_one_platform_actions` with platform `hub-planner`. The full catalog is at https://www.withone.ai/knowledge/hub-planner.

## When a call fails

The error comes from Hub Planner, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hub-planner

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
