---
name: click-house
description: ClickHouse is an ultra-fast, column-oriented database designed for real-time analytics at scale, enabling teams to query massive datasets with high performance and low latency. Read and write ClickHouse data through One: services, clickpipes, clickstackalerts, clickpipesreverseprivateendpoints, clickstackdashboards, organizations and more, 74 actions with real parameter documentation. Use whenever the user asks to look something up in ClickHouse, create or update a record there, or build code against the ClickHouse API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: click-house
  generated-from: one-knowledge-base
---

# ClickHouse through One

ClickHouse is an ultra-fast, column-oriented database designed for real-time analytics at scale, enabling teams to query massive datasets with high performance and low latency.

One exposes ClickHouse through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `click-house` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ClickHouse is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ClickHouse account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Services

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s Backup Configuration | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupConfiguration` | `conn_mod_def::GJ1MkfkgRY8::y26OXOt9TgOSsGMt8SJKuw` |
| Get a Service’s Prometheus Metrics | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/prometheus` | `conn_mod_def::GJ1MrBoYkSQ::Qsz4nxxMTiaBpw0bN3O1hA` |
| Get an Organization’s Service Details | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}` | `conn_mod_def::GJ1Mr3mNZ1k::8IxPus77QVi4zslp6Fw03A` |
| List an Organization’s Services | GET | `/v1/organizations/{{organizationId}}/services` | `conn_mod_def::GJ1MsHVYd2M::Vp6iIOVmQxqd30PjAtHVoA` |
| Create a Service in an Organization | POST | `/v1/organizations/{{organizationId}}/services` | `conn_mod_def::GJ1MrUMc-IA::CZOmZxe4SSi3YllqvYgT5Q` |
| Delete an Organization’s Service | DELETE | `/organizations/{{organizationId}}/services/{{serviceId}}` | `conn_mod_def::GJ1MrbQbA60::nVn1u23STZeZGwcm2IHKGA` |
| Update a Service’s Auto-Scaling Settings (Organization) | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/scaling` | `conn_mod_def::GJ1MsQhtEME::zH8HDgf1TkCfWunuMJU7TA` |
| Update a Service’s Backup Configuration | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupConfiguration` | `conn_mod_def::GJ1Mk5841o0::NUJlfgzjRjmHqo9HtxGrZw` |
| Update a Service’s State (Start/Stop) in an Organization | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/state` | `conn_mod_def::GJ1Msz_glgo::qANOJ5uGQgS0X6p_pJrLBw` |
| Update an Organization Service’s Basic Details | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}` | `conn_mod_def::GJ1MsjCCHi4::h5sbpzDFSZORjrl0ggsGeg` |

### ClickPipes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s ClickPipe | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}` | `conn_mod_def::GJ1Ml7VQ2ZU::RVgA0WfaTWWeB1fIFhzZ5A` |
| List a Service’s ClickPipes (Beta) | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes` | `conn_mod_def::GJ1MmSIDE9Q::7yBGs7V6R0e168um-lYEsw` |
| Delete a Service’s ClickPipe | DELETE | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}` | `conn_mod_def::GJ1MlhVPAsY::KSuQdemzRPupDrxRJk1sMg` |
| Update a ClickPipe's Scaling Settings | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}/scaling` | `conn_mod_def::GJ1MmzQfZMA::MKUl41LiSGKa5orhgK9FzA` |
| Update a ClickPipe’s State (Start/Stop/Resync) | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}/state` | `conn_mod_def::GJ1MnIidzig::sW52pfWmQ8m3uhHknzOcRw` |
| Update a Service’s ClickPipe | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}` | `conn_mod_def::GJ1MmrOa5j4::2EXz6IPxRDWyarDQQAmwoA` |

### ClickStackAlerts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a ClickStack Alert | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/alerts/{{clickStackAlertId}}` | `conn_mod_def::GJ1Mn2_BahE::OmU4bFlxSPyj2ETUoooqBw` |
| List a ClickStack Service's Alerts | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/alerts` | `conn_mod_def::GJ1MoLeOXpY::a3iuLqhqR32JJP556Bcs1Q` |
| ClickStack: Create an Alert for a Service | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/alerts` | `conn_mod_def::GJ1MnRGtDA8::1DHldyVZQqueVm6v92aOeg` |
| Delete a ClickStack Alert for a Service | DELETE | `/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/alerts/{{clickStackAlertId}}` | `conn_mod_def::GJ1MnknbgQc::Qc-46Te6TB2DjJF39rFydg` |
| Update a ClickStack Alert for a Service | PUT | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/alerts/{{clickStackAlertId}}` | `conn_mod_def::GJ1MoyEaY50::h6gbVKzsQH2r19KcTBAxHA` |

### ClickpipesReversePrivateEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s Reverse Private Endpoint | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesReversePrivateEndpoints/{{reversePrivateEndpointId}}` | `conn_mod_def::GJ1MmKkMsPY::oefd-2MUToqPoxCF_agxLQ` |
| List a Service’s Reverse Private Endpoints | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesReversePrivateEndpoints` | `conn_mod_def::GJ1MmbDCtNc::r5QG87H4Qh67jx1uLB11WA` |
| Create a Reverse Private Endpoint for a Service | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesReversePrivateEndpoints` | `conn_mod_def::GJ1MlYpNmNQ::zAcHaXqGQu-Xaj3wKoE0rA` |
| Delete a Service’s Reverse Private Endpoint (Beta) | DELETE | `/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesReversePrivateEndpoints/{{reversePrivateEndpointId}}` | `conn_mod_def::GJ1MlpyyOLw::-8VclKwBTRCnLDdPL-T-AA` |

### ClickStackDashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a ClickStack Dashboard | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/dashboards/{{clickStackDashboardId}}` | `conn_mod_def::GJ1MoAZVoZw::iHKChIMFTey1UbjG6PI2gg` |
| Create a ClickStack Dashboard for a Service | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/dashboards` | `conn_mod_def::GJ1Mna_twys::XZri1kxVSj-OUmC8OE7S6g` |
| Delete a ClickStack Dashboard for a Service in an Organization | DELETE | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/dashboards/{{clickStackDashboardId}}` | `conn_mod_def::GJ1MnstdxdA::U1uKnnVeRbaCrCuTVgR5dg` |
| Update a ClickStack Dashboard (Beta) | PUT | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/dashboards/{{clickStackDashboardId}}` | `conn_mod_def::GJ1Mo6j-Nxc::Gfinv32ETqWx4xwW82_vkg` |

### Organizations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization’s Details | GET | `/v1/organizations/{{organizationId}}` | `conn_mod_def::GJ1Mp9Pr7NQ::8wB6QfmDRA23UstM9gti0w` |
| Get an Organization’s Prometheus Metrics | GET | `/organizations/{{organizationId}}/prometheus` | `conn_mod_def::GJ1Mq6CaESI::D92u8G3TSG2Bo5nFNKnUyw` |
| List Organizations (Available to the API Key) | GET | `/v1/organizations` | `conn_mod_def::GJ1Mp1mJyvY::QAJPzkjtT8ulasBOKxbjmw` |
| Update an Organization’s Details | PATCH | `/organizations/{{organizationId}}` | `conn_mod_def::GJ1MqyqgruY::Q8r8LRyeTZuJgA5LUUQndQ` |

### OrganizationInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Invitation’s Details | GET | `/v1/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GJ1MtRrtv0o::7O7npdSQTnmSVPAAPSgaDw` |
| List an Organization's Invitations | GET | `/v1/organizations/{{organizationId}}/invitations` | `conn_mod_def::GJ1MtgXEUVM::QEoyEMDNTACSZL3ezBmxTQ` |
| Create an Organization Invitation | POST | `/v1/organizations/{{organizationId}}/invitations` | `conn_mod_def::GJ1MtDGqLZ8::mZ-u9uXyQqiH98KwcCYrAg` |
| Delete an Organization Invitation | DELETE | `/v1/organizations/{{organizationId}}/invitations/{{invitationId}}` | `conn_mod_def::GJ1MtKcmNt8::gZklB1u_QRCW7MHg7oKpCQ` |

### OrganizationMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Member’s Details | GET | `/v1/organizations/{{organizationId}}/members/{{userId}}` | `conn_mod_def::GJ1MtZKe5aI::byXWtiIOQ0WPsR73TnCSbQ` |
| List an Organization’s Members | GET | `/organizations/{{organizationId}}/members` | `conn_mod_def::GJ1MtnZZsMw::R7fb-ZgXQh-FnesvNezu8w` |
| Remove an Organization Member | DELETE | `/v1/organizations/{{organizationId}}/members/{{userId}}` | `conn_mod_def::GJ1Mtt-SLNk::bS1ilgUHRdGkeYhnliKmhg` |
| Update an Organization Member | PATCH | `/v1/organizations/{{organizationId}}/members/{{userId}}` | `conn_mod_def::GJ1Mt1RbnyY::mQRYY2DlR4meZfo7VnFLLQ` |

### OrganizationApiKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization API Key’s Details | GET | `/organizations/{{organizationId}}/keys/{{keyId}}` | `conn_mod_def::GJ1MpTHM828::p5A2hrnRTriL6Lu9vBsY3Q` |
| List an Organization's API Keys | GET | `/v1/organizations/{{organizationId}}/keys` | `conn_mod_def::GJ1Mpah1no0::tQGSB-WZT5ysan--0eqp3A` |
| Delete an Organization API Key | DELETE | `/v1/organizations/{{organizationId}}/keys/{{keyId}}` | `conn_mod_def::GJ1MpLsF3L8::QLk9RvYZRQaECiDkCFayug` |

### ByocInfrastructure

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization’s BYOC Infrastructure | POST | `/organizations/{{organizationId}}/byocInfrastructure` | `conn_mod_def::GJ1Mpr1dXZM::Wf4XALyVR_2EA8yF2DefeA` |
| Remove an Organization’s BYOC Infrastructure | DELETE | `/v1/organizations/{{organizationId}}/byocInfrastructure/{{byocInfrastructureId}}` | `conn_mod_def::GJ1MqhVApF8::6-TRt5mvRTCD78SHwKh_-g` |
| Update an Organization's BYOC Infrastructure | PATCH | `/organizations/{{organizationId}}/byocInfrastructure/{{byocInfrastructureId}}` | `conn_mod_def::GJ1Mqpc4VWc::lm-A_o8mRVG-2vLTEpKt7g` |

### ServiceQueryEndpoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s Query Endpoint Configuration | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/serviceQueryEndpoint` | `conn_mod_def::GJ1Mr_izgio::8buSILCLQz6yhuroUfVJMQ` |
| Delete a Service’s Query Endpoint (Organization + Service) | DELETE | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/serviceQueryEndpoint` | `conn_mod_def::GJ1Mro1y3Sk::S_K3rISQRwyqqPKkJs-UnA` |
| Upsert a Service Query Endpoint for a Service | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/serviceQueryEndpoint` | `conn_mod_def::GJ1Ms8Cjye0::B4TyiTK1TCOFsDyLOJOBgg` |

### BackupBuckets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s Backup Bucket | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupBucket` | `conn_mod_def::GJ1MkX7b5wM::o4orB09WTh-R_7UB9CuX8Q` |
| Create a Service Backup Bucket | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupBucket` | `conn_mod_def::GJ1MkApWMBM::UPdBsVA3TrSEjMxCu-Tn_g` |

### BackupBucket

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Service's Backup Bucket | DELETE | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupBucket` | `conn_mod_def::GJ1MkIL6fLM::LcMBQDuwTieViI0PKl5hlg` |
| Update a Service’s Backup Bucket | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backupBucket` | `conn_mod_def::GJ1MkwkeqQE::rZKSGvCDTPGkKrewNHCaJw` |

### ClickpipesCdcScaling

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s CDC ClickPipes Scaling Settings | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesCdcScaling` | `conn_mod_def::GJ1Mlx5Py6E::-RVw2569Roq7JXgzWJJ8rA` |
| Update a Service’s CDC ClickPipes Scaling | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipesCdcScaling` | `conn_mod_def::GJ1MmitCTUM::KTFLESOWRaiuMU0yp92wwA` |

### ClickPipeSettings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a ClickPipe’s Advanced Settings | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}/settings` | `conn_mod_def::GJ1MmCywUF4::G8x3cSArSeKNEn1Tu--9KQ` |
| Update a Service’s ClickPipe Settings | PUT | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes/{{clickPipeId}}/settings` | `conn_mod_def::GJ1Mm_Jvllo::nbYLWFFkQgGBkmUJb6ZBkg` |

### OrganizationKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Create an Organization API Key | POST | `/v1/organizations/{{organizationId}}/keys` | `conn_mod_def::GJ1MpD9gxkM::lP9EBxLoRF-TjIb06KKfyQ` |
| Update an Organization API Key | PATCH | `/organizations/{{organizationId}}/keys/{{keyId}}` | `conn_mod_def::GJ1Mpho9hyY::XMz4gvIiTxioQdq121_ncQ` |

### PrivateEndpointConfig

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service’s Private Endpoint Configuration (Organization) | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/privateEndpointConfig` | `conn_mod_def::GJ1MrwaaMJI::W0kMKmoPRPiz62klCCEIQg` |
| Get an Organization’s Private Endpoint Configuration (Deprecated) | GET | `/v1/organizations/{{organizationId}}/privateEndpointConfig` | `conn_mod_def::GJ1MqHwjMXU::5S_hxTZQQUSgr05mzWd8SQ` |

### OrganizationActivities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization Activity | GET | `/v1/organizations/{{organizationId}}/activities/{{activityId}}` | `conn_mod_def::GJ1MqXSaPuQ::myDzs0HmSDSGkPZTAbnlXg` |
| List an Organization’s Activities | GET | `/organizations/{{organizationId}}/activities` | `conn_mod_def::GJ1MqPHcSLI::CRhWqCIYTMSDNBNse9r3qw` |

### ServiceBackups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Service Backup’s Details (Organization) | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backups/{{backupId}}` | `conn_mod_def::GJ1MkPtQCIM::6PrYE8JPQtiQz2RNoxEGMw` |

### Backups

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Service’s Backups | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/backups` | `conn_mod_def::GJ1Mko0V8HM::8pbvRWToRaqNhyoUrdeOLw` |

### UsageCosts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Usage Costs | GET | `/organizations/{{organizationId}}/usageCost` | `conn_mod_def::GJ1MlC7xHiI::hND3tGWeRC2pWwChfWoiKQ` |

### Clickpipes

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Service’s ClickPipe | POST | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickpipes` | `conn_mod_def::GJ1MlMmUyrk::yZ5GDsK1TyyyybmHnx9yiA` |

### ClickstackDashboards

| Action | Method | Path | Action id |
|---|---|---|---|
| List a ClickStack Service’s Dashboards | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/dashboards` | `conn_mod_def::GJ1MoTPpRSI::o6rKazdxSrWtUBgkR4kGAQ` |

### ClickStackSources

| Action | Method | Path | Action id |
|---|---|---|---|
| List a ClickStack Service’s Sources | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/sources` | `conn_mod_def::GJ1ModY1Mwk::EA8TDb5IRN-XNBXGo7xKaA` |

### ClickStackWebhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List a ClickStack Service’s Webhooks | GET | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/clickstack/webhooks` | `conn_mod_def::GJ1MopyVosc::bPjLYQ68ReqA0dVUiVdtNg` |

### PrivateEndpoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Service Private Endpoint (Organization) | POST | `/organizations/{{organizationId}}/services/{{serviceId}}/privateEndpoint` | `conn_mod_def::GJ1MrMK_hGg::9obMjjbvQQ-dPsE-7LBURA` |

### ReplicaScaling

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Service’s Replica Auto-Scaling Settings | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/replicaScaling` | `conn_mod_def::GJ1Msaz3JuI::nE0QvLTKSDaclZrFkhWmNw` |

### ServicePasswords

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Service Password (Organization) | PATCH | `/v1/organizations/{{organizationId}}/services/{{serviceId}}/password` | `conn_mod_def::GJ1MssKjIUM::eXG3CQ-oRTG6tfVa2AvLAQ` |

## When a call fails

The error comes from ClickHouse, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/click-house

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
