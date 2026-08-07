---
name: grafana
description: Grafana is an open-source observability and data visualization platform that enables teams to query, monitor, visualize, and alert on metrics, logs, and traces from multiple data sources through customizable dashboards. Read and write Grafana data through One: users, teams, organizations, reports, annotations, prometheusrulegroups and more, 321 actions with real parameter documentation. Use whenever the user asks to look something up in Grafana, create or update a record there, or build code against the Grafana API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: grafana
  generated-from: one-knowledge-base
---

# Grafana through One

Grafana is an open-source observability and data visualization platform that enables teams to query, monitor, visualize, and alert on metrics, logs, and traces from multiple data sources through customizable dashboards.

One exposes Grafana through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `grafana` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Grafana is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Grafana account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/api/users/{{userId}}` | `conn_mod_def::GK1B10dORaA::8dV_mUM9Rz6ugLMU4GOFFQ` |
| Get User by Login or Email | GET | `/api/users/lookup` | `conn_mod_def::GK1B10ydxOA::0W0TckuxS_yUkrIGmWN92w` |
| Get Users | GET | `/api/users` | `conn_mod_def::GK1B1052HsA::JzoWFP-aTpaNc7Bwb5C5cQ` |
| Search Users With Paging | GET | `/api/users/search` | `conn_mod_def::GK1B10e9igA::QnO9OpEfTj-aDuu0lNswAA` |
| Create New User | POST | `/api/admin/users` | `conn_mod_def::GK1BqYaVvog::bkv3wklLQVKJE-PZ1VmqFA` |
| Disable a User | POST | `/api/admin/users/{{userId}}/disable` | `conn_mod_def::GK1BqW8jMjA::5Zs8t_ZFSdWvrYX7lMzhTQ` |
| Enable a User | POST | `/api/admin/users/{{userId}}/enable` | `conn_mod_def::GK1BqXIIg4g::Oqf4ATJcRS2Zy6mMrHj2yw` |
| Revoke a User's Auth Token | POST | `/api/admin/users/{{userId}}/revoke-auth-token` | `conn_mod_def::GK1BqnBB0_A::sWwcYclpQoWakqPKCNJA6Q` |
| Set a User's Password | PUT | `/api/admin/users/{{userId}}/password` | `conn_mod_def::GK1BqnyWWkA::X7EvhMn0SXWHcL0IY1BPeA` |
| Set a User's Permissions | PUT | `/api/admin/users/{{userId}}/permissions` | `conn_mod_def::GK1Bqn6FZLg::jpVzTH0gQP6mUpoBDbp4Gw` |
| Update a User | PUT | `/api/users/{{userId}}` | `conn_mod_def::GK1B1-bJPMA::D9X3j6jtR0-YpldG38mSug` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by ID | GET | `/api/teams/{{teamId}}` | `conn_mod_def::GK1B1WZsybg::kgGr4AuwSIeGZ7lnEmcNjA` |
| Search Teams With Paging | GET | `/api/teams/search` | `conn_mod_def::GK1B1fukkkA::H31wzjwlSAChfh_Kkh_4UQ` |
| Add an External Group to a Team | POST | `/api/teams/{{teamId}}/groups` | `conn_mod_def::GK1B1LTSY0g::Tm5mxCWDTai3IVYwsuBsTQ` |
| Add Team | POST | `/api/teams` | `conn_mod_def::GK1B1VNeM8A::JJSbev4QSY2u5yVPa1LVEw` |
| Delete a Team by ID | DELETE | `/api/teams/{{teamId}}` | `conn_mod_def::GK1B1VNEiXA::3dTjl4MPSZy7sIWmR6-Odw` |
| Remove an External Group From a Team | DELETE | `/api/teams/{{teamId}}/groups` | `conn_mod_def::GK1B1LTXCrA::Etyu0dkhT_SCZB1k0WZHeg` |
| Set a Team's Memberships | PUT | `/api/teams/{{teamId}}/members` | `conn_mod_def::GK1B1esPg-A::z6DnjHIeTBqqDbe_4VZo3Q` |
| Update a Team | PUT | `/api/teams/{{teamId}}` | `conn_mod_def::GK1B1rNDHgg::VWJi8zkuTkaYc3Wm-fsKEA` |
| Update a Team's Preferences | PUT | `/api/teams/{{teamId}}/preferences` | `conn_mod_def::GK1B1re-VYg::bVBTzq78TTyttf7b9ge_AQ` |
| Update a Team's Roles | PUT | `/api/access-control/teams/{{teamId}}/roles` | `conn_mod_def::GK1Bp3BIFRA::NZYaj1weTcGa9AOhNqjkPg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization by ID | GET | `/api/orgs/{{orgId}}` | `conn_mod_def::GK1BwX89HLg::aE2oZwoSTo2lHzCk1IChDg` |
| Get Organization by Name | GET | `/api/orgs/name/{{orgName}}` | `conn_mod_def::GK1BwYprP8A::hweWe9xYSRCaZWvYsjwXSw` |
| List a User's Organizations | GET | `/api/users/{{userId}}/orgs` | `conn_mod_def::GK1B1r4CvBg::kPycAwXBQweR4Spo1E03bQ` |
| List the Signed-In User's Organizations | GET | `/api/user/orgs` | `conn_mod_def::GK1B0flJcKA::XY7Byi1hQemGpE2rkW57Tw` |
| Search All Organizations | GET | `/api/orgs` | `conn_mod_def::GK1BwjDCDvg::FXzBOjBqTKCX4ugXxF8Xzw` |
| Create Organization | POST | `/api/orgs` | `conn_mod_def::GK1BwOrrmWg::_yPUcPIWRb6a3zxU0YptNg` |
| Delete an Organization | DELETE | `/api/orgs/{{orgId}}` | `conn_mod_def::GK1BwYQwEJA::IazsHtiMR7qKaoJ_TAG0GA` |
| Update an Organization | PUT | `/api/orgs/{{orgId}}` | `conn_mod_def::GK1Bwh1Ntjg::7Nc0owFyQGCiX01GdeW_Hw` |
| Update an Organization's Address | PUT | `/api/orgs/{{orgId}}/address` | `conn_mod_def::GK1Bwi8pSnA::D85BWYzDROmukzFMotGHJQ` |

### Reports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a CSV Report | GET | `/api/reports/render/csvs` | `conn_mod_def::GK1By7gx3MA::oV8hHJwSQ7aG_lgrf_VRJw` |
| Get a Report | GET | `/api/reports/{{id}}` | `conn_mod_def::GK1BzEuHg4A::4wDzQrmRSFWCeV6h0lacXg` |
| List Reports | GET | `/api/reports` | `conn_mod_def::GK1BzEkG52g::4IlCZRXST_mLOWL6WQXBWQ` |
| Render Report PDFs for Multiple Dashboards | GET | `/api/reports/render/pdfs` | `conn_mod_def::GK1BzefWigA::B67ieaXbQs6E5BkcQ7uPuA` |
| Create a Report | POST | `/api/reports` | `conn_mod_def::GK1By8p3Tog::zy5XuWaSQOWCZRAwlWSzMA` |
| Delete a Report | DELETE | `/api/reports/{{id}}` | `conn_mod_def::GK1By6fun7A::2R_p-GPRT5SAc-EsIfpaSQ` |
| Send a Report by Email | POST | `/api/reports/email` | `conn_mod_def::GK1BzPJl0jg::FT1iUrZxS1msnM13-6wnog` |
| Send Test Report via Email | POST | `/api/reports/test-email` | `conn_mod_def::GK1BzPHr7xg::ee6auNQrRIKYagKjcGm1gw` |
| Update a Report | PUT | `/api/reports/{{id}}` | `conn_mod_def::GK1BzO60rTA::SMg62cFZTNa54fodtolgyg` |

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Annotations | GET | `/api/annotations` | `conn_mod_def::GK1Bq1NzxPg::l_krmpZiQuGk-Zd-Ny1WFg` |
| Get Annotation by ID | GET | `/api/annotations/{{annotationId}}` | `conn_mod_def::GK1Bq-GdmUg::b0f8T9ROSuK4Y1e1cAk8fA` |
| Create Annotation | POST | `/api/annotations` | `conn_mod_def::GK1Bqm3kW_A::_LXO0CprTTWkcb-bKeTRHw` |
| Create Annotation in Graphite Format | POST | `/api/annotations/graphite` | `conn_mod_def::GK1BqxXw-Ug::QwwEnbDmSdaghuv59Iksbg` |
| Delete Annotation By ID | DELETE | `/api/annotations/{{annotationId}}` | `conn_mod_def::GK1BqwXYhVg::xtu9Et0kQme2FLaz7QKqJA` |
| Delete Multiple Annotations | POST | `/api/annotations/mass-delete` | `conn_mod_def::GK1BqwyRTOA::2hcEGSYQRoO43mKnBulS6Q` |
| Patch an Annotation | PATCH | `/api/annotations/{{annotationId}}` | `conn_mod_def::GK1Bq-U6CYg::MyWecFxJQ8-BVyuVOhtnKw` |
| Update Annotation | PUT | `/api/annotations/{{annotationId}}` | `conn_mod_def::GK1Bq-MHchg::Gv6UYtueSfi7_i-8KQnDAA` |

### PrometheusRuleGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Prometheus Rule Group by Namespace and Group | GET | `/api/convert/api/prom/rules/{{namespaceTitle}}/{{group}}` | `conn_mod_def::GK1BrbzKdzg::8wvr15taQFyT590_xVvLoA` |
| Get a Prometheus Rule Group by Namespace and Group | GET | `/api/convert/prometheus/config/v1/rules/{{namespaceTitle}}/{{group}}` | `conn_mod_def::GK1BrXSpbHA::1mr6q9w1SJ6WrOGGMFFBIA` |
| Convert a Prometheus Rule Group in a Namespace | POST | `/api/convert/prometheus/config/v1/rules/{{namespaceTitle}}` | `conn_mod_def::GK1BrCnEqwg::Siv4uf7_Q8SzSB9qZisi3Q` |
| Convert Prometheus Rule Groups to Grafana-Managed Rules | POST | `/api/convert/prometheus/config/v1/rules` | `conn_mod_def::GK1BrND4bMA::1ZP45YWCSgSjwQ0-4LSUuQ` |
| Delete an Imported Prometheus Rule Group | DELETE | `/api/convert/prometheus/config/v1/rules/{{namespaceTitle}}/{{group}}` | `conn_mod_def::GK1BrL5jong::4cWlyYDwQAekhqNIhP6tbQ` |
| Delete an Imported Prometheus Rule Group | DELETE | `/api/convert/api/prom/rules/{{namespaceTitle}}/{{group}}` | `conn_mod_def::GK1BrMFvjqA::70fI98RqScOgFnSGCvsWaQ` |
| Delete Imported Prometheus Rule Groups in a Namespace | DELETE | `/api/convert/api/prom/rules/{{namespaceTitle}}` | `conn_mod_def::GK1BrL83ePA::F8LCDtf2SaO-A2QeTGag7A` |
| Delete Imported Prometheus Rule Groups in a Namespace | DELETE | `/api/convert/prometheus/config/v1/rules/{{namespaceTitle}}` | `conn_mod_def::GK1BrW-VFbg::-3nS5AYhSGe0LnwBeU-qgQ` |

### DataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Data Source by Name | GET | `/api/datasources/name/{{name}}` | `conn_mod_def::GK1BtGZMBhg::UPzCHnIQSKydYFnOOeq3NQ` |
| Get a Single Data Source by UID | GET | `/api/datasources/uid/{{uid}}` | `conn_mod_def::GK1BtNC91zg::TBs8Zq0ETCSP2-M6A8D6lg` |
| Get All Data Sources | GET | `/api/datasources` | `conn_mod_def::GK1BtGbKYcA::pmjc8VNRTsuHW67guar47A` |
| Get Data Source ID by Name | GET | `/api/datasources/id/{{name}}` | `conn_mod_def::GK1BtV2mr6g::cp1pWDPbTfmNf2_p7vL5eA` |
| Delete a Data Source by Name | DELETE | `/api/datasources/name/{{name}}` | `conn_mod_def::GK1Bszemk4g::nzXX1NSjQr68kj_yemkiLg` |
| Delete a Data Source by UID | DELETE | `/api/datasources/uid/{{uid}}` | `conn_mod_def::GK1BtGX-4Bg::ILUahFQxQPenTbbC9oPlSg` |
| Disable Cache for a Data Source | POST | `/api/datasources/{{dataSourceUID}}/cache/disable` | `conn_mod_def::GK1Btq-QURA::edJ-Ryi5R-6H5lRFchPxIQ` |
| Update a Data Source by UID | PUT | `/api/datasources/uid/{{uid}}` | `conn_mod_def::GK1Bthe2YoA::NqaipMu9SdeSdUQjyP9iWw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder's Descendant Counts by Kind | GET | `/api/folders/{{folderUid}}/counts` | `conn_mod_def::GK1BuFIkmOA::emfBur3HQ-WL_Qp8fbs1rw` |
| Get Folder by UID | GET | `/api/folders/{{folderUid}}` | `conn_mod_def::GK1Bt4_iS9g::QewecYTESr2nieeiyy7Qig` |
| List Folders in a Namespace | GET | `/apis/folder.grafana.app/v1/namespaces/{{ns}}/folders` | `conn_mod_def::GK1Bt4DOGOg::uqcUYmAWRAa9w6qT6HZh2w` |
| Create Folder | POST | `/api/folders` | `conn_mod_def::GK1Bt1yrjEg::5mAg6d6hQ6GP8WlpKwjI6w` |
| Delete a Folder | DELETE | `/apis/folder.grafana.app/v1/namespaces/{{ns}}/folders/{{folderUid}}` | `conn_mod_def::GK1Bt3H5qjA::jqbyei0XTmm3RyjJ0kFPSQ` |
| Move a Folder | POST | `/api/folders/{{folderUid}}/move` | `conn_mod_def::GK1BuCy-CvA::OvGoABYIQduZeFeQMm2W7w` |
| Update a Folder | PUT | `/api/folders/{{folderUid}}` | `conn_mod_def::GK1BuDXNXQg::b4Ebu7HMTj-cxNB3v67-Ww` |
| Update a Folder's Permissions | POST | `/api/folders/{{folderUid}}/permissions` | `conn_mod_def::GK1BuEJzCMg::j8z_9rJUQeW_kz7rY8ip2g` |

### MuteTimings

| Action | Method | Path | Action id |
|---|---|---|---|
| Export a Mute Timing in Provisioning Format | GET | `/api/v1/provisioning/mute-timings/{{name}}/export` | `conn_mod_def::GK1BxSQeinA::RSp0UYPFQXuXZKQJ3R_grw` |
| Export All Mute Timings in Provisioning Format | GET | `/api/v1/provisioning/mute-timings/export` | `conn_mod_def::GK1BxS9wx6g::wpFMYDl6RGeOWJciwNDsrg` |
| Get a Mute Timing | GET | `/api/v1/provisioning/mute-timings/{{name}}` | `conn_mod_def::GK1BxfvRsAA::NxSE9-j_R5iQiobGLRLlGg` |
| Get All Mute Timings | GET | `/api/v1/provisioning/mute-timings` | `conn_mod_def::GK1Bxo_0MCg::9TPLr3lnRtipLevt4a3FUg` |
| Create a New Mute Timing | POST | `/api/v1/provisioning/mute-timings` | `conn_mod_def::GK1Bw86OggA::1v8sbZ4SROKA-OSz-3z47g` |
| Delete a Mute Timing | DELETE | `/api/v1/provisioning/mute-timings/{{name}}` | `conn_mod_def::GK1BxHorajg::sQzxjG4MQWCw_EMf7racSA` |
| Replace an Existing Mute Timing | PUT | `/api/v1/provisioning/mute-timings/{{name}}` | `conn_mod_def::GK1Bx1O8Vfg::UtApAomySZGRY5DM6H2cnw` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dashboard by UID | GET | `/api/dashboards/uid/{{uid}}` | `conn_mod_def::GK1Br7JED0g::_0RLJUykSh-4bpz0j24sJQ` |
| Create or Update a Namespace Dashboard | POST | `/apis/dashboards.grafana.app/v1/namespaces/{{ns}}/dashboards` | `conn_mod_def::GK1Brl4iJWg::jVYkYGP5QxifGtnVfsurWA` |
| Delete a Dashboard by UID | DELETE | `/api/dashboards/uid/{{uid}}` | `conn_mod_def::GK1BrkTiUyA::ppuwUBiATtG6n70jFG-4Uw` |
| Import Dashboard | POST | `/api/dashboards/import` | `conn_mod_def::GK1BsIg5wbA::W6OSRzJjR8C6HO-9uw5UAw` |
| Interpolate Dashboard | POST | `/api/dashboards/interpolate` | `conn_mod_def::GK1BsEjrgOg::1j9MBtHIQDaN1y1tsVeo3w` |
| Restore a Dashboard by UID to a Given Version | POST | `/api/dashboards/uid/{{uid}}/restore` | `conn_mod_def::GK1BsSNN5BA::D3zCXZaPSdWMok73t8Vg8w` |

### PublicDashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dashboard's Public Dashboard | GET | `/api/dashboards/uid/{{dashboardUid}}/public-dashboards` | `conn_mod_def::GK1Br63gdqg::jGg17vUeSom0MBELYaDXLg` |
| List Public Dashboards | GET | `/api/dashboards/public-dashboards` | `conn_mod_def::GK1BsRAQCIg::gBpEV5MFSeGjgcLSqOwJxg` |
| View a Public Dashboard | GET | `/api/public/dashboards/{{accessToken}}` | `conn_mod_def::GK1BsftwdRA::n42iRbHYQGiKuePBe9FmRg` |
| Create a Public Dashboard for a Dashboard | POST | `/api/dashboards/uid/{{dashboardUid}}/public-dashboards` | `conn_mod_def::GK1BrkwYl6g::MOQUbZIxSfOC9qts3_9iuw` |
| Delete a Dashboard's Public Dashboard | DELETE | `/api/dashboards/uid/{{dashboardUid}}/public-dashboards/{{uid}}` | `conn_mod_def::GK1BrwnJI6g::fXJkDS_eSp2kFmi_LbCuDA` |
| Update a Dashboard's Public Dashboard | PATCH | `/api/dashboards/uid/{{dashboardUid}}/public-dashboards/{{uid}}` | `conn_mod_def::GK1BsStRQIA::j7MOTz8dSQGH-zxG_iTiwQ` |

This lists 90 of 321 actions. For anything not here, call `search_one_platform_actions` with platform `grafana`. The full catalog is at https://www.withone.ai/knowledge/grafana.

## When a call fails

The error comes from Grafana, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/grafana

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
