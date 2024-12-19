// https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
export function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
