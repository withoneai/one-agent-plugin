---
name: deepgram
description: Deepgram provides voice AI APIs that enable developers to build real-time speech-to-text, text-to-speech, and conversational voice agents with low latency, high accuracy, and scalable infrastructure for audio processing and intelligent voice interactions. Read and write Deepgram data through One: projects, projectselfhosteddistributioncredentials, projectkeys, models, projectmembers, projectinvites and more, 39 actions with real parameter documentation. Use whenever the user asks to look something up in Deepgram, create or update a record there, or build code against the Deepgram API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: deepgram
  generated-from: one-knowledge-base
---

# Deepgram through One

Deepgram provides voice AI APIs that enable developers to build real-time speech-to-text, text-to-speech, and conversational voice agents with low latency, high accuracy, and scalable infrastructure for audio processing and intelligent voice interactions.

One exposes Deepgram through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `deepgram` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Deepgram is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Deepgram account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project | GET | `/v1/projects/{{projectId}}` | `conn_mod_def::GKO4I7MQP2A::vq00Oak_Q4-U1Lz3Xcr7hg` |
| List Projects | GET | `/v1/projects` | `conn_mod_def::GKO4I6Xv0dg::b8SdZj0IRTaqR1gJBsCQMA` |
| Delete a Project | DELETE | `/v1/projects/{{projectId}}` | `conn_mod_def::GKO4I6ERJWg::Mq1Rd-WbRqurSBuUMzD1EA` |
| Leave a Project | DELETE | `/v1/projects/{{projectId}}/leave` | `conn_mod_def::GKO4I6pwMag::7J60u2SuROqD4kcNxYTBLA` |
| Update a Project | PATCH | `/v1/projects/{{projectId}}` | `conn_mod_def::GKO4I6PWZ7g::hB58gKh8SL23UW9C30JsCA` |

### ProjectSelfHostedDistributionCredentials

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Self-Hosted Distribution Credential | GET | `/v1/projects/{{projectId}}/self-hosted/distribution/credentials/{{distributionCredentialsId}}` | `conn_mod_def::GKO4KHpuFig::4PkJ8jaWQU-W8wsdyihjhw` |
| List a Project's Self-Hosted Distribution Credentials | GET | `/v1/projects/{{projectId}}/self-hosted/distribution/credentials` | `conn_mod_def::GKO4KISTrog::_2ZNCYoMQSqp8FK684worw` |
| Create a Project Self-Hosted Distribution Credential | POST | `/v1/projects/{{projectId}}/self-hosted/distribution/credentials` | `conn_mod_def::GKO4JyUlngg::ZTKysc6iSFq3fpCy2c5lvA` |
| Delete a Project Self-Hosted Distribution Credential | DELETE | `/v1/projects/{{projectId}}/self-hosted/distribution/credentials/{{distributionCredentialsId}}` | `conn_mod_def::GKO4KHuQoRA::ocu2DUaWSP6eWIgYPr8uHw` |

### ProjectKeys

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Key | GET | `/v1/projects/{{projectId}}/keys/{{keyId}}` | `conn_mod_def::GKO4JNlXPTA::tD0_NZwvRxmwsoCtyxRJ3g` |
| List a Project's Keys | GET | `/v1/projects/{{projectId}}/keys` | `conn_mod_def::GKO4JNn1u2g::HDQzXy1mReC7g7lqoH4FUA` |
| Create a Project Key | POST | `/v1/projects/{{projectId}}/keys` | `conn_mod_def::GKO4JNdS2eA::ijqitpp2QKueVAAQJAexQQ` |
| Delete a Project Key | DELETE | `/v1/projects/{{projectId}}/keys/{{keyId}}` | `conn_mod_def::GKO4JNN7d8g::DSn-UR0nRM-u_Oblcq9Klg` |

### Models

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Specific Model | GET | `/v1/models/{{modelId}}` | `conn_mod_def::GKO4In6oOKA::LizGcCQsQyqZyuG3XAX8bw` |
| List a Project’s Models | GET | `/v1/projects/{{projectId}}/models` | `conn_mod_def::GKO4JeT59rg::DztayzWuQ3a69mxL3gKrTw` |
| List Models | GET | `/v1/models` | `conn_mod_def::GKO4IoUmjzg::_2sNyolJRJ-ZoRUh2IUStQ` |

### ProjectMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Members | GET | `/v1/projects/{{projectId}}/members` | `conn_mod_def::GKO4JVx60Wg::zE1e4VGNQzmuSAUddfR95Q` |
| Delete a Project Member | DELETE | `/v1/projects/{{projectId}}/members/{{memberId}}` | `conn_mod_def::GKO4JNk92TA::w1k1DP_CSKa-4kQ5IyMm7g` |
| Update a Project Member's Scopes | PUT | `/v1/projects/{{projectId}}/members/{{memberId}}/scopes` | `conn_mod_def::GKO4JebWb0g::6pBdg5pUSgK6kZ2iWkDj4Q` |

### ProjectInvites

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Invites | GET | `/v1/projects/{{projectId}}/invites` | `conn_mod_def::GKO4JVi2N-g::1707ya9YSjOuLE6rc4Zihg` |
| Create a Project Invite | POST | `/v1/projects/{{projectId}}/invites` | `conn_mod_def::GKO4JWIk7-A::v1FTrvcET9aC_VHxp2nZgg` |
| Delete a Project Invite | DELETE | `/v1/projects/{{projectId}}/invites/{{email}}` | `conn_mod_def::GKO4JV2JhjA::X-hSs-MAQa6nPMDSJbpXGQ` |

### ProjectRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Request | GET | `/v1/projects/{{projectId}}/requests/{{requestId}}` | `conn_mod_def::GKO4JdmkiRg::W2y1KCmbTdKC6UNTWwh4QA` |
| List a Project's Requests | GET | `/v1/projects/{{projectId}}/requests` | `conn_mod_def::GKO4JmHyYVA::3dPUDiHzTO2vFlZiRorwoQ` |

### AgentThinkModels

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agent Think Models | GET | `/v1/agent/settings/think/models` | `conn_mod_def::GKO4IoG-x3A::AQENJVrmTVec6KZmeckqXw` |

### AuthGrant

| Action | Method | Path | Action id |
|---|---|---|---|
| Grant a Temporary Authentication Token | POST | `/v1/auth/grant` | `conn_mod_def::GKO4IoHmwdA::1CMmOe6qQHi_kTRwu4v46A` |

### Listen

| Action | Method | Path | Action id |
|---|---|---|---|
| Transcribe and Analyze Pre-Recorded Audio and Video | POST | `/v1/listen` | `conn_mod_def::GKO4Ix1eKkA::RfA2WcCiQOGztvkWnKe0Ow` |

### ProjectUsageFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project’s Usage Fields | GET | `/v1/projects/{{projectId}}/usage/fields` | `conn_mod_def::GKO4Jv_5x1g::Yw_KUTV2Svyi_Y5RLvmWWQ` |

### Read

| Action | Method | Path | Action id |
|---|---|---|---|
| Analyze Text Content | POST | `/v1/read` | `conn_mod_def::GKO4JyUT9oA::J2_wbu2RTrqjknZdIzPkrQ` |

### ProjectUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Usage | GET | `/v1/projects/{{projectId}}/usage` | `conn_mod_def::GKO4J-D9VxA::cb9SKtaoTAOkwf3olpuErQ` |

### ProjectUsageBreakdown

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project's Usage Breakdown | GET | `/v1/projects/{{projectId}}/usage/breakdown` | `conn_mod_def::GKO4J_MhhTg::sBQVtoXcTgKmgrvcdrll9g` |

### TextToSpeech

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Text to Speech | POST | `/v1/speak` | `conn_mod_def::GKO4KJGSHPA::0V3Bz023T268XCVYlxsxVg` |

### ProjectBalances

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Balance | GET | `/v1/projects/{{projectId}}/balances/{{balanceId}}` | `conn_mod_def::GKO4JCn-ecA::3MQX4GZuSCu-Hl4FRLG_FA` |

### Purchases

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Purchases | GET | `/v1/projects/{{projectId}}/purchases` | `conn_mod_def::GKO4JDcYfqg::6772yOKhR6e2yifVxIgknA` |

### Balances

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Balances | GET | `/v1/projects/{{projectId}}/balances` | `conn_mod_def::GKO4JDeGdwA::LNNZ-nX5SCupctjsSYjOgw` |

### BillingFields

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project's Billing Fields | GET | `/v1/projects/{{projectId}}/billing/fields` | `conn_mod_def::GKO4JEI_PxA::cH7LEwOwSh6l-lnq652odw` |

### ProjectBillingBreakdown

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Project Billing Breakdown | GET | `/v1/projects/{{projectId}}/billing/breakdown` | `conn_mod_def::GKO4JFjOTSA::uEDub_OIQAuR01yK-TxVcA` |

### ProjectMembersScopes

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Project Member's Scopes | GET | `/v1/projects/{{projectId}}/members/{{memberId}}/scopes` | `conn_mod_def::GKO4JWKtLsg::_fHN2uu6TgiKZ3uAwHzJ5w` |

### ProjectModels

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project Model | GET | `/v1/projects/{{projectId}}/models/{{modelId}}` | `conn_mod_def::GKO4JdmgIDA::p7dYAU6DSZ-MPacKedj3MQ` |

## When a call fails

The error comes from Deepgram, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/deepgram

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
