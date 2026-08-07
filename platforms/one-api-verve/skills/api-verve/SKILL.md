---
name: api-verve
description: APIVerve is an API marketplace and access platform that provides a single key for 300+ production APIs with consistent response schemas, unified billing, and predictable pricing, allowing developers to integrate multiple services quickly without managing separate contracts or authentication flows. Read and write API Verve data through One: math, colorconverter, counter, horoscope, emoji, companylookup and more, 459 actions with real parameter documentation. Use whenever the user asks to look something up in API Verve, create or update a record there, or build code against the API Verve API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: api-verve
  generated-from: one-knowledge-base
---

# API Verve through One

APIVerve is an API marketplace and access platform that provides a single key for 300+ production APIs with consistent response schemas, unified billing, and predictable pricing, allowing developers to integrate multiple services quickly without managing separate contracts or authentication flows.

One exposes API Verve through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `api-verve` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm API Verve is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real API Verve account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Math

| Action | Method | Path | Action id |
|---|---|---|---|
| Base Conversion Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-lWruTLg::lj68DRxJTbyuIW-D3moq4Q` |
| Basic Arithmetic Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-ljvuU_g::zgv9k6HPSiSK_1UgTi1Vqw` |
| Evaluate Expression Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-ljhT26A::uqcB8uknSUm8osJC_fJNDQ` |
| Factorial Using Math | POST | `/v1/math` | `conn_mod_def::GMa-loESIGg::az9d-IqQT7OLzC-E-fTQrw` |
| Fibonacci Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-liWyMHg::p5W5GKP0R-qwuv5PZYecFw` |
| GCD and LCM Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-liXI1Vg::HbYhrTOGRm-VpK1-He2XPA` |
| Number Properties Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-luaW9Qg::1u-_saClQQqOzyc912QqJg` |
| Prime Factorization Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-lv_dHGg::hbVuZ1cjSB6b6vsL3Qnr4Q` |
| Single Number Operations Using Math Calculator | POST | `/v1/math` | `conn_mod_def::GMa-lvMhh0g::fzIQUGibSfWxC5xCdRbZhQ` |

### ColorConverter

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Color from CMYK Using Color Converter | GET | `/v1/colorconverter` | `conn_mod_def::GMa-k-O_72g::0Hj-pCMQQ4GCc9vi215zDw` |
| Convert Color from Hex | GET | `/v1/colorconverter` | `conn_mod_def::GMa-k9SN83g::NpBdNSHrSc-RVbgbCurOjg` |
| Convert Color from HSL Using Color Converter | GET | `/v1/colorconverter` | `conn_mod_def::GMa-k__yaRg::365x99B7T5WhioKwfSbG3g` |
| Convert Color from Name Using Color Converter | GET | `/v1/colorconverter` | `conn_mod_def::GMa-lG7rYGg::XFNahLCuRXOu1t-TX-Df5A` |
| Convert Color from RGB Using Color Converter | GET | `/v1/colorconverter` | `conn_mod_def::GMa-lHAHFVA::XUg_ySJGS9yHYhZavoaqgw` |

### Counter

| Action | Method | Path | Action id |
|---|---|---|---|
| Decrement a Cloud Counter | GET | `/v1/counter` | `conn_mod_def::GMa-pOT7p4A::R_i0XZANS2-UyPZlvYvC4Q` |
| Delete a Counter | GET | `/v1/counter` | `conn_mod_def::GMa-pONzPng::-440A321RqyRC5JssLFzKg` |
| Get Counter Value Using Cloud Counter | GET | `/v1/counter` | `conn_mod_def::GMa-pOS-Big::ZlFw6hRgTE2POs0Ey4B3gg` |
| Increment a Counter Using Cloud Counter | GET | `/v1/counter` | `conn_mod_def::GMa-pPMPM1A::cG9_0iTHSkS-wr2QSUiUsQ` |
| Set a Counter Value Using Cloud Counter | GET | `/v1/counter` | `conn_mod_def::GMa-pWx5UsA::SsxzYeEWSvKgOH4Bnef6iA` |

### Horoscope

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Horoscope | GET | `/v1/horoscope` | `conn_mod_def::GMa-kToyB6g::32vlQb66Rj6HikwMNyuYxQ` |
| Get Horoscope by Birthdate | GET | `/v1/horoscope` | `conn_mod_def::GMa-kcq0fbA::zr7LwGhmRWKCkYmy4RX3EA` |
| Get Tomorrow's Horoscope by Sign | GET | `/v1/horoscope` | `conn_mod_def::GMa-kdGrrcg::Oqbxv86zQHamuwP9esxdlg` |
| Get Yesterday's Horoscope by Sign | GET | `/v1/horoscope` | `conn_mod_def::GMa-kdsQxOg::zg05YyaFSTeQJaq2vaBL6g` |

### Emoji

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Emoji | GET | `/v1/emoji` | `conn_mod_def::GMa-nxhfSmA::fovwobNwQnKfMR-vOI9kRA` |
| Lookup Emoji | GET | `/v1/emoji` | `conn_mod_def::GMa-n6UFxog::D-eNVcJMSnihT-xXJc1qIg` |
| Search Emoji | GET | `/v1/emoji` | `conn_mod_def::GMa-n6QkLKA::3zGsjx6dR1CNohOKm1uHXg` |
| Search Emoji | GET | `/v1/emoji` | `conn_mod_def::GMa-n7Xf__A::CnuxujtLSAipX9TjCIuvIA` |

### CompanyLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| List Companies by SIC Code Using Company Lookup | GET | `/v1/companylookup` | `conn_mod_def::GMa-riRKfgg::4-4goNUyRUubMkvQOWx5kg` |
| Lookup by CIK Using Company Lookup | GET | `/v1/companylookup` | `conn_mod_def::GMa-rh7Ud4A::gCU1dj9mSKC-uae-wA6MtA` |
| Lookup by Ticker Using Company Lookup | GET | `/v1/companylookup` | `conn_mod_def::GMa-ricAYsA::urjNsWgaRpixh9_lzMYTkg` |
| Search by Name Using Company Lookup | GET | `/v1/companylookup` | `conn_mod_def::GMa-rrA8HWg::EC1VPXUVTSOgz4eZyEbFxw` |

### Birthstones

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Birthstones | GET | `/v1/birthstones` | `conn_mod_def::GMa-vokL1NA::-8pv4cw4QEqWUglyUKeR_A` |
| Get Birthstone by Month | GET | `/v1/birthstones` | `conn_mod_def::GMa-wCjNFuA::RMbYdKabTeWzgYOrrIzdDg` |
| Get Birthstone by Zodiac Sign | GET | `/v1/birthstones` | `conn_mod_def::GMa-wCO4edg::KeTRuvCLQbWQRMiAqseS5A` |
| Get Month by Stone Name Using Birthstones | GET | `/v1/birthstones` | `conn_mod_def::GMa-wDbsalA::LJGSa9cJRY-vBmltP40GiA` |

### HistoricalEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Events by Date | GET | `/v1/historicalevents` | `conn_mod_def::GMa-q1-0CiA::8GT6doX6S1yYjs9NBdkG4A` |
| Get Historical Events by Keyword | GET | `/v1/historicalevents` | `conn_mod_def::GMa-q8S1egg::85GsvzpfSAKwbU4gYRVGKA` |
| Get Historical Events by Year | GET | `/v1/historicalevents` | `conn_mod_def::GMa-q-v8rtg::LSnYWo4cSACFrGQX1M6TPQ` |

### Cocktail

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Random Cocktail Recipe | GET | `/v1/cocktail` | `conn_mod_def::GMa-tXHHfzA::XHhXjTpIRKOaz01vW3OX6A` |
| Get Cocktail Recipe | GET | `/v1/cocktail` | `conn_mod_def::GMa-tM_OXPg::dlFlWI7JR8eJYOZMfrq_Vg` |
| Get Cocktail Recipe by Ingredient | GET | `/v1/cocktail` | `conn_mod_def::GMa-tMrbKqA::lSAz5Cn6Swum2e8SMDz2YQ` |

### ReverseText

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse by Characters (Reverse Text) | POST | `/v1/reversetext` | `conn_mod_def::GMa-xkvimWA::xDv1eTUcRLuGstxOq56Ccw` |
| Reverse by Words (Reverse Text) | POST | `/v1/reversetext` | `conn_mod_def::GMa-xvXWE3A::SeING1P_TGKmu_5XV05HaQ` |
| Reverse Text | POST | `/v1/reversetext` | `conn_mod_def::GMa-xnGg2Ig::4Su28L2rRQqyga5cAqcMFg` |

### AirlineLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Airline from Name Using Airline Lookup | GET | `/v1/airlinelookup` | `conn_mod_def::GMa-yTp9hYg::hbgZ4l5-Snupk_-I5kI5OA` |
| Get Airline Info from IATA | GET | `/v1/airlinelookup` | `conn_mod_def::GMa-yT01kQg::e-9b4ItGT5-1VAd52aM9qQ` |
| Get Airline Info from ICAO | GET | `/v1/airlinelookup` | `conn_mod_def::GMa-yURxGTg::1tvmMUOTQdSu2ZaH3gQ2sw` |

### ImageToText

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text from Image | POST | `/v1/imagetotext` | `conn_mod_def::GMa-kM4_mZg::2eEv7vNQSgOusTZ1f9Kz6g` |
| Extract Text from URL Using Image to Text | POST | `/v1/imagetotext` | `conn_mod_def::GMa-kIyw2sg::BxzJGLkySBK7E1Uz0TOZCA` |

### ChineseZodiac

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Years by Animal Using Chinese Zodiac | GET | `/v1/chinesezodiac` | `conn_mod_def::GMa-kVbXipA::PIdjvuqxRQOvU2AyU6FsyA` |
| Get Zodiac by Date Using Chinese Zodiac | GET | `/v1/chinesezodiac` | `conn_mod_def::GMa-kTwVJ1g::sJusWTZrTzWG2jsidWkmug` |

### MoonPhases

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Moon Phase for a Date | GET | `/v1/moonphases` | `conn_mod_def::GMa-kdG_GnA::EC5eAnIlRXK9rfnbu_mVng` |
| Get Today's Moon Phase | GET | `/v1/moonphases` | `conn_mod_def::GMa-kesqKwg::SOsNRhVBQX20Viqw9DuzQA` |

### Ascii85Encoder

| Action | Method | Path | Action id |
|---|---|---|---|
| Decode from ASCII85 Using ASCII85 Encoder | GET | `/v1/ascii85encoder` | `conn_mod_def::GMa-k1IfHMg::f3InIE_8R_ifye00GKdKFA` |
| Encode to ASCII85 | GET | `/v1/ascii85encoder` | `conn_mod_def::GMa-k1siCwA::3J6lufQzSLyLvxICHI50BQ` |

### Base64

| Action | Method | Path | Action id |
|---|---|---|---|
| Decode from Base64 Using Base64 Encoder/Decoder | GET | `/v1/base64` | `conn_mod_def::GMa-k98V29A::Z8XB1oA1RVGdTaj2IR3loA` |
| Encode to Base64 | GET | `/v1/base64` | `conn_mod_def::GMa-k9p-6qg::pIA68-7QRXOX-lFn26aajg` |

### HtmlEntities

| Action | Method | Path | Action id |
|---|---|---|---|
| Decode HTML Entities | POST | `/v1/htmlentities` | `conn_mod_def::GMa-lHCI82g::1kjBQ06BS4uTZISPXmEPWA` |
| Encode HTML Entities | POST | `/v1/htmlentities` | `conn_mod_def::GMa-lPQAouA::cjdKKv9hSxKF9tzBXIUxmQ` |

### Punycode

| Action | Method | Path | Action id |
|---|---|---|---|
| Decode from Punycode | GET | `/v1/punycode` | `conn_mod_def::GMa-l70-cxA::3bSUh3-AReqntuxjl7Nd5Q` |
| Encode to Punycode | GET | `/v1/punycode` | `conn_mod_def::GMa-l8A_29A::REoy0y0kTwO5CCYZKrzeTw` |

### RelativeTimeFormatter

| Action | Method | Path | Action id |
|---|---|---|---|
| Format from Date Using Relative Time Formatter | GET | `/v1/relativetimeformatter` | `conn_mod_def::GMa-mD-uZug::_iAf-K1HQEilY82sr2a_VQ` |
| Format from Timestamp Using Relative Time Formatter | GET | `/v1/relativetimeformatter` | `conn_mod_def::GMa-mDu4n5A::Wt_BCr6uQj-WGrFlWqzxuw` |

### RomanConverter

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Number to Roman Numerals | GET | `/v1/romanconverter` | `conn_mod_def::GMa-mD-y41g::IVqB9vYcSAeq4L17VwdtkA` |
| Roman to Number Using Roman Numeral Converter | GET | `/v1/romanconverter` | `conn_mod_def::GMa-mEvROpA::6VDaDvJgQJCi_P5DE6LuwA` |

### UnixTimestamp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert a Unix Timestamp to a Date | GET | `/v1/unixtimestamp` | `conn_mod_def::GMa-mLN-Mtg::0-d8tBODT5aZq_Hu9ewD_Q` |
| Date to Timestamp Using Unix Timestamp Converter | GET | `/v1/unixtimestamp` | `conn_mod_def::GMa-mL3jrrA::XFOdFGg_SDOs2SDwF0uJ9A` |

### Unicodeescape

| Action | Method | Path | Action id |
|---|---|---|---|
| Unescape Unicode | POST | `/v1/unicodeescape` | `conn_mod_def::GMa-mL0QSYA::ChSd-763SFCHRdNOEPKXEA` |
| Unicode Escape Using Unicodeescape | POST | `/v1/unicodeescape` | `conn_mod_def::GMa-mP3hIwg::idRKOlEyRsm1LLVQ5Ru9dw` |

### ChartGenerator

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate a Basic Chart Image | POST | `/v1/chartgenerator` | `conn_mod_def::GMa-mnQrgvA::J7LsF3NfRcCkVV21IoH1nw` |
| Generate an Advanced Chart Using Chart Generator | POST | `/v1/chartgenerator` | `conn_mod_def::GMa-mnJPJbg::4P1D1QuyQ5Sc70yVajhl3A` |

### UsernameGenerator

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Usernames Using Email | GET | `/v1/usernamegenerator` | `conn_mod_def::GMa-npWWjBA::Jvh94NEOTz6TYDLTM0OGCA` |
| Generate Usernames Using Username Generator | GET | `/v1/usernamegenerator` | `conn_mod_def::GMa-npLTfEA::YXltO4RCSr2dc92ZbrwfDg` |

### Bible

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bible Verse | GET | `/v1/bible` | `conn_mod_def::GMa-nqCY6BA::OP9J_hxCSmC97cP2Lj6FTA` |
| Get Random Bible Verse | GET | `/v1/bible` | `conn_mod_def::GMa-nzFCWpA::Xh7YGrmJSQ26O_vniL_v7A` |

### TimezoneLookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Timezone by City | GET | `/v1/timezonelookup` | `conn_mod_def::GMa-pHb5WLg::_uCGWd26RwKudCm1gitJ_A` |
| Lookup Timezone by Timezone | GET | `/v1/timezonelookup` | `conn_mod_def::GMa-pG5w4hA::Ez2HVFMaTA-C8cvv-8mpgQ` |

### SpfValidator

| Action | Method | Path | Action id |
|---|---|---|---|
| Test IP Authorization Using SPF Validator | GET | `/v1/spfvalidator` | `conn_mod_def::GMa-qVzTkWA::hnZQKUb9TVqUzBumuBZ4XQ` |
| Validate SPF Record Using SPF Validator | GET | `/v1/spfvalidator` | `conn_mod_def::GMa-qVC-LyA::VVgbenh5TWe4a9eGQx7eHQ` |

### Whoislookup

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup Domain | GET | `/v1/whoislookup` | `conn_mod_def::GMa-qeJNjQA::5seKwwVGTIiWveySFjh6Bw` |
| Lookup IP Using Whoislookup | GET | `/v1/whoislookup` | `conn_mod_def::GMa-qgSKADg::k-7y6Ow2QbaBAR8dCUhkmQ` |

### Trivia

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Random Trivia Question Using Trivia Generator | GET | `/v1/trivia` | `conn_mod_def::GMa-rPoXPmA::LMQMvX7qRR2nMoZCCqHJkA` |
| Get Trivia Category List | GET | `/v1/trivia` | `conn_mod_def::GMa-rPtcHlg::tSXvbBeARkuGQKiqapxM0w` |

### CostLiving

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare Cost of Living | GET | `/v1/costliving` | `conn_mod_def::GMa-rrx6VMg::fVFtBjBhQOu-5IrY2j-1DQ` |
| Get Cost of Living | GET | `/v1/costliving` | `conn_mod_def::GMa-rrBDl3g::h85VOHwARH6wGQL1wh3YJQ` |

### CurrencySymbols

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Currency Symbol Using Currency Symbols | GET | `/v1/currencysymbols` | `conn_mod_def::GMa-r1dBozA::XQYU9ILNSSm9aPxdHBrwkg` |
| Get Currency Symbols by Country | GET | `/v1/currencysymbols` | `conn_mod_def::GMa-r15rVPg::4FHzQtjcRQW2hj57RNXyjA` |

### Earnings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Earnings by Ticker | GET | `/v1/earnings` | `conn_mod_def::GMa-r2Vb8Xg::1HJLTlgAR9OM1CelWCKCWg` |
| Get Earnings Report by CIK | GET | `/v1/earnings` | `conn_mod_def::GMa-r2lctVA::7LI47cStTAmie-15cJh07Q` |

### IncomeTaxCalculator

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Tax with Custom Rate Using Income Tax Calculator | GET | `/v1/incometaxcalculator` | `conn_mod_def::GMa-sT5KeCg::pT3U6WdiR0qypnFFZTJh9w` |

1 more IncomeTaxCalculator actions are available through search.

This lists 90 of 459 actions. For anything not here, call `search_one_platform_actions` with platform `api-verve`. The full catalog is at https://www.withone.ai/knowledge/api-verve.

## When a call fails

The error comes from API Verve, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/api-verve

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
