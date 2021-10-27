# Disallow imports from barrel files. (no-barrel-imports)

[Angular compiler](https://angular.io/guide/aot-compiler) can fail to compile your code if there are imports from barrel files, specially if you are using those imports in module files. See [AOT: Unexpected value 'undefined' exported by the module when using barrel index.ts](https://github.com/ng-packagr/ng-packagr/issues/917).

## Setup

This rule takes no configuration parameters.

```json
{
  "eslintConfig": {
    "rules": {
      "ryanair/no-barrel-imports": "error"
    }
  }
}
```

## Rule Details

Examples of **incorrect** code for this rule:

```js
import { NgModule } from "@angular/core";

import { SampleComponent } from "./components"; // Import from barrel file

@NgModule({
  declarations: [SampleComponent],
  exports: [SampleComponent],
})
export class SampleModule {}
```

Examples of **correct** code for this rule:

```js
import { NgModule } from "@angular/core";

import { SampleComponent } from "./components/sample.component"; // Import from the actual file

@NgModule({
  declarations: [SampleComponent],
  exports: [SampleComponent],
})
export class SampleModule {}
```
