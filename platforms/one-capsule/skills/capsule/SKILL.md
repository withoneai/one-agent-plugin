---
name: capsule
description: Capsule CRM is a streamlined cloud-based CRM designed for small businesses and sales teams, furnishing contact and organisation management, sales pipelines, tasks, projects, and analytics in one place for improved productivity and customer relationships. Read and write Capsule data through One: opportunities, kases, parties, pipelines, entries, milestones and more, 132 actions with real parameter documentation. Use whenever the user asks to look something up in Capsule, create or update a record there, or build code against the Capsule API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: capsule
  generated-from: one-knowledge-base
---

# Capsule through One

Capsule CRM is a streamlined cloud-based CRM designed for small businesses and sales teams, furnishing contact and organisation management, sales pipelines, tasks, projects, and analytics in one place for improved productivity and customer relationships.

One exposes Capsule through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `capsule` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Capsule is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Capsule account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Opportunities

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Party’s Opportunities | GET | `/api/v2/parties/{{partyId}}/opportunities` | `conn_mod_def::GJ1DgabbNmY::fCoUI4TcSPizrFGvFIPVOA` |
| List Deleted Opportunities | GET | `/api/v2/opportunities/deleted` | `conn_mod_def::GJ1DgDGFR_E::dB-kW8wBTkGdvXHGQFro6g` |
| List Multiple Opportunities by IDs | GET | `/api/v2/opportunities/{{opportunityIds}}` | `conn_mod_def::GJ1Dg01axwU::v6Dka7AERyC7HnYYvs4qNQ` |
| List Opportunities | GET | `/api/v2/opportunities` | `conn_mod_def::GJ1DgNZdoSw::vzKL0rW3RkWtnJa1rYW8HA` |
| Search Opportunities | GET | `/api/v2/opportunities/search` | `conn_mod_def::GJ1DgtjVLOo::tvC-KY2zSEe9I9SavJv-PQ` |
| Show an Opportunity | GET | `/api/v2/opportunities/{{opportunityId}}` | `conn_mod_def::GJ1Dg-UguCs::0xqH-uRDTR2ViH0ztM35Ew` |
| Add an Additional Contact to an Opportunity | POST | `/api/v2/opportunities/{{opportunityId}}/parties/{{partyId}}` | `conn_mod_def::GJ1DfXNRZII::vXC0szM-SDq_fL800oV2mg` |
| Create an Opportunity | POST | `/api/v2/opportunities` | `conn_mod_def::GJ1DffudlNA::jKN7N7vfQLalZ-Vc7JXDTw` |
| Delete an Opportunity | DELETE | `/api/v2/opportunities/{{opportunityId}}` | `conn_mod_def::GJ1DfnxCxhk::cN6Y7e8ZR1-Qw2JMGZ8yug` |
| Update an Opportunity | PUT | `/api/v2/opportunities/{{opportunityId}}` | `conn_mod_def::GJ1DhJ02v0E::U3WghnIlT9q_eDGLVLrxbQ` |

### Kases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Party’s Projects | GET | `/parties/{{partyId}}/kases` | `conn_mod_def::GJ1Dki4AZks::QHPCvv4ZQWSdcq8ZhMzjjw` |
| List an Opportunity’s Associated Projects | GET | `/opportunities/{{opportunityId}}/kases` | `conn_mod_def::GJ1Df6PDV6Q::89g6x9smQZeoeR7sgzIZ-A` |
| List Deleted Projects (Cases) | GET | `/kases/deleted` | `conn_mod_def::GJ1DkRqThYs::vKvO_qeFTcKUbkrFpfmpSg` |
| List Projects | GET | `/api/v2/kases` | `conn_mod_def::GJ1DkZcqw6E::p-cHZoeTTdGc77lGRo2ADQ` |
| Search Projects | GET | `/api/v2/kases/search` | `conn_mod_def::GJ1Dk2e8jNk::G30h35f3TL-4JdL_PPIYbQ` |
| Show a Project | GET | `/api/v2/kases/{{projectId}}` | `conn_mod_def::GJ1DlGwnEy0::u_PqD770RMCS5eQGzjkzAQ` |
| Show Multiple Projects (by IDs) | GET | `/api/v2/kases/{{projectIds}}` | `conn_mod_def::GJ1Dk_MqQzQ::ZsTEoFv_RnSf1HMYWS6DUA` |
| Add an Additional Contact to a Project | POST | `/api/v2/kases/{{projectId}}/parties/{{partyId}}` | `conn_mod_def::GJ1Djj-vpoM::J0aoWqj4S9epsh7mWsbCaA` |
| Create a Project | POST | `/api/v2/kases` | `conn_mod_def::GJ1Dj1JyvpU::gF-iVE-WR0KrJcwPdMDqFA` |
| Update a Project | PUT | `/api/v2/kases/{{projectId}}` | `conn_mod_def::GJ1DlOHuWQs::-fBzmzUmS5Ogs32g40sGNA` |

### Parties

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organisation’s Employees (People) | GET | `/api/v2/parties/{{partyId}}/people` | `conn_mod_def::GJ1Dhq_KYuw::P_zBK84OTIWWM-_LJgzTVw` |
| List Deleted Parties | GET | `/api/v2/parties/deleted` | `conn_mod_def::GJ1DhiM5PcI::tftoNmRPQoy1oAMgfDo4CA` |
| List Parties | GET | `/api/v2/parties` | `conn_mod_def::GJ1Dh3J_IbM::pFeijap8Qn25ZqNt3An1nQ` |
| Search Parties | GET | `/api/v2/parties/search` | `conn_mod_def::GJ1Dh_wNp8k::8XfM6Y-VRBiT0tf9MxgAIw` |
| Show a Party | GET | `/api/v2/parties/{{partyId}}` | `conn_mod_def::GJ1DiUS3llY::VHijiRKLSxGYy2-j8r8dPw` |
| Show Multiple Parties | GET | `/api/v2/parties/{{partyIds}}` | `conn_mod_def::GJ1DiJJJqns::WsTEkmlFTVS_vRz39xGyqQ` |
| Create a Party | POST | `/api/v2/parties` | `conn_mod_def::GJ1DhRJoeb4::BImqS73zQVCfF_DT4ctacw` |
| Delete a Party | DELETE | `/api/v2/parties/{{partyId}}` | `conn_mod_def::GJ1DhbH0tq0::aPIkN1mfQmiiA4oP42d_yA` |
| Update a Party | PUT | `/api/v2/parties/{{partyId}}` | `conn_mod_def::GJ1DicSKMl8::bTqFmmHYSjGcT4icjECfSA` |

### Pipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pipelines | GET | `/api/v2/pipelines` | `conn_mod_def::GJ1Di7qDYkY::JR4yXiwNT36_pwvXnj9grw` |
| Show a Pipeline | GET | `/api/v2/pipelines/{{pipelineId}}` | `conn_mod_def::GJ1DjUxalvE::GIJoIAi9R7CnBk9tPJCO3g` |
| Show Multiple Pipelines by IDs | GET | `/api/v2/pipelines/{{pipelineIds}}` | `conn_mod_def::GJ1DjLXZxzE::NwdGbLYmTtGnl7GRaeVfxg` |
| Archive a Pipeline | DELETE | `/api/v2/pipelines/{{pipelineId}}` | `conn_mod_def::GJ1Diikjvso::aQlkZOHzT9eixwDHuNQU0Q` |
| Create a Pipeline | POST | `/pipelines` | `conn_mod_def::GJ1DipcpDwg::z303lH2UQ3iGUgTchPseXA` |
| Duplicate a Pipeline | POST | `/api/v2/pipelines/{{pipelineId}}/duplicate` | `conn_mod_def::GJ1DiyXySDg::ZBga4BOKQxS-mWxZ5phgHA` |
| Restore a Pipeline | POST | `/pipelines/{{pipelineId}}/restore` | `conn_mod_def::GJ1DjC5MFhA::MzNOXpAbQrm5cEgvMafHUQ` |
| Update a Pipeline | PUT | `/api/v2/pipelines/{{pipelineId}}` | `conn_mod_def::GJ1DjckASJw::uHsW4CyDTkiSsoYUFcCcmQ` |

### Entries

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Entity’s Entries | GET | `/api/v2/{{entity}}/{{entityId}}/entries` | `conn_mod_def::GJ1DcEe-4tU::nudiOXP3T5y_bdnmcvPQTg` |
| List Entries by Date | GET | `/api/v2/entries` | `conn_mod_def::GJ1Db7vtIj8::X51WF5WQRKmmEgF6L3QR-A` |
| Show an Entry | GET | `/api/v2/entries/{{id}}` | `conn_mod_def::GJ1DcS3Ppbw::BPcUWSMYRtWy-Ay_xWkWyQ` |
| Create an Entry (Note) | POST | `/api/v2/entries` | `conn_mod_def::GJ1DbrsXwew::4smcHD9QTKmPuCJCl7XOWg` |
| Delete an Entry | DELETE | `/api/v2/entries/{{id}}` | `conn_mod_def::GJ1Dby9KVjc::xUo7axvMTu-Ub8JxPKLuvA` |
| Update an Entry (Note or Email) | PUT | `/api/v2/entries/{{id}}` | `conn_mod_def::GJ1DcaJV6p8::C2uCT-E3Qmqe4rq3CLeudg` |

### Milestones

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pipeline’s Milestones | GET | `/api/v2/pipelines/{{pipelineId}}/milestones` | `conn_mod_def::GJ1De-nYIiI::4Ig61JRUT8a-v8d43IoqtA` |
| List Milestones (Oldest Active Pipeline) | GET | `/api/v2/milestones` | `conn_mod_def::GJ1De2QBzak::R8AuNqTdR_2CNSvVSpIjmw` |
| Show a Milestone | GET | `/api/v2/milestones/{{milestoneId}}` | `conn_mod_def::GJ1DfHFpnwk::YA59W1YvQjaQbLPgZgxomw` |
| Create an Opportunity Milestone | POST | `/api/v2/milestones` | `conn_mod_def::GJ1DekQ7ezk::I81jVJJ2THOblao3EkGOOA` |
| Delete a Milestone | DELETE | `/api/v2/milestones/{{milestoneId}}` | `conn_mod_def::GJ1DerdA5WA::vEBz0SObRcCRxBmVQAOfLw` |
| Update a Milestone | PUT | `/api/v2/milestones/{{milestoneId}}` | `conn_mod_def::GJ1DfO2Cw44::jLm-MkqUQO-mPW1LruT4ZA` |

### Stages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Board’s Stages | GET | `/api/v2/boards/{{boardId}}/stages` | `conn_mod_def::GJ1DmXq0-6c::SnE-UvNGQ7us4eDp3i5ScA` |
| List Stages | GET | `/stages` | `conn_mod_def::GJ1DmO2PpYw::i3CyHVVlRsGM3qEcC01EUg` |
| Show a Stage | GET | `/api/v2/stages/{{stageId}}` | `conn_mod_def::GJ1DmfD3d28::04Trdud5RvuLUI2AhtZhbg` |
| Create a Stage | POST | `/stages` | `conn_mod_def::GJ1Dl8s3VbA::hyBAC9v6Tg-7y7YJzIKjWQ` |
| Delete a Stage | DELETE | `/api/v2/stages/{{stageId}}` | `conn_mod_def::GJ1DmFZqLXo::aBuvStDxTc6uqlM1wRHJMg` |
| Update a Stage | PUT | `/api/v2/stages/{{stageId}}` | `conn_mod_def::GJ1DmoZgX8k::k7KEqDuBSUOwjgy9pxtnBQ` |

### Boards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Boards | GET | `/api/v2/boards` | `conn_mod_def::GJ1DZftBUsk::TXH3D5CtT7CC0IM7nXdLuA` |
| Show a Board | GET | `/boards/{{boardId}}` | `conn_mod_def::GJ1DZtL4rXQ::A9qETpaxQd69AsLHik5IAA` |
| Archive a Board | DELETE | `/api/v2/boards/{{boardId}}` | `conn_mod_def::GJ1DZOucuO4::mw6IxnrPRWiQP-RGYXh_2g` |
| Create Board | POST | `/boards` | `conn_mod_def::GJ1DZVHLKUc::MW1If28sToKXxSk3w0cvIA` |
| Restore a Board | POST | `/api/v2/boards/{{boardId}}/restore` | `conn_mod_def::GJ1DZmhY4CI::I9U2XsS7Qg6t-QUGczwA8A` |
| Update a Board | PUT | `/api/v2/boards/{{boardId}}` | `conn_mod_def::GJ1DZ1Uf52o::NOdvwmz_RziZF2NCQx64Dg` |

### ActivityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Activity Types | GET | `/activitytypes` | `conn_mod_def::GJ1DYwX5pIg::pzHTJmSSTxi-e1RqnAyYNQ` |
| Show an Activity Type | GET | `/api/v2/activitytypes/{{activityTypeId}}` | `conn_mod_def::GJ1DY_Pn9Rc::p8Hs5h01Rtq4j_4Kbt8qjw` |
| Create an Activity Type | POST | `/activitytypes` | `conn_mod_def::GJ1DYgVmyU8::12f8YJrqQ9i7Ce9--2dqhA` |
| Delete an Activity Type | DELETE | `/api/v2/activitytypes/{{activityTypeId}}` | `conn_mod_def::GJ1DYn9Y4SY::Grlo8gTARj6I_nmrLs02qQ` |
| Update an Activity Type | PUT | `/api/v2/activitytypes/{{activityTypeId}}` | `conn_mod_def::GJ1DZGv7N6g::gv2fvlTSQDK_VGJHXM5XLg` |

### Goals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Goals | GET | `/api/v2/goals` | `conn_mod_def::GJ1DdSPc60g::TKWZ3fYCSK-j4V3ArV5udA` |
| Show a Goal | GET | `/api/v2/goals/{{goalId}}` | `conn_mod_def::GJ1DdeUt1K0::s11Mo0IYQzO89R1gjmhuVQ` |
| Create a Goal | POST | `/api/v2/goals` | `conn_mod_def::GJ1Dc4m2tMc::B1-QsViEQtGGq83NkBusng` |
| Delete a Goal | DELETE | `/api/v2/goals/{{goalId}}` | `conn_mod_def::GJ1Dc_DKdpY::oM-SJzgRTEqXZKGB5dXv0w` |
| Update a Goal | PUT | `/api/v2/goals/{{goalId}}` | `conn_mod_def::GJ1DdnBJgPA::dWiBvKgnQBqb4Op-EDu81A` |

### LostReasons

| Action | Method | Path | Action id |
|---|---|---|---|
| List Lost Reasons | GET | `/api/v2/lostreasons` | `conn_mod_def::GJ1DeN0R-DI::gZsXAuIoSJCRlFS1j7ZOdw` |
| Show a Lost Reason | GET | `/api/v2/lostreasons/{{lostReasonId}}` | `conn_mod_def::GJ1DeVBFIrY::x2kt6uLoRlehu0rwnI9igQ` |
| Create a Lost Reason | POST | `/lostreasons` | `conn_mod_def::GJ1Dd8i30ys::z1o-QROuQ5GNZD-zmVOO9w` |
| Delete a Lost Reason | DELETE | `/api/v2/lostreasons/{{lostReasonId}}` | `conn_mod_def::GJ1DeEKls6M::aaLOktLfRYGbccGhc96Jlw` |
| Update a Lost Reason | PUT | `/api/v2/lostreasons/{{lostReasonId}}` | `conn_mod_def::GJ1Dec0g9wM::aA-fFqAvQyqGcayQL9qr-Q` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tag Definitions for an Entity | GET | `/api/v2/{{entity}}/tags` | `conn_mod_def::GJ1DnME56eM::J2WftZTwSNe866yQMyLYTA` |
| Show a Specific Entity Tag Definition | GET | `/api/v2/{{entity}}/tags/{{tagId}}` | `conn_mod_def::GJ1DnUrAaq4::BbQRiTBGQ_2ugB0iy3mXww` |
| Create a Tag Definition for an Entity | POST | `/api/v2/{{entity}}/tags` | `conn_mod_def::GJ1DmwU3F5E::KNOcMm1jSAqQsrYjZnB_mA` |
| Delete a Tag Definition for an Entity | DELETE | `/{{entity}}/tags/{{tagId}}` | `conn_mod_def::GJ1Dm-gdfPk::-CiIgFF0S3u2F7WknJZlag` |
| Update an Entity Tag Definition | PUT | `/api/v2/{{entity}}/tags/{{tagId}}` | `conn_mod_def::GJ1Dnb1Cnto::EdsRO3vgQkaPjAC2uvhNTQ` |

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/api/v2/tasks` | `conn_mod_def::GJ1Dnzqrkg4::DmVQNncrRkqk8fjGJK3SmA` |
| Show a Task | GET | `/api/v2/tasks/{{taskId}}` | `conn_mod_def::GJ1Dn7Gk90U::t4tJScXaQxqwDb6E2HOWag` |
| Create Task | POST | `/tasks` | `conn_mod_def::GJ1DnjU5xPs::icjWh7xvQb6LTKzHVEmMsg` |
| Delete a Task | DELETE | `/api/v2/tasks/{{taskId}}` | `conn_mod_def::GJ1Dnqu3lbQ::P5EAtA5BRgSiFKzpUw7mGA` |
| Update a Task | PUT | `/api/v2/tasks/{{taskId}}` | `conn_mod_def::GJ1DoFcNnAM::Hk89k-wCTAyl_1PCpDEmoA` |

### Tracks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tracks for a Project or Opportunity | GET | `/{{entity}}/{{entityId}}/tracks` | `conn_mod_def::GJ1Do06Y7-s::JfSMpaq5S0mDCSy88LxTbw` |
| Show a Track | GET | `/api/v2/tracks/{{trackId}}` | `conn_mod_def::GJ1Do8BQnOQ::ye-hw3CRSeKxV2_xSEnJvg` |
| Create a Track | POST | `/api/v2/tracks` | `conn_mod_def::GJ1Dohuedk8::wZFstO08SIaJg3mg6Dm-Qw` |
| Delete a Track | DELETE | `/api/v2/tracks/{{trackId}}` | `conn_mod_def::GJ1Doq6A3Ek::Q9NBHmKpRey0OtQyAkxmKw` |

1 more Tracks actions are available through search.

This lists 90 of 132 actions. For anything not here, call `search_one_platform_actions` with platform `capsule`. The full catalog is at https://www.withone.ai/knowledge/capsule.

## When a call fails

The error comes from Capsule, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/capsule

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
