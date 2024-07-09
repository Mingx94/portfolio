import type { Post } from '$lib/types/post.js';

export const prerender = true;

export async function load({ fetch }) {
	const postRes = await fetch('/api/posts.json');
	const posts = (await postRes.json()) as Post[];

	const totalRes = await fetch('/api/posts/count');
	const total = await totalRes.json();

	return { posts, total };
}
