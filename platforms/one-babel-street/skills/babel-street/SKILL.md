---
name: babel-street
description: Babel Street is a data intelligence platform that provides multilingual data discovery, entity analysis, and risk insights from open-source and enterprise information, enabling analysts and security teams to investigate threats, monitor events, and support operational decision-making through integrated APIs and tools. Read and write Babel Street data through One: supportedlanguages, morphology, categories, entities, events, relationships and more, 45 actions with real parameter documentation. Use whenever the user asks to look something up in Babel Street, create or update a record there, or build code against the Babel Street API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: babel-street
  generated-from: one-knowledge-base
---

# Babel Street through One

Babel Street is a data intelligence platform that provides multilingual data discovery, entity analysis, and risk insights from open-source and enterprise information, enabling analysts and security teams to investigate threats, monitor events, and support operational decision-making through integrated APIs and tools.

One exposes Babel Street through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `babel-street` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Babel Street is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Babel Street account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Supported Languages for Name Deduplication | GET | `/rest/v1/name-deduplication/supported-languages` | `conn_mod_def::GMAdpOKGFpI::uq8asC5eTemq_gdM8mx9eA` |
| Supported Languages | GET | `/rest/v1/language/supported-languages` | `conn_mod_def::GMAdpFgR-cw::L3ShCTBNQMiHnQagEH3oSA` |
| Supported Languages for Sentiment | GET | `/rest/v1/sentiment/supported-languages` | `conn_mod_def::GMAdp04nJkU::2EBc_j1JQt2WIIZ0Lsbxdg` |
| Supported Languages for Transliteration | GET | `/rest/v1/transliteration/supported-languages` | `conn_mod_def::GMAdp8x7kU4::giwG1ic3REOyppHzQVyfhg` |
| Supported Languages Using Entities Indoc Coref Server | GET | `/rest/v1/entities/indoc-coref-server/supported-languages` | `conn_mod_def::GMAdo4r2rwc::kNZB98LrTdmr5mXAIAg9BQ` |

### Morphology

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for a Morphology Feature | GET | `/rest/v1/morphology/{{morphoFeature}}/supported-languages` | `conn_mod_def::GMAdpSWNEbw::bT1CAhaGSVyBYSqXAKrrTA` |
| Supported Languages for Morphology | GET | `/rest/v1/morphology/supported-languages` | `conn_mod_def::GMAdpOj7lI4::_mEHV_eRRSa1CaISP-fLIg` |
| Morphology Analysis Using Morphology | POST | `/rest/v1/morphology/{{morphoFeature}}` | `conn_mod_def::GMAdpN1-gks::c6xTNmw1R3qRhdb_cOrfBg` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages | GET | `/rest/v1/categories/supported-languages` | `conn_mod_def::GMAdoxkwqeA::mnQkiUt3T-eIiOKxIzaHjA` |
| Identify Contextual Categories | POST | `/rest/v1/categories` | `conn_mod_def::GMAdovynsMo::OJYv9XVFS_eow8awkTIing` |

### Entities

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Entities | GET | `/rest/v1/entities/supported-languages` | `conn_mod_def::GMAdo5n_OeA::3w2aLEELSJi4a2TsgsoTZw` |
| Extract Entities | POST | `/rest/v1/entities` | `conn_mod_def::GMAdo_RtY4w::qaR-hTViR86mXkTX8Eulbw` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Events | GET | `/rest/v1/events/supported-languages` | `conn_mod_def::GMAdpF9KS10::9GI2WpXhSHieWPOc8MRVxg` |
| Extract Events | POST | `/rest/v1/events` | `conn_mod_def::GMAdo6PZF40::giTuktcdSd25iX0HCGTJWQ` |

### Relationships

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Relationships | GET | `/rest/v1/relationships/supported-languages` | `conn_mod_def::GMAdpkJItf0::v-cTrHynSxqwf4lVtriCig` |
| Extract Relationships | POST | `/rest/v1/relationships` | `conn_mod_def::GMAdpnOllWE::z917exgwRTi8PKWtwpdQdQ` |

### Sentences

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Sentences | GET | `/rest/v1/sentences/supported-languages` | `conn_mod_def::GMAdptXrs-A::VGYrnHcAQZyAx9D2nZrIqA` |
| Determine Sentences | POST | `/rest/v1/sentences` | `conn_mod_def::GMAdpuEZF9k::c4MNOEqmR8uVRYT5D_zHlg` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Tokens | GET | `/rest/v1/tokens/supported-languages` | `conn_mod_def::GMAdp1kZxIA::9sunrw4PQUGLzlg3xLUqyQ` |
| Tokenize Input | POST | `/rest/v1/tokens` | `conn_mod_def::GMAdp8yBpjI::cmzoSDVpRV6_mTtl8YPE_g` |

### Topics

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Topics | GET | `/rest/v1/topics/supported-languages` | `conn_mod_def::GMAdp8hpnZ0::wTkUdFx5SZOcmGcwcv_Jog` |
| Extract Topics | POST | `/rest/v1/topics` | `conn_mod_def::GMAdp8D9AVw::8wIpgolgS7C6kp7YE90AzQ` |

### GazetteerEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Gazetteer Entries for Entity Extraction | POST | `/rest/v1/entities/configuration/gazetteer/add` | `conn_mod_def::GMAdowmc3_0::3qdVJy-CSYGv8CuMN0IVGA` |

### AddressSimilarity

| Action | Method | Path | Action id |
|---|---|---|---|
| Address Similarity | POST | `/rest/v1/address-similarity` | `conn_mod_def::GMAdoxLql3I::ICNAqoSfRGSfYrNEnl-8uA` |

### EntityTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Entity Types | GET | `/rest/v1/entities/info` | `conn_mod_def::GMAdo5TjK-k::WqbCflf2QVibA9kfZc7bfw` |

### NameSimilaritySupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Name Similarity | GET | `/rest/v1/name-similarity/supported-languages` | `conn_mod_def::GMAdpbKHEzg::4KHTWiSwQ7GPXY4NNmMZww` |

### AddressSimilaritySupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Address Similarity | GET | `/rest/v1/address-similarity/supported-languages` | `conn_mod_def::GMAdowbwEG8::1nrDRZ_GRnqdhqoQ6GWJFA` |

### Language

| Action | Method | Path | Action id |
|---|---|---|---|
| Identify Language | POST | `/rest/v1/language` | `conn_mod_def::GMAdpFXPR70::VDOkRq7zTU2sIn5zXtxCjg` |

### Info

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Info | GET | `/rest/v1/info` | `conn_mod_def::GMAdpF-yeP8::_u778RwCRSyRU0_yuMknVg` |

### EventSchemas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Event Schemas | GET | `/rest/v1/events/info` | `conn_mod_def::GMAdpHWgAc4::34eECnQMTLSVt-IcT4ca7Q` |

### NameDeduplication

| Action | Method | Path | Action id |
|---|---|---|---|
| Name Deduplication | POST | `/rest/v1/name-deduplication` | `conn_mod_def::GMAdpNzkXqs::-U-4inUHQh2HWbN7sqkLzA` |

### NameSimilarity

| Action | Method | Path | Action id |
|---|---|---|---|
| Match Names | POST | `/rest/v1/name-similarity` | `conn_mod_def::GMAdpZCXnUQ::L_ub6LvFRTiIJwPKHupqcg` |

### BabelStreetAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Ping Babel Street Analytics | GET | `/rest/v1/ping` | `conn_mod_def::GMAdpZTtLD0::YwSpxxEoRHysxBk8o9_V_A` |

### NameTranslationSupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Name Translation | GET | `/rest/v1/name-translation/supported-languages` | `conn_mod_def::GMAdpau-5Ok::-BlnzcEvQxm8ALjq7iDBBg` |

### NameTranslation

| Action | Method | Path | Action id |
|---|---|---|---|
| Translate Names | POST | `/rest/v1/name-translation` | `conn_mod_def::GMAdpbrb-wc::pXF_HXfeQFywu_5_k53qNw` |

### RecordSimilaritySupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Record Similarity | GET | `/rest/v1/record-similarity/supported-languages` | `conn_mod_def::GMAdpidMEhk::oOehlFCMR-G-MKUtSnJesA` |

### Semantics

| Action | Method | Path | Action id |
|---|---|---|---|
| Similar Using Semantics | POST | `/rest/v1/semantics/similar` | `conn_mod_def::GMAdpjU-y98::N2abJ1O6Sdadt_hq6d6RBw` |

### RecordSimilarity

| Action | Method | Path | Action id |
|---|---|---|---|
| Record Similarity | POST | `/rest/v1/record-similarity` | `conn_mod_def::GMAdpj9HuX8::mXbMB-biTHaenEYDtxv8ZA` |

### SemanticsVector

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Embeddings Using Semantics Vector | POST | `/rest/v1/semantics/vector` | `conn_mod_def::GMAdptRlTgE::_4W3CZLUSnuO1_WqWsGTvw` |

### SemanticsVectorSupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Semantics Vector | GET | `/rest/v1/semantics/vector/supported-languages` | `conn_mod_def::GMAdpt2NWuc::BveuVNSuSxaufYoex9PYgw` |

### SemanticsSimilarSupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Semantics Similar | GET | `/rest/v1/semantics/similar/supported-languages` | `conn_mod_def::GMAdpuPVlys::w_CsR4PDSpOgYQJKM1JdmQ` |

### Sentiment

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyze Sentiment | POST | `/rest/v1/sentiment` | `conn_mod_def::GMAdp0TCGPs::LoQws7jXRMKcWfDb-HDlcg` |

### SyntaxDependenciesSupportedLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Supported Languages for Syntax Dependencies | GET | `/rest/v1/syntax/dependencies/supported-languages` | `conn_mod_def::GMAdp1lJ5FE::zSjzoLKmSie1XZDUWN2R5A` |

### SyntaxDependencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Dependencies Using Syntax | POST | `/rest/v1/syntax/dependencies` | `conn_mod_def::GMAdp15DA38::9iyhgcDYSgaKl8HRIuzk9w` |

### Transliteration

| Action | Method | Path | Action id |
|---|---|---|---|
| Transliteration | POST | `/rest/v1/transliteration` | `conn_mod_def::GMAdp8k1Jzw::MLZXmFSJSWO2ZphVoU_qIQ` |

## When a call fails

The error comes from Babel Street, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/babel-street

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
