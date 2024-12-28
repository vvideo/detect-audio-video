export function isSafari() {
    const { userAgent } = navigator;
    return userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; 
}
