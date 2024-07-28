import { defaultVideoCapabilites } from './default';
import { requestMediaKeySystemAccess } from './requestMediaKeySystemAccess';

export interface IsDrmSupportedParams {
    distinctiveIdentifier?: MediaKeysRequirement;
    encryptionScheme?: string | null;
    initDataTypes?: string[];
    persistentState?: MediaKeysRequirement;
    robustness?: string;
    sessionTypes?: string[];
    videoCapabilities?: MediaKeySystemMediaCapability[];
}

export function isDrmSupported(keySystem: string, params: IsDrmSupportedParams = {}): Promise<boolean> {
    const videoCapabilities: MediaKeySystemMediaCapability[] = params.videoCapabilities || defaultVideoCapabilites;

    return requestMediaKeySystemAccess(keySystem, [
        {
            distinctiveIdentifier: params.distinctiveIdentifier,
            initDataTypes: params.initDataTypes,
            persistentState: params.persistentState,
            sessionTypes: params.sessionTypes,
            videoCapabilities: videoCapabilities.map(item => {
                const data = {
                    ...item,
                };

                if (params.encryptionScheme) {
                    data.encryptionScheme = params.encryptionScheme;
                }

                if (params.robustness) {
                    data.robustness = params.robustness;
                }

                return data;
            }),
        },
    ]);
}
