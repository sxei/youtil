import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			// 强制使用 Tab 缩进，空格缩进将报错
			'indent': ['error', 'tab'],
			// 如果采用tab模式的话，下面这个规则有问题，不能开启
			// '@typescript-eslint/indent': ['error', 'tab'],
		}
	}
]);
