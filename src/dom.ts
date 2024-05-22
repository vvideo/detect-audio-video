declare global {
    interface Window {
        ManagedMediaSource: typeof MediaSource;
    }
}

export function isMseSupported() {
    return Boolean(
        window.MediaSource &&
        typeof window.MediaSource.isTypeSupported === 'function'
    );
}

export function isEmeSupported() {
    return Boolean(window.MediaKeys) &&
        Boolean(window.navigator?.requestMediaKeySystemAccess) &&
        Boolean(window.MediaKeySystemAccess?.prototype.getConfiguration);
}

export function isMmsSupported() {
    return Boolean(
        window.ManagedMediaSource &&
        typeof window.ManagedMediaSource.isTypeSupported === 'function'
    );
}
