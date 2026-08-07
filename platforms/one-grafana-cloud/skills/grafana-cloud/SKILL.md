---
name: grafana-cloud
description: Grafana Cloud is a fully managed observability platform that provides hosted monitoring, logging, tracing, alerting, and incident response tools built on the Grafana ecosystem, enabling scalable end-to-end visibility without managing infrastructure. Read and write Grafana Cloud data through One: stacks, instances, accesspolicies, tokens, organizationmembers, instanceplugins and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in Grafana Cloud, create or update a record there, or build code against the Grafana Cloud API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: grafana-cloud
  generated-from: one-knowledge-base
---

# Grafana Cloud through One

Grafana Cloud is a fully managed observability platform that provides hosted monitoring, logging, tracing, alerting, and incident response tools built on the Grafana ecosystem, enabling scalable end-to-end visibility without managing infrastructure.

One exposes Grafana Cloud through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `grafana-cloud` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Grafana Cloud is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Grafana Cloud account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Stacks

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Stack's Readiness | GET | `/api/v1/stacks/{{idOrSlug}}/readiness` | `conn_mod_def::GK1B72TGx8A::LL__VmVAQb2bhMMSlcoMxA` |
| Get a Stack | GET | `/api/v1/stacks/{{idOrSlug}}` | `conn_mod_def::GK1B8CrEsYA::IomHkyzKT0Omd1YFWBYZpg` |
| List Stacks | GET | `/api/v1/stacks` | `conn_mod_def::GK1B8C1i57g::wFSjaLikRuSdFspGri0i4A` |
| Check Stack Slug | POST | `/api/v1/stacks/checkUrl` | `conn_mod_def::GK1B73dOIKA::TROnwIF1Ry64nuba2Dc-9w` |
| Create Stack | POST | `/api/v1/stacks` | `conn_mod_def::GK1B72GOk6g::Y0Rll1uqSgiZjcyzphBYnQ` |
| Delete a Stack | DELETE | `/api/v1/stacks/{{idOrSlug}}` | `conn_mod_def::GK1B73fsMXg::27RN-OkRQRGOgzdesGZR2Q` |
| Update a Stack | POST | `/api/v1/stacks/{{idOrSlug}}` | `conn_mod_def::GK1B8DQhVJA::PBYOPfh-RKCkk069fHDVQA` |

### Instances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Instance | GET | `/api/instances/{{instanceId}}` | `conn_mod_def::GK1B6tDNTFA::MPsVkx6fRFefulWyojy_kQ` |
| Get an Instance's Readiness Status | GET | `/api/instances/{{instanceId}}/readiness` | `conn_mod_def::GK1B7E3sEhA::i0th6MXWTrqGC9GpLhg8iA` |
| List Instances | GET | `/api/instances` | `conn_mod_def::GK1B6aN1puA::W46iCe4BSmuvgW1uqGaGjA` |
| Create a New Instance | POST | `/api/instances` | `conn_mod_def::GK1B6HJDctg::3dgsBBtETG6-YYOZIFOzdw` |
| Delete an Instance | DELETE | `/api/instances/{{instanceId}}` | `conn_mod_def::GK1B6U00L2g::jiCKrduzSGKE7uXeOqniEQ` |
| Update an Instance | POST | `/api/instances/{{instanceId}}` | `conn_mod_def::GK1B7FprQkA::zHVIa5HXQTq4BLxjhZ-_sw` |

### AccessPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Access Policy | GET | `/api/v1/accesspolicies/{{id}}` | `conn_mod_def::GK1B56EB0qA::gfKLZZEWSC2LoBYws_85Bw` |
| List Access Policies | GET | `/api/v1/accesspolicies` | `conn_mod_def::GK1B59YvJlg::h2VDjIUfT5qYWRexw0silA` |
| Create a New Access Policy | POST | `/api/v1/accesspolicies` | `conn_mod_def::GK1B5709Asg::fMkBfTRjT6yqDCAA_nUPyg` |
| Delete an Access Policy | DELETE | `/api/v1/accesspolicies/{{id}}` | `conn_mod_def::GK1B56ZQLOg::PILCNIt5Q5-qDtd0Zj2szQ` |
| Update an Access Policy | POST | `/api/v1/accesspolicies/{{id}}` | `conn_mod_def::GK1B6IBNqAg::C6Sq3r1KTnCsOdde-HINLw` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Token | GET | `/api/v1/tokens/{{id}}` | `conn_mod_def::GK1B8L8Wb2g::TiRnnLnjRwGNK8doybbtSg` |
| List Tokens | GET | `/api/v1/tokens` | `conn_mod_def::GK1B8SximUg::OHLYQPIgQ7Och2W3b5WuYA` |
| Create a New Token | POST | `/api/v1/tokens` | `conn_mod_def::GK1B8DPNHfg::JLvmr2LPT4GUK2Ly93sEzQ` |
| Delete a Token | DELETE | `/api/v1/tokens/{{id}}` | `conn_mod_def::GK1B8Cr87_A::_CHHm4YXQkeB5tVde72fPQ` |
| Update a Token | POST | `/api/v1/tokens/{{id}}` | `conn_mod_def::GK1B8MZ4QGA::gYwiNSBbS0SJW1YY6IgRoA` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Member | GET | `/api/orgs/{{slugOrId}}/members/{{usernameOrId}}` | `conn_mod_def::GK1B7f3VNUg::5ogE2oLnR9ScbZOy_UGBBA` |
| List an Organization's Members | GET | `/api/orgs/{{slugOrId}}/members` | `conn_mod_def::GK1B7i2TGfg::WX6QRyAcQ9iN92BOcD2bxA` |
| Add a Member to an Organization | POST | `/api/orgs/{{slugOrId}}/members` | `conn_mod_def::GK1B7gfnzmA::Hu7NeUeDSJiYxbqygrdH7Q` |
| Add or Update an Organization Member by Slug/ID and Username/ID | POST | `/api/orgs/{{slugOrId}}/members/{{usernameOrId}}` | `conn_mod_def::GK1B7h-DL9g::3s2M69iDRyGuc42fFeeE2w` |
| Delete an Organization Member | DELETE | `/api/orgs/{{slugOrId}}/members/{{usernameOrId}}` | `conn_mod_def::GK1B7Tm9zmg::yAFIJ5XLQxGLN62yDf-OaA` |

### InstancePlugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Instance Plugin | GET | `/api/instances/{{instanceId}}/plugins/{{pluginSlugOrId}}` | `conn_mod_def::GK1B6rkk3wA::7LNBepb4Q-yJKBOr9tB7tw` |
| List an Instance's Plugins | GET | `/api/instances/{{instanceId}}/plugins` | `conn_mod_def::GK1B6s5Uk8A::WJVABJYbQVecfeMr3z2_kg` |
| Delete an Instance Plugin | DELETE | `/api/instances/{{instanceId}}/plugins/{{pluginSlugOrId}}` | `conn_mod_def::GK1B6ipH8wg::4BAiKG7sRZaMADx-fjcHgw` |
| Install a Plugin for an Instance | POST | `/api/instances/{{instanceId}}/plugins` | `conn_mod_def::GK1B7KG5vrA::QvaKuNWJRQeNIHO_IFnLMQ` |
| Install or Update a Plugin for an Instance | POST | `/api/instances/{{instanceId}}/plugins/{{pluginSlugOrId}}` | `conn_mod_def::GK1B7IBIQIA::2A6VPHFaSpKknCfvWiHJOQ` |

### ServiceAccountTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Account's Tokens on a Grafana Instance | GET | `/api/instances/{{instanceId}}/api/serviceaccounts/{{serviceAccountId}}/tokens` | `conn_mod_def::GK1B6R28SLA::zOAMIcjYSba6V6E16mwL3g` |
| Create a Service Account Token for an Instance Service Account | POST | `/api/instances/{{instanceId}}/api/serviceaccounts/{{serviceAccountId}}/tokens` | `conn_mod_def::GK1B6IALuSA::I28ISx4NRZiHmnwZElp6Gg` |
| Delete a Service Account Token on a Grafana Instance | DELETE | `/api/instances/{{instanceId}}/api/serviceaccounts/{{serviceAccountId}}/tokens/{{tokenId}}` | `conn_mod_def::GK1B6R4sa7g::cb-TLJkeQ1ijlNMMyxdwqw` |

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Instance Service Account | GET | `/api/instances/{{instanceId}}/api/serviceaccounts/{{serviceAccountId}}` | `conn_mod_def::GK1B6rWtdzg::r3Bp3ZEETPars58Sels3eQ` |
| Create a Service Account for a Grafana Instance | POST | `/api/instances/{{instanceId}}/api/serviceaccounts` | `conn_mod_def::GK1B6GsMqYA::K5pOXoAdRZe5Bs4MbwNicw` |
| Delete a Grafana Instance Service Account | DELETE | `/api/instances/{{instanceId}}/api/serviceaccounts/{{serviceAccountId}}` | `conn_mod_def::GK1B6Hg9tPA::TWPzI3l-R_qfeyXbbAu40A` |

### StackRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Closest Stack Region | GET | `/api/stack-regions/closest` | `conn_mod_def::GK1B7sqeDwA::gBLwOUcxTAeE92ibtO1dpg` |
| List Stack Regions | GET | `/api/stack-regions` | `conn_mod_def::GK1B75uGTGg::V5aPd0rrRcuvpY2fulDcpQ` |

### OrgSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Org's Settings | GET | `/api/orgs/{{slugOrId}}/settings` | `conn_mod_def::GK1B7Rzwj6A::hEMOlpDySw6vUwJGLy5UyA` |
| Update an Org's Settings | POST | `/api/orgs/{{slugOrId}}/settings` | `conn_mod_def::GK1B7tlyfbg::-BpO_JgDT9Gk3nI8aASEKA` |

### InstanceConnectivityInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Instance's Connectivity Information | GET | `/api/instances/{{instanceId}}/connections` | `conn_mod_def::GK1B68HXuBA::JPer8sckRwWsjk36snDiwg` |

### CloudAccessPolicyApiConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cloud Access Policy API Configuration | GET | `/api/v1/accesspolicies/config` | `conn_mod_def::GK1B571_asg::EbXkeHBEQcGSDdBzwDY53Q` |

### InstanceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Instance's Active Users | GET | `/api/instances/{{instanceId}}/users` | `conn_mod_def::GK1B7GsVLHg::QuXiF0N5TRyyyME773eoGQ` |

### OrgVisibility

| Action | Method | Path | Action id |
|---|---|---|---|
| Check an Org's Visibility | GET | `/api/orgs/{{slugOrId}}/check-visibility` | `conn_mod_def::GK1B7SOleuA::8pKq_UcnQceYlzXbxBrf4A` |

### OrgStackRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Org Stack Regions | GET | `/api/org-stack-regions` | `conn_mod_def::GK1B7Sgnq4g::oJ0J9yZjQeintlITTfk_RA` |

### OrgInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Org's Instances | GET | `/api/orgs/{{orgSlug}}/instances` | `conn_mod_def::GK1B7WqBR_A::iDlkEjlaTAizCnelzrvNMw` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/api/orgs/{{slugOrId}}` | `conn_mod_def::GK1B7ev_kJg::wbd-DWRgSt-IqQ1uoxMk0w` |

### Plugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin by Slug or ID | GET | `/api/plugins/{{slug}}` | `conn_mod_def::GK1B7sakmkA::EUOdyDczTUmYXwZtaWpXDQ` |

### BilledUsageHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Org's Billed Usage History | GET | `/api/orgs/{{orgSlugOrId}}/billed-usage-history` | `conn_mod_def::GK1B7sh8kng::CEijW7-2QhyU60h2sYlOHA` |

### BilledUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Org's Billed Usage for a Specific Month | GET | `/api/orgs/{{orgSlugOrId}}/billed-usage` | `conn_mod_def::GK1B7s9h8_g::xZp7P0woTj2SKEetVyfXWA` |

## When a call fails

The error comes from Grafana Cloud, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/grafana-cloud

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
