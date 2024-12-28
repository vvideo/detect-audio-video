import { isMobile } from './isMobile';
import { isSafari } from './isSafari';

export function isDesktopSafari() {
    return isSafari() && !isMobile();
}
