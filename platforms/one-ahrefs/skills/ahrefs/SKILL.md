---
name: ahrefs
description: Ahrefs is an all-in-one SEO toolset that helps businesses and marketers improve their website’s search engine rankings through keyword research, backlink analysis, content audits, and competitive insights. Read and write Ahrefs data through One: siteexplorer, webanalytics, brandradar, keywordsexplorer, brandradarprompts, projectcompetitors and more, 95 actions with real parameter documentation. Use whenever the user asks to look something up in Ahrefs, create or update a record there, or build code against the Ahrefs API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ahrefs
  generated-from: one-knowledge-base
---

# Ahrefs through One

Ahrefs is an all-in-one SEO toolset that helps businesses and marketers improve their website’s search engine rankings through keyword research, backlink analysis, content audits, and competitive insights.

One exposes Ahrefs through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ahrefs` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ahrefs is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ahrefs account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### SiteExplorer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Explorer Target’s Keywords History | GET | `/v3/site-explorer/keywords-history` | `conn_mod_def::GJz-x6PUgRM::zai-0o8mR0CpFjUOGEYs0g` |
| Get a Site Explorer Target’s Total Search Volume History | GET | `/v3/site-explorer/total-search-volume-history` | `conn_mod_def::GJz-zNNTW68::PfTm2C5lQTChT801fMMDdg` |
| Get Pages by Traffic | GET | `/v3/site-explorer/pages-by-traffic` | `conn_mod_def::GJz-ytSHxgM::5SThItv8SYSst064Y0wGXA` |
| Get Referring Domains History for a Target | GET | `/v3/site-explorer/refdomains-history` | `conn_mod_def::GJz-zB8r8zs::QcdpeFcPTLWZQsRomoI_jA` |
| Get Site Explorer Backlinks Stats Overview | GET | `/site-explorer/backlinks-stats` | `conn_mod_def::GJz-xeOnPvw::vzC1UMYHRGyxCer2nyQCqw` |
| Get Site Explorer Metrics by Country | GET | `/v3/site-explorer/metrics-by-country` | `conn_mod_def::GJz-yNAGn_I::ohUaXdWfS76tBNiZRtRT5A` |
| Get URL Rating History for a Target (Site Explorer) | GET | `/v3/site-explorer/url-rating-history` | `conn_mod_def::GJz-zXF1IrU::orKWOe6PRNaT3un_29-N2w` |
| List a Target’s External Linked Anchors | GET | `/v3/site-explorer/linked-anchors-external` | `conn_mod_def::GJz-xLkETP8::6bCHqi9YSCSTVtfPAY6EIw` |
| List a Target’s Outgoing Internal Anchors | GET | `/site-explorer/linked-anchors-internal` | `conn_mod_def::GJz-xViNBbQ::jUTZ4S1rQ4WHBODMzr5T8g` |
| List All Backlinks for a Target (Site Explorer) | GET | `/v3/site-explorer/all-backlinks` | `conn_mod_def::GJz-v2c8EaI::TO6oXW4HTYiV1CUG-GSR3A` |
| List Best Pages by Internal Links | GET | `/site-explorer/pages-by-internal-links` | `conn_mod_def::GJz-zrPYav8::1NYsEAgnRyWK538JM9HFxQ` |
| List Broken Backlinks for a Target (Site Explorer) | GET | `/site-explorer/broken-backlinks` | `conn_mod_def::GJz-wAn4gFE::uo0jcyS6TUqbZY0GIZ4Zsg` |

1 more SiteExplorer actions are available through search.

### WebAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Exit Pages Chart (Web Analytics) | GET | `/v3/web-analytics/exit-pages-chart` | `conn_mod_def::GJz-2EIHDcs::JvrWXtFVTwmSI-HGLvTndw` |
| Get a Project’s Operating Systems Versions Chart (Web Analytics) | GET | `/web-analytics/operating-systems-versions-chart` | `conn_mod_def::GJz-5TX_XU4::ScwV7oB3SGWZeJYQC9TXLg` |
| Get a Project’s Web Analytics Cities Chart | GET | `/web-analytics/cities-chart` | `conn_mod_def::GJz-0JXs5ac::1vKdmfFFSYG6FIwSFPhuqQ` |
| Get a UTM Parameter Chart | GET | `/v3/web-analytics/utm-params-chart` | `conn_mod_def::GJz-3tKniR4::PGTihKZcQLuV2oRFbMYLdg` |
| Get a Web Analytics Browsers Chart | GET | `/v3/web-analytics/browsers-chart` | `conn_mod_def::GJz-4XvfJs4::KKBP-XirSpiRTAQBtOfl3w` |
| Get a Web Analytics Languages Chart | GET | `/web-analytics/languages-chart` | `conn_mod_def::GJz-1HS8pE4::MmUrVTGfT8-vpCHCFF-Tmg` |
| Get a Web Analytics Source Channels Chart | GET | `/web-analytics/source-channels-chart` | `conn_mod_def::GJz-3BZ2Zn8::S2pHzodbR6yTY6BecjTNPw` |
| Get a Web Analytics Sources Chart | GET | `/v3/web-analytics/sources-chart` | `conn_mod_def::GJz-3UMz20c::SXXi-MpDQ1yLes-9zOk7mg` |
| Get Web Analytics Browser Versions Chart (for a Project) | GET | `/web-analytics/browser-versions-chart` | `conn_mod_def::GJz-4AVCj0U::vPLXf5rdQQC8BIHi4FUoxw` |

### BrandRadar

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Radar Impressions Overview | GET | `/v3/brand-radar/impressions-overview` | `conn_mod_def::GJz-q14_hwU::H5bSzClWR6eukzokZGr_aA` |
| Get Brand Radar Share of Voice (SoV) Overview History | GET | `/v3/brand-radar/sov-history` | `conn_mod_def::GJz-ryJXXWk::uv7rQL_BQwibTWcIlgfLEw` |
| Get Brand Radar Share of Voice Overview | GET | `/brand-radar/sov-overview` | `conn_mod_def::GJz-rMRwjSM::s4ht38kaQSe6tCMkErTLoA` |

### KeywordsExplorer

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Keyword Explorer Search Suggestions | GET | `/v3/keywords-explorer/search-suggestions` | `conn_mod_def::GJz-sSvZW9U::-ZEqcaGoQxSVnmWFqNwt5w` |
| Get Keyword Explorer Volume by Country | GET | `/keywords-explorer/volume-by-country` | `conn_mod_def::GJz-sqnjK6o::CEzhlvXpS92V1vqi7KzAbg` |
| Get Keywords Explorer Overview | GET | `/keywords-explorer/overview` | `conn_mod_def::GJz-sfjX5CE::CZ0UDVJ5TzSIZxVzqLIlpw` |

### BrandRadarPrompts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brand Radar Prompts for a Report | GET | `/v3/management/brand-radar-prompts` | `conn_mod_def::GJz-s7SZypQ::wf7eiciQRdC8NnGUfCzCug` |
| Create Brand Radar Prompts for a Report | POST | `/management/brand-radar-prompts` | `conn_mod_def::GJz-tDYkVNI::J85zskWiQ1i2e9Kez5ZTMw` |
| Delete Brand Radar Prompts (Management) | PUT | `/v3/management/brand-radar-prompts-delete` | `conn_mod_def::GJz-tLNk-CU::myVKsZ6gT9Orz4yZiW6rig` |

### ProjectCompetitors

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Competitors | GET | `/management/project-competitors` | `conn_mod_def::GJz-tSyG9lU::P_fBEtlrQ2qDBNnMQPOm8w` |
| Add Competitors to a Rank Tracker Project | POST | `/v3/management/project-competitors` | `conn_mod_def::GJz-tbi9CAA::Sb7iGxwHTGir4rf5J0RmVw` |
| Delete a Project’s Competitors | POST | `/management/project-competitors-delete` | `conn_mod_def::GJz-tlgsCRg::hm_8Zzr8TL6tjYLbVVRpiw` |

### KeywordListKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Keywords in a Keyword List | GET | `/management/keyword-list-keywords` | `conn_mod_def::GJz-ttQ7yTg::EA34HNJZQAWeyKMHssfpUg` |
| Add Keywords to a Keyword List | PUT | `/v3/management/keyword-list-keywords` | `conn_mod_def::GJz-t3G7xpc::R5nyhLtsQLWAIGxlhC3Ysw` |
| Delete Keywords from a Keyword List | PUT | `/management/keyword-list-keywords-delete` | `conn_mod_def::GJz-t_tmqys::7gTYajJ3TH-DrWvJybJflA` |

### ProjectKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Keywords | GET | `/management/project-keywords` | `conn_mod_def::GJz-uQQYF0s::FGQnTszzS2Czl8gllgJN_Q` |
| Add Keywords to a Rank Tracker Project (Assign Locations & Tags) | PUT | `/v3/management/project-keywords` | `conn_mod_def::GJz-ubjh9rE::3y87gCHFQLGCMDHAD4zX0Q` |
| Delete Keywords from a Rank Tracker Project | PUT | `/management/project-keywords-delete` | `conn_mod_def::GJz-uIlvvas::eeAmlyeiTbS3HCI7u63l6g` |

### ManagementProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Projects (Management) | GET | `/v3/management/projects` | `conn_mod_def::GJz-uszPLvA::NnQVueThShOy2PdEMJisJQ` |
| Create a Project (Management) | POST | `/management/projects` | `conn_mod_def::GJz-uz27xR8::ih403eQtT76kz711a6HI8g` |

### AiResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brand Radar AI Responses | GET | `/v3/brand-radar/ai-responses` | `conn_mod_def::GJz-qVAsPJc::TCDw0lpRRj2LA06R8A0Ctw` |

### BrandRadarCitedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brand Radar AI Visibility Cited Domains | GET | `/v3/brand-radar/cited-domains` | `conn_mod_def::GJz-qgV2ymw::vU2IEPigTlebK1OHj07s2g` |

### BrandRadarCitedPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Brand Radar AI Visibility Cited Pages | GET | `/v3/brand-radar/cited-pages` | `conn_mod_def::GJz-qrYBy6g::7xZXYG2gQlaTZ5acj6XRHQ` |

### BrandRadarMentionsOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Brand Radar Mentions Overview | GET | `/v3/brand-radar/mentions-overview` | `conn_mod_def::GJz-rDTkuUo::ozu4Wie7TGinzf5RJ6T5uQ` |

### BrandRadarImpressionsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Brand Radar Impressions History | GET | `/brand-radar/impressions-history` | `conn_mod_def::GJz-rYwK_2Y::FGDfMRJwTemb2Xx_R8Asow` |

### BrandRadarMentionsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Brand Radar Mentions History (Overview History) | GET | `/v3/brand-radar/mentions-history` | `conn_mod_def::GJz-roUlOKA::QRRnRoFCSXSqHBtkyQQnNA` |

### KeywordsExplorerMatchingTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Keyword Ideas (Matching Terms) | GET | `/keywords-explorer/matching-terms` | `conn_mod_def::GJz-r84c30M::VN2DyMyDTYKEUFa2w4dffw` |

### KeywordsExplorerRelatedTerms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Keywords Explorer Related Terms (Keyword Ideas) | GET | `/v3/keywords-explorer/related-terms` | `conn_mod_def::GJz-sIHqN68::G2mvF2yfRhCFxRCudBNQlw` |

### KeywordsExplorerVolumeHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Keywords Explorer Volume History | GET | `/v3/keywords-explorer/volume-history` | `conn_mod_def::GJz-szHih0M::rM4PFo83RhGBPph8w1MxVQ` |

### ManagementLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Management Locations and Languages (by Country) | GET | `/management/locations` | `conn_mod_def::GJz-ukTWiTo::yo1enuipTra7x8PKO0iPwA` |

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Project’s Access Setting | PATCH | `/v3/management/update-project` | `conn_mod_def::GJz-u7fOaUQ::RFXxLkNYQX-uJJ9fnzD36w` |

### SiteAuditPageContent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Site Audit Page Content | GET | `/site-audit/page-content` | `conn_mod_def::GJz-vI8tql4::mXlMoMTTRC-lf_YGd06mxQ` |

### SiteAuditPageExplorerPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Audit Page Explorer Pages | GET | `/v3/site-audit/page-explorer` | `conn_mod_def::GJz-vShb4tc::QeLV2GPOQJSv50PpvWp7qA` |

### SiteAuditProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Audit Project Health Scores | GET | `/site-audit/projects` | `conn_mod_def::GJz-vbB16Tw::8mtvor-oQ1iBcbrL1Z3E0w` |

### SiteAuditIssues

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site Audit Project’s Issues | GET | `/v3/site-audit/issues` | `conn_mod_def::GJz-vi95aOo::plaQVrJhREWWLVHbTJi3Wg` |

### SiteExplorerAnchors

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Explorer Anchors | GET | `/site-explorer/anchors` | `conn_mod_def::GJz-vsl-3zA::4x6q5_KqRpe-Wp5c1soMbw` |

### Refdomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Explorer Referring Domains (Refdomains) | GET | `/v3/site-explorer/refdomains` | `conn_mod_def::GJz-wNNYoH0::v_iGaNe1SbWOY_0rLx0aTA` |

### SiteExplorerOrganicKeywords

| Action | Method | Path | Action id |
|---|---|---|---|
| List Organic Keywords for a Target (Site Explorer) | GET | `/v3/site-explorer/organic-keywords` | `conn_mod_def::GJz-wjPID0g::F9_xX4yoRgCdNhvLk2XMXA` |

### SiteExplorerTopPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Target’s Top Organic Pages | GET | `/v3/site-explorer/top-pages` | `conn_mod_def::GJz-w4L6mcs::Bq21uEOiTQmh7r8Lm0SHgQ` |

### Linkeddomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Linked Domains (Outgoing Links) for a Site Explorer Target | GET | `/site-explorer/linkeddomains` | `conn_mod_def::GJz-xBywfc4::hSax3MIqR22p78OqdGN2BA` |

### SiteExplorerDomainRating

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Site Explorer Domain Rating | GET | `/site-explorer/domain-rating` | `conn_mod_def::GJz-xmH0tXE::U-DRwDchS06uY8ghoH6kzQ` |

### SiteExplorerDomainRatingHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Explorer Domain Rating History | GET | `/v3/site-explorer/domain-rating-history` | `conn_mod_def::GJz-xw0woWE::oEOTbNsRS4SjFR2bkhDJVw` |

### SiteExplorerMetrics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Site Explorer Metrics Overview | GET | `/v3/site-explorer/metrics` | `conn_mod_def::GJz-yDcPWNw::Rjad010URHKVPUAIAloxBg` |

### SiteExplorerMetricsHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Explorer Target’s Metrics History | GET | `/v3/site-explorer/metrics-history` | `conn_mod_def::GJz-yZ0ofZU::wy7rP9Q9ROilyGIK3bY6Lg` |

### SiteExplorerOutlinksStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Site Explorer Outlinks Stats | GET | `/v3/site-explorer/outlinks-stats` | `conn_mod_def::GJz-yiRCg-0::zcIktceVTserGts6Bf5cdQ` |

### SiteExplorerPagesHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Explorer Target’s Pages History | GET | `/v3/site-explorer/pages-history` | `conn_mod_def::GJz-y3dm9a8::z_9dck76SgiWPRgBSSb56Q` |

### SiteExplorerPagesByBacklinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Explorer Pages by Backlinks | GET | `/site-explorer/pages-by-backlinks` | `conn_mod_def::GJz-zhZxC1Y::dD6yWzYMRNuZtrfU7zU0_g` |

### SiteExplorerPaidPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Site Explorer Paid Pages | GET | `/site-explorer/paid-pages` | `conn_mod_def::GJz-z2JZpJ4::FDdc2OFlSquOGJLZzDofBw` |

### WebAnalyticsCities

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics City Stats (Geography) | GET | `/v3/web-analytics/cities` | `conn_mod_def::GJz-z_W_Zu8::WdiPssVfRjmyace9Y6xxVg` |

### WebAnalyticsContinents

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Continents (Geography) | GET | `/web-analytics/continents` | `conn_mod_def::GJz-0TJlFSA::HHOxzrl-QLin38g9ER78qQ` |

### WebAnalyticsContinentsChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Web Analytics Continents Chart | GET | `/web-analytics/continents-chart` | `conn_mod_def::GJz-0dKGpxg::fXW1f528QcWMvL5840933w` |

### WebAnalyticsCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Country Stats (Geography) | GET | `/v3/web-analytics/countries` | `conn_mod_def::GJz-0m03bnQ::3BzBb7JgQWqvkBGAyUgLFA` |

### WebAnalyticsCountriesChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Web Analytics Countries Chart | GET | `/v3/web-analytics/countries-chart` | `conn_mod_def::GJz-0xwOuXQ::6xnPHKHuSt-aiRqWDlQjDA` |

### WebAnalyticsLanguages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Analytics Languages (by Project) | GET | `/v3/web-analytics/languages` | `conn_mod_def::GJz-0-A38pQ::tRed19HsT86dyRa_TXXI4Q` |

### WebAnalyticsChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Analytics Overview Chart (Project) | GET | `/web-analytics/chart` | `conn_mod_def::GJz-1Pu0kOE::XMxqMsY5RTWOCISAVRbX5w` |

### WebAnalyticsStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Web Analytics Stats (Overview) | GET | `/v3/web-analytics/stats` | `conn_mod_def::GJz-1Y1uMpo::kdbhkMWtSJi2goPVqKjFGQ` |

### WebAnalyticsEntryPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Web Analytics Entry Pages | GET | `/v3/web-analytics/entry-pages` | `conn_mod_def::GJz-1h3ahtM::-fXD4AhrS2-bsamdCmnuvw` |

### WebAnalyticsEntryPagesChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Web Analytics Entry Pages Chart | GET | `/v3/web-analytics/entry-pages-chart` | `conn_mod_def::GJz-1tDfGu8::kl8J8lnqQJ-J80jUAvYqkQ` |

### WebAnalyticsExitPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Web Analytics Exit Pages | GET | `/v3/web-analytics/exit-pages` | `conn_mod_def::GJz-12lIwz4::DfLIanLGQdqzYcSp4nRL2A` |

### WebAnalyticsTopPages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Top Pages (by Project) | GET | `/v3/web-analytics/top-pages` | `conn_mod_def::GJz-2Nq11yI::mASanc7qQxCliUDYmJ1ogA` |

### WebAnalyticsTopPagesChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Web Analytics Top Pages Chart | GET | `/web-analytics/top-pages-chart` | `conn_mod_def::GJz-2XKK-oM::vfGFklOGSpiLnCchNH_8Aw` |

### WebAnalyticsReferrers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Referrers (Traffic Sources) | GET | `/v3/web-analytics/referrers` | `conn_mod_def::GJz-2iXe23s::-GAxy_WhQpGYavzhBOdyxA` |

### WebAnalyticsReferrersChart

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Web Analytics Referrers Chart | GET | `/v3/web-analytics/referrers-chart` | `conn_mod_def::GJz-2ujxGBc::InfH2ZPhTCi9AthsX0XpOg` |

### WebAnalyticsSourceChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Source Channels | GET | `/v3/web-analytics/source-channels` | `conn_mod_def::GJz-23lmjU8::HUwasE5AT9SoYH22RgdOiA` |

### WebAnalyticsSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List Traffic Sources for a Web Analytics Project | GET | `/v3/web-analytics/sources` | `conn_mod_def::GJz-3KroBQc::zQLG0Bg9TkGvARav23i_eA` |

### WebAnalyticsUtmParams

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics UTM Parameters (Traffic Sources) | GET | `/web-analytics/utm-params` | `conn_mod_def::GJz-3gA2ejE::qL0YtjvBSXuZN0GiLvciHg` |

### WebAnalyticsBrowserVersions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Browser Versions | GET | `/v3/web-analytics/browser-versions` | `conn_mod_def::GJz-314dwE0::9Y0QXpf_Rx-E7ziEGmYmgQ` |

### WebAnalyticsBrowsers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Web Analytics Browsers Stats | GET | `/v3/web-analytics/browsers` | `conn_mod_def::GJz-4MnVK6o::4TzOwA7VRK6iHBYdwbsBjA` |

### WebAnalyticsDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| List Web Analytics Device Stats (by Project) | GET | `/web-analytics/devices` | `conn_mod_def::GJz-4hbgY7E::LQA5e8XUQWCMdSX0NGVSpg` |

This lists 90 of 95 actions. For anything not here, call `search_one_platform_actions` with platform `ahrefs`. The full catalog is at https://www.withone.ai/knowledge/ahrefs.

## When a call fails

The error comes from Ahrefs, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ahrefs

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
