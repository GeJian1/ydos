module.exports = {
  root: true,
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    jest: true,
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/essential"
  ],
  "plugins": [
    "vue"
  ],
  rules: {
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'import/no-cycle': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'global-require': 0,
    'dot-notation': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-mixed-operators': 0,
    'no-return-await': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'no-restricted-globals': 0,
    'no-empty': [
      2,
      {
        allowEmptyCatch: true,
      },
    ],
    camelcase: 0,
    'max-len': [
      1,
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignorePattern:
          "^(\\s*[a-zA-Z_]+: '[^']+'[,;]*)|(.*require.*)$",
      },
    ],
    'import/prefer-default-export': 0,
    'no-eval': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'max-classes-per-file': 0,
    'prefer-promise-reject-errors': 0,
  },
  globals: {
    t: true,
    globals: true,
    request: true,
  },
}
