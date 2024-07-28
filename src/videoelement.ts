import { getFirefoxVersion } from './device/getFirefoxVersion';
import { isFirefox } from './device/isFirefox';

export function isPipSupported(): boolean {
    if (typeof window === 'undefined') {
        return false;
    }

    if (isFirefox() && getFirefoxVersion() >= 69) {
        return true;
    }

    const video = document.createElement('video');

    return 'pictureInPictureEnabled' in document || 'webkitPresentationMode' in video;
}

export function isDocumentPipSupported() {
    if (typeof window === 'undefined') {
        return false;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/DocumentPictureInPicture
    // @ts-ignore
    return Boolean(window.documentPictureInPicture);
}

export function isCastToAirPlaySupported(): boolean {
    return Boolean(
        typeof window !== 'undefined' &&
        // https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls
        // @ts-ignore
        window.WebKitPlaybackTargetAvailabilityEvent
    );
}
