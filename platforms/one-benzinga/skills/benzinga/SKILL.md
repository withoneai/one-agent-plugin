---
name: benzinga
description: A real-time financial news and market data service that delivers breaking market updates, analysis, earnings, and trading insights to investors, traders, and finance professionals. Read and write Benzinga data through One: fundamentals, transcriptcalls, transcriptsummaries, logos, news, trendingtickers and more, 61 actions with real parameter documentation. Use whenever the user asks to look something up in Benzinga, create or update a record there, or build code against the Benzinga API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: benzinga
  generated-from: one-knowledge-base
---

# Benzinga through One

A real-time financial news and market data service that delivers breaking market updates, analysis, earnings, and trading insights to investors, traders, and finance professionals.

One exposes Benzinga through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `benzinga` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Benzinga is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Benzinga account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Fundamentals

| Action | Method | Path | Action id |
|---|---|---|---|
| Company Fundamentals (V3) | GET | `/api/v3/fundamentals` | `conn_mod_def::GJ4w_tYXXYI::RGMxrflFQp21xda0IJkZ1g` |
| Get Asset Classification (Fundamentals v2.1) | GET | `/api/v2.1/fundamentals/assetClassification` | `conn_mod_def::GJ4w-Z-k-Ls::5zzH3uKeRy2R1DEk7KfWLg` |
| Get Balance Sheet Fundamentals (V3) | GET | `/api/v3/fundamentals/balance-sheet` | `conn_mod_def::GJ4w-hr5yLY::MG7iFnf3TNuAPVyqYhzKyg` |
| Get Valuation Ratios (Fundamentals) V2.1 | GET | `/v2.1/fundamentals/valuationRatios` | `conn_mod_def::GJ4xApdzpLU::_YpYAweSQw-huK-JiDH_7A` |

### TranscriptCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch a Transcript Call by ID | GET | `/api/v1/transcripts/calls/{{callId}}` | `conn_mod_def::GJ4xA2bkmaU::Y0cDbMRXQJS4rdxO2gjFow` |
| Fetch Transcript Calls (Conference Calls) | GET | `/transcripts/calls` | `conn_mod_def::GJ4xBTCDnnc::_KksgfdkQmWwjXfmy3Pq4g` |

### TranscriptSummaries

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Transcript Summaries | GET | `/api/v1/transcripts/summaries` | `conn_mod_def::GJ4xBC23ej0::xOVYAsC3Qh-ppz5TIsgp6w` |
| Fetch Transcript Summaries by Call ID | GET | `/api/v1/transcripts/summaries/{{callId}}` | `conn_mod_def::GJ4xBJ3bSxc::f11ZBNrkSqWY5gncAKgDVQ` |

### Logos

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Logos | GET | `/api/v2/logos/search` | `conn_mod_def::GJ4xBgPcXCQ::sfOFGLw6S-SEwrYh6c1wtw` |
| Sync Logos in Bulk | GET | `/api/v2.1/logos/sync` | `conn_mod_def::GJ4xBqSDOVU::a6RVHtviQFmCkmZKO7C37Q` |

### News

| Action | Method | Path | Action id |
|---|---|---|---|
| Get News Items (v2) | GET | `/api/v2/news` | `conn_mod_def::GJ4xDKkLUmY::UGLbnnRYTBWuvTf1PExcwg` |
| Get News Items (Why Is It Moving / Newsfeed v2) | GET | `/api/v2/news` | `conn_mod_def::GJ4xEI8p1IA::ZUTAqcd2TwKeWQtYJXT7qQ` |

### TrendingTickers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticker Trend Data | GET | `/api/v1/trending-tickers` | `conn_mod_def::GJ4xDykDf_0::qu3CtEgZQmWsLDtSypdqGQ` |
| Get Trending Tickers List | GET | `/api/v1/trending-tickers/list` | `conn_mod_def::GJ4xD8kQXZw::ThtoZO40SQaZsDW12YVLAw` |

### AnalystInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| List Analyst Insights | GET | `/api/v1/analyst/insights` | `conn_mod_def::GJ4w6MDVIoY::TYjBYk8lSb2h8-d9mkwr1A` |

### Bars

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Price Bars (OHLCV) | GET | `/api/v2/bars` | `conn_mod_def::GJ4w6U44ziU::MfOv2e7sQm-e3QDOS6StaQ` |

### BullsBearsSay

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulls vs Bears Cases for a Stock Ticker | GET | `/bulls_bears_say` | `conn_mod_def::GJ4w6d38UG0::ebyBmuBYQJqh8KHOtdB3qA` |

### BlockTrade

| Action | Method | Path | Action id |
|---|---|---|---|
| List Block Trades (Signal) | GET | `/api/v1/signal/block_trade` | `conn_mod_def::GJ4w6njX7ns::nO1F9xVDSZChFkFyoXHbSg` |

### ConferenceCalls

| Action | Method | Path | Action id |
|---|---|---|---|
| List Conference Calls (Calendar) | GET | `/api/v2.1/calendar/conference-calls` | `conn_mod_def::GJ4w61WEUgU::ALrirklxQvGIOqC1V4K-RQ` |

### ConsensusRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Consensus Ratings for a Ticker | GET | `/api/v1/consensus-ratings` | `conn_mod_def::GJ4w6_M5o5g::U6uSyO1HSWKG5HgEG36Ihg` |

### Dividends

| Action | Method | Path | Action id |
|---|---|---|---|
| List Dividend Events (Calendar API V2.2) | GET | `/api/v2.2/calendar/dividends` | `conn_mod_def::GJ4w7KGuZSo::5BfUZ_50SHGe8Cfejc34mQ` |

### EarningsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Calendar Data | GET | `/api/v2.1/calendar/earnings` | `conn_mod_def::GJ4w7X3LfkU::iIx6sQJ4SmiRKebfLeumwg` |

### EconomicsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Economic Calendar Data | GET | `/api/v2.1/calendar/economics` | `conn_mod_def::GJ4w7iVK7u0::wYhTR2q8Rl2Q4G9kXLj9PA` |

### ErxGaps

| Action | Method | Path | Action id |
|---|---|---|---|
| List ERx Gaps | GET | `/api/v1/erx-gaps` | `conn_mod_def::GJ4w7v4hMdE::6ihOm_m-QO60fZJgxjqvhA` |

### CalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Corporate Events (Calendar) | GET | `/api/v2/calendar/events` | `conn_mod_def::GJ4w78NOeAA::uXr4jER2SGK1JJXKcc6W1g` |

### FdaCalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get FDA Calendar Events | GET | `/api/v2.1/calendar/fda` | `conn_mod_def::GJ4w8HKlyB0::0tCGwu8fSzKQ1bpaD94xqQ` |

### CalendarGuidance

| Action | Method | Path | Action id |
|---|---|---|---|
| List Company Guidance (Calendar) | GET | `/api/v2.1/calendar/guidance` | `conn_mod_def::GJ4w8Ro1Qjo::j77y1Dz4SCG9t3khxr1Fkg` |

### HaltResumeSignals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Trading Halt & Resume Signals | GET | `/api/v1/signal/halt_resume` | `conn_mod_def::GJ4w8e2qL9g::o8grjSV0Q7-NAr6QC_Njlg` |

### Ipos

| Action | Method | Path | Action id |
|---|---|---|---|
| List IPOs (Calendar API v2.1) | GET | `/api/v2.1/calendar/ipos` | `conn_mod_def::GJ4w8tWRTaA::huBGxZmMQviL1Kai5S8pjg` |

### MaCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mergers and Acquisitions (M&A) Calendar Data | GET | `/api/v2.1/calendar/ma` | `conn_mod_def::GJ4w881zqNI::F3GHslFmSLKE3BH2a1GHMQ` |

### CalendarOfferings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Secondary Offerings (Calendar) | GET | `/calendar/offerings` | `conn_mod_def::GJ4w9GmY1H8::YD2EqmFgS_iYu-ZR-fGq1A` |

### CalendarRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Analyst Ratings (Calendar) | GET | `/api/v2.1/calendar/ratings` | `conn_mod_def::GJ4w9Sj3wYY::UvDHrXjPQeeWf8r4yJ7dLA` |

### RatingsAnalysts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ratings Analysts | GET | `/api/v2.1/calendar/ratings/analysts` | `conn_mod_def::GJ4w9cj1jAE::85wK_A3HReK0IpbH4Oqp-g` |

### CalendarRatingsFirms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Ratings Firms (Calendar API) | GET | `/api/v2.1/calendar/ratings/firms` | `conn_mod_def::GJ4w9lUmlgo::R74pfBz8QXWbRQm7u5DA1A` |

### CalendarRemoved

| Action | Method | Path | Action id |
|---|---|---|---|
| List Removed Calendar Events (v2.1) | GET | `/calendar-removed/` | `conn_mod_def::GJ4w9uGxf2c::AzgqR62AQXmS4HmeEBwFLA` |

### CalendarSplits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stock Splits Calendar Data | GET | `/api/v2.1/calendar/splits` | `conn_mod_def::GJ4w957qlz8::4NNK9vFyR9u3S6-pFe0UYw` |

### OptionActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Unusual Options Activity (OptionActivity V1) | GET | `/api/v1/signal/option_activity` | `conn_mod_def::GJ4w-FNL78A::-XRa8QbHR8STMOa2K01FkQ` |

### FundamentalsAlphaBeta

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Alpha Beta Fundamentals (V2.1) | GET | `/v2.1/fundamentals/alphaBeta` | `conn_mod_def::GJ4w-Owo4M0::2OM4P5OLR-WypeCFnpW14A` |

### FundamentalsCashFlow

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cash Flow (Fundamentals V3) | GET | `/api/v3/fundamentals/cash-flow` | `conn_mod_def::GJ4w-tPBHFU::cjBUDug8QOOomLgBTts-_w` |

### FundamentalsCompany

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Financial Data (Fundamentals V2.1) | GET | `/api/v2.1/fundamentals/company` | `conn_mod_def::GJ4w-2HWV0M::T0uFtx-RSYSDU8k3N38osg` |

### CompanyProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Profile Information (V2.1) | GET | `/api/v2.1/fundamentals/companyProfile` | `conn_mod_def::GJ4w--1ksI0::R6wwdbXVTqa1ZM4DV9F3MQ` |

### FundamentalsDerived

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Derived Figures and Ratios (Fundamentals V3) | GET | `/api/v3/fundamentals/derived` | `conn_mod_def::GJ4w_IT7H0I::dH48NHloShODti7LXucOeg` |

### EarningRatios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earning Ratios (V2.1) | GET | `/api/v2.1/fundamentals/earningRatios` | `conn_mod_def::GJ4w_RUqEMs::pHgk3FMqRkGUqshvo3hkXg` |

### EarningReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Quarterly and Annual Earnings Reports (V2.1) | GET | `/api/v2.1/fundamentals/earningReports` | `conn_mod_def::GJ4w_aqZJf0::zt57jvl3QF-VesGSD3T8KA` |

### FundamentalsFinancials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Financials (Fundamentals Financial Statements) V2.1 | GET | `/api/v2.1/fundamentals/financials` | `conn_mod_def::GJ4w_jvxC3Y::8CXD6L25S-S6bTZBkox0jg` |

### IncomeStatement

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Income Statement Data (V3) | GET | `/api/v3/fundamentals/income-statement` | `conn_mod_def::GJ4w_2CZxQI::yWwRY-o3T6-c7zvWb0_DdA` |

### OperationRatios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Operational Efficiency Ratios (V2) | GET | `/api/v2/fundamentals/operationRatios` | `conn_mod_def::GJ4w_-XjY30::5Mzh-x51R8eM-8T7lwxjkQ` |

### FundamentalsShareClass

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Share Class Fundamentals (V2.1) | GET | `/api/v2.1/fundamentals/shareClass` | `conn_mod_def::GJ4xAKM2Av8::5D_PdlqQREynlKpKbbrJxg` |

### ShareClassProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Share Class Profile (V2.1) | GET | `/api/v2.1/fundamentals/shareClassProfile` | `conn_mod_def::GJ4xAU505EA::loHhKoj_RSuD38QLkFVnBw` |

### SharePriceRatios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Share Price Ratios (V3) | GET | `/fundamentals/share-price-ratios` | `conn_mod_def::GJ4xAc5WLwI::tEBwTCShTsGsK-tuDh8_Ig` |

### QuoteDelayed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Delayed Quotes (V2) | GET | `/api/v2/quoteDelayed` | `conn_mod_def::GJ4xB3GvQkM::O4m9-hbvRPOPjWgV1b3TRg` |

### GovernmentTradeReports

| Action | Method | Path | Action id |
|---|---|---|---|
| List Government Trade Reports | GET | `/api/v1/government_trade_reports` | `conn_mod_def::GJ4xB_9QvY8::cBkO7gsCSNe6vyHQxTEc-A` |

### GovernmentTrades

| Action | Method | Path | Action id |
|---|---|---|---|
| List Government Trades | GET | `/api/v1/government_trades` | `conn_mod_def::GJ4xCJQocW4::zDjCYbvsTFudYI3I0kwxsw` |

### SecInsiderTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insider Transactions (Filings or Transactions View) | GET | `/api/v1/sec/insider_transactions/{{viewType}}` | `conn_mod_def::GJ4xCT9vjn8::3PB3IKevRP2ateuMrSXUiA` |

### InsiderTransactionOwners

| Action | Method | Path | Action id |
|---|---|---|---|
| List Insider Transaction Owners | GET | `/sec/insider_transactions/owners` | `conn_mod_def::GJ4xCh32eW8::2WvDeowxTbmLKbhPmA7Dcg` |

### MarketMovers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Market Movers | GET | `/api/v1/market/movers` | `conn_mod_def::GJ4xCrVgHz0::ApquYhhzQwi_KhWc1fZX6w` |

### ShortInterest

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Short Interest Data | GET | `/api/v1/shortinterest` | `conn_mod_def::GJ4xCzueOyU::jdtakRM9SGaL96eyL1BQAQ` |

### NewsChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available News Channels | GET | `/api/v2.1/news/channels` | `conn_mod_def::GJ4xC6c8mE0::CfKDKryzRa2p1LWOKtYhPA` |

### NewsRemoved

| Action | Method | Path | Action id |
|---|---|---|---|
| List Removed News Data (Updated Since Timestamp) | GET | `/api/v2/news-removed` | `conn_mod_def::GJ4xDSuTeZg::L3r2MUz2R3OzAv8dgMZEWg` |

### NewsQuantified

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Quantitative News Analytics (NewsQuantified) | GET | `/api/v2/newsquantified` | `conn_mod_def::GJ4xDb1YArc::qXD5x0ANRoyU53-vwnq8Jg` |

### PressReleases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Press Releases | GET | `/api/v2/news` | `conn_mod_def::GJ4xDpH82lY::DPwXV9oaTRe62KvHBZTsOA` |

## When a call fails

The error comes from Benzinga, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/benzinga

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
