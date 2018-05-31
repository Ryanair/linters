Ryanair typescript linters. This package contains two different
linters:

* standard
* angular ( with [codelyzer](https://github.com/mgechev/codelyzer) )

The `standard` linter extends:

* [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)
* [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)

## How to use it

```bash
npm i --save-dev tslint-config-ryanair
```

In your tslint then

```json
{
  "extends": ["tslint-config-ryanair"]
}
```

For angular projects instead

```bash
npm i --save-dev tslint-config-ryanair codelyzer
```

```json
{
  "extends": ["tslint-config-ryanair/angular"]
}
```

In your tsconfig.json

```json
{
  "extends": "./node_modules/tslint-config-ryanair/tsconfig.json"
}
```
