/**
 * @fileoverview Prefer use of class for AngularJS component controller
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/prefer-comp-ctrl-class');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('prefer-comp-ctrl-class', rule, {

  valid: [
    `angular.module("someModule").component("name", {
        controller: class nameCtrl {
          // code
        } 
      });`,

    `angular.module("someModule").component("").component("name", {
        controller: class nameCtrl {
          $onInit() {
            // code
          }
        } 
      });`
  ],

  invalid: [
    {
      code: 'angular.module("someModule").component("name", { controller: null })',
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'Literal'
      }]
    },
    {
      code: 'angular.module("someModule").component("name", { controller: () => { this.onInit; } })',
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'ArrowFunctionExpression'
      }]
    },
    {
      code: 'angular.module("someModule").component("another").component("name", { controller() {} })',
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'FunctionExpression'
      }]
    },
    {
      code: 'angular.module("someModule").component("name", { controller: function() {} })',
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'FunctionExpression'
      }]
    },
    {
      code: 'angular.module().component("name", { controller: function() {} })',
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'FunctionExpression'
      }]
    },
    {
      code: `
        angular.module().component("name", {
          controller: function() {
            if (condition) {
              this.$onInit = () => {
                // code
              }
            }
          } 
        });
      `,
      errors: [{
        messageId: 'ctrlIsNotClass',
        type: 'FunctionExpression'
      }]
    }
  ]
});
