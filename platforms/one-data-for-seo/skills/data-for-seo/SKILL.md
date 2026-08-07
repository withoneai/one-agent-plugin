---
name: data-for-seo
description: DataForSEO provides a comprehensive suite of RESTful APIs and data services that deliver search-engine results (SERP), keyword metrics, backlinks, app store info, site technical audits, and domain analytics — giving marketers, developers and agencies access to structured SEO, PPC, and web-market data for rank tracking, competitor analysis, keyword research, and more. Read and write Data For SEO data through One: dataforseolabs, backlinks, backlinksdomainpages, referringdomains, backlinkssummary, googlecompetitorsdomain and more, 112 actions with real parameter documentation. Use whenever the user asks to look something up in Data For SEO, create or update a record there, or build code against the Data For SEO API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: data-for-seo
  generated-from: one-knowledge-base
---

# Data For SEO through One

DataForSEO provides a comprehensive suite of RESTful APIs and data services that deliver search-engine results (SERP), keyword metrics, backlinks, app store info, site technical audits, and domain analytics — giving marketers, developers and agencies access to structured SEO, PPC, and web-market data for rank tracking, competitor analysis, keyword research, and more.

One exposes Data For SEO through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `data-for-seo` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Data For SEO is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Data For SEO account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DataforseoLabs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Filters for DataForSEO Labs (AI) | GET | `/v3/dataforseo_labs/available_filters.ai` | `conn_mod_def::GJ2R_EBVTaE::Qj995lVJSU6_3KegcFAOqQ` |
| Get a Domain’s Google Historical Rank Overview (Live) | POST | `/v3/dataforseo_labs/google/historical_rank_overview/live.ai` | `conn_mod_def::GJ2SI3xP7og::iJIq0S2LRIqG5TGImEptBQ` |
| Get Bulk Keyword Difficulty (Live) for Up to 1,000 Keywords | POST | `/v3/dataforseo_labs/bulk_keyword_difficulty/live.ai` | `conn_mod_def::GJ2SHxqKu7U::m2qjcLqzQrOam_VVyTsX8A` |
| Get Bulk Keyword Difficulty Metrics (Live, AI) | POST | `/v3/dataforseo_labs/bulk_keyword_difficulty/live.ai` | `conn_mod_def::GJ2R_Qp7ujg::KuBJ7dNEQ9i55xqt62vx2A` |
| Get Google Historical SERP (Live) for a Keyword | POST | `/v3/dataforseo_labs/google/historical_serp/live.ai` | `conn_mod_def::GJ2SAfDEVXw::f8eckYftTK2aMdj6id1xfA` |
| Get Google Keyword Ideas (Live) | POST | `/v3/dataforseo_labs/google/keyword_ideas/live.ai` | `conn_mod_def::GJ2SJIeOdHQ::mj8g7TnoSCSN1yCIUBzj5A` |
| Get Google Keyword Overview (Live) | POST | `/v3/dataforseo_labs/google/keyword_overview/live.ai` | `conn_mod_def::GJ2SJRSiJps::zsEBJEB2SjWrAWv4ZrnzcA` |
| Get Google Keywords for a Target Site | POST | `/v3/dataforseo_labs/google/keywords_for_site/live.ai` | `conn_mod_def::GJ2SJdWMi4M::pgQ4rRGIR56mLdQDuh10pw` |
| Get Google Keywords Relevant to a Target Site | POST | `/v3/dataforseo_labs/google/keywords_for_site/live.ai` | `conn_mod_def::GJ2SBFo5D9I::d2KJAacxQByOf2sZqCbhgw` |
| Get Google Ranked Keywords for a Target (Live) | POST | `/v3/dataforseo_labs/google/ranked_keywords/live.ai` | `conn_mod_def::GJ2SBX4Czy0::pE5T9JPOReW2Neb5G9ytkQ` |
| Get Google Relevant Pages (Live) for a Target Domain | POST | `/v3/dataforseo_labs/google/relevant_pages/live` | `conn_mod_def::GJ2SJ4oGCAs::WH2-tLbTSFiOF335DAPlhw` |

### Backlinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Filters for Backlinks API | GET | `/v3/backlinks/available_filters` | `conn_mod_def::GJ2R7RxNcZc::nj8arj0xQhKkSc0GVREutg` |
| Get Backlink Page Intersection (Live) | POST | `/v3/backlinks/page_intersection/live.ai` | `conn_mod_def::GJ2R9MN9TrI::aV-ML74PTY2yXjYxlF46sQ` |
| Get Backlink Rank Scores in Bulk (Live) | POST | `/v3/backlinks/bulk_ranks/live.ai` | `conn_mod_def::GJ2R8QfzFHE::3YCOuIiYThaTFAGDtX2hsg` |
| Get Backlink Summary for Bulk Pages/Domains (Live) | POST | `/v3/backlinks/bulk_pages_summary/live.ai` | `conn_mod_def::GJ2SGwxVyhM::tr7GYd3TRnuWiPBmrqAhvA` |
| Get Bulk Backlink Spam Scores (Live AI) | POST | `/v3/backlinks/bulk_spam_score/live.ai` | `conn_mod_def::GJ2R8hZjD_8::bblk3RXpSbaBJ-uCpPaNnw` |
| Get Bulk Live Referring Domain Counts for Multiple Backlink Targets | POST | `/v3/backlinks/bulk_referring_domains/live.ai` | `conn_mod_def::GJ2R8Zi3bzI::Nlog7f_6RNO6xPjZy5-S0A` |
| Get Bulk New & Lost Backlinks Counts (Live) | POST | `/v3/backlinks/bulk_new_lost_backlinks/live.ai` | `conn_mod_def::GJ2R7xzP2G4::yiNgG-MNTyGS0AqAvhAIVg` |
| Get Live Backlinks Domain Intersection | POST | `/v3/backlinks/domain_intersection/live.ai` | `conn_mod_def::GJ2R8x0dwEs::4pITIkiMQTmDiR7tQVaL6w` |
| Get Live Backlinks for a Target (AI) | POST | `/v3/backlinks/backlinks/live.ai` | `conn_mod_def::GJ2SGoWYlnc::Jxc5-rk5RWGSnzKU8ymurA` |
| Get Live Backlinks for a Target (Backlinks Backlinks) | POST | `/v3/backlinks/backlinks/live.ai` | `conn_mod_def::GJ2R7aSkng4::2GxWXRQxTNKQd148ZsMaDA` |
| Get Live Bulk Backlink Counts | POST | `/v3/backlinks/bulk_backlinks/live.ai` | `conn_mod_def::GJ2R7l6ABVE::Onwm0ZLmQs-BiQy0Y40UUA` |

### BacklinksDomainPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Backlink Domain Pages Data | POST | `/v3/backlinks/domain_pages/live.ai` | `conn_mod_def::GJ2SHA6Se6U::EwP0E_zETZy-6Nbe04YXZg` |
| List Backlink Domain Pages (Live) | POST | `/v3/backlinks/domain_pages/live.ai` | `conn_mod_def::GJ2R84hdgfA::c5bwAjvcQ9SL5EkMFBG6QA` |

### ReferringDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Referring Domains for a Backlinks Target | POST | `/v3/backlinks/referring_domains/live.ai` | `conn_mod_def::GJ2R9USGTd4::BYM09E_VRAKdNusBz0paAA` |
| Get Live Referring Domains for a Backlinks Target | POST | `/v3/backlinks/referring_domains/live.ai` | `conn_mod_def::GJ2SHYsR5VA::cA8sDFOQTdmX7lHM2jESfQ` |

### BacklinksSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Backlinks Summary (Live) | POST | `/v3/backlinks/summary/live` | `conn_mod_def::GJ2R9lXPymM::Nj9-HiRVQIKtOlRCcxIKNg` |
| Get a Backlinks Summary (Live) | POST | `/v3/backlinks/summary/live` | `conn_mod_def::GJ2SHgaR4AM::pCCb3d2lRnyWn48CbmTk8g` |

### GoogleCompetitorsDomain

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Competitor Domains (Live, AI) for a Target Domain | POST | `/v3/dataforseo_labs/google/competitors_domain/live.ai` | `conn_mod_def::GJ2SIdvwjoM::1CLob3ULTbCGWtSONlYRAg` |
| Get Google Competitor Domains (Live) | POST | `/v3/dataforseo_labs/google/competitors_domain/live.ai` | `conn_mod_def::GJ2R_mtyhjQ::E7blD662TDG31iOJXtG3WQ` |

### BacklinksAnchors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Backlink Anchors for a Target | POST | `/v3/backlinks/anchors/live.ai` | `conn_mod_def::GJ2SGXgy2ns::4JsXC5cORhGiISixHTczew` |
| Get Live Backlink Anchors for a Target | POST | `/v3/backlinks/anchors/live.ai` | `conn_mod_def::GJ2R7KhbiGE::8znHJAy3Tr-FWgBYgLbNNA` |

### BacklinksDomainPagesSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Backlink Page Summaries for a Domain (Live) | POST | `/v3/backlinks/domain_pages_summary/live.ai` | `conn_mod_def::GJ2R9EEdJMQ::HN0R6cpBQX2NUx6-_B0a1w` |
| Get Backlinks Domain Pages Summary (Live) | POST | `/v3/backlinks/domain_pages_summary/live.ai` | `conn_mod_def::GJ2SHHuQPks::h8-yjzVURE-TMmOYrtjOfw` |

### BulkTrafficEstimation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bulk Traffic Estimation (Live) for Domains, Subdomains, or Pages | POST | `/v3/dataforseo_labs/bulk_traffic_estimation/live.ai` | `conn_mod_def::GJ2R_cZ2PRw::jwyc2IkLR5W4gaGP07hQyg` |
| Get Bulk Traffic Estimations for Domains, Subdomains, or Webpages (Live) | POST | `/v3/dataforseo_labs/bulk_traffic_estimation/live.ai` | `conn_mod_def::GJ2SH9xRkxs::4lFL8HqTRF6ZtU9M13VGHA` |

### BacklinksTimeSeriesSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Backlink Time Series Summary (Live) | POST | `/v3/backlinks/timeseries_summary/live.ai` | `conn_mod_def::GJ2R98TBc7k::348sYXqwSe2sKnEiJjrrNw` |
| Get Backlinks Time Series Summary (Live) | POST | `/v3/backlinks/timeseries_summary/live.ai` | `conn_mod_def::GJ2SHpDJHvg::FtjZp6ReTlKudzHpVyp_ag` |

### GoogleAdsSearchVolume

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Ads Search Volume Data (Live AI) | POST | `/v3/keywords_data/google_ads/search_volume/live.ai` | `conn_mod_def::GJ2SDFnzXXU::xU28R1TqRQCVA0MayRLFhg` |
| Get Google Ads Search Volume Data (Live AI) for Keywords | POST | `/v3/keywords_data/google_ads/search_volume/live.ai` | `conn_mod_def::GJ2SKLsu0EE::t8RQcK62QcaYz7ebLLCYEw` |

### GoogleTrendsCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Trends Categories | GET | `/v3/keywords_data/google_trends/categories` | `conn_mod_def::GJ2SDT_kE3w::5XXO1-3tTCSOsul3zztx_w` |
| List Google Trends Categories (Live) | GET | `/v3/other/kw_data_google_trends_categories/live` | `conn_mod_def::GJ2SGDdI0kk::BkxdxhXjSmCSr23BjzWH5Q` |

### OnPageContentParsing

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse On-Page Content (Live AI) | POST | `/v3/on_page/content_parsing/live.ai` | `conn_mod_def::GJ2SKTj-5MM::rYASbLbIR5aXlUKu7rjZVw` |
| Parse On-Page Content (Live, AI) | POST | `/v3/on_page/content_parsing/live.ai` | `conn_mod_def::GJ2SDj7vHuU::d3ilZ0A_S4O0ymPR0xaKzQ` |

### ChatGptScraperResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live ChatGPT Scraper Results (AI Optimization) | POST | `/v3/ai_optimization/chat_gpt_scraper/live` | `conn_mod_def::GJ2R6G6x2g4::GO8EfUmbQSG0rQVqJEA84Q` |

### LlmResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Live LLM Responses for an LLM Type | POST | `/v3/ai_optimization/{{llmType}}/llm_responses/live.ai` | `conn_mod_def::GJ2R6_jeLGk::-Cpu3A_bTf2Q9ztaV5fzxA` |

### BacklinksCompetitors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Backlink Competitors (Live) for a Target | POST | `/v3/backlinks/competitors/live.ai` | `conn_mod_def::GJ2R8pwXYGw::7rWQg0tVTga_j0_L7F3EVQ` |

### ReferringNetworks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Referring Networks for a Backlinks Target (Live AI) | POST | `/v3/backlinks/referring_networks/live.ai` | `conn_mod_def::GJ2R9dDDuL4::Er_ZDcv9QeqVZLOjunTr1w` |

### BusinessListings

| Action | Method | Path | Action id |
|---|---|---|---|
| Live AI Business Listings Search (Google Maps) | POST | `/v3/business_data/business_listings/search/live.ai` | `conn_mod_def::GJ2R-Zai5go::cNAFwkCFSZacN_g8hKPQNQ` |

### PhraseTrends

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Phrase Trends for a Keyword (AI) | POST | `/v3/content_analysis/phrase_trends/live.ai` | `conn_mod_def::GJ2R-m-c78U::Tp3qhUKeScaIEvbb7-X8Ug` |

### ContentAnalysisSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Content Analysis Summary (Live, AI) | POST | `/v3/content_analysis/summary/live.ai` | `conn_mod_def::GJ2R-7d7xfA::vdcTYKfATw-WbdWVP3l-HQ` |

### DomainIntersection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Intersecting Keywords for Two Domains (Google Domain Intersection Live) | POST | `/v3/dataforseo_labs/google/domain_intersection/live` | `conn_mod_def::GJ2R_vtRrAI::Rh-UV7xwTa6Sa2Ty59mnaQ` |

### HistoricalKeywordData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Historical Keyword Data (Live AI) | POST | `/v3/dataforseo_labs/google/historical_keyword_data/live.ai` | `conn_mod_def::GJ2SAEfz6wE::v8f72Un4RrqR217PBrjcaA` |

### GoogleHistoricalRankOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain’s Google Historical Rank Overview (Live) | POST | `/v3/dataforseo_labs/google/historical_rank_overview/live.ai` | `conn_mod_def::GJ2SARwEpnc::NpyD8lBFQDSqY-Tp6W4ueQ` |

### DataforseoLabsGoogleKeywordIdeas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Keyword Ideas (Live, AI) | POST | `/v3/dataforseo_labs/google/keyword_ideas/live.ai` | `conn_mod_def::GJ2SArCUN_A::ro0KT41DRRKPP_M5E6qx8w` |

### GoogleKeywordOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Keyword Overview (Live, AI) | POST | `/v3/dataforseo_labs/google/keyword_overview/live.ai` | `conn_mod_def::GJ2SA0D4dL8::4kjfNi3PTlqt2-duvN66Vw` |

### GoogleKeywordSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Keyword Suggestions (Live AI) | POST | `/v3/dataforseo_labs/google/keyword_suggestions/live.ai` | `conn_mod_def::GJ2SA9ETBiM::tfrznhG-QQWDF5pRq1pirw` |

### PageIntersectionKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Page Intersection Keywords (Live) | POST | `/v3/dataforseo_labs/google/page_intersection/live.ai` | `conn_mod_def::GJ2SBPAaZDg::6tIuJ4pyQ6uioeYYRVmItA` |

### RelatedKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Related Keywords (Live) for a Target Keyword | POST | `/v3/dataforseo_labs/google/related_keywords/live.ai` | `conn_mod_def::GJ2SBgMmI8Q::bI1jqkDAT9Objd1FOMl3oQ` |

### DataforseoLabsRelevantPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Relevant Pages (Live) for a Domain | POST | `/v3/dataforseo_labs/google/relevant_pages/live.ai` | `conn_mod_def::GJ2SBpJMigI::leYFrXIrRomPC918VZuzAQ` |

### SerpCompetitors

| Action | Method | Path | Action id |
|---|---|---|---|
| List SERP Competitor Domains for Keywords (Live) | POST | `/v3/dataforseo_labs/google/serp_competitors/live.ai` | `conn_mod_def::GJ2SByEcqmc::OjaaL-V7TBe1cZ6GHPGOgA` |

### DataforseoLabsGoogleSubdomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Google Subdomains Data | POST | `/v3/dataforseo_labs/google/subdomains/live.ai` | `conn_mod_def::GJ2SB7fAGoM::8ePsCZfGTMejTmL1qD8nKg` |

### GoogleTopSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Top Searches (Live AI) | POST | `/v3/dataforseo_labs/google/top_searches/live.ai` | `conn_mod_def::GJ2SCFwYtM0::frak-VoRSx2kvgKbyh_agQ` |

### DomainAnalyticsTechnologies

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Filters for Domain Analytics Technologies | GET | `/v3/domain_analytics/technologies/available_filters` | `conn_mod_def::GJ2SCZq5Ye4::xADBTnEVQQ2phmFHc_VnZA` |

### DomainAnalyticsWhoisAvailableFilters

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Filters for WHOIS Domain Analytics | GET | `/v3/domain_analytics/whois/available_filters` | `conn_mod_def::GJ2SCq1XQzY::JSaI4JswSGG4o2rsh2Lukw` |

### DomainAnalyticsWhoisOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Whois Overview (Domain Analytics) | POST | `/v3/domain_analytics/whois/overview/live.ai` | `conn_mod_def::GJ2SC0UNXdE::isZfWoZfQn-r7wRJ_oqx8A` |

### GoogleTrendsExplore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Trends “Explore” Keyword Popularity Data (Live) | POST | `/v3/keywords_data/google_trends/explore/live` | `conn_mod_def::GJ2SDbWtbdU::9QmNDRLyRs-BuFmYfZ8xXw` |

### AiOptimizationKeywordDataLocationsAndLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Optimization Keyword Data Locations and Languages (Live) | POST | `/v3/other/ai_opt_kw_data_loc_and_lang/live` | `conn_mod_def::GJ2SD9S9dAk::Fl3MYF0rTJibWdyKKq_KHw` |

### AiOptLlmMentionAggregatedMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregated LLM Mention Metrics for Targets (Live) | POST | `/v3/other/ai_opt_llm_ment_agg_metrics/live.ai` | `conn_mod_def::GJ2SEJF-FYE::ZEiEzu0aRVuRwWCeMOjGHQ` |

### AiOptLlmMentCrossAggMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregated Metrics for AI Optimization LLM Mentions (Live) | POST | `/v3/other/ai_opt_llm_ment_cross_agg_metrics/live.ai` | `conn_mod_def::GJ2SET9PRAI::K6EqSjn6Q5Slqa7jQurIsA` |

### AiOptLlmMentSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregated LLM Mentions Metrics by Frequently Mentioned Pages (Live) | POST | `/v3/other/ai_opt_llm_ment_search/live.ai` | `conn_mod_def::GJ2SEm4B8NY::hIeE37nkRuy2ZlicnmM5xw` |

### AiOptLlmMentTopDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get LLM Mentions Top Domains (Live) | POST | `/v3/other/ai_opt_llm_ment_top_domains/live` | `conn_mod_def::GJ2SExIRljc::wU3oIiHlTweaVM-FVNH9OQ` |

### LlmMentionsTopPages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get LLM Mentions Top Pages (Live) | POST | `/v3/other/ai_opt_llm_ment_top_pages/live` | `conn_mod_def::GJ2SE8XV4wI::YnA321X1Q5iCVWEh-GYO-w` |

### KwDataDfsTrendsDemography

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Keyword Trends Demography (Live) | POST | `/v3/other/kw_data_dfs_trends_demography/live.ai` | `conn_mod_def::GJ2SFIoVU5k::jDN47xn3TXKPgp2z4JTilg` |

### DataforseoTrendsExplore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DataForSEO Trends Explore Keyword Popularity (Live) | POST | `/v3/other/kw_data_dfs_trends_explore/live.ai` | `conn_mod_def::GJ2SFUGxoQc::pDe-WQBEREG8Vn2lTPbzkg` |

### DataforseoTrendsSubregionInterests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get DataForSEO Trends Subregion Interests (Live) | POST | `/v3/other/kw_data_dfs_trends_subregion_interests/live.ai` | `conn_mod_def::GJ2SFl-1d4E::Hocr322cTWOEvYmluUKtug` |

### KwDataGoogleTrendsExplore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Trends “Explore” Keyword Popularity (Live) | POST | `/v3/other/kw_data_google_trends_explore/live.ai` | `conn_mod_def::GJ2SGNJen_c::qdQcAPaYRUmy4atB-GNHMA` |

### DomainIntersectionBacklinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Domain Intersection Backlinks | POST | `/v3/backlinks/domain_intersection/live.ai` | `conn_mod_def::GJ2SG5EE1-I::_JDj9XucQHyI1dRMRiUXLw` |

### BacklinksPageIntersection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Backlink Page Intersection (Live) | POST | `/v3/backlinks/page_intersection/live.ai` | `conn_mod_def::GJ2SHQOidJ8::bXMRr-zrQDumPaAyCFMKiw` |

### GoogleDomainIntersection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Intersecting Keywords for Two Domains (Google Domain Intersection Live) | POST | `/v3/dataforseo_labs/google/domain_intersection/live` | `conn_mod_def::GJ2SImcLZPk::OwJdToU_R9GbPJuEUM-mJw` |

### GoogleHistoricalSerp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Historical SERP Data (Live) for a Keyword | POST | `/v3/dataforseo_labs/google/historical_serp/live.ai` | `conn_mod_def::GJ2SJAaWzNk::4r3kwjPnS0K9IUdQWDvhKA` |

### GooglePageIntersectionKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Page Intersection Keywords (Live) | POST | `/v3/dataforseo_labs/google/page_intersection/live.ai` | `conn_mod_def::GJ2SJmrLlkE::52g_21PZSliZABAw7-Ld1A` |

### GoogleRankedKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Google Ranked Keywords for a Target (Live) | POST | `/v3/dataforseo_labs/google/ranked_keywords/live.ai` | `conn_mod_def::GJ2SJu1fnQE::EPHNUgAJTJykBEBESLKTeQ` |

### GoogleSubdomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Google Subdomains for a Domain (Live AI) | POST | `/v3/dataforseo_labs/google/subdomains/live.ai` | `conn_mod_def::GJ2SKCrNjr8::5BDkvwugQYKZeiSQIvf2cA` |

### YoutubeOrganicSerpResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Organic SERP Results (Live, Advanced) | POST | `/v3/serp/youtube/organic/live/advanced` | `conn_mod_def::GJ2SLIwSeDY::BhcWkiAyRZKZeul6Wk6s0Q` |

### SerpYouTubeVideoInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get YouTube Video Info (Live Advanced) | POST | `/v3/serp/youtube/video_info/live/advanced` | `conn_mod_def::GJ2SLfCq1i4::0xW0YmqPQFuSV61VQAjqIw` |

### SerpOrganicResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced Live Organic SERP Results for a Search Engine | POST | `/v3/serp/{{searchEngine}}/organic/live/advanced.ai` | `conn_mod_def::GJ2SKk-mmXc::hnkv_nUHS7mp_Y2zPGCsVQ` |

### ChatGptScraperLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Locations for ChatGPT Scraper (Live) | POST | `/v3/ai_optimization/chat_gpt_scraper_locations/live.ai` | `conn_mod_def::GJ2R6PgldCY::lSXlx_4XRy2kYaDsY0aoXg` |

### AiKeywordSearchVolumeData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get AI Keyword Search Volume Data (Live) | POST | `/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live.ai` | `conn_mod_def::GJ2R6cN6kl8::ODKG_agaRnqytPgE2pOKmw` |

### AiOptimizationLlmMentions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Filters for AI Optimization LLM Mentions | POST | `/v3/ai_optimization/llm_mentions/available_filters` | `conn_mod_def::GJ2R6lH0aSk::DxW4zkpyT8G3HP9n-bxeIw` |

This lists 90 of 112 actions. For anything not here, call `search_one_platform_actions` with platform `data-for-seo`. The full catalog is at https://www.withone.ai/knowledge/data-for-seo.

## When a call fails

The error comes from Data For SEO, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/data-for-seo

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
