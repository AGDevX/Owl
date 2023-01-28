//-- https://eslint.org/docs/latest/use/configure/configuration-files-new
//-- https://eslint.org/blog/2022/08/new-config-system-part-2/

//-- ESLint and Yarn 2 aren't compatible with each other out of the box in VS Code
//-- https://stackoverflow.com/questions/59707128/eslint-is-working-from-terminal-but-not-showing-error-in-the-editor-ui-vscode
//-- 	1) https://next.yarnpkg.com/advanced/pnpify#vscode-support
//-- 	2) https://next.yarnpkg.com/getting-started/editor-sdks
//-- https://github.com/microsoft/vscode-eslint/issues/601

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
