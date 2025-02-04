import { canPlayType } from './canPlayType'
import { isTypeSupported } from './isTypeSupported';

export interface ResultIsContentTypeSupported {
    canPlayType: string;
    isTypeSupported: boolean;
    any: boolean;
    both: boolean;
    mediaElementType: string;
    contentType: string;    
}

export interface ResultIsContentTypeSupportedAsync {
    audio?: ResultIsContentTypeSupported;
    video?: ResultIsContentTypeSupported;
    decodingInfo?: {
        file: MediaCapabilitiesDecodingInfo;
        'media-source': MediaCapabilitiesDecodingInfo
    } 
}

export function isContentTypeSupported(contentType: string): ResultIsContentTypeSupported {
    const canPlayTypeResult = canPlayType(contentType);
    const isTypeSupportedResult = isTypeSupported(contentType);

    let any = canPlayTypeResult !== '' || isTypeSupportedResult;
    let both = canPlayTypeResult !== '' && isTypeSupportedResult;

    // Fix for PS4, old iPad and ...
    if (!isTypeSupportedResult && canPlayTypeResult === 'maybe') {
        any = false;
        both = false;
    }

    return {
        canPlayType: canPlayTypeResult,
        isTypeSupported: isTypeSupportedResult,
        any,
        both,
        mediaElementType: contentType.split('/')[0],
        contentType,
    };
}

export function isContentTypeSupportedAsync(configuration: MediaDecodingConfiguration): Promise<ResultIsContentTypeSupportedAsync> {
    const audioContentTypeSupported = configuration.audio?.contentType ? isContentTypeSupported(configuration.audio?.contentType) : undefined;
    const videoContentTypeSupported = configuration.video?.contentType ? isContentTypeSupported(configuration.video?.contentType) : undefined;

    if (navigator.mediaCapabilities?.decodingInfo) {
        return Promise.all([
            navigator.mediaCapabilities.decodingInfo({
                ...configuration,
                type: 'file'
            }),
            navigator.mediaCapabilities.decodingInfo({
                ...configuration,
                type: 'media-source'                
            }),
        ]).then(data => {
            return {
                audio: audioContentTypeSupported,
                video: videoContentTypeSupported,
                decodingInfo: {
                    file: data[0],
                    'media-source': data[1],
                },
            };
        });
    }

    return Promise.resolve({
        audio: audioContentTypeSupported,
        video: videoContentTypeSupported,
    });
}

