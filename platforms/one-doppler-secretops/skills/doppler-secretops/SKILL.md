---
name: doppler-secretops
description: Doppler SecretOps is a secrets management platform that provides centralized access control, syncing, and delivery of environment variables and application secrets, allowing developers and operations teams to securely manage configuration across local development, CI/CD pipelines, and production environments. Read and write Doppler SecretOps data through One: configs, webhooks, workplacegroups, integrations, projects, workplacechangerequests and more, 127 actions with real parameter documentation. Use whenever the user asks to look something up in Doppler SecretOps, create or update a record there, or build code against the Doppler SecretOps API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: doppler-secretops
  generated-from: one-knowledge-base
---

# Doppler SecretOps through One

Doppler SecretOps is a secrets management platform that provides centralized access control, syncing, and delivery of environment variables and application secrets, allowing developers and operations teams to securely manage configuration across local development, CI/CD pipelines, and production environments.

One exposes Doppler SecretOps through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `doppler-secretops` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Doppler SecretOps is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Doppler SecretOps account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Configs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Configs | GET | `/v3/configs` | `conn_mod_def::GMPuzQWYHhA::PRcV4j6YTSiZa9ZUGce33g` |
| Retrieve a Config | GET | `/v3/configs/config` | `conn_mod_def::GMPu0TGDeiA::bN_Ps2bfTaKZd7MArCGWMA` |
| Clone a Config | POST | `/v3/configs/config/clone` | `conn_mod_def::GMPuxibmiBA::aUir3qzhQmWz7X-ElL57pg` |
| Create a Branch Config | POST | `/v3/configs` | `conn_mod_def::GMPuxr7C64g::eiJPb-RSRrSZg_cgwPMgdQ` |
| Create a Secrets Sync for a Config | POST | `/v3/configs/config/syncs` | `conn_mod_def::GMPux2jmxGg::O9CMy6VhR1Cvp8zoakdxPw` |
| Delete a Config | DELETE | `/v3/configs/config` | `conn_mod_def::GMPuyQKbXXA::YtAPn-ZgT9uFV79k39u5Ag` |
| Inherits for a Config | POST | `/v3/configs/config/inherits` | `conn_mod_def::GMPuyq6x7Qg::BnA1fAUuQlCo7E8rvorFAA` |
| Lock a Config | POST | `/v3/configs/config/lock` | `conn_mod_def::GMPuzXVt4NA::JDZv3iP1Teep2fs5g-pf5A` |
| Unlock Config | POST | `/v3/configs/config/unlock` | `conn_mod_def::GMPu0a0js3A::EhFOWtHeTkeTltwDj63lGQ` |
| Update a Config | POST | `/v3/configs/config` | `conn_mod_def::GMPu0sAIF3g::pi9zWkSPT1Cei4zIDJWfCA` |
| Update Config Inheritability | POST | `/v3/configs/config/inheritable` | `conn_mod_def::GMPuyqmHBPg::huZm0BvZTCqOED0dgoAZAQ` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/v3/webhooks` | `conn_mod_def::GMPuzAdAIhg::VNp2u_F_Q6GjLsP6DEz3Zg` |
| Retrieve a Webhook by Slug | GET | `/v3/webhooks/webhook/{{slug}}` | `conn_mod_def::GMPu0AqiBVg::MFrHz9KHSqemSl_tLcZhDA` |
| Add a Webhook | POST | `/v3/webhooks` | `conn_mod_def::GMPuxVJ4zWg::_nH2-OeUQESLZwQiwz-gUQ` |
| Delete a Webhook | DELETE | `/v3/webhooks/webhook/{{slug}}` | `conn_mod_def::GMPux9hyicA::vg0XIk0xT6qmVZD8NScAnA` |
| Disable a Webhook | POST | `/v3/webhooks/webhook/{{slug}}/disable` | `conn_mod_def::GMPuybbVB6A::xFrEj95PQLWMr9Zy2hyP_w` |
| Enable a Webhook | POST | `/v3/webhooks/webhook/{{slug}}/enable` | `conn_mod_def::GMPuyjLznJg::U63rpoGWQ1-Xzt7FfsB64Q` |
| Update a Webhook | PATCH | `/v3/webhooks/webhook/{{slug}}` | `conn_mod_def::GMPu0ayu8NA::O7uVDEhTR0mk5mxbsWLWaQ` |

### WorkplaceGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workplace Groups | GET | `/v3/workplace/groups` | `conn_mod_def::GMPuy5RPWAA::KqTzt3lzRsWaVSZ2x8sTKA` |
| Retrieve a Workplace Group by Slug | GET | `/v3/workplace/groups/group/{{slug}}` | `conn_mod_def::GMPuz5Pvi9g::T8vLkbMDTbWgkSPFQpPA5g` |
| Add Member to a Workplace Group | POST | `/v3/workplace/groups/group/{{slug}}/members` | `conn_mod_def::GMPuxU4GONg::ZCcmrTNmQ5Wcl58KYBCMnQ` |
| Create a Workplace Group | POST | `/v3/workplace/groups` | `conn_mod_def::GMPux1ihmyg::WZtdU93gTsCYcNhx9bKcJw` |
| Delete a Group Member from a Workplace Group | DELETE | `/v3/workplace/groups/group/{{slug}}/members/{{type}}/{{memberSlug}}` | `conn_mod_def::GMPuybbgBCA::_EAp6z4bRkuRDg6T2Bji4A` |
| Delete a Workplace Group | DELETE | `/v3/workplace/groups/group/{{slug}}` | `conn_mod_def::GMPux-asBIA::b2EFr_9VQd-6ZjCTtjUs4w` |
| Update a Workplace Group | PATCH | `/v3/workplace/groups/group/{{slug}}` | `conn_mod_def::GMPu0azVDqA::fKVtbpitS5CihYo5DJQLtg` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Options for an Integration | GET | `/v3/integrations/integration/options` | `conn_mod_def::GMPuykIs64g::4yvItw1iQJGovMN_9Uncvg` |
| List Integrations | GET | `/v3/integrations` | `conn_mod_def::GMPuyxXw3Vg::_468DxpORH-m37euG_6DhA` |
| Retrieve an Integration | GET | `/v3/integrations/integration` | `conn_mod_def::GMPuz55wY5g::6LZjjNRkS0G8dLrUUl6Fag` |
| Create an Integration | POST | `/v3/integrations` | `conn_mod_def::GMPuxr3QlHg::4jdvFQUmSrqCeYYvJ8L4KQ` |
| Delete an Integration | DELETE | `/v3/integrations/integration` | `conn_mod_def::GMPuyQYaUtA::PV2K6xbbTBy1pxMzeKfLVg` |
| Update an Integration | PUT | `/v3/integrations/integration` | `conn_mod_def::GMPu0sWWymg::2mWwDir0Tx-CidXuH9pb9A` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects | GET | `/v3/projects` | `conn_mod_def::GMPuzPXX3EA::6-V5a-AuTJyPjDPX7fkwlw` |
| Retrieve a Project | GET | `/v3/projects/project` | `conn_mod_def::GMPu0KGE3gA::O2yvddK8SE23tJILXcDnHw` |
| Create a Project | POST | `/v3/projects` | `conn_mod_def::GMPuxqwWBWA::cgC4x1euR02m7NWdLEk1Kg` |
| Delete a Project | DELETE | `/v3/projects/project` | `conn_mod_def::GMPuyFNgOAg::3ryutiBvTRuWAkdAYq5osw` |
| Update a Project | POST | `/v3/projects/project` | `conn_mod_def::GMPu0hPXJNA::eyFZbNaOQFasTedcdcxzbg` |

### WorkplaceChangeRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workplace Change Request | GET | `/v3/workplace/change_requests/change_request/{{changeRequestId}}` | `conn_mod_def::GMPuykGjqtA::P10y3suhTbyu28d-K9RRYA` |
| List Workplace Change Requests | GET | `/v3/workplace/change_requests` | `conn_mod_def::GMPuyiT_ZFA::3FF4ViMqRBqvSjwm2L1E4g` |
| Close a Workplace Change Request | POST | `/v3/workplace/change_requests/change_request/{{changeRequestId}}/close` | `conn_mod_def::GMPuzfwYztg::pNQh9avqS863iz27cV7UZA` |
| Create a Workplace Change Request | POST | `/v3/workplace/change_requests` | `conn_mod_def::GMPuzfoQbBg::ZUxfDag1Ru61R2L4ZTYD6w` |
| Update a Workplace Change Request | POST | `/v3/workplace/change_requests/change_request/{{changeRequestId}}` | `conn_mod_def::GMPuzpRln5A::6oQj6Q6qTSK9YU3twm8sCQ` |

### WorkplaceServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workplace Service Accounts | GET | `/v3/workplace/service_accounts` | `conn_mod_def::GMPuy5zcuHg::d4nrPauHRX-5hSUvigwLUg` |
| Retrieve a Workplace Service Account | GET | `/v3/workplace/service_accounts/service_account/{{slug}}` | `conn_mod_def::GMPuz51bB7A::21jgrjhkTiqFUWTsPRVqmQ` |
| Create a Workplace Service Account | POST | `/v3/workplace/service_accounts` | `conn_mod_def::GMPuxk0epnA::BTk7ZQKqRKaTk53tCoTrhg` |
| Delete a Workplace Service Account | DELETE | `/v3/workplace/service_accounts/service_account/{{slug}}` | `conn_mod_def::GMPux98lWfA::ZomhcHRRR3uQotGfYnnbVA` |
| Update a Workplace Service Account | PATCH | `/v3/workplace/service_accounts/service_account/{{slug}}` | `conn_mod_def::GMPu0a1j_Hg::pm9pyZmlQtax06PlgpyTxw` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Members | GET | `/v3/projects/project/members` | `conn_mod_def::GMPuzOuWAYA::DuTAjzWHQEWhfzMf1aZeoQ` |
| Retrieve a Project Member by Type and Slug | GET | `/v3/projects/project/members/member/{{type}}/{{slug}}` | `conn_mod_def::GMPu0LRluPA::HAgN-UKnTkmYuUCcx4VlJQ` |
| Add a Member to a Project | POST | `/v3/projects/project/members` | `conn_mod_def::GMPuxV2F61A::p8KwV3CjRUu-L-6ga_74Dg` |
| Delete a Project Member | DELETE | `/v3/projects/project/members/member/{{type}}/{{slug}}` | `conn_mod_def::GMPuyITMB1A::1mZ7690GTqutZiCS7dIdnw` |
| Update a Project Member | PATCH | `/v3/projects/project/members/member/{{type}}/{{slug}}` | `conn_mod_def::GMPu0vjDIeg::-RjmNUk9SLG3V7fnlpZNtg` |

### WorkplaceRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workplace Roles | GET | `/v3/workplace/roles` | `conn_mod_def::GMPuzAjsMCA::5vF-nFX6RH-UgcHdsB374g` |
| Retrieve a Workplace Role by Role Identifier | GET | `/v3/workplace/roles/role/{{role}}` | `conn_mod_def::GMPu0AsXVJg::xcq5GdupSv2hN8Tz383LDw` |
| Create a Workplace Role | POST | `/v3/workplace/roles` | `conn_mod_def::GMPuxfeE2Ng::sQ1M7_sMQi2O7sanPQ77vQ` |
| Delete a Workplace Role | DELETE | `/v3/workplace/roles/role/{{role}}` | `conn_mod_def::GMPux1Dan8A::DJywEahrSG6bMCvrQKKRzg` |
| Update a Workplace Role | PATCH | `/v3/workplace/roles/role/{{role}}` | `conn_mod_def::GMPu0h27TzA::6bR3iixMTEObgnn8p7SKHQ` |

### ProjectRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Project Roles | GET | `/v3/projects/roles` | `conn_mod_def::GMPuzPDDiXA::-MnPAhG6QlaUhFelPbXH8A` |
| Retrieve a Project Role | GET | `/v3/projects/roles/role/{{role}}` | `conn_mod_def::GMPu0J-a5Gg::SmB_2jtcSH6P66C_Mu7bCQ` |
| Create a Project Role | POST | `/v3/projects/roles` | `conn_mod_def::GMPuxr1tE9A::HxmePcx0S72IBLnbtlFwFg` |
| Delete a Project Role | DELETE | `/v3/projects/roles/role/{{role}}` | `conn_mod_def::GMPuyF2UgiA::bDr4Rov_QgykV_E_NoYV0w` |
| Update a Project Role | PATCH | `/v3/projects/roles/role/{{role}}` | `conn_mod_def::GMPu0q7RmPg::avUnC4DESTm3xp7XaVxuQQ` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Environments | GET | `/v3/environments` | `conn_mod_def::GMPuzPnondg::vKBL9IqJQNiKsSIcWbTDnQ` |
| Retrieve an Environment | GET | `/v3/environments/environment` | `conn_mod_def::GMPu0L3MjWA::hn1NV0FpQwaZFv7kOMwy9g` |
| Create an Environment | POST | `/v3/environments` | `conn_mod_def::GMPuxuiWk7A::t_OW3IbnToSWtfksaXvltg` |
| Delete an Environment | DELETE | `/v3/environments/environment` | `conn_mod_def::GMPuyPhAq1A::-G9wrEJ8RE2h0imbamOPYQ` |
| Rename an Environment | PUT | `/v3/environments/environment` | `conn_mod_def::GMPuzysLvVg::EEf9Qv7TR5WEDRbg-ScU4A` |

### IntegrationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integration Member by Type and Slug | GET | `/v3/workplace/integrations/integration/members/member/{{type}}/{{slug}}` | `conn_mod_def::GMPuyim0CvA::4teJYTDvTuKZcL0Oe7FYmQ` |
| List Integration Members | GET | `/v3/integrations/integration/members` | `conn_mod_def::GMPuzD7xB7g::TqNjtVJ2ThqyfP7vaDBiqw` |
| Add a Member to an Integration | POST | `/v3/integrations/integration/members` | `conn_mod_def::GMPuxWjSY_g::A8-MMMV0R8yYW66RRVg_XA` |
| Update an Integration Member | PATCH | `/v3/integrations/integration/members/{{type}}/{{slug}}` | `conn_mod_def::GMPu0k1pTZA::r2RCFhWgTxaEzrwv-rGC8g` |

### WorkplaceUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workplace User | GET | `/v3/workplace/users/{{workplaceUserId}}` | `conn_mod_def::GMPu03D31mg::21Mz-TL3TTmlqpb4xe_6pw` |
| List Workplace Users | GET | `/v3/workplace/users` | `conn_mod_def::GMPuyyriHdA::ymb_83JBQtWEXqqXr_eRaw` |
| Retrieve a Workplace User | GET | `/v3/workplace/users/{{slug}}` | `conn_mod_def::GMPu0ArdbGA::Bi3sM_p0QMOAEgI-aPTx_Q` |
| Update a Workplace User | PATCH | `/v3/workplace/users/{{slug}}` | `conn_mod_def::GMPu0hUP6yA::UkJ5WRo3RCqGHz3dN8OHtw` |

### TrustedIps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Trusted IPs for a Config | GET | `/v3/configs/config/trusted_ips` | `conn_mod_def::GMPuyypuh_g::jX3BBRAYSr-sIS9vBi6EBA` |
| Add a Trusted IP to a Config | POST | `/v3/configs/config/trusted_ips` | `conn_mod_def::GMPuxW_F8mA::0qU3bfCjQr2RnalukKyB2A` |
| Delete Trusted IP from a Config | DELETE | `/v3/configs/config/trusted_ips` | `conn_mod_def::GMPuyPH0r1g::ecTd_BHAQHODMzBHF3lIVw` |

### ServiceAccountTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Service Account's Tokens | GET | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/tokens` | `conn_mod_def::GMPuy6ZTFXg::YOrHtHZtRp2aCPfUfiAUvg` |
| Create a Service Account Token | POST | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/tokens` | `conn_mod_def::GMPuxfYq9fg::mecFTzNeTjiZxiQcATwigA` |
| Delete a Service Account Token | DELETE | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/tokens/token/{{apiToken}}` | `conn_mod_def::GMPux9YlNpA::Vhdzvr2oQsOIdUWD7R0VuA` |

### WorkplaceChangeRequestPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workplace Change Request Policies | GET | `/v3/workplace/change_request_policies` | `conn_mod_def::GMPuzA2ebZA::zvAokt0IRAa19BxNI_HMtg` |
| Retrieve a Workplace Change Request Policy | GET | `/v3/workplace/change_request_policies/change_request_policy/{{slug}}` | `conn_mod_def::GMPu0DyUw5g::7n9S7rWHSoifpSL_8usQ0w` |
| Delete a Workplace Change Request Policy | DELETE | `/v3/workplace/change_request_policies/change_request_policy/{{slug}}` | `conn_mod_def::GMPuyGVZ16g::ftYIT4qvRu2GQMf7s3J30A` |

### Secrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Secrets | GET | `/v3/configs/config/secrets/download` | `conn_mod_def::GMPuybJLIlA::R08ehzaxQV-mwSKg1LnSFg` |
| List Secrets for a Config | GET | `/v3/configs/config/secrets` | `conn_mod_def::GMPuyy1nysg::ecP7yVyqQl-GW-O7FkTttg` |
| Delete a Secret from a Config | DELETE | `/v3/configs/config/secret` | `conn_mod_def::GMPuyTFO9kA::fmtw5-gKRw6JdFMX_ad_CA` |

### ServiceAccountIdentities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Account Identity | GET | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/identities/identity/{{identity}}` | `conn_mod_def::GMPuyqdQ_qA::OwPmJNHqQHKnuQHFNfI1AA` |
| List Identities for a Service Account | GET | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/identities` | `conn_mod_def::GMPuyqy-nNA::y2aJmkB8RxGAfrXu-cjgIg` |
| Delete a Service Account Identity for a Workplace Service Account | DELETE | `/v3/workplace/service_accounts/service_account/{{serviceAccount}}/identities/identity/{{identity}}` | `conn_mod_def::GMPuya0K4Wg::KAiZcsBGQE2VwTlt5hzC8Q` |

### ChangeRequestPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Change Request Policies | POST | `/v3/workplace/change_request_policies` | `conn_mod_def::GMPuxdRusyg::mqrn7rzYTneF22U0nbzDXA` |

1 more ChangeRequestPolicies actions are available through search.

This lists 90 of 127 actions. For anything not here, call `search_one_platform_actions` with platform `doppler-secretops`. The full catalog is at https://www.withone.ai/knowledge/doppler-secretops.

## When a call fails

The error comes from Doppler SecretOps, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/doppler-secretops

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
