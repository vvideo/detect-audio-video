import { isAndroid } from './isAndroid';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#isAndroid', () => {
        mockUserAgent('Mozilla/5.0 (Linux; Android 15; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.135 Mobile Safari/537.36');
        expect(isAndroid()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0');
        expect(isAndroid()).toBeFalsy();

        unmockUserAgent();
    });
});
