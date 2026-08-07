---
name: rollbar
description: Rollbar is an error monitoring and observability platform that enables developers to detect, analyze, and resolve application errors in real time by combining error tracking, session replay, and release insights to improve code quality and debugging workflows. Read and write Rollbar data through One: teams, pagerdutynotificationrules, projects, emailnotificationrules, slacknotificationrules, servicelinks and more, 100 actions with real parameter documentation. Use whenever the user asks to look something up in Rollbar, create or update a record there, or build code against the Rollbar API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rollbar
  generated-from: one-knowledge-base
---

# Rollbar through One

Rollbar is an error monitoring and observability platform that enables developers to detect, analyze, and resolve application errors in real time by combining error tracking, session replay, and release insights to improve code quality and debugging workflows.

One exposes Rollbar through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rollbar` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rollbar is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rollbar account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If a Team Has an Assigned User | GET | `/api/1/team/{{teamId}}/user/{{userId}}` | `conn_mod_def::GKsdm5I7VTg::qvJbpxN_R2OHPzboOqMhHg` |
| List a User's Teams | GET | `/api/1/user/{{userId}}/teams` | `conn_mod_def::GKsdnSQq3wg::0j-xy6CXSsqaleQer3qO4A` |
| List All Teams | GET | `/api/1/teams` | `conn_mod_def::GKsdmEw65-A::PIT0Vh_bSOilO6b2MHd2_A` |
| Assign a Team to a Project | PUT | `/api/1/team/{{teamId}}/project/{{projectId}}` | `conn_mod_def::GKsdmWytLPg::1DgneKNCSdCMjnzN9XOAcw` |
| Create a Team | POST | `/api/1/teams` | `conn_mod_def::GKsdmIZOlOA::We0BQCckTUyhO2FKFs74vA` |
| Remove a Team from a Project | DELETE | `/api/1/team/{{teamId}}/project/{{projectId}}` | `conn_mod_def::GKsdmSVUwZA::xYP0CsJfSkSkeKwOWfjjMA` |

### PagerDutyNotificationRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List PagerDuty Notification Rules | GET | `/api/1/notifications/pagerduty/rules` | `conn_mod_def::GKsdkCZbyDA::DzLH2PI2RmKAIMTndlm7GQ` |
| Create PagerDuty Notification Rules | POST | `/api/1/notifications/pagerduty` | `conn_mod_def::GKsdkVDpXNg::LkNMnZ3MT6OvrWSvVBCZeg` |
| Delete a PagerDuty Notification Rule | DELETE | `/api/1/notifications/pagerduty/rule/{{ruleId}}` | `conn_mod_def::GKsdj1XXVag::GdHfLxvGTgemIducxXlznQ` |
| Replace Existing PagerDuty Notification Rules | PUT | `/api/1/notifications/pagerduty/rules` | `conn_mod_def::GKsdkJD88mg::s47KJ3KPSuyNULToGGUxnA` |
| Update a PagerDuty Notification Rule by ID | PUT | `/api/1/notifications/pagerduty/rule/{{ruleId}}` | `conn_mod_def::GKsdkBdXMVg::8hjJtGEWSkSYrflT6orVQQ` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Projects | GET | `/api/1/team/{{teamId}}/projects` | `conn_mod_def::GKsdmfUfZbA::OCPHcp7HTQu-yMGOtyHeIA` |
| List a User's Projects | GET | `/api/1/user/{{userId}}/projects` | `conn_mod_def::GKsdnw66rCg::8vzzcR-1RfyjodthOmn5TA` |
| List All Projects | GET | `/api/1/projects` | `conn_mod_def::GKsdk1Ptoag::kRunqWINTMWpMB2NypOk2Q` |
| Create a Project | POST | `/api/1/projects` | `conn_mod_def::GKsdkqI3vCg::JdDBFz7rQjGbVfCOmjMMtg` |
| Delete a Project | DELETE | `/api/1/project/{{projectId}}` | `conn_mod_def::GKsdkrux-3g::zhPZBc2NT-2TrP0TWnvLdQ` |

### EmailNotificationRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Notification Rules | GET | `/api/1/notifications/email/rules` | `conn_mod_def::GKsdirD-OgA::lX4APfS_QBuny8ihECxXpA` |
| Create Email Notification Rules | POST | `/api/1/notifications/email/rules` | `conn_mod_def::GKsdirZW9Ig::EXRv2G6aRlqQaq9QUSyfxQ` |
| Delete an Email Notification Rule | DELETE | `/api/1/notifications/email/rule/{{ruleId}}` | `conn_mod_def::GKsdia-5-1g::UwpYBSksSEu1gBXGttYq7g` |
| Replace Email Notification Rules | PUT | `/api/1/notifications/email/rules` | `conn_mod_def::GKsdirEDx-A::O85A5mHCSEexwYExnPMC_w` |
| Update an Email Notification Rule by ID | PUT | `/api/1/notifications/email/rule/{{ruleId}}` | `conn_mod_def::GKsdirxml0g::brhxzf6FQwmakcfPS8vSkA` |

### SlackNotificationRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Slack Notification Rules | GET | `/api/1/notifications/slack/rules` | `conn_mod_def::GKsdlsgEhUA::Y1ft9U5eRka9UFMrNjA5Bg` |
| Create Slack Notification Rules | POST | `/api/1/notifications/slack/rules` | `conn_mod_def::GKsdlt3p6bg::PRKr26XXS_Gh6RluF_MULw` |
| Delete a Slack Notification Rule | DELETE | `/api/1/notifications/slack/rule/{{ruleId}}` | `conn_mod_def::GKsdlqfZI3A::Zn4YkCRsTfS8pJxc8ykdag` |
| Replace Existing Slack Notification Rules | PUT | `/api/1/notifications/slack/rules` | `conn_mod_def::GKsdl6cBhvg::rYO6PJ82RbawX_RXhB3rBQ` |
| Update a Slack Notification Rule by ID | PUT | `/api/1/notifications/slack/rule/{{ruleId}}` | `conn_mod_def::GKsdl861MWg::r_C-bS7dRrO5-7R6Ssl50w` |

### ServiceLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Link by ID | GET | `/api/1/service_links/{{id}}` | `conn_mod_def::GKsdlWxr1yA::ZoPa3YM-QHmgnFwCNBu67g` |
| List Service Links | GET | `/api/1/service_links` | `conn_mod_def::GKsdla_vUXA::xxK3-ncdT92Tj6r8rD4IAQ` |
| Create Service Links | POST | `/api/1/service_links` | `conn_mod_def::GKsdlgTsfWA::jiEX0fPDQPeQ7WgRJRfwsg` |
| Delete a Service Link | DELETE | `/api/1/service_links/{{id}}` | `conn_mod_def::GKsdlWeSQ2A::8i0LUGh4T1inW1f1HEJIJw` |
| Replace a Service Link | PUT | `/api/1/service_links/{{id}}` | `conn_mod_def::GKsdlonLpEg::pKEYbSwDSmS1b8cRGs_GHw` |

### WebhookNotificationRules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhook Notification Rules | GET | `/api/1/notifications/webhook/rules` | `conn_mod_def::GKsdn7K1YvA::gkcrUjVGSbW3n2Y4yb9ArA` |
| Create Webhook Notification Rules | POST | `/api/1/notifications/webhook/rules` | `conn_mod_def::GKsdn7ZamUg::9pqqCidxTraBqUfn6d4vZw` |
| Delete a Webhook Notification Rule | DELETE | `/api/1/notifications/webhook/rule/{{ruleId}}` | `conn_mod_def::GKsdnuLIqEA::F-CUjI3zT4GFga7driJaDA` |
| Replace Existing Webhook Notification Rules | PUT | `/api/1/notifications/webhook/rules` | `conn_mod_def::GKsdn7tegPg::pOiQUB7dQdyQg4TbecBQog` |

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item by Project Counter | GET | `/api/1/item_by_counter/{{counter}}` | `conn_mod_def::GKsdi16k4KA::tgKI89lcST6zWE2TdSq0iA` |
| List All Items | GET | `/api/1/items` | `conn_mod_def::GKsdjQJ4GOA::tlAvUI3BS_Wp1XjEohDuIA` |
| Create Item | POST | `/api/1/item/` | `conn_mod_def::GKsdi0IrS9A::iweVMbc3Skiyif7f6Eq3eg` |
| Update an Item | PATCH | `/api/1/item/{{itemid}}` | `conn_mod_def::GKsdjOy5idA::u2YPH-Q0TDe8tVivNgNtkQ` |

### Deploy

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Deploy | GET | `/api/1/deploy/{{deployId}}` | `conn_mod_def::GKsdiTDA-hg::CDTytONpTSShsCjf_pImBw` |
| Report a Deploy | POST | `/api/1/deploy` | `conn_mod_def::GKsdiN7x2LA::z1jk-GvmSCG7L7VV5pixnw` |
| Update a Deploy | PATCH | `/api/1/deploy/{{deployId}}` | `conn_mod_def::GKsdihnBqJg::zsf7c3RQTQSdhE6aVOmRXg` |

### ProjectAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Access Tokens | GET | `/api/1/project/{{projectId}}/access_tokens` | `conn_mod_def::GKsdkerdHwA::inquC-NWSLyercomOlpCCw` |
| Create a Project Access Token | POST | `/api/1/project/{{projectId}}/access_tokens` | `conn_mod_def::GKsdkgbAzNA::hhDW_1o0SaGXvzc9l87ARA` |
| Delete a Project Access Token | DELETE | `/api/1/project/{{projectId}}/access_token/{{tokenIdentifier}}` | `conn_mod_def::GKsdkfCApfg::5U6vpmkKQ1WgM1EwLJcZSQ` |

### Occurrences

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Occurrences in a Project | GET | `/api/1/instances` | `conn_mod_def::GKsdjw_DHlg::qYKjdQZbRdikGMZQlHDXKA` |
| List All Occurrences in an Item | GET | `/api/1/item/{{itemId}}/instances` | `conn_mod_def::GKsdjyabYpg::Bx8F1O5QSUS5c_YtHoTkAA` |

### PeopleDeleteJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Person Deletion Status | GET | `/api/1/people/delete_jobs/{{jobId}}` | `conn_mod_def::GKsdkEbw5Gg::POAQRfYxQPC23yrtbYe1wg` |
| Request Person Deletion | POST | `/api/1/people/delete_jobs/` | `conn_mod_def::GKsdkdQ3YFg::F2kZZgBVRV6WA1ER5WP4sw` |

### ProjectAccessTokenRateLimit

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Project Access Token Rate Limit | PATCH | `/api/1/project/{{projectId}}/access_token` | `conn_mod_def::GKsdkqvGzWA::vrXnYq-TQEuzCqOa8S7tsA` |
| Update a Project Access Token Rate Limit | PATCH | `/api/1/project/{{projectId}}/access_token/{{tokenIdentifier}}` | `conn_mod_def::GKsdks3UcDg::0eEToMY4Snu6LA9aRRfSZA` |

### SessionReplay

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session Replay for an Environment Session | GET | `/api/1/environment/{{environment}}/session/{{sessionId}}/replay/{{replayId}}` | `conn_mod_def::GKsdk28CFLA::7jLep4jMSNm_pkSBuUk2ag` |
| Delete a Session's Replay in an Environment | DELETE | `/api/1/environment/{{environment}}/session/{{sessionId}}/replay/{{replayId}}` | `conn_mod_def::GKsdk39bqIA::Em3tGT7JSAGgPZeX3A2WtQ` |

### RqlJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Check an RQL Job | GET | `/api/1/rql/job/{{jobId}}` | `conn_mod_def::GKsdlAH9ZnA::Um81dqhWTq6Thxh64p4OYg` |
| Cancel an RQL Job | POST | `/api/1/rql/job/{{jobId}}/cancel` | `conn_mod_def::GKsdlOwADAA::Zkb0iTReQWq-GqFsAgT3rA` |

### Versions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Code Version Details for a Project | GET | `/api/1/versions/{{version}}` | `conn_mod_def::GKsdnb3otIA::y7VUkBZ2SJ2GluVTpHE7sQ` |
| List Items by Code Version | GET | `/api/1/versions/{{version}}/items` | `conn_mod_def::GKsdncew1xg::5WnkafhCT36M77m4FV9LUg` |

### WebhookNotificationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook Notification Rule by ID | GET | `/api/1/notifications/webhook/rule/{{ruleId}}` | `conn_mod_def::GKsdn-BJyFA::rs_1xHylSG-idzg2MNdYcg` |
| Update a Webhook Notification Rule | PUT | `/api/1/notifications/webhook/rule/{{ruleId}}` | `conn_mod_def::GKsdn6N8hUg::KQi9VuYBTISdD_k61c-X3A` |

### Item

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Item by ID | GET | `/api/1/item/{{itemid}}` | `conn_mod_def::GKsdi9Cgr-A::Nga2YxRLQJmpPd7ARN25qA` |
| Get an Item by Occurrence UUID | GET | `/api/1/item/` | `conn_mod_def::GKsdi1uK8og::EPtmTGLYS3qPptIsnUZ-pA` |

### Occurrence

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Occurrence | GET | `/api/1/instance/{{instanceId}}` | `conn_mod_def::GKsdj3V2SkA::9LxPATZ_StKC6B--si-kVA` |
| Delete an Occurrence | DELETE | `/api/1/instance/{{instanceId}}` | `conn_mod_def::GKsdjowk-yA::hnknTicnRqCyBHERXB0AdQ` |

### RqlJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List All RQL Jobs | GET | `/api/1/rql/jobs/` | `conn_mod_def::GKsdlXT3uMg::UmH7pfIAQ6C6xvne-uIXvg` |
| Create an RQL Job | POST | `/api/1/rql/jobs/` | `conn_mod_def::GKsdlBLxIxg::bcNzKeIMTcG_EIABfDUD2g` |

### Team

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team | GET | `/api/1/team/{{teamId}}` | `conn_mod_def::GKsdmFfyZvg::aL4HkHahQO2iPTgyvf8cpg` |
| Delete a Team | DELETE | `/api/1/team/{{teamId}}` | `conn_mod_def::GKsdmF0URog::F1RGNmq-Q_W_xoxmg1jsZg` |

### TeamUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign a User to a Team | PUT | `/api/1/team/{{teamId}}/user/{{userId}}` | `conn_mod_def::GKsdmwvZwIg::SOjp_tM6R5etswJiU4-PgA` |
| Remove a User from a Team | DELETE | `/api/1/team/{{teamId}}/user/{{userId}}` | `conn_mod_def::GKsdnKp5cbA::kf_7HdkFTAekLJbudcr46w` |

### ActiveOccurrenceCounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Active Occurrence Counts | GET | `/api/1/reports/occurrence_counts` | `conn_mod_def::GKsdk2yomDg::xzEsSzeMTl2m-2Ca4eaxFQ` |

### SourceMaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a JS Source Map | POST | `/api/1/sourcemap` | `conn_mod_def::GKsdl4WKbzA::0402qs5sQO6jE38NeJ3j6Q` |

### TeamProjectAssignment

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If a Team Is Assigned to a Project | GET | `/api/1/team/{{teamId}}/project/{{projectId}}` | `conn_mod_def::GKsdmUO_NZg::IfxnaPdpQdSEloxWMghDhQ` |

### Invitation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Invitation | GET | `/api/1/invite/{{inviteId}}` | `conn_mod_def::GKsdmzKegtA::ZpgVmU79SQOlq8jfJG2gSg` |

### TeamInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Invitations | GET | `/api/1/team/{{teamId}}/invites` | `conn_mod_def::GKsdnLnx3OA::kngqX88-Rf-Miya6sH9BDQ` |

### Deploys

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Deploys | GET | `/api/1/deploys` | `conn_mod_def::GKsdiTCrL_g::EmcSILHMTd-DwkSdHOdWZQ` |

### Project

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/api/1/project/{{projectId}}` | `conn_mod_def::GKsdkp-ll8g::jRvbNRssQGmvw0visfIeyg` |

### TopActiveItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Active Items | GET | `/api/1/reports/top_active_items` | `conn_mod_def::GKsdlBLpbnA::sTx1oPynSiKyestIMebaQA` |

### TeamsUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team's Users | GET | `/api/1/team/{{teamId}}/users` | `conn_mod_def::GKsdnMsSUsA::zO71XlfaQmumUbJ6ubKVVQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Users | GET | `/api/1/users` | `conn_mod_def::GKsdneluEAA::UPUpzxZsQ1mf_BAh6f9wyA` |

### EmailNotificationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Notification Rule by ID | GET | `/api/1/notifications/email/rule/{{ruleId}}` | `conn_mod_def::GKsdisP5xPg::h7AO07CDRtiCoWkTwllEiw` |

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Environments | GET | `/api/1/environments` | `conn_mod_def::GKsdjErCdvA::vCXBkP_QTHiz4xR2LfCG5Q` |

### OccurrencesMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Occurrences Metrics Over a Span of Time | POST | `/api/1/metrics/occurrences` | `conn_mod_def::GKsdjSb2v6A::6s0fpSQsQAWwa7zDjIkXfw` |

### ResolutionTimeMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Resolution Time Metrics for Projects | POST | `/api/1/metrics/ttr` | `conn_mod_def::GKsdjTeZjYg::h4a8PYlUSI67NQsihi-bYA` |

### MetricsItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Metrics for Items | POST | `/api/1/metrics/items` | `conn_mod_def::GKsdjfxDaJg::Pfh5vwoTTlSDppArW3vc-A` |

### WebhookNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Webhook Notifications | PUT | `/api/1/notifications/webhook` | `conn_mod_def::GKsdjn2HW6g::_NcQISCLSQaDA0vBFGaztw` |

### SlackNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Slack Notifications | PUT | `/api/1/notifications/slack` | `conn_mod_def::GKsdjn6W50g::bliOm0DcTEe_PEc-bKinEw` |

### EmailNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure Email Notifications Integration | PUT | `/api/1/notifications/email` | `conn_mod_def::GKsdjoQVlKg::hcHl9TGlTDW3BtZ-EIuoyw` |

### PagerDutyNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Configure PagerDuty Notifications | PUT | `/api/1/notifications/pagerduty` | `conn_mod_def::GKsdjo-pR7A::uSav01wZRcSPCCtvp6oEAQ` |

### PagerDutyNotificationRule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a PagerDuty Notification Rule | GET | `/api/1/notifications/pagerduty/rule/{{ruleId}}` | `conn_mod_def::GKsdj4gQa7g::j-qP8OsZTO-VoBAGrdjlSQ` |

### ProjectAccessToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Project Access Token | DELETE | `/api/1/project/{{projectId}}/access_token` | `conn_mod_def::GKsdkhHDbyA::nwkn5xnIQKKr0LRk6yJxUg` |

This lists 90 of 100 actions. For anything not here, call `search_one_platform_actions` with platform `rollbar`. The full catalog is at https://www.withone.ai/knowledge/rollbar.

## When a call fails

The error comes from Rollbar, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rollbar

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
