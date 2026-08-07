---
name: mapbox
description: Mapbox is a developer-focused mapping platform that provides customizable, high-performance maps, real-time traffic, routes, geocoding, and vector-tiles via APIs and SDKs for building interactive web and mobile location experiences. Read and write Mapbox data through One: tilesets, geocoding, styles, tilesetsources, tokens, datasets and more, 97 actions with real parameter documentation. Use whenever the user asks to look something up in Mapbox, create or update a record there, or build code against the Mapbox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mapbox
  generated-from: one-knowledge-base
---

# Mapbox through One

Mapbox is a developer-focused mapping platform that provides customizable, high-performance maps, real-time traffic, routes, geocoding, and vector-tiles via APIs and SDKs for building interactive web and mobile location experiences.

One exposes Mapbox through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mapbox` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Mapbox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Mapbox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tilesets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Tilesets | GET | `/tilesets/v1/{{username}}` | `conn_mod_def::GJ439La3fhw::mwnC2l0vSMOVhqqeFtsj_g` |
| Retrieve a Tileset’s Recipe | GET | `/tilesets/v1/{{tilesetId}}/recipe` | `conn_mod_def::GJ439VNZhuA::DBbBJ1XGS7uauBfWolSynw` |
| Create a Tileset (Mapbox Tiling Service) | POST | `/tilesets/v1/{{tilesetId}}` | `conn_mod_def::GJ4381bIs34::g95dL5woSKWE6KTrQc-X6g` |
| Delete a Tileset | DELETE | `/tilesets/v1/{{tilesetId}}` | `conn_mod_def::GJ438_tYlz0::40JA7glJQ7O18DLiuRGq9Q` |
| Publish a Tileset (MTS) | POST | `/tilesets/v1/{{tilesetId}}/publish` | `conn_mod_def::GJ439Jtq7Lo::-1jTpndlRSCdBE5aeco74A` |
| Publish a Tileset’s Changesets | POST | `/tilesets/v1/{{tilesetId}}/publish-changesets` | `conn_mod_def::GJ439M9Uuqk::2dAVJrSVRGipt9wNGKBHdg` |
| Update a Tileset’s Recipe | PATCH | `/tilesets/v1/{{tilesetId}}/recipe` | `conn_mod_def::GJ439eUrr6Y::WWItWx94RW24c4w0lP-atQ` |
| Update Tileset Information | PATCH | `/tilesets/v1/{{tilesetId}}` | `conn_mod_def::GJ439dbJB58::u9oAHXLDSlyu0zWy09oTtA` |
| Validate a Tileset Recipe | PUT | `/tilesets/v1/validateRecipe` | `conn_mod_def::GJ439d0eLBQ::Ah0rTQMZQKaS4jVnKHGnVQ` |

### Geocoding

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Geocoding (Forward or Reverse) via Places-Permanent | GET | `/geocoding/v5/{{endpoint}}/{{queries}}.json` | `conn_mod_def::GJ438eaBl6c::8vzVsx4uRzuTJJHVwyhvNg` |
| Forward Geocode a Place Name | GET | `/geocoding/v5/{{endpoint}}/{{searchText}}.json` | `conn_mod_def::GJ438d0MYnw::8mAXVwccQMCxNIJMCGjBug` |
| Forward Geocoding (Search Text Query) | GET | `/search/geocode/v6/forward` | `conn_mod_def::GJ438deYb3c::7N50bbZ5SzGIHz2wyr1RoA` |
| Forward Geocoding (Structured Input) | GET | `/search/geocode/v6/forward` | `conn_mod_def::GJ438gZub2Q::iGuA2mzkRG2DbLwiEYHLsw` |
| Reverse Geocode Coordinates | GET | `/geocoding/v5/{{endpoint}}/{{longitude}},{{latitude}}.json` | `conn_mod_def::GJ438qPeuB8::Vt-TJwLuQ0KuTQ4xxI8lmw` |
| Reverse Geocode Coordinates (v6) | GET | `/search/geocode/v6/reverse` | `conn_mod_def::GJ438fMLf8U::scTMdSASRoKoyeAgsDPXuQ` |
| Search for a Street Intersection (Forward Geocoding) | GET | `/geocoding/v5/{{endpoint}}/{{street_1}}%20and%20{{street_2}}.json` | `conn_mod_def::GJ438rQUYiQ::Jol2eljqTZm3SX0r_ptvgQ` |
| Batch Geocoding | POST | `/search/geocode/v6/batch` | `conn_mod_def::GJ438RWhosc::yzwhKvUURLy5LGD0_IDdIA` |

### Styles

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Styles | GET | `/styles/v1/{{username}}` | `conn_mod_def::GJ43-bZJcEs::fCjFkntWTS-tbuhuXWOhHQ` |
| Request Embeddable HTML for a Style | GET | `/styles/v1/{{username}}/{{style_id}}.html` | `conn_mod_def::GJ43-dvIt_I::C4UJ5G-bQ0GcBBOcNVQY9w` |
| Retrieve a Style's WMTS Document | GET | `/styles/v1/{{username}}/{{styleId}}/wmts` | `conn_mod_def::GJ43-c9ETDU::CgeuUe0qRwe4gggWmU9DbQ` |
| Retrieve a User’s Style | GET | `/styles/v1/{{username}}/{{styleId}}` | `conn_mod_def::GJ43-yjUp9M::5gCrFfbcSH-yqVNnl4vPNA` |
| Create a Style for a User | POST | `/styles/v1/{{username}}` | `conn_mod_def::GJ43-RzUxr0::LBGz1T9xRZuRC-bs1Kh3ww` |
| Delete a User Style | DELETE | `/styles/v1/{{username}}/{{styleId}}` | `conn_mod_def::GJ43-PJfp2A::VvX20zcyTUCYnWnF0fRYJw` |
| Protect a Style (Update Protected Status) | PUT | `/styles/v1/{{username}}/{{styleId}}/protected` | `conn_mod_def::GJ43-bVtYYQ::HKK_8y3BSqqe5V-JUmlEpw` |
| Update a User's Style | PATCH | `/styles/v1/{{username}}/{{styleId}}` | `conn_mod_def::GJ43-yKS260::aTmBLGGxRWC39CzAX88xoQ` |

### TilesetSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Tileset Sources | GET | `/tilesets/v1/sources/{{username}}` | `conn_mod_def::GJ439AnmNJw::dE52p_RqQRi63fs_SPRXcQ` |
| Retrieve a Tileset Source’s Information | GET | `/tilesets/v1/sources/{{username}}/{{id}}` | `conn_mod_def::GJ439T7Hg7k::EVPCfjJ4SEa4ppuaSCZkBQ` |
| Append Data to a User’s Tileset Source | POST | `/tilesets/v1/sources/{{username}}/{{id}}` | `conn_mod_def::GJ43838FfdM::oAYpelxERw2odhispYH8Og` |
| Create a Tileset Source for a User | POST | `/tilesets/v1/sources/{{username}}/{{id}}` | `conn_mod_def::GJ4381UG7nc::oSt0njwuTr26vqo4bqFsPA` |
| Delete a User’s Tileset Source | DELETE | `/tilesets/v1/sources/{{username}}/{{id}}` | `conn_mod_def::GJ439CoVPGc::T-qdWP_XSJuhmXDPIH9WNg` |
| Replace a User’s Tileset Source | PUT | `/tilesets/v1/sources/{{username}}/{{id}}` | `conn_mod_def::GJ439KdtCM4::gOWgkSUVQpmwGVbfnnYVaw` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Tokens | GET | `/tokens/v2/{{username}}` | `conn_mod_def::GJ43_BLxARw::fW3bQPBhSZWbBD7Mco98wA` |
| Retrieve a Token (Validate an Access Token) | GET | `/tokens/v2` | `conn_mod_def::GJ43_AgS0Pg::Tj4ArfwHQuKk4IVAKwa4jw` |
| Create a Temporary Token for a User | POST | `/tokens/v2/{{username}}` | `conn_mod_def::GJ43-xsSdVA::C-Q11ZFQS8e1YQ8BOQ1xCw` |
| Create a Token for a User | POST | `/tokens/v2/{{username}}` | `conn_mod_def::GJ43_AWGbw8::mHVnQBmfQlyJzTHhPY37Wg` |
| Delete a User Token | DELETE | `/tokens/v2/{{username}}/{{tokenId}}` | `conn_mod_def::GJ43_AGIlTE::4YFYIxjqQbmU5FfZyt1smw` |
| Update a User Token | PATCH | `/tokens/v2/{{username}}/{{tokenId}}` | `conn_mod_def::GJ43_Iag5VM::0ARTSRarQAm3JHva9juosw` |

### Datasets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Datasets | GET | `/datasets/v1/{{username}}` | `conn_mod_def::GJ437o3Xlzw::q-BdVI_PRYSTLdlKAIJ9gw` |
| Retrieve a User’s Dataset | GET | `/datasets/v1/{{username}}/{{datasetId}}` | `conn_mod_def::GJ437wXLNkw::pgolmyZVRhK0t9NBzkOjMQ` |
| Create a Dataset for a User | POST | `/datasets/v1/{{username}}` | `conn_mod_def::GJ437nQCWaw::obnfXGTYRZGzVa5ecYb7lQ` |
| Delete a User's Dataset | DELETE | `/datasets/v1/{{username}}/{{datasetId}}` | `conn_mod_def::GJ437kvi2CU::kj6eeacQSTGkBcQfqXHZXg` |
| Update a User's Dataset | PATCH | `/datasets/v1/{{username}}/{{datasetId}}` | `conn_mod_def::GJ437wqoILs::hSFxj7knRG6JBK0ly_Jp5Q` |

### Fonts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Fonts | GET | `/fonts/v1/{{username}}` | `conn_mod_def::GJ438QgXr58::xxUf4fhFSpacv1syu-poHw` |
| Retrieve Font Metadata for a User’s Font | GET | `/fonts/v1/{{username}}/{{font}}/metadata` | `conn_mod_def::GJ438TdgvOg::mJ7l3bINQqK_qmNOyQU7Cg` |
| Add a Font to a User’s Account | POST | `/fonts/v1/{{username}}` | `conn_mod_def::GJ438Cw-JvI::zVKqtASEQTCNxToXJwGWDg` |
| Delete a User's Font | DELETE | `/fonts/v1/{{username}}/{{font}}` | `conn_mod_def::GJ4379vsvV8::NOVacXE_R0Cjz1HuPmSYyw` |
| Update a User's Font Metadata | PATCH | `/fonts/v1/{{username}}/{{font}}/metadata` | `conn_mod_def::GJ438RJ3H2U::LBiptTMETm2jOqFw8sJ_DA` |

### StyleSprites

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Style’s Sprite Image or JSON | GET | `/styles/v1/{{username}}/{{styleId}}/{{spriteId}}/sprite{{at2x}}.{{format}}` | `conn_mod_def::GJ43-qYM4oU::TyLOkeFARsmUrGmk5Ynpgw` |
| Add a New Image to a Style’s Sprite | PUT | `/styles/v1/{{username}}/{{styleId}}/sprite/{{iconName}}` | `conn_mod_def::GJ43-QEhQmc::1G6kHyfhSL2Fq1tcilXVQw` |
| Add Multiple New Images to a Style Sprite (Batch) | POST | `/styles/v1/{{username}}/{{styleId}}/sprite` | `conn_mod_def::GJ43-ATChM0::KsmuRCORQK2tKiIJ5x7GVg` |
| Delete an Image from a Style's Sprite | DELETE | `/styles/v1/{{username}}/{{styleId}}/sprite/{{iconName}}` | `conn_mod_def::GJ43-UBVEaY::tl-wr91DRA6hi-KGj50_zg` |
| Delete Multiple Images from a Style Sprite | DELETE | `/styles/v1/{{username}}/{{styleId}}/sprite` | `conn_mod_def::GJ43-PRAEJQ::7dNaXGqfQuy8NozyldIjig` |

### DatasetFeatures

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User's Dataset Features | GET | `/datasets/v1/{{username}}/{{datasetId}}/features` | `conn_mod_def::GJ437zprr2k::X2KWuurJSJ6TzCfgzWmVYA` |
| Retrieve a Dataset Feature (by Username, Dataset ID, and Feature ID) | GET | `/datasets/v1/{{username}}/{{datasetId}}/features/{{featureId}}` | `conn_mod_def::GJ437vqJMM0::yGUQZ1KwTeytZHRhlnWJsg` |
| Delete a Dataset Feature | DELETE | `/datasets/v1/{{username}}/{{datasetId}}/features/{{featureId}}` | `conn_mod_def::GJ437kw5KNk::k_eryHVCRIii1-vNiNqCDA` |
| Insert or Update a Dataset Feature | PUT | `/datasets/v1/{{username}}/{{dataset_id}}/features/{{feature_id}}` | `conn_mod_def::GJ437lpEP90::Vfzryp96QEeXj2kci4iNIg` |

### Uploads

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Upload’s Status | GET | `/uploads/v1/{{username}}/{{uploadId}}` | `conn_mod_def::GJ43_TLqoLs::aI5Iow76QWydywDY_HM_pg` |
| Create an Upload for a User | POST | `/uploads/v1/{{username}}` | `conn_mod_def::GJ43_L1_h3Y::jQxaG1XITg6zlUyMVEUB6w` |
| Remove an Upload Status for a User | DELETE | `/uploads/v1/{{username}}/{{uploadId}}` | `conn_mod_def::GJ43_IS38tQ::dUhaIKYHQoO2R6-zvcdIVA` |
| Retrieve Temporary S3 Credentials for a User Upload | POST | `/uploads/v1/{{username}}/credentials` | `conn_mod_def::GJ43_IiCTTM::Ya9hMgvFRA2if8pP_Bynzw` |

### TilesetChangesets

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Tileset Changesets | GET | `/tilesets/v1/changesets/{{username}}` | `conn_mod_def::GJ439BA-pA4::YIovo69dRBeDMuV7SSwAJQ` |
| Append to a User’s Tileset Changeset (MTS) | POST | `/tilesets/v1/changesets/{{username}}/{{id}}` | `conn_mod_def::GJ438oCJzmQ::TlCoEGO9RWizKZj4Op-GQg` |
| Delete a User’s Tileset Changeset | DELETE | `/tilesets/v1/changesets/{{username}}/{{id}}` | `conn_mod_def::GJ43842aQ9Y::khKql-C5Rl-nKYwKJYSrFQ` |

### TilesetJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Tileset’s Jobs | GET | `/tilesets/v1/{{tilesetId}}/jobs` | `conn_mod_def::GJ439AOTR8I::bDYorLzERgqP43d5-lroSQ` |
| Retrieve a Tileset’s Publish Job | GET | `/tilesets/v1/{{tilesetId}}/jobs/{{jobId}}` | `conn_mod_def::GJ439UznG4Q::cSgtbTSkRey9G6xlr-QxDQ` |

### Changesets

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Changeset for a User | POST | `/tilesets/v1/changesets/{{username}}/{{id}}` | `conn_mod_def::GJ4384FTlzE::ex2FDG4EREOXWaj5V5107A` |
| Replace a User’s Changeset | PUT | `/tilesets/v1/changesets/{{username}}/{{id}}` | `conn_mod_def::GJ439Ngz5U0::a2BGLHwDQpaqn8aTw6DuSg` |

### Directions

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Directions Between Waypoints | GET | `/directions/v5/{{profile}}/{{coordinates}}` | `conn_mod_def::GJ4372pRx_k::jLcyCvG4RLSu6ro1P2yGwA` |

### EvChargePoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Search EV Charge Points (Nearby Locations) | GET | `/ev/v1/locations` | `conn_mod_def::GJ438JPk7Vk::CUWDGDQLQQ6635fZflXnDw` |

### FontGlyphRanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Font Glyph Ranges (for a User's Font) | GET | `/fonts/v1/{{username}}/{{font}}/{{start}}-{{end}}.pbf` | `conn_mod_def::GJ438RnNLwY::cmwlI5y7TemmXQojOGN4lQ` |

### EvLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get EV Charge Point Details by Location ID | GET | `/ev/v1/locations/{{locationId}}` | `conn_mod_def::GJ437-LTPlw::S9EDLKgrRsin6-2V-jdfvw` |

### EvChargePointOperators

| Action | Method | Path | Action id |
|---|---|---|---|
| List EV Charge Point Operators | GET | `/ev/v1/operators` | `conn_mod_def::GJ438DAwsUM::BAUIm4OAR3adVP6RFqBT9w` |

### Isochrones

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Isochrones Around a Location | GET | `/isochrone/v1/{{profile}}/{{coordinates}}` | `conn_mod_def::GJ438pEubas::ssXmQT0LQQmNcKxQd6WVLQ` |

### TilesetActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Tileset Activity (Last 30 Days) | GET | `/activity/v1/{{username}}/tilesets` | `conn_mod_def::GJ439WB3Wko::-oc-VDvPSxGD6P1EpAmDbg` |

### DirectionsMatrix

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Matrix | GET | `/directions-matrix/v1/{{profile}}/{{coordinates}}` | `conn_mod_def::GJ439e_cs-U::-5WBomt3TcSsWhT3GQ6jvQ` |

### RasterTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Raster Tile | GET | `/v4/{{tilesetId}}/{{zoom}}/{{x}}/{{y}}{{@2x}}.{{format}}` | `conn_mod_def::GJ439nhZ2m0::-hJGCtDwT2ytfoH2guUEUg` |

### OptimizedTripsV2Submissions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Optimization v2 Routing Problem Submissions (and Status) | GET | `/optimized-trips/v2` | `conn_mod_def::GJ439nnVric::_uz2mkTzQe6zXrzy8nsQKw` |

### OptimizedTrips

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Optimized Trip | GET | `/optimized-trips/v1/{{profile}}/{{coordinates}}` | `conn_mod_def::GJ439p9ZTf4::wnZE7axUSVyLoGxp3j0tQg` |

### OptimizationV2RoutingProblems

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit an Optimization v2 Routing Problem | POST | `/optimized-trips/v2` | `conn_mod_def::GJ439sd7eJw::E3DXhvNwS1SaupIijEaXLg` |

### SearchBox

| Action | Method | Path | Action id |
|---|---|---|---|
| Search POIs by Category | GET | `/search/searchbox/v1/category/{{canonicalCategoryId}}` | `conn_mod_def::GJ4391uLoZw::DxtF3AvTTDeiVOEQvdwfNA` |

### SearchboxSuggestions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Search Suggestions (Search Box) for a Query | GET | `/search/searchbox/v1/suggest` | `conn_mod_def::GJ4394pbdHQ::N3ovkwfBQkyEKl7erqmNEQ` |

### StaticImages

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Static Map Image from a Style | GET | `/styles/v1/{{username}}/{{styleId}}/static/{{overlay}}/{{location}}/{{width}}x{{height}}{{retina}}` | `conn_mod_def::GJ43-C0J1pY::iLfRjYN7RPeyYOGGWJBl_g` |

### SearchBoxForward

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Text Search Results (Search Box API Forward Search) | GET | `/search/searchbox/v1/forward` | `conn_mod_def::GJ43-FNx_Oc::r0-Hxc4yT5aph7D53C8DsA` |

### SearchBoxReverse

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Lookup (Search Box API) | GET | `/search/searchbox/v1/reverse` | `conn_mod_def::GJ43-DwcfeE::oxTaWrrHS7yxEYvYlrre9A` |

### StyleRasterTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Raster Tiles from a Style | GET | `/styles/v1/{{username}}/{{style_id}}/tiles/{{tilesize}}/{{z}}/{{x}}/{{y}}{{@2x}}` | `conn_mod_def::GJ43-HmM_BY::VXjnCxSITJey6CEEYE002w` |

### TilesetTilequery

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Features from a Tileset (Tilequery) | GET | `/v4/{{tilesetId}}/tilequery/{{lon}},{{lat}}.json` | `conn_mod_def::GJ43-zQ8R7s::PZBktIhYRayOpoTVxyCHjw` |

### StyleZipBundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a User’s Style ZIP Bundle | GET | `/styles/v1/{{username}}/{{styleId}}.zip` | `conn_mod_def::GJ43-43hUg8::Cs8M-ZxXQXO6Z5rThZ_oKQ` |

### UploadStatuses

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Recent Upload Statuses | GET | `/uploads/v1/{{username}}` | `conn_mod_def::GJ43_JK9mQ8::TMCPj5T7RtChlxcDB4eETw` |

### VectorTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Vector Tiles | GET | `/v4/{{tilesetId}}/{{zoom}}/{{x}}/{{y}}.{{format}}` | `conn_mod_def::GJ43_YjqXQw::VoALN_67TAuPu62ZrO9_7w` |

### SearchBoxCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Search Box Categories | GET | `/search/searchbox/v1/list/category` | `conn_mod_def::GJ4393cpxjU::rofg9FKYSKioRRcTc5XqLQ` |

This lists 90 of 97 actions. For anything not here, call `search_one_platform_actions` with platform `mapbox`. The full catalog is at https://www.withone.ai/knowledge/mapbox.

## When a call fails

The error comes from Mapbox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mapbox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
