---
name: saperly
description: Saperly is a conversational messaging and voice platform that provides APIs for provisioning phone numbers, managing channel connections, sending messages, and running AI assistants with multilingual voice synthesis, allowing teams to automate customer conversations and manage consent across messaging and voice channels. Read and write Saperly data through One: numbers, calls, apitokens, connections, consent, messages and more, 44 actions with real parameter documentation. Use whenever the user asks to look something up in Saperly, create or update a record there, or build code against the Saperly API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: saperly
  generated-from: one-knowledge-base
---

# Saperly through One

Saperly is a conversational messaging and voice platform that provides APIs for provisioning phone numbers, managing channel connections, sending messages, and running AI assistants with multilingual voice synthesis, allowing teams to automate customer conversations and manage consent across messaging and voice channels.

One exposes Saperly through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `saperly` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Saperly is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Saperly account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Numbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number by ID | GET | `/numbers/{{id}}` | `conn_mod_def::GMgWcSQeF0g::lDHeYa1AQpGgzWJWZ4tDLA` |
| Bind a Connection to a Number | POST | `/numbers/{{id}}/connection` | `conn_mod_def::GMgWcKV91Mg::VtM6y4XHQJSJR1jJWKjiWw` |
| Caller Id Using Numbers | POST | `/numbers/{{id}}/caller-id` | `conn_mod_def::GMgWcblXpPA::bl1qA-8SQ5O5gLO5TSFTBA` |
| Provision a Phone Number | POST | `/numbers` | `conn_mod_def::GMgWcTyUojg::3j9goJtERnW002HoiTb7yA` |
| Release a Phone Number | POST | `/numbers/{{id}}/release` | `conn_mod_def::GMgWcTLvFxg::GKKgGi6lQaOn4meTL7KgdQ` |
| Set a Number's Manual-Mode Brain Webhook URL | POST | `/numbers/{{id}}/webhook` | `conn_mod_def::GMgWcUxVIog::xFxp84YbSEemF24tP2TFOw` |
| Set SMS Sender ID for a Number | POST | `/numbers/{{id}}/sms-sender` | `conn_mod_def::GMgWcblrfvg::ptm79lkJTb-mivk1S55d2Q` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Call by ID | GET | `/calls/{{id}}` | `conn_mod_def::GMgWciQ_mEA::qnctQTeiSTyOoCKdnzQC-w` |
| Get a Call Recording | GET | `/calls/{{id}}/recording` | `conn_mod_def::GMgWciqKmjg::t92uh-D_RZGB34AWK8-VJw` |
| Get a Call Transcript | GET | `/calls/{{id}}/transcript` | `conn_mod_def::GMgWclKzLlg::38u00bM7S8yRXK6QL-HHhg` |
| List Calls | GET | `/calls` | `conn_mod_def::GMgWcjrOjuA::AsFcrGaYSsWIXR1cQUnX4Q` |
| End a Call | POST | `/calls/{{id}}/end` | `conn_mod_def::GMgWciHuiAg::NUPJ1UcUTjSCIX299gOOJw` |
| Place an Outbound Call | POST | `/calls` | `conn_mod_def::GMgWcrSen_g::VRDoGxTqRdK7cBa6rCwM6A` |
| Transfer a Live Call | POST | `/calls/{{id}}/transfer` | `conn_mod_def::GMgWcblyAvA::DAaEx8rYQYKMM_bMlKyhXQ` |

### ApiTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's API Tokens | GET | `/workspaces/{{slug}}/api-tokens` | `conn_mod_def::GMgWctEOFvA::qk3l88vrTLO9vfiD1LDWLg` |
| List Workspace API Keys | GET | `/api-tokens` | `conn_mod_def::GMgWcDPmHog::5rXNOmdDRUmEJ5Pu1mTExw` |
| Create a Scoped API Token for a Workspace | POST | `/workspaces/{{slug}}/api-tokens` | `conn_mod_def::GMgWbupWPsA::mdbqJ8mMQpqFw0Q3AWgVRA` |
| Mint a Scoped API Key | POST | `/api-tokens` | `conn_mod_def::GMgWcDPxn9g::AC8T9uzTTOmwGzEQt8eKNg` |
| Revoke an API Token | POST | `/api-tokens/{{id}}/revoke` | `conn_mod_def::GMgWcKW0A-A::8xlq0nT2ReKjmgvNpIdowQ` |
| Revoke an API Token for a Workspace | POST | `/workspaces/{{slug}}/api-tokens/{{tokenId}}/revoke` | `conn_mod_def::GMgWb0TJSig::61fedx4FS4yGpnei2qElQg` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connection by ID | GET | `/connections/{{id}}` | `conn_mod_def::GMgWb6FyLQg::iWioahH4TnS4mb6JMHG4Wg` |
| List All Connections in the Workspace | GET | `/connections` | `conn_mod_def::GMgWb6F1lCA::MfW8iA14SBOgUMHNzmQD6Q` |
| Create a Connection | POST | `/connections` | `conn_mod_def::GMgWbvJdLUA::UdBVpklURCuRCid758xWyA` |
| Delete a Connection | DELETE | `/connections/{{id}}` | `conn_mod_def::GMgWbuCZVyg::XMAgGDLfSYKcOnqWdJQUkA` |
| Update a Connection | PATCH | `/connections/{{id}}` | `conn_mod_def::GMgWb7Lj_wg::9kiLQ0-LSS2SX5kkCR0CRw` |

### Consent

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether a Contact Has Active Consent | GET | `/consent/check` | `conn_mod_def::GMgWb76qzBg::7tGc8HyHR4qWZyqoh7UX2g` |
| List Consent Records | GET | `/consent` | `conn_mod_def::GMgWb8b7BFA::wbJq2ZpmQAWlaP9BhktGFw` |
| Record Consent | POST | `/consent` | `conn_mod_def::GMgWcDgoqjg::ae-_d5u3RWyhh8pPNiPfxA` |
| Revoke Consent for a Contact | POST | `/consent/revoke` | `conn_mod_def::GMgWcDB8P5g::Yl-P1cLoTrGkGzLCPOoDJw` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Messages | GET | `/messages` | `conn_mod_def::GMgWcMZrA-A::QOtkjNpMSr6zGmPbBS8rxw` |
| Send an SMS Message | POST | `/messages` | `conn_mod_def::GMgWcLGZgGg::04XzHHxvSjufaCUttz46Pg` |

### Assistant

| Action | Method | Path | Action id |
|---|---|---|---|
| Answer Using Assistant | POST | `/assistant/answer` | `conn_mod_def::GMgWbvJBgzg::BBhmSUseQoaSgg_ABZMUvA` |

### Health

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Liveness Probe | GET | `/health` | `conn_mod_def::GMgWcCw_DwA::rlC3bH6dSH2DbBiUtIFXlg` |

### Languages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Spoken Languages | GET | `/languages` | `conn_mod_def::GMgWcKeUKdg::TcoBEd3SSCOfJ54T0Xa4sQ` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Phone Numbers in the Workspace | GET | `/numbers` | `conn_mod_def::GMgWcSgLGIg::_-ZYXAgSQre5pzJrjzTYZg` |

### Usage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Usage Summary | GET | `/usage` | `conn_mod_def::GMgWcbk-4Rg::nooYJnXsSBiHd589vwQ63g` |

### Pricing

| Action | Method | Path | Action id |
|---|---|---|---|
| Quote the Price of a Phone Number | GET | `/pricing/quote` | `conn_mod_def::GMgWccBs3Ig::8SBkcHkgSueo5Evyd4UeQQ` |

### Voices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Voices | GET | `/voices` | `conn_mod_def::GMgWcrs3rmg::Q9EVRnd4TU-YYwmHzSNnIw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Webhook Endpoint for a Workspace | POST | `/workspaces/{{slug}}/webhooks` | `conn_mod_def::GMgWcsWyvbA::CH9xmqeCTLmWT5K8U1PdSQ` |

### WebhookDeliveries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Webhook Endpoint's Recent Delivery Attempts for a Workspace | GET | `/workspaces/{{slug}}/webhooks/{{webhookId}}/deliveries` | `conn_mod_def::GMgWcseANmg::fONDZVGgS8y6P5y5qnppJg` |

### AuditEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Audit Events | GET | `/workspaces/{{slug}}/audit-events` | `conn_mod_def::GMgWc0Muw7A::JLrOj0iwRiuXgJe4XguMVg` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Members | GET | `/workspaces/{{slug}}/members` | `conn_mod_def::GMgWc1Zu8Pg::P3KnVhsJRaiXl8GiwqxGEg` |

### WorkspaceInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Invite a Member by Email to a Workspace | POST | `/workspaces/{{slug}}/invitations` | `conn_mod_def::GMgWc2-IldA::0aLoit6jRGmfupWDxV3T9w` |

### WebhookEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Workspace's Webhook Endpoints | GET | `/workspaces/{{slug}}/webhooks` | `conn_mod_def::GMgWc3J4pSg::A9zyckszSSODfHceNx01UQ` |

## When a call fails

The error comes from Saperly, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/saperly

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
