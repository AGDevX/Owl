const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const webpackConfig = require('./webpack.config');
const env = require('./environments/env.local');

const srcPublicPath = './src/public';
const distPath = `./dist/${env.environment.app}`;

module.exports = merge(webpackConfig, {
	mode: env.environment.node,
	stats: 'minimal',
	devtool: 'eval-cheap-source-map',
	output: {
		path: path.resolve(__dirname, distPath),
		publicPath: env.host.publicPath
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			base: env.host.publicPath,
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
					copy: [{ source: `${srcPublicPath}/robots.txt`, destination: `${distPath}/robots.txt` }],
					move: [{ source: `${distPath}/assets/manifest.webmanifest`, destination: `${distPath}/manifest.webmanifest` }]
				}
			}
		})
	],
	devServer: {
		historyApiFallback: true,
		static: {
			publicPath: env.host.publicPath
		}
	}
});
