---
name: auth0-management
description: Auth0 delivers a flexible, drop-in authentication and authorization platform that lets developers secure applications and APIs with features like social login, single sign-on, passwordless and multifactor authentication, breached password detection, and IoT device flows—all without building identity systems from scratch. Read and write Auth0 Management data through One: connections, users, roles, organizations, actions, eventstreams and more, 390 actions with real parameter documentation. Use whenever the user asks to look something up in Auth0 Management, create or update a record there, or build code against the Auth0 Management API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: auth0-management
  generated-from: one-knowledge-base
---

# Auth0 Management through One

Auth0 delivers a flexible, drop-in authentication and authorization platform that lets developers secure applications and APIs with features like social login, single sign-on, passwordless and multifactor authentication, breached password detection, and IoT device flows—all without building identity systems from scratch.

One exposes Auth0 Management through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `auth0-management` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Auth0 Management is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Auth0 Management account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Connection's Status | GET | `/api/v2/connections/{{id}}/status` | `conn_mod_def::GJ0DLzmo4mY::rx6s-gULSZiYwGWFzxmUtw` |
| Get a Connection | GET | `/api/v2/connections/{{id}}` | `conn_mod_def::GJ0DNFNHykI::CXRfFpjYTFOndybU0aH5TQ` |
| Get a Connection’s Default Directory Provisioning Attribute Mapping | GET | `/connections/{{id}}/directory-provisioning/default-mapping` | `conn_mod_def::GJ0DNNC4_R8::ZgiukQCFQ8q_4yTpDd2VRQ` |
| Get a Connection’s Default SCIM Mapping | GET | `/api/v2/connections/{{id}}/scim-configuration/default-mapping` | `conn_mod_def::GJ0DNV3CtYk::YtuUS-eHRQ6ITRHdkAsHXg` |
| Get a Connection’s Directory Provisioning Configuration | GET | `/api/v2/connections/{{id}}/directory-provisioning` | `conn_mod_def::GJ0DNvsjeqI::-7ViB71XQkO6Wlm6xqYmgA` |
| Get a Connection’s SCIM Configuration | GET | `/api/v2/connections/{{id}}/scim-configuration` | `conn_mod_def::GJ0DNe-scE4::QW8l6d2vQn2B-7Z5vxHPwA` |
| List a Connection’s SCIM Tokens | GET | `/api/v2/connections/{{id}}/scim-configuration/tokens` | `conn_mod_def::GJ0DNnZ5N-I::HAqRi8pQQDyEj0vGPnREUQ` |
| List Connections | GET | `/api/v2/connections` | `conn_mod_def::GJ0DN7_AtAM::6Z67meB-Q2uwwW1_isMAiQ` |
| List Enabled Clients for a Connection | GET | `/api/v2/connections/{{id}}/clients` | `conn_mod_def::GJ0DOKpkYbo::By55zgBXS1OwlM9ImtbMpA` |
| Create a Connection | POST | `/api/v2/connections` | `conn_mod_def::GJ0DL7NZ3cg::gSuPkoLgRtiO7IACIy6yTw` |
| Create a Connection’s Directory Provisioning Configuration | POST | `/api/v2/connections/{{id}}/directory-provisioning` | `conn_mod_def::GJ0DMFKoNJo::7TN7cWXOSHmfAEfW29vPGQ` |
| Create a Connection’s SCIM Configuration | POST | `/api/v2/connections/{{id}}/scim-configuration` | `conn_mod_def::GJ0DMMs09qI::vfiVwbRhTaqcQwOZfsJMkw` |

10 more Connections actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User | GET | `/api/v2/users/{{id}}` | `conn_mod_def::GJ0DvKsWOcg::kSu3ZJyeR7GHb2gXIf1Ouw` |
| List or Search Users | GET | `/api/v2/users` | `conn_mod_def::GJ0DxFkcbwY::UNlvO6mwSQSpL93TnivH9g` |
| Search Users by Email | GET | `/api/v2/users-by-email` | `conn_mod_def::GJ0DyXYIgZk::h1pjcizNQ1KldESYMkV5tg` |
| Assign Permissions to a User | POST | `/api/v2/users/{{id}}/permissions` | `conn_mod_def::GJ0DtIdiuMk::QcgR-8LbSg-EOHlw_k0mkg` |
| Assign Roles to a User | POST | `/api/v2/users/{{id}}/roles` | `conn_mod_def::GJ0DtQZoxSY::udJgn46OQhyMJClBmZ0WrQ` |
| Clear a User’s Risk Assessment Assessors | POST | `/api/v2/users/{{id}}/risk-assessments/clear` | `conn_mod_def::GJ0Dtd5yqHA::OtASsD_ZSfmHwNTHrxwMUA` |
| Create a User (Auth0) | POST | `/api/v2/users` | `conn_mod_def::GJ0DtlM407s::N6J8rMVRQAOhJsArzN9atQ` |
| Delete a User | DELETE | `/api/v2/users/{{id}}` | `conn_mod_def::GJ0Dt1sZa3c::8Y6hHMuNTymGhHwc0tr48g` |
| Delete a User’s Authentication Methods | DELETE | `/api/v2/users/{{id}}/authentication-methods` | `conn_mod_def::GJ0DuFZDwhQ::VOARpOhrQfW3MOw7tEY-PA` |
| Delete a User’s Refresh Tokens | DELETE | `/api/v2/users/{{userId}}/refresh-tokens` | `conn_mod_def::GJ0DudksteU::2DIAPg3_QW-1WzmK-SwAwQ` |
| Invalidate All Remembered Browsers for a User's Multi-factor Authentication | POST | `/api/v2/users/{{id}}/multifactor/actions/invalidate-remember-browser` | `conn_mod_def::GJ0Dw1WaaLo::Vk-tznwGRkKBwRMCwA-6CA` |
| Link a User Account (Link Secondary Identity to a Primary User) | POST | `/api/v2/users/{{id}}/identities` | `conn_mod_def::GJ0Dw86mfF0::tEZuKqWSQcuulFBr2E_aDg` |

7 more Users actions are available through search.

### Roles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Role by ID | GET | `/api/v2/roles/{{id}}` | `conn_mod_def::GJ0DmwirOcI::eGuVy0nWRnudD1WU0r1K4g` |
| List a Role’s Granted Permissions | GET | `/api/v2/roles/{{id}}/permissions` | `conn_mod_def::GJ0DnBcy-dE::ow-QPWcUQGaXWkZE4cVnSw` |
| List a Role’s Users | GET | `/api/v2/roles/{{id}}/users` | `conn_mod_def::GJ0Dm5BzP3Q::WrABEdWIRlmSVyGziyo_2Q` |
| List Tenant Roles | GET | `/api/v2/roles` | `conn_mod_def::GJ0DnLQfQuE::6tL9WGjhQ5qVQRXuPLYh6A` |
| Assign Users to a Role | POST | `/api/v2/roles/{{id}}/users` | `conn_mod_def::GJ0DmUgIyps::jzfqIL4RSmiDrHU1SC-C0A` |
| Associate Permissions with a Role | POST | `/api/v2/roles/{{id}}/permissions` | `conn_mod_def::GJ0Dmbu2WWc::lTDTsbVORxWQjUYJszRfNA` |
| Create a Role (RBAC) | POST | `/api/v2/roles` | `conn_mod_def::GJ0Dmi6-YF0::hRxUx8zqT8u4l-RluchtvA` |
| Delete a Role | DELETE | `/api/v2/roles/{{id}}` | `conn_mod_def::GJ0DmpnQxhU::49bKyPcES0ynQZaorh1JUA` |
| Remove Permissions from a Role | DELETE | `/api/v2/roles/{{id}}/permissions` | `conn_mod_def::GJ0DnVTHDsg::bPcCfIkqTySmzeRWEtXZXQ` |
| Update a Role by ID | PATCH | `/api/v2/roles/{{id}}` | `conn_mod_def::GJ0Dnchxzdk::iMs-gQy8QgCxp9f8UabxzA` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization by ID | GET | `/api/v2/organizations/{{id}}` | `conn_mod_def::GJ0DiM51we0::3AcyXnHlQc-uuhFSJpTz2w` |
| Get an Organization by Name | GET | `/api/v2/organizations/name/{{name}}` | `conn_mod_def::GJ0DiV375X4::XS5XGNV0SjyV8AuZ4VIiOQ` |
| List a User's Organizations | GET | `/api/v2/users/{{id}}/organizations` | `conn_mod_def::GJ0DxPfCems::AINDsbM-Tbe-L1N7pTEe9Q` |
| List Organizations for a Client Grant | GET | `/api/v2/client-grants/{{id}}/organizations` | `conn_mod_def::GJ0DI3_dwLk::d7FwnWgGR7q1Unsp3_SjPg` |
| List Organizations in a Tenant | GET | `/api/v2/organizations` | `conn_mod_def::GJ0DifPkzs8::qFumdkP_STirW6WGVHnFTA` |
| Add Members to an Organization | POST | `/api/v2/organizations/{{id}}/members` | `conn_mod_def::GJ0Df7F4x9s::0quLM1ZoRoug93jtPJA-bA` |
| Create an Organization | POST | `/api/v2/organizations` | `conn_mod_def::GJ0DgSclqF4::CgbupKOuQkSf3L9det1CrA` |
| Delete an Organization | DELETE | `/api/v2/organizations/{{id}}` | `conn_mod_def::GJ0DhJmgXH4::_tw9qhYrT-GTIoXHEBJkDQ` |
| Modify an Organization | PATCH | `/api/v2/organizations/{{id}}` | `conn_mod_def::GJ0DivkFsNQ::FwCZOqIbQrmOyAb8WXtibA` |

### Actions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Action by ID | GET | `/api/v2/actions/actions/{{id}}` | `conn_mod_def::GJ0DBjH4aYQ::p5hiUKU8QAex-wcZGO9tbA` |
| List Actions | GET | `/api/v2/actions/actions` | `conn_mod_def::GJ0DBZm11HA::fvME1VarRoyoetZgLsxWiw` |
| Create an Auth0 Action | POST | `/api/v2/actions/actions` | `conn_mod_def::GJ0DAWvSVww::8vfTGdBbTiCnM9ueIT333Q` |
| Delete an Auth0 Action | DELETE | `/api/v2/actions/actions/{{id}}` | `conn_mod_def::GJ0DAo5JhC0::poFW3TsxR8O53ujMxbLhGA` |
| Deploy an Action Version | POST | `/api/v2/actions/actions/{{id}}/deploy` | `conn_mod_def::GJ0DAyIlDGs::ZHaLe_9FTp6oYZgMhlaMow` |
| Roll Back (Deploy) a Specific Version of an Action | POST | `/api/v2/actions/actions/{{actionId}}/versions/{{id}}/deploy` | `conn_mod_def::GJ0DCr3sJzQ::-yZwtf3nRIiakIWvIddBvQ` |
| Test an Auth0 Action | POST | `/api/v2/actions/actions/{{id}}/test` | `conn_mod_def::GJ0DC8iPsLY::CI3aHEegQWqunLpO46b-xA` |
| Update an Auth0 Action | PATCH | `/api/v2/actions/actions/{{id}}` | `conn_mod_def::GJ0DDLeMkKk::cqLXbIz0SWu1pS7Hb_oSWg` |

### EventStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event Stream by ID | GET | `/api/v2/event-streams/{{id}}` | `conn_mod_def::GJ0DR6Kklbg::-Lsfrx1sQ-SHB-T7wWOtbw` |
| List Event Streams | GET | `/api/v2/event-streams` | `conn_mod_def::GJ0DSBxrJ4g::WTMML4JJRgq_qZoGxWuvMQ` |
| Create an Event Stream | POST | `/api/v2/event-streams` | `conn_mod_def::GJ0DRiASb3E::WPKu8RoETQewc5YfDw8ACw` |
| Delete an Event Stream | DELETE | `/api/v2/event-streams/{{id}}` | `conn_mod_def::GJ0DRo4cNts::nbAZY2gcTraH2dd8v2tSxg` |
| Redeliver a Failed Event for an Event Stream | POST | `/api/v2/event-streams/{{id}}/redeliver/{{eventId}}` | `conn_mod_def::GJ0DST33GLE::MOJwKis9R8aFqf0z2EI3uw` |
| Redeliver Failed Events for an Event Stream | POST | `/api/v2/event-streams/{{id}}/redeliver` | `conn_mod_def::GJ0DSb7a-mg::iQf9mSZWT_SG8aW2oruNRw` |
| Send a Test Event to an Event Stream | POST | `/api/v2/event-streams/{{id}}/test` | `conn_mod_def::GJ0DSlTriqg::9DV-7XuKQJqJokC-eA779w` |
| Update an Event Stream | PATCH | `/api/v2/event-streams/{{id}}` | `conn_mod_def::GJ0DSs4MMbQ::LZdhfgZGQ6645cu1UAAhAA` |

### CustomDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Custom Domain Configuration by ID | GET | `/api/v2/custom-domains/{{id}}` | `conn_mod_def::GJ0DPnRZh7w::c9Ur9zr9SS2bunqp7hFxtQ` |
| List Custom Domain Configurations | GET | `/api/v2/custom-domains` | `conn_mod_def::GJ0DPvi2peY::hx433h11SfCJ9WglZglUvw` |
| Configure a New Custom Domain | POST | `/api/v2/custom-domains` | `conn_mod_def::GJ0DPYc7Bec::i4FMpvhcRLuG9a_SG1HOJw` |
| Delete a Custom Domain Configuration | DELETE | `/api/v2/custom-domains/{{id}}` | `conn_mod_def::GJ0DPfTc5Ko::16EwkN4GRZuNPfbz9yMhjw` |
| Test a Custom Domain | POST | `/api/v2/custom-domains/{{id}}/test` | `conn_mod_def::GJ0DP25SKTY::JC6cj0CKQXasewcHl-4GZA` |
| Update a Custom Domain Configuration | PATCH | `/api/v2/custom-domains/{{id}}` | `conn_mod_def::GJ0DP-8wCWI::956EdTnfSyKRdPLHNdaauQ` |
| Verify a Custom Domain | POST | `/api/v2/custom-domains/{{id}}/verify` | `conn_mod_def::GJ0DQGUDI4M::a8C086GuTu2tvVw39w1Eag` |

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hook by ID | GET | `/api/v2/hooks/{{id}}` | `conn_mod_def::GJ0DbOue39E::Ug8gjbw2T4WLVtEAbWbC8Q` |
| List Hooks | GET | `/api/v2/hooks` | `conn_mod_def::GJ0DbjR4JZw::YIsy-FiQSkC6qllbqxySpQ` |
| Create a Hook | POST | `/api/v2/hooks` | `conn_mod_def::GJ0Da3GfOUc::pPjqDSGyRzCDGo3vqSGIxg` |
| Delete a Hook | DELETE | `/api/v2/hooks/{{id}}` | `conn_mod_def::GJ0Da-2yZro::WXpQcl7VTwCe8g8mDXUQ7w` |
| Delete a Hook’s Secrets | DELETE | `/api/v2/hooks/{{id}}/secrets` | `conn_mod_def::GJ0DbGoONr8::vZDAn9LvSpOE47xFdqskzw` |
| Update a Hook | PATCH | `/api/v2/hooks/{{id}}` | `conn_mod_def::GJ0DbscN8_Y::7A1RatlaRWOkMeF9-FMmcA` |
| Update a Hook’s Secrets | PATCH | `/api/v2/hooks/{{id}}/secrets` | `conn_mod_def::GJ0Db0XtemY::fhQNpmBmQ7CCbE7rWuFwIg` |

### ActionsModules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Actions Module by ID | GET | `/api/v2/actions/modules/{{id}}` | `conn_mod_def::GJ0DA6xPswc::veh9GQWgQHGZvMC-ZAsW6w` |
| List Actions Modules | GET | `/api/v2/actions/modules` | `conn_mod_def::GJ0DCP08HZY::3qZ0X4CNQUmnMlSwLlV06A` |
| Create an Actions Module | POST | `/api/v2/actions/modules` | `conn_mod_def::GJ0DAEXS0nY::bffS2X7jRRmWV7MVmO1v9g` |
| Delete an Actions Module by ID | DELETE | `/api/v2/actions/modules/{{id}}` | `conn_mod_def::GJ0DAft4qj4::uvVEqw1LRieQO1bPTyh_0Q` |
| Roll Back an Actions Module to a Previous Version | POST | `/api/v2/actions/modules/{{id}}/rollback` | `conn_mod_def::GJ0DC0G117o::1gWYJ1tSTJuJ-VKnqof_Fg` |
| Update an Actions Module | PATCH | `/api/v2/actions/modules/{{id}}` | `conn_mod_def::GJ0DDD4mv0E::XoDZCQ-pRWqPD7IaXJA5Gw` |

### PhoneNotificationTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Notification Template | GET | `/api/v2/branding/phone/templates/{{id}}` | `conn_mod_def::GJ0DGQDvPiI::P2TPRuz-RQ-w4_GEmaJlQQ` |
| List Phone Notification Templates | GET | `/api/v2/branding/phone/templates` | `conn_mod_def::GJ0DGAE2mrQ::gbCB9ivbRYC-rPl_bixQsg` |
| Create a Phone Notification Template | POST | `/api/v2/branding/phone/templates` | `conn_mod_def::GJ0DFR-_MPQ::07clQnBJRj-cDDHcNPJZ3Q` |
| Delete a Phone Notification Template | DELETE | `/api/v2/branding/phone/templates/{{id}}` | `conn_mod_def::GJ0DFgf2FI0::MEx1b8siRIiMnWk-gMozbg` |
| Reset a Phone Notification Template | PATCH | `/api/v2/branding/phone/templates/{{id}}/reset` | `conn_mod_def::GJ0DHCVUiqY::P54pzEmEQJufC90zEI0-iA` |
| Update a Phone Notification Template | PATCH | `/api/v2/branding/phone/templates/{{id}}` | `conn_mod_def::GJ0DHoO0yKc::_2pV27TMQHOLG3f-_axdfw` |

### Clients

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Client by ID (Auth0 Tenant) | GET | `/api/v2/clients/{{id}}` | `conn_mod_def::GJ0DJrN4aPE::vfJ_HBo4QeuBWtcIbIUfcA` |
| List Clients | GET | `/api/v2/clients` | `conn_mod_def::GJ0DKHKPzkM::bltWcFLkR1mB1lH6FL2E1Q` |
| Create a Client (Application or SSO Integration) | POST | `/api/v2/clients` | `conn_mod_def::GJ0DJHFGXdk::1GjF13lSR7-9gGFvV1rMog` |
| Delete a Client | DELETE | `/api/v2/clients/{{id}}` | `conn_mod_def::GJ0DJYXkNMc::wv3eytIiQRmZdXHw5kyP2A` |
| Rotate a Client's Secret | POST | `/api/v2/clients/{{id}}/rotate-secret` | `conn_mod_def::GJ0DKmVAf2U::0LeHBNP-R9qzW87QJn5ZpA` |

1 more Clients actions are available through search.

This lists 90 of 390 actions. For anything not here, call `search_one_platform_actions` with platform `auth0-management`. The full catalog is at https://www.withone.ai/knowledge/auth0-management.

## When a call fails

The error comes from Auth0 Management, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/auth0-management

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
