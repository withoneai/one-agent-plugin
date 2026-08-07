---
name: mongo-db-atlas-administration
description: MongoDB Atlas Administration is a fully managed cloud database service that enables teams to deploy, monitor, and scale MongoDB clusters with automated backups, security controls, performance tuning, and integrated analytics across AWS, Azure, and Google Cloud. Read and write MongoDB Atlas Administration data through One: clusters, atlassearchindexes, serviceaccounts, streamprocessors, teams, datalakepipelines and more, 467 actions with real parameter documentation. Use whenever the user asks to look something up in MongoDB Atlas Administration, create or update a record there, or build code against the MongoDB Atlas Administration API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: mongo-db-atlas-administration
  generated-from: one-knowledge-base
---

# MongoDB Atlas Administration through One

MongoDB Atlas Administration is a fully managed cloud database service that enables teams to deploy, monitor, and scale MongoDB clusters with automated backups, security controls, performance tuning, and integrated analytics across AWS, Azure, and Google Cloud.

One exposes MongoDB Atlas Administration through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `mongo-db-atlas-administration` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm MongoDB Atlas Administration is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real MongoDB Atlas Administration account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Clusters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Sharded Cluster’s Auto Scaling Configuration | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/autoScalingConfiguration` | `conn_mod_def::GJ4_oSfMYI4::vO62K27jRFyztKXtSNoqGA` |
| Get One Cluster in a Project | GET | `/groups/{{groupId}}/clusters/{{clusterName}}` | `conn_mod_def::GJ4_oStMjDI::hBqkAy2JROOolP7iGSEfjQ` |
| List All Authorized Clusters Across All Projects | GET | `/clusters` | `conn_mod_def::GJ4_oS3p_IY::MFLZEGKERGSqL9BuQWVcrw` |
| List All Clusters in a Project | GET | `/groups/{{groupId}}/clusters` | `conn_mod_def::GJ4_oUk28sg::1VLVEbt0QpeaeuHOWTBwqw` |
| Create One Cluster in One Project (Create a Project Cluster) | POST | `/groups/{{groupId}}/clusters` | `conn_mod_def::GJ4_n4PzcQM::jsbqlWWeRIiaOHRt5zfmUQ` |
| Grant a Project Cluster’s MongoDB Employee Access | POST | `/groups/{{groupId}}/clusters/{{clusterName}}:grantMongoDBEmployeeAccess` | `conn_mod_def::GJ4_oBwCaxI::ZneIaiCATLi3NLmZzlKn_w` |
| Pin Feature Compatibility Version for a Cluster in a Project | POST | `/groups/{{groupId}}/clusters/{{clusterName}}:pinFeatureCompatibilityVersion` | `conn_mod_def::GJ4_oHH3gBc::wM205eR-R4qUZ9ymEK_kCQ` |
| Remove a Cluster from a Project | DELETE | `/groups/{{groupId}}/clusters/{{clusterName}}` | `conn_mod_def::GJ4_oAiWCZI::jQv26g-yTe-12uMXuyxCPw` |
| Revoke MongoDB Employee Access for a Project Cluster | POST | `/groups/{{groupId}}/clusters/{{clusterName}}:revokeMongoDBEmployeeAccess` | `conn_mod_def::GJ4_odujJGU::0LNwIn1tTKu3wX93MrHvHg` |
| Test Failover for a Project Cluster (Restart Primaries) | POST | `/groups/{{groupId}}/clusters/{{clusterName}}/restartPrimaries` | `conn_mod_def::GJ4_oiiHMOo::SuDY0X22SEG6fvV_r77i1A` |
| Unpin a Cluster’s Feature Compatibility Version (FCV) in a Project | POST | `/groups/{{groupId}}/clusters/{{clusterName}}:unpinFeatureCompatibilityVersion` | `conn_mod_def::GJ4_ogug9II::scJPK9S4SFSIyPGAOLeRzg` |
| Update a Cluster in a Project | PATCH | `/groups/{{groupId}}/clusters/{{clusterName}}` | `conn_mod_def::GJ4_ouSalXc::d-Au7zzoS_2zvTPiE0PGBA` |

2 more Clusters actions are available through search.

### AtlasSearchIndexes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Atlas Search Index by Name (for a Cluster Collection) | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{databaseName}}/{{collectionName}}/{{indexName}}` | `conn_mod_def::GJ4_k-gB8f4::2XTJ_hrKT8eBxIhaqpnhvA` |
| Get an Atlas Search Index for a Cluster in a Project | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/fts/indexes/{{indexId}}` | `conn_mod_def::GJ4_k7RVVc8::fmiTx_N_RTqQmmpxa2sjIw` |
| List Atlas Search Indexes for a Cluster | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes` | `conn_mod_def::GJ4_kvZ2d9A::dbx_VjVdT02RgWpnVIewgg` |
| List Atlas Search Indexes for a Collection in a Cluster | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/fts/indexes/{{databaseName}}/{{collectionName}}` | `conn_mod_def::GJ4_kvHPAzw::MHMk2OX2SMW02AXXlgV5Qg` |
| List Atlas Search Indexes for a Collection in a Cluster | GET | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{databaseName}}/{{collectionName}}` | `conn_mod_def::GJ4_k-9oYGM::_TuQ73_FR2O07jf7iSPGVw` |
| Create an Atlas Search Index for a Cluster | POST | `/groups/{{groupId}}/clusters/{{clusterName}}/fts/indexes` | `conn_mod_def::GJ4_klBHQOk::HiaPJQpgQlmiEJs42NKMhg` |
| Create an Atlas Search Index for a Cluster | POST | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes` | `conn_mod_def::GJ4_klhc00U::gresxdtESK6JWE498vI2fA` |
| Delete an Atlas Search Index by Name (for a Cluster) | DELETE | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{databaseName}}/{{collectionName}}/{{indexName}}` | `conn_mod_def::GJ4_ku_w_sU::8RinNnZDRC-yZ5f8FCUgoA` |
| Remove an Atlas Search Index from a Cluster | DELETE | `/groups/{{groupId}}/clusters/{{clusterName}}/fts/indexes/{{indexId}}` | `conn_mod_def::GJ4_ku-jtE0::vJ7M_GUaR86Hgl0P4Rbdsw` |
| Remove an Atlas Search Index from a Cluster by ID | DELETE | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{indexId}}` | `conn_mod_def::GJ4_kwon5GA::X5gv_cBrTwqlDSa7bBGCSQ` |
| Update a Cluster’s Atlas Search Index by ID | PATCH | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{indexId}}` | `conn_mod_def::GJ4_lKVmbEE::rSy4XhxvS3q48pfJWELj2Q` |
| Update a Cluster’s Atlas Search Index by Name | PATCH | `/groups/{{groupId}}/clusters/{{clusterName}}/search/indexes/{{databaseName}}/{{collectionName}}/{{indexName}}` | `conn_mod_def::GJ4_lKhPIE0::axVAkW2LRH6LxuUpOIhBMQ` |

1 more AtlasSearchIndexes actions are available through search.

### ServiceAccounts

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Service Account | GET | `/groups/{{groupId}}/serviceAccounts/{{clientId}}` | `conn_mod_def::GJ4_2uYmXzo::1VtKNO6cTcqpCiZxR_ClBA` |
| List a Project’s Service Accounts | GET | `/groups/{{groupId}}/serviceAccounts` | `conn_mod_def::GJ4_2iOHSQg::5_P1KJElT9eIfsox3bYjqg` |
| List an Organization's Service Accounts | GET | `/orgs/{{orgId}}/serviceAccounts` | `conn_mod_def::GJ4_2kx5-Zo::9zcjMWPKTsSoZX4b1Pc1ig` |
| Assign a Service Account to a Project (Invite) | POST | `/groups/{{groupId}}/serviceAccounts/{{clientId}}:invite` | `conn_mod_def::GJ4_19TM8WE::Mq91146HQ8q-EygwveCSzA` |
| Create a Project Service Account | POST | `/groups/{{groupId}}/serviceAccounts` | `conn_mod_def::GJ4_191rMRM::A78OPx5OSb68k1yaUh0_nw` |
| Create an Organization Service Account | POST | `/orgs/{{orgId}}/serviceAccounts` | `conn_mod_def::GJ4_2KTNMbU::h_FY44GSQiOHRvIbkS_Zlw` |
| Delete an Organization’s Service Account | DELETE | `/orgs/{{orgId}}/serviceAccounts/{{clientId}}` | `conn_mod_def::GJ4_2UQhiks::2oQszHy1S8qpPIP_heyHbA` |
| Remove a Project Service Account | DELETE | `/groups/{{groupId}}/serviceAccounts/{{clientId}}` | `conn_mod_def::GJ4_2gagJb0::lj_ijJbuT763r34U9wogug` |
| Update a Project Service Account | PATCH | `/groups/{{groupId}}/serviceAccounts/{{clientId}}` | `conn_mod_def::GJ4_2u-UODc::TGGNm6CHQVyo_Iuu0tV2uw` |

### StreamProcessors

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Stream Processor in a Stream Workspace | GET | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}` | `conn_mod_def::GJ4_3nKn6Tg::oF0Ol20oQsuCMf8wZdEW3w` |
| List Stream Processors in a Stream Workspace | GET | `/groups/{{groupId}}/streams/{{tenantName}}/processors` | `conn_mod_def::GJ4_3deAqzE::ZarlNpWqQJqzA7m_xJY04A` |
| Create a Stream Processor in a Stream Workspace | POST | `/groups/{{groupId}}/streams/{{tenantName}}/processor` | `conn_mod_def::GJ4_24CcYwg::QA62OgARTPeCn1TTYHdl-g` |
| Delete a Stream Processor in a Project Stream Workspace | DELETE | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}` | `conn_mod_def::GJ4_3ERRQWM::fiXlg3p7SqqnBpjTPu_rag` |
| Start a Project Stream Processor (in a Stream Workspace) | POST | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}:start` | `conn_mod_def::GJ4_3zAytdk::tEsnJdZXRLK7MJjMLnqeIA` |
| Start a Stream Processor With Options (in a Stream Workspace) | POST | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}:startWith` | `conn_mod_def::GJ4_30Q8xnM::XeMmZ87CTv-78rdzNdBETA` |
| Stop a Stream Processor in a Stream Workspace | POST | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}:stop` | `conn_mod_def::GJ4_3z4BeUI::_GXR7YPzR4WvDRHqYz2kEA` |
| Update a Project Stream Processor | PATCH | `/groups/{{groupId}}/streams/{{tenantName}}/processor/{{processorName}}` | `conn_mod_def::GJ4_308TO2A::qv9U3S4LTnGbv_XhhggUgg` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team in a Project | GET | `/groups/{{groupId}}/teams/{{teamId}}` | `conn_mod_def::GJ4_4aqevFM::HNDbtHMJQbu7iS9VIjWn7A` |
| List a Project’s Teams | GET | `/groups/{{groupId}}/teams` | `conn_mod_def::GJ4_4Rj8cM0::I9IYE-3TRIuef6u1zXig_w` |
| List an Organization’s Teams | GET | `/orgs/{{orgId}}/teams` | `conn_mod_def::GJ4_4RcJfSA::eD9EENBbRYqlxpaCz6i2mw` |
| Return a Team by Name in an Organization | GET | `/orgs/{{orgId}}/teams/byName/{{teamName}}` | `conn_mod_def::GJ4_4aR-lQU::--kcUnmKTZepLS415szdLQ` |
| Assign an Organization’s MongoDB Cloud Users to a Team (Deprecated) | POST | `/orgs/{{orgId}}/teams/{{teamId}}/users` | `conn_mod_def::GJ4_4Do_Ifg::MZCaqzqUTGW4jlSFT9yonA` |
| Create a Team in an Organization | POST | `/orgs/{{orgId}}/teams` | `conn_mod_def::GJ4_4CeaApU::BY8j8g8SQRaLeSmse3sFMw` |
| Remove a Team from a Project | DELETE | `/groups/{{groupId}}/teams/{{teamId}}` | `conn_mod_def::GJ4_4NzAYuQ::rEcauYHuTkOegrDdLiUHWQ` |
| Remove a Team from an Organization | DELETE | `/orgs/{{orgId}}/teams/{{teamId}}` | `conn_mod_def::GJ4_4NllkxY::kh5DhatNSCKW0xq4aEPsvA` |

### DataLakePipelines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Data Lake Pipeline | GET | `/groups/{{groupId}}/pipelines/{{pipelineName}}` | `conn_mod_def::GJ4_qWnQSM4::cV7Ql1nUQgmw-xqbqfKxag` |
| List a Project's Data Lake Pipelines | GET | `/groups/{{groupId}}/pipelines` | `conn_mod_def::GJ4_qKmrnsg::MaigJIO3Qg6Nb8m4NKKlVQ` |
| Create a Project's Data Lake Pipeline | POST | `/groups/{{groupId}}/pipelines` | `conn_mod_def::GJ4_p80Vkuc::HstLrHU1RuKZtT9B66HFRw` |
| Pause a Project's Data Lake Pipeline | POST | `/groups/{{groupId}}/pipelines/{{pipelineName}}/pause` | `conn_mod_def::GJ4_p7Ra4bI::FwvVTMnJRFKpkYvzlLQ53g` |
| Remove a Project’s Data Lake Pipeline | DELETE | `/groups/{{groupId}}/pipelines/{{pipelineName}}` | `conn_mod_def::GJ4_qIwkdlY::PdqC55mQSru8TrRsjg38iw` |
| Resume a Project’s Data Lake Pipeline Ingestion | POST | `/groups/{{groupId}}/pipelines/{{pipelineName}}/resume` | `conn_mod_def::GJ4_qHogkmM::gJdk3T0NTrK7384Z8GLe0A` |
| Update a Project's Data Lake Pipeline | PATCH | `/groups/{{groupId}}/pipelines/{{pipelineName}}` | `conn_mod_def::GJ4_qbZ5H58::QnDo7btER2OfY0PISIitvg` |

### AlertConfigs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Alert Configuration | GET | `/groups/{{groupId}}/alertConfigs/{{alertConfigId}}` | `conn_mod_def::GJ4_jP30zms::2d0FLt2HTRefo37mWaJnEQ` |
| List a Project Alert’s Alert Configurations | GET | `/groups/{{groupId}}/alerts/{{alertId}}/alertConfigs` | `conn_mod_def::GJ4_jLCunXA::L4nFvIPpS3mKVNFkA2YduQ` |
| List a Project’s Alert Configurations | GET | `/groups/{{groupId}}/alertConfigs` | `conn_mod_def::GJ4_jJsBh0I::NqwZysViQVWIit3sHw_7uw` |
| Create an Alert Configuration in a Project | POST | `/groups/{{groupId}}/alertConfigs` | `conn_mod_def::GJ4_i8AJa0o::qz1dnzJ3RRCY6x6YnKTWhQ` |
| Remove One Alert Configuration from One Project | DELETE | `/groups/{{groupId}}/alertConfigs/{{alertConfigId}}` | `conn_mod_def::GJ4_jI_ZMgs::SD1LC9uHRxuJgz7gvaiv3Q` |
| Toggle One Alert Configuration in a Project | PATCH | `/groups/{{groupId}}/alertConfigs/{{alertConfigId}}` | `conn_mod_def::GJ4_kahXVKc::vFXWEtcTRLqlV1zaFzbwnQ` |
| Update One Alert Configuration in One Project | PUT | `/groups/{{groupId}}/alertConfigs/{{alertConfigId}}` | `conn_mod_def::GJ4_jc_zQaE::AqKtuLYYRumaNc0AlMgC3w` |

### FlexClusters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Flex Cluster | GET | `/groups/{{groupId}}/flexClusters/{{name}}` | `conn_mod_def::GJ4_sJlQLQ0::nujQBA4PQNKZ9Gu61BN7_A` |
| List a Project’s Flex Clusters | GET | `/groups/{{groupId}}/flexClusters` | `conn_mod_def::GJ4_sKSrKaI::hpn5cCApSx-A2pdds4-AkA` |
| Create One Flex Cluster in a Project | POST | `/groups/{{groupId}}/flexClusters` | `conn_mod_def::GJ4_r_1EH70::6srL_scQQgCo7S0x50OcCw` |
| Remove a Flex Cluster from a Project | DELETE | `/groups/{{groupId}}/flexClusters/{{name}}` | `conn_mod_def::GJ4_sJby_eI::T9SxOHyzTFuSCmkexhbAUQ` |
| Update a Flex Cluster in a Project | PATCH | `/groups/{{groupId}}/flexClusters/{{name}}` | `conn_mod_def::GJ4_sKDbd-U::eK9OLvR6Qyu5wbj0OFgMsA` |
| Upgrade a Project’s Flex Cluster to a Dedicated Cluster | POST | `/groups/{{groupId}}/flexClusters:tenantUpgrade` | `conn_mod_def::GJ4_sKhwCdg::7Yf5iOnDQdKc8TeBfpFesg` |

### NetworkPeeringContainers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Network Peering Container | GET | `/groups/{{groupId}}/containers/{{containerId}}` | `conn_mod_def::GJ4_wdb72XI::nrWpnkpDQTKI3zEOz9Qpqg` |
| List a Project’s Network Peering Containers for One Cloud Provider | GET | `/groups/{{groupId}}/containers` | `conn_mod_def::GJ4_wbnYp5I::Eyf1qIpnQICQKhN5TOll7A` |
| List All Network Peering Containers in a Project | GET | `/groups/{{groupId}}/containers/all` | `conn_mod_def::GJ4_wbaG0LI::CwU57CsAT7yDsv7JxQcuAA` |
| Create a Project Network Peering Container | POST | `/groups/{{groupId}}/containers` | `conn_mod_def::GJ4_wF8_B8M::PSdUAK6sSbKiePH-jieOcQ` |
| Remove a Project’s Network Peering Container | DELETE | `/groups/{{groupId}}/containers/{{containerId}}` | `conn_mod_def::GJ4_wFipc0E::YX3JsW3RQPCkuglcJt1QKA` |
| Update a Project’s Network Peering Container | PATCH | `/groups/{{groupId}}/containers/{{containerId}}` | `conn_mod_def::GJ4_wo82G70::oMX3BPoeSyGdhdwnWRsOzg` |

### ResourcePolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Organization's Atlas Resource Policy | GET | `/orgs/{{orgId}}/resourcePolicies/{{resourcePolicyId}}` | `conn_mod_def::GJ4_1bHgeu4::SPhN1RCMQfiHuEbyokq_gA` |
| List an Organization’s Atlas Resource Policies | GET | `/orgs/{{orgId}}/resourcePolicies` | `conn_mod_def::GJ4_1NFW_Vk::wrLcBk8yRTe1MdTIjiZflQ` |
| Create an Organization Resource Policy (Atlas) | POST | `/orgs/{{orgId}}/resourcePolicies` | `conn_mod_def::GJ4_1N3K5no::mlthglxHTOa2vtlg4JamOg` |
| Delete an Organization's Atlas Resource Policy | DELETE | `/orgs/{{orgId}}/resourcePolicies/{{resourcePolicyId}}` | `conn_mod_def::GJ4_1M6TwSo::fCRBtyA9Ql-oaNGyGfYzLA` |
| Update an Organization’s Atlas Resource Policy | PATCH | `/orgs/{{orgId}}/resourcePolicies/{{resourcePolicyId}}` | `conn_mod_def::GJ4_1cefjUw::_D34z43hT9eBLLP_hDacTg` |
| Validate an Organization’s Atlas Resource Policy | POST | `/orgs/{{orgId}}/resourcePolicies:validate` | `conn_mod_def::GJ4_1cAO14M::wW-_7X9KQDGtL2niyI5LYA` |

### CustomDbRoles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Custom Database Role | GET | `/groups/{{groupId}}/customDBRoles/roles/{{roleName}}` | `conn_mod_def::GJ4_pUxT6X4::4qgNwhScTfOnt1WuU42ZPQ` |
| List a Project's Custom Database Roles | GET | `/groups/{{groupId}}/customDBRoles/roles` | `conn_mod_def::GJ4_pT1P0Gs::otVaYguXQRmh6e6-Cy66HA` |
| Create a Project Custom Database Role | POST | `/groups/{{groupId}}/customDBRoles/roles` | `conn_mod_def::GJ4_pK2eXFA::t2O2XTvxS6mA28TAxy21Zw` |
| Remove a Custom Role from a Project | DELETE | `/groups/{{groupId}}/customDBRoles/roles/{{roleName}}` | `conn_mod_def::GJ4_pF0LYNk::Yg4JhnOTTsKYCtf6_V3bTA` |
| Update a Custom Role in a Project | PATCH | `/groups/{{groupId}}/customDBRoles/roles/{{roleName}}` | `conn_mod_def::GJ4_pVJKozU::iM7I4oDlRm2wy_8H7TXiMw` |

### DataFederation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Federated Database Instance in a Project | GET | `/groups/{{groupId}}/dataFederation/{{tenantName}}` | `conn_mod_def::GJ4_puDQxcM::SiIDkrvzRJuS8Nt_0MNxig` |
| List a Project’s Federated Database Instances | GET | `/groups/{{groupId}}/dataFederation` | `conn_mod_def::GJ4_pualK7E::VU_YfJStT7i24HAyGoAy_g` |
| Create a Federated Database Instance in a Project | POST | `/groups/{{groupId}}/dataFederation` | `conn_mod_def::GJ4_pj1QVXU::bAbKaLJMSnSWVT-LjonlaQ` |
| Remove a Federated Database Instance from a Project | DELETE | `/groups/{{groupId}}/dataFederation/{{tenantName}}` | `conn_mod_def::GJ4_piRPMVs::dlDNexxFStqLyjqIQiGGMg` |

1 more DataFederation actions are available through search.

This lists 90 of 467 actions. For anything not here, call `search_one_platform_actions` with platform `mongo-db-atlas-administration`. The full catalog is at https://www.withone.ai/knowledge/mongo-db-atlas-administration.

## When a call fails

The error comes from MongoDB Atlas Administration, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/mongo-db-atlas-administration

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
