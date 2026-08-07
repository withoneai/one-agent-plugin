---
name: coin-market-cap
description: CoinMarketCap is a cryptocurrency market data platform that provides price, market capitalization, trading volume, exchange, and asset metadata through web tools and APIs, allowing developers, traders, and analysts to track digital assets and integrate crypto market intelligence into applications. Read and write CoinMarketCap data through One: historicalcryptocurrencyquotes, cryptocurrencylistings, cryptocurrencymarketpairs, cryptocurrencymetadata, cryptocurrencyohlcvlatest, cryptocurrencyohlcvhistorical and more, 51 actions with real parameter documentation. Use whenever the user asks to look something up in CoinMarketCap, create or update a record there, or build code against the CoinMarketCap API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: coin-market-cap
  generated-from: one-knowledge-base
---

# CoinMarketCap through One

CoinMarketCap is a cryptocurrency market data platform that provides price, market capitalization, trading volume, exchange, and asset metadata through web tools and APIs, allowing developers, traders, and analysts to track digital assets and integrate crypto market intelligence into applications.

One exposes CoinMarketCap through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `coin-market-cap` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm CoinMarketCap is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real CoinMarketCap account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### HistoricalCryptocurrencyQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Cryptocurrency Quotes | GET | `/v1/cryptocurrency/quotes/historical` | `conn_mod_def::GMkK3T_Xqog::ue4XTdOGTLalXGKibetMSw` |
| Get Historical Cryptocurrency Quotes v2 | GET | `/v2/cryptocurrency/quotes/historical` | `conn_mod_def::GMkK21Jmzeg::Z0Y3GghpQX-XpwmFog22YA` |
| Get Historical Cryptocurrency Quotes v3 | GET | `/v3/cryptocurrency/quotes/historical` | `conn_mod_def::GMkK2-busxg::yGgS0TGAQOG5Bx_Oqs_COg` |

### CryptocurrencyListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List New Cryptocurrency Listings | GET | `/v1/cryptocurrency/listings/new` | `conn_mod_def::GMkK2pDA0IA::kJ5CsYM3QDqvLbzAyGCQ-A` |
| Listings Latest for Cryptocurrencies | GET | `/v1/cryptocurrency/listings/latest` | `conn_mod_def::GMkK2s6cVwg::JOZ9b7yWTkiNuDy52tRnug` |

### CryptocurrencyMarketPairs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Cryptocurrency Market Pairs | GET | `/v2/cryptocurrency/market-pairs/latest` | `conn_mod_def::GMkK2pg4W_g::yDpX3JlaTU6I5GZA9Y7i1w` |
| Get Latest Cryptocurrency Market Pairs | GET | `/v1/cryptocurrency/market-pairs/latest` | `conn_mod_def::GMkK3HEmJyg::j99Y3sdZRXSbWQySNVSJfQ` |

### CryptocurrencyMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cryptocurrency Metadata v1 | GET | `/v1/cryptocurrency/info` | `conn_mod_def::GMkK3Hh3AGA::3gIGeV_7Roeg77hnzNVzTw` |
| Get Cryptocurrency Metadata v2 | GET | `/v2/cryptocurrency/info` | `conn_mod_def::GMkK20Crrkg::5CPef7y8SHShOdiSSICUPQ` |

### CryptocurrencyOhlcvLatest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest OHLCV Values for Cryptocurrencies | GET | `/v1/cryptocurrency/ohlcv/latest` | `conn_mod_def::GMkK3Pkze8A::2NdCYVWcTO2E2Kb5e6YiyQ` |
| OHLCV Latest Using Cryptocurrency v2 | GET | `/v2/cryptocurrency/ohlcv/latest` | `conn_mod_def::GMkK20Cx3FA::9m4wPQvsRAaA8RfJXhiQHw` |

### CryptocurrencyOhlcvHistorical

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical OHLCV for Cryptocurrencies | GET | `/v1/cryptocurrency/ohlcv/historical` | `conn_mod_def::GMkK3IGgJ8A::BcY23g-9QfuYSWCn6HkJ7w` |
| OHLCV Historical Using Cryptocurrency v2 | GET | `/v2/cryptocurrency/ohlcv/historical` | `conn_mod_def::GMkK21iIHBg::3gLkIx0QT4GXwjgD7xD6PA` |

### CryptocurrencyQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Cryptocurrency Quotes | GET | `/v1/cryptocurrency/quotes/latest` | `conn_mod_def::GMkK3Plbz_g::gp0ooAIrS86c0nvYwLK0hQ` |
| Get Latest Cryptocurrency Quotes v2 | GET | `/v2/cryptocurrency/quotes/latest` | `conn_mod_def::GMkK2-h9Qlg::bmG4ku6dQBGCgug3IffV-A` |

### Tools

| Action | Method | Path | Action id |
|---|---|---|---|
| Price Conversion Using Tools v1 | GET | `/v1/tools/price-conversion` | `conn_mod_def::GMkK3RnH8AA::nU23mED-Tgu5PvqagdTGFA` |
| Price Conversion Using Tools v2 | GET | `/v2/tools/price-conversion` | `conn_mod_def::GMkK39-og6A::WATkTbsQRXqce0UwrWfYqA` |

### ContentPosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Content Posts | GET | `/v1/content/posts/latest` | `conn_mod_def::GMkK3rixMTA::EtcPZfspToaBIp7qlGhmwQ` |
| Top Posts Using Content Posts | GET | `/v1/content/posts/top` | `conn_mod_def::GMkK33UIV1A::L2pPmObtRbC2t0wznhML3Q` |

### GlobalMetricsQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Global Metrics Quotes | GET | `/v1/global-metrics/quotes/historical` | `conn_mod_def::GMkK33xLcQA::RklOuBjXQU223jLzqBsyww` |
| Get Latest Global Metrics Quotes | GET | `/v1/global-metrics/quotes/latest` | `conn_mod_def::GMkK33KUePA::tHMU48TKSMqRWfvW2fpiYA` |

### BlockchainStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Statistics Latest Using Blockchain | GET | `/v1/blockchain/statistics/latest` | `conn_mod_def::GMkK2fve3KA::rXAY2ZQnS66xxNhaqtn61w` |

### CryptocurrencyAirdrop

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cryptocurrency Airdrop Information | GET | `/v1/cryptocurrency/airdrop` | `conn_mod_def::GMkK2fvmBKg::MGq2icbGTBuHMzXZo1S4HQ` |

### CryptocurrencyCategory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Cryptocurrency Category | GET | `/v1/cryptocurrency/category` | `conn_mod_def::GMkK2gmsyDg::zDP0WZELRZ-UR0mymQVL2A` |

### CryptocurrencyAirdrops

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cryptocurrency Airdrops | GET | `/v1/cryptocurrency/airdrops` | `conn_mod_def::GMkK2g0x91g::eLR0cuB2TVial_ZiMQfpqg` |

### CryptocurrencyCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cryptocurrency Categories | GET | `/v1/cryptocurrency/categories` | `conn_mod_def::GMkK2hoHNsg::6NcEOKagQRyOTmlvJ3b1Xw` |

### CryptocurrencyListingsHistorical

| Action | Method | Path | Action id |
|---|---|---|---|
| Historical Listings for Cryptocurrencies | GET | `/v1/cryptocurrency/listings/historical` | `conn_mod_def::GMkK2pK0V2g::J-5lM8jCSmSRp0Zsl2iaCg` |

### Cryptocurrency

| Action | Method | Path | Action id |
|---|---|---|---|
| Cryptocurrency Map | GET | `/v1/cryptocurrency/map` | `conn_mod_def::GMkK2qDxd8A::tfjNd989T6iC-bs-ig9V7w` |

### PricePerformanceStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Price Performance Stats for Cryptocurrencies | GET | `/v2/cryptocurrency/price-performance-stats/latest` | `conn_mod_def::GMkK202cuug::ffA70V1pR4CXt-FuoGdGfw` |

### Cryptocurrencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Trending Latest for Cryptocurrencies | GET | `/v1/cryptocurrency/trending/latest` | `conn_mod_def::GMkK28xFfTA::eb4KBBkGRjKUzzpsFkcv8Q` |

### CryptocurrencyTrending

| Action | Method | Path | Action id |
|---|---|---|---|
| Trending Gainers Losers Using Cryptocurrency Trending | GET | `/v1/cryptocurrency/trending/gainers-losers` | `conn_mod_def::GMkK29J-HCA::gtsp5IQVQC6aUCztCXA4UA` |

### CryptocurrencyTrendingMostVisited

| Action | Method | Path | Action id |
|---|---|---|---|
| Most Visited Trending Cryptocurrencies | GET | `/v1/cryptocurrency/trending/most-visited` | `conn_mod_def::GMkK2-jjXvg::_7kKdIdoSQGyva3hfTamcw` |

### FcasQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest FCAS Quotes Using Flipside Crypto | GET | `/v1/partners/flipside-crypto/fcas/quotes/latest` | `conn_mod_def::GMkK3FtWkLg::KLWw48xZTX6TQw9kB99-0g` |

### FcasListings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest FCAS Listings Using Flipside Crypto | GET | `/v1/partners/flipside-crypto/fcas/listings/latest` | `conn_mod_def::GMkK3F1AqZA::1Uz-YtWSTnuqshqaNNtFYA` |

### CryptocurrencyPricePerformanceStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Cryptocurrency Price Performance Stats | GET | `/v1/cryptocurrency/price-performance-stats/latest` | `conn_mod_def::GMkK3Pmd2jg::THVHlJMtR3qMwYdsdMMvjA` |

### ExchangeAssets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchange Assets | GET | `/v1/exchange/assets` | `conn_mod_def::GMkK3a9hNZA::M6QQyufUR1C7KXtZqMyAdQ` |

### ExchangeIdMap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange ID Map | GET | `/v1/exchange/map` | `conn_mod_def::GMkK3a-aceg::pWi4NeqtTBCsC6WsX0Ef-Q` |

### ExchangeInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Exchange Info | GET | `/v1/exchange/info` | `conn_mod_def::GMkK3cKNC9A::AbtFFFYfTZmA232U0EVHNQ` |

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Latest Exchanges | GET | `/v1/exchange/listings/latest` | `conn_mod_def::GMkK3cOHmHA::v2aWAZTgTl-LWMFr3PyI7Q` |

### ExchangeMarketPairs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Exchange Market Pairs | GET | `/v1/exchange/market-pairs/latest` | `conn_mod_def::GMkK3dQef3g::z19RvhmXRBaPYyNzPLI6LQ` |

### FiatCurrencies

| Action | Method | Path | Action id |
|---|---|---|---|
| Map Fiat Currencies | GET | `/v1/fiat/map` | `conn_mod_def::GMkK3jsRIKA::soHviOCGTzG_gj5gJC6Chw` |

### ExchangeQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Exchange Quotes | GET | `/v1/exchange/quotes/latest` | `conn_mod_def::GMkK3jz9PRg::Web5B9mhSaeHU8yOzhD-rQ` |

### FearAndGreed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Latest CMC Crypto Fear and Greed Value | GET | `/v3/fear-and-greed/latest` | `conn_mod_def::GMkK3kazPxA::IKJSYQiST9KpUlbljBs0Ag` |

### ExchangeQuotesHistorical

| Action | Method | Path | Action id |
|---|---|---|---|
| Historical Quotes for Exchanges | GET | `/v1/exchange/quotes/historical` | `conn_mod_def::GMkK3kdXJBg::Mfn25POySDOOBQ7gSBgisA` |

### HistoricalCmcCryptoFearAndGreedValues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical CMC Crypto Fear and Greed Values | GET | `/v3/fear-and-greed/historical` | `conn_mod_def::GMkK3lTnUwA::d_1N_se1R9CNs7d5XyZZ-w` |

### ContentPostComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Content Post Comments | GET | `/v1/content/posts/comments` | `conn_mod_def::GMkK3r0uQVg::Grdq-WOMSUe-EyW6q9NRVA` |

### CommunityTrendingTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Trending Token Community Data | GET | `/v1/community/trending/token` | `conn_mod_def::GMkK3syjUSg::Vq0UsjGiQKa7q5XVjS5mDQ` |

### CommunityTrendingTopics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Community Trending Topics | GET | `/v1/community/trending/topic` | `conn_mod_def::GMkK3ueC0YA::YTDdPC9kQwSTaIf-TGEJrg` |

### Content

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Content | GET | `/v1/content/latest` | `conn_mod_def::GMkK3w6rXqg::ZcC2x_ybT6Sv26SRwUykvw` |

### PostmanConversionTools

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Postman Conversion Tools | GET | `/v1/tools/postman` | `conn_mod_def::GMkK33L3Nkg::-ZPLncAwQ6KwjHdIkYuZxA` |

### ApiKeyInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Info | GET | `/v1/key/info` | `conn_mod_def::GMkK33PsDfg::9nVF_uTDQZyPhdIPSICdgQ` |

## When a call fails

The error comes from CoinMarketCap, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/coin-market-cap

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
