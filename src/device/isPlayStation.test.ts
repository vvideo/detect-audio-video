import { isPlayStationVita, isPlayStation3, isPlayStation4, isPlayStation5 } from './isPlayStation';
import { mockUserAgent, unmockUserAgent } from './mockUserAgent';

describe('device', () => {
    it('#isPlayStation3', () => {
        mockUserAgent('Mozilla/5.0 (PLAYSTATION 3; 3.55)');
        expect(isPlayStation3()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; Xbox)');
        expect(isPlayStation3()).toBeFalsy();

        unmockUserAgent();
    });

    it('#isPlayStation4', () => {
        mockUserAgent('Mozilla/5.0 (PlayStation 4 2.03) AppleWebKit/537.73 (KHTML, like Gecko)');
        expect(isPlayStation4()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10553');
        expect(isPlayStation4()).toBeFalsy();

        unmockUserAgent();
    });

    it('#isPlayStation5', () => {
        mockUserAgent('Mozilla/5.0 (PlayStation 5 3.03/SmartTV) AppleWebKit/605.1.15 (KHTML, like Gecko)');
        expect(isPlayStation5()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10553');
        expect(isPlayStation5()).toBeFalsy();

        unmockUserAgent();
    });

    it('#isPlayStationVita', () => {
        mockUserAgent('Mozilla/5.0 (PlayStation Vita 3.00) AppleWebKit/536.26 (KHTML, like Gecko) VTE/3.00');
        expect(isPlayStationVita()).toBeTruthy();

        mockUserAgent('Mozilla/5.0 (Nintendo Switch; ShareApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.5.9 NintendoBrowser/5.1.0.13341');
        expect(isPlayStationVita()).toBeFalsy();

        unmockUserAgent();
    });
});
