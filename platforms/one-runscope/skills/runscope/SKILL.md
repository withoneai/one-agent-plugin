---
name: runscope
description: A cloud-based service that enables developers and QA/DevOps teams to create, automate, monitor, and debug API tests, verify performance and uptime, and trigger alerts on issues to ensure reliable API behavior across environments. Read and write Runscope data through One: environments, teamroles, buckets, testschedules, bucketsecrets, teamgroups and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Runscope, create or update a record there, or build code against the Runscope API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: runscope
  generated-from: one-knowledge-base
---

# Runscope through One

A cloud-based service that enables developers and QA/DevOps teams to create, automate, monitor, and debug API tests, verify performance and uptime, and trigger alerts on issues to ensure reliable API behavior across environments.

One exposes Runscope through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `runscope` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Runscope is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Runscope account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test-Specific Environment’s Details | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWTcJw4-0::oYTrrQTyRHOZMSDba_oVfg` |
| List a Bucket’s Shared Environments | GET | `/buckets/{{BUCKET_KEY}}/environments` | `conn_mod_def::GJlWSbmq6es::zXwmJ7VhQ7GYZrlhGbVB-A` |
| List a Test’s Environments | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/environments` | `conn_mod_def::GJlWTIyXJJo::R0IOvrGwR4uFO8KrXElP8g` |
| Create a Test Environment | POST | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/environments` | `conn_mod_def::GJlWTRDY0o8::RRRdG8QWScWSbOcPVicxsA` |
| Delete a Test-Specific Environment | DELETE | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWTvU3x5Y::HO0wUFWiTj6P1Vv75CmFUA` |

### TeamRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Role’s Details | GET | `/teams/{{TEAM_UUID}}/roles/{{ROLE_UUID}}` | `conn_mod_def::GJlWVUQXwXo::Eqey2s3OQ5mXYC5tQ6b84g` |
| List a Team's Roles | GET | `/teams/{{TEAM_UUID}}/roles` | `conn_mod_def::GJlWVHXmAJE::pZ6ddSyiT4i_RzcwVVLN_A` |
| Create a Team Role | POST | `/teams/{{TEAM_UUID}}/roles` | `conn_mod_def::GJlWVMv71OY::leyYODhOTE6qGwi0moaiyg` |
| Delete a Team Role | DELETE | `/teams/{{TEAM_UUID}}/roles/{{ROLE_UUID}}` | `conn_mod_def::GJlWVizjmdI::J0oH4n6YTPmuvtxMN6ODIw` |
| Modify a Team Role | PUT | `/teams/{{TEAM_UUID}}/roles/{{ROLE_UUID}}` | `conn_mod_def::GJlWVcKE8SM::6INQ0vK3SlW6bG5IDyC1-Q` |

### Buckets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bucket Details | GET | `/buckets/{{BUCKET_KEY}}` | `conn_mod_def::GJlWRnG_8Uk::BGl5c_uPRnKdR0rxe-bm0Q` |
| Get Enhanced Bucket Details | GET | `/buckets/{{BUCKET_KEY}}` | `conn_mod_def::GJlWSUdQxAk::PEsiTwMmSPq_TbTdnR3wgA` |
| List Buckets | GET | `/buckets` | `conn_mod_def::GJlWRbLHjUs::uGqd1013RQ2C8AbQe2z0Yg` |
| Create a New Bucket | POST | `/buckets` | `conn_mod_def::GJlWRgW6dYc::V3fgbp6HRKmeK0yDT_4h7g` |

### TestSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Test’s Schedules | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/schedules` | `conn_mod_def::GJlWVyF_VzI::aP1vAvlKQryNMCgApGzcpQ` |
| Create a Test’s Schedule | POST | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/schedules` | `conn_mod_def::GJlWV6j050U::NmC6TifhRbWNev0bvq-IeQ` |
| Delete a Test Schedule in a Bucket | DELETE | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/schedules/{{SCHEDULE_ID}}` | `conn_mod_def::GJlWWmsauqc::2uZTIMsoSxWreBFuL8QHuw` |
| Modify a Test’s Schedule | PUT | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/schedules/{{SCHEDULE_ID}}` | `conn_mod_def::GJlWWfYx8TE::wWWoHLNjSamDMkeXlTj0_A` |

### BucketSecrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket Secret’s Details | GET | `/buckets/{{BUCKET_KEY}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWW9liLxM::qmfOWOhQSHKxe0ykGSndnw` |
| List a Bucket’s Secrets | GET | `/buckets/{{BUCKET_KEY}}/secrets` | `conn_mod_def::GJlWWuKqeAU::p-jKedeDTh6wWuw7ttP1qA` |
| Create a Bucket Secret | POST | `/buckets/{{BUCKET_KEY}}/secrets` | `conn_mod_def::GJlWW0MT3RY::6idPjNxsRqSP-B5A8zuoEA` |
| Delete a Bucket Secret | DELETE | `/buckets/{{BUCKET_KEY}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWXQT6hdA::ddHzhwdZT4Kf1MvEn0-MfQ` |

### TeamGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Group | POST | `/teams/{{TEAM_UUID}}/groups` | `conn_mod_def::GJlWUoLDnlA::eO5U9y2qQbSM7pbV5SG_0Q` |
| Delete a Team Group | DELETE | `/teams/{{TEAM_UUID}}/groups/{{GROUP_UUID}}` | `conn_mod_def::GJlWVA_KKik::fA1hjUvVQxGI1odQi3i0Xg` |
| Modify a Team Group | PUT | `/teams/{{TEAM_UUID}}/groups/{{GROUP_UUID}}` | `conn_mod_def::GJlWU5nDG-Y::BeBZYxrMTci51x3Q2Lt3EQ` |

### TeamSecret

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Team Secret | POST | `/teams/{{TEAM_UUID}}/secrets` | `conn_mod_def::GJlWXeg09_U::OluogR3-SPaXNGQBGxiGdg` |
| Delete a Team Secret | DELETE | `/teams/{{TEAM_UUID}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWX0__oeI::syAXwVI2QGSeF1NDkLcvSg` |
| Modify a Team Secret | PUT | `/teams/{{TEAM_UUID}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWXtiXDB0::a_Kj6p-KTO6XZQphUuGsGQ` |

### TestSteps

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Test’s Steps (in a Bucket) | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps` | `conn_mod_def::GJlWZx5HwyQ::KkGouYCdTL62onivzyI0nA` |
| Change a Test’s Step Order | PUT | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps` | `conn_mod_def::GJlWaRT2Q5g::mmfwSztzRYeJAyUSFSrvwg` |
| Delete a Test’s Step | DELETE | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps/{{STEP_ID}}` | `conn_mod_def::GJlWaoV5OoI::-ZABzLPjQW6Wu4VCv83mYw` |

### CustomEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Bucket’s Custom Emails | GET | `/buckets/{{BUCKET_KEY}}/custom-emails` | `conn_mod_def::GJlWRy5AybA::l4GpbbbXTbC4UC6QSHlxxw` |
| Add a Custom Email to a Bucket | POST | `/buckets/{{BUCKET_KEY}}/custom-emails` | `conn_mod_def::GJlWR57gwQs::nvUd3_iAT02af0MT4J7HqQ` |

### BucketEnvironment

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Bucket Environment | DELETE | `/buckets/{{BUCKET_KEY}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWTBt0lTE::KGpP4G4YStG3cx4RHOcd-Q` |
| Modify a Bucket Environment | PUT | `/buckets/{{BUCKET_KEY}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWS5bp8cQ::gcZoKFs0T1WfP5jt9h4ahQ` |

### TeamSecrets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Secret’s Details | GET | `/teams/{{TEAM_UUID}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWXlVukXw::TsIbslJvQJGGet878hGWww` |
| List a Team's Secrets | GET | `/teams/{{TEAM_UUID}}/secrets` | `conn_mod_def::GJlWXYnrZnM::5pNAorHeQrevH0caSimaVQ` |

### BucketTest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket Test’s Details | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}` | `conn_mod_def::GJlWbCgbGYc::nmcKBgURRkGcSWenBBFE1A` |
| Modify a Bucket Test | PUT | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}` | `conn_mod_def::GJlWbKElQmQ::QsH4upPaQT6y-MMpE7NtmQ` |

### BucketTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bucket’s Test | POST | `/buckets/{{BUCKET_KEY}}/tests` | `conn_mod_def::GJlWa7tbW9c::MQMhrguUS-agtUcAWa2HIg` |
| Delete a Bucket's Test | DELETE | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}` | `conn_mod_def::GJlWbQwsfak::d5digzi3SlSqa4eJ_C6_oA` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Members | GET | `/teams/{{TEAM_ID}}/people` | `conn_mod_def::GJlWYOr3AHU::qQkHb8bCQt6Y5PqZB_A3uQ` |
| Assign a Role to a Team’s Members | PUT | `/teams/{{TEAM_ID}}/people` | `conn_mod_def::GJlWYfgF8dY::fEe95VWXThqL4XRWby8ozw` |

### TeamEmailDomainsWhitelist

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team's Email Domains Whitelist | GET | `/teams/{{TEAM_UUID}}/email-domains` | `conn_mod_def::GJlWY0A_MrY::Is5NEldTT_2wieypEBLKdQ` |
| Update a Team’s Email Domains Whitelist | POST | `/teams/{{TEAM_UUID}}/email-domains` | `conn_mod_def::GJlWY7i4xYk::Z6ALb0ewSL-2gxBCJzV2UA` |

### TestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Result's Details (Bucket/Test/Result) | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/results/{{RESULT_ID}}` | `conn_mod_def::GJlWZiwD0pM::KlsTe7sxRtCa5feJmKA-mQ` |
| List a Test’s Results (in a Bucket) | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/results` | `conn_mod_def::GJlWZae3Ij0::qzQJk_lnRLConK30v8vV8w` |

### TestStep

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Test Step to a Test | POST | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps` | `conn_mod_def::GJlWaKNGAVk::AsKPRuuLQk6UFU1Gn0jdiw` |
| Modify a Test Step in a Test | PUT | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps/{{STEP_ID}}` | `conn_mod_def::GJlWahkf1Ls::jtbkoWWnSUy4HXnhm7ZbeQ` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Details | GET | `/account` | `conn_mod_def::GJlWRMlA1Cs::mO-g86AtTOihbhHZxemiXQ` |

### RemoteAgents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Remote Agents | GET | `/teams/{{TEAM_ID}}/agents` | `conn_mod_def::GJlWRSRUK3o::6hzRlGtRToGFyfNIdS5DVQ` |

### Bucket

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Bucket | DELETE | `/buckets/{{BUCKET_KEY}}` | `conn_mod_def::GJlWRsogwcs::OY1MkIUaQu2uf-u0VhUYNA` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Integrations | GET | `/teams/{{TEAM_ID}}/integrations` | `conn_mod_def::GJlWT2mXJuA::nkHP4Ge_RfKgF5BtkA6x6A` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Regions | GET | `/regions` | `conn_mod_def::GJlWUUMbWT8::4p7JN3eaRWyJjucbgAM1pg` |

### TestSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Schedule’s Details | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/schedules/{{SCHEDULE_ID}}` | `conn_mod_def::GJlWWTSG-eY::46P8Nju_TuuseP7Sqs-_Kg` |

### TeamPeople

| Action | Method | Path | Action id |
|---|---|---|---|
| Invite a User to a Team | POST | `/teams/{{TEAM_ID}}/people` | `conn_mod_def::GJlWYYRGCic::HDuAwEz3TPWhZs6gYU_D6w` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Look Up a User in a Team (by Email) | GET | `/teams/{{TEAM_ID}}/people/{{EMAIL}}` | `conn_mod_def::GJlWYnMtNJc::z8w8T0nBRlKJYRHgILSXvQ` |

### TeamUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a User from a Team | DELETE | `/teams/{{TEAM_ID}}/people/{{EMAIL}}` | `conn_mod_def::GJlWYtaAEJQ::sauJHUAYQS-tGFs9XeUFoQ` |

### TestRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Test Run | GET | `/radar/{{TRIGGER_ID}}/trigger` | `conn_mod_def::GJlWbfi1L0o::ZEAXC9j3RE-mH-Gppn6-NQ` |

### TestEnvironment

| Action | Method | Path | Action id |
|---|---|---|---|
| Modify a Test’s Test-Specific Environment | PUT | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWTlsOIAc::xsZiZqZeR2qxhyPi_rtYfw` |

### EmailDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Email Domains from a Team's Whitelist | DELETE | `/teams/{{TEAM_UUID}}/email-domains` | `conn_mod_def::GJlWZEF1jGg::J2JdCwURSq2xhWlc4jFPWw` |

### UserGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Assigned Groups in a Team | GET | `/teams/{{TEAM_UUID}}/people/{{EMAIL}}/groups` | `conn_mod_def::GJlWZLlcl2w::Pdx6cNYRQxCGTprkuJEh2g` |

### BucketTestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket’s Bucket-Level Test Result | GET | `/buckets/{{BUCKET_KEY}}/results/{{TEST_RUN_UUID}}` | `conn_mod_def::GJlWZTVzzWI::c4lqJujcQGKvYNuR5hKG2g` |

### RadarTestRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Start a Test Run (Trigger a Radar Test) | POST | `/radar/{{TRIGGER_ID}}/trigger` | `conn_mod_def::GJlWbmaFgVs::FPzrAl5vTCeGg2rQX8mg1A` |

### BucketRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket's Request Count | GET | `/buckets/{{BUCKET_KEY}}/requests` | `conn_mod_def::GJlWbvg8GEU::wR8o2WZjSHCmBZNPZOjtTA` |

### TeamRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Request Count | GET | `/team/{{TEAM_UUID}}/requests` | `conn_mod_def::GJlWcF3OcCo::FY0tb8k_R1ONQDnYumYPyQ` |

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Team’s Groups (Subteams) | GET | `/teams/{{TEAM_UUID}}/groups` | `conn_mod_def::GJlWUcEt53I::A43la34HQS2dYwvTFMpxlg` |

### TeamGroup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team’s Group Details | GET | `/teams/{{TEAM_UUID}}/groups/{{GROUP_UUID}}` | `conn_mod_def::GJlWUzT3KYE::EZ6D_dYLQw-1FKxrNDaZvA` |

### TestResultStep

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test Result Step's Details | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/results/{{RESULT_ID}}/steps/{{STEP_ID}}` | `conn_mod_def::GJlWZrlGmaw::SAfNMWvyRQy8pRAfgodIeg` |

### CustomEmail

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Bucket’s Custom Email | DELETE | `/buckets/{{BUCKET_KEY}}/custom-emails/{{EMAIL_UUID}}` | `conn_mod_def::GJlWSBlqMn0::e64UvH6VTkWPUpKsneQY5g` |

### TestStepDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Test’s Step Details (in a Bucket) | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/steps/{{STEP_ID}}` | `conn_mod_def::GJlWaZqrzOM::mfLMymZVQVOb_AJ-qwuHGQ` |

### SharedEnvironments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Bucket’s Shared Environment | POST | `/buckets/{{BUCKET_KEY}}/environments` | `conn_mod_def::GJlWSmJydug::cVMgRxlRQoedJMoB7J7E0g` |

### Environment

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket Environment’s Details | GET | `/buckets/{{BUCKET_KEY}}/environments/{{ENVIRONMENT_ID}}` | `conn_mod_def::GJlWSyCqJlI::-MQ7nKszR2-8PtoVpcBCcQ` |

### Tests

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Bucket’s Tests | GET | `/buckets/{{BUCKET_KEY}}/tests` | `conn_mod_def::GJlWazugflQ::I_oC5hKoSF6lPlHda-B7BQ` |

### BucketTestMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket Test's Metrics | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/metrics` | `conn_mod_def::GJlWUECOYVQ::mgszMZAATuCTLoBbBjOCSQ` |

### BucketSecret

| Action | Method | Path | Action id |
|---|---|---|---|
| Modify a Bucket Secret | PUT | `/buckets/{{BUCKET_KEY}}/secrets/{{SECRET_UUID}}` | `conn_mod_def::GJlWXGAMtVo::XUFXcsxSReyIZ_wCrfBB5Q` |

### TestRevisions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Test’s Revisions | GET | `/buckets/{{BUCKET_KEY}}/tests/{{TEST_ID}}/revisions` | `conn_mod_def::GJlWbXFInZA::4KyTKx3ARWq-jTTHh8iW2w` |

## When a call fails

The error comes from Runscope, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/runscope

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
