// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
module.exports = {
    rules: {
        // require braces around arrow function bodies
        'arrow-body-style': 'off',

        // require parentheses around arrow function arguments
        'arrow-parens': ['warn', 'as-needed'],

        // enforce consistent spacing before and after the arrow in arrow functions
        'arrow-spacing': 'warn',

        // require super() calls in constructors
        'constructor-super': 'warn',

        // enforce consistent spacing around * operators in generator functions
        'generator-star-spacing': ['warn', {before: false, after: true}],

        // disallow reassigning class members
        'no-class-assign': 'warn',

        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': ['warn', {allowParens: true}],

        // disallow reassigning const variables
        'no-const-assign': 'warn',

        // disallow duplicate class members
        'no-dupe-class-members': 'warn',

        // disallow duplicate module imports
        // replaced by https://github.com/benmosher/eslint-plugin-import
        'no-duplicate-imports': 'off',

        // disallow new operators with the Symbol object
        'no-new-symbol': 'warn',

        // disallow specified names in exports
        'no-restricted-exports': 'off',

        // disallow specified modules when loaded by import
        'no-restricted-imports': 'off',

        // disallow this/super before calling super() in constructors
        'no-this-before-super': 'warn',

        // disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 'warn',

        // disallow unnecessary constructors
        'no-useless-constructor': 'warn',

        // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': [
            'warn',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        // require let or const instead of var
        'no-var': 'warn',

        // require or disallow method and property shorthand syntax for object literals
        'object-shorthand': 'off',

        // require using arrow functions for callbacks
        'prefer-arrow-callback': [
            'warn',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        // require const declarations for variables that are never reassigned after declared
        'prefer-const': [
            'warn',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],

        // require destructuring from arrays and/or objects
        'prefer-destructuring': 'off',

        // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 'warn',

        // require rest parameters instead of arguments
        'prefer-rest-params': 'warn',

        // require spread operators instead of .apply()
        'prefer-spread': 'warn',

        // suggest using template literals instead of string concatenation
        'prefer-template': 'off',

        // require generator functions to contain yield
        'require-yield': 'warn',

        // enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': ['warn', 'never'],

        // enforce sorted import declarations within modules
        'sort-imports': 'off',

        // require symbol descriptions
        'symbol-description': 'warn',

        // require or disallow spacing around embedded expressions of template strings
        'template-curly-spacing': ['warn', 'never'],

        // require or disallow spacing around the * in yield* expressions
        'yield-star-spacing': ['warn', 'after'],
    },
};
