import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

const plugins = [
    typescript({ tsconfig: './tsconfig.json' }),
    nodeResolve(),
];

export default [
    {
        input: 'src/index.ts',
        output: {
            format: 'es',
            file: './dist/index.js'
        },
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            nodeResolve(),
        ],
    },
    {
        input: 'example/index.ts',
        output: {
            format: 'umd',
            file: './example/build/index.js'
        },
        plugins: [
            typescript({ tsconfig: './tsconfig.common.json' }),
            nodeResolve(),
        ],
    },
];
