# 4.5.0
Added content types for Apple ProRes:
- ProRes 422, ProRes 422 HQ, ProRes 422 LT, ProRes 422 Proxy 
- ProRes 4444, ProRes 4444 XQ
- ProRes RAW, ProRes RAQ HQ

# 4.4.0
- Added `getMacScreenInches()` and `getMacbookScreenInches()`.

# 4.3.0
- Improvements for `getGpuProblems()`.
- Added `isVirtualMachine()`.

# 4.2.1
Improvements for `getGpuProblems()`.

# 4.2.0
Added `getGpuProblems()` to detect if GPU driver is not installed.

# 4.1.0
Added `isContentTypeSupportedAsync()` with `mediaCapabilities.decodingInfo`.

# 4.0.0
Add helpers:
- `hasTouchScreen()`
- `getMaxTouchPoints()`
- `isPlayStation()`

The result of functions `getWebRTCAudioCodecs()` and `getWebRTCVideoCodecs()` is extended.
Before: `getWebRTCAudioCodecs(onlyMedia?: boolean): RTCRtpCodec[]`
After: `getWebRTCAudioCodecs(onlyMedia?: boolean): { encoding: RTCRtpCodec[]; decoding: RTCRtpCodec[]; }`

# 3.2.1
Small fixes for smallest images.

# 3.2.0
- Fixes for image format support detection.
- Added image formats:
  + BMP
  + ICO
  + TIFF

# 3.1.0
- Fix for detection of Dolby Atmos for old Safari.
- Added PlayStation helpers:
  + `isPlayStationVita()`
  + `isPlayStation3()`
  + `isPlayStation4()`
  + `isPlayStation5()`
  + `isPlayStation6()`

# 3.0.0
Added helpers:
- `isSafari()`
- `isDesktopSafari()`

Added detection of Dolby Atmos for Safari.
Before: `isDolbyAtmosSupported(): boolean`
After: `isDolbyAtmosSupported(): Promise<boolean>`

# 2.9.1
Fixed typo for `isWideGamutSupported()`.

# 2.9.0
Added `isIOS()` helper.

# 2.8.0
Added helpers:
- `isAndroid()`
- `getAndroidVersion()`
- `getAndroidVersionAsString()`

# 2.7.2
Fixed detection of codecs for old iPad, PS4 and ...

# 2.7.1
Fix parser for PS5 and Firefox.

# 2.7.0
Add parser for gamepad names.

# 2.6.1
Fix for WebRTC media filter.

# 2.6.0
Added 4.5K resolution.

# 2.5.0
Added media filter for `getWebRTCAudioCodecs(onlyMedia?: boolean)`.

# 2.4.2
Fix typos.

# 2.4.1
Fix for `isWebRTCSupported`.

# 2.4.0
- Detect if system supports WebRTC.
- Helpers for get audio and video codes for WebRTC.

# 2.3.1
Small fix for `isRemotePlaybackApiSupported()`, added support for Safari.

# 2.3.0
Added helpers:
- `isRemotePlaybackApiSupported()`
- `isMseInWorkersSupported()`
- `isMmsInWorkersSupported()`

# 2.2.2
Fixed TypeScript typings.

# 2.2.1
Fixed TypeScript typings.

# 2.2.0
Added `isAppleSilicon()` helper.

# 2.1.0
Added `isDocumentPipSupported()` helper.

# 2.0.1
Fixed initDataTypes for DRM functions.

# 2.0.0
Changed params for DRM functions.
- `isPlayReadySupported`
- `isWidevineSupported`
- ...

# 1.3.0
Fixes for SSR.

# 1.2.1
- Fix title for SD resolution.

# 1.2.0
- Added `hasHardwareAcceleration` helper.
- Added `isChromium` helper.
- Renamed `getIsMobile` → `isMobile` helper.

# 1.1.2
Fix for more detailed GPU data.

# 1.1.1
MSE support fix.

# 1.1.0
Added 3K resolution.

# 1.0.0
Public release.
