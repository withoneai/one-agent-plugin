---
name: integration-code
description: Write integration code against a third-party API (Gmail, Stripe, Shopify, HubSpot, QuickBooks, Slack, Salesforce and 700+ more) using that API's real schema instead of a guessed one. Use when building a feature that calls an external SaaS API, adding an OAuth connection to an app, generating a client or webhook handler, or debugging an integration that returns 400 or 401.
license: MIT
metadata:
  author: one-systems
  version: "1.0"
---

# Writing integration code with real API schemas

Integration code fails on details a model cannot recall: the exact field name, whether a value goes in the body or the query string, which enum the API accepts this year. One's action knowledge carries all of it, so look the API up rather than writing from memory.

This is what knowledge-only mode is for. In an editor, `execute_one_action` is removed, so you can read every API's real schema while writing code and cannot fire a live request against production data by accident.

## Before you write the call

1. `search_one_platform_actions` on the platform, described by outcome ("create a customer", "list orders since a date").
2. `get_one_action_knowledge` on the action you picked. Read the whole thing: required and optional parameters, types, enums, auth, the request shape, and the response shape.
3. Write the code from that schema. Field names, casing, nesting, and types come from the knowledge, not from what the API probably looks like.

If you write a request body with a field the knowledge does not list, you invented it. Go back and check.

## Two ways to ship the call

**Through One.** Keep One in the runtime and call the action through it. The user's connection handles auth, so your code holds no per-platform tokens and no refresh logic. Good when the app already has One in it or when you are integrating several platforms.

**Direct to the platform.** Use the knowledge as documentation and write a normal HTTP client against the vendor's API. Good when the integration is one platform deep or the runtime cannot take another dependency. You then own OAuth, token refresh, and rotation.

Say which one you are doing and why, in a sentence, before you write the file. Do not mix them in the same module.

## Types come from the response shape

The knowledge includes the response shape. Generate your types from it instead of hand-writing an interface that drifts. Model optional fields as optional. When the API returns a union or a nullable field, represent that rather than asserting the happy path.

## Auth belongs in the environment

Never write a key, token, or secret into source, a config file, a test fixture, or a committed `.env`. Read from the environment, and add the variable name to `.env.example` so the next person knows what to set. If the code is a client-side component, the call goes through a server route: a browser bundle cannot hold a platform credential.

## Pagination and rate limits are not optional

The knowledge names the pagination parameters and the platform's limits. A list call that ignores them works on a test account with twelve records and fails on a real one. Write the loop with a cursor and a bound, and handle 429 with a backoff on the first version, not the second.

## Errors

Handle the four that actually happen: 400 or 422 (your payload does not match the schema), 401 or 403 (auth expired or scope missing), 404 (the record is not on this account), 429 (slow down). Surface the platform's own error message to the caller. Swallowing it into "something went wrong" makes the integration undebuggable.

## Webhooks

If the feature reacts to platform events rather than polling, look up the platform's webhook action the same way. Verify the signature, respond fast, and do the work asynchronously. An unverified webhook endpoint is an open write path into your system.

## Debugging an integration that is already broken

Re-read the knowledge for the action before changing anything. Most 400s are a renamed field or a value in the wrong place. Compare the failing request against the schema field by field. If auth is failing, check the scope granted on the connection before touching the code.

Full docs: https://www.withone.ai/docs/mcp
