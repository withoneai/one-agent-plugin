---
name: google-compute-engine
description: Google Compute Engine is an infrastructure-as-a-service platform that provides scalable virtual machines, networking, and storage for running workloads in the cloud, enabling developers and IT teams to deploy, manage, and automate applications with fine-grained control over compute resources. Read and write Google Compute Engine data through One: instances, instancegroupmanagers, securitypolicies, firewallpolicies, backendbuckets, disks and more, 977 actions with real parameter documentation. Use whenever the user asks to look something up in Google Compute Engine, create or update a record there, or build code against the Google Compute Engine API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: google-compute-engine
  generated-from: one-knowledge-base
---

# Google Compute Engine through One

Google Compute Engine is an infrastructure-as-a-service platform that provides scalable virtual machines, networking, and storage for running workloads in the cloud, enabling developers and IT teams to deploy, manage, and automate applications with fine-grained control over compute resources.

One exposes Google Compute Engine through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `google-compute-engine` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Google Compute Engine is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Google Compute Engine account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Instances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Zonal VM Instance | GET | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}` | `conn_mod_def::GKohstOAyIA::YjMvCfXLQJyA0ztW8OBV2A` |
| Get an Instance IAM Policy | GET | `/compute/v1/projects/{{project}}/zones/{{zone}}/instances/{{resource}}/getIamPolicy` | `conn_mod_def::GKohs7r1ztQ::Xha_q1IgQjOcAypE_CfEow` |
| Get an Instance's Serial Port Output | GET | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/serialPort` | `conn_mod_def::GKohs8NtAps::zWnnBbQvQWimsgA8ZpeViw` |
| Get Effective Firewalls for a Zonal Compute Instance | GET | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/getEffectiveFirewalls` | `conn_mod_def::GKohst1-dTI::I_NZbZYhS7epogyawl61lA` |
| List a Project's Aggregated Instances | GET | `/projects/{{project}}/aggregated/instances` | `conn_mod_def::GKohsknsQPw::x0WvoTdiTCupkbxEwO-9MQ` |
| List a Zone's Instances in a Project | GET | `/projects/{{project}}/zones/{{zone}}/instances` | `conn_mod_def::GKohtLes2nE::VQPfLySFS5CtOhocUpNSVA` |
| Add a Network Interface to a Zoned Instance | POST | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/addNetworkInterface` | `conn_mod_def::GKohsXDS7CA::TApwSir7R7y8GBStwoA1Sg` |
| Add an Access Config to a Zonal Instance | POST | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/addAccessConfig` | `conn_mod_def::GKohsWJUUN8::_0M2hkApQDWtK4PwhqsB8g` |
| Add Resource Policies to a Zonal Instance | POST | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/addResourcePolicies` | `conn_mod_def::GKohsXccnwU::XsM0KsUHRF-8nYup9ft3Dg` |
| Attach a Disk to a Zonal Instance | POST | `/projects/{{project}}/zones/{{zone}}/instances/{{instance}}/attachDisk` | `conn_mod_def::GKohskUCmbY::uwBjHNjCQ5yRJ86eXc-CSg` |
| Bulk Insert Instances in a Region | POST | `/projects/{{project}}/regions/{{region}}/instances/bulkInsert` | `conn_mod_def::GKoh9tdf7l0::39HTLarOQ_qVImR5i1v3Pg` |
| Bulk Insert Instances in a Zone for a Project | POST | `/projects/{{project}}/zones/{{zone}}/instances/bulkInsert` | `conn_mod_def::GKohskWbr5M::xSYt0CM8QYa7Huvg52NatQ` |

33 more Instances actions are available through search.

### InstanceGroupManagers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Regional Managed Instance Group | GET | `/projects/{{project}}/regions/{{region}}/instanceGroupManagers/{{instanceGroupManager}}` | `conn_mod_def::GKoh8GicGbE::9CPcfhNsTFmsGTVAE2RfYg` |
| Get a Zonal Managed Instance Group | GET | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers/{{instanceGroupManager}}` | `conn_mod_def::GKohrZfpXj4::Tuk06AX3TQG9n7SYFv-lAw` |
| List a Project’s Aggregated Managed Instance Groups | GET | `/projects/{{project}}/aggregated/instanceGroupManagers` | `conn_mod_def::GKohq-SSA_I::3fgpynHERxqTp7Z2rtSPTA` |
| List a Zone's Managed Instance Groups | GET | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers` | `conn_mod_def::GKohrWTSIBE::W6wyfzBJRjWGdfHrEmLg1w` |
| List Errors for a Regional Managed Instance Group | GET | `/projects/{{project}}/regions/{{region}}/instanceGroupManagers/{{instanceGroupManager}}/listErrors` | `conn_mod_def::GKoh8RZGYvs::3L8tGPJOTqaeIAe6pbK3gQ` |
| List Errors for a Zonal Managed Instance Group | GET | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers/{{instanceGroupManager}}/listErrors` | `conn_mod_def::GKohrTd-YIg::rC8loopZSnC6XwHGQTMUHw` |
| Abandon Instances from a Zonal Managed Instance Group | POST | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers/{{instanceGroupManager}}/abandonInstances` | `conn_mod_def::GKohq8JnRoQ::NzTV9DuhQMO3zbwvHd64qA` |
| Apply Updates to Instances in a Regional Managed Instance Group | POST | `/projects/{{project}}/regions/{{region}}/instanceGroupManagers/{{instanceGroupManager}}/applyUpdatesToInstances` | `conn_mod_def::GKoh73vZZtY::p8jJ8Sm8Rq2QjISkk4-NyQ` |
| Apply Updates to Instances in a Zonal Managed Instance Group | POST | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers/{{instanceGroupManager}}/applyUpdatesToInstances` | `conn_mod_def::GKohrIaDsUg::y9p1sP71RAqoC_rxnSvXmw` |
| Create a Regional Managed Instance Group | POST | `/projects/{{project}}/regions/{{region}}/instanceGroupManagers` | `conn_mod_def::GKoh8E-nCi8::MSqcUyK9TiyrA13k6wRYUg` |
| Create a Zonal Managed Instance Group in a Project and Zone | POST | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers` | `conn_mod_def::GKohra8VGSY::KgSTlcTgSWmzR5jzU2qGdA` |
| Create Instances in a Zonal Managed Instance Group | POST | `/projects/{{project}}/zones/{{zone}}/instanceGroupManagers/{{instanceGroupManager}}/createInstances` | `conn_mod_def::GKohrISnUlQ::9vwbhzQ9TP29X9prch0kWw` |

22 more InstanceGroupManagers actions are available through search.

### SecurityPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Regional Security Policy | GET | `/projects/{{project}}/regions/{{region}}/securityPolicies/{{securityPolicy}}` | `conn_mod_def::GKoh_47by-c::aaFCbGxvQZewGUBCTXFf8A` |
| List a Project’s Aggregated Security Policies | GET | `/projects/{{project}}/aggregated/securityPolicies` | `conn_mod_def::GKoiE8O9ZoM::7GNRFpdSTX-Q0sNkCD2sGQ` |
| List a Project's Global Security Policies | GET | `/projects/{{project}}/global/securityPolicies` | `conn_mod_def::GKoiFGR2r94::4lZ5b49-RryxqON484EmQQ` |
| List a Project's Preconfigured Security Policy Expression Sets | GET | `/projects/{{project}}/global/securityPolicies/listPreconfiguredExpressionSets` | `conn_mod_def::GKoiFGlDRAE::sARkFn6rTnyg7goBV17LNg` |
| List a Region's Security Policies | GET | `/projects/{{project}}/regions/{{region}}/securityPolicies` | `conn_mod_def::GKoiAErB4gk::BmjIF5TFQUeyLiRSBS_xxw` |
| List Organization Security Policies | GET | `/compute/v1/locations/global/securityPolicies` | `conn_mod_def::GKoh2KK6bMs::Z9KudvO9QCiWgvKQ-7fi9w` |
| Add a Rule to a Global Security Policy | POST | `/projects/{{project}}/global/securityPolicies/{{securityPolicy}}/addRule` | `conn_mod_def::GKoiE4FSC6g::2SjPqARvR9-Z9FmAEk0hGQ` |
| Add a Rule to a Regional Security Policy | POST | `/projects/{{project}}/regions/{{region}}/securityPolicies/{{securityPolicy}}/addRule` | `conn_mod_def::GKoh_5YY5EE::H2_mitPBTVuLVOG0faKeDw` |
| Add a Rule to an Organization Security Policy | POST | `/locations/global/securityPolicies/{{securityPolicy}}/addRule` | `conn_mod_def::GKoh1wEkVWM::bA8SIXwKTm6MVM8jJNpv0w` |
| Copy Rules to an Organization Security Policy | POST | `/locations/global/securityPolicies/{{securityPolicy}}/copyRules` | `conn_mod_def::GKoh1z2GDGI::7mwQsXzuTzeELo_LvBU8vQ` |
| Create a Global Security Policy in a Project | POST | `/projects/{{project}}/global/securityPolicies` | `conn_mod_def::GKoiFHw5mMc::bZ7DDwe7QyC-sdZMdYjR5A` |
| Create a Regional Security Policy in a Project | POST | `/projects/{{project}}/regions/{{region}}/securityPolicies` | `conn_mod_def::GKoiADMU_1k::df--9wL_SlWoGPDfg8bfzw` |

10 more SecurityPolicies actions are available through search.

### FirewallPolicies

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Firewall Policy IAM Policy | GET | `/locations/global/firewallPolicies/{{resource}}/getIamPolicy` | `conn_mod_def::GKohm0qFV7s::VWNXy5dJR6KMnTPz6_13xQ` |
| Get a Firewall Policy IAM Policy in a Project | GET | `/projects/{{project}}/global/firewallPolicies/{{resource}}/getIamPolicy` | `conn_mod_def::GKohzZU4RTY::T9Q0jk5NQ42u-IuxkFWvGw` |
| Get a Regional Network Firewall Policy | GET | `/projects/{{project}}/regions/{{region}}/firewallPolicies/{{firewallPolicy}}` | `conn_mod_def::GKoh-6L2-2I::nprNTmXnTnaPPHp_NoJmsw` |
| List a Project Region's Network Firewall Policies | GET | `/projects/{{project}}/regions/{{region}}/firewallPolicies` | `conn_mod_def::GKoh_G40Pf8::Yin8ibRdQhONwZ9mU_N1QA` |
| List Global Firewall Policies | GET | `/compute/v1/locations/global/firewallPolicies` | `conn_mod_def::GKohm2un8oU::rQVVCdzmS92oy0Y084YdKQ` |
| Add a Packet Mirroring Rule to a Project's Global Firewall Policy | POST | `/projects/{{project}}/global/firewallPolicies/{{firewallPolicy}}/addPacketMirroringRule` | `conn_mod_def::GKohzLRYf30::ARDYQMwwQtCDt1QQern1UA` |
| Add a Rule to a Global Firewall Policy | POST | `/locations/global/firewallPolicies/{{firewallPolicy}}/addRule` | `conn_mod_def::GKohmrSrVGQ::lDP1k5xmRpyeEnVuSnEHaA` |
| Add a Rule to a Project's Global Firewall Policy | POST | `/projects/{{project}}/global/firewallPolicies/{{firewallPolicy}}/addRule` | `conn_mod_def::GKohzKnIyZM::9CzkbJGRQPu4zntkauw8Ug` |
| Add an Association to a Firewall Policy | POST | `/locations/global/firewallPolicies/{{firewallPolicy}}/addAssociation` | `conn_mod_def::GKohmrlx7vs::J_yVhSQbS8KyxYv8Q826PQ` |
| Clone Rules for a Global Firewall Policy | POST | `/locations/global/firewallPolicies/{{firewallPolicy}}/cloneRules` | `conn_mod_def::GKohmr_PB2U::GcujdJV3R3qRwTqY9l2g5w` |
| Clone Rules for a Global Firewall Policy in a Project | POST | `/projects/{{project}}/global/firewallPolicies/{{firewallPolicy}}/cloneRules` | `conn_mod_def::GKohzXdgpms::tzvxIljCRr-vz9bgjFN-jw` |
| Create a Global Firewall Policy | POST | `/compute/v1/locations/global/firewallPolicies` | `conn_mod_def::GKohm2gzrM8::uQ3NXbIFQDyjkyqUf1EufQ` |

7 more FirewallPolicies actions are available through search.

### BackendBuckets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Backend Bucket's IAM Policy | GET | `/projects/{{project}}/global/backendBuckets/{{resource}}/getIamPolicy` | `conn_mod_def::GKohkNh_o0k::ThbXWVqaScmtorpyx61_Dw` |
| List a Project's Aggregated Backend Buckets | GET | `/projects/{{project}}/aggregated/backendBuckets` | `conn_mod_def::GKohkD_NREU::Cis3iiu4RmKv1vyfSCyg-A` |
| List a Project's Backend Buckets | GET | `/projects/{{project}}/global/backendBuckets` | `conn_mod_def::GKohkN0ton0::Ky7zemrOTXSyZyODmGs8Gw` |
| List a Region's Backend Buckets | GET | `/projects/{{project}}/regions/{{region}}/backendBuckets` | `conn_mod_def::GKoh4aPW8uo::sPG0mqGvRTiCybO9kxV0xA` |
| List Usable Backend Buckets in a Project | GET | `/projects/{{project}}/global/backendBuckets/listUsable` | `conn_mod_def::GKohkO3z7oo::GjAxO2ALQQ-tMTb9IZCtoA` |
| List Usable Region Backend Buckets in a Project Region | GET | `/projects/{{project}}/regions/{{region}}/backendBuckets/listUsable` | `conn_mod_def::GKoh4Z6ukw8::XzT0db8_RhKVs7hNRQHBQw` |
| Add a Signed URL Key to a Backend Bucket | POST | `/projects/{{project}}/global/backendBuckets/{{backendBucket}}/addSignedUrlKey` | `conn_mod_def::GKohj-IuGr0::ik2ApgVzQpmhOertU8qbiA` |
| Create a Backend Bucket in a Project | POST | `/projects/{{project}}/global/backendBuckets` | `conn_mod_def::GKohkOOtwgo::2VWHeajoRbKBF3zyqWJTBw` |
| Create a Regional Backend Bucket | POST | `/projects/{{project}}/regions/{{region}}/backendBuckets` | `conn_mod_def::GKoh4a8-OsM::lQIv4gUCSpOQ8SVUf6YGoQ` |
| Delete a Backend Bucket Signed URL Key | POST | `/projects/{{project}}/global/backendBuckets/{{backendBucket}}/deleteSignedUrlKey` | `conn_mod_def::GKohj9xXuEI::Y5pbErpnTP6fxi2rilBk5Q` |
| Delete a Project's Global Backend Bucket | DELETE | `/projects/{{project}}/global/backendBuckets/{{backendBucket}}` | `conn_mod_def::GKohj9m2iPY::kps3LIGPQ8CQNmpP17MEVw` |
| Delete a Regional Backend Bucket | DELETE | `/compute/v1/projects/{{project}}/regions/{{region}}/backendBuckets/{{backendBucket}}` | `conn_mod_def::GKoh4J_goZg::Gl-78UO6Snab3uSN5a9RcQ` |

6 more BackendBuckets actions are available through search.

### Disks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Zonal Persistent Disk | GET | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}` | `conn_mod_def::GKohlmaFzT4::14FQjf1ySui0PkeJPzA7mA` |
| List a Project's Aggregated Persistent Disks | GET | `/projects/{{project}}/aggregated/disks` | `conn_mod_def::GKohlcJQBa4::d4D0qxrCT3ibip_DzKR_RQ` |
| List a Zone's Persistent Disks | GET | `/projects/{{project}}/zones/{{zone}}/disks` | `conn_mod_def::GKohl4pMVdg::1U2yf9PHTFCJU5yybZ6oaw` |
| Add Resource Policies to a Zonal Disk | POST | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}/addResourcePolicies` | `conn_mod_def::GKohlaEYa60::GPEvHIHAQoiwAK4-OL8O7w` |
| Bulk Create Disks in a Zone | POST | `/projects/{{project}}/zones/{{zone}}/disks/bulkInsert` | `conn_mod_def::GKohlaI2fuM::UP1_0HvVRnWOm9tDF7IvNQ` |
| Bulk Set Labels on Many Disks in a Zone | POST | `/projects/{{project}}/zones/{{zone}}/disks/bulkSetLabels` | `conn_mod_def::GKohlaR1Rsk::0TUYZbsGTdO0oVgHen5xIw` |
| Create a Regional Persistent Disk in a Project Region | POST | `/projects/{{project}}/regions/{{region}}/disks` | `conn_mod_def::GKoh5u76nGw::C4wxWIuuRRWv2Wm7b8fMQw` |
| Create a Zonal Persistent Disk in a Project | POST | `/projects/{{project}}/zones/{{zone}}/disks` | `conn_mod_def::GKohlmJZzrs::IBcAexf0TTK_Rfk62zOgaw` |
| Delete a Zonal Persistent Disk | DELETE | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}` | `conn_mod_def::GKohlmpMkPE::7SKYO5VMS56ZVc0B09zTvQ` |
| Remove Resource Policies From a Zonal Disk | POST | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}/removeResourcePolicies` | `conn_mod_def::GKohlyEfP9I::xqthVv7yRoGmVLJSZ0mmtQ` |
| Resize a Zonal Persistent Disk | POST | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}/resize` | `conn_mod_def::GKohlyWaQbY::obwbgDJdTf-S7zlUKpThuQ` |
| Rotate a Zonal Disk's Customer-Managed Encryption Key | POST | `/projects/{{project}}/zones/{{zone}}/disks/{{disk}}/updateKmsKey` | `conn_mod_def::GKohmStUHc0::6paahrsCR8SLGK40DFc_PQ` |

6 more Disks actions are available through search.

### NetworkEndpointGroups

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Global Network Endpoint Group | GET | `/projects/{{project}}/global/networkEndpointGroups/{{networkEndpointGroup}}` | `conn_mod_def::GKoho18yQUM::UKBor_tFT0yK97v7zmuz_Q` |
| Get a Regional Network Endpoint Group | GET | `/projects/{{project}}/regions/{{region}}/networkEndpointGroups/{{networkEndpointGroup}}` | `conn_mod_def::GKoh-k1GjUg::hvnAaER3TbWoxECItcVi4w` |
| Get a Zonal Network Endpoint Group | GET | `/compute/v1/projects/{{project}}/zones/{{zone}}/networkEndpointGroups/{{networkEndpointGroup}}` | `conn_mod_def::GKohy-nzv1E::6F3KsPTOTp-3Ip9zvMoHwg` |
| List a Project's Aggregated Network Endpoint Groups | GET | `/projects/{{project}}/aggregated/networkEndpointGroups` | `conn_mod_def::GKohywPlqik::pVQTlMKiTZq84G3UwSYcyg` |
| List a Project's Global Network Endpoint Groups | GET | `/projects/{{project}}/global/networkEndpointGroups` | `conn_mod_def::GKoho2FLJJs::WR5JSIXeQ2uyc0gVO_UNzw` |
| List a Region's Network Endpoint Groups | GET | `/projects/{{project}}/regions/{{region}}/networkEndpointGroups` | `conn_mod_def::GKoh-vWsFbM::kFmPnJmBSymmSWTJypr9AQ` |
| List a Zone's Network Endpoint Groups | GET | `/projects/{{project}}/zones/{{zone}}/networkEndpointGroups` | `conn_mod_def::GKohy9mmTX8::uqtQhF5aTme-HnW8PVWi7w` |
| Attach Network Endpoints to a Regional Network Endpoint Group | POST | `/projects/{{project}}/regions/{{region}}/networkEndpointGroups/{{networkEndpointGroup}}/attachNetworkEndpoints` | `conn_mod_def::GKoh-jccljA::yZInW9BHQxK7OqL_RWpL7A` |
| Attach Network Endpoints to a Zonal Network Endpoint Group | POST | `/projects/{{project}}/zones/{{zone}}/networkEndpointGroups/{{networkEndpointGroup}}/attachNetworkEndpoints` | `conn_mod_def::GKohyyGtCBM::p7N5n3tmQay9e93YHH-nfA` |
| Create a Global Network Endpoint Group in a Project | POST | `/projects/{{project}}/global/networkEndpointGroups` | `conn_mod_def::GKohozSAGdo::pAlsLqklQ6-enjJ4UK9Ycg` |
| Create a Regional Network Endpoint Group in a Project | POST | `/projects/{{project}}/regions/{{region}}/networkEndpointGroups` | `conn_mod_def::GKoh-imcbiM::b4s0hAF6SbaMIS8KYvM1kw` |
| Create a Zonal Network Endpoint Group in a Project | POST | `/projects/{{project}}/zones/{{zone}}/networkEndpointGroups` | `conn_mod_def::GKohy9-pJvU::booJ5C-vQrC8jDBmEBHNxQ` |

6 more NetworkEndpointGroups actions are available through search.

### BackendServices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Global Backend Service | GET | `/projects/{{project}}/global/backendServices/{{backendService}}` | `conn_mod_def::GKohkjElyZA::FEc7p7vXS-q4Nuab-VBv9g` |
| Get Effective Security Policies for a Global Backend Service | GET | `/projects/{{project}}/global/backendServices/{{backendService}}/getEffectiveSecurityPolicies` | `conn_mod_def::GKohkjQxzwA::Rui-jrEjTMChBHZLoDqX9w` |
| List a Project’s Aggregated Backend Services | GET | `/projects/{{project}}/aggregated/backendServices` | `conn_mod_def::GKohknL3gNo::sJgU3wxqSi6rtaBgEZaZ9A` |
| List a Project’s Global Backend Services | GET | `/projects/{{project}}/global/backendServices` | `conn_mod_def::GKohk3zlCTg::j9unB3ymSs6E4RVGKJorcA` |
| List a Region's Backend Services | GET | `/projects/{{project}}/regions/{{region}}/backendServices` | `conn_mod_def::GKoh4y4U7R8::rbWesiWYR--lRfxhKUkFZQ` |
| List Usable Backend Services in a Project | GET | `/projects/{{project}}/global/backendServices/listUsable` | `conn_mod_def::GKohkx6VN7Y::47NKuo7zR02kxis5iBURJA` |

11 more BackendServices actions are available through search.

This lists 90 of 977 actions. For anything not here, call `search_one_platform_actions` with platform `google-compute-engine`. The full catalog is at https://www.withone.ai/knowledge/google-compute-engine.

## When a call fails

The error comes from Google Compute Engine, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/google-compute-engine

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
