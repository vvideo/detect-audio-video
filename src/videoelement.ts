import { getFirefoxVersion } from './device/getFirefoxVersion';
import { isFirefox } from './device/isFirefox';
import { getDefaultVideoElement } from './utils/canPlayType';
import { isSsr } from './utils/isSsr';

export function isRemotePlaybackApiSupported(): boolean {
    if (isSsr) {
        return false;
    }

    const video = getDefaultVideoElement();

    return Boolean(
        // @ts-ignore
        video.webkitShowPlaybackTargetPicker || // Safari
        video.remote?.watchAvailability
    );
}

export function isPipSupported(): boolean {
    if (isSsr) {
        return false;
    }

    if (isFirefox() && getFirefoxVersion() >= 69) {
        return true;
    }

    const video = getDefaultVideoElement();

    return 'pictureInPictureEnabled' in document || 'webkitPresentationMode' in video;
}

export function isDocumentPipSupported() {
    if (isSsr) {
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
