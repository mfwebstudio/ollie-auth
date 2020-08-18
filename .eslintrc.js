module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  plugins: ['import', 'prettier', 'jest'],
  rules: {
    strict: 0,
    indent: 0,
    quotes: [2, 'single', { "avoidEscape": true }],
    semi: [2, 'always'],
    'global-require': 0,
    'max-len': [2, { code: 120, ignoreUrls: true, ignoreComments: true }],
    'comma-dangle': [2, 'never'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'spaced-comment': [2, 'always'],
    'template-tag-spacing': 2,
    eqeqeq: [
      2,
      'always',
      {
        null: 'ignore'
      }
    ],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: ['block', 'block-like', 'for', 'if', 'try', 'while', 'function']
      }
    ],
    'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
    'arrow-parens': [2, 'as-needed'],
    radix: [1, 'as-needed'],
    'block-spacing': 2,
    'space-before-blocks': 2,
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'no-bitwise': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'no-extra-semi': 2,
    'no-multi-spaces': 2,
    'no-trailing-spaces': 2,
    'keyword-spacing': 2,
    'arrow-spacing': 2,
    'semi-spacing': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-redeclare': 2,
    'no-undef': 2,
    'object-curly-newline': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      plugins: ['react', 'prettier', 'jest', '@typescript-eslint'],
      extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        strict: 0,
        indent: 0,
        quotes: [2, 'single'],
        semi: [2, 'always'],
        'global-require': 0,
        'max-len': [2, { code: 120, ignoreUrls: true, ignoreComments: true }],
        'comma-dangle': [2, 'never'],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'spaced-comment': [2, 'always'],
        'template-tag-spacing': 2,
        eqeqeq: [
          2,
          'always',
          {
            null: 'ignore'
          }
        ],
        'padding-line-between-statements': [
          2,
          {
            blankLine: 'always',
            prev: '*',
            next: ['block', 'block-like', 'for', 'if', 'try', 'while', 'function']
          }
        ],
        'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
        'arrow-parens': [2, 'as-needed'],
        radix: [1, 'as-needed'],
        'block-spacing': 2,
        'space-before-blocks': 2,
        'no-plusplus': 0,
        'class-methods-use-this': 0,
        'no-bitwise': 0,
        'no-return-assign': 0,
        'no-param-reassign': 0,
        'no-unused-expressions': 0,
        'no-shadow': 0,
        'no-extra-semi': 2,
        'no-multi-spaces': 2,
        'no-trailing-spaces': 2,
        'keyword-spacing': 2,
        'arrow-spacing': 2,
        'semi-spacing': 2,
        'no-unused-vars': 2,
        'no-use-before-define': 2,
        'no-redeclare': 2,
        'no-undef': 2,
        'object-curly-newline': 0,
        'consistent-return': 0,
        'no-underscore-dangle': 0,
        'operator-linebreak': 0,
        'implicit-arrow-linebreak': 0,
        'react/prop-types': 0,
        'react/button-has-type': 0,
        'react/destructuring-assignment': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
        'react/jsx-indent-props': [2, 2],
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/no-unescaped-entities': 0,
        'react/no-array-index-key': 0,
        'react/style-prop-object': 0,
        'react/forbid-elements': [2, { forbid: ['a'] }]
      }
    }
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      },
      "babel-module": {}
    }
  }
};
