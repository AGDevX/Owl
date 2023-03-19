const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

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
	ignoreWarnings: [
		{
			message: /InjectManifest has been called multiple times/i
		}
	],
	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: `${srcPublicPath}/assets`, to: 'assets' },
				{ from: `${srcPublicPath}/error.html`, to: '' },
				{ from: `${srcPublicPath}/manifest.webmanifest`, to: '' },
				{ from: `${srcPublicPath}/offline.html`, to: '' },
				{ from: `${srcPublicPath}/robots.txt`, to: '' }
			]
		}),
		new InjectManifest({
			swSrc: `${srcPublicPath}/sw.js`
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
