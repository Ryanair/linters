/**
 * @fileoverview Helper functions specific for AngularJS (version 1.X)
 */

const { path, pipe, pathOr, find, prop } = require('ramda');
const { isNamed, findCalleeNamed, getFinalCallee } = require('./ast-utils');

/**
 * @function getComponentConfig
 * @description Gets configuration object from component registration
 * @param {ASTNode} node (CallExpression)
 * @returns {ASTNode} (ObjectExpression)
 */
const getComponentConfig = path(['arguments', '1']);

/**
 * @function getComponentName
 * @description Gets name from component registration
 * @param {ASTNode} node (Literal)
 * @returns {string}
 */
const getComponentName = path(['arguments', '0', 'value']);

/**
 * @function getDirectiveConfig
 * @description Gets configuration object from directive registration,
 * returned in a factory function
 * @param {ASTNode} node (CallExpression)
 * @returns {ASTNode} (ObjectExpression)
 */
const getDirectiveConfig = pipe(
  pathOr([], ['arguments', '1', 'body', 'body']),
  find(el => el.type === 'ReturnStatement'),
  prop('argument')
);

/**
 * @function isModuleRegister
 * @description Checks if CallExpression is a AngularJS module's element registration
 * (ie. angular.module().component())
 * @param {string} element (ie. component, service, controller, directive)
 * @param {ASTNode} node (CallExpression)
 * @returns {boolean}
 */
const isModuleRegister = (element, node) => {
  const property = pathOr({}, ['callee', 'property'], node);
  return isNamed(element, property) && findCalleeNamed('module', node) && isNamed('angular', getFinalCallee(node));
};

module.exports = {
  getComponentConfig,
  getComponentName,
  getDirectiveConfig,
  isModuleRegister
};
