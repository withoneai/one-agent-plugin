---
name: griptape
description: Griptape is an AI application framework that provides tools, workflows, and abstractions for building and orchestrating LLM-powered agents and data-aware applications, allowing developers to integrate models, external systems, and memory into structured, production-oriented automation. Read and write Griptape data through One: structureruns, functions, structures, retrievers, tools, apikeys and more, 188 actions with real parameter documentation. Use whenever the user asks to look something up in Griptape, create or update a record there, or build code against the Griptape API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: griptape
  generated-from: one-knowledge-base
---

# Griptape through One

Griptape is an AI application framework that provides tools, workflows, and abstractions for building and orchestrating LLM-powered agents and data-aware applications, allowing developers to integrate models, external systems, and memory into structured, production-oriented automation.

One exposes Griptape through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `griptape` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Griptape is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Griptape account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### StructureRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Structure Run | GET | `/structure-runs/{{structureRunId}}` | `conn_mod_def::GKp5ZI0oSMA::UMS8hNMSQX6JLLn2fvnHlA` |
| Get a Structure Run's Events SSE Stream | GET | `/structure-runs/{{structureRunId}}/events/stream` | `conn_mod_def::GKp5TvcQpHg::BGE_LK1oRiuDdSDarMzb8Q` |
| List a Structure Run's Logs | GET | `/structure-runs/{{structureRunId}}/logs` | `conn_mod_def::GKp5ZVXqMJg::NCm8MoS9TDu1fkyrPBTx1Q` |
| List a Structure's Runs | GET | `/structures/{{structureId}}/runs` | `conn_mod_def::GKp5ZR6Blsg::tg2O_GjwT6qKQ6cIybeDXQ` |
| Cancel a Structure Run | POST | `/structure-runs/{{structureRunId}}/cancel` | `conn_mod_def::GKp5ZIaq-8g::8UVZdbbES9q43aGDbSJelA` |
| Create a Structure Run | POST | `/structures/{{structureId}}/runs` | `conn_mod_def::GKp5ZBqYmgg::TjgJUNTjQ3uBiMwG7GwMbA` |
| Create Events for a Structure Run | POST | `/structure-runs/{{structureRunId}}/events` | `conn_mod_def::GKp5TcYTILg::Gb8-kVC8RB-d2T8MJOAnJw` |

### Functions

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute a Function by ID | GET | `/functions/{{functionId}}/execute` | `conn_mod_def::GKp5T4GBLdA::Yz5k2YURQ_2y21LRtyizZg` |
| Get a Function | GET | `/functions/{{functionId}}` | `conn_mod_def::GKp5UVLGM_g::FHocfeXpSteHyqc1JHk5zQ` |
| List Functions | GET | `/functions` | `conn_mod_def::GKp5Ud0cikg::cQuXg7q6TR2cSlhJIkH1vw` |
| Create Function | POST | `/api/functions` | `conn_mod_def::GKp5UUsx4VA::MB_KToFXRN6br7y4gWn3kA` |
| Delete a Function | DELETE | `/functions/{{functionId}}` | `conn_mod_def::GKp5UUdxL9A::o5mch2WVR8y5eDVSjkSwhg` |
| Execute a Function | POST | `/functions/{{functionId}}/execute` | `conn_mod_def::GKp5T45w5pg::dmPa5nCzRVaFcDNlWhpTRw` |
| Update a Function | PATCH | `/functions/{{functionId}}` | `conn_mod_def::GKp5UdeZArg::6l_Yw9IpR4S3L6NjpEXuEg` |

### Structures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Structure | GET | `/structures/{{structureId}}` | `conn_mod_def::GKp5ZTrci8A::mpyse8tgQreZZeZU8UF0kQ` |
| Invoke a Structure Webhook | GET | `/structures/{{structureId}}/webhook` | `conn_mod_def::GKp5Zi95ytA::CmqSvyotSDe0UXSy8voyYw` |
| List Structures | GET | `/api/structures` | `conn_mod_def::GKp5ZmYXvbg::geuXXokdT0SFnirRWbnLfQ` |
| Create Structure | POST | `/api/structures` | `conn_mod_def::GKp5ZRaacQA::zyJr4GIDQAOfPN6LG5Oufg` |
| Delete a Structure | DELETE | `/structures/{{structureId}}` | `conn_mod_def::GKp5ZXPwHkA::8uBXcaIZRhSovz6lZKA1hw` |
| Invoke a Structure Webhook | POST | `/structures/{{structureId}}/webhook` | `conn_mod_def::GKp5ZqNPijA::aqRke7GSTq2NswfLUzuLjw` |
| Update a Structure | PATCH | `/structures/{{structureId}}` | `conn_mod_def::GKp5ZjZA-dg::S7S4ejowSeKerjFYrWmgfQ` |

### Retrievers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Retriever | GET | `/retrievers/{{retrieverId}}` | `conn_mod_def::GKp5YI_zhwg::VEj8o9bhTQGtDOgz0DN7JQ` |
| List Retrievers | GET | `/api/retrievers` | `conn_mod_def::GKp5YPQQ89g::n7pjn9ZuSrmEXXv-tK5P0g` |
| Create Retriever | POST | `/api/retrievers` | `conn_mod_def::GKp5YIvz7_g::vDapi3NGSRajEubJXBVGZg` |
| Delete a Retriever | DELETE | `/retrievers/{{retrieverId}}` | `conn_mod_def::GKp5YHwf82A::nkcFLc0ETBGv3wjThDQM2Q` |
| Query a Retriever | POST | `/retrievers/{{retrieverId}}/query` | `conn_mod_def::GKp5YNh6TMg::8wXZ8hHUSSydBv37ZVA-Vg` |
| Update a Retriever | PATCH | `/retrievers/{{retrieverId}}` | `conn_mod_def::GKp5YaTWBQA::xIkByBjmQBW_qTn_V0CjJQ` |

### Tools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tool | GET | `/tools/{{toolId}}` | `conn_mod_def::GKp5aPb68vg::zPiHKlsqS4CEbZcPIZkVeg` |
| Get a Tool's OpenAPI Run | GET | `/tools/{{toolId}}/openapi` | `conn_mod_def::GKp5aGa0Gqg::ukELJzmUSUaW6U-xr4iCTA` |
| List Tools | GET | `/api/tools` | `conn_mod_def::GKp5aRlXUhA::jIBB2CSPTQCG1ivWmAmChQ` |
| Create Tool | POST | `/api/tools` | `conn_mod_def::GKp5aPMb69g::ua-fwVd_RF6n-Kpe4pvKCw` |
| Delete a Tool | DELETE | `/tools/{{toolId}}` | `conn_mod_def::GKp5aPMjeXA::cPYc29m3R2i8vjV54vt5ng` |
| Update a Tool | PATCH | `/tools/{{toolId}}` | `conn_mod_def::GKp5aVb6U9g::KZV0X6eJTdWKkWvZ5INlIg` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an API Key | GET | `/api-keys/{{apiKeyId}}` | `conn_mod_def::GKp5RBO_a3g::RTt7qA5-QjW50ohqI8TNUQ` |
| List a User's API Keys | GET | `/users/{{userId}}/api-keys` | `conn_mod_def::GKp5RF_mxBA::JIQ3heYiRQK0XDwCE0YQ3A` |
| List an Organization's API Keys | GET | `/organizations/{{organizationId}}/api-keys` | `conn_mod_def::GKp5RQgHyBA::dKZOZrX5RUuGDCLSghtEuA` |
| Delete API Key | DELETE | `/api/api-keys/{{apiKeyId}}` | `conn_mod_def::GKp5RHh1P-g::mDT9BMQnRV64CoDHXCNdWA` |
| Update an API Key | PATCH | `/api/api-keys/{{apiKeyId}}` | `conn_mod_def::GKp5RQWCSfg::KQ62v6pqQjGjJJFpaT8y1g` |

### AssistantRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Assistant Run | GET | `/assistant-runs/{{assistantRunId}}` | `conn_mod_def::GKp5RfOT97g::nbXs4baLSjKGYUWkuk1rSw` |
| Get an Assistant Run's Events Stream | GET | `/assistant-runs/{{assistantRunId}}/events/stream` | `conn_mod_def::GKp5TaTp2tA::Uj-nLoLARN-EwwGIOjZ3dw` |
| List an Assistant's Runs | GET | `/assistants/{{assistantId}}/runs` | `conn_mod_def::GKp5RyAiJvA::U68IliYJRe2gJSi-on83lQ` |
| Cancel an Assistant Run | POST | `/assistant-runs/{{assistantRunId}}/cancel` | `conn_mod_def::GKp5RfmimKg::mPpgHJ6rSbmdfJJ2hqA4EQ` |
| Create an Assistant Run | POST | `/assistants/{{assistantId}}/runs` | `conn_mod_def::GKp5RfnCUcA::rrrGDnBPTaqFKl1taN46ew` |

### Assistants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Assistant | GET | `/assistants/{{assistantId}}` | `conn_mod_def::GKp5Rxdbbsg::fHKmD9ixQXSFafu2n503sA` |
| List Assistants | GET | `/api/assistants` | `conn_mod_def::GKp5RxxDpKA::ur66D4aRRc2Dyn_1KuFFLQ` |
| Create Assistant | POST | `/api/assistants` | `conn_mod_def::GKp5RxDROSA::5F3KaaFVTjiQd3n47kJ-HQ` |
| Delete an Assistant | DELETE | `/assistants/{{assistantId}}` | `conn_mod_def::GKp5RxCoSKg::0Qdm4hW8SCGBTHxcE6xnBg` |
| Update an Assistant | PATCH | `/assistants/{{assistantId}}` | `conn_mod_def::GKp5R8Tyx3A::DrSU2wkBR1GRAhzQHc327Q` |

### Buckets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bucket | GET | `/buckets/{{bucketId}}` | `conn_mod_def::GKp5SIOK1RA::eTuHvK2RTI6EXdcBom0Heg` |
| List Buckets | GET | `/api/buckets` | `conn_mod_def::GKp5SFzxm1A::2V-JSgntS0yLwzVYjr_kXw` |
| Create Bucket | POST | `/api/buckets` | `conn_mod_def::GKp5R6UI14g::Ss2sBXI-Q1WyjliPag_wzg` |
| Delete Bucket | DELETE | `/buckets/{{bucketId}}` | `conn_mod_def::GKp5R6ppQtA::M8ezr7S0S_yxXCz2_YhBJQ` |
| Update a Bucket | PATCH | `/buckets/{{bucketId}}` | `conn_mod_def::GKp5SFs9V7g::hYis63D_ScOZPsPP8jCQwg` |

### Integrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Integration | GET | `/integrations/{{integrationId}}` | `conn_mod_def::GKp5UncwPDg::lWwZRmvpS56tDEe0-dSOOg` |
| List Integrations | GET | `/api/integrations` | `conn_mod_def::GKp5U9mBX9g::pBX9Pgi4RW-WzbXGiAukAw` |
| Create Integration | POST | `/api/integrations` | `conn_mod_def::GKp5UuxK50g::w_AYOQMkThayFwQVSyj1YA` |
| Delete an Integration | DELETE | `/integrations/{{integrationId}}` | `conn_mod_def::GKp5UtiE_6A::LkAkq4RfRsS3F3mEMZBqvQ` |
| Update an Integration | PATCH | `/integrations/{{integrationId}}` | `conn_mod_def::GKp5U6N22yA::CJ0iKyVYQAKWq3GPDBYXLw` |

### Libraries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Library | GET | `/libraries/{{libraryId}}` | `conn_mod_def::GKp5WFURQNg::iU0VGVVmTmOokzd3HCcX7Q` |
| List Libraries | GET | `/api/libraries` | `conn_mod_def::GKp5WMMstSA::6edgcC1nTtiR-CuVCNR7ZQ` |
| Create Library | POST | `/api/libraries` | `conn_mod_def::GKp5V9ZtTQg::nnp1eWNkTi2rjX1-FhV6cA` |
| Delete a Library | DELETE | `/libraries/{{libraryId}}` | `conn_mod_def::GKp5V3-Vy2g::FuOUz7lJQdCOY5jOsYWL8g` |
| Update a Library | PATCH | `/libraries/{{libraryId}}` | `conn_mod_def::GKp5WMPh1FA::hN_02G-HQSKu46B6pQbhIw` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Model Configuration | GET | `/models/{{modelConfigId}}` | `conn_mod_def::GKp5WjdYsXg::VLMDAEbXRLG-qJnP4IHnWw` |
| List Models | GET | `/api/models` | `conn_mod_def::GKp5XfcAKAA::j6xbLRXkQImpdAdcr17j1A` |
| Create Model | POST | `/api/models` | `conn_mod_def::GKp5WU9P1GA::O0n7HUJQQzGJ5weVx_DMnA` |
| Delete Model | DELETE | `/models/{{modelConfigId}}` | `conn_mod_def::GKp5Wm4Dw8A::F3dhDPOXT9SJ3Ay2kv9IMw` |
| Update a Model | PATCH | `/models/{{modelConfigId}}` | `conn_mod_def::GKp5XjlxxPA::j_OCXvAVS3KFnpc0WwhVNA` |

### AuthConfigs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Auth Config | GET | `/models/auth-configs/{{authConfigId}}` | `conn_mod_def::GKp5WjybtWg::L2j7RKtZSLC-OFIhI8XOeQ` |
| List Auth Configs | GET | `/api/models/auth-configs` | `conn_mod_def::GKp5WrdDRng::vU-Vl_hmSrG5BNrZD9Zg1Q` |
| Create Auth Config | POST | `/api/models/auth-configs` | `conn_mod_def::GKp5WViip7g::C2KoLTo2R_KAwBOGNdkQsg` |
| Delete an Auth Config | DELETE | `/models/auth-configs/{{authConfigId}}` | `conn_mod_def::GKp5XVCYo3A::6Vk7Kbt_QbeUWY23QoNbyA` |
| Update an Auth Config | PATCH | `/models/auth-configs/{{authConfigId}}` | `conn_mod_def::GKp5XgMMSxA::OJAcM7A_REOhy-FYYbnFHg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization | GET | `/organizations/{{organizationId}}` | `conn_mod_def::GKp5Xrl8PgA::LWpR8itNT7e1GJ5G0-21FQ` |
| List Organizations | GET | `/api/organizations` | `conn_mod_def::GKp5Xrl1aAA::zSxB-cmGR6y4t4HUiT_q3Q` |
| Create Organization | POST | `/api/organizations` | `conn_mod_def::GKp5XjcrvPA::4CZF_Km4Roq_MUJq0eD2NQ` |
| Delete an Organization | DELETE | `/organizations/{{organizationId}}` | `conn_mod_def::GKp5Xe8ki1g::w53aQaGhRQqA9Vt9Sg4LgA` |
| Update an Organization | PATCH | `/organizations/{{organizationId}}` | `conn_mod_def::GKp5XudhETg::BMm8gg0NTEObpopS5fHBSA` |

### RetrieverComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Retriever Component | GET | `/retriever-components/{{retrieverComponentId}}` | `conn_mod_def::GKp5X8-8eyA::i9FcX9mIRzSJikzQx9EB1g` |
| List Retriever Components | GET | `/api/retriever-components` | `conn_mod_def::GKp5X6huNbg::qTS3E40yTSeLTbXTRcSjEw` |
| Create Retriever Component | POST | `/api/retriever-components` | `conn_mod_def::GKp5YAiAT5A::iaqkWxypTBmIP0qQVzCmRg` |
| Delete a Retriever Component | DELETE | `/retriever-components/{{retrieverComponentId}}` | `conn_mod_def::GKp5X8fUgmg::X0EsCxN3RF-u9arWpbYVPw` |
| Update a Retriever Component | PATCH | `/retriever-components/{{retrieverComponentId}}` | `conn_mod_def::GKp5X3tpStA::kkWLFb__RRazC2j01kS04Q` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rule | GET | `/rules/{{ruleId}}` | `conn_mod_def::GKp5YXAO-OA::xqLWJHOySXOrYaBFubsr7Q` |
| List Rules | GET | `/api/rules` | `conn_mod_def::GKp5YZgJoxg::sjBGn-gVTgCGM5sm_RmLpA` |
| Create Rule | POST | `/api/rules` | `conn_mod_def::GKp5YZhRlRA::XiQ7n4RDRfirjdImKTcjkA` |
| Delete a Rule | DELETE | `/rules/{{ruleId}}` | `conn_mod_def::GKp5YXo0HBA::n19Y0-ppR-6e7YWdb29oRQ` |
| Update a Rule | PATCH | `/rules/{{ruleId}}` | `conn_mod_def::GKp5YmImSJA::a3Y4ikt_TOmkvAWBCbNT7g` |

### Rulesets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Ruleset | GET | `/rulesets/{{rulesetId}}` | `conn_mod_def::GKp5Yix7Ekg::E2j6TR1wR0io9r3UgoQ8nw` |
| List Rulesets | GET | `/api/rulesets` | `conn_mod_def::GKp5YkZqI9g::p-gTR2uFRCuNqCHJJh0O5Q` |

3 more Rulesets actions are available through search.

This lists 90 of 188 actions. For anything not here, call `search_one_platform_actions` with platform `griptape`. The full catalog is at https://www.withone.ai/knowledge/griptape.

## When a call fails

The error comes from Griptape, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/griptape

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
