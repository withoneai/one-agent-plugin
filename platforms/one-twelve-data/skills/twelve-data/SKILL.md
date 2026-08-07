---
name: twelve-data
description: Twelve Data provides unified REST and WebSocket APIs delivering real-time and historical market data—including stocks, forex, crypto, ETFs, commodities, and fundamentals—alongside technical indicators and spreadsheet integrations for seamless developer and enterprise use. Read and write Twelve Data data through One: etfs, mutualfunds, analystratings, balancesheet, apiusage, earningsestimate and more, 185 actions with real parameter documentation. Use whenever the user asks to look something up in Twelve Data, create or update a record there, or build code against the Twelve Data API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: twelve-data
  generated-from: one-knowledge-base
---

# Twelve Data through One

Twelve Data provides unified REST and WebSocket APIs delivering real-time and historical market data—including stocks, forex, crypto, ETFs, commodities, and fundamentals—alongside technical indicators and spreadsheet integrations for seamless developer and enterprise use.

One exposes Twelve Data through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `twelve-data` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Twelve Data is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Twelve Data account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Etfs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Global ETFs Summary | GET | `/etfs/world/summary` | `conn_mod_def::GJ7TEiuhmWo::h5xYDhrOT2q7iu6-mRrXeA` |
| Get Global ETF Composition | GET | `/etfs/world/composition` | `conn_mod_def::GJ7TEayDpKA::ciP08L8BTU2_HWZRvzux-A` |
| Get Global ETF Full Data | GET | `/etfs/world` | `conn_mod_def::GJ7TEXgclKU::yCZexbE2RRu0gWm9kfH7hA` |
| Get Global ETF Performance | GET | `/etfs/world/performance` | `conn_mod_def::GJ7TEZYx1mk::vamq7pHkTAuh9AJGzHQnwA` |
| List ETF Types (by Market) | GET | `/etfs/type` | `conn_mod_def::GJ7TGTdDbdQ::c-mofZaqRDGHPrcMahvW5g` |
| List ETFs | GET | `/etfs` | `conn_mod_def::GJ7TGJl7Knw::Y_ktKtgDTKKSZhI_h__ltw` |
| List ETFs (Directory) | GET | `/etfs/list` | `conn_mod_def::GJ7TGVFGHiU::_85u7KsbT86o2fI5jmNnUw` |

### MutualFunds

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Global Mutual Funds Summary | GET | `/mutual_funds/world/summary` | `conn_mod_def::GJ7TF4XNXxI::v7Wv-dB6Sj-8CAUgDMFBZw` |
| Get Global Mutual Fund Full Data | GET | `/mutual_funds/world` | `conn_mod_def::GJ7TFvyxm8U::z4dNtDOtReeYU8I6Z-Tlnw` |
| Get Global Mutual Fund Purchase Info | GET | `/mutual_funds/world/purchase_info` | `conn_mod_def::GJ7TFwdQFPg::nEA1UJQ4Qq2HtvBdwtdcLQ` |
| Get Mutual Fund Types | GET | `/mutual_funds/type` | `conn_mod_def::GJ7TGnFLOLA::bLwiHgm7RD-H3ybBA2cJog` |
| Get Mutual Funds World Composition | GET | `/mutual_funds/world/composition` | `conn_mod_def::GJ7TFvqYvNQ::rEKwUmC0Qbii-CtmsnX47A` |
| List Mutual Fund Families | GET | `/mutual_funds/family` | `conn_mod_def::GJ7TGmOx4Ts::X8eOW2AeSSKZEVqEp_1HvA` |
| List Mutual Funds (Directory) | GET | `/mutual_funds/list` | `conn_mod_def::GJ7TGox9TFs::LWQ6D8DFRSGKr0bNxkRtdA` |

### AnalystRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Analyst Ratings Snapshot (Light) | GET | `/analyst_ratings/light` | `conn_mod_def::GJ7TEDzhi7c::Vy9Pi_asRY2Ups7LRSNXMw` |
| Get Analyst Ratings for US Equities | GET | `/analyst_ratings/us_equities` | `conn_mod_def::GJ7TEBQGNnI::k-dTj4JPQZaAvEtWjDnbjA` |

### BalanceSheet

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company's Balance Sheet | GET | `/balance_sheet` | `conn_mod_def::GJ7TEkDtjdE::Gasu3jneSOytq2bTmoLSGQ` |
| Get Consolidated Balance Sheet | GET | `/balance_sheet/consolidated` | `conn_mod_def::GJ7TEjXCZKo::xFhux-l4Qpu4m9hWGbaQ7w` |

### ApiUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Usage Statistics | GET | `/api_usage` | `conn_mod_def::GJ7TEAcFfJU::gl5gx8xYRsixlvOt4tTiyA` |

### EarningsEstimate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Estimates for an Instrument | GET | `/earnings_estimate` | `conn_mod_def::GJ7TEBpobBE::-VYTmX3yRfuew9IK2Nwx2g` |

### GrowthEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Growth Estimates | GET | `/growth_estimates` | `conn_mod_def::GJ7TELbdHFQ::KYiN2M8aRoKpOKGXkmW_Wg` |

### RevenueEstimates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Revenue Estimates | GET | `/revenue_estimate` | `conn_mod_def::GJ7TEXF3PYg::M9pnkm6ARPiS2qSJ04DrQA` |

### Recommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recommendations (Analyst Opinions) for an Instrument | GET | `/recommendations` | `conn_mod_def::GJ7TEY6N1kM::5cjiAf78Q_i4nTnlCxI1-w` |

### EtfsWorldRisk

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global ETFs Risk Metrics | GET | `/etfs/world/risk` | `conn_mod_def::GJ7TEjHhTaU::y8cTeRdSTNWmTnvCceGQSg` |

### CashFlow

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Cash Flow Statements | GET | `/cash_flow` | `conn_mod_def::GJ7TErNrRS4::DXp5ynpQTyqHRMxq8lOaaw` |

### EarningsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| List Earnings Calendar | GET | `/earnings_calendar` | `conn_mod_def::GJ7TEy8Ja5k::DXuA3ymjS96tPjx20hzjfA` |

### Dividends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Dividends | GET | `/dividends` | `conn_mod_def::GJ7TE00Al98::ugmvwbvRRha5QNRXGLuIlA` |

### DividendsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dividends Calendar | GET | `/dividends_calendar` | `conn_mod_def::GJ7TE4VMOvQ::F-CvNNvxRjuH8CxG5FwysQ` |

### Earnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings for an Instrument | GET | `/earnings` | `conn_mod_def::GJ7TEzosQvw::ffBOniUjQqOEfC6w7kJxJg` |

### CashFlowConsolidated

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Consolidated Cash Flow Statements | GET | `/cash_flow/consolidated` | `conn_mod_def::GJ7TE3Cng7E::rszmTnyxRteqwJh6NfvFKg` |

### IpoCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| List IPO Calendar Entries | GET | `/ipo_calendar` | `conn_mod_def::GJ7TFAFsGfQ::2G-MVxSESYOIXHoETTwvyA` |

### LastChange

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Last Changes for a Fundamental Dataset | GET | `/last_change/{{endpoint}}` | `conn_mod_def::GJ7TFA0Y-Xs::7AlM9D_8Sde1EUkoIhzqOA` |

### KeyExecutives

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Company's Key Executives | GET | `/key_executives` | `conn_mod_def::GJ7TFAgGRGs::XnwBDFbeQ5WjuJ5rZSI0_w` |

### IncomeStatementConsolidated

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Consolidated Income Statement | GET | `/income_statement/consolidated` | `conn_mod_def::GJ7TFCMhldE::OcRhqqLYQu2b34sVTAbiuA` |

### IncomeStatement

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Income Statement | GET | `/income_statement` | `conn_mod_def::GJ7TFCkT7gk::tXjK_LbIRjqR4AWAruSA6Q` |

### Logo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Logo for a Symbol | GET | `/logo` | `conn_mod_def::GJ7TFJvnxxQ::nLSIHULXRwSlBa7jpqOupA` |

### MarketCap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Market Capitalization History | GET | `/market_cap` | `conn_mod_def::GJ7TFLLx-yI::o5hd0IdIQ4OTlAYJfbzcow` |

### PressReleases

| Action | Method | Path | Action id |
|---|---|---|---|
| List Press Releases | GET | `/press_releases` | `conn_mod_def::GJ7TFLvuu0U::CbckI0G6QoisyaYTFn-WWw` |

### Profile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Company Profile | GET | `/profile` | `conn_mod_def::GJ7TFKrUNI0::JRpiM15kQiqawoDou-HH7g` |

### Splits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stock Splits for an Instrument | GET | `/splits` | `conn_mod_def::GJ7TFLTzPhY::NG_-D2tfTqy7s_fFBpTPew` |

### ExchangeRate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Exchange Rate for a Currency Pair | GET | `/exchange_rate` | `conn_mod_def::GJ7TFT-6OEU::o0fGjxnXQNuNMD88S-HC6A` |

### CurrencyConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Currency Conversion | GET | `/currency_conversion` | `conn_mod_def::GJ7TFUArjAY::pjphm2nZQYiMzpTl6tz-aA` |

### Eod

| Action | Method | Path | Action id |
|---|---|---|---|
| Get End-of-Day (EOD) Price for an Instrument | GET | `/eod` | `conn_mod_def::GJ7TFXsYvDU::5mNtPbXdRjaE2ZPV9bWDnA` |

### Statistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Company Statistics | GET | `/statistics` | `conn_mod_def::GJ7TFbwH6hw::tVIFeLdJSYC16yEdw0bKLQ` |

### SplitsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Splits Calendar | GET | `/splits_calendar` | `conn_mod_def::GJ7TFYDU18U::sGjs3I0WRVu7FaPhEDfZ2A` |

### MarketMovers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Market Movers for a Market | GET | `/market_movers/{{market}}` | `conn_mod_def::GJ7TFk5DcaQ::XEnfOj0wRK2lmMVmpun9OA` |

### TimeSeriesCross

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Series Cross-Rate Data | GET | `/time_series/cross` | `conn_mod_def::GJ7TFmNK9vY::CKtSGAeMSPuEWov0AYQpog` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Quote for a Financial Instrument | GET | `/quote` | `conn_mod_def::GJ7TFlliOHA::J_H5zbwDSJu3s2OgZuciKw` |

### TimeSeries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Time Series Data for an Instrument | GET | `/time_series` | `conn_mod_def::GJ7TFnUE7to::McKjhsXIQe-KtNb-KErg8w` |

### Price

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Latest Price for an Instrument | GET | `/price` | `conn_mod_def::GJ7TFn02dS8::YdEXDJUsTticmueM7OCeAA` |

### MutualFundsWorldPerformance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Mutual Fund Performance | GET | `/mutual_funds/world/performance` | `conn_mod_def::GJ7TFvd5dpI::Au5gENENQsGeCgG_4SEY9A` |

### MutualFundsWorldRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Mutual Fund Ratings (World) | GET | `/mutual_funds/world/ratings` | `conn_mod_def::GJ7TFwEmGLs::nCWx75o9QIas2WQ7YqISew` |

### Commodities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Commodity Pairs | GET | `/commodities` | `conn_mod_def::GJ7TF4XCzoQ::2990X_DuTeexoV-KtX5SeQ` |

### MutualFundsWorldRisk

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Mutual Fund Risk Metrics | GET | `/mutual_funds/world/risk` | `conn_mod_def::GJ7TF47jfAM::ejW0vcahSiGonKMyIgS5yg` |

### MutualFundsWorldSustainability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Global Mutual Fund Sustainability (ESG) Data | GET | `/mutual_funds/world/sustainability` | `conn_mod_def::GJ7TGAUkqZc::JQkjFTi-RPy3PzmQV8TSpA` |

### CrossListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cross Listings for an Instrument | GET | `/cross_listings` | `conn_mod_def::GJ7TGIl2TeI::DgBZc-xFSkm_mXrDe-WbfA` |

### Cryptocurrencies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Cryptocurrency Pairs | GET | `/cryptocurrencies` | `conn_mod_def::GJ7TGMEVNto::DlvL0CwlQWujPpc943BGhw` |

### EtfFamilies

| Action | Method | Path | Action id |
|---|---|---|---|
| List ETF Families | GET | `/etfs/family` | `conn_mod_def::GJ7TGTYkFAg::iOUwOYb-RBaqkx71rJnF2Q` |

### ForexPairs

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forex Pairs | GET | `/forex_pairs` | `conn_mod_def::GJ7TGdvw8P8::HRapdZAPTGW_QrJCxBF40A` |

### Funds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Funds | GET | `/funds` | `conn_mod_def::GJ7TGeZCDo0::HOZvxkGSRPyysYIkrQmxzg` |

### ExchangeSchedules

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Schedules | GET | `/exchange_schedule` | `conn_mod_def::GJ7TGT0R79M::Ip7nCMpYT6W61RdLk3HHzw` |

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Exchanges | GET | `/exchanges` | `conn_mod_def::GJ7TGWbg3Fg::941xezlgRhSYvtA4V1cF-A` |

### InstrumentTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Instrument Types | GET | `/instrument_type` | `conn_mod_def::GJ7TGdwvSgg::o6mvu6nTSHSRiUKzQaETkA` |

### Bonds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Bonds (Fixed Income) | GET | `/bonds` | `conn_mod_def::GJ7TGes8nLs::ymxM5rAIR22Rhgv1n5AYmQ` |

### Intervals

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Time Intervals | GET | `/intervals` | `conn_mod_def::GJ7TGffl5VU::VMhqxgDJS1S-ctqipOiZYQ` |

### Stocks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Stock Symbols | GET | `/stocks` | `conn_mod_def::GJ7TGoZUwpk::MY8XiiLpRqWcUFlkmrg4lw` |

### Symbols

| Action | Method | Path | Action id |
|---|---|---|---|
| Symbol Search | GET | `/symbol_search` | `conn_mod_def::GJ7TGx3agkw::mRbmbOFoQai4RvtKED083Q` |

### DirectHolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Direct Holders for an Instrument | GET | `/direct_holders` | `conn_mod_def::GJ7TGy9Pqj4::dXOCLvW1QWS1s3X69RHVPg` |

### FundHolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Fund Holders for an Instrument | GET | `/fund_holders` | `conn_mod_def::GJ7TGyqzVvw::OppUNUJ3Tk2XtDqKxM9xIg` |

### InsiderTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insider Transactions | GET | `/insider_transactions` | `conn_mod_def::GJ7TG5Erd80::v5pe7R5vTg6MRcyWFtxNRA` |

### Sanctions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Sanctioned Entities From a Source | GET | `/sanctions/{{source}}` | `conn_mod_def::GJ7TG_qzaf8::pq2EI06eRAeQo-BuAKVIuw` |

### Ad

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accumulation/Distribution (AD) Time Series | GET | `/ad` | `conn_mod_def::GJ7THEL2DrU::mYegnEXtRFuZA5dyYsAuUg` |

### InstitutionalHolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Institutional Holders for an Instrument | GET | `/institutional_holders` | `conn_mod_def::GJ7THBgmcME::JyZdD3NrQlS18Kvtg1ozjA` |

### TaxInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tax Information for an Instrument | GET | `/tax_info` | `conn_mod_def::GJ7THMIkodQ::kRnimtX_QJan648a5ZzA3Q` |

### Apo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Absolute Price Oscillator (APO) Time Series | GET | `/apo` | `conn_mod_def::GJ7THP45o-M::SZoM9PeeTlurbu320aeEQg` |

### Avg

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Average (AVG) Time Series for an Instrument | GET | `/avg` | `conn_mod_def::GJ7THalBboY::uNSJVz9PQVCI-BFFdtAf-w` |

### TimeSeriesAddition

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Two Time Series (Addition) | GET | `/add` | `conn_mod_def::GJ7THbLm5m4::V8EB_JY8RrGrm7AZ9ctegg` |

### AroonOscillator

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aroon Oscillator Time Series | GET | `/aroonosc` | `conn_mod_def::GJ7THhDcgyg::Mj-HKpYAQR2ze1dXH3RjBw` |

### Adosc

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Accumulation/Distribution Oscillator (ADOSC) Time Series | GET | `/adosc` | `conn_mod_def::GJ7THamyt3U::NDtgYDI_R_W4v3pcSSzOzQ` |

### Aroon

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aroon Indicator Time Series | GET | `/aroon` | `conn_mod_def::GJ7THdxGPns::Z7XlFKzUSsepo2yQMhaRPQ` |

This lists 80 of 185 actions. For anything not here, call `search_one_platform_actions` with platform `twelve-data`. The full catalog is at https://www.withone.ai/knowledge/twelve-data.

## When a call fails

The error comes from Twelve Data, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/twelve-data

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
