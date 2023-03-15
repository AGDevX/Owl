//-- ESLint and Yarn 2 aren't compatible with each other out of the box in VS Code
//-- https://stackoverflow.com/questions/59707128/eslint-is-working-from-terminal-but-not-showing-error-in-the-editor-ui-vscode
//-- 	1) https://next.yarnpkg.com/getting-started/editor-sdks
//-- 	2) https://next.yarnpkg.com/advanced/pnpify#vscode-support (not needed)
//-- https://github.com/microsoft/vscode-eslint/issues/601

const eslintLocal = require('./eslint.local');
const eslintLocalRules = eslintLocal[eslintLocal.length - 1].rules;

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		worker: true,
		es2022: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest'
	},
	globals: {
		env: 'readonly'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		...eslintLocalRules
	}
};
