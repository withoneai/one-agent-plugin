---
name: sentry
description: Sentry is an application monitoring and error-tracking platform that enables developers to detect, trace, and fix issues in real time by providing code-level visibility into errors, performance bottlenecks, and user impact across web, mobile, and backend systems. Read and write Sentry data through One: organizationmembers, monitors, issues, projects, teams, projectservicehooks and more, 209 actions with real parameter documentation. Use whenever the user asks to look something up in Sentry, create or update a record there, or build code against the Sentry API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: sentry
  generated-from: one-knowledge-base
---

# Sentry through One

Sentry is an application monitoring and error-tracking platform that enables developers to detect, trace, and fix issues in real time by providing code-level visibility into errors, performance bottlenecks, and user impact across web, mobile, and backend systems.

One exposes Sentry through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `sentry` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Sentry is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Sentry account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Members | GET | `/api/0/organizations/{{organizationIdOrSlug}}/members/` | `conn_mod_def::GKrGG4kkjog::OQYT4LRPTAerEb3kwJugPA` |
| Query an Individual Organization Member | GET | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Users/{{memberId}}` | `conn_mod_def::GKrGK6iOYpg::xR3L3rweThq2SQuZXSburA` |
| Retrieve an Organization Member | GET | `/api/0/organizations/{{organizationIdOrSlug}}/members/{{memberId}}/` | `conn_mod_def::GKrGHHyiPGg::WTcUXI66Qj-RzzwhEB4AAA` |
| Add a Member to an Organization | POST | `/api/0/organizations/{{organizationIdOrSlug}}/members/` | `conn_mod_def::GKrGGtHhTdg::kkBacVerQkOqAHcWZu_KwA` |
| Delete an Organization Member | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/members/{{memberId}}/` | `conn_mod_def::GKrGGr_Xaig::ypDgw5TCS6iOC_jAxz6YmQ` |
| Delete an Organization Member from a Team | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/members/{{memberId}}/teams/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGLS6hymg::6G_wRT58SFK446BkeFOlyQ` |
| Delete an Organization Member via SCIM | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Users/{{memberId}}` | `conn_mod_def::GKrGKmSixUg::TO60BTqSS8-TXuiM4Mtgkg` |
| Provision a New Organization Member | POST | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Users` | `conn_mod_def::GKrGK1PTe4A::lKR0YXuaQhmpCE1NdQBkFQ` |
| Update an Organization Member's Attributes | PATCH | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Users/{{memberId}}` | `conn_mod_def::GKrGLDyqrOg::oausa97uTCmcN1UlpK2Uuw` |
| Update an Organization Member's Roles | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/members/{{memberId}}/` | `conn_mod_def::GKrGHX1tyKA::gfzPoTJcRlWSqIWUg7Vd8A` |

### Monitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Monitor for an Organization | GET | `/api/0/organizations/{{organizationIdOrSlug}}/detectors/{{detectorId}}/` | `conn_mod_def::GKrGGQ2Ou7A::6gI33z0fSG2EnrbEy72ZDw` |
| Fetch an Organization's Monitors | GET | `/api/0/organizations/{{organizationIdOrSlug}}/detectors/` | `conn_mod_def::GKrGGdK2J0g::zi0fxh9WSqWe9OwH-BDSCw` |
| Retrieve Monitors for an Organization | GET | `/api/0/organizations/{{organizationIdOrSlug}}/monitors/` | `conn_mod_def::GKrGDh0CMlg::R-A-mYDNSQyqK0yOYgk4lQ` |
| Bulk Delete an Organization's Monitors | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/detectors/` | `conn_mod_def::GKrGGGbySFg::jx_mVh6NSTCjM1x1lv8Myw` |
| Create a Monitor for a Project | POST | `/api/0/organizations/{{organizationIdOrSlug}}/projects/{{projectIdOrSlug}}/detectors/` | `conn_mod_def::GKrGGSshC7A::de4O9PnqQE6NNY6NYPZDeg` |
| Delete a Monitor in an Organization | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/monitors/{{monitorIdOrSlug}}/` | `conn_mod_def::GKrGDSyc96g::M0DNoZvaTkmd70CU3hjZVQ` |
| Delete an Organization's Monitor | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/detectors/{{detectorId}}/` | `conn_mod_def::GKrGGRYy0Kg::z0G51HtzTe6YmTtPpzQEIQ` |
| Update a Monitor by ID for an Organization | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/detectors/{{detectorId}}/` | `conn_mod_def::GKrGGtvwaGg::h5OMVHjiTq27AKCK2wR48A` |

### Issues

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Issue's Hashes | GET | `/api/0/organizations/{{organizationIdOrSlug}}/issues/{{issueId}}/hashes/` | `conn_mod_def::GKrGErHIwcg::y5X2tMBgSt6RVuhwZm9dMQ` |
| List an Organization's Issues | GET | `/api/0/organizations/{{organizationIdOrSlug}}/issues/` | `conn_mod_def::GKrGEuQvpmg::_j7eAbyRRNmp2hYtds3qRg` |
| Bulk Mutate a Project's List of Issues | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/issues/` | `conn_mod_def::GKrGEQ8LqMA::Rm7Ro8lTRb2j3ThPPKLHVg` |
| Bulk Mutate an Organization's Issues | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/issues/` | `conn_mod_def::GKrGEgz_KhA::latN7MU7SfaBsxMjVJSE3A` |
| Bulk Remove a Project's List of Issues | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/issues/` | `conn_mod_def::GKrGEaPpjZA::9TYO0xeSRja9E3xNqgIoIQ` |
| Bulk Remove an Organization's Issues | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/issues/` | `conn_mod_def::GKrGEbxgCOA::IXzg2vNrQWm1nZMYZ0IShg` |
| Remove an Organization's Issue | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/issues/{{issueId}}/` | `conn_mod_def::GKrGE3s3xgg::UnfUXxG7Qn2z1N07Lx2uHw` |
| Start Seer Issue Fix for an Organization Issue | POST | `/api/0/organizations/{{organizationIdOrSlug}}/issues/{{issueId}}/autofix/` | `conn_mod_def::GKrGLDczZhA::EFGCfkuZQ2CrKmPDEP1O8Q` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Projects | GET | `/api/0/teams/{{organizationIdOrSlug}}/{{teamIdOrSlug}}/projects/` | `conn_mod_def::GKrGLeCSgoA::xcHHGhFfRtCXUyeAMyvXyA` |
| List an Organization's Projects | GET | `/api/0/organizations/{{organizationIdOrSlug}}/projects/` | `conn_mod_def::GKrGG9HVQqg::Lpi34hKXRNOkB8W8wsgM9w` |
| Retrieve a Project in an Organization | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/` | `conn_mod_def::GKrGI1TDP9g::OjcaH3clSH-VFvyevL0pew` |
| Add a Team to a Project | POST | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/teams/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGH6EKH3g::yITgqfS1Sz64qa6yAC6uug` |
| Create a New Project for a Team in an Organization | POST | `/api/0/teams/{{organizationIdOrSlug}}/{{teamIdOrSlug}}/projects/` | `conn_mod_def::GKrGIFegenA::GqWjCZ_wTpqHPNo5RLl7AA` |
| Delete a Project in an Organization | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/` | `conn_mod_def::GKrGIFA_k9g::3__Oa4atRzCJGo71QfLIQA` |
| Delete a Team from a Project | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/teams/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGIT7Bg-A::aB1dkdYEQey9CNJ2FvtW8Q` |
| Update a Project in an Organization | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/` | `conn_mod_def::GKrGI_OQOAA::ES22HAwKQnOh1Tt7rNiaPQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Paginated Teams | GET | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Groups` | `conn_mod_def::GKrGKmuHY3g::ogC_bV5TQH2EdbVBow-3kw` |
| List an Organization's Teams | GET | `/api/0/organizations/{{organizationIdOrSlug}}/teams/` | `conn_mod_def::GKrGLey5B3g::-Hi75wsDQDesgBPC61uRFQ` |
| Retrieve a Team in an Organization | GET | `/api/0/teams/{{organizationIdOrSlug}}/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGLdyxFhg::B2lBfYyoQvqMUVUi_YWHGg` |
| Create a New Team in an Organization | POST | `/api/0/organizations/{{organizationIdOrSlug}}/teams/` | `conn_mod_def::GKrGLUc44WA::47jK7bdyRqSJcj70joxJCQ` |
| Delete a Team in an Organization | DELETE | `/api/0/teams/{{organizationIdOrSlug}}/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGLSqa5EA::8HwXrKmSRaCna4YfioS9tg` |
| Update a Team in an Organization | PUT | `/api/0/teams/{{organizationIdOrSlug}}/{{teamIdOrSlug}}/` | `conn_mod_def::GKrGLu0Pjqg::lVImCN6FRqGAcu6XoXDf6A` |
| Update a Team's Attributes in an Organization | PATCH | `/api/0/organizations/{{organizationIdOrSlug}}/scim/v2/Groups/{{teamIdOrSlug}}` | `conn_mod_def::GKrGLDb-VCA::eJ3s1kb7SVCxfIcZI4HM9w` |

### ProjectServiceHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Service Hooks | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/hooks/` | `conn_mod_def::GKrGIdCE2nA::AgSt3EiDSrqzCVwR4i6B9A` |
| Retrieve a Project Service Hook | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/hooks/{{hookId}}/` | `conn_mod_def::GKrGI0vGwhA::lsvL_VFCSwmzMmLalrHsug` |
| Register a New Project Service Hook | POST | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/hooks/` | `conn_mod_def::GKrGIskxrlA::5_ToB4ILRZmYTJwaoBejhA` |
| Remove a Project Service Hook | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/hooks/{{hookId}}/` | `conn_mod_def::GKrGIs6yvRA::y0c06BV_T2WwvktBH9FDrQ` |
| Update a Project Service Hook | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/hooks/{{hookId}}/` | `conn_mod_def::GKrGI_NxWag::mKLR_QbySSuEWjAQ2KVxuw` |

### Releases

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Releases | GET | `/api/0/organizations/{{organizationIdOrSlug}}/releases/` | `conn_mod_def::GKrGJeekd5g::oZI7aZ73QWiuSKukaIMNmw` |
| Retrieve an Organization's Release | GET | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/` | `conn_mod_def::GKrGJyyTnlA::tLzT8ZDLSIiTtWG8ADUjNg` |
| Create a New Release for an Organization | POST | `/api/0/organizations/{{organizationIdOrSlug}}/releases/` | `conn_mod_def::GKrGJJZBa1A::vX7DgRxOQbawU8R_a8tA9Q` |
| Delete an Organization's Release | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/` | `conn_mod_def::GKrGJSooYUg::0EIa8NBoTLSCAJBJillpyw` |
| Update an Organization's Release | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/` | `conn_mod_def::GKrGJ8ddpAg::48RPP6kpRE-55ripR0qZwA` |

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Custom Dashboards | GET | `/api/0/organizations/{{organizationIdOrSlug}}/dashboards/` | `conn_mod_def::GKrGDxf5V-A::aL12CTULSm64OEMLGIXX8Q` |
| Retrieve an Organization's Custom Dashboard | GET | `/api/0/organizations/{{organizationIdOrSlug}}/dashboards/{{dashboardId}}/` | `conn_mod_def::GKrGD3-sT1A::53HBLTnwR1qnpqlHSpo-sg` |
| Create a New Dashboard for an Organization | POST | `/api/0/organizations/{{organizationIdOrSlug}}/dashboards/` | `conn_mod_def::GKrGDx1KNrA::3zvL05diRbO5EcABiwkLvg` |
| Edit an Organization's Custom Dashboard | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/dashboards/{{dashboardId}}/` | `conn_mod_def::GKrGDxiaz9A::_2lFgROqS7W0kYciyxaJ9w` |

### DataForwarders

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Data Forwarders for an Organization | GET | `/api/0/organizations/{{organizationIdOrSlug}}/forwarding/` | `conn_mod_def::GKrGF8qLayA::7gnhrkmnRRuv4sMgaNS2pQ` |
| Create a Data Forwarder for an Organization | POST | `/api/0/organizations/{{organizationIdOrSlug}}/forwarding/` | `conn_mod_def::GKrGFkP6vQA::51Awf34VTOqYzoA1Ahuzbg` |
| Delete a Data Forwarder for an Organization | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/forwarding/{{dataForwarderId}}/` | `conn_mod_def::GKrGFjPOJNA::CC7Kb41gTneYPg8v_kEy2w` |
| Update a Data Forwarder for an Organization | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/forwarding/{{dataForwarderId}}/` | `conn_mod_def::GKrGF8pp_Ig::5scyVzcMSmigosckVH52xA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Your Organizations | GET | `/api/0/organizations/` | `conn_mod_def::GKrGLseGr5A::U7CJ-x1sSUaMmN11w_s6UA` |
| Resolve a Short ID for an Organization | GET | `/api/0/organizations/{{organizationIdOrSlug}}/shortids/{{issueId}}/` | `conn_mod_def::GKrGHGE1SSA::M3dbtR4pT-KqRe5NtB5rXg` |
| Retrieve an Organization | GET | `/api/0/organizations/{{organizationIdOrSlug}}/` | `conn_mod_def::GKrGHGbMQUA::rNGJDH6mQdO44n5h44I8ww` |
| Update an Organization | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/` | `conn_mod_def::GKrGHXE5NgA::JvtpWdADSpOn1JS8BrXZGw` |

### ProjectClientKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Client Keys | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/keys/` | `conn_mod_def::GKrGIjykrZg::eR6akSCaTQ2ZR5_rf28Dqw` |
| Retrieve a Project Client Key | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/keys/{{keyId}}/` | `conn_mod_def::GKrGI1lzDEg::Z-_zhZlbRX-NwKzKJ0tPcg` |
| Delete a Project Client Key | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/keys/{{keyId}}/` | `conn_mod_def::GKrGIEdJSAA::xr9whBEcTT-x3SiAmqSGAQ` |
| Update a Project Client Key | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/keys/{{keyId}}/` | `conn_mod_def::GKrGI_krx-g::Swmzb7cLSg-5xGW3RKOCMQ` |

### OrganizationMonitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization Monitor | GET | `/api/0/organizations/{{organizationIdOrSlug}}/monitors/{{monitorIdOrSlug}}/` | `conn_mod_def::GKrGDTIbkYA::Lw4qQbwJRdq9szIxjCMOqg` |
| Create an Organization Monitor | POST | `/api/0/organizations/{{organizationIdOrSlug}}/monitors/` | `conn_mod_def::GKrGDYh5IGA::xHmmYclERjCUempfIQDwjQ` |
| Update an Organization Monitor | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/monitors/{{monitorIdOrSlug}}/` | `conn_mod_def::GKrGDhpcZrg::0LQm9Z__SrOJOucsDHb2aA` |

### SentryApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Custom Integration by ID or Slug | GET | `/api/0/sentry-apps/{{sentryAppIdOrSlug}}/` | `conn_mod_def::GKrGFUXVI3g::KI6Gb2YDSXGIyBTjaBluzg` |
| Retrieve an Organization's Custom Integrations | GET | `/api/0/organizations/{{organizationIdOrSlug}}/sentry-apps/` | `conn_mod_def::GKrGFUZ6weg::6_xOAGLRTvSZ_oAS1B1LZw` |
| Update an Existing Custom Integration | PUT | `/api/0/sentry-apps/{{sentryAppIdOrSlug}}/` | `conn_mod_def::GKrGFpHS_dA::SobT4gSATvOCt4u5pq9A1Q` |

### PreprodArtifacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Latest Installable Build for a Project | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/preprodartifacts/build-distribution/latest/` | `conn_mod_def::GKrGGHpk74A::ge9WDZGGTHSc687NBM6q0Q` |
| Retrieve Install Info for an Organization's Preprod Artifact | GET | `/api/0/organizations/{{organizationIdOrSlug}}/preprodartifacts/{{artifactId}}/install-details/` | `conn_mod_def::GKrGGG1jc9g::3FrJDntmSXCIDvxi1_8C0w` |
| Retrieve Size Analysis Results for an Organization Artifact | GET | `/api/0/organizations/{{organizationIdOrSlug}}/preprodartifacts/{{artifactId}}/size-analysis/` | `conn_mod_def::GKrGGHlzewA::01sqYB6jSoqkM7oMn-JW8Q` |

### OrganizationAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch an Organization Alert | GET | `/api/0/organizations/{{organizationIdOrSlug}}/workflows/{{workflowId}}/` | `conn_mod_def::GKrGGiLfxnA::H4uhac8KSmyl45yL4UT-IA` |
| Delete an Organization Alert | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/workflows/{{workflowId}}/` | `conn_mod_def::GKrGGQ5d6sA::jO9Qp7q3S2e864oxf95bOA` |
| Update an Organization Alert by ID | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/workflows/{{workflowId}}/` | `conn_mod_def::GKrGGtLVkRg::QFQbUBZYQLqYbSB5nrWNhg` |

### Repositories

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization Owner's Repositories | GET | `/api/0/organizations/{{organizationIdOrSlug}}/prevent/owner/{{owner}}/repositories/` | `conn_mod_def::GKrGH8cxdPg::i20OwxAAQGiIX_H2LbJz_Q` |
| List an Organization's Repositories | GET | `/api/0/organizations/{{organizationIdOrSlug}}/repos/` | `conn_mod_def::GKrGG7X7rsg::hwuEozFaSTKQMbs4og4dLQ` |
| Sync an Organization Owner's Repositories with GitHub | POST | `/api/0/organizations/{{organizationIdOrSlug}}/prevent/owner/{{owner}}/repositories/sync/` | `conn_mod_def::GKrGH3fn-Lg::0CjqlLK_RvmHNcBdqJuogQ` |

### ProjectSymbolSources

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project's Symbol Sources | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/symbol-sources/` | `conn_mod_def::GKrGI160qNg::MGm3dnH0RDWvap4YM-gheQ` |
| Delete a Project Symbol Source | DELETE | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/symbol-sources/` | `conn_mod_def::GKrGIQz0alg::iafGT6O5SXiEdnXcoryQ0Q` |
| Update a Project's Symbol Source | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/symbol-sources/` | `conn_mod_def::GKrGI_11f4g::8X_Zg5hLT3-8Ea2Chk4HEw` |

### OrganizationReleaseFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Organization Release's File | DELETE | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/files/{{fileId}}/` | `conn_mod_def::GKrGJTDSdxg::WNZ5Ikn6Tsm7QHXsgv7cMw` |
| Update an Organization Release File | PUT | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/files/{{fileId}}/` | `conn_mod_def::GKrGJ-SzBmA::JHAA3xvqStyzIF6MVReYdg` |
| Upload a New Organization Release File | POST | `/api/0/organizations/{{organizationIdOrSlug}}/releases/{{version}}/files/` | `conn_mod_def::GKrGJ7qbJWA::COJWjYeiRxS9KPdNLdn50Q` |

### ProjectReleaseFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Release Files | GET | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/releases/{{version}}/files/` | `conn_mod_def::GKrGJTVre4A::Fbb0DI2iQR6-VcEmaCLbQg` |
| Update a Project Release File | PUT | `/api/0/projects/{{organizationIdOrSlug}}/{{projectIdOrSlug}}/releases/{{version}}/files/{{fileId}}/` | `conn_mod_def::GKrGJ7s-z9A::yZr4kYXYRpeKz4_KhQ3pQQ` |

1 more ProjectReleaseFiles actions are available through search.

This lists 90 of 209 actions. For anything not here, call `search_one_platform_actions` with platform `sentry`. The full catalog is at https://www.withone.ai/knowledge/sentry.

## When a call fails

The error comes from Sentry, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/sentry

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
