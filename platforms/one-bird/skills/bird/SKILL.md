---
name: bird
description: Bird is an AI-powered omnichannel communication platform that enables businesses to engage customers across email, SMS, WhatsApp, voice, and push channels, combining messaging infrastructure, customer data, and automation workflows to drive marketing, sales, and support at scale. Read and write Bird data through One: invoices, employeefiles, agents, orgbundles, workspaces, organizationbundles and more, 3592 actions with real parameter documentation. Use whenever the user asks to look something up in Bird, create or update a record there, or build code against the Bird API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: bird
  generated-from: one-knowledge-base
---

# Bird through One

Bird is an AI-powered omnichannel communication platform that enables businesses to engage customers across email, SMS, WhatsApp, voice, and push channels, combining messaging infrastructure, customer data, and automation workflows to drive marketing, sales, and support at scale.

One exposes Bird through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `bird` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Bird is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Bird account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Organization's Invoice PDF | GET | `/organizations/{{organizationId}}/invoices/{{invoiceId}}/pdf` | `conn_mod_def::GKsU9p__fQA::BAcFzEdhQQOo6Nvvak-w1g` |
| Get an Invoice by ID | GET | `/invoices/{{invoiceId}}` | `conn_mod_def::GKsU9yGJ14A::X3YA_IICQ-2JaD4rU9Kayw` |
| List Invoices by Invoice Number | GET | `/invoices` | `conn_mod_def::GKsTXMn8A4A::kbcQu_rNR2uZTfRHkyMKAA` |
| Create an Invoice From a PDF File in a Workspace | POST | `/workspaces/{{workspaceId}}/expenses/invoice-files` | `conn_mod_def::GKsTq-MxSRA::QoOWrLt5QBaKRICFv9hUsQ` |
| Create an Invoice Within a Workspace | POST | `/workspaces/{{workspaceId}}/expenses/invoices` | `conn_mod_def::GKsTrASgjPA::8XibyPUqSsWkYp4WUGhHmA` |
| Create Invoice | POST | `/invoices` | `conn_mod_def::GKsU9TVWZLA::kuU7l2HgQiaMWOj8MIgK4A` |
| Edit an Invoice Address | PATCH | `/invoices/{{invoiceId}}/address` | `conn_mod_def::GKsU9jLeJ_g::-0CuHYxZQjCHjDRF_Fxr7w` |
| Fix an Invoice | POST | `/invoices/{{invoiceId}}/fix` | `conn_mod_def::GKsU9jMN9kA::8iMJd-zCQLyKgYI4S8nBaw` |
| Recalculate an Invoice | POST | `/invoices/{{invoiceId}}/recalculate` | `conn_mod_def::GKsU9jUqMwg::9ZtxuWTDS1iadfnI2erbxA` |
| Republish an Invoice | POST | `/invoices/{{invoiceId}}/publish` | `conn_mod_def::GKsU-GhSQng::FG3lWc70SnO5ktivZn9J6w` |
| Republish an Invoice | POST | `/invoices/{{invoiceId}}/republish` | `conn_mod_def::GKsU-A6kwWA::ftC7yLmYSA2MV-jWkY9ddQ` |
| Send an Invoice PDF by Email | POST | `/invoices/{{invoiceId}}/send` | `conn_mod_def::GKsU-PDpDng::GNXEDhl9REu-QHJwWySFKg` |

4 more Invoices actions are available through search.

### EmployeeFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Employee File by ID | GET | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-files/{{employeeFileId}}/download` | `conn_mod_def::GKsTw0tBUXg::qkMiRGXpRmCc0nyUUqTWsw` |
| Download Employee File by ID for the Authenticated User in a Workspace | GET | `/workspaces/{{workspaceId}}/users/me/hr/employee-files/{{employeeFileId}}/download` | `conn_mod_def::GKsTw0-9gvg::HLuosB1TT6GBr6fecRCGOA` |
| List an Employee's Employee Files Within an Organization Workspace | GET | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-files` | `conn_mod_def::GKsT6J-34Kg::snA_zBPASHi52quBMuUjcA` |
| List Employee Files Within an Organization Workspace | GET | `/workspaces/{{workspaceId}}/users/me/hr/employee-files` | `conn_mod_def::GKsT5_LSpag::AS7LgwgyS7WCm6gMcGiWYQ` |
| Create a Self Employee File for a User's Employee Document Request | POST | `/workspaces/{{workspaceId}}/users/me/hr/employee-document-requests/{{employeeDocumentRequestId}}/employee-files` | `conn_mod_def::GKsTpxaFBHg::7Ju-rrmcRi6vAoP6hMEabw` |
| Create an Employee File for an Employee Document Request | POST | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-document-requests/{{employeeDocumentRequestId}}/employee-files` | `conn_mod_def::GKsTqr-6wMA::UvSYTNHrRS6htEA8_bC7ag` |
| Create an Employee File Upload for an Employee | POST | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-files/upload` | `conn_mod_def::GKsTqsAXFXg::AT5fzFjMSbOg6_SPKpHpDQ` |
| Create an Employee File Within an Organization Workspace | POST | `/workspaces/{{workspaceId}}/users/me/hr/employee-files` | `conn_mod_def::GKsTq0wPKTA::EfUEMpkHT9mZZJywdyGUfw` |
| Create an Employee File Within an Organization Workspace Employee | POST | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-files` | `conn_mod_def::GKsTqrcRkxg::7FW3vf75QHexrRvkHQREAw` |
| Create Self Employee File and Generate Presigned Upload Within an Organization Workspace | POST | `/workspaces/{{workspaceId}}/users/me/hr/employee-files/presigned-upload` | `conn_mod_def::GKsTsjLbUQg::Tn0cuG3GTCypw2zSyevdxA` |
| Delete an Employee's Employee File by ID | DELETE | `/workspaces/{{workspaceId}}/hr/employees/{{employeeId}}/employee-files/{{employeeFileId}}` | `conn_mod_def::GKsTuZ-D64g::HApCrfp1SFOs_WCSL-_7FA` |
| Delete My Employee File in a Workspace by ID | DELETE | `/workspaces/{{workspaceId}}/users/me/hr/employee-files/{{employeeFileId}}` | `conn_mod_def::GKsTuaQB9bA::PMMvSWrUT3mXYcjWqvQq9Q` |

2 more EmployeeFiles actions are available through search.

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agents That Contributed to a Team in a Workspace | GET | `/workspaces/{{workspaceId}}/reporting/agent/contributed-to-team` | `conn_mod_def::GKsVMEd8KzA::vESXNGV8QS-3RaA-49Gw4w` |
| Get an Agent's Presigned Upload URL for Profile Avatar | GET | `/workspaces/{{workspaceId}}/agents/{{agentId}}/presigned-upload` | `conn_mod_def::GKsTdZdfetg::v3mGQdoLRlO1V5RMVE3jFQ` |
| Get My Agent | GET | `/workspaces/{{workspaceId}}/agents/me` | `conn_mod_def::GKsTc_qT0hg::FMegbPXUQTOmio6nft9s6w` |
| List a Workspace's Agents | GET | `/workspaces/{{workspaceId}}/agents` | `conn_mod_def::GKsTdTQKDUA::ia4eXAUAQiyYdu9KaPX7iA` |
| List a Workspace's Agents | GET | `/workspaces/{{workspaceId}}/llmbot/agents` | `conn_mod_def::GKsTkwmh-Xg::2dLdTCLaSD-bYdlCEJsJcA` |
| List All Agents for a Workspace | GET | `/workspaces/{{workspaceId}}/all-agents` | `conn_mod_def::GKsTdg9OEiA::g9J8fTdRTKqI3Fj-04y0iA` |
| Create an Agent in a Workspace | POST | `/workspaces/{{workspaceId}}/agents` | `conn_mod_def::GKsTdAXwRJg::cVzL_demRSikjVkIbxdNHA` |
| Create an Agent in a Workspace | POST | `/workspaces/{{workspaceId}}/llmbot/agents` | `conn_mod_def::GKsUvls50JA::Cu7tp67nRuu7LKPWbe_B-Q` |
| Delete an Agent from a Workspace | DELETE | `/workspaces/{{workspaceId}}/agents/{{agentId}}` | `conn_mod_def::GKsTc_YCtSA::gTbI4Ld7THGoGOLRqSQj5A` |
| Register an Agent Ping for a Workspace Agent | POST | `/workspaces/{{workspaceId}}/agents/{{agentId}}/ping` | `conn_mod_def::GKsTdtGDqUA::NDyPkotIQsG-JK1bOW9Ngg` |
| Update an Agent in a Workspace | PATCH | `/workspaces/{{workspaceId}}/agents/{{agentId}}` | `conn_mod_def::GKsTdiBhQZA::_oOQA89rRc2Guw7qCa9FdQ` |
| Update an Agent's Availability in a Workspace | PATCH | `/workspaces/{{workspaceId}}/agents/{{agentId}}/availability` | `conn_mod_def::GKsTdh_995g::jEurXVa1SMWklSwjqX3tSg` |

1 more Agents actions are available through search.

### OrgBundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Org Bundle as an Order Form | GET | `/org-bundles/{{orgBundleId}}/order-form` | `conn_mod_def::GKsTmNCnSvA::oo3qXQhFQgSJNfFowj20EQ` |
| Get an Organization's Active OrgBundle | GET | `/organizations/{{organizationId}}/bundles/active` | `conn_mod_def::GKsVdR7niUA::pMwMi_taSiCyJ5cBDpTW-Q` |
| Get Upfront Amount Due Estimation for an Organization in an Org Bundle | GET | `/org-bundles/{{orgBundleId}}/organizations/{{organizationId}}/upfront-amount-estimation` | `conn_mod_def::GKsVlidFCNA::d7LsXKrYQiiOeip-Gg-1hQ` |
| List an Org Bundle's Order Form Recipients | GET | `/org-bundles/{{orgBundleId}}/order-form/recipients` | `conn_mod_def::GKsTmLvR42A::wlde-uVNTwS5S5UhN2q6cQ` |
| Return an Org Bundle's Scheduled Termination | GET | `/org-bundles/{{orgBundleId}}/termination-schedule` | `conn_mod_def::GKsTmUllimA::-ql2IoO1S8aC29WrO2c7dQ` |
| Clone an Organization Bundle with COLA | POST | `/org-bundles/{{orgBundleId}}/clonewcola` | `conn_mod_def::GKsVc3JZLbA::vR8rvrpYRoONrJePQOnlhA` |
| Delete an Org Bundle Scheduled Termination | DELETE | `/org-bundles/{{orgBundleId}}/termination-schedule` | `conn_mod_def::GKsTl6AZt3A::IulqrdIFQP6k0Z6KqgsCSg` |
| DocuSign Event Callback for an Organization Bundle | POST | `/org-bundles/{{orgBundleId}}/events/docusign` | `conn_mod_def::GKsVdDPTd5g::ourWZCsnQQubU3eYqJN4xA` |
| Renew an Org Bundle | PATCH | `/org-bundles/{{orgBundleId}}/renew` | `conn_mod_def::GKsTmC_L_Jg::SINNGZplT42NPG2mQigewA` |
| Return an Org Bundle Scheduled Termination | PATCH | `/org-bundles/{{orgBundleId}}/suspension` | `conn_mod_def::GKsTmLldqyg::6t1faNWXQ0e9by8aeaNsMA` |
| Return an Org Bundle's Scheduled Termination | PATCH | `/org-bundles/{{orgBundleId}}/terminate-immediately` | `conn_mod_def::GKsTmMtUaIA::U7SR1ydzS3mSalRVnToAmQ` |
| Update an Organization Bundle | PATCH | `/org-bundles/{{orgBundleId}}` | `conn_mod_def::GKsVdfK8MGg::967M5Co4SzaLuoNsT7DVzg` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize Delete Webhooks in a Workspace | GET | `/workspaces/{{workspaceId}}/reach-email/authorize/delete-webhooks` | `conn_mod_def::GKsVqM33-LA::BEuDdn7jSzOJVsJet032sg` |
| Connect a Workspace WebSocket | GET | `/workspaces/{{workspaceId}}/connect` | `conn_mod_def::GKsVNXDX-cg::EEHyt2dtT1uM90yvhgurhA` |
| List an Organization Member's Workspaces | GET | `/organizations/{{organizationId}}/users/{{userId}}/workspaces` | `conn_mod_def::GKsTZ-kjkLA::fErjPQPpSJeR8H_-eQY6_w` |
| List an Organization's Workspaces | GET | `/organizations/{{organizationId}}/workspaces` | `conn_mod_def::GKsVcp0P69A::8LORLa9CRjG3mc1Gp_ax9w` |
| List My Workspaces in an Organization | GET | `/organizations/{{organizationId}}/users/me/workspaces` | `conn_mod_def::GKsWEGbst7A::o3KFXQzIQ_WIAczLU7QcSQ` |
| List Workspaces for the Current User | GET | `/me/workspaces` | `conn_mod_def::GKsTaN2Rhkg::pvZ4mcFBRQ2Ha6YWJ_cBZQ` |
| Delete an Organization's Workspace | DELETE | `/organizations/{{organizationId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GKsVcYvIzKg::TmKAcD_JTuWJf6s2E0h-BQ` |
| Disable an Organization Workspace | POST | `/organizations/{{organizationId}}/workspaces/{{workspaceId}}/disable` | `conn_mod_def::GKsVcZRtL8A::OKLl83lgRD6X3sojKMb2Iw` |
| Enable an Organization Workspace | POST | `/organizations/{{organizationId}}/workspaces/{{workspaceId}}/enable` | `conn_mod_def::GKsVcpD_wYA::06o0AZuhQjWz3_b3oMNEPw` |
| Terminate an Organization's Workspace | POST | `/organizations/{{organizationId}}/workspaces/{{workspaceId}}/terminate` | `conn_mod_def::GKsVcpEJpMA::NJYVKe5ASDKOKV4J54bq0A` |
| Update an Organization's Workspace | PATCH | `/organizations/{{organizationId}}/workspaces/{{workspaceId}}` | `conn_mod_def::GKsVcnFWGqA::pvAnpXXeQyS7oXbVqh_6pA` |

### OrganizationBundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Default Organization Bundle's Additional Legal Term | GET | `/org-bundles/{{orgBundleId}}/additional-legal-term` | `conn_mod_def::GKsVdA0em6A::BQOULKVBQhyAc4nsmDsURg` |
| List an Organization's Attached Bundles | GET | `/organizations/{{organizationId}}/bundles` | `conn_mod_def::GKsVdWEVQ0g::TWnQLUsBRPSMIgyrif2ZcQ` |
| List Organization Bundles | GET | `/org-bundles` | `conn_mod_def::GKsVdR7ccWg::PuJ4ky1uQ9G9d3wwihbHEQ` |
| Attach a Bundle to an Organization | POST | `/bundles/{{bundleId}}/organizations/{{organizationId}}` | `conn_mod_def::GKsVc0n33iA::5_pS2ZRoQtSrNWTthkH0TA` |
| Cancel an Organization Bundle's Order Form | POST | `/org-bundles/{{orgBundleId}}/cancel-order-form` | `conn_mod_def::GKsVc0LlSlA::DRlzWZ7gR2-0eUKQQ20n6w` |
| Clone an Organization Bundle | POST | `/org-bundles/{{orgBundleId}}/clone` | `conn_mod_def::GKsVczMEuvg::XFMqBstfR5qhjXNpzZEDwg` |
| Create a Self-Serve Organization Bundle Draft | POST | `/organizations/{{organizationId}}/bundles` | `conn_mod_def::GKsVcznDpNA::XkOrZO_sR4KCc-nw9WqZVQ` |
| Delete an Organization Bundle | DELETE | `/org-bundles/{{orgBundleId}}` | `conn_mod_def::GKsVc_PlAxg::QlxAbl1DSKu_b4cc8rkK8g` |
| Update an Organization Bundle's Additional Legal Term | PATCH | `/org-bundles/{{orgBundleId}}/additional-legal-term` | `conn_mod_def::GKsVdfG68PA::bPib_cfaT0SnWqmnKwW0rw` |
| Update an Organization Bundle's Legal Terms | PATCH | `/org-bundles/{{orgBundleId}}/legal-terms` | `conn_mod_def::GKsVdj7ijwA::IGItfYnuQhCZVfwPq5EwDQ` |
| Update Restrict Fields for an Existing Organization Bundle | PATCH | `/org-bundles/{{orgBundleId}}/restricted-fields` | `conn_mod_def::GKsVdtwfQmg::KvmPZqs9T6eouiDqkudr6Q` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/users/{{userId}}` | `conn_mod_def::GKsTcSYFpSg::Du1yVsZPRIm3BEu96VyM3Q` |
| List Users | GET | `/users` | `conn_mod_def::GKsTcl5zlCg::8rmsfT0VRUi5MMqzf7uonA` |
| Add a User Email Address | PUT | `/users/{{userId}}/emails/{{emailAddress}}` | `conn_mod_def::GKsTX7MoQAg::AV7toysOTTODGj9fZAkC0Q` |
| Create Root SCIM User | POST | `/scim/v2/Users` | `conn_mod_def::GKsTX7LtaYg::XXnlCtWpSqidnIpCo9cIUw` |
| Create User | POST | `/users` | `conn_mod_def::GKsTcEWSP7A::lpCsmb_yT-6Oo5rL-LksFw` |
| Register a New User | POST | `/auth/register` | `conn_mod_def::GKsTjkyT_2A::mWhN43KmS4SSrPhlKaeC6Q` |
| Remove a User's Email Address | DELETE | `/users/{{userId}}/emails/{{emailAddress}}` | `conn_mod_def::GKsTamUEXtg::eTy0A2WdTSmk0LiyEbtx_A` |
| Remove a User's MFA Configuration | DELETE | `/users/{{userId}}/mfa/{{mfaId}}` | `conn_mod_def::GKsTamJ91yA::u6yxErgPT4ShM34-1zRLug` |
| Remove a User's Phone Number | DELETE | `/users/{{userId}}/phone-numbers/{{phoneNumberId}}` | `conn_mod_def::GKsTamTodlA::GLWpMnWNT42D8cf5l06GEA` |
| Update a User | PATCH | `/users/{{userId}}` | `conn_mod_def::GKsTc3tws5g::QiqLedfaRb2anTrYpSjTSw` |
| Update Root SCIM User | PUT | `/scim/v2/Users/{{userId}}` | `conn_mod_def::GKsTaxCTpsg::URUUp8aKTpC4YjgjYNaSwA` |

### ScimUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM User for an Organization | GET | `/organizations/{{organizationId}}/scim/v2/Users/{{userId}}` | `conn_mod_def::GKsTZGp0o9g::Zd1fkdlzSq-LKl_uIfWbIA` |
| List a Workspace's SCIM Users | GET | `/workspaces/{{workspaceId}}/scim/v2/Users` | `conn_mod_def::GKsTZlV9x3g::-b-Iam7aRimkhm3Q-bw5WA` |
| List Root SCIM Users | GET | `/scim/v2/Users` | `conn_mod_def::GKsTaBDl4SA::2aIVPh8BQPGARzO-0N1M3A` |
| List SCIM Users for an Organization | GET | `/organizations/{{organizationId}}/scim/v2/Users` | `conn_mod_def::GKsTZb96DAA::eUaBXaHETBOqMHPstp1p6g` |
| Create a SCIM User in an Organization | POST | `/organizations/{{organizationId}}/scim/v2/Users` | `conn_mod_def::GKsTYJSn1cA::ptJCZ7fYSBmxISTFU4WD1w` |
| Create SCIM User in a Workspace | POST | `/workspaces/{{workspaceId}}/scim/v2/Users` | `conn_mod_def::GKsTYJKZRPg::pNMYCFsMTbqIlGcupNF9Qw` |
| De-provision a SCIM User for an Organization | DELETE | `/organizations/{{organizationId}}/scim/v2/Users/{{userId}}` | `conn_mod_def::GKsTYjHkDug::Y5PiJONxRiqbWPu2UL1Seg` |
| Patch a SCIM User in an Organization | PATCH | `/organizations/{{organizationId}}/scim/v2/Users/{{userId}}` | `conn_mod_def::GKsTadPHR3g::Pp-wzz7BSY6Ck9MqAjbcYQ` |
| Patch a Workspace SCIM User | PATCH | `/workspaces/{{workspaceId}}/scim/v2/Users/{{userId}}` | `conn_mod_def::GKsTadDvguA::B182RRoWRvWRYKAAwqBr_g` |

2 more ScimUsers actions are available through search.

This lists 90 of 3592 actions. For anything not here, call `search_one_platform_actions` with platform `bird`. The full catalog is at https://www.withone.ai/knowledge/bird.

## When a call fails

The error comes from Bird, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/bird

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
