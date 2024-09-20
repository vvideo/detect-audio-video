declare global {
    interface Window {
        Hisense_GetSupportForHDR?: () => string;
    }
}

export function getDevicePixelRatio() {
    return window.devicePixelRatio || 1;
}

export function getScreenWidth() {
    return screen.width * getDevicePixelRatio();
}

export function getScreenHeight() {
    return screen.height * getDevicePixelRatio();
}

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

export function isHighVideoDynamicRangeSupported(win = window): boolean | undefined {
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


function checkVideoDynamicRange(type: 'high' | 'standard', win = window) {
    return win.matchMedia && win.matchMedia(`(video-dynamic-range: ${type})`).matches;
}

// 30720×17280
const SCREEN_32K = [[30720, 17280]];

// 15360×8640
const SCREEN_16K = [[15360, 8640]];

// 7680×4320, 8192×4320, 10000×3600, 10240×4320, 10240×5760
const SCREEN_10K = [[7680, 4320], [8192, 4320], [10000, 3600], [10240, 4320], [10240, 5760]];

// 7680×2160, 7680×4320, 8192×1024, 8192×1638, 8192×4320, 8192×5120
// 8192×5464, 8192×6144, 8192×8192, 8400×3600
const SCREEN_8K = [
    [7680, 2160], [7680, 4320], [8192, 1024], [8192, 1638], [8192, 4320], [8192, 5120],
    [8192, 5464], [8192, 6144], [8192, 8192], [8400, 3600]
];

// 5760×3240, 6016×3200, 6016×3384, 6144×3240, 6144×3456, 6400×4096
const SCREEN_6K = [[5760, 3240], [6016, 3200], [6016, 3384], [6144, 3240], [6144, 3456], [6400, 4096]];

// 5120×1440, 5120×2160, 5120×2700, 5120×2880, 5120×3840, 5280×2160
const SCREEN_5K = [[5120, 1440], [5120, 2160], [5120, 2700], [5120, 2880], [5120, 3840], [5280, 2160]];

// 3656×2664, 3840×2160, 3996×2160, 4096×1716, 4096×2160, 4096×3072
const SCREEN_4K = [[3656, 2664], [3840, 2160], [3996, 2160], [4096, 1716], [4096, 2160], [4096, 3072]];

// 3000x2000
const SCREEN_3K = [[3000, 2000]];

// 2560×1440
const SCREEN_2d5K = [[2560, 1440]];

// 2048×1080, 1998×1080, 2048×858
const SCREEN_2K = [[1998, 1080], [2048, 1080], [2048, 858]];

// 1920×1080
const SCREEN_FULLHD = [[1920, 1080]];

// 1280×720
const SCREEN_HD = [[1280, 720]];

// SD: 854×480, 640×360, 426×240

export function is32KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_32K, width, height);
}

export function is16KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_16K, width, height);
}

export function is10KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_10K, width, height);
}

export function is8KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_8K, width, height);
}

export function is6KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_6K, width, height);
}

export function is5KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_5K, width, height);
}

export function is4KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_4K, width, height);
}

export function is3KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_3K, width, height);
}

export function is2dot5KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_2d5K, width, height);
}

export function is2KScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_2K, width, height);
}

export function isFullHDScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_FULLHD, width, height);
}

export function isHDScreenSupported(width = getScreenWidth(), height = getScreenHeight()) {
    return isMoreOrEqual(SCREEN_HD, width, height);
}

export function isSDScreenSupported() {
    return true;
}

export function isMoreOrEqual(sizes: number[][], width: number, height: number) {
    return checkSize(sizes, width, height) > -1;
}

export function checkSize(sizes: number[][], width: number, height: number) {
    let isLess = true;

    for (let i = 0; i < sizes.length; i++) {
        const item = sizes[i];
        if (width === item[0] && height === item[1]) {
            return 0;
        }

        if (width >= item[0]) {
            isLess = false;
        }
    }

    if (isLess) {
        return -1;
    }

    return 1;
}

export function getResolutionBadge(width = getScreenWidth(), height = getScreenHeight()) {
    const items: Array<{ sizes: number[][], title: string }> = [
        {
            sizes: [[0, 0]],
            title: 'SD',
        },
        {
            sizes: SCREEN_HD,
            title: 'HD'
        },
        {
            sizes: SCREEN_FULLHD,
            title: 'FullHD'
        },
        {
            sizes: SCREEN_2K,
            title: '2K'
        },
        {
            sizes: SCREEN_2d5K,
            title: '2.5K'
        },
        {
            sizes: SCREEN_3K,
            title: '3K'
        },
        {
            sizes: SCREEN_4K,
            title: '4K'
        },
        {
            sizes: SCREEN_5K,
            title: '5K'
        },
        {
            sizes: SCREEN_6K,
            title: '6K'
        },
        {
            sizes: SCREEN_8K,
            title: '8K'
        },
        {
            sizes: SCREEN_10K,
            title: '10K'
        },
        {
            sizes: SCREEN_16K,
            title: '16K'
        },
        {
            sizes: SCREEN_32K,
            title: '32K'
        },
    ];

    let supportedSize = items[0].title;

    for (const item of items) {
        const result = checkSize(item.sizes, width, height);
        if (result === 0) {
            supportedSize = item.title;
        } else if (result === -1) {
            break;
        } else {
            supportedSize = `>${item.title}`
        }
    }

    return supportedSize;
}

export function isWideGamutSupported(win = window): boolean {
    return isSrgbSupported(win) || isRec2020Supported(win);
}

export function isSrgbSupported(win = window): boolean {
    return checkColorSpace('srgb', win);
}

export function isP3Supported(win = window): boolean {
    return checkColorSpace('p3', win);
}

export function isRec2020Supported(win = window): boolean {
    return checkColorSpace('rec2020', win);
}

function checkColorSpace(type: 'srgb' | 'p3' | 'rec2020', win = window): boolean {
    return win.matchMedia && win.matchMedia(`(color-gamut: ${type})`).matches;
}
