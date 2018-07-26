/**
 * @fileoverview Prefer use of class for AngularJS component controller
 * @author Patryk Galuszka
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { pipe } = require('ramda');
const { isClass, getObjectPropertyValue } = require('../helpers/ast-utils');
const { getComponentConfig, isModuleRegister } = require('../helpers/angularJs');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Prefer use of class for Angular component controller',
      category: 'AngularJS 1.7 migration',
      recommended: true
    },
    fixable: null,
    messages: {
      ctrlIsNotClass: 'Component controller should be a class'
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isModuleRegister('component', node)) {
          const controller = pipe(
            getComponentConfig,
            getObjectPropertyValue('controller')
          )(node);

          if (controller && !isClass(controller)) {
            context.report({ messageId: 'ctrlIsNotClass', node: controller });
          }
        }
      }
    };
  }
};
