Ryanair javascript linter.

## How to use it

```bash
npm i --save-dev
    @angular-eslint/eslint-plugin
    @typescript-eslint/eslint-plugin
    @typescript-eslint/eslint-plugin-tslint
    @typescript-eslint/parser
    eslint
    eslint-config-prettier
    eslint-config-ryanair
    eslint-plugin-import
    eslint-plugin-jsdoc
    eslint-plugin-ordered-imports
    eslint-plugin-prefer-arrow
    eslint-plugin-rxjs
```

Then in your .eslintrc

```json
{
  "extends": "eslint-config-ryanair"
}
```
