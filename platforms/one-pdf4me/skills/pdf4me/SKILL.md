---
name: pdf4me
description: PDF4me is a document automation and PDF processing platform that provides APIs and workflow tools for converting, editing, merging, extracting, and securing PDF files, allowing developers and businesses to automate document generation and handling across applications. Read and write PDF4me data through One: pdf, excel, word, worddocuments, documents, images and more, 105 actions with real parameter documentation. Use whenever the user asks to look something up in PDF4me, create or update a record there, or build code against the PDF4me API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: pdf4me
  generated-from: one-knowledge-base
---

# PDF4me through One

PDF4me is a document automation and PDF processing platform that provides APIs and workflow tools for converting, editing, merging, extracting, and securing PDF files, allowing developers and businesses to automate document generation and handling across applications.

One exposes PDF4me through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `pdf4me` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm PDF4me is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real PDF4me account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert to PDF Using Universal Converter API | POST | `/api/v2/ConvertToPdf` | `conn_mod_def::GMbAW2ZZuWU::RD9ijxeATbih3bW5Dcei9Q` |
| Flatten PDF Using PDF4me | POST | `/api/v2/FlattenPdf` | `conn_mod_def::GMbAW_OSNd0::hCDAdP3HTFWas1UoTZEYCw` |
| Linearize PDF | POST | `/api/v2/LinearizePdf` | `conn_mod_def::GMbAW_tkgXE::9OOYsGd1TwqvgKXJjvQhgw` |
| Sign PDF | POST | `/api/v2/SignPdf` | `conn_mod_def::GMbAXJh1uGc::j1KYFVdsReO9l9OyXpBbvA` |
| Split PDF by Barcode | POST | `/api/v2/SplitPdfByBarcode_old` | `conn_mod_def::GMbAZEpuhe4::CvjeRx73T56fzOaULBgEHg` |
| Split PDF by Barcode Using PDF4me API v2 | POST | `/api/v2/SplitPdfByBarcode` | `conn_mod_def::GMbAZEtnRVI::KQnsT0QkTg6mST0agqpLmg` |
| Unlock PDF | POST | `/api/v2/Unlock` | `conn_mod_def::GMbAZiH7uwY::bwAp7UeDQKypOffimgtl4Q` |

### Excel

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Rows Using Excel | POST | `/office/ApiV2Excel/ExcelAddRows` | `conn_mod_def::GMbAXX4jU5A::Da4FQ5x4SSSyGNmdXY-vKA` |
| Add Text Header Footer Using Excel | POST | `/office/ApiV2Excel/ExcelAddTextHeaderFooter` | `conn_mod_def::GMbAXR-zgA0::ulYVQZc6Q9iXuoEjBM62dA` |
| Delete Rows Using Excel | POST | `/office/ApiV2Excel/ExcelDeleteRows` | `conn_mod_def::GMbAXSzQziw::GfWsVTXQQQGHqKE9dRjdGg` |
| Replace Text Using Excel | POST | `/office/ApiV2Excel/ExcelFindAndReplaceTextInExcel` | `conn_mod_def::GMbAX1OuuW4::zMp1jPtTTmypVcNycFQCVg` |
| Unlock Excel | POST | `/office/ApiV2Excel/ExcelUnlock` | `conn_mod_def::GMbAX7lOJrE::sieYtqS_TxqjWot71GwnOw` |

### Word

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Text Watermark to Word Using Api V2 Word | POST | `/office/ApiV2Word/AddTextWatermark` | `conn_mod_def::GMbAZjb-tGE::394s8tVMSBSKf-thZZ6ovA` |
| Add Watermark to Word Using PDF4me Word | POST | `/office/ApiV2Word/AddWatermark` | `conn_mod_def::GMbAZi9cvxc::JtRqU-GGTMyLEECOTp-FSQ` |
| Replace Text Using Api V2 Word | POST | `/office/ApiV2Word/ReplaceText` | `conn_mod_def::GMbAZtDaq3E::I-SFbJ2iQH68yPEtVwCAcQ` |
| Replace Text with Image Using PDF4me Word | POST | `/office/ApiV2Word/ReplaceTextWithImage` | `conn_mod_def::GMbAZ2o-Tbk::kSbhp0pkR6K-VPMla-Dwvg` |
| Update Table of Contents Using PDF4me Word | POST | `/office/ApiV2Word/UpdateTableOfContents` | `conn_mod_def::GMbAZ1x3LVg::F0O9dvlaQx6g6-GAsGaItA` |

### WordDocuments

| Action | Method | Path | Action id |
|---|---|---|---|
| Disable Tracking Changes in Word | POST | `/api/v2/DisableTrackingChangesInWord` | `conn_mod_def::GMbAZtYXVps::0GBmwAKSRl6vTlxoh3cn0Q` |
| Enable Tracking Changes in Word | POST | `/api/v2/EnableTrackingChangesInWord` | `conn_mod_def::GMbAYTwGggA::eMcs2oKaSMOYmH6EDyDcJA` |
| Split Document Using PDF4me Word | POST | `/office/ApiV2Word/SplitDocument` | `conn_mod_def::GMbAZ7L2zoM::0QnZS8qKS9qYtoK4u8X6Rg` |
| Update Headers and Footers Using Api V2 Word | POST | `/office/ApiV2Word/UpdateHeadersAndFooters` | `conn_mod_def::GMbAaCRHPHo::vsy3pCgGQou1qkCnWo3XSg` |

### Documents

| Action | Method | Path | Action id |
|---|---|---|---|
| Generate Document Multiple | POST | `/api/v2/GenerateDocumentMultiple` | `conn_mod_def::GMbAYebALJs::1uF0xQBRS_CzEdgYm5Xq4w` |
| Generate Document Single | POST | `/api/v2/GenerateDocumentSingle` | `conn_mod_def::GMbAYeWEqQE::Eqeq8whqSRKvAb5vr4FwAw` |
| Merge Documents Using PDF4me Word | POST | `/office/ApiV2Word/MergeDocuments` | `conn_mod_def::GMbAZrD9RJs::V0q86bnUQ0ukekhlRL-quQ` |
| Rotate Document Using Organize | POST | `/api/v2/RotateDocument` | `conn_mod_def::GMbAZM7HYPo::8oOxkkVVRRmQjSQKKHZNug` |

### Images

| Action | Method | Path | Action id |
|---|---|---|---|
| Compress Image | POST | `/api/v2/CompressImage` | `conn_mod_def::GMbAYprKYr8::W0Fx04e3Rf-CNbEUlEO9GA` |
| Create Images Using PDF4me | POST | `/api/v2/CreateImages` | `conn_mod_def::GMbAYrR2muE::_ojDCzv2RZOM3Cv4bfYTHw` |
| Remove EXIF Tags From Image | POST | `/api/v2/RemoveEXIFTagsFromImage` | `conn_mod_def::GMbAY0XvnKk::ql4gdGgsTP6jLRM7eBhMPw` |

### SwissQrBill

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Swiss QR Bill | POST | `/api/v2/CreateSwissQrBill` | `conn_mod_def::GMbAWj78ly0::uHq3S-CwSWi285QYV92qcw` |
| Read SwissQR Bill Using API v2 | POST | `/api/v2/ReadSwissQRBill` | `conn_mod_def::GMbAWlmWsKc::lR2eSwrUS-63WqK_P5cEXw` |

### Worksheets

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Worksheets Using Excel API | POST | `/office/ApiV2Excel/ExcelDeleteWorksheet` | `conn_mod_def::GMbAXf47iKY::t35O5L75TIOiD2SZclXeUQ` |
| Extract Worksheets Using Excel API | POST | `/office/ApiV2Excel/ExcelExtractWorksheet` | `conn_mod_def::GMbAXe-FQe0::LJBXQ3jfRgS0XCcK_p9wmw` |

### ExcelRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Rows Using Excel API | POST | `/office/ApiV2Excel/ExcelExtractRows` | `conn_mod_def::GMbAXhDzPcQ::GRMR6qudRRqQXhD8J7Pw-A` |
| Update Rows Using Excel | POST | `/office/ApiV2Excel/ExcelUpdateRows` | `conn_mod_def::GMbAX-1jWvQ::f4FSX6LrTaGRLV-NjTakNw` |

### AddBarcode

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Barcode Using PDF4me | POST | `/api/v2/addbarcode` | `conn_mod_def::GMbAWkTZp74::tEIUlgt2SnG5M3DM8ca19w` |

### Barcodes

| Action | Method | Path | Action id |
|---|---|---|---|
| Read Barcodes from PDF | POST | `/api/v2/ReadBarcodes` | `conn_mod_def::GMbAWkTnDHk::xairD_6XTLapN5OBYHoWOQ` |

### Barcode

| Action | Method | Path | Action id |
|---|---|---|---|
| Create Barcode Using PDF4me API v2 | POST | `/api/v2/CreateBarcode` | `conn_mod_def::GMbAWkbUrTw::wswV60EDSx6uf3_SOK1i-A` |

### HtmlToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert HTML to PDF | POST | `/api/v2/ConvertHtmlToPdf` | `conn_mod_def::GMbAWt6tF7Y::Gf8WcJVZSfqA6Gh2u5RpwQ` |

### PdfToExcel

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to Excel Using PDF4me Table Extractor API | POST | `/api/v2/ConvertPdfToExcel` | `conn_mod_def::GMbAWuJVT1s::z6183LviRGK2aK0ji2ijkA` |

### ConvertJsonToExcel

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert JSON to Excel Using Data Transform API | POST | `/api/v2/ConvertJsonToExcel` | `conn_mod_def::GMbAWuQnOzc::wr4iD2QuTWW-Bow_a_8yCg` |

### PdfToPowerPoint

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to PowerPoint Using PDF4me | POST | `/api/v2/ConvertPdfToPowerPoint` | `conn_mod_def::GMbAWunOMBQ::3xHQJn5cQNWlsvc6lhtD0w` |

### MarkdownToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Markdown to PDF | POST | `/api/v2/ConvertMdToPdf` | `conn_mod_def::GMbAWveRs88::0aiK_r4QTkCXn883BOC5Yg` |

### PdfForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Word to PDF Form Using PDF4me Form Creator API | POST | `/api/v2/ConvertWordToPdfForm` | `conn_mod_def::GMbAW3FD30Q::XUSOemRoSba8HzFW03lEtw` |

### VisioConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert VISIO to PDF | POST | `/api/v2/ConvertVisio` | `conn_mod_def::GMbAW3S7F6Y::dJxZG75sRJ2xGaEl5ia1Fg` |

### PdfToWord

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to Word | POST | `/api/v2/ConvertPdfToWord` | `conn_mod_def::GMbAW3VFslg::qt8y7vaIQI-yJxZ6i1DvdQ` |

### UrlToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert URL to PDF Using Web Page Saver API | POST | `/api/v2/ConvertUrlToPdf` | `conn_mod_def::GMbAW37DMuE::DDzqiVkKQ8G3O6QTlV1BKw` |

### PdfA

| Action | Method | Path | Action id |
|---|---|---|---|
| Create PDF/A | POST | `/api/v2/PdfA` | `conn_mod_def::GMbAW-n41rc::uXe2Y8djRQSk_x-csGQKJA` |

### AddHtmlHeaderFooter

| Action | Method | Path | Action id |
|---|---|---|---|
| Add HTML Header Footer Using API v2 | POST | `/api/v2/AddHtmlHeaderFooter` | `conn_mod_def::GMbAW_91MLo::A6-BqW4GTLq0nbqrexFCfg` |

### PdfAttachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Attachment to PDF Using PDF4me File Embedding API | POST | `/api/v2/AddAttachmentToPdf` | `conn_mod_def::GMbAXBkRG3A::OrlEab4gRZyuyilpwXJriA` |

### ImageStamp

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Image Stamp to PDF | POST | `/api/v2/ImageStamp` | `conn_mod_def::GMbAXJWwggs::f6u2SsZRRYStEWBgqZNYFA` |

### Stamp

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Text Stamp to PDF | POST | `/api/v2/Stamp` | `conn_mod_def::GMbAXJajDqM::jfOuAyyJSm-RjNMJVEzC3w` |

### AddMargin

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Margin Using PDF4me | POST | `/api/v2/AddMargin` | `conn_mod_def::GMbAXJvqpWA::j-NO8OceQx6OqG73f-Y3Qw` |

### PageNumber

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Page Number Using PDF4me | POST | `/api/v2/AddPageNumber` | `conn_mod_def::GMbAXKVtZg0::uWB6HyxDQMW3nqsiFspNWA` |

### ExcelImageHeaderFooter

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Image Header Footer Using Excel | POST | `/office/ApiV2Excel/ExcelAddImageHeaderFooter` | `conn_mod_def::GMbAXS_5HEI::sTuCcm50SJunUEX7H29uOw` |

### ExcelDocumentWatermark

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Text Watermark to an Excel Document | POST | `/office/ApiV2Excel/ExcelAddWatermark` | `conn_mod_def::GMbAXUAetc4::C2-YF1jrTzGb-ha2il66yg` |

### ExcelMergeRows

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge Rows Using Excel API | POST | `/office/ApiV2Excel/ExcelMergeRows` | `conn_mod_def::GMbAXe1XXCE::8J_eX2n1RtShqko1lA71Kg` |

### ExcelMergeFiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge Files Using Excel API | POST | `/office/ApiV2Excel/ExcelMergeFiles` | `conn_mod_def::GMbAXfrb_48::PxmMgMjKTly7dy90P7w3lg` |

### ExcelDocument

| Action | Method | Path | Action id |
|---|---|---|---|
| Secure Excel Document | POST | `/office/ApiV2Excel/ExcelSecure` | `conn_mod_def::GMbAXoo2LUM::JwsMnmqYTxq5kHXaLrZzxw` |

### ExcelParseCsv

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse CSV Using Excel API | POST | `/office/ApiV2Excel/ExcelParseCsv` | `conn_mod_def::GMbAXo5rZh8::O1GLsl89SB6XhsMOQMBXeg` |

### ExcelDeleteWatermark

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Watermark Using Excel API | POST | `/office/ApiV2Excel/ExcelDeleteWatermark` | `conn_mod_def::GMbAXpdtoM8::iDiDRy7pR_WBW5R6xFRp8g` |

### ExcelRemoveHeaderFooter

| Action | Method | Path | Action id |
|---|---|---|---|
| Remove Header Footer Using Excel API | POST | `/office/ApiV2Excel/ExcelRemoveHeaderFooter` | `conn_mod_def::GMbAXrdqqh8::Fnx4bp6vTkCD8Wu7-VktWQ` |

### Attachments

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Attachment From PDF Using File Recovery API | POST | `/api/v2/ExtractAttachmentFromPdf` | `conn_mod_def::GMbAX-t5aIo::hppRDWZxSmS_VxZdEtGaHQ` |

### DocumentClassification

| Action | Method | Path | Action id |
|---|---|---|---|
| Classify Document Using Extract | POST | `/api/v2/ClassifyDocument` | `conn_mod_def::GMbAYA4k48U::eIrFKUJUTLGtY1UoSxPp6g` |

### PdfFormData

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract PDF Form Data | POST | `/api/v2/ExtractPdfFormData` | `conn_mod_def::GMbAYBxCMQY::XtBWCT1eTYWjldIwaXtZHQ` |

### ExtractResources

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Resources Using Extract | POST | `/api/v2/ExtractResources` | `conn_mod_def::GMbAYJSUF24::DLYxO_YaTX-A6Zf_07c7WQ` |

### ExtractTextFromWord

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text from Word Using PDF4me Content Parser API | POST | `/api/v2/ExtractTextFromWord` | `conn_mod_def::GMbAYJf91hU::d2_KSOF2S8aaKOUa_Y8B0Q` |

### ExtractTableFromPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Table From PDF Using Data Parser API | POST | `/api/v2/ExtractTableFromPdf` | `conn_mod_def::GMbAYKMyzMs::hf75vnfPQces01nRrLl6-Q` |

### ParseDocument

| Action | Method | Path | Action id |
|---|---|---|---|
| Parse Document Using PDF4me API v2 | POST | `/api/v2/ParseDocument` | `conn_mod_def::GMbAYKR3ikw::t3Ixg176SSC-H30jNdl0yQ` |

### ExtractTextByExpression

| Action | Method | Path | Action id |
|---|---|---|---|
| Extract Text by Expression Using PDF4me Extract | POST | `/api/v2/ExtractTextByExpression` | `conn_mod_def::GMbAYL25b_w::mRSF3IVwT7O753cg6rUUrQ` |

### FillPdfForm

| Action | Method | Path | Action id |
|---|---|---|---|
| Fill PDF Form Using API v2 | POST | `/api/v2/FillPdfForm` | `conn_mod_def::GMbAYTgCbEk::pEwQ-J3aQeqvB4OPqnYdZQ` |

### ContentEditor

| Action | Method | Path | Action id |
|---|---|---|---|
| Find and Replace Text Using Content Editor API | POST | `/api/v2/FindAndReplace` | `conn_mod_def::GMbAYTqrxUs::r3yFLZZ_TB2GSNSqgfEg1A` |

### PdfOcrUsingConvertOcrPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| PDF OCR Using Convert Ocr Pdf | POST | `/api/v2/ConvertOcrPdf` | `conn_mod_def::GMbAYVGTE4o::KQV_6H-GToGBsVxHZ9Mm8Q` |

### Pdf4meForms

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Form Field Using PDF4me Forms | POST | `/api/v2/AddFormField` | `conn_mod_def::GMbAYWpquuw::kxMfKNJqQUGbtugU39452Q` |

### ImageWatermark

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Image Watermark to Image Using Overlay API | POST | `/api/v2/AddImageWatermarkToImage` | `conn_mod_def::GMbAYexkbEE::A8hzPu0sTUKYRGPZOYo6ow` |

### ReplaceTextWithImageInWord

| Action | Method | Path | Action id |
|---|---|---|---|
| Replace Text With Image In Word | POST | `/api/v2/ReplaceTextWithImageInWord` | `conn_mod_def::GMbAYhE908w::el5-gojtTnqO8SDrl_zMzA` |

### TrackingChangesInWord

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Tracking Changes in Word | POST | `/api/v2/GetTrackingChangesInWord` | `conn_mod_def::GMbAYiEQ0dA::0eJzZpeLSnCx0XW1cYMe_g` |

### ImageFormatConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Image Format | POST | `/api/v2/ConvertImageFormat` | `conn_mod_def::GMbAYplM5JM::R_SuLYpsQkmUhaGWEGlMLg` |

### Image

| Action | Method | Path | Action id |
|---|---|---|---|
| Crop Image | POST | `/api/v2/CropImage` | `conn_mod_def::GMbAYp2_nSY::bnJh9Ga-R2eWBDTc4JmaOw` |

### TextWatermarkImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Add Text Watermark to Image | POST | `/api/v2/AddTextWatermarkToImage` | `conn_mod_def::GMbAYp6IB3A::dsjdqnUHTkisf9-TJcry-g` |

### ImageExtractText

| Action | Method | Path | Action id |
|---|---|---|---|
| Image Extract Text Using PDF4me Image OCR | POST | `/api/v2/ImageExtractText` | `conn_mod_def::GMbAYzF66p4::FiUH4cw8Tlu0ji9tg2_Trw` |

### ImageMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Image Metadata Using PDF4me Properties Reader API | POST | `/api/v2/GetImageMetadata` | `conn_mod_def::GMbAYzoP_-w::iTrjAK0QS6qduEmZxSh3lw` |

### FlipImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Flip Image Using PDF4me Image | POST | `/api/v2/FlipImage` | `conn_mod_def::GMbAYztrG4A::qwrvdpQSTqCeB8Q2FKc9ZQ` |

### ResizeImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Resize Image Using Smart Scaler API | POST | `/api/v2/ResizeImage` | `conn_mod_def::GMbAY0DLl84::oD_HWhipQc2HGDTGbzDJ5A` |

### MergeOverlay

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge Overlay Using PDF4me | POST | `/api/v2/MergeOverlay` | `conn_mod_def::GMbAY7bT9Ec::QeCRVcT5R22GOsMHHy2OAA` |

### Merge

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge Using PDF4me API v2 | POST | `/api/v2/Merge` | `conn_mod_def::GMbAY8HRwE4::2syishA5T8iDQTut88ypLA` |

### RotateImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Rotate Image Using Angle Adjuster API | POST | `/api/v2/RotateImage` | `conn_mod_def::GMbAY8WNpHE::PniQ8NjrSwWfwBrlPfTiAg` |

### RotateImageByExifData

| Action | Method | Path | Action id |
|---|---|---|---|
| Rotate Image by EXIF Data | POST | `/api/v2/RotateImageByExifData` | `conn_mod_def::GMbAY84lQiY::GmzW1kz5QGWPvjLHmpu46g` |

### SplitPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Split PDF Using PDF4me API v2 | POST | `/api/v2/SplitPDF` | `conn_mod_def::GMbAY86cH3A::OQTtDBYQQ2SFXvbmnNHSdA` |

### SplitByText

| Action | Method | Path | Action id |
|---|---|---|---|
| Split by Text Using PDF4me | POST | `/api/v2/SplitByText` | `conn_mod_def::GMbAZEoCxLU::Gc916CRbQmSIuN-hQLwhvQ` |

### PdfCleanup

| Action | Method | Path | Action id |
|---|---|---|---|
| Delete Blank Pages from PDF | POST | `/api/v2/DeleteBlankPages` | `conn_mod_def::GMbAZFq7Kl4::8MWaHt1nTUu4I3pqCx0Zmw` |

This lists 90 of 105 actions. For anything not here, call `search_one_platform_actions` with platform `pdf4me`. The full catalog is at https://www.withone.ai/knowledge/pdf4me.

## When a call fails

The error comes from PDF4me, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/pdf4me

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
