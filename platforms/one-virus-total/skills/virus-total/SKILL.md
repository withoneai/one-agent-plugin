---
name: virus-total
description: VirusTotal is a security analysis platform that aggregates antivirus engines, sandboxing, and threat intelligence to inspect files, URLs, domains, and IP addresses, allowing security teams and developers to detect malicious activity and automate reputation checks through its APIs. Read and write VirusTotal data through One: collections, graphs, files, comments, monitoritems, savedsearches and more, 160 actions with real parameter documentation. Use whenever the user asks to look something up in VirusTotal, create or update a record there, or build code against the VirusTotal API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: virus-total
  generated-from: one-knowledge-base
---

# VirusTotal through One

VirusTotal is a security analysis platform that aggregates antivirus engines, sandboxing, and threat intelligence to inspect files, URLs, domains, and IP addresses, allowing security teams and developers to detect malicious activity and automate reputation checks through its APIs.

One exposes VirusTotal through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `virus-total` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm VirusTotal is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real VirusTotal account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Collections

| Action | Method | Path | Action id |
|---|---|---|---|
| Export Aggregations from a Collection | GET | `/api/v3/collections/{{id}}/aggregations/download/{{format}}` | `conn_mod_def::GLV6uzmmAeg::kIuW3qdaSsS8MJMYpPNvCQ` |
| Export IOCs from a Collection | GET | `/api/v3/collections/{{id}}/download/{{format}}` | `conn_mod_def::GLV6uzUppXA::ycgv-frpRtSkE5PjU7tDpQ` |
| Export IOCs from a Collection Relationship | GET | `/api/v3/collections/{{id}}/{{relationship}}/download/{{format}}` | `conn_mod_def::GLV6uduJ2VA::-cgGJlxpTLaBiUsuXmKqYw` |
| Get a Collection | GET | `/api/v3/collections/{{id}}` | `conn_mod_def::GLV6v07UlOA::tXX8qGVOQ2agotLJcdlqUw` |
| Get Comments on a Collection | GET | `/api/v3/collections/{{id}}/comments` | `conn_mod_def::GLV6vinhxQA::7JfPw-DJSHepQN1jwfO5JA` |
| Get Object Descriptors Related to a Collection | GET | `/api/v3/collections/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV6veyzfgg::tWLbgD2fTuObqzKYpzmAxQ` |
| Get Objects Related to a Collection | GET | `/api/v3/collections/{{id}}/{{relationship}}` | `conn_mod_def::GLV6vwou3cg::Qm0ex9vSSn2yaAzIs3QHWA` |
| Get Subscription Preferences for a Collection | GET | `/api/v3/collections/{{id}}/subscription_preferences` | `conn_mod_def::GLV6wXbBCBA::f6ZWvHCkT-2AIK31LjSsPA` |
| List Collections | GET | `/api/v3/collections` | `conn_mod_def::GLV6u0xSuTA::Op413ziUTeCWpvJNEnRGew` |
| Search IoCs Inside a Collection | GET | `/api/v3/collections/{{id}}/search` | `conn_mod_def::GLV6vTFz8gg::FZJFtpt2SWGfnwxRp0caNQ` |
| Add a Comment to a Collection | POST | `/api/v3/collections/{{id}}/comments` | `conn_mod_def::GLV6vC7Ox7g::Y89ChxGATieN--7cRRSToQ` |
| Add New Items to a Collection | POST | `/api/v3/collections/{{id}}/{{relationship}}` | `conn_mod_def::GLV6vUWlUWg::3p_VQLflRNa93U2Evf-PLQ` |

5 more Collections actions are available through search.

### Graphs

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Editor for a Graph | GET | `/api/v3/graphs/{{id}}/relationships/editors/{{userOrGroupId}}` | `conn_mod_def::GLV6z2C_5Xg::wWi-EwEfQ4SwsIOZmx_NvQ` |
| Check Viewer for a Graph | GET | `/api/v3/graphs/{{id}}/relationships/viewers/{{userOrGroupId}}` | `conn_mod_def::GLV60H_-t4g::L0JQX8tpQ1e71swWAsokIA` |
| Get a Graph Object | GET | `/api/v3/graphs/{{id}}` | `conn_mod_def::GLV60nkDGFA::KGMIogVvTimZ6qZ8_UZn-g` |
| Get Comments on a Graph | GET | `/api/v3/graphs/{{id}}/comments` | `conn_mod_def::GLV60hDhfKg::IDOJfXnsSAmPtxdI-zZmJQ` |
| Get Editors for a Graph | GET | `/api/v3/graphs/{{id}}/relationships/editors` | `conn_mod_def::GLV61N1lkoA::sC3B00L3R2ygwasd6VAoLQ` |
| Get Objects Related to a Graph | GET | `/api/v3/graphs/{{id}}/{{relationship}}` | `conn_mod_def::GLV60gky_sg::dimL3viOQ0iE_qRU1UGRew` |
| Get Related Object Descriptors for a Graph | GET | `/api/v3/graphs/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV60vfsz4A::k0hfhXkEQDOQPDO5q1pDoA` |
| Get Viewers for a Graph | GET | `/api/v3/graphs/{{id}}/relationships/viewers` | `conn_mod_def::GLV61FVh1vA::v0Wl27adRsKAV-zKJBpvAg` |
| Search Graphs | GET | `/api/v3/graphs` | `conn_mod_def::GLV61bhZvfg::GV4TaCZOQIq-c0m94hBY1w` |
| Add a Comment to a Graph | POST | `/api/v3/graphs/{{id}}/comments` | `conn_mod_def::GLV60SbQhwg::LabgMkjRS72OturfUCy5PA` |
| Add Editors to a Graph | POST | `/api/v3/graphs/{{id}}/relationships/editors` | `conn_mod_def::GLV61ReQdOg::QDWL81_4Ra-pc6nEej-LBA` |
| Add Viewers to a Graph | POST | `/api/v3/graphs/{{id}}/relationships/viewers` | `conn_mod_def::GLV61KxhJBA::Lo7s4ptxT5ahe3-htwsYLw` |

5 more Graphs actions are available through search.

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File | GET | `/api/v3/files/{{id}}/download` | `conn_mod_def::GLV6yqnzPOA::qcKcRIRyQT-jOwzRO-Iwpg` |
| Get a File Report | GET | `/api/v3/files/{{id}}` | `conn_mod_def::GLV6y4V_HEg::e9Po4C5vRKikcBpbEZWkeg` |
| Get Behaviour Summary for a File | GET | `/api/v3/files/{{id}}/behaviour_summary` | `conn_mod_def::GLV6zK2pGog::_Uqv9WdXRtCgxuhBRgoEJg` |
| Get Download URL for a File | GET | `/api/v3/files/{{id}}/download_url` | `conn_mod_def::GLV6y4r8M2g::XgcX6KDxTMeFd0WRi5jftg` |
| Get Objects Related to a File | GET | `/api/v3/files/{{id}}/{{relationship}}` | `conn_mod_def::GLV6zm7o_hA::MFDZttnbR_6hxcijHkZdFQ` |
| Get Related Object Descriptors for a File | GET | `/api/v3/files/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV6zjPfHbg::MuYP1PWwTT2hd-3Au7Ei7w` |
| Get Upload URL for Large Files | GET | `/api/v3/files/upload_url` | `conn_mod_def::GLV6y3t090A::qln5flYBTJe1IyoAab2ITg` |
| Get Votes on a File | GET | `/api/v3/files/{{id}}/votes` | `conn_mod_def::GLV6zmiy29g::CCqWtediTJaR1ZbI_JX2iA` |
| Add a Comment to a File | POST | `/api/v3/files/{{id}}/comments` | `conn_mod_def::GLV6yYNw_xg::nAaUlvgPSTCjTeeCJnrPlA` |
| Add a Vote on a File | POST | `/api/v3/files/{{id}}/votes` | `conn_mod_def::GLV6yqiFCsg::5cgRcU9VRDiS7_hD1eRzmQ` |
| Analyse a File | POST | `/api/v3/files/{{id}}/analyse` | `conn_mod_def::GLV60HgMyAg::yQHHVGvWRQiqEdFoTFMyig` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Comment | GET | `/api/v3/comments/{{id}}` | `conn_mod_def::GLV6wufobyg::7Tw_ShJdQY2ewwA1xt0U4A` |
| Get Comments on a File | GET | `/api/v3/files/{{id}}/comments` | `conn_mod_def::GLV6zsJK8JA::0bQv2qdHTcqpoRX6bTzOaQ` |
| Get Comments on a URL | GET | `/api/v3/urls/{{id}}/comments` | `conn_mod_def::GLV67xlqiWA::sF5m5WzzSMmb2H0JJcDJGw` |
| Get Latest Comments | GET | `/api/v3/comments` | `conn_mod_def::GLV6w3tUQbA::aFqBr886RR-h0-h2h8fb2g` |
| Get Object Descriptors Related to a Comment | GET | `/api/v3/comments/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV6w0gOKHA::V_-bADrBQGW8MLT69jHMSw` |
| Get Objects Related to a Comment | GET | `/api/v3/comments/{{id}}/{{relationship}}` | `conn_mod_def::GLV6whF9JzA::6sniLcs_TOqsv2jrs5Iwow` |
| Create a Comment Over a Hash | POST | `/api/v3/monitor_partner/hashes/{{sha256}}/comments` | `conn_mod_def::GLV64aBtfyA::OGPZjWsrQIuRr8o0jUYAtA` |
| Delete a Comment | DELETE | `/api/v3/comments/{{id}}` | `conn_mod_def::GLV6wPdc_Hg::BLXZREIlSwecjDsX98tlWQ` |
| Remove a Comment Detection for a Hash | DELETE | `/api/v3/monitor_partner/comments/{{id}}` | `conn_mod_def::GLV65pjY5Eg::9bs6ICCST8Cmtg1LkWrs-Q` |
| Vote a Comment | POST | `/api/v3/comments/{{id}}/vote` | `conn_mod_def::GLV6v_doQHA::zLIQ5RxcQtOiDapIO1tl6w` |

### MonitorItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Monitor Item File | GET | `/api/v3/monitor/items/{{id}}/download` | `conn_mod_def::GLV63zN-9Gg::pCAmcKKMRAqlJ2HVXRsZVA` |
| Download URL for a Monitor Item | GET | `/api/v3/monitor/items/{{id}}/download_url` | `conn_mod_def::GLV63fzuDoA::uN3mAPMIRUSiKlraklFIlA` |
| Get a Monitor Item | GET | `/api/v3/monitor/items/{{id}}` | `conn_mod_def::GLV64PvyvwA::_Dxjjv0IQO-uN5lnCU4WIQ` |
| Get Owner of a Monitor Item | GET | `/api/v3/monitor/items/{{id}}/owner` | `conn_mod_def::GLV64J19_ZA::RLruFIMRSmqDHOu2pz2fmw` |
| Get Upload URL for Monitor Items | GET | `/api/v3/monitor/items/upload_url` | `conn_mod_def::GLV63ffc7Bg::OnqVqdTKTSyj8EYTbAG-sQ` |
| List Monitor Items | GET | `/api/v3/monitor/items` | `conn_mod_def::GLV63ynsYMA::RPYVNBcETgSi3abGSSAFXw` |
| Configure a Monitor Item | PATCH | `/api/v3/monitor/items/{{id}}/config` | `conn_mod_def::GLV63WvX5-A::glzEkOZHSWa5eXpZyyn1eQ` |
| Delete a VirusTotal Monitor Item | DELETE | `/api/v3/monitor/items/{{id}}` | `conn_mod_def::GLV63z6WMCg::lLN9kxWpTEyIeHJs5xFiZw` |
| Upload a File or Create a New Folder | POST | `/api/v3/monitor/items` | `conn_mod_def::GLV64Zs1oqg::uxhjqDKsQWSmRQlQWK9kpQ` |

### SavedSearches

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Saved Search | GET | `/api/v3/saved_searches/{{id}}` | `conn_mod_def::GLV66nKGkig::zjw6vgJmQMKZ_pK2NfDlpA` |
| Get Object Descriptors Related to a Saved Search | GET | `/api/v3/saved_searches/{{id}}/relationship/{{relationship}}` | `conn_mod_def::GLV67DeObng::NtkMgh-jStWSVyU1ticKEQ` |
| Get Objects Related to a Saved Search | GET | `/api/v3/saved_searches/{{id}}/{{relationship}}` | `conn_mod_def::GLV67I7IzLA::JRvj3AHHRy6sS2e4PnGegQ` |
| List Saved Searches | GET | `/api/v3/saved_searches` | `conn_mod_def::GLV66zXpXqg::7-wVZj6bSQe3mprzBHCu7Q` |
| Create a Saved Search | POST | `/api/v3/saved_searches` | `conn_mod_def::GLV66UVW22A::7ESvft0vQzKrW3Huxd3ZUA` |
| Delete a Saved Search | DELETE | `/api/v3/saved_searches/{{id}}` | `conn_mod_def::GLV66oWaHag::l2l-9SHATvynSfaKiCzDxQ` |
| Revoke Access to a Saved Search | DELETE | `/api/v3/saved_searches/{{id}}/relationship/{{access}}` | `conn_mod_def::GLV67GpKJfA::YG1w1Q-DSt6NT4d1DSt_qQ` |
| Share a Saved Search | POST | `/api/v3/saved_searches/{{id}}/relationship/{{access}}` | `conn_mod_def::GLV67FKFYrg::DHBS5eUOT6qtKs5J0jESuQ` |
| Update a Saved Search | PATCH | `/api/v3/saved_searches/{{id}}` | `conn_mod_def::GLV67dj8nTg::utQUByPVTqSdF3kS09PuKg` |

### Domains

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Domain Report | GET | `/api/v3/domains/{{domain}}` | `conn_mod_def::GLV6xTILy5g::NXorvtQRSfyQRsD6iNHH4g` |
| Get Object Descriptors Related to a Domain | GET | `/api/v3/domains/{{domain}}/relationships/{{relationship}}` | `conn_mod_def::GLV6xVZmLTA::sNB_payRQEWhEHTKbnrHXQ` |
| Get Related Objects for a Domain | GET | `/api/v3/domains/{{domain}}/{{relationship}}` | `conn_mod_def::GLV6xDnX2Qg::tUkFLzV4RlGJ7QABi58ofg` |
| Get Votes for a Domain | GET | `/api/v3/domains/{{domain}}/votes` | `conn_mod_def::GLV6xgcEJog::NF5P2hXWQIaqTHOTJ3k9MQ` |
| Add a Comment to a Domain | POST | `/api/v3/domains/{{domain}}/comments` | `conn_mod_def::GLV6wj1rtGA::0c8-d-GgRG2IXE8e8fA7aw` |
| Add a Vote to a Domain | POST | `/api/v3/domains/{{domain}}/votes` | `conn_mod_def::GLV6xI32MgA::LRgon7piQMicodcJuQf5Yw` |
| Reanalyze a Domain | POST | `/api/v3/domains/{{id}}/analyse` | `conn_mod_def::GLV6xgbknFA::gP4K19pSSMikFQfI-FOi0w` |

### FileBehaviours

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a File Behavior Report from a Sandbox | GET | `/api/v3/file_behaviours/{{sandboxId}}` | `conn_mod_def::GLV6x88xanA::d9UUEXNkRiGbSzlLMRnyMA` |
| Get EVTX File for a File Behaviour Analysis | GET | `/api/v3/file_behaviours/{{sandboxId}}/evtx` | `conn_mod_def::GLV6yOzfIOg::cJHIQL8ZTMC21d9VYQjcsQ` |
| Get Memdump for a File Behaviour Analysis | GET | `/api/v3/file_behaviours/{{sandboxId}}/memdump` | `conn_mod_def::GLV6yr0u5eg::gmou6ELXTXypmWHHFAEniA` |
| Get Object Descriptors Related to a Behaviour Report | GET | `/api/v3/file_behaviours/{{sandboxId}}/relationships/{{relationship}}` | `conn_mod_def::GLV6x97Qqwg::N0wzVwKiR_yye-FPo_H0fg` |
| Get Objects Related to a Behaviour Report | GET | `/api/v3/file_behaviours/{{sandboxId}}/{{relationship}}` | `conn_mod_def::GLV6yHthHMg::9Ih6DOdPTY6Wnksk-y-eLQ` |
| Get PCAP for a File Behavior Analysis | GET | `/api/v3/file_behaviours/{{sandboxId}}/pcap` | `conn_mod_def::GLV6ybPPbXA::q3WADEdWQIiF-wPK-c8p8A` |
| HTML Behaviour Report for a File Behaviour Sandbox | GET | `/api/v3/file_behaviours/{{sandboxId}}/html` | `conn_mod_def::GLV6x-BpfzA::tJZB0_mJRTmGkSC4sF8nrg` |

### Urls

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a URL Report | GET | `/api/v3/urls/{{id}}` | `conn_mod_def::GLV68DNQVrA::06g2OTs9RfuvthMf3JQtww` |
| Get Objects Related to a URL | GET | `/api/v3/urls/{{id}}/{{relationship}}` | `conn_mod_def::GLV68cABykg::T3A4MdBJTaW5Mk5N2dkb9g` |
| Get Related Object Descriptors for a URL | GET | `/api/v3/urls/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV67-Yt1Tg::qfmasK3tQh6-PdvpKdjbMg` |
| Add a Comment on a URL | POST | `/api/v3/urls/{{id}}/comments` | `conn_mod_def::GLV68FQXthg::M6W0jyfTRXCgGDakU0wnpw` |
| Add a Vote on a URL | POST | `/api/v3/urls/{{id}}/votes` | `conn_mod_def::GLV68Cn3NhA::vB-50xRxQXaCEK4K3PGoaA` |
| Analyse a URL | POST | `/api/v3/urls/{{id}}/analyse` | `conn_mod_def::GLV68QFPcjA::ZnzDa5mfTfuW8l-z8s9nfw` |

### Analyses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a URL / File Analysis | GET | `/api/v3/analyses/{{id}}` | `conn_mod_def::GLV6tkT9wyg::aEe6bXrnQPSAlx6rPfdGpw` |
| Get Object Descriptors Related to an Analysis | GET | `/api/v3/analyses/{{id}}/relationships/{{relationship}}` | `conn_mod_def::GLV6tqceEAg::Ji1W4zzORhqS2sIApkjKtA` |
| Get Objects Related to an Analysis | GET | `/api/v3/analyses/{{id}}/{{relationship}}` | `conn_mod_def::GLV6tYiEsXA::UHsBAq7JTiWfsYNq8BxBzA` |
| List Analyses for a File Hash | GET | `/api/v3/monitor_partner/hashes/{{sha256}}/analyses` | `conn_mod_def::GLV641Zxvpg::9rKkk8UMRnm05CutTvsvYw` |

### IpAddresses

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an IP Address Report | GET | `/api/v3/ip_addresses/{{ip}}` | `conn_mod_def::GLV62qjwKbA::q1b7FmqwQhaqLqsrgHdXYg` |
| Get Object Descriptors Related to an IP Address | GET | `/api/v3/ip_addresses/{{ip}}/relationships/{{relationship}}` | `conn_mod_def::GLV62d5us6A::NRyL7gGOSh647et60N4yng` |
| Add a Comment to an IP Address | POST | `/api/v3/ip_addresses/{{ip}}/comments` | `conn_mod_def::GLV62VvcYug::ZEESZ2H_SXaVbn3idSf6HQ` |

1 more IpAddresses actions are available through search.

This lists 90 of 160 actions. For anything not here, call `search_one_platform_actions` with platform `virus-total`. The full catalog is at https://www.withone.ai/knowledge/virus-total.

## When a call fails

The error comes from VirusTotal, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/virus-total

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
