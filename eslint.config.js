//-- This new config works with ES Lint, but it doesn't integrate well with the ES Lint extension yet
//--	Don't use this until it matures. Keep as reference.

//-- https://eslint.org/docs/latest/use/configure/configuration-files-new
//-- https://eslint.org/blog/2022/08/new-config-system-part-2/

import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
	{
		ignores: ['**/*.pnp.loader.mjs']
	},
	reactRecommended,
	reactJsxRuntime,
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		...js.configs.recommended
	},
	{
		languageOptions: {
			...reactRecommended.languageOptions,
			sourceType: 'module',
			ecmaVersion: 'latest',
			parserOptions: {
				ecmaFeatures: { modules: true },
				requireConfigFile: true
			}
		}
	},
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		// rules: {
		// 	...tsPlugin.rules
		// },
		settings: {
			react: {
				version: 'detect'
			}
		}
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.worker,
				...globals.es2022,
				env: 'readonly'
			}
		}
	}
];
