---
name: dropbox
description: Dropbox is a cloud storage platform that enables users to store, share, and collaborate on files and documents securely across devices and teams. Read and write Dropbox data through One: files, sharing, filerequests, sharedfolders, fileproperties, filepropertiestemplates and more, 121 actions with real parameter documentation. Use whenever the user asks to look something up in Dropbox, create or update a record there, or build code against the Dropbox API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: dropbox
  generated-from: one-knowledge-base
---

# Dropbox through One

Dropbox is a cloud storage platform that enables users to store, share, and collaborate on files and documents securely across devices and teams.

One exposes Dropbox through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `dropbox` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Dropbox is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Dropbox account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Check a Batch Delete Job Status | POST | `/2/files/delete_batch/check` | `conn_mod_def::GJ2YeS_a5Ak::ln1Bg0g8Qiqrjo8RnC6C3A` |
| Check a Create Folder Batch Job Status | POST | `/files/create_folder_batch/check` | `conn_mod_def::GJ2Yd2MAUnA::Sjrvu6a7QvuQUvxLZj0mXA` |
| Check Status of a Move Batch v2 Job | POST | `/files/move_batch/check_v2` | `conn_mod_def::GJ2Ygtd6zGw::pMJU5wB1TvGCUA5TekZDGA` |
| Continue Listing a Folder | POST | `/files/list_folder/continue` | `conn_mod_def::GJ2Yfz0tWEc::FiSFqMwYRwWkwIOpR-Bj5g` |
| Copy a File or Folder | POST | `/2/files/copy_v2` | `conn_mod_def::GJ2YXnRvxVc::xocmINTQRVCsJWOhLBDVXQ` |
| Copy Multiple Files or Folders (Batch, v2) | POST | `/2/files/copy_batch_v2` | `conn_mod_def::GJ2YXy5oHIo::ertEyamBQ_e2om-8yPVKVg` |
| Delete a File or Folder | POST | `/2/files/delete_v2` | `conn_mod_def::GJ2Yd-EbMzc::5qFJ0RLjTH-ST3MbuIFcug` |
| Delete Multiple Files/Folders (Batch) | POST | `/2/files/delete_batch` | `conn_mod_def::GJ2YeHC2rUY::fVjyPaMzQxS9d9cWFyfibA` |
| Download a File | POST | `/files/download` | `conn_mod_def::GJ2YebAmTy0::ufbX-_tvSOePcDqblDuPLg` |
| Download a Folder as a ZIP File | POST | `/files/download_zip` | `conn_mod_def::GJ2Yek4tqrs::xVZNqdrqRUmkVUbEZtOGSg` |
| Export a File | POST | `/files/export` | `conn_mod_def::GJ2YesPdC2I::Ztd7vzMQRZei_WNw-N3ukQ` |
| Finish a File Upload Session (Commit Uploaded Data) | POST | `/2/files/upload_session/finish` | `conn_mod_def::GJ2YoaCU9q4::rOQW3wkXR3aedsPj9Zuj5g` |

19 more Files actions are available through search.

### Sharing

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Members to a File | POST | `/sharing/add_file_member` | `conn_mod_def::GJ2YpNp1ORw::OyH6FBKrShyXO7E8ffcXNg` |
| Check Status of a Share Folder Async Job | POST | `/sharing/check_share_job_status` | `conn_mod_def::GJ2YpuzRCB4::rduiEVGiRVifHZtexBdn7w` |
| Download a Shared Link’s File Content | POST | `/sharing/get_shared_link_file` | `conn_mod_def::GJ2Yqo-QkFA::bv1EctseTmqRXPi7ZAXMRQ` |
| Get Shared File Metadata | POST | `/sharing/get_file_metadata` | `conn_mod_def::GJ2YqQL3Bjc::3wf2s2rgSSWvHGnGBx7WHw` |
| Get Shared Link Metadata | POST | `/2/sharing/get_shared_link_metadata` | `conn_mod_def::GJ2Yqw4Npck::DxcEtMUDTSOlWGdAyjxGcA` |
| List a Shared File’s Members | POST | `/sharing/list_file_members` | `conn_mod_def::GJ2Yq5MDzxY::L2PPyxX3SsGVdKsgh00l6Q` |
| List Members of a Shared Folder | POST | `/sharing/list_folder_members` | `conn_mod_def::GJ2YrQvQcH0::jH95BlzbS5qadqL324d_rw` |
| List Mountable Shared Folders for the Current User | POST | `/sharing/list_mountable_folders` | `conn_mod_def::GJ2YrypPsXo::MnU9X589SPGXFS1dVfwljg` |
| Mount a Shared Folder for the Current User | POST | `/sharing/mount_folder` | `conn_mod_def::GJ2YsjowF7E::GVmwCrjnRRCSt-7nh6Y9Ig` |
| Relinquish the Current User’s Membership in a Shared File | POST | `/sharing/relinquish_file_membership` | `conn_mod_def::GJ2YsruJT5A::en572ZIVRqG_cj0sCVNpKQ` |
| Relinquish the Current User’s Membership in a Shared Folder | POST | `/sharing/relinquish_folder_membership` | `conn_mod_def::GJ2Ys0Zeym0::QYFJ5eLmT3my6J1HTfZZYQ` |
| Remove a Member From a Shared File | POST | `/sharing/remove_file_member_2` | `conn_mod_def::GJ2Ys84hqts::SwM5bXa0Tbuni7vF1YzyDQ` |

6 more Sharing actions are available through search.

### FileRequests

| Action | Method | Path | Action id |
|---|---|---|---|
| Continue Listing File Requests (Pagination Cursor) | POST | `/file_requests/list/continue` | `conn_mod_def::GJ2YXY5DlkU::jL_WkJHFSjugY_j0FOX2Vg` |
| Count a User's File Requests | POST | `/file_requests/count` | `conn_mod_def::GJ2YWg-eUfE::ZvHBE5yxTh6z4tysfgnBqw` |
| Create a File Request | POST | `/file_requests/create` | `conn_mod_def::GJ2YWocfsZw::Vd8H8wE9RLy21d-O4f3sCw` |
| Delete All Closed File Requests (Owned by the Authenticated User) | POST | `/2/file_requests/delete_all_closed` | `conn_mod_def::GJ2YW7UMsY4::T29Ohh-cRD2TgWEHoPnqwA` |
| Delete Closed File Requests (Batch) | POST | `/2/file_requests/delete` | `conn_mod_def::GJ2YWwOPrf4::ajyekdGKTda6_8p8zUvTGA` |
| Get a File Request | POST | `/file_requests/get` | `conn_mod_def::GJ2YXDfUU2E::n504-Rz1SZa1_S0VYvXCYg` |
| List File Requests (v2) | POST | `/file_requests/list_v2` | `conn_mod_def::GJ2YXM2pGuk::ewyuPq31QzqLry7gQXTa2w` |
| Update a File Request | POST | `/file_requests/update` | `conn_mod_def::GJ2YXgic3BA::d2Fdk0QUSEibArSdiyKZVw` |

### SharedFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Members to a Shared Folder | POST | `/sharing/add_folder_member` | `conn_mod_def::GJ2YpV_F-MM::WGW0uKeaTuuLLiFctxyoZg` |
| Get Shared Folder Metadata | POST | `/sharing/get_folder_metadata` | `conn_mod_def::GJ2YqfYlxi4::LO4qV3n6TU2mqsWGcrcwFQ` |
| List Shared Folders (Continue Pagination) | POST | `/sharing/list_folders/continue` | `conn_mod_def::GJ2YrqfnJGA::AP8Lu7-LTFSF-ced-AnFQw` |
| List Shared Folders Accessible to the Current User | POST | `/sharing/list_folders` | `conn_mod_def::GJ2YresdMN0::n7Mn_fkMRzCluhhdE-pYRg` |
| Remove a Shared Folder Member | POST | `/sharing/remove_folder_member` | `conn_mod_def::GJ2YtE3dwyI::t72xudLZTTS9jnclSfO7dQ` |
| Unshare a Shared Folder | POST | `/sharing/unshare_folder` | `conn_mod_def::GJ2YuCj4lf8::sbHC_VuhSqCjrNATtTyzpw` |
| Update a Shared Folder Member’s Permissions | POST | `/sharing/update_folder_member` | `conn_mod_def::GJ2YuTKnSPI::_1EIljlNTMCuVvmtq8q8pQ` |
| Update a Shared Folder’s Sharing Policies | POST | `/sharing/update_folder_policy` | `conn_mod_def::GJ2YueQXnOk::4k60eEY9RGW2lOlNqdz1sg` |

### FileProperties

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Property Groups to a File | POST | `/file_properties/properties/add` | `conn_mod_def::GJ2YU_dElAg::u9PZSHqqRKStlVqgjg5xsg` |
| Overwrite a File’s Property Groups | POST | `/2/file_properties/properties/overwrite` | `conn_mod_def::GJ2YVLSUq0k::Yv3kB93CQziOAD_jStdb_g` |
| Remove Property Groups From a File or Folder | POST | `/file_properties/properties/remove` | `conn_mod_def::GJ2YVSgnl_Y::b9tu3mPtS_WVVtGCN7h9jQ` |
| Search File Properties Across Templates | POST | `/file_properties/properties/search` | `conn_mod_def::GJ2YVb1tGnk::2a9qz63TT_aNZQIsKZfDRw` |
| Update File Properties (Apply Property Group Deltas) | POST | `/2/file_properties/properties/update` | `conn_mod_def::GJ2YVr7h0Xo::GtErXtgBQh2OfBhi_ufCSA` |

### FilePropertiesTemplates

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a User Property Template (Add for User) | POST | `/2/file_properties/templates/add_for_user` | `conn_mod_def::GJ2YV0Zn-lY::6FOZd3LiRKK9kyQFtGmnNA` |
| Get a User’s File Properties Template Schema | POST | `/file_properties/templates/get_for_user` | `conn_mod_def::GJ2YV9FbEGM::kBIfckb9TU-SjSKNgyOQGQ` |
| List a User's File Properties Templates | POST | `/file_properties/templates/list_for_user` | `conn_mod_def::GJ2YWFR91oo::pq5ElyFMRaaqZYXo71aQyg` |
| Permanently Remove a File Properties Template for a User | POST | `/file_properties/templates/remove_for_user` | `conn_mod_def::GJ2YWNmRRT8::uYOmZBcwQROpQalmxNaofw` |
| Update a User's File Properties Template | POST | `/file_properties/templates/update_for_user` | `conn_mod_def::GJ2YWZEcmpM::AOqpdKzcSpimPRGTDCrSzw` |

### UploadSessions

| Action | Method | Path | Action id |
|---|---|---|---|
| Append Data to an Upload Session (v2) | POST | `/files/upload_session/append_v2` | `conn_mod_def::GJ2YoJHMm7Q::GO1vB-5lQCar-dnrRGaMWQ` |
| Finish a Batch of Dropbox Upload Sessions | POST | `/files/upload_session/finish_batch_v2` | `conn_mod_def::GJ2Yohi2kVA::YEgtNfOmQsqIVzmCOuT74w` |
| Start a Batch of File Upload Sessions | POST | `/2/files/upload_session/start_batch` | `conn_mod_def::GJ2Yo5xxOMA::LhqR6Zr3SpGMJ7e5HvU2Pg` |
| Start a File Upload Session | POST | `/files/upload_session/start` | `conn_mod_def::GJ2Yox8AJbY::v4eSeINAST2YUyFS4wEpNw` |

### SharedLinks

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Shared Link with Custom Settings | POST | `/sharing/create_shared_link_with_settings` | `conn_mod_def::GJ2Yp3P3TE0::zxW2u67VRESBpur5eI5n5Q` |
| List a User’s Shared Links | POST | `/2/sharing/list_shared_links` | `conn_mod_def::GJ2YsT30lQ4::sKiA8MS0Q2GY0Kpq34sVng` |
| Modify a Shared Link’s Settings | POST | `/sharing/modify_shared_link_settings` | `conn_mod_def::GJ2YsbrZhYc::KN5bZEL8SZ2yAzLgymgtsA` |
| Revoke a Shared Link | POST | `/sharing/revoke_shared_link` | `conn_mod_def::GJ2YtM3lGV0::QPhtcRNcQdepTiXVgJi0pg` |

### Users

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Dropbox Account Information (by account_id) | POST | `/users/get_account` | `conn_mod_def::GJ2YutQP3cY::wwM-WrkLRfiUdAOyNeRjWg` |
| Get Account Information for Multiple Users (Batch) | POST | `/2/users/get_account_batch` | `conn_mod_def::GJ2Yu3FC39M::oG5l-p5UQDyLsMI350dn4w` |
| Get Current Account Information | POST | `/2/users/get_current_account` | `conn_mod_def::GJ2YvAext8M::H0SfAK74QwqrMYyShN7RdA` |
| Get Current User Space Usage | POST | `/users/get_space_usage` | `conn_mod_def::GJ2YvIaRt0I::5-t-rwB6QEmCTxOW4-jVdg` |

### FilesTags

| Action | Method | Path | Action id |
|---|---|---|---|
| Add a Tag to an Item | POST | `/files/tags/add` | `conn_mod_def::GJ2YiKQ00xc::ri-ZFF9bTAWVeO0b92ZZSA` |
| Get Tags for Items | POST | `/files/tags/get` | `conn_mod_def::GJ2YngoHsxE::6ZeLnPY5TZ2GQ7OdU6xsgw` |
| Remove a Tag from an Item | POST | `/files/tags/remove` | `conn_mod_def::GJ2YnrmLEqY::vb55fMURSz6_M6BIzbOEGQ` |

### Contacts

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete a Batch of Manual Contacts | POST | `/contacts/delete_manual_contacts_batch` | `conn_mod_def::GJ2YU2WRKCM::ivrg5Lh9RqarxikHGNuSsg` |
| Delete Manually Added Contacts | POST | `/contacts/delete_manual_contacts` | `conn_mod_def::GJ2YUr5HVjU::xe-juzXxRMStH8H5w52Nlw` |

### CopyReferences

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Copy Reference to a File or Folder | POST | `/files/copy_reference/get` | `conn_mod_def::GJ2YdTKx7OU::WOV5d-SoS3ap6ZU-shIv9Q` |
| Save a Copy Reference to the User's Dropbox | POST | `/2/files/copy_reference/save` | `conn_mod_def::GJ2YdeiLsto::PltW8LaZSXiDYlRZWoUmmg` |

### Folders

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Batch of Folders | POST | `/files/create_folder_batch` | `conn_mod_def::GJ2Ydu6ZEHA::GKqCVOXrQJWSsPt_KJoZ1g` |
| Create a Folder | POST | `/2/files/create_folder_v2` | `conn_mod_def::GJ2YdnMrAsE::I0w956lORs-OypEXdfcy3A` |

### ReceivedFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Continue Listing Received Files | POST | `/sharing/list_received_files/continue` | `conn_mod_def::GJ2YsMBMVHs::uP7yabQJQjG4Ce8sY4QQhg` |
| List Received Files Shared With the Current User | POST | `/sharing/list_received_files` | `conn_mod_def::GJ2YsED9Hhc::CY8PAVnORWO-MudlJAqN0A` |

### PaperDocs

| Action | Method | Path | Action id |
|---|---|---|---|
| Create a Dropbox Paper Doc | POST | `/files/paper/create` | `conn_mod_def::GJ2Yg2OLF-8::iyBw8CYKRI-KCtZNbf4hCA` |
| Update a Paper Doc | POST | `/files/paper/update` | `conn_mod_def::GJ2Yg_ZCyz8::9Bdv2LqjRA-AqOK7pwZGjQ` |

### AccountPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Account Photo | POST | `/2/account/get_photo` | `conn_mod_def::GJ2YUFLUjWY::xsTIq1chTNG4-U8rq3o0Rw` |

### Account

| Action | Method | Path | Action id |
|---|---|---|---|
| Set a User’s Profile Photo | POST | `/2/account/set_profile_photo` | `conn_mod_def::GJ2YUMf5Vug::gJnzdDj0SKOl7ubIQSMzOA` |

### CopyBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Status of a Copy Batch Job (V2) | POST | `/files/copy_batch/check_v2` | `conn_mod_def::GJ2YdMJIm8E::NQhS-dHiTzaVDJUpE79DmA` |

### SaveUrlJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Save URL Job Status | POST | `/files/save_url/check_job_status` | `conn_mod_def::GJ2YhpDvRV8::1K8ERzX9SBiLMbkGXkG0bg` |

### UploadSessionFinishBatchJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Check Status of an Upload Session Finish Batch Job | POST | `/files/upload_session/finish_batch/check` | `conn_mod_def::GJ2Yopo2BHM::TKEExQRHTn6Mrkn0Z61znQ` |

### SharedFileMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Shared File Metadata (Batch) | POST | `/2/sharing/get_file_metadata/batch` | `conn_mod_def::GJ2YqYuclYQ::KqiP8NEDRZyzNOSYQuKe6Q` |

### FileMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Members of Multiple Files (Batch) | POST | `/sharing/list_file_members/batch` | `conn_mod_def::GJ2YrBBwyZQ::faISMoIuRu-Ti9MwexKPyQ` |

### SharedFileMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shared File Members (Continue Pagination) | POST | `/sharing/list_file_members/continue` | `conn_mod_def::GJ2YrI4-C04::vSwlU3oRT1OCNiN3MEpTuA` |

### SharedFolderMembers

| Action | Method | Path | Action id |
|---|---|---|---|
| List Shared Folder Members (Continue Pagination) | POST | `/sharing/list_folder_members/continue` | `conn_mod_def::GJ2YrX_sL6I::NyKMIhb0QG-U8sODBir9Dw` |

### UserFeatures

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Feature Values for the Current User Account | POST | `/2/users/features/get_values` | `conn_mod_def::GJ2Yuk4jX3U::vDQzlBYwSeyRJt1XdisItw` |

### AuthToken

| Action | Method | Path | Action id |
|---|---|---|---|
| Revoke the Current Access Token | POST | `/2/auth/token/revoke` | `conn_mod_def::GJ2YUUHIX-4::48cI2bQ6SF6D8HUugOCQsw` |

### CheckApp

| Action | Method | Path | Action id |
|---|---|---|---|
| Check App Authentication (Echo) | POST | `/2/check/app` | `conn_mod_def::GJ2YUb70onY::zEXcZSJWR3OdJ1BFPPzfqQ` |

### CheckUser

| Action | Method | Path | Action id |
|---|---|---|---|
| Check User Authentication (Echo Test) | POST | `/2/check/user` | `conn_mod_def::GJ2YUkOfs7E::MfAHaJH2QzO6tO_WJEc4xw` |

### FilePropertiesSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Continue a File Properties Search | POST | `/2/file_properties/properties/search/continue` | `conn_mod_def::GJ2YVjuV2xc::OvPu8QH5QbmH12fptRTl7g` |

### Thumbnails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Thumbnails for a Batch of Files | POST | `/files/get_thumbnail_batch` | `conn_mod_def::GJ2YfkEbIMU::o-vdqQiMS4WVFFY2k6_sbA` |

This lists 90 of 121 actions. For anything not here, call `search_one_platform_actions` with platform `dropbox`. The full catalog is at https://www.withone.ai/knowledge/dropbox.

## When a call fails

The error comes from Dropbox, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/dropbox

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
