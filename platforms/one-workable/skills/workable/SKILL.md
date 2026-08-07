---
name: workable
description: Workable is a hiring platform that streamlines recruiting processes with tools for posting jobs, sourcing candidates, managing interviews, and making hires. It supports team collaboration and simplifies every stage of the recruitment workflow. Read and write Workable data through One: candidates, departments, requisitions, members, employees, subscriptions and more, 74 actions with real parameter documentation. Use whenever the user asks to look something up in Workable, create or update a record there, or build code against the Workable API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: workable
  generated-from: one-knowledge-base
---

# Workable through One

Workable is a hiring platform that streamlines recruiting processes with tools for posting jobs, sourcing candidates, managing interviews, and making hires. It supports team collaboration and simplifies every stage of the recruitment workflow.

One exposes Workable through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `workable` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Workable is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Workable account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Candidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Candidate’s Latest Offer | GET | `/candidates/{{id}}/offer` | `conn_mod_def::GJ8W8UWc9v0::GGx1wSt8TDe9tBWuZfNnYw` |
| List Candidates | GET | `/spi/v3/candidates` | `conn_mod_def::GJ8W8F7Mo3M::5V99A7DPT0O5tIsthv3zFQ` |
| Retrieve a Candidate | GET | `/spi/v3/candidates/{{id}}` | `conn_mod_def::GJ8W8El2WKA::ArRZ_g2LSo-HWUJiuG2dbA` |
| Copy a Candidate to Another Job | POST | `/candidates/{{id}}/copy` | `conn_mod_def::GJ8W8NWKKg8::dr10pHBCQR2avYNCkVs2lQ` |
| Create a Job Candidate | POST | `/spi/v3/jobs/{{shortcode}}/candidates` | `conn_mod_def::GJ8W8vek8XA::7lTwrOmeTpeMZceaoQ4rnw` |
| Disqualify a Candidate | POST | `/candidates/{{id}}/disqualify` | `conn_mod_def::GJ8W8OT3tqc::sTH9ICqIQ5eNo6niKb_0Iw` |
| Move a Candidate to Another Stage | POST | `/candidates/{{id}}/move` | `conn_mod_def::GJ8W8OFMYsY::_r6FTVQiSN2zdgnEV8Ax0A` |
| Partially Update a Candidate | PATCH | `/spi/v3/candidates/{{id}}` | `conn_mod_def::GJ8W8GEs4Mo::9NLY0HAFRjysKIJf4upXcA` |
| Relocate a Candidate to Another Job | POST | `/candidates/{{id}}/relocate` | `conn_mod_def::GJ8W8Vq2v4E::RDutwdPZRh6rDWzc8q25Rw` |
| Revert a Candidate’s Disqualification | POST | `/candidates/{{id}}/revert` | `conn_mod_def::GJ8W8Vptlx0::yOVGr8oqQJWXiIaCTlIkZg` |
| Update a Candidate’s Custom Attribute Value | PATCH | `/candidates/{{id}}/update_custom_attribute_value` | `conn_mod_def::GJ8W8c3bUc8::dOTwfnZ-Qs6g2CY_07or1A` |
| Update a Candidate’s Tags | PUT | `/candidates/{{id}}/tags` | `conn_mod_def::GJ8W8VSHmeQ::8BqhCWT2SuaEfLUrZWqj0A` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Departments | GET | `/spi/v3/departments` | `conn_mod_def::GJ8W7KED5wE::fqNLhparSW-qLF293Cr3_A` |
| List an Account’s Public Job Departments | GET | `/accounts/{{subdomain}}/departments` | `conn_mod_def::GJ8W7hziFig::Onj3B4kJQsugyTnQ9HvSmQ` |
| Create a Department | POST | `/spi/v3/departments` | `conn_mod_def::GJ8W7J8LcYo::zqz9znR9S4KCK6DjqzxWNA` |
| Delete a Department | DELETE | `/departments/{{id}}` | `conn_mod_def::GJ8W7RReL9I::IyCh-bJ9SfmEcrmjCHjowA` |
| Merge a Department Into Another Department | POST | `/departments/{{id}}/merge` | `conn_mod_def::GJ8W7Sw_q0g::BO81j2SATQaD0ufyXPZvew` |
| Update a Department | PUT | `/spi/v3/departments` | `conn_mod_def::GJ8W7R5Eys4::qdlIc_ztQVadN1r9z7pQ-Q` |

### Requisitions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Requisition by Code | GET | `/spi/v3/requisitions/{{code}}` | `conn_mod_def::GJ8W9J-NsMk::FdrF0zolTUSuBCzzba3aXQ` |
| List Requisitions | GET | `/spi/v3/requisitions` | `conn_mod_def::GJ8W9Cj3UFE::r_O35oYpQPWWjE1yr4MBIg` |
| Approve a Requisition | PATCH | `/requisitions/{{code}}/approve` | `conn_mod_def::GJ8W9KrxEfI::aWwtd7gTT4u0MfD1boL1vQ` |
| Create a Requisition | POST | `/spi/v3/requisitions` | `conn_mod_def::GJ8W89lloQU::1LD0eu3mSg60wXdUztzDOw` |
| Reject a Requisition | PATCH | `/spi/v3/requisitions/{{code}}/reject` | `conn_mod_def::GJ8W9Lh-grc::kDBlLXvzS7uid7tX777nNw` |
| Update a Requisition | PATCH | `/requisitions/{{id}}` | `conn_mod_def::GJ8W89uoXmc::RU46h8NYShKWlADr9C2bwQ` |

### Members

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Members | GET | `/spi/v3/members` | `conn_mod_def::GJ8W7amdlLo::vo-_s4IIRJuUuRlUJLD-Vg` |
| Deactivate a Member | DELETE | `/members/{{id}}` | `conn_mod_def::GJ8W7Y8ybCc::GnkQNx3rS5WDvJJLIc4ZVw` |
| Invite a Member | POST | `/members/invite` | `conn_mod_def::GJ8W7Z3-ZQY::g0PIogceTfmZTf0Sx9dYng` |
| Reactivate a Member | POST | `/members/{{id}}/enable` | `conn_mod_def::GJ8W7ZjpOAE::paOweuhSQ161b1Gfkj2oJg` |
| Update a Member | PUT | `/spi/v3/members` | `conn_mod_def::GJ8W7ZCWBwI::_8HWyYYKRE2vqAZ7RwZj6A` |

### Employees

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Employee | GET | `/spi/v3/employees/{{id}}` | `conn_mod_def::GJ8W7xi5quY::F-GTctkyROuQ1SWoyFoAxw` |
| List Account Employees | GET | `/spi/v3/employees` | `conn_mod_def::GJ8W7wx_fP0::ONX3tQCfSRGLo6nEGkYP_A` |
| Create an Employee | POST | `/spi/v3/employees` | `conn_mod_def::GJ8W7wey1Dc::dzn8u2LKSVm9NfaN194mug` |
| Update an Employee | PATCH | `/employees/{{id}}` | `conn_mod_def::GJ8W7wuqQBI::ZJ9PEZ-pTQG8KXJasLNaxw` |

### Subscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Active Subscriptions | GET | `/spi/v3/subscriptions` | `conn_mod_def::GJ8W7oD6T_s::-Hxl47eIRFKIJrSHT_0OFw` |
| Create a Webhook Subscription (Subscribe to an Event) | POST | `/spi/v3/subscriptions` | `conn_mod_def::GJ8W7pAYt9s::OqRb9kgcT-qpngFVo-Lp-g` |
| Unsubscribe (Delete) a Webhook Subscription | DELETE | `/subscriptions/{{id}}` | `conn_mod_def::GJ8W7qLHgeo::-Mi5umd0RKOpaJBf1O10dw` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job’s Application Form | GET | `/jobs/{{shortcode}}/application_form` | `conn_mod_def::GJ8W8nbCon0::dj1zbXfRSsu39ZiNOPLugg` |
| Get a Job’s Details | GET | `/jobs/{{shortcode}}` | `conn_mod_def::GJ8W8mhzNHY::2ioRE-u4SF23jHVN_SvEAQ` |
| List Jobs | GET | `/spi/v3/jobs` | `conn_mod_def::GJ8W8df05co::8jydf9XbTUOA1X8NA2MBHg` |

### Offers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Offer | GET | `/spi/v3/offers/{{id}}` | `conn_mod_def::GJ8W82mimJs::W9xcyVbVT1OuIHJJ7pJzyA` |
| Approve an Offer | PATCH | `/offers/{{id}}/approve` | `conn_mod_def::GJ8W89drZjA::fV250ReOTsiLmuchQP5sjQ` |
| Reject an Offer | PATCH | `/offers/{{id}}/reject` | `conn_mod_def::GJ8W89emJ78::3X_byrxKQ9OgNG3Vuz4U4w` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account by Subdomain | GET | `/accounts/{{subdomain}}` | `conn_mod_def::GJ8W7KEhnys::G_g0b6k_QFKd6GMGWsS9lw` |
| List Accessible Accounts | GET | `/spi/v3/accounts` | `conn_mod_def::GJ8W7KixnBg::AQJsh7gxQlqgVfaoYyWdRg` |

### TimeOffRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Off Requests | GET | `/spi/v3/timeoff/requests` | `conn_mod_def::GJ8W77dNW8M::T9rNAdCATzOxA1qCSfSRnQ` |
| Create a Time Off Request | POST | `/spi/v3/timeoff/requests` | `conn_mod_def::GJ8W75ODF3I::9sbnV6E-RdCLOTx2r8q6eA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Event | GET | `/events/{{id}}` | `conn_mod_def::GJ8W8byI98I::dK6AX4MPRxivl0h6T1eOWg` |
| List Events | GET | `/spi/v3/events` | `conn_mod_def::GJ8W8gOmGog::Ht0GMv38TveLnYqai-O86w` |

### EmployeeDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Employee’s Documents | GET | `/spi/v3/employees/{{id}}/documents` | `conn_mod_def::GJ8W7yXkarI::jXjZQ3asSQ6m921rT03i8g` |
| Upload Documents for an Employee | POST | `/spi/v3/employees/{{id}}/documents` | `conn_mod_def::GJ8W76TgRYk::wQK1q0nTRhibNZJdNl1NZg` |

### CollaborationPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Collaboration Permissions | GET | `/spi/v3/collaboration_permissions` | `conn_mod_def::GJ8W7J9YuIk::iAjiLL-8T5Ksnlz5iTXvPw` |

### LegalEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Legal Entities | GET | `/legal_entities` | `conn_mod_def::GJ8W7RXsjVk::lZPZoIDXRHGgZoUJaqLAZQ` |

### AccountsPublicJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Public Jobs | GET | `/accounts/{{subdomain}}` | `conn_mod_def::GJ8W7h5s9HA::GDlqw-MHRs27AdHhR8UZ9A` |

### EmployeeFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List Employee Fields | GET | `/employee_fields` | `conn_mod_def::GJ8W7pB64Jw::yP6KP39RQmKL3fw9m8ogHw` |

### WorkSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Work Schedules | GET | `/work_schedules` | `conn_mod_def::GJ8W8ETKM3w::cP-Xl6x5TGaMwqu8OAOIgQ` |

### CandidateActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Candidate’s Activities | GET | `/candidates/{{id}}/activities` | `conn_mod_def::GJ8W8GiMPoc::fVGGEkR5TleFv4AWEvBJdg` |

### CandidateComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Candidate Comment | POST | `/candidates/{{id}}/comments` | `conn_mod_def::GJ8W8M6lAsk::kik579ZNRdCMGzL2emQxtw` |

### CandidateRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Candidate Rating | POST | `/candidates/{{id}}/ratings` | `conn_mod_def::GJ8W8VCyy7E::JBX4NYScRzOi9Gq2G-baTw` |

### CustomAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Custom Attributes | GET | `/spi/v3/custom_attributes` | `conn_mod_def::GJ8W8bzZyIg::XQ-Tf6u-SbCPVj1ja6KaCA` |

### JobCustomAttributes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s Custom Attributes | GET | `/jobs/{{shortcode}}/custom_attributes` | `conn_mod_def::GJ8W8moRK_0::9BhhzZ8VTZ26wtCqCSN1ow` |

### JobActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s Activities | GET | `/jobs/{{shortcode}}/activities` | `conn_mod_def::GJ8W8nbzKlc::IFIO8P5zR7WcNx8Z9fFJ5Q` |

### TalentPoolCandidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Talent Pool Candidate in a Stage | POST | `/talent_pool/{{stage}}/candidates` | `conn_mod_def::GJ8W9J_5GqE::E6w1LFELRAGaZ5_JCXQwTA` |

### JobQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s Questions | GET | `/jobs/{{shortcode}}/questions` | `conn_mod_def::GJ8W81uMoxM::YQbTQSezTLCid2v3_xPfLQ` |

### DisqualificationReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Disqualification Reasons | GET | `/spi/v3/disqualification_reasons` | `conn_mod_def::GJ8W7RlZYs4::5G0UonOERQysDljubdMDOg` |

### TimeOffCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Off Categories | GET | `/spi/v3/timeoff/categories` | `conn_mod_def::GJ8W74yUJbE::InO9kSaXSpKMdudbV_c4HQ` |

### Recruiters

| Action | Method | Path | Action id |
|---|---|---|---|
| List External Recruiters | GET | `/spi/v3/recruiters` | `conn_mod_def::GJ8W7hkQnRQ::j1Npq2NPTvSyNHog0Ydjxg` |

### PermissionSets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Permission Sets | GET | `/spi/v3/permission_sets` | `conn_mod_def::GJ8W7gxiBo8::oy4yX1b2RnqxVZjbDSw78A` |

### Stages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recruitment Pipeline Stages | GET | `/spi/v3/stages` | `conn_mod_def::GJ8W7hFjbjI::T1h8XL7mRv6Fvk0YgsooTw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account’s Public Job Locations | GET | `/accounts/{{subdomain}}/locations` | `conn_mod_def::GJ8W7oWmPBo::CC_yqXkrS7OChIuyIWmp0g` |

### CandidatesFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Candidate's Files | GET | `/candidates/{{id}}/files` | `conn_mod_def::GJ8W8NIp5R8::9dppNrFJS8-csStQUsYQuQ` |

### TimeOffBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| List Time Off Balances | GET | `/spi/v3/timeoff/balances` | `conn_mod_def::GJ8W794WPi0::MKZbZ1LcT1GnWp9ZXtyStg` |

### JobMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s Hiring Team Members | GET | `/jobs/{{shortcode}}/members` | `conn_mod_def::GJ8W82V9HV4::WvNoq_rWQsiEIsYFCr0sVg` |

### JobRecruiters

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s External Recruiters | GET | `/jobs/{{shortcode}}/recruiters` | `conn_mod_def::GJ8W821vY-Q::jjAb3zKpRKuHn6AV3tK3gw` |

### JobStages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Job’s Recruitment Pipeline Stages | GET | `/jobs/{{shortcode}}/stages` | `conn_mod_def::GJ8W81yOVhg::zMK5qvG8TzW6_HbawPwmBA` |

## When a call fails

The error comes from Workable, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/workable

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
