---
name: search-api
description: SearchApi is a search engine results API platform that provides structured data from Google, Bing, YouTube, Amazon, and other search engines, allowing developers to collect SERP, shopping, maps, and related search data for automation, analytics, and monitoring use cases. Read and write SearchApi data through One: search, account, airbnbexperiencedetails, airbnbpropertydetails, airbnbexperiences, amazoncategories and more, 135 actions with real parameter documentation. Use whenever the user asks to look something up in SearchApi, create or update a record there, or build code against the SearchApi API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: search-api
  generated-from: one-knowledge-base
---

# SearchApi through One

SearchApi is a search engine results API platform that provides structured data from Google, Bing, YouTube, Amazon, and other search engines, allowing developers to collect SERP, shopping, maps, and related search data for automation, analytics, and monitoring use cases.

One exposes SearchApi through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `search-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm SearchApi is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real SearchApi account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| BestBuy Search | GET | `/api/v1/search` | `conn_mod_def::GMZz2907CjM::rR0YWxgxTeGAxzytG8em6g` |
| Bing Copilot Search | GET | `/api/v1/search` | `conn_mod_def::GMZz282n_I8::RR6q54-zTGiloVkHx_eB4Q` |
| Bing Shopping Search | GET | `/api/v1/search` | `conn_mod_def::GMZz3KN7Dxc::xh6s5CCZTQmAdRBla00SrA` |
| Get YouTube Video Details | GET | `/api/v1/search` | `conn_mod_def::GMZz8P7SEws::tNE7qbolQvakShg67JByZw` |
| Google AI Mode Search | GET | `/api/v1/search` | `conn_mod_def::GMZz4CH9OMc::FBhDAiTiTTSjIXFgfdYD0w` |
| Google Events Search | GET | `/api/v1/search` | `conn_mod_def::GMZz4dLuW2E::Bp-SwNlLTrWQrRU-NrxSQA` |
| Google Light Search | GET | `/api/v1/search` | `conn_mod_def::GMZz5MvvBo0::kjpKEvHqRWq7m3_MP4kF6A` |
| Google Maps Directions Search | GET | `/api/v1/search` | `conn_mod_def::GMZz5NiCqBQ::QrbijvXPTyS01v8c_cbVeQ` |
| Google Play Product Search | GET | `/api/v1/search` | `conn_mod_def::GMZz518gGOc::U0phBkmlSDewIoDvjdzxEQ` |
| Google Rank Tracking Search | GET | `/api/v1/search` | `conn_mod_def::GMZz6LCdL1w::-bJos1NpTI-61PetRlCMqA` |
| Google Scholar Cite Search | GET | `/api/v1/search` | `conn_mod_def::GMZz6SWeqY4::bG5cWYQeR62XMY-OE7BPAQ` |
| Google Shopping Filters Search | GET | `/api/v1/search` | `conn_mod_def::GMZz6SyVo4E::oAaQm3g0T4qcRrKQc1fDdg` |

28 more Search actions are available through search.

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Signed-in User Profile | GET | `/api/v1/me` | `conn_mod_def::GMZz18D0HmQ::bjwVS4_9TemifNB9MuHQ-A` |

### AirbnbExperienceDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Airbnb Experience Details | GET | `/api/v1/search` | `conn_mod_def::GMZz18Xwp10::RlEDjeGPRmO6QcmP02_rRw` |

### AirbnbPropertyDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Airbnb Property Details | GET | `/api/v1/search` | `conn_mod_def::GMZz192Ili8::nrcSQxUkStuFv8gcazhrWQ` |

### AirbnbExperiences

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Airbnb Experiences | GET | `/api/v1/search` | `conn_mod_def::GMZz1_SsXA0::LgG4gI57TDWu11L9ZqKJiw` |

### AmazonCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon Categories | GET | `/api/v1/search` | `conn_mod_def::GMZz2GspC18::EHn2LvtfR62XiCIYLwtuvw` |

### AirbnbPropertyReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Airbnb Property Reviews | GET | `/api/v1/search` | `conn_mod_def::GMZz2HuT4gU::QKwuJAkoScKsnW3TCET5HQ` |

### AmazonOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon Offers | GET | `/api/v1/search` | `conn_mod_def::GMZz2H1x7Rc::_6xv9swmS0S9YtgaqoHjeg` |

### AmazonBestsellers

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon Bestsellers | GET | `/api/v1/search` | `conn_mod_def::GMZz2Jnqrs4::Vgw7sIXcSN-UibYv8Brerw` |

### AirbnbProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Airbnb Properties | GET | `/api/v1/search` | `conn_mod_def::GMZz2KE0ftI::Jyi6wTKBQ0KkvqQG-n7Giw` |

### AmazonProduct

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon Product | GET | `/api/v1/search` | `conn_mod_def::GMZz2aCgZms::xp3DjI-oQ52FTemDyDDLRA` |

### AppleAppStoreTopCharts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Apple App Store Top Charts | GET | `/api/v1/search` | `conn_mod_def::GMZz2ax_lnQ::C4CbdiLuQy2pO-oSSzhVlA` |

### AppleAppStoreSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search the Apple App Store | GET | `/api/v1/search` | `conn_mod_def::GMZz2bTSGd0::TzE0WCfsSU20vN0dz2HGbQ` |

### AmazonSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Amazon | GET | `/api/v1/search` | `conn_mod_def::GMZz2bbhd9I::1Uem4pF_SVik32Qd0Ea0rQ` |

### AppleMapsGuides

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Apple Maps Guides | GET | `/api/v1/search` | `conn_mod_def::GMZz2bkg400::Bhi3u2gkRdOzzDegV71eng` |

### AppleProductReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Apple Product Reviews | GET | `/api/v1/search` | `conn_mod_def::GMZz2qq2qtw::cFJPEG6zS3u7n_fRaRsDCg` |

### AppleMapsPlaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Apple Maps Places | GET | `/api/v1/search` | `conn_mod_def::GMZz2rBGR2c::ITE2FXc_TXibpzwTo6gblw` |

### AppleProductSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Apple Product Search | GET | `/api/v1/search` | `conn_mod_def::GMZz2sHIm1M::1oVLoSoXTxKqEUoX-kVReg` |

### AppleMapsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Apple Maps | GET | `/api/v1/search` | `conn_mod_def::GMZz2s0oA-o::TDd4S4Q2TR2nEcmlS2yzNA` |

### BestBuyProductSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| BestBuy Product Search | GET | `/api/v1/search` | `conn_mod_def::GMZz28LnSpc::Og59W-oESwKCk5NmCXP2xw` |

### DuckDuckGoImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Search DuckDuckGo Images | GET | `/api/v1/search` | `conn_mod_def::GMZz3Kki-pE::11Yk5B9RRnSz1pzpPql7dA` |

### SearchBingVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Bing Videos | GET | `/api/v1/search` | `conn_mod_def::GMZz3LOp10c::NXwxqS01Q86GfL12B7eyhw` |

### BingProductPage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Bing Product Page | GET | `/api/v1/search` | `conn_mod_def::GMZz3MVMZMs::WCSOU_MDS-2r2D9MxT7Elw` |

### DuckDuckGoVideos

| Action | Method | Path | Action id |
|---|---|---|---|
| Search DuckDuckGo Videos | GET | `/api/v1/search` | `conn_mod_def::GMZz3bP8JRs::80PjstYKSvKymW7kJ3Wg2Q` |

### SearchEbayProductDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Search eBay Product Details | GET | `/api/v1/search` | `conn_mod_def::GMZz3cISMuo::iUR42t16RR6LjRUGnDPkHg` |

### FacebookBusinessPageAboutSection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Facebook Business Page About Section | GET | `/api/v1/search` | `conn_mod_def::GMZz3rzzYR4::8z2GgRxKSFOKPj5W3pLLrg` |

### AboutThisDomainData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get About This Domain Data | GET | `/api/v1/search` | `conn_mod_def::GMZz3t4a-yA::idSlE458TGu1dPPQ23bdUg` |

### AboutThisStoreData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get About This Store Data | GET | `/api/v1/search` | `conn_mod_def::GMZz3ut_c3I::BkEVs_hgSvyw6CakIfyuhw` |

### FacebookBusinessPageReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Facebook Business Page Reviews | GET | `/api/v1/search` | `conn_mod_def::GMZz34GwErA::R5nGL-4GSUeWhJJDxErh5w` |

### GoogleAdsTransparencyCenterAdDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Ads Transparency Center Ad Details | GET | `/api/v1/search` | `conn_mod_def::GMZz4BQiXHs::hXNGn5CwSD68J0mQS7n8gA` |

### GoogleAdsTransparencyCenterAdvertisers

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Ads Transparency Center Advertisers | GET | `/api/v1/search` | `conn_mod_def::GMZz4Dgh-xU::iuWRoSidRg2YQ6J3OoT5DQ` |

### GoogleAdsTransparencyCenterSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Ads Transparency Center | GET | `/api/v1/search` | `conn_mod_def::GMZz4EPWJ_w::ehGwDapmShaEYyuMkU7GRw` |

### GoogleBooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Books | GET | `/api/v1/search` | `conn_mod_def::GMZz4cFA5j0::LjcQ0cwJQj20TGh23lUjOw` |

### GoogleFinance

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Finance | GET | `/api/v1/search` | `conn_mod_def::GMZz4dLFay0::A45rd8RfSLiQ_ZThnl-iuA` |

### GoogleFlightsCalendar

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Flights Calendar | GET | `/api/v1/search` | `conn_mod_def::GMZz4hjNuKU::9CYjKK-GQrKkhcdwnGi4Rw` |

### GoogleFlightsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Google Flights Search | GET | `/api/v1/search` | `conn_mod_def::GMZz4qRghjI::Vjct0LPDSwSlUfBrodbCqQ` |

### GoogleForumsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Forums | GET | `/api/v1/search` | `conn_mod_def::GMZz4ryY_J0::KuSoagkvQ3aw9DdP6n846g` |

### GoogleHotelsPropertyDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Hotels Property Details | GET | `/api/v1/search` | `conn_mod_def::GMZz4tUOw1U::PbNFrgFuTPGFYuvF7ZA7GQ` |

### GoogleFlightsLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Flights Locations | GET | `/api/v1/search` | `conn_mod_def::GMZz4zUz1_8::2-aV3d2ZSCWJsc_RjIj7ig` |

### SearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Images | GET | `/api/v1/search` | `conn_mod_def::GMZz49MEyvw::2xNNiUSzTvGyKvA-xZW12g` |

### GoogleJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Jobs | GET | `/api/v1/search` | `conn_mod_def::GMZz4-cWQtU::YzQrvTagR1ylw0gEThIVpw` |

### GoogleHotels

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Hotels | GET | `/api/v1/search` | `conn_mod_def::GMZz5C15t4A::0D0XuD_xQuyoVMBENOaBLA` |

### GoogleMapsPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Google Maps Photos Search | GET | `/api/v1/search` | `conn_mod_def::GMZz5LIovKA::4UmkN2yaQKSCd5HXf6Mpag` |

### GoogleLocalResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Local Results | GET | `/api/v1/search` | `conn_mod_def::GMZz5MzlZjY::CE-Q0xTJSI-AqbxJOngd5w` |

### SearchGoogleMaps

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Maps | GET | `/api/v1/search` | `conn_mod_def::GMZz5XV_7Cc::D2FbpaVdQYuq6YNoBPtkbw` |

### SearchGoogleNewsLight

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News Light | GET | `/api/v1/search` | `conn_mod_def::GMZz5YNqfJI::cInwMHoGT4WAbq4iTPYh0w` |

### GoogleNewsPortal

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News Portal | GET | `/api/v1/search` | `conn_mod_def::GMZz5Yb6H8U::xDQFcKaVR1mjIHgEL4Puiw` |

### GoogleMapsReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Maps Reviews | GET | `/api/v1/search` | `conn_mod_def::GMZz5b8lb2w::sRwtc7b5TkqpkY1OUFreQQ` |

### GoogleMapsPlaceDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Maps Place Details | GET | `/api/v1/search` | `conn_mod_def::GMZz5qXIzqI::LYf8SmrfQ_eZ6_K916jMSw` |

### GoogleNewsSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google News | GET | `/api/v1/search` | `conn_mod_def::GMZz5zWxf7w::kUcSRXYjR-ucVrkPyPBLGw` |

### GooglePatentsDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Patents Details | GET | `/api/v1/search` | `conn_mod_def::GMZz50Q8nd4::k_UaZi3XSkiNq-jeozgCnA` |

### GooglePatents

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Patents | GET | `/api/v1/search` | `conn_mod_def::GMZz50nkt04::XQwmgXYJQjCuiD7um1x21w` |

### GooglePlace

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Place | GET | `/api/v1/search` | `conn_mod_def::GMZz51O1l-4::g7RvFwhvSiyj_kimevHGkQ` |

### GooglePlayStoreSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Play Store | GET | `/api/v1/search` | `conn_mod_def::GMZz5-Atp8o::T92uswTtS46y7tcYxqavGQ` |

### GoogleProductSearchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Product Search Results | GET | `/api/v1/search` | `conn_mod_def::GMZz5-nRY3s::yPP_r0mSQ56e6S-uymbhLA` |

### GoogleProductReviews

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Product Reviews | GET | `/api/v1/search` | `conn_mod_def::GMZz5-zPghs::3noIzABSSZmYoSryUmL72g` |

### ProductOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Google Product Offers Search | GET | `/api/v1/search` | `conn_mod_def::GMZz5_pZf50::_8TUkQmERD6ZHHPCScQHqw` |

### GoogleProductPage

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Google Product Page Data | GET | `/api/v1/search` | `conn_mod_def::GMZz6BQlkPo::4VnE1FtBRsqdCWo5Nasm0w` |

### GoogleScholarAuthors

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar Authors | GET | `/api/v1/search` | `conn_mod_def::GMZz6JXRBzc::K1EL-099RPKKTTkL8L-w5w` |

### GoogleProductSpecifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Product Specifications | GET | `/api/v1/search` | `conn_mod_def::GMZz6JvNzGY::H9DgFPYhTwe4iBJ0BrN0Qg` |

### RelatedQuestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Related Questions | GET | `/api/v1/search` | `conn_mod_def::GMZz6JwATTM::nrDE6X7oQ9el-_zAVotLkQ` |

### GoogleScholarCaseLaw

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar Case Law | GET | `/api/v1/search` | `conn_mod_def::GMZz6J5IZTE::BJgxlDr0TE-mCX5BYuTiTg` |

### GoogleShoppingSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Shopping | GET | `/api/v1/search` | `conn_mod_def::GMZz6UCnhQg::q2UtepBlT52v8VjarXvxmA` |

### GoogleScholarSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Scholar | GET | `/api/v1/search` | `conn_mod_def::GMZz6UD5NrQ::Gag1TPjGQveIo0-NhR-gIA` |

### GoogleTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Trends | GET | `/api/v1/search` | `conn_mod_def::GMZz6dZYiJ4::-pn9YlJGQcS-yRlV0WJjqg` |

### GoogleShorts

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Shorts | GET | `/api/v1/search` | `conn_mod_def::GMZz6eeLQUk::kdrnfcdzQxWrQesONyzEQw` |

### GoogleTrendsTrendingNow

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Trends Trending Now | GET | `/api/v1/search` | `conn_mod_def::GMZz6ox5p1g::ZSdbUTrHS46VL7EWKz5kXg` |

### SearchGoogle

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google | GET | `/api/v1/search` | `conn_mod_def::GMZz6pJI3So::DoZEHNv5Q6aOOE0S6KWaPw` |

### GoogleVideosLightSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Google Videos Light | GET | `/api/v1/search` | `conn_mod_def::GMZz6qpU71M::JkEdoGuqR_W8ASQx32y0nw` |

This lists 80 of 135 actions. For anything not here, call `search_one_platform_actions` with platform `search-api`. The full catalog is at https://www.withone.ai/knowledge/search-api.

## When a call fails

The error comes from SearchApi, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/search-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
