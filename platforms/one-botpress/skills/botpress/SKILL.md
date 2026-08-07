---
name: botpress
description: Botpress is a conversational AI platform that provides tools, workflows, and APIs for building, deploying, and managing chatbots and AI agents, allowing developers and teams to automate customer interactions and integrate assistants across websites, messaging channels, and business systems. Read and write Botpress data through One: workspaces, plugins, bots, interfaces, integrations, workspacemembers and more, 111 actions with real parameter documentation. Use whenever the user asks to look something up in Botpress, create or update a record there, or build code against the Botpress API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: botpress
  generated-from: one-knowledge-base
---

# Botpress through One

Botpress is a conversational AI platform that provides tools, workflows, and APIs for building, deploying, and managing chatbots and AI agents, allowing developers and teams to automate customer interactions and integrate assistants across websites, messaging channels, and business systems.

One exposes Botpress through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `botpress` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Botpress is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Botpress account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace | GET | `/v1/admin/workspaces/{{id}}` | `conn_mod_def::GMkN_fCJSAA::YpsKEABaSNSoOyVlODR45g` |
| Get a Workspace's Public Details | GET | `/v1/admin/workspaces/{{id}}/public` | `conn_mod_def::GMkN_e-WUMg::WZAJLlNQSd69INH8-jJU2w` |
| Get Upcoming Invoice for a Workspace | GET | `/v1/admin/workspaces/{{id}}/billing/upcoming-invoice` | `conn_mod_def::GMkN_e-Ftsg::QSS3q4BvT6CxJ52L5qe_tA` |
| List Public Workspaces | GET | `/v1/admin/workspaces/public` | `conn_mod_def::GMkOAFqEg1g::vj7jYBfHSFqN6hNRg8QfZQ` |
| List Workspaces | GET | `/v1/admin/workspaces` | `conn_mod_def::GMkOAXIyDBg::Oxmy1TmsTdKv_it6HQ75ng` |
| Charge Unpaid Invoices for a Workspace | POST | `/v1/admin/workspaces/{{id}}/billing/invoices/charge-unpaid` | `conn_mod_def::GMkN-FQRFyg::ITHK2Vk0QzqdTiPvulheaw` |
| Check Handle Availability for a Workspace | PUT | `/v1/admin/workspaces/handle-availability` | `conn_mod_def::GMkN-AgHf8A::QeMmDR-cT92Z9MESAiN6GA` |
| Create a Workspace | POST | `/v1/admin/workspaces` | `conn_mod_def::GMkN-UQcTuA::7JZ5n7LIReuV77obb7G9hw` |
| Delete a Workspace | DELETE | `/v1/admin/workspaces/{{id}}` | `conn_mod_def::GMkN-ic-YWg::NbW8XG6DTXKZOjQTKYKOTQ` |
| Migrate a Workspace to V4 Billing | POST | `/v1/admin/workspaces/{{id}}/migrate-to-v4` | `conn_mod_def::GMkOAX0Jzdg::HSrfpWmLT-Svd9qM5LfZ7w` |
| Update a Workspace | PUT | `/v1/admin/workspaces/{{id}}` | `conn_mod_def::GMkOAypDHwg::W1T6ScfKSz65zFGzC0wDjQ` |

### Plugins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Dereferenced Plugin by ID | GET | `/v1/admin/plugins/{{id}}/dereferenced` | `conn_mod_def::GMkN-_GHfIg::HlVq2j2KRXmh7BXVUzj5jQ` |
| Get a Dereferenced Public Plugin by ID | GET | `/v1/admin/hub/plugins/{{id}}/dereferenced` | `conn_mod_def::GMkN--t8Zdg::5mK6puwgR06m9ZLHTISuIQ` |
| Get a Plugin by ID | GET | `/v1/admin/plugins/{{id}}` | `conn_mod_def::GMkN_PDCFDg::egQp3Xz3SbmwhDJGqy9llA` |
| Get a Plugin by Name and Version | GET | `/v1/admin/plugins/{{name}}/{{version}}` | `conn_mod_def::GMkN_PWF1gg::CxtCmvmzQs-SMxQlCUKGXA` |
| Get a Public Plugin by ID | GET | `/v1/admin/hub/plugins/{{id}}` | `conn_mod_def::GMkN_YGGgPg::LybT7nGzS8K3K0AgLObNAQ` |
| Get a Public Plugin by Name and Version | GET | `/v1/admin/hub/plugins/{{name}}/{{version}}` | `conn_mod_def::GMkN_XIVDvA::gwEPYxBkS7e6DZnIAiV-kQ` |
| List Plugins | GET | `/v1/admin/plugins` | `conn_mod_def::GMkOAFqxexA::PtrRbTu-TdCIXvRuvVCWqA` |
| List Public Plugins | GET | `/v1/admin/hub/plugins` | `conn_mod_def::GMkOAFp7raA::6J9NIVnbQ5umDzZ8jxusnQ` |
| Create a Plugin | POST | `/v1/admin/plugins` | `conn_mod_def::GMkN-UOpQcA::5pskzuxyRquuxZ4ISrJ6nw` |
| Delete a Plugin | DELETE | `/v1/admin/plugins/{{id}}` | `conn_mod_def::GMkN-iskkJA::rvqfdfCKQaC5IPSfcgUCow` |
| Update a Plugin by ID | PUT | `/v1/admin/plugins/{{id}}` | `conn_mod_def::GMkOAzh5oBA::-Mwmg5uUSOKCNQxTbdjWaQ` |

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot | GET | `/v1/admin/bots/{{id}}` | `conn_mod_def::GMkN-20ewgg::K8EOy3CkQw21vRNqEbaBww` |
| Get a Bot's Webchat | GET | `/v1/admin/bots/{{id}}/webchat` | `conn_mod_def::GMkN-_F__pA::LYnbhgFcSaymdIQe19P9AQ` |
| Get Bot JSON for a Bot | GET | `/v1/admin/bots/{{id}}/bot-json` | `conn_mod_def::GMkN-3XGDzg::RyMJ7eIvSOeGkQ7xTWvHdQ` |
| List Bots | GET | `/v1/admin/bots` | `conn_mod_def::GMkN_0bR6kA::rwK7isifSA-iZj-OMSgZ7g` |
| Create a Bot | POST | `/v1/admin/bots` | `conn_mod_def::GMkN-FP8qLA::HkhNZxAhRmaGqGHQob16jQ` |
| Delete a Bot | DELETE | `/v1/admin/bots/{{id}}` | `conn_mod_def::GMkN-ba8ZNA::sxqe7widTEKTDB_sCj0y9g` |
| Publish From Bot Json for a Bot | POST | `/v1/admin/bots/{{id}}/publish-from-bot-json` | `conn_mod_def::GMkOAXImZ6A::fH5Bz3CDR0y9iGoTkmG7_Q` |
| Rotate a Bot's Signing Secrets | POST | `/v1/admin/bots/{{id}}/signing-secrets/rotate` | `conn_mod_def::GMkOA6t8mmg::f7kETC3kRIKuBF5ubqvqzA` |
| Transfer a Bot to Another Workspace | POST | `/v1/admin/bots/{{id}}/transfer` | `conn_mod_def::GMkOAkUWb3A::da88l7jNTwyIWCSuloNmgA` |
| Update a Bot | PUT | `/v1/admin/bots/{{id}}` | `conn_mod_def::GMkOArRpPsA::iFaU52oKR6a5i76dnxiI6A` |

### Interfaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Public Interface by Name and Version | GET | `/v1/admin/hub/interfaces/{{name}}/{{version}}` | `conn_mod_def::GMkN_YYT9HA::z1iATV7oTmC2NLwMnAh6LQ` |
| Get an Interface by ID | GET | `/v1/admin/interfaces/{{id}}` | `conn_mod_def::GMkN_GqseMA::VmaztNydTouaMXZ4UGdphg` |
| Get an Interface by Name and Version | GET | `/v1/admin/interfaces/{{name}}/{{version}}` | `conn_mod_def::GMkN_HQ7yHg::iO6NLGdkS0CL7yXpAp7rRw` |
| List Interfaces Using Admin | GET | `/v1/admin/interfaces` | `conn_mod_def::GMkN_-ZyIIg::8oB1alKMT6yShecp9bG2UA` |
| List Public Interfaces Using Admin Hub | GET | `/v1/admin/hub/interfaces` | `conn_mod_def::GMkOAF_zADA::ZTB4Fp1vTWKDtTV4eublig` |
| Create Interface Using Admin | POST | `/v1/admin/interfaces` | `conn_mod_def::GMkN-Mdd0Gg::tE_oXD-SQBmEWVAGJhCvMw` |
| Delete an Interface | DELETE | `/v1/admin/interfaces/{{id}}` | `conn_mod_def::GMkN-mcyJUg::hsVj_417TTu04hmpVoeRhw` |
| Update an Interface | PUT | `/v1/admin/interfaces/{{id}}` | `conn_mod_def::GMkOArnkPrg::6vFx47oaShCsZ32UfJ20cQ` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integration | GET | `/v1/admin/integrations/{{id}}` | `conn_mod_def::GMkN_HEEGTA::S-q0ofdVQmGzlxUnQM2Q2w` |
| List Integrations Using Admin | GET | `/v1/admin/integrations` | `conn_mod_def::GMkN_-jeF3g::3cOuFcMxTay4eHrGdftldw` |
| List Public Integrations | GET | `/v1/admin/hub/integrations` | `conn_mod_def::GMkOAHl3Htg::Tm70MujETv6Ytl4uugQ8Ig` |
| Delete an Integration | DELETE | `/v1/admin/integrations/{{id}}` | `conn_mod_def::GMkN-aP4srg::0WtG9hNCTkC11C5LlWTMcQ` |
| Request Verification for Integrations | POST | `/v1/admin/integrations/request-verification` | `conn_mod_def::GMkOAj0MDiA::dpWKh40NSt2K4FNdzwo-7w` |
| Rotate Signing Secrets for an Integration | POST | `/v1/admin/integrations/{{id}}/signing-secrets/rotate` | `conn_mod_def::GMkOA7FjHdA::-Z6iMVYbQPyscWlGY7yTOA` |
| Validate an Integration Update | PUT | `/v1/admin/integrations/{{id}}/validate` | `conn_mod_def::GMkOAyaIi_A::AZFFkeEvTeyk1KIabm-dSQ` |
| Validate Integration Creation | POST | `/v1/admin/integrations/validate` | `conn_mod_def::GMkOAzKSuwA::x3KVpWIsRjiXe-lkAVeB9A` |

### WorkspaceMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User's Workspace Member Details | GET | `/v1/admin/workspace-members/me` | `conn_mod_def::GMkN_rEi-dA::F7Kx4DTlShynOfO4kY27jQ` |
| List Workspace Members | GET | `/v1/admin/workspace-members` | `conn_mod_def::GMkOAOKGecg::z_AGkccDSa60Nlba8BMz2Q` |
| Create a Workspace Member | POST | `/v1/admin/workspace-members` | `conn_mod_def::GMkN-UBYVYg::5mvahe_GSnOWTRbTBH3NUw` |
| Delete a Workspace Member | DELETE | `/v1/admin/workspace-members/{{id}}` | `conn_mod_def::GMkN-ij9wMA::OpE9e3CjR5qINThMEsupfQ` |
| Update a Workspace Member | PUT | `/v1/admin/workspace-members/{{id}}` | `conn_mod_def::GMkOAzRoyvA::PTJXlVz6Rpm851ulkyK4Tg` |

### IntegrationApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List Integration API Keys | GET | `/v1/admin/integrations/iaks` | `conn_mod_def::GMkN_9E-GlA::nqjvwndnQJmPoXSTN0vBwg` |
| Create an Integration API Key | POST | `/v1/admin/integrations/iaks` | `conn_mod_def::GMkN-MdTtng::dmT4fPdZSTa7Gz5sWyvMsg` |
| Delete an Integration API Key | DELETE | `/v1/admin/integrations/iaks/{{id}}` | `conn_mod_def::GMkN-baxLbg::vMhZdxEXSMqiG1E_ECd0dw` |

### BotApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bot API Keys | GET | `/v1/admin/bots/baks` | `conn_mod_def::GMkN_zStYkA::ruRcNusqTL22W13xn5j3CQ` |
| Create a Bot API Key | POST | `/v1/admin/bots/baks` | `conn_mod_def::GMkN-Mo-KFA::mo4KWzU_RcKW9tRGURJeaw` |
| Delete a Bot API Key | DELETE | `/v1/admin/bots/baks/{{id}}` | `conn_mod_def::GMkN-cGd8mA::sS78A-iRSm6tpyUi9SmfCA` |

### AdminIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Admin Integration by Name and Version | GET | `/v1/admin/integrations/{{name}}/{{version}}` | `conn_mod_def::GMkN_H_F6kg::ytQlROwHTJS2iKU8KhgumQ` |
| Create an Admin Integration | POST | `/v1/admin/integrations` | `conn_mod_def::GMkN-M3s-5g::1ABGuBkDQEep_17WM5XPIg` |
| Update an Admin Integration Version | PUT | `/v1/admin/integrations/{{id}}` | `conn_mod_def::GMkOAriDdjg::sw2pAQufQJeZy5bsh8uU3A` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Account | GET | `/v1/admin/account/me` | `conn_mod_def::GMkN-s4INfA::jMUBGv_rRUG7cPep3gAelQ` |
| Delete the Signed-in User Account | POST | `/v1/admin/account/me` | `conn_mod_def::GMkN-TSsEXA::kYfv8Z_2QSa2QIMF8VJrTQ` |
| Update the Signed-in User Account | PUT | `/v1/admin/account/me` | `conn_mod_def::GMkOAqWk7Qg::9pYjk_-DS6OA8F_ZBF-tdQ` |

### PersonalAccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List Personal Access Tokens for an Account | GET | `/v1/admin/account/pats` | `conn_mod_def::GMkN_7aiq8A::DfoHCREiRbiB-tNQGQJUvg` |
| Create a Personal Access Token for an Account | POST | `/v1/admin/account/pats` | `conn_mod_def::GMkN-T3dQ2g::dIKYRkjIQ2urr8K3So3vrQ` |
| Delete a Personal Access Token | DELETE | `/v1/admin/account/pats/{{id}}` | `conn_mod_def::GMkN-ic0LCA::FBwb8AeUSBGsuwz8aaDSBA` |

### BotVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Bot Version | GET | `/v1/admin/bots/{{id}}/versions/{{versionId}}` | `conn_mod_def::GMkN--fnzWg::s6CnVBNySGqB251_kmuHEg` |
| List Versions for a Bot | GET | `/v1/admin/bots/{{id}}/versions` | `conn_mod_def::GMkN_8Kbw9A::dT2MnK8VTKGqQ9KyWyscNQ` |
| Deploy a Bot Version | POST | `/v1/admin/bots/{{id}}/versions/deploy` | `conn_mod_def::GMkN-t0Pp0A::VlyLfL0qRxuDHxSWfxzY-A` |

### Usages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Multiple Usages | GET | `/v1/admin/usages/multiple` | `conn_mod_def::GMkN_PCqw3g::AuKjaAVyTYiaBtSMgeRvKQ` |
| List Usage Activity | GET | `/v1/admin/usages/{{id}}/activity` | `conn_mod_def::GMkOAOerQ3A::RQBrbLWQQ66ml-5TKGDMGA` |
| List Usage History for a Bot or Workspace | GET | `/v1/admin/usages/{{id}}/history` | `conn_mod_def::GMkOAPhZY8g::vQ1ODKzlQUehTveG16wXgA` |

### BotIssues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot Issue | GET | `/v1/admin/bots/{{id}}/issues/{{issueId}}` | `conn_mod_def::GMkN-20luzA::EOti4h75RIezkJsbw7Vcxw` |
| Delete a Bot Issue | DELETE | `/v1/admin/bots/{{id}}/issues/{{issueId}}` | `conn_mod_def::GMkN-bbmQ5A::NaC93-QxSZeTkmZNes1ISw` |

### AccountPreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account Preference | GET | `/v1/admin/account/preferences/{{key}}` | `conn_mod_def::GMkN-vYPJMg::xhyhtgJMR_Ocqm7v-38-eA` |
| Set an Account Preference | POST | `/v1/admin/account/preferences/{{key}}` | `conn_mod_def::GMkOAj0QCag::N9SapeIVRZ-nRRWAPxf_zA` |

### AdminUsages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Admin Usage Record | GET | `/v1/admin/usages/{{id}}` | `conn_mod_def::GMkN_jJGF8g::Fg1WKFERTACyHi_K_J3jmw` |
| List Daily Usage Activity for an Admin Usage Resource | GET | `/v1/admin/usages/{{id}}/daily-activity` | `conn_mod_def::GMkOAO9jOxg::FMAx4fV1RiOqeLY0BT6htg` |

### WorkspacePreferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workspace Preference | GET | `/v1/admin/workspaces/preferences/{{key}}` | `conn_mod_def::GMkN_puhmtA::gRiBfP4YTPGXZGiXMR0M4w` |
| Set a Workspace Preference | POST | `/v1/admin/workspaces/preferences/{{key}}` | `conn_mod_def::GMkOAkDlntA::NOjYYUAYRymh0EYA2IMxFA` |

### WorkspaceUsageByBot

| Action | Method | Path | Action id |
|---|---|---|---|
| Break Down Workspace Usage by Bot | GET | `/v1/admin/workspaces/{{id}}/usages/by-bot` | `conn_mod_def::GMkN-EGOBAg::U8610ig6Q_-nkLjHC6XvcA` |

### Quotas

| Action | Method | Path | Action id |
|---|---|---|---|
| Change AI Spend Quota | PUT | `/v1/admin/quotas/ai-spend` | `conn_mod_def::GMkN-Ffwf_A::N5JrSk2ETIOFXpZ3RMNqxA` |

### Versions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Version for a Bot | POST | `/v1/admin/bots/{{id}}/versions` | `conn_mod_def::GMkN-M2-z0g::rC1FWiX8RFqZJlm30xu5LA` |

### WorkspaceQuotaCompletionRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workspace Quota Completion Rates | GET | `/v1/admin/workspaces/usages/quota-completion` | `conn_mod_def::GMkN-u-0GVg::lc0ChWupRRmCQLA-HRKWMA` |

### AuditRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audit Records for a Workspace | GET | `/v1/admin/workspaces/{{id}}/audit-records` | `conn_mod_def::GMkN-vj_mbA::ut09czHTRpuv94dHh-WQ9w` |

### BotAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analytics for a Bot | GET | `/v1/admin/bots/{{id}}/analytics` | `conn_mod_def::GMkN-3Vy7fg::QYw1Jz_KSVyob3lwzVBRew` |

### BotsAllowlist

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bot's Allowlist | GET | `/v1/admin/bots/{{botId}}/allowlist` | `conn_mod_def::GMkN-3ZYJag::fF3xrbrsSKezipLbeo19zQ` |

### Logs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Logs for a Bot | GET | `/v1/admin/bots/{{id}}/logs` | `conn_mod_def::GMkN-_ZajFA::JQEJopSTQDaaUBHODkXD1w` |

This lists 90 of 111 actions. For anything not here, call `search_one_platform_actions` with platform `botpress`. The full catalog is at https://www.withone.ai/knowledge/botpress.

## When a call fails

The error comes from Botpress, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/botpress

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
