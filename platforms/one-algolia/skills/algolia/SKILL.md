---
name: algolia
description: Algolia is a search and discovery platform that provides APIs for indexing content, delivering fast relevance-based search, filtering, and recommendations, allowing developers and product teams to build responsive search experiences across websites, apps, and eCommerce products. Read and write Algolia data through One: tasks, sources, indexes, transformations, clientapikey, apikeys and more, 189 actions with real parameter documentation. Use whenever the user asks to look something up in Algolia, create or update a record there, or build code against the Algolia API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: algolia
  generated-from: one-knowledge-base
---

# Algolia through One

Algolia is a search and discovery platform that provides APIs for indexing content, delivering fast relevance-based search, filtering, and recommendations, allowing developers and product teams to build responsive search experiences across websites, apps, and eCommerce products.

One exposes Algolia through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `algolia` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Algolia is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Algolia account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tasks | GET | `/2/tasks` | `conn_mod_def::GMit7thqQxA::JQO1n0VpSRSfR-RjE5pCTg` |
| Retrieve a Task | GET | `/2/tasks/{{taskId}}` | `conn_mod_def::GMit8G8sBdA::Qtq7LCkwTQGKLBuwCalGWQ` |
| Wait for Task Completion | GET | `/waitForTask` | `conn_mod_def::GMiuAHj7xqg::fYGdg5MNSS-EtmOjaurJ-A` |
| Create a Task | POST | `/2/tasks` | `conn_mod_def::GMit7LQfRUg::vEwXkE2FS7GH-PF4vhLmzA` |
| Delete a Task | DELETE | `/2/tasks/{{taskId}}` | `conn_mod_def::GMit7ZlcOPA::N1uqgUZQQQO5Zxe6A0lEVg` |
| Disable a Task | PUT | `/2/tasks/{{taskId}}/disable` | `conn_mod_def::GMit7gMEvtA::fcxTSCf3QDaO8Phx3GFUwQ` |
| Enable a Task | PUT | `/2/tasks/{{taskId}}/enable` | `conn_mod_def::GMit7iUSD6A::zYcbKa4MQs6-8dIKPsyT_A` |
| Fully Update a Task | PUT | `/2/tasks/{{taskId}}` | `conn_mod_def::GMit7hFD-jg::4VRwhrtWQrC63Vp2uAHifQ` |
| Partially Update a Task | PATCH | `/2/tasks/{{taskId}}` | `conn_mod_def::GMit78BXlWA::G4wvJ5uTRiS-y_uA56fZ8A` |
| Push Records by Task ID | POST | `/2/tasks/{{taskId}}/push` | `conn_mod_def::GMit7-aRjGg::n8OuXCr9SLaLDf_3Z9I7Og` |
| Run a Task | POST | `/2/tasks/{{taskId}}/run` | `conn_mod_def::GMit8PfhjQA::-zlpCyY-RGCw0vrk_kVNWA` |
| Search for Tasks | POST | `/2/tasks/search` | `conn_mod_def::GMit8a3V-tg::cZXrN3FWR-a4Et_yATl8eA` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sources | GET | `/1/sources` | `conn_mod_def::GMit7t3RRdg::O-YMzTk_TxOkPyYnIwZcqg` |
| Retrieve a Source | GET | `/1/sources/{{sourceId}}` | `conn_mod_def::GMit8ID0hzg::n81B-gflRC215tsfKnU5bw` |
| Add a Source | POST | `/1/security/sources/append` | `conn_mod_def::GMit9_I4Lag::iA_pJuNuSbqjFnAtbdSTlQ` |
| Create a Source | POST | `/1/sources` | `conn_mod_def::GMit7L8me3g::G9aAd6j4TYeTEmuiwVdY5g` |
| Delete a Source | DELETE | `/1/sources/{{sourceId}}` | `conn_mod_def::GMit7TK7D0A::q-uePCG2Rm6IOqR6aYwzQg` |
| Delete a Source | DELETE | `/1/security/sources/{{source}}` | `conn_mod_def::GMit-yJ2HCA::OoO70YcuT0KkBs6kUQRc7w` |
| Run a Source | POST | `/1/sources/{{sourceId}}/run` | `conn_mod_def::GMit8QyXz-g::pdfAnl-3TPOpQQ3Jo5bsRw` |
| Search for Sources | POST | `/1/sources/search` | `conn_mod_def::GMit8bMW2-g::YFOGvi89T1qLORv8GzUziQ` |
| Trigger Discover for a Source | POST | `/1/sources/{{sourceId}}/discover` | `conn_mod_def::GMit8ihIUug::mxI72BvfTv-v3XRfP_3-Ig` |
| Update a Source | PATCH | `/1/sources/{{sourceId}}` | `conn_mod_def::GMit8rarxTg::Y0UYhhI7T4mQ9JGuQXnEVw` |
| Validate a Source Payload | POST | `/1/sources/validate` | `conn_mod_def::GMit82PbrWg::-ql1tsD1S_-2SghHn0KNUw` |
| Validate a Source Update | POST | `/1/sources/{{sourceId}}/validate` | `conn_mod_def::GMit81J216A::7Gxp4vRlStWdfnzUItlmrA` |

### Indexes

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a New Record to an Index | POST | `/1/indexes/{{indexName}}` | `conn_mod_def::GMit99aMRTA::Te-KO9gZQ9erN-XiTKlWfg` |
| Batch Indexing Operations on an Index | POST | `/1/indexes/{{indexName}}/batch` | `conn_mod_def::GMit-GOxT8g::4k4GIYhxTdKb4UxNLC-uqw` |
| Batch Using Indexes | POST | `/1/indexes/*/batch` | `conn_mod_def::GMit-HURlZg::L2QCEgd5RGuUeegdR_p8qw` |
| Browse Records in an Index | POST | `/1/indexes/{{indexName}}/browse` | `conn_mod_def::GMit-Gpxfdg::k-gqXNH-Rq-DH0dN6AmwTw` |
| Clear All Records from an Index | POST | `/1/indexes/{{indexName}}/clear` | `conn_mod_def::GMit-yJKDsg::57mQhEwZSxqfyX1geqvrFQ` |
| Copy or Move an Index | POST | `/1/indexes/{{indexName}}/operation` | `conn_mod_def::GMit-QKHnpA::1EtC1pmySZaoS-YRs10Pgw` |
| Delete a Record from an Index | DELETE | `/1/indexes/{{indexName}}/{{objectID}}` | `conn_mod_def::GMit-nCh6NA::5sl9ZRZiSOCbGnCQvnGwPA` |
| Delete an Index | DELETE | `/1/indexes/{{indexName}}` | `conn_mod_def::GMit-5IHBeA::z74M4f_0Ti2vS1P2TlDw0A` |
| Delete Records Matching a Filter from an Index | POST | `/1/indexes/{{indexName}}/deleteByQuery` | `conn_mod_def::GMit-957o7g::6Wgm5tFdRUuTZwUUK3UdOQ` |
| Partial Update an Object in an Index | POST | `/1/indexes/{{indexName}}/{{objectID}}/partial` | `conn_mod_def::GMit9_RrOkg::1-_UBrN3QhaCE-EJzTBv2A` |
| Update Index Settings | PUT | `/1/indexes/{{indexName}}/settings` | `conn_mod_def::GMiuAHp1sMA::749NfUICRwmbIx9smERUgg` |

### Transformations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transformation by ID | GET | `/1/transformations/{{transformationId}}` | `conn_mod_def::GMit8QoRfuA::aHo9Qll6RIG9HfyvhFD3dQ` |
| List Transformations | GET | `/1/transformations` | `conn_mod_def::GMit77W9A7A::lapjZrCLQmi2iuq5aOuUFg` |
| Create a Transformation | POST | `/1/transformations` | `conn_mod_def::GMit7LIb57A::hL70NlKcSQKijn_FDQ1htQ` |
| Delete a Transformation | DELETE | `/1/transformations/{{transformationId}}` | `conn_mod_def::GMit7VEmgTA::d8irSbTiR_6Tt1XRreSoVQ` |
| Search for Transformations | POST | `/1/transformations/search` | `conn_mod_def::GMit8bOFPbg::kVRTxHUlQ6WENQ9VDpuXQw` |
| Try a Transformation | POST | `/1/transformations/try` | `conn_mod_def::GMit8q9sSVA::OSoreW_2QjuG7je6f0Ellw` |
| Try a Transformation Before Updating It | POST | `/1/transformations/{{transformationId}}/try` | `conn_mod_def::GMit8rgs9pg::8dQ7BdtAQ6KZTs5lPJdn7A` |
| Update a Transformation | PUT | `/1/transformations/{{transformationId}}` | `conn_mod_def::GMit8tIJ9yg::los_baEMThKZUd0Sm5BXHA` |

### ClientApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit6LN8R3A::_reekCsFTfyMubvpDiGdoQ` |
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit7L3os-g::L9Auro6WRr2VAAMwDZWOlg` |
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit8jab0dA::Ks5vJzsqRLyzPFTn5l2mnQ` |
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit9LhUH6A::EbxvTWIdTnyivF-2yRgHsQ` |
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit9guk9hA::lijzq7ltR22KOaR-WYp8zw` |
| Set Client Api Key | GET | `/setClientApiKey` | `conn_mod_def::GMit_-ruohg::GR1GeFlFQOeFKveiw_kaqw` |
| Set Client API Key | GET | `/setClientApiKey` | `conn_mod_def::GMit91EGKBg::FYD241NgSTiHslACZ2G3CQ` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys | GET | `/1/keys` | `conn_mod_def::GMit_FKriTg::m_9ETn3rQP2rl9uUTXtLLw` |
| Retrieve API Key Permissions | GET | `/1/keys/{{key}}` | `conn_mod_def::GMit_ZVmjfg::apMqOSVPTTi8HTjUocwPyg` |
| Wait for an API Key Operation | GET | `/waitForApiKey` | `conn_mod_def::GMiuAHh4sBA::5pfMyYZkRTaVsLwYaLi0Wg` |
| Create an API Key | POST | `/1/keys` | `conn_mod_def::GMit-Pzrcmg::EWQhoXXyTQuuzWhY1XyDcQ` |
| Delete an API Key | DELETE | `/1/keys/{{key}}` | `conn_mod_def::GMit-5OZZbA::m32e7Pr5TuWNqGrwlSFTiA` |
| Restore an API Key | POST | `/1/keys/{{key}}/restore` | `conn_mod_def::GMit_Whrepg::UlimaGXJQde_DHsRhBPA4g` |
| Update an API Key | PUT | `/1/keys/{{key}}` | `conn_mod_def::GMiuAAWy8YA::Q_tipTiZQSe3icqIRxKs5w` |

### Destinations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Destinations | GET | `/1/destinations` | `conn_mod_def::GMit7tQu07A::v0aSJvaHSy-8uEc9vL7yzA` |
| Retrieve a Destination | GET | `/1/destinations/{{destinationId}}` | `conn_mod_def::GMit8G8rkKA::iZ9iw9JFQOqQIiMUU45SOQ` |
| Create a Destination | POST | `/1/destinations` | `conn_mod_def::GMit7MY3fPA::wyZOENoxT9-63B3Dea5mQA` |
| Delete a Destination | DELETE | `/1/destinations/{{destinationId}}` | `conn_mod_def::GMit7UKTq3A::vVHgESpNQjW9fEYsxtXwTQ` |
| Search for Destinations | POST | `/1/destinations/search` | `conn_mod_def::GMit8ZNpVNg::dmQ-zrX1RQa_ZX9BZjt68Q` |
| Update a Destination | PATCH | `/1/destinations/{{destinationId}}` | `conn_mod_def::GMit8t-DTmg::28zRCxpyTj-kihy2gL8jqQ` |

### AlgoliaRestApi

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a GET Request to the Algolia REST API | GET | `/{{path}}` | `conn_mod_def::GMit8bauHAg::XSaY3oS6RpWXzGZYGWwsTw` |
| Send a GET Request to the Algolia REST API | GET | `/{{path}}` | `conn_mod_def::GMit_20QmkA::Qy1WhkPUQbWn0uZwmLsJGQ` |
| Send a Custom POST Request to the Algolia REST API | POST | `/{{path}}` | `conn_mod_def::GMit8jobJPA::aWoMBkr_R8-8CyxEw_sOFA` |
| Send a Custom POST Request to the Algolia REST API | POST | `/{{path}}` | `conn_mod_def::GMit9V5QKJA::HWU5M-qPRD6oVR0nos4iCA` |
| Send Custom PUT Requests to the Algolia REST API | PUT | `/{{path}}` | `conn_mod_def::GMit8kFMUMg::fmMne76SR4CJj75IxYiB7w` |
| Send Requests to the Algolia REST API | PUT | `/{{path}}` | `conn_mod_def::GMit92ORl9g::2O5SojudRBuPMV2iIAbliA` |

### Rules

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Rule from an Index | GET | `/1/indexes/{{indexName}}/rules/{{objectID}}` | `conn_mod_def::GMit_Wx8lgg::h60OmUY2RsOztHCcX_Iq-w` |
| Clear Rules for an Index | POST | `/1/indexes/{{indexName}}/rules/clear` | `conn_mod_def::GMit-ybLqwA::IP3uqj0_QEqZ-zr10RDiAg` |
| Create or Replace a Rule for an Index | PUT | `/1/indexes/{{indexName}}/rules/{{objectID}}` | `conn_mod_def::GMit-SyarTA::_2mqHrYBRfOX4k5vivPrag` |
| Create or Update Rules for an Index | POST | `/1/indexes/{{indexName}}/rules/batch` | `conn_mod_def::GMit-pqwnig::WwrGQ8GBScyQhaRQUdFu1A` |
| Delete a Rule from an Index | DELETE | `/1/indexes/{{indexName}}/rules/{{objectId}}` | `conn_mod_def::GMit-yJoCpA::4MLFObpwQYK8tRzEuf6RyA` |
| Search for Rules in an Index | POST | `/1/indexes/{{indexName}}/rules/search` | `conn_mod_def::GMit_2HTAjA::Ym-W3841TGWJpQxhGAlytw` |

### Synonyms

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Synonym from an Index | GET | `/1/indexes/{{indexName}}/synonyms/{{objectId}}` | `conn_mod_def::GMit_aO6ASg::w5SmFtyaS-22vLfSHBU86w` |
| Clear Synonyms for an Index | POST | `/1/indexes/{{indexName}}/synonyms/clear` | `conn_mod_def::GMit-5tNkLA::EBFicFH8R1GVixQ2WrOUjA` |
| Create or Replace a Synonym for an Index | PUT | `/1/indexes/{{indexName}}/synonyms/{{objectId}}` | `conn_mod_def::GMit-l8WZLA::C96SZBR0Q4KpoTD-PeZ-aA` |
| Create or Replace Synonyms for an Index | POST | `/1/indexes/{{indexName}}/synonyms/batch` | `conn_mod_def::GMit-mz1frg::sWJR9tcKQWG1u8MRvgIurQ` |
| Delete a Synonym from an Index | DELETE | `/1/indexes/{{indexName}}/synonyms/{{objectId}}` | `conn_mod_def::GMit-yHTksA::XHykv3ENQp-PaxrUezrGRA` |
| Search for Synonyms in an Index | POST | `/1/indexes/{{indexName}}/synonyms/search` | `conn_mod_def::GMit_1vrdSg::wYicaWDSTpGBTiLlGUDgFw` |

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Browse Objects Using Algolia | GET | `/browseObjects` | `conn_mod_def::GMit_FK0JFg::64BOfIG0R02x40KsNP_GHg` |
| Save Objects in an Index | GET | `/saveObjects` | `conn_mod_def::GMit_s4ix_A::vcwnZsIgSfevxHLymCoDvA` |
| Save Objects With Transformation | GET | `/saveObjectsWithTransformation` | `conn_mod_def::GMit_iyOUyg::5PwnwXm7RlSV36RW2x_tjw` |
| Delete Objects | POST | `/deleteObjects` | `conn_mod_def::GMit-7wu8Fg::5mDWH298R22Qtauru6Eoxg` |
| Partial Update Objects | POST | `/partialUpdateObjects` | `conn_mod_def::GMit_Pvbo6g::npr5i7ovT1SzYlOOtHRXcg` |
| Partial Update Objects With Transformation | POST | `/partialUpdateObjectsWithTransformation` | `conn_mod_def::GMit_uWy5pg::PN_L3De9RKiKynR2lrw6Yw` |

### AbTests

| Action | Method | Path | Action id |
|---|---|---|---|
| List All A/B Tests | GET | `/2/abtests` | `conn_mod_def::GMit502aJUA::0XmATDTHQJa81iO05p56Kg` |
| Retrieve A/B Test Details | GET | `/2/abtests/{{id}}` | `conn_mod_def::GMit5zPyeQg::OjfKCVyqSWiw31daZ-zyXw` |
| Create an A/B Test | POST | `/2/abtests` | `conn_mod_def::GMit5yzcuLg::nu99R-2EQMqV0DjyMTVP1A` |

2 more AbTests actions are available through search.

This lists 90 of 189 actions. For anything not here, call `search_one_platform_actions` with platform `algolia`. The full catalog is at https://www.withone.ai/knowledge/algolia.

## When a call fails

The error comes from Algolia, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/algolia

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
