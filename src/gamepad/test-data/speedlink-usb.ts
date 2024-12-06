import { TestExpectedData } from './type';

export const tests: TestExpectedData = [
    [
        // SpeedLink USB gamepad, MacOS Chrome 131
        'Generic USB Joystick (STANDARD GAMEPAD Vendor: 0079 Product: 0006)',
        {
            name: 'Generic USB Joystick',
            originalName: 'Generic USB Joystick (STANDARD GAMEPAD Vendor: 0079 Product: 0006)',
            originalVendorId: '0079',
            originalProductId: '0006',
            productId: 6,
            vendorId: 121,
            isStandardGamepad: true
        }
    ],
    [
        // SpeedLink USB gamepad, MacOS Firefox 133
        '79-6-Generic USB Joystick',
        {
            name: 'Generic USB Joystick',
            originalName: '79-6-Generic USB Joystick',
            originalVendorId: '79',
            originalProductId: '6',
            productId: 6,
            vendorId: 121
        }
    ],
    [
        // SpeedLink USB gamepad, MacOS Safari 18
        'Generic USB Joystick Extended Gamepad',
        {
            name: 'Generic USB Joystick Extended Gamepad',
            originalName: 'Generic USB Joystick Extended Gamepad'
        }
    ]
];
