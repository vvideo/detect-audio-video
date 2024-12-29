import {
    DOLBY_AC3_CONTENT_TYPE,
    AAC_CONTENT_TYPE,
    DOLBY_EC3_CONTENT_TYPE,
    FLAC_CONTENT_TYPE,
    MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE,
    OPUS_CONTENT_TYPE,
    VORBIS_CONTENT_TYPE,
    DTS_CORE_CONTENT_TYPE,
    DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE,
    DTS_HD_LBR_CONTENT_TYPE,
    DTS_UHD_PROFILE_2_CONTENT_TYPE,
    MP3_CONTENT_TYPE,
    MP4_AUDIO_CONTENT_TYPE,
    ALAC_CONTENT_TYPE,
    DOLBY_ATMOS_CONTENT_TYPE,
} from './contentTypes/audio';
import { isSafari } from './device/isSafari';
import { isContentTypeSupported } from './utils/isContentTypeSupported';
import { isSsr } from './utils/isSsr';

declare global {
    interface Window {
        Hisense_GetSupportForDolbyAtmos?: () => boolean;
    }
}

export function isMp3Supported() {
    return isContentTypeSupported(MP3_CONTENT_TYPE);
}

export function isMp4AudioSupported() {
    return isContentTypeSupported(MP4_AUDIO_CONTENT_TYPE);
}

export function isAacSupported() {
    return isContentTypeSupported(AAC_CONTENT_TYPE);
}

export function isDolbyDigitalSupported() {
    return isContentTypeSupported(DOLBY_AC3_CONTENT_TYPE);
}

export function isDolbyDigitalPlusSupported() {
    return isContentTypeSupported(DOLBY_EC3_CONTENT_TYPE);
}

export function isDolbyAtmosSupported(): Promise<boolean> {
    return new Promise(resolve => {
        if (isSsr) {
            return resolve(false);
        }

        // @ts-ignore
        const cast = window.cast;
        // Chromecast
        if (cast) {
            // 'audio/mp4; codecs="ec-3"; spatialRendering=true' - support only on Chromecast
            return resolve(MediaSource.isTypeSupported(DOLBY_ATMOS_CONTENT_TYPE));
        }

        // Hisense VIDAA
        if (window.Hisense_GetSupportForDolbyAtmos) {
            let result = false;
            try {
                result = window.Hisense_GetSupportForDolbyAtmos();
            } catch(e) {}
            return resolve(result);
        }

        // https://webapi.streaming.dolby.com/v0_9/help_files/topics/checking_immersive_capability.html
        if (isSafari() && navigator.mediaCapabilities) {
            navigator.mediaCapabilities.decodingInfo({
                type: 'media-source',
                audio: {
                    contentType: DOLBY_EC3_CONTENT_TYPE,
                    channels: '16',
                    spatialRendering: true
                }
            }).then(data => {
                const supported = Boolean(
                    data.supported &&
                    // Fix for old Safari without Dolby Atmos
                    // @ts-ignore
                    data.supportedConfiguration?.audio?.spatialRendering
                );

                resolve(supported);
            }).catch(() => resolve(false));
        } else {
            resolve(false);
        }
    });
}

export function isMpegHAudioSupported() {
    return isContentTypeSupported(MPEG_H_AUDIO_LC_PROFILE_LEVEL_3_CONTENT_TYPE);
}

export function isVorbisSupported() {
    return isContentTypeSupported(VORBIS_CONTENT_TYPE);
}

export function isFlacSupported() {
    return isContentTypeSupported(FLAC_CONTENT_TYPE);
}

export function isAlacSupported() {
    return isContentTypeSupported(ALAC_CONTENT_TYPE);
}

export function isOpusSupported() {
    return isContentTypeSupported(OPUS_CONTENT_TYPE);
}

export function isDtsSupported() {
    return isContentTypeSupported(DTS_CORE_CONTENT_TYPE);
}

export function isDtsHdSupported() {
    return isContentTypeSupported(DTS_HD_CORE_PLUS_EXTENSION_CONTENT_TYPE);
}

export function isDtsExpressSupported() {
    return isContentTypeSupported(DTS_HD_LBR_CONTENT_TYPE);
}

export function isDtsXSupported() {
    return isContentTypeSupported(DTS_UHD_PROFILE_2_CONTENT_TYPE);
}
