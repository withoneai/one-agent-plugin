---
name: codemagic
description: Codemagic is a cloud-based CI/CD platform designed for mobile development that automates building, testing, and deploying apps across Android, iOS, and cross-platform frameworks, enabling developers to streamline release workflows and integrate directly with code repositories for faster, automated delivery. Read and write Codemagic data through One: variablegroups, testergroups, previews, subscriptions, teamsubscriptions, apps and more, 78 actions with real parameter documentation. Use whenever the user asks to look something up in Codemagic, create or update a record there, or build code against the Codemagic API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: codemagic
  generated-from: one-knowledge-base
---

# Codemagic through One

Codemagic is a cloud-based CI/CD platform designed for mobile development that automates building, testing, and deploying apps across Android, iOS, and cross-platform frameworks, enabling developers to streamline release workflows and integrate directly with code repositories for faster, automated delivery.

One exposes Codemagic through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `codemagic` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Codemagic is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Codemagic account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### VariableGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Variable from a Variable Group | GET | `/api/v3/variable-groups/{{variableGroupId}}/variables/{{variableId}}` | `conn_mod_def::GKia3QHv8og::vLrPVg5TTneZ0Uh9frPCoQ` |
| Get a Variable Group's Information | GET | `/api/v3/variable-groups/{{variableGroupId}}` | `conn_mod_def::GKia3Pq3LWA::ZLxRjsXUSAWGGANXFykvYQ` |
| List a Team's Variable Groups | GET | `/api/v3/teams/{{teamId}}/variable-groups` | `conn_mod_def::GKia3ZkLpeA::ADn18kmNSpiuIejLISR1TQ` |
| List an App's Variable Groups | GET | `/api/v3/apps/{{appId}}/variable-groups` | `conn_mod_def::GKia3Qz3EUg::yBw1QNuSSjWaxCP_VYsOSA` |
| Bulk Import Variables to a Variable Group | POST | `/api/v3/variable-groups/{{variableGroupId}}/variables` | `conn_mod_def::GKia3HVxtxA::dlhUuG5WSfyXug6ch8ntyg` |
| Change a Variable Group's Name and Settings | PATCH | `/api/v3/variable-groups/{{variableGroupId}}` | `conn_mod_def::GKia3FEyxOg::CMFgRHB8SdyQKXycnc0CYw` |
| Create a Variable Group for an App | POST | `/api/v3/apps/{{appId}}/variable-groups` | `conn_mod_def::GKia3F5oi0g::Xnfi_rCSS-qNpqVXKJ9CzA` |
| Delete a Variable Group | DELETE | `/api/v3/variable-groups/{{variableGroupId}}` | `conn_mod_def::GKia3PsXI8g::jre0NxtUQb-GbRyY0J1xUA` |
| Delete a Variable in a Variable Group | DELETE | `/api/v3/variable-groups/{{variableGroupId}}/variables/{{variableId}}` | `conn_mod_def::GKia3P30heA::yCFxAScuTBCgLhKZuRQqAA` |
| Update a Variable in a Variable Group | PATCH | `/api/v3/variable-groups/{{variableGroupId}}/variables/{{variableId}}` | `conn_mod_def::GKia3Y8g2Eg::jGPCQiCYQ4WozfIqsfBYrA` |

### TesterGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tester Group | GET | `/api/v3/tester-groups/{{testerGroupId}}` | `conn_mod_def::GKia4AZhyCA::ew1vxyyKSFiDnH6JtSJpyA` |
| List an App's Tester Groups | GET | `/api/v3/apps/{{appId}}/tester-groups` | `conn_mod_def::GKia4KmEaoA::VDkRQNFdReO_KopDjx0fgQ` |
| Bulk Import Contacts to a Tester Group | POST | `/api/v3/tester-groups/{{testerGroupId}}/contacts` | `conn_mod_def::GKia33LsUNg::UlaSr13oRCaByCkOldlj4Q` |
| Create a Tester Group for an App | POST | `/api/v3/apps/{{appId}}/tester-groups` | `conn_mod_def::GKia4AY1OeA::M299uNJZQsmHiPcNKoMZag` |
| Delete a Contact From a Tester Group | DELETE | `/api/v3/tester-groups/{{testerGroupId}}/contacts/{{contactId}}` | `conn_mod_def::GKia4Ag9F9A::xkTwN3STQy6Al1XiqD3Y4g` |
| Delete a Tester Group | DELETE | `/api/v3/tester-groups/{{testerGroupId}}` | `conn_mod_def::GKia4AZcD0g::rzD8uAMwQYusZJygmZSeAA` |
| Update a Tester Group | PATCH | `/api/v3/tester-groups/{{testerGroupId}}` | `conn_mod_def::GKia4I9nT8g::vtq8X9XbSrOASDY8XD9aQg` |

### Previews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get App Preview Information | GET | `/api/v3/previews/{{previewId}}` | `conn_mod_def::GKia1UPGXnA::hV5ZJFIAQciz_BbE0ktdiA` |
| Share an App Preview | POST | `/api/v3/previews/{{previewId}}/share` | `conn_mod_def::GKia1UJElLg::JHI7mNe4Qeaq--KYeJLbnw` |
| Stop an App Preview | DELETE | `/api/v3/previews/{{previewId}}` | `conn_mod_def::GKia1dfmH3g::nFVVJ-fuTY-5m71kb7nGCA` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Subscriptions | GET | `/api/v3/teams/{{teamId}}/subscriptions` | `conn_mod_def::GKia1x1VwNA::H-5yVbPuRXiDIZ_jUtADJA` |
| Cancel a Team Subscription | DELETE | `/api/v3/teams/{{teamId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GKia1d-bqgg::5fYLdG-ZR9ShmHQdoWCpZA` |
| Update Subscription Features for a Team | PATCH | `/api/v3/subscriptions/{{teamId}}/features` | `conn_mod_def::GKia32IW8aA::cIz6qUuaQQeaySmASS0bog` |

### TeamSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Subscription's Details | GET | `/api/v3/teams/{{teamId}}/subscriptions/{{subscriptionId}}` | `conn_mod_def::GKia1qPBFsA::-JaBOn4WREutWZ27QfVuXw` |
| Create a Team Subscription | POST | `/api/v3/teams/{{teamId}}/subscriptions` | `conn_mod_def::GKia1fIsm_A::Q-4RxlcdQO6NkrK0WlTKCw` |
| Set a Team Subscription's Default Payment Method | PUT | `/api/v3/teams/{{teamId}}/subscriptions/{{subscriptionId}}/default-payment-method` | `conn_mod_def::GKia1ycEugA::S8lv38MVT1u1zmSyVuoz3Q` |

### Apps

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Apps | GET | `/api/v3/teams/{{teamId}}/apps` | `conn_mod_def::GKia1eTML5g::kifs6Q6rTmCz-vSQZRBiFg` |
| List Apps for the Authenticated User | GET | `/user/apps` | `conn_mod_def::GKia1eZ0gJg::HwEFKI4UTXua9Rn4nYI5bg` |

### OtaAccessKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's OTA Access Keys | GET | `/api/v3/ota/{{teamId}}/access-keys` | `conn_mod_def::GKia26dCpjg::K2_FyKGTS8mzcXJqnf-Gqg` |
| Delete a Team OTA Access Key | DELETE | `/api/v3/ota/{{teamId}}/access-keys/{{keyId}}` | `conn_mod_def::GKia2QPD-6g::F-EDQSYvTe29wEx2iugATg` |

### DeploymentReleasesHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deployment's Releases History | GET | `/api/v3/ota/deployments/{{deploymentId}}/releases` | `conn_mod_def::GKia2aXxMeg::o6HZoUcoRL-ymGudH7RUwA` |
| Get a Deployment's Releases History | GET | `/api/v3/over-the-air-updates/deployments/{{deploymentId}}/releases` | `conn_mod_def::GKia2w4nv7A::p6SJp-6OSH67mljRkPihgg` |

### DeploymentKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Deployment Keys | GET | `/api/v3/over-the-air-updates/projects/{{projectId}}/deployment-keys` | `conn_mod_def::GKia2apYdAg::r7zXkmpXTp69HJZ-h2e2Eg` |
| List a Project's Deployment Keys | GET | `/api/v3/ota/projects/{{projectId}}/deployment-keys` | `conn_mod_def::GKia2bCJtEA::TOkGHsjgQi-OTwBo86YX3g` |

### AuditLogConnector

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Team's Audit Log Connector Settings | DELETE | `/api/v3/teams/{{teamId}}/audit-log-connector` | `conn_mod_def::GKia3oNdYYg::3ch0uI5rRK6zelXGytwp5g` |
| Update a Team's Audit Log Connector Settings | PUT | `/api/v3/teams/{{teamId}}/audit-log-connector` | `conn_mod_def::GKia3214Udg::owCr5jEdTuyMUEvMySBNpA` |

### TeamMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a User's Team Membership | DELETE | `/api/v3/teams/{{teamId}}/memberships/{{userId}}` | `conn_mod_def::GKia3tJXu_g::C9txweiiQGa8mewC61kP2A` |
| Update a Team Membership for a User | PUT | `/api/v3/teams/{{teamId}}/memberships/{{userId}}` | `conn_mod_def::GKia3oSn1zA::u6sSbekxT-6x1rgoC4pFWQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team's Info | GET | `/api/v3/teams/{{teamId}}` | `conn_mod_def::GKia314UwoA::FNY1ezuUSii5VBjs9Zrqug` |
| List Teams for the Authenticated User | GET | `/user/teams` | `conn_mod_def::GKia3268BQg::CkEu4oPSQKibl59KMcDVlg` |

### UserApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Authenticated User's API Key | GET | `/user/api-key` | `conn_mod_def::GKia4JGU8bA::pWdCGB45R_-iV_XyK582fw` |
| Revoke API Key for the Authenticated User | DELETE | `/user/api-key` | `conn_mod_def::GKia4TqdvaA::2TRaebF-R1KwoPwAkfraTw` |

### SharedPreviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shared App Preview Information | GET | `/api/v3/shared-previews/{{sharedPreviewId}}` | `conn_mod_def::GKia1UJBzcg::mchVXaVFSqeKeGZ6qD21PQ` |

### BuildPreviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Start an App Preview for a Build | POST | `/api/v3/builds/{{buildId}}/preview` | `conn_mod_def::GKia1Vs0anA::mnSvbjadS3GDYRj3TZtsng` |

### TeamAppPreviews

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's App Previews | GET | `/api/v3/teams/{{teamId}}/previews` | `conn_mod_def::GKia1WS_l5A::M939qDlSRqeh48FweqL7og` |

### InvoicePreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Invoice Preview for a Team | POST | `/api/v3/teams/{{teamId}}/invoice-preview` | `conn_mod_def::GKia1nIopbA::YUvY-A49TQuLKCxwqJKTlQ` |

### TeamSubscriptionInvoicePreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Subscription Invoice Preview | GET | `/api/v3/teams/{{teamId}}/subscriptions/{{subscriptionId}}/invoice-preview` | `conn_mod_def::GKia1oK2rzA::IU06IaIIR_uRJtWSQNBYIQ` |

### Cards

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Cards | GET | `/api/v3/teams/{{teamId}}/cards` | `conn_mod_def::GKia1oZw0QA::e2lOU0hyTgWxYA8I-DQNuQ` |

### TeamSubscriptionsInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team Subscription's Invoices | GET | `/api/v3/teams/{{teamId}}/subscriptions/{{subscriptionId}}/invoices` | `conn_mod_def::GKia1p5-vrA::v5nVgbNBTkK7yRYr-EkrTQ` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dashboard | GET | `/api/v3/dashboards/{{uuid}}` | `conn_mod_def::GKia1xxynGA::k7lCCqCPTA--T9VArEmhrg` |

### DashboardBuilds

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Dashboard's Builds | GET | `/api/v3/dashboards/{{uuid}}/builds` | `conn_mod_def::GKia1zcsxiA::FGHdV6akRU-ohkKaABzWlg` |

### TeamInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Invoices | GET | `/api/v3/teams/{{teamId}}/invoices` | `conn_mod_def::GKia17lp5kA::JrPVbT9gRTainEbgV4tCyA` |

### ShorebirdIntegrationInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shorebird Integration Information | GET | `/meta/shorebird` | `conn_mod_def::GKia2EPe5Dg::U51FWszBRWiNyrcINLt2Pg` |

### BuildActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Build Actions for a Build | GET | `/api/v3/builds/{{buildId}}/actions` | `conn_mod_def::GKia2EsAArA::nCjGyNyQSaSXvGWHnAo8AQ` |

### Builds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Build Info | GET | `/api/v3/builds/{{buildId}}` | `conn_mod_def::GKia2EsC_Gg::60hLQnSPTNCNPWOrDwnVjA` |

### BuildRemoteAccess

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Build Remote Access Info | GET | `/api/v3/builds/{{buildId}}/remote-access` | `conn_mod_def::GKia2GJRN-A::IUaFWOxnTwyiJ4PbEsh04A` |

### TeamsBuilds

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Builds | GET | `/api/v3/teams/{{teamId}}/builds` | `conn_mod_def::GKia2GmPBhg::aH4BkQmeRt-PBtmW2aVE5Q` |

### Meta

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Meta Information | GET | `/meta` | `conn_mod_def::GKia2PqpM_g::0XYOtfF8Qu-Ctaf-agzvEw` |

### OverTheAirUpdates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Information for the Authenticated User | GET | `/over-the-air-updates` | `conn_mod_def::GKia2P3qYPA::Y9XrvgibSLSZ0Yz6AZ5--w` |

### TeamOtaAccessKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team OTA Access Key | POST | `/api/v3/ota/{{teamId}}/access-keys` | `conn_mod_def::GKia2QgQzEA::kR1uhv77RiKStw0m_9wq4g` |

### OtaAccountInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OTA Account Information for the Authenticated User | GET | `/ota` | `conn_mod_def::GKia2Q25d6A::OTitF-V-QRi_D-f8FO8L3g` |

### DeploymentChannelUsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage Stats for a Deployment Channel | GET | `/api/v3/over-the-air-updates/deployments/{{deploymentId}}/usage/{{metric}}` | `conn_mod_def::GKia2h9SPSA::lH9BXWWRSV6dMxKHMNXmVg` |

### OtaUsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team's OTA Usage Stats | GET | `/api/v3/ota/{{teamId}}/usage` | `conn_mod_def::GKia26W58vg::zIqs_NMGRVWVuLOB3XKq0Q` |

### DeploymentUsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage Stats for a Deployment Channel | GET | `/api/v3/ota/deployments/{{deploymentId}}/usage/{{metric}}` | `conn_mod_def::GKia26XXdag::jHxs78vaT_qWzwmIppgnAA` |

### OverTheAirUpdateUsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Over-the-Air Update Usage Stats for a Team | GET | `/api/v3/over-the-air-updates/{{teamId}}/usage` | `conn_mod_def::GKia2692A7g::fDy_EFckQT216uSZxGg0-g` |

### OverTheAirUpdateProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Over-the-Air Update Projects | GET | `/api/v3/over-the-air-updates/{{teamId}}/projects` | `conn_mod_def::GKia27Hq84g::GSQgH0t0TsadJ3Wd34oOjQ` |

### TeamVariableGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Variable Group | POST | `/api/v3/teams/{{teamId}}/variable-groups` | `conn_mod_def::GKia3FGZZlg::T55fmOQvTtGGtq_vzPblKw` |

### OtaProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's OTA Projects | GET | `/api/v3/ota/{{teamId}}/projects` | `conn_mod_def::GKia3FS08oA::CQOdweErSKi10kVYhIRlJA` |

### UserMemberships

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Authenticated User From a Team | DELETE | `/api/v3/user/memberships/{{teamId}}` | `conn_mod_def::GKia3ZFs9uA::d-Ea3w4wSq6gLtUrGmITog` |

### VariableGroupsVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Variable Group's Variables | GET | `/api/v3/variable-groups/{{variableGroupId}}/variables` | `conn_mod_def::GKia3aPks6g::2__jV3E0R_-2Aq8AY5XOxw` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Members | GET | `/api/v3/teams/{{teamId}}/members` | `conn_mod_def::GKia3fwTAxg::RCNXVwFcTvyIb5_fZBUIyg` |

### AuditLogConnectorSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team's Audit Log Connector Settings | GET | `/api/v3/teams/{{teamId}}/audit-log-connector` | `conn_mod_def::GKia3oOmTYA::PNScHkKvRdSkIqLpFvtYDg` |

### TeamAuditLog

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Team Audit Log as CSV | GET | `/api/v3/teams/{{teamId}}/audit-log` | `conn_mod_def::GKia3obquoA::ZvDDTCfUTpiA8K17T8bBaw` |

### TesterGroupsContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Tester Group's Contacts | GET | `/api/v3/tester-groups/{{testerGroupId}}/contacts` | `conn_mod_def::GKia4BQuKTA::qUOWNvPBTRCVporU313WBw` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authenticated User Info | GET | `/user` | `conn_mod_def::GKia4JLY08A::lxOYSSOJR-ywK4YqT0ab1g` |

### Notifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Notifications for the Authenticated User | GET | `/api/v3/user/notifications` | `conn_mod_def::GKia4JlyvPA::OfalGnr4REqFUImSz8Pv1w` |

### UserEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Track User Events | POST | `/user/track` | `conn_mod_def::GKia4Siz9LA::7JtULDETSV-_yHDHxkKtRQ` |

### UserPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Preferences for the Authenticated User | GET | `/user/preferences` | `conn_mod_def::GKia4Si7GNA::zZecsE51S-2WbN7Ju9DnOA` |

## When a call fails

The error comes from Codemagic, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/codemagic

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
