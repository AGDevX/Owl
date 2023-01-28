const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const webpackConfig = require('./webpack.config');
const env = require('./environments/env.local');

const srcPublicPath = './src/public';
const distPath = `./dist/${env.ENVIRONMENT.app}`;

module.exports = merge(webpackConfig, {
	mode: env.ENVIRONMENT.node,
	output: {
		path: path.resolve(__dirname, distPath),
		publicPath: env.HOST.baseHref,
		filename: `[name].${env.ENVIRONMENT.app}.[contenthash].js`
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			xhtml: true,
			template: `${srcPublicPath}/index.html`,
			base: env.HOST.baseHref,
			title: env.APP.name,
			description: env.APP.description,
			minify: {
				caseSensitive: false,
				collapseBooleanAttributes: false,
				collapseInlineTagWhitespace: false,
				collapseWhitespace: false,
				conservativeCollapse: true,
				continueOnParseError: false,
				html5: true,
				includeAutoGeneratedTags: true,
				keepClosingSlash: false,
				minifyCSS: false,
				minifyJS: false,
				minifyURLs: false,
				noNewlinesBeforeTagClose: true,
				preserveLineBreaks: true,
				preventAttributesEscaping: false,
				quoteCharacter: "'",
				removeAttributeQuotes: false,
				removeComments: false,
				removeEmptyAttributes: false,
				removeEmptyElements: false,
				removeOptionalTags: false,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: false,
				removeStyleLinkTypeAttributes: false,
				removeTagWhitespace: false,
				sortAttributes: false,
				sortClassName: false,
				trimCustomFragments: false,
				useShortDoctype: true
			}
		}),
		new webpack.DefinePlugin({ env: JSON.stringify(env) }) //-- stringify to avoid parsing issues (e.g. {"ENVIRONMENT":{"app":local,"node":development},"HOST":{"baseHref":/},"APP":{"name":React Seed (local)},"APP_STATE":{"counter":7}} )
	],
	devServer: {
		static: {
			directory: path.join(__dirname, srcPublicPath)
		},
		https: {
			key: fs.readFileSync('./localSsl/key.pem'),
			cert: fs.readFileSync('./localSsl/cert.pem')
		},
		historyApiFallback: true,
		open: true
	}
});
