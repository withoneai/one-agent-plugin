---
name: massive
description: Massive is a market data platform that provides APIs for real-time and historical stocks, options, forex, and cryptocurrency data, allowing developers and financial teams to build trading tools, analytics systems, and market intelligence applications with programmatic access. Read and write Massive data through One: trades, exchanges, indicatorsema, tickers, tickersnapshot, quotes and more, 146 actions with real parameter documentation. Use whenever the user asks to look something up in Massive, create or update a record there, or build code against the Massive API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: massive
  generated-from: one-knowledge-base
---

# Massive through One

Massive is a market data platform that provides APIs for real-time and historical stocks, options, forex, and cryptocurrency data, allowing developers and financial teams to build trading tools, analytics systems, and market intelligence applications with programmatic access.

One exposes Massive through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `massive` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Massive is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Massive account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Trades

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trades for a Crypto Ticker | GET | `/v3/trades/{{cryptoTicker}}` | `conn_mod_def::GLtaAeB022g::AhDNKaa9SRmhWCaey0DycQ` |
| Get Trades for a Stock Ticker | GET | `/v3/trades/{{stockTicker}}` | `conn_mod_def::GLtaEKZd7Kg::pbyKWGoSTNmLfPPB_l7Bgw` |
| Get Trades for a Stock Ticker | GET | `/stocks/dev/trades/{{ticker}}` | `conn_mod_def::GLtaEvhomdg::bQAo-CC1ToePYzLlg-J3eA` |
| Get Trades for an Options Ticker | GET | `/v3/trades/{{optionsTicker}}` | `conn_mod_def::GLtaCl8ooJA::UNIFsw-oRQGh0oXgnZiGIg` |

### Exchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchanges Using Options v1 | GET | `/options/v1/exchanges` | `conn_mod_def::GLtaEkjEXhg::YMbkNBBVTmG4Sse5IktzXw` |
| Get Exchanges Using Stocks v1 | GET | `/stocks/v1/exchanges` | `conn_mod_def::GLtaEsFrslg::90t53UYdQ-ifS527ZAgy4w` |
| List Exchanges | GET | `/v3/reference/exchanges` | `conn_mod_def::GLtaDCjojoA::aUqqOy02Q1uVS5M8UPoU5w` |
| List Exchanges Using Crypto v1 | GET | `/crypto/v1/exchanges` | `conn_mod_def::GLtaB8lldsA::e2Lfe1ZyRE6lt7yHyz0-5w` |

### IndicatorsEma

| Action | Method | Path | Action id |
|---|---|---|---|
| Exponential Moving Average Using Indicators EMA | GET | `/v1/indicators/ema/{{cryptoTicker}}` | `conn_mod_def::GLtaANyPj_g::dxBpno2TQVGd7Vz8pQAxQA` |
| Exponential Moving Average Using Indicators EMA | GET | `/v1/indicators/ema/{{indicesTicker}}` | `conn_mod_def::GLtaCDn6YwA::iLUEha8dTyC8Zwy5UHHlyg` |
| Exponential Moving Average Using Indicators EMA | GET | `/v1/indicators/ema/{{stockTicker}}` | `conn_mod_def::GLtaDuykC7g::vGlrKyUgROiJfTbQYNioTA` |

### Tickers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticker Details | GET | `/v3/reference/tickers/{{ticker}}` | `conn_mod_def::GLtaDgO42Tg::iKScc1nvSwWrLp0IuxPR9w` |
| List Tickers | GET | `/v3/reference/tickers` | `conn_mod_def::GLtaDhjeUOA::cJ7O2vVLQtiCE4ZZQVGURw` |
| Tickers Using Snapshot Locale Global Markets Crypto | GET | `/v2/snapshot/locale/global/markets/crypto/tickers` | `conn_mod_def::GLtaATz1uVg::NPZ1k1bSQGSpRe8Gof29KA` |

### TickerSnapshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ticker Snapshot | GET | `/v2/snapshot/locale/us/markets/stocks/tickers/{{stocksTicker}}` | `conn_mod_def::GLtaEJcfs-g::V02tBqQ0Riut8eQ_zTMUrg` |
| Get Ticker Snapshot for a Global Crypto Market | GET | `/v2/snapshot/locale/global/markets/crypto/tickers/{{ticker}}` | `conn_mod_def::GLtaAepVwdg::jlNyb7HbRd-KH7OhpKbshw` |
| Get Ticker Snapshot for a Global Forex Market | GET | `/v2/snapshot/locale/global/markets/forex/tickers/{{ticker}}` | `conn_mod_def::GLtaB0RK1Ug::EPxKXZOXRpWjjSSGxOsyeQ` |

### Quotes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Quotes (NBBO) for a Stock Ticker | GET | `/v3/quotes/{{stockTicker}}` | `conn_mod_def::GLtaECP3XxA::2t6GIXqNTnSnZjbtpsqCvg` |
| Get Quotes for an Options Ticker | GET | `/v3/quotes/{{optionsTicker}}` | `conn_mod_def::GLtaCd2zLaA::_DIZkcyiSrqOB-N1RHO7aA` |
| Quotes Using v3 | GET | `/v3/quotes/{{fxTicker}}` | `conn_mod_def::GLtaBsgKmwg::kd1Ge_xsRJuJYSOXsXC7GA` |

### Indicators

| Action | Method | Path | Action id |
|---|---|---|---|
| Get EMA for an Options Ticker | GET | `/v1/indicators/ema/{{optionsTicker}}` | `conn_mod_def::GLtaCTRrSVg::KcfA0AphTmmWk4kRmUr-HA` |
| Get MACD Using Indicators | GET | `/v1/indicators/macd/{{indicesTicker}}` | `conn_mod_def::GLtaCLtw60g::VOp6WSRHSYecqWVlJ-18pQ` |
| MACD Using Indicators | GET | `/v1/indicators/macd/{{optionsTicker}}` | `conn_mod_def::GLtaCXAIwtg::krOS5dq6TQKeX3Hr_UFzLg` |

### OpenClose

| Action | Method | Path | Action id |
|---|---|---|---|
| Daily Open Close Using v1 Open Close | GET | `/v1/open-close/{{stocksTicker}}/{{date}}` | `conn_mod_def::GLtaECFIsgA::C19rH04kSZmijnif6_4Tuw` |
| Daily Open Close Using v1 Open-Close | GET | `/v1/open-close/{{optionsTicker}}/{{date}}` | `conn_mod_def::GLtaCd5-cMg::xvqcKvuHTcmiabVwhSyH3A` |
| Open Close Using v1 | GET | `/v1/open-close/{{indicesTicker}}/{{date}}` | `conn_mod_def::GLtaEA8JO3g::y5BXHU5URXeItaOZPE6TgA` |

### StockFilings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get 13-F Stock Filings | GET | `/stocks/filings/vX/13-F` | `conn_mod_def::GLtaCxbPC_g::gOg2TV1JSB-UTmPWJTCrSA` |
| Index Stock Filings | GET | `/stocks/filings/vX/index` | `conn_mod_def::GLtaCxqKHBA::WrE533E5TT6iiKDdj-kMjg` |
| List SEC Form 4 Stock Filings | GET | `/stocks/filings/vX/form-4` | `conn_mod_def::GLtaCyHz3Eg::a9qKhIhzSQOGkbQyuqf7Dg` |

### AggsTickerRange

| Action | Method | Path | Action id |
|---|---|---|---|
| Range Aggregates Using v2 Aggs Ticker | GET | `/v2/aggs/ticker/{{indicesTicker}}/range/{{multiplier}}/{{timespan}}/{{from}}/{{to}}` | `conn_mod_def::GLtaB908QqA::amV7AQ1PSym28iMMslkz3Q` |
| Range Using V2 Aggs Ticker | GET | `/v2/aggs/ticker/{{cryptoTicker}}/range/{{multiplier}}/{{timespan}}/{{from}}/{{to}}` | `conn_mod_def::GLtZ__7QfOA::Xz2hgrJ8Tc-WkcWJgAEkkQ` |

### News

| Action | Method | Path | Action id |
|---|---|---|---|
| News Using Benzinga v2 | GET | `/benzinga/v2/news` | `conn_mod_def::GLtaABxoiaA::whdwxPvTShylJUFiO-QZhQ` |
| Ticker News | GET | `/v2/reference/news` | `conn_mod_def::GLtaDERwxkA::LGn4DXYtQ9S2WJQpns09_w` |

### AggsTickerPreviousClose

| Action | Method | Path | Action id |
|---|---|---|---|
| Previous Close Using v2 Aggs Ticker | GET | `/v2/aggs/ticker/{{cryptoTicker}}/prev` | `conn_mod_def::GLtaAODKaug::Np07OVJQRt-ujQl2hJssSg` |
| Previous Close Using v2 Aggs Ticker | GET | `/v2/aggs/ticker/{{stocksTicker}}/prev` | `conn_mod_def::GLtaD53X-7A::4CvF-3vyQWq_Xr9Gze0CHQ` |

### AggsTicker

| Action | Method | Path | Action id |
|---|---|---|---|
| Range Using V2 Aggs Ticker | GET | `/v2/aggs/ticker/{{forexTicker}}/range/{{multiplier}}/{{timespan}}/{{from}}/{{to}}` | `conn_mod_def::GLtaBiRNIAg::XGSmz0ibQhC9B428kcfmCA` |
| Range Using V2 Aggs Ticker | GET | `/v2/aggs/ticker/{{optionsTicker}}/range/{{multiplier}}/{{timespan}}/{{from}}/{{to}}` | `conn_mod_def::GLtaCTJo1iA::oD5Io_rEQtG0DuHAUO_aeQ` |

### MacdIndicatorData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get MACD Indicator Data for a Forex Ticker | GET | `/v1/indicators/macd/{{fxTicker}}` | `conn_mod_def::GLtaBkhX-kA::NclEzzYDQ9a4j2aaIj2ILw` |
| Get MACD Indicator Data for a Stock Ticker | GET | `/v1/indicators/macd/{{stockTicker}}` | `conn_mod_def::GLtaDv54rpg::Ak3v2RpqQTmuwvYrQBjOEg` |

### IndicatorsRsi

| Action | Method | Path | Action id |
|---|---|---|---|
| Relative Strength Index Using Indicators RSI | GET | `/v1/indicators/rsi/{{fxTicker}}` | `conn_mod_def::GLtaBtUHX6g::K0QkbR6YTAmyLldY71sOwQ` |
| Relative Strength Index Using Indicators RSI | GET | `/v1/indicators/rsi/{{optionsTicker}}` | `conn_mod_def::GLtaCWytS2g::HsW93yWdSFmfpV3IQ3Ap7Q` |

### SimpleMovingAverage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Simple Moving Average for an Indices Ticker | GET | `/v1/indicators/sma/{{indicesTicker}}` | `conn_mod_def::GLtaCLsMbLg::C7BfT1euTR2iet2bcAp8bw` |
| Get Simple Moving Average for an Options Ticker | GET | `/v1/indicators/sma/{{optionsTicker}}` | `conn_mod_def::GLtaCe7vtwA::XTeh839eRcyB7KatuHwmgw` |

### FilingSections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Filing Sections for Stocks 10-K vX | GET | `/stocks/filings/10-K/vX/sections` | `conn_mod_def::GLtaCpTwKNg::N6iNS1zdSGueh7nwD5XvUA` |
| Get Filing Sections for Stocks 10-K vX 0 | GET | `/stocks/filings/10-K/vX_0/sections` | `conn_mod_def::GLtaCoQ_aKA::bT-AwttsRaq3bFvMCmbk8g` |

### Dividends

| Action | Method | Path | Action id |
|---|---|---|---|
| Dividends Using Stocks v1 | GET | `/stocks/v1/dividends` | `conn_mod_def::GLtaEuXqusA::IHqEzppISU-eVYqTie-D5A` |
| List Dividends Using Reference v3 | GET | `/v3/reference/dividends` | `conn_mod_def::GLtaDHRowgg::WRHxymckRiaw3Qz854vqwg` |

### OptionsContracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Options Contract | GET | `/v3/reference/options/contracts/{{optionsTicker}}` | `conn_mod_def::GLtaDOqIrAA::U7c6s5NSQOq3gUNp6omuog` |
| List Options Contracts | GET | `/v3/reference/options/contracts` | `conn_mod_def::GLtaDQbFidg::Jj840fpzSoOOJ-Bozn-5ew` |

### StockSplits

| Action | Method | Path | Action id |
|---|---|---|---|
| List Stock Splits | GET | `/v3/reference/splits` | `conn_mod_def::GLtaDXqE-kg::ZbwOZ6fGQCCtJVUYMOrBSg` |
| List Stock Splits | GET | `/stocks/v1/splits` | `conn_mod_def::GLtaEvwsaDg::4lxKugpiT06aE9_IP0BTVw` |

### Ipos

| Action | Method | Path | Action id |
|---|---|---|---|
| List IPO Reference Data | GET | `/v1/reference/ipos` | `conn_mod_def::GLtaE4pyAeg::QHq9e0ClQnKu0t3wESrq1w` |
| List IPOs | GET | `/vX/reference/ipos` | `conn_mod_def::GLtaDYmEIoA::qcHlkCSvQCO2CltQr7v6lw` |

### MarketStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Market Status Now | GET | `/marketstatus/now` | `conn_mod_def::GLtaDgb3pNA::KX86Z8oVRICwqX0RDKoUPg` |
| Market Status Using Futures v1 | GET | `/futures/v1/market-status` | `conn_mod_def::GLtaElLYnRA::HZJXihvlTYKEPmaXc14RGA` |

### ConsensusRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Consensus Ratings for a Ticker | GET | `/benzinga/v1/consensus-ratings/{{ticker}}` | `conn_mod_def::GLtZ_xDiGkg::CIhJvq5KRIS-h1hCUSWa4w` |

### Analysts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analysts Using Benzinga v1 | GET | `/benzinga/v1/analysts` | `conn_mod_def::GLtZ_0yGD_A::Tn2wLs_1Q3KzKfoGnS6Cng` |

### AnalystInsights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analyst Insights from Benzinga v1 | GET | `/benzinga/v1/analyst-insights` | `conn_mod_def::GLtZ_2Yj0Rg::u9hKOthNRjOQn-_wVjAByw` |

### BullsBearsSay

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulls Bears Say Using Benzinga v1 | GET | `/benzinga/v1/bulls-bears-say` | `conn_mod_def::GLtZ_27wC2g::xBSpXdoPTN2lgoRWveY8kw` |

### Earnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Using Benzinga v1 | GET | `/benzinga/v1/earnings` | `conn_mod_def::GLtZ_4qBMFA::JiIxrAeKRzCqhcMU5mtiTA` |

### Firms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Firms Using Benzinga v1 | GET | `/benzinga/v1/firms` | `conn_mod_def::GLtaAAl8RNA::VwnnKMMQT8Om0PtnR2NiVg` |

### Guidance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Guidance Using Benzinga v1 | GET | `/benzinga/v1/guidance` | `conn_mod_def::GLtaADzRRng::Uy99sEE2SSijlrX1td1iow` |

### Ratings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Ratings Using Benzinga v1 | GET | `/benzinga/v1/ratings` | `conn_mod_def::GLtaAF7gzbA::aRT0cHMHQQ6FtiS8Z0yjMA` |

### GroupedDailyUsingLocaleGlobalMarketCrypto

| Action | Method | Path | Action id |
|---|---|---|---|
| Grouped Daily Using Locale Global Market Crypto | GET | `/v2/aggs/grouped/locale/global/market/crypto/{{date}}` | `conn_mod_def::GLtaANyDMAA::3J_yJGtxT32a-yEBcySysg` |

### MacdData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get MACD Data for a Crypto Ticker | GET | `/v1/indicators/macd/{{cryptoTicker}}` | `conn_mod_def::GLtaANyO-4g::CDOj4IirQByhiMzd_b9WEQ` |

### CryptoTickerRsi

| Action | Method | Path | Action id |
|---|---|---|---|
| Relative Strength Index (RSI) for a Crypto Ticker | GET | `/v1/indicators/rsi/{{cryptoTicker}}` | `conn_mod_def::GLtaAOB34gA::xqsTJUOiRue1anzmVVc0mQ` |

### OpenCloseUsingCrypto

| Action | Method | Path | Action id |
|---|---|---|---|
| Open Close Using Crypto | GET | `/v1/open-close/crypto/{{from}}/{{to}}/{{date}}` | `conn_mod_def::GLtaATko6kg::YNUbdjiOSSqgipZ4NLb9Rw` |

### LastCryptoTrade

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Last Trade for a Crypto Pair | GET | `/v1/last/crypto/{{from}}/{{to}}` | `conn_mod_def::GLtaAT_88mA::IZtGk_X7T86l17ts4c_Bbw` |

### SnapshotLocaleGlobalMarketsCrypto

| Action | Method | Path | Action id |
|---|---|---|---|
| Gainers or Losers Using Snapshot Locale Global Markets Crypto | GET | `/v2/snapshot/locale/global/markets/crypto/{{direction}}` | `conn_mod_def::GLtaAUUrBvA::4BqqW2HpRTufwLZDqTFmgA` |

### IndicatorsSma

| Action | Method | Path | Action id |
|---|---|---|---|
| Simple Moving Average Using Indicators SMA | GET | `/v1/indicators/sma/{{cryptoTicker}}` | `conn_mod_def::GLtaAXFjR1A::LeMfpWknRoSgihag_C97GQ` |

### HistoricCryptoTrades

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historic Crypto Trades | GET | `/v1/historic/crypto/{{from}}/{{to}}/{{date}}` | `conn_mod_def::GLtaAeHHZ2A::wOLxukaNTtaT_1HQpXwomA` |

### CryptoTickerBook

| Action | Method | Path | Action id |
|---|---|---|---|
| Ticker Full Book (L2) for a Crypto Ticker | GET | `/v2/snapshot/locale/global/markets/crypto/tickers/{{ticker}}/book` | `conn_mod_def::GLtaAeoC3xg::0ntILo-NQ8ChKEKkh8vxVg` |

### Analytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Analytics Using ETF Global v1 | GET | `/etf-global/v1/analytics` | `conn_mod_def::GLtaAn7_seA::_9vqZxU_R9mdMPl5Zei4Ug` |

### EtfGlobalTaxonomies

| Action | Method | Path | Action id |
|---|---|---|---|
| List ETF Global Taxonomies | GET | `/etf-global/v1/taxonomies` | `conn_mod_def::GLtaAwYlv3A::7_MNa3-mTV-C86YSGNFaFw` |

### Profiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Profiles Using Etf Global v1 | GET | `/etf-global/v1/profiles` | `conn_mod_def::GLtaAwhg6jA::oGwDY7ApT0ykwH3P8KfvWQ` |

### FundFlows

| Action | Method | Path | Action id |
|---|---|---|---|
| Fund Flows Using ETF Global v1 | GET | `/etf-global/v1/fund-flows` | `conn_mod_def::GLtaAxWGNdA::cjJBIF2JSJSsU5AoHtfgtA` |

### MerchantAggregates

| Action | Method | Path | Action id |
|---|---|---|---|
| Merchant Aggregates Using Consumer Spending EU v1 | GET | `/consumer-spending/eu/v1/merchant-aggregates` | `conn_mod_def::GLtaAxhQkNA::Vfv28jb2RumXjgA-lm8cJw` |

### Constituents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ETF Global Constituents | GET | `/etf-global/v1/constituents` | `conn_mod_def::GLtaA1ozHMA::9Qzdy7FOQdeKCuE5kxPTGg` |

### Inflation

| Action | Method | Path | Action id |
|---|---|---|---|
| Inflation Using Fed v1 | GET | `/fed/v1/inflation` | `conn_mod_def::GLtaA8lhOYg::rsD2NqK6SQW_34MbOvD6Nw` |

### InflationExpectations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Inflation Expectations Using Fed v1 | GET | `/fed/v1/inflation-expectations` | `conn_mod_def::GLtaA8qtbIA::RSrRo1kuSPyBky4RNDd5qA` |

### TreasuryYields

| Action | Method | Path | Action id |
|---|---|---|---|
| Treasury Yields Using Fed v1 | GET | `/fed/v1/treasury-yields` | `conn_mod_def::GLtaA9niL2A::q4ZJ8iuEQd2iD7i5ntAtCg` |

### MerchantHierarchy

| Action | Method | Path | Action id |
|---|---|---|---|
| Merchant Hierarchy Using Consumer Spending EU v1 | GET | `/consumer-spending/eu/v1/merchant-hierarchy` | `conn_mod_def::GLtaA_10lag::mfh82MfYQti-LQB9eU2njg` |

### LaborMarket

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Labor Market Data | GET | `/fed/v1/labor-market` | `conn_mod_def::GLtaBDyL2FA::qvdcuLQ6T8KWa1KsZP__Vg` |

### FuturesAggregates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregates Using Futures v1 | GET | `/futures/v1/aggs/{{ticker}}` | `conn_mod_def::GLtaBMp8YKg::mlZu8N-PSbeGsFo0asPuIQ` |

### BalanceSheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Balance Sheets Using Stocks Financials v1 | GET | `/stocks/financials/v1/balance-sheets` | `conn_mod_def::GLtaBQx0USg::vgeP5qcXSZmkgA7UqcRaIg` |

### IncomeStatements

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Income Statements | GET | `/stocks/financials/v1/income-statements` | `conn_mod_def::GLtaBQzzzeA::6DbeSPQ2SGe9LkUumzPxIg` |

### CashFlowStatements

| Action | Method | Path | Action id |
|---|---|---|---|
| Cash Flow Statements | GET | `/stocks/financials/v1/cash-flow-statements` | `conn_mod_def::GLtaBSU_Bvg::PebnG9ERR7OfQLkQpGdRxw` |

### StockFinancialRatios

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Stock Financial Ratios | GET | `/stocks/financials/v1/ratios` | `conn_mod_def::GLtaBbdIOFg::TT3jHd_eRcmPWemjQQM-VQ` |

### GroupedDailyBarsUsingLocaleGlobalMarketFx

| Action | Method | Path | Action id |
|---|---|---|---|
| Grouped Daily Bars Using Locale Global Market FX | GET | `/v2/aggs/grouped/locale/global/market/fx/{{date}}` | `conn_mod_def::GLtaBik6LCg::EMUP5W7RTvOfvx0ORc-Mgg` |

### Ema

| Action | Method | Path | Action id |
|---|---|---|---|
| Get EMA for an FX Ticker | GET | `/v1/indicators/ema/{{fxTicker}}` | `conn_mod_def::GLtaBkie7lA::yi2HAdiFTpyXm95Pd-VAsA` |

This lists 90 of 146 actions. For anything not here, call `search_one_platform_actions` with platform `massive`. The full catalog is at https://www.withone.ai/knowledge/massive.

## When a call fails

The error comes from Massive, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/massive

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
