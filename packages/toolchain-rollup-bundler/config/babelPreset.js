'use strict';

const path = require('path');

module.exports = function () {
    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    const isEnvDevelopment = env === 'development';
    const isEnvProduction = env === 'production';
    const isEnvTest = env === 'test';

    if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
        throw new Error(
            'Using `@toolchain-js/toolchain-rollup-bundler` requires that you specify `NODE_ENV` or '
            + '`BABEL_ENV` environment variables. Valid values are "development", '
            + '"test", and "production". Instead, received: '
            + JSON.stringify(env)
            + '.',
        );
    }

    if (isEnvDevelopment) {
        return {
            presets: [
                [require('@babel/preset-env').default, {
                    useBuiltIns: 'entry',
                    corejs: 3,
                    modules: false,
                    exclude: ['transform-typeof-symbol'],
                }],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: false,
                    helpers: false,
                    version: require('@babel/runtime/package.json').version,
                    regenerator: true,
                    useESModules: false,
                    absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json')),
                }],
                [require('@babel/plugin-syntax-import-meta').default],
                [require('@babel/plugin-proposal-json-strings').default],
                [require('@babel/plugin-proposal-decorators').default, {legacy: true}],
                [require('@babel/plugin-proposal-class-properties').default, {loose: true}],
                [require('@babel/plugin-proposal-private-methods').default, {loose: true}],
                [require('@babel/plugin-proposal-nullish-coalescing-operator').default],
                [require('@babel/plugin-proposal-optional-chaining').default],
            ],
        };
    }

    if (isEnvProduction) {
        return {
            presets: [
                [require('@babel/preset-env').default, {
                    useBuiltIns: 'entry',
                    corejs: 3,
                    modules: false,
                    exclude: ['transform-typeof-symbol'],
                }],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: false,
                    helpers: false,
                    version: require('@babel/runtime/package.json').version,
                    regenerator: true,
                    useESModules: false,
                    absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json')),
                }],
                [require('@babel/plugin-syntax-import-meta').default],
                [require('@babel/plugin-proposal-json-strings').default],
                [require('@babel/plugin-proposal-decorators').default, {legacy: true}],
                [require('@babel/plugin-proposal-class-properties').default, {loose: true}],
                [require('@babel/plugin-proposal-private-methods').default, {loose: true}],
                [require('@babel/plugin-proposal-nullish-coalescing-operator').default],
                [require('@babel/plugin-proposal-optional-chaining').default],
            ],
        };
    }

    if (isEnvTest) {
        return {
            presets: [
                [require('@babel/preset-env').default, {targets: {node: 'current'}}],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: false,
                    helpers: false,
                    regenerator: true,
                    useESModules: false,
                }],
                [require('@babel/plugin-syntax-import-meta').default],
                [require('@babel/plugin-proposal-json-strings').default],
                [require('@babel/plugin-proposal-decorators').default, {legacy: true}],
                [require('@babel/plugin-proposal-class-properties').default, {loose: true}],
                [require('@babel/plugin-proposal-private-methods').default, {loose: true}],
                [require('@babel/plugin-proposal-nullish-coalescing-operator').default],
                [require('@babel/plugin-proposal-optional-chaining').default],
            ],
        };
    }
};
