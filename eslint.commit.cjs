const eslintConfig = require('./eslint.config.cjs');

module.exports = [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'error',
			'no-debugger': 'error'
		}
	}
];
