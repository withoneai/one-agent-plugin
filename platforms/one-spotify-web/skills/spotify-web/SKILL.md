---
name: spotify-web
description: Spotify Web API is a RESTful service enabling developers to access Spotify's music catalog metadata, control playback, manage playlists, retrieve audio features, and integrate music streaming capabilities into applications through JSON endpoints. Read and write Spotify Web data through One: playlists, player, shows, audiobooks, artists, episodes and more, 96 actions with real parameter documentation. Use whenever the user asks to look something up in Spotify Web, create or update a record there, or build code against the Spotify Web API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: spotify-web
  generated-from: one-knowledge-base
---

# Spotify Web through One

Spotify Web API is a RESTful service enabling developers to access Spotify's music catalog metadata, control playback, manage playlists, retrieve audio features, and integrate music streaming capabilities into applications through JSON endpoints.

One exposes Spotify Web through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `spotify-web` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Spotify Web is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Spotify Web account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Playlists

| Action | Method | Path | Action id |
|---|---|---|---|
| Check if Current User Follows a Playlist | GET | `/playlists/{{playlistId}}/followers/contains` | `conn_mod_def::GJ7JtyUkI2k::FIeXizWGTyuhZMizdi5uew` |
| Get a Playlist | GET | `/playlists/{{playlistId}}` | `conn_mod_def::GJ7JstNK4f0::Hvpq00xZQVi7jBldrH8Icw` |
| Get a Playlist’s Cover Images | GET | `/playlists/{{playlistId}}/images` | `conn_mod_def::GJ7Js2Jqsl4::dSorJn5MSRePkl3GGuJfzw` |
| List a Playlist’s Items (Deprecated: Get Playlist Tracks) | GET | `/playlists/{{playlistId}}/tracks` | `conn_mod_def::GJ7Js43I6xM::RSD_6oRdQQuGMiEYdhWXTw` |
| List a User's Playlists | GET | `/users/{{userId}}/playlists` | `conn_mod_def::GJ7Js3MxHTE::IGFxMPXNRTGGY2Sdc_5aNQ` |
| List the Current User's Playlists | GET | `/me/playlists` | `conn_mod_def::GJ7Jsrk8Jv4::TcHoccaxT_egmxUXAGEV5A` |
| Add Items to a Playlist | POST | `/playlists/{{playlistId}}/items` | `conn_mod_def::GJ7Jsj74K90::fFOgd_wYSH2yuttCKoyCWA` |
| Add Items to a Playlist (Deprecated) | POST | `/playlists/{{playlistId}}/tracks` | `conn_mod_def::GJ7JskbsWiM::Tpwik-PUS-GymogHWlQanQ` |
| Change a Playlist’s Details | PUT | `/playlists/{{playlistId}}` | `conn_mod_def::GJ7JskqLqXE::IfcdTsKLSha6hgFPIpzBPg` |
| Create a Playlist for the Current User | POST | `/me/playlists` | `conn_mod_def::GJ7Jsi8-aLE::rPm_eMb1SzitRFefoiYu0w` |
| Create a User’s Playlist (Deprecated) | POST | `/users/{{userId}}/playlists` | `conn_mod_def::GJ7JssLf9b4::2BbyiE95R8Sjw7Z8NTn8YQ` |
| Follow a Playlist (Current User) | PUT | `/playlists/{{playlistId}}/followers` | `conn_mod_def::GJ7JtwjGtp4::OmUw1rwOQKuROUH80d3yUQ` |

6 more Playlists actions are available through search.

### Player

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User's Currently Playing Track | GET | `/me/player/currently-playing` | `conn_mod_def::GJ7JsGOD00E::wIIWN2ZUSPuOVI2A11Q_gw` |
| Get the User’s Current Playback State | GET | `/me/player` | `conn_mod_def::GJ7JsFZrO38::lSi4bNFjTNaUwdv9y1cv_g` |
| Pause a User’s Playback | PUT | `/me/player/pause` | `conn_mod_def::GJ7JsRSX2As::NAsB6fGmRUmSQJdosTRK3g` |
| Seek To a Position in the Current User's Playback | PUT | `/me/player/seek` | `conn_mod_def::GJ7JsSo6BLE::gZhNYW4yQui9X0YIZe38sA` |
| Set Playback Volume for Current User | PUT | `/me/player/volume` | `conn_mod_def::GJ7JsRJzhsU::Z6pZDFUDQbSWeK0zG4Wa2g` |
| Set Repeat Mode on User Playback | PUT | `/me/player/repeat` | `conn_mod_def::GJ7JsRlO7g4::kMPE29ctRlGAuXHom9Q7jQ` |
| Skip a User’s Playback to the Next Track | POST | `/me/player/next` | `conn_mod_def::GJ7JsanTLAs::swzFZYJ4QyO0-k_1ME9FdQ` |
| Skip to Previous Track in Current User’s Playback | POST | `/me/player/previous` | `conn_mod_def::GJ7Jsapu2fo::qQ2yZoP_SQiVzE1oUidYNw` |
| Start/Resume a User’s Playback | PUT | `/me/player/play` | `conn_mod_def::GJ7JscFelBk::MOEZ-5VeRrGZpu7_9DBZJA` |
| Toggle Shuffle for a User’s Playback | PUT | `/me/player/shuffle` | `conn_mod_def::GJ7JsbENb04::vwTxbbS0TjGZkKi4sPsKCw` |
| Transfer a User’s Playback | PUT | `/me/player` | `conn_mod_def::GJ7Jsagwbig::8JJ6I6C9QNWtHfIPq7IbiA` |

### Shows

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User’s Saved Shows (Deprecated) | GET | `/me/shows/contains` | `conn_mod_def::GJ7Js_3tSWg::8W8tf1WJRuCN7ZYTv7uUUA` |
| Get a Show | GET | `/shows/{{id}}` | `conn_mod_def::GJ7JtNFAXCY::GiL3vbUtRkyt_uUqfAfzNg` |
| Get a User’s Saved Shows | GET | `/v1/me/shows` | `conn_mod_def::GJ7JtM_4LJY::heZlRdMFQKOrq2lW9zaZgg` |
| Get Several Shows | GET | `/shows` | `conn_mod_def::GJ7JtNGaxsQ::SpK31xHITCOfOUNs4fqecg` |
| Remove Current User’s Saved Shows | DELETE | `/me/shows` | `conn_mod_def::GJ7JtNpHxk4::rtegGkZ8ToKAU8OTi4YVFQ` |
| Save Shows for the Current User | PUT | `/me/shows` | `conn_mod_def::GJ7JtUNb5kI::-mYpowJTRmWi3evHzw8PAg` |

### Audiobooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audiobook | GET | `/audiobooks/{{id}}` | `conn_mod_def::GJ7JrYEgmdM::b7_lJx69Rl6bh8FHOGwSDQ` |
| Get Several Audiobooks | GET | `/audiobooks` | `conn_mod_def::GJ7JrhYWYUs::57UiNfa3SD6-kXa9Ks5y0w` |
| Remove a User’s Saved Audiobooks (Deprecated) | DELETE | `/me/audiobooks` | `conn_mod_def::GJ7JrjLlcFY::XzQ9htK5SweGEUCtt4PG6g` |
| Save Audiobooks for Current User (Deprecated) | PUT | `/me/audiobooks` | `conn_mod_def::GJ7Jrhy-NQk::kV1bdLrmQD2fjRBJY8SQWQ` |

### Artists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Artist | GET | `/artists/{{id}}` | `conn_mod_def::GJ7JrNcb71E::ZmefB-sRQsCn333WjB56XA` |
| Get an Artist’s Related Artists | GET | `/artists/{{id}}/related-artists` | `conn_mod_def::GJ7JrW1bnQo::vE59b81sS12FWrKVok8nbg` |
| Get an Artist’s Top Tracks | GET | `/artists/{{id}}/top-tracks` | `conn_mod_def::GJ7JrZhoJPk::SmVBnRzzSjShhMMwVgwoWg` |
| Get Several Artists | GET | `/artists` | `conn_mod_def::GJ7JrW0JXes::xDO-53PAS-qAtVmiHbYi5g` |

### Episodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User’s Saved Episodes (Deprecated) | GET | `/me/episodes/contains` | `conn_mod_def::GJ7Jrr69tZM::3MUI7nJqQYii-J7VLKgzaQ` |
| Get an Episode | GET | `/episodes/{{id}}` | `conn_mod_def::GJ7Jr0X6fSU::VAcy0m2CR764tGDXKnzy_Q` |
| Get Several Episodes | GET | `/episodes` | `conn_mod_def::GJ7Jr0brDvc::lC2VH3uDQLiFgO6jSdrLgA` |
| Save Episodes for the Current User | PUT | `/me/episodes` | `conn_mod_def::GJ7Jr0vAc_4::-88BVcXhSsywZrgPEwtZqw` |

### Library

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User’s Saved Library Items | GET | `/me/library/contains` | `conn_mod_def::GJ7Jr9CvlSI::UvXWtSG8Tp6MnTVNiwT4oA` |
| Remove Items from the Current User’s Library | DELETE | `/me/library` | `conn_mod_def::GJ7Jr8juJ78::lnFUje0ZR4Gazw1jhCNv9A` |
| Save Items to the Current User’s Library | PUT | `/me/library` | `conn_mod_def::GJ7Jr86wKWQ::Ptq1ky0AQdO81JIkHRBMTA` |

### Following

| Action | Method | Path | Action id |
|---|---|---|---|
| Check If Current User Follows Artists or Users (Deprecated) | GET | `/me/following/contains` | `conn_mod_def::GJ7Jtxe95Wk::9hQPN3lXSdWmt3AoqdDcuw` |
| Follow Artists or Users (Current User) | PUT | `/me/following` | `conn_mod_def::GJ7JtyEuVRI::UwnLbhj9Q62ZZ_Om7F1f6g` |
| Unfollow Artists or Users (Current User) | DELETE | `/me/following` | `conn_mod_def::GJ7Jt7ZYu20::nut-h9qeRfeYFN94V7XVbQ` |

### Tracks

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User’s Saved Tracks (Deprecated) | GET | `/me/tracks/contains` | `conn_mod_def::GJ7JtT7lvVo::bpo4MCYuTymy_crI_FoHfg` |
| Get a Track | GET | `/tracks/{{id}}` | `conn_mod_def::GJ7Jtn0psL0::hM6odnDBSLOvchknaiNqBw` |
| Get Several Tracks | GET | `/tracks` | `conn_mod_def::GJ7JtUTGAh0::KTKJQPSXQgCzxHvwGx-Y4A` |

### Albums

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Album | GET | `/albums/{{id}}` | `conn_mod_def::GJ7JrDWzjzE::HGnGlZImSLW-c6HKRKMaew` |
| Get an Album’s Tracks | GET | `/albums/{{id}}/tracks` | `conn_mod_def::GJ7JrF8ophU::mffYqkDrRr6kSXQYyIWWbg` |
| Get Several Albums | GET | `/albums` | `conn_mod_def::GJ7JrE6KCSY::Mlld9JbgRYK-5J2P2Qqh7w` |

### Chapters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Chapter | GET | `/v1/chapters/{{id}}` | `conn_mod_def::GJ7JrrtAk5g::dvmr0u1bRv6LlCjL4eUJSQ` |
| Get Several Chapters | GET | `/chapters` | `conn_mod_def::GJ7Jrruv_0A::_W7cwGRhTymE8KRG7kNozA` |

### BrowseCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Single Browse Category | GET | `/browse/categories/{{categoryId}}` | `conn_mod_def::GJ7JrsCvvuc::XbFz0n3uQ_2wG4duiyAmCg` |
| Get Several Browse Categories | GET | `/browse/categories` | `conn_mod_def::GJ7JrsMP6PE::1dTuJfe7RoK6UN0DEVf75A` |

### SavedEpisodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User’s Saved Episodes | GET | `/me/episodes` | `conn_mod_def::GJ7Jr0r-iwU::THQhWt7nQXGZUL6n9oMlxg` |
| Remove the Current User’s Saved Episodes (Deprecated) | DELETE | `/me/episodes` | `conn_mod_def::GJ7Jr0ndIuM::QG2D4QSBR8iYEvVefLLMfw` |

### Recommendations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Recommendation Genre Seeds | GET | `/recommendations/available-genre-seeds` | `conn_mod_def::GJ7Jr8q_3vM::atEt8ozhQWiFYEYazYoVIA` |
| Get Recommendations | GET | `/recommendations` | `conn_mod_def::GJ7Jtg10D98::FrqyTDdvTfWzyPOlQ1huww` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Spotify Profile | GET | `/users/{{userId}}` | `conn_mod_def::GJ7Jt50roqQ::bHvT-4l6RYe4HoWTwGyZiQ` |
| Get Current User's Profile | GET | `/me` | `conn_mod_def::GJ7Jt4wB718::2qC99vX9QVWWELmHTzHN_w` |

### MeTracks

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove the Current User’s Saved Tracks (Deprecated) | DELETE | `/me/tracks` | `conn_mod_def::GJ7Jtn5V820::Az7I5BIMSWWQdCnG2QrVrA` |
| Save Tracks for Current User (Deprecated) | PUT | `/me/tracks` | `conn_mod_def::GJ7JtwtBzhI::62sD0P_1RYCl65774_AuiQ` |

### AudioFeatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Track’s Audio Features | GET | `/audio-features/{{id}}` | `conn_mod_def::GJ7Jtn3f93c::12NAu_HSS3qq--fhEY06hg` |
| Get Several Tracks' Audio Features | GET | `/audio-features` | `conn_mod_def::GJ7JtUkOTTM::AYR0UZsRRHe8EHf31_ZqMQ` |

### MeAlbums

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove the Current User’s Saved Albums | DELETE | `/me/albums` | `conn_mod_def::GJ7JrOSEQjo::4XQ47gz9SNOdl5MDmHMzqQ` |
| Save Albums for the Current User | PUT | `/me/albums` | `conn_mod_def::GJ7JrOHMfBM::lwtkAPjuQC2nGVxog7X5qQ` |

### ShowsEpisodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Show’s Episodes | GET | `/shows/{{id}}/episodes` | `conn_mod_def::GJ7JtNnSvco::VDi487psSm6AnQxXnPJbdA` |

### Browse

| Action | Method | Path | Action id |
|---|---|---|---|
| Get New Releases | GET | `/browse/new-releases` | `conn_mod_def::GJ7JrEOy4Qg::SVYO7YSaTK2o9nc7gBpVCg` |

### AudiobookChapters

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Audiobook’s Chapters | GET | `/audiobooks/{{id}}/chapters` | `conn_mod_def::GJ7Jri3DtkI::8mUwWm2bRq2kbYZP6Pi6pw` |

### MeAudiobooks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Saved Audiobooks | GET | `/me/audiobooks` | `conn_mod_def::GJ7Jrj2KIn0::t6dRYtuFQ0On9PlvgiCNSQ` |

### Categories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Category's Playlists | GET | `/v1/browse/categories/{{categoryId}}/playlists` | `conn_mod_def::GJ7JsuEgq6I::iluQp6yeSbawpgHNBw4zLw` |

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Spotify Catalog Items | GET | `/search` | `conn_mod_def::GJ7JtA7YfvA::0M3W20cpR72n-mQYbJIplQ` |

### FollowedArtists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Followed Artists | GET | `/me/following` | `conn_mod_def::GJ7Jt8EPjlM::MvoRKnzdQAOmKSMxH5N03Q` |

### SavedAlbums

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Saved Albums | GET | `/me/albums` | `conn_mod_def::GJ7JrONo9Lg::KDbJ0Yh-SG-HtaUP5HEE8w` |

### ArtistsAlbums

| Action | Method | Path | Action id |
|---|---|---|---|
| Get an Artist’s Albums | GET | `/artists/{{id}}/albums` | `conn_mod_def::GJ7JrO0pqvE::NtuY6oyMS3W6YaGv2QvWgA` |

### PlaylistItems

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Playlist’s Items | GET | `/playlists/{{playlistId}}/items` | `conn_mod_def::GJ7Js3eK6SA::hG0waTBZQDa24tLv_I_Kxw` |

### SavedTracks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Saved Tracks | GET | `/me/tracks` | `conn_mod_def::GJ7JtofPvCc::r2PI8cDST4KIfurDW2_fEg` |

### AudioAnalysis

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Track’s Audio Analysis | GET | `/v1/audio-analysis/{{id}}` | `conn_mod_def::GJ7Jtp0hzpA::4MeUrPuRQOWi8OtuiS2_NQ` |

### FeaturedPlaylists

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Featured Playlists | GET | `/browse/featured-playlists` | `conn_mod_def::GJ7JssZdsmo::6EcxF3T0SXWXfnQdOJqpmA` |

### MeTop

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Current User’s Top Artists or Tracks | GET | `/v1/me/top/{{type}}` | `conn_mod_def::GJ7Jt57Vy90::FoOeUDtUT62R9EL6aVRtOw` |

### RecentlyPlayedTracks

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User's Recently Played Tracks | GET | `/me/player/recently-played` | `conn_mod_def::GJ7JsGbti3Q::kUKI1ltyR4aSg5uXEviP4Q` |

### MePlayerQueue

| Action | Method | Path | Action id |
|---|---|---|---|
| Get the Current User’s Queue | GET | `/me/player/queue` | `conn_mod_def::GJ7JsRDcZ9w::wgO7nGQMRqCSlOfkCgAlGQ` |

### Markets

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Available Markets | GET | `/markets` | `conn_mod_def::GJ7Jr9F-MZA::PZwxwMUVSLe0ehQ4eh8wxg` |

### MeAudiobooksContains

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User's Saved Audiobooks (Deprecated) | GET | `/me/audiobooks/contains` | `conn_mod_def::GJ7JrXd7cLk::unXOOvpLQACdDUMMvrVF9A` |

### MeAlbumsContains

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Current User’s Saved Albums (Deprecated) | GET | `/me/albums/contains` | `conn_mod_def::GJ7JrEUf6YI::TGfixsCzQ96jCGzQ7aew-A` |

### PlayerQueue

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Item to the Current User’s Playback Queue | POST | `/me/player/queue` | `conn_mod_def::GJ7JsFzTc9o::IBmDVEogQ8ObNZnriytq8Q` |

### PlayerDevices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Available Player Devices | GET | `/me/player/devices` | `conn_mod_def::GJ7JsIjpPgo::UlY7lcMyQd2P9Mc7GofHLg` |

This lists 90 of 96 actions. For anything not here, call `search_one_platform_actions` with platform `spotify-web`. The full catalog is at https://www.withone.ai/knowledge/spotify-web.

## When a call fails

The error comes from Spotify Web, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/spotify-web

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
