import { isIOS } from './isIOS';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#isIOS', () => {
        // Safari on iOS
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1');
        expect(isIOS()).toBeTruthy();

        // Chrome on iOS
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.154 Mobile/15E148 Safari/604.1');
        expect(isIOS()).toBeTruthy();

        // Firefox on iOS
        mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_7_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/133.0 Mobile/15E148 Safari/605.1.15');
        expect(isIOS()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0');
        expect(isIOS()).toBeFalsy();

        unmockUserAgent();
    });
});
