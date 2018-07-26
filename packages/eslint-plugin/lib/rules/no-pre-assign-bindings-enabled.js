/**
 * @fileoverview Disallow use of preAssignBindingsEnabled
 * @author Patryk Galuszka
 */

const { isNamed } = require('../helpers/ast-utils');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of preAssignBindingsEnabled',
      category: 'AngularJS 1.7 migration',
      recommended: true
    },
    fixable: null,
    messages: {
      flagDeprecated: 'Flag is deprecated by Angular 1.7',
      avoidReEnabling: 'Auto-bindings are not supported by Angular 1.7'
    },
    schema: []
  },

  create(context) {
    return {
      CallExpression(node) {
        const [argument] = node.arguments;
        const { callee } = node;
        const { object, property } = callee;

        if (!object || !property) {
          return;
        }

        if (isNamed('$compileProvider', object) && isNamed('preAssignBindingsEnabled', property)) {
          if (argument && argument.value === true) {
            context.report({ messageId: 'avoidReEnabling', node: argument });
            return;
          }
          context.report({ messageId: 'flagDeprecated', node: property });
        }
      }
    };
  }
};
