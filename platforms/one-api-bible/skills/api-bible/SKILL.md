---
name: api-bible
description: API.Bible is a scripture API platform that provides structured access to Bible translations, books, chapters, verses, audio, and related metadata, allowing developers to build Bible apps, study tools, search experiences, and faith-based content integrations. Read and write API Bible data through One: books, bibles, sections, audiobibles, chapters, verses and more, 19 actions with real parameter documentation. Use whenever the user asks to look something up in API Bible, create or update a record there, or build code against the API Bible API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: api-bible
  generated-from: one-knowledge-base
---

# API Bible through One

API.Bible is a scripture API platform that provides structured access to Bible translations, books, chapters, verses, audio, and related metadata, allowing developers to build Bible apps, study tools, search experiences, and faith-based content integrations.

One exposes API Bible through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `api-bible` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm API Bible is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real API Bible account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Books

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Book for a Bible | GET | `/v1/bibles/{{bibleId}}/books/{{bookId}}` | `conn_mod_def::GMK3smdU1EU::UqaaldSXTC6BlQ7e2Mg3tA` |
| List Books in a Bible | GET | `/v1/bibles/{{bibleId}}/books` | `conn_mod_def::GMK3slb6s2k::pQZ691g1SuCLJQPKbAO78A` |
| List Books in an Audio Bible | GET | `/v1/audio-bibles/{{bibleId}}/books` | `conn_mod_def::GMK3smP7rhM::4onhKXnsSciMYKh1pt2CYA` |

### Bibles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bible | GET | `/v1/bibles/{{bibleId}}` | `conn_mod_def::GMK3sliNnQE::_VdoA_tTTAycVGcwgqRykw` |
| List Available Bibles | GET | `/v1/bibles` | `conn_mod_def::GMK3smUQiz0::DUm8pb4eTpOpCFWB1q9ALg` |
| Search a Bible | GET | `/v1/bibles/{{bibleId}}/search` | `conn_mod_def::GMK3svU-ocA::660PZeU3Qui1_Zfwc7F7KA` |

### Sections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Section for a Bible | GET | `/v1/bibles/{{bibleId}}/sections/{{sectionId}}` | `conn_mod_def::GMK3swEpu0Y::aQcnu4AtSVeL3nUhZzDVbQ` |
| List Sections in a Book | GET | `/v1/bibles/{{bibleId}}/books/{{bookId}}/sections` | `conn_mod_def::GMK3s3vCNp4::rzUR8fiCT_KYaYizKFIBqg` |
| List Sections in a Chapter | GET | `/v1/bibles/{{bibleId}}/chapters/{{chapterId}}/sections` | `conn_mod_def::GMK3s7aywP0::TxvDs7-sRIOKCFOo0FQvEQ` |

### AudioBibles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audio Bible | GET | `/v1/audio-bibles/{{bibleId}}` | `conn_mod_def::GMK3sZ-OdHM::8YTCtc3bQgOhPWk06WoThw` |
| List Available Audio Bibles | GET | `/v1/audio-bibles` | `conn_mod_def::GMK3sdQhhrY::vLcB4SH_S9KN0ERFhl7uwQ` |

### Chapters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chapter for a Bible | GET | `/v1/bibles/{{bibleId}}/chapters/{{chapterId}}` | `conn_mod_def::GMK3sxAbo7s::NFY7xmiXQ3a4lQVUXx_pXg` |
| List Chapters in a Bible Book | GET | `/v1/bibles/{{bibleId}}/books/{{bookId}}/chapters` | `conn_mod_def::GMK3styAmAg::cdx1CVwSQxGRHu2eZJfUeQ` |

### Verses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Verse from a Bible | GET | `/v1/bibles/{{bibleId}}/verses/{{verseId}}` | `conn_mod_def::GMK3s5hOw2I::uUrQvz1hSiKYJUY2fNzBJg` |
| List Verses in a Chapter for a Bible | GET | `/v1/bibles/{{bibleId}}/chapters/{{chapterId}}/verses` | `conn_mod_def::GMK3s3zyxtw::FfJvwk5sQNitYFglfs6pag` |

### AudioChapter

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audio Chapter for a Bible | GET | `/v1/audio-bibles/{{bibleId}}/chapters/{{chapterId}}` | `conn_mod_def::GMK3sZ41jRc::OrTZtwUlSy6Nsb_PJkmsuA` |

### AudioBooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audio Book for a Bible | GET | `/v1/audio-bibles/{{bibleId}}/books/{{bookId}}` | `conn_mod_def::GMK3saZUYok::EPqtIGVvRYSwdMCUjxTNTw` |

### AudioChapters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Audio Chapters in an Audio Bible Book | GET | `/v1/audio-bibles/{{bibleId}}/books/{{bookId}}/chapters` | `conn_mod_def::GMK3sbUMGP8::YvkXHa4mTYCawDRkteeqTA` |

### Passages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Passage for a Bible | GET | `/v1/bibles/{{bibleId}}/passages/{{passageId}}` | `conn_mod_def::GMK3swN-_3E::4zgJeBR9QReo20eZiKi0sw` |

## When a call fails

The error comes from API Bible, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/api-bible

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
