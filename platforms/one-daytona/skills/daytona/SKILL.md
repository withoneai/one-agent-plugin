---
name: daytona
description: Daytona is a developer infrastructure platform for creating and managing secure, reproducible development environments, enabling engineering teams to provision workspaces, automate setup, and integrate cloud-based development workflows into their tools and platforms through APIs and infrastructure components. Read and write Daytona data through One: sandbox, runners, organizations, snapshots, regions, apikeys and more, 179 actions with real parameter documentation. Use whenever the user asks to look something up in Daytona, create or update a record there, or build code against the Daytona API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: daytona
  generated-from: one-knowledge-base
---

# Daytona through One

Daytona is a developer infrastructure platform for creating and managing secure, reproducible development environments, enabling engineering teams to provision workspaces, automate setup, and integrate cloud-based development workflows into their tools and platforms through APIs and infrastructure components.

One exposes Daytona through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `daytona` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Daytona is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Daytona account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sandbox

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if a Sandbox Is Public | GET | `/api/preview/{{sandboxId}}/public` | `conn_mod_def::GMgWXRGwPXA::z4XKGPxeRuutz3yMLwNZNQ` |
| Get Sandbox Details | GET | `/api/sandbox/{{sandboxIdOrName}}` | `conn_mod_def::GMgWYPjeyFg::A47pPmWxRheO15UeGX9ZTw` |
| Archive a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/archive` | `conn_mod_def::GMgWYBING1A::O5B2dpC6RhmoYm8d5X9_og` |
| Create a Sandbox | POST | `/api/sandbox` | `conn_mod_def::GMgWX_S6VPA::VxlhHfBWQ4qfa9mXEX2OQQ` |
| Create a Snapshot from a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/snapshot` | `conn_mod_def::GMgWX_4Myog::2WmegejMT8--G-AjVqTQsw` |
| Delete Sandbox | DELETE | `/api/sandbox/{{sandboxIdOrName}}` | `conn_mod_def::GMgWYAVrNGg::aII9LFcBTqemHoV-5RKdPA` |
| Fork a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/fork` | `conn_mod_def::GMgWYIs4Gpg::IY5gLzfWTkCdgr92ARABAQ` |
| Pause a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/pause` | `conn_mod_def::GMgWYgHyzGg::sQJCp1apSWKAn-VC8z4a5A` |
| Recover a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/recover` | `conn_mod_def::GMgWYrR1qpA::1ced4B6dTTyaRhlxgYjJQQ` |
| Recover a Sandbox as an Admin | POST | `/api/admin/sandbox/{{sandboxId}}/recover` | `conn_mod_def::GMgWU06veUg::vUW5imqWSBWHNQhyxvlHUw` |
| Resize a Sandbox | POST | `/api/sandbox/{{sandboxIdOrName}}/resize` | `conn_mod_def::GMgWYrgt87g::HDnfIi0WTKeIk4eKwjzpww` |
| Revoke SSH Access for a Sandbox | DELETE | `/api/sandbox/{{sandboxIdOrName}}/ssh-access` | `conn_mod_def::GMgWYrkJ9Ag::mSOTCSLVTg2J5GfqQSLmYg` |

11 more Sandbox actions are available through search.

### Runners

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Runner by ID | GET | `/api/admin/runners/{{id}}` | `conn_mod_def::GMgWUsisJYA::YPT8x31hTz6IQwP52E8Wjw` |
| Get a Runner by ID | GET | `/api/runners/{{id}}` | `conn_mod_def::GMgWXl8kluA::HB-RGzHYTIGUtM3wGsVuew` |
| Get a Runner by ID | GET | `/api/runners/{{id}}/full` | `conn_mod_def::GMgWXrgag-A::3zoLsni3QgKYDg0_OXLBmw` |
| Get Runner by Sandbox ID | GET | `/api/runners/by-sandbox/{{sandboxId}}` | `conn_mod_def::GMgWXlPUA3A::4hjMD2IETR2qMJMPGccsew` |
| Get Runners by Snapshot Ref | GET | `/api/runners/by-snapshot-ref` | `conn_mod_def::GMgWX4GV2Hg::5WgQ0hCcTw-AjXHFl62-Sg` |
| Get the Signed-in User's Runner Info | GET | `/api/runners/me` | `conn_mod_def::GMgWXkIt1xg::GimmECzxS2yVuXWqZKE8XA` |
| List All Runners | GET | `/api/admin/runners` | `conn_mod_def::GMgWUsT3N7g::x2qJBLNNS5eVlBG0otr_Vw` |
| List Runners | GET | `/api/runners` | `conn_mod_def::GMgWX28kvug::2ZhjW7JIRtC4tV8CFTVLww` |
| Create an Admin Runner | POST | `/api/admin/runners` | `conn_mod_def::GMgWUUVkrvA::FJX6rz7URda3cnhEwcri7w` |
| Create Runner | POST | `/api/runners` | `conn_mod_def::GMgWXd1ZieA::8Xl1VqGuR1aSoU4zATA1Qg` |
| Delete a Runner | DELETE | `/api/admin/runners/{{id}}` | `conn_mod_def::GMgWUbUCZgg::OBuwOHK7QS-l9G7gjU8rvg` |
| Delete a Runner | DELETE | `/api/runners/{{id}}` | `conn_mod_def::GMgWXjnFtcg::ChoEInm9Tv6UgbzrDv_zXw` |

4 more Runners actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization by ID | GET | `/api/organizations/{{organizationId}}` | `conn_mod_def::GMgWV_Ib1fA::MMbXEZyrQhuqL7XFE5JOBA` |
| List Organizations | GET | `/api/organizations` | `conn_mod_def::GMgWWn1FUKA::F1AatYChShmcDs-y8fBgWg` |
| Accept an Organization Invitation | POST | `/api/organizations/invitations/{{invitationId}}/accept` | `conn_mod_def::GMgWVwFD5BA::WR1BssVBTjWIkpimZiTUGA` |
| Create an Organization | POST | `/api/organizations` | `conn_mod_def::GMgWVwF5gqA::kAg3k5YMTSKaQ2cnrobPEQ` |
| Create an Organization for a User | POST | `/api/admin/organizations` | `conn_mod_def::GMgWUUn7Oog::4vSHJDNiSaWvFE2Y88S5Ww` |
| Delete an Organization | DELETE | `/api/organizations/{{organizationId}}` | `conn_mod_def::GMgWV2QKIWg::p4Qy1zz2QVq1vZ2KGQ0dRg` |
| Leave an Organization | POST | `/api/organizations/{{organizationId}}/leave` | `conn_mod_def::GMgWWUCvJFA::7hcJbPjCRW2IQDz8cFS0DQ` |
| Set Default Region for an Organization | PATCH | `/api/organizations/{{organizationId}}/default-region` | `conn_mod_def::GMgWW1303Ig::Gh_nAfDCTEiIQUIzsKF1EA` |
| Suspend an Organization | POST | `/api/organizations/{{organizationId}}/suspend` | `conn_mod_def::GMgWW-gmp2A::O6N9GmRAQR2eiMIO7ytcUw` |
| Unsuspend an Organization | POST | `/api/organizations/{{organizationId}}/unsuspend` | `conn_mod_def::GMgWW8ZLDSA::0VDQHaBLQdS74MBRoR1TYg` |
| Update Experimental Configuration for an Organization | PUT | `/api/organizations/{{organizationId}}/experimental-config` | `conn_mod_def::GMgWW-yr_Lg::152T0yWWT8q-pOkMjMCFTQ` |
| Update Organization OpenTelemetry Configuration | PUT | `/api/organizations/{{organizationId}}/otel-config` | `conn_mod_def::GMgWXIzj2zg::LGZvnmDVQF-zuN5ERjbDvA` |

2 more Organizations actions are available through search.

### Snapshots

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether an Image Can Be Cleaned Up | GET | `/api/admin/snapshots/can-cleanup-image` | `conn_mod_def::GMgWUUY4uDA::YxXTJDvVSDmep821Ja5U_g` |
| Get Snapshot Build Logs URL | GET | `/api/snapshots/{{id}}/build-logs-url` | `conn_mod_def::GMgWZUPNx0g::UGa4VmojRhCeB3dEaNZ7oQ` |
| Get Snapshot by ID or Name | GET | `/api/snapshots/{{id}}` | `conn_mod_def::GMgWZUDV2FA::8yiSVngGSOaDIhoXNZsrxA` |
| List Snapshots | GET | `/api/snapshots` | `conn_mod_def::GMgWZbaFVQg::2CkycsRWQHq5WCH34ym9bw` |
| Activate a Snapshot | POST | `/api/snapshots/{{id}}/activate` | `conn_mod_def::GMgWZMU3c8A::OVtGBFn9SpmMUVbgaQMd4A` |
| Create a Snapshot | POST | `/api/snapshots` | `conn_mod_def::GMgWZTvdddg::zVwzxpD1QraDCBL9jnUlaQ` |
| Deactivate a Snapshot | POST | `/api/snapshots/{{id}}/deactivate` | `conn_mod_def::GMgWZUOtH-g::otKZ6NudR5Wtu1jc2seDfw` |
| Delete Snapshot | DELETE | `/api/snapshots/{{id}}` | `conn_mod_def::GMgWZT9Lgxg::gUF4US4FRv27F3zM6CIMmQ` |
| Set Snapshot General Status | PATCH | `/api/admin/snapshots/{{id}}/general` | `conn_mod_def::GMgWU7lasbg::n9McK2cTQD2ILEx8kYHmLw` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Region by ID | GET | `/api/regions/{{id}}` | `conn_mod_def::GMgWWZ-lECg::baBwnHs1QtyFcfDrnK32Eg` |
| List Available Regions for the Organization | GET | `/api/regions` | `conn_mod_def::GMgWWXFqUNg::XP8VtpUDRKaVh4bceU0fSg` |
| Create a Region | POST | `/api/regions` | `conn_mod_def::GMgWVwFxqtA::mIvnRu_HSNqk_VCgL369gQ` |
| Delete a Region | DELETE | `/api/regions/{{id}}` | `conn_mod_def::GMgWV3OhtSg::NoczUKr1R6CeW2w1SmYAbg` |
| Regenerate Proxy API Key for a Region | POST | `/api/regions/{{id}}/regenerate-proxy-api-key` | `conn_mod_def::GMgWW1hNADA::BGHi_jYjSnG8OnpghLjgsg` |
| Regenerate Snapshot Manager Credentials for a Region | POST | `/api/regions/{{id}}/regenerate-snapshot-manager-credentials` | `conn_mod_def::GMgWW0FHDKA::pNPH1Z7PQ_SI5NUlOpV_GA` |
| Regenerate SSH Gateway API Key for a Region | POST | `/api/regions/{{id}}/regenerate-ssh-gateway-api-key` | `conn_mod_def::GMgWW055RNg::kgv98NduQzOM35I3MbTQnQ` |
| Update a Region Configuration | PATCH | `/api/regions/{{id}}` | `conn_mod_def::GMgWXQe01dg::zDNsKX8nRkiv9F9krKvOWA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Key | GET | `/api/api-keys/{{name}}` | `conn_mod_def::GMgWVB5IO-A::TbIpqhScTVi-BXaRi6EWGg` |
| Get the Current API Key Details | GET | `/api/api-keys/current` | `conn_mod_def::GMgWVClqNaA::dqWKKjXNR8WLhDvN518jJg` |
| List API Keys | GET | `/api/api-keys` | `conn_mod_def::GMgWVCykv2A::uQQFV4WERNqz-KZ8iXUHqw` |
| Create an API Key | POST | `/api/api-keys` | `conn_mod_def::GMgWU79qa-g::Mt5WtWk1QSOoQnR98eRxmQ` |
| Delete an API Key | DELETE | `/api/api-keys/{{name}}` | `conn_mod_def::GMgWVBZySHA::A7obZaVfSJeCDhmHLM51Sg` |
| Delete API Key for a User | DELETE | `/api/api-keys/{{userId}}/{{name}}` | `conn_mod_def::GMgWVB1ceGg::CB4kD7yMT0-epzoOQ4gpmg` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Count of Organization Invitations for the Authenticated User | GET | `/api/organizations/invitations/count` | `conn_mod_def::GMgWV_SJXzg::xrUKnhVjT7WhunkNNIPZKg` |
| List the Signed-in User's Organization Invitations | GET | `/api/organizations/invitations` | `conn_mod_def::GMgWWpLThMg::Ilv9obTBR023HgX2GmoNBw` |
| Cancel an Organization Invitation | POST | `/api/organizations/{{organizationId}}/invitations/{{invitationId}}/cancel` | `conn_mod_def::GMgWVwE4cmA::ePk_px8ARbWpTkS3YujQrA` |
| Create an Organization Invitation | POST | `/api/organizations/{{organizationId}}/invitations` | `conn_mod_def::GMgWVwi2ICg::DqqgENqdTvaugvpsSykZRg` |
| Decline an Organization Invitation | POST | `/api/organizations/invitations/{{invitationId}}/decline` | `conn_mod_def::GMgWV2g33Pg::uXBZD4AwS2iJbyP528Rgfw` |
| Update an Organization Invitation | PUT | `/api/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GMgWXAkV3gA::3AGLNGAJR6m-WlqEmloxZg` |

### OrganizationRegionQuota

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Region Quota | GET | `/api/admin/organizations/{{organizationId}}/quota/{{regionId}}/{{sandboxClass}}` | `conn_mod_def::GMgWUczb2iA::d5vnAPp4QHK9TfCacvSmtQ` |
| Create an Organization Region Quota | POST | `/api/admin/organizations/{{organizationId}}/quota/{{regionId}}` | `conn_mod_def::GMgWUV0rFCA::SHp-BjqmRneBE37Er8pTvA` |
| Delete Organization Region Quota | DELETE | `/api/admin/organizations/{{organizationId}}/quota/{{regionId}}/{{sandboxClass}}` | `conn_mod_def::GMgWUcP7mtA::nqA4BW8gR426HYyqWh9Svw` |
| Update an Organization Region Quota | PATCH | `/api/admin/organizations/{{organizationId}}/quota/{{regionId}}` | `conn_mod_def::GMgWU7Xal2A::DGcghMegQwKANPzFnkKFWg` |
| Update an Organization Region Quota | PATCH | `/api/organizations/{{organizationId}}/quota/{{regionId}}` | `conn_mod_def::GMgWXKJ0m7g::8UkBNtkeQH6T-WiYz5s4PQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by ID | GET | `/api/admin/users/{{id}}` | `conn_mod_def::GMgWUt9sNnA::SPuTf6xVSQqaZvkLvoo7yA` |
| Get the Signed-in User Profile | GET | `/api/users/me` | `conn_mod_def::GMgWZalK9uA::Tv197NNvRZiu8GQFoms0UQ` |
| List All Users | GET | `/api/admin/users` | `conn_mod_def::GMgWU0C0LIA::_8HcQCEPScmAzfXEdZs-Og` |
| Create a User | POST | `/api/admin/users` | `conn_mod_def::GMgWUWSnXnA::TmuAhwRhRAKXfVgQi-YIFA` |
| Regenerate a User's Key Pair | POST | `/api/admin/users/{{id}}/regenerate-key-pair` | `conn_mod_def::GMgWU0gIvtg::AXuM1_qERFiPpHNZKwDF0w` |

### Volumes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Volume by Name | GET | `/api/volumes/by-name/{{name}}` | `conn_mod_def::GMgWZkmpIhA::4fpj15IMRO643l6Edv3tww` |
| Get Volume Details | GET | `/api/volumes/{{volumeId}}` | `conn_mod_def::GMgWZjtvHpg::A5fu-BSiQ0eUrYqN_0TSzA` |
| List Volumes | GET | `/api/volumes` | `conn_mod_def::GMgWZv8cbVA::ZiVn7TqbTfCES8EKunetNg` |
| Create a Volume | POST | `/api/volumes` | `conn_mod_def::GMgWZkbv_VA::v1fmlClFQnKC7OtgbdySXQ` |
| Delete a Volume | DELETE | `/api/volumes/{{volumeId}}` | `conn_mod_def::GMgWZnb2PXA::v4HrNCl3Sq6KUOStCRTgdw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Initialize Webhooks for an Organization | POST | `/api/admin/webhooks/organizations/{{organizationId}}/initialize` | `conn_mod_def::GMgWUszCkFA::R8YP5eyGScWjlyigACraWw` |
| Initialize Webhooks for an Organization | POST | `/api/webhooks/organizations/{{organizationId}}/initialize` | `conn_mod_def::GMgWZ2oYs8A::cKYpVPUVShS87E-pvu436Q` |
| Refresh Endpoints for an Organization | POST | `/api/webhooks/organizations/{{organizationId}}/refresh-endpoints` | `conn_mod_def::GMgWZ2CeMEA::DzZ-rJVvR6KOYIszir2wQw` |
| Send a Webhook Message to an Organization | POST | `/api/admin/webhooks/organizations/{{organizationId}}/send` | `conn_mod_def::GMgWU1OUJOA::liYVdHieQweku3T1U9avUA` |

### DockerRegistry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Docker Registry | GET | `/api/docker-registry/{{id}}` | `conn_mod_def::GMgWVI5Uyfg::BPVdOkXjR6O9ztxRwrkqZg` |
| Delete a Docker Registry | DELETE | `/api/docker-registry/{{id}}` | `conn_mod_def::GMgWVI9Qpog::9u8kVgR7Q8K-0tx44KnxdQ` |
| Set Default Registry | POST | `/api/admin/docker-registry/{{id}}/set-default` | `conn_mod_def::GMgWU06ndoA::ks-kE1X_T3auD_6CKVEpPg` |
| Update a Docker Registry | PATCH | `/api/docker-registry/{{id}}` | `conn_mod_def::GMgWVhlbDjA::j81EIdpgTJG6KpamWs_ZYA` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Details | GET | `/api/jobs/{{jobId}}` | `conn_mod_def::GMgWVnkRkrg::TVA_f1_lRGKikkmudlm54Q` |
| List Jobs for the Runner | GET | `/api/jobs` | `conn_mod_def::GMgWVpz_SAA::zqZk5hLDS5aTnW0_AOzsIQ` |

2 more Jobs actions are available through search.

This lists 90 of 179 actions. For anything not here, call `search_one_platform_actions` with platform `daytona`. The full catalog is at https://www.withone.ai/knowledge/daytona.

## When a call fails

The error comes from Daytona, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/daytona

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
