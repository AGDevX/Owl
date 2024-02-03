import react from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';

const srcPath = './src';

export const viteConfig = defineConfig({
	root: `${srcPath}`,
	plugins: [
		react({
			include: '**/*.{jsx,tsx}'
		})
	],
	resolve: {
		alias: {
			apis: `${path.resolve(__dirname, './src/apis/')}`,
			auth: `${path.resolve(__dirname, './src/auth/')}`,
			content: `${path.resolve(__dirname, './src/content/')}`,
			environments: `${path.resolve(__dirname, './environments/')}`,
			libs: `${path.resolve(__dirname, './src/libs/')}`,
			public: `${path.resolve(__dirname, './src/public/')}`,
			routing: `${path.resolve(__dirname, './src/routing/')}`,
			services: `${path.resolve(__dirname, './src/services/')}`,
			state: `${path.resolve(__dirname, './src/state/')}`,
			structure: `${path.resolve(__dirname, './src/structure/')}`
		}
	}
});
