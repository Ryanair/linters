/**
 * @fileoverview Disallow use of two way bindings
 * @author Patryk Galuszka
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { pipe, propOr, find, path } = require('ramda');
const { getObjectPropertyValue } = require('../helpers/ast-utils');
const { getComponentConfig, getDirectiveConfig, isModuleRegister } = require('../helpers/angularJs');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const findTwoWayBinding = pipe(
  propOr([], 'properties'),
  find((binding) => {
    const value = path(['value', 'value'], binding);
    return (value.indexOf('=') > -1);
  })
);

const getScope = pipe(
  getDirectiveConfig,
  getObjectPropertyValue('scope')
);

const getBindings = pipe(
  getComponentConfig,
  getObjectPropertyValue('bindings')
);

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of two way bindings',
      category: 'AngularJS performance issues',
      recommended: true,
      url: 'https://github.com/Ryanair/linters/blob/master/packages/eslint-plugin/docs/rules/no-two-way-binding.md'
    },
    fixable: null,
    messages: {
      noTwoWayBinding: 'Use one way binding and callback functions'
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isModuleRegister('component', node)) {
          const bindings = getBindings(node);
          const twoWayBinding = bindings && findTwoWayBinding(bindings);

          if (twoWayBinding) {
            context.report({ messageId: 'noTwoWayBinding', node: twoWayBinding });
          }
        } else if (isModuleRegister('directive', node)) {
          const scope = getScope(node);
          const twoWayBinding = scope && findTwoWayBinding(scope);

          if (twoWayBinding) {
            context.report({ messageId: 'noTwoWayBinding', node: twoWayBinding });
          }
        }
      }
    };
  }
};
