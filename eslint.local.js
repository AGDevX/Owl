const eslintConfig = require('./eslint.config');

module.exports = [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-debugger': 'warn'
		}
	}
];
