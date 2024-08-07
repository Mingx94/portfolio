import { postsPerPage } from '$lib/config';
import { fetchPosts } from '$lib/api/posts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const options = {
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);
	return json(posts);
};
