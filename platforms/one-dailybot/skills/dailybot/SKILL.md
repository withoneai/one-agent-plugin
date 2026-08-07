---
name: dailybot
description: DailyBot is a workplace automation and team communication tool that enables asynchronous standups, check-ins, surveys, kudos, and workflow reminders across chat platforms, allowing teams to streamline status reporting, collect updates, and improve coordination without manual follow-up. Read and write Dailybot data through One: workflows, checkins, users, scheduledexecution, teams, pendinginvitations and more, 76 actions with real parameter documentation. Use whenever the user asks to look something up in Dailybot, create or update a record there, or build code against the Dailybot API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dailybot
  generated-from: one-knowledge-base
---

# Dailybot through One

DailyBot is a workplace automation and team communication tool that enables asynchronous standups, check-ins, surveys, kudos, and workflow reminders across chat platforms, allowing teams to streamline status reporting, collect updates, and improve coordination without manual follow-up.

One exposes Dailybot through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dailybot` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dailybot is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dailybot account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Workflows

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Workflow by UUID | GET | `/v1/workflows/{{uuid}}/` | `conn_mod_def::GLTitLzGMwg::jDTLAKNORRC9U_BE8gl2MA` |
| List Workflows | GET | `/v1/workflows/` | `conn_mod_def::GLTitNtv_eg::q6TrjK6yTO60QOd7xibxhw` |
| Create a Workflow | POST | `/v1/workflows/` | `conn_mod_def::GLTitP_h4wg::dksz2euaQfyG8QtpzwDMxA` |
| Delete a Workflow | DELETE | `/v1/workflows/{{uuid}}/` | `conn_mod_def::GLTitBjgolA::-nNZ3VV_QGGXNZvX4Rmssg` |
| Duplicate a Workflow | POST | `/v1/workflows/{{uuid}}/duplicate/` | `conn_mod_def::GLTitMedHfA::IoeysjIuQNu1wPiCtabbNg` |
| Update a Workflow | PUT | `/v1/workflows/{{uuid}}/` | `conn_mod_def::GLTitXrVpAA::WCW2WqsJSBaat_bHWnEq6g` |

### Checkins

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Check-in by UUID | GET | `/v1/checkins/{{checkinUuid}}/` | `conn_mod_def::GLTiqvXOU7A::ntX8HpxaQ8mRjq2P6ezQCg` |
| List Check-ins | GET | `/v1/checkins/` | `conn_mod_def::GLTiqw7ZDDg::Mkv5CHrcQyytgDjcOLw1mg` |
| Archive a Check-in | DELETE | `/v1/checkins/{{checkinUuid}}/` | `conn_mod_def::GLTiqmKM6KA::XZvF763ORrWyORNUn8UEBQ` |
| Create Checkins | POST | `/v1/checkins/` | `conn_mod_def::GLTiqmZELBA::_i4LjKJoS7KZwAks4HMStA` |
| Partially Update a Check-in | PATCH | `/v1/checkins/{{checkinUuid}}/` | `conn_mod_def::GLTiq5qBH3g::aiYTGqWnS2y1eNidzO5cRQ` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User by UUID | GET | `/v1/users/{{userUuid}}/` | `conn_mod_def::GLTis5CaMKA::C7werN-YQtCN1LinaRQu1Q` |
| List Users | GET | `/v1/users/` | `conn_mod_def::GLTis306kJA::nes9Gi0eSfmNPPBebjUbfQ` |
| Invite User | POST | `/v1/invite-user/` | `conn_mod_def::GLTirq5SLwg::MMXBf8oNSLycE4tlKDQP8w` |
| Invite User | POST | `/v1/invite-user/` | `conn_mod_def::GLTis3vy9WA::41u7abK_SSubLdLUYk8HVw` |
| Update a User Profile | PATCH | `/v1/users/{{userUuid}}/` | `conn_mod_def::GLTitBed7Qg::rti3t628Swqm7KnqcreSYA` |

### ScheduledExecution

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Scheduled Execution by UUID | GET | `/v1/platform/scheduling/{{scheduledExecutionUuid}}/` | `conn_mod_def::GLTirZL3p8A::e32IMVL3SQOVcFBQSsWvbA` |
| Create a Scheduled Execution | POST | `/v1/platform/scheduling/` | `conn_mod_def::GLTirK1XUrA::Sf98srCcTwyuIIfjtyqvQg` |
| Delete a Scheduled Execution | DELETE | `/v1/platform/scheduling/{{scheduledExecutionUuid}}/` | `conn_mod_def::GLTirY_OLTA::T1iyXF8IS62R5Kc9gocnFQ` |
| Update a Scheduled Execution | PUT | `/v1/platform/scheduling/{{scheduledExecutionUuid}}/` | `conn_mod_def::GLTirZ0AmDA::Xexv7Eq3S1qkl8zGOMyheQ` |

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team by UUID | GET | `/v1/teams/{{teamUuid}}/` | `conn_mod_def::GLTir9LC6iA::bYU2mBm_Q4aqluUxxz8L5Q` |
| List Teams | GET | `/v1/teams/` | `conn_mod_def::GLTisEbFFJg::_49UEcj8RtGxbXYWe4YMqg` |
| Add Members to a Team | POST | `/v1/teams/{{teamUuid}}/member/` | `conn_mod_def::GLTir8VfusA::_uYGVAS-QBOUs9fs2fUqdg` |
| Remove a Team Member | DELETE | `/v1/teams/{{teamUuid}}/member/{{userUuid}}/` | `conn_mod_def::GLTisEsN7ZA::2_7svOUlQJieYPCLn27S_g` |

### PendingInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Pending Invitation by ID | GET | `/v1/pending-invitations/{{id}}/` | `conn_mod_def::GLTirq40M0A::RGeH43SUT--F8YSz4aW7wA` |
| List All Pending Invitations | GET | `/v1/pending-invitations/all/` | `conn_mod_def::GLTirq5CopA::scY2P928RNyFVrxxFnsT4g` |
| List Pending Invitations | GET | `/v1/pending-invitations/` | `conn_mod_def::GLTirjNHpgg::kjfBr489Q529fJvJ2s-mVw` |
| Cancel a Pending Invitation | DELETE | `/v1/pending-invitations/{{id}}/` | `conn_mod_def::GLTirg-Rjwg::u_mXzpYnSfaSQGU0dmizbg` |

### ImportantDate

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Important Date by UUID | GET | `/v1/important-date/{{importantDateUuid}}/` | `conn_mod_def::GLTirilXlMg::zLLOefccTXWMUbIezWYkuA` |
| Get Important Dates for a User | GET | `/v1/important-date/` | `conn_mod_def::GLTiribWDlA::W75YdKhRQmiGaDMWcxBITQ` |
| Create an Important Date | POST | `/v1/important-date/` | `conn_mod_def::GLTirZVbuyg::plpyk1BgQgGk7FpxKbajNQ` |

### Kudos

| Action | Method | Path | Action id |
|---|---|---|---|
| List Kudos | GET | `/v1/kudos/` | `conn_mod_def::GLTir0ngvUA::lybdQhwDSx2zYvvdemVDIQ` |
| Boost a Kudo | POST | `/v1/kudos/{{kudoId}}/boost/` | `conn_mod_def::GLTir0yQSPg::CimbxCliRLO0WAC0CRnWzQ` |
| Create a Kudo | POST | `/v1/kudos/` | `conn_mod_def::GLTir0p91Bg::A-nCiOozQn6D27ZjhaXJpA` |

### AgentMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Agent Messages | GET | `/v1/agent-messages/` | `conn_mod_def::GLTiqdbE5Zg::fUehwLEyRM6ot3CjKHnH0g` |
| Send an Agent Message | POST | `/v1/agent-messages/` | `conn_mod_def::GLTiqbM8HEA::1xdGUkP8RJ-A8aYL-jssDA` |

### AgentHealth

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Agent Health | GET | `/v1/agent-health/` | `conn_mod_def::GLTiqaDL2Yg::lW6A8ISWSKWcsOMlLcBnKA` |
| Submit an Agent Health Check | POST | `/v1/agent-health/` | `conn_mod_def::GLTiqcC7HLg::My9vkEHYTFix3aUKgnHn5g` |

### Templates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Template by ID | GET | `/v1/templates/{{templateId}}/` | `conn_mod_def::GLTiq6XhUug::xKLzxr-DQfufvneT9N0ITA` |
| List Templates | GET | `/v1/templates/` | `conn_mod_def::GLTiqvXXSKg::74qP6fyQQGu-aoVyqzd8uw` |

### AgentWebhook

| Action | Method | Path | Action id |
|---|---|---|---|
| Register an Agent Webhook | POST | `/v1/agent-webhook/` | `conn_mod_def::GLTiqnwqAdA::OTvPQ5J9RiqQXZMzYeV8kw` |
| Unregister an Agent Webhook | DELETE | `/v1/agent-webhook/` | `conn_mod_def::GLTiqdmjVTg::LnMYsAyVSZS4TkPEF_W6cg` |

### CliAuth

| Action | Method | Path | Action id |
|---|---|---|---|
| Request Code for CLI Auth | POST | `/v1/cli/auth/request-code/` | `conn_mod_def::GLTirBkiqhg::XbT6aPWnT7eqdADy9WHyRQ` |
| Verify Code for CLI Auth | POST | `/v1/cli/auth/verify-code/` | `conn_mod_def::GLTirCWZWoA::iQdJaXDERFCYXR02q1vZNQ` |

### EventSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Register an Event Subscription Hook | POST | `/v1/platform/event-subscription/` | `conn_mod_def::GLTirRUK0tg::p2cd7F2GQx2ls8nvLM66lg` |
| Unregister Event Subscription | DELETE | `/v1/platform/event-subscription/` | `conn_mod_def::GLTirKPiwqA::96zsc52fSVShayzqexJ6rQ` |

### WebhookSubscription

| Action | Method | Path | Action id |
|---|---|---|---|
| Register a Webhook Subscription | POST | `/v1/webhook-subscription/` | `conn_mod_def::GLTitBeKwsg::ce2W8daATmKm2mjLRcK0SA` |
| Unregister a Webhook Subscription | DELETE | `/v1/webhook-subscription/` | `conn_mod_def::GLTitEixDTA::Ce0vqMlxTAKEDJFc9ppDPA` |

### Responses

| Action | Method | Path | Action id |
|---|---|---|---|
| List Responses for a Check-in | GET | `/v1/checkins/{{checkinUuid}}/responses/` | `conn_mod_def::GLTiqw6376g::T1SKg43uTY2b8hwYkG3rUw` |

### PendingGuestInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List Pending Guest Invitations | GET | `/v1/pending-invitations/guests/` | `conn_mod_def::GLTirsdOj7A::zlB9EGsaS1SOsumj7FNgHA` |

### Email

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Email | POST | `/v1/send-email/` | `conn_mod_def::GLTir0EJ6Bg::-fn4IBwkQquB3ATzWzJI8w` |

### Conversations

| Action | Method | Path | Action id |
|---|---|---|---|
| Open Conversation | POST | `/v1/open-conversation/` | `conn_mod_def::GLTir0KP-3g::iccEvrzoR2q3L5hxaEw-8g` |

### WebhookSubscriptionSample

| Action | Method | Path | Action id |
|---|---|---|---|
| Sample a Webhook Subscription Event Payload | POST | `/v1/webhook-subscription/sample/` | `conn_mod_def::GLTitEr1RFg::rw-XIUhWQHqFN0rqxNoTSw` |

### WorkflowExecutionLogs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Workflow Execution Logs | GET | `/v1/workflows/{{uuid}}/execution_logs/` | `conn_mod_def::GLTitMEc01g::hymq6EjIQ26TRpOqQv4jFg` |

### CheckInResponses

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Check-in Response | POST | `/v1/checkins/{{checkinUuid}}/responses/` | `conn_mod_def::GLTiql3oIIA::eIOYoZG7Sau7TOLzaFo_sg` |

### AgentReports

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit an Agent Report | POST | `/v1/agent-reports/` | `conn_mod_def::GLTiql33ARg::C2RauN-xSfy_2GNS1MXtlQ` |

### CheckIns

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Reminders for a Check-In | POST | `/v1/checkins/{{checkinUuid}}/send-reminders/` | `conn_mod_def::GLTiqyCSaqA::kdcP8KNbTxam49u8S2zk-Q` |

### CliAuthStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CLI Auth Status | GET | `/v1/cli/auth/status/` | `conn_mod_def::GLTiq4zh7NA::GDBpWecLQFypebYFd9L4mw` |

### CliStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CLI Status | GET | `/v1/cli/status/` | `conn_mod_def::GLTiq48a6Pg::wulB9VTjRv22fwl-oW1QTg` |

### Forms

| Action | Method | Path | Action id |
|---|---|---|---|
| List Forms | GET | `/v1/forms/` | `conn_mod_def::GLTiq5dcqhA::rzXjQzy8T4mv9mtPVLO1zg` |

### CliAuthentication

| Action | Method | Path | Action id |
|---|---|---|---|
| Log Out of CLI Authentication | POST | `/v1/cli/auth/logout/` | `conn_mod_def::GLTirBy0KZA::_2DsxRFnSIGWyTPzwWrRUw` |

### CliUpdates

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit CLI Updates | POST | `/v1/cli/updates/` | `conn_mod_def::GLTirB-swIA::ie1aumXgQy6VV31owdwoXw` |

### PlatformActivity

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Platform Activity | GET | `/v1/platform/activity/` | `conn_mod_def::GLTirC9y2mg::HJanAXA-RPmNa4WyPR-QNg` |

### ActivityRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Activity Record for a Command | POST | `/v1/platform/activity/` | `conn_mod_def::GLTirK1mXkA::uvxkNof4Tty4_8ngm82Fmg` |

### CommandExchangeToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Fetch Command Exchange Token | POST | `/v1/auth/fetch-command-exchange-token/` | `conn_mod_def::GLTirOY8KFg::kxm0QIE6RRSp2SigZcZlrQ` |

### Storage

| Action | Method | Path | Action id |
|---|---|---|---|
| Run a Storage Operation | POST | `/v1/platform/storage/` | `conn_mod_def::GLTirZUr2Vg::F9MgaeaLSSubWSDHIbUtcg` |

### GuestInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Guest Invitation | DELETE | `/v1/pending-invitations/guests/{{id}}/` | `conn_mod_def::GLTirhvhM1g::pvKsdqCCTd-73EKzYLvqXQ` |

### PendingInvitationsGuests

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Guest Pending Invitation by ID | GET | `/v1/pending-invitations/guests/{{id}}/` | `conn_mod_def::GLTirrCTcGA::GeLqT8UDQtGikwZIjSmeeg` |

### Mood

| Action | Method | Path | Action id |
|---|---|---|---|
| Track Mood | POST | `/v1/mood/track/` | `conn_mod_def::GLTir8EAktg::_uHiIWTKTuWWyHlyxbSs7A` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Send Message | POST | `/v1/send-message/` | `conn_mod_def::GLTir8a2ZWg::FjUGRfrhRmCFQQQB28CB7g` |

### MoodTrack

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Mood Track | GET | `/v1/mood/track/` | `conn_mod_def::GLTir8_tokA::OEPmOTWmSUy7jirQGNIqkg` |

### TeamMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members for a Team | GET | `/v1/teams/{{teamUuid}}/members/` | `conn_mod_def::GLTisEs8-Ig::sDIkUaj5R9-6Y9y2Ol8sZg` |

### TeamMemberRecord

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Team Member Record by Team UUID and User UUID | GET | `/v1/teams/{{teamUuid}}/member/{{userUuid}}/` | `conn_mod_def::GLTisFAjs3g::w9g7UWtJS020Ozd43khCCg` |

### TeamsMember

| Action | Method | Path | Action id |
|---|---|---|---|
| Update a Team Member Using Teams Member | PATCH | `/v1/teams/{{teamUuid}}/member/{{userUuid}}/` | `conn_mod_def::GLTisuzTVzA::KSzARYp1SomdRuH7wzdjxg` |

### AuthenticatedUserContext

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Authenticated User Context | GET | `/v1/me/` | `conn_mod_def::GLTis4sulhA::zC6qwgI9T_WcUpHsjQeYDg` |

### OrganizationMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve Organization Metadata | GET | `/v1/organization/` | `conn_mod_def::GLTis6n3uGA::ptm7Oq63SXecgGFFMqzmOA` |

## When a call fails

The error comes from Dailybot, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dailybot

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
