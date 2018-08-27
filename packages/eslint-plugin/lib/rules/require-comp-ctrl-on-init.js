/**
 * @fileoverview Require use of $onInit in AngularJS component controller
 * @author Patryk Galuszka
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { allPass, propEq, pathEq, anyPass, pipe, pathOr } = require('ramda');
const { getObjectPropertyValue } = require('../helpers/ast-utils');
const { getComponentConfig, isModuleRegister } = require('../helpers/angularJs');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const isAssignedToMethod = allPass([
  propEq('type', 'MethodDefinition'),
  pathEq(['key', 'name'], '$onInit')
]);
const isAssignedToThis = allPass([
  propEq('type', 'ExpressionStatement'),
  pathEq(['expression', 'left', 'object', 'type'], 'ThisExpression'),
  pathEq(['expression', 'left', 'property', 'name'], '$onInit')
]);
const onInitFound = anyPass([isAssignedToMethod, isAssignedToThis]);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Require use of $onInit in Angular component',
      category: 'AngularJS 1.7 migration',
      recommended: true,
      url: 'https://github.com/Ryanair/linters/blob/master/packages/eslint-plugin/docs/rules/require-comp-ctrl-on-init.md'
    },
    fixable: null,
    messages: {
      onInitNotFound: 'No $onInit in component controller'
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isModuleRegister('component', node)) {
          const controllerFunc = pipe(
            getComponentConfig,
            getObjectPropertyValue('controller')
          )(node);
          const controllerContent = pathOr([], ['body', 'body'], controllerFunc);

          if (!controllerContent.find(onInitFound)) {
            context.report({ messageId: 'onInitNotFound', node: controllerFunc });
          }
        }
      }
    };
  }
};
