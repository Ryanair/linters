# eslint-plugin-ryanair

Ryanair's custom eslint rules.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ryanair`:

```sh
npm install eslint-plugin-ryanair --save-dev
```

## Usage

Add `ryanair` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["ryanair"]
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
