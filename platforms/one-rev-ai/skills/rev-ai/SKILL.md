---
name: rev-ai
description: Rev AI is a speech technology platform that provides APIs for automatic speech recognition, speaker diarization, and language processing, allowing developers to transcribe, analyze, and build voice-enabled workflows from audio and video content at scale. Read and write Rev AI data through One: sentimentanalysisjobs, topicextractionjobs, languageidentificationjobs, jobs, forcedalignmentjobs, speechtotextjobs and more, 34 actions with real parameter documentation. Use whenever the user asks to look something up in Rev AI, create or update a record there, or build code against the Rev AI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: rev-ai
  generated-from: one-knowledge-base
---

# Rev AI through One

Rev AI is a speech technology platform that provides APIs for automatic speech recognition, speaker diarization, and language processing, allowing developers to transcribe, analyze, and build voice-enabled workflows from audio and video content at scale.

One exposes Rev AI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `rev-ai` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Rev AI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Rev AI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SentimentAnalysisJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sentiment Analysis Job by ID | GET | `/sentiment_analysis/v1/jobs/{{id}}` | `conn_mod_def::GMBWPjyNatw::sYO1UaGwTRax-h3IZZlxrg` |
| Get Sentiment Analysis Result Using Sentiment Analysis v1 Jobs | GET | `/sentiment_analysis/v1/jobs/{{id}}/result` | `conn_mod_def::GMBWPl-l0a8::ixR6HnPJQcWve83t0__ifA` |
| List Sentiment Analysis Jobs | GET | `/sentiment_analysis/v1/jobs` | `conn_mod_def::GMBWPljsnI0::AUL9UGwcTbOqaIPlTjBegg` |
| Delete Sentiment Analysis Job by ID | DELETE | `/sentiment_analysis/v1/jobs/{{id}}` | `conn_mod_def::GMBWPMZpviI::DVMss8wKQfWKmjhnqlyOow` |
| Submit Sentiment Analysis Job | POST | `/sentiment_analysis/v1/jobs` | `conn_mod_def::GMBWPtmbtJ8::nt2EwRsxQGupLcs1Sr4xSA` |

### TopicExtractionJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Topic Extraction Job by ID | GET | `/topic_extraction/v1/jobs/{{id}}` | `conn_mod_def::GMBWPs-6yDo::NuQKSDH5TyGTEcPjtcJYpw` |
| List Topic Extraction Jobs | GET | `/topic_extraction/v1/jobs` | `conn_mod_def::GMBWPmbk7NY::svf2bLNuQe-T-0DFvFoS3Q` |
| Delete Topic Extraction Job by ID | DELETE | `/topic_extraction/v1/jobs/{{id}}` | `conn_mod_def::GMBWPLPqzKA::3nCviUXWQNu9lgpNMsyEWw` |
| Submit Topic Extraction Job | POST | `/topic_extraction/v1/jobs` | `conn_mod_def::GMBWP6suwwk::EtuVoWl0T7a2iWWm8B1Bgg` |

### LanguageIdentificationJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Language Identification Job by ID | GET | `/languageid/v1/jobs/{{id}}` | `conn_mod_def::GMBWPYmhCBo::D7MnMWedTUKCYGjDhjlAoQ` |
| List Language Identification Jobs | GET | `/languageid/v1/jobs` | `conn_mod_def::GMBWPjjOvEI::4Y4r0DyjTGyqkhkeQ6PBSQ` |
| Delete a Language Identification Job by ID | DELETE | `/languageid/v1/jobs/{{id}}` | `conn_mod_def::GMBWPPK31Tk::2GfywBiVQb2vCaucZI9V5A` |
| Submit Language Identification Job | POST | `/languageid/v1/jobs` | `conn_mod_def::GMBWPumtpqw::1LeB1uj-SXO7cl49FZ7Dbw` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job by ID | GET | `/speechtotext/v1/jobs/{{id}}` | `conn_mod_def::GMBWPX4gm4Y::-j01f0WfR4aPBiXl4e2Gng` |
| Delete Job by ID | DELETE | `/speechtotext/v1/jobs/{{id}}` | `conn_mod_def::GMBWPBhms8o::wl5FCQFXR-i-fEbRVVoKRA` |
| Submit Transcription Job Using Speech to Text v1 Jobs | POST | `/speechtotext/v1/jobs` | `conn_mod_def::GMBWP3rPwwg::788tVi0rQ36vrILnJVyOyg` |

### ForcedAlignmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Forced Alignment Job by ID | GET | `/alignment/v1/jobs/{{id}}` | `conn_mod_def::GMBWPPffU7Y::JdJGHl9vRKifATEsj08_mA` |
| List Forced Alignment Jobs | GET | `/alignment/v1/jobs` | `conn_mod_def::GMBWPczoHd0::XbhWp1ZjQL-PogUlCila7g` |
| Delete a Forced Alignment Job by ID | DELETE | `/alignment/v1/jobs/{{id}}` | `conn_mod_def::GMBWPAnPXOo::JayPsXm_QayHoUNyiqXZYQ` |

### SpeechToTextJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Captions for a Speech-to-Text Job | GET | `/speechtotext/v1/jobs/{{id}}/captions` | `conn_mod_def::GMBWO_9EGFg::aeHdSTv3SRKmqxH8zL9vuw` |
| List Speech-to-Text Jobs | GET | `/speechtotext/v1/jobs` | `conn_mod_def::GMBWPZifBGk::WsK_pWGrQAGETHRUXVE89A` |

### CustomVocabulary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Vocabulary | GET | `/vocabularies/{{id}}` | `conn_mod_def::GMBWQGZsIv0::7z-aUX1ZS7ewYrCwd02ulg` |
| Delete Custom Vocabulary | DELETE | `/vocabularies/{{id}}` | `conn_mod_def::GMBWQDiTudk::JzBk0YiDRsiBcX1F6Oh4Rg` |

### TranslatedCaptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Translated Captions for a Transcription Job | GET | `/speechtotext/v1/jobs/{{id}}/captions/translation/{{language}}` | `conn_mod_def::GMBWO_28Qmo::7fVpXGWjQwO0ofxXEl2cWQ` |

### TranslatedTranscript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Translated Transcript Using Speech to Text v1 Jobs | GET | `/speechtotext/v1/jobs/{{id}}/transcript/translation/{{language}}` | `conn_mod_def::GMBWP8dmRYU::8ke7t2H3QXyfBuUx7OpAsw` |

### TopicExtractionResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Topic Extraction Result Using Topic Extraction v1 | GET | `/topic_extraction/v1/jobs/{{id}}/result` | `conn_mod_def::GMBWPvmRrhc::-zt5j08oTPu8JYy3RBAROQ` |

### SpeechToTextJobTranscriptSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transcript Summary for a Speech-to-Text Job by ID | GET | `/speechtotext/v1/jobs/{{id}}/transcript/summary` | `conn_mod_def::GMBWP3vMO74::o2I2JmMQR5W9WTQlHGcCUg` |

### SpeechToTextV1Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transcript Using Speech to Text v1 Jobs (by ID) | GET | `/speechtotext/v1/jobs/{{id}}/transcript` | `conn_mod_def::GMBWP5BwwSE::IYRZAo2HRN-v1lhwCtG8Sw` |

### AlignmentJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Forced Alignment Job | POST | `/alignment/v1/jobs` | `conn_mod_def::GMBWPtthVbA::lfIKObAzQMWRcj9hqYso_A` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Information | GET | `/speechtotext/v1/account` | `conn_mod_def::GMBWPEdXOvA::Ww_UET3aTNWY9UrRDVjHew` |

### ForcedAlignmentTranscript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transcript for a Forced Alignment Job | GET | `/alignment/v1/jobs/{{id}}/transcript` | `conn_mod_def::GMBWPMonMZ8::JprXT4iGSuOkc4sW8W-PVQ` |

### LanguageIdentificationResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Language Identification Result Using Languageid v1 Jobs | GET | `/languageid/v1/jobs/{{id}}/result` | `conn_mod_def::GMBWPaVZ94c::DwZlxuWaQYCX-WocYu1huw` |

### CustomVocabularies

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Custom Vocabulary | POST | `/vocabularies` | `conn_mod_def::GMBWQEjWYrQ::maA-z6S8TUqRXRIVKAU_AA` |

### Vocabularies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Custom Vocabularies | GET | `/vocabularies` | `conn_mod_def::GMBWQGJdrpE::BNWsfvrqReGqIZPR3q9P9Q` |

## When a call fails

The error comes from Rev AI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/rev-ai

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
