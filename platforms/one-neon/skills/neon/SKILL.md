---
name: neon
description: Neon is a cloud-native, serverless PostgreSQL platform that provides instant database provisioning, automatic autoscaling, branching for isolated environments, and API-driven management to help developers build and scale applications without managing infrastructure. Read and write Neon data through One: projects, oauthproviders, projectbranch, apikeys, vpcendpoints, authdomains and more, 138 actions with real parameter documentation. Use whenever the user asks to look something up in Neon, create or update a record there, or build code against the Neon API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: neon
  generated-from: one-knowledge-base
---

# Neon through One

Neon is a cloud-native, serverless PostgreSQL platform that provides instant database provisioning, automatic autoscaling, branching for isolated environments, and API-driven management to help developers build and scale applications without managing infrastructure.

One exposes Neon through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `neon` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Neon is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Neon account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/api/v2/projects` | `conn_mod_def::GJgbAXfALrg::x7Ua2wAAQE-6gleoIqNtUg` |
| Retrieve a Project’s Details | GET | `/api/v2/projects/{{PROJECT_ID}}` | `conn_mod_def::GJgbAs_FUfA::sygaQKy4QeyxgmY25B5xyw` |
| Create a Project | POST | `/projects` | `conn_mod_def::GJgbAd-tHgA::n7iEx6sqQNCr6xnYzbsLQw` |
| Recover a Deleted Project | POST | `/api/v2/projects/{{PROJECT_ID}}/recover` | `conn_mod_def::GJgbBO-xFEg::JaQI71nAQ7WoC42POZAVPw` |
| Restore a Deleted Project | POST | `/api/v2/projects/{{PROJECT_ID}}/restore` | `conn_mod_def::GJgbBGsbeYA::eeaFvO5PQUKTESyorNQtZg` |
| Transfer Projects from Personal Account to an Organization | POST | `/users/me/projects/transfer` | `conn_mod_def::GJgbEFswHkg::3NA5p9exTrajBaQ_m2qW7Q` |
| Update a Project | PATCH | `/api/v2/projects/{{PROJECT_ID}}` | `conn_mod_def::GJgbA3njCIA::moNRb0LrTjGGne7xZg8LQg` |

### OauthProviders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s OAuth Providers (Deprecated) | GET | `/api/v2/projects/{{PROJECT_ID}}/auth/oauth_providers` | `conn_mod_def::GJga24pS4tA::bb54aRtsRPakpQuT80tdDA` |
| List OAuth Providers for a Branch’s Neon Auth | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/oauth_providers` | `conn_mod_def::GJgaz2De4TA::kc3xuqXNTtqNCdO3r_dAfQ` |
| Add an OAuth Provider to a Project | POST | `/api/v2/projects/{{PROJECT_ID}}/auth/oauth_providers` | `conn_mod_def::GJga3E6hODA::x2VYu9eMTb-DFbCa_cHcbQ` |
| Add an OAuth Provider to a Project Branch | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/oauth_providers` | `conn_mod_def::GJgaz-XeOkg::FYFkUUXBQGqWqKFi6mXWLQ` |
| Delete a Project OAuth Provider (Deprecated) | DELETE | `/api/v2/projects/{{PROJECT_ID}}/auth/oauth_providers/{{OAUTH_PROVIDER_ID}}` | `conn_mod_def::GJga3WlGlJA::SgmUCiS4R7iedZ1x6zaUhg` |
| Update a Project OAuth Provider (Deprecated) | PATCH | `/api/v2/projects/{{PROJECT_ID}}/auth/oauth_providers/{{OAUTH_PROVIDER_ID}}` | `conn_mod_def::GJga3ONBg3g::KTe87nL_Rs2xPyCU9w2hlw` |

### ProjectBranch

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project Branch’s Details | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}` | `conn_mod_def::GJga4iDy7sg::FjmjKPadTeW_p9RiREhrig` |
| Create a Project Branch | POST | `/api/v2/projects/{{PROJECT_ID}}/branches` | `conn_mod_def::GJga4HDUdzg::bSdbCfMmTjSCANNn5hhV3A` |
| Delete a Project Branch | DELETE | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}` | `conn_mod_def::GJga41e7CYA::wa5G2B1JQJW1xSfxM_ioGg` |
| Restore a Project Branch | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/restore` | `conn_mod_def::GJga5AydS9g::n6kRMMYDRwu78B0uWpI52g` |
| Update a Project Branch | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}` | `conn_mod_def::GJga4uIPr2A::FJcN38jnTMWaI3eOtCkR7g` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's API Keys | GET | `/api/v2/organizations/{{ORG_ID}}/api_keys` | `conn_mod_def::GJga-QucbTA::H46j-cW8QuSFjpBHhaecSQ` |
| List API Keys | GET | `/api_keys` | `conn_mod_def::GJgayW6348A::FZwiJEB-QwKe94qhKUGZzA` |
| Create API Key | POST | `/api/v2/api_keys` | `conn_mod_def::GJgayeEY0bg::Px3Lh8wdROCUn89x-KkqtA` |
| Revoke an API Key | DELETE | `/api/v2/api_keys/{{KEY_ID}}` | `conn_mod_def::GJgaylIJgig::RQbOLERwS9Wnx8ePXHwCAA` |

### VpcEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s VPC Endpoints (by Region) | GET | `/api/v2/organizations/{{ORG_ID}}/vpc/region/{{REGION_ID}}/vpc_endpoints` | `conn_mod_def::GJga_vlOdLA::QkAQ0871Tky2yg7yK6c9tQ` |
| List an Organization’s VPC Endpoints Across All Regions | GET | `/organizations/{{ORG_ID}}/vpc/vpc_endpoints` | `conn_mod_def::GJga_lz8X8g::JOpw2q9QShaCz0fRIashrw` |
| Retrieve a VPC Endpoint’s Details (for an Organization and Region) | GET | `/api/v2/organizations/{{ORG_ID}}/vpc/region/{{REGION_ID}}/vpc_endpoints/{{VPC_ENDPOINT_ID}}` | `conn_mod_def::GJga_3-fQIA::hcLFZzrVSuioR6yDJj4Z3A` |

### AuthDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Branch’s Auth Redirect URI Whitelist Domains (Project) | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/domains` | `conn_mod_def::GJgazFUXe1g::ehw8a5kdRVipIh-HP0KBtw` |
| List a Project’s Auth Redirect URI Whitelist Domains (Deprecated) | GET | `/projects/{{PROJECT_ID}}/auth/domains` | `conn_mod_def::GJga12CFB8A::ers_8vSvRIKx2eEbaCNwZA` |
| Delete a Domain from a Branch Redirect URI Whitelist (Auth Domains) | DELETE | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/domains` | `conn_mod_def::GJgazUpDkNA::yVYtWmYRTuGqiLFefx9Ing` |

### Branches

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Branches | GET | `/api/v2/projects/{{PROJECT_ID}}/branches` | `conn_mod_def::GJga3-8V5Yg::4m5OezpeQoivz2xSXAhVkg` |
| Retrieve Branch Count for a Project | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/count` | `conn_mod_def::GJga4beorbg::hEBG3OgMRfSG3nrUsGYXqQ` |
| Set a Project Branch as Default | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/set_as_default` | `conn_mod_def::GJga58OBqAA::OZJJlFgVSJO8GaAHg6uiAQ` |

### BranchRole

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Branch Role’s Details (Project, Branch, Role) | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/roles/{{ROLE_NAME}}` | `conn_mod_def::GJga7kXs3eA::vC6syZGuQQabKaXqzF3p9Q` |
| Create a Branch Role (Postgres Role) | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/roles` | `conn_mod_def::GJga7ZN0UFg::SrqkBvqqS_eQjsPFFSU2Ow` |
| Delete a Branch Role (Postgres Role) | DELETE | `/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/roles/{{ROLE_NAME}}` | `conn_mod_def::GJga7q0CRWA::ggRe5xcHQlCcvCsQsxYiQw` |

### ProjectComputeEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Project Compute Endpoint’s Details | GET | `/api/v2/projects/{{PROJECT_ID}}/endpoints/{{ENDPOINT_ID}}` | `conn_mod_def::GJga9OIgzOg::KGf35kKwTt2kG2HnRTTxOw` |
| Create a Project Compute Endpoint | POST | `/api/v2/projects/{{PROJECT_ID}}/endpoints` | `conn_mod_def::GJga9CHAQAA::1M2T7holSjGNfMg4RQCbkg` |
| Restart a Project Compute Endpoint | POST | `/api/v2/projects/{{PROJECT_ID}}/endpoints/{{ENDPOINT_ID}}/restart` | `conn_mod_def::GJga90bP7DA::8ENVH8t4TPaiV4xufgz9sA` |

### ComputeEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project’s Compute Endpoint | DELETE | `/api/v2/projects/{{PROJECT_ID}}/endpoints/{{ENDPOINT_ID}}` | `conn_mod_def::GJga9fdo1vg::iwAczfdvSQqU9XZniu2MnQ` |
| Suspend a Project’s Compute Endpoint | POST | `/api/v2/projects/{{PROJECT_ID}}/endpoints/{{ENDPOINT_ID}}/suspend` | `conn_mod_def::GJga9tckcag::xcHWTNo7TXemVRDVhoKlBw` |
| Update a Project's Compute Endpoint | PATCH | `/api/v2/projects/{{PROJECT_ID}}/endpoints/{{ENDPOINT_ID}}` | `conn_mod_def::GJga9WWtxZg::hcu9jbZQRBSwh51gKtumcA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Current User Organizations | GET | `/users/me/organizations` | `conn_mod_def::GJgbD_ZnqFA::R1fR50h6R6CIQd7F_RKmpQ` |
| Retrieve an Organization’s Details | GET | `/api/v2/organizations/{{ORG_ID}}` | `conn_mod_def::GJga-KIZ_VA::jMUpeGi2Q5e8oHkjd2D1jQ` |

### NeonAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable Neon Auth for a Branch | DELETE | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth` | `conn_mod_def::GJgay9qJZbg::ClySi29ETHaYgED_cu9PzA` |
| Enable Neon Auth for a Project Branch | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth` | `conn_mod_def::GJgay22Hycg::W1IIInwJR12J-yVyMm-XRw` |

### OauthProvider

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Branch OAuth Provider from a Project | DELETE | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/oauth_providers/{{OAUTH_PROVIDER_ID}}` | `conn_mod_def::GJga0NEbqcg::44TGflYCRKeIWaFi_j9Fbw` |
| Update a Branch OAuth Provider for a Project | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/oauth_providers/{{OAUTH_PROVIDER_ID}}` | `conn_mod_def::GJga0FCpN4g::fx7oNi22S2OZLcxD6KQS7A` |

### EmailProviderConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Email Provider Configuration | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/email_provider` | `conn_mod_def::GJga0sANBBg::CRynYaAzT9uRxvat_geVsA` |
| Update a Branch’s Email Provider Configuration | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/email_provider` | `conn_mod_def::GJga00TsQnA::KVjbtW15SV-ZBIaAVu6-LQ` |

### NeonAuthWebhookConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Neon Auth Webhook Configuration | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/webhooks` | `conn_mod_def::GJga1chuW5A::EwnO68RBRaWEg94sV62ujQ` |
| Update Neon Auth Webhook Configuration for a Branch | PUT | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/webhooks` | `conn_mod_def::GJga1nWmJ0g::_WsLi7BZQoC9lIQP6w_VgQ` |

### ProjectAuthDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Domain to a Project’s Redirect URI Whitelist (Deprecated) | POST | `/api/v2/projects/{{PROJECT_ID}}/auth/domains` | `conn_mod_def::GJga1-fhjqA::7me4H1DRTX-SzPXgqAti4Q` |
| Delete a Project Auth Domain from Redirect URI Whitelist (Deprecated) | DELETE | `/api/v2/projects/{{PROJECT_ID}}/auth/domains` | `conn_mod_def::GJga2G-U97A::KSSDwGu-QUGBiP8KfHcVpg` |

### MaskingRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Masking Rules | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/masking_rules` | `conn_mod_def::GJga5a9CDmg::AJiFMhkXT9y2KFD2Kdq-PQ` |
| Update a Branch’s Masking Rules | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/masking_rules` | `conn_mod_def::GJga5k-KwYA::Gk_tCYXdTwaXwAcV9t63_g` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Branch’s Databases | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/databases` | `conn_mod_def::GJga6Xxab_A::3TpgPUW4TnCmtJSNsheInQ` |
| Create a Database in a Project Branch | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/databases` | `conn_mod_def::GJga6hn8vxA::zRCZlx58SbOCn9-druCrjg` |

### Database

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Database’s Details (Project → Branch → Database) | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/databases/{{DATABASE_NAME}}` | `conn_mod_def::GJga6qyf0vg::vs5nVTVaTTSsytbvBD5ddQ` |
| Update a Branch Database in a Project | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/databases/{{DATABASE_NAME}}` | `conn_mod_def::GJga63W5XGg::T07KCZo3QpOiprRPAAecKw` |

### BranchRolePassword

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Branch Role Password (Reveal Password) | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/roles/{{ROLE_NAME}}/reveal_password` | `conn_mod_def::GJga7zJN6bg::rHJPauMGRWmaUUzvFyeQOQ` |
| Reset a Branch Role’s Password | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/roles/{{ROLE_NAME}}/reset_password` | `conn_mod_def::GJga76iMUGA::BrTgBiGBTCy-PkGJ6n2keA` |

### ProjectConsumptionMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Project Consumption Metrics | GET | `/api/v2/consumption_history/v2/projects` | `conn_mod_def::GJga8VZsA1A::PRvxq3P1TZacjU_dBdwD6Q` |
| Retrieve Project Consumption Metrics (Legacy Plans) | GET | `/api/v2/consumption_history/projects` | `conn_mod_def::GJga8Ngo0Qg::gQVsMtcnQzyrobzzF0PGlQ` |

### NeonDataApi

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Neon Data API | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/data-api/{{DATABASE_NAME}}` | `conn_mod_def::GJga8b8XyhA::N0isBcchQRSTJ3tPVQ4Ceg` |
| Create a Branch Database’s Neon Data API | POST | `/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/data-api/{{DATABASE_NAME}}` | `conn_mod_def::GJga8ipvY2g::9rwaEjydRMam-S4VSf9QJg` |

### OrganizationApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization API Key | POST | `/api/v2/organizations/{{ORG_ID}}/api_keys` | `conn_mod_def::GJga-YBWVrg::2t47t0vOT3-jbUHbQu0XdQ` |
| Revoke an Organization API Key | DELETE | `/api/v2/organizations/{{ORG_ID}}/api_keys/{{KEY_ID}}` | `conn_mod_def::GJga-ezraYA::vXwNRyLlRm6nzjV1wKBOmA` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization’s Members Details | GET | `/api/v2/organizations/{{ORG_ID}}/members` | `conn_mod_def::GJga-sT09EA::Y5mKWelcRamEYVXCg8jQfw` |
| Remove an Organization Member | DELETE | `/organizations/{{ORG_ID}}/members/{{MEMBER_ID}}` | `conn_mod_def::GJga_GOLhXg::aYL8OA7hQf-d7V2hWyBFdg` |

### OrganizationMember

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Organization Member’s Details | GET | `/api/v2/organizations/{{ORG_ID}}/members/{{MEMBER_ID}}` | `conn_mod_def::GJga-0Xd8ig::fDZ3khMqTEWK9I2UyoYwzw` |
| Update an Organization Member’s Role | PATCH | `/api/v2/organizations/{{ORG_ID}}/members/{{MEMBER_ID}}` | `conn_mod_def::GJga-96xxWA::Ojsft7ugR3aCYYF3qRf_Qw` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Invitations | GET | `/api/v2/organizations/{{ORG_ID}}/invitations` | `conn_mod_def::GJga_MS0KAA::-6H1xO71TkmA-TQMTWWQ-A` |
| Create Organization Invitations | POST | `/api/v2/organizations/{{ORG_ID}}/invitations` | `conn_mod_def::GJga_UJTWeg::PZaVHvgeT_yixF8ZjY45Cg` |

### ProjectPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Access Permissions | GET | `/api/v2/projects/{{PROJECT_ID}}/permissions` | `conn_mod_def::GJgbBV4F5Cg::goKdKpw5QNW3qnPZH9Kafg` |
| Grant a Project Access Permission | POST | `/api/v2/projects/{{PROJECT_ID}}/permissions` | `conn_mod_def::GJgbBeEFy5A::I2pPic4aRYW0fzkv5pd5oA` |

### ProjectTransferRequest

| Action | Method | Path | Action id |
|---|---|---|---|
| Accept a Project Transfer Request | PUT | `/api/v2/projects/{{PROJECT_ID}}/transfer_requests/{{REQUEST_ID}}` | `conn_mod_def::GJgbB5JtdJA::WReHR1uiRGGaCj6ZRzmgog` |
| Create a Project Transfer Request | POST | `/api/v2/projects/{{PROJECT_ID}}/transfer_requests` | `conn_mod_def::GJgbBy4KNMA::dFdmK_kIRBSjUC91bj0sKQ` |

### Jwks

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a JWKS URL to a Project | POST | `/api/v2/projects/{{PROJECT_ID}}/jwks` | `conn_mod_def::GJgbCGneA0A::fWIhAt0dSdWuIeLWyhTRzw` |
| Delete a Project JWKS URL | DELETE | `/api/v2/projects/{{PROJECT_ID}}/jwks/{{JWKS_ID}}` | `conn_mod_def::GJgbCQW_Jhg::JWBczBi0RRiAUt5336lNww` |

### VpcEndpointRestriction

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project's VPC Endpoint Restriction | DELETE | `/api/v2/projects/{{PROJECT_ID}}/vpc_endpoints/{{VPC_ENDPOINT_ID}}` | `conn_mod_def::GJgbCw6EWTg::wdJrHhXTSQmlT9Sy_yfZfw` |
| Set a Project’s VPC Endpoint Restriction | POST | `/api/v2/projects/{{PROJECT_ID}}/vpc_endpoints/{{VPC_ENDPOINT_ID}}` | `conn_mod_def::GJgbCoeq9Kg::KnuYsEgyQo-VXoqW6lYmRg` |

### VpcEndpointAssignment

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign or Update a VPC Endpoint for an Organization in a Region | POST | `/api/v2/organizations/{{ORG_ID}}/vpc/region/{{REGION_ID}}/vpc_endpoints/{{VPC_ENDPOINT_ID}}` | `conn_mod_def::GJga__ddkGg::v0rLGPBxQZKMts8_wF-Mfw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Current User Details | GET | `/api/v2/users/me` | `conn_mod_def::GJgbD4Pj3JA::gPOUp29rQeWHPhidNvDkNA` |

### BranchNeonAuthDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Neon Auth Details | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth` | `conn_mod_def::GJgayvZRQ5g::Xkpv-7x1Ry2CMeoGVt8gVg` |

### AuthDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Add an Auth Domain to a Branch’s redirect_uri Whitelist (Project) | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/domains` | `conn_mod_def::GJgazM75DOg::T-kntDGWRmiDdeuvRXUUsA` |

### BranchAuthUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Branch Auth User (Neon Auth) | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/users` | `conn_mod_def::GJgazbNmQPg::F0OEtBqrRWSLf9qkeQn10Q` |

### AuthUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Auth User for a Project Branch | DELETE | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/users/{{AUTH_USER_ID}}` | `conn_mod_def::GJgazjyhfqA::uyyud4K7TeCfRVrAtrpuqQ` |

### AuthUserRole

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Auth User’s Role for a Project Branch | PUT | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/users/{{AUTH_USER_ID}}/role` | `conn_mod_def::GJgazv0g-YA::QIJfR2eQQsK4mUFB3-7e1Q` |

### BranchAuthTestEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Branch Auth Test Email for a Project | POST | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/send_test_email` | `conn_mod_def::GJga0YCvoXg::ESpWoyh_RkOvea6SBhhBTQ` |

### BranchEmailAndPasswordAuthConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch’s Email and Password Auth Configuration (Neon Auth) | GET | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/email_and_password` | `conn_mod_def::GJga0eZVCfA::KTgqZa_nSlKqawac4Cp4xg` |

### BranchAuthEmailAndPassword

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Branch’s Email and Password Auth Configuration | PATCH | `/api/v2/projects/{{PROJECT_ID}}/branches/{{BRANCH_ID}}/auth/email_and_password` | `conn_mod_def::GJga0kzBIbA::8eglPgr-QtGyXll1Spzu3g` |

This lists 90 of 138 actions. For anything not here, call `search_one_platform_actions` with platform `neon`. The full catalog is at https://www.withone.ai/knowledge/neon.

## When a call fails

The error comes from Neon, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/neon

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
