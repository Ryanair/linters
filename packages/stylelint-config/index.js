module.exports = {
  "plugins": [
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "keyframe-declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "block-no-empty": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "media-feature-name-no-unknown": true,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "/each/",
          "/else/",
          "/if/",
          "/include/",
          "/mixin/",
          "/media/"
        ]
      }
    ],
    "comment-no-empty": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "color-named": "never",
    "function-url-no-scheme-relative": true,
    "number-max-precision": 3,
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-no-important": true,
    "selector-max-class": 2,
    "selector-max-id": 1,
    "selector-max-empty-lines": 0,
    "selector-no-vendor-prefix": true,
    "max-nesting-depth": 3,
    "no-unknown-animations": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "font-family-name-quotes": "always-where-recommended",
    "font-weight-notation": "named-where-possible",
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "string-quotes": "double",
    "length-zero-no-unit": true,
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "custom-property-empty-line-before": "never",
    "property-case": "lower",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": "always-single-line",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-pseudo-class-case": "lower",
    "selector-type-case": "lower",
    "rule-empty-line-before": [
      "always",
      {
        "ignore": ["after-comment", "inside-block"]
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "at-rule-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ],
        "ignoreAtRules": [
          "/include/",
          "/import/"
        ]
      }
    ],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "comment-empty-line-before": [
      "always",
      {
        "ignore": [
          "stylelint-commands"
        ]
      }
    ],
    "comment-whitespace-inside": "always",
    "indentation": 2,
    "max-empty-lines": 1,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "order/properties-alphabetical-order": true,
    "order/order": [
      "custom-properties",
      "declarations"
    ]
  }
};
