---
name: api-ninjas
description: API Ninjas is a developer platform that provides a large catalog of REST APIs for data access, utilities, and automation, allowing teams to quickly integrate capabilities such as finance, geocoding, text processing, and validation into applications and workflows. Read and write API Ninjas data through One: airports, exercises, holidays, useragent, countryflag, country and more, 207 actions with real parameter documentation. Use whenever the user asks to look something up in API Ninjas, create or update a record there, or build code against the API Ninjas API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: api-ninjas
  generated-from: one-knowledge-base
---

# API Ninjas through One

API Ninjas is a developer platform that provides a large catalog of REST APIs for data access, utilities, and automation, allowing teams to quickly integrate capabilities such as finance, geocoding, text processing, and validation into applications and workflows.

One exposes API Ninjas through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `api-ninjas` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm API Ninjas is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real API Ninjas account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Airports

| Action | Method | Path | Action id |
|---|---|---|---|
| Airport Suggest | GET | `/v1/airportsuggest` | `conn_mod_def::GMCeslympQ4::sgizXaL9Q7uBpTHG1CfktA` |
| Get Airports | GET | `/v1/airports` | `conn_mod_def::GMCesmkKzzI::AD6hUIH0Q-um5np3iAy18g` |
| List Airports | GET | `/v1/airportslist` | `conn_mod_def::GMCesiaA-Qo::GegUojtPTNyrP7FBrRkBug` |

### Exercises

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Exercises | GET | `/v1/allexercises` | `conn_mod_def::GMCevsHpSvY::foeNWFwUTgubpCkZ_6vvgQ` |
| List Exercises | GET | `/v1/exercises` | `conn_mod_def::GMCevs084C4::i0j9PY5QQKm-2YDsIQXVxA` |

### Holidays

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Whether a Date Is a Holiday | GET | `/v1/isholiday` | `conn_mod_def::GMCewCJZNkM::ioMYTZwqRTOsc9g6LK8yJg` |
| List Holidays | GET | `/v2/holidays` | `conn_mod_def::GMCewBYsU78::gVtG9vslTOu0JVucq1HLiw` |

### UserAgent

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate User Agent | GET | `/v1/useragentgenerate` | `conn_mod_def::GMCezb2OipY::B6rLMHl2RFaE4PUFspy1_w` |
| Parse User Agent | GET | `/v2/useragentparse` | `conn_mod_def::GMCezaPKmpo::p4lt4o3rQsChDWRoMtNYFw` |

### CountryFlag

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Country Flag | GET | `/v1/countryflag` | `conn_mod_def::GMCeuLVCstY::QCNufesWSe68hYPA6v8lNQ` |

### Country

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Country Data | GET | `/v1/country` | `conn_mod_def::GMCeuQdkal4::2xJPxZgSRWeHW4USoPxxAA` |

### CarMakes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Car Makes | GET | `/v1/carmakes` | `conn_mod_def::GMCetPuvJKs::6AX95f3rSZ2qpKmG6mjA3w` |

### Counter

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch and Optionally Update a Counter | GET | `/v1/counter` | `conn_mod_def::GMCetyMy4e8::6hVdAc8GR8ieVHfEC4AGLw` |

### CommoditySnapshot

| Action | Method | Path | Action id |
|---|---|---|---|
| Commodity Snapshot | GET | `/v1/commoditysnapshot` | `conn_mod_def::GMCetyddjM0::zw3F96V6SvCIaMElKTpZBg` |

### HistoricalCommodityPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Commodity Prices | GET | `/v1/commoditypricehistorical` | `conn_mod_def::GMCetz7EfnM::f_HfFw6SRZmg8sd-DDjxBQ` |

### Countries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Countries | GET | `/v1/allcountries` | `conn_mod_def::GMCet_YLJAw::EjQsHuw9TKeyVWlj9hX0gw` |

### County

| Action | Method | Path | Action id |
|---|---|---|---|
| Get County Details | GET | `/v1/county` | `conn_mod_def::GMCeuJ6FyS8::LH9Vk-XrR0CYK0GKf7DTRA` |

### Covid19

| Action | Method | Path | Action id |
|---|---|---|---|
| Get COVID-19 Data | GET | `/v1/covid19` | `conn_mod_def::GMCeuK1WUKk::ovCCkDhpS0Gmaz0Ctewewg` |

### CountryFlags

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Country Flags | GET | `/v1/allcountryflags` | `conn_mod_def::GMCeuVPbwTI::8k6gDzFqR8K92SeaOkkfqQ` |

### DadJokes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dad Jokes | GET | `/v1/dadjokes` | `conn_mod_def::GMCeum7TSo4::0vZGuMIeRKWCQ939tplVwg` |

### DayInHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Day in History | GET | `/v1/dayinhistory` | `conn_mod_def::GMCeum9yGWY::4kqDqwE1Tpm56M9dwXoD9Q` |

### CurrencyVolatilityForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Currency Volatility Forecast | GET | `/v1/currencyvolatilityforecast` | `conn_mod_def::GMCeunqdn60::NsCQzv4VTKqPKxpGyODY_Q` |

### CurrencyVolatilityHistorical

| Action | Method | Path | Action id |
|---|---|---|---|
| Currency Volatility Historical | GET | `/v1/currencyvolatilityhistorical` | `conn_mod_def::GMCeupz5S4k::tncOOzTnRvqc7CoCy_aTWA` |

### EarningsCalendarCompanies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Earnings Calendar Companies | GET | `/v1/earningscalendarlist` | `conn_mod_def::GMCeu68wl1E::l5S2ObAyQE6R8iLqWH4UqQ` |

### EarningsTranscript

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Transcript | GET | `/v1/earningstranscript` | `conn_mod_def::GMCeu6_bz-4::bLzCOY7UTKyKEV7cLRxrnA` |

### Earnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Data | GET | `/v1/earnings` | `conn_mod_def::GMCeu7H8s7U::Z4u8XQrFQJuGykygqjKfDQ` |

### EarningsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings Calendar | GET | `/v1/earningscalendar` | `conn_mod_def::GMCeu71ZMaE::46V8_TukS1WGkx8y-1CK3A` |

### UpcomingEarnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Upcoming Earnings | GET | `/v1/upcomingearnings` | `conn_mod_def::GMCeu8VTss8::6fUArfmvTRKUpUWcHWEk6A` |

### EarningsTranscriptParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| List Earnings Transcript Participants | GET | `/v1/earningstranscriptparticipants` | `conn_mod_def::GMCevHdC9bM::joI93HixQvuXwHofccN4uA` |

### EarningsTranscriptSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Earnings Transcript Search | GET | `/v1/earningstranscriptsearch` | `conn_mod_def::GMCevIRE_oY::AUQ8u5ZLRi2-_YJcL2zW1g` |

### Embeddings

| Action | Method | Path | Action id |
|---|---|---|---|
| Embeddings | POST | `/v1/embeddings` | `conn_mod_def::GMCevPbVvAA::NnZh7M7tSPiJPb_RTKNj7w` |

### ElectricVehicleModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Electric Vehicle Models | GET | `/v1/electricvehiclemodels` | `conn_mod_def::GMCevPxFlrw::rOte6ySFRq2pwG8smsxJlw` |

### Etf

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ETF Information | GET | `/v1/etf` | `conn_mod_def::GMCevP2WjY0::n3eEbAUNRAKGppXvTW7NJw` |

### ElectricVehicleMakes

| Action | Method | Path | Action id |
|---|---|---|---|
| List Electric Vehicle Makes | GET | `/v1/electricvehiclemakes` | `conn_mod_def::GMCevP3gMqQ::K0DgbJjzSVSywByWUer8rw` |

### Emojis

| Action | Method | Path | Action id |
|---|---|---|---|
| List Emojis | GET | `/v1/emoji` | `conn_mod_def::GMCevSBK7OI::kXaSQOz7QDyQ9QDbdfGx4g` |

### ExchangeRate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Exchange Rate | GET | `/v1/exchangerate` | `conn_mod_def::GMCevYovShU::QF9exjw8Sg2B-5n1O0jfNA` |

### EtfTickers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Supported ETF Tickers | GET | `/v1/etflist` | `conn_mod_def::GMCevY5JlSw::RK7D4vz7Q4SFl3yNtQ46gg` |

### Etfs

| Action | Method | Path | Action id |
|---|---|---|---|
| Search ETFs | GET | `/v1/etfsearch` | `conn_mod_def::GMCevZFXdYY::hZpZO4tfTnGcrWZdJ-ReOw` |

### HistoricalExchangeRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Exchange Rates | GET | `/v1/exchangeratehistorical` | `conn_mod_def::GMCevbl2e0U::TqSz9yX5St-ozWK5JiOROw` |

### EvChargerLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get EV Charger Locations | GET | `/v1/evcharger` | `conn_mod_def::GMCevkD-bco::1Nk5Cr0IRBigOyZt0kqjvw` |

### Jokes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Jokes | GET | `/v1/jokes` | `conn_mod_def::GMCew0rc_Jo::F_MHnspkS06x7KcWWPbbbg` |

### JokeOfTheDay

| Action | Method | Path | Action id |
|---|---|---|---|
| Joke of the Day | GET | `/v1/jokeoftheday` | `conn_mod_def::GMCew1jzkz0::3ZNKnPtjQZekSNXM2khzQQ` |

### PasswordGenerator

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Random Password | GET | `/v1/passwordgenerator` | `conn_mod_def::GMCexRGHwgc::iiXd8aQRTG-hkftcYCnEeA` |

### Population

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Population | GET | `/v1/population` | `conn_mod_def::GMCexRKNg1Y::8AttbgLTR1SymvRaXhzVrg` |

### PublicHoliday

| Action | Method | Path | Action id |
|---|---|---|---|
| Is Public Holiday | GET | `/v1/ispublicholiday` | `conn_mod_def::GMCexegPbxM::z6oPCOIaRySD003zErd5Nw` |

### QuoteOfTheDay

| Action | Method | Path | Action id |
|---|---|---|---|
| Quote of the Day | GET | `/v2/quoteoftheday` | `conn_mod_def::GMCexoYEi1o::6WKpjHDmQ1yH3PT17CDfDQ` |

### RhymingWords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rhyming Words | GET | `/v1/rhyme` | `conn_mod_def::GMCex9qPOrs::M0j6aAWGQouG84AxOM0y7A` |

### RoutingNumberInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Routing Number Information | GET | `/v1/routingnumber` | `conn_mod_def::GMCex-FIkFk::-cVkOSkeSLavtD3QL6hW_Q` |

### SalesTaxBreakdowns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sales Tax Breakdowns | GET | `/v1/salestax` | `conn_mod_def::GMCeyAOCl6U::mgtk8JEpRwKBeoO-rhwdeA` |

### SalesTax

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Sales Tax | GET | `/v1/salestaxcalculator` | `conn_mod_def::GMCeyHEbw8g::ra1oqCf9QXKcpZFrY4FU_Q` |

### SecFilings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get SEC Filings | GET | `/v1/sec` | `conn_mod_def::GMCeyIJODEc::WB-o2jdGSZ-0yNDgxexrWg` |

### SortCodeInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sort Code Information | GET | `/v1/sortcode` | `conn_mod_def::GMCeyIliyKQ::k9iJ1QoRTnaHh4h-ytRqqw` |

### SanctionsScreening

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Sanctions Screening | GET | `/v1/sanctionsscreening` | `conn_mod_def::GMCeyI0_QO4::XSGXFRgKSUmZx7S9swyeyQ` |

### Sentiment

| Action | Method | Path | Action id |
|---|---|---|---|
| Sentiment Analysis | GET | `/v1/sentiment` | `conn_mod_def::GMCeyJLf1ZU::5XiwPrHeRai9WzhJyZcYUg` |

### StockExchanges

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Stock Exchanges | GET | `/v1/allstockexchanges` | `conn_mod_def::GMCeyP9cqzY::l_9dDtlzRd6ecXJPf-ul3A` |

### StockExchange

| Action | Method | Path | Action id |
|---|---|---|---|
| Stock Exchange | GET | `/v1/stockexchange` | `conn_mod_def::GMCeyQ41sso::cE8kTwUNSHOqgO-vMAxFQA` |

### Spellcheck

| Action | Method | Path | Action id |
|---|---|---|---|
| Spellcheck | GET | `/v1/spellcheck` | `conn_mod_def::GMCeyRC9q84::Vjy13hXMR6-JoEDoxORkgw` |

### SortCodeSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Sort Code Search | GET | `/v1/sortcodesearch` | `conn_mod_def::GMCeyRQ3vj0::6h3pRM4STCy-QLXB69vxgA` |

### VinLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| VIN Lookup | GET | `/v1/vinlookup` | `conn_mod_def::GMCezqzU98Y::S9vpvTvvQGa6QrUHMfkwOQ` |

### WeatherForecast

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Forecast | GET | `/v1/weatherforecast` | `conn_mod_def::GMCezrjXhD4::I7jBXxvZRC2812OuV-RWCA` |

### PhoneValidation

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Phone | GET | `/v1/validatephone` | `conn_mod_def::GMCezuqQK84::r8dcOZaNQAGx_ejdNgSc4g` |

### CarTrims

| Action | Method | Path | Action id |
|---|---|---|---|
| List Car Trims | GET | `/v1/cartrims` | `conn_mod_def::GMCetPpH1-s::H__FibQtSvi1-eSFqUGyGA` |

### CommodityPrice

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Commodity Price | GET | `/v1/commodityprice` | `conn_mod_def::GMCetwA1v18::KrwrhBXZRFaCP7G36FLe-A` |

### InsidersList

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insiders List | GET | `/v1/insiderslist` | `conn_mod_def::GMCewcFxafw::-uE99Tm6QzuVbryWg7Yq3w` |

### InstitutionalInvestors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Institutional Investors | GET | `/v1/institutionalinvestors` | `conn_mod_def::GMCewcbI9xo::3JhloOQ0Tt6MD9vEwwcCKg` |

### InstitutionalHoldings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Institutional Holdings | GET | `/v1/institutionalholdings` | `conn_mod_def::GMCewdb7R9c::gWGyd7OlRVOaRd4mPPBABQ` |

### InsiderTransactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Insider Transactions | GET | `/v1/insidertransactions` | `conn_mod_def::GMCewdcnJZs::jgo_L62ITaCeZ1z5Ztvsgg` |

### InsiderDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Insider Details | GET | `/v1/insiderdetails` | `conn_mod_def::GMCewe3iFOg::8OZpKWToSj2KuL73p_Sl5w` |

### HistoricalInterestRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Interest Rates | GET | `/v2/interestratehistorical` | `conn_mod_def::GMCewlt3c2Y::Pt2GWqFbSU6bM8idTodcPw` |

### IpLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| IP Lookup | GET | `/v1/iplookup` | `conn_mod_def::GMCewmcUT3k::Na3gPBO0Sl2fya8HXSAyOg` |

This lists 70 of 207 actions. For anything not here, call `search_one_platform_actions` with platform `api-ninjas`. The full catalog is at https://www.withone.ai/knowledge/api-ninjas.

## When a call fails

The error comes from API Ninjas, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/api-ninjas

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
