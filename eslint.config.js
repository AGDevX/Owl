//-- This new config works with ES Lint, but it doesn't integrate well with the ES Lint extension yet
//--	Don't use this until it matures. Keep as reference.

//-- https://eslint.org/docs/latest/use/configure/configuration-files-new
//-- https://eslint.org/blog/2022/08/new-config-system-part-2/

import globals from 'globals';
import js from '@eslint/js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
	{
		ignores: ['**/*.pnp.loader.mjs']
	},
	js.configs.recommended,
	reactRecommended,
	reactJsxRuntime,
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		languageOptions: {
			...reactRecommended.languageOptions,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				requireConfigFile: true
			},
			globals: {
				...globals.browser,
				...globals.node,
				...globals.worker,
				...globals.es2022,
				env: 'readonly'
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
