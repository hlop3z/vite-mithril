// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import babel from 'vite-plugin-babel';

export default defineConfig({
	plugins: [babel()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@static': fileURLToPath(new URL('./static', import.meta.url)),
		},
	},
	build: {
		lib: {
			name: 'MyLib',
			entry: resolve(__dirname, 'src/app.js'),
			fileName: 'lib',
		},
	},
});
