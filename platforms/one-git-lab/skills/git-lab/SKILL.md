---
name: git-lab
description: GitLab is a complete DevOps platform that provides a single application for source code management, CI/CD, security, and project planning—enabling teams to collaborate more efficiently throughout the entire software development lifecycle. Read and write GitLab data through One: projects, projectintegrations, groups, groupintegrations, awardemoji, mergerequests and more, 1124 actions with real parameter documentation. Use whenever the user asks to look something up in GitLab, create or update a record there, or build code against the GitLab API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: git-lab
  generated-from: one-knowledge-base
---

# GitLab through One

GitLab is a complete DevOps platform that provides a single application for source code management, CI/CD, security, and project planning—enabling teams to collaborate more efficiently throughout the entire software development lifecycle.

One exposes GitLab through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `git-lab` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm GitLab is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real GitLab account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Project’s Pages Access | GET | `/api/v4/projects/{{id}}/pages_access` | `conn_mod_def::GJ3fvl-DoyE::spANOsBqSJ685cmnTtSa-A` |
| Download a Project Avatar | GET | `/api/v4/projects/{{id}}/avatar` | `conn_mod_def::GJ3dWEBpzD8::BJAdQbwcTZWqzn8XlKA6yg` |
| Download a Project’s RPM Repository Metadata File | GET | `/api/v4/projects/{{id}}/packages/rpm/repodata/{{fileName}}` | `conn_mod_def::GJ3eyzicoSk::8tcaW3eRRm2gQ6B1FKRs4w` |
| Get a Project’s CI_JOB_TOKEN Access Settings | GET | `/api/v4/projects/{{id}}/job_token_scope` | `conn_mod_def::GJ3f3IHiRGU::wiBcEz_ySb6K_NlXpP5kig` |
| Get a Project’s Import Status | GET | `/api/v4/projects/{{id}}/import` | `conn_mod_def::GJ3fopd37V4::3YQcy4xVR2yRNMZUknBTWg` |
| Get a Project’s NuGet V2 Feed Service Index | GET | `/api/v4/projects/{{id}}/packages/nuget/v2` | `conn_mod_def::GJ3fcV2tSiE::tQW-8ixaQjSX2ZUdeuPUUQ` |
| Get a Project’s NuGet V3 Feed Service Index | GET | `/api/v4/projects/{{id}}/packages/nuget/index` | `conn_mod_def::GJ3fc3L34vE::wu2n_KXMRD2aQ-4H8DrorQ` |
| Get a Project’s PyPI Simple Index | GET | `/api/v4/projects/{{id}}/packages/pypi/simple` | `conn_mod_def::GJ3fdkQok0E::TkAXZLkeRQKMlQWnVtpheQ` |
| Get a Project’s PyPI Simple Package Index | GET | `/api/v4/projects/{{id}}/packages/pypi/simple/{{package_name}}` | `conn_mod_def::GJ3fdsLAdnI::4DATZgLhRgWoca9JnMiwzw` |
| Get a Single Project | GET | `/api/v4/projects/{{id}}` | `conn_mod_def::GJ3ftUppClI::sSnFXIMuSNC2nahMyooEbA` |
| List a Project’s CI Job Token Scope Inbound Allowlist | GET | `/api/v4/projects/{{id}}/job_token_scope/allowlist` | `conn_mod_def::GJ3f3RJW1DA::y_cNRJDqRICeBWtwf3p28Q` |
| List a Project’s CI_JOB_TOKEN Groups Allowlist | GET | `/projects/{{id}}/job_token_scope/groups_allowlist` | `conn_mod_def::GJ3f3al1LUU::phm-g7BjTTS5ysunrS9Byg` |

44 more Projects actions are available through search.

### ProjectIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Integration’s Settings | GET | `/api/v4/projects/{{id}}/integrations/{{slug}}` | `conn_mod_def::GJ3eX9Q8f28::Q1pVL8_CSHOgKREHSExk3w` |
| List a Project’s Active Integrations | GET | `/api/v4/projects/{{id}}/services` | `conn_mod_def::GJ3eYU464sA::PmPMLkGfTH-4HhgQJKNN1Q` |
| List a Project’s Active Integrations | GET | `/api/v4/projects/{{id}}/integrations` | `conn_mod_def::GJ3eYb0BOJ4::JuxM7cwFRB-LCJ0tSUvWAQ` |
| Create or Edit a Project’s Apple App Store Integration | PUT | `/api/v4/projects/{{id}}/integrations/apple-app-store` | `conn_mod_def::GJ3eChD4Bqc::SGzsvrVKTn6VMrgvZ2gAXA` |
| Create or Edit a Project’s Asana Integration | PUT | `/api/v4/projects/{{id}}/integrations/asana` | `conn_mod_def::GJ3eDArUZD8::nffMDde0Ty6oQ_dt1BVATg` |
| Create or Edit a Project’s Bamboo Integration | PUT | `/api/v4/projects/{{id}}/integrations/bamboo` | `conn_mod_def::GJ3eDwmIBZM::E78ZaeNNSvSe0nLcv6H7tw` |
| Create or Edit a Project’s Bugzilla Integration | PUT | `/api/v4/projects/{{id}}/integrations/bugzilla` | `conn_mod_def::GJ3eEHkN2ws::FSm3ZU5TSyGqWMnVdaApdQ` |
| Create or Edit a Project’s Campfire Integration | PUT | `/api/v4/projects/{{id}}/integrations/campfire` | `conn_mod_def::GJ3eE6aZ5s0::uxVroZJRSdGMSccngZ66mA` |
| Create or Edit a Project’s ClickUp Integration | PUT | `/api/v4/projects/{{id}}/integrations/clickup` | `conn_mod_def::GJ3eFUYUF7o::Wm4fMommSouENzq5wVAOZw` |
| Create or Edit a Project’s Confluence Integration | PUT | `/api/v4/projects/{{id}}/integrations/confluence` | `conn_mod_def::GJ3eFrhH8NQ::qsDiwUuJSqiOhlWW41gwGQ` |
| Create or Edit a Project’s Custom Issue Tracker Integration | PUT | `/api/v4/projects/{{id}}/integrations/custom-issue-tracker` | `conn_mod_def::GJ3eGEMVIiU::MPVIOnvnRfGqkTN3aJO9WA` |
| Create or Edit a Project’s Diffblue Cover Integration | PUT | `/api/v4/projects/{{id}}/integrations/diffblue-cover` | `conn_mod_def::GJ3eG1Feb9U::1gpNJxcRR1GvC8FkLJudGA` |

29 more ProjectIntegrations actions are available through search.

### Groups

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Group Avatar | GET | `/api/v4/groups/{{id}}/avatar` | `conn_mod_def::GJ3dWLUdGOY::cSRPH6DnRJKiKj4K_w-uIA` |
| Download a Group’s NuGet Symbol File | GET | `/api/v4/groups/{{id}}/-/packages/nuget/symbolfiles/{{file_name}}/{{signature}}/{{same_file_name}}` | `conn_mod_def::GJ3favhfirc::5l3CWlCASZSqaHKTtDid8Q` |
| Get a Group | GET | `/api/v4/groups/{{id}}` | `conn_mod_def::GJ3d5mAhYQw::gcw4ygOMSGiIF_bHTn1Z0A` |
| Get a Group’s Debian Source File Index by SHA256 Hash | GET | `/api/v4/groups/{{id}}/-/packages/debian/dists/{{distribution}}/{{component}}/source/by-hash/SHA256/{{file_sha256}}` | `conn_mod_def::GJ3fenqpy0M::1VdUbtLARjWf_lNLPIpctw` |
| Get a Group's Export Relations Status | GET | `/api/v4/groups/{{id}}/export_relations/status` | `conn_mod_def::GJ3d4ZAX3tQ::TX1XfDntQpKDOrLpF_t2OA` |
| Get a Group’s NuGet V2 Feed Package `$metadata` | GET | `/api/v4/groups/{{id}}/-/packages/nuget/v2/$metadata` | `conn_mod_def::GJ3fbkbKJkw::2wNR_Vx-TMe1Zm1bkb5XDg` |
| Get a Group’s NuGet V2 Feed Service Index | GET | `/api/v4/groups/{{id}}/-/packages/nuget/v2` | `conn_mod_def::GJ3fcO9NRYI::kFjUc9mNQcmLECGTok4DTw` |
| Get a Group’s PyPI Simple Index | GET | `/api/v4/groups/{{id}}/-/packages/pypi/simple` | `conn_mod_def::GJ3fdRTzjaU::nxeKe0YAR8-eJIbBzozxpQ` |
| List a Group’s Billable Members | GET | `/api/v4/groups/{{id}}/billable_members` | `conn_mod_def::GJ3d52ezyl0::7ZTpLkHPSreYSPEJo0Fk_w` |
| List a Group’s Descendant Groups | GET | `/api/v4/groups/{{id}}/descendant_groups` | `conn_mod_def::GJ3d6DtmJAo::ngJ8MZI9Q7WCva_yMPDLJA` |
| List a Group’s Invited Groups | GET | `/api/v4/groups/{{id}}/invited_groups` | `conn_mod_def::GJ3d6X92y-E::wLKqD67EQlKVPTS-Va4aSw` |
| List a Group’s Provisioned Users | GET | `/api/v4/groups/{{id}}/provisioned_users` | `conn_mod_def::GJ3d7gP4LTQ::jYdf4gLvTiiT65yFsDGIIw` |

19 more Groups actions are available through search.

### GroupIntegrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group’s Integration Settings | GET | `/api/v4/groups/{{id}}/integrations/{{slug}}` | `conn_mod_def::GJ3eXtT_I3o::NBSqNdrHTtmi6oCvXkMIQw` |
| List a Group’s Active Integrations | GET | `/api/v4/groups/{{id}}/integrations` | `conn_mod_def::GJ3eYLdstaw::cVmrYBblSWamNHKbwnRzuw` |
| Create or Edit a Group’s Apple App Store Integration | PUT | `/api/v4/groups/{{id}}/integrations/apple-app-store` | `conn_mod_def::GJ3eCQq5id8::mMpAROpFTNSqLUGLA-d22Q` |
| Create or Edit a Group’s Assembla Integration | PUT | `/api/v4/groups/{{id}}/integrations/assembla` | `conn_mod_def::GJ3eDJyy0Hw::EXowVkn4S-qyeFdofBsacg` |
| Create or Edit a Group’s Bamboo Integration | PUT | `/api/v4/groups/{{id}}/integrations/bamboo` | `conn_mod_def::GJ3eDhqOXwY::MJskYCz_TU-UAmIbEI5wuA` |
| Create or Edit a Group’s Campfire Integration | PUT | `/api/v4/groups/{{id}}/integrations/campfire` | `conn_mod_def::GJ3eErD2V9M::Fbpe02RaRjeVQA1sIRjsoA` |
| Create or Edit a Group’s ClickUp Integration | PUT | `/api/v4/groups/{{id}}/integrations/clickup` | `conn_mod_def::GJ3eFC8iRXo::fVzW3RK3Tm6zeBBa0HBraQ` |
| Create or Edit a Group’s Custom Issue Tracker Integration | PUT | `/api/v4/groups/{{id}}/integrations/custom-issue-tracker` | `conn_mod_def::GJ3eFzvgTts::5SsP7aJ-Ta2X2zc8AfaUnw` |
| Create or Edit a Group’s Diffblue Cover Integration | PUT | `/api/v4/groups/{{id}}/integrations/diffblue-cover` | `conn_mod_def::GJ3eGlnF5A0::9ZmGgJN0QU66eB2mVSZiaw` |
| Create or Edit a Group’s Drone CI Integration | PUT | `/api/v4/groups/{{id}}/integrations/drone-ci` | `conn_mod_def::GJ3eHWFhRXo::CSivs-j_RXu6HhaYk45AWA` |
| Create or Edit a Group’s GitHub Integration | PUT | `/api/v4/groups/{{id}}/integrations/github` | `conn_mod_def::GJ3eJXtznD8::mPaKjMcRQ0Oh2n3Bt1eWIg` |
| Create or Edit a Group’s GitLab Slack Application Integration | PUT | `/api/v4/groups/{{id}}/integrations/gitlab-slack-application` | `conn_mod_def::GJ3eJyCxtfA::uYI0VngrTY2KCqVB5kyjNw` |

14 more GroupIntegrations actions are available through search.

### AwardEmoji

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group Epic Note Award Emoji Reaction | GET | `/api/v4/groups/{{id}}/epics/{{epic_iid}}/notes/{{note_id}}/award_emoji/{{award_id}}` | `conn_mod_def::GJ3dYg3Ia1U::nWVrxRXzSLGzUzREovZVUw` |
| Get a Group Epic’s Award Emoji Reaction | GET | `/api/v4/groups/{{id}}/epics/{{epicIid}}/award_emoji/{{awardId}}` | `conn_mod_def::GJ3dYZD12nw::-1QdSGqwT82dDUscOmUJpw` |
| Get a Project Issue Note Award Emoji Reaction | GET | `/api/v4/projects/{{id}}/issues/{{issue_iid}}/notes/{{note_id}}/award_emoji/{{award_id}}` | `conn_mod_def::GJ3dYxqJ4zo::egj-FYXKQQ-0PERFm3r6ZA` |
| Get a Project Issue’s Single Award Emoji Reaction | GET | `/api/v4/projects/{{id}}/issues/{{issue_iid}}/award_emoji/{{award_id}}` | `conn_mod_def::GJ3dYpBWM8s::yq-kkvMmQ5O1VNCvaCdAwg` |
| Get a Project Snippet Award Emoji Reaction | GET | `/api/v4/projects/{{id}}/snippets/{{snippet_id}}/award_emoji/{{award_id}}` | `conn_mod_def::GJ3dZJCTshk::I5nq-UrCSVKSssqyWV3nvw` |
| Get a Project Snippet Note Award Emoji Reaction | GET | `/api/v4/projects/{{id}}/snippets/{{snippetId}}/notes/{{noteId}}/award_emoji/{{awardId}}` | `conn_mod_def::GJ3dZRn0NlE::2DzgM883ReytjUZYqfcObg` |
| List a Group Epic’s Award Emoji Reactions | GET | `/api/v4/groups/{{id}}/epics/{{epic_iid}}/award_emoji` | `conn_mod_def::GJ3dZaacbcE::bBypfuVxR9SnGBUl6yVwkw` |
| List a Merge Request Note’s Award Emoji Reactions in a Project | GET | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/notes/{{noteId}}/award_emoji` | `conn_mod_def::GJ3daI_PZ9c::ivCU9OjFQ5Odyh4nJ35c5g` |
| List a Project Issue Note’s Award Emoji Reactions | GET | `/api/v4/projects/{{id}}/issues/{{issue_iid}}/notes/{{note_id}}/award_emoji` | `conn_mod_def::GJ3dZ3dj-zs::ywSNnaxlQ8WQcrIvb3I7hA` |
| List a Project Issue’s Award Emoji Reactions | GET | `/api/v4/projects/{{id}}/issues/{{issue_iid}}/award_emoji` | `conn_mod_def::GJ3dZtIfkNE::0LeBuI1pRnGzEBTpfzw-4w` |
| List a Project Merge Request’s Award Emoji Reactions | GET | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/award_emoji` | `conn_mod_def::GJ3daANTaT4::dYoqXTapQCyBS7jq76mELQ` |
| List a Project Snippet Note’s Award Emoji Reactions | GET | `/api/v4/projects/{{id}}/snippets/{{snippet_id}}/notes/{{note_id}}/award_emoji` | `conn_mod_def::GJ3dacKzrh0::GzphiQ6xSLu7RQECx3xMxw` |

10 more AwardEmoji actions are available through search.

### MergeRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Merge Request’s Changes (Files & Diffs) | GET | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/changes` | `conn_mod_def::GJ3elU-ArFI::pesLzzuyToa3c6stpFNtDA` |
| Get a Single Project Merge Request | GET | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}` | `conn_mod_def::GJ3elMK-MKk::yPSJ6u76SrSdPyZry2Jp5w` |
| List a Group’s Merge Requests | GET | `/api/v4/groups/{{id}}/merge_requests` | `conn_mod_def::GJ3emk9iqhQ::zn--iQ87QnaZAOFA82FAjw` |
| List a Project’s Merge Requests | GET | `/api/v4/projects/{{id}}/merge_requests` | `conn_mod_def::GJ3enoIMQP0::02bbKqvwShOAhKbVCQoagQ` |
| List Issues Closed by a Merge Request (Closes Issues) for a Project | GET | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/closes_issues` | `conn_mod_def::GJ3em4Cre5o::0kssJpPCR2-JanA6vWLtng` |
| List Merge Requests | GET | `/api/v4/merge_requests` | `conn_mod_def::GJ3enTTqSVI::vXOYcA2kRjKi3zNe8pmXGw` |
| List Merge Requests Closing a Project Issue | GET | `/api/v4/projects/{{id}}/issues/{{issue_iid}}/closed_by` | `conn_mod_def::GJ3fu4TNsos::He61pdsvRwqAjbprz4Y9jQ` |
| List Merge Requests for a Commit in a Project | GET | `/api/v4/projects/{{id}}/repository/commits/{{sha}}/merge_requests` | `conn_mod_def::GJ3doaj1tX4::5dXgoF7nQwKHLkyesa1tow` |
| List Merge Requests for a Project Deployment | GET | `/api/v4/projects/{{id}}/deployments/{{deploymentId}}/merge_requests` | `conn_mod_def::GJ3dueVI3Cs::X5Xm-qsDT7m0bQ9Vlj5ipw` |
| Add Spent Time to a Project Merge Request | POST | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/add_spent_time` | `conn_mod_def::GJ3ejqF-Le0::nHNkMBCsRtu37qbPhRqumA` |
| Approve a Project Merge Request | POST | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/approve` | `conn_mod_def::GJ3ejOikK0Y::Dznbq25NRoa_4e0UGkV56g` |
| Cancel a Project Merge Request’s “Merge When Pipeline Succeeds” | POST | `/api/v4/projects/{{id}}/merge_requests/{{mergeRequestIid}}/cancel_merge_when_pipeline_succeeds` | `conn_mod_def::GJ3ekCZc_fI::iwlr5x9lSjq9elB3LOEu5w` |

10 more MergeRequests actions are available through search.

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Job’s Artifacts File | GET | `/api/v4/jobs/{{id}}/artifacts` | `conn_mod_def::GJ3eeEY8frg::MHQuryQyS-6cFA87z3fxkg` |
| Get a Project Job | GET | `/api/v4/projects/{{id}}/jobs/{{jobId}}` | `conn_mod_def::GJ3depMkto4::ZxgIKJiTQ06qRIUQmnvAnA` |
| Get a Project Job’s Trace | GET | `/api/v4/projects/{{id}}/jobs/{{jobId}}/trace` | `conn_mod_def::GJ3dexoYjAw::Ouxs9OTOT5SE3jnjpiu9FQ` |
| Get the Current Job (Using Job Token) | GET | `/api/v4/job` | `conn_mod_def::GJ3deX5Yogw::bqvGDrS1SOKtKwzzSZeVnw` |
| List a Project’s Jobs | GET | `/api/v4/projects/{{id}}/jobs` | `conn_mod_def::GJ3dehi0aP0::5afkv4OASPqfmWIVXn4hOw` |
| Append a Patch to a Job’s Trace | PATCH | `/api/v4/jobs/{{id}}/trace` | `conn_mod_def::GJ3eeN1B_rI::bymO1H1FRLOgap7rIqifDw` |
| Authorize Uploading a Job’s Artifacts | POST | `/api/v4/jobs/{{id}}/artifacts/authorize` | `conn_mod_def::GJ3eec1yi-w::g9xqzwbmTFKe9V0kwvEFPg` |
| Cancel a Project Job | POST | `/api/v4/projects/{{id}}/jobs/{{jobId}}/cancel` | `conn_mod_def::GJ3de6GcDdA::THNaGn6zQ3mHOnHiyPzPjw` |
| Erase a Project Job | POST | `/api/v4/projects/{{id}}/jobs/{{jobId}}/erase` | `conn_mod_def::GJ3dfBS3k2Y::7TJuIgCMQtisHJQKcGk7Lg` |
| Keep a Project Job’s Artifacts | POST | `/api/v4/projects/{{id}}/jobs/{{jobId}}/artifacts/keep` | `conn_mod_def::GJ3ed8bL2Tk::Gw0Vw2ADTnOAJUVwuGeWuw` |
| Request a Job (Runner) | POST | `/api/v4/jobs/request` | `conn_mod_def::GJ3eejivLx4::1mFhNDlCRmehIYmIrBtDDw` |
| Retry a Project Job | POST | `/api/v4/projects/{{id}}/jobs/{{jobId}}/retry` | `conn_mod_def::GJ3dfIMhOvk::HlcD8WehTmezZPDbPcTdOg` |

2 more Jobs actions are available through search.

### DebianDistributions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Group’s Debian Distribution | GET | `/api/v4/groups/{{id}}/-/debian_distributions/{{codename}}` | `conn_mod_def::GJ3e0LHjxA0::PjMJXGDyTqGLmeB9oqXm5g` |
| Get a Group’s Debian Distribution Key (ASCII-armored) | GET | `/api/v4/groups/{{id}}/-/debian_distributions/{{codename}}/key.asc` | `conn_mod_def::GJ3e0b0haFg::KihVmMpQR7KGPScIaXCSwg` |
| Get a Project's Debian Distribution | GET | `/api/v4/projects/{{id}}/debian_distributions/{{codename}}` | `conn_mod_def::GJ3e0UDKRYc::DKqdIOlSS-eyMSSbPTo5rw` |
| Get a Project’s Debian Distribution Key (ASCII-armored) | GET | `/api/v4/projects/{{id}}/debian_distributions/{{codename}}/key.asc` | `conn_mod_def::GJ3e0j0-krE::BF-tjobXTjeeUxUvntQv0g` |
| Get a Project’s Debian Distribution Unsigned Release File | GET | `/api/v4/projects/{{id}}/packages/debian/dists/{{distribution}}/Release` | `conn_mod_def::GJ3fe_O1rfs::MCXLURTdQbWY6Aewikeikw` |
| List a Group's Debian Distributions | GET | `/api/v4/groups/{{id}}/-/debian_distributions` | `conn_mod_def::GJ3e0vvt-b4::rraJu-P6Qe-jiCmcBjb9yQ` |

7 more DebianDistributions actions are available through search.

This lists 90 of 1124 actions. For anything not here, call `search_one_platform_actions` with platform `git-lab`. The full catalog is at https://www.withone.ai/knowledge/git-lab.

## When a call fails

The error comes from GitLab, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/git-lab

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
