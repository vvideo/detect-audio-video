export let defaultVideoElement: HTMLVideoElement | undefined;
export let defaultAudioElement: HTMLAudioElement | undefined;

export function resetDefaultMediaElements() {
    defaultVideoElement = undefined;
    defaultAudioElement = undefined;
}

export function canPlayType(type: string) {
    let mediaElement: HTMLVideoElement | HTMLAudioElement;

    const mediaElementType = type.split('/')[0];
    if (mediaElementType === 'audio') {
        if (!defaultAudioElement) {
            defaultAudioElement = document.createElement('video');
        }

        mediaElement = defaultAudioElement;
    } else {
        if (!defaultVideoElement) {
            defaultVideoElement = document.createElement('video');
        }

        mediaElement = defaultVideoElement;
    }

    return mediaElement.canPlayType ?
        mediaElement.canPlayType(type) :
        '';
}
