---
name: bug-snag
description: Bugsnag is an application stability and error monitoring platform that provides crash reporting, diagnostics, and release tracking across web, mobile, and backend applications, allowing engineering teams to detect, prioritize, and resolve software issues through integrations and real-time visibility. Read and write BugSnag data through One: collaborators, projects, organizations, teams, errors, savedsearches and more, 141 actions with real parameter documentation. Use whenever the user asks to look something up in BugSnag, create or update a record there, or build code against the BugSnag API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bug-snag
  generated-from: one-knowledge-base
---

# BugSnag through One

Bugsnag is an application stability and error monitoring platform that provides crash reporting, diagnostics, and release tracking across web, mobile, and backend applications, allowing engineering teams to detect, prioritize, and resolve software issues through integrations and real-time visibility.

One exposes BugSnag through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bug-snag` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm BugSnag is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real BugSnag account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Collaborators

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collaborators for an Organization | GET | `/organizations/{{organizationId}}/collaborators` | `conn_mod_def::GMAID0ya54M::7ZpunyZCRrCB4Zzj7r9J5A` |
| List Collaborators on a Project | GET | `/projects/{{projectId}}/collaborators` | `conn_mod_def::GMAIEDEbRjo::2ORY3v82SrW5346Q_fIUiw` |
| List Collaborators on an Organization | GET | `/organizations/{{organizationId}}/scim/v2/Users` | `conn_mod_def::GMAIHpezNo8::I238-ORHT_iDPvXJuCDbXw` |
| List Collaborators Using Organizations Teams | GET | `/organizations/{{organizationId}}/teams/{{id}}/collaborators` | `conn_mod_def::GMAIEOXEQ6Q::YsfSri_rRHORBA3SJGGfSA` |
| Show a Collaborator on an Organization | GET | `/organizations/{{organizationId}}/scim/v2/Users/{{id}}` | `conn_mod_def::GMAIHzTirLc::Jh3q-oRySW6QOr77brcejA` |
| Add a Collaborator to an Organization's Teams | POST | `/organizations/{{organizationId}}/collaborators/{{id}}/team_memberships` | `conn_mod_def::GMAIDTkD0cA::OsOexhodRh2pz-2ZLIn1jA` |
| Bulk Invite Collaborators Using Organizations Collaborators | POST | `/organizations/{{organizationId}}/collaborators/bulk_invite` | `conn_mod_def::GMAIDeka_Ao::TLiO_e_ET4KnzTwuFpGWHA` |
| Create a Collaborator for an Organization | POST | `/organizations/{{organizationId}}/scim/v2/Users` | `conn_mod_def::GMAIHonk1Ts::Uh3KtjkXQ4WXwE7rXJg1sQ` |
| Delete a Collaborator for an Organization | DELETE | `/organizations/{{organizationId}}/collaborators/{{id}}` | `conn_mod_def::GMAIDxSVTBw::xlPeeTntTkuOPJ6JtY9Eig` |
| Invite a Collaborator to an Organization | POST | `/organizations/{{organizationId}}/collaborators` | `conn_mod_def::GMAID7klfc0::GDzlFAjQSKmxiDKaZNUC2g` |
| Remove a Collaborator from Teams in an Organization | DELETE | `/organizations/{{organizationId}}/collaborators/{{id}}/team_memberships` | `conn_mod_def::GMAIEWalokw::Pg27mM0vSo66a6nK906y5Q` |
| Update a Collaborator for an Organization | PUT | `/organizations/{{organizationId}}/scim/v2/Users/{{id}}` | `conn_mod_def::GMAIH9Kx0Yc::K_N71sXbTVG-Qx1k2VdaFA` |

1 more Collaborators actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Network Endpoint Grouping | GET | `/projects/{{projectId}}/network_endpoint_grouping` | `conn_mod_def::GMAIGO2GTfI::jH7-3n2QTaKVKcgd4wB21A` |
| List an Organization's Projects | GET | `/organizations/{{organizationId}}/projects` | `conn_mod_def::GMAIB75wQR8::TP_MNfuGQGaZXTTaGYft5A` |
| List Pivot Values on a Project | GET | `/projects/{{projectId}}/pivots/{{eventFieldDisplayId}}/values` | `conn_mod_def::GMAICzyTUlQ::QSyYpLCKTZ22EUta-H8z3w` |
| View a Collaborator's Projects in an Organization | GET | `/organizations/{{organizationId}}/collaborators/{{collaboratorId}}/projects` | `conn_mod_def::GMAIE9vd8Gw::ms5zC7hQTOKLVatTOU1bmg` |
| View a Project | GET | `/projects/{{projectId}}` | `conn_mod_def::GMAIHhW1pBE::5rmZMsjnSwGA9ILRfL2vmg` |
| Create a Project in an Organization | POST | `/organizations/{{organizationId}}/projects` | `conn_mod_def::GMAIFQ7e2V0::MyZAKlD2RwWvqFn3P9V-yw` |
| Delete a Project | DELETE | `/2/projects/{{projectId}}` | `conn_mod_def::GMAIF5rdcpg::W8wRRD2oT7G24WzsAOsdMw` |
| Regenerate a Project's Notifier API Key | DELETE | `/projects/{{projectId}}/api_key` | `conn_mod_def::GMAIHCIpODE::60Ir-jz_RXukiTVlOTufqg` |
| Regenerate a Project's Upload API Key | DELETE | `/projects/{{projectId}}/upload_api_key` | `conn_mod_def::GMAIHSlbn5E::1FjyQOWFQKm9dBtIRQaTTw` |
| Update a Project | PATCH | `/projects/{{projectId}}` | `conn_mod_def::GMAIHWWwlkA::MWXkjcq-TTWlKO-yo4N2RQ` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List the Current User's Organizations | GET | `/user/organizations` | `conn_mod_def::GMAICEatpoA::nNjlEAXjSGepJz8qdrANHA` |
| View Organization | GET | `/organizations/{{id}}` | `conn_mod_def::GMAIE672LWU::G4HACmfuRj6GMY5EtFb81A` |
| Create Organization | POST | `/organizations` | `conn_mod_def::GMAIDnGeuZo::BR5qBVR7T_6xZ-r4ta5cbA` |
| Delete an Organization | DELETE | `/organizations/{{id}}` | `conn_mod_def::GMAID06HwNI::WjlhNiplTGSnUw_MXNOLhA` |
| Regenerate an Organization's API Key | DELETE | `/organizations/{{id}}/api_key` | `conn_mod_def::GMAIEJUXZZg::fUmtR13URu29LyRwF8sfHg` |
| Regenerate an Organization's Auth Token | DELETE | `/organizations/{{id}}/auth_token` | `conn_mod_def::GMAIEXNW-QE::WCRQeqQNRAuM_eppw6IjeA` |
| Update an Organization | PATCH | `/organizations/{{id}}` | `conn_mod_def::GMAIE764AVs::hmuptPxLRju2sU0JfIDeAw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Teams for a Collaborator in an Organization | GET | `/organizations/{{organizationId}}/collaborators/{{id}}/teams` | `conn_mod_def::GMAIEIdutYo::OgWSmnTtSd-9BOugSJ8YcA` |
| List Teams for an Organization | GET | `/organizations/{{organizationId}}/teams` | `conn_mod_def::GMAIEJrd7B4::-uLTPuWqTtyNy3vY3_7h_w` |
| Show a Team's Details for an Organization | GET | `/organizations/{{organizationId}}/teams/{{id}}` | `conn_mod_def::GMAIEyWx628::sc2wR4egT9q_TF0L6xjAwg` |
| Create a Team for an Organization | POST | `/organizations/{{organizationId}}/teams` | `conn_mod_def::GMAIDrA9VnI::KTvqofRpQtWruSBXWolvEw` |
| Delete a Team in an Organization | DELETE | `/organizations/{{organizationId}}/teams/{{id}}` | `conn_mod_def::GMAIDxYMXxY::fINfpL6aTPeYpv3e2vfNXg` |
| Remove Collaborators from a Team | DELETE | `/organizations/{{organizationId}}/teams/{{id}}/team_memberships` | `conn_mod_def::GMAIEYupUwY::cbhTV4NJS0Glt_DMtWW7Lw` |
| Update a Team Name for an Organization | PATCH | `/organizations/{{organizationId}}/teams/{{id}}` | `conn_mod_def::GMAIFIF7lS8::4dHrs_d_QRi4r8Mhtlu86A` |

### Errors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Errors on a Project | GET | `/projects/{{projectId}}/errors` | `conn_mod_def::GMAICfkvmGc::NoFVlVJISmyAYOmvr6EoYw` |
| Trends for an Error | GET | `/projects/{{projectId}}/errors/{{errorId}}/trends` | `conn_mod_def::GMAIC3CFaUg::H0Mj5bWqQxyr7aR8ryRScg` |
| View Latest Event on an Error | GET | `/errors/{{errorId}}/latest_event` | `conn_mod_def::GMAIC_lSFJ4::odcCUWjnSpWlhS38_GDYaw` |
| Bulk Update Errors for a Project | PATCH | `/projects/{{projectId}}/errors` | `conn_mod_def::GMAICF8zzS8::pepA3hlJRyON9gPFOQhkOg` |
| Delete All Errors in a Project | DELETE | `/projects/{{projectId}}/errors` | `conn_mod_def::GMAICSZoJ8Q::aMGudp8PSRiDkvzKrfnj4Q` |
| Delete an Error for a Project | DELETE | `/projects/{{projectId}}/errors/{{errorId}}` | `conn_mod_def::GMAICTjBVXg::9Duh1AUBQXG0V4dy3DLYtQ` |
| Update an Error for a Project | PATCH | `/projects/{{projectId}}/errors/{{errorId}}` | `conn_mod_def::GMAIDCaMOMw::RceGt6ZrRQWAi5wvMQleKg` |

### SavedSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Saved Search | GET | `/saved_searches/{{id}}` | `conn_mod_def::GMAIB5PO3sI::mDMfo1ftQQaSZR8zcer_tA` |
| Get Usage Summary for a Saved Search | GET | `/saved_searches/{{id}}/usage_summary` | `conn_mod_def::GMAIB17V0k0::a-GySW7gTMyawl882aUZBQ` |
| List Saved Searches on a Project | GET | `/projects/{{projectId}}/saved_searches` | `conn_mod_def::GMAICG6K-oc::IDOQWIjMSHmBMm2OvZWQFA` |
| Create Saved Searches | POST | `/saved_searches` | `conn_mod_def::GMAIB4v1x34::i1jftkAOTA6p5zlRX7WQ_g` |
| Delete a Saved Search | DELETE | `/saved_searches/{{id}}` | `conn_mod_def::GMAIB2jMLJA::TNLxn_2hRQ20REvdZ-el4g` |
| Update a Saved Search | PATCH | `/saved_searches/{{id}}` | `conn_mod_def::GMAICEcETKA::2so6iDz2Sn2G6XEEbxHhsA` |

### ConfiguredIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Configured Integration | GET | `/configured_integrations/{{id}}` | `conn_mod_def::GMAIDIrABZg::nI-craAeQgGgiHSDlG9x4w` |
| Configure an Integration for a Project | POST | `/projects/{{projectId}}/configured_integrations` | `conn_mod_def::GMAIC_2XMuk::jot2m8rRTzaLL_k6zKqh9w` |
| Delete a Configured Integration | DELETE | `/configured_integrations/{{id}}` | `conn_mod_def::GMAIDJ5wQ-4::4B0sdY-QToidjGJvU1D3cw` |
| Test a Configured Integration | POST | `/configured_integrations/{{id}}/test` | `conn_mod_def::GMAIDSL7MG8::AmFjX76mQ-qnZIsfNDt5Jw` |
| Update a Configured Integration | PATCH | `/configured_integrations/{{id}}` | `conn_mod_def::GMAIDSDgV3g::cyA6PqSpRm2xr_74elGm8A` |
| Update Trigger Config for a Configured Integration | PATCH | `/configured_integrations/{{id}}/trigger_configs/{{triggerConfigKey}}` | `conn_mod_def::GMAIDRx7hZI::JPIcnJx_TbWwtQE4llkS4g` |

### EventDataRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Event Data Request Status for an Organization | GET | `/organizations/{{organizationId}}/event_data_requests/{{id}}` | `conn_mod_def::GMAIDf4EJwU::ybkKqvPAS5uN86Ao1ImBqw` |
| Get an Event Data Request for a Project | GET | `/projects/{{projectId}}/event_data_requests/{{id}}` | `conn_mod_def::GMAIFRJ9jE8::NR1QetNbQ26s5TfzQyjLPQ` |
| Create Event Data Request for a Project | POST | `/projects/{{projectId}}/event_data_requests` | `conn_mod_def::GMAIF5ggIw4::VY2fefCLTVGk2Z6JpFAEAA` |
| Create Event Data Request for an Organization | POST | `/organizations/{{organizationId}}/event_data_requests` | `conn_mod_def::GMAIDobA7os::Te2FlN3WQiGj0FU5fg_mFw` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Comments on an Error | GET | `/projects/{{projectId}}/errors/{{errorId}}/comments` | `conn_mod_def::GMAICSmktpg::rS3TctIkRRakccp2nLPpEg` |
| Create a Comment on an Error | POST | `/projects/{{projectId}}/errors/{{errorId}}/comments` | `conn_mod_def::GMAICJ_LDMQ::HDOWZTs0RA2Gnq95S5gRvg` |
| Delete a Comment | DELETE | `/comments/{{commentId}}` | `conn_mod_def::GMAICP_sLy8::OfuDgYvzST29GlXHeMjCFw` |
| Update a Comment | PATCH | `/comments/{{commentId}}` | `conn_mod_def::GMAICzJ5je4::wQeU-iSkQ0OAMWjGi7UJmw` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| List Events on a Project | GET | `/projects/{{projectId}}/events` | `conn_mod_def::GMAICcgn-LI::Cm-URQBNS26kRH9ERaQiKw` |
| List Events on an Error | GET | `/projects/{{projectId}}/errors/{{errorId}}/events` | `conn_mod_def::GMAICeXsdZI::SNarLgyPTLSkPM_nXV_Z9g` |
| View an Event for a Project | GET | `/projects/{{projectId}}/events/{{eventId}}` | `conn_mod_def::GMAIC-kz7AI::M2BoE_M5ReG_Ht_k7P9H0A` |
| Delete an Event | DELETE | `/2/projects/{{projectId}}/events/{{eventId}}` | `conn_mod_def::GMAICUCJfRA::gU3UcNB_T-OKHeWedBI7bw` |

### Spans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Spans for a Span Group | GET | `/projects/{{projectId}}/span_group_categories/{{category}}/span_groups/{{name}}/spans` | `conn_mod_def::GMAIGOy-tac::0hqg1wUPRCy1_mWlXb0ErQ` |
| List Spans for a Span Group by ID | GET | `/projects/{{projectId}}/span_groups/{{id}}/spans` | `conn_mod_def::GMAIGmYha3I::xRFv81aAQryDOlrTcozT3A` |
| List Spans for a Trace | GET | `/projects/{{projectId}}/traces/{{traceId}}/spans` | `conn_mod_def::GMAIGm9PPyM::4mAX-LV4RHSlHgLvF_09Gw` |
| List Spans for a Trace in an Organization | GET | `/organizations/{{organizationId}}/traces/{{traceId}}/spans` | `conn_mod_def::GMAIEEJLfIM::c9NJS6QGS2mR9_IHNbtVdQ` |

### ProjectAccesses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Accesses for a Collaborator in an Organization | GET | `/organizations/{{organizationId}}/collaborators/{{collaboratorId}}/project_accesses` | `conn_mod_def::GMAIEHHNG6U::HwqEXwHCSx-su3xP56AKSw` |
| List Project Accesses for an Organization Team | GET | `/organizations/{{organizationId}}/teams/{{id}}/project_accesses` | `conn_mod_def::GMAIECwR4ww::iNrP1dmgQ1OezshwNYlG0A` |
| Show a Collaborator's Project Access Details for an Organization | GET | `/organizations/{{organizationId}}/collaborators/{{collaboratorId}}/project_accesses/{{projectId}}` | `conn_mod_def::GMAIEyBj5pU::2XOROINURFalRj_8Ypx5UQ` |
| Remove Project Accesses Using Organizations Teams | DELETE | `/organizations/{{organizationId}}/teams/{{id}}/project_accesses` | `conn_mod_def::GMAIEWYlzuw::RIJTani7Q-WWpiQXN_Vhsw` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Show Group on an Organization | GET | `/organizations/{{organizationId}}/scim/v2/Groups/{{id}}` | `conn_mod_def::GMAIHwo6MpA::qQpDHbctStCUypISqGpjLw` |
| Create Group Using Organizations SCIM v2 | POST | `/organizations/{{organizationId}}/scim/v2/Groups` | `conn_mod_def::GMAIHqcQ4TE::-klfrChgTwKHouTnL3Ixgg` |
| Delete Group on an Organization | DELETE | `/organizations/{{organizationId}}/scim/v2/Groups/{{id}}` | `conn_mod_def::GMAIHqSfTkg::vs15iQeNRtWJ-SPQWdLRig` |
| Update Group on an Organization | PATCH | `/organizations/{{organizationId}}/scim/v2/Groups/{{id}}` | `conn_mod_def::GMAIIGV12T4::oqkR_XdLQ5WLnsKH6JgKIw` |

### EventDataDeletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Event Deletion Request Status for an Organization | GET | `/organizations/{{organizationId}}/event_data_deletions/{{id}}` | `conn_mod_def::GMAIDe5MoAY::fnW1TnqaQjSCxjsYwlFR0Q` |
| Confirm an Event Deletion Request for an Organization | POST | `/organizations/{{organizationId}}/event_data_deletions/{{id}}/confirm` | `conn_mod_def::GMAIDm5ijrw::KoQWe8VPSDyX_ON8SrMOWQ` |
| Create Event Data Deletion Request for a Project | POST | `/projects/{{projectId}}/event_data_deletions` | `conn_mod_def::GMAIF7NKHCU::E9KIWu9wTziFS1Sl3o6nsQ` |

### SpanGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Span Groups on a Project | GET | `/projects/{{projectId}}/span_groups` | `conn_mod_def::GMAIG5WxwQA::6siPQD4jTLqLQ8IUS2s2VQ` |
| Show a Project Span Group | GET | `/projects/{{projectId}}/span_groups/{{id}}` | `conn_mod_def::GMAIHVJQTH4::QQ1k3q3JSKKEAdIqrjAeEg` |
| Update a Project Span Group | PATCH | `/projects/{{projectId}}/span_groups/{{id}}` | `conn_mod_def::GMAIHh3lX7M::KXz3duRqTl6WJAp-whesvQ` |

### Pivots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pivots on an Error | GET | `/projects/{{projectId}}/errors/{{errorId}}/pivots` | `conn_mod_def::GMAICqbXRQM::qzjfY8HqQ2K44e-D-0JwmQ` |
| List Pivots Using Projects | GET | `/projects/{{projectId}}/pivots` | `conn_mod_def::GMAICrLtUKY::fbKl2VAAQUqvqbcr8DXHjg` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Integrations | GET | `/integrations` | `conn_mod_def::GMAIDJqitKI::kIWb-fynQmek0-vGfddfVA` |
| Test an Integration | POST | `/integrations/test` | `conn_mod_def::GMAIDW4cz1A::vmjQE65ASy2qcC8Ab1fX7g` |

### ProjectEventFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Project Event Field | POST | `/projects/{{projectId}}/event_fields` | `conn_mod_def::GMAIFTpqIZE::9mAY0-OoSq6FETIMmS92vA` |

1 more ProjectEventFields actions are available through search.

This lists 90 of 141 actions. For anything not here, call `search_one_platform_actions` with platform `bug-snag`. The full catalog is at https://www.withone.ai/knowledge/bug-snag.

## When a call fails

The error comes from BugSnag, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bug-snag

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
