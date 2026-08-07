---
name: short-io
description: Short.io is a link management platform that provides branded URL shortening, redirects, and click analytics through a web interface and API, allowing teams and developers to create, track, and automate short links for marketing, attribution, and user engagement workflows. Read and write Short.io data through One: links, domains, bundles, linkpermissions, folders, linkcountries and more, 55 actions with real parameter documentation. Use whenever the user asks to look something up in Short.io, create or update a record there, or build code against the Short.io API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: short-io
  generated-from: one-knowledge-base
---

# Short.io through One

Short.io is a link management platform that provides branded URL shortening, redirects, and click analytics through a web interface and API, allowing teams and developers to create, track, and automate short links for marketing, attribution, and user engagement workflows.

One exposes Short.io through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `short-io` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Short.io is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Short.io account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Links

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a New Link (Simple Version) | GET | `/links/tweetbot` | `conn_mod_def::GK5vNL3fexg::Hj6TOT10T-uhDBCHhwpA9Q` |
| Get a Link's OpenGraph Properties | GET | `/links/opengraph/{{domainId}}/{{linkId}}` | `conn_mod_def::GK5vNv0ZK9g::HGkL5zIkS_eiTNpTMDfV6Q` |
| Get Link Info by Link ID | GET | `/links/{{linkId}}` | `conn_mod_def::GK5vNnNgbUg::GSvuh3GjRziF_Pd6p_ydMA` |
| Get Link Info by Original URL | GET | `/links/by-original-url` | `conn_mod_def::GK5vNnwTCQA::7COxHMihQCym0u-hXQivBA` |
| Get Link Info by Path | GET | `/links/expand` | `conn_mod_def::GK5vNwZf9Sg::1qUcRVd2QGmQEu9Mz5xnkQ` |
| Get Links Info by Original URL | GET | `/links/multiple-by-url` | `conn_mod_def::GK5vNvepgjg::CoGFRt-KR527YDrJ-7WuEA` |
| List Domain Links | GET | `/api/links` | `conn_mod_def::GK5vOA3P5ig::adnwXl_nS4awsQHmkHw7Fg` |
| Add Link to a Bundle | POST | `/links/bundle/{{id}}/links` | `conn_mod_def::GK5vMgg6oqg::II8vCIONRna2OxZD6qGgvQ` |
| Archive Link | POST | `/links/archive` | `conn_mod_def::GK5vNBRgRqg::MJSwsQkGTVuQX3v4jEOfUQ` |
| Archive Links in Bulk | POST | `/links/archive_bulk` | `conn_mod_def::GK5vNBTF5kg::JNo5UYdkTE6ZJvHXIfE9YA` |
| Create a New Link | POST | `/links` | `conn_mod_def::GK5vNBbVlDg::M7bGeI4oT72ntD2EjPw1ZQ` |
| Create Links in Bulk | POST | `/links/bulk` | `conn_mod_def::GK5vNKKbKig::1ynzKd3fRmaBMTKD6LmwTg` |

10 more Links actions are available through search.

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain Details by ID | GET | `/domains/{{domainId}}` | `conn_mod_def::GK5vMgilpTA::jc7x_9NTSP2WeOID-XBjKQ` |
| List Domains | GET | `/api/domains` | `conn_mod_def::GK5vMgjGyZA::Pv6-zJlCS66TZFCmNlkXnA` |
| Create a Domain | POST | `/domains` | `conn_mod_def::GK5vMgiFU8A::Xj1F9FpXRu2aMYXmjSQFdQ` |
| Update a Domain's Settings | POST | `/domains/settings/{{domainId}}` | `conn_mod_def::GK5vMgqpnwg::leyfLm5RRkCvC01DbJ8-JA` |

### Bundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bundle By ID | GET | `/links/bundle/{{id}}` | `conn_mod_def::GK5vMnYfCTA::ezc7bpEcQlSyDQS08ma3Hw` |
| Create Bundle | POST | `/links/bundle` | `conn_mod_def::GK5vMnoHzIA::qJHkv7Z3RKW18vrVtV9w0Q` |
| Delete Bundle | DELETE | `/links/bundle/{{id}}` | `conn_mod_def::GK5vMneNWog::OIeUrhzZQsu4_Jc1XK8gAg` |
| Remove Link From a Bundle | DELETE | `/links/bundle/{{id}}/links/{{linkTemplateId}}` | `conn_mod_def::GK5vM2BQubg::afEPT_8jTneYU_jBC-vM7w` |

### LinkPermissions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Link Permissions | GET | `/links/permissions/{{domainId}}/{{linkId}}` | `conn_mod_def::GK5vNePDA_g::4RIIlIjmTxOFVhykpZq_EQ` |
| Add Link Permission | POST | `/links/permissions/{{domainId}}/{{linkId}}/{{userId}}` | `conn_mod_def::GK5vNBTJymA::8Q-YBZ5jT_GoIjaneRdRrA` |
| Delete Link Permissions for a User | DELETE | `/links/permissions/{{domainId}}/{{linkId}}/{{userId}}` | `conn_mod_def::GK5vNJtH0FA::JCf9L0kbSli0mh6TJaJgMQ` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain's Folder | GET | `/links/folders/{{domainId}}/{{folderId}}` | `conn_mod_def::GK5vNvtwH1g::5DoA6l0gQPSsETK0d_ZVAQ` |
| Create Folder | POST | `/links/folders` | `conn_mod_def::GK5vNm6jL3A::R4O1CwXcS0Ks0qaJOcT5YQ` |

### LinkCountries

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Link Countries | GET | `/link_country/{{linkId}}` | `conn_mod_def::GK5vOIfmffA::iQgBaR8ASgu9XARwG7GGfA` |
| Create Link Countries in Bulk for a Link | POST | `/link_country/bulk/{{linkId}}` | `conn_mod_def::GK5vN6D7iEA::cdovtvU6QsS31pKy_89ROg` |

### LinkCountry

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Link Country for a Link | POST | `/link_country/{{linkId}}` | `conn_mod_def::GK5vN7HGyaA::xGpRz3QFRzib7iLfCpk1uw` |
| Delete a Link Country | DELETE | `/link_country/{{linkId}}/{{country}}` | `conn_mod_def::GK5vOH6OjgA::MfI7Sk_HTpmbSCH4tM6B9A` |

### LinkRegions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Link Regions | GET | `/link_region/{{linkId}}` | `conn_mod_def::GK5vOI18ZKA::U6ZSshCATea504-cwr4bSg` |
| Create Link Regions in Bulk for a Link | POST | `/link_region/bulk/{{linkId}}` | `conn_mod_def::GK5vN6fgUWg::1jG8GW3uQXCy8E85s3NCow` |

### LinkRegion

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Region Targeting to a Link | POST | `/link_region/{{linkId}}` | `conn_mod_def::GK5vN5MI3mg::wFAImEY2TxWbFa5PNZ8nWA` |
| Delete a Link Region by Country | DELETE | `/link_region/{{linkId}}/{{country}}/{{region}}` | `conn_mod_def::GK5vOI68FHg::1FEWFLGQTueboPZJJOyh1A` |

### BundlesLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Bundle's Links | GET | `/links/bundle/{{id}}/links` | `conn_mod_def::GK5vMpLzg4g::JxvZNRLpRwWKgxWDxXS_oQ` |

### BundleTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Bundle Templates | GET | `/links/bundle/templates` | `conn_mod_def::GK5vMs9iSxA::uz93Psr7SUiRFtajVs6HEg` |

### BundleLogo

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Bundle Logo | POST | `/links/bundle/{{id}}/photo` | `conn_mod_def::GK5vM4KORjA::dL9vVL9aTgmbFZX4VGtBNg` |

### BundleBackgroundImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Upload a Bundle Background Image | PUT | `/links/bundle/{{id}}/background-image` | `conn_mod_def::GK5vM4KyTNg::gdLgzObARfiFyWCrhJI22Q` |

### BundleLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Bundle's Link Sort Order | PATCH | `/links/bundle/{{id}}/links` | `conn_mod_def::GK5vM4dq40g::NEb9bUZcRf2nCK7KYsq8KA` |

### Tags

| Action | Method | Path | Action id |
|---|---|---|---|
| Append a Single Tag to Links in Bulk | POST | `/tags/bulk` | `conn_mod_def::GK5vNBbRsCA::T2tcrCDNS829BiPee190vg` |

### PublicLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Public Link | POST | `/links/public` | `conn_mod_def::GK5vNJsjXEg::i7XY78wKTZqIbTTXhvrG6A` |

### DeepLinkConfiguration

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch and Inspect Deep Link Configuration for a URL | POST | `/links/deeplinks/debug` | `conn_mod_def::GK5vNnbokjg::E2cMdhyWTSOPMSnQewG0ig` |

### OpenGraphTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch and Inspect OpenGraph Tags for a URL | POST | `/links/opengraph/debug` | `conn_mod_def::GK5vNn9ZagA::EeaIQeZxQ3uWZb5xnGMXvw` |

### Regions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Regions by Country | GET | `/link_region/list/{{country}}` | `conn_mod_def::GK5vOIMdYQg::0ImiD3LDS9KCvaMyA4yANg` |

### Bundle

| Action | Method | Path | Action id |
|---|---|---|---|
| Update Bundle | PUT | `/links/bundle/{{id}}` | `conn_mod_def::GK5vM2C_w4A::kt72WKQQQP6w1kNos-6GlA` |

### LinkFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain's Link Folders | GET | `/links/folders/{{domainId}}` | `conn_mod_def::GK5vNxHYzTA::1w_s8IKWQpiykl_opEmG2g` |

This lists 45 of 55 actions. For anything not here, call `search_one_platform_actions` with platform `short-io`. The full catalog is at https://www.withone.ai/knowledge/short-io.

## When a call fails

The error comes from Short.io, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/short-io

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
