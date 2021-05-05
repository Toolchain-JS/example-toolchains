module.exports = {
    'root': true,
    'parser': '@babel/eslint-parser',
    'env': {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    'extends': [
        './rules/possible-errors',
        './rules/best-practices',
        './rules/variables',
        './rules/node',
        './rules/style',
        './rules/es6',
        './rules/imports',
        './rules/jsdoc',
    ].map(require.resolve),
    'parserOptions': {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeature: {
            experimentalObjectRestSpread: true,
        },
    },
    'rules': {
        strict: 'off',
    },
};
