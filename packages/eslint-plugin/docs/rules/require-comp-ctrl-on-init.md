# Require use of $onInit in AngularJS component controller (require-comp-ctrl-on-init)

After updating to Angular 1.6 bindings outside `$onInit` and `$onChanges` are not available, so `$onInit` is needed for initialisation code.


## Rule Details

This rule will check existence of $onInit in first level of function in component controller and will not recognise it inside blocks.

Examples of **incorrect** code for this rule:

```js

// No $onInit in component controller
angular.module("someModule").component("name", {
  controller: function() {
    // code initialisation
  }
});

// No $onInit in component controller
angular.module("someModule").component("name", {
  controller: function() {
    if (something) {
      this.$onInit = () => {
        // code initialisation
      };
    }
  }
});

```

Examples of **correct** code for this rule:

```js

angular.module("someModule").component("name", {
  controller: class Name {
    'ngInject';
    constructor(Dependency) {
      Object.assign(this, { Dependency });
    }
    $onInit() {
      // code initialisation
    }
  }
});

angular.module("someModule").component("name", {
  controller: function() {
    this.$onInit = () => {
      // code initialisation
    };
  }
});

```


## When Not To Use It

While not considering updating AngularJS to 1.6 version or above.


## Further Reading

https://toddmotto.com/angular-1-6-is-here
