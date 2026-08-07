---
name: clearout
description: Clearout is an email verification and lead enrichment platform that provides APIs and bulk validation tools to identify invalid, disposable, and risky email addresses, allowing sales and marketing teams to improve deliverability, reduce bounce rates, and maintain cleaner contact data. Read and write Clearout data through One: emailverification, bulkverifyresults, email, servicelimits, emailfinderbulk, accountplansandaddons and more, 32 actions with real parameter documentation. Use whenever the user asks to look something up in Clearout, create or update a record there, or build code against the Clearout API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: clearout
  generated-from: one-knowledge-base
---

# Clearout through One

Clearout is an email verification and lead enrichment platform that provides APIs and bulk validation tools to identify invalid, disposable, and risky email addresses, allowing sales and marketing teams to improve deliverability, reduce bounce rates, and maintain cleaner contact data.

One exposes Clearout through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `clearout` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Clearout is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Clearout account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### EmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Verify Emails | POST | `/v2/email_verify/bulk` | `conn_mod_def::GMYgeS1cMMU::0F6czqa4Tu60vCPIM7OfvA` |
| Verify Disposable Email Addresses | POST | `/v2/email/verify/disposable` | `conn_mod_def::GMYgekokM7Q::1gvslBwFQ7uWh2FYsRhpQw` |

### BulkVerifyResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Bulk Verify Results | POST | `/v2/download/result` | `conn_mod_def::GMYgepBvT0U::eofFSdyaRpCK9TlTbqDE0A` |
| Remove Bulk Verify Results | POST | `/v2/email_verify/list/remove` | `conn_mod_def::GMYgelBNDMs::MF5aw-uhRp-IJmLUs_joKQ` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify a Free Email Account | POST | `/v2/email/verify/free` | `conn_mod_def::GMYge9kLk9M::pqpKlXrBQp24i_s8zoH07Q` |
| Verify Catch-All Email | POST | `/v2/email/verify/catchall` | `conn_mod_def::GMYgenG_aMY::4yCY_XKHSBCjmzkEoux-fw` |

### ServiceLimits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Service Limits | GET | `/v2/account/limits` | `conn_mod_def::GMYgd2HKKJc::k5ZP96-UTIqXBgrN4UI-iA` |

### EmailFinderBulk

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk Email Finder | POST | `/v2/email_finder/bulk` | `conn_mod_def::GMYgd2kC2jg::UL3JQRqeTxyXV8dPGaWSrA` |

### AccountPlansAndAddOns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Plans and Add-ons | GET | `/v2/account/myplans` | `conn_mod_def::GMYgd3MuKRU::ebYfhA-uTqas4YZW4qHZrA` |

### RemainingCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Remaining Credits | GET | `/v2/account/credits` | `conn_mod_def::GMYgd3wRnS0::pdj8OBAfQWqMFOuJl1TGuw` |

### Companies

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Domains for Company | GET | `/v2/public/companies/autocomplete` | `conn_mod_def::GMYgd3y2mRk::NPS4N7oMQZq31v-5SbgfGg` |

### BulkEmailFinderProgressStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Email Finder Progress Status | GET | `/v2/email_finder/bulk/progress_status` | `conn_mod_def::GMYgeCK9AHg::3T8CfC03Sh-Trcxfelkq3g` |

### EmailFinderLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove a Bulk Email Finder List | POST | `/v2/email_finder/list/remove` | `conn_mod_def::GMYgeC6e8M0::raVXtUTDR2SiAZaeLxvsfw` |

### BulkFinderResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Bulk Finder Result | POST | `/v2/email_finder/download/result` | `conn_mod_def::GMYgeEdszFM::DS2edT2HQn-sKaiHMwtMLQ` |

### EmailFinderList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Finder List | POST | `/v2/email_finder/list` | `conn_mod_def::GMYgeEqfpC8::4e4wnTgOQVW87ZttXUpiXA` |

### BulkFinderList

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Bulk Finder List | POST | `/v2/email_finder/list/cancel` | `conn_mod_def::GMYgeErpgp4::dtpFUssHR62iKa8G7Lkfzg` |

### EmailFinder

| Action | Method | Path | Action id |
|---|---|---|---|
| Instant Email Finder | POST | `/v2/email_finder/instant` | `conn_mod_def::GMYgeQJduyk::ich8ao82RzaczMtwM3jn2w` |

### InstantEmailFinderQueueStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Instant Email Finder Queue Status | GET | `/v2/email_finder/instant/queue_status` | `conn_mod_def::GMYgeVXa0jM::MyP8BeOCQWiRdO8aqYdn5g` |

### BulkVerifyList

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel Bulk Verify List | POST | `/v2/email_verify/list/cancel` | `conn_mod_def::GMYgeWA0Bv0::XuuctBObS2eTo1EMohTUwg` |

### BulkEmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Progress Status for Bulk Email Verification | GET | `/v2/email_verify/bulk/progress_status` | `conn_mod_def::GMYgeWpyHb0::EyZ9d0EdRSyDTP5Q80ytmQ` |

### BusinessEmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Business Email | POST | `/v2/email/verify/business` | `conn_mod_def::GMYgemNm5rU::2YCcAT0kTxe5KPlaSk8ZOQ` |

### EmailVerifierList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Email Verifier List | POST | `/v2/email_verify/list` | `conn_mod_def::GMYge_4IosE::qdSUM-D7TeWQH0puSeA66g` |

### AvailableCredits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Credits | GET | `/v2/email_verify/getcredits` | `conn_mod_def::GMYgfBAaKjM::1EmU9DA1RFuOahNdotN0Gw` |

### EmailVerify

| Action | Method | Path | Action id |
|---|---|---|---|
| Instant Verify Email | POST | `/v2/email_verify/instant` | `conn_mod_def::GMYgfFhQuZ4::CPNo1QzxQguZP0qsSAb5cw` |

### GibberishEmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Gibberish Email Account | POST | `/v2/email/verify/gibberish` | `conn_mod_def::GMYgfF8rxMQ::VcCQ8l36Szm5iex0sceMJA` |

### MxRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Find MX Records | POST | `/v2/domain/resolve/mx` | `conn_mod_def::GMYgfTMMTrs::3YuEwAdwR--yavSO0d7SDw` |

### ReverseLookupDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Lookup Domain | GET | `/v2/reverse_lookup/domain` | `conn_mod_def::GMYgfTZD8oA::DUm61HNiSmuu_YMPEydHQg` |

### Whois

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Whois | POST | `/v2/domain/resolve/whois` | `conn_mod_def::GMYgfUhBhvE::jnzNv-CjQ128H8rYTwH_AQ` |

### RoleAccountEmailVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Role Account Email | POST | `/v2/email/verify/role` | `conn_mod_def::GMYgfUvxWCo::RNA9Ia1-TF6SQ8XuJ8L3Lw` |

### NameValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Name | POST | `/v2/name/validate` | `conn_mod_def::GMYgfW61B9U::UUNGUVWDSEKfVfwNCHdFww` |

### ReverseLookupEmailAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Lookup Email Address | GET | `/v2/reverse_lookup/email` | `conn_mod_def::GMYgfgnn-9g::keZoV_N3SMeZgNbRYoXm7g` |

### ReverseLookupLinkedinProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Lookup LinkedIn Profile | GET | `/v2/reverse_lookup/linkedin` | `conn_mod_def::GMYgfhsGrx8::Ct8SXjmARMC1n4zD-dP-AQ` |

## When a call fails

The error comes from Clearout, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/clearout

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
