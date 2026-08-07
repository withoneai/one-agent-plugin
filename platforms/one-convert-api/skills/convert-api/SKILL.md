---
name: convert-api
description: ConvertAPI is a file conversion API platform that enables developers and businesses to convert documents and other files across 200+ formats, with REST API access, SDKs, no-code integrations, and tools for PDF generation, redaction, accessibility, and print preparation. Read and write ConvertAPI data through One: convert, pdf, files, webpconversion, convertaitopnm, aitotiffconversion and more, 331 actions with real parameter documentation. Use whenever the user asks to look something up in ConvertAPI, create or update a record there, or build code against the ConvertAPI API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: convert-api
  generated-from: one-knowledge-base
---

# ConvertAPI through One

ConvertAPI is a file conversion API platform that enables developers and businesses to convert documents and other files across 200+ formats, with REST API access, SDKs, no-code integrations, and tools for PDF generation, redaction, accessibility, and print preparation.

One exposes ConvertAPI through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `convert-api` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm ConvertAPI is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real ConvertAPI account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Convert

| Action | Method | Path | Action id |
|---|---|---|---|
| Docx to Odt Using Convert | POST | `/convert/docx/to/odt` | `conn_mod_def::GMa8d20iFog::jFicIjUASZKgUFYONCIyTg` |
| Dotx to Jpg Using Convert | POST | `/convert/dotx/to/jpg` | `conn_mod_def::GMa8eFvj7fA::HqHbQFb0SMC8DPQqirXhFQ` |
| Dwf to Png Using Convert | POST | `/convert/dwf/to/png` | `conn_mod_def::GMa8eNePebA::MdUnvszqSSWPeo9M2e9E5A` |
| Eps to Tiff Using Convert | POST | `/convert/eps/to/tiff` | `conn_mod_def::GMa8e72_mPA::VYoRu37VSgywR60q4diR4g` |
| EPUB to PDF Using Convert | POST | `/convert/epub/to/pdf` | `conn_mod_def::GMa8fEiKgwA::9PzNDhVCQkyqqfPWDshbzA` |
| HEIC to PNG Using Convert | POST | `/convert/heic/to/png` | `conn_mod_def::GMa8fYYxEcg::GtpdLVStRTiPvO4kR7OS9w` |
| Ico to Svg Using Convert | POST | `/convert/ico/to/svg` | `conn_mod_def::GMa8f2L53Ng::G6KVHGpYRtmJDFuXD9bJCQ` |
| JPG to PNG Using Convert | POST | `/convert/jpg/to/png` | `conn_mod_def::GMa8gFoZeTg::C2abc9aNRNa7v3aX4vy79g` |
| Mobi to Tiff Using Convert | POST | `/convert/mobi/to/tiff` | `conn_mod_def::GMa8gjH-rgg::wm2rRpJORo-uSVqRRF4TsQ` |
| Mobi to Webp Using Convert | POST | `/convert/mobi/to/webp` | `conn_mod_def::GMa8gjMEQuA::02FwcYSMTLWGJMGS01y6AQ` |
| Odp to Png Using Convert | POST | `/convert/odp/to/png` | `conn_mod_def::GMa8g7VM21g::OQfIYrCATfaJTWiSRBND4Q` |
| Xlsx to Jpg Using Convert | POST | `/convert/xlsx/to/jpg` | `conn_mod_def::GMa8lHw8-gg::oHE9bNI2RB-MPWlzBaQtlw` |

### Pdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert PDF to PDF | POST | `/convert/pdf/to/pdf` | `conn_mod_def::GMa8huT1wXg::Sdlxbsr-QCm7u5q29itTWQ` |
| Rotate PDF | POST | `/convert/pdf/to/rotate` | `conn_mod_def::GMa8h9vxvMA::iZsZ9yNySBmKNktG7Q0VvA` |
| Vsdx to Pdf Using Convert | POST | `/convert/vsdx/to/pdf` | `conn_mod_def::GMa8kpSiGlg::HGndgwH2Ta6icrpuWI5bKA` |

### Files

| Action | Method | Path | Action id |
|---|---|---|---|
| Download File | GET | `/d/{{fileId}}` | `conn_mod_def::GMa8lsIyOUA::EWgC8XHUQIuA0QuI8rL2gA` |
| Delete a File | DELETE | `/d/{{fileId}}` | `conn_mod_def::GMa8lmKbpIA::kam84iLbTX67x8XrrCeC-Q` |
| Upload File | POST | `/upload` | `conn_mod_def::GMa8lmKdTkg::GYfBd5YdR2aYk730pBMc2A` |

### WebpConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| AI to WebP Conversion | POST | `/convert/ai/to/webp` | `conn_mod_def::GMa8dQ5uEDA::CblQcENdSmiJ_epVIqWWuA` |
| Convert WEBP to WEBP | POST | `/convert/webp/to/webp` | `conn_mod_def::GMa8lBK4OGg::WVCcGKs2QOyeChJwEbCY-g` |

### ConvertAiToPnm

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert AI to PNM | POST | `/convert/ai/to/pnm` | `conn_mod_def::GMa8dFGGXig::JYHTCXzvR-CvFVYWZvVH7A` |

### AiToTiffConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| AI to TIFF Conversion | POST | `/convert/ai/to/tiff` | `conn_mod_def::GMa8dGLj_Eg::hiyTUqRvTXaDAtmvga4e6g` |

### ConvertApiAiToSvg

| Action | Method | Path | Action id |
|---|---|---|---|
| AI to SVG Using ConvertAPI | POST | `/convert/ai/to/svg` | `conn_mod_def::GMa8dG6u96g::X3EDgxEYQBmxHyQeWaV29g` |

### AiToJpgConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| AI to JPG Conversion | POST | `/convert/ai/to/jpg` | `conn_mod_def::GMa8dKCuRMA::ZMMxge01Rv2hu1KSddF5xA` |

### AiToPngConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| AI to PNG Conversion | POST | `/convert/ai/to/png` | `conn_mod_def::GMa8dKbK2AA::96I1OPOnQV2FaCpYpLYasA` |

### BarcodeToData

| Action | Method | Path | Action id |
|---|---|---|---|
| Barcode to Data Using Convert | POST | `/convert/barcode/to/data` | `conn_mod_def::GMa8dQn6z8A::n_jY8xv-S0Oek2LzFwF44g` |

### BmpToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| BMP to PDF Using Convert | POST | `/convert/bmp/to/pdf` | `conn_mod_def::GMa8dQpz2CA::QsdvpW9VQj-KFc0FdHGH8g` |

### BmpToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert BMP to PNG | POST | `/convert/bmp/to/png` | `conn_mod_def::GMa8dRXzlcg::tw74DT0iQVO81LsflUHJLw` |

### BmpToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert BMP to JPG | POST | `/convert/bmp/to/jpg` | `conn_mod_def::GMa8dR5aPDA::YEOW3ECmSiSHdXd7a9mOTA` |

### CsvToPdfUsingConvert

| Action | Method | Path | Action id |
|---|---|---|---|
| CSV to PDF Using Convert | POST | `/convert/csv/to/pdf` | `conn_mod_def::GMa8dYXFl5g::C-msV6c0T2iWauqICAmgOA` |

### BmpToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Bmp to Webp Using Convert | POST | `/convert/bmp/to/webp` | `conn_mod_def::GMa8dYohTLA::QGPgoYEZSrKzvKJOKLxBBg` |

### BmpToPnm

| Action | Method | Path | Action id |
|---|---|---|---|
| Bmp to Pnm Using Convert | POST | `/convert/bmp/to/pnm` | `conn_mod_def::GMa8dYwr2iA::FgN018EsSqypaJu5qK4I2Q` |

### ConvertBmpToSvg

| Action | Method | Path | Action id |
|---|---|---|---|
| To Svg Using Convert Bmp | POST | `/convert/bmp/to/svg` | `conn_mod_def::GMa8dY6MqZg::nyOeBgVsSQKGXQT1r7RPrA` |

### BmpToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert BMP to TIFF | POST | `/convert/bmp/to/tiff` | `conn_mod_def::GMa8dar4dxA::To8T1a7JTh6ywBug91dQpw` |

### Barcode

| Action | Method | Path | Action id |
|---|---|---|---|
| Data to Barcode Using ConvertAPI | POST | `/convert/data/to/barcode` | `conn_mod_def::GMa8dhDeDTg::L41P3OJkQJu2Et0OYMicsQ` |

### DcmToJpgConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Dcm to Jpg Conversion | POST | `/convert/dcm/to/jpg` | `conn_mod_def::GMa8dhDp2MA::SWiYC_Q9SBmJrifHcCr0Pg` |

### ConvertDcmToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Dcm to Pdf Using Convert | POST | `/convert/dcm/to/pdf` | `conn_mod_def::GMa8dhIImug::86XhIVx9QKOKZdsRccM5Cw` |

### QrCode

| Action | Method | Path | Action id |
|---|---|---|---|
| Data to QR Code Using ConvertAPI | POST | `/convert/data/to/qrcode` | `conn_mod_def::GMa8dhyenKA::v4t1134USAGehG_yoBkYfg` |

### CsvToXlsx

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert CSV to XLSX | POST | `/convert/csv/to/xlsx` | `conn_mod_def::GMa8dh3-BZA::99R0j_Y_RWqjEqSb9ojLGA` |

### ConvertDjvuToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DJVU to PNG | POST | `/convert/djvu/to/png` | `conn_mod_def::GMa8dolbX5A::Mm3TvkL2QUu49hhZW-sMfA` |

### DjvuToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Djvu to Tiff Using Convert | POST | `/convert/djvu/to/tiff` | `conn_mod_def::GMa8dom-W2g::WH4ufMl8RGu2Qk_8dktZAQ` |

### DjvuToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Djvu to Pdf Using Convert | POST | `/convert/djvu/to/pdf` | `conn_mod_def::GMa8do5Zjmg::B8lWSqFARO2oPuNZddROVA` |

### DcmToPngUsingConvert

| Action | Method | Path | Action id |
|---|---|---|---|
| Dcm to Png Using Convert | POST | `/convert/dcm/to/png` | `conn_mod_def::GMa8dpEpSGg::QldySx3qSQqyiiz-MOiGtA` |

### ConvertDjvuToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| To Jpg Using Convert Djvu | POST | `/convert/djvu/to/jpg` | `conn_mod_def::GMa8dpJny3g::Fi4NHZWLSL-4Xf8Z61MmBQ` |

### DocToDocx

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOC to DOCX | POST | `/convert/doc/to/docx` | `conn_mod_def::GMa8dvcCU6A::qH6wTQ2YRo2ovohwLKzWeA` |

### DocumentModeration

| Action | Method | Path | Action id |
|---|---|---|---|
| Moderate a Document | POST | `/convert/document/to/moderate` | `conn_mod_def::GMa8dvxQ5Jg::nu2T6hEpQBG0X9g7TobgWQ` |

### DjvuToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DjVu to WebP | POST | `/convert/djvu/to/webp` | `conn_mod_def::GMa8dvxXAwA::cZTFcHtVTnWfpsGxXu5cUA` |

### DocxConversion

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to DOCX Using ConvertAPI | POST | `/convert/docx/to/docx` | `conn_mod_def::GMa8dvxbCkA::t6P85JNjR2-U3UrCYeY14g` |

### DocxComparison

| Action | Method | Path | Action id |
|---|---|---|---|
| Compare DOCX Documents | POST | `/convert/docx/to/compare` | `conn_mod_def::GMa8dv1HhVA::8nxfRMUBTeSZo9k34sDCPA` |

### DocxToHtml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to HTML | POST | `/convert/docx/to/html` | `conn_mod_def::GMa8d2hY1ng::sM0qErfpQgKcUCW5jJFBzA` |

### DocxMerge

| Action | Method | Path | Action id |
|---|---|---|---|
| Merge DOCX Files | POST | `/convert/docx/to/merge` | `conn_mod_def::GMa8d2ha1jA::3z2i61GESL-59Rp3dvqxDw` |

### DocxToJpgUsingConvert

| Action | Method | Path | Action id |
|---|---|---|---|
| Docx to Jpg Using Convert | POST | `/convert/docx/to/jpg` | `conn_mod_def::GMa8d2lZN0g::njGOFgmoT9Wtg9aJ9R1X9Q` |

### DocxToMd

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to MD | POST | `/convert/docx/to/md` | `conn_mod_def::GMa8d2ojKoA::7IIm5poDRXGmjDkx1o89fQ` |

### DocxToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to PDF | POST | `/convert/docx/to/pdf` | `conn_mod_def::GMa8d9Bzo_A::9cZApO2RRHmLoPCwHpPsIw` |

### DocxToRtf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to RTF | POST | `/convert/docx/to/rtf` | `conn_mod_def::GMa8d9JI6MA::okxsBfvXR2mh5QOxNTwX5w` |

### DocxToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to PNG | POST | `/convert/docx/to/png` | `conn_mod_def::GMa8d9TKDZA::9DdPHHGUQn6MoXq2yKBaXA` |

### DocxProtection

| Action | Method | Path | Action id |
|---|---|---|---|
| Protect DOCX Files | POST | `/convert/docx/to/protect` | `conn_mod_def::GMa8d9XmSzA::ljOSp0k4RT-srWxSMO7HbQ` |

### DocxToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to TIFF | POST | `/convert/docx/to/tiff` | `conn_mod_def::GMa8d9loD1A::E2Zgp6e0TxCfCHcx4oqvew` |

### DocxToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to WEBP | POST | `/convert/docx/to/webp` | `conn_mod_def::GMa8eEUtTvg::cnACRZi2RH-5QEPRFuevkA` |

### DotxToPdfUsingConvert

| Action | Method | Path | Action id |
|---|---|---|---|
| Dotx to Pdf Using Convert | POST | `/convert/dotx/to/pdf` | `conn_mod_def::GMa8eEeVrAg::JfG4MVIPR6SIzBON7t4YyA` |

### DocxToXml

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to XML | POST | `/convert/docx/to/xml` | `conn_mod_def::GMa8eE_Snqg::nsVeuispScy1TorYiLaVpg` |

### DocxToTxt

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DOCX to TXT | POST | `/convert/docx/to/txt` | `conn_mod_def::GMa8eE_cQ2g::nQpz9f_AQFiZQMXplCVUDw` |

### DwfToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWF to TIFF | POST | `/convert/dwf/to/tiff` | `conn_mod_def::GMa8eMclCXg::GjG_-e7fRbqaxC8esivSGA` |

### DwfToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Dwf to Pdf Using Convert | POST | `/convert/dwf/to/pdf` | `conn_mod_def::GMa8eMmfQNg::2XeTmEsHQe-0fgNB9YyfiA` |

### DwfToSvg

| Action | Method | Path | Action id |
|---|---|---|---|
| Dwf to Svg Using Convert | POST | `/convert/dwf/to/svg` | `conn_mod_def::GMa8eONj12g::eKuibF6hS1GJCSfVv4lg2A` |

### DwfToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| Dwf to Jpg Using Convert | POST | `/convert/dwf/to/jpg` | `conn_mod_def::GMa8eQJmDwA::MiLPELlaSnan4W16dGhE7Q` |

### DwgToSvgUsingConvert

| Action | Method | Path | Action id |
|---|---|---|---|
| Dwg to Svg Using Convert | POST | `/convert/dwg/to/svg` | `conn_mod_def::GMa8eWkjFYA::tMYfIIVyRtueqjL_AGpVBw` |

### DwgToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Dwg to Png Using Convert | POST | `/convert/dwg/to/png` | `conn_mod_def::GMa8eXBxsIA::UDsqaNYgQ02Bu2G1j3zt0w` |

### DwgToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWG to PDF | POST | `/convert/dwg/to/pdf` | `conn_mod_def::GMa8eXN9qGA::omyhhJNYS9i4dqK96PPzRg` |

### DwgToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWG to JPG | POST | `/convert/dwg/to/jpg` | `conn_mod_def::GMa8eYDFWLA::BEnsjWbUSGigutYG36Kkog` |

### DwfToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWF to WEBP | POST | `/convert/dwf/to/webp` | `conn_mod_def::GMa8eZi7vvA::yMvB1WCPQh-EOv2AfnCCbA` |

### DwgToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWG to TIFF | POST | `/convert/dwg/to/tiff` | `conn_mod_def::GMa8efusokA::lQoM0d88S72FwdzLaY0-Vg` |

### DwgToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DWG to WEBP | POST | `/convert/dwg/to/webp` | `conn_mod_def::GMa8egPHsRg::K4mSSqamRB-KqdxosCCnVw` |

### DxfToJpg

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to JPG | POST | `/convert/dxf/to/jpg` | `conn_mod_def::GMa8egcWJIA::3SWfd4sRQgCHq9Llqm71Iw` |

### DxfToPng

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to PNG | POST | `/convert/dxf/to/png` | `conn_mod_def::GMa8egxL1kg::Ol-W9vCIQ9-O-Rwt2tHt8Q` |

### DxfToPdf

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to PDF | POST | `/convert/dxf/to/pdf` | `conn_mod_def::GMa8eg8BPgA::D05xdh8KRfuocIKg4Pc3jA` |

### EmailMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert Email to Metadata | POST | `/convert/email/to/metadata` | `conn_mod_def::GMa8enBbGhg::QIScOzHORZ--6peiTLUdBg` |

### DxfToTiff

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to TIFF | POST | `/convert/dxf/to/tiff` | `conn_mod_def::GMa8eng5gZg::YnCg-PS3SZm_RQjv8N0r1w` |

### ConvertDxfToWebp

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to WEBP | POST | `/convert/dxf/to/webp` | `conn_mod_def::GMa8envZ7WA::YxtkykJfRnSPSQAynX65Pw` |

### ConvertDxfToSvg

| Action | Method | Path | Action id |
|---|---|---|---|
| Convert DXF to SVG | POST | `/convert/dxf/to/svg` | `conn_mod_def::GMa8eqPDhIA::TlBl9EDORnCw6gQUqhfxSw` |

This lists 80 of 331 actions. For anything not here, call `search_one_platform_actions` with platform `convert-api`. The full catalog is at https://www.withone.ai/knowledge/convert-api.

## When a call fails

The error comes from ConvertAPI, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/convert-api

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
