import { isDrmSupported, IsDrmSupportedParams } from './isDrmSupported';
import { CLEAR_KEY_SYSTEM } from './keySystems';

export function isClearKeySupported(params?: IsDrmSupportedParams): Promise<boolean> {
    return isDrmSupported(CLEAR_KEY_SYSTEM, params);
}
