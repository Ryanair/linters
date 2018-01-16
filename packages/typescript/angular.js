module.exports = {
  "extends": [
    "./index.js"
  ],
  "rulesDirectory": [
    "codelyzer"
  ],
  "rules": {
    "component-class-suffix": true,
    // "component-selector": [true, "element", "my", "kebab-case"],
    "directive-class-suffix": true,
    // "directive-selector": [true, "attribute", "my", "camelCase"],
    "import-destructuring-spacing": true,
    "no-attribute-parameter-decorator": true,
    "no-forward-ref": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "no-shadowed-variable": true,
    // "pipe-naming": [true, "camelCase", "my"],
    "use-host-property-decorator": true,
    "use-input-property-decorator": true,
    "use-life-cycle-interface": true,
    "use-output-property-decorator": true,
    "use-pipe-transform-interface": true,
  }
};
