/**
 * @fileoverview Enforce consistent naming of AngularJS component controller
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/consistent-compt-ctrl-name');
const { RuleTester } = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6 } });
ruleTester.run('consistent-compt-ctrl-name', rule, {

  valid: [
    {
      code: `
        angular.module("someModule").component("name", {
          controller: class NameCtrl {
            // code
          } 
        });
      `,
      options: [{ includeName: true, suffix: 'Ctrl' }]
    },

    {
      code: `
        angular.module("someModule").component("").component("name", {
          controller: function NameCtrl() {
            // code
          } 
        });
      `,
      options: [{ includeName: true, suffix: 'Ctrl' }]
    },

    {
      code: `
        angular.module("someModule").component("").component("name", {
          controller: function name() {
            // code
          } 
        });
      `,
      options: [{ capitaliseName: false }]
    }
  ],

  invalid: [
    {
      code: 'angular.module("someModule").component("name", { controller: () => { this.onInit; } })',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Name' },
        type: 'ArrowFunctionExpression'
      }]
    },
    {
      code: 'angular.module("someModule").component("another").component("name", { controller() {} })',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Name' },
        type: 'FunctionExpression'
      }]
    },
    {
      code: 'angular.module("someModule").component("name", { controller: function nameCtrl() {} })',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Name' },
        type: 'Identifier'
      }]
    },
    {
      code: 'angular.module().component("name", { controller: function() {} })',
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Name' },
        type: 'FunctionExpression'
      }]
    },
    {
      code: `
        angular.module().component("name", {
          controller: class fakeName {
            // code
          } 
        });
      `,
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Name' },
        type: 'Identifier'
      }]
    },
    {
      code: `
        angular.module().component("name", {
          controller: class name {
            // code
          } 
        });
      `,
      options: [{ includeName: true, suffix: 'Ctrl' }],
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'NameCtrl' },
        type: 'Identifier'
      }]
    },
    {
      code: `
        angular.module().component("name", {
          controller: class name {
            // code
          } 
        });
      `,
      options: [{ capitaliseName: true, includeName: true, prefix: 'CtrlOf' }],
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'CtrlOfName' },
        type: 'Identifier'
      }]
    },
    {
      code: `
        angular.module().component("name", {
          controller: class name {
            // code
          } 
        });
      `,
      options: [{ includeName: false, prefix: 'Controller' }],
      errors: [{
        messageId: 'noConsistentNaming',
        data: { expectedName: 'Controller' },
        type: 'Identifier'
      }]
    }
  ]
});
