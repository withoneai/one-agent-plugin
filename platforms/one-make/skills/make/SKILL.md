---
name: make
description: Make is a no-code automation platform that allows users to visually build workflows connecting apps and services, enabling the automation of tasks and data transfer across systems. Read and write Make data through One: scenarios, organizations, sdkapps, users, hooks, teams and more, 441 actions with real parameter documentation. Use whenever the user asks to look something up in Make, create or update a record there, or build code against the Make API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: make
  generated-from: one-knowledge-base
---

# Make through One

Make is a no-code automation platform that allows users to visually build workflows connecting apps and services, enabling the automation of tasks and data transfer across systems.

One exposes Make through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `make` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Make is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Make account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Scenarios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scenario Blueprint | GET | `/api/v2/scenarios/{{scenarioId}}/blueprint` | `conn_mod_def::GJ43RPnVdCk::ypg9yOsWT3GHI4GG6ZOpyg` |
| Get a Scenario’s Consumption Overview | GET | `/api/v2/scenarios/{{scenarioId}}/consumption-overview` | `conn_mod_def::GJ43RTgjMnI::rZk9W41sQea7izQbdtd_6g` |
| Get a Scenario's Custom Properties | GET | `/api/v2/scenarios/{{scenarioId}}/custom-properties` | `conn_mod_def::GJ43RaEH2FU::TCLbhPstStKBw2UxxVKQ8w` |
| Get a Scenario’s Details | GET | `/api/v2/scenarios/{{scenarioId}}` | `conn_mod_def::GJ43QwcWiZU::ANEl016mTzifffoVMN7DMQ` |
| Get a Scenario’s Interface | GET | `/api/v2/scenarios/{{scenarioId}}/interface` | `conn_mod_def::GJ43Qw4W9WM::pai6-LnxR8OyoE6NIhpt4g` |
| Get a Scenario’s Tool Configuration | GET | `/api/v2/scenarios/tools/{{scenarioId}}` | `conn_mod_def::GJ43SXf5PwI::hJgV_BXrQ6GR9lmHd7B9Bw` |
| Get a Scenario’s Usage (Last 30 Days) | GET | `/api/v2/scenarios/{{scenarioId}}/usage` | `conn_mod_def::GJ43QxWFHTE::rFOD0xktS-G_PCZj4nUyEg` |
| List a Scenario’s Replayable Executions | GET | `/api/v2/scenarios/replayable-executions/{{scenarioId}}` | `conn_mod_def::GJ43QoepoW8::8uFAbnycRfyiNVgZLrqOyw` |
| List Scenarios (for a Team or Organization) | GET | `/api/v2/scenarios` | `conn_mod_def::GJ43Q7Xh2hQ::F1eTfAGHTO-3VlXDzZXISg` |
| Activate a Scenario | POST | `/api/v2/scenarios/{{scenarioId}}/start` | `conn_mod_def::GJ43QMGNR5c::fBV4B0xcSam6aK3ush5ApQ` |
| Add Buildtime Variables to a Scenario | POST | `/api/v2/scenarios/{{scenarioId}}/build-variables` | `conn_mod_def::GJ43QMLpU5Q::O3RxSR97SrqbuWBvPMWk9Q` |
| Clone a Scenario | POST | `/api/v2/scenarios/{{scenarioId}}/clone` | `conn_mod_def::GJ43QhMPVek::2pH6u1vaRLyNE9zJNRwi4Q` |

13 more Scenarios actions are available through search.

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a User’s Team Permission Within an Organization | GET | `/api/v2/organizations/{{organizationId}}/check-team-permission` | `conn_mod_def::GJ43POx6yRc::sZbqG_ygTAyBwhFjoD1Tbg` |
| Get an Organization’s Active Subscription Details | GET | `/api/v2/organizations/{{organizationId}}/subscription` | `conn_mod_def::GJ43PbKkdbE::RnGOVc3OTc6XW_mHRWL2_Q` |
| Get an Organization’s Details | GET | `/api/v2/organizations/{{organizationId}}` | `conn_mod_def::GJ43Pkdni4E::BEtmYKxrRneQCQbWqEUBvw` |
| Get an Organization's Pause Status | GET | `/api/v2/internal/organizations/{{organizationId}}/paused` | `conn_mod_def::GJ43N5xpFPw::UROWSanDQa2qf8FoA2Cg_Q` |
| Get Organization Details by IDs (Internal) | GET | `/api/v2/internal/organizations` | `conn_mod_def::GJ43OP8ZErQ::Y19Tc7IuTdyZIYlba1zY1w` |
| List Organizations (Admin) | GET | `/api/v2/admin/organizations` | `conn_mod_def::GJ43HNz09D0::hQvBhd5bSfaOqLhGaJ9oiw` |
| List User Organizations | GET | `/api/v2/organizations` | `conn_mod_def::GJ43PuJHCMk::IV078ggMTqSbQB8Zgd1CNg` |
| Accept an Organization Invitation | POST | `/api/v2/organizations/accept-invitation` | `conn_mod_def::GJ43PG8GuGU::5DUDq3DMTFOpm-tE4nm8CQ` |
| Advance an Organization's Test Clock (Test Only) | POST | `/api/v2/organizations/{{organizationId}}/test-clock/advance` | `conn_mod_def::GJ43PH3gpy8::40I24NFLRieCWqIFGEa15A` |
| Assign Universal Discount to an Organization | POST | `/api/v2/admin/organizations/{{organizationId}}/assign-universal-discount` | `conn_mod_def::GJ43HESuPfs::T1NVSC4WS6imEoIp2KHFwg` |
| Cancel an Organization's Active Subscription | DELETE | `/api/v2/organizations/{{organizationId}}/subscription` | `conn_mod_def::GJ43PHH7qb8::L8zG22W9SvWtMsb5mVvbzA` |
| Change an Organization’s Subscription | PATCH | `/api/v2/organizations/{{organizationId}}/subscription` | `conn_mod_def::GJ43PPTbOdI::eaZjAXT3TkmLFj2A8PnmNw` |

9 more Organizations actions are available through search.

### SdkApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an App Review | GET | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/review` | `conn_mod_def::GJ43SmU5eAg::XcSCPqkwQD2BghG4SoTaZg` |
| Get an App’s Common Configuration | GET | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/common` | `conn_mod_def::GJ43Sm2bN14::a2cCR5n1TWq0uJC8mS3jHg` |
| Get an App's Logo (Icon) | GET | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/icon/{{sdkAppIconSize}}` | `conn_mod_def::GJ43SmYm7g0::U-qJWFwrQ3CfaQQgS90MEw` |
| Get an SDK App by Name and Version | GET | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}` | `conn_mod_def::GJ43SfDwlSA::pOb-w-mYSOutua7ujftluA` |
| Clone an SDK App Version | POST | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/clone` | `conn_mod_def::GJ43SfQRYvU::xJBsa5wUR4CcOF9v5w2k8w` |
| Commit Changes to an SDK App Version | POST | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/commit` | `conn_mod_def::GJ43See3pAc::Teb7RoMIRYmPaCMpSLWRXQ` |
| Patch an App Version’s Base Configuration | PATCH | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/base` | `conn_mod_def::GJ43S26WhRg::7YhFe9ERT9WszYrJXLjCbg` |
| Patch an SDK App | PATCH | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}` | `conn_mod_def::GJ43SyxpdCc::pDOUvDM-TMmT50nEpyuBmg` |
| Roll Back Changes for an SDK App Version | POST | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/rollback` | `conn_mod_def::GJ43S-R_13Q::hFk5FTphSg-RbfoAt4fJMA` |
| Set an App’s Common Data | PUT | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/common` | `conn_mod_def::GJ43S-YI2dU::P-yyNk33RGaD8BKoy4H9OQ` |
| Set an App’s Opensource Status | POST | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/opensource` | `conn_mod_def::GJ43TGvPn3M::7mMBhG5RQ--XYwN_3qu1Zg` |
| Set an SDK App Version to Closed Source | POST | `/api/v2/sdk/apps/{{sdkAppName}}/{{sdkAppVersion}}/closedsource` | `conn_mod_def::GJ43S-3kQqQ::tiOxGgmHQ2ulhs1aasrPcw` |

6 more SdkApps actions are available through search.

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Affiliate Commission Stats | GET | `/api/v2/admin/users/{{userId}}/affiliate/stats` | `conn_mod_def::GJ43HkEHsIA::sHke9XrGRvCazgFnGJBUgw` |
| Get Current Authenticated User | GET | `/api/v2/users/me` | `conn_mod_def::GJ43WQwFoYE::qu4rFWtaQFqpj6BdZojrpw` |
| Get Current User Authorization | GET | `/api/v2/users/me/current-authorization` | `conn_mod_def::GJ43WJHVx4c::N4nB5uzjQNuCMurw-1P_ug` |
| Get the Authenticated User’s Unread Notifications Count | GET | `/api/v2/users/unread-notifications` | `conn_mod_def::GJ43WaIoMOQ::brXo4p-9S3ye_Z1IkHNMhw` |
| Get User Redirect Action | GET | `/api/v2/users/redirect-action` | `conn_mod_def::GJ43V5MLXkc::XdxjSEr4SZC7c79YnY1r-w` |
| List Users (Team or Organization) | GET | `/api/v2/users` | `conn_mod_def::GJ43V4TMOqE::GgOabb8bTMuzCrlOdqBgZw` |
| Set Password Reset Session (by Hash) | GET | `/api/v2/users/password-reset` | `conn_mod_def::GJ43V_9zuW0::aSqqJDlzR7OjiinALQNgJw` |
| Delete the Current User | DELETE | `/api/v2/users` | `conn_mod_def::GJ43V2PCWO8::-T_aDzBlRuq5bwy27MDv6w` |
| Reset a User Password (Lost Password Session) | POST | `/api/v2/users/password-reset` | `conn_mod_def::GJ43V2K6ls0::OduhTFaeSOOlR_YBW_7BqQ` |
| Send a Password Reset Demand for a User | POST | `/api/v2/users/password-reset-demand` | `conn_mod_def::GJ43WAXjTMo::M2EcPoKVRuOrmx9ovIPelw` |
| Set a User’s UI Settings | POST | `/api/v2/users/set-ui-settings` | `conn_mod_def::GJ43WJfp3Zw::5iGjcPXqRsqRG2uAd4d0lw` |
| Update a User | PATCH | `/api/v2/users/{{userId}}` | `conn_mod_def::GJ43V_ng9Kg::7TkB9tjsQkW4XlTGwUhgfQ` |

2 more Users actions are available through search.

### Hooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hook's Details | GET | `/api/v2/hooks/{{hookId}}` | `conn_mod_def::GJ43M7YIph8::CeV52UTWTvye_ajdqVjIbw` |
| Get a Webhook’s Incoming Queue Stats | GET | `/api/v2/hooks/{{hookId}}/incomings/stats` | `conn_mod_def::GJ43NQPelII::IUYV3t5BSTWqaJ2xfNCJ1g` |
| List a Team’s Hooks | GET | `/api/v2/hooks` | `conn_mod_def::GJ43M_g_vPI::P5WxSndRRxywLXFJWE13ow` |
| Ping a Hook | GET | `/api/v2/hooks/{{hookId}}/ping` | `conn_mod_def::GJ43M6qcKj8::bfWpkw-9QIGb8j7K2gfnZQ` |
| Create a Hook | POST | `/api/v2/hooks` | `conn_mod_def::GJ43M0ZQK54::WBqp_QxuTeOVFylD82KzqQ` |
| Delete a Hook | DELETE | `/api/v2/hooks/{{hookId}}` | `conn_mod_def::GJ43Mw1MRxc::jvI10ABNSd2ZffeXcFO5sQ` |
| Disable a Hook | POST | `/api/v2/hooks/{{hookId}}/disable` | `conn_mod_def::GJ43MvfQW5k::-jC58UglQW2-iOwVDClGeg` |
| Enable a Hook | POST | `/api/v2/hooks/{{hookId}}/enable` | `conn_mod_def::GJ43M0hGaWs::c_BMRnE5R7yugVk_F_-J_Q` |
| Set Hook Details (Set Data for a Hook) | POST | `/api/v2/hooks/{{hookId}}/set-data` | `conn_mod_def::GJ43NHBnAnU::4ri1xqMMRfygkNDWD2EE3A` |
| Start Learning a Hook’s Request Body Structure | POST | `/api/v2/hooks/{{hookId}}/learn-start` | `conn_mod_def::GJ43M8J0eVk::1gDRW-uPR9mMCDR7565o_Q` |
| Stop a Hook’s Learning Process | POST | `/api/v2/hooks/{{hookId}}/learn-stop` | `conn_mod_def::GJ43M7U5puU::N5_d4EAFT9OuBqVTMbDTtg` |
| Update a Hook | PATCH | `/api/v2/hooks/{{hookId}}` | `conn_mod_def::GJ43NHMybSw::4KvlZWlvSOqv4QLPOrTBIA` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Details | GET | `/api/v2/teams/{{teamId}}` | `conn_mod_def::GJ43VEi7Log::rnuocBt3SDCsEW839UI2fg` |
| Get a Team’s LLM Configuration | GET | `/api/v2/teams/{{teamId}}/llm-configuration` | `conn_mod_def::GJ43VFDE8Ms::BwIdxV1rTheXWY1eq7taqA` |
| List an Organization’s Teams | GET | `/api/v2/admin/teams` | `conn_mod_def::GJ43Hbysurc::NYnSUi3_T7KXKMV8lqcrBQ` |
| List an Organization’s Teams | GET | `/api/v2/teams` | `conn_mod_def::GJ43VVcYVuw::ucqLcdgwRDaOGRrX17m_Iw` |
| Check if Emails Are Members of a Team | POST | `/api/v2/teams/{{teamId}}/check-email-is-member` | `conn_mod_def::GJ43UxtuAuI::C8gO3Pr2T_C6PsdGQwK2yA` |
| Create a Team | POST | `/api/v2/teams` | `conn_mod_def::GJ43U9vhd5c::-XiAZsijThSLGbLJ7O3jGA` |
| Create a Team in an Organization | POST | `/api/v2/admin/teams` | `conn_mod_def::GJ43HaJ7Fk0::Kqwnebn_QTmOoCy92kkysg` |
| Delete a Team | DELETE | `/api/v2/admin/teams/{{teamId}}` | `conn_mod_def::GJ43HZ-f2_g::VcAuW_dHSg6NGqyecdtfQg` |
| Delete a Team | DELETE | `/api/v2/teams/{{teamId}}` | `conn_mod_def::GJ43U5xD_hc::CUN-a6KBT828_1PvycbvKQ` |
| Update a Team | PATCH | `/api/v2/admin/teams/{{teamId}}` | `conn_mod_def::GJ43HZ91cHc::P3cqQIo3SaexqJWgnQ4d1w` |
| Update a Team’s LLM Configuration | PATCH | `/api/v2/teams/{{teamId}}/llm-configuration` | `conn_mod_def::GJ43VUoB6bI::y_lk-Dy-Tja5nQoJ9VFAYw` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Connection’s Details | GET | `/api/v2/connections/{{connectionId}}` | `conn_mod_def::GJ43KK5ihiA::jbQEeWicR26HC7rf0AKGMA` |
| Get Connection Common Data for a Connection | GET | `/api/v2/sdk/apps/connections/{{sdkConnectionName}}/common` | `conn_mod_def::GJ43TW1M5v4::bCHzeMKjRy2AVaKXCAFd-w` |
| List a Connection’s Updatable Parameters | GET | `/api/v2/connections/{{connectionId}}/editable-data-schema` | `conn_mod_def::GJ43KS3Fowg::P2VUlvGNT7mk4KxFTs2oLg` |
| List a Team's Connections | GET | `/api/v2/connections` | `conn_mod_def::GJ43KTyndBI::_Zrtgl9NQtyKRxL7fqGWow` |
| Create a Team Connection | POST | `/api/v2/connections` | `conn_mod_def::GJ43KE97l4k::-XxykmWNQsuNj2AmnmAHOw` |
| Delete a Connection | DELETE | `/api/v2/connections/{{connectionId}}` | `conn_mod_def::GJ43KD62Yb0::tdwlBbRwS-i7_JL6ZpXd9Q` |
| Rename a Connection | PATCH | `/api/v2/connections/{{connectionId}}` | `conn_mod_def::GJ43KR5ETJg::l0as_AdsTR-zi_9FxPOqNA` |
| Update a Connection’s Data | POST | `/api/v2/connections/{{connectionId}}/set-data` | `conn_mod_def::GJ43KV2u354::BjeZPUyoROWERdb2im0Z9A` |
| Verify a Connection | POST | `/api/v2/connections/{{connectionId}}/test` | `conn_mod_def::GJ43KSh19No::-F_V-fzrSwO0IV719ugohA` |
| Verify Whether a Connection Is Scoped | POST | `/api/v2/connections/{{connectionId}}/scoped` | `conn_mod_def::GJ43KfHanJM::VgcZ0sVqTz-sC4np_ULWlA` |

### CredentialRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Credential Request | GET | `/api/v2/credential-requests/requests/{{requestId}}` | `conn_mod_def::GJ43Kn0uSyM::l5uQPxivRuCQGm4Jvovwwg` |
| Get Credential Request Detail (with Credentials) | GET | `/api/v2/credential-requests/requests/{{requestId}}/detail` | `conn_mod_def::GJ43KvqnD-U::ujpisUa_RL2h4-XRdCzoeQ` |
| List Credential Requests (for a Team) | GET | `/api/v2/credential-requests/requests` | `conn_mod_def::GJ43Kwv0FMY::CsqPU-mCRDuvVAUZIADi-w` |
| Create a Credential Request (Deprecated) | POST | `/api/v2/credential-requests/requests` | `conn_mod_def::GJ43Kc7L91E::5Zf84BLOSw-b0oVWbH9oKQ` |
| Create a Credential Request Action | POST | `/api/v2/credential-requests/actions/create` | `conn_mod_def::GJ43KdFrp3o::xV7BKGJuQBqTQLC8nJ476g` |
| Create Credential Request (V2) | POST | `/api/v2/credential-requests/requests/v2` | `conn_mod_def::GJ43Kc4nXXM::uxOUF55UQ-iYIRIf1d4VuQ` |
| Decline a Credential Request Credential | POST | `/api/v2/credential-requests/credentials/{{credentialId}}/decline` | `conn_mod_def::GJ43KoCLK_4::IkN--DBZRWW6cQHDcEZX5w` |
| Delete a Credential Request | DELETE | `/api/v2/credential-requests/requests/{{requestId}}` | `conn_mod_def::GJ43KoN5WJw::ymunfcmIQ7O66EGvkoyp4Q` |
| Delete a Remote Credential for a Credential Request | POST | `/api/v2/credential-requests/credentials/{{credentialId}}/delete-remote` | `conn_mod_def::GJ43KoZdOzU::vrkpOi4wRhWyzWDqyzzIPQ` |

1 more CredentialRequests actions are available through search.

This lists 90 of 441 actions. For anything not here, call `search_one_platform_actions` with platform `make`. The full catalog is at https://www.withone.ai/knowledge/make.

## When a call fails

The error comes from Make, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/make

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
