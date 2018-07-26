module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier",
    "rxjs-tslint-rules"
  ],
  "rules": {
    "ban-types": {
      "options": [
        ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
        // ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
        ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
        ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
        ["String", "Avoid using the `String` type. Did you mean `string`?"],
        ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
      ]
    },
    // Custom
    "trailing-comma": [false, {"multiline": "always", "singleline": "never"}],
    "interface-name": [false, "always-prefix"],
    "no-shadowed-variable": true,
    "arrow-parens": false,
    // General
    "no-console": [true,
      "time",
      "timeEnd",
      "trace"
    ],
    "max-classes-per-file": [
      false
    ],
    "max-line-length": [
      true,
      100
    ],
    "no-string-literal": false,
    "no-use-before-declare": true,
    "object-literal-sort-keys": false,
    "ordered-imports": [true],
    "typedef": [
      true,
      "call-signature",
      "parameter",
      "property-declaration"
    ],
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "no-trailing-whitespace": true,
    "variable-name": [
      true,
      "allow-leading-underscore",
      "allow-pascal-case",
      "ban-keywords",
      "check-format"
    ],
    // https://blog.angularindepth.com/rxjs-avoiding-takeuntil-leaks-fb5182d047ef
    "rxjs-no-unsafe-takeuntil": true,
    "rxjs-no-patched": {
      "options": [
        {
          "allowObservables": false,
          "allowOperators": false
        }
      ],
      "severity": "error"
    },
    "rxjs-no-add": {
      "options": [
        {
          "allowObservables": false,
          "allowOperators": false
        }
      ],
      "severity": "error"
    }
  }
};
