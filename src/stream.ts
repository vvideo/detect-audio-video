import { HLS_CONTENT_TYPE, MPD_CONTENT_TYPE, MSS_CONTENT_TYPE } from './contentTypes/index';
import { canPlayType } from './utils/canPlayType';

export function isNativeHlsSupported() {
    return canPlayType(HLS_CONTENT_TYPE) !== '';
}

export function isNativeMpdSupported() {
    return canPlayType(MPD_CONTENT_TYPE) !== '';
}

export function isNativeMssSupported() {
    return canPlayType(MSS_CONTENT_TYPE) !== '';
}
