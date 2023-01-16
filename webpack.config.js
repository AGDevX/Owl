module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		clean: true
	},
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
