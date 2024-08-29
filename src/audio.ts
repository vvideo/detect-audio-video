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
} from './contentTypes/audio';
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

// audio/mp4; codecs="ec-3"; spatialRendering=true - no support
export function isDolbyAtmosSupported() {
    if (isSsr) {
        return false;
    }

    // @ts-ignore
    const cast = window.cast;
    // Chromecast
    if (cast) {
        return Boolean(cast.framework?.system?.DeviceCapabilities?.IS_DOLBY_ATMOS_SUPPORTED);
    }

    let result = false;
    // Hisense VIDAA
    if (window.Hisense_GetSupportForDolbyAtmos) {
        try {
            result = window.Hisense_GetSupportForDolbyAtmos();
        } catch(e) {}
    }

    return result;
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
