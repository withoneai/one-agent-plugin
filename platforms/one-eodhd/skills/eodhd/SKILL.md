---
name: eodhd
description: EODHD is a financial market data platform that provides APIs for end-of-day, intraday, real-time, and historical stock, forex, and cryptocurrency data, allowing developers and analysts to integrate market data, fundamentals, and exchange information into trading and research applications. Read and write EODHD data through One: exchangedetails, bulkfundamentals, fundamentals, equityanalysis, bankbalancesheet, bankincomestatement and more, 83 actions with real parameter documentation. Use whenever the user asks to look something up in EODHD, create or update a record there, or build code against the EODHD API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: eodhd
  generated-from: one-knowledge-base
---

# EODHD through One

EODHD is a financial market data platform that provides APIs for end-of-day, intraday, real-time, and historical stock, forex, and cryptocurrency data, allowing developers and analysts to integrate market data, fundamentals, and exchange information into trading and research applications.

One exposes EODHD through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `eodhd` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm EODHD is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real EODHD account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### ExchangeDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Details | GET | `/api/exchange-details/{{exchangeCode}}` | `conn_mod_def::GMP1-yohHI0::gfO9X1v1RWOQFBENNoc1qw` |
| Get Exchange Details and Trading Hours Using Exchange Details v2 | GET | `/api/v2/exchange-details/{{code}}` | `conn_mod_def::GMP1-ohZ3mA::IPeDkdrZTRCoMbg315wQtQ` |

### BulkFundamentals

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Bulk Fundamental Data for an Exchange | GET | `/api/bulk-fundamentals/{{exchange}}` | `conn_mod_def::GMP1-72LSv0::MEBnNyh4TMKHr_5WuIJcOQ` |
| Retrieve Bulk Fundamentals for an Exchange | GET | `/api/v1.1/bulk-fundamentals/{{exchange}}` | `conn_mod_def::GMP1--Q6JEw::Fk6ekNe4RiWzHgAX5ZVTuw` |

### Fundamentals

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fundamental Data for a Symbol | GET | `/api/fundamentals/{{ticker}}` | `conn_mod_def::GMP1-7jh_Mc::aMGPlRwVS3KEDDbsOqdbBg` |
| Retrieve Filtered Fundamental Data for a Symbol Using Fundamentals v1.1 | GET | `/api/v1.1/fundamentals/{{ticker}}` | `conn_mod_def::GMP1-8td7gQ::UA-8DOx9SHyMNeye-oHupg` |

### EquityAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyse Equity by ISIN | GET | `/api/mp/praams/analyse/equity/isin/{{isin}}` | `conn_mod_def::GMP1_J4LLoQ::QV23Re1OQPeoLvSt2nzOsg` |
| Analyse Equity by Ticker | GET | `/api/mp/praams/analyse/equity/ticker/{{ticker}}` | `conn_mod_def::GMP1_IcM5mM::rh9Xdik0Tfq0LlA4nL38lg` |

### BankBalanceSheet

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bank Balance Sheet by ISIN | GET | `/api/mp/praams/bank/balance_sheet/isin/{{isin}}` | `conn_mod_def::GMP1_RFEJaI::EvtqvEYeRMa1se2o4iuG9g` |
| Get a Bank Balance Sheet by Ticker | GET | `/api/mp/praams/bank/balance_sheet/ticker/{{ticker}}` | `conn_mod_def::GMP1_UFf8Ys::DuT4b2jQTXm4BwVL6DjHxQ` |

### BankIncomeStatement

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bank Income Statement by ISIN | GET | `/api/mp/praams/bank/income_statement/isin/{{isin}}` | `conn_mod_def::GMP1_TzDGkk::DQ56PuCuQAmBubMtgrvUCg` |
| Get Bank Income Statement by Ticker | GET | `/api/mp/praams/bank/income_statement/ticker/{{ticker}}` | `conn_mod_def::GMP1_Vv3uuc::kJNrVYpUTMWE5Z6T97Do0A` |

### TickerLogo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticker Logo | GET | `/api/logo/{{symbol}}` | `conn_mod_def::GMP1_cZqWmc::gUqEdiNGT--Ns4ElEsivDw` |
| Get Ticker Logo as SVG | GET | `/api/logo-svg/{{symbol}}` | `conn_mod_def::GMP1_te5AFw::vZabUlrgTBCQWqqJaNs5nA` |

### EquityReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Equity Report by ISIN Using PRAAMS | GET | `/api/mp/praams/reports/equity/isin/{{isin}}` | `conn_mod_def::GMP1_lw2pLg::BEGK7e8aT_i3MpWkgjpdKw` |
| Get an Equity Report by Ticker | GET | `/api/mp/praams/reports/equity/ticker/{{ticker}}` | `conn_mod_def::GMP1_gsPWiI::kGUupuNaQZeOKWZzj1R2Mw` |

### Earnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upcoming Earnings | GET | `/api/calendar/earnings` | `conn_mod_def::GMP19ynP9hE::5FZDfhQnQ8a0Zy7ospnQXA` |

### EarningsTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Trends Data | GET | `/api/calendar/trends` | `conn_mod_def::GMP191RSc7M::LgEdOt_qSUOh-Xfye8soGA` |

### StockScreenerData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Filtered Stock Screener Data | GET | `/api/screener` | `conn_mod_def::GMP2AJvWG1o::x9KAZQalR06wd91U8M6ofw` |

### SearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Stocks, Companies, and ISINs | GET | `/api/search/{{query}}` | `conn_mod_def::GMP2AKFgIj4::zHyNSIrpR062uueosPhqSQ` |

### HistoricalPriceData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve End-of-Day Historical Price Data by Ticker | GET | `/api/eod/{{ticker}}` | `conn_mod_def::GMP1-fmi1Ug::5xa2RX7QRlC7zMT41mO75g` |

### MacroIndicatorData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Macro Indicator Data for a Country | GET | `/api/macro-indicator/{{country}}` | `conn_mod_def::GMP1-goCbUA::_uy3MeCmRg2ugRMuw4531w` |

### EsgCountryDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ESG Country Details Using mp investverte country | GET | `/api/mp/investverte/country/{{symbol}}` | `conn_mod_def::GMP1-gqR-B4::gIbxCwmcSGG75OmfdyaVUg` |

### EsgRatingUsingInvestverte

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ESG Rating Using Investverte for a Company | GET | `/api/mp/investverte/esg/{{symbol}}` | `conn_mod_def::GMP1-gzUMJ4::pOLoU0mDS6imYb9mfdwRsA` |

### UpcomingSplits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upcoming Splits | GET | `/api/calendar/splits` | `conn_mod_def::GMP191YPsDg::pI2d6jbBSBioIPY9-e3ooA` |

### DividendsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upcoming Dividends Calendar | GET | `/api/calendar/dividends` | `conn_mod_def::GMP191w4l1E::Uj1n_LaeT3u-pI0KoedDEw` |

### Ipos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upcoming IPOs | GET | `/api/calendar/ipos` | `conn_mod_def::GMP1917E3Nk::zfoStzm1Q9-Vp9xdGisEpA` |

### CboeIndices

| Action | Method | Path | Action id |
|---|---|---|---|
| List CBOE Indices | GET | `/api/cboe/indices` | `conn_mod_def::GMP1981R93w::okUpC8CqSUOS7l_-2-Onuw` |

### CboeIndexHistoricalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CBOE Index Historical Data | GET | `/api/cboe/index` | `conn_mod_def::GMP199w0asI::RbX6uSCVQWmyORVi8s9_SQ` |

### BulkEodSplitsOrDividendsData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Bulk EOD, Splits, or Dividends Data for an Exchange | GET | `/api/eod-bulk-last-day/{{exchange}}` | `conn_mod_def::GMP1-hFzeKA::U306xZbCTgCw-Lr_brh8dw` |

### SymbolChangeHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Symbol Change History | GET | `/api/symbol-change-history` | `conn_mod_def::GMP199-5ZJA::CrnYXEtHSGqFCSu93yqSIA` |

### InsiderTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Insider Transactions | GET | `/api/insider-transactions` | `conn_mod_def::GMP19_KgYQg::R5qkEf59RA-AQFDl0tSYVA` |

### CdsMarketAggregates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CDS Market Aggregates | GET | `/api/credit-risk/cds-market/aggregates` | `conn_mod_def::GMP19_6M76Q::HujFGo1FRxaoENBNZVjmMw` |

### SovereignCdsSpreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sovereign CDS Spreads | GET | `/api/credit-risk/sovereign/cds-spreads` | `conn_mod_def::GMP1-Ik1ibg::Zikx35NVRPS3KgcLr8LLxA` |

### HqmCorporateBondYields

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HQM Corporate Bond Yields | GET | `/api/credit-risk/corporate/hqm-yields` | `conn_mod_def::GMP1-JCtZNY::PF6KnvuTTzKonlvo_-zc2A` |

### CreditRiskSovereignRiskPremium

| Action | Method | Path | Action id |
|---|---|---|---|
| Risk Premium Using Credit Risk Sovereign | GET | `/api/credit-risk/sovereign/risk-premium` | `conn_mod_def::GMP1-JSD6pQ::vBnRu4XMTo2gPy2qC0OkBw` |

### DefaultSpreadsByRating

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Default Spreads by Rating | GET | `/api/credit-risk/sovereign/default-spreads` | `conn_mod_def::GMP1-JqOmLw::00cwSFWuSm-nGKk8EKCWAw` |

### CorporateCmdi

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Corporate CMDI | GET | `/api/credit-risk/corporate/cmdi` | `conn_mod_def::GMP1-MZ4q44::Yl_vE7e9SLaCUq3nWx8-kg` |

### EconomicEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Economic Events Data | GET | `/api/economic-events` | `conn_mod_def::GMP1-UHKAdQ::nsW9CnfJRfG8R_ozkFlOvA` |

### SovereignCreditRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sovereign Credit Ratings | GET | `/api/credit-risk/sovereign/credit-ratings` | `conn_mod_def::GMP1-Uhmob4::qD1JKJ_9RWm1eKpeoMMpAg` |

### Splits

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Historical Split Data for a Ticker | GET | `/api/splits/{{ticker}}` | `conn_mod_def::GMP1-VurMbg::a2KJT0dLQ4-J01CiT9yPkg` |

### HistoricalCommodityPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Commodity Prices | GET | `/api/commodities/historical/{{code}}` | `conn_mod_def::GMP1-VzvKCI::N6Z9qwRlRo-YbunqNsnC4A` |

### HistoricalDividends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Dividends for a Ticker | GET | `/api/div/{{ticker}}` | `conn_mod_def::GMP1-XEZ7zA::U5ESZcPlRsCpiOaJh_uWMA` |

### EsgCountryScores

| Action | Method | Path | Action id |
|---|---|---|---|
| List ESG Country Scores | GET | `/api/mp/investverte/countries` | `conn_mod_def::GMP1-n9a_Aw::Q-y0Yfd7TwWqdor50ssudg` |

### InvestverteSectors

| Action | Method | Path | Action id |
|---|---|---|---|
| List ESG Sector Scores Using Investverte | GET | `/api/mp/investverte/sectors` | `conn_mod_def::GMP1-orX9R8::tv7TUWztRh6M0X725FFRnQ` |

### InvestverteCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| List ESG-rated Companies from Investverte | GET | `/api/mp/investverte/companies` | `conn_mod_def::GMP1-otNRi4::z_ZcMKeHSpSojOz8wv9dBw` |

### InvestverteSectorDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ESG Sector Details from Investverte | GET | `/api/mp/investverte/sector/{{symbol}}` | `conn_mod_def::GMP1-qppJho::pXt8SobJTSeNPl-nGczeiw` |

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Exchanges (v2) | GET | `/api/v2/exchange-details` | `conn_mod_def::GMP1-xZFm64::0j-5FvOHS0CM6vqan8uihw` |

### ReferenceRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Reference Rates | GET | `/api/rates/reference-rates` | `conn_mod_def::GMP1--lFHkQ::7fLrtQG7TE6CPNCx5KfARg` |

### PolicyRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Policy Rates | GET | `/api/rates/policy-rates` | `conn_mod_def::GMP1--59U2U::35OhT8OtTfusk7hZ-PShqw` |

### SupportedExchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported Exchanges | GET | `/api/exchanges-list` | `conn_mod_def::GMP1-x-zNyo::L_7h6r2QSDW0ehz6_EWdyA` |

### IdentifierMappings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Identifier Mappings | GET | `/api/id-mapping` | `conn_mod_def::GMP1-yzBs8w::JmGrZVtFRh6JUBED4oAcfg` |

### Tickers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Tickers for an Exchange | GET | `/api/exchange-symbol-list/{{exchangeCode}}` | `conn_mod_def::GMP1-zL3sEY::lpJOflJKSj2qOXv1NlskMg` |

### IndexComponentsAndHistoricalChanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Index Components and Historical Changes | GET | `/api/mp/unicornbay/spglobal/comp/{{symbol}}` | `conn_mod_def::GMP1-7h7Ozs::LyUpWh8yTIyB-tdEuW7n8A` |

### IntradayHistoricalPriceData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Intraday Historical Price Data | GET | `/api/intraday/{{ticker}}` | `conn_mod_def::GMP1-88baYE::AyLUwBgZR92hLWT_QhaCOg` |

### FundingStressSpreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Funding-Stress Spreads | GET | `/api/spreads/funding-stress` | `conn_mod_def::GMP1-9nqkcw::Eljl1m7IQym-VgWo92La1w` |

### SpAndDowJonesIndices

| Action | Method | Path | Action id |
|---|---|---|---|
| List S&P and Dow Jones Indices with Details | GET | `/api/mp/unicornbay/spglobal/list` | `conn_mod_def::GMP1-9-QkxU::9ecdelb2RMWTuE23sjfKkg` |

### Equities

| Action | Method | Path | Action id |
|---|---|---|---|
| Explore Equities Using PRAAMS | GET | `/api/mp/praams/explore/equity` | `conn_mod_def::GMP1_HE8n9M::JYcY7FTQR36t3NZhNip_5g` |

### Bonds

| Action | Method | Path | Action id |
|---|---|---|---|
| Explore Bonds Using PRAAMS | GET | `/api/mp/praams/explore/bond` | `conn_mod_def::GMP1_Htbt0E::pIzfFFcCSvCK81FN4tW3zA` |

### BondAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyse a Bond by ISIN | GET | `/api/mp/praams/analyse/bond/{{isin}}` | `conn_mod_def::GMP1_IDR5Ag::QN3PcY5VS1Ch3vsG6UeDCA` |

### SanctionedVessels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sanctioned Vessels | GET | `/api/sanctions/vessels` | `conn_mod_def::GMP1_9knmJY::DmwCr_GHSra8r03E050I8A` |

### BondPraamsReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bond PRAAMS Report by ISIN | GET | `/api/mp/praams/reports/bond/{{isin}}` | `conn_mod_def::GMP1_RL_Apc::FteNHkRBRhaC-SCCH5VgIg` |

### RealTimeStockPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Real-Time Stock Prices | GET | `/api/real-time/{{ticker}}` | `conn_mod_def::GMP1_da8uRg::Mrei8sayThK_x7gDiflg3Q` |

### OptionsContracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Options Contracts | GET | `/api/mp/unicornbay/options/contracts` | `conn_mod_def::GMP1__WvOzY::LqZfzjjpSySj6XcNXJeTLw` |

### OptionsEod

| Action | Method | Path | Action id |
|---|---|---|---|
| Get End-of-Day Options Data | GET | `/api/mp/unicornbay/options/eod` | `conn_mod_def::GMP2ABuhI7M::tSwcfXTgRNu4j0C8gkEHgQ` |

### TechnicalIndicatorData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Technical Indicator Data | GET | `/api/technical/{{ticker}}` | `conn_mod_def::GMP2AJmxyrw::qOWhQwBbSXGhWo3lfe9d4A` |

### UsDelayedStockQuotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get US Delayed Stock Quotes | GET | `/api/us-quote-delayed` | `conn_mod_def::GMP1_ekEXrU::LZ5dUYHUTtCWLc0PH7NQcQ` |

### NewsWordWeights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Top Weighted News Keywords | GET | `/api/news-word-weights` | `conn_mod_def::GMP1_uzv1w4::pTeJ-g6tToCTpmNswLxabw` |

### FinancialNews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Financial News | GET | `/api/news` | `conn_mod_def::GMP1_vcrR2Y::b1wvIgXWSc-3KoSsi1iB-Q` |

### MarketNewsSentimentData

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Market News Sentiment Data | GET | `/api/sentiments` | `conn_mod_def::GMP1_vsa5mg::hnLyU_AoS-iS2bYL5X3PPQ` |

This lists 70 of 83 actions. For anything not here, call `search_one_platform_actions` with platform `eodhd`. The full catalog is at https://www.withone.ai/knowledge/eodhd.

## When a call fails

The error comes from EODHD, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/eodhd

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
