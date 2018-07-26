# Disallow use of preAssignBindingsEnabled (no-pre-assign-bindings-enabled)

Since AngularJS 1.6 bindings are not available outside component controller's `$onInit`. Invoking `$compileProvider.preAssignBindingsEnabled(false)` may be a temporary fix, but should be treated like hack, while is deprecated in AngularJS 1.7. It's not needed after moving initialisation code to `$onInit`.


## Rule Details

This rule will prevent using deprecated method and issues with bindings not working in component controller.

Examples of **incorrect** code for this rule:

```js

// Flag is deprecated by Angular 1.7
$compileProvider.preAssignBindingsEnabled()
$compileProvider.preAssignBindingsEnabled(false)

// Auto-bindings are not supported by Angular 1.7
$compileProvider.preAssignBindingsEnabled(true)

```

Examples of **correct** code for this rule:

```js

angular.module('myModule')
  .component('myComponent', {
    ...
    bindings: {
      myBinding: '<'
    },
    controller: class myComponentCtrl {
      $onInit() {
        // here access this.myBinding safely
      }
    }
  });

```


## When Not To Use It

While not using in project AngularJS, or not considering updating to 1.6 version or above.


## Further Reading

https://toddmotto.com/angular-1-6-is-here
