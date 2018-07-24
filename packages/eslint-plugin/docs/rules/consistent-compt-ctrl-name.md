# Enforce consistent naming of AngularJS component controller (consistent-compt-ctrl-name)

For some, this is just a matter of preferences, but naming component controllers in one convention makes it clearer to read and forces to useage of named function or Class. Using Classes with capitalised naming (default for this rule), makes it easier to migrate to Angular.


## Rule Details

This rule prevents code mess and different conventions of naming component controller's function/class and easier migration to Angular.

Examples of **incorrect** code for this rule:

```js

// Options set to: [1]
// [WARNING]: Controller should be named "CompName"
angular.module('module').component('compName', {
  controller: class compName {
    // code
  } 
});

// Options set to: [1, { "suffix": "Controller", "includeName": false }]
// [WARNING]: Controller should be named "Controller"
angular.module('module').component('compName', {
  controller: function CompName {
    // code
  } 
});

// Options set to: [1, { "suffix": "Ctrl" }]
// [WARNING]: Controller should be named "compNameCtrl"
angular.module('module').component('compName', {
  controller: class compNameCtrl {
    // code
  } 
});

```

Examples of **correct** code for this rule:

```js

// Options set to: [1]
angular.module('module').component('compName', {
  controller: class CompName {
    // code
  } 
});


// Options set to: [1, { "suffix": "Controller", "includeName": false }]
angular.module('module').component('compName', {
  controller: function Controller {
    // code
  } 
});

// Options set to: [1, { "suffix": "Ctrl" }]
angular.module('module').component('compName', {
  controller: class CompNameCtrl {
    // code
  } 
});

```


## Options schema

Name expectation depends on options and consists of `${prefix}${includeName}${suffix}`

```js

[
  {
    type: 'object',
    properties: {
      prefix: {
        type: 'string'
      },
      includeName: {
        type: 'boolean'
      },
      capitaliseName: {
        type: 'boolean'
      },
      suffix: {
        type: 'string'
      }
    },
    additionalProperties: false
  }
]

```

## When Not To Use It

When you like to keep component controller function in a variable or a different file, or just use anonymous function.

## Further Reading

https://github.com/toddmotto/angularjs-styleguide#controllers
