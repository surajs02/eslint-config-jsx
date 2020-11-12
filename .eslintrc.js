module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {  
            version: 'detect',
        },
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
    env: {
        'browser': true,
        'node': true,
        'es6': true,
    },
    rules: {
        'prefer-const': ['warn'], // https://github.com/surajs02/jsx-codeguide#immutable-variables
        'no-else-return': ['warn'], // https://github.com/surajs02/jsx-codeguide#simple-control-paths
        'space-unary-ops': 1, // https://github.com/surajs02/jsx-codeguide#unary-operator-spacing
        'space-infix-ops': 1, // https://github.com/surajs02/jsx-codeguide#binary-operator-spacing
        'operator-linebreak': ['warn', 'before'], // https://github.com/surajs02/jsx-codeguide#operator-linebreaks
        'comma-dangle': ['warn', 'always-multiline'], // https://github.com/surajs02/jsx-codeguide#trailing-commas
        'comma-spacing': ['warn', { 'before': false, 'after': true }], // https://github.com/surajs02/jsx-codeguide#comma-spacing
        'semi': ['warn', 'always' ], // https://github.com/surajs02/jsx-codeguide#semicolon-presence
        'no-extra-semi': 1,
        'no-extra-parens': 0, // https://github.com/surajs02/jsx-codeguide#parentheses-presence
        'indent': ['warn', 4], // https://github.com/surajs02/jsx-codeguide#indentation
        'brace-style': [1, '1tbs'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-style
        'curly': ['warn', 'multi'], // https://github.com/surajs02/jsx-codeguide#curly-bracket-presence
        'quotes': ['warn', 'single'], // https://github.com/surajs02/jsx-codeguide#quote-presence
        'arrow-parens': ['warn', 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-parentheses-presence
        'arrow-body-style': ['warn', 'as-needed'], // https://github.com/surajs02/jsx-codeguide#arrow-body-brackets-presence
        'arrow-spacing': 1, // https://github.com/surajs02/jsx-codeguide#arrow-spacing

        // TODO: Doc
        'no-irregular-whitespace': 1,
        'eqeqeq': ['warn', 'smart'],
        'no-console': ['warn', { 'allow': ['info', 'debug', 'warn', 'error'] }],
        'no-debugger': 1,
        'no-undef': 1,
        'no-unused-vars': 1,
        'semi-spacing': 1,
        'no-unneeded-ternary': ['warn'],
        'valid-jsdoc': [1, { 'requireReturn': false }],
        'key-spacing': 1,
        'no-multi-spaces': 1,
        'yoda': 1,
        'eol-last': 1,
        
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
        'react/jsx-space-before-closing': 1, // TODO: Deprecated?
        'react/jsx-tag-spacing': 1,
        'react/jsx-uses-vars': 1,
        'react/no-unknown-property': 1,
        'react/jsx-fragments': ['warn', 'element'],
    },
    globals: { 
        '_': false,
    },
};
