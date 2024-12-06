import { tests } from './test-data';
import { parseGamepadName } from './index';

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
