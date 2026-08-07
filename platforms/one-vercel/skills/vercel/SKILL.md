---
name: vercel
description: Vercel is a frontend cloud platform optimized for developing, previewing, and shipping high-performance web applications. It offers instant deployments, edge functions, and seamless integration with frameworks like Next.js for modern frontend teams. Read and write Vercel data through One: domains, projects, teams, deployments, accessgroups, certificates and more, 222 actions with real parameter documentation. Use whenever the user asks to look something up in Vercel, create or update a record there, or build code against the Vercel API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: vercel
  generated-from: one-knowledge-base
---

# Vercel through One

Vercel is a frontend cloud platform optimized for developing, previewing, and shipping high-performance web applications. It offers instant deployments, edge functions, and seamless integration with frameworks like Next.js for modern frontend teams.

One exposes Vercel through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `vercel` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Vercel is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Vercel account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Auth Code for a Domain | GET | `/v1/registrar/domains/{{DOMAIN}}/auth-code` | `conn_mod_def::GIi2AygkSps::97UuJMA_TAmpWcpBYm45WA` |
| Get Information for a Single Domain | GET | `/v5/domains/{{domain}}` | `conn_mod_def::GIi1-Cs_dik::FRJsr0dYTwuunLt-jm6Vew` |
| List All Domains | GET | `/v5/domains` | `conn_mod_def::GIi1-Xh7fi8::VOxV7ZtZTOOeY306BxFwoQ` |
| Add a Domain to Vercel | POST | `/v7/domains` | `conn_mod_def::GIi1-pzs8tg::5jBRc2aLTUeU6pLGHL4cGg` |
| Buy a Domain | POST | `/v1/registrar/domains/{{domain}}/buy` | `conn_mod_def::GIi2BXHXwno::N8Ny060NR6ylA0gnbjr2-A` |
| Buy Multiple Domains | POST | `/v1/registrar/domains/buy` | `conn_mod_def::GIi2B3pvJE0::etnrVClJTIqOLFLgiVD3CQ` |
| Remove a Domain by Name | DELETE | `/v6/domains/{{domain}}` | `conn_mod_def::GIi1_CsQlfY::Z15mPIUlQFyDgp0hZxAPPw` |
| Renew a Domain | POST | `/v1/registrar/domains/{{DOMAIN}}/renew` | `conn_mod_def::GIi2CrIK1_I::HlD9JVFRRR-ZT7xgt49DSA` |
| Transfer-in a Domain | POST | `/v1/registrar/domains/{{domain}}/transfer` | `conn_mod_def::GIi2CGPeq68::pgNSH87yT-Gjlr3GWImDKA` |
| Update a Domain's Nameservers | PATCH | `/v1/registrar/domains/{{DOMAIN}}/nameservers` | `conn_mod_def::GIi2DhoEaqw::NS96m4ezR_OdMCbqGKFCgw` |
| Update Auto-Renew Setting for a Domain | PATCH | `/v1/registrar/domains/{{DOMAIN}}/auto-renew` | `conn_mod_def::GIi2DOjHApU::1-bTxUxnRhKVJ2WXSdAagg` |
| Update or Move a Domain | PATCH | `/v3/domains/{{domain}}` | `conn_mod_def::GIi1-81rgFU::sKQEwBpzQQe-2awbQV7USw` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project by ID or Name | GET | `/v9/projects/{{idOrName}}` | `conn_mod_def::GIi2fCJ_1-I::_PI06QqYQryNQq5moNT93w` |
| List Projects | GET | `/v10/projects` | `conn_mod_def::GIi2eAZ5wsc::9YW3-ETsTJ6KD_Tg41KmtA` |
| Configure Static IPs for a Project | PATCH | `/v1/projects/{{IDORNAME}}/shared-connect-links` | `conn_mod_def::GIi136gY_m8::ANblyNJRTUOVNS2SYHlEGQ` |
| Create a New Project | POST | `/v11/projects` | `conn_mod_def::GIi2endVvxY::4QRYvqrsShinBQfxYdpIMA` |
| Delete a Project | DELETE | `/v9/projects/{{idOrName}}` | `conn_mod_def::GIi2fjo2MYY::lmMYuyMtSBKilocIu8-n4A` |
| Pause a Project | POST | `/v1/projects/{{projectId}}/pause` | `conn_mod_def::GIi2lfhjBYk::p0IJQIRXSv2lQufWqf38Yw` |
| Unpause a Project | POST | `/v1/projects/{{projectId}}/unpause` | `conn_mod_def::GIi2lwDlI_U::p_5FOJwbQnqaGbeztHRSaQ` |
| Update a Project | PATCH | `/v9/projects/{{IDORNAME}}` | `conn_mod_def::GIi2fd4QuMY::91EIPBamQw63jtaYTuo88g` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/v2/teams/{{teamId}}` | `conn_mod_def::GIi2uYK8Ee0::ACuUDPR6TiqJnu04Nn7PMw` |
| List All Teams | GET | `/v2/teams` | `conn_mod_def::GIi2v42gabE::P7RAUp3hTZG7u6PTVoh1qQ` |
| Create a Team | POST | `/v1/teams` | `conn_mod_def::GIi2wAawVcc::P0c186nhSMimvScXihu8JA` |
| Delete a Team | DELETE | `/v1/teams/{{TEAMID}}` | `conn_mod_def::GIi2wWw5I5E::iGakV8BERViWozkwV-HdHA` |
| Join a Team | POST | `/v1/teams/{{TEAMID}}/members/teams/join` | `conn_mod_def::GIi2s8ti6cY::0XdeSQknToOGpauBefeyOw` |
| Request Access to a Team | POST | `/v1/teams/{{TEAMID}}/request` | `conn_mod_def::GIi2skuZt1U::3mvgSqn_TkCkqr7lZKel3A` |
| Update a Team | PATCH | `/v2/teams/{{TEAMID}}` | `conn_mod_def::GIi2vDzYJqY::YGPAnTq8So6hV-ga1KnPaw` |

### Deployments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deployment by ID or URL | GET | `/v13/deployments/{{idOrUrl}}` | `conn_mod_def::GIi15DgMrtk::4sacesKzT3abQ63_h7ZSfw` |
| List Deployments | GET | `/v6/deployments` | `conn_mod_def::GIi17kil9fg::kaZoRT0QRxqVpX1tYGHupQ` |
| Cancel a Deployment | PATCH | `/v12/deployments/{{id}}/cancel` | `conn_mod_def::GIi16hNm7sk::l0_GtG4NQlWauEjtL-_m3A` |
| Create a New Deployment | POST | `/v13/deployments` | `conn_mod_def::GIi152aO03U::KTvTF_0ZTaS3tObzavwy0g` |
| Delete a Deployment | DELETE | `/v13/deployments/{{id}}` | `conn_mod_def::GIi17sIUy0w::lzJcGZomQKir3ysXnoQtKw` |

### AccessGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Access Groups | GET | `/v1/access-groups` | `conn_mod_def::GIi1upF3YbU::8tSlISYiQuCcRPgdf41y4g` |
| Read an Access Group | GET | `/v1/access-groups/{{idOrName}}` | `conn_mod_def::GIi1t_sQ7KQ::kWWO2HZrRcyk4PP8GceSww` |
| Create an Access Group | POST | `/v1/access-groups` | `conn_mod_def::GIi1uvjbqtM::wwomcoBRQcWnihtjJaGpcw` |
| Delete an Access Group | DELETE | `/v1/access-groups/{{idOrName}}` | `conn_mod_def::GIi1uYI0-AU::lQWKZDYBRFmDx1MqrN3_NQ` |
| Update an Access Group | POST | `/v1/access-groups/{{idOrName}}` | `conn_mod_def::GIi1uLxOvHQ::htXgg5k5S52e8jEhVOwV0g` |

### Certificates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Certificate by ID | GET | `/v8/certs/{{id}}` | `conn_mod_def::GIi104WvwmE::nsZ3GM1jQA2CyEoJld7O7w` |
| List Certificates | GET | `/certs` | `conn_mod_def::GIi2QV6Hkgg::7NKmBxIfQD-0AF9U-9gRjA` |
| Issue a New Certificate | POST | `/v8/certs` | `conn_mod_def::GIi11XgYtD8::hwg1WdHaSUiwI2XXfvwgng` |
| Remove a Certificate | DELETE | `/v8/certs/{{id}}` | `conn_mod_def::GIi11EjXKE0::leHuNqlSTsGuKCvr79skXA` |
| Upload a Certificate | PUT | `/v8/certs` | `conn_mod_def::GIi11x5k5Bc::FUk03E7zT6WIxLKqI15qUw` |

### Drains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Drain by ID | GET | `/v1/drains/{{id}}` | `conn_mod_def::GIi2FYf1BRg::bktSdcnnQba79dIKC13ShQ` |
| List Drains | GET | `/v1/drains` | `conn_mod_def::GIi2EfpD4BM::RpuKlnNBRiCZXR-4PGyLsA` |
| Create a New Drain | POST | `/v1/drains` | `conn_mod_def::GIi2E3rQBJE::ETC3TkFzRba6Al5qYA-Xbw` |
| Delete a Specific Drain | DELETE | `/v1/drains/{{id}}` | `conn_mod_def::GIi2GFO8nmQ::SUtLQbhyRuC4ELW6sgsuIQ` |
| Update a Drain | PATCH | `/v1/drains/{{id}}` | `conn_mod_def::GIi2F3TZkTw::xlkOSD7nQiCTCwmNj3uTmg` |

### EdgeCache

| Action | Method | Path | Action id |
|---|---|---|---|
| Dangerously Delete Edge Cache by Source Images | POST | `/v1/edge-cache/dangerously-delete-by-src-images` | `conn_mod_def::GIi2Hct3TuE::J4_9tbh9T4mAjQB2BWsFBg` |
| Dangerously Delete Edge Cache Entries by Tag | POST | `/v1/edge-cache/dangerously-delete-by-tags` | `conn_mod_def::GIi2GxGt-X4::kUWhGQkoS4yQNadU5adsXg` |
| Invalidate Edge Cache by Source Images | POST | `/v1/edge-cache/invalidate-by-src-images` | `conn_mod_def::GIi2HVJZy5k::0_BtzyUPRuyJqYPtNMQfIQ` |
| Invalidate Edge Cache by Tags | POST | `/v1/edge-cache/invalidate-by-tags` | `conn_mod_def::GIi2Gf6jh9w::Iacl0iQcSty6gWwi09sM1Q` |

### ProjectDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Domains | GET | `/v9/projects/{{IDORNAME}}/domains` | `conn_mod_def::GIi2f3cp1OI::wwNkzA2RQci9MxtVqNX_Ew` |
| Add a Domain to a Project | POST | `/v10/projects/{{idOrName}}/domains` | `conn_mod_def::GIi2hGo8nDk::75BzicVrSwqGaf8elHBP_g` |
| Remove a Domain from a Project | DELETE | `/v9/projects/{{idOrName}}/domains/{{domain}}` | `conn_mod_def::GIi2gzb_W1g::d7gfotuXRdOa5FZalbnbZQ` |
| Verify a Project Domain | POST | `/v9/projects/{{idOrName}}/domains/{{domain}}/verify` | `conn_mod_def::GIi2hsa3g6A::FKF8q1kpQmCEYwv4lLsQ3g` |

### BulkRedirects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Bulk Redirects | GET | `/v1/bulk-redirects` | `conn_mod_def::GIi1yyxNe-U::N4zWPB2PRrCjtPxjv0euUw` |
| Delete Project-Level Redirects | DELETE | `/v1/bulk-redirects` | `conn_mod_def::GIi1z6TVKiE::1FZIi55lT-CBm7HRVi0Azw` |
| Edit a Project's Redirect | PATCH | `/v1/bulk-redirects` | `conn_mod_def::GIi1zcl4jBI::8SCiQhRyQjmzu78M7iZm6Q` |
| Restore Staged Project-Level Redirects to Production Version | POST | `/v1/bulk-redirects/restore` | `conn_mod_def::GIi10QTjg4E::wkEvXlhXSXWpj4zvAgI7aQ` |

### EdgeConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Edge Config | GET | `/v1/edge-config/{{EDGECONFIGID}}` | `conn_mod_def::GIi2IUYBefw::B8iy4YGnTpaqLvIYsQoGAw` |
| Create an Edge Config | POST | `/v1/edge-config` | `conn_mod_def::GIi2ICKmU94::-AbNHE0rTmyL-QWg8vKpmQ` |
| Delete an Edge Config | DELETE | `/v1/edge-config/{{edgeConfigId}}` | `conn_mod_def::GIi2Ivne8uE::wrSO_ug-TWCt2dP8_dlzTw` |
| Update an Edge Config | PUT | `/v1/edge-config/{{EDGECONFIGID}}` | `conn_mod_def::GIi2IaD9SJA::cJHqF2LPSbi-xvSYlYfHJQ` |

### EdgeConfigSchema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Edge Config's Schema | GET | `/v1/edge-config/{{EDGECONFIGID}}/schema` | `conn_mod_def::GIi2JsIJQps::m5b3tUmfQ9i8o2Wa7-_gqA` |
| Delete an Edge Config's Schema | DELETE | `/v1/edge-config/{{EDGECONFIGID}}/schema` | `conn_mod_def::GIi2KJXAOJM::KxiQSFkESEaUv3SpNMH8hQ` |
| Update an Edge Config's Schema | POST | `/v1/edge-config/{{EDGECONFIGID}}/schema` | `conn_mod_def::GIi2J6cFQEU::AbeKuyvzTWOkSVTAsQBWIA` |

### EnvironmentVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Shared Environment Variables | POST | `/v1/env` | `conn_mod_def::GIi2M-qf-iY::TgwiuNLhTRScJ8LpVWnZCg` |
| Delete Shared Environment Variables | DELETE | `/v1/env` | `conn_mod_def::GIi2NjIOtTM::isykn1eAQPe7R-ORUzqp7Q` |
| Update Shared Environment Variables | PATCH | `/v1/env` | `conn_mod_def::GIi2NVX29VM::96PvxLenRQWMT2jOXnhHNA` |

### Aliases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Alias | GET | `/v4/aliases/{{idOrAlias}}` | `conn_mod_def::GIi1wBupwRU::UOFJnVHwRSWSU17ZknTV5w` |
| List Aliases | GET | `/v4/aliases` | `conn_mod_def::GIi1v6s0EyE::fbgL4FWwSJid39oYcLxJqQ` |
| Delete an Alias by ID | DELETE | `/v2/aliases/{{aliasId}}` | `conn_mod_def::GIi1wIf1p64::p3ZACtAYTTWBMH19fgXISw` |

### DomainDnsRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Domain's DNS Records | GET | `/v4/domains/{{DOMAIN}}/records` | `conn_mod_def::GIi18AWUvwU::AgxJSFuySryK7os_1cAG_A` |
| Create a Domain DNS Record | POST | `/v2/domains/{{DOMAIN}}/records` | `conn_mod_def::GIi18Tvu5R4::T0EsdygCQfKrWvXQ6_T7ig` |
| Delete a Domain's DNS Record | DELETE | `/v2/domains/{{domain}}/records/{{recordId}}` | `conn_mod_def::GIi181PnD3g::QN_iIFM6T2G7jYLAfpON3A` |

### LogDrains

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Log Drains (Deprecated) | GET | `/v1/log-drains` | `conn_mod_def::GIi2UbG9zYs::EdipPluoT0C-tv0_5JNlAg` |
| Create a Configurable Log Drain (Deprecated) | POST | `/v1/log-drains` | `conn_mod_def::GIi2VIXhey0::9aUVNk5LTrC0Z6kj1P86ZA` |
| Delete a Configurable Log Drain | DELETE | `/v1/log-drains/{{id}}` | `conn_mod_def::GIi2UETZJdc::T5tR9fHkRWezLs6YicwNwg` |

### ProjectDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Domain | GET | `/v9/projects/{{idOrName}}/domains/{{domain}}` | `conn_mod_def::GIi2gJTUmrM::ZMQ4FMqwT32PEOgTvOOxcw` |
| Move a Project Domain | POST | `/v1/projects/{{idOrName}}/domains/{{domain}}/move` | `conn_mod_def::GIi2hNSACmY::Mdh-D6ShR36DfXMuerZOKg` |
| Update a Project Domain | PATCH | `/v9/projects/{{IDORNAME}}/domains/{{DOMAIN}}` | `conn_mod_def::GIi2glSQOP4::Xs1Ns8d_TWCEFHKhiPx03w` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/v1/webhooks` | `conn_mod_def::GIi2xkMMQXg::IMHysdkaQNiWgEQ4MmII1w` |
| Create a Webhook | POST | `/v1/webhooks` | `conn_mod_def::GIi2x_zyRtE::b1bRMfqgRNmlOeCn-OwGRw` |
| Delete a Webhook | DELETE | `/v1/webhooks/{{id}}` | `conn_mod_def::GIi2yVXLL2M::K1v0N3esRPKXSOMPUa7Mxw` |

### Artifacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Cache Artifact | GET | `/v8/artifacts/{{hash}}` | `conn_mod_def::GIi1whlJPPs::HDfsmrR1SWSynUqLgQ5igg` |
| Query Artifact Information | POST | `/v8/artifacts` | `conn_mod_def::GIi1xASBL8s::7DHA1ov8TbC5EwI0nlMccg` |
| Upload a Cache Artifact | PUT | `/v8/artifacts/{{hash}}` | `conn_mod_def::GIi1woW_Ajs::TLfEd1L6QDO8NLNnJCqIVA` |

### RollingRelease

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Rolling Release Information | GET | `/v1/projects/{{IDORNAME}}/rolling-release` | `conn_mod_def::GIi2nceq1VQ::LpFl044DSQK49tdAcxXqeA` |
| Approve the Next Rolling Release Stage for a Project | POST | `/v1/projects/{{IDORNAME}}/rolling-release/approve-stage` | `conn_mod_def::GIi2ni5tz-Q::aY2ZTHL7QEmtoIVZLe5oqA` |
| Complete a Project's Rolling Release | POST | `/v1/projects/{{IDORNAME}}/rolling-release/complete` | `conn_mod_def::GIi2oXdnj5I::-zWW1PS5SQKwflJtWqwZHw` |

This lists 90 of 222 actions. For anything not here, call `search_one_platform_actions` with platform `vercel`. The full catalog is at https://www.withone.ai/knowledge/vercel.

## When a call fails

The error comes from Vercel, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/vercel

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
