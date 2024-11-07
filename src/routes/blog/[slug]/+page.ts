import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ params: { slug } }) {
	try {
		const post = await import(`../../../../posts/${slug}/${slug}.md`);

		return {
			content: post.default,
			meta: { ...post.metadata, slug: slug } as Post
		};
	} catch (e) {
		error(404, `Post does not exist`);
	}
}
