import fs from 'fs';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

import env from './environments/env.local';

const srcPath = './src';

export default defineConfig({
	target: 'modules',
	mode: env.ENVIRONMENT.node,
	root: `${srcPath}`,
	base: env.HOST.baseHref,
	define: {
		env: JSON.stringify(env)
	},
	build: {
		outDir: '../dist',
		rollupOptions: {
			output: {
				entryFileNames: `app-${env.ENVIRONMENT.app}-[name]-[hash].js`,
				assetFileNames: `app-${env.ENVIRONMENT.app}-[name]-[hash].css`,
				chunkFileNames: `chunk-${env.ENVIRONMENT.app}-[name]-[hash].js`
			}
		},
		sourcemap: true
	},
	plugins: [
		createHtmlPlugin({
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyCSS: true
			},
			entry: 'index.jsx',
			inject: {
				data: {
					title: env.APP.name,
					description: env.APP.description
				}
			}
		}),
		react({
			include: '**/*.{jsx,tsx}'
		})
	],
	server: {
		host: env.HOST.name,
		port: env.HOST.port,
		https: {
			key: fs.readFileSync('./localSsl/key.pem'),
			cert: fs.readFileSync('./localSsl/cert.pem')
		},
		open: '/'
	}
});
