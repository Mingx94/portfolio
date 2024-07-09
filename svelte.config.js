import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { codeToHtml } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			highlight: {
				highlighter: async (code, lang) => {
					const html = escapeSvelte(
						await codeToHtml(code, {
							lang: lang || 'text',
							theme: 'poimandres'
						})
					);
					return `{@html \`${html}\` }`;
				}
			},

			remarkPlugins: [remarkUnwrapImages],
			rehypePlugins: [
				rehypeSlug,
				[rehypeExternalLinks, { rel: 'noopener noreferrer nofollow', target: '_blank' }],
				rehypeAutolinkHeadings
			]
		})
	],

	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		inlineStyleThreshold: 3000,
	}
};

export default config;
