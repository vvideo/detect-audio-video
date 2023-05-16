declare global {
    interface Window {
        ManagedMediaSource: typeof MediaSource;
    }
}

export function isMseSupported() {
    return Boolean(window.MediaSource && window.MediaSource.isTypeSupported);
}

export function isEmeSupported() {
    return Boolean(window.MediaKeys) &&
        Boolean(window.navigator?.requestMediaKeySystemAccess) &&
        Boolean(window.MediaKeySystemAccess?.prototype.getConfiguration);
}

export function isMmsSupported() {
    return Boolean(
        window.ManagedMediaSource &&
        window.ManagedMediaSource.isTypeSupported
    );
}
