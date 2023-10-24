import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const srcPath = './src';

export const viteConfig = defineConfig({
	root: `${srcPath}`,
	plugins: [
		react({
			include: '**/*.{jsx,tsx}'
		})
	]
});
