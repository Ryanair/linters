/**
 * @fileoverview Disallow imports from barrel files.
 * @author Rodrigo Fernandes da Costa
 */
"use strict";

const fs = require("fs");
const path = require("path");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow imports from barrel files.",
      category: "Angular compiler issues",
      recommended: true,
      url: "https://github.com/Ryanair/linters/blob/master/packages/eslint-plugin-ryanair/docs/rules/no-barrel-imports.md",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    const file = context.getFilename();

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    const isFolder = (file) => {
      try {
        return fs.statSync(file).isDirectory();
      } catch (error) {
        return false;
      }
    };

    const shouldIgnore = (file) =>
      file.endsWith(".spec.ts") ||
      file.endsWith("index.ts") ||
      file.endsWith("public_api.ts") ||
      file.includes("stories");

    const resolveImport = (file, importPath) => {
      const target = path.resolve(path.dirname(file), importPath);

      if (isFolder(target)) {
        return `${target}/index.ts`;
      }

      return `${target}.ts`;
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    if (shouldIgnore(file)) {
      return {};
    }

    return {
      ImportDeclaration(node) {
        const importPath = node.source.value;
        const importFile = resolveImport(file, importPath);

        if (importFile.endsWith("index.ts")) {
          context.report({
            message: "Import from barrel file.",
            node: node.source,
          });
        }
      },
    };
  },
};
