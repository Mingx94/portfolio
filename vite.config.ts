import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Font from 'vite-plugin-font';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Font.vite({ scanFiles: ['src/**/*.svelte', 'post/**/*.md'] }),
		Icons({ compiler: 'svelte' })
	],
	server: {
		fs: {
			allow: ['.']
		}
	}
});
