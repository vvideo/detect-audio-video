import { getGpuProblems, isVirtualMachine } from './gpu';

const testsGpuProblems: [string, Array<string> | null][] = [
    // Chrome
    ['ANGLE (Apple, ANGLE Metal Renderer: Apple M1 Pro, Unspecified Version)', null],
    ['', null],
    // Chrome
    ['ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)', ['no driver', 'no hardware acceleration']],
    // Firefox
    ['ANGLE (Microsoft, Microsoft Basic Render Driver Direct3D11 vs_5_0 ps_5_0), or similar', ['no driver']],
    // Firefox
    ['ANGLE (Intel, Generic Renderer Direct3D11 vs_4_0 ps_4_0)', ['no driver']],
    // Firefox
    ['llvmpipe', ['no driver']],
    // Firefox
    ['llvmpipe, or similar', ['no driver']],
    // Chrome
    ['ANGLE (Software Adapter Direct3D11 vs_4_1 ps_4_1)', ['no driver', 'no hardware acceleration']],
];

const testsVirtualMachine: [string, string, boolean][] = [
    [
        'ANGLE (0x344C5250, Parallels Display Adapter (WDDM) (0x00353030) Direct3D11 vs_5_0 ps_5_0, D3D11)',
        'Google Inc. (0x344C5250)',
        true,
    ],
    [
        'ANGLE (0x000080EE, VirtualBox Graphics Adapter (WDDM) (0x0000BEEF) Direct3D11 vs_5_0 ps_5_0, D3D11)',
        'Google Inc. (0x000080EE)',
        true,
    ],
    [
        'ANGLE (Apple, ANGLE Metal Renderer: Apple Paravirtual device, Unspecified Version)',
        'Google Inc. (Apple)',
        true,
    ],
    [
        'Android Emulator OpenGL ES Translator (Google SwiftShader)',
        'Google (Google Inc.)',
        true,
    ],
    [
        'Mali-G52 MC2',
        'ARM',
        false
    ],
    [
        'ANGLE (Apple, ANGLE Metal Renderer: Apple M2 Max, Unspecified Version)',
        'Google Inc. (Apple)',
        false
    ]
];

describe('GPU', () => {
    describe('#getGpuProblems', () => {
        testsGpuProblems.forEach(item => {
            const [renderer, expected] = item;

            it(renderer, () => {
                expect(getGpuProblems(renderer))
                    .toEqual(expected);
            });
        });
    });

    describe('#isVirtualMachine', () => {
        testsVirtualMachine.forEach(item => {
            const [renderer, vendor, expected] = item;

            it(renderer, () => {
                expect(isVirtualMachine(renderer, vendor))
                    .toEqual(expected);
            });
        });
    });
});
