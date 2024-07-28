# detect-audio-video

[![NPM version](https://img.shields.io/npm/v/detect-audio-video.svg?style=flat)](https://www.npmjs.com/package/detect-audio-video)
[![NPM downloads](https://img.shields.io/npm/dm/detect-audio-video.svg?style=flat)](https://www.npmjs.com/package/detect-audio-video)
[![install size](https://packagephobia.com/badge?p=detect-audio-video)](https://packagephobia.com/result?p=detect-audio-video)

Detect audio and video features in browser.

## [Demo](https://checkdevice.online/en/video/)

## Features

### 🖥️ Screen
- Size
- Device pixel ratio
- HDR support
- Wide gamut
- Color spaces
- [Aspect ratio](https://github.com/vvideo/calc-aspect-ratio)

### ⚙️ GPU
- Vendor
- Renderer

### 🔒 DRM
- Microsoft PlayReady SL150, SL2000, SL3000
- Google Widevine Modular L1, L3
- Apple FairPlay
- Adobe Primetime
- [HDCP](https://github.com/vvideo/hdcp)

### 🏊 Native streaming support
- DASH
- HLS
- MSS

### ⏯ HTMLVideoElement features
- Media Source Extensions
- Encrypted Media Extensions
- Managed Media Source
- Picture-in-picture
- Cast to AirPlay

### 📹 Video codecs
- H.264
- H.265 (HEVC)
- H.266 (VVC)
- Dolby Vision
- EVC
- VP8
- VP9
- AV1

### 🔊 Audio codecs
- AAC
- Opus
- Vorbis
- FLAC
- ALAC
- AC-3 (Dolby Digital)
- EC-3 (Dolby Digital+)
- Dolby Atmos

### 🖼️ Image formats
- GIF
- PNG
- APNG
- JPEG
- JPEG XL
- HEIF/HEIC
- AVIF
- WEBP
- SVG

### 🕍 Platform
- Standalone

## Install
`npm i --save-dev detect-audio-video`

## Using
```js
import { isAacSupported } from 'detect-audio-video';

console.log('AAC supported', isAacSupported());
```

## Links
- [Check device online](https://checkdevice.online/en/video/)
- [Calculate aspect ratio](https://github.com/vvideo/calc-aspect-ratio)
- [HDCP](https://github.com/vvideo/hdcp)

## [License](./LICENSE)
MIT
