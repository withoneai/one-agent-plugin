---
name: ably
description: Ably Pub/Sub is a global serverless real-time messaging platform that delivers sub‑60 ms latency pub/sub capabilities—including message history, presence detection, exactly‑once delivery, and guaranteed ordering—scaling to billions of messages and millions of devices with enterprise reliability. Read and write Ably data through One: deviceregistrations, channels, channelmessages, messages, pushchannelsubscriptions, messageannotations and more, 31 actions with real parameter documentation. Use whenever the user asks to look something up in Ably, create or update a record there, or build code against the Ably API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: ably
  generated-from: one-knowledge-base
---

# Ably through One

Ably Pub/Sub is a global serverless real-time messaging platform that delivers sub‑60 ms latency pub/sub capabilities—including message history, presence detection, exactly‑once delivery, and guaranteed ordering—scaling to billions of messages and millions of devices with enterprise reliability.

One exposes Ably through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `ably` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Ably is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Ably account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### DeviceRegistrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Registered Device’s Details | GET | `/push/deviceRegistrations/{{deviceId}}` | `conn_mod_def::GJzyoJIlY38::vCnwFRiGTgCkdMtsQsGqOQ` |
| List Registered Devices | GET | `/push/deviceRegistrations` | `conn_mod_def::GJzyoidt0fo::o63FPpZsRCOOpxoQWOelKw` |
| Register a Device for Receiving Push Notifications | POST | `/push/deviceRegistrations` | `conn_mod_def::GJzyoxAWBBA::xctXWeqZTDOuzu4s9ryrsA` |
| Reset a Registered Device Registration’s Update Token | POST | `/push/deviceRegistrations/{{deviceId}}/resetUpdateToken` | `conn_mod_def::GJzyo5vgFjM::QUbrvjnsS4akBJBNURj-9w` |
| Update a Device Registration | PATCH | `/push/deviceRegistrations/{{deviceId}}` | `conn_mod_def::GJzypiuAY8E::z6gcdNBZQ6-WqEOGwf5boQ` |

### Channels

| Action | Method | Path | Action id |
|---|---|---|---|
| Enumerate Active Channels | GET | `/channels` | `conn_mod_def::GJzymfpJIo0::nrsy0Uf_Qf6P6CwXMdVu7A` |
| Retrieve Channel Metadata | GET | `/channels/{{channelId}}` | `conn_mod_def::GJzynoV3knI::XZmGNNddQOCKwL8lvx3IjA` |
| Publish One or More Messages on a Channel | POST | `/channels/{{channelId}}/messages` | `conn_mod_def::GJzym4t05EY::t50ehaZzQki544ECGv7wYw` |

### ChannelMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Latest Version of a Channel Message | GET | `/channels/{{channelId}}/messages/{{serial}}` | `conn_mod_def::GJzymod9viQ::-lqfCcDwSZG2tOy2UrlDiQ` |
| Retrieve a Channel’s Message History | GET | `/channels/{{channelId}}/messages` | `conn_mod_def::GJzynZzI_4M::jI2RZo0_QU-51IG2bTdu3Q` |
| Update, Delete, or Append to a Channel Message | PATCH | `/channels/{{channelId}}/messages/{{serial}}` | `conn_mod_def::GJzyn7AcBdE::yBjFASx_Sg6KYx9GzIARvA` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Message’s Annotation Summary for a Client | GET | `/channels/{{channelId}}/messages/{{messageSerial}}/client-summary` | `conn_mod_def::GJzynH9VdyE::3vn-tXo-SnCR6WYs2GtqrQ` |
| Retrieve a Message’s Version History | GET | `/channels/{{channelId}}/messages/{{serial}}/versions` | `conn_mod_def::GJzynhst0nA::pD7l63lzSjepkK2r77fopQ` |
| Batch Publish Messages to Multiple Channels | POST | `/messages` | `conn_mod_def::GJzymZOxFo4::btq17KsXTrCgaT1eV62pEg` |

### PushChannelSubscriptions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Push Channel Subscriptions | GET | `/push/channelSubscriptions` | `conn_mod_def::GJzyobNL7DI::kJJVg_aLRUm29vVx0X0bhQ` |
| Subscribe to a Channel (Push Channel Subscription) | POST | `/push/channelSubscriptions` | `conn_mod_def::GJzypDYA5lE::975RainvSs-g9pHTAJwtfw` |
| Unsubscribe From Push Notifications for Channels | DELETE | `/push/channelSubscriptions` | `conn_mod_def::GJzypZNLwjU::HWwQM7RvQWO2D9crndm7sg` |

### MessageAnnotations

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve All Annotations for a Message | GET | `/channels/{{channelId}}/messages/{{messageSerial}}/annotations` | `conn_mod_def::GJzynAM9Gao::eU0mF_gLRGi_7SlRTYicdQ` |
| Publish Annotations for a Channel Message | POST | `/channels/{{channelId}}/messages/{{messageSerial}}/annotations` | `conn_mod_def::GJzymxK1YLI::lyTzEcNWSbyt_NHZzezSzQ` |

### PushDeviceRegistrations

| Action | Method | Path | Action id |
|---|---|---|---|
| Unregister a Device for Push Notifications | DELETE | `/push/deviceRegistrations/{{deviceId}}` | `conn_mod_def::GJzypKe5FS8::eLvn_F8YRnK9qF2_hgqB5w` |
| Unregister Matching Devices for Push Notifications | DELETE | `/push/deviceRegistrations` | `conn_mod_def::GJzypSKVSQo::6yYeiJ_DQWWe0gsmZeuJPA` |

### AccessTokens

| Action | Method | Path | Action id |
|---|---|---|---|
| Request an Access Token for an API Key | POST | `/keys/{{keyName}}/requestToken` | `conn_mod_def::GJzymCfDTXQ::Q8vCIYA5QxylL1Nr3BAC3w` |

### Stats

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Application Usage Statistics | GET | `/stats` | `conn_mod_def::GJzyl6WI5vs::Y4j3q7rWSqegLvoYCqg_Xw` |

### Keys

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke Tokens for an API Key | POST | `/keys/{{keyName}}/revokeTokens` | `conn_mod_def::GJzymKPDKak::UnhJMFYiSfC4kWr8bEUKag` |

### Presence

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Presence (Query Presence for Multiple Channels) | GET | `/presence` | `conn_mod_def::GJzymRq40qM::PrQ_JdkBQMu9r8L_WT4ZrA` |

### ChannelPresence

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Instantaneous Presence Status for a Channel | GET | `/channels/{{channelId}}/presence` | `conn_mod_def::GJzynRbaUF8::1y7SOUMqRX6yzFbjZ6k9Lg` |

### PresenceHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Channel’s Presence State History | GET | `/channels/{{channelId}}/presence/history` | `conn_mod_def::GJzynzUCrkg::dY2VW40LRbylc5Q4DpR8Og` |

### PushNotifications

| Action | Method | Path | Action id |
|---|---|---|---|
| Batch Publish Push Notifications to Specific Recipients | POST | `/push/batch/publish` | `conn_mod_def::GJzyoCDyXZ8::kW6IrR8PRFyenYVFxWwfOg` |

### Push

| Action | Method | Path | Action id |
|---|---|---|---|
| Publish a Push Notification Directly to Specific Recipients | POST | `/push/publish` | `conn_mod_def::GJzyopx-oGo::CqZkZIVwTnOmGH-4dDHuAA` |

### Time

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Service Time | GET | `/time` | `conn_mod_def::GJzypqZj3xs::yon--qYMSy20QDeI5eq2YQ` |

### PushChannels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Push Channels With At Least One Subscribed Device | GET | `/push/channels` | `conn_mod_def::GJzyoQMZP2o::OBNiGcWtTpK9PlCZJBBVKg` |

## When a call fails

The error comes from Ably, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/ably

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
