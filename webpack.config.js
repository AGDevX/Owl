const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		clean: true
	},
	plugins: [new ESLintPlugin()],
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
