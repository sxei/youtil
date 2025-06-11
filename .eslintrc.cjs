const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
    env: {
        jest: true,
    },
    rules: {
        indent: ['warn', 4],
        'guard-for-in': 'off',
        'no-param-reassign': 'off',
        'no-trailing-spaces': 'warn',
        'no-console': 'off',
        '@typescript-eslint/indent': ['warn', 4],
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@iceworks/best-practices/recommend-polyfill': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'warn',
    },
});
