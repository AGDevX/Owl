const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const srcPublicPath = './src/public';

module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js'
	},
	output: {
		clean: true
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			maxSize: 200000
		}
	},
	plugins: [
		new ESLintPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: `${srcPublicPath}/assets`, to: 'assets' },
				{ from: `${srcPublicPath}/manifest.webmanifest`, to: '' },
				{ from: `${srcPublicPath}/robots.txt`, to: '' }
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
