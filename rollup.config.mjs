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
];
