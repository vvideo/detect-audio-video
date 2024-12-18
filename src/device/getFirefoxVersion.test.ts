import { getFirefoxVersion } from './getFirefoxVersion';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#getFirefoxVersion', () => {
        mockUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0');
        expect(getFirefoxVersion()).toEqual(47);

        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0');
        expect(getFirefoxVersion()).toEqual(42);

        mockUserAgent('Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.135 Mobile Safari/537.36');
        expect(getFirefoxVersion()).toEqual(-1);

        unmockUserAgent();
    });
});
