---
name: faraday
description: An AI-driven predictive analytics platform that uses machine learning and rich customer data to forecast individual customer behaviors—such as conversion likelihood, churn risk, and spend—so businesses can build smarter, personalized experiences and data-driven decisioning across applications. Read and write Faraday data through One: targets, traits, datasets, scopes, connections, outcomes and more, 161 actions with real parameter documentation. Use whenever the user asks to look something up in Faraday, create or update a record there, or build code against the Faraday API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: faraday
  generated-from: one-knowledge-base
---

# Faraday through One

An AI-driven predictive analytics platform that uses machine learning and rich customer data to forecast individual customer behaviors—such as conversion likelihood, churn risk, and spend—so businesses can build smarter, personalized experiences and data-driven decisioning across applications.

One exposes Faraday through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `faraday` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Faraday is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Faraday account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Targets

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Target's Default Output | GET | `/targets/{{targetId}}/download.csv` | `conn_mod_def::GKHZ_2LX5b4::YxgaXfawRpCV6jC5luzgEA` |
| Get a Scope's Targets | GET | `/scopes/{{scopeId}}/targets` | `conn_mod_def::GKHZ_Iv418c::SHJ_4sBbSgirzyvKJ2LLdw` |
| List a Connection's Targets | GET | `/connections/{{connectionId}}/targets` | `conn_mod_def::GKHZ8rMwu8o::s4r21zbSQCmoDSWP7aw9pg` |
| List Targets | GET | `/targets` | `conn_mod_def::GKHZ_2MMEWk::ZYMtLRmLQTeRyVZ4fL9_dg` |
| Retrieve a Target | GET | `/targets/{{targetId}}` | `conn_mod_def::GKHZ_3FkNI8::LC1aw0yjRK27dghlwmNQsQ` |
| Retrieve a Target's Analysis | GET | `/targets/{{targetId}}/analysis` | `conn_mod_def::GKHZ_1araQ8::O6c7QvCIQ0S9xEAfp3R_kQ` |
| Archive a Target | POST | `/targets/{{targetId}}/archive` | `conn_mod_def::GKHZ_szKQU8::7RTgwdzyScmZaAuSY41kOw` |
| Create Target | POST | `/v1/targets` | `conn_mod_def::GKHZ_t5FDR4::CeJCdzZQSdunJHVTGWydew` |
| Delete a Target | DELETE | `/targets/{{targetId}}` | `conn_mod_def::GKHZ_txtsew::evB7Z8I0RZaNYfp6h3tAfg` |
| Perform a Lookup on a Target | POST | `/targets/{{targetId}}/lookup` | `conn_mod_def::GKHZ_2X0i-k::24OkDLqxQ7KIF-oZGwOIww` |
| Start a Target Preview Delivery | POST | `/targets/{{targetId}}/preview` | `conn_mod_def::GKHZ_-nPP6Y::HKlTvJERT36kZklFJqEGRg` |
| Trigger a Target Rerun | POST | `/targets/{{targetId}}/force_update` | `conn_mod_def::GKHZ__R40eI::uxRImsxASyeEf5UFv6fxBw` |

2 more Targets actions are available through search.

### Traits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Trait | GET | `/traits/{{traitId}}` | `conn_mod_def::GKHaAJ1r8KU::8VHRS_JJR2-7NViLEiNfaQ` |
| Get a Trait's Analysis Dimensions | GET | `/traits/{{traitId}}/analysis/dimensions` | `conn_mod_def::GKHaARMZlPE::KKqTN9eoR-a13cCTcF4aKQ` |
| List All Traits as CSV | GET | `/traits.csv` | `conn_mod_def::GKHaARI3R-s::rdDiCpbcSmmla0zEoAslhg` |
| List Traits | GET | `/traits` | `conn_mod_def::GKHaARp9sIM::aQuCmpSySSu7OaSYdREXAw` |
| Archive a Trait | POST | `/traits/{{traitId}}/archive` | `conn_mod_def::GKHaAJZXRkU::IUiWMW_LRF-xILefkZfdcQ` |
| Create a Trait | POST | `/traits` | `conn_mod_def::GKHaAJcKYY8::qfDyyjlxQFWFEqvmJKdJ0A` |
| Delete a Trait | DELETE | `/traits/{{traitId}}` | `conn_mod_def::GKHaAJqNuNU::N5xAetWQTgqZnFiKlOQ_1w` |
| Delete All Orphaned Traits | DELETE | `/v1/traits` | `conn_mod_def::GKHaAJkUcUk::5sclT2xgTGGHjBkj6lVPpg` |
| Trigger a Rerun for a Trait | POST | `/traits/{{traitId}}/force_update` | `conn_mod_def::GKHaAR7fG4U::nj6ILJq4RmidQbQOlmLt0w` |
| Unarchive a Trait | POST | `/traits/{{traitId}}/unarchive` | `conn_mod_def::GKHaAR5OgkA::MQd3nvMUSr24BrT59fUWSw` |
| Update a Trait | PATCH | `/traits/{{traitId}}` | `conn_mod_def::GKHaAZ7R5tI::GS3QfK1TSYOxLOEOYe5dQw` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Connection's Datasets | GET | `/connections/{{connectionId}}/datasets` | `conn_mod_def::GKHZ8rSDvoY::M22aQmOARFiLT-mSCY7e_Q` |
| List a Scope's Datasets | GET | `/scopes/{{scopeId}}/datasets` | `conn_mod_def::GKHZ_IciFA0::Z4Hw9XkdSqmvOgqLs_IKlw` |
| List Datasets | GET | `/datasets` | `conn_mod_def::GKHZ8-XPXxY::lCu6bP1uQdet1plWIqD9pQ` |
| Retrieve a Dataset | GET | `/datasets/{{datasetId}}` | `conn_mod_def::GKHZ8_FOKo0::W4LeMPeYQfeYIre9NBQkEQ` |
| Archive a Dataset | POST | `/datasets/{{datasetId}}/archive` | `conn_mod_def::GKHZ80z6wzw::G99QpPqDTuukMdTh3IVmYw` |
| Create Dataset | POST | `/datasets` | `conn_mod_def::GKHZ804CE5k::riWMhIaKTLqmj17PvDc9CQ` |
| Delete a Dataset | DELETE | `/datasets/{{datasetId}}` | `conn_mod_def::GKHZ800KMKw::InU3biPFSCyxSUN8nTnBqg` |
| Trigger a Rerun for a Dataset | POST | `/datasets/{{datasetId}}/force_update` | `conn_mod_def::GKHZ8-lfYOQ::_y-TXlgZRSGArPqkYcjMeQ` |
| Unarchive a Dataset | POST | `/datasets/{{datasetId}}/unarchive` | `conn_mod_def::GKHZ9H1ZtcQ::DLbLULTmRTaRcJNEHdQWLw` |
| Update a Dataset | PATCH | `/datasets/{{datasetId}}` | `conn_mod_def::GKHZ9IpXItg::qStYPw8uT4acmK9-AnGlvg` |

### Scopes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scope's Analysis | GET | `/scopes/{{scopeId}}/analysis` | `conn_mod_def::GKHZ-0Boxn0::QqFWkp3sTKudKVn6odQFpQ` |
| Get a Scope's Efficacy | GET | `/scopes/{{scopeId}}/efficacy` | `conn_mod_def::GKHZ-0xs5Mg::8_NYvjJeQnCkRhcEoEzN9g` |
| List Scopes | GET | `/scopes` | `conn_mod_def::GKHZ_IwGW8I::C25snyRHSniNmyLAgBF1ew` |
| Retrieve a Scope | GET | `/scopes/{{scopeId}}` | `conn_mod_def::GKHZ_IZ-f2A::2XZPnBg0TMSvnAfZGE0_3A` |
| Archive a Scope | POST | `/scopes/{{scopeId}}/archive` | `conn_mod_def::GKHZ-0M8jdA::ZDdZXhjcReKDFxXxUuJKEw` |
| Create Scope | POST | `/scopes` | `conn_mod_def::GKHZ-0Co3fA::XkAKy2BWRzGaKCriy1-5hw` |
| Delete a Scope | DELETE | `/scopes/{{scopeId}}` | `conn_mod_def::GKHZ-z1FhFs::E5EQibz-QjuqC8vPUmcQaw` |
| Trigger a Scope Rerun | POST | `/scopes/{{scopeId}}/force_update` | `conn_mod_def::GKHZ_RvAMAc::nm_gkQzmRBOKcZMzLTyWXg` |
| Unarchive a Scope | POST | `/scopes/{{scopeId}}/unarchive` | `conn_mod_def::GKHZ_SNHR2M::NeNS07OzRcClFgEiV6h9QA` |
| Update a Scope | PATCH | `/scopes/{{scopeId}}` | `conn_mod_def::GKHZ_Rj0rqY::-XoUR66sR4SSA845grx7zQ` |

### Connections

| Action | Method | Path | Action id |
|---|---|---|---|
| List Connections | GET | `/connections` | `conn_mod_def::GKHZ8gfGiLE::pT1fHaY1QwmJIImuaZpzJg` |
| Retrieve a Connection | GET | `/connections/{{connectionId}}` | `conn_mod_def::GKHZ8slolMw::Hpg7OFNDS1ipcSasCWqJBA` |
| Archive a Connection | POST | `/connections/{{connectionId}}/archive` | `conn_mod_def::GKHZ8h-s7MU::vHlpSNnfTzW9IwussuF5OQ` |
| Create a Connection | POST | `/connections` | `conn_mod_def::GKHZ8ib_ee0::6MZsILiRQ5-RtlBiiiXfsQ` |
| Delete a Connection | DELETE | `/connections/{{connectionId}}` | `conn_mod_def::GKHZ8f8JKzY::8WxuHMolQL6_mGDjlrVPTA` |
| Force Update a Connection | POST | `/connections/{{connectionId}}/force_update` | `conn_mod_def::GKHZ8qnX_wY::ALBBoxUmSLKxTvgfaeYpzw` |
| Rotate a Connection's Credentials | POST | `/connections/{{connectionId}}/rotate_credentials` | `conn_mod_def::GKHZ8qLrHf8::b9MzDyUVQf6xEXldsx_a2w` |
| Unarchive a Connection | POST | `/connections/{{connectionId}}/unarchive` | `conn_mod_def::GKHZ808lUQU::8xlrzuyoQGiM_9c72U5y3Q` |
| Update a Connection | PATCH | `/connections/{{connectionId}}` | `conn_mod_def::GKHZ82E1_zo::mANy4VX7Rf2MOE5K8hgOdA` |

### Outcomes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Outcomes | GET | `/outcomes` | `conn_mod_def::GKHZ91GhRvQ::LkRdKCnCQ3uvMi9qL_DWBg` |
| Retrieve an Outcome | GET | `/outcomes/{{outcomeId}}` | `conn_mod_def::GKHZ903idFo::yx638Ou1SwCFR05FffnbBw` |
| Retrieve an Outcome's Report | GET | `/outcomes/{{outcomeId}}/report.html` | `conn_mod_def::GKHZ90nb0pI::gW9llqvLRQCiyimuyCbJbQ` |
| Archive an Outcome | POST | `/outcomes/{{outcomeId}}/archive` | `conn_mod_def::GKHZ9le24e8::cNaDONHkRS-bmaERCF0OBw` |
| Create Outcome | POST | `/outcomes` | `conn_mod_def::GKHZ9kwP0Yo::hAwmB56dSS6FHDNe2eUyrw` |
| Delete an Outcome | DELETE | `/outcomes/{{outcomeId}}` | `conn_mod_def::GKHZ9lWWoYo::VQdTr-zWSU69PKJyRS_WeQ` |
| Edit an Outcome | PATCH | `/outcomes/{{outcomeId}}` | `conn_mod_def::GKHZ91myyWw::QEqSObN7RweLJeJy4kF0Bw` |
| Trigger an Outcome Rerun | POST | `/outcomes/{{outcomeId}}/force_update` | `conn_mod_def::GKHZ99yeEA4::ULrU8_o0S8KwiJYVZBjrUg` |
| Unarchive an Outcome | POST | `/outcomes/{{outcomeId}}/unarchive` | `conn_mod_def::GKHZ9-Uqxxs::p6S-lC08SGGiMhJ_Eh_l_Q` |

### PersonaSets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Persona Set's Analysis Flow | GET | `/persona_sets/{{personaSetId}}/analysis/flow` | `conn_mod_def::GKHZ-G6D7NQ::VC-4UTIwSo-FYaBH5cBekQ` |
| List Persona Sets | GET | `/persona_sets` | `conn_mod_def::GKHZ-HBGidk::M3a5yUUhS7i_gJuF8B2Qyg` |
| Retrieve a Persona Set | GET | `/persona_sets/{{personaSetId}}` | `conn_mod_def::GKHZ-PdojBE::zdBmiUxuTYqt6pV_QPEMcw` |
| Archive a Persona Set | POST | `/persona_sets/{{personaSetId}}/archive` | `conn_mod_def::GKHZ99F7oJQ::U3ST9wx4S3av_4TLsDdHhg` |
| Create Persona Set | POST | `/persona_sets` | `conn_mod_def::GKHZ9-VAKA4::StRIJZkZSQW6oEwhxeZvHQ` |
| Delete a Persona Set | DELETE | `/persona_sets/{{personaSetId}}` | `conn_mod_def::GKHZ980X4-Q::03qolo-NS_OtVgtvivnPsg` |
| Edit a Persona Set | PATCH | `/persona_sets/{{personaSetId}}` | `conn_mod_def::GKHZ-G1K1jw::zn5poQ6mTuysyI2D1g_ePQ` |
| Trigger a Rerun for a Persona Set | POST | `/persona_sets/{{personaSetId}}/force_update` | `conn_mod_def::GKHZ-QLcYwE::JbfvvRoaSjCao-rwZ8gfBA` |
| Unarchive a Persona Set | POST | `/persona_sets/{{personaSetId}}/unarchive` | `conn_mod_def::GKHZ-QeGiS8::3Hf8cv2PS9mjWenzEAE0qg` |

### Recommenders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Recommenders | GET | `/v1/recommenders` | `conn_mod_def::GKHZ-rErKwk::xxdMSnHlQnuM8yTkQMcQWA` |
| Retrieve a Recommender | GET | `/recommenders/{{recommenderId}}` | `conn_mod_def::GKHZ-qTdb8s::vrPhK203QFCqN6evPOqzQw` |
| Retrieve a Recommender's Analysis | GET | `/recommenders/{{recommenderId}}/analysis` | `conn_mod_def::GKHZ-rJxGsM::1zrDIoSiTry-TfoTgXZnKA` |
| Archive a Recommender | POST | `/recommenders/{{recommenderId}}/archive` | `conn_mod_def::GKHZ-ihSYVI::YhPkZVIvR4aBMOeMQR4tGQ` |
| Create Recommender | POST | `/recommenders` | `conn_mod_def::GKHZ-hDU334::DPG-wYdNSDa1aFpCmJjUcQ` |
| Delete a Recommender | DELETE | `/recommenders/{{recommenderId}}` | `conn_mod_def::GKHZ-hPi2qY::dO6ZiXANQjCn1VGoSFoCbg` |
| Edit a Recommender | PATCH | `/recommenders/{{recommenderId}}` | `conn_mod_def::GKHZ-hJxJHI::e87uanzYReu629ht31942A` |
| Force Update a Recommender | POST | `/recommenders/{{recommenderId}}/force_update` | `conn_mod_def::GKHZ-qU5GhA::nzmGkOBbSle6f9ChopBQPA` |
| Unarchive a Recommender | POST | `/recommenders/{{recommenderId}}/unarchive` | `conn_mod_def::GKHZ-sjA4zo::oY6KKtx8T5SJPK4ViVbuMw` |

### Streams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Stream's Event Count Analysis | GET | `/streams/{{streamIdOrName}}/analysis` | `conn_mod_def::GKHZ_eNn61Y::XbRIvv9zQhqB8QC68X1LDw` |
| List Streams | GET | `/streams` | `conn_mod_def::GKHZ_cLEIPc::QSA9ceKLTsydDzNjsZsqwQ` |
| Retrieve a Stream | GET | `/streams/{{streamIdOrName}}` | `conn_mod_def::GKHZ_cUI37Y::ZbDtXOYYSKWD70290Q5mkA` |
| Archive a Stream | POST | `/streams/{{streamIdOrName}}/archive` | `conn_mod_def::GKHZ_RfZhpw::MomK_3V1R7yuA6FLY7yxvQ` |
| Create a Stream | POST | `/streams/{{streamName}}` | `conn_mod_def::GKHZ_Tj7Ewc::pERTOAp7TC-alq3GhKuv_Q` |
| Delete a Stream | DELETE | `/streams/{{streamIdOrName}}` | `conn_mod_def::GKHZ_eHxoMY::Op97uo7ESMC2ZoingFDF6A` |
| Trigger a Rerun for a Stream | POST | `/streams/{{streamIdOrName}}/force_update` | `conn_mod_def::GKHZ_cEiwBo::a1huy_u6TjucikniH_6FyA` |
| Unarchive a Stream | POST | `/streams/{{streamIdOrName}}/unarchive` | `conn_mod_def::GKHZ_srQsyM::an3tiBaTSsuQfAvnwM93Rg` |
| Update a Stream | PATCH | `/streams/{{streamIdOrName}}` | `conn_mod_def::GKHZ_tANugU::7KaQhbLxQISgjTwnynZpkQ` |

### Cohorts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cohorts | GET | `/cohorts` | `conn_mod_def::GKHZ8W8GY9s::dBvUeE7CTjC4ahpUzt4PlA` |
| Retrieve a Cohort | GET | `/cohorts/{{cohortId}}` | `conn_mod_def::GKHZ8XD5SW0::JLKdykDIRbyHuvR1G9_iwA` |

6 more Cohorts actions are available through search.

This lists 90 of 161 actions. For anything not here, call `search_one_platform_actions` with platform `faraday`. The full catalog is at https://www.withone.ai/knowledge/faraday.

## When a call fails

The error comes from Faraday, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/faraday

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
