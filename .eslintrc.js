module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['react'],
  settings: {
    'react': {
      "version": "detect"
    }
  },
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'react/jsx-indent': 0,
    'indent': 0,
    'quote-props': 0,
    'quotes': 0,
    'comma-dangle': 0,
    'strict-boolean-expressions': 0,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    'strict-boolean-expression': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    "@typescript-eslint/comma-dangle": 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/indent': 0,
    'no-tabs': 0,
    "no-unused-expressions": "off",
    "@typescript-eslint/no-confusing-void-expression": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    'i18next/no-literal-string': [2, {
      markupOnly: true
    }],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "n/handle-callback-err": 0,
    "i18next/no-literal-string": [2, { "ignoreAttribute": ["data-testid"] }]
  }
};