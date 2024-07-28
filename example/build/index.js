(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const H264_BASELINE_CONTENT_TYPE = 'video/mp4; codecs="avc1.42E01E"';
    const VP8_CONTENT_TYPE = 'video/webm; codecs="vp8"';

    const defaultVideoCapabilites = [
        {
            contentType: H264_BASELINE_CONTENT_TYPE,
        },
        {
            contentType: VP8_CONTENT_TYPE,
        },
    ];

    function requestMediaKeySystemAccess(keySystem, supportedConfigurations) {
        if (typeof navigator === 'undefined' || !navigator.requestMediaKeySystemAccess) {
            return Promise.resolve(false);
        }
        return navigator.requestMediaKeySystemAccess(keySystem, supportedConfigurations).then(() => true).catch(() => false);
    }

    function isDrmSupported(keySystem, params = {}) {
        const videoCapabilities = params.videoCapabilities || defaultVideoCapabilites;
        return requestMediaKeySystemAccess(keySystem, [
            {
                distinctiveIdentifier: params.distinctiveIdentifier,
                initDataTypes: params.initDataTypes,
                persistentState: params.persistentState,
                sessionTypes: params.sessionTypes,
                videoCapabilities: videoCapabilities.map(item => {
                    const data = Object.assign({}, item);
                    if (params.encryptionScheme) {
                        data.encryptionScheme = params.encryptionScheme;
                    }
                    if (params.robustness) {
                        data.robustness = params.robustness;
                    }
                    return data;
                }),
            },
        ]);
    }

    const FAIRPLAY_KEY_SYSTEM = 'com.apple.fps';
    const WIDEWINE_KEY_SYSTEM = 'com.widevine.alpha';
    const PLAYREADY_RECOMMENDATION_KEY_SYSTEM = 'com.microsoft.playready.recommendation';
    const PRIMETIME_KEY_SYSTEM = 'com.adobe.primetime';

    function isFairPlaySupported(params) {
        return isDrmSupported(FAIRPLAY_KEY_SYSTEM, params);
    }

    function isWidevineSupported(params) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, params);
    }
    function isWidevineL1Supported(params = {}) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: 'HW_SECURE_DECODE' }));
    }
    function isWidevineL3Supported(params = {}) {
        return isDrmSupported(WIDEWINE_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: 'SW_SECURE_DECODE' }));
    }

    function isPlayReadySupported(params) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, params);
    }
    function isPlayReadySL150Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '150' }));
    }
    function isPlayReadySL2000Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '2000' }));
    }
    function isPlayReadySL3000Supported(params = {}) {
        return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, Object.assign(Object.assign({}, params), { robustness: '3000' }));
    }

    function isPrimetimeSupported(params) {
        return isDrmSupported(PRIMETIME_KEY_SYSTEM, params);
    }

    function getDevicePixelRatio() {
        return window.devicePixelRatio || 1;
    }
    function getScreenWidth() {
        return screen.width * getDevicePixelRatio();
    }
    function getScreenHeight() {
        return screen.height * getDevicePixelRatio();
    }
    function isHighDynamicRangeSupported(win = window) {
        var _a, _b, _c;
        if (win.Hisense_GetSupportForHDR) {
            return win.Hisense_GetSupportForHDR() !== 'not support';
        }
        // @ts-ignore
        const cast = win.cast;
        // Chromecast
        if (cast) {
            return Boolean((_c = (_b = (_a = cast.framework) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.DeviceCapabilities) === null || _c === void 0 ? void 0 : _c.IS_HDR_SUPPORTED);
        }
        try {
            const isHighSupported = checkDynamicRange('high', win);
            const isStandardSupported = checkDynamicRange('standard', win);
            if (!isStandardSupported) {
                return undefined;
            }
            return Boolean(isStandardSupported && isHighSupported);
        }
        catch (e) { }
        return undefined;
    }
    function checkDynamicRange(type, win = window) {
        return win.matchMedia && win.matchMedia(`(dynamic-range: ${type})`).matches;
    }

    function getGpuVendor() {
        if (typeof window === 'undefined') {
            return '';
        }
        const canvas = document.createElement('canvas');
        // Less detailed GPU data
        // try {
        //     const gl = canvas.getContext('webgl');
        //     if (gl) {
        //         return gl.getParameter(gl.VENDOR);
        //     }
        // } catch(e) {}
        try {
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                // @ts-ignore
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                // @ts-ignore
                return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            }
        }
        catch (e) { }
        return '';
    }
    function getGpuRenderer() {
        if (typeof window === 'undefined') {
            return '';
        }
        const canvas = document.createElement('canvas');
        // Less detailed GPU data
        // try {
        //     const gl = canvas.getContext('webgl');
        //     if (gl) {
        //         return gl.getParameter(gl.RENDERER);
        //     }
        // } catch(e) {}
        try {
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                // @ts-ignore
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                // @ts-ignore
                return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
        catch (e) { }
        return '';
    }

    const MPD_CONTENT_TYPE = 'application/dash+xml';
    const HLS_CONTENT_TYPE = 'application/vnd.apple.mpegurl';
    const MSS_CONTENT_TYPE = 'application/vnd.ms-sstr+xml';

    let defaultVideoElement;
    let defaultAudioElement;
    function getDefaultAudioElement() {
        if (!defaultAudioElement) {
            defaultAudioElement = document.createElement('audio');
        }
        return defaultAudioElement;
    }
    function getDefaultVideoElement() {
        if (!defaultVideoElement) {
            defaultVideoElement = document.createElement('video');
        }
        return defaultVideoElement;
    }
    function canPlayType(type) {
        if (typeof window === 'undefined') {
            return '';
        }
        let mediaElement;
        const mediaElementType = type.split('/')[0];
        if (mediaElementType === 'audio') {
            mediaElement = getDefaultAudioElement();
        }
        else {
            mediaElement = getDefaultVideoElement();
        }
        return mediaElement.canPlayType ?
            mediaElement.canPlayType(type) :
            '';
    }

    function isNativeHlsSupported() {
        return canPlayType(HLS_CONTENT_TYPE) !== '';
    }
    function isNativeMpdSupported() {
        return canPlayType(MPD_CONTENT_TYPE) !== '';
    }
    function isNativeMssSupported() {
        return canPlayType(MSS_CONTENT_TYPE) !== '';
    }

    function isMseSupported() {
        return Boolean(typeof window !== 'undefined' &&
            window.MediaSource &&
            typeof window.MediaSource.isTypeSupported === 'function');
    }
    function isEmeSupported() {
        var _a, _b;
        return Boolean(typeof window !== 'undefined' &&
            window.MediaKeys &&
            (
            // @ts-ignore
            (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.requestMediaKeySystemAccess) &&
            ((_b = window.MediaKeySystemAccess) === null || _b === void 0 ? void 0 : _b.prototype.getConfiguration));
    }
    function isMmsSupported() {
        return Boolean(typeof window !== 'undefined' &&
            window.ManagedMediaSource &&
            typeof window.ManagedMediaSource.isTypeSupported === 'function');
    }

    const pre = document.createElement('pre');
    document.body.appendChild(pre);
    Promise.all([
        isPlayReadySupported(),
        isPlayReadySL150Supported(),
        isPlayReadySL2000Supported(),
        isPlayReadySL3000Supported(),
        isWidevineSupported(),
        isWidevineL1Supported(),
        isWidevineL3Supported(),
        isFairPlaySupported(),
        isPrimetimeSupported(),
    ]).then(data => {
        const [playready, playreadySL150, playreadySL2000, playreadySL3000, widevine, widevineL1, widevineL3, fairplay, primetime,] = data;
        const screenWidth = getScreenWidth();
        const screenHeight = getScreenHeight();
        const result = [
            { title: 'Screen size', result: `${screenWidth}×${screenHeight}` },
            { title: 'Color depth', result: `${screen.colorDepth} bit` },
            { title: 'HDR', result: isHighDynamicRangeSupported() },
            { title: 'Device pixel ratio', result: getDevicePixelRatio() },
            { title: 'GPU vendor', result: getGpuVendor() },
            { title: 'GPU renderer', result: getGpuRenderer() },
            {
                title: 'PlayReady', result: playready,
            },
            {
                title: 'PlayReady SL150', result: playreadySL150,
            },
            {
                title: 'PlayReady SL2000', result: playreadySL2000,
            },
            {
                title: 'PlayReady SL3000', result: playreadySL3000,
            },
            {
                title: 'Widevine', result: widevine,
            },
            {
                title: 'Widevine L1', result: widevineL1,
            },
            {
                title: 'Widevine L3', result: widevineL3,
            },
            {
                title: 'FairPlay', result: fairplay,
            },
            {
                title: 'Primetime', result: primetime,
            },
            {
                title: 'Native HLS', result: isNativeHlsSupported(),
            },
            {
                title: 'Native MPD', result: isNativeMpdSupported(),
            },
            {
                title: 'Native MSS', result: isNativeMssSupported(),
            },
            {
                title: 'MSE', result: isMseSupported(),
            },
            {
                title: 'MMS', result: isMmsSupported(),
            },
            {
                title: 'EME', result: isEmeSupported(),
            },
        ];
        pre.innerHTML = result.map((item) => {
            return item.title + ': ' + item.result;
        }).join('<br/>');
    });

}));
