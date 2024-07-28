import { isDrmSupported, IsDrmSupportedParams } from './isDrmSupported';
import { PRIMETIME_KEY_SYSTEM } from './keySystems';

export function isPrimetimeSupported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(PRIMETIME_KEY_SYSTEM, params);
}
