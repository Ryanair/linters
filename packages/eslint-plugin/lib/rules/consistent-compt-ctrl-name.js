/**
 * @fileoverview Enforce consistent naming of AngularJS component controller
 * @author Patryk Galuszka
 */
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { pipe, pathEq } = require('ramda');
const { getObjectPropertyValue, isClass, isFunction } = require('../helpers/ast-utils');
const { getComponentConfig, getComponentName, isModuleRegister } = require('../helpers/angularJs');

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const getController = pipe(
  getComponentConfig,
  getObjectPropertyValue('controller')
);

const capitalise = string => `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

const getExpectedName = (componentName, namePattern = {}) => {
  const {
    capitaliseName = true,
    prefix = '',
    includeName = true,
    suffix = ''
  } = namePattern;
  const name = capitaliseName ? capitalise(componentName) : componentName;
  const nameByPattern = `${prefix}${includeName ? name : ''}${suffix}`;

  return nameByPattern;
};

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Enforce consistent naming of AngularJS component controller',
      category: 'AngularJS stylistic issues',
      recommended: true
    },
    fixable: null,
    messages: {
      noConsistentNaming: 'Controller should be named "{{ expectedName }}"'
    },
    schema: [
      {
        type: 'object',
        properties: {
          prefix: {
            type: 'string'
          },
          includeName: {
            type: 'boolean'
          },
          capitaliseName: {
            type: 'boolean'
          },
          suffix: {
            type: 'string'
          }
        },
        additionalProperties: false
      }
    ]
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isModuleRegister('component', node)) {
          const [namePattern] = context.options;
          const componentName = getComponentName(node);
          const controller = getController(node);
          const expectedName = getExpectedName(componentName, namePattern);

          if (controller && (isFunction(controller) || isClass(controller))) {
            if (!pathEq(['id', 'name'], expectedName, controller)) {
              context.report({
                messageId: 'noConsistentNaming',
                data: {
                  expectedName
                },
                node: (controller.id || controller)
              });
            }
          }
        }
      }
    };
  }
};
