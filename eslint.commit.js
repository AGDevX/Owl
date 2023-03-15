const eslintConfig = require('./eslint.config');

module.exports = [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'error',
			'no-debugger': 'error'
		}
	}
];
