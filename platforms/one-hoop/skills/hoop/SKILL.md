---
name: hoop
description: |. Read and write Hoop data through One: sessions, connections, users, jiraissuetemplates, plugins, resources and more, 128 actions with real parameter documentation. Use whenever the user asks to look something up in Hoop, create or update a record there, or build code against the Hoop API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: hoop
  generated-from: one-knowledge-base
---

# Hoop through One

|.

One exposes Hoop through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `hoop` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Hoop is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Hoop account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Sessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Session | GET | `/api/sessions/{{sessionId}}/download` | `conn_mod_def::GJ34DavA140::mKkcOTqBRpu0UI2K8U78KA` |
| Download a Session's Input Command | GET | `/api/sessions/{{sessionId}}/download/input` | `conn_mod_def::GJ34DhTn4wg::_zmelq04SBu5lB2dRZN_-Q` |
| Get a Session | GET | `/api/sessions/{{sessionId}}` | `conn_mod_def::GJ34DxLejY8::0ptODOB7TxCebewTnvwk4Q` |
| List Sessions | GET | `/api/sessions` | `conn_mod_def::GJ34EApnN-s::cYSKSwI3R4eOwmyHpTs-jQ` |
| Create a Provisioned Session (Approved) | POST | `/api/sessions/approved` | `conn_mod_def::GJ34DUO36TM::3M7FxWmsQ0WIsNOQ70bLhA` |
| Create an Ad-hoc Session Execution | POST | `/api/sessions` | `conn_mod_def::GJ34DoG7_vg::CLqogoZRT9KJEXHe70qYog` |
| Kill a Session | POST | `/api/sessions/{{sessionId}}/kill` | `conn_mod_def::GJ34D34gVuA::IImi6RPgShmdWemt8Q9elQ` |
| Run an Execution in a Reviewed Session | POST | `/api/sessions/{{sessionId}}/exec` | `conn_mod_def::GJ34EHsPo5w::-8L9rnRORT6jaYYsqVrJ2A` |
| Update a Session’s Metadata | PATCH | `/api/sessions/{{sessionId}}/metadata` | `conn_mod_def::GJ34EOl9jvE::RokKHzrsR4Cqf_W_3DDKiA` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connection | GET | `/api/connections/{{nameOrID}}` | `conn_mod_def::GJ333H0yQ5M::2LbRCsp_QcWjCPqJh3dOYA` |
| List Connections | GET | `/api/connections` | `conn_mod_def::GJ333hq0p9E::Yqa6nkntQ_eP3eNtdyisPw` |
| Test a Connection (by Name or ID) | GET | `/api/connections/{{nameOrID}}/test` | `conn_mod_def::GJ333-IrcxY::Nkgdyem1ROmGZT4ZivsVaw` |
| Create Connection | POST | `/api/connections` | `conn_mod_def::GJ332x78SA4::R7jH-nZMSVuIjpA8Jt3C_A` |
| Delete a Connection | DELETE | `/api/connections/{{name}}` | `conn_mod_def::GJ333AzpR2U::P13xq4z3QymbjyYAUhaAGA` |
| Patch a Connection | PATCH | `/api/connections/{{nameOrId}}` | `conn_mod_def::GJ3332oF93I::Vws8P8kTQ7-kmT-Z3A1tgg` |
| Update a Connection | PUT | `/api/connections/{{nameOrId}}` | `conn_mod_def::GJ334GCux7w::I7c4u_WpQqeNnmEffxni5g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by Email or ID | GET | `/api/users/{{emailOrID}}` | `conn_mod_def::GJ34E_6E8Ss::LjiCYHHnTEiDBrBfQzmx_Q` |
| List Users | GET | `/api/users` | `conn_mod_def::GJ34FavcKLk::yijkVlbXQbikWshJT9s0jA` |
| Create User | POST | `/api/users` | `conn_mod_def::GJ34Ecem1Kc::ajp7RxbrRJyCvAMjnk-29A` |
| Delete a User | DELETE | `/api/users/{{id}}` | `conn_mod_def::GJ34Ep3p81A::6piaxSu4RM-66F1kBDkEAQ` |
| Patch Current User Slack ID | PATCH | `/api/users/self/slack` | `conn_mod_def::GJ34FiOrDOQ::OaPv3VyPSBybWWp0RiD-_Q` |
| Update a User | PUT | `/api/users/{{id}}` | `conn_mod_def::GJ34Fv5xdmo::3_VYMWlpQSWmlD-QD50h2g` |

### JiraIssueTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Jira Issue Template | GET | `/api/integrations/jira/issuetemplates/{{id}}` | `conn_mod_def::GJ337KSkWTQ::HBqUS7CKQm2IdlhCUZnfjA` |
| List Jira Issue Templates | GET | `/api/integrations/jira/issuetemplates` | `conn_mod_def::GJ337eZUa0o::5mV-wtAgR5C0M6cKT6B3Zg` |
| Create Jira Issue Templates | POST | `/api/integrations/jira/issuetemplates` | `conn_mod_def::GJ336ZB79jE::_t1cqTapR0ex19y9V-aS8w` |
| Delete a Jira Issue Template | DELETE | `/api/integrations/jira/issuetemplates/{{id}}` | `conn_mod_def::GJ336rWCa1g::MRVMP8E6RcaPzs4TVLRNQw` |
| Update a Jira Issue Template | PUT | `/api/integrations/jira/issuetemplates/{{id}}` | `conn_mod_def::GJ337wn_8Y8::sJ-nliC9Tk2W0gQvDTQqOQ` |

### Plugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin by Name | GET | `/api/plugins/{{name}}` | `conn_mod_def::GJ338pfH_w0::tzWX4HhESFiQzh2hig6W6Q` |
| List Plugins | GET | `/api/plugins` | `conn_mod_def::GJ3386awAf8::oDE4gtSkTs6nvr8P9ypSZw` |
| Create Plugin | POST | `/api/plugins` | `conn_mod_def::GJ338aKO3eQ::LG1DE0NhSEelGNnzS9UDXg` |
| Update a Plugin | PUT | `/api/plugins/{{name}}` | `conn_mod_def::GJ339ELGx80::GBEYa594T7uv2RU0J0mfXg` |
| Update a Plugin’s Top-Level Config | PUT | `/api/plugins/{{name}}/config` | `conn_mod_def::GJ339MtKF24::7GfZiWidTaOqaZD1qCUOdA` |

### Resources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resource by Name | GET | `/api/resources/{{name}}` | `conn_mod_def::GJ33-ZdIZ2k::aAd50RZ0SvaM8DwXF3pP1A` |
| List Resources | GET | `/api/resources` | `conn_mod_def::GJ33-igPjT8::0qxGtuuMQp2mmFfknamCyw` |
| Create a Resource (Organization) | POST | `/api/resources` | `conn_mod_def::GJ33-DL7UYM::4X9zixyTSDKvWlCPgr0kaw` |
| Delete a Resource | DELETE | `/api/resources/{{name}}` | `conn_mod_def::GJ33-KDNfpg::FA5MmasNT1uzCXCUQVbQTQ` |
| Update a Resource by Name | PUT | `/api/resources/{{name}}` | `conn_mod_def::GJ33-0V3fbs::ODsoSmmZReS5aZgCJ45tSQ` |

### RunbookRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Runbook Rule by ID | GET | `/api/runbooks/rules/{{id}}` | `conn_mod_def::GJ34AdI_GNQ::tZRIi1PYTFqTI1mCiK5gXA` |
| List Runbook Rules | GET | `/api/runbooks/rules` | `conn_mod_def::GJ34ArL-XQU::mhkvlQsSRUeFAfaydC7RyA` |
| Create Runbook Rule | POST | `/api/runbooks/rules` | `conn_mod_def::GJ33_qRTdqg::nNakIVtPR5e9zVT6pudXOg` |
| Delete a Runbook Rule | DELETE | `/api/runbooks/rules/{{id}}` | `conn_mod_def::GJ33_5PAm6s::WhyqcyRYT76T7Nmh7klZFA` |
| Update a Runbook Rule | PUT | `/api/runbooks/rules/{{id}}` | `conn_mod_def::GJ34Bt4gk5g::IcdLcrr-QMWHfKRYOjdmzw` |

### RunbookConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Runbook Configuration | GET | `/api/runbooks/configurations` | `conn_mod_def::GJ34ATe-vXs::XCCguoyhQN2pCbIuQuPzmQ` |
| Create Runbook Configuration Entry | POST | `/api/runbooks/configurations` | `conn_mod_def::GJ33_jD2eLg::MQuEpNYUTgiKsuURYfAK9g` |
| Delete a Runbook Configuration Entry | DELETE | `/api/runbooks/configurations/{{id}}` | `conn_mod_def::GJ33_x_XIlg::39N-PwAlTn6ttF6FzYNW7Q` |
| Update a Runbook Configuration Entry | PUT | `/api/runbooks/configurations/{{id}}` | `conn_mod_def::GJ34BmvXZYQ::FLPLOUkYQAiPyg6ly5fw-A` |
| Update Runbook Configuration | PUT | `/api/runbooks/configurations` | `conn_mod_def::GJ34BfSpejY::omQWmEXPRKqdNfge_1DPuQ` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent Key (by Name or ID) | GET | `/api/agents/{{nameOrID}}` | `conn_mod_def::GJ330k3JjII::LZmctGy1SJKMUjF-cn16rg` |
| List Agent Keys | GET | `/api/agents` | `conn_mod_def::GJ330tRjLAs::n7f_wzvmSJmyhQ0WcOH5gw` |
| Create Agent Key | POST | `/api/agents` | `conn_mod_def::GJ330TwOc18::vz1v4Vr1SaGBl_kaVozoEw` |

### DataMaskingRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Data Masking Rule | GET | `/api/datamasking-rules/{{id}}` | `conn_mod_def::GJ334lHz4rc::n4v9tgY7S1ywHBhNnNXXyA` |
| List Data Masking Rules | GET | `/api/datamasking-rules` | `conn_mod_def::GJ334sD35q4::jmqZrcfjRdGc8f2_7JwpDQ` |
| Delete a Data Masking Rule | DELETE | `/api/datamasking-rules/{{id}}` | `conn_mod_def::GJ334dt-dBc::Iq92Feh9SOCjQuy6AumFVw` |

### JiraIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Jira Integration | GET | `/api/integrations/jira` | `conn_mod_def::GJ337UCxcxs::YOVeZsL0RrmwL_BPdJW_hQ` |
| Create Jira Integration (Organization) | POST | `/api/integrations/jira` | `conn_mod_def::GJ336hr_xSo::Sw4_rmawRB-oA6kpqq2GZg` |
| Update an Organization's Jira Integration | PUT | `/api/integrations/jira` | `conn_mod_def::GJ3377nBjTo::IqyHxIggR3KOu2BsrWj7iA` |

### OrganizationKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Organization Key | GET | `/api/orgs/keys` | `conn_mod_def::GJ338Lhva8I::qB2Lnr_TRIyQEWTpql4CWA` |
| Create an Organization Key | POST | `/api/orgs/keys` | `conn_mod_def::GJ338EWFack::cKzOYstVTFm9G3obA3NDqg` |
| Revoke an Organization Key | DELETE | `/api/orgs/keys` | `conn_mod_def::GJ338TW1Dyc::3PIguH9mQxeHjhACs1UcdA` |

### PluginConnections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Plugin Connection | GET | `/api/plugins/{{name}}/conn/{{id}}` | `conn_mod_def::GJ338yQOAKc::ukxm51t1QGaBow1ZB8ZsEw` |
| Delete a Plugin Connection | DELETE | `/api/plugins/{{name}}/conn/{{id}}` | `conn_mod_def::GJ338hoosD0::c04HBK5fTpimDP7cm8cJTg` |
| Upsert a Plugin Connection | PUT | `/api/plugins/{{name}}/conn/{{id}}` | `conn_mod_def::GJ339UsheOQ::YFcsPGCYTQ6ovOERnaRWaA` |

### Reviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Review | GET | `/api/reviews/{{id}}` | `conn_mod_def::GJ33-8eWNsA::QXLfavDbRwCniuj5GDEXkw` |
| List Reviews | GET | `/api/reviews` | `conn_mod_def::GJ33_ELvnUA::fTq4h4evSyimNd4Ffvl6dA` |
| Update a Review’s Status | PUT | `/api/reviews/{{id}}` | `conn_mod_def::GJ33_NIhecw::-zuDPxCPQtietivrlc1yjw` |

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Service Accounts | GET | `/api/serviceaccounts` | `conn_mod_def::GJ34FNdzE_w::4pWiCT6YRW2OYTG3qwpO0g` |
| Create a Service Account | POST | `/api/serviceaccounts` | `conn_mod_def::GJ34EVgh0aI::g6sjCgXyQeWQGbExrLCkGA` |
| Update a Service Account | PUT | `/api/serviceaccounts/{{subject}}` | `conn_mod_def::GJ34Fo9FYFk::GPCjgIxcTJa_XBoplCy2zA` |

### Guardrails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guardrail Rule | GET | `/api/guardrails/{{id}}` | `conn_mod_def::GJ3356cJ8e8::k8gZBmOSTtOU18QnnF4Oyg` |
| Create Guardrail Rules | POST | `/api/guardrails` | `conn_mod_def::GJ335l07sRI::wMD71BhPRrqaYpjIfCIeHg` |
| Delete a Guardrail Rule | DELETE | `/api/guardrails/{{id}}` | `conn_mod_def::GJ335t1z458::dh0X3q-gQtmODR2ihHhopg` |

### DbRoleJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a DB Role Job | GET | `/api/dbroles/jobs/{{id}}` | `conn_mod_def::GJ332JSPLfc::DiAfKNL2SUyHFXYz68A74A` |
| List DB Role Jobs | GET | `/api/dbroles/jobs` | `conn_mod_def::GJ332hFGkuA::1UNvaqN7Tc6sCMctFFmRmw` |

### DatamaskingRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Data Masking Rule | POST | `/api/datamasking-rules` | `conn_mod_def::GJ334WIxZ4E::qrqCZyVcQnu7ppX7PNbnqg` |
| Update a Data Masking Rule | PUT | `/api/datamasking-rules/{{id}}` | `conn_mod_def::GJ334zgFMBs::91MdTvUzTIWpGcLVKYlnsA` |

### GuardRailRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Guard Rail Rules | GET | `/api/guardrails` | `conn_mod_def::GJ336F6HKvo::Ok_s2hvMQAWImHa3psA8UA` |
| Update a Guard Rail Rule | PUT | `/api/guardrails/{{id}}` | `conn_mod_def::GJ336O3xE70::cfVq44kqQV218uQ1_rWeqA` |

### RunbookTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| List Runbook Templates | GET | `/api/plugins/runbooks/templates` | `conn_mod_def::GJ34AyBX6Fo::yL7M7mcGRb2raCY0jq36PA` |
| List Runbook Templates by Connection | GET | `/api/plugins/runbooks/connections/{{name}}/templates` | `conn_mod_def::GJ34BDNV1hc::Dpoq9Fp2TRWOxzu03L1wkg` |

### Saml

| Action | Method | Path | Action id |
|---|---|---|---|
| Get SAML Login URL | GET | `/api/saml/login` | `conn_mod_def::GJ331awbjV0::bMfAa07YQu-CAq8a01k3Jw` |
| SAML Login Callback | POST | `/api/saml/callback` | `conn_mod_def::GJ331h_N0Ek::kwRqbLK5TF2PKGO7BPEN4A` |

### Runbooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Runbooks | GET | `/api/runbooks` | `conn_mod_def::GJ34A6-HewI::c4S3I7BTR4yhAXXJKzub7g` |
| Execute a Runbook | POST | `/api/runbooks/exec` | `conn_mod_def::GJ34BUpq4rI::kXp0IVV9TyGmvRH5M4VBYg` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create User Group | POST | `/api/users/groups` | `conn_mod_def::GJ34EjXGP-U::R3D6aCZzRzqAIPyVXVdbtQ` |
| Delete a User Group | DELETE | `/api/users/groups/{{name}}` | `conn_mod_def::GJ34EwWEF5g::EIwsS7T6RearFXqyw_Gr-Q` |

### AgentKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Agent Key | DELETE | `/api/agents/{{nameOrId}}` | `conn_mod_def::GJ330c3A6ok::jjrcYnt0QCK1ok7nRlPpiQ` |

### AwsOrganizationAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List AWS Organization Accounts | GET | `/api/integrations/aws/organizations` | `conn_mod_def::GJ332RQOHQQ::2I_mwsDfS7KjTmdqnodUKQ` |

### RdsDbInstances

| Action | Method | Path | Action id |
|---|---|---|---|
| List AWS RDS Database Instances | POST | `/api/integrations/aws/rds/describe-db-instances` | `conn_mod_def::GJ332Z8jzw8::-GLXv-5uTr-sgkg-r7k9mw` |

### AwsIamAccessKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Update AWS IAM Access Key (Integration) | PUT | `/api/integrations/aws/iam/accesskeys` | `conn_mod_def::GJ332phYXBc::Cq_Yr70FTeKzqq7Slj6GNg` |

### ConnectionCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Connection Credentials for a Connection | POST | `/api/connections/{{nameOrId}}/credentials` | `conn_mod_def::GJ3325I3Rwc::N6vwNYoNSQqPkId93Ekv3g` |

This lists 90 of 128 actions. For anything not here, call `search_one_platform_actions` with platform `hoop`. The full catalog is at https://www.withone.ai/knowledge/hoop.

## When a call fails

The error comes from Hoop, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/hoop

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
