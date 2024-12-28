import { isSafari } from './isSafari';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#isSafari', () => {
        // Safari on iOS 
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1');
        expect(isSafari()).toBeTruthy();

        // Chrome on iOS
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.154 Mobile/15E148 Safari/604.1');
        expect(isSafari()).toBeTruthy();

        // Firefox on iOS
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/133.0 Mobile/15E148 Safari/605.1.15');
        expect(isSafari()).toBeTruthy();

        // Android
        mockUserAgent('Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.200 Mobile Safari/537.36');
        expect(isSafari()).toBeFalsy();

        unmockUserAgent();
    });
});
