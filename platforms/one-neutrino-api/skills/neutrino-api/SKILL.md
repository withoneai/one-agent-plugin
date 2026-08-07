---
name: neutrino-api
description: Neutrino API is a cloud API platform that provides data validation, enrichment, geolocation, telecom, image processing, and security-related services, allowing developers to add verification, lookup, and automation capabilities to applications through a broad set of REST endpoints. Read and write Neutrino API data through One: ipblocklist, binlist, phonenumbervalidation, badwordfilter, emailvalidate, ualookup and more, 28 actions with real parameter documentation. Use whenever the user asks to look something up in Neutrino API, create or update a record there, or build code against the Neutrino API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: neutrino-api
  generated-from: one-knowledge-base
---

# Neutrino API through One

Neutrino API is a cloud API platform that provides data validation, enrichment, geolocation, telecom, image processing, and security-related services, allowing developers to add verification, lookup, and automation capabilities to applications through a broad set of REST endpoints.

One exposes Neutrino API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `neutrino-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Neutrino API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Neutrino API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### IpBlocklist

| Action | Method | Path | Action id |
|---|---|---|---|
| Download the IP Blocklist | GET | `/ip-blocklist-download` | `conn_mod_def::GMTdnhvEKjg::v1xr5D01T_eQgWpiuTyKFg` |
| IP Blocklist | GET | `/ip-blocklist` | `conn_mod_def::GMTdnightSA::aPRqFCgJQ_alQx3aeYcssA` |

### BinList

| Action | Method | Path | Action id |
|---|---|---|---|
| Download the BIN List | GET | `/bin-list-download` | `conn_mod_def::GMTdnIhXqRA::zkMyhBqyQxSHQqnkR7UFgQ` |

### PhoneNumberValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate a Phone Number | GET | `/phone-validate` | `conn_mod_def::GMTdnJ1iwrg::EbVhv11-TAmUlln09iQQHw` |

### BadWordFilter

| Action | Method | Path | Action id |
|---|---|---|---|
| Bad Word Filter | POST | `/bad-word-filter` | `conn_mod_def::GMTdnJ5TAqA::4JhrOI9ZTNy0Srk7rOaRYw` |

### EmailValidate

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Validate | GET | `/email-validate` | `conn_mod_def::GMTdnLIAUWg::oZy9guD3TZCO1rGfI65pRQ` |

### UaLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| UA Lookup | GET | `/ua-lookup` | `conn_mod_def::GMTdnLg0nuA::mRUZXQwJSUKLGgZm1m2ipQ` |

### BinLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| BIN Lookup | GET | `/bin-lookup` | `conn_mod_def::GMTdnR1NvUg::n-I7eRjBRSeSIEJnfwx_rg` |

### IpInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| IP Info | GET | `/ip-info` | `conn_mod_def::GMTdnSSAa9g::5qnoVUXfSTaHDTnNwU0k_w` |

### GeocodeReverse

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode Reverse | GET | `/geocode-reverse` | `conn_mod_def::GMTdnSSeZ6A::xA6wyjoUT3GUTgmyJadA6A` |

### Convert

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert | GET | `/convert` | `conn_mod_def::GMTdnTIZgBg::OIDZOCFxQOOxpvdNuW4b3w` |

### GeocodeAddress

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode Address | GET | `/geocode-address` | `conn_mod_def::GMTdnUZ42QA::qNOVaue1THORmLJe6HgchQ` |

### ImageWatermark

| Action | Method | Path | Action id |
|---|---|---|---|
| Image Watermark | POST | `/image-watermark` | `conn_mod_def::GMTdnaOUrag::87JmD7N_T-yV-b74RTyGTQ` |

### ImageResize

| Action | Method | Path | Action id |
|---|---|---|---|
| Image Resize | POST | `/image-resize` | `conn_mod_def::GMTdnaaUk7A::8-Qn5orQREWBTiIaEHaxVg` |

### QrCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a QR Code | POST | `/qr-code` | `conn_mod_def::GMTdnaqqpKg::QiZOT7OBRtKpN2JWTHXYmg` |

### HtmlRender

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML Render | POST | `/html-render` | `conn_mod_def::GMTdnasjZrg::KYh3guwEQcKFOJZLlGN97w` |

### DomainLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Domain Lookup | GET | `/domain-lookup` | `conn_mod_def::GMTdnaucX3g::Exol_8_eSrSZ2mQ1_-aREw` |

### EmailVerify

| Action | Method | Path | Action id |
|---|---|---|---|
| Email Verify | GET | `/email-verify` | `conn_mod_def::GMTdngbBs4A::1vLAGyr8QWKPsZhlr5h5Hw` |

### HostReputation

| Action | Method | Path | Action id |
|---|---|---|---|
| Host Reputation | GET | `/host-reputation` | `conn_mod_def::GMTdnhLmpiA::G-AQ4f9ARrWe5U3P_QA-kw` |

### IpProbe

| Action | Method | Path | Action id |
|---|---|---|---|
| IP Probe | GET | `/ip-probe` | `conn_mod_def::GMTdnhMaZDg::buK4S1s6SZ6BUBFZaVa8xA` |

### PhonePlayback

| Action | Method | Path | Action id |
|---|---|---|---|
| Phone Playback | POST | `/phone-playback` | `conn_mod_def::GMTdnpKJl0g::DzKI-bBQRzyf2JGjK89DCA` |

### SecurityCodeVerification

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Security Code | GET | `/verify-security-code` | `conn_mod_def::GMTdnp2hAeg::s81-xMCJQoiT0LpFlkIoQQ` |

### PhoneVerify

| Action | Method | Path | Action id |
|---|---|---|---|
| Phone Verify | POST | `/phone-verify` | `conn_mod_def::GMTdnp8vsGg::sqwAAgrLQZu38j0XO35G6A` |

### HlrLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| HLR Lookup | GET | `/hlr-lookup` | `conn_mod_def::GMTdnrSSTGg::5Wp8Lt4VT8uBdUqhNifxfQ` |

### SmsVerify

| Action | Method | Path | Action id |
|---|---|---|---|
| SMS Verify | POST | `/sms-verify` | `conn_mod_def::GMTdnrYo7hA::VvcakoQxR9etnTXSdAuMtw` |

### BrowserBot

| Action | Method | Path | Action id |
|---|---|---|---|
| Browser Bot | POST | `/browser-bot` | `conn_mod_def::GMTdnyHCfiA::T2s3EYiPREyAMr6EEupDhQ` |

### HtmlClean

| Action | Method | Path | Action id |
|---|---|---|---|
| HTML Clean Using Html Clean | POST | `/html-clean` | `conn_mod_def::GMTdnyhjtmg::-U2ac7bgQc2kKePOpCOzoQ` |

### UrlInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| URL Info | GET | `/url-info` | `conn_mod_def::GMTdnzI-rVA::G_rS9YAwTFucTM-vqqRjTQ` |

## When a call fails

The error comes from Neutrino API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/neutrino-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
