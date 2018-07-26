# Prefer use of class for AngularJS component controller (prefer-comp-ctrl-class)

Using ES6 Class syntax insted a function introduce more readability when using methods and makes it easier to rewrite component to Angular component.


## Rule Details

This rule will prevent using functions as controllers, prefering Class.

Examples of **incorrect** code for this rule:

```js

// Use one way binding and callback functions
angular.module("someModule").component("name", {
  controller: function(Dependency) {
    this.$onInit = () => {
      this.something = Dependency.getSomething();
    // code initialisation
    };
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
      const { Dependency } = this;

      this.something = Dependency.getSomething();
    }
  }
});

```


## When Not To Use It

Only if you don't consider migration.


## Further Reading

https://github.com/toddmotto/angularjs-styleguide#controllers
