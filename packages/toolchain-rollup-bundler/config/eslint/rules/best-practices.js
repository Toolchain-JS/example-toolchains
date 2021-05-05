// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
module.exports = {
    rules: {
        // enforce getter and setter pairs in objects
        'accessor-pairs': 'off',

        // enforces return statements in callbacks of array's methods
        'array-callback-return': ['warn', {allowImplicit: true}],

        // enforce the use of variables within the scope they are defined
        'block-scoped-var': 'warn',

        // enforce that class methods utilize this
        'class-methods-use-this': 'off',

        // enforce a maximum cyclomatic complexity allowed in a program
        'complexity': ['off', 11],

        // require return statements to either always or never specify values
        'consistent-return': 'off',

        // enforce consistent brace style for all control statements
        'curly': 'off',

        // require default cases in switch statements
        'default-case': 'off',

        // enforce default clauses in switch statements to be last
        'default-case-last': 'off',

        // enforce default parameters to be last
        'default-param-last': 'off',

        // enforce consistent newlines before and after dots
        'dot-location': ['warn', 'property'],

        // enforce dot notation whenever possible
        'dot-notation': 'off',

        // require the use of === and !==
        'eqeqeq': ['warn', 'always', {'null': 'ignore'}],

        // require grouped accessor pairs in object literals and classes
        'grouped-accessor-pairs': ['error', 'anyOrder'],

        // require for-in loops to include an if statement
        'guard-for-in': 'off',

        // enforce a maximum number of classes per file
        'max-classes-per-file': 'off',

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // disallow the use of arguments.caller or arguments.callee
        'no-caller': 'warn',

        // disallow lexical declarations in case clauses
        'no-case-declarations': 'warn',

        // disallow returning value from constructor
        'no-constructor-return': 'off',

        // disallow division operators explicitly at the beginning of regular expressions
        'no-div-regex': 'off',

        // disallow else blocks after return statements in if statements
        'no-else-return': 'warn',

        // disallow empty functions
        'no-empty-function': 'off',

        // disallow empty destructuring patterns
        'no-empty-pattern': 'warn',

        // disallow null comparisons without type-checking operators
        'no-eq-null': 'off',

        // disallow use of eval()
        'no-eval': 'warn',

        // disallow adding to native types
        'no-extend-native': 'warn',

        // disallow unnecessary calls to .bind()
        'no-extra-bind': 'warn',

        // disallow unnecessary labels
        'no-extra-label': 'warn',

        // disallow fallthrough of case statements
        'no-fallthrough': 'warn',

        // disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'warn',

        // disallow assignments to native objects or read-only global variables
        'no-global-assign': ['warn', {exceptions: []}],

        // disallow shorthand type conversions
        'no-implicit-coercion': 'off',

        // disallow variable and function declarations in the global scope
        'no-implicit-globals': 'off',

        // disallow use of eval()-like methods
        'no-implied-eval': 'warn',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow usage of __iterator__ property
        'no-iterator': 'warn',

        // disallow labeled statements
        'no-labels': ['warn', {allowLoop: true, allowSwitch: false}],

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'warn',

        // disallow function declarations and expressions inside loop statements
        'no-loop-func': 'warn',

        // disallow magic numbers
        'no-magic-numbers': 'off',

        // disallow multiple spaces
        'no-multi-spaces': ['warn', {ignoreEOLComments: false}],

        // disallow multiline strings
        'no-multi-str': 'warn',

        // disallow new operators outside of assignments or comparisons
        'no-new': 'warn',

        // disallow new operators with the Function object
        'no-new-func': 'warn',

        // disallow new operators with the String, Number, and Boolean objects
        'no-new-wrappers': 'warn',

        // disallow `\8` and `\9` escape sequences in string literals
        // 'no-nonoctal-decimal-escape': 'warn',

        // disallow octal literals
        'no-octal': 'warn',

        // disallow octal escape sequences in string literals
        'no-octal-escape': 'warn',

        // disallow reassigning function parameters
        'no-param-reassign': 'off',

        // disallow the use of the __proto__ property
        'no-proto': 'off',

        // disallow variable redeclaration
        'no-redeclare': 'warn',

        // disallow certain properties on certain objects
        'no-restricted-properties': [
            'warn',
            {
                object: 'require',
                property: 'ensure',
                message: 'Please use import() instead. More info: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
            },
            {
                object: 'System',
                property: 'import',
                message: 'Please use import() instead. More info: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting',
            },
        ],

        // disallow assignment operators in return statements
        'no-return-assign': 'warn',

        // disallow unnecessary return await
        'no-return-await': 'off',

        // disallow javascript: urls
        'no-script-url': 'warn',

        // disallow assignments where both sides are exactly the same
        'no-self-assign': 'warn',

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'warn',

        // disallow comma operators
        'no-sequences': 'warn',

        // disallow throwing literals as exceptions
        'no-throw-literal': 'warn',

        // disallow unmodified loop conditions
        'no-unmodified-loop-condition': 'off',

        // disallow unused expressions
        'no-unused-expressions': [
            'warn',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],

        // disallow unused labels
        'no-unused-labels': 'warn',

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'off',

        // disallow unnecessary `catch` clauses
        'no-useless-catch': 'off',

        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 'warn',

        // disallow unnecessary escape characters
        'no-useless-escape': 'warn',

        // disallow redundant return statements
        'no-useless-return': 'off',

        // disallow void operators
        'no-void': 'off',

        // disallow specified warning terms in comments
        'no-warning-comments': ['off', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],

        // disallow with statements
        'no-with': 'warn',

        // enforce using named capture group in regular expression
        'prefer-named-capture-group': 'off',

        // require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': ['warn', {allowEmptyReject: true}],

        // disallow use of the `RegExp` constructor in favor of regular expression literals
        'prefer-regex-literals': 'off',

        // require use of the second argument for parseInt()
        'radix': 'warn',

        // disallow async functions which have no await expression
        'require-await': 'off',

        // enforce the use of `u` flag on RegExp
        'require-unicode-regexp': 'off',

        // require var declarations be placed at the top of their containing scope
        'vars-on-top': 'warn',

        // require parentheses around immediate function invocations
        'wrap-iife': ['warn', 'outside', {functionPrototypeMethods: false}],

        // require or disallow “Yoda” conditions
        'yoda': 'off',
    },
};
