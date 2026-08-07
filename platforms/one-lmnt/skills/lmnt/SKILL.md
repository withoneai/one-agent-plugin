---
name: lmnt
description: LMNT is a text-to-speech platform that provides APIs for generating natural-sounding voice audio from text, allowing developers and product teams to add voice synthesis, narration, and spoken interfaces to applications, media workflows, and customer experiences. Read and write LMNT data through One: payments, account, aispeech, voice, accountsessions, speechbetapath and more, 58 actions with real parameter documentation. Use whenever the user asks to look something up in LMNT, create or update a record there, or build code against the LMNT API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: lmnt
  generated-from: one-knowledge-base
---

# LMNT through One

LMNT is a text-to-speech platform that provides APIs for generating natural-sounding voice audio from text, allowing developers and product teams to add voice synthesis, narration, and spoken interfaces to applications, media workflows, and customer experiences.

One exposes LMNT through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `lmnt` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm LMNT is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real LMNT account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Payments

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel Payments | POST | `/payments/cancel` | `conn_mod_def::GMP6DUx9cOs::5ZWMFv4YSa2mh9hXug6D8Q` |
| Cancel Scheduled Change for Payments | POST | `/payments/cancel-scheduled-change` | `conn_mod_def::GMP6DUTUZZA::w25k8F7yTVy0OZSSjvC-hQ` |
| Change Plan | POST | `/payments/change-plan` | `conn_mod_def::GMP6Dmq1uQo::0gjUlB5ITiK__ZXN742_bQ` |
| Mixpanel Webhook Handler for Payments | POST | `/payments/webhook/mixpanel` | `conn_mod_def::GMP6EQftfj8::5nAXmVQKSx6DmabfLsXeew` |
| Setup Intent Handler | POST | `/payments/setup-intent` | `conn_mod_def::GMP6EsuK01c::4VlLz8hBSqeHFs5aNPvwmA` |
| Subscribe to Payments | POST | `/payments/subscribe` | `conn_mod_def::GMP6Ew5eNnE::j2XTyx54RmKt5MZc1SZt8w` |
| Uncancel Payments | POST | `/payments/uncancel` | `conn_mod_def::GMP6EsnbsY0::uuhl2w4mRSCCz5G_x0CEVA` |
| Webhook Handler for Payments | POST | `/payments/webhook` | `conn_mod_def::GMP6E37iiW8::TXA3BnhjR4maE36k47xXaQ` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account | GET | `/v1/account` | `conn_mod_def::GMP6D5VxaJI::yDb7ia0OSlm__ejPazYyww` |
| New Api Key Using Account | GET | `/v1/account/new_api_key` | `conn_mod_def::GMP6EQ9J6Qs::Aq7UCrv2RnqmH-C8CYLPFw` |
| Accept Tos Using Account | POST | `/v1/account/accept_tos` | `conn_mod_def::GMP6DT0bmjc::m5IBjobJRgWEWYQjX1v9KA` |
| Delete Account | DELETE | `/v1/account` | `conn_mod_def::GMP6Duzt_OA::wi2wKSZrRou6yQMxYyGwjA` |
| Set Email Prefs Using Account | POST | `/v1/account/set_email_prefs` | `conn_mod_def::GMP6ExAjt8g::5hwzYfX4TXK23tkg-B5AXw` |

### AiSpeech

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Speech Using LMNT AI Speech | GET | `/v1/ai/speech` | `conn_mod_def::GMP6D-PSKFg::TzyxsMhiQMSmSpZj34f73A` |
| Kanna Improved Using AI Speech | POST | `/v1/ai/speech/kanna_improved` | `conn_mod_def::GMP6ENo7c70::oZ5jAKoWTo6mUsuVLs2ilw` |
| Post Handler Using AI Speech | POST | `/v1/ai/speech` | `conn_mod_def::GMP6EcU4Qk0::TnTCeRNEQmWZIWA3KFHnEg` |

### Voice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Voice by ID | GET | `/v1/ai/voice/{{id}}` | `conn_mod_def::GMP6EGuCUsU::ZISwgoGPQ7iH3qEMYUdKpQ` |
| Create a Voice Handler | POST | `/v1/ai/voice` | `conn_mod_def::GMP6Dmo8oa0::NtUV9gR1Rvy5rtMfxpCdew` |
| Update a Voice Handler | PUT | `/v1/ai/voice/{{id}}` | `conn_mod_def::GMP6E4Bccrg::KtyeAxI_SsWKVzzheB27KA` |

### AccountSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Sessions | GET | `/v1/account/sessions` | `conn_mod_def::GMP6ENXRZRA::-WUqzPqSSUC4yPXSggcdkg` |
| Revoke All Sessions for an Account | POST | `/v1/account/sessions/revoke_all` | `conn_mod_def::GMP6Ek14URY::S5vuc7YPTsq70NWYlV7r3g` |
| Revoke an Account Session | DELETE | `/v1/account/sessions/{{sessionPublicId}}` | `conn_mod_def::GMP6ElHTkUk::75ksLwmSQVKgHOtBn9oYTg` |

### SpeechBetaPath

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Speech Beta Path | DELETE | `/speech/beta/{{path}}` | `conn_mod_def::GMP6DcI5Vv8::51hrtbF8QGWo189YO7WY9g` |
| Put to Speech Beta Path | PUT | `/speech/beta/{{path}}` | `conn_mod_def::GMP6Dcjq2g0::swAShipaQQGq2Plh54IC5g` |

### Speech

| Action | Method | Path | Action id |
|---|---|---|---|
| Catch All Beta Speech | POST | `/speech/beta/{{path}}` | `conn_mod_def::GMP6DdFiJpI::3o8i19RkTcWWUWnwKJMiKg` |
| Catch All Beta Speech Beta Path | OPTIONS | `/speech/beta/{{path}}` | `conn_mod_def::GMP6DezO9rQ::qgfsV9hgSSm6NWQZ6KF_lQ` |

### ApiKey

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an API Key | DELETE | `/v1/account/api_key/{{masked}}` | `conn_mod_def::GMP6Dnqgnws::jixeC2cCRIaQeS_EQ3tHuQ` |
| Set an API Key Name | POST | `/v1/account/api_key/{{masked}}/name` | `conn_mod_def::GMP6ElYH3Fs::Q_bSe9kWQQuZL2ANnbpaYA` |

### SpeechBytes

| Action | Method | Path | Action id |
|---|---|---|---|
| Speech Bytes | POST | `/v1/ai/speech/bytes` | `conn_mod_def::GMP6DUE7GzA::ubUG6CnJRdOu6fJ-rjg1vQ` |

### BillingOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Billing Overview | GET | `/payments/billing` | `conn_mod_def::GMP6DUhPXiU::numCvc9JQhWoFOSfo5Q59Q` |

### SpeechBetaContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Speech Beta Content | GET | `/speech/beta/{{path}}` | `conn_mod_def::GMP6DcwrYbg::rPmVXEEDTS-jLbjC28W8Lw` |

### PaymentMethod

| Action | Method | Path | Action id |
|---|---|---|---|
| Replace Payment Method | POST | `/payments/payment-method/replace` | `conn_mod_def::GMP6ElU3VfM::8Vjhd8l_SbSWHaPArh4T6Q` |

### DailyUsageHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Daily Usage History | GET | `/v1/account/daily_usage_history` | `conn_mod_def::GMP6D46UILg::APB3j_nDS4mLS8FnmuYnDw` |

### DamageReport

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Damage Report | GET | `/v1/damage_report` | `conn_mod_def::GMP6Dl7-YtM::m-wkprqnTbuUh34pcC6etA` |

### AccountClip

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete an Account Clip | DELETE | `/v1/account/clip/{{clipId}}` | `conn_mod_def::GMP6DnThljA::b-OctJVjSdisEHFxx694WA` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Feedback Handler | POST | `/v1/ai/speech/feedback` | `conn_mod_def::GMP6DvrL-Nc::kumSdD1PSruAeJ2kjoS6Pg` |

### Drain

| Action | Method | Path | Action id |
|---|---|---|---|
| Drain | POST | `/drain` | `conn_mod_def::GMP6DwsdoF0::DJfok_t0QmeKkRS8cd9f5A` |

### Echo

| Action | Method | Path | Action id |
|---|---|---|---|
| Echo Handler | POST | `/echo` | `conn_mod_def::GMP6DxCD2Vw::6yjreXOETJ6uyDa4VRtixQ` |

### VoiceHandler

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Voice Handler | DELETE | `/v1/ai/voice/{{id}}` | `conn_mod_def::GMP6DxZQtKk::SySMJrggTEiT5yrVw-_lAg` |

### ClipHandler

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Clip Handler | GET | `/v1/account/clip/{{clipId}}` | `conn_mod_def::GMP6D5ScDDQ::Cv0r-8bzRCy7HyQsAKSHBw` |

### AccountClips

| Action | Method | Path | Action id |
|---|---|---|---|
| List Account Clips | GET | `/v1/account/clips` | `conn_mod_def::GMP6D56AZ38::2mBYjElcTgyT34Fx1Ou8bg` |

### UsageHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage History | GET | `/v1/account/billing_history` | `conn_mod_def::GMP6EFMSunI::POVGiI8-RjGITZ3YEUo65A` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Handle Project Request | POST | `/v1/account/vercel/projects` | `conn_mod_def::GMP6EF0NVMo::4o0AcDbTQuaTbcoLumb9Bw` |

### PaymentProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Payment Products | GET | `/payments/products` | `conn_mod_def::GMP6EcmarPQ::Oob1o5KqRd6rzuixpZN-4w` |

### HealthCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Health Check | GET | `/health_check` | `conn_mod_def::GMP6EHEk-Mo::CjZgLVcYRz-2MpFkJFK8pA` |

### BetaVoices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Beta Voices for Speech | GET | `/speech/beta/voices` | `conn_mod_def::GMP6EIIqAnE::13UFrLVMS8K_-VZRk1Cq1A` |

### Kanna

| Action | Method | Path | Action id |
|---|---|---|---|
| Kanna Handler | POST | `/v1/ai/speech/kanna` | `conn_mod_def::GMP6EIpMcvY::lEoY1oeRQIaGVHjZ7jV6vA` |

### VercelEnvVars

| Action | Method | Path | Action id |
|---|---|---|---|
| Handle Env Var Request for Vercel | POST | `/v1/account/vercel/env_vars` | `conn_mod_def::GMP6EJhwLqs::ZJWidnqhTN-PF2ClwI-LHw` |

### VoicePreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Invalidate Preview for a Voice | POST | `/v1/ai/voice/{{id}}/preview/invalidate` | `conn_mod_def::GMP6ENhKozY::uoW2PRMuR-St3g7PJBXKog` |

### Auth

| Action | Method | Path | Action id |
|---|---|---|---|
| Logout | GET | `/auth/oauth/logout` | `conn_mod_def::GMP6EQQhfa0::gWC4D6UVQQyYYGKUXyh2PA` |

### OauthLogin

| Action | Method | Path | Action id |
|---|---|---|---|
| Login Using OAuth Provider | GET | `/auth/oauth/login` | `conn_mod_def::GMP6EQg8HXM::36MczgD4QTqJsaHSL7myWg` |

### Voices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Voices | GET | `/v1/ai/voice/list` | `conn_mod_def::GMP6EUftQQQ::pBzL2vA8StyiR8rtgfIniw` |

### AiVoicePrecheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Precheck Clone Using AI Voice | POST | `/v1/ai/voice/precheck` | `conn_mod_def::GMP6EcS4B6c::g_CoLQPeQ92qgywftz8Mcg` |

### AiVoicePreview

| Action | Method | Path | Action id |
|---|---|---|---|
| Preview Using AI Voice | GET | `/v1/ai/voice/{{id}}/preview` | `conn_mod_def::GMP6EcrKQZE::7bwG7gOoRQeFPqzTtszS4Q` |

### AuthOAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| OAuth Callback Handler Using Auth OAuth | GET | `/auth/oauth/{{provider}}` | `conn_mod_def::GMP6EdiSX2E::z6d3lEmxRo-vgeJF1kkLyg` |

### ReadyCheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Ready Check | GET | `/ready_check` | `conn_mod_def::GMP6Ekz_axY::I0JvgfjgQomc8yJ5k8XKyw` |

### SpeechBetaSynthesize

| Action | Method | Path | Action id |
|---|---|---|---|
| Synthesize Using Speech Beta | POST | `/speech/beta/synthesize` | `conn_mod_def::GMP6EtAG4qQ::zTGn-kHrQYCRYcS7FK8QOw` |

### OauthAuthentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate OAuth Authentication | GET | `/auth/oauth/validate` | `conn_mod_def::GMP6E4-SdCs::7odsAg1STzy4s1JdkoJzeA` |

## When a call fails

The error comes from LMNT, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/lmnt

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
