import { getAndroidVersion, getAndroidVersionAsString } from './getAndroidVersion';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    afterAll(() => {
        unmockUserAgent();
    });

    it('#getAndroidVersion', () => {
        mockUserAgent('Mozilla/5.0 (Android 15; Mobile; rv:68.0) Gecko/68.0 Firefox/133.0');
        expect(getAndroidVersion()).toEqual(15);

        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0');
        expect(getAndroidVersion()).toEqual(-1);

        mockUserAgent('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36')
        expect(getAndroidVersion()).toEqual(5.1);
    });

    it('#getAndroidVersionAsString', () => {
        mockUserAgent('Mozilla/5.0 (Android 15; Mobile; rv:68.0) Gecko/68.0 Firefox/133.0');
        expect(getAndroidVersionAsString()).toEqual('15');

        mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0');
        expect(getAndroidVersionAsString()).toEqual('');

        mockUserAgent('Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36')
        expect(getAndroidVersionAsString()).toEqual('5.1.1');

        unmockUserAgent();
    });
});
