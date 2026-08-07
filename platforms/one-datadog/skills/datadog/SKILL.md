---
name: datadog
description: |. Read and write Datadog data through One: cases, roles, securitymonitoringrules, metrics, slos, syntheticstests and more, 1090 actions with real parameter documentation. Use whenever the user asks to look something up in Datadog, create or update a record there, or build code against the Datadog API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: datadog
  generated-from: one-knowledge-base
---

# Datadog through One

|.

One exposes Datadog through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `datadog` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Datadog is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Datadog account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Cases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Case’s Details | GET | `/api/v2/cases/{{caseId}}` | `conn_mod_def::GJ2NJ5wh_Hk::hVdjXRrnRQufONtadt3LVw` |
| Search Cases | GET | `/api/v2/cases` | `conn_mod_def::GJ2NKw09SuI::6Cgi1gFUR1mr8QFRTjC8kw` |
| Archive a Case | POST | `/api/v2/cases/{{caseId}}/archive` | `conn_mod_def::GJ2NHwfoe8c::34WNqmJNSfuITikDbz5dPw` |
| Assign a Case | POST | `/api/v2/cases/{{caseId}}/assign` | `conn_mod_def::GJ2NH4_52I8::h_B-CGS7SVW5vOF1ZhzSgQ` |
| Comment on a Case | POST | `/api/v2/cases/{{caseId}}/comment` | `conn_mod_def::GJ2NIBeJu58::h5mD8ScpQG2vB4KJOe4AcQ` |
| Create a Case | POST | `/api/v2/cases` | `conn_mod_def::GJ2NIKb-e5g::pL8gHPO_T0ydOMJw7t99xw` |
| Delete a Case Custom Attribute | DELETE | `/api/v2/cases/{{caseId}}/custom_attributes/{{customAttributeKey}}` | `conn_mod_def::GJ2NJeFL7Yc::bWA-qGUoT_ic2IgZ8X5tpQ` |
| Link an Existing Jira Issue to a Case | PATCH | `/api/v2/cases/{{caseId}}/relationships/jira_issues` | `conn_mod_def::GJ2NKKx2gyc::9KDUFHEPTSOVkJPyk7MLWw` |
| Link an Incident to a Case | POST | `/api/v2/cases/{{caseId}}/relationships/incidents` | `conn_mod_def::GJ2NKUFlLuE::MfgjVCA4Q1GOfBbHT40Tdw` |
| Remove a Case’s Jira Issue Link | DELETE | `/api/v2/cases/{{caseId}}/relationships/jira_issues` | `conn_mod_def::GJ2NKoR2c-Y::kDYBwvUzRlGZkhr0mUOA-A` |
| Unarchive a Case | POST | `/api/v2/cases/{{caseId}}/unarchive` | `conn_mod_def::GJ2NK5hI8-8::mjoufApTR8mnjcVADS7lTw` |
| Unassign a Case | POST | `/api/v2/cases/{{caseId}}/unassign` | `conn_mod_def::GJ2NLEs_fxE::Ua9_szZhQvyf-hfLsp4uEA` |

7 more Cases actions are available through search.

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role | GET | `/api/v2/roles/{{roleId}}` | `conn_mod_def::GJ2OdQsmZ9k::fa2E4GFfTTaUI1InLDclyA` |
| List a Role’s Permissions | GET | `/api/v2/roles/{{roleId}}/permissions` | `conn_mod_def::GJ2Od7chcHk::4QoQ5lxTSwuidEMBe3RaBA` |
| List Roles | GET | `/api/v2/roles` | `conn_mod_def::GJ2OeOntRlY::5ASSzcSmSYyWE41J-vqzWw` |
| List Roles for a Restriction Query | GET | `/api/v2/logs/config/restriction_queries/{{restrictionQueryId}}/roles` | `conn_mod_def::GJ2ODGconqE::wUT32HlyQN-2g38eF2sn1w` |
| Add a Permission to a Role | POST | `/api/v2/roles/{{roleId}}/permissions` | `conn_mod_def::GJ2OdsPOIZU::K92ISJB0Tu-6aydD_gQ1vQ` |
| Add a User to a Role | POST | `/api/v2/roles/{{roleId}}/users` | `conn_mod_def::GJ2OcqKzlO0::dyI71fnYTim8UvW-VSqK9Q` |
| Clone a Role | POST | `/api/v2/roles/{{roleId}}/clone` | `conn_mod_def::GJ2Ocy1PZnw::T3-rrAK_REGdNo3vT6Hghg` |
| Create a Role | POST | `/api/v2/roles` | `conn_mod_def::GJ2Oc_ffzX0::izK_DWCgRCWUOvj_RoWFog` |
| Disable a Role | DELETE | `/api/v2/roles/{{roleId}}` | `conn_mod_def::GJ2OdHmHOZI::hYwdPP0eTQ2J731Qt9LURA` |
| Remove a User from a Role | DELETE | `/api/v2/roles/{{roleId}}/users` | `conn_mod_def::GJ2OeX-21fA::SXKhB6WsQ_agiYJC8MpH8w` |
| Revoke a Role Permission | DELETE | `/api/v2/roles/{{roleId}}/permissions` | `conn_mod_def::GJ2OejUXhOc::P4UtYTnaRP2vki5EvkCkag` |
| Update a Role | PATCH | `/api/v2/roles/{{roleId}}` | `conn_mod_def::GJ2OeruwI_E::_U1zatHdS-6DfzKU1Hv-Cw` |

### SecurityMonitoringRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Security Monitoring Rule to Terraform | GET | `/api/v2/security_monitoring/rules/{{ruleId}}/convert` | `conn_mod_def::GJ2OoI84TVo::HBtgYL4wS2OWGTbrH1N0eA` |
| Get a Security Monitoring Rule's Details | GET | `/api/v2/security_monitoring/rules/{{ruleId}}` | `conn_mod_def::GJ2OsnlhMks::aft-zTQzQy-mTKb4zXSm1g` |
| Get a Security Monitoring Rule’s Version History | GET | `/api/v2/security_monitoring/rules/{{ruleId}}/version_history` | `conn_mod_def::GJ2Osy6AyXc::rZSRMhDzRO6ij4pDfwnYjw` |
| List Security Monitoring Rules | GET | `/api/v2/security_monitoring/rules` | `conn_mod_def::GJ2OwQa_O6I::AXvD881NRIaCYhBpbdG7bw` |
| Bulk Export Security Monitoring Rules | POST | `/api/v2/security_monitoring/rules/bulk_export` | `conn_mod_def::GJ2OnPpfOZg::OyNo9kLrRIC0QEbaBe72tw` |
| Convert a Security Monitoring Rule from JSON to Terraform | POST | `/api/v2/security_monitoring/rules/convert` | `conn_mod_def::GJ2OoAwEJso::rWtdde83RQmxWErv-eR6dA` |
| Create a Security Monitoring Detection Rule | POST | `/api/v2/security_monitoring/rules` | `conn_mod_def::GJ2OojoaIwI::noaz4geiSpGVkRaaoXB5vg` |
| Delete a Security Monitoring Rule | DELETE | `/api/v2/security_monitoring/rules/{{ruleId}}` | `conn_mod_def::GJ2Oqr8BgaI::lJ-3LkCCSHOdYGxkZCHVPA` |
| Test a Security Monitoring Rule | POST | `/api/v2/security_monitoring/rules/test` | `conn_mod_def::GJ2OzD7lH8Q::PV8gA2dAQ8eVrbRn722zFA` |
| Test an Existing Security Monitoring Rule | POST | `/api/v2/security_monitoring/rules/{{ruleId}}/test` | `conn_mod_def::GJ2OzMwSxP8::XpTnYPfNRDSWBm9ezQJCog` |
| Update a Security Monitoring Rule | PUT | `/api/v2/security_monitoring/rules/{{ruleId}}` | `conn_mod_def::GJ2O0FnIa0Y::1CWgfzt2Sq-GpdlLYpJjSw` |
| Validate a Security Monitoring Detection Rule | POST | `/api/v2/security_monitoring/rules/validation` | `conn_mod_def::GJ2O0ZbRpDM::9kmBInjKQdKHW5sGvM0cRw` |

### Metrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Estimate a Metric’s Tag Configuration Cardinality | GET | `/api/v2/metrics/{{metricName}}/estimate` | `conn_mod_def::GJ2OHNucK7k::p5Gie-lZSUyzx_sn7lOczA` |
| Get Metric Metadata | GET | `/api/v1/metrics/{{metricName}}` | `conn_mod_def::GJ2OE2szaXo::TWcwvA5SRpS21nuOJu2KdA` |
| Get Metric Tag Cardinality Details | GET | `/api/v2/metrics/{{metricName}}/tag-cardinalities` | `conn_mod_def::GJ2OFCZ4dEc::mdT2sFbbSTGyFMlkffsQGA` |
| List a Metric’s Related Assets | GET | `/api/v2/metrics/{{metricName}}/assets` | `conn_mod_def::GJ2OGZzx0Z8::3nLca5VCRjSyhXxYp7fPOQ` |
| List Active Metrics | GET | `/api/v1/metrics` | `conn_mod_def::GJ2OEt_ctN4::CD3yQb7gRmeSy1mOWCLXUg` |
| List Metrics | GET | `/api/v2/metrics` | `conn_mod_def::GJ2OEkGPLUg::gU_dy4wyQ8uUKCGVakfo_w` |
| List Tags for a Metric | GET | `/api/v2/metrics/{{metricName}}/all-tags` | `conn_mod_def::GJ2OFq7xerM::D1dAZgM1Sjq7NLgTeYHERQ` |
| Search Metrics (Deprecated) | GET | `/api/v1/search` | `conn_mod_def::GJ2OGlHiebk::faqgtt3PTLixiZnn-77u0A` |
| Delete a Metric’s Tag Configuration | DELETE | `/api/v2/metrics/{{metricName}}/tags` | `conn_mod_def::GJ2OEHn_f6U::S9J0wmj7QyydAAeaZJZu4g` |
| Update a Metric’s Metadata | PUT | `/api/v1/metrics/{{metricName}}` | `conn_mod_def::GJ2OEYdPQ80::rrh8MyihTL6B0haUsqQEYQ` |
| Update a Metric’s Tag Configuration | PATCH | `/api/v2/metrics/{{metricName}}/tags` | `conn_mod_def::GJ2OHWTnzeY::gx5QZnqWTViYsoctgizmnQ` |

### Slos

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If SLOs Can Be Safely Deleted | GET | `/api/v1/slo/can_delete` | `conn_mod_def::GJ2O40E1tSM::kLbhiUeHQsyyw2TlU6Qv2g` |
| Get an SLO’s Details | GET | `/api/v1/slo/{{sloId}}` | `conn_mod_def::GJ2O5m6kJNY::8c3gqo8ZTOuVFQBKggfhBg` |
| Get an SLO’s History | GET | `/api/v1/slo/{{sloId}}/history` | `conn_mod_def::GJ2O50SwBco::iWsigFaiSsCyizG5z2-R9g` |
| List SLOs | GET | `/api/v1/slo` | `conn_mod_def::GJ2O5dlNb7g::Vy42xBhVSeee2iSpQ80Y4g` |
| Search SLOs | GET | `/api/v1/slo/search` | `conn_mod_def::GJ2O6qBYEmU::na66plmYRjS4cm3zqV_QaQ` |
| Bulk Delete SLO Timeframes | POST | `/api/v1/slo/bulk_delete` | `conn_mod_def::GJ2O4rTveaY::L8GAMctyRh6AfPOVI95h6w` |
| Create an SLO Object | POST | `/api/v1/slo` | `conn_mod_def::GJ2O5E-Oh18::eyNTbYIySQeBJNGhA3I_UA` |
| Delete an SLO | DELETE | `/api/v1/slo/{{sloId}}` | `conn_mod_def::GJ2O5Tl2hFE::kv1q3VgFRUqeUQ_ogMwZKg` |
| Update an SLO | PUT | `/api/v1/slo/{{sloId}}` | `conn_mod_def::GJ2O6yGewfo::Vw51ErvQQdKOAKAPkJTzyw` |

### SyntheticsTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Synthetic Test Configuration | GET | `/api/v1/synthetics/tests/{{publicId}}` | `conn_mod_def::GJ2PK0k5HDc::H2whx8X6TCW5-sqdh9250g` |
| List Synthetic Tests | GET | `/api/v1/synthetics/tests` | `conn_mod_def::GJ2PMGHBHOA::3iivlEoLS1Co1wKGZvP7TA` |
| Search Synthetic Tests | GET | `/api/v1/synthetics/tests/search` | `conn_mod_def::GJ2PNCojzjw::_GmxESz1RNOvxD-HRXtsMQ` |
| Bulk Delete Synthetics Tests | POST | `/api/v2/synthetics/tests/bulk-delete` | `conn_mod_def::GJ2PGfqM10M::CP5z8FwZR52RFNAYE0KaTg` |
| Delete Multiple Synthetic Tests | POST | `/api/v1/synthetics/tests/delete` | `conn_mod_def::GJ2PIRhhlco::nTvW6X7YQaqH-p0fOQbzjA` |
| Patch a Synthetic Test | PATCH | `/api/v1/synthetics/tests/{{publicId}}` | `conn_mod_def::GJ2PMh5so_s::GqpsJAlTR46qpBQ6wWtJ7w` |
| Pause or Start a Synthetic Test (Update a Test’s Pause Status) | PUT | `/api/v1/synthetics/tests/{{publicId}}/status` | `conn_mod_def::GJ2PMuzWb_4::_9OC8EyNR2Km9_LFwAYmbQ` |
| Trigger CI Synthetic Tests (Batch) | POST | `/api/v1/synthetics/tests/trigger/ci` | `conn_mod_def::GJ2PNkTAzyY::8nnBr9BhSpque84Jw6TIrw` |
| Trigger Synthetic Tests | POST | `/api/v1/synthetics/tests/trigger` | `conn_mod_def::GJ2PNb3u2rA::GKLKRieQQrOk07uDNafuxw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/api/v2/team/{{teamId}}` | `conn_mod_def::GJ2PPo30n_M::HeprxRuxSAiZqbJg1RcWMA` |
| List a Super Team’s Member Teams (Deprecated) | GET | `/api/v2/team/{{superTeamId}}/member_teams` | `conn_mod_def::GJ2PQIcFgo4::NEZt4VoqSxO-XhTlDZigMA` |
| List Incident Teams | GET | `/api/v2/teams` | `conn_mod_def::GJ2NuPyEYJA::EcyUVYvlTpSZNv3j4obd3w` |
| List Teams | GET | `/api/v2/team` | `conn_mod_def::GJ2PQSrjNYE::ETMqkOYbR324OBu2FWmHBg` |
| Delete a Team | DELETE | `/api/v2/team/{{teamId}}` | `conn_mod_def::GJ2PSQgLXXs::R13Ltn0aRD2NgUHw6xQQtQ` |
| Remove a Super Team’s Member Team (Deprecated) | DELETE | `/api/v2/team/{{superTeamId}}/member_teams/{{memberTeamId}}` | `conn_mod_def::GJ2PSHsJkfg::nRlFYr7lSsKIDact13Oq3g` |
| Sync Datadog Teams with GitHub Teams | POST | `/api/v2/team/sync` | `conn_mod_def::GJ2PRvQg2dI::w9_b_DwoTT-vm-GbIkS4ig` |
| Update a Team | PATCH | `/api/v2/team/{{teamId}}` | `conn_mod_def::GJ2PS2Cr8uY::AuTMplf6RKe3l0YHgoI6-w` |

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if Monitors Can Be Deleted | GET | `/api/v1/monitor/can_delete` | `conn_mod_def::GJ2OJYuVxFU::BYsjLbMURhi3lrnr02KU9w` |
| Get a Monitor’s Details | GET | `/api/v1/monitor/{{monitorId}}` | `conn_mod_def::GJ2OLge5cQ0::x0SWq9XnQkOxnaS7sUe31g` |
| List Monitors (Get All Organization Monitors) | GET | `/api/v1/monitor` | `conn_mod_def::GJ2OMHuHjME::a8snu3p6Qdi0kQX9UooStw` |
| Search Monitors | GET | `/api/v1/monitor/search` | `conn_mod_def::GJ2OMbvRWxY::7hln-N8HTXuabFf16nbvAw` |
| Create a Monitor | POST | `/api/v1/monitor` | `conn_mod_def::GJ2OJmdywGI::4XW5MtPMTwaSZwqRD8fhLA` |
| Delete a Monitor | DELETE | `/api/v1/monitor/{{monitorId}}` | `conn_mod_def::GJ2OKOvlOeg::xSSxQPOZRuW2HCwGOtOtwQ` |
| Update a Monitor | PUT | `/api/v1/monitor/{{monitorId}}` | `conn_mod_def::GJ2OKyVv23Y::aXCFDTszQnmvuHAV4zi5Tw` |
| Validate a Monitor | POST | `/api/v1/monitor/validate` | `conn_mod_def::GJ2OM2mNtC4::wgzxQnGxRG6z5XgyujSxIw` |

### RumReplayPlaylists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a RUM Replay Playlist | GET | `/api/v2/rum/replay/playlists/{{playlistId}}` | `conn_mod_def::GJ2Oju9wUkI::1oDoEcLVRV2VNIwkhfFXZA` |
| List RUM Replay Playlists | GET | `/api/v2/rum/replay/playlists` | `conn_mod_def::GJ2OkCWZayk::PuZl7gNiSbO6dhV3NgicOg` |
| Add a RUM Replay Session to a Playlist | PUT | `/api/v2/rum/replay/playlists/{{playlistId}}/sessions/{{sessionId}}` | `conn_mod_def::GJ2OjDz6ulk::MyRMlhfPQ92FYrMVEv3fDQ` |
| Bulk Remove RUM Replay Playlist Sessions | DELETE | `/api/v2/rum/replay/playlists/{{playlistId}}/sessions` | `conn_mod_def::GJ2OjOo4Xfs::vNJ6ExT4TjGdC7kTJs2CYw` |
| Create RUM Replay Playlist | POST | `/api/v2/rum/replay/playlists` | `conn_mod_def::GJ2OjbDdjwc::NuoX8SE8Rp-LwxFpaTWZpg` |
| Delete a RUM Replay Playlist | DELETE | `/api/v2/rum/replay/playlists/{{playlistId}}` | `conn_mod_def::GJ2OjjElouk::8w4sGCj_Sy2gYiN_xWRmRw` |
| Remove a Session from a RUM Replay Playlist | DELETE | `/api/v2/rum/replay/playlists/{{playlistId}}/sessions/{{sessionId}}` | `conn_mod_def::GJ2OkMLRAPc::3BfTJmxLSKaS5Tg09arH9Q` |
| Update a RUM Replay Playlist | PUT | `/api/v2/rum/replay/playlists/{{playlistId}}` | `conn_mod_def::GJ2OkVHe4JM::v-kJTuTsRtWylqYEEaT52g` |

### Incidents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Incident's Details | GET | `/api/v2/incidents/{{incidentId}}` | `conn_mod_def::GJ2NzAKACZo::KC_A_BQtTfalb46d1lPPDw` |

7 more Incidents actions are available through search.

This lists 90 of 1090 actions. For anything not here, call `search_one_platform_actions` with platform `datadog`. The full catalog is at https://www.withone.ai/knowledge/datadog.

## When a call fails

The error comes from Datadog, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/datadog

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
