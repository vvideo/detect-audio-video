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

```js
import {
    isWideGamutSupported,
    isSrgbSupported,
    isP3Supported,
    isRec2020Supported,
    getDevicePixelRatio,
    getScreenWidth,
    getScreenHeight,
    getResolutionBadge,
    isHighDynamicRangeSupported,
    isHighVideoDynamicRangeSupported,
} from 'detect-audio-video';

console.log('isWideGamutSupported: ', isWideGamutSupported()); // boolean
console.log('isSrgbSupported: ', isSrgbSupported()); // boolean
console.log('isP3Supported: ', isP3Supported()); // boolean
console.log('isRec2020Supported: ', isRec2020Supported()); // boolean

console.log('getDevicePixelRatio: ', getDevicePixelRatio()); // number

// Get screen width with device pixel ratio
console.log('getScreenWidth: ', getScreenWidth()); // number
// Get screen height with device pixel ratio
console.log('getScreenHeight: ', getScreenHeight()); // number

console.log('getResolutionBadge: ', getResolutionBadge()); // string, example: "4K"

console.log('isHighDynamicRangeSupported: ', isHighDynamicRangeSupported()); // boolean
console.log('isHighVideoDynamicRangeSupported: ', isHighVideoDynamicRangeSupported()); // boolean
```

### ⚙️ [GPU](https://checkdevice.online/en/gpu/)
- Vendor
- Renderer

```js
import {
    getGpuVendor,
    getGpuRenderer,
    hasHardwareAcceleration,
    isAppleSilicon,
    getGpuProblems,
} from 'detect-audio-video';

console.log('getGpuVendor: ', getGpuVendor()); // string, example: "Apple"
console.log('getGpuRenderer: ', getGpuRenderer()); // string, example: "Apple M1, or similar"
console.log('hasHardwareAcceleration: ', hasHardwareAcceleration()); // boolean
console.log('isAppleSilicon: ', isAppleSilicon()); // boolean
console.log('getGpuPromblems: ', getGpuProblems()); // null or ['no driver', ...]
```

### 🔒 [DRM](https://checkdevice.online/en/video/#drm)
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

### ⏯ [HTMLVideoElement features](https://checkdevice.online/en/video/#htmlvideoelement-features)
- Media Source Extensions
- Media Source Extensions in Workers
- Encrypted Media Extensions
- Managed Media Source
- Managed Media Source in Workers
- Picture-in-picture
- Cast to AirPlay
- Remote Playback API

### 📹 [Video codecs](https://checkdevice.online/en/video/#video-codecs)
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

### 🖼️ [Image formats](https://checkdevice.online/en/video/#image-formats)
- GIF
- PNG
- APNG
- JPEG
- JPEG XL
- HEIF/HEIC
- AVIF
- WEBP
- SVG
- ICO
- BMP
- TIFF

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
