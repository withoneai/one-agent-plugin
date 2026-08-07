---
name: xata
description: Xata is a serverless data platform that combines a relational database, full-text search, and branching workflows, enabling developers to build applications with scalable data storage, querying, and collaboration features through APIs, SDKs, and managed infrastructure. Read and write Xata data through One: organizations, apikeys, projects, branches, organizationinvitations, githubappinstallations and more, 65 actions with real parameter documentation. Use whenever the user asks to look something up in Xata, create or update a record there, or build code against the Xata API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: xata
  generated-from: one-knowledge-base
---

# Xata through One

Xata is a serverless data platform that combines a relational database, full-text search, and branching workflows, enabling developers to build applications with scalable data storage, querying, and collaboration features through APIs, SDKs, and managed infrastructure.

One exposes Xata through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `xata` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Xata is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Xata account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization by ID | GET | `/organizations/{{organizationId}}` | `conn_mod_def::GMgWa9H8mdA::-dLpB6_dQvCWJE-R4zTvFQ` |
| Get an Organization's Upcoming Billing Invoice | GET | `/organizations/{{organizationId}}/billing/invoices/upcoming` | `conn_mod_def::GMgWaP1G0EA::qu28xR6kSVSx3nIoaXGNXw` |
| List Organizations | GET | `/organizations` | `conn_mod_def::GMgWa6-54SA::kw9XQKMhTdqVnOT-5PqYdA` |
| Create an Organization | POST | `/organizations` | `conn_mod_def::GMgWa0rUYZA::SamTRcD3SDKK-QnGN6Fi2w` |
| Delete an Organization | DELETE | `/organizations/{{organizationId}}` | `conn_mod_def::GMgWa7oo3pA::fV0tJZsjRoe34Fi-LEwKeg` |
| Request Deletion for an Organization | POST | `/organizations/{{organizationId}}/deletion-request` | `conn_mod_def::GMgWbDLLotg::WeATvhM7SXCl71MZ_qZDMA` |
| Update an Organization | PUT | `/organizations/{{organizationId}}` | `conn_mod_def::GMgWbK77Wog::US0xQNN1SqqOo3sGPrlF9A` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys for an Organization | GET | `/organizations/{{organizationId}}/api-keys` | `conn_mod_def::GMgWaHeSfwg::Sb6nkIWfRd2eTEhu7JteEw` |
| List API Keys for the Authenticated User | GET | `/api-keys` | `conn_mod_def::GMgWaNAvcrA::lqQVlXz1Qryd1DXfmOEYZg` |
| Bulk Delete API Keys for an Organization | DELETE | `/organizations/{{organizationId}}/api-keys` | `conn_mod_def::GMgWaFWqt5g::3PjAXKLYRqar1vR-VXFXTQ` |
| Bulk Delete API Keys for the Authenticated User | DELETE | `/api-keys` | `conn_mod_def::GMgWaGplRCg::jEAog3WVSNy5em7L-mrfnA` |
| Create a User API Key | POST | `/api-keys` | `conn_mod_def::GMgWaGdTsrA::OAi-wg6NTF-uB8JlY8yh4g` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Details for an Organization | GET | `/organizations/{{organizationId}}/projects/{{projectId}}` | `conn_mod_def::GMgWba0EzQg::sJYlWJxdRLSknN2vvyiQqA` |
| List an Organization's Projects | GET | `/organizations/{{organizationId}}/projects` | `conn_mod_def::GMgWbbmj5TA::EEnXH2slQXKs84DEaxWpGw` |
| Create a Project for an Organization | POST | `/organizations/{{organizationId}}/projects` | `conn_mod_def::GMgWbLcPKeg::ko4sauimRgi9iIGNiyB15Q` |
| Delete a Project for an Organization | DELETE | `/organizations/{{organizationId}}/projects/{{projectId}}` | `conn_mod_def::GMgWbLA6iXg::92Ca4VtSRgeWklSz-iysvg` |
| Update a Project in an Organization | PATCH | `/organizations/{{organizationId}}/projects/{{projectId}}` | `conn_mod_def::GMgWbieSoEA::RcM6XmjjTAW2_hbfbxRrSA` |

### Branches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Branch Details for a Project in an Organization | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}` | `conn_mod_def::GMgWadW6EYA::BtzhEj3NTfawgHX_6Yj78g` |
| List a Project's Branches | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/branches` | `conn_mod_def::GMgWafxZ7ng::ZnvkfIR8QEaa61-CNy_Rrw` |
| Create a Branch for a Project in an Organization | POST | `/organizations/{{organizationId}}/projects/{{projectId}}/branches` | `conn_mod_def::GMgWaWwCzjA::RAboCtOPTkKT1JgzUMCmFQ` |
| Restore a Branch from Backup | POST | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/restore` | `conn_mod_def::GMgWaXbXTAA::B7kR1vzuTvC0dxDmDFZjFQ` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Invitation by ID | GET | `/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GMgWa8_rZUA::wJ410szRR9W-5YFhxq6NGA` |
| Create an Invitation for an Organization | POST | `/organizations/{{organizationId}}/invitations` | `conn_mod_def::GMgWbMDF9wA::qtXwg3bQRgmv36Tl175d3g` |
| Delete an Organization Invitation | DELETE | `/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GMgWa675ubg::_XtJD8uZQg2XLnRmMAvRSQ` |
| Resend an Organization Invitation | POST | `/organizations/{{organizationId}}/invitations/{{invitationId}}/resend` | `conn_mod_def::GMgWbK1Wswg::mYaQSZIWRo-2P8ucTRz25A` |

### GithubAppInstallations

| Action | Method | Path | Action id |
|---|---|---|---|
| List GitHub App Installations for an Organization | GET | `/organizations/{{organizationId}}/githubapp/installations` | `conn_mod_def::GMgWat0233g::j4XM6zdnQBKZRXuzYEb7tw` |
| Create GitHub App Installation for an Organization | POST | `/organizations/{{organizationId}}/githubapp/installations` | `conn_mod_def::GMgWasvbxeA::m8NUnEn6Qpik2IM1IAN09A` |
| Update a GitHub App Installation for an Organization | PUT | `/organizations/{{organizationId}}/githubapp/installations/{{githubInstallationId}}` | `conn_mod_def::GMgWazo4bZA::6ZQON4C1TnOFf_ti17IA7g` |

### ProjectBranches

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Branch | DELETE | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}` | `conn_mod_def::GMgWaWMlr6g::1kae42MuQ7Cy9oOyI5Bhww` |
| Update a Project Branch in an Organization | PATCH | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}` | `conn_mod_def::GMgWam1rt5A::LrBtkDT1S_OnwSLDpfqFdw` |

### BranchCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Branch Credentials for a Project Branch | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/credentials` | `conn_mod_def::GMgWafLxZIg::wFpLqV8bRXil1hxJQABMNQ` |
| Rotate Branch Credentials for a Project | POST | `/organizations/{{organizationID}}/projects/{{projectID}}/branches/{{branchID}}/credentials/rotate` | `conn_mod_def::GMgWal-2Nfg::jpiQm3UvTISSthFfXYH5HA` |

### GithubRepositoryMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create GitHub Repository Mapping for a Branch in a Project | POST | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/githubapp/repository` | `conn_mod_def::GMgWatcAKNA::rb0HLbwrRiqh59S8ITHSfw` |
| Update GitHub Repository Mapping for a Branch | PUT | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/githubapp/repository` | `conn_mod_def::GMgWazsvpqA::eF4gMKGmRgWGsWeRXbmqIw` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Members | GET | `/organizations/{{organizationId}}/members` | `conn_mod_def::GMgWbDre1fg::6fqyZeNSSQuDlcSATneatQ` |
| Remove a Member from an Organization | DELETE | `/organizations/{{organizationId}}/members/{{userId}}` | `conn_mod_def::GMgWbD-eNrA::6Uj2IE40QEmUS4l_jWqOhg` |

### ProjectResourceLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Resource Limits | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/limits` | `conn_mod_def::GMgWbbp7s0g::AQQGGMeZTN2U0E9kn67amg` |
| Get Project Resource Limits for an Organization | GET | `/organizations/{{organizationId}}/projects/limits` | `conn_mod_def::GMgWbbjmIxA::nqmRKcYmRZ2fPzOso3y-zA` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| GitHub Webhook | POST | `/webhooks/github` | `conn_mod_def::GMgWbh9boRA::AMLmJohOS-yOwYyN0zrRYA` |
| Orb Billing Webhook | POST | `/webhooks/orb` | `conn_mod_def::GMgWbhZLWOA::TgJ0am3RQBeg3rl29HwpJw` |

### OrganizationApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization API Key | POST | `/organizations/{{organizationId}}/api-keys` | `conn_mod_def::GMgWaFWWAtA::iD0UPculQZ27kXbVz_9ISA` |

### BillingPaymentMethodSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Billing Payment Method Session for an Organization | POST | `/organizations/{{organizationId}}/billing/payment-method-session` | `conn_mod_def::GMgWaOQrO1A::T4pbVItbRg-aW25QxGY-Sg` |

### BillingCheckoutSession

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Billing Checkout Session for an Organization | POST | `/organizations/{{organizationId}}/billing/checkout-session` | `conn_mod_def::GMgWaOV0Iog::_zJ241H6QwiEQKjfc25wcw` |

### BillingCustomerDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Billing Customer Details for an Organization | GET | `/organizations/{{organizationId}}/billing/customer` | `conn_mod_def::GMgWaPA3Wng::mC9LWdGiQCGZfEcZAhklmQ` |

### BillingInvoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Billing Invoices for an Organization | GET | `/organizations/{{organizationId}}/billing/invoices` | `conn_mod_def::GMgWaWEC22A::vZyR_K_XS1q0hKTjtPURLg` |

### BillingCustomer

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Billing Customer for an Organization | PATCH | `/organizations/{{organizationId}}/billing/customer` | `conn_mod_def::GMgWaWvAYkg::jDmRO3tWRuae0MM_U8X6Ug` |

### PostgresConfigurationDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get PostgreSQL Configuration Details for a Branch | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/postgres-config` | `conn_mod_def::GMgWaeJoFfg::-kb0qwVVTOq-8NQCcSd2Ew` |

### BranchLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Branch Logs for a Project in an Organization | POST | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/logs` | `conn_mod_def::GMgWaeoh5kg::1h8wF8qXSJ-COF_FCTDFMw` |

### BranchMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Branch Metrics for a Project | POST | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/metrics` | `conn_mod_def::GMgWal2ocFA::em0w7cTJR9iaXq4fHFzwvA` |

### WebSocketWireProtocolProxy

| Action | Method | Path | Action id |
|---|---|---|---|
| WebSocket Wire Protocol Proxy | GET | `/v2` | `conn_mod_def::GMgWamAa34A::3zFJsGtiQHWOMLj1BDTbaA` |

### Sql

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute SQL Query | POST | `/sql` | `conn_mod_def::GMgWam655lg::jy-mWnH8SbukPgdR8TlAdA` |

### GithubRepository

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Branch's GitHub Repository | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/githubapp/repository` | `conn_mod_def::GMgWatcRxKA::7Hx9b2vgQyGK_K54VZAXtg` |

### GitHubRepositoryMapping

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete GitHub Repository Mapping for a Branch | DELETE | `/organizations/{{organizationId}}/projects/{{projectId}}/branches/{{branchId}}/githubapp/repository` | `conn_mod_def::GMgWatlkfqA::NmQGgtm6SyOfYLNVqGARpg` |

### McpMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an MCP Message | POST | `/mcp` | `conn_mod_def::GMgWazoISVg::a4M-0SPnT5-UhvieOQBdiA` |

### MarketplaceRegistration

| Action | Method | Path | Action id |
|---|---|---|---|
| Register with a Cloud Marketplace | POST | `/marketplace/register` | `conn_mod_def::GMgWa1dVegg::pWIFlxGEQ4uAnI7WBgdSrA` |

### OrganizationMembershipLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Membership Limits | GET | `/organizations/{{organizationId}}/membership-limits` | `conn_mod_def::GMgWbDGYYpg::rFy7k94vSTu3e3sjkFcX4Q` |

### Invitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invitations for an Organization | GET | `/organizations/{{organizationId}}/invitations` | `conn_mod_def::GMgWbFUKRKg::yC5uFlDXQaev7YrsKwJEaQ` |

### Extensions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Extensions for an Organization Image | GET | `/organizations/{{organizationId}}/extensions` | `conn_mod_def::GMgWbSKIYLg::g3t8H7mTRuCTnBdn8Dp5jQ` |

### InstanceTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Instance Types for an Organization | GET | `/organizations/{{organizationId}}/instanceTypes` | `conn_mod_def::GMgWbTdS05g::qO747qmoQWewSaMrqcO-0g` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Regions for an Organization | GET | `/organizations/{{organizationId}}/regions` | `conn_mod_def::GMgWbT7GUAA::ezjp3hpsSX-ebJadOiiYNg` |

### OrganizationResourceLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Resource Limits | GET | `/organizations/{{organizationId}}/limits` | `conn_mod_def::GMgWbT777pA::UAzDhc9cQwaGBQYUbXVrZQ` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Available Images | GET | `/organizations/{{organizationId}}/images` | `conn_mod_def::GMgWbT_0f2A::9mDsWHFVT9m_p24j8WctnQ` |

### ProjectBackups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Backup by ID | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/backups/{{backupId}}` | `conn_mod_def::GMgWbage6PA::iOn9bMRqSJWQhrrDrtIWYg` |

### StripeWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Stripe Webhook | POST | `/webhooks/stripe` | `conn_mod_def::GMgWbhZaOXg::ja2Wm43oSM--pnpGAoT-HA` |

### Backups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Backups for an Organization Project | GET | `/organizations/{{organizationId}}/projects/{{projectId}}/backups` | `conn_mod_def::GMgWbh04kjA::DYo5-EijROWyOC96XnTWpw` |

## When a call fails

The error comes from Xata, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/xata

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
