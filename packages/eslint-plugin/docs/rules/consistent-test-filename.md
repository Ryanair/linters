# Disallow the use of preAssignBindingsEnabled (consistent-test-filename)

Inconsistent naming of test files introduces chaos in the project. It's also makes harder to find test files or to search on files matching pattern. Most of IDEs often recognise '.spec.js' files giving them different look what makes spotting them easier.

## Rule Details

This rule will prevent inconsistent naming of test files, by letting to specify a suffix for a filename. Files that should match pattern are recognised by usage of `describe`, `it` and `expect`.

Examples of **incorrect** code for this rule:

```js

// File is named "myComponentTest.js"

// Options set to [1], default suffix is "spec"
// [WARNING] Test file should be named "myComponentTest.spec.js"
describe('Test suite', () => {
  // code
})

// Options set to [1, { "suffix": "test" }]
// [WARNING] Test file should be named "myComponentTest.test.js"
describe('Test suite', () => {
  // code
})

```

Examples of **correct** code for this rule:

```js

// File is named "myComponentTest.spec.js"

// Options set to [1], default suffix is "spec"
describe('Test suite', () => {
  // code
})

```


## Options schema

Filename is expected to fit in a pattern: `someFilename.${suffix}`

```js

[
  {
    type: 'object',
    properties: {
      suffix: {
        type: 'string'
      }
    },
    additionalProperties: false
  }
]

```

## When Not To Use It

When having tests in different folder than a source code.
