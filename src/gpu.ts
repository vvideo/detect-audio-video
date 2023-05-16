export function getGpuVendor() {
    const canvas = document.createElement('canvas');

    try {
        const gl = canvas.getContext('webgl');
        if (gl) {
            return gl.getParameter(gl.VENDOR);
        }
    } catch(e) {}

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

    try {
        const gl = canvas.getContext('webgl');
        if (gl) {
            return gl.getParameter(gl.RENDERER);
        }
    } catch(e) {}

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
