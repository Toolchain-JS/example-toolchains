const path = require('path');
const {babel} = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const {eslint} = require('rollup-plugin-eslint');
const {terser} = require('rollup-plugin-terser');

// production and development configuration
module.exports = function (basePath, pkg, options) {
    const {main, module} = pkg;

    return {
        input: path.resolve(basePath, 'src/index.js'),
        output: [
            {
                file: path.join(basePath, main),
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: path.join(basePath, module),
                format: 'es',
                sourcemap: true,
            },
        ],
        external: [
            ...options.external || [],
        ].map(externalPath => path.join(basePath, 'node_modules/', externalPath)),
        plugins: [
            eslint({
                extensions: ['js', 'jsx', 'mjs'],
                cache: true,
                formatter: require.resolve(path.join(__dirname, './eslint/eslintFormatter')),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
                fix: true,
                ignore: false,
                baseConfig: {
                    extends: [require.resolve(path.join(__dirname, './eslint'))],
                    parserOptions: {
                        requireConfigFile: false,
                        babelOptions: {
                            babelrc: false,
                            configFile: false,
                            presets: [require.resolve(path.join(__dirname, './babelPreset'))],
                        },
                    },
                },
                useEslintrc: false,
            }),
            babel({
                babelHelpers: 'bundled',
                presets: [require.resolve(path.join(__dirname, './babelPreset'))],
                exclude: [
                    path.join(basePath, 'node_modules/**'),
                ],
            }),
            json(),
            nodeResolve(),
            commonjs(),
            (process.env.NODE_ENV === 'production' && terser({
                parse: {
                    ecma: 8,
                },
                compress: {
                    ecma: 5,
                    warnings: false,
                    comparisons: false,
                    inline: 2,
                },
                mangle: {
                    safari10: true,
                },
                output: {
                    ecma: 5,
                    comments: false,
                    ascii_only: true,
                },
            })),
        ],
    };
};
