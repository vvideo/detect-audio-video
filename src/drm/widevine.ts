import { H264_BASELINE_CONTENT_TYPE } from '../contentTypes/video';
import { WIDEWINE_KEY_SYSTEM } from './keySystems';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export function isWidevineSupported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
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

export function isWidevineL1Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: 'HW_SECURE_DECODE',
                },
            ],
        },
    ]);
}

export function isWidevineL3Supported(contentType = H264_BASELINE_CONTENT_TYPE, initDataTypes = ['cenc']): Promise<boolean> {
    return requestMediaKeySystemAccess(WIDEWINE_KEY_SYSTEM, [
        {
            initDataTypes,
            videoCapabilities: [
                {
                    contentType,
                    robustness: 'SW_SECURE_DECODE',
                },
            ],
        },
    ]);
}
