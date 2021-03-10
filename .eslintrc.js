const jsConfig = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    globals: {
        '_': false,
    },
    rules: {
        'prefer-const': ['warn'], // https://github.com/surajs02/jsx-codeguide#immutable-variables
        'no-else-return': ['warn'], // https://github.com/surajs02/jsx-codeguide#simple-control-paths
        'space-unary-ops': 1, // https://github.com/surajs02/jsx-codeguide#unary-operator-spacing
        'space-infix-ops': 1, // https://github.com/surajs02/jsx-codeguide#binary-operator-spacing
        'operator-linebreak': ['warn', 'before'], // https://github.com/surajs02/jsx-codeguide#operator-linebreaks
        'comma-dangle': ['warn', 'always-multiline'], // https://github.com/surajs02/jsx-codeguide#trailing-commas
        'comma-spacing': ['warn', { 'before': false, 'after': true }], // https://github.com/surajs02/jsx-codeguide#comma-spacing
        semi: ['warn', 'always' ], // https://github.com/surajs02/jsx-codeguide#semicolon-presence
        'no-extra-semi': 1,
        'no-extra-parens': 0, // https://github.com/surajs02/jsx-codeguide#parentheses-presence
        indent: ['warn', 4], // https://github.com/surajs02/jsx-codeguide#indentation
        'brace-style': [1, '1tbs'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-style
        curly: ['warn', 'multi'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-presence
        quotes: ['warn', 'single'], // https://github.com/surajs02/jsx-codeguide#quote-presence
        'arrow-parens': ['warn', 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-parentheses-presence
        'arrow-body-style': ['warn', 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-body-brackets-presence
        'arrow-spacing': 1, // https://github.com/surajs02/jsx-codeguide#arrow-spacing

        // TODO: Doc
        'no-irregular-whitespace': 1,
        eqeqeq: ['warn', 'smart'],
        'no-console': ['warn', { 'allow': ['info', 'debug', 'warn', 'error'] }],
        'no-debugger': 1,
        'no-undef': 1,

        'no-unused-vars': ['warn', { 'args': 'all', 'argsIgnorePattern': '^__' }], // Unlint vars with '__' prefix.

        'semi-spacing': 1,
        'no-unneeded-ternary': ['warn'],
        'key-spacing': 1,
        'no-multi-spaces': 1,
        yoda: 1,
        'eol-last': 1,
        'no-throw-literal': 'warn',
        'valid-jsdoc': ['off'], // TS obsoletes most eslint jsdoc hence it is optional.

        // JSX.
        'react/prop-types': 1,
        'react/no-direct-mutation-state': 1, // https://github.com/surajs02/jsx-codeguide#indirect-state-mutation
        'react/no-danger': 1,
        'react/jsx-boolean-value': 1, // https://github.com/surajs02/jsx-codeguide#implicit-boolean-attribute
        'jsx-quotes': ['warn', 'prefer-single'], // https://github.com/surajs02/jsx-codeguide#attribute-quotes
        'react/jsx-curly-brace-presence': 1, // https://github.com/surajs02/jsx-codeguide#attribute-curly-brackets-presence
        'react/jsx-indent-props': 1, // https://github.com/surajs02/jsx-codeguide#attribute-indentation
        'react/jsx-no-duplicate-props': 1, // https://github.com/surajs02/jsx-codeguide#unique-attributes
        'react/jsx-key': 1, // https://github.com/surajs02/jsx-codeguide#unique-attributes
        'react/self-closing-comp': 1, // https://github.com/surajs02/jsx-codeguide#closing-tag-presence
        'react/sort-comp': 1, // https://github.com/surajs02/jsx-codeguide#ordered-lifecycle-methods

        // TODO: JSX - Doc.
        'react/jsx-max-props-per-line': [1, { 'maximum': 2 }],
        'react/react-in-jsx-scope': 1,
        'react/jsx-uses-react': 1,
        'react/display-name': 2,
        'react/jsx-curly-spacing': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-space-before-closing': 1, // TODO: Fix deprecated.
        'react/jsx-tag-spacing': 1,
        'react/jsx-uses-vars': 1,
        'react/no-unknown-property': 1,
        'react/jsx-fragments': ['warn', 'element'],
    },
};

jsConfig.overrides = [
    {
        files: ['**/*.ts', '**/*.tsx'],
        env: jsConfig.env,
        extends: [
            ...jsConfig.extends,
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            project: './tsconfig.json',
        },
        settings: jsConfig.settings,
        plugins: ['@typescript-eslint'],
        globals: jsConfig.globals,
        rules: {
            ...jsConfig.rules,

            // TODO: TS - Doc.
            '@typescript-eslint/naming-convention': [ // `no-unused-vars` for TS.
                'warn',
                {
                    selector: ['parameter'],
                    format: ['strictCamelCase'], // No consecutive capitals for camelCase.
                    filter: {
                        regex: '^__.*', // Allows multiple unused params as '__x'.
                        match: false,
                    },
                },
            ],
            '@typescript-eslint/no-explicit-any': 0, // Allow explicit any.
            '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true, ignoreIIFE: true }], // Most promises must be handled.
            '@typescript-eslint/no-for-in-array': 1, // No iterating arrays like objects.
            '@typescript-eslint/no-implicit-any-catch': ['warn', { allowExplicitAny: true }], // Catches must be explicit.
            '@typescript-eslint/no-inferrable-types': 1, // Declared types must be non-inferable (reduces verbocity).
            '@typescript-eslint/member-delimiter-style': ['warn', { // Interface members must end in ';' unless singleline.
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
                multilineDetection: 'brackets',
            }],
            '@typescript-eslint/no-misused-new': 1, // No `new` interfaces/ctors.
            '@typescript-eslint/no-require-imports': 0, // Allow `require` imports for js interop.
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1, // Disallow explicit literal boolean conditional aka no `a : boolean; a === true`.
            '@typescript-eslint/no-unnecessary-condition': 1, // Disallow conditionals where the value is always truthy/falsy aka no `a : []; if (a)`.
            '@typescript-eslint/no-unnecessary-type-assertion': 1, // Type casts must change type.
        },
    },
],

module.exports = jsConfig;
