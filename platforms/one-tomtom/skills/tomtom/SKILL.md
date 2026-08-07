---
name: tomtom
description: TomTom is a maps and location technology platform that provides APIs, SDKs, navigation, traffic analytics, and customizable map data, enabling carmakers, fleets, public sector teams, and developers to build routing, mobility, and automated driving solutions. Read and write TomTom data through One: search, feedback, places, routing, feedbackstatus, trafficincidentdetails and more, 80 actions with real parameter documentation. Use whenever the user asks to look something up in TomTom, create or update a record there, or build code against the TomTom API.
license: One-Knowledge-1.0 (https://www.withone.ai/licenses/knowledge)
metadata:
  author: one-systems
  attribution: Integration knowledge by One (withone.ai)
  platform: tomtom
  generated-from: one-knowledge-base
---

# TomTom through One

TomTom is a maps and location technology platform that provides APIs, SDKs, navigation, traffic analytics, and customizable map data, enabling carmakers, fleets, public sector teams, and developers to build routing, mobility, and automated driving solutions.

One exposes TomTom through four MCP tools. The table below carries real action ids from One's knowledge base, so for a common operation you can skip search and go straight to reading the action's parameters.

## How to run an action

1. Find the action in the table below, or call `search_one_platform_actions` with platform `tomtom` if it is not listed.
2. Call `get_one_action_knowledge` with the action id. Do this every time, including for actions in this table. The table gives you the id, not the parameters.
3. Call `execute_one_action` with parameters copied from that knowledge.

Never guess a parameter name, a body field, or an enum value. The knowledge has the real schema, and a guessed field is either a 400 or a silent write of the wrong thing.

## Before you start

Call `list_one_integrations` once and confirm TomTom is connected. If it is missing, the user has not connected it: say so and point them at https://app.withone.ai rather than reaching for raw HTTP.

Each connection carries an `access` field. If it reports `{"policy": "methods", "methods": ["GET"]}` the agent is read-only here, so plan a read-only answer instead of attempting a write that will be refused.

## Before a write

Creates, updates, deletes and sends land on a real TomTom account and cannot be recalled. State the action and the specific target in one line before the first write in a task, and let the user stop you. Reads need no confirmation.

## Actions

### Search

| Action | Method | Path | Action id |
|---|---|---|---|
| Fuzzy Search | GET | `/search/{{versionNumber}}/search/{{query}}.{{ext}}` | `conn_mod_def::GMcXUr9b3yA::DpgJ1PZISRqT74zjQq8E4Q` |
| Geometry Filter Using Search | GET | `/search/{{versionNumber}}/geometryFilter.{{ext}}` | `conn_mod_def::GMcXRagWRP0::M84d24wsSKyM1kFgDz9Wsw` |
| Geometry Search | GET | `/search/{{versionNumber}}/geometrySearch/{{query}}.{{ext}}` | `conn_mod_def::GMcXUsBG2s0::YovlKq6jQQ6W03Po1D1jlw` |
| Nearby Search | GET | `/search/{{versionNumber}}/nearbySearch/.{{ext}}` | `conn_mod_def::GMcXUsd3wJg::uULv-mVaQLeW7RzcVTe1Wg` |

### Feedback

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Feedback by ID | GET | `/api/v1/feedback/feedback-id/{{feedbackId}}` | `conn_mod_def::GMcXRIt5Ulg::aOW94DySQAyT-apSxq7ZPg` |
| Get Feedback by Reference ID | GET | `/api/v1/feedback/reference-id/{{referenceId}}` | `conn_mod_def::GMcXRHJf7y4::tjmgEPa7RTu4OhjRUvDy1A` |
| Create Feedback | POST | `/api/v1/feedback` | `conn_mod_def::GMcXRNr9zwc::ML0BvkCDTGuBcf5BwX-R-w` |

### Places

| Action | Method | Path | Action id |
|---|---|---|---|
| Reverse Geocode Using Maps Orbis Places | GET | `/maps/orbis/places/reverseGeocode` | `conn_mod_def::GMcXUQX5wfo::UCBDjdn1RC-JWKWHwsg2tQ` |
| Structured Geocode | GET | `/maps/orbis/places/structuredGeocode` | `conn_mod_def::GMcXR6jcYOc::o_qi7tGQSWOhmpeP8ygKkA` |
| Discover a Location Using Maps Orbis Places | POST | `/maps/orbis/places/discover` | `conn_mod_def::GMcXTCNC6dY::j4ggfZo5TJSM3zNpjiy4vw` |

### Routing

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Route | GET | `/routing/{{versionNumber}}/calculateRoute/{{locations}}/{{contentType}}` | `conn_mod_def::GMcXUhiL0o8::jE60qqLXT-et4M_AgJMBmw` |
| Calculate Long Distance EV Route | POST | `/routing/{{versionNumber}}/calculateLongDistanceEVRoute/{{locations}}/{{contentType}}` | `conn_mod_def::GMcXSI-VndI::rg1TObACTNynsRYJU5JZ3Q` |
| Calculate Route | POST | `/routing/{{versionNumber}}/calculateRoute/{{locations}}/{{contentType}}` | `conn_mod_def::GMcXUgqw6_I::whruBsERSPmqJM3H-FeOfw` |

### FeedbackStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Feedback Status by ID | GET | `/api/v1/feedback/feedback-id/{{feedbackId}}/status` | `conn_mod_def::GMcXRFT_UnM::94Gt9LeQRFCBBryBeVvC1w` |
| Get Feedback Status by Reference ID | GET | `/api/v1/feedback/reference-id/{{referenceId}}/status` | `conn_mod_def::GMcXRZN3RMQ::__I25trAQr6eG0LntzJsPg` |

### TrafficIncidentDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Traffic Incident Details | GET | `/maps/orbis/traffic/incidents/details` | `conn_mod_def::GMcXRxqZNU8::u8IkOT3uRACrF3SN4UzbDA` |
| Get Traffic Incident Details Using Maps Orbis Traffic Incidents | POST | `/maps/orbis/traffic/incidents/details` | `conn_mod_def::GMcXRyKRIsA::hTNEUuuuQC6O9JOzpqcH2w` |

### HillshadeTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Hillshade Tile | GET | `/map/1/tile/{{layer}}/{{type}}/{{zoom}}/{{x}}/{{y}}.{{format}}` | `conn_mod_def::GMcXTJi7OQ0::nQsEaoGQRjys56YvepkArA` |
| Get Hillshade Tile Using Maps Orbis Display | GET | `/maps/orbis/display/hillshade/tile/{{zoom}}/{{x}}/{{y}}` | `conn_mod_def::GMcXURT-2y8::72yGmwjOTTa_k9ZwgJgcdw` |

### ReachableRange

| Action | Method | Path | Action id |
|---|---|---|---|
| Calculate Reachable Range | GET | `/routing/{{versionNumber}}/calculateReachableRange/{{origin}}/{{contentType}}` | `conn_mod_def::GMcXUgL50LA::5T82T_RuTuC78Vr466f-nA` |
| Calculate Reachable Range | POST | `/routing/{{versionNumber}}/calculateReachableRange/{{origin}}/{{contentType}}` | `conn_mod_def::GMcXUftrlL0::0Pk_AKjjQ4i0pf9UtEtzEw` |

### SnapToRoads

| Action | Method | Path | Action id |
|---|---|---|---|
| Synchronous Snap to Roads | GET | `/snapToRoads/{{versionNumber}}` | `conn_mod_def::GMcXU2J2x-s::jquwvub3Qhy9rWlB1QSQRQ` |
| Synchronous Snap to Roads | POST | `/snapToRoads/{{versionNumber}}` | `conn_mod_def::GMcXU5YUMI4::miffLXF6QiaERYVRXorSDw` |

### VectorTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Vector Tile | GET | `/map/2/tile/{{layer}}/{{zoom}}/{{x}}/{{y}}.pbf` | `conn_mod_def::GMcXWKnKXmU::gIgTntUdTwiZdum0uf5fSQ` |
| Get a Vector Tile from TomTom Map Display API V1 | GET | `/map/1/tile/{{layer}}/{{style}}/{{zoom}}/{{x}}/{{y}}.pbf` | `conn_mod_def::GMcXV9TyoBY::jxeqi8s_REa7doM34Zlmfg` |

### AsynchronousSnapToRoadsBatchStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Asynchronous Snap to Roads Batch Status | GET | `/snapToRoads/batch/{{versionNumber}}/{{batchId}}/status` | `conn_mod_def::GMcXQc_VtN8::b_sjA6F_SeW_rykYRk50Uw` |

### SnapToRoadsResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Asynchronous Snap to Roads Results | GET | `/snapToRoads/batch/{{versionNumber}}/{{batchId}}` | `conn_mod_def::GMcXQe2Yuys::R7Rk6N5VSfiNUGyRb_ZiRA` |

### AdditionalData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Additional Data | GET | `/search/{{versionNumber}}/additionalData.{{ext}}` | `conn_mod_def::GMcXQgij10s::qIE2lihhTk2mtgaFUYCtng` |

### LandmarksTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a 3D Landmarks Tile | GET | `/maps/orbis/display/3d/landmarks/tile/{{zoom}}/{{x}}/{{y}}` | `conn_mod_def::GMcXQg6K9VU::QX1-2LzgRs-InKQO1oka-g` |

### LandmarksHeatmap

| Action | Method | Path | Action id |
|---|---|---|---|
| Get 3D Landmarks Heatmap | GET | `/maps/orbis/display/3d/landmarks/heatmap/{{zoom}}/{{x}}/{{y}}/{{landmarkZoom}}` | `conn_mod_def::GMcXQiQSq0U::bagAmUsFS9yTS7_7zo0xkw` |

### BatchSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Synchronous Search Batch | POST | `/search/2/batch/sync.{{outputFormat}}` | `conn_mod_def::GMcXQqDK_Vw::Ty1jgrhaRAu0TgIbxokCIQ` |

### AsynchronousBatchResults

| Action | Method | Path | Action id |
|---|---|---|---|
| Download Asynchronous Batch Results | GET | `/search/2/batch/{{batchId}}` | `conn_mod_def::GMcXQrEwOpw::wmAGLCgIQouM-ZzBA7qM4g` |

### SearchBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit an Asynchronous Search Batch | POST | `/search/2/batch.{{outputFormat}}` | `conn_mod_def::GMcXQrNFiyQ::IO7dzsxYQ6GxswH7IXOAhw` |

### SnapToRoadsBatch

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit Asynchronous Snap to Roads Batch | POST | `/snapToRoads/batch/{{versionNumber}}` | `conn_mod_def::GMcXQxq7Pps::3TLhPZO3TqC3atveOoQB_w` |

### CopyrightInformation

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Copyright Information for a Map | GET | `/maps/orbis/copyrights` | `conn_mod_def::GMcXQy9GuK4::1iG4JHPMTE-n37R0mV2Skw` |

### MapServiceCopyrightCaptions

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Map Service Copyright Captions | GET | `/map/2/copyrights/caption.json` | `conn_mod_def::GMcXQ5TISs0::gXySC5DrTIqLx3DiQ7-ahw` |

### MapCopyrights

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Map Copyrights | GET | `/map/2/copyrights` | `conn_mod_def::GMcXQ5vlHN8::Gw6QRvNcQ8Ota8W5xRGH9w` |

### CopyrightsCaption

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Copyrights Caption Using Maps Orbis Copyrights | GET | `/maps/orbis/copyrights/caption` | `conn_mod_def::GMcXQ8zuTd0::LBqpGlS4T8eDjhxnlETF_Q` |

### EvSearch

| Action | Method | Path | Action id |
|---|---|---|---|
| EV Search by Id | GET | `/search/{{versionNumber}}/evbyid` | `conn_mod_def::GMcXQ9BACv0::kn1AMUqLQgWtgVfVO1TX8g` |

### EvSearchAlongTheRoute

| Action | Method | Path | Action id |
|---|---|---|---|
| EV Search Along the Route | POST | `/search/{{versionNumber}}/alongRoute` | `conn_mod_def::GMcXQ-maPV4::FBMD6w2xR16Mr5EQQbgFEA` |

### EvChargingStations

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Nearby EV Charging Stations | GET | `/search/{{versionNumber}}/evsearch` | `conn_mod_def::GMcXRKgjTMo::Wm2dfKfTSjecZ-_7UUUBEA` |

### GeometryFilter

| Action | Method | Path | Action id |
|---|---|---|---|
| Geometry Filter | POST | `/search/{{versionNumber}}/geometryFilter.{{ext}}` | `conn_mod_def::GMcXRT3599Q::gD5FY-R7Sj6gUMRjppXMVg` |

### FuelPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Fuel Prices | GET | `/search/2/fuelPrice.{{ext}}` | `conn_mod_def::GMcXRV_5Zxw::sIburKZeQXyv_uEaV1B_RA` |

### MapsOrbisPlaces

| Action | Method | Path | Action id |
|---|---|---|---|
| Geocode Using Maps Orbis Places | GET | `/maps/orbis/places/geocode` | `conn_mod_def::GMcXRmRD0_U::yEWp3uJrRtCpwQT9L8nr4A` |

### IntermediateTrafficFlowData

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Intermediate Traffic Flow Data for a City | GET | `/maps/orbis/intermediate-traffic/flow-detailed/{{cityName}}/content.proto` | `conn_mod_def::GMcXRwBG2d8::-bpsW1QvRAWHKHidDxZj9w` |

### TrafficIncidents

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Traffic Incidents for a City | GET | `/maps/orbis/intermediate-traffic/incidents/{{cityName}}/content.xml` | `conn_mod_def::GMcXR2aMvTM::1P1osTFMREiUPsorlqUYeA` |

### TrafficFlowProtobufFeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Traffic Flow Protobuf Feed | GET | `/tsq/hdf-detailed/{{productName}}/{{TOMTOM_API_KEY}}/content.proto` | `conn_mod_def::GMcXSDS9y1w::Mw4Z9be2SS6Uz_N0kQefUA` |

### AsynchronousMatrixJobResult

| Action | Method | Path | Action id |
|---|---|---|---|
| Download an Asynchronous Matrix Job Result | GET | `/routing/matrix/2/async/{{matrixJobId}}/result` | `conn_mod_def::GMcXSDmE8Ks::izRmnzzhSIWwsrtcsWPNyw` |

### AsynchronousMatrixJobStatus

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Asynchronous Matrix Job Status | GET | `/routing/matrix/2/async/{{matrixJobId}}` | `conn_mod_def::GMcXSD0yCFI::cVb5y-a7RqaBsjqnS72EzA` |

### TrafficIncidentsDatexIiFeed

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Traffic Incidents DATEX II Feed | GET | `/tsq/hdt/{{productName}}/{{TOMTOM_API_KEY}}/content.xml` | `conn_mod_def::GMcXSVkoHT4::lhktY_wwQpef8kATtOqz8w` |

### ParkingLocations

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Parking Locations | GET | `/parking/services/1/locations` | `conn_mod_def::GMcXSd_J2II::SkRQ8LxsTCmb_DrOWGnUEA` |

### ParkingAvailability

| Action | Method | Path | Action id |
|---|---|---|---|
| Parking Availability Using Search v2 | GET | `/search/2/parkingAvailability.{{ext}}` | `conn_mod_def::GMcXSfNwKRA::CicyGTyJRPe4c952pVt1ZQ` |

### ParkingPrices

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Parking Prices | GET | `/search/2/parkingPrices.{{ext}}` | `conn_mod_def::GMcXSgnd_Ww::_0tvEv6FQ7a1KPkqrrBpoQ` |

### MatrixRoutingJob

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit a Synchronous Matrix Routing Job | POST | `/routing/matrix/2` | `conn_mod_def::GMcXSti_L-o::lQLC3rXgQauzFxgL6NhFlw` |

### MatrixJobs

| Action | Method | Path | Action id |
|---|---|---|---|
| Submit an Asynchronous Matrix Job | POST | `/routing/matrix/2/async` | `conn_mod_def::GMcXS2Ie4EU::G8fRr61CQiqk1Swhn1T20g` |

### ParkingVectorTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Parking Vector Tiles | GET | `/parking/map/1/tile/{{zoom}}/{{x}}/{{y}}.{{format}}` | `conn_mod_def::GMcXS92QRLk::9nxPtzznTRqEqLHO3yJHaQ` |

### PoiCategories

| Action | Method | Path | Action id |
|---|---|---|---|
| Get POI Categories | GET | `/search/{{versionNumber}}/poiCategories.{{ext}}` | `conn_mod_def::GMcXS-p2Q-8::mKG5N8uwRBioiYPyL90XtA` |

### PlacesSuggest

| Action | Method | Path | Action id |
|---|---|---|---|
| Suggest a Location Using Maps Orbis Places | POST | `/maps/orbis/places/suggest` | `conn_mod_def::GMcXS_wZvQc::_Q7zxMHsR-iTsRXrEZMLyQ` |

### PlacesDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Place Details Using Maps Orbis Places | GET | `/maps/orbis/places/details/{{type}}/{{id}}` | `conn_mod_def::GMcXTAqeUtg::7OTcJ6SrT9aObAe568eCQQ` |

### SatelliteTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Satellite Tile | GET | `/map/1/tile/{{layer}}/{{style}}/{{zoom}}/{{x}}/{{y}}.{{format}}` | `conn_mod_def::GMcXTJXfa6Q::NurNheNETlGGwifAHxGKnA` |

### PoiPhotos

| Action | Method | Path | Action id |
|---|---|---|---|
| Get POI Photos | GET | `/search/2/poiPhoto` | `conn_mod_def::GMcXTLcmEis::HEk7dLOQSIGf7YYtnWrOSQ` |

### MapTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Map Tile | GET | `/map/{{versionNumber}}/tile/{{layer}}/{{style}}/{{zoom}}/{{x}}/{{y}}.{{format}}` | `conn_mod_def::GMcXTL69Ccg::3s3UIAmKRROqjW7JevlOOg` |

### PointsOfInterestDetails

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Points of Interest Details | GET | `/search/2/poiDetails.{{ext}}` | `conn_mod_def::GMcXUCCZbTM::QGxjRKl6TGCW2vzevMP-OQ` |

### StaticImage

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Static Image | GET | `/map/{{versionNumber}}/staticimage` | `conn_mod_def::GMcXUKfI-mc::Q8u_P6T5SBywRt9BLbaaHA` |

### DisplayRasterTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Display Raster Tile Using Maps Orbis | GET | `/maps/orbis/display/raster/tile/{{zoom}}/{{x}}/{{y}}` | `conn_mod_def::GMcXUM25Jb4::6I_24aMISCym9-ZflpwoiA` |

### SatelliteRasterTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Satellite Raster Tiles Using Maps Orbis Display | GET | `/maps/orbis/display/satellite/tile/{{zoom}}/{{x}}/{{y}}` | `conn_mod_def::GMcXUP12Vcc::rvyXo47QRpmwKkr6aoBbUg` |

### SearchAlongRoute

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Along Route | POST | `/search/{{versionNumber}}/searchAlongRoute/{{query}}.{{ext}}` | `conn_mod_def::GMcXUeE-vnM::MfXiNWBjSEiP56pVxdLXiA` |

### CategorySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Category Search | GET | `/search/{{versionNumber}}/categorySearch/{{query}}.{{ext}}` | `conn_mod_def::GMcXUsYZCDU::W9LJdJRCROi2KWHheluf8g` |

### GeometrySearch

| Action | Method | Path | Action id |
|---|---|---|---|
| Geometry Search Using Search v2 | POST | `/search/{{versionNumber}}/geometrySearch/{{query}}.{{ext}}` | `conn_mod_def::GMcXUsr2b7c::DDzivJoQS0ebT_LwKHboWQ` |

### TrafficFlowRasterTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Traffic Flow Raster Tile | GET | `/maps/orbis/traffic/flow/raster/tile/{{zoomLevel}}/{{x}}/{{y}}` | `conn_mod_def::GMcXU1IDdlU::ssDq18fFS0GV83LkGN7Mfw` |

### TrafficFlowVectorTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Traffic Flow Vector Tile | GET | `/maps/orbis/traffic/flow/vector/tile/{{zoomLevel}}/{{x}}/{{y}}` | `conn_mod_def::GMcXU1LYNTs::-jtfGCEvSsemNzzIcOTJHw` |

### PointsOfInterest

| Action | Method | Path | Action id |
|---|---|---|---|
| Search Points of Interest | GET | `/search/{{versionNumber}}/poiSearch/{{query}}.{{ext}}` | `conn_mod_def::GMcXVyWZF0A::PMoVWNPIQcusgiV-VRj-ag` |

### MapStylesMetadata

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Map Styles Metadata | GET | `/map/{{versionNumber}}/{{resourceType}}/{{resourceVersion}}/{{resourceVariant}}/metadata.{{format}}` | `conn_mod_def::GMcXV6PKpEo::T4oHk0thRny66Ohoxu-NIQ` |

### MapStyleResource

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Map Style Resource | GET | `/map/{{versionNumber}}/{{resourceType}}/{{resourceVersion}}/{{resourceVariant}}/{{resourceName}}` | `conn_mod_def::GMcXV6d_8ZY::Bj86_5BhQdO_RC0rfsBTwA` |

### TrafficIncidentRasterTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Traffic Incident Raster Tile Using Maps Orbis | GET | `/maps/orbis/traffic/incidents/raster/tile/{{zoomLevel}}/{{x}}/{{y}}` | `conn_mod_def::GMcXV7zeawY::hc1oiveaT6aSvfV-qlivjA` |

### TrafficIncidentVectorTile

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Traffic Incident Vector Tile | GET | `/maps/orbis/traffic/incidents/vector/tile/{{zoomLevel}}/{{x}}/{{y}}` | `conn_mod_def::GMcXV8GI3AU::IfRdiBLSRdeM4jdptDM0-Q` |

### WmtsCapabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get WMTS Capabilities | GET | `/map/{{versionNumber}}/wmts/{{key}}/{{wmtsVersion}}/WMTSCapabilities.xml` | `conn_mod_def::GMcXWEF-K5o::Mm5Rw2wQRn-jYBzRdKyo2g` |

### Map

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Map Using TomTom Raster Map WMS | GET | `/map/{{versionNumber}}/wms/` | `conn_mod_def::GMcXWFRNKk4::F3Q9OzrwSvC90Aqtn7U0qA` |

### Capabilities

| Action | Method | Path | Action id |
|---|---|---|---|
| Get Capabilities Using Map WMS | GET | `/map/{{versionNumber}}/wms/` | `conn_mod_def::GMcXWFz4L90::AAkqVwGYR_mBYQNVCfE0qg` |

### MapDisplayVectorTiles

| Action | Method | Path | Action id |
|---|---|---|---|
| Get a Map Display Vector Tile Using Maps Orbis Display Vector Tile | GET | `/maps/orbis/display/vector/tile/{{zoom}}/{{x}}/{{y}}` | `conn_mod_def::GMcXWLR0B5g::OrBvIaozSgqOB03RZWnjxQ` |

## When a call fails

The error comes from TomTom, not from One. A 400 or 422 means your parameters do not match the schema, so re-read the knowledge and fix the field. A 401 or 403 means the connection needs re-authorizing, which no retry will fix. A 404 means the id is not on this account. A 429 means slow down. Never retry a write more than once: the first attempt may have landed.

Full catalog: https://www.withone.ai/knowledge/tomtom

Integration knowledge by One (withone.ai), licensed under [One-Knowledge-1.0](https://www.withone.ai/licenses/knowledge). Attribution must be preserved in derivative works.
