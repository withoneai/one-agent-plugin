---
name: vapi
description: Vapi is a developer platform for building, deploying, and scaling voice AI agents through APIs, enabling teams to integrate real-time phone calling, speech processing, and conversational workflows into applications, customer support systems, and automated outbound or inbound call experiences. Read and write Vapi data through One: campaign, call, structuredoutput, assistant, eval, squad and more, 91 actions with real parameter documentation. Use whenever the user asks to look something up in Vapi, create or update a record there, or build code against the Vapi API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: vapi
  generated-from: one-knowledge-base
---

# Vapi through One

Vapi is a developer platform for building, deploying, and scaling voice AI agents through APIs, enabling teams to integrate real-time phone calling, speech processing, and conversational workflows into applications, customer support systems, and automated outbound or inbound call experiences.

One exposes Vapi through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `vapi` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Vapi is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Vapi account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Campaign

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign | GET | `/campaign/{{id}}` | `conn_mod_def::GMPx0sFMABA::my7O2BZMSPyMRmEQjO1Xgg` |
| Get a Campaign | GET | `/v2/campaign/{{id}}` | `conn_mod_def::GMPx0sFVsIg::hlq_ItPZT_2_o13WcTzfhg` |
| List Campaigns | GET | `/campaign` | `conn_mod_def::GMPx0sKQnaA::KdQu_Mt_RNaL1yIH5mKmVA` |
| Create Campaign | POST | `/campaign` | `conn_mod_def::GMPx0jYZ3Dg::gSczvV1wSyWJoaTOe76Hdw` |
| Create Campaign Using V2 | POST | `/v2/campaign` | `conn_mod_def::GMPxzwVfgjA::o-ahGnf9QNCOUSKXU-79Aw` |
| Delete a Campaign | DELETE | `/campaign/{{id}}` | `conn_mod_def::GMPx0t6PwrA::EOElAhcaRbaYha88b7uIjA` |
| Delete a Campaign | DELETE | `/v2/campaign/{{id}}` | `conn_mod_def::GMPx0p6XsUA::5x9YDFcDS5qxjZKhg0CpWQ` |
| Update a Campaign | PATCH | `/campaign/{{id}}` | `conn_mod_def::GMPx003rX-g::j7lmwGB8R96W6WINo3gqbA` |
| Update a Campaign | PATCH | `/v2/campaign/{{id}}` | `conn_mod_def::GMPx007Iv8g::FvxzyO_eSMO-LmID93Rn7g` |

### Call

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Call's Mono Recording | GET | `/call/{{id}}/mono-recording` | `conn_mod_def::GMPxzopGkbA::m11KLQ6rTXasFiG7uNI9-A` |
| Download Call Packet Capture (pcap) | GET | `/call/{{id}}/pcap` | `conn_mod_def::GMPxznYUilg::gTzbVz1FQICH4m0-uyqkEA` |
| Get a Call | GET | `/call/{{id}}` | `conn_mod_def::GMPxzu41k7A::cAPv-Q51TwOYPonCcr9kuA` |
| Create Call | POST | `/call` | `conn_mod_def::GMPxzgCaE9g::jpktEA3YTZySiz_e7jnoyw` |
| Delete a Call | DELETE | `/call/{{id}}` | `conn_mod_def::GMPxzgrAyWA::A37H5GChQx6RJFjIyYNmMw` |
| Update a Call | PATCH | `/call/{{id}}` | `conn_mod_def::GMPxzvPz7dg::gkbA1P9aTxSFP95DYHXFbA` |

### StructuredOutput

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Structured Output | GET | `/structured-output/{{id}}` | `conn_mod_def::GMPx3JLwieg::JiE4uZ5zTY26ctC0x5qOUA` |
| Create Structured Output | POST | `/structured-output` | `conn_mod_def::GMPx3Kg-C5A::2Koc8gLhRvSOgxHibsaTGw` |
| Delete Structured Output | DELETE | `/structured-output/{{id}}` | `conn_mod_def::GMPx3KO9bUA::MWRhTjaKRjGNxoIvuM_kog` |
| Run Structured Output | POST | `/structured-output/run` | `conn_mod_def::GMPx3I-nWig::z3-jlD7JQyaNHfbsNwI7Sg` |
| Update a Structured Output | PATCH | `/structured-output/{{id}}` | `conn_mod_def::GMPx3RJczvg::ScvgdqLPRw-sbtxZfYDi5Q` |

### Assistant

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Assistant by ID | GET | `/assistant/{{id}}` | `conn_mod_def::GMPxzUkMKeA::HLEf_8urSj6UizQaMd_3Tg` |
| Create Assistant | POST | `/assistant` | `conn_mod_def::GMPxzVpc31A::RVStgYhQTQivUvu4OyPmaw` |
| Delete an Assistant | DELETE | `/assistant/{{id}}` | `conn_mod_def::GMPxzWAKZOA::ZWTc3TE1RVqa8G6NEwBuRA` |
| Update an Assistant | PATCH | `/assistant/{{id}}` | `conn_mod_def::GMPxzgcqe3A::YHkJJnT-SLWB4b_W_nXAUQ` |

### Eval

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Eval | GET | `/eval/{{id}}` | `conn_mod_def::GMPx14hCkVg::-Th71TkMShCN1-2C8-QGrQ` |
| Create Eval | POST | `/eval` | `conn_mod_def::GMPx09nEgcA::kpVDvqI9QMqdxZf6FKA8_Q` |
| Delete Eval | DELETE | `/eval/{{id}}` | `conn_mod_def::GMPx13X0Uag::6QPkyPkETveHK8VG4Ke7IA` |
| Update an Eval | PATCH | `/eval/{{id}}` | `conn_mod_def::GMPx2B6KFGA::0Kg41tkoR1-ixwvU5DS7MA` |

### Squad

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Squad | GET | `/squad/{{id}}` | `conn_mod_def::GMPx3BP8qSg::92Y9aKBmT5SWhon_2kokKA` |
| Create Squad | POST | `/squad` | `conn_mod_def::GMPx3BWaPCg::t30Gtei5TjWE2NgUYhkMdw` |
| Delete a Squad | DELETE | `/squad/{{id}}` | `conn_mod_def::GMPx3AmNyvg::o-RZ0FMoSa-SkkAjO3ONSg` |
| Update a Squad | PATCH | `/squad/{{id}}` | `conn_mod_def::GMPx3A-AFgA::QoOs9oBbSO2cKbg_ugUg8Q` |

### Tools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Tool by ID | GET | `/tool/{{id}}` | `conn_mod_def::GMPx3RB6S4g::Wcs6-1bATrCt8Pe--To6IQ` |
| List Tools | GET | `/tool` | `conn_mod_def::GMPx3Sls7Bg::rTBL_yfHSlqBh5XAEFL1wQ` |
| Delete a Tool | DELETE | `/tool/{{id}}` | `conn_mod_def::GMPx3Q9eb5A::9GYkR_blR3a8Pa3xffMj4A` |
| Update a Tool | PATCH | `/tool/{{id}}` | `conn_mod_def::GMPx3Yt_kOA::w1ioPM1ARraSivCEeCGXfA` |

### PhoneNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Phone Number | GET | `/phone-number/{{id}}` | `conn_mod_def::GMPx2jMoDiA::sX5HGn-KTN-BKcLgqKPR5A` |
| Create Phone Number | POST | `/phone-number` | `conn_mod_def::GMPx2a55B4g::Aa9IZuqqSf-A0I9CazXQww` |
| Delete a Phone Number | DELETE | `/phone-number/{{id}}` | `conn_mod_def::GMPx2i3UCqA::je9bNqNuRe2O9DsHdxVSDw` |
| Update a Phone Number | PATCH | `/phone-number/{{id}}` | `conn_mod_def::GMPx2jwiExg::jLO19BgwQXasj6ScXdtCxg` |

### File

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File | GET | `/file/{{id}}` | `conn_mod_def::GMPx2BTW9LA::-lA4_ekfQ9iKqcJ0cHAruA` |
| Delete a File | DELETE | `/file/{{id}}` | `conn_mod_def::GMPx2BaRQyg::foTNVlhjQ5-u6ZCK1Mezpg` |
| Update a File | PATCH | `/file/{{id}}` | `conn_mod_def::GMPx2Lh-BWg::Ex3PMEmmR3S925dE6yD3YQ` |
| Upload File | POST | `/file` | `conn_mod_def::GMPx2KYL_ZA::B3kzFlpxTD-gpiB5z44HIA` |

### Session

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Session | GET | `/session/{{id}}` | `conn_mod_def::GMPx22qWgsg::nmpTrwydTgikTV8nX9LcdA` |
| Create Session | POST | `/session` | `conn_mod_def::GMPx22EswFg::VGF0PqIVQ6O8OxoBromFdg` |
| Delete a Session | DELETE | `/session/{{id}}` | `conn_mod_def::GMPx22FkWrg::gB9JUbUBSvq26L2u_KBxYw` |
| Update a Session | PATCH | `/session/{{id}}` | `conn_mod_def::GMPx22FkJAg::GljK-NmdSqKMDuzf1v-1_A` |

### Chat

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chat by ID | GET | `/chat/{{id}}` | `conn_mod_def::GMPx099KENg::W3Wkj1ssRFe1DAQ0qFxQ-w` |
| Create Chat | POST | `/chat` | `conn_mod_def::GMPx00t-R-g::6hqm2GC8QsKxpvICXMlCzw` |
| Delete a Chat | DELETE | `/chat/{{id}}` | `conn_mod_def::GMPx0-eSaXA::F3ajOcoQSSiy4Lazagg3Fw` |

### ProviderResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Provider Resource | GET | `/provider/{{provider}}/{{resourceName}}/{{id}}` | `conn_mod_def::GMPx2sqPSWg::C_MQ9_qQS3GMCS_bCZy4rQ` |
| List Provider Resources Using Provider Resource | GET | `/provider/{{provider}}/{{resourceName}}` | `conn_mod_def::GMPx2vbPhMA::WQSxLTENShCzpwt1icPK_w` |
| Create a Provider Resource | POST | `/provider/{{provider}}/{{resourceName}}` | `conn_mod_def::GMPx2srkVtg::zye4AvSdQjWveE3qhlgTxw` |

### ObservabilityScorecard

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Observability Scorecard by ID | GET | `/observability/scorecard/{{id}}` | `conn_mod_def::GMPx2bsDpYA::mSz0zBa-RwKScjX_FCb31A` |
| Create an Observability Scorecard | POST | `/observability/scorecard` | `conn_mod_def::GMPx2SoDtmA::EV8pjkatT0qJQY6IjUNBRg` |
| Delete an Observability Scorecard | DELETE | `/observability/scorecard/{{id}}` | `conn_mod_def::GMPx2bvVvqg::pGOv_5GgS7itrPnZ91xViA` |

### EvalRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Eval Run | GET | `/eval/run/{{id}}` | `conn_mod_def::GMPx15OBD-A::O8LasZuFTzm9GTq3_vG7vQ` |
| Create Eval Run | POST | `/eval/run` | `conn_mod_def::GMPx1xw5nag::-5Vd2-lTQ0as-cUbZYqwsQ` |

### EvalRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Eval Runs | GET | `/eval/run` | `conn_mod_def::GMPx17L87Bg::PyYHbLsJS7ysYbWFAp3Jzg` |
| Delete an Eval Run | DELETE | `/eval/run/{{id}}` | `conn_mod_def::GMPx15N32IA::aED36IP5ShOXJ_vkvtrjuQ` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Phone Numbers | GET | `/phone-number` | `conn_mod_def::GMPx2lAPEpA::Lj745dFyQQ6kozZYstkDPQ` |
| List Phone Numbers | GET | `/v2/phone-number` | `conn_mod_def::GMPx2mEXYNg::RYhGb8qIQ2GjvV1NHL63Lw` |

### ProviderResource

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Provider Resource | DELETE | `/provider/{{provider}}/{{resourceName}}/{{id}}` | `conn_mod_def::GMPx2tnQ0dA::QdimjywvQy6U6hJ_8OkDrA` |
| Update a Provider Resource | PATCH | `/provider/{{provider}}/{{resourceName}}/{{id}}` | `conn_mod_def::GMPx2soIhWg::7PqF793mQ_6lRI8VxjLUqw` |

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insights | GET | `/reporting/insight` | `conn_mod_def::GMPx2UHyAmg::jNYO-0nSSB-jvLQFuvIhRg` |
| Delete an Insight | DELETE | `/reporting/insight/{{id}}` | `conn_mod_def::GMPx2KS313A::ZVBkd-p9RISr2N7iFMZ3Zw` |

### Insight

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Insight by ID | GET | `/reporting/insight/{{id}}` | `conn_mod_def::GMPx2K2duCg::XegiROM1Q3-BfB-QNQZntg` |
| Update an Insight | PATCH | `/reporting/insight/{{id}}` | `conn_mod_def::GMPx2TQ36Qg::yMcTHz7ARf2BMJ1UikR1Vg` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Analytics Queries | POST | `/analytics` | `conn_mod_def::GMPxzWKavFA::UqzKHiDZR2aeP25Uk3dy1g` |

### Assistants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Assistants | GET | `/assistant` | `conn_mod_def::GMPxzZFrJCA::NBT9fRl8QWOh47nTMp4j6w` |

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| List Chats | GET | `/chat` | `conn_mod_def::GMPx1B59BVg::B_UmjR9PSbivFF4RfCpchQ` |

### Squads

| Action | Method | Path | Action id |
|---|---|---|---|
| List Squads | GET | `/squad` | `conn_mod_def::GMPx3CigF8A::aDglqU7aRKKFNdy-a5TTfQ` |

### StructuredOutputs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Structured Outputs | GET | `/structured-output` | `conn_mod_def::GMPx3KnQ7Eg::BAG6aMhNSci4uqIAcrIT2A` |

### Tool

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Tool | POST | `/tool` | `conn_mod_def::GMPx3RHolRA::ZHvTHd5rQ7ui2VNe8LaeFg` |

### ChatResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat Responses Using OpenAI Compatible Chat | POST | `/chat/responses` | `conn_mod_def::GMPx0035LxA::5IMs_1L-RS2upNjyfGn-zg` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| List Campaigns | GET | `/v2/campaign` | `conn_mod_def::GMPx03C-H7A::AnJiWp95R1mavYBdBKlgiA` |

### AssistantRecording

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Assistant Recording for a Call | GET | `/call/{{id}}/assistant-recording` | `conn_mod_def::GMPxzftkRrg::NNAz8e9iTL-YRqsK9he4yg` |

### CallCustomerRecording

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Call Customer Recording | GET | `/call/{{id}}/customer-recording` | `conn_mod_def::GMPxzgXYh9A::aX-rnkR0QqOz2JTA0JHiGQ` |

### CallVideoRecording

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Call Video Recording | GET | `/call/{{id}}/video-recording` | `conn_mod_def::GMPxzmuP9ZA::CBgwzKaGQw2BYc6mMz7fgQ` |

### CallLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Call Logs for a Call | GET | `/call/{{id}}/call-logs` | `conn_mod_def::GMPxzm6A53g::R9ZbKMGRR9WnziEzBXc-TA` |

### CallArtifacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Call Stereo Recording | GET | `/call/{{id}}/stereo-recording` | `conn_mod_def::GMPxzoVP9Fg::7cm-7hMDQvWTLg2QEQMx3Q` |

### Calls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calls | GET | `/call` | `conn_mod_def::GMPxzwfX2Rg::TvC1TP0ATvakwIrNxGPZYA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| List Files | GET | `/file` | `conn_mod_def::GMPx2Ch0SaA::49Yml6iFR8WFE1XRs3YKCg` |

### Evals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Evals | GET | `/eval` | `conn_mod_def::GMPx2DwmqUg::uIYbe2rVSJqSFjClquouew` |

### ReportingInsight

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Reporting Insight | POST | `/reporting/insight` | `conn_mod_def::GMPx2L_DNkA::L0fPFu4lSzyg3IHTcDF67A` |

### InsightRun

| Action | Method | Path | Action id |
|---|---|---|---|
| Run an Insight | POST | `/reporting/insight/{{id}}/run` | `conn_mod_def::GMPx2ScvNbg::RXwep_LPROSVJ3scemgKdw` |

### ReportingInsightPreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Preview Insight Using Reporting | POST | `/reporting/insight/preview` | `conn_mod_def::GMPx2Sojd0g::gJZ7FTyGRhKLlgY7060k-A` |

### Scorecard

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Scorecard | PATCH | `/observability/scorecard/{{id}}` | `conn_mod_def::GMPx2bT8sWg::kOfbkYImTvqd1Eloa2lQMA` |

### Scorecards

| Action | Method | Path | Action id |
|---|---|---|---|
| List Scorecards | GET | `/observability/scorecard` | `conn_mod_def::GMPx2cv1tHg::D7frGEUcTUKN7a4obPUflQ` |

This lists 90 of 91 actions. For anything not here, call `search_one_platform_actions` with platform `vapi`. The full catalog is at https://www.withone.ai/knowledge/vapi.

## When a call fails

The error comes from Vapi, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/vapi

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
