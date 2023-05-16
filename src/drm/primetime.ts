import { H264_BASELINE_CONTENT_TYPE } from '../contentTypes/video';
import { PRIMETIME_KEY_SYSTEM } from './keySystems';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export function isPrimetimeSupported(): Promise<boolean> {
    return requestMediaKeySystemAccess(PRIMETIME_KEY_SYSTEM, [
        {
            initDataTypes: ['cenc'],
            videoCapabilities: [
                {
                    contentType: H264_BASELINE_CONTENT_TYPE,
                },
            ],
        },
    ]);
}
