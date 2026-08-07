---
name: alchemy
description: Alchemy is a blockchain developer platform that provides APIs, node infrastructure, SDKs, and monitoring tools for building, scaling, and operating applications on multiple blockchain networks, allowing developers to access onchain data and manage Web3 infrastructure more reliably. Read and write Alchemy data through One: blocktraces, useroperation, traces, tokenbalances, paymastertokenquote, transactionreceipts and more, 1418 actions with real parameter documentation. Use whenever the user asks to look something up in Alchemy, create or update a record there, or build code against the Alchemy API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: alchemy
  generated-from: one-knowledge-base
---

# Alchemy through One

Alchemy is a blockchain developer platform that provides APIs, node infrastructure, SDKs, and monitoring tools for building, scaling, and operating applications on multiple blockchain networks, allowing developers to access onchain data and manage Web3 infrastructure more reliably.

One exposes Alchemy through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `alchemy` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Alchemy is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Alchemy account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### BlockTraces

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Trace Block | POST | `/v2` | `conn_mod_def::GLGBWxUhpYg::Q3iAEfQnSXOxHvdW3mPyEQ` |
| Abstract Mainnet - trace_rawTransaction | POST | `/v2` | `conn_mod_def::GLGBW6LF6AA::sQunEUeKQbCAjDm0ffYvCA` |
| Anime Mainnet - Trace a Raw Transaction | POST | `/v2` | `conn_mod_def::GLGBXdpUh1c::vvcns9p2SLqWUNenaORUHw` |
| ApeChain Mainnet - trace_block | POST | `/v2` | `conn_mod_def::GLGBX5dWKcU::qYYQeVEbQWm-dpaLHjoYTQ` |
| ApeChain Mainnet - trace_rawTransaction | POST | `/v2` | `conn_mod_def::GLGBYDGBQOw::ElK0RzmkQw2Ik74dtxVHyw` |
| Arbitrum Mainnet - trace_block | POST | `/v2` | `conn_mod_def::GLGBYe2EYm4::L8BmBzRQSOCzZiTqMhCFdg` |
| Arbitrum Mainnet - trace_rawTransaction | POST | `/v2` | `conn_mod_def::GLGBYeTAtw8::1D2Ude-nQOKRW7tkvLN3Ug` |
| Astar Mainnet - debug_traceBlockByNumber | POST | `/v2` | `conn_mod_def::GLGBYwrS4is::XffGzwzhQB-qbiyhn3z-NQ` |
| Astar Mainnet - trace_block | POST | `/v2` | `conn_mod_def::GLGBY7kunxU::MaFSEFC9S7mkwYwARxfxQg` |
| Astar Mainnet - trace_rawTransaction | POST | `/v2` | `conn_mod_def::GLGBZIui5X0::geUPczuwT1OP5AO4f97OxQ` |
| Avalanche C-Chain Mainnet - Trace Block | POST | `/v2` | `conn_mod_def::GLGBZhaDNx4::TIKResdYR8W9Zg0YZLeysQ` |
| Avalanche C-Chain Mainnet - Trace Block By Hash | POST | `/v2` | `conn_mod_def::GLGBZRpbFP0::E9anZkpdRFyDdLwHcnhtng` |

60 more BlockTraces actions are available through search.

### UserOperation

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - eth_getUserOperationByHash | POST | `/v2` | `conn_mod_def::GLGBsQSo5ng::EoroA3LFSlK_XVn_7p6gIA` |
| Abstract Mainnet - eth_sendUserOperation | POST | `/v2` | `conn_mod_def::GLGBsZNTGCo::j8ZZI_n3Tt6_yfAlT5fG5g` |
| Anime Mainnet - eth_getUserOperationByHash | POST | `/v2` | `conn_mod_def::GLGBsi7l8BY::y_AignU6RWaj96vEEjMFpw` |
| Anime Mainnet - Send User Operation | POST | `/v2` | `conn_mod_def::GLGBsr4ugNw::VHN4b8jkTUuZrJ_yL8b5pg` |
| ApeChain Mainnet - eth_sendUserOperation | POST | `/v2` | `conn_mod_def::GLGBtF7rGqg::ObVushobSq270zPQsG2SoQ` |
| ApeChain Mainnet - Get User Operation by Hash | POST | `/v2` | `conn_mod_def::GLGBs01AllA::rDb_J71PSOe0PHnlUlebIQ` |
| Arbitrum Mainnet - eth_getUserOperationByHash | POST | `/v2` | `conn_mod_def::GLGBtdL_6wc::tWPnqhhWR1WzGsuOP2qZpg` |
| Arbitrum Mainnet - Send a User Operation | POST | `/v2` | `conn_mod_def::GLGBtxCxYDQ::KqxitbTBQhq5MSU4AZb6uw` |
| Astar Mainnet - eth_getUserOperationByHash | POST | `/v2` | `conn_mod_def::GLGBt8XKyYI::Hw-AqwbjScWgGHIYjShYkQ` |
| Astar Mainnet - eth_sendUserOperation | POST | `/v2` | `conn_mod_def::GLGBuHNc25s::ZaXMIHo7Tie0AVMPcOCYQw` |
| Avalanche C-Chain Mainnet - Get User Operation By Hash | POST | `/v2` | `conn_mod_def::GLGBuco9tI0::Z_CjW_3HSbSxjvfsxsQLeg` |
| Base Mainnet - eth_getUserOperationByHash | POST | `/v2` | `conn_mod_def::GLGBuvNdPZc::rJcztsCPSF-34t4NfC_BWA` |

56 more UserOperation actions are available through search.

### Traces

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Trace Transaction | POST | `/v2` | `conn_mod_def::GLGBW598iUI::n1Ve7-keQ9SCBVYXJUX4ZQ` |
| Abstract Mainnet - trace_filter | POST | `/v2` | `conn_mod_def::GLGBWx6TRYA::nW0RSuDiSLSUmKaKhf1pAA` |
| Anime Mainnet - trace_filter | POST | `/v2` | `conn_mod_def::GLGBXbR2kxA::-bv44ZbzSum7bdqqxicB-A` |
| Anime Mainnet - trace_transaction | POST | `/v2` | `conn_mod_def::GLGBXu35jI8::7hxwKp5ZRJGp7lpi6DngZQ` |
| ApeChain Mainnet - trace_filter | POST | `/v2` | `conn_mod_def::GLGBYESHouQ::wQw8TTAyR86ogqU_PqYfSQ` |
| ApeChain Mainnet - trace_transaction | POST | `/v2` | `conn_mod_def::GLGBYL7-WLw::2eKAqNOdQ0qcYTL64A_uaQ` |
| Astar Mainnet - trace_transaction | POST | `/v2` | `conn_mod_def::GLGBZIHekTI::a7Y7ALVrQs23bxHRPkohnA` |
| Avalanche C-Chain Mainnet - Trace Transaction | POST | `/v2` | `conn_mod_def::GLGBZry07_0::hp4kxfe_SfK98CFWkwcRmw` |
| Base Mainnet - Trace Transaction | POST | `/v2` | `conn_mod_def::GLGBaXNf7n4::DhIbnNvfTiu25QzehrJJaQ` |
| Berachain Mainnet - trace_filter | POST | `/v2` | `conn_mod_def::GLGBatCjwgM::DfkMG0n2TiirRsa35vBmsQ` |
| Berachain Mainnet - trace_transaction | POST | `/v2` | `conn_mod_def::GLGBa1mRP7c::zuVuV5P1RbGaFFxUELnFYQ` |
| Blast Mainnet - Trace Transaction | POST | `/v2` | `conn_mod_def::GLGBbUyj6OY::aEstClKGR9yES4oiawMo6A` |

51 more Traces actions are available through search.

### TokenBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBHa4Ecg8::soC9LvxiRyarbZTTq9ntkQ` |
| Anime Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBHu747u4::A8FhgEtBRT6ZYst5tn83MA` |
| ApeChain Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBIFbRn3Y::4rLa__9lTHqOh_HBUtcr0A` |
| Arbitrum Mainnet - alchemy_getTokenBalances | POST | `/v2` | `conn_mod_def::GLGBIPonf3I::mK8Sp9OWQMeAPjZunMRvug` |
| Astar Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBInL9bFU::n7T_fun4Qum8U38HbAUDIA` |
| Avalanche C-Chain Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBI_QZ8hs::okEvZHt0ToyX5tBeExutfw` |
| Base Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBJSlYMbs::c3Q1jr-vQvKi-qiE3ndwmQ` |
| Berachain Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBJm9lNzk::RhQEXyMPTJ6xUOR49738wA` |
| Blast Mainnet - alchemy_getTokenBalances | POST | `/v2` | `conn_mod_def::GLGBJ6TEIjE::vzT1VmzURJqHvkVt-5-j8Q` |
| Botanix Mainnet - alchemy_getTokenBalances | POST | `/v2` | `conn_mod_def::GLGBKNYhITA::PExwxWrKRfymcSfTm_S2AQ` |
| BSC Mainnet - Get Token Balances | POST | `/v2` | `conn_mod_def::GLGBKXB-qD0::GTNI90Q5QtuhqDVCCp9x2w` |
| Celo Mainnet - alchemy_getTokenBalances | POST | `/v2` | `conn_mod_def::GLGBKo5jIEU::KFJKXnl8TuG6NGWRgzbnMA` |

27 more TokenBalances actions are available through search.

### PaymasterTokenQuote

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBsPmzJCs::pxKs2RPISt6DdMvgzb8Baw` |
| Anime Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBsiofwFM::mrxFiZGsTJSVN3XIz3msLQ` |
| ApeChain Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBs1Yt220::ZD8ef5NOTjSm506aJZXc0g` |
| Arbitrum Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBtehk-qo::VRsBUn67RYOIHoIuWwv1qA` |
| Astar Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBt7bsNdY::WkL8nJvySWiuHcJi8Ldqcg` |
| Avalanche C-Chain Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBuQCmpBI::wUG9CY62SI-_Wjm3Zoc-1A` |
| Base Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBumcIjEk::jTpmrkTCR9KcX2EFUKIqUw` |
| Berachain Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBu5DcqkE::po7AcnKFRf6ozbCn3g3qsw` |
| Blast Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBvXtW9Ls::Nmdxh2eRTXu1FFV9C1iidg` |
| Botanix Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBvq7gwog::AtKM6CPkRKqOVRfM5hrkFA` |
| BSC Mainnet - Request Paymaster Token Quote | POST | `/v2` | `conn_mod_def::GLGBwKX5Hj8::DmLC-p0WQcaBArtFK1xSrQ` |
| Celo Mainnet - alchemy_requestPaymasterTokenQuote | POST | `/v2` | `conn_mod_def::GLGBwhALypw::7KfB2JnQQyuccVnMGkv2rg` |

26 more PaymasterTokenQuote actions are available through search.

### TransactionReceipts

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBHb0euj8::T6zdf24GTnuvT8pvDhWY8A` |
| Anime Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBHuN1lGU::01SW3kQrR_WcmoUmis2s-A` |
| ApeChain Mainnet - Get Transaction Receipts for a Block | POST | `/v2` | `conn_mod_def::GLGBIFjIU_s::f6-JdMnjQue5SPLbMzW4mQ` |
| Arbitrum Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBIfhIm_I::Hi1saYPjR0Gg7BtV544UpQ` |
| Astar Mainnet - alchemy_getTransactionReceipts | POST | `/v2` | `conn_mod_def::GLGBI2HWgZg::WjAL6djYQi2bAroNSYaXfw` |
| Avalanche C-Chain Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBJJyF8lQ::pqTAXppsQySOzatJcqy2vg` |
| Base Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBJeiZ3po::WKS-SCtVT3iOD7NFPEo6zw` |
| Berachain Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBJo01vh8::Hbl4ICCaT1ecyqYdTOYqiw` |
| Blast Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBJ6w7K4o::DqFJraijQMW6cPjn9MCg8Q` |
| Botanix Mainnet - Get Transaction Receipts for a Block | POST | `/v2` | `conn_mod_def::GLGBKOGJSws::zPKLnAfeTuaGHIrvuVnFIg` |
| BSC Mainnet - Get Transaction Receipts | POST | `/v2` | `conn_mod_def::GLGBKgGbfDU::OZvO0viRR6mQf5UwXJB-Vg` |
| Celo Mainnet - alchemy_getTransactionReceipts | POST | `/v2` | `conn_mod_def::GLGBLAFNopM::hBXBNFDvToGXeRXdn5kuVQ` |

26 more TransactionReceipts actions are available through search.

### TokenMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBHbLzbk4::s7lwOgnCSk-VMa_Qo8mmXw` |
| Anime Mainnet - alchemy_getTokenMetadata | POST | `/v2` | `conn_mod_def::GLGBHuZpm_8::TttyCSauRpKl7spdBXY61g` |
| ApeChain Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBIFZhk4M::3uo3QZvbQqWGVSITmEPETg` |
| Arbitrum Mainnet - alchemy_getTokenMetadata | POST | `/v2` | `conn_mod_def::GLGBIaJDsfc::VUeREWH5Sx--GgZ8t9AJWA` |
| Astar Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBInzmjSY::WjeOUVyLSTiHYWVOwuyabA` |
| Avalanche C-Chain Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBJICLLSw::tKKQmQQFQw-Jwd0oqCnuWQ` |
| Base Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBJTKx6Kg::jpBE4xLXRvqyBp3CUjMpDw` |
| Berachain Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBJmvU9pU::tER40LlHSu2SFhz0ihH-rg` |
| Blast Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBJ6wMkaw::cnWikqtYQb2cF1GHtcdZXQ` |
| Botanix Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBKNWJhoY::awICd6XnRxGHd471ejTiMg` |
| BSC Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBKfGywoM::woywwTh7R6mloixSHznI2A` |
| Celo Mainnet - Get Token Metadata | POST | `/v2` | `conn_mod_def::GLGBKohy2m0::Xdg7C1e2TsiYNQKHvrzi5A` |

26 more TokenMetadata actions are available through search.

### AssetTransfers

| Action | Method | Path | Action id |
|---|---|---|---|
| Abstract Mainnet - Get Asset Transfers | POST | `/v2` | `conn_mod_def::GLGBHbAIHGI::9Kh9AUTgSR6xzQ1Xxo1Oxg` |
| Anime Mainnet - Get Asset Transfers | POST | `/v2` | `conn_mod_def::GLGBHlEXicQ::WsXqsV-ZS1awjWwLa5RfgA` |
| ApeChain Mainnet - Get Asset Transfers | POST | `/v2` | `conn_mod_def::GLGBH3JSayI::p5Y-W_YJTtKMSMk2cBGapA` |
| Arbitrum Mainnet - Get Asset Transfers | POST | `/v2` | `conn_mod_def::GLGBIQFhdWE::AstXiYWbQWON6yNuHaLzJA` |
| Astar Mainnet - alchemy_getAssetTransfers | POST | `/v2` | `conn_mod_def::GLGBInl2x_o::PdgeGoVQRVSnUiKyI4PrgQ` |
| Avalanche C-Chain Mainnet - Get Asset Transfers | POST | `/v2` | `conn_mod_def::GLGBI_I2kKk::oRwPkL18Qo-bGIyas3N0uQ` |

32 more AssetTransfers actions are available through search.

This lists 90 of 1418 actions. For anything not here, call `search_one_platform_actions` with platform `alchemy`. The full catalog is at https://www.withone.ai/knowledge/alchemy.

## When a call fails

The error comes from Alchemy, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/alchemy

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
