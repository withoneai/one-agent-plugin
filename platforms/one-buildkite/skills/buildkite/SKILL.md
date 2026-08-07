---
name: buildkite
description: Buildkite is a continuous integration and delivery platform that runs build and deployment pipelines on customer-managed infrastructure, providing APIs, agent-based orchestration, and workflow automation that allow engineering teams to test, release, and monitor software delivery securely. Read and write Buildkite data through One: pipelines, clusterqueue, build, rules, teams, clusters and more, 107 actions with real parameter documentation. Use whenever the user asks to look something up in Buildkite, create or update a record there, or build code against the Buildkite API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: buildkite
  generated-from: one-knowledge-base
---

# Buildkite through One

Buildkite is a continuous integration and delivery platform that runs build and deployment pipelines on customer-managed infrastructure, providing APIs, agent-based orchestration, and workflow automation that allow engineering teams to test, release, and monitor software delivery securely.

One exposes Buildkite through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `buildkite` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Buildkite is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Buildkite account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Pipeline | POST | `/v1` | `conn_mod_def::GMPwDVswZiA::h0PUZNzbRpa9Jh-Bseexpw` |
| Create a Pipeline | POST | `/v1` | `conn_mod_def::GMPwDUz6cbg::pB9fR4EBSUyPD8RUEgNSCg` |
| Delete a Pipeline | POST | `/v1` | `conn_mod_def::GMPwDkYtfPg::Mrg1Tk8PSHq4HRSmsgN3Sg` |
| Favorite a Pipeline | POST | `/v1` | `conn_mod_def::GMPwDkmZY3A::2rVPr_SPTOKR7VgtIU5Ptw` |
| Find a Pipeline | POST | `/v1` | `conn_mod_def::GMPwDVhG-gA::qG1yiUweTbG4lIoMBOLP7w` |
| Unarchive a Pipeline | POST | `/v1` | `conn_mod_def::GMPwD9Df--A::KCiV8Q0eSRq4pjeKVxNIdA` |
| Update a Pipeline | POST | `/v1` | `conn_mod_def::GMPwD5Fa86g::c4ZDTB5iTkSwBI-hmaTjag` |

### ClusterQueue

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Cluster Queue | POST | `/v1` | `conn_mod_def::GMPwCaN4sIA::JwgNUwJ_RDeXO8HG_V_8ag` |
| Delete a Cluster Queue | POST | `/v1` | `conn_mod_def::GMPwCjjIL1g::XMRjYLaQTfuhc7GYedn8gg` |
| Pause Dispatch Using Cluster Queue | POST | `/v1` | `conn_mod_def::GMPwCjxJoXA::sFQdYplnTRSsFrIMEBp11g` |
| Resume Dispatch for a Cluster Queue | POST | `/v1` | `conn_mod_def::GMPwCk8CqRA::N9YXpHboRGi2CIYa7tSG6w` |
| Update a Cluster Queue | POST | `/v1` | `conn_mod_def::GMPwCjlmvTA::J7wGGx8mS8eGzQUxy6_8lw` |

### Build

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Build | POST | `/v1` | `conn_mod_def::GMPwCTtqI8A::Cqdvf4AFToKh1pIv4Olb6Q` |
| Create a Build | POST | `/v1` | `conn_mod_def::GMPwCSAEBng::6xBs4sH2Q9e7SM_muKH2AQ` |
| Find a Build | POST | `/v1` | `conn_mod_def::GMPwCGT2BhA::KpvfhGd-QEaBm6RaeZ6ghA` |
| Rebuild a Build | POST | `/v1` | `conn_mod_def::GMPwCSNokiA::joyrattPRGutMNFeRMmDJg` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Rule | POST | `/v1` | `conn_mod_def::GMPwEEaVLYg::yFcZArdkQAS_j8D4R6yITg` |
| Delete a Rule | POST | `/v1` | `conn_mod_def::GMPwED015rA::9KErtbamTjmvyxGtj2XhNg` |
| Get a Rule by UUID | POST | `/v1` | `conn_mod_def::GMPwEEaw8ug::NToySTBRTuy_cw9lvopqUA` |
| Update a Rule | POST | `/v1` | `conn_mod_def::GMPwEDbpPtg::owqRXBhERFSXX3AW4VsMFQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team | POST | `/v1` | `conn_mod_def::GMPwEVkQ3OA::7VVCVrccSqOZ6ponXSAHRQ` |
| Delete a Team | POST | `/v1` | `conn_mod_def::GMPwEVwVtIg::49q5UdpbQ9GRDxctA59-_Q` |
| Find a Team | POST | `/v1` | `conn_mod_def::GMPwEWBL_4A::ph3q7IrxS6en0VfHIk4DzA` |
| Update a Team | POST | `/v1` | `conn_mod_def::GMPwEvYnA_A::j0RxdQqAQLGgHrfOCIvF7g` |

### Clusters

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Cluster | POST | `/v1` | `conn_mod_def::GMPwCbNWhKA::8lfuAoKKQxqMQ6hpP8eJKw` |
| Delete a Cluster | POST | `/v1` | `conn_mod_def::GMPwCbIzE0A::uSCzeWEdR86QAukYJf7yIw` |
| Update a Cluster | POST | `/v1` | `conn_mod_def::GMPwCjr4XZg::ZgGLIf7tRkiG6vkJnP83bQ` |

### PipelineSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Pipeline Schedule | POST | `/v1` | `conn_mod_def::GMPwDr8m3SA::_iB96RsiT1qg_kwh4tRSkg` |
| Delete a Pipeline Schedule | POST | `/v1` | `conn_mod_def::GMPwDqzYYtg::uXqMzEi-R6aSRuJGg7VYtw` |
| Pipeline Schedule by Slug | POST | `/v1` | `conn_mod_def::GMPwDh8tEUA::Uep8K40dTvWwa7TWlK_F9A` |

### SsoProvider

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an SSO Provider | POST | `/v1` | `conn_mod_def::GMPwELVd5Ug::h-WaOwgQQ7SY5YguUdouKw` |
| Disable an SSO Provider Using Buildkite GraphQL | POST | `/v1` | `conn_mod_def::GMPwELUhbNA::0jCBze9wS5mES8EhlArajw` |
| Get an SSO Provider | POST | `/v1` | `conn_mod_def::GMPwEPF0rXg::HrYMGQKoT1ehTzs9g_DIjQ` |

### SsoProviders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an SSO Provider | POST | `/v1` | `conn_mod_def::GMPwEMBz4Lg::m_CbZ7soRNG_EdM5LYif3g` |
| Enable an SSO Provider | POST | `/v1` | `conn_mod_def::GMPwELgKPLA::xH6tD2inTP6Nzqh80x90hw` |
| Update an SSO Provider | POST | `/v1` | `conn_mod_def::GMPwEWHQOjg::UPAgpdsLQ8W9Tp2KekjyZg` |

### TeamMember

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Member | POST | `/v1` | `conn_mod_def::GMPwEWBQDpA::ErDhS9a7TI-mXt_PIWSTcA` |
| Delete a Team Member | POST | `/v1` | `conn_mod_def::GMPwEcULn8A::kddLoIQlS8SH_qdCcJB3Sg` |
| Update a Team Member | POST | `/v1` | `conn_mod_def::GMPwEdIH60g::VdNNCWAQQQq6VSOyQ8XpaQ` |

### TeamRegistry

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Registry Using Team Registry Create | POST | `/v1` | `conn_mod_def::GMPwEofKTKA::UhuuqAMRQ1ipew7464aNkA` |
| Delete a Team Registry | POST | `/v1` | `conn_mod_def::GMPwEoZgFhA::SEDPR_coTnW87qegGl8OqQ` |
| Update a Team Registry | POST | `/v1` | `conn_mod_def::GMPwEoxpjrA::poF3eBJ0RFWbhnPacMjqsA` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization Invitation | POST | `/v1` | `conn_mod_def::GMPwDGOl0vA::icb9lftmRdGrYm6I7eZYnA` |
| Get an Organization Invitation by Slug | POST | `/v1` | `conn_mod_def::GMPwDGYyiLA::MthHJGfAQgCq7aieGp7SDg` |
| Revoke an Organization Invitation | POST | `/v1` | `conn_mod_def::GMPwDOZPsug::FgMFFbZFTRCEPZ1wvD7JRQ` |

### Agent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Agent by Slug | POST | `/v1` | `conn_mod_def::GMPwBzi9VZA::K1tOkkaTQXGT19RoWs18nA` |
| Stop an Agent | POST | `/v1` | `conn_mod_def::GMPwBxqLUsA::Ozj84dFvTeqOaoswu7i1aQ` |

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| Pause an Agent | POST | `/v1` | `conn_mod_def::GMPwBy6vivA::YCnmAaJpR3GNIWWA65P64g` |
| Resume an Agent | POST | `/v1` | `conn_mod_def::GMPwBx4D42g::jCVyYFe2RdibbLXAsZ_ooA` |

### AgentToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Find an Agent Token by Slug | POST | `/v1` | `conn_mod_def::GMPwBziyeFA::051bwRY4TgKSkO7qzEkqng` |
| Revoke an Unclustered Agent Token | POST | `/v1` | `conn_mod_def::GMPwB6zYnbg::KZkKjD07TaSG6NOy_9D_iA` |

### ApiAccessTokenCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Authorize an API Access Token Code | POST | `/v1` | `conn_mod_def::GMPwB7OVXOA::SrY8Utf7RPiRMu7mwGFdug` |
| Find an API Access Token Code | POST | `/v1` | `conn_mod_def::GMPwB7NlV-g::3jlqrJNtRVCEcciRFd7j4w` |

### Artifacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Artifact | POST | `/v1` | `conn_mod_def::GMPwCK3McnA::yRsWA5Q_QIWBUxPzzU-U5A` |
| Get an Artifact by UUID | POST | `/v1` | `conn_mod_def::GMPwCGZEuag::2OS6MY-_QYyJDjfc0XwVKg` |

### ClusterAgentToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke a Cluster Agent Token | POST | `/v1` | `conn_mod_def::GMPwCbazY3A::iVogNshJS2WD46Rn5dS3xQ` |
| Update a Cluster Agent Token Using Cluster Agent Token Update | POST | `/v1` | `conn_mod_def::GMPwCctejoA::Y1MYWLk8SoyLrv3Rhs83Eg` |

### PipelineTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Pipeline Template | POST | `/v1` | `conn_mod_def::GMPwDrWQF0A::i55o3WWVQ0OT-FZsPcrIaw` |
| Update a Pipeline Template | POST | `/v1` | `conn_mod_def::GMPwD3Yov3A::Fe-LvlnEQ82J9dJZicokoQ` |

### PipelineTemplate

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pipeline Template | POST | `/v1` | `conn_mod_def::GMPwD4ChOpA::-BC9tIYtTl2feJoNgqcuyg` |
| Find a Pipeline Template | POST | `/v1` | `conn_mod_def::GMPwDtV4o7A::u2R7l7YFT_aUVtWD85pVFg` |

### TeamPipeline

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Team Pipeline | POST | `/v1` | `conn_mod_def::GMPwEhBwsfg::1usU1CdbTP-zcPFVEUmlfw` |
| Update a Team Pipeline | POST | `/v1` | `conn_mod_def::GMPwEdsBa3A::B6IDnf3JQuyKgRCulSjKeA` |

### TeamSuite

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Team Suite | POST | `/v1` | `conn_mod_def::GMPwEoN1OsA::_ZpzsKqRRRyXrAFEh3TDOw` |
| Update a Team Suite Access Level | POST | `/v1` | `conn_mod_def::GMPwEvJu5cA::tHmSTerITK6DsRNAE9cSGg` |

### PipelineWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Pipeline Webhook | POST | `/v1` | `conn_mod_def::GMPwDiSVRLg::MSyhx9-OTdmoIFWHvTAOAg` |
| Rotate a Pipeline Webhook URL | POST | `/v1` | `conn_mod_def::GMPwDiezwsg::KALNaPEdQTiz6JafzBN4KQ` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Email Address for the Current User | POST | `/v1` | `conn_mod_def::GMPwCtgLjBg::i28xHGM_RkyfIuwYblRCfQ` |
| Resend a Verification Email | POST | `/v1` | `conn_mod_def::GMPwCs1FlQg::7w-h5DtzSrSsoIX5V6VC-w` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Find an Organization | POST | `/v1` | `conn_mod_def::GMPwC_sSFIg::4e15ZZ06RayubOoQHUJt0g` |
| Update an Organization's Inactive Token Revocation Period | POST | `/v1` | `conn_mod_def::GMPwDaLMZlA::rFIKwOiiT4-s9eb-3Y-WCA` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Organization Member | POST | `/v1` | `conn_mod_def::GMPwDOrUg3A::zqFzNJTzS1-gyzW-P7w4Pg` |
| Update an Organization Member | POST | `/v1` | `conn_mod_def::GMPwDOEXeLA::iksIBEDbQbCUtNKZ2RTLbA` |

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Annotation | POST | `/v1` | `conn_mod_def::GMPwB6-sbpg::PPvVPx9GQpieWyE5jt0cNw` |

### AgentTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Agent Token | POST | `/v1` | `conn_mod_def::GMPwB-W9log::pepUVMN9RSGKHE0oThMq5Q` |

### AuditEvent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audit Event | POST | `/v1` | `conn_mod_def::GMPwCFshMXg::YYTGDch3SLSYV34FSgIT3Q` |

### BuildAnnotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Annotate a Build | POST | `/v1` | `conn_mod_def::GMPwCF1L-Og::N8ywl7abTEWwvzpFYN0sGg` |

### Builds

| Action | Method | Path | Action id |
|---|---|---|---|
| Retry Failed Jobs in a Build | POST | `/v1` | `conn_mod_def::GMPwCSkFH_A::CBNZO9X7SMK4jzTAo2TAHA` |

### ClusterAgentTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Cluster Agent Token | POST | `/v1` | `conn_mod_def::GMPwCS8l9Qg::NIBHPbOHQbCnLUe7M6sGmA` |

### PipelineSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Pipeline Schedule | POST | `/v1` | `conn_mod_def::GMPwDxJC9NA::7-3OPc7bTVep49XYHh7uTw` |

### Registries

| Action | Method | Path | Action id |
|---|---|---|---|
| Find a Registry | POST | `/v1` | `conn_mod_def::GMPwD5onZKg::JfXW28ivQu-45Gb1EpiTkw` |

### Secrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Secret by UUID | POST | `/v1` | `conn_mod_def::GMPwEEfCxJA::e5ZFBjBERAiq8eCvamY5yA` |

### TeamPipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Pipeline to a Team | POST | `/v1` | `conn_mod_def::GMPwEg4mwfg::oe_Iu_MwRWih_e2FEyMbig` |

### TeamSuiteAssociation

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Suite Association | POST | `/v1` | `conn_mod_def::GMPwEn8BnJA::vcUKw7WfTV27Xwp-XNHN6A` |

### TotpConfigurations

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a TOTP Configuration for the Current User | POST | `/v1` | `conn_mod_def::GMPwEvCQWfA::k49blCV3QKmbB5Oow6rf-A` |

### TotpConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete TOTP Configuration | POST | `/v1` | `conn_mod_def::GMPwEv1poKA::UdO-UScgSOGQbbc7eyFv0Q` |

### Totp

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate TOTP Using Viewer | POST | `/v1` | `conn_mod_def::GMPwEwLKQpg::8LgNTxRCSl-0GJ-IEoODpA` |

### TotpRecoveryCodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Regenerate TOTP Recovery Codes | POST | `/v1` | `conn_mod_def::GMPwE3kYWOA::2msvqTXTQIGVOWu0kJxgMA` |

### Viewer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current Viewer | POST | `/v1` | `conn_mod_def::GMPwE4HHcig::BOwns_5eRNGjFdZ8A85J3Q` |

### OrganizationMemberTwoFactorAuthenticationRequirement

| Action | Method | Path | Action id |
|---|---|---|---|
| Update an Organization's Member Two-Factor Authentication Requirement | POST | `/v1` | `conn_mod_def::GMPwDHGmnfg::qnuN7imqTd60w-kGieYl6w` |

This lists 90 of 107 actions. For anything not here, call `search_one_platform_actions` with platform `buildkite`. The full catalog is at https://www.withone.ai/knowledge/buildkite.

## When a call fails

The error comes from Buildkite, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/buildkite

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
