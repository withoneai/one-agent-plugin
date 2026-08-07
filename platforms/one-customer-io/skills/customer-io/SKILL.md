---
name: customer-io
description: Customer.io is a customer engagement platform that provides messaging automation, data-driven segmentation, and multichannel campaign orchestration, allowing teams to trigger personalized emails, SMS, push notifications, and in-app messages based on user behavior and lifecycle events. Read and write Customer.io data through One: newsletters, customers, segments, collections, campaignactions, reportingwebhooks and more, 162 actions with real parameter documentation. Use whenever the user asks to look something up in Customer.io, create or update a record there, or build code against the Customer.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: customer-io
  generated-from: one-knowledge-base
---

# Customer.io through One

Customer.io is a customer engagement platform that provides messaging automation, data-driven segmentation, and multichannel campaign orchestration, allowing teams to trigger personalized emails, SMS, push notifications, and in-app messages based on user behavior and lifecycle events.

One exposes Customer.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `customer-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Customer.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Customer.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Newsletters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Newsletter | GET | `/v1/newsletters/{{newsletterId}}` | `conn_mod_def::GMXukPwNiwg::w2ehsKnHQhO9dZE9Ig1ZUg` |
| Get a Newsletter Translation | GET | `/v1/newsletters/{{newsletterId}}/language/{{language}}` | `conn_mod_def::GMXukAa9meA::L8x6f2J1ScGeIzzfLf4dzg` |
| Get a Newsletter Variant | GET | `/v1/newsletters/{{newsletterId}}/contents/{{contentId}}` | `conn_mod_def::GMXukAZfozA::MDMA_dM8TpS4Z_zVHd9pwQ` |
| Get Metrics for a Newsletter | GET | `/v1/newsletters/{{newsletterId}}/metrics` | `conn_mod_def::GMXuj2sIkBg::0NIjfLX1TCaGhHfssmmRLQ` |
| List Newsletters | GET | `/v1/newsletters` | `conn_mod_def::GMXukPu8Rlg::8mo_RqB5Tf-yaEA-zhi6OQ` |
| Add a Translation to a Newsletter | POST | `/v1/newsletters/{{newsletterId}}/language` | `conn_mod_def::GMXuj1y0u0A::2ljp8YB6RfmDiaAR1eoqWw` |
| Add a Translation to a Newsletter Test Group | POST | `/v1/newsletters/{{newsletterId}}/test_group/{{testGroupId}}/language` | `conn_mod_def::GMXuj5MZv_A::qAKrQvL5QrmVr0wY5pB7UQ` |
| Create a Newsletter | POST | `/v1/newsletters` | `conn_mod_def::GMXukPg_Bng::0-r9xsZARFCcnGEwzalYlA` |
| Create a Test Group for a Newsletter | POST | `/v1/newsletters/{{newsletterId}}/test_groups` | `conn_mod_def::GMXukAZfJjA::O718xexfSKG9vmw60BipUQ` |
| Delete a Newsletter | DELETE | `/v1/newsletters/{{newsletterId}}` | `conn_mod_def::GMXukPNV7hA::lEEtV7PQQRCyqBlJeuFYTA` |
| Delete a Translation in a Newsletter Test Group | DELETE | `/v1/newsletters/{{newsletterId}}/test_group/{{testGroupId}}/language/{{language}}` | `conn_mod_def::GMXukAcsp5A::GzpIRi_mR0SDNNOwcsvwMA` |
| Delete a Translation of a Newsletter | DELETE | `/v1/newsletters/{{newsletterId}}/language/{{language}}` | `conn_mod_def::GMXukAst0Pg::44OlkfyOTbyl6XvRtsG8ag` |

5 more Newsletters actions are available through search.

### Customers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Customer's Attributes | GET | `/v1/customers/{{customerId}}/attributes` | `conn_mod_def::GMXuhkvSGDA::rdHR2x4wRzKQNgIe3AcsEw` |
| Get Customers by Email | GET | `/v1/customers` | `conn_mod_def::GMXuhlvlxXg::H6mjU7KQQTiiKw6cQVHXGQ` |
| List a Customer's Relationships | GET | `/v1/customers/{{customerId}}/relationships` | `conn_mod_def::GMXuhtItvVg::YEnOV-uYRVWghQtNDJPqWg` |
| List a Customer's Sent Messages | GET | `/v1/customers/{{customerId}}/messages` | `conn_mod_def::GMXuhtsGFTg::pfTKsqZYRiCMXuqdfcgaKA` |
| Lookup a Customer's Opt-Outs | GET | `/v1/customers/{{customerId}}/optouts` | `conn_mod_def::GMXukevh1EA::Y6GmAx-HQ0mG6_m9-k37kg` |
| List Customer Attributes and Devices | POST | `/v1/customers/attributes` | `conn_mod_def::GMXuhlu_C2g::I984xKHmQkuLNwtGXzPuFA` |
| Search for Customers | POST | `/v1/customers` | `conn_mod_def::GMXuhspe-cA::tQgMg68lRReZH1buMyBRWA` |
| Update a Customer's Opt-Outs | PUT | `/v1/customers/{{customerId}}/optouts` | `conn_mod_def::GMXukevW18A::zcF6IQssS86_GPOQKfC2Bg` |

### Segments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Segment | GET | `/v1/segments/{{segmentId}}` | `conn_mod_def::GMXuklsqfeg::rm6qOXSVROC1jobCyGLINg` |
| Get a Segment's Customer Count | GET | `/v1/segments/{{segmentId}}/customer_count` | `conn_mod_def::GMXuksAFkYA::FA9XUfQWRPW4wMzC2Wn2TA` |
| Get a Segment's Dependencies | GET | `/v1/segments/{{segmentId}}/used_by` | `conn_mod_def::GMXuksoniDA::ZlhkMJy7TvGCQwDJKEEsag` |
| List a Customer's Segments | GET | `/v1/customers/{{customerId}}/segments` | `conn_mod_def::GMXuhsEHOLA::2c03h-XcQB-QQd_wpyk_Sg` |
| List Customers in a Segment | GET | `/v1/segments/{{segmentId}}/membership` | `conn_mod_def::GMXuks6KB5A::k7YCMAxJRN6KO8C82P0Bnw` |
| List Segments | GET | `/v1/segments` | `conn_mod_def::GMXukssxVxA::aQuv5Ay8R9eGTXfSId5ITA` |
| Create a Manual Segment | POST | `/v1/segments` | `conn_mod_def::GMXukmVo8ZA::m3y22mOaRw6ulIVb92S0ag` |
| Delete a Segment | DELETE | `/v1/segments/{{segmentId}}` | `conn_mod_def::GMXukl14lGg::ce5GlAt9Rke5bmtRGD2ESA` |

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Collection | GET | `/v1/collections/{{collectionId}}` | `conn_mod_def::GMXuheNY_hg::Lzcx_9eiQMCCtlO20TbkjA` |
| List Your Collections | GET | `/v1/collections` | `conn_mod_def::GMXuheMhKSA::fQKB5ykGTOKpMRGL7mnK4A` |
| Lookup Collection Contents | GET | `/v1/collections/{{collectionId}}/content` | `conn_mod_def::GMXuheNC3gg::HkBYKaH0QxqQN_rwrCl-Sw` |
| Create a Collection | POST | `/v1/collections` | `conn_mod_def::GMXuhTdOmog::Di5PitAzSSaFmRPEiXTxHQ` |
| Delete a Collection | DELETE | `/v1/collections/{{collectionId}}` | `conn_mod_def::GMXuhdSoAZg::9igTfJBWSgKlsi-WDo9xHg` |
| Update a Collection | PUT | `/v1/collections/{{collectionId}}` | `conn_mod_def::GMXuheMxlEA::hnGgCPA9SkS4PKsv_SP12A` |
| Update Collection Contents | PUT | `/v1/collections/{{collectionId}}/content` | `conn_mod_def::GMXuhklpJrA::0ZHgfs55SVay600gxmCZ_g` |

### CampaignActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign Action | GET | `/v1/campaigns/{{campaignId}}/actions/{{actionId}}` | `conn_mod_def::GMXuhBJnRCg::cy7iV8OLT0Ozlnpz9jFgsg` |
| Get a Campaign Action Translation | GET | `/v1/campaigns/{{campaignId}}/actions/{{actionId}}/language/{{language}}` | `conn_mod_def::GMXuhDgssyg::Vhamkm2CSwig68qe91r-9Q` |
| List a Campaign's Actions | GET | `/v1/campaigns/{{campaignId}}/actions` | `conn_mod_def::GMXuhTs5XZA::pexJHY8YR0awL7m4aGKv_w` |
| Update a Campaign Action | PUT | `/v1/campaigns/{{campaignId}}/actions/{{actionId}}` | `conn_mod_def::GMXuhX1kNVA::Ex2lZY7QRYOIxCbyA4vZKw` |
| Update a Campaign Action Translation | PUT | `/v1/campaigns/{{campaignId}}/actions/{{actionId}}/language/{{language}}` | `conn_mod_def::GMXuhU5najg::W7NHUF40THG6qG3sBa-eCQ` |

### ReportingWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Reporting Webhook | GET | `/v1/reporting_webhooks/{{webhookId}}` | `conn_mod_def::GMXukd-aPnA::w_KdyW3KQtKjcqULeHWOGw` |
| List Reporting Webhooks | GET | `/v1/reporting_webhooks` | `conn_mod_def::GMXuklidpQA::E_dB8f-7TD-HlD77f2nHwg` |
| Create a Reporting Webhook | POST | `/v1/reporting_webhooks` | `conn_mod_def::GMXukeXQ6WA::XO8IGqnrQhW7yYq8GSGLzA` |
| Delete a Reporting Webhook | DELETE | `/v1/reporting_webhooks/{{webhookId}}` | `conn_mod_def::GMXukd9sLXg::Es3Tv50WQgWTYiVEUD3uxA` |
| Update a Reporting Webhook Configuration | PUT | `/v1/reporting_webhooks/{{webhookId}}` | `conn_mod_def::GMXukloAwyg::w-tydPCdQS6rBqeMTuEWeg` |

### EmailTranslations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email Translation | GET | `/v1/design_studio/emails/{{id}}/languages/{{language}}` | `conn_mod_def::GMXuiJceqpA::9EH3zCSYSZyZs6vA7m-gug` |
| List an Email's Translations | GET | `/v1/design_studio/emails/{{id}}/languages` | `conn_mod_def::GMXujGR1EwA::n9PIjyQsRP64PkJEpoTKQQ` |
| Create a Translation for an Email | POST | `/v1/design_studio/emails/{{id}}/languages` | `conn_mod_def::GMXuiAMslPA::6yP65gLuTFysLyhctzRQpQ` |
| Update an Email Translation | PUT | `/v1/design_studio/emails/{{id}}/languages/{{language}}` | `conn_mod_def::GMXujRLYHDA::oQqY7l1xTL6updcwiHL9pQ` |

### Exports

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Export | GET | `/v1/exports/{{exportId}}/download` | `conn_mod_def::GMXujYkKuzg::XySXuKmdTzuS_gSahlFZAQ` |
| Get an Export | GET | `/v1/exports/{{exportId}}` | `conn_mod_def::GMXujlGSIoA::bpoA8cHISfuKchFbhVWNHA` |
| List Exports | GET | `/v1/exports` | `conn_mod_def::GMXujkiME4A::z8gX1nXTTnuIF4qvCbJPTQ` |
| Export Customers Using Exports | POST | `/v1/exports/customers` | `conn_mod_def::GMXujd7UGJg::fvZsUpzcSYW1Q3ehhQLbpQ` |

### BroadcastActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Broadcast Action | GET | `/v1/broadcasts/{{broadcastId}}/actions/{{actionId}}` | `conn_mod_def::GMXugjq2t9A::5Kn2uwEYS3W8pQyDfToZJQ` |
| List a Broadcast's Actions | GET | `/v1/broadcasts/{{broadcastId}}/actions` | `conn_mod_def::GMXug6f7zAg::1ANI1lCiROqyhjEl06sTkQ` |
| Update a Broadcast Action | PUT | `/v1/broadcasts/{{broadcastId}}/actions/{{actionId}}` | `conn_mod_def::GMXug4gkFDA::2qEOFtv-TrK0gnj0yPUhLQ` |
| Update a Broadcast Action Translation | PUT | `/v1/broadcasts/{{broadcastId}}/actions/{{actionId}}/language/{{language}}` | `conn_mod_def::GMXuhAqb39g::bafriLvnTlG99H0zu5dvdw` |

### AssetFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Asset Folder by ID | GET | `/v1/assets/folders/{{id}}` | `conn_mod_def::GMXugbZ0xwA::SJiMSI-YSU2t8BjvnVE7cw` |
| List Asset Folders | GET | `/v1/assets/folders` | `conn_mod_def::GMXugbyN44g::I4IVowfTReGCCOrjxwQAMg` |
| Create an Asset Folder | POST | `/v1/assets/folders` | `conn_mod_def::GMXugTKlnQA::EaMDqDoiSHCowuagizexvQ` |
| Update an Asset Folder | PUT | `/v1/assets/folders/{{id}}` | `conn_mod_def::GMXugirSwWA::ImEG-bKgRaCUMSQ9VyRfvg` |

### DesignStudioComponents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Design Studio Component | GET | `/v1/design_studio/components/{{id}}` | `conn_mod_def::GMXuiHMT3_g::tcjRu5cISyamrJHsESkpUg` |
| List Design Studio Components | GET | `/v1/design_studio/components` | `conn_mod_def::GMXui_H7Hsg::haTH3mgUR26nhtK9Zxdamg` |
| Delete a Design Studio Component | DELETE | `/v1/design_studio/components/{{id}}` | `conn_mod_def::GMXuiACLDxA::yMCJpo7eSEaLAEATGfZeEA` |
| Update a Design Studio Component | PUT | `/v1/design_studio/components/{{id}}` | `conn_mod_def::GMXujHLvuVg::d0alWfV-QQ2rMswCIjRtJg` |

### Snippets

| Action | Method | Path | Action id |
|---|---|---|---|
| List Snippets | GET | `/v1/snippets` | `conn_mod_def::GMXulEfd2tA::1Bf4L2Q3TTePTPHeGhdIFg` |
| Create a Snippet | POST | `/v1/snippets` | `conn_mod_def::GMXulFcaMxg::K32rE-n6QQSDKALciVBBgA` |
| Delete a Snippet | DELETE | `/v1/snippets/{{snippetName}}` | `conn_mod_def::GMXulD0NaCg::qmhhxw7tTniB6ErpDsLy5Q` |
| Update Snippets | PUT | `/v1/snippets` | `conn_mod_def::GMXulEqOumA::FRVTdPZATbSG7bMRUIQocw` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message | GET | `/v1/messages/{{messageId}}` | `conn_mod_def::GMXujuV00rg::1w3rDJAXRLam5iBOz6L1Hw` |
| Get an Archived Message | GET | `/v1/messages/{{messageId}}/archived_message` | `conn_mod_def::GMXujs-VhNg::p77BRXVYRqydbo2-Bxt3bA` |
| List Messages | GET | `/v1/messages` | `conn_mod_def::GMXujuROJTg::VlKTAIOUQhabmYZpk904fw` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Email | GET | `/v1/design_studio/emails/{{id}}` | `conn_mod_def::GMXuiHOPyqA::ImYFjzBPRdOLubLwyEuR_Q` |
| List Emails | GET | `/v1/design_studio/emails` | `conn_mod_def::GMXujJeDihA::CB-W1CUTSpGjtqG7X4XD-w` |
| Update an Email | PUT | `/v1/design_studio/emails/{{id}}` | `conn_mod_def::GMXujQEYQaA::dXRVBnEZRtma96W8ICDe0Q` |

### FileAsset

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Asset | GET | `/v1/assets/files/{{id}}` | `conn_mod_def::GMXugav5Ycg::yDwErtIhRE-8bvy6k-dyLA` |
| Delete a File Asset | DELETE | `/v1/assets/files/{{id}}` | `conn_mod_def::GMXugUiKEzA::cwg0nbvARcSy-T1kBSDu9w` |
| Update a File Asset | PUT | `/v1/assets/files/{{id}}` | `conn_mod_def::GMXugarAsug::qCnAH5wXTz-EjO5WCknZLQ` |

### DesignStudioFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Design Studio Folders | GET | `/v1/design_studio/folders` | `conn_mod_def::GMXujINpqlA::mSQAJDS8Sv29zi-3q83AhQ` |
| Delete a Design Studio Folder | DELETE | `/v1/design_studio/folders/{{id}}` | `conn_mod_def::GMXuiA1V4og::gVnfv0TGSGGgseXHy8q5tA` |
| Update a Design Studio Folder | PUT | `/v1/design_studio/folders/{{id}}` | `conn_mod_def::GMXujFsRY0A::7ArbWYf8QgqCdvS4tUoRVA` |

### Campaigns

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Campaign by ID | GET | `/v1/campaigns/{{campaignId}}` | `conn_mod_def::GMXuhAgCBtA::Zo5wncXzREmNsrWeEa0Y9A` |
| List Campaigns | GET | `/v1/campaigns` | `conn_mod_def::GMXuhTcJmng::giPMaomhT3GpgwFqzzFKLQ` |

### DesignStudioEmails

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Email Using Design Studio | POST | `/v1/design_studio/emails` | `conn_mod_def::GMXuh1Ba20g::jTUWJgOeT6OZi2IU8PKmIA` |
| Delete a Design Studio Email | DELETE | `/v1/design_studio/emails/{{id}}` | `conn_mod_def::GMXuiAjbibA::JVXypnSeRAmKYKyDGmLNGw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Folder in Design Studio | GET | `/v1/design_studio/folders/{{id}}` | `conn_mod_def::GMXuiXCyJPg::wZA7e1usTIiS3BoEDzw6bQ` |
| Create a Folder in Design Studio | POST | `/v1/design_studio/folders` | `conn_mod_def::GMXuh4_muYA::eqNZ_mfMRlaJJ2ib_-oEzA` |

### Imports

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Bulk Import | GET | `/v1/imports/{{importId}}` | `conn_mod_def::GMXujmfp0Mg::jqQdgAWrSQy6i7JqEP3uQA` |
| Import Items in Bulk | POST | `/v1/imports` | `conn_mod_def::GMXujmf8AQg::ifuYZZ2jTBihSIWAAXgy6Q` |

### Assets

| Action | Method | Path | Action id |
|---|---|---|---|
| List File Assets | GET | `/v1/assets` | `conn_mod_def::GMXugckwJEg::w6tYOkx7StKXFFVQUswS3g` |

1 more Assets actions are available through search.

This lists 90 of 162 actions. For anything not here, call `search_one_platform_actions` with platform `customer-io`. The full catalog is at https://www.withone.ai/knowledge/customer-io.

## When a call fails

The error comes from Customer.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/customer-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
