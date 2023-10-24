import fs from 'fs';
import { mergeConfig, defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import copy from 'rollup-plugin-copy';

import env from './environments/env.local';

import { viteConfig } from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		mode: env.ENVIRONMENT.node,
		base: env.HOST.baseHref,
		define: {
			env: JSON.stringify(env)
		},
		build: {
			outDir: `../dist/${env.ENVIRONMENT.app}`,
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
			copy({
				targets: [
					{
						src: './html-templates/offline.html',
						dest: './src/public',
						transform: (contents) =>
							contents
								.toString()
								.replace(/<%= title %>/g, env.APP.name)
								.replace(/<%= description %>/g, env.APP.description)
					},
					{
						src: './html-templates/error.html',
						dest: './src/public',
						transform: (contents) =>
							contents
								.toString()
								.replace(/<%= title %>/g, env.APP.name)
								.replace(/<%= description %>/g, env.APP.description)
					}
				]
			}),
			createHtmlPlugin({
				entry: 'index.jsx',
				inject: {
					data: {
						title: env.APP.name,
						description: env.APP.description
					}
				},
				minify: {
					collapseWhitespace: true,
					keepClosingSlash: true,
					removeComments: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					useShortDoctype: true,
					minifyCSS: true
				}
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
	})
);
