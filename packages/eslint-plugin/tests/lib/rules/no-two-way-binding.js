/**
 * @fileoverview Disallow use of two way bindings
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-two-way-binding');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('no-two-way-binding', rule, {

  valid: [
    `angular.module("someModule").component("name", {
        bindings: {
          disabledFields: '&',
          locationPlaceholder: '@',
          locationInputValue: '<'
        }
      });`,

    `angular.module("someModule").component("").directive('ctLocSelector', function ctLocSelector() {
      return {
        restrict: 'E',
        scope: {
          locationPlaceholder: '@',
          locationInputValue: '<',
          disabledFields: '&'
        }
      }
    });`
  ],

  invalid: [
    {
      code: `
        angular.module("someModule").component("").directive('ctLocSelector', function ctLocSelector() {
          return {
            restrict: 'E',
            scope: {
              formFieldId: '@',
              locationInputValue: '<',
              location: '='
            }
          }
        });
      `,
      errors: [{
        messageId: 'noTwoWayBinding',
        type: 'Property'
      }]
    },
    {
      code: `
        angular.module("someModule").component("name", {
          bindings: {
            formFieldId: '&',
            location: '=?',
            locationInputValue: '<'
          }
        });
      `,
      errors: [{
        messageId: 'noTwoWayBinding',
        type: 'Property'
      }]
    }
  ]
});
