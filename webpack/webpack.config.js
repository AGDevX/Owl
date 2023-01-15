const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	target: 'web',
	mode: 'development',
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
		})
	],
	devServer: {
		static: {
			publicPath: '/'
		}
	}
};
