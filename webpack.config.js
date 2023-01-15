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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
