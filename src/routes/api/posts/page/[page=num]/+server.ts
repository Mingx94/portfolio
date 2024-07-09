import { postsPerPage } from '$lib/config';
import { fetchPosts } from '$lib/api/posts';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const page = +params.page || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
};
