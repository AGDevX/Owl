import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

export default {
	input: 'service-worker/sw.js',
	output: {
		dir: 'src/public',
		format: 'esm'
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
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
