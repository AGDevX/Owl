const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist'),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './src/public/index.html',
			title: 'React Seed'
		})
	]
};
