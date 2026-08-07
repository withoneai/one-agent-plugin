---
name: docker-hub
description: Docker Hub is a container registry and image library that enables developers and open source contributors to find, build, push, pull, and share container images, with trusted content, hardened images, and tooling for application delivery across local, cloud, and multi-cloud environments. Read and write Docker Hub data through One: accesstokens, users, repositories, organizationgroups, invites, organizationmembers and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in Docker Hub, create or update a record there, or build code against the Docker Hub API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: docker-hub
  generated-from: one-knowledge-base
---

# Docker Hub through One

Docker Hub is a container registry and image library that enables developers and open source contributors to find, build, push, pull, and share container images, with trusted content, hardened images, and tooling for application delivery across local, cloud, and multi-cloud environments.

One exposes Docker Hub through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `docker-hub` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Docker Hub is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Docker Hub account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Personal Access Token by UUID | GET | `/v2/access-tokens/{{uuid}}` | `conn_mod_def::GMavQpMWh9A::hBoZrdL1QMugcpzhZc1L0w` |
| List an Organization's Access Tokens | GET | `/v2/orgs/{{name}}/access-tokens` | `conn_mod_def::GMavRO00org::NnmvPLL1SemWlOlo8KUxJQ` |
| Create a Personal Access Token | POST | `/v2/access-tokens` | `conn_mod_def::GMavQpMRZ1A::MpO2l3zUQ12hLpDfXaVmzA` |
| Create Access Token | POST | `/v2/auth/token` | `conn_mod_def::GMavQwQU4Fg::FpGTAx3iTd2Z_DDH9NP0uA` |
| Create Access Tokens for an Organization | POST | `/v2/orgs/{{name}}/access-tokens` | `conn_mod_def::GMavRIRgTSg::svhAsaZwQ_2Pula_Tovjow` |
| Update a Personal Access Token | PATCH | `/v2/access-tokens/{{uuid}}` | `conn_mod_def::GMavQpwDhNg::2kA6sX5LRju-6SWBtqY3lw` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/v2/scim/2.0/Users/{{id}}` | `conn_mod_def::GMavRralrVg::tgay2rrmTtmD0mUBj-rOng` |
| List Users | GET | `/v2/scim/2.0/Users` | `conn_mod_def::GMavRyyRpnA::DLrGbTlkS1yIXj0bzI07ig` |
| 2fa Login Using Users | POST | `/v2/users/2fa-login` | `conn_mod_def::GMavQwEcm3A::o8K_99w7Sei4zebAM-7juA` |
| Create a User | POST | `/v2/scim/2.0/Users` | `conn_mod_def::GMavRjgeVcA::1nm0bKB0QR2q64HpBeAATQ` |
| Update a User by ID | PUT | `/v2/scim/2.0/Users/{{id}}` | `conn_mod_def::GMavRzZFUsA::TISiGBicQ1CKz74_LvRDEQ` |

### Repositories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Repository in a Namespace | GET | `/v2/namespaces/{{namespace}}/repositories/{{repository}}` | `conn_mod_def::GMavRdcd5Eg::XZgx8YLwQXGo9x0261hPxw` |
| List a Namespace's Repositories | GET | `/v2/namespaces/{{namespace}}/repositories` | `conn_mod_def::GMavRdo4Wxg::Lh9Xdw2ySXOwpi4PZ7K-sw` |
| Check a Repository in a Namespace | HEAD | `/v2/namespaces/{{namespace}}/repositories/{{repository}}` | `conn_mod_def::GMavRWoEzKA::kV9zuGRAR-mhOrx6tfE4fQ` |
| Create a Repository in a Namespace | POST | `/v2/namespaces/{{namespace}}/repositories` | `conn_mod_def::GMavRdbjZ6A::n1g_rIH1TWyL4IULszBk2A` |
| Update Repository Immutable Tags | PATCH | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/immutabletags` | `conn_mod_def::GMavRke2nTA::EZsbrVwVRcC19Z-0I5J0OQ` |

### OrganizationGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Group | GET | `/v2/orgs/{{orgName}}/groups/{{groupName}}` | `conn_mod_def::GMavQ4aqwyA::YqOGpP22TUqEQPTJ5TgGEg` |
| Delete an Organization Group | DELETE | `/v2/orgs/{{orgName}}/groups/{{groupName}}` | `conn_mod_def::GMavQ5KZpeg::bwic8uh6RJKKw3WhzDhA3w` |
| Update an Organization Group | PATCH | `/v2/orgs/{{orgName}}/groups/{{groupName}}` | `conn_mod_def::GMavRAo8hmA::Bx4L_gjtSyi4Ex77nUZD7A` |
| Update an Organization Group | PUT | `/v2/orgs/{{orgName}}/groups/{{groupName}}` | `conn_mod_def::GMavRAx2Hsg::EXFZVVmbT8CUQsmccqKBLA` |

### Invites

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Invites | GET | `/v2/orgs/{{orgName}}/invites` | `conn_mod_def::GMavRIPQaTg::I5LFTeRyQ76LzW8yrrZwHg` |
| Bulk Create Invites | POST | `/v2/invites/bulk` | `conn_mod_def::GMavRAPLGHg::zsPZGXa0Ra2lPcpz-looOg` |
| Cancel an Invite | DELETE | `/v2/invites/{{id}}` | `conn_mod_def::GMavRAIy6GA::qbkNPJNpSQ2M32KhW7nwtg` |
| Resend an Invite | PATCH | `/v2/invites/{{id}}/resend` | `conn_mod_def::GMavRIN_U2g::1i0KOprtQEOzIioVYsv8Tw` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Organization Members CSV | GET | `/v2/orgs/{{orgName}}/members/export` | `conn_mod_def::GMavRPQa-lA::KGwhTqo4TrG7me2Q-cwEVQ` |
| Remove a Member from an Organization | DELETE | `/v2/orgs/{{orgName}}/members/{{username}}` | `conn_mod_def::GMavRWFlpWA::L3KSvh9dRvi318-RpM4g7w` |
| Update an Organization Member's Role | PUT | `/v2/orgs/{{orgName}}/members/{{username}}` | `conn_mod_def::GMavRV2adGA::lo0U31seRYuQhZp1eIaCvQ` |

### RepositoryTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Read a Repository Tag | GET | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/tags/{{tag}}` | `conn_mod_def::GMavRj7Re-A::rfEVbt_wRUqy6bVaAOGjCg` |
| Check a Repository Tag | HEAD | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/tags/{{tag}}` | `conn_mod_def::GMavRdcCr3A::3vZphlZ9TD6rqkKRH8Xv6w` |
| Check Repository Tags for a Namespace Repository | HEAD | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/tags` | `conn_mod_def::GMavRd1BVVg::L5pA2-r_ScuyozGcdzgjQg` |

### PersonalAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List Personal Access Tokens | GET | `/v2/access-tokens` | `conn_mod_def::GMavQpe_zGA::ttHPYIKBSP2IsatTx5kLzw` |
| Delete a Personal Access Token | DELETE | `/v2/access-tokens/{{uuid}}` | `conn_mod_def::GMavQpYtKig::rNxhoEhoRGqAp2qcX8-Z1g` |

### OrganizationGroupMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Member to an Organization Group | POST | `/v2/orgs/{{orgName}}/groups/{{groupName}}/members` | `conn_mod_def::GMavQwBxKNA::X1xRZz9oTY63DGRDx0dTaw` |
| Remove a User from an Organization Group | DELETE | `/v2/orgs/{{orgName}}/groups/{{groupName}}/members/{{username}}` | `conn_mod_def::GMavRA4-KOA::bO9My-61TUS79JJuKSzlVw` |

### AuditLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audit Log Actions for a Namespace | GET | `/v2/auditlogs/{{account}}/actions` | `conn_mod_def::GMavQxglYag::U5g2x84pSn6EeSiibvyRJw` |
| List Audit Log Events for an Account | GET | `/v2/auditlogs/{{account}}` | `conn_mod_def::GMavQwr0mKA::Ae0liPazSp2NltEeN_v6LQ` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization's Groups | GET | `/v2/orgs/{{orgName}}/groups` | `conn_mod_def::GMavQ4bloXA::deUtVpCVQNWTLj_BW_WQCA` |
| Create a Group for an Organization | POST | `/v2/orgs/{{orgName}}/groups` | `conn_mod_def::GMavQ6OX8bA::sNsnunfOQUCZEDQuhoe4Og` |

### OrganizationAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Organization Access Token | DELETE | `/v2/orgs/{{orgName}}/access-tokens/{{accessTokenId}}` | `conn_mod_def::GMavRIOU7qg::9XTOzTdIT_erSSKf5oLp7w` |
| Update an Organization Access Token | PATCH | `/v2/orgs/{{orgName}}/access-tokens/{{accessTokenId}}` | `conn_mod_def::GMavROnNGXA::StXMUXGSSYSsOcfjLz8Qkg` |

### OrganizationSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Settings | GET | `/v2/orgs/{{name}}/settings` | `conn_mod_def::GMavRO4mQjA::dPu0LVgoSXKDkI_KwPdCNQ` |
| Update an Organization's Settings | PUT | `/v2/orgs/{{name}}/settings` | `conn_mod_def::GMavRPJBXDg::UWEEqoNkTIySpoFvQCRBdg` |

### ResourceTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resource Type by Name | GET | `/v2/scim/2.0/ResourceTypes/{{name}}` | `conn_mod_def::GMavRrkT7jg::Fs_qfcVuRdWZOBWsrAckMw` |
| List Resource Types | GET | `/v2/scim/2.0/ResourceTypes` | `conn_mod_def::GMavRrGhyZA::OcxbRZINSF2vDV1HROBhLA` |

### GroupMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members of a Group in an Organization | GET | `/v2/orgs/{{orgName}}/groups/{{groupName}}/members` | `conn_mod_def::GMavQ5rYRjg::Aq1IwlT6THezcHHmRexFxw` |

### OrganizationAccessToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Access Token | GET | `/v2/orgs/{{orgName}}/access-tokens/{{accessTokenId}}` | `conn_mod_def::GMavRIiflOg::_-erC22ETJKNZKIxn3jd9w` |

### RepositoryGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign a Team to a Repository | POST | `/v2/repositories/{{namespace}}/{{repository}}/groups` | `conn_mod_def::GMavRVf_6jA::mH_LompfRDOdWd2l2ABueQ` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members for an Organization | GET | `/v2/orgs/{{orgName}}/members` | `conn_mod_def::GMavRWFuexg::TkeQSuqhSCSBmnaWMcREoA` |

### RepositoryImmutableTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Repository Immutable Tags | POST | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/immutabletags/verify` | `conn_mod_def::GMavRkR4hUg::6w8wRNEGRy-z2VZoAo2zDw` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags for a Repository in a Namespace | GET | `/v2/namespaces/{{namespace}}/repositories/{{repository}}/tags` | `conn_mod_def::GMavRlARGlA::QJ0tlKO1SkG3InfgFqI5xA` |

### ScimSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a SCIM Schema by ID | GET | `/v2/scim/2.0/Schemas/{{id}}` | `conn_mod_def::GMavRq40Dlg::z53690FSQ1246a2kv4dr-w` |

### ServiceProviderConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Service Provider Config | GET | `/v2/scim/2.0/ServiceProviderConfig` | `conn_mod_def::GMavRr8Uw-g::Hqx8CjWYTmiqLvri5RxNaQ` |

### Schemas

| Action | Method | Path | Action id |
|---|---|---|---|
| List Schemas | GET | `/v2/scim/2.0/Schemas` | `conn_mod_def::GMavRzmpxvg::p9a4X8WjTCKGRM34efRRZg` |

## When a call fails

The error comes from Docker Hub, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/docker-hub

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
