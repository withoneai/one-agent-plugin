---
name: voiceflow
description: Voiceflow is a collaborative platform that enables teams to design, prototype, and build conversational AI experiences like voice assistants and chatbots without writing code. Read and write Voiceflow data through One: knowledgebasedocuments, transcripts, transcriptevaluations, transcriptproperties, knowledgebasetags, state and more, 64 actions with real parameter documentation. Use whenever the user asks to look something up in Voiceflow, create or update a record there, or build code against the Voiceflow API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: voiceflow
  generated-from: one-knowledge-base
---

# Voiceflow through One

Voiceflow is a collaborative platform that enables teams to design, prototype, and build conversational AI experiences like voice assistants and chatbots without writing code.

One exposes Voiceflow through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `voiceflow` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Voiceflow is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Voiceflow account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### KnowledgeBaseDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| List Knowledge Base Documents | GET | `/knowledge-base/docs` | `conn_mod_def::GJ8SoMM8IbA::edsASkwoTGKjjyx9-ccP5A` |
| List Knowledge Base Documents | GET | `/knowledge-base/docs` | `conn_mod_def::GJ8SoTI-JiI::6MZAqUsITeqwA9YqxsjmDg` |
| Retrieve a Knowledge Base Document’s Chunks | GET | `/v1/knowledge-base/docs/{{documentId}}` | `conn_mod_def::GJ8SoKmaoUQ::1By0sbruSzGCLB2Rph6Z3w` |
| Retrieve Knowledge Base Document Chunks | GET | `/v1/knowledge-base/docs/{{documentId}}` | `conn_mod_def::GJ8SoKhoi4Y::sH2mpKDSQcySDFsIgFllCQ` |
| Replace a Knowledge Base Document File | PUT | `/v1/knowledge-base/docs/{{documentId}}/upload` | `conn_mod_def::GJ8SotOKrTU::3Vr62hKZQaOc_cSU3S_Uxg` |
| Replace a Knowledge Base URL Document | PUT | `/knowledge-base/docs/{{documentId}}/upload` | `conn_mod_def::GJ8So28sVWU::F0rDkYsKTWCvR1j6MpiuWQ` |
| Update a Document Chunk’s Metadata | PATCH | `/v1/knowledge-base/docs/{{documentId}}/chunk/{{chunkId}}` | `conn_mod_def::GJ8So1ibf6s::BfqKGIF4T2GzTGMrxOPqqw` |
| Update a Knowledge Base Document’s Metadata | PATCH | `/v1/knowledge-base/docs/{{documentId}}` | `conn_mod_def::GJ8So0-ZI0Q::1z8XDe8sRgWCN5L_DdooMg` |
| Upload a Knowledge Base Document (File) | POST | `/knowledge-base/docs/upload` | `conn_mod_def::GJ8SpAhE-To::HvnvkI-5QqGyev6s9QcknA` |
| Upload a Knowledge Base Document (Non-URL) | POST | `/knowledge-base/docs/upload` | `conn_mod_def::GJ8SpAMBrHw::fz6z-9fLToK7eVY6Zpg89A` |
| Upload a Knowledge Base Document from a URL | POST | `/knowledge-base/docs/upload/url` | `conn_mod_def::GJ8SpBCwBx0::yX7AXgeWRdS5E4zaKBCCjA` |
| Upload a Knowledge Base URL Document | POST | `/knowledge-base/docs/upload` | `conn_mod_def::GJ8SpKzIpic::ytH0NTzZTtKEOmLOOBOhbw` |

1 more KnowledgeBaseDocuments actions are available through search.

### Transcripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Project’s Unread Transcripts Status | GET | `/transcripts/{{projectId}}/hasUnreadTranscripts` | `conn_mod_def::GJ8SpxXj6SI::xxolhIynRbCVpmkoejML9w` |
| Export a Transcript’s Dialog (CSV) | GET | `/v2/transcripts/{{projectId}}/{{transcriptId}}/export` | `conn_mod_def::GJ8SqBA1_Vo::4cuQMw8OSEqtv2WDWn6ZLQ` |
| Fetch a Project’s Transcripts | GET | `/v2/transcripts/{{projectId}}` | `conn_mod_def::GJ8SqAwhHQU::tbpGshwbT3meOAuRqhf6uA` |
| Get a Project Transcript’s Dialog Turns | GET | `/v2/transcripts/{{projectId}}/{{transcriptId}}` | `conn_mod_def::GJ8SqAlRdNU::f2bCZMDUTQS_NBARnUn-ug` |
| Get a Transcript (with Logs) | GET | `/v1/transcript/{{transcriptId}}` | `conn_mod_def::GJ8SpRzgzZw::fLIzp6GDSEiqPrlbqchqKA` |
| Add a Report Tag to a Transcript | PUT | `/v2/transcripts/{{projectId}}/{{transcriptId}}/report_tag/{{reportTagId}}` | `conn_mod_def::GJ8Sp49S9D0::B8VDzrUsQxO_en9tzxgnDg` |
| Create Transcript | PUT | `/v2/transcripts` | `conn_mod_def::GJ8Sp4Kr98A::mdHa_eJDQaiOzhQENHA5aw` |
| Create Utterance Annotation for a Transcript | PUT | `/v2/transcripts/{{projectId}}/{{transcriptId}}/annotation/utteranceAddedTo` | `conn_mod_def::GJ8Sp5LLV18::VLiF6CMaQN-Tb7mIn-K4mA` |
| Delete a Project Transcript | DELETE | `/v2/transcripts/{{projectId}}/{{transcriptId}}` | `conn_mod_def::GJ8Sp37gyeQ::w2WpdkQNTS6REfB2xUXg0A` |
| Delete a Transcript | DELETE | `/v1/transcript/{{transcriptId}}` | `conn_mod_def::GJ8SpQ87YDE::cexL1_OdT2y5wd-GtpOAFA` |
| List a Project’s Transcripts | POST | `/v1/transcript/project/{{projectId}}` | `conn_mod_def::GJ8SpbG3QJk::0neZtgIOTU-GLzjzvIi7lQ` |
| Update a Project Transcript | PATCH | `/v2/transcripts/{{projectId}}/{{transcriptId}}` | `conn_mod_def::GJ8Sp_vpBJU::jpT3-gnLSVyCJLswk0vHIA` |

### TranscriptEvaluations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transcript Evaluation | GET | `/v1/transcript-evaluation/{{evaluationId}}` | `conn_mod_def::GJ8SpiK_NF4::6pf1U8J3S3aCOZqg10VqRQ` |
| List a Project’s Transcript Evaluations | GET | `/v1/transcript-evaluation/project/{{projectId}}` | `conn_mod_def::GJ8SpiA0Zno::icyFowdbTd28YWZSQTDnsA` |
| Create a Transcript Evaluation | POST | `/transcript-evaluation` | `conn_mod_def::GJ8SpRrwHyA::p7pmA_f4TXOvzvuwTSdwNw` |
| Delete a Transcript Evaluation | DELETE | `/transcript-evaluation/{{evaluationId}}` | `conn_mod_def::GJ8SpQuK6jE::2vd4BMYiSYSZ7C7GQcxgvw` |
| Queue Transcript Evaluations | POST | `/transcript-evaluation/queue` | `conn_mod_def::GJ8SpihgQnY::Jo-ORSEOQhKA_dYLB-K5LQ` |
| Run an Evaluation for a Transcript | POST | `/v1/transcript-evaluation/{{evaluationId}}/transcript/{{transcriptId}}` | `conn_mod_def::GJ8Spig5rR4::X0E02U9_RqiefBP8d8xOGA` |
| Update a Transcript Evaluation | PATCH | `/v1/transcript-evaluation/{{evaluationId}}` | `conn_mod_def::GJ8Sppf9RBY::hjawNbv_Q5-svyLOC6nHEQ` |

### TranscriptProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transcript Property | GET | `/transcript-property/{{propertyId}}` | `conn_mod_def::GJ8SpqqRoOM::Uqxy65YsSZ23eYlGkvrmsg` |
| List a Project’s Transcript Properties | GET | `/v1/transcript-property/project/{{projectId}}` | `conn_mod_def::GJ8SppTjFHw::4Y_hLSsWSZO4SKkWapSJQw` |
| Create a Transcript Property | POST | `/transcript-property` | `conn_mod_def::GJ8SppdieB0::_NaLoQIWRiutuiXx06OWUg` |
| Delete a Transcript Property | DELETE | `/transcript-property/{{propertyId}}` | `conn_mod_def::GJ8SppiNEC4::FMBs1pt9Rf-EOQBn2omnGg` |
| Update a Transcript Property | PATCH | `/transcript-property/{{propertyId}}` | `conn_mod_def::GJ8Spw4SVwo::ZDiDGPs7RcGWoBSWXsR4Yw` |

### KnowledgeBaseTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Knowledge Base Tag Label | GET | `/knowledge-base/tags/{{tagId}}` | `conn_mod_def::GJ8SoSjeTsM::FvlNG8YvT3ud3IZOvykDxg` |
| List Knowledge Base Tags | GET | `/v3alpha/knowledge-base/tags` | `conn_mod_def::GJ8SoqkIeCg::bgO9coFZTXuO-ua6iZbJ5Q` |
| Create a Knowledge Base Tag | POST | `/v3alpha/knowledge-base/tags` | `conn_mod_def::GJ8SoCEMsAY::kS2YYabPTY6Yb-CCf--chA` |
| Delete a Knowledge Base Tag | DELETE | `/knowledge-base/tags/{{tagID}}` | `conn_mod_def::GJ8SoCsTLa0::nak0SUCtQwe6C_tG7KNfuA` |
| Update a Knowledge Base Tag Label | PATCH | `/v3alpha/knowledge-base/tags/{{tagId}}` | `conn_mod_def::GJ8So09cV6M::9bStl9vnTvC6Ww3K6C54_g` |

### State

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a User's State | GET | `/state/user/{{userId}}` | `conn_mod_def::GJ8SoTLYyeI::R-bAr9sCTlqCxdczWU3OKQ` |
| Delete a User's State | DELETE | `/state/user/{{userId}}` | `conn_mod_def::GJ8SoKRPtvE::pnrYVkm-SlOU4kWlJF-D3w` |
| Interact With a User’s Dialog Session | POST | `/state/user/{{userId}}/interact` | `conn_mod_def::GJ8SoTiqnIM::OD41zehAS2yL6uCx0BSlBQ` |
| Update a User’s State | PUT | `/state/user/{{userId}}` | `conn_mod_def::GJ8So9tgHuk::9NrpNmcvTfWEiEvZMSkvBA` |

### KnowledgeBaseDocs

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Knowledge Base Document | DELETE | `/v1/knowledge-base/docs/{{documentId}}` | `conn_mod_def::GJ8SoD8jLnQ::MbEtPKPZTh6Z4GLyTs_bNg` |
| Delete a Knowledge Base Document | DELETE | `/v1/knowledge-base/docs/{{documentId}}` | `conn_mod_def::GJ8SoCe06bM::jOeX1VqGRRaBZyONNV_fBw` |
| Replace a Knowledge Base Document (Non-URL) | PUT | `/v1/knowledge-base/docs/{{documentId}}/upload` | `conn_mod_def::GJ8SosVWpI8::1m7T9_SPSUy6_J7Nm00SlQ` |
| Replace a Knowledge Base URL Document | PUT | `/v1/knowledge-base/docs/{{documentId}}/upload/url` | `conn_mod_def::GJ8SouHilmE::4hHbDWNCRVGvDIzpXT4voA` |

### TranscriptPropertyValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Transcript’s Property Values | GET | `/v1/transcript-property-value/transcript/{{transcriptId}}` | `conn_mod_def::GJ8SpxATW80::Qavxuhk7Tb6zOsq1wo1hew` |
| Create a Transcript Property Value | POST | `/v1/transcript-property-value` | `conn_mod_def::GJ8Spws-Z80::Rpl2agQZR3S5C7FEai5e4A` |
| Delete a Transcript's Property Value | DELETE | `/v1/transcript-property-value/transcript/{{transcriptId}}/property/{{propertyId}}` | `conn_mod_def::GJ8SpxjXhlI::I4oG1-oGTAGOBcM7WuB4TQ` |

### KnowledgeBaseDocumentTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Attach Knowledge Base Tags to a Document | POST | `/knowledge-base/docs/{{documentId}}/tags/attach` | `conn_mod_def::GJ8SoDYB3Pg::Cv3R50aCSFalzlYX8xSy7w` |
| Detach Knowledge Base Tags from a Document | POST | `/knowledge-base/docs/{{documentId}}/tags/detach` | `conn_mod_def::GJ8SoKxg-a8::ovPCaQTcSPq4alMMbtdq_g` |

### InteractStream

| Action | Method | Path | Action id |
|---|---|---|---|
| Interact Stream (Advance a Project User’s Conversation Session) | POST | `/v2/project/{{projectId}}/user/{{userId}}/interact/stream` | `conn_mod_def::GJ8SojwnXjY::2DyuxyvZSX609v8zW0gwHw` |

### KnowledgeBase

| Action | Method | Path | Action id |
|---|---|---|---|
| Query the Knowledge Base | POST | `/knowledge-base/query` | `conn_mod_def::GJ8Sorg7i9A::taqgaQSORVWVr3H87W3RAA` |

### ProjectSessionEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Send an Event to a Project Session | POST | `/v2/project/{{projectId}}/session/{{sessionId}}/event` | `conn_mod_def::GJ8So1PeLos::wSZvojsdS4et46GiMftixg` |

### StateUserVariables

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a User’s State Variables | PATCH | `/state/user/{{userId}}/variables` | `conn_mod_def::GJ8So96pa3c::sb5OlArkRqeR8347Z1ZYqw` |

### UsageQueries

| Action | Method | Path | Action id |
|---|---|---|---|
| Query a Project’s Usage | POST | `/v1/query/usage` | `conn_mod_def::GJ8SpIFmWKo::T59JJHZuQa2a731LUDTFag` |

### UsageAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Query Usage for a Project (V2) | POST | `/v2/query/usage` | `conn_mod_def::GJ8SpH6qnoI::c9DSeXI5Q82E3gdYMrUz4w` |

### TranscriptEvaluation

| Action | Method | Path | Action id |
|---|---|---|---|
| Estimate Transcript Evaluation Cost | POST | `/v1/transcript-evaluation/estimate` | `conn_mod_def::GJ8SpiBU9Xc::cw9j-uV5TsSgII5FSxFl8w` |

### VersionExports

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Project Export (Version) | GET | `/v2/versions/{{versionId}}/export` | `conn_mod_def::GJ8SpH461wc::zkI6RSHxTMeQ_kjpD441tw` |

### TranscriptTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Transcript Tag | DELETE | `/v2/transcripts/{{projectId}}/{{transcriptId}}/report_tag/{{reportTagId}}` | `conn_mod_def::GJ8Sp5WqcLE::H4i4SY0dSvu0R838MIvATg` |

This lists 63 of 64 actions. For anything not here, call `search_one_platform_actions` with platform `voiceflow`. The full catalog is at https://www.withone.ai/knowledge/voiceflow.

## When a call fails

The error comes from Voiceflow, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/voiceflow

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
