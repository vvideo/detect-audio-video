export function getAndroidVersion() {
    const version = getAndroidVersionAsString();
    return version ? (parseFloat(version) || -1) : -1;
}

export function getAndroidVersionAsString() {
    const match = navigator.userAgent.match(/Android\s([0-9.]+)/);
    return match ? (match[1] || '') : '';
}
