// @ts-check
import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import remarkUnwrapImages from 'remark-unwrap-images';
import shiki from 'shiki';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
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
