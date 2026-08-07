---
name: monday
description: Monday is a work management platform that provides customizable boards, workflows, and automation for planning, tracking, and collaborating on projects and operational processes, allowing teams to manage tasks, integrate business tools, and coordinate work across departments through its APIs. Read and write Monday data through One: items, boards, updates, teams, users, columns and more, 253 actions with real parameter documentation. Use whenever the user asks to look something up in Monday, create or update a record there, or build code against the Monday API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: monday
  generated-from: one-knowledge-base
---

# Monday through One

Monday is a work management platform that provides customizable boards, workflows, and automation for planning, tracking, and collaborating on projects and operational processes, allowing teams to manage tasks, integrate business tools, and coordinate work across departments through its APIs.

One exposes Monday through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `monday` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Monday is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Monday account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Items

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive Item | POST | `/v2` | `conn_mod_def::GLcFtbeEsrg::5-rIgFAnTz-Ii4GnsXZJCw` |
| Change Column Value | POST | `/v2` | `conn_mod_def::GLcFtzoNRhg::17csOuWFT4KxFMlrTDeOtQ` |
| Change Item Position | POST | `/v2` | `conn_mod_def::GLcFtz07jyA::_6yvIRdGQaaHwsvfgSAb5w` |
| Change Multiple Column Values on an Item | POST | `/v2` | `conn_mod_def::GLcFtznmFtg::oessUHHVQh2SGI9QrAwapg` |
| Change Simple Column Value Using monday v2 | POST | `/v2` | `conn_mod_def::GLcFuAUXTRg::mQucLeu-SjaDeY-MApxNxA` |
| Clear Item Updates | POST | `/v2` | `conn_mod_def::GLcFt7lKDug::tdqiwyBZT62q-shQpVxOFQ` |
| Create Item | POST | `/v2` | `conn_mod_def::GLcFuwBGf-A::8M1-LrLXQvO7G9_uTlb8Vg` |
| Delete Item | POST | `/v2` | `conn_mod_def::GLcFwPpKMzg::9KIsjFJ-S3Wf3_f9AfaUEQ` |
| Duplicate Item | POST | `/v2` | `conn_mod_def::GLcFxLPvaMg::hCuoAEEmQPiBoaEm2oT9WQ` |
| Get the Next Page of Items | POST | `/v2` | `conn_mod_def::GLcF2BO_ZlA::l97kvGAOQB-9ZUM5uIVpVA` |
| List Items | POST | `/v2` | `conn_mod_def::GLcF1srRWFA::AE1-zXeMSXO5hIXZqDZO6Q` |
| Move Item to Board | POST | `/v2` | `conn_mod_def::GLcFxkoC8fg::qS4NsIBtRCCh2McyfZJtFg` |

3 more Items actions are available through search.

### Boards

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Subscribers to a Board | POST | `/v2` | `conn_mod_def::GLcFtDQPPrg::BdAii9S6RyqNDb6v8TpJnA` |
| Add Teams to Board | POST | `/v2` | `conn_mod_def::GLcFtJuElNA::ZmMRUIPtT3i692SjLU9vkw` |
| Add Users to a Board | POST | `/v2` | `conn_mod_def::GLcFtS9WGoA::3hn3qRcFTTOkWkZcEBrTEQ` |
| Archive Board | POST | `/v2` | `conn_mod_def::GLcFtSOnyvg::Sg8R1khdTtCxpJMnWW-d2g` |
| Archive Group in a Board | POST | `/v2` | `conn_mod_def::GLcFtbncdcg::DjwD8NyCSn-7cPtDJ3ttqg` |
| Convert Board to Project | POST | `/v2` | `conn_mod_def::GLcFuHpsEyg::63vZjxLARy-GdKue8ymx4w` |
| Create Board | POST | `/v2` | `conn_mod_def::GLcFuNAlcsg::HMNrZOZ9Qmi1ZC5eBEqdWA` |
| Delete Board | POST | `/v2` | `conn_mod_def::GLcFv44Zw1A::F45ViXUBQPKzw7GRcZf86w` |
| Duplicate Board | POST | `/v2` | `conn_mod_def::GLcFxCRYaBg::CbpmZrQLRRGsPCRUMtOZbQ` |
| List Boards | POST | `/v2` | `conn_mod_def::GLcF1CuQNEg::eiBbZU1RRV-mefOsnuWnSg` |
| Remove Subscribers From a Board | POST | `/v2` | `conn_mod_def::GLcFwm2idHA::GP1yJgxAShOSetH0Ng5KrQ` |
| Set Board Permission | POST | `/v2` | `conn_mod_def::GLcFx_p6GKg::5lnHGsbJTxqUlhsRi9BTxA` |

2 more Boards actions are available through search.

### Updates

| Action | Method | Path | Action id |
|---|---|---|---|
| Add File to Update | POST | `/v2` | `conn_mod_def::GLcFtEkswzg::rebvisKtSH2eqVv55kFMgA` |
| Create Update | POST | `/v2` | `conn_mod_def::GLcFvPYItcg::8atKYqQdQ92RMQicdhCEWQ` |
| Delete Update | POST | `/v2` | `conn_mod_def::GLcFwvAE7xA::hXDRRXVJQtyLVqVTEvN4hA` |
| Edit Update | POST | `/v2` | `conn_mod_def::GLcFxaI04Fg::MAx1QuIrQfa1qYddMgx_Sw` |
| Like Update | POST | `/v2` | `conn_mod_def::GLcFxjFRs7A::KauF2BgxR8iego1TGYrwmA` |
| Pin to Top Update | POST | `/v2` | `conn_mod_def::GLcFxtdfPRg::Sm6T81BwS7m2qZp1RdCWPw` |
| Query Updates | POST | `/v2` | `conn_mod_def::GLcF25Fdrkg::DlSEGRs0SHSOLnbyrVpDCg` |
| Unlike Update | POST | `/v2` | `conn_mod_def::GLcFyJuV-kA::BahFprhPQbWKQ8LAr8FhIw` |
| Unpin Update From Top | POST | `/v2` | `conn_mod_def::GLcFyHt-0Dg::jfL8eqoTThykUFhJKYEhAw` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Users to Team | POST | `/v2` | `conn_mod_def::GLcFtRA2LXA::I9rPny9yQP6BVkmwIVDDvA` |
| Assign Team Owners | POST | `/v2` | `conn_mod_def::GLcFtp5iz1g::95r1TADqTiSuqdagT-5VFA` |
| Create Team | POST | `/v2` | `conn_mod_def::GLcFvPXCLxg::lmc2duDnSHeBUrONM9azFQ` |
| Delete Team | POST | `/v2` | `conn_mod_def::GLcFwh6AeXg::ko_3m1W3Tb2NO76hn6IT7A` |
| Delete Teams from a Board | POST | `/v2` | `conn_mod_def::GLcFwjtyoXg::P8OGcDXPQKaMUxzsBfZefg` |
| Delete Teams from a Workspace | POST | `/v2` | `conn_mod_def::GLcFwiZkjhg::d2LfGE_tTdy16BYBRchAOA` |
| List Teams | POST | `/v2` | `conn_mod_def::GLcF2opSEOA::sjf_0iLwTmGi3hM9RYU06A` |
| Remove Team Owners | POST | `/v2` | `conn_mod_def::GLcFx_p4QAA::4LY0cpmdRY2JyXkVK_WLgQ` |
| Remove Users From Team | POST | `/v2` | `conn_mod_def::GLcFx_pX7pA::QTvYl1TYQDyeaoYzQX8cNg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate Users | POST | `/v2` | `conn_mod_def::GLcFs5_ouzg::5FCK7dxySme3Un7l28KHZw` |
| Clear Users Department | POST | `/v2` | `conn_mod_def::GLcFt7QmQyg::AXMr8KG8Sge1Te5PHTppRg` |
| Deactivate Users | POST | `/v2` | `conn_mod_def::GLcFvxbNJOA::cWa1_LHLQeu0VMuB85Lzsg` |
| Delete Users From a Workspace | POST | `/v2` | `conn_mod_def::GLcFw6skOUA::EkevVhrgS-Sy5P5XQLttxQ` |
| Invite Users | POST | `/v2` | `conn_mod_def::GLcFxhltALA::avlRugGVSVuL3osOuhzClQ` |
| List Users | POST | `/v2` | `conn_mod_def::GLcF24zdqFA::z7KrERWOTDOEJqbZ2SOJoA` |
| Update Multiple Users | POST | `/v2` | `conn_mod_def::GLcFzHrMTEg::YOo_v5_LSPGrGiU218eB1A` |
| Update Users Role | POST | `/v2` | `conn_mod_def::GLcFzRI93Bg::PBelsWplSy-d8JAtDBayUA` |

### Columns

| Action | Method | Path | Action id |
|---|---|---|---|
| Attach Dropdown Managed Column | POST | `/v2` | `conn_mod_def::GLcFto9WJhg::Yd_wWd0KR_q94Rk4SwNuWA` |
| Attach Status Managed Column | POST | `/v2` | `conn_mod_def::GLcFto9Woxg::dQQgDJKQTKGbUfLVT8tyHQ` |
| Change Column Metadata | POST | `/v2` | `conn_mod_def::GLcFtzu3thA::bCqsl7wsQ7ef9wi-e58xDw` |
| Change Column Title | POST | `/v2` | `conn_mod_def::GLcFtzoG1ag::MQJE_LRgS3KNnOqAhFoy3A` |
| Create Column | POST | `/v2` | `conn_mod_def::GLcFuf4qBcA::1KWxHh6GSLmJ6rG5kLt0uA` |
| Create Dropdown Column | POST | `/v2` | `conn_mod_def::GLcFunR9AfA::nuAP62EVSiSVzGveln3UBA` |
| Delete Column | POST | `/v2` | `conn_mod_def::GLcFvxar8OA::hshDN8G6QLmqgrETiACH6g` |
| Update Column Using v2 | POST | `/v2` | `conn_mod_def::GLcFye3B_8A::KGQOIBt6Tye30-wZ3rkslA` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate Form | POST | `/v2` | `conn_mod_def::GLcFs60pzDg::RjNzGatnRWqBuk4dOitLPw` |
| Create Form | POST | `/v2` | `conn_mod_def::GLcFuu_fX1A::RvyWiTJ6SpmUskO9zAhpYg` |
| Deactivate Form | POST | `/v2` | `conn_mod_def::GLcFvXysg5g::XWGCwamgQzeEHhl130bsKQ` |
| Delete Question from a Form | POST | `/v2` | `conn_mod_def::GLcFwanVpzg::fx1pgcRlTlSSQ72MeVE0zA` |
| Query a Form | POST | `/v2` | `conn_mod_def::GLcF1d3Te_A::BPJFgZ9xQ-e9u7Z6LFvpBQ` |
| Set Form Password Using v2 | POST | `/v2` | `conn_mod_def::GLcFx_kKolg::qcWk8qLPRMytH89xA2hk5w` |
| Update Form | POST | `/v2` | `conn_mod_def::GLcFzAsj_kA::1n2N-lsES_O3FOnjDXXtbQ` |

### Objects

| Action | Method | Path | Action id |
|---|---|---|---|
| Archive Object | POST | `/v2` | `conn_mod_def::GLcFtgfNNCA::XSrUTfVtThiRJzqDb0iUUw` |
| Create Object | POST | `/v2` | `conn_mod_def::GLcFu5gUGjA::5ksfyzi2RZSBrGzQZpuHgg` |
| Delete Object | POST | `/v2` | `conn_mod_def::GLcFwanqnmg::ygzxsSn_Q--mNkAY4vF07g` |
| List Objects | POST | `/v2` | `conn_mod_def::GLcF2J18_xA::9wHTvnSVRKSehpE2fdpTww` |
| Publish Object | POST | `/v2` | `conn_mod_def::GLcFxtoco7A::TvQGWd8sRQe88hb9yim0TQ` |
| Update Object | POST | `/v2` | `conn_mod_def::GLcFzH5Rmqg::7sHrv3EZR227lwgGtnE9Aw` |

### ManagedColumns

| Action | Method | Path | Action id |
|---|---|---|---|
| Activate Managed Column | POST | `/v2` | `conn_mod_def::GLcFs6SXLAA::0zOEeEmbS6ivZqGtf59C4w` |
| Create Dropdown Managed Column | POST | `/v2` | `conn_mod_def::GLcFun5sxRA::1y9f3BR8TpOowR_12xGuLQ` |
| Create Status Managed Column | POST | `/v2` | `conn_mod_def::GLcFvB6RyjA::3I41_tZcRG20Je1-lkfGOw` |
| Deactivate Managed Column | POST | `/v2` | `conn_mod_def::GLcFvXyamag::8dEe30mNTKiaU3_kCthMaQ` |
| Update Dropdown Managed Column | POST | `/v2` | `conn_mod_def::GLcFy3SutHg::3S2WCW4URmmu8DBYJzb3sw` |

### Workspaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Users to Workspace | POST | `/v2` | `conn_mod_def::GLcFtSTIG5A::dTBK7wfUSoKXWZLTXJY0WA` |
| Create Workspace | POST | `/v2` | `conn_mod_def::GLcFveQJXCg::7twdE3g0QBuVcvaSm21qqQ` |
| Delete Workspace | POST | `/v2` | `conn_mod_def::GLcFxC1un9A::enMcDClVTrmwW0NVbQOLKg` |
| List Workspaces | POST | `/v2` | `conn_mod_def::GLcF3C2mDtA::3ZY8wRuqQ2G3ATrq9QEYBw` |
| Update Workspace | POST | `/v2` | `conn_mod_def::GLcFzlw39zA::AGf9JFCKSniWGe6i_sSXSw` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Content to a Document from Markdown | POST | `/v2` | `conn_mod_def::GLcFs6eFXsg::FfDujKKwSRaCM7hGP77jgw` |
| Delete a Document | POST | `/v2` | `conn_mod_def::GLcFwFMUQug::RIP-V3ZmRK2hthlOW4yL_w` |
| Duplicate Document | POST | `/v2` | `conn_mod_def::GLcFxCnyiNA::az3A2ma_TreZdjsUly03xg` |
| Import Doc From Html | POST | `/v2` | `conn_mod_def::GLcFxXeMGZg::pT_IpahHSOKDizM28Y7nhA` |

### Departments

| Action | Method | Path | Action id |
|---|---|---|---|
| Assign Department Owner | POST | `/v2` | `conn_mod_def::GLcFtd6ojMA::dBSGX9k-QfmR9WgYrsARhw` |
| Create Department | POST | `/v2` | `conn_mod_def::GLcFuf4kh4A::QqBVG3_MSvSItb9_7kAUgg` |
| Delete Department | POST | `/v2` | `conn_mod_def::GLcFwFMhw_A::LoeJxLFDTkunv50KHLF0oQ` |
| Update Department | POST | `/v2` | `conn_mod_def::GLcFymP50tA::gK9kHmHXQyinH2rO66EFoQ` |

### Articles

| Action | Method | Path | Action id |
|---|---|---|---|
| Articles | POST | `/v2` | `conn_mod_def::GLcF0hja4Eg::bSMQatMmSaSH0ZpX9DIV3w` |

3 more Articles actions are available through search.

This lists 90 of 253 actions. For anything not here, call `search_one_platform_actions` with platform `monday`. The full catalog is at https://www.withone.ai/knowledge/monday.

## When a call fails

The error comes from Monday, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/monday

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
