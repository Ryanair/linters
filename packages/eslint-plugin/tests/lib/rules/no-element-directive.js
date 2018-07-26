/**
 * @fileoverview Prefer use of component over element directive
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-element-directive');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('no-element-directive', rule, {

  valid: [
    `angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
      return {
        controllerAs: '$ctrl'
      }
    });`,

    `angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
      return {
        restrict: 'A'
      }
    });`,

    `angular.module("someModule").component("comp").directive('ctLocSelector', function ctLocSelector() {
      return {
        restrict: 'AC'
      }
    });`,

    `angular.module("mod").component("name", {
        controller: class nameCtrl {
          // code
        } 
      });`
  ],

  invalid: [
    {
      code: `
        angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
          return {
            restrict: 'E'
          }
        });
      `,
      errors: [{
        messageId: 'useComponent',
        type: 'Literal'
      }]
    },
    {
      code: `
        angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
          return {
            restrict: 'EA'
          }
        });
      `,
      errors: [{
        messageId: 'useComponent',
        type: 'Literal'
      }]
    },
    {
      code: `
        angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
          return {
            restrict: 'ACE'
          }
        });
      `,
      errors: [{
        messageId: 'useComponent',
        type: 'Literal'
      }]
    },
    {
      code: `
        angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
          return {
            restrict: 'MCEA'
          }
        });
      `,
      errors: [{
        messageId: 'useComponent',
        type: 'Literal'
      }]
    }
  ]
});
