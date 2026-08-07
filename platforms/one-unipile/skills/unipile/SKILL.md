---
name: unipile
description: Unipile is a unified communication and productivity platform that brings together emails, messages, calendars, and task management into a single, streamlined interface to help individuals and teams stay organized and efficient. Read and write Unipile data through One: accounts, calendarevents, emails, linkedinjobs, chats, messages and more, 90 actions with real parameter documentation. Use whenever the user asks to look something up in Unipile, create or update a record there, or build code against the Unipile API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: unipile
  generated-from: one-knowledge-base
---

# Unipile through One

Unipile is a unified communication and productivity platform that brings together emails, messages, calendars, and task management into a single, streamlined interface to help individuals and teams stay organized and efficient.

One exposes Unipile through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `unipile` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Unipile is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Unipile account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Accounts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Accounts | GET | `/api/v1/accounts` | `conn_mod_def::GJ8SRdbfK_4::EuqfJgCGTvShGIQce_eErw` |
| Retrieve an Account by ID | GET | `/api/v1/accounts/{{id}}` | `conn_mod_def::GJ8SRj4QCKs::ZVoaU99XRTadL7SEk-LtlQ` |
| Connect an Account (Native Authentication) | POST | `/api/v1/accounts` | `conn_mod_def::GJ8SRdWVyxA::eqCZMDuwRqmyTaGkR-IQWw` |
| Delete an Account | DELETE | `/api/v1/accounts/{{id}}` | `conn_mod_def::GJ8SRb_LYM0::WEWeRjC2Qo2muPRAVaMZ6g` |
| Reconnect an Account | POST | `/api/v1/accounts/{{id}}` | `conn_mod_def::GJ8SRdkwNbQ::PdufleIXRmuuSxbBo5Jn9g` |
| Resend an Account Checkpoint Notification | POST | `/api/v1/accounts/checkpoint/resend` | `conn_mod_def::GJ8SRpLGxyE::pfug7624QJ6peFmDIAZlWQ` |
| Restart an Account | POST | `/api/v1/accounts/{{id}}/restart` | `conn_mod_def::GJ8SRj-vhtg::MKnHFIKQRLWpQnWOvKfjWA` |
| Solve an Account Checkpoint (Code-Based) | POST | `/api/v1/accounts/checkpoint` | `conn_mod_def::GJ8SRkiX_XI::XFoOSQcAQSObkD_nABxtTQ` |
| Update an Account's Proxy Configuration | PATCH | `/api/v1/accounts/{{id}}` | `conn_mod_def::GJ8SRwFsS2I::Z21GSPTBT_yfTBomcr0ysQ` |

### CalendarEvents

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Calendar’s Events | GET | `/api/v1/calendars/{{calendarId}}/events` | `conn_mod_def::GJ8SR9s8Opk::za1EEQpDRSCKDsIgsNuaPw` |
| Retrieve a Calendar Event | GET | `/api/v1/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ8SR5GSpHA::DymzutyfS-GBvfojb8DcYQ` |
| Create a Calendar Event (in a Calendar) | POST | `/api/v1/calendars/{{calendarId}}/events` | `conn_mod_def::GJ8SRwfOblU::BAA8jJDBSJ29vWMJRNOKzw` |
| Delete a Calendar Event | DELETE | `/api/v1/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ8SRw1JHQw::cLjeb4_8RACkJ5sFoigUEw` |
| Edit a Calendar Event | PATCH | `/api/v1/calendars/{{calendarId}}/events/{{eventId}}` | `conn_mod_def::GJ8SRw1roBc::B9i1LCiNRCiv-kcI1QLa1A` |

### Emails

| Action | Method | Path | Action id |
|---|---|---|---|
| List Emails | GET | `/api/v1/emails` | `conn_mod_def::GJ8SSH2-Nbg::0Iq4mKXmSw2RVU6EGDQZQg` |
| Retrieve an Email | GET | `/api/v1/emails/{{emailId}}` | `conn_mod_def::GJ8SSO7zGxk::qbS3k5aPRxSMeJ9y-dZavw` |
| Delete an Email | DELETE | `/api/v1/emails/{{emailId}}` | `conn_mod_def::GJ8SR4fwJcE::KRZEuTOqRnKE7Xs8jde-Gg` |
| Send an Email (Send Mail) | POST | `/api/v1/emails` | `conn_mod_def::GJ8SSOkISUk::eBDJ8owcTxW1QLEEsC4Iog` |
| Update an Email | PUT | `/api/v1/emails/{{emailId}}` | `conn_mod_def::GJ8SSPE4NnY::YYWX-DgvRKao-oM7XwiWsw` |

### LinkedinJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Close a LinkedIn Job Posting | POST | `/api/v1/linkedin/jobs/{{id}}/close` | `conn_mod_def::GJ8SSPKPm2I::MhpRJa9-Rl-sPbpWUMLUmw` |
| Create a LinkedIn Job Posting Draft | POST | `/api/v1/linkedin/jobs` | `conn_mod_def::GJ8SSQPBQdk::bNUWZVvSRaC0prOpKPSYdw` |
| Edit a LinkedIn Job Posting | PATCH | `/api/v1/linkedin/jobs/{{jobId}}` | `conn_mod_def::GJ8SSW5ysD4::cWTBcA-LRiyMva5XqhE8Jg` |
| Publish a LinkedIn Job Posting Draft | POST | `/api/v1/linkedin/jobs/{{draftId}}/publish` | `conn_mod_def::GJ8SStRXjZg::fg5ZnvbzQfyRgJXyI9iDHg` |
| Solve a LinkedIn Job Draft Publishing Checkpoint | POST | `/api/v1/linkedin/jobs/{{draftId}}/checkpoint` | `conn_mod_def::GJ8SS1B8nXU::Bkf9PmL8Sp-y2qAF4WIIdQ` |

### Chats

| Action | Method | Path | Action id |
|---|---|---|---|
| List Chats | GET | `/api/v1/chats` | `conn_mod_def::GJ8STIhSen0::8gib-SJ4S_aZqm5gsw5dsA` |
| Retrieve a Chat | GET | `/api/v1/chats/{{chatId}}` | `conn_mod_def::GJ8STQNTogc::9YAhjyRsSquw7DNVCatICQ` |
| Delete a Chat | DELETE | `/api/v1/chats/{{chatId}}` | `conn_mod_def::GJ8SS0NHcb0::eoyvKd3yROyve9OzVMbBxA` |
| Patch a Chat (Perform an Action) | PATCH | `/api/v1/chats/{{chatId}}` | `conn_mod_def::GJ8STHrK7TI::alJHNtI-QqOVD-PC_f4X9g` |
| Start a New Chat | POST | `/api/v1/chats` | `conn_mod_def::GJ8STaXtfDE::A3e9NrKBSc6TXMsWAZYenQ` |

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| List Messages | GET | `/api/v1/messages` | `conn_mod_def::GJ8STIZvtig::QaWZevwpS2GatpEyTGt-xw` |
| Retrieve a Message | GET | `/api/v1/messages/{{messageId}}` | `conn_mod_def::GJ8STQ_aVdw::7-VoMz-KT4-qhuk5Y-qHvA` |
| Delete a Message | DELETE | `/api/v1/messages/{{messageId}}` | `conn_mod_def::GJ8SS1DHsqE::A0-HJeYoQReNs9jn2WWYWw` |
| Forward a Message | POST | `/api/v1/messages/{{messageId}}/forward` | `conn_mod_def::GJ8SS9qSblA::XOl-6xHSSg-Xgt-C-WZ5nw` |

### ChatAttendees

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Chat Attendee (or Group Chat) Picture | GET | `/api/v1/chat_attendees/{{id}}/picture` | `conn_mod_def::GJ8SS9izMMM::IimaeWBRQLiOn2xjDSr57w` |
| List a Chat’s Attendees | GET | `/api/v1/chats/{{chatId}}/attendees` | `conn_mod_def::GJ8SS_O21fs::w4JBRwIlQ-27UgaGyfpS6A` |
| List All Chat Attendees | GET | `/api/v1/chat_attendees` | `conn_mod_def::GJ8SS-lgRkI::k1sWl3hwTzOcYkNNfaK_0Q` |
| Retrieve a Chat Attendee by ID | GET | `/api/v1/chat_attendees/{{id}}` | `conn_mod_def::GJ8STQG7WPo::w4-efKdMS--zOA_nLdJr3g` |

### Posts

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User or Company's Posts | GET | `/api/v1/users/{{identifier}}/posts` | `conn_mod_def::GJ8ST1HIIbs::aO2RHTJfRxq-Tbe0aCZgOA` |
| Retrieve a Post | GET | `/api/v1/posts/{{postId}}` | `conn_mod_def::GJ8STg3FDfM::mw-X-TecQ5upgKhWZxdvEQ` |
| Add a Reaction to a Post (or Comment) | POST | `/api/v1/posts/reaction` | `conn_mod_def::GJ8STXa_aZc::TZ8xy7saQgyedxZaFro6Lg` |
| Create a Post | POST | `/api/v1/posts` | `conn_mod_def::GJ8STXYU8xc::pF9nBB2GTy2lY7LqgyHb4g` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a User Profile (by Identifier) | GET | `/api/v1/users/{{identifier}}` | `conn_mod_def::GJ8ST1Fpt-0::4W4cJpeDSAOXPRgDldPP2g` |
| Retrieve the Account Owner’s Profile (Me) | GET | `/api/v1/users/me` | `conn_mod_def::GJ8ST9hqxpc::YAkXdDBBSx2Jt0wl55Tnmg` |
| Edit Own Profile (Account Owner) | PATCH | `/api/v1/users/me/edit` | `conn_mod_def::GJ8SThVosS4::RvidBVhXRcuEg2Sg0RWkZg` |
| Send a Contact Invitation (Invite a User) | POST | `/api/v1/users/invite` | `conn_mod_def::GJ8ST86BXgM::IIV_7gARQ3iyZAqoi3ZP7g` |

### Webhooks

| Action | Method | Path | Action id |
|---|---|---|---|
| List Webhooks | GET | `/api/v1/webhooks` | `conn_mod_def::GJ8ST9jjxDw::8fff0s1NSfypBTUo4oprzA` |
| Create a Webhook | POST | `/api/v1/webhooks` | `conn_mod_def::GJ8ST9YD1m4::Nu3Zk-JgQd-3-mhCAHXx5w` |
| Delete a Webhook | DELETE | `/api/v1/webhooks/{{id}}` | `conn_mod_def::GJ8ST8jEyCg::odpqteFtTTiOOMaGrFYm8g` |

### LinkedinJobApplicants

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a LinkedIn Job Applicant’s Resume | GET | `/api/v1/linkedin/jobs/applicants/{{applicantId}}/resume` | `conn_mod_def::GJ8SSYF8V-M::xQ-3HbBgSeikIfUJyXM0VQ` |
| Get a LinkedIn Job Applicant | GET | `/api/v1/linkedin/jobs/applicants/{{applicantId}}` | `conn_mod_def::GJ8SSX7VwqI::JNNjYxcRTPitFTCi5R0I4A` |
| List a LinkedIn Job Posting’s Applicants | GET | `/api/v1/linkedin/jobs/{{id}}/applicants` | `conn_mod_def::GJ8SSlaVp1Q::r0UrMsMcT-yVTi0YgsIg7g` |

### Calendars

| Action | Method | Path | Action id |
|---|---|---|---|
| List Calendars for an Account | GET | `/api/v1/calendars` | `conn_mod_def::GJ8SRyFeGvs::A82OoCy0Tm6DEzJKCSib6A` |
| Retrieve a Calendar (Account Scoped) | GET | `/api/v1/calendars/{{calendarId}}` | `conn_mod_def::GJ8SR5VSKc0::M1aHKtmFRR6XaJGxFht3Vw` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Folders | GET | `/api/v1/folders` | `conn_mod_def::GJ8SSEXGQ10::gzoGqM3dRSeeJTb_A56m3g` |
| Retrieve a Folder | GET | `/api/v1/folders/{{folderId}}` | `conn_mod_def::GJ8SSFLI7m8::kgvmeOfjSXmQuoTY0TewbQ` |

### ChatMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Chat’s Messages | GET | `/api/v1/chats/{{chatId}}/messages` | `conn_mod_def::GJ8STJF7A9o::nYKTH2-YSoy7DcOe0ffAYg` |
| Send a Message in a Chat | POST | `/api/v1/chats/{{chatId}}/messages` | `conn_mod_def::GJ8STQIqDpk::cLxlRRgRQpCrTSU09ALdXQ` |

### Comments

| Action | Method | Path | Action id |
|---|---|---|---|
| List a Post’s Comments (or a Comment’s Replies) | GET | `/api/v1/posts/{{postId}}/comments` | `conn_mod_def::GJ8STitMXfM::Dq9J4XapSCajnHQUH5P8ww` |
| List a User’s Comments | GET | `/api/v1/users/{{identifier}}/comments` | `conn_mod_def::GJ8STsSiDu8::lviPPa-LQLa-YJXfkcKeZg` |

### UserInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Sent User Invitations (Pending) | GET | `/api/v1/users/invite/sent` | `conn_mod_def::GJ8ST1ifBSo::6BUnmYaHS9OAAJY2q5s6Pg` |
| Handle a Received Invitation | POST | `/api/v1/users/invite/received/{{invitationId}}` | `conn_mod_def::GJ8STpdQ3Ho::zPXbg3rrSZqrQcElaip7kQ` |

### AccountResync

| Action | Method | Path | Action id |
|---|---|---|---|
| Resynchronize an Account’s Messaging Data | GET | `/api/v1/accounts/{{accountId}}/sync` | `conn_mod_def::GJ8SRl3ngxc::Rn-fTVutR3G6ktnCha5NFA` |

### EmailAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve an Email Attachment | GET | `/api/v1/emails/{{emailId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ8SSFMYTgc::U60pZ7B2SF6yQTuBoOX-8Q` |

### LinkedinInmailBalance

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a LinkedIn Account’s InMail Credit Balance | GET | `/api/v1/linkedin/inmail_balance` | `conn_mod_def::GJ8SSYVWbo4::ymmBUd3kQrCh8gpnVb3NSg` |

### LinkedinUserActions

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a LinkedIn Action on a User Profile | POST | `/api/v1/linkedin/user/{{userId}}` | `conn_mod_def::GJ8SSfsOz88::BJUMj8p6Qw2EWlZgWlUv_A` |

### LinkedinJobOffers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a LinkedIn Job Offer | GET | `/api/v1/linkedin/jobs/{{jobId}}` | `conn_mod_def::GJ8SSfvZ4KQ::FA6asGLJQp-xaW7u0ByneQ` |

### RecruiterHiringProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Recruiter Hiring Project by ID | GET | `/api/v1/linkedin/projects/{{id}}` | `conn_mod_def::GJ8SSsxBNz8::dYhyZxe6RqGKCzGqVpaUvA` |

### LinkedinSearchParameters

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve LinkedIn Search Parameters | GET | `/api/v1/linkedin/search/parameters` | `conn_mod_def::GJ8SSt1KATQ::Pq2si_PgT9WOZWtqemZ-Sg` |

### LinkedinSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Perform a LinkedIn Search (Classic, Sales Navigator, or Recruiter) | POST | `/api/v1/linkedin/search` | `conn_mod_def::GJ8SSuIWW4Q::MCgavyBFRhqe_plOBudBcg` |

### MessageReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Reaction to a Message | POST | `/api/v1/messages/{{messageId}}/reaction` | `conn_mod_def::GJ8SS0mv_RQ::QYSeZy9oSQ-8wB12pMRHjg` |

### ChatAttendeeChats

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Attendee’s 1-to-1 Chats | GET | `/api/v1/chat_attendees/{{attendeeId}}/chats` | `conn_mod_def::GJ8STAc9qos::JcVBLAcXRDCiMSQRLEuz9w` |

### ChatAttendeeMessages

| Action | Method | Path | Action id |
|---|---|---|---|
| List an Attendee’s Messages | GET | `/api/v1/chat_attendees/{{senderId}}/messages` | `conn_mod_def::GJ8STI6O72U::Xa3a7gucTSSWgT-rH7pONA` |

### MessageAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a Message Attachment | GET | `/api/v1/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ8STPqGYCs::kE3HzLwUS0mI-1xBZr3iEw` |

### PostComments

| Action | Method | Path | Action id |
|---|---|---|---|
| Comment on a Post (or Reply to a Comment) | POST | `/api/v1/posts/{{postId}}/comments` | `conn_mod_def::GJ8STXeXJY4::pyGW6oz4Q6uZqTgeUs8SVA` |

### UsersInvitations

| Action | Method | Path | Action id |
|---|---|---|---|
| Cancel a Sent Invitation (for a User) | DELETE | `/api/v1/users/invite/sent/{{invitationId}}` | `conn_mod_def::GJ8SThO39Tc::vcqCmlH7SJCapTDYf1eFFQ` |

### UsersFollowing

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Followed Accounts | GET | `/api/v1/users/following` | `conn_mod_def::GJ8STqVE530::U3u5uA57TXm-djQqisUlzA` |

### InvitationsReceived

| Action | Method | Path | Action id |
|---|---|---|---|
| List All Invitations Received (for an Account) | GET | `/api/v1/users/invite/received` | `conn_mod_def::GJ8STsUcRvQ::SEfdF6CjQe2VtISdYdCXgQ` |

### UserFollowers

| Action | Method | Path | Action id |
|---|---|---|---|
| List the Current User’s Followers | GET | `/api/v1/users/followers` | `conn_mod_def::GJ8STtFYPxQ::CQfl7b2CRZG5bwp4r6eBlg` |

### HostedAccountsLink

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Hosted Authentication Link to Connect or Reconnect an Account | POST | `/api/v1/hosted/accounts/link` | `conn_mod_def::GJ8SRdejnhM::rklIuoMgSoKd7o8j44tUWg` |

### Drafts

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Draft | POST | `/api/v1/drafts` | `conn_mod_def::GJ8SR6b3F10::1O_VJokGSwGeICYSSP8MZw` |

### LinkedinCompanyProfiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Retrieve a LinkedIn Company Profile | GET | `/api/v1/linkedin/company/{{identifier}}` | `conn_mod_def::GJ8SStB7t9Y::lCruGWPXTv64qgP0AGVNZA` |

### LinkedinRecruiterHiringProjects

| Action | Method | Path | Action id |
|---|---|---|---|
| List LinkedIn Recruiter Hiring Projects | GET | `/api/v1/linkedin/projects` | `conn_mod_def::GJ8SS2_GSa8::4PHz0BHPRnCj1Y8qNnl1LA` |

### PostReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List Reactions for a Post | GET | `/api/v1/posts/{{postId}}/reactions` | `conn_mod_def::GJ8STh5lZX4::4zwIlN8NTrG22gUACdbnJQ` |

### UserReactions

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Reactions | GET | `/api/v1/users/{{identifier}}/reactions` | `conn_mod_def::GJ8ST1WbPX4::RmR13odXSo6bFirbcnehiA` |

### UserRelations

| Action | Method | Path | Action id |
|---|---|---|---|
| List a User’s Relations | GET | `/api/v1/users/relations` | `conn_mod_def::GJ8ST1ZHLEQ::vom4F5a2RxuuhEz9B9gbwg` |

### LinkedinProfileEndorse

| Action | Method | Path | Action id |
|---|---|---|---|
| Endorse a LinkedIn Profile Skill | POST | `/api/v1/linkedin/profile/endorse` | `conn_mod_def::GJ8SSW2DwkE::c4w2DZBgRPWDwfV2qJiMVQ` |

### LinkedinRawData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Raw LinkedIn Data (Magic Route) | POST | `/api/v1/linkedin` | `conn_mod_def::GJ8SSggeL-Q::xD2TgcBRRhGPjcn_QrmUBw` |

### EmailContacts

| Action | Method | Path | Action id |
|---|---|---|---|
| List Email Contacts (for an Account) | GET | `/api/v1/emails/contacts` | `conn_mod_def::GJ8SSFQFATA::pONtDCIdQz6LKnGUjZrgYQ` |

### LinkedinJobPostings

| Action | Method | Path | Action id |
|---|---|---|---|
| List a LinkedIn Account’s Job Postings | GET | `/api/v1/linkedin/jobs` | `conn_mod_def::GJ8SShGoSuY::tz6DFcIaQo-xuTiTJQpfig` |

### ChatHistorySync

| Action | Method | Path | Action id |
|---|---|---|---|
| Synchronize a Chat’s Conversation History (From Beginning) | GET | `/api/v1/chats/{{chatId}}/sync` | `conn_mod_def::GJ8STY5C6C0::M6d-PkmxSC2Rt7XeY6dMww` |

## When a call fails

The error comes from Unipile, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/unipile

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
