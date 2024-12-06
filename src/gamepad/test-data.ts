export const tests: Array<[string, {
    name: string;
    originalName: string;
    originalVendorId?: string;
    vendorId?: number;
    originalProductId?: string;
    productId?: number;
    isXInput?: boolean;
    isStandardGamepad?: boolean;
} ]> = [
    [
        'Wireless Controller (Vendor: 054c Product: 0ce6)',
        {
            name: 'Wireless Controller',
            originalName: 'Wireless Controller (Vendor: 054c Product: 0ce6)',
            originalVendorId: '054c',
            originalProductId: '0ce6',
            productId: 3302,
            vendorId: 1356
        }
    ],
    [
        'Logitech Dual Action (STANDARD GAMEPAD Vendor: 046d Product: c216)',
        {
            name: 'Logitech Dual Action',
            originalName: 'Logitech Dual Action (STANDARD GAMEPAD Vendor: 046d Product: c216)',
            originalVendorId: '046d',
            originalProductId: 'c216',
            productId: 49686,
            vendorId: 1133,
            isStandardGamepad: true
        }
    ],
    [
        '054c-0ce6-Wireless Controller',
        {
            name: 'Wireless Controller',
            originalName: '054c-0ce6-Wireless Controller',
            originalVendorId: '054c',
            originalProductId: '0ce6',
            productId: 3302,
            vendorId: 1356
        }
    ],
    [
        'Wireless Controller Extended Gamepad',
        {
            name: 'Wireless Controller Extended Gamepad',
            originalName: 'Wireless Controller Extended Gamepad',
            originalVendorId: undefined,
            originalProductId: undefined,
            vendorId: undefined,
            productId: undefined
        }
    ],
    [
        'Sony Interactive Entertainment Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 054c)',
        {
            name: 'Sony Interactive Entertainment Wireless Controller',
            originalName: 'Sony Interactive Entertainment Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 054c)',
            originalVendorId: '054c',
            originalProductId: '054c',
            productId: 1356,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],
    [
        'Wireless Gamepad (STANDARD GAMEPAD Vendor: 057e Product: 2009)',
        {
            name: 'Wireless Gamepad',
            originalName: 'Wireless Gamepad (STANDARD GAMEPAD Vendor: 057e Product: 2009)',
            originalVendorId: '057e',
            originalProductId: '2009',
            productId: 8201,
            vendorId: 1406,
            isStandardGamepad: true
        }
    ],
    [
        'DUALSHOCK 4 Wireless Controller Extended Gamepad',
        {
            name: 'DUALSHOCK 4 Wireless Controller Extended Gamepad',
            originalName: 'DUALSHOCK 4 Wireless Controller Extended Gamepad',
            originalVendorId: undefined,
            originalProductId: undefined,
            productId: undefined,
            vendorId: undefined
        }

    ],
    [
        'USB Gamepad (Vendor: 0810 Product: 0001)',
        {
            name: 'USB Gamepad',
            originalName: 'USB Gamepad (Vendor: 0810 Product: 0001)',
            originalVendorId: '0810',
            originalProductId: '0001',
            productId: 1,
            vendorId: 2064
        }
    ],
    [
        'Twin USB Gamepad (Vendor: 0810 Product: 0001)',
        {
            name: 'Twin USB Gamepad',
            originalName: 'Twin USB Gamepad (Vendor: 0810 Product: 0001)',
            originalVendorId: '0810',
            originalProductId: '0001',
            productId: 1,
            vendorId: 2064
        }
    ],
    [
        'vJoy - Virtual Joystick (Vendor: 1234 Product: bead)',
        {
            name: 'vJoy - Virtual Joystick',
            originalName: 'vJoy - Virtual Joystick (Vendor: 1234 Product: bead)',
            originalVendorId: '1234',
            originalProductId: 'bead',
            productId: 48813,
            vendorId: 4660
        }
    ],
    [
        'Twin USB Joystick (Vendor: 0810 Product: 0001)',
        {
            name: 'Twin USB Joystick',
            originalName: 'Twin USB Joystick (Vendor: 0810 Product: 0001)',
            originalVendorId: '0810',
            originalProductId: '0001',
            productId: 1,
            vendorId: 2064
        }
    ],
    [
        'Unknown Gamepad (STANDARD GAMEPAD Vendor: 054c Product: 09cc)',
        {
            name: 'Unknown Gamepad',
            originalName: 'Unknown Gamepad (STANDARD GAMEPAD Vendor: 054c Product: 09cc)',
            originalVendorId: '054c',
            originalProductId: '09cc',
            productId: 2508,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],
    [
        'PLAYSTATION(R)3 Controller (Vendor: 054c Product: 0268)',
        {
            name: 'PLAYSTATION(R)3 Controller',
            originalName: 'PLAYSTATION(R)3 Controller (Vendor: 054c Product: 0268)',
            originalVendorId: '054c',
            originalProductId: '0268',
            productId: 616,
            vendorId: 1356
        }
    ],
    [
        'PS3 GamePad (Vendor: 054c Product: 0268)',
        {
            name: 'PS3 GamePad',
            originalName: 'PS3 GamePad (Vendor: 054c Product: 0268)',
            originalVendorId: '054c',
            originalProductId: '0268',
            productId: 616,
            vendorId: 1356
        }
    ],
    [
        'USB Joystick (Vendor: 0079 Product: 0006)',
        {
            name: 'USB Joystick',
            originalName: 'USB Joystick (Vendor: 0079 Product: 0006)',
            originalVendorId: '0079',
            originalProductId: '0006',
            productId: 6,
            vendorId: 121
        }
    ],
    [
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
        'Generic USB Joystick (Vendor: 0079 Product: 0006)',
        {
            name: 'Generic USB Joystick',
            originalName: 'Generic USB Joystick (Vendor: 0079 Product: 0006)',
            originalVendorId: '0079',
            originalProductId: '0006',
            productId: 6,
            vendorId: 121
        }
    ],
    [
        'Wireless controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
        {
            name: 'Wireless controller',
            originalName: 'Wireless controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
            originalVendorId: '054c',
            originalProductId: '05c4',
            productId: 1476,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],
    [
        '054c-05c4-Wireless Controller',
        {
            name: 'Wireless Controller',
            originalName: '054c-05c4-Wireless Controller',
            originalVendorId: '054c',
            originalProductId: '05c4',
            productId: 1476,
            vendorId: 1356
        }
    ],
    [
        '054c-09cc-Wireless Controller',
        {
            name: 'Wireless Controller',
            originalName: '054c-09cc-Wireless Controller',
            originalVendorId: '054c',
            originalProductId: '09cc',
            productId: 2508,
            vendorId: 1356
        }
    ],
    [
        'xinput',
        {
            name: 'xinput',
            originalName: 'xinput',
            originalVendorId: undefined,
            originalProductId: undefined,
            isXInput: true
        }
    ],
    [
        'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)',
        {
            name: 'Wireless Controller',
            originalName: 'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 0ce6)',
            originalVendorId: '054c',
            originalProductId: '0ce6',
            productId: 3302,
            vendorId: 1356,
            isStandardGamepad: true
        }
    ],
    [
        'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
        {
            name: 'Wireless Controller',
            originalName: 'Wireless Controller (STANDARD GAMEPAD Vendor: 054c Product: 05c4)',
            originalVendorId: '054c',
            originalProductId: '05c4',
            isStandardGamepad: true,
            productId: 1476,
            vendorId: 1356
        }
    ],
    [
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
    ],
    [
        'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
        {
            name: 'Xbox 360 Controller',
            originalName: 'Xbox 360 Controller (XInput STANDARD GAMEPAD)',
            originalVendorId: undefined,
            originalProductId: undefined,
            isStandardGamepad: true,
            isXInput: true
        }
    ],
];
