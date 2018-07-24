# Prefer use of component over element directive (no-element-directive)

Since AngularJS 1.5 introduced components synactic sugar for element directives, it should be used instead. Components use best practices, such as isolated scope and consistent naming for controller in templates. While using components, it's also easier to migrate from AngularJS to Angular.


## Rule Details

This rule will prevent using element directives in order to migrate easier.

Examples of **incorrect** code for this rule:

```js

// Use component rather than element directive
angular.module("someModule").directive('ctLocSelector', function ctLocSelector() {
  return {
    restrict: 'E'
  }
});

```

Examples of **correct** code for this rule:

```js

angular.module("mod").component("name", {
  controller: class nameCtrl {
    // code
  } 
});

```


## When Not To Use It

Just use it. Always.


## Further Reading

https://docs.angularjs.org/guide/component
https://angular.io/guide/upgrade
