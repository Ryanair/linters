# Disallow the use of two way bindings (no-two-way-binding)

Two way binding works fine, until your app gets complex. Since then it may be a serious performance issue. Using it to mutate object in upper scope is also an anti-pattern, making it pretty hard to debug if needed. It's better to make changes through callback function, sending data only one way, from up to bottom.


## Rule Details

This rule will prevent using two-way data bindings in components.

Examples of **incorrect** code for this rule:

```js

// Use one way binding and callback functions
angular.module("someModule").component("name", {
  bindings: {
    prices: '='
  }
});

```

Examples of **correct** code for this rule:

```js

angular.module("someModule").component("name", {
  bindings: {
    prices: '<',
    onPricesUpdate: '&'
  }
});

```


## When Not To Use It

While working on a small prototype / proof of concept app which will be refactored in more mature state.


## Further Reading

https://github.com/toddmotto/angularjs-styleguide#one-way-dataflow-and-events
