/**
 * @fileoverview Enforce consistent naming of test test files
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/consistent-test-filename');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('consistent-test-filename', rule, {

  valid: [
    {
      code: 'it()',
      filename: 'my-component.spec.js'
    },
    {
      code: 'describe()',
      filename: 'my-component.test.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: 'expect()',
      filename: 'my-component.suffix.js',
      options: [{ suffix: 'suffix' }]
    }
  ],

  invalid: [
    {
      code: 'describe()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'some-file.spec.js' },
        type: 'Program'
      }],
      filename: 'some-file.js',
      options: [{ suffix: 'spec' }]
    },
    {
      code: 'xdescribe()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'some.file.that.is.jasmines.somePrefix.js' },
        type: 'Program'
      }],
      filename: 'some.file.that.is.jasmines.js',
      options: [{ suffix: 'somePrefix' }]
    },
    {
      code: 'fdescribe()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.testing.test.js' },
        type: 'Program'
      }],
      filename: 'myComponent.testing.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: 'it()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.testing.test.js' },
        type: 'Program'
      }],
      filename: 'myComponent.testing.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: 'fit()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.testing.test.js' },
        type: 'Program'
      }],
      filename: 'myComponent.testing.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: 'xit()',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.testing.test.js' },
        type: 'Program'
      }],
      filename: 'myComponent.testing.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: `
        fakeOne('suit', () => {
          expect(something).toEqual(expectation);
        });
      `,
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.test.js' },
        type: 'Program'
      }],
      filename: 'myComponent.js',
      options: [{ suffix: 'test' }]
    },
    {
      code: `
        fakeOne('suit', () => {
          expect(something).toEqual(expectation);
        });
      `,
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'myComponent.spec.js' },
        type: 'Program'
      }],
      filename: 'myComponent.js'
    }
  ]
});
