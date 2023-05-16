import { H264_BASELINE_CONTENT_TYPE } from '../contentTypes/video';
import { PLAYREADY_KEY_SYSTEM, PLAYREADY_RECOMMENDATION_KEY_SYSTEM } from './keySystems';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export function isPlayReadySupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
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

export function isPlayReadySL150Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(PLAYREADY_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: '150',
                },
            ],
        },
    ]);
}

export function isPlayReadySL2000Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: '2000',
                },
            ],
        },
    ]);
}

export function isPlayReadySL3000Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: '3000',
                },
            ],
        },
    ]);
}
