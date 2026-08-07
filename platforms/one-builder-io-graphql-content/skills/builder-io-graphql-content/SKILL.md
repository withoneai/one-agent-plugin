---
name: builder-io-graphql-content
description: Builder.io is a headless CMS and visual content platform whose GraphQL Content API provides structured access to published content, allowing developers and digital teams to query, deliver, and manage page and component data across websites and applications. Read and write Builder.io GraphQL Content data through One: figmaimports, page, buildercontentapigraphql and more, 5 actions with real parameter documentation. Use whenever the user asks to look something up in Builder.io GraphQL Content, create or update a record there, or build code against the Builder.io GraphQL Content API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: builder-io-graphql-content
  generated-from: one-knowledge-base
---

# Builder.io GraphQL Content through One

Builder.io is a headless CMS and visual content platform whose GraphQL Content API provides structured access to published content, allowing developers and digital teams to query, deliver, and manage page and component data across websites and applications.

One exposes Builder.io GraphQL Content through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `builder-io-graphql-content` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Builder.io GraphQL Content is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Builder.io GraphQL Content account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### FigmaImports

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Figma Imports | POST | `/api/v3/graphql/{{BUILDER_IO_GRAPHQL_CONTENT_API_KEY}}` | `conn_mod_def::GLdu7eoE1S0::RZRilnY1Rj-HEXCk74oYdw` |
| Query Single Figma Import | POST | `/api/v3/graphql/{{BUILDER_IO_GRAPHQL_CONTENT_API_KEY}}` | `conn_mod_def::GLdu7hXvRcI::Gn4x6KBURWGbnyukWEJWrA` |

### Page

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Pages | POST | `/api/v3/graphql/{{BUILDER_IO_GRAPHQL_CONTENT_API_KEY}}` | `conn_mod_def::GLdu7fJX1BA::RFOjSQowT8OJRds7vVDkCQ` |
| Query Single Page | POST | `/api/v3/graphql/{{BUILDER_IO_GRAPHQL_CONTENT_API_KEY}}` | `conn_mod_def::GLdu7e819j4::jKxfF_q1Q4-IfqjnFj6ROA` |

### BuilderContentApiGraphql

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute GraphQL Query | POST | `/api/v3/graphql/{{BUILDER_IO_GRAPHQL_CONTENT_API_KEY}}` | `conn_mod_def::GLdu7fhLIco::T0nuuQLVSJeewJri3ocpuQ` |

## When a call fails

The error comes from Builder.io GraphQL Content, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/builder-io-graphql-content

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
