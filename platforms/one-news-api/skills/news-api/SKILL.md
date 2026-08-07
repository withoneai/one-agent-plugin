---
name: news-api
description: NewsAPI.ai is an AI-powered news data API that provides structured, real-time and historical news content from global sources, enabling developers to search, filter, and analyze articles with enriched metadata such as entities, sentiment, and event clustering for analytics, monitoring, and AI applications. Read and write NewsApi data through One: events, articles, topics, breakingevents, languagedetection, contentcategorization and more, 25 actions with real parameter documentation. Use whenever the user asks to look something up in NewsApi, create or update a record there, or build code against the NewsApi API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: news-api
  generated-from: one-knowledge-base
---

# NewsApi through One

NewsAPI.ai is an AI-powered news data API that provides structured, real-time and historical news content from global sources, enabling developers to search, filter, and analyze articles with enriched metadata such as entities, sentiment, and event clustering for analytics, monitoring, and AI applications.

One exposes NewsApi through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `news-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm NewsApi is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real NewsApi account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Event's Details | GET | `/event/getEvent` | `conn_mod_def::GKSxYtKfJxg::BqC5B7uEQzWHainu8-Y0kg` |
| Identify the Recent Event That Best Matches Input Text | GET | `/getEventForText` | `conn_mod_def::GKSxY_peHug::1QWGU4TnRoCg6jDkRb07xw` |
| Obtain Events for a Topic Page | GET | `/event/getEventsForTopicPage` | `conn_mod_def::GKSxYlI1ipA::F7jZnEtVSfWbWasDvrFljQ` |
| Retrieve Events | GET | `/event/getEvents` | `conn_mod_def::GKSxYvthNEg::7JWpncWjQMqn_SM90REtrg` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Article Details | GET | `/article/getArticle` | `conn_mod_def::GKSxXlbKdOg::dFHzMXDhRC2B1oCQ44k_FA` |
| Get Articles | GET | `/api/v1/article/getArticles` | `conn_mod_def::GKSxX6R3nVA::DUE5txOjTLqmFckrph_7Bg` |
| Get Articles for a Topic Page | GET | `/article/getArticlesForTopicPage` | `conn_mod_def::GKSxXmlkiqg::fO3lOUvRScSIfb44kgQ_Cg` |
| Map an Article URL to an Internal Article URI | GET | `/articleMapper` | `conn_mod_def::GKSxXcup4Sg::2OLzWGWJSXyoEqWM776yJg` |

### Topics

| Action | Method | Path | Action id |
|---|---|---|---|
| Train a Topic on Twitter | GET | `/trainTopicOnTwitter` | `conn_mod_def::GKSxZNlxrhA::r6uFHaELRf2yJBcUpOBhHA` |
| Train a Topic Using Your Own Documents | GET | `/trainTopic` | `conn_mod_def::GKSxZKKFIhA::0V1wS8gZR9WVNddzHBzfNA` |

### BreakingEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Breaking Events | GET | `/event/getBreakingEvents` | `conn_mod_def::GKSxYzvKzDg::Dj81Ge1vRp-m10oHefo3lw` |

### LanguageDetection

| Action | Method | Path | Action id |
|---|---|---|---|
| Detect the Language of Input Text | GET | `/detectLanguage` | `conn_mod_def::GKSxY9ZAbHg::pLsrg-5WRoaR3ZGwsn82VA` |

### ContentCategorization

| Action | Method | Path | Action id |
|---|---|---|---|
| Categorize Content | GET | `/categorize` | `conn_mod_def::GKSxY9ZEUJA::yQMB7GYVQZCQRn5Tezhr_Q` |

### ArticleInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Article Information | GET | `/extractArticleInfo` | `conn_mod_def::GKSxY9ZpgBg::-5cCdMOCTVKPt6s1jTkqmA` |

### SemanticSimilarity

| Action | Method | Path | Action id |
|---|---|---|---|
| Compute Semantic Similarity of Two Documents | GET | `/semanticSimilarity` | `conn_mod_def::GKSxY9jA1cg::a1dtvuf7SUWTRZdFXhS5oA` |

### MinuteStreamArticles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Minute Stream Articles | GET | `/minuteStreamArticles` | `conn_mod_def::GKSxXmF9NgA::bjbbWSSgRw2JCTPJr-ZLCg` |

### Sources

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Source URIs Matching a Source Name or URL | GET | `/suggestSourcesFast` | `conn_mod_def::GKSxYEFXa3g::F6S0bhh6TqaMTat8aW9eog` |

### AuthorSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Author URI Suggestions by Author Name | GET | `/suggestAuthorsFast` | `conn_mod_def::GKSxYEruf3g::b5fV6wFYTy2SW-kRjKb_BQ` |

### LocationUriSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Location URI Suggestions for a Location Name | GET | `/suggestLocationsFast` | `conn_mod_def::GKSxYGQWJkA::expw3zIZTZyuHuv4f3g5Lw` |

### Concepts

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Concept URIs by Label Prefix | GET | `/suggestConceptsFast` | `conn_mod_def::GKSxYIKr5FA::2_e6NCUbS_y197f9kH27Tg` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Suggest Category URIs by Label Prefix | GET | `/suggestCategoriesFast` | `conn_mod_def::GKSxYKtFM9A::xArVl1f6TAaD1U9kBjSBnA` |

### MinuteStreamEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Minute Stream Events | GET | `/minuteStreamEvents` | `conn_mod_def::GKSxYf1ZFaA::qKyQtDmqSrmHvlDcmUyASw` |

### Sentiment

| Action | Method | Path | Action id |
|---|---|---|---|
| Vocabulary Based Sentiment Detection | GET | `/sentiment` | `conn_mod_def::GKSxZLGq4TA::SuSAs6pYTye_4PC70YFFiA` |

### SentimentRNN

| Action | Method | Path | Action id |
|---|---|---|---|
| Compute Sentiment Using a Neural Network Model | GET | `/sentimentRNN` | `conn_mod_def::GKSxZLYBYkA::u2KzckAQSYO6jGxoHc4gPQ` |

### Annotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Annotate a Document for Entities and Concepts | GET | `/annotate` | `conn_mod_def::GKSxZOIYLDg::d7sSh9neSPCAlPlQFPjvvA` |

## When a call fails

The error comes from NewsApi, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/news-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
