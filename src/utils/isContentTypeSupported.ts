import { canPlayType } from './canPlayType'
import { isTypeSupported } from './isTypeSupported';

export function isContentTypeSupported(contentType: string) {
    const canPlayTypeResult = canPlayType(contentType);
    const isTypeSupportedResult = isTypeSupported(contentType);

    return {
        canPlayType: canPlayTypeResult,
        isTypeSupported: isTypeSupportedResult,
        any: canPlayTypeResult !== '' || isTypeSupportedResult,
        both: canPlayTypeResult !== '' && isTypeSupportedResult,
        mediaElementType: contentType.split('/')[0],
        contentType,
    };
}
