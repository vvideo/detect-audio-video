import { getScreenHeight, getScreenWidth } from '../size';

export function getMacScreenInches() {
    const rawWidth = getScreenWidth();
    const rawHeight = getScreenHeight();
    const width = Math.max(rawWidth, rawHeight);
    const height = Math.min(rawWidth, rawHeight);

    // TODO: Update when new models are released. 
    const appleDisplays = [
        {
            name: '24-inch iMac (M1, 2021)',
            inches: 24,
            resolution: { width: 4480, height: 2520 }, // 4.5K
        },
        {
            name: '21.5-inch iMac (4K, 2017–2019) / LG UltraFine 4K Display',
            inches: 21.5,
            resolution: { width: 4096, height: 2304 }, // 4K
        },
        {
            name: 'Apple Pro Display XDR (6K)',
            inches: 32,
            resolution: { width: 6016, height: 3384 }, // 6K
        },
        {
            name: 'LG UltraFine 5K Display / 27-inch iMac (5K, 2020 or earlier)',
            inches: 27,
            resolution: { width: 5120, height: 2880 }, // 5K
        },
    ];

    const detectedDisplay = appleDisplays.find((display) =>
        display.resolution.width === width && display.resolution.height === height
    );

    if (detectedDisplay) {
        return {
            inches: detectedDisplay.inches,
            name: detectedDisplay.name,
        };
    } else {
        return {
            inches: null,
            name: 'Unknown display (non-Apple or custom resolution)',
        };
    }
}
