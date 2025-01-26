import { tests as otherTests } from './test-data/other';
import { tests as artplayTests } from './test-data/artplay';
import { tests as ps3DualShock3Tests } from './test-data/ps3-dualshock3';
import { tests as ps4DualShock4Tests } from './test-data/ps4-dualshock4';
import { tests as ps5DualSenseTests } from './test-data/ps5-dualsense';
import { tests as speedLinkTests } from './test-data/speedlink-usb';
import { tests as xboxOneTests } from './test-data/xbox-one';

import { parseGamepadName } from './index';

const tests = [
    ...speedLinkTests,
    ...ps3DualShock3Tests,
    ...ps4DualShock4Tests,
    ...ps5DualSenseTests,
    ...artplayTests,
    ...xboxOneTests,
    ...otherTests,
];

describe('Gamepad', () => {
    describe('#parseGamepadName', () => {
        tests.forEach(item => {
            const [name, expected] = item;
            it(name, () => {
                expect(parseGamepadName(name))
                    .toEqual(expected);
            });
        });
    });
});
