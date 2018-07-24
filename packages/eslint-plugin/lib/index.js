/**
 * @fileoverview Ryanair custom eslint rules
 * @author Patryk Galuszka
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + '/rules'); /* eslint-disable-line prefer-template, no-path-concat */
