module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "no-console": "off",
    'linebreak-style': 0,
    'semi':0,
    'consistent-return':0,
    'no-plusplus': 'off',
    "prefer-arrow-callback": "off",
    "prefer-destructuring": "off",
    "object-shorthand": 0
  },
};
