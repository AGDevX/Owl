import eslintConfig from './eslint.config.js';

export default [
	...eslintConfig,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-debugger': 'warn'
		}
	}
];
