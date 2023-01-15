module.exports = {
	target: 'web',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		clean: true
	}
};
