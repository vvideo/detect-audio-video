import { getGpuProblems } from './gpu';

const tests: [string, Array<string> | null][] = [
    ['ANGLE (Apple, ANGLE Metal Renderer: Apple M1 Pro, Unspecified Version)', null],
    ['', null],
    ['ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)', ['no driver', 'no hardware acceleration']],
    ['ANGLE (Microsoft, Microsoft Basic Render Driver Direct3D11 vs_5_0 ps_5_0), or similar', ['no driver']],
    ['llvmpipe, or similar', ['no driver']],
];

describe('GPU', () => {
    describe('#getGpuProblems', () => {
        tests.forEach(item => {        
            const [renderer, expected] = item;

            it(renderer, () => {
                expect(getGpuProblems(renderer))
                    .toEqual(expected);
            });
        });
    });
});
