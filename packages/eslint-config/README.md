# Ryanair linter rules

Common eslint rules used in Ryanair's projects.

## How to use it

```bash
  npx install-peerdeps --dev eslint-config-ryanair
```

Then in your `.eslintrc`

```json
{
  "extends": "eslint-config-ryanair"
}
```

## Format on save

There is an eslint rule to enforce the usage of prettier with some specific
configuration. If you run prettier through your text editor it won't find the
configuration and it will format differently than eslint auto fix option.

In order to fix this, disable format on save for typescript and html files and
leave only eslint auto fix for those types of files.

In VSCode the config looks like this:

```json
{
  "editor.formatOnSave": true,
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[html]": {
    "editor.formatOnSave": false
  },

  "eslint.options": {
    "extensions": [".ts", ".html"]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html"
  ],

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
