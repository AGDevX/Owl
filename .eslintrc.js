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
		'no-debugger': 'warn'
	}
};
