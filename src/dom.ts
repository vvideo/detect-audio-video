declare global {
    interface Window {
        ManagedMediaSource: typeof MediaSource;
    }
}

export function isMseSupported() {
    return Boolean(
        typeof window !== 'undefined' &&
        window.MediaSource &&
        typeof window.MediaSource.isTypeSupported === 'function'
    );
}

export function isEmeSupported() {
    return Boolean(
            typeof window !== 'undefined' &&
            window.MediaKeys &&
            // @ts-ignore
            window.navigator?.requestMediaKeySystemAccess &&
            window.MediaKeySystemAccess?.prototype.getConfiguration
        );
}

export function isMmsSupported() {
    return Boolean(
        typeof window !== 'undefined' &&
        window.ManagedMediaSource &&
        typeof window.ManagedMediaSource.isTypeSupported === 'function'
    );
}
