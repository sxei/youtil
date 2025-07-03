const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
    env: {
        jest: true,
    },
    rules: {
        indent: ['warn', 'tab'],
        'guard-for-in': 'off',
        'no-tabs': 'off',
        'no-param-reassign': 'off',
        'no-trailing-spaces': 'warn',
        'no-console': 'off',
        '@typescript-eslint/indent': ['warn', 'tab'],
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@iceworks/best-practices/recommend-polyfill': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'warn',
    },
});
