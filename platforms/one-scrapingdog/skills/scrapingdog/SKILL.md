---
name: scrapingdog
description: Scrapingdog is an all‑in‑one web scraping API that handles rotating proxies, headless browser rendering, CAPTCHA solving, and offers dedicated endpoints (e.g., Google SERP, Amazon, LinkedIn), delivering structured HTML or JSON data effortlessly for scale-able data collection and LLM-ready pipelines. Read and write Scrapingdog data through One: googlepatents, googlescholarauthor, jobs, googletrends, googlemapssearch, googlemapsplaces and more, 72 actions with real parameter documentation. Use whenever the user asks to look something up in Scrapingdog, create or update a record there, or build code against the Scrapingdog API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: scrapingdog
  generated-from: one-knowledge-base
---

# Scrapingdog through One

Scrapingdog is an all‑in‑one web scraping API that handles rotating proxies, headless browser rendering, CAPTCHA solving, and offers dedicated endpoints (e.g., Google SERP, Amazon, LinkedIn), delivering structured HTML or JSON data effortlessly for scale-able data collection and LLM-ready pipelines.

One exposes Scrapingdog through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `scrapingdog` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Scrapingdog is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Scrapingdog account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### GooglePatents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Patent Details | GET | `/google_patents/details` | `conn_mod_def::GJ6YOCh83Uc::XAryG6GORgeVRR33RE9Gwg` |
| Search Google Patents Results | GET | `/google_patents` | `conn_mod_def::GJ6YOHOJZaQ::WG4VxUmRTJekOIKs-W_YVw` |

### GoogleScholarAuthor

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Google Scholar Author Profile | GET | `/google_scholar/author` | `conn_mod_def::GJ6YOtSEFi4::KuotjxD2QAuRo_cy8zbUAA` |
| Get a Google Scholar Author’s Citation | GET | `/google_scholar/author` | `conn_mod_def::GJ6YO2WzcoU::PxtVw-3nTGa05JYLvgxYWg` |

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Job Overview (Jobs Search Scraper) | GET | `/jobs` | `conn_mod_def::GJ6YPZzct1c::53sTPA3qRC6n-Rk1PxMnqw` |
| Scrape Jobs Search Results | GET | `/jobs` | `conn_mod_def::GJ6YPiNIb_g::j7V39erAR8eWRR66_LnTeA` |

### GoogleTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Trends “Trending Now” Results | GET | `/google_trends/trending_now/` | `conn_mod_def::GJ6YPP0L7ZM::-TtlE3ReQAOChTRoNAmyoA` |
| Get Google Trends Data | GET | `/google_trends` | `conn_mod_def::GJ6YPB2158E::35rMlpeAQT-0-PxB_5m-eQ` |

### GoogleMapsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Maps | GET | `/google_maps` | `conn_mod_def::GJ6YNlxk18g::c9-5DR_LQDyrAcfk7ry1_g` |

### GoogleMapsPlaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Maps Place Details | GET | `/google_maps/places` | `conn_mod_def::GJ6YNl8XoY0::JjUruCUyRS2XaIridaotHQ` |

### GoogleMapsPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Maps Posts | GET | `/google_maps/posts` | `conn_mod_def::GJ6YNqcu6u8::5kNob0n8Rsm31IHH-MWy7A` |

### GoogleNews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News | GET | `/google_news` | `conn_mod_def::GJ6YOh-12r8::vPYe7hnfTla3mEOs4bg73A` |

### GoogleScholarResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar Results | GET | `/google_scholar` | `conn_mod_def::GJ6YOuMvoI8::For8YblYQvWSsScUhZL79w` |

### GoogleShopping

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Shopping Results | GET | `/google_shopping` | `conn_mod_def::GJ6YPA3P0zA::bjLnwVw0QhWwpn-0e_DB7g` |

### GoogleVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Video Results | GET | `/google_videos` | `conn_mod_def::GJ6YPProwZQ::4qLtFASmTHy2Pwn1Kduitw` |

### Indeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape an Indeed Page (Parsed JSON) | GET | `/indeed` | `conn_mod_def::GJ6YPSscbxQ::_UFscmLzT9-weOnszTUmkQ` |

### LinkedInProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a LinkedIn Person Profile | GET | `/profile` | `conn_mod_def::GJ6YPfrCOPU::-ygCi8bARd6i0bcW_wgU3g` |

### WalmartAutocompleteSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Walmart Autocomplete Suggestions | GET | `/walmart/autocomplete` | `conn_mod_def::GJ6YPpRgE2c::OqL9SzhMQieJ2Kp1iDYLqA` |

### WalmartSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Walmart Search Results | GET | `/walmart/search` | `conn_mod_def::GJ6YQGhBKdI::Tq87GD-7QxyLyFCfvcNvlw` |

### Scrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Webpage | GET | `/scrape` | `conn_mod_def::GJ6YQHuRh4w::bfR07Q86SVmOPI31hHVd0w` |

### XProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an X (Twitter) Profile | GET | `/x/profile` | `conn_mod_def::GJ6YQLDoxLo::Ajg0GkvIQCuc2bBBsA6D0Q` |

### YoutubeComments

| Action | Method | Path | Action id |
|---|---|---|---|
| List YouTube Video Comments | GET | `/youtube/comments` | `conn_mod_def::GJ6YQXR7SYA::7StLPv4kRD6TNFgZregyCA` |

### ZillowSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Zillow Search Results | GET | `/zillow` | `conn_mod_def::GJ6YQfxK4Gg::1nUb546vQqqIowJQVOUL6g` |

### YoutubeVideo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a YouTube Video | GET | `/youtube/video` | `conn_mod_def::GJ6YQhG6HFY::muvVJ8lwTZSVfkXyYYXaGg` |

### AmazonOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Amazon Product Offers | GET | `/amazon/offers` | `conn_mod_def::GJ6YMMO6cSw::eoz_0YCPS26NmWqluz_ASA` |

### AmazonProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Amazon Product by ASIN | GET | `/amazon/product` | `conn_mod_def::GJ6YMP7ppWs::LBNl6zbLQ2SviZ_S2nMutQ` |

### GoogleImmersiveProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Immersive Product Details | GET | `/google_immersive_product` | `conn_mod_def::GJ6YNbR9IeQ::fPDNyELpTPe03v20_UEmIQ` |

### GoogleImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Images Results | GET | `/google_images` | `conn_mod_def::GJ6YNcpURTU::b5VA_goFRJqwr6WRT-AuOQ` |

### GoogleMapsReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Maps Reviews (by data_id) | GET | `/google_maps/reviews` | `conn_mod_def::GJ6YNl92Y-s::9QWToN9wTFCsWXD923uyIg` |

### GoogleShoppingProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Shopping Product Details (Deprecated) | GET | `/google_product` | `conn_mod_def::GJ6YOCzffQg::yUB6D7YNSsm_yArXjt7I5A` |

### GoogleScholarProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar Profiles | GET | `/google_scholar/profiles` | `conn_mod_def::GJ6YOq23VRg::WaQZj-RESyaowebhVjrhRg` |

### GoogleShorts

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Shorts Results | GET | `/google_shorts` | `conn_mod_def::GJ6YPBIxxhA::YZ-kAbbfSfObTbyMVySc6A` |

### GoogleSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Search Results | GET | `/google` | `conn_mod_def::GJ6YPFYglVM::1RpY2ZKdQ5qjNG9c8k_b2w` |

### WalmartProductReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Walmart Product Reviews | GET | `/walmart/reviews` | `conn_mod_def::GJ6YPspUwW8::mE5AgUfVQ4mlFPFM-tsC3Q` |

### WalmartProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Walmart Product Page (Scrape Walmart Product) | GET | `/walmart/product` | `conn_mod_def::GJ6YPwlp1is::ulP06Uu2SBGKbvZWnCQgkw` |

### XPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an X (Twitter) Post by Tweet ID | GET | `/x/post` | `conn_mod_def::GJ6YQGNDAaY::WkIYmuomRCK-V0Ry8rYYnA` |

### YoutubeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search YouTube | GET | `/youtube/search` | `conn_mod_def::GJ6YQT5IW-Y::M_MMmZcIS7CX2e2GyJbqtA` |

### YelpSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Yelp Using the Yelp Scraper API | GET | `/yelp/search` | `conn_mod_def::GJ6YQWJ3gqQ::tBVobVAJQ12LU9mX6wOndg` |

### YoutubeChannel

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Channel Details | GET | `/youtube/channel` | `conn_mod_def::GJ6YQXohjXQ::QsSnuIxlS-G1a3ohhDf-fg` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Account Usage (Credits & Concurrency) | GET | `/account` | `conn_mod_def::GJ6YMM5hSzU::f-nIMbE8SHiiuniQIyVNZA` |

### GoogleAiModeResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google AI Mode Results | GET | `/google/ai_mode` | `conn_mod_def::GJ6YM6tK-aA::OHUUyNa0TDGYgHe10lSXdg` |

### GoogleFinance

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Finance Results | GET | `/google_finance` | `conn_mod_def::GJ6YNCvu_XQ::vU43-g1dQzCXwiVfxIEf2Q` |

### GoogleAiOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Google AI Overview Results (Separate Request) | GET | `/google/ai_overview` | `conn_mod_def::GJ6YNDaD4cg::wduIqxLvT3agOnTkqdc2BQ` |

### AmazonAutocompleteSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Amazon Autocomplete Suggestions | GET | `/amazon/autocomplete` | `conn_mod_def::GJ6YMKG510s::nGkc6P9BQIeT1ctfZYQcXg` |

### AmazonReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| List Amazon Product Reviews | GET | `/amazon/reviews` | `conn_mod_def::GJ6YMSw1bkQ::-GzzIOC5RPeMVrVJU9BLMg` |

### EbayProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an eBay Product (Scrape eBay Product Page) | GET | `/ebay/product` | `conn_mod_def::GJ6YMphkkcI::VAn1SqZZRxuuMn-UCrc74g` |

### BingSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Bing Search Results | GET | `/bing/search` | `conn_mod_def::GJ6YMdPXbNI::Gda5mrqDSiKwcAj05PqZag` |

### AmazonSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Amazon Search Results | GET | `/amazon/search` | `conn_mod_def::GJ6YMgRoWeM::p-Q0guEIQJGn7UXOoDlLEQ` |

### DuckduckgoSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| DuckDuckGo Search (Scraper) — Supported Regions (`kl`) | GET | `/duckduckgo/search` | `conn_mod_def::GJ6YMo5phUY::tqbP_svYQmWYIftWzsvT0w` |

### FlipkartProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Flipkart Product (Scrape Flipkart Product Page) | GET | `/flipkart/product` | `conn_mod_def::GJ6YMqmOU5E::kcsCUNp6R3-gjhcsXAg2ww` |

### GoogleTrendsLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Trends Supported Locations | GET | `/google_trends/locations` | `conn_mod_def::GJ6YPMEYl9U::voGooSDHT9-cXRgQm72zFQ` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Company Profile | GET | `/profile` | `conn_mod_def::GJ6YMa4piRU::J9yc2i06QMGjOJ_ePCSU1w` |

### GoogleNewsResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google News Results | GET | `/google_news/v2` | `conn_mod_def::GJ6YOGemYMQ::JUxANNRKTzywxpFGNIN27Q` |

### GoogleTrendsAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Google Trends Autocomplete Suggestions | GET | `/google_trends/autocomplete` | `conn_mod_def::GJ6YO9273FY::XM-WHYo-SJ6PG9SSYCtO8g` |

### GoogleAutocomplete

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Autocomplete Suggestions | GET | `/google_autocomplete` | `conn_mod_def::GJ6YNC4SEUU::OIHAllyNRl-PTxRp5pNn9w` |

### BaiduSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Baidu | GET | `/baidu/search/` | `conn_mod_def::GJ6YMgirpyA::-UBDTWmKRKyYDOw1U8mGOw` |

### GoogleMapsPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Maps Photos for a Place (by data_id) | GET | `/google_maps/photos` | `conn_mod_def::GJ6YN6CE8WQ::J-387UDBT7GEHWnjOZgplw` |

### DuckduckgoSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape DuckDuckGo Search Results | GET | `/duckduckgo/search/` | `conn_mod_def::GJ6YMeCB60g::FNedzUNbQleC_F8rm3wIcQ` |

### ProfilePosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape a Profile Post (Person or Company) | GET | `/profile/post` | `conn_mod_def::GJ6YPa-gRhA::GGpReEKaT--J0p4RG867aw` |

### EbaySearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape eBay Search Results | GET | `/ebay/search` | `conn_mod_def::GJ6YMrv-oYs::1FXdjH54SWq3raU9_OqWvQ` |

### GoogleScholarCitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Scholar Citations (Cite) for a Result | GET | `/google_scholar/cite` | `conn_mod_def::GJ6YOq7crjA::DVWXkG0vSD-RzO1Sua-NDg` |

### GoogleLens

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Lens Results | GET | `/google_lens` | `conn_mod_def::GJ6YNYETMNk::nRJniu30SaeF_9FktHVAKA` |

### GoogleLocalResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Local Results | GET | `/google_local` | `conn_mod_def::GJ6YNX_mQkA::UabZrA-IQvCqGhaN4njJxw` |

### GoogleJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Jobs Results | GET | `/google_jobs` | `conn_mod_def::GJ6YNYT9Zdo::SSpSKkIyRW6eVikVrHYqsA` |

### WebhookScrapingRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Web Scraping Request to a Saved Webhook Destination | GET | `/webhook` | `conn_mod_def::GJ6YQE5RvMY::un6ti3RkSjCMTzX40XX7Rw` |

### Screenshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Take a Screenshot of a Web Page | GET | `/screenshot` | `conn_mod_def::GJ6YP8HSTck::I0LOQtLqTk-q0IA6zqeE-Q` |

### ScrapingdogScrape

| Action | Method | Path | Action id |
|---|---|---|---|
| Send a POST Request via Scrapingdog (Scrape with Forwarded POST Data) | POST | `/scrape` | `conn_mod_def::GJ6YPam6F8U::3zdSRHQUQEuzg42WZD7aPQ` |

### YoutubeTranscripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Video Transcripts | GET | `/youtube/transcripts` | `conn_mod_def::GJ6YQRkRV9s::P_PkFL9aSAaN9C1-UzCiYw` |

### UniversalSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Universal Search API | GET | `/search` | `conn_mod_def::GJ6YPrxR4Ag::0pwHBYNQS8ScwZCrURYpNA` |

### MyntraProducts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Myntra Product | GET | `/myntra/product` | `conn_mod_def::GJ6YPMxrTls::z2XtExYGTYO3AxPay7SRPw` |

### GoogleFlights

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Flights Results | GET | `/google_flights` | `conn_mod_def::GJ6YNNzffHA::l_89sF-8QT2QwPic_uYqdA` |

### GoogleHotels

| Action | Method | Path | Action id |
|---|---|---|---|
| Scrape Google Hotels Results | GET | `/google_hotels` | `conn_mod_def::GJ6YNHf8BMM::Kia8ZuMJTtGhUChfX1Gu7Q` |

## When a call fails

The error comes from Scrapingdog, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/scrapingdog

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
