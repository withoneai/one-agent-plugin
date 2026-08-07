---
name: addresszen
description: AddressZen is an address verification and autocomplete platform that provides APIs for validating, standardizing, and enriching postal addresses, allowing developers and operations teams to improve data quality, reduce failed deliveries, and streamline checkout, onboarding, and customer record workflows. Read and write AddressZen data through One: licensees, addresses, configurations, configs, signup, places and more, 62 actions with real parameter documentation. Use whenever the user asks to look something up in AddressZen, create or update a record there, or build code against the AddressZen API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: addresszen
  generated-from: one-knowledge-base
---

# AddressZen through One

AddressZen is an address verification and autocomplete platform that provides APIs for validating, standardizing, and enriching postal addresses, allowing developers and operations teams to improve data quality, reduce failed deliveries, and streamline checkout, onboarding, and customer record workflows.

One exposes AddressZen through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `addresszen` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm AddressZen is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real AddressZen account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Licensees

| Action | Method | Path | Action id |
|---|---|---|---|
| List Licensees for an API Key | GET | `/v1/keys/{{key}}/licensees` | `conn_mod_def::GMZh7N3931g::9Yf8TFTLTDyrj3tkolsAtA` |
| List Licensees for an API Key | GET | `/v1/keys/{{key}}/licensees` | `conn_mod_def::GMZjR49YtqA::0p0395JZSM-NALWgs9huew` |
| Retrieve a Licensee for a Key | GET | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZh7N3zBgA::79Qi2FfnRC6r8c1bUfT-Zg` |
| Retrieve a Licensee for a Key | GET | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZjR4-CL9A::PDzwb2KwQwCzoYDOHB7rDw` |
| Create a Licensee for an API Key | POST | `/v1/keys/{{key}}/licensees` | `conn_mod_def::GMZh7OhULHg::ChOng4uXTfCDB9dNDmiilw` |
| Create a Licensee for an API Key | POST | `/v1/keys/{{key}}/licensees` | `conn_mod_def::GMZjR4-CffA::u0aMVifmTc-cQb_y6RsXJg` |
| Regenerate Key for a Licensee | POST | `/v1/keys/{{key}}/licensees/{{licensee}}/regenerate-key` | `conn_mod_def::GMZjR48B78g::bsY34FVdRrmNb5FwePPkag` |
| Update a Key's Licensee | PUT | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZh7Pp51Yg::oRNTtcovQNyZ2cjZtmqY4w` |
| Update a Key's Licensee | PUT | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZjR8Bzvjg::RWwL70fuQrWSPdp0J-CnEg` |

### Addresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Addresses | GET | `/v1/addresses` | `conn_mod_def::GMZh7mNx6kg::8SMwFoHLRM-PYn8DURZP1w` |
| Extract Addresses | GET | `/v1/addresses` | `conn_mod_def::GMZjSxXvxyg::v4CmyDA_SgaDhbX3ORLruw` |
| Resolve Address by Address ID | GET | `/v1/autocomplete/addresses/{{address}}/gbr` | `conn_mod_def::GMZh6xcO0GA::IaYMgAFbSoOUyqQQ35BpyQ` |
| Resolve Address by Address ID | GET | `/v1/autocomplete/addresses/{{address}}/gbr` | `conn_mod_def::GMZjRcyV9_A::2aIie1dFSGqnWq0icCUyww` |
| Cleanse Addresses | POST | `/v1/cleanse/addresses` | `conn_mod_def::GMZh7g8OtGg::1aa0X6wUTk-lIsN1iSEsNw` |
| Cleanse Addresses | POST | `/v1/cleanse/addresses` | `conn_mod_def::GMZjSvNFSBA::rv62pvPsSo2AZJBSFhbXtg` |
| Verify Addresses | POST | `/v1/verify/addresses` | `conn_mod_def::GMZh7sxL9Mg::0Hkcz_qNQ-K7z3tWvnW1-A` |
| Verify Addresses | POST | `/v1/verify/addresses` | `conn_mod_def::GMZjS4-17TA::-5Waqiz5S-2_A4x4qnsuYA` |

### Configurations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Configurations for an API Key | GET | `/v1/keys/{{key}}/configs` | `conn_mod_def::GMZh6-OqApg::v77Q5mCqTOaCUDeYcStEHw` |
| List Configurations for an API Key | GET | `/v1/keys/{{key}}/configs` | `conn_mod_def::GMZjRngO5Tg::kYZYumekSn2Lzc_c1DQTNQ` |
| Delete a Configuration for an API Key | DELETE | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZh6w_dlOg::hlOQlXFLSuSPktTc1W8xiw` |
| Delete a Configuration for an API Key | DELETE | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZjRbaq7ig::6A5dl0NxSDWc-UBvA3GE8A` |
| Update a Configuration for an API Key | POST | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZh69yomVA::fYkX2SRJR2ahGK_GcCTrEg` |

### Configs

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Configuration by Key | GET | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZh67voXgg::iWvHo935S8C-RScIg7JdSA` |
| Retrieve a Configuration by Key | GET | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZjRnNzKYA::2Zncp29TT6mki3DM9ZhPOQ` |
| Create Config Using Keys | POST | `/v1/keys/{{key}}/configs` | `conn_mod_def::GMZh6wtIKmA::aE4oxeTnQnWrMcI6V_j2bw` |
| Create Config Using Keys | POST | `/v1/keys/{{key}}/configs` | `conn_mod_def::GMZjRbahvpg::frkfXzSLRcWQoSXftjI-RQ` |

### SignUp

| Action | Method | Path | Action id |
|---|---|---|---|
| Poll CLI Signup Token | GET | `/v1/sign_up/{{cliToken}}` | `conn_mod_def::GMZh7X8Kqag::d2gYoLamQVy27PSgJ5IDRA` |
| Poll CLI Signup Token | GET | `/v1/sign_up/{{cliToken}}` | `conn_mod_def::GMZjSlTBCRg::6LQTTP7kTI6N0kGIqwjX8g` |
| Mint Signup Token | POST | `/v1/sign_up` | `conn_mod_def::GMZh7WX4AeA::wzd2XKkORdGCbDFAcTv3xg` |
| Mint Signup Token | POST | `/v1/sign_up` | `conn_mod_def::GMZjSDl-SOg::tMzGrAovQVy9Evf5Y0x3Jw` |

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Place | GET | `/v1/places` | `conn_mod_def::GMZh7YFPhOA::81MysB2kQECGlbhN5OB6ZA` |
| Find Place | GET | `/v1/places` | `conn_mod_def::GMZjSEHyIjg::T-N1A6aaR--owaPM3tSWKQ` |
| Resolve Place | GET | `/v1/places/{{place}}` | `conn_mod_def::GMZh7ZrfNHg::dHaUSDtjRwOjoIgfbTwNAw` |
| Resolve Place | GET | `/v1/places/{{place}}` | `conn_mod_def::GMZjSEs6GFA::cA5Tka6lQliAa9inWfT-aQ` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Availability | GET | `/v1/keys/{{key}}` | `conn_mod_def::GMZh68xamlg::s4Z0u8BJQqOFlL-ysdL-aA` |
| Get API Key Availability | GET | `/v1/keys/{{key}}` | `conn_mod_def::GMZjRnVQs4A::8Eeb1ni-R6Cr4zVO07JHig` |
| Get API Key Details | GET | `/v1/keys/{{key}}/details` | `conn_mod_def::GMZjRvaTfbA::c8O2EKc0SbWTDJE57gPeuQ` |

### LicenseeKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Licensee Key | DELETE | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZh7E7YWXA::NpwCfoWaQRywfKgoYGu0OA` |
| Cancel a Licensee Key | DELETE | `/v1/keys/{{key}}/licensees/{{licensee}}` | `conn_mod_def::GMZjRwY1sDA::wW_zNyhyS7GiBYk9AogBQg` |
| Regenerate Key for a Licensee | POST | `/v1/keys/{{key}}/licensees/{{licensee}}/regenerate-key` | `conn_mod_def::GMZh7PQPKhg::V-qM_vMARAOSK6S0n7rtnw` |

### AutocompleteAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Find Address Using Autocomplete Addresses | GET | `/v1/autocomplete/addresses` | `conn_mod_def::GMZh60Fozyg::kceVuycyRvOr0Mn21orDTQ` |
| Find Address Using Autocomplete Addresses | GET | `/v1/autocomplete/addresses` | `conn_mod_def::GMZjRgboEWg::kSviMbk6REeBcQ2VsE3DVg` |

### AutocompleteAddressesUsa

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Address Using Autocomplete Addresses USA | GET | `/v1/autocomplete/addresses/{{address}}/usa` | `conn_mod_def::GMZh61awZTA::zFatn2udTUO0tsfTbZ7NHQ` |
| Retrieve Address Using Autocomplete Addresses USA | GET | `/v1/autocomplete/addresses/{{address}}/usa` | `conn_mod_def::GMZjRbz7ibg::ZUWobInmQRCK8AMb1J7Yjg` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Validate Email Addresses | GET | `/v1/emails` | `conn_mod_def::GMZh69FjGdA::9_fb0Jr7S_KDltKS0oQk9A` |
| Validate Email Addresses | GET | `/v1/emails` | `conn_mod_def::GMZjRoHYSCA::7xs26D4wTPCDLLC2vsb-7w` |

### UsageHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Usage History (CSV) for an API Key | GET | `/v1/keys/{{key}}/lookups` | `conn_mod_def::GMZh7F9ySdA::ezFrgQ6PQcKeGPoG6oOZbw` |
| Download Usage History (CSV) for an API Key | GET | `/v1/keys/{{key}}/lookups` | `conn_mod_def::GMZjRwlWruA::b-na3UYzRvOck13-cZZk-Q` |

### ApiKeyDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Update API Key Details | PUT | `/v1/keys/{{key}}/details` | `conn_mod_def::GMZh7GLLvaA::yz21gYmWSIWZXIPbMC-djg` |
| Update API Key Details | PUT | `/v1/keys/{{key}}/details` | `conn_mod_def::GMZjRwIewJA::jOyprAI_TBqfAMoPD47nzw` |

### UsageStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage Stats for an API Key | GET | `/v1/keys/{{key}}/usage` | `conn_mod_def::GMZh7GtROpA::UvidhG_-QB6Uzf6-IlN7hA` |
| Get Usage Stats for an API Key | GET | `/v1/keys/{{key}}/usage` | `conn_mod_def::GMZjRxp-uig::LXGI4TvXQ2itcLp-e_J7dQ` |

### PhoneNumbers

| Action | Method | Path | Action id |
|---|---|---|---|
| Phone Number Validation | GET | `/v1/phone_numbers` | `conn_mod_def::GMZh7XWKThA::puC-6vU4QxmNCPHi5xT82w` |
| Phone Number Validation | GET | `/v1/phone_numbers` | `conn_mod_def::GMZjSDou3_A::6eYPPgLkRey-5wIcI-ZoPg` |

### Postcodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup a Postcode | GET | `/v1/postcodes/{{postcode}}` | `conn_mod_def::GMZh7gaFdog::dV4jBB4wTxeNet8NAMKIIQ` |
| Lookup a Postcode | GET | `/v1/postcodes/{{postcode}}` | `conn_mod_def::GMZjStmcesg::dSIOLmCmRvu_Z2ESRAdZ-g` |

### Umprn

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve by UMPRN | GET | `/v1/umprn/{{umprn}}` | `conn_mod_def::GMZh7go4EpA::h8b3HIxxSfqXw2EGqyu3Tw` |
| Retrieve by UMPRN | GET | `/v1/umprn/{{umprn}}` | `conn_mod_def::GMZjSuIAhTg::xfmhwIn-T4agqmurL4B-Kw` |

### Address

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Address by UDPRN | GET | `/v1/udprn/{{udprn}}` | `conn_mod_def::GMZh7iL7nHA::TvetrEDRRxCRqBZYWgNzpA` |
| Retrieve an Address by UDPRN | GET | `/v1/udprn/{{udprn}}` | `conn_mod_def::GMZjSw7KoXA::rUo5K27AQu-Fq0NaubMNrg` |

### ApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get API Key Details | GET | `/v1/keys/{{key}}/details` | `conn_mod_def::GMZh7FPu6ng::YPAaDfItRbyQrxcv_n8PvA` |

### Configuration

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Configuration for an API Key | POST | `/v1/keys/{{key}}/configs/{{config}}` | `conn_mod_def::GMZjRoHj-FA::d46_Aw4UTCucfbuRTs0VEg` |

## When a call fails

The error comes from AddressZen, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/addresszen

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
