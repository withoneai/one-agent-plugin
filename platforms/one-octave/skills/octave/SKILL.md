---
name: octave
description: OctaveHQ is a generative AI platform for Go‑to‑Market teams, automatically refining ideal customer profiles and outbound messaging in real time—providing dynamic playbooks, personalized outreach, and actionable insights to scale high-converting campaigns. Read and write Octave data through One: agents, usecases, competitors, proofpoints, segments, brandvoice and more, 83 actions with real parameter documentation. Use whenever the user asks to look something up in Octave, create or update a record there, or build code against the Octave API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: octave
  generated-from: one-knowledge-base
---

# Octave through One

OctaveHQ is a generative AI platform for Go‑to‑Market teams, automatically refining ideal customer profiles and outbound messaging in real time—providing dynamic playbooks, personalized outreach, and actionable insights to scale high-converting campaigns.

One exposes Octave through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `octave` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Octave is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Octave account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agents | GET | `/api/v2/agents/list` | `conn_mod_def::GJ51vJnsQnA::sLb7sijyTJ-5igpiCsOPjQ` |
| Enrich a Company (Agent Run) | POST | `/api/v2/agents/enrich-company/run` | `conn_mod_def::GJ51u7yIjxU::ggaJMmL3QlWKeW3iF-3x3Q` |
| Enrich a Person (Run Enrich Person Agent) | POST | `/api/v2/agents/enrich-person/run` | `conn_mod_def::GJ51u7SoNhw::el5Nv_TZQWW2UAy4vlcdhg` |
| Generate Content for a Person (Run Content Agent) | POST | `/api/v2/agents/generate-content/run` | `conn_mod_def::GJ51u_zW41c::pySt3fSwQDWoroVTm5RVow` |
| Qualify a Company Using an Agent Run | POST | `/api/v2/agents/qualify-company/run` | `conn_mod_def::GJ51vHi8iEc::Dv-yBidrRr2HkYyhIiKI6w` |
| Qualify a Person (Run Qualify Person Agent) | POST | `/api/v2/agents/qualify-person/run` | `conn_mod_def::GJ51vVKiTh0::Ev8e1pAxQ3KmFLKAZZ7-eA` |
| Run a Preset Context Agent | POST | `/api/v2/agents/context/run` | `conn_mod_def::GJ51u7-6VWQ::k5226vJAQiKLNgUIMZ3N-A` |
| Run Prospector Agent | POST | `/api/v2/agents/prospector/run` | `conn_mod_def::GJ51vHnynmg::I2qWxLmcQ-ufJNhQrupHvQ` |

### UseCases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Use Case by OId | GET | `/api/v2/use-case/get` | `conn_mod_def::GJ51xlMW7JE::FmRYOYlcTGWiPImEhqCNng` |
| List Use Cases | GET | `/api/v2/use-case/list` | `conn_mod_def::GJ51xuZcL_c::KRvIjEIXTZ2IUMmbyUom7A` |
| Create Use Case | POST | `/api/v2/use-case/create` | `conn_mod_def::GJ51xkXirrE::CINv1znjTOmhwWGEeJ2ohg` |
| Delete a Use Case | DELETE | `/api/v2/use-case/delete` | `conn_mod_def::GJ51xkJEIE8::33Kzqnc2R-2fgeSB87pZFg` |
| Generate Use Cases | POST | `/api/v2/use-case/generate` | `conn_mod_def::GJ51xjlyOfI::0KscHT_rQEmE-Fynvr_AbQ` |
| Update a Use Case | POST | `/api/v2/use-case/update` | `conn_mod_def::GJ51xshh31o::AKEl-MxhTVyqvypuQZVdug` |

### Competitors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Competitor by OId | GET | `/api/v2/competitor/get` | `conn_mod_def::GJ51v5zExBc::qziKx2VBT_KnQxE39TDMZQ` |
| List Competitors | GET | `/api/v2/competitor/list` | `conn_mod_def::GJ51wFATwb4::L4UbH1BhTMeGW6NzKJOU5w` |
| Create Competitor | POST | `/api/v2/competitor/create` | `conn_mod_def::GJ51v8P_JEs::t6Gc5foBTHeqOSlKatrFWg` |
| Delete a Competitor | DELETE | `/api/v2/competitor/delete` | `conn_mod_def::GJ51v8VrBSs::WO4Zt5eMT0SU4U6U87HRTA` |
| Generate Competitors | POST | `/api/v2/competitor/generate` | `conn_mod_def::GJ51v6Uc-Sg::NJ1B_yeJQhCZNvZcXxGFbQ` |
| Update a Competitor | POST | `/api/v2/competitor/update` | `conn_mod_def::GJ51wDyW3j8::-AJEePLRQCiKGbmCczG9IQ` |

### ProofPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Proof Point | GET | `/api/v2/proof-point/get` | `conn_mod_def::GJ51wrfcGTw::rsvhGE8OREKjH3GEnhocGg` |
| List Proof Points | GET | `/api/v2/proof-point/list` | `conn_mod_def::GJ51wtSwrdY::YH2VE-3LQbu6Au_5Zx5QhQ` |
| Create Proof Point | POST | `/api/v2/proof-point/create` | `conn_mod_def::GJ51w152x4A::K-9OO1D6TxKpM6GopgdZXg` |
| Delete a Proof Point | DELETE | `/api/v2/proof-point/delete` | `conn_mod_def::GJ51wr1vG5c::wsPLaYO8SFiM1voS96eLlA` |
| Generate Proof Points | POST | `/api/v2/proof-point/generate` | `conn_mod_def::GJ51wrQ6WA8::DjuwOGwKQgibOC_szX3pAQ` |
| Update a Proof Point | POST | `/api/v2/proof-point/update` | `conn_mod_def::GJ51w3gvvGw::ekulerg1QUmcfho5Sax-uQ` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment | GET | `/api/v2/segment/get` | `conn_mod_def::GJ51xZ8tThI::xbtC8o2-T3KLgNUIOcWQ3A` |
| List Segments | GET | `/api/v2/segment/list` | `conn_mod_def::GJ51xbNLWJg::MCX21DQ8REKiA7n0gilg3w` |
| Create Segment | POST | `/api/v2/segment/create` | `conn_mod_def::GJ51xZ2pUjo::pGdoYXxoSDGVs1i7D39QXQ` |
| Delete a Segment | DELETE | `/api/v2/segment/delete` | `conn_mod_def::GJ51xY_P3kY::bfNyRdI4SGCbNbt1FXunng` |
| Generate Market Segments | POST | `/api/v2/segment/generate` | `conn_mod_def::GJ51xctN4JY::ESI6hGE8R_-MsfMl0xC0YQ` |
| Update a Segment | POST | `/api/v2/segment/update` | `conn_mod_def::GJ51xkT_iWQ::df0537iCSGCQlnFd1OipVg` |

### BrandVoice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Voice by OId | GET | `/api/v2/brand-voice/get` | `conn_mod_def::GJ51vtEiVxI::QbJgFFovS4ya2k0qZSOseQ` |
| Apply Brand Voice to Sources | POST | `/api/v2/brand-voice/apply` | `conn_mod_def::GJ51veuWVGs::dtEEsUxSRsCA1A-1_2J9cQ` |
| Create Brand Voice | POST | `/api/v2/brand-voice/create` | `conn_mod_def::GJ51vthFdfg::iPIIOmn4QLuhYCboVB30Bw` |
| Generate a Brand Voice | POST | `/api/v2/brand-voice/generate` | `conn_mod_def::GJ51vxxnuZg::6hbMIa05TPK2HpSpT-qUbA` |
| Toggle a Workspace’s Default Brand Voice | POST | `/api/v2/brand-voice/toggle-default` | `conn_mod_def::GJ51vsksbxA::M_Yul5s-T7uDJJOoli070g` |

### Playbooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Playbook by OId | GET | `/api/v2/playbook/get` | `conn_mod_def::GJ51wY4B7Bs::jpRyLAVpQpKMXFMeXeIC9g` |
| List Playbooks | GET | `/api/v2/playbook/list` | `conn_mod_def::GJ51wcJwxbo::tUcxu2djS-6GWuPGMuuvfA` |
| Create a Playbook | POST | `/api/v2/playbook/create` | `conn_mod_def::GJ51wYkXesY::eowftDfHTHii2K4TdDOyNw` |
| Delete a Playbook | DELETE | `/api/v2/playbook/delete` | `conn_mod_def::GJ51wbQ5OiA::bR3htaSyRsaLrDfjllysrQ` |
| Update a Playbook | POST | `/api/v2/playbook/update` | `conn_mod_def::GJ51wYSw7WM::6EcUuVsIRwKgM7UL9ZkV3w` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Product by OId | GET | `/api/v2/product/get` | `conn_mod_def::GJ51wj5pTXc::t74Yqem8TzuqPmJ-rHp8dg` |
| List Products | GET | `/api/v2/product/list` | `conn_mod_def::GJ51wkRoXWw::WhxvV9r9Rfyr_WWR6F9LSg` |
| Delete a Product | DELETE | `/api/v2/product/delete` | `conn_mod_def::GJ51wi6MDaI::cNc9jnBhSxOSj04ADpYk1A` |
| Generate a Product | POST | `/api/v2/product/generate` | `conn_mod_def::GJ51wjklBr8::utsfPGuXRgWbZsEcUkTcUw` |
| Update a Product | POST | `/api/v2/product/update` | `conn_mod_def::GJ51wrRbcbw::wJ2TghWuQJWX6lTgCra-eQ` |

### Persona

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Persona by OId | GET | `/api/v2/persona/get` | `conn_mod_def::GJ51wQZfoX0::kfIb6fnnRqmksHatrUfoGQ` |
| Create Persona | POST | `/api/v2/persona/create` | `conn_mod_def::GJ51wDd5QsI::ioVcKJVGTgG9FYwIIidTVA` |
| Delete a Persona | DELETE | `/api/v2/persona/delete` | `conn_mod_def::GJ51wOhc-Wc::F3hBHlQ4Q2SfGpxkcIuG8Q` |
| Update a Persona | POST | `/api/v2/persona/update` | `conn_mod_def::GJ51wOnK34U::HfR7MReCTca2Y6eWqLgedQ` |

### Reference

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reference by OId | GET | `/api/v2/reference/get` | `conn_mod_def::GJ51w-vcLJU::u1odjr1ZSG-u7ASbAOiZTw` |
| Create Reference | POST | `/api/v2/reference/create` | `conn_mod_def::GJ51w1Eyxxw::fCu8CuMdRl6K63le_Kd8Sw` |
| Delete a Reference | DELETE | `/api/v2/reference/delete` | `conn_mod_def::GJ51w0mSfDs::3kWX-mvTS2qgq_2QjFfYKQ` |
| Update Reference | POST | `/api/v2/reference/update` | `conn_mod_def::GJ51w_fIJDo::SOjSPfP7QNmBU5UTCDuv6g` |

### Resources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Workspace Global Resources | GET | `/api/v2/resource/list` | `conn_mod_def::GJ51xSL2FN0::gTiP2g4ISRSsa7OKrGKb3A` |
| Create a Global Workspace Resource | POST | `/api/v2/resource/create` | `conn_mod_def::GJ51w_uf5PE::g-TyUjtwRaec5XykMq2eCw` |
| Delete Resource(s) | POST | `/api/v2/resource/delete` | `conn_mod_def::GJ51xL9WuGc::I7hVbP0HQimzBhRiahDLqw` |
| Search Resources | POST | `/api/v2/resource/search` | `conn_mod_def::GJ51xNXH73Y::XU_oPwvRRgWGk0Q8IvUfaQ` |

### References

| Action | Method | Path | Action id |
|---|---|---|---|
| List References | GET | `/api/v2/reference/list` | `conn_mod_def::GJ51xBrSLbg::xoDkIhQCQ2e7eehIfrnpjw` |
| Create a Reference (Legacy) | POST | `/api/v2/reference/create-legacy` | `conn_mod_def::GJ51w1oZpp4::xZnFjQLNQKOKvD2wySJkZg` |
| Generate References | POST | `/api/v2/reference/generate` | `conn_mod_def::GJ51w_JfUFg::qCrgGn3QQ3qPi2OsU-mmlg` |

### BrandVoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brand Voices in a Workspace | GET | `/api/v2/brand-voice/list` | `conn_mod_def::GJ51vtf8fVc::KbEzwXNLTya7ckc59310sg` |
| Update a Brand Voice | POST | `/api/v2/brand-voice/update` | `conn_mod_def::GJ51v4powEc::T1VJfLTtTce2htEERuK44Q` |

### Personas

| Action | Method | Path | Action id |
|---|---|---|---|
| List Personas | GET | `/api/v2/persona/list` | `conn_mod_def::GJ51wMjdDyc::8J2nrDdESpaDS043QnGY9Q` |
| Generate Personas | POST | `/api/v2/persona/generate` | `conn_mod_def::GJ51wMFEkww::3pQ5EUgNTJmaz_eRvbHbag` |

### GenericWebhookEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Generic Webhook Events (by Event Type) | POST | `/api/v2/analytics/webhook/receive/generic/generic/{{eventType}}` | `conn_mod_def::GJ51vVboWZY::vi1tRjH-QIa-wN7W8TcS-Q` |

### AgentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agent Types | GET | `/api/v2/agents/types` | `conn_mod_def::GJ51vG4j68k::UnzhCN7DTeyhm160_GiJKg` |

### AgentExperiments

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Agent Experiment | POST | `/api/v2/agents/experiment/create` | `conn_mod_def::GJ51vKlWBuU::FvUxVDvqSD6UGn-aWvFOjg` |

### ResourceStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Resource Status | GET | `/api/v2/resource/status` | `conn_mod_def::GJ51xL9ArFY::4G0dtS6eQX-mBSZu4C-q_w` |

### AgentsCallPrep

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Call Prep Agent | POST | `/api/v2/agents/call-prep/run` | `conn_mod_def::GJ51u7J2Nps::NvkDXdyFRemrAda2GrbZCA` |

### AgentsWorkspace

| Action | Method | Path | Action id |
|---|---|---|---|
| Build a Workspace (Workspace Builder Agent) | POST | `/api/v2/agents/workspace/build` | `conn_mod_def::GJ51vR3r9O0::3zFvIFNMShq8TsmE4zMKxw` |

### AgentsSequence

| Action | Method | Path | Action id |
|---|---|---|---|
| Run Sequence Agent to Generate Emails for a Person | POST | `/api/v2/agents/sequence/run` | `conn_mod_def::GJ51vW_DnuY::tQIl3YgzTXWP4jE2vBsNnA` |

### AnalyticsWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Receive Analytics Webhook | POST | `/api/v2/analytics/webhook/receive` | `conn_mod_def::GJ51vS4l2KM::Q6gYQ5XoRAW-J0Da-3qXOw` |

### ApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate API Key | GET | `/api/v2/api-key/validate` | `conn_mod_def::GJ51vf48iGg::xyp40kJTReWt3-zrVm3Xfg` |

### AsyncAgentRuns

| Action | Method | Path | Action id |
|---|---|---|---|
| Run an Agent Asynchronously | POST | `/api/v2/async/agent/run` | `conn_mod_def::GJ51vlSUAho::jpkkzbp9SEKFObIvrVHltA` |

### HeadlessEmailSequences

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Headless Email Sequences | POST | `/api/v2/headless/generate-emails` | `conn_mod_def::GJ51wELaXhg::h6MgCpgjTTOjSo3rYgbiAg` |

### Context

| Action | Method | Path | Action id |
|---|---|---|---|
| Context Search | POST | `/api/v2/context` | `conn_mod_def::GJ51wEva_sU::ybZhV6enQZmoPyvBUmNxUw` |

### Product

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Product | POST | `/api/v2/product/create` | `conn_mod_def::GJ51wjThb7E::DaUPu2FjTvCLN8QVwVzfhA` |

### Resource

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Resource by OId | GET | `/api/v2/resource/get` | `conn_mod_def::GJ51xLQgKR8::Lj2p0b9JS-m0dTgff2oLUA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| List API Keys | GET | `/api/v2/api-key/list` | `conn_mod_def::GJ51vfgQBWM::UPmgtuWhRaOLnkfOZEk6NA` |

### HeadlessGenerateEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Emails (Async, Headless) | POST | `/api/v2/async/headless/generate-emails` | `conn_mod_def::GJ51vgslZM0::yMaFYpbRQueT378W-GwBGg` |

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Workflow | POST | `/api/v2/workflows/run` | `conn_mod_def::GJ51xsz2zTw::UOo8lJ98TLmMkfNb0wUOdg` |

## When a call fails

The error comes from Octave, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/octave

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
