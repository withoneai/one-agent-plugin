---
name: outlook-mail
description: An email platform that offers robust inbox organization, integrated calendar functionality, and enterprise-grade security for both individuals and organizations. Read and write Outlook Mail data through One: messages, mailfolders, messageextensions, messagerules, attachments, messageattachments and more, 278 actions with real parameter documentation. Use whenever the user asks to look something up in Outlook Mail, create or update a record there, or build code against the Outlook Mail API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: outlook-mail
  generated-from: one-knowledge-base
---

# Outlook Mail through One

An email platform that offers robust inbox organization, integrated calendar functionality, and enterprise-grade security for both individuals and organizations.

One exposes Outlook Mail through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `outlook-mail` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Outlook Mail is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Outlook Mail account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Messages

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Messages in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/$count` | `conn_mod_def::GMIYwkoSbgQ::_BYZvMFxThKK-zoweL5u6Q` |
| Delta Messages for the Signed-in User | GET | `/v1.0/me/messages/microsoft.graph.delta()` | `conn_mod_def::GMIYyZPGtXU::36XEPOMNQn61_ElgxJZx3w` |
| Delta Messages in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/microsoft.graph.delta()` | `conn_mod_def::GMIYyQYVa3w::12ov3UsyRLyuTD7lAg7UDw` |
| Delta Messages in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GMIYyQA6TWk::GyZb5kHdTgKObfjpdkvc4A` |
| Delta Query a User’s Messages | GET | `/users/{{userId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GJ58zben6Ac::HYh0kRdhT02HufjETZnCQA` |
| Delta Query Messages in a User’s Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/microsoft.graph.delta()` | `conn_mod_def::GJ58xkp8RkE::7iO1yW_lQf29P4Pywc8RvQ` |
| Get a Message for the Signed-in User | GET | `/v1.0/me/messages/{{messageId}}` | `conn_mod_def::GMIYwjHgCAs::cvBtMvGiSnS7ZRG8Sj-trw` |
| Get a Message from a Signed-in User's Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}` | `conn_mod_def::GMIYwZmNbLA::YAuzPZSxS4ewj9-b7V9aog` |
| Get a Message in a User’s Mail Folder Child Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}` | `conn_mod_def::GJ58v94mg14::CTzaeR5NTuCucT19GyYntQ` |
| Get a User Mail Folder Child Folder Message MIME Content | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/$value` | `conn_mod_def::GJ58vsiMJt0::i8fRV0EjRhKBuwpnVi4bow` |
| Get a User Mail Folder Message MIME Content | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/$value` | `conn_mod_def::GJ58vuZ9lfg::VTk_e9PbQFqfDCYsj3ITkw` |
| Get a User Message’s MIME Content | GET | `/users/{{userId}}/messages/{{messageId}}/$value` | `conn_mod_def::GJ58yhusQDU::HxiwBNQ9SoqzCdeZUFKKPw` |

98 more Messages actions are available through search.

### MailFolders

| Action | Method | Path | Action id |
|---|---|---|---|
| Delta Child Folders Using Me MailFolders | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/microsoft.graph.delta()` | `conn_mod_def::GMIYyPp8vKI::4n6_I3cWRIOkZ0wb2NYrHQ` |
| Delta Mail Folders for the Signed-in User | GET | `/v1.0/me/mailFolders/microsoft.graph.delta()` | `conn_mod_def::GMIYyYd5jZ8::stu6d5GaQTqhcWIt1rtdgw` |
| Delta Query a Mail Folder’s Child Folders (Mail Folder Delta) | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/microsoft.graph.delta()` | `conn_mod_def::GJ58xisTRuk::Eg0FkDm3SRmbsZ4yTyoimQ` |
| Get a Child Folder from a Signed-In User's Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}` | `conn_mod_def::GMIYv5vI9YE::S9cqjod8TGuUgLvlvShQjA` |
| Get a Mail Folder’s Child Folder Count for a User | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/$count` | `conn_mod_def::GJ58wWEcoOg::G6Rp4vyoRKS_RzxDK4Jy7A` |
| Get a User Mail Folder’s Child Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}` | `conn_mod_def::GJ58vhGtbkw::6v65InlvRo2m4n-PCVhuUA` |
| Get a User’s Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}` | `conn_mod_def::GJ58vuE8Ajs::3bNCMs7LQd2_6iDr6HnBrA` |
| Get a User's Mail Folder Count | GET | `/users/{{userId}}/mailFolders/$count` | `conn_mod_def::GJ58wNXiM1I::ce8SimVqQTGpAgk8bH7mag` |
| Get Count of Child Folders in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/$count` | `conn_mod_def::GMIYw6hkQhE::y6gueiDqQ8OPcLoIwHaRpA` |
| Get Count of Mail Folders | GET | `/v1.0/me/mailFolders/$count` | `conn_mod_def::GMIYwxB4Eb4::L2_POD_sSruJ2XRV0CwoZQ` |
| Invoke Mail Folder Delta for a User (Track Changes) | GET | `/users/{{userId}}/mailFolders/microsoft.graph.delta()` | `conn_mod_def::GJ58xkp4FOc::Yy8JpAzHTO6AtvrVrLA8Yg` |
| List a User Mail Folder’s Child Folders | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders` | `conn_mod_def::GJ58vUb-W4A::OChKpkomSKu2tpNKrOMxlQ` |

23 more MailFolders actions are available through search.

### MessageExtensions

| Action | Method | Path | Action id |
|---|---|---|---|
| Count a Message's Extensions | GET | `/v1.0/me/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GMIYwzduPHw::83bPpByoQlqfzETFbKxzTg` |
| Count Message Extensions in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GMIYxL3zaR8::_-eGw8UjSWCAnOyR7SkC0w` |
| Get a Message Extension Count in a User’s Child Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GJ58wZuDfh0::5eIXQvvGQjmTYUScQ38Hng` |
| Get a Message Extension Count in a User’s Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GJ58wk5P7ps::a3HgwzhhSVOua8oCfP7OiQ` |
| Get a Message Extension for the Signed-in User | GET | `/v1.0/me/messages/{{messageId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIYwANIX7w::f3rqobdYTMSgC7L-HaN0LA` |
| Get a Message Extension from a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIYwBUR4w4::XJGSBlNxS4GfyK2IvEQX3Q` |
| Get a Message Extension from a Signed-in User's Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}/extensions/{{extensionId}}` | `conn_mod_def::GMIYwBu-0GI::6oxr8JyhSS6SGQotFyN67w` |
| Get a User Child Folder Message Extension | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/extensions/{{extensionId}}` | `conn_mod_def::GJ58viL_-3c::_nMQgCzVQxm0QZBWB43Ssw` |
| Get a User Message Extension | GET | `/users/{{userId}}/messages/{{messageId}}/extensions/{{extensionId}}` | `conn_mod_def::GJ58yNGq70Q::xS6ygTb2SVWidy4lOqy4SQ` |
| Get a User Message's Extensions Count | GET | `/users/{{userId}}/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GJ58yYOPEr8::Z_i_R7xiTSSasx43yJrlag` |
| Get Extension Count for a Message in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/extensions/$count` | `conn_mod_def::GMIYxF3J17I::hzpUWYVwS1ua1fD1FrwiyQ` |
| List a User MailFolder Message Extensions | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/extensions` | `conn_mod_def::GJ58vkxq0xY::Ozxs1joYSQqJIcAj78FmEA` |

20 more MessageExtensions actions are available through search.

### MessageRules

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Message Rules in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messageRules/$count` | `conn_mod_def::GMIYw6ikHJQ::7jerzgUlSYODxF0wwCZ7kw` |
| Get a Child Folder Message Rule | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules/{{messageRuleId}}` | `conn_mod_def::GMIYwSwJAzo::2AsdAgJuSg-U_q0Q3U09cw` |
| Get a Child Folder Message Rule for a User | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules/{{messageRuleId}}` | `conn_mod_def::GJ58wCp4ENE::fzq6haHqQ26cfJ39Lrkl_g` |
| Get a Message Rule from a Signed-in User's Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messageRules/{{messageRuleId}}` | `conn_mod_def::GMIYwTfFXRs::M32u7HgSShS-Z3_irjFXjQ` |
| Get a User Mail Folder Message Rule | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messageRules/{{messageRuleId}}` | `conn_mod_def::GJ58v7_6buM::FIGU_c_CRmC1jGVvs2-pvQ` |
| Get a User Mail Folder Message Rules Count | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messageRules/$count` | `conn_mod_def::GJ58wXDYXx4::LTcnYK-fTdCgDLVakAu3Uw` |
| Get Count of Message Rules in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules/$count` | `conn_mod_def::GMIYwzUag10::68XcyVptTE2pKAzXJ0EeMA` |
| Get the Count of Message Rules in a User’s Child Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules/$count` | `conn_mod_def::GJ58wMT_GAo::iUtu0HoXTvm5ZbfZ95m0Cw` |
| List a User Mail Folder’s Message Rules | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messageRules` | `conn_mod_def::GJ58v6pcHS4::FehQOazjSeCIr0yN9lAlTA` |
| List Message Rules in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules` | `conn_mod_def::GMIYwTGrV5c::Y5DqNsVnTRWiLPTGkdgj8w` |
| List Message Rules in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messageRules` | `conn_mod_def::GMIYwSM2EgU::Pp-Mh028Q8a-Gq_4Dc9z3w` |
| List Message Rules in a User’s Child Mail Folder | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messageRules` | `conn_mod_def::GJ58vtCt9ZQ::ZGPw0TeXTTOWemjcY9mqnQ` |

12 more MessageRules actions are available through search.

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Count Attachments for a Message | GET | `/v1.0/me/messages/{{messageId}}/attachments/$count` | `conn_mod_def::GMIYwzxvEFI::JjTPyDtWTgytEjs4iSq_Ug` |
| Count Attachments for a Message in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/$count` | `conn_mod_def::GMIYw7ZONjk::eNxhh7oZR8S3OEUEHST3pg` |
| Get a User MailFolder Message Attachment | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58vTc1PXc::14hFHBaPRQCL1dX0IkOuOA` |
| Get a User Message Attachment | GET | `/users/{{userId}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58yPQ2gcE::FI6N6Ox9QcKlzYgnURf8vg` |
| Get a User Message Attachment (in a Child Mail Folder) | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58vX6EjhI::PARmU6QcSMWJjYs86QCfOA` |
| Get Attachment From a Message in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIYvwityWs::_5ckxH9RQtODThZ43QdBnA` |
| Get the Count of a User Message’s Attachments (in a Mail Folder) | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments/$count` | `conn_mod_def::GJ58wW8wcR4::SgNmmXNJQKOKnE8R0NPR7g` |
| Get the Count of a User’s Message Attachments (in a Child Mail Folder) | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/$count` | `conn_mod_def::GJ58wLeCmVc::TZ_Frq3zReiufXm6z4MKeg` |
| List a User MailFolder Message's Attachments | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments` | `conn_mod_def::GJ58vWjkYac::Y_vCBwZYT52b-D2zl25ulA` |
| List a User Message's Attachments | GET | `/users/{{userId}}/messages/{{messageId}}/attachments` | `conn_mod_def::GJ58yNhYm6A::WF93kAntRXyUGMg_e1Xehg` |
| List a User Message’s Attachments (in a Child Mail Folder) | GET | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments` | `conn_mod_def::GJ58vTzcuf4::bv0On9IhStG370mpawgc6w` |
| List Attachments in a Message in a Child Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments` | `conn_mod_def::GMIYvwepm9g::V5NxH7x0Qge401AMdlDA4g` |

8 more Attachments actions are available through search.

### MessageAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Message Attachment | GET | `/v1.0/me/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIYv5eUOKg::4wcbjhkXT9WF4mnwdC3SBw` |
| Get a Message Attachment from a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIYvvESkek::FeFK1983RTSWeH0Oga-NWA` |
| Get a User Message’s Attachment Count | GET | `/users/{{userId}}/messages/{{messageId}}/attachments/$count` | `conn_mod_def::GJ58yX2nnoc::lImJyfZRRRaAUO5hPLJkpg` |
| List Message Attachments | GET | `/v1.0/me/messages/{{messageId}}/attachments` | `conn_mod_def::GMIYv43QGDY::5nNtKctRRRC42n-GdMZT4Q` |
| List Message Attachments in a Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments` | `conn_mod_def::GMIYvyG0jkk::8XBJzs07QaSOuyG1zziPhg` |
| Create an Upload Session for a Message Attachment (in a User’s Child Mail Folder) | POST | `/users/{{userId}}/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/microsoft.graph.createUploadSession` | `conn_mod_def::GJ58w5NmpFo::eZfa6QyNTb6G3OuTOZnXoA` |
| Create an Upload Session for a Message Attachment (in a User’s Mail Folder) | POST | `/users/{{userId}}/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments/microsoft.graph.createUploadSession` | `conn_mod_def::GJ58w5NnFcI::EDFyyjygSvO4qK8sGmDnrw` |
| Create an Upload Session for a Message Attachment (Large File) | POST | `/users/{{userId}}/messages/{{messageId}}/attachments/microsoft.graph.createUploadSession` | `conn_mod_def::GJ58y01yxxY::djpD4NhDSVaSTQuiX9J_5w` |
| Create Upload Session for a Message Attachment | POST | `/v1.0/me/messages/{{messageId}}/attachments/microsoft.graph.createUploadSession` | `conn_mod_def::GMIYxlUbc1k::4EutOSiKShCslus_oAh7Ug` |
| Create Upload Session for a Message Attachment in a Mail Folder | POST | `/v1.0/me/mailFolders/{{mailFolderId}}/messages/{{messageId}}/attachments/microsoft.graph.createUploadSession` | `conn_mod_def::GMIYxliO1Ls::ECHeqIMvSNeWCLi0GfCD0g` |
| Delete a Message Attachment in a Child Mail Folder | DELETE | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GMIYvTj0c0I::F1NzGyk4QS-PokBkiCAmBg` |
| Delete a User Message Attachment | DELETE | `/users/{{userId}}/messages/{{messageId}}/attachments/{{attachmentId}}` | `conn_mod_def::GJ58yCxPqRU::hgW-kXuNRz2MkFipUdQwmw` |

2 more MessageAttachments actions are available through search.

### InferenceClassificationOverrides

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a User’s Inference Classification Override | GET | `/users/{{userId}}/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GJ58t8ew4dU::icZcsZggTCqS1oEQAyQNOg` |
| Get a User's Inference Classification Override Count | GET | `/users/{{userId}}/inferenceClassification/overrides/$count` | `conn_mod_def::GJ58uNwMB-8::JejgdHwYQviipvb1mAI8hA` |
| Get Count of Inference Classification Overrides | GET | `/v1.0/me/inferenceClassification/overrides/$count` | `conn_mod_def::GMIYwiQHnnM::c4MMI-wfS7y66OsBXRZ0UQ` |
| Get Override from Inference Classification for the Signed-in User | GET | `/v1.0/me/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GMIYwjGbc1A::ReObhXm8Q02LdIGOqkISVA` |
| List a User’s Inference Classification Overrides | GET | `/users/{{userId}}/inferenceClassification/overrides` | `conn_mod_def::GJ58t8hDPto::BcyFHD1lRA62IonP6_mrwQ` |
| List Inference Classification Overrides | GET | `/v1.0/me/inferenceClassification/overrides` | `conn_mod_def::GMIYwrQtiNI::PxMhsOKoQHSgXKQNej3NVA` |
| Create an Inference Classification Override for a User | POST | `/users/{{userId}}/inferenceClassification/overrides` | `conn_mod_def::GJ58t7aQRBY::xq-VFg5RSk-DYsTAK8_L9A` |
| Create Override for the Signed-in User's Inference Classification | POST | `/v1.0/me/inferenceClassification/overrides` | `conn_mod_def::GMIYvMDx3po::rTKm2EpITWWYvbvPp0d5rg` |
| Delete a User's Inference Classification Override | DELETE | `/users/{{userId}}/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GJ58t9i0eOw::cMdjAwMQSUaTqH7VU1CtBg` |
| Delete Inference Classification Override for the Signed-in User | DELETE | `/v1.0/me/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GMIYvt-0cqQ::y97QdaM9R1-4a3jiXfUKWQ` |
| Update a User’s Inference Classification Override | PATCH | `/users/{{userId}}/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GJ58uNZgGbA::9ljYbqinRFeiZZF99wF79g` |
| Update Inference Classification Override for the Signed-in User | PATCH | `/v1.0/me/inferenceClassification/overrides/{{inferenceClassificationOverrideId}}` | `conn_mod_def::GMIYzQzliEI::i8nbKQSEQ6W-IVYvkeSaKw` |

### MailFolder

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Signed-In User's Mail Folder | GET | `/v1.0/me/mailFolders/{{mailFolderId}}` | `conn_mod_def::GMIYwLnGZN4::2R-0nkDoTaStEEt3qSNijg` |
| Copy a Child Mail Folder | POST | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/microsoft.graph.copy` | `conn_mod_def::GMIYxMVoDaA::DwiyQqfHQX-r5H1gF75Qvg` |
| Create a Child Folder in the Signed-in User's Mail Folder | POST | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders` | `conn_mod_def::GMIYu70iIUo::-I25pCzHS-WB3ILQDWnr7g` |
| Move a Child Mail Folder | POST | `/v1.0/me/mailFolders/{{mailFolderId}}/childFolders/{{mailFolderId1}}/microsoft.graph.move` | `conn_mod_def::GMIYxtE6kM8::EECsNJ21REq24wqaWHK0qg` |
| Move a Signed-In User's Mail Folder | POST | `/v1.0/me/mailFolders/{{mailFolderId}}/microsoft.graph.move` | `conn_mod_def::GMIYx4HUC10::5SxgaKS_RKqL6RuELpvzDg` |
| Update a Signed-In User's Mail Folder | PATCH | `/v1.0/me/mailFolders/{{mailFolderId}}` | `conn_mod_def::GMIYy0plVjs::4bAvg8bTSr6Og2_35_0Lpw` |

This lists 90 of 278 actions. For anything not here, call `search_one_platform_actions` with platform `outlook-mail`. The full catalog is at https://www.withone.ai/knowledge/outlook-mail.

## When a call fails

The error comes from Outlook Mail, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/outlook-mail

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
