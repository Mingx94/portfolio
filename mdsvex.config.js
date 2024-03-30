// @ts-check
import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkUnwrapImages from 'remark-unwrap-images';
import { codeToHtml } from 'shiki';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				await codeToHtml(code, {
					lang,
					theme: 'poimandres'
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	layout: {
		_: './src/lib/markdown/mdsvex.svelte'
	},

	remarkPlugins: [remarkUnwrapImages],
	rehypePlugins: [
		rehypeSlug,
		[rehypeExternalLinks, { rel: 'noopener noreferrer nofollow', target: '_blank' }]
	]
});

export default config;
