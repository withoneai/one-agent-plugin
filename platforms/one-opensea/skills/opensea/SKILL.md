---
name: opensea
description: OpenSea is an NFT marketplace platform that provides APIs and infrastructure for discovering, listing, and trading digital collectibles and blockchain-based assets, allowing developers, creators, and collectors to integrate marketplace data and transaction workflows into applications and services. Read and write Opensea data through One: listings, collections, offers, tokens, events, drops and more, 77 actions with real parameter documentation. Use whenever the user asks to look something up in Opensea, create or update a record there, or build code against the Opensea API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: opensea
  generated-from: one-knowledge-base
---

# Opensea through One

OpenSea is an NFT marketplace platform that provides APIs and infrastructure for discovering, listing, and trading digital collectibles and blockchain-based assets, allowing developers, creators, and collectors to integrate marketplace data and transaction workflows into applications and services.

One exposes Opensea through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `opensea` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Opensea is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Opensea account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Listings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Best Listing by NFT | GET | `/api/v2/listings/collection/{{slug}}/nfts/{{identifier}}/best` | `conn_mod_def::GLDbuCUEyVA::s3x0mj5WT5SsC2qX1iZaqA` |
| Get Best Listings by Collection | GET | `/api/v2/listings/collection/{{slug}}/best` | `conn_mod_def::GLDbuDBfuRg::NSnSaptsR1SJMDxOC3xUyg` |
| List All Listings for a Collection | GET | `/api/v2/listings/collection/{{slug}}/all` | `conn_mod_def::GLDbuEYXbkA::J4sM9cVBSaS5mbNk11V2QQ` |
| Create a Listing | POST | `/api/v2/orders/{{chain}}/{{protocol}}/listings` | `conn_mod_def::GLDbt3jskrA::_yU3Xf7_TY-LgHc_SviEQg` |
| Fulfill a Listing | POST | `/api/v2/listings/fulfillment_data` | `conn_mod_def::GLDbt4LHyBg::wxvfJDyyQ-mO3QHSm5V2JA` |
| Fulfill a Listing Using a Different Token | POST | `/api/v2/listings/cross_chain_fulfillment_data` | `conn_mod_def::GLDbuC1jDzA::k_LPWjfTTw-S0ZqmJ2S9Jw` |
| Get Listing Creation Actions | POST | `/api/v2/listings/actions` | `conn_mod_def::GLDbuB5LG1A::RLMmXwlvQhaJpXcSET1xgQ` |
| Sweep Buy Items From a Collection | POST | `/api/v2/listings/sweep` | `conn_mod_def::GLDbuMOSYtA::pL2SZnhuTLi8SHHyXyHX7A` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Collection | GET | `/api/v2/collections/{{slug}}` | `conn_mod_def::GLDbtWmoMiA::DJiQAHYASUWKS0rm_VO57g` |
| Get Collection Floor Price History | GET | `/api/v2/collections/{{slug}}/floor_prices` | `conn_mod_def::GLDbtW-FCPg::p-KdmqKxQYm0ExqEXyzwVg` |
| Get Collection Stats | GET | `/api/v2/collections/{{slug}}/stats` | `conn_mod_def::GLDbthLAyQg::W7dibjTdREK4ivEWQHnFMQ` |
| Get Top Collections | GET | `/api/v2/collections/top` | `conn_mod_def::GLDbtkRUXAA::EKbOTttrRbq24-laM_kqMw` |
| Get Trending Collections | GET | `/api/v2/collections/trending` | `conn_mod_def::GLDbtuvwr0A::tVY4OgOSR6qDx5k-JhZy8Q` |
| List Collections | GET | `/api/v2/collections` | `conn_mod_def::GLDbtjhTHgA::sWth_J1bRe2WvczHXuD-Bg` |
| Get Collections by Slugs | POST | `/api/v2/collections/batch` | `conn_mod_def::GLDbti-X31g::KMgrwdijRyiUxq_4gvfYcg` |

### Offers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Best Offer by NFT | GET | `/api/v2/offers/collection/{{slug}}/nfts/{{identifier}}/best` | `conn_mod_def::GLDbutUtQjg::A0w_MOALQ0e-0YmLfn42mA` |
| Get Offers by NFT | GET | `/api/v2/offers/collection/{{slug}}/nfts/{{identifier}}` | `conn_mod_def::GLDbutm8W5A::8AE09cd5SNinJcLLQI4X5Q` |
| List All Offers for a Collection | GET | `/api/v2/offers/collection/{{slug}}/all` | `conn_mod_def::GLDbutptZ8g::wMCTKmFLQFWlNQ8X-rq2jg` |
| Build a Criteria Offer | POST | `/api/v2/offers/build` | `conn_mod_def::GLDbuisShWA::QZ1BB3bGTMezV8oJgVKunQ` |
| Create a Criteria Offer | POST | `/api/v2/offers` | `conn_mod_def::GLDbuigEnWg::aB6WQ0YnQ8ONy7VTGsIioA` |
| Fulfill an Offer | POST | `/api/v2/offers/fulfillment_data` | `conn_mod_def::GLDbutLIJTA::ygs4aYSoR2CirykYbBEVtw` |

### Tokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Details | GET | `/api/v2/chain/{{chain}}/token/{{address}}` | `conn_mod_def::GLDbvDiDnPA::rmn2AfbyTMymIucva4KCcg` |
| Get Top Tokens | GET | `/api/v2/tokens/top` | `conn_mod_def::GLDbvPRikYg::2TdLdLk6Tsu6wCXz18KCPQ` |
| Get Trending Tokens | GET | `/api/v2/tokens/trending` | `conn_mod_def::GLDbvXwPW0g::sQ1dOmJyQLmBqFsnEgpM9w` |
| Get Tokens by Contract Identifiers | POST | `/api/v2/tokens/batch` | `conn_mod_def::GLDbvNcUvMg::UoJtVIiNRJiwbZy1kHZvwA` |

### Events

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Events for a Collection | GET | `/api/v2/events/collection/{{slug}}` | `conn_mod_def::GLDbtM2YZfg::0mIYDM9pRP2VMXA7H4z2AA` |
| Get Events for an Account | GET | `/api/v2/events/accounts/{{address}}` | `conn_mod_def::GLDbtNSW6RA::FNUQPo1ERFCKTUroavxqXw` |
| Get Events for an NFT | GET | `/api/v2/events/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}` | `conn_mod_def::GLDbtOTlxrA::D6FbzQ7bSxajSzkdCUktaw` |
| List Events | GET | `/api/v2/events` | `conn_mod_def::GLDbtBHPhbg::Gpb1mSrVTbifxGv7PE6H2g` |

### Drops

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Drop by Collection Slug | GET | `/api/v2/drops/{{slug}}` | `conn_mod_def::GLDbt2reD_A::B4tGBdCCSpa6GPM6YnN1TQ` |
| Get Drops | GET | `/api/v2/drops` | `conn_mod_def::GLDbt55gLHg::K8CSH7qFRz-Sge7RPOq51g` |
| Build Deploy Contract Transaction Data | POST | `/api/v2/drops/deploy` | `conn_mod_def::GLDbtsIf1dg::xc-3vDKTS9-CecyxaY0KCw` |
| Build Mint Transaction Data for a Drop | POST | `/api/v2/drops/{{slug}}/mint` | `conn_mod_def::GLDbtsVwRRA::6znKfMNPS-GQXHaPN7H1rA` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an OpenSea Account Profile | GET | `/api/v2/accounts/{{addressOrUsername}}` | `conn_mod_def::GLDbs22N_gg::JVzdygFCQPGOgfvC0ZXeuA` |
| List an Account's Active Offers | GET | `/api/v2/account/{{address}}/offers` | `conn_mod_def::GLDbs42px6g::3Z2fn6CxQ7OkFN5sbWuidA` |
| Resolve an Account Identifier | GET | `/api/v2/accounts/resolve/{{identifier}}` | `conn_mod_def::GLDbtAJ_JIg::XBkYZPd3RuqwgSpFPggdlA` |

### Nfts

| Action | Method | Path | Action id |
|---|---|---|---|
| List NFTs for a Contract | GET | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts` | `conn_mod_def::GLDbuXNlYzg::cWO0362jQ5um9iWmos6pJg` |
| Get NFTs by Identifiers | POST | `/api/v2/nfts/batch` | `conn_mod_def::GLDbuWHASFA::I611lPdyTkmymK6OEXbZZA` |
| Validate an NFT's Metadata | POST | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}/validate-metadata` | `conn_mod_def::GLDbujDaxrA::R-Ht698FQSuaIsNz0S9HTA` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Order | GET | `/api/v2/orders/chain/{{chain}}/protocol/{{protocolAddress}}/{{orderHash}}` | `conn_mod_def::GLDbu2YzEUA::xfWXqqj6RUK-ZYSbW2iRCw` |
| Cancel an Order | POST | `/api/v2/orders/chain/{{chain}}/protocol/{{protocolAddress}}/{{orderHash}}/cancel` | `conn_mod_def::GLDbu2hC6ig::X-DZ7qouQg2aNpFlOQcMKQ` |

### TokenGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Token Group by Slug | GET | `/api/v2/token-groups/{{slug}}` | `conn_mod_def::GLDbvDqcbrg::AjLbS_iJRueSRsAJ9Ya3mQ` |
| Get Token Groups | GET | `/api/v2/token-groups` | `conn_mod_def::GLDbvDyMOJg::zYKOOmC5ROGac4b99yvu-g` |

### NftMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get NFT Metadata | GET | `/api/v2/metadata/{{chain}}/{{contractAddress}}/{{tokenId}}` | `conn_mod_def::GLDbuMIb73A::eBrx1eSFQ_e25kfOFU01tw` |
| Refresh NFT Metadata | POST | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}/refresh` | `conn_mod_def::GLDbuWeOhOA::VGEgwkDcTtuKhAlVpupm3w` |

### OffersReceived

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Offers Received by an Account | GET | `/api/v2/account/{{address}}/offers_received` | `conn_mod_def::GLDbtC0h4Gg::JRumPSA_TTCvnbqoDI42jQ` |

### CollectionTraits

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection Traits | GET | `/api/v2/traits/{{slug}}` | `conn_mod_def::GLDbtgsVCkg::gfFnDNxcTtSVpJyKKHvhhg` |

### DeployContractReceipt

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Deploy Contract Receipt | GET | `/api/v2/drops/deploy/{{chain}}/{{txHash}}/receipt` | `conn_mod_def::GLDbt2qB_aA::npx8nR6USEyc5USIr4nTdw` |

### AccountListings

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's Active Listings | GET | `/api/v2/account/{{address}}/listings` | `conn_mod_def::GLDbs42p2zA::MtSCvcSVQHiXRFLp2AyLzQ` |

### TokenOhlcvCandles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token OHLCV Candles | GET | `/api/v2/chain/{{chain}}/token/{{address}}/ohlcv` | `conn_mod_def::GLDbvPgU50A::z3SoBYNXRuu1OCSYqDhBsA` |

### CollectionsOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Collection's Offers | GET | `/api/v2/offers/collection/{{slug}}` | `conn_mod_def::GLDbut2rpsA::q2tQUJ86Tn-JAQ0F5rWWaw` |

### TokenSwapActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Swap Activity | GET | `/api/v2/chain/{{chain}}/token/{{address}}/activity` | `conn_mod_def::GLDbvOn9zUg::zDmiXwyhT-6zESmD8iqrqA` |

### TraitOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Trait Offers for a Collection | GET | `/api/v2/offers/collection/{{slug}}/traits` | `conn_mod_def::GLDbu39U0FA::TOu4HaWMSN-m8dq9TN_Izg` |

### TokenBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Balances by Account | GET | `/api/v2/account/{{address}}/tokens` | `conn_mod_def::GLDbvFyzh3A::ERoSqiNSTqSA9ZegQCa_1Q` |

### SwapQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Swap Quote | GET | `/api/v2/swap/quote` | `conn_mod_def::GLDbvF7y4IA::mcjhv_AiTm6C7fmjF0UhOg` |

### Swap

| Action | Method | Path | Action id |
|---|---|---|---|
| Execute a Token Swap | POST | `/api/v2/swap/execute` | `conn_mod_def::GLDbu2gy0RA::9jOR4JaGRAmwiIxxleJf-Q` |

### Chains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Supported Chains | GET | `/api/v2/chains` | `conn_mod_def::GLDbtLS5aMA::YjZI65-oTrKMvoNuPLv4Vg` |

### Favorites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account's Favorited Items | GET | `/api/v2/account/{{address}}/favorites` | `conn_mod_def::GLDbs5CK3vg::qRqR1H9nR0KgNHGR31BiEA` |

### PortfolioNetWorthHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Portfolio Net Worth History for an Account | GET | `/api/v2/account/{{address}}/portfolio/history` | `conn_mod_def::GLDbtBsxEpg::_Cah4YS0RJSb7UwwuGtgjw` |

### AccountsCollections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account's Collections | GET | `/api/v2/account/{{address}}/collections` | `conn_mod_def::GLDbs4rXgVA::OazD3jP8SIuw1Enjkm_WEw` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search OpenSea | GET | `/api/v2/search` | `conn_mod_def::GLDbu7hIfsA::L9v7E51zQjKQkImNTpO8Bg` |

### Transactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transaction Receipt | POST | `/api/v2/transactions/receipt` | `conn_mod_def::GLDbvYX5mFg::M64NC7J2QHaJw5r7I_ylaA` |

### Collection

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection by NFT | GET | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}/collection` | `conn_mod_def::GLDbtZSanHA::C8693jYkScO8YphSW_72CQ` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Transfer Assets Between Wallets | POST | `/api/v2/assets/transfer` | `conn_mod_def::GLDbuhNJIpA::fizQdGkFS0GSD0PjprqTUw` |

### ItemOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Item Offer | POST | `/api/v2/orders/{{chain}}/{{protocol}}/offers` | `conn_mod_def::GLDbukkS3Vg::-wSKNQSMQEaf-xnPS1sehg` |

### TokenPriceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Token Price History | GET | `/api/v2/chain/{{chain}}/token/{{address}}/price_history` | `conn_mod_def::GLDbvO0o9Yg::mZL2cdfMQ1W2uwVbGK_9Pg` |

### Nft

| Action | Method | Path | Action id |
|---|---|---|---|
| Get NFT | GET | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}` | `conn_mod_def::GLDbuMUOjwg::ZFpDlbrNQ46EmMx-hHP_5g` |

### NftOwners

| Action | Method | Path | Action id |
|---|---|---|---|
| Get NFT Owners for a Specific NFT | GET | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}/owners` | `conn_mod_def::GLDbuNtT9aA::whg7PLzfTZ6C70qFCTwjGA` |

### CollectionNfts

| Action | Method | Path | Action id |
|---|---|---|---|
| List NFTs in a Collection | GET | `/api/v2/collection/{{slug}}/nfts` | `conn_mod_def::GLDbuXD_exA::Au8trZSNSmql77OXUOQM5w` |

### AccountNfts

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Account's NFTs | GET | `/api/v2/chain/{{chain}}/account/{{address}}/nfts` | `conn_mod_def::GLDbuYz4P1A::snjJf--GTre7mcCQe8bCfQ` |

### CollectionHolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection Holders | GET | `/api/v2/collections/{{slug}}/holders` | `conn_mod_def::GLDbtXp_fYg::SlutLxIDSIyGDurpFmA_4Q` |

### CollectionOfferAggregates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Collection Offer Aggregates | GET | `/api/v2/collections/{{slug}}/offer_aggregates` | `conn_mod_def::GLDbtXsRIrA::VWxS2cYdQTiK-7ov-ko7aQ` |

### NftAnalytics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get NFT Analytics | GET | `/api/v2/chain/{{chain}}/contract/{{address}}/nfts/{{identifier}}/analytics` | `conn_mod_def::GLDbuMiv1ZA::0a2aPG_5RxCsy5Oxr8YPLA` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Instant API Key | POST | `/api/v2/auth/keys` | `conn_mod_def::GLDbtKLUyCA::hm8Ro6wgSv6K7MmIHAgWLw` |

### Contracts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Contract | GET | `/api/v2/chain/{{chain}}/contract/{{address}}` | `conn_mod_def::GLDbtsIWEdg::d4O_oh3hSju3KDXWKond2g` |

### PaymentToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Payment Token by Chain and Address | GET | `/api/v2/chain/{{chain}}/payment_token/{{address}}` | `conn_mod_def::GLDbttQyPTg::53jkQBZuR62MBp-53kQuaQ` |

### PortfolioStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Portfolio Stats for an Account | GET | `/api/v2/account/{{address}}/portfolio` | `conn_mod_def::GLDbtBdqYfA::Ejyly4ptREyVFAQA8DW9pA` |

## When a call fails

The error comes from Opensea, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/opensea

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
