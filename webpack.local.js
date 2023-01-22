const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = require('./webpack.config');
const env = require('./environments/env.local');

const srcPublicPath = './src/public';
const distPath = `./dist/${env.ENVIRONMENT.app}`;

module.exports = merge(webpackConfig, {
	mode: env.ENVIRONMENT.node,
	stats: 'minimal',
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, distPath),
		publicPath: env.HOST.baseHref,
		filename: `[name].${env.ENVIRONMENT.app}.[contenthash].js`;
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			base: env.HOST.baseHref,
			template: `${srcPublicPath}/index.html`,
			filename: './index.html',
			title: env.APP.name
		}),
		new webpack.DefinePlugin({ env: JSON.stringify(env) }) //-- stringify to avoid parsing issues (e.g. {"ENVIRONMENT":{"app":local,"node":development},"HOST":{"baseHref":/},"APP":{"name":React Seed (local)},"APP_STATE":{"counter":7}} )
	],
	devServer: {
		static: {
			directory: path.join(__dirname, srcPublicPath)
		},
		historyApiFallback: true,
		open: true
	}
});
