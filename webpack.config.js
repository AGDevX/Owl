const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const srcPublicPath = './src/public';

module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js'
	},
	optimization: {
		splitChunks: {
			maxSize: 200000,
			cacheGroups: {
				commons: {
					test: /node_modules/,
					name: 'vendor',
					chunks: 'initial'
				}
			}
		}
	},
	stats: 'minimal',
	plugins: [
		new ESLintPlugin(),
		new CleanWebpackPlugin(),
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
				test: /\.(js|jsx)$/,
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
