import {
    AV1_CONTENT_TYPE,
    AV1_MAIN10_CONTENT_TYPE,
    AV2_CONTENT_TYPE,
    H264_BASELINE_CONTENT_TYPE,
    H264_HIGH_CONTENT_TYPE,
    H264_MAIN_CONTENT_TYPE,
    VP8_CONTENT_TYPE,
    VP9_CONTENT_TYPE,
    VP9_PROFILE2_LEVEL1_10BIT_CONTENT_TYPE,
    DOLBY_VISION_CONTENT_TYPE,
    HEV_MAIN_CONTENT_TYPE,
    HEV_MAIN10_CONTENT_TYPE,
    HVC_MAIN_CONTENT_TYPE,
    HVC_MAIN10_CONTENT_TYPE,
    MPEG2T_CONTENT_TYPE,
    VVC1_MAIN10_CONTENT_TYPE,
    EVC_BASELINE_CONTENT_TYPE,
    EVC_MAIN_CONTENT_TYPE,
    VVCI_MAIN10_CONTENT_TYPE,
    APPLE_PRO_RES_422_CONTENT_TYPE,
    APPLE_PRO_RES_422_HQ_CONTENT_TYPE,
    APPLE_PRO_RES_422_LT_CONTENT_TYPE,
    APPLE_PRO_RES_422_PROXY_CONTENT_TYPE,
    APPLE_PRO_RES_4444_CONTENT_TYPE,
    APPLE_PRO_RES_4444_XQ_CONTENT_TYPE,
    APPLE_PRO_RES_RAW_CONTENT_TYPE,
    APPLE_PRO_RES_RAW_HQ_CONTENT_TYPE,
    VP9_PROFILE0_CONTENT_TYPE,
    VP9_PROFILE1_CONTENT_TYPE,
    VP9_PROFILE2_CONTENT_TYPE,
} from './contentTypes/video';
import { isContentTypeSupported } from './utils/isContentTypeSupported';

export function isVp8Supported() {
    return isContentTypeSupported(VP8_CONTENT_TYPE);
}

export function isVp9Supported() {
    return isContentTypeSupported(VP9_CONTENT_TYPE);
}

export function isVp9Profile0Supported() {
    return isContentTypeSupported(VP9_PROFILE0_CONTENT_TYPE);
}

export function isVp9Profile1Supported() {
    return isContentTypeSupported(VP9_PROFILE1_CONTENT_TYPE);
}

export function isVp9Profile2Supported() {
    return isContentTypeSupported(VP9_PROFILE2_CONTENT_TYPE);
}

export function isVp9Profile2Level110BitSupported() {
    return isContentTypeSupported(VP9_PROFILE2_LEVEL1_10BIT_CONTENT_TYPE);
}

export function isH264BaselineSupported() {
    return isContentTypeSupported(H264_BASELINE_CONTENT_TYPE);
}

export function isH264MainSupported() {
    return isContentTypeSupported(H264_MAIN_CONTENT_TYPE);
}

export function isH264HighSupported() {
    return isContentTypeSupported(H264_HIGH_CONTENT_TYPE);
}

export function isAV1Supported() {
    return isContentTypeSupported(AV1_CONTENT_TYPE);
}

export function isAV2Supported() {
    return isContentTypeSupported(AV2_CONTENT_TYPE);
}

export function isAV1Main10Supported() {
    return isContentTypeSupported(AV1_MAIN10_CONTENT_TYPE);
}

export function isHevcMainSupported() {
    const result = isContentTypeSupported(HEV_MAIN_CONTENT_TYPE);
    if (result.any) {
        return result;
    }

    return isContentTypeSupported(HVC_MAIN_CONTENT_TYPE);
}

export function isHevcMain10Supported() {
    const resultHev = isContentTypeSupported(HEV_MAIN10_CONTENT_TYPE);
    if (resultHev.any) {
        return resultHev;
    }

    return isContentTypeSupported(HVC_MAIN10_CONTENT_TYPE);
}

export function isDolbyVisionSupported() {
    return isContentTypeSupported(DOLBY_VISION_CONTENT_TYPE);
}

export function isMpeg2TSupported() {
    return isContentTypeSupported(MPEG2T_CONTENT_TYPE);
}

export function isVvcMain10Supported() {
    const result = isContentTypeSupported(VVC1_MAIN10_CONTENT_TYPE);
    if (result.any) {
        return result;
    }

    return isContentTypeSupported(VVCI_MAIN10_CONTENT_TYPE);
}

export function isEvcBaselineSupported() {
    return isContentTypeSupported(EVC_BASELINE_CONTENT_TYPE);
}

export function isEvcMainSupported() {
    return isContentTypeSupported(EVC_MAIN_CONTENT_TYPE);
}

export function isAppleProRes422Supported() {
    return isContentTypeSupported(APPLE_PRO_RES_422_CONTENT_TYPE);
}

export function isAppleProRes422HQSupported() {
    return isContentTypeSupported(APPLE_PRO_RES_422_HQ_CONTENT_TYPE);
}

export function isAppleProRes422LTSupported() {
    return isContentTypeSupported(APPLE_PRO_RES_422_LT_CONTENT_TYPE);
}

export function isAppleProRes422ProxySupported() {
    return isContentTypeSupported(APPLE_PRO_RES_422_PROXY_CONTENT_TYPE);
}

export function isAppleProRes4444Supported() {
    return isContentTypeSupported(APPLE_PRO_RES_4444_CONTENT_TYPE);
}

export function isAppleProRes4444XQSupported() {
    return isContentTypeSupported(APPLE_PRO_RES_4444_XQ_CONTENT_TYPE);
}

export function isAppleProResRAWSupported() {
    return isContentTypeSupported(APPLE_PRO_RES_RAW_CONTENT_TYPE);
}

export function isAppleProResRAWHQSupported() {
    return isContentTypeSupported(APPLE_PRO_RES_RAW_HQ_CONTENT_TYPE);
}
