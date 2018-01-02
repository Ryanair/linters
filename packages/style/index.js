module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "max-nesting-depth": 3,
    "order/properties-alphabetical-order": true,
    "string-quotes": "single",
    "selector-pseudo-element-no-unknown": [true, {
      "ignorePseudoElements": ["ng-deep"]
    }],
    "selector-type-no-unknown": [true, {
      "ignore": ["custom-elements"],
      "ignoreTypes": ["icon"]
    }],
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["include"]
    }],
  }
};
