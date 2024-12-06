import { TestExpectedData } from './type';

export const tests: TestExpectedData = [
    // PS5 DualSense Wireless Controller
    [
        // MacOS Firefox 133
        '54c-ce6-DualSense Wireless Controller',
        {
            name: 'DualSense Wireless Controller',
            originalName: '54c-ce6-DualSense Wireless Controller',
            originalVendorId: '54c',
            originalProductId: 'ce6',
            productId: 3302,
            vendorId: 1356
        }
    ],
    [
        // MacOS Safari 18
        'DualSense Wireless Controller Extended Gamepad',
        {
            name: 'DualSense Wireless Controller Extended Gamepad',
            originalName: 'DualSense Wireless Controller Extended Gamepad'
        }
    ],
    [
        // MacOS Chrome 131.0
        'DualSense Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)',
        {
            name: 'DualSense Wireless Controller',
            originalName: 'DualSense Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)',
            originalVendorId: '054c',
            originalProductId: '0ce6',
            productId: 3302,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ]
];
