---
name: recall-ai
description: Recall.ai is an API platform for meeting bots and conversation data that enables developers to access audio, video, transcripts, recordings, and metadata from conferencing tools, allowing products to automate note-taking, analytics, coaching, and meeting workflow integrations. Read and write Recall AI data through One: bot, slackteams, zoomoauthcredentials, calendars, googlelogins, googlelogingroups and more, 126 actions with real parameter documentation. Use whenever the user asks to look something up in Recall AI, create or update a record there, or build code against the Recall AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: recall-ai
  generated-from: one-knowledge-base
---

# Recall AI through One

Recall.ai is an API platform for meeting bots and conversation data that enables developers to access audio, video, transcripts, recordings, and metadata from conferencing tools, allowing products to automate note-taking, analytics, coaching, and meeting workflow integrations.

One exposes Recall AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `recall-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Recall AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Recall AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Bot

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Bot's Media | POST | `/api/v1/bot/{{id}}/delete_media/` | `conn_mod_def::GK8WR3vxRfA::9HLrExgGS3WydWzeRbe15A` |
| Output Audio for a Bot | POST | `/api/v1/bot/{{id}}/output_audio/` | `conn_mod_def::GK8WSV3RSgA::GYkAhJRcQROj0rFznnvcyQ` |
| Output Audio for a Bot | DELETE | `/api/v1/bot/{{id}}/output_audio/` | `conn_mod_def::GK8WSd7Tt6A::pMIX3rQgRd2jHL7nDENTHg` |
| Output Media for a Bot | POST | `/api/v1/bot/{{id}}/output_media/` | `conn_mod_def::GK8WSWcwG6g::vIJQ-x9ZQtuIiaEdLQb6vQ` |
| Output Video for a Bot | POST | `/api/v1/bot/{{id}}/output_video/` | `conn_mod_def::GK8WSnMCGsA::_HC_nsgvRCqv9qKAt3tAxQ` |
| Pause a Bot's Recording | POST | `/api/v1/bot/{{id}}/pause_recording/` | `conn_mod_def::GK8WTNcAaGg::v4gNQWbZQQu_vYD_WLLbYg` |
| Pin a Bot Participant | POST | `/api/v1/bot/{{id}}/pin_participant/` | `conn_mod_def::GK8WSooc8fg::Byrq43ldSzapI-B5w7FjCw` |
| Remove a Bot From a Call | POST | `/api/v1/bot/{{id}}/leave_call/` | `conn_mod_def::GK8WSoDX4hA::h2gEuf2OTmmM1MHs0ILrRQ` |
| Request Recording Permission for a Bot | POST | `/api/v1/bot/{{id}}/request_recording_permission/` | `conn_mod_def::GK8WSoUuU4A::c54tEbg6SHS8l-SfuKY6Xw` |
| Resume a Bot's Recording | POST | `/api/v1/bot/{{id}}/resume_recording/` | `conn_mod_def::GK8WTXXcd9g::a2IHUPRbTVGqSnUQpR-WgQ` |
| Send a Bot Chat Message | POST | `/api/v1/bot/{{id}}/send_chat_message/` | `conn_mod_def::GK8WTYQue9g::CbH6q-tIS7q83F7sPYiB7g` |
| Start Recording for a Bot | POST | `/api/v1/bot/{{id}}/start_recording/` | `conn_mod_def::GK8WTYHCv4A::TRUikRtXQPGYccscTRZwyw` |

3 more Bot actions are available through search.

### SlackTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Slack Teams | GET | `/api/v2/slack-teams/` | `conn_mod_def::GK8WWYCBqgg::EoDMQZnDRcGrpdzIPSngwQ` |
| Retrieve Slack Team | GET | `/api/v2/slack-teams/{{id}}/` | `conn_mod_def::GK8WWhHpFVg::u5Aw0jTPSjGYjoTXjyaDIg` |
| Create Slack Team | POST | `/api/v2/slack-teams/` | `conn_mod_def::GK8WWW2UIQA::PPJTuBsGSR-eUawP2_O-MA` |
| Delete a Slack Team | DELETE | `/api/v2/slack-teams/{{id}}/` | `conn_mod_def::GK8WWWwceQg::u61wJJKjSp-LwLTjroHoYA` |
| Delete a Slack Team Integration User OAuth Token | DELETE | `/api/v2/slack-teams/{{slackTeamIntegrationId}}/oauth-tokens/{{slackUserId}}/` | `conn_mod_def::GK8WWWeg82g::wP1PL62aQNCGEVaOYveNDA` |
| Partial Update a Slack Team | PATCH | `/api/v2/slack-teams/{{id}}/` | `conn_mod_def::GK8WWhffDcg::uxDa80OrSmyxB1311rnrMQ` |
| Update a Slack Team | PUT | `/api/v2/slack-teams/{{id}}/` | `conn_mod_def::GK8WWklYZeg::61ew2vTJSiKyAStNaOETbw` |

### ZoomOAuthCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Zoom OAuth Credential Access Token | GET | `/api/v2/zoom-oauth-credentials/{{id}}/access-token/` | `conn_mod_def::GK8WWtsRd5A::Q9wlT_iSRK6QllwaZt-CjA` |
| List Zoom OAuth Credentials | GET | `/api/v2/zoom-oauth-credentials/` | `conn_mod_def::GK8WXFAbMYg::Re5wur-RSfG3YiIh7yJjVw` |
| Retrieve a Zoom OAuth Credential | GET | `/api/v2/zoom-oauth-credentials/{{id}}/` | `conn_mod_def::GK8WXCusSgg::SInUKJEFSU6cXZrsqb8COg` |
| Create Zoom OAuth Credential | POST | `/api/v2/zoom-oauth-credentials/` | `conn_mod_def::GK8WWtmSbPg::yEp_6ochSFO1QczhQGD6PQ` |
| Destroy Zoom OAuth Credential | DELETE | `/api/v2/zoom-oauth-credentials/{{id}}/` | `conn_mod_def::GK8WWs0unJg::UqMeMlXoRlKzW6ODSaxeLw` |
| Manually Resync Meetings for a Zoom OAuth Credential | POST | `/api/v2/zoom-oauth-credentials/{{id}}/sync-meetings/` | `conn_mod_def::GK8WXC-I95g::JFWg903NSp20aWJB5ngN_g` |
| Manually Revalidate a Zoom OAuth Credential | POST | `/api/v2/zoom-oauth-credentials/{{id}}/validate/` | `conn_mod_def::GK8WXCvvy0g::IzjFAh1JSr-rtvyRGQ1hzA` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendars | GET | `/api/v2/calendars/` | `conn_mod_def::GK8WUOqJSkA::noiA7aevSE6wZCgFlYmN-w` |
| Retrieve a Calendar | GET | `/api/v2/calendars/{{id}}/` | `conn_mod_def::GK8WUYucbZA::axzyxrxySqOMIZt4C7_aMw` |
| Create Calendar | POST | `/api/v2/calendars/` | `conn_mod_def::GK8WUNeyOyA::27uhE1lqQLKs2ucbi3_D0A` |
| Delete a Calendar | DELETE | `/api/v2/calendars/{{id}}/` | `conn_mod_def::GK8WUL8va5A::kJ04AdUqSNWYdSJFd9kBwA` |
| Get a Calendar's Access Token | POST | `/api/v2/calendars/{{id}}/access-token/` | `conn_mod_def::GK8WUOwlDGg::06yvaKvGQ3600aAg6VByDw` |
| Update a Calendar | PATCH | `/api/v2/calendars/{{id}}/` | `conn_mod_def::GK8WUbJ6Peg::SIglTbc6T2emzlPM1HRCZw` |

### GoogleLogins

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Logins | GET | `/api/v2/google-logins/` | `conn_mod_def::GK8WUvRE27A::WPpLfKakSie3i8bt7fA27g` |
| Retrieve a Google Login by ID | GET | `/api/v2/google-logins/{{id}}/` | `conn_mod_def::GK8WU4mkyZA::6GYqmlaIQZS3NnbtveVzxA` |
| Create Google Login | POST | `/api/v2/google-logins/` | `conn_mod_def::GK8WUj8yMrg::csa_4_igTjajNYlby5tY9w` |
| Delete a Google Login | DELETE | `/api/v2/google-logins/{{id}}/` | `conn_mod_def::GK8WUtkEXzg::8Eh7ymGMRr-TsqTnRzfRuA` |
| Partial Update a Google Login (by ID) | PATCH | `/api/v2/google-logins/{{id}}/` | `conn_mod_def::GK8WUtuGTyg::OrrzKKNfTOWjpGpw61y9pg` |
| Update a Google Login | PUT | `/api/v2/google-logins/{{id}}/` | `conn_mod_def::GK8WU80pxpg::YqIHkye9QoeHxjMAx4BjGw` |

### GoogleLoginGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Login Groups | GET | `/api/v2/google-login-groups/` | `conn_mod_def::GK8WUvFHDNA::2NAhNFCmTgm1kV4FlkW-vg` |
| Retrieve Google Login Group | GET | `/api/v2/google-login-groups/{{id}}/` | `conn_mod_def::GK8WU4oxhOg::wTuwSDY-R_iayZRgIEJzMQ` |
| Create Google Login Group | POST | `/api/v2/google-login-groups/` | `conn_mod_def::GK8WUkXWCuA::TPs0R5o9R9GTCfIf8fe5xA` |
| Partial Update a Google Login Group | PATCH | `/api/v2/google-login-groups/{{id}}/` | `conn_mod_def::GK8WU5b348A::xsauQ7IeSMC-CFjKqLIYTg` |
| Update a Google Login Group | PUT | `/api/v2/google-login-groups/{{id}}/` | `conn_mod_def::GK8WU5EM4-g::qYhZJ0XBRauoasafs0sWHA` |

### ZoomOAuthApps

| Action | Method | Path | Action id |
|---|---|---|---|
| List Zoom OAuth Apps | GET | `/api/v2/zoom-oauth-apps/` | `conn_mod_def::GK8WW5vFEjA::1cQbLKa_QKeW1kRCQCN0kw` |
| Retrieve a Zoom OAuth App | GET | `/api/v2/zoom-oauth-apps/{{id}}/` | `conn_mod_def::GK8WXBfkDLg::ErOlI0QATCSaEM7kR1wtLA` |
| Create Zoom OAuth App | POST | `/api/v2/zoom-oauth-apps/` | `conn_mod_def::GK8WWtZY0YA::HXeCmBMhTJyqKeOevjlWnQ` |
| Destroy a Zoom OAuth App | DELETE | `/api/v2/zoom-oauth-apps/{{id}}/` | `conn_mod_def::GK8WWtU_Q2A::6vkAjZHISLGcx5x04cVBZg` |
| Update a Zoom OAuth App | PATCH | `/api/v2/zoom-oauth-apps/{{id}}/` | `conn_mod_def::GK8WXOp1HAg::FoPezEpHSUGHzh9uZ-JdAA` |

### Bots

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bots | GET | `/api/v1/bot/` | `conn_mod_def::GK8WSXNgNcA::x-tWNuLUSfGc5N7uW-DWag` |
| Retrieve a Bot | GET | `/api/v1/bot/{{id}}/` | `conn_mod_def::GK8WTXXZ1_g::hwtVDlsUREiAg1qrSl7GZg` |
| Create Bot | POST | `/api/v1/bot/` | `conn_mod_def::GK8WR3AH3YA::ZBdCop5ZRmGg-viEjuQ67A` |
| Delete Scheduled Bot | DELETE | `/api/v1/bot/{{id}}/` | `conn_mod_def::GK8WR15zcCA::4B9ea3WyTNWcZ9UlgFlsPQ` |

### CalendarUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Calendar User | GET | `/api/v1/calendar/user/` | `conn_mod_def::GK8WT4kC9Jg::tuKMVFr_QoKm-OfCDDyxGg` |
| Delete Calendar User | DELETE | `/api/v1/calendar/user/` | `conn_mod_def::GK8WT3nw_-A::05oJK7prRGClg_gQlxDHDg` |
| Disconnect Calendar Platform | POST | `/api/v1/calendar/user/disconnect/` | `conn_mod_def::GK8WT56MI5g::taXoEQeIQp-3YnC8RbPqCg` |
| Update Recording Preferences | PUT | `/api/v1/calendar/user/` | `conn_mod_def::GK8WUC2uXcA::WmmTy2jaSimCUrRydCUYFw` |

### CalendarMeetings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Meetings | GET | `/api/v1/calendar/meetings/` | `conn_mod_def::GK8WT5qgAQA::lmQTwC9CS6-2RDQay5WhwQ` |
| Retrieve a Calendar Meeting | GET | `/api/v1/calendar/meetings/{{id}}/` | `conn_mod_def::GK8WUC3SLbg::ks4e_anET56b3R-a7r92tg` |
| Refresh Calendar Meetings | POST | `/api/v1/calendar/meetings/refresh/` | `conn_mod_def::GK8WUEtNscg::ICsDfSb0Q8iBmMWxlrLqog` |
| Update a Calendar Meeting | PUT | `/api/v1/calendar/meetings/{{id}}/` | `conn_mod_def::GK8WUDO1xwg::T0l5Ss10SpuYv8iO37w6Aw` |

### MeetingMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| List Meeting Metadata | GET | `/api/v1/meeting_metadata/` | `conn_mod_def::GK8WVlgv_fA::ntcAUpx6TXeEwNeKEiLyhw` |
| Retrieve Meeting Metadata | GET | `/api/v1/meeting_metadata/{{id}}/` | `conn_mod_def::GK8WVu8pQOA::fP3Ki1h8Tuu4a5ECRr8knA` |
| Delete Meeting Metadata | DELETE | `/api/v1/meeting_metadata/{{id}}/` | `conn_mod_def::GK8WVP1v2Wg::wPCZE0pkRNKiirF2cbMrLg` |
| Update Meeting Metadata (by ID) | PATCH | `/api/v1/meeting_metadata/{{id}}/` | `conn_mod_def::GK8WWCTE1gA::86IA5HCWQ6e20VrHcE54AQ` |

### ParticipantEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Participant Events | GET | `/api/v1/participant_events/` | `conn_mod_def::GK8WVmMGixg::ttwraICbRHCRUW4KOdH_dQ` |
| Retrieve Participant Events | GET | `/api/v1/participant_events/{{id}}/` | `conn_mod_def::GK8WV5EkuMA::i7FCQlFbSUOM0wQ26nJixw` |
| Delete Participant Events | DELETE | `/api/v1/participant_events/{{id}}/` | `conn_mod_def::GK8WVQVsseA::WXSsdSb5RDGXns5WsxLqJg` |
| Update Participant Events | PATCH | `/api/v1/participant_events/{{id}}/` | `conn_mod_def::GK8WWCFkA3g::9AeNdKtKSzqN5NYRXcfuuQ` |

### AudioSeparate

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audio Separate | GET | `/api/v1/audio_separate/` | `conn_mod_def::GK8WVa1KREA::BqlnaqKHQ96Bxj6gbP_vuA` |
| Retrieve Audio Separate | GET | `/api/v1/audio_separate/{{id}}/` | `conn_mod_def::GK8WVu33luA::OO5oeCfbRE-qaFCmUJRN3w` |
| Delete Audio Separate (by ID) | DELETE | `/api/v1/audio_separate/{{id}}/` | `conn_mod_def::GK8WVQ-6LTA::0C4k1_wSQb6JB6w5Q7jUZA` |
| Update Audio Separate | PATCH | `/api/v1/audio_separate/{{id}}/` | `conn_mod_def::GK8WWB-_EcA::SP-aOEuuT3Krpxzj1r6ZkQ` |

### Transcript

| Action | Method | Path | Action id |
|---|---|---|---|
| List Transcript | GET | `/api/v1/transcript/` | `conn_mod_def::GK8WVkvP8mg::2SwJTCcoTi6lBKMpSd72Dw` |
| Retrieve a Transcript | GET | `/api/v1/transcript/{{id}}/` | `conn_mod_def::GK8WV5N1uVg::Kr-lToTbQACxzFZFOmPy9A` |
| Delete Transcript | DELETE | `/api/v1/transcript/{{id}}/` | `conn_mod_def::GK8WVZJ6juA::1XdmghZwQdK6Y4YZrP6MBQ` |
| Update a Transcript | PATCH | `/api/v1/transcript/{{id}}/` | `conn_mod_def::GK8WWMmuNnA::Zet-H410SdWyoH6135E8zw` |

### VideoSeparate

| Action | Method | Path | Action id |
|---|---|---|---|
| List Video Separate | GET | `/api/v1/video_separate/` | `conn_mod_def::GK8WVv8DvYg::mFo5vjkETWCOvtvqbbx0dA` |
| Retrieve Video Separate (by ID) | GET | `/api/v1/video_separate/{{id}}/` | `conn_mod_def::GK8WWB5BUzA::MERJYR_gRMixSLN0Km8Nqg` |
| Delete Video Separate | DELETE | `/api/v1/video_separate/{{id}}/` | `conn_mod_def::GK8WVZa_XLA::LcuLX0YbQGi5sweGM8SHYQ` |
| Update Video Separate (by ID) | PATCH | `/api/v1/video_separate/{{id}}/` | `conn_mod_def::GK8WWMJ0Ebg::Oeuh8X6SSFSa2lvI4JU3PQ` |

### CalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendar Events | GET | `/api/v2/calendar-events/` | `conn_mod_def::GK8WUQgIHfg::Ei5-JJH0Tb21yF5YdGjHnw` |
| Schedule a Bot for a Calendar Event | POST | `/api/v2/calendar-events/{{id}}/bot/` | `conn_mod_def::GK8WUajdkFA::6DFFW_dnRH-P0e9pxxFczQ` |
| Unschedule a Bot for a Calendar Event | DELETE | `/api/v2/calendar-events/{{id}}/bot/` | `conn_mod_def::GK8WUajBKsg::XKvvbkevTEev_-V711riBw` |

### ZoomMeetingsToCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| List Zoom Meeting to OAuth Credential Mappings | GET | `/api/v2/zoom-meetings-to-credentials/` | `conn_mod_def::GK8WVIQ4Yrg::JiS6aruXSNijHka5YHoBUw` |
| List Zoom Meeting to OAuth Credential Mappings | GET | `/api/v2/zoom-meetings-to-credentials/` | `conn_mod_def::GK8WW3325fg::btPfp2FMQ5Wwpr0H9QJkCg` |
| List Zoom Meeting to OAuth Credential Mappings | GET | `/api/v2/zoom-meetings-to-credentials/` | `conn_mod_def::GK8WW4HZLSA::F_7B1kdLRGiiG3CTFL9n5g` |

### AudioMixed

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audio Mixed | GET | `/api/v1/audio_mixed/` | `conn_mod_def::GK8WVaI-M-A::v0UGxTwUR-u85ySGAtbK_w` |
| Retrieve Audio Mixed | GET | `/api/v1/audio_mixed/{{id}}/` | `conn_mod_def::GK8WVuJpoJg::zyLZokUsQ-GIDx1M9DO8dw` |
| Delete an Audio Mixed Artifact | DELETE | `/api/v1/audio_mixed/{{id}}/` | `conn_mod_def::GK8WVQRFLYg::R2EZli9OQjGEIz4E_Tpz8g` |

### Recording

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Recording by ID | GET | `/api/v1/recording/{{id}}/` | `conn_mod_def::GK8WV5vcKRA::4rSah2bGQB-tjEQBybbseg` |

2 more Recording actions are available through search.

This lists 90 of 126 actions. For anything not here, call `search_one_platform_actions` with platform `recall-ai`. The full catalog is at https://www.withone.ai/knowledge/recall-ai.

## When a call fails

The error comes from Recall AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/recall-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
