---
name: webflow
description: Webflow is a no-code website builder that enables users to design, build, and launch responsive websites visually, while automatically generating clean HTML, CSS, and JavaScript code. Read and write Webflow data through One: collectionitems, formsubmissions, sites, pages, assets, collections and more, 106 actions with real parameter documentation. Use whenever the user asks to look something up in Webflow, create or update a record there, or build code against the Webflow API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: webflow
  generated-from: one-knowledge-base
---

# Webflow through One

Webflow is a no-code website builder that enables users to design, build, and launch responsive websites visually, while automatically generating clean HTML, CSS, and JavaScript code.

One exposes Webflow through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `webflow` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Webflow is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Webflow account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### CollectionItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection Item | GET | `/v2/collections/{{collectionId}}/items/{{itemId}}` | `conn_mod_def::GJ8UJmI6_B4::Cd2iXHR-Sfy3s0iPzexQBg` |
| Get a Collection’s Live Item | GET | `/v2/collections/{{collectionId}}/items/{{itemId}}/live` | `conn_mod_def::GJ8UJm1Z0AY::cSZ91b8HQaGgdVBDizoXZA` |
| List a Collection’s Items | GET | `/v2/collections/{{collectionId}}/items` | `conn_mod_def::GJ8UJo6affY::8rFKCX4OSAWxKdQoOzzsmQ` |
| List Live Collection Items (Published Items in a Collection) | GET | `/v2/collections/{{collectionId}}/items/live` | `conn_mod_def::GJ8UJnplhP4::IeMZNjDtTUCQBwhE-r5bnA` |
| Create Collection Item(s) in a Collection | POST | `/v2/collections/{{collectionId}}/items` | `conn_mod_def::GJ8UJfe5e6c::d9O4EKP7TdqfuvHaL7FmmA` |
| Create Collection Items (Bulk) in a Collection | POST | `/v2/collections/{{collectionId}}/items/bulk` | `conn_mod_def::GJ8UJfgIfhM::09khI8ZeRE-LdpIUjZWV8w` |
| Create Live Collection Item(s) in a Collection | POST | `/v2/collections/{{collectionId}}/items/live` | `conn_mod_def::GJ8UJe-MdgA::TkY9z5iASD2M1Ll-CmSCZg` |
| Delete a Collection Item | DELETE | `/v2/collections/{{collectionId}}/items/{{itemId}}` | `conn_mod_def::GJ8UJfpjKmw::2TdJmeKLQlySPLgq4_zwkQ` |
| Publish Collection Items | POST | `/v2/collections/{{collectionId}}/items/publish` | `conn_mod_def::GJ8UJvBnKMw::hyiaotU3T6iAxGgPorjT2Q` |
| Unpublish a Live Collection Item | DELETE | `/v2/collections/{{collectionId}}/items/{{itemId}}/live` | `conn_mod_def::GJ8UJxODlyk::H5OSvB2GTce-L2dkT0f7gg` |
| Unpublish Live Collection Items (Batch) | DELETE | `/v2/collections/{{collectionId}}/items/live` | `conn_mod_def::GJ8UJvIXSMU::4Tix_n23SNuuMpVF6F1elg` |
| Update a Collection Item | PATCH | `/v2/collections/{{collectionId}}/items/{{itemId}}` | `conn_mod_def::GJ8UJvcYJXY::tbG3JQWmTPq0ZaAPf-QfmA` |

3 more CollectionItems actions are available through search.

### FormSubmissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form Submission | GET | `/v2/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJKwI2OQ::-zd6YzEaR7iobYrI6ouwDg` |
| Get a Site’s Form Submission | GET | `/v2/sites/{{siteId}}/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJK-Bp9k::fu0pk4egQIa9tBj8k5VZ7g` |
| List a Form’s Submissions | GET | `/v2/forms/{{formId}}/submissions` | `conn_mod_def::GJ8UJL4jrlY::z5c25RSzSCiPyxaPndjskQ` |
| List a Form’s Submissions in a Site | GET | `/v2/sites/{{siteId}}/forms/{{formId}}/submissions` | `conn_mod_def::GJ8UJMUDGo4::B5p4-j2kSAyuK-NY3WuCoQ` |
| List a Site’s Form Submissions | GET | `/v2/sites/{{siteId}}/form_submissions` | `conn_mod_def::GJ8UJYSUIjw::dvOPOXQBTKSY8huw7TLP4A` |
| Delete a Form Submission | DELETE | `/v2/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJDlZTIE::80Nj0_nkSVq67Ku1kaTFbg` |
| Delete a Site’s Form Submission | DELETE | `/v2/sites/{{siteId}}/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJEWbL2A::G6z1TgMhRQiayXRLAoQiUg` |
| Modify a Form Submission | PATCH | `/v2/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJSujNXY::EMYtPBnSQlKrcEQhPijOEQ` |
| Modify a Site’s Form Submission | PATCH | `/v2/sites/{{siteId}}/form_submissions/{{formSubmissionId}}` | `conn_mod_def::GJ8UJS61tto::dGcdXs0CSOmrHrPJ4yRkxg` |

### Sites

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site | GET | `/v2/sites/{{siteId}}` | `conn_mod_def::GJ8UKlHZNNc::kXviM2UySvebOBHNKPOLKw` |
| Get a Site’s robots.txt | GET | `/v2/sites/{{siteId}}/robots_txt` | `conn_mod_def::GJ8UKk-9dFI::KHa65aGDRIKe8kiMliE2Lg` |
| List Sites | GET | `/v2/sites` | `conn_mod_def::GJ8UKk5geM4::J4KKMLmnR2GGe0Rktm3e8Q` |
| Delete a Site | DELETE | `/v2/sites/{{siteId}}` | `conn_mod_def::GJ8UKcNfEtc::m_2qF1LURTKnMv6mT5JMbg` |
| Publish a Site | POST | `/v2/sites/{{siteId}}/publish` | `conn_mod_def::GJ8UKr7LbdY::Pgd1EWhyQJe0lXkr7z-eWg` |
| Update a Site | PATCH | `/v2/sites/{{siteId}}` | `conn_mod_def::GJ8UKzEP7-I::iaihBwEcQBeobK-hQOsWdQ` |
| Update a Site’s robots.txt | PATCH | `/v2/sites/{{siteId}}/robots_txt` | `conn_mod_def::GJ8UKr4OXLc::Yn_mauDCQSmne4OBam60hA` |

### Pages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Page’s Custom Code | GET | `/v2/pages/{{pageId}}/custom_code` | `conn_mod_def::GJ8UI8ezfns::_cjywzVxRCOn6KzEPP4kmA` |
| Get a Page’s DOM Content | GET | `/v2/pages/{{pageId}}/dom` | `conn_mod_def::GJ8UKHGA_qQ::11IoNzYlSoC0hMliJmRoTg` |
| Get a Page’s Metadata | GET | `/v2/pages/{{pageId}}` | `conn_mod_def::GJ8UKF4bgeE::YHFcwEx4Q9K_Y28G6ZFXuw` |
| List a Site’s Pages | GET | `/v2/sites/{{siteId}}/pages` | `conn_mod_def::GJ8UKGjKIwk::duWBLlaTQ0Gu1J-mL9a75Q` |
| Update a Page’s Localized DOM Content (Secondary Locale) | POST | `/v2/pages/{{pageId}}/dom` | `conn_mod_def::GJ8UKHmtjtc::Zd4OYDEzQtWpHjijaQ9Piw` |
| Update a Page’s Metadata (SEO & Open Graph) | PUT | `/v2/pages/{{pageId}}` | `conn_mod_def::GJ8UKG-PqDI::e41aPhosRAaDoj57YJwhIQ` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset | GET | `/v2/assets/{{assetId}}` | `conn_mod_def::GJ8UIUZV1sA::n2hpmiSNSGS4aOBATuu1qg` |
| List a Site’s Assets | GET | `/v2/sites/{{siteId}}/assets` | `conn_mod_def::GJ8UIevEDL4::CiD7wuA3SV2RVTPW7LQUGA` |
| Delete an Asset | DELETE | `/v2/assets/{{assetId}}` | `conn_mod_def::GJ8UITPI50Y::M8jfTrzVSjOcpY4ht6Belg` |
| Update an Asset | PATCH | `/v2/assets/{{assetId}}` | `conn_mod_def::GJ8UIfBi5Fs::iGXOlFZvRAKEH-MW2skrCg` |
| Upload an Asset to a Site (Create Asset Upload) | POST | `/v2/sites/{{siteId}}/assets` | `conn_mod_def::GJ8UIehtUvE::rl2yPhoDRiiHA3YnpC5_Ug` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection’s Details | GET | `/v2/collections/{{collectionId}}` | `conn_mod_def::GJ8UImgkdDg::FiCBVw-oQeuG_-X2KpDiGA` |
| List a Site’s Collections | GET | `/v2/sites/{{siteId}}/collections` | `conn_mod_def::GJ8UIlC8Kzk::Zs7OPQ3ISm6qDVeVm1D-Qw` |
| Create a Site Collection | POST | `/v2/sites/{{siteId}}/collections` | `conn_mod_def::GJ8UIeROAK4::GLoxH5hbQ7GVgQ2xuvcqrw` |
| Delete a Collection | DELETE | `/v2/collections/{{collectionId}}` | `conn_mod_def::GJ8UIk_LLEQ::3y1mL1oIT-GDia6wq_bFtA` |

### Products

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Product and SKUs | GET | `/v2/sites/{{siteId}}/products/{{productId}}` | `conn_mod_def::GJ8UKOfQu_0::WuzVTL7zQkONgu1IJzFfWw` |
| List a Site’s Products & SKUs | GET | `/v2/sites/{{siteId}}/products` | `conn_mod_def::GJ8UKOrIIPM::0Qs0wilKSnmRYzAq6Mkqvw` |
| Create a Site Product & Default SKU | POST | `/v2/sites/{{siteId}}/products` | `conn_mod_def::GJ8UKO3DMio::KLgDU_KxSyi5gKbRbfC1ew` |
| Update a Site’s Product | PATCH | `/v2/sites/{{siteId}}/products/{{productId}}` | `conn_mod_def::GJ8UKOTNqOA::cKNAh6wrS3qG0_FZpEUWOQ` |

### AssetFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset Folder | GET | `/v2/asset_folders/{{assetFolderId}}` | `conn_mod_def::GJ8UITbjHAM::ejFEhysKTsWJGJ9j2NdxEA` |
| List a Site’s Asset Folders | GET | `/v2/sites/{{siteId}}/asset_folders` | `conn_mod_def::GJ8UITvViCY::7FPTVAPkReGzY4cA4nsvwg` |
| Create a Site Asset Folder | POST | `/v2/sites/{{siteId}}/asset_folders` | `conn_mod_def::GJ8UIXy5E78::pBFijqNlSLO44hZbf1hAlQ` |

### SiteOrders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Order | GET | `/v2/sites/{{siteId}}/orders/{{orderId}}` | `conn_mod_def::GJ8UJ_d8dWE::nW-aQzkTSJO5npxY2vP50w` |
| Unfulfill a Site Order | POST | `/v2/sites/{{siteId}}/orders/{{orderId}}/unfulfill` | `conn_mod_def::GJ8UJ_ziEQg::ogBKEhX2RfWy_d9lwWK4HQ` |
| Update a Site Order | PATCH | `/v2/sites/{{siteId}}/orders/{{orderId}}` | `conn_mod_def::GJ8UJ_fZDZY::Ypgyws_cRfyQSC1ZIOutCw` |

### Orders

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Orders | GET | `/v2/sites/{{siteId}}/orders` | `conn_mod_def::GJ8UJ_v4XcE::216XcU-LSH66Q1qTsoYFRg` |
| Fulfill a Site Order | POST | `/v2/sites/{{siteId}}/orders/{{orderId}}/fulfill` | `conn_mod_def::GJ8UJ35TSc8::tKHX0zDnSTaFJTSumZmBTQ` |
| Refund an Order for a Site | POST | `/v2/sites/{{siteId}}/orders/{{orderId}}/refund` | `conn_mod_def::GJ8UJ_fG6k8::ik1L-y1wQmGJFXaTa4oMHw` |

### CollectionFields

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Collection Field | POST | `/v2/collections/{{collectionId}}/fields` | `conn_mod_def::GJ8UIeCEQ90::S7PNXKLYQn6-q0O_as8O6Q` |
| Delete a Collection Field | DELETE | `/v2/collections/{{collectionId}}/fields/{{fieldId}}` | `conn_mod_def::GJ8UIlY9D1o::0Sz9mmTyRr2THLXAfa-B1w` |
| Update a Collection’s Custom Field | PATCH | `/v2/collections/{{collectionId}}/fields/{{fieldId}}` | `conn_mod_def::GJ8UIlELghQ::hKuYF0HET7K18-bjE6JDjw` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Webhook | GET | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ8UKymOUcw::eAWJ13YuTZC3xk7FLfgYDA` |
| List a Site’s Webhooks | GET | `/v2/sites/{{siteId}}/webhooks` | `conn_mod_def::GJ8UKzUSEnA::pqzxKhvLTEKbzhnjs1SRVA` |
| Remove a Webhook | DELETE | `/v2/webhooks/{{webhookId}}` | `conn_mod_def::GJ8UKyYSDhg::_C9hV0E-Qta8se1LsGVH7Q` |

### RegisteredScripts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Registered Scripts | GET | `/v2/sites/{{siteId}}/registered_scripts` | `conn_mod_def::GJ8UI1a--WM::mNLcf4J2Q4mHOw7IyI3MWw` |
| Register a Site’s Hosted Script | POST | `/v2/sites/{{siteId}}/registered_scripts/hosted` | `conn_mod_def::GJ8UI8mMBRg::noPDEC5aQgueA-MyUCMw0w` |
| Register an Inline Script for a Site | POST | `/v2/sites/{{siteId}}/registered_scripts/inline` | `conn_mod_def::GJ8UI9QDPZc::ASse9PvKTXqNq7lNbdJuQg` |

### Components

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Components | GET | `/v2/sites/{{siteId}}/components` | `conn_mod_def::GJ8UI2Ife0g::j3Eg27qlS3ir0JYaq7ek_Q` |
| Update a Site Component’s DOM Content (Secondary Locales) | POST | `/v2/sites/{{siteId}}/components/{{componentId}}/dom` | `conn_mod_def::GJ8UI2cDYDY::I_JaU0JVQEWTEEmWlZFvfg` |

### PagesCustomCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Add/Update a Page’s Custom Code | PUT | `/v2/pages/{{pageId}}/custom_code` | `conn_mod_def::GJ8UI9trs-A::usWe-Oa4Tc-YGN5Eo0b6PQ` |
| Delete a Page’s Custom Code | DELETE | `/v2/pages/{{pageId}}/custom_code` | `conn_mod_def::GJ8UI9eJc-I::sNxR5lKgQHK8guelOYXFhw` |

### CustomCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Custom Code | GET | `/v2/sites/{{siteId}}/custom_code` | `conn_mod_def::GJ8UJDmy7pU::PM-fndsrSgeqrFDWLAgjmg` |
| Add or Update a Site’s Custom Code | PUT | `/v2/sites/{{siteId}}/custom_code` | `conn_mod_def::GJ8UJEYJV18::FP-AEFdSQlqN7RZG6_cWXQ` |

### SiteRobotsTxt

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Site’s robots.txt Rules | DELETE | `/v2/sites/{{siteId}}/robots_txt` | `conn_mod_def::GJ8UKc-JLD8::yXzixxWATducM9gOj07pPQ` |
| Replace a Site’s robots.txt | PUT | `/v2/sites/{{siteId}}/robots_txt` | `conn_mod_def::GJ8UKsGASHk::HoaOWfhUQ9GVGG8hmyD5LA` |

### SiteRedirects

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Site Redirect (301) | DELETE | `/v2/sites/{{siteId}}/redirects/{{redirectId}}` | `conn_mod_def::GJ8UKcxLxrI::B91cZkNzRT-KCO2tQixXOQ` |
| Update a Site Redirect (301) | PATCH | `/v2/sites/{{siteId}}/redirects/{{redirectId}}` | `conn_mod_def::GJ8UKsOowAI::H5fe_1GtQOWFRpdDkyAbXA` |

### ComponentProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site Component’s Default Properties | GET | `/v2/sites/{{siteId}}/components/{{componentId}}/properties` | `conn_mod_def::GJ8UIuS5jWs::-KUOQBWNRH2cEOwyesfW4Q` |
| Update a Site Component’s Properties (Secondary Locale) | POST | `/v2/sites/{{siteId}}/components/{{componentId}}/properties` | `conn_mod_def::GJ8UI2gYYEc::z88BYg8aSsSXhcd8k2KjIQ` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Form’s Schema | GET | `/v2/forms/{{formId}}` | `conn_mod_def::GJ8UJKSgHJ4::rFxJK7hDRXi2TWDPQX-rUg` |
| List a Site’s Forms | GET | `/v2/sites/{{siteId}}/forms` | `conn_mod_def::GJ8UJS8JkqE::tKQCyFiATIeh4qnX8A9_Ug` |

### Redirects

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s 301 Redirects | GET | `/v2/sites/{{siteId}}/redirects` | `conn_mod_def::GJ8UKcR8psM::4pBWC6nTT-iiP7YjsOJfQQ` |
| Create a 301 Redirect for a Site | POST | `/v2/sites/{{siteId}}/redirects` | `conn_mod_def::GJ8UKVc_3J8::3bCWIG9QTfmCfVq4wcB1MQ` |

### SitesWellKnown

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a Site’s Well-Known File | PUT | `/v2/sites/{{siteId}}/well_known` | `conn_mod_def::GJ8UKsq6P84::18DWVGdiTKa9MM1Nwdzg-A` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site’s Comment Threads | GET | `/v2/sites/{{siteId}}/comments` | `conn_mod_def::GJ8UIuRPEao::hA--I78yThGKW0N53ibeRw` |

### CustomCodeBlocks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Site's Custom Code Blocks | GET | `/v2/sites/{{siteId}}/custom_code/blocks` | `conn_mod_def::GJ8UI2XxT4M::CO_3M7ADSC2zfFm45gpgSw` |

### SitesCustomCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Site’s Custom Code | DELETE | `/v2/sites/{{siteId}}/custom_code` | `conn_mod_def::GJ8UJD9YT1Q::mpXcqjYFTEyJ9JfghprGqA` |

### SkuInventory

| Action | Method | Path | Action id |
|---|---|---|---|
| List a SKU Item’s Inventory | GET | `/v2/collections/{{skuCollectionId}}/items/{{skuId}}/inventory` | `conn_mod_def::GJ8UJSuI7bw::CL_QMu4-QLWAc-PGxAr9bQ` |

### CollectionSkuItemInventory

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Collection SKU Item’s Inventory | PATCH | `/v2/collections/{{skuCollectionId}}/items/{{skuId}}/inventory` | `conn_mod_def::GJ8UJfAbSPE::nUI0jOVdRWms-MhJPm5gug` |

### CommentThreads

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Site’s Comment Thread | GET | `/v2/sites/{{siteId}}/comments/{{commentThreadId}}` | `conn_mod_def::GJ8UIu175bM::AKE2Z5LxSHquEYcmozKC3g` |

### AuthorizedUsers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Authorized User Info | GET | `/v2/token/authorized_by` | `conn_mod_def::GJ8UJ30DKLA::7lJs0edER46JFAidOS6Rig` |

### CollectionsItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Collection’s Items | DELETE | `/v2/collections/{{collectionId}}/items` | `conn_mod_def::GJ8UJnFiBjk::XX7qc7XvSaa67BAis_HnAQ` |

This lists 90 of 106 actions. For anything not here, call `search_one_platform_actions` with platform `webflow`. The full catalog is at https://www.withone.ai/knowledge/webflow.

## When a call fails

The error comes from Webflow, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/webflow

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
