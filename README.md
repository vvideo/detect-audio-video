# detect-audio-video

[![NPM version](https://img.shields.io/npm/v/detect-audio-video.svg?style=flat)](https://www.npmjs.com/package/detect-audio-video)
[![NPM downloads](https://img.shields.io/npm/dm/detect-audio-video.svg?style=flat)](https://www.npmjs.com/package/detect-audio-video)

Detect audio and video features in browser.

## [Demo](https://checkdevice.online/en/video/)

## Install
`npm i --save-dev detect-audio-video`

## Features

### 🖥️ [Screen](https://checkdevice.online/en/screen/)
- Size
- Device pixel ratio
- HDR support
- Wide gamut
- Color spaces
- [Aspect ratio](https://github.com/vvideo/calc-aspect-ratio)

### ⚙️ [GPU](https://checkdevice.online/en/gpu/)
- Vendor
- Renderer

```js
import {
    getGpuVendor,
    getGpuRenderer,
    hasHardwareAcceleration,
    isAppleSilicon,
} from 'detect-audio-video';

console.log('getGpuVendor: ', getGpuVendor()); // string, example: "Apple"
console.log('getGpuRenderer: ', getGpuRenderer()); // string, example: "Apple M1, or similar"
console.log('hasHardwareAcceleration: ', hasHardwareAcceleration()); // boolean
console.log('isAppleSilicon: ', isAppleSilicon()); // boolean
```

### 🔒 [DRM](https://checkdevice.online/en/video/)
- Microsoft PlayReady SL150, SL2000, SL3000
- Google Widevine Modular L1, L3
- Apple FairPlay
- Adobe Primetime
- [HDCP](https://github.com/vvideo/hdcp)

### 🏊 Native streaming support
- DASH
- HLS
- MSS

```js
import {
    isNativeHlsSupported,
    isNativeMpdSupported,
    isNativeMssSupported,
} from 'detect-audio-video';

console.log('isNativeMssSupported: ', isNativeMssSupported()); // boolean
console.log('isNativeHlsSupported: ', isNativeHlsSupported()); // boolean
console.log('isNativeMpdSupported: ', isNativeMpdSupported()); // boolean
```

### ⏯ [HTMLVideoElement features](https://checkdevice.online/en/video/)
- Media Source Extensions
- Media Source Extensions in Workers
- Encrypted Media Extensions
- Managed Media Source
- Managed Media Source in Workers
- Picture-in-picture
- Cast to AirPlay
- Remote Playback API

### 📹 [Video codecs](https://checkdevice.online/en/video/)
- H.264
- H.265 (HEVC)
- H.266 (VVC)
- Dolby Vision
- EVC
- VP8
- VP9
- AV1

### 🔊 [Audio codecs](https://checkdevice.online/en/audio/)
- AAC
- Opus
- Vorbis
- FLAC
- ALAC
- AC-3 (Dolby Digital)
- EC-3 (Dolby Digital+)
- Dolby Atmos

### 🖼️ [Image formats](https://checkdevice.online/en/video/)
- GIF
- PNG
- APNG
- JPEG
- JPEG XL
- HEIF/HEIC
- AVIF
- WEBP
- SVG

### 🕍 [Platform](https://checkdevice.online/en/platform/)
- Standalone

### ✨ [WebRTC](https://checkdevice.online/en/webrtc/)
- Support
- Audio and video codecs

### 🎮 [Gamepad](https://checkdevice.online/en/gamepad/)
- Parser for gamepad name

## Links
- [Check device online](https://checkdevice.online/en/video/)
- [Calculate aspect ratio](https://github.com/vvideo/calc-aspect-ratio)
- [HDCP](https://github.com/vvideo/hdcp)

## [License](./LICENSE)
MIT
