---
name: launchdarkly
description: LaunchDarkly is a feature management platform that provides feature flags, experimentation, and release controls through APIs and SDKs, allowing development teams to ship code safely, target features by audience, and manage progressive rollouts without redeploying applications. Read and write LaunchDarkly data through One: approvalrequests, segments, members, teams, featureflags, projects and more, 380 actions with real parameter documentation. Use whenever the user asks to look something up in LaunchDarkly, create or update a record there, or build code against the LaunchDarkly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: launchdarkly
  generated-from: one-knowledge-base
---

# LaunchDarkly through One

LaunchDarkly is a feature management platform that provides feature flags, experimentation, and release controls through APIs and SDKs, allowing development teams to ship code safely, target features by audience, and manage progressive rollouts without redeploying applications.

One exposes LaunchDarkly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `launchdarkly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm LaunchDarkly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real LaunchDarkly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ApprovalRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Approval Request | GET | `/api/v2/approval-requests/{{id}}` | `conn_mod_def::GLTrpeJTUdg::YQjmqUZSTHabDB86msTsoA` |
| List Approval Requests | GET | `/approval-requests` | `conn_mod_def::GLTrpeBfztg::pON5PuLdTiidFKTKW6U88w` |
| List Approval Requests for a Flag | GET | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests` | `conn_mod_def::GLTrppwLOCA::gnhwD9-dSoGEdWjWn-kwOw` |
| Apply an Approval Request | POST | `/api/v2/approval-requests/{{id}}/apply` | `conn_mod_def::GLTrpSxmI3g::NuYD-O9VRayWKv_OHr5e8w` |
| Apply Approval Request for a Flag | POST | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests/{{id}}/apply` | `conn_mod_def::GLTrpSrkiKA::p4TXiu4QTLSwq99e7-UmvA` |
| Approval Requests Flag Copy for a Feature Flag Environment | POST | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests-flag-copy` | `conn_mod_def::GLTrpU-2zaA::6zWdurjESuKbSQR3morqGg` |
| Create Approval Request | POST | `/approval-requests` | `conn_mod_def::GLTrpTtWAaA::gRSm87YuTmW7bYe8vgvfgg` |
| Create Approval Requests for a Flag Environment | POST | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests` | `conn_mod_def::GLTrpVbetmA::KRGLj7GRTlaj0Qfu6eq1Qg` |
| Delete an Approval Request | DELETE | `/api/v2/approval-requests/{{id}}` | `conn_mod_def::GLTrpdYQKNg::dp2k4SskTVWjZDI3IcW3TA` |
| Delete Approval Request for a Flag | DELETE | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests/{{id}}` | `conn_mod_def::GLTrpdu-Ung::4NJu2oJ_SUWDjyN6No2RpQ` |
| Review an Approval Request | POST | `/api/v2/approval-requests/{{id}}/reviews` | `conn_mod_def::GLTrpmywHIA::ueRy97d-QgaIrrMnYvo6vw` |
| Update a Flag Approval Request | PATCH | `/api/v2/projects/{{projectKey}}/flags/{{featureFlagKey}}/environments/{{environmentKey}}/approval-requests/{{id}}` | `conn_mod_def::GLTrpywyYxA::KO7V10uzQQyf3Dht1-9XTg` |

1 more ApprovalRequests actions are available through search.

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment | GET | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}` | `conn_mod_def::GLTrzAwilAg::iEA3qul4Ssm8_Iz5lZVkXg` |
| List Segments for a Project Environment | GET | `/api/v2/segments/{{projectKey}}/{{environmentKey}}` | `conn_mod_def::GLTrzCVmt8g::jA6MzZg1SC6z9Z1idjnAog` |
| Create a Segment | POST | `/api/v2/segments/{{projectKey}}/{{environmentKey}}` | `conn_mod_def::GLTrypIACtA::TaBBGPlVQJWPutL_dpTCEw` |
| Create Big Segment Export for a Segment | POST | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}/exports` | `conn_mod_def::GLTryqGscpg::Fk2S1y9bRdG-TRq701U3jQ` |
| Delete Segment | DELETE | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}` | `conn_mod_def::GLTrypHmPVg::53490SJwT9CrdU0ESaqmgQ` |
| Patch a Segment | PATCH | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}` | `conn_mod_def::GLTrzC0HFHg::h6B-3FkMTWicuxUZ6WrHAw` |
| Update Context Targets on a Big Segment | POST | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}/contexts` | `conn_mod_def::GLTrzLQMjjA::406Mv4iHSj6yU6rycbGylg` |
| Update Expiring Targets for a Segment | PATCH | `/api/v2/segments/{{projectKey}}/{{segmentKey}}/expiring-targets/{{environmentKey}}` | `conn_mod_def::GLTrzMch1wA::0kwAnpC6SlalPhXhHwPNqw` |
| Update Expiring User Targets for a Segment | PATCH | `/api/v2/segments/{{projectKey}}/{{segmentKey}}/expiring-user-targets/{{environmentKey}}` | `conn_mod_def::GLTrzMC0WOg::o1FdFS9tSICAK0ClxIxeIw` |
| Update User Context Targets on a Big Segment | POST | `/api/v2/segments/{{projectKey}}/{{environmentKey}}/{{segmentKey}}/users` | `conn_mod_def::GLTrzL-Ch9g::5WshRUSXSjG_UOVEaix2Ng` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Member | GET | `/api/v2/members/{{id}}` | `conn_mod_def::GLTrlujJsxg::5pqhDRamSkencexc-5MpHA` |
| List Account Members | GET | `/api/v2/members` | `conn_mod_def::GLTrl27-7FA::CBY5nrr8TgSwIzcJhC7zCw` |
| Add a Member to Teams | POST | `/api/v2/members/{{id}}/teams` | `conn_mod_def::GLTrlobp-Xg::FF2TYHOZQSW2D39xRHZXpw` |
| Delete an Account Member | DELETE | `/api/v2/members/{{id}}` | `conn_mod_def::GLTrlntLcQA::0BPPPBUzSiCP0AojC4psGA` |
| Invite New Members | POST | `/api/v2/members` | `conn_mod_def::GLTrln6pp5A::3DbAENaTSBGWDkPSnSIiNg` |
| Modify Account Members | PATCH | `/api/v2/members` | `conn_mod_def::GLTrl3-Hb8A::DGVK19bjTVqiG7kSNzW1kQ` |
| Modify an Account Member | PATCH | `/api/v2/members/{{id}}` | `conn_mod_def::GLTrl11K1Xg::oVOn1UMvSAi3K7JCT395vg` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team | GET | `/api/v2/teams/{{teamKey}}` | `conn_mod_def::GLTrzT6Qk9A::DinuGftfT5WHHBbtVOdYxA` |
| List Teams | GET | `/api/v2/teams` | `conn_mod_def::GLTrzdjobvg::xob9hEA9Teeg9wQaJauodQ` |
| Add Members to a Team | POST | `/api/v2/teams/{{teamKey}}/members` | `conn_mod_def::GLTrzT68lXA::fAiVDODSTJayvuNc7rjzDA` |
| Create Team | POST | `/api/v2/teams` | `conn_mod_def::GLTrzT85ibg::Fd5mVvi8RWOEdamzshaNlg` |
| Delete Team | DELETE | `/api/v2/teams/{{teamKey}}` | `conn_mod_def::GLTrzTwpvWA::lCZUZdrQR_KFswZjgVwceQ` |
| Update a Team | PATCH | `/api/v2/teams/{{teamKey}}` | `conn_mod_def::GLTrzdpZYDA::PKL6qWi2S0OvkA2WQ7lP4Q` |
| Update Teams | PATCH | `/api/v2/teams` | `conn_mod_def::GLTrzdd8htA::zPOaPDXnQBayUWC-8MNGXA` |

### FeatureFlags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Feature Flag for a Project | GET | `/api/v2/flags/{{projectKey}}/{{featureFlagKey}}` | `conn_mod_def::GLTrsCcm-tA::hfY_zJyHTve9wdpvROWXVA` |
| List Feature Flags for a Project | GET | `/api/v2/flags/{{projectKey}}` | `conn_mod_def::GLTrsNwYVHA::_YxPI3yIRR28C3uunetjTg` |
| Copy a Feature Flag | POST | `/api/v2/flags/{{projectKey}}/{{featureFlagKey}}/copy` | `conn_mod_def::GLTrr1uC-dg::yrPdwDqtQoyo8d491Ox5Dg` |
| Create a Feature Flag for a Project | POST | `/api/v2/flags/{{projectKey}}` | `conn_mod_def::GLTrr5Scd_g::mMx_4YMUSci6gzmiecxBww` |
| Delete Feature Flag for a Project | DELETE | `/api/v2/flags/{{projectKey}}/{{featureFlagKey}}` | `conn_mod_def::GLTrr1fZfcA::e9kH2MrjSr-CX4FjwPNATw` |
| Update a Feature Flag | PATCH | `/api/v2/flags/{{projectKey}}/{{featureFlagKey}}` | `conn_mod_def::GLTrsTsFqRA::0jwCDr8TTLOCoQa6rUCU9Q` |
| Update Expiring User Targets on a Feature Flag | PATCH | `/api/v2/flags/{{projectKey}}/{{featureFlagKey}}/expiring-user-targets/{{environmentKey}}` | `conn_mod_def::GLTrsMXQiJA::4OHOVOSiSZuoHtwZY4I41Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project | GET | `/api/v2/projects/{{projectKey}}` | `conn_mod_def::GLTrwOl8ipA::MvsBIr0KR5GI8izVledzsw` |
| List Projects | GET | `/api/v2/projects` | `conn_mod_def::GLTrwZ03MSA::Rfg6cD25Q6OoKitkPMispA` |
| Create Project | POST | `/projects` | `conn_mod_def::GLTrwLn6xIA::_wvDz-QdRa-dbw5GbXOTUA` |
| Delete Project | DELETE | `/api/v2/projects/{{projectKey}}` | `conn_mod_def::GLTrwLnoVcA::P22oYRuaSdS8U_v3HZfe4A` |
| Update Flag Default for a Project | PATCH | `/api/v2/projects/{{projectKey}}/flag-defaults` | `conn_mod_def::GLTrwXVSpvg::hKj1c7LhSKKwIF61--YNrw` |
| Update Project | PATCH | `/api/v2/projects/{{projectKey}}` | `conn_mod_def::GLTrwXl5Npg::QkmUlixVTkaXlTSo5xP73A` |

### Destinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Destinations | GET | `/destinations` | `conn_mod_def::GLTrrLlegEg::R57DvW2VQI2IfZxZTucKjw` |
| Complete Setup for a Warehouse Destination | POST | `/api/v2/destinations/projects/{{projKey}}/environments/{{envKey}}/kinds/{{kind}}/complete-setup` | `conn_mod_def::GLTrrDKqvIg::wW8PYRTMTnOnGBCMi9anyw` |
| Create Data Export Destination for a Project Environment | POST | `/api/v2/destinations/{{projectKey}}/{{environmentKey}}` | `conn_mod_def::GLTrrCkwqlA::VdOu0j2wQgOv04GQ3SV2Bw` |
| Generate Trust Policy for a Destination Environment in a Project | POST | `/api/v2/destinations/projects/{{projKey}}/environments/{{envKey}}/generate-trust-policy` | `conn_mod_def::GLTrrLzbcgg::P4dQYC5WQoqouq5d47TwJw` |
| Generate Warehouse Destination Setup Script | POST | `/api/v2/destinations/projects/{{projKey}}/environments/{{envKey}}/kinds/{{kind}}/setup` | `conn_mod_def::GLTrrLDtvAg::FZ12MCXBRAaRTag8fmrr9w` |
| Update a Data Export Destination | PATCH | `/api/v2/destinations/{{projectKey}}/{{environmentKey}}/{{id}}` | `conn_mod_def::GLTrrLv1W7A::scM1ws2DTrmud2DL4r67Gg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Users for a Project Environment | GET | `/api/v2/user-search/{{projectKey}}/{{environmentKey}}` | `conn_mod_def::GLTrz1CQPAA::yZ9IZ0CMQ666uB1rmHPQGg` |
| Get a User's Flag Setting | GET | `/api/v2/users/{{projectKey}}/{{environmentKey}}/{{userKey}}/flags/{{featureFlagKey}}` | `conn_mod_def::GLTrzpmXF_g::Hsh_8OELSYOrVdHNOaLxFA` |
| Get User for a Project Environment User | GET | `/api/v2/users/{{projectKey}}/{{environmentKey}}/{{userKey}}` | `conn_mod_def::GLTrzyGKxig::IbQzt7soScqINTU818vkcw` |
| List Users for a Project Environment | GET | `/api/v2/users/{{projectKey}}/{{environmentKey}}` | `conn_mod_def::GLTrzzZW4tA::kyVRCEh_RUmPSUiHR0ApBg` |
| Delete a User | DELETE | `/api/v2/users/{{projectKey}}/{{environmentKey}}/{{userKey}}` | `conn_mod_def::GLTrzqB23-A::iM56wXkxS1SS3jV6U-0uPA` |
| Update Flag Settings for a User | PUT | `/api/v2/users/{{projectKey}}/{{environmentKey}}/{{userKey}}/flags/{{featureFlagKey}}` | `conn_mod_def::GLTrzp5yXVA::O_dugX0FTAu6s4Gwo89FIw` |

### IntegrationConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Integration Configurations for an Integration Key | GET | `/api/v2/integration-configurations/keys/{{integrationKey}}` | `conn_mod_def::GLTru2bHgRg::cml_dk1FQpySmZma8u8ITw` |
| Get an Integration Configuration | GET | `/api/v2/integration-configurations/{{integrationConfigurationId}}` | `conn_mod_def::GLTrvAKrFPA::AfvKvQEJTeWxUWoJKMl7Uw` |
| Create Integration Configuration by Integration Key | POST | `/api/v2/integration-configurations/keys/{{integrationKey}}` | `conn_mod_def::GLTru2QDMPg::9awDH1oITjGnLMgTSPGIvQ` |
| Delete Integration Configuration | DELETE | `/api/v2/integration-configurations/{{integrationConfigurationId}}` | `conn_mod_def::GLTru23iXgA::uH-ka4XXSxKFiO4TS0bX6Q` |
| Update an Integration Configuration | PATCH | `/api/v2/integration-configurations/{{integrationConfigurationId}}` | `conn_mod_def::GLTrvA6M5BA::48NxLoVGSEWp156yl5Ctrw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook by ID | GET | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GLTr0WczYEg::fpgWFR7QT0uSCOXWca6zSQ` |
| List Webhooks | GET | `/webhooks` | `conn_mod_def::GLTr0Wczh1g::n_qvgi55Q2OUtaUrPqKmTA` |
| Create Webhook | POST | `/api/v2/webhooks` | `conn_mod_def::GLTr0M1Em3g::i3mtRZWkT4GoJ0OU1huq1A` |
| Delete a Webhook | DELETE | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GLTr0Olt2eA::GALLBiAfSHWKSuGfQ32s4g` |
| Update a Webhook | PATCH | `/api/v2/webhooks/{{id}}` | `conn_mod_def::GLTr0Wczvgg::gS0NdVcaT4GIlAgollaXnA` |

### AgentOptimizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Optimization for a Project | GET | `/api/v2/projects/{{projectKey}}/agent-optimizations/{{optimizationKey}}` | `conn_mod_def::GLTrnlOkHUg::wdZeL6IUTWavJoXFp-1txA` |
| List Agent Optimizations for a Project | GET | `/api/v2/projects/{{projectKey}}/agent-optimizations` | `conn_mod_def::GLTrnwhuP9g::8OHdSxeUSYKOBUuoLy1siQ` |
| Create Agent Optimization for a Project | POST | `/api/v2/projects/{{projectKey}}/agent-optimizations` | `conn_mod_def::GLTrm9l53Kg::sdbN0_3VS0yGopVl3JDjEw` |
| Delete an Agent Optimization for a Project | DELETE | `/api/v2/projects/{{projectKey}}/agent-optimizations/{{optimizationKey}}` | `conn_mod_def::GLTrnPBzkkA::sKufPpf8Qa657AZ7bQXIdg` |
| Update an Agent Optimization for a Project | PATCH | `/api/v2/projects/{{projectKey}}/agent-optimizations/{{optimizationKey}}` | `conn_mod_def::GLTromqut4g::2w8Q30btRVao_lPSEUcDwQ` |

### AgentGraphs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Graph for a Project | GET | `/api/v2/projects/{{projectKey}}/agent-graphs/{{graphKey}}` | `conn_mod_def::GLTrnc03txA::-MJ1aCoRTrGCpoL30LZPiw` |
| List Agent Graphs for a Project | GET | `/api/v2/projects/{{projectKey}}/agent-graphs` | `conn_mod_def::GLTrnvSo9HA::E1NXK2m3RV-gg1wXKJ5ViA` |
| Create an Agent Graph for a Project | POST | `/api/v2/projects/{{projectKey}}/agent-graphs` | `conn_mod_def::GLTrnHBRZsg::YomUR_AHTo6V1asC64XAmQ` |
| Delete an Agent Graph for a Project | DELETE | `/api/v2/projects/{{projectKey}}/agent-graphs/{{graphKey}}` | `conn_mod_def::GLTrnGkCgZA::32j_yTm2Rpa3F7IwFXVGQQ` |
| Update an Agent Graph in a Project | PATCH | `/api/v2/projects/{{projectKey}}/agent-graphs/{{graphKey}}` | `conn_mod_def::GLTrodUaKQA::l2tHWXdNS6ynOAOiL8m3Tg` |

### ProjectViews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project View | GET | `/api/v2/projects/{{projectKey}}/views/{{viewKey}}` | `conn_mod_def::GLTr0EU9Fyg::GPhgvA5_Rp-xdYkpP4wZIA` |
| Delete a Project View | DELETE | `/api/v2/projects/{{projectKey}}/views/{{viewKey}}` | `conn_mod_def::GLTrz91sRxg::sDO4JiqZTdqagywQCqsJ8w` |
| Link Resource to a Project View | POST | `/api/v2/projects/{{projectKey}}/views/{{viewKey}}/link/{{resourceType}}` | `conn_mod_def::GLTr0D2J-bA::TDTk1OPsTEqcGwPA1PsjgA` |
| Unlink Resource from a Project View | DELETE | `/api/v2/projects/{{projectKey}}/views/{{viewKey}}/link/{{resourceType}}` | `conn_mod_def::GLTr0OOYr-A::l624CnKLRjWgLltEzfRyIQ` |
| Update a Project View | PATCH | `/api/v2/projects/{{projectKey}}/views/{{viewKey}}` | `conn_mod_def::GLTr0OO6YOA::-rwaOF5WST2QLg1KYWUvag` |

### AiConfigs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Config for a Project | GET | `/api/v2/projects/{{projectKey}}/ai-configs/{{configKey}}` | `conn_mod_def::GLTrnY5yeIA::XFTighuoSQq1XDXOgbxDvQ` |
| List AI Configs for a Project | GET | `/api/v2/projects/{{projectKey}}/ai-configs` | `conn_mod_def::GLTrn83fiZg::78oz3JafTAGCGLtSxk-4FA` |
| Create a Project AI Config | POST | `/api/v2/projects/{{projectKey}}/ai-configs` | `conn_mod_def::GLTrnG3TejA::pBgnBj-mRzmrnhDAWv5fEw` |
| Delete AI Config for a Project | DELETE | `/api/v2/projects/{{projectKey}}/ai-configs/{{configKey}}` | `conn_mod_def::GLTrnPfo8wg::j5Rnw1UNQ4SKSN-tkSeeTw` |

1 more AiConfigs actions are available through search.

This lists 90 of 380 actions. For anything not here, call `search_one_platform_actions` with platform `launchdarkly`. The full catalog is at https://www.withone.ai/knowledge/launchdarkly.

## When a call fails

The error comes from LaunchDarkly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/launchdarkly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
