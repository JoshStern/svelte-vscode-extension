import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: '../dist/webview',
		emptyOutDir: true,
		lib: {
			entry: path.resolve(__dirname, 'src/entry/main.ts'),
			name: 'CustomEdit',
			formats: ['umd']
		},
		sourcemap: 'inline',
	},
	plugins: [svelte()]
});
