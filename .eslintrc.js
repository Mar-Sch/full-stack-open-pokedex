module.exports = {
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest/globals": true,
    "browser": true
  },
  "globals": {
    "cy": false,
    "Cypress": false,
    "describe": false,
    "context": false,
    "beforeEach": false,
    "afterEach": false,
    "it": false,
    "assert": false,
    "expect": false
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
          "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          "message": "Unexpected property on console object was called"
      }
    ],
    "react/prop-types": 0
  }
}
