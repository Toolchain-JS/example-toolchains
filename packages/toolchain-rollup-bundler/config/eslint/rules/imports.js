// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// https://github.com/benmosher/eslint-plugin-import
module.exports = {
    plugins: [
        'import',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.json'],
            },
        },
        'import/extensions': ['.js', '.mjs', '.jsx'],
        'import/core-modules': [],
        'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    },
    rules: {
        // Static analysis:

        // Ensure imports point to a file/module that can be resolved
        'import/no-unresolved': 'off',

        // Ensure named imports correspond to a named export in the remote file
        'import/named': 'warn',

        // Ensure a default export is present, given a default import
        'import/default': 'off',

        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace': 'off',

        // Restrict which files can be imported in a given folder
        'import/no-restricted-paths': 'off',

        // Forbid import of modules using absolute paths
        'import/no-absolute-path': 'warn',

        // Forbid require() calls with expressions
        'import/no-dynamic-require': 'off',

        // Prevent importing the submodules of other modules
        'import/no-internal-modules': 'off',

        // Forbid webpack loader syntax in imports
        'import/no-webpack-loader-syntax': 'warn',

        // Forbid a module from importing itself
        'import/no-self-import': 'warn',

        // Forbid a module from importing a module with a dependency path back to itself
        'import/no-cycle': 'warn',

        // Prevent unnecessary path segments in import and require statements
        'import/no-useless-path-segments': 'warn',

        // Forbid importing modules from parent directories
        'import/no-relative-parent-imports': 'off',

        // Helpful warnings:

        // Report any invalid exports, i.e. re-export of the same name
        'import/export': 'warn',

        // Report use of exported name as identifier of default export
        'import/no-named-as-default': 'off',

        // Report use of exported name as property of default export
        'import/no-named-as-default-member': 'off',

        // Report imported names marked with @deprecated documentation tag
        'import/no-deprecated': 'off',

        // Forbid the use of extraneous packages
        // paths are treated both as absolute paths, and relative to process.cwd()
        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: [
                    '**/src/index.js', // index.js for packages like core-js, regenerator-runtime, etc..
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/rollup.config.js', // rollup config
                    '**/rollup.config.*.js', // rollup config
                    '**/jest.config.js', // jest config
                    'tests/**', // common npm pattern
                    'spec/**', // mocha, rspec-like pattern
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    'test.{js,jsx}', // repos with a single test file
                    'test-*.{js,jsx}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
                ],
                optionalDependencies: false,
            },
        ],

        // Forbid the use of mutable exports with var or let
        'import/no-mutable-exports': 'warn',

        // Report modules without exports, or exports without matching import in another module
        'import/no-unused-modules': 'warn',

        // Module systems:

        // Report potentially ambiguous parse goal (script vs. module)
        'import/unambiguous': 'off',

        // Report CommonJS require calls and module.exports or exports.*
        'import/no-commonjs': 'off',

        // Report AMD require and define calls
        'import/no-amd': 'warn',

        // No Node.js builtin modules
        'import/no-nodejs-modules': 'off',

        // Forbid imports with CommonJS exports
        'import/no-import-module-exports': 'off',

        // Style guide:

        // Ensure all imports appear before other statements
        'import/first': ['warn', 'absolute-first'],

        // Ensure all exports appear after other statements
        'import/exports-last': 'off',

        // Report repeated import of the same module in multiple places
        'import/no-duplicates': 'warn',

        // Report namespace imports
        'import/no-namespace': 'off',

        // Ensure consistent use of file extension within the import path
        'import/extensions': ['warn', 'ignorePackages', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
        }],

        // Enforce a convention in module import order
        'import/order': 'off',

        // Enforce a newline after import statements
        'import/newline-after-import': 'warn',

        // Prefer a default export if module exports a single name
        'import/prefer-default-export': 'off',

        // Limit the maximum number of dependencies a module can have
        'import/max-dependencies': ['off', {max: 10}],

        // Forbid unassigned imports
        'import/no-unassigned-import': 'off',

        // Forbid named default exports
        'import/no-named-default': 'off',

        // Forbid default exports
        'import/no-default-export': 'off',

        // Forbid named exports
        'import/no-named-export': 'off',

        // Forbid anonymous values as default exports
        'import/no-anonymous-default-export': 'off',

        // Prefer named exports to be grouped together in a single export declaration
        'import/group-exports': 'off',

        // Enforce a leading comment with the webpackChunkName for dynamic imports
        'import/dynamic-import-chunkname': 'off',
    },
};
