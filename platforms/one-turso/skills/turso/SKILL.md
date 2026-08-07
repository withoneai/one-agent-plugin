---
name: turso
description: Turso is a distributed SQLite database platform that provides edge-hosted databases, replication, and developer APIs, allowing teams to build low-latency applications with embedded SQL storage that scales across regions while remaining compatible with the SQLite ecosystem. Read and write Turso data through One: groups, databases, organizationmembers, apitokens, organizations, groupauthtokens and more, 49 actions with real parameter documentation. Use whenever the user asks to look something up in Turso, create or update a record there, or build code against the Turso API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: turso
  generated-from: one-knowledge-base
---

# Turso through One

Turso is a distributed SQLite database platform that provides edge-hosted databases, replication, and developer APIs, allowing teams to build low-latency applications with embedded SQL storage that scales across regions while remaining compatible with the SQLite ecosystem.

One exposes Turso through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `turso` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Turso is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Turso account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Groups for an Organization or User | GET | `/v1/organizations/{{organizationSlug}}/groups` | `conn_mod_def::GLprMaPd-0A::Ug0p2BfnSPumOTgTAhKd5A` |
| Retrieve Group for an Organization | GET | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}` | `conn_mod_def::GLprNN887WA::XjPIoO8vQq2pJ25MFVRfiQ` |
| Add Location to Group | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/locations/{{location}}` | `conn_mod_def::GLprLmj3Oqg::5Z7SkRGLR_2xry-z2lo9QA` |
| Create a Group for an Organization or User | POST | `/v1/organizations/{{organizationSlug}}/groups` | `conn_mod_def::GLprLnQeh7A::ecfFRP-8S1qL7ryENde2sw` |
| Delete a Group in an Organization | DELETE | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}` | `conn_mod_def::GLprLwOFlvA::u2mqaSDjSV6DafCcyMXgIw` |
| Remove Location from Group | DELETE | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/locations/{{location}}` | `conn_mod_def::GLprMxbZFNA::NtHhiBHaTtmWImix1hHbuw` |
| Transfer Group for an Organization | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/transfer` | `conn_mod_def::GLprNUhixiA::-jAhXALtTICP3wtGRuuIaA` |
| Unarchive an Organization's Group | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/unarchive` | `conn_mod_def::GLprNTtl3lg::CrCcNEnyTwKDr929KNp7SQ` |
| Update Databases in a Group | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/update` | `conn_mod_def::GLprNTtJNmg::8UsRPGDXSSS46SFVV10yPw` |

### Databases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Databases for an Organization or User | GET | `/v1/organizations/{{organizationSlug}}/databases` | `conn_mod_def::GLprMhMYCqA::VdubYuktTfG-5WxEd_QnoQ` |
| Retrieve a Database for an Organization or User | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}` | `conn_mod_def::GLprM34n71g::wzyxfXZeTk-fiCq1juZoFw` |
| Create a Database for an Organization or User | POST | `/v1/organizations/{{organizationSlug}}/databases` | `conn_mod_def::GLprLmizT_A::ltaaPj_aSFWasWTdjFsjtw` |
| Delete Database for an Organization or User | DELETE | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}` | `conn_mod_def::GLprLwLL2Cg::s8xUcnspR9afANHmauQ7YA` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Organization Member | GET | `/v1/organizations/{{organizationSlug}}/members/{{username}}` | `conn_mod_def::GLprM_zij9g::ZekgN-TKSHm-1bTmGC9ZhA` |
| Add a Member to an Organization | POST | `/v1/organizations/{{organizationSlug}}/members` | `conn_mod_def::GLprLmixX9g::KRmg33NTSNK6v9UFrjq0MQ` |
| Remove Member from an Organization | DELETE | `/v1/organizations/{{organizationSlug}}/members/{{username}}` | `conn_mod_def::GLprMyeODxA::6scWPXJ2TkGk5suEZdwBkA` |
| Update Member Role for an Organization Member | PATCH | `/v1/organizations/{{organizationSlug}}/members/{{username}}` | `conn_mod_def::GLprNbmqk1g::xyhvtPC1R5q5nGQQddy1cw` |

### ApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Tokens | GET | `/v1/auth/api-tokens` | `conn_mod_def::GLprMbZhXIA::suFlvM6kSlema-4m7KCf0A` |
| Create API Token | POST | `/v1/auth/api-tokens/{{tokenName}}` | `conn_mod_def::GLprLp9vw3A::9EHdI3A8Ts-lcQynyZxZ-g` |
| Revoke API Token | DELETE | `/v1/auth/api-tokens/{{tokenName}}` | `conn_mod_def::GLprM__AINA::2tbMSZobTY6iN4s2PZT-ow` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organizations | GET | `/v1/organizations` | `conn_mod_def::GLprMwa1oHg::zLBUN7h7SDmxA5zWSPWVpQ` |
| Retrieve Organization | GET | `/v1/organizations/{{organizationSlug}}` | `conn_mod_def::GLprM__REMA::MYyyh4scS_GxmtnjZHBIow` |
| Update Organization | PATCH | `/v1/organizations/{{organizationSlug}}` | `conn_mod_def::GLprNaHXYNA::l0-qBbLIQGq8lpFg0D72gg` |

### GroupAuthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Group Auth Token | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/auth/tokens` | `conn_mod_def::GLprLwdaOeg::ZXo6FZnzQaCoEmXPnYt5NQ` |
| Invalidate All Group Auth Tokens | POST | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/auth/rotate` | `conn_mod_def::GLprMUSjkEA::WMzsw2b4Q927cCvT1kPrGg` |

### OrganizationInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Invite for an Organization | DELETE | `/v2/organizations/{{organizationSlug}}/invites/{{email}}` | `conn_mod_def::GLprLwdWiJg::pJYPyaUfQFC0smwGIegoAA` |
| Invite Organization Member | POST | `/v2/organizations/{{organizationSlug}}/invites` | `conn_mod_def::GLprL2S0EZA::HGA5OJQJTHe5ROZKt3SEmg` |

### DatabaseAuthTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Database Auth Token | POST | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/auth/tokens` | `conn_mod_def::GLprL3ClTeg::OOWqhkIfSWiNXRehWy-IOw` |
| Invalidate All Database Auth Tokens | POST | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/auth/rotate` | `conn_mod_def::GLprL396PYg::oxXUKZGHTmapYqMa4_hMiQ` |

### DatabaseInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List Database Instances for a Database in an Organization | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/instances` | `conn_mod_def::GLprMd15S8A::VrQH8_bfRNGGlTGVAko4Qg` |
| Retrieve Database Instance for a Database in an Organization | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/instances/{{instanceName}}` | `conn_mod_def::GLprM428M3A::vfu7AUCISH2SRyMsui_46w` |

### OrganizationApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization API Tokens | GET | `/v1/organizations/{{organizationSlug}}/api-tokens` | `conn_mod_def::GLprMpeCncg::6-mME56PQjGQIi4kfMNB-w` |
| Revoke an Organization API Token | DELETE | `/v1/organizations/{{organizationSlug}}/api-tokens/{{tokenId}}` | `conn_mod_def::GLprNUBxpag::G0oKAl_3R0CvCOEJDLVhrw` |

### GroupConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Group Configuration for an Organization Group | GET | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/configuration` | `conn_mod_def::GLprM_0bTzA::KCKPGhGrT0OVuckTFalT2g` |
| Update Group Configuration for an Organization Group | PATCH | `/v1/organizations/{{organizationSlug}}/groups/{{groupName}}/configuration` | `conn_mod_def::GLprNb1zoXg::f_7wZO0_QOGx2iZQYVu4Vw` |

### DatabaseConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Database Configuration for an Organization's Database | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/configuration` | `conn_mod_def::GLprM4OUCtA::ahW3uTR7Soec9y1Cm5oAxA` |
| Update a Database's Configuration | PATCH | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/configuration` | `conn_mod_def::GLprNUarpCg::4Bl0SO6NQ1SsMEaFrMIPjg` |

### AuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audit Logs for an Organization | GET | `/v1/organizations/{{organizationSlug}}/audit-logs` | `conn_mod_def::GLprMabB6SA::VORtIiEfR7uD7mZxXaeVBg` |

### OrganizationUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Usage | GET | `/v1/organizations/{{organizationSlug}}/usage` | `conn_mod_def::GLprMx22SJA::kms_hAmLR-eBlJ98BnotVg` |

### DatabaseUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Database Usage for a Database | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/usage` | `conn_mod_def::GLprM43NhQg::ATrzs_TnTgi8QdfrmF9vaw` |

### DatabaseStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Database Stats for an Organization Database | GET | `/v1/organizations/{{organizationSlug}}/databases/{{databaseName}}/stats` | `conn_mod_def::GLprM6Gdiog::4my-WRGfR5-fBCaxhNkaZQ` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate API Token | GET | `/v1/auth/validate` | `conn_mod_def::GLprNatuiFg::UViMjhlQR0O6Cl9Dno6m_A` |

### User

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User | GET | `/v1/user` | `conn_mod_def::GLprL26LDPA::vvZi4DClTzOZ1w0MxdWgXw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Locations | GET | `/v1/locations` | `conn_mod_def::GLprMnX_KfA::ZE0BE74LRkSDruIrfJNwsw` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members for an Organization | GET | `/v1/organizations/{{organizationSlug}}/members` | `conn_mod_def::GLprMnX0e5A::feI9fkToRdmkTvIBkIMzsg` |

### Invites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invites for an Organization | GET | `/v2/organizations/{{organizationSlug}}/invites` | `conn_mod_def::GLprMrQ7fbg::FIzvJYR-RemfRvi2HC-VPw` |

### Invoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Invoices for an Organization | GET | `/v1/organizations/{{organizationSlug}}/invoices` | `conn_mod_def::GLprMqRvziA::YcPQGz8ITCahe1aegp6UCw` |

### Plans

| Action | Method | Path | Action id |
|---|---|---|---|
| List Plans for an Organization | GET | `/v1/organizations/{{organizationSlug}}/plans` | `conn_mod_def::GLprMxBu4ng::FRycMQn0SAGTe07XyYhUdw` |

### Subscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Subscription for an Organization | GET | `/v1/organizations/{{organizationSlug}}/subscription` | `conn_mod_def::GLprLv3MMlA::39yYQGkoSFeEVjC2gyuPUA` |

## When a call fails

The error comes from Turso, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/turso

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
