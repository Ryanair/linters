# eslint-plugin-ryanair-typescript

Ryanair's custom eslint rules for TypeScript.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ryanair-typescript` and [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint):

```sh
npm install eslint-plugin-ryanair-typescript @typescript-eslint/parser --save-dev
```

## Usage

Add `ryanair` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["ryanair"]
}
```

Set [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint) in the parser configuration.

```json
{
  "parser": "@typescript-eslint/parser"
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "ryanair/no-barrel-imports": "error"
  }
}
```

## Supported Rules

- [no-barrel-imports](./docs/rules/no-barrel-imports.md)
