module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:react/jsx-runtime'
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: 'tsconfig.json'
    },
    plugins: [
        'react'
    ],
    settings: {
        "react": {
            "version": "detect"
        }
    },
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'react/jsx-indent': 0,
        'indent': 0,
        'quote-props': [1, 'consistent-as-needed'],
        'strict-boolean-expressions': 0,
        'import/prefer-default-export': 0,
        'no-multiple-empty-lines': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        'strict-boolean-expression': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/explicit-function-return-type': 0
        // 'allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing': 0
    }
}
