import fs from 'fs';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';
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
		assetsDir: '',
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
		}),
		VitePWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true
			},
			manifest: {
				id: 'agdevx.owl',
				name: 'Owl',
				short_name: 'Owl',
				description: 'React starter application',
				start_url: '.',
				orientation: 'any',
				background_color: '#0083d7',
				theme_color: '#0083d7',
				display: 'standalone',
				display_override: ['minimal-ui'],
				icons: [
					{
						src: '/assets/logo.svg',
						sizes: 'any',
						type: 'image/svg+xml',
						purpose: 'maskable any'
					},
					{
						src: '/assets/logo.png',
						sizes: '16x16 24x24 36x36 64x64 72x72 96x96 128x128 192x192 256x256 512x512',
						type: 'image/png',
						purpose: 'maskable any'
					}
				]
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
});
