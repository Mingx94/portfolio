// @ts-check
import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import shiki from 'shiki';
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

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
		_: './src/lib/layout/mdsvex.svelte'
	},

	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
});

export default config;
