const { OFF, WARN, ERROR } = {
    OFF: 0,
    WARN: 1,
    ERROR: 2,
};

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
        'prefer-const': [WARN], // https://github.com/surajs02/jsx-codeguide#immutable-variables
        'no-else-return': [WARN], // https://github.com/surajs02/jsx-codeguide#simple-control-paths
        'space-unary-ops': [WARN], // https://github.com/surajs02/jsx-codeguide#unary-operator-spacing
        'space-infix-ops': [WARN], // https://github.com/surajs02/jsx-codeguide#binary-operator-spacing
        'operator-linebreak': [WARN, 'before'], // https://github.com/surajs02/jsx-codeguide#operator-linebreaks
        'comma-dangle': [WARN, 'always-multiline'], // https://github.com/surajs02/jsx-codeguide#trailing-commas
        'comma-spacing': [WARN, { 'before': false, 'after': true }], // https://github.com/surajs02/jsx-codeguide#comma-spacing
        semi: [WARN, 'always' ], // https://github.com/surajs02/jsx-codeguide#semicolon-presence
        'no-extra-semi': [WARN],
        'no-extra-parens': [OFF], // https://github.com/surajs02/jsx-codeguide#parentheses-presence
        indent: [WARN, 4], // https://github.com/surajs02/jsx-codeguide#indentation
        'brace-style': [WARN, '1tbs'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-style
        curly: [WARN, 'multi'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-presence
        quotes: [WARN, 'single'], // https://github.com/surajs02/jsx-codeguide#quote-presence
        'arrow-parens': [WARN, 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-parentheses-presence
        'arrow-body-style': [WARN, 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-body-brackets-presence
        'arrow-spacing': [WARN], // https://github.com/surajs02/jsx-codeguide#arrow-spacing

        // TODO: Doc
        'no-irregular-whitespace': [WARN],
        eqeqeq: [WARN, 'smart'],
        'default-param-last': [WARN], // Avoids verbose badly designed sigs hence less verbose calls.
        'dot-notation': [WARN, { allowKeywords: true, allowPattern: '.*[_|-].*' }], // Prefer dot notation (exceptions: kebab-case & snake_case)
        'no-console': [WARN, { 'allow': ['info', 'debug', 'warn', 'error'] }],
        'no-debugger': [WARN],
        'no-undef': [WARN],
        'func-call-spacing': [WARN], // Disallow space between function name & opening parentheses.
        'init-declarations': [WARN], // All vars must be init'ed.
        'no-array-constructor': [WARN], // Arrays must use param array ctor or literal.
        'no-const-assign': [WARN],
        'no-dupe-class-members': [WARN],
        'no-duplicate-imports': [WARN],
        'no-redeclare': [WARN],
        'no-shadow': [WARN],
        'no-throw-literal': [WARN],
        'no-use-before-define': [WARN],
        'no-useless-constructor': [WARN],
        'require-await': [WARN],
        'return-await': [WARN],
        'object-curly-spacing': [WARN, 'always'],

        'no-unused-vars': [WARN, { 'args': 'all', 'argsIgnorePattern': '^__' }], // Unlint vars with '__' prefix.

        'semi-spacing': [WARN],
        'no-unneeded-ternary': [WARN],
        'key-spacing': [WARN],
        'keyword-spacing': [WARN, { before: true, after: true }],
        'no-multi-spaces': [WARN],
        yoda: [WARN],
        'eol-last': [WARN],
        'valid-jsdoc': [OFF], // TS obsoletes most eslint jsdoc hence it is optional.

        // JSX.
        'react/prop-types': [WARN],
        'react/no-direct-mutation-state': [WARN], // https://github.com/surajs02/jsx-codeguide#indirect-state-mutation
        'react/no-danger': [WARN],
        'react/jsx-boolean-value': [WARN], // https://github.com/surajs02/jsx-codeguide#implicit-boolean-attribute
        'jsx-quotes': [WARN, 'prefer-single'], // https://github.com/surajs02/jsx-codeguide#attribute-quotes
        'react/jsx-curly-brace-presence': [WARN], // https://github.com/surajs02/jsx-codeguide#attribute-curly-brackets-presence
        'react/jsx-indent-props': [WARN], // https://github.com/surajs02/jsx-codeguide#attribute-indentation
        'react/jsx-no-duplicate-props': [WARN], // https://github.com/surajs02/jsx-codeguide#unique-attributes
        'react/jsx-key': [WARN], // https://github.com/surajs02/jsx-codeguide#unique-attributes
        'react/self-closing-comp': [WARN], // https://github.com/surajs02/jsx-codeguide#closing-tag-presence
        'react/sort-comp': [WARN], // https://github.com/surajs02/jsx-codeguide#ordered-lifecycle-methods

        // TODO: JSX - Doc.
        'react/jsx-max-props-per-line': [WARN, { 'maximum': 2 }],
        'react/react-in-jsx-scope': [WARN],
        'react/jsx-uses-react': [WARN],
        'react/display-name': [ERROR],
        'react/jsx-curly-spacing': [WARN],
        'react/jsx-no-undef': [WARN],
        'react/jsx-space-before-closing': [WARN], // TODO: Fix deprecated.
        'react/jsx-tag-spacing': [WARN],
        'react/jsx-uses-vars': [WARN],
        'react/no-unknown-property': [WARN],
        'react/jsx-fragments': [WARN, 'element'],
    },
};

const INCOMPAT_JS_RULES = [
    'brace-style',
    'comma-dangle',
    'comma-spacing',
    'default-param-last',
    'dot-notation',
    'func-call-spacing',
    'indent',
    'init-declarations',
    'keyword-spacing',
    'no-array-constructor',
    'no-dupe-class-members',
    'no-duplicate-imports',
    'no-extra-parens',
    'no-extra-semi',
    'no-redeclare',
    'no-shadow',
    'no-throw-literal',
    'no-unused-vars',
    'no-use-before-define',
    'object-curly-spacing',
    'quotes',
    'require-await',
    'return-await',
    'semi',
    'space-infix-ops',
];
const JS_TO_TS_RULE_NAMES = {
    'no-return-await': 'return-await',
};
const jsToTsRuleName = ruleName => JS_TO_TS_RULE_NAMES[ruleName] || ruleName;
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
            ...jsConfig.rules, // Add ts rules atop js since ts supersets js.

            // TODO: TS extensions - Doc.
            // Fix incompat js rules for ts.
            ...INCOMPAT_JS_RULES.reduce(
                (a, ruleName) => !Object.keys(jsConfig.rules).includes(ruleName) ? a : ({
                    ...a,
                    [ruleName]: [OFF], // Base rules are disabled as report incorrect or duplicate errors in ts.
                    [`@typescript-eslint/${jsToTsRuleName(ruleName)}`]: jsConfig.rules[ruleName], // Redeclare rule for ts.
                }),
                {}
            ),

            // TODO: TS - Doc.
            '@typescript-eslint/naming-convention': [ // TS version of `no-unused-vars`.
                WARN,
                {
                    selector: ['parameter'],
                    format: ['strictCamelCase'], // No consecutive capitals for camelCase.
                    filter: {
                        regex: '^__.*', // Allows multiple unused params as '__x'.
                        match: false,
                    },
                },
            ],
            '@typescript-eslint/no-explicit-any': [OFF], // Allow explicit any.
            '@typescript-eslint/no-floating-promises': [WARN, { ignoreVoid: true, ignoreIIFE: true }], // Most promises must be handled.
            '@typescript-eslint/no-for-in-array': [WARN], // No iterating arrays like objects.
            '@typescript-eslint/no-implicit-any-catch': [WARN, { allowExplicitAny: true }], // Catches must be explicit.
            '@typescript-eslint/no-inferrable-types': [WARN], // Declared types must be non-inferable (reduces verbocity).
            '@typescript-eslint/member-delimiter-style': [WARN, { // Interface members must end in ';' unless singleline.
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
            '@typescript-eslint/no-misused-new': [WARN], // No `new` interfaces/ctors.
            '@typescript-eslint/no-require-imports': [OFF], // Allow `require` imports for js interop.
            // https://github.com/surajs02/jsx-codeguide#implicit-boolean-conditionals.
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [WARN], // Disallow explicit literal boolean conditional aka no `a : boolean; a === true`.
            '@typescript-eslint/no-unnecessary-condition': [WARN], // Disallow conditionals where the value is always truthy/falsy aka no `a : []; if (a)`.
            '@typescript-eslint/no-unnecessary-type-assertion': [WARN], // Type casts must change type.
            '@typescript-eslint/non-nullable-type-assertion-style': [WARN], // Disallow using casting to non-null aka use `maybe!` over `maybe as string`.
            '@typescript-eslint/prefer-as-const': [WARN], // TS version of 'prefer-const'.
            '@typescript-eslint/prefer-for-of': [WARN], // Disallow verbose obsolete index usage.
            '@typescript-eslint/prefer-includes': [WARN], // Disallow obsolete `indexOf`.
            '@typescript-eslint/prefer-readonly': [WARN], // Members only mutated by ctor must be readonly.
            // https://github.com/surajs02/jsx-codeguide#implicit-boolean-conditionals.
            '@typescript-eslint/strict-boolean-expressions': [WARN, {
                allowString: false,
                allowNumber: false,
                allowNullableObject: false,
                allowNullableBoolean: false,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            }],
            '@typescript-eslint/type-annotation-spacing': [WARN, {
                // https://github.com/surajs02/jsx-codeguide#arrow-spacing
                before: true,
                after: true,
                overrides: {
                    colon: { // Type declaration colons are only appended with space.
                        before: false,
                        after: true,
                    },
                },
            }],
            '@typescript-eslint/unbound-method': [WARN], // Disallow calling unbound methods by ref as they're scopeless (aka terrible for functional).
        },
    },
];

module.exports = jsConfig;
