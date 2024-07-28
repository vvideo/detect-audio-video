import { isDrmSupported, IsDrmSupportedParams } from './isDrmSupported';
import { WIDEWINE_KEY_SYSTEM } from './keySystems';

export function isWidevineSupported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(WIDEWINE_KEY_SYSTEM, params);
}

export function isWidevineL1Supported(params: IsDrmSupportedParams = {}): Promise<boolean> {
    return isDrmSupported(WIDEWINE_KEY_SYSTEM, {
        ...params,
        robustness: 'HW_SECURE_DECODE',
    });
}

export function isWidevineL3Supported(params: IsDrmSupportedParams = {}): Promise<boolean> {
    return isDrmSupported(WIDEWINE_KEY_SYSTEM, {
        ...params,
        robustness: 'SW_SECURE_DECODE',
    });
}
