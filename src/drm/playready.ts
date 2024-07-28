import { isDrmSupported, IsDrmSupportedParams } from './isDrmSupported';
import { PLAYREADY_RECOMMENDATION_KEY_SYSTEM } from './keySystems';

export function isPlayReadySupported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, params);
}

export function isPlayReadySL150Supported(params: IsDrmSupportedParams = {}): Promise<boolean> {
    return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, {
        ...params,
        robustness: '150'
    });
}

export function isPlayReadySL2000Supported(params: IsDrmSupportedParams = {}): Promise<boolean> {
    return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, {
        ...params,
        robustness: '2000'
    });
}

export function isPlayReadySL3000Supported(params: IsDrmSupportedParams = {}): Promise<boolean> {
    return isDrmSupported(PLAYREADY_RECOMMENDATION_KEY_SYSTEM, {
        ...params,
        robustness: '3000'
    });
}
