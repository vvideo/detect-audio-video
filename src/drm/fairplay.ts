import { isDrmSupported, IsDrmSupportedParams } from './isDrmSupported';
import { FAIRPLAY_KEY_SYSTEM, FAIRPLAY_V1_KEY_SYSTEM, FAIRPLAY_V2_KEY_SYSTEM, FAIRPLAY_V3_KEY_SYSTEM } from './keySystems';

export function isFairPlaySupported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(FAIRPLAY_KEY_SYSTEM, params);
}

export function isFairPlayV1Supported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(FAIRPLAY_V1_KEY_SYSTEM, params);
}

export function isFairPlayV2Supported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(FAIRPLAY_V2_KEY_SYSTEM, params);
}

export function isFairPlayV3Supported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(FAIRPLAY_V3_KEY_SYSTEM, params);
}
