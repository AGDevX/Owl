import eslintConfig from './eslint.config.js';

export default [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'error',
			'no-debugger': 'error'
		}
	}
];
