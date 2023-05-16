import { H264_BASELINE_CONTENT_TYPE } from '../contentTypes/video';
import { FAIRPLAY_KEY_SYSTEM, FAIRPLAY_V1_KEY_SYSTEM, FAIRPLAY_V2_KEY_SYSTEM, FAIRPLAY_V3_KEY_SYSTEM } from './keySystems';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export function isFairPlaySupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(FAIRPLAY_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                },
            ],
        },
    ]);
}

export function isFairPlayV1Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(FAIRPLAY_V1_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                },
            ],
        },
    ]);
}

export function isFairPlayV2Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(FAIRPLAY_V2_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                },
            ],
        },
    ]);
}

export function isFairPlayV3Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(FAIRPLAY_V3_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                },
            ],
        },
    ]);
}
