export function requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]) {
    if (!navigator.requestMediaKeySystemAccess) {
        return Promise.resolve(false);
    }

    return navigator.requestMediaKeySystemAccess(
        keySystem,
        supportedConfigurations,
    ).then(() => true).catch(() => false);
}
