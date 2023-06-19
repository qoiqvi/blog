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
  plugins: ['react', 'react-hooks'],
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
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "n/handle-callback-err": 0,
    "i18next/no-literal-string": 0,
    "multiline-ternary": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error", // Checks effect dependencies
    "react/display-name": 0,
    "@typescript-eslint/no-dynamic-delete": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-misused-promises": 0,
    "@typescript-eslint/no-invalid-void-type": 0,
    "promise/param-names": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/restrict-template-expressions": 0
  }
}
