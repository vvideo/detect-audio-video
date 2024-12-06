import { TestExpectedData } from './type';

export const tests: TestExpectedData = [
    // PS4 DualShock 4 Wireless Controller [CUH-ZCT1x]
    [
        // MacOS Firefox 133
        '54c-5c4-Wireless Controller',
        {
            name: 'Wireless Controller',
            originalName: '54c-5c4-Wireless Controller',
            originalVendorId: '54c',
            originalProductId: '5c4',
            productId: 1476,
            vendorId: 1356
        }
    ],
    [
        // MacOS Safari 18
        'Wireless Controller Extended Gamepad',
        {
            name: 'Wireless Controller Extended Gamepad',
            originalName: 'Wireless Controller Extended Gamepad'
        }
    ],
    [
        // MacOS Chrome 131.0
        'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
        {
            name: 'Wireless Controller',
            originalName: 'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
            originalVendorId: '054c',
            originalProductId: '05c4',
            productId: 1476,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],

    // PS4 DualShock 4 Wireless Controller [CUH-ZCT2x]
    [
        // MacOS Firefox 133
        '54c-9cc-Wireless Controller',
        {
            name: 'Wireless Controller',
            originalName: '54c-9cc-Wireless Controller',
            originalVendorId: '54c',
            originalProductId: '9cc',
            productId: 2508,
            vendorId: 1356
        }
    ],
    [
        // MacOS Safari 18
        'Wireless Controller Extended Gamepad',
        {
            name: 'Wireless Controller Extended Gamepad',
            originalName: 'Wireless Controller Extended Gamepad'
        }
    ],
    [
        // MacOS Chrome 131.0
        'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)',
        {
            name: 'Wireless Controller',
            originalName: 'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 09cc)',
            originalVendorId: '054c',
            originalProductId: '09cc',
            productId: 2508,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ]
];
