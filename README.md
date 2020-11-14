# eslint-config-jsx

ESLint shareable config based on Suraj's [JSX Codeguide](https://github.com/surajs02/jsx-codeguide) where relevant eslint rules extend recommended eslint/react rules to enforce the codeguide to improve code maintainability for JavaScript and React projects.

## Installation
Ensure eslint is installed before installing this package:
```bash
npm install -D eslint eslint-config-jsx
```
Install peer dependencies:
```bash
npx install-peerdeps --dev eslint-config-jsx
```

## Usage
Add this package's name to the `extends` section of your project's `.eslintrc` config file:

```json
{
  "extends": ["eslint-config-jsx"],
  "rules": {
    // Additional rules...
  }
}
```