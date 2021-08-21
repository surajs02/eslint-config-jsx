# eslint-config-jsx

ESLint shareable config based on [JSX Codeguide] where relevant eslint rules extend recommended eslint/react/typescript rules whilst enforcing the codeguide to improve code maintainability for JS/JSX & TS/TSX projects.

## Installation
Ensure eslint is installed before installing this package:
```bash
npm install -D eslint eslint-config-jsx
```

Peer dependency details (i.e., all must be public hence available to eslint):
- `eslint`: Base linting
- `@babel/core`: ES6+ linting
- `@babel/eslint-parser`: Base (non-experimental) JS linting
- `@babel/eslint-plugin`: Experimental ES6+ linting
- `eslint-plugin-react`: React linting
- `@typescript-eslint/parser`: Base TS linting
- `typescript-eslint/eslint-plugin`: TS linting

Install peer dependencies:
```bash
npx install-peerdeps --dev eslint-config-jsx
```

## Usage
Add this package's name to the `extends` section of your project's `.eslintrc.js` config file:

```js
modules.exports = {
  extends: ['eslint-config-jsx'],
  rules: {
    // Override JS rules, e.g.:
    // 'no-extra-semi': ['off'],
  }
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Override TS rules, e.g.:
        // '@typescript-eslint/no-extra-semi': ['off'],
      },
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      rules: {
        // Override React rules, e.g.:
        // '@react/jsx-key': ['off'],
      },
    },
  ],
};
```

## Contributing

Contributions should follow [JSX Codeguide] (styleguide changes can be requested via an issue at [JSX Codeguide]).

New plugins should be installed locally & moved to the `peerDependencies`.

[JSX Codeguide]: https://github.com/surajs02/jsx-codeguide