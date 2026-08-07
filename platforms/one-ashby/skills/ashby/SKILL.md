---
name: ashby
description: Ashby is an all-in-one recruiting platform that combines applicant tracking, recruiting CRM, scheduling, sourcing, and analytics, with embedded AI and automation to help teams manage and scale hiring workflows from startups to large enterprises. Read and write Ashby data through One: candidates, locations, openings, applications, offers, departments and more, 177 actions with real parameter documentation. Use whenever the user asks to look something up in Ashby, create or update a record there, or build code against the Ashby API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ashby
  generated-from: one-knowledge-base
---

# Ashby through One

Ashby is an all-in-one recruiting platform that combines applicant tracking, recruiting CRM, scheduling, sourcing, and analytics, with embedded AI and automation to help teams manage and scale hiring workflows from startups to large enterprises.

One exposes Ashby through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ashby` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ashby is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ashby account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Candidates

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Candidate to a Project | POST | `/candidate.addProject` | `conn_mod_def::GMPpWrA2xG4::eLaQJRJbQKCLGwHd-5IAYA` |
| Add Tag to a Candidate | POST | `/candidate.addTag` | `conn_mod_def::GMPpWrIz98E::yaOowODFTdKoSp8WGlTZ7g` |
| Create a Candidate | POST | `/candidate.create` | `conn_mod_def::GMPpWzESRrU::bwzuhdxeQP-i09f3bLBeuQ` |
| Get Candidate Details | POST | `/candidate.info` | `conn_mod_def::GMPpWy9Vh3U::KmvGbme7RdCCfJ1T7-puSQ` |
| List Candidates | POST | `/candidate.list` | `conn_mod_def::GMPpWyZ3NXw::Bs2cCk9LTquFgHKuhfYKMg` |
| List Fraud Checks for a Candidate | POST | `/candidate.listFraudChecks` | `conn_mod_def::GMPpW7R9mFg::pSRsOA9DT1-2aWAXXXYxQA` |
| Remove a Tag from a Candidate | POST | `/candidate.removeTag` | `conn_mod_def::GMPpXBo9_98::i8ZQkyhFRHqRqpkouyiDMA` |
| Search Candidates | POST | `/candidate.search` | `conn_mod_def::GMPpXDcgNfI::JGNIW9SzQiqTBHm4Sohq6Q` |
| Set Fraud Status for a Candidate | POST | `/candidate.setFraudStatus` | `conn_mod_def::GMPpXC4ej1E::XtBZ1xTrSE2fQYi36gIDVQ` |
| Update a Candidate | POST | `/candidate.update` | `conn_mod_def::GMPpXBqHukQ::1dJ4g03bR2SOKgOAupTDUQ` |
| Upload File for a Candidate | POST | `/candidate.uploadFile` | `conn_mod_def::GMPpXMK1Wd8::AUgFnIEmSfyKrtdmGpDQAw` |
| Upload Resume for a Candidate | POST | `/candidate.uploadResume` | `conn_mod_def::GMPpXKuK56s::uFtvwUMKSKWht8m0s05cqw` |

### Locations

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Location | POST | `/location.archive` | `conn_mod_def::GMPpYyOr_rU::uI1Y9YGoTuOroeTuJC7KrA` |
| Create a Location | POST | `/location.create` | `conn_mod_def::GMPpYyP3ckA::5tZUijJLQjisLetvBwHupQ` |
| Get Location Info | POST | `/location.info` | `conn_mod_def::GMPpY388swk::4dczoprdT3a5xdZtYl_ukg` |
| List Locations | POST | `/location.list` | `conn_mod_def::GMPpYylshXE::apzZOXUuRw6GsYJ73ClKIQ` |
| Move a Location | POST | `/location.move` | `conn_mod_def::GMPpY9znuXQ::ScD1yA33Rx2SFZOYgmBDfA` |
| Restore a Location | POST | `/location.restore` | `conn_mod_def::GMPpZAD4Fuo::azfjsNN0TICATEUvEvZSNw` |
| Update a Location Address | POST | `/location.updateAddress` | `conn_mod_def::GMPpY-pgY9w::41aJaK2nS2C7Nyj2LLR1Zw` |
| Update a Location Name | POST | `/location.updateName` | `conn_mod_def::GMPpY-M_CQI::aR8zGU2vT76edcIcf5a3AA` |
| Update a Location's External Name | POST | `/location.updateExternalName` | `conn_mod_def::GMPpY97gW5E::D8s9hpdFSJWfZG6Tpmsq9w` |
| Update Workplace Type for a Location | POST | `/location.updateWorkplaceType` | `conn_mod_def::GMPpZF1bVoM::rhxBGut_QzuXQccSNGQEOg` |

### Openings

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Job to Opening | POST | `/opening.addJob` | `conn_mod_def::GMPpZbV9b0o::WBo3b0m2TGK-CqCCE-q5Iw` |
| Add Location Using Opening | POST | `/opening.addLocation` | `conn_mod_def::GMPpZbRx0Go::PE1vpeoqQCuVRANwqLeWhA` |
| Create an Opening | POST | `/opening.create` | `conn_mod_def::GMPpZeoTDpA::Mb82dBAvS3i24F74OIMprw` |
| List Openings | POST | `/opening.list` | `conn_mod_def::GMPpZk92fRA::HqDez-4BQXiu18ZEOV0QGw` |
| Remove a Job from an Opening | POST | `/opening.removeJob` | `conn_mod_def::GMPpZxR5YiA::GsDL7RquRLeQZ4V5I4la_w` |
| Remove a Location from an Opening | POST | `/opening.removeLocation` | `conn_mod_def::GMPpZlHVLx0::kvqHI8R2QxyTy-7rvRRPWw` |
| Search Openings | POST | `/opening.search` | `conn_mod_def::GMPpZkqMDK0::7pFuDEMgQqK6oJiAPYu2EQ` |
| Set Archived State for an Opening | POST | `/opening.setArchived` | `conn_mod_def::GMPpZ3X0EC4::Xx4BSSJ5QHOrzsKxtKdv_g` |
| Set Opening State | POST | `/opening.setOpeningState` | `conn_mod_def::GMPpZ4N3TgE::sBGBzhIYQKGYGeicORtOSA` |
| Update an Opening | POST | `/opening.update` | `conn_mod_def::GMPpZ4UHAJ0::zXUS4At-TLqqgXPMGnXRXQ` |

### Applications

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Hiring Team Member to an Application | POST | `/application.addHiringTeamMember` | `conn_mod_def::GMPpV1aVK24::_WOqzWlOTPSHiP8cO__HeQ` |
| Change an Application's Source | POST | `/application.change_source` | `conn_mod_def::GMPpV9RHduw::8N249LV_R-KGiif57u2pzQ` |
| Change Stage for an Application | POST | `/application.change_stage` | `conn_mod_def::GMPpV10498s::AAVChC5KQG-hH26Tw4QqqQ` |
| Create an Application | POST | `/application.create` | `conn_mod_def::GMPpWDnzmp4::0AYsu89zSpuXtDSGd3k5yA` |
| Delete an Application | POST | `/application.delete` | `conn_mod_def::GMPpWDjGO_s::q1s_nne4T72AiniWzgoT_A` |
| List Applications | POST | `/application.list` | `conn_mod_def::GMPpWD32rCg::ejgYRFvGSLWwmT3N-ePqVA` |
| Remove a Hiring Team Member from an Application | POST | `/application.removeHiringTeamMember` | `conn_mod_def::GMPpWKwehgg::oHQ2cuhmQ7GGBmw1JqSqGg` |
| Transfer an Application | POST | `/application.transfer` | `conn_mod_def::GMPpWKOffJs::HnwQ1pNvRBq32ckKeWqCrw` |
| Update History for an Application | POST | `/application.updateHistory` | `conn_mod_def::GMPpWRvhWLQ::7fCZfl-LQ6evgJMZ4HBY2w` |

### Offers

| Action | Method | Path | Action id |
|---|---|---|---|
| Approve an Offer | POST | `/offer.approve` | `conn_mod_def::GMPpZJMjT7M::OtKcRIgiTcSR5NvICgVD9A` |
| Create an Offer | POST | `/offer.create` | `conn_mod_def::GMPpZGrsFBc::LEbqhtbGTPuqvQZHUUrTDQ` |
| Get Offer Details | POST | `/offer.info` | `conn_mod_def::GMPpZFzaOxg::w9ZeWT39Q9G0lnktp26bFw` |
| List Offers | POST | `/offer.list` | `conn_mod_def::GMPpZUrHMSM::z1_VeqfbTfSo8Mlcot5AzA` |
| Set Decided At for an Offer | POST | `/offer.setDecidedAt` | `conn_mod_def::GMPpZP-6DsM::u_mmPCm6Qj2p8rz8BA9noQ` |
| Set Offer Status | POST | `/offer.setStatus` | `conn_mod_def::GMPpZPCqy0M::s0THUkVVRUCYkjJ0f4nmvA` |
| Start Approval Process for an Offer | POST | `/offer.startApprovalProcess` | `conn_mod_def::GMPpZQXcVLA::EtgMm8_7QLaCve8ReADonA` |
| Update an Offer | POST | `/offer.update` | `conn_mod_def::GMPpZa18p8A::zuPCRHkHQ1uvmtYKz7ZWzw` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive a Department | POST | `/department.archive` | `conn_mod_def::GMPpXbPsRhg::135GtKHVTTuWNrHWJVJvWQ` |
| Create a Department | POST | `/department.create` | `conn_mod_def::GMPpXbB1EPI::SZ8aO5mlR1-krqBaFwIzQg` |
| Get Department Details | POST | `/department.info` | `conn_mod_def::GMPpXmKzufY::bNSyEs8_RWaumU9siNkSoQ` |
| List Departments | POST | `/department.list` | `conn_mod_def::GMPpXmLU6iM::upyzhdUTQR-2Xvpt4ZvJdQ` |
| Move a Department | POST | `/department.move` | `conn_mod_def::GMPpXmABUvs::pOHpDdMLSbmC62cccleDQg` |
| Restore a Department | POST | `/department.restore` | `conn_mod_def::GMPpXnSuVcM::kOgRPfhuRlmE8qtxTNhhFQ` |
| Update a Department | POST | `/department.update` | `conn_mod_def::GMPpXnaCEP8::eZv7FWprSMafPydWZx9TZA` |

### InterviewerPool

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a User to an Interviewer Pool | POST | `/interviewerPool.addUser` | `conn_mod_def::GMPpYImirkY::X6NC79RASBuCennefQgb5g` |
| Archive an Interviewer Pool | POST | `/interviewerPool.archive` | `conn_mod_def::GMPpYOrsK9s::gePXi_kPS727GB5afZz4Yw` |
| Create an Interviewer Pool | POST | `/interviewerPool.create` | `conn_mod_def::GMPpYO2_82E::egz9TAzqSqSTp6ISXj6Y8w` |
| Get Information About an Interviewer Pool | POST | `/interviewerPool.info` | `conn_mod_def::GMPpYSZZ8Nk::FiOm2an4QiOtO9hKcqT5ZQ` |
| Remove a User from an Interviewer Pool | POST | `/interviewerPool.removeUser` | `conn_mod_def::GMPpYPMbCP8::FQS05qDoT46D_D-0q7nInQ` |
| Restore an Interviewer Pool | POST | `/interviewerPool.restore` | `conn_mod_def::GMPpYY7_g5E::iqGXfBWHTgKmxG_EwkXSpg` |
| Update an Interviewer Pool | POST | `/interviewerPool.update` | `conn_mod_def::GMPpYa1faX4::vYIxN-CdQZGHoj2UrdS69A` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Job | POST | `/job.create` | `conn_mod_def::GMPpYZRAmSU::_zOiZ4b5SHq6FivTED-x4w` |
| Get Job Info | POST | `/job.info` | `conn_mod_def::GMPpYakL2a8::aYJunI5LTH2r4ZYXpEC8Tw` |
| List Jobs | POST | `/job.list` | `conn_mod_def::GMPpYZGrDjg::p3Ac7cOYRZy6H7m0moyjcg` |
| Search Jobs | POST | `/job.search` | `conn_mod_def::GMPpYglGuPk::xrvntv0SSnOWDuv6cwr2qw` |
| Set Status for a Job | POST | `/job.setStatus` | `conn_mod_def::GMPpYkzEGQg::l0FighnLQQWJZTae4mzf0A` |
| Update a Job | POST | `/job.update` | `conn_mod_def::GMPpYg4-LNQ::a9KPZ07vTgGFqwynXU3jEg` |
| Update Compensation for a Job | POST | `/job.updateCompensation` | `conn_mod_def::GMPpYi-WBV4::yLJWwWrfR0-TUN4ll2BtAQ` |

### Application

| Action | Method | Path | Action id |
|---|---|---|---|
| Change Source for an Application | POST | `/application.changeSource` | `conn_mod_def::GMPpV2iArmU::YAP7iyymSnOoVtYi9HOSDw` |
| Change Stage for an Application | POST | `/application.changeStage` | `conn_mod_def::GMPpWDpZpxI::87Eqdh0nQqSprxCvJn2TZQ` |
| Get Application Info | POST | `/application.info` | `conn_mod_def::GMPpWDcFYyk::tYoSaYGfSs6-4GPhneFx-w` |
| Update an Application | POST | `/application.update` | `conn_mod_def::GMPpWKw_YuU::NeMP1P1TQx-KVVm__bVA4w` |

### CustomField

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Custom Field | POST | `/customField.create` | `conn_mod_def::GMPpXU-agaY::7v-HMWgPQU2CCoQraBlrsQ` |
| Get Information About a Custom Field | POST | `/customField.info` | `conn_mod_def::GMPpXUsxOME::moI65wWFSIm45mv4iMF9gQ` |
| Set Value Using Custom Field | POST | `/customField.setValue` | `conn_mod_def::GMPpXbcmsKA::4_BBNZPkRwSb7pSxLPqkjA` |
| Update Selectable Values for a Custom Field | POST | `/customField.updateSelectableValues` | `conn_mod_def::GMPpXbiOAFM::uRAeX78eTteoK0T6lE_LbA` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| List Users | POST | `/user.list` | `conn_mod_def::GMPpagXmRtQ::v379TzLyS1mdriXFNcQLwQ` |
| Search Users by Email | POST | `/user.search` | `conn_mod_def::GMPpag2HhhU::SN62J_juTFOHL0i4EqeZGA` |
| Set Custom Field Value Using User | POST | `/user.setCustomFieldValue` | `conn_mod_def::GMPpamwDxP4::xkVcDrWlQnWDyHFXs4Hm1g` |
| Set Custom Field Values for a User | POST | `/user.setCustomFieldValues` | `conn_mod_def::GMPpaoKeLqk::qX5Q34cnTNepu-Q_5bW-ow` |

### Assessment

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an Assessment | POST | `/assessment.cancel` | `conn_mod_def::GMPpWi_kb0c::OuW7ssM_SgiXwY1WFj7c3Q` |
| Start an Assessment | POST | `/assessment.start` | `conn_mod_def::GMPpWjNUk04::CMiN4D_gTQaF-Z9PCmYRNQ` |
| Update Assessment | POST | `/assessment.update` | `conn_mod_def::GMPpWibinwQ::lsvKAqGxQj2OpwIfEVtXPw` |

### Candidate

| Action | Method | Path | Action id |
|---|---|---|---|
| Anonymize a Candidate | POST | `/candidate.anonymize` | `conn_mod_def::GMPpWz9tyHE::kdA52w8PTh2dAqY9avCoSw` |
| Push a Candidate to an HRIS | POST | `/candidate.pushToHris` | `conn_mod_def::GMPpW6ND-i8::BY8N3_geQrO7RFKL0Bwk7A` |
| Remove a Project from a Candidate | POST | `/candidate.removeProject` | `conn_mod_def::GMPpXEUVKeg::GdDXCzEJR_i46fOg1EiBZQ` |

### InterviewSchedule

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel an Interview Schedule | POST | `/interviewSchedule.cancel` | `conn_mod_def::GMPpX_1bn68::jvrGpeG7TB24h8Up14TC3Q` |
| Create an Interview Schedule | POST | `/interviewSchedule.create` | `conn_mod_def::GMPpX_dKWqg::0tHdRH-jRJm89YUyqNLL1w` |

1 more InterviewSchedule actions are available through search.

This lists 90 of 177 actions. For anything not here, call `search_one_platform_actions` with platform `ashby`. The full catalog is at https://www.withone.ai/knowledge/ashby.

## When a call fails

The error comes from Ashby, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ashby

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
