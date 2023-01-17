const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const webpackConfig = require('./webpack.config');
const env = require('./environments/env.local');

const srcPublicPath = './src/public';
const distPath = `./dist/${env.ENVIRONMENT.app}`;

module.exports = merge(webpackConfig, {
	mode: env.ENVIRONMENT.node,
	stats: 'minimal',
	devtool: 'eval-cheap-source-map',
	output: {
		path: path.resolve(__dirname, distPath),
		publicPath: env.HOST.publicPath
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			base: env.HOST.publicPath,
			template: `${srcPublicPath}/index.html`,
			filename: './index.html',
			title: env.appName
		}),
		new FaviconsWebpackPlugin({
			logo: `${srcPublicPath}/assets/logo.svg`,
			cache: true,
			inject: true,
			manifest: `${srcPublicPath}/manifest.webmanifest`,
			favicons: {
				appName: env.APP.name,
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
					copy: [{ source: `${srcPublicPath}/robots.txt`, destination: `${distPath}/robots.txt` }],
					move: [{ source: `${distPath}/assets/manifest.webmanifest`, destination: `${distPath}/manifest.webmanifest` }]
				}
			}
		}),
		new webpack.DefinePlugin({ env: JSON.stringify(env) }) //-- stringify to avoid parsing issues (e.g. {"ENVIRONMENT":{"app":local,"node":development},"HOST":{"publicPath":/},"APP":{"name":React Seed (local)},"APP_STATE":{"counter":7}} )
	],
	devServer: {
		historyApiFallback: true,
		open: true,
		static: {
			publicPath: env.HOST.publicPath
		}
	}
});
