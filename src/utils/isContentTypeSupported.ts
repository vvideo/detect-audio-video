import { canPlayType } from './canPlayType'
import { isTypeSupported } from './isTypeSupported';

export function isContentTypeSupported(contentType: string) {
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
