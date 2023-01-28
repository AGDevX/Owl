//-- This new config works with ES Lint, but it doesn't integrate well with the ES Lint extension yet
//--	Don't use this until it matures. Keep as reference.

//-- https://eslint.org/docs/latest/use/configure/configuration-files-new
//-- https://eslint.org/blog/2022/08/new-config-system-part-2/

const globals = require('globals');
const babelParser = require('@babel/eslint-parser');
const reactRecommended = require('eslint-plugin-react/configs/recommended');
const reactJsxRuntime = require('eslint-plugin-react/configs/jsx-runtime');

module.exports = [
	{
		ignores: ['**/*.pnp.loader.mjs']
	},
	'eslint:recommended',
	reactRecommended,
	reactJsxRuntime,
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		languageOptions: {
			...reactRecommended.languageOptions,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: babelParser,
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
		},
		rules: {
			'no-debugger': 'warn',
			'no-unused-vars': 'error'
		}
	}
];
