const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const webpackConfig = require('./webpack.config.js');
const env = require('./environments/env.dev');

module.exports = merge(webpackConfig, {
	mode: env.environment.node,
	stats: 'minimal',
	output: {
		path: path.resolve(__dirname, `./dist/${env.environment.app}`),
		publicPath: env.host.publicPath
	},
	plugins: [
		new HtmlWebpackPlugin({
			base: env.host.publicPath,
			filename: './index.html',
			title: env.appName
		}),
		new FaviconsWebpackPlugin({
			logo: './src/public/assets/logo.svg',
			cache: true,
			inject: true,
			manifest: './src/public/manifest.webmanifest',
			favicons: {
				appName: env.appName,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					favicons: true,
					windows: true,
					yandex: true
				}
			}
		}),
		new FileManagerPlugin({
			events: {
				onEnd: {
					move: [{ source: `./dist/${env.environment.app}/assets/manifest.webmanifest`, destination: `./dist/${env.environment.app}/manifest.webmanifest` }]
				}
			}
		})
	],
	devServer: {
		static: {
			publicPath: env.host.publicPath
		}
	}
});
