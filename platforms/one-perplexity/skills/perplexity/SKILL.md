---
name: perplexity
description: Perplexity is an AI-powered search and answer engine that provides real-time, cited answers using large language models. It's designed for knowledge discovery and in-depth research. Read and write Perplexity data through One: asyncchatcompletions, embeddings, websearch, contextualizedembeddings, agent, chatcompletions and more, 8 actions with real parameter documentation. Use whenever the user asks to look something up in Perplexity, create or update a record there, or build code against the Perplexity API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: perplexity
  generated-from: one-knowledge-base
---

# Perplexity through One

Perplexity is an AI-powered search and answer engine that provides real-time, cited answers using large language models. It's designed for knowledge discovery and in-depth research.

One exposes Perplexity through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `perplexity` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Perplexity is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Perplexity account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AsyncChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Async Chat Completion Response | GET | `/v1/async/sonar/{{apiRequest}}` | `conn_mod_def::GJ6CZpCyaCE::92w3q2h1RBy0zJ6NmDUWRg` |
| List Async Chat Completions for the Authenticated User | GET | `/v1/async/sonar` | `conn_mod_def::GJ6CZphdHPE::77KKEaKnSkmhEM2ynmq16A` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embeddings | POST | `/v1/embeddings` | `conn_mod_def::GJ6CZdszRmI::5QKcMrnZSe6MnnVIKtksZQ` |

### WebSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Web | POST | `/search` | `conn_mod_def::GJ6CZpg0YYw::53LshJC5TNOM_Bv6M_ptHw` |

### ContextualizedEmbeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Contextualized Embeddings | POST | `/v1/contextualizedembeddings` | `conn_mod_def::GJ6CZg7PP6o::SZxilv2RT0GHpYxYECfmgQ` |

### Agent

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Agent Response | POST | `/v1/agent` | `conn_mod_def::GJ6CZd-ZY-8::3LNxtXrfQAqRFKo2zDUT5A` |

### ChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Chat Completion | POST | `/v1/sonar` | `conn_mod_def::GJ6CZeTvPJc::zmkwnSM8S6egtsvqG96MKQ` |

### AsyncSonarChatCompletions

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Async Chat Completion (Sonar) | POST | `/async/sonar` | `conn_mod_def::GJ6CZhlw03k::e46CEqjNTEqKVz-hX2SWUQ` |

## When a call fails

The error comes from Perplexity, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/perplexity

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
