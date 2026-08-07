---
name: encodian
description: Encodian is a document automation platform that provides APIs and no-code actions for generating, converting, merging, signing, and processing files within business workflows, allowing developers and operations teams to automate document handling across cloud applications and Microsoft environments. Read and write Encodian data through One: utilities, pdf, conversion, word, barcodes, general and more, 345 actions with real parameter documentation. Use whenever the user asks to look something up in Encodian, create or update a record there, or build code against the Encodian API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: encodian
  generated-from: one-knowledge-base
---

# Encodian through One

Encodian is a document automation platform that provides APIs and no-code actions for generating, converting, merging, signing, and processing files within business workflows, allowing developers and operations teams to automate document handling across cloud applications and Microsoft environments.

One exposes Encodian through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `encodian` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm Encodian is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real Encodian account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Utilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dynamic Schema Send HTTP Request Using Utilities | GET | `/api/v1/Utilities/GetDynamicSchemaSendHttpRequest` | `conn_mod_def::GLvu5tccA9Q::imcpidevRzeunJod0evZuw` |
| Get Operation Status File Only Using Utilities | GET | `/api/v1/Utilities/GetOperationStatusFileOnly` | `conn_mod_def::GLvu5mtB-Ts::CzKytDsoQvKEvQFw0Hy2rw` |
| Get Operation Status for a Utility Boolean Operation | GET | `/api/v1/Utilities/GetOperationStatusUtilityBool` | `conn_mod_def::GLvu5l3QEN8::rzXzxXF6TqCq623izG5Xtw` |
| Get Operation Status Multiple Files Using Utilities | GET | `/api/v1/Utilities/GetOperationStatusMultipleFiles` | `conn_mod_def::GLvu5t01QhM::p0UWelK7SjeqgRRosmCkRw` |
| Get Operation Status Regex Search Text Using Utilities | GET | `/api/v1/Utilities/GetOperationStatusRegexSearchText` | `conn_mod_def::GLvu5l7_bFA::jeIYRtpHSd2kPAYrULkyeg` |
| Get Operation Status Using Utilities | GET | `/api/v1/Utilities/GetOperationStatus` | `conn_mod_def::GLvu5fiyCOg::TeHupVioRRmYZud3krUMRA` |
| Get Operation Status Using Utilities GetOperationStatusUtilityInt | GET | `/api/v1/Utilities/GetOperationStatusUtilityInt` | `conn_mod_def::GLvu5tB22dg::RWH3ETaPQXao8h75wL03eg` |
| Get Operation Status Utility String Using Utilities | GET | `/api/v1/Utilities/GetOperationStatusUtilityString` | `conn_mod_def::GLvu5sjme64::iFKXAx6uQNyepf966d2vJw` |
| AES Decryption Using Utilities | POST | `/api/v1/Utilities/AesDecryption` | `conn_mod_def::GLvu52k-5l0::pfBJb0MSQ_Ora7AfYLe5LA` |
| AES Encryption Using Utility | POST | `/api/v1/Utilities/AesEncryption` | `conn_mod_def::GLvu53nqo1k::_sLPNWyCT_2CF0RME-Bi2Q` |
| Array Add Items Using Utility | POST | `/api/v1/Utilities/ArrayAddItems` | `conn_mod_def::GLvu51mA7xg::rtNZ_ZY0S2iIUyG7ricx3g` |
| Array Combine Using Utilities | POST | `/api/v1/Utilities/ArrayCombine` | `conn_mod_def::GLvu52UxAr8::nbFQJV1XQgCCn4XPllSC5A` |

58 more Utilities actions are available through search.

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Operation Status Chd Using Api v1 PDF | GET | `/api/v1/PDF/GetOperationStatusChd` | `conn_mod_def::GLvu25R1C_o::tuSp2P7_RMKgzt9BpyuiWw` |
| Add Attachments to PDF | POST | `/api/v1/PDF/AddAttachmentsToPdf` | `conn_mod_def::GLvu3TN3Vy0::GCgiVaAjQMWtYWFgcm6moA` |
| Add HTML Header Footer Using PDF | POST | `/api/v1/PDF/AddHtmlHeaderFooter` | `conn_mod_def::GLvu3TrPCDQ::8ohVxDd8Qm2jLb6HC8ztbw` |
| Add Image Watermark Advanced Using PDF | POST | `/api/v1/PDF/AddImageWatermarkAdvanced` | `conn_mod_def::GLvu3TVjWWg::N8USVtKTQISWXhRLmwyiOA` |
| Add Image Watermark Using PDF | POST | `/api/v1/PDF/AddImageWatermark` | `conn_mod_def::GLvu3WI_ckI::mV26bMy1RvOHJYGLgXPzwg` |
| Add Page Numbers Using PDF | POST | `/api/v1/PDF/AddPageNumbers` | `conn_mod_def::GLvu3colx7w::uXhjWKCKQyy0hJKtcbqW7g` |
| Add Text Watermark Advanced Using PDF | POST | `/api/v1/PDF/AddTextWatermarkAdvanced` | `conn_mod_def::GLvu3cta0b0::Z9P3btgEQJ-FCSI3Mphceg` |
| Check Password Using PDF Pdf Check Password | POST | `/api/v1/PDF/PdfCheckPassword` | `conn_mod_def::GLvu3jsFQoU::Tqe4MPENQky0LjHla8gpkA` |
| Compress PDF | POST | `/api/v1/PDF/CompressPdf` | `conn_mod_def::GLvu3lZ-x6s::9d614U3dRvaJZ0rgOc2yPQ` |
| Delete Blank Pages Using PDF | POST | `/api/v1/PDF/PdfDeleteBlankPages` | `conn_mod_def::GLvu3jnWAwY::PzbxUfe8TH2Iv7IsiycpJA` |
| Delete PDF Pages Using PDF | POST | `/api/v1/PDF/DeletePdfPages` | `conn_mod_def::GLvu3kNR_S8::uHlu5Bj_Sd-NOxQbrz9QoQ` |
| Extract Attachments From PDF Using PDF | POST | `/api/v1/PDF/ExtractAttachmentsFromPdf` | `conn_mod_def::GLvu3uqzANM::jn0WIAd8S36LNO7tle2Gyw` |

23 more Pdf actions are available through search.

### Conversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dynamic Schema Convert Excel | GET | `/api/v1/Conversion/GetDynamicSchemaConvertExcel` | `conn_mod_def::GLvuzpjVASI::MHzZ0NE3TXKdPL0Zk_Brxg` |
| Get Dynamic Schema for Convert CAD | GET | `/api/v1/Conversion/GetDynamicSchemaConvertCad` | `conn_mod_def::GLvuzq2qqgM::CbX5K1ryQhOZhc_cC-iA6A` |
| Get Dynamic Schema for Convert Word | GET | `/api/v1/Conversion/GetDynamicSchemaConvertWord` | `conn_mod_def::GLvuzxuGuag::hWjl8eyBQSewg2C7jfv7QQ` |
| Convert CAD | POST | `/api/v1/Conversion/ConvertCad` | `conn_mod_def::GLvuytHvuXI::V6-bVQq1TyKWLxMR8YIBkA` |
| Convert Email | POST | `/api/v1/Conversion/ConvertMailMessage` | `conn_mod_def::GLvuyqO_AIU::c7hp6NsPTkqLwI7ssWttNg` |
| Convert Excel | POST | `/api/v1/Conversion/ConvertExcel` | `conn_mod_def::GLvuysxcwic::2lniSHACS-KbdkB5DqwitA` |
| Convert File to PDF | POST | `/api/v1/Conversion/BasicConversion` | `conn_mod_def::GLvuypf9ypI::E7ijOFfaSLWbwXenRPyJ2A` |
| Convert HEIC to PDF Using Conversion | POST | `/api/v1/Conversion/ConvertHeicToPdf` | `conn_mod_def::GLvuyqOgOqA::WzjLaTR4RYizCVZrvCl9mA` |
| Convert Image to PDF | POST | `/api/v1/Conversion/ConvertImageToPdf` | `conn_mod_def::GLvuy5NEAvE::-bSd6s2ES-S1qn79UTCQGw` |
| Convert JSON to Excel | POST | `/api/v1/Conversion/ConvertJsonToExcel` | `conn_mod_def::GLvuy_C6jbc::vGM9Kn7tQTKh5YSPIiMOqg` |
| Convert PDF to Excel | POST | `/api/v1/Conversion/ConvertPdfToExcel` | `conn_mod_def::GLvuy_lxFAs::vbfIFFbmRLewsJjxB6RTvA` |
| Convert PDF to Images | POST | `/api/v1/Conversion/ConvertPdfToImages` | `conn_mod_def::GLvuy_IqL1I::a_6NxKIpRCiR8dBTOXOB9w` |

13 more Conversion actions are available through search.

### Word

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Operation Status for Get Text From Word | GET | `/api/v1/Word/GetOperationStatusGetTextFromWord` | `conn_mod_def::GLvu7mcTkMA::Pf3k_LFIRkypHm0-eF7_hA` |
| Get Operation Status for GetTrackedChanges Using Word | GET | `/api/v1/Word/GetOperationStatusGetTrackedChanges` | `conn_mod_def::GLvu7rIQK9s::Oe7DtXtaSmClOBfR-UkHDw` |
| Get Operation Status Using Word | GET | `/api/v1/Word/GetOperationStatus` | `conn_mod_def::GLvu7glJAJ8::DCPzWTkoQD6zbWSdPmk-UA` |
| Add HTML Header Footer Word Using Word | POST | `/api/v1/Word/AddHtmlHeaderFooterWord` | `conn_mod_def::GLvu7xyX_fw::aNGDWBkWTviFlFu9s8Ci7w` |
| Add Page Numbers Using Word | POST | `/api/v1/Word/WordAddPageNumbers` | `conn_mod_def::GLvu75HQ3eA::6YGsx5D4QLqXJ339xu-8YA` |
| Delete Word Pages Using Word | POST | `/api/v1/Word/DeleteWordPages` | `conn_mod_def::GLvu75VLfBA::8cNdy_cMSNC2hYgTXVF6Ig` |
| Disable Tracked Changes Using Word | POST | `/api/v1/Word/DisableTrackedChanges` | `conn_mod_def::GLvu76GfVuk::WF4yHOQASmGZneMozjub0Q` |
| Enable Tracked Changes Using Word | POST | `/api/v1/Word/EnableTrackedChanges` | `conn_mod_def::GLvu8Ba70oU::T2KCfIGWTwOHaeXrPW1VFA` |
| Extract Field Data Using Word | POST | `/api/v1/Word/WordExtractFieldData` | `conn_mod_def::GLvu8Ce9Dp4::I8FKfpgpQeGYvLfuPrfxDg` |
| Extract Files Using Word | POST | `/api/v1/Word/WordExtractFiles` | `conn_mod_def::GLvu8BPohSc::vmBqrAU9SiaD8IuKPWY_tQ` |
| Extract Word Pages Using Word | POST | `/api/v1/Word/ExtractWordPages` | `conn_mod_def::GLvu8IeIULI::1C6ZcT1xSte5zYrdaQyi-Q` |
| Get Tracked Changes Using Word | POST | `/api/v1/Word/GetTrackedChanges` | `conn_mod_def::GLvu8JKOjpY::VqRPIBj8RKCF_40hV7UOow` |

8 more Word actions are available through search.

### Barcodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dynamic Schema Create Barcode Using api v1 Barcodes | GET | `/api/v1/Barcodes/GetDynamicSchemaCreateBarcode` | `conn_mod_def::GLvuyZ4id7w::tZvNIa_LSCOyBdj2521s3g` |
| Get Operation Status File Only Using Barcodes | GET | `/api/v1/Barcodes/GetOperationStatusFileOnly` | `conn_mod_def::GLvuySfX3QM::7E4j9-sXQDyLW8v5aGg9kQ` |
| Get Operation Status for Barcodes | GET | `/api/v1/Barcodes/GetOperationStatus` | `conn_mod_def::GLvuyLbEfyk::Cf3OpWMXTFyxW7dTPTHbsQ` |
| Get Operation Status for CHD | GET | `/api/v1/Barcodes/GetOperationStatusChd` | `conn_mod_def::GLvuyKyTxDQ::zF2PucKyQ9Kpj9dYO_foSg` |
| Get Operation Status for Multiple Files Using Barcodes | GET | `/api/v1/Barcodes/GetOperationStatusMultipleFiles` | `conn_mod_def::GLvuyS7-3Xs::RKtlqwurQWidli4Mir3Lpw` |
| Get Operation Status for Read Barcode From Document | GET | `/api/v1/Barcodes/GetOperationStatusReadBarcodeFromDocument` | `conn_mod_def::GLvuySsuoaY::ZbY4KQLSTCyHKo6tP3rurg` |
| Get Operation Status for Read Barcode From Image | GET | `/api/v1/Barcodes/GetOperationStatusReadBarcodeFromImage` | `conn_mod_def::GLvuySUh3FI::uwnFJBSWQgmjIjOEg0zjCA` |
| Get Operation Status for Read Qr Code From Document | GET | `/api/v1/Barcodes/GetOperationStatusReadQrCodeFromDocument` | `conn_mod_def::GLvuySaVfEY::OrWRIP1iTamilqMogjobXg` |
| Get Operation Status for Read Qr Code From Image | GET | `/api/v1/Barcodes/GetOperationStatusReadQrCodeFromImage` | `conn_mod_def::GLvuyZ5VEv4::F6lAZ_CAQbOr7EYQPr2XEA` |
| Create Barcode Using Barcodes | POST | `/api/v1/Barcodes/CreateBarcode` | `conn_mod_def::GLvuyJBbJ88::AI7miRxAQkKvcxpcrHtKug` |
| Create QR Code Using Barcodes | POST | `/api/v1/Barcodes/CreateQrCode` | `conn_mod_def::GLvuyZbJ4wQ::HeGSYysbT0G2U5kiAEm58A` |
| Read Barcode From Document Using Barcodes | POST | `/api/v1/Barcodes/ReadBarcodeFromDocument` | `conn_mod_def::GLvuyIyF9wc::oTcMqhMQS9qtBIQMBGO3gA` |

4 more Barcodes actions are available through search.

### General

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Operation Status File Only | GET | `/api/v1/General/GetOperationStatusFileOnly` | `conn_mod_def::GLvu1poB7mI::5VnzSV8_SX6DcHQFlA6bhw` |
| Get Operation Status for Multiple Files Using General | GET | `/api/v1/General/GetOperationStatusMultipleFiles` | `conn_mod_def::GLvu15cAIf0::EUNNaMZoTOKRTAaODvrk8w` |
| Get Operation Status String Using General | GET | `/api/v1/General/GetOperationStatusString` | `conn_mod_def::GLvu1yETO3k::qYwRScNlSBuHGNoDfa492w` |
| AI Process Contract | POST | `/api/v1/General/AIProcessContract` | `conn_mod_def::GLvu0vJPsMI::19PJAisFSjWkTp82dhoacw` |
| Buy Additional Credits | POST | `/api/v1/General/BuyAdditionalCredits` | `conn_mod_def::GLvu1v2IWRE::0KafSypJRKK976_wQxbPMw` |
| Create Archive (ZIP) Using General | POST | `/api/v1/General/AddToZip` | `conn_mod_def::GLvu1Wd8x8o::IIhf8OTLQYSN4FgEg680uw` |
| Extract From Archive Using General | POST | `/api/v1/General/ExtractFromArchive` | `conn_mod_def::GLvu1XOGfBA::tgQLDgFPQcaN-nvC2r27_A` |
| Get Email Info Using General | POST | `/api/v1/General/GetEmailInfo` | `conn_mod_def::GLvu1ieIthY::jK3HGuJrTh6WrPFQ_uh3rA` |
| Process Bank Check US Using AI | POST | `/api/v1/General/AIProcessBankCheckUS` | `conn_mod_def::GLvu0vSfJH4::a83eAjxlS8W5wGOVlVduYw` |
| Process Mortgage Document US Using General AI | POST | `/api/v1/General/AIProcessMortgageUS` | `conn_mod_def::GLvu03EKnh0::ctWA89UKSpWS2pvE7Z0j3Q` |
| Process Tax US Document Using General | POST | `/api/v1/General/AIProcessTaxUS` | `conn_mod_def::GLvu1PeS_2U::zwbNIB9NSoSZfoXa7UvpxA` |
| Replace Text with Image in a File | POST | `/api/v1/General/SearchAndReplaceTextWithImage` | `conn_mod_def::GLvu1h1o2IE::RXrtOpd9R_WUnWsICSZe5Q` |

2 more General actions are available through search.

### Image

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Dynamic Schema Crop Image | GET | `/api/v1/Image/GetDynamicSchemaCropImage` | `conn_mod_def::GLvu2IZkPoM::GrzlYwRfRN2QDQCYFVeGhg` |
| Add Text Watermark to Image Using Image | POST | `/api/v1/Image/AddTextWatermarkToImage` | `conn_mod_def::GLvu2JB4Hfs::640cZNSCSJSoBZ7exdfqbw` |
| Clean Up Photo Image | POST | `/api/v1/Image/ImageCleanUpPhoto` | `conn_mod_def::GLvu2RlUALE::omFWpanuTa6hyswnCZDo9A` |
| Compress Image Using Image | POST | `/api/v1/Image/CompressImage` | `conn_mod_def::GLvu2QWteBY::QqLtkweESueKSmNvooLCEw` |
| Convert Format Using Image | POST | `/api/v1/Image/ImageConvertFormat` | `conn_mod_def::GLvu2QFkveQ::PWqXoBMOSdCKREpDjLNVMg` |
| Convert to Grayscale Using Image | POST | `/api/v1/Image/ImageConvertToGrayscale` | `conn_mod_def::GLvu2QdsH4g::IXITeydyQ2-MddrEMnxnyw` |
| Crop Image Using Image | POST | `/api/v1/Image/CropImage` | `conn_mod_def::GLvu2b1wPKc::j3AWK0MTRZe4TIjW4V6aNg` |
| Extract Text Using Image | POST | `/api/v1/Image/ImageExtractText` | `conn_mod_def::GLvu2Z8TwKk::-Aw3ZXuKSuCCZAKsRvt39Q` |
| Flip Image Using Image | POST | `/api/v1/Image/FlipImage` | `conn_mod_def::GLvu2YliSD4::rErcwnlHS5KKkUBGw-uWxA` |
| Resize Image Using Image | POST | `/api/v1/Image/ResizeImage` | `conn_mod_def::GLvu2xieSd0::GLG1r-vBTee831m_2ZC4QA` |
| Rotate Image by EXIF Data Using Image | POST | `/api/v1/Image/RotateImageByExifData` | `conn_mod_def::GLvu2xSsAec::GQhPa7M6QFe27SOIICwdZw` |
| Rotate Image Using Image | POST | `/api/v1/Image/RotateImage` | `conn_mod_def::GLvu2wXzgYg::3vhtTAE-RhST5Jp1HsXCbw` |

### PowerPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Operation Status File Only Using PowerPoint | GET | `/api/v1/PowerPoint/GetOperationStatusFileOnly` | `conn_mod_def::GLvu4_kYgdY::vNDIKIKhRuSWEoOZLAhTOw` |
| Get Operation Status for CHD Using PowerPoint | GET | `/api/v1/PowerPoint/GetOperationStatusChd` | `conn_mod_def::GLvu5BJQNzM::KfXfdSsgTfushH5XG3MUBw` |
| Get Operation Status for SplitDocument Using PowerPoint | GET | `/api/v1/PowerPoint/GetOperationStatusSplitDocument` | `conn_mod_def::GLvu4_86f1s::TsjE6kEpT2W6wTgePhkxCQ` |
| Get Operation Status Multiple Files Using PowerPoint | GET | `/api/v1/PowerPoint/GetOperationStatusMultipleFiles` | `conn_mod_def::GLvu4_KJ_XA::-rU0F9BBRIKmLjxn0ZU7Yw` |
| Get Operation Status Using PowerPoint | GET | `/api/v1/PowerPoint/GetOperationStatus` | `conn_mod_def::GLvu4_QwnqE::Pq7qTxhQQjGYXXSq6HJa3Q` |
| Compress PowerPoint Using PowerPoint | POST | `/api/v1/PowerPoint/CompressPowerPoint` | `conn_mod_def::GLvu5Hc5eIA::J-AnNHL0QMC5jRkwtRid6w` |

4 more PowerPoint actions are available through search.

This lists 90 of 345 actions. For anything not here, call `search_one_platform_actions` with platform `encodian`. The full catalog is at https://www.withone.ai/knowledge/encodian.

## When a call fails

The error comes from Encodian, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/encodian

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
