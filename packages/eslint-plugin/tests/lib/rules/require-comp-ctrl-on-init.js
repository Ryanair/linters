/**
 * @fileoverview Require use of $onInit in AngularJS component controller
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/require-comp-ctrl-on-init');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('require-comp-ctrl-on-init', rule, {

  valid: [
    `angular.module("mod").component("name", {
        controller: function() {
          this.$onInit = function() {
            // code
          }
        } 
      });`,

    `angular.module("mod").component("name", {
        controller: () => {
          this.$onInit = () => {
            // code
          }
        } 
      });`,

    `angular.module("mod").component("name", {
        controller: class nameCtrl {
          $onInit() {
            // code
          }
        } 
      });`
  ],

  invalid: [
    {
      code: 'angular.module("mod").component("name", { controller: null })',
      errors: [{
        messageId: 'onInitNotFound',
        type: 'Literal'
      }]
    },
    {
      code: 'angular.module("mod").component("name", { controller: () => { this.onInit; } })',
      errors: [{
        messageId: 'onInitNotFound',
        type: 'ArrowFunctionExpression'
      }]
    },
    {
      code: 'angular.module("mod").component("name", { controller() {} })',
      errors: [{
        messageId: 'onInitNotFound',
        type: 'FunctionExpression'
      }]
    },
    {
      code: 'angular.module("mod").component("name", { controller: function() {} })',
      errors: [{
        messageId: 'onInitNotFound',
        type: 'FunctionExpression'
      }]
    },
    {
      code: 'angular.module("mod").component("name", { controller: function() {} })',
      errors: [{
        messageId: 'onInitNotFound',
        type: 'FunctionExpression'
      }]
    },
    {
      code: `
        angular.module("mod").component("name", {
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
        messageId: 'onInitNotFound',
        type: 'FunctionExpression'
      }]
    }
  ]
});
