import { H264_BASELINE_CONTENT_TYPE } from "./contentTypes/video";
import { isChromium } from "./device/isChromium";

export function getGpuVendor() {
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
    } catch (e) {}

    return '';
}

export function getGpuRenderer(): string {
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
    } catch (e) {}

    return '';
}

export function hasHardwareAcceleration(): Promise<boolean | undefined> {
    if (!isChromium() || !navigator.mediaCapabilities || !navigator.mediaCapabilities.decodingInfo) {
        return Promise.resolve(undefined);
    }

    return navigator.mediaCapabilities.decodingInfo({
        type: 'file',
        video: {
            contentType: H264_BASELINE_CONTENT_TYPE,
            width: 800,
            height: 600,
            bitrate: 100000,
            framerate: 30,
        }
    }).then(result => result.powerEfficient).catch(() => undefined);
}
