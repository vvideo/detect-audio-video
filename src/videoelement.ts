import { getFirefoxVersion } from './device/getFirefoxVersion';
import { isFirefox } from './device/isFirefox';

export function isPipSupported(): boolean {
    if (isFirefox() && getFirefoxVersion() >= 69) {
        return true;
    }

    const video = document.createElement('video');

    return 'pictureInPictureEnabled' in document || 'webkitPresentationMode' in video;
}

export function isCastToAirPlaySupported(): boolean {
    // https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls
    // @ts-ignore
    return Boolean(window.WebKitPlaybackTargetAvailabilityEvent);
}
