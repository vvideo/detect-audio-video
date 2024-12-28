import { isDesktopSafari } from './isDesktopSafari';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#isDesktopSafari', () => {
        // Desktop Safari
        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15');
        expect(isDesktopSafari()).toBeTruthy();

        // Safari on iOS 
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1');
        expect(isDesktopSafari()).toBeFalsy();

        // Android
        mockUserAgent('Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.200 Mobile Safari/537.36');
        expect(isDesktopSafari()).toBeFalsy();

        unmockUserAgent();
    });
});
