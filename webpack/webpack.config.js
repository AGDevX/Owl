const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	target: 'web',
	mode: 'development',
	stats: 'minimal',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			base: '/',
			filename: './index.html',
			title: 'React Seed'
		}),
		new FaviconsWebpackPlugin({
			logo: './src/public/assets/logo.svg',
			mode: 'webapp',
			devMode: 'webapp',
			cache: true,
			inject: true,
			manifest: './src/public/manifest.webmanifest',
			favicons: {
				appName: 'React Seed',
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
					move: [{ source: './dist/assets/manifest.webmanifest', destination: './dist/manifest.webmanifest' }]
				}
			}
		})
	],
	devServer: {
		static: {
			publicPath: '/'
		}
	}
};
