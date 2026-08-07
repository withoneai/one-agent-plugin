---
name: email-list-verify
description: EmailListVerify is an email verification platform that provides APIs and bulk validation tools to check email deliverability, detect invalid or disposable addresses, and reduce bounce rates, allowing teams to maintain cleaner contact lists and improve email campaign performance. Read and write EmailListVerify data through One: maillists, emaildeliverability, emailjobs, placementtestresults, blacklists, inboxplacementtests and more, 16 actions with real parameter documentation. Use whenever the user asks to look something up in EmailListVerify, create or update a record there, or build code against the EmailListVerify API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: email-list-verify
  generated-from: one-knowledge-base
---

# EmailListVerify through One

EmailListVerify is an email verification platform that provides APIs and bulk validation tools to check email deliverability, detect invalid or disposable addresses, and reduce bounce rates, allowing teams to maintain cleaner contact lists and improve email campaign performance.

One exposes EmailListVerify through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `email-list-verify` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm EmailListVerify is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real EmailListVerify account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### MailLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Finished Email List | GET | `/api/maillists/{{id}}` | `conn_mod_def::GMXuzMD6Kgg::nemvU4OJS2-7LpLg2TpiPQ` |
| Delete a Finished Email List | DELETE | `/api/maillists/{{id}}` | `conn_mod_def::GMXuzKquanA::Z-e6S47ZRPmk9DyrzVFUCw` |
| Start Deep Scan of an Email List | POST | `/api/maillists/{{id}}/reverify` | `conn_mod_def::GMXuzRz-JhA::HvqGoMS8Smy8Jpu0cONFTg` |

### EmailDeliverability

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Email Deliverability | GET | `/api/verifyEmail` | `conn_mod_def::GMXuzSJtK6A::gO4yvaibQGSziYb-rWS3hw` |
| Verify Email Deliverability in Detail | GET | `/api/verifyEmailDetailed` | `conn_mod_def::GMXuzRsgA7g::uUFcEZKqQ12wDH1ZyGKnVQ` |

### EmailJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Email Verification Job | POST | `/api/emailJobs` | `conn_mod_def::GMXuzEYs-Cg::e7tpKmOtQy-Zp8dpsZ3TIw` |

### PlacementTestResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Placement Test Results | GET | `/api/inboxPlacementTests/{{code}}` | `conn_mod_def::GMXuzEapeyg::FqmHABE4T7eGaIm0j7vB3A` |

### Blacklists

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Blacklists | POST | `/api/checkBlacklists` | `conn_mod_def::GMXuzEbiYZA::GbXtcooYSeSh8bv__35Skg` |

### InboxPlacementTests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Inbox Placement Test | POST | `/api/inboxPlacementTests` | `conn_mod_def::GMXuzEbifOg::4yxwedeJSOOnFpS3qYqL0w` |

### EmailListVerificationProgress

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email List Verification Progress | GET | `/api/getApiFileInfo` | `conn_mod_def::GMXuzEwCm0A::ouhkqCyPRWOPrW73xIKVeA` |

### Credits

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Available Credits | GET | `/api/credits` | `conn_mod_def::GMXuzKfrmSA::KqYl7XtbQC-6ddexg5g1VQ` |

### EmailListProgress

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Email List Progress | GET | `/api/maillists/{{id}}/progress` | `conn_mod_def::GMXuzKhCAjg::mfCM8aVyQfSJX2CdSwCN5A` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search for a Contact's Email Address | POST | `/api/findContact` | `conn_mod_def::GMXuzLYNmCg::dIxfPsP7QKCmhYFmQfxqfg` |

### EmailLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload Email List | POST | `/api/verifyApiFile` | `conn_mod_def::GMXuzRsCVhA::_T7Wbti6ScG659adAJJY6A` |

### EmailVerificationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Verification Job | GET | `/api/emailJobs/{{id}}` | `conn_mod_def::GMXuzSJz8gA::Gbr-vWkWQAq2nMY1URLXsg` |

### DisposableEmailDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Disposable Email Domain | POST | `/api/checkDisposable` | `conn_mod_def::GMXuzYlRjFg::MxpAjMYMRjGvSTsjeym-CA` |

## When a call fails

The error comes from EmailListVerify, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/email-list-verify

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
