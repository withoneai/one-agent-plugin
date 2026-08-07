---
name: skyfire
description: Skyfire is a payment and identity infrastructure platform for AI agents that provides APIs for wallet-based transactions, authentication, and compliance workflows, allowing developers to enable autonomous software to pay for services, verify identity, and interact with digital commerce systems. Read and write Skyfire data through One: organizationusers, sellerservices, agents, tokens, services, agentsourceips and more, 26 actions with real parameter documentation. Use whenever the user asks to look something up in Skyfire, create or update a record there, or build code against the Skyfire API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: skyfire
  generated-from: one-knowledge-base
---

# Skyfire through One

Skyfire is a payment and identity infrastructure platform for AI agents that provides APIs for wallet-based transactions, authentication, and compliance workflows, allowing developers to enable autonomous software to pay for services, verify identity, and interact with digital commerce systems.

One exposes Skyfire through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `skyfire` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Skyfire is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Skyfire account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### OrganizationUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organization Users | GET | `/api/v1/organizations/users` | `conn_mod_def::GMSV5_7l4rg::bHJzBWAHRRqtvTi15jbkXQ` |
| Activate an Organization User | PATCH | `/api/v1/organizations/users/{{userId}}/activate` | `conn_mod_def::GMSV5LELsGQ::O7B-bK7XR0eCnYwZ8h2fOw` |
| Create Organization Users | POST | `/api/v1/organizations/users` | `conn_mod_def::GMSV5jSY6OI::OWlWBHsHTlKQBf9Jjfh7gg` |
| Create Personal Data for an Organization User | POST | `/api/v1/organizations/users/{{userId}}/personal-data` | `conn_mod_def::GMSV5VaRNgg::TI6xm4J3TtKioeF-EDvaaw` |
| Deactivate an Organization User | PATCH | `/api/v1/organizations/users/{{userId}}/deactivate` | `conn_mod_def::GMSV5LaBj74::crmNmc6hSxm8ZRsTgBSUPw` |

### SellerServices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent's Seller Service | GET | `/api/v1/agents/seller-services/{{sellerServiceId}}` | `conn_mod_def::GMSV5eoSRkI::rp7-AEfuTGm2Wec2i4A39A` |
| Activate an Agent's Seller Service | POST | `/api/v1/agents/seller-services/{{sellerServiceId}}/activate` | `conn_mod_def::GMSV5KaB7LI::Elc-m0DBQxicJUdRNExlbg` |
| Create an Agent's Seller Service | POST | `/api/v1/agents/seller-services` | `conn_mod_def::GMSV5fiwiQw::h8gvqxD_QkuDwB6WoRneAg` |
| Update an Agent's Seller Service | PATCH | `/api/v1/agents/seller-services/{{sellerServiceId}}` | `conn_mod_def::GMSV6EPS3J4::c96i6HgtRnK5FzCoTPzizA` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Agent's Services | GET | `/api/v1/directory/agents/{{agentId}}/services` | `conn_mod_def::GMSV5-X7qcI::8u9h0O0kTO6Hzbqsp69tZw` |
| Set Agent Token Version | PUT | `/api/v1/agents/token-version` | `conn_mod_def::GMSV5KS0c7Q::uYGtjG5hSzKZRoQdz3-qVA` |
| Update Agent Source IPs | PUT | `/api/v1/agents/source-ips` | `conn_mod_def::GMSV5TYS4Jg::xvlCpY82QtmKOVZqeJsIBQ` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Charge Token | POST | `/api/v1/tokens/charge` | `conn_mod_def::GMSV5LpZyno::kJHrR-AsR4eGcilesGac8w` |
| Create Tokens | POST | `/api/v1/tokens` | `conn_mod_def::GMSV5eCaBCQ::Npsh1anvRwCbEHRxDNwa0g` |
| Introspect Token | POST | `/api/v1/tokens/introspect` | `conn_mod_def::GMSV6DLMRkw::8nLBVLuMSVa5q0-BYU025g` |

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service by ID | GET | `/api/v1/directory/services/{{serviceId}}` | `conn_mod_def::GMSV5td172I::LbLtDmQoS5CkAMmADd47iQ` |
| Search Services by Tags | GET | `/api/v1/directory/services/search` | `conn_mod_def::GMSV5_oITOo::OpBmqfr_QNKq2D_Cr-83VQ` |

### AgentSourceIps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent's Source IPs | GET | `/api/v1/agents/source-ips` | `conn_mod_def::GMSV5UC46zw::kKNSIcN2QEC6lloA-37rWw` |

### AgentSellerServices

| Action | Method | Path | Action id |
|---|---|---|---|
| Deactivate an Agent's Seller Service | POST | `/api/v1/agents/seller-services/{{sellerServiceId}}/deactivate` | `conn_mod_def::GMSV5jaVA-I::KaHMYZD8Ri-2xvTMuEq9bQ` |

### SellerAgentServices

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Seller Agent Services | GET | `/api/v1/agents/seller-services` | `conn_mod_def::GMSV5s-iGWQ::UOBsR8y5SfK33_HNu9STVA` |

### ServiceTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Service Tags | GET | `/api/v1/directory/tags` | `conn_mod_def::GMSV5tB6qdI::CFfbF4GIT1OHzHyRDcf31Q` |

### DirectoryServices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Directory Services | GET | `/api/v1/directory/services` | `conn_mod_def::GMSV5uGks5I::rETIAX28SVyjN9AIS4a4dA` |

### AgentsWalletBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agent's Wallet Balance | GET | `/api/v1/agents/balance` | `conn_mod_def::GMSV5wDQKGQ::CyR40B3GR1KNpb0_hAujHA` |

### AgentsTokenVersion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agents Token Version | GET | `/api/v1/agents/token-version` | `conn_mod_def::GMSV5_arLng::fVgH4vsJReyuPV016XZ04Q` |

### TokenCharges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Charges for a Token | GET | `/api/v1/tokens/{{tokenId}}/charges` | `conn_mod_def::GMSV5_0F7SY::vmS3ynFiRfuGc0bnm5UQlA` |

### ExternalSellersConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Upsert External Sellers Config | POST | `/app/v1/admin/external-sellers/config/upsert` | `conn_mod_def::GMSV6E6f0SI::KncvAwaYQ_6Y57pRwNqXcQ` |

## When a call fails

The error comes from Skyfire, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/skyfire

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
