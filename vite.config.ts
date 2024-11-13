import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Font from 'vite-plugin-font';

export default defineConfig({
	plugins: [sveltekit(), Font.vite({ scanFiles: ['src/**/*.svelte', 'post/**/*.md'] })],
	server: {
		fs: {
			allow: ['.']
		}
	}
});
