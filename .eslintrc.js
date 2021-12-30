module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parserOptions: {
    "ecmaVersion": 2017,
  },
  extends: [
  ],
  // required to lint *.vue files
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
  },
};
