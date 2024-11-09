import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sequence, preprocessMeltUI } from '@melt-ui/pp';
import markdown from './src/lib/markdown.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: sequence([markdown(), vitePreprocess(), preprocessMeltUI()]),

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'ctrl-shift',
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right'
		}
	}
};

export default config;
