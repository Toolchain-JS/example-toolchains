// We use eslint-loader so even warnings are very visible.
// This is why we mostly use 'WARNING' level for potential errors,
// and avoid 'ERROR' level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// https://www.npmjs.com/package/eslint-plugin-jsdoc
module.exports = {
    plugins: [
        'jsdoc',
    ],
    settings: {
        'jsdoc': {
            tagNamePreference: {
                returns: 'return'
            },
            preferredTypes: {
                Boolean: 'boolean',
                Number: 'number',
                object: 'Object',
                String: 'string'
            },
            overrideReplacesDocs: true,
            augmentsExtendsReplacesDocs: false,
            implementsReplacesDocs: false,
        }
    },
    rules: {
        // Checks that @access tags use one of the following values: "package", "private", "protected", "public"
        'jsdoc/check-access': 'off',

        // Reports invalid alignment of JSDoc block asterisks.
        'jsdoc/check-alignment': 'off',

        // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
        'jsdoc/check-examples': 'off',

        // Reports invalid padding inside JSDoc blocks.
        'jsdoc/check-indentation': 'off',

        // Reports invalid alignment of JSDoc block lines
        'jsdoc/check-line-alignment': 'off',

        // Ensures that parameter names in JSDoc match those in the function declaration.
        'jsdoc/check-param-names': 'off',

        // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
        'jsdoc/check-property-names': 'off',

        // Reports against Google Closure Compiler syntax.
        'jsdoc/check-syntax': 'off',

        // Reports invalid block tag names.
        'jsdoc/check-tag-names': 'off',

        // Reports invalid types.
        'jsdoc/check-types': 'off',

        // This rule checks the values for tags: @version, @since, @license, @author
        'jsdoc/check-values': 'off',

        // Expects the tags to be empty of any content (please check docs for list of tags)
        'jsdoc/empty-tags': 'off',

        // Reports an issue with any non-constructor function using @implements.
        'jsdoc/implements-on-classes': 'off',

        // Enforces a regular expression pattern on descriptions.
        'jsdoc/match-description': 'off',

        // Enforces a consistent padding of the block description.
        'jsdoc/newline-after-description': 'off',

        // This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block
        'jsdoc/no-bad-blocks': 'off',

        // This rule reports defaults being used on the relevant portion of @param or @default.
        'jsdoc/no-defaults': 'off',

        // This rule reports types being used on @param or @returns.
        'jsdoc/no-types': 'off',

        // Checks that types in jsdoc comments are defined. This can be used to check unimported types.
        'jsdoc/no-undefined-types': 'off',

        // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences.
        'jsdoc/require-description-complete-sentence': 'off',

        // Requires that all functions have a description.
        'jsdoc/require-description': 'off',

        // Requires that all functions have examples.
        'jsdoc/require-example': 'off',

        // Checks that all files have @file, @fileoverview, or @overview, reports duplicate file overview tags
        'jsdoc/require-file-overview': 'off',

        // Requires a hyphen before the @param description.
        'jsdoc/require-hyphen-before-param-description': 'off',

        // Checks for presence of jsdoc comments, on class declarations as well as functions.
        'jsdoc/require-jsdoc': 'off',

        // Requires that each @param tag has a description value.
        'jsdoc/require-param-description': 'off',

        // Requires that all function parameters have names.
        'jsdoc/require-param-name': 'off',

        // Requires that each @param tag has a type value.
        'jsdoc/require-param-type': 'off',

        // Requires that all function parameters are documented.
        'jsdoc/require-param': 'off',

        // Requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject.
        'jsdoc/require-property': 'off',

        // Requires that each @property tag has a description value.
        'jsdoc/require-property-description': 'off',

        // Requires that all function @property tags have names.
        'jsdoc/require-property-name': 'off',

        // Requires that each @property tag has a type value.
        'jsdoc/require-property-type': 'off',

        // Requires a return statement in function body if a @returns tag is specified in jsdoc comment.
        'jsdoc/require-returns-check': 'off',

        // Requires that the @returns tag has a description value. The error will not be reported if the return value is void or undefined.
        'jsdoc/require-returns-description': 'off',

        // Requires that @returns tag has type value.
        'jsdoc/require-returns-type': 'off',

        // Requires returns are documented.
        'jsdoc/require-returns': 'off',

        // Requires that throw statements are documented.
        'jsdoc/require-throws': 'off',

        // Requires that yields are documented.
        'jsdoc/require-yields': 'off',

        // Ensures that if a @yields is present that a yield is present in the function body.
        'jsdoc/require-yields-check': 'off',

        // Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
        'jsdoc/valid-types': 'off',
    },
};
