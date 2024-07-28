import { AAC_CONTENT_TYPE, OPUS_CONTENT_TYPE } from '../contentTypes/audio';
import { H264_BASELINE_CONTENT_TYPE, VP8_CONTENT_TYPE } from '../contentTypes/video';

export const encryptionSchemes = [
    null,
    'cenc',
    'cbcs',
    'cbcs-1-9',
];

export const defaultVideoCapabilites: MediaKeySystemMediaCapability[] = [
    {
        contentType: H264_BASELINE_CONTENT_TYPE,
    },
    {
        contentType: VP8_CONTENT_TYPE,
    },
];

export const defaultAudioCapabilites: MediaKeySystemMediaCapability[] = [
    {
        contentType: AAC_CONTENT_TYPE,
    },
    {
        contentType: OPUS_CONTENT_TYPE,
    },
];


