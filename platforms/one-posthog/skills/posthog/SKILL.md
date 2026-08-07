---
name: posthog
description: PostHog is a product analytics suite that provides session recording, feature flags, A/B testing, and event tracking to help teams build better products through user insights. Read and write PostHog data through One: warehousesavedqueries, batchexports, persons, dashboards, projects, insights and more, 1182 actions with real parameter documentation. Use whenever the user asks to look something up in PostHog, create or update a record there, or build code against the PostHog API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: posthog
  generated-from: one-knowledge-base
---

# PostHog through One

PostHog is a product analytics suite that provides session recording, feature flags, A/B testing, and event tracking to help teams build better products through user insights.

One exposes PostHog through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `posthog` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PostHog is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PostHog account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### WarehouseSavedQueries

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Warehouse Saved Queries | GET | `/api/projects/{{projectId}}/warehouse_saved_queries/` | `conn_mod_def::GJ6H-pvoD-4::hdq8LNvxRKuZU5_KAdrAHA` |
| List an Environment’s Warehouse Saved Queries | GET | `/api/environments/{{environmentId}}/warehouse_saved_queries/` | `conn_mod_def::GJ6H9kjKg4I::-D72J0ZMTGK3bHP3ob2Jyw` |
| Retrieve a Data Warehouse Saved Query’s Recent Run History (Environment Scoped) | GET | `/api/environments/{{environmentId}}/warehouse_saved_queries/{{id}}/run_history/` | `conn_mod_def::GJ6H9sKwNEU::WB4wrPM_TTWWLJnbAJintg` |
| Retrieve a Project Saved Query’s Dependency Counts | GET | `/api/projects/{{projectId}}/warehouse_saved_queries/{{id}}/dependencies/` | `conn_mod_def::GJ6H-b-V2OY::-matJ1uwQYqXepIYcfaNug` |
| Retrieve a Project’s Warehouse Saved Query | GET | `/api/projects/{{projectId}}/warehouse_saved_queries/{{id}}/` | `conn_mod_def::GJ6H-ym1aiQ::ZB3bLu48SUaDNs-qGcn01Q` |
| Retrieve a Project’s Warehouse Saved Query Activity | GET | `/api/projects/{{projectId}}/warehouse_saved_queries/{{id}}/activity/` | `conn_mod_def::GJ6H-TBkCfk::BfNUf3U5RdyIe6cgCyLBPA` |
| Retrieve a Project’s Warehouse Saved Query Run History | GET | `/api/projects/{{projectId}}/warehouse_saved_queries/{{id}}/run_history/` | `conn_mod_def::GJ6H-0w0l98::YTm0ZWoZS1CbIRh0D_d_IA` |
| Retrieve a Saved Query’s Dependency Counts (Environment) | GET | `/api/environments/{{environmentId}}/warehouse_saved_queries/{{id}}/dependencies/` | `conn_mod_def::GJ6H9VwUFuE::HFpKPeftSMywFgExPt5eRw` |
| Retrieve a Warehouse Saved Query (Environment-scoped) | GET | `/api/environments/{{environmentId}}/warehouse_saved_queries/{{id}}/` | `conn_mod_def::GJ6H9vdlEUg::PWxfDFp_Tb-4QbnCbYn4VQ` |
| Retrieve a Warehouse Saved Query’s Activity (Environment-scoped) | GET | `/api/environments/{{environmentId}}/warehouse_saved_queries/{{id}}/activity/` | `conn_mod_def::GJ6H9Vv886Q::zZnmVAmJQOyvOyhbX9wEAA` |
| Cancel a Data Warehouse Saved Query Workflow (Environment) | POST | `/api/environments/{{environmentId}}/warehouse_saved_queries/{{id}}/cancel/` | `conn_mod_def::GJ6H9WC6U-I::OGJfJxzJRh-ufT5rnR4LrQ` |
| Cancel a Project’s Data Warehouse Saved Query Workflow | POST | `/api/projects/{{projectId}}/warehouse_saved_queries/{{id}}/cancel/` | `conn_mod_def::GJ6H-bV7njU::0CkDt8MATNOPmgVYBakVXA` |

20 more WarehouseSavedQueries actions are available through search.

### BatchExports

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Batch Exports | GET | `/api/projects/{{projectId}}/batch_exports/` | `conn_mod_def::GJ6Htna6ga4::qNZkNXhlSuCXIItDrFEmMg` |
| List an Environment’s Batch Exports | GET | `/api/environments/{{environmentId}}/batch_exports/` | `conn_mod_def::GJ6HujvNuPs::_a4ixucDQKSN45cbtbTAiA` |
| List an Organization’s Batch Exports | GET | `/api/organizations/{{organizationId}}/batch_exports/` | `conn_mod_def::GJ6Htc5QNSE::E7EXCMhkRNeixZuwuHK-MA` |
| Retrieve a Batch Export for an Environment | GET | `/api/environments/{{environmentId}}/batch_exports/{{id}}/` | `conn_mod_def::GJ6HuuH4HdI::qNX30_UbSuOku98MYKW5PA` |
| Retrieve a Batch Export for an Organization | GET | `/api/organizations/{{organizationId}}/batch_exports/{{id}}/` | `conn_mod_def::GJ6Ht4TuEog::9nhVjzF5RQ20bL9RvJ3fDA` |
| Retrieve a Project Environment's Batch Export Test | GET | `/api/environments/{{environmentId}}/batch_exports/test/` | `conn_mod_def::GJ6HvGGKavI::YZYip1xfRRitsBRLdtcpRw` |
| Retrieve a Project’s Batch Export | GET | `/api/projects/{{projectId}}/batch_exports/{{id}}/` | `conn_mod_def::GJ6Ht4SN-cY::bMaAjERTSJSqvHFTRefgJA` |
| Retrieve Batch Export Test Results for a Project | GET | `/api/projects/{{projectId}}/batch_exports/test/` | `conn_mod_def::GJ6HuRk4yLs::bNSrgWSXQQWud1XgitEYGA` |
| Create a Batch Export for an Environment | POST | `/api/environments/{{environmentId}}/batch_exports/` | `conn_mod_def::GJ6Hum_KMVU::9_JWVxGwR26535N8VRhIRg` |
| Create a Project Batch Export | POST | `/api/projects/{{projectId}}/batch_exports/` | `conn_mod_def::GJ6HtdbQwpY::f4xIj-GnQGa3UJ7koLGgeg` |
| Create an Organization Batch Export | POST | `/api/organizations/{{organizationId}}/batch_exports/` | `conn_mod_def::GJ6HtUWvgP8::pCKhNBNvTqeEpmGxk0mFgg` |
| Delete a Project's Batch Export | DELETE | `/api/projects/{{projectId}}/batch_exports/{{id}}/` | `conn_mod_def::GJ6Humz2Vpo::YWCSKqy0Tr6eb5gI76JIcw` |

20 more BatchExports actions are available through search.

### Persons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Environment Person’s Properties at a Point in Time | GET | `/api/environments/{{environmentId}}/persons/properties_at_time/` | `conn_mod_def::GJ6IcwbSMS8::p4KStOLyRWmEo64wtzX3sA` |
| List a Project’s Persons | GET | `/api/projects/{{projectId}}/persons/` | `conn_mod_def::GJ6Idlpx808::wSOOiQwYSWWY9IrT8TuDGQ` |
| List Persons in an Environment | GET | `/api/environments/{{environmentId}}/persons/` | `conn_mod_def::GJ6IcmKs5I4::BrgaE3b5Tp6NhZFyGk3biA` |
| Retrieve a Person in an Environment | GET | `/api/environments/{{environmentId}}/persons/{{id}}/` | `conn_mod_def::GJ6IcuT_s5w::YknH4eW0SPOXmZo4bkx94Q` |
| Retrieve a Person’s Activity (Environment Scoped) | GET | `/api/environments/{{environmentId}}/persons/{{id}}/activity/` | `conn_mod_def::GJ6IcDNH2Ow::itnTMz8FTbS_lqTcJnNwjg` |
| Retrieve a Person’s Properties Timeline (by Project) | GET | `/api/projects/{{projectId}}/persons/{{id}}/properties_timeline/` | `conn_mod_def::GJ6Id1poAbs::5O_DJ5xmR2qoX0jhs6ZoUA` |
| Retrieve a Person’s Properties Timeline (Environment Scoped) | GET | `/api/environments/{{environmentId}}/persons/{{id}}/properties_timeline/` | `conn_mod_def::GJ6IcvmdF5g::u6Ekf7aYRyKC-Rhm4TMXdA` |
| Retrieve a Project Person | GET | `/api/projects/{{projectId}}/persons/{{id}}/` | `conn_mod_def::GJ6Id1ABbBI::DeWVTBRHSFqL8SJKmGgSOw` |
| Retrieve a Project Person’s Activity | GET | `/api/projects/{{projectId}}/persons/{{id}}/activity/` | `conn_mod_def::GJ6IdO5EZk8::A2A2uB6sTDmOwlDAfZygbQ` |
| Retrieve a Project Person’s Properties at a Point in Time | GET | `/api/projects/{{projectId}}/persons/properties_at_time/` | `conn_mod_def::GJ6IdmKWQys::oni8CXxKTtmoIuzjiCA6bQ` |
| Retrieve Funnel Correlation for Persons in an Environment | GET | `/api/environments/{{environmentId}}/persons/funnel/correlation/` | `conn_mod_def::GJ6IcmrJQuo::JEfglMCeRMaGYC1LTuyXJg` |
| Retrieve Person Activity for an Environment | GET | `/api/environments/{{environmentId}}/persons/activity/` | `conn_mod_def::GJ6IcAfHL5U::8XUwtrEhThKDSlPSIICGpA` |

18 more Persons actions are available through search.

### Dashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Dashboards | GET | `/api/projects/{{projectId}}/dashboards/` | `conn_mod_def::GJ6HxRLTsEU::7POPcYUgQomtZJxTz4J4KQ` |
| List an Environment’s Dashboards | GET | `/api/environments/{{environmentId}}/dashboards/` | `conn_mod_def::GJ6HyhGACu4::cS0nQ3kWQbyrHD6NMvxnGQ` |
| Retrieve a Dashboard in an Environment | GET | `/api/environments/{{environmentId}}/dashboards/{{id}}/` | `conn_mod_def::GJ6HyrEDKws::oT2lt-_pRNy1CfplVrav5A` |
| Retrieve a Project’s Dashboard | GET | `/api/projects/{{projectId}}/dashboards/{{id}}/` | `conn_mod_def::GJ6Hxm5uN0Y::KUeWW-BGTZuD4vplRtOeIA` |
| Stream a Dashboard’s Metadata and Tiles (SSE) in an Environment | GET | `/api/environments/{{environmentId}}/dashboards/{{id}}/stream_tiles/` | `conn_mod_def::GJ6Hy9jeL-M::7X6zxLHMQ-SPIz7B-qG-gA` |
| Stream a Project Dashboard’s Metadata and Tiles (SSE) | GET | `/api/projects/{{projectId}}/dashboards/{{id}}/stream_tiles/` | `conn_mod_def::GJ6HxyulPJk::IiOlgYwyRoaKoXS6bKvn-g` |
| Create a Dashboard from a Template JSON (Environment) | POST | `/api/environments/{{environmentId}}/dashboards/create_from_template_json/` | `conn_mod_def::GJ6HyVdeVdw::-Zy56sb8SGOcFOIURjlAmw` |
| Create a Project Dashboard | POST | `/api/projects/{{projectId}}/dashboards/` | `conn_mod_def::GJ6HxOHdq-Q::ZdZVAFfESpaPRL_T9-vniA` |
| Create a Project Dashboard from Template JSON | POST | `/api/projects/{{projectId}}/dashboards/create_from_template_json/` | `conn_mod_def::GJ6HxdDGtZA::aeir2IwlQzSXaUn_2PErPQ` |
| Create an Environment Dashboard | POST | `/api/environments/{{environmentId}}/dashboards/` | `conn_mod_def::GJ6HyT2SVrM::Dm6ZbNyESFmT4bf-FOSMnA` |
| Create an Unlisted Dashboard for a Project | POST | `/api/projects/{{projectId}}/dashboards/create_unlisted_dashboard/` | `conn_mod_def::GJ6HxNtjhcE::nzwwBE5bSqqxg1tcSO5z4A` |
| Create an Unlisted Dashboard for an Environment (from Template Tag) | POST | `/api/environments/{{environmentId}}/dashboards/create_unlisted_dashboard/` | `conn_mod_def::GJ6HyVLkpwc::SUvujPATQFyB1HI4mdNKkw` |

14 more Dashboards actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Organization’s Projects | GET | `/api/organizations/{{organizationId}}/projects/` | `conn_mod_def::GJ6H4CgI1TA::Dlxi-WQtQZOOmdUoNGE71g` |
| Retrieve a Project in an Organization | GET | `/api/organizations/{{organizationId}}/projects/{{id}}/` | `conn_mod_def::GJ6H4perHZ0::2zOBUtnLSuC8hx7XfPEUZw` |
| Retrieve a Project’s Activity (by Organization) | GET | `/api/organizations/{{organizationId}}/projects/{{id}}/activity/` | `conn_mod_def::GJ6Hv-sK-1I::it-2wzCcT_OE3Xn9MbmKMQ` |
| Retrieve a Project’s Demo Data Generation Status | GET | `/api/organizations/{{organizationId}}/projects/{{id}}/is_generating_demo_data/` | `conn_mod_def::GJ6H4CnTeqA::J5HFKJ0RStirs7xkr3uCVw` |
| Retrieve a Project’s Domain Connect Check Status | GET | `/api/projects/{{projectId}}/integrations/domain-connect/check/` | `conn_mod_def::GJ6H3X6ALwY::bvAwfjHcSmWIcmOIYEwcIg` |
| Retrieve a Project’s Draft SQL Query | GET | `/api/projects/{{projectId}}/query/draft_sql/` | `conn_mod_def::GJ6IfooNEkY::1Anznn0kRlC6mUicHVGqhw` |
| Retrieve a Project’s File System Log View | GET | `/api/projects/{{projectId}}/file_system/log_view/` | `conn_mod_def::GJ6H2ExyPjc::gNlgFCHCTCiSP1oplOsvtw` |
| Retrieve a Project’s Group Property Values | GET | `/api/projects/{{projectId}}/groups/property_values/` | `conn_mod_def::GJ6H27c0U-8::MJB1W1OnTK62Eey3l-ZEeQ` |
| Add Product Intent for a Project (Partial Update) | PATCH | `/api/organizations/{{organizationId}}/projects/{{id}}/add_product_intent/` | `conn_mod_def::GJ6HwKNGedg::MCiNk5VGSd-ydpoBL-emig` |
| Cancel a Project Query | DELETE | `/api/projects/{{projectId}}/query/{{id}}/` | `conn_mod_def::GJ6IfiWE000::C9HonMG4R0meGECliJ0NCg` |
| Change a Project’s Organization (within an Organization) | POST | `/api/organizations/{{organizationId}}/projects/{{id}}/change_organization/` | `conn_mod_def::GJ6HwVzCgbY::mCuFS1k5QTyYx8C3UL_hNg` |
| Check Auth for Async Query in a Project | POST | `/api/projects/{{projectId}}/query/check_auth_for_async/` | `conn_mod_def::GJ6IfjlV5cw::CHcj8ZkLSsKwWt5AYOQUHQ` |

12 more Projects actions are available through search.

### Insights

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Insights | GET | `/api/projects/{{projectId}}/insights/` | `conn_mod_def::GJ6IQptnVvY::5Q55MmW4SlmY0jQRAWSZ8A` |
| List a Project’s Last Viewed Insights (Current User) | GET | `/api/projects/{{projectId}}/insights/my_last_viewed/` | `conn_mod_def::GJ6IQXU0wXw::WM8k6K7GT52BRWj-zuYLaA` |
| List an Environment’s Insights | GET | `/api/environments/{{environmentId}}/insights/` | `conn_mod_def::GJ6IPTIJ_Q8::5RRwvbTdQQW8AW6Av2iRpQ` |
| List an Environment’s Last Viewed Insights (My Last Viewed) | GET | `/api/environments/{{environmentId}}/insights/my_last_viewed/` | `conn_mod_def::GJ6IPI2DjFA::Pp992GfWQ2qJlxiTFO-pcw` |
| List an Environment’s Trending Insights | GET | `/api/environments/{{environmentId}}/insights/trending/` | `conn_mod_def::GJ6IPq0Tf8I::pj5AOvHQQDaIgPu0MBLHNQ` |
| Retrieve a Project’s Insight | GET | `/api/projects/{{projectId}}/insights/{{id}}/` | `conn_mod_def::GJ6IQXVJ78E::4bNXhfB1RHGUCmJws109Mg` |
| Retrieve an Environment’s Insight | GET | `/api/environments/{{environmentId}}/insights/{{id}}/` | `conn_mod_def::GJ6IPdE-Tss::JBuy_XDrQLGr1VK35Pn5Pw` |
| Retrieve an Insight's Analyze Results (Project Scoped) | GET | `/api/projects/{{projectId}}/insights/{{id}}/analyze/` | `conn_mod_def::GJ6IQGvSSrY::TtVpVJoXQael7AJASusYiw` |
| Retrieve an Insight’s Suggestions (Environment Scoped) | GET | `/api/environments/{{environmentId}}/insights/{{id}}/suggestions/` | `conn_mod_def::GJ6IPjRDhM8::V1WsMLUrQuiaHEGTUEWUAg` |
| Cancel an Insight Run for a Project | POST | `/api/projects/{{projectId}}/insights/cancel/` | `conn_mod_def::GJ6IQEp_QMg::9cytf2mKSSGt-s4NIItmBA` |
| Create a Project Insight | POST | `/api/projects/{{projectId}}/insights/` | `conn_mod_def::GJ6IQOzEioE::WOF_H_cETLyWoDQxKBBibQ` |
| Create an Environment Insight | POST | `/api/environments/{{environmentId}}/insights/` | `conn_mod_def::GJ6IO8ofGEw::47NvEAMRRAKATf2PN87ZZg` |

11 more Insights actions are available through search.

### Environments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Environments (Deprecated) | GET | `/api/projects/{{projectId}}/environments/` | `conn_mod_def::GJ6IGEOqu3c::E1lG8HmBRVifWyqhdDzMxQ` |
| List an Environment’s Group Property Values | GET | `/api/environments/{{environmentId}}/groups/property_values/` | `conn_mod_def::GJ6H0E2KP1M::CV36j_AvRV--rs-P3Q7FtQ` |
| Retrieve a Project Environment (Deprecated) | GET | `/api/projects/{{projectId}}/environments/{{id}}/` | `conn_mod_def::GJ6IGSZ25a8::eaq_u1jkRteej_2lMq6b-w` |
| Retrieve a Project Environment’s Draft SQL Query | GET | `/api/environments/{{environmentId}}/query/draft_sql/` | `conn_mod_def::GJ6IfZsDwX0::10eLbHtBTE-0XW_ZfeNJ4Q` |
| Retrieve a Project Environment’s File System Log View | GET | `/api/environments/{{environmentId}}/file_system/log_view/` | `conn_mod_def::GJ6HzbxWZo4::bxIMfPuHQRa0RhH6CboYoA` |
| Retrieve an Environment’s Activity (Deprecated) | GET | `/api/projects/{{projectId}}/environments/{{id}}/activity/` | `conn_mod_def::GJ6IFoznhto::1seUag-OTcKurKcI309A_g` |
| Retrieve an Environment's Event Ingestion Restrictions (Deprecated) | GET | `/api/projects/{{projectId}}/environments/{{id}}/event_ingestion_restrictions/` | `conn_mod_def::GJ6IGCz3eS4::AqsA6rwPSECqyDLUTM2kLg` |
| Retrieve an Environment's Insights Activity | GET | `/api/environments/{{environmentId}}/insights/activity/` | `conn_mod_def::GJ6IO-Yx95I::99ctGVAQTeKgIcCFl0YwMA` |
| Retrieve an Environment’s Log Attributes | GET | `/api/environments/{{environmentId}}/logs/attributes/` | `conn_mod_def::GJ6IYUD8TgY::DhW482RfQxaM42RSxvWEtg` |
| Retrieve Whether an Environment Is Generating Demo Data (Deprecated; for a Project) | GET | `/api/projects/{{projectId}}/environments/{{id}}/is_generating_demo_data/` | `conn_mod_def::GJ6IGKIbAHQ::IKr6-nC2RIK1VRAT6eqb8g` |
| Add Product Intent to an Environment (Deprecated) | PATCH | `/api/projects/{{projectId}}/environments/{{id}}/add_product_intent/` | `conn_mod_def::GJ6IFlRXzgg::AZ2D3jXtQPe6XFfDJB39Lg` |
| Check Auth for Async Query in an Environment | POST | `/api/environments/{{environmentId}}/query/check_auth_for_async/` | `conn_mod_def::GJ6IfKx6inE::_IMckLUoQuGHD2LBKYRgCA` |

10 more Environments actions are available through search.

### ExternalDataSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's External Data Sources | GET | `/api/projects/{{projectId}}/external_data_sources/` | `conn_mod_def::GJ6H-FEkkns::NcU0Xwj5RLO-dZPDii_-ng` |
| List an Environment’s External Data Sources | GET | `/api/environments/{{environmentId}}/external_data_sources/` | `conn_mod_def::GJ6H89NLDRA::BJiZJcO0SqW6LwFSiV_Srg` |
| Retrieve an Environment’s External Data Source | GET | `/api/environments/{{environmentId}}/external_data_sources/{{id}}/` | `conn_mod_def::GJ6H9MR35aQ::79wLqeIKS6qQf-vLanBczQ` |
| Retrieve an External Data Source for a Project | GET | `/api/projects/{{projectId}}/external_data_sources/{{id}}/` | `conn_mod_def::GJ6H-KVdhmA::_yonUDUZQq-NhmzzWbzwbQ` |
| Create an Environment External Data Source | POST | `/api/environments/{{environmentId}}/external_data_sources/` | `conn_mod_def::GJ6H8o6zUvM::o2TCfF4VT3CSwLBa5ck42Q` |
| Create an External Data Source (Source Prefix) for a Project | POST | `/api/projects/{{projectId}}/external_data_sources/source_prefix/` | `conn_mod_def::GJ6H-THVQYs::86SvZkqmRd24FBktqb754g` |

14 more ExternalDataSources actions are available through search.

This lists 90 of 1182 actions. For anything not here, call `search_one_platform_actions` with platform `posthog`. The full catalog is at https://www.withone.ai/knowledge/posthog.

## When a call fails

The error comes from PostHog, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/posthog

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
