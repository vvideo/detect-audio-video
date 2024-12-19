import { isSsr } from "./utils/isSsr";

declare global {
    interface Window {
        ManagedMediaSource: typeof MediaSource;
    }
}

export function isMseSupported() {
    return Boolean(
        !isSsr &&
        window.MediaSource &&
        typeof window.MediaSource.isTypeSupported === 'function'
    );
}

export function isEmeSupported() {
    return Boolean(
        !isSsr &&
        window.MediaKeys &&
        // @ts-ignore
        navigator?.requestMediaKeySystemAccess &&
        window.MediaKeySystemAccess?.prototype.getConfiguration
    );
}

export function isMmsSupported() {
    return Boolean(
        !isSsr &&
        window.ManagedMediaSource &&
        typeof window.ManagedMediaSource.isTypeSupported === 'function'
    );
}

export function isMseInWorkersSupported() {
    return Boolean(isMseSupported() && window.MediaSource.canConstructInDedicatedWorker);
}

export function isMmsInWorkersSupported() {
    return Boolean(isMmsSupported() && window.ManagedMediaSource.canConstructInDedicatedWorker);
}