// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
module.exports = {
    rules: {
        // enforce linebreaks after opening and before closing array brackets
        'array-bracket-newline': ['warn', 'consistent'],

        // enforce consistent spacing inside array brackets
        'array-bracket-spacing': ['warn', 'never'],

        // enforce line breaks between array elements
        'array-element-newline': 'off',

        // disallow or enforce spaces inside of blocks after opening block and before closing block
        'block-spacing': ['warn', 'always'],

        // enforce consistent brace style for blocks
        'brace-style': ['warn', '1tbs', {allowSingleLine: true}],

        // enforce camelcase naming convention
        'camelcase': ['warn', {properties: 'never'}],

        // enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': 'off',

        // require or disallow trailing commas
        'comma-dangle': ['warn', 'always-multiline'],

        // enforce consistent spacing before and after commas
        'comma-spacing': 'warn',

        // enforce consistent comma style
        'comma-style': [
            'warn',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        // enforce consistent spacing inside computed property brackets
        'computed-property-spacing': ['warn', 'never'],

        // enforce consistent naming when capturing the current execution context
        'consistent-this': 'off',

        // require or disallow newline at the end of files
        'eol-last': ['warn', 'always'],

        // require or disallow spacing between function identifiers and their invocations
        'func-call-spacing': ['warn', 'never'],

        // require function names to match the name of the variable or property to which they are assigned
        'func-name-matching': 'off',

        // require or disallow named function expressions
        'func-names': 'off',

        // enforce the consistent use of either function declarations or expressions
        'func-style': ['warn', 'expression', {allowArrowFunctions: true}],

        // enforce line breaks between arguments of a function call
        'function-call-argument-newline': 'off',

        // enforce consistent line breaks inside function parentheses
        'function-paren-newline': ['warn', 'consistent'],

        // disallow specified identifiers
        'id-denylist': 'off',

        // enforce minimum and maximum identifier lengths
        'id-length': 'off',

        // require identifiers to match a specified regular expression
        'id-match': 'off',

        // enforce the location of arrow function bodies
        'implicit-arrow-linebreak': ['warn', 'beside'],

        // enforce consistent indentation
        'indent': [
            'warn',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
                ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
                ignoreComments: false,
            },
        ],

        // enforce the consistent use of either double or single quotes in JSX attributes
        'jsx-quotes': ['warn', 'prefer-double'],

        // enforce consistent spacing between keys and values in object literal properties
        'key-spacing': 'warn',

        //  enforce consistent spacing before and after keywords
        'keyword-spacing': 'warn',

        // enforce position of line comments
        'line-comment-position': 'off',

        // enforce consistent linebreak style
        'linebreak-style': 'off',

        // require empty lines around comments
        'lines-around-comment': 'off',

        // require or disallow an empty line between class members
        'lines-between-class-members': ['warn', 'always', {exceptAfterSingleLine: true}],

        // enforce a maximum depth that blocks can be nested
        'max-depth': ['off', 4],

        // enforce a maximum line length
        'max-len': [
            'warn',
            {
                code: 120,
                tabWidth: 4,
                ignoreComments: false,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],

        // enforce a maximum number of lines per file
        'max-lines': 'off',

        // 	enforce a maximum number of line of code in a function
        'max-lines-per-function': 'off',

        // enforce a maximum depth that callbacks can be nested
        'max-nested-callbacks': 'off',

        // enforce a maximum number of parameters in function definitions
        'max-params': 'off',

        // enforce a maximum number of statements allowed in function blocks
        'max-statements': 'off',

        // enforce a maximum number of statements allowed per line
        'max-statements-per-line': 'off',

        // enforce a particular style for multiline comments
        'multiline-comment-style': 'off',

        // enforce newlines between operands of ternary expressions
        'multiline-ternary': 'off',

        // require constructor names to begin with a capital letter
        'new-cap': [
            'warn',
            {
                newIsCap: true,
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            },
        ],

        // require parentheses when invoking a constructor with no arguments
        'new-parens': 'warn',

        // require a newline after each call in a method chain
        'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 4}],

        // disallow Array constructors
        'no-array-constructor': 'warn',

        // disallow bitwise operators
        'no-bitwise': 'off',

        // disallow continue statements
        'no-continue': 'off',

        // disallow inline comments after code
        'no-inline-comments': 'off',

        // disallow if statements as the only statement in else blocks
        'no-lonely-if': 'warn',

        // disallow mixed binary operators
        'no-mixed-operators': [
            'warn',
            {
                // the list of arthmetic groups disallows mixing `%` and `**`
                // with other arithmetic operators.
                groups: [
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: false,
            },
        ],

        // disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': 'warn',

        // disallow use of chained assignment expressions
        'no-multi-assign': 'warn',

        // disallow multiple empty lines
        'no-multiple-empty-lines': ['warn', {max: 2, maxEOF: 1}],

        // disallow negated conditions
        'no-negated-condition': 'off',

        // disallow nested ternary expressions
        'no-nested-ternary': 'off',

        // disallow Object constructors
        'no-new-object': 'warn',

        // disallow the unary operators ++ and --
        'no-plusplus': 'warn',

        // disallow specified syntax
        'no-restricted-syntax': ['warn', 'WithStatement'],

        // disallow all tabs
        'no-tabs': 'warn',

        // disallow ternary operators
        'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        'no-trailing-spaces': 'warn',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'warn',

        // disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary': ['warn', {defaultAssignment: false}],

        // disallow whitespace before properties
        'no-whitespace-before-property': 'warn',

        // enforce the location of single-line statements
        'nonblock-statement-body-position': ['warn', 'beside'],

        // enforce consistent line breaks inside braces
        'object-curly-newline': ['warn', {consistent: true}],

        // enforce consistent spacing inside braces
        'object-curly-spacing': ['warn', 'never'],

        // enforce placing object properties on separate lines
        'object-property-newline': ['warn', {allowAllPropertiesOnSameLine: true}],

        // enforce variables to be declared either together or separately in functions
        'one-var': ['warn', 'never'],

        // require or disallow newlines around variable declarations
        'one-var-declaration-per-line': ['warn', 'always'],

        // require or disallow assignment operator shorthand where possible
        'operator-assignment': ['warn', 'always'],

        // enforce consistent linebreak style for operators
        'operator-linebreak': ['warn', 'before', {overrides: {'=': 'none'}}],

        // require or disallow padding within blocks
        'padded-blocks': ['warn', 'never'],

        // require or disallow padding lines between statements
        'padding-line-between-statements': 'off',

        // disallow the use of `Math.pow` in favor of the `**` operator
        'prefer-exponentiation-operator': 'off',

        // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
        'prefer-object-spread': 'off',

        // require quotes around object literal property names
        'quote-props': ['warn', 'consistent'],

        // enforce the consistent use of either backticks, double, or single quotes
        'quotes': ['warn', 'single', {allowTemplateLiterals: true}],

        // require or disallow semicolons instead of ASI
        'semi': ['warn', 'always'],

        // enforce consistent spacing before and after semicolons
        'semi-spacing': 'warn',

        // enforce location of semicolons
        'semi-style': ['warn', 'last'],

        // require object keys to be sorted
        'sort-keys': 'off',

        // require variables within the same declaration block to be sorted
        'sort-vars': 'off',

        // enforce consistent spacing before blocks
        'space-before-blocks': ['warn', 'always'],

        // enforce consistent spacing before function definition opening parenthesis
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // enforce consistent spacing inside parentheses
        'space-in-parens': ['warn', 'never'],

        // require spacing around infix operators
        'space-infix-ops': 'warn',

        // enforce consistent spacing before or after unary operators
        'space-unary-ops': ['warn', {words: true, nonwords: false}],

        // require or disallow a space immediately following the // or /* in a comment
        'spaced-comment': [
            'warn',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'], // space here to support sprockets directives
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!'], // space here to support sprockets directives
                    balanced: true,
                },
            },
        ],

        // enforce spacing around colons of switch statements
        'switch-colon-spacing': 'warn',

        // require or disallow spacing between template tags and their literals
        'template-tag-spacing': ['warn', 'never'],

        // require or disallow Unicode byte order mark (BOM)
        'unicode-bom': ['warn', 'never'],

        // require parenthesis around regex literals
        'wrap-regex': 'off',
    },
};
