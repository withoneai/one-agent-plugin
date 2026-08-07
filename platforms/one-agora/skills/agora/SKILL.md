---
name: agora
description: Agora is a real-time engagement platform that provides APIs and SDKs for voice, video, live streaming, chat, and interactive broadcasting, allowing developers to embed low-latency communication features into web, mobile, and desktop applications. Read and write Agora data through One: agents, conversationalaiagent, agenthistory, conversationturns and more, 10 actions with real parameter documentation. Use whenever the user asks to look something up in Agora, create or update a record there, or build code against the Agora API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: agora
  generated-from: one-knowledge-base
---

# Agora through One

Agora is a real-time engagement platform that provides APIs and SDKs for voice, video, live streaming, chat, and interactive broadcasting, allowing developers to embed low-latency communication features into web, mobile, and desktop applications.

One exposes Agora through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `agora` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Agora is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Agora account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Agents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agents for a Project | GET | `/agents` | `conn_mod_def::GK9hfH5nzWE::oKWyIEwWR66tXdpw9ZbQ-w` |
| Query Agent Status | GET | `/agents/{{agentId}}` | `conn_mod_def::GK9hfFVRLC8::Xavb-y5BTjepQtnoEE3T0A` |
| Broadcast a Message Using TTS for an Agent | POST | `/agents/{{agentId}}/speak` | `conn_mod_def::GK9hfGaWBRY::5vQPM6g3SK2xRvU_7_fHXA` |
| Interrupt an Agent | POST | `/agents/{{agentId}}/interrupt` | `conn_mod_def::GK9hfFSifKo::x6IpODIYRwSyRxOtm4t9-Q` |
| Update an Agent's Configuration | POST | `/agents/{{agentId}}/update` | `conn_mod_def::GK9hfREzNhA::QR1ZdL5vRli-LU-oakN6iQ` |

### ConversationalAiAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a Custom Instruction to an Agent | POST | `/agents/{{agentId}}/think` | `conn_mod_def::GK9hfQoqNws::Fv6IH2DtSmGq4Cz8I8bPAg` |
| Start a Conversational AI Agent | POST | `/join` | `conn_mod_def::GK9hfXIyrtw::59N9epgTRpi3gLXCdUGTAw` |
| Stop a Conversational AI Agent | POST | `/agents/{{agentId}}/leave` | `conn_mod_def::GK9hfQ4vjHI::HTWqksO5SLe5ScZpgzEOtg` |

### AgentHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Agent's History | GET | `/agents/{{agentId}}/history` | `conn_mod_def::GK9hfQ8sBcQ::Fu80WHNZQlyOykml2X3S-A` |

### ConversationTurns

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Conversation Turn Information for an Agent | GET | `/agents/{{agentId}}/turns` | `conn_mod_def::GK9hfF7ofI0::Y1E2vQ2FQHWMJ_ko9OxCWQ` |

## When a call fails

The error comes from Agora, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/agora

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
