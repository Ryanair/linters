/**
 * @fileoverview Disallow use of preAssignBindingsEnabled in unit tests
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-pre-assign-bindings-enabled');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('no-pre-assign-bindings-enabled', rule, {

  valid: [
    '$compileProvider;',
    `describe('Some suit', () => {
        beforeAll(module(($compileProvider) => {
          const enableBindings = $compileProvider.preAssignBindingsEnabled;
          enableBindings(true);
        }));
      });`
  ],

  invalid: [
    {
      code: '$compileProvider.preAssignBindingsEnabled(true)',
      errors: [{
        messageId: 'avoidReEnabling',
        type: 'Literal'
      }]
    },
    {
      code: '$compileProvider.preAssignBindingsEnabled()',
      errors: [{
        messageId: 'flagDeprecated',
        type: 'Identifier'
      }]
    },
    {
      code: '$compileProvider.preAssignBindingsEnabled(false)',
      errors: [{
        messageId: 'flagDeprecated',
        type: 'Identifier'
      }]
    },
    {
      code: `
        describe('Some suit', () => {
          beforeAll(module(($compileProvider) => {
            $compileProvider.preAssignBindingsEnabled(true);
          }));
        });
      `,
      errors: [{
        messageId: 'avoidReEnabling',
        type: 'Literal'
      }]
    }
  ]
});
