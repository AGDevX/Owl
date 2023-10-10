import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import replace from '@rollup/plugin-replace';

import env from '../environments/env.local.js';

export default {
	input: 'service-worker/sw.js',
	output: {
		dir: 'src/public',
		format: 'esm'
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify(env.ENVIRONMENT.node),
			preventAssignment: true
		}),
		nodeResolve({
			browser: true
		}),
		commonjs(),
		babel({
			exclude: '**/node_modules/**',
			extensions: ['js'],
			babelHelpers: 'runtime',
			skipPreflightCheck: true,
			presets: [
				[
					'@babel/preset-env',
					{
						corejs: 3,
						useBuiltIns: 'entry',
						targets: {
							esmodules: true
						},
						modules: false
					}
				]
			]
		}),
		terser()
	]
};
