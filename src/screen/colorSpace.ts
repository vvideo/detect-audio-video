export function isWideGamutSupported(win: Window = window): boolean {
    return isSrgbSupported(win) || isRec2020Supported(win);
}

export function isSrgbSupported(win: Window = window): boolean {
    return checkColorSpace('srgb', win);
}

export function isP3Supported(win: Window = window): boolean {
    return checkColorSpace('p3', win);
}

export function isRec2020Supported(win: Window = window): boolean {
    return checkColorSpace('rec2020', win);
}

function checkColorSpace(type: 'srgb' | 'p3' | 'rec2020', win: Window = window): boolean {
    return win.matchMedia && win.matchMedia(`(color-gamut: ${type})`).matches;
}
