---
name: netlify
description: Netlify is a frontend-first cloud platform that lets developers seamlessly build, deploy, preview, and scale modern web applications using Git-based workflows, serverless functions, edge caching, and a global CDN—empowering teams to ship fast, secure, and high-performance sites at scale. Read and write Netlify data through One: sites, deploys, agentrunners, hooks, trafficsplits, accounts and more, 147 actions with real parameter documentation. Use whenever the user asks to look something up in Netlify, create or update a record there, or build code against the Netlify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: netlify
  generated-from: one-knowledge-base
---

# Netlify through One

Netlify is a frontend-first cloud platform that lets developers seamlessly build, deploy, preview, and scale modern web applications using Git-based workflows, serverless functions, edge caching, and a global CDN—empowering teams to ship fast, secure, and high-performance sites at scale.

One exposes Netlify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `netlify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Netlify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Netlify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site | GET | `/sites/{{siteId}}` | `conn_mod_def::GJ5BP3MVSVU::cPHqsYEDTNCklvPq6dSOGg` |
| Get a Site’s Metadata | GET | `/sites/{{siteId}}/metadata` | `conn_mod_def::GJ5BPMhEr_w::VJYypWfqQbyocUquDBowvQ` |
| List an Account’s Sites | GET | `/{{accountSlug}}/sites` | `conn_mod_def::GJ5BP4U4r20::-TzZoanlQZe9PHZi00RULQ` |
| List Sites | GET | `/api/v1/sites` | `conn_mod_def::GJ5BP3pIYwA::sqd9N8qzRMGEmGLiLpihQg` |
| Configure DNS for a Site | PUT | `/sites/{{siteId}}/dns` | `conn_mod_def::GJ5BOPS3W5s::NTMdJ8OwSmqicMqvdKO2Ow` |
| Create a Site | POST | `/api/v1/sites` | `conn_mod_def::GJ5BPtjXdnc::PGQCpw4CSsyX842UHit26Q` |
| Create a Site in a Team (Account) | POST | `/{{accountSlug}}/sites` | `conn_mod_def::GJ5BPuh05iU::pjgiz81eSDiRv9-oJ-ZCGw` |
| Delete a Site | DELETE | `/sites/{{siteId}}` | `conn_mod_def::GJ5BPviJMK8::avmM_QygRau0rwZ4qY8cMw` |
| Disable a Site | PUT | `/sites/{{siteId}}/disable` | `conn_mod_def::GJ5BPtKxVxY::K9LAHER6R5CRLd9Sai1xLw` |
| Enable a Site | PUT | `/sites/{{siteId}}/enable` | `conn_mod_def::GJ5BP6YS5lQ::xT9JZYXaTWS4ShOY43eAjA` |
| Roll Back a Site’s Deploy | PUT | `/sites/{{siteId}}/rollback` | `conn_mod_def::GJ5BNZXSnxg::qu8MoaigRQSi9phXDYtGqQ` |
| Unlink a Site’s Repository | PUT | `/sites/{{siteId}}/unlink_repo` | `conn_mod_def::GJ5BP24FYPI::p8z0pnphTjqemvW8aRd0_Q` |

2 more Sites actions are available through search.

### Deploys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deploy | GET | `/deploys/{{deployId}}` | `conn_mod_def::GJ5BNHj0f6U::1neMKLL4SYWcUf1z4n7Oug` |
| Get a Site Deploy | GET | `/sites/{{siteId}}/deploys/{{deployId}}` | `conn_mod_def::GJ5BNH9AY5g::Xulk3DVFT8y7RAVHbdPaYQ` |
| List a Site’s Deploys | GET | `/sites/{{siteId}}/deploys` | `conn_mod_def::GJ5BNhBR864::LQxDsUUZTpCw4g-A0puhng` |
| Cancel a Site Deploy | POST | `/deploys/{{deployId}}/cancel` | `conn_mod_def::GJ5BM7gBa78::2lDXWxoLSAO_VENjKkVP0A` |
| Create a Site Deploy | POST | `/sites/{{siteId}}/deploys` | `conn_mod_def::GJ5BNKCPGL0::BleJube2SSi0hNuBEglgVQ` |
| Delete a Deploy | DELETE | `/deploys/{{deployId}}` | `conn_mod_def::GJ5BNHU-Ft0::cH7TSlbZTXSd9nJUnwCaIw` |
| Delete a Site Deploy | DELETE | `/sites/{{siteId}}/deploys/{{deployId}}` | `conn_mod_def::GJ5BNSE2_DE::8E5FFCPpQrCRcD-7I9OV3Q` |
| Lock a Deploy | POST | `/deploys/{{deployId}}/lock` | `conn_mod_def::GJ5BNbTuKW4::jDcmmfhCSZWaJI6A9GhSxw` |
| Restore a Site Deploy | POST | `/sites/{{siteId}}/deploys/{{deployId}}/restore` | `conn_mod_def::GJ5BNZRyilE::xaNbWnXxTxKiWLQpNqzxvA` |
| Unlock a Deploy | POST | `/deploys/{{deployId}}/unlock` | `conn_mod_def::GJ5BNaB6Sdw::C8YrxmPQTlONK64_dlL8mg` |
| Update a Site’s Deploy | PUT | `/sites/{{siteId}}/deploys/{{deployId}}` | `conn_mod_def::GJ5BNq94u40::u6VYXPTeRg-Yi1Jefwi6Yw` |

### AgentRunners

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Runner | GET | `/agent_runners/{{agentRunnerId}}` | `conn_mod_def::GJ5BL45z_co::4A1n-GvBRQyvpwRO0C9vUg` |
| List Agent Runners | GET | `/agent_runners` | `conn_mod_def::GJ5BL-u-JCM::5FsDTREHTiyl9tWEgOmgjA` |
| Archive an Agent Runner | POST | `/agent_runners/{{agentRunnerId}}/archive` | `conn_mod_def::GJ5BLqy5vx8::UatZv6ZFQhePCku0Imb2IQ` |
| Create an Agent Runner | POST | `/api/v1/agent_runners` | `conn_mod_def::GJ5BLuHS_ag::7ksCd2PySwCaV5LRej-m5w` |
| Delete an Agent Runner | DELETE | `/agent_runners/{{agentRunnerId}}` | `conn_mod_def::GJ5BLq0mFXA::Rdo8ajEjRheumNsyjbrBwQ` |
| Update an Agent Runner | PATCH | `/agent_runners/{{agentRunnerId}}` | `conn_mod_def::GJ5BL5dsW2I::94ZnQMn5TeqIjleaNTXf5A` |

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hook | GET | `/hooks/{{hookId}}` | `conn_mod_def::GJ5BPE_Sa5w::QDwdqN4IR6OeMs5lTNLFTQ` |
| List a Site’s Hooks | GET | `/hooks` | `conn_mod_def::GJ5BPFnG6eQ::vHFDWs-HREqlfU_mJ6fptQ` |
| Create a Hook for a Site | POST | `/hooks` | `conn_mod_def::GJ5BO9q5Tkc::qULS1xsATvi3QHBUkD2urg` |
| Delete a Hook | DELETE | `/hooks/{{hookId}}` | `conn_mod_def::GJ5BO8EiBFo::-VwmSnYdQDqtElGtDuHXBQ` |
| Enable a Hook | POST | `/hooks/{{hookId}}/enable` | `conn_mod_def::GJ5BO8-0WBw::ys3Gs5X1Tju4NMDoodryRw` |
| Update a Hook | PUT | `/hooks/{{hookId}}` | `conn_mod_def::GJ5BPFLrCmM::z8bFYYqMQEaC8MJcEQc9mQ` |

### TrafficSplits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Traffic Split Test | GET | `/sites/{{siteId}}/traffic_splits/{{splitTestId}}` | `conn_mod_def::GJ5BQVCJB3Q::zFqCZoPmRTe-0IYlq1Hcjg` |
| List a Site’s Traffic Split Tests | GET | `/sites/{{siteId}}/traffic_splits` | `conn_mod_def::GJ5BQU5XXNo::a1z9y4cKRCiRRAAuk55TXg` |
| Create a Site Traffic Split Test | POST | `/sites/{{siteId}}/traffic_splits` | `conn_mod_def::GJ5BQMlkel4::jvHeHqOCTCi3JX27Bja06A` |
| Disable a Site’s Split Test (Unpublish Traffic Split) | POST | `/sites/{{siteId}}/traffic_splits/{{splitTestId}}/unpublish` | `conn_mod_def::GJ5BQaqQ17E::TN0qCyaZSQSlzyTz2-B-Uw` |
| Enable a Site’s Traffic Split Test (Publish) | POST | `/sites/{{siteId}}/traffic_splits/{{splitTestId}}/publish` | `conn_mod_def::GJ5BQUgqKxQ::7ukQfEQzTP6gKr2ISBQl-g` |
| Update a Site’s Traffic Split Test | PUT | `/sites/{{siteId}}/traffic_splits/{{splitTestId}}` | `conn_mod_def::GJ5BQUntYgc::cKEPWTnvSN6l4ZAzru3KDQ` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account | GET | `/accounts/{{accountId}}` | `conn_mod_def::GJ5BLiajL4g::dNr87XXYQ321zmbAJQyTeA` |
| List Accounts for the Authenticated User | GET | `/accounts` | `conn_mod_def::GJ5BLjACo9w::OTWsClazRmqGBD3u9dH9Ow` |
| Cancel an Account | DELETE | `/accounts/{{accountId}}` | `conn_mod_def::GJ5BLiLk7yI::6KjoeLjnTQmQC2tP7l7CyQ` |
| Create Account | POST | `/api/v1/accounts` | `conn_mod_def::GJ5BLiS-958::IMJRZkFXRJCJycin10zaAw` |
| Update an Account | PUT | `/accounts/{{accountId}}` | `conn_mod_def::GJ5BLquMdGk::udWNOsOgSGaRfCISlJLQ4g` |

### AgentRunnerSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Runner Session | GET | `/agent_runners/{{agentRunnerId}}/sessions/{{agentRunnerSessionId}}` | `conn_mod_def::GJ5BMGhm5XA::Kj6kVLWyTwqWaUr-my6qqg` |
| List an Agent Runner’s Sessions | GET | `/agent_runners/{{agentRunnerId}}/sessions` | `conn_mod_def::GJ5BMIO4v_Y::nbdlubJqSkOD0S2NAAvk1A` |
| Create an Agent Runner Session | POST | `/agent_runners/{{agentRunnerId}}/sessions` | `conn_mod_def::GJ5BL9Gc57g::1s3_tFStQnSX8--ca9ofrw` |
| Delete an Agent Runner Session | DELETE | `/agent_runners/{{agentRunnerId}}/sessions/{{agentRunnerSessionId}}` | `conn_mod_def::GJ5BL5Nb460::GowRcikUQNqzksg7lT79dw` |
| Update an Agent Runner Session | PATCH | `/agent_runners/{{agentRunnerId}}/sessions/{{agentRunnerSessionId}}` | `conn_mod_def::GJ5BMKtMaL0::q-sCeiTVT1Wv21KO-lAz5A` |

### SiteAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Asset's Info | GET | `/sites/{{siteId}}/assets/{{assetId}}` | `conn_mod_def::GJ5BMSOq1eI::7x1YV4ZCScy9gWogpbKXUg` |
| Get a Site Asset’s Public Signature | GET | `/sites/{{siteId}}/assets/{{assetId}}/public_signature` | `conn_mod_def::GJ5BMlOnoy4::pJbhVd2cT4CmV88_yJFMGA` |
| Create a Site Asset | POST | `/sites/{{siteId}}/assets` | `conn_mod_def::GJ5BMS1WLDQ::rSBLqafSStmqrxlMCOHrqw` |
| Delete a Site Asset | DELETE | `/sites/{{siteId}}/assets/{{assetId}}` | `conn_mod_def::GJ5BMdmxTjA::c0L6AFqDSyeYMOdY9MbZiw` |
| Update a Site Asset | PUT | `/sites/{{siteId}}/assets/{{assetId}}` | `conn_mod_def::GJ5BMoN3Hvg::HanKpQgPQv68d8apwwZgPA` |

### BuildHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Build Hook | GET | `/sites/{{siteId}}/build_hooks/{{id}}` | `conn_mod_def::GJ5BNASfidU::vUYztyuBS_u6un51xhsKCQ` |
| List a Site’s Build Hooks | GET | `/sites/{{siteId}}/build_hooks` | `conn_mod_def::GJ5BM7G9PS0::0jUT_SQwQLqUBcNyBRVivg` |
| Create a Site Build Hook | POST | `/sites/{{siteId}}/build_hooks` | `conn_mod_def::GJ5BMz487UE::o_tbgWd6RMKuXFWP2agnww` |
| Delete a Site Build Hook | DELETE | `/sites/{{siteId}}/build_hooks/{{id}}` | `conn_mod_def::GJ5BMyo_-5k::64Mf9uDDR-GYrmPygoqcgw` |
| Update a Site’s Build Hook | PUT | `/sites/{{siteId}}/build_hooks/{{id}}` | `conn_mod_def::GJ5BM7Xwczs::qKqv6Lg8QA-y12J0kM1jBA` |

### DevServers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Dev Server | GET | `/sites/{{siteId}}/dev_servers/{{devServerId}}` | `conn_mod_def::GJ5BN32bmjA::bJCJtwCiRyGIYso21Jk-Wg` |
| List a Site’s Dev Servers | GET | `/sites/{{siteId}}/dev_servers` | `conn_mod_def::GJ5BN7O6nng::twQtZFtbTXuRZpoRmiWkjA` |
| Create a Site Dev Server | POST | `/sites/{{siteId}}/dev_servers` | `conn_mod_def::GJ5BN4NuDl0::KeLtGE_kTr6thGTv-42H6w` |
| Delete a Site’s Dev Servers | DELETE | `/sites/{{siteId}}/dev_servers` | `conn_mod_def::GJ5BN8Ck8DI::mEg3aHqqSqekw-08YqOyyg` |
| Update a Site Dev Server’s State | POST | `/sites/{{siteId}}/dev_servers/{{devServerId}}/state` | `conn_mod_def::GJ5BOF89PSw::3EQLChusSKqBrZkOPeNG1A` |

### DevServerHooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Dev Server Hook | GET | `/sites/{{siteId}}/dev_server_hooks/{{id}}` | `conn_mod_def::GJ5BOEmO3rU::5QLaOpP3RIaqfDMkqO8vcw` |
| List a Site’s Dev Server Hooks | GET | `/sites/{{siteId}}/dev_server_hooks` | `conn_mod_def::GJ5BOFd6R9c::8QHF3U8nS-2-tcwYniRItg` |
| Create a Site Dev Server Hook | POST | `/sites/{{siteId}}/dev_server_hooks` | `conn_mod_def::GJ5BOGJoPZA::xX0tZ6oISseD_o8254_CTA` |
| Delete a Site’s Dev Server Hook | DELETE | `/sites/{{siteId}}/dev_server_hooks/{{id}}` | `conn_mod_def::GJ5BOGww7j0::ABloXb8FRzupxccexoVy3A` |
| Update a Site’s Dev Server Hook | PUT | `/sites/{{siteId}}/dev_server_hooks/{{id}}` | `conn_mod_def::GJ5BOOZiDPY::B1uXVkFxRHKE41ezj8p17w` |

### DnsZones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a DNS Zone | GET | `/dns_zones/{{zoneId}}` | `conn_mod_def::GJ5BOb0bpEE::Sh4V_MEXQ3anQpEP_YQJ-g` |
| List DNS Zones | GET | `/dns_zones` | `conn_mod_def::GJ5BOW4QqZw::oQQ8ZvqoQZSYESsF0q1BYA` |
| Create a DNS Zone | POST | `/dns_zones` | `conn_mod_def::GJ5BOOH2-sI::H1C3zQX0TvGNao8uSn9f1A` |
| Delete a DNS Zone | DELETE | `/dns_zones/{{zoneId}}` | `conn_mod_def::GJ5BOW90TCI::-X5w3pfxQe6zd7z3HzxE_g` |
| Transfer a DNS Zone to Another Account or User | PUT | `/dns_zones/{{zoneId}}/transfer` | `conn_mod_def::GJ5BOklttOk::MY-jMyEeQs2ida3pQeobeA` |

### Builds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Build | GET | `/builds/{{buildId}}` | `conn_mod_def::GJ5BMvbxIZk::wxE5og6FT5Sob990i_8gIg` |
| List a Site’s Builds | GET | `/sites/{{siteId}}/builds` | `conn_mod_def::GJ5BMyrQ19E::P0FBHSj9Tq2cFN5le0p5jg` |
| Notify a Build's Start | POST | `/builds/{{buildId}}/start` | `conn_mod_def::GJ5BMwY0AZM::yV5JvGTeSDSpjGp6oOdSzw` |
| Run a Site Build | POST | `/sites/{{siteId}}/builds` | `conn_mod_def::GJ5BMmwM68c::IxAx0DFtR3uWo9KBAL3etw` |

### DeployKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deploy Key | GET | `/deploy_keys/{{keyId}}` | `conn_mod_def::GJ5BNwPbw0Q::F8Q9_-RBRvqHTuAuqr2Xfg` |
| List Deploy Keys | GET | `/deploy_keys` | `conn_mod_def::GJ5BN5kBGWU::ofABgZGIS3qIQMUwnagrfQ` |
| Create a Deploy Key | POST | `/api/v1/deploy_keys` | `conn_mod_def::GJ5BNuFFC5c::6GHR6Y7zTN2DNxhC0ycc1w` |
| Delete a Deploy Key | DELETE | `/deploy_keys/{{keyId}}` | `conn_mod_def::GJ5BNo-j8Cw::u0UX1c8OTwOPVfTQDtnp_w` |

### DnsRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Individual DNS Record in a DNS Zone | GET | `/dns_zones/{{zoneId}}/dns_records/{{dnsRecordId}}` | `conn_mod_def::GJ5BOkO_JXw::jNXpg2CzRvWSeQenRWHxEA` |
| List a DNS Zone’s DNS Records | GET | `/dns_zones/{{zoneId}}/dns_records` | `conn_mod_def::GJ5BOXjpNco::TBgHeTpwTtSL_bx5ipS7QQ` |
| Create a DNS Record in a DNS Zone | POST | `/dns_zones/{{zoneId}}/dns_records` | `conn_mod_def::GJ5BOQASC4A::znzONZvzRmKb2wyQXBKTgQ` |
| Delete a DNS Record in a DNS Zone | DELETE | `/dns_zones/{{zoneId}}/dns_records/{{dnsRecordId}}` | `conn_mod_def::GJ5BOOJ8e28::WoVFsrLQTJim6sC5Hqewsw` |

### AccountEnvironmentVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Environment Variable | GET | `/accounts/{{accountId}}/env/{{key}}` | `conn_mod_def::GJ5BOtaD-zw::BFkEu-guR9qT7Dec6ROcWQ` |
| List an Account’s Environment Variables | GET | `/accounts/{{accountId}}/env` | `conn_mod_def::GJ5BOsfhqAw::mp3pqIfYQFG-mowGTDPtsg` |

2 more AccountEnvironmentVariables actions are available through search.

This lists 90 of 147 actions. For anything not here, call `search_one_platform_actions` with platform `netlify`. The full catalog is at https://www.withone.ai/knowledge/netlify.

## When a call fails

The error comes from Netlify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/netlify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
