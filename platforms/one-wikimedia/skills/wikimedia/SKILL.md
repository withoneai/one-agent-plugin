---
name: wikimedia
description: Wikimedia is a global nonprofit organization that hosts and supports free knowledge platforms like Wikipedia, offering collaborative, open-content resources maintained by a worldwide community of volunteers. Read and write Wikimedia data through One: transform, lists, wikitextlint, listentries, recommendationarticlecreationtranslation, userlists and more, 40 actions with real parameter documentation. Use whenever the user asks to look something up in Wikimedia, create or update a record there, or build code against the Wikimedia API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: wikimedia
  generated-from: one-knowledge-base
---

# Wikimedia through One

Wikimedia is a global nonprofit organization that hosts and supports free knowledge platforms like Wikipedia, offering collaborative, open-content resources maintained by a worldwide community of volunteers.

One exposes Wikimedia through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `wikimedia` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Wikimedia is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Wikimedia account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Transform

| Action | Method | Path | Action id |
|---|---|---|---|
| Transform a Page Revision’s HTML to Wikitext | POST | `/api/rest_v1/transform/html/to/wikitext/{{title}}/{{revision}}` | `conn_mod_def::GJ8UqqTAXaw::WZzDG9C1QOq8H8Fs6Evt9g` |
| Transform a Page’s HTML to Wikitext | POST | `/transform/html/to/wikitext/{{title}}` | `conn_mod_def::GJ8UqoqVlK0::aptVebUCQCq62gaXF-zXIA` |
| Transform HTML to Wikitext | POST | `/transform/html/to/wikitext` | `conn_mod_def::GJ8UqhXfMDM::CLZQ8o2bQFe6ssvvF9quBQ` |
| Transform Wikitext to HTML | POST | `/transform/wikitext/to/html` | `conn_mod_def::GJ8UqpUg1uM::AXeJVkhLQv6R8ePo0dTnyQ` |
| Transform Wikitext to HTML for a Page Title | POST | `/api/rest_v1/transform/wikitext/to/html/{{title}}` | `conn_mod_def::GJ8UqqAED0Y::t3HFhWeiSvehweZCZeTMCw` |
| Transform Wikitext to HTML for a Page Title and Revision | POST | `/api/rest_v1/transform/wikitext/to/html/{{title}}/{{revision}}` | `conn_mod_def::GJ8UqpwCF6Y::HEsdjPrCT6WdrodlQoGBtA` |

### Lists

| Action | Method | Path | Action id |
|---|---|---|---|
| List Current User’s Lists That Contain a Page | GET | `/api/rest_v1/data/lists/pages/{{project}}/{{title}}` | `conn_mod_def::GJ8UqR3bMJ4::cs8xIwQQTeyfeb6xJovLtA` |
| List the Current User’s Lists | GET | `/data/lists/` | `conn_mod_def::GJ8UqRjnhD4::ObzS_tpVTkuNp64eWjmx-g` |
| Create a New List for the Current User | POST | `/data/lists/` | `conn_mod_def::GJ8UqKacibQ::GQex75nOTECDlqPFcAoumQ` |
| Create Multiple New Lists (Batch) for the Current User | POST | `/data/lists/batch` | `conn_mod_def::GJ8UqKi_XQ8::Flg1AlYNTtabxE21mrs0LA` |

### WikitextLint

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Page’s Wikitext for Lint Errors | POST | `/api/rest_v1/transform/wikitext/to/lint/{{title}}` | `conn_mod_def::GJ8UqhyzUlI::8tsDoEHWQgGw3stSI0Wbxg` |
| Check Wikitext for Lint Errors | POST | `/transform/wikitext/to/lint` | `conn_mod_def::GJ8Uqg2fwzo::ArZO5cq2Rsepidsyter7og` |
| Check Wikitext for Lint Errors for a Page Title and Revision | POST | `/api/rest_v1/transform/wikitext/to/lint/{{title}}/{{revision}}` | `conn_mod_def::GJ8UqhHJis4::2Bd-zaM9TGG31cFMAeBmAw` |

### ListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| List Entries in a List | GET | `/api/rest_v1/data/lists/{{id}}/entries/` | `conn_mod_def::GJ8UqRhk4Eg::EpGDs2a8TJaSi2IgBSJo9Q` |
| Create Multiple Entries in a List (Batch) | POST | `/api/rest_v1/data/lists/{{id}}/entries/batch` | `conn_mod_def::GJ8UqKn7D64::cruRqLAfRF6E2rG65rIJOQ` |

### RecommendationArticleCreationTranslation

| Action | Method | Path | Action id |
|---|---|---|---|
| Recommend Articles for Translation (Article Creation) | GET | `/api/rest_v1/data/recommendation/article/creation/translation/{{fromLang}}/{{seedArticle}}` | `conn_mod_def::GJ8UqYqXyk0::S2zn2enmRECXk4YOm3gxxg` |
| Recommend Articles for Translation (from a Source Language) | GET | `/api/rest_v1/data/recommendation/article/creation/translation/{{fromLang}}` | `conn_mod_def::GJ8UqYZHQUs::3gDplHG3Rj2oXVoyGRNClQ` |

### UserLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a User List | DELETE | `/api/rest_v1/data/lists/{{id}}` | `conn_mod_def::GJ8UqJzmVGc::SSKZWlhDTE6v-vhEJxaTBw` |
| Update a User List | PUT | `/api/rest_v1/data/lists/{{id}}` | `conn_mod_def::GJ8UqZMfh4s::-ks5xHeaSWmJPSgq0vc0lw` |

### PageLint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Linter Errors for a Page Title | GET | `/api/rest_v1/page/lint/{{title}}` | `conn_mod_def::GJ8UqBR2eMM::14Axf3qdTym0aVruEIyvfQ` |
| Get Linter Errors for a Page Title and Revision | GET | `/api/rest_v1/page/lint/{{title}}/{{revision}}` | `conn_mod_def::GJ8UqDVurQw::ZRgWcDd-S0WFlEErujs4kQ` |

### PageHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Get HTML for a Specific Page Title and Revision | GET | `/api/rest_v1/page/html/{{title}}/{{revision}}` | `conn_mod_def::GJ8Upzulo4I::mqMXh9F7Q_6nGQA-35XRtw` |
| Get Latest HTML for a Page Title | GET | `/api/rest_v1/page/html/{{title}}` | `conn_mod_def::GJ8Up0lP-KM::DMWHrQnzTgmDeCTHMTEyzQ` |

### ReadingLists

| Action | Method | Path | Action id |
|---|---|---|---|
| Opt In to Use Reading Lists (Setup) | POST | `/api/rest_v1/data/lists/setup` | `conn_mod_def::GJ8UqZRSmg4::Opwod6xOTByZXZVj9cKkfg` |
| Opt Out From Using Reading Lists (Teardown All Reading List Data) | POST | `/data/lists/teardown` | `conn_mod_def::GJ8UqZqGpvs::Xlj4NYFDT4ayzc2mqAmdog` |

### PageRevisionMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Revision Metadata for a Page Title | GET | `/api/rest_v1/page/title/{{title}}` | `conn_mod_def::GJ8UqApMLUQ::Bpp01TrgRESa2MTPbxVt7g` |
| Get Revision Metadata for a Page Title (and Revision) | GET | `/api/rest_v1/page/title/{{title}}/{{revision}}` | `conn_mod_def::GJ8UqChfYOM::7eKg70NxQ3y1vxX5lkNWCQ` |

### JavascriptBundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mobile Apps JavaScript Bundle | GET | `/api/rest_v1/data/javascript/mobile/{{type}}` | `conn_mod_def::GJ8UpzFLPzQ::7HY7O3PqRhOAw9yI7mlFqg` |

### ListChanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recent List Changes Since a Date | GET | `/api/rest_v1/data/lists/changes/since/{{date}}` | `conn_mod_def::GJ8UqRcKtiA::2R9gYJXNSVa0HM8K_9ij7A` |

### WikipediaRecommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Recommend Missing Articles Similar to a Seed Article | GET | `/api/rest_v1/data/recommendation/article/creation/morelike/{{seedArticle}}` | `conn_mod_def::GJ8UqhWZY8I::YVhhXKC8RMqUXPX67LuKzg` |

### Page

| Action | Method | Path | Action id |
|---|---|---|---|
| List Page-Related API Entry Points | GET | `/page/` | `conn_mod_def::GJ8UqAxjk0c::nPGGSHeYRxqff9CUnB4eWQ` |

### CitationData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Citation Data for an Article Identifier | GET | `/api/rest_v1/data/citation/{{format}}/{{query}}` | `conn_mod_def::GJ8UpsSJPNk::eoPPYuTFQW-EurPW5kH_0w` |

### MathRender

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Rendered Math Formula by Hash (Deprecated) | GET | `/api/rest_v1/media/math/render/{{format}}/{{hash}}` | `conn_mod_def::GJ8Upsp_rdY::kA8BAPydTROyKX30FIwQpw` |

### MediaMath

| Action | Method | Path | Action id |
|---|---|---|---|
| Check and Normalize a TeX Formula (Deprecated) | POST | `/api/rest_v1/media/math/check/{{type}}` | `conn_mod_def::GJ8UprzxEvE::FzdvYmmtRo27Z1NVJL6Smw` |

### PageSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Page Summary by Title (Wikipedia REST) | GET | `/api/rest_v1/page/summary/{{title}}` | `conn_mod_def::GJ8Up0cIif8::u12xRorzTrG9WnnEVrgFcA` |

### UserListEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a List Entry in a User List | POST | `/api/rest_v1/data/lists/{{id}}/entries/` | `conn_mod_def::GJ8UqKoraeg::91oXwtmKT2qMwsSdDjbEwA` |

### MathFormulas

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Previously-Stored Math Formula by Hash | GET | `/api/rest_v1/media/math/formula/{{hash}}` | `conn_mod_def::GJ8UprkObnw::rN9MvgKZQby8hUkLCm-CPg` |

### ListsEntries

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a List's Entry | DELETE | `/api/rest_v1/data/lists/{{id}}/entries/{{entryId}}` | `conn_mod_def::GJ8UqQYOzbY::V02eru5kRdCfrUQ38qCZRA` |

### MobileAppCssBundles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mobile App CSS Bundle | GET | `/api/rest_v1/data/css/mobile/{{type}}` | `conn_mod_def::GJ8UpsXTYTE::25gSa0GkTgOUz84UK4e35w` |

### I18n

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Internationalization Info (i18n Bundle) | GET | `/api/rest_v1/data/i18n/{{type}}` | `conn_mod_def::GJ8Up6g812Q::RFXxpj0kR0eZTWJNRRP__Q` |

## When a call fails

The error comes from Wikimedia, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/wikimedia

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
