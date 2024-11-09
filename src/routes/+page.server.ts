import type { Post } from '$lib/types';
import { fetchJSON } from '$lib/utils';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const posts = await fetchJSON<Post[]>('/api/posts', fetch);
		const publishedPosts = posts.filter(({ draft }) => !draft);
		let year = 0;
		const withPrintYear = publishedPosts.map((post) => {
			const currentYear = new Date(post.published).getFullYear();
			if (currentYear !== year) {
				year = currentYear;
				return { ...post, printYear: true };
			}
			return { ...post, printYear: false };
		});

		return { posts: withPrintYear };
	} catch (e) {
		error(404, (e as Error).message);
	}
}
