---
name: ip-info
description: IPinfo is an IP data platform that provides APIs for IP geolocation, ASN, privacy detection, and company intelligence, allowing developers, security teams, and data platforms to enrich IP addresses for personalization, fraud prevention, network analysis, and compliance workflows. Read and write IPinfo data through One: timezone, region, hostname, city, postal, ipaddresses and more, 53 actions with real parameter documentation. Use whenever the user asks to look something up in IPinfo, create or update a record there, or build code against the IPinfo API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ip-info
  generated-from: one-knowledge-base
---

# IPinfo through One

IPinfo is an IP data platform that provides APIs for IP geolocation, ASN, privacy detection, and company intelligence, allowing developers, security teams, and data platforms to enrich IP addresses for personalization, fraud prevention, network analysis, and compliance workflows.

One exposes IPinfo through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ip-info` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm IPinfo is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real IPinfo account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Timezone

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Timezone | GET | `/timezone` | `conn_mod_def::GLtmnwvBMik::cyDihY6vQquGumj8f8SoaA` |
| Timezone for an IP Address | GET | `/{{ip}}/timezone` | `conn_mod_def::GLtmnFn8sQw::1y1XkvvFSMKem6WrEzmMnQ` |

### Region

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Region | GET | `/region` | `conn_mod_def::GLtmnvNr1n0::Ia-IAiKMQ_GZQk0jc2bFlA` |
| Region for an IP | GET | `/{{ip}}/region` | `conn_mod_def::GLtmnFo3QyQ::r8ZEJA2oTiuwYSgTydJehw` |

### Hostname

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Hostname | GET | `/hostname` | `conn_mod_def::GLtmnVUF22E::Pb3tY5IrSzOGjSrAbYpotg` |
| Get Hostname for an IP | GET | `/{{ip}}/hostname` | `conn_mod_def::GLtmm4NDIkc::DeNXDNMPT4WQQVcRdzE_cQ` |

### City

| Action | Method | Path | Action id |
|---|---|---|---|
| Current City | GET | `/city` | `conn_mod_def::GLtmnI8Bg38::QVg0R5pIRNqL61pLtAI1CQ` |
| Get City for an IP Address | GET | `/{{ip}}/city` | `conn_mod_def::GLtmm4M1BNg::DBrI_EbMR1aLhavY7Nfyzw` |

### Postal

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Postal for an IP | GET | `/{{ip}}/postal` | `conn_mod_def::GLtmnFopikI::INvlmRzATtS93jjw1LkBYg` |
| Postal | GET | `/postal` | `conn_mod_def::GLtmnYUHTwo::LhOY3Q2PRZeqfGetI5H5og` |

### IpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Map IP Addresses | POST | `/tools/map` | `conn_mod_def::GLtml9ir0_E::j3V9frgJRy-91dyN6dqKQw` |
| Summarize IP Addresses | POST | `/tools/summarize-ips` | `conn_mod_def::GLtmmICCIO8::0YQmp5LJThKG6gInq0C_Kw` |

### WhoisInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WHOIS Information by IP Address or Range | GET | `/whois/net/{{whoisip}}` | `conn_mod_def::GLtmocQS5fY::Gnwhfe-oSwm8tD3B36xqrw` |
| Get WHOIS Information by Organization ID | GET | `/whois/org/{{whoisorgid}}` | `conn_mod_def::GLtmodYbE4M::SwU4gKxaRSudh3xvS1yQqg` |

### PlusField

| Action | Method | Path | Action id |
|---|---|---|---|
| Field Using Plus | GET | `/plus/{{ip}}/{{field}}` | `conn_mod_def::GLtmmdR0GiI::t8jYOwxMTcijygpNCKGzrg` |
| Get a Specific Plus Field for the Current IP | GET | `/plus/me/{{field}}` | `conn_mod_def::GLtmmdqbY8g::Rec1g4R2RKeDRk5A4hfeUg` |

### LiteInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Lite Information | GET | `/lite/me` | `conn_mod_def::GLtmmSiLyus::CE1iXoooS0mzevJG1_B_vA` |
| Get Lite Information by IP | GET | `/lite/{{ip}}` | `conn_mod_def::GLtmmUCkBwk::KvJ5hD7DSnqqNMEbnX8aDw` |

### Location

| Action | Method | Path | Action id |
|---|---|---|---|
| Current Location | GET | `/loc` | `conn_mod_def::GLtmnmNCMy0::NIkK32I9TP2uGC5J7w5kzA` |
| Get Location for an IP | GET | `/{{ip}}/loc` | `conn_mod_def::GLtmmsClQ6M::JBI1HuYdScKSeM_aKDwt9A` |

### Organization

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Organization | GET | `/org` | `conn_mod_def::GLtmnLkRXwY::Idj_roz-TpCSs0PYwwAsUQ` |
| Get Organization for an IP Address | GET | `/{{ip}}/org` | `conn_mod_def::GLtmm4MrqrQ::Jj23c9zQT7CU2-Lqflyhxw` |

### WhoisNetInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WHOIS Net Information by ASN | GET | `/whois/net/AS{{asn}}` | `conn_mod_def::GLtmnwu-JYw::2tq32UsrROOwvDxEvYNqvw` |

### WhoisNet

| Action | Method | Path | Action id |
|---|---|---|---|
| Net Lookup Using Whois | GET | `/whois/net/{{whoisnetid}}` | `conn_mod_def::GLtmoTQFfts::XJyxrInjRFambbNOLHkeig` |

### CurrentCoreInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Core Information | GET | `/lookup/me` | `conn_mod_def::GLtmmICkBUk::5_ChatBjS3eOt0hUT5Y0fA` |

### Whois

| Action | Method | Path | Action id |
|---|---|---|---|
| Net Whois Using Whois | GET | `/whois/net/{{domain}}` | `conn_mod_def::GLtmnyNtatg::Mh9Nqx7dTwa8H9fsRU_CWA` |

### Me

| Action | Method | Path | Action id |
|---|---|---|---|
| Me | GET | `/me` | `conn_mod_def::GLtml9JEZ0M::Q8-F-x5MSuuY8u81IyngxQ` |

### CurrentIp

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current IP | GET | `/ip` | `conn_mod_def::GLtmnVUU1EQ::OEYsfxLtToSvG22QqeTtWw` |

### CurrentIpCoreField

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Current IP Core Field | GET | `/lookup/me/{{field}}` | `conn_mod_def::GLtmmJbGoi8::aC4MGGhfRW2Df6PazIjvvw` |

### PrivacyExtended

| Action | Method | Path | Action id |
|---|---|---|---|
| Privacy Extended by IP | GET | `/{{ip}}/privacy_extended` | `conn_mod_def::GLtmmsC3Zy4::2Khm6QJuTE6eFNIfQOo4FQ` |

### WhoisInformationByPointOfContact

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WHOIS Information by Point of Contact | GET | `/whois/poc/{{whoispoc}}` | `conn_mod_def::GLtmoegCsCY::lLMFUcgjSLaXGWSBXKugTQ` |

### PlusMeUsingPlus

| Action | Method | Path | Action id |
|---|---|---|---|
| Plus Me Using Plus | GET | `/plus/me` | `conn_mod_def::GLtmmei6PYM::CfmL4fAETIK1tkv4FGSUiA` |

### Ip

| Action | Method | Path | Action id |
|---|---|---|---|
| IP Using IP | GET | `/{{ip}}/ip` | `conn_mod_def::GLtmm8c2Leg::5D-2q31jT3y-hd3e0pgPuQ` |

### LiteIpField

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Lite IP Field by IP | GET | `/lite/{{ip}}/{{field}}` | `conn_mod_def::GLtmmS6tMIg::bWYTvElYTP--lfOSedpMWw` |

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Place Information by IP | GET | `/places/{{ip}}` | `conn_mod_def::GLtmmhibHyw::nhmFze2vSuywlfT7GEroxA` |

### CompanyInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Company Information for an IP Address | GET | `/{{ip}}/company` | `conn_mod_def::GLtmlzBMeMM::0fG1TflRQz6TpRYOUHdfAg` |

### AbuseContactInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Abuse Contact Information for an IP | GET | `/{{ip}}/abuse` | `conn_mod_def::GLtmlzxXBak::DwskwS7YQein4e-uzMu-tw` |

### AsnInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get ASN Information | GET | `/AS{{asn}}` | `conn_mod_def::GLtmlx5Hdmc::TQpU_ykxQk2fZag18q3Ygw` |

### Carrier

| Action | Method | Path | Action id |
|---|---|---|---|
| Carrier Detection for an IP Address | GET | `/{{ip}}/carrier` | `conn_mod_def::GLtmlzxQzwg::p8s7pZURRt6ZhWoFfsQ9EA` |

### MaxInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Max Information by IP | GET | `/max/{{ip}}` | `conn_mod_def::GLtmmUDoRTc::aVgNtV76SfWoKz8NDjl3yA` |

### IpInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Information by IP | GET | `/{{ip}}` | `conn_mod_def::GLtml9iiIcE::xAmrf5EDRYOwUZUIsvzy8g` |

### PlusInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Plus Information by IP | GET | `/plus/{{ip}}` | `conn_mod_def::GLtmmejLidE::ocE9BtniQvqsnFl2vgiBNw` |

### CurrentIpInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current IP Information | GET | `/` | `conn_mod_def::GLtml-p0Tzc::z_v4ZYE6T6qTDPDohbQZ1Q` |

### IpCoreInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Lookup IP Core Information | GET | `/lookup/{{ip}}` | `conn_mod_def::GLtmmI6zJAg::q93v0pDbTnGzXYLERYsXaw` |

### ResidentialProxyDetection

| Action | Method | Path | Action id |
|---|---|---|---|
| Residential Proxy Detection for an IP | GET | `/{{ip}}/resproxy` | `conn_mod_def::GLtmmtiqtRk::jor5-FsSR4aV0Glvu0COew` |

### DomainRanges

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Domain Ranges | GET | `/ranges/{{domain}}` | `conn_mod_def::GLtmmqKDGOs::l-0SRPHSSEmVXi8GESxn1Q` |

### PrivacyInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Privacy Information by IP | GET | `/{{ip}}/privacy` | `conn_mod_def::GLtmmqimo5Y::hmp2dSmdR6ejvuFVo05dfg` |

### CurrentCountry

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current Country | GET | `/country` | `conn_mod_def::GLtmnW0Mxl0::0jajK9NaS7mkk_vsZ7hxfg` |

### IpinfoBatchEnrichment

| Action | Method | Path | Action id |
|---|---|---|---|
| Bulk IPinfo API Enrichment | POST | `/batch` | `conn_mod_def::GLtml9iw5IA::UvXsvSv0TyumLhByhJngow` |

### LiteField

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Lite Field for the Current IP | GET | `/lite/me/{{field}}` | `conn_mod_def::GLtmmUCT0m4::UhV6r1xwR9iNc3Yqlyky-w` |

### HostedDomains

| Action | Method | Path | Action id |
|---|---|---|---|
| List Hosted Domains for an IP Address | GET | `/domains/{{ip}}` | `conn_mod_def::GLtmlzxcJbM::o0Df_sr6T_qqc1gMxRFsOw` |

### Country

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Country for an IP | GET | `/{{ip}}/country` | `conn_mod_def::GLtmm4NRHB4::1CkCXqewTv2rzllcafStcw` |

### CoreIpField

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Core IP Field by IP | GET | `/lookup/{{ip}}/{{field}}` | `conn_mod_def::GLtmmIBwkRM::-2Uq0BQPQ9Os_MFW9oOHtg` |

## When a call fails

The error comes from IPinfo, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ip-info

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
