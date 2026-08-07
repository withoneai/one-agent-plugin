---
name: coinranking
description: Coinranking is a cryptocurrency market data platform that provides live coin prices, market capitalizations, rankings, trading volume, trending assets, top gainers, exchange statistics, and portfolio tracking, allowing users to monitor crypto markets and compare digital assets in real time. Read and write Coinranking data through One: exchanges, coins, exchangecoins, futuresexchanges, coindetails, blockchain and more, 51 actions with real parameter documentation. Use whenever the user asks to look something up in Coinranking, create or update a record there, or build code against the Coinranking API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: coinranking
  generated-from: one-knowledge-base
---

# Coinranking through One

Coinranking is a cryptocurrency market data platform that provides live coin prices, market capitalizations, rankings, trading volume, trending assets, top gainers, exchange statistics, and portfolio tracking, allowing users to monitor crypto markets and compare digital assets in real time.

One exposes Coinranking through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `coinranking` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Coinranking is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Coinranking account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchanges | GET | `/v2/exchanges` | `conn_mod_def::GMiKq3swKGA::Nf9N6qj5QdykkTic9iVSEQ` |
| List Exchanges for a Coin | GET | `/v2/coin/{{uuid}}/exchanges` | `conn_mod_def::GMiKqUfem9g::2VYLkIYaTVCKj85tMTEZuw` |

### Coins

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coins | GET | `/v2/coins` | `conn_mod_def::GMiKqmiPvrA::0eP3eG2LT0a5Yg_Yhkio2w` |
| List Trending Coins | GET | `/v2/coins/trending` | `conn_mod_def::GMiKqkHjANg::vooVRMv0Sb6rxXSlXTYB6w` |

### ExchangeCoins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get New Coin Listings for an Exchange | GET | `/v2/exchange/{{uuid}}/coins/new` | `conn_mod_def::GMiKq2lR8GA::EiHA_oQtQ8CONXiBRSFMqQ` |
| List Coins for an Exchange | GET | `/v2/exchange/{{uuid}}/coins` | `conn_mod_def::GMiKq2-9fmA::A6AAzYgWTCq0rfcvkrs4Zg` |

### FuturesExchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Futures Exchanges | GET | `/v2/futures/exchanges` | `conn_mod_def::GMiKrI1dSlg::r8krBQQhSnunZrS5362-Uw` |
| List Futures Exchanges for a Coin | GET | `/v2/futures/coin/{{uuid}}/exchanges` | `conn_mod_def::GMiKq_3YkVg::LLwFgfE6RQKFnCVcsOF7XA` |

### CoinDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Details | GET | `/v2/coin/{{uuid}}` | `conn_mod_def::GMiKqMR7N7A::-nIUnIuURpqMfFEMohrElA` |

### Blockchain

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Blockchain Details | GET | `/v2/blockchain/{{name}}` | `conn_mod_def::GMiKqMfuF1A::Rmic-f9yQ_G320qRSeVrlA` |

### CoinIssuanceBlockchains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Coin's Issuance Blockchains | GET | `/v2/coin/{{uuid}}/issuance-blockchains` | `conn_mod_def::GMiKqM3ScAg::0GPjgfvNRGykmRRcDe0RnQ` |

### Blockchains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Blockchains | GET | `/v2/blockchains` | `conn_mod_def::GMiKqM38K6A::YVBq6wlWRbybK5sWv8paNQ` |

### Coin

| Action | Method | Path | Action id |
|---|---|---|---|
| Get UUID by Contract Address | GET | `/v2/blockchain/{{blockchain}}/{{address}}` | `conn_mod_def::GMiKqNIWGOA::_7tKLfQIQyWQ08v77A5oAQ` |

### CoinFiatPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Fiat Prices | GET | `/v2/coin/{{uuid}}/fiat-prices` | `conn_mod_def::GMiKqTkJw6g::Z0n0XDy7RrSlWLi1HZc6rg` |

### CoinMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Coin's Markets | GET | `/v2/coin/{{uuid}}/markets` | `conn_mod_def::GMiKqUaH2cA::oZ1lSXDvTK65T7Ogb_iU_w` |

### CoinGainsAndLosses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Gains and Losses | GET | `/v2/coin/{{uuid}}/gains-and-losses` | `conn_mod_def::GMiKqUy-_cg::tEN5o472TReKkvA6ndXfFQ` |

### MarketCapHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Market Cap History for a Coin | GET | `/v2/coin/{{uuid}}/market-cap-history` | `conn_mod_def::GMiKqU3VEUg::R4W3lgu0QhuEXMREO8jlzw` |

### CoinPriceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Price History | GET | `/v2/coin/{{uuid}}/price-history` | `conn_mod_def::GMiKqb1p02g::d4QbMA2TSWC5Us3UVNI2nA` |

### CoinPrice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Price | GET | `/v2/coin/{{uuid}}/price` | `conn_mod_def::GMiKqb7E8rA::gs67pVDPSaurATGGFZoVlQ` |

### CoinOhlcv

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin OHLCV | GET | `/v2/coin/{{uuid}}/ohlcv` | `conn_mod_def::GMiKqcQc8bg::P7G7a-1rR9CVjWqR0Pzy8w` |

### CoinRankHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Rank History | GET | `/v2/coin/{{uuid}}/rank-history` | `conn_mod_def::GMiKqcTKSLg::gtZ-Fn42RkeCHBuRAwi5cg` |

### CoinSupplyHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Supply History | GET | `/v2/coin/{{uuid}}/supply-history` | `conn_mod_def::GMiKqctmwig::RiaGeVygR1GTuv38Q0qGGw` |

### CoinTradingVolumeHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Trading Volume History | GET | `/v2/coin/{{uuid}}/trading-volume-history` | `conn_mod_def::GMiKqji7yZA::TvPDX95ZQMSUAPZ5QItTUg` |

### CoinSupplyModifiers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Coin's Supply Modifiers | GET | `/v2/coin/{{uuid}}/modifiers` | `conn_mod_def::GMiKqjsgs9A::M3AWQoOXTJ-gDnfYhEhkVA` |

### DexExchangeCoinListings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DEX Exchange Coin Listings | GET | `/v2/dex/{{uuid}}/coins` | `conn_mod_def::GMiKqk2Y6bA::uk1Xs-vKSbagVnhGr7Zodg` |

### DexExchangeDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DEX Exchange Details | GET | `/v2/dex/{{uuid}}` | `conn_mod_def::GMiKqt5ICVA::7bQ17QgWTfSlQ1uPVLTTfQ` |

### DexExchangeMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DEX Exchange Markets | GET | `/v2/dex/{{uuid}}/markets` | `conn_mod_def::GMiKquIHQ9A::AfV9ghTPSmez4kedgNKxkg` |

### Dexs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of DEXs | GET | `/v2/dexs` | `conn_mod_def::GMiKqugAi-g::uEyrbi69SFWKnP1DTsQ5MA` |

### DexProtocols

| Action | Method | Path | Action id |
|---|---|---|---|
| List DEX Protocols | GET | `/v2/dex-protocols` | `conn_mod_def::GMiKqu7onOg::c6FTT7opQ-Kvoadti4-Kbg` |

### DexExchangeNewCoinListings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get New Coin Listings for a DEX Exchange | GET | `/v2/dex/{{uuid}}/coins/new` | `conn_mod_def::GMiKqvPesYg::KvRZC6uVReCE1sd-msgo_g` |

### ExchangeDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Details | GET | `/v2/exchange/{{uuid}}` | `conn_mod_def::GMiKq1zvNVg::tdriPvdvSKGGAimps38UZQ` |

### ExchangeMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Markets | GET | `/v2/exchange/{{uuid}}/markets` | `conn_mod_def::GMiKq2-f5EA::HL4dnbUSQLWEjYmbRJj0xA` |

### FuturesCoinOhlcv

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Futures Coin OHLCV | GET | `/v2/futures/coin/{{uuid}}/ohlcv` | `conn_mod_def::GMiKq_cFUHg::TLvAfcH1TrWuMbGNEqRPLw` |

### FuturesCoinDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Futures Coin Details | GET | `/v2/futures/coin/{{uuid}}` | `conn_mod_def::GMiKq_iW6RA::HsW8nkpORmS6C-wSsoqYHg` |

### FuturesCoinMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Futures Coin Markets | GET | `/v2/futures/coin/{{uuid}}/markets` | `conn_mod_def::GMiKrARDhwA::lqa7WfbPSlGJ4PTR4lk8lg` |

### FuturesCoins

| Action | Method | Path | Action id |
|---|---|---|---|
| List Futures Coins | GET | `/v2/futures/coins` | `conn_mod_def::GMiKrAoTRkg::fjkELtn-RzyHRN3BIwUf8Q` |

### FuturesMarketDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Futures Market Details | GET | `/v2/futures/market/{{uuid}}` | `conn_mod_def::GMiKrH16-cg::8jGP8xGCS4iYHnSX2JkZRQ` |

### FuturesExchangeMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Futures Exchange Markets | GET | `/v2/futures/exchange/{{uuid}}/markets` | `conn_mod_def::GMiKrIOjosg::wfT5FrVwS7md-alGiBsUKw` |

### FuturesExchangeCoins

| Action | Method | Path | Action id |
|---|---|---|---|
| List Futures Exchange Coins | GET | `/v2/futures/exchange/{{uuid}}/coins` | `conn_mod_def::GMiKrIRXUsg::APtMOp6hRnSFr8cuaF3e_w` |

### FuturesMarkets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Futures Markets | GET | `/v2/futures/markets` | `conn_mod_def::GMiKrITtDtA::RevTchpOQyuELCJAozHk8Q` |

### FearAndGreedIndex

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fear and Greed Index | GET | `/v2/indicators/fear-and-greed` | `conn_mod_def::GMiKrPLq_IA::tISef3CWRCOEf_ArUFJ1Qg` |

### BitcoinDominanceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bitcoin Dominance History | GET | `/v2/stats/bitcoin-dominance-history` | `conn_mod_def::GMiKrPl66wA::XLDyRpx9TROi1XblAxe0Dg` |

### Market

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Market Details | GET | `/v2/market/{{uuid}}` | `conn_mod_def::GMiKrPzVYKA::n8Qw4HD2Rs-Yf-yAZ2DcdQ` |

### Markets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Markets | GET | `/v2/markets` | `conn_mod_def::GMiKrP8V5ng::FfTMgHWWT1q9luyLXy5rTw` |

### CoinMovingAverages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coin Moving Averages | GET | `/v2/indicators/{{uuid}}/moving-averages` | `conn_mod_def::GMiKrQa10eA::7iDAbz5CRrmOMnYV0i5Kvw` |

### GlobalStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Stats | GET | `/v2/stats` | `conn_mod_def::GMiKrXs0d4g::Hod3ENNhTrG9OO7onhT-Ow` |

### GlobalMarketCapsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Market Caps History | GET | `/v2/stats/global-market-caps` | `conn_mod_def::GMiKrX5NZ7g::rAFA7CgSQjCIVY58mscXBg` |

### GlobalTradingVolumesHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Trading Volumes History | GET | `/v2/stats/global-trading-volumes` | `conn_mod_def::GMiKrYWzhkA::xhhCW-E6TiW8_Jt0EM_M3A` |

### StatsForSelectionOfCoins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stats for a Selection of Coins | GET | `/v2/stats/coins` | `conn_mod_def::GMiKrYesArA::zYJPV7xrQ3u7yagonMIpQQ` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get List of Tags | GET | `/v2/tags` | `conn_mod_def::GMiKrY5TgHA::gYFAIflrScW_c_lwXfQEEw` |

### Tag

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tag Details | GET | `/v2/tag/{{slug}}` | `conn_mod_def::GMiKrgP3oug::5lCiJ-7bS_GVVNNvVsrmMw` |

## When a call fails

The error comes from Coinranking, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/coinranking

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
