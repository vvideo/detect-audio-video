import { TestExpectedData } from './type';

export const tests: TestExpectedData = [
    // Artplay NS 45
    [
        // MacOS Chrome 131
        'Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)',
        {
            name: 'Pro Controller',
            originalName: 'Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)',
            originalVendorId: '057e',
            originalProductId: '2009',
            productId: 8201,
            vendorId: 1406,
            isStandardGamepad: true
        }
    ],
    [
        // MacOS Firefox 133
        '57e-2009-Pro Controller',
        {
            name: 'Pro Controller',
            originalName: '57e-2009-Pro Controller',
            originalVendorId: '57e',
            originalProductId: '2009',
            productId: 8201,
            vendorId: 1406
        }
    ],
    [
        // MacOS Safari 18
        'Pro Controller Extended Gamepad',
        {
            name: 'Pro Controller Extended Gamepad',
            originalName: 'Pro Controller Extended Gamepad',
        }
    ]
];
