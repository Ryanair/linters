# eslint-plugin-ryanair

Ryanair&#39;s custom eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ryanair`:

```
$ npm install eslint-plugin-ryanair --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ryanair` globally.

## Usage

Add `ryanair` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ryanair"
    ]
}
```


No rules are enabled by default, since those are very specific. Then configure the rules you want to use under the rules section in `.eslintrc` file.

```json
{
    "rules": {
        "ryanair/another-rule-name": 2,
        "ryanair/consistent-compt-ctrl-name": 2,
        "ryanair/consistent-test-filename": 2,
        "ryanair/no-element-directive": 2,
        "ryanair/no-pre-assign-bindings-enabled": 2,
        "ryanair/no-two-way-binding": 2,
        "ryanair/prefer-comp-ctrl-class": 2,
        "ryanair/require-comp-ctrl-on-init": 2,
    }
}
```

## Supported Rules

### AngularJS 1.7 migration

Rule                                    | Recommended | Fixable | Options
----                                    | ----------- | ------- | ---------------------
[no-element-directive][]                | 1,          |         |
[no-pre-assign-bindings-enabled][]      | 1,          |         |
[prefer-comp-ctrl-class][]              | 1,          |         |
[require-comp-ctrl-on-init][]           | 1,          |         |


### AngularJS performance issues

Rule                                    | Recommended | Fixable | Options
----                                    | ----------- | ------- | ---------------------
[no-two-way-binding][]                  | 1,          |         |


### AngularJS stylistic issues

Rule                                    | Recommended | Fixable | Options
----                                    | ----------- | ------- | --------------------
[consistent-compt-ctrl-name][]          | 1,          |         | namingPatternObject


### Jasmine best practices

Rule                                    | Recommended | Fixable | Options
----                                    | ----------- | ------- | --------------------
[consistent-test-filename][]            | 1,          |         | namingPatternObject


## See also

* [Eslint documentation](https://eslint.org/)
* [Ryanair linters collection](https://github.com/Ryanair/linters/packages/)


[no-pre-assign-bindings-enabled]: docs/rules/no-pre-assign-bindings-enabled.md
[no-element-directive]: docs/rules/no-element-directive.md
[prefer-comp-ctrl-class]: docs/rules/prefer-comp-ctrl-class.md
[require-comp-ctrl-on-init]: docs/rules/require-comp-ctrl-on-init.md
[no-two-way-binding]: docs/rules/no-two-way-binding.md
[consistent-compt-ctrl-name]: docs/rules/consistent-compt-ctrl-name.md
[consistent-test-filename]: docs/rules/consistent-test-filename.md
