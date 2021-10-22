/* eslint-disable node/no-unpublished-require */

/**
 * @fileoverview Disallow imports from barrel files.
 * @author Rodrigo Fernandes da Costa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-barrel-imports");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

ruleTester.run("no-barrel-imports", rule, {
  valid: [
    {
      filename: "tests/lib/rules/no-barrel-imports/sample.module.ts",
      code: "import { SampleComponent } from './components/sample.component';",
    },
  ],
  invalid: [
    {
      filename: "tests/lib/rules/no-barrel-imports/sample.module.ts",
      code: "import { SampleComponent } from './components';",
      errors: [{ message: "Import from barrel file." }],
    },
  ],
});
