const eslintConfig = require('./eslint.config.cjs');

module.exports = [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-debugger': 'warn'
		}
	}
];
