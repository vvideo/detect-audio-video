import { H264_BASELINE_CONTENT_TYPE } from '../contentTypes/video';
import { CLEAR_KEY_SYSTEM } from './keySystems';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export function isClearKeySupported(): Promise<boolean> {
    return requestMediaKeySystemAccess(CLEAR_KEY_SYSTEM, [
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
