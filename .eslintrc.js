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
        // #region Possible Errors.
        // for-direction
        // getter-return
        // no-async-promise-executor
        // no-await-in-loop
        // no-compare-neg-zero
        // no-cond-assign
        'no-console': [WARN, { 'allow': ['info', 'debug', 'warn', 'error'] }], // SOURCE: https://github.com/surajs02/jsx-codeguide#essential-console-logs
        // no-constant-condition
        // no-control-regex
        'no-debugger': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#conditional-debugger.
        // no-dupe-args
        // no-dupe-else-if
        // no-dupe-keys
        // no-duplicate-case
        // no-empty
        // no-empty-character-class
        // no-ex-assign
        // no-extra-boolean-cast
        'no-extra-parens': [OFF], // SOURCE: https://github.com/surajs02/jsx-codeguide#parentheses-presence.
        'no-extra-semi': [WARN],
        // no-func-assign
        // no-import-assign
        // no-inner-declarations
        // no-invalid-regexp
        'no-irregular-whitespace': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#attribute-indentation.
        // no-loss-of-precision
        // no-misleading-character-class
        // no-obj-calls
        // no-promise-executor-return
        // no-prototype-builtins
        // no-regex-spaces
        // no-setter-return
        // no-sparse-arrays
        // no-template-curly-in-string
        // no-unexpected-multiline
        // no-unreachable
        // no-unreachable-loop
        // no-unsafe-finally
        // no-unsafe-negation
        // no-unsafe-optional-chaining
        // no-useless-backreference
        // require-atomic-updates
        // use-isnan
        // valid-typeof
        // #endregion

        // #region Best practices.
        // block-scoped-var
        // class-methods-use-this
        // complexity
        // consistent-return
        curly: [WARN, 'multi'], // SOURCE: https://github.com/surajs02/jsx-codeguide#curly-bracket-presence.
        // default-case
        // default-case-last
        'default-param-last': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#optional-parameters-last.
        // dot-location
        'dot-notation': [WARN, { allowKeywords: true, allowPattern: '.*[_|-].*' }], // SOURCE: https://github.com/surajs02/jsx-codeguide#object-dot-notation.dot-notation
        eqeqeq: [WARN, 'smart'], // SOURCE: https://github.com/surajs02/jsx-codeguide#explicit-conditionals.
        // grouped-accessor-pairs
        // guard-for-in
        // max-classes-per-file
        // no-alert
        // no-caller
        // no-case-declarations
        // no-constructor-return
        // no-div-regex
        'no-else-return': [WARN], // SOURCE: SOURCE: https://github.com/surajs02/jsx-codeguide#simple-control-paths..
        // no-empty-function
        // no-empty-pattern
        // no-eq-null
        // no-eval
        // no-extend-native
        // no-extra-bind
        // no-extra-label
        // no-fallthrough
        // no-floating-decimal
        // no-global-assign
        // no-implicit-coercion
        // no-implicit-globals
        // no-implied-eval
        // no-invalid-this
        // no-iterator
        // no-labels
        // no-lone-blocks
        // no-loop-func
        // no-magic-numbers
        'no-multi-spaces': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#consistent-spacing.
        // no-multi-str
        // no-new
        // no-new-func
        // no-new-wrappers
        // no-nonoctal-decimal-escape
        // no-octal
        // no-octal-escape
        // no-param-reassign
        // no-proto
        'no-redeclare': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#immutable-variables.
        // no-restricted-properties
        // no-return-assign
        // no-return-await
        // no-script-url
        // no-self-assign
        // no-self-compare
        // no-sequences
        'no-throw-literal': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#throw-errors.
        // no-unmodified-loop-condition
        // no-unused-expressions
        // no-unused-labels
        // no-useless-call
        // no-useless-catch
        // no-useless-concat
        // no-useless-escape
        // no-useless-return
        // no-void
        // no-warning-comments
        // no-with
        // prefer-named-capture-group
        // prefer-promise-reject-errors
        // prefer-regex-literals
        // radix
        'require-await': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#async-contains-await.
        // require-unicode-regexp
        // vars-on-top
        // wrap-iife
        yoda: [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#query-first-conditionals.
        // #endregion

        // #region Strict Mode.
        // strict
        // #endregion

        // #region Variables.
        'init-declarations': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#predictable-initial-values.
        // no-delete-var
        // no-label-var
        // no-restricted-globals
        'no-shadow': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#immutable-variables.
        // no-shadow-restricted-names
        'no-undef': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#predictable-initial-values.
        // no-undef-init
        // no-undefined
        'no-unused-vars': [WARN, { args: 'all', argsIgnorePattern: '^__' }], // SOURCE: https://github.com/surajs02/jsx-codeguide#useful-variables.
        'no-use-before-define': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#predictable-initial-values.
        // #endregion

        // #region Stylistic.
        // array-bracket-newline
        // array-bracket-spacing
        // array-element-newline
        // block-spacing
        'brace-style': [WARN, '1tbs'], // SOURCE: https://github.com/surajs02/jsx-codeguide#curly-bracket-style.
        // camelcase
        // capitalized-comments
        'comma-dangle': [WARN, 'always-multiline'], // SOURCE: https://github.com/surajs02/jsx-codeguide#trailing-commas.
        'comma-spacing': [WARN, { before: false, after: true }], // SOURCE: https://github.com/surajs02/jsx-codeguide#comma-spacing.
        // comma-style
        // computed-property-spacing
        // consistent-this
        'eol-last': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#end-files-with-empty-line.
        'func-call-spacing': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#function-parentheses-placement.
        // func-name-matching
        // func-names
        // func-style
        // function-call-argument-newline
        // function-paren-newline
        // id-denylist
        // id-length
        // id-match
        // implicit-arrow-linebreak
        indent: [WARN, 4], // SOURCE: https://github.com/surajs02/jsx-codeguide#indentation.
        'jsx-quotes': [WARN, 'prefer-single'], // SOURCE: https://github.com/surajs02/jsx-codeguide#attribute-quotes.
        'key-spacing': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#object-colon-spacing.
        'keyword-spacing': [WARN, { before: true, after: true }], // SOURCE: https://github.com/surajs02/jsx-codeguide#keyword-spacing.
        // line-comment-position
        // linebreak-style
        // lines-around-comment
        // lines-between-class-members
        // max-depth
        // max-len
        // max-lines
        // max-lines-per-function
        // max-nested-callbacks
        // max-params
        // max-statements
        // max-statements-per-line
        // multiline-comment-style
        // multiline-ternary
        // new-cap
        // new-parens
        // newline-per-chained-call
        'no-array-constructor': [WARN], // Arrays must use param array ctor or literal.
        // no-bitwise
        // no-continue
        // no-inline-comments
        // no-lonely-if
        // no-mixed-operators
        // no-mixed-spaces-and-tabs
        // no-multi-assign
        // no-multiple-empty-lines
        // no-negated-condition
        // no-nested-ternary
        // no-new-object
        // no-plusplus
        // no-restricted-syntax
        // no-tabs
        // no-ternary
        // no-trailing-spaces
        // no-underscore-dangle
        'no-unneeded-ternary': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#simple-control-paths.
        // no-whitespace-before-property
        // nonblock-statement-body-position
        // object-curly-newline
        'object-curly-spacing': [WARN, 'always'], // SOURCE: https://github.com/surajs02/jsx-codeguide#object-curly-bracket-spacing.
        // object-property-newline
        // one-var
        // one-var-declaration-per-line
        // operator-assignment
        'operator-linebreak': [WARN, 'before'], // SOURCE: https://github.com/surajs02/jsx-codeguide#operator-linebreaks.
        // padded-blocks
        // padding-line-between-statements
        // prefer-exponentiation-operator
        // prefer-object-spread
        // quote-props
        quotes: [WARN, 'single'], // SOURCE: https://github.com/surajs02/jsx-codeguide#quote-presence.
        semi: [WARN, 'always' ], // SOURCE: https://github.com/surajs02/jsx-codeguide#semicolon-presence.
        'semi-spacing': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#semicolon-presence.
        // semi-style
        // sort-keys
        // sort-vars
        // space-before-blocks
        // space-before-function-paren
        // space-in-parens
        'space-infix-ops': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#binary-operator-spacing.
        'space-unary-ops': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#unary-operator-spacing.
        // spaced-comment
        // switch-colon-spacing
        // template-tag-spacing
        // unicode-bom
        // wrap-regex
        // #endregion

        // #region ECMAScript 6.
        'arrow-body-style': [WARN, 'as-needed'], // SOURCE: https://github.com/surajs02/jsx-codeguide#arrow-body-brackets-presence.
        'arrow-parens': [WARN, 'as-needed'], // SOURCE: https://github.com/surajs02/jsx-codeguide#arrow-parentheses-presence.
        'arrow-spacing': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#arrow-spacing.
        // constructor-super
        // generator-star-spacing
        // no-class-assign
        // no-confusing-arrow
        'no-const-assign': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#immutable-variables.
        'no-dupe-class-members': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#unique-class-members.
        'no-duplicate-imports': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#unique-imports.
        // no-new-symbol
        // no-restricted-exports
        // no-restricted-imports
        // no-this-before-super
        // no-useless-computed-key
        'no-useless-constructor': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#useful-constructors.
        // no-useless-rename
        // no-var
        // object-shorthand
        // prefer-arrow-callback
        'prefer-const': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#immutable-variables.
        // prefer-destructuring
        // prefer-numeric-literals
        // prefer-rest-params
        // prefer-spread
        // prefer-template
        // require-yield
        // rest-spread-spacing
        // sort-imports
        // symbol-description
        // template-curly-spacing
        // yield-star-spacing
        // #endregion

        // #region Deprecated.
        'valid-jsdoc': [OFF], // SOURCE: https://github.com/surajs02/jsx-codeguide#useful-docs.
        // #endregion

        // #region React.
        // react/boolean-prop-naming
        // react/button-has-type
        // react/default-props-match-prop-types
        // react/destructuring-assignment
        // react/display-name
        // react/forbid-component-props
        // react/forbid-dom-props
        // react/forbid-elements
        // react/forbid-foreign-prop-types
        // react/forbid-prop-types
        // react/function-component-definition
        // react/no-access-state-in-setstate
        // react/no-adjacent-inline-elements
        // react/no-array-index-key
        // react/no-children-prop
        'react/no-danger': [WARN],
        // react/no-danger-with-children
        // react/no-deprecated
        // react/no-did-mount-set-state
        // react/no-did-update-set-state
        'react/no-direct-mutation-state': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#indirect-state-mutation.
        // react/no-find-dom-node
        // react/no-is-mounted
        // react/no-multi-comp
        // react/no-redundant-should-component-update
        // react/no-render-return-value
        // react/no-set-state
        // react/no-string-refs
        // react/no-this-in-sfc
        // react/no-typos
        // react/no-unescaped-entities
        // react/no-unknown-property
        // react/no-unsafe
        // react/no-unused-prop-types
        // react/no-unused-state
        // react/no-will-update-set-state
        // react/prefer-es6-class
        // react/prefer-read-only-props
        // react/prefer-stateless-function
        'react/prop-types': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#attribute-types.
        // react/react-in-jsx-scope
        // react/require-default-props
        // react/require-optimization
        // react/require-render-return
        'react/self-closing-comp': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#closing-tag-presence.
        'react/sort-comp': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#ordered-lifecycle-methods.
        // react/sort-prop-types
        // react/state-in-constructor
        // react/static-property-placement
        // react/style-prop-object
        // react/void-dom-elements-no-children
        // #endregion

        // #region JSX.
        'react/jsx-boolean-value': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#implicit-boolean-attribute.
        // react/jsx-child-element-spacing
        // react/jsx-closing-bracket-location
        // react/jsx-closing-tag-location
        'react/jsx-curly-brace-presence': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#attribute-curly-brackets-presence.
        // react/jsx-curly-newline
        // react/jsx-curly-spacing
        // react/jsx-equals-spacing
        // react/jsx-filename-extension
        // react/jsx-first-prop-new-line
        // react/jsx-fragments
        // react/jsx-handler-names
        // react/jsx-indent
        'react/jsx-indent-props': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#attribute-indentation.
        'react/jsx-key': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#unique-attributes.
        // react/jsx-max-depth
        // react/jsx-max-props-per-line
        // react/jsx-newline
        // react/jsx-no-bind
        // react/jsx-no-comment-textnodes
        // react/jsx-no-constructed-context-values
        'react/jsx-no-duplicate-props': [WARN], // SOURCE: https://github.com/surajs02/jsx-codeguide#unique-attributes.
        // react/jsx-no-literals
        // react/jsx-no-script-url
        // react/jsx-no-target-blank
        // react/jsx-no-undef
        // react/jsx-no-useless-fragment
        // react/jsx-one-expression-per-line
        // react/jsx-pascal-case
        // react/jsx-props-no-multi-spaces
        // react/jsx-props-no-spreading
        // react/jsx-sort-default-props
        // react/jsx-sort-props
        // react/jsx-space-before-closing
        // react/jsx-tag-spacing
        // react/jsx-uses-react
        // react/jsx-uses-vars
        // react/jsx-wrap-multiline
        // #endregion

        // TODO: JSX - Doc.
        'react/jsx-max-props-per-line': [WARN, { maximum: 2 }],
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

// NOTE: Will be converted from js to ts rules (e.g., `brace-style` => `@typescript-eslint/brace-style`).
const INCOMPAT_JS_RULES = [
    // #region TS Extensions (i.e., compat for js rules).
    'brace-style',
    'comma-dangle',
    'comma-spacing',
    'default-param-last',
    'dot-notation',
    'func-call-spacing',
    'indent',
    'init-declarations',
    'keyword-spacing',
    // lines-between-class-members
    'no-array-constructor',
    'no-dupe-class-members',
    'no-duplicate-imports',
    // no-empty-function
    'no-extra-parens',
    'no-extra-semi',
    // no-implied-eval
    // no-invalid-this
    // no-loop-func
    // no-loss-of-precision
    // no-magic-numbers
    'no-redeclare',
    'no-shadow',
    'no-throw-literal',
    // no-unused-expressions
    'no-unused-vars',
    'no-use-before-define',
    // no-useless-constructor
    'object-curly-spacing',
    'quotes',
    'require-await',
    'no-return-await',
    'semi',
    // space-before-function-paren
    'space-infix-ops',
    // #endregion
];
const COMPAT_JS_RULES = Object.keys(jsConfig.rules).reduce(
    (a, v) => INCOMPAT_JS_RULES.includes(v) ? a : { ...a, [v]: jsConfig.rules[v] },
    {}
);
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
            ...COMPAT_JS_RULES, // Add ts rules atop compat js since ts supersets js.

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
            // #region TS.
            // @typescript-eslint/adjacent-overload-signatures
            // @typescript-eslint/array-type
            // @typescript-eslint/await-thenable
            // @typescript-eslint/ban-ts-comment
            // @typescript-eslint/ban-tslint-comment
            // @typescript-eslint/ban-types
            // @typescript-eslint/class-literal-property-style
            // @typescript-eslint/consistent-indexed-object-style
            // @typescript-eslint/consistent-type-assertions
            // @typescript-eslint/consistent-type-definitions
            // @typescript-eslint/consistent-type-imports
            // @typescript-eslint/explicit-function-return-type
            // @typescript-eslint/explicit-member-accessibility
            // @typescript-eslint/explicit-module-boundary-types
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
            // @typescript-eslint/member-ordering
            // @typescript-eslint/method-signature-style
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
            // @typescript-eslint/no-base-to-string
            // @typescript-eslint/no-confusing-non-null-assertion
            // @typescript-eslint/no-confusing-void-expression
            // @typescript-eslint/no-dynamic-delete
            // @typescript-eslint/no-empty-interface
            '@typescript-eslint/no-explicit-any': [OFF], // Allow explicit any.
            // @typescript-eslint/no-extra-non-null-assertion
            // @typescript-eslint/no-extraneous-class
            '@typescript-eslint/no-floating-promises': [WARN, { ignoreVoid: true, ignoreIIFE: true }], // Most promises must be handled.
            '@typescript-eslint/no-for-in-array': [WARN], // No iterating arrays like objects.
            '@typescript-eslint/no-implicit-any-catch': [WARN, { allowExplicitAny: true }], // Catches must be explicit.
            '@typescript-eslint/no-inferrable-types': [WARN], // Declared types must be non-inferable (reduces verbocity).
            // @typescript-eslint/no-invalid-void-type
            '@typescript-eslint/no-misused-new': [WARN], // No `new` interfaces/ctors.
            // @typescript-eslint/no-misused-promises
            // @typescript-eslint/no-namespace
            // @typescript-eslint/no-non-null-asserted-optional-chain
            // @typescript-eslint/no-non-null-assertion
            // @typescript-eslint/no-parameter-properties
            '@typescript-eslint/no-require-imports': [OFF], // Allow `require` imports for js interop.
            // @typescript-eslint/no-this-alias
            // @typescript-eslint/no-type-alias

            // SOURCE: https://github.com/surajs02/jsx-codeguide#implicit-boolean-conditionals..
            '@typescript-eslint/no-unnecessary-boolean-literal-compare': [WARN], // Disallow explicit literal boolean conditional aka no `a : boolean; a === true`.

            '@typescript-eslint/no-unnecessary-condition': [WARN], // Disallow conditionals where the value is always truthy/falsy aka no `a : []; if (a)`.
            // @typescript-eslint/no-unnecessary-qualifier
            // @typescript-eslint/no-unnecessary-type-arguments
            '@typescript-eslint/no-unnecessary-type-assertion': [WARN], // Type casts must change type.
            // @typescript-eslint/no-unnecessary-type-constraint
            // @typescript-eslint/no-unsafe-assignment
            // @typescript-eslint/no-unsafe-call
            // @typescript-eslint/no-unsafe-member-access
            // @typescript-eslint/no-unsafe-return
            // @typescript-eslint/no-var-requires
            '@typescript-eslint/non-nullable-type-assertion-style': [WARN], // Disallow using casting to non-null aka use `maybe!` over `maybe as string`.
            '@typescript-eslint/prefer-as-const': [WARN], // TS version of 'prefer-const'.
            // @typescript-eslint/prefer-enum-initializers
            '@typescript-eslint/prefer-for-of': [WARN], // Disallow verbose obsolete index usage.
            // @typescript-eslint/prefer-function-type
            '@typescript-eslint/prefer-includes': [WARN], // Disallow obsolete `indexOf`.
            // @typescript-eslint/prefer-literal-enum-member
            // @typescript-eslint/prefer-namespace-keyword
            // @typescript-eslint/prefer-nullish-coalescing
            // @typescript-eslint/prefer-optional-chain
            '@typescript-eslint/prefer-readonly': [WARN], // Members only mutated by ctor must be readonly.
            // @typescript-eslint/prefer-readonly-parameter-types
            // @typescript-eslint/prefer-reduce-type-parameter
            // @typescript-eslint/prefer-regexp-exec
            // @typescript-eslint/prefer-string-starts-ends-with
            // @typescript-eslint/prefer-ts-expect-error
            // @typescript-eslint/promise-function-async
            // @typescript-eslint/require-array-sort-compare
            // @typescript-eslint/restrict-plus-operands
            // @typescript-eslint/restrict-template-expressions
            // @typescript-eslint/sort-type-union-intersection-members

            // SOURCE: https://github.com/surajs02/jsx-codeguide#implicit-boolean-conditionals..
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

            // @typescript-eslint/switch-exhaustiveness-check
            // @typescript-eslint/triple-slash-reference
            '@typescript-eslint/type-annotation-spacing': [WARN, {
                // SOURCE: https://github.com/surajs02/jsx-codeguide#arrow-spacing.
                before: true,
                after: true,
                overrides: {
                    colon: { // Type declaration colons are only appended with space.
                        before: false,
                        after: true,
                    },
                },
            }],
            // @typescript-eslint/typedef
            '@typescript-eslint/unbound-method': [WARN], // Disallow calling unbound methods by ref as they're scopeless (aka terrible for functional).
            // @typescript-eslint/unified-signature
            // #endregion
        },
    },
];

// console.log(jsConfig.overrides[0].rules)

module.exports = jsConfig;
