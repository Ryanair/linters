module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-config-prettier"
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
      "member-variable-declaration",
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
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "eofline": true,
    "forin": true,
    "import-blacklist": [
      true,
      "rxjs"
    ],
    "import-spacing": true,
    "indent": [
      true,
      "spaces"
    ],
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      140
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],
    "no-misused-new": false,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "prefer-const": true,
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "unified-signatures": true,
    "variable-name": false,
  }
};
