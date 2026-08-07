---
name: college-football-data
description: College Football Data is a sports data platform and API that provides structured college football statistics, rankings, play-by-play, betting lines, and historical records, allowing developers, analysts, and media teams to build applications, models, dashboards, and research workflows around NCAA football data. Read and write College Football Data data through One: teams, lines, adjustedteamseasonstats, adjustedplayerrushingstats, kickerpaarratings, adjustedplayerpassingstats and more, 71 actions with real parameter documentation. Use whenever the user asks to look something up in College Football Data, create or update a record there, or build code against the College Football Data API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: college-football-data
  generated-from: one-knowledge-base
---

# College Football Data through One

College Football Data is a sports data platform and API that provides structured college football statistics, rankings, play-by-play, betting lines, and historical records, allowing developers, analysts, and media teams to build applications, models, dashboards, and research workflows around NCAA football data.

One exposes College Football Data through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `college-football-data` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm College Football Data is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real College Football Data account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Teams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get FBS Teams | GET | `/teams/fbs` | `conn_mod_def::GMitwiUJ4fg::Rme4dJLsRe-1hSAyyTQWWA` |
| List Teams | GET | `/teams` | `conn_mod_def::GMitwtbueJg::GyCgtvvHS1Ke0GXCH00nFw` |

### Lines

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Lines | GET | `/lines` | `conn_mod_def::GMituRuxBlg::-FfY3hvBSM-oNZ4cFrPB8w` |

### AdjustedTeamSeasonStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Adjusted Team Season Stats | GET | `/wepa/team/season` | `conn_mod_def::GMituTZEO3A::ePL0mA-jQsShthSwpQinPw` |

### AdjustedPlayerRushingStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Adjusted Player Rushing Stats | GET | `/wepa/players/rushing` | `conn_mod_def::GMituTpWVMg::HVBN_XRVSW-139H7en5RKg` |

### KickerPaarRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Kicker PAAR Ratings | GET | `/wepa/players/kicking` | `conn_mod_def::GMituUZgYLA::OYF23kCzT2WAK_agLOWoZw` |

### AdjustedPlayerPassingStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Adjusted Player Passing Stats | GET | `/wepa/players/passing` | `conn_mod_def::GMituWidtng::0gZbjLsoSk23A7SXRTW6Rg` |

### CoachProfile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coach Profile | GET | `/coaches/profile` | `conn_mod_def::GMitue5xkeg::RgBKdUa5Thq57OY_HJPRXA` |

### Conferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Conferences | GET | `/conferences` | `conn_mod_def::GMitufa9_Xg::QWMRKNwFQi6Uyu_Ore_kxg` |

### CoachTenures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coach Tenures | GET | `/coaches/tenures` | `conn_mod_def::GMituf3721A::8t-9fSdcQvuPOdK2GbeZTg` |

### CoachSeasons

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Coach Seasons | GET | `/coaches/seasons` | `conn_mod_def::GMituf8u0Vg::jVkxWMYcSv6mYHcogHyiAw` |

### Coaches

| Action | Method | Path | Action id |
|---|---|---|---|
| List Coaches | GET | `/coaches` | `conn_mod_def::GMitukBRLhA::6vghY2gGQkiZsVixnSlSog` |

### DraftPicks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Draft Picks | GET | `/draft/picks` | `conn_mod_def::GMitur0se4g::7sh8Rxa-QUe2hkPXrisNlQ` |

### AdvancedBoxScore

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced Box Score | GET | `/game/box/advanced` | `conn_mod_def::GMitur-GLrA::c-3XZTAKS46jIjVskf8B2w` |

### DraftPositions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Draft Positions | GET | `/draft/positions` | `conn_mod_def::GMituukuv5g::vi46YmQ-Qim8PMYHsEJ8tg` |

### DraftTeams

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Draft Teams | GET | `/draft/teams` | `conn_mod_def::GMituuvi20g::DiJjQSBoQEavYQ_Pv9mLLg` |

### Drives

| Action | Method | Path | Action id |
|---|---|---|---|
| List Drives | GET | `/drives` | `conn_mod_def::GMituwlNisA::NPcwH43VQN-eXmhLaTFqfg` |

### CalendarInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Calendar Information | GET | `/calendar` | `conn_mod_def::GMitu4wFHog::Q-RZG1ekRoCVzxdQAtJYsg` |

### GamePlayerStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Game Player Stats | GET | `/games/players` | `conn_mod_def::GMitu4wRIMA::bCn6u6xkTXuQAUYveeVlWQ` |

### Games

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Games | GET | `/games` | `conn_mod_def::GMitu5eAQIA::3O7KymsbR1mpQYvo-Ck3vg` |

### GameMedia

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Game Media | GET | `/games/media` | `conn_mod_def::GMitu7uK0IA::MHoR1KzmR-a9J7GNZJt-mA` |

### GameTeamStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Game Team Stats | GET | `/games/teams` | `conn_mod_def::GMitu87_CgA::4MrK1mgRTKqAHSCYN-gInA` |

### UsageInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Usage Information | GET | `/info/usage` | `conn_mod_def::GMitvFBIksA::dGfCJrLnR8Ofqhtbj94DfQ` |

### Scoreboard

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Scoreboard | GET | `/scoreboard` | `conn_mod_def::GMitvFlp0rA::YimLEeb_QwCkK-U3dK6Zvg` |

### WeatherData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Weather Data | GET | `/games/weather` | `conn_mod_def::GMitvF8Ge9g::7uhnCY5yQnO15rHrSL0Tbw` |

### UserInfo

| Action | Method | Path | Action id |
|---|---|---|---|
| Get User Info | GET | `/info` | `conn_mod_def::GMitvGZRSjA::lKZRB-1yQpKHLwubba_HvQ` |

### HistoricalTeamRecords

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Historical Team Records | GET | `/records` | `conn_mod_def::GMitvH5DpUg::zt8vOLF_SDOU7VxIXKvIxw` |

### FieldGoalExpectedPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Field Goal Expected Points | GET | `/metrics/fg/ep` | `conn_mod_def::GMitvP4WKiA::DwQtDF3zT3-r_GENEidLgQ` |

### PredictedPointsAddedByPlayerSeason

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Predicted Points Added by Player Season | GET | `/ppa/players/season` | `conn_mod_def::GMitvQLQHDg::zBqw4Pa9Q-a57ydECUrG7Q` |

### PredictedPointsAddedByGame

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Predicted Points Added by Game | GET | `/ppa/games` | `conn_mod_def::GMitvQkYmag::MdyrRifZSi-94fYgWP4EVw` |

### PredictedPoints

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Predicted Points | GET | `/ppa/predicted` | `conn_mod_def::GMitvRyzQwA::u_vHhXCVQCem90k0YVh_-A` |

### PredictedPointsAddedByPlayerGames

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Predicted Points Added by Player Game | GET | `/ppa/players/games` | `conn_mod_def::GMitvUnYYBg::e2zAhJeGRaWcq96-qIbdnA` |

### WinProbability

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Win Probability by Game | GET | `/metrics/wp` | `conn_mod_def::GMitvbyyafg::PgWSwSjFTKi0GTQiT8xNgg` |

### PredictedPointsAddedByTeam

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Predicted Points Added by Team | GET | `/ppa/teams` | `conn_mod_def::GMitvcf0sUA::oeKIWSiZTcG0vCt_VDD9xw` |

### PlayerSeasonOverview

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Player Season Overview | GET | `/player/season/overview` | `conn_mod_def::GMitvdNn85g::HHYUwHRfQdup59FuFrb2mw` |

### PlayerUsage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Player Usage | GET | `/player/usage` | `conn_mod_def::GMitvekZ_4g::iUUttYdDQeSJcD343jHF3A` |

### PregameWinProbabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Pregame Win Probabilities | GET | `/metrics/wp/pregame` | `conn_mod_def::GMitvhb5XFA::93MWhj12SRCe1cl5vAndvQ` |

### TransferPortalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Transfer Portal Data | GET | `/player/portal` | `conn_mod_def::GMitvqS2YSg::-x6xRBWOQayAqBUGRclsog` |

### CfpParticipants

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CFP Participants | GET | `/playoffs/cfp/participants` | `conn_mod_def::GMitvr8RyRg::MD6Ag5s-R0ucqrVqcVdGNg` |

### Players

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Players | GET | `/player/search` | `conn_mod_def::GMitvsmEkzA::1Cgj4rEbRsWMVaZ_u4y4Yw` |

### ReturningProduction

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Returning Production | GET | `/player/returning` | `conn_mod_def::GMitvtO7Ntg::rWHwL_rTR2SBRtVflVdDUA` |

### CfpGames

| Action | Method | Path | Action id |
|---|---|---|---|
| Get CFP Games | GET | `/playoffs/cfp/games` | `conn_mod_def::GMitvtimoQA::baLAMm2aS4uFCDIaWgzgXA` |

### PlayStatTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Play Stat Types | GET | `/plays/stats/types` | `conn_mod_def::GMitv3w00og::ujvOTRZpSx6vLbad5oxsIg` |

### LivePlays

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Live Plays | GET | `/live/plays` | `conn_mod_def::GMitv5q-ljA::UFkvQRk3R3-uhCzJp2cHDA` |

### CollegeFootballPlayoffBracket

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the College Football Playoff Bracket | GET | `/playoffs/cfp` | `conn_mod_def::GMitv50bQxA::OT8srGGFSruDPIFoMrT2dw` |

### PlayStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Play Stats | GET | `/plays/stats` | `conn_mod_def::GMitv84oLWA::uaH8EHVDQV60dyjR8Mm3Mw` |

### Plays

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Plays | GET | `/plays` | `conn_mod_def::GMitv-fGZ6A::5qtG62KiRbKiDtw9eQPH3g` |

### PlayTypes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Play Types | GET | `/plays/types` | `conn_mod_def::GMitwF7rNqg::L7IeB7xOQfmiVZt1EKR5RA` |

### Rankings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Rankings | GET | `/rankings` | `conn_mod_def::GMitwGR2AZg::NHk8BlL9QJClXVO6s3U-mg` |

### ExpandedSrsRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Expanded SRS Ratings | GET | `/ratings/srs/expanded` | `conn_mod_def::GMitwG4sm-g::0EkqFrzWQfujEBU-zM72Rw` |

### ConferenceSpRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Conference SP Ratings | GET | `/ratings/sp/conferences` | `conn_mod_def::GMitwHZLJWA::8kC9_mpcTM62jFMoJ6zcPQ` |

### EloRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Elo Ratings | GET | `/ratings/elo` | `conn_mod_def::GMitwH5RRNg::EnQAeDKdSg2uncn4YnosGg` |

### SpRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get SP+ Ratings | GET | `/ratings/sp` | `conn_mod_def::GMitwOwFufA::aOTFE36iQGKXJztjhjnO8A` |

### SrsRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get SRS Ratings | GET | `/ratings/srs` | `conn_mod_def::GMitwQV5aZA::xbStzXSKRTajQuIrNIXC3w` |

### AggregatedTeamRecruitingRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Aggregated Team Recruiting Ratings | GET | `/recruiting/groups` | `conn_mod_def::GMitwQg4Zmg::TNj0PlMfSx6qI7od2kZd5Q` |

### FpiRatings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get FPI Ratings | GET | `/ratings/fpi` | `conn_mod_def::GMitwQqr6vA::_QS9Hso9Q5iWnG87KI7uKQ` |

### RecruitingPlayers

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Recruiting Players | GET | `/recruiting/players` | `conn_mod_def::GMitwQ2IjaA::0In4lsqyTJSqMHUEOc4fzQ` |

### TeamRecruitingRankings

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Recruiting Rankings | GET | `/recruiting/teams` | `conn_mod_def::GMitwXn738g::rsKRw00cRjqvhqxZeZByTw` |

### TeamStatisticalCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Statistical Categories | GET | `/stats/categories` | `conn_mod_def::GMitwYG5vyg::FpWsbwVwQCWpbpj6shSgwg` |

### GameHavocStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Game Havoc Stats | GET | `/stats/game/havoc` | `conn_mod_def::GMitwYwXtTg::uSGExHdLQiGZuiErzXXylQ` |

### AdvancedSeasonStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced Season Stats | GET | `/stats/season/advanced` | `conn_mod_def::GMitwYwj7iA::MjUTRJveQP2GERhB0BbtVQ` |

### AdvancedGameStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Advanced Game Stats | GET | `/stats/game/advanced` | `conn_mod_def::GMitwaYJIFg::u8lTOdgyTLezAjYAVlwT3g` |

### PlayerSeasonStats

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Player Season Stats | GET | `/stats/player/season` | `conn_mod_def::GMitwhH5Dcg::37O2Ozh1R2CCcTuy0MdalQ` |

### TeamSeasonStatistics

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Season Statistics | GET | `/stats/season` | `conn_mod_def::GMitwicbaJA::3FhFAP1ST0OdD9EVtgMRwg` |

### PlayerGameSuccessRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Player Game Success Rates | GET | `/stats/player/success/game` | `conn_mod_def::GMitwi4QsGA::IsJ190c9Qh2YfKFfF1BohQ` |

### PlayerSeasonSuccessRates

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Player Season Success Rates | GET | `/stats/player/success` | `conn_mod_def::GMitwkMoXMg::GNCCxGQBQbywjNdy91izeQ` |

### TeamMatchupHistory

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Team Matchup History | GET | `/teams/matchup` | `conn_mod_def::GMitwrhDkJA::Gz_SRAc5QCGn_2XVGWA9KA` |

### Roster

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Roster | GET | `/roster` | `conn_mod_def::GMitwrhPc4g::XOraCLF3QXKjTUeFye8FMw` |

### TeamsAtsSummary

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Teams ATS Summary | GET | `/teams/ats` | `conn_mod_def::GMitwrrb10A::kZ90ieedTR-RvSgK-DorkQ` |

### Talent

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Talent | GET | `/talent` | `conn_mod_def::GMitwuQhUPg::M1GEIMHaTGS8kQ__oZPzIg` |

### Venues

| Action | Method | Path | Action id |
|---|---|---|---|
| List Venues | GET | `/venues` | `conn_mod_def::GMitw2fIp6g::bd7ElQ8jSFeqB8vyFUVMuA` |

## When a call fails

The error comes from College Football Data, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/college-football-data

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
