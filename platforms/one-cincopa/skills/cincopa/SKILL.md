---
name: cincopa
description: Cincopa is a digital asset management and media hosting platform that provides tools for storing, organizing, publishing, and embedding videos, images, audio, and documents, allowing teams to manage media libraries and deliver content across websites and applications. Read and write Cincopa data through One: assets, subdomain, galleries, live, galleryassets, livestreams and more, 38 actions with real parameter documentation. Use whenever the user asks to look something up in Cincopa, create or update a record there, or build code against the Cincopa API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: cincopa
  generated-from: one-knowledge-base
---

# Cincopa through One

Cincopa is a digital asset management and media hosting platform that provides tools for storing, organizing, publishing, and embedding videos, images, audio, and documents, allowing teams to manage media libraries and deliver content across websites and applications.

One exposes Cincopa through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `cincopa` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Cincopa is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Cincopa account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upload URL | GET | `/asset.get_upload_url.json` | `conn_mod_def::GK9tKO-pNxg::SCiQCHmPRYC5WAsf2fZCww` |
| List Assets | GET | `/v2/asset.list.json` | `conn_mod_def::GK9tKQwEjbg::41fuIIVRS0Ka3mXhDYcq2g` |
| Delete an Asset | POST | `/asset.delete.json` | `conn_mod_def::GK9tKLXSd8A::qAbzXIDwRXyLlLYryVUx_w` |
| Resync an Asset | POST | `/v2/asset.resync.json` | `conn_mod_def::GK9tKa1ScBg::KwTfq18JS8Cd0WOUTGe5iA` |
| Set Asset Metadata | POST | `/asset.set_meta.json` | `conn_mod_def::GK9tKdeRHrA::G5uHmxRlTmCJt6kMr4Gamw` |
| Upload Asset From URL | POST | `/asset.upload_from_url.json` | `conn_mod_def::GK9tKbbf8uA::1K7QUsz_ThWmmDDtgSv6Tg` |

### Subdomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Verify Subdomain | GET | `/portal.check.json` | `conn_mod_def::GK9tLiJaWag::khLfytaUQlGP_L-Gqvhx_g` |
| Create Subdomain If Available | POST | `/portal.cease.json` | `conn_mod_def::GK9tLXGrgAA::G_jkbMbBSNytj2KhsayVEQ` |
| Remove Subdomain | POST | `/portal.remove.json` | `conn_mod_def::GK9tLVmV7Ug::Qg2R9VYTRn6GJPZSSP2N4w` |
| Rename Subdomain | POST | `/v2/portal.rename.json` | `conn_mod_def::GK9tLU4X4Tg::UEt935MTQmC1XrKzonw8BQ` |
| Save Subdomain | POST | `/portal.set.json` | `conn_mod_def::GK9tLmdB_6g::eqmsZkGDTmGLnJmgWmWVyQ` |

### Galleries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Galleries | GET | `/v2/gallery.list.json` | `conn_mod_def::GK9tKnqgthA::19pat69jQaulpQJvdxoKPg` |
| Create a Gallery | POST | `/gallery.create.json` | `conn_mod_def::GK9tKt4wjMg::zRAPYdjzQC6li-bHa_VMTg` |
| Delete a Gallery | POST | `/v2/gallery.delete.json` | `conn_mod_def::GK9tKoxJIKA::FqtbhsMSSeaspgDqy_pkrQ` |
| Set Master to Gallery | POST | `/gallery.set_master.json` | `conn_mod_def::GK9tK7oW8BA::imSd6d4AT1eeoQTlTVTyvw` |

### Live

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Live Stream | GET | `/live.delete.json` | `conn_mod_def::GK9tLJP8ghg::dM9Yj3hgRe2IB4hv7-xXZQ` |
| Reset a Live Stream | GET | `/v2/live.reset.json` | `conn_mod_def::GK9tLHGCcXA::nkW9kXFJSCeStHSa43L_1w` |
| Start a Live Stream | GET | `/v2/live.start.json` | `conn_mod_def::GK9tLLuibQA::AVCbaVw7RuClu2hCce-QrQ` |

### GalleryAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Gallery Assets | POST | `/v2/gallery.add_item.json` | `conn_mod_def::GK9tKa68jzg::WCIHatGtRjuugu01DhJguQ` |
| Remove Gallery Assets | POST | `/gallery.remove_item.json` | `conn_mod_def::GK9tK8oBJCg::fUrmJxwIQNydKB02OSniOg` |

### LiveStreams

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Live Stream | GET | `/v2/live.create.json` | `conn_mod_def::GK9tLGPnq5g::Tw91Ft1lRkiKSUltC_52Rw` |
| List Live Streams | GET | `/v2/live.list.json` | `conn_mod_def::GK9tLGdaKZA::bNTOQbvTQAeUxpONwsZg7Q` |

### Webhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Create or Update a Slack Webhook | POST | `/webhook.set_slack.json` | `conn_mod_def::GK9tLxz6O1g::BtGMIl43SrOdSLaX_2NmPQ` |
| Create or Update a Webhook | POST | `/v2/webhook.set.json` | `conn_mod_def::GK9tLjcpcAg::8WgjysO-TM-BMpgWcCgqZw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/webhook.list.json` | `conn_mod_def::GK9tLwt6hqg::DNF5g0iCSGyKJfBD_Jk7kQ` |
| Delete a Webhook | POST | `/webhook.delete.json` | `conn_mod_def::GK9tLwdBWWg::vQDSw0NIQ1u4_HzwC3JIxw` |

### AssetUploadFromUrlAbort

| Action | Method | Path | Action id |
|---|---|---|---|
| Abort Upload From URL | POST | `/v2/asset.upload_from_url_abort.json` | `conn_mod_def::GK9tKLSLQiA::EdTvAFonTgm9tbCEcp7Gxw` |

### UploadStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upload Status | GET | `/asset.upload_from_url_get_status.json` | `conn_mod_def::GK9tKMnI4WA::9OSL5-euTyKk1X9tI7DDog` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tags | GET | `/asset.get_tags.json` | `conn_mod_def::GK9tKbha-iA::QJ_AimGRTPaNffJdPepLGQ` |

### GalleryItems

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Gallery Items | GET | `/v2/gallery.get_items.json` | `conn_mod_def::GK9tKoxdrlg::Q1y7arzlQPeuZBRtA4ONVw` |

### GalleryDownloadLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Gallery Download Link | GET | `/gallery.download.json` | `conn_mod_def::GK9tKyDiepA::2psCKmBkQqqYuQY1MfyvkQ` |

### ConnectionValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate API Connection | GET | `/ping.json` | `conn_mod_def::GK9tK7OAahA::MaEhUUveTWeNdbJH9yH1CA` |

### Gallery

| Action | Method | Path | Action id |
|---|---|---|---|
| Set Gallery Metadata | POST | `/v2/gallery.set_meta.json` | `conn_mod_def::GK9tK7o3ziA::W8o_H0VQQw-XlrQ13u3G7w` |

### TemporaryToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Temporary Token | GET | `/token.get_temp.json` | `conn_mod_def::GK9tK98yvUg::kZ-1mBEzSn-V8hZE9w7k2w` |

### Portals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Portals | GET | `/v2/portal.list.json` | `conn_mod_def::GK9tLXW8cHg::pBMEwlx-RUidWZV9-agIog` |

### LiveStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Stop a Live Stream | GET | `/v2/live.stop.json` | `conn_mod_def::GK9tLZAXkhg::xAnXHz40RtCU8yGNsV5MGQ` |

### UploadTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Invite Upload Token | GET | `/upload.get_upload_token.json` | `conn_mod_def::GK9tLiQPeAA::zWBs8M8rSj6WqhFZFzTReA` |

### GalleryIframe

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HTML Iframe to Manage a Gallery | GET | `/v2/upload.iframe` | `conn_mod_def::GK9tLlKwTCA::dDELAr9-RRKyNSsNIRD99g` |

## When a call fails

The error comes from Cincopa, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/cincopa

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
