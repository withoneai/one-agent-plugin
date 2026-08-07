---
name: supervisely
description: A web-based computer vision platform that enables teams to annotate and manage datasets (images, video, 3D, medical), build and train neural networks, automate labeling with AI, and collaborate on model development and deployment at scale. Read and write Supervisely data through One: tasks, figures, filestorage, images, jobs, projects and more, 427 actions with real parameter documentation. Use whenever the user asks to look something up in Supervisely, create or update a record there, or build code against the Supervisely API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: supervisely
  generated-from: one-knowledge-base
---

# Supervisely through One

A web-based computer vision platform that enables teams to annotate and manage datasets (images, video, 3D, medical), build and train neural networks, automate labeling with AI, and collaborate on model development and deployment at scale.

One exposes Supervisely through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `supervisely` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Supervisely is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Supervisely account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Tasks

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Task's Logs | GET | `/public/api/v3/tasks.log.download` | `conn_mod_def::GJ6B-8mrOws::mqpo3yZVTBSXOID2ixoeiw` |
| Get Task Info | GET | `/tasks.info` | `conn_mod_def::GJ6B-s2bbk4::jfYgkVx1QquyNYXlWfOvKw` |
| List Tasks (Workspace Scope) | GET | `/public/api/v3/tasks.list` | `conn_mod_def::GJ6B-1vaOro::0peP1t82RVyJWiRfwT3Z5w` |
| Bulk Remove Tasks | POST | `/public/api/v3/tasks.bulk.remove` | `conn_mod_def::GJ6B_omL71Q::IyyrLvv_T_W_RI8m7unFvw` |
| Create a Deploy Task | POST | `/public/api/v3/tasks.run.deploy` | `conn_mod_def::GJ6B9ei9uqk::54awWT4tRf-dkHH9ejaJPA` |
| Create a Plugin Task | POST | `/public/api/v3/tasks.run.plugin` | `conn_mod_def::GJ6B9tlMBJQ::0Kz5-nfLS0eqVhkrKfYDkw` |
| Get a Task’s Custom Data | POST | `/public/api/v3/tasks.data.get` | `conn_mod_def::GJ6B_3mBME4::ozOv90r-RtS-QcsTh3Yrjg` |
| Resume an App Task | POST | `/public/api/v3/tasks.resume` | `conn_mod_def::GJ6CBYg5EPk::pnNU3X6WQrC8L-MKjZbliQ` |
| Run App as a New Task | POST | `/public/api/v3/tasks.run.app` | `conn_mod_def::GJ6CBgpgWKw::GnA0oZyfT7WKpp0RBlq5rA` |
| Run Python Script as a New Task | POST | `/public/api/v3/tasks.run.python` | `conn_mod_def::GJ6CBt44l2U::f86eyhutSmGafC5ODOrN-Q` |
| Send a Direct Request to a Task | POST | `/public/api/v3/tasks.request.direct` | `conn_mod_def::GJ6CArU7cJM::1sBUM43QSZ-0Z0tyMD6MuQ` |
| Send a Request to a Task | POST | `/public/api/v3/tasks.request` | `conn_mod_def::GJ6CAk7rNPU::OrXOWhBlRjKifKB6dT8NuQ` |

8 more Tasks actions are available through search.

### Figures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Figure Info | GET | `/figures.info` | `conn_mod_def::GJ6Bc634JkA::Bp7zydMhSfi1ZUB0vKoIhg` |
| List Figures | GET | `/public/api/v3/figures.list` | `conn_mod_def::GJ6BdCdus4A::FwG0cSsxSrKfj1e60gVPiA` |
| Update a Figure’s Custom Data | GET | `/public/api/v3/figures.custom-data.update` | `conn_mod_def::GJ6BcyIcNsA::BJ9uIYswTVSXhS54k0i8zQ` |
| Add Annotation Duration to a Figure | PUT | `/public/api/v3/figures.add-annotation-duration` | `conn_mod_def::GJ6Bd7T1HEM::crYor-GDRrukSKoNY8N9Iw` |
| Bind Figures | POST | `/public/api/v3/figures.bind` | `conn_mod_def::GJ6BcOyW2hU::4csrGVkJSnqQJl40yYE8YA` |
| Bulk Create Figures (Add Figures to an Entity) | POST | `/public/api/v3/figures.bulk.add` | `conn_mod_def::GJ6Bcqxm5lE::KHlZ57Y_R8eSh-_xwDy2sg` |
| Bulk Download Figures Geometry | POST | `/public/api/v3/figures.bulk.download.geometry` | `conn_mod_def::GJ6BdS9nDiw::tgBEVV_nRxaaMWXu1g3vMA` |
| Bulk Upload Figures Geometry | POST | `/public/api/v3/figures.bulk.upload.geometry` | `conn_mod_def::GJ6BdhNTeiI::yqAnkvlUSpyUxozM5oHfXA` |
| Clone Figures | PUT | `/public/api/v3/figures.clone` | `conn_mod_def::GJ6BcWXPn-Q::sN9VWtWlTI2FRz4v9EtTbQ` |
| Convert Bitmap Figures to Polygons | PUT | `/public/api/v3/figures.convert.bitmap-to-polygon` | `conn_mod_def::GJ6BcjXK4II::MO50CM7FS8aG2mHScy7S5g` |
| Download a Figure's Geometry | POST | `/public/api/v3/figures.download.geometry` | `conn_mod_def::GJ6BdrA4Ltw::usVpeeR3TN-GNXITvF7HUg` |
| Remove a Figure | DELETE | `/public/api/v3/figures.remove` | `conn_mod_def::GJ6BeJyv0WE::Y_65RfR0Q-OljcNNQ2K9MA` |

6 more Figures actions are available through search.

### FileStorage

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a File (or Folder Archive) from Team File Storage | GET | `/public/api/v3/file-storage.download` | `conn_mod_def::GJ6BftBgvXM::x8bLDcNsS8mbPciyhjPUuA` |
| Download Files from File Storage (Bulk) | GET | `/public/api/v3/file-storage.bulk.download` | `conn_mod_def::GJ6Bf3hEv18::gYtzjNkPTw6-taN7YBG-tw` |
| Get Storage File Info | GET | `/public/api/v3/file-storage.info` | `conn_mod_def::GJ6Bf-kmnww::gFzqOGgSQ7600qv62VpwmQ` |
| List a Team's File Storage (v2) | GET | `/file-storage.v2.list` | `conn_mod_def::GJ6BgXiyUg4::UNYiWXN7QsWFMh4MzYVb2g` |
| List File Storage | GET | `/public/api/v3/file-storage.list` | `conn_mod_def::GJ6BgNDAiPw::C0f-nXSpTDiFT1rZSwLe8g` |
| Bulk Add Files from Entities to Team Storage | POST | `/public/api/v3/file-storage.bulk.add-from-entities` | `conn_mod_def::GJ6BfLGvDYE::HEJlNJBwTAmu-BcPm0-OVA` |
| Bulk Add Files from URLs to a Team Storage | POST | `/public/api/v3/file-storage.bulk.add-from-links` | `conn_mod_def::GJ6BfZdPfXc::X4htbhhMQU6mDC_nBhjp7g` |
| Bulk Remove Files or Folders from File Storage | DELETE | `/public/api/v3/file-storage.bulk.remove` | `conn_mod_def::GJ6Bh3FHNfQ::SvB35VUqRbKSjTvD-67--Q` |
| Bulk Upload Files to a Team’s File Storage | POST | `/public/api/v3/file-storage.bulk.upload` | `conn_mod_def::GJ6BghqCBk8::YXe0HhijT4ODHUno0QWADg` |
| Copy Files in File Storage | POST | `/public/api/v3/file-storage.copy` | `conn_mod_def::GJ6Bfg70pvg::iENTjyndQAGK_hsnbAiNPA` |
| Get Resumable Upload Status (File Storage) | POST | `/file-storage.resumable_upload.status` | `conn_mod_def::GJ6Bha4FjZc::Blx1c0hDSAaQUnc0Pm-jQw` |
| Remove a File or Folder from File Storage | DELETE | `/file-storage.remove` | `conn_mod_def::GJ6Bhr7Flc0::18BucO1GThuVFrBooDEpOA` |

5 more FileStorage actions are available through search.

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Image by ID | GET | `/public/api/v3/images.download` | `conn_mod_def::GJ6BjVhgFu8::9TCUyyTSRRK7Q2xeAkld4g` |
| Download Images by Hashes | GET | `/public/api/v3/images.bulk.download-by-hash` | `conn_mod_def::GJ6Bj0SjowE::RzzGmPXTQR-djqERFLKqoQ` |
| Download Images in Bulk | GET | `/public/api/v3/images.bulk.download` | `conn_mod_def::GJ6BjeqMrVk::hhk1Sf7KTpC2M2vCpz_ClA` |
| Get a Page of Images | GET | `/public/api/v3/images.get-page` | `conn_mod_def::GJ6BkDOYIYY::oicyqGrJRQ61inw2gLviXw` |
| Get Image Info by ID | GET | `/images.info` | `conn_mod_def::GJ6BkLIj-LQ::GpwfzCVMQCme6R6W9Y3LAg` |
| List Image Stats in a Dataset | GET | `/public/api/v3/images.list.stats` | `conn_mod_def::GJ6BkSibrec::T5gEdeOCQZu64izTNMlzVg` |
| List Images | GET | `/public/api/v3/images.list` | `conn_mod_def::GJ6Bk5nc99E::i-YJX5T5Tm2GRnCNo2xQpA` |
| Set Custom Sort for Images (Bulk) | GET | `/public/api/v3/images.bulk.set-custom-sort` | `conn_mod_def::GJ6Bj7ecGQQ::96ArlI7BTO6X6vfRQMwslQ` |
| Add Images to a Dataset (Bulk) | POST | `/public/api/v3/images.bulk.add` | `conn_mod_def::GJ6BjHQASlE::JMQRYfb4QZeiRK1hAwDuvQ` |
| Bulk Upload Images | POST | `/public/api/v3/images.bulk.upload` | `conn_mod_def::GJ6BlLXM9aM::U2n0a8kpRQ-H6BC0CpgphA` |
| Remove Images (Bulk) | DELETE | `/public/api/v3/images.bulk.remove` | `conn_mod_def::GJ6Bl4pzSqE::vOeBkS9tQPeK3cOyWEjoDg` |
| Update an Image’s Info | PUT | `/public/api/v3/images.editInfo` | `conn_mod_def::GJ6BmDj5JZw::uicLUsQ4QYOWeLl1z7bm4g` |

4 more Images actions are available through search.

### Jobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Job’s Info | GET | `/public/api/v3/jobs.info` | `conn_mod_def::GJ6BqrnPs-0::V_RjLxVcTbqgqIiR7jB7Og` |
| Get Job Annotation Stats | GET | `/public/api/v3/jobs.stats` | `conn_mod_def::GJ6Bq88smZk::_apJcq3CQguoyU-BVDhAPw` |
| List Jobs | GET | `/public/api/v3/jobs.list` | `conn_mod_def::GJ6Bq1yhCA4::oOgRSajWSmiKbO22gHz7cg` |
| Archive a Job by ID | PUT | `/public/api/v3/jobs.archive` | `conn_mod_def::GJ6Br5I-N_Y::gYzVSaiQRAmDKoZZEJ1OVw` |
| Bulk Archive Jobs | PUT | `/public/api/v3/jobs.bulk.archive` | `conn_mod_def::GJ6BsAKY-80::6JiTXO28QcGLB7M-xZUzEw` |
| Bulk Unarchive Jobs | PUT | `/public/api/v3/jobs.bulk.unarchive` | `conn_mod_def::GJ6BsYvvfug::5bubK7uSRJu8z529Qf0F-g` |
| Create Jobs | POST | `/public/api/v3/jobs.add` | `conn_mod_def::GJ6BqKlfhi0::vU4FVENdSZq8NCyXWt5XMg` |
| Edit a Job’s Info | PUT | `/public/api/v3/jobs.editInfo` | `conn_mod_def::GJ6BqkzN1ms::QSMvVSbtT0my5p5UlH9qbw` |
| Pause a Job | POST | `/public/api/v3/jobs.pause` | `conn_mod_def::GJ6BrhrCSuc::FdYJ-3k0QfiylNKS2ELe7Q` |
| Reject a Job's Annotations | POST | `/public/api/v3/jobs.reject` | `conn_mod_def::GJ6BrpNR2mM::cFnFwDVOTYykvAwAX26Q6w` |
| Remove Jobs in Bulk | DELETE | `/jobs.bulk.remove` | `conn_mod_def::GJ6BqYcFKtg::aVrZlDgDTi6DAU6_Zcrn0A` |
| Restart a Job | POST | `/public/api/v3/jobs.restart` | `conn_mod_def::GJ6BryM-c9s::lkLUJ4u4QgWgK4aZCR4lLg` |

4 more Jobs actions are available through search.

### Projects

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Project’s Info | GET | `/projects.info` | `conn_mod_def::GJ6B4IWHI3o::Abymvm6FSIKeRoYHK5Bt2w` |
| Get a Project’s Meta | GET | `/projects.meta` | `conn_mod_def::GJ6B4k6tctw::W_yjshmOSiiYOYYfq6ENkg` |
| Get a Project's Stats | GET | `/projects.stats` | `conn_mod_def::GJ6B40XJ7bI::RUY7WGUcS_qs0ZvTFYa3Jw` |
| List a Workspace’s Project Statistics | GET | `/public/api/v3/projects.list.stats` | `conn_mod_def::GJ6B4cqPu-k::ifnbm7yWSfyTWR2tRMvjEQ` |
| List Projects | GET | `/public/api/v3/projects.list` | `conn_mod_def::GJ6B4ULl7P0::TUgPr4KfTn2CsSy8uTSUVw` |
| Update a Project's Settings | GET | `/public/api/v3/projects.settings.update` | `conn_mod_def::GJ6B4se5_Kw::h1sUTGDPTc-AdbXcGxuSBg` |
| Clone a Project | POST | `/public/api/v3/projects.clone` | `conn_mod_def::GJ6B244KCZI::MqvoixO2Tz2qrb_TOMd7uw` |
| Create a Project | POST | `/public/api/v3/projects.add` | `conn_mod_def::GJ6B2_-p91s::qLdFXZVETuCPWpjpsKOjWw` |
| Generate Project Statistics | POST | `/projects.generate-project-statistics` | `conn_mod_def::GJ6B5-UhO4Q::gZx14v8QR86C4MnpEMG-_w` |
| Move a Project to a Workspace | POST | `/public/api/v3/projects.workspace.set` | `conn_mod_def::GJ6B53C7ehk::xB4RPA-uRH-mc2ELhBJJqg` |
| Remove a Project | DELETE | `/projects.remove` | `conn_mod_def::GJ6B6Oq5ot4::fCt7stSeRB-RO6PlYKxaNg` |
| Remove Projects Permanently | DELETE | `/public/api/v3/projects.remove.permanently` | `conn_mod_def::GJ6B6Wq3jFw::u17Mn4FgQxKC_H4AMe_qSg` |

4 more Projects actions are available through search.

### Videos

| Action | Method | Path | Action id |
|---|---|---|---|
| Download a Video | GET | `/public/api/v3/videos.download` | `conn_mod_def::GJ6CE_K-XeM::AeZM7HczS6yiQ06Ekg7r_A` |
| Download a Video Frame | GET | `/public/api/v3/videos.download-frame` | `conn_mod_def::GJ6CEsPQbdI::6JzIQB1dRKKiwDcMvmyHYg` |
| Download Frames by Video ID (Bulk) | GET | `/public/api/v3/videos.bulk.download-frame` | `conn_mod_def::GJ6CE319aWA::hoWKQIo8TIGxgQRU8aKfWg` |
| Get a Video’s Annotated Intervals | GET | `/videos.annotated_intervals` | `conn_mod_def::GJ6CFPjErOM::1kz6J3nHQaOycdLV_nELTg` |
| Get Video Info | GET | `/public/api/v3/videos.info` | `conn_mod_def::GJ6CF6NhC_g::_CSF1ru4SZSNPxCf6PbJfw` |
| List Videos | GET | `/public/api/v3/videos.list` | `conn_mod_def::GJ6CGp9DQeY::fJfo0O8IQaKIpIy5i01n1w` |
| Set a Video’s Custom Data | GET | `/public/api/v3/videos.custom-data.set` | `conn_mod_def::GJ6CFxpNxME::KkLqVQ34QMmOIAc5mS5GHQ` |
| Add Videos to a Dataset (Bulk) | POST | `/public/api/v3/videos.bulk.add` | `conn_mod_def::GJ6CEgrvsUA::bpmOxVFJSU2xp07vj1uOoQ` |
| Bulk Upload Videos | POST | `/public/api/v3/videos.bulk.upload` | `conn_mod_def::GJ6CGyBaeYc::C9VXYcCdStGQ_YhH_Ppvrg` |
| Send a Message to the Annotation Tool (Videos) | POST | `/public/api/v3/videos.notify-annotation-tool` | `conn_mod_def::GJ6CHH9aRQo::ke9pl3mzT76u3m84ny6LcQ` |
| Stop Figure Tracking for a Video Track | PUT | `/videos.stop_figure_tracking` | `conn_mod_def::GJ6CHQhGlW4::Fu0_FSMuQzyT41IcTQscew` |
| Track Figures in a Video | PUT | `/public/api/v3/videos.track-figures` | `conn_mod_def::GJ6CHcKYXRw::3DVeR7oaS_mUbMmUriafjQ` |

2 more Videos actions are available through search.

### LabelingQueues

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Labeling Queue’s Annotation Stats | GET | `/public/api/v3/labeling-queues.stats` | `conn_mod_def::GJ6BrSxHLTE::piFFkzKUTfCCO732bM8WTA` |
| Get a Labeling Queue’s Entity Stats | GET | `/public/api/v3/labeling-queues.stats.entities` | `conn_mod_def::GJ6BraY_um0::3RAHaLneSYacb3UAaLPG0w` |
| Get a Labeling Queue's Info | GET | `/public/api/v3/labeling-queues.info` | `conn_mod_def::GJ6BwhckOWM::49cJoPljSrybsD9-TnFAVQ` |
| List Labeling Queues | GET | `/public/api/v3/labeling-queues.list` | `conn_mod_def::GJ6BwsG-zK8::9nQpnKkPTi2nseLaMubG5Q` |
| Skip a Labeling Queue Entity | GET | `/public/api/v3/labeling-queues.entities.skip` | `conn_mod_def::GJ6BwV6sz3k::YjycKks4SAW0Vk9sSLXfQQ` |
| Add Users to a Labeling Queue | POST | `/public/api/v3/labeling-queues.users.add` | `conn_mod_def::GJ6Bw7xjBYI::TzLFYIWKQGGj-peiI-hwYQ` |

4 more LabelingQueues actions are available through search.

This lists 90 of 427 actions. For anything not here, call `search_one_platform_actions` with platform `supervisely`. The full catalog is at https://www.withone.ai/knowledge/supervisely.

## When a call fails

The error comes from Supervisely, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/supervisely

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
