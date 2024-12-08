export function getScreenDepth() {
    return screen.colorDepth;
}

export function isHighDynamicRangeSupported(win: Window = window): boolean | undefined {
    if (win.Hisense_GetSupportForHDR) {
        return win.Hisense_GetSupportForHDR() !== 'not support';
    }

    // @ts-ignore
    const cast = win.cast;
    // Chromecast
    if (cast) {
        return Boolean(cast.framework?.system?.DeviceCapabilities?.IS_HDR_SUPPORTED);
    }

    try {
        const isHighSupported = checkDynamicRange('high', win);
        const isStandardSupported = checkDynamicRange('standard', win);

        if (!isStandardSupported) {
            return undefined;
        }

        return Boolean(isStandardSupported && isHighSupported);
    } catch(e) {}

    return undefined;
}

function checkDynamicRange(type: 'high' | 'standard', win: Window = window) {
    return win.matchMedia && win.matchMedia(`(dynamic-range: ${type})`).matches;
}

export function isHighVideoDynamicRangeSupported(win: Window = window): boolean | undefined {
    try {
        const isHighSupported = checkVideoDynamicRange('high', win);
        const isStandardSupported = checkVideoDynamicRange('standard', win);

        if (!isStandardSupported) {
            return undefined;
        }

        return Boolean(isStandardSupported && isHighSupported);
    } catch(e) {}

    return undefined;
}

function checkVideoDynamicRange(type: 'high' | 'standard', win: Window = window) {
    return win.matchMedia && win.matchMedia(`(video-dynamic-range: ${type})`).matches;
}
