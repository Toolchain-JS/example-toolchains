// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('../restrictedBrowserGlobals');

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
module.exports = {
    rules: {
        // require or disallow initialization in variable declarations
        'init-declarations': 'off',

        // disallow deleting variables
        'no-delete-var': 'warn',

        // disallow labels that share a name with a variable
        'no-label-var': 'warn',

        // disallow specified global variables
        'no-restricted-globals': ['warn'].concat(restrictedGlobals),

        // disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow': 'off',

        // disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': 'warn',

        // disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef': 'warn',

        // disallow initializing variables to undefined
        'no-undef-init': 'off',

        // disallow the use of undefined as an identifier
        'no-undefined': 'off',

        // disallow unused variables
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
                ignoreRestSiblings: true,
                caughtErrors: 'none',
            },
        ],

        // disallow use of variables before they are defined
        'no-use-before-define': [
            'warn',
            {
                functions: false,
                classes: false,
                variables: false,
            },
        ],
    },
};
