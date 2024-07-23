export let defaultVideoElement: HTMLVideoElement | undefined;
export let defaultAudioElement: HTMLAudioElement | undefined;

export function resetDefaultMediaElements() {
    defaultVideoElement = undefined;
    defaultAudioElement = undefined;
}

export function getDefaultAudioElement() {
    if (!defaultAudioElement) {
        defaultAudioElement = document.createElement('audio');
    }

    return defaultAudioElement;
}

export function getDefaultVideoElement() {
    if (!defaultVideoElement) {
        defaultVideoElement = document.createElement('video');
    }

    return defaultVideoElement;
}

export function canPlayType(type: string) {
    if (typeof window === 'undefined') {
        return '';
    }

    let mediaElement: HTMLVideoElement | HTMLAudioElement;

    const mediaElementType = type.split('/')[0];
    if (mediaElementType === 'audio') {
        mediaElement = getDefaultAudioElement();
    } else {
        mediaElement = getDefaultVideoElement();
    }

    return mediaElement.canPlayType ?
        mediaElement.canPlayType(type) :
        '';
}
