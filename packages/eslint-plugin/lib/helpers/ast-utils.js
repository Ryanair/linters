/**
 * @fileoverview Helper functions for AST Nodes
 */

const { curry, pipe, propOr, find, pathEq, prop, propEq } = require('ramda');

/**
 * @function findCalleeNamed
 * @description Looks for callee name in CallExpressions chain
 * @param {string} query name to look for
 * @param {ASTNode} node (MemberExpression|CallExpression|Identifier)
 * @returns {ASTNode|null} callee found (MemberExpression|Identifier) or null if no match
 */
const findCalleeNamed = (query, node) => {
  const { type, object, callee, property } = node;

  switch (type) {
    case 'MemberExpression':
      if (property.name === query) {
        return node;
      }
      return findCalleeNamed(query, object);
    case 'CallExpression':
      return findCalleeNamed(query, callee);
    case 'Identifier':
      if (node.name === query) {
        return node;
      }
      return null;
    default:
      return null;
  }
};

/**
 * @function getFinalCallee
 * @description Returns final callee
 * @param {ASTNode} node (MemberExpression|CallExpression|Identifier)
 * @returns {ASTNode} final callee (Identifier)
 */
const getFinalCallee = (node) => {
  const { type, object, callee } = node;

  switch (type) {
    case 'MemberExpression':
      return getFinalCallee(object);
    case 'CallExpression':
      return getFinalCallee(callee);
    case 'Identifier':
      return node;
    default:
      return {};
  }
};

/**
 * @function getObjectPropertyValue
 * @description Returns value of property in ObjectExpression
 * @param {string} property (ObjectExpression)
 * @param {ASTNode} node (Object expression)
 * @returns {ASTNode|void} property value
 */
const getObjectPropertyValue = curry((property, node) => pipe(
  propOr([], 'properties'),
  find(pathEq(['key', 'name'], property)),
  prop('value')
)(node));

/**
 * @function isFunction
 * @description Checks if AST node is a function (including arrow func.)
 * @param {ASTNode} node
 * @returns {boolean}
 */
const isFunction = node => (
  propEq('type', 'ArrowFunctionExpression', node) || propEq('type', 'FunctionExpression', node)
);

/**
 * @function isClass
 * @description Checks if AST node is a class definition
 * @param {ASTNode} node
 * @returns {boolean}
 */
const isClass = propEq('type', 'ClassExpression');


/**
 * @function isNamed
 * @description Checks if identifier has expected name
 * @param {string} name expected name
 * @param {ASTNode} id (Identifier)
 * @returns {boolean}
 */
const isNamed = curry((name, id) => propEq('name', name, id));

module.exports = {
  findCalleeNamed,
  getFinalCallee,
  getObjectPropertyValue,
  isClass,
  isFunction,
  isNamed
};
