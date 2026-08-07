---
name: the-dog-api
description: The Dog API is an image and breed data API that provides access to dog photos, breed metadata, and search endpoints, allowing developers to build pet-focused applications, breed discovery features, and content experiences using structured canine data. Read and write The Dog API data through One: pets, images, facts, favourites, votes, breeds and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in The Dog API, create or update a record there, or build code against the The Dog API API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: the-dog-api
  generated-from: one-knowledge-base
---

# The Dog API through One

The Dog API is an image and breed data API that provides access to dog photos, breed metadata, and search endpoints, allowing developers to build pet-focused applications, breed discovery features, and content experiences using structured canine data.

One exposes The Dog API through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `the-dog-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm The Dog API is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real The Dog API account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pet by ID | GET | `/pets/{{petId}}` | `conn_mod_def::GK8Y6Thurmc::it57FOgBSoqNXz38aYmAmQ` |
| Get Personalised Health Tips for a Pet | GET | `/pets/{{petId}}/health-tips` | `conn_mod_def::GK8Y6Uk6cQc::dTl__LE4QzeMEYr1Yi4kzw` |
| List Pets | GET | `/pets` | `conn_mod_def::GK8Y6e13MD4::HyKGvR7ySqC9M5vQx2MbXg` |
| Analyze a Pet's Genealogy/Breed from All Images | POST | `/pets/{{petId}}/genealogy` | `conn_mod_def::GK8Y6J5d40g::SrzoTkGVRryEzhClP9BAOQ` |
| Create a Pet | POST | `/v1/pets` | `conn_mod_def::GK8Y6JYhlms::QnCF9bFFT7K9FQbzS7bZiA` |
| Delete a Pet | DELETE | `/pets/{{petId}}` | `conn_mod_def::GK8Y6JdJLQE::qlm25oTESy-4V8MXSKabZw` |
| Estimate a Pet's Age | POST | `/pets/{{petId}}/estimated-age` | `conn_mod_def::GK8Y6J1cHDw::HK0RPnrgSuOaXfquwPiuTg` |
| Estimate a Pet's Weight and Size | POST | `/pets/{{petId}}/estimated-weight` | `conn_mod_def::GK8Y6LqBh1c::3Fjyn3llSauExE7iuR54tg` |
| Generate a Pet's Body Condition Score | POST | `/pets/{{petId}}/body-condition-score` | `conn_mod_def::GK8Y59yEpY0::6ekAx8SWRJm085Fs0w1kWA` |
| Generate an AI Portrait for a Pet | POST | `/pets/{{petId}}/portrait` | `conn_mod_def::GK8Y6USDSIs::fFiD-JcFR_iTZUVzc5ECNA` |
| Update a Pet | PATCH | `/pets/{{petId}}` | `conn_mod_def::GK8Y6cSXlQo::GJOiBzuiS0CchUx1AgXj-A` |
| Upload Additional Images for a Pet | POST | `/pets/{{petId}}/images` | `conn_mod_def::GK8Y6cYx3z8::CSg09lTjRm-TP3nM7CuVRA` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Uploaded Image's Processing Status | GET | `/images/{{id}}/status` | `conn_mod_def::GK8Y5ui2bGI::aoPbLdlDTCmjeJbYGqyYjw` |
| Retrieve an Image by ID | GET | `/images/{{id}}` | `conn_mod_def::GK8Y6BdsXCo::9PR3Z_plQkW6PH3ZdljkqA` |
| Search Public Images | GET | `/images/search` | `conn_mod_def::GK8Y6AII9uc::1f16cl5NTxe28uS4kInSDw` |
| Cancel an Image's Pending Public Request | DELETE | `/images/{{imageId}}/public-requests` | `conn_mod_def::GK8Y5lYegNA::mIamBErRSyyxtgquoRYOgg` |
| Delete an Uploaded Image (by ID) | DELETE | `/images/{{id}}` | `conn_mod_def::GK8Y5t4TUy0::pZiqLTzbSMmHYeol4yrIxQ` |
| Upload an Image | POST | `/v1/images/upload` | `conn_mod_def::GK8Y58zc074::pH_xzlZzQMyjg0nIzKPXIg` |
| Upload an Image and Wait for Analysis to Complete | POST | `/images/upload-sync` | `conn_mod_def::GK8Y58z95EQ::IsqujsYbTaus2s3r-EoHrQ` |

### Facts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Fact by ID | GET | `/facts/{{id}}` | `conn_mod_def::GK8Y5Pvh910::ZJH5futPRmS-HajcZY5mgw` |
| Get a Random Fact | GET | `/v1/facts/random` | `conn_mod_def::GK8Y5QnDMP0::zjdWBJJDSIGOAQrs70VoWg` |
| Get a Random Fact for a Species | GET | `/facts/species/{{speciesId}}/random` | `conn_mod_def::GK8Y5Zec_7Y::xt_o0MJcQuq1c1GN9UY75w` |
| Get Facts by Breed | GET | `/facts/breed/{{breedId}}` | `conn_mod_def::GK8Y5Y9FOfY::OZCz3ZxwRD2CPEMInHy8XQ` |
| List Facts | GET | `/v1/facts` | `conn_mod_def::GK8Y5PoYVrI::CQbXFzI2RZunJ6OfZUIktA` |

### Favourites

| Action | Method | Path | Action id |
|---|---|---|---|
| List Favourites | GET | `/v1/favourites` | `conn_mod_def::GK8Y5lS_pgc::Vh_HqzFOTkOd1znWb3Xong` |
| Retrieve a Favourite by ID | GET | `/favourites/{{id}}` | `conn_mod_def::GK8Y5jXkCrc::AxgLbsjLTHGUMD9-D01WGw` |
| Create a Favourite | POST | `/favourites` | `conn_mod_def::GK8Y5awO57Y::F04wLOEbS5SlpEyBewvFNw` |
| Delete a Favourite | DELETE | `/favourites/{{id}}` | `conn_mod_def::GK8Y5XfWqsY::KNRTxHgAQIC9oh40L6i_mg` |

### Votes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vote by ID | GET | `/votes/{{voteId}}` | `conn_mod_def::GK8Y6pr9Xpo::-tFT1EseTISal7sluAqDcg` |
| List Votes for the Authenticated User | GET | `/votes` | `conn_mod_def::GK8Y6sfGykA::5RTYoRxuTLa3MkXCtUcjcQ` |
| Create a Vote | POST | `/v1/votes` | `conn_mod_def::GK8Y6nmiUnE::mR-Z5pshRA2OIgeD8Y-YCA` |

### Breeds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Breeds | GET | `/breeds` | `conn_mod_def::GK8Y5FIMAbU::ITRtsNDHQdCQl14QRgeU2g` |
| Retrieve a Breed by Identifier | GET | `/breeds/{{id}}` | `conn_mod_def::GK8Y5D-pdLc::5fWVMso_SSS808m8WwssYQ` |
| Search Breeds by Name | GET | `/breeds/search` | `conn_mod_def::GK8Y5GbI7fg::8pJgfXo6R_WLFq-aENJjtA` |

### HealthTips

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Health Tip by ID | GET | `/health-tips/{{id}}` | `conn_mod_def::GK8Y5kYYWhQ::1weSy843Rv6xA3zbpRi6Cw` |
| List Health Tips | GET | `/health-tips` | `conn_mod_def::GK8Y5lLiTi4::ViAWk0BpSNmpWyL3PTMOvQ` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| List Categories | GET | `/categories` | `conn_mod_def::GK8Y5QlsSa8::rDqaEF2QRm-f8PFvIBkUgw` |
| Retrieve a Category by Identifier | GET | `/categories/{{id}}` | `conn_mod_def::GK8Y5O4U-6E::iakbEpZ9RuKD0g5iaakr3w` |

### BreedBansAndLegislationByCountry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Breed Bans and Legislation by Country | GET | `/breeds/bans/country` | `conn_mod_def::GK8Y47Lfgsw::rnz-wbO_Qs2cSv89oqiyLA` |

### BreedBansCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Countries With Breed Legislation | GET | `/breeds/bans/countries` | `conn_mod_def::GK8Y5G-AYA8::jmVs0V60SPKaq4M0B3FRQw` |

### BreedGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Breed Groups | GET | `/breeds/breed-groups` | `conn_mod_def::GK8Y5EY2Eog::NRC0j-1yQLeuEtz9FH8CpQ` |

### ImagePublicRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Image Public Request | POST | `/images/{{imageId}}/public-requests` | `conn_mod_def::GK8Y5uzxwK8::Lv2eS4YYQa-i00F8B9PJDA` |

### BreedBans

| Action | Method | Path | Action id |
|---|---|---|---|
| Get All Bans for a Specific Breed Globally | GET | `/breeds/bans/breed/{{breedId}}` | `conn_mod_def::GK8Y47ofXIE::2ssog2A6SJ-Vxz2UuHu4YA` |

### ImageLabels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Image's Latest Breed Identification Labels | GET | `/images/{{id}}/labels` | `conn_mod_def::GK8Y50JgQRU::yqVd7VLoSeSnfrQ5H2ff7Q` |

### Portraits

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Pet's AI-Generated Portraits | GET | `/pets/{{petId}}/portraits` | `conn_mod_def::GK8Y6Tq9bCI::ai6l27s_Rjq8n2T5Qq75bA` |

### PortraitStyles

| Action | Method | Path | Action id |
|---|---|---|---|
| List Available Portrait Styles | GET | `/pets/portrait-styles` | `conn_mod_def::GK8Y6dhfd80::-8qjPLqAQiycpS0PpRL0pQ` |

### SubIds

| Action | Method | Path | Action id |
|---|---|---|---|
| List Detailed Sub IDs Used in the Account | GET | `/sub-ids` | `conn_mod_def::GK8Y6e53osQ::pu4fGpqxQpSqc5Pix1cmmw` |

### PublicRequestStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Public Request Status for an Image | GET | `/images/{{imageId}}/public-requests/status` | `conn_mod_def::GK8Y5vFaBds::ngggDnobSmyFVTfIN7gydw` |

### AccountFeatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Enabled Feature Flags for the Current Account | GET | `/accounts/features` | `conn_mod_def::GK8Y466_8o8::aDzh8LewSQe7fDL_Cj9zHQ` |

### Quota

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Upload Quota Usage and Remaining Limit | GET | `/accounts/quota` | `conn_mod_def::GK8Y42d99uk::sk6Rn-XRQd2fvtk-5o6SNA` |

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Account's Overview Stats | GET | `/accounts/{{accountId}}/overview` | `conn_mod_def::GK8Y44GgUYI::iNpTPvhAS0acVxvIa9UI1g` |

### MuscleConditionScore

| Action | Method | Path | Action id |
|---|---|---|---|
| Evaluate Muscle Condition from All Pet Images as a Wasting Risk Flag | POST | `/pets/{{petId}}/muscle-condition-score` | `conn_mod_def::GK8Y6UlD660::Gn8SANWpRX6TM6G6xnFCgQ` |

### BreedFacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Random Fact for a Specific Breed | GET | `/facts/breed/{{breedId}}/random` | `conn_mod_def::GK8Y5ZfJN4U::SCoQycx5QAedEeAFlhBXpg` |

## When a call fails

The error comes from The Dog API, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/the-dog-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
