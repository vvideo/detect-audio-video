import { TestExpectedData } from './type';

export const tests: TestExpectedData = [
    // PS3 DualShock 3 Wireless Controller
    [
        // MacOS Firefox 133
        '54c-268-PLAYSTATION(R)3 Controller',
        {
            name: 'PLAYSTATION(R)3 Controller',
            originalName: '54c-268-PLAYSTATION(R)3 Controller',
            originalVendorId: '54c',
            originalProductId: '268',
            productId: 616,
            vendorId: 1356
        }
    ],
    [
        // MacOS Safari 18
        'PLAYSTATION(R)3 Controller Extended Gamepad',
        {
            name: 'PLAYSTATION(R)3 Controller Extended Gamepad',
            originalName: 'PLAYSTATION(R)3 Controller Extended Gamepad'
        }
    ],
    [
        // MacOS Chrome 131.0
        'PLAYSTATION(R)3 Controller (STANDARD GAMEPAD Vendor: 054c Product: 0268)',
        {
            name: 'PLAYSTATION(R)3 Controller',
            originalName: 'PLAYSTATION(R)3 Controller (STANDARD GAMEPAD Vendor: 054c Product: 0268)',
            originalVendorId: '054c',
            originalProductId: '0268',
            productId: 616,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],

    // Replica
    [
        // MacOS Firefox 133
        '54c-268-PS3 GamePad',
        {
            name: 'PS3 GamePad',
            originalName: '54c-268-PS3 GamePad',
            originalVendorId: '54c',
            originalProductId: '268',
            productId: 616,
            vendorId: 1356
        }
    ],
    [
        // MacOS Chrome 131.0
        'PS3 GamePad (STANDARD GAMEPAD Vendor: 054c Product: 0268)',
        {
            name: 'PS3 GamePad',
            originalName: 'PS3 GamePad (STANDARD GAMEPAD Vendor: 054c Product: 0268)',
            originalVendorId: '054c',
            originalProductId: '0268',
            productId: 616,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],
    [
        // MacOS Safari 18
        'PS3 GamePad Extended Gamepad',
        {
            name: 'PS3 GamePad Extended Gamepad',
            originalName: 'PS3 GamePad Extended Gamepad'
        }
    ]
];
