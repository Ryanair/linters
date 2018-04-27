module.exports = {
  "extends": "airbnb-base",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "comma-dangle": ["error", "never"],
    "max-len": ["error", 120, 2, {
      "ignoreUrls": true
    }],
    "no-restricted-syntax": "warn",
    "func-names": "off",
    "space-before-function-paren": "off",
    "no-param-reassign": "warn",
    "prefer-arrow-callback": "off",
    "spaced-comment": "off",
    "no-var": "warn",
    "one-var": ["error", "never"],
    "object-shorthand": "warn",
    "no-console": "error",
    "new-cap": "off",
    "no-bitwise": "off",
    "import/no-extraneous-dependencies": "off",
    "no-mixed-operators": "warn",
    "no-underscore-dangle": ["error", { "allow": ["__", "_satellite"] }]
  },
  "globals": {
    "navigator": true,
    "angular": true,
    "adobe": true,
    "inject": true,
    "it": true,
    "expect": true,
    "spyOn": true,
    "describe": true,
    "afterEach": true,
    "TestElement": true,
    "beforeEach": true,
    "moment": true,
    "jasmine": true,
    "TestUtils": true,
    "xit": true,
    "afterAll": true,
    "beforeAll": true,
    "xdescribe": true,
    "fdescribe": false,
    "using": true,
    "IScroll": true,
    "all": true,
    "xall": true,
    "document": true,
    "google": true,
    "Event": true,
    "window": true,
    "CustomEvent": true,
    "R": true,
    "Fingerprint2": true,
    "lozad": true,
    "hj": true
  }
}
