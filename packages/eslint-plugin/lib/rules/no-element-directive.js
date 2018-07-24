/**
 * @fileoverview Prefer use of component over element directive
 * @author Patryk Galuszka
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { pipe, prop } = require('ramda');
const { getObjectPropertyValue } = require('../helpers/ast-utils');
const { getDirectiveConfig, isModuleRegister } = require('../helpers/angularJs');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const getRestict = pipe(
  getDirectiveConfig,
  getObjectPropertyValue('restrict')
);

const hasElementSymbol = (node) => {
  const value = prop('value', node);
  return value && (value.indexOf('E') > -1);
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Prefer use of component over element directive',
      category: 'AngularJS 1.7 migration',
      recommended: true
    },
    fixable: null,
    messages: {
      useComponent: 'Use component rather than element directive'
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isModuleRegister('directive', node)) {
          const restrict = getRestict(node);

          if (hasElementSymbol(restrict)) {
            context.report({ messageId: 'useComponent', node: restrict });
          }
        }
      }
    };
  }
};
