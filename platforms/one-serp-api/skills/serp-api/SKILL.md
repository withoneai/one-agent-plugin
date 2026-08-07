---
name: serp-api
description: SerpApi is a real-time Google Search API that enables developers to retrieve search engine result data including organic results, maps, images, and news, without being blocked. Read and write SerpApi data through One: amazonproductpageresults, amazonsearch, serpapibaidusearch, bingcopilotsearch, appleappstoreapps, serpapiduckduckgosearch and more, 54 actions with real parameter documentation. Use whenever the user asks to look something up in SerpApi, create or update a record there, or build code against the SerpApi API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: serp-api
  generated-from: one-knowledge-base
---

# SerpApi through One

SerpApi is a real-time Google Search API that enables developers to retrieve search engine result data including organic results, maps, images, and news, without being blocked.

One exposes SerpApi through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `serp-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SerpApi is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SerpApi account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### AmazonProductPageResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Amazon Product Page Result | GET | `/search.json` | `conn_mod_def::GJ6Zw2uSl2o::O1y9KbhRSeqhk6nV2y1jFw` |

### AmazonSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon | GET | `/search.json` | `conn_mod_def::GJ6Zw4g1z2A::dIKjylhgTna9NmjSFJFmIA` |

### SerpApiBaiduSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Baidu Results | GET | `/search.json` | `conn_mod_def::GJ6Zw6dyuVM::kvvqpAd9R0-eTJtU_lIzVA` |

### BingCopilotSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bing Copilot (SerpApi) | GET | `/search.json` | `conn_mod_def::GJ6Zw3a46GU::PGrD5FjQQPOuliQonrCVUQ` |

### AppleAppStoreApps

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Apple App Store Apps | GET | `/search.json` | `conn_mod_def::GJ6Zw5W_kt8::MHiVtkNFTjWWMGo0DG1ejQ` |

### SerpApiDuckDuckGoSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search DuckDuckGo Results | GET | `/search.json` | `conn_mod_def::GJ6ZxFoQLR0::3SHUaCKdRl-uLI8RUWJg3Q` |

### SerpApiEbaySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search eBay Listings | GET | `/search.json` | `conn_mod_def::GJ6ZxIpKVSc::Fg2fPGTTSM6lhyqOERpd5g` |

### DuckDuckGoLightResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search DuckDuckGo Light Results | GET | `/search.json` | `conn_mod_def::GJ6ZxIMcic4::KmDWhaKVQKKDGlRIaBx5Kw` |

### SerpApiBingSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bing Results | GET | `/search.json` | `conn_mod_def::GJ6ZxLQ9BN4::zVFSGDYnT0qzvIVLzZIF5w` |

### BingImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bing Images | GET | `/search.json` | `conn_mod_def::GJ6ZxVFsGLc::fIUBsh9xSweBuXUZ5qf1Kw` |

### FacebookProfileResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Profile Results | GET | `/search.json` | `conn_mod_def::GJ6Zxenz32k::Hf6lMf7eQwyjg1elZSzsUg` |

### GoogleAdsTransparencyCenterAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Ads Transparency Center Ads (by advertiser ID or text) | GET | `/search.json` | `conn_mod_def::GJ6Zxfr4y_E::abrZR7ZlStOVWenBgGyOng` |

### GoogleAutocompleteSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Autocomplete Suggestions | GET | `/search.json` | `conn_mod_def::GJ6ZxjfdLGs::dOyrTcqdSz-9qovDthtsJg` |

### GoogleAiModeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Google AI Mode Search | GET | `/search.json` | `conn_mod_def::GJ6ZxrFeYqI::7SxIrJqXQYqf6xV_SmnWsw` |

### GoogleAiOverviewResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google AI Overview Results (Extra Request) | GET | `/search.json` | `conn_mod_def::GJ6ZxkQDido::NJH5WwbySxmSgNHi7Z1HWQ` |

### GoogleEventsResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Events Results | GET | `/search.json` | `conn_mod_def::GJ6Zx1PH6mg::kSnniOybSOCV8MifvzHzqQ` |

### GoogleHotels

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Hotels | GET | `/search.json` | `conn_mod_def::GJ6Zx33Hjs4::cYlHabZTT5SQ-7BbLgvGDQ` |

### GoogleFinanceResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Finance Results | GET | `/search.json` | `conn_mod_def::GJ6Zx7ozY6Y::lHPCuhvjTumDXlPQ_r_T3w` |

### GoogleFlights

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Flights | GET | `/search.json` | `conn_mod_def::GJ6Zx6S3hRk::RLBpBW6vTg2MBfCmICimFw` |

### GoogleForumsResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Forums Results | GET | `/search.json` | `conn_mod_def::GJ6ZyGMyPjQ::-ymf-b-rTJuabhq67pXi2w` |

### GoogleImmersiveProductDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Immersive Product Details (by page_token) | GET | `/search.json` | `conn_mod_def::GJ6ZyQlzG40::DpZsVOj5Q3uKQop1nJgNcQ` |

### GoogleLensResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Lens Results (Image Search) | GET | `/search.json` | `conn_mod_def::GJ6ZyR97MTw::DiVbnPiXT26vye2s6uj4uw` |

### GoogleImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Images | GET | `/search.json` | `conn_mod_def::GJ6ZyWBYllc::rGUSoq4BR8erZHDOkorz6g` |

### GoogleJobsResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Jobs Results | GET | `/search.json` | `conn_mod_def::GJ6ZyRmnMfo::u20ttMoCTL2gsz1ggS-gQg` |

### GoogleImagesLight

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Images (Light) | GET | `/search.json` | `conn_mod_def::GJ6ZyVisCZw::qukHSiACQbyU2Pe3CE36Yg` |

### GoogleLocalServicesAds

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Local Services Ads | GET | `/search.json` | `conn_mod_def::GJ6ZygQxqgo::r78mSCREQA2Qx_9kERElpg` |

### GoogleLightSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Google Light Search | GET | `/search.json` | `conn_mod_def::GJ6ZyhzxE4g::WQsR1wx5TTS5p1AMyeQbMA` |

### GoogleMapsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Maps | GET | `/search.json` | `conn_mod_def::GJ6ZyhF4UK0::_ZOXlRsOQIqv8EjgWe6apQ` |

### GoogleLocalResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Local Results | GET | `/search.json` | `conn_mod_def::GJ6ZyiCXDx0::H2aRSwExTvykudxdHw11lg` |

### GoogleMapsListingReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Maps Listing Reviews | GET | `/search.json` | `conn_mod_def::GJ6ZysNkteM::VJ8RlcjxS527COWukVFhHA` |

### GoogleNewsLight

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News (Light) | GET | `/search.json` | `conn_mod_def::GJ6Zys-0Hx8::f-gazxnaTzqkgXlGq4W06A` |

### GooglePatents

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Patents | GET | `/search.json` | `conn_mod_def::GJ6ZytBWRc8::RSWO-MSZSl6vdF1d-aOscg` |

### GooglePlaySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Play Store | GET | `/search.json` | `conn_mod_def::GJ6ZysO9ly4::Tpf3Wu5qTU2d7DZ6By2Hzg` |

### GoogleNews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News | GET | `/search.json` | `conn_mod_def::GJ6ZyvzkL2A::nmHuwTqPTKqdCcxz0Y-Ztg` |

### GoogleReverseImageSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Google Reverse Image Search | GET | `/search.json` | `conn_mod_def::GJ6Zy8-VF3E::Uj8qH49NRtSdu_52MJGjBQ` |

### GoogleRelatedQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Related Questions (People Also Ask) Results | GET | `/search.json` | `conn_mod_def::GJ6Zy-y7SoI::KWFNy_idS4-aMVsd_RNwHQ` |

### GoogleSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Search Results | GET | `/search.json` | `conn_mod_def::GJ6Zy-104j8::od3CVwSAS0GWFerwMQjcKw` |

### GoogleScholar

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar | GET | `/search.json` | `conn_mod_def::GJ6ZzCeNjjM::nskZXrdESqmGqNPQyORqIA` |

### GoogleShoppingSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Shopping Search Results | GET | `/search.json` | `conn_mod_def::GJ6ZzMYxjNQ::Kx2kdND_QPer8ZGqh4snAg` |

### GoogleTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Trends | GET | `/search.json` | `conn_mod_def::GJ6ZzWMc0-U::wzfBgYnITI670BwLMS1PXA` |

### GoogleShoppingLight

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Shopping (Light) | GET | `/search.json` | `conn_mod_def::GJ6ZzY1Ka5I::Kwufg9X6SPGfBRJk9zAyfg` |

### GoogleShortVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Short Videos (SERP) | GET | `/search.json` | `conn_mod_def::GJ6ZzYrCxKQ::IEEkjjQrQjiNb08Suw7-Nw` |

### GoogleTravelExplore

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Travel Explore (Destinations & Flights) | GET | `/search.json` | `conn_mod_def::GJ6ZzayjaWU::VSG4Dm37SJOcyuszC78z3A` |

### GoogleVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Videos (SERP) | GET | `/search.json` | `conn_mod_def::GJ6Zzs4y3O8::sLH-Kfz_Qdmw_Si9hm1bSg` |

### HomeDepotProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search The Home Depot Products | GET | `/search.json` | `conn_mod_def::GJ6Zz7NYTnI::4tw5R_C8QUuPVWasolem5Q` |

### SerpApiYandexSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Yandex Results | GET | `/search.json` | `conn_mod_def::GJ6Z0ILXAjs::ACZJ9lztTAuVFCKuv98RuA` |

### SerpApiYouTubeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search YouTube | GET | `/search.json` | `conn_mod_def::GJ6Z0J9QAD0::23UH4G0lSYunxw9UO89NEA` |

### YelpSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Yelp (SerpApi) | GET | `/search.json` | `conn_mod_def::GJ6Z0IPALzw::Pn5E58TmRquKsBoaalgT8A` |

### WalmartProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Walmart Products (Search Results) | GET | `/search.json` | `conn_mod_def::GJ6Z0KFXGF8::3UJvQl_ETiKhCnFCuhdLug` |

### YahooSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Yahoo Search Results | GET | `/search.json` | `conn_mod_def::GJ6Z0IK59kA::D8wtLuw9Sgas4XHRHqkOqA` |

### NaverResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Naver Results | GET | `/search.json` | `conn_mod_def::GJ6Zz4x1ifo::P3g58183Q6OWM52cEBpU0A` |

### TripadvisorSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Tripadvisor | GET | `/search.json` | `conn_mod_def::GJ6Zz3G8qig::fxjITBYqTxCI7niiEDyM3w` |

### GoogleVideosLight

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Videos (Light) | GET | `/search.json` | `conn_mod_def::GJ6Zz57ymgI::YoWBqH0qQOKDbFILMqDHGw` |

### OpenTableRestaurantReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get OpenTable Restaurant Reviews | GET | `/search.json` | `conn_mod_def::GJ6Zz3cpXek::tRkEbv-EQWSfX4vse0ai2Q` |

## When a call fails

The error comes from SerpApi, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/serp-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
